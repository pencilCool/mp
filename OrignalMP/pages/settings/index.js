// pages/settings/index.js
// https://www.inspiredacoustics.com/en/MIDI_note_numbers_and_center_frequencies

// import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../store'
import { midi_note_name } from './midi_note'

Page({
  data: {
    notePickerIndex:0,
    baseNotes: midi_note_name
  },

  bindPickerChange: function (e) {
    this.setData({
      notePickerIndex:e.detail.value
    })
    store.baseNote = this.data.baseNotes[this.data.notePickerIndex].note
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        notePickerIndex:midi_note_name.findIndex(x => x.note === store.baseNote)
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})