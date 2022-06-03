import  { WebAudioFontPlayer } from './webaudiofont'

import  { _tone_0250_SoundBlasterOld_sf2 } from './0250_SoundBlasterOld_sf2.js'

const app = getApp()
const audioCtx = wx.createWebAudioContext()
let oscillator = audioCtx.createOscillator()


Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    
  },

  touchstart() {
    console.log("touchstart")
    oscillator = audioCtx.createOscillator()
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
    oscillator.connect(audioCtx.destination);
    oscillator.start();
  },
  // 事件处理函数
  touchend() {
    console.log("touchend")
    oscillator.stop();
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
