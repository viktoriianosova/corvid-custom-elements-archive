parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"tp23":[function(require,module,exports) {
function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function o(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}function r(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?i(e):n}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function l(t){var e="function"==typeof Map?new Map:void 0;return(l=function(t){if(null===t||!p(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return a(t,arguments,f(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s(n,t)})(t)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function a(t,e,n){return(a=u()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&s(r,n.prototype),r}).apply(null,arguments)}function p(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=function(t){function n(){var t;return e(this,n),(t=r(this,f(n).call(this))).attachShadow({mode:"open"}),t}return c(n,l(HTMLElement)),o(n,[{key:"render",value:function(t){var e=t.map(function(t){return'<div class="color-picker-selection" style="background-color: '.concat(t,'"></div>')}).join("");this.shadowRoot.innerHTML='\n\t\t<style>\n\t\t\t.color-picker-header {\n\t\t\t\twidth: 200px;\n\t\t\t\theight: 100px;\n\t\t\t\tborder-radius: 20px 20px 0 0;\n\t\t\t\tfont: 30px Arial;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\ttext-align: center;\n\t\t\t\tcolor: white;\n\t\t\t}\n\t\t\t.color-picker-header p {\n\t\t\t\tpadding-top: 1.15em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t\t.color-picker-footer {\n\t\t\t\twidth: 200px;\n\t\t\t\theight: 100px;\n\t\t\t\tborder-radius: 0px 0px 20px 20px;\n\t\t\t\tfont: 30px Arial;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\ttext-align: center;\n\t\t\t\tcolor: white;\n\t\t\t\tbox-shadow: 0px 3px 5px #888888;\n\t\t\t}\n\t\t\t.color-picker-selection-container {\n\t\t\t\twidth: 75%;\n\t\t\t\tmargin: 5px 0px 0px 20px;\n\t\t\t}\n\t\t\t.color-picker-selection {\n\t\t\t\twidth: 25px;\n\t\t\t\theight: 25px;\n\t\t\t\tborder-radius: 5px 5px 5px 5px;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\tmargin: 5px 0px 0px 5px;\n\t\t\t\tfloat: left;\n\t\t\t}\n\t\t\t.color-picker-selection-container input {\n\t\t\t\tmargin-top: 8px;\n\t\t\t\tborder-radius: 0px 0px 0px 0px;\n\t\t\t\tborder-width: 0px 0px 1px 0px;\n\t\t\t\toutline: none;\n\t\t\t\tcolor: #A9A9A9;\n\t\t\t}\n\t\t</style>\n\n\t\t<div class="color-picker-header" style="background-color: '.concat(t[0],'">\n\t\t\t<p>').concat(t[0],'</p>\n\t\t  </div>\n\t\t<div class="color-picker-footer">\n\t\t\t<div class="color-picker-selection-container">\n\t\t\t').concat(e,'\n\t\t\t<input key="hexInput" placeholder="Hex value"/>\n\t\t\t</div>\n\t\t</div>\t \n\t\t<p><a target="blank" href="https://github.com/marko-js-samples/marko-color-picker/tree/master/components/color-picker">Source</a></p<a>\n\t\t')}},{key:"parseColor",value:function(t){var e=[];return t.replace(/[\d+\.]+/g,function(t){e.push(parseFloat(t))}),"#".concat(e.slice(0,3).map(this.toHex).join(""))}},{key:"toHex",value:function(t){var e=t.toString(16);return 1==e.length?"0"+e:e}},{key:"isValidHexValue",value:function(t){return/^#[0-9A-F]{6}$/i.test(t)}},{key:"handleHexInput",value:function(t,e){t.startsWith("#")||(t="#"+t),this.isValidHexValue(t)||(t=e),this.onIconClick(t)}},{key:"onIconClick",value:function(t){var e=this.shadowRoot.querySelector(".color-picker-header");e.style.backgroundColor=t;var n=e.querySelector("p");if(this.isValidHexValue(t))n.textContent=t;else{var o=this.parseColor(t).toUpperCase();n.textContent=o}}},{key:"connectedCallback",value:function(){var t=this,e=JSON.parse(this.getAttribute("colors"));this.render(e),this.shadowRoot.querySelectorAll(".color-picker-selection").forEach(function(e){e.addEventListener("click",function(){return t.onIconClick(e.style.backgroundColor)})});var n=this.shadowRoot.querySelector("input"),o=e[0];n.addEventListener("input",function(e){return t.handleHexInput(e.target.value,o)}),console.log(n)}},{key:"disconnectedCallback",value:function(){var t=this;this.shadowRoot.querySelectorAll(".color-picker-selection").forEach(function(e){e.removeEventListener("click",function(){return t.onIconClick(e.style.backgroundColor)})})}},{key:"attributeChangedCallback",value:function(t,e,n){if("colors"===t){var o=JSON.parse(n);this.render(o)}}}],[{key:"observedAttributes",get:function(){return["colors"]}}]),n}();window.customElements.define("color-picker",d);
},{}]},{},["tp23"], null)
//# sourceMappingURL=/colorPicker.js.map