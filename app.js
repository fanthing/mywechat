//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // wx.showLoading({
    //   title: '正在验证登陆',
    // })
    // setTimeout(function () {
    //   wx.hideLoading()
    //   wx.switchTab({
    //     url: '/pages/index/index'
    //   })
    // }, 2000)

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     console.log(res);
    //   }
    // })
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo
    //           wx.setStorageSync('userInfo', res.userInfo)
    //
    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     } else {
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo
    //           wx.setStorageSync('userInfo', res.userInfo)
    //
    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  globalData: {
    userInfo: null,
    serverUrl: 'http://m.yunseka.com',
    weixinId: null,
    loginstate: true,
    phone: '',
    membercardName: '',
    shareNumber: null
  },
  request: function (url, data, callback, fail) {
    wx.request({
      url: this.globalData.serverUrl + url, //仅为示例，并非真实的接口地址
      data: data,
      success: function (res) {
        console.log(res.data)
        callback(res);
      },
      fail: function (err) {
        console.log("err", err);
        wx.showToast({
          title: '网络故障，请稍后重试',
          duration: 2000,
          icon: 'none'
        })
        fail(err);
      }
    })
  }
})