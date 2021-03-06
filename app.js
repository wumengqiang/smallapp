// app.js
App({
  onLaunch() {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
  },
  onShow() { // 小程序从后台进入到前台
    if (wx.canIUse('setEnableDebug')) {
      wx.setEnableDebug({
        enableDebug: true,
      });
    }
  },
  onHide() { // 小程序从前台进入到后台

  },
  getUserInfo(cb) {
    const that = this;
    if (this.globalData.userInfo) {
      typeof cb === 'function' && cb(this.globalData.userInfo);
    } else {
      // 调用登录接口
      wx.login({
        success() {
          wx.getUserInfo({
            success(res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb === 'function' && cb(that.globalData.userInfo);
            },
          });
        },
      });
    }
  },
  globalData: {
    userInfo: null,
  },
});
