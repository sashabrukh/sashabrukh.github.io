!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/build/",n(n.s=15)}([function(e,t,n){"use strict";var o,r,i;if(document.querySelector(".my-skills")){var s=(o=document.querySelector(".my-works__header-img"),r=document.querySelector(".my-works__header-my-name"),i=document.querySelector(".my-works__header-title"),{move:function(e,t,n){var o=t/-n+"%";e.style.transform="translateY("+o+")"},worksUser:function(e){this.move(o,e,3)},worksTitle:function(e){this.move(r,e,1)},worksText:function(e){this.move(i,e,1)}});window.onscroll=function(){var e=window.pageYOffset;s.worksUser(e),s.worksTitle(e),s.worksText(e)}}},function(e,t,n){"use strict";var o,r,i;if(document.querySelector(".blog__content")){var s=(o=document.querySelector(".blog__header-img"),r=document.querySelector(".blog__header-my-name"),i=document.querySelector(".blog__header-title"),{move:function(e,t,n){var o=t/-n+"%";e.style.transform="translateY("+o+")"},blogUser:function(e){this.move(o,e,3)},blogTitle:function(e){this.move(r,e,1)},blogText:function(e){this.move(i,e,1)}});window.onscroll=function(){var e=window.pageYOffset;s.blogUser(e),s.blogTitle(e),s.blogText(e)}}},function(e,t,n){"use strict";var o,r,i;if(document.querySelector(".my-works__works")){var s=(o=document.querySelector(".my-works__header-img"),r=document.querySelector(".my-works__header-my-name"),i=document.querySelector(".my-works__header-title"),{move:function(e,t,n){var o=t/-n+"%";e.style.transform="translateY("+o+")"},worksUser:function(e){this.move(o,e,3)},worksTitle:function(e){this.move(r,e,1)},worksText:function(e){this.move(i,e,1)}});window.onscroll=function(){var e=window.pageYOffset;s.worksUser(e),s.worksTitle(e),s.worksText(e)}}},function(e,t,n){"use strict";$("#submit-form").on("submit",function(e){e.preventDefault();var t=$(e.target);t.serialize(),t.attr("action"),t.attr("method");o(t).done(function(e){var n=e.mes,o=e.status;"OK"===o?t.append('<p class="success">'+n+"</p>"):t.append('<p class="error">'+n+"</p>")}).fail(function(e,t){alert("Request failed: "+t)})});var o=function(e){var t=e.serialize(),n=e.attr("action");return $.ajax({type:"POST",url:n,dataType:"JSON",data:t})}},function(e,t,n){"use strict"},function(e,t,n){"use strict";var o={init:function(e){e.click(function(e){var t=$(this).attr("href"),n=$(t).offset().top;e.preventDefault(),$("html, body").animate({scrollTop:n},500)})}},r=$(".my-works__header-down-link"),i=$(".my-works__about-up-link");o.init(r),o.init(i)},function(e,t,n){"use strict";var o,r;if(document.querySelector(".my-works__about")){var i=(o=document.querySelector(".blur"),r=document.querySelector(".my-works__contacts-form-wrapper"),{set:function(){var e=document.querySelector(".my-works__about").offsetWidth,t=document.querySelector(".my-works__about").offsetHeight,n=-r.offsetLeft,i=-r.offsetTop,s=o.style;s.backgroundSize=e+"px "+t+"px",s.backgroundPosition=n+"px "+i+"px"}});i.set(),window.onresize=function(){i.set()}}},function(e,t,n){"use strict";document.querySelector(".my-works__works-name")&&function(){var e=[{title:"Burgers Landing",image:"../../img/portfolio/burgers.jpg",description:"SCSS, BEM, Javascript, jQuery, Gulp, Adaptive design",link:"https://sashabrukh.github.io/dist/portfolio/burgers/index.html"},{title:"Coworking",image:"../../img/portfolio/coworking.jpg",description:"Статичный сайт из 4х страниц",link:"https://sashabrukh.github.io/dist/portfolio/coworking/index.html"},{title:"Сайт в разработке",image:"../../img/portfolio/healday.jpg",description:"VUE, Javascript, SCSS, Pug, Webpack",link:"#"}],t=document.querySelector(".js-slider"),n=t.querySelector(".my-works__works-link"),o=t.querySelector(".my-works__works-name"),r=t.querySelector(".my-works__works-tech-item"),i=t.querySelector(".js-main-img-left"),s=t.querySelector(".js-main-img-center"),l=t.querySelector(".js-main-img-right"),c=t.querySelector(".js-left-img-left"),a=t.querySelector(".js-left-img-center"),u=t.querySelector(".js-left-img-right"),f=t.querySelector(".js-right-img-left"),m=t.querySelector(".js-right-img-center"),d=t.querySelector(".js-right-img-right"),y=t.querySelector(".js-slider-up"),g=t.querySelector(".js-slider-down"),h=e.length,p=0;function w(e){return e>=h?0:e<0?h-1:e}function v(){var t,y,g=w(p-1),h=w(p+1);function v(t,n){var o=document.createElement("img");t.childNodes.length>=1&&t.removeChild(t.firstChild),o.setAttribute("src",e[n].image),o.classList.add("js-images"),t.appendChild(o)}t=r,y=p,o.innerText=e[y].title,t.innerText=e[y].description,n.setAttribute("href",e[y].link),n.setAttribute("target","_blank"),v(i,g),v(s,p),v(l,h),v(c,g),v(a,h),v(u,p),v(f,h),v(m,g),v(d,p)}return{handlers:function(){v(),y.addEventListener("click",function(){p=w(p+1),v()}),g.addEventListener("click",function(){p=w(p-1),v()})}}}().handlers()},function(e,t,n){"use strict";if($("#map").length){google.maps.event.addDomListener(window,"load",function(){var e={zoom:11,center:new google.maps.LatLng(59.919186,30.314011),styles:[{featureType:"water",elementType:"geometry",stylers:[{color:"#a0d6d1"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#dedede"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#dedede"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#dedede"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f1f1f1"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#333333"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#fefefe"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#fefefe"},{lightness:17},{weight:1.2}]}]},t=document.getElementById("map"),n=new google.maps.Map(t,e);new google.maps.Marker({position:new google.maps.LatLng(40.67,-73.94),map:n,title:"Snazzy!"})})}},function(e,t,n){"use strict";var o=$(window).width(),r=function(){var e=$(".tab-container"),t=$(".blog__content-tab-item-link"),n=$(".blog__content-tab-cont"),r=$(".blog__theme"),i=$(".blog__content-tab-circle"),s=!1,l=$(".blog__content-tab-cont-fixed"),c=$(".blog__content-tab-item-link"),a=.15*e.innerWidth();function u(e){n.css("width",e+"px")}return{wayp:function(){r.waypoint({handler:function(e){var t=this.element.id;c.removeClass("js-tab-item-link"),$.each(c,function(e){$(this).attr("href").slice(1)===t&&$(this).addClass("js-tab-item-link")})},offset:"5"})},scrollMenu:function(){$(t).click(function(e){var t=$(this).attr("href"),n=$(t).offset().top;e.preventDefault(),$(window).bind("mousewheel",function(e){}),$("html, body").animate({scrollTop:n},500)})},animateCircleMenu:function(){i.click(function(){switch(s){case!1:u(350),s=!0;break;case!0:u(0),s=!1}}),$(document).click(function(e){!n.is(e.target)&&0===n.has(e.target).length&&s&&(u(0),s=!1)})},fixedMenu:function(){l.hasClass("js-fixed-menu")&&l.removeClass("js-fixed-menu"),o>1200&&$(window).scroll(function(){var e=window.pageYOffset;e>=700&&(l.addClass("js-fixed-menu"),l.width(a)),e<600&&l.removeClass("js-fixed-menu")})}}}();r.animateCircleMenu(),r.scrollMenu(),o>1200&&r.wayp(),r.fixedMenu()},function(e,t,n){"use strict";var o,r,i,s,l;(o=$(".welcome-form__container"),r=$(".js-welcome-link"),i=$(".log-form__to-main"),s="run-index-animation",l="run-index-animation-back",{start:function(){r.click(function(e){e.preventDefault(),o.hasClass(s)&&o.removeClass(s),o.hasClass(l)&&o.removeClass(l),o.addClass(s),$.when(r.animate({opacity:0},700)).then(function(){r.hide()})}),i.click(function(e){console.log("sss"),e.preventDefault(),o.addClass(l),$.when(r.show()).then(function(){r.animate({opacity:1},700)})})}}).start()},function(e,t,n){"use strict";var o,r,i,s=document.querySelector("#mobile-cont"),l=(o=document.querySelector("#mobile-checkbox"),r=document.querySelectorAll(".mobile-menu__link"),i=document.querySelector("#mobile-btn"),{init:function(){o.addEventListener("click",function(){var e=s.classList.contains("mobile-menu__container--active");e||(s.classList.add("mobile-menu__container--active"),document.body.style.overflow="hidden",i.classList.add("mobile-menu__btn--active")),e&&(s.classList.remove("mobile-menu__container--active"),document.body.style.overflow="auto",i.classList.remove("mobile-menu__btn--active"))})},animate:function(){function e(e){return new Promise(function(t){setTimeout(function(){r[e].style.opacity=1,t()},150)})}o.addEventListener("click",function(){setTimeout(function(){e(0).then(function(){return e(1)}).then(function(){return e(2)}).then(function(){return e(3)})})})}});s&&(l.init(),l.animate())},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];console.log("WebPack is ready")}},function(e,t,n){"use strict";var o=document.getElementById("parallax");if(o){var r=o.children;window.addEventListener("mousemove",function(e){var t=window.innerWidth/2-e.pageX,n=window.innerHeight/2-e.pageY;Array.from(r).forEach(function(e,o){var r=o/100,i=t*r,s=n*r;e.style.transform="translate("+i+"px, "+s+"px)"})})}},function(e,t,n){"use strict";var o,r,i,s,l,c,a,u,f,m,d=(o=document.getElementsByTagName("*"),r=document.querySelector(".preloader-container"),i=document.querySelector(".preloader-text"),s=/background-image: url\(['"]?(.*?)['"]?\)/i,l=document.body,c=[],a=0,u=void 0,f=void 0,m=void 0,{shadowImgAdd:function(){(m=document.createElement("img")).setAttribute("src",u),c.push(m)},show:function(){var e=this;return l.style.overflow="hidden",new Promise(function(t,n){for(var r=0;r<o.length;r++){o[r].matches("img")?(u=o[r].getAttribute("src"),e.shadowImgAdd()):o[r].hasAttribute("style")&&s.test(o[r].getAttribute("style"))&&(u=o[r].getAttribute("style").slice(22,-2),e.shadowImgAdd()),f=100/c.length;for(var l=0;l<c.length;l++)c[l].onload=function(){(a+=f)<100?i.innerText=Math.ceil(a)+"%":(a=100,i.innerText=a+"%"),100===Math.ceil(a)&&t()}}}).then(function(){r.style.display="none",l.style.overflow="auto"})}});document.addEventListener("DOMContentLoaded",function(){d.show()})},function(e,t,n){"use strict";o(n(14)),o(n(13)),o(n(12)),o(n(11)),o(n(10)),o(n(9)),o(n(8)),o(n(7)),o(n(6)),o(n(5)),o(n(4)),o(n(3)),o(n(2)),o(n(1)),o(n(0));function o(e){return e&&e.__esModule?e:{default:e}}}]);
//# sourceMappingURL=bundle.js.map