// pages/charts/charts.js
var charts=require("../../utils/wxcharts.js")
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    new charts({
      canvasId:"pie",
      type: 'pie',
     series: [{
        name: 'cat1',
        data: 50,
    }, {
        name: 'cat2',
        data: 30,
    }, {
        name: 'cat3',
        data: 1,
    }, {
        name: 'cat4',
        data: 1,
    }, {
        name: 'cat5',
        data: 46,
    }],
    width: 360,
    height: 200,
    dataLabel: true
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})