// pages/integral/integral.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    integralItem: [{
      id: 1,
      detailed: '购物赠送',
      datetime: '2018-04-10',
      integral: '100'
    }, {
      id: 2,
      detailed: '购物赠送',
      datetime: '2018-04-11',
      integral: '100'
    }, {
      id: 3,
      detailed: '购物赠送',
      datetime: '2018-04-12',
      integral: '100'
    }, {
      id: 4,
      detailed: '购物赠送',
      datetime: '2018-04-13',
      integral: '200'
    }, {
      id: 5,
      detailed: '兑换礼品',
      datetime: '2018-04-14',
      integral: '-800'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    console.log("上拉加载")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})