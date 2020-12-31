//引入mock模块
import Mock from 'mockjs'

const groundstationpasses_data = {
    "code": 200,
    "message": "siin external pass list page",
    "dataType": "LIST",
    "respBody": {
        "currentPage": 1,
        "pageSize": 20,
        "totalPage": 1,
        "dataList": [
            {
                "startTime": "2020-12-17 14:00:26",
                "endTime": "2020-12-17 14:18:06",
                "duration": 17.67,
                "aosAzimuth": 15,
                "maxElevation": 30.76,
                "losAzimuth": 156
            },
            {
                "startTime": "2020-12-17 15:47:56",
                "endTime": "2020-12-17 16:05:06",
                "duration": 17.17,
                "aosAzimuth": 340,
                "maxElevation": 27.63,
                "losAzimuth": 207
            },
            {
                "startTime": "2020-12-18 01:50:06",
                "endTime": "2020-12-18 02:06:11",
                "duration": 16.09,
                "aosAzimuth": 144,
                "maxElevation": 20.55,
                "losAzimuth": 23
            },
            {
                "startTime": "2020-12-18 03:36:11",
                "endTime": "2020-12-18 03:54:21",
                "duration": 18.17,
                "aosAzimuth": 197,
                "maxElevation": 40.41,
                "losAzimuth": 348
            },
            {
                "startTime": "2020-12-18 13:17:01",
                "endTime": "2020-12-18 13:31:21",
                "duration": 14.34,
                "aosAzimuth": 32,
                "maxElevation": 12.06,
                "losAzimuth": 133
            }
        ],
        "total": 5
    },
    "success": true
}

Mock.mock('/api/v1/siin/groundstation/passes', 'post', groundstationpasses_data)