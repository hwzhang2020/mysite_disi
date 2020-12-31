//引入mock模块
import Mock from 'mockjs'

const satellites_data = {
    "code": 200,
    "message": "siin satellites page",
    "dataType": "LIST",
    "respBody": {
        "currentPage": 1,
        "pageSize": 20,
        "totalPage": 15,
        "dataList": [
            {
                "satelliteId": "0101",
                "satelliteName": "GuoW0101",
                "satelliteText": "国网0101星",
                "used": false
            },
            {
                "satelliteId": "0102",
                "satelliteName": "GuoW0102",
                "satelliteText": "国网0102星",
                "used": false
            },
            {
                "satelliteId": "0103",
                "satelliteName": "GuoW0103",
                "satelliteText": "国网0103星",
                "used": false
            },
            {
                "satelliteId": "0104",
                "satelliteName": "GuoW0104",
                "satelliteText": "国网0104星",
                "used": false
            },
            {
                "satelliteId": "0105",
                "satelliteName": "GuoW0105",
                "satelliteText": "国网0105星",
                "used": false
            },
            {
                "satelliteId": "0106",
                "satelliteName": "GuoW0106",
                "satelliteText": "国网0106星",
                "used": false
            },
            {
                "satelliteId": "0107",
                "satelliteName": "GuoW0107",
                "satelliteText": "国网0107星",
                "used": false
            },
            {
                "satelliteId": "0108",
                "satelliteName": "GuoW0108",
                "satelliteText": "国网0108星",
                "used": false
            },
            {
                "satelliteId": "0109",
                "satelliteName": "GuoW0109",
                "satelliteText": "国网0109星",
                "used": false
            },
            {
                "satelliteId": "010A",
                "satelliteName": "GuoW010A",
                "satelliteText": "国网010A星",
                "used": false
            },
            {
                "satelliteId": "010B",
                "satelliteName": "GuoW010B",
                "satelliteText": "国网010B星",
                "used": false
            },
            {
                "satelliteId": "010C",
                "satelliteName": "GuoW010C",
                "satelliteText": "国网010C星",
                "used": false
            },
            {
                "satelliteId": "010D",
                "satelliteName": "GuoW010D",
                "satelliteText": "国网010D星",
                "used": false
            },
            {
                "satelliteId": "010E",
                "satelliteName": "GuoW010E",
                "satelliteText": "国网010E星",
                "used": false
            },
            {
                "satelliteId": "010F",
                "satelliteName": "GuoW010F",
                "satelliteText": "国网010F星",
                "used": false
            },
            {
                "satelliteId": "0110",
                "satelliteName": "GuoW0110",
                "satelliteText": "国网0110星",
                "used": false
            },
            {
                "satelliteId": "0111",
                "satelliteName": "GuoW0111",
                "satelliteText": "国网0111星",
                "used": false
            },
            {
                "satelliteId": "0112",
                "satelliteName": "GuoW0112",
                "satelliteText": "国网0112星",
                "used": false
            },
            {
                "satelliteId": "0113",
                "satelliteName": "GuoW0113",
                "satelliteText": "国网0113星",
                "used": false
            },
            {
                "satelliteId": "0114",
                "satelliteName": "GuoW0114",
                "satelliteText": "国网0114星",
                "used": false
            }
        ],
        "total": 300
    },
    "success": true
}

Mock.mock('/api/v1/siin/satellites/page', 'post', satellites_data)