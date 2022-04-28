﻿using SqlSugar;
using System.ComponentModel.DataAnnotations;

namespace Admin.NET.Core
{
    /// <summary>
    /// 代码生成表
    /// </summary>
    [SugarTable("sys_code_gen", "代码生成表")]
    [SqlSugarEntity]
    public class SysCodeGen : EntityBase
    {
        /// <summary>
        /// 作者姓名
        /// </summary>
        [MaxLength(20)]
        [SugarColumn(ColumnDescription = "作者姓名")]
        public string AuthorName { get; set; }

        /// <summary>
        /// 是否移除表前缀
        /// </summary>
        [MaxLength(5)]
        [SugarColumn(ColumnDescription = "是否移除表前缀")]
        public string TablePrefix { get; set; }

        /// <summary>
        /// 生成方式
        /// </summary>
        [MaxLength(20)]
        [SugarColumn(ColumnDescription = "生成方式")]
        public string GenerateType { get; set; }

        /// <summary>
        /// 数据库表名
        /// </summary>
        [MaxLength(100)]
        [SugarColumn(ColumnDescription = "数据库表名")]
        public string TableName { get; set; }

        /// <summary>
        /// 命名空间
        /// </summary>
        [MaxLength(100)]
        [SugarColumn(ColumnDescription = "命名空间")]
        public string NameSpace { get; set; }

        /// <summary>
        /// 业务名
        /// </summary>
        [MaxLength(100)]
        [SugarColumn(ColumnDescription = "业务名")]
        public string BusName { get; set; }

        /// <summary>
        /// 菜单编码
        /// </summary>
        [SugarColumn(ColumnDescription = "菜单编码")]
        public long MenuPid { get; set; }
    }
}