using Furion.DatabaseAccessor;
using Furion.DependencyInjection;
using Microsoft.EntityFrameworkCore;

namespace Furion.Extras.Admin.NET.Service
{
    /// <summary>
    /// 用户角色服务
    /// </summary>
    public class SysUserRoleService : ISysUserRoleService, ITransient
    {
        private readonly IRepository<SysUserRole> _sysUserRoleRep;  // 用户权限表仓储

        private readonly ISysRoleService _sysRoleService;

        public SysUserRoleService(IRepository<SysUserRole> sysUserRoleRep, ISysRoleService sysRoleService)
        {
            _sysUserRoleRep = sysUserRoleRep;
            _sysRoleService = sysRoleService;
        }

        /// <summary>
        /// 获取用户的角色Id集合
        /// </summary>
        /// <param name="userId"></param>
        /// <param name="checkRoleStatus"></param>
        /// <returns></returns>
        public async Task<List<long>> GetUserRoleIdList(long userId, bool checkRoleStatus = true)
        {
            return await _sysUserRoleRep
                // 检查role状态，跳过全局tenantId&delete过滤器，超级管理员使用
                .Where(!checkRoleStatus, u => u.SysRole.Status == CommonStatus.ENABLE && !u.SysRole.IsDeleted, ignoreQueryFilters: true)
                // 当不是超级管理员的时候检查role状态和全局tenantId&delete过滤器
                .Where(checkRoleStatus, u => u.SysRole.Status == CommonStatus.ENABLE)
                .Where(u => u.SysUserId == userId)
                .Select(u => u.SysRoleId)
                .ToListAsync();
        }

        /// <summary>
        /// 授权用户角色
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [UnitOfWork]
        public async Task GrantRole(UpdateUserRoleDataInput input)
        {
            var userRoles = await _sysUserRoleRep.Where(u => u.SysUserId == input.Id).ToListAsync();
            await _sysUserRoleRep.DeleteAsync(userRoles);

            var roles = input.GrantRoleIdList.Select(u => new SysUserRole
            {
                SysUserId = input.Id,
                SysRoleId = u
            }).ToList();
            await _sysUserRoleRep.InsertAsync(roles);
        }

        /// <summary>
        /// 获取用户所有角色的数据范围（组织机构Id集合）
        /// </summary>
        /// <param name="userId"></param>
        /// <param name="orgId"></param>
        /// <returns></returns>
        public async Task<List<long>> GetUserRoleDataScopeIdList(long userId, long orgId)
        {
            var roleIdList = await GetUserRoleIdList(userId);

            // 获取这些角色对应的数据范围
            if (roleIdList.Count > 0)
                return await _sysRoleService.GetUserDataScopeIdList(roleIdList, orgId);

            return roleIdList;
        }

        /// <summary>
        /// 根据角色Id删除对应的用户-角色表关联信息
        /// </summary>
        /// <param name="roleId"></param>
        /// <returns></returns>
        public async Task DeleteUserRoleListByRoleId(long roleId)
        {
            var userRoles = await _sysUserRoleRep.Where(u => u.SysRoleId == roleId).ToListAsync();
            await _sysUserRoleRep.DeleteAsync(userRoles);
        }

        /// <summary>
        /// 根据用户Id删除对应的用户-角色表关联信息
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public async Task DeleteUserRoleListByUserId(long userId)
        {
            var surList = await _sysUserRoleRep.AsQueryable(m => m.SysUserId == userId, false).ToListAsync();
            await _sysUserRoleRep.DeleteAsync(surList);
        }
    }
}