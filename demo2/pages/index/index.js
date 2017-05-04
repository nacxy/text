//index.js
//获取应用实例
var parmas={
  data:{
  array:[
    "http://temp.im/640x376/ffccff",
     "http://temp.im/640x376/ccccff",
      "http://temp.im/640x376/ffcccc",
  ],
  dataList:[]
  },
   clickMe:function(){
         wx.navigateTo({
           url: '../charts/charts',
           success: function(res){
             // success
           },
           fail: function(res) {
             // fail
           },
           complete: function(res) {
             // complete
           }
         })
      },
  onPullDownRefresh:function(){
   wx.showToast({
      title:"loading",
      loading:"loading"
   })
  },
  onLoad:function(){
    var that=this
    wx.request({
      url: 'http://v.juhe.cn/toutiao/index?type=top&key=a17e1a42796ccd8a2632c73aacb894f8',
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res)
        that.setData({
           dataList:res.data.result.data
        })
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  }
}
Page(parmas)