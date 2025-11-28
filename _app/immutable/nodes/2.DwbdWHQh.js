import{f as us,a as Pi,c as Op}from"../chunks/B7XSrYOt.js";import{o as ro,a as Bp}from"../chunks/DDOg1K_u.js";import{D as Cf,h as li,E as Pf,o as It,R as kp,G as zp,H as Vp,I as Ch,J as vo,K as bo,e as sa,aa as Gp,ax as Hp,ah as Ph,c as Wp,b as vl,a as bl,s as Xp,aA as qp,a8 as Dh,av as Df,aG as Yp,aH as Lf,r as If,p as jp,aI as Nf,aJ as Kp,aK as yo,ar as Zp,aL as $p,aM as Jp,au as Qp,d as em,a1 as tm,aN as Uf,N as Ff,aO as nm,aP as im,W as sm,F as rm,aQ as am,a5 as om,L as lm,i as cm,aR as hm,aS as Of,aT as um,aU as dr,w as ao,u as Uc,A as hn,B as Jt,z as oo,ai as fm,y as yl,T as dm,U as ra,aB as Mo,C as pr,x as Lh}from"../chunks/dqKCEnLA.js";import{a as pm,s as Ml}from"../chunks/B0cRN1V1.js";import{p as Bf,b as Xs,i as mm}from"../chunks/C6cl0Sle.js";import{B as _m}from"../chunks/Bu9myOnM.js";import{b as xm}from"../chunks/n_sGk69h.js";import{i as gm}from"../chunks/YU10tIQa.js";function kf(r,e){return e}function vm(r,e,t){for(var n=[],i=e.length,s=0;s<i;s++)$p(e[s].e,n,!0);Jp(n,()=>{var a=n.length===0&&t!==null;if(a){var o=t,l=o.parentNode;Qp(l),l.append(o),r.items.clear(),Pn(r,e[0].prev,e[i-1].next)}for(var c=0;c<i;c++){var h=e[c];a||(r.items.delete(h.k),Pn(r,h.prev,h.next)),em(h.e,!a)}r.first===e[0]&&(r.first=e[0].prev)})}function zf(r,e,t,n,i,s=null){var a=r,o=new Map,l=null,c=(e&Uf)!==0,h=(e&Nf)!==0,u=(e&Lf)!==0;if(c){var f=r;a=li?vo(tm(f)):f.appendChild(bl())}li&&Pf();var d=null,x=kp(()=>{var b=t();return Yp(b)?b:b==null?[]:Df(b)}),_,p=!0;function m(){bm(v,_,a,e,n),d!==null&&(_.length===0?(d.fragment?(a.before(d.fragment),d.fragment=null):If(d.effect),y.first=d.effect):jp(d.effect,()=>{d=null}))}var y=Cf(()=>{_=It(x);var b=_.length;let E=!1;if(li){var M=zp(a)===Vp;M!==(b===0)&&(a=Ch(),vo(a),bo(!1),E=!0)}for(var w=new Set,C=Wp,g=null,T=Xp(),P=0;P<b;P+=1){li&&sa.nodeType===Gp&&sa.data===Hp&&(a=sa,E=!0,bo(!1));var N=_[P],I=n(N,P),B=p?null:o.get(I);B?(h&&Ph(B.v,N),u?Ph(B.i,P):B.i=P,T&&C.skipped_effects.delete(B.e)):(B=ym(p?a:null,g,N,I,P,i,e,t),p&&(B.o=!0,g===null?l=B:g.next=B,g=B),o.set(I,B)),w.add(I)}if(b===0&&s&&!d)if(p)d={fragment:null,effect:vl(()=>s(a))};else{var z=document.createDocumentFragment(),V=bl();z.append(V),d={fragment:z,effect:vl(()=>s(V))}}if(li&&b>0&&vo(Ch()),!p)if(T){for(const[q,G]of o)w.has(q)||C.skipped_effects.add(G.e);C.oncommit(m),C.ondiscard(()=>{})}else m();E&&bo(!0),It(x)}),v={effect:y,items:o,first:l};p=!1,li&&(a=sa)}function bm(r,e,t,n,i){var s=(n&nm)!==0,a=e.length,o=r.items,l=r.first,c,h=null,u,f=[],d=[],x,_,p,m;if(s)for(m=0;m<a;m+=1)x=e[m],_=i(x,m),p=o.get(_),p.o&&(p.a?.measure(),(u??=new Set).add(p));for(m=0;m<a;m+=1){if(x=e[m],_=i(x,m),p=o.get(_),r.first??=p,!p.o){p.o=!0;var y=h?h.next:l;Pn(r,h,p),Pn(r,p,y),So(p,y,t),h=p,f=[],d=[],l=h.next;continue}if((p.e.f&yo)!==0&&(If(p.e),s&&(p.a?.unfix(),(u??=new Set).delete(p))),p!==l){if(c!==void 0&&c.has(p)){if(f.length<d.length){var v=d[0],b;h=v.prev;var E=f[0],M=f[f.length-1];for(b=0;b<f.length;b+=1)So(f[b],v,t);for(b=0;b<d.length;b+=1)c.delete(d[b]);Pn(r,E.prev,M.next),Pn(r,h,E),Pn(r,M,v),l=v,h=M,m-=1,f=[],d=[]}else c.delete(p),So(p,l,t),Pn(r,p.prev,p.next),Pn(r,p,h===null?r.first:h.next),Pn(r,h,p),h=p;continue}for(f=[],d=[];l!==null&&l.k!==_;)(l.e.f&yo)===0&&(c??=new Set).add(l),d.push(l),l=l.next;if(l===null)continue;p=l}f.push(p),h=p,l=p.next}let w=o.size>a;if(l!==null||c!==void 0){for(var C=c===void 0?[]:Df(c);l!==null;)(l.e.f&yo)===0&&C.push(l),l=l.next;var g=C.length;if(w=o.size-g>a,g>0){var T=(n&Uf)!==0&&a===0?t:null;if(s){for(m=0;m<g;m+=1)C[m].a?.measure();for(m=0;m<g;m+=1)C[m].a?.fix()}vm(r,C,T)}}if(w)for(const P of o.values())P.o||(Pn(r,h,P),h=P);r.effect.last=h&&h.e,s&&Ff(()=>{if(u!==void 0)for(p of u)p.a?.apply()})}function ym(r,e,t,n,i,s,a,o){var l=(a&Nf)!==0,c=(a&Kp)===0,h=l?c?qp(t,!1,!1):Dh(t):t,u=(a&Lf)===0?i:Dh(i),f={i:u,v:h,k:n,a:null,e:null,o:!1,prev:e,next:null};try{if(r===null){var d=document.createDocumentFragment();d.append(r=bl())}return f.e=vl(()=>s(r,h,u,o)),e!==null&&(e.next=f),f}finally{}}function So(r,e,t){for(var n=r.next?r.next.e.nodes_start:t,i=e?e.e.nodes_start:t,s=r.e.nodes_start;s!==null&&s!==n;){var a=Zp(s);i.before(s),s=a}}function Pn(r,e,t){e===null?(r.first=t,r.effect.first=t&&t.e):(e.e.next&&(e.e.next.prev=null),e.next=t,e.e.next=t&&t.e),t!==null&&(t.e.prev&&(t.e.prev.next=null),t.prev=e,t.e.prev=e&&e.e)}function Mm(r,e,t){li&&Pf();var n=new _m(r),i=!im();Cf(()=>{var s=e();i&&s!==null&&typeof s=="object"&&(s={}),n.ensure(s,t)})}function Sm(r,e){return r==null?null:String(r)}function Tm(r,e,t,n){var i=r.__style;if(li||i!==e){var s=Sm(e);(!li||s!==r.getAttribute("style"))&&(s==null?r.removeAttribute("style"):r.style.cssText=s),r.__style=e}return n}const Em=()=>performance.now(),hi={tick:r=>requestAnimationFrame(r),now:()=>Em(),tasks:new Set};function Vf(){const r=hi.now();hi.tasks.forEach(e=>{e.c(r)||(hi.tasks.delete(e),e.f())}),hi.tasks.size!==0&&hi.tick(Vf)}function Am(r){let e;return hi.tasks.size===0&&hi.tick(Vf),{promise:new Promise(t=>{hi.tasks.add(e={c:r,f:t})}),abort(){hi.tasks.delete(e)}}}function aa(r,e){Of(()=>{r.dispatchEvent(new CustomEvent(e))})}function wm(r){if(r==="float")return"cssFloat";if(r==="offset")return"cssOffset";if(r.startsWith("--"))return r;const e=r.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function Ih(r){const e={},t=r.split(";");for(const n of t){const[i,s]=n.split(":");if(!i||s===void 0)break;const a=wm(i.trim());e[a]=s.trim()}return e}const Rm=r=>r;function To(r,e,t,n){var i=(r&hm)!==0,s="both",a,o=e.inert,l=e.style.overflow,c,h;function u(){return Of(()=>a??=t()(e,n?.()??{},{direction:s}))}var f={is_global:i,in(){e.inert=o,aa(e,"introstart"),c=Sl(e,u(),h,1,()=>{aa(e,"introend"),c?.abort(),c=a=void 0,e.style.overflow=l})},out(p){e.inert=!0,aa(e,"outrostart"),h=Sl(e,u(),c,0,()=>{aa(e,"outroend"),p?.()})},stop:()=>{c?.abort(),h?.abort()}},d=sm;if((d.transitions??=[]).push(f),pm){var x=i;if(!x){for(var _=d.parent;_&&(_.f&rm)!==0;)for(;(_=_.parent)&&(_.f&am)===0;);x=!_||(_.f&om)!==0}x&&lm(()=>{cm(()=>f.in())})}}function Sl(r,e,t,n,i){var s=n===1;if(um(e)){var a,o=!1;return Ff(()=>{if(!o){var p=e({direction:s?"in":"out"});a=Sl(r,p,t,n,i)}}),{abort:()=>{o=!0,a?.abort()},deactivate:()=>a.deactivate(),reset:()=>a.reset(),t:()=>a.t()}}if(t?.deactivate(),!e?.duration)return i(),{abort:dr,deactivate:dr,reset:dr,t:()=>n};const{delay:l=0,css:c,tick:h,easing:u=Rm}=e;var f=[];if(s&&t===void 0&&(h&&h(0,1),c)){var d=Ih(c(0,1));f.push(d,d)}var x=()=>1-n,_=r.animate(f,{duration:l,fill:"forwards"});return _.onfinish=()=>{_.cancel();var p=t?.t()??1-n;t?.abort();var m=n-p,y=e.duration*Math.abs(m),v=[];if(y>0){var b=!1;if(c)for(var E=Math.ceil(y/16.666666666666668),M=0;M<=E;M+=1){var w=p+m*u(M/E),C=Ih(c(w,1-w));v.push(C),b||=C.overflow==="hidden"}b&&(r.style.overflow="hidden"),x=()=>{var g=_.currentTime;return p+m*u(g/y)},h&&Am(()=>{if(_.playState!=="running")return!1;var g=x();return h(g,1-g),!0})}_=r.animate(v,{duration:y,fill:"forwards"}),_.onfinish=()=>{x=()=>n,h?.(n,1-n),i()}},{abort:()=>{_&&(_.cancel(),_.effect=null,_.onfinish=dr)},deactivate:()=>{i=dr},reset:()=>{n===0&&h?.(1,0)},t:()=>x()}}function Cm(r){const e=r-1;return e*e*e+1}function Nh(r){const e=typeof r=="string"&&r.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[r,"px"]}function Eo(r,{delay:e=0,duration:t=400,easing:n=Cm,x:i=0,y:s=0,opacity:a=0}={}){const o=getComputedStyle(r),l=+o.opacity,c=o.transform==="none"?"":o.transform,h=l*(1-a),[u,f]=Nh(i),[d,x]=Nh(s);return{delay:e,duration:t,easing:n,css:(_,p)=>`
			transform: ${c} translate(${(1-_)*u}${f}, ${(1-_)*d}${x});
			opacity: ${l-h*p}`}}function oi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Gf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},qs={duration:.5,overwrite:!1,delay:0},Fc,Ut,ft,yn=1e8,lt=1/yn,Tl=Math.PI*2,Pm=Tl/4,Dm=0,Hf=Math.sqrt,Lm=Math.cos,Im=Math.sin,Dt=function(e){return typeof e=="string"},yt=function(e){return typeof e=="function"},_i=function(e){return typeof e=="number"},Oc=function(e){return typeof e>"u"},Yn=function(e){return typeof e=="object"},Qt=function(e){return e!==!1},Bc=function(){return typeof window<"u"},oa=function(e){return yt(e)||Dt(e)},Wf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kt=Array.isArray,El=/(?:-?\.?\d|\.)+/gi,Xf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Us=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ao=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,qf=/[+-]=-?[.\d]+/,Yf=/[^,'"\[\]\s]+/gi,Nm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,_t,kn,Al,kc,mn={},Wa={},jf,Kf=function(e){return(Wa=Ys(e,mn))&&rn},zc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Or=function(e,t){return!t&&console.warn(e)},Zf=function(e,t){return e&&(mn[e]=t)&&Wa&&(Wa[e]=t)||mn},Br=function(){return 0},Um={suppressEvents:!0,isStart:!0,kill:!1},Ua={suppressEvents:!0,kill:!1},Fm={suppressEvents:!0},Vc={},Ui=[],wl={},$f,un={},wo={},Uh=30,Fa=[],Gc="",Hc=function(e){var t=e[0],n,i;if(Yn(t)||yt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Fa.length;i--&&!Fa[i].targetTest(t););n=Fa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new yd(e[i],n)))||e.splice(i,1);return e},ss=function(e){return e._gsap||Hc(Mn(e))[0]._gsap},Jf=function(e,t,n){return(n=e[t])&&yt(n)?e[t]():Oc(n)&&e.getAttribute&&e.getAttribute(t)||n},en=function(e,t){return(e=e.split(",")).forEach(t)||e},Mt=function(e){return Math.round(e*1e5)/1e5||0},Et=function(e){return Math.round(e*1e7)/1e7||0},Bs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Om=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Xa=function(){var e=Ui.length,t=Ui.slice(0),n,i;for(wl={},Ui.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Wc=function(e){return!!(e._initted||e._startAt||e.add)},Qf=function(e,t,n,i){Ui.length&&!Ut&&Xa(),e.render(t,n,!!(Ut&&t<0&&Wc(e))),Ui.length&&!Ut&&Xa()},ed=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Yf).length<2?t:Dt(e)?e.trim():e},td=function(e){return e},_n=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Bm=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ys=function(e,t){for(var n in t)e[n]=t[n];return e},Fh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Yn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},qa=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Dr=function(e){var t=e.parent||_t,n=e.keyframes?Bm(kt(e.keyframes)):_n;if(Qt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},km=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},nd=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},lo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Bi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},rs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},zm=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Rl=function(e,t,n,i){return e._startAt&&(Ut?e._startAt.revert(Ua):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Vm=function r(e){return!e||e._ts&&r(e.parent)},Oh=function(e){return e._repeat?js(e._tTime,e=e.duration()+e._rDelay)*e:0},js=function(e,t){var n=Math.floor(e=Et(e/t));return e&&n===e?n-1:n},Ya=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},co=function(e){return e._end=Et(e._start+(e._tDur/Math.abs(e._ts||e._rts||lt)||0))},ho=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Et(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),co(e),n._dirty||rs(n,e)),e},id=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ya(e.rawTime(),t),(!t._dur||Jr(0,t.totalDuration(),n)-t._tTime>lt)&&t.render(n,!0)),rs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-lt}},Vn=function(e,t,n,i){return t.parent&&Bi(t),t._start=Et((_i(n)?n:n||e!==_t?vn(e,n,t):e._time)+t._delay),t._end=Et(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),nd(e,t,"_first","_last",e._sort?"_start":0),Cl(t)||(e._recent=t),i||id(e,t),e._ts<0&&ho(e,e._tTime),e},sd=function(e,t){return(mn.ScrollTrigger||zc("scrollTrigger",t))&&mn.ScrollTrigger.create(t,e)},rd=function(e,t,n,i,s){if(qc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Ut&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&$f!==fn.frame)return Ui.push(e),e._lazy=[s,i],1},Gm=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Cl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Hm=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Gm(e)&&!(!e._initted&&Cl(e))||(e._ts<0||e._dp._ts<0)&&!Cl(e))?0:1,o=e._rDelay,l=0,c,h,u;if(o&&e._repeat&&(l=Jr(0,e._tDur,t),h=js(l,o),e._yoyo&&h&1&&(a=1-a),h!==js(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Ut||i||e._zTime===lt||!t&&e._zTime){if(!e._initted&&rd(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?lt:0),n||(n=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Rl(e,t,n,!0),e._onUpdate&&!n&&dn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&dn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Bi(e,1),!n&&!Ut&&(dn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Wm=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ks=function(e,t,n,i){var s=e._repeat,a=Et(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Et(a*(s+1)+e._rDelay*s):a,o>0&&!i&&ho(e,e._tTime=e._tDur*o),e.parent&&co(e),n||rs(e.parent,e),e},Bh=function(e){return e instanceof Wt?rs(e):Ks(e,e._dur)},Xm={_start:0,endTime:Br,totalDuration:Br},vn=function r(e,t,n){var i=e.labels,s=e._recent||Xm,a=e.duration()>=yn?s.endTime(!1):e._dur,o,l,c;return Dt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(kt(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Lr=function(e,t,n){var i=_i(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Qt(l.vars.inherit)&&l.parent;a.immediateRender=Qt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Tt(t[0],a,t[s+1])},zi=function(e,t){return e||e===0?t(e):t},Jr=function(e,t,n){return n<e?e:n>t?t:n},Bt=function(e,t){return!Dt(e)||!(t=Nm.exec(e))?"":t[1]},qm=function(e,t,n){return zi(n,function(i){return Jr(e,t,i)})},Pl=[].slice,ad=function(e,t){return e&&Yn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Yn(e[0]))&&!e.nodeType&&e!==kn},Ym=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Dt(i)&&!t||ad(i,1)?(s=n).push.apply(s,Mn(i)):n.push(i)})||n},Mn=function(e,t,n){return ft&&!t&&ft.selector?ft.selector(e):Dt(e)&&!n&&(Al||!Zs())?Pl.call((t||kc).querySelectorAll(e),0):kt(e)?Ym(e,n):ad(e)?Pl.call(e,0):e?[e]:[]},Dl=function(e){return e=Mn(e)[0]||Or("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Mn(t,n.querySelectorAll?n:n===e?Or("Invalid scope")||kc.createElement("div"):e)}},od=function(e){return e.sort(function(){return .5-Math.random()})},ld=function(e){if(yt(e))return e;var t=Yn(e)?e:{each:e},n=as(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,u=i;return Dt(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(f,d,x){var _=(x||t).length,p=a[_],m,y,v,b,E,M,w,C,g;if(!p){if(g=t.grid==="auto"?0:(t.grid||[1,yn])[1],!g){for(w=-yn;w<(w=x[g++].getBoundingClientRect().left)&&g<_;);g<_&&g--}for(p=a[_]=[],m=l?Math.min(g,_)*h-.5:i%g,y=g===yn?0:l?_*u/g-.5:i/g|0,w=0,C=yn,M=0;M<_;M++)v=M%g-m,b=y-(M/g|0),p[M]=E=c?Math.abs(c==="y"?b:v):Hf(v*v+b*b),E>w&&(w=E),E<C&&(C=E);i==="random"&&od(p),p.max=w-C,p.min=C,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(g>_?_-1:c?c==="y"?_/g:g:Math.max(g,_/g))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Bt(t.amount||t.each)||0,n=n&&_<0?gd(n):n}return _=(p[f]-p.min)/p.max||0,Et(p.b+(n?n(_):_)*p.v)+p.u}},Ll=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Et(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(_i(n)?0:Bt(n))}},cd=function(e,t){var n=kt(e),i,s;return!n&&Yn(e)&&(i=n=e.radius||yn,e.values?(e=Mn(e.values),(s=!_i(e[0]))&&(i*=i)):e=Ll(e.increment)),zi(t,n?yt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=yn,h=0,u=e.length,f,d;u--;)s?(f=e[u].x-o,d=e[u].y-l,f=f*f+d*d):f=Math.abs(e[u]-o),f<c&&(c=f,h=u);return h=!i||c<=i?e[h]:a,s||h===a||_i(a)?h:h+Bt(a)}:Ll(e))},hd=function(e,t,n,i){return zi(kt(e)?!t:n===!0?!!(n=0):!i,function(){return kt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},jm=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Km=function(e,t){return function(n){return e(parseFloat(n))+(t||Bt(n))}},Zm=function(e,t,n){return fd(e,t,0,1,n)},ud=function(e,t,n){return zi(n,function(i){return e[~~t(i)]})},$m=function r(e,t,n){var i=t-e;return kt(e)?ud(e,r(0,e.length),t):zi(n,function(s){return(i+(s-e)%i)%i+e})},Jm=function r(e,t,n){var i=t-e,s=i*2;return kt(e)?ud(e,r(0,e.length-1),t):zi(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},kr=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?Yf:El),n+=e.substr(t,i-t)+hd(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},fd=function(e,t,n,i,s){var a=t-e,o=i-n;return zi(s,function(l){return n+((l-e)/a*o||0)})},Qm=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=Dt(e),o={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(kt(e)&&!kt(t)){for(h=[],u=e.length,f=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,s=function(x){x*=u;var _=Math.min(f,~~x);return h[_](x-_)},n=t}else i||(e=Ys(kt(e)?[]:{},e));if(!h){for(l in t)Xc.call(o,e,l,"get",t[l]);s=function(x){return Kc(x,o)||(a?e.p:e)}}}return zi(n,s)},kh=function(e,t,n){var i=e.labels,s=yn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},dn=function(e,t,n){var i=e.vars,s=i[t],a=ft,o=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ui.length&&Xa(),o&&(ft=o),h=l?s.apply(c,l):s.call(c),ft=a,h},wr=function(e){return Bi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ut),e.progress()<1&&dn(e,"onInterrupt"),e},Fs,dd=[],pd=function(e){if(e)if(e=!e.name&&e.default||e,Bc()||e.headless){var t=e.name,n=yt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Br,render:Kc,add:Xc,kill:m0,modifier:p0,rawVars:0},a={targetTest:0,get:0,getSetter:jc,aliases:{},register:0};if(Zs(),e!==i){if(un[t])return;_n(i,_n(qa(e,s),a)),Ys(i.prototype,Ys(s,qa(e,a))),un[i.prop=t]=i,e.targetTest&&(Fa.push(i),Vc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Zf(t,i),e.register&&e.register(rn,i,tn)}else dd.push(e)},ot=255,Rr={aqua:[0,ot,ot],lime:[0,ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ot],navy:[0,0,128],white:[ot,ot,ot],olive:[128,128,0],yellow:[ot,ot,0],orange:[ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ot,0,0],pink:[ot,192,203],cyan:[0,ot,ot],transparent:[ot,ot,ot,0]},Ro=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ot+.5|0},md=function(e,t,n){var i=e?_i(e)?[e>>16,e>>8&ot,e&ot]:0:Rr.black,s,a,o,l,c,h,u,f,d,x;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Rr[e])i=Rr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ot,i&ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ot,e&ot]}else if(e.substr(0,3)==="hsl"){if(i=x=e.match(El),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=Ro(l+1/3,s,a),i[1]=Ro(l,s,a),i[2]=Ro(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Xf),n&&i.length<4&&(i[3]=1),i}else i=e.match(El)||Rr.transparent;i=i.map(Number)}return t&&!x&&(s=i[0]/ot,a=i[1]/ot,o=i[2]/ot,u=Math.max(s,a,o),f=Math.min(s,a,o),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===s?(a-o)/d+(a<o?6:0):u===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},_d=function(e){var t=[],n=[],i=-1;return e.split(Fi).forEach(function(s){var a=s.match(Us)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},zh=function(e,t,n){var i="",s=(e+i).match(Fi),a=t?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return e;if(s=s.map(function(f){return(f=md(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=_d(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Fi,"1").split(Us),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(Fi),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},Fi=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Rr)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),e0=/hsl[a]?\(/,xd=function(e){var t=e.join(" "),n;if(Fi.lastIndex=0,Fi.test(t))return n=e0.test(t),e[1]=zh(e[1],n),e[0]=zh(e[0],n,_d(e[1])),!0},zr,fn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,u,f,d,x=function _(p){var m=r()-i,y=p===!0,v,b,E,M;if((m>e||m<0)&&(n+=m-t),i+=m,E=i-n,v=E-a,(v>0||y)&&(M=++u.frame,f=E-u.time*1e3,u.time=E=E/1e3,a+=v+(v>=s?4:s-v),b=1),y||(l=c(_)),b)for(d=0;d<o.length;d++)o[d](E,f,M,p)};return u={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){jf&&(!Al&&Bc()&&(kn=Al=window,kc=kn.document||{},mn.gsap=rn,(kn.gsapVersions||(kn.gsapVersions=[])).push(rn.version),Kf(Wa||kn.GreenSockGlobals||!kn.gsap&&kn||{}),dd.forEach(pd)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(p){return setTimeout(p,a-u.time*1e3+1|0)},zr=1,x(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),zr=0,c=Br},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=u.time*1e3+s},add:function(p,m,y){var v=m?function(b,E,M,w){p(b,E,M,w),u.remove(v)}:p;return u.remove(p),o[y?"unshift":"push"](v),Zs(),v},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},u})(),Zs=function(){return!zr&&fn.wake()},Ke={},t0=/^[\d.\-M][\d.\-,\s]/,n0=/["']/g,i0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(n0,"").trim():+c,i=l.substr(o+1).trim();return t},s0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},r0=function(e){var t=(e+"").split("("),n=Ke[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[i0(t[1])]:s0(e).split(",").map(ed)):Ke._CE&&t0.test(e)?Ke._CE("",e):n},gd=function(e){return function(t){return 1-e(1-t)}},vd=function r(e,t){for(var n=e._first,i;n;)n instanceof Wt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},as=function(e,t){return e&&(yt(e)?e:Ke[e]||r0(e))||t},fs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return en(e,function(o){Ke[o]=mn[o]=s,Ke[a=o.toLowerCase()]=n;for(var l in s)Ke[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ke[o+"."+l]=s[l]}),s},bd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Co=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Tl*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Im((h-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:bd(o);return s=Tl/s,l.config=function(c,h){return r(e,c,h)},l},Po=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:bd(n);return i.config=function(s){return r(e,s)},i};en("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;fs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ke.Linear.easeNone=Ke.none=Ke.Linear.easeIn;fs("Elastic",Co("in"),Co("out"),Co());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};fs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);fs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});fs("Circ",function(r){return-(Hf(1-r*r)-1)});fs("Sine",function(r){return r===1?1:-Lm(r*Pm)+1});fs("Back",Po("in"),Po("out"),Po());Ke.SteppedEase=Ke.steps=mn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-lt;return function(o){return((i*Jr(0,a,o)|0)+s)*n}}};qs.ease=Ke["quad.out"];en("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Gc+=r+","+r+"Params,"});var yd=function(e,t){this.id=Dm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Jf,this.set=t?t.getSetter:jc},Vr=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ks(this,+t.duration,1,1),this.data=t.data,ft&&(this._ctx=ft,ft.data.push(this)),zr||fn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ks(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Zs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ho(this,n),!s._dp||s.parent||id(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Vn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===lt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Qf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Oh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Oh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?js(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-lt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ya(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-lt?0:this._rts,this.totalTime(Jr(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),co(this),zm(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Zs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==lt&&(this._tTime-=lt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Vn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Qt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ya(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Fm);var i=Ut;return Ut=n,Wc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ut=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Bh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Bh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(vn(this,n),Qt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Qt(i)),this._dur||(this._zTime=-lt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-lt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-lt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-lt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=yt(n)?n:td,o=function(){var c=i.then;i.then=null,yt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){wr(this)},r})();_n(Vr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-lt,_prom:0,_ps:!1,_rts:1});var Wt=(function(r){Gf(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Qt(n.sortChildren),_t&&Vn(n.parent||_t,oi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&sd(oi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Lr(0,arguments,this),this},t.from=function(i,s,a){return Lr(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Lr(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Dr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Tt(i,s,vn(this,a),1),this},t.call=function(i,s,a){return Vn(this,Tt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Tt(i,a,vn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,Dr(a).immediateRender=Qt(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},t.staggerFromTo=function(i,s,a,o,l,c,h,u){return o.startAt=a,Dr(o).immediateRender=Qt(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Et(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,x,_,p,m,y,v,b,E,M,w;if(this!==_t&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,b=this._start,v=this._ts,m=!v,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(M=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=Et(h%p),h===l?(_=this._repeat,f=c):(E=Et(h/p),_=~~E,_&&_===E&&(f=c,_--),f>c&&(f=c)),E=js(this._tTime,p),!o&&this._tTime&&E!==_&&this._tTime-E*p-this._dur<=0&&(E=_),M&&_&1&&(f=c-f,w=1),_!==E&&!this._lock){var C=M&&E&1,g=C===(M&&_&1);if(_<E&&(C=!C),o=C?0:h%c?c:h,this._lock=1,this.render(o||(w?0:Et(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&dn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,g&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;vd(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Wm(this,Et(o),Et(f)),y&&(h-=f-(f=y._start))),this._tTime=h,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&!s&&!E&&(dn(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(x=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!m){y=0,x&&(h+=this._zTime=-lt);break}}d=x}else{d=this._last;for(var T=i<0?i:f;d;){if(x=d._prev,(d._act||T<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(T-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(T-d._start)*d._ts,s,a||Ut&&Wc(d)),f!==this._time||!this._ts&&!m){y=0,x&&(h+=this._zTime=T?-lt:lt);break}}d=x}}if(y&&!s&&(this.pause(),y.render(f>=o?0:-lt)._zTime=f>=o?1:-1,this._ts))return this._start=b,co(this),this.render(i,s,a);this._onUpdate&&!s&&dn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(b===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Bi(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(dn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(_i(s)||(s=vn(this,s,i)),!(i instanceof Vr)){if(kt(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Dt(i))return this.addLabel(i,s);if(yt(i))i=Tt.delayedCall(0,i);else return this}return this!==i?Vn(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-yn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Tt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Dt(i)?this.removeLabel(i):yt(i)?this.killTweensOf(i):(i.parent===this&&lo(this,i),i===this._recent&&(this._recent=this._last),rs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Et(fn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=vn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Tt.delayedCall(0,s||Br,a);return o.data="isPause",this._hasPause=1,Vn(this,o,vn(this,i))},t.removePause=function(i){var s=this._first;for(i=vn(this,i);s;)s._start===i&&s.data==="isPause"&&Bi(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Di!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Mn(i),l=this._first,c=_i(s),h;l;)l instanceof Tt?Om(l._targets,o)&&(c?(!Di||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=vn(a,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,x=Tt.to(a,_n({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||lt,onStart:function(){if(a.pause(),!d){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());x._dur!==p&&Ks(x,p,0,1).render(x._time,!0,!0),d=1}h&&h.apply(x,u||[])}},s));return f?x.render(0):x},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,_n({startAt:{time:vn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),kh(this,vn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),kh(this,vn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+lt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return rs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),rs(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=yn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Vn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ks(a,a===_t&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(_t._ts&&(Qf(_t,Ya(i,_t)),$f=fn.frame),fn.frame>=Uh){Uh+=pn.autoSleep||120;var s=_t._first;if((!s||!s._ts)&&pn.autoSleep&&fn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||fn.sleep()}}},e})(Vr);_n(Wt.prototype,{_lock:0,_hasPause:0,_forcing:0});var a0=function(e,t,n,i,s,a,o){var l=new tn(this._pt,e,t,0,1,wd,null,s),c=0,h=0,u,f,d,x,_,p,m,y;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=kr(i)),a&&(y=[n,i],a(y,e,t),n=y[0],i=y[1]),f=n.match(Ao)||[];u=Ao.exec(i);)x=u[0],_=i.substring(c,u.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),x!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:x.charAt(1)==="="?Bs(p,x)-p:parseFloat(x)-p,m:d&&d<4?Math.round:0},c=Ao.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(qf.test(i)||m)&&(l.e=0),this._pt=l,l},Xc=function(e,t,n,i,s,a,o,l,c,h){yt(i)&&(i=i(s||0,e,a));var u=e[t],f=n!=="get"?n:yt(u)?c?e[t.indexOf("set")||!yt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=yt(u)?c?u0:Ed:Yc,x;if(Dt(i)&&(~i.indexOf("random(")&&(i=kr(i)),i.charAt(1)==="="&&(x=Bs(f,i)+(Bt(f)||0),(x||x===0)&&(i=x))),!h||f!==i||Il)return!isNaN(f*i)&&i!==""?(x=new tn(this._pt,e,t,+f||0,i-(f||0),typeof u=="boolean"?d0:Ad,0,d),c&&(x.fp=c),o&&x.modifier(o,this,e),this._pt=x):(!u&&!(t in e)&&zc(t,i),a0.call(this,e,t,f,i,d,l||pn.stringFilter,c))},o0=function(e,t,n,i,s){if(yt(e)&&(e=Ir(e,s,t,n,i)),!Yn(e)||e.style&&e.nodeType||kt(e)||Wf(e))return Dt(e)?Ir(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Ir(e[o],s,t,n,i);return a},Md=function(e,t,n,i,s,a){var o,l,c,h;if(un[e]&&(o=new un[e]).init(s,o.rawVars?t[e]:o0(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new tn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Fs))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Di,Il,qc=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,x=e._dur,_=e._startAt,p=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:p,v=e._overwrite==="auto"&&!Fc,b=e.timeline,E,M,w,C,g,T,P,N,I,B,z,V,q;if(b&&(!f||!s)&&(s="none"),e._ease=as(s,qs.ease),e._yEase=u?gd(as(u===!0?s:u,qs.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!b&&!!i.runBackwards,!b||f&&!i.stagger){if(N=p[0]?ss(p[0]).harness:0,V=N&&i[N.prop],E=qa(i,Vc),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!d?_.render(-1,!0):_.revert(h&&x?Ua:Um),_._lazy=0),a){if(Bi(e._startAt=Tt.set(p,_n({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Qt(l),startAt:null,delay:0,onUpdate:c&&function(){return dn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut||!o&&!d)&&e._startAt.revert(Ua),o&&x&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&x&&!_){if(t&&(o=!1),w=_n({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Qt(l),immediateRender:o,stagger:0,parent:m},E),V&&(w[N.prop]=V),Bi(e._startAt=Tt.set(p,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut?e._startAt.revert(Ua):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,lt,lt);else if(!t)return}for(e._pt=e._ptCache=0,l=x&&Qt(l)||l&&!x,M=0;M<p.length;M++){if(g=p[M],P=g._gsap||Hc(p)[M]._gsap,e._ptLookup[M]=B={},wl[P.id]&&Ui.length&&Xa(),z=y===p?M:y.indexOf(g),N&&(I=new N).init(g,V||E,e,z,y)!==!1&&(e._pt=C=new tn(e._pt,g,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(G){B[G]=C}),I.priority&&(T=1)),!N||V)for(w in E)un[w]&&(I=Md(w,E,e,z,g,y))?I.priority&&(T=1):B[w]=C=Xc.call(e,g,w,"get",E[w],z,y,0,i.stringFilter);e._op&&e._op[M]&&e.kill(g,e._op[M]),v&&e._pt&&(Di=e,_t.killTweensOf(g,B,e.globalTime(t)),q=!e.parent,Di=0),e._pt&&l&&(wl[P.id]=1)}T&&Rd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!q,f&&t<=0&&b.render(yn,!0,!0)},l0=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(h=f[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Il=1,e.vars[t]="+=0",qc(e,o),Il=0,l?Or(t+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=Mt(n)+Bt(u.e)),u.b&&(u.b=h.s+Bt(u.b))},c0=function(e,t){var n=e[0]?ss(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Ys({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},h0=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(kt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ir=function(e,t,n,i,s){return yt(e)?e.call(t,n,i,s):Dt(e)&&~e.indexOf("random(")?kr(e):e},Sd=Gc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Td={};en(Sd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Td[r]=1});var Tt=(function(r){Gf(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Dr(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,x=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,y=i.parent||_t,v=(kt(n)||Wf(n)?_i(n[0]):"length"in i)?[n]:Mn(n),b,E,M,w,C,g,T,P;if(o._targets=v.length?Hc(v):Or("GSAP target "+n+" not found. https://gsap.com",!pn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,x||f||oa(c)||oa(h)){if(i=o.vars,b=o.timeline=new Wt({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:v}),b.kill(),b.parent=b._dp=oi(o),b._start=0,f||oa(c)||oa(h)){if(w=v.length,T=f&&ld(f),Yn(f))for(C in f)~Sd.indexOf(C)&&(P||(P={}),P[C]=f[C]);for(E=0;E<w;E++)M=qa(i,Td),M.stagger=0,m&&(M.yoyoEase=m),P&&Ys(M,P),g=v[E],M.duration=+Ir(c,oi(o),E,g,v),M.delay=(+Ir(h,oi(o),E,g,v)||0)-o._delay,!f&&w===1&&M.delay&&(o._delay=h=M.delay,o._start+=h,M.delay=0),b.to(g,M,T?T(E,g,v):0),b._ease=Ke.none;b.duration()?c=h=0:o.timeline=0}else if(x){Dr(_n(b.vars.defaults,{ease:"none"})),b._ease=as(x.ease||i.ease||"none");var N=0,I,B,z;if(kt(x))x.forEach(function(V){return b.to(v,V,">")}),b.duration();else{M={};for(C in x)C==="ease"||C==="easeEach"||h0(C,x[C],M,x.easeEach);for(C in M)for(I=M[C].sort(function(V,q){return V.t-q.t}),N=0,E=0;E<I.length;E++)B=I[E],z={ease:B.e,duration:(B.t-(E?I[E-1].t:0))/100*c},z[C]=B.v,b.to(v,z,N),N+=z.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return d===!0&&!Fc&&(Di=oi(o),_t.killTweensOf(v),Di=0),Vn(y,oi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!x&&o._start===Et(y._time)&&Qt(u)&&Vm(oi(o))&&y.data!=="nested")&&(o._tTime=-lt,o.render(Math.max(0,-h)||0)),p&&sd(oi(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-lt&&!h?l:i<lt?0:i,f,d,x,_,p,m,y,v,b;if(!c)Hm(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(f=Et(u%_),u===l?(x=this._repeat,f=c):(p=Et(u/_),x=~~p,x&&x===p?(f=c,x--):f>c&&(f=c)),m=this._yoyo&&x&1,m&&(b=this._yEase,f=c-f),p=js(this._tTime,_),f===o&&!a&&this._initted&&x===p)return this._tTime=u,this;x!==p&&(v&&this._yEase&&vd(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(Et(_*x),!0).invalidate()._lock=0))}if(!this._initted){if(rd(this,h?i:f,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&x!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(b||this._ease)(f/c),this._from&&(this.ratio=y=1-y),!o&&u&&!s&&!p&&(dn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Rl(this,i,s,a),dn(this,"onUpdate")),this._repeat&&x!==p&&this.vars.onRepeat&&!s&&this.parent&&dn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Rl(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Bi(this,1),!s&&!(h&&!o)&&(u||o||m)&&(dn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){zr||fn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||qc(this,c),h=this._ease(c/this._dur),l0(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(ho(this,0),this.parent||nd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?wr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ut),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Di&&Di.vars.overwrite!==!0)._first||wr(this),this.parent&&a!==this.timeline.totalDuration()&&Ks(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Mn(i):o,c=this._ptLookup,h=this._pt,u,f,d,x,_,p,m;if((!s||s==="all")&&km(o,l))return s==="all"&&(this._pt=0),wr(this);for(u=this._op=this._op||[],s!=="all"&&(Dt(s)&&(_={},en(s,function(y){return _[y]=1}),s=_),s=c0(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],s==="all"?(u[m]=s,x=f,d={}):(d=u[m]=u[m]||{},x=s);for(_ in x)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&lo(this,p,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&wr(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Lr(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Lr(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return _t.killTweensOf(i,s,a)},e})(Vr);_n(Tt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});en("staggerTo,staggerFrom,staggerFromTo",function(r){Tt[r]=function(){var e=new Wt,t=Pl.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Yc=function(e,t,n){return e[t]=n},Ed=function(e,t,n){return e[t](n)},u0=function(e,t,n,i){return e[t](i.fp,n)},f0=function(e,t,n){return e.setAttribute(t,n)},jc=function(e,t){return yt(e[t])?Ed:Oc(e[t])&&e.setAttribute?f0:Yc},Ad=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},d0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},wd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Kc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},p0=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},m0=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?lo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},_0=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Rd=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},tn=(function(){function r(t,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Ad,this.d=l||this,this.set=c||Yc,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=_0,this.m=n,this.mt=s,this.tween=i},r})();en(Gc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Vc[r]=1});mn.TweenMax=mn.TweenLite=Tt;mn.TimelineLite=mn.TimelineMax=Wt;_t=new Wt({sortChildren:!1,defaults:qs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pn.stringFilter=xd;var os=[],Oa={},x0=[],Vh=0,g0=0,Do=function(e){return(Oa[e]||x0).map(function(t){return t()})},Nl=function(){var e=Date.now(),t=[];e-Vh>2&&(Do("matchMediaInit"),os.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=kn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Do("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Vh=e,Do("matchMedia"))},Cd=(function(){function r(t,n){this.selector=n&&Dl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=g0++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){yt(n)&&(s=i,i=n,n=yt);var a=this,o=function(){var c=ft,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=Dl(s)),ft=a,u=i.apply(a,arguments),yt(u)&&a._r.push(u),ft=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===yt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=ft;ft=null,n(this),ft=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Tt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Wt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Tt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=os.length;a--;)os[a].id===this.id&&os.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),v0=(function(){function r(t){this.contexts=[],this.scope=t,ft&&ft.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Yn(n)||(n={matches:n});var a=new Cd(0,s||this.scope),o=a.conditions={},l,c,h;ft&&!a.selector&&(a.selector=ft.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=kn.matchMedia(n[c]),l&&(os.indexOf(a)<0&&os.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Nl):l.addEventListener("change",Nl)));return h&&i(a,function(u){return a.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),ja={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return pd(i)})},timeline:function(e){return new Wt(e)},getTweensOf:function(e,t){return _t.getTweensOf(e,t)},getProperty:function(e,t,n,i){Dt(e)&&(e=Mn(e)[0]);var s=ss(e||{}).get,a=n?td:ed;return n==="native"&&(n=""),e&&(t?a((un[t]&&un[t].get||s)(e,t,n,i)):function(o,l,c){return a((un[o]&&un[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Mn(e),e.length>1){var i=e.map(function(h){return rn.quickSetter(h,t,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}e=e[0]||{};var a=un[t],o=ss(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var u=new a;Fs._pt=0,u.init(e,n?h+n:h,Fs,0,[e]),u.render(1,u),Fs._pt&&Kc(1,Fs)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,s=rn.to(e,_n((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(t,l,c,h)};return a.tween=s,a},isTweening:function(e){return _t.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=as(e.ease,qs.ease)),Fh(qs,e||{})},config:function(e){return Fh(pn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!un[o]&&!mn[o]&&Or(t+" effect requires "+o+" plugin.")}),wo[t]=function(o,l,c){return n(Mn(o),_n(l||{},s),c)},a&&(Wt.prototype[t]=function(o,l,c){return this.add(wo[t](o,Yn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ke[e]=as(t)},parseEase:function(e,t){return arguments.length?as(e,t):Ke},getById:function(e){return _t.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Wt(e),i,s;for(n.smoothChildTiming=Qt(e.smoothChildTiming),_t.remove(n),n._dp=0,n._time=n._tTime=_t._time,i=_t._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Tt&&i.vars.onComplete===i._targets[0]))&&Vn(n,i,i._start-i._delay),i=s;return Vn(_t,n,0),n},context:function(e,t){return e?new Cd(e,t):ft},matchMedia:function(e){return new v0(e)},matchMediaRefresh:function(){return os.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Nl()},addEventListener:function(e,t){var n=Oa[e]||(Oa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Oa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:$m,wrapYoyo:Jm,distribute:ld,random:hd,snap:cd,normalize:Zm,getUnit:Bt,clamp:qm,splitColor:md,toArray:Mn,selector:Dl,mapRange:fd,pipe:jm,unitize:Km,interpolate:Qm,shuffle:od},install:Kf,effects:wo,ticker:fn,updateRoot:Wt.updateRoot,plugins:un,globalTimeline:_t,core:{PropTween:tn,globals:Zf,Tween:Tt,Timeline:Wt,Animation:Vr,getCache:ss,_removeLinkedListItem:lo,reverting:function(){return Ut},context:function(e){return e&&ft&&(ft.data.push(e),e._ctx=ft),ft},suppressOverwrites:function(e){return Fc=e}}};en("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ja[r]=Tt[r]});fn.add(Wt.updateRoot);Fs=ja.to({},{duration:0});var b0=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},y0=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=b0(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Lo=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Dt(s)&&(l={},en(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}y0(o,s)}}}},rn=ja.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Ut?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Lo("roundProps",Ll),Lo("modifiers"),Lo("snap",cd))||ja;Tt.version=Wt.version=rn.version="3.13.0";jf=1;Bc()&&Zs();Ke.Power0;Ke.Power1;Ke.Power2;Ke.Power3;Ke.Power4;Ke.Linear;Ke.Quad;Ke.Cubic;Ke.Quart;Ke.Quint;Ke.Strong;Ke.Elastic;Ke.Back;Ke.SteppedEase;Ke.Bounce;Ke.Sine;Ke.Expo;Ke.Circ;var Gh,Li,ks,Zc,ts,Hh,$c,M0=function(){return typeof window<"u"},xi={},Ji=180/Math.PI,zs=Math.PI/180,ms=Math.atan2,Wh=1e8,Jc=/([A-Z])/g,S0=/(left|right|width|margin|padding|x)/i,T0=/[\s,\(]\S/,Hn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ul=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},E0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},A0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},w0=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Pd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Dd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},R0=function(e,t,n){return e.style[t]=n},C0=function(e,t,n){return e.style.setProperty(t,n)},P0=function(e,t,n){return e._gsap[t]=n},D0=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},L0=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},I0=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},xt="transform",nn=xt+"Origin",N0=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in xi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Hn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ci(i,o)}):this.tfm[e]=a.x?a[e]:ci(i,e),e===nn&&(this.tfm.zOrigin=a.zOrigin);else return Hn.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(xt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(nn,t,"")),e=xt}(s||t)&&this.props.push(e,t,s[e])},Ld=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},U0=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Jc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=$c(),(!s||!s.isStart)&&!n[xt]&&(Ld(n),i.zOrigin&&n[nn]&&(n[nn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Id=function(e,t){var n={target:e,props:[],revert:U0,save:N0};return e._gsap||rn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Nd,Fl=function(e,t){var n=Li.createElementNS?Li.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Li.createElement(e);return n&&n.style?n:Li.createElement(e)},Sn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Jc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,$s(t)||t,1)||""},Xh="O,Moz,ms,Ms,Webkit".split(","),$s=function(e,t,n){var i=t||ts,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Xh[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Xh[a]:"")+e},Ol=function(){M0()&&window.document&&(Gh=window,Li=Gh.document,ks=Li.documentElement,ts=Fl("div")||{style:{}},Fl("div"),xt=$s(xt),nn=xt+"Origin",ts.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Nd=!!$s("perspective"),$c=rn.core.reverting,Zc=1)},qh=function(e){var t=e.ownerSVGElement,n=Fl("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ks.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ks.removeChild(n),s},Yh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Ud=function(e){var t,n;try{t=e.getBBox()}catch{t=qh(e),n=1}return t&&(t.width||t.height)||n||(t=qh(e)),t&&!t.width&&!t.x&&!t.y?{x:+Yh(e,["x","cx","x1"])||0,y:+Yh(e,["y","cy","y1"])||0,width:0,height:0}:t},Fd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ud(e))},ls=function(e,t){if(t){var n=e.style,i;t in xi&&t!==nn&&(t=xt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Jc,"-$1").toLowerCase())):n.removeAttribute(t)}},Ii=function(e,t,n,i,s,a){var o=new tn(e._pt,t,n,0,1,a?Dd:Pd);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},jh={deg:1,rad:1,turn:1},F0={grid:1,flex:1},ki=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=ts.style,l=S0.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",x,_,p,m;if(i===a||!s||jh[i]||jh[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&Fd(e),(d||a==="%")&&(xi[t]||~t.indexOf("adius")))return x=m?e.getBBox()[l?"width":"height"]:e[h],Mt(d?s/x*u:s/100*x);if(o[l?"width":"height"]=u+(f?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Li||!_.appendChild)&&(_=Li.body),p=_._gsap,p&&d&&p.width&&l&&p.time===fn.time&&!p.uncache)return Mt(s/p.width*u);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=u+i,x=e[h],y?e.style[t]=y:ls(e,t)}else(d||a==="%")&&!F0[Sn(_,"display")]&&(o.position=Sn(e,"position")),_===e&&(o.position="static"),_.appendChild(ts),x=ts[h],_.removeChild(ts),o.position="absolute";return l&&d&&(p=ss(_),p.time=fn.time,p.width=_[h]),Mt(f?x*s/u:x&&s?u/x*s:0)},ci=function(e,t,n,i){var s;return Zc||Ol(),t in Hn&&t!=="transform"&&(t=Hn[t],~t.indexOf(",")&&(t=t.split(",")[0])),xi[t]&&t!=="transform"?(s=Hr(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Za(Sn(e,nn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ka[t]&&Ka[t](e,t,n)||Sn(e,t)||Jf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ki(e,t,s,n)+n:s},O0=function(e,t,n,i){if(!n||n==="none"){var s=$s(t,e,1),a=s&&Sn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Sn(e,"borderTopColor"))}var o=new tn(this._pt,e.style,t,0,1,wd),l=0,c=0,h,u,f,d,x,_,p,m,y,v,b,E;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Sn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Sn(e,t)||i,_?e.style[t]=_:ls(e,t)),h=[n,i],xd(h),n=h[0],i=h[1],f=n.match(Us)||[],E=i.match(Us)||[],E.length){for(;u=Us.exec(i);)p=u[0],y=i.substring(l,u.index),x?x=(x+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(x=1),p!==(_=f[c++]||"")&&(d=parseFloat(_)||0,b=_.substr((d+"").length),p.charAt(1)==="="&&(p=Bs(d,p)+b),m=parseFloat(p),v=p.substr((m+"").length),l=Us.lastIndex-v.length,v||(v=v||pn.units[t]||b,l===i.length&&(i+=v,o.e+=v)),b!==v&&(d=ki(e,t,_,v)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:d,c:m-d,m:x&&x<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Dd:Pd;return qf.test(i)&&(o.e=0),this._pt=o,o},Kh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},B0=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Kh[n]||n,t[1]=Kh[i]||i,t.join(" ")},k0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],xi[o]&&(l=1,o=o==="transformOrigin"?nn:xt),ls(n,o);l&&(ls(n,xt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Hr(n,1),a.uncache=1,Ld(i)))}},Ka={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new tn(e._pt,t,n,0,0,k0);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Gr=[1,0,0,1,0,0],Od={},Bd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Zh=function(e){var t=Sn(e,xt);return Bd(t)?Gr:t.substr(7).match(Xf).map(Mt)},Qc=function(e,t){var n=e._gsap||ss(e),i=e.style,s=Zh(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Gr:s):(s===Gr&&!e.offsetParent&&e!==ks&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,ks.appendChild(e)),s=Zh(e),l?i.display=l:ls(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ks.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Bl=function(e,t,n,i,s,a){var o=e._gsap,l=s||Qc(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,d=l[0],x=l[1],_=l[2],p=l[3],m=l[4],y=l[5],v=t.split(" "),b=parseFloat(v[0])||0,E=parseFloat(v[1])||0,M,w,C,g;n?l!==Gr&&(w=d*p-x*_)&&(C=b*(p/w)+E*(-_/w)+(_*y-p*m)/w,g=b*(-x/w)+E*(d/w)-(d*y-x*m)/w,b=C,E=g):(M=Ud(e),b=M.x+(~v[0].indexOf("%")?b/100*M.width:b),E=M.y+(~(v[1]||v[0]).indexOf("%")?E/100*M.height:E)),i||i!==!1&&o.smooth?(m=b-c,y=E-h,o.xOffset=u+(m*d+y*_)-m,o.yOffset=f+(m*x+y*p)-y):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=E,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[nn]="0px 0px",a&&(Ii(a,o,"xOrigin",c,b),Ii(a,o,"yOrigin",h,E),Ii(a,o,"xOffset",u,o.xOffset),Ii(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+E)},Hr=function(e,t){var n=e._gsap||new yd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Sn(e,nn)||"0",h,u,f,d,x,_,p,m,y,v,b,E,M,w,C,g,T,P,N,I,B,z,V,q,G,$,Z,ue,be,ke,ze,Ze;return h=u=f=_=p=m=y=v=b=0,d=x=1,n.svg=!!(e.getCTM&&Fd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[xt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[xt]!=="none"?l[xt]:"")),i.scale=i.rotate=i.translate="none"),w=Qc(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),Bl(e,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,w)),E=n.xOrigin||0,M=n.yOrigin||0,w!==Gr&&(P=w[0],N=w[1],I=w[2],B=w[3],h=z=w[4],u=V=w[5],w.length===6?(d=Math.sqrt(P*P+N*N),x=Math.sqrt(B*B+I*I),_=P||N?ms(N,P)*Ji:0,y=I||B?ms(I,B)*Ji+_:0,y&&(x*=Math.abs(Math.cos(y*zs))),n.svg&&(h-=E-(E*P+M*I),u-=M-(E*N+M*B))):(Ze=w[6],ke=w[7],Z=w[8],ue=w[9],be=w[10],ze=w[11],h=w[12],u=w[13],f=w[14],C=ms(Ze,be),p=C*Ji,C&&(g=Math.cos(-C),T=Math.sin(-C),q=z*g+Z*T,G=V*g+ue*T,$=Ze*g+be*T,Z=z*-T+Z*g,ue=V*-T+ue*g,be=Ze*-T+be*g,ze=ke*-T+ze*g,z=q,V=G,Ze=$),C=ms(-I,be),m=C*Ji,C&&(g=Math.cos(-C),T=Math.sin(-C),q=P*g-Z*T,G=N*g-ue*T,$=I*g-be*T,ze=B*T+ze*g,P=q,N=G,I=$),C=ms(N,P),_=C*Ji,C&&(g=Math.cos(C),T=Math.sin(C),q=P*g+N*T,G=z*g+V*T,N=N*g-P*T,V=V*g-z*T,P=q,z=G),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=Mt(Math.sqrt(P*P+N*N+I*I)),x=Mt(Math.sqrt(V*V+Ze*Ze)),C=ms(z,V),y=Math.abs(C)>2e-4?C*Ji:0,b=ze?1/(ze<0?-ze:ze):0),n.svg&&(q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Bd(Sn(e,xt)),q&&e.setAttribute("transform",q))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(x*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Mt(d),n.scaleY=Mt(x),n.rotation=Mt(_)+o,n.rotationX=Mt(p)+o,n.rotationY=Mt(m)+o,n.skewX=y+o,n.skewY=v+o,n.transformPerspective=b+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[nn]=Za(c)),n.xOffset=n.yOffset=0,n.force3D=pn.force3D,n.renderTransform=n.svg?V0:Nd?kd:z0,n.uncache=0,n},Za=function(e){return(e=e.split(" "))[0]+" "+e[1]},Io=function(e,t,n){var i=Bt(t);return Mt(parseFloat(t)+parseFloat(ki(e,"x",n+"px",i)))+i},z0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,kd(e,t)},Hi="0deg",mr="0px",Wi=") ",kd=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,x=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,v=n.zOrigin,b="",E=m==="auto"&&e&&e!==1||m===!0;if(v&&(u!==Hi||h!==Hi)){var M=parseFloat(h)*zs,w=Math.sin(M),C=Math.cos(M),g;M=parseFloat(u)*zs,g=Math.cos(M),a=Io(y,a,w*g*-v),o=Io(y,o,-Math.sin(M)*-v),l=Io(y,l,C*g*-v+v)}p!==mr&&(b+="perspective("+p+Wi),(i||s)&&(b+="translate("+i+"%, "+s+"%) "),(E||a!==mr||o!==mr||l!==mr)&&(b+=l!==mr||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Wi),c!==Hi&&(b+="rotate("+c+Wi),h!==Hi&&(b+="rotateY("+h+Wi),u!==Hi&&(b+="rotateX("+u+Wi),(f!==Hi||d!==Hi)&&(b+="skew("+f+", "+d+Wi),(x!==1||_!==1)&&(b+="scale("+x+", "+_+Wi),y.style[xt]=b||"translate(0, 0)"},V0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,x=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,v=parseFloat(a),b=parseFloat(o),E,M,w,C,g;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=zs,c*=zs,E=Math.cos(l)*u,M=Math.sin(l)*u,w=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(h*=zs,g=Math.tan(c-h),g=Math.sqrt(1+g*g),w*=g,C*=g,h&&(g=Math.tan(h),g=Math.sqrt(1+g*g),E*=g,M*=g)),E=Mt(E),M=Mt(M),w=Mt(w),C=Mt(C)):(E=u,C=f,M=w=0),(v&&!~(a+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(v=ki(d,"x",a,"px"),b=ki(d,"y",o,"px")),(x||_||p||m)&&(v=Mt(v+x-(x*E+_*w)+p),b=Mt(b+_-(x*M+_*C)+m)),(i||s)&&(g=d.getBBox(),v=Mt(v+i/100*g.width),b=Mt(b+s/100*g.height)),g="matrix("+E+","+M+","+w+","+C+","+v+","+b+")",d.setAttribute("transform",g),y&&(d.style[xt]=g)},G0=function(e,t,n,i,s){var a=360,o=Dt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ji:1),c=l-i,h=i+c+"deg",u,f;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*Wh)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*Wh)%a-~~(c/a)*a)),e._pt=f=new tn(e._pt,t,n,i,c,E0),f.e=h,f.u="deg",e._props.push(n),f},$h=function(e,t){for(var n in t)e[n]=t[n];return e},H0=function(e,t,n){var i=$h({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,f,d,x;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[xt]=t,o=Hr(n,1),ls(n,xt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[xt],a[xt]=t,o=Hr(n,1),a[xt]=c);for(l in xi)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(d=Bt(c),x=Bt(h),u=d!==x?ki(n,l,c,x):parseFloat(c),f=parseFloat(h),e._pt=new tn(e._pt,o,l,u,f-u,Ul),e._pt.u=x||0,e._props.push(l));$h(o,i)};en("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Ka[e>1?"border"+r:r]=function(o,l,c,h,u){var f,d;if(arguments.length<4)return f=a.map(function(x){return ci(o,x,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},a.forEach(function(x,_){return d[x]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,d,u)}});var zd={name:"css",register:Ol,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,h,u,f,d,x,_,p,m,y,v,b,E,M,w,C;Zc||Ol(),this.styles=this.styles||Id(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(un[_]&&Md(_,t,n,i,e,s)))){if(d=typeof h,x=Ka[_],d==="function"&&(h=h.call(n,i,e,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=kr(h)),x)x(this,e,_,h,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",Fi.lastIndex=0,Fi.test(c)||(p=Bt(c),m=Bt(h)),m?p!==m&&(c=ki(e,_,c,m)+m):p&&(h+=p),this.add(o,"setProperty",c,h,i,s,0,0,_),a.push(_),C.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Dt(c)&&~c.indexOf("random(")&&(c=kr(c)),Bt(c+"")||c==="auto"||(c+=pn.units[_]||Bt(ci(e,_))||""),(c+"").charAt(1)==="="&&(c=ci(e,_))):c=ci(e,_),f=parseFloat(c),y=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),_ in Hn&&(_==="autoAlpha"&&(f===1&&ci(e,"visibility")==="hidden"&&u&&(f=0),C.push("visibility",0,o.visibility),Ii(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Hn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in xi,v){if(this.styles.save(_),d==="string"&&h.substring(0,6)==="var(--"&&(h=Sn(e,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),b||(E=e._gsap,E.renderTransform&&!t.parseTransform||Hr(e,t.parseTransform),M=t.smoothOrigin!==!1&&E.smooth,b=this._pt=new tn(this._pt,o,xt,0,1,E.renderTransform,E,0,-1),b.dep=1),_==="scale")this._pt=new tn(this._pt,E,"scaleY",E.scaleY,(y?Bs(E.scaleY,y+u):u)-E.scaleY||0,Ul),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(nn,0,o[nn]),h=B0(h),E.svg?Bl(e,h,0,M,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==E.zOrigin&&Ii(this,E,"zOrigin",E.zOrigin,m),Ii(this,o,_,Za(c),Za(h)));continue}else if(_==="svgOrigin"){Bl(e,h,1,M,0,this);continue}else if(_ in Od){G0(this,E,_,f,y?Bs(f,y+h):h);continue}else if(_==="smoothOrigin"){Ii(this,E,"smooth",E.smooth,h);continue}else if(_==="force3D"){E[_]=h;continue}else if(_==="transform"){H0(this,h,e);continue}}else _ in o||(_=$s(_)||_);if(v||(u||u===0)&&(f||f===0)&&!T0.test(h)&&_ in o)p=(c+"").substr((f+"").length),u||(u=0),m=Bt(h)||(_ in pn.units?pn.units[_]:p),p!==m&&(f=ki(e,_,c,m)),this._pt=new tn(this._pt,v?E:o,_,f,(y?Bs(f,y+u):u)-f,!v&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?w0:Ul),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=A0);else if(_ in o)O0.call(this,e,_,c,y?y+h:h);else if(_ in e)this.add(e,_,c||e[_],y?y+h:h,i,s);else if(_!=="parseTransform"){zc(_,h);continue}v||(_ in o?C.push(_,0,o[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,c||e[_])),a.push(_)}}w&&Rd(this)},render:function(e,t){if(t.tween._time||!$c())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ci,aliases:Hn,getSetter:function(e,t,n){var i=Hn[t];return i&&i.indexOf(",")<0&&(t=i),t in xi&&t!==nn&&(e._gsap.x||ci(e,"x"))?n&&Hh===n?t==="scale"?D0:P0:(Hh=n||{})&&(t==="scale"?L0:I0):e.style&&!Oc(e.style[t])?R0:~t.indexOf("-")?C0:jc(e,t)},core:{_removeProperty:ls,_getMatrix:Qc}};rn.utils.checkPrefix=$s;rn.core.getStyleSaver=Id;(function(r,e,t,n){var i=en(r+","+e+","+t,function(s){xi[s]=1});en(e,function(s){pn.units[s]="deg",Od[s]=1}),Hn[i[13]]=r+","+e,en(n,function(s){var a=s.split(":");Hn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");en("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){pn.units[r]="px"});rn.registerPlugin(zd);var $a=rn.registerPlugin(zd)||rn;$a.core.Tween;let _r,_s,kl,W0=()=>kl||Wd.register(window.gsap),Jh=typeof Intl<"u"?new Intl.Segmenter:0,Ja=r=>typeof r=="string"?Ja(document.querySelectorAll(r)):"length"in r?Array.from(r):[r],Qh=r=>Ja(r).filter(e=>e instanceof HTMLElement),zl=[],No=function(){},X0=/\s+/g,eu=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),tu={left:0,top:0,width:0,height:0},nu=(r,e)=>{if(e){let t=new Set(r.join("").match(e)||zl),n=r.length,i,s,a,o;if(t.size)for(;--n>-1;){s=r[n];for(a of t)if(a.startsWith(s)&&a.length>s.length){for(i=0,o=s;a.startsWith(o+=r[n+ ++i])&&o.length<a.length;);if(i&&o.length===a.length){r[n]=a,r.splice(n+1,i);break}}}}return r},iu=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),xs=(r,e,t)=>e.insertBefore(typeof r=="string"?document.createTextNode(r):r,t),Vl=(r,e,t)=>{let n=e[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:a=!1}=e,o=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=h=>{let u=document.createElement(i),f=t.length+1;return n&&(u.className=n+(l?" "+n+f:"")),a&&u.style.setProperty("--"+r,f+""),s!=="none"&&u.setAttribute("aria-hidden","true"),i!=="span"&&(u.style.position="relative",u.style.display=o),u.textContent=h,t.push(u),u};return l&&(n=n.replace("++","")),c.collection=t,c},q0=(r,e,t,n)=>{let i=Vl("line",t,n),s=window.getComputedStyle(r).textAlign||"left";return(a,o)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,e[a]);a<o;a++)l.appendChild(e[a]);l.normalize()}},Vd=(r,e,t,n,i,s,a,o,l,c)=>{var h;let u=Array.from(r.childNodes),f=0,{wordDelimiter:d,reduceWhiteSpace:x=!0,prepareText:_}=e,p=r.getBoundingClientRect(),m=p,y=!x&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",v=0,b=t.collection,E,M,w,C,g,T,P,N,I,B,z,V,q,G,$,Z,ue,be;for(typeof d=="object"?(w=d.delimiter||d,M=d.replaceWith||""):M=d===""?"":d||" ",E=M!==" ";f<u.length;f++)if(C=u[f],C.nodeType===3){for($=C.textContent||"",x?$=$.replace(X0," "):y&&($=$.replace(/\n/g,M+`
`)),_&&($=_($,r)),C.textContent=$,g=M||w?$.split(w||M):$.match(o)||zl,ue=g[g.length-1],N=E?ue.slice(-1)===" ":!ue,ue||g.pop(),m=p,P=E?g[0].charAt(0)===" ":!g[0],P&&xs(" ",r,C),g[0]||g.shift(),nu(g,l),s&&c||(C.textContent=""),I=1;I<=g.length;I++)if(Z=g[I-1],!x&&y&&Z.charAt(0)===`
`&&((h=C.previousSibling)==null||h.remove(),xs(document.createElement("br"),r,C),Z=Z.slice(1)),!x&&Z==="")xs(M,r,C);else if(Z===" ")r.insertBefore(document.createTextNode(" "),C);else{if(E&&Z.charAt(0)===" "&&xs(" ",r,C),v&&I===1&&!P&&b.indexOf(v.parentNode)>-1?(T=b[b.length-1],T.appendChild(document.createTextNode(n?"":Z))):(T=t(n?"":Z),xs(T,r,C),v&&I===1&&!P&&T.insertBefore(v,T.firstChild)),n)for(z=Jh?nu([...Jh.segment(Z)].map(ke=>ke.segment),l):Z.match(o)||zl,be=0;be<z.length;be++)T.appendChild(z[be]===" "?document.createTextNode(" "):n(z[be]));if(s&&c){if($=C.textContent=$.substring(Z.length+1,$.length),B=T.getBoundingClientRect(),B.top>m.top&&B.left<=m.left){for(V=r.cloneNode(),q=r.childNodes[0];q&&q!==T;)G=q,q=q.nextSibling,V.appendChild(G);r.parentNode.insertBefore(V,r),i&&iu(V)}m=B}(I<g.length||N)&&xs(I>=g.length?" ":E&&Z.slice(-1)===" "?" "+M:M,r,C)}r.removeChild(C),v=0}else C.nodeType===1&&(a&&a.indexOf(C)>-1?(b.indexOf(C.previousSibling)>-1&&b[b.length-1].appendChild(C),v=C):(Vd(C,e,t,n,i,s,a,o,l,!0),v=0),i&&iu(C))};const Gd=class Hd{constructor(e,t){this.isSplit=!1,W0(),this.elements=Qh(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,s=()=>{let a=n.length,o;for(;a--;){o=n[a];let l=o.element.offsetWidth;if(l!==o.width){o.width=l,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(s,200)})},No(this),this.split(t)}split(e){this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:a,autoSplit:o=!1,specialChars:l,mask:c}=this.vars,h=t.indexOf("lines")>-1,u=t.indexOf("chars")>-1,f=t.indexOf("words")>-1,d=u&&!f&&!h,x=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=x?new RegExp(x.source+"|"+eu.source,"gu"):eu,p=!!e.ignore&&Qh(e.ignore),{orig:m,animTime:y,obs:v}=this._data,b;return(u||f||h)&&(this.elements.forEach((E,M)=>{m[M]={element:E,html:E.innerHTML,ariaL:E.getAttribute("aria-label"),ariaH:E.getAttribute("aria-hidden")},n==="auto"?E.setAttribute("aria-label",(E.textContent||"").trim()):n==="hidden"&&E.setAttribute("aria-hidden","true");let w=[],C=[],g=[],T=u?Vl("char",e,w):null,P=Vl("word",e,C),N,I,B,z;if(Vd(E,e,P,T,d,i&&(h||d),p,_,x,!1),h){let V=Ja(E.childNodes),q=q0(E,V,e,g),G,$=[],Z=0,ue=V.map(ke=>ke.nodeType===1?ke.getBoundingClientRect():tu),be=tu;for(N=0;N<V.length;N++)G=V[N],G.nodeType===1&&(G.nodeName==="BR"?($.push(G),q(Z,N+1),Z=N+1,be=ue[Z]):(N&&ue[N].top>be.top&&ue[N].left<=be.left&&(q(Z,N),Z=N),be=ue[N]));Z<N&&q(Z,N),$.forEach(ke=>{var ze;return(ze=ke.parentNode)==null?void 0:ze.removeChild(ke)})}if(!f){for(N=0;N<C.length;N++)if(I=C[N],u||!I.nextSibling||I.nextSibling.nodeType!==3)if(s&&!h){for(B=document.createElement("span"),B.style.whiteSpace="nowrap";I.firstChild;)B.appendChild(I.firstChild);I.replaceWith(B)}else I.replaceWith(...I.childNodes);else z=I.nextSibling,z&&z.nodeType===3&&(z.textContent=(I.textContent||"")+(z.textContent||""),I.remove());C.length=0,E.normalize()}this.lines.push(...g),this.words.push(...C),this.chars.push(...w)}),c&&this[c]&&this.masks.push(...this[c].map(E=>{let M=E.cloneNode();return E.replaceWith(M),M.appendChild(E),E.className&&(M.className=E.className.replace(/(\b\w+\b)/g,"$1-mask")),M.style.overflow="clip",M}))),this.isSplit=!0,_s&&(o?_s.addEventListener("loadingdone",this._split):_s.status==="loading"&&console.warn("SplitText called before fonts loaded")),(b=a&&a(this))&&b.totalTime&&(this._data.anim=y?b.totalTime(y):b),h&&o&&this.elements.forEach((E,M)=>{m[M].width=E.offsetWidth,v&&v.observe(E)}),this}revert(){var e,t;let{orig:n,anim:i,obs:s}=this._data;return s&&s.disconnect(),n.forEach(({element:a,html:o,ariaL:l,ariaH:c})=>{a.innerHTML=o,l?a.setAttribute("aria-label",l):a.removeAttribute("aria-label"),c?a.setAttribute("aria-hidden",c):a.removeAttribute("aria-hidden")}),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,_s?.removeEventListener("loadingdone",this._split),i&&(this._data.animTime=i.totalTime(),i.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this),this}static create(e,t){return new Hd(e,t)}static register(e){_r=_r||e||window.gsap,_r&&(Ja=_r.utils.toArray,No=_r.core.context||No),!kl&&window.innerWidth>0&&(_s=document.fonts,kl=!0)}};Gd.version="3.13.0";let Wd=Gd;const eh="181",Vs={ROTATE:0,DOLLY:1,PAN:2},Os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Y0=0,su=1,j0=2,Xd=1,K0=2,ai=3,gi=0,sn=1,Gn=2,di=0,Gs=1,ru=2,au=3,ou=4,Z0=5,Qi=100,$0=101,J0=102,Q0=103,e_=104,t_=200,n_=201,i_=202,s_=203,Gl=204,Hl=205,r_=206,a_=207,o_=208,l_=209,c_=210,h_=211,u_=212,f_=213,d_=214,Wl=0,Xl=1,ql=2,Js=3,Yl=4,jl=5,Kl=6,Zl=7,qd=0,p_=1,m_=2,Oi=0,__=1,x_=2,g_=3,v_=4,b_=5,y_=6,M_=7,lu="attached",S_="detached",Yd=300,Qs=301,er=302,$l=303,Jl=304,uo=306,tr=1e3,Wn=1001,Qa=1002,qt=1003,jd=1004,Cr=1005,Xt=1006,Ba=1007,ui=1008,jn=1009,Kd=1010,Zd=1011,Wr=1012,th=1013,cs=1014,In=1015,or=1016,nh=1017,ih=1018,Xr=1020,$d=35902,Jd=35899,Qd=1021,ep=1022,Tn=1023,qr=1026,Yr=1027,sh=1028,rh=1029,ah=1030,oh=1031,lh=1033,ka=33776,za=33777,Va=33778,Ga=33779,Ql=35840,ec=35841,tc=35842,nc=35843,ic=36196,sc=37492,rc=37496,ac=37808,oc=37809,lc=37810,cc=37811,hc=37812,uc=37813,fc=37814,dc=37815,pc=37816,mc=37817,_c=37818,xc=37819,gc=37820,vc=37821,bc=36492,yc=36494,Mc=36495,Sc=36283,Tc=36284,Ec=36285,Ac=36286,jr=2300,Kr=2301,Uo=2302,cu=2400,hu=2401,uu=2402,T_=2500,E_=0,tp=1,wc=2,A_=3200,w_=3201,np=0,R_=1,Ci="",Nt="srgb",jt="srgb-linear",eo="linear",st="srgb",gs=7680,fu=519,C_=512,P_=513,D_=514,ip=515,L_=516,I_=517,N_=518,U_=519,Rc=35044,du="300 es",Xn=2e3,to=2001;function sp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Zr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function F_(){const r=Zr("canvas");return r.style.display="block",r}const pu={};function no(...r){const e="THREE."+r.shift();console.log(e,...r)}function ve(...r){const e="THREE."+r.shift();console.warn(e,...r)}function He(...r){const e="THREE."+r.shift();console.error(e,...r)}function $r(...r){const e=r.join(" ");e in pu||(pu[e]=!0,ve(...r))}function O_(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mu=1234567;const Nr=Math.PI/180,nr=180/Math.PI;function Nn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[r&255]+Ft[r>>8&255]+Ft[r>>16&255]+Ft[r>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Ve(r,e,t){return Math.max(e,Math.min(t,r))}function ch(r,e){return(r%e+e)%e}function B_(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function k_(r,e,t){return r!==e?(t-r)/(e-r):0}function Ur(r,e,t){return(1-t)*r+t*e}function z_(r,e,t,n){return Ur(r,e,1-Math.exp(-t*n))}function V_(r,e=1){return e-Math.abs(ch(r,e*2)-e)}function G_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function H_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function W_(r,e){return r+Math.floor(Math.random()*(e-r+1))}function X_(r,e){return r+Math.random()*(e-r)}function q_(r){return r*(.5-Math.random())}function Y_(r){r!==void 0&&(mu=r);let e=mu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function j_(r){return r*Nr}function K_(r){return r*nr}function Z_(r){return(r&r-1)===0&&r!==0}function $_(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function J_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Q_(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),x=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*f,o*c);break;case"YZY":r.set(l*f,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*f,o*h,o*c);break;case"XZX":r.set(o*h,l*x,l*d,o*c);break;case"YXY":r.set(l*d,o*h,l*x,o*c);break;case"ZYZ":r.set(l*x,l*d,o*h,o*c);break;default:ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Dn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function et(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const rp={DEG2RAD:Nr,RAD2DEG:nr,generateUUID:Nn,clamp:Ve,euclideanModulo:ch,mapLinear:B_,inverseLerp:k_,lerp:Ur,damp:z_,pingpong:V_,smoothstep:G_,smootherstep:H_,randInt:W_,randFloat:X_,randFloatSpread:q_,seededRandom:Y_,degToRad:j_,radToDeg:K_,isPowerOfTwo:Z_,ceilPowerOfTwo:$_,floorPowerOfTwo:J_,setQuaternionFromProperEuler:Q_,normalize:et,denormalize:Dn};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=s[a+0],d=s[a+1],x=s[a+2],_=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=f,e[t+1]=d,e[t+2]=x,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==x){let p=l*f+c*d+h*x+u*_;p<0&&(f=-f,d=-d,x=-x,_=-_,p=-p);let m=1-o;if(p<.9995){const y=Math.acos(p),v=Math.sin(y);m=Math.sin(m*y)/v,o=Math.sin(o*y)/v,l=l*m+f*o,c=c*m+d*o,h=h*m+x*o,u=u*m+_*o}else{l=l*m+f*o,c=c*m+d*o,h=h*m+x*o,u=u*m+_*o;const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],f=s[a+1],d=s[a+2],x=s[a+3];return e[t]=o*x+h*u+l*d-c*f,e[t+1]=l*x+h*f+c*u-o*d,e[t+2]=c*x+h*d+o*f-l*u,e[t+3]=h*x-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),f=l(n/2),d=l(i/2),x=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"YXZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"ZXY":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"ZYX":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"YZX":this._x=f*h*u+c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u-f*d*x;break;case"XZY":this._x=f*h*u-c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u+f*d*x;break;default:ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_u.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_u.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fo.copy(this).projectOnVector(e),this.sub(Fo)}reflect(e){return this.sub(Fo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fo=new F,_u=new Kn;class Fe{constructor(e,t,n,i,s,a,o,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],x=n[8],_=i[0],p=i[3],m=i[6],y=i[1],v=i[4],b=i[7],E=i[2],M=i[5],w=i[8];return s[0]=a*_+o*y+l*E,s[3]=a*p+o*v+l*M,s[6]=a*m+o*b+l*w,s[1]=c*_+h*y+u*E,s[4]=c*p+h*v+u*M,s[7]=c*m+h*b+u*w,s[2]=f*_+d*y+x*E,s[5]=f*p+d*v+x*M,s[8]=f*m+d*b+x*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*s,d=c*s-a*l,x=t*u+n*f+i*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Oo.makeScale(e,t)),this}rotate(e){return this.premultiply(Oo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oo=new Fe,xu=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gu=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ex(){const r={enabled:!0,workingColorSpace:jt,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(i.r=pi(i.r),i.g=pi(i.g),i.b=pi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(i.r=Hs(i.r),i.g=Hs(i.g),i.b=Hs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ci?eo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return $r("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return $r("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[jt]:{primaries:e,whitePoint:n,transfer:eo,toXYZ:xu,fromXYZ:gu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:st,toXYZ:xu,fromXYZ:gu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),r}const $e=ex();function pi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Hs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let vs;class tx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vs===void 0&&(vs=Zr("canvas")),vs.width=e.width,vs.height=e.height;const i=vs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=vs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=pi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pi(t[n]/255)*255):t[n]=pi(t[n]);return{data:t,width:e.width,height:e.height}}else return ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nx=0;class hh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=Nn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Bo(i[a].image)):s.push(Bo(i[a]))}else s=Bo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Bo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?tx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ve("Texture: Unable to serialize Texture."),{})}let ix=0;const ko=new F;class Pt extends ds{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Wn,i=Wn,s=Xt,a=ui,o=Tn,l=jn,c=Pt.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Nn(),this.name="",this.source=new hh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ko).x}get height(){return this.source.getSize(ko).y}get depth(){return this.source.getSize(ko).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ve(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tr:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tr:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Yd;Pt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,i=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],x=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(x+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,b=(d+1)/2,E=(m+1)/2,M=(h+f)/4,w=(u+_)/4,C=(x+p)/4;return v>b&&v>E?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=M/n,s=w/n):b>E?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=M/i,s=C/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=w/s,i=C/s),this.set(n,i,s,t),this}let y=Math.sqrt((p-x)*(p-x)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-x)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sx extends ds{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Pt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new hh(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hs extends sx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ap extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rx extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bi{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wn):wn.fromBufferAttribute(s,a),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),la.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),la.copy(n.boundingBox)),la.applyMatrix4(e.matrixWorld),this.union(la)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),ca.subVectors(this.max,xr),bs.subVectors(e.a,xr),ys.subVectors(e.b,xr),Ms.subVectors(e.c,xr),yi.subVectors(ys,bs),Mi.subVectors(Ms,ys),Xi.subVectors(bs,Ms);let t=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-Xi.z,Xi.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,Xi.z,0,-Xi.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-Xi.y,Xi.x,0];return!zo(t,bs,ys,Ms,ca)||(t=[1,0,0,0,1,0,0,0,1],!zo(t,bs,ys,Ms,ca))?!1:(ha.crossVectors(yi,Mi),t=[ha.x,ha.y,ha.z],zo(t,bs,ys,Ms,ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qn=[new F,new F,new F,new F,new F,new F,new F,new F],wn=new F,la=new bi,bs=new F,ys=new F,Ms=new F,yi=new F,Mi=new F,Xi=new F,xr=new F,ca=new F,ha=new F,qi=new F;function zo(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){qi.fromArray(r,s);const o=i.x*Math.abs(qi.x)+i.y*Math.abs(qi.y)+i.z*Math.abs(qi.z),l=e.dot(qi),c=t.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ax=new bi,gr=new F,Vo=new F;class $n{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ax.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gr.subVectors(e,this.center);const t=gr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(gr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gr.copy(e.center).add(Vo)),this.expandByPoint(gr.copy(e.center).sub(Vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ei=new F,Go=new F,ua=new F,Si=new F,Ho=new F,fa=new F,Wo=new F;class Qr{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Go.copy(e).add(t).multiplyScalar(.5),ua.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(Go);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ua),o=Si.dot(this.direction),l=-Si.dot(ua),c=Si.lengthSq(),h=Math.abs(1-a*a);let u,f,d,x;if(h>0)if(u=a*l-o,f=a*o-l,x=s*h,u>=0)if(f>=-x)if(f<=x){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Go).addScaledVector(ua,f),d}intersectSphere(e,t){ei.subVectors(e.center,this.origin);const n=ei.dot(this.direction),i=ei.dot(ei)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,i,s){Ho.subVectors(t,e),fa.subVectors(n,e),Wo.crossVectors(Ho,fa);let a=this.direction.dot(Wo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Si.subVectors(this.origin,e);const l=o*this.direction.dot(fa.crossVectors(Si,fa));if(l<0)return null;const c=o*this.direction.dot(Ho.cross(Si));if(c<0||l+c>a)return null;const h=-o*Si.dot(Wo);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(e,t,n,i,s,a,o,l,c,h,u,f,d,x,_,p){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,f,d,x,_,p)}set(e,t,n,i,s,a,o,l,c,h,u,f,d,x,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=x,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ss.setFromMatrixColumn(e,0).length(),s=1/Ss.setFromMatrixColumn(e,1).length(),a=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=a*h,d=a*u,x=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+x*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=x+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,x=c*h,_=c*u;t[0]=f+_*o,t[4]=x*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-x,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,x=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=x+d*o,t[1]=d+x*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,d=a*u,x=o*h,_=o*u;t[0]=l*h,t[4]=x*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,x=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=x*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+x,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*l,d=a*c,x=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-x,t[2]=x*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ox,e,lx)}lookAt(e,t,n){const i=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Ti.crossVectors(n,ln),Ti.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Ti.crossVectors(n,ln)),Ti.normalize(),da.crossVectors(ln,Ti),i[0]=Ti.x,i[4]=da.x,i[8]=ln.x,i[1]=Ti.y,i[5]=da.y,i[9]=ln.y,i[2]=Ti.z,i[6]=da.z,i[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],x=n[2],_=n[6],p=n[10],m=n[14],y=n[3],v=n[7],b=n[11],E=n[15],M=i[0],w=i[4],C=i[8],g=i[12],T=i[1],P=i[5],N=i[9],I=i[13],B=i[2],z=i[6],V=i[10],q=i[14],G=i[3],$=i[7],Z=i[11],ue=i[15];return s[0]=a*M+o*T+l*B+c*G,s[4]=a*w+o*P+l*z+c*$,s[8]=a*C+o*N+l*V+c*Z,s[12]=a*g+o*I+l*q+c*ue,s[1]=h*M+u*T+f*B+d*G,s[5]=h*w+u*P+f*z+d*$,s[9]=h*C+u*N+f*V+d*Z,s[13]=h*g+u*I+f*q+d*ue,s[2]=x*M+_*T+p*B+m*G,s[6]=x*w+_*P+p*z+m*$,s[10]=x*C+_*N+p*V+m*Z,s[14]=x*g+_*I+p*q+m*ue,s[3]=y*M+v*T+b*B+E*G,s[7]=y*w+v*P+b*z+E*$,s[11]=y*C+v*N+b*V+E*Z,s[15]=y*g+v*I+b*q+E*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],x=e[3],_=e[7],p=e[11],m=e[15];return x*(+s*l*u-i*c*u-s*o*f+n*c*f+i*o*d-n*l*d)+_*(+t*l*d-t*c*f+s*a*f-i*a*d+i*c*h-s*l*h)+p*(+t*c*u-t*o*d-s*a*u+n*a*d+s*o*h-n*c*h)+m*(-i*o*h-t*l*u+t*o*f+i*a*u-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],x=e[12],_=e[13],p=e[14],m=e[15],y=u*p*c-_*f*c+_*l*d-o*p*d-u*l*m+o*f*m,v=x*f*c-h*p*c-x*l*d+a*p*d+h*l*m-a*f*m,b=h*_*c-x*u*c+x*o*d-a*_*d-h*o*m+a*u*m,E=x*u*l-h*_*l-x*o*f+a*_*f+h*o*p-a*u*p,M=t*y+n*v+i*b+s*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=y*w,e[1]=(_*f*s-u*p*s-_*i*d+n*p*d+u*i*m-n*f*m)*w,e[2]=(o*p*s-_*l*s+_*i*c-n*p*c-o*i*m+n*l*m)*w,e[3]=(u*l*s-o*f*s-u*i*c+n*f*c+o*i*d-n*l*d)*w,e[4]=v*w,e[5]=(h*p*s-x*f*s+x*i*d-t*p*d-h*i*m+t*f*m)*w,e[6]=(x*l*s-a*p*s-x*i*c+t*p*c+a*i*m-t*l*m)*w,e[7]=(a*f*s-h*l*s+h*i*c-t*f*c-a*i*d+t*l*d)*w,e[8]=b*w,e[9]=(x*u*s-h*_*s-x*n*d+t*_*d+h*n*m-t*u*m)*w,e[10]=(a*_*s-x*o*s+x*n*c-t*_*c-a*n*m+t*o*m)*w,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*d-t*o*d)*w,e[12]=E*w,e[13]=(h*_*i-x*u*i+x*n*f-t*_*f-h*n*p+t*u*p)*w,e[14]=(x*o*i-a*_*i-x*n*l+t*_*l+a*n*p-t*o*p)*w,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,f=s*c,d=s*h,x=s*u,_=a*h,p=a*u,m=o*u,y=l*c,v=l*h,b=l*u,E=n.x,M=n.y,w=n.z;return i[0]=(1-(_+m))*E,i[1]=(d+b)*E,i[2]=(x-v)*E,i[3]=0,i[4]=(d-b)*M,i[5]=(1-(f+m))*M,i[6]=(p+y)*M,i[7]=0,i[8]=(x+v)*w,i[9]=(p-y)*w,i[10]=(1-(f+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ss.set(i[0],i[1],i[2]).length();const a=Ss.set(i[4],i[5],i[6]).length(),o=Ss.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Rn.copy(this);const c=1/s,h=1/a,u=1/o;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=u,Rn.elements[9]*=u,Rn.elements[10]*=u,t.setFromRotationMatrix(Rn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Xn,l=!1){const c=this.elements,h=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let x,_;if(l)x=s/(a-s),_=a*s/(a-s);else if(o===Xn)x=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===to)x=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Xn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let x,_;if(l)x=1/(a-s),_=a/(a-s);else if(o===Xn)x=-2/(a-s),_=-(a+s)/(a-s);else if(o===to)x=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ss=new F,Rn=new Be,ox=new F(0,0,0),lx=new F(1,1,1),Ti=new F,da=new F,ln=new F,vu=new Be,bu=new Kn;class Zn{constructor(e=0,t=0,n=0,i=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bu.setFromEuler(this),this.setFromQuaternion(bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class op{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cx=0;const yu=new F,Ts=new Kn,ti=new Be,pa=new F,vr=new F,hx=new F,ux=new Kn,Mu=new F(1,0,0),Su=new F(0,1,0),Tu=new F(0,0,1),Eu={type:"added"},fx={type:"removed"},Es={type:"childadded",child:null},Xo={type:"childremoved",child:null};class gt extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new F,t=new Zn,n=new Kn,i=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Be},normalMatrix:{value:new Fe}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new op,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(Mu,e)}rotateY(e){return this.rotateOnAxis(Su,e)}rotateZ(e){return this.rotateOnAxis(Tu,e)}translateOnAxis(e,t){return yu.copy(e).applyQuaternion(this.quaternion),this.position.add(yu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mu,e)}translateY(e){return this.translateOnAxis(Su,e)}translateZ(e){return this.translateOnAxis(Tu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pa.copy(e):pa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(vr,pa,this.up):ti.lookAt(pa,vr,this.up),this.quaternion.setFromRotationMatrix(ti),i&&(ti.extractRotation(i.matrixWorld),Ts.setFromRotationMatrix(ti),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Eu),Es.child=e,this.dispatchEvent(Es),Es.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fx),Xo.child=e,this.dispatchEvent(Xo),Xo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Eu),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,hx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,ux,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}gt.DEFAULT_UP=new F(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new F,ni=new F,qo=new F,ii=new F,As=new F,ws=new F,Au=new F,Yo=new F,jo=new F,Ko=new F,Zo=new Qe,$o=new Qe,Jo=new Qe;class Ln{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Cn.subVectors(e,t),i.cross(Cn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Cn.subVectors(i,t),ni.subVectors(n,t),qo.subVectors(e,t);const a=Cn.dot(Cn),o=Cn.dot(ni),l=Cn.dot(qo),c=ni.dot(ni),h=ni.dot(qo),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,x=(a*h-o*l)*f;return s.set(1-d-x,x,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(o,ii.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Zo.setScalar(0),$o.setScalar(0),Jo.setScalar(0),Zo.fromBufferAttribute(e,t),$o.fromBufferAttribute(e,n),Jo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Zo,s.x),a.addScaledVector($o,s.y),a.addScaledVector(Jo,s.z),a}static isFrontFacing(e,t,n,i){return Cn.subVectors(n,t),ni.subVectors(e,t),Cn.cross(ni).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Cn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Ln.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;As.subVectors(i,n),ws.subVectors(s,n),Yo.subVectors(e,n);const l=As.dot(Yo),c=ws.dot(Yo);if(l<=0&&c<=0)return t.copy(n);jo.subVectors(e,i);const h=As.dot(jo),u=ws.dot(jo);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(As,a);Ko.subVectors(e,s);const d=As.dot(Ko),x=ws.dot(Ko);if(x>=0&&d<=x)return t.copy(s);const _=d*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(ws,o);const p=h*x-d*u;if(p<=0&&u-h>=0&&d-x>=0)return Au.subVectors(s,i),o=(u-h)/(u-h+(d-x)),t.copy(i).addScaledVector(Au,o);const m=1/(p+_+f);return a=_*m,o=f*m,t.copy(n).addScaledVector(As,a).addScaledVector(ws,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},ma={h:0,s:0,l:0};function Qo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=$e.workingColorSpace){if(e=ch(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Qo(a,s,e+1/3),this.g=Qo(a,s,e),this.b=Qo(a,s,e-1/3)}return $e.colorSpaceToWorking(this,i),this}setStyle(e,t=Nt){function n(s){s!==void 0&&parseFloat(s)<1&&ve("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ve("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=lp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return $e.workingToColorSpace(Ot.copy(this),e),Math.round(Ve(Ot.r*255,0,255))*65536+Math.round(Ve(Ot.g*255,0,255))*256+Math.round(Ve(Ot.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Ot.copy(this),t);const n=Ot.r,i=Ot.g,s=Ot.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Nt){$e.workingToColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,i=Ot.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(ma);const n=Ur(Ei.h,ma.h,t),i=Ur(Ei.s,ma.s,t),s=Ur(Ei.l,ma.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Ie;Ie.NAMES=lp;let dx=0;class qn extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=Gs,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Hl,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ve(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gl&&(n.blendSrc=this.blendSrc),this.blendDst!==Hl&&(n.blendDst=this.blendDst),this.blendEquation!==Qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ns extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=qd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new F,_a=new De;let px=0;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:px++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rc,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_a.fromBufferAttribute(this,t),_a.applyMatrix3(e),this.setXY(t,_a.x,_a.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rc&&(e.usage=this.usage),e}}class cp extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hp extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mi extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mx=0;const gn=new Be,el=new gt,Rs=new F,cn=new bi,br=new bi,Ct=new F;class Un extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sp(e)?hp:cp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return el.lookAt(e),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mi(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];br.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(cn.min,br.min),cn.expandByPoint(Ct),Ct.addVectors(cn.max,br.max),cn.expandByPoint(Ct)):(cn.expandByPoint(br.min),cn.expandByPoint(br.max))}cn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ct));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ct.fromBufferAttribute(o,c),l&&(Rs.fromBufferAttribute(e,c),Ct.add(Rs)),i=Math.max(i,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new F,l[C]=new F;const c=new F,h=new F,u=new F,f=new De,d=new De,x=new De,_=new F,p=new F;function m(C,g,T){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,g),u.fromBufferAttribute(n,T),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,g),x.fromBufferAttribute(s,T),h.sub(c),u.sub(c),d.sub(f),x.sub(f);const P=1/(d.x*x.y-x.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(u,-d.y).multiplyScalar(P),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(P),o[C].add(_),o[g].add(_),o[T].add(_),l[C].add(p),l[g].add(p),l[T].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,g=y.length;C<g;++C){const T=y[C],P=T.start,N=T.count;for(let I=P,B=P+N;I<B;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const v=new F,b=new F,E=new F,M=new F;function w(C){E.fromBufferAttribute(i,C),M.copy(E);const g=o[C];v.copy(g),v.sub(E.multiplyScalar(E.dot(g))).normalize(),b.crossVectors(M,g);const P=b.dot(l[C])<0?-1:1;a.setXYZW(C,v.x,v.y,v.z,P)}for(let C=0,g=y.length;C<g;++C){const T=y[C],P=T.start,N=T.count;for(let I=P,B=P+N;I<B;I+=3)w(e.getX(I+0)),w(e.getX(I+1)),w(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new F,s=new F,a=new F,o=new F,l=new F,c=new F,h=new F,u=new F;if(e)for(let f=0,d=e.count;f<d;f+=3){const x=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,x),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,x=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let m=0;m<h;m++)f[x++]=c[d++]}return new Yt(f,h,u)}if(this.index===null)return ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Un,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wu=new Be,Yi=new Qr,xa=new $n,Ru=new F,ga=new F,va=new F,ba=new F,tl=new F,ya=new F,Cu=new F,Ma=new F;class En extends gt{constructor(e=new Un,t=new ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){ya.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(tl.fromBufferAttribute(u,e),a?ya.addScaledVector(tl,h):ya.addScaledVector(tl.sub(t),h))}t.add(ya)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(s),Yi.copy(e.ray).recast(e.near),!(xa.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(xa,Ru)===null||Yi.origin.distanceToSquared(Ru)>(e.far-e.near)**2))&&(wu.copy(s).invert(),Yi.copy(e.ray).applyMatrix4(wu),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=f.length;x<_;x++){const p=f[x],m=a[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let b=y,E=v;b<E;b+=3){const M=o.getX(b),w=o.getX(b+1),C=o.getX(b+2);i=Sa(this,m,e,n,c,h,u,M,w,C),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const x=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=x,m=_;p<m;p+=3){const y=o.getX(p),v=o.getX(p+1),b=o.getX(p+2);i=Sa(this,a,e,n,c,h,u,y,v,b),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,_=f.length;x<_;x++){const p=f[x],m=a[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let b=y,E=v;b<E;b+=3){const M=b,w=b+1,C=b+2;i=Sa(this,m,e,n,c,h,u,M,w,C),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const x=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=x,m=_;p<m;p+=3){const y=p,v=p+1,b=p+2;i=Sa(this,a,e,n,c,h,u,y,v,b),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function _x(r,e,t,n,i,s,a,o){let l;if(e.side===sn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===gi,o),l===null)return null;Ma.copy(o),Ma.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ma);return c<t.near||c>t.far?null:{distance:c,point:Ma.clone(),object:r}}function Sa(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,ga),r.getVertexPosition(l,va),r.getVertexPosition(c,ba);const h=_x(r,e,t,n,ga,va,ba,Cu);if(h){const u=new F;Ln.getBarycoord(Cu,ga,va,ba,u),i&&(h.uv=Ln.getInterpolatedAttribute(i,o,l,c,u,new De)),s&&(h.uv1=Ln.getInterpolatedAttribute(s,o,l,c,u,new De)),a&&(h.normal=Ln.getInterpolatedAttribute(a,o,l,c,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new F,materialIndex:0};Ln.getNormal(ga,va,ba,f.normal),h.face=f,h.barycoord=u}return h}class ea extends Un{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,i,a,2),x("x","z","y",1,-1,e,n,-t,i,a,3),x("x","y","z",1,-1,e,t,n,i,s,4),x("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new mi(c,3)),this.setAttribute("normal",new mi(h,3)),this.setAttribute("uv",new mi(u,2));function x(_,p,m,y,v,b,E,M,w,C,g){const T=b/w,P=E/C,N=b/2,I=E/2,B=M/2,z=w+1,V=C+1;let q=0,G=0;const $=new F;for(let Z=0;Z<V;Z++){const ue=Z*P-I;for(let be=0;be<z;be++){const ke=be*T-N;$[_]=ke*y,$[p]=ue*v,$[m]=B,c.push($.x,$.y,$.z),$[_]=0,$[p]=0,$[m]=M>0?1:-1,h.push($.x,$.y,$.z),u.push(be/w),u.push(1-Z/C),q+=1}}for(let Z=0;Z<C;Z++)for(let ue=0;ue<w;ue++){const be=f+ue+z*Z,ke=f+ue+z*(Z+1),ze=f+(ue+1)+z*(Z+1),Ze=f+(ue+1)+z*Z;l.push(be,ke,Ze),l.push(ke,ze,Ze),G+=6}o.addGroup(d,G,g),d+=G,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ir(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Gt(r){const e={};for(let t=0;t<r.length;t++){const n=ir(r[t]);for(const i in n)e[i]=n[i]}return e}function xx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function up(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const gx={clone:ir,merge:Gt};var vx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vx,this.fragmentShader=bx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=xx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fp extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new F,Pu=new De,Du=new De;class Ht extends fp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,Pu,Du),t.subVectors(Du,Pu)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Cs=-90,Ps=1;class yx extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ht(Cs,Ps,e,t);i.layers=this.layers,this.add(i);const s=new Ht(Cs,Ps,e,t);s.layers=this.layers,this.add(s);const a=new Ht(Cs,Ps,e,t);a.layers=this.layers,this.add(a);const o=new Ht(Cs,Ps,e,t);o.layers=this.layers,this.add(o);const l=new Ht(Cs,Ps,e,t);l.layers=this.layers,this.add(l);const c=new Ht(Cs,Ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===to)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class dp extends Pt{constructor(e=[],t=Qs,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mx extends hs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new dp(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ea(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:di});s.uniforms.tEquirect.value=t;const a=new En(i,s),o=t.minFilter;return t.minFilter===ui&&(t.minFilter=Xt),new yx(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class is extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sx={type:"move"};class nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,x=.005;c.inputState.pinching&&f>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new is;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Tx extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ex{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rc,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vt=new F;class uh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){no("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new uh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){no("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Lu=new F,Iu=new Qe,Nu=new Qe,Ax=new F,Uu=new Be,Ta=new F,il=new $n,Fu=new Be,sl=new Qr;class wx extends En{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lu,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ta),this.boundingBox.expandByPoint(Ta)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new $n),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ta),this.boundingSphere.expandByPoint(Ta)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),il.copy(this.boundingSphere),il.applyMatrix4(i),e.ray.intersectsSphere(il)!==!1&&(Fu.copy(i).invert(),sl.copy(e.ray).applyMatrix4(Fu),!(this.boundingBox!==null&&sl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,sl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===lu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===S_?this.bindMatrixInverse.copy(this.bindMatrix).invert():ve("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Iu.fromBufferAttribute(i.attributes.skinIndex,e),Nu.fromBufferAttribute(i.attributes.skinWeight,e),Lu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Nu.getComponent(s);if(a!==0){const o=Iu.getComponent(s);Uu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Ax.copy(Lu).applyMatrix4(Uu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class pp extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class fh extends Pt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=qt,h=qt,u,f){super(null,a,o,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ou=new Be,Rx=new Be;class dh{constructor(e=[],t=[]){this.uuid=Nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ve("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Rx;Ou.multiplyMatrices(o,t[s]),Ou.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new dh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new fh(t,e,e,Tn,In);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(ve("Skeleton: No bone found with UUID:",s),a=new pp),this.bones.push(a),this.boneInverses.push(new Be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Cc extends Yt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ds=new Be,Bu=new Be,Ea=[],ku=new bi,Cx=new Be,yr=new En,Mr=new $n;class Px extends En{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Cx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),ku.copy(e.boundingBox).applyMatrix4(Ds),this.boundingBox.union(ku)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),Mr.copy(e.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(Mr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(yr.geometry=this.geometry,yr.material=this.material,yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mr.copy(this.boundingSphere),Mr.applyMatrix4(n),e.ray.intersectsSphere(Mr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ds),Bu.multiplyMatrices(n,Ds),yr.matrixWorld=Bu,yr.raycast(e,Ea);for(let a=0,o=Ea.length;a<o;a++){const l=Ea[a];l.instanceId=s,l.object=this,t.push(l)}Ea.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Cc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new fh(new Float32Array(i*this.count),i,this.count,sh,In));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const rl=new F,Dx=new F,Lx=new Fe;class Ri{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=rl.subVectors(n,t).cross(Dx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(rl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lx.getNormalMatrix(e),i=this.coplanarPoint(rl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new $n,Ix=new De(.5,.5),Aa=new F;class ph{constructor(e=new Ri,t=new Ri,n=new Ri,i=new Ri,s=new Ri,a=new Ri){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],x=s[8],_=s[9],p=s[10],m=s[11],y=s[12],v=s[13],b=s[14],E=s[15];if(i[0].setComponents(c-a,d-h,m-x,E-y).normalize(),i[1].setComponents(c+a,d+h,m+x,E+y).normalize(),i[2].setComponents(c+o,d+u,m+_,E+v).normalize(),i[3].setComponents(c-o,d-u,m-_,E-v).normalize(),n)i[4].setComponents(l,f,p,b).normalize(),i[5].setComponents(c-l,d-f,m-p,E-b).normalize();else if(i[4].setComponents(c-l,d-f,m-p,E-b).normalize(),t===Xn)i[5].setComponents(c+l,d+f,m+p,E+b).normalize();else if(t===to)i[5].setComponents(l,f,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){ji.center.set(0,0,0);const t=Ix.distanceTo(e.center);return ji.radius=.7071067811865476+t,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Aa.x=i.normal.x>0?e.max.x:e.min.x,Aa.y=i.normal.y>0?e.max.y:e.min.y,Aa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mp extends qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const io=new F,so=new F,zu=new Be,Sr=new Qr,wa=new $n,al=new F,Vu=new F;class mh extends gt{constructor(e=new Un,t=new mp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)io.fromBufferAttribute(t,i-1),so.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=io.distanceTo(so);e.setAttribute("lineDistance",new mi(n,1))}else ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(i),wa.radius+=s,e.ray.intersectsSphere(wa)===!1)return;zu.copy(i).invert(),Sr.copy(e.ray).applyMatrix4(zu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let _=d,p=x-1;_<p;_+=c){const m=h.getX(_),y=h.getX(_+1),v=Ra(this,e,Sr,l,m,y,_);v&&t.push(v)}if(this.isLineLoop){const _=h.getX(x-1),p=h.getX(d),m=Ra(this,e,Sr,l,_,p,x-1);m&&t.push(m)}}else{const d=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let _=d,p=x-1;_<p;_+=c){const m=Ra(this,e,Sr,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=Ra(this,e,Sr,l,x-1,d,x-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ra(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(io.fromBufferAttribute(o,i),so.fromBufferAttribute(o,s),t.distanceSqToSegment(io,so,al,Vu)>n)return;al.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(al);if(!(c<e.near||c>e.far))return{distance:c,point:Vu.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Gu=new F,Hu=new F;class Nx extends mh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Gu.fromBufferAttribute(t,i),Hu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Gu.distanceTo(Hu);e.setAttribute("lineDistance",new mi(n,1))}else ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ux extends mh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _p extends qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wu=new Be,Pc=new Qr,Ca=new $n,Pa=new F;class Fx extends gt{constructor(e=new Un,t=new _p){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(i),Ca.radius+=s,e.ray.intersectsSphere(Ca)===!1)return;Wu.copy(i).invert(),Pc.copy(e.ray).applyMatrix4(Wu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let x=f,_=d;x<_;x++){const p=c.getX(x);Pa.fromBufferAttribute(u,p),Xu(Pa,p,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let x=f,_=d;x<_;x++)Pa.fromBufferAttribute(u,x),Xu(Pa,x,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Xu(r,e,t,n,i,s,a){const o=Pc.distanceSqToPoint(r);if(o<t){const l=new F;Pc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class xp extends Pt{constructor(e,t,n=cs,i,s,a,o=qt,l=qt,c,h=qr,u=1){if(h!==qr&&h!==Yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gp extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fo extends Un{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,d=[],x=[],_=[],p=[];for(let m=0;m<h;m++){const y=m*f-a;for(let v=0;v<c;v++){const b=v*u-s;x.push(b,-y,0),_.push(0,0,1),p.push(v/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const v=y+c*m,b=y+c*(m+1),E=y+1+c*(m+1),M=y+1+c*m;d.push(v,b,M),d.push(b,E,M)}this.setIndex(d),this.setAttribute("position",new mi(x,3)),this.setAttribute("normal",new mi(_,3)),this.setAttribute("uv",new mi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.width,e.height,e.widthSegments,e.heightSegments)}}class _h extends qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=np,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jn extends _h{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ox extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=A_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bx extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Da(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function kx(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function zx(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function qu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function vp(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class ta{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Vx extends ta{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cu,endingEnd:cu}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case hu:s=e,o=2*t-n;break;case uu:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hu:a=e,l=2*n-t;break;case uu:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(n-t)/(i-t),_=x*x,p=_*x,m=-f*p+2*f*_-f*x,y=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*x+1,v=(-1-d)*p+(1.5+d)*_+.5*x,b=d*p-d*_;for(let E=0;E!==o;++E)s[E]=m*a[h+E]+y*a[c+E]+v*a[l+E]+b*a[u+E];return s}}class Gx extends ta{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)s[f]=a[c+f]*u+a[l+f]*h;return s}}class Hx extends ta{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Fn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Da(t,this.TimeBufferType),this.values=Da(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Da(e.times,Array),values:Da(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case jr:t=this.InterpolantFactoryMethodDiscrete;break;case Kr:t=this.InterpolantFactoryMethodLinear;break;case Uo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ve("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jr;case this.InterpolantFactoryMethodLinear:return Kr;case this.InterpolantFactoryMethodSmooth:return Uo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){He("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){He("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&kx(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){He("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Uo,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,f=u-n,d=u+n;for(let x=0;x!==n;++x){const _=t[u+x];if(_!==t[f+x]||_!==t[d+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Kr;class lr extends Fn{constructor(e,t,n){super(e,t,n)}}lr.prototype.ValueTypeName="bool";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=jr;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;class bp extends Fn{constructor(e,t,n,i){super(e,t,n,i)}}bp.prototype.ValueTypeName="color";class sr extends Fn{constructor(e,t,n,i){super(e,t,n,i)}}sr.prototype.ValueTypeName="number";class Wx extends ta{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Kn.slerpFlat(s,0,a,c-o,a,c,l);return s}}class rr extends Fn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Wx(this.times,this.values,this.getValueSize(),e)}}rr.prototype.ValueTypeName="quaternion";rr.prototype.InterpolantFactoryMethodSmooth=void 0;class cr extends Fn{constructor(e,t,n){super(e,t,n)}}cr.prototype.ValueTypeName="string";cr.prototype.ValueBufferType=Array;cr.prototype.DefaultInterpolation=jr;cr.prototype.InterpolantFactoryMethodLinear=void 0;cr.prototype.InterpolantFactoryMethodSmooth=void 0;class ar extends Fn{constructor(e,t,n,i){super(e,t,n,i)}}ar.prototype.ValueTypeName="vector";class Xx{constructor(e="",t=-1,n=[],i=T_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Nn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Yx(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Fn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=zx(l);l=qu(l,1,h),c=qu(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new sr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(ve("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return He("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,x,_){if(d.length!==0){const p=[],m=[];vp(d,p,m,x),p.length!==0&&_.push(new u(f,p,m))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let _=0;_<f[x].morphTargets.length;_++)d[f[x].morphTargets[_]]=-1;for(const _ in d){const p=[],m=[];for(let y=0;y!==f[x].morphTargets.length;++y){const v=f[x];p.push(v.time),m.push(v.morphTarget===_?1:0)}i.push(new sr(".morphTargetInfluence["+_+"]",p,m))}l=d.length*a}else{const d=".bones["+t[u].name+"]";n(ar,d+".position",f,"pos",i),n(rr,d+".quaternion",f,"rot",i),n(ar,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function qx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return sr;case"vector":case"vector2":case"vector3":case"vector4":return ar;case"color":return bp;case"quaternion":return rr;case"bool":case"boolean":return lr;case"string":return cr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Yx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=qx(r.type);if(r.times===void 0){const t=[],n=[];vp(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const fi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class jx{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],x=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Kx=new jx;class hr{constructor(e){this.manager=e!==void 0?e:Kx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}hr.DEFAULT_MATERIAL_NAME="__DEFAULT";const si={};class Zx extends Error{constructor(e,t){super(e),this.response=t}}class yp extends hr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=fi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(si[e]!==void 0){si[e].push({onLoad:t,onProgress:n,onError:i});return}si[e]=[],si[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ve("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=si[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,x=d!==0;let _=0;const p=new ReadableStream({start(m){y();function y(){u.read().then(({done:v,value:b})=>{if(v)m.close();else{_+=b.byteLength;const E=new ProgressEvent("progress",{lengthComputable:x,loaded:_,total:d});for(let M=0,w=h.length;M<w;M++){const C=h[M];C.onProgress&&C.onProgress(E)}m.enqueue(b),y()}},v=>{m.error(v)})}}});return new Response(p)}else throw new Zx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(x=>d.decode(x))}}}).then(c=>{fi.add(`file:${e}`,c);const h=si[e];delete si[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=si[e];if(h===void 0)throw this.manager.itemError(e),c;delete si[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ls=new WeakMap;class $x extends hr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=fi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Ls.get(a);u===void 0&&(u=[],Ls.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=Zr("img");function l(){h(),t&&t(this);const u=Ls.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}Ls.delete(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),fi.remove(`image:${e}`);const f=Ls.get(this)||[];for(let d=0;d<f.length;d++){const x=f[d];x.onError&&x.onError(u)}Ls.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),fi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Jx extends hr{constructor(e){super(e)}load(e,t,n,i){const s=new Pt,a=new $x(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class po extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ol=new Be,Yu=new F,ju=new F;class xh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ph,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Yu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yu),ju.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ju),t.updateMatrixWorld(),ol.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ol,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ol)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Qx extends xh{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=nr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class eg extends po{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Qx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ku=new Be,Tr=new F,ll=new F;class tg extends xh{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Tr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tr),ll.copy(n.position),ll.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ll),n.updateMatrixWorld(),i.makeTranslation(-Tr.x,-Tr.y,-Tr.z),Ku.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ku,n.coordinateSystem,n.reversedDepth)}}class ng extends po{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new tg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class gh extends fp{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ig extends xh{constructor(){super(new gh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dc extends po{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new ig}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sg extends po{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const cl=new WeakMap;class rg extends hr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ve("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ve("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=fi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{if(cl.has(a)===!0)i&&i(cl.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return fi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),cl.set(l,c),fi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});fi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class ag extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class og{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const vh="\\[\\]\\.:\\/",lg=new RegExp("["+vh+"]","g"),bh="[^"+vh+"]",cg="[^"+vh.replace("\\.","")+"]",hg=/((?:WC+[\/:])*)/.source.replace("WC",bh),ug=/(WCOD+)?/.source.replace("WCOD",cg),fg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bh),dg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bh),pg=new RegExp("^"+hg+ug+fg+dg+"$"),mg=["material","materials","bones","map"];class _g{constructor(e,t,n){const i=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lg,"")}static parseTrackName(e){const t=pg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);mg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;He("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=_g;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Zu{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ve(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class xg extends ds{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ve("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function $u(r,e,t,n){const i=gg(n);switch(t){case Qd:return r*e;case sh:return r*e/i.components*i.byteLength;case rh:return r*e/i.components*i.byteLength;case ah:return r*e*2/i.components*i.byteLength;case oh:return r*e*2/i.components*i.byteLength;case ep:return r*e*3/i.components*i.byteLength;case Tn:return r*e*4/i.components*i.byteLength;case lh:return r*e*4/i.components*i.byteLength;case ka:case za:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Va:case Ga:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ec:case nc:return Math.max(r,16)*Math.max(e,8)/4;case Ql:case tc:return Math.max(r,8)*Math.max(e,8)/2;case ic:case sc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case rc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case oc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case lc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case cc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case hc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case uc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case fc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case dc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case pc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case mc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case _c:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case xc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case gc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case vc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case bc:case yc:case Mc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Sc:case Tc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ec:case Ac:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gg(r){switch(r){case jn:case Kd:return{byteLength:1,components:1};case Wr:case Zd:case or:return{byteLength:2,components:1};case nh:case ih:return{byteLength:2,components:4};case cs:case th:case In:return{byteLength:4,components:1};case $d:case Jd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eh}}));typeof window<"u"&&(window.__THREE__?ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eh);function Mp(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function vg(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<u.length;d++){const x=u[f],_=u[d];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,x=u.length;d<x;d++){const _=u[d];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var bg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ag=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Cg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ig=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ng=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Hg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zg="gl_FragColor = linearToOutputTexel( gl_FragColor );",$g=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ev=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,av=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ov=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_v=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ev=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Av=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Iv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ov=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Kv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$v=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ib=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ab=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ob=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ub=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,db=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ab=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Db=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ib=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Nb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ub=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$b=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:bg,alphahash_pars_fragment:yg,alphamap_fragment:Mg,alphamap_pars_fragment:Sg,alphatest_fragment:Tg,alphatest_pars_fragment:Eg,aomap_fragment:Ag,aomap_pars_fragment:wg,batching_pars_vertex:Rg,batching_vertex:Cg,begin_vertex:Pg,beginnormal_vertex:Dg,bsdfs:Lg,iridescence_fragment:Ig,bumpmap_pars_fragment:Ng,clipping_planes_fragment:Ug,clipping_planes_pars_fragment:Fg,clipping_planes_pars_vertex:Og,clipping_planes_vertex:Bg,color_fragment:kg,color_pars_fragment:zg,color_pars_vertex:Vg,color_vertex:Gg,common:Hg,cube_uv_reflection_fragment:Wg,defaultnormal_vertex:Xg,displacementmap_pars_vertex:qg,displacementmap_vertex:Yg,emissivemap_fragment:jg,emissivemap_pars_fragment:Kg,colorspace_fragment:Zg,colorspace_pars_fragment:$g,envmap_fragment:Jg,envmap_common_pars_fragment:Qg,envmap_pars_fragment:ev,envmap_pars_vertex:tv,envmap_physical_pars_fragment:fv,envmap_vertex:nv,fog_vertex:iv,fog_pars_vertex:sv,fog_fragment:rv,fog_pars_fragment:av,gradientmap_pars_fragment:ov,lightmap_pars_fragment:lv,lights_lambert_fragment:cv,lights_lambert_pars_fragment:hv,lights_pars_begin:uv,lights_toon_fragment:dv,lights_toon_pars_fragment:pv,lights_phong_fragment:mv,lights_phong_pars_fragment:_v,lights_physical_fragment:xv,lights_physical_pars_fragment:gv,lights_fragment_begin:vv,lights_fragment_maps:bv,lights_fragment_end:yv,logdepthbuf_fragment:Mv,logdepthbuf_pars_fragment:Sv,logdepthbuf_pars_vertex:Tv,logdepthbuf_vertex:Ev,map_fragment:Av,map_pars_fragment:wv,map_particle_fragment:Rv,map_particle_pars_fragment:Cv,metalnessmap_fragment:Pv,metalnessmap_pars_fragment:Dv,morphinstance_vertex:Lv,morphcolor_vertex:Iv,morphnormal_vertex:Nv,morphtarget_pars_vertex:Uv,morphtarget_vertex:Fv,normal_fragment_begin:Ov,normal_fragment_maps:Bv,normal_pars_fragment:kv,normal_pars_vertex:zv,normal_vertex:Vv,normalmap_pars_fragment:Gv,clearcoat_normal_fragment_begin:Hv,clearcoat_normal_fragment_maps:Wv,clearcoat_pars_fragment:Xv,iridescence_pars_fragment:qv,opaque_fragment:Yv,packing:jv,premultiplied_alpha_fragment:Kv,project_vertex:Zv,dithering_fragment:$v,dithering_pars_fragment:Jv,roughnessmap_fragment:Qv,roughnessmap_pars_fragment:eb,shadowmap_pars_fragment:tb,shadowmap_pars_vertex:nb,shadowmap_vertex:ib,shadowmask_pars_fragment:sb,skinbase_vertex:rb,skinning_pars_vertex:ab,skinning_vertex:ob,skinnormal_vertex:lb,specularmap_fragment:cb,specularmap_pars_fragment:hb,tonemapping_fragment:ub,tonemapping_pars_fragment:fb,transmission_fragment:db,transmission_pars_fragment:pb,uv_pars_fragment:mb,uv_pars_vertex:_b,uv_vertex:xb,worldpos_vertex:gb,background_vert:vb,background_frag:bb,backgroundCube_vert:yb,backgroundCube_frag:Mb,cube_vert:Sb,cube_frag:Tb,depth_vert:Eb,depth_frag:Ab,distanceRGBA_vert:wb,distanceRGBA_frag:Rb,equirect_vert:Cb,equirect_frag:Pb,linedashed_vert:Db,linedashed_frag:Lb,meshbasic_vert:Ib,meshbasic_frag:Nb,meshlambert_vert:Ub,meshlambert_frag:Fb,meshmatcap_vert:Ob,meshmatcap_frag:Bb,meshnormal_vert:kb,meshnormal_frag:zb,meshphong_vert:Vb,meshphong_frag:Gb,meshphysical_vert:Hb,meshphysical_frag:Wb,meshtoon_vert:Xb,meshtoon_frag:qb,points_vert:Yb,points_frag:jb,shadow_vert:Kb,shadow_frag:Zb,sprite_vert:$b,sprite_frag:Jb},ae={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},zn={basic:{uniforms:Gt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Gt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Gt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Gt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Gt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Gt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Gt([ae.points,ae.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Gt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Gt([ae.common,ae.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Gt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Gt([ae.sprite,ae.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Gt([ae.common,ae.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Gt([ae.lights,ae.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};zn.physical={uniforms:Gt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const La={r:0,b:0,g:0},Ki=new Zn,Qb=new Be;function ey(r,e,t,n,i,s,a){const o=new Ie(0);let l=s===!0?0:1,c,h,u=null,f=0,d=null;function x(v){let b=v.isScene===!0?v.background:null;return b&&b.isTexture&&(b=(v.backgroundBlurriness>0?t:e).get(b)),b}function _(v){let b=!1;const E=x(v);E===null?m(o,l):E&&E.isColor&&(m(E,1),b=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(v,b){const E=x(b);E&&(E.isCubeTexture||E.mapping===uo)?(h===void 0&&(h=new En(new ea(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:ir(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ki.copy(b.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Qb.makeRotationFromEuler(Ki)),h.material.toneMapped=$e.getTransfer(E.colorSpace)!==st,(u!==E||f!==E.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new En(new fo(2,2),new vi({name:"BackgroundMaterial",uniforms:ir(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=$e.getTransfer(E.colorSpace)!==st,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,d=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,b){v.getRGB(La,up(r)),n.buffers.color.setClear(La.r,La.g,La.b,b,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,b=1){o.set(v),l=b,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(o,l)},render:_,addToRenderList:p,dispose:y}}function ty(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(T,P,N,I,B){let z=!1;const V=u(I,N,P);s!==V&&(s=V,c(s.object)),z=d(T,I,N,B),z&&x(T,I,N,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,b(T,P,N,I),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return r.createVertexArray()}function c(T){return r.bindVertexArray(T)}function h(T){return r.deleteVertexArray(T)}function u(T,P,N){const I=N.wireframe===!0;let B=n[T.id];B===void 0&&(B={},n[T.id]=B);let z=B[P.id];z===void 0&&(z={},B[P.id]=z);let V=z[I];return V===void 0&&(V=f(l()),z[I]=V),V}function f(T){const P=[],N=[],I=[];for(let B=0;B<t;B++)P[B]=0,N[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:I,object:T,attributes:{},index:null}}function d(T,P,N,I){const B=s.attributes,z=P.attributes;let V=0;const q=N.getAttributes();for(const G in q)if(q[G].location>=0){const Z=B[G];let ue=z[G];if(ue===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(ue=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(ue=T.instanceColor)),Z===void 0||Z.attribute!==ue||ue&&Z.data!==ue.data)return!0;V++}return s.attributesNum!==V||s.index!==I}function x(T,P,N,I){const B={},z=P.attributes;let V=0;const q=N.getAttributes();for(const G in q)if(q[G].location>=0){let Z=z[G];Z===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(Z=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(Z=T.instanceColor));const ue={};ue.attribute=Z,Z&&Z.data&&(ue.data=Z.data),B[G]=ue,V++}s.attributes=B,s.attributesNum=V,s.index=I}function _(){const T=s.newAttributes;for(let P=0,N=T.length;P<N;P++)T[P]=0}function p(T){m(T,0)}function m(T,P){const N=s.newAttributes,I=s.enabledAttributes,B=s.attributeDivisors;N[T]=1,I[T]===0&&(r.enableVertexAttribArray(T),I[T]=1),B[T]!==P&&(r.vertexAttribDivisor(T,P),B[T]=P)}function y(){const T=s.newAttributes,P=s.enabledAttributes;for(let N=0,I=P.length;N<I;N++)P[N]!==T[N]&&(r.disableVertexAttribArray(N),P[N]=0)}function v(T,P,N,I,B,z,V){V===!0?r.vertexAttribIPointer(T,P,N,B,z):r.vertexAttribPointer(T,P,N,I,B,z)}function b(T,P,N,I){_();const B=I.attributes,z=N.getAttributes(),V=P.defaultAttributeValues;for(const q in z){const G=z[q];if(G.location>=0){let $=B[q];if($===void 0&&(q==="instanceMatrix"&&T.instanceMatrix&&($=T.instanceMatrix),q==="instanceColor"&&T.instanceColor&&($=T.instanceColor)),$!==void 0){const Z=$.normalized,ue=$.itemSize,be=e.get($);if(be===void 0)continue;const ke=be.buffer,ze=be.type,Ze=be.bytesPerElement,j=ze===r.INT||ze===r.UNSIGNED_INT||$.gpuType===th;if($.isInterleavedBufferAttribute){const Q=$.data,de=Q.stride,Ue=$.offset;if(Q.isInstancedInterleavedBuffer){for(let ye=0;ye<G.locationSize;ye++)m(G.location+ye,Q.meshPerAttribute);T.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ye=0;ye<G.locationSize;ye++)p(G.location+ye);r.bindBuffer(r.ARRAY_BUFFER,ke);for(let ye=0;ye<G.locationSize;ye++)v(G.location+ye,ue/G.locationSize,ze,Z,de*Ze,(Ue+ue/G.locationSize*ye)*Ze,j)}else{if($.isInstancedBufferAttribute){for(let Q=0;Q<G.locationSize;Q++)m(G.location+Q,$.meshPerAttribute);T.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Q=0;Q<G.locationSize;Q++)p(G.location+Q);r.bindBuffer(r.ARRAY_BUFFER,ke);for(let Q=0;Q<G.locationSize;Q++)v(G.location+Q,ue/G.locationSize,ze,Z,ue*Ze,ue/G.locationSize*Q*Ze,j)}}else if(V!==void 0){const Z=V[q];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(G.location,Z);break;case 3:r.vertexAttrib3fv(G.location,Z);break;case 4:r.vertexAttrib4fv(G.location,Z);break;default:r.vertexAttrib1fv(G.location,Z)}}}}y()}function E(){C();for(const T in n){const P=n[T];for(const N in P){const I=P[N];for(const B in I)h(I[B].object),delete I[B];delete P[N]}delete n[T]}}function M(T){if(n[T.id]===void 0)return;const P=n[T.id];for(const N in P){const I=P[N];for(const B in I)h(I[B].object),delete I[B];delete P[N]}delete n[T.id]}function w(T){for(const P in n){const N=n[P];if(N[T.id]===void 0)continue;const I=N[T.id];for(const B in I)h(I[B].object),delete I[B];delete N[T.id]}}function C(){g(),a=!0,s!==i&&(s=i,c(s.object))}function g(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:g,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function ny(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let x=0;x<u;x++)d+=h[x];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<c.length;x++)a(c[x],h[x],f[x]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let x=0;for(let _=0;_<u;_++)x+=h[_]*f[_];t.update(x,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function iy(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==Tn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===or&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==jn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==In&&!C)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(ve("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=x>0,M=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:E,maxSamples:M}}function sy(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Ri,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const x=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=r.get(u);if(!i||x===null||x.length===0||s&&!p)s?h(null):c();else{const y=s?0:n,v=y*4;let b=m.clippingState||null;l.value=b,b=h(x,f,v,d);for(let E=0;E!==v;++E)b[E]=t[E];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,x){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,x!==!0||p===null){const m=d+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,b=d;v!==_;++v,b+=4)a.copy(u[v]).applyMatrix4(y,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function ry(r){let e=new WeakMap;function t(a,o){return o===$l?a.mapping=Qs:o===Jl&&(a.mapping=er),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===$l||o===Jl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Mx(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ni=4,Ju=[.125,.215,.35,.446,.526,.582],es=20,ay=256,Er=new gh,Qu=new Ie;let hl=null,ul=0,fl=0,dl=!1;const oy=new F;class ef{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=oy}=s;hl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hl,ul,fl),this._renderer.xr.enabled=dl,e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qs||e.mapping===er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:or,format:Tn,colorSpace:jt,depthBuffer:!1},i=tf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tf(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ly(s)),this._blurMaterial=hy(s,e,t),this._ggxMaterial=cy(s,e,t)}return i}_compileMaterial(e){const t=new En(new Un,e);this._renderer.compile(t,Er)}_sceneToCubeUV(e,t,n,i,s){const l=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Qu),u.toneMapping=Oi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new En(new ea,new ns({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let m=!1;const y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,m=!0):(p.color.copy(Qu),m=!0);for(let v=0;v<6;v++){const b=v%3;b===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[v],s.y,s.z)):b===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[v]));const E=this._cubeSize;Is(i,b*E,v>2?E:0,E,E),u.setRenderTarget(i),m&&u.render(_,l),u.render(e,l)}u.toneMapping=d,u.autoClear=f,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Qs||e.mapping===er;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nf());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Is(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Er)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=.05+c*.95,d=u*f,{_lodMax:x}=this,_=this._sizeLods[n],p=3*_*(n>x-Ni?n-x+Ni:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=x-t,Is(s,p,m,3*_,2*_),i.setRenderTarget(s),i.render(o,Er),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-n,Is(e,p,m,3*_,2*_),i.setRenderTarget(e),i.render(o,Er)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&He("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*es-1),_=s/x,p=isFinite(s)?1+Math.floor(h*_):es;p>es&&ve(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${es}`);const m=[];let y=0;for(let w=0;w<es;++w){const C=w/_,g=Math.exp(-C*C/2);m.push(g),w===0?y+=g:w<p&&(y+=2*g)}for(let w=0;w<m.length;w++)m[w]=m[w]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=x,f.mipInt.value=v-n;const b=this._sizeLods[i],E=3*b*(i>v-Ni?i-v+Ni:0),M=4*(this._cubeSize-b);Is(t,E,M,3*b,2*b),l.setRenderTarget(t),l.render(u,Er)}}function ly(r){const e=[],t=[],n=[];let i=r;const s=r-Ni+1+Ju.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Ni?l=Ju[a-r+Ni-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,x=6,_=3,p=2,m=1,y=new Float32Array(_*x*d),v=new Float32Array(p*x*d),b=new Float32Array(m*x*d);for(let M=0;M<d;M++){const w=M%3*2/3-1,C=M>2?0:-1,g=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];y.set(g,_*x*M),v.set(f,p*x*M);const T=[M,M,M,M,M,M];b.set(T,m*x*M)}const E=new Un;E.setAttribute("position",new Yt(y,_)),E.setAttribute("uv",new Yt(v,p)),E.setAttribute("faceIndex",new Yt(b,m)),n.push(new En(E,null)),i>Ni&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function tf(r,e,t){const n=new hs(r,e,t);return n.texture.mapping=uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Is(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function cy(r,e,t){return new vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ay,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function hy(r,e,t){const n=new Float32Array(es),i=new F(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function nf(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function sf(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function mo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uy(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===$l||l===Jl,h=l===Qs||l===er;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new ef(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new ef(r)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function fy(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&$r("WebGLRenderer: "+n+" extension not supported."),i}}}function dy(r,e,t,n){const i={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,x=u.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let v=0,b=y.length;v<b;v+=3){const E=y[v+0],M=y[v+1],w=y[v+2];f.push(E,M,M,w,w,E)}}else if(x!==void 0){const y=x.array;_=x.version;for(let v=0,b=y.length/3-1;v<b;v+=3){const E=v+0,M=v+1,w=v+2;f.push(E,M,M,w,w,E)}}else return;const p=new(sp(f)?hp:cp)(f,1);p.version=_;const m=s.get(u);m&&e.remove(m),s.set(u,p)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function py(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*a),t.update(d,n,1)}function c(f,d,x){x!==0&&(r.drawElementsInstanced(n,d,s,f*a,x),t.update(d,n,x))}function h(f,d,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,x);let p=0;for(let m=0;m<x;m++)p+=d[m];t.update(p,n,1)}function u(f,d,x,_){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/a,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,x);let m=0;for(let y=0;y<x;y++)m+=d[y]*_[y];t.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function my(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function _y(r,e,t){const n=new WeakMap,i=new Qe;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let g=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",g)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;d===!0&&(v=1),x===!0&&(v=2),_===!0&&(v=3);let b=o.attributes.position.count*v,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const M=new Float32Array(b*E*4*u),w=new ap(M,b,E,u);w.type=In,w.needsUpdate=!0;const C=v*4;for(let T=0;T<u;T++){const P=p[T],N=m[T],I=y[T],B=b*E*4*T;for(let z=0;z<P.count;z++){const V=z*C;d===!0&&(i.fromBufferAttribute(P,z),M[B+V+0]=i.x,M[B+V+1]=i.y,M[B+V+2]=i.z,M[B+V+3]=0),x===!0&&(i.fromBufferAttribute(N,z),M[B+V+4]=i.x,M[B+V+5]=i.y,M[B+V+6]=i.z,M[B+V+7]=0),_===!0&&(i.fromBufferAttribute(I,z),M[B+V+8]=i.x,M[B+V+9]=i.y,M[B+V+10]=i.z,M[B+V+11]=I.itemSize===4?i.w:1)}}f={count:u,texture:w,size:new De(b,E)},n.set(o,f),o.addEventListener("dispose",g)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const x=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",x),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function xy(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Sp=new Pt,rf=new xp(1,1),Tp=new ap,Ep=new rx,Ap=new dp,af=[],of=[],lf=new Float32Array(16),cf=new Float32Array(9),hf=new Float32Array(4);function ur(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=af[i];if(s===void 0&&(s=new Float32Array(i),af[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function wt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Rt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function _o(r,e){let t=of[e];t===void 0&&(t=new Int32Array(e),of[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function gy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function vy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;r.uniform2fv(this.addr,e),Rt(t,e)}}function by(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;r.uniform3fv(this.addr,e),Rt(t,e)}}function yy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;r.uniform4fv(this.addr,e),Rt(t,e)}}function My(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;hf.set(n),r.uniformMatrix2fv(this.addr,!1,hf),Rt(t,n)}}function Sy(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;cf.set(n),r.uniformMatrix3fv(this.addr,!1,cf),Rt(t,n)}}function Ty(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;lf.set(n),r.uniformMatrix4fv(this.addr,!1,lf),Rt(t,n)}}function Ey(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Ay(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;r.uniform2iv(this.addr,e),Rt(t,e)}}function wy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;r.uniform3iv(this.addr,e),Rt(t,e)}}function Ry(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;r.uniform4iv(this.addr,e),Rt(t,e)}}function Cy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Py(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;r.uniform2uiv(this.addr,e),Rt(t,e)}}function Dy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;r.uniform3uiv(this.addr,e),Rt(t,e)}}function Ly(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;r.uniform4uiv(this.addr,e),Rt(t,e)}}function Iy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(rf.compareFunction=ip,s=rf):s=Sp,t.setTexture2D(e||s,i)}function Ny(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ep,i)}function Uy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ap,i)}function Fy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Tp,i)}function Oy(r){switch(r){case 5126:return gy;case 35664:return vy;case 35665:return by;case 35666:return yy;case 35674:return My;case 35675:return Sy;case 35676:return Ty;case 5124:case 35670:return Ey;case 35667:case 35671:return Ay;case 35668:case 35672:return wy;case 35669:case 35673:return Ry;case 5125:return Cy;case 36294:return Py;case 36295:return Dy;case 36296:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return Iy;case 35679:case 36299:case 36307:return Ny;case 35680:case 36300:case 36308:case 36293:return Uy;case 36289:case 36303:case 36311:case 36292:return Fy}}function By(r,e){r.uniform1fv(this.addr,e)}function ky(r,e){const t=ur(e,this.size,2);r.uniform2fv(this.addr,t)}function zy(r,e){const t=ur(e,this.size,3);r.uniform3fv(this.addr,t)}function Vy(r,e){const t=ur(e,this.size,4);r.uniform4fv(this.addr,t)}function Gy(r,e){const t=ur(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Hy(r,e){const t=ur(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Wy(r,e){const t=ur(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Xy(r,e){r.uniform1iv(this.addr,e)}function qy(r,e){r.uniform2iv(this.addr,e)}function Yy(r,e){r.uniform3iv(this.addr,e)}function jy(r,e){r.uniform4iv(this.addr,e)}function Ky(r,e){r.uniform1uiv(this.addr,e)}function Zy(r,e){r.uniform2uiv(this.addr,e)}function $y(r,e){r.uniform3uiv(this.addr,e)}function Jy(r,e){r.uniform4uiv(this.addr,e)}function Qy(r,e,t){const n=this.cache,i=e.length,s=_o(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Sp,s[a])}function eM(r,e,t){const n=this.cache,i=e.length,s=_o(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ep,s[a])}function tM(r,e,t){const n=this.cache,i=e.length,s=_o(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Ap,s[a])}function nM(r,e,t){const n=this.cache,i=e.length,s=_o(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Tp,s[a])}function iM(r){switch(r){case 5126:return By;case 35664:return ky;case 35665:return zy;case 35666:return Vy;case 35674:return Gy;case 35675:return Hy;case 35676:return Wy;case 5124:case 35670:return Xy;case 35667:case 35671:return qy;case 35668:case 35672:return Yy;case 35669:case 35673:return jy;case 5125:return Ky;case 36294:return Zy;case 36295:return $y;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Qy;case 35679:case 36299:case 36307:return eM;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return nM}}class sM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Oy(t.type)}}class rM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iM(t.type)}}class aM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const pl=/(\w+)(\])?(\[|\.)?/g;function uf(r,e){r.seq.push(e),r.map[e.id]=e}function oM(r,e,t){const n=r.name,i=n.length;for(pl.lastIndex=0;;){const s=pl.exec(n),a=pl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){uf(t,c===void 0?new sM(o,r,e):new rM(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new aM(o),uf(t,u)),t=u}}}class Ha{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);oM(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function ff(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const lM=37297;let cM=0;function hM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const df=new Fe;function uM(r){$e._getMatrix(df,$e.workingColorSpace,r);const e=`mat3( ${df.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(r)){case eo:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return ve("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function pf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+hM(r.getShaderSource(e),o)}else return s}function fM(r,e){const t=uM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function dM(r,e){let t;switch(e){case __:t="Linear";break;case x_:t="Reinhard";break;case g_:t="Cineon";break;case v_:t="ACESFilmic";break;case y_:t="AgX";break;case M_:t="Neutral";break;case b_:t="Custom";break;default:ve("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ia=new F;function pM(){$e.getLuminanceCoefficients(Ia);const r=Ia.x.toFixed(4),e=Ia.y.toFixed(4),t=Ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function _M(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Pr(r){return r!==""}function mf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _f(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lc(r){return r.replace(gM,bM)}const vM=new Map;function bM(r,e){let t=Oe[e];if(t===void 0){const n=vM.get(e);if(n!==void 0)t=Oe[n],ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Lc(t)}const yM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xf(r){return r.replace(yM,MM)}function MM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function gf(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function SM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Xd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===K0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function TM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Qs:case er:e="ENVMAP_TYPE_CUBE";break;case uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function EM(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case er:e="ENVMAP_MODE_REFRACTION";break}return e}function AM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case qd:e="ENVMAP_BLENDING_MULTIPLY";break;case p_:e="ENVMAP_BLENDING_MIX";break;case m_:e="ENVMAP_BLENDING_ADD";break}return e}function wM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function RM(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=SM(t),c=TM(t),h=EM(t),u=AM(t),f=wM(t),d=mM(t),x=_M(s),_=i.createProgram();let p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Pr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Pr).join(`
`),m.length>0&&(m+=`
`)):(p=[gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),m=[gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Oi?dM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,fM("linearToOutputTexel",t.outputColorSpace),pM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pr).join(`
`)),a=Lc(a),a=mf(a,t),a=_f(a,t),o=Lc(o),o=mf(o,t),o=_f(o,t),a=xf(a),o=xf(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=y+p+a,b=y+m+o,E=ff(i,i.VERTEX_SHADER,v),M=ff(i,i.FRAGMENT_SHADER,b);i.attachShader(_,E),i.attachShader(_,M),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(P){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(_)||"",I=i.getShaderInfoLog(E)||"",B=i.getShaderInfoLog(M)||"",z=N.trim(),V=I.trim(),q=B.trim();let G=!0,$=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,E,M);else{const Z=pf(i,E,"vertex"),ue=pf(i,M,"fragment");He("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+Z+`
`+ue)}else z!==""?ve("WebGLProgram: Program Info Log:",z):(V===""||q==="")&&($=!1);$&&(P.diagnostics={runnable:G,programLog:z,vertexShader:{log:V,prefix:p},fragmentShader:{log:q,prefix:m}})}i.deleteShader(E),i.deleteShader(M),C=new Ha(i,_),g=xM(i,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let g;this.getAttributes=function(){return g===void 0&&w(this),g};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(_,lM)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=M,this}let CM=0;class PM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new DM(e),t.set(e,n)),n}}class DM{constructor(e){this.id=CM++,this.code=e,this.usedTimes=0}}function LM(r,e,t,n,i,s,a){const o=new op,l=new PM,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return c.add(g),g===0?"uv":`uv${g}`}function p(g,T,P,N,I){const B=N.fog,z=I.geometry,V=g.isMeshStandardMaterial?N.environment:null,q=(g.isMeshStandardMaterial?t:e).get(g.envMap||V),G=q&&q.mapping===uo?q.image.height:null,$=x[g.type];g.precision!==null&&(d=i.getMaxPrecision(g.precision),d!==g.precision&&ve("WebGLProgram.getParameters:",g.precision,"not supported, using",d,"instead."));const Z=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ue=Z!==void 0?Z.length:0;let be=0;z.morphAttributes.position!==void 0&&(be=1),z.morphAttributes.normal!==void 0&&(be=2),z.morphAttributes.color!==void 0&&(be=3);let ke,ze,Ze,j;if($){const nt=zn[$];ke=nt.vertexShader,ze=nt.fragmentShader}else ke=g.vertexShader,ze=g.fragmentShader,l.update(g),Ze=l.getVertexShaderID(g),j=l.getFragmentShaderID(g);const Q=r.getRenderTarget(),de=r.state.buffers.depth.getReversed(),Ue=I.isInstancedMesh===!0,ye=I.isBatchedMesh===!0,Xe=!!g.map,Lt=!!g.matcap,Ge=!!q,ut=!!g.aoMap,D=!!g.lightMap,qe=!!g.bumpMap,Ye=!!g.normalMap,ct=!!g.displacementMap,_e=!!g.emissiveMap,dt=!!g.metalnessMap,Se=!!g.roughnessMap,Ne=g.anisotropy>0,R=g.clearcoat>0,S=g.dispersion>0,k=g.iridescence>0,Y=g.sheen>0,J=g.transmission>0,X=Ne&&!!g.anisotropyMap,ge=R&&!!g.clearcoatMap,oe=R&&!!g.clearcoatNormalMap,Te=R&&!!g.clearcoatRoughnessMap,xe=k&&!!g.iridescenceMap,ee=k&&!!g.iridescenceThicknessMap,ie=Y&&!!g.sheenColorMap,Re=Y&&!!g.sheenRoughnessMap,Ae=!!g.specularMap,he=!!g.specularColorMap,Pe=!!g.specularIntensityMap,L=J&&!!g.transmissionMap,le=J&&!!g.thicknessMap,se=!!g.gradientMap,re=!!g.alphaMap,te=g.alphaTest>0,K=!!g.alphaHash,pe=!!g.extensions;let Le=Oi;g.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Le=r.toneMapping);const ht={shaderID:$,shaderType:g.type,shaderName:g.name,vertexShader:ke,fragmentShader:ze,defines:g.defines,customVertexShaderID:Ze,customFragmentShaderID:j,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:d,batching:ye,batchingColor:ye&&I._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&I.instanceColor!==null,instancingMorph:Ue&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?r.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:jt,alphaToCoverage:!!g.alphaToCoverage,map:Xe,matcap:Lt,envMap:Ge,envMapMode:Ge&&q.mapping,envMapCubeUVHeight:G,aoMap:ut,lightMap:D,bumpMap:qe,normalMap:Ye,displacementMap:f&&ct,emissiveMap:_e,normalMapObjectSpace:Ye&&g.normalMapType===R_,normalMapTangentSpace:Ye&&g.normalMapType===np,metalnessMap:dt,roughnessMap:Se,anisotropy:Ne,anisotropyMap:X,clearcoat:R,clearcoatMap:ge,clearcoatNormalMap:oe,clearcoatRoughnessMap:Te,dispersion:S,iridescence:k,iridescenceMap:xe,iridescenceThicknessMap:ee,sheen:Y,sheenColorMap:ie,sheenRoughnessMap:Re,specularMap:Ae,specularColorMap:he,specularIntensityMap:Pe,transmission:J,transmissionMap:L,thicknessMap:le,gradientMap:se,opaque:g.transparent===!1&&g.blending===Gs&&g.alphaToCoverage===!1,alphaMap:re,alphaTest:te,alphaHash:K,combine:g.combine,mapUv:Xe&&_(g.map.channel),aoMapUv:ut&&_(g.aoMap.channel),lightMapUv:D&&_(g.lightMap.channel),bumpMapUv:qe&&_(g.bumpMap.channel),normalMapUv:Ye&&_(g.normalMap.channel),displacementMapUv:ct&&_(g.displacementMap.channel),emissiveMapUv:_e&&_(g.emissiveMap.channel),metalnessMapUv:dt&&_(g.metalnessMap.channel),roughnessMapUv:Se&&_(g.roughnessMap.channel),anisotropyMapUv:X&&_(g.anisotropyMap.channel),clearcoatMapUv:ge&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(g.sheenRoughnessMap.channel),specularMapUv:Ae&&_(g.specularMap.channel),specularColorMapUv:he&&_(g.specularColorMap.channel),specularIntensityMapUv:Pe&&_(g.specularIntensityMap.channel),transmissionMapUv:L&&_(g.transmissionMap.channel),thicknessMapUv:le&&_(g.thicknessMap.channel),alphaMapUv:re&&_(g.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ye||Ne),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(Xe||re),fog:!!B,useFog:g.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:g.flatShading===!0&&g.wireframe===!1,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:de,skinning:I.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:be,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Le,decodeVideoTexture:Xe&&g.map.isVideoTexture===!0&&$e.getTransfer(g.map.colorSpace)===st,decodeVideoTextureEmissive:_e&&g.emissiveMap.isVideoTexture===!0&&$e.getTransfer(g.emissiveMap.colorSpace)===st,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Gn,flipSided:g.side===sn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:pe&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&g.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function m(g){const T=[];if(g.shaderID?T.push(g.shaderID):(T.push(g.customVertexShaderID),T.push(g.customFragmentShaderID)),g.defines!==void 0)for(const P in g.defines)T.push(P),T.push(g.defines[P]);return g.isRawShaderMaterial===!1&&(y(T,g),v(T,g),T.push(r.outputColorSpace)),T.push(g.customProgramCacheKey),T.join()}function y(g,T){g.push(T.precision),g.push(T.outputColorSpace),g.push(T.envMapMode),g.push(T.envMapCubeUVHeight),g.push(T.mapUv),g.push(T.alphaMapUv),g.push(T.lightMapUv),g.push(T.aoMapUv),g.push(T.bumpMapUv),g.push(T.normalMapUv),g.push(T.displacementMapUv),g.push(T.emissiveMapUv),g.push(T.metalnessMapUv),g.push(T.roughnessMapUv),g.push(T.anisotropyMapUv),g.push(T.clearcoatMapUv),g.push(T.clearcoatNormalMapUv),g.push(T.clearcoatRoughnessMapUv),g.push(T.iridescenceMapUv),g.push(T.iridescenceThicknessMapUv),g.push(T.sheenColorMapUv),g.push(T.sheenRoughnessMapUv),g.push(T.specularMapUv),g.push(T.specularColorMapUv),g.push(T.specularIntensityMapUv),g.push(T.transmissionMapUv),g.push(T.thicknessMapUv),g.push(T.combine),g.push(T.fogExp2),g.push(T.sizeAttenuation),g.push(T.morphTargetsCount),g.push(T.morphAttributeCount),g.push(T.numDirLights),g.push(T.numPointLights),g.push(T.numSpotLights),g.push(T.numSpotLightMaps),g.push(T.numHemiLights),g.push(T.numRectAreaLights),g.push(T.numDirLightShadows),g.push(T.numPointLightShadows),g.push(T.numSpotLightShadows),g.push(T.numSpotLightShadowsWithMaps),g.push(T.numLightProbes),g.push(T.shadowMapType),g.push(T.toneMapping),g.push(T.numClippingPlanes),g.push(T.numClipIntersection),g.push(T.depthPacking)}function v(g,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),T.gradientMap&&o.enable(22),g.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),g.push(o.mask)}function b(g){const T=x[g.type];let P;if(T){const N=zn[T];P=gx.clone(N.uniforms)}else P=g.uniforms;return P}function E(g,T){let P;for(let N=0,I=h.length;N<I;N++){const B=h[N];if(B.cacheKey===T){P=B,++P.usedTimes;break}}return P===void 0&&(P=new RM(r,T,g,s),h.push(P)),P}function M(g){if(--g.usedTimes===0){const T=h.indexOf(g);h[T]=h[h.length-1],h.pop(),g.destroy()}}function w(g){l.remove(g)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:b,acquireProgram:E,releaseProgram:M,releaseShaderCache:w,programs:h,dispose:C}}function IM(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function NM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function vf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function bf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,d,x,_,p){let m=r[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:x,renderOrder:u.renderOrder,z:_,group:p},r[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=x,m.renderOrder=u.renderOrder,m.z=_,m.group=p),e++,m}function o(u,f,d,x,_,p){const m=a(u,f,d,x,_,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(u,f,d,x,_,p){const m=a(u,f,d,x,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||NM),n.length>1&&n.sort(f||vf),i.length>1&&i.sort(f||vf)}function h(){for(let u=e,f=r.length;u<f;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function UM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new bf,r.set(n,[a])):i>=s.length?(a=new bf,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function FM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ie};break;case"SpotLight":t={position:new F,direction:new F,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function OM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let BM=0;function kM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function zM(r){const e=new FM,t=OM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const i=new F,s=new Be,a=new Be;function o(c){let h=0,u=0,f=0;for(let g=0;g<9;g++)n.probe[g].set(0,0,0);let d=0,x=0,_=0,p=0,m=0,y=0,v=0,b=0,E=0,M=0,w=0;c.sort(kM);for(let g=0,T=c.length;g<T;g++){const P=c[g],N=P.color,I=P.intensity,B=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*I,u+=N.g*I,f+=N.b*I;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],I);w++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,G=t.get(P);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=z,n.directionalShadowMatrix[d]=P.shadow.matrix,y++}n.directional[d]=V,d++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(N).multiplyScalar(I),V.distance=B,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[_]=V;const q=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,q.updateMatrices(P),P.castShadow&&M++),n.spotLightMatrix[_]=q.matrix,P.castShadow){const G=t.get(P);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=z,b++}_++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(N).multiplyScalar(I),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=V,p++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const q=P.shadow,G=t.get(P);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,G.shadowCameraNear=q.camera.near,G.shadowCameraFar=q.camera.far,n.pointShadow[x]=G,n.pointShadowMap[x]=z,n.pointShadowMatrix[x]=P.shadow.matrix,v++}n.point[x]=V,x++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(I),V.groundColor.copy(P.groundColor).multiplyScalar(I),n.hemi[m]=V,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==x||C.spotLength!==_||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==y||C.numPointShadows!==v||C.numSpotShadows!==b||C.numSpotMaps!==E||C.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=b+E-M,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=w,C.directionalLength=d,C.pointLength=x,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=y,C.numPointShadows=v,C.numSpotShadows=b,C.numSpotMaps=E,C.numLightProbes=w,n.version=BM++)}function l(c,h){let u=0,f=0,d=0,x=0,_=0;const p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const v=c[m];if(v.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),u++}else if(v.isSpotLight){const b=n.spot[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),d++}else if(v.isRectAreaLight){const b=n.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),a.identity(),s.copy(v.matrixWorld),s.premultiply(p),a.extractRotation(s),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function yf(r){const e=new zM(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function VM(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new yf(r),e.set(i,[o])):s>=a.length?(o=new yf(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const GM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WM(r,e,t){let n=new ph;const i=new De,s=new De,a=new Qe,o=new Ox({depthPacking:w_}),l=new Bx,c={},h=t.maxTextureSize,u={[gi]:sn,[sn]:gi,[Gn]:Gn},f=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:GM,fragmentShader:HM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const x=new Un;x.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new En(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xd;let m=this.type;this.render=function(M,w,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const g=r.getRenderTarget(),T=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),N=r.state;N.setBlending(di),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const I=m!==ai&&this.type===ai,B=m===ai&&this.type!==ai;for(let z=0,V=M.length;z<V;z++){const q=M[z],G=q.shadow;if(G===void 0){ve("WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const $=G.getFrameExtents();if(i.multiply($),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/$.x),i.x=s.x*$.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/$.y),i.y=s.y*$.y,G.mapSize.y=s.y)),G.map===null||I===!0||B===!0){const ue=this.type!==ai?{minFilter:qt,magFilter:qt}:{};G.map!==null&&G.map.dispose(),G.map=new hs(i.x,i.y,ue),G.map.texture.name=q.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const Z=G.getViewportCount();for(let ue=0;ue<Z;ue++){const be=G.getViewport(ue);a.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),N.viewport(a),G.updateMatrices(q,ue),n=G.getFrustum(),b(w,C,G.camera,q,this.type)}G.isPointLightShadow!==!0&&this.type===ai&&y(G,C),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(g,T,P)};function y(M,w){const C=e.update(_);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new hs(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(w,null,C,f,_,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(w,null,C,d,_,null)}function v(M,w,C,g){let T=null;const P=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)T=P;else if(T=C.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const N=T.uuid,I=w.uuid;let B=c[N];B===void 0&&(B={},c[N]=B);let z=B[I];z===void 0&&(z=T.clone(),B[I]=z,w.addEventListener("dispose",E)),T=z}if(T.visible=w.visible,T.wireframe=w.wireframe,g===ai?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:u[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,C.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const N=r.properties.get(T);N.light=C}return T}function b(M,w,C,g,T){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&T===ai)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const I=e.update(M),B=M.material;if(Array.isArray(B)){const z=I.groups;for(let V=0,q=z.length;V<q;V++){const G=z[V],$=B[G.materialIndex];if($&&$.visible){const Z=v(M,$,g,T);M.onBeforeShadow(r,M,w,C,I,Z,G),r.renderBufferDirect(C,null,I,Z,M,G),M.onAfterShadow(r,M,w,C,I,Z,G)}}}else if(B.visible){const z=v(M,B,g,T);M.onBeforeShadow(r,M,w,C,I,z,null),r.renderBufferDirect(C,null,I,z,M,null),M.onAfterShadow(r,M,w,C,I,z,null)}}const N=M.children;for(let I=0,B=N.length;I<B;I++)b(N[I],w,C,g,T)}function E(M){M.target.removeEventListener("dispose",E);for(const C in c){const g=c[C],T=M.target.uuid;T in g&&(g[T].dispose(),delete g[T])}}}const XM={[Wl]:Xl,[ql]:Kl,[Yl]:Zl,[Js]:jl,[Xl]:Wl,[Kl]:ql,[Zl]:Yl,[jl]:Js};function qM(r,e){function t(){let L=!1;const le=new Qe;let se=null;const re=new Qe(0,0,0,0);return{setMask:function(te){se!==te&&!L&&(r.colorMask(te,te,te,te),se=te)},setLocked:function(te){L=te},setClear:function(te,K,pe,Le,ht){ht===!0&&(te*=Le,K*=Le,pe*=Le),le.set(te,K,pe,Le),re.equals(le)===!1&&(r.clearColor(te,K,pe,Le),re.copy(le))},reset:function(){L=!1,se=null,re.set(-1,0,0,0)}}}function n(){let L=!1,le=!1,se=null,re=null,te=null;return{setReversed:function(K){if(le!==K){const pe=e.get("EXT_clip_control");K?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),le=K;const Le=te;te=null,this.setClear(Le)}},getReversed:function(){return le},setTest:function(K){K?Q(r.DEPTH_TEST):de(r.DEPTH_TEST)},setMask:function(K){se!==K&&!L&&(r.depthMask(K),se=K)},setFunc:function(K){if(le&&(K=XM[K]),re!==K){switch(K){case Wl:r.depthFunc(r.NEVER);break;case Xl:r.depthFunc(r.ALWAYS);break;case ql:r.depthFunc(r.LESS);break;case Js:r.depthFunc(r.LEQUAL);break;case Yl:r.depthFunc(r.EQUAL);break;case jl:r.depthFunc(r.GEQUAL);break;case Kl:r.depthFunc(r.GREATER);break;case Zl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}re=K}},setLocked:function(K){L=K},setClear:function(K){te!==K&&(le&&(K=1-K),r.clearDepth(K),te=K)},reset:function(){L=!1,se=null,re=null,te=null,le=!1}}}function i(){let L=!1,le=null,se=null,re=null,te=null,K=null,pe=null,Le=null,ht=null;return{setTest:function(nt){L||(nt?Q(r.STENCIL_TEST):de(r.STENCIL_TEST))},setMask:function(nt){le!==nt&&!L&&(r.stencilMask(nt),le=nt)},setFunc:function(nt,On,An){(se!==nt||re!==On||te!==An)&&(r.stencilFunc(nt,On,An),se=nt,re=On,te=An)},setOp:function(nt,On,An){(K!==nt||pe!==On||Le!==An)&&(r.stencilOp(nt,On,An),K=nt,pe=On,Le=An)},setLocked:function(nt){L=nt},setClear:function(nt){ht!==nt&&(r.clearStencil(nt),ht=nt)},reset:function(){L=!1,le=null,se=null,re=null,te=null,K=null,pe=null,Le=null,ht=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],x=null,_=!1,p=null,m=null,y=null,v=null,b=null,E=null,M=null,w=new Ie(0,0,0),C=0,g=!1,T=null,P=null,N=null,I=null,B=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,q=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=q>=1):G.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=q>=2);let $=null,Z={};const ue=r.getParameter(r.SCISSOR_BOX),be=r.getParameter(r.VIEWPORT),ke=new Qe().fromArray(ue),ze=new Qe().fromArray(be);function Ze(L,le,se,re){const te=new Uint8Array(4),K=r.createTexture();r.bindTexture(L,K),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let pe=0;pe<se;pe++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,re,0,r.RGBA,r.UNSIGNED_BYTE,te):r.texImage2D(le+pe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,te);return K}const j={};j[r.TEXTURE_2D]=Ze(r.TEXTURE_2D,r.TEXTURE_2D,1),j[r.TEXTURE_CUBE_MAP]=Ze(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[r.TEXTURE_2D_ARRAY]=Ze(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),j[r.TEXTURE_3D]=Ze(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(r.DEPTH_TEST),a.setFunc(Js),qe(!1),Ye(su),Q(r.CULL_FACE),ut(di);function Q(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function de(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function Ue(L,le){return u[L]!==le?(r.bindFramebuffer(L,le),u[L]=le,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=le),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=le),!0):!1}function ye(L,le){let se=d,re=!1;if(L){se=f.get(le),se===void 0&&(se=[],f.set(le,se));const te=L.textures;if(se.length!==te.length||se[0]!==r.COLOR_ATTACHMENT0){for(let K=0,pe=te.length;K<pe;K++)se[K]=r.COLOR_ATTACHMENT0+K;se.length=te.length,re=!0}}else se[0]!==r.BACK&&(se[0]=r.BACK,re=!0);re&&r.drawBuffers(se)}function Xe(L){return x!==L?(r.useProgram(L),x=L,!0):!1}const Lt={[Qi]:r.FUNC_ADD,[$0]:r.FUNC_SUBTRACT,[J0]:r.FUNC_REVERSE_SUBTRACT};Lt[Q0]=r.MIN,Lt[e_]=r.MAX;const Ge={[t_]:r.ZERO,[n_]:r.ONE,[i_]:r.SRC_COLOR,[Gl]:r.SRC_ALPHA,[c_]:r.SRC_ALPHA_SATURATE,[o_]:r.DST_COLOR,[r_]:r.DST_ALPHA,[s_]:r.ONE_MINUS_SRC_COLOR,[Hl]:r.ONE_MINUS_SRC_ALPHA,[l_]:r.ONE_MINUS_DST_COLOR,[a_]:r.ONE_MINUS_DST_ALPHA,[h_]:r.CONSTANT_COLOR,[u_]:r.ONE_MINUS_CONSTANT_COLOR,[f_]:r.CONSTANT_ALPHA,[d_]:r.ONE_MINUS_CONSTANT_ALPHA};function ut(L,le,se,re,te,K,pe,Le,ht,nt){if(L===di){_===!0&&(de(r.BLEND),_=!1);return}if(_===!1&&(Q(r.BLEND),_=!0),L!==Z0){if(L!==p||nt!==g){if((m!==Qi||b!==Qi)&&(r.blendEquation(r.FUNC_ADD),m=Qi,b=Qi),nt)switch(L){case Gs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ru:r.blendFunc(r.ONE,r.ONE);break;case au:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ou:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:He("WebGLState: Invalid blending: ",L);break}else switch(L){case Gs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ru:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case au:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ou:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",L);break}y=null,v=null,E=null,M=null,w.set(0,0,0),C=0,p=L,g=nt}return}te=te||le,K=K||se,pe=pe||re,(le!==m||te!==b)&&(r.blendEquationSeparate(Lt[le],Lt[te]),m=le,b=te),(se!==y||re!==v||K!==E||pe!==M)&&(r.blendFuncSeparate(Ge[se],Ge[re],Ge[K],Ge[pe]),y=se,v=re,E=K,M=pe),(Le.equals(w)===!1||ht!==C)&&(r.blendColor(Le.r,Le.g,Le.b,ht),w.copy(Le),C=ht),p=L,g=!1}function D(L,le){L.side===Gn?de(r.CULL_FACE):Q(r.CULL_FACE);let se=L.side===sn;le&&(se=!se),qe(se),L.blending===Gs&&L.transparent===!1?ut(di):ut(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const re=L.stencilWrite;o.setTest(re),re&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),_e(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Q(r.SAMPLE_ALPHA_TO_COVERAGE):de(r.SAMPLE_ALPHA_TO_COVERAGE)}function qe(L){T!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),T=L)}function Ye(L){L!==Y0?(Q(r.CULL_FACE),L!==P&&(L===su?r.cullFace(r.BACK):L===j0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):de(r.CULL_FACE),P=L}function ct(L){L!==N&&(V&&r.lineWidth(L),N=L)}function _e(L,le,se){L?(Q(r.POLYGON_OFFSET_FILL),(I!==le||B!==se)&&(r.polygonOffset(le,se),I=le,B=se)):de(r.POLYGON_OFFSET_FILL)}function dt(L){L?Q(r.SCISSOR_TEST):de(r.SCISSOR_TEST)}function Se(L){L===void 0&&(L=r.TEXTURE0+z-1),$!==L&&(r.activeTexture(L),$=L)}function Ne(L,le,se){se===void 0&&($===null?se=r.TEXTURE0+z-1:se=$);let re=Z[se];re===void 0&&(re={type:void 0,texture:void 0},Z[se]=re),(re.type!==L||re.texture!==le)&&($!==se&&(r.activeTexture(se),$=se),r.bindTexture(L,le||j[L]),re.type=L,re.texture=le)}function R(){const L=Z[$];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function k(){try{r.compressedTexImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function Y(){try{r.texSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function J(){try{r.texSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function ge(){try{r.compressedTexSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function oe(){try{r.texStorage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Te(){try{r.texStorage3D(...arguments)}catch(L){L("WebGLState:",L)}}function xe(){try{r.texImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function ee(){try{r.texImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function ie(L){ke.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),ke.copy(L))}function Re(L){ze.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),ze.copy(L))}function Ae(L,le){let se=c.get(le);se===void 0&&(se=new WeakMap,c.set(le,se));let re=se.get(L);re===void 0&&(re=r.getUniformBlockIndex(le,L.name),se.set(L,re))}function he(L,le){const re=c.get(le).get(L);l.get(le)!==re&&(r.uniformBlockBinding(le,re,L.__bindingPointIndex),l.set(le,re))}function Pe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},$=null,Z={},u={},f=new WeakMap,d=[],x=null,_=!1,p=null,m=null,y=null,v=null,b=null,E=null,M=null,w=new Ie(0,0,0),C=0,g=!1,T=null,P=null,N=null,I=null,B=null,ke.set(0,0,r.canvas.width,r.canvas.height),ze.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Q,disable:de,bindFramebuffer:Ue,drawBuffers:ye,useProgram:Xe,setBlending:ut,setMaterial:D,setFlipSided:qe,setCullFace:Ye,setLineWidth:ct,setPolygonOffset:_e,setScissorTest:dt,activeTexture:Se,bindTexture:Ne,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:k,texImage2D:xe,texImage3D:ee,updateUBOMapping:Ae,uniformBlockBinding:he,texStorage2D:oe,texStorage3D:Te,texSubImage2D:Y,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:ge,scissor:ie,viewport:Re,reset:Pe}}function YM(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,S){return d?new OffscreenCanvas(R,S):Zr("canvas")}function _(R,S,k){let Y=1;const J=Ne(R);if((J.width>k||J.height>k)&&(Y=k/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const X=Math.floor(Y*J.width),ge=Math.floor(Y*J.height);u===void 0&&(u=x(X,ge));const oe=S?x(X,ge):u;return oe.width=X,oe.height=ge,oe.getContext("2d").drawImage(R,0,0,X,ge),ve("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+ge+")."),oe}else return"data"in R&&ve("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function p(R){return R.generateMipmaps}function m(R){r.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(R,S,k,Y,J=!1){if(R!==null){if(r[R]!==void 0)return r[R];ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let X=S;if(S===r.RED&&(k===r.FLOAT&&(X=r.R32F),k===r.HALF_FLOAT&&(X=r.R16F),k===r.UNSIGNED_BYTE&&(X=r.R8)),S===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(X=r.R8UI),k===r.UNSIGNED_SHORT&&(X=r.R16UI),k===r.UNSIGNED_INT&&(X=r.R32UI),k===r.BYTE&&(X=r.R8I),k===r.SHORT&&(X=r.R16I),k===r.INT&&(X=r.R32I)),S===r.RG&&(k===r.FLOAT&&(X=r.RG32F),k===r.HALF_FLOAT&&(X=r.RG16F),k===r.UNSIGNED_BYTE&&(X=r.RG8)),S===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(X=r.RG8UI),k===r.UNSIGNED_SHORT&&(X=r.RG16UI),k===r.UNSIGNED_INT&&(X=r.RG32UI),k===r.BYTE&&(X=r.RG8I),k===r.SHORT&&(X=r.RG16I),k===r.INT&&(X=r.RG32I)),S===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(X=r.RGB8UI),k===r.UNSIGNED_SHORT&&(X=r.RGB16UI),k===r.UNSIGNED_INT&&(X=r.RGB32UI),k===r.BYTE&&(X=r.RGB8I),k===r.SHORT&&(X=r.RGB16I),k===r.INT&&(X=r.RGB32I)),S===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),k===r.UNSIGNED_INT&&(X=r.RGBA32UI),k===r.BYTE&&(X=r.RGBA8I),k===r.SHORT&&(X=r.RGBA16I),k===r.INT&&(X=r.RGBA32I)),S===r.RGB&&(k===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(X=r.R11F_G11F_B10F)),S===r.RGBA){const ge=J?eo:$e.getTransfer(Y);k===r.FLOAT&&(X=r.RGBA32F),k===r.HALF_FLOAT&&(X=r.RGBA16F),k===r.UNSIGNED_BYTE&&(X=ge===st?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function b(R,S){let k;return R?S===null||S===cs||S===Xr?k=r.DEPTH24_STENCIL8:S===In?k=r.DEPTH32F_STENCIL8:S===Wr&&(k=r.DEPTH24_STENCIL8,ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===cs||S===Xr?k=r.DEPTH_COMPONENT24:S===In?k=r.DEPTH_COMPONENT32F:S===Wr&&(k=r.DEPTH_COMPONENT16),k}function E(R,S){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==qt&&R.minFilter!==Xt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function M(R){const S=R.target;S.removeEventListener("dispose",M),C(S),S.isVideoTexture&&h.delete(S)}function w(R){const S=R.target;S.removeEventListener("dispose",w),T(S)}function C(R){const S=n.get(R);if(S.__webglInit===void 0)return;const k=R.source,Y=f.get(k);if(Y){const J=Y[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&g(R),Object.keys(Y).length===0&&f.delete(k)}n.remove(R)}function g(R){const S=n.get(R);r.deleteTexture(S.__webglTexture);const k=R.source,Y=f.get(k);delete Y[S.__cacheKey],a.memory.textures--}function T(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let J=0;J<S.__webglFramebuffer[Y].length;J++)r.deleteFramebuffer(S.__webglFramebuffer[Y][J]);else r.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)r.deleteFramebuffer(S.__webglFramebuffer[Y]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=R.textures;for(let Y=0,J=k.length;Y<J;Y++){const X=n.get(k[Y]);X.__webglTexture&&(r.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(k[Y])}n.remove(R)}let P=0;function N(){P=0}function I(){const R=P;return R>=i.maxTextures&&ve("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function B(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function z(R,S){const k=n.get(R);if(R.isVideoTexture&&dt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const Y=R.image;if(Y===null)ve("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)ve("WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,R,S);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+S)}function V(R,S){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){j(k,R,S);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+S)}function q(R,S){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){j(k,R,S);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+S)}function G(R,S){const k=n.get(R);if(R.version>0&&k.__version!==R.version){Q(k,R,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+S)}const $={[tr]:r.REPEAT,[Wn]:r.CLAMP_TO_EDGE,[Qa]:r.MIRRORED_REPEAT},Z={[qt]:r.NEAREST,[jd]:r.NEAREST_MIPMAP_NEAREST,[Cr]:r.NEAREST_MIPMAP_LINEAR,[Xt]:r.LINEAR,[Ba]:r.LINEAR_MIPMAP_NEAREST,[ui]:r.LINEAR_MIPMAP_LINEAR},ue={[C_]:r.NEVER,[U_]:r.ALWAYS,[P_]:r.LESS,[ip]:r.LEQUAL,[D_]:r.EQUAL,[N_]:r.GEQUAL,[L_]:r.GREATER,[I_]:r.NOTEQUAL};function be(R,S){if(S.type===In&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Xt||S.magFilter===Ba||S.magFilter===Cr||S.magFilter===ui||S.minFilter===Xt||S.minFilter===Ba||S.minFilter===Cr||S.minFilter===ui)&&ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,$[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,$[S.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,$[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,Z[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,Z[S.minFilter]),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ue[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===qt||S.minFilter!==Cr&&S.minFilter!==ui||S.type===In&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ke(R,S){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",M));const Y=S.source;let J=f.get(Y);J===void 0&&(J={},f.set(Y,J));const X=B(S);if(X!==R.__cacheKey){J[X]===void 0&&(J[X]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[X].usedTimes++;const ge=J[R.__cacheKey];ge!==void 0&&(J[R.__cacheKey].usedTimes--,ge.usedTimes===0&&g(S)),R.__cacheKey=X,R.__webglTexture=J[X].texture}return k}function ze(R,S,k){return Math.floor(Math.floor(R/k)/S)}function Ze(R,S,k,Y){const X=R.updateRanges;if(X.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,k,Y,S.data);else{X.sort((ee,ie)=>ee.start-ie.start);let ge=0;for(let ee=1;ee<X.length;ee++){const ie=X[ge],Re=X[ee],Ae=ie.start+ie.count,he=ze(Re.start,S.width,4),Pe=ze(ie.start,S.width,4);Re.start<=Ae+1&&he===Pe&&ze(Re.start+Re.count-1,S.width,4)===he?ie.count=Math.max(ie.count,Re.start+Re.count-ie.start):(++ge,X[ge]=Re)}X.length=ge+1;const oe=r.getParameter(r.UNPACK_ROW_LENGTH),Te=r.getParameter(r.UNPACK_SKIP_PIXELS),xe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let ee=0,ie=X.length;ee<ie;ee++){const Re=X[ee],Ae=Math.floor(Re.start/4),he=Math.ceil(Re.count/4),Pe=Ae%S.width,L=Math.floor(Ae/S.width),le=he,se=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Pe),r.pixelStorei(r.UNPACK_SKIP_ROWS,L),t.texSubImage2D(r.TEXTURE_2D,0,Pe,L,le,se,k,Y,S.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,oe),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Te),r.pixelStorei(r.UNPACK_SKIP_ROWS,xe)}}function j(R,S,k){let Y=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=r.TEXTURE_3D);const J=ke(R,S),X=S.source;t.bindTexture(Y,R.__webglTexture,r.TEXTURE0+k);const ge=n.get(X);if(X.version!==ge.__version||J===!0){t.activeTexture(r.TEXTURE0+k);const oe=$e.getPrimaries($e.workingColorSpace),Te=S.colorSpace===Ci?null:$e.getPrimaries(S.colorSpace),xe=S.colorSpace===Ci||oe===Te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let ee=_(S.image,!1,i.maxTextureSize);ee=Se(S,ee);const ie=s.convert(S.format,S.colorSpace),Re=s.convert(S.type);let Ae=v(S.internalFormat,ie,Re,S.colorSpace,S.isVideoTexture);be(Y,S);let he;const Pe=S.mipmaps,L=S.isVideoTexture!==!0,le=ge.__version===void 0||J===!0,se=X.dataReady,re=E(S,ee);if(S.isDepthTexture)Ae=b(S.format===Yr,S.type),le&&(L?t.texStorage2D(r.TEXTURE_2D,1,Ae,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,Ae,ee.width,ee.height,0,ie,Re,null));else if(S.isDataTexture)if(Pe.length>0){L&&le&&t.texStorage2D(r.TEXTURE_2D,re,Ae,Pe[0].width,Pe[0].height);for(let te=0,K=Pe.length;te<K;te++)he=Pe[te],L?se&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,he.width,he.height,ie,Re,he.data):t.texImage2D(r.TEXTURE_2D,te,Ae,he.width,he.height,0,ie,Re,he.data);S.generateMipmaps=!1}else L?(le&&t.texStorage2D(r.TEXTURE_2D,re,Ae,ee.width,ee.height),se&&Ze(S,ee,ie,Re)):t.texImage2D(r.TEXTURE_2D,0,Ae,ee.width,ee.height,0,ie,Re,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){L&&le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,re,Ae,Pe[0].width,Pe[0].height,ee.depth);for(let te=0,K=Pe.length;te<K;te++)if(he=Pe[te],S.format!==Tn)if(ie!==null)if(L){if(se)if(S.layerUpdates.size>0){const pe=$u(he.width,he.height,S.format,S.type);for(const Le of S.layerUpdates){const ht=he.data.subarray(Le*pe/he.data.BYTES_PER_ELEMENT,(Le+1)*pe/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,Le,he.width,he.height,1,ie,ht)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ee.depth,ie,he.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,te,Ae,he.width,he.height,ee.depth,0,he.data,0,0);else ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?se&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ee.depth,ie,Re,he.data):t.texImage3D(r.TEXTURE_2D_ARRAY,te,Ae,he.width,he.height,ee.depth,0,ie,Re,he.data)}else{L&&le&&t.texStorage2D(r.TEXTURE_2D,re,Ae,Pe[0].width,Pe[0].height);for(let te=0,K=Pe.length;te<K;te++)he=Pe[te],S.format!==Tn?ie!==null?L?se&&t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,he.width,he.height,ie,he.data):t.compressedTexImage2D(r.TEXTURE_2D,te,Ae,he.width,he.height,0,he.data):ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?se&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,he.width,he.height,ie,Re,he.data):t.texImage2D(r.TEXTURE_2D,te,Ae,he.width,he.height,0,ie,Re,he.data)}else if(S.isDataArrayTexture)if(L){if(le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,re,Ae,ee.width,ee.height,ee.depth),se)if(S.layerUpdates.size>0){const te=$u(ee.width,ee.height,S.format,S.type);for(const K of S.layerUpdates){const pe=ee.data.subarray(K*te/ee.data.BYTES_PER_ELEMENT,(K+1)*te/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,ee.width,ee.height,1,ie,Re,pe)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ie,Re,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ae,ee.width,ee.height,ee.depth,0,ie,Re,ee.data);else if(S.isData3DTexture)L?(le&&t.texStorage3D(r.TEXTURE_3D,re,Ae,ee.width,ee.height,ee.depth),se&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ie,Re,ee.data)):t.texImage3D(r.TEXTURE_3D,0,Ae,ee.width,ee.height,ee.depth,0,ie,Re,ee.data);else if(S.isFramebufferTexture){if(le)if(L)t.texStorage2D(r.TEXTURE_2D,re,Ae,ee.width,ee.height);else{let te=ee.width,K=ee.height;for(let pe=0;pe<re;pe++)t.texImage2D(r.TEXTURE_2D,pe,Ae,te,K,0,ie,Re,null),te>>=1,K>>=1}}else if(Pe.length>0){if(L&&le){const te=Ne(Pe[0]);t.texStorage2D(r.TEXTURE_2D,re,Ae,te.width,te.height)}for(let te=0,K=Pe.length;te<K;te++)he=Pe[te],L?se&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,ie,Re,he):t.texImage2D(r.TEXTURE_2D,te,Ae,ie,Re,he);S.generateMipmaps=!1}else if(L){if(le){const te=Ne(ee);t.texStorage2D(r.TEXTURE_2D,re,Ae,te.width,te.height)}se&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ie,Re,ee)}else t.texImage2D(r.TEXTURE_2D,0,Ae,ie,Re,ee);p(S)&&m(Y),ge.__version=X.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Q(R,S,k){if(S.image.length!==6)return;const Y=ke(R,S),J=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+k);const X=n.get(J);if(J.version!==X.__version||Y===!0){t.activeTexture(r.TEXTURE0+k);const ge=$e.getPrimaries($e.workingColorSpace),oe=S.colorSpace===Ci?null:$e.getPrimaries(S.colorSpace),Te=S.colorSpace===Ci||ge===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const xe=S.isCompressedTexture||S.image[0].isCompressedTexture,ee=S.image[0]&&S.image[0].isDataTexture,ie=[];for(let K=0;K<6;K++)!xe&&!ee?ie[K]=_(S.image[K],!0,i.maxCubemapSize):ie[K]=ee?S.image[K].image:S.image[K],ie[K]=Se(S,ie[K]);const Re=ie[0],Ae=s.convert(S.format,S.colorSpace),he=s.convert(S.type),Pe=v(S.internalFormat,Ae,he,S.colorSpace),L=S.isVideoTexture!==!0,le=X.__version===void 0||Y===!0,se=J.dataReady;let re=E(S,Re);be(r.TEXTURE_CUBE_MAP,S);let te;if(xe){L&&le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,re,Pe,Re.width,Re.height);for(let K=0;K<6;K++){te=ie[K].mipmaps;for(let pe=0;pe<te.length;pe++){const Le=te[pe];S.format!==Tn?Ae!==null?L?se&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,0,0,Le.width,Le.height,Ae,Le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,Pe,Le.width,Le.height,0,Le.data):ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,0,0,Le.width,Le.height,Ae,he,Le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,Pe,Le.width,Le.height,0,Ae,he,Le.data)}}}else{if(te=S.mipmaps,L&&le){te.length>0&&re++;const K=Ne(ie[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,re,Pe,K.width,K.height)}for(let K=0;K<6;K++)if(ee){L?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ie[K].width,ie[K].height,Ae,he,ie[K].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Pe,ie[K].width,ie[K].height,0,Ae,he,ie[K].data);for(let pe=0;pe<te.length;pe++){const ht=te[pe].image[K].image;L?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,0,0,ht.width,ht.height,Ae,he,ht.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,Pe,ht.width,ht.height,0,Ae,he,ht.data)}}else{L?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ae,he,ie[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Pe,Ae,he,ie[K]);for(let pe=0;pe<te.length;pe++){const Le=te[pe];L?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,0,0,Ae,he,Le.image[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,Pe,Ae,he,Le.image[K])}}}p(S)&&m(r.TEXTURE_CUBE_MAP),X.__version=J.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function de(R,S,k,Y,J,X){const ge=s.convert(k.format,k.colorSpace),oe=s.convert(k.type),Te=v(k.internalFormat,ge,oe,k.colorSpace),xe=n.get(S),ee=n.get(k);if(ee.__renderTarget=S,!xe.__hasExternalTextures){const ie=Math.max(1,S.width>>X),Re=Math.max(1,S.height>>X);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,X,Te,ie,Re,S.depth,0,ge,oe,null):t.texImage2D(J,X,Te,ie,Re,0,ge,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),_e(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,J,ee.__webglTexture,0,ct(S)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,J,ee.__webglTexture,X),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(R,S,k){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer){const Y=S.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,X=b(S.stencilBuffer,J),ge=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=ct(S);_e(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,X,S.width,S.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,X,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,X,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,R)}else{const Y=S.textures;for(let J=0;J<Y.length;J++){const X=Y[J],ge=s.convert(X.format,X.colorSpace),oe=s.convert(X.type),Te=v(X.internalFormat,ge,oe,X.colorSpace),xe=ct(S);k&&_e(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,xe,Te,S.width,S.height):_e(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xe,Te,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Te,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ye(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(S.depthTexture);Y.__renderTarget=S,(!Y.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);const J=Y.__webglTexture,X=ct(S);if(S.depthTexture.format===qr)_e(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(S.depthTexture.format===Yr)_e(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Xe(R){const S=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=Y}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const Y=R.texture.mipmaps;Y&&Y.length>0?ye(S.__webglFramebuffer[0],R):ye(S.__webglFramebuffer,R)}else if(k){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=r.createRenderbuffer(),Ue(S.__webglDepthbuffer[Y],R,!1);else{const J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,X)}}else{const Y=R.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Ue(S.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,X)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(R,S,k){const Y=n.get(R);S!==void 0&&de(Y.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Xe(R)}function Ge(R){const S=R.texture,k=n.get(R),Y=n.get(S);R.addEventListener("dispose",w);const J=R.textures,X=R.isWebGLCubeRenderTarget===!0,ge=J.length>1;if(ge||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=S.version,a.memory.textures++),X){k.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[oe]=[];for(let Te=0;Te<S.mipmaps.length;Te++)k.__webglFramebuffer[oe][Te]=r.createFramebuffer()}else k.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)k.__webglFramebuffer[oe]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(ge)for(let oe=0,Te=J.length;oe<Te;oe++){const xe=n.get(J[oe]);xe.__webglTexture===void 0&&(xe.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&_e(R)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){const Te=J[oe];k.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[oe]);const xe=s.convert(Te.format,Te.colorSpace),ee=s.convert(Te.type),ie=v(Te.internalFormat,xe,ee,Te.colorSpace,R.isXRRenderTarget===!0),Re=ct(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,ie,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,k.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Ue(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(X){t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),be(r.TEXTURE_CUBE_MAP,S);for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)de(k.__webglFramebuffer[oe][Te],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te);else de(k.__webglFramebuffer[oe],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);p(S)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let oe=0,Te=J.length;oe<Te;oe++){const xe=J[oe],ee=n.get(xe);let ie=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ie=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ie,ee.__webglTexture),be(ie,xe),de(k.__webglFramebuffer,R,xe,r.COLOR_ATTACHMENT0+oe,ie,0),p(xe)&&m(ie)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,Y.__webglTexture),be(oe,S),S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)de(k.__webglFramebuffer[Te],R,S,r.COLOR_ATTACHMENT0,oe,Te);else de(k.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,oe,0);p(S)&&m(oe),t.unbindTexture()}R.depthBuffer&&Xe(R)}function ut(R){const S=R.textures;for(let k=0,Y=S.length;k<Y;k++){const J=S[k];if(p(J)){const X=y(R),ge=n.get(J).__webglTexture;t.bindTexture(X,ge),m(X),t.unbindTexture()}}}const D=[],qe=[];function Ye(R){if(R.samples>0){if(_e(R)===!1){const S=R.textures,k=R.width,Y=R.height;let J=r.COLOR_BUFFER_BIT;const X=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=n.get(R),oe=S.length>1;if(oe)for(let xe=0;xe<S.length;xe++)t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const Te=R.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ge.__webglColorRenderbuffer[xe]);const ee=n.get(S[xe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ee,0)}r.blitFramebuffer(0,0,k,Y,0,0,k,Y,J,r.NEAREST),l===!0&&(D.length=0,qe.length=0,D.push(r.COLOR_ATTACHMENT0+xe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(D.push(X),qe.push(X),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,qe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,D))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let xe=0;xe<S.length;xe++){t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,ge.__webglColorRenderbuffer[xe]);const ee=n.get(S[xe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function ct(R){return Math.min(i.maxSamples,R.samples)}function _e(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function dt(R){const S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Se(R,S){const k=R.colorSpace,Y=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==jt&&k!==Ci&&($e.getTransfer(k)===st?(Y!==Tn||J!==jn)&&ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",k)),S}function Ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=N,this.setTexture2D=z,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=G,this.rebindTextures=Lt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=_e}function jM(r,e){function t(n,i=Ci){let s;const a=$e.getTransfer(i);if(n===jn)return r.UNSIGNED_BYTE;if(n===nh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ih)return r.UNSIGNED_SHORT_5_5_5_1;if(n===$d)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Jd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kd)return r.BYTE;if(n===Zd)return r.SHORT;if(n===Wr)return r.UNSIGNED_SHORT;if(n===th)return r.INT;if(n===cs)return r.UNSIGNED_INT;if(n===In)return r.FLOAT;if(n===or)return r.HALF_FLOAT;if(n===Qd)return r.ALPHA;if(n===ep)return r.RGB;if(n===Tn)return r.RGBA;if(n===qr)return r.DEPTH_COMPONENT;if(n===Yr)return r.DEPTH_STENCIL;if(n===sh)return r.RED;if(n===rh)return r.RED_INTEGER;if(n===ah)return r.RG;if(n===oh)return r.RG_INTEGER;if(n===lh)return r.RGBA_INTEGER;if(n===ka||n===za||n===Va||n===Ga)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ka)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ka)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===za)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Va)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ga)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ql||n===ec||n===tc||n===nc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ql)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ec)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ic||n===sc||n===rc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ic||n===sc)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===rc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ac||n===oc||n===lc||n===cc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc||n===_c||n===xc||n===gc||n===vc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ac)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_c)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bc||n===yc||n===Mc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===bc)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sc||n===Tc||n===Ec||n===Ac)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Sc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Tc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ec)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ac)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const KM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $M{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new gp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new vi({vertexShader:KM,fragmentShader:ZM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new En(new fo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JM extends ds{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,x=null;const _=typeof XRWebGLBinding<"u",p=new $M,m={},y=t.getContextAttributes();let v=null,b=null;const E=[],M=[],w=new De;let C=null;const g=new Ht;g.viewport=new Qe;const T=new Ht;T.viewport=new Qe;const P=[g,T],N=new ag;let I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=E[j];return Q===void 0&&(Q=new nl,E[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=E[j];return Q===void 0&&(Q=new nl,E[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=E[j];return Q===void 0&&(Q=new nl,E[j]=Q),Q.getHandSpace()};function z(j){const Q=M.indexOf(j.inputSource);if(Q===-1)return;const de=E[Q];de!==void 0&&(de.update(j.inputSource,j.frame,c||a),de.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",q);for(let j=0;j<E.length;j++){const Q=M[j];Q!==null&&(M[j]=null,E[j].disconnect(Q))}I=null,B=null,p.reset();for(const j in m)delete m[j];e.setRenderTarget(v),d=null,f=null,u=null,i=null,b=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",V),i.addEventListener("inputsourceschange",q),y.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ue=null,ye=null;y.depth&&(ye=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=y.stencil?Yr:qr,Ue=y.stencil?Xr:cs);const Xe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(Xe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new hs(f.textureWidth,f.textureHeight,{format:Tn,type:jn,depthTexture:new xp(f.textureWidth,f.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const de={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new hs(d.framebufferWidth,d.framebufferHeight,{format:Tn,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ze.setContext(i),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function q(j){for(let Q=0;Q<j.removed.length;Q++){const de=j.removed[Q],Ue=M.indexOf(de);Ue>=0&&(M[Ue]=null,E[Ue].disconnect(de))}for(let Q=0;Q<j.added.length;Q++){const de=j.added[Q];let Ue=M.indexOf(de);if(Ue===-1){for(let Xe=0;Xe<E.length;Xe++)if(Xe>=M.length){M.push(de),Ue=Xe;break}else if(M[Xe]===null){M[Xe]=de,Ue=Xe;break}if(Ue===-1)break}const ye=E[Ue];ye&&ye.connect(de)}}const G=new F,$=new F;function Z(j,Q,de){G.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(de.matrixWorld);const Ue=G.distanceTo($),ye=Q.projectionMatrix.elements,Xe=de.projectionMatrix.elements,Lt=ye[14]/(ye[10]-1),Ge=ye[14]/(ye[10]+1),ut=(ye[9]+1)/ye[5],D=(ye[9]-1)/ye[5],qe=(ye[8]-1)/ye[0],Ye=(Xe[8]+1)/Xe[0],ct=Lt*qe,_e=Lt*Ye,dt=Ue/(-qe+Ye),Se=dt*-qe;if(Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Se),j.translateZ(dt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ye[10]===-1)j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Ne=Lt+dt,R=Ge+dt,S=ct-Se,k=_e+(Ue-Se),Y=ut*Ge/R*Ne,J=D*Ge/R*Ne;j.projectionMatrix.makePerspective(S,k,Y,J,Ne,R),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ue(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let Q=j.near,de=j.far;p.texture!==null&&(p.depthNear>0&&(Q=p.depthNear),p.depthFar>0&&(de=p.depthFar)),N.near=T.near=g.near=Q,N.far=T.far=g.far=de,(I!==N.near||B!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),I=N.near,B=N.far),N.layers.mask=j.layers.mask|6,g.layers.mask=N.layers.mask&3,T.layers.mask=N.layers.mask&5;const Ue=j.parent,ye=N.cameras;ue(N,Ue);for(let Xe=0;Xe<ye.length;Xe++)ue(ye[Xe],Ue);ye.length===2?Z(N,g,T):N.projectionMatrix.copy(g.projectionMatrix),be(j,N,Ue)};function be(j,Q,de){de===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(de.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=nr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(j){return m[j]};let ke=null;function ze(j,Q){if(h=Q.getViewerPose(c||a),x=Q,h!==null){const de=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let Ue=!1;de.length!==N.cameras.length&&(N.cameras.length=0,Ue=!0);for(let Ge=0;Ge<de.length;Ge++){const ut=de[Ge];let D=null;if(d!==null)D=d.getViewport(ut);else{const Ye=u.getViewSubImage(f,ut);D=Ye.viewport,Ge===0&&(e.setRenderTargetTextures(b,Ye.colorTexture,Ye.depthStencilTexture),e.setRenderTarget(b))}let qe=P[Ge];qe===void 0&&(qe=new Ht,qe.layers.enable(Ge),qe.viewport=new Qe,P[Ge]=qe),qe.matrix.fromArray(ut.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(ut.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(D.x,D.y,D.width,D.height),Ge===0&&(N.matrix.copy(qe.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ue===!0&&N.cameras.push(qe)}const ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const Ge=u.getDepthInformation(de[0]);Ge&&Ge.isValid&&Ge.texture&&p.init(Ge,i.renderState)}if(ye&&ye.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let Ge=0;Ge<de.length;Ge++){const ut=de[Ge].camera;if(ut){let D=m[ut];D||(D=new gp,m[ut]=D);const qe=u.getCameraImage(ut);D.sourceTexture=qe}}}}for(let de=0;de<E.length;de++){const Ue=M[de],ye=E[de];Ue!==null&&ye!==void 0&&ye.update(Ue,Q,c||a)}ke&&ke(j,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),x=null}const Ze=new Mp;Ze.setAnimationLoop(ze),this.setAnimationLoop=function(j){ke=j},this.dispose=function(){}}}const Zi=new Zn,QM=new Be;function eS(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,up(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,v,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,b)):m.isMeshMatcapMaterial?(s(p,m),x(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,y,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===sn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===sn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m),v=y.envMap,b=y.envMapRotation;v&&(p.envMap.value=v,Zi.copy(b),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),p.envMapRotation.value.setFromMatrix4(QM.makeRotationFromEuler(Zi)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function tS(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const b=v.program;n.uniformBlockBinding(y,b)}function c(y,v){let b=i[y.id];b===void 0&&(x(y),b=h(y),i[y.id]=b,y.addEventListener("dispose",p));const E=v.program;n.updateUBOMapping(y,E);const M=e.render.frame;s[y.id]!==M&&(f(y),s[y.id]=M)}function h(y){const v=u();y.__bindingPointIndex=v;const b=r.createBuffer(),E=y.__size,M=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,E,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,b),b}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=i[y.id],b=y.uniforms,E=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let M=0,w=b.length;M<w;M++){const C=Array.isArray(b[M])?b[M]:[b[M]];for(let g=0,T=C.length;g<T;g++){const P=C[g];if(d(P,M,g,E)===!0){const N=P.__offset,I=Array.isArray(P.value)?P.value:[P.value];let B=0;for(let z=0;z<I.length;z++){const V=I[z],q=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,N+B,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,B),B+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,v,b,E){const M=y.value,w=v+"_"+b;if(E[w]===void 0)return typeof M=="number"||typeof M=="boolean"?E[w]=M:E[w]=M.clone(),!0;{const C=E[w];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return E[w]=M,!0}else if(C.equals(M)===!1)return C.copy(M),!0}return!1}function x(y){const v=y.uniforms;let b=0;const E=16;for(let w=0,C=v.length;w<C;w++){const g=Array.isArray(v[w])?v[w]:[v[w]];for(let T=0,P=g.length;T<P;T++){const N=g[T],I=Array.isArray(N.value)?N.value:[N.value];for(let B=0,z=I.length;B<z;B++){const V=I[B],q=_(V),G=b%E,$=G%q.boundary,Z=G+$;b+=$,Z!==0&&E-Z<q.storage&&(b+=E-Z),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=q.storage}}}const M=b%E;return M>0&&(b+=E-M),y.__size=b,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ve("WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const b=a.indexOf(v.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}const nS=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ri=null;function iS(){return ri===null&&(ri=new fh(nS,32,32,ah,or),ri.minFilter=Xt,ri.magFilter=Xt,ri.wrapS=Wn,ri.wrapT=Wn,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}class sS{constructor(e={}){const{canvas:t=F_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const x=new Set([lh,oh,rh]),_=new Set([jn,cs,Wr,Xr,nh,ih]),p=new Uint32Array(4),m=new Int32Array(4);let y=null,v=null;const b=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let w=!1;this._outputColorSpace=Nt;let C=0,g=0,T=null,P=-1,N=null;const I=new Qe,B=new Qe;let z=null;const V=new Ie(0);let q=0,G=t.width,$=t.height,Z=1,ue=null,be=null;const ke=new Qe(0,0,G,$),ze=new Qe(0,0,G,$);let Ze=!1;const j=new ph;let Q=!1,de=!1;const Ue=new Be,ye=new F,Xe=new Qe,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function ut(){return T===null?Z:1}let D=n;function qe(A,U){return t.getContext(A,U)}try{const A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${eh}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",pe,!1),D===null){const U="webgl2";if(D=qe(U,A),D===null)throw qe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw A("WebGLRenderer: "+A.message),A}let Ye,ct,_e,dt,Se,Ne,R,S,k,Y,J,X,ge,oe,Te,xe,ee,ie,Re,Ae,he,Pe,L,le;function se(){Ye=new fy(D),Ye.init(),Pe=new jM(D,Ye),ct=new iy(D,Ye,e,Pe),_e=new qM(D,Ye),ct.reversedDepthBuffer&&f&&_e.buffers.depth.setReversed(!0),dt=new my(D),Se=new IM,Ne=new YM(D,Ye,_e,Se,ct,Pe,dt),R=new ry(M),S=new uy(M),k=new vg(D),L=new ty(D,k),Y=new dy(D,k,dt,L),J=new xy(D,Y,k,dt),Re=new _y(D,ct,Ne),xe=new sy(Se),X=new LM(M,R,S,Ye,ct,L,xe),ge=new eS(M,Se),oe=new UM,Te=new VM(Ye),ie=new ey(M,R,S,_e,J,d,l),ee=new WM(M,J,ct),le=new tS(D,dt,ct,_e),Ae=new ny(D,Ye,dt),he=new py(D,Ye,dt),dt.programs=X.programs,M.capabilities=ct,M.extensions=Ye,M.properties=Se,M.renderLists=oe,M.shadowMap=ee,M.state=_e,M.info=dt}se();const re=new JM(M,D);this.xr=re,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=Ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(G,$,!1))},this.getSize=function(A){return A.set(G,$)},this.setSize=function(A,U,H=!0){if(re.isPresenting){ve("WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,$=U,t.width=Math.floor(A*Z),t.height=Math.floor(U*Z),H===!0&&(t.style.width=A+"px",t.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(G*Z,$*Z).floor()},this.setDrawingBufferSize=function(A,U,H){G=A,$=U,Z=H,t.width=Math.floor(A*H),t.height=Math.floor(U*H),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(ke)},this.setViewport=function(A,U,H,W){A.isVector4?ke.set(A.x,A.y,A.z,A.w):ke.set(A,U,H,W),_e.viewport(I.copy(ke).multiplyScalar(Z).round())},this.getScissor=function(A){return A.copy(ze)},this.setScissor=function(A,U,H,W){A.isVector4?ze.set(A.x,A.y,A.z,A.w):ze.set(A,U,H,W),_e.scissor(B.copy(ze).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(A){_e.setScissorTest(Ze=A)},this.setOpaqueSort=function(A){ue=A},this.setTransparentSort=function(A){be=A},this.getClearColor=function(A){return A.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(A=!0,U=!0,H=!0){let W=0;if(A){let O=!1;if(T!==null){const ne=T.texture.format;O=x.has(ne)}if(O){const ne=T.texture.type,ce=_.has(ne),me=ie.getClearColor(),fe=ie.getClearAlpha(),we=me.r,Ce=me.g,Me=me.b;ce?(p[0]=we,p[1]=Ce,p[2]=Me,p[3]=fe,D.clearBufferuiv(D.COLOR,0,p)):(m[0]=we,m[1]=Ce,m[2]=Me,m[3]=fe,D.clearBufferiv(D.COLOR,0,m))}else W|=D.COLOR_BUFFER_BIT}U&&(W|=D.DEPTH_BUFFER_BIT),H&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ie.dispose(),oe.dispose(),Te.dispose(),Se.dispose(),R.dispose(),S.dispose(),J.dispose(),L.dispose(),le.dispose(),X.dispose(),re.dispose(),re.removeEventListener("sessionstart",Mh),re.removeEventListener("sessionend",Sh),Vi.stop()};function te(A){A.preventDefault(),no("WebGLRenderer: Context Lost."),w=!0}function K(){no("WebGLRenderer: Context Restored."),w=!1;const A=dt.autoReset,U=ee.enabled,H=ee.autoUpdate,W=ee.needsUpdate,O=ee.type;se(),dt.autoReset=A,ee.enabled=U,ee.autoUpdate=H,ee.needsUpdate=W,ee.type=O}function pe(A){He("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Le(A){const U=A.target;U.removeEventListener("dispose",Le),ht(U)}function ht(A){nt(A),Se.remove(A)}function nt(A){const U=Se.get(A).programs;U!==void 0&&(U.forEach(function(H){X.releaseProgram(H)}),A.isShaderMaterial&&X.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,H,W,O,ne){U===null&&(U=Lt);const ce=O.isMesh&&O.matrixWorld.determinant()<0,me=Dp(A,U,H,W,O);_e.setMaterial(W,ce);let fe=H.index,we=1;if(W.wireframe===!0){if(fe=Y.getWireframeAttribute(H),fe===void 0)return;we=2}const Ce=H.drawRange,Me=H.attributes.position;let je=Ce.start*we,it=(Ce.start+Ce.count)*we;ne!==null&&(je=Math.max(je,ne.start*we),it=Math.min(it,(ne.start+ne.count)*we)),fe!==null?(je=Math.max(je,0),it=Math.min(it,fe.count)):Me!=null&&(je=Math.max(je,0),it=Math.min(it,Me.count));const vt=it-je;if(vt<0||vt===1/0)return;L.setup(O,W,me,H,fe);let bt,at=Ae;if(fe!==null&&(bt=k.get(fe),at=he,at.setIndex(bt)),O.isMesh)W.wireframe===!0?(_e.setLineWidth(W.wireframeLinewidth*ut()),at.setMode(D.LINES)):at.setMode(D.TRIANGLES);else if(O.isLine){let Ee=W.linewidth;Ee===void 0&&(Ee=1),_e.setLineWidth(Ee*ut()),O.isLineSegments?at.setMode(D.LINES):O.isLineLoop?at.setMode(D.LINE_LOOP):at.setMode(D.LINE_STRIP)}else O.isPoints?at.setMode(D.POINTS):O.isSprite&&at.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)$r("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))at.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ee=O._multiDrawStarts,pt=O._multiDrawCounts,Je=O._multiDrawCount,an=fe?k.get(fe).bytesPerElement:1,ps=Se.get(W).currentProgram.getUniforms();for(let on=0;on<Je;on++)ps.setValue(D,"_gl_DrawID",on),at.render(Ee[on]/an,pt[on])}else if(O.isInstancedMesh)at.renderInstances(je,vt,O.count);else if(H.isInstancedBufferGeometry){const Ee=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,pt=Math.min(H.instanceCount,Ee);at.renderInstances(je,vt,pt)}else at.render(je,vt)};function On(A,U,H){A.transparent===!0&&A.side===Gn&&A.forceSinglePass===!1?(A.side=sn,A.needsUpdate=!0,ia(A,U,H),A.side=gi,A.needsUpdate=!0,ia(A,U,H),A.side=Gn):ia(A,U,H)}this.compile=function(A,U,H=null){H===null&&(H=A),v=Te.get(H),v.init(U),E.push(v),H.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(v.pushLight(O),O.castShadow&&v.pushShadow(O))}),A!==H&&A.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(v.pushLight(O),O.castShadow&&v.pushShadow(O))}),v.setupLights();const W=new Set;return A.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ne=O.material;if(ne)if(Array.isArray(ne))for(let ce=0;ce<ne.length;ce++){const me=ne[ce];On(me,H,O),W.add(me)}else On(ne,H,O),W.add(ne)}),v=E.pop(),W},this.compileAsync=function(A,U,H=null){const W=this.compile(A,U,H);return new Promise(O=>{function ne(){if(W.forEach(function(ce){Se.get(ce).currentProgram.isReady()&&W.delete(ce)}),W.size===0){O(A);return}setTimeout(ne,10)}Ye.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let An=null;function Pp(A){An&&An(A)}function Mh(){Vi.stop()}function Sh(){Vi.start()}const Vi=new Mp;Vi.setAnimationLoop(Pp),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(A){An=A,re.setAnimationLoop(A),A===null?Vi.stop():Vi.start()},re.addEventListener("sessionstart",Mh),re.addEventListener("sessionend",Sh),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,U,T),v=Te.get(A,E.length),v.init(U),E.push(v),Ue.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(Ue,Xn,U.reversedDepth),de=this.localClippingEnabled,Q=xe.init(this.clippingPlanes,de),y=oe.get(A,b.length),y.init(),b.push(y),re.enabled===!0&&re.isPresenting===!0){const ne=M.xr.getDepthSensingMesh();ne!==null&&xo(ne,U,-1/0,M.sortObjects)}xo(A,U,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(ue,be),Ge=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ge&&ie.addToRenderList(y,A),this.info.render.frame++,Q===!0&&xe.beginShadows();const H=v.state.shadowsArray;ee.render(H,A,U),Q===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=y.opaque,O=y.transmissive;if(v.setupLights(),U.isArrayCamera){const ne=U.cameras;if(O.length>0)for(let ce=0,me=ne.length;ce<me;ce++){const fe=ne[ce];Eh(W,O,A,fe)}Ge&&ie.render(A);for(let ce=0,me=ne.length;ce<me;ce++){const fe=ne[ce];Th(y,A,fe,fe.viewport)}}else O.length>0&&Eh(W,O,A,U),Ge&&ie.render(A),Th(y,A,U);T!==null&&g===0&&(Ne.updateMultisampleRenderTarget(T),Ne.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(M,A,U),L.resetDefaultState(),P=-1,N=null,E.pop(),E.length>0?(v=E[E.length-1],Q===!0&&xe.setGlobalState(M.clippingPlanes,v.state.camera)):v=null,b.pop(),b.length>0?y=b[b.length-1]:y=null};function xo(A,U,H,W){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)H=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){W&&Xe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ue);const ce=J.update(A),me=A.material;me.visible&&y.push(A,ce,me,H,Xe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){const ce=J.update(A),me=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Xe.copy(A.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Xe.copy(ce.boundingSphere.center)),Xe.applyMatrix4(A.matrixWorld).applyMatrix4(Ue)),Array.isArray(me)){const fe=ce.groups;for(let we=0,Ce=fe.length;we<Ce;we++){const Me=fe[we],je=me[Me.materialIndex];je&&je.visible&&y.push(A,ce,je,H,Xe.z,Me)}}else me.visible&&y.push(A,ce,me,H,Xe.z,null)}}const ne=A.children;for(let ce=0,me=ne.length;ce<me;ce++)xo(ne[ce],U,H,W)}function Th(A,U,H,W){const{opaque:O,transmissive:ne,transparent:ce}=A;v.setupLightsView(H),Q===!0&&xe.setGlobalState(M.clippingPlanes,H),W&&_e.viewport(I.copy(W)),O.length>0&&na(O,U,H),ne.length>0&&na(ne,U,H),ce.length>0&&na(ce,U,H),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Eh(A,U,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[W.id]===void 0&&(v.state.transmissionRenderTarget[W.id]=new hs(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?or:jn,minFilter:ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const ne=v.state.transmissionRenderTarget[W.id],ce=W.viewport||I;ne.setSize(ce.z*M.transmissionResolutionScale,ce.w*M.transmissionResolutionScale);const me=M.getRenderTarget(),fe=M.getActiveCubeFace(),we=M.getActiveMipmapLevel();M.setRenderTarget(ne),M.getClearColor(V),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),M.clear(),Ge&&ie.render(H);const Ce=M.toneMapping;M.toneMapping=Oi;const Me=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),v.setupLightsView(W),Q===!0&&xe.setGlobalState(M.clippingPlanes,W),na(A,H,W),Ne.updateMultisampleRenderTarget(ne),Ne.updateRenderTargetMipmap(ne),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let it=0,vt=U.length;it<vt;it++){const bt=U[it],{object:at,geometry:Ee,material:pt,group:Je}=bt;if(pt.side===Gn&&at.layers.test(W.layers)){const an=pt.side;pt.side=sn,pt.needsUpdate=!0,Ah(at,H,W,Ee,pt,Je),pt.side=an,pt.needsUpdate=!0,je=!0}}je===!0&&(Ne.updateMultisampleRenderTarget(ne),Ne.updateRenderTargetMipmap(ne))}M.setRenderTarget(me,fe,we),M.setClearColor(V,q),Me!==void 0&&(W.viewport=Me),M.toneMapping=Ce}function na(A,U,H){const W=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ne=A.length;O<ne;O++){const ce=A[O],{object:me,geometry:fe,group:we}=ce;let Ce=ce.material;Ce.allowOverride===!0&&W!==null&&(Ce=W),me.layers.test(H.layers)&&Ah(me,U,H,fe,Ce,we)}}function Ah(A,U,H,W,O,ne){A.onBeforeRender(M,U,H,W,O,ne),A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(M,U,H,W,A,ne),O.transparent===!0&&O.side===Gn&&O.forceSinglePass===!1?(O.side=sn,O.needsUpdate=!0,M.renderBufferDirect(H,U,W,O,A,ne),O.side=gi,O.needsUpdate=!0,M.renderBufferDirect(H,U,W,O,A,ne),O.side=Gn):M.renderBufferDirect(H,U,W,O,A,ne),A.onAfterRender(M,U,H,W,O,ne)}function ia(A,U,H){U.isScene!==!0&&(U=Lt);const W=Se.get(A),O=v.state.lights,ne=v.state.shadowsArray,ce=O.state.version,me=X.getParameters(A,O.state,ne,U,H),fe=X.getProgramCacheKey(me);let we=W.programs;W.environment=A.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(A.isMeshStandardMaterial?S:R).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,we===void 0&&(A.addEventListener("dispose",Le),we=new Map,W.programs=we);let Ce=we.get(fe);if(Ce!==void 0){if(W.currentProgram===Ce&&W.lightsStateVersion===ce)return Rh(A,me),Ce}else me.uniforms=X.getUniforms(A),A.onBeforeCompile(me,M),Ce=X.acquireProgram(me,fe),we.set(fe,Ce),W.uniforms=me.uniforms;const Me=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Me.clippingPlanes=xe.uniform),Rh(A,me),W.needsLights=Ip(A),W.lightsStateVersion=ce,W.needsLights&&(Me.ambientLightColor.value=O.state.ambient,Me.lightProbe.value=O.state.probe,Me.directionalLights.value=O.state.directional,Me.directionalLightShadows.value=O.state.directionalShadow,Me.spotLights.value=O.state.spot,Me.spotLightShadows.value=O.state.spotShadow,Me.rectAreaLights.value=O.state.rectArea,Me.ltc_1.value=O.state.rectAreaLTC1,Me.ltc_2.value=O.state.rectAreaLTC2,Me.pointLights.value=O.state.point,Me.pointLightShadows.value=O.state.pointShadow,Me.hemisphereLights.value=O.state.hemi,Me.directionalShadowMap.value=O.state.directionalShadowMap,Me.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Me.spotShadowMap.value=O.state.spotShadowMap,Me.spotLightMatrix.value=O.state.spotLightMatrix,Me.spotLightMap.value=O.state.spotLightMap,Me.pointShadowMap.value=O.state.pointShadowMap,Me.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Ce,W.uniformsList=null,Ce}function wh(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=Ha.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function Rh(A,U){const H=Se.get(A);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Dp(A,U,H,W,O){U.isScene!==!0&&(U=Lt),Ne.resetTextureUnits();const ne=U.fog,ce=W.isMeshStandardMaterial?U.environment:null,me=T===null?M.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:jt,fe=(W.isMeshStandardMaterial?S:R).get(W.envMap||ce),we=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ce=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Me=!!H.morphAttributes.position,je=!!H.morphAttributes.normal,it=!!H.morphAttributes.color;let vt=Oi;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(vt=M.toneMapping);const bt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,at=bt!==void 0?bt.length:0,Ee=Se.get(W),pt=v.state.lights;if(Q===!0&&(de===!0||A!==N)){const zt=A===N&&W.id===P;xe.setState(W,A,zt)}let Je=!1;W.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==pt.state.version||Ee.outputColorSpace!==me||O.isBatchedMesh&&Ee.batching===!1||!O.isBatchedMesh&&Ee.batching===!0||O.isBatchedMesh&&Ee.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ee.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ee.instancing===!1||!O.isInstancedMesh&&Ee.instancing===!0||O.isSkinnedMesh&&Ee.skinning===!1||!O.isSkinnedMesh&&Ee.skinning===!0||O.isInstancedMesh&&Ee.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ee.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ee.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ee.instancingMorph===!1&&O.morphTexture!==null||Ee.envMap!==fe||W.fog===!0&&Ee.fog!==ne||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==xe.numPlanes||Ee.numIntersection!==xe.numIntersection)||Ee.vertexAlphas!==we||Ee.vertexTangents!==Ce||Ee.morphTargets!==Me||Ee.morphNormals!==je||Ee.morphColors!==it||Ee.toneMapping!==vt||Ee.morphTargetsCount!==at)&&(Je=!0):(Je=!0,Ee.__version=W.version);let an=Ee.currentProgram;Je===!0&&(an=ia(W,U,O));let ps=!1,on=!1,fr=!1;const mt=an.getUniforms(),Kt=Ee.uniforms;if(_e.useProgram(an.program)&&(ps=!0,on=!0,fr=!0),W.id!==P&&(P=W.id,on=!0),ps||N!==A){_e.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),mt.setValue(D,"projectionMatrix",A.projectionMatrix),mt.setValue(D,"viewMatrix",A.matrixWorldInverse);const Zt=mt.map.cameraPosition;Zt!==void 0&&Zt.setValue(D,ye.setFromMatrixPosition(A.matrixWorld)),ct.logarithmicDepthBuffer&&mt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&mt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),N!==A&&(N=A,on=!0,fr=!0)}if(O.isSkinnedMesh){mt.setOptional(D,O,"bindMatrix"),mt.setOptional(D,O,"bindMatrixInverse");const zt=O.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),mt.setValue(D,"boneTexture",zt.boneTexture,Ne))}O.isBatchedMesh&&(mt.setOptional(D,O,"batchingTexture"),mt.setValue(D,"batchingTexture",O._matricesTexture,Ne),mt.setOptional(D,O,"batchingIdTexture"),mt.setValue(D,"batchingIdTexture",O._indirectTexture,Ne),mt.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&mt.setValue(D,"batchingColorTexture",O._colorsTexture,Ne));const xn=H.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Re.update(O,H,an),(on||Ee.receiveShadow!==O.receiveShadow)&&(Ee.receiveShadow=O.receiveShadow,mt.setValue(D,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Kt.envMap.value=fe,Kt.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(Kt.envMapIntensity.value=U.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=iS()),on&&(mt.setValue(D,"toneMappingExposure",M.toneMappingExposure),Ee.needsLights&&Lp(Kt,fr),ne&&W.fog===!0&&ge.refreshFogUniforms(Kt,ne),ge.refreshMaterialUniforms(Kt,W,Z,$,v.state.transmissionRenderTarget[A.id]),Ha.upload(D,wh(Ee),Kt,Ne)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ha.upload(D,wh(Ee),Kt,Ne),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&mt.setValue(D,"center",O.center),mt.setValue(D,"modelViewMatrix",O.modelViewMatrix),mt.setValue(D,"normalMatrix",O.normalMatrix),mt.setValue(D,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const zt=W.uniformsGroups;for(let Zt=0,go=zt.length;Zt<go;Zt++){const Gi=zt[Zt];le.update(Gi,an),le.bind(Gi,an)}}return an}function Lp(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function Ip(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,U,H){const W=Se.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Se.get(A.texture).__webglTexture=U,Se.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:H,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,U){const H=Se.get(A);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0};const Np=D.createFramebuffer();this.setRenderTarget=function(A,U=0,H=0){T=A,C=U,g=H;let W=!0,O=null,ne=!1,ce=!1;if(A){const fe=Se.get(A);if(fe.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(fe.__webglFramebuffer===void 0)Ne.setupRenderTarget(A);else if(fe.__hasExternalTextures)Ne.rebindTextures(A,Se.get(A.texture).__webglTexture,Se.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Me=A.depthTexture;if(fe.__boundDepthTexture!==Me){if(Me!==null&&Se.has(Me)&&(A.width!==Me.image.width||A.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(A)}}const we=A.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ce=!0);const Ce=Se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ce[U])?O=Ce[U][H]:O=Ce[U],ne=!0):A.samples>0&&Ne.useMultisampledRTT(A)===!1?O=Se.get(A).__webglMultisampledFramebuffer:Array.isArray(Ce)?O=Ce[H]:O=Ce,I.copy(A.viewport),B.copy(A.scissor),z=A.scissorTest}else I.copy(ke).multiplyScalar(Z).floor(),B.copy(ze).multiplyScalar(Z).floor(),z=Ze;if(H!==0&&(O=Np),_e.bindFramebuffer(D.FRAMEBUFFER,O)&&W&&_e.drawBuffers(A,O),_e.viewport(I),_e.scissor(B),_e.setScissorTest(z),ne){const fe=Se.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,fe.__webglTexture,H)}else if(ce){const fe=U;for(let we=0;we<A.textures.length;we++){const Ce=Se.get(A.textures[we]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+we,Ce.__webglTexture,H,fe)}}else if(A!==null&&H!==0){const fe=Se.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,fe.__webglTexture,H)}P=-1},this.readRenderTargetPixels=function(A,U,H,W,O,ne,ce,me=0){if(!(A&&A.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ce!==void 0&&(fe=fe[ce]),fe){_e.bindFramebuffer(D.FRAMEBUFFER,fe);try{const we=A.textures[me],Ce=we.format,Me=we.type;if(!ct.textureFormatReadable(Ce)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Me)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-W&&H>=0&&H<=A.height-O&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),D.readPixels(U,H,W,O,Pe.convert(Ce),Pe.convert(Me),ne))}finally{const we=T!==null?Se.get(T).__webglFramebuffer:null;_e.bindFramebuffer(D.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(A,U,H,W,O,ne,ce,me=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ce!==void 0&&(fe=fe[ce]),fe)if(U>=0&&U<=A.width-W&&H>=0&&H<=A.height-O){_e.bindFramebuffer(D.FRAMEBUFFER,fe);const we=A.textures[me],Ce=we.format,Me=we.type;if(!ct.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.bufferData(D.PIXEL_PACK_BUFFER,ne.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),D.readPixels(U,H,W,O,Pe.convert(Ce),Pe.convert(Me),0);const it=T!==null?Se.get(T).__webglFramebuffer:null;_e.bindFramebuffer(D.FRAMEBUFFER,it);const vt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await O_(D,vt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ne),D.deleteBuffer(je),D.deleteSync(vt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,U=null,H=0){const W=Math.pow(2,-H),O=Math.floor(A.image.width*W),ne=Math.floor(A.image.height*W),ce=U!==null?U.x:0,me=U!==null?U.y:0;Ne.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,ce,me,O,ne),_e.unbindTexture()};const Up=D.createFramebuffer(),Fp=D.createFramebuffer();this.copyTextureToTexture=function(A,U,H=null,W=null,O=0,ne=null){ne===null&&(O!==0?($r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=O,O=0):ne=0);let ce,me,fe,we,Ce,Me,je,it,vt;const bt=A.isCompressedTexture?A.mipmaps[ne]:A.image;if(H!==null)ce=H.max.x-H.min.x,me=H.max.y-H.min.y,fe=H.isBox3?H.max.z-H.min.z:1,we=H.min.x,Ce=H.min.y,Me=H.isBox3?H.min.z:0;else{const xn=Math.pow(2,-O);ce=Math.floor(bt.width*xn),me=Math.floor(bt.height*xn),A.isDataArrayTexture?fe=bt.depth:A.isData3DTexture?fe=Math.floor(bt.depth*xn):fe=1,we=0,Ce=0,Me=0}W!==null?(je=W.x,it=W.y,vt=W.z):(je=0,it=0,vt=0);const at=Pe.convert(U.format),Ee=Pe.convert(U.type);let pt;U.isData3DTexture?(Ne.setTexture3D(U,0),pt=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ne.setTexture2DArray(U,0),pt=D.TEXTURE_2D_ARRAY):(Ne.setTexture2D(U,0),pt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Je=D.getParameter(D.UNPACK_ROW_LENGTH),an=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ps=D.getParameter(D.UNPACK_SKIP_PIXELS),on=D.getParameter(D.UNPACK_SKIP_ROWS),fr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,bt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,bt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,we),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ce),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Me);const mt=A.isDataArrayTexture||A.isData3DTexture,Kt=U.isDataArrayTexture||U.isData3DTexture;if(A.isDepthTexture){const xn=Se.get(A),zt=Se.get(U),Zt=Se.get(xn.__renderTarget),go=Se.get(zt.__renderTarget);_e.bindFramebuffer(D.READ_FRAMEBUFFER,Zt.__webglFramebuffer),_e.bindFramebuffer(D.DRAW_FRAMEBUFFER,go.__webglFramebuffer);for(let Gi=0;Gi<fe;Gi++)mt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(A).__webglTexture,O,Me+Gi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(U).__webglTexture,ne,vt+Gi)),D.blitFramebuffer(we,Ce,ce,me,je,it,ce,me,D.DEPTH_BUFFER_BIT,D.NEAREST);_e.bindFramebuffer(D.READ_FRAMEBUFFER,null),_e.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||A.isRenderTargetTexture||Se.has(A)){const xn=Se.get(A),zt=Se.get(U);_e.bindFramebuffer(D.READ_FRAMEBUFFER,Up),_e.bindFramebuffer(D.DRAW_FRAMEBUFFER,Fp);for(let Zt=0;Zt<fe;Zt++)mt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xn.__webglTexture,O,Me+Zt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xn.__webglTexture,O),Kt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,zt.__webglTexture,ne,vt+Zt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,zt.__webglTexture,ne),O!==0?D.blitFramebuffer(we,Ce,ce,me,je,it,ce,me,D.COLOR_BUFFER_BIT,D.NEAREST):Kt?D.copyTexSubImage3D(pt,ne,je,it,vt+Zt,we,Ce,ce,me):D.copyTexSubImage2D(pt,ne,je,it,we,Ce,ce,me);_e.bindFramebuffer(D.READ_FRAMEBUFFER,null),_e.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Kt?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(pt,ne,je,it,vt,ce,me,fe,at,Ee,bt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(pt,ne,je,it,vt,ce,me,fe,at,bt.data):D.texSubImage3D(pt,ne,je,it,vt,ce,me,fe,at,Ee,bt):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ne,je,it,ce,me,at,Ee,bt.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ne,je,it,bt.width,bt.height,at,bt.data):D.texSubImage2D(D.TEXTURE_2D,ne,je,it,ce,me,at,Ee,bt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Je),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,an),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ps),D.pixelStorei(D.UNPACK_SKIP_ROWS,on),D.pixelStorei(D.UNPACK_SKIP_IMAGES,fr),ne===0&&U.generateMipmaps&&D.generateMipmap(pt),_e.unbindTexture()},this.initRenderTarget=function(A){Se.get(A).__webglFramebuffer===void 0&&Ne.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ne.setTextureCube(A,0):A.isData3DTexture?Ne.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ne.setTexture2DArray(A,0):Ne.setTexture2D(A,0),_e.unbindTexture()},this.resetState=function(){C=0,g=0,T=null,_e.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}const Mf={type:"change"},yh={type:"start"},wp={type:"end"},Na=new Qr,Sf=new Ri,rS=Math.cos(70*rp.DEG2RAD),At=new F,$t=2*Math.PI,rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ml=1e-6;class aS extends xg{constructor(e,t=null){super(e,t),this.state=rt.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vs.ROTATE,MIDDLE:Vs.DOLLY,RIGHT:Vs.PAN},this.touches={ONE:Os.ROTATE,TWO:Os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Kn,this._lastTargetPosition=new F,this._quat=new Kn().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zu,this._sphericalDelta=new Zu,this._scale=1,this._panOffset=new F,this._rotateStart=new De,this._rotateEnd=new De,this._rotateDelta=new De,this._panStart=new De,this._panEnd=new De,this._panDelta=new De,this._dollyStart=new De,this._dollyEnd=new De,this._dollyDelta=new De,this._dollyDirection=new F,this._mouse=new De,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lS.bind(this),this._onPointerDown=oS.bind(this),this._onPointerUp=cS.bind(this),this._onContextMenu=_S.bind(this),this._onMouseWheel=fS.bind(this),this._onKeyDown=dS.bind(this),this._onTouchStart=pS.bind(this),this._onTouchMove=mS.bind(this),this._onMouseDown=hS.bind(this),this._onMouseMove=uS.bind(this),this._interceptControlDown=xS.bind(this),this._interceptControlUp=gS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mf),this.update(),this.state=rt.NONE}update(e=null){const t=this.object.position;At.copy(t).sub(this.target),At.applyQuaternion(this._quat),this._spherical.setFromVector3(At),this.autoRotate&&this.state===rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=$t:n>Math.PI&&(n-=$t),i<-Math.PI?i+=$t:i>Math.PI&&(i-=$t),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(At.setFromSpherical(this._spherical),At.applyQuaternion(this._quatInverse),t.copy(this.target).add(At),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=At.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=At.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Na.origin.copy(this.object.position),Na.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Na.direction))<rS?this.object.lookAt(this.target):(Sf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Na.intersectPlane(Sf,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ml||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ml||this._lastTargetPosition.distanceToSquared(this.target)>ml?(this.dispatchEvent(Mf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?$t/60*this.autoRotateSpeed*e:$t/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){At.setFromMatrixColumn(t,0),At.multiplyScalar(-e),this._panOffset.add(At)}_panUp(e,t){this.screenSpacePanning===!0?At.setFromMatrixColumn(t,1):(At.setFromMatrixColumn(t,0),At.crossVectors(this.object.up,At)),At.multiplyScalar(e),this._panOffset.add(At)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;At.copy(i).sub(this.target);let s=At.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($t*this._rotateDelta.x/t.clientHeight),this._rotateUp($t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp($t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-$t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft($t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-$t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($t*this._rotateDelta.x/t.clientHeight),this._rotateUp($t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new De,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function oS(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function lS(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function cS(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wp),this.state=rt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function hS(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Vs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=rt.DOLLY;break;case Vs.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=rt.ROTATE}break;case Vs.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=rt.PAN}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(yh)}function uS(r){switch(this.state){case rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function fS(r){this.enabled===!1||this.enableZoom===!1||this.state!==rt.NONE||(r.preventDefault(),this.dispatchEvent(yh),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(wp))}function dS(r){this.enabled!==!1&&this._handleKeyDown(r)}function pS(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Os.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=rt.TOUCH_ROTATE;break;case Os.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=rt.TOUCH_PAN;break;default:this.state=rt.NONE}break;case 2:switch(this.touches.TWO){case Os.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=rt.TOUCH_DOLLY_PAN;break;case Os.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=rt.TOUCH_DOLLY_ROTATE;break;default:this.state=rt.NONE}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(yh)}function mS(r){switch(this._trackPointer(r),this.state){case rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=rt.NONE}}function _S(r){this.enabled!==!1&&r.preventDefault()}function xS(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gS(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Tf(r,e){if(e===E_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===wc||e===tp){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===wc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class vS extends hr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new TS(t)}),this.register(function(t){return new ES(t)}),this.register(function(t){return new NS(t)}),this.register(function(t){return new US(t)}),this.register(function(t){return new FS(t)}),this.register(function(t){return new wS(t)}),this.register(function(t){return new RS(t)}),this.register(function(t){return new CS(t)}),this.register(function(t){return new PS(t)}),this.register(function(t){return new SS(t)}),this.register(function(t){return new DS(t)}),this.register(function(t){return new AS(t)}),this.register(function(t){return new IS(t)}),this.register(function(t){return new LS(t)}),this.register(function(t){return new yS(t)}),this.register(function(t){return new OS(t)}),this.register(function(t){return new BS(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Fr.extractUrlBase(e);a=Fr.resolveURL(c,this.path)}else a=Fr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new yp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Rp){try{a[We.KHR_BINARY_GLTF]=new kS(e)}catch(u){i&&i(u);return}s=JSON.parse(a[We.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new JS(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(u){case We.KHR_MATERIALS_UNLIT:a[u]=new MS;break;case We.KHR_DRACO_MESH_COMPRESSION:a[u]=new zS(s,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:a[u]=new VS;break;case We.KHR_MESH_QUANTIZATION:a[u]=new GS;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function bS(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class yS{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ie(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],jt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Dc(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ng(h),c.distance=u;break;case"spot":c=new eg(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Bn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class MS{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return ns}extendParams(e,t,n){const i=[];e.color=new Ie(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],jt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Nt))}return Promise.all(i)}}class SS{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class TS{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new De(o,o)}return Promise.all(s)}}class ES{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class AS{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class wS{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],jt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Nt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class RS{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class CS{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(o[0],o[1],o[2],jt),Promise.all(s)}}class PS{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class DS{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(o[0],o[1],o[2],jt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Nt)),Promise.all(s)}}class LS{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class IS{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class NS{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class US{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class FS{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class OS{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class BS{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==bn.TRIANGLES&&c.mode!==bn.TRIANGLE_STRIP&&c.mode!==bn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(const x of u){const _=new Be,p=new F,m=new Kn,y=new F(1,1,1),v=new Px(x.geometry,x.material,f);for(let b=0;b<f;b++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,b),l.SCALE&&y.fromBufferAttribute(l.SCALE,b),v.setMatrixAt(b,_.compose(p,m,y));for(const b in l)if(b==="_COLOR_0"){const E=l[b];v.instanceColor=new Cc(E.array,E.itemSize,E.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&x.geometry.setAttribute(b,l[b]);gt.prototype.copy.call(v,x),this.parser.assignFinalMaterial(v),d.push(v)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const Rp="glTF",Ar=12,Ef={JSON:1313821514,BIN:5130562};class kS{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ar),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Rp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ar,s=new DataView(e,Ar);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Ef.JSON){const c=new Uint8Array(e,Ar+a,o);this.content=n.decode(c)}else if(l===Ef.BIN){const c=Ar+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class zS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Ic[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Ic[h]||h.toLowerCase();if(a[h]!==void 0){const f=n.accessors[e.attributes[h]],d=Ws[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const x in d.attributes){const _=d.attributes[x],p=l[x];p!==void 0&&(_.normalized=p)}u(d)},o,c,jt,f)})})}}class VS{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class GS{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class Cp extends ta{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,x=e*c,_=x-c,p=-2*d+3*f,m=d-f,y=1-p,v=m-f+u;for(let b=0;b!==o;b++){const E=a[_+b+o],M=a[_+b+l]*h,w=a[x+b+o],C=a[x+b]*h;s[b]=y*E+v*M+p*w+m*C}return s}}const HS=new Kn;class WS extends Cp{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return HS.fromArray(s).normalize().toArray(s),s}}const bn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ws={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Af={9728:qt,9729:Xt,9984:jd,9985:Ba,9986:Cr,9987:ui},wf={33071:Wn,33648:Qa,10497:tr},_l={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ic={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},wi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},XS={CUBICSPLINE:void 0,LINEAR:Kr,STEP:jr},xl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function qS(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new _h({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:gi})),r.DefaultMaterial}function $i(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Bn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function YS(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(f)}if(s){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function jS(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function KS(r){let e;const t=r.extensions&&r.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+gl(t.attributes):e=r.indices+":"+gl(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+gl(r.targets[n]);return e}function gl(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Nc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ZS(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const $S=new Be;class JS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new bS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new Jx(this.options.manager):this.textureLoader=new rg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new yp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return $i(s,o,i),Bn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Fr.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=_l[i.type],o=Ws[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Yt(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=_l[i.type],c=Ws[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,x=i.normalized===!0;let _,p;if(d&&d!==u){const m=Math.floor(f/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let v=t.cache.get(y);v||(_=new c(o,m*d,i.count*d/h),v=new Ex(_,d/h),t.cache.add(y,v)),p=new uh(v,l,f%d/h,x)}else o===null?_=new c(i.count*l):_=new c(o,f,i.count*l),p=new Yt(_,l,x);if(i.sparse!==void 0){const m=_l.SCALAR,y=Ws[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,E=new y(a[1],v,i.sparse.count*m),M=new c(a[2],b,i.sparse.count*l);o!==null&&(p=new Yt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let w=0,C=E.length;w<C;w++){const g=E[w];if(p.setX(g,M[w*l]),l>=2&&p.setY(g,M[w*l+1]),l>=3&&p.setZ(g,M[w*l+2]),l>=4&&p.setW(g,M[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=x}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(s.samplers||{})[a.sampler]||{};return h.magFilter=Af[f.magFilter]||Xt,h.minFilter=Af[f.minFilter]||ui,h.wrapS=wf[f.wrapS]||tr,h.wrapT=wf[f.wrapT]||tr,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==qt&&h.minFilter!==Xt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let x=f;t.isImageBitmapLoader===!0&&(x=function(_){const p=new Pt(_);p.needsUpdate=!0,f(p)}),t.load(Fr.resolveURL(u,s.path),x,void 0,d)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Bn(u,a),u.userData.mimeType=a.mimeType||ZS(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[We.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new _p,qn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new mp,qn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return _h}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[We.KHR_MATERIALS_UNLIT]){const u=i[We.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new Ie(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],jt),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Nt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Gn);const h=s.alphaMode||xl.OPAQUE;if(h===xl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===xl.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==ns&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new De(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==ns&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==ns){const u=s.emissiveFactor;o.emissive=new Ie().setRGB(u[0],u[1],u[2],jt)}return s.emissiveTexture!==void 0&&a!==ns&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Nt)),Promise.all(c).then(function(){const u=new a(o);return s.name&&(u.name=s.name),Bn(u,s),t.associations.set(u,{materials:e}),s.extensions&&$i(i,u,s),u})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Rf(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=KS(c),u=i[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[We.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Rf(new Un,c,t),i[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?qS(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,x=h.length;d<x;d++){const _=h[d],p=a[d];let m;const y=c[d];if(p.mode===bn.TRIANGLES||p.mode===bn.TRIANGLE_STRIP||p.mode===bn.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new wx(_,y):new En(_,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===bn.TRIANGLE_STRIP?m.geometry=Tf(m.geometry,tp):p.mode===bn.TRIANGLE_FAN&&(m.geometry=Tf(m.geometry,wc));else if(p.mode===bn.LINES)m=new Nx(_,y);else if(p.mode===bn.LINE_STRIP)m=new mh(_,y);else if(p.mode===bn.LINE_LOOP)m=new Ux(_,y);else if(p.mode===bn.POINTS)m=new Fx(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&jS(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Bn(m,s),p.extensions&&$i(i,m,p),t.assignFinalMaterial(m),u.push(m)}for(let d=0,x=u.length;d<x;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return s.extensions&&$i(i,u[0],s),u[0];const f=new is;s.extensions&&$i(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,x=u.length;d<x;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(rp.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new gh(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Bn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const f=new Be;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new dh(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],x=i.samplers[d.sampler],_=d.target,p=_.node,m=i.parameters!==void 0?i.parameters[x.input]:x.input,y=i.parameters!==void 0?i.parameters[x.output]:x.output;_.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",y)),c.push(x),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],x=u[2],_=u[3],p=u[4],m=[];for(let v=0,b=f.length;v<b;v++){const E=f[v],M=d[v],w=x[v],C=_[v],g=p[v];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const T=n._createAnimationTracks(E,M,w,C,g);if(T)for(let P=0;P<T.length;P++)m.push(T[P])}const y=new Xx(s,void 0,m);return Bn(y,i),y})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,$S)});for(let d=0,x=u.length;d<x;d++)h.add(u[d]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new pp:c.length>1?h=new is:c.length===1?h=c[0]:h=new gt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),Bn(h,s),s.extensions&&$i(n,h,s),s.matrix!==void 0){const u=new Be;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new is;n.name&&(s.name=i.createUniqueName(n.name)),Bn(s,n),n.extensions&&$i(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof qn||f instanceof Pt)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];wi[s.path]===wi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(wi[s.path]){case wi.weights:c=sr;break;case wi.rotation:c=rr;break;case wi.translation:case wi.scale:c=ar;break;default:switch(n.itemSize){case 1:c=sr;break;case 2:case 3:default:c=ar;break}break}const h=i.interpolation!==void 0?XS[i.interpolation]:Kr,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const x=new c(l[f]+"."+wi[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Nc(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof rr?WS:Cp;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function QS(r,e,t){const n=e.attributes,i=new bi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),o.normalized){const h=Nc(Ws[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new F,l=new F;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,x=f.max;if(d!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(x[2]))),f.normalized){const _=Nc(Ws[f.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new $n;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Rf(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=Ic[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return $e.workingColorSpace!==jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),Bn(r,e),QS(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?YS(r,e.targets,t):r})}var eT=us('<div class="w-full h-full relative"><canvas class="absolute top-0 left-0 w-full h-full"></canvas></div>');function tT(r,e){ao(e,!0);let t=Bf(e,"position",19,()=>({x:0,y:0,z:0})),n,i,s,a=0,o=!1,l=!1;ro(()=>{const u=new Tx;u.background=null;const f=new Ht(75,1,.1,1e3);f.position.set(4,2,3),f.lookAt(0,0,0),u.add(f),u.add(new sg(16777215,1));const d=new Dc(16777215,1.5);d.position.set(5,5,5),u.add(d);const x=new Dc(16777215,1);x.position.set(-5,3,-5),u.add(x);const _=new sS({canvas:n,antialias:!0,alpha:!0}),p=new aS(f,n);p.enableDamping=!0,new vS().load(`${xm}/assets/${e.name}`,I=>{s=I.scene,u.add(s),s.position.set(t().x,t().y,t().z),s.scale.set(e.settings.scale,e.settings.scale,e.settings.scale),s.traverse(B=>{if(B.isMesh){const z=B.material;z.metalness=0,z.roughness=.7,e.settings.color&&(z.color=new Ie(e.settings.color)),z.needsUpdate=!0}})},void 0,I=>{console.error("Error loading model:",I)});const y=()=>{if(!i)return;const I=i.clientWidth,B=i.clientHeight;_.setSize(I,B),f.aspect=I/B,f.updateProjectionMatrix()};new ResizeObserver(y).observe(i);const v=Math.PI*3,b=Math.PI*2,E=-Math.PI*1.5;let M=!1,w=b;const C=1;let g=0;const T=new og,P=new IntersectionObserver(I=>{I.forEach(B=>{B.isIntersecting&&!o&&s?(o=!0,l=!1,M=!0,a=v,w=b,g=0,s.scale.set(e.settings.scale/3,e.settings.scale/3,e.settings.scale/3),s.position.set(t().x,t().y,t().z)):!B.isIntersecting&&o&&s&&(o=!1,M=!1,l=!0,g=0)})},{threshold:.15});Uc(()=>i&&P.observe(i));function N(){requestAnimationFrame(N);const I=T.getDelta();if(s){if(M){a+=E*I,a=Math.max(a,0);const B=a*I;s.rotation.y+=B,w-=Math.abs(B);const z=1-w/b,V=z*z*(3-2*z),q=e.settings.scale/3,G=q+V*(e.settings.scale-q);if(s.scale.set(G,G,G),w<=0||a<=.01){M=!1,a=0;const $=Math.round(s.rotation.y/b)*b;s.rotation.y=$,s.scale.set(e.settings.scale,e.settings.scale,e.settings.scale)}}if(l){g+=I/C,g=Math.min(g,1);const B=g*g*(3-2*g),z=e.settings.scale*(1-B);s.scale.set(z,z,z),s.rotation.y+=Math.PI*2*I/C;const V=2;s.position.y=t().y+B*V,g>=1&&(l=!1,g=0)}}p.update(),_.render(u,f)}return N(),()=>{P.disconnect(),_.dispose()}});var c=eT(),h=hn(c);Xs(h,u=>n=u,()=>n),Jt(c),Xs(c,u=>i=u,()=>i),Pi(r,c),oo()}var nT=us(`<div class="
	absolute h-full w-full
	bg-[linear-gradient(to_right,#80808055_1px,transparent_1px),linear-gradient(to_bottom,#80808055_1px,transparent_1px)]
	bg-[size:54px_54px]
	mask-[radial-gradient(circle,white_10%,transparent_60%)]
"></div> <div class="w-screen h-screen inset-0 flex flex-col justify-center items-center z-10 text-center px-6 "><h1 class="text-4xl sm:text-6xl lg:text-7xl font-bold text-anim">Center for <span class="font-serif italic text-gray-800">Innovation</span> <br/></h1> <h1 class="text-4xl sm:text-6xl lg:text-7xl font-bold text-anim">and <span class="font-serif italic text-gray-800">Incubation</span></h1></div>`,1);function iT(r,e){ao(e,!1),ro(()=>{let n=new Wd(".text-anim",{type:"chars, words"});$a.from(n.chars,{y:30,opacity:0,stagger:.05,duration:.4,ease:"power3.out"})}),gm();var t=nT();fm(2),Pi(r,t),oo()}var sT=us('<span class="text svelte-lr7kg1"> </span>'),rT=us('<div class="marquee-wrapper svelte-lr7kg1"><div class="marquee svelte-lr7kg1"></div></div>');function aT(r,e){ao(e,!0);let t=Bf(e,"speed",3,50),n,i,s;function a(){if(!n||!i||!e.text||e.text.length===0)return;n.querySelectorAll(".text").forEach((_,p)=>{p>=e.text.length&&_.remove()});const h=n.querySelector(".text");if(!h)return;let u=0;const f=100;for(;n.scrollWidth<=i.offsetWidth*2&&u<f;)e.text.forEach(_=>{const p=h.cloneNode(!1);p.textContent=`• ${_}`,n.appendChild(p)}),u++;const d=n.scrollWidth/2,x=d/t();s&&s.kill(),s=$a.to(n,{x:-d,duration:x,ease:"none",repeat:-1,modifiers:{x:$a.utils.unitize(_=>parseFloat(_)%-d)}})}Uc(()=>{e.text&&n&&i&&requestAnimationFrame(()=>{a()})}),ro(()=>(window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)})),Bp(()=>{s&&s.kill()});var o=rT(),l=hn(o);zf(l,21,()=>e.text,kf,(c,h)=>{var u=sT(),f=hn(u);Jt(u),yl(()=>Ml(f,`• ${It(h)??""}`)),Pi(c,u)}),Jt(l),Xs(l,c=>n=c,()=>n),Jt(o),Xs(o,c=>i=c,()=>i),Pi(r,o),oo()}const Ns=[{name:["About Us"],_3d_name:"cam.glb",route:"/about",color:"#A78BFA",complementaryColor:"#FAE78B",description:"Learn more about our mission, vision, and the team behind our organization.",description_fr:"En savoir plus sur notre mission, notre vision et l'équipe derrière notre organisation.",settings:{rotateX:0,rotateY:0,rotateZ:0,scale:.7,spinSpeed:10,color:"#a78bfa",wireframe:!1}},{name:["Projects"],_3d_name:"cd.glb",route:"/projects",color:"#34D399",complementaryColor:"#D3346C",description:"Explore the innovative projects we are currently working on and their real-world impact.",description_fr:"Découvrez les projets innovants sur lesquels nous travaillons actuellement et leur impact réel.",settings:{rotateX:0,rotateY:0,rotateZ:0,scale:.7,spinSpeed:0,color:"#34D399",wireframe:!1}},{name:["Events"],_3d_name:"glasses.glb",route:"/events",color:"#F472B6",complementaryColor:"#72F4B0",description:"Stay updated with our latest workshops, hackathons, and community events.",description_fr:"Restez informé de nos derniers ateliers, hackathons et événements communautaires.",settings:{rotateX:0,rotateY:0,rotateZ:0,scale:.7,spinSpeed:0,color:"#F472B6",wireframe:!1}},{name:["Team"],_3d_name:"pen.glb",route:"/team",color:"#60A5FA",complementaryColor:"#FAB960",description:"Meet the passionate members driving innovation and leadership within our group.",description_fr:"Rencontrez les membres passionnés qui stimulent l’innovation et le leadership au sein de notre groupe.",settings:{rotateX:0,rotateY:0,rotateZ:0,scale:.7,spinSpeed:0,color:"#60A5FA",wireframe:!1}},{name:["Contact"],_3d_name:"phone.glb",route:"/contact",color:"#F59E0B",complementaryColor:"#0B5AF5",description:"Reach out to us for collaboration, inquiries, or support.",description_fr:"Contactez-nous pour une collaboration, des demandes de renseignements ou du soutien.",settings:{rotateX:0,rotateY:0,rotateZ:0,scale:.7,spinSpeed:0,color:"#F59E0B",wireframe:!1}}];var oT=us('<div class="fixed top-[10vh] left-[5vw] z-10 max-w-[400px] text-2xl font-bold"><span> </span></div> <div class="fixed bottom-[10vh] right-[3vw] z-10 max-w-[400px] text-2xl font-bold"><span> </span></div> <div class="fixed w-screen h-screen top-[45%] z-10 opacity-65"><!></div>',1),lT=us('<div class="w-screen h-screen relative pointer-events-none"><!></div>'),cT=us('<div class="relative w-screen h-screen overflow-hidden"><div class="absolute top-0 left-0 h-screen w-screen"><div class="wavy-circle bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-40 animate-slow-spin fixed z-10 top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-screen svelte-1uha8ag"></div> <div class="wavy-box bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-40 animate-slow-spin fixed z-10 bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-screen svelte-1uha8ag"></div> <!></div> <div class="absolute top-0 left-0 scroll-container h-screen w-screen z-20"><div class="w-screen h-screen relative"><!></div> <!></div></div>');function gT(r,e){ao(e,!0);let t=Mo("#ffffff"),n=Mo(0),i=dm([]),s=Mo(!1);function a(_){It(s)||(ra(s,!0),_.preventDefault(),ra(n,_.deltaY>0?Math.min(It(n)+1,Ns.length):Math.max(It(n)-1,0),!0),setTimeout(()=>{ra(s,!1)},800))}Uc(()=>{const _=i[It(n)];_&&_.scrollIntoView({behavior:"smooth"}),ra(t,Ns[It(n)-1]?.complementaryColor||"#ffffff",!0)}),ro(()=>(window.addEventListener("wheel",a,{passive:!1}),()=>window.removeEventListener("wheel",a)));var o=cT(),l=hn(o),c=pr(hn(l),4);{var h=_=>{var p=Op(),m=Lh(p);Mm(m,()=>It(n),y=>{var v=oT(),b=Lh(v),E=hn(b),M=hn(E,!0);Jt(E),Jt(b);var w=pr(b,2),C=hn(w),g=hn(C,!0);Jt(C),Jt(w);var T=pr(w,2),P=hn(T);aT(P,{speed:300,get text(){return Ns[It(n)-1].name},get key(){return It(n)}}),Jt(T),yl(()=>{Ml(M,Ns[It(n)-1].description),Ml(g,Ns[It(n)-1].description_fr)}),To(3,b,()=>Eo,()=>({x:-20,duration:500})),To(3,w,()=>Eo,()=>({x:-20,duration:500})),To(3,T,()=>Eo,()=>({y:20,duration:400})),Pi(y,v)}),Pi(_,p)};mm(c,_=>{It(n)!==0&&_(h)})}Jt(l);var u=pr(l,2),f=hn(u),d=hn(f);iT(d,{}),Jt(f),Xs(f,_=>i[0]=_,()=>i?.[0]);var x=pr(f,2);zf(x,17,()=>Ns,kf,(_,p,m)=>{var y=lT(),v=hn(y);tT(v,{get name(){return It(p)._3d_name},get settings(){return It(p).settings}}),Jt(y),Xs(y,(b,E)=>i[E+1]=b,b=>i?.[b+1],()=>[m]),Pi(_,y)}),Jt(u),Jt(o),yl(()=>Tm(o,`background-color: ${It(t)??""}; transition: background-color 1s ease;`)),Pi(r,o),oo()}export{gT as component};
