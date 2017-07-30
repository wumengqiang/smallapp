// check.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    options: [
      {
        label: '北京',
        value: 1,
        checked: true,
      }, {
        label: '上海',
        value: '2',
        checked: true,

      }, {
        label: '杭州',
        value: '3',
      }, {
        label: '深圳',
        value: '4',
      }, {
        label: '成都',
        value: '5',
      }, {
        label: '威海',
        value: '6',
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  checkboxChange(event) {
    console.log('event', event);
    console.log('value', event.detail.value);
  },
});
