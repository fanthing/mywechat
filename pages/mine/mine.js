// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    membercardName: '布行名称',
    phoneNumber: '13922220000',
    membercardaddre: '北京路张二胡同12巷9号1001',
    tel: '020 0000 0000',
    nextbuttonsrc: '/static/img/right.png',
    shareNumber: 12345678
  },
  tomyphone: function () {
    wx.navigateTo({
      url: '/pages/myphone/myphone'
    })
  },
  tocloth: function () {
    wx.navigateTo({
      url: '/pages/cloth/cloth'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userInfo = wx.getStorageSync('userInfo')
    this.setData({
      userInfo: userInfo
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