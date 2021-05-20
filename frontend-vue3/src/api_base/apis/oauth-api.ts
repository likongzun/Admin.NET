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
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { XnRestfulResultOfObject } from '../models';
/**
 * OauthApi - axios parameter creator
 * @export
 */
export const OauthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 微信登录授权
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oauthWechatGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/oauth/wechat`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 获取微信用户基本信息
         * @param {string} [token] 
         * @param {string} [openId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oauthWechatUserGet: async (token?: string, openId?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/oauth/wechat/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            if (token !== undefined) {
                localVarQueryParameter['token'] = token;
            }

            if (openId !== undefined) {
                localVarQueryParameter['openId'] = openId;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 微信登录授权回调
         * @param {string} [code] 
         * @param {string} [state] 
         * @param {string} [errorDescription] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oauthWechatcallbackGet: async (code?: string, state?: string, errorDescription?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/oauth/wechatcallback`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            if (code !== undefined) {
                localVarQueryParameter['code'] = code;
            }

            if (state !== undefined) {
                localVarQueryParameter['state'] = state;
            }

            if (errorDescription !== undefined) {
                localVarQueryParameter['error_description'] = errorDescription;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OauthApi - functional programming interface
 * @export
 */
export const OauthApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 微信登录授权
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oauthWechatGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await OauthApiAxiosParamCreator(configuration).oauthWechatGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取微信用户基本信息
         * @param {string} [token] 
         * @param {string} [openId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oauthWechatUserGet(token?: string, openId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<XnRestfulResultOfObject>> {
            const localVarAxiosArgs = await OauthApiAxiosParamCreator(configuration).oauthWechatUserGet(token, openId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 微信登录授权回调
         * @param {string} [code] 
         * @param {string} [state] 
         * @param {string} [errorDescription] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oauthWechatcallbackGet(code?: string, state?: string, errorDescription?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await OauthApiAxiosParamCreator(configuration).oauthWechatcallbackGet(code, state, errorDescription, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * OauthApi - factory interface
 * @export
 */
export const OauthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 微信登录授权
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oauthWechatGet(options?: any): AxiosPromise<void> {
            return OauthApiFp(configuration).oauthWechatGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取微信用户基本信息
         * @param {string} [token] 
         * @param {string} [openId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oauthWechatUserGet(token?: string, openId?: string, options?: any): AxiosPromise<XnRestfulResultOfObject> {
            return OauthApiFp(configuration).oauthWechatUserGet(token, openId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 微信登录授权回调
         * @param {string} [code] 
         * @param {string} [state] 
         * @param {string} [errorDescription] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oauthWechatcallbackGet(code?: string, state?: string, errorDescription?: string, options?: any): AxiosPromise<void> {
            return OauthApiFp(configuration).oauthWechatcallbackGet(code, state, errorDescription, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OauthApi - object-oriented interface
 * @export
 * @class OauthApi
 * @extends {BaseAPI}
 */
export class OauthApi extends BaseAPI {
    /**
     * 
     * @summary 微信登录授权
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OauthApi
     */
    public oauthWechatGet(options?: any) {
        return OauthApiFp(this.configuration).oauthWechatGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取微信用户基本信息
     * @param {string} [token] 
     * @param {string} [openId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OauthApi
     */
    public oauthWechatUserGet(token?: string, openId?: string, options?: any) {
        return OauthApiFp(this.configuration).oauthWechatUserGet(token, openId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 微信登录授权回调
     * @param {string} [code] 
     * @param {string} [state] 
     * @param {string} [errorDescription] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OauthApi
     */
    public oauthWechatcallbackGet(code?: string, state?: string, errorDescription?: string, options?: any) {
        return OauthApiFp(this.configuration).oauthWechatcallbackGet(code, state, errorDescription, options).then((request) => request(this.axios, this.basePath));
    }
}