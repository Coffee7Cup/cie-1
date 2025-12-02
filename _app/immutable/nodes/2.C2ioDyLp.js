import{f as vn,a as Ot,d as Hc,c as Jp}from"../chunks/BRdNnlDH.js";import{o as ca,a as Qp}from"../chunks/Coq9pQZC.js";import{D as kf,h as di,E as zf,l as Ge,W as em,G as tm,H as nm,I as zh,J as Co,K as Po,e as xa,aa as im,az as rm,ah as Vh,c as sm,b as Al,a as wl,s as am,aC as Rl,a8 as Hh,ax as Vf,aI as om,aJ as Hf,r as Gf,p as lm,aK as Wf,aL as cm,aM as Do,at as hm,aN as um,aO as fm,aw as dm,d as pm,a1 as mm,aP as Xf,N as Yf,aQ as _m,aR as xm,U as gm,F as vm,aS as bm,a5 as ym,L as Mm,i as Sm,aT as Tm,ap as qf,aU as Em,aV as Ss,aW as Am,aX as wm,w as Yi,g as jf,A as Et,B as Mt,z as qi,T as Wn,C as qt,x as Xr,ai as Rm,y as yi,aD as Cl,aF as Yr,R as Cm}from"../chunks/-JsSzmPM.js";import{p as _s,b as Mi,i as Pl}from"../chunks/qbQGl2ao.js";import{b as Gc,r as Pm,g as Dm}from"../chunks/Bsqq_zAx.js";import"../chunks/eWtI-4ho.js";import{i as Kf}from"../chunks/BnmQ_pmG.js";import{a as Lm,d as Zf,s as es,e as Gh}from"../chunks/ByDUF8hX.js";import{B as Im}from"../chunks/DemL7uX9.js";function Wc(s,e){return e}function Nm(s,e,t){for(var n=[],i=e.length,r=0;r<i;r++)um(e[r].e,n,!0);fm(n,()=>{var a=n.length===0&&t!==null;if(a){var o=t,l=o.parentNode;dm(l),l.append(o),s.items.clear(),In(s,e[0].prev,e[i-1].next)}for(var c=0;c<i;c++){var h=e[c];a||(s.items.delete(h.k),In(s,h.prev,h.next)),pm(h.e,!a)}s.first===e[0]&&(s.first=e[0].prev)})}function Xc(s,e,t,n,i,r=null){var a=s,o=new Map,l=null,c=(e&Xf)!==0,h=(e&Wf)!==0,u=(e&Hf)!==0;if(c){var f=s;a=di?Co(mm(f)):f.appendChild(wl())}di&&zf();var d=null,x=em(()=>{var y=t();return om(y)?y:y==null?[]:Vf(y)}),_,p=!0;function m(){Um(g,_,a,e,n),d!==null&&(_.length===0?(d.fragment?(a.before(d.fragment),d.fragment=null):Gf(d.effect),b.first=d.effect):lm(d.effect,()=>{d=null}))}var b=kf(()=>{_=Ge(x);var y=_.length;let T=!1;if(di){var M=tm(a)===nm;M!==(y===0)&&(a=zh(),Co(a),Po(!1),T=!0)}for(var w=new Set,C=sm,v=null,E=am(),P=0;P<y;P+=1){di&&xa.nodeType===im&&xa.data===rm&&(a=xa,T=!0,Po(!1));var I=_[P],N=n(I,P),k=p?null:o.get(N);k?(h&&Vh(k.v,I),u?Vh(k.i,P):k.i=P,E&&C.skipped_effects.delete(k.e)):(k=Fm(p?a:null,v,I,N,P,i,e,t),p&&(k.o=!0,v===null?l=k:v.next=k,v=k),o.set(N,k)),w.add(N)}if(y===0&&r&&!d)if(p)d={fragment:null,effect:Al(()=>r(a))};else{var V=document.createDocumentFragment(),B=wl();V.append(B),d={fragment:V,effect:Al(()=>r(B))}}if(di&&y>0&&Co(zh()),!p)if(E){for(const[X,H]of o)w.has(X)||C.skipped_effects.add(H.e);C.oncommit(m),C.ondiscard(()=>{})}else m();T&&Po(!0),Ge(x)}),g={effect:b,items:o,first:l};p=!1,di&&(a=xa)}function Um(s,e,t,n,i){var r=(n&_m)!==0,a=e.length,o=s.items,l=s.first,c,h=null,u,f=[],d=[],x,_,p,m;if(r)for(m=0;m<a;m+=1)x=e[m],_=i(x,m),p=o.get(_),p.o&&(p.a?.measure(),(u??=new Set).add(p));for(m=0;m<a;m+=1){if(x=e[m],_=i(x,m),p=o.get(_),s.first??=p,!p.o){p.o=!0;var b=h?h.next:l;In(s,h,p),In(s,p,b),Lo(p,b,t),h=p,f=[],d=[],l=h.next;continue}if((p.e.f&Do)!==0&&(Gf(p.e),r&&(p.a?.unfix(),(u??=new Set).delete(p))),p!==l){if(c!==void 0&&c.has(p)){if(f.length<d.length){var g=d[0],y;h=g.prev;var T=f[0],M=f[f.length-1];for(y=0;y<f.length;y+=1)Lo(f[y],g,t);for(y=0;y<d.length;y+=1)c.delete(d[y]);In(s,T.prev,M.next),In(s,h,T),In(s,M,g),l=g,h=M,m-=1,f=[],d=[]}else c.delete(p),Lo(p,l,t),In(s,p.prev,p.next),In(s,p,h===null?s.first:h.next),In(s,h,p),h=p;continue}for(f=[],d=[];l!==null&&l.k!==_;)(l.e.f&Do)===0&&(c??=new Set).add(l),d.push(l),l=l.next;if(l===null)continue;p=l}f.push(p),h=p,l=p.next}let w=o.size>a;if(l!==null||c!==void 0){for(var C=c===void 0?[]:Vf(c);l!==null;)(l.e.f&Do)===0&&C.push(l),l=l.next;var v=C.length;if(w=o.size-v>a,v>0){var E=(n&Xf)!==0&&a===0?t:null;if(r){for(m=0;m<v;m+=1)C[m].a?.measure();for(m=0;m<v;m+=1)C[m].a?.fix()}Nm(s,C,E)}}if(w)for(const P of o.values())P.o||(In(s,h,P),h=P);s.effect.last=h&&h.e,r&&Yf(()=>{if(u!==void 0)for(p of u)p.a?.apply()})}function Fm(s,e,t,n,i,r,a,o){var l=(a&Wf)!==0,c=(a&cm)===0,h=l?c?Rl(t,!1,!1):Hh(t):t,u=(a&Hf)===0?i:Hh(i),f={i:u,v:h,k:n,a:null,e:null,o:!1,prev:e,next:null};try{if(s===null){var d=document.createDocumentFragment();d.append(s=wl())}return f.e=Al(()=>r(s,h,u,o)),e!==null&&(e.next=f),f}finally{}}function Lo(s,e,t){for(var n=s.next?s.next.e.nodes_start:t,i=e?e.e.nodes_start:t,r=s.e.nodes_start;r!==null&&r!==n;){var a=hm(r);i.before(r),r=a}}function In(s,e,t){e===null?(s.first=t,s.effect.first=t&&t.e):(e.e.next&&(e.e.next.prev=null),e.next=t,e.e.next=t&&t.e),t!==null&&(t.e.prev&&(t.e.prev.next=null),t.prev=e,t.e.prev=e&&e.e)}function Om(s,e,t){di&&zf();var n=new Im(s),i=!xm();kf(()=>{var r=e();i&&r!==null&&typeof r=="object"&&(r={}),n.ensure(r,t)})}function Bm(s,e){return s==null?null:String(s)}function ha(s,e,t,n){var i=s.__style;if(di||i!==e){var r=Bm(e);(!di||r!==s.getAttribute("style"))&&(r==null?s.removeAttribute("style"):s.style.cssText=r),s.__style=e}return n}const km=()=>performance.now(),mi={tick:s=>requestAnimationFrame(s),now:()=>km(),tasks:new Set};function $f(){const s=mi.now();mi.tasks.forEach(e=>{e.c(s)||(mi.tasks.delete(e),e.f())}),mi.tasks.size!==0&&mi.tick($f)}function zm(s){let e;return mi.tasks.size===0&&mi.tick($f),{promise:new Promise(t=>{mi.tasks.add(e={c:s,f:t})}),abort(){mi.tasks.delete(e)}}}function ga(s,e){qf(()=>{s.dispatchEvent(new CustomEvent(e))})}function Vm(s){if(s==="float")return"cssFloat";if(s==="offset")return"cssOffset";if(s.startsWith("--"))return s;const e=s.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function Wh(s){const e={},t=s.split(";");for(const n of t){const[i,r]=n.split(":");if(!i||r===void 0)break;const a=Vm(i.trim());e[a]=r.trim()}return e}const Hm=s=>s;function cr(s,e,t,n){var i=(s&Am)!==0,r=(s&wm)!==0,a=i&&r,o=(s&Tm)!==0,l=a?"both":i?"in":"out",c,h=e.inert,u=e.style.overflow,f,d;function x(){return qf(()=>c??=t()(e,n?.()??{},{direction:l}))}var _={is_global:o,in(){if(e.inert=h,!i){d?.abort(),d?.reset?.();return}r||f?.abort(),ga(e,"introstart"),f=Dl(e,x(),d,1,()=>{ga(e,"introend"),f?.abort(),f=c=void 0,e.style.overflow=u})},out(g){if(!r){g?.(),c=void 0;return}e.inert=!0,ga(e,"outrostart"),d=Dl(e,x(),f,0,()=>{ga(e,"outroend"),g?.()})},stop:()=>{f?.abort(),d?.abort()}},p=gm;if((p.transitions??=[]).push(_),i&&Lm){var m=o;if(!m){for(var b=p.parent;b&&(b.f&vm)!==0;)for(;(b=b.parent)&&(b.f&bm)===0;);m=!b||(b.f&ym)!==0}m&&Mm(()=>{Sm(()=>_.in())})}}function Dl(s,e,t,n,i){var r=n===1;if(Em(e)){var a,o=!1;return Yf(()=>{if(!o){var p=e({direction:r?"in":"out"});a=Dl(s,p,t,n,i)}}),{abort:()=>{o=!0,a?.abort()},deactivate:()=>a.deactivate(),reset:()=>a.reset(),t:()=>a.t()}}if(t?.deactivate(),!e?.duration)return i(),{abort:Ss,deactivate:Ss,reset:Ss,t:()=>n};const{delay:l=0,css:c,tick:h,easing:u=Hm}=e;var f=[];if(r&&t===void 0&&(h&&h(0,1),c)){var d=Wh(c(0,1));f.push(d,d)}var x=()=>1-n,_=s.animate(f,{duration:l,fill:"forwards"});return _.onfinish=()=>{_.cancel();var p=t?.t()??1-n;t?.abort();var m=n-p,b=e.duration*Math.abs(m),g=[];if(b>0){var y=!1;if(c)for(var T=Math.ceil(b/16.666666666666668),M=0;M<=T;M+=1){var w=p+m*u(M/T),C=Wh(c(w,1-w));g.push(C),y||=C.overflow==="hidden"}y&&(s.style.overflow="hidden"),x=()=>{var v=_.currentTime;return p+m*u(v/b)},h&&zm(()=>{if(_.playState!=="running")return!1;var v=x();return h(v,1-v),!0})}_=s.animate(g,{duration:b,fill:"forwards"}),_.onfinish=()=>{x=()=>n,h?.(n,1-n),i()}},{abort:()=>{_&&(_.cancel(),_.effect=null,_.onfinish=Ss)},deactivate:()=>{i=Ss},reset:()=>{n===0&&h?.(1,0)},t:()=>x()}}const Gm="";function Wm(...s){return Gc+Gm+Pm(s[0],s[1])}const Yc="181",qr={ROTATE:0,DOLLY:1,PAN:2},Hr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xm=0,Xh=1,Ym=2,Jf=1,qm=2,ui=3,Si=0,nn=1,Xn=2,gi=0,jr=1,Yh=2,qh=3,jh=4,jm=5,or=100,Km=101,Zm=102,$m=103,Jm=104,Qm=200,e0=201,t0=202,n0=203,Ll=204,Il=205,i0=206,r0=207,s0=208,a0=209,o0=210,l0=211,c0=212,h0=213,u0=214,Nl=0,Ul=1,Fl=2,ts=3,Ol=4,Bl=5,kl=6,zl=7,Qf=0,f0=1,d0=2,Vi=0,p0=1,m0=2,_0=3,x0=4,g0=5,v0=6,b0=7,Kh="attached",y0="detached",ed=300,ns=301,is=302,Vl=303,Hl=304,vo=306,rs=1e3,qn=1001,no=1002,Zt=1003,td=1004,Fs=1005,Kt=1006,qa=1007,_i=1008,Jn=1009,nd=1010,id=1011,qs=1012,qc=1013,xr=1014,Fn=1015,xs=1016,jc=1017,Kc=1018,js=1020,rd=35902,sd=35899,ad=1021,od=1022,Tn=1023,Ks=1026,Zs=1027,Zc=1028,$c=1029,Jc=1030,Qc=1031,eh=1033,ja=33776,Ka=33777,Za=33778,$a=33779,Gl=35840,Wl=35841,Xl=35842,Yl=35843,ql=36196,jl=37492,Kl=37496,Zl=37808,$l=37809,Jl=37810,Ql=37811,ec=37812,tc=37813,nc=37814,ic=37815,rc=37816,sc=37817,ac=37818,oc=37819,lc=37820,cc=37821,hc=36492,uc=36494,fc=36495,dc=36283,pc=36284,mc=36285,_c=36286,$s=2300,Js=2301,Io=2302,Zh=2400,$h=2401,Jh=2402,M0=2500,S0=0,ld=1,xc=2,T0=3200,E0=3201,cd=0,A0=1,Fi="",Ft="srgb",Jt="srgb-linear",io="linear",st="srgb",Sr=7680,Qh=519,w0=512,R0=513,C0=514,hd=515,P0=516,D0=517,L0=518,I0=519,gc=35044,eu="300 es",jn=2e3,ro=2001;function ud(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Qs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function N0(){const s=Qs("canvas");return s.style.display="block",s}const tu={};function so(...s){const e="THREE."+s.shift();console.log(e,...s)}function be(...s){const e="THREE."+s.shift();console.warn(e,...s)}function We(...s){const e="THREE."+s.shift();console.error(e,...s)}function ea(...s){const e=s.join(" ");e in tu||(tu[e]=!0,be(...s))}function U0(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nu=1234567;const zs=Math.PI/180,ss=180/Math.PI;function On(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[s&255]+kt[s>>8&255]+kt[s>>16&255]+kt[s>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function Ve(s,e,t){return Math.max(e,Math.min(t,s))}function th(s,e){return(s%e+e)%e}function F0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function O0(s,e,t){return s!==e?(t-s)/(e-s):0}function Vs(s,e,t){return(1-t)*s+t*e}function B0(s,e,t,n){return Vs(s,e,1-Math.exp(-t*n))}function k0(s,e=1){return e-Math.abs(th(s,e*2)-e)}function z0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function V0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function H0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function G0(s,e){return s+Math.random()*(e-s)}function W0(s){return s*(.5-Math.random())}function X0(s){s!==void 0&&(nu=s);let e=nu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Y0(s){return s*zs}function q0(s){return s*ss}function j0(s){return(s&s-1)===0&&s!==0}function K0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Z0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $0(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),x=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*x,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*x,o*c);break;case"ZYZ":s.set(l*x,l*d,o*h,o*c);break;default:be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Nn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function tt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const fd={DEG2RAD:zs,RAD2DEG:ss,generateUUID:On,clamp:Ve,euclideanModulo:th,mapLinear:F0,inverseLerp:O0,lerp:Vs,damp:B0,pingpong:k0,smoothstep:z0,smootherstep:V0,randInt:H0,randFloat:G0,randFloatSpread:W0,seededRandom:X0,degToRad:Y0,radToDeg:q0,isPowerOfTwo:j0,ceilPowerOfTwo:K0,floorPowerOfTwo:Z0,setQuaternionFromProperEuler:$0,normalize:tt,denormalize:Nn};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],d=r[a+1],x=r[a+2],_=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=f,e[t+1]=d,e[t+2]=x,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==x){let p=l*f+c*d+h*x+u*_;p<0&&(f=-f,d=-d,x=-x,_=-_,p=-p);let m=1-o;if(p<.9995){const b=Math.acos(p),g=Math.sin(b);m=Math.sin(m*b)/g,o=Math.sin(o*b)/g,l=l*m+f*o,c=c*m+d*o,h=h*m+x*o,u=u*m+_*o}else{l=l*m+f*o,c=c*m+d*o,h=h*m+x*o,u=u*m+_*o;const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],x=r[a+3];return e[t]=o*x+h*u+l*d-c*f,e[t+1]=l*x+h*f+c*u-o*d,e[t+2]=c*x+h*d+o*f-l*u,e[t+3]=h*x-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),d=l(i/2),x=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"YXZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"ZXY":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"ZYX":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"YZX":this._x=f*h*u+c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u-f*d*x;break;case"XZY":this._x=f*h*u-c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u+f*d*x;break;default:be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(iu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(iu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return No.copy(this).projectOnVector(e),this.sub(No)}reflect(e){return this.sub(No.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const No=new F,iu=new Qn;class Fe{constructor(e,t,n,i,r,a,o,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],x=n[8],_=i[0],p=i[3],m=i[6],b=i[1],g=i[4],y=i[7],T=i[2],M=i[5],w=i[8];return r[0]=a*_+o*b+l*T,r[3]=a*p+o*g+l*M,r[6]=a*m+o*y+l*w,r[1]=c*_+h*b+u*T,r[4]=c*p+h*g+u*M,r[7]=c*m+h*y+u*w,r[2]=f*_+d*b+x*T,r[5]=f*p+d*g+x*M,r[8]=f*m+d*y+x*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,x=t*u+n*f+i*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Uo.makeScale(e,t)),this}rotate(e){return this.premultiply(Uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uo=new Fe,ru=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),su=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function J0(){const s={enabled:!0,workingColorSpace:Jt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===st&&(i.r=vi(i.r),i.g=vi(i.g),i.b=vi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(i.r=Kr(i.r),i.g=Kr(i.g),i.b=Kr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Fi?io:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ea("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ea("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Jt]:{primaries:e,whitePoint:n,transfer:io,toXYZ:ru,fromXYZ:su,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:st,toXYZ:ru,fromXYZ:su,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),s}const Je=J0();function vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Kr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Tr;class Q0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Tr===void 0&&(Tr=Qs("canvas")),Tr.width=e.width,Tr.height=e.height;const i=Tr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Tr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=vi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vi(t[n]/255)*255):t[n]=vi(t[n]);return{data:t,width:e.width,height:e.height}}else return be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let e_=0;class nh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Fo(i[a].image)):r.push(Fo(i[a]))}else r=Fo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Fo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Q0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(be("Texture: Unable to serialize Texture."),{})}let t_=0;const Oo=new F;class It extends br{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=qn,i=qn,r=Kt,a=_i,o=Tn,l=Jn,c=It.DEFAULT_ANISOTROPY,h=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=On(),this.name="",this.source=new nh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Oo).x}get height(){return this.source.getSize(Oo).y}get depth(){return this.source.getSize(Oo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){be(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rs:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case no:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rs:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case no:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=ed;It.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,i=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],x=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(x+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(c+1)/2,y=(d+1)/2,T=(m+1)/2,M=(h+f)/4,w=(u+_)/4,C=(x+p)/4;return g>y&&g>T?g<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(g),i=M/n,r=w/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=M/i,r=C/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=w/r,i=C/r),this.set(n,i,r,t),this}let b=Math.sqrt((p-x)*(p-x)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-x)/b,this.y=(u-_)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class n_ extends br{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new It(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new nh(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gr extends n_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dd extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class i_ extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wi{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),va.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),va.copy(n.boundingBox)),va.applyMatrix4(e.matrixWorld),this.union(va)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),ba.subVectors(this.max,Ts),Er.subVectors(e.a,Ts),Ar.subVectors(e.b,Ts),wr.subVectors(e.c,Ts),Ri.subVectors(Ar,Er),Ci.subVectors(wr,Ar),$i.subVectors(Er,wr);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-$i.z,$i.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,$i.z,0,-$i.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-$i.y,$i.x,0];return!Bo(t,Er,Ar,wr,ba)||(t=[1,0,0,0,1,0,0,0,1],!Bo(t,Er,Ar,wr,ba))?!1:(ya.crossVectors(Ri,Ci),t=[ya.x,ya.y,ya.z],Bo(t,Er,Ar,wr,ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ri=[new F,new F,new F,new F,new F,new F,new F,new F],Pn=new F,va=new wi,Er=new F,Ar=new F,wr=new F,Ri=new F,Ci=new F,$i=new F,Ts=new F,ba=new F,ya=new F,Ji=new F;function Bo(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ji.fromArray(s,r);const o=i.x*Math.abs(Ji.x)+i.y*Math.abs(Ji.y)+i.z*Math.abs(Ji.z),l=e.dot(Ji),c=t.dot(Ji),h=n.dot(Ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const r_=new wi,Es=new F,ko=new F;class ni{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):r_.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Es.subVectors(e,this.center);const t=Es.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Es,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Es.copy(e.center).add(ko)),this.expandByPoint(Es.copy(e.center).sub(ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const si=new F,zo=new F,Ma=new F,Pi=new F,Vo=new F,Sa=new F,Ho=new F;class ua{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){zo.copy(e).add(t).multiplyScalar(.5),Ma.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(zo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ma),o=Pi.dot(this.direction),l=-Pi.dot(Ma),c=Pi.lengthSq(),h=Math.abs(1-a*a);let u,f,d,x;if(h>0)if(u=a*l-o,f=a*o-l,x=r*h,u>=0)if(f>=-x)if(f<=x){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(zo).addScaledVector(Ma,f),d}intersectSphere(e,t){si.subVectors(e.center,this.origin);const n=si.dot(this.direction),i=si.dot(si)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,i,r){Vo.subVectors(t,e),Sa.subVectors(n,e),Ho.crossVectors(Vo,Sa);let a=this.direction.dot(Ho),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pi.subVectors(this.origin,e);const l=o*this.direction.dot(Sa.crossVectors(Pi,Sa));if(l<0)return null;const c=o*this.direction.dot(Vo.cross(Pi));if(c<0||l+c>a)return null;const h=-o*Pi.dot(Ho);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(e,t,n,i,r,a,o,l,c,h,u,f,d,x,_,p){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,f,d,x,_,p)}set(e,t,n,i,r,a,o,l,c,h,u,f,d,x,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=x,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Rr.setFromMatrixColumn(e,0).length(),r=1/Rr.setFromMatrixColumn(e,1).length(),a=1/Rr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,d=a*u,x=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+x*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=x+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,x=c*h,_=c*u;t[0]=f+_*o,t[4]=x*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-x,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,x=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=x+d*o,t[1]=d+x*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,d=a*u,x=o*h,_=o*u;t[0]=l*h,t[4]=x*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,x=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=x*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+x,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*l,d=a*c,x=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-x,t[2]=x*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(s_,e,a_)}lookAt(e,t,n){const i=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),Di.crossVectors(n,un),Di.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Di.crossVectors(n,un)),Di.normalize(),Ta.crossVectors(un,Di),i[0]=Di.x,i[4]=Ta.x,i[8]=un.x,i[1]=Di.y,i[5]=Ta.y,i[9]=un.y,i[2]=Di.z,i[6]=Ta.z,i[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],x=n[2],_=n[6],p=n[10],m=n[14],b=n[3],g=n[7],y=n[11],T=n[15],M=i[0],w=i[4],C=i[8],v=i[12],E=i[1],P=i[5],I=i[9],N=i[13],k=i[2],V=i[6],B=i[10],X=i[14],H=i[3],$=i[7],K=i[11],ce=i[15];return r[0]=a*M+o*E+l*k+c*H,r[4]=a*w+o*P+l*V+c*$,r[8]=a*C+o*I+l*B+c*K,r[12]=a*v+o*N+l*X+c*ce,r[1]=h*M+u*E+f*k+d*H,r[5]=h*w+u*P+f*V+d*$,r[9]=h*C+u*I+f*B+d*K,r[13]=h*v+u*N+f*X+d*ce,r[2]=x*M+_*E+p*k+m*H,r[6]=x*w+_*P+p*V+m*$,r[10]=x*C+_*I+p*B+m*K,r[14]=x*v+_*N+p*X+m*ce,r[3]=b*M+g*E+y*k+T*H,r[7]=b*w+g*P+y*V+T*$,r[11]=b*C+g*I+y*B+T*K,r[15]=b*v+g*N+y*X+T*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],x=e[3],_=e[7],p=e[11],m=e[15];return x*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*d-n*l*d)+_*(+t*l*d-t*c*f+r*a*f-i*a*d+i*c*h-r*l*h)+p*(+t*c*u-t*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+m*(-i*o*h-t*l*u+t*o*f+i*a*u-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],x=e[12],_=e[13],p=e[14],m=e[15],b=u*p*c-_*f*c+_*l*d-o*p*d-u*l*m+o*f*m,g=x*f*c-h*p*c-x*l*d+a*p*d+h*l*m-a*f*m,y=h*_*c-x*u*c+x*o*d-a*_*d-h*o*m+a*u*m,T=x*u*l-h*_*l-x*o*f+a*_*f+h*o*p-a*u*p,M=t*b+n*g+i*y+r*T;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=b*w,e[1]=(_*f*r-u*p*r-_*i*d+n*p*d+u*i*m-n*f*m)*w,e[2]=(o*p*r-_*l*r+_*i*c-n*p*c-o*i*m+n*l*m)*w,e[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*d-n*l*d)*w,e[4]=g*w,e[5]=(h*p*r-x*f*r+x*i*d-t*p*d-h*i*m+t*f*m)*w,e[6]=(x*l*r-a*p*r-x*i*c+t*p*c+a*i*m-t*l*m)*w,e[7]=(a*f*r-h*l*r+h*i*c-t*f*c-a*i*d+t*l*d)*w,e[8]=y*w,e[9]=(x*u*r-h*_*r-x*n*d+t*_*d+h*n*m-t*u*m)*w,e[10]=(a*_*r-x*o*r+x*n*c-t*_*c-a*n*m+t*o*m)*w,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*d-t*o*d)*w,e[12]=T*w,e[13]=(h*_*i-x*u*i+x*n*f-t*_*f-h*n*p+t*u*p)*w,e[14]=(x*o*i-a*_*i-x*n*l+t*_*l+a*n*p-t*o*p)*w,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,x=r*u,_=a*h,p=a*u,m=o*u,b=l*c,g=l*h,y=l*u,T=n.x,M=n.y,w=n.z;return i[0]=(1-(_+m))*T,i[1]=(d+y)*T,i[2]=(x-g)*T,i[3]=0,i[4]=(d-y)*M,i[5]=(1-(f+m))*M,i[6]=(p+b)*M,i[7]=0,i[8]=(x+g)*w,i[9]=(p-b)*w,i[10]=(1-(f+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Rr.set(i[0],i[1],i[2]).length();const a=Rr.set(i[4],i[5],i[6]).length(),o=Rr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Dn.copy(this);const c=1/r,h=1/a,u=1/o;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,t.setFromRotationMatrix(Dn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=jn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let x,_;if(l)x=r/(a-r),_=a*r/(a-r);else if(o===jn)x=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ro)x=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=jn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let x,_;if(l)x=1/(a-r),_=a/(a-r);else if(o===jn)x=-2/(a-r),_=-(a+r)/(a-r);else if(o===ro)x=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Rr=new F,Dn=new Be,s_=new F(0,0,0),a_=new F(1,1,1),Di=new F,Ta=new F,un=new F,au=new Be,ou=new Qn;class ei{constructor(e=0,t=0,n=0,i=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return au.makeRotationFromQuaternion(e),this.setFromRotationMatrix(au,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ou.setFromEuler(this),this.setFromQuaternion(ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class pd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let o_=0;const lu=new F,Cr=new Qn,ai=new Be,Ea=new F,As=new F,l_=new F,c_=new Qn,cu=new F(1,0,0),hu=new F(0,1,0),uu=new F(0,0,1),fu={type:"added"},h_={type:"removed"},Pr={type:"childadded",child:null},Go={type:"childremoved",child:null};class vt extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new F,t=new ei,n=new Qn,i=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Be},normalMatrix:{value:new Fe}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(cu,e)}rotateY(e){return this.rotateOnAxis(hu,e)}rotateZ(e){return this.rotateOnAxis(uu,e)}translateOnAxis(e,t){return lu.copy(e).applyQuaternion(this.quaternion),this.position.add(lu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cu,e)}translateY(e){return this.translateOnAxis(hu,e)}translateZ(e){return this.translateOnAxis(uu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ea.copy(e):Ea.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(As,Ea,this.up):ai.lookAt(Ea,As,this.up),this.quaternion.setFromRotationMatrix(ai),i&&(ai.extractRotation(i.matrixWorld),Cr.setFromRotationMatrix(ai),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fu),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(h_),Go.child=e,this.dispatchEvent(Go),Go.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fu),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,e,l_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,c_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}vt.DEFAULT_UP=new F(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new F,oi=new F,Wo=new F,li=new F,Dr=new F,Lr=new F,du=new F,Xo=new F,Yo=new F,qo=new F,jo=new et,Ko=new et,Zo=new et;class Un{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ln.subVectors(e,t),i.cross(Ln);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ln.subVectors(i,t),oi.subVectors(n,t),Wo.subVectors(e,t);const a=Ln.dot(Ln),o=Ln.dot(oi),l=Ln.dot(Wo),c=oi.dot(oi),h=oi.dot(Wo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,x=(a*h-o*l)*f;return r.set(1-d-x,x,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(a,li.y),l.addScaledVector(o,li.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return jo.setScalar(0),Ko.setScalar(0),Zo.setScalar(0),jo.fromBufferAttribute(e,t),Ko.fromBufferAttribute(e,n),Zo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(jo,r.x),a.addScaledVector(Ko,r.y),a.addScaledVector(Zo,r.z),a}static isFrontFacing(e,t,n,i){return Ln.subVectors(n,t),oi.subVectors(e,t),Ln.cross(oi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Ln.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Un.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Dr.subVectors(i,n),Lr.subVectors(r,n),Xo.subVectors(e,n);const l=Dr.dot(Xo),c=Lr.dot(Xo);if(l<=0&&c<=0)return t.copy(n);Yo.subVectors(e,i);const h=Dr.dot(Yo),u=Lr.dot(Yo);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Dr,a);qo.subVectors(e,r);const d=Dr.dot(qo),x=Lr.dot(qo);if(x>=0&&d<=x)return t.copy(r);const _=d*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Lr,o);const p=h*x-d*u;if(p<=0&&u-h>=0&&d-x>=0)return du.subVectors(r,i),o=(u-h)/(u-h+(d-x)),t.copy(i).addScaledVector(du,o);const m=1/(p+_+f);return a=_*m,o=f*m,t.copy(n).addScaledVector(Dr,a).addScaledVector(Lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function $o(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=th(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=$o(a,r,e+1/3),this.g=$o(a,r,e),this.b=$o(a,r,e-1/3)}return Je.colorSpaceToWorking(this,i),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&be("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:be("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const n=md[e.toLowerCase()];return n!==void 0?this.setHex(n,t):be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return Je.workingToColorSpace(zt.copy(this),e),Math.round(Ve(zt.r*255,0,255))*65536+Math.round(Ve(zt.g*255,0,255))*256+Math.round(Ve(zt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(zt.copy(this),t);const n=zt.r,i=zt.g,r=zt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Ft){Je.workingToColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,i=zt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(Aa);const n=Vs(Li.h,Aa.h,t),i=Vs(Li.s,Aa.s,t),r=Vs(Li.l,Aa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Le;Le.NAMES=md;let u_=0;class Zn extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=On(),this.name="",this.type="Material",this.blending=jr,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ll,this.blendDst=Il,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){be(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ll&&(n.blendSrc=this.blendSrc),this.blendDst!==Il&&(n.blendDst=this.blendDst),this.blendEquation!==or&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hr extends Zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new F,wa=new De;let f_=0;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:f_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gc,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wa.fromBufferAttribute(this,t),wa.applyMatrix3(e),this.setXY(t,wa.x,wa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gc&&(e.usage=this.usage),e}}class _d extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xd extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bi extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let d_=0;const yn=new Be,Jo=new vt,Ir=new F,fn=new wi,ws=new wi,Lt=new F;class Bn extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ud(e)?xd:_d)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return Jo.lookAt(e),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bi(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ws.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(fn.min,ws.min),fn.expandByPoint(Lt),Lt.addVectors(fn.max,ws.max),fn.expandByPoint(Lt)):(fn.expandByPoint(ws.min),fn.expandByPoint(ws.max))}fn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Lt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Lt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Lt.fromBufferAttribute(o,c),l&&(Ir.fromBufferAttribute(e,c),Lt.add(Ir)),i=Math.max(i,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new F,l[C]=new F;const c=new F,h=new F,u=new F,f=new De,d=new De,x=new De,_=new F,p=new F;function m(C,v,E){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,E),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,v),x.fromBufferAttribute(r,E),h.sub(c),u.sub(c),d.sub(f),x.sub(f);const P=1/(d.x*x.y-x.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(u,-d.y).multiplyScalar(P),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(P),o[C].add(_),o[v].add(_),o[E].add(_),l[C].add(p),l[v].add(p),l[E].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let C=0,v=b.length;C<v;++C){const E=b[C],P=E.start,I=E.count;for(let N=P,k=P+I;N<k;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const g=new F,y=new F,T=new F,M=new F;function w(C){T.fromBufferAttribute(i,C),M.copy(T);const v=o[C];g.copy(v),g.sub(T.multiplyScalar(T.dot(v))).normalize(),y.crossVectors(M,v);const P=y.dot(l[C])<0?-1:1;a.setXYZW(C,g.x,g.y,g.z,P)}for(let C=0,v=b.length;C<v;++C){const E=b[C],P=E.start,I=E.count;for(let N=P,k=P+I;N<k;N+=3)w(e.getX(N+0)),w(e.getX(N+1)),w(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,u=new F;if(e)for(let f=0,d=e.count;f<d;f+=3){const x=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,x=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let m=0;m<h;m++)f[x++]=c[d++]}return new $t(f,h,u)}if(this.index===null)return be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pu=new Be,Qi=new ua,Ra=new ni,mu=new F,Ca=new F,Pa=new F,Da=new F,Qo=new F,La=new F,_u=new F,Ia=new F;class Rn extends vt{constructor(e=new Bn,t=new hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){La.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Qo.fromBufferAttribute(u,e),a?La.addScaledVector(Qo,h):La.addScaledVector(Qo.sub(t),h))}t.add(La)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(r),Qi.copy(e.ray).recast(e.near),!(Ra.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Ra,mu)===null||Qi.origin.distanceToSquared(mu)>(e.far-e.near)**2))&&(pu.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(pu),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=f.length;x<_;x++){const p=f[x],m=a[p.materialIndex],b=Math.max(p.start,d.start),g=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let y=b,T=g;y<T;y+=3){const M=o.getX(y),w=o.getX(y+1),C=o.getX(y+2);i=Na(this,m,e,n,c,h,u,M,w,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const x=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=x,m=_;p<m;p+=3){const b=o.getX(p),g=o.getX(p+1),y=o.getX(p+2);i=Na(this,a,e,n,c,h,u,b,g,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,_=f.length;x<_;x++){const p=f[x],m=a[p.materialIndex],b=Math.max(p.start,d.start),g=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=b,T=g;y<T;y+=3){const M=y,w=y+1,C=y+2;i=Na(this,m,e,n,c,h,u,M,w,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const x=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=x,m=_;p<m;p+=3){const b=p,g=p+1,y=p+2;i=Na(this,a,e,n,c,h,u,b,g,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function p_(s,e,t,n,i,r,a,o){let l;if(e.side===nn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Si,o),l===null)return null;Ia.copy(o),Ia.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ia);return c<t.near||c>t.far?null:{distance:c,point:Ia.clone(),object:s}}function Na(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Ca),s.getVertexPosition(l,Pa),s.getVertexPosition(c,Da);const h=p_(s,e,t,n,Ca,Pa,Da,_u);if(h){const u=new F;Un.getBarycoord(_u,Ca,Pa,Da,u),i&&(h.uv=Un.getInterpolatedAttribute(i,o,l,c,u,new De)),r&&(h.uv1=Un.getInterpolatedAttribute(r,o,l,c,u,new De)),a&&(h.normal=Un.getInterpolatedAttribute(a,o,l,c,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new F,materialIndex:0};Un.getNormal(Ca,Pa,Da,f.normal),h.face=f,h.barycoord=u}return h}class fa extends Bn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,i,a,2),x("x","z","y",1,-1,e,n,-t,i,a,3),x("x","y","z",1,-1,e,t,n,i,r,4),x("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new bi(c,3)),this.setAttribute("normal",new bi(h,3)),this.setAttribute("uv",new bi(u,2));function x(_,p,m,b,g,y,T,M,w,C,v){const E=y/w,P=T/C,I=y/2,N=T/2,k=M/2,V=w+1,B=C+1;let X=0,H=0;const $=new F;for(let K=0;K<B;K++){const ce=K*P-N;for(let ge=0;ge<V;ge++){const ke=ge*E-I;$[_]=ke*b,$[p]=ce*g,$[m]=k,c.push($.x,$.y,$.z),$[_]=0,$[p]=0,$[m]=M>0?1:-1,h.push($.x,$.y,$.z),u.push(ge/w),u.push(1-K/C),X+=1}}for(let K=0;K<C;K++)for(let ce=0;ce<w;ce++){const ge=f+ce+V*K,ke=f+ce+V*(K+1),ze=f+(ce+1)+V*(K+1),$e=f+(ce+1)+V*K;l.push(ge,ke,$e),l.push(ke,ze,$e),H+=6}o.addGroup(d,H,v),d+=H,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function as(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Yt(s){const e={};for(let t=0;t<s.length;t++){const n=as(s[t]);for(const i in n)e[i]=n[i]}return e}function m_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function gd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const __={clone:as,merge:Yt};var x_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends Zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x_,this.fragmentShader=g_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=as(e.uniforms),this.uniformsGroups=m_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class vd extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ii=new F,xu=new De,gu=new De;class Vt extends vd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,xu,gu),t.subVectors(gu,xu)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Nr=-90,Ur=1;class v_ extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Vt(Nr,Ur,e,t);i.layers=this.layers,this.add(i);const r=new Vt(Nr,Ur,e,t);r.layers=this.layers,this.add(r);const a=new Vt(Nr,Ur,e,t);a.layers=this.layers,this.add(a);const o=new Vt(Nr,Ur,e,t);o.layers=this.layers,this.add(o);const l=new Vt(Nr,Ur,e,t);l.layers=this.layers,this.add(l);const c=new Vt(Nr,Ur,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class bd extends It{constructor(e=[],t=ns,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class b_ extends gr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new bd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new fa(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:gi});r.uniforms.tEquirect.value=t;const a=new Rn(i,r),o=t.minFilter;return t.minFilter===_i&&(t.minFilter=Kt),new v_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class ur extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const y_={type:"move"};class el{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,x=.005;c.inputState.pinching&&f>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(y_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ur;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ih{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=n}clone(){return new ih(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class yd extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class M_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gc,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new F;class rh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){so("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new rh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){so("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const vu=new F,bu=new et,yu=new et,S_=new F,Mu=new Be,Ua=new F,tl=new ni,Su=new Be,nl=new ua;class T_ extends Rn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kh,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ua),this.boundingBox.expandByPoint(Ua)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ni),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ua),this.boundingSphere.expandByPoint(Ua)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tl.copy(this.boundingSphere),tl.applyMatrix4(i),e.ray.intersectsSphere(tl)!==!1&&(Su.copy(i).invert(),nl.copy(e.ray).applyMatrix4(Su),!(this.boundingBox!==null&&nl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,nl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Kh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===y0?this.bindMatrixInverse.copy(this.bindMatrix).invert():be("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;bu.fromBufferAttribute(i.attributes.skinIndex,e),yu.fromBufferAttribute(i.attributes.skinWeight,e),vu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=yu.getComponent(r);if(a!==0){const o=bu.getComponent(r);Mu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(S_.copy(vu).applyMatrix4(Mu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Md extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class sh extends It{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Zt,h=Zt,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tu=new Be,E_=new Be;class ah{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){be("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:E_;Tu.multiplyMatrices(o,t[r]),Tu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ah(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new sh(t,e,e,Tn,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(be("Skeleton: No bone found with UUID:",r),a=new Md),this.bones.push(a),this.boneInverses.push(new Be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class vc extends $t{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fr=new Be,Eu=new Be,Fa=[],Au=new wi,A_=new Be,Rs=new Rn,Cs=new ni;class w_ extends Rn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,A_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fr),Au.copy(e.boundingBox).applyMatrix4(Fr),this.boundingBox.union(Au)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fr),Cs.copy(e.boundingSphere).applyMatrix4(Fr),this.boundingSphere.union(Cs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cs.copy(this.boundingSphere),Cs.applyMatrix4(n),e.ray.intersectsSphere(Cs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Fr),Eu.multiplyMatrices(n,Fr),Rs.matrixWorld=Eu,Rs.raycast(e,Fa);for(let a=0,o=Fa.length;a<o;a++){const l=Fa[a];l.instanceId=r,l.object=this,t.push(l)}Fa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new vc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new sh(new Float32Array(i*this.count),i,this.count,Zc,Fn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const il=new F,R_=new F,C_=new Fe;class Ui{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=il.subVectors(n,t).cross(R_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(il),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||C_.getNormalMatrix(e),i=this.coplanarPoint(il).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new ni,P_=new De(.5,.5),Oa=new F;class oh{constructor(e=new Ui,t=new Ui,n=new Ui,i=new Ui,r=new Ui,a=new Ui){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],x=r[8],_=r[9],p=r[10],m=r[11],b=r[12],g=r[13],y=r[14],T=r[15];if(i[0].setComponents(c-a,d-h,m-x,T-b).normalize(),i[1].setComponents(c+a,d+h,m+x,T+b).normalize(),i[2].setComponents(c+o,d+u,m+_,T+g).normalize(),i[3].setComponents(c-o,d-u,m-_,T-g).normalize(),n)i[4].setComponents(l,f,p,y).normalize(),i[5].setComponents(c-l,d-f,m-p,T-y).normalize();else if(i[4].setComponents(c-l,d-f,m-p,T-y).normalize(),t===jn)i[5].setComponents(c+l,d+f,m+p,T+y).normalize();else if(t===ro)i[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){er.center.set(0,0,0);const t=P_.distanceTo(e.center);return er.radius=.7071067811865476+t,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Oa.x=i.normal.x>0?e.max.x:e.min.x,Oa.y=i.normal.y>0?e.max.y:e.min.y,Oa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Oa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sd extends Zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ao=new F,oo=new F,wu=new Be,Ps=new ua,Ba=new ni,rl=new F,Ru=new F;class lh extends vt{constructor(e=new Bn,t=new Sd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ao.fromBufferAttribute(t,i-1),oo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ao.distanceTo(oo);e.setAttribute("lineDistance",new bi(n,1))}else be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(i),Ba.radius+=r,e.ray.intersectsSphere(Ba)===!1)return;wu.copy(i).invert(),Ps.copy(e.ray).applyMatrix4(wu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let _=d,p=x-1;_<p;_+=c){const m=h.getX(_),b=h.getX(_+1),g=ka(this,e,Ps,l,m,b,_);g&&t.push(g)}if(this.isLineLoop){const _=h.getX(x-1),p=h.getX(d),m=ka(this,e,Ps,l,_,p,x-1);m&&t.push(m)}}else{const d=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let _=d,p=x-1;_<p;_+=c){const m=ka(this,e,Ps,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=ka(this,e,Ps,l,x-1,d,x-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ka(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(ao.fromBufferAttribute(o,i),oo.fromBufferAttribute(o,r),t.distanceSqToSegment(ao,oo,rl,Ru)>n)return;rl.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(rl);if(!(c<e.near||c>e.far))return{distance:c,point:Ru.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Cu=new F,Pu=new F;class D_ extends lh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Cu.fromBufferAttribute(t,i),Pu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Cu.distanceTo(Pu);e.setAttribute("lineDistance",new bi(n,1))}else be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class L_ extends lh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Td extends Zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Du=new Be,bc=new ua,za=new ni,Va=new F;class I_ extends vt{constructor(e=new Bn,t=new Td){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(i),za.radius+=r,e.ray.intersectsSphere(za)===!1)return;Du.copy(i).invert(),bc.copy(e.ray).applyMatrix4(Du);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let x=f,_=d;x<_;x++){const p=c.getX(x);Va.fromBufferAttribute(u,p),Lu(Va,p,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let x=f,_=d;x<_;x++)Va.fromBufferAttribute(u,x),Lu(Va,x,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Lu(s,e,t,n,i,r,a){const o=bc.distanceSqToPoint(s);if(o<t){const l=new F;bc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ed extends It{constructor(e,t,n=xr,i,r,a,o=Zt,l=Zt,c,h=Ks,u=1){if(h!==Ks&&h!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ad extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class bo extends Bn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,d=[],x=[],_=[],p=[];for(let m=0;m<h;m++){const b=m*f-a;for(let g=0;g<c;g++){const y=g*u-r;x.push(y,-b,0),_.push(0,0,1),p.push(g/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){const g=b+c*m,y=b+c*(m+1),T=b+1+c*(m+1),M=b+1+c*m;d.push(g,y,M),d.push(y,T,M)}this.setIndex(d),this.setAttribute("position",new bi(x,3)),this.setAttribute("normal",new bi(_,3)),this.setAttribute("uv",new bi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.width,e.height,e.widthSegments,e.heightSegments)}}class ch extends Zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cd,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ii extends ch{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class N_ extends Zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=T0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class U_ extends Zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ha(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function F_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function O_(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Iu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function wd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class da{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class B_ extends da{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zh,endingEnd:Zh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case $h:r=e,o=2*t-n;break;case Jh:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $h:a=e,l=2*n-t;break;case Jh:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(n-t)/(i-t),_=x*x,p=_*x,m=-f*p+2*f*_-f*x,b=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*x+1,g=(-1-d)*p+(1.5+d)*_+.5*x,y=d*p-d*_;for(let T=0;T!==o;++T)r[T]=m*a[h+T]+b*a[c+T]+g*a[l+T]+y*a[u+T];return r}}class k_ extends da{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}}class z_ extends da{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class kn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ha(t,this.TimeBufferType),this.values=Ha(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ha(e.times,Array),values:Ha(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new z_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new k_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new B_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $s:t=this.InterpolantFactoryMethodDiscrete;break;case Js:t=this.InterpolantFactoryMethodLinear;break;case Io:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return be("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return Js;case this.InterpolantFactoryMethodSmooth:return Io}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){We("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&F_(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Io,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,f=u-n,d=u+n;for(let x=0;x!==n;++x){const _=t[u+x];if(_!==t[f+x]||_!==t[d+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Js;class gs extends kn{constructor(e,t,n){super(e,t,n)}}gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=$s;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;class Rd extends kn{constructor(e,t,n,i){super(e,t,n,i)}}Rd.prototype.ValueTypeName="color";class os extends kn{constructor(e,t,n,i){super(e,t,n,i)}}os.prototype.ValueTypeName="number";class V_ extends da{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Qn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class ls extends kn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new V_(this.times,this.values,this.getValueSize(),e)}}ls.prototype.ValueTypeName="quaternion";ls.prototype.InterpolantFactoryMethodSmooth=void 0;class vs extends kn{constructor(e,t,n){super(e,t,n)}}vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=$s;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;class cs extends kn{constructor(e,t,n,i){super(e,t,n,i)}}cs.prototype.ValueTypeName="vector";class H_{constructor(e="",t=-1,n=[],i=M0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=On(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(W_(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(kn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=O_(l);l=Iu(l,1,h),c=Iu(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new os(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(be("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return We("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,x,_){if(d.length!==0){const p=[],m=[];wd(d,p,m,x),p.length!==0&&_.push(new u(f,p,m))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let _=0;_<f[x].morphTargets.length;_++)d[f[x].morphTargets[_]]=-1;for(const _ in d){const p=[],m=[];for(let b=0;b!==f[x].morphTargets.length;++b){const g=f[x];p.push(g.time),m.push(g.morphTarget===_?1:0)}i.push(new os(".morphTargetInfluence["+_+"]",p,m))}l=d.length*a}else{const d=".bones["+t[u].name+"]";n(cs,d+".position",f,"pos",i),n(ls,d+".quaternion",f,"rot",i),n(cs,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function G_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return os;case"vector":case"vector2":case"vector3":case"vector4":return cs;case"color":return Rd;case"quaternion":return ls;case"bool":case"boolean":return gs;case"string":return vs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function W_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=G_(s.type);if(s.times===void 0){const t=[],n=[];wd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const xi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class X_{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],x=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Y_=new X_;class bs{constructor(e){this.manager=e!==void 0?e:Y_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}bs.DEFAULT_MATERIAL_NAME="__DEFAULT";const ci={};class q_ extends Error{constructor(e,t){super(e),this.response=t}}class Cd extends bs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=xi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ci[e]!==void 0){ci[e].push({onLoad:t,onProgress:n,onError:i});return}ci[e]=[],ci[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&be("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ci[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,x=d!==0;let _=0;const p=new ReadableStream({start(m){b();function b(){u.read().then(({done:g,value:y})=>{if(g)m.close();else{_+=y.byteLength;const T=new ProgressEvent("progress",{lengthComputable:x,loaded:_,total:d});for(let M=0,w=h.length;M<w;M++){const C=h[M];C.onProgress&&C.onProgress(T)}m.enqueue(y),b()}},g=>{m.error(g)})}}});return new Response(p)}else throw new q_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(x=>d.decode(x))}}}).then(c=>{xi.add(`file:${e}`,c);const h=ci[e];delete ci[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=ci[e];if(h===void 0)throw this.manager.itemError(e),c;delete ci[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Or=new WeakMap;class j_ extends bs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=xi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Or.get(a);u===void 0&&(u=[],Or.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=Qs("img");function l(){h(),t&&t(this);const u=Or.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}Or.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),xi.remove(`image:${e}`);const f=Or.get(this)||[];for(let d=0;d<f.length;d++){const x=f[d];x.onError&&x.onError(u)}Or.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),xi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class K_ extends bs{constructor(e){super(e)}load(e,t,n,i){const r=new It,a=new j_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class yo extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const sl=new Be,Nu=new F,Uu=new F;class hh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oh,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nu),Uu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uu),t.updateMatrixWorld(),sl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Z_ extends hh{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ss*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $_ extends yo{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Z_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Fu=new Be,Ds=new F,al=new F;class J_ extends hh{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ds.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ds),al.copy(n.position),al.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(al),n.updateMatrixWorld(),i.makeTranslation(-Ds.x,-Ds.y,-Ds.z),Fu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fu,n.coordinateSystem,n.reversedDepth)}}class Pd extends yo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new J_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class uh extends vd{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Q_ extends hh{constructor(){super(new uh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ta extends yo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Q_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Dd extends yo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ol=new WeakMap;class ex extends bs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&be("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&be("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=xi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if(ol.has(a)===!0)i&&i(ol.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return xi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ol.set(l,c),xi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});xi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class tx extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class nx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const fh="\\[\\]\\.:\\/",ix=new RegExp("["+fh+"]","g"),dh="[^"+fh+"]",rx="[^"+fh.replace("\\.","")+"]",sx=/((?:WC+[\/:])*)/.source.replace("WC",dh),ax=/(WCOD+)?/.source.replace("WCOD",rx),ox=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dh),lx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dh),cx=new RegExp("^"+sx+ax+ox+lx+"$"),hx=["material","materials","bones","map"];class ux{constructor(e,t,n){const i=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class nt{constructor(e,t,n){this.path=t,this.parsedPath=n||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,n):new nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ix,"")}static parseTrackName(e){const t=cx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);hx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){be("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=ux;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ou{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ve(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class fx extends br{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){be("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Bu(s,e,t,n){const i=dx(n);switch(t){case ad:return s*e;case Zc:return s*e/i.components*i.byteLength;case $c:return s*e/i.components*i.byteLength;case Jc:return s*e*2/i.components*i.byteLength;case Qc:return s*e*2/i.components*i.byteLength;case od:return s*e*3/i.components*i.byteLength;case Tn:return s*e*4/i.components*i.byteLength;case eh:return s*e*4/i.components*i.byteLength;case ja:case Ka:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Za:case $a:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wl:case Yl:return Math.max(s,16)*Math.max(e,8)/4;case Gl:case Xl:return Math.max(s,8)*Math.max(e,8)/2;case ql:case jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ec:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case tc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case nc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ic:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case rc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case sc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ac:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case oc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case lc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case cc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case hc:case uc:case fc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case dc:case pc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case mc:case _c:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dx(s){switch(s){case Jn:case nd:return{byteLength:1,components:1};case qs:case id:case xs:return{byteLength:2,components:1};case jc:case Kc:return{byteLength:2,components:4};case xr:case qc:case Fn:return{byteLength:4,components:1};case rd:case sd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yc}}));typeof window<"u"&&(window.__THREE__?be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yc);function Ld(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function px(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<u.length;d++){const x=u[f],_=u[d];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,x=u.length;d<x;d++){const _=u[d];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var mx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_x=`#ifdef USE_ALPHAHASH
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
#endif`,xx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yx=`#ifdef USE_AOMAP
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
#endif`,Mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sx=`#ifdef USE_BATCHING
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
#endif`,Tx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ax=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rx=`#ifdef USE_IRIDESCENCE
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
#endif`,Cx=`#ifdef USE_BUMPMAP
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
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ox=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bx=`#define PI 3.141592653589793
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
} // validated`,kx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zx=`vec3 transformedNormal = objectNormal;
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
#endif`,Vx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qx=`#ifdef USE_ENVMAP
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
#endif`,jx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kx=`#ifdef USE_ENVMAP
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
#endif`,Zx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$x=`#ifdef USE_ENVMAP
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
#endif`,Jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ng=`#ifdef USE_GRADIENTMAP
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
}`,ig=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ag=`uniform bool receiveShadow;
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
#endif`,og=`#ifdef USE_ENVMAP
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
#endif`,lg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fg=`PhysicalMaterial material;
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
#endif`,dg=`uniform sampler2D dfgLUT;
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
}`,pg=`
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
#endif`,mg=`#if defined( RE_IndirectDiffuse )
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
#endif`,_g=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tg=`#if defined( USE_POINTS_UV )
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
#endif`,Eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ag=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pg=`#ifdef USE_MORPHTARGETS
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
#endif`,Dg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ig=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Og=`#ifdef USE_NORMALMAP
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
#endif`,Bg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$g=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qg=`float getShadowMask() {
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
}`,ev=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tv=`#ifdef USE_SKINNING
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
#endif`,nv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iv=`#ifdef USE_SKINNING
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
#endif`,rv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,av=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ov=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lv=`#ifdef USE_TRANSMISSION
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
#endif`,cv=`#ifdef USE_TRANSMISSION
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
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mv=`uniform sampler2D t2D;
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
}`,_v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bv=`#include <common>
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
}`,yv=`#if DEPTH_PACKING == 3200
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
}`,Mv=`#define DISTANCE
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
}`,Sv=`#define DISTANCE
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
}`,Tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ev=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Av=`uniform float scale;
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
}`,wv=`uniform vec3 diffuse;
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
}`,Rv=`#include <common>
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
}`,Cv=`uniform vec3 diffuse;
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
}`,Pv=`#define LAMBERT
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
}`,Dv=`#define LAMBERT
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
}`,Lv=`#define MATCAP
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
}`,Iv=`#define MATCAP
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
}`,Nv=`#define NORMAL
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
}`,Uv=`#define NORMAL
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
}`,Fv=`#define PHONG
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
}`,Ov=`#define PHONG
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
}`,Bv=`#define STANDARD
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
}`,kv=`#define STANDARD
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
}`,zv=`#define TOON
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
}`,Vv=`#define TOON
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
}`,Hv=`uniform float size;
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
}`,Gv=`uniform vec3 diffuse;
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
}`,Wv=`#include <common>
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
}`,Xv=`uniform vec3 color;
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
}`,Yv=`uniform float rotation;
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
}`,qv=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:mx,alphahash_pars_fragment:_x,alphamap_fragment:xx,alphamap_pars_fragment:gx,alphatest_fragment:vx,alphatest_pars_fragment:bx,aomap_fragment:yx,aomap_pars_fragment:Mx,batching_pars_vertex:Sx,batching_vertex:Tx,begin_vertex:Ex,beginnormal_vertex:Ax,bsdfs:wx,iridescence_fragment:Rx,bumpmap_pars_fragment:Cx,clipping_planes_fragment:Px,clipping_planes_pars_fragment:Dx,clipping_planes_pars_vertex:Lx,clipping_planes_vertex:Ix,color_fragment:Nx,color_pars_fragment:Ux,color_pars_vertex:Fx,color_vertex:Ox,common:Bx,cube_uv_reflection_fragment:kx,defaultnormal_vertex:zx,displacementmap_pars_vertex:Vx,displacementmap_vertex:Hx,emissivemap_fragment:Gx,emissivemap_pars_fragment:Wx,colorspace_fragment:Xx,colorspace_pars_fragment:Yx,envmap_fragment:qx,envmap_common_pars_fragment:jx,envmap_pars_fragment:Kx,envmap_pars_vertex:Zx,envmap_physical_pars_fragment:og,envmap_vertex:$x,fog_vertex:Jx,fog_pars_vertex:Qx,fog_fragment:eg,fog_pars_fragment:tg,gradientmap_pars_fragment:ng,lightmap_pars_fragment:ig,lights_lambert_fragment:rg,lights_lambert_pars_fragment:sg,lights_pars_begin:ag,lights_toon_fragment:lg,lights_toon_pars_fragment:cg,lights_phong_fragment:hg,lights_phong_pars_fragment:ug,lights_physical_fragment:fg,lights_physical_pars_fragment:dg,lights_fragment_begin:pg,lights_fragment_maps:mg,lights_fragment_end:_g,logdepthbuf_fragment:xg,logdepthbuf_pars_fragment:gg,logdepthbuf_pars_vertex:vg,logdepthbuf_vertex:bg,map_fragment:yg,map_pars_fragment:Mg,map_particle_fragment:Sg,map_particle_pars_fragment:Tg,metalnessmap_fragment:Eg,metalnessmap_pars_fragment:Ag,morphinstance_vertex:wg,morphcolor_vertex:Rg,morphnormal_vertex:Cg,morphtarget_pars_vertex:Pg,morphtarget_vertex:Dg,normal_fragment_begin:Lg,normal_fragment_maps:Ig,normal_pars_fragment:Ng,normal_pars_vertex:Ug,normal_vertex:Fg,normalmap_pars_fragment:Og,clearcoat_normal_fragment_begin:Bg,clearcoat_normal_fragment_maps:kg,clearcoat_pars_fragment:zg,iridescence_pars_fragment:Vg,opaque_fragment:Hg,packing:Gg,premultiplied_alpha_fragment:Wg,project_vertex:Xg,dithering_fragment:Yg,dithering_pars_fragment:qg,roughnessmap_fragment:jg,roughnessmap_pars_fragment:Kg,shadowmap_pars_fragment:Zg,shadowmap_pars_vertex:$g,shadowmap_vertex:Jg,shadowmask_pars_fragment:Qg,skinbase_vertex:ev,skinning_pars_vertex:tv,skinning_vertex:nv,skinnormal_vertex:iv,specularmap_fragment:rv,specularmap_pars_fragment:sv,tonemapping_fragment:av,tonemapping_pars_fragment:ov,transmission_fragment:lv,transmission_pars_fragment:cv,uv_pars_fragment:hv,uv_pars_vertex:uv,uv_vertex:fv,worldpos_vertex:dv,background_vert:pv,background_frag:mv,backgroundCube_vert:_v,backgroundCube_frag:xv,cube_vert:gv,cube_frag:vv,depth_vert:bv,depth_frag:yv,distanceRGBA_vert:Mv,distanceRGBA_frag:Sv,equirect_vert:Tv,equirect_frag:Ev,linedashed_vert:Av,linedashed_frag:wv,meshbasic_vert:Rv,meshbasic_frag:Cv,meshlambert_vert:Pv,meshlambert_frag:Dv,meshmatcap_vert:Lv,meshmatcap_frag:Iv,meshnormal_vert:Nv,meshnormal_frag:Uv,meshphong_vert:Fv,meshphong_frag:Ov,meshphysical_vert:Bv,meshphysical_frag:kv,meshtoon_vert:zv,meshtoon_frag:Vv,points_vert:Hv,points_frag:Gv,shadow_vert:Wv,shadow_frag:Xv,sprite_vert:Yv,sprite_frag:qv},ae={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Gn={basic:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Le(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Yt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Yt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Le(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Yt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Yt([ae.points,ae.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Yt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Yt([ae.common,ae.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Yt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Yt([ae.sprite,ae.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Yt([ae.common,ae.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Yt([ae.lights,ae.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Gn.physical={uniforms:Yt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Ga={r:0,b:0,g:0},tr=new ei,jv=new Be;function Kv(s,e,t,n,i,r,a){const o=new Le(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function x(g){let y=g.isScene===!0?g.background:null;return y&&y.isTexture&&(y=(g.backgroundBlurriness>0?t:e).get(y)),y}function _(g){let y=!1;const T=x(g);T===null?m(o,l):T&&T.isColor&&(m(T,1),y=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(g,y){const T=x(y);T&&(T.isCubeTexture||T.mapping===vo)?(h===void 0&&(h=new Rn(new fa(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:as(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),tr.copy(y.backgroundRotation),tr.x*=-1,tr.y*=-1,tr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jv.makeRotationFromEuler(tr)),h.material.toneMapped=Je.getTransfer(T.colorSpace)!==st,(u!==T||f!==T.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=T,f=T.version,d=s.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Rn(new bo(2,2),new Ti({name:"BackgroundMaterial",uniforms:as(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Je.getTransfer(T.colorSpace)!==st,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=T,f=T.version,d=s.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function m(g,y){g.getRGB(Ga,gd(s)),n.buffers.color.setClear(Ga.r,Ga.g,Ga.b,y,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(g,y=1){o.set(g),l=y,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,m(o,l)},render:_,addToRenderList:p,dispose:b}}function Zv(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(E,P,I,N,k){let V=!1;const B=u(N,I,P);r!==B&&(r=B,c(r.object)),V=d(E,N,I,k),V&&x(E,N,I,k),k!==null&&e.update(k,s.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,y(E,P,I,N),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return s.createVertexArray()}function c(E){return s.bindVertexArray(E)}function h(E){return s.deleteVertexArray(E)}function u(E,P,I){const N=I.wireframe===!0;let k=n[E.id];k===void 0&&(k={},n[E.id]=k);let V=k[P.id];V===void 0&&(V={},k[P.id]=V);let B=V[N];return B===void 0&&(B=f(l()),V[N]=B),B}function f(E){const P=[],I=[],N=[];for(let k=0;k<t;k++)P[k]=0,I[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:N,object:E,attributes:{},index:null}}function d(E,P,I,N){const k=r.attributes,V=P.attributes;let B=0;const X=I.getAttributes();for(const H in X)if(X[H].location>=0){const K=k[H];let ce=V[H];if(ce===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(ce=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(ce=E.instanceColor)),K===void 0||K.attribute!==ce||ce&&K.data!==ce.data)return!0;B++}return r.attributesNum!==B||r.index!==N}function x(E,P,I,N){const k={},V=P.attributes;let B=0;const X=I.getAttributes();for(const H in X)if(X[H].location>=0){let K=V[H];K===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(K=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(K=E.instanceColor));const ce={};ce.attribute=K,K&&K.data&&(ce.data=K.data),k[H]=ce,B++}r.attributes=k,r.attributesNum=B,r.index=N}function _(){const E=r.newAttributes;for(let P=0,I=E.length;P<I;P++)E[P]=0}function p(E){m(E,0)}function m(E,P){const I=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;I[E]=1,N[E]===0&&(s.enableVertexAttribArray(E),N[E]=1),k[E]!==P&&(s.vertexAttribDivisor(E,P),k[E]=P)}function b(){const E=r.newAttributes,P=r.enabledAttributes;for(let I=0,N=P.length;I<N;I++)P[I]!==E[I]&&(s.disableVertexAttribArray(I),P[I]=0)}function g(E,P,I,N,k,V,B){B===!0?s.vertexAttribIPointer(E,P,I,k,V):s.vertexAttribPointer(E,P,I,N,k,V)}function y(E,P,I,N){_();const k=N.attributes,V=I.getAttributes(),B=P.defaultAttributeValues;for(const X in V){const H=V[X];if(H.location>=0){let $=k[X];if($===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&($=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&($=E.instanceColor)),$!==void 0){const K=$.normalized,ce=$.itemSize,ge=e.get($);if(ge===void 0)continue;const ke=ge.buffer,ze=ge.type,$e=ge.bytesPerElement,j=ze===s.INT||ze===s.UNSIGNED_INT||$.gpuType===qc;if($.isInterleavedBufferAttribute){const Q=$.data,de=Q.stride,Ue=$.offset;if(Q.isInstancedInterleavedBuffer){for(let ye=0;ye<H.locationSize;ye++)m(H.location+ye,Q.meshPerAttribute);E.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ye=0;ye<H.locationSize;ye++)p(H.location+ye);s.bindBuffer(s.ARRAY_BUFFER,ke);for(let ye=0;ye<H.locationSize;ye++)g(H.location+ye,ce/H.locationSize,ze,K,de*$e,(Ue+ce/H.locationSize*ye)*$e,j)}else{if($.isInstancedBufferAttribute){for(let Q=0;Q<H.locationSize;Q++)m(H.location+Q,$.meshPerAttribute);E.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Q=0;Q<H.locationSize;Q++)p(H.location+Q);s.bindBuffer(s.ARRAY_BUFFER,ke);for(let Q=0;Q<H.locationSize;Q++)g(H.location+Q,ce/H.locationSize,ze,K,ce*$e,ce/H.locationSize*Q*$e,j)}}else if(B!==void 0){const K=B[X];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(H.location,K);break;case 3:s.vertexAttrib3fv(H.location,K);break;case 4:s.vertexAttrib4fv(H.location,K);break;default:s.vertexAttrib1fv(H.location,K)}}}}b()}function T(){C();for(const E in n){const P=n[E];for(const I in P){const N=P[I];for(const k in N)h(N[k].object),delete N[k];delete P[I]}delete n[E]}}function M(E){if(n[E.id]===void 0)return;const P=n[E.id];for(const I in P){const N=P[I];for(const k in N)h(N[k].object),delete N[k];delete P[I]}delete n[E.id]}function w(E){for(const P in n){const I=n[P];if(I[E.id]===void 0)continue;const N=I[E.id];for(const k in N)h(N[k].object),delete N[k];delete I[E.id]}}function C(){v(),a=!0,r!==i&&(r=i,c(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:v,dispose:T,releaseStatesOfGeometry:M,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function $v(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let x=0;x<u;x++)d+=h[x];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<c.length;x++)a(c[x],h[x],f[x]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let x=0;for(let _=0;_<u;_++)x+=h[_]*f[_];t.update(x,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Jv(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==Tn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===xs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Jn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Fn&&!C)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(be("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),g=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=x>0,M=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:g,maxFragmentUniforms:y,vertexTextures:T,maxSamples:M}}function Qv(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Ui,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const x=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!i||x===null||x.length===0||r&&!p)r?h(null):c();else{const b=r?0:n,g=b*4;let y=m.clippingState||null;l.value=y,y=h(x,f,g,d);for(let T=0;T!==g;++T)y[T]=t[T];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,x){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,x!==!0||p===null){const m=d+_*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let g=0,y=d;g!==_;++g,y+=4)a.copy(u[g]).applyMatrix4(b,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function eb(s){let e=new WeakMap;function t(a,o){return o===Vl?a.mapping=ns:o===Hl&&(a.mapping=is),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Vl||o===Hl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new b_(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Oi=4,ku=[.125,.215,.35,.446,.526,.582],lr=20,tb=256,Ls=new uh,zu=new Le;let ll=null,cl=0,hl=0,ul=!1;const nb=new F;class Vu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=nb}=r;ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ll,cl,hl),this._renderer.xr.enabled=ul,e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ns||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:xs,format:Tn,colorSpace:Jt,depthBuffer:!1},i=Hu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hu(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ib(r)),this._blurMaterial=sb(r,e,t),this._ggxMaterial=rb(r,e,t)}return i}_compileMaterial(e){const t=new Rn(new Bn,e);this._renderer.compile(t,Ls)}_sceneToCubeUV(e,t,n,i,r){const l=new Vt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(zu),u.toneMapping=Vi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rn(new fa,new hr({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let m=!1;const b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,m=!0):(p.color.copy(zu),m=!0);for(let g=0;g<6;g++){const y=g%3;y===0?(l.up.set(0,c[g],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[g],r.y,r.z)):y===1?(l.up.set(0,0,c[g]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[g],r.z)):(l.up.set(0,c[g],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[g]));const T=this._cubeSize;Br(i,y*T,g>2?T:0,T,T),u.setRenderTarget(i),m&&u.render(_,l),u.render(e,l)}u.toneMapping=d,u.autoClear=f,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ns||e.mapping===is;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gu());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Br(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ls)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=.05+c*.95,d=u*f,{_lodMax:x}=this,_=this._sizeLods[n],p=3*_*(n>x-Oi?n-x+Oi:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=x-t,Br(r,p,m,3*_,2*_),i.setRenderTarget(r),i.render(o,Ls),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Br(e,p,m,3*_,2*_),i.setRenderTarget(e),i.render(o,Ls)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&We("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*lr-1),_=r/x,p=isFinite(r)?1+Math.floor(h*_):lr;p>lr&&be(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${lr}`);const m=[];let b=0;for(let w=0;w<lr;++w){const C=w/_,v=Math.exp(-C*C/2);m.push(v),w===0?b+=v:w<p&&(b+=2*v)}for(let w=0;w<m.length;w++)m[w]=m[w]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:g}=this;f.dTheta.value=x,f.mipInt.value=g-n;const y=this._sizeLods[i],T=3*y*(i>g-Oi?i-g+Oi:0),M=4*(this._cubeSize-y);Br(t,T,M,3*y,2*y),l.setRenderTarget(t),l.render(u,Ls)}}function ib(s){const e=[],t=[],n=[];let i=s;const r=s-Oi+1+ku.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Oi?l=ku[a-s+Oi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,x=6,_=3,p=2,m=1,b=new Float32Array(_*x*d),g=new Float32Array(p*x*d),y=new Float32Array(m*x*d);for(let M=0;M<d;M++){const w=M%3*2/3-1,C=M>2?0:-1,v=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];b.set(v,_*x*M),g.set(f,p*x*M);const E=[M,M,M,M,M,M];y.set(E,m*x*M)}const T=new Bn;T.setAttribute("position",new $t(b,_)),T.setAttribute("uv",new $t(g,p)),T.setAttribute("faceIndex",new $t(y,m)),n.push(new Rn(T,null)),i>Oi&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Hu(s,e,t){const n=new gr(s,e,t);return n.texture.mapping=vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function rb(s,e,t){return new Ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function sb(s,e,t){const n=new Float32Array(lr),i=new F(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Gu(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Wu(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Mo(){return`

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
	`}function ab(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Vl||l===Hl,h=l===ns||l===is;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Vu(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Vu(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ob(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ea("WebGLRenderer: "+n+" extension not supported."),i}}}function lb(s,e,t,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,x=u.attributes.position;let _=0;if(d!==null){const b=d.array;_=d.version;for(let g=0,y=b.length;g<y;g+=3){const T=b[g+0],M=b[g+1],w=b[g+2];f.push(T,M,M,w,w,T)}}else if(x!==void 0){const b=x.array;_=x.version;for(let g=0,y=b.length/3-1;g<y;g+=3){const T=g+0,M=g+1,w=g+2;f.push(T,M,M,w,w,T)}}else return;const p=new(ud(f)?xd:_d)(f,1);p.version=_;const m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function cb(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*a),t.update(d,n,1)}function c(f,d,x){x!==0&&(s.drawElementsInstanced(n,d,r,f*a,x),t.update(d,n,x))}function h(f,d,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,x);let p=0;for(let m=0;m<x;m++)p+=d[m];t.update(p,n,1)}function u(f,d,x,_){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/a,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,x);let m=0;for(let b=0;b<x;b++)m+=d[b]*_[b];t.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function hb(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ub(s,e,t){const n=new WeakMap,i=new et;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let v=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let g=0;d===!0&&(g=1),x===!0&&(g=2),_===!0&&(g=3);let y=o.attributes.position.count*g,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const M=new Float32Array(y*T*4*u),w=new dd(M,y,T,u);w.type=Fn,w.needsUpdate=!0;const C=g*4;for(let E=0;E<u;E++){const P=p[E],I=m[E],N=b[E],k=y*T*4*E;for(let V=0;V<P.count;V++){const B=V*C;d===!0&&(i.fromBufferAttribute(P,V),M[k+B+0]=i.x,M[k+B+1]=i.y,M[k+B+2]=i.z,M[k+B+3]=0),x===!0&&(i.fromBufferAttribute(I,V),M[k+B+4]=i.x,M[k+B+5]=i.y,M[k+B+6]=i.z,M[k+B+7]=0),_===!0&&(i.fromBufferAttribute(N,V),M[k+B+8]=i.x,M[k+B+9]=i.y,M[k+B+10]=i.z,M[k+B+11]=N.itemSize===4?i.w:1)}}f={count:u,texture:w,size:new De(y,T)},n.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const x=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function fb(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Id=new It,Xu=new Ed(1,1),Nd=new dd,Ud=new i_,Fd=new bd,Yu=[],qu=[],ju=new Float32Array(16),Ku=new Float32Array(9),Zu=new Float32Array(4);function ys(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Yu[i];if(r===void 0&&(r=new Float32Array(i),Yu[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Pt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Dt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function So(s,e){let t=qu[e];t===void 0&&(t=new Int32Array(e),qu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function db(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function pb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2fv(this.addr,e),Dt(t,e)}}function mb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;s.uniform3fv(this.addr,e),Dt(t,e)}}function _b(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4fv(this.addr,e),Dt(t,e)}}function xb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;Zu.set(n),s.uniformMatrix2fv(this.addr,!1,Zu),Dt(t,n)}}function gb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;Ku.set(n),s.uniformMatrix3fv(this.addr,!1,Ku),Dt(t,n)}}function vb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;ju.set(n),s.uniformMatrix4fv(this.addr,!1,ju),Dt(t,n)}}function bb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function yb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2iv(this.addr,e),Dt(t,e)}}function Mb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;s.uniform3iv(this.addr,e),Dt(t,e)}}function Sb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4iv(this.addr,e),Dt(t,e)}}function Tb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Eb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2uiv(this.addr,e),Dt(t,e)}}function Ab(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;s.uniform3uiv(this.addr,e),Dt(t,e)}}function wb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4uiv(this.addr,e),Dt(t,e)}}function Rb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Xu.compareFunction=hd,r=Xu):r=Id,t.setTexture2D(e||r,i)}function Cb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ud,i)}function Pb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Fd,i)}function Db(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Nd,i)}function Lb(s){switch(s){case 5126:return db;case 35664:return pb;case 35665:return mb;case 35666:return _b;case 35674:return xb;case 35675:return gb;case 35676:return vb;case 5124:case 35670:return bb;case 35667:case 35671:return yb;case 35668:case 35672:return Mb;case 35669:case 35673:return Sb;case 5125:return Tb;case 36294:return Eb;case 36295:return Ab;case 36296:return wb;case 35678:case 36198:case 36298:case 36306:case 35682:return Rb;case 35679:case 36299:case 36307:return Cb;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Db}}function Ib(s,e){s.uniform1fv(this.addr,e)}function Nb(s,e){const t=ys(e,this.size,2);s.uniform2fv(this.addr,t)}function Ub(s,e){const t=ys(e,this.size,3);s.uniform3fv(this.addr,t)}function Fb(s,e){const t=ys(e,this.size,4);s.uniform4fv(this.addr,t)}function Ob(s,e){const t=ys(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Bb(s,e){const t=ys(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function kb(s,e){const t=ys(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function zb(s,e){s.uniform1iv(this.addr,e)}function Vb(s,e){s.uniform2iv(this.addr,e)}function Hb(s,e){s.uniform3iv(this.addr,e)}function Gb(s,e){s.uniform4iv(this.addr,e)}function Wb(s,e){s.uniform1uiv(this.addr,e)}function Xb(s,e){s.uniform2uiv(this.addr,e)}function Yb(s,e){s.uniform3uiv(this.addr,e)}function qb(s,e){s.uniform4uiv(this.addr,e)}function jb(s,e,t){const n=this.cache,i=e.length,r=So(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Id,r[a])}function Kb(s,e,t){const n=this.cache,i=e.length,r=So(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ud,r[a])}function Zb(s,e,t){const n=this.cache,i=e.length,r=So(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Fd,r[a])}function $b(s,e,t){const n=this.cache,i=e.length,r=So(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Nd,r[a])}function Jb(s){switch(s){case 5126:return Ib;case 35664:return Nb;case 35665:return Ub;case 35666:return Fb;case 35674:return Ob;case 35675:return Bb;case 35676:return kb;case 5124:case 35670:return zb;case 35667:case 35671:return Vb;case 35668:case 35672:return Hb;case 35669:case 35673:return Gb;case 5125:return Wb;case 36294:return Xb;case 36295:return Yb;case 36296:return qb;case 35678:case 36198:case 36298:case 36306:case 35682:return jb;case 35679:case 36299:case 36307:return Kb;case 35680:case 36300:case 36308:case 36293:return Zb;case 36289:case 36303:case 36311:case 36292:return $b}}class Qb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Lb(t.type)}}class ey{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jb(t.type)}}class ty{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const fl=/(\w+)(\])?(\[|\.)?/g;function $u(s,e){s.seq.push(e),s.map[e.id]=e}function ny(s,e,t){const n=s.name,i=n.length;for(fl.lastIndex=0;;){const r=fl.exec(n),a=fl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){$u(t,c===void 0?new Qb(o,s,e):new ey(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new ty(o),$u(t,u)),t=u}}}class Ja{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);ny(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Ju(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const iy=37297;let ry=0;function sy(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Qu=new Fe;function ay(s){Je._getMatrix(Qu,Je.workingColorSpace,s);const e=`mat3( ${Qu.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(s)){case io:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return be("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ef(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+sy(s.getShaderSource(e),o)}else return r}function oy(s,e){const t=ay(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ly(s,e){let t;switch(e){case p0:t="Linear";break;case m0:t="Reinhard";break;case _0:t="Cineon";break;case x0:t="ACESFilmic";break;case v0:t="AgX";break;case b0:t="Neutral";break;case g0:t="Custom";break;default:be("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wa=new F;function cy(){Je.getLuminanceCoefficients(Wa);const s=Wa.x.toFixed(4),e=Wa.y.toFixed(4),t=Wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function uy(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fy(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Os(s){return s!==""}function tf(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dy=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(s){return s.replace(dy,my)}const py=new Map;function my(s,e){let t=Oe[e];if(t===void 0){const n=py.get(e);if(n!==void 0)t=Oe[n],be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yc(t)}const _y=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rf(s){return s.replace(_y,xy)}function xy(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function sf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gy(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Jf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===qm?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function vy(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ns:case is:e="ENVMAP_TYPE_CUBE";break;case vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function by(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case is:e="ENVMAP_MODE_REFRACTION";break}return e}function yy(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Qf:e="ENVMAP_BLENDING_MULTIPLY";break;case f0:e="ENVMAP_BLENDING_MIX";break;case d0:e="ENVMAP_BLENDING_ADD";break}return e}function My(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Sy(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=gy(t),c=vy(t),h=by(t),u=yy(t),f=My(t),d=hy(t),x=uy(r),_=i.createProgram();let p,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Os).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Os).join(`
`),m.length>0&&(m+=`
`)):(p=[sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),m=[sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Vi?ly("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,oy("linearToOutputTexel",t.outputColorSpace),cy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Os).join(`
`)),a=yc(a),a=tf(a,t),a=nf(a,t),o=yc(o),o=tf(o,t),o=nf(o,t),a=rf(a),o=rf(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const g=b+p+a,y=b+m+o,T=Ju(i,i.VERTEX_SHADER,g),M=Ju(i,i.FRAGMENT_SHADER,y);i.attachShader(_,T),i.attachShader(_,M),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(P){if(s.debug.checkShaderErrors){const I=i.getProgramInfoLog(_)||"",N=i.getShaderInfoLog(T)||"",k=i.getShaderInfoLog(M)||"",V=I.trim(),B=N.trim(),X=k.trim();let H=!0,$=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,T,M);else{const K=ef(i,T,"vertex"),ce=ef(i,M,"fragment");We("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+K+`
`+ce)}else V!==""?be("WebGLProgram: Program Info Log:",V):(B===""||X==="")&&($=!1);$&&(P.diagnostics={runnable:H,programLog:V,vertexShader:{log:B,prefix:p},fragmentShader:{log:X,prefix:m}})}i.deleteShader(T),i.deleteShader(M),C=new Ja(i,_),v=fy(i,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let v;this.getAttributes=function(){return v===void 0&&w(this),v};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(_,iy)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ry++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=M,this}let Ty=0;class Ey{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ay(e),t.set(e,n)),n}}class Ay{constructor(e){this.id=Ty++,this.code=e,this.usedTimes=0}}function wy(s,e,t,n,i,r,a){const o=new pd,l=new Ey,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,E,P,I,N){const k=I.fog,V=N.geometry,B=v.isMeshStandardMaterial?I.environment:null,X=(v.isMeshStandardMaterial?t:e).get(v.envMap||B),H=X&&X.mapping===vo?X.image.height:null,$=x[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&be("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const K=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ce=K!==void 0?K.length:0;let ge=0;V.morphAttributes.position!==void 0&&(ge=1),V.morphAttributes.normal!==void 0&&(ge=2),V.morphAttributes.color!==void 0&&(ge=3);let ke,ze,$e,j;if($){const it=Gn[$];ke=it.vertexShader,ze=it.fragmentShader}else ke=v.vertexShader,ze=v.fragmentShader,l.update(v),$e=l.getVertexShaderID(v),j=l.getFragmentShaderID(v);const Q=s.getRenderTarget(),de=s.state.buffers.depth.getReversed(),Ue=N.isInstancedMesh===!0,ye=N.isBatchedMesh===!0,Ye=!!v.map,Ut=!!v.matcap,He=!!X,ft=!!v.aoMap,D=!!v.lightMap,qe=!!v.bumpMap,je=!!v.normalMap,ht=!!v.displacementMap,_e=!!v.emissiveMap,pt=!!v.metalnessMap,Se=!!v.roughnessMap,Ne=v.anisotropy>0,R=v.clearcoat>0,S=v.dispersion>0,z=v.iridescence>0,q=v.sheen>0,J=v.transmission>0,Y=Ne&&!!v.anisotropyMap,ve=R&&!!v.clearcoatMap,oe=R&&!!v.clearcoatNormalMap,Te=R&&!!v.clearcoatRoughnessMap,xe=z&&!!v.iridescenceMap,ee=z&&!!v.iridescenceThicknessMap,ie=q&&!!v.sheenColorMap,Re=q&&!!v.sheenRoughnessMap,Ae=!!v.specularMap,ue=!!v.specularColorMap,Pe=!!v.specularIntensityMap,L=J&&!!v.transmissionMap,le=J&&!!v.thicknessMap,re=!!v.gradientMap,se=!!v.alphaMap,te=v.alphaTest>0,Z=!!v.alphaHash,pe=!!v.extensions;let Ie=Vi;v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ie=s.toneMapping);const ut={shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:ke,fragmentShader:ze,defines:v.defines,customVertexShaderID:$e,customFragmentShaderID:j,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:ye,batchingColor:ye&&N._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&N.instanceColor!==null,instancingMorph:Ue&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Jt,alphaToCoverage:!!v.alphaToCoverage,map:Ye,matcap:Ut,envMap:He,envMapMode:He&&X.mapping,envMapCubeUVHeight:H,aoMap:ft,lightMap:D,bumpMap:qe,normalMap:je,displacementMap:f&&ht,emissiveMap:_e,normalMapObjectSpace:je&&v.normalMapType===A0,normalMapTangentSpace:je&&v.normalMapType===cd,metalnessMap:pt,roughnessMap:Se,anisotropy:Ne,anisotropyMap:Y,clearcoat:R,clearcoatMap:ve,clearcoatNormalMap:oe,clearcoatRoughnessMap:Te,dispersion:S,iridescence:z,iridescenceMap:xe,iridescenceThicknessMap:ee,sheen:q,sheenColorMap:ie,sheenRoughnessMap:Re,specularMap:Ae,specularColorMap:ue,specularIntensityMap:Pe,transmission:J,transmissionMap:L,thicknessMap:le,gradientMap:re,opaque:v.transparent===!1&&v.blending===jr&&v.alphaToCoverage===!1,alphaMap:se,alphaTest:te,alphaHash:Z,combine:v.combine,mapUv:Ye&&_(v.map.channel),aoMapUv:ft&&_(v.aoMap.channel),lightMapUv:D&&_(v.lightMap.channel),bumpMapUv:qe&&_(v.bumpMap.channel),normalMapUv:je&&_(v.normalMap.channel),displacementMapUv:ht&&_(v.displacementMap.channel),emissiveMapUv:_e&&_(v.emissiveMap.channel),metalnessMapUv:pt&&_(v.metalnessMap.channel),roughnessMapUv:Se&&_(v.roughnessMap.channel),anisotropyMapUv:Y&&_(v.anisotropyMap.channel),clearcoatMapUv:ve&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(v.sheenRoughnessMap.channel),specularMapUv:Ae&&_(v.specularMap.channel),specularColorMapUv:ue&&_(v.specularColorMap.channel),specularIntensityMapUv:Pe&&_(v.specularIntensityMap.channel),transmissionMapUv:L&&_(v.transmissionMap.channel),thicknessMapUv:le&&_(v.thicknessMap.channel),alphaMapUv:se&&_(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(je||Ne),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!V.attributes.uv&&(Ye||se),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:de,skinning:N.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:ge,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Ye&&v.map.isVideoTexture===!0&&Je.getTransfer(v.map.colorSpace)===st,decodeVideoTextureEmissive:_e&&v.emissiveMap.isVideoTexture===!0&&Je.getTransfer(v.emissiveMap.colorSpace)===st,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Xn,flipSided:v.side===nn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:pe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&v.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function m(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)E.push(P),E.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(b(E,v),g(E,v),E.push(s.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function b(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function g(v,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),v.push(o.mask)}function y(v){const E=x[v.type];let P;if(E){const I=Gn[E];P=__.clone(I.uniforms)}else P=v.uniforms;return P}function T(v,E){let P;for(let I=0,N=h.length;I<N;I++){const k=h[I];if(k.cacheKey===E){P=k,++P.usedTimes;break}}return P===void 0&&(P=new Sy(s,E,v,r),h.push(P)),P}function M(v){if(--v.usedTimes===0){const E=h.indexOf(v);h[E]=h[h.length-1],h.pop(),v.destroy()}}function w(v){l.remove(v)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:T,releaseProgram:M,releaseShaderCache:w,programs:h,dispose:C}}function Ry(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Cy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function af(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function of(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,d,x,_,p){let m=s[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:x,renderOrder:u.renderOrder,z:_,group:p},s[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=x,m.renderOrder=u.renderOrder,m.z=_,m.group=p),e++,m}function o(u,f,d,x,_,p){const m=a(u,f,d,x,_,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(u,f,d,x,_,p){const m=a(u,f,d,x,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||Cy),n.length>1&&n.sort(f||af),i.length>1&&i.sort(f||af)}function h(){for(let u=e,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Py(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new of,s.set(n,[a])):i>=r.length?(a=new of,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Dy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Le};break;case"SpotLight":t={position:new F,direction:new F,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function Ly(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Iy=0;function Ny(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Uy(s){const e=new Dy,t=Ly(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const i=new F,r=new Be,a=new Be;function o(c){let h=0,u=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let d=0,x=0,_=0,p=0,m=0,b=0,g=0,y=0,T=0,M=0,w=0;c.sort(Ny);for(let v=0,E=c.length;v<E;v++){const P=c[v],I=P.color,N=P.intensity,k=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=I.r*N,u+=I.g*N,f+=I.b*N;else if(P.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(P.sh.coefficients[B],N);w++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const X=P.shadow,H=t.get(P);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=P.shadow.matrix,b++}n.directional[d]=B,d++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(I).multiplyScalar(N),B.distance=k,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,n.spot[_]=B;const X=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,X.updateMatrices(P),P.castShadow&&M++),n.spotLightMatrix[_]=X.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=V,y++}_++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(I).multiplyScalar(N),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=B,p++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const X=P.shadow,H=t.get(P);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,H.shadowCameraNear=X.camera.near,H.shadowCameraFar=X.camera.far,n.pointShadow[x]=H,n.pointShadowMap[x]=V,n.pointShadowMatrix[x]=P.shadow.matrix,g++}n.point[x]=B,x++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(N),B.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[m]=B,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==x||C.spotLength!==_||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==b||C.numPointShadows!==g||C.numSpotShadows!==y||C.numSpotMaps!==T||C.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=y+T-M,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=w,C.directionalLength=d,C.pointLength=x,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=b,C.numPointShadows=g,C.numSpotShadows=y,C.numSpotMaps=T,C.numLightProbes=w,n.version=Iy++)}function l(c,h){let u=0,f=0,d=0,x=0,_=0;const p=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){const g=c[m];if(g.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),u++}else if(g.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),d++}else if(g.isRectAreaLight){const y=n.rectArea[x];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(g.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(g.width*.5,0,0),y.halfHeight.set(0,g.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(g.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(p),f++}else if(g.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(g.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function lf(s){const e=new Uy(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Fy(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new lf(s),e.set(i,[o])):r>=a.length?(o=new lf(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Oy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,By=`uniform sampler2D shadow_pass;
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
}`;function ky(s,e,t){let n=new oh;const i=new De,r=new De,a=new et,o=new N_({depthPacking:E0}),l=new U_,c={},h=t.maxTextureSize,u={[Si]:nn,[nn]:Si,[Xn]:Xn},f=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Oy,fragmentShader:By}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const x=new Bn;x.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Rn(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jf;let m=this.type;this.render=function(M,w,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const v=s.getRenderTarget(),E=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),I=s.state;I.setBlending(gi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const N=m!==ui&&this.type===ui,k=m===ui&&this.type!==ui;for(let V=0,B=M.length;V<B;V++){const X=M[V],H=X.shadow;if(H===void 0){be("WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const $=H.getFrameExtents();if(i.multiply($),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/$.x),i.x=r.x*$.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/$.y),i.y=r.y*$.y,H.mapSize.y=r.y)),H.map===null||N===!0||k===!0){const ce=this.type!==ui?{minFilter:Zt,magFilter:Zt}:{};H.map!==null&&H.map.dispose(),H.map=new gr(i.x,i.y,ce),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const K=H.getViewportCount();for(let ce=0;ce<K;ce++){const ge=H.getViewport(ce);a.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),I.viewport(a),H.updateMatrices(X,ce),n=H.getFrustum(),y(w,C,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===ui&&b(H,C),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(v,E,P)};function b(M,w){const C=e.update(_);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new gr(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(w,null,C,f,_,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(w,null,C,d,_,null)}function g(M,w,C,v){let E=null;const P=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)E=P;else if(E=C.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const I=E.uuid,N=w.uuid;let k=c[I];k===void 0&&(k={},c[I]=k);let V=k[N];V===void 0&&(V=E.clone(),k[N]=V,w.addEventListener("dispose",T)),E=V}if(E.visible=w.visible,E.wireframe=w.wireframe,v===ui?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:u[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,C.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const I=s.properties.get(E);I.light=C}return E}function y(M,w,C,v,E){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===ui)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const N=e.update(M),k=M.material;if(Array.isArray(k)){const V=N.groups;for(let B=0,X=V.length;B<X;B++){const H=V[B],$=k[H.materialIndex];if($&&$.visible){const K=g(M,$,v,E);M.onBeforeShadow(s,M,w,C,N,K,H),s.renderBufferDirect(C,null,N,K,M,H),M.onAfterShadow(s,M,w,C,N,K,H)}}}else if(k.visible){const V=g(M,k,v,E);M.onBeforeShadow(s,M,w,C,N,V,null),s.renderBufferDirect(C,null,N,V,M,null),M.onAfterShadow(s,M,w,C,N,V,null)}}const I=M.children;for(let N=0,k=I.length;N<k;N++)y(I[N],w,C,v,E)}function T(M){M.target.removeEventListener("dispose",T);for(const C in c){const v=c[C],E=M.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}const zy={[Nl]:Ul,[Fl]:kl,[Ol]:zl,[ts]:Bl,[Ul]:Nl,[kl]:Fl,[zl]:Ol,[Bl]:ts};function Vy(s,e){function t(){let L=!1;const le=new et;let re=null;const se=new et(0,0,0,0);return{setMask:function(te){re!==te&&!L&&(s.colorMask(te,te,te,te),re=te)},setLocked:function(te){L=te},setClear:function(te,Z,pe,Ie,ut){ut===!0&&(te*=Ie,Z*=Ie,pe*=Ie),le.set(te,Z,pe,Ie),se.equals(le)===!1&&(s.clearColor(te,Z,pe,Ie),se.copy(le))},reset:function(){L=!1,re=null,se.set(-1,0,0,0)}}}function n(){let L=!1,le=!1,re=null,se=null,te=null;return{setReversed:function(Z){if(le!==Z){const pe=e.get("EXT_clip_control");Z?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),le=Z;const Ie=te;te=null,this.setClear(Ie)}},getReversed:function(){return le},setTest:function(Z){Z?Q(s.DEPTH_TEST):de(s.DEPTH_TEST)},setMask:function(Z){re!==Z&&!L&&(s.depthMask(Z),re=Z)},setFunc:function(Z){if(le&&(Z=zy[Z]),se!==Z){switch(Z){case Nl:s.depthFunc(s.NEVER);break;case Ul:s.depthFunc(s.ALWAYS);break;case Fl:s.depthFunc(s.LESS);break;case ts:s.depthFunc(s.LEQUAL);break;case Ol:s.depthFunc(s.EQUAL);break;case Bl:s.depthFunc(s.GEQUAL);break;case kl:s.depthFunc(s.GREATER);break;case zl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}se=Z}},setLocked:function(Z){L=Z},setClear:function(Z){te!==Z&&(le&&(Z=1-Z),s.clearDepth(Z),te=Z)},reset:function(){L=!1,re=null,se=null,te=null,le=!1}}}function i(){let L=!1,le=null,re=null,se=null,te=null,Z=null,pe=null,Ie=null,ut=null;return{setTest:function(it){L||(it?Q(s.STENCIL_TEST):de(s.STENCIL_TEST))},setMask:function(it){le!==it&&!L&&(s.stencilMask(it),le=it)},setFunc:function(it,zn,Cn){(re!==it||se!==zn||te!==Cn)&&(s.stencilFunc(it,zn,Cn),re=it,se=zn,te=Cn)},setOp:function(it,zn,Cn){(Z!==it||pe!==zn||Ie!==Cn)&&(s.stencilOp(it,zn,Cn),Z=it,pe=zn,Ie=Cn)},setLocked:function(it){L=it},setClear:function(it){ut!==it&&(s.clearStencil(it),ut=it)},reset:function(){L=!1,le=null,re=null,se=null,te=null,Z=null,pe=null,Ie=null,ut=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],x=null,_=!1,p=null,m=null,b=null,g=null,y=null,T=null,M=null,w=new Le(0,0,0),C=0,v=!1,E=null,P=null,I=null,N=null,k=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,X=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=X>=2);let $=null,K={};const ce=s.getParameter(s.SCISSOR_BOX),ge=s.getParameter(s.VIEWPORT),ke=new et().fromArray(ce),ze=new et().fromArray(ge);function $e(L,le,re,se){const te=new Uint8Array(4),Z=s.createTexture();s.bindTexture(L,Z),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pe=0;pe<re;pe++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(le,0,s.RGBA,1,1,se,0,s.RGBA,s.UNSIGNED_BYTE,te):s.texImage2D(le+pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,te);return Z}const j={};j[s.TEXTURE_2D]=$e(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=$e(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=$e(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=$e(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(s.DEPTH_TEST),a.setFunc(ts),qe(!1),je(Xh),Q(s.CULL_FACE),ft(gi);function Q(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function de(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Ue(L,le){return u[L]!==le?(s.bindFramebuffer(L,le),u[L]=le,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=le),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=le),!0):!1}function ye(L,le){let re=d,se=!1;if(L){re=f.get(le),re===void 0&&(re=[],f.set(le,re));const te=L.textures;if(re.length!==te.length||re[0]!==s.COLOR_ATTACHMENT0){for(let Z=0,pe=te.length;Z<pe;Z++)re[Z]=s.COLOR_ATTACHMENT0+Z;re.length=te.length,se=!0}}else re[0]!==s.BACK&&(re[0]=s.BACK,se=!0);se&&s.drawBuffers(re)}function Ye(L){return x!==L?(s.useProgram(L),x=L,!0):!1}const Ut={[or]:s.FUNC_ADD,[Km]:s.FUNC_SUBTRACT,[Zm]:s.FUNC_REVERSE_SUBTRACT};Ut[$m]=s.MIN,Ut[Jm]=s.MAX;const He={[Qm]:s.ZERO,[e0]:s.ONE,[t0]:s.SRC_COLOR,[Ll]:s.SRC_ALPHA,[o0]:s.SRC_ALPHA_SATURATE,[s0]:s.DST_COLOR,[i0]:s.DST_ALPHA,[n0]:s.ONE_MINUS_SRC_COLOR,[Il]:s.ONE_MINUS_SRC_ALPHA,[a0]:s.ONE_MINUS_DST_COLOR,[r0]:s.ONE_MINUS_DST_ALPHA,[l0]:s.CONSTANT_COLOR,[c0]:s.ONE_MINUS_CONSTANT_COLOR,[h0]:s.CONSTANT_ALPHA,[u0]:s.ONE_MINUS_CONSTANT_ALPHA};function ft(L,le,re,se,te,Z,pe,Ie,ut,it){if(L===gi){_===!0&&(de(s.BLEND),_=!1);return}if(_===!1&&(Q(s.BLEND),_=!0),L!==jm){if(L!==p||it!==v){if((m!==or||y!==or)&&(s.blendEquation(s.FUNC_ADD),m=or,y=or),it)switch(L){case jr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yh:s.blendFunc(s.ONE,s.ONE);break;case qh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:We("WebGLState: Invalid blending: ",L);break}else switch(L){case jr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case qh:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jh:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",L);break}b=null,g=null,T=null,M=null,w.set(0,0,0),C=0,p=L,v=it}return}te=te||le,Z=Z||re,pe=pe||se,(le!==m||te!==y)&&(s.blendEquationSeparate(Ut[le],Ut[te]),m=le,y=te),(re!==b||se!==g||Z!==T||pe!==M)&&(s.blendFuncSeparate(He[re],He[se],He[Z],He[pe]),b=re,g=se,T=Z,M=pe),(Ie.equals(w)===!1||ut!==C)&&(s.blendColor(Ie.r,Ie.g,Ie.b,ut),w.copy(Ie),C=ut),p=L,v=!1}function D(L,le){L.side===Xn?de(s.CULL_FACE):Q(s.CULL_FACE);let re=L.side===nn;le&&(re=!re),qe(re),L.blending===jr&&L.transparent===!1?ft(gi):ft(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const se=L.stencilWrite;o.setTest(se),se&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),_e(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):de(s.SAMPLE_ALPHA_TO_COVERAGE)}function qe(L){E!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),E=L)}function je(L){L!==Xm?(Q(s.CULL_FACE),L!==P&&(L===Xh?s.cullFace(s.BACK):L===Ym?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):de(s.CULL_FACE),P=L}function ht(L){L!==I&&(B&&s.lineWidth(L),I=L)}function _e(L,le,re){L?(Q(s.POLYGON_OFFSET_FILL),(N!==le||k!==re)&&(s.polygonOffset(le,re),N=le,k=re)):de(s.POLYGON_OFFSET_FILL)}function pt(L){L?Q(s.SCISSOR_TEST):de(s.SCISSOR_TEST)}function Se(L){L===void 0&&(L=s.TEXTURE0+V-1),$!==L&&(s.activeTexture(L),$=L)}function Ne(L,le,re){re===void 0&&($===null?re=s.TEXTURE0+V-1:re=$);let se=K[re];se===void 0&&(se={type:void 0,texture:void 0},K[re]=se),(se.type!==L||se.texture!==le)&&($!==re&&(s.activeTexture(re),$=re),s.bindTexture(L,le||j[L]),se.type=L,se.texture=le)}function R(){const L=K[$];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{s.compressedTexImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function z(){try{s.compressedTexImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function q(){try{s.texSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function J(){try{s.texSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function ve(){try{s.compressedTexSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function oe(){try{s.texStorage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Te(){try{s.texStorage3D(...arguments)}catch(L){L("WebGLState:",L)}}function xe(){try{s.texImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function ee(){try{s.texImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function ie(L){ke.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),ke.copy(L))}function Re(L){ze.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),ze.copy(L))}function Ae(L,le){let re=c.get(le);re===void 0&&(re=new WeakMap,c.set(le,re));let se=re.get(L);se===void 0&&(se=s.getUniformBlockIndex(le,L.name),re.set(L,se))}function ue(L,le){const se=c.get(le).get(L);l.get(le)!==se&&(s.uniformBlockBinding(le,se,L.__bindingPointIndex),l.set(le,se))}function Pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},$=null,K={},u={},f=new WeakMap,d=[],x=null,_=!1,p=null,m=null,b=null,g=null,y=null,T=null,M=null,w=new Le(0,0,0),C=0,v=!1,E=null,P=null,I=null,N=null,k=null,ke.set(0,0,s.canvas.width,s.canvas.height),ze.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:de,bindFramebuffer:Ue,drawBuffers:ye,useProgram:Ye,setBlending:ft,setMaterial:D,setFlipSided:qe,setCullFace:je,setLineWidth:ht,setPolygonOffset:_e,setScissorTest:pt,activeTexture:Se,bindTexture:Ne,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:z,texImage2D:xe,texImage3D:ee,updateUBOMapping:Ae,uniformBlockBinding:ue,texStorage2D:oe,texStorage3D:Te,texSubImage2D:q,texSubImage3D:J,compressedTexSubImage2D:Y,compressedTexSubImage3D:ve,scissor:ie,viewport:Re,reset:Pe}}function Hy(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,S){return d?new OffscreenCanvas(R,S):Qs("canvas")}function _(R,S,z){let q=1;const J=Ne(R);if((J.width>z||J.height>z)&&(q=z/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(q*J.width),ve=Math.floor(q*J.height);u===void 0&&(u=x(Y,ve));const oe=S?x(Y,ve):u;return oe.width=Y,oe.height=ve,oe.getContext("2d").drawImage(R,0,0,Y,ve),be("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+ve+")."),oe}else return"data"in R&&be("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function p(R){return R.generateMipmaps}function m(R){s.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function g(R,S,z,q,J=!1){if(R!==null){if(s[R]!==void 0)return s[R];be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=S;if(S===s.RED&&(z===s.FLOAT&&(Y=s.R32F),z===s.HALF_FLOAT&&(Y=s.R16F),z===s.UNSIGNED_BYTE&&(Y=s.R8)),S===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.R8UI),z===s.UNSIGNED_SHORT&&(Y=s.R16UI),z===s.UNSIGNED_INT&&(Y=s.R32UI),z===s.BYTE&&(Y=s.R8I),z===s.SHORT&&(Y=s.R16I),z===s.INT&&(Y=s.R32I)),S===s.RG&&(z===s.FLOAT&&(Y=s.RG32F),z===s.HALF_FLOAT&&(Y=s.RG16F),z===s.UNSIGNED_BYTE&&(Y=s.RG8)),S===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.RG8UI),z===s.UNSIGNED_SHORT&&(Y=s.RG16UI),z===s.UNSIGNED_INT&&(Y=s.RG32UI),z===s.BYTE&&(Y=s.RG8I),z===s.SHORT&&(Y=s.RG16I),z===s.INT&&(Y=s.RG32I)),S===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),z===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),z===s.UNSIGNED_INT&&(Y=s.RGB32UI),z===s.BYTE&&(Y=s.RGB8I),z===s.SHORT&&(Y=s.RGB16I),z===s.INT&&(Y=s.RGB32I)),S===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),z===s.UNSIGNED_INT&&(Y=s.RGBA32UI),z===s.BYTE&&(Y=s.RGBA8I),z===s.SHORT&&(Y=s.RGBA16I),z===s.INT&&(Y=s.RGBA32I)),S===s.RGB&&(z===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),S===s.RGBA){const ve=J?io:Je.getTransfer(q);z===s.FLOAT&&(Y=s.RGBA32F),z===s.HALF_FLOAT&&(Y=s.RGBA16F),z===s.UNSIGNED_BYTE&&(Y=ve===st?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(R,S){let z;return R?S===null||S===xr||S===js?z=s.DEPTH24_STENCIL8:S===Fn?z=s.DEPTH32F_STENCIL8:S===qs&&(z=s.DEPTH24_STENCIL8,be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===xr||S===js?z=s.DEPTH_COMPONENT24:S===Fn?z=s.DEPTH_COMPONENT32F:S===qs&&(z=s.DEPTH_COMPONENT16),z}function T(R,S){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Zt&&R.minFilter!==Kt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function M(R){const S=R.target;S.removeEventListener("dispose",M),C(S),S.isVideoTexture&&h.delete(S)}function w(R){const S=R.target;S.removeEventListener("dispose",w),E(S)}function C(R){const S=n.get(R);if(S.__webglInit===void 0)return;const z=R.source,q=f.get(z);if(q){const J=q[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&v(R),Object.keys(q).length===0&&f.delete(z)}n.remove(R)}function v(R){const S=n.get(R);s.deleteTexture(S.__webglTexture);const z=R.source,q=f.get(z);delete q[S.__cacheKey],a.memory.textures--}function E(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let J=0;J<S.__webglFramebuffer[q].length;J++)s.deleteFramebuffer(S.__webglFramebuffer[q][J]);else s.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)s.deleteFramebuffer(S.__webglFramebuffer[q]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=R.textures;for(let q=0,J=z.length;q<J;q++){const Y=n.get(z[q]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(z[q])}n.remove(R)}let P=0;function I(){P=0}function N(){const R=P;return R>=i.maxTextures&&be("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function k(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function V(R,S){const z=n.get(R);if(R.isVideoTexture&&pt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const q=R.image;if(q===null)be("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)be("WebGLRenderer: Texture marked for update but image is incomplete");else{j(z,R,S);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+S)}function B(R,S){const z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){j(z,R,S);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+S)}function X(R,S){const z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){j(z,R,S);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+S)}function H(R,S){const z=n.get(R);if(R.version>0&&z.__version!==R.version){Q(z,R,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+S)}const $={[rs]:s.REPEAT,[qn]:s.CLAMP_TO_EDGE,[no]:s.MIRRORED_REPEAT},K={[Zt]:s.NEAREST,[td]:s.NEAREST_MIPMAP_NEAREST,[Fs]:s.NEAREST_MIPMAP_LINEAR,[Kt]:s.LINEAR,[qa]:s.LINEAR_MIPMAP_NEAREST,[_i]:s.LINEAR_MIPMAP_LINEAR},ce={[w0]:s.NEVER,[I0]:s.ALWAYS,[R0]:s.LESS,[hd]:s.LEQUAL,[C0]:s.EQUAL,[L0]:s.GEQUAL,[P0]:s.GREATER,[D0]:s.NOTEQUAL};function ge(R,S){if(S.type===Fn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Kt||S.magFilter===qa||S.magFilter===Fs||S.magFilter===_i||S.minFilter===Kt||S.minFilter===qa||S.minFilter===Fs||S.minFilter===_i)&&be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,$[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,$[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,$[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,K[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,K[S.minFilter]),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,ce[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Zt||S.minFilter!==Fs&&S.minFilter!==_i||S.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ke(R,S){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",M));const q=S.source;let J=f.get(q);J===void 0&&(J={},f.set(q,J));const Y=k(S);if(Y!==R.__cacheKey){J[Y]===void 0&&(J[Y]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[Y].usedTimes++;const ve=J[R.__cacheKey];ve!==void 0&&(J[R.__cacheKey].usedTimes--,ve.usedTimes===0&&v(S)),R.__cacheKey=Y,R.__webglTexture=J[Y].texture}return z}function ze(R,S,z){return Math.floor(Math.floor(R/z)/S)}function $e(R,S,z,q){const Y=R.updateRanges;if(Y.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,z,q,S.data);else{Y.sort((ee,ie)=>ee.start-ie.start);let ve=0;for(let ee=1;ee<Y.length;ee++){const ie=Y[ve],Re=Y[ee],Ae=ie.start+ie.count,ue=ze(Re.start,S.width,4),Pe=ze(ie.start,S.width,4);Re.start<=Ae+1&&ue===Pe&&ze(Re.start+Re.count-1,S.width,4)===ue?ie.count=Math.max(ie.count,Re.start+Re.count-ie.start):(++ve,Y[ve]=Re)}Y.length=ve+1;const oe=s.getParameter(s.UNPACK_ROW_LENGTH),Te=s.getParameter(s.UNPACK_SKIP_PIXELS),xe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let ee=0,ie=Y.length;ee<ie;ee++){const Re=Y[ee],Ae=Math.floor(Re.start/4),ue=Math.ceil(Re.count/4),Pe=Ae%S.width,L=Math.floor(Ae/S.width),le=ue,re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Pe),s.pixelStorei(s.UNPACK_SKIP_ROWS,L),t.texSubImage2D(s.TEXTURE_2D,0,Pe,L,le,re,z,q,S.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,oe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Te),s.pixelStorei(s.UNPACK_SKIP_ROWS,xe)}}function j(R,S,z){let q=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=s.TEXTURE_3D);const J=ke(R,S),Y=S.source;t.bindTexture(q,R.__webglTexture,s.TEXTURE0+z);const ve=n.get(Y);if(Y.version!==ve.__version||J===!0){t.activeTexture(s.TEXTURE0+z);const oe=Je.getPrimaries(Je.workingColorSpace),Te=S.colorSpace===Fi?null:Je.getPrimaries(S.colorSpace),xe=S.colorSpace===Fi||oe===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let ee=_(S.image,!1,i.maxTextureSize);ee=Se(S,ee);const ie=r.convert(S.format,S.colorSpace),Re=r.convert(S.type);let Ae=g(S.internalFormat,ie,Re,S.colorSpace,S.isVideoTexture);ge(q,S);let ue;const Pe=S.mipmaps,L=S.isVideoTexture!==!0,le=ve.__version===void 0||J===!0,re=Y.dataReady,se=T(S,ee);if(S.isDepthTexture)Ae=y(S.format===Zs,S.type),le&&(L?t.texStorage2D(s.TEXTURE_2D,1,Ae,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,Ae,ee.width,ee.height,0,ie,Re,null));else if(S.isDataTexture)if(Pe.length>0){L&&le&&t.texStorage2D(s.TEXTURE_2D,se,Ae,Pe[0].width,Pe[0].height);for(let te=0,Z=Pe.length;te<Z;te++)ue=Pe[te],L?re&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ue.width,ue.height,ie,Re,ue.data):t.texImage2D(s.TEXTURE_2D,te,Ae,ue.width,ue.height,0,ie,Re,ue.data);S.generateMipmaps=!1}else L?(le&&t.texStorage2D(s.TEXTURE_2D,se,Ae,ee.width,ee.height),re&&$e(S,ee,ie,Re)):t.texImage2D(s.TEXTURE_2D,0,Ae,ee.width,ee.height,0,ie,Re,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){L&&le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,se,Ae,Pe[0].width,Pe[0].height,ee.depth);for(let te=0,Z=Pe.length;te<Z;te++)if(ue=Pe[te],S.format!==Tn)if(ie!==null)if(L){if(re)if(S.layerUpdates.size>0){const pe=Bu(ue.width,ue.height,S.format,S.type);for(const Ie of S.layerUpdates){const ut=ue.data.subarray(Ie*pe/ue.data.BYTES_PER_ELEMENT,(Ie+1)*pe/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,Ie,ue.width,ue.height,1,ie,ut)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,ee.depth,ie,ue.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,Ae,ue.width,ue.height,ee.depth,0,ue.data,0,0);else be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?re&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,ee.depth,ie,Re,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,Ae,ue.width,ue.height,ee.depth,0,ie,Re,ue.data)}else{L&&le&&t.texStorage2D(s.TEXTURE_2D,se,Ae,Pe[0].width,Pe[0].height);for(let te=0,Z=Pe.length;te<Z;te++)ue=Pe[te],S.format!==Tn?ie!==null?L?re&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,ue.width,ue.height,ie,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,te,Ae,ue.width,ue.height,0,ue.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?re&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ue.width,ue.height,ie,Re,ue.data):t.texImage2D(s.TEXTURE_2D,te,Ae,ue.width,ue.height,0,ie,Re,ue.data)}else if(S.isDataArrayTexture)if(L){if(le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,se,Ae,ee.width,ee.height,ee.depth),re)if(S.layerUpdates.size>0){const te=Bu(ee.width,ee.height,S.format,S.type);for(const Z of S.layerUpdates){const pe=ee.data.subarray(Z*te/ee.data.BYTES_PER_ELEMENT,(Z+1)*te/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,ee.width,ee.height,1,ie,Re,pe)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ie,Re,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ae,ee.width,ee.height,ee.depth,0,ie,Re,ee.data);else if(S.isData3DTexture)L?(le&&t.texStorage3D(s.TEXTURE_3D,se,Ae,ee.width,ee.height,ee.depth),re&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ie,Re,ee.data)):t.texImage3D(s.TEXTURE_3D,0,Ae,ee.width,ee.height,ee.depth,0,ie,Re,ee.data);else if(S.isFramebufferTexture){if(le)if(L)t.texStorage2D(s.TEXTURE_2D,se,Ae,ee.width,ee.height);else{let te=ee.width,Z=ee.height;for(let pe=0;pe<se;pe++)t.texImage2D(s.TEXTURE_2D,pe,Ae,te,Z,0,ie,Re,null),te>>=1,Z>>=1}}else if(Pe.length>0){if(L&&le){const te=Ne(Pe[0]);t.texStorage2D(s.TEXTURE_2D,se,Ae,te.width,te.height)}for(let te=0,Z=Pe.length;te<Z;te++)ue=Pe[te],L?re&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ie,Re,ue):t.texImage2D(s.TEXTURE_2D,te,Ae,ie,Re,ue);S.generateMipmaps=!1}else if(L){if(le){const te=Ne(ee);t.texStorage2D(s.TEXTURE_2D,se,Ae,te.width,te.height)}re&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ie,Re,ee)}else t.texImage2D(s.TEXTURE_2D,0,Ae,ie,Re,ee);p(S)&&m(q),ve.__version=Y.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Q(R,S,z){if(S.image.length!==6)return;const q=ke(R,S),J=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+z);const Y=n.get(J);if(J.version!==Y.__version||q===!0){t.activeTexture(s.TEXTURE0+z);const ve=Je.getPrimaries(Je.workingColorSpace),oe=S.colorSpace===Fi?null:Je.getPrimaries(S.colorSpace),Te=S.colorSpace===Fi||ve===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const xe=S.isCompressedTexture||S.image[0].isCompressedTexture,ee=S.image[0]&&S.image[0].isDataTexture,ie=[];for(let Z=0;Z<6;Z++)!xe&&!ee?ie[Z]=_(S.image[Z],!0,i.maxCubemapSize):ie[Z]=ee?S.image[Z].image:S.image[Z],ie[Z]=Se(S,ie[Z]);const Re=ie[0],Ae=r.convert(S.format,S.colorSpace),ue=r.convert(S.type),Pe=g(S.internalFormat,Ae,ue,S.colorSpace),L=S.isVideoTexture!==!0,le=Y.__version===void 0||q===!0,re=J.dataReady;let se=T(S,Re);ge(s.TEXTURE_CUBE_MAP,S);let te;if(xe){L&&le&&t.texStorage2D(s.TEXTURE_CUBE_MAP,se,Pe,Re.width,Re.height);for(let Z=0;Z<6;Z++){te=ie[Z].mipmaps;for(let pe=0;pe<te.length;pe++){const Ie=te[pe];S.format!==Tn?Ae!==null?L?re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,0,0,Ie.width,Ie.height,Ae,Ie.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,Pe,Ie.width,Ie.height,0,Ie.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,0,0,Ie.width,Ie.height,Ae,ue,Ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,Pe,Ie.width,Ie.height,0,Ae,ue,Ie.data)}}}else{if(te=S.mipmaps,L&&le){te.length>0&&se++;const Z=Ne(ie[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,se,Pe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ee){L?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ie[Z].width,ie[Z].height,Ae,ue,ie[Z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Pe,ie[Z].width,ie[Z].height,0,Ae,ue,ie[Z].data);for(let pe=0;pe<te.length;pe++){const ut=te[pe].image[Z].image;L?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,0,0,ut.width,ut.height,Ae,ue,ut.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,Pe,ut.width,ut.height,0,Ae,ue,ut.data)}}else{L?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ae,ue,ie[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Pe,Ae,ue,ie[Z]);for(let pe=0;pe<te.length;pe++){const Ie=te[pe];L?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,0,0,Ae,ue,Ie.image[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,Pe,Ae,ue,Ie.image[Z])}}}p(S)&&m(s.TEXTURE_CUBE_MAP),Y.__version=J.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function de(R,S,z,q,J,Y){const ve=r.convert(z.format,z.colorSpace),oe=r.convert(z.type),Te=g(z.internalFormat,ve,oe,z.colorSpace),xe=n.get(S),ee=n.get(z);if(ee.__renderTarget=S,!xe.__hasExternalTextures){const ie=Math.max(1,S.width>>Y),Re=Math.max(1,S.height>>Y);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,Y,Te,ie,Re,S.depth,0,ve,oe,null):t.texImage2D(J,Y,Te,ie,Re,0,ve,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),_e(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,J,ee.__webglTexture,0,ht(S)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,J,ee.__webglTexture,Y),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(R,S,z){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer){const q=S.depthTexture,J=q&&q.isDepthTexture?q.type:null,Y=y(S.stencilBuffer,J),ve=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=ht(S);_e(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,Y,S.width,S.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,Y,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Y,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,R)}else{const q=S.textures;for(let J=0;J<q.length;J++){const Y=q[J],ve=r.convert(Y.format,Y.colorSpace),oe=r.convert(Y.type),Te=g(Y.internalFormat,ve,oe,Y.colorSpace),xe=ht(S);z&&_e(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,Te,S.width,S.height):_e(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,Te,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Te,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(S.depthTexture);q.__renderTarget=S,(!q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);const J=q.__webglTexture,Y=ht(S);if(S.depthTexture.format===Ks)_e(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(S.depthTexture.format===Zs)_e(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ye(R){const S=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=q}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const q=R.texture.mipmaps;q&&q.length>0?ye(S.__webglFramebuffer[0],R):ye(S.__webglFramebuffer,R)}else if(z){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=s.createRenderbuffer(),Ue(S.__webglDepthbuffer[q],R,!1);else{const J=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,Y)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Ue(S.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,Y)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(R,S,z){const q=n.get(R);S!==void 0&&de(q.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Ye(R)}function He(R){const S=R.texture,z=n.get(R),q=n.get(S);R.addEventListener("dispose",w);const J=R.textures,Y=R.isWebGLCubeRenderTarget===!0,ve=J.length>1;if(ve||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=S.version,a.memory.textures++),Y){z.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[oe]=[];for(let Te=0;Te<S.mipmaps.length;Te++)z.__webglFramebuffer[oe][Te]=s.createFramebuffer()}else z.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)z.__webglFramebuffer[oe]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(ve)for(let oe=0,Te=J.length;oe<Te;oe++){const xe=n.get(J[oe]);xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&_e(R)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){const Te=J[oe];z.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[oe]);const xe=r.convert(Te.format,Te.colorSpace),ee=r.convert(Te.type),ie=g(Te.internalFormat,xe,ee,Te.colorSpace,R.isXRRenderTarget===!0),Re=ht(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,ie,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,z.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Ue(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),ge(s.TEXTURE_CUBE_MAP,S);for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)de(z.__webglFramebuffer[oe][Te],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te);else de(z.__webglFramebuffer[oe],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);p(S)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let oe=0,Te=J.length;oe<Te;oe++){const xe=J[oe],ee=n.get(xe);let ie=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ie=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,ee.__webglTexture),ge(ie,xe),de(z.__webglFramebuffer,R,xe,s.COLOR_ATTACHMENT0+oe,ie,0),p(xe)&&m(ie)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,q.__webglTexture),ge(oe,S),S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)de(z.__webglFramebuffer[Te],R,S,s.COLOR_ATTACHMENT0,oe,Te);else de(z.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,oe,0);p(S)&&m(oe),t.unbindTexture()}R.depthBuffer&&Ye(R)}function ft(R){const S=R.textures;for(let z=0,q=S.length;z<q;z++){const J=S[z];if(p(J)){const Y=b(R),ve=n.get(J).__webglTexture;t.bindTexture(Y,ve),m(Y),t.unbindTexture()}}}const D=[],qe=[];function je(R){if(R.samples>0){if(_e(R)===!1){const S=R.textures,z=R.width,q=R.height;let J=s.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=n.get(R),oe=S.length>1;if(oe)for(let xe=0;xe<S.length;xe++)t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Te=R.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ve.__webglColorRenderbuffer[xe]);const ee=n.get(S[xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,z,q,0,0,z,q,J,s.NEAREST),l===!0&&(D.length=0,qe.length=0,D.push(s.COLOR_ATTACHMENT0+xe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(D.push(Y),qe.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,qe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,D))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let xe=0;xe<S.length;xe++){t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,ve.__webglColorRenderbuffer[xe]);const ee=n.get(S[xe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function ht(R){return Math.min(i.maxSamples,R.samples)}function _e(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function pt(R){const S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Se(R,S){const z=R.colorSpace,q=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Jt&&z!==Fi&&(Je.getTransfer(z)===st?(q!==Tn||J!==Jn)&&be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",z)),S}function Ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.setTexture2D=V,this.setTexture2DArray=B,this.setTexture3D=X,this.setTextureCube=H,this.rebindTextures=Ut,this.setupRenderTarget=He,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=de,this.useMultisampledRTT=_e}function Gy(s,e){function t(n,i=Fi){let r;const a=Je.getTransfer(i);if(n===Jn)return s.UNSIGNED_BYTE;if(n===jc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Kc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===rd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===sd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===nd)return s.BYTE;if(n===id)return s.SHORT;if(n===qs)return s.UNSIGNED_SHORT;if(n===qc)return s.INT;if(n===xr)return s.UNSIGNED_INT;if(n===Fn)return s.FLOAT;if(n===xs)return s.HALF_FLOAT;if(n===ad)return s.ALPHA;if(n===od)return s.RGB;if(n===Tn)return s.RGBA;if(n===Ks)return s.DEPTH_COMPONENT;if(n===Zs)return s.DEPTH_STENCIL;if(n===Zc)return s.RED;if(n===$c)return s.RED_INTEGER;if(n===Jc)return s.RG;if(n===Qc)return s.RG_INTEGER;if(n===eh)return s.RGBA_INTEGER;if(n===ja||n===Ka||n===Za||n===$a)if(a===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gl||n===Wl||n===Xl||n===Yl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ql||n===jl||n===Kl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ql||n===jl)return a===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Kl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Zl||n===$l||n===Jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===rc||n===sc||n===ac||n===oc||n===lc||n===cc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$l)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ql)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ec)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ic)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ac)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hc||n===uc||n===fc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===hc)return a===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dc||n===pc||n===mc||n===_c)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===dc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Wy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xy=`
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

}`;class Yy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ad(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ti({vertexShader:Wy,fragmentShader:Xy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rn(new bo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qy extends br{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,x=null;const _=typeof XRWebGLBinding<"u",p=new Yy,m={},b=t.getContextAttributes();let g=null,y=null;const T=[],M=[],w=new De;let C=null;const v=new Vt;v.viewport=new et;const E=new Vt;E.viewport=new et;const P=[v,E],I=new tx;let N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=T[j];return Q===void 0&&(Q=new el,T[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=T[j];return Q===void 0&&(Q=new el,T[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=T[j];return Q===void 0&&(Q=new el,T[j]=Q),Q.getHandSpace()};function V(j){const Q=M.indexOf(j.inputSource);if(Q===-1)return;const de=T[Q];de!==void 0&&(de.update(j.inputSource,j.frame,c||a),de.dispatchEvent({type:j.type,data:j.inputSource}))}function B(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",X);for(let j=0;j<T.length;j++){const Q=M[j];Q!==null&&(M[j]=null,T[j].disconnect(Q))}N=null,k=null,p.reset();for(const j in m)delete m[j];e.setRenderTarget(g),d=null,f=null,u=null,i=null,y=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",B),i.addEventListener("inputsourceschange",X),b.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ue=null,ye=null;b.depth&&(ye=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=b.stencil?Zs:Ks,Ue=b.stencil?js:xr);const Ye={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ye),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new gr(f.textureWidth,f.textureHeight,{format:Tn,type:Jn,depthTexture:new Ed(f.textureWidth,f.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const de={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new gr(d.framebufferWidth,d.framebufferHeight,{format:Tn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),$e.setContext(i),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function X(j){for(let Q=0;Q<j.removed.length;Q++){const de=j.removed[Q],Ue=M.indexOf(de);Ue>=0&&(M[Ue]=null,T[Ue].disconnect(de))}for(let Q=0;Q<j.added.length;Q++){const de=j.added[Q];let Ue=M.indexOf(de);if(Ue===-1){for(let Ye=0;Ye<T.length;Ye++)if(Ye>=M.length){M.push(de),Ue=Ye;break}else if(M[Ye]===null){M[Ye]=de,Ue=Ye;break}if(Ue===-1)break}const ye=T[Ue];ye&&ye.connect(de)}}const H=new F,$=new F;function K(j,Q,de){H.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(de.matrixWorld);const Ue=H.distanceTo($),ye=Q.projectionMatrix.elements,Ye=de.projectionMatrix.elements,Ut=ye[14]/(ye[10]-1),He=ye[14]/(ye[10]+1),ft=(ye[9]+1)/ye[5],D=(ye[9]-1)/ye[5],qe=(ye[8]-1)/ye[0],je=(Ye[8]+1)/Ye[0],ht=Ut*qe,_e=Ut*je,pt=Ue/(-qe+je),Se=pt*-qe;if(Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Se),j.translateZ(pt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ye[10]===-1)j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Ne=Ut+pt,R=He+pt,S=ht-Se,z=_e+(Ue-Se),q=ft*He/R*Ne,J=D*He/R*Ne;j.projectionMatrix.makePerspective(S,z,q,J,Ne,R),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ce(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let Q=j.near,de=j.far;p.texture!==null&&(p.depthNear>0&&(Q=p.depthNear),p.depthFar>0&&(de=p.depthFar)),I.near=E.near=v.near=Q,I.far=E.far=v.far=de,(N!==I.near||k!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),N=I.near,k=I.far),I.layers.mask=j.layers.mask|6,v.layers.mask=I.layers.mask&3,E.layers.mask=I.layers.mask&5;const Ue=j.parent,ye=I.cameras;ce(I,Ue);for(let Ye=0;Ye<ye.length;Ye++)ce(ye[Ye],Ue);ye.length===2?K(I,v,E):I.projectionMatrix.copy(v.projectionMatrix),ge(j,I,Ue)};function ge(j,Q,de){de===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(de.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ss*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(j){return m[j]};let ke=null;function ze(j,Q){if(h=Q.getViewerPose(c||a),x=Q,h!==null){const de=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Ue=!1;de.length!==I.cameras.length&&(I.cameras.length=0,Ue=!0);for(let He=0;He<de.length;He++){const ft=de[He];let D=null;if(d!==null)D=d.getViewport(ft);else{const je=u.getViewSubImage(f,ft);D=je.viewport,He===0&&(e.setRenderTargetTextures(y,je.colorTexture,je.depthStencilTexture),e.setRenderTarget(y))}let qe=P[He];qe===void 0&&(qe=new Vt,qe.layers.enable(He),qe.viewport=new et,P[He]=qe),qe.matrix.fromArray(ft.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(ft.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(D.x,D.y,D.width,D.height),He===0&&(I.matrix.copy(qe.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ue===!0&&I.cameras.push(qe)}const ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const He=u.getDepthInformation(de[0]);He&&He.isValid&&He.texture&&p.init(He,i.renderState)}if(ye&&ye.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let He=0;He<de.length;He++){const ft=de[He].camera;if(ft){let D=m[ft];D||(D=new Ad,m[ft]=D);const qe=u.getCameraImage(ft);D.sourceTexture=qe}}}}for(let de=0;de<T.length;de++){const Ue=M[de],ye=T[de];Ue!==null&&ye!==void 0&&ye.update(Ue,Q,c||a)}ke&&ke(j,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),x=null}const $e=new Ld;$e.setAnimationLoop(ze),this.setAnimationLoop=function(j){ke=j},this.dispose=function(){}}}const nr=new ei,jy=new Be;function Ky(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,gd(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,b,g,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),x(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,b,g):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===nn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===nn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=e.get(m),g=b.envMap,y=b.envMapRotation;g&&(p.envMap.value=g,nr.copy(y),nr.x*=-1,nr.y*=-1,nr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),p.envMapRotation.value.setFromMatrix4(jy.makeRotationFromEuler(nr)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,g){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=g*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===nn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const b=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Zy(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,g){const y=g.program;n.uniformBlockBinding(b,y)}function c(b,g){let y=i[b.id];y===void 0&&(x(b),y=h(b),i[b.id]=y,b.addEventListener("dispose",p));const T=g.program;n.updateUBOMapping(b,T);const M=e.render.frame;r[b.id]!==M&&(f(b),r[b.id]=M)}function h(b){const g=u();b.__bindingPointIndex=g;const y=s.createBuffer(),T=b.__size,M=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,T,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,g,y),y}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const g=i[b.id],y=b.uniforms,T=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,g);for(let M=0,w=y.length;M<w;M++){const C=Array.isArray(y[M])?y[M]:[y[M]];for(let v=0,E=C.length;v<E;v++){const P=C[v];if(d(P,M,v,T)===!0){const I=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let V=0;V<N.length;V++){const B=N[V],X=_(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,I+k,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,k),k+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(b,g,y,T){const M=b.value,w=g+"_"+y;if(T[w]===void 0)return typeof M=="number"||typeof M=="boolean"?T[w]=M:T[w]=M.clone(),!0;{const C=T[w];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return T[w]=M,!0}else if(C.equals(M)===!1)return C.copy(M),!0}return!1}function x(b){const g=b.uniforms;let y=0;const T=16;for(let w=0,C=g.length;w<C;w++){const v=Array.isArray(g[w])?g[w]:[g[w]];for(let E=0,P=v.length;E<P;E++){const I=v[E],N=Array.isArray(I.value)?I.value:[I.value];for(let k=0,V=N.length;k<V;k++){const B=N[k],X=_(B),H=y%T,$=H%X.boundary,K=H+$;y+=$,K!==0&&T-K<X.storage&&(y+=T-K),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=X.storage}}}const M=y%T;return M>0&&(y+=T-M),b.__size=y,b.__cache={},this}function _(b){const g={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(g.boundary=4,g.storage=4):b.isVector2?(g.boundary=8,g.storage=8):b.isVector3||b.isColor?(g.boundary=16,g.storage=12):b.isVector4?(g.boundary=16,g.storage=16):b.isMatrix3?(g.boundary=48,g.storage=48):b.isMatrix4?(g.boundary=64,g.storage=64):b.isTexture?be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):be("WebGLRenderer: Unsupported uniform value type.",b),g}function p(b){const g=b.target;g.removeEventListener("dispose",p);const y=a.indexOf(g.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[g.id]),delete i[g.id],delete r[g.id]}function m(){for(const b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}const $y=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let hi=null;function Jy(){return hi===null&&(hi=new sh($y,32,32,Jc,xs),hi.minFilter=Kt,hi.magFilter=Kt,hi.wrapS=qn,hi.wrapT=qn,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}class Od{constructor(e={}){const{canvas:t=N0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const x=new Set([eh,Qc,$c]),_=new Set([Jn,xr,qs,js,jc,Kc]),p=new Uint32Array(4),m=new Int32Array(4);let b=null,g=null;const y=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let w=!1;this._outputColorSpace=Ft;let C=0,v=0,E=null,P=-1,I=null;const N=new et,k=new et;let V=null;const B=new Le(0);let X=0,H=t.width,$=t.height,K=1,ce=null,ge=null;const ke=new et(0,0,H,$),ze=new et(0,0,H,$);let $e=!1;const j=new oh;let Q=!1,de=!1;const Ue=new Be,ye=new F,Ye=new et,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function ft(){return E===null?K:1}let D=n;function qe(A,U){return t.getContext(A,U)}try{const A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yc}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",pe,!1),D===null){const U="webgl2";if(D=qe(U,A),D===null)throw qe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw A("WebGLRenderer: "+A.message),A}let je,ht,_e,pt,Se,Ne,R,S,z,q,J,Y,ve,oe,Te,xe,ee,ie,Re,Ae,ue,Pe,L,le;function re(){je=new ob(D),je.init(),Pe=new Gy(D,je),ht=new Jv(D,je,e,Pe),_e=new Vy(D,je),ht.reversedDepthBuffer&&f&&_e.buffers.depth.setReversed(!0),pt=new hb(D),Se=new Ry,Ne=new Hy(D,je,_e,Se,ht,Pe,pt),R=new eb(M),S=new ab(M),z=new px(D),L=new Zv(D,z),q=new lb(D,z,pt,L),J=new fb(D,q,z,pt),Re=new ub(D,ht,Ne),xe=new Qv(Se),Y=new wy(M,R,S,je,ht,L,xe),ve=new Ky(M,Se),oe=new Py,Te=new Fy(je),ie=new Kv(M,R,S,_e,J,d,l),ee=new ky(M,J,ht),le=new Zy(D,pt,ht,_e),Ae=new $v(D,je,pt),ue=new cb(D,je,pt),pt.programs=Y.programs,M.capabilities=ht,M.extensions=je,M.properties=Se,M.renderLists=oe,M.shadowMap=ee,M.state=_e,M.info=pt}re();const se=new qy(M,D);this.xr=se,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=je.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=je.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(H,$,!1))},this.getSize=function(A){return A.set(H,$)},this.setSize=function(A,U,G=!0){if(se.isPresenting){be("WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,$=U,t.width=Math.floor(A*K),t.height=Math.floor(U*K),G===!0&&(t.style.width=A+"px",t.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(H*K,$*K).floor()},this.setDrawingBufferSize=function(A,U,G){H=A,$=U,K=G,t.width=Math.floor(A*G),t.height=Math.floor(U*G),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(ke)},this.setViewport=function(A,U,G,W){A.isVector4?ke.set(A.x,A.y,A.z,A.w):ke.set(A,U,G,W),_e.viewport(N.copy(ke).multiplyScalar(K).round())},this.getScissor=function(A){return A.copy(ze)},this.setScissor=function(A,U,G,W){A.isVector4?ze.set(A.x,A.y,A.z,A.w):ze.set(A,U,G,W),_e.scissor(k.copy(ze).multiplyScalar(K).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(A){_e.setScissorTest($e=A)},this.setOpaqueSort=function(A){ce=A},this.setTransparentSort=function(A){ge=A},this.getClearColor=function(A){return A.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(A=!0,U=!0,G=!0){let W=0;if(A){let O=!1;if(E!==null){const ne=E.texture.format;O=x.has(ne)}if(O){const ne=E.texture.type,he=_.has(ne),me=ie.getClearColor(),fe=ie.getClearAlpha(),we=me.r,Ce=me.g,Me=me.b;he?(p[0]=we,p[1]=Ce,p[2]=Me,p[3]=fe,D.clearBufferuiv(D.COLOR,0,p)):(m[0]=we,m[1]=Ce,m[2]=Me,m[3]=fe,D.clearBufferiv(D.COLOR,0,m))}else W|=D.COLOR_BUFFER_BIT}U&&(W|=D.DEPTH_BUFFER_BIT),G&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ie.dispose(),oe.dispose(),Te.dispose(),Se.dispose(),R.dispose(),S.dispose(),J.dispose(),L.dispose(),le.dispose(),Y.dispose(),se.dispose(),se.removeEventListener("sessionstart",Ih),se.removeEventListener("sessionend",Nh),Ki.stop()};function te(A){A.preventDefault(),so("WebGLRenderer: Context Lost."),w=!0}function Z(){so("WebGLRenderer: Context Restored."),w=!1;const A=pt.autoReset,U=ee.enabled,G=ee.autoUpdate,W=ee.needsUpdate,O=ee.type;re(),pt.autoReset=A,ee.enabled=U,ee.autoUpdate=G,ee.needsUpdate=W,ee.type=O}function pe(A){We("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ie(A){const U=A.target;U.removeEventListener("dispose",Ie),ut(U)}function ut(A){it(A),Se.remove(A)}function it(A){const U=Se.get(A).programs;U!==void 0&&(U.forEach(function(G){Y.releaseProgram(G)}),A.isShaderMaterial&&Y.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,G,W,O,ne){U===null&&(U=Ut);const he=O.isMesh&&O.matrixWorld.determinant()<0,me=Yp(A,U,G,W,O);_e.setMaterial(W,he);let fe=G.index,we=1;if(W.wireframe===!0){if(fe=q.getWireframeAttribute(G),fe===void 0)return;we=2}const Ce=G.drawRange,Me=G.attributes.position;let Ke=Ce.start*we,rt=(Ce.start+Ce.count)*we;ne!==null&&(Ke=Math.max(Ke,ne.start*we),rt=Math.min(rt,(ne.start+ne.count)*we)),fe!==null?(Ke=Math.max(Ke,0),rt=Math.min(rt,fe.count)):Me!=null&&(Ke=Math.max(Ke,0),rt=Math.min(rt,Me.count));const bt=rt-Ke;if(bt<0||bt===1/0)return;L.setup(O,W,me,G,fe);let yt,ot=Ae;if(fe!==null&&(yt=z.get(fe),ot=ue,ot.setIndex(yt)),O.isMesh)W.wireframe===!0?(_e.setLineWidth(W.wireframeLinewidth*ft()),ot.setMode(D.LINES)):ot.setMode(D.TRIANGLES);else if(O.isLine){let Ee=W.linewidth;Ee===void 0&&(Ee=1),_e.setLineWidth(Ee*ft()),O.isLineSegments?ot.setMode(D.LINES):O.isLineLoop?ot.setMode(D.LINE_LOOP):ot.setMode(D.LINE_STRIP)}else O.isPoints?ot.setMode(D.POINTS):O.isSprite&&ot.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ea("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))ot.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ee=O._multiDrawStarts,mt=O._multiDrawCounts,Qe=O._multiDrawCount,cn=fe?z.get(fe).bytesPerElement:1,Mr=Se.get(W).currentProgram.getUniforms();for(let hn=0;hn<Qe;hn++)Mr.setValue(D,"_gl_DrawID",hn),ot.render(Ee[hn]/cn,mt[hn])}else if(O.isInstancedMesh)ot.renderInstances(Ke,bt,O.count);else if(G.isInstancedBufferGeometry){const Ee=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,mt=Math.min(G.instanceCount,Ee);ot.renderInstances(Ke,bt,mt)}else ot.render(Ke,bt)};function zn(A,U,G){A.transparent===!0&&A.side===Xn&&A.forceSinglePass===!1?(A.side=nn,A.needsUpdate=!0,_a(A,U,G),A.side=Si,A.needsUpdate=!0,_a(A,U,G),A.side=Xn):_a(A,U,G)}this.compile=function(A,U,G=null){G===null&&(G=A),g=Te.get(G),g.init(U),T.push(g),G.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),A!==G&&A.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),g.setupLights();const W=new Set;return A.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ne=O.material;if(ne)if(Array.isArray(ne))for(let he=0;he<ne.length;he++){const me=ne[he];zn(me,G,O),W.add(me)}else zn(ne,G,O),W.add(ne)}),g=T.pop(),W},this.compileAsync=function(A,U,G=null){const W=this.compile(A,U,G);return new Promise(O=>{function ne(){if(W.forEach(function(he){Se.get(he).currentProgram.isReady()&&W.delete(he)}),W.size===0){O(A);return}setTimeout(ne,10)}je.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Cn=null;function Xp(A){Cn&&Cn(A)}function Ih(){Ki.stop()}function Nh(){Ki.start()}const Ki=new Ld;Ki.setAnimationLoop(Xp),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(A){Cn=A,se.setAnimationLoop(A),A===null?Ki.stop():Ki.start()},se.addEventListener("sessionstart",Ih),se.addEventListener("sessionend",Nh),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(U),U=se.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,U,E),g=Te.get(A,T.length),g.init(U),T.push(g),Ue.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(Ue,jn,U.reversedDepth),de=this.localClippingEnabled,Q=xe.init(this.clippingPlanes,de),b=oe.get(A,y.length),b.init(),y.push(b),se.enabled===!0&&se.isPresenting===!0){const ne=M.xr.getDepthSensingMesh();ne!==null&&wo(ne,U,-1/0,M.sortObjects)}wo(A,U,0,M.sortObjects),b.finish(),M.sortObjects===!0&&b.sort(ce,ge),He=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,He&&ie.addToRenderList(b,A),this.info.render.frame++,Q===!0&&xe.beginShadows();const G=g.state.shadowsArray;ee.render(G,A,U),Q===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=b.opaque,O=b.transmissive;if(g.setupLights(),U.isArrayCamera){const ne=U.cameras;if(O.length>0)for(let he=0,me=ne.length;he<me;he++){const fe=ne[he];Fh(W,O,A,fe)}He&&ie.render(A);for(let he=0,me=ne.length;he<me;he++){const fe=ne[he];Uh(b,A,fe,fe.viewport)}}else O.length>0&&Fh(W,O,A,U),He&&ie.render(A),Uh(b,A,U);E!==null&&v===0&&(Ne.updateMultisampleRenderTarget(E),Ne.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(M,A,U),L.resetDefaultState(),P=-1,I=null,T.pop(),T.length>0?(g=T[T.length-1],Q===!0&&xe.setGlobalState(M.clippingPlanes,g.state.camera)):g=null,y.pop(),y.length>0?b=y[y.length-1]:b=null};function wo(A,U,G,W){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){W&&Ye.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ue);const he=J.update(A),me=A.material;me.visible&&b.push(A,he,me,G,Ye.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){const he=J.update(A),me=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ye.copy(A.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ye.copy(he.boundingSphere.center)),Ye.applyMatrix4(A.matrixWorld).applyMatrix4(Ue)),Array.isArray(me)){const fe=he.groups;for(let we=0,Ce=fe.length;we<Ce;we++){const Me=fe[we],Ke=me[Me.materialIndex];Ke&&Ke.visible&&b.push(A,he,Ke,G,Ye.z,Me)}}else me.visible&&b.push(A,he,me,G,Ye.z,null)}}const ne=A.children;for(let he=0,me=ne.length;he<me;he++)wo(ne[he],U,G,W)}function Uh(A,U,G,W){const{opaque:O,transmissive:ne,transparent:he}=A;g.setupLightsView(G),Q===!0&&xe.setGlobalState(M.clippingPlanes,G),W&&_e.viewport(N.copy(W)),O.length>0&&ma(O,U,G),ne.length>0&&ma(ne,U,G),he.length>0&&ma(he,U,G),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Fh(A,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[W.id]===void 0&&(g.state.transmissionRenderTarget[W.id]=new gr(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?xs:Jn,minFilter:_i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ne=g.state.transmissionRenderTarget[W.id],he=W.viewport||N;ne.setSize(he.z*M.transmissionResolutionScale,he.w*M.transmissionResolutionScale);const me=M.getRenderTarget(),fe=M.getActiveCubeFace(),we=M.getActiveMipmapLevel();M.setRenderTarget(ne),M.getClearColor(B),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),He&&ie.render(G);const Ce=M.toneMapping;M.toneMapping=Vi;const Me=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),g.setupLightsView(W),Q===!0&&xe.setGlobalState(M.clippingPlanes,W),ma(A,G,W),Ne.updateMultisampleRenderTarget(ne),Ne.updateRenderTargetMipmap(ne),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let rt=0,bt=U.length;rt<bt;rt++){const yt=U[rt],{object:ot,geometry:Ee,material:mt,group:Qe}=yt;if(mt.side===Xn&&ot.layers.test(W.layers)){const cn=mt.side;mt.side=nn,mt.needsUpdate=!0,Oh(ot,G,W,Ee,mt,Qe),mt.side=cn,mt.needsUpdate=!0,Ke=!0}}Ke===!0&&(Ne.updateMultisampleRenderTarget(ne),Ne.updateRenderTargetMipmap(ne))}M.setRenderTarget(me,fe,we),M.setClearColor(B,X),Me!==void 0&&(W.viewport=Me),M.toneMapping=Ce}function ma(A,U,G){const W=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ne=A.length;O<ne;O++){const he=A[O],{object:me,geometry:fe,group:we}=he;let Ce=he.material;Ce.allowOverride===!0&&W!==null&&(Ce=W),me.layers.test(G.layers)&&Oh(me,U,G,fe,Ce,we)}}function Oh(A,U,G,W,O,ne){A.onBeforeRender(M,U,G,W,O,ne),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(M,U,G,W,A,ne),O.transparent===!0&&O.side===Xn&&O.forceSinglePass===!1?(O.side=nn,O.needsUpdate=!0,M.renderBufferDirect(G,U,W,O,A,ne),O.side=Si,O.needsUpdate=!0,M.renderBufferDirect(G,U,W,O,A,ne),O.side=Xn):M.renderBufferDirect(G,U,W,O,A,ne),A.onAfterRender(M,U,G,W,O,ne)}function _a(A,U,G){U.isScene!==!0&&(U=Ut);const W=Se.get(A),O=g.state.lights,ne=g.state.shadowsArray,he=O.state.version,me=Y.getParameters(A,O.state,ne,U,G),fe=Y.getProgramCacheKey(me);let we=W.programs;W.environment=A.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(A.isMeshStandardMaterial?S:R).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,we===void 0&&(A.addEventListener("dispose",Ie),we=new Map,W.programs=we);let Ce=we.get(fe);if(Ce!==void 0){if(W.currentProgram===Ce&&W.lightsStateVersion===he)return kh(A,me),Ce}else me.uniforms=Y.getUniforms(A),A.onBeforeCompile(me,M),Ce=Y.acquireProgram(me,fe),we.set(fe,Ce),W.uniforms=me.uniforms;const Me=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Me.clippingPlanes=xe.uniform),kh(A,me),W.needsLights=jp(A),W.lightsStateVersion=he,W.needsLights&&(Me.ambientLightColor.value=O.state.ambient,Me.lightProbe.value=O.state.probe,Me.directionalLights.value=O.state.directional,Me.directionalLightShadows.value=O.state.directionalShadow,Me.spotLights.value=O.state.spot,Me.spotLightShadows.value=O.state.spotShadow,Me.rectAreaLights.value=O.state.rectArea,Me.ltc_1.value=O.state.rectAreaLTC1,Me.ltc_2.value=O.state.rectAreaLTC2,Me.pointLights.value=O.state.point,Me.pointLightShadows.value=O.state.pointShadow,Me.hemisphereLights.value=O.state.hemi,Me.directionalShadowMap.value=O.state.directionalShadowMap,Me.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Me.spotShadowMap.value=O.state.spotShadowMap,Me.spotLightMatrix.value=O.state.spotLightMatrix,Me.spotLightMap.value=O.state.spotLightMap,Me.pointShadowMap.value=O.state.pointShadowMap,Me.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Ce,W.uniformsList=null,Ce}function Bh(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=Ja.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function kh(A,U){const G=Se.get(A);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Yp(A,U,G,W,O){U.isScene!==!0&&(U=Ut),Ne.resetTextureUnits();const ne=U.fog,he=W.isMeshStandardMaterial?U.environment:null,me=E===null?M.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Jt,fe=(W.isMeshStandardMaterial?S:R).get(W.envMap||he),we=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ce=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Me=!!G.morphAttributes.position,Ke=!!G.morphAttributes.normal,rt=!!G.morphAttributes.color;let bt=Vi;W.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(bt=M.toneMapping);const yt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ot=yt!==void 0?yt.length:0,Ee=Se.get(W),mt=g.state.lights;if(Q===!0&&(de===!0||A!==I)){const Wt=A===I&&W.id===P;xe.setState(W,A,Wt)}let Qe=!1;W.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==mt.state.version||Ee.outputColorSpace!==me||O.isBatchedMesh&&Ee.batching===!1||!O.isBatchedMesh&&Ee.batching===!0||O.isBatchedMesh&&Ee.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ee.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ee.instancing===!1||!O.isInstancedMesh&&Ee.instancing===!0||O.isSkinnedMesh&&Ee.skinning===!1||!O.isSkinnedMesh&&Ee.skinning===!0||O.isInstancedMesh&&Ee.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ee.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ee.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ee.instancingMorph===!1&&O.morphTexture!==null||Ee.envMap!==fe||W.fog===!0&&Ee.fog!==ne||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==xe.numPlanes||Ee.numIntersection!==xe.numIntersection)||Ee.vertexAlphas!==we||Ee.vertexTangents!==Ce||Ee.morphTargets!==Me||Ee.morphNormals!==Ke||Ee.morphColors!==rt||Ee.toneMapping!==bt||Ee.morphTargetsCount!==ot)&&(Qe=!0):(Qe=!0,Ee.__version=W.version);let cn=Ee.currentProgram;Qe===!0&&(cn=_a(W,U,O));let Mr=!1,hn=!1,Ms=!1;const _t=cn.getUniforms(),Qt=Ee.uniforms;if(_e.useProgram(cn.program)&&(Mr=!0,hn=!0,Ms=!0),W.id!==P&&(P=W.id,hn=!0),Mr||I!==A){_e.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),_t.setValue(D,"projectionMatrix",A.projectionMatrix),_t.setValue(D,"viewMatrix",A.matrixWorldInverse);const en=_t.map.cameraPosition;en!==void 0&&en.setValue(D,ye.setFromMatrixPosition(A.matrixWorld)),ht.logarithmicDepthBuffer&&_t.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&_t.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),I!==A&&(I=A,hn=!0,Ms=!0)}if(O.isSkinnedMesh){_t.setOptional(D,O,"bindMatrix"),_t.setOptional(D,O,"bindMatrixInverse");const Wt=O.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),_t.setValue(D,"boneTexture",Wt.boneTexture,Ne))}O.isBatchedMesh&&(_t.setOptional(D,O,"batchingTexture"),_t.setValue(D,"batchingTexture",O._matricesTexture,Ne),_t.setOptional(D,O,"batchingIdTexture"),_t.setValue(D,"batchingIdTexture",O._indirectTexture,Ne),_t.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&_t.setValue(D,"batchingColorTexture",O._colorsTexture,Ne));const bn=G.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&Re.update(O,G,cn),(hn||Ee.receiveShadow!==O.receiveShadow)&&(Ee.receiveShadow=O.receiveShadow,_t.setValue(D,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Qt.envMap.value=fe,Qt.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(Qt.envMapIntensity.value=U.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=Jy()),hn&&(_t.setValue(D,"toneMappingExposure",M.toneMappingExposure),Ee.needsLights&&qp(Qt,Ms),ne&&W.fog===!0&&ve.refreshFogUniforms(Qt,ne),ve.refreshMaterialUniforms(Qt,W,K,$,g.state.transmissionRenderTarget[A.id]),Ja.upload(D,Bh(Ee),Qt,Ne)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ja.upload(D,Bh(Ee),Qt,Ne),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&_t.setValue(D,"center",O.center),_t.setValue(D,"modelViewMatrix",O.modelViewMatrix),_t.setValue(D,"normalMatrix",O.normalMatrix),_t.setValue(D,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Wt=W.uniformsGroups;for(let en=0,Ro=Wt.length;en<Ro;en++){const Zi=Wt[en];le.update(Zi,cn),le.bind(Zi,cn)}}return cn}function qp(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function jp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,U,G){const W=Se.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Se.get(A.texture).__webglTexture=U,Se.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,U){const G=Se.get(A);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0};const Kp=D.createFramebuffer();this.setRenderTarget=function(A,U=0,G=0){E=A,C=U,v=G;let W=!0,O=null,ne=!1,he=!1;if(A){const fe=Se.get(A);if(fe.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(fe.__webglFramebuffer===void 0)Ne.setupRenderTarget(A);else if(fe.__hasExternalTextures)Ne.rebindTextures(A,Se.get(A.texture).__webglTexture,Se.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Me=A.depthTexture;if(fe.__boundDepthTexture!==Me){if(Me!==null&&Se.has(Me)&&(A.width!==Me.image.width||A.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(A)}}const we=A.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(he=!0);const Ce=Se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ce[U])?O=Ce[U][G]:O=Ce[U],ne=!0):A.samples>0&&Ne.useMultisampledRTT(A)===!1?O=Se.get(A).__webglMultisampledFramebuffer:Array.isArray(Ce)?O=Ce[G]:O=Ce,N.copy(A.viewport),k.copy(A.scissor),V=A.scissorTest}else N.copy(ke).multiplyScalar(K).floor(),k.copy(ze).multiplyScalar(K).floor(),V=$e;if(G!==0&&(O=Kp),_e.bindFramebuffer(D.FRAMEBUFFER,O)&&W&&_e.drawBuffers(A,O),_e.viewport(N),_e.scissor(k),_e.setScissorTest(V),ne){const fe=Se.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,fe.__webglTexture,G)}else if(he){const fe=U;for(let we=0;we<A.textures.length;we++){const Ce=Se.get(A.textures[we]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+we,Ce.__webglTexture,G,fe)}}else if(A!==null&&G!==0){const fe=Se.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,fe.__webglTexture,G)}P=-1},this.readRenderTargetPixels=function(A,U,G,W,O,ne,he,me=0){if(!(A&&A.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&he!==void 0&&(fe=fe[he]),fe){_e.bindFramebuffer(D.FRAMEBUFFER,fe);try{const we=A.textures[me],Ce=we.format,Me=we.type;if(!ht.textureFormatReadable(Ce)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Me)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-W&&G>=0&&G<=A.height-O&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),D.readPixels(U,G,W,O,Pe.convert(Ce),Pe.convert(Me),ne))}finally{const we=E!==null?Se.get(E).__webglFramebuffer:null;_e.bindFramebuffer(D.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(A,U,G,W,O,ne,he,me=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&he!==void 0&&(fe=fe[he]),fe)if(U>=0&&U<=A.width-W&&G>=0&&G<=A.height-O){_e.bindFramebuffer(D.FRAMEBUFFER,fe);const we=A.textures[me],Ce=we.format,Me=we.type;if(!ht.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ke),D.bufferData(D.PIXEL_PACK_BUFFER,ne.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),D.readPixels(U,G,W,O,Pe.convert(Ce),Pe.convert(Me),0);const rt=E!==null?Se.get(E).__webglFramebuffer:null;_e.bindFramebuffer(D.FRAMEBUFFER,rt);const bt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await U0(D,bt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ke),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ne),D.deleteBuffer(Ke),D.deleteSync(bt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,U=null,G=0){const W=Math.pow(2,-G),O=Math.floor(A.image.width*W),ne=Math.floor(A.image.height*W),he=U!==null?U.x:0,me=U!==null?U.y:0;Ne.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,he,me,O,ne),_e.unbindTexture()};const Zp=D.createFramebuffer(),$p=D.createFramebuffer();this.copyTextureToTexture=function(A,U,G=null,W=null,O=0,ne=null){ne===null&&(O!==0?(ea("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=O,O=0):ne=0);let he,me,fe,we,Ce,Me,Ke,rt,bt;const yt=A.isCompressedTexture?A.mipmaps[ne]:A.image;if(G!==null)he=G.max.x-G.min.x,me=G.max.y-G.min.y,fe=G.isBox3?G.max.z-G.min.z:1,we=G.min.x,Ce=G.min.y,Me=G.isBox3?G.min.z:0;else{const bn=Math.pow(2,-O);he=Math.floor(yt.width*bn),me=Math.floor(yt.height*bn),A.isDataArrayTexture?fe=yt.depth:A.isData3DTexture?fe=Math.floor(yt.depth*bn):fe=1,we=0,Ce=0,Me=0}W!==null?(Ke=W.x,rt=W.y,bt=W.z):(Ke=0,rt=0,bt=0);const ot=Pe.convert(U.format),Ee=Pe.convert(U.type);let mt;U.isData3DTexture?(Ne.setTexture3D(U,0),mt=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ne.setTexture2DArray(U,0),mt=D.TEXTURE_2D_ARRAY):(Ne.setTexture2D(U,0),mt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Qe=D.getParameter(D.UNPACK_ROW_LENGTH),cn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Mr=D.getParameter(D.UNPACK_SKIP_PIXELS),hn=D.getParameter(D.UNPACK_SKIP_ROWS),Ms=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,yt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,yt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,we),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ce),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Me);const _t=A.isDataArrayTexture||A.isData3DTexture,Qt=U.isDataArrayTexture||U.isData3DTexture;if(A.isDepthTexture){const bn=Se.get(A),Wt=Se.get(U),en=Se.get(bn.__renderTarget),Ro=Se.get(Wt.__renderTarget);_e.bindFramebuffer(D.READ_FRAMEBUFFER,en.__webglFramebuffer),_e.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ro.__webglFramebuffer);for(let Zi=0;Zi<fe;Zi++)_t&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(A).__webglTexture,O,Me+Zi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(U).__webglTexture,ne,bt+Zi)),D.blitFramebuffer(we,Ce,he,me,Ke,rt,he,me,D.DEPTH_BUFFER_BIT,D.NEAREST);_e.bindFramebuffer(D.READ_FRAMEBUFFER,null),_e.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||A.isRenderTargetTexture||Se.has(A)){const bn=Se.get(A),Wt=Se.get(U);_e.bindFramebuffer(D.READ_FRAMEBUFFER,Zp),_e.bindFramebuffer(D.DRAW_FRAMEBUFFER,$p);for(let en=0;en<fe;en++)_t?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bn.__webglTexture,O,Me+en):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,bn.__webglTexture,O),Qt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Wt.__webglTexture,ne,bt+en):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Wt.__webglTexture,ne),O!==0?D.blitFramebuffer(we,Ce,he,me,Ke,rt,he,me,D.COLOR_BUFFER_BIT,D.NEAREST):Qt?D.copyTexSubImage3D(mt,ne,Ke,rt,bt+en,we,Ce,he,me):D.copyTexSubImage2D(mt,ne,Ke,rt,we,Ce,he,me);_e.bindFramebuffer(D.READ_FRAMEBUFFER,null),_e.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Qt?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(mt,ne,Ke,rt,bt,he,me,fe,ot,Ee,yt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(mt,ne,Ke,rt,bt,he,me,fe,ot,yt.data):D.texSubImage3D(mt,ne,Ke,rt,bt,he,me,fe,ot,Ee,yt):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ne,Ke,rt,he,me,ot,Ee,yt.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ne,Ke,rt,yt.width,yt.height,ot,yt.data):D.texSubImage2D(D.TEXTURE_2D,ne,Ke,rt,he,me,ot,Ee,yt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Qe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,cn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Mr),D.pixelStorei(D.UNPACK_SKIP_ROWS,hn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ms),ne===0&&U.generateMipmaps&&D.generateMipmap(mt),_e.unbindTexture()},this.initRenderTarget=function(A){Se.get(A).__webglFramebuffer===void 0&&Ne.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ne.setTextureCube(A,0):A.isData3DTexture?Ne.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ne.setTexture2DArray(A,0):Ne.setTexture2D(A,0),_e.unbindTexture()},this.resetState=function(){C=0,v=0,E=null,_e.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const cf={type:"change"},ph={type:"start"},Bd={type:"end"},Xa=new ua,hf=new Ui,Qy=Math.cos(70*fd.DEG2RAD),Ct=new F,tn=2*Math.PI,at={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dl=1e-6;class eM extends fx{constructor(e,t=null){super(e,t),this.state=at.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qr.ROTATE,MIDDLE:qr.DOLLY,RIGHT:qr.PAN},this.touches={ONE:Hr.ROTATE,TWO:Hr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Qn,this._lastTargetPosition=new F,this._quat=new Qn().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ou,this._sphericalDelta=new Ou,this._scale=1,this._panOffset=new F,this._rotateStart=new De,this._rotateEnd=new De,this._rotateDelta=new De,this._panStart=new De,this._panEnd=new De,this._panDelta=new De,this._dollyStart=new De,this._dollyEnd=new De,this._dollyDelta=new De,this._dollyDirection=new F,this._mouse=new De,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nM.bind(this),this._onPointerDown=tM.bind(this),this._onPointerUp=iM.bind(this),this._onContextMenu=hM.bind(this),this._onMouseWheel=aM.bind(this),this._onKeyDown=oM.bind(this),this._onTouchStart=lM.bind(this),this._onTouchMove=cM.bind(this),this._onMouseDown=rM.bind(this),this._onMouseMove=sM.bind(this),this._interceptControlDown=uM.bind(this),this._interceptControlUp=fM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cf),this.update(),this.state=at.NONE}update(e=null){const t=this.object.position;Ct.copy(t).sub(this.target),Ct.applyQuaternion(this._quat),this._spherical.setFromVector3(Ct),this.autoRotate&&this.state===at.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=tn:n>Math.PI&&(n-=tn),i<-Math.PI?i+=tn:i>Math.PI&&(i-=tn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ct.setFromSpherical(this._spherical),Ct.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ct.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Xa.origin.copy(this.object.position),Xa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xa.direction))<Qy?this.object.lookAt(this.target):(hf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xa.intersectPlane(hf,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>dl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dl||this._lastTargetPosition.distanceToSquared(this.target)>dl?(this.dispatchEvent(cf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?tn/60*this.autoRotateSpeed*e:tn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ct.setFromMatrixColumn(t,0),Ct.multiplyScalar(-e),this._panOffset.add(Ct)}_panUp(e,t){this.screenSpacePanning===!0?Ct.setFromMatrixColumn(t,1):(Ct.setFromMatrixColumn(t,0),Ct.crossVectors(this.object.up,Ct)),Ct.multiplyScalar(e),this._panOffset.add(Ct)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ct.copy(i).sub(this.target);let r=Ct.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new De,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function tM(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function nM(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function iM(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Bd),this.state=at.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function rM(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case qr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=at.DOLLY;break;case qr.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=at.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=at.ROTATE}break;case qr.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=at.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=at.PAN}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(ph)}function sM(s){switch(this.state){case at.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case at.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case at.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function aM(s){this.enabled===!1||this.enableZoom===!1||this.state!==at.NONE||(s.preventDefault(),this.dispatchEvent(ph),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Bd))}function oM(s){this.enabled!==!1&&this._handleKeyDown(s)}function lM(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Hr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=at.TOUCH_ROTATE;break;case Hr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=at.TOUCH_PAN;break;default:this.state=at.NONE}break;case 2:switch(this.touches.TWO){case Hr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=at.TOUCH_DOLLY_PAN;break;case Hr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=at.TOUCH_DOLLY_ROTATE;break;default:this.state=at.NONE}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(ph)}function cM(s){switch(this._trackPointer(s),this.state){case at.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case at.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case at.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case at.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=at.NONE}}function hM(s){this.enabled!==!1&&s.preventDefault()}function uM(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fM(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uf(s,e){if(e===S0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===xc||e===ld){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===xc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class kd extends bs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xM(t)}),this.register(function(t){return new gM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new CM(t)}),this.register(function(t){return new bM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new _M(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new vM(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new EM(t)}),this.register(function(t){return new pM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new DM(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Hs.extractUrlBase(e);a=Hs.resolveURL(c,this.path)}else a=Hs.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Cd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===zd){try{a[Xe.KHR_BINARY_GLTF]=new LM(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Xe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new XM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Xe.KHR_MATERIALS_UNLIT:a[u]=new mM;break;case Xe.KHR_DRACO_MESH_COMPRESSION:a[u]=new IM(r,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:a[u]=new NM;break;case Xe.KHR_MESH_QUANTIZATION:a[u]=new UM;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function dM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class pM{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Le(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Jt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ta(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Pd(h),c.distance=u;break;case"spot":c=new $_(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Vn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class mM{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return hr}extendParams(e,t,n){const i=[];e.color=new Le(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Jt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ft))}return Promise.all(i)}}class _M{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class xM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new De(o,o)}return Promise.all(r)}}class gM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class vM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class bM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Jt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ft)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class yM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class MM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(o[0],o[1],o[2],Jt),Promise.all(r)}}class SM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class TM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(o[0],o[1],o[2],Jt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ft)),Promise.all(r)}}class EM{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class AM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class wM{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class RM{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class CM{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class PM{constructor(e){this.name=Xe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class DM{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Sn.TRIANGLES&&c.mode!==Sn.TRIANGLE_STRIP&&c.mode!==Sn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(const x of u){const _=new Be,p=new F,m=new Qn,b=new F(1,1,1),g=new w_(x.geometry,x.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,y),l.SCALE&&b.fromBufferAttribute(l.SCALE,y),g.setMatrixAt(y,_.compose(p,m,b));for(const y in l)if(y==="_COLOR_0"){const T=l[y];g.instanceColor=new vc(T.array,T.itemSize,T.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&x.geometry.setAttribute(y,l[y]);vt.prototype.copy.call(g,x),this.parser.assignFinalMaterial(g),d.push(g)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const zd="glTF",Is=12,ff={JSON:1313821514,BIN:5130562};class LM{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Is),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Is,r=new DataView(e,Is);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===ff.JSON){const c=new Uint8Array(e,Is+a,o);this.content=n.decode(c)}else if(l===ff.BIN){const c=Is+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class IM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Mc[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Mc[h]||h.toLowerCase();if(a[h]!==void 0){const f=n.accessors[e.attributes[h]],d=Zr[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const x in d.attributes){const _=d.attributes[x],p=l[x];p!==void 0&&(_.normalized=p)}u(d)},o,c,Jt,f)})})}}class NM{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class UM{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}}class Vd extends da{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,x=e*c,_=x-c,p=-2*d+3*f,m=d-f,b=1-p,g=m-f+u;for(let y=0;y!==o;y++){const T=a[_+y+o],M=a[_+y+l]*h,w=a[x+y+o],C=a[x+y]*h;r[y]=b*T+g*M+p*w+m*C}return r}}const FM=new Qn;class OM extends Vd{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return FM.fromArray(r).normalize().toArray(r),r}}const Sn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Zr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},df={9728:Zt,9729:Kt,9984:td,9985:qa,9986:Fs,9987:_i},pf={33071:qn,33648:no,10497:rs},pl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Mc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ni={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},BM={CUBICSPLINE:void 0,LINEAR:Js,STEP:$s},ml={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function kM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ch({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Si})),s.DefaultMaterial}function ir(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Vn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function zM(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function VM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function HM(s){let e;const t=s.extensions&&s.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+_l(t.attributes):e=s.indices+":"+_l(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+_l(s.targets[n]);return e}function _l(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Sc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function GM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const WM=new Be;class XM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new dM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new K_(this.options.manager):this.textureLoader=new ex(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Cd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ir(r,o,i),Vn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Hs.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=pl[i.type],o=Zr[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new $t(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=pl[i.type],c=Zr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,x=i.normalized===!0;let _,p;if(d&&d!==u){const m=Math.floor(f/d),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let g=t.cache.get(b);g||(_=new c(o,m*d,i.count*d/h),g=new M_(_,d/h),t.cache.add(b,g)),p=new rh(g,l,f%d/h,x)}else o===null?_=new c(i.count*l):_=new c(o,f,i.count*l),p=new $t(_,l,x);if(i.sparse!==void 0){const m=pl.SCALAR,b=Zr[i.sparse.indices.componentType],g=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,T=new b(a[1],g,i.sparse.count*m),M=new c(a[2],y,i.sparse.count*l);o!==null&&(p=new $t(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let w=0,C=T.length;w<C;w++){const v=T[w];if(p.setX(v,M[w*l]),l>=2&&p.setY(v,M[w*l+1]),l>=3&&p.setZ(v,M[w*l+2]),l>=4&&p.setW(v,M[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=x}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return h.magFilter=df[f.magFilter]||Kt,h.minFilter=df[f.minFilter]||_i,h.wrapS=pf[f.wrapS]||rs,h.wrapT=pf[f.wrapT]||rs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Zt&&h.minFilter!==Kt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let x=f;t.isImageBitmapLoader===!0&&(x=function(_){const p=new It(_);p.needsUpdate=!0,f(p)}),t.load(Hs.resolveURL(u,r.path),x,void 0,d)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Vn(u,a),u.userData.mimeType=a.mimeType||GM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Xe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Td,Zn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Sd,Zn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ch}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Xe.KHR_MATERIALS_UNLIT]){const u=i[Xe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Le(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Jt),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Ft)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Xn);const h=r.alphaMode||ml.OPAQUE;if(h===ml.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ml.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==hr&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new De(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==hr&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==hr){const u=r.emissiveFactor;o.emissive=new Le().setRGB(u[0],u[1],u[2],Jt)}return r.emissiveTexture!==void 0&&a!==hr&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ft)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Vn(u,r),t.associations.set(u,{materials:e}),r.extensions&&ir(i,u,r),u})}createUniqueName(e){const t=nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return mf(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=HM(c),u=i[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=mf(new Bn,c,t),i[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?kM(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,x=h.length;d<x;d++){const _=h[d],p=a[d];let m;const b=c[d];if(p.mode===Sn.TRIANGLES||p.mode===Sn.TRIANGLE_STRIP||p.mode===Sn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new T_(_,b):new Rn(_,b),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Sn.TRIANGLE_STRIP?m.geometry=uf(m.geometry,ld):p.mode===Sn.TRIANGLE_FAN&&(m.geometry=uf(m.geometry,xc));else if(p.mode===Sn.LINES)m=new D_(_,b);else if(p.mode===Sn.LINE_STRIP)m=new lh(_,b);else if(p.mode===Sn.LINE_LOOP)m=new L_(_,b);else if(p.mode===Sn.POINTS)m=new I_(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&VM(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Vn(m,r),p.extensions&&ir(i,m,p),t.assignFinalMaterial(m),u.push(m)}for(let d=0,x=u.length;d<x;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&ir(i,u[0],r),u[0];const f=new ur;r.extensions&&ir(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,x=u.length;d<x;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vt(fd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new uh(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Vn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const f=new Be;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ah(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],x=i.samplers[d.sampler],_=d.target,p=_.node,m=i.parameters!==void 0?i.parameters[x.input]:x.input,b=i.parameters!==void 0?i.parameters[x.output]:x.output;_.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",b)),c.push(x),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],x=u[2],_=u[3],p=u[4],m=[];for(let g=0,y=f.length;g<y;g++){const T=f[g],M=d[g],w=x[g],C=_[g],v=p[g];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const E=n._createAnimationTracks(T,M,w,C,v);if(E)for(let P=0;P<E.length;P++)m.push(E[P])}const b=new H_(r,void 0,m);return Vn(b,i),b})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,WM)});for(let d=0,x=u.length;d<x;d++)h.add(u[d]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Md:c.length>1?h=new ur:c.length===1?h=c[0]:h=new vt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Vn(h,r),r.extensions&&ir(n,h,r),r.matrix!==void 0){const u=new Be;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new ur;n.name&&(r.name=i.createUniqueName(n.name)),Vn(r,n),n.extensions&&ir(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof Zn||f instanceof It)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];Ni[r.path]===Ni.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(Ni[r.path]){case Ni.weights:c=os;break;case Ni.rotation:c=ls;break;case Ni.translation:case Ni.scale:c=cs;break;default:switch(n.itemSize){case 1:c=os;break;case 2:case 3:default:c=cs;break}break}const h=i.interpolation!==void 0?BM[i.interpolation]:Js,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const x=new c(l[f]+"."+Ni[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Sc(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ls?OM:Vd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function YM(s,e,t){const n=e.attributes,i=new wi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),o.normalized){const h=Sc(Zr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new F,l=new F;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,x=f.max;if(d!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(x[2]))),f.normalized){const _=Sc(Zr[f.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new ni;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function mf(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=Mc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Je.workingColorSpace!==Jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),Vn(s,e),YM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?zM(s,e.targets,t):s})}var qM=vn('<div class="w-full h-full relative pointer-events-none z-2 "><canvas class="absolute w-full h-full "></canvas></div>');function jM(s,e){Yi(e,!0);let t=_s(e,"position",19,()=>({x:0,y:0,z:0})),n,i,r,a=0,o=!1,l=!1,c=!1;ca(()=>{c=window.innerWidth<768;const f=new yd;f.background=null;const d=new Vt(c?85:75,1,.1,1e3);c?d.position.set(5,2.5,4):d.position.set(4,2,3),d.lookAt(0,0,0),f.add(d),f.add(new Dd(16777215,1));const x=new ta(16777215,1.5);x.position.set(5,5,5),f.add(x);const _=new ta(16777215,1);_.position.set(-5,3,-5),f.add(_);const p=new Od({canvas:n,antialias:!0,alpha:!0});p.setPixelRatio(Math.min(window.devicePixelRatio,2));const m=new eM(d,n);m.enableDamping=!0,m.dampingFactor=.05,m.enabled=!c;const b=new kd,g=c?e.settings.scale*.7:e.settings.scale;b.load(`${Gc}/assets/${e.name}`,V=>{r=V.scene,f.add(r),r.position.set(t().x,t().y,t().z),r.scale.set(g,g,g),r.traverse(B=>{if(B.isMesh){const X=B.material;X.metalness=.6,X.roughness=.7,e.settings.color&&(X.color=new Le(e.settings.color)),X.needsUpdate=!0}})},void 0,V=>{console.error("Error loading model:",V)});const y=()=>{if(!i)return;const V=i.clientWidth,B=i.clientHeight;p.setSize(V,B),d.aspect=V/B,d.updateProjectionMatrix();const X=c;c=window.innerWidth<768,X!==c&&(d.fov=c?85:75,c?d.position.set(5,2.5,4):d.position.set(4,2,3),d.updateProjectionMatrix(),m.enabled=!c)};new ResizeObserver(y).observe(i);const T=Math.PI*3,M=Math.PI*2,w=-Math.PI*1.5;let C=!1,v=M;const E=1;let P=0;const I=new nx,N=new IntersectionObserver(V=>{V.forEach(B=>{if(B.isIntersecting&&!o&&r){o=!0,l=!1,C=!0,a=T,v=M,P=0;const X=c?g:e.settings.scale;r.scale.set(X/3,X/3,X/3),r.position.set(t().x,t().y,t().z)}else!B.isIntersecting&&o&&r&&(o=!1,C=!1,l=!0,P=0)})},{threshold:c?.1:.15});jf(()=>i&&N.observe(i));function k(){requestAnimationFrame(k);const V=I.getDelta();if(r){const B=c?g:e.settings.scale;if(C){a+=w*V,a=Math.max(a,0);const X=a*V;r.rotation.y+=X,v-=Math.abs(X);const H=1-v/M,$=H*H*(3-2*H),K=B/3,ce=K+$*(B-K);if(r.scale.set(ce,ce,ce),v<=0||a<=.01){C=!1,a=0;const ge=Math.round(r.rotation.y/M)*M;r.rotation.y=ge,r.scale.set(B,B,B)}}if(l){P+=V/E,P=Math.min(P,1);const X=P*P*(3-2*P),H=B*(1-X);r.scale.set(H,H,H),r.rotation.y+=Math.PI*2*V/E;const $=c?1.5:2;r.position.y=t().y+X*$,P>=1&&(l=!1,P=0)}}m.update(),p.render(f,d)}return k(),()=>{N.disconnect(),p.dispose()}});var h=qM(),u=Et(h);Mi(u,f=>n=f,()=>n),Mt(h),Mi(h,f=>i=f,()=>i),Ot(s,h),qi()}function fi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Hd(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var _n={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},hs={duration:.5,overwrite:!1,delay:0},mh,Bt,dt,En=1e8,ct=1/En,Tc=Math.PI*2,KM=Tc/4,ZM=0,Gd=Math.sqrt,$M=Math.cos,JM=Math.sin,Nt=function(e){return typeof e=="string"},St=function(e){return typeof e=="function"},Ei=function(e){return typeof e=="number"},_h=function(e){return typeof e>"u"},ti=function(e){return typeof e=="object"},rn=function(e){return e!==!1},xh=function(){return typeof window<"u"},Ya=function(e){return St(e)||Nt(e)},Wd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Gt=Array.isArray,Ec=/(?:-?\.?\d|\.)+/gi,Xd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Gr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,xl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Yd=/[+-]=-?[.\d]+/,qd=/[^,'"\[\]\s]+/gi,QM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,xt,Hn,Ac,gh,xn={},lo={},jd,Kd=function(e){return(lo=us(e,xn))&&ln},vh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},na=function(e,t){return!t&&console.warn(e)},Zd=function(e,t){return e&&(xn[e]=t)&&lo&&(lo[e]=t)||xn},ia=function(){return 0},eS={suppressEvents:!0,isStart:!0,kill:!1},Qa={suppressEvents:!0,kill:!1},tS={suppressEvents:!0},bh={},Hi=[],wc={},$d,dn={},gl={},_f=30,eo=[],yh="",Mh=function(e){var t=e[0],n,i;if(ti(t)||St(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=eo.length;i--&&!eo[i].targetTest(t););n=eo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new yp(e[i],n)))||e.splice(i,1);return e},dr=function(e){return e._gsap||Mh(An(e))[0]._gsap},Jd=function(e,t,n){return(n=e[t])&&St(n)?e[t]():_h(n)&&e.getAttribute&&e.getAttribute(t)||n},sn=function(e,t){return(e=e.split(",")).forEach(t)||e},Tt=function(e){return Math.round(e*1e5)/1e5||0},Rt=function(e){return Math.round(e*1e7)/1e7||0},$r=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},nS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},co=function(){var e=Hi.length,t=Hi.slice(0),n,i;for(wc={},Hi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Sh=function(e){return!!(e._initted||e._startAt||e.add)},Qd=function(e,t,n,i){Hi.length&&!Bt&&co(),e.render(t,n,!!(Bt&&t<0&&Sh(e))),Hi.length&&!Bt&&co()},ep=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(qd).length<2?t:Nt(e)?e.trim():e},tp=function(e){return e},gn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},iS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},us=function(e,t){for(var n in t)e[n]=t[n];return e},xf=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ti(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},ho=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Gs=function(e){var t=e.parent||xt,n=e.keyframes?iS(Gt(e.keyframes)):gn;if(rn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},rS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},np=function(e,t,n,i,r){var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},To=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Wi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},pr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},sS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Rc=function(e,t,n,i){return e._startAt&&(Bt?e._startAt.revert(Qa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},aS=function s(e){return!e||e._ts&&s(e.parent)},gf=function(e){return e._repeat?fs(e._tTime,e=e.duration()+e._rDelay)*e:0},fs=function(e,t){var n=Math.floor(e=Rt(e/t));return e&&n===e?n-1:n},uo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Eo=function(e){return e._end=Rt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ct)||0))},Ao=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Rt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Eo(e),n._dirty||pr(n,e)),e},ip=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=uo(e.rawTime(),t),(!t._dur||pa(0,t.totalDuration(),n)-t._tTime>ct)&&t.render(n,!0)),pr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ct}},Yn=function(e,t,n,i){return t.parent&&Wi(t),t._start=Rt((Ei(n)?n:n||e!==xt?Mn(e,n,t):e._time)+t._delay),t._end=Rt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),np(e,t,"_first","_last",e._sort?"_start":0),Cc(t)||(e._recent=t),i||ip(e,t),e._ts<0&&Ao(e,e._tTime),e},rp=function(e,t){return(xn.ScrollTrigger||vh("scrollTrigger",t))&&xn.ScrollTrigger.create(t,e)},sp=function(e,t,n,i,r){if(Eh(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Bt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&$d!==pn.frame)return Hi.push(e),e._lazy=[r,i],1},oS=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Cc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},lS=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&oS(e)&&!(!e._initted&&Cc(e))||(e._ts<0||e._dp._ts<0)&&!Cc(e))?0:1,o=e._rDelay,l=0,c,h,u;if(o&&e._repeat&&(l=pa(0,e._tDur,t),h=fs(l,o),e._yoyo&&h&1&&(a=1-a),h!==fs(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Bt||i||e._zTime===ct||!t&&e._zTime){if(!e._initted&&sp(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?ct:0),n||(n=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Rc(e,t,n,!0),e._onUpdate&&!n&&mn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&mn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Wi(e,1),!n&&!Bt&&(mn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},cS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ds=function(e,t,n,i){var r=e._repeat,a=Rt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:Rt(a*(r+1)+e._rDelay*r):a,o>0&&!i&&Ao(e,e._tTime=e._tDur*o),e.parent&&Eo(e),n||pr(e.parent,e),e},vf=function(e){return e instanceof jt?pr(e):ds(e,e._dur)},hS={_start:0,endTime:ia,totalDuration:ia},Mn=function s(e,t,n){var i=e.labels,r=e._recent||hS,a=e.duration()>=En?r.endTime(!1):e._dur,o,l,c;return Nt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Gt(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ws=function(e,t,n){var i=Ei(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=rn(l.vars.inherit)&&l.parent;a.immediateRender=rn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new wt(t[0],a,t[r+1])},ji=function(e,t){return e||e===0?t(e):t},pa=function(e,t,n){return n<e?e:n>t?t:n},Ht=function(e,t){return!Nt(e)||!(t=QM.exec(e))?"":t[1]},uS=function(e,t,n){return ji(n,function(i){return pa(e,t,i)})},Pc=[].slice,ap=function(e,t){return e&&ti(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ti(e[0]))&&!e.nodeType&&e!==Hn},fS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Nt(i)&&!t||ap(i,1)?(r=n).push.apply(r,An(i)):n.push(i)})||n},An=function(e,t,n){return dt&&!t&&dt.selector?dt.selector(e):Nt(e)&&!n&&(Ac||!ps())?Pc.call((t||gh).querySelectorAll(e),0):Gt(e)?fS(e,n):ap(e)?Pc.call(e,0):e?[e]:[]},Dc=function(e){return e=An(e)[0]||na("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return An(t,n.querySelectorAll?n:n===e?na("Invalid scope")||gh.createElement("div"):e)}},op=function(e){return e.sort(function(){return .5-Math.random()})},lp=function(e){if(St(e))return e;var t=ti(e)?e:{each:e},n=mr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,u=i;return Nt(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(f,d,x){var _=(x||t).length,p=a[_],m,b,g,y,T,M,w,C,v;if(!p){if(v=t.grid==="auto"?0:(t.grid||[1,En])[1],!v){for(w=-En;w<(w=x[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(p=a[_]=[],m=l?Math.min(v,_)*h-.5:i%v,b=v===En?0:l?_*u/v-.5:i/v|0,w=0,C=En,M=0;M<_;M++)g=M%v-m,y=b-(M/v|0),p[M]=T=c?Math.abs(c==="y"?y:g):Gd(g*g+y*y),T>w&&(w=T),T<C&&(C=T);i==="random"&&op(p),p.max=w-C,p.min=C,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),p.b=_<0?r-_:r,p.u=Ht(t.amount||t.each)||0,n=n&&_<0?gp(n):n}return _=(p[f]-p.min)/p.max||0,Rt(p.b+(n?n(_):_)*p.v)+p.u}},Lc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Rt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ei(n)?0:Ht(n))}},cp=function(e,t){var n=Gt(e),i,r;return!n&&ti(e)&&(i=n=e.radius||En,e.values?(e=An(e.values),(r=!Ei(e[0]))&&(i*=i)):e=Lc(e.increment)),ji(t,n?St(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=En,h=0,u=e.length,f,d;u--;)r?(f=e[u].x-o,d=e[u].y-l,f=f*f+d*d):f=Math.abs(e[u]-o),f<c&&(c=f,h=u);return h=!i||c<=i?e[h]:a,r||h===a||Ei(a)?h:h+Ht(a)}:Lc(e))},hp=function(e,t,n,i){return ji(Gt(e)?!t:n===!0?!!(n=0):!i,function(){return Gt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},dS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},pS=function(e,t){return function(n){return e(parseFloat(n))+(t||Ht(n))}},mS=function(e,t,n){return fp(e,t,0,1,n)},up=function(e,t,n){return ji(n,function(i){return e[~~t(i)]})},_S=function s(e,t,n){var i=t-e;return Gt(e)?up(e,s(0,e.length),t):ji(n,function(r){return(i+(r-e)%i)%i+e})},xS=function s(e,t,n){var i=t-e,r=i*2;return Gt(e)?up(e,s(0,e.length-1),t):ji(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},ra=function(e){for(var t=0,n="",i,r,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(o?qd:Ec),n+=e.substr(t,i-t)+hp(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},fp=function(e,t,n,i,r){var a=t-e,o=i-n;return ji(r,function(l){return n+((l-e)/a*o||0)})},gS=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var a=Nt(e),o={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Gt(e)&&!Gt(t)){for(h=[],u=e.length,f=u-2,c=1;c<u;c++)h.push(s(e[c-1],e[c]));u--,r=function(x){x*=u;var _=Math.min(f,~~x);return h[_](x-_)},n=t}else i||(e=us(Gt(e)?[]:{},e));if(!h){for(l in t)Th.call(o,e,l,"get",t[l]);r=function(x){return Rh(x,o)||(a?e.p:e)}}}return ji(n,r)},bf=function(e,t,n){var i=e.labels,r=En,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},mn=function(e,t,n){var i=e.vars,r=i[t],a=dt,o=e._ctx,l,c,h;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Hi.length&&co(),o&&(dt=o),h=l?r.apply(c,l):r.call(c),dt=a,h},Bs=function(e){return Wi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Bt),e.progress()<1&&mn(e,"onInterrupt"),e},Wr,dp=[],pp=function(e){if(e)if(e=!e.name&&e.default||e,xh()||e.headless){var t=e.name,n=St(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:ia,render:Rh,add:Th,kill:NS,modifier:IS,rawVars:0},a={targetTest:0,get:0,getSetter:wh,aliases:{},register:0};if(ps(),e!==i){if(dn[t])return;gn(i,gn(ho(e,r),a)),us(i.prototype,us(r,ho(e,a))),dn[i.prop=t]=i,e.targetTest&&(eo.push(i),bh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Zd(t,i),e.register&&e.register(ln,i,an)}else dp.push(e)},lt=255,ks={aqua:[0,lt,lt],lime:[0,lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,lt],navy:[0,0,128],white:[lt,lt,lt],olive:[128,128,0],yellow:[lt,lt,0],orange:[lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[lt,0,0],pink:[lt,192,203],cyan:[0,lt,lt],transparent:[lt,lt,lt,0]},vl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*lt+.5|0},mp=function(e,t,n){var i=e?Ei(e)?[e>>16,e>>8&lt,e&lt]:0:ks.black,r,a,o,l,c,h,u,f,d,x;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ks[e])i=ks[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&lt,i&lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&lt,e&lt]}else if(e.substr(0,3)==="hsl"){if(i=x=e.match(Ec),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=vl(l+1/3,r,a),i[1]=vl(l,r,a),i[2]=vl(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Xd),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ec)||ks.transparent;i=i.map(Number)}return t&&!x&&(r=i[0]/lt,a=i[1]/lt,o=i[2]/lt,u=Math.max(r,a,o),f=Math.min(r,a,o),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===r?(a-o)/d+(a<o?6:0):u===a?(o-r)/d+2:(r-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},_p=function(e){var t=[],n=[],i=-1;return e.split(Gi).forEach(function(r){var a=r.match(Gr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},yf=function(e,t,n){var i="",r=(e+i).match(Gi),a=t?"hsla(":"rgba(",o=0,l,c,h,u;if(!r)return e;if(r=r.map(function(f){return(f=mp(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=_p(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Gi,"1").split(Gr),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(Gi),u=c.length-1;o<u;o++)i+=c[o]+r[o];return i+c[u]},Gi=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ks)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),vS=/hsl[a]?\(/,xp=function(e){var t=e.join(" "),n;if(Gi.lastIndex=0,Gi.test(t))return n=vS.test(t),e[1]=yf(e[1],n),e[0]=yf(e[0],n,_p(e[1])),!0},sa,pn=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,u,f,d,x=function _(p){var m=s()-i,b=p===!0,g,y,T,M;if((m>e||m<0)&&(n+=m-t),i+=m,T=i-n,g=T-a,(g>0||b)&&(M=++u.frame,f=T-u.time*1e3,u.time=T=T/1e3,a+=g+(g>=r?4:r-g),y=1),b||(l=c(_)),y)for(d=0;d<o.length;d++)o[d](T,f,M,p)};return u={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){jd&&(!Ac&&xh()&&(Hn=Ac=window,gh=Hn.document||{},xn.gsap=ln,(Hn.gsapVersions||(Hn.gsapVersions=[])).push(ln.version),Kd(lo||Hn.GreenSockGlobals||!Hn.gsap&&Hn||{}),dp.forEach(pp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(p){return setTimeout(p,a-u.time*1e3+1|0)},sa=1,x(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),sa=0,c=ia},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){r=1e3/(p||240),a=u.time*1e3+r},add:function(p,m,b){var g=m?function(y,T,M,w){p(y,T,M,w),u.remove(g)}:p;return u.remove(p),o[b?"unshift":"push"](g),ps(),g},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},u})(),ps=function(){return!sa&&pn.wake()},Ze={},bS=/^[\d.\-M][\d.\-,\s]/,yS=/["']/g,MS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(yS,"").trim():+c,i=l.substr(o+1).trim();return t},SS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},TS=function(e){var t=(e+"").split("("),n=Ze[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[MS(t[1])]:SS(e).split(",").map(ep)):Ze._CE&&bS.test(e)?Ze._CE("",e):n},gp=function(e){return function(t){return 1-e(1-t)}},vp=function s(e,t){for(var n=e._first,i;n;)n instanceof jt?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},mr=function(e,t){return e&&(St(e)?e:Ze[e]||TS(e))||t},yr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return sn(e,function(o){Ze[o]=xn[o]=r,Ze[a=o.toLowerCase()]=n;for(var l in r)Ze[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ze[o+"."+l]=r[l]}),r},bp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},bl=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/Tc*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*JM((h-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:bp(o);return r=Tc/r,l.config=function(c,h){return s(e,c,h)},l},yl=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:bp(n);return i.config=function(r){return s(e,r)},i};sn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;yr(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ze.Linear.easeNone=Ze.none=Ze.Linear.easeIn;yr("Elastic",bl("in"),bl("out"),bl());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};yr("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);yr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});yr("Circ",function(s){return-(Gd(1-s*s)-1)});yr("Sine",function(s){return s===1?1:-$M(s*KM)+1});yr("Back",yl("in"),yl("out"),yl());Ze.SteppedEase=Ze.steps=xn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-ct;return function(o){return((i*pa(0,a,o)|0)+r)*n}}};hs.ease=Ze["quad.out"];sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return yh+=s+","+s+"Params,"});var yp=function(e,t){this.id=ZM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Jd,this.set=t?t.getSetter:wh},aa=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ds(this,+t.duration,1,1),this.data=t.data,dt&&(this._ctx=dt,dt.data.push(this)),sa||pn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ds(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ps(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ao(this,n),!r._dp||r.parent||ip(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Yn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ct||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Qd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+gf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+gf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?fs(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-ct?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?uo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ct?0:this._rts,this.totalTime(pa(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Eo(this),sS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ps(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ct&&(this._tTime-=ct)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Yn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(rn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?uo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=tS);var i=Bt;return Bt=n,Sh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Bt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,vf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,vf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Mn(this,n),rn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,rn(i)),this._dur||(this._zTime=-ct),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ct:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ct,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ct)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=St(n)?n:tp,o=function(){var c=i.then;i.then=null,St(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Bs(this)},s})();gn(aa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ct,_prom:0,_ps:!1,_rts:1});var jt=(function(s){Hd(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=rn(n.sortChildren),xt&&Yn(n.parent||xt,fi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&rp(fi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return Ws(0,arguments,this),this},t.from=function(i,r,a){return Ws(1,arguments,this),this},t.fromTo=function(i,r,a,o){return Ws(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,Gs(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new wt(i,r,Mn(this,a),1),this},t.call=function(i,r,a){return Yn(this,wt.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new wt(i,a,Mn(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,Gs(a).immediateRender=rn(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},t.staggerFromTo=function(i,r,a,o,l,c,h,u){return o.startAt=a,Gs(o).immediateRender=rn(o.immediateRender),this.staggerTo(i,r,o,l,c,h,u)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Rt(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,x,_,p,m,b,g,y,T,M,w;if(this!==xt&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,y=this._start,g=this._ts,m=!g,u&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(M=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(f=Rt(h%p),h===l?(_=this._repeat,f=c):(T=Rt(h/p),_=~~T,_&&_===T&&(f=c,_--),f>c&&(f=c)),T=fs(this._tTime,p),!o&&this._tTime&&T!==_&&this._tTime-T*p-this._dur<=0&&(T=_),M&&_&1&&(f=c-f,w=1),_!==T&&!this._lock){var C=M&&T&1,v=C===(M&&_&1);if(_<T&&(C=!C),o=C?0:h%c?c:h,this._lock=1,this.render(o||(w?0:Rt(_*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&mn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;vp(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=cS(this,Rt(o),Rt(f)),b&&(h-=f-(f=b._start))),this._tTime=h,this._time=f,this._act=!g,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&!r&&!T&&(mn(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(x=d._next,(d._act||f>=d._start)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,a),f!==this._time||!this._ts&&!m){b=0,x&&(h+=this._zTime=-ct);break}}d=x}else{d=this._last;for(var E=i<0?i:f;d;){if(x=d._prev,(d._act||E<=d._end)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(E-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(E-d._start)*d._ts,r,a||Bt&&Sh(d)),f!==this._time||!this._ts&&!m){b=0,x&&(h+=this._zTime=E?-ct:ct);break}}d=x}}if(b&&!r&&(this.pause(),b.render(f>=o?0:-ct)._zTime=f>=o?1:-1,this._ts))return this._start=y,Eo(this),this.render(i,r,a);this._onUpdate&&!r&&mn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(g)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Wi(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(mn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Ei(r)||(r=Mn(this,r,i)),!(i instanceof aa)){if(Gt(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Nt(i))return this.addLabel(i,r);if(St(i))i=wt.delayedCall(0,i);else return this}return this!==i?Yn(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-En);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof wt?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return Nt(i)?this.removeLabel(i):St(i)?this.killTweensOf(i):(i.parent===this&&To(this,i),i===this._recent&&(this._recent=this._last),pr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Rt(pn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Mn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=wt.delayedCall(0,r||ia,a);return o.data="isPause",this._hasPause=1,Yn(this,o,Mn(this,i))},t.removePause=function(i){var r=this._first;for(i=Mn(this,i);r;)r._start===i&&r.data==="isPause"&&Wi(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Bi!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=An(i),l=this._first,c=Ei(r),h;l;)l instanceof wt?nS(l._targets,o)&&(c?(!Bi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=Mn(a,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,x=wt.to(a,gn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ct,onStart:function(){if(a.pause(),!d){var p=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());x._dur!==p&&ds(x,p,0,1).render(x._time,!0,!0),d=1}h&&h.apply(x,u||[])}},r));return f?x.render(0):x},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,gn({startAt:{time:Mn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),bf(this,Mn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),bf(this,Mn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ct)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return pr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),pr(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=En,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Yn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;ds(a,a===xt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(xt._ts&&(Qd(xt,uo(i,xt)),$d=pn.frame),pn.frame>=_f){_f+=_n.autoSleep||120;var r=xt._first;if((!r||!r._ts)&&_n.autoSleep&&pn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||pn.sleep()}}},e})(aa);gn(jt.prototype,{_lock:0,_hasPause:0,_forcing:0});var ES=function(e,t,n,i,r,a,o){var l=new an(this._pt,e,t,0,1,wp,null,r),c=0,h=0,u,f,d,x,_,p,m,b;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=ra(i)),a&&(b=[n,i],a(b,e,t),n=b[0],i=b[1]),f=n.match(xl)||[];u=xl.exec(i);)x=u[0],_=i.substring(c,u.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),x!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:x.charAt(1)==="="?$r(p,x)-p:parseFloat(x)-p,m:d&&d<4?Math.round:0},c=xl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Yd.test(i)||m)&&(l.e=0),this._pt=l,l},Th=function(e,t,n,i,r,a,o,l,c,h){St(i)&&(i=i(r||0,e,a));var u=e[t],f=n!=="get"?n:St(u)?c?e[t.indexOf("set")||!St(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=St(u)?c?PS:Ep:Ah,x;if(Nt(i)&&(~i.indexOf("random(")&&(i=ra(i)),i.charAt(1)==="="&&(x=$r(f,i)+(Ht(f)||0),(x||x===0)&&(i=x))),!h||f!==i||Ic)return!isNaN(f*i)&&i!==""?(x=new an(this._pt,e,t,+f||0,i-(f||0),typeof u=="boolean"?LS:Ap,0,d),c&&(x.fp=c),o&&x.modifier(o,this,e),this._pt=x):(!u&&!(t in e)&&vh(t,i),ES.call(this,e,t,f,i,d,l||_n.stringFilter,c))},AS=function(e,t,n,i,r){if(St(e)&&(e=Xs(e,r,t,n,i)),!ti(e)||e.style&&e.nodeType||Gt(e)||Wd(e))return Nt(e)?Xs(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=Xs(e[o],r,t,n,i);return a},Mp=function(e,t,n,i,r,a){var o,l,c,h;if(dn[e]&&(o=new dn[e]).init(r,o.rawVars?t[e]:AS(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new an(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==Wr))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Bi,Ic,Eh=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,x=e._dur,_=e._startAt,p=e._targets,m=e.parent,b=m&&m.data==="nested"?m.vars.targets:p,g=e._overwrite==="auto"&&!mh,y=e.timeline,T,M,w,C,v,E,P,I,N,k,V,B,X;if(y&&(!f||!r)&&(r="none"),e._ease=mr(r,hs.ease),e._yEase=u?gp(mr(u===!0?r:u,hs.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!y&&!!i.runBackwards,!y||f&&!i.stagger){if(I=p[0]?dr(p[0]).harness:0,B=I&&i[I.prop],T=ho(i,bh),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!d?_.render(-1,!0):_.revert(h&&x?Qa:eS),_._lazy=0),a){if(Wi(e._startAt=wt.set(p,gn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&rn(l),startAt:null,delay:0,onUpdate:c&&function(){return mn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Bt||!o&&!d)&&e._startAt.revert(Qa),o&&x&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&x&&!_){if(t&&(o=!1),w=gn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&rn(l),immediateRender:o,stagger:0,parent:m},T),B&&(w[I.prop]=B),Wi(e._startAt=wt.set(p,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Bt?e._startAt.revert(Qa):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,ct,ct);else if(!t)return}for(e._pt=e._ptCache=0,l=x&&rn(l)||l&&!x,M=0;M<p.length;M++){if(v=p[M],P=v._gsap||Mh(p)[M]._gsap,e._ptLookup[M]=k={},wc[P.id]&&Hi.length&&co(),V=b===p?M:b.indexOf(v),I&&(N=new I).init(v,B||T,e,V,b)!==!1&&(e._pt=C=new an(e._pt,v,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(H){k[H]=C}),N.priority&&(E=1)),!I||B)for(w in T)dn[w]&&(N=Mp(w,T,e,V,v,b))?N.priority&&(E=1):k[w]=C=Th.call(e,v,w,"get",T[w],V,b,0,i.stringFilter);e._op&&e._op[M]&&e.kill(v,e._op[M]),g&&e._pt&&(Bi=e,xt.killTweensOf(v,k,e.globalTime(t)),X=!e.parent,Bi=0),e._pt&&l&&(wc[P.id]=1)}E&&Rp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!X,f&&t<=0&&y.render(En,!0,!0)},wS=function(e,t,n,i,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(h=f[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Ic=1,e.vars[t]="+=0",Eh(e,o),Ic=0,l?na(t+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=Tt(n)+Ht(u.e)),u.b&&(u.b=h.s+Ht(u.b))},RS=function(e,t){var n=e[0]?dr(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=us({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},CS=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(Gt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},Xs=function(e,t,n,i,r){return St(e)?e.call(t,n,i,r):Nt(e)&&~e.indexOf("random(")?ra(e):e},Sp=yh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Tp={};sn(Sp+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Tp[s]=1});var wt=(function(s){Hd(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Gs(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,x=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,b=i.parent||xt,g=(Gt(n)||Wd(n)?Ei(n[0]):"length"in i)?[n]:An(n),y,T,M,w,C,v,E,P;if(o._targets=g.length?Mh(g):na("GSAP target "+n+" not found. https://gsap.com",!_n.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,x||f||Ya(c)||Ya(h)){if(i=o.vars,y=o.timeline=new jt({data:"nested",defaults:_||{},targets:b&&b.data==="nested"?b.vars.targets:g}),y.kill(),y.parent=y._dp=fi(o),y._start=0,f||Ya(c)||Ya(h)){if(w=g.length,E=f&&lp(f),ti(f))for(C in f)~Sp.indexOf(C)&&(P||(P={}),P[C]=f[C]);for(T=0;T<w;T++)M=ho(i,Tp),M.stagger=0,m&&(M.yoyoEase=m),P&&us(M,P),v=g[T],M.duration=+Xs(c,fi(o),T,v,g),M.delay=(+Xs(h,fi(o),T,v,g)||0)-o._delay,!f&&w===1&&M.delay&&(o._delay=h=M.delay,o._start+=h,M.delay=0),y.to(v,M,E?E(T,v,g):0),y._ease=Ze.none;y.duration()?c=h=0:o.timeline=0}else if(x){Gs(gn(y.vars.defaults,{ease:"none"})),y._ease=mr(x.ease||i.ease||"none");var I=0,N,k,V;if(Gt(x))x.forEach(function(B){return y.to(g,B,">")}),y.duration();else{M={};for(C in x)C==="ease"||C==="easeEach"||CS(C,x[C],M,x.easeEach);for(C in M)for(N=M[C].sort(function(B,X){return B.t-X.t}),I=0,T=0;T<N.length;T++)k=N[T],V={ease:k.e,duration:(k.t-(T?N[T-1].t:0))/100*c},V[C]=k.v,y.to(g,V,I),I+=V.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return d===!0&&!mh&&(Bi=fi(o),xt.killTweensOf(g),Bi=0),Yn(b,fi(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!x&&o._start===Rt(b._time)&&rn(u)&&aS(fi(o))&&b.data!=="nested")&&(o._tTime=-ct,o.render(Math.max(0,-h)||0)),p&&rp(fi(o),p),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ct&&!h?l:i<ct?0:i,f,d,x,_,p,m,b,g,y;if(!c)lS(this,i,r,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,g=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,a);if(f=Rt(u%_),u===l?(x=this._repeat,f=c):(p=Rt(u/_),x=~~p,x&&x===p?(f=c,x--):f>c&&(f=c)),m=this._yoyo&&x&1,m&&(y=this._yEase,f=c-f),p=fs(this._tTime,_),f===o&&!a&&this._initted&&x===p)return this._tTime=u,this;x!==p&&(g&&this._yEase&&vp(g,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(Rt(_*x),!0).invalidate()._lock=0))}if(!this._initted){if(sp(this,h?i:f,a,r,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&x!==p))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(y||this._ease)(f/c),this._from&&(this.ratio=b=1-b),!o&&u&&!r&&!p&&(mn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(b,d.d),d=d._next;g&&g.render(i<0?i:g._dur*g._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Rc(this,i,r,a),mn(this,"onUpdate")),this._repeat&&x!==p&&this.vars.onRepeat&&!r&&this.parent&&mn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Rc(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Wi(this,1),!r&&!(h&&!o)&&(u||o||m)&&(mn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o,l){sa||pn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Eh(this,c),h=this._ease(c/this._dur),wS(this,i,r,a,o,h,c,l)?this.resetTo(i,r,a,o,1):(Ao(this,0),this.parent||np(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Bs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Bt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Bi&&Bi.vars.overwrite!==!0)._first||Bs(this),this.parent&&a!==this.timeline.totalDuration()&&ds(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?An(i):o,c=this._ptLookup,h=this._pt,u,f,d,x,_,p,m;if((!r||r==="all")&&rS(o,l))return r==="all"&&(this._pt=0),Bs(this);for(u=this._op=this._op||[],r!=="all"&&(Nt(r)&&(_={},sn(r,function(b){return _[b]=1}),r=_),r=RS(o,r)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],r==="all"?(u[m]=r,x=f,d={}):(d=u[m]=u[m]||{},x=r);for(_ in x)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&To(this,p,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&Bs(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Ws(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return Ws(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return xt.killTweensOf(i,r,a)},e})(aa);gn(wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});sn("staggerTo,staggerFrom,staggerFromTo",function(s){wt[s]=function(){var e=new jt,t=Pc.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Ah=function(e,t,n){return e[t]=n},Ep=function(e,t,n){return e[t](n)},PS=function(e,t,n,i){return e[t](i.fp,n)},DS=function(e,t,n){return e.setAttribute(t,n)},wh=function(e,t){return St(e[t])?Ep:_h(e[t])&&e.setAttribute?DS:Ah},Ap=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},LS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},wp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Rh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},IS=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},NS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?To(this,t,"_pt"):t.dep||(n=1),t=i;return!n},US=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Rp=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},an=(function(){function s(t,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Ap,this.d=l||this,this.set=c||Ah,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=US,this.m=n,this.mt=r,this.tween=i},s})();sn(yh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return bh[s]=1});xn.TweenMax=xn.TweenLite=wt;xn.TimelineLite=xn.TimelineMax=jt;xt=new jt({sortChildren:!1,defaults:hs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});_n.stringFilter=xp;var _r=[],to={},FS=[],Mf=0,OS=0,Ml=function(e){return(to[e]||FS).map(function(t){return t()})},Nc=function(){var e=Date.now(),t=[];e-Mf>2&&(Ml("matchMediaInit"),_r.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=Hn.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Ml("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Mf=e,Ml("matchMedia"))},Cp=(function(){function s(t,n){this.selector=n&&Dc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=OS++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){St(n)&&(r=i,i=n,n=St);var a=this,o=function(){var c=dt,h=a.selector,u;return c&&c!==a&&c.data.push(a),r&&(a.selector=Dc(r)),dt=a,u=i.apply(a,arguments),St(u)&&a._r.push(u),dt=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===St?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=dt;dt=null,n(this),dt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof wt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof jt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof wt)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=_r.length;a--;)_r[a].id===this.id&&_r.splice(a,1)},e.revert=function(n){this.kill(n||{})},s})(),BS=(function(){function s(t){this.contexts=[],this.scope=t,dt&&dt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){ti(n)||(n={matches:n});var a=new Cp(0,r||this.scope),o=a.conditions={},l,c,h;dt&&!a.selector&&(a.selector=dt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Hn.matchMedia(n[c]),l&&(_r.indexOf(a)<0&&_r.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Nc):l.addEventListener("change",Nc)));return h&&i(a,function(u){return a.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),fo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return pp(i)})},timeline:function(e){return new jt(e)},getTweensOf:function(e,t){return xt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Nt(e)&&(e=An(e)[0]);var r=dr(e||{}).get,a=n?tp:ep;return n==="native"&&(n=""),e&&(t?a((dn[t]&&dn[t].get||r)(e,t,n,i)):function(o,l,c){return a((dn[o]&&dn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=An(e),e.length>1){var i=e.map(function(h){return ln.quickSetter(h,t,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}e=e[0]||{};var a=dn[t],o=dr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var u=new a;Wr._pt=0,u.init(e,n?h+n:h,Wr,0,[e]),u.render(1,u),Wr._pt&&Rh(1,Wr)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,r=ln.to(e,gn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return r.resetTo(t,l,c,h)};return a.tween=r,a},isTweening:function(e){return xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=mr(e.ease,hs.ease)),xf(hs,e||{})},config:function(e){return xf(_n,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!dn[o]&&!xn[o]&&na(t+" effect requires "+o+" plugin.")}),gl[t]=function(o,l,c){return n(An(o),gn(l||{},r),c)},a&&(jt.prototype[t]=function(o,l,c){return this.add(gl[t](o,ti(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ze[e]=mr(t)},parseEase:function(e,t){return arguments.length?mr(e,t):Ze},getById:function(e){return xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new jt(e),i,r;for(n.smoothChildTiming=rn(e.smoothChildTiming),xt.remove(n),n._dp=0,n._time=n._tTime=xt._time,i=xt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof wt&&i.vars.onComplete===i._targets[0]))&&Yn(n,i,i._start-i._delay),i=r;return Yn(xt,n,0),n},context:function(e,t){return e?new Cp(e,t):dt},matchMedia:function(e){return new BS(e)},matchMediaRefresh:function(){return _r.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Nc()},addEventListener:function(e,t){var n=to[e]||(to[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=to[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:_S,wrapYoyo:xS,distribute:lp,random:hp,snap:cp,normalize:mS,getUnit:Ht,clamp:uS,splitColor:mp,toArray:An,selector:Dc,mapRange:fp,pipe:dS,unitize:pS,interpolate:gS,shuffle:op},install:Kd,effects:gl,ticker:pn,updateRoot:jt.updateRoot,plugins:dn,globalTimeline:xt,core:{PropTween:an,globals:Zd,Tween:wt,Timeline:jt,Animation:aa,getCache:dr,_removeLinkedListItem:To,reverting:function(){return Bt},context:function(e){return e&&dt&&(dt.data.push(e),e._ctx=dt),dt},suppressOverwrites:function(e){return mh=e}}};sn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return fo[s]=wt[s]});pn.add(jt.updateRoot);Wr=fo.to({},{duration:0});var kS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},zS=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=kS(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},Sl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Nt(r)&&(l={},sn(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}zS(o,r)}}}},ln=fo.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Bt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Sl("roundProps",Lc),Sl("modifiers"),Sl("snap",cp))||fo;wt.version=jt.version=ln.version="3.13.0";jd=1;xh()&&ps();Ze.Power0;Ze.Power1;Ze.Power2;Ze.Power3;Ze.Power4;Ze.Linear;Ze.Quad;Ze.Cubic;Ze.Quart;Ze.Quint;Ze.Strong;Ze.Elastic;Ze.Back;Ze.SteppedEase;Ze.Bounce;Ze.Sine;Ze.Expo;Ze.Circ;var Sf,ki,Jr,Ch,fr,Tf,Ph,VS=function(){return typeof window<"u"},Ai={},ar=180/Math.PI,Qr=Math.PI/180,kr=Math.atan2,Ef=1e8,Dh=/([A-Z])/g,HS=/(left|right|width|margin|padding|x)/i,GS=/[\s,\(]\S/,Kn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Uc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},WS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},XS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},YS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Pp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Dp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},qS=function(e,t,n){return e.style[t]=n},jS=function(e,t,n){return e.style.setProperty(t,n)},KS=function(e,t,n){return e._gsap[t]=n},ZS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},$S=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},JS=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},gt="transform",on=gt+"Origin",QS=function s(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in Ai&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Kn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=pi(i,o)}):this.tfm[e]=a.x?a[e]:pi(i,e),e===on&&(this.tfm.zOrigin=a.zOrigin);else return Kn.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(gt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(on,t,"")),e=gt}(r||t)&&this.props.push(e,t,r[e])},Lp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},eT=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Dh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Ph(),(!r||!r.isStart)&&!n[gt]&&(Lp(n),i.zOrigin&&n[on]&&(n[on]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ip=function(e,t){var n={target:e,props:[],revert:eT,save:QS};return e._gsap||ln.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Np,Fc=function(e,t){var n=ki.createElementNS?ki.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ki.createElement(e);return n&&n.style?n:ki.createElement(e)},wn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Dh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,ms(t)||t,1)||""},Af="O,Moz,ms,Ms,Webkit".split(","),ms=function(e,t,n){var i=t||fr,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Af[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Af[a]:"")+e},Oc=function(){VS()&&window.document&&(Sf=window,ki=Sf.document,Jr=ki.documentElement,fr=Fc("div")||{style:{}},Fc("div"),gt=ms(gt),on=gt+"Origin",fr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Np=!!ms("perspective"),Ph=ln.core.reverting,Ch=1)},wf=function(e){var t=e.ownerSVGElement,n=Fc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Jr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Jr.removeChild(n),r},Rf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Up=function(e){var t,n;try{t=e.getBBox()}catch{t=wf(e),n=1}return t&&(t.width||t.height)||n||(t=wf(e)),t&&!t.width&&!t.x&&!t.y?{x:+Rf(e,["x","cx","x1"])||0,y:+Rf(e,["y","cy","y1"])||0,width:0,height:0}:t},Fp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Up(e))},vr=function(e,t){if(t){var n=e.style,i;t in Ai&&t!==on&&(t=gt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Dh,"-$1").toLowerCase())):n.removeAttribute(t)}},zi=function(e,t,n,i,r,a){var o=new an(e._pt,t,n,0,1,a?Dp:Pp);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},Cf={deg:1,rad:1,turn:1},tT={grid:1,flex:1},Xi=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=fr.style,l=HS.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",x,_,p,m;if(i===a||!r||Cf[i]||Cf[a])return r;if(a!=="px"&&!f&&(r=s(e,t,n,"px")),m=e.getCTM&&Fp(e),(d||a==="%")&&(Ai[t]||~t.indexOf("adius")))return x=m?e.getBBox()[l?"width":"height"]:e[h],Tt(d?r/x*u:r/100*x);if(o[l?"width":"height"]=u+(f?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ki||!_.appendChild)&&(_=ki.body),p=_._gsap,p&&d&&p.width&&l&&p.time===pn.time&&!p.uncache)return Tt(r/p.width*u);if(d&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=u+i,x=e[h],b?e.style[t]=b:vr(e,t)}else(d||a==="%")&&!tT[wn(_,"display")]&&(o.position=wn(e,"position")),_===e&&(o.position="static"),_.appendChild(fr),x=fr[h],_.removeChild(fr),o.position="absolute";return l&&d&&(p=dr(_),p.time=pn.time,p.width=_[h]),Tt(f?x*r/u:x&&r?u/x*r:0)},pi=function(e,t,n,i){var r;return Ch||Oc(),t in Kn&&t!=="transform"&&(t=Kn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ai[t]&&t!=="transform"?(r=la(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:mo(wn(e,on))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=po[t]&&po[t](e,t,n)||wn(e,t)||Jd(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Xi(e,t,r,n)+n:r},nT=function(e,t,n,i){if(!n||n==="none"){var r=ms(t,e,1),a=r&&wn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=wn(e,"borderTopColor"))}var o=new an(this._pt,e.style,t,0,1,wp),l=0,c=0,h,u,f,d,x,_,p,m,b,g,y,T;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=wn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=wn(e,t)||i,_?e.style[t]=_:vr(e,t)),h=[n,i],xp(h),n=h[0],i=h[1],f=n.match(Gr)||[],T=i.match(Gr)||[],T.length){for(;u=Gr.exec(i);)p=u[0],b=i.substring(l,u.index),x?x=(x+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(x=1),p!==(_=f[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),p.charAt(1)==="="&&(p=$r(d,p)+y),m=parseFloat(p),g=p.substr((m+"").length),l=Gr.lastIndex-g.length,g||(g=g||_n.units[t]||y,l===i.length&&(i+=g,o.e+=g)),y!==g&&(d=Xi(e,t,_,g)||0),o._pt={_next:o._pt,p:b||c===1?b:",",s:d,c:m-d,m:x&&x<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Dp:Pp;return Yd.test(i)&&(o.e=0),this._pt=o,o},Pf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},iT=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Pf[n]||n,t[1]=Pf[i]||i,t.join(" ")},rT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Ai[o]&&(l=1,o=o==="transformOrigin"?on:gt),vr(n,o);l&&(vr(n,gt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",la(n,1),a.uncache=1,Lp(i)))}},po={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new an(e._pt,t,n,0,0,rT);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},oa=[1,0,0,1,0,0],Op={},Bp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Df=function(e){var t=wn(e,gt);return Bp(t)?oa:t.substr(7).match(Xd).map(Tt)},Lh=function(e,t){var n=e._gsap||dr(e),i=e.style,r=Df(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?oa:r):(r===oa&&!e.offsetParent&&e!==Jr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Jr.appendChild(e)),r=Df(e),l?i.display=l:vr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Jr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Bc=function(e,t,n,i,r,a){var o=e._gsap,l=r||Lh(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,d=l[0],x=l[1],_=l[2],p=l[3],m=l[4],b=l[5],g=t.split(" "),y=parseFloat(g[0])||0,T=parseFloat(g[1])||0,M,w,C,v;n?l!==oa&&(w=d*p-x*_)&&(C=y*(p/w)+T*(-_/w)+(_*b-p*m)/w,v=y*(-x/w)+T*(d/w)-(d*b-x*m)/w,y=C,T=v):(M=Up(e),y=M.x+(~g[0].indexOf("%")?y/100*M.width:y),T=M.y+(~(g[1]||g[0]).indexOf("%")?T/100*M.height:T)),i||i!==!1&&o.smooth?(m=y-c,b=T-h,o.xOffset=u+(m*d+b*_)-m,o.yOffset=f+(m*x+b*p)-b):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=T,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[on]="0px 0px",a&&(zi(a,o,"xOrigin",c,y),zi(a,o,"yOrigin",h,T),zi(a,o,"xOffset",u,o.xOffset),zi(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+T)},la=function(e,t){var n=e._gsap||new yp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=wn(e,on)||"0",h,u,f,d,x,_,p,m,b,g,y,T,M,w,C,v,E,P,I,N,k,V,B,X,H,$,K,ce,ge,ke,ze,$e;return h=u=f=_=p=m=b=g=y=0,d=x=1,n.svg=!!(e.getCTM&&Fp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[gt]!=="none"?l[gt]:"")),i.scale=i.rotate=i.translate="none"),w=Lh(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Bc(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,w)),T=n.xOrigin||0,M=n.yOrigin||0,w!==oa&&(P=w[0],I=w[1],N=w[2],k=w[3],h=V=w[4],u=B=w[5],w.length===6?(d=Math.sqrt(P*P+I*I),x=Math.sqrt(k*k+N*N),_=P||I?kr(I,P)*ar:0,b=N||k?kr(N,k)*ar+_:0,b&&(x*=Math.abs(Math.cos(b*Qr))),n.svg&&(h-=T-(T*P+M*N),u-=M-(T*I+M*k))):($e=w[6],ke=w[7],K=w[8],ce=w[9],ge=w[10],ze=w[11],h=w[12],u=w[13],f=w[14],C=kr($e,ge),p=C*ar,C&&(v=Math.cos(-C),E=Math.sin(-C),X=V*v+K*E,H=B*v+ce*E,$=$e*v+ge*E,K=V*-E+K*v,ce=B*-E+ce*v,ge=$e*-E+ge*v,ze=ke*-E+ze*v,V=X,B=H,$e=$),C=kr(-N,ge),m=C*ar,C&&(v=Math.cos(-C),E=Math.sin(-C),X=P*v-K*E,H=I*v-ce*E,$=N*v-ge*E,ze=k*E+ze*v,P=X,I=H,N=$),C=kr(I,P),_=C*ar,C&&(v=Math.cos(C),E=Math.sin(C),X=P*v+I*E,H=V*v+B*E,I=I*v-P*E,B=B*v-V*E,P=X,V=H),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=Tt(Math.sqrt(P*P+I*I+N*N)),x=Tt(Math.sqrt(B*B+$e*$e)),C=kr(V,B),b=Math.abs(C)>2e-4?C*ar:0,y=ze?1/(ze<0?-ze:ze):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Bp(wn(e,gt)),X&&e.setAttribute("transform",X))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(d*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(x*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Tt(d),n.scaleY=Tt(x),n.rotation=Tt(_)+o,n.rotationX=Tt(p)+o,n.rotationY=Tt(m)+o,n.skewX=b+o,n.skewY=g+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[on]=mo(c)),n.xOffset=n.yOffset=0,n.force3D=_n.force3D,n.renderTransform=n.svg?aT:Np?kp:sT,n.uncache=0,n},mo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Tl=function(e,t,n){var i=Ht(t);return Tt(parseFloat(t)+parseFloat(Xi(e,"x",n+"px",i)))+i},sT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,kp(e,t)},rr="0deg",Ns="0px",sr=") ",kp=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,x=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,b=n.target,g=n.zOrigin,y="",T=m==="auto"&&e&&e!==1||m===!0;if(g&&(u!==rr||h!==rr)){var M=parseFloat(h)*Qr,w=Math.sin(M),C=Math.cos(M),v;M=parseFloat(u)*Qr,v=Math.cos(M),a=Tl(b,a,w*v*-g),o=Tl(b,o,-Math.sin(M)*-g),l=Tl(b,l,C*v*-g+g)}p!==Ns&&(y+="perspective("+p+sr),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(T||a!==Ns||o!==Ns||l!==Ns)&&(y+=l!==Ns||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+sr),c!==rr&&(y+="rotate("+c+sr),h!==rr&&(y+="rotateY("+h+sr),u!==rr&&(y+="rotateX("+u+sr),(f!==rr||d!==rr)&&(y+="skew("+f+", "+d+sr),(x!==1||_!==1)&&(y+="scale("+x+", "+_+sr),b.style[gt]=y||"translate(0, 0)"},aT=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,x=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,b=n.forceCSS,g=parseFloat(a),y=parseFloat(o),T,M,w,C,v;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Qr,c*=Qr,T=Math.cos(l)*u,M=Math.sin(l)*u,w=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(h*=Qr,v=Math.tan(c-h),v=Math.sqrt(1+v*v),w*=v,C*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),T*=v,M*=v)),T=Tt(T),M=Tt(M),w=Tt(w),C=Tt(C)):(T=u,C=f,M=w=0),(g&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(g=Xi(d,"x",a,"px"),y=Xi(d,"y",o,"px")),(x||_||p||m)&&(g=Tt(g+x-(x*T+_*w)+p),y=Tt(y+_-(x*M+_*C)+m)),(i||r)&&(v=d.getBBox(),g=Tt(g+i/100*v.width),y=Tt(y+r/100*v.height)),v="matrix("+T+","+M+","+w+","+C+","+g+","+y+")",d.setAttribute("transform",v),b&&(d.style[gt]=v)},oT=function(e,t,n,i,r){var a=360,o=Nt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?ar:1),c=l-i,h=i+c+"deg",u,f;return o&&(u=r.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*Ef)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*Ef)%a-~~(c/a)*a)),e._pt=f=new an(e._pt,t,n,i,c,WS),f.e=h,f.u="deg",e._props.push(n),f},Lf=function(e,t){for(var n in t)e[n]=t[n];return e},lT=function(e,t,n){var i=Lf({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,f,d,x;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[gt]=t,o=la(n,1),vr(n,gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[gt],a[gt]=t,o=la(n,1),a[gt]=c);for(l in Ai)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(d=Ht(c),x=Ht(h),u=d!==x?Xi(n,l,c,x):parseFloat(c),f=parseFloat(h),e._pt=new an(e._pt,o,l,u,f-u,Uc),e._pt.u=x||0,e._props.push(l));Lf(o,i)};sn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});po[e>1?"border"+s:s]=function(o,l,c,h,u){var f,d;if(arguments.length<4)return f=a.map(function(x){return pi(o,x,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},a.forEach(function(x,_){return d[x]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,d,u)}});var zp={name:"css",register:Oc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,h,u,f,d,x,_,p,m,b,g,y,T,M,w,C;Ch||Oc(),this.styles=this.styles||Ip(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(dn[_]&&Mp(_,t,n,i,e,r)))){if(d=typeof h,x=po[_],d==="function"&&(h=h.call(n,i,e,r),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=ra(h)),x)x(this,e,_,h,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",Gi.lastIndex=0,Gi.test(c)||(p=Ht(c),m=Ht(h)),m?p!==m&&(c=Xi(e,_,c,m)+m):p&&(h+=p),this.add(o,"setProperty",c,h,i,r,0,0,_),a.push(_),C.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],Nt(c)&&~c.indexOf("random(")&&(c=ra(c)),Ht(c+"")||c==="auto"||(c+=_n.units[_]||Ht(pi(e,_))||""),(c+"").charAt(1)==="="&&(c=pi(e,_))):c=pi(e,_),f=parseFloat(c),b=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),b&&(h=h.substr(2)),u=parseFloat(h),_ in Kn&&(_==="autoAlpha"&&(f===1&&pi(e,"visibility")==="hidden"&&u&&(f=0),C.push("visibility",0,o.visibility),zi(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Kn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),g=_ in Ai,g){if(this.styles.save(_),d==="string"&&h.substring(0,6)==="var(--"&&(h=wn(e,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),y||(T=e._gsap,T.renderTransform&&!t.parseTransform||la(e,t.parseTransform),M=t.smoothOrigin!==!1&&T.smooth,y=this._pt=new an(this._pt,o,gt,0,1,T.renderTransform,T,0,-1),y.dep=1),_==="scale")this._pt=new an(this._pt,T,"scaleY",T.scaleY,(b?$r(T.scaleY,b+u):u)-T.scaleY||0,Uc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(on,0,o[on]),h=iT(h),T.svg?Bc(e,h,0,M,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==T.zOrigin&&zi(this,T,"zOrigin",T.zOrigin,m),zi(this,o,_,mo(c),mo(h)));continue}else if(_==="svgOrigin"){Bc(e,h,1,M,0,this);continue}else if(_ in Op){oT(this,T,_,f,b?$r(f,b+h):h);continue}else if(_==="smoothOrigin"){zi(this,T,"smooth",T.smooth,h);continue}else if(_==="force3D"){T[_]=h;continue}else if(_==="transform"){lT(this,h,e);continue}}else _ in o||(_=ms(_)||_);if(g||(u||u===0)&&(f||f===0)&&!GS.test(h)&&_ in o)p=(c+"").substr((f+"").length),u||(u=0),m=Ht(h)||(_ in _n.units?_n.units[_]:p),p!==m&&(f=Xi(e,_,c,m)),this._pt=new an(this._pt,g?T:o,_,f,(b?$r(f,b+u):u)-f,!g&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?YS:Uc),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=XS);else if(_ in o)nT.call(this,e,_,c,b?b+h:h);else if(_ in e)this.add(e,_,c||e[_],b?b+h:h,i,r);else if(_!=="parseTransform"){vh(_,h);continue}g||(_ in o?C.push(_,0,o[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,c||e[_])),a.push(_)}}w&&Rp(this)},render:function(e,t){if(t.tween._time||!Ph())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:pi,aliases:Kn,getSetter:function(e,t,n){var i=Kn[t];return i&&i.indexOf(",")<0&&(t=i),t in Ai&&t!==on&&(e._gsap.x||pi(e,"x"))?n&&Tf===n?t==="scale"?ZS:KS:(Tf=n||{})&&(t==="scale"?$S:JS):e.style&&!_h(e.style[t])?qS:~t.indexOf("-")?jS:wh(e,t)},core:{_removeProperty:vr,_getMatrix:Lh}};ln.utils.checkPrefix=ms;ln.core.getStyleSaver=Ip;(function(s,e,t,n){var i=sn(s+","+e+","+t,function(r){Ai[r]=1});sn(e,function(r){_n.units[r]="deg",Op[r]=1}),Kn[i[13]]=s+","+e,sn(n,function(r){var a=r.split(":");Kn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){_n.units[s]="px"});ln.registerPlugin(zp);var Ys=ln.registerPlugin(zp)||ln;Ys.core.Tween;let Us,zr,kc,cT=()=>kc||Wp.register(window.gsap),If=typeof Intl<"u"?new Intl.Segmenter:0,_o=s=>typeof s=="string"?_o(document.querySelectorAll(s)):"length"in s?Array.from(s):[s],Nf=s=>_o(s).filter(e=>e instanceof HTMLElement),zc=[],El=function(){},hT=/\s+/g,Uf=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Ff={left:0,top:0,width:0,height:0},Of=(s,e)=>{if(e){let t=new Set(s.join("").match(e)||zc),n=s.length,i,r,a,o;if(t.size)for(;--n>-1;){r=s[n];for(a of t)if(a.startsWith(r)&&a.length>r.length){for(i=0,o=r;a.startsWith(o+=s[n+ ++i])&&o.length<a.length;);if(i&&o.length===a.length){s[n]=a,s.splice(n+1,i);break}}}}return s},Bf=s=>window.getComputedStyle(s).display==="inline"&&(s.style.display="inline-block"),Vr=(s,e,t)=>e.insertBefore(typeof s=="string"?document.createTextNode(s):s,t),Vc=(s,e,t)=>{let n=e[s+"sClass"]||"",{tag:i="div",aria:r="auto",propIndex:a=!1}=e,o=s==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=h=>{let u=document.createElement(i),f=t.length+1;return n&&(u.className=n+(l?" "+n+f:"")),a&&u.style.setProperty("--"+s,f+""),r!=="none"&&u.setAttribute("aria-hidden","true"),i!=="span"&&(u.style.position="relative",u.style.display=o),u.textContent=h,t.push(u),u};return l&&(n=n.replace("++","")),c.collection=t,c},uT=(s,e,t,n)=>{let i=Vc("line",t,n),r=window.getComputedStyle(s).textAlign||"left";return(a,o)=>{let l=i("");for(l.style.textAlign=r,s.insertBefore(l,e[a]);a<o;a++)l.appendChild(e[a]);l.normalize()}},Vp=(s,e,t,n,i,r,a,o,l,c)=>{var h;let u=Array.from(s.childNodes),f=0,{wordDelimiter:d,reduceWhiteSpace:x=!0,prepareText:_}=e,p=s.getBoundingClientRect(),m=p,b=!x&&window.getComputedStyle(s).whiteSpace.substring(0,3)==="pre",g=0,y=t.collection,T,M,w,C,v,E,P,I,N,k,V,B,X,H,$,K,ce,ge;for(typeof d=="object"?(w=d.delimiter||d,M=d.replaceWith||""):M=d===""?"":d||" ",T=M!==" ";f<u.length;f++)if(C=u[f],C.nodeType===3){for($=C.textContent||"",x?$=$.replace(hT," "):b&&($=$.replace(/\n/g,M+`
`)),_&&($=_($,s)),C.textContent=$,v=M||w?$.split(w||M):$.match(o)||zc,ce=v[v.length-1],I=T?ce.slice(-1)===" ":!ce,ce||v.pop(),m=p,P=T?v[0].charAt(0)===" ":!v[0],P&&Vr(" ",s,C),v[0]||v.shift(),Of(v,l),r&&c||(C.textContent=""),N=1;N<=v.length;N++)if(K=v[N-1],!x&&b&&K.charAt(0)===`
`&&((h=C.previousSibling)==null||h.remove(),Vr(document.createElement("br"),s,C),K=K.slice(1)),!x&&K==="")Vr(M,s,C);else if(K===" ")s.insertBefore(document.createTextNode(" "),C);else{if(T&&K.charAt(0)===" "&&Vr(" ",s,C),g&&N===1&&!P&&y.indexOf(g.parentNode)>-1?(E=y[y.length-1],E.appendChild(document.createTextNode(n?"":K))):(E=t(n?"":K),Vr(E,s,C),g&&N===1&&!P&&E.insertBefore(g,E.firstChild)),n)for(V=If?Of([...If.segment(K)].map(ke=>ke.segment),l):K.match(o)||zc,ge=0;ge<V.length;ge++)E.appendChild(V[ge]===" "?document.createTextNode(" "):n(V[ge]));if(r&&c){if($=C.textContent=$.substring(K.length+1,$.length),k=E.getBoundingClientRect(),k.top>m.top&&k.left<=m.left){for(B=s.cloneNode(),X=s.childNodes[0];X&&X!==E;)H=X,X=X.nextSibling,B.appendChild(H);s.parentNode.insertBefore(B,s),i&&Bf(B)}m=k}(N<v.length||I)&&Vr(N>=v.length?" ":T&&K.slice(-1)===" "?" "+M:M,s,C)}s.removeChild(C),g=0}else C.nodeType===1&&(a&&a.indexOf(C)>-1?(y.indexOf(C.previousSibling)>-1&&y[y.length-1].appendChild(C),g=C):(Vp(C,e,t,n,i,r,a,o,l,!0),g=0),i&&Bf(C))};const Hp=class Gp{constructor(e,t){this.isSplit=!1,cT(),this.elements=Nf(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,r=()=>{let a=n.length,o;for(;a--;){o=n[a];let l=o.element.offsetWidth;if(l!==o.width){o.width=l,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(r,200)})},El(this),this.split(t)}split(e){this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:r,onSplit:a,autoSplit:o=!1,specialChars:l,mask:c}=this.vars,h=t.indexOf("lines")>-1,u=t.indexOf("chars")>-1,f=t.indexOf("words")>-1,d=u&&!f&&!h,x=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=x?new RegExp(x.source+"|"+Uf.source,"gu"):Uf,p=!!e.ignore&&Nf(e.ignore),{orig:m,animTime:b,obs:g}=this._data,y;return(u||f||h)&&(this.elements.forEach((T,M)=>{m[M]={element:T,html:T.innerHTML,ariaL:T.getAttribute("aria-label"),ariaH:T.getAttribute("aria-hidden")},n==="auto"?T.setAttribute("aria-label",(T.textContent||"").trim()):n==="hidden"&&T.setAttribute("aria-hidden","true");let w=[],C=[],v=[],E=u?Vc("char",e,w):null,P=Vc("word",e,C),I,N,k,V;if(Vp(T,e,P,E,d,i&&(h||d),p,_,x,!1),h){let B=_o(T.childNodes),X=uT(T,B,e,v),H,$=[],K=0,ce=B.map(ke=>ke.nodeType===1?ke.getBoundingClientRect():Ff),ge=Ff;for(I=0;I<B.length;I++)H=B[I],H.nodeType===1&&(H.nodeName==="BR"?($.push(H),X(K,I+1),K=I+1,ge=ce[K]):(I&&ce[I].top>ge.top&&ce[I].left<=ge.left&&(X(K,I),K=I),ge=ce[I]));K<I&&X(K,I),$.forEach(ke=>{var ze;return(ze=ke.parentNode)==null?void 0:ze.removeChild(ke)})}if(!f){for(I=0;I<C.length;I++)if(N=C[I],u||!N.nextSibling||N.nextSibling.nodeType!==3)if(r&&!h){for(k=document.createElement("span"),k.style.whiteSpace="nowrap";N.firstChild;)k.appendChild(N.firstChild);N.replaceWith(k)}else N.replaceWith(...N.childNodes);else V=N.nextSibling,V&&V.nodeType===3&&(V.textContent=(N.textContent||"")+(V.textContent||""),N.remove());C.length=0,T.normalize()}this.lines.push(...v),this.words.push(...C),this.chars.push(...w)}),c&&this[c]&&this.masks.push(...this[c].map(T=>{let M=T.cloneNode();return T.replaceWith(M),M.appendChild(T),T.className&&(M.className=T.className.replace(/(\b\w+\b)/g,"$1-mask")),M.style.overflow="clip",M}))),this.isSplit=!0,zr&&(o?zr.addEventListener("loadingdone",this._split):zr.status==="loading"&&console.warn("SplitText called before fonts loaded")),(y=a&&a(this))&&y.totalTime&&(this._data.anim=b?y.totalTime(b):y),h&&o&&this.elements.forEach((T,M)=>{m[M].width=T.offsetWidth,g&&g.observe(T)}),this}revert(){var e,t;let{orig:n,anim:i,obs:r}=this._data;return r&&r.disconnect(),n.forEach(({element:a,html:o,ariaL:l,ariaH:c})=>{a.innerHTML=o,l?a.setAttribute("aria-label",l):a.removeAttribute("aria-label"),c?a.setAttribute("aria-hidden",c):a.removeAttribute("aria-hidden")}),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,zr?.removeEventListener("loadingdone",this._split),i&&(this._data.animTime=i.totalTime(),i.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this),this}static create(e,t){return new Gp(e,t)}static register(e){Us=Us||e||window.gsap,Us&&(_o=Us.utils.toArray,El=Us.core.context||El),!kc&&window.innerWidth>0&&(zr=document.fonts,kc=!0)}};Hp.version="3.13.0";let Wp=Hp;var fT=vn('<div class="w-full h-full"><canvas class="w-full h-full block"></canvas></div>');function dT(s,e){Yi(e,!1);let t=Rl(),n=Rl(),i,r,a,o,l,c;ca(()=>(h(),()=>{c&&cancelAnimationFrame(c),window.removeEventListener("resize",d),a?.dispose(),i?.traverse(p=>{p.geometry&&p.geometry.dispose(),p.material&&(Array.isArray(p.material)?p.material.forEach(m=>m.dispose()):p.material.dispose())})}));function h(){if(!Ge(t)||!Ge(n))return;i=new yd,i.background=null,i.fog=new ih(0,0,20),r=new Vt(75,Ge(t).clientWidth/Ge(t).clientHeight,.1,1e3),r.position.set(0,0,5),r.lookAt(0,0,0),a=new Od({canvas:Ge(n),alpha:!0,antialias:!0}),a.setSize(Ge(t).clientWidth,Ge(t).clientHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setClearColor(0,0);const p=new Dd(16777215,.3);i.add(p),l=new Pd(16755200,100,20),l.position.set(0,0,0),i.add(l);const m=new ta(16777215,.5);m.position.set(5,5,5),i.add(m);const b=new ta(16777215,.3);b.position.set(-5,-3,-5),i.add(b),new kd().load(`${Gc}/assets/bulb.glb`,y=>{o=y.scene,o.traverse(T=>{T.isMesh&&T.material&&(T.material.metalness=.3,T.material.roughness=.1)}),o.scale.setScalar(.8),o.position.set(0,0,0),i.add(o)},void 0,y=>{console.error("Error loading bulb globe:",y)}),window.addEventListener("resize",d),f()}let u=0;function f(){c=requestAnimationFrame(f),u+=.016,o&&(o.rotation.y+=.005),r.position.x=Math.sin(u*.2)*.5,r.position.y=Math.cos(u*.3)*.3,r.lookAt(0,0,0),a.render(i,r)}function d(){if(!Ge(t)||!r||!a)return;const p=Ge(t).clientWidth,m=Ge(t).clientHeight;r.aspect=p/m,r.updateProjectionMatrix(),a.setSize(p,m),a.setPixelRatio(Math.min(window.devicePixelRatio,2))}Kf();var x=fT(),_=Et(x);Mi(_,p=>Wn(n,p),()=>Ge(n)),Mt(x),Mi(x,p=>Wn(t,p),()=>Ge(t)),Ot(s,x),qi()}var pT=vn(`<div class="
  absolute h-full w-[90vw]
  bg-[linear-gradient(to_right,#80808055_1px,transparent_1px),linear-gradient(to_bottom,#80808055_1px,transparent_1px)]
  bg-[size:54px_54px]
  mask-[radial-gradient(circle,white_10%,transparent_60%)]
  z-0
"></div> <div class="
  absolute
  h-[50vh] lg:h-[85%]
  w-full lg:w-[50%]
  top-[40vh] lg:top-0
  right-[50%] lg:right-0
  translate-x-1/2 lg:translate-x-0
  z-[1] pointer-events-none
  overflow-hidden
"><div class="
	absolute w-full h-full
	bg-yellow-300/80
	z-[-1]
	-translate-y-1/4
	mask-[radial-gradient(circle,white_10%,transparent_60%)]
"></div> <!></div> <div class="
		w-full h-full
 		inset-0 flex flex-col-reverse
 		justify-end lg:justify-start
 		z-[3] px-6
  	relative py-24 .scale-y-10
"><h1 class="text-4xl lg:text-8xl font-bold text-anim relative z-[3] font-notable">CENTER FOR <br/> INNOVATION AND <br/> ENTREPRENEURSHIP</h1></div>`,1);function mT(s,e){Yi(e,!1),ca(()=>{let r=new Wp(".text-anim",{type:"chars, words"});Ys.from(r.chars,{y:30,opacity:0,stagger:.05,duration:.4,ease:"power3.out"})}),Kf();var t=pT(),n=qt(Xr(t),2),i=qt(Et(n),2);dT(i,{}),Mt(n),Rm(2),Ot(s,t),qi()}const $n=[{name:["About Us"],_3d_name:"rocket_small.glb",route:"/about",color:"#A78BFA",complementaryColor:"#FAE78B",description:"We build leaders",description_fr:"Empowering students to grow, lead, innovate, inspire change with vision.",settings:{rotateX:0,rotateY:0,rotateZ:0,scale:.7,spinSpeed:10,wireframe:!1}},{name:["Projects"],_3d_name:"cd.glb",route:"/projects",color:"#34D399",complementaryColor:"#D3346C",description:"Innovation in action",description_fr:"Real ideas built into products that solve problems and inspire.",settings:{rotateX:0,rotateY:0,rotateZ:0,scale:.7,spinSpeed:0,color:"#34D399",wireframe:!1}},{name:["Events"],_3d_name:"trophy.glb",route:"/events",color:"#F472B6",complementaryColor:"#72F4B0",description:"Create. Compete. Connect.",description_fr:"Events where creativity thrives, skills grow, friendships form and shine.",settings:{rotateX:0,rotateY:0,rotateZ:0,scale:.7,spinSpeed:0,wireframe:!1}},{name:["Team"],_3d_name:"glasses.glb",route:"/team",color:"#60A5FA",complementaryColor:"#FAB960",description:"Driven by passion",description_fr:"Team fueled by passion, collaboration, dedication, purpose and limitless growth.",settings:{rotateX:0,rotateY:0,rotateZ:0,scale:.7,spinSpeed:0,wireframe:!1}},{name:["Contact"],_3d_name:"minimal_phone.glb",route:"/contact",color:"#F59E0B",complementaryColor:"#0B5AF5",description:"Let’s collaborate today",description_fr:"Reach out, connect with us, let’s collaborate and build future.",settings:{rotateX:0,rotateY:0,rotateZ:0,scale:.7,spinSpeed:0,wireframe:!1}}];var _T=Hc('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>');function xT(s,e){let t=_s(e,"inline",8,!0);const n="width:1em;position:relative;top:0.15em;";var i=_T();yi(()=>ha(i,t()?n:void 0)),Ot(s,i)}var gT=Hc('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');function vT(s,e){let t=_s(e,"inline",8,!0);const n="width:1em;position:relative;top:0.15em;";var i=gT();yi(()=>ha(i,t()?n:void 0)),Ot(s,i)}var bT=vn(`<button class="
						w-full py-3 text-white text-base sm:text-lg
						hover:bg-white/10 transition
						text-center cursor-pointer
						border-b border-white/5 last:border-none
					 svelte-b10u5m"> </button>`),yT=vn(`<div class="
				w-full
				rounded-2xl overflow-hidden
				backdrop-blur-md bg-black/50
				flex flex-col items-center justify-center
				shadow-xl border border-white/10
			 svelte-b10u5m"><button class="
					w-full py-3 text-white text-base sm:text-lg
					hover:bg-white/10 transition text-center cursor-pointer
					border-b border-white/5 last:border-none
				 svelte-b10u5m">Home</button> <!></div>`),MT=vn(`<nav class="
		px-5
		fixed left-1/2 -translate-x-1/2
		bottom-[calc(env(safe-area-inset-bottom)+1rem)]
		flex flex-col gap-2 items-center justify-center
		z-[9999]
		w-full lg:w-[550px]
		pointer-events-auto
	 svelte-b10u5m"><!> <div class="
			w-full
			rounded-2xl px-4 py-3
			backdrop-blur-md bg-black/60 shadow-lg
			border border-white/10
			flex items-center justify-between
		 svelte-b10u5m"><button class="text-lg sm:text-xl text-white font-semibold cursor-pointer svelte-b10u5m"> </button> <button class="
				w-10 h-10 flex items-center justify-center
				text-white hover:text-gray-400 transition
				active:scale-90
			 svelte-b10u5m"><!></button></div></nav>`);function ST(s,e){Yi(e,!0);let t=_s(e,"currentIndex",15),n=Cl(!1);function i(p,{duration:m=300,delay:b=0}={}){return{duration:m,delay:b,css:g=>`
				transform: scaleY(${g});
				transform-origin: top;
			`}}var r={openMenu:i},a=MT(),o=Et(a);{var l=p=>{var m=yT(),b=Et(m);b.__click=()=>{t(0),Wn(n,!1)};var g=qt(b,2);Xc(g,17,()=>$n,Wc,(y,T,M)=>{var w=bT();w.__click=()=>{t(M+1),Wn(n,!1)};var C=Et(w,!0);Mt(w),yi(()=>es(C,Ge(T).name)),Ot(y,w)}),Mt(m),cr(3,m,()=>i),Ot(p,m)};Pl(o,p=>{Ge(n)&&p(l)})}var c=qt(o,2),h=Et(c),u=Et(h,!0);Mt(h);var f=qt(h,2);f.__click=()=>{Wn(n,!Ge(n))};var d=Et(f);{var x=p=>{vT(p,{inline:!1,class:"w-7 h-7"})},_=p=>{xT(p,{inline:!1,class:"w-7 h-7"})};Pl(d,p=>{Ge(n)?p(x):p(_,!1)})}return Mt(f),Mt(c),Mt(a),yi(()=>es(u,t()===0?"Home":$n[t()-1].name)),Ot(s,a),qi(r)}Zf(["click"]);function xo(s,{duration:e=300,delay:t=0}={}){return{duration:e,delay:t,css:n=>`
				transform: scaleY(${n});
				transform-origin: top;
			`}}function go(s,{duration:e=300,delay:t=0}={}){return{duration:e,delay:t,css:n=>`
				transform: scaleY(${n});
				transform-origin: bottom;
			`}}var TT=vn('<span class="text font-notable svelte-lr7kg1"> </span>'),ET=vn('<div class="marquee-wrapper svelte-lr7kg1"><div class="marquee svelte-lr7kg1"></div></div>');function AT(s,e){Yi(e,!0);let t=_s(e,"speed",3,50),n=Yr(()=>e.scrollDirection==="down"?xo:go),i=Yr(()=>e.scrollDirection==="down"?go:xo),r,a,o,l;function c(){if(!r||!a||!e.text||e.text.length===0)return;o&&o.kill(),r.querySelectorAll(".text").forEach((y,T)=>{T>=e.text.length&&y.remove()});const x=r.querySelector(".text");if(!x)return;const _=a.offsetWidth*3;let p=0;const m=50;for(;r.scrollWidth<_&&p<m;)e.text.forEach(y=>{const T=x.cloneNode(!1);T.textContent=`• ${y}`,r.appendChild(T)}),p++;r.offsetWidth;const b=r.scrollWidth/2,g=b/t();Ys.ticker.fps(60),o=Ys.to(r,{x:-b,duration:g,ease:"none",repeat:-1,force3D:!0,modifiers:{x:Ys.utils.unitize(y=>parseFloat(y)%-b)}})}function h(){clearTimeout(l),l=setTimeout(()=>{c()},150)}jf(()=>{e.text&&r&&a&&requestAnimationFrame(()=>{requestAnimationFrame(()=>{c()})})}),ca(()=>(window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h),clearTimeout(l)})),Qp(()=>{o&&o.kill(),clearTimeout(l)});var u=ET(),f=Et(u);Xc(f,21,()=>e.text,Wc,(d,x)=>{var _=TT(),p=Et(_);Mt(_),yi(()=>es(p,`• ${Ge(x)??""}`)),Ot(d,_)}),Mt(f),Mi(f,d=>r=d,()=>r),Mt(u),Mi(u,d=>a=d,()=>a),cr(2,u,()=>Ge(n)),cr(1,u,()=>Ge(i)),Ot(s,u),qi()}var wT=vn(`<div class="
				fixed z-[3]
				left-4 right-4
				top-7 lg:top-6
				text-5xl lg:text-8xl
				font-bold leading-snug
				px-2 max-w-[600px]
				font-notable
				pointer-events-none
			"><span> </span></div> <div class="
				fixed z-[3]
				left-4 right-4
				bottom-28 lg:bottom-24
				text-right
				text-3xl lg:text-4xl
				font-bold leading- snug
				px-2 max-w-[600px] ml-auto
				pointer-events-none
				font-moda
			"><span> </span></div> <div class="
				fixed w-full h-full
				top-[45%] z-[1] opacity-50 sm:opacity-65
				pointer-events-none
			"><!></div>`,1),RT=vn(`<div class="wavy-circle pointer-events-none
	bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
	opacity-40 animate-slow-spin fixed z-[1]
	top-0 left-0
	-translate-x-1/3 -translate-y-1/2
	lg:-translate-y-1/3
	w-[80vw] sm:w-full svelte-1va06w8"></div> <div class="wavy-box pointer-events-none
	bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
	opacity-40 animate-slow-spin fixed z-[1]
	bottom-0 right-0
	translate-x-1/3 translate-y-1/3
	w-full sm:w-full svelte-1va06w8"></div> <!>`,1);function CT(s,e){Yi(e,!0);let t=Yr(()=>e.scrollDirection==="down"?xo:go),n=Yr(()=>e.scrollDirection==="down"?go:xo);var i=RT(),r=qt(Xr(i),4);{var a=o=>{var l=Jp(),c=Xr(l);Om(c,()=>e.currentIndex,h=>{var u=wT(),f=Xr(u),d=Et(f),x=Et(d,!0);Mt(d),Mt(f);var _=qt(f,2),p=Et(_),m=Et(p,!0);Mt(p),Mt(_);var b=qt(_,2),g=Et(b);{let y=Yr(()=>[$n[e.currentIndex-1].description]);AT(g,{speed:300,get text(){return Ge(y)},get key(){return e.currentIndex},get scrollDirection(){return e.scrollDirection}})}Mt(b),yi(()=>{es(x,$n[e.currentIndex-1].name[0]),es(m,$n[e.currentIndex-1].description_fr)}),cr(2,f,()=>Ge(t)),cr(1,f,()=>Ge(n)),cr(2,_,()=>Ge(t)),cr(1,_,()=>Ge(n)),Ot(h,u)}),Ot(o,l)};Pl(r,o=>{e.currentIndex!==0&&o(a)})}Ot(s,i),qi()}var PT=Hc('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>');function DT(s,e){let t=_s(e,"inline",8,!0);const n="width:1em;position:relative;top:0.15em;";var i=PT();yi(()=>ha(i,t()?n:void 0)),Ot(s,i)}var LT=vn(`<span class="fixed p-2 bg-black/30 backdrop-blur-sm border-black/20 border-1 rounded-lg text-md text-white z-[4] pointer-events-none hidden" style="position: fixed;"><span class="flex items-center justify-around w-full gap-2"> <span class="w-[20px] h-[20px] flex items-center justify-center"><!></span></span></span> <button class="
				fixed top-1/2 left-1/2
				-translate-x-1/2 -translate-y-1/2
				w-[90vh] h-[70vh]
				z-[2]
				rounded-[40%]
				mask-[radial-gradient(circle,black_40%,transparent_60%)]
				bg-transparent
				opacity-0
&lt;!--				hover:opacity-100-->
				hover:bg-black/10
				hover:backdrop-blur-sm
				hover:cursor-pointer
				transition-all duration-300
			" aria-label="ss"></button>`,1);function IT(s,e){Yi(e,!0);let t=null;function n(d){t&&(t.style.display="block",i(d))}function i(d){t&&(t.style.left=`${d.clientX+15}px`,t.style.top=`${d.clientY-50}px`)}function r(){t&&(t.style.display="none")}var a=LT(),o=Xr(a),l=Et(o),c=Et(l),h=qt(c),u=Et(h);DT(u,{inline:!1}),Mt(h),Mt(l),Mt(o),Mi(o,d=>t=d,()=>t);var f=qt(o,2);f.__mousemove=i,f.__click=()=>{Dm(Wm(`${$n[e.currentIndex-1].route}`)),console.log(`${$n[e.currentIndex-1].name}`)},yi(()=>{es(c,`${(e.currentIndex!==0?$n[e.currentIndex-1].name:"Home")??""} `),ha(f,e.currentIndex!==0?"display : hidden":"display : none;")}),Gh("mouseenter",f,d=>n(d)),Gh("mouseleave",f,r),Ot(s,a),qi()}Zf(["mousemove","click"]);var NT=vn('<div class="snap-section w-full h-full"><!></div>'),UT=vn('<div class="fixed w-full h-full overflow-hidden pointer-events-none"></div> <!> <!> <!> <div class="snap-section w-full h-full"><!></div> <!>',1);function XT(s,e){Yi(e,!0);let t=Cl(0),n=Yr(()=>$n[Ge(t)-1]?.complementaryColor||"#ffffff"),i=Cm([]),r=null,a=Cl(null);function o(p){p.forEach(m=>{if(m.isIntersecting){const b=i.indexOf(m.target);b!==-1&&Ge(t)!==b&&(Wn(a,b>Ge(t)?"down":"up",!0),Wn(t,b,!0),setTimeout(()=>{i[Ge(t)].scrollIntoView({behavior:"smooth"})},50))}})}ca(()=>(r=new IntersectionObserver(o,{root:null,threshold:.1}),i.forEach(p=>{p&&r.observe(p)}),()=>{r&&r.disconnect()}));var l=UT(),c=Xr(l),h=qt(c,2);IT(h,{get currentIndex(){return Ge(t)},set currentIndex(p){Wn(t,p,!0)}});var u=qt(h,2);CT(u,{get scrollDirection(){return Ge(a)},get currentIndex(){return Ge(t)},set currentIndex(p){Wn(t,p,!0)}});var f=qt(u,2);ST(f,{get currentIndex(){return Ge(t)},set currentIndex(p){Wn(t,p,!0)}});var d=qt(f,2),x=Et(d);mT(x,{}),Mt(d),Mi(d,p=>i[0]=p,()=>i?.[0]);var _=qt(d,2);Xc(_,17,()=>$n,Wc,(p,m,b)=>{var g=NT(),y=Et(g);jM(y,{get name(){return Ge(m)._3d_name},get settings(){return Ge(m).settings}}),Mt(g),Mi(g,(T,M)=>i[M+1]=T,T=>i?.[T+1],()=>[b]),Ot(p,g)}),yi(()=>ha(c,`background-color: ${Ge(n)??""}; transition: background-color 1s ease;`)),Ot(s,l),qi()}export{XT as component};
