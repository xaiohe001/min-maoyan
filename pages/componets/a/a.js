// componets/a/a.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    a:{
      a:'444',
      n:'666'
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    send(){
      this.triggerEvent('sends',this.data.a,this.data.n)
    }
  }
})
