//引入mock模块
import Mock from 'mockjs'

const exchange_data = {
    "code": 200,
    "message": "exchange data",
    "respBody": [{
        "name": "beijing",
        "scode": "01110000",
        "recvIP": "192.168.1.101",
        "recvPort": 20000,
        "recvState": "not connect",
        "recvCount": 0,
        "sendIP": "192.168.1.201",
        "sendPort": 10000,
        "sendState": "not connect",
        "sendCount": 0
    },
    {
        "name": "chuxiong",
        "scode": "01120000",
        "recvIP": "192.168.1.101",
        "recvPort": 20001,
        "recvState": "not connect",
        "recvCount": 0,
        "sendIP": "192.168.1.201",
        "sendPort": 10001,
        "sendState": "not connect",
        "sendCount": 0
    },
    {
        "name": "wulumuqi",
        "scode": "01130000",
        "recvIP": "192.168.1.101",
        "recvPort": 20002,
        "recvState": "not connect",
        "recvCount": 0,
        "sendIP": "192.168.1.201",
        "sendPort": 10002,
        "sendState": "not connect",
        "sendCount": 0
    },
    {
        "name": "xian",
        "scode": "01140000",
        "recvIP": "192.168.1.101",
        "recvPort": 20003,
        "recvState": "not connect",
        "recvCount": 0,
        "sendIP": "192.168.1.201",
        "sendPort": 10003,
        "sendState": "not connect",
        "sendCount": 0
    },
    {
        "name": "yw6",
        "scode": "003A0000",
        "recvIP": "192.168.1.101",
        "recvPort": 20004,
        "recvState": "not connect",
        "recvCount": 0,
        "sendIP": "192.168.1.201",
        "sendPort": 10004,
        "sendState": "not connect",
        "sendCount": 0
    },
    {
        "name": "yw7",
        "scode": "003B0000",
        "recvIP": "192.168.1.101",
        "recvPort": 20005,
        "recvState": "not connect",
        "recvCount": 0,
        "sendIP": "192.168.1.201",
        "sendPort": 10005,
        "sendState": "not connect",
        "sendCount": 0
    },
    {
        "name": "sdyg",
        "scode": "001F0000",
        "recvIP": "192.168.1.101",
        "recvPort": 20006,
        "recvState": "not connect",
        "recvCount": 0,
        "sendIP": "192.168.1.201",
        "sendPort": 10006,
        "sendState": "not connect",
        "sendCount": 0
    },
    {
        "name": "jln",
        "scode": "001E0000",
        "recvIP": "192.168.1.101",
        "recvPort": 20007,
        "recvState": "not connect",
        "recvCount": 0,
        "sendIP": "192.168.1.201",
        "sendPort": 10007,
        "sendState": "not connect",
        "sendCount": 0
    }]
}

Mock.mock('/api/v1/siin/exchange', 'post', exchange_data)