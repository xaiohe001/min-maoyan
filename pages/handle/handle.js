// pages/handle/handle.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // score:99
    lists:[],
    b:10,
    a:1,
    n:1,
    test:'test'
  },
  getDatas(e){
    console.log(e);
    this.setData({
      a:e.detail.a,
      n:e.detail.n
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(0)
  },
  
  getData(a){
    var that = this
    wx.request({
      url: 'https://store.maoyan.com/mmall/api/mall/mallpro/v3/query.json?_v_=yes&theme=all&category=all&sort=timeDesc&offset='+a,
      method:"GET",
      success:function(res){
        // console.log(res.data.data);
        that.setData({
          lists:[...that.data.lists,...res.data.data]
        })
      },
      fail:function (err) {
        console.log(err);
        
      }
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
    this.data.lists=[]
    this.getData(0)
    this.setData({
      a:0
    })
  },
  
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let a = this.data.b
    this.setData({
      b: this.data.b+10
    })
    this.getData(a)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})