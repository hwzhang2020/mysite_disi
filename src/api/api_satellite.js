/**
 * 每个模块都应该有自己的接口文件去统一管理api
 */
import { get, post, put, del } from '@/utils/request.js'

// 获取卫星列表
export const postSatellites = params => post('/api/v1/siin/satellites', params)

// 获取卫星列表(分页)
export const postSatellitesByPage = params => post('/api/v1/siin/satellites/page', params)

// 查询卫星是否已经添加
export const postSatelliteExist = params => post('/api/v1/siin/satellite/exist', params)

// 添加卫星(包括卫星ID, Name, Text)
export const postSatelliteInsert = params => post('/api/v1/siin/satellite/insert', params)

// 根据ID删除卫星
export const delSatelliteDelete = params => del('/api/v1/siin/satellite/delete', params)

// 更新卫星(根据ID更新Name, Text)
export const putSatelliteUpdate = params => put('/api/v1/siin/satellite/update', params)

// 查询所有卫星的两行根数
export const postOrbitTle = params => post('/api/v1/siin/orbit/tle/list', params)

// 根据卫星ID获取两行根数/轨道根数
export const postSatelliteOrbitElem = params => post('/api/v1/siin/orbit/elems', params)

// 轨道根数转两行根数
export const postOrbitElem2Tle = params => post('/api/v1/siin/orbit/elem2tle', params)

// 两行根数转轨道根数
export const postOrbitTle2Elem = params => post('/api/v1/siin/orbit/tle2elem', params)

// 校验轨道根数(通过两行根数)
export const postOrbitElemVerify = params => post('/api/v1/siin/orbit/tle/verify', params)

// 查询卫星轨道根数是否已经添加
export const postOrbitElemExist = params => post('/api/v1/siin/orbit/tle/exist', params)

// 添加卫星轨道根数
export const postOrbitElemInsert = params => post('/api/v1/siin/orbit/tle/insert', params)

// 根据ID更新卫星轨道根数
export const putOrbitElemUpdate = params => put('/api/v1/siin/orbit/tle/update', params)

// 根据ID删除轨道根数
export const delOrbitElem = params => del('/api/v1/siin/orbit/tle/delete', params)
