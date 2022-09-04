// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:[
      {
        id:1,
        name:'李白',
        poster:'https://ts1.cn.mm.bing.net/th/id/R-C.cdd6a89f24527c242061088967ade23c?rik=0S8wjp6vo3D3ew&riu=http%3a%2f%2fwww.askququ.com%2fuploads%2fallimg%2f200126%2f1_200126212832_1.jpg&ehk=s9kqLYNEYZ6sUXi%2bXugFkxCy%2b%2bYuJJgs6heq2blHRjE%3d&risl=&pid=ImgRaw&r=0'
      },
      {
        id:2,
        name:'李贺',
        poster:'https://ts1.cn.mm.bing.net/th/id/R-C.05b7c43a53ea1b1e798ce5c20a09bcc3?rik=ttaf6tzwVwxXkQ&riu=http%3a%2f%2fp.jingyanben.com%2f0612%2f0d6e0ea5e1f49.png&ehk=b2k9GOSLQ07sq2%2bDVg70WGwaEBtzF%2bAHnwkWhgkLk90%3d&risl=&pid=ImgRaw&r=0'
      },
      {
        id:3,
        name:'屈原',
        poster:'https://ts1.cn.mm.bing.net/th/id/R-C.1ba9059cb6b7606ec49710a6df3fdc58?rik=8g2r%2bVtnUSzWBQ&riu=http%3a%2f%2fpic.616pic.com%2fys_bnew_img%2f00%2f01%2f93%2fTwceJ3h5p0.jpg&ehk=4E89qhdH3s2qKvsl9EugiR%2fDUcdzmss1DTyX0LoEeiQ%3d&risl=&pid=ImgRaw&r=0'
      },
      {
        id:4,
        name:'李商隐',
        poster:'https://ts1.cn.mm.bing.net/th/id/R-C.1a0569a29c5e1e6eddc36cfb3e33ff8b?rik=QLQiNB4wEfU5mw&riu=http%3a%2f%2fpic.baike.soso.com%2fp%2f20120311%2f20120311164630-721824092.jpg&ehk=bQjia7vGGEDKE1pT7cLx4qSrnLwmYQr7Qpm5731vOWk%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1'
      },
      {
        id:5,
        name:'宋玉',
        poster:'https://p1.ssl.qhimg.com/t01c71de6b08e54e533.png'
      },
    ]
  },

  goToDetail:function(res){
    //获取data-id的数据
    let id = res.currentTarget.dataset.id
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