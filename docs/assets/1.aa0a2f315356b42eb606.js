webpackJsonp([1],{"./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/index.js?sourceMap!./source/styles/main.scss":function(n,e,t){e=n.exports=t("./node_modules/css-loader/lib/css-base.js")(),e.push([n.i,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n  background: #FFF;\n}\n\n.wrapper main {\n  min-height: 100vh;\n}\n\n#root,\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\nhtml {\n  font-family: 'Gentium Book Basic', serif;\n  font-size: 100%;\n  font-weight: 400;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1.5;\n  color: #000;\n}\n\nbody {\n  line-height: 1.333;\n}\n\nh1 {\n  margin-top: 0;\n  font-size: 92px;\n  font-weight: 900;\n}\n\n@media (max-width: 640px) {\n  h1 {\n    font-size: 54px;\n  }\n}\n\nh2 {\n  font-size: 36px;\n  font-weight: 900;\n}\n\n@media (max-width: 640px) {\n  h2 {\n    font-size: 24px;\n  }\n}\n\nh3 {\n  font-size: 1.999em;\n}\n\nh4 {\n  font-size: 24px;\n}\n\nh5 {\n  font-weight: 500;\n}\n\n.nyt-header {\n  font-family: 'Roboto', sans-serif;\n  width: 100%;\n}\n\n.masthead {\n  font-size: 11px;\n  text-transform: uppercase;\n  display: flex;\n  width: 100%;\n  background: #FFF;\n  border-bottom: 1px solid #ccc;\n  padding: 0px 8px;\n}\n\n.masthead > div {\n  display: flex;\n  align-items: center;\n  min-width: 33.3%;\n  padding: 9px;\n  vertical-align: baseline;\n  min-height: 47px;\n}\n\n.masthead div.sections {\n  margin: 0;\n  padding: 7px 12px;\n  border-radius: 3px;\n  border: 1px solid #cecece;\n  box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.06), inset -1px -1px 1px 0 rgba(0, 0, 0, 0.02);\n  height: 30px;\n}\n\n.masthead div.sections img {\n  height: 10px;\n  width: 13px;\n  max-height: 26px;\n  margin-right: 7px;\n  position: relative;\n  top: 1px;\n}\n\n@media (max-width: 720px) {\n  .masthead div.sections img {\n    margin-right: 0;\n  }\n}\n\n@media (max-width: 720px) {\n  .masthead div.sections {\n    font-size: 0;\n  }\n}\n\n.masthead .menus span {\n  display: flex;\n  margin-left: 16px;\n}\n\n.masthead .menus span > img {\n  height: 14px;\n  width: auto;\n  margin: 0 7px;\n}\n\n@media (max-width: 720px) {\n  .masthead .menus span {\n    display: none;\n  }\n}\n\n.masthead .branding {\n  justify-content: center;\n}\n\n.masthead .branding img {\n  height: 18px;\n  width: auto;\n}\n\n.masthead .profile {\n  justify-content: flex-end;\n}\n\n.masthead .profile img {\n  height: 14px;\n  width: auto;\n  margin: 0 7px;\n}\n\n.footer {\n  background: #FFF;\n  color: #999;\n  padding: 46px 0 60px;\n}\n\n.footer.ed {\n  background: #FFF;\n  text-align: center;\n}\n\n.page {\n  padding: 24px 0;\n}\n\n@media (max-width: 720px) {\n  .page {\n    padding: 0;\n  }\n}\n\n.story {\n  width: 1125px;\n  margin: 0 auto;\n  padding-top: 32px;\n}\n\n@media (max-width: 1120px) {\n  .story {\n    width: 975px;\n  }\n}\n\n@media (max-width: 720px) {\n  .story {\n    width: 100%;\n    padding-top: 0;\n  }\n}\n\n.story article {\n  display: flex;\n  justify-content: space-between;\n  float: left;\n}\n\n@media (max-width: 720px) {\n  .story article {\n    display: block;\n  }\n}\n\n.story-header h2 {\n  font-size: 12px;\n  line-height: 16px;\n  font-style: normal;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-bottom: 32px;\n  border-top: 1px solid #000;\n  padding-top: 8px;\n  font-family: sans-serif;\n  font-weight: 900;\n  font-family: 'Roboto', sans-serif;\n}\n\n@media (max-width: 720px) {\n  .story-header h2 {\n    border-top: 1px solid #e2e2e2;\n    padding-top: 14px;\n    border-bottom: 1px solid #e2e2e2;\n    padding-bottom: 16px;\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n}\n\n.story-header h1 {\n  font-family: 'Gentium Book Basic', serif;\n  font-size: 35px;\n  line-height: 38px;\n  line-height: 2.375rem;\n  font-weight: 700;\n  font-style: normal;\n  font-style: italic;\n  padding-bottom: 10px;\n}\n\n@media (max-width: 720px) {\n  .story-header h1 {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n}\n\n.story-header-meta {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  align-items: space-between;\n  height: 60px;\n  border-top: 1px solid #e2e2e2;\n  padding-top: 14px;\n  border-bottom: 1px solid #e2e2e2;\n  padding-bottom: 16px;\n}\n\n@media (max-width: 720px) {\n  .story-header-meta {\n    display: block;\n    padding-left: 16px;\n    padding-right: 16px;\n    height: auto;\n  }\n}\n\n.story-header-meta a {\n  color: #326891;\n  text-decoration: none;\n}\n\n.story-header-meta .extras {\n  height: 26px;\n}\n\n@media (max-width: 720px) {\n  .story-header-meta .extras {\n    margin-top: 14px;\n    padding: 6px 0;\n    height: 48px;\n  }\n}\n\n.story-header-meta .extras div {\n  position: relative;\n  top: -4px;\n  height: 26px;\n  display: inline;\n}\n\n.story-header-meta .extras div:first-of-type {\n  border-right: 1px solid #e2e2e2;\n}\n\n.story-header-meta .extras div:first-of-type img {\n  margin-right: 12px;\n}\n\n.story-header-meta .extras div:last-of-type img {\n  margin-left: 12px;\n}\n\n.story-header-meta .extras > div > img {\n  position: relative;\n  top: 4px;\n  height: 100%;\n  width: auto;\n}\n\n.byline {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  line-height: 12px;\n  font-weight: 400;\n  font-style: normal;\n}\n\n.byline img {\n  border-radius: 100%;\n  margin-right: 4px;\n}\n\n.byline strong {\n  font-weight: 700;\n}\n\n.byline strong:hover {\n  text-decoration: underline;\n}\n\n.story-content {\n  clear: both;\n  float: left;\n  padding-top: 24px;\n  margin-right: 60px;\n  width: 700px;\n}\n\n@media (max-width: 720px) {\n  .story-content {\n    width: 100%;\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n}\n\n.story-content .lead-image {\n  font-size: 13px;\n  line-height: 17px;\n  font-weight: 400;\n  color: #666;\n  margin-bottom: 45px;\n}\n\n.story-content .lead-image img {\n  width: 100%;\n  height: auto;\n  margin-bottom: 4px;\n}\n\n.story-content .lead-image span {\n  font-weight: 500;\n  color: #999;\n  margin: 0;\n  padding: 0;\n}\n\n.story-content p {\n  width: 570px;\n  margin-left: 75px;\n  margin-bottom: 17px;\n  font-size: 17px;\n  line-height: 26px;\n  font-weight: 400;\n}\n\n@media (max-width: 720px) {\n  .story-content p {\n    width: 100%;\n    margin: 0;\n  }\n}\n\n.story-content p a {\n  color: #326891;\n}\n\n.more-content {\n  float: left;\n  width: 50%;\n}\n\n.more-content:first-of-type {\n  padding-right: 12px;\n}\n\n.more-content:last-of-type {\n  padding-left: 12px;\n}\n\n.more-content h4 {\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 24px;\n}\n\n.more-content li {\n  display: inline;\n  color: #183a52;\n}\n\n.more-content li h5 {\n  margin-bottom: 15px;\n}\n\n.sidebar {\n  float: right;\n  padding-top: 16px;\n  max-width: 360px;\n}\n\n@media (max-width: 720px) {\n  .sidebar {\n    float: left;\n    width: 100%;\n    max-width: 100vw;\n  }\n\n  .sidebar h4,\n  .sidebar li {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n}\n\n.sidebar h4 {\n  font-family: 'Roboto', sans-serif;\n  font-size: 11px;\n  line-height: 11px;\n  font-weight: 700;\n  margin-bottom: 15px;\n  text-transform: uppercase;\n  padding-top: 6px;\n}\n\n.sidebar .more-content,\n.sidebar .trending-content {\n  clear: both;\n  width: 100%;\n}\n\n.sidebar .more-content li a {\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  line-height: 18px;\n  color: #000;\n  text-decoration: none;\n  margin-bottom: 12px;\n}\n\n.sidebar .more-content li a div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 65px;\n  min-height: 65px;\n  max-width: 65px;\n  max-height: 65px;\n  overflow: hidden;\n  margin-right: 7px;\n}\n\n.sidebar .more-content li a div img {\n  height: 65px;\n  width: auto;\n}\n\n.sidebar .more-content li a p {\n  font-size: 12px;\n  line-height: 17px;\n  font-weight: 400;\n  font-style: normal;\n  display: block;\n  color: #999;\n}\n\n.sidebar .trending-content {\n  border-top: 1px solid #ccc;\n  padding-top: 10px;\n  margin: 80px 0;\n}\n\n.sidebar .trending-content li {\n  min-height: 40px;\n  width: 100%;\n  display: flex;\n}\n\n.sidebar .trending-content li h5 {\n  font-size: 16px;\n  color: #000;\n  margin-right: 12px;\n}\n\n.sidebar .trending-content li a {\n  font-size: 13px;\n  line-height: 16px;\n  font-weight: 400;\n  font-style: normal;\n  color: #326891;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n",""])},"./node_modules/css-loader/lib/css-base.js":function(n,e){n.exports=function(){var n=[];return n.toString=function(){for(var n=[],e=0;e<this.length;e++){var t=this[e];t[2]?n.push("@media "+t[2]+"{"+t[1]+"}"):n.push(t[1])}return n.join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&i[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},"./node_modules/style-loader/addStyles.js":function(n,e){function t(n,e){for(var t=0;t<n.length;t++){var i=n[t],o=m[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(d(i.parts[r],e))}else{for(var a=[],r=0;r<i.parts.length;r++)a.push(d(i.parts[r],e));m[i.id]={id:i.id,refs:1,parts:a}}}}function i(n){for(var e=[],t={},i=0;i<n.length;i++){var o=n[i],r=o[0],a=o[1],s=o[2],d=o[3],p={css:a,media:s,sourceMap:d};t[r]?t[r].parts.push(p):e.push(t[r]={id:r,parts:[p]})}return e}function o(n,e){var t=x(),i=b[b.length-1];if("top"===n.insertAt)i?i.nextSibling?t.insertBefore(e,i.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),b.push(e);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(e)}}function r(n){n.parentNode.removeChild(n);var e=b.indexOf(n);e>=0&&b.splice(e,1)}function a(n){var e=document.createElement("style");return e.type="text/css",o(n,e),e}function s(n){var e=document.createElement("link");return e.rel="stylesheet",o(n,e),e}function d(n,e){var t,i,o;if(e.singleton){var d=u++;t=g||(g=a(e)),i=p.bind(null,t,d,!1),o=p.bind(null,t,d,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=s(e),i=h.bind(null,t),o=function(){r(t),t.href&&URL.revokeObjectURL(t.href)}):(t=a(e),i=l.bind(null,t),o=function(){r(t)});return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else o()}}function p(n,e,t,i){var o=t?"":i.css;if(n.styleSheet)n.styleSheet.cssText=y(e,o);else{var r=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}function l(n,e){var t=e.css,i=e.media;if(i&&n.setAttribute("media",i),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function h(n,e){var t=e.css,i=e.sourceMap;i&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([t],{type:"text/css"}),r=n.href;n.href=URL.createObjectURL(o),r&&URL.revokeObjectURL(r)}var m={},f=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}},c=f(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),x=f(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,u=0,b=[];n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},void 0===e.singleton&&(e.singleton=c()),void 0===e.insertAt&&(e.insertAt="bottom");var o=i(n);return t(o,e),function(n){for(var r=[],a=0;a<o.length;a++){var s=o[a],d=m[s.id];d.refs--,r.push(d)}if(n){t(i(n),e)}for(var a=0;a<r.length;a++){var d=r[a];if(0===d.refs){for(var p=0;p<d.parts.length;p++)d.parts[p]();delete m[d.id]}}}};var y=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},"./source/styles/main.scss":function(n,e,t){var i=t("./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/index.js?sourceMap!./source/styles/main.scss");"string"==typeof i&&(i=[[n.i,i,""]]);t("./node_modules/style-loader/addStyles.js")(i,{});i.locals&&(n.exports=i.locals)}});