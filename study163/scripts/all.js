function ajax(e){var t=null;t=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");var n="get"==e.type?"get":"post",o="";e.url&&(o=e.url);var r="true"==e.asyn?"true":"false";t.open(n,o,r),t.send(null),t.onreadystatechange=function(){4==this.readyState&&200==this.status&&e.success(this.responseText)}}function getCookie(){var e={},t=document.cookie;if(""===t)return e;for(var n=t.split("; "),o=0,r=n.length;o<r;o++){var l=n[o],a=l.indexOf("="),s=l.substring(0,a);s=decodeURIComponent(s);var i=l.substring(a+1);i=decodeURIComponent(i),e[s]=i}return e}function setCookie(e,t,n,o,r,l){var a=encodeURIComponent(e)+"="+encodeURIComponent(t);n&&(a+="; expires="+n.toGMTString()),o&&(a+="; path="+o),r&&(a+="; domain="+r),l&&(a+="; secure="+l),document.cookie=a}function removeCookie(e){document.cookie=e+"= ; max-age=0"}function addEventListener(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)}function stopDefault(e){return e&&e.preventDefault?e.preventDefault():window.event.returnValue=!1,!1}!function(){function e(e){return function(){i=setTimeout(function(t){e.style.display="block"},1e3)}}function t(e){return function(){clearTimeout(i),e.style.display="none"}}function n(e){return function(){s.pageNo=e;for(var t=0;t<u.length;t++)u[t].className="";u[e-1].className="select",s.sendUrl(),ajax(s)}}var o=document.getElementById("J_course-tabs"),r=o.children[0],l=o.children[1],a=document.getElementById("J_course"),s={type:"get",pageNo:1,psize:20,stype:10,asyn:!0,url:"//study.163.com/webDev/couresByCategory.htm?pageNo=1&psize=20&type=10",sendUrl:function(){s.url="//study.163.com/webDev/couresByCategory.htm?pageNo="+s.pageNo+"&psize="+s.psize+"&type="+s.stype}};s.success=function(n){var o=JSON.parse(n);a.innerHTML="";for(var r=0;r<o.list.length;r++){var l=0==o.list[r].price?"免费":"￥"+o.list[r].price,s=document.createElement("li"),i=document.createElement("div");s.innerHTML="<img src="+o.list[r].middlePhotoUrl+"><h3>"+o.list[r].name+"</h3><span>"+o.list[r].provider+"</span><i>"+o.list[r].learnerCount+"</i><em>"+l+"</em>",i.innerHTML="<img src="+o.list[r].middlePhotoUrl+"><h3>"+o.list[r].name+"</h3><span>发布者："+o.list[r].provider+'</span><span class="categoryName">分类：'+o.list[r].categoryName+"</span><i>"+o.list[r].learnerCount+'人在学</i><em><p class="p">'+o.list[r].description+"</p></em>",i.style.display="none",i.className="course-popup",addEventListener(s,"mouseenter",e(i)),addEventListener(s,"mouseleave",t(i)),s.appendChild(i),a.appendChild(s)}};var i=null;ajax(s),addEventListener(r,"click",function(){r.className="select",l.className="",s.pageNo=1,s.stype=10,n(1)()}),addEventListener(l,"click",function(){l.className="select",r.className="",s.stype=20,n(1)()});for(var c=document.getElementById("J_course_page"),u=c.getElementsByTagName("li"),d=0;d<u.length;d++)addEventListener(u[d],"click",n(d+1));var m=document.getElementById("J_course_prepage"),g=document.getElementById("J_course_nextpage");addEventListener(m,"click",function(){s.pageNo>1&&n(s.pageNo-1)()}),g.onselectstart="return false",addEventListener(g,"click",function(){s.pageNo<u.length&&n(s.pageNo+1)()})}(),!function(){function e(e){var t=e||window.event,n=t.target||t.srcElement;n.value="",n.parentNode.lastChild.style.display="none"}function t(e){var t=e||window.event,n=t.target||t.srcElement;n.value||(n.parentNode.lastChild.style.display="block")}function n(){var e={type:"get",asyn:!0,url:"//study.163.com/webDev/attention.htm"};e.success=function(e){1==e&&(o(),setCookie("followSuc",1),console.log(e))},ajax(e)}function o(){d.style.visibility="hidden",m.style.display="block",g.style.marginLeft="60px",l.style.display="none"}var r=document.getElementById("J_close_loginwd"),l=document.getElementById("J_login"),a=document.getElementById("J_loginbg");addEventListener(r,"click",function(){l.style.display="none",document.body.style.overflowY="auto"}),addEventListener(a,"click",function(){document.body.style.overflowY="auto",l.style.display="none"});var s=document.getElementById("userName"),i=document.getElementById("password"),c=document.getElementById("J_login_buttom"),u=document.getElementById("J_login_validation");addEventListener(s,"focus",e),addEventListener(s,"blur",t),addEventListener(i,"focus",e),addEventListener(i,"blur",t),addEventListener(c,"click",function(e){var e=e||window.event;console.log(s.value),console.log(i.value);var t={type:"get",asyn:!0,url:"//study.163.com/webDev/login.htm?userName="+MD5(s.value)+"&password="+MD5(i.value)};t.success=function(e){0==e?u.innerHTML="账号或密码错误!请重新输入！":(u.innerHTML="",setCookie("loginSuc",1),n(),document.body.style.overflow="auto")},""==s.value?u.innerHTML="请输入账号!":""==i.value?u.innerHTML="请输入密码!":ajax(t),stopDefault(e)});var d=document.getElementById("J_attention"),m=document.getElementById("J_focused"),g=document.getElementById("J_fans"),p=m.getElementsByTagName("span")[0];getCookie().loginSuc&&getCookie().followSuc&&o(),addEventListener(d,"click",function(){var e=getCookie();e.loginSuc?n():(l.style.display="block",s.value="",s.parentNode.lastChild.style.display="block",i.value="",i.parentNode.lastChild.style.display="block",document.body.style.overflowY="hidden")}),addEventListener(p,"click",function(){d.style.visibility="visible",m.style.display="none",g.style.marginLeft="14px",removeCookie("followSuc")});document.getElementById("J_userName_test"),document.getElementById("J_password_test")}();var MD5=function(e){function t(e,t){return e<<t|e>>>32-t}function n(e,t){var n,o,r,l,a;return r=2147483648&e,l=2147483648&t,n=1073741824&e,o=1073741824&t,a=(1073741823&e)+(1073741823&t),n&o?2147483648^a^r^l:n|o?1073741824&a?3221225472^a^r^l:1073741824^a^r^l:a^r^l}function o(e,t,n){return e&t|~e&n}function r(e,t,n){return e&n|t&~n}function l(e,t,n){return e^t^n}function a(e,t,n){return t^(e|~n)}function s(e,r,l,a,s,i,c){return e=n(e,n(n(o(r,l,a),s),c)),n(t(e,i),r)}function i(e,o,l,a,s,i,c){return e=n(e,n(n(r(o,l,a),s),c)),n(t(e,i),o)}function c(e,o,r,a,s,i,c){return e=n(e,n(n(l(o,r,a),s),c)),n(t(e,i),o)}function u(e,o,r,l,s,i,c){return e=n(e,n(n(a(o,r,l),s),c)),n(t(e,i),o)}function d(e){for(var t,n=e.length,o=n+8,r=(o-o%64)/64,l=16*(r+1),a=Array(l-1),s=0,i=0;i<n;)t=(i-i%4)/4,s=i%4*8,a[t]=a[t]|e.charCodeAt(i)<<s,i++;return t=(i-i%4)/4,s=i%4*8,a[t]=a[t]|128<<s,a[l-2]=n<<3,a[l-1]=n>>>29,a}function m(e){var t,n,o="",r="";for(n=0;n<=3;n++)t=e>>>8*n&255,r="0"+t.toString(16),o+=r.substr(r.length-2,2);return o}function g(e){e=e.replace(/\r\n/g,"\n");for(var t="",n=0;n<e.length;n++){var o=e.charCodeAt(n);o<128?t+=String.fromCharCode(o):o>127&&o<2048?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t}var p,v,y,f,h,E,C,L,N,I=Array(),k=7,_=12,w=17,b=22,B=5,J=9,T=14,S=20,M=4,x=11,H=16,D=23,U=6,j=10,z=15,R=21;for(e=g(e),I=d(e),E=1732584193,C=4023233417,L=2562383102,N=271733878,p=0;p<I.length;p+=16)v=E,y=C,f=L,h=N,E=s(E,C,L,N,I[p+0],k,3614090360),N=s(N,E,C,L,I[p+1],_,3905402710),L=s(L,N,E,C,I[p+2],w,606105819),C=s(C,L,N,E,I[p+3],b,3250441966),E=s(E,C,L,N,I[p+4],k,4118548399),N=s(N,E,C,L,I[p+5],_,1200080426),L=s(L,N,E,C,I[p+6],w,2821735955),C=s(C,L,N,E,I[p+7],b,4249261313),E=s(E,C,L,N,I[p+8],k,1770035416),N=s(N,E,C,L,I[p+9],_,2336552879),L=s(L,N,E,C,I[p+10],w,4294925233),C=s(C,L,N,E,I[p+11],b,2304563134),E=s(E,C,L,N,I[p+12],k,1804603682),N=s(N,E,C,L,I[p+13],_,4254626195),L=s(L,N,E,C,I[p+14],w,2792965006),C=s(C,L,N,E,I[p+15],b,1236535329),E=i(E,C,L,N,I[p+1],B,4129170786),N=i(N,E,C,L,I[p+6],J,3225465664),L=i(L,N,E,C,I[p+11],T,643717713),C=i(C,L,N,E,I[p+0],S,3921069994),E=i(E,C,L,N,I[p+5],B,3593408605),N=i(N,E,C,L,I[p+10],J,38016083),L=i(L,N,E,C,I[p+15],T,3634488961),C=i(C,L,N,E,I[p+4],S,3889429448),E=i(E,C,L,N,I[p+9],B,568446438),N=i(N,E,C,L,I[p+14],J,3275163606),L=i(L,N,E,C,I[p+3],T,4107603335),C=i(C,L,N,E,I[p+8],S,1163531501),E=i(E,C,L,N,I[p+13],B,2850285829),N=i(N,E,C,L,I[p+2],J,4243563512),L=i(L,N,E,C,I[p+7],T,1735328473),C=i(C,L,N,E,I[p+12],S,2368359562),E=c(E,C,L,N,I[p+5],M,4294588738),N=c(N,E,C,L,I[p+8],x,2272392833),L=c(L,N,E,C,I[p+11],H,1839030562),C=c(C,L,N,E,I[p+14],D,4259657740),E=c(E,C,L,N,I[p+1],M,2763975236),N=c(N,E,C,L,I[p+4],x,1272893353),L=c(L,N,E,C,I[p+7],H,4139469664),C=c(C,L,N,E,I[p+10],D,3200236656),E=c(E,C,L,N,I[p+13],M,681279174),N=c(N,E,C,L,I[p+0],x,3936430074),L=c(L,N,E,C,I[p+3],H,3572445317),C=c(C,L,N,E,I[p+6],D,76029189),E=c(E,C,L,N,I[p+9],M,3654602809),N=c(N,E,C,L,I[p+12],x,3873151461),L=c(L,N,E,C,I[p+15],H,530742520),C=c(C,L,N,E,I[p+2],D,3299628645),E=u(E,C,L,N,I[p+0],U,4096336452),N=u(N,E,C,L,I[p+7],j,1126891415),L=u(L,N,E,C,I[p+14],z,2878612391),C=u(C,L,N,E,I[p+5],R,4237533241),E=u(E,C,L,N,I[p+12],U,1700485571),N=u(N,E,C,L,I[p+3],j,2399980690),L=u(L,N,E,C,I[p+10],z,4293915773),C=u(C,L,N,E,I[p+1],R,2240044497),E=u(E,C,L,N,I[p+8],U,1873313359),N=u(N,E,C,L,I[p+15],j,4264355552),L=u(L,N,E,C,I[p+6],z,2734768916),C=u(C,L,N,E,I[p+13],R,1309151649),E=u(E,C,L,N,I[p+4],U,4149444226),N=u(N,E,C,L,I[p+11],j,3174756917),L=u(L,N,E,C,I[p+2],z,718787259),C=u(C,L,N,E,I[p+9],R,3951481745),E=n(E,v),C=n(C,y),L=n(L,f),N=n(N,h);var A=m(E)+m(C)+m(L)+m(N);return A.toLowerCase()};!function(){function e(e){return function(){clearInterval(a),s.push(l[e]);for(var t=0;t<s.length;t++)s[t].style.zIndex=t;o(),s=[];for(var t=e+1;t<l.length;t++)s.push(l[t]);for(var t=0;t<=e;t++)s.push(l[t]);console.log(s)}}function t(){var e=s.shift();s.push(e);for(var t=0;t<s.length;t++)s[t].style.zIndex=t}function n(){clearInterval(a),t(),o()}function o(){for(var e=0;e<s.length;e++)s[e].pg.className="";s[s.length-1].pg.className="select",s[s.length-1].style.opacity=0,s[s.length-1].style.filter="alpha(opacity=0)";var t=0;a=setInterval(function(){s[s.length-1].style.opacity=t,s[s.length-1].style.filter="alpha(opacity="+100*t+")",t+=.02,s[s.length-1].style.opacity>=1&&clearInterval(a)},25)}var r=document.getElementById("J_slide_images"),l=r.getElementsByTagName("li"),a=null,s=[],i=document.getElementById("J_slide_full_pg").getElementsByTagName("li");addEventListener(r.parentNode,"mouseenter",function(){clearInterval(u)}),addEventListener(r.parentNode,"mouseleave",function(){u=setInterval(n,2e3)});for(var c=0;c<l.length;c++)l[c].pg=i[c],s[c]=l[c];for(var c=0;c<s.length;c++)addEventListener(s[c].pg,"click",e(c));t();var u=null;u=setInterval(n,5e3)}(),function(){var e=document.getElementById("J_top-tips"),t=document.getElementById("J_tips-close");e.style.display="none";var n=getCookie();n.tipsHidden||(e.style.display="block",addEventListener(t,"click",function(){e.style.display="none",setCookie("tipsHidden",1)}))}();