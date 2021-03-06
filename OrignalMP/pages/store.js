
// https://developers.weixin.qq.com/community/develop/article/doc/0004686e3c8980b53469f176e51413
// https://github.com/wechat-miniprogram/mobx-miniprogram-bindings
// 
import { observable, action } from 'mobx-miniprogram'
const chromaticScaleMap = {
  0:-1000,
  1:0,
  2:2,
  3:4,
  4:5,
  5:7,
  6:9,
  7:11
}
export const store = observable({
  one: 0,
  two: 0,
  four: 0,
  halfStep:0,
  octave:0,
  twoOctave:0,
  baseNote:60, //  midi note of C4

  get scale() {
    return this.one + this.two * 2  + this.four * 4;
  },

  get note() {
    return chromaticScaleMap[this.scale] + this.halfStep + 
     this.octave * 12 + this.twoOctave * 24 + this.baseNote
  },
});
