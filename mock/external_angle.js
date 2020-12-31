//引入mock模块
import Mock from 'mockjs'

const externalangle_data = {
    "code": 200,
    "message": "siin external angle list page",
    "dataType": "LIST",
    "respBody": {
        "currentPage": 1,
        "pageSize": 20,
        "totalPage": 180,
        "dataList": [
            {
                "epoch": "2020-12-16 16:34:00",
                "azimuth": 0.89,
                "elevation": -1.11
            },
            {
                "epoch": "2020-12-16 16:34:01",
                "azimuth": 0.89,
                "elevation": -1.11
            },
            {
                "epoch": "2020-12-16 16:34:02",
                "azimuth": 0.89,
                "elevation": -1.11
            },
            {
                "epoch": "2020-12-16 16:34:03",
                "azimuth": 0.89,
                "elevation": -1.11
            },
            {
                "epoch": "2020-12-16 16:34:04",
                "azimuth": 0.9,
                "elevation": -1.11
            },
            {
                "epoch": "2020-12-16 16:34:05",
                "azimuth": 0.9,
                "elevation": -1.11
            },
            {
                "epoch": "2020-12-16 16:34:06",
                "azimuth": 0.9,
                "elevation": -1.11
            },
            {
                "epoch": "2020-12-16 16:34:07",
                "azimuth": 0.9,
                "elevation": -1.11
            },
            {
                "epoch": "2020-12-16 16:34:08",
                "azimuth": 0.9,
                "elevation": -1.11
            },
            {
                "epoch": "2020-12-16 16:34:09",
                "azimuth": 0.9,
                "elevation": -1.11
            },
            {
                "epoch": "2020-12-16 16:34:10",
                "azimuth": 0.9,
                "elevation": -1.11
            },
            {
                "epoch": "2020-12-16 16:34:11",
                "azimuth": 0.9,
                "elevation": -1.11
            },
            {
                "epoch": "2020-12-16 16:34:12",
                "azimuth": 0.9,
                "elevation": -1.11
            },
            {
                "epoch": "2020-12-16 16:34:13",
                "azimuth": 0.9,
                "elevation": -1.11
            },
            {
                "epoch": "2020-12-16 16:34:14",
                "azimuth": 0.9,
                "elevation": -1.11
            },
            {
                "epoch": "2020-12-16 16:34:15",
                "azimuth": 0.9,
                "elevation": -1.1
            },
            {
                "epoch": "2020-12-16 16:34:16",
                "azimuth": 0.9,
                "elevation": -1.1
            },
            {
                "epoch": "2020-12-16 16:34:17",
                "azimuth": 0.9,
                "elevation": -1.1
            },
            {
                "epoch": "2020-12-16 16:34:18",
                "azimuth": 0.9,
                "elevation": -1.1
            },
            {
                "epoch": "2020-12-16 16:34:19",
                "azimuth": 0.91,
                "elevation": -1.1
            }
        ],
        "total": 3600
    },
    "success": true
}

Mock.mock('/api/v1/siin/external/angle/list/page', 'post', externalangle_data)