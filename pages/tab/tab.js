// pages/tab/tab.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:['区域','房型','价格','面积'],
    arr:[0, 0, 0, 0],
    contents:[
      ['郑州','洛阳','开封','商丘','信阳'],
      ['一室一厅','两室一厅','三室一厅','五室两厅'],
      ['10W','20W','50W','60W','80W','1000W'],
      ['100平','120平','200平','300平','500平','1000平']
    ],
    num:0
    
  },
  replace(e){
    this.data.titles.splice(this.data.num,1,e.currentTarget.dataset.txt)
    this.data.arr.splice(this.data.num,1,e.currentTarget.dataset.index)
    this.setData({
      titles:this.data.titles,
      arr:this.data.arr
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  tab(e){
    this.setData({
      num: e.currentTarget.dataset.index
      
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})