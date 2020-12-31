/**
 * 每个模块都应该有自己的接口文件去统一管理api
 */
import { get, post, put, del } from '@/utils/request.js'

// 根据卫星ID和信关站ID查询遥控指令(分页)
export const postTcsByPage = params => post('/api/v1/sitc/tc/list/page', params)

// 根据卫星ID和信关站ID查询数据注入(分页)
export const postInjectionsByPage = params => post('/api/v1/sitc/injection/list/page', params)