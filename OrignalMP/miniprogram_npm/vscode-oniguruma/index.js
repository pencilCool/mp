module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1654223908551, function(require, module, exports) {
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.onig=n():t.onig=n()}(this,(function(){return t={770:function(t,n,e){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0}),n.setDefaultDebugCall=n.createOnigScanner=n.createOnigString=n.loadWASM=n.OnigScanner=n.OnigString=void 0;const i=r(e(418));let o=null,a=!1;class f{constructor(t){const n=t.length,e=f._utf8ByteLength(t),r=e!==n,i=r?new Uint32Array(n+1):null;r&&(i[n]=e);const o=r?new Uint32Array(e+1):null;r&&(o[e]=n);const a=new Uint8Array(e);let s=0;for(let e=0;e<n;e++){const f=t.charCodeAt(e);let u=f,c=!1;if(f>=55296&&f<=56319&&e+1<n){const n=t.charCodeAt(e+1);n>=56320&&n<=57343&&(u=65536+(f-55296<<10)|n-56320,c=!0)}r&&(i[e]=s,c&&(i[e+1]=s),u<=127?o[s+0]=e:u<=2047?(o[s+0]=e,o[s+1]=e):u<=65535?(o[s+0]=e,o[s+1]=e,o[s+2]=e):(o[s+0]=e,o[s+1]=e,o[s+2]=e,o[s+3]=e)),u<=127?a[s++]=u:u<=2047?(a[s++]=192|(1984&u)>>>6,a[s++]=128|(63&u)>>>0):u<=65535?(a[s++]=224|(61440&u)>>>12,a[s++]=128|(4032&u)>>>6,a[s++]=128|(63&u)>>>0):(a[s++]=240|(1835008&u)>>>18,a[s++]=128|(258048&u)>>>12,a[s++]=128|(4032&u)>>>6,a[s++]=128|(63&u)>>>0),c&&e++}this.utf16Length=n,this.utf8Length=e,this.utf16Value=t,this.utf8Value=a,this.utf16OffsetToUtf8=i,this.utf8OffsetToUtf16=o}static _utf8ByteLength(t){let n=0;for(let e=0,r=t.length;e<r;e++){const i=t.charCodeAt(e);let o=i,a=!1;if(i>=55296&&i<=56319&&e+1<r){const n=t.charCodeAt(e+1);n>=56320&&n<=57343&&(o=65536+(i-55296<<10)|n-56320,a=!0)}n+=o<=127?1:o<=2047?2:o<=65535?3:4,a&&e++}return n}createString(t){const n=t._omalloc(this.utf8Length);return t.HEAPU8.set(this.utf8Value,n),n}}class s{constructor(t){if(this.id=++s.LAST_ID,!o)throw new Error("Must invoke loadWASM first.");this._onigBinding=o,this.content=t;const n=new f(t);this.utf16Length=n.utf16Length,this.utf8Length=n.utf8Length,this.utf16OffsetToUtf8=n.utf16OffsetToUtf8,this.utf8OffsetToUtf16=n.utf8OffsetToUtf16,this.utf8Length<1e4&&!s._sharedPtrInUse?(s._sharedPtr||(s._sharedPtr=o._omalloc(1e4)),s._sharedPtrInUse=!0,o.HEAPU8.set(n.utf8Value,s._sharedPtr),this.ptr=s._sharedPtr):this.ptr=n.createString(o)}convertUtf8OffsetToUtf16(t){return this.utf8OffsetToUtf16?t<0?0:t>this.utf8Length?this.utf16Length:this.utf8OffsetToUtf16[t]:t}convertUtf16OffsetToUtf8(t){return this.utf16OffsetToUtf8?t<0?0:t>this.utf16Length?this.utf8Length:this.utf16OffsetToUtf8[t]:t}dispose(){this.ptr===s._sharedPtr?s._sharedPtrInUse=!1:this._onigBinding._ofree(this.ptr)}}n.OnigString=s,s.LAST_ID=0,s._sharedPtr=0,s._sharedPtrInUse=!1;class u{constructor(t){if(!o)throw new Error("Must invoke loadWASM first.");const n=[],e=[];for(let r=0,i=t.length;r<i;r++){const i=new f(t[r]);n[r]=i.createString(o),e[r]=i.utf8Length}const r=o._omalloc(4*t.length);o.HEAPU32.set(n,r/4);const i=o._omalloc(4*t.length);o.HEAPU32.set(e,i/4);const a=o._createOnigScanner(r,i,t.length);for(let e=0,r=t.length;e<r;e++)o._ofree(n[e]);o._ofree(i),o._ofree(r),0===a&&function(t){throw new Error(t.UTF8ToString(t._getLastOnigError()))}(o),this._onigBinding=o,this._ptr=a}dispose(){this._onigBinding._freeOnigScanner(this._ptr)}findNextMatchSync(t,n,e){let r=a,i=0;if("number"==typeof e?(8&e&&(r=!0),i=e):"boolean"==typeof e&&(r=e),"string"==typeof t){t=new s(t);const e=this._findNextMatchSync(t,n,r,i);return t.dispose(),e}return this._findNextMatchSync(t,n,r,i)}_findNextMatchSync(t,n,e,r){const i=this._onigBinding;let o;if(o=e?i._findNextOnigScannerMatchDbg(this._ptr,t.id,t.ptr,t.utf8Length,t.convertUtf16OffsetToUtf8(n),r):i._findNextOnigScannerMatch(this._ptr,t.id,t.ptr,t.utf8Length,t.convertUtf16OffsetToUtf8(n),r),0===o)return null;const a=i.HEAPU32;let f=o/4;const s=a[f++],u=a[f++];let c=[];for(let n=0;n<u;n++){const e=t.convertUtf8OffsetToUtf16(a[f++]),r=t.convertUtf8OffsetToUtf16(a[f++]);c[n]={start:e,end:r,length:r-e}}return{index:s,captureIndices:c}}}n.OnigScanner=u;let c=!1,l=null;n.loadWASM=function(t){if(c)return l;let n,e,r,a;if(c=!0,function(t){return"function"==typeof t.instantiator}(t))n=t.instantiator,e=t.print;else{let r;!function(t){return void 0!==t.data}(t)?r=t:(r=t.data,e=t.print),n=function(t){return"undefined"!=typeof Response&&t instanceof Response}(r)?"function"==typeof WebAssembly.instantiateStreaming?function(t){return n=>WebAssembly.instantiateStreaming(t,n)}(r):function(t){return async n=>{const e=await t.arrayBuffer();return WebAssembly.instantiate(e,n)}}(r):function(t){return n=>WebAssembly.instantiate(t,n)}(r)}return l=new Promise(((t,n)=>{r=t,a=n})),function(t,n,e,r){i.default({print:n,instantiateWasm:(n,e)=>{if("undefined"==typeof performance){const t=()=>Date.now();n.env.emscripten_get_now=t,n.wasi_snapshot_preview1.emscripten_get_now=t}return t(n).then((t=>e(t.instance)),r),{}}}).then((t=>{o=t,e()}))}(n,e,r,a),l},n.createOnigString=function(t){return new s(t)},n.createOnigScanner=function(t){return new u(t)},n.setDefaultDebugCall=function(t){a=t}},418:t=>{var n=("undefined"!=typeof document&&document.currentScript&&document.currentScript.src,function(t){var n,e,r=void 0!==(t=t||{})?t:{};r.ready=new Promise((function(t,r){n=t,e=r}));var i,o={};for(i in r)r.hasOwnProperty(i)&&(o[i]=r[i]);var a,f=[],s=!1,u=!1,c=!0,l="";function p(t){return r.locateFile?r.locateFile(t,l):l+t}c&&(a=function(t){var n;return"function"==typeof readbuffer?new Uint8Array(readbuffer(t)):(v("object"==typeof(n=read(t,"binary"))),n)},"undefined"!=typeof scriptArgs?f=scriptArgs:void 0!==arguments&&(f=arguments),"undefined"!=typeof onig_print&&("undefined"==typeof console&&(console={}),console.log=onig_print,console.warn=console.error="undefined"!=typeof printErr?printErr:onig_print));var h=r.print||console.log.bind(console),d=r.printErr||console.warn.bind(console);for(i in o)o.hasOwnProperty(i)&&(r[i]=o[i]);o=null,r.arguments&&(f=r.arguments),r.thisProgram&&r.thisProgram,r.quit&&r.quit;var g,_,m=function(t){};r.wasmBinary&&(g=r.wasmBinary),r.noExitRuntime,"object"!=typeof WebAssembly&&z("no native wasm support detected");var y=!1;function v(t,n){t||z("Assertion failed: "+n)}var w,S,A,b="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function O(t,n,e){for(var r=n+e,i=n;t[i]&&!(i>=r);)++i;if(i-n>16&&t.subarray&&b)return b.decode(t.subarray(n,i));for(var o="";n<i;){var a=t[n++];if(128&a){var f=63&t[n++];if(192!=(224&a)){var s=63&t[n++];if((a=224==(240&a)?(15&a)<<12|f<<6|s:(7&a)<<18|f<<12|s<<6|63&t[n++])<65536)o+=String.fromCharCode(a);else{var u=a-65536;o+=String.fromCharCode(55296|u>>10,56320|1023&u)}}else o+=String.fromCharCode((31&a)<<6|f)}else o+=String.fromCharCode(a)}return o}function U(t,n){return t?O(S,t,n):""}function x(t,n){return t%n>0&&(t+=n-t%n),t}function P(t){w=t,r.HEAP8=new Int8Array(t),r.HEAP16=new Int16Array(t),r.HEAP32=A=new Int32Array(t),r.HEAPU8=S=new Uint8Array(t),r.HEAPU16=new Uint16Array(t),r.HEAPU32=new Uint32Array(t),r.HEAPF32=new Float32Array(t),r.HEAPF64=new Float64Array(t)}"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le"),r.INITIAL_MEMORY;var T,R=[],E=[],M=[],L=[];function I(){if(r.preRun)for("function"==typeof r.preRun&&(r.preRun=[r.preRun]);r.preRun.length;)N(r.preRun.shift());$(R)}function D(){$(E)}function W(){$(M)}function C(){if(r.postRun)for("function"==typeof r.postRun&&(r.postRun=[r.postRun]);r.postRun.length;)k(r.postRun.shift());$(L)}function N(t){R.unshift(t)}function k(t){L.unshift(t)}E.push({func:function(){ut()}});var B=0,H=null,j=null;function F(t){B++,r.monitorRunDependencies&&r.monitorRunDependencies(B)}function V(t){if(B--,r.monitorRunDependencies&&r.monitorRunDependencies(B),0==B&&(null!==H&&(clearInterval(H),H=null),j)){var n=j;j=null,n()}}function z(t){r.onAbort&&r.onAbort(t),d(t+=""),y=!0,t="abort("+t+"). Build with -s ASSERTIONS=1 for more info.";var n=new WebAssembly.RuntimeError(t);throw e(n),n}function q(t,n){return String.prototype.startsWith?t.startsWith(n):0===t.indexOf(n)}r.preloadedImages={},r.preloadedAudios={};var Y="data:application/octet-stream;base64,";function G(t){return q(t,Y)}var J,K="onig.wasm";function Q(t){try{if(t==K&&g)return new Uint8Array(g);if(a)return a(t);throw"both async and sync fetching of the wasm failed"}catch(t){z(t)}}function X(){return g||!s&&!u||"function"!=typeof fetch?Promise.resolve().then((function(){return Q(K)})):fetch(K,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+K+"'";return t.arrayBuffer()})).catch((function(){return Q(K)}))}function Z(){var t={env:st,wasi_snapshot_preview1:st};function n(t,n){var e=t.exports;r.asm=e,P((_=r.asm.memory).buffer),T=r.asm.__indirect_function_table,V()}function i(t){n(t.instance)}function o(n){return X().then((function(n){return WebAssembly.instantiate(n,t)})).then(n,(function(t){d("failed to asynchronously prepare wasm: "+t),z(t)}))}if(F(),r.instantiateWasm)try{return r.instantiateWasm(t,n)}catch(t){return d("Module.instantiateWasm callback failed with error: "+t),!1}return(g||"function"!=typeof WebAssembly.instantiateStreaming||G(K)||"function"!=typeof fetch?o(i):fetch(K,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,t).then(i,(function(t){return d("wasm streaming compile failed: "+t),d("falling back to ArrayBuffer instantiation"),o(i)}))}))).catch(e),{}}function $(t){for(;t.length>0;){var n=t.shift();if("function"!=typeof n){var e=n.func;"number"==typeof e?void 0===n.arg?T.get(e)():T.get(e)(n.arg):e(void 0===n.arg?null:n.arg)}else n(r)}}function tt(t,n,e){S.copyWithin(t,n,n+e)}function nt(){return S.length}function et(t){try{return _.grow(t-w.byteLength+65535>>>16),P(_.buffer),1}catch(t){}}function rt(t){var n=nt(),e=2147483648;if(t>e)return!1;for(var r=1;r<=4;r*=2){var i=n*(1+.2/r);if(i=Math.min(i,t+100663296),et(Math.min(e,x(Math.max(t,i),65536))))return!0}return!1}G(K)||(K=p(K)),J="undefined"!=typeof dateNow?dateNow:function(){return performance.now()};var it={mappings:{},buffers:[null,[],[]],printChar:function(t,n){var e=it.buffers[t];0===n||10===n?((1===t?h:d)(O(e,0)),e.length=0):e.push(n)},varargs:void 0,get:function(){return it.varargs+=4,A[it.varargs-4>>2]},getStr:function(t){return U(t)},get64:function(t,n){return t}};function ot(t,n,e,r){for(var i=0,o=0;o<e;o++){for(var a=A[n+8*o>>2],f=A[n+(8*o+4)>>2],s=0;s<f;s++)it.printChar(t,S[a+s]);i+=f}return A[r>>2]=i,0}function at(t){m(0|t)}var ft,st={emscripten_get_now:J,emscripten_memcpy_big:tt,emscripten_resize_heap:rt,fd_write:ot,setTempRet0:at},ut=(Z(),r.___wasm_call_ctors=function(){return(ut=r.___wasm_call_ctors=r.asm.__wasm_call_ctors).apply(null,arguments)});function ct(t){function e(){ft||(ft=!0,r.calledRun=!0,y||(D(),W(),n(r),r.onRuntimeInitialized&&r.onRuntimeInitialized(),C()))}t=t||f,B>0||(I(),B>0||(r.setStatus?(r.setStatus("Running..."),setTimeout((function(){setTimeout((function(){r.setStatus("")}),1),e()}),1)):e()))}if(r.___errno_location=function(){return(r.___errno_location=r.asm.__errno_location).apply(null,arguments)},r._omalloc=function(){return(r._omalloc=r.asm.omalloc).apply(null,arguments)},r._ofree=function(){return(r._ofree=r.asm.ofree).apply(null,arguments)},r._getLastOnigError=function(){return(r._getLastOnigError=r.asm.getLastOnigError).apply(null,arguments)},r._createOnigScanner=function(){return(r._createOnigScanner=r.asm.createOnigScanner).apply(null,arguments)},r._freeOnigScanner=function(){return(r._freeOnigScanner=r.asm.freeOnigScanner).apply(null,arguments)},r._findNextOnigScannerMatch=function(){return(r._findNextOnigScannerMatch=r.asm.findNextOnigScannerMatch).apply(null,arguments)},r._findNextOnigScannerMatchDbg=function(){return(r._findNextOnigScannerMatchDbg=r.asm.findNextOnigScannerMatchDbg).apply(null,arguments)},r.stackSave=function(){return(r.stackSave=r.asm.stackSave).apply(null,arguments)},r.stackRestore=function(){return(r.stackRestore=r.asm.stackRestore).apply(null,arguments)},r.stackAlloc=function(){return(r.stackAlloc=r.asm.stackAlloc).apply(null,arguments)},r.dynCall_jiji=function(){return(r.dynCall_jiji=r.asm.dynCall_jiji).apply(null,arguments)},r.UTF8ToString=U,j=function t(){ft||ct(),ft||(j=t)},r.run=ct,r.preInit)for("function"==typeof r.preInit&&(r.preInit=[r.preInit]);r.preInit.length>0;)r.preInit.pop()();return ct(),t.ready});t.exports=n}},n={},function e(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={exports:{}};return t[r].call(o.exports,o,o.exports,e),o.exports}(770);var t,n}));
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1654223908551);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map