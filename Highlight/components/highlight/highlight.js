Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text:String,
    key:{
      type:String,
      value:'',
      observer:'_changeText'
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    highlightList:[],//处理后的数据
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 非空过滤
    _changeText(e){
      if(e.length > 0){
        this._filterHighlight(this.properties.text, e);
      }
    },
    /**
    * 关键字高亮处理
    * @param { String } text - 文本
    * @param { String } key - 关键字
    */
    _filterHighlight(text, key){
      let textList = text.split("");
      let keyList = key.split("");
      let list = [];
      for(let i = 0;i < textList.length;i++){
        let obj = {
          deep:false,
          val:textList[i]
        }
        list.push(obj);
      };
      for(let k = 0;k < keyList.length;k++){
        list.forEach(item => {
          if(item.val === keyList[k]){
            item.deep = true;
          }
        })
      }
      this.setData({ highlightList:list })
    }
  }
})