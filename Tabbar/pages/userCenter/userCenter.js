
Page({

  /**
  * 页面的初始数据
  */
  data: {
    show:false,
  },
  onLoad() {
    
  },
  switchDialog(){
    let bool = this.data.show;
    this.setData({ show:!bool })
  },
})