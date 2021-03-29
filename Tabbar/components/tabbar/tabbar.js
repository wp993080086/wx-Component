// 切换孩子组件
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nowIndex:Number
  },
  options: {
    // 共享全局样式
    addGlobalClass: true
  },
  /**
   * 组件的初始数据
   */
  data: {
    tabbarList:[
      {
        index:0,
        pagePath:'../index/index',
        title:"首页",
        icon: "../../images/home.png",
        onIcon: "../../images/home1.png",
        color: "#9B9B9B",
        onColor: "#19C29C",
      },
      {
        index:1,
        pagePath:'',
        icon: "../../images/look.png",
        onIcon: "../../images/look.png",
      },
      {
        index:2,
        pagePath:'../userCenter/userCenter',
        title:"个人中心",
        icon: "../../images/my.png",
        onIcon: "../../images/my1.png",
        color: "#9B9B9B",
        onColor: "#19C29C",
      }
    ],
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 切换
    changePage(e){
      let { path,index } = e.currentTarget.dataset;
      if(index === 1){
        this.chickLook();
        return false;
      };
      wx.switchTab({
        url: path
      });
    },
    // 点击中间的眼睛
    chickLook(){
      this.triggerEvent('switchDialog');
    }
  }
})
