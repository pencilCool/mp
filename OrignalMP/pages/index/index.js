
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { observable, action, autorun } from 'mobx-miniprogram'
import { store } from '../store'

import  { WebAudioFontPlayer } from './webaudiofont'

import  { _tone_0250_SoundBlasterOld_sf2 } from './0250_SoundBlasterOld_sf2.js'
// import  { _tone_0000_JCLive_sf2_file } from './0000_JCLive_sf2_file.js'

import  { _tone_0750_Chaos_sf2_file } from './0750_Chaos_sf2_file.js'


const audioContext = wx.createWebAudioContext()
var player= new WebAudioFontPlayer();
player.loader.decodeAfterLoading(audioContext, '_tone_0750_Chaos_sf2_file');

const app = getApp()

Page({
  data: {
  },

  touchstartHalfStep () {
    store.halfStep = 1
  },

  touchendHalfStep () {
    if(this.playNote) {
      this.playNote.cancel()
    }
    store.halfStep = 0
  },

  touchstartOctave () {
    store.octave = 1
  },

  touchendOctave () {
    if(this.playNote) {
      this.playNote.cancel()
    }
    store.octave = 0
  },

  touchstartTwoOctaves () {
    store.twoOctave = 1
  },

  touchendTwoOctaves () {
    if(this.playNote) {
      this.playNote.cancel()
    }
    store.twoOctave = 0 
  },

  touchstart1() {
   store.one = 1;
  },

  touchend1() {
    if(this.playNote) {
      this.playNote.cancel()
    }
    store.one = 0
  },

  touchstart2() {
    store.two = 1
  },

  touchend2() {
    if(this.playNote) {
      this.playNote.cancel()
    }
    store.two = 0
  },

  touchstart4() {
    store.four = 1
  },

  touchend4() {
    if(this.playNote) {
      this.playNote.cancel()
    }
    store.four = 0
  },

  play(note){
    if(this.playNote) {
      this.playNote.cancel()
    }
    this.playNote  =  player.queueWaveTable(audioContext, audioContext.destination
      , _tone_0750_Chaos_sf2_file, 0, note, 10);
    
  },

  stopPlay() {
    if(this.playNote) {
      this.playNote.cancel()
    }
  },

  tap() {
    this.play(60)
  },

  goSetting() {
    wx.navigateTo({
      url:'/pages/settings/index'
    })
  },

  onLoad() {
    this.storeBindings = createStoreBindings(this, {
      store, 
      fields: ["scale","note"]
    })

    this.play(60)

    autorun(() => {
      if (store.note > 0) {
        this.play(store.note)
      } else {
        this.stopPlay()
      }
     
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
  }
})
