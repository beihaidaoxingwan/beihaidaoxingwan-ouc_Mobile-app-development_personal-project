// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:[
      {
        id:11,
        name:'威廉·华兹华斯',
        poster:'https://bkimg.cdn.bcebos.com/pic/7aec54e736d12f2e88fbd63b4bc2d562843568ea?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto'
      },
      {
        id:12,
        name:'柯尔律治',
        poster:'https://p1.ssl.qhimg.com/dr/270_500_/t01d9ae7b6139191b58.jpg?size=300x400'
      },
      {
        id:13,
        name:'夏多布里昂',
        poster:'https://file.mingyantong.com/category_pictures/201507/xiaduobuliangjingdianyulu2262.jpg'
      },
      {
        id:14,
        name:'雨果',
        poster:'https://ts1.cn.mm.bing.net/th/id/R-C.33f108a385f31617c06b2f54d6cbe6f9?rik=aETubfm4tyW8oQ&riu=http%3a%2f%2fwww.leewiart.com%2fuserfiles%2f22136%2ffad11da13c4247a8859266f81d38ee55_view_720.jpg%3f637568848699524753&ehk=8PpOrmUG7uhlA3wm1ZCOtUIrm%2fzEpStC9rwxXqYR1XE%3d&risl=&pid=ImgRaw&r=0'
      },
      {
        id:15,
        name:'海涅',
        poster:'https://ts1.cn.mm.bing.net/th/id/R-C.5aa25625c3c06682769c0398d3a2492d?rik=g3N%2bzM4l5CLgQg&riu=http%3a%2f%2fimg.zwbk.org%2fbaike%2fspic%2f2010%2f11%2f16%2f20101116034500903_4442.jpg&ehk=YtqJviahHnSBIF%2bdcfdZj44n1FK%2bmjQbpLiieXQMs%2bA%3d&risl=&pid=ImgRaw&r=0'
      },
    ]
  },

  goToDetail:function(res){
    //获取data-id的数据
    let id = res.currentTarget.dataset.id
    // console.log(res)
    //携带人物id进行页面跳转
    wx.navigateTo({
      url: '../detail/detail?id=' + id,
    })
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