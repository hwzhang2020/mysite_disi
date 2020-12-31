//引入mock模块
import Mock from 'mockjs'

// Mock.Random 是一个工具类，用于生成各种随机数据
//const Random = Mock.Random 

const getMockData = {
    getData (options) {
        return {
            "code": 200,
            "message": "success",
            "respBody": {
                "username": "Tom",
                "password": "1234"
            }
        }
    }
}
const postMockData = {
    postData () {
        return {
            "code": 404,
            "message": "error",
            "respBody": null
        }
    }
}

Mock.mock('/api/user', 'get', getMockData.getData)

Mock.mock('/api/msg', 'post', postMockData.postData)