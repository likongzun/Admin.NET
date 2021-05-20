/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET通用权限管理平台
 * 前后端分离架构，开箱即用，紧随前沿技术。<br/><a href='https://gitee.com/zuohuaijun/Admin.NET/'>https://gitee.com/zuohuaijun/Admin.NET</a>
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface UpdateConfigInput
 */
export interface UpdateConfigInput {
    /**
     * 应用Id
     * @type {number}
     * @memberof UpdateConfigInput
     */
    id: any;
    /**
     * 名称
     * @type {string}
     * @memberof UpdateConfigInput
     */
    name: any;
    /**
     * 编码
     * @type {string}
     * @memberof UpdateConfigInput
     */
    code: any;
    /**
     * 属性值
     * @type {string}
     * @memberof UpdateConfigInput
     */
    value?: any | null;
    /**
     * 是否是系统参数（Y-是，N-否）
     * @type {string}
     * @memberof UpdateConfigInput
     */
    sysFlag?: any | null;
    /**
     * 备注
     * @type {string}
     * @memberof UpdateConfigInput
     */
    remark?: any | null;
    /**
     * 状态（字典 0正常 1停用 2删除）
     * @type {number}
     * @memberof UpdateConfigInput
     */
    status?: any;
    /**
     * 常量所属分类的编码，来自于“常量的分类”字典
     * @type {string}
     * @memberof UpdateConfigInput
     */
    groupCode?: any | null;
}