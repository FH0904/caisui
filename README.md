# 接口调用说明

## test账号

- 13800138008
- 123456

## 请求说明

- 请求地址: http://deve.tianlwl.com/api.html
- 全局数据传输格式: JSON
- 全局请求方式: POST
- 全局返回参数说明:

      status = 状态。true为成功，false为失败
      msg = 描述
      data = 返回的数据

## 获取圈子页内容

- 接口说明：获取所有圈子内容，用户登录后请切换对应的接口，看下文↓

- 请求参数：

      method = (登录前 = pages.moments), (登录后 = pages.lmoments)
      page = 第几页(默认1)
      size = 每页多少条(默认10)
  
- 返回示例：

  ```php
  {
    "status": true,
    "msg": "success",
    "data": [
        {
            "id": 3,
            "user_id": 1,
            "title": "cccccc", // 标题
            "content": "", // 内容
            "like_num": 0, // 点赞数
            "comment_num": 0, // 评论数
            "forward_num": 0, // 转发数
            "images": [], // 图片列表(数组)
            "create_time": "7分钟前",
            "nickname": "test", // 昵称,
            "is_like": false, // 此字段登录前均为false，登录后才有实际状态
            "sex": 1, // 1=男 2=女 3=未知
            "avatar": "https://xxxx/1.png" // 头像地址
        },
    ]
  }
  ```
  
  


## 发布圈子

- 接口说明：title 和 images 不能同时为空，images 请使用图片上传接口返回的url字段，不要传图片id

- 请求参数：

      method = pages.addmoments
      title = 标题
      images = 图片（传数组）

- 成功示例：

  ```php
  {
    "status": true,
    "msg": "success",
  }
  ```
- 失败示例：
  ```php
  {
    "status": false,
    "msg": "未知错误",
  }
  ```

## 图片上传接口

- 接口说明：title 和 images 不能同时为空

- 请求参数：

      method = images.upload
      file = 图片
  
- 成功示例：

  ```php
  {
    "status": true,
    "msg": "上传成功",
    "data": {
        "image_id": "95b835a0760722fb7b8f9c1a0b1e20ee", // 图片ID
        "url": "http://deve.tianlwl.com/static/uploads/images/2019/09/18/15687782875d81a82f5799a.jpg",// 图片地址
        "type": ""
    }
  }
  ```
- 失败示例：
  ```php
  {
    "status": false,
    "msg": "未知错误",
  }
  ```

## 获取资讯接口

- 接口说明：获取所有资讯接口

- 请求参数：

      method = pages.news
      page = 第几页(默认1)
      size = 每页多少条(默认10)
  
- 返回示例：

  ```php
  {
    "status": true,
    "msg": "获取成功",
    "data": [
        {
            "id": 2,
            "title": "测试资讯",
            "cover": "http://deve.tianlwl.com/static/uploads/images/2019/09/21/15690696405d861a489839f.PNG",
            "content": "AAA",
            "ctime": "2019年09月23日 19:34"
        },
        {
            "id": 3,
            "title": "测试资讯",
            "cover": "http://deve.tianlwl.com/static/uploads/images/2019/09/21/15690696405d861a489839f.PNG",
            "content": "AAA",
            "ctime": "2019年09月23日 19:34"
        },
    ]
  }
  ```


## 资讯详情接口

- 接口说明：无

- 请求参数：

      method = pages.newsdetail
      article_id = 资讯id
  
- 成功示例：

  ```php
  {
    "status": true,
    "msg": "获取成功",
    "data": {
        "id": 9,
        "title": "测试资讯",
        "cover": "http://deve.tianlwl.com/static/uploads/images/2019/09/21/15690696405d861a489839f.PNG",
        "content": "<p>AAA</p>",
        "ctime": "2019年09月23日 19:35"
    }
  }
  ```
- 失败示例：
  ```php
  {
    "status": false,
    "msg": "未知错误",
  }
  ```

## 获取活动接口

- 接口说明：获取所有活动接口

- 请求参数：

      method = activities.list
      page = 第几页(默认1)
      size = 每页多少条(默认10)
  
- 返回示例：

  ```php
  {
    "status": true,
    "msg": "success",
    "data": [
        {
            "id": 1,
            "name": "测试活动", // 活动名称
            "start_time": 1569242283, // 活动开始时间戳
            "end_time": 1569328682, // 活动结束时间戳
            "people_limit": 50, // 人数限制
            "status": 1, // 活动状态
            "address": "广东省深圳市XXXXXXXXXXX", // 活动地址
            "start_time_text": "2019-09-23 20:38", // 活动开始时间文本
            "end_time_text": "2019-09-24 20:38", // 活动结束时间文本
            "status_text": "未知", // 活动状态文本
            "current_people": 1, // 当前参与人数
            "images": [
              'http://www.qq.com/1.jpg'
            ] // 活动轮播图，若要获取封面图，取此数组第一条图片就好
        }
    ]
  }
  ```

## 活动详情接口

- 接口说明：无

- 请求参数：

      method = activities.detail
      activities_id = 活动id
  
- 成功示例：

  ```php
  {
    "status": true,
    "msg": "success",
    "data": {
        "id": 1,
        "name": "测试活动",
        "start_time": 1569242283,
        "end_time": 1569328682,
        "people_limit": 50,
        "status": 1,
        "address": "广东省深圳市XXXXXXXXXXX",
        "content": "活动介绍", // 活动结束
        "images": [
            "cc",
            "bbb"
        ], // 轮播图
        "start_time_text": "2019-09-23 20:38",
        "end_time_text": "2019-09-24 20:38",
        "status_text": "未知",
        "current_people": 1
    }
  }
  ```

## 活动报名接口

- 接口说明：无

- 请求参数：

      method = activities.join
      activities_id = 活动id
  
- 成功示例：

  ```php
  {
    "status": true,
    "msg": "报名成功"
  }
  ```