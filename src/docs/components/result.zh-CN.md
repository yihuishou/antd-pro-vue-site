# Result 处理结果

结果页用于对用户进行的一系列任务处理结果进行反馈。
（已废弃，antd vue 1.5.0 起内置支持该组件）

引用方式：
```vue
import { Result } from '@/components'

export default {
    components: {
        Result
    }
}
```

使用方式：
```vue
<template>
    <result type="success" title="标题" description="结果描述">
        <template slot="action">
            <p>操作建议，一般放置按钮组</p>
            <a-button>修改</a-button>
        </template>
        <div>
            其他补充信息，自带灰底效果
        </div>
    </result>
</template>
```

## API

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| type | 类型，不同类型自带对应的图标 | Enum {'success', 'error'} | - |
| title       | 标题     | String 或 slot  | -    |
| description | 结果描述    | String 或 slot  | -    |
| extra       | 补充信息，有默认的灰色背景     | slot  | -    |
| actions     | 操作建议，推荐放置跳转链接，按钮组等    | slot  | -    |
