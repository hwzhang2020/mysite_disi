//引入mock模块
import Mock from 'mockjs'

const satellite_orbitelem = {
    "code": 200,
    "message": "satellite orbit elem",
    "respBody": {
        "a": "0",
        "e": "1",
        "i": "2",
        "o": "3",
        "w": "4",
        "m": "5"
    }
}

Mock.mock('/api/v1/siin/satellite/orbitelem', 'post', satellite_orbitelem)