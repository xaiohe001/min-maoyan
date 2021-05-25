// pages/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    lists:[],
    focus:false,
    inputValue:'',
    countdown:'',
    endDates: "2021-11-11 11:11"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this);
    this.getData()
    this.getTimes()
  },

  jump(){
    // // 跳转tabbar页面 关闭其他所有非tabbar页面
    // wx.switchTab({
    //   url: '../main/main',
    // })

    // // 关闭所有页面 打开新页面 可以跳转tabbar页面
    // wx.reLaunch({
    //   url: '../logs/logs?name=xiaoqiu',
    // })

    // // 关闭当前页面 跳转到新页面 但是不能跳到tabbar页面
    // wx.redirectTo({
    //   url: '../logs/logs?name=xiaoyan',
    // })

    // 保留当前页面,跳转到应用内的某一个页面.但是不能跳到tabbar页面
    // wx.navigateTo({
    //   url: '../logs/logs',
    // })
  },
  getData(){
    var that = this
    wx.request({
      url: 'https://store.maoyan.com/mmall/api/ads/api/position/detail?ci=1&clientType=touch&channelId=4&version_name=&uuid=35F24FF0BD2E11EB82902BD766CD5BC76B9A9123EF264B948811331AE657F34A&positionIds=1132&os=ios',
      method:"GET",
      success:function(res){
        console.log(res.data.data[0].config);
        that.setData({
          lists:[...res.data.data[0].config]
        })
      },
      fail:function (err) {
        console.log(err);
        
      }
    })
  },
  getTimes(){
    var that = this;
    var date = new Date();
    var now = date.getTime();
    var endDate = new Date(that.data.endDates); // 设置截止时间
    var end = endDate.getTime();
    var lastTime = end - now; // 时间差
    var d, h, m, s;
    if (lastTime >= 0){
      d = Math.floor(lastTime / 1000 / 60 / 60 / 24);
      h = Math.floor(lastTime / 1000 / 60 / 60 % 24);
      m = Math.floor(lastTime / 1000 / 60 % 60);
      s = Math.floor(lastTime / 1000 % 60);
      s = s < 10 ? "0" + s : s
      m = m < 10 ? "0" + m : m
      h = h < 10 ? "0" + h : h
      that.setData({
        countdown: d + ":" + h + ":" + m +":"+s,
      })
      setTimeout(that.getTimes, 100);
    }else{
      console.log('已截止');
      that.setData({
        countdown: '00:00:00'
      })
    }
    
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
    // console.log(121);
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