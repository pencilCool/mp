




# Snap  Code 

### oscillator
const audioCtx = wx.createWebAudioContext()
let oscillator = audioCtx.createOscillator()

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