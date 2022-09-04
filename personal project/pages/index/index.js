// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'../../images/爱心1.png',
    poetry:{},
    nickName:'',
    isLogin:false
  },

  getUserProfile:function(res) {
    wx.getUserProfile({
      desc: '获取个人信息',
      success:(res) =>{
        let info = res.userInfo
        this.setData({
          nickName:info.nickName,
          src:info.avatarUrl,
          isLogin:true
        })
      },
    })
    wx.request({
      url: 'https://api.tianapi.com/qingshi/index', 
      method: 'POST', 
      data: {
	  key:'你申请的API'
	  }, 
      header: {
	  'Content-Type':'application/x-www-form-urlencoded'
	  }, 
      success: (res)=> {
        if(res.data.code == 200){
       this.setData({
         poetry:res.data.newslist[0]
       })
         }
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },

  goto_History:function (res) {
    wx.switchTab({  

      url:'../main/main'  
      
          });  
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
