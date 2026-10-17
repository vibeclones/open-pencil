const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/esm-bALIBdO5.js","assets/esm-6NONT2qf.js","assets/fontoxpath.esm-CgCY7G3i.js","assets/chunk-DECur_0Z.js","assets/core-tWvouyvh.js","assets/core-BPUvTWeJ.js"])))=>i.map(i=>d[i]);
import{r as e,t}from"./chunk-DECur_0Z.js";import{C as n,F as r,L as i,M as a,P as o,V as s,g as c,j as l,k as u,m as d,v as f,w as p}from"./export-LN5ls7KA.js";import{E as m,T as h,l as g}from"./constants-D6HoBujQ.js";import{l as _}from"./color-D8qRooHc.js";import{t as v}from"./preload-helper-Csd0mlRH.js";import{_ as y,c as b,h as x,t as S,v as C}from"./fonts-DYBlv89a.js";import{r as w}from"./direction-COgEaP7e.js";import{t as T}from"./__vite-browser-external-DuhnHCZL.js";function E(e=16){let t=crypto.getRandomValues(new Uint8Array(e)),n=``;for(let e of t)n+=e.toString(16).padStart(2,`0`);return n}function D(){return crypto.getRandomValues(new Int32Array(1))[0]}function O(e){return crypto.getRandomValues(new Uint8Array(1))[0]%e}var k=Uint8Array,A=Uint16Array,j=Int32Array,ee=new k([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),te=new k([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),M=new k([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ne=function(e,t){for(var n=new A(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new j(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},N=ne(ee,2),re=N.b,ie=N.r;re[28]=258,ie[258]=28;for(var P=ne(te,0),ae=P.b,oe=P.r,se=new A(32768),F=0;F<32768;++F){var I=(F&43690)>>1|(F&21845)<<1;I=(I&52428)>>2|(I&13107)<<2,I=(I&61680)>>4|(I&3855)<<4,se[F]=((I&65280)>>8|(I&255)<<8)>>1}for(var ce=(function(e,t,n){for(var r=e.length,i=0,a=new A(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new A(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new A(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[se[d]>>c]=l}else for(s=new A(r),i=0;i<r;++i)e[i]&&(s[i]=se[o[e[i]-1]++]>>15-e[i]);return s}),L=new k(288),F=0;F<144;++F)L[F]=8;for(var F=144;F<256;++F)L[F]=9;for(var F=256;F<280;++F)L[F]=7;for(var F=280;F<288;++F)L[F]=8;for(var le=new k(32),F=0;F<32;++F)le[F]=5;var ue=ce(L,9,0),de=ce(L,9,1),fe=ce(le,5,0),pe=ce(le,5,1),me=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},R=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},he=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},ge=function(e){return(e+7)/8|0},_e=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new k(e.subarray(t,n))},ve=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],z=function(e,t,n){var r=Error(t||ve[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,z),!n)throw r;return r},ye=function(e,t,n,r){var i=e.length,a=r?r.length:0;if(!i||t.f&&!t.l)return n||new k(0);var o=!n,s=o||t.i!=2,c=t.i;o&&(n=new k(i*3));var l=function(e){var t=n.length;if(e>t){var r=new k(Math.max(t*2,e));r.set(n),n=r}},u=t.f||0,d=t.p||0,f=t.b||0,p=t.l,m=t.d,h=t.m,g=t.n,_=i*8;do{if(!p){u=R(e,d,1);var v=R(e,d+1,3);if(d+=3,!v){var y=ge(d)+4,b=e[y-4]|e[y-3]<<8,x=y+b;if(x>i){c&&z(0);break}s&&l(f+b),n.set(e.subarray(y,x),f),t.b=f+=b,t.p=d=x*8,t.f=u;continue}else if(v==1)p=de,m=pe,h=9,g=5;else if(v==2){var S=R(e,d,31)+257,C=R(e,d+10,15)+4,w=S+R(e,d+5,31)+1;d+=14;for(var T=new k(w),E=new k(19),D=0;D<C;++D)E[M[D]]=R(e,d+D*3,7);d+=C*3;for(var O=me(E),A=(1<<O)-1,j=ce(E,O,1),D=0;D<w;){var ne=j[R(e,d,A)];d+=ne&15;var y=ne>>4;if(y<16)T[D++]=y;else{var N=0,ie=0;for(y==16?(ie=3+R(e,d,3),d+=2,N=T[D-1]):y==17?(ie=3+R(e,d,7),d+=3):y==18&&(ie=11+R(e,d,127),d+=7);ie--;)T[D++]=N}}var P=T.subarray(0,S),oe=T.subarray(S);h=me(P),g=me(oe),p=ce(P,h,1),m=ce(oe,g,1)}else z(1);if(d>_){c&&z(0);break}}s&&l(f+131072);for(var se=(1<<h)-1,F=(1<<g)-1,I=d;;I=d){var N=p[he(e,d)&se],L=N>>4;if(d+=N&15,d>_){c&&z(0);break}if(N||z(2),L<256)n[f++]=L;else if(L==256){I=d,p=null;break}else{var le=L-254;if(L>264){var D=L-257,ue=ee[D];le=R(e,d,(1<<ue)-1)+re[D],d+=ue}var fe=m[he(e,d)&F],ve=fe>>4;fe||z(3),d+=fe&15;var oe=ae[ve];if(ve>3){var ue=te[ve];oe+=he(e,d)&(1<<ue)-1,d+=ue}if(d>_){c&&z(0);break}s&&l(f+131072);var ye=f+le;if(f<oe){var be=a-oe,xe=Math.min(oe,ye);for(be+f<0&&z(3);f<xe;++f)n[f]=r[be+f]}for(;f<ye;++f)n[f]=n[f-oe]}}t.l=p,t.p=I,t.b=f,t.f=u,p&&(u=1,t.m=h,t.d=m,t.n=g)}while(!u);return f!=n.length&&o?_e(n,0,f):n.subarray(0,f)},be=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8},xe=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8,e[r+2]|=n>>16},Se=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]});var i=n.length,a=n.slice();if(!i)return{t:De,l:0};if(i==1){var o=new k(n[0].s+1);return o[n[0].s]=1,{t:o,l:1}}n.sort(function(e,t){return e.f-t.f}),n.push({s:-1,f:25001});var s=n[0],c=n[1],l=0,u=1,d=2;for(n[0]={s:-1,f:s.f+c.f,l:s,r:c};u!=i-1;)s=n[n[l].f<n[d].f?l++:d++],c=n[l!=u&&n[l].f<n[d].f?l++:d++],n[u++]={s:-1,f:s.f+c.f,l:s,r:c};for(var f=a[0].s,r=1;r<i;++r)a[r].s>f&&(f=a[r].s);var p=new A(f+1),m=Ce(n[u-1],p,0);if(m>t){var r=0,h=0,g=m-t,_=1<<g;for(a.sort(function(e,t){return p[t.s]-p[e.s]||e.f-t.f});r<i;++r){var v=a[r].s;if(p[v]>t)h+=_-(1<<m-p[v]),p[v]=t;else break}for(h>>=g;h>0;){var y=a[r].s;p[y]<t?h-=1<<t-p[y]++-1:++r}for(;r>=0&&h;--r){var b=a[r].s;p[b]==t&&(--p[b],++h)}m=t}return{t:new k(p),l:m}},Ce=function(e,t,n){return e.s==-1?Math.max(Ce(e.l,t,n+1),Ce(e.r,t,n+1)):t[e.s]=n},we=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new A(++t),r=0,i=e[0],a=1,o=function(e){n[r++]=e},s=1;s<=t;++s)if(e[s]==i&&s!=t)++a;else{if(!i&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(i),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(i);a=1,i=e[s]}return{c:n.subarray(0,r),n:t}},B=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r];return n},Te=function(e,t,n){var r=n.length,i=ge(t+2);e[i]=r&255,e[i+1]=r>>8,e[i+2]=e[i]^255,e[i+3]=e[i+1]^255;for(var a=0;a<r;++a)e[i+a+4]=n[a];return(i+4+r)*8},V=function(e,t,n,r,i,a,o,s,c,l,u){be(t,u++,n),++i[256];for(var d=Se(i,15),f=d.t,p=d.l,m=Se(a,15),h=m.t,g=m.l,_=we(f),v=_.c,y=_.n,b=we(h),x=b.c,S=b.n,C=new A(19),w=0;w<v.length;++w)++C[v[w]&31];for(var w=0;w<x.length;++w)++C[x[w]&31];for(var T=Se(C,7),E=T.t,D=T.l,O=19;O>4&&!E[M[O-1]];--O);var k=l+5<<3,j=B(i,L)+B(a,le)+o,ne=B(i,f)+B(a,h)+o+14+3*O+B(C,E)+2*C[16]+3*C[17]+7*C[18];if(c>=0&&k<=j&&k<=ne)return Te(t,u,e.subarray(c,c+l));var N,re,ie,P;if(be(t,u,1+(ne<j)),u+=2,ne<j){N=ce(f,p,0),re=f,ie=ce(h,g,0),P=h;var ae=ce(E,D,0);be(t,u,y-257),be(t,u+5,S-1),be(t,u+10,O-4),u+=14;for(var w=0;w<O;++w)be(t,u+3*w,E[M[w]]);u+=3*O;for(var oe=[v,x],se=0;se<2;++se)for(var F=oe[se],w=0;w<F.length;++w){var I=F[w]&31;be(t,u,ae[I]),u+=E[I],I>15&&(be(t,u,F[w]>>5&127),u+=F[w]>>12)}}else N=ue,re=L,ie=fe,P=le;for(var w=0;w<s;++w){var de=r[w];if(de>255){var I=de>>18&31;xe(t,u,N[I+257]),u+=re[I+257],I>7&&(be(t,u,de>>23&31),u+=ee[I]);var pe=de&31;xe(t,u,ie[pe]),u+=P[pe],pe>3&&(xe(t,u,de>>5&8191),u+=te[pe])}else xe(t,u,N[de]),u+=re[de]}return xe(t,u,N[256]),u+re[256]},Ee=new j([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),De=new k(0),Oe=function(e,t,n,r,i,a){var o=a.z||e.length,s=new k(r+o+5*(1+Math.ceil(o/7e3))+i),c=s.subarray(r,s.length-i),l=a.l,u=(a.r||0)&7;if(t){u&&(c[0]=a.r>>3);for(var d=Ee[t-1],f=d>>13,p=d&8191,m=(1<<n)-1,h=a.p||new A(32768),g=a.h||new A(m+1),_=Math.ceil(n/3),v=2*_,y=function(t){return(e[t]^e[t+1]<<_^e[t+2]<<v)&m},b=new j(25e3),x=new A(288),S=new A(32),C=0,w=0,T=a.i||0,E=0,D=a.w||0,O=0;T+2<o;++T){var M=y(T),ne=T&32767,N=g[M];if(h[ne]=N,g[M]=ne,D<=T){var re=o-T;if((C>7e3||E>24576)&&(re>423||!l)){u=V(e,c,0,b,x,S,w,E,O,T-O,u),E=C=w=0,O=T;for(var P=0;P<286;++P)x[P]=0;for(var P=0;P<30;++P)S[P]=0}var ae=2,se=0,F=p,I=ne-N&32767;if(re>2&&M==y(T-I))for(var ce=Math.min(f,re)-1,L=Math.min(32767,T),le=Math.min(258,re);I<=L&&--F&&ne!=N;){if(e[T+ae]==e[T+ae-I]){for(var ue=0;ue<le&&e[T+ue]==e[T+ue-I];++ue);if(ue>ae){if(ae=ue,se=I,ue>ce)break;for(var de=Math.min(I,ue-2),fe=0,P=0;P<de;++P){var pe=T-I+P&32767,me=pe-h[pe]&32767;me>fe&&(fe=me,N=pe)}}}ne=N,N=h[ne],I+=ne-N&32767}if(se){b[E++]=268435456|ie[ae]<<18|oe[se];var R=ie[ae]&31,he=oe[se]&31;w+=ee[R]+te[he],++x[257+R],++S[he],D=T+ae,++C}else b[E++]=e[T],++x[e[T]]}}for(T=Math.max(T,D);T<o;++T)b[E++]=e[T],++x[e[T]];u=V(e,c,l,b,x,S,w,E,O,T-O,u),l||(a.r=u&7|c[u/8|0]<<3,u-=7,a.h=g,a.p=h,a.i=T,a.w=D)}else{for(var T=a.w||0;T<o+l;T+=65535){var ve=T+65535;ve>=o&&(c[u/8|0]=l,ve=o),u=Te(c,u+1,e.subarray(T,ve))}a.i=o}return _e(s,0,r+ge(u)+i)},ke=(function(){for(var e=new Int32Array(256),t=0;t<256;++t){for(var n=t,r=9;--r;)n=(n&1&&-306674912)^n>>>1;e[t]=n}return e})(),Ae=function(){var e=-1;return{p:function(t){for(var n=e,r=0;r<t.length;++r)n=ke[n&255^t[r]]^n>>>8;e=n},d:function(){return~e}}},je=function(e,t,n,r,i){if(!i&&(i={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),o=new k(a.length+e.length);o.set(a),o.set(e,a.length),e=o,i.w=a.length}return Oe(e,t.level==null?6:t.level,t.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,n,r,i)},Me=function(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n},Ne=function(e,t){return e[t]|e[t+1]<<8},Pe=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},Fe=function(e,t){return Pe(e,t)+Pe(e,t+4)*4294967296},H=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8};function Ie(e,t){return je(e,t||{},0,0)}function Le(e,t){return ye(e,{i:2},t&&t.out,t&&t.dictionary)}var Re=function(e,t,n,r){for(var i in e){var a=e[i],o=t+i,s=r;Array.isArray(a)&&(s=Me(r,a[1]),a=a[0]),a instanceof k?n[o]=[a,s]:(n[o+=`/`]=[new k(0),s],Re(a,o,n,r))}},ze=typeof TextEncoder<`u`&&new TextEncoder,Be=typeof TextDecoder<`u`&&new TextDecoder;try{Be.decode(De,{stream:!0})}catch{}var Ve=function(e){for(var t=``,n=0;;){var r=e[n++],i=(r>127)+(r>223)+(r>239);if(n+i>e.length)return{s:t,r:_e(e,n-1)};i?i==3?(r=((r&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?t+=String.fromCharCode((r&31)<<6|e[n++]&63):t+=String.fromCharCode((r&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(r)}};function He(e,t){if(t){for(var n=new k(e.length),r=0;r<e.length;++r)n[r]=e.charCodeAt(r);return n}if(ze)return ze.encode(e);for(var i=e.length,a=new k(e.length+(e.length>>1)),o=0,s=function(e){a[o++]=e},r=0;r<i;++r){if(o+5>a.length){var c=new k(o+8+(i-r<<1));c.set(a),a=c}var l=e.charCodeAt(r);l<128||t?s(l):l<2048?(s(192|l>>6),s(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|e.charCodeAt(++r)&1023,s(240|l>>18),s(128|l>>12&63),s(128|l>>6&63),s(128|l&63)):(s(224|l>>12),s(128|l>>6&63),s(128|l&63))}return _e(a,0,o)}function Ue(e,t){if(t){for(var n=``,r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}else if(Be)return Be.decode(e);else{var i=Ve(e),a=i.s,n=i.r;return n.length&&z(8),a}}var We=function(e,t){return t+30+Ne(e,t+26)+Ne(e,t+28)},Ge=function(e,t,n){var r=Ne(e,t+28),i=Ue(e.subarray(t+46,t+46+r),!(Ne(e,t+8)&2048)),a=t+46+r,o=Pe(e,t+20),s=n&&o==4294967295?Ke(e,a):[o,Pe(e,t+24),Pe(e,t+42)],c=s[0],l=s[1],u=s[2];return[Ne(e,t+10),c,l,i,a+Ne(e,t+30)+Ne(e,t+32),u]},Ke=function(e,t){for(;Ne(e,t)!=1;t+=4+Ne(e,t+2));return[Fe(e,t+12),Fe(e,t+4),Fe(e,t+20)]},qe=function(e){var t=0;if(e)for(var n in e){var r=e[n].length;r>65535&&z(9),t+=r+4}return t},Je=function(e,t,n,r,i,a,o,s){var c=r.length,l=n.extra,u=s&&s.length,d=qe(l);H(e,t,o==null?67324752:33639248),t+=4,o!=null&&(e[t++]=20,e[t++]=n.os),e[t]=20,t+=2,e[t++]=n.flag<<1|(a<0&&8),e[t++]=i&&8,e[t++]=n.compression&255,e[t++]=n.compression>>8;var f=new Date(n.mtime==null?Date.now():n.mtime),p=f.getFullYear()-1980;if((p<0||p>119)&&z(10),H(e,t,p<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),t+=4,a!=-1&&(H(e,t,n.crc),H(e,t+4,a<0?-a-2:a),H(e,t+8,n.size)),H(e,t+12,c),H(e,t+14,d),t+=16,o!=null&&(H(e,t,u),H(e,t+6,n.attrs),H(e,t+10,o),t+=14),e.set(r,t),t+=c,d)for(var m in l){var h=l[m],g=h.length;H(e,t,+m),H(e,t+2,g),e.set(h,t+4),t+=4+g}return u&&(e.set(s,t),t+=u),t},Ye=function(e,t,n,r,i){H(e,t,101010256),H(e,t+8,n),H(e,t+10,n),H(e,t+12,r),H(e,t+16,i)};function Xe(e,t){t||={};var n={},r=[];Re(e,``,n,t);var i=0,a=0;for(var o in n){var s=n[o],c=s[0],l=s[1],u=l.level==0?0:8,d=He(o),f=d.length,p=l.comment,m=p&&He(p),h=m&&m.length,g=qe(l.extra);f>65535&&z(11);var _=u?Ie(c,l):c,v=_.length,y=Ae();y.p(c),r.push(Me(l,{size:c.length,crc:y.d(),c:_,f:d,m,u:f!=o.length||m&&p.length!=h,o:i,compression:u})),i+=30+f+g+v,a+=76+2*(f+g)+(h||0)+v}for(var b=new k(a+22),x=i,S=a-i,C=0;C<r.length;++C){var d=r[C];Je(b,d.o,d,d.f,d.u,d.c.length);var w=30+d.f.length+qe(d.extra);b.set(d.c,d.o+w),Je(b,i,d,d.f,d.u,d.c.length,d.o,d.m),i+=16+w+(d.m?d.m.length:0)}return Ye(b,i,r.length,S,x),b}function Ze(e,t){for(var n={},r=e.length-22;Pe(e,r)!=101010256;--r)(!r||e.length-r>65558)&&z(13);var i=Ne(e,r+8);if(!i)return{};var a=Pe(e,r+16),o=a==4294967295||i==65535;if(o){var s=Pe(e,r-12);o=Pe(e,s)==101075792,o&&(i=Pe(e,s+32),a=Pe(e,s+48))}for(var c=t&&t.filter,l=0;l<i;++l){var u=Ge(e,a,o),d=u[0],f=u[1],p=u[2],m=u[3],h=u[4],g=u[5],_=We(e,g);a=h,(!c||c({name:m,size:f,originalSize:p,compression:d}))&&(d?d==8?n[m]=Le(e.subarray(_,_+f),{out:new k(p)}):z(14,`unknown compression type `+d):n[m]=_e(e,_,_+f))}return n}var Qe=new Int32Array(1),U=new Float32Array(Qe.buffer),$e=new TextDecoder,et=class{_data;_index;length;constructor(e){if(e&&!(e instanceof Uint8Array))throw Error(`Must initialize a ByteBuffer with a Uint8Array`);this._data=e||new Uint8Array(256),this._index=0,this.length=e?e.length:0}toUint8Array(){return this._data.subarray(0,this.length)}readByte(){return this._data[this._index++]}readByteArray(){let e=this.readVarUint(),t=this._index;return this._index=t+e,this._data.slice(t,t+e)}readVarFloat(){let e=this._index,t=this._data,n=t[e];if(n===0)return this._index=e+1,0;let r=n|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24;return this._index=e+4,r=r<<23|r>>>9,Qe[0]=r,U[0]}readVarUint(){let e=this._data,t=this._index,n=e[t++],r=n&127;return n<128||(n=e[t++],r|=(n&127)<<7,n<128)||(n=e[t++],r|=(n&127)<<14,n<128)||(n=e[t++],r|=(n&127)<<21,n<128)?(this._index=t,r):(n=e[t++],r|=(n&127)<<28,this._index=t,r>>>0)}readVarInt(){let e=this.readVarUint()|0;return e&1?~(e>>>1):e>>>1}readVarUint64(){let e=BigInt(0),t=BigInt(0),n=BigInt(7),r;for(;(r=this.readByte())&128&&t<56;)e|=BigInt(r&127)<<t,t+=n;return e|=BigInt(r)<<t,e}readVarInt64(){let e=this.readVarUint64(),t=BigInt(1),n=e&t;return e>>=t,n?~e:e}readString(){let e=this._data,t=this._index,n=t;for(;e[n]!==0;)n++;return this._index=n+1,$e.decode(e.subarray(t,n))}_growBy(e){if(this.length+e>this._data.length){let t=new Uint8Array(this.length+e<<1);t.set(this._data),this._data=t}this.length+=e}writeByte(e){let t=this.length;this._growBy(1),this._data[t]=e}writeByteArray(e){this.writeVarUint(e.length);let t=this.length;this._growBy(e.length),this._data.set(e,t)}writeVarFloat(e){let t=this.length;U[0]=e;let n=Qe[0];if(n=n>>>23|n<<9,!(n&255)){this.writeByte(0);return}this._growBy(4);let r=this._data;r[t]=n,r[t+1]=n>>8,r[t+2]=n>>16,r[t+3]=n>>24}writeVarUint(e){if(e<0||e>4294967295)throw Error(`Outside uint range: `+e);do{let t=e&127;e>>>=7,this.writeByte(e?t|128:t)}while(e)}writeVarInt(e){if(e<-2147483648||e>2147483647)throw Error(`Outside int range: `+e);this.writeVarUint((e<<1^e>>31)>>>0)}writeVarUint64(e){if(typeof e==`string`)e=BigInt(e);else if(typeof e!=`bigint`)throw Error(`Expected bigint but got `+typeof e+`: `+e);if(e<0||e>BigInt(`0xFFFFFFFFFFFFFFFF`))throw Error(`Outside uint64 range: `+e);let t=BigInt(127),n=BigInt(7);for(let r=0;e>t&&r<8;r++)this.writeByte(Number(e&t)|128),e>>=n;this.writeByte(Number(e))}writeVarInt64(e){if(typeof e==`string`)e=BigInt(e);else if(typeof e!=`bigint`)throw Error(`Expected bigint but got `+typeof e+`: `+e);if(e<-BigInt(`0x8000000000000000`)||e>BigInt(`0x7FFFFFFFFFFFFFFF`))throw Error(`Outside int64 range: `+e);let t=BigInt(1);this.writeVarUint64(e<0?~(e<<t):e<<t)}writeString(e){let t;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(n+1===e.length||r<55296||r>=56320)t=r;else{let i=e.charCodeAt(++n);t=(r<<10)+i+-56613888}if(t===0)throw Error(`Cannot encode a string containing the null character`);t<128?this.writeByte(t):(t<2048?this.writeByte(t>>6&31|192):(t<65536?this.writeByte(t>>12&15|224):(this.writeByte(t>>18&7|240),this.writeByte(t>>12&63|128)),this.writeByte(t>>6&63|128)),this.writeByte(t&63|128))}this.writeByte(0)}};function W(e){return JSON.stringify(e)}function tt(e,t,n){var r=Error(e);throw r.line=t,r.column=n,r}function nt(e,t){let n=[],r=`  `;n.push(`function (bb) {`),n.push(`  var result = {};`),n.push(`  if (!(bb instanceof this.ByteBuffer)) {`),n.push(`    bb = new this.ByteBuffer(bb);`),n.push(`  }`),n.push(``),e.kind===`MESSAGE`&&(n.push(`  while (true) {`),n.push(`    switch (bb.readVarUint()) {`),n.push(`      case 0:`),n.push(`        return result;`),n.push(``),r=`        `);for(let i=0;i<e.fields.length;i++){let a=e.fields[i],o;switch(a.type){case`bool`:o=`!!bb.readByte()`;break;case`byte`:o=`bb.readByte()`;break;case`int`:o=`bb.readVarInt()`;break;case`uint`:o=`bb.readVarUint()`;break;case`float`:o=`bb.readVarFloat()`;break;case`string`:o=`bb.readString()`;break;case`int64`:o=`bb.readVarInt64()`;break;case`uint64`:o=`bb.readVarUint64()`;break;default:{let e=t[a.type];e?o=e.kind===`ENUM`?`this[`+W(e.name)+`][bb.readVarUint()]`:`this[`+W(`decode`+e.name)+`](bb)`:tt(`Invalid type `+W(a.type)+` for field `+W(a.name),a.line,a.column)}}e.kind===`MESSAGE`&&n.push(`      case `+a.value+`:`),a.isArray?a.isDeprecated?a.type===`byte`?n.push(r+`bb.readByteArray();`):(n.push(r+`var length = bb.readVarUint();`),n.push(r+`while (length-- > 0) `+o+`;`)):a.type===`byte`?n.push(r+`result[`+W(a.name)+`] = bb.readByteArray();`):(n.push(r+`var length = bb.readVarUint();`),n.push(r+`var values = result[`+W(a.name)+`] = Array(length);`),n.push(r+`for (var i = 0; i < length; i++) values[i] = `+o+`;`)):a.isDeprecated?n.push(r+o+`;`):n.push(r+`result[`+W(a.name)+`] = `+o+`;`),e.kind===`MESSAGE`&&(n.push(`        break;`),n.push(``))}return e.kind===`MESSAGE`?(n.push(`      default:`),n.push(`        throw new Error("Attempted to parse invalid message");`),n.push(`    }`),n.push(`  }`)):n.push(`  return result;`),n.push(`}`),n.join(`
`)}function rt(e,t){let n=[];n.push(`function (message, bb) {`),n.push(`  var isTopLevel = !bb;`),n.push(`  if (isTopLevel) bb = new this.ByteBuffer();`);for(let r=0;r<e.fields.length;r++){let i=e.fields[r],a;if(!i.isDeprecated){switch(i.type){case`bool`:a=`bb.writeByte(value);`;break;case`byte`:a=`bb.writeByte(value);`;break;case`int`:a=`bb.writeVarInt(value);`;break;case`uint`:a=`bb.writeVarUint(value);`;break;case`float`:a=`bb.writeVarFloat(value);`;break;case`string`:a=`bb.writeString(value);`;break;case`int64`:a=`bb.writeVarInt64(value);`;break;case`uint64`:a=`bb.writeVarUint64(value);`;break;default:{let e=t[i.type];if(e)a=e.kind===`ENUM`?`var encoded = this[`+W(e.name)+`][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + `+W(` for enum `+W(e.name))+`); bb.writeVarUint(encoded);`:`this[`+W(`encode`+e.name)+`](value, bb);`;else throw Error(`Invalid type `+W(i.type)+` for field `+W(i.name))}}n.push(``),n.push(`  var value = message[`+W(i.name)+`];`),n.push(`  if (value != null) {`),e.kind===`MESSAGE`&&n.push(`    bb.writeVarUint(`+i.value+`);`),i.isArray?i.type===`byte`?n.push(`    bb.writeByteArray(value);`):(n.push(`    var values = value, n = values.length;`),n.push(`    bb.writeVarUint(n);`),n.push(`    for (var i = 0; i < n; i++) {`),n.push(`      value = values[i];`),n.push(`      `+a),n.push(`    }`)):n.push(`    `+a),e.kind===`STRUCT`&&(n.push(`  } else {`),n.push(`    throw new Error(`+W(`Missing required field `+W(i.name))+`);`)),n.push(`  }`)}}return e.kind===`MESSAGE`&&n.push(`  bb.writeVarUint(0);`),n.push(``),n.push(`  if (isTopLevel) return bb.toUint8Array();`),n.push(`}`),n.join(`
`)}function it(e){let t={},n=e.package,r=[];n===null?(r.push(`var exports = exports || {};`),n=`exports`):r.push(`var `+n+` = exports || `+n+` || {}, exports;`),r.push(n+`.ByteBuffer = `+n+`.ByteBuffer || require("kiwi-schema").ByteBuffer;`);for(let n=0;n<e.definitions.length;n++){let r=e.definitions[n];t[r.name]=r}for(let i=0;i<e.definitions.length;i++){let a=e.definitions[i];switch(a.kind){case`ENUM`:{let e={};for(let t=0;t<a.fields.length;t++){let n=a.fields[t];e[n.name]=n.value,e[n.value]=n.name}r.push(n+`[`+W(a.name)+`] = `+JSON.stringify(e,null,2)+`;`);break}case`STRUCT`:case`MESSAGE`:r.push(``),r.push(n+`[`+W(`decode`+a.name)+`] = `+nt(a,t)+`;`),r.push(``),r.push(n+`[`+W(`encode`+a.name)+`] = `+rt(a,t)+`;`);break;default:tt(`Invalid definition kind `+W(a.kind),a.line,a.column);break}}return r.push(``),r.join(`
`)}function at(e){let t={ByteBuffer:et};return Function(`exports`,it(e))(t),t}var ot=[`bool`,`byte`,`int`,`uint`,`float`,`string`,`int64`,`uint64`],st=[`ENUM`,`STRUCT`,`MESSAGE`];function ct(e){let t=e instanceof et?e:new et(e),n=t.readVarUint(),r=[];for(let e=0;e<n;e++){let e=t.readString(),n=t.readByte(),i=t.readVarUint(),a=[];for(let e=0;e<i;e++){let e=t.readString(),r=t.readVarInt(),i=!!(t.readByte()&1),o=t.readVarUint();a.push({name:e,line:0,column:0,type:st[n]===`ENUM`?null:r,isArray:i,isDeprecated:!1,value:o})}r.push({name:e,line:0,column:0,kind:st[n],fields:a})}for(let e=0;e<n;e++){let t=r[e].fields;for(let e=0;e<t.length;e++){let n=t[e],i=n.type;if(i!==null&&i<0){if(~i>=ot.length)throw Error(`Invalid type `+i);n.type=ot[~i]}else{if(i!==null&&i>=r.length)throw Error(`Invalid type `+i);n.type=i===null?null:r[i].name}}}return{package:null,definitions:r}}function lt(e){let t=new et,n=e.definitions,r={};t.writeVarUint(n.length);for(let e=0;e<n.length;e++)r[n[e].name]=e;for(let e=0;e<n.length;e++){let i=n[e];t.writeString(i.name),t.writeByte(st.indexOf(i.kind)),t.writeVarUint(i.fields.length);for(let e=0;e<i.fields.length;e++){let n=i.fields[e],a=ot.indexOf(n.type);t.writeString(n.name),t.writeVarInt(a===-1?r[n.type]:~a),t.writeByte(n.isArray?1:0),t.writeVarUint(n.value)}}return t.toUint8Array()}var ut=[`bool`,`byte`,`float`,`int`,`int64`,`string`,`uint`,`uint64`],dt=[`ByteBuffer`,`package`],ft=/((?:-|\b)\d+\b|[=;{}]|\[\]|\[deprecated\]|\b[A-Za-z_][A-Za-z0-9_]*\b|\/\/.*|\s+)/g,pt=/^[A-Za-z_][A-Za-z0-9_]*$/,mt=/^\/\/.*|\s+$/,ht=/^=$/,gt=/^$/,_t=/^;$/,vt=/^-?\d+$/,yt=/^\{$/,bt=/^\}$/,xt=/^\[\]$/,St=/^enum$/,Ct=/^struct$/,wt=/^message$/,Tt=/^package$/,Et=/^\[deprecated\]$/;function Dt(e){let t=e.split(ft),n=[],r=0,i=0;for(let e=0;e<t.length;e++){let a=t[e];e&1?mt.test(a)||n.push({text:a,line:i+1,column:r+1}):a!==``&&tt(`Syntax error `+W(a),i+1,r+1);let o=a.split(`
`);o.length>1&&(r=0),i+=o.length-1,r+=o[o.length-1].length}return n.push({text:``,line:i,column:r}),n}function Ot(e){function t(){return e[s]}function n(e){return e.test(t().text)?(s++,!0):!1}function r(e,r){if(!n(e)){let e=t();tt(`Expected `+r+` but found `+W(e.text),e.line,e.column)}}function i(){let e=t();tt(`Unexpected token `+W(e.text),e.line,e.column)}let a=[],o=null,s=0;for(n(Tt)&&(o=t().text,r(pt,`identifier`),r(_t,`";"`));s<e.length&&!n(gt);){let e=[],o;n(St)?o=`ENUM`:n(Ct)?o=`STRUCT`:n(wt)?o=`MESSAGE`:i();let s=t();for(r(pt,`identifier`),r(yt,`"{"`);!n(bt);){let i=null,a=!1,s=!1;o!==`ENUM`&&(i=t().text,r(pt,`identifier`),a=n(xt));let c=t();r(pt,`identifier`);let l=null;o!==`STRUCT`&&(r(ht,`"="`),l=t(),r(vt,`integer`),(l.text|0)+``!==l.text&&tt(`Invalid integer `+W(l.text),l.line,l.column));let u=t();n(Et)&&(o!==`MESSAGE`&&tt(`Cannot deprecate this field`,u.line,u.column),s=!0),r(_t,`";"`),e.push({name:c.text,line:c.line,column:c.column,type:i,isArray:a,isDeprecated:s,value:l===null?e.length+1:l.text|0})}a.push({name:s.text,line:s.line,column:s.column,kind:o,fields:e})}return{package:o,definitions:a}}function kt(e){let t=ut.slice(),n={};for(let r=0;r<e.definitions.length;r++){let i=e.definitions[r];t.indexOf(i.name)!==-1&&tt(`The type `+W(i.name)+` is defined twice`,i.line,i.column),dt.indexOf(i.name)!==-1&&tt(`The type name `+W(i.name)+` is reserved`,i.line,i.column),t.push(i.name),n[i.name]=i}for(let n=0;n<e.definitions.length;n++){let r=e.definitions[n],i=r.fields;if(r.kind===`ENUM`||i.length===0)continue;for(let e=0;e<i.length;e++){let n=i[e];t.indexOf(n.type)===-1&&tt(`The type `+W(n.type)+` is not defined for field `+W(n.name),n.line,n.column)}let a=[];for(let e=0;e<i.length;e++){let t=i[e];a.indexOf(t.value)!==-1&&tt(`The id for field `+W(t.name)+` is used twice`,t.line,t.column),t.value<=0&&tt(`The id for field `+W(t.name)+` must be positive`,t.line,t.column),a.push(t.value)}}let r={},i=e=>{let t=n[e];if(t&&t.kind===`STRUCT`&&(r[e]===1&&tt(`Recursive nesting of `+W(e)+` is not allowed`,t.line,t.column),r[e]!==2&&t)){r[e]=1;let n=t.fields;for(let e=0;e<n.length;e++){let t=n[e];t.isArray||i(t.type)}r[e]=2}return!0};for(let t=0;t<e.definitions.length;t++)i(e.definitions[t].name)}function At(e){let t=Ot(Dt(e));return kt(t),t}new Uint8Array([40,181,47,253]);function jt(e){return e.length>=4&&e[0]===40&&e[1]===181&&e[2]===47&&e[3]===253}var Mt=At(`
package Fig;

enum MessageType {
  JOIN_START = 0;
  NODE_CHANGES = 1;
  USER_CHANGES = 2;
  JOIN_END = 3;
  SIGNAL = 4;
  STYLE = 5;
  STYLE_SET = 6;
  JOIN_START_SKIP_RELOAD = 7;
  NOTIFY_SHOULD_UPGRADE = 8;
  UPGRADE_DONE = 9;
  UPGRADE_REFRESH = 10;
  SCENE_GRAPH_QUERY = 11;
  SCENE_GRAPH_REPLY = 12;
  DIFF = 13;
  CLIENT_BROADCAST = 14;
}

enum Axis {
  X = 0;
  Y = 1;
}

enum Access {
  READ_ONLY = 0;
  READ_WRITE = 1;
}

enum NodePhase {
  CREATED = 0;
  REMOVED = 1;
}

enum WindingRule {
  NONZERO = 0;
  ODD = 1;
}

enum NodeType {
  NONE = 0;
  DOCUMENT = 1;
  CANVAS = 2;
  GROUP = 3;
  FRAME = 4;
  BOOLEAN_OPERATION = 5;
  VECTOR = 6;
  STAR = 7;
  LINE = 8;
  ELLIPSE = 9;
  RECTANGLE = 10;
  REGULAR_POLYGON = 11;
  ROUNDED_RECTANGLE = 12;
  TEXT = 13;
  SLICE = 14;
  SYMBOL = 15;
  INSTANCE = 16;
  STICKY = 17;
  SHAPE_WITH_TEXT = 18;
  CONNECTOR = 19;
  CODE_BLOCK = 20;
  WIDGET = 21;
  STAMP = 22;
  MEDIA = 23;
  HIGHLIGHT = 24;
  SECTION = 25;
  SECTION_OVERLAY = 26;
  WASHI_TAPE = 27;
  VARIABLE = 28;
  VARIABLE_SET = 29;
}

enum ShapeWithTextType {
  SQUARE = 0;
  ELLIPSE = 1;
  DIAMOND = 2;
  TRIANGLE_UP = 3;
  TRIANGLE_DOWN = 4;
  ROUNDED_RECTANGLE = 5;
  PARALLELOGRAM_RIGHT = 6;
  PARALLELOGRAM_LEFT = 7;
  ENG_DATABASE = 8;
  ENG_QUEUE = 9;
  ENG_FILE = 10;
  ENG_FOLDER = 11;
}

enum BlendMode {
  PASS_THROUGH = 0;
  NORMAL = 1;
  DARKEN = 2;
  MULTIPLY = 3;
  LINEAR_BURN = 4;
  COLOR_BURN = 5;
  LIGHTEN = 6;
  SCREEN = 7;
  LINEAR_DODGE = 8;
  COLOR_DODGE = 9;
  OVERLAY = 10;
  SOFT_LIGHT = 11;
  HARD_LIGHT = 12;
  DIFFERENCE = 13;
  EXCLUSION = 14;
  HUE = 15;
  SATURATION = 16;
  COLOR = 17;
  LUMINOSITY = 18;
}

enum PaintType {
  SOLID = 0;
  GRADIENT_LINEAR = 1;
  GRADIENT_RADIAL = 2;
  GRADIENT_ANGULAR = 3;
  GRADIENT_DIAMOND = 4;
  IMAGE = 5;
  EMOJI = 6;
}

enum ImageScaleMode {
  STRETCH = 0;
  FIT = 1;
  FILL = 2;
  TILE = 3;
}

enum EffectType {
  INNER_SHADOW = 0;
  DROP_SHADOW = 1;
  FOREGROUND_BLUR = 2;
  BACKGROUND_BLUR = 3;
}

enum TextCase {
  ORIGINAL = 0;
  UPPER = 1;
  LOWER = 2;
  TITLE = 3;
  SMALL_CAPS = 4;
  SMALL_CAPS_FORCED = 5;
}

enum TextDecoration {
  NONE = 0;
  UNDERLINE = 1;
  STRIKETHROUGH = 2;
}

enum NumberUnits {
  RAW = 0;
  PIXELS = 1;
  PERCENT = 2;
}

enum ConstraintType {
  MIN = 0;
  CENTER = 1;
  MAX = 2;
  STRETCH = 3;
  SCALE = 4;
  FIXED_MIN = 5;
  FIXED_MAX = 6;
}

enum StrokeAlign {
  CENTER = 0;
  INSIDE = 1;
  OUTSIDE = 2;
}

enum StrokeCap {
  NONE = 0;
  ROUND = 1;
  SQUARE = 2;
  ARROW_LINES = 3;
  ARROW_EQUILATERAL = 4;
  DIAMOND_FILLED = 5;
  TRIANGLE_FILLED = 6;
  HIGHLIGHT = 7;
  WASHI_TAPE_1 = 8;
  WASHI_TAPE_2 = 9;
  WASHI_TAPE_3 = 10;
  WASHI_TAPE_4 = 11;
  WASHI_TAPE_5 = 12;
  WASHI_TAPE_6 = 13;
  CIRCLE_FILLED = 14;
}

enum StrokeJoin {
  MITER = 0;
  BEVEL = 1;
  ROUND = 2;
}

enum BooleanOperation {
  UNION = 0;
  INTERSECT = 1;
  SUBTRACT = 2;
  XOR = 3;
}

enum TextAlignHorizontal {
  LEFT = 0;
  CENTER = 1;
  RIGHT = 2;
  JUSTIFIED = 3;
}

enum TextAlignVertical {
  TOP = 0;
  CENTER = 1;
  BOTTOM = 2;
}

enum MouseCursor {
  DEFAULT = 0;
  CROSSHAIR = 1;
  EYEDROPPER = 2;
  HAND = 3;
  PAINT_BUCKET = 4;
  PEN = 5;
  PENCIL = 6;
  MARKER = 7;
  ERASER = 8;
  HIGHLIGHTER = 9;
}

enum VectorMirror {
  NONE = 0;
  ANGLE = 1;
  ANGLE_AND_LENGTH = 2;
}

enum DashMode {
  CLIP = 0;
  STRETCH = 1;
}

enum ImageType {
  PNG = 0;
  JPEG = 1;
  SVG = 2;
  PDF = 3;
}

enum ExportConstraintType {
  CONTENT_SCALE = 0;
  CONTENT_WIDTH = 1;
  CONTENT_HEIGHT = 2;
}

enum LayoutGridType {
  MIN = 0;
  CENTER = 1;
  STRETCH = 2;
  MAX = 3;
}

enum LayoutGridPattern {
  STRIPES = 0;
  GRID = 1;
}

enum TextAutoResize {
  NONE = 0;
  WIDTH_AND_HEIGHT = 1;
  HEIGHT = 2;
}

enum TextTruncation {
  DISABLED = 0;
  ENDING = 1;
}

enum StyleSetType {
  PERSONAL = 0;
  TEAM = 1;
  CUSTOM = 2;
  FREQUENCY = 3;
  TEMPORARY = 4;
}

enum StyleSetContentType {
  SOLID = 0;
  GRADIENT = 1;
  IMAGE = 2;
}

enum StackMode {
  NONE = 0;
  HORIZONTAL = 1;
  VERTICAL = 2;
  GRID = 3;
}

enum GridTrackSizeType {
  FIXED = 0;
  FLEX = 1;
  HUG = 2;
}

message GridTrackSize {
  GridTrackSizeType type = 1;
  float value = 2;
}

enum StackAlign {
  MIN = 0;
  CENTER = 1;
  MAX = 2;
  BASELINE = 3;
  STRETCH = 4;
}

enum StackCounterAlign {
  MIN = 0;
  CENTER = 1;
  MAX = 2;
  STRETCH = 3;
  AUTO = 4;
  BASELINE = 5;
}

enum StackJustify {
  MIN = 0;
  CENTER = 1;
  MAX = 2;
  SPACE_BETWEEN = 3;
}

enum StackSize {
  FIXED = 0;
  RESIZE_TO_FIT = 1;
  RESIZE_TO_FIT_WITH_IMPLICIT_SIZE = 2;
}

enum StackPositioning {
  AUTO = 0;
  ABSOLUTE = 1;
}

enum StackWrap {
  NO_WRAP = 0;
  WRAP = 1;
}

enum ConnectionType {
  NONE = 0;
  INTERNAL_NODE = 1;
  URL = 2;
  BACK = 3;
  CLOSE = 4;
  SET_VARIABLE = 5;
}

enum InteractionType {
  ON_CLICK = 0;
  AFTER_TIMEOUT = 1;
  MOUSE_IN = 2;
  MOUSE_OUT = 3;
  ON_HOVER = 4;
  MOUSE_DOWN = 5;
  MOUSE_UP = 6;
  ON_PRESS = 7;
  NONE = 8;
  DRAG = 9;
  ON_KEY_DOWN = 10;
  ON_VOICE = 11;
}

enum TransitionType {
  INSTANT_TRANSITION = 0;
  DISSOLVE = 1;
  FADE = 2;
  SLIDE_FROM_LEFT = 3;
  SLIDE_FROM_RIGHT = 4;
  SLIDE_FROM_TOP = 5;
  SLIDE_FROM_BOTTOM = 6;
  PUSH_FROM_LEFT = 7;
  PUSH_FROM_RIGHT = 8;
  PUSH_FROM_TOP = 9;
  PUSH_FROM_BOTTOM = 10;
  MOVE_FROM_LEFT = 11;
  MOVE_FROM_RIGHT = 12;
  MOVE_FROM_TOP = 13;
  MOVE_FROM_BOTTOM = 14;
  SLIDE_OUT_TO_LEFT = 15;
  SLIDE_OUT_TO_RIGHT = 16;
  SLIDE_OUT_TO_TOP = 17;
  SLIDE_OUT_TO_BOTTOM = 18;
  MOVE_OUT_TO_LEFT = 19;
  MOVE_OUT_TO_RIGHT = 20;
  MOVE_OUT_TO_TOP = 21;
  MOVE_OUT_TO_BOTTOM = 22;
  MAGIC_MOVE = 23;
  SMART_ANIMATE = 24;
  SCROLL_ANIMATE = 25;
}

enum EasingType {
  IN_CUBIC = 0;
  OUT_CUBIC = 1;
  INOUT_CUBIC = 2;
  LINEAR = 3;
  IN_BACK_CUBIC = 4;
  OUT_BACK_CUBIC = 5;
  INOUT_BACK_CUBIC = 6;
  CUSTOM_CUBIC = 7;
  SPRING = 8;
  GENTLE_SPRING = 9;
  CUSTOM_SPRING = 10;
  SPRING_PRESET_ONE = 11;
  SPRING_PRESET_TWO = 12;
  SPRING_PRESET_THREE = 13;
}

enum ScrollDirection {
  NONE = 0;
  HORIZONTAL = 1;
  VERTICAL = 2;
  BOTH = 3;
}

enum ScrollContractedState {
  EXPANDED = 0;
  CONTRACTED = 1;
}

struct GUID {
  uint sessionID;
  uint localID;
}

struct Color {
  float r;
  float g;
  float b;
  float a;
}

struct Vector {
  float x;
  float y;
}

struct Rect {
  float x;
  float y;
  float w;
  float h;
}

struct ColorStop {
  Color color;
  float position;
}

struct Matrix {
  float m00;
  float m01;
  float m02;
  float m10;
  float m11;
  float m12;
}

struct ParentIndex {
  GUID guid;
  string position;
}

struct Number {
  float value;
  NumberUnits units;
}

struct FontName {
  string family;
  string style;
  string postscript;
}

enum FontVariantNumericFigure {
  NORMAL = 0;
  LINING = 1;
  OLDSTYLE = 2;
}

enum FontVariantNumericSpacing {
  NORMAL = 0;
  PROPORTIONAL = 1;
  TABULAR = 2;
}

enum FontVariantNumericFraction {
  NORMAL = 0;
  DIAGONAL = 1;
  STACKED = 2;
}

enum FontVariantCaps {
  NORMAL = 0;
  SMALL = 1;
  ALL_SMALL = 2;
  PETITE = 3;
  ALL_PETITE = 4;
  UNICASE = 5;
  TITLING = 6;
}

enum FontVariantPosition {
  NORMAL = 0;
  SUB = 1;
  SUPER = 2;
}

enum FontStyle {
  NORMAL = 0;
  ITALIC = 1;
}

enum OpenTypeFeature {
  PCAP = 0;
  C2PC = 1;
  CASE = 2;
  CPSP = 3;
  TITL = 4;
  UNIC = 5;
  ZERO = 6;
  SINF = 7;
  ORDN = 8;
  AFRC = 9;
  DNOM = 10;
  NUMR = 11;
  LIGA = 12;
  CLIG = 13;
  DLIG = 14;
  HLIG = 15;
  RLIG = 16;
  AALT = 17;
  CALT = 18;
  RCLT = 19;
  SALT = 20;
  RVRN = 21;
  VERT = 22;
  SWSH = 23;
  CSWH = 24;
  NALT = 25;
  CCMP = 26;
  STCH = 27;
  HIST = 28;
  SIZE = 29;
  ORNM = 30;
  ITAL = 31;
  RAND = 32;
  DTLS = 33;
  FLAC = 34;
  MGRK = 35;
  SSTY = 36;
  KERN = 37;
  FWID = 38;
  HWID = 39;
  HALT = 40;
  TWID = 41;
  QWID = 42;
  PWID = 43;
  JUST = 44;
  LFBD = 45;
  OPBD = 46;
  RTBD = 47;
  PALT = 48;
  PKNA = 49;
  LTRA = 50;
  LTRM = 51;
  RTLA = 52;
  RTLM = 53;
  ABRV = 54;
  ABVM = 55;
  ABVS = 56;
  VALT = 57;
  VHAL = 58;
  BLWF = 59;
  BLWM = 60;
  BLWS = 61;
  AKHN = 62;
  CJCT = 63;
  CFAR = 64;
  CPCT = 65;
  CURS = 66;
  DIST = 67;
  EXPT = 68;
  FALT = 69;
  FINA = 70;
  FIN2 = 71;
  FIN3 = 72;
  HALF = 73;
  HALN = 74;
  HKNA = 75;
  HNGL = 76;
  HOJO = 77;
  INIT = 78;
  ISOL = 79;
  JP78 = 80;
  JP83 = 81;
  JP90 = 82;
  JP04 = 83;
  LJMO = 84;
  LOCL = 85;
  MARK = 86;
  MEDI = 87;
  MED2 = 88;
  MKMK = 89;
  NLCK = 90;
  NUKT = 91;
  PREF = 92;
  PRES = 93;
  VPAL = 94;
  PSTF = 95;
  PSTS = 96;
  RKRF = 97;
  RPHF = 98;
  RUBY = 99;
  SMPL = 100;
  TJMO = 101;
  TNAM = 102;
  TRAD = 103;
  VATU = 104;
  VJMO = 105;
  VKNA = 106;
  VKRN = 107;
  VRTR = 108;
  VRT2 = 109;
  SS01 = 110;
  SS02 = 111;
  SS03 = 112;
  SS04 = 113;
  SS05 = 114;
  SS06 = 115;
  SS07 = 116;
  SS08 = 117;
  SS09 = 118;
  SS10 = 119;
  SS11 = 120;
  SS12 = 121;
  SS13 = 122;
  SS14 = 123;
  SS15 = 124;
  SS16 = 125;
  SS17 = 126;
  SS18 = 127;
  SS19 = 128;
  SS20 = 129;
  CV01 = 130;
  CV02 = 131;
  CV03 = 132;
  CV04 = 133;
  CV05 = 134;
  CV06 = 135;
  CV07 = 136;
  CV08 = 137;
  CV09 = 138;
  CV10 = 139;
  CV11 = 140;
  CV12 = 141;
  CV13 = 142;
  CV14 = 143;
  CV15 = 144;
  CV16 = 145;
  CV17 = 146;
  CV18 = 147;
  CV19 = 148;
  CV20 = 149;
  CV21 = 150;
  CV22 = 151;
  CV23 = 152;
  CV24 = 153;
  CV25 = 154;
  CV26 = 155;
  CV27 = 156;
  CV28 = 157;
  CV29 = 158;
  CV30 = 159;
  CV31 = 160;
  CV32 = 161;
  CV33 = 162;
  CV34 = 163;
  CV35 = 164;
  CV36 = 165;
  CV37 = 166;
  CV38 = 167;
  CV39 = 168;
  CV40 = 169;
  CV41 = 170;
  CV42 = 171;
  CV43 = 172;
  CV44 = 173;
  CV45 = 174;
  CV46 = 175;
  CV47 = 176;
  CV48 = 177;
  CV49 = 178;
  CV50 = 179;
  CV51 = 180;
  CV52 = 181;
  CV53 = 182;
  CV54 = 183;
  CV55 = 184;
  CV56 = 185;
  CV57 = 186;
  CV58 = 187;
  CV59 = 188;
  CV60 = 189;
  CV61 = 190;
  CV62 = 191;
  CV63 = 192;
  CV64 = 193;
  CV65 = 194;
  CV66 = 195;
  CV67 = 196;
  CV68 = 197;
  CV69 = 198;
  CV70 = 199;
  CV71 = 200;
  CV72 = 201;
  CV73 = 202;
  CV74 = 203;
  CV75 = 204;
  CV76 = 205;
  CV77 = 206;
  CV78 = 207;
  CV79 = 208;
  CV80 = 209;
  CV81 = 210;
  CV82 = 211;
  CV83 = 212;
  CV84 = 213;
  CV85 = 214;
  CV86 = 215;
  CV87 = 216;
  CV88 = 217;
  CV89 = 218;
  CV90 = 219;
  CV91 = 220;
  CV92 = 221;
  CV93 = 222;
  CV94 = 223;
  CV95 = 224;
  CV96 = 225;
  CV97 = 226;
  CV98 = 227;
  CV99 = 228;
}

struct ExportConstraint {
  ExportConstraintType type;
  float value;
}

struct GUIDMapping {
  GUID from;
  GUID to;
}

struct Blob {
  byte[] bytes;
}

message Image {
  byte[] hash = 1;
  string name = 2;
  uint dataBlob = 3;
}

message Video {
  byte[] hash = 1;
  string s3Url = 2;
}

struct FilterColorAdjust {
  float tint;
  float shadows;
  float highlights;
  float detail;
  float exposure;
  float vignette;
  float temperature;
  float vibrance;
}

message PaintFilterMessage {
  float tint = 1;
  float shadows = 2;
  float highlights = 3;
  float detail = 4 [deprecated];
  float exposure = 5;
  float vignette = 6 [deprecated];
  float temperature = 7;
  float vibrance = 8;
  float contrast = 9;
  float brightness = 10 [deprecated];
}

// Variable binding embedded in Paint - discovered via WS sniffing 2026-01
// Figma wire format: 15 01 04 01 {sessionID varint} {localID varint}
// - 15 = field 21 in Paint
// - 01 = always 1 (binding type for color)
// - 04 = field 4
// - 01 = always 1 (flag)
// - then GUID as raw sessionID + localID varints (no field numbers)
// NOTE: kiwi-schema cannot produce this exact format, handled manually in codec
message PaintVariableBinding {
  uint bindingType = 1;  // Always 1 for color
  uint flag = 2;         // Placeholder  
  uint flag2 = 3;        // Placeholder
  GUID variableID = 4;   // Variable GUID
}

message Paint {
  PaintType type = 1;
  Color color = 2;
  float opacity = 3;
  bool visible = 4;
  BlendMode blendMode = 5;
  ColorStop[] stops = 6;
  Matrix transform = 7;
  Image image = 8;
  Image imageThumbnail = 9;
  Image animatedImage = 16;
  uint animationFrame = 17;
  ImageScaleMode imageScaleMode = 10;
  float rotation = 11;
  float scale = 12;
  FilterColorAdjust filterColorAdjust = 13 [deprecated];
  PaintFilterMessage paintFilter = 14;
  uint[] emojiCodePoints = 15;
  Video video = 18;
  uint originalImageWidth = 19;
  uint originalImageHeight = 20;
  PaintVariableBinding variableBinding = 21; // Not in .fig files. Discovered via WS sniffing 2026-01
}

message FontMetaData {
  FontName key = 1;
  float fontLineHeight = 2;
  byte[] fontDigest = 3;
  FontStyle fontStyle = 4;
  int fontWeight = 5;
}

message FontVariation {
  uint axisTag = 1;
  string axisName = 2;
  float value = 3;
}

message TextData {
  string characters = 1;
  uint[] characterStyleIDs = 2;
  NodeChange[] styleOverrideTable = 3;
  Vector layoutSize = 4;
  Baseline[] baselines = 5;
  Glyph[] glyphs = 6;
  Decoration[] decorations = 7;
  uint layoutVersion = 8;
  FontMetaData[] fontMetaData = 9;
  FontName[] fallbackFonts = 10;
  HyperlinkBox[] hyperlinkBoxes = 11;
  TextLineData[] lines = 12;
  int truncationStartIndex = 13;
  float truncatedHeight = 14;
}

message HyperlinkBox {
  Rect bounds = 1;
  string url = 2;
  GUID guid = 3;
  int hyperlinkID = 4;
}

message Baseline {
  Vector position = 1;
  float width = 2;
  float lineY = 3;
  float lineHeight = 4;
  float lineAscent = 7;
  uint firstCharacter = 5;
  uint endCharacter = 6;
}

message Glyph {
  uint commandsBlob = 1;
  Vector position = 2;
  uint styleID = 3;
  float fontSize = 4;
  uint firstCharacter = 5;
  float advance = 6;
}

message Decoration {
  Rect[] rects = 1;
  uint styleID = 2;
}

message DerivedTextData {
  Vector layoutSize = 1;
  Baseline[] baselines = 2;
  Glyph[] glyphs = 3;
  Decoration[] decorations = 4;
  FontMetaData[] fontMetaData = 6;
  HyperlinkBox[] hyperlinkBoxes = 7;
  int truncationStartIndex = 8;
  float truncatedHeight = 9;
}

message VectorData {
  uint vectorNetworkBlob = 1;
  Vector normalizedSize = 2;
  NodeChange[] styleOverrideTable = 3;
}

message GUIDPath {
  GUID[] guids = 1;
}

message SymbolData {
  GUID symbolID = 1;
  NodeChange[] symbolOverrides = 2;
  float uniformScaleFactor = 3;
}

message GUIDPathMapping {
  GUID id = 1;
  GUIDPath path = 2;
}

message NodeGenerationData {
  NodeChange[] overrides = 1;
}

message DerivedImmutableFrameData {
  NodeChange[] overrides = 1;
  uint version = 2;
}

message SharedSymbolReference {
  string fileKey = 1;
  GUID symbolID = 2;
  string versionHash = 3;
  GUIDPathMapping[] guidPathMappings = 4;
  byte[] bytes = 5;
  GUIDMapping[] libraryGUIDToSubscribingGUID = 6 [deprecated];
  string componentKey = 7;
  GUIDPathMapping[] unflatteningMappings = 8;
  bool isUnflattened = 9;
}

message SharedComponentMasterData {
  string componentKey = 1;
  GUIDPathMapping[] publishingGUIDPathToTeamLibraryGUID = 2;
  bool isUnflattened = 3;
}

message InstanceOverrideStash {
  GUIDPath overridePathOfSwappedInstance = 1;
  string componentKey = 2;
  NodeChange[] overrides = 3;
}

message InstanceOverrideStashV2 {
  GUIDPath overridePathOfSwappedInstance = 1;
  GUID localSymbolID = 2;
  NodeChange[] overrides = 3;
}

message Effect {
  EffectType type = 1;
  Color color = 2;
  Vector offset = 3;
  float radius = 4;
  bool visible = 5;
  BlendMode blendMode = 6;
  float spread = 7;
  bool showShadowBehindNode = 8;
}

message TransitionInfo {
  TransitionType type = 1;
  float duration = 2;
}

enum PrototypeDeviceType {
  NONE = 0;
  PRESET = 1;
  CUSTOM = 2;
  PRESENTATION = 3;
}

enum DeviceRotation {
  NONE = 0;
  CCW_90 = 1;
}

message PrototypeDevice {
  PrototypeDeviceType type = 1;
  Vector size = 2;
  string presetIdentifier = 3;
  DeviceRotation rotation = 4;
}

enum OverlayPositionType {
  CENTER = 0;
  TOP_LEFT = 1;
  TOP_CENTER = 2;
  TOP_RIGHT = 3;
  BOTTOM_LEFT = 4;
  BOTTOM_CENTER = 5;
  BOTTOM_RIGHT = 6;
  MANUAL = 7;
}

enum OverlayBackgroundInteraction {
  NONE = 0;
  CLOSE_ON_CLICK_OUTSIDE = 1;
}

enum OverlayBackgroundType {
  NONE = 0;
  SOLID_COLOR = 1;
}

message OverlayBackgroundAppearance {
  OverlayBackgroundType backgroundType = 1;
  Color backgroundColor = 2;
}

enum NavigationType {
  NAVIGATE = 0;
  OVERLAY = 1;
  SWAP = 2;
  SWAP_STATE = 3;
  SCROLL_TO = 4;
}

message ExportSettings {
  string suffix = 1;
  ImageType imageType = 2;
  ExportConstraint constraint = 3;
  bool svgDataName = 4;
  ExportSVGIDMode svgIDMode = 5;
  bool svgOutlineText = 6;
  bool contentsOnly = 7;
  bool svgForceStrokeMasks = 8;
  bool useAbsoluteBounds = 9;
}

enum ExportSVGIDMode {
  IF_NEEDED = 0;
  ALWAYS = 1;
}

message LayoutGrid {
  LayoutGridType type = 1;
  Axis axis = 2;
  bool visible = 3;
  int numSections = 4;
  float offset = 5;
  float sectionSize = 6;
  float gutterSize = 7;
  Color color = 8;
  LayoutGridPattern pattern = 9;
}

message Guide {
  Axis axis = 1;
  float offset = 2;
  GUID guid = 3;
}

message Path {
  WindingRule windingRule = 1;
  uint commandsBlob = 2;
  uint styleID = 3;
}

enum StyleType {
  NONE = 0;
  FILL = 1;
  STROKE = 2;
  TEXT = 3;
  EFFECT = 4;
  EXPORT = 5;
  GRID = 6;
}

message SharedStyleReference {
  string styleKey = 1;
  string versionHash = 2;
}

message SharedStyleMasterData {
  string styleKey = 1;
  string sortPosition = 2;
  string fileKey = 3;
}

enum ScrollBehavior {
  SCROLLS = 0;
  FIXED_WHEN_CHILD_OF_SCROLLING_FRAME = 1;
}

message ArcData {
  float startingAngle = 1;
  float endingAngle = 2;
  float innerRadius = 3;
}

message SymbolLink {
  string uri = 1;
  string displayName = 2;
  string displayText = 3;
}

message PluginData {
  string pluginID = 1;
  string value = 2;
  string key = 3;
}

message PluginRelaunchData {
  string pluginID = 1;
  string message = 2;
  string command = 3;
  bool isDeleted = 4;
}

enum ConnectorMagnet {
  NONE = 0;
  AUTO = 1;
  TOP = 2;
  LEFT = 3;
  BOTTOM = 4;
  RIGHT = 5;
}

message ConnectorEndpoint {
  GUID endpointNodeID = 1;
  Vector position = 2;
  ConnectorMagnet magnet = 3;
}

message ConnectorControlPoint {
  Vector position = 1;
  Vector axis = 2;
}

enum ConnectorTextSection {
  MIDDLE_TO_START = 0;
  MIDDLE_TO_END = 1;
}

message ConnectorTextMidpoint {
  ConnectorTextSection section = 1;
  float offset = 2;
}

enum ConnectorLineStyle {
  ELBOWED = 0;
  STRAIGHT = 1;
}

message LibraryMoveInfo {
  string oldKey = 1;
  string pasteFileKey = 2;
}

message LibraryMoveHistoryItem {
  GUID sourceNodeId = 1;
  string sourceComponentKey = 2;
}

message WidgetPointer {
  GUID nodeId = 1;
}

enum EditorType {
  DESIGN = 0;
  WHITEBOARD = 1;
}

message NodeChange {
  GUID guid = 1;
  uint guidTag = 53 [deprecated];
  NodePhase phase = 2;
  uint phaseTag = 54 [deprecated];
  ParentIndex parentIndex = 3;
  uint parentIndexTag = 55 [deprecated];
  NodeType type = 4;
  uint typeTag = 56 [deprecated];
  string name = 5;
  uint nameTag = 57 [deprecated];
  bool visible = 6;
  uint visibleTag = 58 [deprecated];
  bool locked = 7;
  uint lockedTag = 59 [deprecated];
  float opacity = 8;
  uint opacityTag = 60 [deprecated];
  BlendMode blendMode = 9;
  uint blendModeTag = 61 [deprecated];
  uint count = 10;
  uint countTag = 62 [deprecated];
  Vector size = 11;
  uint sizeTag = 63 [deprecated];
  Matrix transform = 12;
  uint transformTag = 64 [deprecated];
  float[] dashPattern = 13;
  uint dashPatternTag = 65 [deprecated];
  bool autoRename = 14;
  uint autoRenameTag = 66 [deprecated];
  bool backgroundEnabled = 15;
  uint backgroundEnabledTag = 67 [deprecated];
  bool mask = 16;
  uint maskTag = 68 [deprecated];
  bool exportContentsOnly = 17;
  uint exportContentsOnlyTag = 69 [deprecated];
  bool maskIsOutline = 18;
  uint maskIsOutlineTag = 70 [deprecated];
  float backgroundOpacity = 19;
  uint backgroundOpacityTag = 71 [deprecated];
  float cornerRadius = 20;
  uint cornerRadiusTag = 72 [deprecated];
  float fontSize = 21;
  uint fontSizeTag = 73 [deprecated];
  float paragraphIndent = 22;
  uint paragraphIndentTag = 74 [deprecated];
  float paragraphSpacing = 23;
  uint paragraphSpacingTag = 75 [deprecated];
  float starInnerScale = 24;
  uint starInnerScaleTag = 76 [deprecated];
  float miterLimit = 25;
  uint miterLimitTag = 77 [deprecated];
  float strokeWeight = 26;
  uint strokeWeightTag = 78 [deprecated];
  float textTracking = 27;
  uint textTrackingTag = 79 [deprecated];
  ConstraintType horizontalConstraint = 28;
  uint horizontalConstraintTag = 80 [deprecated];
  StrokeAlign strokeAlign = 29;
  uint strokeAlignTag = 81 [deprecated];
  StrokeCap strokeCap = 30;
  uint strokeCapTag = 82 [deprecated];
  StrokeJoin strokeJoin = 31;
  uint strokeJoinTag = 83 [deprecated];
  TextAlignHorizontal textAlignHorizontal = 32;
  uint textAlignHorizontalTag = 84 [deprecated];
  TextAlignVertical textAlignVertical = 33;
  uint textAlignVerticalTag = 85 [deprecated];
  TextCase textCase = 34;
  uint textCaseTag = 86 [deprecated];
  TextDecoration textDecoration = 35;
  uint textDecorationTag = 87 [deprecated];
  BooleanOperation booleanOperation = 36;
  uint booleanOperationTag = 88 [deprecated];
  ConstraintType verticalConstraint = 37;
  uint verticalConstraintTag = 89 [deprecated];
  Paint[] fillPaints = 38;
  uint fillPaintsTag = 90 [deprecated];
  Paint[] strokePaints = 39;
  uint strokePaintsTag = 91 [deprecated];
  Number lineHeight = 40;
  uint lineHeightTag = 92 [deprecated];
  FontName fontName = 41;
  uint fontNameTag = 93 [deprecated];
  TextData textData = 42;
  uint textDataTag = 94 [deprecated];
  Effect[] effects = 43;
  uint effectsTag = 95 [deprecated];
  VectorMirror handleMirroring = 44;
  uint handleMirroringTag = 96 [deprecated];
  ExportSettings[] exportSettings = 45;
  uint exportSettingsTag = 97 [deprecated];
  TextAutoResize textAutoResize = 46;
  uint textAutoResizeTag = 98 [deprecated];
  LayoutGrid[] layoutGrids = 47;
  uint layoutGridsTag = 99 [deprecated];
  VectorData vectorData = 48;
  uint vectorDataTag = 100 [deprecated];
  uint styleID = 49;
  uint styleIDTag = 101 [deprecated];
  Color backgroundColor = 50;
  uint backgroundColorTag = 102 [deprecated];
  Path[] fillGeometry = 51;
  uint fillGeometryTag = 103 [deprecated];
  Path[] strokeGeometry = 52;
  uint strokeGeometryTag = 104 [deprecated];
  StackMode stackMode = 105;
  uint stackModeTag = 106 [deprecated];
  float stackSpacing = 107;
  uint stackSpacingTag = 108 [deprecated];
  float stackPadding = 109;
  uint stackPaddingTag = 110 [deprecated];
  GUIDPath guidPath = 111;
  uint guidPathTag = 112 [deprecated];
  SymbolData symbolData = 113;
  uint symbolDataTag = 114 [deprecated];
  bool frameMaskDisabled = 115;
  uint frameMaskDisabledTag = 116 [deprecated];
  bool resizeToFit = 117;
  uint resizeToFitTag = 118 [deprecated];
  bool exportBackgroundDisabled = 119;
  StackCounterAlign stackCounterAlign = 120;
  StackJustify stackJustify = 121;
  SharedSymbolReference sharedSymbolReference = 122;
  bool isSymbolPublishable = 123;
  GUIDPathMapping[] sharedSymbolMappings = 124;
  NodeChange[] derivedSymbolData = 125;
  string sharedSymbolVersion = 126;
  bool fontVariantCommonLigatures = 127;
  bool fontVariantContextualLigatures = 128;
  bool fontVariantDiscretionaryLigatures = 129;
  bool fontVariantHistoricalLigatures = 130;
  bool fontVariantOrdinal = 131;
  bool fontVariantSlashedZero = 132;
  FontVariantNumericFigure fontVariantNumericFigure = 133;
  FontVariantNumericSpacing fontVariantNumericSpacing = 134;
  FontVariantNumericFraction fontVariantNumericFraction = 135;
  FontVariantCaps fontVariantCaps = 136;
  FontVariantPosition fontVariantPosition = 137;
  Guide[] guides = 138;
  GUID transitionNodeID = 139;
  GUID prototypeStartNodeID = 140;
  Color prototypeBackgroundColor = 141;
  bool internalOnly = 142;
  GUID overriddenSymbolID = 143;
  string symbolDescription = 144;
  float rectangleTopLeftCornerRadius = 145;
  float rectangleTopRightCornerRadius = 146;
  float rectangleBottomLeftCornerRadius = 147;
  float rectangleBottomRightCornerRadius = 148;
  bool rectangleCornerRadiiIndependent = 149;
  bool rectangleCornerToolIndependent = 150;
  bool proportionsConstrained = 151;
  SharedComponentMasterData sharedComponentMasterData = 152;
  TransitionInfo transitionInfo = 153 [deprecated];
  TransitionType transitionType = 154;
  float transitionDuration = 155;
  EasingType easingType = 156;
  ScrollDirection scrollDirection = 159;
  float cornerSmoothing = 160;
  GUID inheritFillStyleID = 158;
  GUID inheritStrokeStyleID = 162;
  GUID inheritTextStyleID = 167;
  GUID inheritExportStyleID = 168;
  GUID inheritEffectStyleID = 169;
  GUID inheritGridStyleID = 170;
  GUID inheritFillStyleIDForStroke = 185;
  bool isFillStyle = 157 [deprecated];
  bool isStrokeStyle = 161 [deprecated];
  StyleType styleType = 163;
  string styleDescription = 191;
  GUIDPathMapping[] unflatteningMappings = 164;
  Number letterSpacing = 165;
  Vector scrollOffset = 166 [deprecated];
  string version = 171;
  SharedStyleMasterData sharedStyleMasterData = 172;
  SharedStyleReference sharedStyleReference = 173;
  bool isPublishable = 174;
  bool exportTextAsSVGText = 175;
  bool isSoftDeletedStyle = 176;
  bool isNonUpdateable = 177;
  ScrollContractedState scrollContractedState = 178 [deprecated];
  Vector contractedSize = 179 [deprecated];
  string fixedChildrenDivider = 180 [deprecated];
  bool transitionPreserveScroll = 181;
  ConnectionType connectionType = 182;
  string connectionURL = 183;
  PrototypeDevice prototypeDevice = 184;
  ScrollBehavior scrollBehavior = 186;
  InteractionType interactionType = 187;
  float transitionTimeout = 188;
  bool interactionMaintained = 189;
  float interactionDuration = 190;
  bool destinationIsOverlay = 192 [deprecated];
  Paint[] backgroundPaints = 193;
  GUID inheritFillStyleIDForBackground = 194;
  ArcData arcData = 195;
  int derivedSymbolDataLayoutVersion = 196;
  NavigationType navigationType = 197;
  OverlayPositionType overlayPositionType = 198;
  Vector overlayRelativePosition = 199;
  OverlayBackgroundInteraction overlayBackgroundInteraction = 200;
  OverlayBackgroundAppearance overlayBackgroundAppearance = 201;
  string fontVersion = 202;
  uint textUserLayoutVersion = 203;
  PluginData[] pluginData = 204;
  OpenTypeFeature[] toggledOnOTFeatures = 205;
  OpenTypeFeature[] toggledOffOTFeatures = 206;
  bool transitionShouldSmartAnimate = 207;
  StackAlign stackAlign = 208 [deprecated];
  float stackHorizontalPadding = 209;
  float stackVerticalPadding = 210;
  StackSize stackWidth = 211 [deprecated];
  StackSize stackHeight = 212 [deprecated];
  GUID overrideKey = 213;
  string publishFile = 214;
  GUID publishID = 215;
  string componentKey = 216;
  bool isC2 = 217;
  string publishedVersion = 218;
  PluginRelaunchData[] pluginRelaunchData = 219;
  bool containerSupportsFillStrokeAndCorners = 220;
  StackSize stackCounterSizing = 221;
  bool containersSupportFillStrokeAndCorners = 222 [deprecated];
  Hyperlink hyperlink = 223;
  KeyTrigger keyTrigger = 224;
  bool isStateGroup = 225;
  PrototypeInteraction[] prototypeInteractions = 226;
  string voiceEventPhrase = 227;
  GUIDPathMapping[] forceUnflatteningMappings = 228;
  StackSize stackPrimarySizing = 229;
  StackJustify stackPrimaryAlignItems = 230;
  StackAlign stackCounterAlignItems = 231;
  float stackChildPrimaryGrow = 232;
  float stackPaddingRight = 233;
  float stackPaddingBottom = 234;
  GUID[] ancestorPathBeforeDeletion = 235;
  StackCounterAlign stackChildAlignSelf = 236;
  SymbolLink[] symbolLinks = 237;
  StateGroupPropertyValueOrder[] stateGroupPropertyValueOrders = 238;
  TextListData textListData = 239;
  NodeGenerationData nodeGenerationData = 240;
  ShapeWithTextType shapeWithTextType = 241;
  ConnectorEndpoint connectorStart = 242;
  ConnectorEndpoint connectorEnd = 243;
  ConnectorLineStyle connectorLineStyle = 244;
  StrokeCap connectorStartCap = 245;
  StrokeCap connectorEndCap = 246;
  float shapeUserHeight = 247;
  InstanceOverrideStash[] overrideStash = 248;
  PrototypeStartingPoint prototypeStartingPoint = 249;
  InstanceOverrideStashV2[] overrideStashV2 = 250 [deprecated];
  InternalEnumForTest internalEnumForTest = 251;
  string originComponentKey = 252 [deprecated];
  ConnectorControlPoint[] connectorControlPoints = 253;
  DerivedImmutableFrameData derivedImmutableFrameData = 254;
  ConnectorTextMidpoint connectorTextMidpoint = 255;
  LibraryMoveInfo libraryMoveInfo = 256;
  InternalDataForTest internalDataForTest = 257;
  bool useAbsoluteBounds = 258 [deprecated];
  CodeBlockLanguage codeBlockLanguage = 259;
  FontVariation[] fontVariations = 260;
  bool detachOpticalSizeFromFontSize = 261;
  WidgetMetadata widgetMetadata = 262;
  WidgetEvent[] widgetEvents = 263;
  float listSpacing = 264;
  WidgetPropertyMenuItem[] widgetPropertyMenuItems = 265;
  ComponentPropDef[] componentPropDefs = 266;
  ComponentPropRef[] componentPropRefs = 267;
  ComponentPropAssignment[] componentPropAssignments = 268;
  StackPositioning stackPositioning = 269;
  EmbedData embedData = 270;
  bool stackReverseZIndex = 271;
  RichMediaData richMediaData = 272;
  MultiplayerMap widgetSyncedState = 273;
  uint widgetSyncCursor = 274 [deprecated];
  WidgetDerivedSubtreeCursor widgetDerivedSubtreeCursor = 275 [deprecated];
  WidgetPointer widgetCachedAncestor = 276;
  MultiplayerMap renderedSyncedState = 277;
  LinkPreviewData linkPreviewData = 278;
  uint textBidiVersion = 279;
  TextTruncation textTruncation = 280;
  LibraryMoveHistoryItem[] libraryMoveHistory = 281;
  bool shapeTruncates = 282;
  bool sectionContentsHidden = 283;
  bool simplifyInstancePanels = 284;
  WidgetInputBehavior widgetInputBehavior = 285;
  string widgetTooltip = 286;
  bool borderTopHidden = 287 [deprecated];
  bool borderBottomHidden = 288 [deprecated];
  bool borderLeftHidden = 289 [deprecated];
  bool borderRightHidden = 290 [deprecated];
  WidgetHoverStyle widgetHoverStyle = 291;
  bool hasHadRTLText = 292;
  bool isWidgetStickable = 293;
  bool bordersTakeSpace = 294;
  float borderTopWeight = 295;
  float borderBottomWeight = 296;
  float borderLeftWeight = 297;
  float borderRightWeight = 298;
  bool borderStrokeWeightsIndependent = 299;
  VideoPlayback videoPlayback = 300;
  StampData stampData = 301;
  HTMLTag htmlTag = 302;
  ARIARole ariaRole = 303;
  string accessibleLabel = 304;
  bool propsAreBubbled = 305;
  VariableData variableData = 306;
  VariableDataMap variableConsumptionMap = 307;
  VariableSetMode[] variableSetModes = 312;
  VariableSetID variableSetID = 313;
  VariableResolvedDataType variableResolvedType = 314;
  VariableDataValues variableDataValues = 315;
  VariableScope[] variableScopes = 353;
  DerivedTextData derivedTextData = 359;
  uint gridRowCount = 435;
  uint gridColumnCount = 436;
  float gridRowGap = 437;
  float gridColumnGap = 438;
  GridTrackSize[] gridColumnSizes = 474;
  GridTrackSize[] gridRowSizes = 475;
  StackWrap stackWrap = 476;
  float stackCounterSpacing = 477;
}

message VideoPlayback {
  bool autoplay = 1;
  bool mediaLoop = 2;
  bool muted = 3;
}

message WidgetHoverStyle {
  Paint[] fillPaints = 1;
  Paint[] strokePaints = 2;
  float opacity = 3;
  bool areFillPaintsSet = 4;
  bool areStrokePaintsSet = 5;
  bool isOpacitySet = 6;
}

message WidgetDerivedSubtreeCursor {
  uint sessionID = 1;
  uint counter = 2;
}

message MultiplayerMap {
  MultiplayerMapEntry[] entries = 1;
}

message MultiplayerMapEntry {
  string key = 1;
  string value = 2;
}

message ComponentPropRef {
  uint nodeField = 1;
  GUID defID = 2;
  string zombieFallbackName = 3;
  ComponentPropNodeField componentPropNodeField = 4;
  bool isDeleted = 5;
}

enum ComponentPropNodeField {
  VISIBLE = 0;
  TEXT_DATA = 1;
  OVERRIDDEN_SYMBOL_ID = 2;
  INHERIT_FILL_STYLE_ID = 3;
}

message ComponentPropAssignment {
  GUID defID = 1;
  ComponentPropValue value = 2;
}

message ComponentPropDef {
  GUID id = 1;
  string name = 2;
  ComponentPropValue initialValue = 3;
  string sortPosition = 4;
  GUID parentPropDefId = 5;
  ComponentPropType type = 6;
  bool isDeleted = 7;
  ComponentPropPreferredValues preferredValues = 8;
}

message ComponentPropValue {
  bool boolValue = 1;
  TextData textValue = 2;
  GUID guidValue = 3;
}

enum ComponentPropType {
  BOOL = 0;
  TEXT = 1;
  COLOR = 2;
  INSTANCE_SWAP = 3;
}

message ComponentPropPreferredValues {
  string[] stringValues = 1;
}

enum WidgetEvent {
  MOUSE_DOWN = 0;
  CLICK = 1;
  TEXT_EDIT_END = 2;
  ATTACHED_STICKABLES_CHANGED = 3;
  STUCK_STATUS_CHANGED = 4;
}

enum WidgetInputBehavior {
  WRAP = 0;
  TRUNCATE = 1;
  MULTILINE = 2;
}

message WidgetMetadata {
  string pluginID = 1;
  string pluginVersionID = 2;
  string widgetName = 3;
}

enum WidgetPropertyMenuItemType {
  ACTION = 0;
  SEPARATOR = 1;
  COLOR = 2;
  DROPDOWN = 3;
  COLOR_SELECTOR = 4;
  TOGGLE = 5;
  LINK = 6;
}

message WidgetPropertyMenuSelectorOption {
  string option = 1;
  string tooltip = 2;
}

message WidgetPropertyMenuItem {
  string propertyName = 1;
  string tooltip = 2;
  WidgetPropertyMenuItemType itemType = 3;
  string icon = 4;
  WidgetPropertyMenuSelectorOption[] options = 5;
  string selectedOption = 6;
  bool isToggled = 7;
  string href = 8;
}

enum CodeBlockLanguage {
  TYPESCRIPT = 0;
  CPP = 1;
  RUBY = 2;
  CSS = 3;
  JAVASCRIPT = 4;
  HTML = 5;
  JSON = 6;
  GRAPHQL = 7;
  PYTHON = 8;
  GO = 9;
  SQL = 10;
  SWIFT = 11;
  KOTLIN = 12;
  RUST = 13;
}

enum InternalEnumForTest {
  OLD = 1;
}

message InternalDataForTest {
  int testFieldA = 1;
}

message StateGroupPropertyValueOrder {
  string property = 1;
  string[] values = 2;
}

message TextListData {
  int listID = 1 [deprecated];
  BulletType bulletType = 2;
  int indentationLevel = 3;
  int lineNumber = 4 [deprecated];
}

message TextLineData {
  LineType lineType = 1;
  int indentationLevel = 2;
  Directionality directionality = 3;
  DirectionalityIntent directionalityIntent = 4;
}

enum BulletType {
  ORDERED = 0;
  UNORDERED = 1;
  INDENT = 2;
  NO_LIST = 3;
}

enum LineType {
  PLAIN = 0;
  ORDERED_LIST = 1;
  UNORDERED_LIST = 2;
}

enum Directionality {
  LTR = 0;
  RTL = 1;
}

enum DirectionalityIntent {
  IMPLICIT = 0;
  EXPLICIT = 1;
}

message PrototypeInteraction {
  GUID id = 1;
  PrototypeEvent event = 2;
  PrototypeAction[] actions = 3;
  bool isDeleted = 4;
}

message PrototypeEvent {
  InteractionType interactionType = 1;
  bool interactionMaintained = 2;
  float interactionDuration = 3;
  KeyTrigger keyTrigger = 4;
  string voiceEventPhrase = 5;
  float transitionTimeout = 6;
}

message PrototypeAction {
  GUID transitionNodeID = 1;
  TransitionType transitionType = 2;
  float transitionDuration = 3;
  EasingType easingType = 4;
  float transitionTimeout = 5 [deprecated];
  bool transitionShouldSmartAnimate = 6;
  ConnectionType connectionType = 7;
  string connectionURL = 8;
  Vector overlayRelativePosition = 9;
  NavigationType navigationType = 10;
  bool transitionPreserveScroll = 11;
  float[] easingFunction = 12;
  Vector extraScrollOffset = 13;
  GUID targetVariableID = 14;
}

message PrototypeStartingPoint {
  string name = 1;
  string description = 2;
  string position = 3;
}

enum TriggerDevice {
  KEYBOARD = 0;
  UNKNOWN_CONTROLLER = 1;
  XBOX_ONE = 2;
  PS4 = 3;
  SWITCH_PRO = 4;
}

message KeyTrigger {
  int[] keyCodes = 1;
  TriggerDevice triggerDevice = 2;
}

message Hyperlink {
  string url = 1;
  GUID guid = 2;
}

message EmbedData {
  string url = 1;
  string srcUrl = 2;
  string title = 3;
  string thumbnailUrl = 4;
  float width = 5;
  float height = 6;
  string embedType = 7;
  string thumbnailImageHash = 8;
  string faviconImageHash = 9;
  string provider = 10;
  string originalText = 11;
  string description = 12;
}

message StampData {
  string userId = 1;
}

message LinkPreviewData {
  string url = 1;
  string title = 2;
  string provider = 3;
  string description = 4;
  string thumbnailImageHash = 5;
  string faviconImageHash = 6;
  float thumbnailImageWidth = 7;
  float thumbnailImageHeight = 8;
}

message Viewport {
  Rect canvasSpaceBounds = 1;
  bool pixelPreview = 2;
  float pixelDensity = 3;
  GUID canvasGuid = 4;
}

message Mouse {
  MouseCursor cursor = 1;
  Vector canvasSpaceLocation = 2;
  Rect canvasSpaceSelectionBox = 3;
  GUID canvasGuid = 4;
}

struct Click {
  uint id;
  Vector point;
}

struct ScrollPosition {
  GUID node;
  Vector scrollOffset;
}

struct TriggeredOverlay {
  GUID overlayGuid;
  GUID hotspotGuid;
  GUID swapGuid;
}

message TriggeredOverlayData {
  GUID overlayGuid = 1;
  GUID hotspotGuid = 2;
  GUID swapGuid = 3;
  GUID prototypeInteractionGuid = 4;
  GUIDPath hotspotBlueprintId = 5;
}

message PresentedState {
  GUID baseScreenID = 1;
  TriggeredOverlayData[] overlays = 2;
}

enum TransitionDirection {
  FORWARD = 0;
  REVERSE = 1;
}

message TopLevelPlaybackChange {
  PresentedState oldState = 1;
  PresentedState newState = 2;
  GUIDPath hotspotBlueprintID = 3;
  GUID interactionID = 4;
  bool isHotspotInNewPresentedState = 5;
  TransitionDirection direction = 6;
  GUIDPath instanceStablePath = 7;
}

message InstanceStateChange {
  GUID stateID = 1;
  GUID interactionID = 2;
  GUIDPath hotspotStablePath = 3;
  GUIDPath instanceStablePath = 4;
  PlaybackChangePhase phase = 5;
}

enum PlaybackChangePhase {
  INITIATED = 0;
  ABORTED = 1;
  COMMITTED = 2;
}

message PlaybackChangeKeyframe {
  PlaybackChangePhase phase = 1;
  float progress = 2;
  float timestamp = 3;
}

message StateMapping {
  GUIDPath stablePath = 1;
  TopLevelPlaybackChange lastTopLevelChange = 2;
  PlaybackChangeKeyframe lastTopLevelChangeStatus = 3;
  float timestamp = 4;
}

message ScrollMapping {
  GUIDPath blueprintID = 1;
  uint overlayIndex = 2;
  Vector scrollOffset = 3;
}

message PlaybackUpdate {
  TopLevelPlaybackChange lastTopLevelChange = 1;
  PlaybackChangeKeyframe lastTopLevelChangeStatus = 2;
  ScrollMapping[] scrollMappings = 3;
  float timestamp = 4;
  Vector pointerLocation = 5;
  bool isTopLevelFrameChange = 6;
  StateMapping[] stateMappings = 7;
}

message ChatMessage {
  string text = 1;
  string previousText = 2;
}

message VoiceMetadata {
  string connectedCallId = 1;
}

message UserChange {
  uint sessionID = 1;
  bool connected = 2;
  string name = 3;
  Color color = 4;
  string imageURL = 5;
  Viewport viewport = 6;
  Mouse mouse = 7;
  GUID[] selection = 8;
  uint[] observing = 9;
  string deviceName = 10;
  Click[] recentClicks = 11;
  ScrollPosition[] scrollPositions = 12;
  TriggeredOverlay[] triggeredOverlays = 13 [deprecated];
  string userID = 14;
  GUID lastTriggeredHotspot = 15;
  GUID lastTriggeredPrototypeInteractionID = 16;
  TriggeredOverlayData[] triggeredOverlaysData = 17;
  PlaybackUpdate[] playbackUpdates = 18 [deprecated];
  ChatMessage chatMessage = 19;
  VoiceMetadata voiceMetadata = 20;
  bool canWrite = 21;
  bool highFiveStatus = 22;
  InstanceStateChange[] instanceStateChanges = 23;
}

message SceneGraphQuery {
  GUID startingNode = 1;
  uint depth = 2;
}

message NodeChangesMetadata {
  uint blobsFieldOffset = 1;
}

message CursorReaction {
  string imageUrl = 1;
}

message TimerInfo {
  bool isPaused = 1;
  uint timeRemainingMs = 2;
  uint totalTimeMs = 3;
  uint timerID = 4;
  string setBy = 5;
}

message PresenterInfo {
  uint sessionID = 1;
}

message ClientBroadcast {
  uint sessionID = 1;
  CursorReaction cursorReaction = 2;
  TimerInfo timer = 3;
  PresenterInfo presenter = 4;
}

message Message {
  MessageType type = 1;
  uint sessionID = 2;
  uint ackID = 3;
  NodeChange[] nodeChanges = 4;
  UserChange[] userChanges = 5;
  Blob[] blobs = 6;
  string signalName = 7;
  Access access = 8;
  string styleSetName = 9;
  StyleSetType styleSetType = 10;
  StyleSetContentType styleSetContentType = 11;
  int pasteID = 12;
  Vector pasteOffset = 13;
  string pasteFileKey = 14;
  string signalPayload = 15;
  SceneGraphQuery[] sceneGraphQueries = 16;
  NodeChangesMetadata nodeChangesMetadata = 17 [deprecated];
  uint fileVersion = 18;
  bool pasteIsPartiallyOutsideEnclosingFrame = 19;
  GUID pastePageId = 20;
  bool isCut = 21;
  Message[] localUndoStack = 22;
  Message[] localRedoStack = 23;
  ClientBroadcast[] broadcasts = 24;
  uint reconnectSequenceNumber = 25;
  string pasteBranchSourceFileKey = 26;
  EditorType pasteEditorType = 27;
  uint reserved28 = 28;
  uint64 timestamp = 38;
}

message DiffChunk {
  uint[] nodeChanges = 1;
  NodePhase phase = 2 [deprecated];
  NodeChange displayNode = 3;
  GUID canvasId = 4;
  string canvasName = 5;
  bool canvasIsInternal = 6;
  uint[] chunksAffectingThisChunk = 7;
  NodeChange[] basisParentHierarchy = 8;
  NodeChange[] parentHierarchy = 9;
}

message DiffPayload {
  NodeChange[] nodeChanges = 1;
  Blob[] blobs = 2;
  DiffChunk[] diffChunks = 3;
  NodeChange[] diffBasis = 4;
}

enum RichMediaType {
  ANIMATED_IMAGE = 0;
}

message RichMediaData {
  string mediaHash = 1;
  RichMediaType richMediaType = 2;
}

enum VariableDataType {
  BOOLEAN = 0;
  FLOAT = 1;
  STRING = 2;
  ALIAS = 3;
  COLOR = 4;
}

enum VariableResolvedDataType {
  BOOLEAN = 0;
  FLOAT = 1;
  STRING = 2;
  COLOR = 4;
}

message VariableID {
  GUID guid = 1;
}

message VariableSetID {
  GUID guid = 1;
}

message VariableAnyValue {
  bool boolValue = 1;
  string textValue = 2;
  float floatValue = 3;
  VariableID alias = 4;
  Color colorValue = 5;
}

message VariableData {
  VariableAnyValue value = 1;
  VariableDataType dataType = 2;
  VariableResolvedDataType resolvedDataType = 3;
}

message VariableSetMode {
  GUID id = 1;
  string name = 2;
  string sortPosition = 3;
}

message VariableDataValuesEntry {
  GUID modeID = 1;
  VariableData variableData = 2;
}

message VariableDataValues {
  VariableDataValuesEntry[] entries = 1;
}

enum VariableScope {
  ALL_SCOPES = 0;
  TEXT_CONTENT = 1;
  CORNER_RADIUS = 2;
  WIDTH_HEIGHT = 3;
  GAP = 4;
  ALL_FILLS = 5;
  FRAME_FILL = 6;
  SHAPE_FILL = 7;
  TEXT_FILL = 8;
  STROKE = 9;
  STROKE_FLOAT = 10;
  EFFECT_FLOAT = 11;
  EFFECT_COLOR = 12;
  OPACITY = 13;
  FONT_FAMILY = 15;
  FONT_SIZE = 16;
  LINE_HEIGHT = 17;
  LETTER_SPACING = 18;
}

enum VariableField {
  MISSING = 0;
  CORNER_RADIUS = 1;
  STROKE_WEIGHT = 4;
  STACK_SPACING = 5;
  STACK_PADDING_LEFT = 6;
  STACK_PADDING_TOP = 7;
  STACK_PADDING_RIGHT = 8;
  STACK_PADDING_BOTTOM = 9;
  VISIBLE = 10;
  WIDTH = 12;
  HEIGHT = 13;
  RECTANGLE_TOP_LEFT_CORNER_RADIUS = 14;
  RECTANGLE_TOP_RIGHT_CORNER_RADIUS = 15;
  RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS = 16;
  RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS = 17;
  OPACITY = 31;
  FONT_SIZE = 32;
  LETTER_SPACING = 34;
  LINE_HEIGHT = 36;
  STACK_COUNTER_SPACING = 23;
}

message VariableDataMapEntry {
  uint nodeField = 1;
  VariableData variableData = 2;
  VariableField variableField = 3;
}

message VariableDataMap {
  VariableDataMapEntry[] entries = 1;
}

enum HTMLTag {
  AUTO = 0;
  ARTICLE = 1;
  SECTION = 2;
  NAV = 3;
  ASIDE = 4;
  H1 = 5;
  H2 = 6;
  H3 = 7;
  H4 = 8;
  H5 = 9;
  H6 = 10;
  HGROUP = 11;
  HEADER = 12;
  FOOTER = 13;
  ADDRESS = 14;
  P = 15;
  HR = 16;
  PRE = 17;
  BLOCKQUOTE = 18;
  OL = 19;
  UL = 20;
  MENU = 21;
  LI = 22;
  DL = 23;
  DT = 24;
  DD = 25;
  FIGURE = 26;
  FIGCAPTION = 27;
  MAIN = 28;
  DIV = 29;
  A = 30;
  EM = 31;
  STRONG = 32;
  SMALL = 33;
  S = 34;
  CITE = 35;
  Q = 36;
  DFN = 37;
  ABBR = 38;
  RUBY = 39;
  RT = 40;
  RP = 41;
  DATA = 42;
  TIME = 43;
  CODE = 44;
  VAR = 45;
  SAMP = 46;
  KBD = 47;
  SUB = 48;
  SUP = 49;
  I = 50;
  B = 51;
  U = 52;
  MARK = 53;
  BDI = 54;
  BDO = 55;
  SPAN = 56;
  BR = 57;
  WBR = 58;
  PICTURE = 59;
  SOURCE = 60;
  IMG = 61;
  FORM = 62;
  LABEL = 63;
  INPUT = 64;
  BUTTON = 65;
  SELECT = 66;
  DATALIST = 67;
  OPTGROUP = 68;
  OPTION = 69;
  TEXTAREA = 70;
  OUTPUT = 71;
  PROGRESS = 72;
  METER = 73;
  FIELDSET = 74;
  LEGEND = 75;
}

enum ARIARole {
  AUTO = 0;
  BUTTON = 1;
  CHECKBOX = 2;
  GRIDCELL = 3;
  LINK = 4;
  MENUITEM = 5;
  MENUITEMCHECKBOX = 6;
  MENUITEMRADIO = 7;
  OPTION = 8;
  PROGRESSBAR = 9;
  RADIO = 10;
  SCROLLBAR = 11;
  SEARCHBOX = 12;
  SEPARATOR = 13;
  SLIDER = 14;
  SPINBUTTON = 15;
  SWITCH = 16;
  TAB = 17;
  TABPANEL = 18;
  TEXTBOX = 19;
  TREEITEM = 20;
  COMBOBOX = 21;
  GRID = 22;
  LISTBOX = 23;
  MENU = 24;
  MENUBAR = 25;
  RADIOGROUP = 26;
  TABLIST = 27;
  TREE = 28;
  TREEGRID = 29;
  APPLICATION = 30;
  ARTICLE = 31;
  BLOCKQUOTE = 32;
  CAPTION = 33;
  CELL = 34;
  COLUMNHEADER = 35;
  DEFINITION = 36;
  DELETION = 37;
  DIRECTORY = 38;
  DOCUMENT = 39;
  EMPHASIS = 40;
  FEED = 41;
  FIGURE = 42;
  GENERIC = 43;
  GROUP = 44;
  HEADING = 45;
  IMG = 46;
  INSERTION = 47;
  LIST = 48;
  LISTITEM = 49;
  MATH = 50;
  METER = 51;
  NONE = 52;
  NOTE = 53;
  PARAGRAPH = 54;
  PRESENTATION = 55;
  ROW = 56;
  ROWGROUP = 57;
  ROWHEADER = 58;
  STRONG = 59;
  SUBSCRIPT = 60;
  SUPERSCRIPT = 61;
  TABLE = 62;
  TERM = 63;
  TIME = 64;
  TOOLBAR = 65;
  TOOLTIP = 66;
  BANNER = 67;
  COMPLEMENTARY = 68;
  CONTENTINFO = 69;
  FORM = 70;
  MAIN = 71;
  NAVIGATION = 72;
  REGION = 73;
  SEARCH = 74;
  ALERT = 75;
  LOG = 76;
  MARQUEE = 77;
  STATUS = 78;
  TIMER = 79;
  ALERTDIALOG = 80;
  DIALOG = 81;
}
`),Nt=null;async function Pt(){Nt||=at(Mt)}function Ft(){if(!Nt)throw Error(`Codec not initialized`);return Nt}function It(){return lt(Mt)}function Lt(e,t,n,r,i,a,o,s,c){let l=1-c,u=l*l,d=c*c,f=u*l,p=3*u*c,m=3*l*d,h=d*c;return{x:f*e+p*n+m*i+h*o,y:f*t+p*r+m*a+h*s}}function Rt(e,t,n,r,i){let a=1-i,o=a*e.x+i*t.x,s=a*e.y+i*t.y,c=a*t.x+i*n.x,l=a*t.y+i*n.y,u=a*n.x+i*r.x,d=a*n.y+i*r.y,f=a*o+i*c,p=a*s+i*l,m=a*c+i*u,h=a*l+i*d,g=a*f+i*m,_=a*p+i*h;return{left:{p0:{x:e.x,y:e.y},cp1:{x:o,y:s},cp2:{x:f,y:p},p3:{x:g,y:_}},right:{p0:{x:g,y:_},cp1:{x:m,y:h},cp2:{x:u,y:d},p3:{x:r.x,y:r.y}}}}function zt(e,t){let n=e.segments[t],r=e.vertices[n.start],i=e.vertices[n.end];return{p0:{x:r.x,y:r.y},cp1:{x:r.x+n.tangentStart.x,y:r.y+n.tangentStart.y},cp2:{x:i.x+n.tangentEnd.x,y:i.y+n.tangentEnd.y},p3:{x:i.x,y:i.y}}}function Bt(e){return e.tangentStart.x===0&&e.tangentStart.y===0&&e.tangentEnd.x===0&&e.tangentEnd.y===0}function Vt(e,t,n,r){let i=-e+3*t-3*n+r,a=2*(e-2*t+n),o=-e+t,s=[],c=1e-12;if(Math.abs(i)<c){if(Math.abs(a)>c){let e=-o/a;e>0&&e<1&&s.push(e)}}else{let e=a*a-4*i*o;if(e>=0){let t=Math.sqrt(e),n=(-a+t)/(2*i),r=(-a-t)/(2*i);n>0&&n<1&&s.push(n),r>0&&r<1&&Math.abs(r-n)>c&&s.push(r)}}return s}function Ht(e){let{vertices:t,segments:n}=e;if(t.length===0)return{x:0,y:0,width:0,height:0};let r=1/0,i=1/0,a=-1/0,o=-1/0,s=(e,t)=>{e<r&&(r=e),t<i&&(i=t),e>a&&(a=e),t>o&&(o=t)};for(let e of t)s(e.x,e.y);for(let t=0;t<n.length;t++){let{p0:n,cp1:r,cp2:i,p3:a}=zt(e,t);for(let e of Vt(n.x,r.x,i.x,a.x)){let t=Lt(n.x,n.y,r.x,r.y,i.x,i.y,a.x,a.y,e);s(t.x,t.y)}for(let e of Vt(n.y,r.y,i.y,a.y)){let t=Lt(n.x,n.y,r.x,r.y,i.x,i.y,a.x,a.y,e);s(t.x,t.y)}}return{x:r,y:i,width:a-r,height:o-i}}function Ut(e,t,n,r,i,a,o=64){let s=0,c=1/0;for(let l=0;l<=o;l++){let u=l/o,d=Lt(n.x,n.y,r.x,r.y,i.x,i.y,a.x,a.y,u),f=d.x-e,p=d.y-t,m=f*f+p*p;m<c&&(c=m,s=u)}let l=Math.max(0,s-1/o),u=Math.min(1,s+1/o);for(let o=0;o<5;o++){let o=(u-l)/4,d=l,f=1/0;for(let s=0;s<=4;s++){let c=l+o*s,u=Lt(n.x,n.y,r.x,r.y,i.x,i.y,a.x,a.y,c),p=u.x-e,m=u.y-t,h=p*p+m*m;h<f&&(f=h,d=c)}s=d,c=f,l=Math.max(0,s-o),u=Math.min(1,s+o)}let d=Lt(n.x,n.y,r.x,r.y,i.x,i.y,a.x,a.y,s);return{t:s,x:d.x,y:d.y,distance:Math.sqrt(c)}}function Wt(e,t,n,r){let i=r.x-n.x,a=r.y-n.y,o=i*i+a*a,s;s=o<1e-12?0:Math.max(0,Math.min(1,((e-n.x)*i+(t-n.y)*a)/o));let c=n.x+s*i,l=n.y+s*a,u=c-e,d=l-t;return{t:s,x:c,y:l,distance:Math.sqrt(u*u+d*d)}}function Gt(e,t,n,r){let i=null;for(let a=0;a<n.segments.length;a++){let o=n.segments[a],s;if(Bt(o)){let r=n.vertices[o.start],i=n.vertices[o.end];s=Wt(e,t,r,i)}else{let{p0:r,cp1:i,cp2:o,p3:c}=zt(n,a);s=Ut(e,t,r,i,o,c)}s.distance<=r&&(!i||s.distance<i.distance)&&(i={...s,segmentIndex:a})}return i}function Kt(e,t,n){let r=e.segments[t],i=e.vertices[r.start],a=e.vertices[r.end],o=e.vertices.length,s=[...e.vertices],c=[...e.segments];if(Bt(r)){let l=i.x+n*(a.x-i.x),u=i.y+n*(a.y-i.y);s.push({x:l,y:u,handleMirroring:`NONE`});let d={start:r.start,end:o,tangentStart:{x:0,y:0},tangentEnd:{x:0,y:0}},f={start:o,end:r.end,tangentStart:{x:0,y:0},tangentEnd:{x:0,y:0}},p=c.length;return c[t]=d,c.push(f),{network:{vertices:s,segments:c,regions:$t(e.regions,t,[t,p],e.segments)},newVertexIndex:o}}let{p0:l,cp1:u,cp2:d,p3:f}=zt(e,t),{left:p,right:m}=Rt(l,u,d,f,n);s.push({x:p.p3.x,y:p.p3.y,handleMirroring:`ANGLE_AND_LENGTH`});let h={start:r.start,end:o,tangentStart:{x:p.cp1.x-i.x,y:p.cp1.y-i.y},tangentEnd:{x:p.cp2.x-p.p3.x,y:p.cp2.y-p.p3.y}},g={start:o,end:r.end,tangentStart:{x:m.cp1.x-p.p3.x,y:m.cp1.y-p.p3.y},tangentEnd:{x:m.cp2.x-a.x,y:m.cp2.y-a.y}},_=c.length;return c[t]=h,c.push(g),{network:{vertices:s,segments:c,regions:$t(e.regions,t,[t,_],e.segments)},newVertexIndex:o}}function qt(e,t,n,r,i){let a=t[n[0]],o=t[n[1]],s=a.start===r?a.end:a.start,c=o.start===r?o.end:o.start,l=a.start===r?{x:a.tangentEnd.x,y:a.tangentEnd.y}:{x:a.tangentStart.x,y:a.tangentStart.y},u=o.start===r?{x:o.tangentEnd.x,y:o.tangentEnd.y}:{x:o.tangentStart.x,y:o.tangentStart.y},d=e[s],f=e[r],p=e[c],m=Math.hypot(f.x-d.x,f.y-d.y),h=m+Math.hypot(p.x-f.x,p.y-f.y),g=h>1e-6?m/h:.5,_=1-g,v=_>1e-6?1/_:1,y=g>1e-6?1/g:1,b={x:l.x*v,y:l.y*v},x={x:u.x*y,y:u.y*y},S=Lt(d.x,d.y,d.x+b.x,d.y+b.y,p.x+x.x,p.y+x.y,p.x,p.y,g),C=Math.hypot(S.x-f.x,S.y-f.y)<h*.05?{tangentStart:b,tangentEnd:x}:Jt(d,f,p,l,u,_,g);return{start:i(s),end:i(c),tangentStart:C.tangentStart,tangentEnd:C.tangentEnd}}function Jt(e,t,n,r,i,a,o){let s=3*a*a*o,c=3*a*o*o,l={x:t.x-(a*a*a+s)*e.x-(o*o*o+c)*n.x,y:t.y-(a*a*a+s)*e.y-(o*o*o+c)*n.y},u=s*r.x*c*i.y-s*r.y*c*i.x;if(Math.abs(u)>1e-9){let e=(l.x*c*i.y-l.y*c*i.x)/u,t=(s*r.x*l.y-s*r.y*l.x)/u;return{tangentStart:{x:e*r.x,y:e*r.y},tangentEnd:{x:t*i.x,y:t*i.y}}}let d={x:t.x-e.x,y:t.y-e.y},f={x:t.x-n.x,y:t.y-n.y},p={x:s*d.x+c*f.x,y:s*d.y+c*f.y},m=1;return Math.abs(p.x)>Math.abs(p.y)?p.x!==0&&(m=l.x/p.x):p.y!==0&&(m=l.y/p.y),{tangentStart:{x:m*d.x,y:m*d.y},tangentEnd:{x:m*f.x,y:m*f.y}}}function G(e,t,n,r){let i=[],a=new Map,o=-1;for(let s=0;s<e.length;s++){if(!n.has(s)){let n=e[s];a.set(s,i.length),i.push({start:t(n.start),end:t(n.end),tangentStart:{...n.tangentStart},tangentEnd:{...n.tangentEnd}});continue}if(!r){a.set(s,null);continue}o===-1&&(o=i.length,i.push(r)),a.set(s,o)}return{segments:i,indexMap:a}}function Yt(e,t){let{vertices:n,segments:r,regions:i}=e,a=[];for(let e=0;e<r.length;e++)(r[e].start===t||r[e].end===t)&&a.push(e);if(n.length<=1)return null;let o=n.filter((e,n)=>n!==t),s=e=>e>t?e-1:e;if(a.length===2){let e=qt(n,r,a,t,s),c=G(r,s,new Set(a),e),l=Qt(i,c.indexMap);return{vertices:o,segments:c.segments,regions:l}}let c=G(r,s,new Set(a)),l=Qt(i,c.indexMap);return{vertices:o,segments:c.segments,regions:l}}function Xt(e,t){let{vertices:n,segments:r}=e;if(n.length<=1)return null;let i=new Set;for(let e=0;e<r.length;e++)(r[e].start===t||r[e].end===t)&&i.add(e);let a=n.filter((e,n)=>n!==t),o=e=>e>t?e-1:e,s=[];for(let e=0;e<r.length;e++)i.has(e)||s.push({...r[e],start:o(r[e].start),end:o(r[e].end)});return{vertices:a,segments:s,regions:[]}}function Zt(e,t){let{vertices:n,segments:r}=e,i=[],a=[];for(let e=0;e<r.length;e++){let n=r[e];n.end===t?i.push(e):n.start===t&&a.push(e)}if(i.length===0||a.length===0)return e;let o=n.length,s=[...n,{...n[t]}],c=r.map((e,t)=>a.includes(t)?{...e,start:o}:{...e});for(let e of i)c[e]={...c[e],tangentEnd:{x:0,y:0}};for(let e of a)c[e]={...c[e],tangentStart:{x:0,y:0}};return{vertices:s,segments:c,regions:[]}}function Qt(e,t){let n=[];for(let r of e){let e=[];for(let n of r.loops){let r=[];for(let e of n){let n=t.get(e);n!=null&&(r.length>0&&r[r.length-1]===n||r.push(n))}r.length>1&&r[0]===r[r.length-1]&&r.pop(),r.length>=2&&e.push(r)}e.length>0&&n.push({...r,loops:e})}return n}function $t(e,t,n,r){return e.map(e=>({...e,loops:e.loops.map(e=>{let i=[];for(let a=0;a<e.length;a++){if(e[a]!==t){i.push(e[a]);continue}if(!r||n.length<2){i.push(...n);continue}let o=r[t],s=r[e[(a+1)%e.length]];o.end===s.start||o.end===s.end?i.push(...n):i.push(...[...n].reverse())}return i})}))}function K(e,t,n){switch(t){case`NONE`:return null;case`ANGLE_AND_LENGTH`:return{x:-e.x,y:-e.y};case`ANGLE`:{let t=n??Math.hypot(e.x,e.y),r=Math.hypot(e.x,e.y);if(r<1e-9)return{x:0,y:0};let i=t/r;return{x:-e.x*i,y:-e.y*i}}}return null}function en(e,t,n){for(let r=0;r<e.segments.length;r++){if(r===n)continue;let i=e.segments[r];if(i.start===t)return{segmentIndex:r,tangentField:`tangentStart`};if(i.end===t)return{segmentIndex:r,tangentField:`tangentEnd`}}return null}function tn(e,t){let n=[];for(let r=0;r<e.segments.length;r++){let i=e.segments[r];i.start===t&&n.push({segmentIndex:r,tangentField:`tangentStart`,neighborIndex:i.end}),i.end===t&&n.push({segmentIndex:r,tangentField:`tangentEnd`,neighborIndex:i.start})}return n}function nn(e,t){let n=new DataView(e.buffer,e.byteOffset,e.byteLength),r=0,i=n.getUint32(r,!0);r+=4;let a=n.getUint32(r,!0);r+=4;let o=n.getUint32(r,!0);r+=4;let s=new Map;if(t)for(let e of t)s.set(e.styleID,e);let c=[];for(let e=0;e<i;e++){let e=n.getUint32(r,!0);r+=4;let t=n.getFloat32(r,!0);r+=4;let i=n.getFloat32(r,!0);r+=4;let a=s.get(e);c.push({x:t,y:i,handleMirroring:a?.handleMirroring??`NONE`})}let l=[];for(let e=0;e<a;e++){r+=4;let e=n.getUint32(r,!0);r+=4;let t=n.getFloat32(r,!0);r+=4;let i=n.getFloat32(r,!0);r+=4;let a=n.getUint32(r,!0);r+=4;let o=n.getFloat32(r,!0);r+=4;let s=n.getFloat32(r,!0);r+=4,l.push({start:e,end:a,tangentStart:{x:t,y:i},tangentEnd:{x:o,y:s}})}let u=[];for(let e=0;e<o;e++){let e=n.getUint32(r,!0);r+=4;let t=e===0?`EVENODD`:`NONZERO`,i=n.getUint32(r,!0);r+=4;let a=[];for(let e=0;e<i;e++){let e=n.getUint32(r,!0);r+=4;let t=[];for(let i=0;i<e;i++)t.push(n.getUint32(r,!0)),r+=4;a.push(t)}u.push({windingRule:t,loops:a})}return{vertices:c,segments:l,regions:u}}function rn(e){let t=new Map,n=[],r=1;for(let i of e.vertices){let e=i.handleMirroring??`NONE`;e!==`NONE`&&(t.has(e)||(t.set(e,r),n.push({styleID:r,handleMirroring:e}),r++))}return{table:n,mirroringToId:t}}function an(e,t){let{vertices:n,segments:r,regions:i}=e,a=0;for(let e of i){a+=8;for(let t of e.loops)a+=4+t.length*4}let o=12+n.length*12+r.length*28+a,s=new ArrayBuffer(o),c=new DataView(s),l=0;c.setUint32(l,n.length,!0),l+=4,c.setUint32(l,r.length,!0),l+=4,c.setUint32(l,i.length,!0),l+=4;for(let e of n){let n=e.handleMirroring??`NONE`,r=n!==`NONE`&&t?.get(n)||0;c.setUint32(l,r,!0),l+=4,c.setFloat32(l,e.x,!0),l+=4,c.setFloat32(l,e.y,!0),l+=4}for(let e of r)c.setUint32(l,0,!0),l+=4,c.setUint32(l,e.start,!0),l+=4,c.setFloat32(l,e.tangentStart.x,!0),l+=4,c.setFloat32(l,e.tangentStart.y,!0),l+=4,c.setUint32(l,e.end,!0),l+=4,c.setFloat32(l,e.tangentEnd.x,!0),l+=4,c.setFloat32(l,e.tangentEnd.y,!0),l+=4;for(let e of i){c.setUint32(l,e.windingRule===`EVENODD`?0:1,!0),l+=4,c.setUint32(l,e.loops.length,!0),l+=4;for(let t of e.loops){c.setUint32(l,t.length,!0),l+=4;for(let e of t)c.setUint32(l,e,!0),l+=4}}return new Uint8Array(s)}function on(e,t){let{vertices:n,segments:r,regions:i}=t;if(i.length>0){let t=[];for(let a of i){let i=new e.Path;for(let e of a.loops)sn(i,e,r,n);i.setFillType(a.windingRule===`EVENODD`?e.FillType.EvenOdd:e.FillType.Winding),t.push(i)}return t}let a=new e.Path,o=new Set,s=un(r,n.length);for(let e of s){if(e.length===0)continue;let t=ln(e,r);a.moveTo(n[t].x,n[t].y);for(let i of e){o.add(i);let e=r[i],s=e.start===t;cn(a,e,n,s),t=s?e.end:e.start}}for(let e=0;e<r.length;e++){if(o.has(e))continue;let t=r[e];a.moveTo(n[t.start].x,n[t.start].y),cn(a,t,n,!0)}return[a]}function sn(e,t,n,r){if(t.length===0)return;let i=n[t[0]],a;if(t.length===1)a=i.start;else{let e=n[t[1]];a=i.end===e.start||i.end===e.end?i.start:i.end}e.moveTo(r[a].x,r[a].y);for(let i of t){let t=n[i],o=t.start===a;cn(e,t,r,o),a=o?t.end:t.start}e.close()}function cn(e,t,n,r){let i=r?n[t.start]:n[t.end],a=r?n[t.end]:n[t.start],o=t.tangentStart,s=t.tangentEnd;o.x===0&&o.y===0&&s.x===0&&s.y===0?e.lineTo(a.x,a.y):r?e.cubicTo(i.x+o.x,i.y+o.y,a.x+s.x,a.y+s.y,a.x,a.y):e.cubicTo(i.x+s.x,i.y+s.y,a.x+o.x,a.y+o.y,a.x,a.y)}function ln(e,t){if(e.length<2)return t[e[0]].start;let n=t[e[0]],r=t[e[1]];return n.start===r.start||n.start===r.end?n.end:n.start}function un(e,t){if(e.length===0)return[];let n=new Map;for(let t=0;t<e.length;t++){let r=e[t];n.has(r.start)||n.set(r.start,[]),n.has(r.end)||n.set(r.end,[]),n.get(r.start)?.push(t),n.get(r.end)?.push(t)}let r=new Set,i=[],a=[...n.entries()].filter(([,e])=>e.length===1).map(([e])=>e),o=a.length>0?a:[e[0].start];for(let t of o){let a=t,o=[];for(;;){let t=n.get(a);if(!t)break;let i=t.find(e=>!r.has(e));if(i===void 0)break;r.add(i),o.push(i);let s=e[i];a=s.start===a?s.end:s.start}o.length>0&&i.push(o)}return i}function dn(e){return Ht(e)}var fn=0,pn=1,mn=2,hn=4;function gn(e,t,n){let r=new e.Path;if(!(t.buffer instanceof ArrayBuffer))return r;let i=new DataView(t.buffer,t.byteOffset,t.byteLength),a=0;for(;a<t.length;)switch(t[a++]){case fn:r.close();break;case pn:{let e=i.getFloat32(a,!0),t=i.getFloat32(a+4,!0);a+=8,r.moveTo(e,t);break}case mn:{let e=i.getFloat32(a,!0),t=i.getFloat32(a+4,!0);a+=8,r.lineTo(e,t);break}case hn:{let e=i.getFloat32(a,!0),t=i.getFloat32(a+4,!0),n=i.getFloat32(a+8,!0),o=i.getFloat32(a+12,!0),s=i.getFloat32(a+16,!0),c=i.getFloat32(a+20,!0);a+=24,r.cubicTo(e,t,n,o,s,c);break}default:return r}return r.setFillType(n===`EVENODD`?e.FillType.EvenOdd:e.FillType.Winding),r}var _n=`open-pencil`,vn=`textDirection`,yn=`layoutDirection`;function bn(e){return`${e.sessionID}:${e.localID}`}function xn(e){let[t,n]=e.split(`:`);return{sessionID:parseInt(t,10),localID:parseInt(n,10)}}var q={cornerRadius:`CORNER_RADIUS`,topLeftRadius:`RECTANGLE_TOP_LEFT_CORNER_RADIUS`,topRightRadius:`RECTANGLE_TOP_RIGHT_CORNER_RADIUS`,bottomLeftRadius:`RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS`,bottomRightRadius:`RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS`,strokeWeight:`STROKE_WEIGHT`,itemSpacing:`STACK_SPACING`,paddingLeft:`STACK_PADDING_LEFT`,paddingTop:`STACK_PADDING_TOP`,paddingRight:`STACK_PADDING_RIGHT`,paddingBottom:`STACK_PADDING_BOTTOM`,counterAxisSpacing:`STACK_COUNTER_SPACING`,visible:`VISIBLE`,opacity:`OPACITY`,width:`WIDTH`,height:`HEIGHT`,fontSize:`FONT_SIZE`,letterSpacing:`LETTER_SPACING`,lineHeight:`LINE_HEIGHT`},Sn=Object.fromEntries(Object.entries(q).map(([e,t])=>[t,e])),Cn=_;function wn(e){return Object.keys(e).sort((e,t)=>Number(e)-Number(t)).map(t=>e[Number(t)]).map(e=>e.toString(16).padStart(2,`0`)).join(``)}function Tn(e){if(e)return{m00:e.m00,m01:e.m01,m02:e.m02,m10:e.m10,m11:e.m11,m12:e.m12}}var En=null;function Dn(e){En=e}function On(e){let t=e.colorVar?.value?.alias;if(!(!t||!En)&&t.guid)return En(t.guid)??void 0}function kn(e){return e?e.map(e=>{let t={type:e.type,color:Cn(On(e)??e.color),opacity:e.opacity??1,visible:e.visible??!0,blendMode:e.blendMode??`NORMAL`};if(e.type.startsWith(`GRADIENT`)&&e.stops&&(t.gradientStops=e.stops.map(e=>({color:Cn(e.color),position:e.position})),e.transform&&(t.gradientTransform=Tn(e.transform))),e.type===`IMAGE`){if(e.image&&typeof e.image==`object`){let n=e.image;typeof n.hash==`object`?t.imageHash=wn(n.hash):typeof n.hash==`string`&&(t.imageHash=n.hash)}t.imageScaleMode=e.imageScaleMode??`FILL`,e.transform&&(t.imageTransform=Tn(e.transform))}return t}):[]}function An(e,t,n,r,i,a){if(!e)return[];let o=`CENTER`;return n===`INSIDE`?o=`INSIDE`:n===`OUTSIDE`&&(o=`OUTSIDE`),e.map(e=>({color:Cn(On(e)??e.color),weight:t??1,opacity:e.opacity??1,visible:e.visible??!0,align:o,cap:r??`NONE`,join:i??`MITER`,dashPattern:a??[]}))}function jn(e){return e?e.map(e=>({type:e.type,color:Cn(e.color),offset:e.offset??{x:0,y:0},radius:e.radius??0,spread:e.spread??0,visible:e.visible??!0,blendMode:e.blendMode??`NORMAL`})):[]}var Mn={DOCUMENT:`DOCUMENT`,VARIABLE:`VARIABLE`,CANVAS:`CANVAS`,FRAME:`FRAME`,RECTANGLE:`RECTANGLE`,ROUNDED_RECTANGLE:`ROUNDED_RECTANGLE`,ELLIPSE:`ELLIPSE`,TEXT:`TEXT`,LINE:`LINE`,STAR:`STAR`,REGULAR_POLYGON:`POLYGON`,VECTOR:`VECTOR`,BOOLEAN_OPERATION:`VECTOR`,GROUP:`GROUP`,SECTION:`SECTION`,COMPONENT:`COMPONENT`,COMPONENT_SET:`COMPONENT_SET`,INSTANCE:`INSTANCE`,SYMBOL:`COMPONENT`,CONNECTOR:`CONNECTOR`,SHAPE_WITH_TEXT:`SHAPE_WITH_TEXT`};function Nn(e){return e?Mn[e]??`RECTANGLE`:`RECTANGLE`}function Pn(e){switch(e){case`HORIZONTAL`:return`HORIZONTAL`;case`VERTICAL`:return`VERTICAL`;default:return`NONE`}}function J(e){switch(e){case`RESIZE_TO_FIT`:case`RESIZE_TO_FIT_WITH_IMPLICIT_SIZE`:return`HUG`;case`FILL`:return`FILL`;default:return`FIXED`}}function Fn(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`SPACE_BETWEEN`:return`SPACE_BETWEEN`;default:return`MIN`}}function In(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`BASELINE`:return`BASELINE`;default:return`MIN`}}function Ln(e){switch(e){case`MIN`:return`MIN`;case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`BASELINE`:return`BASELINE`;default:return`AUTO`}}function Rn(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`SCALE`:return`SCALE`;default:return`MIN`}}function zn(e){switch(e){case`UNDERLINE`:return`UNDERLINE`;case`STRIKETHROUGH`:return`STRIKETHROUGH`;default:return`NONE`}}function Bn(e,t){return e?e.units===`PIXELS`?e.value:e.units===`PERCENT`?e.value/100*(t??14):e.units===`RAW`?e.value*(t??14):null:null}function Vn(e,t){return e?e.units===`PIXELS`?e.value:e.units===`PERCENT`?e.value/100*(t??14):e.value:0}function Y(e){return e?{startingAngle:e.startingAngle??0,endingAngle:e.endingAngle??2*Math.PI,innerRadius:e.innerRadius??0}:null}function X(e,t){let n={};if(e.fontName&&(n.fontFamily=e.fontName.family,n.fontWeight=y(e.fontName.style),n.italic=e.fontName.style.toLowerCase().includes(`italic`)),e.fontSize!==void 0&&(n.fontSize=e.fontSize),e.letterSpacing&&(n.letterSpacing=Vn(e.letterSpacing,e.fontSize??t)),e.lineHeight){let r=Bn(e.lineHeight,e.fontSize??t);r!=null&&(n.lineHeight=r)}let r=e.textDecoration;if(r&&(n.textDecoration=zn(r)),e.fillPaints){let t=kn(e.fillPaints);t.length>0&&(n.fills=t)}return n}function Z(e,t){let n=new Map;for(let r of e){let e=r.styleID;if(e===void 0)continue;let i=X(r,t);Object.keys(i).length>0&&n.set(e,i)}return n}function Hn(e,t){let n=[],r=e[0],i=0;for(let a=1;a<=e.length;a++)if(a===e.length||e[a]!==r){if(r!==0){let e=t.get(r);e&&n.push({start:i,length:a-i,style:e})}a<e.length&&(r=e[a],i=a)}return n}function Un(e){let t=e.textData;if(!t?.characterStyleIDs||!t.styleOverrideTable)return[];let n=t.characterStyleIDs;if(n.length===0||t.styleOverrideTable.length===0)return[];let r=Z(t.styleOverrideTable,e.fontSize);return r.size===0?[]:Hn(n,r)}function Wn(e,t){let n=e.vectorData;if(n?.vectorNetworkBlob===void 0)return null;let r=n.vectorNetworkBlob;if(r<0||r>=t.length)return null;try{let i=nn(t[r],n.styleOverrideTable),a=n.normalizedSize,o=e.size?.x??0,s=e.size?.y??0;if(a&&o>0&&s>0&&(a.x!==o||a.y!==s)){let e=o/a.x,t=s/a.y;for(let n of i.vertices)n.x*=e,n.y*=t;for(let n of i.segments)n.tangentStart={x:n.tangentStart.x*e,y:n.tangentStart.y*t},n.tangentEnd={x:n.tangentEnd.x*e,y:n.tangentEnd.y*t}}return i}catch{return null}}function Gn(e,t){if(!e||e.length===0)return[];let n=[];for(let r of e){if(r.commandsBlob===void 0||r.commandsBlob<0||r.commandsBlob>=t.length)continue;let e=t[r.commandsBlob];e.length!==0&&n.push({windingRule:r.windingRule===`EVENODD`?`EVENODD`:`NONZERO`,commandsBlob:e})}return n}function Kn(e){let t={};return e.fillPaints?.forEach((e,n)=>{e.colorVariableBinding&&(t[`fills/${n}/color`]=bn(e.colorVariableBinding.variableID))}),e.strokePaints?.forEach((e,n)=>{e.colorVariableBinding&&(t[`strokes/${n}/color`]=bn(e.colorVariableBinding.variableID))}),t}function qn(e){return(e.pluginData??[]).map(e=>({pluginId:e.pluginID,key:e.key,value:e.value}))}function Jn(e,t){return e.pluginData?.find(e=>e.pluginID===_n&&e.key===t)?.value??null}function Yn(e){return qn(e).map(e=>{let t=e.key.indexOf(`/`);return t===-1?{namespace:e.pluginId,key:e.key,value:e.value}:{namespace:e.key.slice(0,t),key:e.key.slice(t+1),value:e.value}})}function Xn(e){return(e.pluginRelaunchData??[]).map(e=>({pluginId:e.pluginID,command:e.command,message:e.message,isDeleted:e.isDeleted}))}function Zn(e){let t=e.transform?.m02??0,n=e.transform?.m12??0,r=e.size?.x??100,i=e.size?.y??100,a=0,o=!1;if(e.transform){e.transform.m00*e.transform.m11-e.transform.m01*e.transform.m10<0&&(o=!0);let t=o?-1:1;a=Math.atan2(e.transform.m10*t,e.transform.m00*t)*(180/Math.PI)}return{x:t,y:n,width:r,height:i,rotation:a,flipX:o,flipY:!1}}function Qn(e){return{cornerRadius:e.cornerRadius??0,topLeftRadius:e.rectangleTopLeftCornerRadius??e.cornerRadius??0,topRightRadius:e.rectangleTopRightCornerRadius??e.cornerRadius??0,bottomRightRadius:e.rectangleBottomRightCornerRadius??e.cornerRadius??0,bottomLeftRadius:e.rectangleBottomLeftCornerRadius??e.cornerRadius??0,independentCorners:e.rectangleCornerRadiiIndependent??!1,cornerSmoothing:e.cornerSmoothing??0}}function $n(e){return{text:e.textData?.characters??``,fontSize:e.fontSize??14,fontFamily:e.fontName?.family??`Inter`,fontWeight:y(e.fontName?.style??``),italic:e.fontName?.style.toLowerCase().includes(`italic`)??!1,textAlignHorizontal:e.textAlignHorizontal??`LEFT`,textAlignVertical:e.textAlignVertical??`TOP`,textAutoResize:e.textAutoResize??`NONE`,textCase:e.textCase??`ORIGINAL`,textDecoration:zn(e.textDecoration),lineHeight:Bn(e.lineHeight,e.fontSize),letterSpacing:Vn(e.letterSpacing,e.fontSize),maxLines:e.maxLines??null,styleRuns:Un(e),textTruncation:e.textTruncation===`ENDING`?`ENDING`:`DISABLED`,textDirection:Jn(e,vn)||`AUTO`}}function er(e){return{paddingTop:e.stackVerticalPadding??e.stackPadding??0,paddingBottom:e.stackPaddingBottom??e.stackVerticalPadding??e.stackPadding??0,paddingLeft:e.stackHorizontalPadding??e.stackPadding??0,paddingRight:e.stackPaddingRight??e.stackHorizontalPadding??e.stackPadding??0}}function tr(e){return{layoutMode:Pn(e.stackMode),itemSpacing:e.stackSpacing??0,...er(e),primaryAxisSizing:J(e.stackPrimarySizing),counterAxisSizing:J(e.stackCounterSizing),primaryAxisAlign:Fn(e.stackPrimaryAlignItems??e.stackJustify),counterAxisAlign:In(e.stackCounterAlignItems??e.stackCounterAlign),layoutWrap:e.stackWrap===`WRAP`?`WRAP`:`NO_WRAP`,counterAxisSpacing:e.stackCounterSpacing??0,layoutPositioning:e.stackPositioning===`ABSOLUTE`?`ABSOLUTE`:`AUTO`,layoutGrow:e.stackChildPrimaryGrow??0,layoutAlignSelf:Ln(e.stackChildAlignSelf),counterAxisAlignContent:e.stackCounterAlignContent===`SPACE_BETWEEN`?`SPACE_BETWEEN`:`AUTO`,itemReverseZIndex:e.stackReverseZIndex??!1,strokesIncludedInLayout:e.strokesIncludedInLayout??!1,layoutDirection:Jn(e,yn)||`AUTO`}}function nr(e,t){return{vectorNetwork:Wn(e,t),fillGeometry:Gn(e.fillGeometry,t),strokeGeometry:Gn(e.strokeGeometry,t),arcData:Y(e.arcData),strokeCap:e.strokeCap??`NONE`,strokeJoin:e.strokeJoin??`MITER`,dashPattern:e.dashPattern??[],borderTopWeight:e.borderTopWeight??0,borderRightWeight:e.borderRightWeight??0,borderBottomWeight:e.borderBottomWeight??0,borderLeftWeight:e.borderLeftWeight??0,independentStrokeWeights:e.borderStrokeWeightsIndependent??!1,strokeMiterLimit:4}}function rr(e,t){let n=Nn(e.type);return n===`FRAME`&&ir(e)&&(n=`COMPONENT_SET`),{nodeType:n,name:e.name??n,...Zn(e),opacity:e.opacity??1,visible:e.visible??!0,locked:e.locked??!1,blendMode:e.blendMode??`PASS_THROUGH`,fills:kn(e.fillPaints),strokes:An(e.strokePaints,e.strokeWeight,e.strokeAlign,e.strokeCap,e.strokeJoin,e.dashPattern??[]),effects:jn(e.effects),...Qn(e),...$n(e),horizontalConstraint:Rn(e.horizontalConstraint),verticalConstraint:Rn(e.verticalConstraint),...tr(e),...nr(e,t),minWidth:e.minWidth??null,maxWidth:e.maxWidth??null,minHeight:e.minHeight??null,maxHeight:e.maxHeight??null,isMask:e.isMask??!1,maskType:e.maskType??`ALPHA`,expanded:!0,autoRename:e.autoRename??!0,boundVariables:Kn(e),pluginData:qn(e),sharedPluginData:Yn(e),pluginRelaunchData:Xn(e),clipsContent:e.frameMaskDisabled===!1&&e.resizeToFit!==!0,componentId:or(e)}}function ir(e){let t=e.componentPropDefs;return t?.length?t.some(e=>e.type===`VARIANT`):!1}function ar(e,t,n){let r=t.stackMode;if(r===`HORIZONTAL`||r===`VERTICAL`){let t=r===`HORIZONTAL`?`m02`:`m12`;e.sort((e,r)=>(n.get(e)?.transform?.[t]??0)-(n.get(r)?.transform?.[t]??0))}else e.sort((e,t)=>{let r=n.get(e)?.parentIndex?.position??``,i=n.get(t)?.parentIndex?.position??``;return r<i?-1:r>i?1:0})}function or(e){let t=e.symbolData;return t?.symbolID?bn(t.symbolID):``}function sr(e,t,n){let i={};t.text!==n.text&&(i.text=t.text),t.visible!==n.visible&&(i.visible=t.visible),t.opacity!==n.opacity&&(i.opacity=t.opacity),t.fills!==n.fills&&(i.fills=l(t.fills)),t.strokes!==n.strokes&&(i.strokes=o(t.strokes)),t.effects!==n.effects&&(i.effects=u(t.effects)),t.styleRuns!==n.styleRuns&&(i.styleRuns=r(t.styleRuns)),t.layoutGrow!==n.layoutGrow&&(i.layoutGrow=t.layoutGrow),t.textAutoResize!==n.textAutoResize&&(i.textAutoResize=t.textAutoResize),t.locked!==n.locked&&(i.locked=t.locked),Object.keys(i).length>0&&e.updateNode(n.id,i)}function cr(e,t,n,r){let i=e.getNode(t);if(i){for(let t of Array.from(n.childIds))e.deleteNode(t);e.updateNode(n.id,{name:i.name,componentId:i.componentId}),sr(e,i,n),i.childIds.length>0&&e.populateInstanceChildren(n.id,t),r.add(n.id)}}function lr(e,t,n,r,i){let a=e.getNode(t),o=e.getNode(n);if(!a||!o)return;let s=Math.min(a.childIds.length,o.childIds.length);for(let t=0;t<s;t++){if(i?.has(o.childIds[t]))continue;let n=e.getNode(a.childIds[t]),s=e.getNode(o.childIds[t]);if(!(!n||!s||n.type!==s.type)){if(n.type===`INSTANCE`&&r.has(a.childIds[t])&&n.componentId!==s.componentId){cr(e,a.childIds[t],s,r);continue}sr(e,n,s),lr(e,a.childIds[t],o.childIds[t],r,i)}}}function ur(e){let t=new Map;for(let n of e.getAllNodes()){if(!n.componentId)continue;let e=t.get(n.componentId);e||(e=[],t.set(n.componentId,e)),e.push(n.id)}return t}function dr(e,t){let n=new Set(t);for(let r of t){let t=e.getNode(r);for(;t?.parentId;){let r=e.getNode(t.parentId);if(!r)break;(r.type===`INSTANCE`||r.type===`COMPONENT`)&&n.add(r.id),t=r}}return n}function fr(e,t){let n=new Set,r=[...e];for(let e=r.pop();e!==void 0;e=r.pop()){let i=t.get(e);if(i)for(let e of i)n.has(e)||(n.add(e),r.push(e))}return n}function pr(e,t,n,r,i){if(t.size===0)return;r.clear();let a=ur(e),o=dr(e,t),s=fr(o,a),c=i&&i.size>0?new Set([...t,...i]):t,l=new Set,u=[...o];for(let t=u.shift();t!==void 0;t=u.shift()){let r=a.get(t);if(!r)continue;let i=e.getNode(t);if(i)for(let a of r){if(!s.has(a)||l.has(a))continue;l.add(a);let r=e.getNode(a);if(r){if(c.has(a)){u.push(a);continue}if(sr(e,i,r),i.childIds.length!==r.childIds.length){for(let t of Array.from(r.childIds))e.deleteNode(t);i.childIds.length>0&&e.populateInstanceChildren(r.id,t)}else i.childIds.length>0&&r.childIds.length>0&&lr(e,t,r.id,n,c);u.push(a)}}}}function mr(e){let{graph:t}=e,n=new Set;for(let e of t.getAllNodes()){if(e.type!==`INSTANCE`||!e.componentId)continue;let r=t.getNode(e.componentId);if(!r||r.width<=0||r.height<=0||e.width===r.width&&e.height===r.height||e.layoutMode!==`NONE`)continue;let i=e.width/r.width,a=e.height/r.height;Math.abs(i-1)<.001&&Math.abs(a-1)<.001||hr(t,e,r,i,a,n)}n.size>0&&gr(t,n)}function hr(e,t,n,r,i,a){let o=Math.min(t.childIds.length,n.childIds.length);for(let s=0;s<o;s++){let o=e.getNode(t.childIds[s]),c=e.getNode(n.childIds[s]);if(!o||!c)continue;let l=o.horizontalConstraint===`SCALE`,u=o.verticalConstraint===`SCALE`;if(!l&&!u)continue;let d={};l&&(d.x=c.x*r,d.width=c.width*r),u&&(d.y=c.y*i,d.height=c.height*i),e.updateNode(o.id,d),a.add(o.id),o.childIds.length>0&&c.childIds.length>0&&hr(e,o,c,l?r:1,u?i:1,a)}}function gr(e,t){let n=ur(e),r=[...t],i=new Set;for(let t=r.shift();t!==void 0;t=r.shift()){let a=e.getNode(t);if(!a)continue;let o=n.get(t);if(o)for(let t of o){if(i.has(t))continue;i.add(t);let n=e.getNode(t);if(!n)continue;let o={};n.width!==a.width&&(o.width=a.width),n.height!==a.height&&(o.height=a.height),n.x!==a.x&&(o.x=a.x),n.y!==a.y&&(o.y=a.y),Object.keys(o).length>0&&e.updateNode(t,o),r.push(t)}}}var _r=20;function vr(e){function t(n,r=0){let i=e.preComputedRoot.get(n);if(i!==void 0)return i;if(r>_r)return n;let a=e.graph.getNode(n);if(a?.componentId&&a.componentId!==n){let i=t(a.componentId,r+1);return e.preComputedRoot.set(n,i),i}return e.preComputedRoot.set(n,n),n}for(let n of e.graph.getAllNodes())n.componentId&&t(n.id)}function yr(e,t,n=0){let r=e.componentIdRoot.get(t);if(r!==void 0)return r;if(n>_r)return e.componentIdRoot.set(t,t),t;let i=e.graph.getNode(t);if(i?.componentId){let r=yr(e,i.componentId,n+1);return e.componentIdRoot.set(t,r),r}let a=e.nodeIdToGuid.get(t);if(a){let r=e.changeMap.get(a)?.symbolData?.symbolID;if(r){let i=e.guidToNodeId.get(bn(r));if(i&&i!==t){let r=yr(e,i,n+1);return e.componentIdRoot.set(t,r),r}}}return e.componentIdRoot.set(t,t),t}function br(e,t,n){let r=e.graph.getNode(t);if(!r)return null;for(let t of r.childIds)if(e.graph.getNode(t)?.componentId===n)return t;let i=e.preComputedRoot.get(n)??yr(e,n);if(i){let t=null,n=!1;for(let a of r.childIds){let r=e.graph.getNode(a);if(r?.componentId&&(e.preComputedRoot.get(r.componentId)??yr(e,r.componentId))===i){if(t){n=!0;break}t=a}}if(t&&!n)return t}for(let t of r.childIds){let r=br(e,t,n);if(r)return r}return null}function xr(e,t,n){let r=t;for(let t of n){let n=bn(t),i=e.overrideKeyToGuid.get(n)??n,a=e.guidToNodeId.get(i);if(!a)return null;if(e.graph.getNode(r)?.componentId===a)continue;let o=br(e,r,a);if(o){r=o;continue}let s=e.graph.getNode(r);if(s?.childIds.length===1){r=s.childIds[0];continue}return null}return r}function Sr(e,t,n){let r=e.graph.getNode(t);if(r?.type!==`INSTANCE`)return;let i=r.componentId?yr(e,r.componentId):void 0,a=i?e.graph.getNode(i):void 0;for(let t of Array.from(r.childIds))e.graph.deleteNode(t);let o=e.graph.getNode(n),s={componentId:n};o?.name&&a?.name&&r.name===a.name&&(s.name=o.name),e.graph.updateNode(t,s),o&&o.childIds.length>0&&e.graph.populateInstanceChildren(t,n),e.componentIdRoot.clear()}function Cr(e,t,n){return t===1&&n===1?e:e.map(e=>{let r=e.commandsBlob.slice(),i=new DataView(r.buffer,r.byteOffset,r.byteLength),a=0;for(;a<r.length;){let e=r[a++];if(e===0)continue;let o=-1;if(e===1||e===2?o=1:e===4&&(o=3),o<0){console.warn(`scaleGeometryBlobs: unknown path command ${e} at offset ${a-1}`);break}for(let e=0;e<o;e++)i.setFloat32(a,i.getFloat32(a,!0)*t,!0),i.setFloat32(a+4,i.getFloat32(a+4,!0)*n,!0),a+=8}return{windingRule:e.windingRule,commandsBlob:r}})}function wr(e,t,n){let r={},i=Gn(e.fillGeometry,n),a=Gn(e.strokeGeometry,n);return i.length>0?r.fillGeometry=i:e.size&&t.fillGeometry.length>0&&t.width>0&&t.height>0&&(r.fillGeometry=Cr(t.fillGeometry,e.size.x/t.width,e.size.y/t.height)),a.length>0?r.strokeGeometry=a:e.size&&t.strokeGeometry.length>0&&t.width>0&&t.height>0&&(r.strokeGeometry=Cr(t.strokeGeometry,e.size.x/t.width,e.size.y/t.height)),r}function Tr(e){let t=new Set,n=new Set;for(let[r,i]of e.changeMap){if(i.type!==`INSTANCE`)continue;let a=i.derivedSymbolData;if(!a?.length)continue;let o=e.guidToNodeId.get(r);if(o)for(let r of a){let i=r.guidPath?.guids;if(!i?.length)continue;let a=xr(e,o,i);if(!a)continue;let s=e.graph.getNode(a);if(!s)continue;let c={};r.size&&(c.width=r.size.x,c.height=r.size.y),r.transform&&(c.x=r.transform.m02,c.y=r.transform.m12),Object.assign(c,wr(r,s,e.blobs)),Object.keys(c).length>0&&(e.graph.updateNode(a,c),t.add(a),r.size&&n.add(a))}}return{modified:t,sizeSet:n}}function Er(e,t,n){if(t.size===0)return;let r=ur(e.graph),i=[...t],o=new Set;for(let t=i.shift();t!==void 0;t=i.shift()){let s=e.graph.getNode(t);if(!s)continue;let c=r.get(t);if(c)for(let t of c){if(o.has(t))continue;o.add(t);let r=e.graph.getNode(t);if(r){if(!n.has(t)){let n={};s.width!==r.width&&(n.width=s.width),s.height!==r.height&&(n.height=s.height),s.x!==r.x&&(n.x=s.x),s.y!==r.y&&(n.y=s.y),s.fillGeometry!==r.fillGeometry&&(n.fillGeometry=a(s.fillGeometry)),s.strokeGeometry!==r.strokeGeometry&&(n.strokeGeometry=a(s.strokeGeometry)),Object.keys(n).length>0&&e.graph.updateNode(t,n)}i.push(t)}}}}function Dr(e){let{modified:t,sizeSet:n}=Tr(e);Er(e,t,n)}function Or(e){let t=new Set;function n(r){let i=e.getNode(r);if(i?.type!==`INSTANCE`||!i.componentId||i.childIds.length>0||t.has(r))return;t.add(r);let a=e.getNode(i.componentId);if(a){a.type===`INSTANCE`&&a.componentId&&a.childIds.length===0&&n(a.id);for(let t of a.childIds){let r=e.getNode(t);r?.type===`INSTANCE`&&r.componentId&&r.childIds.length===0&&n(t)}a.childIds.length>0&&i.childIds.length===0&&e.populateInstanceChildren(r,i.componentId)}}for(let t of e.getAllNodes())t.type===`INSTANCE`&&t.componentId&&t.childIds.length===0&&n(t.id);let r=!0;for(;r;){r=!1;for(let t of e.getAllNodes()){if(t.type!==`INSTANCE`||!t.componentId||t.childIds.length>0)continue;let n=e.getNode(t.componentId);n&&n.childIds.length>0&&(e.populateInstanceChildren(t.id,t.componentId),r=!0)}}}function kr(e){return e.boolValue===void 0&&e.textValue===void 0&&e.guidValue===void 0}function Ar(e,t,n){let r=t;for(let t=0;r&&t<10;t++){let t=e.nodeIdToGuid.get(r);if(t){let e=n.get(t);if(e)return e}let i=e.graph.getNode(r)?.componentId??void 0;if(i===r)break;r=i}}function jr(e,t,n=!1){let r=new Map;for(let i of t){if(!i.defID)continue;let t=bn(i.defID);if(n&&kr(i.value)){let n=e.propDefaults.get(t);if(n){r.set(t,n);continue}}r.set(t,i.value)}return r}function Mr(e,t,n,r,i){let a=e.graph.getNode(t);if(a)for(let t of a.childIds){let a=e.graph.getNode(t);if(!a?.componentId){Mr(e,t,n,r,i);continue}let o=Ar(e,a.componentId,r);if(o)for(let r of o){if(!r.defID)continue;let a=n.get(bn(r.defID));if(a){if(r.componentPropNodeField===`VISIBLE`&&a.boolValue!==void 0)e.graph.updateNode(t,{visible:a.boolValue}),i?.add(t);else if(r.componentPropNodeField===`OVERRIDDEN_SYMBOL_ID`){let n=a.textValue??(a.guidValue?bn(a.guidValue):void 0);if(!n)continue;let r=e.guidToNodeId.get(n);r&&(Sr(e,t,r),i?.add(t))}}}Mr(e,t,n,r,i)}}function Nr(e,t,n,r){for(let i of e.graph.getAllNodes()){if(i.type!==`INSTANCE`)continue;let a=e.nodeIdToGuid.get(i.id);if(!a)continue;let o=t.get(a);o&&Mr(e,i.id,jr(e,o),n,r)}}function Pr(e,t,n){for(let[r,i]of e.changeMap){let a=e.guidToNodeId.get(r);if(!a||e.graph.getNode(a)?.type!==`INSTANCE`)continue;let o=i.symbolData?.symbolOverrides;if(o)for(let r of o){if(!r.componentPropAssignments?.length)continue;let i=r.guidPath?.guids;if(!i?.length)continue;let o=xr(e,a,i);o&&Mr(e,o,jr(e,r.componentPropAssignments,!0),t,n)}}}function Fr(e){let t=new Set,n=new Map;for(let[t,r]of e.changeMap)r.componentPropRefs?.length&&n.set(t,r.componentPropRefs);if(n.size===0)return t;let r=new Map;for(let[t,n]of e.changeMap)n.componentPropAssignments?.length&&r.set(t,n.componentPropAssignments);return Nr(e,r,n,t),Pr(e,n,t),t}function Ir(e,t){if(e.textData!=null){let n=e.textData;n.characters!=null&&(t.text=n.characters);let r=Un(e);r.length>0&&(t.styleRuns=r)}e.fillPaints!=null&&(t.fills=kn(e.fillPaints)),e.strokePaints!=null&&(t.strokes=An(e.strokePaints,e.strokeWeight,e.strokeAlign)),e.effects!=null&&(t.effects=jn(e.effects)),e.visible!=null&&(t.visible=e.visible),e.opacity!=null&&(t.opacity=e.opacity),e.name!=null&&(t.name=e.name),e.locked!=null&&(t.locked=e.locked)}function Lr(e,t){if(e.size!=null){let n=e.size;n.x!=null&&(t.width=n.x),n.y!=null&&(t.height=n.y)}e.cornerRadius!=null&&(t.cornerRadius=e.cornerRadius),e.rectangleTopLeftCornerRadius!=null&&(t.topLeftRadius=e.rectangleTopLeftCornerRadius),e.rectangleTopRightCornerRadius!=null&&(t.topRightRadius=e.rectangleTopRightCornerRadius),e.rectangleBottomRightCornerRadius!=null&&(t.bottomRightRadius=e.rectangleBottomRightCornerRadius),e.rectangleBottomLeftCornerRadius!=null&&(t.bottomLeftRadius=e.rectangleBottomLeftCornerRadius),e.rectangleCornerRadiiIndependent!=null&&(t.independentCorners=e.rectangleCornerRadiiIndependent),e.arcData!=null&&(t.arcData=Y(e.arcData)),e.frameMaskDisabled!=null&&(t.clipsContent=e.frameMaskDisabled===!1)}function Rr(e,t){e.stackSpacing!=null&&(t.itemSpacing=e.stackSpacing),e.stackPrimarySizing!=null&&(t.primaryAxisSizing=J(e.stackPrimarySizing)),e.stackCounterSizing!=null&&(t.counterAxisSizing=J(e.stackCounterSizing)),e.stackPrimaryAlignItems!=null&&(t.primaryAxisAlign=Fn(e.stackPrimaryAlignItems)),e.stackCounterAlignItems!=null&&(t.counterAxisAlign=In(e.stackCounterAlignItems)),e.stackChildPrimaryGrow!=null&&(t.layoutGrow=e.stackChildPrimaryGrow),e.stackChildAlignSelf!=null&&(t.layoutAlignSelf=Ln(e.stackChildAlignSelf)),e.stackPositioning!=null&&(t.layoutPositioning=e.stackPositioning===`ABSOLUTE`?`ABSOLUTE`:`AUTO`),e.stackVerticalPadding!=null&&(t.paddingTop=e.stackVerticalPadding,e.stackPaddingBottom??(t.paddingBottom=e.stackVerticalPadding)),e.stackHorizontalPadding!=null&&(t.paddingLeft=e.stackHorizontalPadding,e.stackPaddingRight??(t.paddingRight=e.stackHorizontalPadding)),e.stackPaddingBottom!=null&&(t.paddingBottom=e.stackPaddingBottom),e.stackPaddingRight!=null&&(t.paddingRight=e.stackPaddingRight)}function zr(e,t){if(e.strokeWeight!=null&&!e.strokePaints&&(t.strokes=t.strokes??[]),e.strokeAlign!=null&&t.strokes){let n=`CENTER`;e.strokeAlign===`INSIDE`?n=`INSIDE`:e.strokeAlign===`OUTSIDE`&&(n=`OUTSIDE`);for(let e of t.strokes)e.align=n}e.borderTopWeight!=null&&(t.borderTopWeight=e.borderTopWeight),e.borderRightWeight!=null&&(t.borderRightWeight=e.borderRightWeight),e.borderBottomWeight!=null&&(t.borderBottomWeight=e.borderBottomWeight),e.borderLeftWeight!=null&&(t.borderLeftWeight=e.borderLeftWeight),e.borderStrokeWeightsIndependent!=null&&(t.independentStrokeWeights=e.borderStrokeWeightsIndependent)}function Br(e,t){if(e.fontName!=null){let n=e.fontName;n.family&&(t.fontFamily=n.family),n.style&&(t.fontWeight=y(n.style),t.italic=n.style.toLowerCase().includes(`italic`))}e.fontSize!=null&&(t.fontSize=e.fontSize),e.textAlignHorizontal!=null&&(t.textAlignHorizontal=e.textAlignHorizontal),e.textAutoResize!=null&&(t.textAutoResize=e.textAutoResize),e.lineHeight!=null&&(t.lineHeight=Bn(e.lineHeight,e.fontSize)),e.letterSpacing!=null&&(t.letterSpacing=Vn(e.letterSpacing,e.fontSize)),e.maxLines!=null&&(t.maxLines=e.maxLines),e.textTruncation!=null&&(t.textTruncation=e.textTruncation===`ENDING`?`ENDING`:`DISABLED`),e.textDecoration!=null&&(t.textDecoration=zn(e.textDecoration))}function Vr(e){let t={};return Ir(e,t),Lr(e,t),Rr(e,t),zr(e,t),Br(e,t),t}function Hr(e){let t=new Set;e.componentIdRoot.clear();for(let[n,r]of e.changeMap){if(r.type!==`INSTANCE`)continue;let i=r.symbolData?.symbolOverrides;if(!i?.length)continue;let a=e.guidToNodeId.get(n);if(a)for(let n of i){let r=n.guidPath?.guids;if(!r?.length)continue;let i=xr(e,a,r);if(!i||i===a&&e.kiwiPropertyNodes.has(a))continue;if(t.add(i),n.overriddenSymbolID){let t=bn(n.overriddenSymbolID),r=e.guidToNodeId.get(t);r&&(Sr(e,i,r),e.swappedInstances.add(i))}let{guidPath:o,overriddenSymbolID:s,componentPropAssignments:c,...l}=n;if(Object.keys(l).length===0)continue;let u=Vr(l);Object.keys(u).length>0&&e.graph.updateNode(i,u)}}return t}function Ur(e,t,n){let r=new Set;for(let[i,a]of n){let n=t.get(i);if(!n)continue;let o=e.getNode(a);if(!o?.componentId)continue;let s=e.getNode(o.componentId);if(!s)continue;let c=n.fillPaints!==void 0&&o.fills!==s.fills,l=(n.cornerRadius!==void 0||n.rectangleCornerRadiiIndependent!==void 0)&&o.cornerRadius!==s.cornerRadius,u=n.visible===!1&&s.visible;(c||l||u)&&r.add(a)}return r}function Wr(e,t,n,r){let i=new Map;for(let[e,n]of t)n.overrideKey&&i.set(bn(n.overrideKey),e);let a=new Map;for(let[,e]of t)if(e.componentPropDefs?.length)for(let t of e.componentPropDefs)t.id&&t.initialValue&&a.set(bn(t.id),t.initialValue);let o=new Map;for(let[e,t]of n)o.set(t,e);let s=Ur(e,t,n);return{graph:e,changeMap:t,guidToNodeId:n,blobs:r,overrideKeyToGuid:i,nodeIdToGuid:o,propDefaults:a,preComputedRoot:new Map,componentIdRoot:new Map,swappedInstances:new Set,kiwiPropertyNodes:s}}function Gr(e,t,n,r=[]){Or(e);let i=Wr(e,t,n,r);vr(i);let a=Hr(i);for(let e of i.kiwiPropertyNodes)a.add(e);pr(e,a,i.swappedInstances,i.componentIdRoot);let o=Fr(i);o.size>0&&pr(e,o,i.swappedInstances,i.componentIdRoot,a),Dr(i),mr(i)}function Kr(e,t){return[...e.map(e=>({pluginID:e.pluginId,key:e.key,value:e.value})),...t.map(e=>({pluginID:e.namespace,key:`${e.namespace}/${e.key}`,value:e.value}))]}function qr(e){return e.map(e=>({pluginID:e.pluginId,command:e.command,message:e.message,isDeleted:e.isDeleted}))}var Jr=1;function Yr(e,t){return t.strokes.map(t=>({type:`SOLID`,color:e.safeColor(t.color),opacity:t.opacity,visible:t.visible,blendMode:`NORMAL`}))}function Xr(e,t,n){t.independentStrokeWeights&&(n.borderStrokeWeightsIndependent=!0,n.borderTopWeight=t.borderTopWeight,n.borderRightWeight=t.borderRightWeight,n.borderBottomWeight=t.borderBottomWeight,n.borderLeftWeight=t.borderLeftWeight),t.fills.length>0&&(n.fillPaints=t.fills.map(e.fillToKiwiPaint)),e.serializeCornerRadii(t,n),t.effects.length>0&&(n.effects=t.effects.map(t=>({type:t.type===`LAYER_BLUR`?`FOREGROUND_BLUR`:t.type,color:e.safeColor(t.color),offset:t.offset,radius:t.radius,spread:t.spread,visible:t.visible}))),t.type===`TEXT`&&e.serializeTextProps(t,n,e.graph,e.fontDigestMap),n.frameMaskDisabled=!t.clipsContent,t.horizontalConstraint!==`MIN`&&(n.horizontalConstraint=t.horizontalConstraint),t.verticalConstraint!==`MIN`&&(n.verticalConstraint=t.verticalConstraint),t.strokeCap!==`NONE`&&(n.strokeCap=t.strokeCap),t.strokeJoin!==`MITER`&&(n.strokeJoin=t.strokeJoin),t.strokeMiterLimit!==28.96&&(n.miterLimit=t.strokeMiterLimit),t.dashPattern.length>0&&(n.dashPattern=t.dashPattern),t.arcData&&(n.arcData={startingAngle:t.arcData.startingAngle,endingAngle:t.arcData.endingAngle,innerRadius:t.arcData.innerRadius}),t.autoRename||(n.autoRename=!1)}function Zr(e,t,n,r,i){let a={sessionID:1,localID:r.value++};i.nodeIdToGuid?.set(e.id,a);let o=Yr(i,e),s={guid:a,parentIndex:{guid:t,position:i.fractionalPosition(n)},type:i.mapToFigmaType(e.type),name:e.name,visible:e.visible,opacity:e.opacity,phase:`CREATED`,size:{x:e.width,y:e.height},transform:i.computeExportTransform(e,i.graph),strokeWeight:e.strokes[0]?.weight??Jr,strokeAlign:e.strokes[0]?.align??`INSIDE`};Xr(i,e,s),o.length>0&&(s.strokePaints=o),i.serializeLayoutProps(e,s),i.serializeGeometry(e,s,i.blobs),i.serializeVariableBindings(e,s,i.graph,i.varIdToGuid);let c=Kr(e.pluginData,e.sharedPluginData);c.length>0&&(s.pluginData=c),e.pluginRelaunchData.length>0&&(s.pluginRelaunchData=qr(e.pluginRelaunchData));let l=[s],u=i.graph.getChildren(e.id);for(let e=0;e<u.length;e++)l.push(...i.sceneNodeToKiwi(u[e],a,e,r,i));return l}var Qr=new Map,$r=`open-pencil`,ei=`textDirection`,ti=`layoutDirection`;function ni(e,t,n){let r=e.pluginData.filter(e=>!(e.pluginId===$r&&e.key===t));r.push({pluginId:$r,key:t,value:n}),e.pluginData=r}async function ri(e){if(typeof crypto<`u`){let t=await crypto.subtle.digest(`SHA-1`,e);return new Uint8Array(t)}return new Uint8Array(20)}async function ii(e,t){let n=`${e}|${t}`,r=Qr.get(n);if(r)return r;let i=b(e,t);if(!i)return null;let a=await ri(i);return Qr.set(n,a),a}async function ai(e){let t=new Set;for(let n of e.getAllNodes()){if(n.type!==`TEXT`)continue;let e=C(n.fontWeight,n.italic);t.add(`${n.fontFamily}|${e}`);for(let e of n.styleRuns){let r=e.style.fontFamily??n.fontFamily,i=e.style.fontWeight??n.fontWeight,a=e.style.italic??n.italic;t.add(`${r}|${C(i,a)}`)}}let n=new Map;for(let e of t){let[t,r]=e.split(`|`),i=await ii(t,r);i&&n.set(e,i)}return n}function oi(e){if(new TextDecoder().decode(e.slice(0,8))!==`fig-kiwi`)return null;let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=12,r=[];for(;n<e.length;){let i=t.getUint32(n,!0);n+=4,r.push(e.slice(n,n+i)),n+=i}return r.length>=2?r:null}async function si(e){try{return Le(e)}catch{return(await v(()=>import(`./esm-bALIBdO5.js`),__vite__mapDeps([0,1]))).decompress(e)}}function ci(e,t,n=101){let r=Ie(t),i=16+e.length+4+r.length,a=new Uint8Array(i),o=new DataView(a.buffer);a.set(new TextEncoder().encode(`fig-kiwi`),0),o.setUint32(8,n,!0);let s=12;return o.setUint32(s,e.length,!0),s+=4,a.set(e,s),s+=e.length,o.setUint32(s,r.length,!0),s+=4,a.set(r,s),a}function li(e){switch(e){case`FRAME`:return`FRAME`;case`RECTANGLE`:return`RECTANGLE`;case`ROUNDED_RECTANGLE`:return`ROUNDED_RECTANGLE`;case`ELLIPSE`:return`ELLIPSE`;case`TEXT`:return`TEXT`;case`LINE`:return`LINE`;case`STAR`:return`STAR`;case`POLYGON`:return`REGULAR_POLYGON`;case`VECTOR`:return`VECTOR`;case`GROUP`:return`FRAME`;case`SECTION`:return`SECTION`;case`COMPONENT`:return`SYMBOL`;case`COMPONENT_SET`:return`SYMBOL`;case`INSTANCE`:return`INSTANCE`;case`CONNECTOR`:return`CONNECTOR`;case`SHAPE_WITH_TEXT`:return`SHAPE_WITH_TEXT`;default:return`RECTANGLE`}}function ui(e){return String.fromCharCode(33+e)}function di(e){let t=Math.max(1,e.split(`
`).length);return Array.from({length:t},()=>({lineType:`PLAIN`}))}function fi(e,t){let n=[],r=new Set,i=(e,i,a)=>{let o=C(i,a),s=x(e),c=`${s}|${o}`;r.has(c)||(r.add(c),n.push({key:{family:s,style:o,postscript:``},fontLineHeight:1.2,fontDigest:t.get(c),fontStyle:a?`ITALIC`:`NORMAL`,fontWeight:i}))};i(e.fontFamily,e.fontWeight,e.italic);for(let t of e.styleRuns)i(t.style.fontFamily??e.fontFamily,t.style.fontWeight??e.fontWeight,t.style.italic??e.italic);return{layoutSize:{x:e.width,y:e.height},fontMetaData:n}}function pi(e){let t=e.styleRuns;if(t.length===0)return{characters:e.text,lines:di(e.text)};let n=Array.from({length:e.text.length}).fill(0),r=new Map,i=1;for(let e of t){let t=JSON.stringify(e.style),a=r.get(t);a||(a={id:i++,style:e.style},r.set(t,a));for(let t=e.start;t<e.start+e.length&&t<n.length;t++)n[t]=a.id}let a=[];for(let{id:t,style:n}of r.values()){let r={styleID:t},i=n.fontWeight??e.fontWeight,o=n.italic??e.italic;r.fontName={family:x(n.fontFamily??e.fontFamily),style:C(i,o),postscript:``},n.fontSize!==void 0&&(r.fontSize=n.fontSize),n.letterSpacing!==void 0&&(r.letterSpacing={value:n.letterSpacing,units:`PIXELS`}),n.lineHeight!==void 0&&n.lineHeight!==null&&(r.lineHeight={value:n.lineHeight,units:`PIXELS`}),n.textDecoration&&(r.textDecoration=n.textDecoration),n.fills&&n.fills.length>0&&(r.fillPaints=n.fills.map(hi)),a.push(r)}return{characters:e.text,lines:di(e.text),characterStyleIDs:n,styleOverrideTable:a}}function mi(e){return{r:e.r,g:e.g,b:e.b,a:e.a??1}}function hi(e){let t={type:e.type,color:mi(e.color),opacity:e.opacity,visible:e.visible,blendMode:e.blendMode??`NORMAL`};return e.gradientStops&&(t.stops=e.gradientStops.map(e=>({color:mi(e.color),position:e.position}))),e.gradientTransform&&(t.transform=e.gradientTransform),e.imageHash&&(t.image={hash:e.imageHash}),e.imageScaleMode&&(t.imageScaleMode=e.imageScaleMode),e.imageTransform&&(t.transform=e.imageTransform),t}function gi(e,t){(e.cornerRadius>0||e.independentCorners)&&(t.cornerRadius=e.cornerRadius,t.rectangleCornerRadiiIndependent=e.independentCorners,t.rectangleTopLeftCornerRadius=e.independentCorners?e.topLeftRadius:e.cornerRadius,t.rectangleTopRightCornerRadius=e.independentCorners?e.topRightRadius:e.cornerRadius,t.rectangleBottomLeftCornerRadius=e.independentCorners?e.bottomLeftRadius:e.cornerRadius,t.rectangleBottomRightCornerRadius=e.independentCorners?e.bottomRightRadius:e.cornerRadius),e.cornerSmoothing>0&&(t.cornerSmoothing=e.cornerSmoothing)}function _i(e,t){if(e.textAutoResize===`NONE`)return`NONE`;let n=e.parentId?t.getNode(e.parentId):void 0;return n&&n.layoutMode!==`NONE`&&n.layoutMode!==`GRID`&&e.layoutPositioning!==`ABSOLUTE`?`NONE`:e.textAutoResize}function vi(e,t,n,r){ni(e,ei,e.textDirection),t.fontSize=e.fontSize,t.fontName={family:x(e.fontFamily),style:C(e.fontWeight,e.italic),postscript:``},t.textData=pi(e);let i=_i(e,n);i!==`NONE`&&(t.textAutoResize=i),t.textAlignHorizontal=e.textAlignHorizontal,t.textUserLayoutVersion=3,r&&(t.derivedTextData=fi(e,r)),t.lineHeight={value:e.lineHeight==null?Math.ceil(e.fontSize*1.2):e.lineHeight,units:`PIXELS`},e.letterSpacing!==0&&(t.letterSpacing={value:e.letterSpacing,units:`PIXELS`}),e.textDecoration!==`NONE`&&(t.textDecoration=e.textDecoration===`UNDERLINE`?`UNDERLINE`:`STRIKETHROUGH`)}function yi(e,t){ni(e,ti,e.layoutDirection),e.layoutMode!==`NONE`&&e.layoutMode!==`GRID`&&(t.stackMode=e.layoutMode,t.stackSpacing=e.itemSpacing,t.stackVerticalPadding=e.paddingTop,t.stackHorizontalPadding=e.paddingLeft,t.stackPaddingBottom=e.paddingBottom,t.stackPaddingRight=e.paddingRight,t.stackPrimarySizing=e.primaryAxisSizing===`HUG`?`RESIZE_TO_FIT`:`FIXED`,t.stackCounterSizing=e.counterAxisSizing===`HUG`?`RESIZE_TO_FIT`:`FIXED`,t.stackPrimaryAlignItems=e.primaryAxisAlign,t.stackCounterAlignItems=e.counterAxisAlign,e.layoutWrap===`WRAP`&&(t.stackWrap=`WRAP`),e.counterAxisSpacing>0&&(t.stackCounterSpacing=e.counterAxisSpacing),t.bordersTakeSpace=e.strokesIncludedInLayout),e.layoutPositioning===`ABSOLUTE`&&(t.stackPositioning=`ABSOLUTE`),e.layoutGrow>0&&(t.stackChildPrimaryGrow=e.layoutGrow),e.layoutAlignSelf!==`AUTO`&&(t.stackChildAlignSelf=e.layoutAlignSelf)}function bi(e,t,n){if(e.vectorNetwork&&e.type===`VECTOR`){let{table:r,mirroringToId:i}=rn(e.vectorNetwork),a=n.length;n.push(an(e.vectorNetwork,i));let o={vectorNetworkBlob:a,normalizedSize:{x:e.width,y:e.height}};r.length>0&&(o.styleOverrideTable=r),t.vectorData=o}e.fillGeometry.length>0&&(t.fillGeometry=e.fillGeometry.map(e=>{let t=n.length;return n.push(e.commandsBlob),{windingRule:e.windingRule,commandsBlob:t}})),e.strokeGeometry.length>0&&(t.strokeGeometry=e.strokeGeometry.map(e=>{let t=n.length;return n.push(e.commandsBlob),{windingRule:e.windingRule,commandsBlob:t}}))}function xi(e,t,n,r){if(Object.keys(e.boundVariables).length===0)return;let i=[],a={COLOR:`COLOR`,BOOLEAN:`BOOLEAN`,STRING:`STRING`};for(let[t,o]of Object.entries(e.boundVariables)){let e=q[t];if(!e)continue;let s=n.variables.get(o);if(!s)continue;let c=r?.get(o)??xn(o),l=a[s.type]??`FLOAT`;i.push({variableData:{value:{alias:{guid:c}},dataType:`ALIAS`,resolvedDataType:l},variableField:e})}i.length>0&&(t.variableConsumptionMap={entries:i})}function Si(e,t){let n=e.flipX?-1:1,r=Math.cos(e.rotation*Math.PI/180),i=Math.sin(e.rotation*Math.PI/180),a=e.parentId?t.getNode(e.parentId):void 0,o=a&&a.layoutMode!==`NONE`&&a.layoutMode!==`GRID`&&e.layoutPositioning!==`ABSOLUTE`;return{m00:r*n,m01:-i,m02:o?0:e.x,m10:i*n,m11:r,m12:o?0:e.y}}function Ci(e,t,n,r,i,a,o,s,c){return Zr(e,t,n,r,{graph:i,blobs:a,nodeIdToGuid:o,fontDigestMap:s,varIdToGuid:c,fractionalPosition:ui,mapToFigmaType:li,fillToKiwiPaint:hi,safeColor:mi,computeExportTransform:Si,serializeCornerRadii:gi,serializeTextProps:vi,serializeLayoutProps:yi,serializeGeometry:bi,serializeVariableBindings:xi,sceneNodeToKiwi:Zr})}var wi={m00:1,m01:0,m02:0,m10:0,m11:1,m12:0},Ti=1;function Ei(e,t=`display-p3`){return{guid:e,type:`DOCUMENT`,name:`Document`,visible:!0,opacity:1,phase:`CREATED`,transform:{...wi},strokeWeight:Ti,strokeAlign:`CENTER`,strokeJoin:`MITER`,documentColorProfile:t===`display-p3`?`DISPLAY_P3`:`SRGB`}}function Di(e,t,n,r,i){return{guid:e,parentIndex:{guid:t,position:n},type:`CANVAS`,name:r,visible:!0,opacity:1,phase:`CREATED`,transform:{...wi},strokeWeight:Ti,strokeAlign:`CENTER`,strokeJoin:`MITER`,...i}}async function Oi(){await Pt()}async function ki(e){let t=e.match(/\(figmeta\)(.*?)\(\/figmeta\)/),n=e.match(/\(figma\)(.*?)\(\/figma\)/s);if(!t||!n)return null;let r=JSON.parse(atob(t[1])),i=oi(Uint8Array.fromBase64(n[1]));if(!i)return null;let a=at(ct(new et(Le(i[0])))),o=await si(i[1]),s=a.decodeMessage(o),c=(s.blobs??[]).map(e=>e.bytes instanceof Uint8Array?e.bytes:new Uint8Array(Object.values(e.bytes)));return{nodes:s.nodeChanges??[],meta:r,blobs:c}}var Ai=new Set([`DOCUMENT`,`CANVAS`,`VARIABLE_SET`,`VARIABLE`,`VARIABLE_COLLECTION`,`STYLE`,`STYLE_SET`,`INTERNAL_ONLY_NODE`,`WIDGET`,`STAMP`,`STICKY`,`SHAPE_WITH_TEXT`,`CONNECTOR`,`CODE_BLOCK`,`TABLE_NODE`,`TABLE_CELL`,`SECTION_OVERLAY`,`SLIDE`]);function ji(e){let t=new Map,n=new Map;for(let r of e){if(!r.guid)continue;let e=`${r.guid.sessionID}:${r.guid.localID}`;t.set(e,r),r.parentIndex?.guid&&n.set(e,`${r.parentIndex.guid.sessionID}:${r.parentIndex.guid.localID}`)}return{guidMap:t,parentMap:n}}function Mi(e,t){let n=new Set;for(let[t,r]of e)r.type===`CANVAS`&&r.internalOnly&&n.add(t);let r=new Set;function i(e){r.add(e);for(let[n,a]of t)a===e&&!r.has(n)&&i(n)}for(let e of n)i(e);return{internalCanvasIds:n,internalFigmaIds:r}}function Ni(e,t,n){let r=[],i=[];for(let[a,o]of e){if(Ai.has(o.type??``))continue;let s=t.get(a);(!s||!e.has(s)||Ai.has(e.get(s)?.type??``))&&(s&&n.has(s)?i.push(a):r.push(a))}return{topLevel:r,internalTopLevel:i}}function Pi(e,t){for(let[,n]of e){let r=t.getNode(n);if(r?.type!==`INSTANCE`||!r.componentId)continue;let i=e.get(r.componentId);i&&t.updateNode(n,{componentId:i})}}function Fi(e,t){for(let[,n]of e){let e=t.getNode(n);e?.type===`INSTANCE`&&e.childIds.length===0&&(!e.componentId||!t.getNode(e.componentId))&&t.updateNode(n,{type:`FRAME`,componentId:``})}}function Ii(e,t,n,r=0,i=0,a=[]){let{guidMap:o,parentMap:s}=ji(e),{internalCanvasIds:c,internalFigmaIds:l}=Mi(o,s),{topLevel:u,internalTopLevel:d}=Ni(o,s,c),f=new Map,p=[];function m(e,c){if(f.has(e))return;let u=o.get(e);if(!u)return;let{nodeType:d,...h}=rr(u,a);if(d===`DOCUMENT`||d===`VARIABLE`)return;c===n&&(h.x=(h.x??0)+r,h.y=(h.y??0)+i);let g=t.createNode(d,c,h);f.set(e,g.id),c===n&&!l.has(e)&&p.push(g.id);let _=[];for(let[t,n]of s)n===e&&!Ai.has(o.get(t)?.type??``)&&_.push(t);ar(_,u,o);for(let e of _)m(e,g.id)}for(let e of d)m(e,n);for(let e of u)m(e,n);Pi(f,t),Gr(t,o,f,a);for(let e of d){let n=f.get(e);n&&t.deleteNode(n)}return Fi(f,t),p}function Li(e,t){let n=Ft(),r=Ie(It()),i={sessionID:0,localID:0},a={sessionID:0,localID:1},o={value:100},s=[Ei(i,t.documentColorSpace),Di(a,i,`!`,`Page 1`)],c=[];for(let n=0;n<e.length;n++)s.push(...Ci(e[n],a,n,o,t,c));let l={type:`NODE_CHANGES`,sessionID:0,ackID:0,pasteID:D(),pasteFileKey:`openpencil`,nodeChanges:s};c.length>0&&(l.blobs=c.map(e=>({bytes:e})));let u=ci(r,n.encodeMessage(l)).toBase64(),d={fileKey:`openpencil`,pasteID:l.pasteID,dataType:`scene`};return`<meta charset='utf-8'><span data-metadata="<!--(figmeta)${btoa(JSON.stringify(d))}(/figmeta)-->"></span><span data-buffer="<!--(figma)${u}(/figma)-->"></span>`}var Ri=class{undoStack=[];redoStack=[];batchEntries=null;batchLabel=``;apply(e){e.forward(),this.batchEntries?this.batchEntries.push(e):(this.undoStack.push(e),this.redoStack=[])}push(e){this.batchEntries?this.batchEntries.push(e):(this.undoStack.push(e),this.redoStack=[])}undo(){let e=this.undoStack.pop();return e?(e.inverse(),this.redoStack.push(e),e.label):null}redo(){let e=this.redoStack.pop();return e?(e.forward(),this.undoStack.push(e),e.label):null}beginBatch(e){this.batchLabel=e,this.batchEntries=[]}commitBatch(){if(!this.batchEntries||this.batchEntries.length===0){this.batchEntries=null;return}let e=this.batchEntries,t=this.batchLabel;this.batchEntries=null,this.undoStack.push({label:t,forward:()=>e.forEach(e=>e.forward()),inverse:()=>[...e].reverse().forEach(e=>e.inverse())}),this.redoStack=[]}clear(){this.undoStack=[],this.redoStack=[],this.batchEntries=null}get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}get undoLabel(){return this.undoStack.at(-1)?.label??null}get redoLabel(){return this.redoStack.at(-1)?.label??null}},zi=class{ck;renderer=null;_state=null;caretVisible=!0;constructor(e){this.ck=e}prepareMove(e){let t=this._state;return t?(e&&t.selectionAnchor===null&&(t.selectionAnchor=t.cursor),e||(t.selectionAnchor=null),t):null}get state(){return this._state}get isActive(){return this._state!==null}get nodeId(){return this._state?.nodeId??null}setRenderer(e){this.renderer=e}start(e){this._state={nodeId:e.id,text:e.text,cursor:e.text.length,selectionAnchor:null,paragraph:null,textDirection:w(e)},this.rebuildParagraph(e)}stop(){if(!this._state)return null;let e={nodeId:this._state.nodeId,text:this._state.text};return this._state.paragraph?.delete(),this._state=null,e}rebuildParagraph(e){let t=this._state;!t||!this.renderer||(t.paragraph?.delete(),t.textDirection=w(e),t.paragraph=this.renderer.buildParagraph(e))}hasSelection(){let e=this._state;return e!==null&&e.selectionAnchor!==null&&e.selectionAnchor!==e.cursor}getSelectionRange(){let e=this._state;return!e||e.selectionAnchor===null||e.selectionAnchor===e.cursor?null:[Math.min(e.cursor,e.selectionAnchor),Math.max(e.cursor,e.selectionAnchor)]}getSelectedText(){let e=this.getSelectionRange();return!e||!this._state?``:this._state.text.slice(e[0],e[1])}selectAll(){let e=this._state;e&&(e.selectionAnchor=0,e.cursor=e.text.length)}selectWord(e){let t=this._state;if(!t)return;let n=t.text,r=e,i=e;for(;r>0&&!Bi(n[r-1]);)r--;for(;i<n.length&&!Bi(n[i]);)i++;t.selectionAnchor=r,t.cursor=i}setCursorAt(e,t,n=!1){let r=this._state;if(!r?.paragraph)return;let i=r.paragraph.getGlyphPositionAtCoordinate(e,t).pos;n?r.selectionAnchor===null&&(r.selectionAnchor=r.cursor):r.selectionAnchor=null,r.cursor=i}selectLine(e){let t=this._state;if(!t?.paragraph)return;let n=t.paragraph.getLineNumberAt(e);if(n<0)return;let r=t.paragraph.getLineMetricsAt(n);r&&(t.selectionAnchor=r.startIndex,t.cursor=r.endExcludingWhitespaces)}selectWordAt(e,t){let n=this._state;if(!n?.paragraph)return;let r=n.paragraph.getGlyphPositionAtCoordinate(e,t).pos;this.selectWord(r)}selectLineAt(e,t){let n=this._state;if(!n?.paragraph)return;let r=n.paragraph.getGlyphPositionAtCoordinate(e,t).pos;this.selectLine(r)}insert(e,t){let n=this._state;if(!n)return;let r=this.getSelectionRange();r?(n.text=n.text.slice(0,r[0])+e+n.text.slice(r[1]),n.cursor=r[0]+e.length):(n.text=n.text.slice(0,n.cursor)+e+n.text.slice(n.cursor),n.cursor+=e.length),n.selectionAnchor=null,this.rebuildParagraph(t)}backspace(e){let t=this._state;if(!t)return;let n=this.getSelectionRange();n?(t.text=t.text.slice(0,n[0])+t.text.slice(n[1]),t.cursor=n[0]):t.cursor>0&&(t.text=t.text.slice(0,t.cursor-1)+t.text.slice(t.cursor),t.cursor--),t.selectionAnchor=null,this.rebuildParagraph(e)}delete(e){let t=this._state;if(!t)return;let n=this.getSelectionRange();n?(t.text=t.text.slice(0,n[0])+t.text.slice(n[1]),t.cursor=n[0]):t.cursor<t.text.length&&(t.text=t.text.slice(0,t.cursor)+t.text.slice(t.cursor+1)),t.selectionAnchor=null,this.rebuildParagraph(e)}moveLeft(e=!1){let t=this._state;if(t){if(!e&&this.hasSelection()){let e=this.getSelectionRange();e&&(t.cursor=e[0]),t.selectionAnchor=null;return}this.prepareMove(e),t.textDirection===`RTL`?t.cursor<t.text.length&&t.cursor++:t.cursor>0&&t.cursor--}}moveRight(e=!1){let t=this._state;if(t){if(!e&&this.hasSelection()){let e=this.getSelectionRange();e&&(t.cursor=e[1]),t.selectionAnchor=null;return}this.prepareMove(e),t.textDirection===`RTL`?t.cursor>0&&t.cursor--:t.cursor<t.text.length&&t.cursor++}}moveUp(e=!1){let t=this._state;if(!t?.paragraph)return;this.prepareMove(e);let n=this.getCaretRect();if(!n)return;let r=t.paragraph.getLineMetrics()[0]?.height??14;t.cursor=t.paragraph.getGlyphPositionAtCoordinate(n.x,n.y0-r/2).pos}moveDown(e=!1){let t=this._state;if(!t?.paragraph)return;this.prepareMove(e);let n=this.getCaretRect();if(!n)return;let r=t.paragraph.getLineMetrics()[0]?.height??14;t.cursor=t.paragraph.getGlyphPositionAtCoordinate(n.x,n.y1+r/2).pos}moveToLineStart(e=!1){let t=this._state;if(!t?.paragraph)return;this.prepareMove(e);let n=t.paragraph.getLineNumberAt(t.cursor);if(n<0)return;let r=t.paragraph.getLineMetricsAt(n);r&&(t.cursor=t.textDirection===`RTL`?r.endExcludingWhitespaces:r.startIndex)}moveToLineEnd(e=!1){let t=this._state;if(!t?.paragraph)return;this.prepareMove(e);let n=t.paragraph.getLineNumberAt(t.cursor);if(n<0)return;let r=t.paragraph.getLineMetricsAt(n);r&&(t.cursor=t.textDirection===`RTL`?r.startIndex:r.endExcludingWhitespaces)}moveWordLeft(e=!1){let t=this.prepareMove(e);if(!t)return;let n=t.cursor;for(;n>0&&Bi(t.text[n-1]);)n--;for(;n>0&&!Bi(t.text[n-1]);)n--;t.cursor=n}moveWordRight(e=!1){let t=this.prepareMove(e);if(!t)return;let n=t.cursor;for(;n<t.text.length&&!Bi(t.text[n]);)n++;for(;n<t.text.length&&Bi(t.text[n]);)n++;t.cursor=n}getCaretRect(){let e=this._state;if(!e?.paragraph)return null;let t=e.text,n=e.cursor;if(t.length===0){let t=e.paragraph.getLineMetrics();if(t.length===0)return null;let n=t[0];return{x:n.left,y0:0,y1:n.height}}let r,i,a=!1;n===0?(r=0,i=1,a=e.textDirection===`RTL`):n>=t.length?(r=t.length-1,i=t.length,a=e.textDirection!==`RTL`):(r=n,i=n+1);let o=e.paragraph.getRectsForRange(r,i,this.ck.RectHeightStyle.Max,this.ck.RectWidthStyle.Tight);if(o.length===0)return null;let[s,c,l,u]=o[0].rect;return{x:a?l:s,y0:c,y1:u}}getSelectionRects(){let e=this._state;if(!e?.paragraph)return[];let t=this.getSelectionRange();return t?e.paragraph.getRectsForRange(t[0],t[1],this.ck.RectHeightStyle.Max,this.ck.RectWidthStyle.Tight).map(e=>{let[t,n,r,i]=e.rect;return{x:t,y:n,width:r-t,height:i-n}}):[]}};function Bi(e){return/\s|[.,;:!?()[\]{}"'`<>/\\|@#$%^&*~+=\-_]/.test(e)}var Vi=Symbol(`mixed`);function Hi(e,t){let n=S[e]??`Regular`;return t?`${n} Italic`:n}var Ui=Object.fromEntries([...Object.entries(S).map(([e,t])=>[t.toLowerCase(),Number(e)]),[`ultra light`,200],[``,400],[`demi bold`,600],[`ultra bold`,800],[`heavy`,900]]);function Wi(e){let t=e.toLowerCase(),n=t.includes(`italic`);return{weight:Ui[t.replace(/italic/i,``).trim()]??400,italic:n}}var Q=Symbol(`id`),$=Symbol(`graph`),Gi=Symbol(`api`),Ki=`open-pencil`,qi=class{[Q];[$];[Gi];constructor(e,t,n){this[Q]=e,this[$]=t,this[Gi]=n}_raw(){let e=this[$].getNode(this[Q]);if(!e)throw Error(`Node ${this[Q]} has been removed`);return e}_parentLayout(){let e=this._raw();if(!e.parentId)return`NONE`;let t=this[$].getNode(e.parentId);if(!t)return`NONE`;let n=t.layoutMode;return n===`HORIZONTAL`||n===`VERTICAL`?n:`NONE`}get id(){return this[Q]}get type(){return this._raw().type}get name(){return this._raw().name}set name(e){this[$].updateNode(this[Q],{name:e})}get removed(){return!this[$].getNode(this[Q])}get x(){return this._raw().x}set x(e){this[$].updateNode(this[Q],{x:e})}get y(){return this._raw().y}set y(e){this[$].updateNode(this[Q],{y:e})}get width(){return this._raw().width}get height(){return this._raw().height}get rotation(){return this._raw().rotation}set rotation(e){this[$].updateNode(this[Q],{rotation:e})}resize(e,t){this[$].updateNode(this[Q],{width:e,height:t})}resizeWithoutConstraints(e,t){this.resize(e,t)}get absoluteTransform(){let e=this[$].getAbsolutePosition(this[Q]);return[[1,0,e.x],[0,1,e.y]]}get absoluteBoundingBox(){return this[$].getAbsoluteBounds(this[Q])}get absoluteRenderBounds(){return this.absoluteBoundingBox}get fills(){return Object.freeze(l(this._raw().fills))}set fills(e){this[$].updateNode(this[Q],{fills:e.map(e=>({...e,color:_(e.color),gradientStops:e.gradientStops?.map(e=>({...e,color:_(e.color)}))}))})}get strokes(){return Object.freeze(o(this._raw().strokes))}set strokes(e){this[$].updateNode(this[Q],{strokes:e.map(e=>({...e,color:_(e.color)}))})}get effects(){return Object.freeze(u(this._raw().effects))}set effects(e){this[$].updateNode(this[Q],{effects:e.map(e=>({...e,color:_(e.color)}))})}get opacity(){return this._raw().opacity}set opacity(e){this[$].updateNode(this[Q],{opacity:e})}get visible(){return this._raw().visible}set visible(e){this[$].updateNode(this[Q],{visible:e})}get locked(){return this._raw().locked}set locked(e){this[$].updateNode(this[Q],{locked:e})}get blendMode(){return this._raw().blendMode}set blendMode(e){this[$].updateNode(this[Q],{blendMode:e})}get clipsContent(){return this._raw().clipsContent}set clipsContent(e){this[$].updateNode(this[Q],{clipsContent:e})}get cornerRadius(){let e=this._raw();return e.independentCorners?Vi:e.cornerRadius}set cornerRadius(e){e!==Vi&&this[$].updateNode(this[Q],{cornerRadius:e,topLeftRadius:e,topRightRadius:e,bottomRightRadius:e,bottomLeftRadius:e,independentCorners:!1})}get topLeftRadius(){return this._raw().topLeftRadius}set topLeftRadius(e){this[$].updateNode(this[Q],{topLeftRadius:e,independentCorners:!0})}get topRightRadius(){return this._raw().topRightRadius}set topRightRadius(e){this[$].updateNode(this[Q],{topRightRadius:e,independentCorners:!0})}get bottomLeftRadius(){return this._raw().bottomLeftRadius}set bottomLeftRadius(e){this[$].updateNode(this[Q],{bottomLeftRadius:e,independentCorners:!0})}get bottomRightRadius(){return this._raw().bottomRightRadius}set bottomRightRadius(e){this[$].updateNode(this[Q],{bottomRightRadius:e,independentCorners:!0})}get cornerSmoothing(){return this._raw().cornerSmoothing}set cornerSmoothing(e){this[$].updateNode(this[Q],{cornerSmoothing:e})}get strokeWeight(){let e=this._raw().strokes;return e.length>0?e[0].weight:0}set strokeWeight(e){let t=this._raw();if(t.strokes.length>0){let n=o(t.strokes);n[0].weight=e,this[$].updateNode(this[Q],{strokes:n})}}get strokeAlign(){let e=this._raw().strokes;return e.length>0?e[0].align:`INSIDE`}set strokeAlign(e){let t=this._raw();if(t.strokes.length>0){let n=o(t.strokes);n[0].align=e,this[$].updateNode(this[Q],{strokes:n})}}get dashPattern(){return Object.freeze([...this._raw().dashPattern])}set dashPattern(e){this[$].updateNode(this[Q],{dashPattern:[...e]})}get strokeCap(){return this._raw().strokeCap}set strokeCap(e){this[$].updateNode(this[Q],{strokeCap:e})}get strokeJoin(){return this._raw().strokeJoin}set strokeJoin(e){this[$].updateNode(this[Q],{strokeJoin:e})}get strokeMiterLimit(){return this._raw().strokeMiterLimit}set strokeMiterLimit(e){this[$].updateNode(this[Q],{strokeMiterLimit:e})}get strokeTopWeight(){return this._raw().borderTopWeight}set strokeTopWeight(e){this[$].updateNode(this[Q],{borderTopWeight:e,independentStrokeWeights:!0})}get strokeBottomWeight(){return this._raw().borderBottomWeight}set strokeBottomWeight(e){this[$].updateNode(this[Q],{borderBottomWeight:e,independentStrokeWeights:!0})}get strokeLeftWeight(){return this._raw().borderLeftWeight}set strokeLeftWeight(e){this[$].updateNode(this[Q],{borderLeftWeight:e,independentStrokeWeights:!0})}get strokeRightWeight(){return this._raw().borderRightWeight}set strokeRightWeight(e){this[$].updateNode(this[Q],{borderRightWeight:e,independentStrokeWeights:!0})}get characters(){return this._raw().text}set characters(e){this[$].updateNode(this[Q],{text:e})}get fontSize(){return this._raw().fontSize}set fontSize(e){this[$].updateNode(this[Q],{fontSize:e})}get fontName(){let e=this._raw();return{family:e.fontFamily,style:Hi(e.fontWeight,e.italic)}}set fontName(e){let{weight:t,italic:n}=Wi(e.style);this[$].updateNode(this[Q],{fontFamily:e.family,fontWeight:t,italic:n})}get fontWeight(){return this._raw().fontWeight}set fontWeight(e){this[$].updateNode(this[Q],{fontWeight:e})}get textAlignHorizontal(){return this._raw().textAlignHorizontal}set textAlignHorizontal(e){this[$].updateNode(this[Q],{textAlignHorizontal:e})}get textDirection(){return this._raw().textDirection}set textDirection(e){this[$].updateNode(this[Q],{textDirection:e})}get textAlignVertical(){return this._raw().textAlignVertical}set textAlignVertical(e){this[$].updateNode(this[Q],{textAlignVertical:e})}get textAutoResize(){return this._raw().textAutoResize}set textAutoResize(e){this[$].updateNode(this[Q],{textAutoResize:e})}get letterSpacing(){return this._raw().letterSpacing}set letterSpacing(e){this[$].updateNode(this[Q],{letterSpacing:e})}get lineHeight(){return this._raw().lineHeight}set lineHeight(e){this[$].updateNode(this[Q],{lineHeight:e})}get textCase(){return this._raw().textCase}set textCase(e){this[$].updateNode(this[Q],{textCase:e})}get textDecoration(){return this._raw().textDecoration}set textDecoration(e){this[$].updateNode(this[Q],{textDecoration:e})}get maxLines(){return this._raw().maxLines}set maxLines(e){this[$].updateNode(this[Q],{maxLines:e})}get textTruncation(){return this._raw().textTruncation}set textTruncation(e){this[$].updateNode(this[Q],{textTruncation:e})}get autoRename(){return this._raw().autoRename}set autoRename(e){this[$].updateNode(this[Q],{autoRename:e})}insertCharacters(e,t){let n=this._raw(),r=n.text.slice(0,e)+t+n.text.slice(e);this[$].updateNode(this[Q],{text:r})}deleteCharacters(e,t){let n=this._raw(),r=n.text.slice(0,e)+n.text.slice(t);this[$].updateNode(this[Q],{text:r})}get layoutMode(){return this._raw().layoutMode}set layoutMode(e){this[$].updateNode(this[Q],{layoutMode:e})}get layoutDirection(){let e=this._raw();return Object.hasOwn(e,`layoutDirection`)?e.layoutDirection:`AUTO`}set layoutDirection(e){this[$].updateNode(this[Q],{layoutDirection:e})}get primaryAxisAlignItems(){return this._raw().primaryAxisAlign}set primaryAxisAlignItems(e){this[$].updateNode(this[Q],{primaryAxisAlign:e})}get counterAxisAlignItems(){return this._raw().counterAxisAlign}set counterAxisAlignItems(e){this[$].updateNode(this[Q],{counterAxisAlign:e})}get itemSpacing(){return this._raw().itemSpacing}set itemSpacing(e){this[$].updateNode(this[Q],{itemSpacing:e})}get counterAxisSpacing(){return this._raw().counterAxisSpacing}set counterAxisSpacing(e){this[$].updateNode(this[Q],{counterAxisSpacing:e})}get paddingTop(){return this._raw().paddingTop}set paddingTop(e){this[$].updateNode(this[Q],{paddingTop:e})}get paddingRight(){return this._raw().paddingRight}set paddingRight(e){this[$].updateNode(this[Q],{paddingRight:e})}get paddingBottom(){return this._raw().paddingBottom}set paddingBottom(e){this[$].updateNode(this[Q],{paddingBottom:e})}get paddingLeft(){return this._raw().paddingLeft}set paddingLeft(e){this[$].updateNode(this[Q],{paddingLeft:e})}get layoutWrap(){return this._raw().layoutWrap}set layoutWrap(e){this[$].updateNode(this[Q],{layoutWrap:e})}get primaryAxisSizingMode(){return this._raw().primaryAxisSizing===`HUG`?`AUTO`:this._raw().primaryAxisSizing}set primaryAxisSizingMode(e){let t=e===`AUTO`?`HUG`:e;this[$].updateNode(this[Q],{primaryAxisSizing:t})}get counterAxisSizingMode(){return this._raw().counterAxisSizing===`HUG`?`AUTO`:this._raw().counterAxisSizing}set counterAxisSizingMode(e){let t=e===`AUTO`?`HUG`:e;this[$].updateNode(this[Q],{counterAxisSizing:t})}get counterAxisAlignContent(){return this._raw().counterAxisAlignContent}set counterAxisAlignContent(e){this[$].updateNode(this[Q],{counterAxisAlignContent:e})}get itemReverseZIndex(){return this._raw().itemReverseZIndex}set itemReverseZIndex(e){this[$].updateNode(this[Q],{itemReverseZIndex:e})}get strokesIncludedInLayout(){return this._raw().strokesIncludedInLayout}set strokesIncludedInLayout(e){this[$].updateNode(this[Q],{strokesIncludedInLayout:e})}get layoutPositioning(){return this._raw().layoutPositioning}set layoutPositioning(e){this[$].updateNode(this[Q],{layoutPositioning:e})}get layoutGrow(){return this._raw().layoutGrow}set layoutGrow(e){this[$].updateNode(this[Q],{layoutGrow:e})}get layoutAlign(){let e=this._raw();return e.layoutAlignSelf===`AUTO`?`INHERIT`:e.layoutAlignSelf}set layoutAlign(e){let t=e===`INHERIT`?`AUTO`:e;this[$].updateNode(this[Q],{layoutAlignSelf:t})}get layoutSizingHorizontal(){let e=this._raw(),t=e.layoutMode===`NONE`?this._parentLayout():e.layoutMode;return t===`NONE`?`FIXED`:t===`HORIZONTAL`?e.primaryAxisSizing:e.counterAxisSizing}set layoutSizingHorizontal(e){let t=this._raw(),n=t.layoutMode===`NONE`?this._parentLayout():t.layoutMode,r=this._parentLayout()===`HORIZONTAL`,i=n===`VERTICAL`?{counterAxisSizing:e}:{primaryAxisSizing:e};r&&(i.layoutGrow=e===`FILL`?1:0),this[$].updateNode(this[Q],i)}get layoutSizingVertical(){let e=this._raw(),t=e.layoutMode===`NONE`?this._parentLayout():e.layoutMode;return t===`NONE`?`FIXED`:t===`VERTICAL`?e.primaryAxisSizing:e.counterAxisSizing}set layoutSizingVertical(e){let t=this._raw(),n=t.layoutMode===`NONE`?this._parentLayout():t.layoutMode,r=this._parentLayout()===`VERTICAL`,i=n===`HORIZONTAL`?{counterAxisSizing:e}:{primaryAxisSizing:e};r&&(i.layoutGrow=e===`FILL`?1:0),this[$].updateNode(this[Q],i)}get constraints(){let e=this._raw();return{horizontal:e.horizontalConstraint,vertical:e.verticalConstraint}}set constraints(e){this[$].updateNode(this[Q],{horizontalConstraint:e.horizontal,verticalConstraint:e.vertical})}get minWidth(){return this._raw().minWidth}set minWidth(e){this[$].updateNode(this[Q],{minWidth:e})}get maxWidth(){return this._raw().maxWidth}set maxWidth(e){this[$].updateNode(this[Q],{maxWidth:e})}get minHeight(){return this._raw().minHeight}set minHeight(e){this[$].updateNode(this[Q],{minHeight:e})}get maxHeight(){return this._raw().maxHeight}set maxHeight(e){this[$].updateNode(this[Q],{maxHeight:e})}get isMask(){return this._raw().isMask}set isMask(e){this[$].updateNode(this[Q],{isMask:e})}get maskType(){return this._raw().maskType}set maskType(e){this[$].updateNode(this[Q],{maskType:e})}get expanded(){return this._raw().expanded}set expanded(e){this[$].updateNode(this[Q],{expanded:e})}get mainComponent(){let e=this._raw();if(!e.componentId)return null;let t=this[$].getNode(e.componentId);return t?this[Gi].wrapNode(t.id):null}createInstance(){let e=this._raw();if(e.type!==`COMPONENT`)throw Error(`createInstance() can only be called on components`);let t=this[Gi].currentPageId,n=this[$].createInstance(e.id,t);if(!n)throw Error(`Failed to create instance`);return this[Gi].wrapNode(n.id)}get parent(){let e=this._raw();return e.parentId?this[Gi].wrapNode(e.parentId):null}get children(){return this[$].getChildren(this[Q]).map(e=>this[Gi].wrapNode(e.id))}appendChild(e){this[$].reparentNode(e[Q],this[Q])}insertChild(e,t){this[$].reparentNode(t[Q],this[Q]),this[$].reorderChild(t[Q],this[Q],e)}clone(){let e=this._raw().parentId??this[Gi].currentPageId,t=this[$].cloneTree(this[Q],e);if(!t)throw Error(`Failed to clone node ${this[Q]}`);return this[Gi].wrapNode(t.id)}remove(){this[$].deleteNode(this[Q])}findAll(e){let t=[],n=r=>{for(let i of this[$].getChildren(r)){let r=this[Gi].wrapNode(i.id);(!e||e(r))&&t.push(r),n(i.id)}};return n(this[Q]),t}findOne(e){let t=n=>{for(let r of this[$].getChildren(n)){let n=this[Gi].wrapNode(r.id);if(e(n))return n;let i=t(r.id);if(i)return i}return null};return t(this[Q])}findChild(e){for(let t of this[$].getChildren(this[Q])){let n=this[Gi].wrapNode(t.id);if(e(n))return n}return null}findChildren(e){return this[$].getChildren(this[Q]).map(e=>this[Gi].wrapNode(e.id)).filter(t=>!e||e(t))}findAllWithCriteria(e){let t=e.types?new Set(e.types):null;return this.findAll(e=>!t||t.has(e.type))}getPluginData(e){return this._raw().pluginData.find(t=>t.pluginId===Ki&&t.key===e)?.value??``}setPluginData(e,t){let n=this._raw().pluginData.filter(t=>!(t.pluginId===Ki&&t.key===e));t!==``&&n.push({pluginId:Ki,key:e,value:t}),this[$].updateNode(this[Q],{pluginData:n})}getPluginDataKeys(){return this._raw().pluginData.filter(e=>e.pluginId===Ki).map(e=>e.key)}getSharedPluginData(e,t){return this._raw().sharedPluginData.find(n=>n.namespace===e&&n.key===t)?.value??``}setSharedPluginData(e,t,n){let r=this._raw().sharedPluginData.filter(n=>!(n.namespace===e&&n.key===t));n!==``&&r.push({namespace:e,key:t,value:n}),this[$].updateNode(this[Q],{sharedPluginData:r})}getSharedPluginDataKeys(e){return this._raw().sharedPluginData.filter(t=>t.namespace===e).map(e=>e.key)}getFillOkHCL(e=0){return c(this._raw(),e)}setFillOkHCL(e,t=0){this[$].updateNode(this[Q],n(this._raw(),t,e))}getStrokeOkHCL(e=0){return f(this._raw(),e)}setStrokeOkHCL(e,t=0){this[$].updateNode(this[Q],p(this._raw(),t,e))}toJSON(e,t=0){let n=this._raw(),r={id:n.id,type:n.type,name:n.name,x:n.x,y:n.y,width:n.width,height:n.height};n.fills.length>0&&(r.fills=n.fills),n.strokes.length>0&&(r.strokes=n.strokes),n.effects.length>0&&(r.effects=n.effects),n.opacity!==1&&(r.opacity=n.opacity),n.cornerRadius>0&&(r.cornerRadius=n.cornerRadius),n.visible||(r.visible=!1),n.text&&(r.characters=n.text),n.type===`TEXT`&&(r.textDirection=n.textDirection),n.layoutMode!==`NONE`&&(r.layoutMode=n.layoutMode,r.layoutDirection=n.layoutDirection,r.itemSpacing=n.itemSpacing);let i=this[$].getChildren(this[Q]);return i.length>0&&(e!==void 0&&t>=e?r.childCount=i.length:r.children=i.map(n=>this[Gi].wrapNode(n.id).toJSON(e,t+1))),r}toString(){let e=this._raw();return`[${e.type} "${e.name}" ${e.id}]`}[Symbol.for(`nodejs.util.inspect.custom`)](){return this.toString()}};function Ji(e){let t=2166136261,n=2166136261,r=2166136261,i=2166136261,a=2166136261;for(let o=0;o<e.length;o++){let s=e[o];switch(o%5){case 0:t^=s,t=Math.imul(t,16777619)>>>0;break;case 1:n^=s,n=Math.imul(n,16777619)>>>0;break;case 2:r^=s,r=Math.imul(r,16777619)>>>0;break;case 3:i^=s,i=Math.imul(i,16777619)>>>0;break;case 4:a^=s,a=Math.imul(a,16777619)>>>0;break}}return[t,n,r,i,a].map(e=>e.toString(16).padStart(8,`0`)).join(``)}var Yi=class{graph;_currentPageId;_selection=[];_nodeCache=new Map;_pageProxies=new WeakSet;mixed=Vi;constructor(e){this.graph=e,this._currentPageId=e.getPages()[0]?.id??e.rootId}get currentPageId(){return this._currentPageId}wrapNode(e){let t=this._nodeCache.get(e);return t||(t=new qi(e,this.graph,this),this._nodeCache.set(e,t)),t}_ensurePageProxy(e){return this._pageProxies.has(e)||(Object.defineProperty(e,`selection`,{get:()=>this._selection,set:e=>{this._selection=e},enumerable:!0,configurable:!0}),this._pageProxies.add(e)),e}get root(){return this.wrapNode(this.graph.rootId)}get currentPage(){return this._ensurePageProxy(this.wrapNode(this._currentPageId))}set currentPage(e){this._currentPageId=e[Q]}getNodeById(e){return this.graph.getNode(e)?this.wrapNode(e):null}_createNode(e){let t=this.graph.createNode(e,this._currentPageId);return this.wrapNode(t.id)}createFrame(){return this._createNode(`FRAME`)}createRectangle(){return this._createNode(`RECTANGLE`)}createEllipse(){return this._createNode(`ELLIPSE`)}createText(){return this._createNode(`TEXT`)}createLine(){return this._createNode(`LINE`)}createPolygon(){return this._createNode(`POLYGON`)}createStar(){return this._createNode(`STAR`)}createVector(){return this._createNode(`VECTOR`)}createComponent(){return this._createNode(`COMPONENT`)}createSection(){return this._createNode(`SECTION`)}createPage(){let e=this.graph.addPage(`Page`);return this.wrapNode(e.id)}group(e,t){let n=this.graph.createNode(`GROUP`,t[Q]);for(let t of e)this.graph.reparentNode(t[Q],n.id);return this.wrapNode(n.id)}ungroup(e){let t=this.graph.getNode(e[Q]);if(t?.type!==`GROUP`)return;let n=t.parentId??this._currentPageId;for(let e of Array.from(t.childIds))this.graph.reparentNode(e,n);this.graph.deleteNode(e[Q])}createComponentFromNode(e){let t=this.graph.getNode(e[Q]);if(!t)throw Error(`Node not found`);let n=t.parentId??this._currentPageId,r=this.graph.createNode(`COMPONENT`,n);this.graph.updateNode(r.id,{name:t.name,width:t.width,height:t.height,x:t.x,y:t.y,fills:l(t.fills),strokes:o(t.strokes),effects:u(t.effects),cornerRadius:t.cornerRadius,topLeftRadius:t.topLeftRadius,topRightRadius:t.topRightRadius,bottomRightRadius:t.bottomRightRadius,bottomLeftRadius:t.bottomLeftRadius,independentCorners:t.independentCorners,opacity:t.opacity,layoutMode:t.layoutMode,primaryAxisAlign:t.primaryAxisAlign,counterAxisAlign:t.counterAxisAlign,itemSpacing:t.itemSpacing,paddingTop:t.paddingTop,paddingRight:t.paddingRight,paddingBottom:t.paddingBottom,paddingLeft:t.paddingLeft,pluginData:structuredClone(t.pluginData),sharedPluginData:structuredClone(t.sharedPluginData),pluginRelaunchData:structuredClone(t.pluginRelaunchData)});for(let e of t.childIds)this.graph.cloneTree(e,r.id);return this.graph.deleteNode(e[Q]),this.wrapNode(r.id)}getVariableById(e){return this.graph.variables.get(e)??null}getLocalVariables(e){let t=[...this.graph.variables.values()];return e?t.filter(t=>t.type===e):t}getLocalVariableCollections(){return[...this.graph.variableCollections.values()]}getVariableCollectionById(e){return this.graph.variableCollections.get(e)??null}createVariable(e,t,n,r){return this.graph.createVariable(e,t,n,r)}setVariableValue(e,t,n){let r=this.graph.variables.get(e);if(!r)throw Error(`Variable "${e}" not found`);r.valuesByMode[t]=n}deleteVariable(e){this.graph.removeVariable(e)}createVariableCollection(e){return this.graph.createCollection(e)}deleteVariableCollection(e){this.graph.removeCollection(e)}bindVariable(e,t,n){this.graph.bindVariable(e,t,n)}unbindVariable(e,t){this.graph.unbindVariable(e,t)}booleanOperation(e,t){if(t.length<2)throw Error(`Need at least 2 nodes for boolean operation`);let n=t.map(e=>this.graph.getNode(e)),r=n[0];if(!r||n.some(e=>!e))throw Error(`One or more nodes not found`);let i=r.parentId??this._currentPageId,a=this.graph.createNode(`GROUP`,i,{name:`Boolean ${e.toLowerCase()}`,x:r.x,y:r.y,width:r.width,height:r.height});for(let e of t)this.graph.reparentNode(e,a.id);return this.wrapNode(a.id)}flattenNode(e){if(e.length===0)throw Error(`Need at least 1 node to flatten`);let t=this.graph.getNode(e[0]);if(!t)throw Error(`Node not found`);let n=t.parentId??this._currentPageId,r=this.graph.createNode(`VECTOR`,n,{name:`Flatten`,x:t.x,y:t.y,width:t.width,height:t.height,fills:l(t.fills)});for(let t of e)this.graph.deleteNode(t);return this.wrapNode(r.id)}_viewport={x:0,y:0,zoom:1};get viewport(){return{center:{x:this._viewport.x,y:this._viewport.y},zoom:this._viewport.zoom,scrollAndZoomIntoView:e=>{let t=i(e.map(e=>e.absoluteBoundingBox));if(t.width===0&&t.height===0&&e.length===0)return;let n=t.width+160,r=t.height+160,a=h?window.innerWidth:1280,o=h?window.innerHeight:720,s=Math.min(a/n,o/r,1);this._viewport={x:t.x+t.width/2,y:t.y+t.height/2,zoom:s}}}}set viewport(e){this._viewport={x:e.center.x,y:e.center.y,zoom:e.zoom}}createImage(e){let t=Ji(e);return this.graph.images.set(t,e),{hash:t}}async loadFontAsync(e){}notify(e){return typeof console<`u`&&console.log(`[figma.notify] ${e}`),{cancel(){}}}commitUndo(){}triggerUndo(){}exportImage},Xi=new Set([`COMPONENT`,`COMPONENT_SET`]);function Zi(e,t,n,r,i){return e+n>=i.x&&t+r>=i.y&&e<=i.x+i.w&&t<=i.y+i.h}var Qi=class{sections=[];components=[];cachedSceneVersion=-1;cachedPageId=null;update(e,t,n){n===this.cachedSceneVersion&&t===this.cachedPageId||(this.rebuild(e,t),this.cachedSceneVersion=n,this.cachedPageId=t)}invalidate(){this.cachedSceneVersion=-1,this.cachedPageId=null,this.sections=[],this.components=[]}getSections(e,t){let n=[];for(let r of this.sections){let i=e.getNode(r.nodeId);!i||!Zi(r.absX,r.absY,i.width,i.height,t)||n.push({node:i,absX:r.absX,absY:r.absY,nested:r.nested})}return n}getComponents(e,t){let n=[];for(let r of this.components){let i=e.getNode(r.nodeId);!i||!Zi(r.absX,r.absY,i.width,i.height,t)||n.push({node:i,absX:r.absX,absY:r.absY,inside:r.parentType===`COMPONENT_SET`})}return n}rebuild(e,t){this.sections=[],this.components=[];let n=e.getNode(t??e.rootId);n&&this.walkChildren(e,n.id,0,0,!1)}walkChildren(e,t,n,r,i){let a=e.getNode(t);if(!a)return;let o=a.type;for(let t of a.childIds){let a=e.getNode(t);if(!a||!a.visible)continue;let s=n+a.x,c=r+a.y;a.type===`SECTION`?(this.sections.push({nodeId:t,absX:s,absY:c,nested:i}),this.walkChildren(e,t,s,c,!0)):(Xi.has(a.type)&&this.components.push({nodeId:t,absX:s,absY:c,parentType:o}),a.childIds.length>0&&this.walkChildren(e,t,s,c,i))}}};function $i(e){return e}function ea(e,t){return e.toJSON(t)}function ta(e){return{id:e.id,name:e.name,type:e.type}}var na={ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,DOCUMENT_NODE:9},ra=`name.width.height.x.y.visible.opacity.cornerRadius.fontSize.fontFamily.fontWeight.textDirection.layoutMode.layoutDirection.itemSpacing.paddingTop.paddingBottom.paddingLeft.paddingRight.strokeWeight.rotation.locked.blendMode.text.lineHeight.letterSpacing`.split(`.`);function ia(e,t,n){return{nodeType:na.ELEMENT_NODE,nodeName:t.type,localName:t.type,namespaceURI:null,prefix:null,_sceneNode:t,_parent:n}}function aa(e,t){let n={nodeType:na.DOCUMENT_NODE,nodeName:`#document`,documentElement:null},r=ia(e,t,n);return n.documentElement=r,n._children=[r],n}function oa(e){if(e._attrs)return e._attrs;let t=e._sceneNode,n=[];for(let r of ra)if(r in t){let i=t[r];if(i==null||typeof i==`symbol`)continue;let a=typeof i==`object`?JSON.stringify(i):String(i);n.push({nodeType:na.ATTRIBUTE_NODE,nodeName:r,name:r,localName:r,namespaceURI:null,prefix:null,value:a,ownerElement:e})}return e._attrs=n,n}function sa(e,t){return t._children||=t._sceneNode.childIds.map(t=>e.getNode(t)).filter(e=>e!==void 0).map(n=>ia(e,n,t)),t._children}function ca(e){return e.nodeType===na.DOCUMENT_NODE}function la(e){return{getAllAttributes(e){return ca(e)?[]:oa(e)},getAttribute(e,t){if(ca(e))return null;let n=e._sceneNode;if(t in n){let e=n[t];return e==null||typeof e==`symbol`?null:typeof e==`object`?JSON.stringify(e):String(e)}return null},getChildNodes(t){return ca(t)?t._children??[]:sa(e,t)},getData(e){return e.value},getFirstChild(t){return ca(t)?t.documentElement:sa(e,t)[0]??null},getLastChild(t){if(ca(t))return t.documentElement;let n=sa(e,t);return n[n.length-1]??null},getNextSibling(t){if(ca(t))return null;let n=t._parent;if(!n)return null;let r=sa(e,n);return r[r.indexOf(t)+1]??null},getParentNode(e){return ca(e)?null:e._parent??null},getPreviousSibling(t){if(ca(t))return null;let n=t._parent;if(!n)return null;let r=sa(e,n),i=r.indexOf(t);return i>0?r[i-1]:null}}}async function ua(e,t,n={}){let{limit:r=1e3}=n,i=e.getPages(),a=n.page?i.filter(e=>e.name===n.page):i;if(a.length===0)return[];let{evaluateXPathToNodes:o}=await v(async()=>{let{evaluateXPathToNodes:e}=await import(`./fontoxpath.esm-CgCY7G3i.js`);return{evaluateXPathToNodes:e}},__vite__mapDeps([2,3])),s=la(e),c=[];for(let n of a){let i=o(t,aa(e,n),s);for(let e of i){if(c.length>=r)break;let t=e._sceneNode;t.type!==`CANVAS`&&c.push(t)}if(c.length>=r)break}return c}var da=new Map,fa=null;function pa(e){da.set(e.name,e),fa||=e.name}function ma(e){fa=e}function ha(){return fa?da.get(fa)??null:null}function ga(e,t){return t<=200?e.small:t<=400?e.medium:t<=800?e.large:t<=1600?e.large2x:e.original}var _a=null;function va(e){_a=e,e&&(pa(ya),ma(`pexels`))}var ya={name:`pexels`,async search(e,{perPage:t,orientation:n,targetDim:r}){if(!_a)throw Error(`Pexels API key not configured`);let i=`https://api.pexels.com/v1/search?query=${encodeURIComponent(e)}&per_page=${t}&orientation=${n}`,a=await fetch(i,{headers:{Authorization:_a}});if(!a.ok)throw Error(`Pexels ${a.status}`);return(await a.json()).photos.map(e=>({url:ga(e.src,r),width:e.width,height:e.height,photographer:e.photographer,sourceId:String(e.id)}))}},ba=null;function xa(e){ba=e,e&&pa(Ca)}function Sa(e,t){return t<=200?e.thumb:t<=400?e.small:t<=1080?e.regular:e.full}var Ca={name:`unsplash`,async search(e,{perPage:t,orientation:n}){if(!ba)throw Error(`Unsplash access key not configured`);let r=`https://api.unsplash.com/search/photos?query=${encodeURIComponent(e)}&per_page=${t}&orientation=${n===`square`?`squarish`:n}`,i=await fetch(r,{headers:{Authorization:`Client-ID ${ba}`,"Accept-Version":`v1`}});if(!i.ok)throw Error(`Unsplash ${i.status}`);return(await i.json()).results.map(e=>({url:Sa(e.urls,1080),width:e.width,height:e.height,photographer:e.user.name,sourceId:e.id}))}};async function wa(e,t,n){let r=e.getNodeById(n.id);if(!r)return{id:n.id,error:`Not found`};if((`children`in r?r.children:[]).length>0)return{id:n.id,error:`"${r.name}" has children — use a leaf shape`};let i=Math.min((n.index??0)+3,15),a=n.orientation??`landscape`,o=Math.max(r.width,r.height),s;try{s=await t.search(n.query,{perPage:i,orientation:a,targetDim:o})}catch(e){return{id:n.id,error:e instanceof Error?e.message:String(e)}}if(s.length===0)return{id:n.id,error:`No photos for "${n.query}"`};let c=s[Math.min(n.index??0,s.length-1)],l;try{let e=await fetch(c.url);if(!e.ok)return{id:n.id,error:`Download ${e.status}`};l=new Uint8Array(await e.arrayBuffer())}catch(e){return{id:n.id,error:`Download: ${e instanceof Error?e.message:String(e)}`}}return r.fills=[{type:`IMAGE`,color:{r:1,g:1,b:1,a:1},imageHash:e.createImage(l).hash,imageScaleMode:`FILL`,visible:!0,opacity:1}],{id:r.id,photo:{sourceId:c.sourceId,photographer:c.photographer,width:c.width,height:c.height,provider:t.name}}}var Ta=$i({name:`stock_photo`,mutates:!0,description:`Search stock photos and apply to nodes. Pass a JSON array — all fetched in parallel. Each item: {id, query, index?, orientation?}. Only works on leaf shapes (Rectangle/Ellipse).`,params:{requests:{type:`string`,description:`JSON array: [{"id":"0:5","query":"mountain sunset"},{"id":"0:8","query":"business team","orientation":"square"}]`,required:!0}},execute:async(e,{requests:t})=>{let n=ha();if(!n)return{error:`No stock photo provider configured. Ask the user to add an API key in AI chat settings. Available providers: Pexels, Unsplash.`};let r;try{let e=JSON.parse(String(t));r=Array.isArray(e)?e:[e]}catch{return{error:`Invalid JSON in requests`}}if(r.length===0)return{error:`Empty requests array`};let i=await Promise.all(r.map(t=>wa(e,n,t))),a=i.filter(e=>e.photo).length;return{applied:a,failed:i.length-a,provider:n.name,results:i}}}),Ea=e(t(((e,t)=>{var n=(()=>{var e=typeof document<`u`&&document.currentScript?document.currentScript.src:void 0;return typeof __filename<`u`&&(e||=__filename),(function(t={}){var n=t,r,i;n.ready=new Promise((e,t)=>{r=e,i=t}),(function(e){e.ke=e.ke||[],e.ke.push(function(){e.MakeSWCanvasSurface=function(t){var n=t,r=typeof OffscreenCanvas<`u`&&n instanceof OffscreenCanvas;if(!(typeof HTMLCanvasElement<`u`&&n instanceof HTMLCanvasElement||r||(n=document.getElementById(t),n)))throw`Canvas with id `+t+` was not found`;return(t=e.MakeSurface(n.width,n.height))&&(t.ce=n),t},e.MakeCanvasSurface||=e.MakeSWCanvasSurface,e.MakeSurface=function(t,n){var r={width:t,height:n,colorType:e.ColorType.RGBA_8888,alphaType:e.AlphaType.Unpremul,colorSpace:e.ColorSpace.SRGB},i=t*n*4,a=e._malloc(i);return(r=e.Surface._makeRasterDirect(r,a,4*t))&&(r.ce=null,r.Xf=t,r.Tf=n,r.Vf=i,r.wf=a,r.getCanvas().clear(e.TRANSPARENT)),r},e.MakeRasterDirectSurface=function(t,n,r){return e.Surface._makeRasterDirect(t,n.byteOffset,r)},e.Surface.prototype.flush=function(t){if(e.de(this.be),this._flush(),this.ce){var n=new Uint8ClampedArray(e.HEAPU8.buffer,this.wf,this.Vf);n=new ImageData(n,this.Xf,this.Tf),t?this.ce.getContext(`2d`).putImageData(n,0,0,t[0],t[1],t[2]-t[0],t[3]-t[1]):this.ce.getContext(`2d`).putImageData(n,0,0)}},e.Surface.prototype.dispose=function(){this.wf&&e._free(this.wf),this.delete()},e.de=e.de||function(){},e.mf=e.mf||function(){return null}})})(n),(function(e){e.ke=e.ke||[],e.ke.push(function(){function t(e,t,n){return e&&e.hasOwnProperty(t)?e[t]:n}function n(e){var t=Yt(zt);return zt[t]=e,t}function r(e){return e.naturalHeight||e.videoHeight||e.displayHeight||e.height}function i(e){return e.naturalWidth||e.videoWidth||e.displayWidth||e.width}function a(t,n,r,i){return t.bindTexture(t.TEXTURE_2D,n),i||r.alphaType!==e.AlphaType.Premul||t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),n}function o(t,n,r){r||n.alphaType!==e.AlphaType.Premul||t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.bindTexture(t.TEXTURE_2D,null)}e.GetWebGLContext=function(e,n){if(!e)throw`null canvas passed into makeWebGLContext`;var r={alpha:t(n,`alpha`,1),depth:t(n,`depth`,1),stencil:t(n,`stencil`,8),antialias:t(n,`antialias`,0),premultipliedAlpha:t(n,`premultipliedAlpha`,1),preserveDrawingBuffer:t(n,`preserveDrawingBuffer`,0),preferLowPowerToHighPerformance:t(n,`preferLowPowerToHighPerformance`,0),failIfMajorPerformanceCaveat:t(n,`failIfMajorPerformanceCaveat`,0),enableExtensionsByDefault:t(n,`enableExtensionsByDefault`,1),explicitSwapControl:t(n,`explicitSwapControl`,0),renderViaOffscreenBackBuffer:t(n,`renderViaOffscreenBackBuffer`,0)};if(r.majorVersion=n&&n.majorVersion?n.majorVersion:typeof WebGL2RenderingContext<`u`?2:1,r.explicitSwapControl)throw`explicitSwapControl is not supported`;return e=Xt(e,r),e?(Qt(e),K.xe.getExtension(`WEBGL_debug_renderer_info`),e):0},e.deleteContext=function(e){K===Ht[e]&&(K=null),typeof JSEvents==`object`&&JSEvents.Mg(Ht[e].xe.canvas),Ht[e]&&Ht[e].xe.canvas&&(Ht[e].xe.canvas.Rf=void 0),Ht[e]=null},e._setTextureCleanup({deleteTexture:function(e,t){var n=zt[t];n&&Ht[e].xe.deleteTexture(n),zt[t]=null}}),e.MakeWebGLContext=function(t){if(!this.de(t))return null;var n=this._MakeGrContext();if(!n)return null;n.be=t;var r=n.delete.bind(n);return n.delete=function(){e.de(this.be),r()}.bind(n),K.Af=n},e.MakeGrContext=e.MakeWebGLContext,e.GrDirectContext.prototype.getResourceCacheLimitBytes=function(){e.de(this.be),this._getResourceCacheLimitBytes()},e.GrDirectContext.prototype.getResourceCacheUsageBytes=function(){e.de(this.be),this._getResourceCacheUsageBytes()},e.GrDirectContext.prototype.releaseResourcesAndAbandonContext=function(){e.de(this.be),this._releaseResourcesAndAbandonContext()},e.GrDirectContext.prototype.setResourceCacheLimitBytes=function(t){e.de(this.be),this._setResourceCacheLimitBytes(t)},e.MakeOnScreenGLSurface=function(e,t,n,r,i,a){return!this.de(e.be)||(t=i===void 0||a===void 0?this._MakeOnScreenGLSurface(e,t,n,r):this._MakeOnScreenGLSurface(e,t,n,r,i,a),!t)?null:(t.be=e.be,t)},e.MakeRenderTarget=function(){var e=arguments[0];if(!this.de(e.be))return null;if(arguments.length===3){var t=this._MakeRenderTargetWH(e,arguments[1],arguments[2]);if(!t)return null}else if(arguments.length===2){if(t=this._MakeRenderTargetII(e,arguments[1]),!t)return null}else return null;return t.be=e.be,t},e.MakeWebGLCanvasSurface=function(t,n,r){n||=null;var i=t,a=typeof OffscreenCanvas<`u`&&i instanceof OffscreenCanvas;if(!(typeof HTMLCanvasElement<`u`&&i instanceof HTMLCanvasElement||a||(i=document.getElementById(t),i)))throw`Canvas with id `+t+` was not found`;if(t=this.GetWebGLContext(i,r),!t||0>t)throw`failed to create webgl context: err `+t;return t=this.MakeWebGLContext(t),n=this.MakeOnScreenGLSurface(t,i.width,i.height,n),n||(n=i.cloneNode(!0),i.parentNode.replaceChild(n,i),n.classList.add(`ck-replaced`),e.MakeSWCanvasSurface(n))},e.MakeCanvasSurface=e.MakeWebGLCanvasSurface,e.Surface.prototype.makeImageFromTexture=function(t,r){return e.de(this.be),t=n(t),(r=this._makeImageFromTexture(this.be,t,r))&&(r.cf=t),r},e.Surface.prototype.makeImageFromTextureSource=function(t,n,s){n||={height:r(t),width:i(t),colorType:e.ColorType.RGBA_8888,alphaType:s?e.AlphaType.Premul:e.AlphaType.Unpremul},n.colorSpace||=e.ColorSpace.SRGB,e.de(this.be);var c=K.xe;return s=a(c,c.createTexture(),n,s),K.version===2?c.texImage2D(c.TEXTURE_2D,0,c.RGBA,n.width,n.height,0,c.RGBA,c.UNSIGNED_BYTE,t):c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,t),o(c,n),this._resetContext(),this.makeImageFromTexture(s,n)},e.Surface.prototype.updateTextureFromSource=function(t,s,c){if(t.cf){e.de(this.be);var l=t.getImageInfo(),u=K.xe,d=a(u,zt[t.cf],l,c);K.version===2?u.texImage2D(u.TEXTURE_2D,0,u.RGBA,i(s),r(s),0,u.RGBA,u.UNSIGNED_BYTE,s):u.texImage2D(u.TEXTURE_2D,0,u.RGBA,u.RGBA,u.UNSIGNED_BYTE,s),o(u,l,c),this._resetContext(),zt[t.cf]=null,t.cf=n(d),l.colorSpace=t.getColorSpace(),s=this._makeImageFromTexture(this.be,t.cf,l),c=t.ae.ie,u=t.ae.pe,t.ae.ie=s.ae.ie,t.ae.pe=s.ae.pe,s.ae.ie=c,s.ae.pe=u,s.delete(),l.colorSpace.delete()}},e.MakeLazyImageFromTextureSource=function(t,s,c){s||={height:r(t),width:i(t),colorType:e.ColorType.RGBA_8888,alphaType:c?e.AlphaType.Premul:e.AlphaType.Unpremul},s.colorSpace||=e.ColorSpace.SRGB;var l={makeTexture:function(){var e=K,r=e.xe,i=a(r,r.createTexture(),s,c);return e.version===2?r.texImage2D(r.TEXTURE_2D,0,r.RGBA,s.width,s.height,0,r.RGBA,r.UNSIGNED_BYTE,t):r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t),o(r,s,c),n(i)},freeSrc:function(){}};return t.constructor.name===`VideoFrame`&&(l.freeSrc=function(){t.close()}),e.Image._makeFromGenerator(s,l)},e.de=function(e){return e?Qt(e):!1},e.mf=function(){return K&&K.Af&&!K.Af.isDeleted()?K.Af:null}})})(n),(function(e){function t(e,t,n,r,i){for(var a=0;a<e.length;a++)t[a*n+(a*i+r+n)%n]=e[a];return t}function r(e){for(var t=e*e,n=Array(t);t--;)n[t]=t%(e+1)===0?1:0;return n}function i(e){return e?e.constructor===Float32Array&&e.length===4:!1}function a(e){return(c(255*e[3])<<24|c(255*e[0])<<16|c(255*e[1])<<8|c(255*e[2])<<0)>>>0}function o(e){if(e&&e._ck)return e;if(e instanceof Float32Array){for(var t=Math.floor(e.length/4),n=new Uint32Array(t),r=0;r<t;r++)n[r]=a(e.slice(4*r,4*(r+1)));return n}if(e instanceof Uint32Array)return e;if(e instanceof Array&&e[0]instanceof Float32Array)return e.map(a)}function s(e){if(e===void 0)return 1;var t=parseFloat(e);return e&&e.indexOf(`%`)!==-1?t/100:t}function c(e){return Math.round(Math.max(0,Math.min(e||0,255)))}function l(t,n){n&&n._ck||e._free(t)}function u(t,n,r){if(!t||!t.length)return I;if(t&&t._ck)return t.byteOffset;var i=e[n].BYTES_PER_ELEMENT;return r||=e._malloc(t.length*i),e[n].set(t,r/i),r}function d(t){var n={te:I,count:t.length,colorType:e.ColorType.RGBA_F32};if(t instanceof Float32Array)n.te=u(t,`HEAPF32`),n.count=t.length/4;else if(t instanceof Uint32Array)n.te=u(t,`HEAPU32`),n.colorType=e.ColorType.RGBA_8888;else if(t instanceof Array){if(t&&t.length){for(var r=e._malloc(16*t.length),i=0,a=r/4,o=0;o<t.length;o++)for(var s=0;4>s;s++)e.HEAPF32[a+i]=t[o][s],i++;t=r}else t=I;n.te=t}else throw`Invalid argument to copyFlexibleColorArray, Not a color array `+typeof t;return n}function f(t){if(!t)return I;var n=C.toTypedArray();if(t.length){if(t.length===6||t.length===9)return u(t,`HEAPF32`,S),t.length===6&&e.HEAPF32.set(F,6+S/4),S;if(t.length===16)return n[0]=t[0],n[1]=t[1],n[2]=t[3],n[3]=t[4],n[4]=t[5],n[5]=t[7],n[6]=t[12],n[7]=t[13],n[8]=t[15],S;throw`invalid matrix size`}if(t.m11===void 0)throw`invalid matrix argument`;return n[0]=t.m11,n[1]=t.m21,n[2]=t.m41,n[3]=t.m12,n[4]=t.m22,n[5]=t.m42,n[6]=t.m14,n[7]=t.m24,n[8]=t.m44,S}function p(e){if(!e)return I;var t=T.toTypedArray();if(e.length){if(e.length!==16&&e.length!==6&&e.length!==9)throw`invalid matrix size`;return e.length===16?u(e,`HEAPF32`,w):(t.fill(0),t[0]=e[0],t[1]=e[1],t[3]=e[2],t[4]=e[3],t[5]=e[4],t[7]=e[5],t[10]=1,t[12]=e[6],t[13]=e[7],t[15]=e[8],e.length===6&&(t[12]=0,t[13]=0,t[15]=1),w)}if(e.m11===void 0)throw`invalid matrix argument`;return t[0]=e.m11,t[1]=e.m21,t[2]=e.m31,t[3]=e.m41,t[4]=e.m12,t[5]=e.m22,t[6]=e.m32,t[7]=e.m42,t[8]=e.m13,t[9]=e.m23,t[10]=e.m33,t[11]=e.m43,t[12]=e.m14,t[13]=e.m24,t[14]=e.m34,t[15]=e.m44,w}function m(e,t){return u(e,`HEAPF32`,t||D)}function h(e,t,n,r){var i=O.toTypedArray();return i[0]=e,i[1]=t,i[2]=n,i[3]=r,D}function g(t){for(var n=new Float32Array(4),r=0;4>r;r++)n[r]=e.HEAPF32[t/4+r];return n}function _(e,t){return u(e,`HEAPF32`,t||A)}function v(e,t){return u(e,`HEAPF32`,t||ae)}function y(){for(var e=0,t=0;t<arguments.length-1;t+=2)e+=arguments[t]*arguments[t+1];return e}function b(e,t,n){for(var r=Array(e.length),i=0;i<n;i++)for(var a=0;a<n;a++){for(var o=0,s=0;s<n;s++)o+=e[n*i+s]*t[n*s+a];r[i*n+a]=o}return r}function x(e,t){for(var n=b(t[0],t[1],e),r=2;r<t.length;)n=b(n,t[r],e),r++;return n}e.Color=function(t,n,r,i){return i===void 0&&(i=1),e.Color4f(c(t)/255,c(n)/255,c(r)/255,i)},e.ColorAsInt=function(e,t,n,r){return r===void 0&&(r=255),(c(r)<<24|c(e)<<16|c(t)<<8|c(n)<<0&268435455)>>>0},e.Color4f=function(e,t,n,r){return r===void 0&&(r=1),Float32Array.of(e,t,n,r)},Object.defineProperty(e,`TRANSPARENT`,{get:function(){return e.Color4f(0,0,0,0)}}),Object.defineProperty(e,`BLACK`,{get:function(){return e.Color4f(0,0,0,1)}}),Object.defineProperty(e,`WHITE`,{get:function(){return e.Color4f(1,1,1,1)}}),Object.defineProperty(e,`RED`,{get:function(){return e.Color4f(1,0,0,1)}}),Object.defineProperty(e,`GREEN`,{get:function(){return e.Color4f(0,1,0,1)}}),Object.defineProperty(e,`BLUE`,{get:function(){return e.Color4f(0,0,1,1)}}),Object.defineProperty(e,`YELLOW`,{get:function(){return e.Color4f(1,1,0,1)}}),Object.defineProperty(e,`CYAN`,{get:function(){return e.Color4f(0,1,1,1)}}),Object.defineProperty(e,`MAGENTA`,{get:function(){return e.Color4f(1,0,1,1)}}),e.getColorComponents=function(e){return[Math.floor(255*e[0]),Math.floor(255*e[1]),Math.floor(255*e[2]),e[3]]},e.parseColorString=function(t,n){if(t=t.toLowerCase(),t.startsWith(`#`)){switch(n=255,t.length){case 9:n=parseInt(t.slice(7,9),16);case 7:var r=parseInt(t.slice(1,3),16),i=parseInt(t.slice(3,5),16),a=parseInt(t.slice(5,7),16);break;case 5:n=17*parseInt(t.slice(4,5),16);case 4:r=17*parseInt(t.slice(1,2),16),i=17*parseInt(t.slice(2,3),16),a=17*parseInt(t.slice(3,4),16)}return e.Color(r,i,a,n/255)}return t.startsWith(`rgba`)?(t=t.slice(5,-1),t=t.split(`,`),e.Color(+t[0],+t[1],+t[2],s(t[3]))):t.startsWith(`rgb`)?(t=t.slice(4,-1),t=t.split(`,`),e.Color(+t[0],+t[1],+t[2],s(t[3]))):t.startsWith(`gray(`)||t.startsWith(`hsl`)||!n||(t=n[t],t===void 0)?e.BLACK:t},e.multiplyByAlpha=function(e,t){return e=e.slice(),e[3]=Math.max(0,Math.min(e[3]*t,1)),e},e.Malloc=function(t,n){var r=e._malloc(n*t.BYTES_PER_ELEMENT);return{_ck:!0,length:n,byteOffset:r,Je:null,subarray:function(e,t){return e=this.toTypedArray().subarray(e,t),e._ck=!0,e},toTypedArray:function(){return this.Je&&this.Je.length?this.Je:(this.Je=new t(e.HEAPU8.buffer,r,n),this.Je._ck=!0,this.Je)}}},e.Free=function(t){e._free(t.byteOffset),t.byteOffset=I,t.toTypedArray=null,t.Je=null};var S=I,C,w=I,T,D=I,O,k,A=I,j,ee=I,te,M=I,ne,N=I,re,ie=I,P,ae=I,oe,se=I,F=Float32Array.of(0,0,1),I=0;e.onRuntimeInitialized=function(){function t(t,n,r,i,a,o,s){o||(o=4*i.width,i.colorType===e.ColorType.RGBA_F16?o*=2:i.colorType===e.ColorType.RGBA_F32&&(o*=4));var c=o*i.height,l=a?a.byteOffset:e._malloc(c);if(s?!t._readPixels(i,l,o,n,r,s):!t._readPixels(i,l,o,n,r))return a||e._free(l),null;if(a)return a.toTypedArray();switch(i.colorType){case e.ColorType.RGBA_8888:case e.ColorType.RGBA_F16:t=new Uint8Array(e.HEAPU8.buffer,l,c).slice();break;case e.ColorType.RGBA_F32:t=new Float32Array(e.HEAPU8.buffer,l,c).slice();break;default:return null}return e._free(l),t}O=e.Malloc(Float32Array,4),D=O.byteOffset,T=e.Malloc(Float32Array,16),w=T.byteOffset,C=e.Malloc(Float32Array,9),S=C.byteOffset,P=e.Malloc(Float32Array,12),ae=P.byteOffset,oe=e.Malloc(Float32Array,12),se=oe.byteOffset,k=e.Malloc(Float32Array,4),A=k.byteOffset,j=e.Malloc(Float32Array,4),ee=j.byteOffset,te=e.Malloc(Float32Array,3),M=te.byteOffset,ne=e.Malloc(Float32Array,3),N=ne.byteOffset,re=e.Malloc(Int32Array,4),ie=re.byteOffset,e.ColorSpace.SRGB=e.ColorSpace._MakeSRGB(),e.ColorSpace.DISPLAY_P3=e.ColorSpace._MakeDisplayP3(),e.ColorSpace.ADOBE_RGB=e.ColorSpace._MakeAdobeRGB(),e.GlyphRunFlags={IsWhiteSpace:e._GlyphRunFlags_isWhiteSpace},e.Path.MakeFromCmds=function(t){var n=u(t,`HEAPF32`),r=e.Path._MakeFromCmds(n,t.length);return l(n,t),r},e.Path.MakeFromVerbsPointsWeights=function(t,n,r){var i=u(t,`HEAPU8`),a=u(n,`HEAPF32`),o=u(r,`HEAPF32`),s=e.Path._MakeFromVerbsPointsWeights(i,t.length,a,n.length,o,r&&r.length||0);return l(i,t),l(a,n),l(o,r),s},e.Path.prototype.addArc=function(e,t,n){return e=_(e),this._addArc(e,t,n),this},e.Path.prototype.addCircle=function(e,t,n,r){return this._addCircle(e,t,n,!!r),this},e.Path.prototype.addOval=function(e,t,n){return n===void 0&&(n=1),e=_(e),this._addOval(e,!!t,n),this},e.Path.prototype.addPath=function(){var e=Array.prototype.slice.call(arguments),t=e[0],n=!1;if(typeof e[e.length-1]==`boolean`&&(n=e.pop()),e.length===1)this._addPath(t,1,0,0,0,1,0,0,0,1,n);else if(e.length===2)e=e[1],this._addPath(t,e[0],e[1],e[2],e[3],e[4],e[5],e[6]||0,e[7]||0,e[8]||1,n);else if(e.length===7||e.length===10)this._addPath(t,e[1],e[2],e[3],e[4],e[5],e[6],e[7]||0,e[8]||0,e[9]||1,n);else return null;return this},e.Path.prototype.addPoly=function(e,t){var n=u(e,`HEAPF32`);return this._addPoly(n,e.length/2,t),l(n,e),this},e.Path.prototype.addRect=function(e,t){return e=_(e),this._addRect(e,!!t),this},e.Path.prototype.addRRect=function(e,t){return e=v(e),this._addRRect(e,!!t),this},e.Path.prototype.addVerbsPointsWeights=function(e,t,n){var r=u(e,`HEAPU8`),i=u(t,`HEAPF32`),a=u(n,`HEAPF32`);this._addVerbsPointsWeights(r,e.length,i,t.length,a,n&&n.length||0),l(r,e),l(i,t),l(a,n)},e.Path.prototype.arc=function(t,n,r,i,a,o){return t=e.LTRBRect(t-r,n-r,t+r,n+r),a=(a-i)/Math.PI*180-360*!!o,o=new e.Path,o.addArc(t,i/Math.PI*180,a),this.addPath(o,!0),o.delete(),this},e.Path.prototype.arcToOval=function(e,t,n,r){return e=_(e),this._arcToOval(e,t,n,r),this},e.Path.prototype.arcToRotated=function(e,t,n,r,i,a,o){return this._arcToRotated(e,t,n,!!r,!!i,a,o),this},e.Path.prototype.arcToTangent=function(e,t,n,r,i){return this._arcToTangent(e,t,n,r,i),this},e.Path.prototype.close=function(){return this._close(),this},e.Path.prototype.conicTo=function(e,t,n,r,i){return this._conicTo(e,t,n,r,i),this},e.Path.prototype.computeTightBounds=function(e){this._computeTightBounds(A);var t=k.toTypedArray();return e?(e.set(t),e):t.slice()},e.Path.prototype.cubicTo=function(e,t,n,r,i,a){return this._cubicTo(e,t,n,r,i,a),this},e.Path.prototype.dash=function(e,t,n){return this._dash(e,t,n)?this:null},e.Path.prototype.getBounds=function(e){this._getBounds(A);var t=k.toTypedArray();return e?(e.set(t),e):t.slice()},e.Path.prototype.lineTo=function(e,t){return this._lineTo(e,t),this},e.Path.prototype.moveTo=function(e,t){return this._moveTo(e,t),this},e.Path.prototype.offset=function(e,t){return this._transform(1,0,e,0,1,t,0,0,1),this},e.Path.prototype.quadTo=function(e,t,n,r){return this._quadTo(e,t,n,r),this},e.Path.prototype.rArcTo=function(e,t,n,r,i,a,o){return this._rArcTo(e,t,n,r,i,a,o),this},e.Path.prototype.rConicTo=function(e,t,n,r,i){return this._rConicTo(e,t,n,r,i),this},e.Path.prototype.rCubicTo=function(e,t,n,r,i,a){return this._rCubicTo(e,t,n,r,i,a),this},e.Path.prototype.rLineTo=function(e,t){return this._rLineTo(e,t),this},e.Path.prototype.rMoveTo=function(e,t){return this._rMoveTo(e,t),this},e.Path.prototype.rQuadTo=function(e,t,n,r){return this._rQuadTo(e,t,n,r),this},e.Path.prototype.stroke=function(t){return t||={},t.width=t.width||1,t.miter_limit=t.miter_limit||4,t.cap=t.cap||e.StrokeCap.Butt,t.join=t.join||e.StrokeJoin.Miter,t.precision=t.precision||1,this._stroke(t)?this:null},e.Path.prototype.transform=function(){if(arguments.length===1){var e=arguments[0];this._transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6]||0,e[7]||0,e[8]||1)}else if(arguments.length===6||arguments.length===9)e=arguments,this._transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6]||0,e[7]||0,e[8]||1);else throw`transform expected to take 1 or 9 arguments. Got `+arguments.length;return this},e.Path.prototype.trim=function(e,t,n){return this._trim(e,t,!!n)?this:null},e.Image.prototype.encodeToBytes=function(t,n){var r=e.mf();return t||=e.ImageFormat.PNG,n||=100,r?this._encodeToBytes(t,n,r):this._encodeToBytes(t,n)},e.Image.prototype.makeShaderCubic=function(e,t,n,r,i){return i=f(i),this._makeShaderCubic(e,t,n,r,i)},e.Image.prototype.makeShaderOptions=function(e,t,n,r,i){return i=f(i),this._makeShaderOptions(e,t,n,r,i)},e.Image.prototype.readPixels=function(n,r,i,a,o){var s=e.mf();return t(this,n,r,i,a,o,s)},e.Canvas.prototype.clear=function(t){e.de(this.be),t=m(t),this._clear(t)},e.Canvas.prototype.clipRRect=function(t,n,r){e.de(this.be),t=v(t),this._clipRRect(t,n,r)},e.Canvas.prototype.clipRect=function(t,n,r){e.de(this.be),t=_(t),this._clipRect(t,n,r)},e.Canvas.prototype.concat=function(t){e.de(this.be),t=p(t),this._concat(t)},e.Canvas.prototype.drawArc=function(t,n,r,i,a){e.de(this.be),t=_(t),this._drawArc(t,n,r,i,a)},e.Canvas.prototype.drawAtlas=function(t,n,r,i,a,s,c){if(t&&i&&n&&r&&n.length===r.length){e.de(this.be),a||=e.BlendMode.SrcOver;var d=u(n,`HEAPF32`),f=u(r,`HEAPF32`),p=r.length/4,m=u(o(s),`HEAPU32`);if(c&&`B`in c&&`C`in c)this._drawAtlasCubic(t,f,d,m,p,a,c.B,c.C,i);else{let n=e.FilterMode.Linear,r=e.MipmapMode.None;c&&(n=c.filter,`mipmap`in c&&(r=c.mipmap)),this._drawAtlasOptions(t,f,d,m,p,a,n,r,i)}l(d,n),l(f,r),l(m,s)}},e.Canvas.prototype.drawCircle=function(t,n,r,i){e.de(this.be),this._drawCircle(t,n,r,i)},e.Canvas.prototype.drawColor=function(t,n){e.de(this.be),t=m(t),n===void 0?this._drawColor(t):this._drawColor(t,n)},e.Canvas.prototype.drawColorInt=function(t,n){e.de(this.be),this._drawColorInt(t,n||e.BlendMode.SrcOver)},e.Canvas.prototype.drawColorComponents=function(t,n,r,i,a){e.de(this.be),t=h(t,n,r,i),a===void 0?this._drawColor(t):this._drawColor(t,a)},e.Canvas.prototype.drawDRRect=function(t,n,r){e.de(this.be),t=v(t,ae),n=v(n,se),this._drawDRRect(t,n,r)},e.Canvas.prototype.drawImage=function(t,n,r,i){e.de(this.be),this._drawImage(t,n,r,i||null)},e.Canvas.prototype.drawImageCubic=function(t,n,r,i,a,o){e.de(this.be),this._drawImageCubic(t,n,r,i,a,o||null)},e.Canvas.prototype.drawImageOptions=function(t,n,r,i,a,o){e.de(this.be),this._drawImageOptions(t,n,r,i,a,o||null)},e.Canvas.prototype.drawImageNine=function(t,n,r,i,a){e.de(this.be),n=u(n,`HEAP32`,ie),r=_(r),this._drawImageNine(t,n,r,i,a||null)},e.Canvas.prototype.drawImageRect=function(t,n,r,i,a){e.de(this.be),_(n,A),_(r,ee),this._drawImageRect(t,A,ee,i,!!a)},e.Canvas.prototype.drawImageRectCubic=function(t,n,r,i,a,o){e.de(this.be),_(n,A),_(r,ee),this._drawImageRectCubic(t,A,ee,i,a,o||null)},e.Canvas.prototype.drawImageRectOptions=function(t,n,r,i,a,o){e.de(this.be),_(n,A),_(r,ee),this._drawImageRectOptions(t,A,ee,i,a,o||null)},e.Canvas.prototype.drawLine=function(t,n,r,i,a){e.de(this.be),this._drawLine(t,n,r,i,a)},e.Canvas.prototype.drawOval=function(t,n){e.de(this.be),t=_(t),this._drawOval(t,n)},e.Canvas.prototype.drawPaint=function(t){e.de(this.be),this._drawPaint(t)},e.Canvas.prototype.drawParagraph=function(t,n,r){e.de(this.be),this._drawParagraph(t,n,r)},e.Canvas.prototype.drawPatch=function(t,n,r,i,a){if(24>t.length)throw`Need 12 cubic points`;if(n&&4>n.length)throw`Need 4 colors`;if(r&&8>r.length)throw`Need 4 shader coordinates`;e.de(this.be);let s=u(t,`HEAPF32`),c=n?u(o(n),`HEAPU32`):I,d=r?u(r,`HEAPF32`):I;i||=e.BlendMode.Modulate,this._drawPatch(s,c,d,i,a),l(d,r),l(c,n),l(s,t)},e.Canvas.prototype.drawPath=function(t,n){e.de(this.be),this._drawPath(t,n)},e.Canvas.prototype.drawPicture=function(t){e.de(this.be),this._drawPicture(t)},e.Canvas.prototype.drawPoints=function(t,n,r){e.de(this.be);var i=u(n,`HEAPF32`);this._drawPoints(t,i,n.length/2,r),l(i,n)},e.Canvas.prototype.drawRRect=function(t,n){e.de(this.be),t=v(t),this._drawRRect(t,n)},e.Canvas.prototype.drawRect=function(t,n){e.de(this.be),t=_(t),this._drawRect(t,n)},e.Canvas.prototype.drawRect4f=function(t,n,r,i,a){e.de(this.be),this._drawRect4f(t,n,r,i,a)},e.Canvas.prototype.drawShadow=function(t,n,r,i,a,o,s){e.de(this.be);var c=u(a,`HEAPF32`),d=u(o,`HEAPF32`);n=u(n,`HEAPF32`,M),r=u(r,`HEAPF32`,N),this._drawShadow(t,n,r,i,c,d,s),l(c,a),l(d,o)},e.getShadowLocalBounds=function(e,t,n,r,i,a,o){return e=f(e),n=u(n,`HEAPF32`,M),r=u(r,`HEAPF32`,N),this._getShadowLocalBounds(e,t,n,r,i,a,A)?(t=k.toTypedArray(),o?(o.set(t),o):t.slice()):null},e.Canvas.prototype.drawTextBlob=function(t,n,r,i){e.de(this.be),this._drawTextBlob(t,n,r,i)},e.Canvas.prototype.drawVertices=function(t,n,r){e.de(this.be),this._drawVertices(t,n,r)},e.Canvas.prototype.getDeviceClipBounds=function(e){this._getDeviceClipBounds(ie);var t=re.toTypedArray();return e?e.set(t):e=t.slice(),e},e.Canvas.prototype.quickReject=function(e){return e=_(e),this._quickReject(e)},e.Canvas.prototype.getLocalToDevice=function(){this._getLocalToDevice(w);for(var t=w,n=Array(16),r=0;16>r;r++)n[r]=e.HEAPF32[t/4+r];return n},e.Canvas.prototype.getTotalMatrix=function(){this._getTotalMatrix(S);for(var t=Array(9),n=0;9>n;n++)t[n]=e.HEAPF32[S/4+n];return t},e.Canvas.prototype.makeSurface=function(e){return e=this._makeSurface(e),e.be=this.be,e},e.Canvas.prototype.readPixels=function(n,r,i,a,o){return e.de(this.be),t(this,n,r,i,a,o)},e.Canvas.prototype.saveLayer=function(t,n,r,i,a){return n=_(n),this._saveLayer(t||null,n,r||null,i||0,a||e.TileMode.Clamp)},e.Canvas.prototype.writePixels=function(t,n,r,i,a,o,s,c){if(t.byteLength%(n*r))throw`pixels length must be a multiple of the srcWidth * srcHeight`;e.de(this.be);var d=t.byteLength/(n*r);o||=e.AlphaType.Unpremul,s||=e.ColorType.RGBA_8888,c||=e.ColorSpace.SRGB;var f=d*n;return d=u(t,`HEAPU8`),n=this._writePixels({width:n,height:r,colorType:s,alphaType:o,colorSpace:c},d,f,i,a),l(d,t),n},e.ColorFilter.MakeBlend=function(t,n,r){return t=m(t),r||=e.ColorSpace.SRGB,e.ColorFilter._MakeBlend(t,n,r)},e.ColorFilter.MakeMatrix=function(t){if(!t||t.length!==20)throw`invalid color matrix`;var n=u(t,`HEAPF32`),r=e.ColorFilter._makeMatrix(n);return l(n,t),r},e.ContourMeasure.prototype.getPosTan=function(e,t){return this._getPosTan(e,A),e=k.toTypedArray(),t?(t.set(e),t):e.slice()},e.ImageFilter.prototype.getOutputBounds=function(e,t,n){return e=_(e,A),t=f(t),this._getOutputBounds(e,t,ie),t=re.toTypedArray(),n?(n.set(t),n):t.slice()},e.ImageFilter.MakeDropShadow=function(t,n,r,i,a,o){return a=m(a,D),e.ImageFilter._MakeDropShadow(t,n,r,i,a,o)},e.ImageFilter.MakeDropShadowOnly=function(t,n,r,i,a,o){return a=m(a,D),e.ImageFilter._MakeDropShadowOnly(t,n,r,i,a,o)},e.ImageFilter.MakeImage=function(t,n,r,i){if(r=_(r,A),i=_(i,ee),`B`in n&&`C`in n)return e.ImageFilter._MakeImageCubic(t,n.B,n.C,r,i);let a=n.filter,o=e.MipmapMode.None;return`mipmap`in n&&(o=n.mipmap),e.ImageFilter._MakeImageOptions(t,a,o,r,i)},e.ImageFilter.MakeMatrixTransform=function(t,n,r){if(t=f(t),`B`in n&&`C`in n)return e.ImageFilter._MakeMatrixTransformCubic(t,n.B,n.C,r);let i=n.filter,a=e.MipmapMode.None;return`mipmap`in n&&(a=n.mipmap),e.ImageFilter._MakeMatrixTransformOptions(t,i,a,r)},e.Paint.prototype.getColor=function(){return this._getColor(D),g(D)},e.Paint.prototype.setColor=function(e,t){t||=null,e=m(e),this._setColor(e,t)},e.Paint.prototype.setColorComponents=function(e,t,n,r,i){i||=null,e=h(e,t,n,r),this._setColor(e,i)},e.Path.prototype.getPoint=function(e,t){return this._getPoint(e,A),e=k.toTypedArray(),t?(t[0]=e[0],t[1]=e[1],t):e.slice(0,2)},e.Picture.prototype.makeShader=function(e,t,n,r,i){return r=f(r),i=_(i),this._makeShader(e,t,n,r,i)},e.Picture.prototype.cullRect=function(e){this._cullRect(A);var t=k.toTypedArray();return e?(e.set(t),e):t.slice()},e.PictureRecorder.prototype.beginRecording=function(e,t){return e=_(e),this._beginRecording(e,!!t)},e.Surface.prototype.getCanvas=function(){var e=this._getCanvas();return e.be=this.be,e},e.Surface.prototype.makeImageSnapshot=function(t){return e.de(this.be),t=u(t,`HEAP32`,ie),this._makeImageSnapshot(t)},e.Surface.prototype.makeSurface=function(t){return e.de(this.be),t=this._makeSurface(t),t.be=this.be,t},e.Surface.prototype.Wf=function(t,n){return this.Ze||=this.getCanvas(),requestAnimationFrame(function(){e.de(this.be),t(this.Ze),this.flush(n)}.bind(this))},e.Surface.prototype.requestAnimationFrame||(e.Surface.prototype.requestAnimationFrame=e.Surface.prototype.Wf),e.Surface.prototype.Sf=function(t,n){this.Ze||=this.getCanvas(),requestAnimationFrame(function(){e.de(this.be),t(this.Ze),this.flush(n),this.dispose()}.bind(this))},e.Surface.prototype.drawOnce||(e.Surface.prototype.drawOnce=e.Surface.prototype.Sf),e.PathEffect.MakeDash=function(t,n){if(n||=0,!t.length||t.length%2==1)throw`Intervals array must have even length`;var r=u(t,`HEAPF32`);return n=e.PathEffect._MakeDash(r,t.length,n),l(r,t),n},e.PathEffect.MakeLine2D=function(t,n){return n=f(n),e.PathEffect._MakeLine2D(t,n)},e.PathEffect.MakePath2D=function(t,n){return t=f(t),e.PathEffect._MakePath2D(t,n)},e.Shader.MakeColor=function(t,n){return n||=null,t=m(t),e.Shader._MakeColor(t,n)},e.Shader.Blend=e.Shader.MakeBlend,e.Shader.Color=e.Shader.MakeColor,e.Shader.MakeLinearGradient=function(t,n,r,i,a,o,s,c){c||=null;var p=d(r),m=u(i,`HEAPF32`);s||=0,o=f(o);var h=k.toTypedArray();return h.set(t),h.set(n,2),t=e.Shader._MakeLinearGradient(A,p.te,p.colorType,m,p.count,a,s,o,c),l(p.te,r),i&&l(m,i),t},e.Shader.MakeRadialGradient=function(t,n,r,i,a,o,s,c){c||=null;var p=d(r),m=u(i,`HEAPF32`);return s||=0,o=f(o),t=e.Shader._MakeRadialGradient(t[0],t[1],n,p.te,p.colorType,m,p.count,a,s,o,c),l(p.te,r),i&&l(m,i),t},e.Shader.MakeSweepGradient=function(t,n,r,i,a,o,s,c,p,m){m||=null;var h=d(r),g=u(i,`HEAPF32`);return s||=0,c||=0,p||=360,o=f(o),t=e.Shader._MakeSweepGradient(t,n,h.te,h.colorType,g,h.count,a,c,p,s,o,m),l(h.te,r),i&&l(g,i),t},e.Shader.MakeTwoPointConicalGradient=function(t,n,r,i,a,o,s,c,p,m){m||=null;var h=d(a),g=u(o,`HEAPF32`);p||=0,c=f(c);var _=k.toTypedArray();return _.set(t),_.set(r,2),t=e.Shader._MakeTwoPointConicalGradient(A,n,i,h.te,h.colorType,g,h.count,s,p,c,m),l(h.te,a),o&&l(g,o),t},e.Vertices.prototype.bounds=function(e){this._bounds(A);var t=k.toTypedArray();return e?(e.set(t),e):t.slice()},e.ke&&e.ke.forEach(function(e){e()})},e.computeTonalColors=function(e){var t=u(e.ambient,`HEAPF32`),n=u(e.spot,`HEAPF32`);this._computeTonalColors(t,n);var r={ambient:g(t),spot:g(n)};return l(t,e.ambient),l(n,e.spot),r},e.LTRBRect=function(e,t,n,r){return Float32Array.of(e,t,n,r)},e.XYWHRect=function(e,t,n,r){return Float32Array.of(e,t,e+n,t+r)},e.LTRBiRect=function(e,t,n,r){return Int32Array.of(e,t,n,r)},e.XYWHiRect=function(e,t,n,r){return Int32Array.of(e,t,e+n,t+r)},e.RRectXY=function(e,t,n){return Float32Array.of(e[0],e[1],e[2],e[3],t,n,t,n,t,n,t,n)},e.MakeAnimatedImageFromEncoded=function(t){t=new Uint8Array(t);var n=e._malloc(t.byteLength);return e.HEAPU8.set(t,n),(t=e._decodeAnimatedImage(n,t.byteLength))?t:null},e.MakeImageFromEncoded=function(t){t=new Uint8Array(t);var n=e._malloc(t.byteLength);return e.HEAPU8.set(t,n),(t=e._decodeImage(n,t.byteLength))?t:null};var ce=null;e.MakeImageFromCanvasImageSource=function(t){var n=t.width,r=t.height;ce||=document.createElement(`canvas`),ce.width=n,ce.height=r;var i=ce.getContext(`2d`,{willReadFrequently:!0});return i.drawImage(t,0,0),t=i.getImageData(0,0,n,r),e.MakeImage({width:n,height:r,alphaType:e.AlphaType.Unpremul,colorType:e.ColorType.RGBA_8888,colorSpace:e.ColorSpace.SRGB},t.data,4*n)},e.MakeImage=function(t,n,r){var i=e._malloc(n.length);return e.HEAPU8.set(n,i),e._MakeImage(t,i,n.length,r)},e.MakeVertices=function(t,n,r,i,a,s){var c=a&&a.length||0,l=0;return r&&r.length&&(l|=1),i&&i.length&&(l|=2),s===void 0||s||(l|=4),t=new e._VerticesBuilder(t,n.length/2,c,l),u(n,`HEAPF32`,t.positions()),t.texCoords()&&u(r,`HEAPF32`,t.texCoords()),t.colors()&&u(o(i),`HEAPU32`,t.colors()),t.indices()&&u(a,`HEAPU16`,t.indices()),t.detach()},e.Matrix={},e.Matrix.identity=function(){return r(3)},e.Matrix.invert=function(e){var t=e[0]*e[4]*e[8]+e[1]*e[5]*e[6]+e[2]*e[3]*e[7]-e[2]*e[4]*e[6]-e[1]*e[3]*e[8]-e[0]*e[5]*e[7];return t?[(e[4]*e[8]-e[5]*e[7])/t,(e[2]*e[7]-e[1]*e[8])/t,(e[1]*e[5]-e[2]*e[4])/t,(e[5]*e[6]-e[3]*e[8])/t,(e[0]*e[8]-e[2]*e[6])/t,(e[2]*e[3]-e[0]*e[5])/t,(e[3]*e[7]-e[4]*e[6])/t,(e[1]*e[6]-e[0]*e[7])/t,(e[0]*e[4]-e[1]*e[3])/t]:null},e.Matrix.mapPoints=function(e,t){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1],a=e[6]*r+e[7]*i+e[8],o=e[3]*r+e[4]*i+e[5];t[n]=(e[0]*r+e[1]*i+e[2])/a,t[n+1]=o/a}return t},e.Matrix.multiply=function(){return x(3,arguments)},e.Matrix.rotated=function(e,t,n){t||=0,n||=0;var r=Math.sin(e);return e=Math.cos(e),[e,-r,y(r,n,1-e,t),r,e,y(-r,t,1-e,n),0,0,1]},e.Matrix.scaled=function(e,n,i,a){i||=0,a||=0;var o=t([e,n],r(3),3,0,1);return t([i-e*i,a-n*a],o,3,2,0)},e.Matrix.skewed=function(e,n,i,a){i||=0,a||=0;var o=t([e,n],r(3),3,1,-1);return t([-e*i,-n*a],o,3,2,0)},e.Matrix.translated=function(e,n){return t(arguments,r(3),3,2,0)},e.Vector={},e.Vector.dot=function(e,t){return e.map(function(e,n){return e*t[n]}).reduce(function(e,t){return e+t})},e.Vector.lengthSquared=function(t){return e.Vector.dot(t,t)},e.Vector.length=function(t){return Math.sqrt(e.Vector.lengthSquared(t))},e.Vector.mulScalar=function(e,t){return e.map(function(e){return e*t})},e.Vector.add=function(e,t){return e.map(function(e,n){return e+t[n]})},e.Vector.sub=function(e,t){return e.map(function(e,n){return e-t[n]})},e.Vector.dist=function(t,n){return e.Vector.length(e.Vector.sub(t,n))},e.Vector.normalize=function(t){return e.Vector.mulScalar(t,1/e.Vector.length(t))},e.Vector.cross=function(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]},e.M44={},e.M44.identity=function(){return r(4)},e.M44.translated=function(e){return t(e,r(4),4,3,0)},e.M44.scaled=function(e){return t(e,r(4),4,0,1)},e.M44.rotated=function(t,n){return e.M44.rotatedUnitSinCos(e.Vector.normalize(t),Math.sin(n),Math.cos(n))},e.M44.rotatedUnitSinCos=function(e,t,n){var r=e[0],i=e[1];e=e[2];var a=1-n;return[a*r*r+n,a*r*i-t*e,a*r*e+t*i,0,a*r*i+t*e,a*i*i+n,a*i*e-t*r,0,a*r*e-t*i,a*i*e+t*r,a*e*e+n,0,0,0,0,1]},e.M44.lookat=function(n,r,i){r=e.Vector.normalize(e.Vector.sub(r,n)),i=e.Vector.normalize(i),i=e.Vector.normalize(e.Vector.cross(r,i));var a=e.M44.identity();return t(i,a,4,0,0),t(e.Vector.cross(i,r),a,4,1,0),t(e.Vector.mulScalar(r,-1),a,4,2,0),t(n,a,4,3,0),n=e.M44.invert(a),n===null?e.M44.identity():n},e.M44.perspective=function(e,t,n){var r=1/(t-e);return n/=2,n=Math.cos(n)/Math.sin(n),[n,0,0,0,0,n,0,0,0,0,(t+e)*r,2*t*e*r,0,0,-1,1]},e.M44.rc=function(e,t,n){return e[4*t+n]},e.M44.multiply=function(){return x(4,arguments)},e.M44.invert=function(e){var t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11];e=e[15];var g=t*o-n*a,_=t*s-r*a,v=t*c-i*a,y=n*s-r*o,b=n*c-i*o,x=r*c-i*s,S=l*m-u*p,C=l*h-d*p,w=l*e-f*p,T=u*h-d*m,E=u*e-f*m,D=d*e-f*h,O=g*D-_*E+v*T+y*w-b*C+x*S,k=1/O;return O===0||k===1/0?null:(g*=k,_*=k,v*=k,y*=k,b*=k,x*=k,S*=k,C*=k,w*=k,T*=k,E*=k,D*=k,t=[o*D-s*E+c*T,s*w-a*D-c*C,a*E-o*w+c*S,o*C-a*T-s*S,r*E-n*D-i*T,t*D-r*w+i*C,n*w-t*E-i*S,t*T-n*C+r*S,m*x-h*b+e*y,h*v-p*x-e*_,p*b-m*v+e*g,m*_-p*y-h*g,d*b-u*x-f*y,l*x-d*v+f*_,u*v-l*b-f*g,l*y-u*_+d*g],t.every(function(e){return!isNaN(e)&&e!==1/0&&e!==-1/0})?t:null)},e.M44.transpose=function(e){return[e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]]},e.M44.mustInvert=function(t){if(t=e.M44.invert(t),t===null)throw`Matrix not invertible`;return t},e.M44.setupCamera=function(t,n,r){var i=e.M44.lookat(r.eye,r.coa,r.up);return r=e.M44.perspective(r.near,r.far,r.angle),n=[(t[2]-t[0])/2,(t[3]-t[1])/2,n],t=e.M44.multiply(e.M44.translated([(t[0]+t[2])/2,(t[1]+t[3])/2,0]),e.M44.scaled(n)),e.M44.multiply(t,r,i,e.M44.mustInvert(t))},e.ColorMatrix={},e.ColorMatrix.identity=function(){var e=new Float32Array(20);return e[0]=1,e[6]=1,e[12]=1,e[18]=1,e},e.ColorMatrix.scaled=function(e,t,n,r){var i=new Float32Array(20);return i[0]=e,i[6]=t,i[12]=n,i[18]=r,i};var L=[[6,7,11,12],[0,10,2,12],[0,1,5,6]];e.ColorMatrix.rotated=function(t,n,r){var i=e.ColorMatrix.identity();return t=L[t],i[t[0]]=r,i[t[1]]=n,i[t[2]]=-n,i[t[3]]=r,i},e.ColorMatrix.postTranslate=function(e,t,n,r,i){return e[4]+=t,e[9]+=n,e[14]+=r,e[19]+=i,e},e.ColorMatrix.concat=function(e,t){for(var n=new Float32Array(20),r=0,i=0;20>i;i+=5){for(var a=0;4>a;a++)n[r++]=e[i]*t[a]+e[i+1]*t[a+5]+e[i+2]*t[a+10]+e[i+3]*t[a+15];n[r++]=e[i]*t[4]+e[i+1]*t[9]+e[i+2]*t[14]+e[i+3]*t[19]+e[i+4]}return n},(function(e){e.ke=e.ke||[],e.ke.push(function(){function t(t){return t&&(t.dir=t.dir===0?e.TextDirection.RTL:e.TextDirection.LTR),t}function n(t){if(!t||!t.length)return[];for(var n=[],r=0;r<t.length;r+=5){var i=e.LTRBRect(t[r],t[r+1],t[r+2],t[r+3]),a=e.TextDirection.LTR;t[r+4]===0&&(a=e.TextDirection.RTL),n.push({rect:i,dir:a})}return e._free(t.byteOffset),n}function r(t){return t||={},t.weight===void 0&&(t.weight=e.FontWeight.Normal),t.width=t.width||e.FontWidth.Normal,t.slant=t.slant||e.FontSlant.Upright,t}function i(e){if(!e||!e.length)return I;for(var t=[],n=0;n<e.length;n++){var r=a(e[n]);t.push(r)}return u(t,`HEAPU32`)}function a(t){if(c[t])return c[t];var n=mt(t)+1,r=e._malloc(n);return pt(t,E,r,n),c[t]=r}function o(t){if(t._colorPtr=m(t.color),t._foregroundColorPtr=I,t._backgroundColorPtr=I,t._decorationColorPtr=I,t.foregroundColor&&(t._foregroundColorPtr=m(t.foregroundColor,f)),t.backgroundColor&&(t._backgroundColorPtr=m(t.backgroundColor,p)),t.decorationColor&&(t._decorationColorPtr=m(t.decorationColor,h)),Array.isArray(t.fontFamilies)&&t.fontFamilies.length?(t._fontFamiliesPtr=i(t.fontFamilies),t._fontFamiliesLen=t.fontFamilies.length):(t._fontFamiliesPtr=I,t._fontFamiliesLen=0),t.locale){var n=t.locale;t._localePtr=a(n),t._localeLen=mt(n)}else t._localePtr=I,t._localeLen=0;if(Array.isArray(t.shadows)&&t.shadows.length){n=t.shadows;var r=n.map(function(t){return t.color||e.BLACK}),o=n.map(function(e){return e.blurRadius||0});t._shadowLen=n.length;for(var s=e._malloc(8*n.length),c=s/4,l=0;l<n.length;l++){var g=n[l].offset||[0,0];e.HEAPF32[c]=g[0],e.HEAPF32[c+1]=g[1],c+=2}t._shadowColorsPtr=d(r).te,t._shadowOffsetsPtr=s,t._shadowBlurRadiiPtr=u(o,`HEAPF32`)}else t._shadowLen=0,t._shadowColorsPtr=I,t._shadowOffsetsPtr=I,t._shadowBlurRadiiPtr=I;Array.isArray(t.fontFeatures)&&t.fontFeatures.length?(n=t.fontFeatures,r=n.map(function(e){return e.name}),o=n.map(function(e){return e.value}),t._fontFeatureLen=n.length,t._fontFeatureNamesPtr=i(r),t._fontFeatureValuesPtr=u(o,`HEAPU32`)):(t._fontFeatureLen=0,t._fontFeatureNamesPtr=I,t._fontFeatureValuesPtr=I),Array.isArray(t.fontVariations)&&t.fontVariations.length?(n=t.fontVariations,r=n.map(function(e){return e.axis}),o=n.map(function(e){return e.value}),t._fontVariationLen=n.length,t._fontVariationAxesPtr=i(r),t._fontVariationValuesPtr=u(o,`HEAPF32`)):(t._fontVariationLen=0,t._fontVariationAxesPtr=I,t._fontVariationValuesPtr=I)}function s(t){e._free(t._fontFamiliesPtr),e._free(t._shadowColorsPtr),e._free(t._shadowOffsetsPtr),e._free(t._shadowBlurRadiiPtr),e._free(t._fontFeatureNamesPtr),e._free(t._fontFeatureValuesPtr),e._free(t._fontVariationAxesPtr),e._free(t._fontVariationValuesPtr)}e.Paragraph.prototype.getRectsForRange=function(e,t,r,i){return e=this._getRectsForRange(e,t,r,i),n(e)},e.Paragraph.prototype.getRectsForPlaceholders=function(){return n(this._getRectsForPlaceholders())},e.Paragraph.prototype.getGlyphInfoAt=function(e){return t(this._getGlyphInfoAt(e))},e.Paragraph.prototype.getClosestGlyphInfoAtCoordinate=function(e,n){return t(this._getClosestGlyphInfoAtCoordinate(e,n))},e.TypefaceFontProvider.prototype.registerFont=function(t,n){if(t=e.Typeface.MakeTypefaceFromData(t),!t)return null;n=a(n),this._registerFont(t,n),t.delete()},e.ParagraphStyle=function(t){if(t.disableHinting=t.disableHinting||!1,t.ellipsis){var n=t.ellipsis;t._ellipsisPtr=a(n),t._ellipsisLen=mt(n)}else t._ellipsisPtr=I,t._ellipsisLen=0;return t.heightMultiplier??=-1,t.maxLines=t.maxLines||0,t.replaceTabCharacters=t.replaceTabCharacters||!1,n=(n=t.strutStyle)||{},n.strutEnabled=n.strutEnabled||!1,n.strutEnabled&&Array.isArray(n.fontFamilies)&&n.fontFamilies.length?(n._fontFamiliesPtr=i(n.fontFamilies),n._fontFamiliesLen=n.fontFamilies.length):(n._fontFamiliesPtr=I,n._fontFamiliesLen=0),n.fontStyle=r(n.fontStyle),n.fontSize??=-1,n.heightMultiplier??=-1,n.halfLeading=n.halfLeading||!1,n.leading=n.leading||0,n.forceStrutHeight=n.forceStrutHeight||!1,t.strutStyle=n,t.textAlign=t.textAlign||e.TextAlign.Start,t.textDirection=t.textDirection||e.TextDirection.LTR,t.textHeightBehavior=t.textHeightBehavior||e.TextHeightBehavior.All,t.textStyle=e.TextStyle(t.textStyle),t.applyRoundingHack=!1!==t.applyRoundingHack,t},e.TextStyle=function(t){return t.color||=e.BLACK,t.decoration=t.decoration||0,t.decorationThickness=t.decorationThickness||0,t.decorationStyle=t.decorationStyle||e.DecorationStyle.Solid,t.textBaseline=t.textBaseline||e.TextBaseline.Alphabetic,t.fontSize??=-1,t.letterSpacing=t.letterSpacing||0,t.wordSpacing=t.wordSpacing||0,t.heightMultiplier??=-1,t.halfLeading=t.halfLeading||!1,t.fontStyle=r(t.fontStyle),t};var c={},f=e._malloc(16),p=e._malloc(16),h=e._malloc(16);e.ParagraphBuilder.Make=function(t,n){return o(t.textStyle),n=e.ParagraphBuilder._Make(t,n),s(t.textStyle),n},e.ParagraphBuilder.MakeFromFontProvider=function(t,n){return o(t.textStyle),n=e.ParagraphBuilder._MakeFromFontProvider(t,n),s(t.textStyle),n},e.ParagraphBuilder.MakeFromFontCollection=function(t,n){return o(t.textStyle),n=e.ParagraphBuilder._MakeFromFontCollection(t,n),s(t.textStyle),n},e.ParagraphBuilder.ShapeText=function(t,n,r){let i=0;for(let e of n)i+=e.length;if(i!==t.length)throw`Accumulated block lengths must equal text.length`;return e.ParagraphBuilder._ShapeText(t,n,r)},e.ParagraphBuilder.prototype.pushStyle=function(e){o(e),this._pushStyle(e),s(e)},e.ParagraphBuilder.prototype.pushPaintStyle=function(e,t,n){o(e),this._pushPaintStyle(e,t,n),s(e)},e.ParagraphBuilder.prototype.addPlaceholder=function(t,n,r,i,a){r||=e.PlaceholderAlignment.Baseline,i||=e.TextBaseline.Alphabetic,this._addPlaceholder(t||0,n||0,r,i,a||0)},e.ParagraphBuilder.prototype.setWordsUtf8=function(e){var t=u(e,`HEAPU32`);this._setWordsUtf8(t,e&&e.length||0),l(t,e)},e.ParagraphBuilder.prototype.setWordsUtf16=function(e){var t=u(e,`HEAPU32`);this._setWordsUtf16(t,e&&e.length||0),l(t,e)},e.ParagraphBuilder.prototype.setGraphemeBreaksUtf8=function(e){var t=u(e,`HEAPU32`);this._setGraphemeBreaksUtf8(t,e&&e.length||0),l(t,e)},e.ParagraphBuilder.prototype.setGraphemeBreaksUtf16=function(e){var t=u(e,`HEAPU32`);this._setGraphemeBreaksUtf16(t,e&&e.length||0),l(t,e)},e.ParagraphBuilder.prototype.setLineBreaksUtf8=function(e){var t=u(e,`HEAPU32`);this._setLineBreaksUtf8(t,e&&e.length||0),l(t,e)},e.ParagraphBuilder.prototype.setLineBreaksUtf16=function(e){var t=u(e,`HEAPU32`);this._setLineBreaksUtf16(t,e&&e.length||0),l(t,e)}})})(n),e.ke=e.ke||[],e.ke.push(function(){e.Path.prototype.op=function(e,t){return this._op(e,t)?this:null},e.Path.prototype.simplify=function(){return this._simplify()?this:null}}),e.ke=e.ke||[],e.ke.push(function(){e.Canvas.prototype.drawText=function(t,n,r,i,a){var o=mt(t),s=e._malloc(o+1);pt(t,E,s,o+1),this._drawSimpleText(s,o,n,r,a,i),e._free(s)},e.Canvas.prototype.drawGlyphs=function(t,n,r,i,a,o){if(!(2*t.length<=n.length))throw`Not enough positions for the array of gyphs`;e.de(this.be);let s=u(t,`HEAPU16`),c=u(n,`HEAPF32`);this._drawGlyphs(t.length,s,c,r,i,a,o),l(c,n),l(s,t)},e.Font.prototype.getGlyphBounds=function(t,n,r){var i=u(t,`HEAPU16`),a=e._malloc(16*t.length);return this._getGlyphWidthBounds(i,t.length,I,a,n||null),n=new Float32Array(e.HEAPU8.buffer,a,4*t.length),l(i,t),r?(r.set(n),e._free(a),r):(t=Float32Array.from(n),e._free(a),t)},e.Font.prototype.getGlyphIDs=function(t,n,r){n||=t.length;var i=mt(t)+1,a=e._malloc(i);return pt(t,E,a,i),t=e._malloc(2*n),n=this._getGlyphIDs(a,i-1,n,t),e._free(a),0>n?(e._free(t),null):(a=new Uint16Array(e.HEAPU8.buffer,t,n),r?(r.set(a),e._free(t),r):(r=Uint16Array.from(a),e._free(t),r))},e.Font.prototype.getGlyphIntercepts=function(e,t,n,r){var i=u(e,`HEAPU16`),a=u(t,`HEAPF32`);return this._getGlyphIntercepts(i,e.length,!(e&&e._ck),a,t.length,!(t&&t._ck),n,r)},e.Font.prototype.getGlyphWidths=function(t,n,r){var i=u(t,`HEAPU16`),a=e._malloc(4*t.length);return this._getGlyphWidthBounds(i,t.length,a,I,n||null),n=new Float32Array(e.HEAPU8.buffer,a,t.length),l(i,t),r?(r.set(n),e._free(a),r):(t=Float32Array.from(n),e._free(a),t)},e.FontMgr.FromData=function(){if(!arguments.length)return null;var t=arguments;if(t.length===1&&Array.isArray(t[0])&&(t=arguments[0]),!t.length)return null;for(var n=[],r=[],i=0;i<t.length;i++){var a=new Uint8Array(t[i]),o=u(a,`HEAPU8`);n.push(o),r.push(a.byteLength)}return n=u(n,`HEAPU32`),r=u(r,`HEAPU32`),t=e.FontMgr._fromData(n,r,t.length),e._free(n),e._free(r),t},e.Typeface.MakeTypefaceFromData=function(t){t=new Uint8Array(t);var n=u(t,`HEAPU8`);return(t=e.Typeface._MakeTypefaceFromData(n,t.byteLength))?t:null},e.Typeface.MakeFreeTypeFaceFromData=e.Typeface.MakeTypefaceFromData,e.Typeface.prototype.getGlyphIDs=function(t,n,r){n||=t.length;var i=mt(t)+1,a=e._malloc(i);return pt(t,E,a,i),t=e._malloc(2*n),n=this._getGlyphIDs(a,i-1,n,t),e._free(a),0>n?(e._free(t),null):(a=new Uint16Array(e.HEAPU8.buffer,t,n),r?(r.set(a),e._free(t),r):(r=Uint16Array.from(a),e._free(t),r))},e.TextBlob.MakeOnPath=function(t,n,r,i){if(t&&t.length&&n&&n.countPoints()){if(n.countPoints()===1)return this.MakeFromText(t,r);i||=0;var a=r.getGlyphIDs(t);a=r.getGlyphWidths(a);var o=[];n=new e.ContourMeasureIter(n,!1,1);for(var s=n.next(),c=new Float32Array(4),l=0;l<t.length&&s;l++){var u=a[l];if(i+=u/2,i>s.length()){if(s.delete(),s=n.next(),!s){t=t.substring(0,l);break}i=u/2}s.getPosTan(i,c);var d=c[2],f=c[3];o.push(d,f,c[0]-u/2*d,c[1]-u/2*f),i+=u/2}return t=this.MakeFromRSXform(t,o,r),s&&s.delete(),n.delete(),t}},e.TextBlob.MakeFromRSXform=function(t,n,r){var i=mt(t)+1,a=e._malloc(i);return pt(t,E,a,i),t=u(n,`HEAPF32`),r=e.TextBlob._MakeFromRSXform(a,i-1,t,r),e._free(a),r||null},e.TextBlob.MakeFromRSXformGlyphs=function(t,n,r){var i=u(t,`HEAPU16`);return n=u(n,`HEAPF32`),r=e.TextBlob._MakeFromRSXformGlyphs(i,2*t.length,n,r),l(i,t),r||null},e.TextBlob.MakeFromGlyphs=function(t,n){var r=u(t,`HEAPU16`);return n=e.TextBlob._MakeFromGlyphs(r,2*t.length,n),l(r,t),n||null},e.TextBlob.MakeFromText=function(t,n){var r=mt(t)+1,i=e._malloc(r);return pt(t,E,i,r),t=e.TextBlob._MakeFromText(i,r-1,n),e._free(i),t||null},e.MallocGlyphIDs=function(t){return e.Malloc(Uint16Array,t)}}),e.ke=e.ke||[],e.ke.push(function(){e.MakePicture=function(t){t=new Uint8Array(t);var n=e._malloc(t.byteLength);return e.HEAPU8.set(t,n),(t=e._MakePicture(n,t.byteLength))?t:null}}),e.ke=e.ke||[],e.ke.push(function(){e.RuntimeEffect.Make=function(t,n){return e.RuntimeEffect._Make(t,{onError:n||function(e){console.log(`RuntimeEffect error`,e)}})},e.RuntimeEffect.MakeForBlender=function(t,n){return e.RuntimeEffect._MakeForBlender(t,{onError:n||function(e){console.log(`RuntimeEffect error`,e)}})},e.RuntimeEffect.prototype.makeShader=function(e,t){var n=!e._ck,r=u(e,`HEAPF32`);return t=f(t),this._makeShader(r,4*e.length,n,t)},e.RuntimeEffect.prototype.makeShaderWithChildren=function(e,t,n){var r=!e._ck,i=u(e,`HEAPF32`);n=f(n);for(var a=[],o=0;o<t.length;o++)a.push(t[o].ae.ie);return t=u(a,`HEAPU32`),this._makeShaderWithChildren(i,4*e.length,r,t,a.length,n)},e.RuntimeEffect.prototype.makeBlender=function(e){var t=!e._ck,n=u(e,`HEAPF32`);return this._makeBlender(n,4*e.length,t)}}),(function(){function t(e){for(var t=0;t<e.length;t++)if(e[t]!==void 0&&!Number.isFinite(e[t]))return!1;return!0}function n(t){var n=e.getColorComponents(t);t=n[0];var r=n[1],i=n[2];return n=n[3],n===1?(t=t.toString(16).toLowerCase(),r=r.toString(16).toLowerCase(),i=i.toString(16).toLowerCase(),t=t.length===1?`0`+t:t,r=r.length===1?`0`+r:r,i=i.length===1?`0`+i:i,`#`+t+r+i):(n=n===0||n===1?n:n.toFixed(8),`rgba(`+t+`, `+r+`, `+i+`, `+n+`)`)}function r(t){return e.parseColorString(t,b)}function a(e){if(e=x.exec(e),!e)return null;var t=parseFloat(e[4]),n=16;switch(e[5]){case`em`:case`rem`:n=16*t;break;case`pt`:n=4*t/3;break;case`px`:n=t;break;case`pc`:n=16*t;break;case`in`:n=96*t;break;case`cm`:n=96*t/2.54;break;case`mm`:n=96/25.4*t;break;case`q`:n=96/25.4/4*t;break;case`%`:n=16/75*t}return{style:e[1],variant:e[2],weight:e[3],sizePx:n,family:e[6].trim()}}function o(){S||={"Noto Mono":{"*":e.Typeface.GetDefault()},monospace:{"*":e.Typeface.GetDefault()}}}function s(s){this.ce=s,this.fe=new e.Paint,this.fe.setAntiAlias(!0),this.fe.setStrokeMiter(10),this.fe.setStrokeCap(e.StrokeCap.Butt),this.fe.setStrokeJoin(e.StrokeJoin.Miter),this.kf=`10px monospace`,this.Fe=new e.Font(e.Typeface.GetDefault(),10),this.Fe.setSubpixel(!0),this.se=this.ye=e.BLACK,this.Oe=0,this.af=e.TRANSPARENT,this.Qe=this.Pe=0,this.bf=this.Be=1,this.$e=0,this.Ne=[],this.ee=e.BlendMode.SrcOver,this.fe.setStrokeWidth(this.bf),this.fe.setBlendMode(this.ee),this.he=new e.Path,this.je=e.Matrix.identity(),this.Ff=[],this.Ue=[],this.Ee=function(){this.he.delete(),this.fe.delete(),this.Fe.delete(),this.Ue.forEach(function(e){e.Ee()})},Object.defineProperty(this,`currentTransform`,{enumerable:!0,get:function(){return{a:this.je[0],c:this.je[1],e:this.je[2],b:this.je[3],d:this.je[4],f:this.je[5]}},set:function(e){e.a&&this.setTransform(e.a,e.b,e.c,e.d,e.e,e.f)}}),Object.defineProperty(this,`fillStyle`,{enumerable:!0,get:function(){return i(this.se)?n(this.se):this.se},set:function(e){typeof e==`string`?this.se=r(e):e.Me&&(this.se=e)}}),Object.defineProperty(this,`font`,{enumerable:!0,get:function(){return this.kf},set:function(t){var n=a(t),r=(n.style||`normal`)+`|`+(n.variant||`normal`)+`|`+(n.weight||`normal`),i=n.family;o(),r=S[i]?S[i][r]||S[i][`*`]:e.Typeface.GetDefault(),n.typeface=r,n&&(this.Fe.setSize(n.sizePx),this.Fe.setTypeface(n.typeface),this.kf=t)}}),Object.defineProperty(this,`globalAlpha`,{enumerable:!0,get:function(){return this.Be},set:function(e){!isFinite(e)||0>e||1<e||(this.Be=e)}}),Object.defineProperty(this,`globalCompositeOperation`,{enumerable:!0,get:function(){switch(this.ee){case e.BlendMode.SrcOver:return`source-over`;case e.BlendMode.DstOver:return`destination-over`;case e.BlendMode.Src:return`copy`;case e.BlendMode.Dst:return`destination`;case e.BlendMode.Clear:return`clear`;case e.BlendMode.SrcIn:return`source-in`;case e.BlendMode.DstIn:return`destination-in`;case e.BlendMode.SrcOut:return`source-out`;case e.BlendMode.DstOut:return`destination-out`;case e.BlendMode.SrcATop:return`source-atop`;case e.BlendMode.DstATop:return`destination-atop`;case e.BlendMode.Xor:return`xor`;case e.BlendMode.Plus:return`lighter`;case e.BlendMode.Multiply:return`multiply`;case e.BlendMode.Screen:return`screen`;case e.BlendMode.Overlay:return`overlay`;case e.BlendMode.Darken:return`darken`;case e.BlendMode.Lighten:return`lighten`;case e.BlendMode.ColorDodge:return`color-dodge`;case e.BlendMode.ColorBurn:return`color-burn`;case e.BlendMode.HardLight:return`hard-light`;case e.BlendMode.SoftLight:return`soft-light`;case e.BlendMode.Difference:return`difference`;case e.BlendMode.Exclusion:return`exclusion`;case e.BlendMode.Hue:return`hue`;case e.BlendMode.Saturation:return`saturation`;case e.BlendMode.Color:return`color`;case e.BlendMode.Luminosity:return`luminosity`}},set:function(t){switch(t){case`source-over`:this.ee=e.BlendMode.SrcOver;break;case`destination-over`:this.ee=e.BlendMode.DstOver;break;case`copy`:this.ee=e.BlendMode.Src;break;case`destination`:this.ee=e.BlendMode.Dst;break;case`clear`:this.ee=e.BlendMode.Clear;break;case`source-in`:this.ee=e.BlendMode.SrcIn;break;case`destination-in`:this.ee=e.BlendMode.DstIn;break;case`source-out`:this.ee=e.BlendMode.SrcOut;break;case`destination-out`:this.ee=e.BlendMode.DstOut;break;case`source-atop`:this.ee=e.BlendMode.SrcATop;break;case`destination-atop`:this.ee=e.BlendMode.DstATop;break;case`xor`:this.ee=e.BlendMode.Xor;break;case`lighter`:this.ee=e.BlendMode.Plus;break;case`plus-lighter`:this.ee=e.BlendMode.Plus;break;case`plus-darker`:throw`plus-darker is not supported`;case`multiply`:this.ee=e.BlendMode.Multiply;break;case`screen`:this.ee=e.BlendMode.Screen;break;case`overlay`:this.ee=e.BlendMode.Overlay;break;case`darken`:this.ee=e.BlendMode.Darken;break;case`lighten`:this.ee=e.BlendMode.Lighten;break;case`color-dodge`:this.ee=e.BlendMode.ColorDodge;break;case`color-burn`:this.ee=e.BlendMode.ColorBurn;break;case`hard-light`:this.ee=e.BlendMode.HardLight;break;case`soft-light`:this.ee=e.BlendMode.SoftLight;break;case`difference`:this.ee=e.BlendMode.Difference;break;case`exclusion`:this.ee=e.BlendMode.Exclusion;break;case`hue`:this.ee=e.BlendMode.Hue;break;case`saturation`:this.ee=e.BlendMode.Saturation;break;case`color`:this.ee=e.BlendMode.Color;break;case`luminosity`:this.ee=e.BlendMode.Luminosity;break;default:return}this.fe.setBlendMode(this.ee)}}),Object.defineProperty(this,`imageSmoothingEnabled`,{enumerable:!0,get:function(){return!0},set:function(){}}),Object.defineProperty(this,`imageSmoothingQuality`,{enumerable:!0,get:function(){return`high`},set:function(){}}),Object.defineProperty(this,`lineCap`,{enumerable:!0,get:function(){switch(this.fe.getStrokeCap()){case e.StrokeCap.Butt:return`butt`;case e.StrokeCap.Round:return`round`;case e.StrokeCap.Square:return`square`}},set:function(t){switch(t){case`butt`:this.fe.setStrokeCap(e.StrokeCap.Butt);break;case`round`:this.fe.setStrokeCap(e.StrokeCap.Round);break;case`square`:this.fe.setStrokeCap(e.StrokeCap.Square)}}}),Object.defineProperty(this,`lineDashOffset`,{enumerable:!0,get:function(){return this.$e},set:function(e){isFinite(e)&&(this.$e=e)}}),Object.defineProperty(this,`lineJoin`,{enumerable:!0,get:function(){switch(this.fe.getStrokeJoin()){case e.StrokeJoin.Miter:return`miter`;case e.StrokeJoin.Round:return`round`;case e.StrokeJoin.Bevel:return`bevel`}},set:function(t){switch(t){case`miter`:this.fe.setStrokeJoin(e.StrokeJoin.Miter);break;case`round`:this.fe.setStrokeJoin(e.StrokeJoin.Round);break;case`bevel`:this.fe.setStrokeJoin(e.StrokeJoin.Bevel)}}}),Object.defineProperty(this,`lineWidth`,{enumerable:!0,get:function(){return this.fe.getStrokeWidth()},set:function(e){0>=e||!e||(this.bf=e,this.fe.setStrokeWidth(e))}}),Object.defineProperty(this,`miterLimit`,{enumerable:!0,get:function(){return this.fe.getStrokeMiter()},set:function(e){0>=e||!e||this.fe.setStrokeMiter(e)}}),Object.defineProperty(this,`shadowBlur`,{enumerable:!0,get:function(){return this.Oe},set:function(e){0>e||!isFinite(e)||(this.Oe=e)}}),Object.defineProperty(this,`shadowColor`,{enumerable:!0,get:function(){return n(this.af)},set:function(e){this.af=r(e)}}),Object.defineProperty(this,`shadowOffsetX`,{enumerable:!0,get:function(){return this.Pe},set:function(e){isFinite(e)&&(this.Pe=e)}}),Object.defineProperty(this,`shadowOffsetY`,{enumerable:!0,get:function(){return this.Qe},set:function(e){isFinite(e)&&(this.Qe=e)}}),Object.defineProperty(this,`strokeStyle`,{enumerable:!0,get:function(){return n(this.ye)},set:function(e){typeof e==`string`?this.ye=r(e):e.Me&&(this.ye=e)}}),this.arc=function(e,t,n,r,i,a){h(this.he,e,t,n,n,0,r,i,a)},this.arcTo=function(e,t,n,r,i){f(this.he,e,t,n,r,i)},this.beginPath=function(){this.he.delete(),this.he=new e.Path},this.bezierCurveTo=function(e,n,r,i,a,o){var s=this.he;t([e,n,r,i,a,o])&&(s.isEmpty()&&s.moveTo(e,n),s.cubicTo(e,n,r,i,a,o))},this.clearRect=function(t,n,r,i){this.fe.setStyle(e.PaintStyle.Fill),this.fe.setBlendMode(e.BlendMode.Clear),this.ce.drawRect(e.XYWHRect(t,n,r,i),this.fe),this.fe.setBlendMode(this.ee)},this.clip=function(t,n){typeof t==`string`?(n=t,t=this.he):t&&t.vf&&(t=t.le),t||=this.he,t=t.copy(),n&&n.toLowerCase()===`evenodd`?t.setFillType(e.FillType.EvenOdd):t.setFillType(e.FillType.Winding),this.ce.clipPath(t,e.ClipOp.Intersect,!0),t.delete()},this.closePath=function(){p(this.he)},this.createImageData=function(){if(arguments.length===1){var e=arguments[0];return new u(new Uint8ClampedArray(4*e.width*e.height),e.width,e.height)}if(arguments.length===2){e=arguments[0];var t=arguments[1];return new u(new Uint8ClampedArray(4*e*t),e,t)}throw`createImageData expects 1 or 2 arguments, got `+arguments.length},this.createLinearGradient=function(e,n,r,i){if(t(arguments)){var a=new d(e,n,r,i);return this.Ue.push(a),a}},this.createPattern=function(e,t){return e=new v(e,t),this.Ue.push(e),e},this.createRadialGradient=function(e,n,r,i,a,o){if(t(arguments)){var s=new y(e,n,r,i,a,o);return this.Ue.push(s),s}},this.drawImage=function(t){t instanceof l&&(t=t.Lf());var n=this.jf();if(arguments.length===3||arguments.length===5)var r=e.XYWHRect(arguments[1],arguments[2],arguments[3]||t.width(),arguments[4]||t.height()),i=e.XYWHRect(0,0,t.width(),t.height());else if(arguments.length===9)r=e.XYWHRect(arguments[5],arguments[6],arguments[7],arguments[8]),i=e.XYWHRect(arguments[1],arguments[2],arguments[3],arguments[4]);else throw`invalid number of args for drawImage, need 3, 5, or 9; got `+arguments.length;this.ce.drawImageRect(t,i,r,n,!1),n.dispose()},this.ellipse=function(e,t,n,r,i,a,o,s){h(this.he,e,t,n,r,i,a,o,s)},this.jf=function(){var t=this.fe.copy();if(t.setStyle(e.PaintStyle.Fill),i(this.se)){var n=e.multiplyByAlpha(this.se,this.Be);t.setColor(n)}else n=this.se.Me(this.je),t.setColor(e.Color(0,0,0,this.Be)),t.setShader(n);return t.dispose=function(){this.delete()},t},this.fill=function(t,n){if(typeof t==`string`?(n=t,t=this.he):t&&t.vf&&(t=t.le),n===`evenodd`)this.he.setFillType(e.FillType.EvenOdd);else{if(n!==`nonzero`&&n)throw`invalid fill rule`;this.he.setFillType(e.FillType.Winding)}t||=this.he,n=this.jf();var r=this.Re(n);r&&(this.ce.save(),this.Ke(),this.ce.drawPath(t,r),this.ce.restore(),r.dispose()),this.ce.drawPath(t,n),n.dispose()},this.fillRect=function(t,n,r,i){var a=this.jf(),o=this.Re(a);o&&(this.ce.save(),this.Ke(),this.ce.drawRect(e.XYWHRect(t,n,r,i),o),this.ce.restore(),o.dispose()),this.ce.drawRect(e.XYWHRect(t,n,r,i),a),a.dispose()},this.fillText=function(t,n,r){var i=this.jf();t=e.TextBlob.MakeFromText(t,this.Fe);var a=this.Re(i);a&&(this.ce.save(),this.Ke(),this.ce.drawTextBlob(t,n,r,a),this.ce.restore(),a.dispose()),this.ce.drawTextBlob(t,n,r,i),t.delete(),i.dispose()},this.getImageData=function(t,n,r,i){return(t=this.ce.readPixels(t,n,{width:r,height:i,colorType:e.ColorType.RGBA_8888,alphaType:e.AlphaType.Unpremul,colorSpace:e.ColorSpace.SRGB}))?new u(new Uint8ClampedArray(t.buffer),r,i):null},this.getLineDash=function(){return this.Ne.slice()},this.Gf=function(t){var n=e.Matrix.invert(this.je);return e.Matrix.mapPoints(n,t),t},this.isPointInPath=function(t,n,r){var i=arguments;if(i.length===3)var a=this.he;else if(i.length===4)a=i[0],t=i[1],n=i[2],r=i[3];else throw`invalid arg count, need 3 or 4, got `+i.length;return!isFinite(t)||!isFinite(n)||(r||=`nonzero`,r!==`nonzero`&&r!==`evenodd`)?!1:(i=this.Gf([t,n]),t=i[0],n=i[1],a.setFillType(r===`nonzero`?e.FillType.Winding:e.FillType.EvenOdd),a.contains(t,n))},this.isPointInStroke=function(t,n){var r=arguments;if(r.length===2)var i=this.he;else if(r.length===3)i=r[0],t=r[1],n=r[2];else throw`invalid arg count, need 2 or 3, got `+r.length;return!isFinite(t)||!isFinite(n)?!1:(r=this.Gf([t,n]),t=r[0],n=r[1],i=i.copy(),i.setFillType(e.FillType.Winding),i.stroke({width:this.lineWidth,miter_limit:this.miterLimit,cap:this.fe.getStrokeCap(),join:this.fe.getStrokeJoin(),precision:.3}),r=i.contains(t,n),i.delete(),r)},this.lineTo=function(e,t){g(this.he,e,t)},this.measureText=function(e){e=this.Fe.getGlyphIDs(e),e=this.Fe.getGlyphWidths(e);let t=0;for(let n of e)t+=n;return{width:t}},this.moveTo=function(e,n){var r=this.he;t([e,n])&&r.moveTo(e,n)},this.putImageData=function(n,r,i,a,o,s,c){if(t([r,i,a,o,s,c])){if(a===void 0)this.ce.writePixels(n.data,n.width,n.height,r,i);else if(a||=0,o||=0,s||=n.width,c||=n.height,0>s&&(a+=s,s=Math.abs(s)),0>c&&(o+=c,c=Math.abs(c)),0>a&&(s+=a,a=0),0>o&&(c+=o,o=0),!(0>=s||0>=c)){n=e.MakeImage({width:n.width,height:n.height,alphaType:e.AlphaType.Unpremul,colorType:e.ColorType.RGBA_8888,colorSpace:e.ColorSpace.SRGB},n.data,4*n.width);var l=e.XYWHRect(a,o,s,c);r=e.XYWHRect(r+a,i+o,s,c),i=e.Matrix.invert(this.je),this.ce.save(),this.ce.concat(i),this.ce.drawImageRect(n,l,r,null,!1),this.ce.restore(),n.delete()}}},this.quadraticCurveTo=function(e,n,r,i){var a=this.he;t([e,n,r,i])&&(a.isEmpty()&&a.moveTo(e,n),a.quadTo(e,n,r,i))},this.rect=function(n,r,i,a){var o=this.he;n=e.XYWHRect(n,r,i,a),t(n)&&o.addRect(n)},this.resetTransform=function(){this.he.transform(this.je);var t=e.Matrix.invert(this.je);this.ce.concat(t),this.je=this.ce.getTotalMatrix()},this.restore=function(){var t=this.Ff.pop();if(t){var n=e.Matrix.multiply(this.je,e.Matrix.invert(t.ag));this.he.transform(n),this.fe.delete(),this.fe=t.sg,this.Ne=t.qg,this.bf=t.Eg,this.ye=t.Dg,this.se=t.fs,this.Pe=t.Bg,this.Qe=t.Cg,this.Oe=t.sb,this.af=t.Ag,this.Be=t.ga,this.ee=t.hg,this.$e=t.rg,this.kf=t.gg,this.ce.restore(),this.je=this.ce.getTotalMatrix()}},this.rotate=function(t){if(isFinite(t)){var n=e.Matrix.rotated(-t);this.he.transform(n),this.ce.rotate(t/Math.PI*180,0,0),this.je=this.ce.getTotalMatrix()}},this.save=function(){if(this.se.Le){var e=this.se.Le();this.Ue.push(e)}else e=this.se;if(this.ye.Le){var t=this.ye.Le();this.Ue.push(t)}else t=this.ye;this.Ff.push({ag:this.je.slice(),qg:this.Ne.slice(),Eg:this.bf,Dg:t,fs:e,Bg:this.Pe,Cg:this.Qe,sb:this.Oe,Ag:this.af,ga:this.Be,rg:this.$e,hg:this.ee,sg:this.fe.copy(),gg:this.kf}),this.ce.save()},this.scale=function(n,r){if(t(arguments)){var i=e.Matrix.scaled(1/n,1/r);this.he.transform(i),this.ce.scale(n,r),this.je=this.ce.getTotalMatrix()}},this.setLineDash=function(e){for(var t=0;t<e.length;t++)if(!isFinite(e[t])||0>e[t])return;e.length%2==1&&Array.prototype.push.apply(e,e),this.Ne=e},this.setTransform=function(e,n,r,i,a,o){t(arguments)&&(this.resetTransform(),this.transform(e,n,r,i,a,o))},this.Ke=function(){var t=e.Matrix.invert(this.je);this.ce.concat(t),this.ce.concat(e.Matrix.translated(this.Pe,this.Qe)),this.ce.concat(this.je)},this.Re=function(t){var n=e.multiplyByAlpha(this.af,this.Be);if(!e.getColorComponents(n)[3]||!(this.Oe||this.Qe||this.Pe))return null;t=t.copy(),t.setColor(n);var r=e.MaskFilter.MakeBlur(e.BlurStyle.Normal,this.Oe/2,!1);return t.setMaskFilter(r),t.dispose=function(){r.delete(),this.delete()},t},this.xf=function(){var t=this.fe.copy();if(t.setStyle(e.PaintStyle.Stroke),i(this.ye)){var n=e.multiplyByAlpha(this.ye,this.Be);t.setColor(n)}else n=this.ye.Me(this.je),t.setColor(e.Color(0,0,0,this.Be)),t.setShader(n);if(t.setStrokeWidth(this.bf),this.Ne.length){var r=e.PathEffect.MakeDash(this.Ne,this.$e);t.setPathEffect(r)}return t.dispose=function(){r&&r.delete(),this.delete()},t},this.stroke=function(e){e=e?e.le:this.he;var t=this.xf(),n=this.Re(t);n&&(this.ce.save(),this.Ke(),this.ce.drawPath(e,n),this.ce.restore(),n.dispose()),this.ce.drawPath(e,t),t.dispose()},this.strokeRect=function(t,n,r,i){var a=this.xf(),o=this.Re(a);o&&(this.ce.save(),this.Ke(),this.ce.drawRect(e.XYWHRect(t,n,r,i),o),this.ce.restore(),o.dispose()),this.ce.drawRect(e.XYWHRect(t,n,r,i),a),a.dispose()},this.strokeText=function(t,n,r){var i=this.xf();t=e.TextBlob.MakeFromText(t,this.Fe);var a=this.Re(i);a&&(this.ce.save(),this.Ke(),this.ce.drawTextBlob(t,n,r,a),this.ce.restore(),a.dispose()),this.ce.drawTextBlob(t,n,r,i),t.delete(),i.dispose()},this.translate=function(n,r){if(t(arguments)){var i=e.Matrix.translated(-n,-r);this.he.transform(i),this.ce.translate(n,r),this.je=this.ce.getTotalMatrix()}},this.transform=function(t,n,r,i,a,o){t=[t,r,a,n,i,o,0,0,1],n=e.Matrix.invert(t),this.he.transform(n),this.ce.concat(t),this.je=this.ce.getTotalMatrix()},this.addHitRegion=function(){},this.clearHitRegions=function(){},this.drawFocusIfNeeded=function(){},this.removeHitRegion=function(){},this.scrollPathIntoView=function(){},Object.defineProperty(this,`canvas`,{value:null,writable:!1})}function c(t){this.yf=t,this.be=new s(t.getCanvas()),this.lf=[],this.decodeImage=function(t){if(t=e.MakeImageFromEncoded(t),!t)throw`Invalid input`;return this.lf.push(t),new l(t)},this.loadFont=function(t,n){if(t=e.Typeface.MakeTypefaceFromData(t),!t)return null;this.lf.push(t);var r=(n.style||`normal`)+`|`+(n.variant||`normal`)+`|`+(n.weight||`normal`);n=n.family,o(),S[n]||(S[n]={"*":t}),S[n][r]=t},this.makePath2D=function(e){return e=new _(e),this.lf.push(e.le),e},this.getContext=function(e){return e===`2d`?this.be:null},this.toDataURL=function(t,n){this.yf.flush();var r=this.yf.makeImageSnapshot();if(r){t||=`image/png`;var i=e.ImageFormat.PNG;if(t===`image/jpeg`&&(i=e.ImageFormat.JPEG),n=r.encodeToBytes(i,n||.92)){if(r.delete(),t=`data:`+t+`;base64,`,typeof Buffer<`u`)n=Buffer.from(n).toString(`base64`);else{r=0,i=n.length;for(var a=``,o;r<i;)o=n.slice(r,Math.min(r+32768,i)),a+=String.fromCharCode.apply(null,o),r+=32768;n=btoa(a)}return t+n}}},this.dispose=function(){this.be.Ee(),this.lf.forEach(function(e){e.delete()}),this.yf.dispose()}}function l(e){this.width=e.width(),this.height=e.height(),this.naturalWidth=this.width,this.naturalHeight=this.height,this.Lf=function(){return e}}function u(e,t,n){if(!t||n===0)throw TypeError(`invalid dimensions, width and height must be non-zero`);if(e.length%4)throw TypeError(`arr must be a multiple of 4`);n||=e.length/(4*t),Object.defineProperty(this,`data`,{value:e,writable:!1}),Object.defineProperty(this,`height`,{value:n,writable:!1}),Object.defineProperty(this,`width`,{value:t,writable:!1})}function d(t,n,i,a){this.ne=null,this.ue=[],this.qe=[],this.addColorStop=function(e,t){if(0>e||1<e||!isFinite(e))throw`offset must be between 0 and 1 inclusively`;t=r(t);var n=this.qe.indexOf(e);if(n!==-1)this.ue[n]=t;else{for(n=0;n<this.qe.length&&!(this.qe[n]>e);n++);this.qe.splice(n,0,e),this.ue.splice(n,0,t)}},this.Le=function(){var e=new d(t,n,i,a);return e.ue=this.ue.slice(),e.qe=this.qe.slice(),e},this.Ee=function(){this.ne&&=(this.ne.delete(),null)},this.Me=function(r){var o=[t,n,i,a];e.Matrix.mapPoints(r,o),r=o[0];var s=o[1],c=o[2];return o=o[3],this.Ee(),this.ne=e.Shader.MakeLinearGradient([r,s],[c,o],this.ue,this.qe,e.TileMode.Clamp)}}function f(e,n,r,i,a,o){if(t([n,r,i,a,o])){if(0>o)throw`radii cannot be negative`;e.isEmpty()&&e.moveTo(n,r),e.arcToTangent(n,r,i,a,o)}}function p(e){if(!e.isEmpty()){var t=e.getBounds();(t[3]-t[1]||t[2]-t[0])&&e.close()}}function m(t,n,r,i,a,o,s){s=(s-o)/Math.PI*180,o=o/Math.PI*180,n=e.LTRBRect(n-i,r-a,n+i,r+a),1e-5>Math.abs(Math.abs(s)-360)?(r=s/2,t.arcToOval(n,o,r,!1),t.arcToOval(n,o+r,r,!1)):t.arcToOval(n,o,s,!1)}function h(n,r,i,a,o,s,c,l,u){if(t([r,i,a,o,s,c,l])){if(0>a||0>o)throw`radii cannot be negative`;var d=2*Math.PI,f=c%d;0>f&&(f+=d);var p=f-c;c=f,l+=p,!u&&l-c>=d?l=c+d:u&&c-l>=d?l=c-d:!u&&c>l?l=c+(d-(c-l)%d):u&&c<l&&(l=c-(d-(l-c)%d)),s?(u=e.Matrix.rotated(s,r,i),s=e.Matrix.rotated(-s,r,i),n.transform(s),m(n,r,i,a,o,c,l),n.transform(u)):m(n,r,i,a,o,c,l)}}function g(e,n,r){t([n,r])&&(e.isEmpty()&&e.moveTo(n,r),e.lineTo(n,r))}function _(n){this.le=null,this.le=typeof n==`string`?e.Path.MakeFromSVGString(n):n&&n.vf?n.le.copy():new e.Path,this.vf=function(){return this.le},this.addPath=function(e,t){t||={a:1,c:0,e:0,b:0,d:1,f:0},this.le.addPath(e.le,[t.a,t.c,t.e,t.b,t.d,t.f])},this.arc=function(e,t,n,r,i,a){h(this.le,e,t,n,n,0,r,i,a)},this.arcTo=function(e,t,n,r,i){f(this.le,e,t,n,r,i)},this.bezierCurveTo=function(e,n,r,i,a,o){var s=this.le;t([e,n,r,i,a,o])&&(s.isEmpty()&&s.moveTo(e,n),s.cubicTo(e,n,r,i,a,o))},this.closePath=function(){p(this.le)},this.ellipse=function(e,t,n,r,i,a,o,s){h(this.le,e,t,n,r,i,a,o,s)},this.lineTo=function(e,t){g(this.le,e,t)},this.moveTo=function(e,n){var r=this.le;t([e,n])&&r.moveTo(e,n)},this.quadraticCurveTo=function(e,n,r,i){var a=this.le;t([e,n,r,i])&&(a.isEmpty()&&a.moveTo(e,n),a.quadTo(e,n,r,i))},this.rect=function(n,r,i,a){var o=this.le;n=e.XYWHRect(n,r,i,a),t(n)&&o.addRect(n)}}function v(n,r){switch(this.ne=null,n instanceof l&&(n=n.Lf()),this.Uf=n,this._transform=e.Matrix.identity(),r===``&&(r=`repeat`),r){case`repeat-x`:this.Se=e.TileMode.Repeat,this.Te=e.TileMode.Decal;break;case`repeat-y`:this.Se=e.TileMode.Decal,this.Te=e.TileMode.Repeat;break;case`repeat`:this.Te=this.Se=e.TileMode.Repeat;break;case`no-repeat`:this.Te=this.Se=e.TileMode.Decal;break;default:throw`invalid repetition mode `+r}this.setTransform=function(e){e=[e.a,e.c,e.e,e.b,e.d,e.f,0,0,1],t(e)&&(this._transform=e)},this.Le=function(){var e=new v;return e.Se=this.Se,e.Te=this.Te,e},this.Ee=function(){this.ne&&=(this.ne.delete(),null)},this.Me=function(){return this.Ee(),this.ne=this.Uf.makeShaderCubic(this.Se,this.Te,1/3,1/3,this._transform)}}function y(t,n,i,a,o,s){this.ne=null,this.ue=[],this.qe=[],this.addColorStop=function(e,t){if(0>e||1<e||!isFinite(e))throw`offset must be between 0 and 1 inclusively`;t=r(t);var n=this.qe.indexOf(e);if(n!==-1)this.ue[n]=t;else{for(n=0;n<this.qe.length&&!(this.qe[n]>e);n++);this.qe.splice(n,0,e),this.ue.splice(n,0,t)}},this.Le=function(){var e=new y(t,n,i,a,o,s);return e.ue=this.ue.slice(),e.qe=this.qe.slice(),e},this.Ee=function(){this.ne&&=(this.ne.delete(),null)},this.Me=function(r){var c=[t,n,a,o];e.Matrix.mapPoints(r,c);var l=c[0],u=c[1],d=c[2];c=c[3];var f=(Math.abs(r[0])+Math.abs(r[4]))/2;return r=i*f,f*=s,this.Ee(),this.ne=e.Shader.MakeTwoPointConicalGradient([l,u],r,[d,c],f,this.ue,this.qe,e.TileMode.Clamp)}}e._testing={};var b={aliceblue:Float32Array.of(.941,.973,1,1),antiquewhite:Float32Array.of(.98,.922,.843,1),aqua:Float32Array.of(0,1,1,1),aquamarine:Float32Array.of(.498,1,.831,1),azure:Float32Array.of(.941,1,1,1),beige:Float32Array.of(.961,.961,.863,1),bisque:Float32Array.of(1,.894,.769,1),black:Float32Array.of(0,0,0,1),blanchedalmond:Float32Array.of(1,.922,.804,1),blue:Float32Array.of(0,0,1,1),blueviolet:Float32Array.of(.541,.169,.886,1),brown:Float32Array.of(.647,.165,.165,1),burlywood:Float32Array.of(.871,.722,.529,1),cadetblue:Float32Array.of(.373,.62,.627,1),chartreuse:Float32Array.of(.498,1,0,1),chocolate:Float32Array.of(.824,.412,.118,1),coral:Float32Array.of(1,.498,.314,1),cornflowerblue:Float32Array.of(.392,.584,.929,1),cornsilk:Float32Array.of(1,.973,.863,1),crimson:Float32Array.of(.863,.078,.235,1),cyan:Float32Array.of(0,1,1,1),darkblue:Float32Array.of(0,0,.545,1),darkcyan:Float32Array.of(0,.545,.545,1),darkgoldenrod:Float32Array.of(.722,.525,.043,1),darkgray:Float32Array.of(.663,.663,.663,1),darkgreen:Float32Array.of(0,.392,0,1),darkgrey:Float32Array.of(.663,.663,.663,1),darkkhaki:Float32Array.of(.741,.718,.42,1),darkmagenta:Float32Array.of(.545,0,.545,1),darkolivegreen:Float32Array.of(.333,.42,.184,1),darkorange:Float32Array.of(1,.549,0,1),darkorchid:Float32Array.of(.6,.196,.8,1),darkred:Float32Array.of(.545,0,0,1),darksalmon:Float32Array.of(.914,.588,.478,1),darkseagreen:Float32Array.of(.561,.737,.561,1),darkslateblue:Float32Array.of(.282,.239,.545,1),darkslategray:Float32Array.of(.184,.31,.31,1),darkslategrey:Float32Array.of(.184,.31,.31,1),darkturquoise:Float32Array.of(0,.808,.82,1),darkviolet:Float32Array.of(.58,0,.827,1),deeppink:Float32Array.of(1,.078,.576,1),deepskyblue:Float32Array.of(0,.749,1,1),dimgray:Float32Array.of(.412,.412,.412,1),dimgrey:Float32Array.of(.412,.412,.412,1),dodgerblue:Float32Array.of(.118,.565,1,1),firebrick:Float32Array.of(.698,.133,.133,1),floralwhite:Float32Array.of(1,.98,.941,1),forestgreen:Float32Array.of(.133,.545,.133,1),fuchsia:Float32Array.of(1,0,1,1),gainsboro:Float32Array.of(.863,.863,.863,1),ghostwhite:Float32Array.of(.973,.973,1,1),gold:Float32Array.of(1,.843,0,1),goldenrod:Float32Array.of(.855,.647,.125,1),gray:Float32Array.of(.502,.502,.502,1),green:Float32Array.of(0,.502,0,1),greenyellow:Float32Array.of(.678,1,.184,1),grey:Float32Array.of(.502,.502,.502,1),honeydew:Float32Array.of(.941,1,.941,1),hotpink:Float32Array.of(1,.412,.706,1),indianred:Float32Array.of(.804,.361,.361,1),indigo:Float32Array.of(.294,0,.51,1),ivory:Float32Array.of(1,1,.941,1),khaki:Float32Array.of(.941,.902,.549,1),lavender:Float32Array.of(.902,.902,.98,1),lavenderblush:Float32Array.of(1,.941,.961,1),lawngreen:Float32Array.of(.486,.988,0,1),lemonchiffon:Float32Array.of(1,.98,.804,1),lightblue:Float32Array.of(.678,.847,.902,1),lightcoral:Float32Array.of(.941,.502,.502,1),lightcyan:Float32Array.of(.878,1,1,1),lightgoldenrodyellow:Float32Array.of(.98,.98,.824,1),lightgray:Float32Array.of(.827,.827,.827,1),lightgreen:Float32Array.of(.565,.933,.565,1),lightgrey:Float32Array.of(.827,.827,.827,1),lightpink:Float32Array.of(1,.714,.757,1),lightsalmon:Float32Array.of(1,.627,.478,1),lightseagreen:Float32Array.of(.125,.698,.667,1),lightskyblue:Float32Array.of(.529,.808,.98,1),lightslategray:Float32Array.of(.467,.533,.6,1),lightslategrey:Float32Array.of(.467,.533,.6,1),lightsteelblue:Float32Array.of(.69,.769,.871,1),lightyellow:Float32Array.of(1,1,.878,1),lime:Float32Array.of(0,1,0,1),limegreen:Float32Array.of(.196,.804,.196,1),linen:Float32Array.of(.98,.941,.902,1),magenta:Float32Array.of(1,0,1,1),maroon:Float32Array.of(.502,0,0,1),mediumaquamarine:Float32Array.of(.4,.804,.667,1),mediumblue:Float32Array.of(0,0,.804,1),mediumorchid:Float32Array.of(.729,.333,.827,1),mediumpurple:Float32Array.of(.576,.439,.859,1),mediumseagreen:Float32Array.of(.235,.702,.443,1),mediumslateblue:Float32Array.of(.482,.408,.933,1),mediumspringgreen:Float32Array.of(0,.98,.604,1),mediumturquoise:Float32Array.of(.282,.82,.8,1),mediumvioletred:Float32Array.of(.78,.082,.522,1),midnightblue:Float32Array.of(.098,.098,.439,1),mintcream:Float32Array.of(.961,1,.98,1),mistyrose:Float32Array.of(1,.894,.882,1),moccasin:Float32Array.of(1,.894,.71,1),navajowhite:Float32Array.of(1,.871,.678,1),navy:Float32Array.of(0,0,.502,1),oldlace:Float32Array.of(.992,.961,.902,1),olive:Float32Array.of(.502,.502,0,1),olivedrab:Float32Array.of(.42,.557,.137,1),orange:Float32Array.of(1,.647,0,1),orangered:Float32Array.of(1,.271,0,1),orchid:Float32Array.of(.855,.439,.839,1),palegoldenrod:Float32Array.of(.933,.91,.667,1),palegreen:Float32Array.of(.596,.984,.596,1),paleturquoise:Float32Array.of(.686,.933,.933,1),palevioletred:Float32Array.of(.859,.439,.576,1),papayawhip:Float32Array.of(1,.937,.835,1),peachpuff:Float32Array.of(1,.855,.725,1),peru:Float32Array.of(.804,.522,.247,1),pink:Float32Array.of(1,.753,.796,1),plum:Float32Array.of(.867,.627,.867,1),powderblue:Float32Array.of(.69,.878,.902,1),purple:Float32Array.of(.502,0,.502,1),rebeccapurple:Float32Array.of(.4,.2,.6,1),red:Float32Array.of(1,0,0,1),rosybrown:Float32Array.of(.737,.561,.561,1),royalblue:Float32Array.of(.255,.412,.882,1),saddlebrown:Float32Array.of(.545,.271,.075,1),salmon:Float32Array.of(.98,.502,.447,1),sandybrown:Float32Array.of(.957,.643,.376,1),seagreen:Float32Array.of(.18,.545,.341,1),seashell:Float32Array.of(1,.961,.933,1),sienna:Float32Array.of(.627,.322,.176,1),silver:Float32Array.of(.753,.753,.753,1),skyblue:Float32Array.of(.529,.808,.922,1),slateblue:Float32Array.of(.416,.353,.804,1),slategray:Float32Array.of(.439,.502,.565,1),slategrey:Float32Array.of(.439,.502,.565,1),snow:Float32Array.of(1,.98,.98,1),springgreen:Float32Array.of(0,1,.498,1),steelblue:Float32Array.of(.275,.51,.706,1),tan:Float32Array.of(.824,.706,.549,1),teal:Float32Array.of(0,.502,.502,1),thistle:Float32Array.of(.847,.749,.847,1),tomato:Float32Array.of(1,.388,.278,1),transparent:Float32Array.of(0,0,0,0),turquoise:Float32Array.of(.251,.878,.816,1),violet:Float32Array.of(.933,.51,.933,1),wheat:Float32Array.of(.961,.871,.702,1),white:Float32Array.of(1,1,1,1),whitesmoke:Float32Array.of(.961,.961,.961,1),yellow:Float32Array.of(1,1,0,1),yellowgreen:Float32Array.of(.604,.804,.196,1)};e._testing.parseColor=r,e._testing.colorToString=n;var x=RegExp(`(italic|oblique|normal|)\\s*(small-caps|normal|)\\s*(bold|bolder|lighter|[1-9]00|normal|)\\s*([\\d\\.]+)(px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q)(.+)`),S;e._testing.parseFontString=a,e.MakeCanvas=function(t,n){return(t=e.MakeSurface(t,n))?new c(t):null},e.ImageData=function(){if(arguments.length===2){var e=arguments[0],t=arguments[1];return new u(new Uint8ClampedArray(4*e*t),e,t)}if(arguments.length===3){var n=arguments[0];if(n.prototype.constructor!==Uint8ClampedArray)throw TypeError(`bytes must be given as a Uint8ClampedArray`);if(e=arguments[1],t=arguments[2],n%4)throw TypeError(`bytes must be given in a multiple of 4`);if(n%e)throw TypeError(`bytes must divide evenly by width`);if(t&&t!==n/(4*e))throw TypeError(`invalid height given`);return new u(n,e,n/(4*e))}throw TypeError(`invalid number of arguments - takes 2 or 3, saw `+arguments.length)}})()})(n);var a=Object.assign({},n),o=`./this.program`,s=(e,t)=>{throw t},c=typeof window==`object`,l=typeof importScripts==`function`,u=typeof process==`object`&&typeof process.versions==`object`&&typeof process.versions.node==`string`,d=``,f,p,m;if(u){var h=T(),g=T();d=l?g.dirname(d)+`/`:__dirname+`/`,f=(e,t)=>(e=e.startsWith(`file://`)?new URL(e):g.normalize(e),h.readFileSync(e,t?void 0:`utf8`)),m=e=>(e=f(e,!0),e.buffer||(e=new Uint8Array(e)),e),p=(e,t,n,r=!0)=>{e=e.startsWith(`file://`)?new URL(e):g.normalize(e),h.readFile(e,r?void 0:`utf8`,(e,i)=>{e?n(e):t(r?i.buffer:i)})},!n.thisProgram&&1<process.argv.length&&(o=process.argv[1].replace(/\\/g,`/`)),process.argv.slice(2),s=(e,t)=>{throw process.exitCode=e,t},n.inspect=()=>`[Emscripten Module object]`}else (c||l)&&(l?d=self.location.href:typeof document<`u`&&document.currentScript&&(d=document.currentScript.src),e&&(d=e),d=d.indexOf(`blob:`)===0?``:d.substr(0,d.replace(/[?#].*/,``).lastIndexOf(`/`)+1),f=e=>{var t=new XMLHttpRequest;return t.open(`GET`,e,!1),t.send(null),t.responseText},l&&(m=e=>{var t=new XMLHttpRequest;return t.open(`GET`,e,!1),t.responseType=`arraybuffer`,t.send(null),new Uint8Array(t.response)}),p=(e,t,n)=>{var r=new XMLHttpRequest;r.open(`GET`,e,!0),r.responseType=`arraybuffer`,r.onload=()=>{r.status==200||r.status==0&&r.response?t(r.response):n()},r.onerror=n,r.send(null)});var _=n.print||console.log.bind(console),v=n.printErr||console.error.bind(console);Object.assign(n,a),a=null,n.thisProgram&&(o=n.thisProgram),n.quit&&(s=n.quit);var y;n.wasmBinary&&(y=n.wasmBinary);var b=n.noExitRuntime||!0;typeof WebAssembly!=`object`&&se(`no native wasm support detected`);var x,S,C=!1,w,E,D,O,k,A,j,ee;function te(){var e=x.buffer;n.HEAP8=w=new Int8Array(e),n.HEAP16=D=new Int16Array(e),n.HEAP32=k=new Int32Array(e),n.HEAPU8=E=new Uint8Array(e),n.HEAPU16=O=new Uint16Array(e),n.HEAPU32=A=new Uint32Array(e),n.HEAPF32=j=new Float32Array(e),n.HEAPF64=ee=new Float64Array(e)}var M,ne=[],N=[],re=[];function ie(){var e=n.preRun.shift();ne.unshift(e)}var P=0,ae=null,oe=null;function se(e){throw n.onAbort&&n.onAbort(e),e=`Aborted(`+e+`)`,v(e),C=!0,e=new WebAssembly.RuntimeError(e+`. Build with -sASSERTIONS for more info.`),i(e),e}function F(e){return e.startsWith(`data:application/octet-stream;base64,`)}var I=`canvaskit.wasm`;if(!F(I)){var ce=I;I=n.locateFile?n.locateFile(ce,d):d+ce}function L(e){if(e==I&&y)return new Uint8Array(y);if(m)return m(e);throw`both async and sync fetching of the wasm failed`}function le(e){if(!y&&(c||l)){if(typeof fetch==`function`&&!e.startsWith(`file://`))return fetch(e,{credentials:`same-origin`}).then(t=>{if(!t.ok)throw`failed to load wasm binary file at '`+e+`'`;return t.arrayBuffer()}).catch(()=>L(e));if(p)return new Promise((t,n)=>{p(e,e=>t(new Uint8Array(e)),n)})}return Promise.resolve().then(()=>L(e))}function ue(e,t,n){return le(e).then(e=>WebAssembly.instantiate(e,t)).then(e=>e).then(n,e=>{v(`failed to asynchronously prepare wasm: `+e),se(e)})}function de(e,t){var n=I;return y||typeof WebAssembly.instantiateStreaming!=`function`||F(n)||n.startsWith(`file://`)||u||typeof fetch!=`function`?ue(n,e,t):fetch(n,{credentials:`same-origin`}).then(r=>WebAssembly.instantiateStreaming(r,e).then(t,function(r){return v(`wasm streaming compile failed: `+r),v(`falling back to ArrayBuffer instantiation`),ue(n,e,t)}))}function fe(e){this.name=`ExitStatus`,this.message=`Program terminated with exit(${e})`,this.status=e}var pe=e=>{for(;0<e.length;)e.shift()(n)},me=typeof TextDecoder<`u`?new TextDecoder(`utf8`):void 0,R=(e,t,n)=>{var r=t+n;for(n=t;e[n]&&!(n>=r);)++n;if(16<n-t&&e.buffer&&me)return me.decode(e.subarray(t,n));for(r=``;t<n;){var i=e[t++];if(i&128){var a=e[t++]&63;if((i&224)==192)r+=String.fromCharCode((i&31)<<6|a);else{var o=e[t++]&63;i=(i&240)==224?(i&15)<<12|a<<6|o:(i&7)<<18|a<<12|o<<6|e[t++]&63,65536>i?r+=String.fromCharCode(i):(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|i&1023))}}else r+=String.fromCharCode(i)}return r},he={};function ge(e){for(;e.length;){var t=e.pop();e.pop()(t)}}function _e(e){return this.fromWireType(k[e>>2])}var ve={},z={},ye={},be=void 0;function xe(e){throw new be(e)}function Se(e,t,n){function r(t){t=n(t),t.length!==e.length&&xe(`Mismatched type converter count`);for(var r=0;r<e.length;++r)De(e[r],t[r])}e.forEach(function(e){ye[e]=t});var i=Array(t.length),a=[],o=0;t.forEach((e,t)=>{z.hasOwnProperty(e)?i[t]=z[e]:(a.push(e),ve.hasOwnProperty(e)||(ve[e]=[]),ve[e].push(()=>{i[t]=z[e],++o,o===a.length&&r(i)}))}),a.length===0&&r(i)}function Ce(e){switch(e){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw TypeError(`Unknown type size: ${e}`)}}var we=void 0;function B(e){for(var t=``;E[e];)t+=we[E[e++]];return t}var Te=void 0;function V(e){throw new Te(e)}function Ee(e,t,n={}){var r=t.name;if(e||V(`type "${r}" must have a positive integer typeid pointer`),z.hasOwnProperty(e)){if(n.ng)return;V(`Cannot register type '${r}' twice`)}z[e]=t,delete ye[e],ve.hasOwnProperty(e)&&(t=ve[e],delete ve[e],t.forEach(e=>e()))}function De(e,t,n={}){if(!(`argPackAdvance`in t))throw TypeError(`registerType registeredInstance requires argPackAdvance`);Ee(e,t,n)}function Oe(e){V(e.ae.me.ge.name+` instance already deleted`)}var ke=!1;function Ae(){}function je(e){--e.count.value,e.count.value===0&&(e.pe?e.we.De(e.pe):e.me.ge.De(e.ie))}function Me(e,t,n){return t===n?e:n.re===void 0?null:(e=Me(e,t,n.re),e===null?null:n.dg(e))}var Ne={},Pe=[];function Fe(){for(;Pe.length;){var e=Pe.pop();e.ae.Xe=!1,e.delete()}}var H=void 0,Ie={};function Le(e,t){for(t===void 0&&V(`ptr should not be undefined`);e.re;)t=e.gf(t),e=e.re;return Ie[t]}function Re(e,t){return t.me&&t.ie||xe(`makeClassHandle requires ptr and ptrType`),!!t.we!=!!t.pe&&xe(`Both smartPtrType and smartPtr must be specified`),t.count={value:1},ze(Object.create(e,{ae:{value:t}}))}function ze(e){return typeof FinalizationRegistry>`u`?(ze=e=>e,e):(ke=new FinalizationRegistry(e=>{je(e.ae)}),ze=e=>{var t=e.ae;return t.pe&&ke.register(e,{ae:t},e),e},Ae=e=>{ke.unregister(e)},ze(e))}function Be(){}function Ve(e){if(e===void 0)return`_unknown`;e=e.replace(/[^a-zA-Z0-9_]/g,`$`);var t=e.charCodeAt(0);return 48<=t&&57>=t?`_${e}`:e}function He(e,t){return e=Ve(e),{[e]:function(){return t.apply(this,arguments)}}[e]}function Ue(e,t,n){if(e[t].oe===void 0){var r=e[t];e[t]=function(){return e[t].oe.hasOwnProperty(arguments.length)||V(`Function '${n}' called with an invalid number of arguments (${arguments.length}) - expects one of (${e[t].oe})!`),e[t].oe[arguments.length].apply(this,arguments)},e[t].oe=[],e[t].oe[r.Ve]=r}}function We(e,t,r){n.hasOwnProperty(e)?((r===void 0||n[e].oe!==void 0&&n[e].oe[r]!==void 0)&&V(`Cannot register public name '${e}' twice`),Ue(n,e,e),n.hasOwnProperty(r)&&V(`Cannot register multiple overloads of a function with the same number of arguments (${r})!`),n[e].oe[r]=t):(n[e]=t,r!==void 0&&(n[e].Lg=r))}function Ge(e,t,n,r,i,a,o,s){this.name=e,this.constructor=t,this.Ye=n,this.De=r,this.re=i,this.ig=a,this.gf=o,this.dg=s,this.ug=[]}function Ke(e,t,n){for(;t!==n;)t.gf||V(`Expected null or instance of ${n.name}, got an instance of ${t.name}`),e=t.gf(e),t=t.re;return e}function qe(e,t){return t===null?(this.Bf&&V(`null is not a valid ${this.name}`),0):(t.ae||V(`Cannot pass "${ut(t)}" as a ${this.name}`),t.ae.ie||V(`Cannot pass deleted object as a pointer of type ${this.name}`),Ke(t.ae.ie,t.ae.me.ge,this.ge))}function Je(e,t){if(t===null){if(this.Bf&&V(`null is not a valid ${this.name}`),this.pf){var n=this.Cf();return e!==null&&e.push(this.De,n),n}return 0}if(t.ae||V(`Cannot pass "${ut(t)}" as a ${this.name}`),t.ae.ie||V(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.nf&&t.ae.me.nf&&V(`Cannot convert argument of type ${t.ae.we?t.ae.we.name:t.ae.me.name} to parameter type ${this.name}`),n=Ke(t.ae.ie,t.ae.me.ge,this.ge),this.pf)switch(t.ae.pe===void 0&&V(`Passing raw pointer to smart pointer is illegal`),this.zg){case 0:t.ae.we===this?n=t.ae.pe:V(`Cannot convert argument of type ${t.ae.we?t.ae.we.name:t.ae.me.name} to parameter type ${this.name}`);break;case 1:n=t.ae.pe;break;case 2:if(t.ae.we===this)n=t.ae.pe;else{var r=t.clone();n=this.vg(n,st(function(){r.delete()})),e!==null&&e.push(this.De,n)}break;default:V(`Unsupporting sharing policy`)}return n}function Ye(e,t){return t===null?(this.Bf&&V(`null is not a valid ${this.name}`),0):(t.ae||V(`Cannot pass "${ut(t)}" as a ${this.name}`),t.ae.ie||V(`Cannot pass deleted object as a pointer of type ${this.name}`),t.ae.me.nf&&V(`Cannot convert argument of type ${t.ae.me.name} to parameter type ${this.name}`),Ke(t.ae.ie,t.ae.me.ge,this.ge))}function Xe(e,t,n,r,i,a,o,s,c,l,u){this.name=e,this.ge=t,this.Bf=n,this.nf=r,this.pf=i,this.tg=a,this.zg=o,this.Nf=s,this.Cf=c,this.vg=l,this.De=u,i||t.re!==void 0?this.toWireType=Je:(this.toWireType=r?qe:Ye,this.ve=null)}function Ze(e,t,r){n.hasOwnProperty(e)||xe(`Replacing nonexistant public symbol`),n[e].oe!==void 0&&r!==void 0?n[e].oe[r]=t:(n[e]=t,n[e].Ve=r)}var Qe=(e,t)=>{var r=[];return function(){if(r.length=0,Object.assign(r,arguments),e.includes(`j`)){var i=n[`dynCall_`+e];i=r&&r.length?i.apply(null,[t].concat(r)):i.call(null,t)}else i=M.get(t).apply(null,r);return i}};function U(e,t){e=B(e);var n=e.includes(`j`)?Qe(e,t):M.get(t);return typeof n!=`function`&&V(`unknown function pointer with signature ${e}: ${t}`),n}var $e=void 0;function et(e){e=Vn(e);var t=B(e);return Bn(e),t}function W(e,t){function n(e){i[e]||z[e]||(ye[e]?ye[e].forEach(n):(r.push(e),i[e]=!0))}var r=[],i={};throw t.forEach(n),new $e(`${e}: `+r.map(et).join([`, `]))}function tt(e,t,n,r,i){var a=t.length;2>a&&V(`argTypes array size mismatch! Must at least get return value and 'this' types!`);var o=t[1]!==null&&n!==null,s=!1;for(n=1;n<t.length;++n)if(t[n]!==null&&t[n].ve===void 0){s=!0;break}var c=t[0].name!==`void`,l=a-2,u=Array(l),d=[],f=[];return function(){if(arguments.length!==l&&V(`function ${e} called with ${arguments.length} arguments, expected ${l} args!`),f.length=0,d.length=o?2:1,d[0]=i,o){var n=t[1].toWireType(f,this);d[1]=n}for(var a=0;a<l;++a)u[a]=t[a+2].toWireType(f,arguments[a]),d.push(u[a]);if(a=r.apply(null,d),s)ge(f);else for(var p=o?1:2;p<t.length;p++){var m=p===1?n:u[p-2];t[p].ve!==null&&t[p].ve(m)}return n=c?t[0].fromWireType(a):void 0,n}}function nt(e,t){for(var n=[],r=0;r<e;r++)n.push(A[t+4*r>>2]);return n}function rt(){this.Ce=[void 0],this.Kf=[]}var it=new rt;function at(e){e>=it.df&&--it.get(e).Of===0&&it.Zf(e)}var ot=e=>(e||V(`Cannot use deleted val. handle = `+e),it.get(e).value),st=e=>{switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return it.Yf({Of:1,value:e})}};function ct(e,t,n){switch(t){case 0:return function(e){return this.fromWireType((n?w:E)[e])};case 1:return function(e){return this.fromWireType((n?D:O)[e>>1])};case 2:return function(e){return this.fromWireType((n?k:A)[e>>2])};default:throw TypeError(`Unknown integer type: `+e)}}function lt(e,t){var n=z[e];return n===void 0&&V(t+` has unknown type `+et(e)),n}function ut(e){if(e===null)return`null`;var t=typeof e;return t===`object`||t===`array`||t===`function`?e.toString():``+e}function dt(e,t){switch(t){case 2:return function(e){return this.fromWireType(j[e>>2])};case 3:return function(e){return this.fromWireType(ee[e>>3])};default:throw TypeError(`Unknown float type: `+e)}}function ft(e,t,n){switch(t){case 0:return n?function(e){return w[e]}:function(e){return E[e]};case 1:return n?function(e){return D[e>>1]}:function(e){return O[e>>1]};case 2:return n?function(e){return k[e>>2]}:function(e){return A[e>>2]};default:throw TypeError(`Unknown integer type: `+e)}}var pt=(e,t,n,r)=>{if(!(0<r))return 0;var i=n;r=n+r-1;for(var a=0;a<e.length;++a){var o=e.charCodeAt(a);if(55296<=o&&57343>=o){var s=e.charCodeAt(++a);o=65536+((o&1023)<<10)|s&1023}if(127>=o){if(n>=r)break;t[n++]=o}else{if(2047>=o){if(n+1>=r)break;t[n++]=192|o>>6}else{if(65535>=o){if(n+2>=r)break;t[n++]=224|o>>12}else{if(n+3>=r)break;t[n++]=240|o>>18,t[n++]=128|o>>12&63}t[n++]=128|o>>6&63}t[n++]=128|o&63}}return t[n]=0,n-i},mt=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);127>=r?t++:2047>=r?t+=2:55296<=r&&57343>=r?(t+=4,++n):t+=3}return t},ht=typeof TextDecoder<`u`?new TextDecoder(`utf-16le`):void 0,gt=(e,t)=>{for(var n=e>>1,r=n+t/2;!(n>=r)&&O[n];)++n;if(n<<=1,32<n-e&&ht)return ht.decode(E.subarray(e,n));for(n=``,r=0;!(r>=t/2);++r){var i=D[e+2*r>>1];if(i==0)break;n+=String.fromCharCode(i)}return n},_t=(e,t,n)=>{if(n===void 0&&(n=2147483647),2>n)return 0;n-=2;var r=t;n=n<2*e.length?n/2:e.length;for(var i=0;i<n;++i)D[t>>1]=e.charCodeAt(i),t+=2;return D[t>>1]=0,t-r},vt=e=>2*e.length,yt=(e,t)=>{for(var n=0,r=``;!(n>=t/4);){var i=k[e+4*n>>2];if(i==0)break;++n,65536<=i?(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|i&1023)):r+=String.fromCharCode(i)}return r},bt=(e,t,n)=>{if(n===void 0&&(n=2147483647),4>n)return 0;var r=t;n=r+n-4;for(var i=0;i<e.length;++i){var a=e.charCodeAt(i);if(55296<=a&&57343>=a){var o=e.charCodeAt(++i);a=65536+((a&1023)<<10)|o&1023}if(k[t>>2]=a,t+=4,t+4>n)break}return k[t>>2]=0,t-r},xt=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);55296<=r&&57343>=r&&++n,t+=4}return t},St={};function Ct(e){var t=St[e];return t===void 0?B(e):t}var wt=[];function Tt(){function e(e){e.$$$embind_global$$$=e;var t=typeof $$$embind_global$$$==`object`&&e.$$$embind_global$$$==e;return t||delete e.$$$embind_global$$$,t}if(typeof globalThis==`object`)return globalThis;if(typeof $$$embind_global$$$==`object`||(typeof global==`object`&&e(global)?$$$embind_global$$$=global:typeof self==`object`&&e(self)&&($$$embind_global$$$=self),typeof $$$embind_global$$$==`object`))return $$$embind_global$$$;throw Error(`unable to get global object.`)}function Et(e){var t=wt.length;return wt.push(e),t}function Dt(e,t){for(var n=Array(e),r=0;r<e;++r)n[r]=lt(A[t+4*r>>2],`parameter `+r);return n}var Ot=[];function kt(e){var t=Array(e+1);return function(n,r,i){t[0]=n;for(var a=0;a<e;++a){var o=lt(A[r+4*a>>2],`parameter `+a);t[a+1]=o.readValueFromPointer(i),i+=o.argPackAdvance}return n=new(n.bind.apply(n,t)),st(n)}}var At={};function jt(e){var t=e.getExtension(`ANGLE_instanced_arrays`);t&&(e.vertexAttribDivisor=function(e,n){t.vertexAttribDivisorANGLE(e,n)},e.drawArraysInstanced=function(e,n,r,i){t.drawArraysInstancedANGLE(e,n,r,i)},e.drawElementsInstanced=function(e,n,r,i,a){t.drawElementsInstancedANGLE(e,n,r,i,a)})}function Mt(e){var t=e.getExtension(`OES_vertex_array_object`);t&&(e.createVertexArray=function(){return t.createVertexArrayOES()},e.deleteVertexArray=function(e){t.deleteVertexArrayOES(e)},e.bindVertexArray=function(e){t.bindVertexArrayOES(e)},e.isVertexArray=function(e){return t.isVertexArrayOES(e)})}function Nt(e){var t=e.getExtension(`WEBGL_draw_buffers`);t&&(e.drawBuffers=function(e,n){t.drawBuffersWEBGL(e,n)})}var Pt=1,Ft=[],It=[],Lt=[],Rt=[],zt=[],Bt=[],Vt=[],Ht=[],Ut=[],Wt=[],Gt=[],Kt={},qt={},Jt=4;function G(e){en||=e}function Yt(e){for(var t=Pt++,n=e.length;n<t;n++)e[n]=null;return t}function Xt(e,t){e.df||(e.df=e.getContext,e.getContext=function(t,n){return n=e.df(t,n),t==`webgl`==n instanceof WebGLRenderingContext?n:null});var n=1<t.majorVersion?e.getContext(`webgl2`,t):e.getContext(`webgl`,t);return n?Zt(n,t):0}function Zt(e,t){var n=Yt(Ht),r={handle:n,attributes:t,version:t.majorVersion,xe:e};return e.canvas&&(e.canvas.Rf=r),Ht[n]=r,(t.eg===void 0||t.eg)&&$t(r),n}function Qt(e){return K=Ht[e],n.Jg=J=K&&K.xe,!(e&&!J)}function $t(e){if(e||=K,!e.og){e.og=!0;var t=e.xe;jt(t),Mt(t),Nt(t),t.If=t.getExtension(`WEBGL_draw_instanced_base_vertex_base_instance`),t.Mf=t.getExtension(`WEBGL_multi_draw_instanced_base_vertex_base_instance`),2<=e.version&&(t.ze=t.getExtension(`EXT_disjoint_timer_query_webgl2`)),(2>e.version||!t.ze)&&(t.ze=t.getExtension(`EXT_disjoint_timer_query`)),t.Kg=t.getExtension(`WEBGL_multi_draw`),(t.getSupportedExtensions()||[]).forEach(function(e){e.includes(`lose_context`)||e.includes(`debug`)||t.getExtension(e)})}}var K,en;function tn(e,t){J.bindFramebuffer(e,Lt[t])}function nn(e){J.bindVertexArray(Vt[e])}function rn(e){J.clear(e)}function an(e,t,n,r){J.clearColor(e,t,n,r)}function on(e){J.clearStencil(e)}function sn(e,t){for(var n=0;n<e;n++){var r=k[t+4*n>>2];J.deleteVertexArray(Vt[r]),Vt[r]=null}}var cn=[];function ln(e,t,n,r){J.drawElements(e,t,n,r)}function un(e,t,n,r){for(var i=0;i<e;i++){var a=J[n](),o=a&&Yt(r);a?(a.name=o,r[o]=a):G(1282),k[t+4*i>>2]=o}}function dn(e,t){un(e,t,`createVertexArray`,Vt)}function fn(e,t){A[e>>2]=t,A[e+4>>2]=(t-A[e>>2])/4294967296}function pn(e,t,n){if(t){var r=void 0;switch(e){case 36346:r=1;break;case 36344:n!=0&&n!=1&&G(1280);return;case 34814:case 36345:r=0;break;case 34466:var i=J.getParameter(34467);r=i?i.length:0;break;case 33309:if(2>K.version){G(1282);return}r=2*(J.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>K.version){G(1280);return}r=e==33307?3:0}if(r===void 0)switch(i=J.getParameter(e),typeof i){case`number`:r=i;break;case`boolean`:r=i?1:0;break;case`string`:G(1280);return;case`object`:if(i===null)switch(e){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:r=0;break;default:G(1280);return}else{if(i instanceof Float32Array||i instanceof Uint32Array||i instanceof Int32Array||i instanceof Array){for(e=0;e<i.length;++e)switch(n){case 0:k[t+4*e>>2]=i[e];break;case 2:j[t+4*e>>2]=i[e];break;case 4:w[t+e>>0]=i[e]?1:0}return}try{r=i.name|0}catch(t){G(1280),v(`GL_INVALID_ENUM in glGet`+n+`v: Unknown object returned from WebGL getParameter(`+e+`)! (error: `+t+`)`);return}}break;default:G(1280),v(`GL_INVALID_ENUM in glGet`+n+`v: Native code calling glGet`+n+`v(`+e+`) and it returns `+i+` of type `+typeof i+`!`);return}switch(n){case 1:fn(t,r);break;case 0:k[t>>2]=r;break;case 2:j[t>>2]=r;break;case 4:w[t>>0]=r?1:0}}else G(1281)}function mn(e,t){pn(e,t,0)}function hn(e,t,n){n?(e=Ut[e],t=2>K.version?J.ze.getQueryObjectEXT(e,t):J.getQueryParameter(e,t),fn(n,typeof t==`boolean`?t?1:0:t)):G(1281)}var gn=e=>{var t=mt(e)+1,n=zn(t);return n&&pt(e,E,n,t),n};function _n(e){var t=Kt[e];if(!t){switch(e){case 7939:t=J.getSupportedExtensions()||[],t=t.concat(t.map(function(e){return`GL_`+e})),t=gn(t.join(` `));break;case 7936:case 7937:case 37445:case 37446:(t=J.getParameter(e))||G(1280),t&&=gn(t);break;case 7938:t=J.getParameter(7938),t=2<=K.version?`OpenGL ES 3.0 (`+t+`)`:`OpenGL ES 2.0 (`+t+`)`,t=gn(t);break;case 35724:t=J.getParameter(35724);var n=t.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);n!==null&&(n[1].length==3&&(n[1]+=`0`),t=`OpenGL ES GLSL ES `+n[1]+` (`+t+`)`),t=gn(t);break;default:G(1280)}Kt[e]=t}return t}function vn(e,t){if(2>K.version)return G(1282),0;var n=qt[e];if(n)return 0>t||t>=n.length?(G(1281),0):n[t];switch(e){case 7939:return n=J.getSupportedExtensions()||[],n=n.concat(n.map(function(e){return`GL_`+e})),n=n.map(function(e){return gn(e)}),n=qt[e]=n,0>t||t>=n.length?(G(1281),0):n[t];default:return G(1280),0}}function yn(e){return e.slice(-1)==`]`&&e.lastIndexOf(`[`)}function bn(e){return e-=5120,e==0?w:e==1?E:e==2?D:e==4?k:e==6?j:e==5||e==28922||e==28520||e==30779||e==30782?A:O}function xn(e,t,n,r,i){e=bn(e);var a=31-Math.clz32(e.BYTES_PER_ELEMENT),o=Jt;return e.subarray(i>>a,i+r*(n*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[t-6402]||1)*(1<<a)+o-1&-o)>>a)}function q(e){var t=J.bg;if(t){var n=t.ff[e];return typeof n==`number`&&(t.ff[e]=n=J.getUniformLocation(t,t.Pf[e]+(0<n?`[`+n+`]`:``))),n}G(1282)}var Sn=[],Cn=[],wn={},Tn=()=>{if(!En){var e={USER:`web_user`,LOGNAME:`web_user`,PATH:`/`,PWD:`/`,HOME:`/home/web_user`,LANG:(typeof navigator==`object`&&navigator.languages&&navigator.languages[0]||`C`).replace(`-`,`_`)+`.UTF-8`,_:o||`./this.program`},t;for(t in wn)wn[t]===void 0?delete e[t]:e[t]=wn[t];var n=[];for(t in e)n.push(`${t}=${e[t]}`);En=n}return En},En,Dn=[null,[],[]],On=e=>e%4==0&&(e%100!=0||e%400==0),kn=[31,29,31,30,31,30,31,31,30,31,30,31],An=[31,28,31,30,31,30,31,31,30,31,30,31];function jn(e){var t=Array(mt(e)+1);return pt(e,t,0,t.length),t}var Mn=(e,t,n,r)=>{function i(e,t,n){for(e=typeof e==`number`?e.toString():e||``;e.length<t;)e=n[0]+e;return e}function a(e,t){return i(e,t,`0`)}function o(e,t){function n(e){return 0>e?-1:0<e?1:0}var r;return(r=n(e.getFullYear()-t.getFullYear()))===0&&(r=n(e.getMonth()-t.getMonth()))===0&&(r=n(e.getDate()-t.getDate())),r}function s(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function c(e){var t=e.He;for(e=new Date(new Date(e.Ie+1900,0,1).getTime());0<t;){var n=e.getMonth(),r=(On(e.getFullYear())?kn:An)[n];if(t>r-e.getDate())t-=r-e.getDate()+1,e.setDate(1),11>n?e.setMonth(n+1):(e.setMonth(0),e.setFullYear(e.getFullYear()+1));else{e.setDate(e.getDate()+t);break}}return n=new Date(e.getFullYear()+1,0,4),t=s(new Date(e.getFullYear(),0,4)),n=s(n),0>=o(t,e)?0>=o(n,e)?e.getFullYear()+1:e.getFullYear():e.getFullYear()-1}var l=k[r+40>>2];for(var u in r={Hg:k[r>>2],Gg:k[r+4>>2],tf:k[r+8>>2],Df:k[r+12>>2],uf:k[r+16>>2],Ie:k[r+20>>2],Ae:k[r+24>>2],He:k[r+28>>2],Ng:k[r+32>>2],Fg:k[r+36>>2],Ig:l&&l?R(E,l):``},n=n?R(E,n):``,l={"%c":`%a %b %d %H:%M:%S %Y`,"%D":`%m/%d/%y`,"%F":`%Y-%m-%d`,"%h":`%b`,"%r":`%I:%M:%S %p`,"%R":`%H:%M`,"%T":`%H:%M:%S`,"%x":`%m/%d/%y`,"%X":`%H:%M:%S`,"%Ec":`%c`,"%EC":`%C`,"%Ex":`%m/%d/%y`,"%EX":`%H:%M:%S`,"%Ey":`%y`,"%EY":`%Y`,"%Od":`%d`,"%Oe":`%e`,"%OH":`%H`,"%OI":`%I`,"%Om":`%m`,"%OM":`%M`,"%OS":`%S`,"%Ou":`%u`,"%OU":`%U`,"%OV":`%V`,"%Ow":`%w`,"%OW":`%W`,"%Oy":`%y`},l)n=n.replace(new RegExp(u,`g`),l[u]);var d=`Sunday Monday Tuesday Wednesday Thursday Friday Saturday`.split(` `),f=`January February March April May June July August September October November December`.split(` `);for(u in l={"%a":e=>d[e.Ae].substring(0,3),"%A":e=>d[e.Ae],"%b":e=>f[e.uf].substring(0,3),"%B":e=>f[e.uf],"%C":e=>a((e.Ie+1900)/100|0,2),"%d":e=>a(e.Df,2),"%e":e=>i(e.Df,2,` `),"%g":e=>c(e).toString().substring(2),"%G":e=>c(e),"%H":e=>a(e.tf,2),"%I":e=>(e=e.tf,e==0?e=12:12<e&&(e-=12),a(e,2)),"%j":e=>{for(var t=0,n=0;n<=e.uf-1;t+=(On(e.Ie+1900)?kn:An)[n++]);return a(e.Df+t,3)},"%m":e=>a(e.uf+1,2),"%M":e=>a(e.Gg,2),"%n":()=>`
`,"%p":e=>0<=e.tf&&12>e.tf?`AM`:`PM`,"%S":e=>a(e.Hg,2),"%t":()=>`	`,"%u":e=>e.Ae||7,"%U":e=>a(Math.floor((e.He+7-e.Ae)/7),2),"%V":e=>{var t=Math.floor((e.He+7-(e.Ae+6)%7)/7);if(2>=(e.Ae+371-e.He-2)%7&&t++,t)t==53&&(n=(e.Ae+371-e.He)%7,n==4||n==3&&On(e.Ie)||(t=1));else{t=52;var n=(e.Ae+7-e.He-1)%7;(n==4||n==5&&On(e.Ie%400-1))&&t++}return a(t,2)},"%w":e=>e.Ae,"%W":e=>a(Math.floor((e.He+7-(e.Ae+6)%7)/7),2),"%y":e=>(e.Ie+1900).toString().substring(2),"%Y":e=>e.Ie+1900,"%z":e=>{e=e.Fg;var t=0<=e;return e=Math.abs(e)/60,(t?`+`:`-`)+String(`0000`+(e/60*100+e%60)).slice(-4)},"%Z":e=>e.Ig,"%%":()=>`%`},n=n.replace(/%%/g,`\0\0`),l)n.includes(u)&&(n=n.replace(new RegExp(u,`g`),l[u](r)));return n=n.replace(/\0\0/g,`%`),u=jn(n),u.length>t?0:(w.set(u,e),u.length-1)};be=n.InternalError=class extends Error{constructor(e){super(e),this.name=`InternalError`}};for(var Nn=Array(256),Pn=0;256>Pn;++Pn)Nn[Pn]=String.fromCharCode(Pn);we=Nn,Te=n.BindingError=class extends Error{constructor(e){super(e),this.name=`BindingError`}},Be.prototype.isAliasOf=function(e){if(!(this instanceof Be&&e instanceof Be))return!1;var t=this.ae.me.ge,n=this.ae.ie,r=e.ae.me.ge;for(e=e.ae.ie;t.re;)n=t.gf(n),t=t.re;for(;r.re;)e=r.gf(e),r=r.re;return t===r&&n===e},Be.prototype.clone=function(){if(this.ae.ie||Oe(this),this.ae.ef)return this.ae.count.value+=1,this;var e=ze,t=Object,n=t.create,r=Object.getPrototypeOf(this),i=this.ae;return e=e(n.call(t,r,{ae:{value:{count:i.count,Xe:i.Xe,ef:i.ef,ie:i.ie,me:i.me,pe:i.pe,we:i.we}}})),e.ae.count.value+=1,e.ae.Xe=!1,e},Be.prototype.delete=function(){this.ae.ie||Oe(this),this.ae.Xe&&!this.ae.ef&&V(`Object already scheduled for deletion`),Ae(this),je(this.ae),this.ae.ef||(this.ae.pe=void 0,this.ae.ie=void 0)},Be.prototype.isDeleted=function(){return!this.ae.ie},Be.prototype.deleteLater=function(){return this.ae.ie||Oe(this),this.ae.Xe&&!this.ae.ef&&V(`Object already scheduled for deletion`),Pe.push(this),Pe.length===1&&H&&H(Fe),this.ae.Xe=!0,this},n.getInheritedInstanceCount=function(){return Object.keys(Ie).length},n.getLiveInheritedInstances=function(){var e=[],t;for(t in Ie)Ie.hasOwnProperty(t)&&e.push(Ie[t]);return e},n.flushPendingDeletes=Fe,n.setDelayFunction=function(e){H=e,Pe.length&&H&&H(Fe)},Xe.prototype.jg=function(e){return this.Nf&&(e=this.Nf(e)),e},Xe.prototype.Hf=function(e){this.De&&this.De(e)},Xe.prototype.argPackAdvance=8,Xe.prototype.readValueFromPointer=_e,Xe.prototype.deleteObject=function(e){e!==null&&e.delete()},Xe.prototype.fromWireType=function(e){function t(){return this.pf?Re(this.ge.Ye,{me:this.tg,ie:n,we:this,pe:e}):Re(this.ge.Ye,{me:this,ie:e})}var n=this.jg(e);if(!n)return this.Hf(e),null;var r=Le(this.ge,n);if(r!==void 0)return r.ae.count.value===0?(r.ae.ie=n,r.ae.pe=e,r.clone()):(r=r.clone(),this.Hf(e),r);if(r=this.ge.ig(n),r=Ne[r],!r)return t.call(this);r=this.nf?r.$f:r.pointerType;var i=Me(n,this.ge,r.ge);return i===null?t.call(this):this.pf?Re(r.ge.Ye,{me:r,ie:i,we:this,pe:e}):Re(r.ge.Ye,{me:r,ie:i})},$e=n.UnboundTypeError=function(e,t){var n=He(t,function(e){this.name=t,this.message=e,e=Error(e).stack,e!==void 0&&(this.stack=this.toString()+`
`+e.replace(/^Error(:[^\n]*)?\n/,``))});return n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},n}(Error,`UnboundTypeError`),Object.assign(rt.prototype,{get(e){return this.Ce[e]},has(e){return this.Ce[e]!==void 0},Yf(e){var t=this.Kf.pop()||this.Ce.length;return this.Ce[t]=e,t},Zf(e){this.Ce[e]=void 0,this.Kf.push(e)}}),it.Ce.push({value:void 0},{value:null},{value:!0},{value:!1}),it.df=it.Ce.length,n.count_emval_handles=function(){for(var e=0,t=it.df;t<it.Ce.length;++t)it.Ce[t]!==void 0&&++e;return e};for(var J,Fn=0;32>Fn;++Fn)cn.push(Array(Fn));var In=new Float32Array(288);for(Fn=0;288>Fn;++Fn)Sn[Fn]=In.subarray(0,Fn+1);var Ln=new Int32Array(288);for(Fn=0;288>Fn;++Fn)Cn[Fn]=Ln.subarray(0,Fn+1);var Rn={R:function(){return 0},wb:()=>{},yb:function(){return 0},tb:()=>{},ub:()=>{},S:function(){},vb:()=>{},B:function(e){var t=he[e];delete he[e];var n=t.Cf,r=t.De,i=t.Jf,a=i.map(e=>e.mg).concat(i.map(e=>e.xg));Se([e],a,e=>{var a={};return i.forEach((t,n)=>{var r=e[n],o=t.kg,s=t.lg,c=e[n+i.length],l=t.wg,u=t.yg;a[t.fg]={read:e=>r.fromWireType(o(s,e)),write:(e,t)=>{var n=[];l(u,e,c.toWireType(n,t)),ge(n)}}}),[{name:t.name,fromWireType:function(e){var t={},n;for(n in a)t[n]=a[n].read(e);return r(e),t},toWireType:function(e,t){for(var i in a)if(!(i in t))throw TypeError(`Missing field: "${i}"`);var o=n();for(i in a)a[i].write(o,t[i]);return e!==null&&e.push(r,o),o},argPackAdvance:8,readValueFromPointer:_e,ve:r}]})},nb:function(){},Cb:function(e,t,n,r,i){var a=Ce(n);t=B(t),De(e,{name:t,fromWireType:function(e){return!!e},toWireType:function(e,t){return t?r:i},argPackAdvance:8,readValueFromPointer:function(e){if(n===1)var r=w;else if(n===2)r=D;else if(n===4)r=k;else throw TypeError(`Unknown boolean type size: `+t);return this.fromWireType(r[e>>a])},ve:null})},n:function(e,t,n,r,i,a,o,s,c,l,u,d,f){u=B(u),a=U(i,a),s&&=U(o,s),l&&=U(c,l),f=U(d,f);var p=Ve(u);We(p,function(){W(`Cannot construct ${u} due to unbound types`,[r])}),Se([e,t,n],r?[r]:[],function(t){if(t=t[0],r)var n=t.ge,i=n.Ye;else i=Be.prototype;t=He(p,function(){if(Object.getPrototypeOf(this)!==o)throw new Te(`Use 'new' to construct `+u);if(c.Ge===void 0)throw new Te(u+` has no accessible constructor`);var e=c.Ge[arguments.length];if(e===void 0)throw new Te(`Tried to invoke ctor of ${u} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(c.Ge).toString()}) parameters instead!`);return e.apply(this,arguments)});var o=Object.create(i,{constructor:{value:t}});t.prototype=o;var c=new Ge(u,t,o,f,n,a,s,l);c.re&&(c.re.hf===void 0&&(c.re.hf=[]),c.re.hf.push(c)),n=new Xe(u,c,!0,!1,!1),i=new Xe(u+`*`,c,!1,!1,!1);var d=new Xe(u+` const*`,c,!1,!0,!1);return Ne[e]={pointerType:i,$f:d},Ze(p,t),[n,i,d]})},f:function(e,t,n,r,i,a,o){var s=nt(n,r);t=B(t),a=U(i,a),Se([],[e],function(e){function r(){W(`Cannot call ${i} due to unbound types`,s)}e=e[0];var i=`${e.name}.${t}`;t.startsWith(`@@`)&&(t=Symbol[t.substring(2)]);var c=e.ge.constructor;return c[t]===void 0?(r.Ve=n-1,c[t]=r):(Ue(c,t,i),c[t].oe[n-1]=r),Se([],s,function(r){if(r=[r[0],null].concat(r.slice(1)),r=tt(i,r,null,a,o),c[t].oe===void 0?(r.Ve=n-1,c[t]=r):c[t].oe[n-1]=r,e.ge.hf)for(let n of e.ge.hf)n.constructor.hasOwnProperty(t)||(n.constructor[t]=r);return[]}),[]})},A:function(e,t,n,r,i,a){var o=nt(t,n);i=U(r,i),Se([],[e],function(e){e=e[0];var n=`constructor ${e.name}`;if(e.ge.Ge===void 0&&(e.ge.Ge=[]),e.ge.Ge[t-1]!==void 0)throw new Te(`Cannot register multiple constructors with identical number of parameters (${t-1}) for class '${e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return e.ge.Ge[t-1]=()=>{W(`Cannot construct ${e.name} due to unbound types`,o)},Se([],o,function(r){return r.splice(1,0,null),e.ge.Ge[t-1]=tt(n,r,null,i,a),[]}),[]})},b:function(e,t,n,r,i,a,o,s){var c=nt(n,r);t=B(t),a=U(i,a),Se([],[e],function(e){function r(){W(`Cannot call ${i} due to unbound types`,c)}e=e[0];var i=`${e.name}.${t}`;t.startsWith(`@@`)&&(t=Symbol[t.substring(2)]),s&&e.ge.ug.push(t);var l=e.ge.Ye,u=l[t];return u===void 0||u.oe===void 0&&u.className!==e.name&&u.Ve===n-2?(r.Ve=n-2,r.className=e.name,l[t]=r):(Ue(l,t,i),l[t].oe[n-2]=r),Se([],c,function(r){return r=tt(i,r,e,a,o),l[t].oe===void 0?(r.Ve=n-2,l[t]=r):l[t].oe[n-2]=r,[]}),[]})},t:function(e,t,r){e=B(e),Se([],[t],function(t){return t=t[0],n[e]=t.fromWireType(r),[]})},Bb:function(e,t){t=B(t),De(e,{name:t,fromWireType:function(e){var t=ot(e);return at(e),t},toWireType:function(e,t){return st(t)},argPackAdvance:8,readValueFromPointer:_e,ve:null})},m:function(e,t,n,r){function i(){}n=Ce(n),t=B(t),i.values={},De(e,{name:t,constructor:i,fromWireType:function(e){return this.constructor.values[e]},toWireType:function(e,t){return t.value},argPackAdvance:8,readValueFromPointer:ct(t,n,r),ve:null}),We(t,i)},c:function(e,t,n){var r=lt(e,`enum`);t=B(t),e=r.constructor,r=Object.create(r.constructor.prototype,{value:{value:n},constructor:{value:He(`${r.name}_${t}`,function(){})}}),e.values[n]=r,e[t]=r},U:function(e,t,n){n=Ce(n),t=B(t),De(e,{name:t,fromWireType:function(e){return e},toWireType:function(e,t){return t},argPackAdvance:8,readValueFromPointer:dt(t,n),ve:null})},y:function(e,t,n,r,i,a){var o=nt(t,n);e=B(e),i=U(r,i),We(e,function(){W(`Cannot call ${e} due to unbound types`,o)},t-1),Se([],o,function(n){return n=[n[0],null].concat(n.slice(1)),Ze(e,tt(e,n,null,i,a),t-1),[]})},E:function(e,t,n,r,i){t=B(t),i===-1&&(i=4294967295),i=Ce(n);var a=e=>e;if(r===0){var o=32-8*n;a=e=>e<<o>>>o}n=t.includes(`unsigned`)?function(e,t){return t>>>0}:function(e,t){return t},De(e,{name:t,fromWireType:a,toWireType:n,argPackAdvance:8,readValueFromPointer:ft(t,i,r!==0),ve:null})},r:function(e,t,n){function r(e){e>>=2;var t=A;return new i(t.buffer,t[e+1],t[e])}var i=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][t];n=B(n),De(e,{name:n,fromWireType:r,argPackAdvance:8,readValueFromPointer:r},{ng:!0})},q:function(e,t,n,r,i,a,o,s,c,l,u,d){n=B(n),a=U(i,a),s=U(o,s),l=U(c,l),d=U(u,d),Se([e],[t],function(e){return e=e[0],[new Xe(n,e.ge,!1,!1,!0,e,r,a,s,l,d)]})},T:function(e,t){t=B(t);var n=t===`std::string`;De(e,{name:t,fromWireType:function(e){var t=A[e>>2],r=e+4;if(n)for(var i=r,a=0;a<=t;++a){var o=r+a;if(a==t||E[o]==0){if(i=i?R(E,i,o-i):``,s===void 0)var s=i;else s+=`\0`,s+=i;i=o+1}}else{for(s=Array(t),a=0;a<t;++a)s[a]=String.fromCharCode(E[r+a]);s=s.join(``)}return Bn(e),s},toWireType:function(e,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var r=typeof t==`string`;r||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array||V(`Cannot pass non-string to std::string`);var i=n&&r?mt(t):t.length,a=zn(4+i+1),o=a+4;if(A[a>>2]=i,n&&r)pt(t,E,o,i+1);else if(r)for(r=0;r<i;++r){var s=t.charCodeAt(r);255<s&&(Bn(o),V(`String has UTF-16 code units that do not fit in 8 bits`)),E[o+r]=s}else for(r=0;r<i;++r)E[o+r]=t[r];return e!==null&&e.push(Bn,a),a},argPackAdvance:8,readValueFromPointer:_e,ve:function(e){Bn(e)}})},N:function(e,t,n){if(n=B(n),t===2)var r=gt,i=_t,a=vt,o=()=>O,s=1;else t===4&&(r=yt,i=bt,a=xt,o=()=>A,s=2);De(e,{name:n,fromWireType:function(e){for(var n=A[e>>2],i=o(),a,c=e+4,l=0;l<=n;++l){var u=e+4+l*t;(l==n||i[u>>s]==0)&&(c=r(c,u-c),a===void 0?a=c:(a+=`\0`,a+=c),c=u+t)}return Bn(e),a},toWireType:function(e,r){typeof r!=`string`&&V(`Cannot pass non-string to C++ string type ${n}`);var o=a(r),c=zn(4+o+t);return A[c>>2]=o>>s,i(r,c+4,o+t),e!==null&&e.push(Bn,c),c},argPackAdvance:8,readValueFromPointer:_e,ve:function(e){Bn(e)}})},C:function(e,t,n,r,i,a){he[e]={name:B(t),Cf:U(n,r),De:U(i,a),Jf:[]}},e:function(e,t,n,r,i,a,o,s,c,l){he[e].Jf.push({fg:B(t),mg:n,kg:U(r,i),lg:a,xg:o,wg:U(s,c),yg:l})},Db:function(e,t){t=B(t),De(e,{pg:!0,name:t,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},Ab:()=>!0,pb:()=>{throw 1/0},F:function(e,t,n){e=ot(e),t=lt(t,`emval::as`);var r=[],i=st(r);return A[n>>2]=i,t.toWireType(r,e)},X:function(e,t,n,r,i){e=wt[e],t=ot(t),n=Ct(n);var a=[];return A[r>>2]=st(a),e(t,n,a,i)},x:function(e,t,n,r){e=wt[e],t=ot(t),n=Ct(n),e(t,n,null,r)},d:at,K:function(e){return e===0?st(Tt()):(e=Ct(e),st(Tt()[e]))},u:function(e,t){var n=Dt(e,t),r=n[0];t=r.name+`_$`+n.slice(1).map(function(e){return e.name}).join(`_`)+`$`;var i=Ot[t];if(i!==void 0)return i;var a=Array(e-1);return i=Et((t,i,o,s)=>{for(var c=0,l=0;l<e-1;++l)a[l]=n[l+1].readValueFromPointer(s+c),c+=n[l+1].argPackAdvance;for(t=t[i].apply(t,a),l=0;l<e-1;++l)n[l+1].cg&&n[l+1].cg(a[l]);if(!r.pg)return r.toWireType(o,t)}),Ot[t]=i},z:function(e,t){return e=ot(e),t=ot(t),st(e[t])},p:function(e){4<e&&(it.get(e).Of+=1)},J:function(e,t,n,r){e=ot(e);var i=At[t];return i||(i=kt(t),At[t]=i),i(e,n,r)},H:function(){return st([])},g:function(e){return st(Ct(e))},G:function(){return st({})},gb:function(e){return e=ot(e),!e},D:function(e){ge(ot(e)),at(e)},l:function(e,t,n){e=ot(e),t=ot(t),n=ot(n),e[t]=n},h:function(e,t){return e=lt(e,`_emval_take_value`),e=e.readValueFromPointer(t),st(e)},kb:function(){return-52},lb:function(){},a:()=>{se(``)},zb:()=>performance.now(),sd:function(e){J.activeTexture(e)},td:function(e,t){J.attachShader(It[e],Bt[t])},Yb:function(e,t){J.beginQuery(e,Ut[t])},Sb:function(e,t){J.ze.beginQueryEXT(e,Ut[t])},ud:function(e,t,n){J.bindAttribLocation(It[e],t,n?R(E,n):``)},vd:function(e,t){e==35051?J.zf=t:e==35052&&(J.We=t),J.bindBuffer(e,Ft[t])},uc:tn,vc:function(e,t){J.bindRenderbuffer(e,Rt[t])},cc:function(e,t){J.bindSampler(e,Wt[t])},wd:function(e,t){J.bindTexture(e,zt[t])},Pc:nn,Tc:nn,Y:function(e,t,n,r){J.blendColor(e,t,n,r)},Z:function(e){J.blendEquation(e)},_:function(e,t){J.blendFunc(e,t)},oc:function(e,t,n,r,i,a,o,s,c,l){J.blitFramebuffer(e,t,n,r,i,a,o,s,c,l)},$:function(e,t,n,r){2<=K.version?n&&t?J.bufferData(e,E,r,n,t):J.bufferData(e,t,r):J.bufferData(e,n?E.subarray(n,n+t):t,r)},aa:function(e,t,n,r){2<=K.version?n&&J.bufferSubData(e,t,E,r,n):J.bufferSubData(e,t,E.subarray(r,r+n))},wc:function(e){return J.checkFramebufferStatus(e)},ba:rn,ca:an,da:on,lc:function(e,t,n,r){return J.clientWaitSync(Gt[e],t,(n>>>0)+4294967296*r)},ea:function(e,t,n,r){J.colorMask(!!e,!!t,!!n,!!r)},fa:function(e){J.compileShader(Bt[e])},ga:function(e,t,n,r,i,a,o,s){2<=K.version?J.We||!o?J.compressedTexImage2D(e,t,n,r,i,a,o,s):J.compressedTexImage2D(e,t,n,r,i,a,E,s,o):J.compressedTexImage2D(e,t,n,r,i,a,s?E.subarray(s,s+o):null)},ha:function(e,t,n,r,i,a,o,s,c){2<=K.version?J.We||!s?J.compressedTexSubImage2D(e,t,n,r,i,a,o,s,c):J.compressedTexSubImage2D(e,t,n,r,i,a,o,E,c,s):J.compressedTexSubImage2D(e,t,n,r,i,a,o,c?E.subarray(c,c+s):null)},nc:function(e,t,n,r,i){J.copyBufferSubData(e,t,n,r,i)},ia:function(e,t,n,r,i,a,o,s){J.copyTexSubImage2D(e,t,n,r,i,a,o,s)},ja:function(){var e=Yt(It),t=J.createProgram();return t.name=e,t.sf=t.qf=t.rf=0,t.Ef=1,It[e]=t,e},ka:function(e){var t=Yt(Bt);return Bt[t]=J.createShader(e),t},la:function(e){J.cullFace(e)},ma:function(e,t){for(var n=0;n<e;n++){var r=k[t+4*n>>2],i=Ft[r];i&&(J.deleteBuffer(i),i.name=0,Ft[r]=null,r==J.zf&&(J.zf=0),r==J.We&&(J.We=0))}},xc:function(e,t){for(var n=0;n<e;++n){var r=k[t+4*n>>2],i=Lt[r];i&&(J.deleteFramebuffer(i),i.name=0,Lt[r]=null)}},na:function(e){if(e){var t=It[e];t?(J.deleteProgram(t),t.name=0,It[e]=null):G(1281)}},Zb:function(e,t){for(var n=0;n<e;n++){var r=k[t+4*n>>2],i=Ut[r];i&&(J.deleteQuery(i),Ut[r]=null)}},Tb:function(e,t){for(var n=0;n<e;n++){var r=k[t+4*n>>2],i=Ut[r];i&&(J.ze.deleteQueryEXT(i),Ut[r]=null)}},yc:function(e,t){for(var n=0;n<e;n++){var r=k[t+4*n>>2],i=Rt[r];i&&(J.deleteRenderbuffer(i),i.name=0,Rt[r]=null)}},dc:function(e,t){for(var n=0;n<e;n++){var r=k[t+4*n>>2],i=Wt[r];i&&(J.deleteSampler(i),i.name=0,Wt[r]=null)}},oa:function(e){if(e){var t=Bt[e];t?(J.deleteShader(t),Bt[e]=null):G(1281)}},mc:function(e){if(e){var t=Gt[e];t?(J.deleteSync(t),t.name=0,Gt[e]=null):G(1281)}},pa:function(e,t){for(var n=0;n<e;n++){var r=k[t+4*n>>2],i=zt[r];i&&(J.deleteTexture(i),i.name=0,zt[r]=null)}},Qc:sn,Uc:sn,qa:function(e){J.depthMask(!!e)},ra:function(e){J.disable(e)},sa:function(e){J.disableVertexAttribArray(e)},ta:function(e,t,n){J.drawArrays(e,t,n)},Nc:function(e,t,n,r){J.drawArraysInstanced(e,t,n,r)},Lc:function(e,t,n,r,i){J.If.drawArraysInstancedBaseInstanceWEBGL(e,t,n,r,i)},Jc:function(e,t){for(var n=cn[e],r=0;r<e;r++)n[r]=k[t+4*r>>2];J.drawBuffers(n)},ua:ln,Oc:function(e,t,n,r,i){J.drawElementsInstanced(e,t,n,r,i)},Mc:function(e,t,n,r,i,a,o){J.If.drawElementsInstancedBaseVertexBaseInstanceWEBGL(e,t,n,r,i,a,o)},Dc:function(e,t,n,r,i,a){ln(e,r,i,a)},va:function(e){J.enable(e)},wa:function(e){J.enableVertexAttribArray(e)},_b:function(e){J.endQuery(e)},Ub:function(e){J.ze.endQueryEXT(e)},ic:function(e,t){return(e=J.fenceSync(e,t))?(t=Yt(Gt),e.name=t,Gt[t]=e,t):0},xa:function(){J.finish()},ya:function(){J.flush()},zc:function(e,t,n,r){J.framebufferRenderbuffer(e,t,n,Rt[r])},Ac:function(e,t,n,r,i){J.framebufferTexture2D(e,t,n,zt[r],i)},za:function(e){J.frontFace(e)},Aa:function(e,t){un(e,t,`createBuffer`,Ft)},Bc:function(e,t){un(e,t,`createFramebuffer`,Lt)},$b:function(e,t){un(e,t,`createQuery`,Ut)},Vb:function(e,t){for(var n=0;n<e;n++){var r=J.ze.createQueryEXT();if(!r){for(G(1282);n<e;)k[t+4*n++>>2]=0;break}var i=Yt(Ut);r.name=i,Ut[i]=r,k[t+4*n>>2]=i}},Cc:function(e,t){un(e,t,`createRenderbuffer`,Rt)},ec:function(e,t){un(e,t,`createSampler`,Wt)},Ba:function(e,t){un(e,t,`createTexture`,zt)},Rc:dn,Vc:dn,qc:function(e){J.generateMipmap(e)},Ca:function(e,t,n){n?k[n>>2]=J.getBufferParameter(e,t):G(1281)},Da:function(){var e=J.getError()||en;return en=0,e},Ea:function(e,t){pn(e,t,2)},rc:function(e,t,n,r){e=J.getFramebufferAttachmentParameter(e,t,n),(e instanceof WebGLRenderbuffer||e instanceof WebGLTexture)&&(e=e.name|0),k[r>>2]=e},Fa:mn,Ga:function(e,t,n,r){e=J.getProgramInfoLog(It[e]),e===null&&(e=`(unknown error)`),t=0<t&&r?pt(e,E,r,t):0,n&&(k[n>>2]=t)},Ha:function(e,t,n){if(n)if(e>=Pt)G(1281);else if(e=It[e],t==35716)e=J.getProgramInfoLog(e),e===null&&(e=`(unknown error)`),k[n>>2]=e.length+1;else if(t==35719){if(!e.sf)for(t=0;t<J.getProgramParameter(e,35718);++t)e.sf=Math.max(e.sf,J.getActiveUniform(e,t).name.length+1);k[n>>2]=e.sf}else if(t==35722){if(!e.qf)for(t=0;t<J.getProgramParameter(e,35721);++t)e.qf=Math.max(e.qf,J.getActiveAttrib(e,t).name.length+1);k[n>>2]=e.qf}else if(t==35381){if(!e.rf)for(t=0;t<J.getProgramParameter(e,35382);++t)e.rf=Math.max(e.rf,J.getActiveUniformBlockName(e,t).length+1);k[n>>2]=e.rf}else k[n>>2]=J.getProgramParameter(e,t);else G(1281)},Pb:hn,Qb:hn,ac:function(e,t,n){if(n){e=J.getQueryParameter(Ut[e],t);var r=typeof e==`boolean`?e?1:0:e;k[n>>2]=r}else G(1281)},Wb:function(e,t,n){if(n){e=J.ze.getQueryObjectEXT(Ut[e],t);var r=typeof e==`boolean`?e?1:0:e;k[n>>2]=r}else G(1281)},bc:function(e,t,n){n?k[n>>2]=J.getQuery(e,t):G(1281)},Xb:function(e,t,n){n?k[n>>2]=J.ze.getQueryEXT(e,t):G(1281)},sc:function(e,t,n){n?k[n>>2]=J.getRenderbufferParameter(e,t):G(1281)},Ia:function(e,t,n,r){e=J.getShaderInfoLog(Bt[e]),e===null&&(e=`(unknown error)`),t=0<t&&r?pt(e,E,r,t):0,n&&(k[n>>2]=t)},Mb:function(e,t,n,r){e=J.getShaderPrecisionFormat(e,t),k[n>>2]=e.rangeMin,k[n+4>>2]=e.rangeMax,k[r>>2]=e.precision},Ja:function(e,t,n){n?t==35716?(e=J.getShaderInfoLog(Bt[e]),e===null&&(e=`(unknown error)`),k[n>>2]=e?e.length+1:0):t==35720?(e=J.getShaderSource(Bt[e]),k[n>>2]=e?e.length+1:0):k[n>>2]=J.getShaderParameter(Bt[e],t):G(1281)},Ka:_n,Sc:vn,La:function(e,t){if(t=t?R(E,t):``,e=It[e]){var n=e,r=n.ff,i=n.Qf,a;if(!r)for(n.ff=r={},n.Pf={},a=0;a<J.getProgramParameter(n,35718);++a){var o=J.getActiveUniform(n,a),s=o.name;o=o.size;var c=yn(s);c=0<c?s.slice(0,c):s;var l=n.Ef;for(n.Ef+=o,i[c]=[o,l],s=0;s<o;++s)r[l]=s,n.Pf[l++]=c}if(n=e.ff,r=0,i=t,a=yn(t),0<a&&(r=parseInt(t.slice(a+1))>>>0,i=t.slice(0,a)),(i=e.Qf[i])&&r<i[0]&&(r+=i[1],n[r]=n[r]||J.getUniformLocation(e,t)))return r}else G(1281);return-1},Nb:function(e,t,n){for(var r=cn[t],i=0;i<t;i++)r[i]=k[n+4*i>>2];J.invalidateFramebuffer(e,r)},Ob:function(e,t,n,r,i,a,o){for(var s=cn[t],c=0;c<t;c++)s[c]=k[n+4*c>>2];J.invalidateSubFramebuffer(e,s,r,i,a,o)},jc:function(e){return J.isSync(Gt[e])},Ma:function(e){return(e=zt[e])?J.isTexture(e):0},Na:function(e){J.lineWidth(e)},Oa:function(e){e=It[e],J.linkProgram(e),e.ff=0,e.Qf={}},Hc:function(e,t,n,r,i,a){J.Mf.multiDrawArraysInstancedBaseInstanceWEBGL(e,k,t>>2,k,n>>2,k,r>>2,A,i>>2,a)},Ic:function(e,t,n,r,i,a,o,s){J.Mf.multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL(e,k,t>>2,n,k,r>>2,k,i>>2,k,a>>2,A,o>>2,s)},Pa:function(e,t){e==3317&&(Jt=t),J.pixelStorei(e,t)},Rb:function(e,t){J.ze.queryCounterEXT(Ut[e],t)},Kc:function(e){J.readBuffer(e)},Qa:function(e,t,n,r,i,a,o){if(2<=K.version)if(J.zf)J.readPixels(e,t,n,r,i,a,o);else{var s=bn(a);J.readPixels(e,t,n,r,i,a,s,o>>31-Math.clz32(s.BYTES_PER_ELEMENT))}else (o=xn(a,i,n,r,o))?J.readPixels(e,t,n,r,i,a,o):G(1280)},tc:function(e,t,n,r){J.renderbufferStorage(e,t,n,r)},pc:function(e,t,n,r,i){J.renderbufferStorageMultisample(e,t,n,r,i)},fc:function(e,t,n){J.samplerParameterf(Wt[e],t,n)},gc:function(e,t,n){J.samplerParameteri(Wt[e],t,n)},hc:function(e,t,n){J.samplerParameteri(Wt[e],t,k[n>>2])},Ra:function(e,t,n,r){J.scissor(e,t,n,r)},Sa:function(e,t,n,r){for(var i=``,a=0;a<t;++a){var o=r?k[r+4*a>>2]:-1,s=k[n+4*a>>2];o=s?R(E,s,0>o?void 0:o):``,i+=o}J.shaderSource(Bt[e],i)},Ta:function(e,t,n){J.stencilFunc(e,t,n)},Ua:function(e,t,n,r){J.stencilFuncSeparate(e,t,n,r)},Va:function(e){J.stencilMask(e)},Wa:function(e,t){J.stencilMaskSeparate(e,t)},Xa:function(e,t,n){J.stencilOp(e,t,n)},Ya:function(e,t,n,r){J.stencilOpSeparate(e,t,n,r)},Za:function(e,t,n,r,i,a,o,s,c){if(2<=K.version)if(J.We)J.texImage2D(e,t,n,r,i,a,o,s,c);else if(c){var l=bn(s);J.texImage2D(e,t,n,r,i,a,o,s,l,c>>31-Math.clz32(l.BYTES_PER_ELEMENT))}else J.texImage2D(e,t,n,r,i,a,o,s,null);else J.texImage2D(e,t,n,r,i,a,o,s,c?xn(s,o,r,i,c):null)},_a:function(e,t,n){J.texParameterf(e,t,n)},$a:function(e,t,n){J.texParameterf(e,t,j[n>>2])},ab:function(e,t,n){J.texParameteri(e,t,n)},bb:function(e,t,n){J.texParameteri(e,t,k[n>>2])},Ec:function(e,t,n,r,i){J.texStorage2D(e,t,n,r,i)},cb:function(e,t,n,r,i,a,o,s,c){if(2<=K.version)if(J.We)J.texSubImage2D(e,t,n,r,i,a,o,s,c);else if(c){var l=bn(s);J.texSubImage2D(e,t,n,r,i,a,o,s,l,c>>31-Math.clz32(l.BYTES_PER_ELEMENT))}else J.texSubImage2D(e,t,n,r,i,a,o,s,null);else l=null,c&&(l=xn(s,o,i,a,c)),J.texSubImage2D(e,t,n,r,i,a,o,s,l)},db:function(e,t){J.uniform1f(q(e),t)},eb:function(e,t,n){if(2<=K.version)t&&J.uniform1fv(q(e),j,n>>2,t);else{if(288>=t)for(var r=Sn[t-1],i=0;i<t;++i)r[i]=j[n+4*i>>2];else r=j.subarray(n>>2,n+4*t>>2);J.uniform1fv(q(e),r)}},od:function(e,t){J.uniform1i(q(e),t)},pd:function(e,t,n){if(2<=K.version)t&&J.uniform1iv(q(e),k,n>>2,t);else{if(288>=t)for(var r=Cn[t-1],i=0;i<t;++i)r[i]=k[n+4*i>>2];else r=k.subarray(n>>2,n+4*t>>2);J.uniform1iv(q(e),r)}},qd:function(e,t,n){J.uniform2f(q(e),t,n)},rd:function(e,t,n){if(2<=K.version)t&&J.uniform2fv(q(e),j,n>>2,2*t);else{if(144>=t)for(var r=Sn[2*t-1],i=0;i<2*t;i+=2)r[i]=j[n+4*i>>2],r[i+1]=j[n+(4*i+4)>>2];else r=j.subarray(n>>2,n+8*t>>2);J.uniform2fv(q(e),r)}},nd:function(e,t,n){J.uniform2i(q(e),t,n)},md:function(e,t,n){if(2<=K.version)t&&J.uniform2iv(q(e),k,n>>2,2*t);else{if(144>=t)for(var r=Cn[2*t-1],i=0;i<2*t;i+=2)r[i]=k[n+4*i>>2],r[i+1]=k[n+(4*i+4)>>2];else r=k.subarray(n>>2,n+8*t>>2);J.uniform2iv(q(e),r)}},ld:function(e,t,n,r){J.uniform3f(q(e),t,n,r)},kd:function(e,t,n){if(2<=K.version)t&&J.uniform3fv(q(e),j,n>>2,3*t);else{if(96>=t)for(var r=Sn[3*t-1],i=0;i<3*t;i+=3)r[i]=j[n+4*i>>2],r[i+1]=j[n+(4*i+4)>>2],r[i+2]=j[n+(4*i+8)>>2];else r=j.subarray(n>>2,n+12*t>>2);J.uniform3fv(q(e),r)}},jd:function(e,t,n,r){J.uniform3i(q(e),t,n,r)},id:function(e,t,n){if(2<=K.version)t&&J.uniform3iv(q(e),k,n>>2,3*t);else{if(96>=t)for(var r=Cn[3*t-1],i=0;i<3*t;i+=3)r[i]=k[n+4*i>>2],r[i+1]=k[n+(4*i+4)>>2],r[i+2]=k[n+(4*i+8)>>2];else r=k.subarray(n>>2,n+12*t>>2);J.uniform3iv(q(e),r)}},hd:function(e,t,n,r,i){J.uniform4f(q(e),t,n,r,i)},gd:function(e,t,n){if(2<=K.version)t&&J.uniform4fv(q(e),j,n>>2,4*t);else{if(72>=t){var r=Sn[4*t-1],i=j;n>>=2;for(var a=0;a<4*t;a+=4){var o=n+a;r[a]=i[o],r[a+1]=i[o+1],r[a+2]=i[o+2],r[a+3]=i[o+3]}}else r=j.subarray(n>>2,n+16*t>>2);J.uniform4fv(q(e),r)}},Wc:function(e,t,n,r,i){J.uniform4i(q(e),t,n,r,i)},Xc:function(e,t,n){if(2<=K.version)t&&J.uniform4iv(q(e),k,n>>2,4*t);else{if(72>=t)for(var r=Cn[4*t-1],i=0;i<4*t;i+=4)r[i]=k[n+4*i>>2],r[i+1]=k[n+(4*i+4)>>2],r[i+2]=k[n+(4*i+8)>>2],r[i+3]=k[n+(4*i+12)>>2];else r=k.subarray(n>>2,n+16*t>>2);J.uniform4iv(q(e),r)}},Yc:function(e,t,n,r){if(2<=K.version)t&&J.uniformMatrix2fv(q(e),!!n,j,r>>2,4*t);else{if(72>=t)for(var i=Sn[4*t-1],a=0;a<4*t;a+=4)i[a]=j[r+4*a>>2],i[a+1]=j[r+(4*a+4)>>2],i[a+2]=j[r+(4*a+8)>>2],i[a+3]=j[r+(4*a+12)>>2];else i=j.subarray(r>>2,r+16*t>>2);J.uniformMatrix2fv(q(e),!!n,i)}},Zc:function(e,t,n,r){if(2<=K.version)t&&J.uniformMatrix3fv(q(e),!!n,j,r>>2,9*t);else{if(32>=t)for(var i=Sn[9*t-1],a=0;a<9*t;a+=9)i[a]=j[r+4*a>>2],i[a+1]=j[r+(4*a+4)>>2],i[a+2]=j[r+(4*a+8)>>2],i[a+3]=j[r+(4*a+12)>>2],i[a+4]=j[r+(4*a+16)>>2],i[a+5]=j[r+(4*a+20)>>2],i[a+6]=j[r+(4*a+24)>>2],i[a+7]=j[r+(4*a+28)>>2],i[a+8]=j[r+(4*a+32)>>2];else i=j.subarray(r>>2,r+36*t>>2);J.uniformMatrix3fv(q(e),!!n,i)}},_c:function(e,t,n,r){if(2<=K.version)t&&J.uniformMatrix4fv(q(e),!!n,j,r>>2,16*t);else{if(18>=t){var i=Sn[16*t-1],a=j;r>>=2;for(var o=0;o<16*t;o+=16){var s=r+o;i[o]=a[s],i[o+1]=a[s+1],i[o+2]=a[s+2],i[o+3]=a[s+3],i[o+4]=a[s+4],i[o+5]=a[s+5],i[o+6]=a[s+6],i[o+7]=a[s+7],i[o+8]=a[s+8],i[o+9]=a[s+9],i[o+10]=a[s+10],i[o+11]=a[s+11],i[o+12]=a[s+12],i[o+13]=a[s+13],i[o+14]=a[s+14],i[o+15]=a[s+15]}}else i=j.subarray(r>>2,r+64*t>>2);J.uniformMatrix4fv(q(e),!!n,i)}},$c:function(e){e=It[e],J.useProgram(e),J.bg=e},ad:function(e,t){J.vertexAttrib1f(e,t)},bd:function(e,t){J.vertexAttrib2f(e,j[t>>2],j[t+4>>2])},cd:function(e,t){J.vertexAttrib3f(e,j[t>>2],j[t+4>>2],j[t+8>>2])},dd:function(e,t){J.vertexAttrib4f(e,j[t>>2],j[t+4>>2],j[t+8>>2],j[t+12>>2])},Fc:function(e,t){J.vertexAttribDivisor(e,t)},Gc:function(e,t,n,r,i){J.vertexAttribIPointer(e,t,n,r,i)},ed:function(e,t,n,r,i,a){J.vertexAttribPointer(e,t,n,!!r,i,a)},fd:function(e,t,n,r){J.viewport(e,t,n,r)},kc:function(e,t,n,r){J.waitSync(Gt[e],t,(n>>>0)+4294967296*r)},qb:e=>{var t=E.length;if(e>>>=0,2147483648<e)return!1;for(var n=1;4>=n;n*=2){var r=t*(1+.2/n);r=Math.min(r,e+100663296);var i=Math;r=Math.max(e,r);a:{i=i.min.call(i,2147483648,r+(65536-r%65536)%65536)-x.buffer.byteLength+65535>>>16;try{x.grow(i),te();var a=1;break a}catch{}a=void 0}if(a)return!0}return!1},hb:function(){return K?K.handle:0},rb:(e,t)=>{var n=0;return Tn().forEach(function(r,i){var a=t+n;for(i=A[e+4*i>>2]=a,a=0;a<r.length;++a)w[i++>>0]=r.charCodeAt(a);w[i>>0]=0,n+=r.length+1}),0},sb:(e,t)=>{var n=Tn();A[e>>2]=n.length;var r=0;return n.forEach(function(e){r+=e.length+1}),A[t>>2]=r,0},Eb:e=>{b||(n.onExit&&n.onExit(e),C=!0),s(e,new fe(e))},M:()=>52,jb:function(){return 52},xb:()=>52,mb:function(){return 70},Q:(e,t,n,r)=>{for(var i=0,a=0;a<n;a++){var o=A[t>>2],s=A[t+4>>2];t+=8;for(var c=0;c<s;c++){var l=E[o+c],u=Dn[e];l===0||l===10?((e===1?_:v)(R(u,0)),u.length=0):u.push(l)}i+=s}return A[r>>2]=i,0},yd:tn,ib:rn,xd:an,Kb:on,L:mn,P:_n,fb:vn,Ib:Qn,j:qn,o:Xn,k:Hn,I:nr,Hb:$n,Fb:ir,W:er,V:rr,O:Kn,i:Yn,w:Gn,v:Wn,s:Jn,Gb:tr,Jb:Zn,Lb:Un,ob:(e,t,n,r)=>Mn(e,t,n,r)};(function(){function e(e){if(S=e=e.exports,x=S.zd,te(),M=S.Cd,N.unshift(S.Ad),P--,n.monitorRunDependencies&&n.monitorRunDependencies(P),P==0&&(ae!==null&&(clearInterval(ae),ae=null),oe)){var t=oe;oe=null,t()}return e}var t={a:Rn};if(P++,n.monitorRunDependencies&&n.monitorRunDependencies(P),n.instantiateWasm)try{return n.instantiateWasm(t,e)}catch(e){v(`Module.instantiateWasm callback failed with error: `+e),i(e)}return de(t,function(t){e(t.instance)}).catch(i),{}})();var zn=n._malloc=e=>(zn=n._malloc=S.Bd)(e),Bn=n._free=e=>(Bn=n._free=S.Dd)(e),Vn=e=>(Vn=S.Ed)(e);n.__embind_initialize_bindings=()=>(n.__embind_initialize_bindings=S.Fd)();var Y=(e,t)=>(Y=S.Gd)(e,t),X=()=>(X=S.Hd)(),Z=e=>(Z=S.Id)(e);n.dynCall_viji=(e,t,r,i,a)=>(n.dynCall_viji=S.Jd)(e,t,r,i,a),n.dynCall_vijiii=(e,t,r,i,a,o,s)=>(n.dynCall_vijiii=S.Kd)(e,t,r,i,a,o,s),n.dynCall_viiiiij=(e,t,r,i,a,o,s,c)=>(n.dynCall_viiiiij=S.Ld)(e,t,r,i,a,o,s,c),n.dynCall_jii=(e,t,r)=>(n.dynCall_jii=S.Md)(e,t,r),n.dynCall_vij=(e,t,r,i)=>(n.dynCall_vij=S.Nd)(e,t,r,i),n.dynCall_jiiiiii=(e,t,r,i,a,o,s)=>(n.dynCall_jiiiiii=S.Od)(e,t,r,i,a,o,s),n.dynCall_jiiiiji=(e,t,r,i,a,o,s,c)=>(n.dynCall_jiiiiji=S.Pd)(e,t,r,i,a,o,s,c),n.dynCall_ji=(e,t)=>(n.dynCall_ji=S.Qd)(e,t),n.dynCall_iijj=(e,t,r,i,a,o)=>(n.dynCall_iijj=S.Rd)(e,t,r,i,a,o),n.dynCall_iiiji=(e,t,r,i,a,o)=>(n.dynCall_iiiji=S.Sd)(e,t,r,i,a,o),n.dynCall_iiji=(e,t,r,i,a)=>(n.dynCall_iiji=S.Td)(e,t,r,i,a),n.dynCall_iijjiii=(e,t,r,i,a,o,s,c,l)=>(n.dynCall_iijjiii=S.Ud)(e,t,r,i,a,o,s,c,l),n.dynCall_iij=(e,t,r,i)=>(n.dynCall_iij=S.Vd)(e,t,r,i),n.dynCall_vijjjii=(e,t,r,i,a,o,s,c,l,u)=>(n.dynCall_vijjjii=S.Wd)(e,t,r,i,a,o,s,c,l,u),n.dynCall_jiji=(e,t,r,i,a)=>(n.dynCall_jiji=S.Xd)(e,t,r,i,a),n.dynCall_viijii=(e,t,r,i,a,o,s)=>(n.dynCall_viijii=S.Yd)(e,t,r,i,a,o,s),n.dynCall_iiiiij=(e,t,r,i,a,o,s)=>(n.dynCall_iiiiij=S.Zd)(e,t,r,i,a,o,s),n.dynCall_iiiiijj=(e,t,r,i,a,o,s,c,l)=>(n.dynCall_iiiiijj=S._d)(e,t,r,i,a,o,s,c,l),n.dynCall_iiiiiijj=(e,t,r,i,a,o,s,c,l,u)=>(n.dynCall_iiiiiijj=S.$d)(e,t,r,i,a,o,s,c,l,u);function Hn(e,t,n,r){var i=X();try{return M.get(e)(t,n,r)}catch(e){if(Z(i),e!==e+0)throw e;Y(1,0)}}function Un(e,t,n,r,i,a,o,s,c,l){var u=X();try{M.get(e)(t,n,r,i,a,o,s,c,l)}catch(e){if(Z(u),e!==e+0)throw e;Y(1,0)}}function Wn(e,t,n,r){var i=X();try{M.get(e)(t,n,r)}catch(e){if(Z(i),e!==e+0)throw e;Y(1,0)}}function Gn(e,t,n){var r=X();try{M.get(e)(t,n)}catch(e){if(Z(r),e!==e+0)throw e;Y(1,0)}}function Kn(e){var t=X();try{M.get(e)()}catch(e){if(Z(t),e!==e+0)throw e;Y(1,0)}}function qn(e,t){var n=X();try{return M.get(e)(t)}catch(e){if(Z(n),e!==e+0)throw e;Y(1,0)}}function Jn(e,t,n,r,i){var a=X();try{M.get(e)(t,n,r,i)}catch(e){if(Z(a),e!==e+0)throw e;Y(1,0)}}function Yn(e,t){var n=X();try{M.get(e)(t)}catch(e){if(Z(n),e!==e+0)throw e;Y(1,0)}}function Xn(e,t,n){var r=X();try{return M.get(e)(t,n)}catch(e){if(Z(r),e!==e+0)throw e;Y(1,0)}}function Zn(e,t,n,r,i,a,o){var s=X();try{M.get(e)(t,n,r,i,a,o)}catch(e){if(Z(s),e!==e+0)throw e;Y(1,0)}}function Qn(e){var t=X();try{return M.get(e)()}catch(e){if(Z(t),e!==e+0)throw e;Y(1,0)}}function $n(e,t,n,r,i,a){var o=X();try{return M.get(e)(t,n,r,i,a)}catch(e){if(Z(o),e!==e+0)throw e;Y(1,0)}}function er(e,t,n,r,i,a,o,s){var c=X();try{return M.get(e)(t,n,r,i,a,o,s)}catch(e){if(Z(c),e!==e+0)throw e;Y(1,0)}}function tr(e,t,n,r,i,a){var o=X();try{M.get(e)(t,n,r,i,a)}catch(e){if(Z(o),e!==e+0)throw e;Y(1,0)}}function nr(e,t,n,r,i){var a=X();try{return M.get(e)(t,n,r,i)}catch(e){if(Z(a),e!==e+0)throw e;Y(1,0)}}function rr(e,t,n,r,i,a,o,s,c,l){var u=X();try{return M.get(e)(t,n,r,i,a,o,s,c,l)}catch(e){if(Z(u),e!==e+0)throw e;Y(1,0)}}function ir(e,t,n,r,i,a,o){var s=X();try{return M.get(e)(t,n,r,i,a,o)}catch(e){if(Z(s),e!==e+0)throw e;Y(1,0)}}var ar;oe=function e(){ar||or(),ar||(oe=e)};function or(){function e(){if(!ar&&(ar=!0,n.calledRun=!0,!C)){if(pe(N),r(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),n.postRun)for(typeof n.postRun==`function`&&(n.postRun=[n.postRun]);n.postRun.length;){var e=n.postRun.shift();re.unshift(e)}pe(re)}}if(!(0<P)){if(n.preRun)for(typeof n.preRun==`function`&&(n.preRun=[n.preRun]);n.preRun.length;)ie();pe(ne),0<P||(n.setStatus?(n.setStatus(`Running...`),setTimeout(function(){setTimeout(function(){n.setStatus(``)},1),e()},1)):e())}}if(n.preInit)for(typeof n.preInit==`function`&&(n.preInit=[n.preInit]);0<n.preInit.length;)n.preInit.pop()();return or(),t.ready})})();typeof e==`object`&&typeof t==`object`?t.exports=n:typeof define==`function`&&define.amd&&define([],()=>n)}))(),1),Da=null;async function Oa(e){return Da||(Da=await(0,Ea.default)({locateFile:e?.locateFile??(e=>h?`/${e}`:e)}),Da)}var ka=5;function Aa(e){return s(e.x,e.y,e.width,e.height,e.rotation)}function ja(e,t,n){let r=n.filter(t=>!e.has(t.id));if(r.length===0)return{dx:0,dy:0,guides:[]};let i={left:t.x,right:t.x+t.width,centerX:t.x+t.width/2,top:t.y,bottom:t.y+t.height,centerY:t.y+t.height/2},a=1/0,o=1/0,s=[];for(let e of r){let t=Aa(e),n=[[i.left,t.left],[i.left,t.right],[i.right,t.left],[i.right,t.right],[i.centerX,t.centerX]];for(let[e,r]of n){let n=r-e;if(Math.abs(n)<ka&&Math.abs(n)<=Math.abs(a)){if(Math.abs(n)<Math.abs(a)){a=n,s.length=(s.filter(e=>e.axis===`y`).length,s.length);for(let e=s.length-1;e>=0;e--)s[e].axis===`x`&&s.splice(e,1)}if(Math.abs(n)===Math.abs(a)){let e=Math.min(i.top,t.top),n=Math.max(i.bottom,t.bottom);s.push({axis:`x`,position:r,from:e,to:n})}}}let r=[[i.top,t.top],[i.top,t.bottom],[i.bottom,t.top],[i.bottom,t.bottom],[i.centerY,t.centerY]];for(let[e,n]of r){let r=n-e;if(Math.abs(r)<ka&&Math.abs(r)<=Math.abs(o)){if(Math.abs(r)<Math.abs(o)){for(let e=s.length-1;e>=0;e--)s[e].axis===`y`&&s.splice(e,1);o=r}if(Math.abs(r)===Math.abs(o)){let e=Math.min(i.left,t.left),r=Math.max(i.right,t.right);s.push({axis:`y`,position:n,from:e,to:r})}}}}return{dx:Math.abs(a)<=ka?a:0,dy:Math.abs(o)<=ka?o:0,guides:s}}function Ma(e){if(e.length===0)return null;let t=1/0,n=1/0,r=-1/0,i=-1/0;for(let a of e){let e=Aa(a);t=Math.min(t,e.left),n=Math.min(n,e.top),r=Math.max(r,e.right),i=Math.max(i,e.bottom)}return{x:t,y:n,width:r-t,height:i-n}}function Na(e,t){for(let n of e)if(t>=n.start&&t<n.start+n.length)return n.style;return{}}function Pa(e,t){let n=Array.from({length:t},()=>null);for(let r of e)for(let e=r.start;e<r.start+r.length&&e<t;e++)n[e]={...n[e],...r.style};return n}function Fa(e,t,n,r,i){let a=Pa(e,i);for(let e=t;e<n&&e<i;e++)a[e]={...a[e],...r};return za(a)}function Ia(e,t,n,r,i){let a=Pa(e,i);for(let e=t;e<n&&e<i;e++)if(a[e]){let t={...a[e]};for(let e of r)delete t[e];a[e]=Object.keys(t).length>0?t:null}return za(a)}function La(e,t){if(e===t)return!0;if(!e||!t)return e===t;let n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let r of n)if(e[r]!==t[r])return!1;return!0}function Ra(e){return!e||Object.keys(e).length===0}function za(e){let t=[],n=0;for(;n<e.length;){if(Ra(e[n])){n++;continue}let r=n,i=e[n];if(!i){n++;continue}for(;n<e.length&&La(e[n],i);)n++;t.push({start:r,length:n-r,style:{...i}})}return t}function Ba(e,t,n){return e.map(e=>t<=e.start?{...e,start:e.start+n}:t>e.start&&t<e.start+e.length?{...e,length:e.length+n}:e)}function Va(e,t,n){let r=t+n,i=[];for(let a of e){let e=a.start+a.length;if(e<=t)i.push(a);else if(a.start>=r)i.push({...a,start:a.start-n});else{let n=Math.max(a.start,t),o=Math.min(e,r)-n,s=a.length-o;s>0&&i.push({...a,start:Math.min(a.start,t),length:s})}}return i}function Ha(e,t,n,r,i){let a=Ua(e,t,n,r),o=a?400:700;return{runs:a?Ia(e,t,n,[`fontWeight`],i):Fa(e,t,n,{fontWeight:700},i),newWeight:o}}function Ua(e,t,n,r){for(let i=t;i<n;i++)if((Na(e,i).fontWeight??r)<700)return!1;return!0}function Wa(e,t,n,r,i){let a=Ga(e,t,n,r);return{runs:a?Ia(e,t,n,[`italic`],i):Fa(e,t,n,{italic:!0},i),newItalic:!a}}function Ga(e,t,n,r){for(let i=t;i<n;i++)if(!(Na(e,i).italic??r))return!1;return!0}function Ka(e,t,n,r,i,a){let o=qa(e,t,n,r,i);return{runs:o?Ia(e,t,n,[`textDecoration`],a):Fa(e,t,n,{textDecoration:r},a),newDeco:o?`NONE`:r}}function qa(e,t,n,r,i){for(let a=t;a<n;a++)if((Na(e,a).textDecoration??i)!==r)return!1;return!0}function Ja(e,t,n,r,i,a){let o=ci(e,t,a),s={"canvas.fig":[o,{level:0}],"thumbnail.png":[n,{level:0}],"meta.json":new TextEncoder().encode(r)};for(let e of i)s[e.name]=[e.data,{level:0}];return Xe(s)}var Ya=Uint8Array.from(atob(`iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==`),e=>e.charCodeAt(0));function Xa(e,t){return typeof e==`object`&&`aliasId`in e?{value:{alias:{guid:xn(e.aliasId)}},dataType:`ALIAS`,resolvedDataType:{COLOR:`COLOR`,BOOLEAN:`BOOLEAN`,STRING:`STRING`}[t]??`FLOAT`}:t===`COLOR`&&typeof e==`object`&&`r`in e?{value:{colorValue:mi(e)},dataType:`COLOR`,resolvedDataType:`COLOR`}:t===`BOOLEAN`?{value:{boolValue:!!e},dataType:`BOOLEAN`,resolvedDataType:`BOOLEAN`}:t===`STRING`?{value:{textValue:typeof e==`string`?e:JSON.stringify(e)},dataType:`STRING`,resolvedDataType:`STRING`}:{value:{floatValue:Number(e)},dataType:`FLOAT`,resolvedDataType:`FLOAT`}}function Za(e){let t=[];for(let[n,r]of e.images)t.push({name:`images/${n}`,data:r});return t}var Qa=400,$a=225;async function eo(e,t,n,r){await Pt();let i=Ft(),a=Ie(It()),o={sessionID:0,localID:0},s={value:2},c=[Ei(o,e.documentColorSpace)],l=[],u=e.getPages(!0),f=new Map,p=new Map,h=await ai(e),_=null;for(let t=0;t<u.length;t++){let n=u[t],r={sessionID:0,localID:s.value++};n.internalOnly&&(_=r);let i=Di(r,o,ui(t),n.name,{backgroundOpacity:1,backgroundColor:{...g},backgroundEnabled:!0});n.internalOnly&&(i.internalOnly=!0),c.push(i);let a=e.getChildren(n.id);for(let t=0;t<a.length;t++)c.push(...Ci(a[t],r,t,s,e,l,f,h,p))}if(e.variableCollections.size>0){_||(_={sessionID:0,localID:s.value++},c.push(Di(_,o,ui(u.length),`Internal Only Canvas`,{internalOnly:!0})));let t=new Map,n=0;for(let[r,i]of e.variableCollections){let a={sessionID:0,localID:s.value++};p.set(r,a);let o={guid:a,parentIndex:{guid:_,position:ui(n++)},type:`VARIABLE_SET`,name:i.name,phase:`CREATED`,strokeAlign:`CENTER`,strokeJoin:`BEVEL`,variableSetModes:i.modes.map((e,n)=>{let r={sessionID:0,localID:s.value++};return t.set(e.modeId,r),{id:r,name:e.name,sortPosition:ui(n)}})};c.push(o);let l=0;for(let n of i.variableIds){let r=e.variables.get(n);if(!r)continue;let i={sessionID:0,localID:s.value++};p.set(n,i);let o={COLOR:`COLOR`,BOOLEAN:`BOOLEAN`,STRING:`STRING`}[r.type]??`FLOAT`,u=Object.entries(r.valuesByMode).map(([e,n])=>({modeID:t.get(e)??xn(e),variableData:Xa(n,r.type)})),d={guid:i,parentIndex:{guid:_,position:ui(l++)},type:`VARIABLE`,name:r.name,phase:`CREATED`,strokeAlign:`CENTER`,strokeJoin:`BEVEL`,variableSetID:{guid:a},variableResolvedType:o,variableDataValues:{entries:u},variableScopes:[`ALL_SCOPES`]};c.push(d)}}}let y={type:`NODE_CHANGES`,sessionID:0,ackID:0,nodeChanges:c};l.length>0&&(y.blobs=l.map(e=>({bytes:e})));let b=i.encodeMessage(y),x=r??u[0]?.id,S=(t&&n&&x?d(t,n,e,x,Qa,$a):null)??Ya,C=JSON.stringify({version:1,app:`OpenPencil`,createdAt:new Date().toISOString()}),w=Za(e),T=e.figKiwiVersion??void 0;if(m){let{invoke:e}=await v(async()=>{let{invoke:e}=await import(`./core-tWvouyvh.js`);return{invoke:e}},__vite__mapDeps([4,5]));return new Uint8Array(await e(`build_fig_file`,{schemaDeflated:Array.from(a),kiwiData:Array.from(b),thumbnailPng:Array.from(S),metaJson:C,images:w.map(e=>({name:e.name,data:Array.from(e.data)})),figKiwiVersion:T}))}return ro(a,b,S,C,w,T)}function to(){return typeof Worker<`u`&&h}function no(e,t,n,r,i){return new Promise((a,o)=>{let s=new Worker(new URL(`/open-pencil/v0.11.3/assets/export-worker-DCkSUJO4.js`,``+import.meta.url),{type:`module`});s.onmessage=e=>{a(e.data),s.terminate()},s.onerror=e=>{o(Error(e.message)),s.terminate()};let c=i.map(e=>({name:e.name,data:new Uint8Array(e.data)})),l=[e.buffer,t.buffer,n.buffer,...c.map(e=>e.data.buffer)];s.postMessage({schemaDeflated:e,kiwiData:t,thumbnailPng:n,metaJson:r,images:c},l)})}function ro(e,t,n,r,i,a){return to()?no(e,t,n,r,i):Promise.resolve(Ja(e,t,n,r,i,a))}export{Ht as $,Li as A,Gr as B,ea as C,O as Ct,qi as D,Ji as E,si as F,ar as G,bn as H,ui as I,nn as J,rn as K,li as L,ki as M,Oi as N,zi as O,ci as P,Zt as Q,oi as R,ta as S,E as St,Yi as T,rr as U,Sn as V,Dn as W,gn as X,an as Y,on as Z,va as _,ct as _t,Ba as a,Bt as at,ua as b,Le as bt,Ia as c,Gt as ct,Wa as d,Rt as dt,Vt as et,Ma as f,Kt as ft,ma as g,jt as gt,pa as h,Pt as ht,Va as i,en as it,Ii as j,Ri as k,Ha as l,Yt as lt,Oa as m,It as mt,eo as n,Lt as nt,Fa as o,K as ot,ja as p,Ft as pt,dn as q,Ja as r,tn as rt,Na as s,Ut as st,ro as t,Xt as tt,Ka as u,zt as ut,xa as v,at as vt,Qi as w,D as wt,$i as x,Ze as xt,Ta as y,et as yt,Ci as z};