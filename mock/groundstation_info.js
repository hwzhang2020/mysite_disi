//引入mock模块
import Mock from 'mockjs'

const groundstations_data = {
    "code": 200,
    "message": "siin groundstations page",
    "dataType": "LIST",
    "respBody": {
        "currentPage": 1,
        "pageSize": 20,
        "totalPage": 1,
        "dataList": [
            {
                "groundStationId": "01110000",
                "groundStationName": "Beijing",
                "groundStationText": "北京",
                "groundStationLng": 116.25,
                "groundStationLat": 40.07,
                "groundStationAlt": 0.0,
                "used": true
            },
            {
                "groundStationId": "00080000",
                "groundStationName": "Sanya",
                "groundStationText": "三亚",
                "groundStationLng": 109.55,
                "groundStationLat": 18.28,
                "groundStationAlt": 0.0,
                "used": true
            },
            {
                "groundStationId": "00090000",
                "groundStationName": "Jiamusi",
                "groundStationText": "佳木斯",
                "groundStationLng": 130.5,
                "groundStationLat": 47.0,
                "groundStationAlt": 0.0,
                "used": true
            },
            {
                "groundStationId": "001E0000",
                "groundStationName": "Kiruna",
                "groundStationText": "基律纳",
                "groundStationLng": 20.25,
                "groundStationLat": 67.87,
                "groundStationAlt": 0.0,
                "used": true
            },
            {
                "groundStationId": "001F0000",
                "groundStationName": "Santiago",
                "groundStationText": "圣地亚哥",
                "groundStationLng": -71.0,
                "groundStationLat": -33.0,
                "groundStationAlt": 0.0,
                "used": true
            },
            {
                "groundStationId": "003A0000",
                "groundStationName": "Yuanwang6",
                "groundStationText": "远望六号",
                "groundStationLng": 170.0,
                "groundStationLat": -40.0,
                "groundStationAlt": 0.0,
                "used": true
            },
            {
                "groundStationId": "003B0000",
                "groundStationName": "Yuanwang7",
                "groundStationText": "远望七号",
                "groundStationLng": -75.0,
                "groundStationLat": 30.0,
                "groundStationAlt": 0.0,
                "used": true
            }
        ],
        "total": 7
    },
    "success": true
}

Mock.mock('/api/v1/siin/groundstations/page', 'post', groundstations_data)