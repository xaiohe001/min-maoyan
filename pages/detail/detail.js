// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:null,
    msg:[],
    activeIndex:0,
    winHeight: '100%',
    toView: 'productBox',
    nowstatus:'productBox',
    list:[],
    a:0,
    productBoxTop:0,//505
    commentBoxTop:0,//5151
    infoBoxTop: 0//5642
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
    // console.log(options);
    wx.request({
      url: 'https://store.maoyan.com/mmall/api/mall/goods/queryDealById.json?channelId=4&version_name=&uuid=BCAB56A0848E11EBADB85BD92CD5F4F819F6CE90AED24F46A32650943282C66C&dealId='+options.id,
      method: "GET",
      success: (res) => {
        // console.log(res.data.data.derivativeDetail);
        that.setData({
          title:res.data.data.derivativeDetail.title,
          msg:res.data.data.derivativeDetail
        })
        this.getImg(this.data.msg.detailImages)
      },
      fail: (err) => {
        console.log(err);
      },
    })
    this.getLimitedTime()
  },
  getLimitedTime(){
    var that = this
    wx.request({
      url: `https://store.maoyan.com/mmall/api/mall/mallpro/v3/deal/interrelated.json?dealId=100413847&offset=${that.data.a}&limit=6`,
      method:"GET",
      success:function(res){
        // console.log(that.data.a);
        // console.log(res.data.data);
        that.setData({
          list:[...res.data.data]
        })
      },
      fail:function (err) {
        console.log(err);
        
      }
    })
  },
  obtain(){
    // console.log(Number(this.data.a+=6));
    this.data.a=this.data.a+=6
    this.getLimitedTime()
  },
  changeImg(e){
    var that = this
    that.activeIndex = e.detail.current
    this.setData({
      activeIndex:e.detail.current
    })
  },
  toViewClick(e) {
    this.setData({
      toView:e.currentTarget.dataset.hash
    })
    // console.log(e.currentTarget.dataset.hash);
    switch (e.currentTarget.dataset.hash){
      case 'commentBox':
        wx.pageScrollTo({scrollTop: this.data.commentBoxTop,})
        break;
      case 'infoBox':
        wx.pageScrollTo({scrollTop: this.data.infoBoxTop,})
        break;
      case 'productBox':
        wx.pageScrollTo({scrollTop: this.data.productBoxTop,})
        break;
      default:
        console.log('没有符合条件的');
    }
  },

  getImg(imgArr) {
    this.imageReady(imgArr).then(() => {
      //do something
      const query = wx.createSelectorQuery()
      query.selectAll('.position').boundingClientRect(res=>{
        let arr = []
        res.forEach(res=>{
          console.log(res.top);
          arr.push(res.top - 50)
        })
        this.setData({
          productBoxTop:arr[0] ,//505
          commentBoxTop:arr[1],//5151
          infoBoxTop: arr[2]//5642
        })
        // console.log(this.data.productBoxTop, this.data.commentBoxTop, this.data.infoBoxTop);
      }).exec()
    })
  },
  imageReady(pics) {
      const picsAll = pics.map(imgurl => new Promise((resolve, reject) => {
        // 小程序判断多张图片是否加载完成方法
          wx.getImageInfo({
              src: imgurl,
              success: function() {
                  resolve(imgurl);
              },
              fail: function() {
                reject(new Error('image load error'));
              }
          });
          // H5 判断图片是否加载完成方法
          // const img = new Image();
          // img.src = imgurl;
          // img.onload = () => resolve(imgurl);
          // img.onerror = () => reject(new Error('image load error'));
      }));
      return Promise.all(picsAll).then(()=>{})
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