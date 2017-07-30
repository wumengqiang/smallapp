// index.js
// 获取应用实例
const app = getApp();
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    demos: [
      {
        id: 'components',
        desc: '基础组件使用',

      },
    ],
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    });
  },
  onLoad() {
    console.log('onLoad');
    const that = this;
    // 调用应用实例的方法获取全局数据
    app.getUserInfo((userInfo) => {
      // 更新数据
      that.setData({
        userInfo,
      });
    });
  },
  onReady() {
    console.log('onReady');
    console.log(wx.canIUse('movable-view'));
    wx.navigateTo({
      url: '/pages/components/movable',
    });
  },
  redirect(page, event) {
    const id = event.target.dataset.id;

    console.log(page, event);
  },

});
