import{r as g,e as K,j as h,m as W}from"./index-DjS6VI1M.js";function H(r,i,a,t){return new(a||(a=Promise))(function(e,c){function o(u){try{f(t.next(u))}catch(n){c(n)}}function l(u){try{f(t.throw(u))}catch(n){c(n)}}function f(u){var n;u.done?e(u.value):(n=u.value,n instanceof a?n:new a(function(d){d(n)})).then(o,l)}f((t=t.apply(r,[])).next())})}function S(r,i){var a,t,e,c,o={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return c={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function l(f){return function(u){return function(n){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,t&&(e=2&n[0]?t.return:n[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,n[1])).done)return e;switch(t=0,e&&(n=[2&n[0],e.value]),n[0]){case 0:case 1:e=n;break;case 4:return o.label++,{value:n[1],done:!1};case 5:o.label++,t=n[1],n=[0];continue;case 7:n=o.ops.pop(),o.trys.pop();continue;default:if(e=o.trys,!((e=e.length>0&&e[e.length-1])||n[0]!==6&&n[0]!==2)){o=0;continue}if(n[0]===3&&(!e||n[1]>e[0]&&n[1]<e[3])){o.label=n[1];break}if(n[0]===6&&o.label<e[1]){o.label=e[1],e=n;break}if(e&&o.label<e[2]){o.label=e[2],o.ops.push(n);break}e[2]&&o.ops.pop(),o.trys.pop();continue}n=i.call(r,o)}catch(d){n=[6,d],t=0}finally{a=e=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([f,u])}}}function V(r){var i=typeof Symbol=="function"&&Symbol.iterator,a=i&&r[i],t=0;if(a)return a.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&t>=r.length&&(r=void 0),{value:r&&r[t++],done:!r}}};throw new TypeError(i?"Object is not iterable.":"Symbol.iterator is not defined.")}function w(r,i){var a=typeof Symbol=="function"&&r[Symbol.iterator];if(!a)return r;var t,e,c=a.call(r),o=[];try{for(;(i===void 0||i-- >0)&&!(t=c.next()).done;)o.push(t.value)}catch(l){e={error:l}}finally{try{t&&!t.done&&(a=c.return)&&a.call(c)}finally{if(e)throw e.error}}return o}function j(r,i,a){if(arguments.length===2)for(var t,e=0,c=i.length;e<c;e++)!t&&e in i||(t||(t=Array.prototype.slice.call(i,0,e)),t[e]=i[e]);return r.concat(t||Array.prototype.slice.call(i))}function U(r,i,a,t,e){for(var c=[],o=5;o<arguments.length;o++)c[o-5]=arguments[o];return H(this,void 0,void 0,function(){var l,f,u,n,d,y;return S(this,function(p){switch(p.label){case 0:p.trys.push([0,12,13,14]),l=V(c),f=l.next(),p.label=1;case 1:if(f.done)return[3,11];switch(u=f.value,typeof u){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,Z(r,i,u,a,t,e)];case 3:return p.sent(),[3,10];case 4:return[4,X(u)];case 5:return p.sent(),[3,10];case 6:return[4,u.apply(void 0,j([r,i,a,t,e],w(c),!1))];case 7:return p.sent(),[3,10];case 8:return[4,u];case 9:p.sent(),p.label=10;case 10:return f=l.next(),[3,1];case 11:return[3,14];case 12:return n=p.sent(),d={error:n},[3,14];case 13:try{f&&!f.done&&(y=l.return)&&y.call(l)}finally{if(d)throw d.error}return[7];case 14:return[2]}})})}function Z(r,i,a,t,e,c){return H(this,void 0,void 0,function(){var o,l;return S(this,function(f){switch(f.label){case 0:return o=r.textContent||"",l=function(u,n){var d=w(n).slice(0);return j(j([],w(u),!1),[NaN],!1).findIndex(function(y,p){return d[p]!==y})}(o,a),[4,$(r,j(j([],w(te(o,i,l)),!1),w(ee(a,i,l)),!1),t,e,c)];case 1:return f.sent(),[2]}})})}function X(r){return H(this,void 0,void 0,function(){return S(this,function(i){switch(i.label){case 0:return[4,new Promise(function(a){return setTimeout(a,r)})];case 1:return i.sent(),[2]}})})}function $(r,i,a,t,e){return H(this,void 0,void 0,function(){var c,o,l,f,u,n,d,y,p,C,B,P,D;return S(this,function(N){switch(N.label){case 0:if(c=i,e){for(o=0,l=1;l<i.length;l++)if(f=w([i[l-1],i[l]],2),u=f[0],(n=f[1]).length>u.length||n===""){o=l;break}c=i.slice(o,i.length)}N.label=1;case 1:N.trys.push([1,6,7,8]),d=V(function(G){var T,k,E,I,M,O,R;return S(this,function(b){switch(b.label){case 0:T=function(_){return S(this,function(q){switch(q.label){case 0:return[4,{op:function(F){return requestAnimationFrame(function(){return F.textContent=_})},opCode:function(F){var L=F.textContent||"";return _===""||L.length>_.length?"DELETE":"WRITING"}}];case 1:return q.sent(),[2]}})},b.label=1;case 1:b.trys.push([1,6,7,8]),k=V(G),E=k.next(),b.label=2;case 2:return E.done?[3,5]:(I=E.value,[5,T(I)]);case 3:b.sent(),b.label=4;case 4:return E=k.next(),[3,2];case 5:return[3,8];case 6:return M=b.sent(),O={error:M},[3,8];case 7:try{E&&!E.done&&(R=k.return)&&R.call(k)}finally{if(O)throw O.error}return[7];case 8:return[2]}})}(c)),y=d.next(),N.label=2;case 2:return y.done?[3,5]:(p=y.value,C=p.opCode(r)==="WRITING"?a+a*(Math.random()-.5):t+t*(Math.random()-.5),p.op(r),[4,X(C)]);case 3:N.sent(),N.label=4;case 4:return y=d.next(),[3,2];case 5:return[3,8];case 6:return B=N.sent(),P={error:B},[3,8];case 7:try{y&&!y.done&&(D=d.return)&&D.call(d)}finally{if(P)throw P.error}return[7];case 8:return[2]}})})}function ee(r,i,a){var t,e;return a===void 0&&(a=0),S(this,function(c){switch(c.label){case 0:t=i(r),e=t.length,c.label=1;case 1:return a<e?[4,t.slice(0,++a).join("")]:[3,3];case 2:return c.sent(),[3,1];case 3:return[2]}})}function te(r,i,a){var t,e;return a===void 0&&(a=0),S(this,function(c){switch(c.label){case 0:t=i(r),e=t.length,c.label=1;case 1:return e>a?[4,t.slice(0,--e).join("")]:[3,3];case 2:return c.sent(),[3,1];case 3:return[2]}})}var re="index-module_type__E-SaG";(function(r,i){i===void 0&&(i={});var a=i.insertAt;if(typeof document<"u"){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",a==="top"&&t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e),e.styleSheet?e.styleSheet.cssText=r:e.appendChild(document.createTextNode(r))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var ne=g.memo(g.forwardRef(function(r,i){var a=r.sequence,t=r.repeat,e=r.className,c=r.speed,o=c===void 0?40:c,l=r.deletionSpeed,f=r.omitDeletionAnimation,u=f!==void 0&&f,n=r.preRenderFirstString,d=n!==void 0&&n,y=r.wrapper,p=y===void 0?"span":y,C=r.splitter,B=C===void 0?function(s){return j([],w(s),!1)}:C,P=r.cursor,D=P===void 0||P,N=r.style,G=function(s,m){var x={};for(var v in s)Object.prototype.hasOwnProperty.call(s,v)&&m.indexOf(v)<0&&(x[v]=s[v]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function"){var A=0;for(v=Object.getOwnPropertySymbols(s);A<v.length;A++)m.indexOf(v[A])<0&&Object.prototype.propertyIsEnumerable.call(s,v[A])&&(x[v[A]]=s[v[A]])}return x}(r,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),T=G["aria-label"],k=G["aria-hidden"],E=G.role;l||(l=o);var I=new Array(2).fill(40);[o,l].forEach(function(s,m){switch(typeof s){case"number":I[m]=Math.abs(s-100);break;case"object":var x=s.type,v=s.value;if(typeof v!="number")break;x==="keyStrokeDelayInMs"&&(I[m]=v)}});var M,O,R,b,_,q,F=I[0],L=I[1],Q=function(s,m){m===void 0&&(m=null);var x=g.useRef(m);return g.useEffect(function(){s&&(typeof s=="function"?s(x.current):s.current=x.current)},[s]),x}(i),z=re;M=e?"".concat(D?z+" ":"").concat(e):D?z:"",O=g.useRef(function(){var s,m=a;t===1/0?s=U:typeof t=="number"&&(m=Array(1+t).fill(a).flat());var x=s?j(j([],w(m),!1),[s],!1):j([],w(m),!1);return U.apply(void 0,j([Q.current,B,F,L,u],w(x),!1)),function(){Q.current}}),R=g.useRef(),b=g.useRef(!1),_=g.useRef(!1),q=w(g.useState(0),2)[1],b.current&&(_.current=!0),g.useEffect(function(){return b.current||(R.current=O.current(),b.current=!0),q(function(s){return s+1}),function(){_.current&&R.current&&R.current()}},[]);var Y=p,J=d?a.find(function(s){return typeof s=="string"})||"":null;return K.createElement(Y,{"aria-hidden":k,"aria-label":T,role:E,style:N,className:M,children:T?K.createElement("span",{"aria-hidden":"true",ref:Q,children:J}):J,ref:T?void 0:Q})}),function(r,i){return!0});const ie=()=>h.jsx("section",{className:"relative w-full h-screen mx-auto flex items-center backdrop-blur-0",id:"home",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-6 flex flex-col gap-8",children:[h.jsxs(W.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"flex flex-col gap-4",children:[h.jsxs("h1",{className:"text-4xl md:text-6xl font-bold text-white mb-4",children:["Hi, I'm"," ",h.jsx("span",{className:"text-accent",children:h.jsx(ne,{sequence:["Nikhil Telase",1e3,"a Developer",1e3,"an Innovator",1e3],wrapper:"span",speed:50,repeat:1/0})})]}),h.jsxs("p",{className:"text-xl md:text-2xl text-gray-400 mb-8",children:["Python & MERN Stack Developer, passionate about building innovative",h.jsx("br",{}),"solutions in AI, IoT, and Web Development."]})]}),h.jsxs(W.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},className:"flex gap-4",children:[h.jsx("a",{href:"#projects",className:"bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg transition-all bg-primary",children:"View Projects"}),h.jsx("a",{href:"/nikhil-resume2.pdf",download:!0,className:"border text-primary border-accent text-accent hover:bg-accent/10 px-6 py-3 rounded-lg transition-all",children:"Download Resume"})]}),h.jsx(W.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.8},className:"absolute bottom-10 left-1/2 -translate-x-1/2",children:h.jsxs("a",{href:"#about",className:"flex flex-col items-center text-white hover:text-accent transition-all",children:[h.jsx("span",{className:"text-sm mb-2",children:"Scroll Down"}),h.jsx(W.div,{animate:{y:[0,10,0]},transition:{duration:1.5,repeat:1/0},className:"w-6 h-10 border-2 border-primary rounded-full flex justify-center",children:h.jsx(W.div,{animate:{y:[0,15,0]},transition:{duration:1.5,repeat:1/0},className:"w-2 h-2 bg-primary rounded-full mt-2"})})]})})]})});export{ie as default};