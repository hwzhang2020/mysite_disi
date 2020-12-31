//引入mock模块
import Mock from 'mockjs'

const satellitecovers_data = {
    "code": 200,
    "message": "siin external cover list page",
    "dataType": "LIST",
    "respBody": {
        "currentPage": 1,
        "pageSize": 20,
        "totalPage": 180,
        "dataList": [
            {
                "epoch": "2020-12-16 20:18:58",
                "substar": "(90.50º, -18.63º, 1099.41km)",
                "radius": 3502.526,
                "groundStations": ""
            },
            {
                "epoch": "2020-12-16 20:18:59",
                "substar": "(90.50º, -18.58º, 1099.40km)",
                "radius": 3502.5084,
                "groundStations": ""
            },
            {
                "epoch": "2020-12-16 20:19:00",
                "substar": "(90.50º, -18.52º, 1099.39km)",
                "radius": 3502.4909,
                "groundStations": ""
            },
            {
                "epoch": "2020-12-16 20:19:01",
                "substar": "(90.50º, -18.47º, 1099.38km)",
                "radius": 3502.4734,
                "groundStations": ""
            },
            {
                "epoch": "2020-12-16 20:19:02",
                "substar": "(90.50º, -18.41º, 1099.36km)",
                "radius": 3502.4559,
                "groundStations": ""
            },
            {
                "epoch": "2020-12-16 20:19:03",
                "substar": "(90.50º, -18.35º, 1099.35km)",
                "radius": 3502.4386,
                "groundStations": ""
            },
            {
                "epoch": "2020-12-16 20:19:04",
                "substar": "(90.50º, -18.30º, 1099.34km)",
                "radius": 3502.4212,
                "groundStations": ""
            },
            {
                "epoch": "2020-12-16 20:19:05",
                "substar": "(90.50º, -18.24º, 1099.33km)",
                "radius": 3502.4039,
                "groundStations": ""
            },
            {
                "epoch": "2020-12-16 20:19:06",
                "substar": "(90.49º, -18.18º, 1099.31km)",
                "radius": 3502.3866,
                "groundStations": ""
            },
            {
                "epoch": "2020-12-16 20:19:07",
                "substar": "(90.49º, -18.13º, 1099.30km)",
                "radius": 3502.3694,
                "groundStations": ""
            },
            {
                "epoch": "2020-12-16 20:19:08",
                "substar": "(90.49º, -18.07º, 1099.29km)",
                "radius": 3502.3523,
                "groundStations": ""
            },
            {
                "epoch": "2020-12-16 20:19:09",
                "substar": "(90.49º, -18.02º, 1099.28km)",
                "radius": 3502.3351,
                "groundStations": ""
            },
            {
                "epoch": "2020-12-16 20:19:10",
                "substar": "(90.49º, -17.96º, 1099.26km)",
                "radius": 3502.3181,
                "groundStations": ""
            },
            {
                "epoch": "2020-12-16 20:19:11",
                "substar": "(90.49º, -17.90º, 1099.25km)",
                "radius": 3502.301,
                "groundStations": ""
            },
            {
                "epoch": "2020-12-16 20:19:12",
                "substar": "(90.49º, -17.85º, 1099.24km)",
                "radius": 3502.2841,
                "groundStations": ""
            },
            {
                "epoch": "2020-12-16 20:19:13",
                "substar": "(90.49º, -17.79º, 1099.23km)",
                "radius": 3502.2671,
                "groundStations": ""
            },
            {
                "epoch": "2020-12-16 20:19:14",
                "substar": "(90.49º, -17.74º, 1099.22km)",
                "radius": 3502.2502,
                "groundStations": ""
            },
            {
                "epoch": "2020-12-16 20:19:15",
                "substar": "(90.49º, -17.68º, 1099.20km)",
                "radius": 3502.2334,
                "groundStations": ""
            },
            {
                "epoch": "2020-12-16 20:19:16",
                "substar": "(90.49º, -17.62º, 1099.19km)",
                "radius": 3502.2166,
                "groundStations": ""
            },
            {
                "epoch": "2020-12-16 20:19:17",
                "substar": "(90.49º, -17.57º, 1099.18km)",
                "radius": 3502.1999,
                "groundStations": ""
            }
        ],
        "total": 3600
    },
    "success": true
}

Mock.mock('/api/v1/siin/satellite/covers', 'post', satellitecovers_data)