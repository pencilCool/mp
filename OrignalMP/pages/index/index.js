import  { WebAudioFontPlayer } from './webaudiofont'

import  { _tone_0250_SoundBlasterOld_sf2 } from './0250_SoundBlasterOld_sf2.js'

import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from 'store'

const app = getApp()

Page({
  data: {
  },

  touchstart() {
   
  },
  // 事件处理函数
  touchend() {
 
  },

  touchstartHalfStep () {
    store.halfStep = 1
  },

  touchendHalfStep () {
    store.halfStep = 0
  },

  touchstartOctave () {
    store.octave = 1
  },

  touchendOctave () {
    store.octave = 0
  },

  touchstartTwoOctaves () {
    store.twoOctave = 1
  },

  touchendTwoOctaves () {
    store.twoOctave = 0 
  },

  touchstart1() {
   console.log("touchstart1")
   store.one = 1;
  },

  touchend1() {
    console.log("touchend1")
    store.one = 0
  },

  touchstart2() {
    store.two = 1
  },

  touchend2() {
    store.two = 0
  },

  touchstart4() {
    store.four = 1
  },

  touchend4() {
    store.four = 0
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
    this.storeBindings = createStoreBindings(this, {
      store, 
      fields: ["scale","note"]
    })
  },

  onUnload() {
    this.storeBindings.destroyStoreBindings();
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
