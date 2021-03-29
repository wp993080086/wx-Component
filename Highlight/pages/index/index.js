Page({
  data: {
    value:"",
    list:[
      '武汉大学',
      '华中科技大学',
      '华中师范大学',
      '中南财经政法大学',
      '中国地质大学',
      '武汉理工大学',
      '华中农业大学',
      '武汉科技大学',
    ],
    filterList:[],//过滤后的
  },
  // 搜索
  searchValue(e){
    let val = e.detail.value;
    this.setData({ value:val })
    if(val.length > 0){
      this.setData({ filterList:[] })
      let arr = [];
      for(let i = 0;i < this.data.list.length;i++){
        if(this.data.list[i].indexOf(val) > -1){
          arr.push(this.data.list[i])
        }
      }
      this.setData({ filterList: arr })
    }else{
      this.setData({ filterList: [] })
    }
  },
  // 选中
  pitchOn(e){
    let index = e.currentTarget.dataset.index;
    wx.showToast({ title: `选中：${this.data.filterList[index]}`, icon: "none" });
  },
})