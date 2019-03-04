<template>
  <div id="footer">
    <div class="footer-wrapper">
      <a-row>
        <a-col :xs="24" :sm="24" :md="6">
          <footer-center title="相关资源">
            <div><a href="http://ant.design">Ant Design</a></div>
            <div><a href="http://mobile.ant.design">Ant Design Mobile</a></div>
            <div><a href="http://ng.ant.design">NG-ZORRO</a><span> - </span>Ant Design of Angular</div>
            <div><a href="https://ng.mobile.ant.design/">NG-ZORRO-MOBILE</a></div>
            <div><a href="https://vue.ant.design/">Ant Design Vue</a> <span> - </span>Ant Design of Vue</div>
            <div><a target="_blank" rel="noopener noreferrer" href="http://kitchen.alipay.com">Kitchen</a><span> - </span><span>Sketch 工具集</span></div>
            <div><span class="ant-badge"><a target="_blank" rel="noopener noreferrer" href="http://landing.ant.design">Ant Design Landing</a><span> - </span><span>Landing 模板集</span><sup data-show="true" class="ant-scroll-number ant-badge-dot" style="right: -3px; margin-top: 0px;"></sup></span></div>
          </footer-center>
        </a-col>
        <a-col :xs="24" :sm="24" :md="6">
          <footer-center title="社区专栏">
            <div><a target="_blank" rel="noopener noreferrer" href="http://zhuanlan.zhihu.com/antdesign"><span>知乎专栏</span></a></div>
            <div><a target="_blank" rel="noopener noreferrer" href="http://medium.com/ant-design/">Medium</a></div>
            <div><a target="_blank" rel="noopener noreferrer" href="http://twitter.com/antdesignui">Twitter</a></div>
            <div><a target="_blank" rel="noopener noreferrer" href="http://seeconf.alipay.com/">SEE Conf</a><span> - </span><span>蚂蚁体验科技大会</span></div>
          </footer-center>
        </a-col>
        <a-col :xs="24" :sm="24" :md="6">
          <footer-center title="帮助">
            <div><a target="_blank " href="https://github.com/sendya/ant-design-pro-vue">GitHub</a></div>
            <div><a target="_blank" rel="noopener noreferrer" href="https://github.com/sendya/ant-design-pro-vue/issues/90"><span>贡献建议</span></a></div>
          </footer-center>
        </a-col>
        <a-col :xs="24" :sm="24" :md="6">
          <footer-center>
            <template slot="title">
              <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg" class="title-icon">
              <span>更多产品</span>
            </template>
            <div><a href="https://antv.alipay.com/" rel="noopener noreferrer" target="_blank">AntV</a><span> - </span><span>数据可视化</span></div>
            <div><a href="https://eggjs.org/" rel="noopener noreferrer" target="_blank">Egg</a><span> - </span><span>企业级 Node 开发框架</span></div>
          </footer-center>
        </a-col>
      </a-row>
    </div>
    <div class="footer-bar">
      Made with <span class="heart">❤</span> by <a target="_blank" rel="noopener noreferrer" href="https://i.loacg.com/">Sendya</a>, <a target="_blank" rel="noopener noreferrer" href="https://github.com/kokoroli" alt="kokoroli">柚子</a> · Inspired <a target="_blank" rel="noopener noreferrer" href="https://yuque.com/afx/blog"><span>AFX</span></a> · <a target="_blank" rel="noopener noreferrer" href="https://vue.ant.design/docs/vue/introduce-cn/"><span>Ant Design of Vue</span></a>
    </div>
  </div>
</template>

<script>
import FooterCenter from './FooterCenter'

export default {
  name: 'Footer',
  components: {
    FooterCenter
  }
}
</script>
