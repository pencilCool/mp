
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
  }
})
