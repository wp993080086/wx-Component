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
      '华师附中',
      '大数据网络学院'
    ],
    filterList:[],//过滤后的
  },
  // 模糊匹配搜索
  searchValue(e){
    let val = e.detail.value;
    this.setData({ value:val })
    if(val.length > 0){
      this.setData({ filterList:[] })
      let arr = [];
      let arrTwo = val.split('')
      for(let i = 0;i < this.data.list.length;i++){
        for(let o = 0;o < arrTwo.length;o++){
          if(this.data.list[i].indexOf(arrTwo[o]) > -1){
            if(!arr.includes(this.data.list[i])){
              arr.push(this.data.list[i])
            }
          }
        }
      }
      this.setData({ filterList: arr })
    }else{
      this.setData({ filterList: [] })
    }
  },
  // 完全匹配搜索
  searchValueAll(e){
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