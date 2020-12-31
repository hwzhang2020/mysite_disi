/**
 * 每个模块都应该有自己的接口文件去统一管理api
 */
import { get, post, put, del } from '@/utils/request.js'

// 获取数据交互
export const postExchange = params => post('/api/v1/siin/exchange', params)