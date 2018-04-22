// pages/register/register.js
// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    membercardName: '',
    phone: "",
    addr: "",
    checkbox: {
      value: 1,
      checked: true
    }
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);

    var values = e.detail.value;
    this.data.checkbox.checked = false;
    if (this.data.checkbox.value == values[0]) {
      this.data.checkbox.checked = true;
    }

    this.setData({
      checkbox: this.data.checkbox
    });
  },
  bindKeyInput1: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  bindKeyInput2: function (e) {
    this.setData({
      membercardName: e.detail.value
    })
  },
  bindKeyInput3: function (e) {
    this.setData({
      addr: e.detail.value
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