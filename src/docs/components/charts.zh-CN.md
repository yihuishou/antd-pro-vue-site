# Charts

Ant Design Pro 提供的业务中常用的图表类型，都是基于 Viserjs(G2 vue 实现) 按照 Ant Design 图表规范封装，需要注意的是 Ant Design Pro 的图表组件以套件形式提供，可以任意组合实现复杂的业务需求。

因为结合了 Ant Design 的标准设计，本着极简的设计思想以及开箱即用的理念，简化了大量 API 配置，所以如果需要灵活定制图表，可以参考 Ant Design Pro 图表实现，自行基于  Viserjs(G2 vue 实现) 封装图表组件使用。

> 该文档目前尚未完成

```js
import { ChartCard } from '@/components'

export default {
    components: {
        ChartCard
    }
}
```

```html
<chart-card title="总销售量">
    <a-icon type="buy" slot="action" />
    <span slot="total">$ 100.00</span>
    <span>
        周同比 12%
    </span>
</chart-card>
```

```html
<chart-card title="总销售量" :total="() => '$ 100.00'">
    <a-icon type="buy" slot="action" />
    <span>
        周同比 12%
    </span>
</chart-card>
```

```html
<chart-card title="总销售量" total="$ 100.00">
    <a-icon type="buy" slot="action" />
    <span>
        周同比 12%
    </span>
</chart-card>
```


## API

### ChartCard

| 参数               | 说明       | 类型                                 | 默认值       |
| ---------------- | -------- | ---------------------------------- | --------- |
| title             | 	卡片标题     | String | - |
| total        | 数据总量 | function, number, string                     | -         |
| action      | 右侧图标  | vNode                      | -         |
