(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{23:function(e,t,a){e.exports=a(42)},33:function(e,t,a){e.exports=a.p+"static/media/cyberquantum_logo.44be2ea6.png"},34:function(e,t,a){e.exports=a.p+"static/media/video-placeholder.a622fc5d.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.836acd10.svg"},36:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},37:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-06.6a177696.svg"},38:function(e,t,a){e.exports=a.p+"static/media/undraw_upvote.c8a503ac.png"},39:function(e,t,a){e.exports=a.p+"static/media/undraw_charts.34a7864e.png"},40:function(e,t,a){e.exports=a.p+"static/media/undraw_security.ca19339a.png"},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(20),l=a.n(n),s=a(4),o=a(7),c=a(2),m=["component","layout"],d=function(e){var t=e.component,a=e.layout,i=Object(c.a)(e,m);return a=void 0===a?function(e){return r.a.createElement(r.a.Fragment,null,e.children)}:a,r.a.createElement(s.a,Object.assign({},i,{render:function(e){return r.a.createElement(a,null,r.a.createElement(t,e))}}))},v=a(11),u=a(3),p=a.n(u),h=a(16),b=r.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),n=Object(v.a)(a,2),l=n[0],s=n[1],o=Object(i.useState)([]),c=Object(v.a)(o,2),m=c[0],d=c[1],u=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},p=function(){if(!u())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=l-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){d(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(u()||(window.addEventListener("scroll",E),window.addEventListener("resize",f)),p())}),[m]);var b=function(){u()&&(window.removeEventListener("scroll",E),window.removeEventListener("resize",f))},E=Object(h.throttle)((function(){b(),p()}),30),f=Object(h.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){b(),p()}),[l]),r.a.createElement(r.a.Fragment,null,e.children())}));b.propTypes={children:p.a.func.isRequired};var E=b,f=a(13),g=a(1),N=a.n(g),y=a(10),w=["className","src","width","height","alt"],O=function(e){var t=e.className,a=e.src,n=e.width,l=e.height,s=e.alt,o=Object(c.a)(e,w),m=Object(i.useState)(!1),d=Object(v.a)(m,2),u=d[0],p=d[1],h=Object(i.useRef)(null);Object(i.useEffect)((function(){b(h.current)}),[]);var b=function(e){var t,a,i=document.createElement("img");u||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return r.a.createElement("img",Object.assign({},o,{ref:h,className:t,src:a,width:n,height:l,alt:s,onLoad:function(){p(!0)}}))};O.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var x=O,j=["className"],D=function(e){var t=e.className,i=Object(c.a)(e,j),n=N()("brand",t);return r.a.createElement("div",Object.assign({},i,{className:n}),r.a.createElement("h1",{className:"m-0"},r.a.createElement(y.a,{to:"/"},r.a.createElement(x,{src:a(33),alt:"Open",width:32,height:32}))))},k=["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"],C=function(e){var t=e.className,a=e.navPosition,n=e.hideNav,l=e.hideSignin,s=e.bottomOuterDivider,o=e.bottomDivider,m=Object(c.a)(e,k),d=Object(i.useState)(!1),u=Object(v.a)(d,2),p=u[0],h=u[1],b=Object(i.useRef)(null),E=Object(i.useRef)(null);Object(i.useEffect)((function(){return p&&f(),document.addEventListener("keydown",w),document.addEventListener("click",O),function(){document.removeEventListener("keydown",w),document.removeEventListener("click",O),g()}}));var f=function(){document.body.classList.add("off-nav-is-active"),b.current.style.maxHeight=b.current.scrollHeight+"px",h(!0)},g=function(){document.body.classList.remove("off-nav-is-active"),b.current&&(b.current.style.maxHeight=null),h(!1)},w=function(e){p&&27===e.keyCode&&g()},O=function(e){b.current&&p&&!b.current.contains(e.target)&&e.target!==E.current&&g()},x=N()("site-header",s&&"has-bottom-divider",t);return r.a.createElement("header",Object.assign({},m,{className:x}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:N()("site-header-inner",o&&"has-bottom-divider")},r.a.createElement(D,null),r.a.createElement("h4",null,"CyberHacktivist"),!n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{ref:E,className:"header-nav-toggle",onClick:p?g:f},r.a.createElement("span",{className:"screen-reader"},"Menu"),r.a.createElement("span",{className:"hamburger"},r.a.createElement("span",{className:"hamburger-inner"}))),r.a.createElement("nav",{ref:b,className:N()("header-nav",p&&"is-active")},r.a.createElement("div",{className:"header-nav-inner"},r.a.createElement("ul",{className:N()("list-reset text-xs",a&&"header-nav-".concat(a))},r.a.createElement("li",null,r.a.createElement(y.a,{to:"#0",onClick:g},"Our vision"))),!l&&r.a.createElement("ul",{className:"list-reset header-nav-right"},r.a.createElement("li",null,r.a.createElement("a",{href:"http://cyberquantum.methaverse.fr",target:"_blank"},r.a.createElement("span",{className:"button button-primary button-wide-mobile button-sm"},"Test CyberQuantum now !"))))))))))};C.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var A=C,L=["className"],T=function(e){var t=e.className,a=Object(c.a)(e,L),i=N()("footer-nav",t);return r.a.createElement("nav",Object.assign({},a,{className:i}),r.a.createElement("ul",{className:"list-reset"},r.a.createElement("li",null,r.a.createElement(y.a,{to:"#0"},"Contact")),r.a.createElement("li",null,r.a.createElement(y.a,{to:"#0"},"About us")),r.a.createElement("li",null,r.a.createElement(y.a,{to:"#0"},"FAQ's")),r.a.createElement("li",null,r.a.createElement(y.a,{to:"#0"},"Support"))))},F=["className"],H=function(e){var t=e.className,a=Object(c.a)(e,F),i=N()("footer-social",t);return r.a.createElement("div",Object.assign({},a,{className:i}),r.a.createElement("ul",{className:"list-reset"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/Raid44L"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Facebook"),r.a.createElement("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/Raid_44l"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Twitter"),r.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.instagram.com/raid_44l"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Instagram"),r.a.createElement("g",null,r.a.createElement("circle",{cx:"12.145",cy:"3.892",r:"1"}),r.a.createElement("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),r.a.createElement("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})))))))},P=["className","topOuterDivider","topDivider"],S=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,n=Object(c.a)(e,P),l=N()("site-footer center-content-mobile",a&&"has-top-divider",t);return r.a.createElement("footer",Object.assign({},n,{className:l}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:N()("site-footer-inner",i&&"has-top-divider")},r.a.createElement("div",{className:"footer-top space-between text-xxs"},r.a.createElement(D,null),r.a.createElement(H,null)),r.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},r.a.createElement(T,null),r.a.createElement("div",{className:"footer-copyright"},"Made by CyberHacktivist. All right reserved")))))};S.defaultProps={topOuterDivider:!1,topDivider:!1};var B=S,_=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{navPosition:"right",className:"reveal-from-bottom"}),r.a.createElement("main",{className:"site-content"},t),r.a.createElement(B,null))},M=a(5),R={types:{topOuterDivider:p.a.bool,bottomOuterDivider:p.a.bool,topDivider:p.a.bool,bottomDivider:p.a.bool,hasBgColor:p.a.bool,invertColor:p.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},z={types:Object(M.a)({},R.types),defaults:Object(M.a)({},R.defaults)},I={types:Object(M.a)(Object(M.a)({},R.types),{},{invertMobile:p.a.bool,invertDesktop:p.a.bool,alignTop:p.a.bool,imageFill:p.a.bool}),defaults:Object(M.a)(Object(M.a)({},R.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},W={types:Object(M.a)(Object(M.a)({},R.types),{},{pushLeft:p.a.bool}),defaults:Object(M.a)(Object(M.a)({},R.defaults),{},{pushLeft:!1})},q=["className"],V=function(e){var t=e.className,a=Object(c.a)(e,q),i=N()("button-group",t);return r.a.createElement("div",Object.assign({},a,{className:i}))},Q=["className","tag","color","size","loading","wide","wideMobile","disabled"],K=function(e){var t=e.className,a=e.tag,i=e.color,n=e.size,l=e.loading,s=e.wide,o=e.wideMobile,m=e.disabled,d=Object(c.a)(e,Q),v=N()("button",i&&"button-".concat(i),n&&"button-".concat(n),l&&"is-loading",s&&"button-block",o&&"button-wide-mobile",t),u=a;return r.a.createElement(u,Object.assign({},d,{className:v,disabled:m}))};K.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var G=K,U=["className","children","handleClose","show","closeHidden","video","videoTag"],$=function(e){var t=e.className,a=e.children,n=e.handleClose,l=e.show,s=e.closeHidden,o=e.video,m=e.videoTag,d=Object(c.a)(e,U);Object(i.useEffect)((function(){return document.addEventListener("keydown",u),document.addEventListener("click",p),function(){document.removeEventListener("keydown",u),document.removeEventListener("click",p)}})),Object(i.useEffect)((function(){v()}),[d.show]);var v=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},u=function(e){27===e.keyCode&&n(e)},p=function(e){e.stopPropagation()},h=N()("modal",l&&"is-active",o&&"modal-video",t);return r.a.createElement(r.a.Fragment,null,l&&r.a.createElement("div",Object.assign({},d,{className:h,onClick:n}),r.a.createElement("div",{className:"modal-inner",onClick:p},o?r.a.createElement("div",{className:"responsive-video"},"iframe"===m?r.a.createElement("iframe",{title:"video",src:o,frameBorder:"0",allowFullScreen:!0}):r.a.createElement("video",{"v-else":!0,controls:!0,src:o})):r.a.createElement(r.a.Fragment,null,!s&&r.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:n}),r.a.createElement("div",{className:"modal-content"},a)))))};$.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var J=$,Y=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"],X=Object(M.a)({},z.defaults),Z=function(e){var t=e.className,n=e.topOuterDivider,l=e.bottomOuterDivider,s=e.topDivider,o=e.bottomDivider,m=e.hasBgColor,d=e.invertColor,u=Object(c.a)(e,Y),p=Object(i.useState)(!1),h=Object(v.a)(p,2),b=h[0],E=h[1],f=N()("hero section center-content",n&&"has-top-divider",l&&"has-bottom-divider",m&&"has-bg-color",d&&"invert-color",t),g=N()("hero-inner section-inner",s&&"has-top-divider",o&&"has-bottom-divider");return r.a.createElement("section",Object.assign({},u,{className:f}),r.a.createElement("div",{className:"container-sm"},r.a.createElement("div",{className:g},r.a.createElement("div",{className:"hero-content"},r.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Your security, our",r.a.createElement("span",{className:"text-color-primary"}," priority")),r.a.createElement("div",{className:"container-xs"},r.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"With CyberHacktivist, we offer you security on your encryption keys. They are analysed and you will be warned in case of a breach."),r.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},r.a.createElement(V,null,r.a.createElement(G,{tag:"a",color:"primary",wideMobile:!0,href:"#cyberquantum"},"Get started"),r.a.createElement(G,{tag:"a",color:"dark",wideMobile:!0,href:"#feedback"},"View feedback"))))),r.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},r.a.createElement("a",{"data-video":"https://player.vimeo.com/video/174002812",href:"#0","aria-controls":"video-modal",onClick:function(e){e.preventDefault(),E(!0)}},r.a.createElement(x,{className:"has-shadow",src:a(34),alt:"Hero",width:896,height:504}))),r.a.createElement(J,{id:"video-modal",show:b,handleClose:function(e){e.preventDefault(),E(!1)},video:"https://player.vimeo.com/video/174002812",videoTag:"iframe"}))))};Z.defaultProps=X;var ee=Z,te=["className","data","children","tag"],ae=function(e){var t=e.className,a=e.data,i=e.children,n=e.tag,l=Object(c.a)(e,te),s=N()("section-header",t),o=n;return r.a.createElement(r.a.Fragment,null,(a.title||a.paragraph)&&r.a.createElement("div",Object.assign({},l,{className:s}),r.a.createElement("div",{className:"container-xs"},i,a.title&&r.a.createElement(o,{className:N()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&r.a.createElement("p",{className:"m-0"},a.paragraph))))};ae.defaultProps={children:null,tag:"h2"};var ie=ae,re=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],ne=Object(M.a)({},W.defaults),le=function(e){var t=e.className,i=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.pushLeft,v=Object(c.a)(e,re),u=N()("features-tiles section",i&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),p=N()("features-tiles-inner section-inner pt-0",l&&"has-top-divider",s&&"has-bottom-divider"),h=N()("tiles-wrap center-content",d&&"push-left");return r.a.createElement("section",Object.assign({},v,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:p},r.a.createElement(ie,{data:{title:"Our expertise at your service",paragraph:"Access to data has become a key issue, regardless of the environment (office or industrial).    With the advent of the Cloud, internal and external exchanges are exposed to various types of malicious acts and are constantly changing.    Consequently, the security of your LAN, WAN, servers, workstations and all IP communication elements must be adapted to your needs."},className:"center-content"}),r.a.createElement("div",{className:h},r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(x,{src:a(35),alt:"Features tile icon 04",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Trained experts"),r.a.createElement("p",{className:"m-0 text-sm"},"Our experts are recruited and trained in attack and defence techniques. In order to thoroughly test your infrastructure.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(x,{src:a(36),alt:"Features tile icon 02",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Fast execution"),r.a.createElement("p",{className:"m-0 text-sm"},"Our latest generation servers offer 5 times more computing power than our competitors. This guarantees you a fast result.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(x,{src:a(37),alt:"Features tile icon 06",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"User feedback"),r.a.createElement("p",{className:"m-0 text-sm"},"We take into account feedback from our users to ensure a continuous improvement process."))))))))};le.defaultProps=ne;var se=le,oe=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"],ce=Object(M.a)({},I.defaults),me=function(e){var t=e.className,i=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.invertMobile,v=e.invertDesktop,u=e.alignTop,p=e.imageFill,h=Object(c.a)(e,oe),b=N()("features-split section",i&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),E=N()("features-split-inner section-inner",l&&"has-top-divider",s&&"has-bottom-divider"),f=N()("split-wrap",d&&"invert-mobile",v&&"invert-desktop",u&&"align-top");return r.a.createElement("section",Object.assign({},h,{className:b}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:E},r.a.createElement("span",{id:"cyberquantum"}),r.a.createElement(ie,{data:{title:"CyberQuantum",paragraph:"An exceptional product - combining ease of use and high performance. All thanks to our community of CyberHacktivist"},className:"center-content"}),r.a.createElement("div",{className:f},r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"A competitive leaderboard"),r.a.createElement("h3",{className:"mt-0 mb-12"},"A community of enthusiasts"),r.a.createElement("p",{className:"m-0"},"Our artisan developer community can submit compromised RSA Keys. A leaderboard is established and rewards the most active members.")),r.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(x,{src:a(38),alt:"Features split 01",width:528,height:396}))),r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Intuitive operation"),r.a.createElement("h3",{className:"mt-0 mb-12"},"Quick and easy analysis"),r.a.createElement("p",{className:"m-0"},"With CyberQuantum, you can test your RSA keys. A score is given to estimate it's reliability.")),r.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(x,{src:a(39),alt:"Features split 02",width:528,height:396}))),r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"An immediate alert"),r.a.createElement("h3",{className:"mt-0 mb-12"},"Personalized support"),r.a.createElement("p",{className:"m-0"},"If one of your RSA keys is compromised, you will be immediately informed and monitored to reduce the risk of a cyber attack.")),r.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(x,{src:a(40),alt:"Features split 03",width:528,height:396})))))))};me.defaultProps=ce;var de=me,ve=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],ue=Object(M.a)({},W.defaults),pe=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,ve),v=N()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),u=N()("testimonial-inner section-inner",n&&"has-top-divider",l&&"has-bottom-divider"),p=N()("tiles-wrap",m&&"push-left");return r.a.createElement("section",Object.assign({},d,{className:v}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:u},r.a.createElement("span",{id:"feedback"}),r.a.createElement(ie,{data:{title:"Customer testimonials",paragraph:"These users have been seduced by our services."},className:"center-content"}),r.a.createElement("div",{className:p},r.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 An innovative, comprehensive and efficient service.",r.a.createElement("br",null),"The CyberQuantum tool has revolutionised our IT department, while increasing our efficiency.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Elliot Boucher"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"Edusign"))))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 We are very pleased that our students were able to develop an innovative solution that fits perfectly with the spirit of today's IT companies.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Alexandrine Grohs"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"Epsi Nantes"))))),r.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 This application is revolutionary !",r.a.createElement("br",null),"It has given me a new vision of computer security. This choice is both innovative and one of the fastest on the cyber security market.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Vincent Lhoste"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"Ethical Hacking")))))))))};pe.defaultProps=ue;var he=pe,be=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],Ee=Object(M.a)({},W.defaults),fe=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,be),v=N()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),u=N()("testimonial-inner section-inner",n&&"has-top-divider",l&&"has-bottom-divider"),p=N()("tiles-wrap",m&&"push-left");return r.a.createElement("section",Object.assign({},d,{className:v}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:u},r.a.createElement(ie,{data:{title:"Pricing",paragraph:""},className:"center-content"}),r.a.createElement("div",{className:p},r.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"For people who want to try our service.",r.a.createElement("br",null),"Or CyberHactivist wanting to be paid for their work.",r.a.createElement("br",null),"The ability to submit up to 10 keys per month and unlimited access to community forums.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"Free"))))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"For companies wanting to test their infrastructure.",r.a.createElement("br",null),"The possibility to submit up to 100 keys per month.",r.a.createElement("br",null),"And instant reporting of your compromised keys.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"$ 150 per month"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"Enterprise"))))),r.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},'All the advantages of the "Enterprise" formula.',r.a.createElement("br",null),"You will also benefit from a complete and regular support for all your key examinations.",r.a.createElement("br",null),"A dedicated team available 24/7 in case of compromised keys.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"from $ 500 per month"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"Enterprise +")))))))))};fe.defaultProps=Ee;var ge=fe,Ne=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,{className:"illustration-section-01"}),r.a.createElement(se,null),r.a.createElement(de,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),r.a.createElement(ge,{topDivider:!0}),r.a.createElement(he,{topDivider:!0}))};f.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var ye=function(){var e=Object(i.useRef)(),t=Object(s.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){f.a.set({page:e}),f.a.pageview(e)}(a)}),[t]),r.a.createElement(E,{ref:e,children:function(){return r.a.createElement(s.c,null,r.a.createElement(d,{exact:!0,path:"/",component:Ne,layout:_}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(41);var we=Object(o.a)();l.a.render(r.a.createElement(s.b,{history:we},r.a.createElement(ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.8db440a1.chunk.js.map