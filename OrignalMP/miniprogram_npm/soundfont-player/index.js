module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1654179213602, function(require, module, exports) {


var load = require('audio-loader')
var player = require('sample-player')

/**
 * Load a soundfont instrument. It returns a promise that resolves to a
 * instrument object.
 *
 * The instrument object returned by the promise has the following properties:
 *
 * - name: the instrument name
 * - play: A function to play notes from the buffer with the signature
 * `play(note, time, duration, options)`
 *
 *
 * The valid options are:
 *
 * - `format`: the soundfont format. 'mp3' by default. Can be 'ogg'
 * - `soundfont`: the soundfont name. 'MusyngKite' by default. Can be 'FluidR3_GM'
 * - `nameToUrl` <Function>: a function to convert from instrument names to URL
 * - `destination`: by default Soundfont uses the `audioContext.destination` but you can override it.
 * - `gain`: the gain of the player (1 by default)
 * - `notes`: an array of the notes to decode. It can be an array of strings
 * with note names or an array of numbers with midi note numbers. This is a
 * performance option: since decoding mp3 is a cpu intensive process, you can limit
 * limit the number of notes you want and reduce the time to load the instrument.
 *
 * @param {AudioContext} ac - the audio context
 * @param {String} name - the instrument name. For example: 'acoustic_grand_piano'
 * @param {Object} options - (Optional) the same options as Soundfont.loadBuffers
 * @return {Promise}
 *
 * @example
 * var Soundfont = require('sounfont-player')
 * Soundfont.instrument('marimba').then(function (marimba) {
 *   marimba.play('C4')
 * })
 */
function instrument (ac, name, options) {
  if (arguments.length === 1) return function (n, o) { return instrument(ac, n, o) }
  var opts = options || {}
  var isUrl = opts.isSoundfontURL || isSoundfontURL
  var toUrl = opts.nameToUrl || nameToUrl
  var url = isUrl(name) ? name : toUrl(name, opts.soundfont, opts.format)

  return load(ac, url, { only: opts.only || opts.notes }).then(function (buffers) {
    var p = player(ac, buffers, opts).connect(opts.destination ? opts.destination : ac.destination)
    p.url = url
    p.name = name
    return p
  })
}

function isSoundfontURL (name) {
  return /\.js(\?.*)?$/i.test(name)
}

/**
 * Given an instrument name returns a URL to to the Benjamin Gleitzman's
 * package of [pre-rendered sound fonts](https://github.com/gleitz/midi-js-soundfonts)
 *
 * @param {String} name - instrument name
 * @param {String} soundfont - (Optional) the soundfont name. One of 'FluidR3_GM'
 * or 'MusyngKite' ('MusyngKite' by default)
 * @param {String} format - (Optional) Can be 'mp3' or 'ogg' (mp3 by default)
 * @returns {String} the Soundfont file url
 * @example
 * var Soundfont = require('soundfont-player')
 * Soundfont.nameToUrl('marimba', 'mp3')
 */
function nameToUrl (name, sf, format) {
  format = format === 'ogg' ? format : 'mp3'
  sf = sf === 'FluidR3_GM' ? sf : 'MusyngKite'
  return 'https://gleitz.github.io/midi-js-soundfonts/' + sf + '/' + name + '-' + format + '.js'
}

// In the 1.0.0 release it will be:
// var Soundfont = {}
var Soundfont = require('./legacy')
Soundfont.instrument = instrument
Soundfont.nameToUrl = nameToUrl

if (typeof module === 'object' && module.exports) module.exports = Soundfont
if (typeof window !== 'undefined') window.Soundfont = Soundfont

}, function(modId) {var map = {"./legacy":1654179213603}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213603, function(require, module, exports) {


var parser = require('note-parser')

/**
 * Create a Soundfont object
 *
 * @param {AudioContext} context - the [audio context](https://developer.mozilla.org/en/docs/Web/API/AudioContext)
 * @param {Function} nameToUrl - (Optional) a function that maps the sound font name to the url
 * @return {Soundfont} a soundfont object
 */
function Soundfont (ctx, nameToUrl) {
  console.warn('new Soundfont() is deprected')
  console.log('Please use Soundfont.instrument() instead of new Soundfont().instrument()')
  if (!(this instanceof Soundfont)) return new Soundfont(ctx)

  this.nameToUrl = nameToUrl || Soundfont.nameToUrl
  this.ctx = ctx
  this.instruments = {}
  this.promises = []
}

Soundfont.prototype.onready = function (callback) {
  console.warn('deprecated API')
  console.log('Please use Promise.all(Soundfont.instrument(), Soundfont.instrument()).then() instead of new Soundfont().onready()')
  Promise.all(this.promises).then(callback)
}

Soundfont.prototype.instrument = function (name, options) {
  console.warn('new Soundfont().instrument() is deprecated.')
  console.log('Please use Soundfont.instrument() instead.')
  var ctx = this.ctx
  name = name || 'default'
  if (name in this.instruments) return this.instruments[name]
  var inst = {name: name, play: oscillatorPlayer(ctx, options)}
  this.instruments[name] = inst
  if (name !== 'default') {
    var promise = Soundfont.instrument(ctx, name, options).then(function (instrument) {
      inst.play = instrument.play
      return inst
    })
    this.promises.push(promise)
    inst.onready = function (cb) {
      console.warn('onready is deprecated. Use Soundfont.instrument().then()')
      promise.then(cb)
    }
  } else {
    inst.onready = function (cb) {
      console.warn('onready is deprecated. Use Soundfont.instrument().then()')
      cb()
    }
  }
  return inst
}

/*
 * Load the buffers of a given instrument name. It returns a promise that resolves
 * to a hash with midi note numbers as keys, and audio buffers as values.
 *
 * @param {AudioContext} ac - the audio context
 * @param {String} name - the instrument name (it accepts an url if starts with "http")
 * @param {Object} options - (Optional) options object
 * @return {Promise} a promise that resolves to a Hash of { midiNoteNum: <AudioBuffer> }
 *
 * The options object accepts the following keys:
 *
 * - nameToUrl {Function}: a function to convert from instrument names to urls.
 * By default it uses Benjamin Gleitzman's package of
 * [pre-rendered sound fonts](https://github.com/gleitz/midi-js-soundfonts)
 * - notes {Array}: the list of note names to be decoded (all by default)
 *
 * @example
 * var Soundfont = require('soundfont-player')
 * Soundfont.loadBuffers(ctx, 'acoustic_grand_piano').then(function(buffers) {
 *  buffers[60] // => An <AudioBuffer> corresponding to note C4
 * })
 */
function loadBuffers (ac, name, options) {
  console.warn('Soundfont.loadBuffers is deprecate.')
  console.log('Use Soundfont.instrument(..) and get buffers properties from the result.')
  return Soundfont.instrument(ac, name, options).then(function (inst) {
    return inst.buffers
  })
}
Soundfont.loadBuffers = loadBuffers

/**
 * Returns a function that plays an oscillator
 *
 * @param {AudioContext} ac - the audio context
 * @param {Hash} defaultOptions - (Optional) a hash of options:
 * - vcoType: the oscillator type (default: 'sine')
 * - gain: the output gain value (default: 0.4)
  * - destination: the player destination (default: ac.destination)
 */
function oscillatorPlayer (ctx, defaultOptions) {
  defaultOptions = defaultOptions || {}
  return function (note, time, duration, options) {
    console.warn('The oscillator player is deprecated.')
    console.log('Starting with version 0.9.0 you will have to wait until the soundfont is loaded to play sounds.')
    var midi = note > 0 && note < 129 ? +note : parser.midi(note)
    var freq = midi ? parser.midiToFreq(midi, 440) : null
    if (!freq) return

    duration = duration || 0.2

    options = options || {}
    var destination = options.destination || defaultOptions.destination || ctx.destination
    var vcoType = options.vcoType || defaultOptions.vcoType || 'sine'
    var gain = options.gain || defaultOptions.gain || 0.4

    var vco = ctx.createOscillator()
    vco.type = vcoType
    vco.frequency.value = freq

    /* VCA */
    var vca = ctx.createGain()
    vca.gain.value = gain

    /* Connections */
    vco.connect(vca)
    vca.connect(destination)

    vco.start(time)
    if (duration > 0) vco.stop(time + duration)
    return vco
  }
}

/**
 * Given a note name, return the note midi number
 *
 * @name noteToMidi
 * @function
 * @param {String} noteName
 * @return {Integer} the note midi number or null if not a valid note name
 */
Soundfont.noteToMidi = parser.midi

module.exports = Soundfont

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1654179213602);
})()
//miniprogram-npm-outsideDeps=["audio-loader","sample-player","note-parser"]
//# sourceMappingURL=index.js.map