# DescriptionList 描述列表


成组展示多个只读字段，常见于详情页的信息展示。

引用方式：

```javascript
import { DescriptionList } from '@/components'
const DescriptionListItem = DescriptionList.Item

export default {
    components: {
        DescriptionList,
        DescriptionListItem
    }
}
```



## 代码演示  [demo](https://preview.pro.loacg.com/test/home)

```html
<description-list title="组名称" size="small">
    <description-list-item term="负责人">林东东</description-list-item>
    <description-list-item term="角色码">1234567</description-list-item>
    <description-list-item term="所属部门">XX公司-YY部</description-list-item>
    <description-list-item term="过期时间">2018-08-08</description-list-item>
    <description-list-item term="描述">这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长...</description-list-item>
</description-list>
```


## API

### DescriptionList

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| layout    | 布局方式                                 | Enum{'horizontal', 'vertical'}  | 'horizontal' |
| col       | 指定信息最多分几列展示，最终一行几列由 col 配置结合[响应式规则](/components/DescriptionList#响应式规则)决定          | number(0 < col <= 4)  | 3 |
| title     | 列表标题                                 | String\|VNode  | - |
| size     | 列表型号        | Enum{'large', 'small'}  | - |

#### 响应式规则

| 窗口宽度             | 展示列数                                      | 
|---------------------|---------------------------------------------|
| `≥768px`           |  `col`                                       |
| `≥576px`           |  `col < 2 ? col : 2`                         |
| `<576px`           |  `1`                                         |

### DescriptionList.Item

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| term     | 列表项标题                                 | String\|VNode  | - |
