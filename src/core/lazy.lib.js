import Vue from 'vue'
import {
  LocaleProvider,
  Layout,
  Input,
  Button,
  Card,
  Row,
  Col,
  Menu,
  Modal,
  Icon,
  Select,
  BackTop,
  Badge,
  Carousel,
  Affix,
  message,
  notification
} from 'ant-design-vue'

Vue.use(LocaleProvider)
Vue.use(Layout)
Vue.use(Input)
Vue.use(Button)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(Modal)
Vue.use(Icon)
Vue.use(Select)
Vue.use(BackTop)
Vue.use(Badge)
Vue.use(Carousel)
Vue.use(Affix)

Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning
