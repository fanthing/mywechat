// pages/register/register.js
// pages/mine/mine.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    membercardName: '',
    phone: "",
    addr: "",
    shareNumber: "",
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
    if (!this.data.checkbox.checked) {
      wx.showToast({
        title: '请先阅读并勾选用户协议',
        icon: 'none'
      })
      return false;
    }
    if (this.data.phone == "") {
      wx.showToast({
        title: '请先填写电话',
        icon: 'none'
      })
      return false;
    }
    if (this.data.membercardName == "") {
      wx.showToast({
        title: '请先填写布行名称',
        icon: 'none'
      })
      return false;
    }
    if (this.data.addr == "") {
      wx.showToast({
        title: '请先填写布行地址',
        icon: 'none'
      })
      return false;
    }
    wx.showLoading({
      title: '正在注册'
    })

    app.request("/appService/register", {
      weixinId: app.globalData.weixinId,
      nickname: this.data.userInfo.nickName,
      weixinProfilePhoto: this.data.userInfo.avatarUrl
    }, (res) => {
      console.log(res.data)
      if (res.data.code == 200) {
        app.request('/appService/updateUserInfo', {
          weixinId: app.globalData.weixinId,
          companyName: this.data.membercardName,
          companyaddr: this.data.addr,
          nickname: this.data.userInfo.nickName,
          mobile: this.data.phone
        }, (res) => {
          if (res.data.code == 200) {
            app.globalData.phone = this.data.phone;
            app.globalData.membercardName = this.data.membercardName;
            console.log('注册成功')
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
    });




    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
    console.log(this.data)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var userInfo = wx.getStorageSync('userInfo')
    // this.setData({
    //   userInfo: userInfo
    // })
    if (app.globalData.weixinId) {
      console.log(app.globalData.weixinId)
    } else {
      wx.showLoading({
        title: '正在验证登陆',
      })
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          console.log(res);
          //如果登陆了
          app.globalData.weixinId = 33;
          //如果没登陆
          wx.hideLoading()
        }
      })
      //获取微信用户信息
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo
          })
          if (app.globalData.loginstate) {
            wx.hideLoading()
            wx.switchTab({
              url: '/pages/index/index'
            })
          }
        },
        fail: err => {
          console.log("err", err);
          app.globalData.userInfo = {};
          if (app.globalData.loginstate) {
            wx.hideLoading()
            wx.switchTab({
              url: '/pages/index/index'
            })
          }
        }

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})