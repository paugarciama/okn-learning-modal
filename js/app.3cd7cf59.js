(function(e){function t(t){for(var c,r,s=t[0],l=t[1],i=t[2],b=0,f=[];b<s.length;b++)r=s[b],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(c=!1)}c&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},a={app:0},o=[];function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/okn-learning-modal/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"06cc":function(e,t,n){},"1b68":function(e,t,n){"use strict";n("06cc")},"1ca2":function(e,t,n){"use strict";n("46b6")},2201:function(e,t,n){e.exports=n.p+"img/teacher-profile.9acfe78b.jpeg"},"28ab":function(e,t,n){e.exports=n.p+"img/student-profile.56b5f557.jpeg"},"38d0":function(e,t,n){},"42f9":function(e,t,n){"use strict";n("bec1")},"46b6":function(e,t,n){},"4b65":function(e,t,n){"use strict";n("38d0")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),a=n("63f1"),o=n.n(a),r=Object(c["f"])("img",{class:"logo",src:o.a,alt:"OKN Learning logo"},null,-1),s=Object(c["f"])("i",{class:"fas fa-comments"},null,-1);function l(e,t,n,a,o,l){var i=Object(c["n"])("Modal");return Object(c["j"])(),Object(c["d"])(c["a"],null,[Object(c["f"])("header",null,[r,Object(c["f"])("button",{class:"modal-btn",onClick:t[1]||(t[1]=function(){return a.toggleModal&&a.toggleModal.apply(a,arguments)})},[s])]),Object(c["f"])(c["b"],{name:"fade"},{default:Object(c["r"])((function(){return[Object(c["s"])(Object(c["f"])(i,{onCloseModal:t[2]||(t[2]=function(e){return a.visible=e})},null,512),[[c["q"],a.visible]])]})),_:1})],64)}var i={class:"modal-container"},u={class:"modal"},b={class:"close-container"},f={class:"title"},d={class:"content-container",ref:"messagesList"};function p(e,t,n,a,o,r){var s=Object(c["n"])("Content"),l=Object(c["n"])("Input");return Object(c["j"])(),Object(c["d"])("div",i,[Object(c["f"])("div",{class:"backdrop",onClick:t[1]||(t[1]=function(){return a.closeModal&&a.closeModal.apply(a,arguments)})}),Object(c["f"])("div",u,[Object(c["f"])("div",b,[Object(c["f"])("i",{class:"fas fa-times",onClick:t[2]||(t[2]=function(){return a.closeModal&&a.closeModal.apply(a,arguments)})})]),Object(c["f"])("h2",f,Object(c["o"])(a.title),1),Object(c["f"])("div",d,[Object(c["f"])(s,{message:a.message.value},null,8,["message"])],512),Object(c["f"])(l,{onSendMessage:t[3]||(t[3]=function(e){return a.message.value=e})})])])}var O=Object(c["f"])("i",{class:"fas fa-paper-plane"},null,-1);function j(e,t,n,a,o,r){return Object(c["j"])(),Object(c["d"])("form",null,[Object(c["s"])(Object(c["f"])("input",{type:"text",class:"input-msg","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.message=e})},null,512),[[c["p"],a.message]]),Object(c["f"])("button",{class:"input-btn",onClick:t[2]||(t[2]=Object(c["t"])((function(){return a.sendMessage&&a.sendMessage.apply(a,arguments)}),["prevent"]))},[O])])}var v=n("d4ec"),m=function e(t,n,c){Object(v["a"])(this,e),this.content=t,this.date=n,this.author=c},g={name:"Input",emits:["send-message"],setup:function(e,t){var n=t.emit,a=Object(c["k"])(""),o=function(){if(a.value){var e=Object(c["k"])(new m(a.value,(new Date).toLocaleString(),"student"));n("send-message",e),a.value=""}};return{message:a,sendMessage:o}}};n("4b65");g.render=j;var y=g,h=(n("b0c0"),{key:0}),k=Object(c["f"])("i",{class:"fas fa-cloud-download-alt"},null,-1),I={key:1};function R(e,t,n,a,o,r){var s=Object(c["n"])("ChatDelivery"),l=Object(c["n"])("ChatMessage");return Object(c["j"])(!0),Object(c["d"])(c["a"],null,Object(c["l"])(a.content,(function(e){return Object(c["j"])(),Object(c["d"])("div",{key:e,class:"list-container"},[e.value.type?(Object(c["j"])(),Object(c["d"])("div",h,[Object(c["f"])(s,null,{version:Object(c["r"])((function(){return[Object(c["e"])(Object(c["o"])(e.value.version),1)]})),name:Object(c["r"])((function(){return[Object(c["e"])(Object(c["o"])(e.value.name),1)]})),info:Object(c["r"])((function(){return[Object(c["e"])(Object(c["o"])(e.value.type)+" "+Object(c["o"])(e.value.size)+" - "+Object(c["o"])(e.value.date),1)]})),download:Object(c["r"])((function(){return[Object(c["f"])("a",{href:e.value.url},[k],8,["href"])]})),_:2},1024)])):(Object(c["j"])(),Object(c["d"])("div",I,[Object(c["f"])(l,{item:e.value},{content:Object(c["r"])((function(){return[Object(c["e"])(Object(c["o"])(e.value.content),1)]})),date:Object(c["r"])((function(){return[Object(c["e"])(Object(c["o"])(e.value.date),1)]})),_:2},1032,["item"])]))])})),128)}var A=n("28ab"),S=n.n(A),P=n("2201"),M=n.n(P),C={key:0,class:"messages-wrapper"},w={class:"message-container"},E=Object(c["f"])("div",{class:"thumbnail"},[Object(c["f"])("img",{src:S.a,alt:"Student's profile photo"})],-1),x={key:1,class:"messages-wrapper2"},U=Object(c["f"])("div",{class:"thumbnail"},[Object(c["f"])("img",{src:M.a,alt:"Teacher's profile photo"})],-1),B={class:"message-container2"};function V(e,t,n,a,o,r){return"student"===n.item.author?(Object(c["j"])(),Object(c["d"])("div",C,[Object(c["f"])("div",w,[Object(c["f"])("p",null,[Object(c["m"])(e.$slots,"content")]),Object(c["f"])("small",null,[Object(c["m"])(e.$slots,"date")])]),E])):(Object(c["j"])(),Object(c["d"])("div",x,[U,Object(c["f"])("div",B,[Object(c["f"])("p",null,[Object(c["m"])(e.$slots,"content")]),Object(c["f"])("small",null,[Object(c["m"])(e.$slots,"date")])])]))}var q={name:"ChatMessage",props:["item"]};n("1b68");q.render=V;var F=q,J={class:"delivery-wrapper"},X={class:"delivery-name"};function T(e,t,n,a,o,r){return Object(c["j"])(),Object(c["d"])("div",J,[Object(c["f"])("div",null,[Object(c["f"])("h5",null,[Object(c["m"])(e.$slots,"version")]),Object(c["f"])("p",X,[Object(c["m"])(e.$slots,"name")]),Object(c["f"])("p",null,[Object(c["m"])(e.$slots,"info")])]),Object(c["f"])("div",null,[Object(c["m"])(e.$slots,"download")])])}var K={name:"ChatDelivery"};n("42f9");K.render=T;var D=K,L=function e(t,n,c,a,o,r){Object(v["a"])(this,e),this.version=t,this.name=n,this.type=c,this.size=a,this.date=o,this.url=r},z={name:"Content",components:{ChatMessage:F,ChatDelivery:D},props:["message"],setup:function(e){var t=Object(c["k"])([]),n=Object(c["k"])(new m("Buenas tardes, acabo de subir el primer archivo con el primer caso práctico, espero revisión.","28 dic 2018 / 14:45","student")),a=Object(c["k"])(new m("¡Gran trabajo Pau! Pero creo que deberías revisar el punto 3. Intenta añadir un poco más de contexto y un apartado final de conclusiones personales.","29 dic 2018 / 10:11","teacher")),o=Object(c["k"])(new m("Realizados los cambios según feedback.","30 dic 2018 / 8:22","student")),r=Object(c["k"])(new m("Perfecto, excelente trabajo.","30 dic 2018 / 15:25","teacher")),s=Object(c["k"])(new L("VERSIÓN 1","Título del archivo a subir 1.pdf","Documento/PDF","(3.8 MB)","28 dic 2018 / 14:45","#")),l=Object(c["k"])(new L("VERSIÓN 2","Título del archivo a subir 2.pdf","Documento/PDF","(4.8 MB)","30 dic 2018 / 8:22","#"));return t.value.push(s,n,a,l,o,r),Object(c["g"])((function(){t.value.push(Object(c["k"])(e.message))})),{content:t}}};n("1ca2");z.render=R;var W=z,H={name:"Modal",emits:["close-modal"],components:{Content:W,Input:y},setup:function(e,t){var n=t.emit,a=Object(c["k"])("Comentarios"),o=Object(c["k"])({}),r=function(){n("close-modal",!1)},s=Object(c["k"])(null);return Object(c["h"])((function(){s.value.scrollTop=s.value.scrollHeight})),Object(c["i"])((function(){s.value.scrollTop=s.value.scrollHeight})),{title:a,closeModal:r,message:o,messagesList:s}}};n("63a7");H.render=p;var N=H,G={name:"App",components:{Modal:N},setup:function(){var e=Object(c["k"])(!0),t=function(){e.value=!e.value};return{visible:e,toggleModal:t}}};n("f6ee");G.render=l;var Q=G;Object(c["c"])(Q).mount("#app")},"63a7":function(e,t,n){"use strict";n("b6f8")},"63f1":function(e,t){e.exports="data:image/png;base64,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"},b6f8:function(e,t,n){},bec1:function(e,t,n){},c60d:function(e,t,n){},f6ee:function(e,t,n){"use strict";n("c60d")}});
//# sourceMappingURL=app.3cd7cf59.js.map