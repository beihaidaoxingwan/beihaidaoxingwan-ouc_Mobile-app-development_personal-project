// pages/detail/detail.js

var common = require('../util/common.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    person:{
        id:1,
        name:'李白',
        date:'701年—762年12月',
        place:'山东',
        poster:'https://ts1.cn.mm.bing.net/th/id/R-C.cdd6a89f24527c242061088967ade23c?rik=0S8wjp6vo3D3ew&riu=http%3a%2f%2fwww.askququ.com%2fuploads%2fallimg%2f200126%2f1_200126212832_1.jpg&ehk=s9kqLYNEYZ6sUXi%2bXugFkxCy%2b%2bYuJJgs6heq2blHRjE%3d&risl=&pid=ImgRaw&r=0',
        introduce:'李白（701年—762年12月），字太白，号青莲居士，又号“谪仙人”，唐代伟大的浪漫主义诗人，被后人誉为“诗仙”，与杜甫并称为“李杜”，为了与另两位诗人李商隐与杜牧即“小李杜”区别，杜甫与李白又合称“大李杜”。《旧唐书》记载李白为山东人 ；《新唐书》记载，李白为兴圣皇帝李暠九世孙，与李唐诸王同宗。其人爽朗大方，爱饮酒作诗，喜交友 。',
        work1:'《望庐山瀑布》',
        work2:'《行路难》',
        work3:'《将进酒》'
      },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
        //检验是否携带id号进入页面
    // console.log(options.id)
    let id = options.id
    // let result = common.getNewsDetail(id)
    // if(result.code == 200){
    //   this.setData({
    //     article:result.news
    //   })
    // }

    //检查当前新闻是否在收藏夹中
    //不存在
      let result = common.getpersonDetail(id)
      if(result.code == 200){
      this.setData({
        person:result.person
      })
      }
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