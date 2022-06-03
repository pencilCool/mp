
// https://developers.weixin.qq.com/community/develop/article/doc/0004686e3c8980b53469f176e51413
// https://github.com/wechat-miniprogram/mobx-miniprogram-bindings
// 
import { observable, action } from 'mobx-miniprogram'

export const store = observable({
  // 数据字段
  one: 0,
  two: 0,
  four: 0,

  halfStep:0,

  // 计算属性
  get scale() {
    return this.one + this.two * 2  + this.four * 4;
  },

  // // actions
  // update: action(function () {
  //   const sum = this.sum;
  //   this.numA = this.numB;
  //   this.numB = sum;
  // }),
});
