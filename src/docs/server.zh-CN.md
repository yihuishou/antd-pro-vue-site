# 和服务端进行交互

Ant Design Pro 是一套基于 Vue 技术栈的单页面应用，我们提供的是前端代码和 `mock` 模拟数据的开发模式，
通过 API 的形式和任何技术栈的服务端应用一起工作。下面将简单介绍和服务端交互的基本写法。


## 前端请求流程

在 Ant Design Pro 中，一个完整的前端 UI 交互到服务端处理流程是这样的：

1. UI 组件交互操作；
2. 调用统一管理的 api service 请求函数；
3. 使用封装的 request.js 发送请求；
4. 获取服务端返回；
5. 更新 data。


从上面的流程可以看出，为了方便管理维护，统一的请求处理都放在 `@/src/api` 文件夹中，并且一般按照 model 纬度进行拆分文件，如：

```
api/
  user.js
  permission.js
  goods.js
  ...
```


其中，`@/src/utils/request.js` 是基于 [axios](https://github.com/axios/axios) 的封装，便于统一处理 POST，GET 等请求参数，请求头，以及错误提示信息等。具体可以参看 [request.js](https://github.com/sendya/ant-design-pro-vue/blob/master/src/utils/request.js)。 它封装了全局 request 拦截器、response 拦截器、统一的错误处理、baseURL 设置等。

例如在 api 中的一个请求用户信息的例子：

```js
// api/user.js
import { axios } from '@/utils/request'

const api = {
    info: '/user',
    list: '/users'
}

// 根据用户 id 获取用户信息
export function getUser (id) {
    return axios({
        url: `${api.user}/${id}`,
        method: 'get'
    })
}

// 增加用户
export function addUser (parameter) {
    return axios({
        url: api.user,
        method: 'post',
        data: parameter
    })
}

// 更新用户 // or (id, parameter)
export function updateUser (parameter) {
    return axios({
        url: `${api.user}/${parameter.id}`, // or `${api.user}/${id}`
        method: 'put',
        data: parameter
    })
}

// 删除用户
export function deleteUser (id) {
    return axios({
        url: `${api.user}/${id}`,
        method: 'delete',
        data: parameter
    })
}

// 获取用户列表 parameter: { pageSize: 10, pageNo: 1 }
export function getUsers (parameter) {
    return axios({
        url: api.list,
        method: 'get',
        params: parameter
    })
}
```

```vue
<template>
	<div>
		<a-button @click="queryUser"></a-button>
		
		<a-table :dataSource="list">
		</a-table>
	</div>
</template>

<script>
import { getUser, getUsers } from '@/api/user'

export default {
    data () {
        return {
        	id: 0,
        	queryParam: {
                pageSize: 10,
                pageNo: 1,
                username: ''
        	},
        	info: {},
            list: []
        }
    },
    methods: {
        queryUser () {
        	const { $message } = this
            getUser(this.id).then(res => {
                this.info = res.data
            }).catch(err => {
                $message.error(`load user err: ${err.message}`)
            })
        },
        queryUsers () {
            getUsers(this.queryParam).then(res => {
                this.list = res
            })
        }
    }
}
</script>
```

## Mock 

- 有关项目默认使用的 `mockjs` 默认情况下在 `production` 是不生效的，所以直接不经过任何修改就编译出来，是无法看到效果的。
- Mock 在 `main.js` 中经行引入，你可以查看该文件的源代码，并找到 `import './mock'` 这样的代码。（去除它 可完整的将项目中的 mock 拦截去除）
- 如果想与 preview 一样，在生产环境也能使用 mock，则需要修改 `src/mock/index.js` 中的环境判断，这一些内容则需要自己理解并修改了。
