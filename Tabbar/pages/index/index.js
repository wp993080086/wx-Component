const app = getApp()

Page({
  data: {
    show:false,
  },
  onLoad() {
    
  },
  switchDialog(){
    let bool = this.data.show;
    this.setData({ show:!bool })
  }
})
