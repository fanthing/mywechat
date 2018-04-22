//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    bannerUrl: [{
      src: '/static/img/banner1.png',
      url: '1'
    }, {
      src: '/static/img/banner2.png',
      url: '2'
    }, {
      src: '/static/img/banner3.png',
      url: '3'
    }],
    interval: 5000,
    membercardNumber: '186****1111',
    membercardName: '布行名称',
    integral: 10000,
    sharebuttonsrc: '/static/img/share.png',
    sharetext: ["好友下单各得500分",
      "每年下单再得1000分"
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  integralItem: function () {
    wx.navigateTo({
      url: "/pages/integral/integral"
    })
  },
  tointroduction: function () {
    wx.navigateTo({
      url: '/pages/introduction/introduction'
    })
  },
  tapawiper: function (item) {
    console.log("1", item.currentTarget.dataset.url)
    wx.navigateTo({
      url: '/pages/consultation/consultation'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        wx.setStorageSync('userInfo', res.userInfo)
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          wx.setStorageSync('userInfo', res.userInfo)
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    wx.setStorageSync('userInfo', res.userInfo)
  }
})