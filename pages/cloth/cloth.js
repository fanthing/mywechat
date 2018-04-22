// pages/cloth/cloth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "qq",
    addr: "",
    tel: ""
  },
  cancel: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  save: function () {
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
    console.log(this.data)
  },
  bindKeyInput1: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  bindKeyInput2: function (e) {
    this.setData({
      addr: e.detail.value
    })
  },
  bindKeyInput3: function (e) {
    this.setData({
      tel: e.detail.value
    })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})