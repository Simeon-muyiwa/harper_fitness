!function(e){"use strict";e.matchMedia=e.matchMedia||function(e,t){var n,a=e.documentElement,r=a.firstElementChild||a.firstChild,s=e.createElement("body"),i=e.createElement("div");return i.id="mq-test-1",i.style.cssText="position:absolute;top:-100em",s.style.background="none",s.appendChild(i),function(e){return i.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',a.insertBefore(s,r),n=42===i.offsetWidth,a.removeChild(s),{matches:n,media:e}}}(e.document)}(this),function(e){"use strict";function t(){w(!0)}var n={};e.respond=n,n.update=function(){};var a=[],r=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),s=function(e,t){var n=r();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))},i=function(e){return e.replace(n.regex.minmaxwh,"").match(n.regex.other)};if(n.ajax=s,n.queue=a,n.unsupportedmq=i,n.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},n.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,!n.mediaQueriesSupported){var o=e.document,l=o.documentElement,m=[],d=[],h=[],u={},c=30,f=o.getElementsByTagName("head")[0]||l,p=o.getElementsByTagName("base")[0],g=f.getElementsByTagName("link"),y,x,v,E=function(){var e,t=o.createElement("div"),n=o.body,a=l.style.fontSize,r=n&&n.style.fontSize,s=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=s=o.createElement("body"),n.style.background="none"),l.style.fontSize="100%",n.style.fontSize="100%",n.appendChild(t),s&&l.insertBefore(n,l.firstChild),e=t.offsetWidth,s?l.removeChild(n):n.removeChild(t),l.style.fontSize=a,r&&(n.style.fontSize=r),e=v=parseFloat(e)},w=function(t){var n="clientWidth",a=l[n],r="CSS1Compat"===o.compatMode&&a||o.body[n]||a,s={},i=g[g.length-1],u=(new Date).getTime();if(t&&y&&c>u-y)return e.clearTimeout(x),void(x=e.setTimeout(w,c));y=u;for(var p in m)if(m.hasOwnProperty(p)){var S=m[p],T=S.minw,C=S.maxw,b=null===T,z=null===C,M="em";T&&(T=parseFloat(T)*(T.indexOf(M)>-1?v||E():1)),C&&(C=parseFloat(C)*(C.indexOf(M)>-1?v||E():1)),S.hasquery&&(b&&z||!(b||r>=T)||!(z||C>=r))||(s[S.media]||(s[S.media]=[]),s[S.media].push(d[S.rules]))}for(var R in h)h.hasOwnProperty(R)&&h[R]&&h[R].parentNode===f&&f.removeChild(h[R]);h.length=0;for(var O in s)if(s.hasOwnProperty(O)){var k=o.createElement("style"),q=s[O].join("\n");k.type="text/css",k.media=O,f.insertBefore(k,i.nextSibling),k.styleSheet?k.styleSheet.cssText=q:k.appendChild(o.createTextNode(q)),h.push(k)}},S=function(e,t,a){var r=e.replace(n.regex.comments,"").replace(n.regex.keyframes,"").match(n.regex.media),s=r&&r.length||0;t=t.substring(0,t.lastIndexOf("/"));var o=function(e){return e.replace(n.regex.urls,"$1"+t+"$2$3")},l=!s&&a;t.length&&(t+="/"),l&&(s=1);for(var h=0;s>h;h++){var u,c,f,p;l?(u=a,d.push(o(e))):(u=r[h].match(n.regex.findStyles)&&RegExp.$1,d.push(RegExp.$2&&o(RegExp.$2))),f=u.split(","),p=f.length;for(var g=0;p>g;g++)c=f[g],i(c)||m.push({media:c.split("(")[0].match(n.regex.only)&&RegExp.$2||"all",rules:d.length-1,hasquery:c.indexOf("(")>-1,minw:c.match(n.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:c.match(n.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}w()},T=function(){if(a.length){var t=a.shift();s(t.href,function(n){S(n,t.href,t.media),u[t.href]=!0,e.setTimeout(function(){T()},0)})}},C=function(){for(var t=0;t<g.length;t++){var n=g[t],r=n.href,s=n.media,i=n.rel&&"stylesheet"===n.rel.toLowerCase();r&&i&&!u[r]&&(n.styleSheet&&n.styleSheet.rawCssText?(S(n.styleSheet.rawCssText,r,s),u[r]=!0):(!/^([a-zA-Z:]*\/\/)/.test(r)&&!p||r.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&("//"===r.substring(0,2)&&(r=e.location.protocol+r),a.push({href:r,media:s})))}T()};C(),n.update=C,n.getEmValue=E,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this);