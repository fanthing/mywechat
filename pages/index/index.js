//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    bannerUrl: [],
    interval: 5000,
    membercardNumber: '186****1111',
    membercardName: '布行名称',
    integral: 0,
    sharebuttonsrc: '/static/img/share.png',
    sharetext: ["好友下单各得500果币",
      "每年下单再得1000果币"
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
    console.log("1", item.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/consultation/consultation?id=' + item.currentTarget.dataset.id
    })
  },
  onLoad: function () {
    this.setData({
      userInfo: app.globalData.userInfo || {},
      membercardNumber: app.globalData.phone,
      membercardName: app.globalData.membercardName
    })
    app.request('/appService/getTotalPointByWeixinId', {
      weixinId: app.globalData.weixinId
    }, (res) => {
      if (res.data.code == 200) {
        console.log(res)
        app.globalData.shareNumber = res.data.rows.shareCode;
        this.setData({
          integral: res.data.rows.point
        })
      } else {
        wx.showToast({
          title: res.data.message,
          duration: 2000,
          icon: 'none'
        })
      }
    }, function (err) {
      console.log("err", err);
      wx.showToast({
        title: '网络故障，请稍后重试',
        duration: 2000,
        icon: 'none'
      })
    })
    app.request('/appService/getAdvertList', {
      weixinId: app.globalData.weixinId
    }, (res) => {
      if (res.data.code == 200) {
        var url = [];
        for (let i in res.data.rows) {
          url.push({
            src: res.data.rows[i].banner,
            id: res.data.rows[i].id
          })
        }
        this.setData({
          bannerUrl: url
        })

      } else {
        wx.showToast({
          title: res.data.message,
          duration: 2000,
          icon: 'none'
        })
      }
    }, function (err) {
      console.log("err", err);
      wx.showToast({
        title: '网络故障，请稍后重试',
        duration: 2000,
        icon: 'none'
      })
    })
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