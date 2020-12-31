// /**
//  * 每个模块都应该有自己的接口文件去统一管理api
//  */
// import { get, post, put, del } from '@/utils/request.js'

// // 获取卫星列表
// export const postSatellites = params => post('/api/v1/siin/satellites', params)

// // 根据卫星ID获取轨道根数
// export const postSatelliteOrbitElem = params => post('/api/v1/siin/satellite/orbitelem', params)

// // 获取信关站列表
// export const postGroundStations = params => post('/api/v1/siin/groundstations', params)

// // 获取数据交互
// export const postExchange = params => post('/api/v1/siin/exchange', params)

// // 根据卫星ID获取外测测距测速
// export const postSatelliteRange = params => post('/api/v1/siin/em/range/list', params)

// // 根据卫星ID获取外测测角
// export const postSatelliteAngle = params => post('/api/v1/siin/em/angle/list', params)

// // 根据卫星ID获取覆盖范围
// export const postSatelliteCovers = params => post('/api/v1/siin/satellite/covers', params)

// // 根据信关站ID和卫星ID得到信关站的下次跟踪角度
// export const postGroundStationFollow = params => post('/api/v1/siin/groundstation/follow', params)

// // 根据信关站ID和卫星ID以及时间区间预测卫星的过境时间
// export const postGroundStationPasses = params => post('/api/v1/siin/groundstation/passes')
