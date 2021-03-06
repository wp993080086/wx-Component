var Map;
const mapSdk = require('../../plugIn/qqmap-wx-jssdk.min');

Page({
  data: {
    facilityList:[
      { type:0, title:'地铁' },
      { type:1, title:'医院' },
      { type:2, title:'超市' },
      { type:3, title:'餐饮' },
      { type:4, title:'娱乐' },
      { type:5, title:'学校' }
    ],
    facility:"餐饮",
    latitude:null,//纬度
    longitude:null,//经度
  },
  // 搜索设施
  searchFacility(e){
    let val = e.currentTarget.dataset.title;
    this.getLocation(val);
  },
  // 定位当前经纬
  getLocation(val){
    let _this = this;
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        _this.setData({
          latitude:res.latitude,
          longitude:res.longitude
        },() => {
          _this.mapSearch(val)
        })
      }
    })
  },
  // 地点搜索
  mapSearch(val){
    let _this = this;
    Map.search({
      keyword: val,  //搜索关键词
      location: `${_this.data.latitude},${_this.data.longitude}`,  //设置周边搜索中心点
      success: function (res) { //搜索成功后的回调
        let mks = []
        for (var i = 0; i < res.data.length; i++) {
          mks.push({
            title: res.data[i].title,
            id: res.data[i].id * 1,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng,
            iconPath: "/icon/location.png", //图标路径
            width: 30,
            height: 30,
            callout:{
              content:res.data[i].title,
              color:'#000000',
              fontSize:'14',
              bgColor:'#ffffff',
              borderColor:'#DD0E05',
              borderWidth:2,
              borderRadius:4,
              padding:6,
              display:'ALWAYS'
            }
          })
        }
        _this.setData({ //设置markers属性，将搜索结果显示在地图中
          markers: mks
        })
      },
      fail: function (res) {
        console.log(res);
      },
    });
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    Map = new mapSdk({
      key:'26MBZ-AQW6X-JZ74Q-ZW6OU-ZZ4VS-VKBMJ'
    });
    this.getLocation(this.data.facility);
  }
})