/**
 * 每个模块都应该有自己的接口文件去统一管理api
 */
import { get, post, put, del } from '@/utils/request.js'

// 获取信关站列表
export const postGroundStations = params => post('/api/v1/siin/groundstations', params)

// 获取信关站列表(分页)
export const postGroundStationsByPage = params => post('/api/v1/siin/groundstations/page', params)

// 查询地面站是否已经添加
export const postGroundStationExist = params => post('/api/v1/siin/groundstation/exist', params)

// 添加地面站(包括地面站ID, Name, Text, 地理位置)
export const postGroundStationInsert = params => post('/api/v1/siin/groundstation/insert', params)

// 根据ID删除地面站
export const delGroundStationDelete = params => del('/api/v1/siin/groundstation/delete', params)

// 更新地面站(根据ID更新Name, Text)
export const putGroundStationUpdate = params => put('/api/v1/siin/groundstation/update', params)
