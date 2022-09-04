// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword:'天行数据',
    poetry:[],
  },

  setword:function (res) {
    this.setData({
      keyword:res.detail.value
    })
  },

  getInfo:function(res) {
    console.log(this.data.keyword)
    wx.request({
      url: 'https://api.tianapi.com/cangtoushi/index', 
      method: 'POST', 
      data: {
	  key:'eb9e017e7e58f844c9ddfde14d3edd7b',word:this.data.keyword
	  }, 
      header: {
	  'Content-Type':'application/x-www-form-urlencoded'
	  }, 
      success:(res) => {
        if(res.data.code == 200){
      //  console.log(res.data)
       this.setData({
         poetry:res.data.newslist
       })
         }
      },
      fail: function (err) {
        console.log(err)
      },
    })
    console.log(this.data.poetry)
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

  }
})