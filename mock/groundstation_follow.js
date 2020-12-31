//引入mock模块
import Mock from 'mockjs'

const groundstationfollow_data = {
    "code": 200,
    "message": "siin external follow list page",
    "dataType": "LIST",
    "respBody": {
        "currentPage": 1,
        "pageSize": 20,
        "totalPage": 39,
        "dataList": [
            {
                "epoch": "2020-12-17 12:07:22",
                "azimuth": 0.38,
                "elevation": 0.01
            },
            {
                "epoch": "2020-12-17 12:07:23",
                "azimuth": 0.38,
                "elevation": 0.01
            },
            {
                "epoch": "2020-12-17 12:07:24",
                "azimuth": 0.38,
                "elevation": 0.01
            },
            {
                "epoch": "2020-12-17 12:07:25",
                "azimuth": 0.38,
                "elevation": 0.01
            },
            {
                "epoch": "2020-12-17 12:07:26",
                "azimuth": 0.39,
                "elevation": 0.01
            },
            {
                "epoch": "2020-12-17 12:07:27",
                "azimuth": 0.39,
                "elevation": 0.01
            },
            {
                "epoch": "2020-12-17 12:07:28",
                "azimuth": 0.39,
                "elevation": 0.01
            },
            {
                "epoch": "2020-12-17 12:07:29",
                "azimuth": 0.39,
                "elevation": 0.01
            },
            {
                "epoch": "2020-12-17 12:07:30",
                "azimuth": 0.39,
                "elevation": 0.01
            },
            {
                "epoch": "2020-12-17 12:07:31",
                "azimuth": 0.39,
                "elevation": 0.01
            },
            {
                "epoch": "2020-12-17 12:07:32",
                "azimuth": 0.39,
                "elevation": 0.01
            },
            {
                "epoch": "2020-12-17 12:07:33",
                "azimuth": 0.4,
                "elevation": 0.01
            },
            {
                "epoch": "2020-12-17 12:07:34",
                "azimuth": 0.4,
                "elevation": 0.01
            },
            {
                "epoch": "2020-12-17 12:07:35",
                "azimuth": 0.4,
                "elevation": 0.01
            },
            {
                "epoch": "2020-12-17 12:07:36",
                "azimuth": 0.4,
                "elevation": 0.01
            },
            {
                "epoch": "2020-12-17 12:07:37",
                "azimuth": 0.4,
                "elevation": 0.02
            },
            {
                "epoch": "2020-12-17 12:07:38",
                "azimuth": 0.4,
                "elevation": 0.02
            },
            {
                "epoch": "2020-12-17 12:07:39",
                "azimuth": 0.41,
                "elevation": 0.02
            },
            {
                "epoch": "2020-12-17 12:07:40",
                "azimuth": 0.41,
                "elevation": 0.02
            },
            {
                "epoch": "2020-12-17 12:07:41",
                "azimuth": 0.41,
                "elevation": 0.02
            }
        ],
        "total": 765
    },
    "success": true
}

Mock.mock('/api/v1/siin/groundstation/follow', 'post', groundstationfollow_data)