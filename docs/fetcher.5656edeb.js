parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"zrxi":[function(require,module,exports) {
var define;
var global = arguments[3];
var t,e=arguments[3];!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof t&&t.amd?t(["exports"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).Spin={})}(this,function(t){"use strict";var e=function(){return(e=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},n={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},i=function(){function t(t){void 0===t&&(t={}),this.opts=e(e({},n),t)}return t.prototype.spin=function(t){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),o(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),t&&t.insertBefore(this.el,t.firstChild||null),function(t,e){var n=Math.round(e.corners*e.width*500)/1e3+"px",i="none";!0===e.shadow?i="0 2px 4px #000":"string"==typeof e.shadow&&(i=e.shadow);for(var a=function(t){for(var e=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,n=[],i=0,o=t.split(",");i<o.length;i++){var r=o[i],s=r.match(e);if(null!==s){var a=+s[2],d=+s[5],p=s[4],l=s[7];0!==a||p||(p=l),0!==d||l||(l=p),p===l&&n.push({prefix:s[1]||"",x:a,y:d,xUnits:p,yUnits:l,end:s[8]})}}return n}(i),d=0;d<e.lines;d++){var p=~~(360/e.lines*d+e.rotate),l=o(document.createElement("div"),{position:"absolute",top:-e.width/2+"px",width:e.length+e.width+"px",height:e.width+"px",background:r(e.fadeColor,d),borderRadius:n,transformOrigin:"left",transform:"rotate("+p+"deg) translateX("+e.radius+"px)"}),h=d*e.direction/e.lines/e.speed;h-=1/e.speed;var u=o(document.createElement("div"),{width:"100%",height:"100%",background:r(e.color,d),borderRadius:n,boxShadow:s(a,p),animation:1/e.speed+"s linear "+h+"s infinite "+e.animation});l.appendChild(u),t.appendChild(l)}}(this.el,this.opts),this},t.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},t}();function o(t,e){for(var n in e)t.style[n]=e[n];return t}function r(t,e){return"string"==typeof t?t:t[e%t.length]}function s(t,e){for(var n=[],i=0,o=t;i<o.length;i++){var r=o[i],s=a(r.x,r.y,e);n.push(r.prefix+s[0]+r.xUnits+" "+s[1]+r.yUnits+r.end)}return n.join(", ")}function a(t,e,n){var i=n*Math.PI/180,o=Math.sin(i),r=Math.cos(i);return[Math.round(1e3*(t*r+e*o))/1e3,Math.round(1e3*(-t*o+e*r))/1e3]}t.Spinner=i,Object.defineProperty(t,"__esModule",{value:!0})});
},{}],"Sc1o":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.spinner=exports.target=void 0;var e=require("./spin.js"),r={lines:20,length:0,width:30,radius:100,scale:.95,corners:1,speed:.5,rotate:0,animation:"spinner-line-shrink",direction:1,color:"#ff6b08",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};const n=document.querySelector(".spinner");exports.target=n;const t=new e.Spinner(r);exports.spinner=t;
},{"./spin.js":"zrxi"}],"dauc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fetchMovieData=s;var e=require("./spinner.js");const t={baseUrl:"https://api.themoviedb.org",apiKey:"7f0b2ade8b1437f0cdd83125131889c8"};async function s(s){e.spinner.spin(e.target);const a=await fetch(`${t.baseUrl}/3/movie/${s}?api_key=${t.apiKey}&language=en-US`);return e.spinner.stop(),a.json()}
},{"./spinner.js":"Sc1o"}]},{},["dauc"], null)
//# sourceMappingURL=/js_filmoteka/fetcher.5656edeb.js.map