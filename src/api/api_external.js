/**
 * 每个模块都应该有自己的接口文件去统一管理api
 */
import { get, post, put, del } from '@/utils/request.js'

// 根据卫星ID获取并存储外测测距测速
export const postSatelliteRange = params => post('/api/v1/siin/external/range/save', params)

// 根据卫星ID获取外测测距测速(分页)
export const postSatelliteRangeByPage = params => post('/api/v1/siin/external/range/list/page', params)

// 根据卫星ID获取并存储外测测角
export const postSatelliteAngle = params => post('/api/v1/siin/external/angle/save', params)

// 根据卫星ID获取外测测角(分页)
export const postSatelliteAngleByPage = params => post('/api/v1/siin/external/angle/list/page', params)

// 根据卫星ID获取覆盖范围
export const postSatelliteCovers = params => post('/api/v1/siin/external/cover/save', params)

// 根据卫星ID获取覆盖范围(分页)
export const postSatelliteCoversByPage = params => post('/api/v1/siin/external/cover/list/page', params)

// 根据信关站ID和卫星ID以及时间区间预测卫星的过境时间
export const postGroundStationPasses = params => post('/api/v1/siin/external/pass/save', params)

// 根据信关站ID和卫星ID以及时间区间预测卫星的过境时间(分页)
export const postGroundStationPassesByPage = params => post('/api/v1/siin/external/pass/list/page', params)

// 根据信关站ID和卫星ID得到信关站的下次跟踪角度
export const postGroundStationFollows = params => post('/api/v1/siin/external/follow/save', params)

// 根据信关站ID和卫星ID得到信关站的下次跟踪角度(分页)
export const postGroundStationFollowByPage = params => post('/api/v1/siin/external/follow/list/page', params)


