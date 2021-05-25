// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:null,
    msg:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id);
    // this.setData({
    //   title:options.id
    // })
    var that = this
    console.log(options.id);
    wx.request({
      url: 'https://store.maoyan.com/mmall/api/mall/goods/queryDealById.json?channelId=4&version_name=&uuid=BCAB56A0848E11EBADB85BD92CD5F4F819F6CE90AED24F46A32650943282C66C&dealId='+options.id,
      method: "GET",
      success: (res) => {
        console.log(res.data.data.derivativeDetail);
        that.setData({
          title:res.data.data.derivativeDetail.title,
          msg:res.data.data.derivativeDetail
        })
      },
      fail: (err) => {
        console.log(err);
      },
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