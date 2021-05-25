// pages/componets/disList/disList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    lists:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    delete(e){
      console.log(e.currentTarget.dataset.id);
      this.data.lists.splice(e.currentTarget.dataset.id,1)
      this.setData({
        lists:this.data.lists
      })
      this.triggerEvent('send',this.data.lists)
    }
  }
})
