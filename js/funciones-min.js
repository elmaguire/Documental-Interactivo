var menuSource=document.getElementById("contenedor-Template").innerHTML,menuTemplate=Handlebars.compile(menuSource);document.getElementById("interactivo").innerHTML=menuTemplate(contenidoInteractivo);

/*
 * QueryLoader2 - A simple script to create a preloader for images
 *
 * For instructions read the original post:
 * http://www.gayadesign.com/diy/queryloader2-preload-your-images-with-ease/
 *
 * Copyright (c) 2011 - Gaya Kessler
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Version: 3.0.7
 * Last update: 2014-11-21
 */
!function t(e,i,s){function n(o,a){if(!i[o]){if(!e[o]){var l="function"==typeof require&&require;if(!a&&l)return l(o,!0);if(r)return r(o,!0);throw new Error("Cannot find module '"+o+"'")}var h=i[o]={exports:{}};e[o][0].call(h.exports,function(t){var i=e[o][1][t];return n(i?i:t)},h,h.exports,t,e,i,s)}return i[o].exports}for(var r="function"==typeof require&&require,o=0;o<s.length;o++)n(s[o]);return n}({1:[function(t,e){function i(t){"use strict";this.src=t,this.element=null,"undefined"!=typeof t&&this.create()}var s=t("./ImageLoaded.js");i.prototype.create=function(){"use strict";this.element=document.createElement("img"),this.element.setAttribute("src",this.src)},i.prototype.preload=function(t){"use strict";s(this.element,function(e,i){t(e,i)})},e.exports=i},{"./ImageLoaded.js":2}],2:[function(t,e){function i(t,e){"use strict";function i(t,e,i,s){t.addEventListener?t[i?"addEventListener":"removeEventListener"](e,s):t[i?"attachEvent":"detachEvent"]("on"+e,s)}function n(){i(t,"load",!1,n),i(t,"error",!1,n),e(null,!1)}var r;return t.nodeName?"img"!==t.nodeName.toLowerCase()?e(new Error("Element supplied is not an image")):t.src&&t.complete&&void 0!==t.naturalWidth?e(null,!0):(i(t,"load",!0,n),i(t,"error",!0,n),(t.readyState||t.complete)&&(r=t.src,t.src=s,t.src=r),void 0):e(new Error("First argument must be an image element"))}var s="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";e.exports=i},{}],3:[function(t,e){function i(t){"use strict";this.parent=t,this.sources=[],this.images=[],this.loaded=0,this.deepSearch=!0}var s=t("./Image.js");i.prototype.getImageSrcs=function(t){"use strict";if(this.sources=[],"undefined"!=typeof t&&(this.findImageInElement(t),this.deepSearch===!0))for(var e=t.querySelectorAll("*"),i=0;i<e.length;i++)"SCRIPT"!==e[i].tagName&&this.findImageInElement(e[i]);return this.sources},i.prototype.findAndPreload=function(t){"use strict";if("undefined"!=typeof t){this.sources=this.getImageSrcs(t);for(var e=0;e<this.sources.length;e++){var i=new s(this.sources[e]);i.preload(this.imageLoaded.bind(this)),this.images.push(i)}}},i.prototype.imageLoaded=function(){"use strict";this.loaded++,this.updateProgress()},i.prototype.updateProgress=function(){"use strict";this.parent.updateProgress(this.loaded,this.sources.length)},i.prototype.findImageInElement=function(t){"use strict";var e=this.determineUrlAndType(t);if(!this.hasGradient(e.url)){e.url=this.stripUrl(e.url);for(var i=e.url.split(", "),s=0;s<i.length;s++)if(this.validUrl(i[s])&&this.urlIsNew(i[s])){var n="";(this.isIE()||this.isOpera())&&(n="?rand="+Math.random()),this.sources.push(i[s]+n)}}},i.prototype.determineUrlAndType=function(t){"use strict";var e="",i="normal",s=t.currentStyle||window.getComputedStyle(t,null);return""!==s.backgroundImage&&"none"!==s.backgroundImage||""!==t.style.backgroundImage&&"none"!==t.style.backgroundImage?(e=s.backgroundImage||t.style.backgroundImage,i="background"):"undefined"!=typeof t.getAttribute("src")&&"img"===t.nodeName.toLowerCase()&&(e=t.getAttribute("src")),{url:e,type:i}},i.prototype.hasGradient=function(t){"use strict";return-1!==t.indexOf("gradient(")},i.prototype.stripUrl=function(t){"use strict";return t=t.replace(/url\(\"/g,""),t=t.replace(/url\(/g,""),t=t.replace(/\"\)/g,""),t=t.replace(/\)/g,"")},i.prototype.validUrl=function(t){"use strict";return t.length>0&&!t.match(/^(data:)/i)?!0:!1},i.prototype.urlIsNew=function(t){"use strict";return-1===this.sources.indexOf(t)},i.prototype.isIE=function(){"use strict";return navigator.userAgent.match(/msie/i)},i.prototype.isOpera=function(){"use strict";return navigator.userAgent.match(/Opera/i)},e.exports=i},{"./Image.js":1}],4:[function(t,e){function i(){"use strict";this.element=null,this.className="queryloader__overlay__bar",this.barHeight=1,this.barColor="#fff"}i.prototype.create=function(){"use strict";this.element=document.createElement("div"),this.element.setAttribute("class",this.className),this.setStyling(),this.updateProgress(0,0)},i.prototype.setStyling=function(){"use strict";this.element.style.height=this.barHeight+"px",this.element.style.marginTop="-"+this.barHeight/2+"px",this.element.style.backgroundColor=this.barColor,this.element.style.position="absolute",this.element.style.top="50%",this.setTransitionTime(100)},i.prototype.updateProgress=function(t,e){"use strict";parseInt(t)<0?t=0:parseInt(t)>100&&(t=100),0!==e&&this.setTransitionTime(e),this.element.style.width=parseInt(t)+"%"},i.prototype.setTransitionTime=function(t){"use strict";this.element.style.WebkitTransition="width "+t+"ms",this.element.style.MozTransition="width "+t+"ms",this.element.style.OTransition="width "+t+"ms",this.element.style.MsTransition="width "+t+"ms",this.element.style.Transition="width "+t+"ms"},e.exports=i},{}],5:[function(t,e){function i(){"use strict";this.element=null,this.idName="qlPercentage",this.className="queryloader__overlay__percentage",this.barHeight=1,this.barColor="#fff"}i.prototype.create=function(){"use strict";this.element=document.createElement("div"),this.element.setAttribute("class",this.className),this.element.setAttribute("id",this.idName),this.applyStyling(),this.updateProgress(0,0)},i.prototype.applyStyling=function(){"use strict";this.element.style.height="40px",this.element.style.width="100%",this.element.style.position="absolute",this.element.style.fontSize="3em",this.element.style.top="50%",this.element.style.left="0",this.element.style.marginTop="-"+(59+this.barHeight)+"px",this.element.style.textAlign="center",this.element.style.color=this.barColor},i.prototype.updateProgress=function(t){"use strict";parseInt(t)<0?t=0:parseInt(t)>100&&(t=100),this.element.innerHTML=parseInt(t)+"%"},e.exports=i},{}],6:[function(t,e){function i(t){"use strict";this.parentElement=t,this.idName="qLoverlay",this.percentageId="qlPercentage",this.className="queryloader__overlay",this.element=null,this.loadingBar=null,this.percentage=null,this.barColor="#ff0000",this.backgroundColor="#000",this.barHeight=1,this.fadeOutTime=300,this.showPercentage=!1}var s=t("./LoadingBar.js"),n=t("./Percentage.js");i.prototype.init=function(){"use strict";this.create(),this.loadingBar=new s,this.loadingBar.barHeight=this.barHeight,this.loadingBar.barColor=this.barColor,this.loadingBar.create(),this.element.appendChild(this.loadingBar.element),this.showPercentage&&(this.percentage=new n,this.percentage.barColor=this.barColor,this.percentage.idName=this.percentageId,this.percentage.create(),this.element.appendChild(this.percentage.element)),this.parentElement.appendChild(this.element)},i.prototype.create=function(){"use strict";this.element=document.querySelector("#"+this.idName)||document.createElement("div"),this.element.setAttribute("class",this.className),this.element.setAttribute("id",this.idName),this.applyStyling()},i.prototype.applyStyling=function(){"use strict";this.element.style.position=this.calculatePosition(),this.element.style.width="100%",this.element.style.height="100%",this.element.style.backgroundColor=this.backgroundColor,this.element.style.backgroundPosition="fixed",this.element.style.zIndex=666999,this.element.style.top="0",this.element.style.left="0",this.element.style.WebkitTransition="opacity "+this.fadeOutTime+"ms",this.element.style.MozTransition="opacity "+this.fadeOutTime+"ms",this.element.style.OTransition="opacity "+this.fadeOutTime+"ms",this.element.style.MsTransition="opacity "+this.fadeOutTime+"ms",this.element.style.Transition="opacity "+this.fadeOutTime+"ms"},i.prototype.calculatePosition=function(){"use strict";var t="absolute";return"body"===this.parentElement.tagName.toLowerCase()?t="fixed":("fixed"!==this.parentElement.style.position||"absolute"!==this.parentElement.style.position)&&(this.parentElement.style.position="relative"),t},i.prototype.updateProgress=function(t,e){"use strict";null!==this.loadingBar&&this.loadingBar.updateProgress(t,e),null!==this.percentage&&this.percentage.updateProgress(t,e)},i.prototype.remove=function(){"use strict";this.element.parentNode.removeChild(this.element)},e.exports=i},{"./LoadingBar.js":4,"./Percentage.js":5}],7:[function(){Function.prototype.bind||(Function.prototype.bind=function(t){"use strict";if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),i=this,s=function(){},n=function(){return i.apply(this instanceof s&&t?this:t,e.concat(Array.prototype.slice.call(arguments)))};return s.prototype=this.prototype,n.prototype=new s,n})},{}],8:[function(t,e){function i(t,e){"use strict";this.element=t,this.options=e,this.done=!1,this.maxTimeout=null,this.defaultOptions={onComplete:function(){},backgroundColor:"#000",barColor:"#fff",overlayId:"qLoverlay",percentageId:"qLpercentage",barHeight:1,percentage:!1,deepSearch:!0,minimumTime:300,maxTime:1e4,fadeOutTime:1e3},this.overlay=null,this.preloader=null,null!==t&&this.init()}var s=t("./ImagePreloader/"),n=t("./Overlay/");i.prototype.init=function(){"use strict";this.options=this.extend(this.defaultOptions,this.options),"undefined"!=typeof this.element&&(this.createOverlay(),this.createPreloader(),this.startMaxTimeout())},i.prototype.extend=function(t,e){"use strict";"undefined"==typeof t&&(t={});for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},i.prototype.startMaxTimeout=function(){"use strict";this.maxTimeout=window.setTimeout(this.doneLoading.bind(this),this.options.maxTime)},i.prototype.createOverlay=function(){"use strict";this.overlay=new n(this.element),this.overlay.idName=this.options.overlayId,this.overlay.percentageId=this.options.percentageId,this.overlay.backgroundColor=this.options.backgroundColor,this.overlay.barHeight=this.options.barHeight,this.overlay.barColor=this.options.barColor,this.overlay.showPercentage=this.options.percentage,this.overlay.fadeOutTime=this.options.fadeOutTime,"undefined"!=typeof this.element&&this.overlay.init()},i.prototype.createPreloader=function(){"use strict";this.preloader=new s(this),this.preloader.deepSearch=this.options.deepSearch,window.setTimeout(function(){this.preloader.findAndPreload(this.element)}.bind(this),100)},i.prototype.updateProgress=function(t,e){"use strict";this.overlay.updateProgress(t/e*100,this.options.minimumTime),t===e&&this.done===!1&&(window.clearTimeout(this.maxTimeout),window.setTimeout(this.doneLoading.bind(this),this.options.minimumTime))},i.prototype.doneLoading=function(){"use strict";window.clearTimeout(this.maxTimeout),this.done=!0,this.overlay.element.style.opacity=0,window.setTimeout(this.destroy.bind(this),this.options.fadeOutTime)},i.prototype.destroy=function(){"use strict";this.overlay.remove(),this.options.onComplete()},e.exports=i},{"./ImagePreloader/":3,"./Overlay/":6}],9:[function(t,e){t("./Polyfills/");var i=t("./QueryLoader.js");(window.jQuery||window.Zepto)&&!function(t){"use strict";t.fn.queryLoader2=function(t){return this.each(function(){new i(this,t)})}}(window.jQuery||window.Zepto),"undefined"!=typeof e&&(e.exports=i),"function"==typeof define&&define.amd&&define([],function(){"use strict";return i}),window.QueryLoader2=i},{"./Polyfills/":7,"./QueryLoader.js":8}]},{},[9]);

/*! VelocityJS.org (1.1.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(e){function t(e){var t=e.length,r=$.type(e);return"function"===r||$.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===r||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var $=function(e,t){return new $.fn.init(e,t)};$.isWindow=function(e){return null!=e&&e==e.window},$.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?a[o.call(e)]||"object":typeof e},$.isArray=Array.isArray||function(e){return"array"===$.type(e)},$.isPlainObject=function(e){var t;if(!e||"object"!==$.type(e)||e.nodeType||$.isWindow(e))return!1;try{if(e.constructor&&!n.call(e,"constructor")&&!n.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}for(t in e);return void 0===t||n.call(e,t)},$.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},$.data=function(e,t,a){if(void 0===a){var n=e[$.expando],o=n&&r[n];if(void 0===t)return o;if(o&&t in o)return o[t]}else if(void 0!==t){var n=e[$.expando]||(e[$.expando]=++$.uuid);return r[n]=r[n]||{},r[n][t]=a,a}},$.removeData=function(e,t){var a=e[$.expando],n=a&&r[a];n&&$.each(t,function(e,t){delete n[t]})},$.extend=function(){var e,t,r,a,n,o,i=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof i&&(u=i,i=arguments[s]||{},s++),"object"!=typeof i&&"function"!==$.type(i)&&(i={}),s===l&&(i=this,s--);l>s;s++)if(null!=(n=arguments[s]))for(a in n)e=i[a],r=n[a],i!==r&&(u&&r&&($.isPlainObject(r)||(t=$.isArray(r)))?(t?(t=!1,o=e&&$.isArray(e)?e:[]):o=e&&$.isPlainObject(e)?e:{},i[a]=$.extend(u,o,r)):void 0!==r&&(i[a]=r));return i},$.queue=function(e,r,a){function n(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,n=e.length;r>a;)e[n++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){r=(r||"fx")+"queue";var o=$.data(e,r);return a?(!o||$.isArray(a)?o=$.data(e,r,n(a)):o.push(a),o):o||[]}},$.dequeue=function(e,t){$.each(e.nodeType?[e]:e,function(e,r){t=t||"fx";var a=$.queue(r,t),n=a.shift();"inprogress"===n&&(n=a.shift()),n&&("fx"===t&&a.unshift("inprogress"),n.call(r,function(){$.dequeue(r,t)}))})},$.fn=$.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),r=this.offset(),a=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:$(e).offset();return r.top-=parseFloat(t.style.marginTop)||0,r.left-=parseFloat(t.style.marginLeft)||0,e.style&&(a.top+=parseFloat(e.style.borderTopWidth)||0,a.left+=parseFloat(e.style.borderLeftWidth)||0),{top:r.top-a.top,left:r.left-a.left}}};var r={};$.expando="velocity"+(new Date).getTime(),$.uuid=0;for(var a={},n=a.hasOwnProperty,o=a.toString,i="Boolean Number String Function Array Date RegExp Object Error".split(" "),s=0;s<i.length;s++)a["[object "+i[s]+"]"]=i[s].toLowerCase();$.fn.init.prototype=$.fn,e.Velocity={Utilities:$}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return g.isWrapped(e)?e=[].slice.call(e):g.isNode(e)&&(e=[e]),e}function i(e){var t=$.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,n){function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var n=0;m>n;++n){var o=u(r,e,a);if(0===o)return r;var i=l(r,e,a)-t;r-=i/o}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,n){var o,i,s=0;do i=r+(n-r)/2,o=l(i,e,a)-t,o>0?n=i:r=i;while(Math.abs(o)>h&&++s<v);return i}function d(t){for(var r=0,n=1,o=b-1;n!=o&&w[n]<=t;++n)r+=x;--n;var i=(t-w[n])/(w[n+1]-w[n]),s=r+i*x,l=u(s,e,a);return l>=y?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=n)&&p()}var m=4,y=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===n?t:0===t?0:1===t?1:l(d(t),r,n)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:n}]};var T="generateBezier("+[e,r,a,n]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return g.isString(e)?v.Easings[e]||(r=!1):r=g.isArray(e)&&1===e.length?s.apply(null,e):g.isArray(e)&&2===e.length?b.apply(null,e.concat([t])):g.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=v.Easings[v.defaults.easing]?v.defaults.easing:h),r}function c(e){if(e)for(var t=(new Date).getTime(),r=0,n=v.State.calls.length;n>r;r++)if(v.State.calls[r]){var o=v.State.calls[r],s=o[0],l=o[2],u=o[3],f=!!u;u||(u=v.State.calls[r][3]=t-16);for(var d=Math.min((t-u)/l.duration,1),m=0,y=s.length;y>m;m++){var h=s[m],b=h.element;if(i(b)){var S=!1;if(l.display!==a&&null!==l.display&&"none"!==l.display){if("flex"===l.display){var w=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];$.each(w,function(e,t){x.setPropertyValue(b,"display",t)})}x.setPropertyValue(b,"display",l.display)}l.visibility!==a&&"hidden"!==l.visibility&&x.setPropertyValue(b,"visibility",l.visibility);for(var V in h)if("element"!==V){var C=h[V],T,k=g.isString(C.easing)?v.Easings[C.easing]:C.easing;if(1===d)T=C.endValue;else if(T=C.startValue+(C.endValue-C.startValue)*k(d),!f&&T===C.currentValue)continue;if(C.currentValue=T,x.Hooks.registered[V]){var A=x.Hooks.getRoot(V),F=i(b).rootPropertyValueCache[A];F&&(C.rootPropertyValue=F)}var E=x.setPropertyValue(b,V,C.currentValue+(0===parseFloat(T)?"":C.unitType),C.rootPropertyValue,C.scrollData);x.Hooks.registered[V]&&(i(b).rootPropertyValueCache[A]=x.Normalizations.registered[A]?x.Normalizations.registered[A]("extract",null,E[1]):E[1]),"transform"===E[0]&&(S=!0)}l.mobileHA&&i(b).transformCache.translate3d===a&&(i(b).transformCache.translate3d="(0px, 0px, 0px)",S=!0),S&&x.flushTransformCache(b)}}l.display!==a&&"none"!==l.display&&(v.State.calls[r][2].display=!1),l.visibility!==a&&"hidden"!==l.visibility&&(v.State.calls[r][2].visibility=!1),l.progress&&l.progress.call(o[1],o[1],d,Math.max(0,u+l.duration-t),u),1===d&&p(r)}v.State.isTicking&&P(c)}function p(e,t){if(!v.State.calls[e])return!1;for(var r=v.State.calls[e][0],n=v.State.calls[e][1],o=v.State.calls[e][2],s=v.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&x.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&x.setPropertyValue(p,"visibility",o.visibility)),o.loop!==!0&&($.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test($.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var f=!1;$.each(x.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,n=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(n)&&(f=!0,delete i(p).transformCache[t])}),o.mobileHA&&(f=!0,delete i(p).transformCache.translate3d),f&&x.flushTransformCache(p),x.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(d){setTimeout(function(){throw d},1)}s&&o.loop!==!0&&s(n),o.loop!==!0||t||($.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360)}),v(p,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&$.dequeue(p,o.queue)}v.State.calls[e]=!1;for(var g=0,m=v.State.calls.length;m>g;g++)if(v.State.calls[g]!==!1){l=!0;break}l===!1&&(v.State.isTicking=!1,delete v.State.calls,v.State.calls=[])}var f=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),d=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r=(new Date).getTime(),a;return a=Math.max(0,16-(r-e)),e=r+a,setTimeout(function(){t(r+a)},a)}}(),g={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},$,m=!1;if(e.fn&&e.fn.jquery?($=e,m=!0):$=t.Velocity.Utilities,8>=f&&!m)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=f)return void(jQuery.fn.velocity=jQuery.fn.animate);var y=400,h="swing",v={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:$,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:y,easing:h,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){$.data(e,"velocity",{isSVG:g.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:1,patch:0},debug:!1};t.pageYOffset!==a?(v.State.scrollAnchor=t,v.State.scrollPropertyLeft="pageXOffset",v.State.scrollPropertyTop="pageYOffset"):(v.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,v.State.scrollPropertyLeft="scrollLeft",v.State.scrollPropertyTop="scrollTop");var b=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o={x:-1,v:0,tension:null,friction:null},i=[0],s=0,l=1e-4,u=.016,c,p,f;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,o.tension=e,o.friction=t,c=null!==n,c?(s=a(e,t),p=s/n*u):p=u;;)if(f=r(f||o,p),i.push(1+f.x),s+=16,!(Math.abs(f.x)>l&&Math.abs(f.v)>l))break;return c?function(e){return i[e*(i.length-1)|0]}:s}}();v.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},$.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){v.Easings[t[0]]=l.apply(null,t[1])});var x=v.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<x.Lists.colors.length;e++){var t="color"===x.Lists.colors[e]?"0 0 0 1":"255 255 255 1";x.Hooks.templates[x.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,n;if(f)for(r in x.Hooks.templates){a=x.Hooks.templates[r],n=a[0].split(" ");var o=a[1].match(x.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),x.Hooks.templates[r]=[n.join(" "),o.join(" ")])}for(r in x.Hooks.templates){a=x.Hooks.templates[r],n=a[0].split(" ");for(var e in n){var i=r+n[e],s=e;x.Hooks.registered[i]=[r,s]}}},getRoot:function(e){var t=x.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return x.RegEx.valueUnwrap.test(t)&&(t=t.match(x.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(t)&&(t=x.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=x.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=x.Hooks.cleanRootPropertyValue(a,t),t.toString().match(x.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=x.Hooks.registered[e];if(a){var n=a[0],o=a[1],i,s;return r=x.Hooks.cleanRootPropertyValue(n,r),i=r.toString().match(x.RegEx.valueSplit),i[o]=t,s=i.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return x.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(x.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var n=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=n?n[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=f)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=f||v.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(var e=0;e<x.Lists.transformsBase.length;e++)!function(){var t=x.Lists.transformsBase[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":v.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(i(r).transformCache[t]="("+n+")"),i(r).transformCache[t]}}}();for(var e=0;e<x.Lists.colors.length;e++)!function(){var t=x.Lists.colors[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return t;case"extract":var o;if(x.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?i=s[n]!==a?s[n]:s.black:x.RegEx.isHex.test(n)?i="rgb("+x.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(i=s.black),o=(i||n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=f||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=f?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=f?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(f||v.State.isAndroid&&!v.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(v.State.prefixMatches[e])return[v.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),g.isString(v.State.prefixElement.style[n]))return v.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,a;return e=e.replace(t,function(e,t,r,a){return t+t+r+r+a+a}),a=r.exec(e),a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&x.setPropertyValue(e,"display","none")}var l=0;if(8>=f)l=$.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===x.getPropertyValue(e,"display")&&(u=!0,x.setPropertyValue(e,"display",x.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(x.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(x.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var d;d=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),(f||v.State.isFirefox)&&"borderColor"===r&&(r="borderTopColor"),l=9===f&&"filter"===r?d.getPropertyValue(r):d[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var g=s(e,"position");("fixed"===g||"absolute"===g&&/top|left/i.test(r))&&(l=$(e).position()[r]+"px")}return l}var l;if(x.Hooks.registered[r]){var u=r,c=x.Hooks.getRoot(u);n===a&&(n=x.getPropertyValue(e,x.Names.prefixCheck(c)[0])),x.Normalizations.registered[c]&&(n=x.Normalizations.registered[c]("extract",e,n)),l=x.Hooks.extractValue(u,n)}else if(x.Normalizations.registered[r]){var p,d;p=x.Normalizations.registered[r]("name",e),"transform"!==p&&(d=s(e,x.Names.prefixCheck(p)[0]),x.Values.isCSSNullValue(d)&&x.Hooks.templates[r]&&(d=x.Hooks.templates[r][1])),l=x.Normalizations.registered[r]("extract",e,d)}return/^[\d-]/.test(l)||(l=i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r)?/^(height|width)$/i.test(r)?e.getBBox()[r]:e.getAttribute(r):s(e,x.Names.prefixCheck(r)[0])),x.Values.isCSSNullValue(l)&&(l=0),v.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(x.Normalizations.registered[r]&&"transform"===x.Normalizations.registered[r]("name",e))x.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(x.Hooks.registered[r]){var l=r,u=x.Hooks.getRoot(r);n=n||x.getPropertyValue(e,u),a=x.Hooks.injectValue(l,a,n),r=u}if(x.Normalizations.registered[r]&&(a=x.Normalizations.registered[r]("inject",e,a),r=x.Normalizations.registered[r]("name",e)),s=x.Names.prefixCheck(r)[0],8>=f)try{e.style[s]=a}catch(c){v.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;v.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(x.getPropertyValue(e,t))}var r="";if((f||v.State.isAndroid&&!v.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};$.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;$.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===f&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}x.setPropertyValue(e,"transform",r)}};x.Hooks.register(),x.Normalizations.register(),v.hook=function(e,t,r){var n=a;return e=o(e),$.each(e,function(e,o){if(i(o)===a&&v.init(o),r===a)n===a&&(n=v.CSS.getPropertyValue(o,t));else{var s=v.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&v.CSS.flushTransformCache(o),n=s}}),n};var S=function(){function e(){return f?k.promise||null:d}function s(){function e(e){function f(e,t){var r=a,n=a,i=a;return g.isArray(e)?(r=e[0],!g.isArray(e[1])&&/^[\d-]/.test(e[1])||g.isFunction(e[1])||x.RegEx.isHex.test(e[1])?i=e[1]:(g.isString(e[1])&&!x.RegEx.isHex.test(e[1])||g.isArray(e[1]))&&(n=t?e[1]:u(e[1],s.duration),e[2]!==a&&(i=e[2]))):r=e,t||(n=n||s.easing),g.isFunction(r)&&(r=r.call(o,V,w)),g.isFunction(i)&&(i=i.call(o,V,w)),[r||0,n,i]}function d(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=x.Values.getUnitType(e)),[a,r]}function m(){var e={myParent:o.parentNode||r.body,position:x.getPropertyValue(o,"position"),fontSize:x.getPropertyValue(o,"fontSize")},a=e.position===L.lastPosition&&e.myParent===L.lastParent,n=e.fontSize===L.lastFontSize;L.lastParent=e.myParent,L.lastPosition=e.position,L.lastFontSize=e.fontSize;var s=100,l={};if(n&&a)l.emToPx=L.lastEmToPx,l.percentToPxWidth=L.lastPercentToPxWidth,l.percentToPxHeight=L.lastPercentToPxHeight;else{var u=i(o).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");v.init(u),e.myParent.appendChild(u),$.each(["overflow","overflowX","overflowY"],function(e,t){v.CSS.setPropertyValue(u,t,"hidden")}),v.CSS.setPropertyValue(u,"position",e.position),v.CSS.setPropertyValue(u,"fontSize",e.fontSize),v.CSS.setPropertyValue(u,"boxSizing","content-box"),$.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){v.CSS.setPropertyValue(u,t,s+"%")}),v.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=L.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=L.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=L.lastEmToPx=(parseFloat(x.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===L.remToPx&&(L.remToPx=parseFloat(x.getPropertyValue(r.body,"fontSize"))||16),null===L.vwToPx&&(L.vwToPx=parseFloat(t.innerWidth)/100,L.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=L.remToPx,l.vwToPx=L.vwToPx,l.vhToPx=L.vhToPx,v.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),o),l}if(s.begin&&0===V)try{s.begin.call(h,h)}catch(y){setTimeout(function(){throw y},1)}if("scroll"===A){var S=/^x$/i.test(s.axis)?"Left":"Top",C=parseFloat(s.offset)||0,T,F,E;s.container?g.isWrapped(s.container)||g.isNode(s.container)?(s.container=s.container[0]||s.container,T=s.container["scroll"+S],E=T+$(o).position()[S.toLowerCase()]+C):s.container=null:(T=v.State.scrollAnchor[v.State["scrollProperty"+S]],F=v.State.scrollAnchor[v.State["scrollProperty"+("Left"===S?"Top":"Left")]],E=$(o).offset()[S.toLowerCase()]+C),l={scroll:{rootPropertyValue:!1,startValue:T,currentValue:T,endValue:E,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:S,alternateValue:F}},element:o},v.debug&&console.log("tweensContainer (scroll): ",l.scroll,o)}else if("reverse"===A){if(!i(o).tweensContainer)return void $.dequeue(o,s.queue);"none"===i(o).opts.display&&(i(o).opts.display="auto"),"hidden"===i(o).opts.visibility&&(i(o).opts.visibility="visible"),i(o).opts.loop=!1,i(o).opts.begin=null,i(o).opts.complete=null,P.easing||delete s.easing,P.duration||delete s.duration,s=$.extend({},i(o).opts,s);var j=$.extend(!0,{},i(o).tweensContainer);for(var H in j)if("element"!==H){var N=j[H].startValue;j[H].startValue=j[H].currentValue=j[H].endValue,j[H].endValue=N,g.isEmptyObject(P)||(j[H].easing=s.easing),v.debug&&console.log("reverse tweensContainer ("+H+"): "+JSON.stringify(j[H]),o)}l=j}else if("start"===A){var j;i(o).tweensContainer&&i(o).isAnimating===!0&&(j=i(o).tweensContainer),$.each(b,function(e,t){if(RegExp("^"+x.Lists.colors.join("$|^")+"$").test(e)){var r=f(t,!0),n=r[0],o=r[1],i=r[2];if(x.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=x.Values.hexToRgb(n),u=i?x.Values.hexToRgb(i):a,c=0;c<s.length;c++){var p=[l[c]];o&&p.push(o),u!==a&&p.push(u[c]),b[e+s[c]]=p}delete b[e]}}});for(var O in b){var z=f(b[O]),q=z[0],M=z[1],I=z[2];O=x.Names.camelCase(O);var B=x.Hooks.getRoot(O),W=!1;if(i(o).isSVG||x.Names.prefixCheck(B)[1]!==!1||x.Normalizations.registered[B]!==a){(s.display!==a&&null!==s.display&&"none"!==s.display||s.visibility!==a&&"hidden"!==s.visibility)&&/opacity|filter/.test(O)&&!I&&0!==q&&(I=0),s._cacheValues&&j&&j[O]?(I===a&&(I=j[O].endValue+j[O].unitType),W=i(o).rootPropertyValueCache[B]):x.Hooks.registered[O]?I===a?(W=x.getPropertyValue(o,B),I=x.getPropertyValue(o,O,W)):W=x.Hooks.templates[B][1]:I===a&&(I=x.getPropertyValue(o,O));var G,D,X,Y=!1;if(G=d(O,I),I=G[0],X=G[1],G=d(O,q),q=G[0].replace(/^([+-\/*])=/,function(e,t){return Y=t,""}),D=G[1],I=parseFloat(I)||0,q=parseFloat(q)||0,"%"===D&&(/^(fontSize|lineHeight)$/.test(O)?(q/=100,D="em"):/^scale/.test(O)?(q/=100,D=""):/(Red|Green|Blue)$/i.test(O)&&(q=q/100*255,D="")),/[\/*]/.test(Y))D=X;else if(X!==D&&0!==I)if(0===q)D=X;else{p=p||m();var Q=/margin|padding|left|right|width|text|word|letter/i.test(O)||/X$/.test(O)||"x"===O?"x":"y";switch(X){case"%":I*="x"===Q?p.percentToPxWidth:p.percentToPxHeight;break;case"px":break;default:I*=p[X+"ToPx"]}switch(D){case"%":I*=1/("x"===Q?p.percentToPxWidth:p.percentToPxHeight);break;case"px":break;default:I*=1/p[D+"ToPx"]}}switch(Y){case"+":q=I+q;break;case"-":q=I-q;break;case"*":q=I*q;break;case"/":q=I/q}l[O]={rootPropertyValue:W,startValue:I,currentValue:I,endValue:q,unitType:D,easing:M},v.debug&&console.log("tweensContainer ("+O+"): "+JSON.stringify(l[O]),o)}else v.debug&&console.log("Skipping ["+B+"] due to a lack of browser support.")}l.element=o}l.element&&(x.Values.addClass(o,"velocity-animating"),R.push(l),""===s.queue&&(i(o).tweensContainer=l,i(o).opts=s),i(o).isAnimating=!0,V===w-1?(v.State.calls.length>1e4&&(v.State.calls=n(v.State.calls)),v.State.calls.push([R,h,s,null,k.resolver]),v.State.isTicking===!1&&(v.State.isTicking=!0,c())):V++)}var o=this,s=$.extend({},v.defaults,P),l={},p;switch(i(o)===a&&v.init(o),parseFloat(s.delay)&&s.queue!==!1&&$.queue(o,s.queue,function(e){v.velocityQueueEntryFlag=!0,i(o).delayTimer={setTimeout:setTimeout(e,parseFloat(s.delay)),next:e}}),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=y;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}v.mock!==!1&&(v.mock===!0?s.duration=s.delay=1:(s.duration*=parseFloat(v.mock)||1,s.delay*=parseFloat(v.mock)||1)),s.easing=u(s.easing,s.duration),s.begin&&!g.isFunction(s.begin)&&(s.begin=null),s.progress&&!g.isFunction(s.progress)&&(s.progress=null),s.complete&&!g.isFunction(s.complete)&&(s.complete=null),s.display!==a&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=v.CSS.Values.getDisplayType(o))),s.visibility!==a&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&v.State.isMobile&&!v.State.isGingerbread,s.queue===!1?s.delay?setTimeout(e,s.delay):e():$.queue(o,s.queue,function(t,r){return r===!0?(k.promise&&k.resolver(h),!0):(v.velocityQueueEntryFlag=!0,void e(t))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===$.queue(o)[0]||$.dequeue(o)}var l=arguments[0]&&($.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||g.isString(arguments[0].properties)),f,d,m,h,b,P;if(g.isWrapped(this)?(f=!1,m=0,h=this,d=this):(f=!0,m=1,h=l?arguments[0].elements:arguments[0]),h=o(h)){l?(b=arguments[0].properties,P=arguments[0].options):(b=arguments[m],P=arguments[m+1]);var w=h.length,V=0;if("stop"!==b&&!$.isPlainObject(P)){var C=m+1;P={};for(var T=C;T<arguments.length;T++)g.isArray(arguments[T])||!/^(fast|normal|slow)$/i.test(arguments[T])&&!/^\d/.test(arguments[T])?g.isString(arguments[T])||g.isArray(arguments[T])?P.easing=arguments[T]:g.isFunction(arguments[T])&&(P.complete=arguments[T]):P.duration=arguments[T]}var k={promise:null,resolver:null,rejecter:null};f&&v.Promise&&(k.promise=new v.Promise(function(e,t){k.resolver=e,k.rejecter=t}));var A;switch(b){case"scroll":A="scroll";break;case"reverse":A="reverse";break;case"stop":$.each(h,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var F=[];return $.each(v.State.calls,function(e,t){t&&$.each(t[1],function(r,n){var o=g.isString(P)?P:"";return P!==a&&t[2].queue!==o?!0:void $.each(h,function(t,r){r===n&&(P!==a&&($.each($.queue(r,o),function(e,t){g.isFunction(t)&&t(null,!0)}),$.queue(r,o,[])),i(r)&&""===o&&$.each(i(r).tweensContainer,function(e,t){t.endValue=t.currentValue}),F.push(e))})})}),$.each(F,function(e,t){p(t,!0)}),k.promise&&k.resolver(h),e();default:if(!$.isPlainObject(b)||g.isEmptyObject(b)){if(g.isString(b)&&v.Redirects[b]){var E=$.extend({},P),j=E.duration,H=E.delay||0;return E.backwards===!0&&(h=$.extend(!0,[],h).reverse()),$.each(h,function(e,t){parseFloat(E.stagger)?E.delay=H+parseFloat(E.stagger)*e:g.isFunction(E.stagger)&&(E.delay=H+E.stagger.call(t,e,w)),E.drag&&(E.duration=parseFloat(j)||(/^(callout|transition)/.test(b)?1e3:y),E.duration=Math.max(E.duration*(E.backwards?1-e/w:(e+1)/w),.75*E.duration,200)),v.Redirects[b].call(t,t,E||{},e,w,h,k.promise?k:a)
}),e()}var N="Velocity: First argument ("+b+") was not a property map, a known action, or a registered redirect. Aborting.";return k.promise?k.rejecter(new Error(N)):console.log(N),e()}A="start"}var L={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},R=[];$.each(h,function(e,t){g.isNode(t)&&s.call(t)});var E=$.extend({},v.defaults,P),O;if(E.loop=parseInt(E.loop),O=2*E.loop-1,E.loop)for(var z=0;O>z;z++){var q={delay:E.delay,progress:E.progress};z===O-1&&(q.display=E.display,q.visibility=E.visibility,q.complete=E.complete),S(h,"reverse",q)}return e()}};v=$.extend(S,v),v.animate=S;var P=t.requestAnimationFrame||d;return v.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(P=function(e){return setTimeout(function(){e(!0)},16)},c()):P=t.requestAnimationFrame||d}),e.Velocity=v,e!==t&&(e.fn.velocity=S,e.fn.velocity.defaults=v.defaults),$.each(["Down","Up"],function(e,t){v.Redirects["slide"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},f={};l.display===a&&(l.display="Down"===t?"inline"===v.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i);for(var r in p){f[r]=e.style[r];var a=v.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}f.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in f)e.style[t]=f[t];c&&c.call(i,i),s&&s.resolver(i)},v(e,p,l)}}),$.each(["In","Out"],function(e,t){v.Redirects["fade"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),v(this,u,l)}}),v}(window.jQuery||window.Zepto||window,window,document)});


/*!
 * Audio5js: HTML5 Audio Compatibility Layer
 * https://github.com/zohararad/audio5js
 * License MIT (c) Zohar Arad 2013
 */
(function ($win, ns, factory) {
  "use strict";
  /*global define */
  /*global swfobject */

  if (typeof (module) !== 'undefined' && module.exports) { // CommonJS
    module.exports = factory(ns, $win);
  } else if (typeof (define) === 'function' && define.amd) { // AMD
    define(function () {
      return factory(ns, $win);
    });
  } else { // <script>
    $win[ns] = factory(ns, $win);
  }

}(window, 'Audio5js', function (ns, $win) {

  "use strict";

  var ActiveXObject = $win.ActiveXObject;

  /**
   * AudioError Class
   * @param {String} message error message
   * @constructor
   */
  function AudioError(message) {
    this.message = message;
  }

  AudioError.prototype = new Error();

  /**
   * Clones an object
   * @param obj object to clone
   * @return {Object} cloned object
   */
  function cloneObject(obj) {
    var clone = {}, i;
    for (i in obj) {
      if (typeof (obj[i]) === "object") {
        clone[i] = cloneObject(obj[i]);
      } else {
        clone[i] = obj[i];
      }
    }
    return clone;
  }

  /**
   * Extend an object with a mixin
   * @param {Object} target target object to extend
   * @param {Object} mixin object to mix into target
   * @return {*} extended object
   */
  var extend = function (target, mixin) {
    var name, m = cloneObject(mixin);
    for (name in m) {
      if (m.hasOwnProperty(name)) {
        target[name] = m[name];
      }
    }
    return target;
  };

  /**
   * Extend an object's prototype with a mixin
   * @param {Object} target target object to extend
   * @param {Object} mixin object to mix into target
   * @return {*} extended object
   */
  var include = function (target, mixin) {
    return extend(target.prototype, mixin);
  };

  var Pubsub = {
    /**
     * Subscribe to event on a channel
     * @param {String} evt name of channel / event to subscribe
     * @param {Function} fn the callback to execute on message publishing
     * @param {Object} ctx the context in which the callback should be executed
     */
    on: function (evt, fn, ctx) {
      this.subscribe(evt, fn, ctx, false);
    },
    /**
     * Subscribe to a one-time event on a channel
     * @param {String} evt name of channel / event to subscribe
     * @param {Function} fn the callback to execute on message publishing
     * @param {Object} ctx the context in which the callback should be executed
     */
    one: function(evt, fn, ctx) {
      this.subscribe(evt, fn, ctx, true);
    },
    /**
     * Unsubscribe from an event on a channel
     * @param {String} evt name of channel / event to unsubscribe
     * @param {Function} fn the callback used when subscribing to the event
     */
    off: function (evt, fn) {
      if (this.channels[evt] === undefined) { return; }
      var i, l;
      for (i = 0, l = this.channels[evt].length; i  < l; i++) {
        var sub = this.channels[evt][i].fn;
        if (sub === fn) {
          this.channels[evt].splice(i, 1);
          break;
        }
      }
    },
    /**
     * Add event subscription to channel. Called by `on` and `one`
     * @param {String} evt name of channel / event to subscribe
     * @param {Function} fn the callback to execute on message publishing
     * @param {Object} ctx the context in which the callback should be executed
     * @param {Boolean} once indicate if event should be triggered once or not
     */
    subscribe: function (evt, fn, ctx, once) {
      if (this.channels === undefined) {
        this.channels = {};
      }
      this.channels[evt] = this.channels[evt] || [];
      this.channels[evt].push({fn: fn, ctx: ctx, once: (once || false)});
    },
    /**
     * Publish a message on a channel. Accepts **args** after event name
     * @param {String} evt name of channel / event to trigger
     */
    trigger: function (evt) {
      if (this.channels && this.channels.hasOwnProperty(evt)) {
        var args = Array.prototype.slice.call(arguments, 1);
        var a = [];
        while(this.channels[evt].length > 0) {
          var sub = this.channels[evt].shift();
          if (typeof (sub.fn) === 'function') {
            sub.fn.apply(sub.ctx, args);
          }
          if ( !sub.once ){
            a.push(sub);
          }
        }
        this.channels[evt] = a;
      }
    }
  };

  var util = {
    /**
     * Flash embed code string with cross-browser support.
     */
  flash_embed_code: function (id, swf_location, ts) {
      var prefix;
      var s = '<param name="movie" value="' + swf_location + '?playerInstance=window.' + ns + '_flash.instances[\'' + id + '\']&datetime=' + ts + '"/>' +
        '<param name="wmode" value="transparent"/>' +
        '<param name="allowscriptaccess" value="always" />' +
        '</object>';
      if (ActiveXObject) {
        prefix = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="1" height="1" id="' + id + '">';
      } else {
        prefix = '<object type="application/x-shockwave-flash" data="' + swf_location + '?playerInstance=window.' + ns + '_flash.instances[\'' + id + '\']&datetime=' + ts + '" width="1" height="1" id="' + id + '" >';
      }
      return prefix + s;
    },
    /**
     * Check if browser supports audio mime type.
     * @param {String} mime_type audio mime type to check
     * @return {Boolean} whether browser supports passed audio mime type
     */
    can_play: function (mime_type) {
      var a = document.createElement('audio');
      var mime_str;
      switch (mime_type) {
        case 'mp3':
          mime_str = 'audio/mpeg;';
          break;
        case 'vorbis':
          mime_str = 'audio/ogg; codecs="vorbis"';
          break;
        case 'opus':
          mime_str = 'audio/ogg; codecs="opus"';
          break;
        case 'webm':
          mime_str = 'audio/webm; codecs="vorbis"';
          break;
        case 'mp4':
          mime_str = 'audio/mp4; codecs="mp4a.40.5"';
          break;
        case 'wav':
          mime_str = 'audio/wav; codecs="1"';
          break;
      }
      if (mime_str !== undefined) {
        if (mime_type === 'mp3' && navigator.userAgent.match(/Android/i) && navigator.userAgent.match(/Firefox/i)) {
          return true;
        }
        return !!a.canPlayType && a.canPlayType(mime_str) !== '';
      }
      return false;
    },
    /**
     * Boolean flag indicating whether the browser has Flash installed or not
     */
    has_flash: (function () {
      var r = false;
      if (navigator.plugins && navigator.plugins.length && navigator.plugins['Shockwave Flash']) {
        r = true;
      } else if (navigator.mimeTypes && navigator.mimeTypes.length) {
        var mimeType = navigator.mimeTypes['application/x-shockwave-flash'];
        r = mimeType && mimeType.enabledPlugin;
      } else {
        try {
          var ax = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
          r = typeof (ax) === 'object';
        } catch (e) {}
      }
      return r;
    }()),
    /**
     * Embed Flash MP3 player SWF to DOM
     * @param {String} swf_location location of MP3 player SWF
     * @param {String} id swf unique ID used for resolving callbacks from ExternalInterface to Javascript
     */
    embedFlash: function (swf_location, id) {
      var d = document.createElement('div');
      d.style.position = 'absolute';
      d.style.width = '1px';
      d.style.height = '1px';
      d.style.top = '1px';
      document.body.appendChild(d);
      if(typeof($win.swfobject) === 'object'){
        var fv = {
          playerInstance: 'window.'+ ns + '_flash.instances[\''+id+'\']'
        };
        var params = {
          allowscriptaccess: 'always',
          wmode: 'transparent'
        };
        d.innerHTML = '<div id="'+id+'"></div>';
        swfobject.embedSWF(swf_location + '?ts='+(new Date().getTime() + Math.random()), id, "1", "1", "9.0.0", null, fv, params);
      } else {
        var ts = new Date().getTime() + Math.random(); // Ensure swf is not pulled from cache
        d.innerHTML = this.flash_embed_code(id, swf_location, ts);
      }
      return document.getElementById(id);
    },
    /**
     * Formats seconds into a time string hh:mm:ss.
     * @param {Number} seconds seconds to format as string
     * @return {String} formatted time string
     */
    formatTime: function (seconds) {
      var hours = parseInt(seconds / 3600, 10) % 24;
      var minutes = parseInt(seconds / 60, 10) % 60;
      var secs = parseInt(seconds % 60, 10);
      var result, fragment = (minutes < 10 ? "0" + minutes : minutes) + ":" + (secs  < 10 ? "0" + secs : secs);
      if (hours > 0) {
        result = (hours < 10 ? "0" + hours : hours) + ":" + fragment;
      } else {
        result = fragment;
      }
      return result;
    }
  };

  util.use_flash = util.can_play('mp3');

  var Audio5js, FlashAudioPlayer, HTML5AudioPlayer;

  /**
   * Common audio attributes object. Mixed into audio players.
   * @type {Object}
   */
  var AudioAttributes = {
    playing: false, /** {Boolean} player playback state  */
    vol: 1, /** {Float} audio volume */
    duration: 0, /** {Float} audio duration (sec) */
    position: 0, /** {Float} audio position (sec) */
    load_percent: 0, /** {Float} audio file load percent (%) */
    seekable: false, /** {Boolean} is loaded audio seekable */
    ready: null /** {Boolean} is loaded audio seekable */
  };

  /**
   * Global object holding flash-based player instances.
   * Used to create a bridge between Flash's ExternalInterface calls and FlashAudioPlayer instances
   * @type {Object}
   */
  var globalAudio5Flash = $win[ns + '_flash'] = $win[ns + '_flash'] || {
    instances: { }, /** FlashAudioPlayer instance hash */
    count: 0 /** FlashAudioPlayer instance count */
  };

  /**
   * Flash MP3 Audio Player Class
   * @constructor
   */
  FlashAudioPlayer = function () {
    if (util.use_flash && !util.has_flash) {
      throw new Error('Flash Plugin Missing');
    }
  };

  FlashAudioPlayer.prototype = {
    /**
     * Initialize the player
     * @param {String} swf_src path to audio player SWF file
     */
    init: function (swf_src) {
      globalAudio5Flash.count += 1;
      this.id = ns + globalAudio5Flash.count;
      globalAudio5Flash.instances[this.id] = this;
      this.embed(swf_src);
    },
    /**
     * Embed audio player SWF in page and assign reference to audio instance variable
     * @param {String} swf_src path to audio player SWF file
     */
    embed: function (swf_src) {
      util.embedFlash(swf_src, this.id);
    },
    /**
     * ExternalInterface callback indicating SWF is ready
     */
    eiReady: function () {
      this.audio = document.getElementById(this.id);
      this.trigger('ready');
    },
    /**
     * ExternalInterface audio load started callback. Fires when audio starts loading.
     */
    eiLoadStart: function(){
      this.trigger('loadstart');
    },
    /**
     * ExternalInterface audio metadata loaded callback. Fires when audio ID3 tags have been loaded.
     */
    eiLoadedMetadata: function(){
      this.trigger('loadedmetadata');
    },
    /**
     * ExternalInterface audio can play callback. Fires when audio can be played.
     */
    eiCanPlay: function () {
      this.trigger('canplay');
    },
    /**
     * ExternalInterface timeupdate callback. Fires as long as playhead position is updated (audio is being played).
     * @param {Float} position audio playback position (sec)
     * @param {Float} duration audio total duration (sec)
     * @param {Boolean} seekable is audio seekable or not (download or streaming)
     */
    eiTimeUpdate: function (position, duration, seekable) {
      this.position = position;
      this.duration = duration;
      this.seekable = seekable;
      this.trigger('timeupdate', position, (this.seekable ? duration : null));
    },
    /**
     * ExternalInterface download progress callback. Fires as long as audio file is downloaded by browser.
     * @param {Float} percent audio download percent
     * @param {Float} duration audio total duration (sec)
     * * @param {Boolean} seekable is audio seekable or not (download or streaming)
     */
    eiProgress: function (percent, duration, seekable) {
      this.load_percent = percent;
      this.duration = duration;
      this.seekable = seekable;
      this.trigger('progress', percent);
    },
    /**
     * ExternalInterface audio load error callback.
     * @param {String} msg error message
     */
    eiLoadError: function (msg) {
      this.trigger('error', msg);
    },
    /**
     * ExternalInterface audio play callback. Fires when audio starts playing.
     */
    eiPlay: function () {
      this.playing = true;
      this.trigger('play');
    },
    /**
     * ExternalInterface audio pause callback. Fires when audio is paused.
     */
    eiPause: function () {
      this.playing = false;
      this.trigger('pause');
    },
    /**
     * ExternalInterface audio ended callback. Fires when audio playback ended.
     */
    eiEnded: function () {
      this.pause();
      this.trigger('ended');
    },
    /**
     * ExternalInterface audio seeking callback. Fires when audio is being seeked.
     */
    eiSeeking: function(){
      this.trigger('seeking');
    },
    /**
     * ExternalInterface audio seeked callback. Fires when audio has been seeked.
     */
    eiSeeked: function(){
      this.trigger('seeked');
    },
    /**
     * Resets audio position and parameters. Invoked once audio is loaded.
     */
    reset: function () {
      this.seekable = false;
      this.duration = 0;
      this.position = 0;
      this.load_percent = 0;
    },
    /**
     * Load audio from url.
     * @param {String} url URL of audio to load
     */
    load: function (url) {
      this.reset();
      this.audio.load(url);
    },
    /**
     * Play audio
     */
    play: function () {
      this.audio.pplay();
    },
    /**
     * Pause audio
     */
    pause: function () {
      this.audio.ppause();
    },
    /**
     * Get / Set audio volume
     * @param {Float} v audio volume to set between 0 - 1.
     * @return {Float} current audio volume
     */
    volume: function (v) {
      if (v !== undefined && !isNaN(parseInt(v, 10))) {
        this.audio.setVolume(v);
        this.vol = v;
      } else {
        return this.vol;
      }
    },
    /**
     * Seek audio to position
     * @param {Float} position audio position in seconds to seek to.
     */
    seek: function (position) {
      try {
        this.audio.seekTo(position);
        this.position = position;
      } catch (e) {}
    },
    /**
     * Destroy audio object and remove from DOM
     */
    destroyAudio: function() {
      if(this.audio){
        this.pause();
        this.audio.parentNode.removeChild(this.audio);
        delete globalAudio5Flash.instances[this.id];
        delete this.audio;
      }
    }
  };

  include(FlashAudioPlayer, Pubsub);
  include(FlashAudioPlayer, AudioAttributes);

  /**
   * HTML5 Audio Player
   * @constructor
   */
  HTML5AudioPlayer = function () {};

  HTML5AudioPlayer.prototype = {
    /**
     * Initialize the player instance
     */
    init: function () {
      this.trigger('ready');
    },
    /**
     * Create new audio instance
     */
    createAudio: function(){
      this.audio = new Audio();
      this.audio.autoplay = false;
      this.audio.preload = 'auto';
      this.audio.autobuffer = true;
      this.bindEvents();
    },
    /**
     * Destroy current audio instance
     */
    destroyAudio: function(){
      if(this.audio){
        this.pause();
        this.unbindEvents();
        try {
          this.audio.setAttribute('src', '');
        } finally {
          delete this.audio;
        }
      }
    },
    /**
     * Sets up audio event listeners once so adding / removing event listeners is always done
     * on the same callbacks.
     */
    setupEventListeners: function(){
      this.listeners = {
        loadstart: this.onLoadStart.bind(this),
        canplay: this.onLoad.bind(this),
        loadedmetadata: this.onLoadedMetadata.bind(this),
        play: this.onPlay.bind(this),
        pause: this.onPause.bind(this),
        ended: this.onEnded.bind(this),
        error: this.onError.bind(this),
        timeupdate: this.onTimeUpdate.bind(this),
        seeking: this.onSeeking.bind(this),
        seeked: this.onSeeked.bind(this)
      };
    },
    /**
     * Bind DOM events to Audio object
     */
    bindEvents: function() {
      if(this.listeners === undefined){
        this.setupEventListeners();
      }
      this.audio.addEventListener('loadstart', this.listeners.loadstart, false);
      this.audio.addEventListener('canplay', this.listeners.canplay, false);
      this.audio.addEventListener('loadedmetadata', this.listeners.loadedmetadata, false);
      this.audio.addEventListener('play', this.listeners.play, false);
      this.audio.addEventListener('pause', this.listeners.pause, false);
      this.audio.addEventListener('ended', this.listeners.ended, false);
      this.audio.addEventListener('error', this.listeners.error, false);
      this.audio.addEventListener('timeupdate', this.listeners.timeupdate, false);
      this.audio.addEventListener('seeking', this.listeners.seeking, false);
      this.audio.addEventListener('seeked', this.listeners.seeked, false);
    },
    /**
     * Unbind DOM events from Audio object
     */
    unbindEvents: function() {
      this.audio.removeEventListener('loadstart', this.listeners.loadstart);
      this.audio.removeEventListener('canplay', this.listeners.canplay);
      this.audio.removeEventListener('loadedmetadata', this.listeners.loadedmetadata);
      this.audio.removeEventListener('play', this.listeners.play);
      this.audio.removeEventListener('pause', this.listeners.pause);
      this.audio.removeEventListener('ended', this.listeners.ended);
      this.audio.removeEventListener('error', this.listeners.error);
      this.audio.removeEventListener('timeupdate', this.listeners.timeupdate);
      this.audio.removeEventListener('seeking', this.listeners.seeking);
      this.audio.removeEventListener('seeked', this.listeners.seeked);
    },
    /**
     * Audio load start event handler. Triggered when audio starts loading
     */
    onLoadStart: function(){
      this.trigger('loadstart');
    },
    /**
     * Audio canplay event handler. Triggered when audio is loaded and can be played.
     * Resets player parameters and starts audio download progress timer.
     */
    onLoad: function () {
      if(!this.audio){
        return setTimeout(this.onLoad.bind(this), 100);
      }
      this.seekable = this.audio.seekable && this.audio.seekable.length > 0;
      if (this.seekable) {
        this.timer = setInterval(this.onProgress.bind(this), 250);
      }
      this.trigger('canplay');
    },
    /**
     * Audio ID3 load event handler. Triggered when ID3 metadata is loaded.
     */
    onLoadedMetadata: function(){
      this.trigger('loadedmetadata');
    },
    /**
     * Audio play event handler. Triggered when audio starts playing.
     */
    onPlay: function () {
      this.playing = true;
      this.trigger('play');
    },
    /**
     * Audio pause event handler. Triggered when audio is paused.
     */
    onPause: function () {
      this.playing = false;
      this.trigger('pause');
    },
    /**
     * Audio ended event handler. Triggered when audio playback has ended.
     */
    onEnded: function () {
      this.playing = false;
      this.trigger('ended');
    },
    /**
     * Audio timeupdate event handler. Triggered as long as playhead position is updated (audio is being played).
     */
    onTimeUpdate: function () {
      if (this.audio && this.playing) {
        try{
          this.position = this.audio.currentTime;
          this.duration = this.audio.duration === Infinity ? null : this.audio.duration;
        } catch (e){}
        this.trigger('timeupdate', this.position, this.duration);
      }
    },
    /**
     * Audio download progress timer callback. Check audio's download percentage.
     * Called periodically as soon as the audio loads and can be played.
     * Cancelled when audio has fully download or when a new audio file has been loaded to the player.
     */
    onProgress: function () {
      if (this.audio && this.audio.buffered !== null && this.audio.buffered.length) {
        this.duration = this.audio.duration === Infinity ? null : this.audio.duration;
        this.load_percent = parseInt(((this.audio.buffered.end(this.audio.buffered.length - 1) / this.duration) * 100), 10);
        this.trigger('progress', this.load_percent);
        if (this.load_percent >= 100) {
          this.clearLoadProgress();
        }
      }
    },
    /**
     * Audio error event handler
     * @param e error event
     */
    onError: function (e) {
      this.trigger('error', e);
    },
    /**
     * Audio seeking event handler. Triggered when audio seek starts.
     */
    onSeeking: function(){
      this.trigger('seeking');
    },
    /**
     * Audio seeked event handler. Triggered when audio has been seeked.
     */
    onSeeked: function(){
      this.trigger('seeked');
    },
    /**
     * Clears periodical audio download progress callback.
     */
    clearLoadProgress: function () {
      if (this.timer !== undefined) {
        clearInterval(this.timer);
        delete this.timer;
      }
    },
    /**
     * Resets audio position and parameters.
     */
    reset: function () {
      this.clearLoadProgress();
      this.seekable = false;
      this.duration = 0;
      this.position = 0;
      this.load_percent = 0;
    },
    /**
     * Load audio from url.
     * @param {String} url URL of audio to load
     */
    load: function (url) {
      this.reset();
      this.destroyAudio();
      this.createAudio();
      this.audio.setAttribute('src', url);
      this.audio.load();
    },
    /**
     * Play audio
     */
    play: function () {
      this.audio.play();
    },
    /**
     * Pause audio
     */
    pause: function () {
      this.audio.pause();
    },
    /**
     * Get / Set audio volume
     * @param {Float} v audio volume to set between 0 - 1.
     * @return {Float} current audio volume
     */
    volume: function (v) {
      if (v !== undefined && !isNaN(parseInt(v, 10))) {
        var vol = v < 0 ? 0 : Math.min(1, v);
        this.audio.volume = vol;
        this.vol = vol;
      } else {
        return this.vol;
      }
    },
    /**
     * Seek audio to position
     * @param {Float} position audio position in seconds to seek to.
     */
    seek: function (position) {
      var playing = this.playing;
      this.position = position;
      this.audio.currentTime = position;
      if (playing) {
        this.play();
      } else {
        if (this.audio.buffered !== null && this.audio.buffered.length) {
          this.trigger('timeupdate', this.position, this.duration);
        }
      }
    }
  };

  include(HTML5AudioPlayer, Pubsub);
  include(HTML5AudioPlayer, AudioAttributes);

  /**
   * Default settings object
   * @type {Object}
   */
  var settings = {
    /**
     * {String} path to Flash audio player SWF file
     */
    swf_path: '/swf/audiojs.swf',
    /**
     * {Boolean} flag indicating whether to throw errors to the page or trigger an error event
     */
    throw_errors: true,
    /**
     * {Boolean} flag indicating whether to format player duration and position to hh:mm:ss or pass as raw seconds
     */
    format_time: true,
    /**
     * {Array} list of codecs to try and use when initializing the player. Used to selectively initialize the internal audio player based on codec support
     */
    codecs: ['mp3']
  };

  /**
   * Audio5js Audio Player
   * @param {Object} s player settings object
   * @constructor
   */
  Audio5js = function (s) {
    s = s || {};
    var k;
    for (k in settings) {
      if (settings.hasOwnProperty(k) && !s.hasOwnProperty(k)) {
        s[k] = settings[k];
      }
    }
    this.init(s);
  };

  /**
   * Check if browser can play a given audio mime type.
   * @param {String} mime_type audio mime type to check.
   * @return {Boolean} is audio mime type supported by browser or not
   */
  Audio5js.can_play = function (mime_type) {
    return util.can_play(mime_type);
  };

  Audio5js.prototype = {
    /**
     * Initialize player instance.
     * @param {Object} s player settings object
     */
    init: function (s) {
      this.ready = false;
      this.settings = s;
      this.audio = this.getPlayer();
      this.bindAudioEvents();
      if (this.settings.use_flash) {
        this.audio.init(s.swf_path);
      } else {
        this.audio.init();
      }
    },
    /**
     * Gets a new audio player instance based on codec support as defined in settings.codecs array.
     * Defaults to MP3 player either HTML or Flash based.
     * @return {FlashAudioPlayer,HTML5AudioPlayer} audio player instance
     */
    getPlayer: function () {
      var i, l, player, codec;
      if(this.settings.use_flash){
        player = new FlashAudioPlayer();
        this.settings.player = {
          engine: 'flash',
          codec: 'mp3'
        };
      } else {
        for (i = 0, l = this.settings.codecs.length; i < l; i++) {
          codec = this.settings.codecs[i];
          if (Audio5js.can_play(codec)) {
            player = new HTML5AudioPlayer();
            this.settings.use_flash = false;
            this.settings.player = {
              engine: 'html',
              codec: codec
            };
            break;
          }
        }
        if (player === undefined) {
          // here we double check for mp3 support instead of defaulting to Flash in case user overrode the settings.codecs array with an empty array.
          this.settings.use_flash = !Audio5js.can_play('mp3');
          player = this.settings.use_flash ? new FlashAudioPlayer() : new HTML5AudioPlayer();
          this.settings.player = {
            engine: (this.settings.use_flash ? 'flash' : 'html'),
            codec: 'mp3'
          };
        }
      }
      return player;
    },
    /**
     * Bind events from audio object to internal callbacks
     */
    bindAudioEvents: function () {
      this.audio.on('ready', this.onReady, this);
      this.audio.on('loadstart', this.onLoadStart, this);
      this.audio.on('loadedmetadata', this.onLoadedMetadata, this);
      this.audio.on('play', this.onPlay, this);
      this.audio.on('pause', this.onPause, this);
      this.audio.on('ended', this.onEnded, this);
      this.audio.on('canplay', this.onCanPlay, this);
      this.audio.on('timeupdate', this.onTimeUpdate, this);
      this.audio.on('progress', this.onProgress, this);
      this.audio.on('error', this.onError, this);
      this.audio.on('seeking', this.onSeeking, this);
      this.audio.on('seeked', this.onSeeked, this);
    },
    /**
     * Load audio from URL
     * @param {String} url URL of audio to load
     */
    load: function (url) {
      var that = this,
          f = function(u){
            that.audio.load(u);
            that.trigger('load');
          };

      if(this.ready){
        f(url);
      } else {
        this.on('ready', f);
      }
    },
    /**
     * Play audio
     */
    play: function () {
      if(!this.playing){
        this.audio.play();
      }
    },
    /**
     * Pause audio
     */
    pause: function () {
      if(this.playing){
        this.audio.pause();
      }
    },
    /**
     * Toggle audio play / pause
     */
    playPause: function () {
      this[this.playing ? 'pause' : 'play']();
    },
    /**
     * Get / Set audio volume
     * @param {Float} v audio volume to set between 0 - 1.
     * @return {Float} current audio volume
     */
    volume: function (v) {
      if (v !== undefined && !isNaN(parseInt(v, 10))) {
        this.audio.volume(v);
        this.vol = v;
      } else {
        return this.vol;
      }
    },
    /**
     * Seek audio to position
     * @param {Float} position audio position in seconds to seek to.
     */
    seek: function (position) {
      this.audio.seek(position);
      this.position = position;
    },
    /**
     * Destroy audio object and remove from DOM
     */
    destroy: function() {
      this.audio.destroyAudio();
    },
    /**
     * Callback for audio ready event. Indicates audio is ready for playback.
     * Looks for ready callback in settings object and invokes it in the context of player instance
     */
    onReady: function () {
      this.ready = true;
      if (typeof (this.settings.ready) === 'function') {
        this.settings.ready.call(this, this.settings.player);
      }
      this.trigger('ready');
    },
    /**
     * Audio load start event handler
     */
    onLoadStart: function(){
      this.trigger('loadstart');
    },
    /**
     * Audio metadata loaded event handler
     */
    onLoadedMetadata: function(){
      this.trigger('loadedmetadata');
    },
    /**
     * Audio play event handler
     */
    onPlay: function () {
      this.playing = true;
      this.trigger('play');
    },
    /**
     * Audio pause event handler
     */
    onPause: function () {
      this.playing = false;
      this.trigger('pause');
    },
    /**
     * Playback end event handler
     */
    onEnded: function () {
      this.playing = false;
      this.trigger('ended');
    },
    /**
     * Audio error event handler
     */
    onError: function () {
      var error = new AudioError('Audio Error. Failed to Load Audio');
      if (this.settings.throw_errors) {
        throw error;
      } else {
        this.trigger('error', error);
      }
    },
    /**
     * Audio canplay event handler. Triggered when enough audio has been loaded to by played.
     */
    onCanPlay: function () {
      this.trigger('canplay');
    },
    /**
     * Audio seeking event handler
     */
    onSeeking: function(){
      this.trigger('seeking');
    },
    /**
     * Audio seeked event handler
     */
    onSeeked: function(){
      this.trigger('seeked');
    },
    /**
     * Playback time update event handler
     * @param {Float} position play head position (sec)
     * @param {Float} duration audio duration (sec)
     */
    onTimeUpdate: function (position, duration) {
      this.position = this.settings.format_time ? util.formatTime(position) : position;
      if (this.duration !== duration) {
        this.duration = this.settings.format_time && duration !== null ? util.formatTime(duration) : duration;
      }
      this.trigger('timeupdate', this.position, this.duration);
    },
    /**
     * Audio download progress event handler
     * @param {Float} loaded audio download percent
     */
    onProgress: function (loaded) {
      this.duration = this.audio.duration;
      this.load_percent = loaded;
      this.trigger('progress', loaded);
    }
  };

  include(Audio5js, Pubsub);
  include(Audio5js, AudioAttributes);

  return Audio5js;

}));


// Codigo js para página documental interactivo
// @codekit-prepend "config-min.js"
// @codekit-prepend "librerias/queryloader2.min.js"
// @codekit-prepend "librerias/velocity.min.js"
// @codekit-prepend "librerias/audio5.js"

var ancho_pag = document.body.offsetWidth;
var audios = [];
var btn_menu = document.querySelector(".js-btn-menu");
var contenedor = document.querySelector("#contenedor");
var diap_visible;
var diapo_visible = 'home';
var diapositivas = contenedor.children;
var el_menu = document.querySelector(".js-navegacion");
var menu = document.querySelector(".js-menu");
var nums_diapositivas = [];
var secciones = document.querySelectorAll(".js-seccion");
var tOut = false;
var milSec = 500;
var audioHome;
var btns_reproductor = document.querySelectorAll(".js-reproducir_home");
var btns_volumen = document.querySelectorAll(".js-volumen_home");
var estado_home;
var volumen_home;

var playPause = function () {
	this[this.playing ? 'pause' : 'play']();
};

// Generales  -->

var index_en_array = function(el_array, objetivo)
{
	for (var i = 0, len = el_array.length; i < len; i++)
	{
		if (el_array[i].getAttribute("data-destino") === objetivo)
		{
			return i;
		}
	}
	return null;
};

function btns_play_home (estado_home)
{
	var rep_flip = document.querySelectorAll(".js-flip-play");

	if (estado_home === "play" )
	{
		audioHome.play();
		for(var i=0,j=rep_flip.length;i<j;i++)
		{
			rep_flip[i].classList.remove("cambio");
		}
	}
	else if (estado_home === "pausa" )
	{
		audioHome.pause();
		for(var ii=0,jj=rep_flip.length;ii<jj;ii++)
		{
			rep_flip[ii].classList.add("cambio");
		}
	}
}

function btns_vol_home ()
{
	var vol_flip = document.querySelectorAll(".js-flip-volumen");
	var vol_texto = document.querySelectorAll(".js-text-volumen");

	if (volumen_home === "silencio" )
	{
		btns_volumen[0].setAttribute("data-volumen","silencio");
		for(var m=0,n=vol_texto.length;m<n;m++)
		{
			vol_texto[m].textContent = "Volumen";
		}
		for(var k=0,l=vol_flip.length;k<l;k++)
		{
			vol_flip[k].classList.add("cambio");
		}
		audioHome.volume(0);
	}
	else if (volumen_home === "suena" )
	{
		btns_volumen[0].setAttribute("data-volumen","suena");
		for(var o=0,p=vol_texto.length;o<p;o++)
		{
			vol_texto[o].textContent = "Silencio";
		}
		for(var kk=0,ll=vol_flip.length;kk<ll;kk++)
		{
			vol_flip[kk].classList.remove("cambio");
		}
		audioHome.volume(1);
	}
}

function compartir_redes()
{
	var twitter_popup = document.querySelectorAll(".js-twitter_popup");
	var gplus_popup = document.querySelectorAll(".js-gplus_popup");
	var fb_popup = document.querySelectorAll(".js-fb_popup");
	Array.prototype.forEach.call(twitter_popup, function(btn){
		btn.onclick = function ()
		{
			var width  = 575,
			height = 400,
			left   = (window.innerWidth - width)  / 2,
			top    = (window.innerHeight - height) / 2,
			url    = this.href,
			opts   = 'status=1' +
				',width='  + width  +
				',height=' + height +
				',top='    + top    +
				',left='   + left;
			window.open(url, 'twitter', opts);

			return false;
		};
	});
	Array.prototype.forEach.call(gplus_popup, function(btn){
		btn.onclick = function ()
		{
			var width  = 575,
			height = 400,
			left   = (window.innerWidth  - width)  / 2,
			top    = (window.innerHeight - height) / 2,
			url    = this.href,
			opts   = 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,' +
				',width='  + width  +
				',height=' + height +
				',top='    + top    +
				',left='   + left;
			window.open(url,'', opts);
			return false;
		};
	});
	Array.prototype.forEach.call(fb_popup, function(btn){
		btn.onclick = function ()
		{
			var width  = 575,
			height = 400,
			left   = (window.innerWidth  - width)  / 2,
			top    = (window.innerHeight - height) / 2,
			url    = this.href,
			opts   = 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,' +
				',width='  + width  +
				',height=' + height +
				',top='    + top    +
				',left='   + left;
			window.open(url,'', opts);
			return false;
		};
	});
}

function initAudio (archivo, reproducir, estado, volumen, rep_flip, rango, btn_volumen, vol_flip, vol_texto)
{
	var audio5js = new Audio5js({
		ready: function () {
			var el_archivo = '../assets/audios/'+archivo;
			this.load(el_archivo);
			var duracion;

			// Progreso
			this.on('timeupdate', function (position, duration) {
				// Duracion Total

				duracion = parseInt(duration);

				// Posicion
				var posicion = position.split(":");
				var segundo =  parseInt(posicion[0]*60)+parseInt(posicion[1]);
				// Porcentaje
				var porcentaje = parseInt(segundo) * 100/parseInt(duracion) ;
				porcentaje = Number(porcentaje).toFixed(1);
		      // Mover el rango
				rango.value = porcentaje;
			}, this);

			// Loop
			this.on('ended', function () {
				audio5js.playPause();
			}, this);
			
			//this.play();

			reproducir.onclick = function() {
				rep_flip.classList.toggle("cambio");
				estado = reproducir.getAttribute("data-estado");

				if (estado === "pausa" )
				{
					reproducir.setAttribute("data-estado","play");
				}
				else if (estado === "play" )
				{
					reproducir.setAttribute("data-estado","pausa");
				}

				audio5js.playPause();
			};

			btn_volumen.onclick = function() {
				vol_flip.classList.toggle("cambio");
				volumen = btn_volumen.getAttribute("data-volumen");

				if (volumen === "suena" )
				{
					btn_volumen.setAttribute("data-volumen","silencio");
					vol_texto.textContent = "Volumen";
					audio5js.volume(0);
				}
				else if (volumen === "silencio" )
				{
					btn_volumen.setAttribute("data-volumen","suena");
					vol_texto.textContent = "Silencio";
					audio5js.volume(1);
				}
			};

			rango.onchange =  function () {
				var momento = this.value;
				momento = momento * duracion / 100;
				momento = momento.toFixed(1);
				audio5js.seek(momento);
			};

		}
	});
	audios.push(audio5js);
}

// <-- Generales

function cerrar_descripcion()
{
	var btns_cerrar = document.querySelectorAll('.js-cerrar-descrip');
	Array.prototype.forEach.call(btns_cerrar, function(cerrar){
		cerrar.onclick = function() {
			this.parentNode.classList.toggle("oculto");
		};
	});
}

function titulo_tab () {
	var titulo = document.querySelector("h1");
	document.title = titulo.innerHTML;
}

function subtitulos () {
	var btn_subtitulos = document.querySelectorAll(".js-transcript");
	Array.prototype.forEach.call(btn_subtitulos, function(subti){
		subti.onclick = function() {
			this.parentNode.classList.toggle("activo");
		};
	});
}

function estructura()
{
	// nivel superior
	var num_diapositivas = contenedor.childElementCount;

	contenedor.style.width = ancho_pag * num_diapositivas + "px";

	Array.prototype.forEach.call(diapositivas, function(el){
		el.style.width = ancho_pag + "px";
	});

	// Dentro de cada sección
	Array.prototype.forEach.call(secciones, function(el){
		var contenedor_seccion = el.querySelector(".js-contenedor");
		var diapositivas_seccion = el.querySelectorAll(".js-diapositiva");

		// Clonar diapositivas
		var num_diaps = diapositivas_seccion.length;
		var ultima_diap = num_diaps - 1;

		var clon_uno = diapositivas_seccion[0].innerHTML;
		var clon_uno_fondo = diapositivas_seccion[0].getAttribute("style");
		var clon_dos = diapositivas_seccion[ultima_diap].innerHTML;
		var clon_dos_fondo = diapositivas_seccion[ultima_diap].getAttribute("style");

		contenedor_seccion.insertAdjacentHTML('afterbegin', "<article class='contenido diapositiva js-diapositiva clon' style='"+clon_dos_fondo+"'>"+clon_dos+"</article>");
		contenedor_seccion.insertAdjacentHTML('beforeend', "<article class='contenido diapositiva js-diapositiva clon' style='"+clon_uno_fondo+"'>"+clon_uno+"</article>");

		diapositivas_seccion = el.querySelectorAll(".js-diapositiva");

		num_diaps = diapositivas_seccion.length;
		nums_diapositivas.push(num_diaps-2);

		// Ancho de carrusel
		contenedor_seccion.style.width = ancho_pag * num_diaps + "px";

		// Dar ancho fijo a todas las diapositivas
		Array.prototype.forEach.call(diapositivas_seccion, function(diap){
			diap.style.width = ancho_pag + "px";
		});
	});
}

// Generales del carrusel -->
function mover(cont, diap_visible) {
	Velocity(cont, { left: (diap_visible * ancho_pag) * ( - 1 ) + "px" }, {duration: 300});
}
function mover_regresar(cont, diap_visible) {
	Velocity(cont, { left: (diap_visible * ancho_pag) * ( - 1 ) + "px" }, {duration: 300, complete: function(){
		cont.style.left = (ancho_pag) * ( - 1 ) + "px";
	} });
}
function retroceder_regresar(cont, diap_visible, total) {
	Velocity(cont, { left: (diap_visible * ancho_pag) * ( - 1 ) + "px" }, {duration: 300, complete: function(){
		cont.style.left = ( ( total ) * ancho_pag) * ( - 1 ) + "px";
	} });
}
function resetear_diapostivas (sec) {
	var estas_diapostivas = sec.querySelectorAll(".js-diapositiva");
	Array.prototype.forEach.call(estas_diapostivas, function(est){
		est.style.transform = "translateX(0px)";
		est.style.webkitTransform = "translateX(0px)";
		est.style.zIndex = "0";
	});
}
function hover_sensibles (sensible_izq, sensible_der, sec, diap_visible) {
	sensible_izq.onmouseover = function() {
		var actual_uno = sec.querySelector("[data-diapositiva='"+diap_visible+"']");
		var lateral_over_ant = actual_uno.previousElementSibling;
		lateral_over_ant.style.webkitTransform = "translateX(10%)";
		lateral_over_ant.style.transform = "translateX(10%)";
		lateral_over_ant.style.zIndex = "20";
	};
	sensible_der.onmouseover = function() {
		var actual_dos = sec.querySelector("[data-diapositiva='"+diap_visible+"']");
		var lateral_over_sig = actual_dos.nextElementSibling;
		lateral_over_sig.style.webkitTransform = "translateX(-10%)";
		lateral_over_sig.style.transform = "translateX(-10%)";
	};
	sensible_izq.onmouseout = function() {
		var actual_tres = sec.querySelector("[data-diapositiva='"+diap_visible+"']");
		var lateral_out_ant = actual_tres.previousElementSibling;
		lateral_out_ant.style.webkitTransform = "translateX(0px)";
		lateral_out_ant.style.transform = "translateX(0px)";
		lateral_out_ant.style.zIndex = "0";
	};
	sensible_der.onmouseout = function() {
		var actual_cuatro = sec.querySelector("[data-diapositiva='"+diap_visible+"']");
		var lateral_out_sig = actual_cuatro.nextElementSibling;
		lateral_out_sig.style.webkitTransform = "translateX(0px)";
		lateral_out_sig.style.transform = "translateX(0px)";
	};
}

// <-- Generales del carrusel


// Carrusel -->

function carruseles_secciones(est, sec, cont, dest)
{
	if (est === "activo")
	{
		var i = index_en_array(secciones, dest);

		// mover menos 1 diap
		cont.style.left = (ancho_pag) * ( - 1 ) + "px";
		// Empiece el audio
		audios[i].playPause();

		cont.setAttribute("data-visible", 1);
		diap_visible = cont.getAttribute("data-visible");
		diap_visible = +diap_visible;

		// Brinco de segunda diapositiva
		var brinco_inicial = sec.querySelector("[data-diapositiva='2']");
		setTimeout(function()
		{
			brinco_inicial.style.webkitTransform = "translateX(-10%)";
			brinco_inicial.style.transform = "translateX(-10%)";
		}, 300);
		setTimeout(function()
		{
			brinco_inicial.style.webkitTransform = "translateX(0px)";
			brinco_inicial.style.transform = "translateX(0px)";
		}, 700);
		// Paginador
		var paginador = cont.parentNode.querySelector(".js-paginador");
		var pag_actual = paginador.querySelector(".js-paginador-actual");
		var pag_total = paginador.querySelector(".js-paginador-total");
		pag_total.textContent = nums_diapositivas[i];

		// Sensible
		var sensible_izq = sec.querySelector(".js-sensible_izq");
		var sensible_der = sec.querySelector(".js-sensible_der");

		sensible_izq.onclick = function() {
			if ( diap_visible > 1 )
			{
				diap_visible--;
				mover(cont, diap_visible);
			}
			else
			{
				diap_visible--;
				retroceder_regresar(cont, diap_visible, nums_diapositivas[i]);
				diap_visible = nums_diapositivas[i];

			}
			cont.setAttribute("data-visible", diap_visible);
			pag_actual.textContent = diap_visible;
			resetear_diapostivas(sec);
			hover_sensibles(sensible_izq, sensible_der, sec, diap_visible);
		};
		sensible_der.onclick = function() {
			if ( diap_visible <= ( nums_diapositivas[i]-1 ) )
			{
				diap_visible++;
				mover(cont, diap_visible);
			}
			else
			{
				diap_visible++;
				mover_regresar(cont, diap_visible);
				diap_visible = 1;
			}
			cont.setAttribute("data-visible", diap_visible);
			pag_actual.textContent = diap_visible;
			resetear_diapostivas(sec);
			hover_sensibles(sensible_izq, sensible_der, sec, diap_visible);
		};
		hover_sensibles(sensible_izq, sensible_der, sec, diap_visible);

	}
}

// <-- Carrusel

function fullScreen()
{
	var apagador = 0;
	function launchFullScreen(element) {
		if(element.requestFullScreen) {
			element.requestFullScreen();
		} else if(element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		} else if(element.webkitRequestFullScreen) {
			element.webkitRequestFullScreen();
		} else if(element.msRequestFullScreen) {
			element.msRequestFullScreen();
		}
	}
	function exitFullscreen() {
		if(document.exitFullscreen) {
			document.exitFullscreen();
		} else if(document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if(document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
	}

	var btn_fullScreen = document.querySelector(".js-fullScreen");
	if (btn_fullScreen)
	{
		btn_fullScreen.onclick = function() {
			if (apagador === 0)
			{
				launchFullScreen(document.documentElement);
				apagador = 1;
			} else {
				exitFullscreen();
				apagador = 0;
			}
			setTimeout(function()
			{
				rsize();
			},milSec);
		};
	}
}

// Menú y navegación -->

function mov_menu()
{
	btn_menu.classList.toggle("open");
	menu.classList.toggle("visible");
	el_menu.classList.toggle("visible");
}

function menu_func()
{
	if (btn_menu)
	{
		btn_menu.onclick = function() {
			mov_menu();
		};
	}
}

function menu_activo_func()
{
	var menu_activo = menu.querySelector("[data-seccion="+diapo_visible+"]");
	if (menu_activo)
	{
		Array.prototype.filter.call(menu_activo.parentNode.children, function(child){
			if( child !== menu_activo )
			{
				child.classList.remove("actual");
			}
		});
		menu_activo.classList.add("actual");
	}
}

function navegacion()
{
	var btns_nav = document.querySelectorAll('.js-nav');
	var titulo_footer = document.querySelector(".js-seccion-footer");
	Array.prototype.forEach.call(btns_nav, function(el){
		el.onclick = function() {
			diapo_visible = el.getAttribute('data-ir');

			// Pausa a los demás audios
			for (var j in audios ) 
			{
				audios[j][audios[j].playing ? 'pause' : 'pause']();
			}

			if (diapo_visible)
			{
				// Mover carrusel
				var diapo = index_en_array( diapositivas, diapo_visible);
				setTimeout(function()
				{
					contenedor.style.left = (diapo * ancho_pag) * ( - 1 ) + "px";
				},250);
				// Menú activo
				menu_activo_func();
			}

			// Funciones dependiendo de la sección
			setTimeout(function()
			{
				if (diapo_visible !== "home")
				{
					el_menu.style.display = "block";
					carruseles_secciones("inactivo");
					btn_menu.classList.remove("internas");

					var seccion = document.querySelector("[data-destino="+diapo_visible+"]");
					var data_seccion = seccion.getAttribute("data-seccion");
					var titulo_seccion = seccion.getAttribute("data-titulo");

					// Poner título en el footer
					if (titulo_seccion)
					{
						titulo_footer.innerHTML = "<p>" + titulo_seccion + "</p>";
					}
					if (diapo_visible === "inicio")
					{
						estado_home = btns_reproductor[0].getAttribute("data-estado");
						btns_play_home(estado_home);
						volumen_home = btns_volumen[0].getAttribute("data-volumen");
						btns_vol_home(volumen_home);
					}

					if ( data_seccion )
					{
						audioHome.pause();
						var contenedor_seccion = seccion.querySelector(".js-contenedor");
						btn_menu.classList.add("internas");

						carruseles_secciones("activo", seccion, contenedor_seccion, diapo_visible);
					}
				}
				else 
				{
					el_menu.style.display = "none";
					carruseles_secciones("inactivo");
					btn_menu.classList.remove("internas");

					// Quitar título en el footer
					titulo_footer.innerHTML = "<p>&nbsp;</p>";
					audioHome.play();
					estado_home = btns_reproductor[0].getAttribute("data-estado");
					btns_play_home(estado_home);
					volumen_home = btns_volumen[0].getAttribute("data-volumen");
					btns_vol_home(volumen_home);
				}
			}, 250);

			if (  el_menu.classList.contains("visible") )
			{
				mov_menu();
			}
		};
	});
}

// <-- Menú y navegación

function audio_home ()
{
	
	var hom = document.querySelector(".js-home");
	var elAudio = hom.getAttribute("data-audio");

	audioHome = new Audio5js({
		ready: function () {
			var el_archivo = '../assets/audios/'+elAudio;
			this.load(el_archivo);

			// Loop
			this.on('ended', function () {
				audioHome.playPause();
			}, this);
			
			this.play();

			Array.prototype.forEach.call(btns_reproductor, function(rep){

				rep.onclick = function()
				{
					estado_home = btns_reproductor[0].getAttribute("data-estado");
					if (estado_home === "pausa" )
					{
						btns_reproductor[0].setAttribute("data-estado","play");
						estado_home = "play";
					}
					else if (estado_home === "play" )
					{
						btns_reproductor[0].setAttribute("data-estado","pausa");
						estado_home = "pausa";
					}
					btns_play_home(estado_home);
				};
			});

			Array.prototype.forEach.call(btns_volumen, function(vol){
				vol.onclick = function()
				{
						volumen_home = btns_volumen[0].getAttribute("data-volumen");

						if (volumen_home === "suena" )
						{
							btns_volumen[0].setAttribute("data-volumen","silencio");
							volumen_home = "silencio";
						}
						else if (volumen_home === "silencio" )
						{
							btns_volumen[0].setAttribute("data-volumen","suena");
							volumen_home = "suena";
						}
					btns_vol_home(volumen_home);
				};
			});
		}
	});
}

function reproductor()
{
	// Audios de cada sección

	Array.prototype.forEach.call(secciones, function(el, i){

		var elAudio = el.getAttribute("data-audio");
		var btn_reproductor = el.querySelector(".js-reproducir");
		var rango = el.querySelector(".js-rango");
		var btn_volumen = el.querySelector(".js-volumen");
		var rep_flip = btn_reproductor.querySelector(".flip-container");
		var vol_flip = btn_volumen.querySelector(".flip-container");
		var vol_texto = btn_volumen.querySelector(".js-texto");
		var estado;
		var volumen;

		initAudio(elAudio, btn_reproductor, estado, volumen, rep_flip, rango, btn_volumen, vol_flip, vol_texto, i);

	});
}

// Resize -->

function rsize()
{
	ancho_pag = document.body.offsetWidth;
	// nivel superior
	var num_diapositivas = contenedor.childElementCount;

	contenedor.style.width = ancho_pag * num_diapositivas + "px";

	Array.prototype.forEach.call(diapositivas, function(el){
		el.style.width = ancho_pag + "px";
	});

	// Dentro de cada sección
	Array.prototype.forEach.call(secciones, function(el){
		var contenedor_seccion = el.querySelector(".js-contenedor");
		var diapositivas_seccion = el.querySelectorAll(".js-diapositiva");

		// Ancho de carrusel
		var num_diaps = diapositivas_seccion.length;
		contenedor_seccion.style.width = ancho_pag * num_diaps + "px";

		// Dar ancho fijo a todas las diapositivas
		Array.prototype.forEach.call(diapositivas_seccion, function(diap){
			diap.style.width = ancho_pag + "px";
		});
	});

	var esta_seccion = document.querySelector("[data-ir='"+diapo_visible+"']");
	var event = document.createEvent('HTMLEvents');
	event.initEvent('click', true, false);
	esta_seccion.dispatchEvent(event);
}

window.onresize = function(event)
{
	if(tOut !== false)
		clearTimeout(tOut);
	tOut = setTimeout(rsize, milSec);
};

// <-- Resize al recargar

window.addEventListener('DOMContentLoaded', function() {
	new QueryLoader2(document.querySelector("body"), {
		barColor: "#efefef",
		backgroundColor: "#111",
		percentage: true,
		barHeight: 2,
		minimumTime: 1500,
		fadeOutTime: 350
	});
});

document.addEventListener('DOMContentLoaded', function()
{
	audio_home();
	menu_func();
	cerrar_descripcion();
	estructura();
	fullScreen();
	navegacion();
	reproductor();
	compartir_redes();
	titulo_tab();
	subtitulos();
});

