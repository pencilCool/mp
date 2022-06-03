import  { WebAudioFontPlayer } from './webaudiofont'

import  { _tone_0250_SoundBlasterOld_sf2 } from './0250_SoundBlasterOld_sf2.js'
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    
  },

  touchstart() {
   
  },
  // 事件处理函数
  touchend() {
 
  },

  touchstartHalfStep () {
    console.log("touchstartHalfStep")
  },

  touchendHalfStep () {
    console.log("touchendHalfStep")
  },

  touchstartOctave () {
    console.log("touchstartOctave")
  },

  touchendOctave () {
    console.log("touchendOctave")
  },

  touchstartTwoOctaves () {
    console.log("touchstartTwoOctaves")
  },

  touchendTwoOctaves () {
    console.log("touchendTwoOctaves")
  },

  touchstart1() {
   console.log("touchstart1")
  },

  touchend1() {
    console.log("touchend1")
  },

  touchstart2() {
    console.log("touchstart2")
  },

  touchend2() {
    console.log("touchend2")
  },

  touchstart4() {
    console.log("touchstart4")
  },

  touchend4() {
    console.log("touchend4")
  },

  tap() {
      console.log("tap")
      const audioContext = wx.createWebAudioContext()
			var player= new WebAudioFontPlayer();
			player.loader.decodeAfterLoading(audioContext, '_tone_0250_SoundBlasterOld_sf2');
			function play(){
				player.queueWaveTable(audioContext, audioContext.destination
					, _tone_0250_SoundBlasterOld_sf2, 0, 12*4+7, 2);
        return false;
        }
      play()
  },

  onLoad() {
   
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
