// pages/discuss/discuss.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[],
    value:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  getValue(e){
    // console.log(e.detail.value);
    this.setData({
      value:e.detail.value
    })
  },
  add(){
    console.log('1',this.data.value);
    this.data.lists.push(this.data.value)
    this.setData({
      value:null,
      lists:this.data.lists
    })
  },
  getList(e){
    // console.log(e.detail);
      this.setData({
        lists:e.detail
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