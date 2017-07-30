// movable.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: 20,
    y: 20
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
    setInterval(() => {
      this.x += 1;
      this.y +=1;
    }, 10)
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
    console.log("你下拉了");
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
  
  },

  touchmove(e){
    console.log(e);
  },

  touchend(e){
    // setTimeout(this.reset, 500)
    // console.log("touchend", e);
    // console.log(e.target.x);
    // this.x = this.y = 0;
    this.setData({
      x: 20,
      y: 20 
    })
  },

  reset(){
    // this.query = this.query || wx.createSelectorQuery();
    // this.query.select(".movable-view").fields({
    //   x: true,
    //   y: true,
    //   dataset: true
    // }, res => {
    //   console.log(res)
    // })
  },

  tap(){
    var x = 20
    if(this.data.x === 20) {
      x = 100;
    }
    this.setData({
      x: x
    })
  }
})