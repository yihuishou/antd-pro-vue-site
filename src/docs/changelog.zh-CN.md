# 更新日志

### 2.0.0-Pre-release

#### 脚手架

- 💥 优化组件目录结构
- 💥 优化 `BasicLayout`、`PageView`、`RouteView`
- 💥 Dashboard/Analysis 增加 线上热门搜索，销售额类别占比 图表例子
- 💥 优化 `@/components` 导出组件
- 💥 移动 `ExceptionPage ` 到 `@/components` 下 [cfc3bbc](https://github.com/sendya/ant-design-pro-vue/commit/cfc3bbcddd010b65942a83e84e3362c56a6d64c1)
- 👎 移除老版本中提供的业务布局例示 

#### 组件

- 💥 同步 React Ant Deisgn Pro 部分组件的 API 
- 🐛 修正 `s-table` 获取数据在 IE 下兼容性问题，修正不能关闭分页器问题 [#141](https://github.com/sendya/ant-design-pro-vue/pull/141)  [#148](https://github.com/sendya/ant-design-pro-vue/issues/148) 
- 🐛 修正 `PageView` 被 Keep-Alive 之后导致页面 meta info 被缓存的问题 [#132](https://github.com/sendya/ant-design-pro-vue/issues/132) [5340f48](https://github.com/sendya/ant-design-pro-vue/commit/5340f48374638a469754e207842f23556020d56d)
- 🔨 修改 vue-cli3 中的 devServer 默认端口为 8000 [fec00eb](https://github.com/sendya/ant-design-pro-vue/commit/fec00eb16ab481d99b07ee20c17d3bcc54d52fd4)
- 😄 增加 [分步对话框](https://preview.pro.loacg.com/list/table-list) 例子（点列表中的 **配置** 可预览）

> 注意，本版本含破坏性更新，如无必要。无需跟进新版本
> 推荐新项目采用该版本作为基础模板开发


----

### 1.3.2

#### 脚手架

- 💥 修改 路由参数 `alwaysShow` 重命名为 `hideChildrenInMenu`
- 💥 优化和分离 GlobalLayout 样式 -> `global.less`

#### 组件
- 🐛 固定 Header 模式下，向下滚动、向上滚动没有触发显示隐藏
- 👍 Menu 使用 jsx 重构，并且顶部菜单模式下，支持超过长度菜单自动隐藏超过部分菜单为省略符
- 🐛 `s-table` 在引用了 `polyfill` 之后，无法判断到 `Promise` 条件导致在 IE 下不加载数据 


### 1.3.1

#### 脚手架

- 💥 兼容 **IE10, IE11, Edge** [e392885](https://github.com/sendya/ant-design-pro-vue/commit/e392885985f9745033f95cad381310eca467567b)

#### 组件

- 🐛  修正 自定义 Icon 功能在 IE, Edge, Chrome 55,56,57,58,59 上不兼容导致页面打不开的问题（`vue-svg-loader` 引起的）[#95](https://github.com/sendya/ant-design-pro-vue/issues/95) [#104](https://github.com/sendya/ant-design-pro-vue/issues/104)
- 🐛 修正 `s-table` 无法配置 `slots` 属性的问题 [#102](https://github.com/sendya/ant-design-pro-vue/issues/102) [35f1ca3](https://github.com/sendya/ant-design-pro-vue/commit/35f1ca3303d673503e1c6d476f25ca7866873643) 
- 💥 新增 `Multi-Tab`  右键菜单可以 `关闭当前` `关闭左边` `关闭右边` `关闭全部` 功能  [a9e5710](https://github.com/sendya/ant-design-pro-vue/commit/a9e5710aca65d6374660915ae4935ccdf58c20ba) [c2c977f](https://github.com/sendya/ant-design-pro-vue/commit/c2c977f6d6ea7ede38de23d60c17edcdf9e58f41) [03d1233](https://github.com/sendya/ant-design-pro-vue/commit/03d12334b6b0bf0484c966f45033d1f5514801c1) 
- 💥 增加 `@/components` 的部分组件导出 (`DetailList`, `STable`, `MultiTab`, `Result`, `IconSelector`)
- 💣 移动组件 `src/views/result/Result.vue` -> `src/components/Result/`

> 直接使用 `import { Result } @/components` 即可引入




### 1.3.0

#### 脚手架

- 💥  升级支持库 `Ant Design Vue.1.3.5`
- 💥  增加 `Multi-Tabs` 多标签栏支持 [03de3b7](https://github.com/sendya/ant-design-pro-vue/commit/03de3b72ba945477afe07e02f62eb1f8ced5c335)
- 💥  增加基础组件按需引入文件 `/src/core/lazy_lib/`
- 🐛  修正路由重定向问题 [#88](https://github.com/sendya/ant-design-pro-vue/issues/88) 
- 📄  增加 `svg` 自定义 `icon` 引入和使用 demo (使用了 webpack `vue-svg-loader`) 73bcc2c
- 🐛  修正 高级表单页面 删除时一下把所有新增的表单都删了的问题 [2f436d2](https://github.com/sendya/ant-design-pro-vue/commit/2f436d28cf55e4a9d8d3733c95c4f60641398124)

#### 组件

- 💥  增加 `IconSelector` 图标选择组件 提供: [@Saraka](https://github.com/saraka-tsukai) [b661cde](https://github.com/sendya/ant-design-pro-vue/commit/b661cde01097871b103a89fa1046f77b1f7ec0c4) 
- 🐛  修正 `HeadInfo` 中的消息通知箭头指向问题，以及点击后触发的 `Loading` 在关闭时也触发了一次
- 🐛  修正 `s-table` 搜索条件搜索不到数据时，`localPagination = false` 导致下次搜索时，分页器报错
- 修正 `s-table` 在 firefox, ie, edge 中对象转换判断错误导致不能执行 `loadData` [#85](https://github.com/sendya/ant-design-pro-vue/issues/85) 
- 🐛  修正 `Menu` 组件的 `icon` 支持自定义组件 [#59](https://github.com/sendya/ant-design-pro-vue/issues/59) 





### 1.2.0

#### 脚手架

- 💥 升级支持库 `Ant Design Vue`.`1.3.2`
- 🐛  修正侧边栏过高不显示滚动条的问题
> 侧边栏固定模式下，overflow 特性修改(鼠标在菜单上 如果菜单高度超出，则显示竖向滚动条)
- 🐛  修正 IE 下 `dom.remove()` 方法不存在问题
- 🐛 修正 `keep-alive` 使用错误的问题
- 💥 项目样式 `scss` 全部转换为 `less`，且移除了项目 `node-sass` 依赖
- 💥 升级 `eslint`，自动修正规则影响的文件
- 👏 增加一个 `tree-list` 列表展示布局样式
- 📖 完善部分文档

#### 组件

- 👏  优化 `table` 实现，解决刷新页面和搜索时，可能在空页面的问题
> 重载列表增加参数 **刷新时回到第一页**





### 1.1.0

- 升级支持库 `Ant Design Vue`.`1.2.2`
- 升级已用表单组件页面的使用 API  (ANTD 升级同步新表单)
- 优化手机样式
- 修正 `Fluid` 布局
- 修正侧边栏菜单的打开关闭状态 (**若菜单查看显示错误或被遮挡，请清空 `localStorage` 在尝试**)
- 增加开发者设置栏 复制配置 [#ca73a19](https://github.com/sendya/ant-design-pro-vue/commit/ca73a1938fd725819f94c1449190d1addac6ca4d)
- 增加支持 `Tablet` 分辨率布局
- 增加 `Ant Design Pro`  原版提供的组件
  - Trend 趋势标记
  - AvatarList 用户头像列表
  - NumberInfo 数据文本
  - Ellipsis 文本自动省略号
  - CountDown 倒计时
  - FooterToolbar 底部工具栏
- 增加 `Role` 角色管理页面新布局方式
- 增加**首屏加载动画** （欲兼容 IE，请参考 [为首屏增加 加载动画：实现方案1](https://github.com/sendya/ant-design-pro-vue/blob/master/docs/Add-Page-Loading-Animate.md)）
- 增加**组件按需加载**用例，可参考分支 [feature/demand_load](https://github.com/sendya/ant-design-pro-vue/tree/feature/demand_load)，[依赖引入例](https://github.com/sendya/ant-design-pro-vue/blob/feature/demand_load/src/components/use.js)
- 增加**多页面标签组件** 可参考分支 [feature/multi-tabs](https://github.com/sendya/ant-design-pro-vue/blob/feature/multi-tabs/src/components/tools/MultiTab.vue)

> 为了让广大国内用户可顺畅安装依赖，可能下个版本会把项目的基础样式支持从 `scss` 修改为 `less`（node-scss 经常安装失败），用户可以选择不进行升级，锁定版本号。


### 1.0

1. 实现 React 官方原版 Pro 功能支持  
2. 支持头像裁剪插件  
3. 支持基础路由权限认证  
4. 支持本地 `localStorage` 储存  
5. 支持原版 Pro 提供的开发模式右侧配置栏以及相关功能  
6. 引入原版 Pro 提供的在线更换主题配色编译功能  
7. 提供分离的 `router` 配置和相关文档  
8. 提供一个针对 `antd table` 的组件封装，标准分页列表始用更加简单  
9. 提供一部分文档

> 注意：本版本可直接作为生产环境的基础进行开发，之后本项目的更新将是对这个版本的优化  
以及一些内嵌样式分离为独立的样式。对项目改动不会过大，过大的改动将在 v2.0 提供（同步 Ant-Design Pro 官方功能）
注意2： **请不要在该版本升级 ant-design-vue 版本超过 1.1.10**，否则可能导致菜单组件，layout 等组件异常



### 0.1

Ant Design Pro of Vue 初版实现 基于 [Ant Design Vue](https://vue.ant.design/)
