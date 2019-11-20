import regeneratorRuntime from "../../lib/regenerator/runtime-module";
import { userCenter, getJobCount } from "../../api/apis";
import { shareObjTostr, throttle } from "../../utils/util";
import { createCardLink01, createCardLink02 } from "../../utils/createShareImg";
import { ENV } from "../../profile";
var template = require("../tabBar/tabbar.js");
let { timestampToTime } = require("../../utils/common")
var onfire = require('../../utils/event')


//获取应用实例
const app = getApp();
Page({
  onTabItemTap(item) {
    App.zhuge.track('点击底Tab「我的」')
  },
  data:{
    userData: null,
    user: {},
    shareLink: null,
    close: true,
	radarLayer: false,
	showRedPoint:'1',//是否显示小红点
  },
  onLoad() {
    this.getUserInfor()
    wx.getCount()
    template.tabbar("tabBar", 4, this)
    App.zhuge.track('进入个人中心页')
  },
  onReady: function() {},
  // 获取formId
  formId: function (e) {
    app.formId(e.detail.formId)
  },
  // 页面跳转函数
  jump: throttle(function (e) {
    let name = e.currentTarget.dataset.name
    if(name == 'myProve') {
      if (!this.data.userData.cardId){
        wx.showModal({
          title: "名片未完善",
          content: "为了更好的体验趣劳务，建议完善名片",
          cancelText: "再想想",
          cancelColor: "#999999",
          confirmText: "去完善",
          confirmColor: "#FF585A",
          success(res) {
            if (res.confirm) {
              wx.navigateTo({
                url:"/pages/subSupply/pages/createCard/createCardFirst/createCardFirst"
              });
            } else if (res.cancel) {
            }
          }
        });
        return false
      }
    }
    switch (name) {
      case 'jobManage':
        App.zhuge.track('点击招聘信息')
      break;
      case 'focusList':
        App.zhuge.track('点击我的关注')
      break;
      case 'fansList':
        App.zhuge.track('点击我的粉丝')
      break;
      case 'collectList':
        App.zhuge.track('点击我的收藏')
      break;
      case 'contactUs':
        App.zhuge.track('点击联系我们')
      break;
      default:
      break
    }
    wx.navigateTo({
      url: `/pages/subHome/pages/${name}/${name}`
    })
  }),
  goBusiness: throttle(function(){
    App.zhuge.track('点击进入我的个人主页')
    if (this.data.userData.cardId){
		wx.setStorageSync('redPoint','1');
      wx.navigateTo({
        url: '/pages/subHome/pages/business/business'
      })
    } else {
      wx.navigateTo({
        url: '/pages/subSupply/pages/createCard/createCardFirst/createCardFirst?from=home'
      })
    }
  }),
  // 获取个人信息
  async getUserInfor() {
    const res = await userCenter({
      data: {}
    })
    let userData = res.data
    this.setData({
      userData: userData,
      card : {
        imgUrl: res.data.avatar,
        name: res.data.nickName,
        companyName: res.data.company
      },
      jobCount: res.data.shareLink.count,
      jobList: res.data.shareLink.info,
      companyStatus: res.data.companyStatus
    })
    this.secondWay()
  },
  onShow:function(){
    this.getUserInfor();
	wx.getCount()
    template.tabbar("tabBar", 4, this)
    // 生命周期函数--监听页面显示
    let userInfo = ''
    if(ENV.onLine) {
      userInfo = wx.getStorageSync('userInfo')
    } else {
      userInfo = wx.getStorageSync('devuserInfo')
	}
    this.setData({
	  user: userInfo,
	  showRedPoint:wx.getStorageSync('redPoint') || '0'
    })
  },
  toast(){
    wx.showToast({
      title: '功能尚未开放',
      icon: 'none'
    })
  },
  onShareAppMessage: function (options) {
    if(options.target && options.target.id == 'radar') {
      App.zhuge.track('工头雷达点击立即邀请', {
        '页面标题': '个人中心',
        '用户名称': app.globalData.userInfo.nickname,
        '工头雷达邀请人数':  app.globalData.userInfo.radarData.firstData.count
	  })
      return app.randarShare('个人中心');
    } else {
      // this.zhugeShareTrack(options.from, 0, 1)
      // 用户点击右上角分享
      let title = ''
      if(this.data.userData.shareLink.count == 1){
        title = `您好，我在寻求《${this.data.jobList[0].title}》招聘需求合作`
      } else if (this.data.userData.shareLink.count > 1){
        title = `您好，我在寻求《${this.data.jobList[0].title}、${this.data.jobList[1].title}》等${this.data.jobCount}个招聘需求合作`
      } else {
        title = `您好，我是${this.data.card.name}。这是我的微信名片`
      }
      let userInfo = app.globalData.userInfo
      let obj = {
        path: 'business',
        cardId: this.data.user.cardId,
        visitType: 2,
        ued: userInfo.ued
      }
      let path = shareObjTostr(obj)
      return {
        title,
        imageUrl: this.data.shareLink,
        path: `/pages/index/index?scene=${path}`// 分享路径
      }
    }
  },
  secondWay(){
    if(this.data.jobCount>0){
      createCardLink01({
        card: this.data.card,
        jobCount: this.data.jobCount,
        job: this.data.jobList[0]
      }, (tempFilePath) => {
        this.setData({
          shareLink: tempFilePath
        })
      }, (err) => {
      })
    } else {
      createCardLink02(this.data.card, (tempFilePath) => {
        this.setData({
          shareLink: tempFilePath
        })
      }, (err) => {
      })
    }
  },
  noCard() {
    if (this.data.user.cardId) {
      wx.showToast({
        title: "图片生成较慢，请3秒后重新点击",
        icon: "none"
      })
    } else {
      wx.showToast({
        title: "请完善名片",
        icon: "none"
      })
    }
  },
  groupTap() {
    App.zhuge.track('点击入群Banner')
    this.setData({
      close: false
    })
  },
  close() {
    this.setData({
      close: true
    })
  },
  showNotify(){
	  let data={
		imgUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKzXP3Z2VoWfcBHL4C4HyUpEwAI0iajEnTy8OkQ7k0h8DpjEaLIrLyjU5ic9ZbQ8fDyK4zWd9wdxytg/132',
		content: '通知动画测试',
		notifyTimeMillis: Date.now(),
		userId:'211',
	  }
	  wx.setStorageSync('serverNotice',data);
	  onfire.fire('serverNotice');
  },
  withCompany(e){
	  let self=this;
	  let {card,company,companyPage } =e.currentTarget.dataset;
	  if(card){
      if(company == '2'){
        if(self.data.companyStatus == 1) {
          wx.navigateTo({
            url: '/pages/subCompany/pages/editCompany/editCompany'
          })
        } else {
          wx.navigateTo({
            url:'/pages/subCompany/pages/publishCompany/publishCompany'
          });
        }
      }else{
        self.stopCompany();//公司认证阻断
      }
	  }else{
		wx.showModal({
			title: '完善信息',
			content: '完善信息后才能创建公司主页',
			cancelText: '稍后完善',
			cancelColor: '#999999',
			confirmText: '去完善',
			confirmColor: '#FF585A',
			success(res) {
				if (res.confirm) {
					wx.navigateTo({
						url: '/pages/subSupply/pages/createCard/createCardFirst/createCardFirst?from=home'
					})
				} else if (res.cancel) {
					App.zhuge.track('完善信息点击「取消」')
				}
			}
		})
	  }

  },
	stopCompany(){
		wx.showModal({
			title: "完善信息",
			content:
				"您需要通过企业认证，才能创建公司主页",
			cancelText: "再想想",
			cancelColor: "#999999",
			confirmText: "去认证",
			confirmColor: "#FF585A",
			success(res) {
				if (res.confirm) {
					wx.navigateTo({
						url: "/pages/subHome/pages/myProve/myProve"
					});
				} else if (res.cancel) {
				}
			}
		});
	}
})
