const app = getApp()

Page({
  data: {
    show:false,
  },
  onLoad() {
    console.log('微信小程序自定义Tabbar，中间的眼睛icon为展示自定义效果而写，请根据自身需求修改， GitHub：https://github.com/pdd11997110103/appletCustomTabbar')
  },
  switchDialog(){
    let bool = this.data.show;
    this.setData({ show:!bool })
  }
})
