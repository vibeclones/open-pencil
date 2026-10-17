const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/dist-js-CLFAxZwM.js","assets/core-CGRvy_F1.js","assets/path-CeecfZOx.js","assets/core-BL-hD0m0.js","assets/esm-D0MtVViK.js","assets/esm-D7hQTwP3.js","assets/raster-WAhAhF1p.js","assets/raster-CpwYt55D.js","assets/chunk-BEqpzyXh.js","assets/preload-helper-CmA8iqEr.js","assets/management-DhbCpmN2.js","assets/constants-DT35eAen.js","assets/opentype-mkLgorrC.js","assets/empty-node-module-DMSje37q.js","assets/pdf-DAEk6AYF.js","assets/svg-D0ZgW_A4.js","assets/color-DMn8BwPe.js","assets/dist-js-B1lx7MJv.js"])))=>i.map(i=>d[i]);
import{Ct as e,gt as t,m as n,vt as r}from"./vue.runtime.esm-bundler-CT5s_FEB.js";import{V as i,W as a,h as o}from"./dist-CBbI8guH.js";import{a as s,c,f as l,i as u,l as d,n as f,o as p,s as m}from"./opentype-mkLgorrC.js";import{A as h,B as g,E as _,F as v,G as y,H as b,I as x,K as S,L as C,N as w,P as ee,R as T,S as te,U as ne,V as re,W as ie,X as ae,Y as oe,_ as se,a as ce,c as le,f as ue,g as de,h as fe,k as pe,l as me,m as he,o as ge,p as _e,q as ve,s as ye,t as be,v as xe,x as Se,z as Ce}from"./raster-CpwYt55D.js";import{A as we,E as Te,Q as Ee,U as De,W as Oe,X as ke,Z as Ae,j as je,m as Me,p as Ne,w as Pe}from"./constants-DT35eAen.js";import{t as E}from"./preload-helper-CmA8iqEr.js";import{a as D,i as Fe}from"./ui-RxcxtEp0.js";import{i as Ie,n as Le,r as Re,t as ze}from"./browser-IYnNAOl4.js";import{_ as Be,a as Ve,b as He,c as Ue,d as We,f as Ge,g as Ke,h as O,m as qe,p as Je,s as Ye,u as Xe,v as k,y as Ze}from"./management-DhbCpmN2.js";import{r as Qe}from"./esm-D7hQTwP3.js";import{c as $e,o as et,r as tt}from"./color-DMn8BwPe.js";import{r as nt,t as rt}from"./random-D0KWcRr_.js";import{a as it,n as A,t as j}from"./layout-D7QAn5s1.js";import{t as at}from"./parse-path-40v6NfaF.js";import{t as ot}from"./svg-D0ZgW_A4.js";var st=class{ck;renderer=null;_state=null;caretVisible=!0;constructor(e){this.ck=e}prepareMove(e){let t=this._state;return t?(e&&t.selectionAnchor===null&&(t.selectionAnchor=t.cursor),e||(t.selectionAnchor=null),t):null}replaceRange(e,t,n){let r=this._state;return r?(r.text=r.text.slice(0,e)+n+r.text.slice(t),r.cursor=e+n.length,r.selectionAnchor=null,r):null}currentLineMetrics(){let e=this._state;if(!e?.paragraph)return null;let t=e.paragraph.getLineNumberAt(e.cursor);return t<0?null:e.paragraph.getLineMetricsAt(t)}collapseSelectionTo(e){let t=this._state;if(!t||!this.hasSelection())return!1;let n=this.getSelectionRange();return n&&(t.cursor=n[e]),t.selectionAnchor=null,!0}get state(){return this._state}get isActive(){return this._state!==null}get nodeId(){return this._state?.nodeId??null}setRenderer(e){this.renderer=e}start(e){this._state={nodeId:e.id,text:e.text,cursor:e.text.length,selectionAnchor:null,paragraph:null,textDirection:l(e)},this.rebuildParagraph(e)}stop(){if(!this._state)return null;let e={nodeId:this._state.nodeId,text:this._state.text};return this._state.paragraph?.delete(),this._state=null,e}rebuildParagraph(e){let t=this._state;!t||!this.renderer||(t.paragraph?.delete(),t.textDirection=l(e),t.paragraph=this.renderer.buildParagraph(e))}hasSelection(){let e=this._state;return e!==null&&e.selectionAnchor!==null&&e.selectionAnchor!==e.cursor}getSelectionRange(){let e=this._state;return!e||e.selectionAnchor===null||e.selectionAnchor===e.cursor?null:[Math.min(e.cursor,e.selectionAnchor),Math.max(e.cursor,e.selectionAnchor)]}getSelectedText(){let e=this.getSelectionRange();return!e||!this._state?``:this._state.text.slice(e[0],e[1])}selectAll(){let e=this._state;e&&(e.selectionAnchor=0,e.cursor=e.text.length)}selectWord(e){let t=this._state;if(!t)return;let n=t.text,r=e,i=e;for(;r>0&&!ct(n[r-1]);)r--;for(;i<n.length&&!ct(n[i]);)i++;t.selectionAnchor=r,t.cursor=i}setCursorAt(e,t,n=!1){let r=this._state;if(!r?.paragraph)return;let i=r.paragraph.getGlyphPositionAtCoordinate(e,t).pos;n?r.selectionAnchor===null&&(r.selectionAnchor=r.cursor):r.selectionAnchor=null,r.cursor=i}selectLine(e){let t=this._state;if(!t?.paragraph)return;let n=t.paragraph.getLineNumberAt(e);if(n<0)return;let r=t.paragraph.getLineMetricsAt(n);r&&(t.selectionAnchor=r.startIndex,t.cursor=r.endExcludingWhitespaces)}selectWordAt(e,t){let n=this._state;if(!n?.paragraph)return;let r=n.paragraph.getGlyphPositionAtCoordinate(e,t).pos;this.selectWord(r)}selectLineAt(e,t){let n=this._state;if(!n?.paragraph)return;let r=n.paragraph.getGlyphPositionAtCoordinate(e,t).pos;this.selectLine(r)}insert(e,t){let n=this._state;if(!n)return;let r=this.getSelectionRange()??[n.cursor,n.cursor];this.replaceRange(r[0],r[1],e),this.rebuildParagraph(t)}backspace(e){let t=this._state;if(!t)return;let n=this.getSelectionRange()??(t.cursor>0?[t.cursor-1,t.cursor]:null);n&&this.replaceRange(n[0],n[1],``),this.rebuildParagraph(e)}delete(e){let t=this._state;if(!t)return;let n=this.getSelectionRange()??(t.cursor<t.text.length?[t.cursor,t.cursor+1]:null);n&&this.replaceRange(n[0],n[1],``),this.rebuildParagraph(e)}moveHorizontal(e,t){let n=this._state;if(!n||!e&&this.collapseSelectionTo(t===`left`?0:1))return;this.prepareMove(e);let r=t===`left`==(n.textDirection===`RTL`)?1:-1,i=n.cursor+r;i>=0&&i<=n.text.length&&(n.cursor=i)}moveLeft(e=!1){this.moveHorizontal(e,`left`)}moveRight(e=!1){this.moveHorizontal(e,`right`)}moveVertical(e,t){let n=this._state;if(!n?.paragraph)return;this.prepareMove(e);let r=this.getCaretRect();if(!r)return;let i=n.paragraph.getLineMetrics()[0]?.height??14,a=t===`up`?r.y0-i/2:r.y1+i/2;n.cursor=n.paragraph.getGlyphPositionAtCoordinate(r.x,a).pos}moveUp(e=!1){this.moveVertical(e,`up`)}moveDown(e=!1){this.moveVertical(e,`down`)}moveToLineEdge(e,t){let n=this._state;if(!n?.paragraph)return;this.prepareMove(e);let r=this.currentLineMetrics();if(!r)return;let i=n.textDirection===`RTL`&&t===`start`,a=n.textDirection!==`RTL`&&t===`end`;n.cursor=i||a?r.endExcludingWhitespaces:r.startIndex}moveToLineStart(e=!1){this.moveToLineEdge(e,`start`)}moveToLineEnd(e=!1){this.moveToLineEdge(e,`end`)}moveWord(e,t){let n=this.prepareMove(e);if(!n)return;let r=t===`left`,i=this.skipWordBoundaryRun(n.text,n.cursor,r);i=this.skipWordInteriorRun(n.text,i,r),n.cursor=i}skipWordBoundaryRun(e,t,n){return this.advanceWhile(e,t,n,e=>n===e)}skipWordInteriorRun(e,t,n){return this.advanceWhile(e,t,n,e=>n!==e)}advanceWhile(e,t,n,r){let i=t,a=n?-1:1;for(;(n?i>0:i<e.length)&&r(ct(n?e[i-1]:e[i]));)i+=a;return i}moveWordLeft(e=!1){this.moveWord(e,`left`)}moveWordRight(e=!1){this.moveWord(e,`right`)}getCaretRect(){let e=this._state;if(!e?.paragraph)return null;let t=e.text,n=e.cursor;if(t.length===0){let t=e.paragraph.getLineMetrics();if(t.length===0)return null;let n=t[0];return{x:n.left,y0:0,y1:n.height}}let r,i,a=!1;n===0?(r=0,i=1,a=e.textDirection===`RTL`):n>=t.length?(r=t.length-1,i=t.length,a=e.textDirection!==`RTL`):(r=n,i=n+1);let o=e.paragraph.getRectsForRange(r,i,this.ck.RectHeightStyle.Max,this.ck.RectWidthStyle.Tight);if(o.length===0)return null;let[s,c,l,u]=o[0].rect;return{x:a?l:s,y0:c,y1:u}}getSelectionRects(){let e=this._state;if(!e?.paragraph)return[];let t=this.getSelectionRange();return t?e.paragraph.getRectsForRange(t[0],t[1],this.ck.RectHeightStyle.Max,this.ck.RectWidthStyle.Tight).map(e=>{let[t,n,r,i]=e.rect;return{x:t,y:n,width:r-t,height:i-n}}):[]}};function ct(e){return/\s|[.,;:!?()[\]{}"'`<>/\\|@#$%^&*~+=\-_]/.test(e)}function lt(e,t){let n={};for(let r=0;r<t.length;r++){let i=t[r];Object.hasOwn(e,i)&&(n[i]=e[i])}return n}var ut=`cache/v1`,dt=`open-pencil:cache:v1:`,ft=new TextEncoder,pt=new TextDecoder;function mt(){return je||`window`in globalThis&&`__TAURI_INTERNALS__`in window}function ht(){return`window`in globalThis&&!!window.localStorage}function gt(e){return`${ut}/${e.split(`/`).map(encodeURIComponent).join(`/`)}`}function _t(e){return`${dt}${e}`}async function vt(e){if(mt())try{let{BaseDirectory:t,readFile:n}=await E(async()=>{let{BaseDirectory:e,readFile:t}=await import(`./dist-js-CLFAxZwM.js`);return{BaseDirectory:e,readFile:t}},__vite__mapDeps([0,1,2]));return pt.decode(await n(gt(e),{baseDir:t.AppLocalData}))}catch{return null}return ht()?window.localStorage.getItem(_t(e)):null}async function yt(e,t){if(mt()){let{BaseDirectory:n,mkdir:r,writeFile:i}=await E(async()=>{let{BaseDirectory:e,mkdir:t,writeFile:n}=await import(`./dist-js-CLFAxZwM.js`);return{BaseDirectory:e,mkdir:t,writeFile:n}},__vite__mapDeps([0,1,2]));await r(ut,{baseDir:n.AppLocalData,recursive:!0}),await i(gt(e),ft.encode(t),{baseDir:n.AppLocalData});return}ht()&&window.localStorage.setItem(_t(e),t)}async function bt(e){if(!mt())return null;try{let{BaseDirectory:t,readFile:n}=await E(async()=>{let{BaseDirectory:e,readFile:t}=await import(`./dist-js-CLFAxZwM.js`);return{BaseDirectory:e,readFile:t}},__vite__mapDeps([0,1,2])),r=await n(gt(e),{baseDir:t.AppLocalData});return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}catch{return null}}async function xt(e,t){if(!mt())return;let{BaseDirectory:n,mkdir:r,writeFile:i}=await E(async()=>{let{BaseDirectory:e,mkdir:t,writeFile:n}=await import(`./dist-js-CLFAxZwM.js`);return{BaseDirectory:e,mkdir:t,writeFile:n}},__vite__mapDeps([0,1,2]));await r(ut,{baseDir:n.AppLocalData,recursive:!0}),await i(gt(e),new Uint8Array(t),{baseDir:n.AppLocalData})}async function St(e){if(mt()){try{let{BaseDirectory:t,remove:n}=await E(async()=>{let{BaseDirectory:e,remove:t}=await import(`./dist-js-CLFAxZwM.js`);return{BaseDirectory:e,remove:t}},__vite__mapDeps([0,1,2]));await n(gt(e),{baseDir:t.AppLocalData,recursive:!0})}catch(t){console.warn(`Cache prefix delete skipped for "${e}":`,t)}return}if(ht())for(let t=window.localStorage.length-1;t>=0;t--){let n=window.localStorage.key(t);n?.startsWith(_t(e))&&window.localStorage.removeItem(n)}}async function Ct(e,t){let n=await vt(e);if(!n)return null;try{let e=JSON.parse(n);return typeof e.updatedAt!=`number`||!(`value`in e)||t!==void 0&&Date.now()-e.updatedAt>t?null:e.value}catch{return null}}async function wt(e,t){await yt(e,JSON.stringify({updatedAt:Date.now(),value:t}))}var Tt=`font-cache/v1`,Et=`${Tt}/manifest`,Dt=`${Tt}/files`,Ot={version:1,entries:{}},kt=new TextEncoder;async function At(e,t){return jt(`${e}\0${t}`)}async function jt(e){return Nt(await crypto.subtle.digest(`SHA-256`,kt.encode(e)))}async function Mt(e){return Nt(await crypto.subtle.digest(`SHA-256`,e))}function Nt(e){return[...new Uint8Array(e)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}async function Pt(){let e=await Ct(Et);return e?.version!==1||!e.entries?Ot:{version:1,entries:e.entries}}async function Ft(e){await wt(Et,e)}async function It(){let e=await Pt(),t=Object.values(e.entries).filter(e=>!!e);return{count:t.length,byteLength:t.reduce((e,t)=>e+t.byteLength,0),updatedAt:t.length>0?Math.max(...t.map(e=>e.updatedAt)):null}}async function Lt(){await St(Tt)}function Rt(){return{async read(e,t){let n=(await Pt()).entries[await At(e,t)];if(!n)return null;let r=await bt(`${Dt}/${n.file}`);return!r||r.byteLength!==n.byteLength||await Mt(r)!==n.sha256?null:r},async write(e,t,n){let r=await At(e,t),i=await Mt(n),a=`${r}.ttf`;await xt(`${Dt}/${a}`,n);let o=await Pt();o.entries[r]={family:e,style:t,file:a,byteLength:n.byteLength,sha256:i,updatedAt:Date.now()},await Ft(o)}}}typeof navigator<`u`&&s.setFallbackUserAgent(navigator.userAgent);var zt=o(`op-google-fonts-enabled`,!0),Bt=!1;function Vt(){Bt||!D()||(Bt=!0,s.setDownloadedFontCache(Rt()))}Vt();var Ht=null,Ut=null;async function Wt(){return Ht||(Ut||=E(async()=>{let{invoke:e}=await import(`./core-BL-hD0m0.js`);return{invoke:e}},__vite__mapDeps([3,1])).then(({invoke:e})=>e(`list_system_fonts`)).then(e=>(Ht=e,e)).catch(()=>[]),Ut)}function Gt(){if(Vt(),D()){Wt().then(Zt);return}zt.value&&s.preloadGoogleFamilies()}function Kt(){return D()?`granted`:s.localAccessState()}async function qt(){return D()||await s.requestLocalFontAccess(),Qt()}async function Jt(){return Vt(),D()?It():{count:0,byteLength:0,updatedAt:null}}async function Yt(){Vt(),D()&&await Lt()}async function Xt(){return s.ensureFallbackPack()}function Zt(e){if(!(typeof document>`u`))for(let{family:t}of e){let e=new FontFace(t,`local("${t}")`);document.fonts.add(e)}}async function Qt(){if(Vt(),D())return(await Wt()).map(e=>({family:e.family,source:`local`}));let e=await s.listFamilyOptions();return zt.value?e:e.filter(e=>e.source!==`google`)}async function $t(){return Vt(),D()?Wt():[]}async function en(e,t){let n=s.collectFontKeys(e,t).filter(([e,t])=>!s.isStyleLoaded(e,t));if(n.length===0)return!1;let r=(await Promise.all(n.map(([e,t])=>nn(e,t)))).some(e=>e!==null);return r&&tn(e),r}function tn(e){for(let[,t]of e.nodes)t.type===`TEXT`&&(t.textPicture=null)}async function nn(e,t=`Regular`){if(Vt(),D()){let n=await s.loadCachedFont(e,t);if(n)return n;try{let{invoke:n}=await E(async()=>{let{invoke:e}=await import(`./core-BL-hD0m0.js`);return{invoke:e}},__vite__mapDeps([3,1])),r=await n(`load_system_font`,{family:e,style:t}),i=new Uint8Array(r).buffer;s.markLoaded(e,t,i);let a=m(t),o=t.toLowerCase().includes(`italic`)?`italic`:`normal`,c=new FontFace(e,i,{weight:String(a),style:o});return await c.load(),document.fonts.add(c),i}catch{return s.loadFont(e,t)}}return s.loadFont(e,t)}var rn=new Int32Array(1),an=new Float32Array(rn.buffer),on=new TextDecoder,sn=class{_data;_index;length;constructor(e){if(e&&!(e instanceof Uint8Array))throw Error(`Must initialize a ByteBuffer with a Uint8Array`);this._data=e||new Uint8Array(256),this._index=0,this.length=e?e.length:0}toUint8Array(){return this._data.subarray(0,this.length)}readByte(){return this._data[this._index++]}readByteArray(){let e=this.readVarUint(),t=this._index;return this._index=t+e,this._data.slice(t,t+e)}readVarFloat(){let e=this._index,t=this._data,n=t[e];if(n===0)return this._index=e+1,0;let r=n|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24;return this._index=e+4,r=r<<23|r>>>9,rn[0]=r,an[0]}readVarUint(){let e=this._data,t=this._index,n=e[t++],r=n&127;return n<128||(n=e[t++],r|=(n&127)<<7,n<128)||(n=e[t++],r|=(n&127)<<14,n<128)||(n=e[t++],r|=(n&127)<<21,n<128)?(this._index=t,r):(n=e[t++],r|=(n&127)<<28,this._index=t,r>>>0)}readVarInt(){let e=this.readVarUint()|0;return e&1?~(e>>>1):e>>>1}readVarUint64(){let e=BigInt(0),t=BigInt(0),n=BigInt(7),r;for(;(r=this.readByte())&128&&t<56;)e|=BigInt(r&127)<<t,t+=n;return e|=BigInt(r)<<t,e}readVarInt64(){let e=this.readVarUint64(),t=BigInt(1),n=e&t;return e>>=t,n?~e:e}readString(){let e=this._data,t=this._index,n=t;for(;e[n]!==0;)n++;return this._index=n+1,on.decode(e.subarray(t,n))}_growBy(e){if(this.length+e>this._data.length){let t=new Uint8Array(this.length+e<<1);t.set(this._data),this._data=t}this.length+=e}writeByte(e){let t=this.length;this._growBy(1),this._data[t]=e}writeByteArray(e){this.writeVarUint(e.length);let t=this.length;this._growBy(e.length),this._data.set(e,t)}writeVarFloat(e){let t=this.length;an[0]=e;let n=rn[0];if(n=n>>>23|n<<9,!(n&255)){this.writeByte(0);return}this._growBy(4);let r=this._data;r[t]=n,r[t+1]=n>>8,r[t+2]=n>>16,r[t+3]=n>>24}writeVarUint(e){if(e<0||e>4294967295)throw Error(`Outside uint range: `+e);do{let t=e&127;e>>>=7,this.writeByte(e?t|128:t)}while(e)}writeVarInt(e){if(e<-2147483648||e>2147483647)throw Error(`Outside int range: `+e);this.writeVarUint((e<<1^e>>31)>>>0)}writeVarUint64(e){if(typeof e==`string`)e=BigInt(e);else if(typeof e!=`bigint`)throw Error(`Expected bigint but got ${typeof e}: ${String(e)}`);if(e<0||e>BigInt(`0xFFFFFFFFFFFFFFFF`))throw Error(`Outside uint64 range: `+e);let t=BigInt(127),n=BigInt(7);for(let r=0;e>t&&r<8;r++)this.writeByte(Number(e&t)|128),e>>=n;this.writeByte(Number(e))}writeVarInt64(e){if(typeof e==`string`)e=BigInt(e);else if(typeof e!=`bigint`)throw Error(`Expected bigint but got ${typeof e}: ${String(e)}`);if(e<-BigInt(`0x8000000000000000`)||e>BigInt(`0x7FFFFFFFFFFFFFFF`))throw Error(`Outside int64 range: `+e);let t=BigInt(1);this.writeVarUint64(e<0?~(e<<t):e<<t)}writeString(e){let t;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(n+1===e.length||r<55296||r>=56320)t=r;else{let i=e.charCodeAt(++n);t=(r<<10)+i+-56613888}if(t===0)throw Error(`Cannot encode a string containing the null character`);t<128?this.writeByte(t):(t<2048?this.writeByte(t>>6&31|192):(t<65536?this.writeByte(t>>12&15|224):(this.writeByte(t>>18&7|240),this.writeByte(t>>12&63|128)),this.writeByte(t>>6&63|128)),this.writeByte(t&63|128))}this.writeByte(0)}};function M(e){return JSON.stringify(e)}function N(e,t,n){var r=Error(e);throw r.line=t,r.column=n,r}function cn(e,t){let n=[],r=`  `;n.push(`function (bb) {`),n.push(`  var result = {};`),n.push(`  if (!(bb instanceof this.ByteBuffer)) {`),n.push(`    bb = new this.ByteBuffer(bb);`),n.push(`  }`),n.push(``),e.kind===`MESSAGE`&&(n.push(`  while (true) {`),n.push(`    switch (bb.readVarUint()) {`),n.push(`      case 0:`),n.push(`        return result;`),n.push(``),r=`        `);for(let i=0;i<e.fields.length;i++){let a=e.fields[i],o;switch(a.type){case`bool`:o=`!!bb.readByte()`;break;case`byte`:o=`bb.readByte()`;break;case`int`:o=`bb.readVarInt()`;break;case`uint`:o=`bb.readVarUint()`;break;case`float`:o=`bb.readVarFloat()`;break;case`string`:o=`bb.readString()`;break;case`int64`:o=`bb.readVarInt64()`;break;case`uint64`:o=`bb.readVarUint64()`;break;default:{let e=t[a.type];e?o=e.kind===`ENUM`?`this[`+M(e.name)+`][bb.readVarUint()]`:`this[`+M(`decode`+e.name)+`](bb)`:N(`Invalid type `+M(a.type)+` for field `+M(a.name),a.line,a.column)}}e.kind===`MESSAGE`&&n.push(`      case `+a.value+`:`),a.isArray?a.isDeprecated?a.type===`byte`?n.push(r+`bb.readByteArray();`):(n.push(r+`var length = bb.readVarUint();`),n.push(r+`while (length-- > 0) `+o+`;`)):a.type===`byte`?n.push(r+`result[`+M(a.name)+`] = bb.readByteArray();`):(n.push(r+`var length = bb.readVarUint();`),n.push(r+`var values = result[`+M(a.name)+`] = Array(length);`),n.push(r+`for (var i = 0; i < length; i++) values[i] = `+o+`;`)):a.isDeprecated?n.push(r+o+`;`):n.push(r+`result[`+M(a.name)+`] = `+o+`;`),e.kind===`MESSAGE`&&(n.push(`        break;`),n.push(``))}return e.kind===`MESSAGE`?(n.push(`      default:`),n.push(`        throw new Error("Attempted to parse invalid message");`),n.push(`    }`),n.push(`  }`)):n.push(`  return result;`),n.push(`}`),n.join(`
`)}function ln(e,t){let n=[];n.push(`function (message, bb) {`),n.push(`  var isTopLevel = !bb;`),n.push(`  if (isTopLevel) bb = new this.ByteBuffer();`);for(let r=0;r<e.fields.length;r++){let i=e.fields[r],a;if(!i.isDeprecated){switch(i.type){case`bool`:a=`bb.writeByte(value);`;break;case`byte`:a=`bb.writeByte(value);`;break;case`int`:a=`bb.writeVarInt(value);`;break;case`uint`:a=`bb.writeVarUint(value);`;break;case`float`:a=`bb.writeVarFloat(value);`;break;case`string`:a=`bb.writeString(value);`;break;case`int64`:a=`bb.writeVarInt64(value);`;break;case`uint64`:a=`bb.writeVarUint64(value);`;break;default:{let e=t[i.type];if(e)a=e.kind===`ENUM`?`var encoded = this[`+M(e.name)+`][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + `+M(` for enum `+M(e.name))+`); bb.writeVarUint(encoded);`:`this[`+M(`encode`+e.name)+`](value, bb);`;else throw Error(`Invalid type `+M(i.type)+` for field `+M(i.name))}}n.push(``),n.push(`  var value = message[`+M(i.name)+`];`),n.push(`  if (value != null) {`),e.kind===`MESSAGE`&&n.push(`    bb.writeVarUint(`+i.value+`);`),i.isArray?i.type===`byte`?n.push(`    bb.writeByteArray(value);`):(n.push(`    var values = value, n = values.length;`),n.push(`    bb.writeVarUint(n);`),n.push(`    for (var i = 0; i < n; i++) {`),n.push(`      value = values[i];`),n.push(`      `+a),n.push(`    }`)):n.push(`    `+a),e.kind===`STRUCT`&&(n.push(`  } else {`),n.push(`    throw new Error(`+M(`Missing required field `+M(i.name))+`);`)),n.push(`  }`)}}return e.kind===`MESSAGE`&&n.push(`  bb.writeVarUint(0);`),n.push(``),n.push(`  if (isTopLevel) return bb.toUint8Array();`),n.push(`}`),n.join(`
`)}function un(e){let t={},n=e.package,r=[];n===null?(r.push(`var exports = exports || {};`),n=`exports`):r.push(`var `+n+` = exports || `+n+` || {}, exports;`),r.push(n+`.ByteBuffer = `+n+`.ByteBuffer || require("kiwi-schema").ByteBuffer;`);for(let n=0;n<e.definitions.length;n++){let r=e.definitions[n];t[r.name]=r}for(let i=0;i<e.definitions.length;i++){let a=e.definitions[i];switch(a.kind){case`ENUM`:{let e={};for(let t=0;t<a.fields.length;t++){let n=a.fields[t];e[n.name]=n.value,e[n.value]=n.name}r.push(n+`[`+M(a.name)+`] = `+JSON.stringify(e,null,2)+`;`);break}case`STRUCT`:case`MESSAGE`:r.push(``),r.push(n+`[`+M(`decode`+a.name)+`] = `+cn(a,t)+`;`),r.push(``),r.push(n+`[`+M(`encode`+a.name)+`] = `+ln(a,t)+`;`);break;default:N(`Invalid definition kind `+M(a.kind),a.line,a.column);break}}return r.push(``),r.join(`
`)}function dn(e){let t={ByteBuffer:sn};return Function(`exports`,un(e))(t),t}var fn=[`bool`,`byte`,`int`,`uint`,`float`,`string`,`int64`,`uint64`],pn=[`ENUM`,`STRUCT`,`MESSAGE`];function mn(e){let t=e instanceof sn?e:new sn(e),n=t.readVarUint(),r=[];for(let e=0;e<n;e++){let e=t.readString(),n=t.readByte(),i=t.readVarUint(),a=[];for(let e=0;e<i;e++){let e=t.readString(),r=t.readVarInt(),i=!!(t.readByte()&1),o=t.readVarUint();a.push({name:e,line:0,column:0,type:pn[n]===`ENUM`?null:r,isArray:i,isDeprecated:!1,value:o})}r.push({name:e,line:0,column:0,kind:pn[n],fields:a})}for(let e=0;e<n;e++){let t=r[e].fields;for(let e=0;e<t.length;e++){let n=t[e],i=n.type;if(i!==null&&i<0){if(~i>=fn.length)throw Error(`Invalid type `+i);n.type=fn[~i]}else{if(i!==null&&i>=r.length)throw Error(`Invalid type `+i);n.type=i===null?null:r[i].name}}}return{package:null,definitions:r}}function hn(e){let t=new sn,n=e.definitions,r={};t.writeVarUint(n.length);for(let e=0;e<n.length;e++)r[n[e].name]=e;for(let e=0;e<n.length;e++){let i=n[e];t.writeString(i.name),t.writeByte(pn.indexOf(i.kind)),t.writeVarUint(i.fields.length);for(let e=0;e<i.fields.length;e++){let n=i.fields[e],a=fn.indexOf(n.type);t.writeString(n.name),t.writeVarInt(a===-1?r[n.type]:~a),t.writeByte(n.isArray?1:0),t.writeVarUint(n.value)}}return t.toUint8Array()}var gn=[`bool`,`byte`,`float`,`int`,`int64`,`string`,`uint`,`uint64`],_n=[`ByteBuffer`,`package`],vn=/((?:-|\b)\d+\b|[=;{}]|\[\]|\[deprecated\]|\b[A-Za-z_][A-Za-z0-9_]*\b|\/\/.*|\s+)/g,yn=/^[A-Za-z_][A-Za-z0-9_]*$/,bn=/^\/\/.*|\s+$/,xn=/^=$/,Sn=/^$/,Cn=/^;$/,wn=/^-?\d+$/,Tn=/^\{$/,En=/^\}$/,Dn=/^\[\]$/,On=/^enum$/,kn=/^struct$/,An=/^message$/,jn=/^package$/,Mn=/^\[deprecated\]$/;function Nn(e){let t=e.split(vn),n=[],r=0,i=0;for(let e=0;e<t.length;e++){let a=t[e];e&1?bn.test(a)||n.push({text:a,line:i+1,column:r+1}):a!==``&&N(`Syntax error `+M(a),i+1,r+1);let o=a.split(`
`);o.length>1&&(r=0),i+=o.length-1,r+=o[o.length-1].length}return n.push({text:``,line:i,column:r}),n}function Pn(e){function t(){return e[s]}function n(e){return e.test(t().text)?(s++,!0):!1}function r(e,r){if(!n(e)){let e=t();N(`Expected `+r+` but found `+M(e.text),e.line,e.column)}}function i(){let e=t();N(`Unexpected token `+M(e.text),e.line,e.column)}let a=[],o=null,s=0;for(n(jn)&&(o=t().text,r(yn,`identifier`),r(Cn,`";"`));s<e.length&&!n(Sn);){let e=[],o;n(On)?o=`ENUM`:n(kn)?o=`STRUCT`:n(An)?o=`MESSAGE`:i();let s=t();for(r(yn,`identifier`),r(Tn,`"{"`);!n(En);){let i=null,a=!1,s=!1;o!==`ENUM`&&(i=t().text,r(yn,`identifier`),a=n(Dn));let c=t();r(yn,`identifier`);let l=null;o!==`STRUCT`&&(r(xn,`"="`),l=t(),r(wn,`integer`),(l.text|0)+``!==l.text&&N(`Invalid integer `+M(l.text),l.line,l.column));let u=t();n(Mn)&&(o!==`MESSAGE`&&N(`Cannot deprecate this field`,u.line,u.column),s=!0),r(Cn,`";"`),e.push({name:c.text,line:c.line,column:c.column,type:i,isArray:a,isDeprecated:s,value:l===null?e.length+1:l.text|0})}a.push({name:s.text,line:s.line,column:s.column,kind:o,fields:e})}return{package:o,definitions:a}}function Fn(e){let t=gn.slice(),n={};for(let r=0;r<e.definitions.length;r++){let i=e.definitions[r];t.includes(i.name)&&N(`The type `+M(i.name)+` is defined twice`,i.line,i.column),_n.includes(i.name)&&N(`The type name `+M(i.name)+` is reserved`,i.line,i.column),t.push(i.name),n[i.name]=i}for(let n=0;n<e.definitions.length;n++){let r=e.definitions[n],i=r.fields;if(r.kind===`ENUM`||i.length===0)continue;for(let e=0;e<i.length;e++){let n=i[e];t.includes(n.type)||N(`The type `+M(n.type)+` is not defined for field `+M(n.name),n.line,n.column)}let a=[];for(let e=0;e<i.length;e++){let t=i[e];a.includes(t.value)&&N(`The id for field `+M(t.name)+` is used twice`,t.line,t.column),t.value<=0&&N(`The id for field `+M(t.name)+` must be positive`,t.line,t.column),a.push(t.value)}}let r={},i=e=>{let t=n[e];if(t&&t.kind===`STRUCT`&&(r[e]===1&&N(`Recursive nesting of `+M(e)+` is not allowed`,t.line,t.column),r[e]!==2&&t)){r[e]=1;let n=t.fields;for(let e=0;e<n.length;e++){let t=n[e];t.isArray||i(t.type)}r[e]=2}return!0};for(let t=0;t<e.definitions.length;t++)i(e.definitions[t].name)}function In(e){let t=Pn(Nn(e));return Fn(t),t}function Ln(e){for(let t of e.definitions)Rn(t),t.kind===`ENUM`&&zn(t)}function Rn(e){let t=new Set;for(let n of e.fields)t.has(n.name)&&N(`The field ${M(n.name)} is defined twice in ${M(e.name)}`,n.line,n.column),t.add(n.name)}function zn(e){let t=new Set;for(let n of e.fields)t.has(n.value)&&N(`The enum value ${n.value} is used twice in ${M(e.name)}`,n.line,n.column),t.add(n.value)}new Uint8Array([40,181,47,253]);function Bn(e){return e.length>=4&&e[0]===40&&e[1]===181&&e[2]===47&&e[3]===253}var Vn=In(`enum MessageType {
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
  JOIN_START_JOURNALED = 15;
  STREAM_START = 16;
  STREAM_END = 17;
  INTERACTIVE_SLIDE_CHANGE = 18;
  RECONNECT_SCENE_GRAPH_QUERY = 19;
  RECONNECT_SCENE_GRAPH_REPLY = 20;
  JOIN_END_INCREMENTAL_RECONNECT = 21;
  NODE_STATUS_CHANGE = 22;
  CLIENT_RENDERED = 23;
  BUZZ_APPROVAL_CHANGE = 24;
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
  TABLE = 29;
  TABLE_CELL = 30;
  VARIABLE_SET = 31;
  SLIDE = 32;
  ASSISTED_LAYOUT = 33;
  INTERACTIVE_SLIDE_ELEMENT = 34;
  VARIABLE_OVERRIDE = 35;
  MODULE = 36;
  SLIDE_GRID = 37;
  SLIDE_ROW = 38;
  RESPONSIVE_SET = 39;
  CODE_COMPONENT = 40;
  TEXT_PATH = 41;
  CODE_INSTANCE = 42;
  CODE_LIBRARY = 43;
  CODE_FILE = 44;
  CODE_LAYER = 45;
  BRUSH = 46;
  MANAGED_STRING = 47;
  TRANSFORM = 48;
  CMS_RICH_TEXT = 49;
  REPEATER = 50;
  JSX = 51;
  EMBEDDED_PROTOTYPE = 52;
  REACT_FIBER = 53;
  RESPONSIVE_NODE_SET = 54;
  WEBPAGE = 55;
  KEYFRAME = 56;
  KEYFRAME_TRACK = 57;
  ANIMATION_PRESET_INSTANCE = 58;
  CODE_EMBED = 59;
  BINARY_FILE = 60;
  SPEC_BLOCK = 61;
  TOOL_INSTANCE = 62;
  CUSTOM_EFFECT_INSTANCE = 63;
  NATIVE_CODE_LAYER_INSTANCE = 64;
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
  TRAPEZOID = 12;
  PREDEFINED_PROCESS = 13;
  SHIELD = 14;
  DOCUMENT_SINGLE = 15;
  DOCUMENT_MULTIPLE = 16;
  MANUAL_INPUT = 17;
  HEXAGON = 18;
  CHEVRON = 19;
  PENTAGON = 20;
  OCTAGON = 21;
  STAR = 22;
  PLUS = 23;
  ARROW_LEFT = 24;
  ARROW_RIGHT = 25;
  SUMMING_JUNCTION = 26;
  OR = 27;
  SPEECH_BUBBLE = 28;
  INTERNAL_STORAGE = 29;
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
  VIDEO = 7;
  PATTERN = 8;
  NOISE = 9;
  CUSTOM = 10;
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
  REPEAT = 4;
  SYMMETRY = 5;
  GRAIN = 6;
  NOISE = 7;
  GLASS = 8;
  CUSTOM = 9;
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

enum TextDecorationStyle {
  SOLID = 0;
  DOTTED = 1;
  WAVY = 2;
}

enum LeadingTrim {
  NONE = 0;
  CAP_HEIGHT = 1;
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
  OFFSET = 3;
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
  ERD_ZERO_OR_ONE = 15;
  ERD_EXACTLY_ONE = 16;
  ERD_ZERO_OR_MORE = 17;
  ERD_ONE_OR_MORE = 18;
  ERD_ONE = 19;
  ERD_MANY = 20;
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
  LASSO = 10;
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
  MP4 = 4;
  GIF = 5;
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

enum StackAlign {
  MIN = 0;
  CENTER = 1;
  MAX = 2;
  BASELINE = 3;
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
  SPACE_EVENLY = 3;
  SPACE_BETWEEN = 4;
}

enum GridChildAlign {
  AUTO = 0;
  MIN = 1;
  CENTER = 2;
  MAX = 3;
}

enum GridAutoTracks {
  NONE = 0;
  ROWS = 1;
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

enum StackCounterAlignContent {
  AUTO = 0;
  SPACE_BETWEEN = 1;
}

enum ConnectionType {
  NONE = 0;
  INTERNAL_NODE = 1;
  URL = 2;
  BACK = 3;
  CLOSE = 4;
  SET_VARIABLE = 5;
  UPDATE_MEDIA_RUNTIME = 6;
  CONDITIONAL = 7;
  SET_VARIABLE_MODE = 8;
  OBJECT_ANIMATION = 9;
  UPDATE_ANIMATION_TIMELINE_STATE = 10;
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
  ON_MEDIA_HIT = 12;
  ON_MEDIA_END = 13;
  MOUSE_ENTER = 14;
  MOUSE_LEAVE = 15;
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
  HOLD = 14;
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

message ColorStopVar {
  Color color = 1;
  VariableData colorVar = 2;
  float position = 3;
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

enum SemanticWeight {
  NORMAL = 0;
  BOLD = 1;
}

enum SemanticItalic {
  NORMAL = 0;
  ITALIC = 1;
}

enum CodeSnapshotState {
  INITIAL = 0;
  SNAPSHOTTING = 1;
  OK = 2;
  SNAPSHOT_ERROR = 3;
  LLM_IN_PROGRESS = 4;
}

enum SnapshotCaptureMode {
  FULL = 0;
  PARTIAL = 1;
}

message CodeSourceInfo {
  string originReferenceId = 1;
  GUID originNodeId = 2;
  GUID linkedSnapshotId = 3;
  SnapshotCaptureMode captureMode = 4;
  string sourceBlobRef = 5;
  string sourceElementId = 6;
}

enum CodeObjectType {
  WEB_LAYER = 0;
  WEB_INTERACTION = 1;
  NATIVE_LAYER = 2;
  ANIMATION_PRESET = 3;
  TOOL = 4;
  CUSTOM_EFFECT = 5;
  PLUGIN = 6;
  WEB_LAYER_GENERIC = 7;
  CUSTOM_FILL = 8;
}

message CustomToolArtifactRef {
  string customToolId = 1;
  string customToolVersion = 2;
  string publishedCustomToolId = 3;
  string publishedCustomToolVersionId = 4;
}

enum LockMode {
  NONE = 0;
  ALL = 1;
  BACKGROUND_ONLY = 2;
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

message PasteSource {
  string srcFile = 1;
  GUID srcNode = 2;
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
  float detail = 4;
  float exposure = 5;
  float vignette = 6;
  float temperature = 7;
  float vibrance = 8;
  float contrast = 9;
  float brightness = 10;
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
  bool imageShouldColorManage = 22;
  float rotation = 11;
  float scale = 12;
  FilterColorAdjust filterColorAdjust = 13;
  PaintFilterMessage paintFilter = 14;
  uint[] emojiCodePoints = 15;
  Video video = 18;
  uint originalImageWidth = 19;
  uint originalImageHeight = 20;
  VariableData opacityVar = 38;
  VariableData colorVar = 21;
  VariableData imageVar = 31;
  ColorStopVar[] stopsVar = 23;
  string thumbHashBase64 = 24;
  byte[] thumbHash = 25;
  GUID sourceNodeId = 26;
  float spacing = 27;
  Vector patternSpacing = 37;
  PatternTileType patternTileType = 28;
  PatternAlignment verticalAlignment = 29;
  PatternAlignment horizontalAlignment = 30;
  GUID id = 32;
  string altText = 33;
  NoiseType noiseType = 34;
  float density = 35;
  Vector noiseSize = 36;
  CodeComponentId customEffectId = 39;
  ComponentPropAssignment[] componentPropAssignments = 40;
}

enum NoiseType {
  MULTITONE = 0;
  MONOTONE = 1;
  DUOTONE = 2;
}

enum PatternTileType {
  RECTANGULAR = 0;
  HORIZONTAL_HEXAGONAL = 1;
  VERTICAL_HEXAGONAL = 2;
}

enum PatternAlignment {
  START = 0;
  CENTER = 1;
  END = 2;
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
  TextLineData[] lines = 12;
  uint layoutVersion = 8;
  FontName[] fallbackFonts = 10;
  float minContentHeight = 17;
  Vector layoutSize = 4;
  Baseline[] baselines = 5;
  Glyph[] glyphs = 6;
  Decoration[] decorations = 7;
  Blockquote[] blockquotes = 16;
  FontMetaData[] fontMetaData = 9;
  HyperlinkBox[] hyperlinkBoxes = 11;
  int truncationStartIndex = 13;
  float truncatedHeight = 14;
  float[] logicalIndexToCharacterOffsetMap = 15;
  MentionBox[] mentionBoxes = 18;
  DerivedTextLineData[] derivedLines = 19;
}

message DerivedTextData {
  Vector layoutSize = 1;
  Baseline[] baselines = 2;
  Glyph[] glyphs = 3;
  Decoration[] decorations = 4;
  Blockquote[] blockquotes = 5;
  FontMetaData[] fontMetaData = 6;
  HyperlinkBox[] hyperlinkBoxes = 7;
  int truncationStartIndex = 8;
  float truncatedHeight = 9;
  float[] logicalIndexToCharacterOffsetMap = 10;
  MentionBox[] mentionBoxes = 11;
  DerivedTextLineData[] derivedLines = 12;
}

message HyperlinkBox {
  Rect bounds = 1;
  string url = 2;
  GUID guid = 3;
  CMSItemPageTarget cmsTarget = 5;
  bool openInNewTab = 6;
  int hyperlinkID = 4;
}

message MentionBox {
  Rect bounds = 1;
  uint startIndex = 2;
  uint endIndex = 3;
  bool isValid = 4;
  uint mentionKey = 5;
}

message Baseline {
  Vector position = 1;
  float width = 2;
  float lineY = 3;
  float lineHeight = 4;
  float lineAscent = 7;
  float ignoreLeadingTrim = 8;
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
  uint[] emojiCodePoints = 7;
  EmojiImageSet emojiImageSet = 8;
  float rotation = 9;
}

message Decoration {
  Rect[] rects = 1;
  uint styleID = 2;
}

message Blockquote {
  Rect verticalBar = 1;
  Rect quoteMarkBounds = 2;
  uint styleID = 3;
}

message VectorData {
  uint vectorNetworkBlob = 1;
  Vector normalizedSize = 2;
  NodeChange[] styleOverrideTable = 3;
}

message TextPathStart {
  float tValue = 1;
  bool forward = 2;
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

message DerivedBreakpointData {
  NodeChange[] overrides = 1;
}

message NodeGenerationData {
  NodeChange[] overrides = 1;
  bool useFineGrainedSyncing = 2;
  NodeChange[] diffOnlyRemovals = 3;
}

message DerivedImmutableFrameData {
  NodeChange[] overrides = 1;
  uint version = 2;
}

message JsxData {
  NodeChange[] overrides = 1;
}

message DerivedJsxData {
  NodeChange[] overrides = 1;
}

message AssetIdMap {
  AssetIdEntry[] entries = 1;
}

message AssetIdEntry {
  string assetKey = 1;
  AssetId assetId = 2;
}

message AssetRef {
  string key = 1;
  string version = 2;
}

message AssetId {
  GUID guid = 1;
  AssetRef assetRef = 2;
  StateGroupId stateGroupId = 3;
  StyleId styleId = 4;
  SymbolId symbolId = 5;
  VariableID variableId = 6;
  VariableSetID variableSetId = 7;
}

message StateGroupId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message StyleId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message SymbolId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message VariableID {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message VariableOverrideId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message VariableSetID {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message ModuleId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message ResponsiveSetId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message WebpageId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message ThemeID {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message CodeLibraryId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message CodeFileId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message CodeComponentId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message CanvasNodeId {
  GUID guid = 1;
  SymbolId symbolId = 2;
  StateGroupId stateGroupId = 3;
}

struct IndexRange {
  uint startIndex;
  uint endIndexExclusive;
}

struct CollaborativeTextOpID {
  uint sessionID;
  uint counterID;
}

enum CollaborativeTextOpType {
  INSERT = 0;
  DELETE = 1;
}

message CollaborativeTextStrippedOpRunWithIDs {
  CollaborativeTextOpID firstId = 1;
  uint runLength = 2;
  CollaborativeTextOpID[] parentIds = 3;
  CollaborativeTextOpID[] rebasedOnOpIds = 4;
}

message CollaborativeTextStrippedOpRunWithLoc {
  CollaborativeTextOpType type = 1;
  IndexRange range = 2;
  bool rangeShouldBeIteratedInReverse = 3;
  IndexRange contentBytesInBuffer = 4;
  IndexRange rebasedRange = 5;
}

message CollaborativeTextOpRun {
  CollaborativeTextOpID id = 1;
  CollaborativeTextOpID[] parentIds = 2;
  CollaborativeTextOpType type = 3;
  IndexRange range = 4;
  bool rangeShouldBeIteratedInReverse = 5;
  string content = 6;
  CollaborativeTextOpID[] rebasedOnOpIds = 7;
  IndexRange rebasedRange = 8;
}

message CollaborativePlainText {
  CollaborativeTextStrippedOpRunWithIDs[] historyOpsWithIds = 1;
  CollaborativeTextStrippedOpRunWithLoc[] historyOpsWithLoc = 2;
  byte[] historyStringContentBuffer = 3;
  CollaborativeTextOpRun[] changesToAppend = 4;
}

message CollaborativeTextSelection {
  GUID node = 1;
  uint field = 2;
  IndexRange selectedRange = 3;
  bool caretAtFront = 4;
  CollaborativeTextOpID[] textVersion = 5;
}

message ResponsiveTextStyleVariant {
  float minWidth = 1;
  NodeChange fields = 2;
  VariableData variableFontSize = 3;
  VariableData variableLineHeight = 4;
  VariableData variableLetterSpacing = 5;
  VariableData variableParagraphSpacing = 6;
  string name = 7;
}

enum FlappType {
  POLL = 0;
  EMBED = 1;
  FACEPILE = 2;
  ALIGNMENT = 3;
  YOUTUBE = 4;
}

message SlideThemeProps {
  string themeVersion = 1;
  VariableSetID variableSetId = 2;
  StyleId[] textStyleIds = 3;
  bool isTextColorManuallySelected = 4;
  bool isBorderColorManuallySelected = 5;
  AssetRef subscribedThemeRef = 6;
  uint schemaVersion = 7;
  bool isGeneratedFromDesign = 8;
}

message SlideThemeMap {
  SlideThemeMapEntry[] entries = 1;
}

message SlideThemeMapEntry {
  ThemeID themeId = 1;
  SlideThemeProps themeProps = 2;
}

message SharedSymbolReference {
  string fileKey = 1;
  GUID symbolID = 2;
  string versionHash = 3;
  GUIDPathMapping[] guidPathMappings = 4;
  byte[] bytes = 5;
  GUIDMapping[] libraryGUIDToSubscribingGUID = 6;
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

message ImportedCodeFileEntry {
  CodeFileId codeFileId = 1;
}

message ImportedCodeFiles {
  ImportedCodeFileEntry[] entries = 1;
}

enum BlurOpType {
  NORMAL = 0;
  PROGRESSIVE = 1;
}

enum RepeatType {
  LINEAR = 0;
  RADIAL = 1;
}

enum UnitType {
  PIXELS = 0;
  RELATIVE = 1;
}

enum RepeatOrder {
  FORWARD = 0;
  REVERSE = 1;
}

enum EffectAxis {
  X = 0;
  Y = 1;
  X_AND_Y = 2;
}

message Effect {
  EffectType type = 1;
  Vector offset = 3;
  float radius = 4;
  bool visible = 5;
  BlendMode blendMode = 6;
  float spread = 7;
  bool showShadowBehindNode = 8;
  VariableData radiusVar = 9;
  VariableData colorVar = 10;
  VariableData spreadVar = 11;
  VariableData xVar = 12;
  VariableData yVar = 13;
  uint count = 14;
  RepeatType repeatType = 15;
  EffectAxis axis = 16;
  UnitType unitType = 17;
  RepeatOrder order = 18;
  BlurOpType blurOpType = 19;
  Vector startOffset = 20;
  Vector endOffset = 28;
  float startRadius = 21;
  Color color = 2;
  Color secondaryColor = 24;
  Vector noiseSize = 22;
  uint seed = 29;
  bool clipToShape = 23;
  float density = 25;
  NoiseType noiseType = 26;
  float opacity = 27;
  float refractionRadius = 30;
  float specularAngle = 31;
  float specularIntensity = 32;
  float bevelSize = 33;
  float chromaticAberration = 34;
  float reflectionDistance = 35;
  float refractionIntensity = 36;
  VariableData refractionRadiusVar = 37;
  VariableData specularAngleVar = 38;
  VariableData specularIntensityVar = 39;
  VariableData chromaticAberrationVar = 40;
  VariableData splayVar = 41;
  VariableData refractionIntensityVar = 42;
  CodeComponentId customEffectId = 43;
  ComponentPropAssignment[] componentPropAssignments = 44;
  VariableData startRadiusVar = 45;
  VariableData startOffsetXVar = 46;
  VariableData startOffsetYVar = 47;
  VariableData endOffsetXVar = 48;
  VariableData endOffsetYVar = 49;
  VariableData noiseSizeXVar = 50;
  VariableData noiseSizeYVar = 51;
  VariableData densityVar = 52;
  VariableData effectOpacityVar = 53;
  VariableData secondaryColorVar = 54;
  GUID id = 55;
}

enum TransformModifierType {
  REPEAT = 0;
  SYMMETRY = 1;
  SKEW = 2;
}

message TransformModifier {
  TransformModifierType type = 1;
  Vector offset = 2;
  bool visible = 3;
  uint count = 4;
  RepeatType repeatType = 5;
  EffectAxis axis = 6;
  UnitType unitType = 7;
  RepeatOrder order = 8;
  float skewX = 9;
  float skewY = 10;
}

enum TransformSchemaType {
  NONE = 0;
  FIXED_ORDER = 1;
  FREEFORM = 2;
}

struct Matrix4f {
  float m00;
  float m01;
  float m02;
  float m03;
  float m10;
  float m11;
  float m12;
  float m13;
  float m20;
  float m21;
  float m22;
  float m23;
  float m30;
  float m31;
  float m32;
  float m33;
}

message FixedOrderTransform3d {
  float perspective = 1;
  float translateZ = 2;
  float rotateX = 3;
  float rotateY = 4;
  float rotateZ = 5;
}

enum TransformFnType {
  NONE = 0;
  MATRIX_3D = 1;
  PERSPECTIVE = 2;
  TRANSLATE_Z = 3;
  ROTATE_X = 4;
  ROTATE_Y = 5;
  ROTATE_Z = 6;
}

message TransformFnValue {
  Matrix4f matrix3d = 1;
  float perspective = 2;
  float rotateAngle = 3;
  float translateValue = 4;
}

message TransformFn {
  TransformFnType type = 1;
  TransformFnValue value = 2;
}

message TransformSchemaValue {
  FixedOrderTransform3d fixedOrderTransform3d = 1;
  TransformFn[] transformFunctions = 2;
}

message Transform3d {
  TransformSchemaType type = 1;
  TransformSchemaValue value = 2;
  bool backfaceHidden = 3;
}

struct NumberVector2D {
  Number x;
  Number y;
}

message Scene3d {
  float perspective = 1;
  NumberVector2D perspectiveOrigin = 2;
  bool preserve3d = 3;
}

message TransformOrigin {
  Number x = 1;
  Number y = 2;
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

enum ExportColorProfile {
  DOCUMENT = 0;
  SRGB = 1;
  DISPLAY_P3_V4 = 2;
  CMYK = 3;
}

enum ExportBackgroundType {
  SOLID = 0;
  TRANSPARENT = 1;
  GRID = 2;
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
  ExportColorProfile colorProfile = 10;
  float quality = 11;
  bool useBicubicSampler = 12;
  int frameRate = 13;
  int loopCount = 14;
  ExportBackgroundType backgroundType = 15;
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
  VariableData numSectionsVar = 10;
  VariableData offsetVar = 11;
  VariableData sectionSizeVar = 12;
  VariableData gutterSizeVar = 13;
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
  ANIMATION = 7;
}

enum BrushOrientation {
  FORWARD = 0;
  REVERSE = 1;
}

enum BrushType {
  STRETCH = 0;
  SCATTER = 1;
}

message DynamicStrokeSettings {
  float frequency = 1;
  float wiggle = 2;
  float smoothen = 3;
}

message ScatterStrokeSettings {
  float gap = 1;
  float wiggle = 2;
  float angularJitter = 3;
  float rotation = 4;
  float sizeJitter = 5;
}

message StretchStrokeSettings {
  BrushOrientation orientation = 1;
}

message StrokeData {
  Stroke[] strokes = 1;
  uint version = 2;
}

message Stroke {
  int strokeId = 1;
  float strokeWeight = 2;
  VariableData strokeWeightVar = 3;
  Paint[] strokePaint = 4;
  StyleId styleIdForStrokeFill = 5;
  StrokeAlign strokeAlign = 6;
  StrokeCap strokeCap = 7;
  Number strokeCapSize = 8;
  StrokeJoin strokeJoin = 9;
  float miterLimit = 10;
  float[] dashPattern = 11;
  OptionalVector pathTrim = 12;
  float strokeOffset = 13;
  bool isDeleted = 14;
}

message VariableWidthPoint {
  float position = 1;
  float ascent = 2;
  float descent = 3;
  int segmentId = 4;
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
  STICKY_SCROLLS = 2;
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
  CodeComponentId customToolId = 5;
}

message MultiplayerFieldVersion {
  uint counter = 1;
  uint sessionID = 2;
}

enum ConnectorMagnet {
  NONE = 0;
  AUTO = 1;
  TOP = 2;
  LEFT = 3;
  BOTTOM = 4;
  RIGHT = 5;
  CENTER = 6;
  AUTO_HORIZONTAL = 7;
  EDGE = 8;
  ABSOLUTE = 9;
}

message ConnectorEndpoint {
  GUID endpointNodeID = 1;
  Vector position = 2;
  ConnectorMagnet magnet = 3;
  Vector relativePosition = 4;
}

message ConnectorControlPoint {
  Vector position = 1;
  Vector axis = 2;
}

enum ConnectorTextSection {
  MIDDLE_TO_START = 0;
  MIDDLE_TO_END = 1;
}

enum ConnectorOffAxisOffset {
  NONE = 0;
  ABOVE = 1;
  BELOW = 2;
}

message ConnectorTextMidpoint {
  ConnectorTextSection section = 1;
  float offset = 2;
  ConnectorOffAxisOffset offAxisOffset = 3;
}

enum ConnectorLineStyle {
  ELBOWED = 0;
  STRAIGHT = 1;
  CURVED = 2;
}

enum ConnectorType {
  MANUAL = 0;
  DIAGRAM = 1;
}

enum AnnotationPropertyType {
  FILL = 0;
  STROKE = 1;
  WIDTH = 2;
  HEIGHT = 3;
  MIN_WIDTH = 4;
  MIN_HEIGHT = 5;
  MAX_WIDTH = 6;
  MAX_HEIGHT = 7;
  STROKE_WIDTH = 8;
  CORNER_RADIUS = 9;
  EFFECT = 10;
  TEXT_STYLE = 11;
  TEXT_ALIGN_HORIZONTAL = 12;
  FONT_FAMILY = 13;
  FONT_SIZE = 14;
  FONT_WEIGHT = 15;
  LINE_HEIGHT = 16;
  LETTER_SPACING = 17;
  STACK_SPACING = 18;
  STACK_PADDING = 19;
  STACK_MODE = 20;
  STACK_ALIGNMENT = 21;
  OPACITY = 22;
  COMPONENT = 23;
  FONT_STYLE = 24;
  GRID_ROW_GAP = 25;
  GRID_COLUMN_GAP = 26;
  GRID_ROW_COUNT = 27;
  GRID_COLUMN_COUNT = 28;
  GRID_ROW_ANCHOR_INDEX = 29;
  GRID_COLUMN_ANCHOR_INDEX = 30;
  GRID_ROW_SPAN = 31;
  GRID_COLUMN_SPAN = 32;
}

message AnnotationProperty {
  AnnotationPropertyType type = 1;
}

enum AnnotationCategoryPreset {
  NONE = 0;
  ACCESSIBILITY = 1;
  BEHAVIOR = 2;
  CONTENT = 3;
  DEVELOPMENT = 4;
  INTERACTION = 5;
}

enum AnnotationCategoryColor {
  YELLOW = 0;
  ORANGE = 1;
  RED = 2;
  PINK = 3;
  VIOLET = 4;
  BLUE = 5;
  TEAL = 6;
  GREEN = 7;
}

message AnnotationCategoryCustom {
  AnnotationCategoryColor color = 1;
  Color customColor = 2;
  string label = 3;
}

message AnnotationCategory {
  GUID id = 1;
  AnnotationCategoryPreset preset = 2;
  AnnotationCategoryCustom custom = 3;
}

message AnnotationCategories {
  uint version = 1;
  AnnotationCategory[] items = 2;
}

message Annotation {
  string label = 1;
  AnnotationProperty[] properties = 2;
  string labelV2 = 3;
  GUID categoryId = 4;
}

enum AnnotationMeasurementNodeSide {
  TOP = 0;
  BOTTOM = 1;
  LEFT = 2;
  RIGHT = 3;
}

message AnnotationMeasurement {
  GUID id = 1;
  GUID fromNode = 2;
  GUID toNode = 3;
  AnnotationMeasurementNodeSide fromNodeSide = 4;
  bool toSameSide = 5;
  float innerOffsetRelative = 6;
  float outerOffsetFixed = 7;
  GUIDPath toNodeStablePath = 8;
  string freeText = 9;
}

message LibraryMoveInfo {
  string oldKey = 1;
  string pasteFileKey = 2;
}

message LibraryMoveHistoryItem {
  GUID sourceNodeId = 1;
  string sourceComponentKey = 2;
}

message DeveloperRelatedLink {
  string nodeId = 1;
  string fileKey = 2;
  string linkName = 3;
  string linkUrl = 4;
}

message WidgetPointer {
  GUID nodeId = 1;
}

message EditInfo {
  string timestampIso8601 = 1;
  string userId = 2;
  uint lastEditedAt = 3;
  uint createdAt = 4;
}

enum EditorType {
  DESIGN = 0;
  WHITEBOARD = 1;
  SLIDES = 2;
  DEV_HANDOFF = 3;
  SITES = 4;
  COOPER = 5;
  ILLUSTRATION = 6;
  FIGMAKE = 7;
  FIGSPEC = 8;
}

enum MaskType {
  ALPHA = 0;
  OUTLINE = 1;
  LUMINANCE = 2;
}

enum ModuleType {
  NONE = 0;
  SINGLE_NODE = 1;
  MULTI_NODE = 2;
}

enum SectionStatus {
  NONE = 0;
  BUILD = 1;
  COMPLETED = 2;
}

message SectionStatusInfo {
  SectionStatus status = 1;
  uint lastUpdateUnixTimestamp = 2;
  string description = 3;
  string userId = 4;
  SectionStatus prevStatus = 5;
}

message BuzzApprovalRequestInfo {
  string requestId = 1;
  string requesterUserId = 2;
  uint requestedAt = 3;
  string[] reviewerUserIds = 4;
  string title = 5;
  string note = 6;
  GUID[] assetsInRequest = 7;
}

message BuzzApprovalRequests {
  BuzzApprovalRequestInfo[] requests = 1;
}

enum BuzzApprovalNodeStatus {
  NONE = 0;
  IN_REVIEW = 1;
  APPROVED = 2;
  CHANGES_REQUESTED = 3;
}

message BuzzApprovalNodeStatusInfo {
  BuzzApprovalNodeStatus currentStatus = 1;
  bool wasPreviouslyApproved = 2;
  uint[] approvalRevokedAtHistory = 3;
}

message CodeEmbedInfo {
  string url = 1;
  string srcUrl = 2;
  string title = 3;
  string thumbnailImageHash = 4;
  bool isPublishedSite = 5;
}

enum VariableTimingDisplayUnit {
  MILLISECONDS = 0;
  SECONDS = 1;
}

message NodeChange {
  GUID guid = 1;
  uint guidTag = 53;
  NodePhase phase = 2;
  uint phaseTag = 54;
  ParentIndex parentIndex = 3;
  uint parentIndexTag = 55;
  NodeType type = 4;
  uint typeTag = 56;
  string name = 5;
  uint nameTag = 57;
  bool isPublishable = 174;
  string description = 318;
  LibraryMoveInfo libraryMoveInfo = 256;
  LibraryMoveHistoryItem[] libraryMoveHistory = 281;
  string key = 319;
  AssetIdMap fileAssetIds = 383;
  uint styleID = 49;
  uint styleIDTag = 101;
  bool isFillStyle = 157;
  bool isStrokeStyle = 161;
  bool isOverrideOverTextStyle = 376;
  StyleType styleType = 163;
  string styleDescription = 191;
  string version = 171;
  string userFacingVersion = 399;
  string sortPosition = 320;
  SharedStyleMasterData ojansSuperSecretNodeField = 345;
  SharedStyleMasterData sevMoonlitLilyData = 348;
  bool isSoftDeletedStyle = 176;
  bool isNonUpdateable = 177;
  SharedStyleMasterData sharedStyleMasterData = 172;
  SharedStyleReference sharedStyleReference = 173;
  GUID inheritFillStyleID = 158;
  GUID inheritStrokeStyleID = 162;
  GUID inheritTextStyleID = 167;
  GUID inheritExportStyleID = 168;
  GUID inheritEffectStyleID = 169;
  GUID inheritGridStyleID = 170;
  GUID inheritFillStyleIDForStroke = 185;
  StyleId styleIdForFill = 332;
  StyleId styleIdForStrokeFill = 333;
  StyleId styleIdForText = 334;
  StyleId styleIdForEffect = 335;
  StyleId styleIdForGrid = 336;
  StyleAnimation[] styleAnimations = 580;
  Paint[] backgroundPaints = 193;
  GUID inheritFillStyleIDForBackground = 194;
  bool isStateGroup = 225;
  StateGroupPropertyValueOrder[] stateGroupPropertyValueOrders = 238;
  PartialPasteAnnotation partialPasteAnnotation = 581;
  SharedSymbolReference sharedSymbolReference = 122;
  bool isSymbolPublishable = 123;
  GUIDPathMapping[] sharedSymbolMappings = 124;
  string sharedSymbolVersion = 126;
  SharedComponentMasterData sharedComponentMasterData = 152;
  string symbolDescription = 144;
  GUIDPathMapping[] unflatteningMappings = 164;
  GUIDPathMapping[] forceUnflatteningMappings = 228;
  string publishFile = 214;
  string sourceLibraryKey = 395;
  GUID publishID = 215;
  string componentKey = 216;
  bool isC2 = 217;
  string publishedVersion = 218;
  string originComponentKey = 252;
  ComponentPropDef[] componentPropDefs = 266;
  ComponentPropRef[] componentPropRefs = 267;
  VariantPropSpec[] variantPropSpecs = 483;
  SymbolData symbolData = 113;
  uint symbolDataTag = 114;
  NodeChange[] derivedSymbolData = 125;
  bool nestedInstanceResizeEnabled = 394;
  GUID overriddenSymbolID = 143;
  ComponentPropAssignment[] componentPropAssignments = 268;
  bool propsAreBubbled = 305;
  InstanceOverrideStash[] overrideStash = 248;
  InstanceOverrideStashV2[] overrideStashV2 = 250;
  GUIDPath guidPath = 111;
  uint guidPathTag = 112;
  int overrideLevel = 321;
  ModuleType moduleType = 382;
  bool isSlot = 463;
  bool isSlotContent = 495;
  float fontSize = 21;
  uint fontSizeTag = 73;
  float paragraphIndent = 22;
  uint paragraphIndentTag = 74;
  float paragraphSpacing = 23;
  uint paragraphSpacingTag = 75;
  TextAlignHorizontal textAlignHorizontal = 32;
  uint textAlignHorizontalTag = 84;
  TextAlignVertical textAlignVertical = 33;
  uint textAlignVerticalTag = 85;
  TextCase textCase = 34;
  uint textCaseTag = 86;
  TextDecoration textDecoration = 35;
  uint textDecorationTag = 87;
  Number lineHeight = 40;
  uint lineHeightTag = 92;
  FontName fontName = 41;
  uint fontNameTag = 93;
  TextData textData = 42;
  uint textDataTag = 94;
  DerivedTextData derivedTextData = 359;
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
  Number letterSpacing = 165;
  string fontVersion = 202;
  LeadingTrim leadingTrim = 322;
  bool hangingPunctuation = 337;
  bool hangingList = 339;
  bool fallbackGlyphs = 550;
  int maxLines = 351;
  ResponsiveTextStyleVariant[] responsiveTextStyleVariants = 417;
  SectionStatus sectionStatus = 352;
  SectionStatusInfo sectionStatusInfo = 355;
  uint textUserLayoutVersion = 203;
  uint textExplicitLayoutVersion = 396;
  OpenTypeFeature[] toggledOnOTFeatures = 205;
  OpenTypeFeature[] toggledOffOTFeatures = 206;
  Hyperlink hyperlink = 223;
  Mention mention = 340;
  FontVariation[] fontVariations = 260;
  uint textBidiVersion = 279;
  TextTruncation textTruncation = 280;
  bool hasHadRTLText = 292;
  EmojiImageSet emojiImageSet = 391;
  string slideThumbnailHash = 392;
  bool visible = 6;
  uint visibleTag = 58;
  bool locked = 7;
  uint lockedTag = 59;
  LockMode lockMode = 434;
  float opacity = 8;
  uint opacityTag = 60;
  BlendMode blendMode = 9;
  uint blendModeTag = 61;
  Vector size = 11;
  uint sizeTag = 63;
  Matrix transform = 12;
  uint transformTag = 64;
  float[] dashPattern = 13;
  uint dashPatternTag = 65;
  bool mask = 16;
  uint maskTag = 68;
  Vector rotationOrigin = 424;
  bool maskIsOutline = 18;
  uint maskIsOutlineTag = 70;
  MaskType maskType = 317;
  float backgroundOpacity = 19;
  uint backgroundOpacityTag = 71;
  float cornerRadius = 20;
  uint cornerRadiusTag = 72;
  float strokeWeight = 26;
  uint strokeWeightTag = 78;
  StrokeAlign strokeAlign = 29;
  uint strokeAlignTag = 81;
  StrokeCap strokeCap = 30;
  uint strokeCapTag = 82;
  Number strokeCapSize = 497;
  StrokeJoin strokeJoin = 31;
  uint strokeJoinTag = 83;
  Paint[] fillPaints = 38;
  uint fillPaintsTag = 90;
  Paint[] strokePaints = 39;
  uint strokePaintsTag = 91;
  Effect[] effects = 43;
  uint effectsTag = 95;
  Color backgroundColor = 50;
  uint backgroundColorTag = 102;
  Path[] fillGeometry = 51;
  uint fillGeometryTag = 103;
  Path[] strokeGeometry = 52;
  uint strokeGeometryTag = 104;
  Path[] offsetFillMaskGeometry = 564;
  Paint[] textDecorationFillPaints = 411;
  bool textDecorationSkipInk = 412;
  Number textUnderlineOffset = 413;
  Number textDecorationThickness = 415;
  TextDecorationStyle textDecorationStyle = 416;
  TransformModifier[] transformModifiers = 455;
  Transform3d transform3d = 570;
  StrokeData strokeData = 571;
  Scene3d scene3d = 572;
  TransformOrigin transformOrigin = 587;
  float rectangleTopLeftCornerRadius = 145;
  float rectangleTopRightCornerRadius = 146;
  float rectangleBottomLeftCornerRadius = 147;
  float rectangleBottomRightCornerRadius = 148;
  bool rectangleCornerRadiiIndependent = 149;
  bool rectangleCornerToolIndependent = 150;
  bool proportionsConstrained = 151;
  OptionalVector targetAspectRatio = 423;
  bool useAbsoluteBounds = 258;
  bool borderTopHidden = 287;
  bool borderBottomHidden = 288;
  bool borderLeftHidden = 289;
  bool borderRightHidden = 290;
  bool bordersTakeSpace = 294;
  float borderTopWeight = 295;
  float borderBottomWeight = 296;
  float borderLeftWeight = 297;
  float borderRightWeight = 298;
  bool borderStrokeWeightsIndependent = 299;
  ConstraintType horizontalConstraint = 28;
  uint horizontalConstraintTag = 80;
  StackMode stackMode = 105;
  uint stackModeTag = 106;
  float stackSpacing = 107;
  uint stackSpacingTag = 108;
  float stackPadding = 109;
  uint stackPaddingTag = 110;
  StackCounterAlign stackCounterAlign = 120;
  StackJustify stackJustify = 121;
  StackAlign stackAlign = 208;
  float stackHorizontalPadding = 209;
  float stackVerticalPadding = 210;
  StackSize stackWidth = 211;
  StackSize stackHeight = 212;
  StackSize stackPrimarySizing = 229;
  StackJustify stackPrimaryAlignItems = 230;
  StackAlign stackCounterAlignItems = 231;
  float stackChildPrimaryGrow = 232;
  float stackPaddingRight = 233;
  float stackPaddingBottom = 234;
  StackCounterAlign stackChildAlignSelf = 236;
  StackPositioning stackPositioning = 269;
  bool stackReverseZIndex = 271;
  StackWrap stackWrap = 323;
  float stackCounterSpacing = 324;
  OptionalVector minSize = 325;
  OptionalVector maxSize = 326;
  StackCounterAlignContent stackCounterAlignContent = 343;
  int[] sortedMovingChildIndices = 406;
  uint stackLayoutVersion = 574;
  GUIDPositionMap gridRows = 435;
  GUIDPositionMap gridColumns = 436;
  float gridRowGap = 437;
  float gridColumnGap = 438;
  GUID gridRowAnchor = 439;
  GUID gridColumnAnchor = 440;
  uint gridRowSpan = 441;
  uint gridColumnSpan = 442;
  GUIDGridTrackSizeMap gridColumnsSizing = 474;
  GUIDGridTrackSizeMap gridRowsSizing = 475;
  GridChildAlign gridChildVerticalAlign = 476;
  GridChildAlign gridChildHorizontalAlign = 477;
  GridAutoTracks gridAutoTracks = 555;
  bool gridReflowEnabled = 556;
  bool isSnakeGameBoard = 344;
  GUID transitionNodeID = 139;
  GUID prototypeStartNodeID = 140;
  Color prototypeBackgroundColor = 141;
  TransitionInfo transitionInfo = 153;
  TransitionType transitionType = 154;
  float transitionDuration = 155;
  EasingType easingType = 156;
  bool transitionPreserveScroll = 181;
  ConnectionType connectionType = 182;
  string connectionURL = 183;
  PrototypeDevice prototypeDevice = 184;
  InteractionType interactionType = 187;
  float transitionTimeout = 188;
  bool interactionMaintained = 189;
  float interactionDuration = 190;
  bool destinationIsOverlay = 192;
  bool transitionShouldSmartAnimate = 207;
  PrototypeInteraction[] prototypeInteractions = 226;
  PrototypeInteraction[] objectAnimations = 426;
  PrototypeStartingPoint prototypeStartingPoint = 249;
  PluginData[] pluginData = 204;
  PluginRelaunchData[] pluginRelaunchData = 219;
  ConnectorEndpoint connectorStart = 242;
  ConnectorEndpoint connectorEnd = 243;
  ConnectorLineStyle connectorLineStyle = 244;
  StrokeCap connectorStartCap = 245;
  StrokeCap connectorEndCap = 246;
  ConnectorControlPoint[] connectorControlPoints = 253;
  ConnectorControlPoint[] connectorBezierControlPoints = 479;
  ConnectorTextMidpoint connectorTextMidpoint = 255;
  ConnectorType connectorType = 373;
  int connectorVersion = 533;
  Annotation[] annotations = 369;
  AnnotationMeasurement[] measurements = 384;
  AnnotationCategories annotationCategories = 453;
  ShapeWithTextType shapeWithTextType = 241;
  float shapeUserHeight = 247;
  bool isStrokePaintDerived = 530;
  DerivedImmutableFrameData derivedImmutableFrameData = 254;
  MultiplayerFieldVersion derivedImmutableFrameDataVersion = 338;
  NodeGenerationData nodeGenerationData = 240;
  JsxData jsxData = 491;
  DerivedJsxData derivedJsxData = 492;
  string stableKey = 493;
  CodeBlockLanguage codeBlockLanguage = 259;
  CodeBlockTheme codeBlockTheme = 433;
  LinkPreviewData linkPreviewData = 278;
  bool shapeTruncates = 282;
  bool sectionContentsHidden = 283;
  VideoPlayback videoPlayback = 300;
  StampData stampData = 301;
  SectionPresetInfo sectionPresetInfo = 370;
  PlatformShapeDefinition platformShapeDefinition = 409;
  MultiplayerMap widgetSyncedState = 273;
  uint widgetSyncCursor = 274;
  WidgetDerivedSubtreeCursor widgetDerivedSubtreeCursor = 275;
  WidgetPointer widgetCachedAncestor = 276;
  WidgetInputBehavior widgetInputBehavior = 285;
  string widgetTooltip = 286;
  WidgetHoverStyle widgetHoverStyle = 291;
  bool isWidgetStickable = 293;
  bool shouldHideCursorsOnWidgetHover = 360;
  WidgetMetadata widgetMetadata = 262;
  WidgetEvent[] widgetEvents = 263;
  WidgetPropertyMenuItem[] widgetPropertyMenuItems = 265;
  WidgetInputTextNodeType widgetInputTextNodeType = 401;
  MultiplayerMap jsxProps = 489;
  TableRowColumnPositionMap tableRowPositions = 308;
  TableRowColumnPositionMap tableColumnPositions = 309;
  TableRowColumnSizeMap tableRowHeights = 310;
  TableRowColumnSizeMap tableColumnWidths = 311;
  TableMergedCellMap tableMergedCells = 538;
  MultiplayerMap interactiveSlideConfigData = 371;
  MultiplayerMap interactiveSlideParticipantData = 372;
  FlappType flappType = 402;
  bool isEmbeddedPrototype = 486;
  string slideSpeakerNotes = 389;
  bool isSkippedSlide = 410;
  MultiplayerMap presentationOutlines = 573;
  ThemeID themeID = 379;
  SlideThemeData slideThemeData = 381;
  SlideThemeMap slideThemeMap = 390;
  string slideTemplateFileKey = 393;
  SlideNumber slideNumber = 443;
  string slideNumberSeparator = 456;
  GUID diagramParentId = 363;
  GUID layoutRoot = 362;
  string layoutPosition = 364;
  DiagramLayoutRuleType diagramLayoutRuleType = 366;
  DiagramParentIndex diagramParentIndex = 367;
  DiagramLayoutPaused diagramLayoutPaused = 368;
  bool isPageDivider = 380;
  InternalEnumForTest internalEnumForTest = 251;
  InternalDataForTest internalDataForTest = 257;
  bool autoRename = 14;
  uint autoRenameTag = 66;
  bool backgroundEnabled = 15;
  uint backgroundEnabledTag = 67;
  bool exportContentsOnly = 17;
  uint exportContentsOnlyTag = 69;
  float miterLimit = 25;
  uint miterLimitTag = 77;
  float textTracking = 27;
  uint textTrackingTag = 79;
  ConstraintType verticalConstraint = 37;
  uint verticalConstraintTag = 89;
  ExportSettings[] exportSettings = 45;
  uint exportSettingsTag = 97;
  TextAutoResize textAutoResize = 46;
  uint textAutoResizeTag = 98;
  LayoutGrid[] layoutGrids = 47;
  uint layoutGridsTag = 99;
  bool frameMaskDisabled = 115;
  uint frameMaskDisabledTag = 116;
  bool resizeToFit = 117;
  uint resizeToFitTag = 118;
  BooleanOperation booleanOperation = 36;
  uint booleanOperationTag = 88;
  VectorMirror handleMirroring = 44;
  uint handleMirroringTag = 96;
  uint count = 10;
  uint countTag = 62;
  float starInnerScale = 24;
  uint starInnerScaleTag = 76;
  ArcData arcData = 195;
  VectorData vectorData = 48;
  uint vectorDataTag = 100;
  uint vectorOperationVersion = 425;
  TextPathStart textPathStart = 432;
  bool exportBackgroundDisabled = 119;
  Guide[] guides = 138;
  bool internalOnly = 142;
  ScrollDirection scrollDirection = 159;
  float cornerSmoothing = 160;
  Vector scrollOffset = 166;
  bool exportTextAsSVGText = 175;
  ScrollContractedState scrollContractedState = 178;
  Vector contractedSize = 179;
  string fixedChildrenDivider = 180;
  ScrollBehavior scrollBehavior = 186;
  int derivedSymbolDataLayoutVersion = 196;
  NavigationType navigationType = 197;
  OverlayPositionType overlayPositionType = 198;
  Vector overlayRelativePosition = 199;
  OverlayBackgroundInteraction overlayBackgroundInteraction = 200;
  OverlayBackgroundAppearance overlayBackgroundAppearance = 201;
  GUID overrideKey = 213;
  bool containerSupportsFillStrokeAndCorners = 220;
  StackSize stackCounterSizing = 221;
  bool containersSupportFillStrokeAndCorners = 222;
  KeyTrigger keyTrigger = 224;
  string voiceEventPhrase = 227;
  GUID[] ancestorPathBeforeDeletion = 235;
  SymbolLink[] symbolLinks = 237;
  TextListData textListData = 239;
  bool detachOpticalSizeFromFontSize = 261;
  float listSpacing = 264;
  EmbedData embedData = 270;
  RichMediaData richMediaData = 272;
  MultiplayerMap renderedSyncedState = 277;
  bool simplifyInstancePanels = 284;
  HTMLTag accessibleHTMLTag = 302;
  ARIARole ariaRole = 303;
  ARIAAttributesMap ariaAttributes = 357;
  string accessibleLabel = 304;
  bool isDecorativeImage = 490;
  VariableData variableData = 306;
  VariableDataMap variableConsumptionMap = 307;
  VariableModeBySetMap variableModeBySetMap = 316;
  VariableSetMode[] variableSetModes = 312;
  VariableSetID variableSetID = 313;
  VariableResolvedDataType variableResolvedType = 314;
  VariableDataValues variableDataValues = 315;
  string variableTokenName = 350;
  VariableTimingDisplayUnit timingDisplayUnit = 566;
  VariableScope[] variableScopes = 353;
  VariableDataMap parameterConsumptionMap = 445;
  CodeSyntaxMap codeSyntax = 358;
  PasteSource pasteSource = 388;
  EditorType pageType = 397;
  GUID strokeBrushGuid = 446;
  uint64 strokeSeed = 482;
  VariableWidthPoint[] variableWidthPoints = 447;
  DynamicStrokeSettings dynamicStrokeSettings = 448;
  ScatterStrokeSettings scatterStrokeSettings = 449;
  StretchStrokeSettings stretchStrokeSettings = 450;
  Matrix[] scatterBrushTransforms = 488;
  BrushType brushType = 452;
  OptionalVector pathTrim = 542;
  float strokeOffset = 554;
  VariableSetID backingVariableSetId = 377;
  VariableID overriddenVariableId = 464;
  VariableIdOrVariableOverrideId backingVariableId = 378;
  bool isCollectionExtendable = 385;
  string rootVariableKey = 386;
  InheritedVariablesData inheritedVariableIds = 517;
  HandoffStatusMap handoffStatusMap = 361;
  AgendaPositionMap agendaPositionMap = 327;
  AgendaMetadataMap agendaMetadataMap = 328;
  MigrationStatus migrationStatus = 329;
  bool isSoftDeleted = 330;
  EditInfo editInfo = 331;
  ColorProfile colorProfile = 341;
  SymbolId detachedSymbolId = 342;
  ChildReadingDirection childReadingDirection = 346;
  string readingIndex = 347;
  DocumentColorProfile documentColorProfile = 349;
  DeveloperRelatedLink[] developerRelatedLinks = 354;
  string slideActiveThemeLibKey = 356;
  EditScopeInfo editScopeInfo = 365;
  SemanticWeight semanticWeight = 374;
  SemanticItalic semanticItalic = 375;
  bool areSlidesManuallyIndented = 403;
  bool isResponsiveSet = 387;
  DerivedBreakpointData derivedBreakpointData = 500;
  GUID defaultResponsiveSetId = 398;
  bool isPrimaryBreakpoint = 458;
  GUID primaryResponsiveNodeId = 457;
  GUID multiEditGlueId = 462;
  float breakpointMinWidth = 501;
  bool isBreakpointInFocus = 522;
  ResponsiveSetSettings responsiveSetSettings = 400;
  NodeBehaviors behaviors = 404;
  string sourceCode = 414;
  CollaborativeTextOpID[] sourceCodeCollaborativeTextVersion = 534;
  CollaborativePlainText collaborativeSourceCode = 444;
  CodeLibraryId belongsToCodeLibraryId = 427;
  ImportedCodeFiles importedCodeFiles = 467;
  CanvasNodeId codeFileCanvasNodeId = 468;
  bool isEntrypointCodeFile = 498;
  string componentOrStateGroupKey = 502;
  uint componentOrStateGroupVersion = 503;
  string sourceCodeLibraryKey = 504;
  string[] sourceCodeLibraryKeys = 515;
  UsedMakeLibrary[] usedMakeLibraries = 524;
  string makeLibraryComponentId = 518;
  bool shouldHidePreviewForMakeKitCreation = 520;
  bool isMakeKit = 551;
  PrototypeDevice codePreviewSettings = 531;
  CodeExample[] codeExamples = 525;
  CodeFileId exportedFromCodeFileId = 428;
  string codeExportName = 430;
  string codeComponentDescription = 547;
  CodeComponentId backingCodeComponentId = 429;
  bool isMainCodeComponent = 487;
  CodeSnapshotState codeSnapshotState = 431;
  NodeChatMessage[] chatMessages = 451;
  NodeChatCompressionState chatCompressionState = 485;
  AIChatThread aiChatThread = 496;
  string codeChatMessagesKey = 484;
  CodeSnapshot codeSnapshot = 459;
  CodeSnapshotLayers codeSnapshotLayers = 589;
  uint codeSnapshotInvalidatedAt = 480;
  bool isCodeBehavior = 465;
  bool autoForkCode = 469;
  bool hasBeenManuallyRenamed = 470;
  bool codeCreatedFromDesign = 471;
  CanvasNodeId codeCreatedFromDesignNodeId = 481;
  ImageImportMap imageImports = 473;
  CodeObjectType codeObjectType = 516;
  string codeFilePath = 472;
  CodeBehaviorData codeBehaviorData = 478;
  uint codeLibraryFormat = 519;
  bool isCodePreviewPlayingOnCanvas = 527;
  CodeEmbedInfo codeEmbedInfo = 532;
  bool isEmbedCodeLayer = 546;
  CodeSourceInfo codeSourceInfo = 558;
  string mimeType = 536;
  byte[] blobRef = 537;
  CMSSelector cmsSelector = 419;
  CMSConsumptionMap cmsConsumptionMap = 420;
  CMSRichTextStyleMap cmsRichTextStyleMap = 460;
  SymbolId repeaterSymbolId = 539;
  RepeaterCmsOverrideData repeaterCmsOverrideData = 540;
  RepeaterSymbolOverrideData repeaterSymbolOverrideData = 549;
  RepeaterOverrideData repeaterOverrideData = 541;
  uint[] aiEditedNodeChangeFieldNumbers = 405;
  string aiEditScopeLabel = 408;
  FirstDraftData firstDraftData = 407;
  FirstDraftKitElementData firstDraftKitElementData = 418;
  CooperRevertData cooperRevertData = 421;
  CooperTemplateData cooperTemplateData = 461;
  BuzzApprovalRequests buzzApprovalRequests = 528;
  BuzzApprovalNodeStatusInfo buzzApprovalNodeStatusInfo = 529;
  HubFileAttribution hubFileAttribution = 422;
  ManagedStringData managedStringData = 454;
  ThumbnailInfo thumbnailInfo = 466;
  AiCanvasPrompt aiCanvasPrompt = 494;
  CanvasNodeId backingNodeId = 499;
  string pageStatus = 548;
  TRSSTransform2D motionTransform = 523;
  int64 timelinePosition = 506;
  KeyframeValueData keyframeValue = 507;
  VariableData keyframeValueRef = 586;
  InterpolationType interpolationType = 505;
  BezierHandles bezierHandles = 508;
  EasingData easingData = 535;
  KeyframeOperation keyframeOperation = 509;
  TimelinePositionType timelinePositionType = 510;
  bool isClip = 545;
  GUID clipId = 511;
  uint64 timelineDuration = 512;
  int64 timelineOffset = 513;
  bool timelineDisabled = 543;
  PlaybackStyle playbackStyle = 514;
  TimelineDefinitionsMap timelineDefinitions = 552;
  TimelineAssignmentsMap timelineAssignments = 553;
  AnimationPresets animationPresets = 521;
  StyleIdForAnimation[] styleIdsForAnimation = 582;
  AnimationPresetId backingAnimationPresetId = 583;
  Tools tools = 568;
  CustomEffects customEffects = 569;
  TransitionOverrideData transitionOverrides = 526;
  bool useLegacySmartAnimate = 544;
  SourceControlConfig sourceControlConfig = 557;
  SpecBlockType specBlockType = 559;
  CollaborativePlainText specBlockContent = 560;
  string specCodeBlockLanguage = 561;
  string specBlockTableAlignment = 562;
  int specBlockIndentLevel = 563;
  string specImageHash = 575;
  int specWidth = 576;
  int specHeight = 577;
  TableRowColumnSizeMap specBlockTableRowHeights = 578;
  TableRowColumnSizeMap specBlockTableColumnWidths = 579;
  string specEmbedUrl = 590;
  bool placeholder = 565;
  string placeholderClientLifecycleId = 584;
  int placeholderInvalidateAt = 585;
  bool disableJitDst = 567;
  CustomToolArtifactRef customToolArtifactRef = 588;
}

enum GitRepoRefProvider {
  UGIT = 0;
  GITHUB = 1;
  OTHER = 2;
}

message GitRepoRef {
  GitRepoRefProvider provider = 1;
  string gitRepo = 2;
  string gitRef = 3;
}

message SourceControlConfig {
  GitRepoRef origin = 1;
  GitRepoRef upstream = 2;
}

message CodeSnapshot {
  CodeSnapshotState state = 6;
  uint invalidatedAt = 7;
  Paint[] paints = 1;
  Vector offset = 2;
  Vector layoutSize = 3;
  Vector canvasSize = 5;
  uint devicePixelRatio = 4;
}

message CodeOutputLayer {
  NodeChange node = 1;
}

message CodeSnapshotLayers {
  CodeSnapshotState state = 1;
  uint invalidatedAt = 2;
  CodeOutputLayer[] layers = 3;
}

message CodeBehaviorData {
  string name = 1;
  string icon = 2;
  string[] nodeTypes = 3;
  string category = 4;
  uint apiVersion = 5;
}

message CodeExample {
  string exampleName = 1;
  string codeExportName = 2;
}

message UsedMakeLibrary {
  string makeLibraryId = 1;
}

message CookieBannerText {
  string bannerHeader = 1;
  string bannerDisclaimerExplicit = 2;
  string bannerDisclaimerImplicit = 3;
  string policyLabel = 4;
  string acceptText = 5;
  string acknowledgeText = 6;
  string manageText = 7;
  string rejectText = 8;
  string necessaryText = 9;
  string necessaryDescription = 10;
  string analyticsText = 11;
  string analyticsDescription = 12;
  string preferencesText = 13;
  string preferencesDescription = 14;
  string marketingText = 15;
  string marketingDescription = 16;
  string saveLabel = 17;
  string triggerLabel = 18;
}

message CookieBannerSettings {
  bool enabled = 1;
  CookieBannerComponentType componentType = 2;
  CookieXAlignment xAlignment = 3;
  CookieYAlignment yAlignment = 4;
  CookieXAlignment triggerXAlignment = 5;
  CookieYAlignment triggerYAlignment = 6;
  TriggerComponentType triggerComponentType = 7;
  string policyUrl = 8;
  CookieBannerText text = 9;
  GUID policyLink = 10;
  string locale = 11;
}

enum CookieBannerComponentType {
  BANNER = 0;
  MODAL = 1;
}

enum TriggerComponentType {
  BANNER = 0;
  TAG = 1;
}

enum CookieXAlignment {
  LEFT = 0;
  CENTER = 1;
  RIGHT = 2;
}

enum CookieYAlignment {
  TOP = 0;
  CENTER = 1;
  BOTTOM = 2;
}

message ResponsiveSetSettings {
  string title = 1;
  string description = 2;
  ResponsiveScalingMode scalingMode = 3;
  float scalingMinFontSize = 4;
  float scalingMaxFontSize = 5;
  float scalingMinLayoutWidth = 6;
  float scalingMaxLayoutWidth = 7;
  string lang = 8;
  string faviconHash = 9;
  string socialImageHash = 10;
  string googleAnalyticsID = 11;
  bool blockSearchIndexing = 12;
  string customCodeHeadStart = 13;
  string customCodeHeadEnd = 14;
  string customCodeBodyStart = 15;
  string customCodeBodyEnd = 16;
  GUID faviconID = 17;
  GUID socialImageID = 18;
  bool addBypassLinks = 19;
  bool ignoreReducedMotion = 20;
  CookieBannerSettings cookieBanner = 21;
}

enum ResponsiveScalingMode {
  REFLOW = 0;
  SCALE = 1;
}

message CMSSelector {
  string cmsCollectionId = 1;
  CMSFilterCritera filterCriteria = 2;
  CMSSelectorSort[] sorts = 3;
  uint limit = 4;
}

message CMSFilterCritera {
  CMSFilterCriteriaMatchType matchType = 1;
  CMSSelectorFilter[] filters = 2;
}

enum CMSFilterCriteriaMatchType {
  MATCH_ALL = 0;
  MATCH_ANY = 1;
}

message CMSSelectorFilter {
  string cmsFieldId = 1;
  CMSSelectorFilterOperator op = 2;
  string comparisonValue = 3;
}

enum CMSSelectorFilterOperator {
  EQUALS = 0;
}

message CMSSelectorSort {
  string cmsFieldId = 1;
  CMSFieldOrderBy orderBy = 2;
}

enum CMSFieldOrderBy {
  ASCENDING = 0;
  DESCENDING = 1;
}

message CMSConsumptionMap {
  CMSConsumptionMapEntry[] entries = 1;
}

message CMSConsumptionMapEntry {
  CMSConsumptionField consumptionField = 1;
  string cmsFieldId = 2;
}

enum CMSConsumptionField {
  MISSING = 0;
  TEXT_DATA = 1;
}

message CMSRichTextStyleMap {
  CMSRichTextStyleEntry[] entries = 1;
}

message CMSRichTextStyleEntry {
  CMSRichTextStyleClass styleClass = 1;
  CMSRichTextDescriptor textDescriptor = 2;
}

enum CMSRichTextStyleClass {
  HEADING1 = 0;
  HEADING2 = 1;
  HEADING3 = 2;
  HEADING4 = 3;
  HEADING5 = 4;
  HEADING6 = 5;
  PARAGRAPH = 6;
  LINK = 7;
  BLOCKQUOTE = 8;
}

message CMSRichTextDescriptor {
  StyleId textStyleId = 1;
  FontName[] fontNameVariants = 2;
}

message RepeaterCmsOverrideData {
  NodeChange[] overrides = 1;
}

message RepeaterOverrideData {
  NodeChange[] parentIndexOverrides = 1;
}

message RepeaterSymbolOverrideData {
  RepeaterPositionOverrides[] overridesByPosition = 1;
}

message RepeaterPositionOverrides {
  ParentIndex position = 1;
  NodeChange[] overrides = 2;
}

message InheritedVariablesData {
  InheritedVariableEntry[] variableIds = 1;
}

message InheritedVariableEntry {
  VariableID variableId = 1;
}

message HubFileAttribution {
  string hubFileId = 1;
  string hubFileName = 2;
}

message ManagedStringData {
  string key = 1;
  string context = 2;
  string locale = 3;
  ManagedStringNode content = 4;
  ManagedStringContentSchema contentSchema = 5;
}

enum ManagedStringContentSchema {
  V0 = 0;
}

enum ManagedStringNodeType {
  TEXT = 0;
  CONCATENATE = 1;
  PLURAL = 2;
  PLACEHOLDER = 3;
}

message ManagedStringNode {
  ManagedStringNodeType type = 1;
  ManagedStringTextNodeData textNodeData = 2;
  ManagedStringConcatenateAstNodeData concatenateNodeData = 3;
  ManagedStringPluralAstNodeData pluralNodeData = 4;
  ManagedStringPlaceholderAstNodeData placeholderNodeData = 5;
}

message ManagedStringTextNodeData {
  string value = 1;
}

message ManagedStringConcatenateAstNodeData {
  ManagedStringNode[] values = 1;
}

enum ManagedStringPluralType {
  ZERO = 0;
  ONE = 1;
  TWO = 2;
  FEW = 3;
  MANY = 4;
  OTHER = 5;
}

message ManagedStringPluralAstNodeData {
  string identifier = 1;
  ManagedStringPluralTypeMapEntry[] conditions = 2;
}

message ManagedStringPluralTypeMapEntry {
  ManagedStringPluralType key = 1;
  ManagedStringNode value = 2;
}

enum ManagedStringFormatType {
  TEXT = 0;
  DATE = 1;
  TIME = 2;
  NUMBER = 3;
}

message ManagedStringPlaceholderAstNodeData {
  string identifier = 1;
  ManagedStringFormatType formatType = 2;
  string formatPattern = 3;
}

message CooperRevertData {
  NodeChange originalValues = 1;
}

message VideoPlayback {
  bool autoplay = 1;
  bool mediaLoop = 2;
  bool muted = 3;
  bool showControls = 4;
  uint startTimeMs = 5;
  uint endTimeMs = 6;
}

enum MediaAction {
  PLAY = 0;
  PAUSE = 1;
  TOGGLE_PLAY_PAUSE = 2;
  MUTE = 3;
  UNMUTE = 4;
  TOGGLE_MUTE_UNMUTE = 5;
  SKIP_FORWARD = 6;
  SKIP_BACKWARD = 7;
  SKIP_TO = 8;
  SET_PLAYBACK_RATE = 9;
}

enum AnimationTimelineAction {
  PLAY = 0;
  PAUSE = 1;
  TOGGLE_PLAY_PAUSE = 2;
  SET_PLAYHEAD = 3;
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

message VariableDataMap {
  VariableDataMapEntry[] entries = 1;
}

message VariableDataMapEntry {
  uint nodeField = 1;
  VariableData variableData = 2;
  VariableField variableField = 3;
}

enum VariableField {
  MISSING = 0;
  CORNER_RADIUS = 1;
  PARAGRAPH_SPACING = 2;
  PARAGRAPH_INDENT = 3;
  STROKE_WEIGHT = 4;
  STACK_SPACING = 5;
  STACK_PADDING_LEFT = 6;
  STACK_PADDING_TOP = 7;
  STACK_PADDING_RIGHT = 8;
  STACK_PADDING_BOTTOM = 9;
  VISIBLE = 10;
  TEXT_DATA = 11;
  WIDTH = 12;
  HEIGHT = 13;
  RECTANGLE_TOP_LEFT_CORNER_RADIUS = 14;
  RECTANGLE_TOP_RIGHT_CORNER_RADIUS = 15;
  RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS = 16;
  RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS = 17;
  BORDER_TOP_WEIGHT = 18;
  BORDER_BOTTOM_WEIGHT = 19;
  BORDER_LEFT_WEIGHT = 20;
  BORDER_RIGHT_WEIGHT = 21;
  VARIANT_PROPERTIES = 22;
  STACK_COUNTER_SPACING = 23;
  MIN_WIDTH = 24;
  MAX_WIDTH = 25;
  MIN_HEIGHT = 26;
  MAX_HEIGHT = 27;
  FONT_FAMILY = 28;
  FONT_STYLE = 29;
  FONT_VARIATIONS = 30;
  OPACITY = 31;
  FONT_SIZE = 32;
  LETTER_SPACING = 34;
  LINE_HEIGHT = 36;
  OVERRIDDEN_SYMBOL_ID = 37;
  HYPERLINK = 38;
  CMS_SERIALIZED_RICH_TEXT_DATA = 39;
  SLOT_CONTENT_ID = 40;
  GRID_ROW_GAP = 41;
  GRID_COLUMN_GAP = 42;
  X_POSITION = 43;
  Y_POSITION = 44;
  ROTATION = 45;
  MOTION_TRANSLATION_X = 46;
  MOTION_TRANSLATION_Y = 47;
  MOTION_ROTATION = 48;
  MOTION_SCALE_X = 49;
  MOTION_SCALE_Y = 50;
  MOTION_SHEAR = 51;
  SCROLL_OFFSET_X = 52;
  SCROLL_OFFSET_Y = 53;
  PATH_TRIM_START = 54;
  PATH_TRIM_END = 55;
  DISSOLVE_PROGRESS = 56;
  EASING_DATA = 57;
  MEDIA_CURRENT_TIME = 58;
  TRANSFORM_3D_PERSPECTIVE = 59;
  TRANSFORM_3D_TRANSLATION_Z = 60;
  TRANSFORM_3D_ROTATION_X = 61;
  TRANSFORM_3D_ROTATION_Y = 62;
  TRANSFORM_3D_ROTATION_Z = 63;
  POLYGON_COUNT = 64;
  ARC_DATA_STARTING_ANGLE = 65;
  ARC_DATA_ENDING_ANGLE = 66;
  ARC_DATA_INNER_RADIUS = 67;
}

message VariableModeBySetMap {
  VariableModeBySetMapEntry[] entries = 1;
}

message VariableModeBySetMapEntry {
  VariableSetID variableSetID = 1;
  GUID variableModeID = 2;
  VariableSetID variableSetExtensionID = 3;
}

message CodeSyntaxMap {
  CodeSyntaxMapEntry[] entries = 1;
}

message CodeSyntaxMapEntry {
  CodeSyntaxPlatform platform = 1;
  string value = 2;
}

message TableMergedCellMap {
  TableMergedCellMapEntry[] entries = 1;
}

message TableMergedCellMapEntry {
  GUID rowId = 1;
  GUID colId = 2;
  int rowSpan = 3;
  int colSpan = 4;
}

message TableRowColumnPositionMap {
  TableRowColumnPositionMapEntry[] entries = 1;
}

message TableRowColumnPositionMapEntry {
  GUID id = 1;
  string position = 2;
}

message GUIDPositionMap {
  GUIDPositionMapEntry[] entries = 1;
}

message GUIDPositionMapEntry {
  GUID id = 1;
  string position = 2;
}

message GUIDGridTrackSizeMap {
  GUIDGridTrackSizeMapEntry[] entries = 1;
}

message GUIDGridTrackSizeMapEntry {
  GUID id = 1;
  GridTrackSize trackSize = 2;
}

message ObjectAnimationList {
  ObjectAnimationListItem[] entries = 1;
}

message ObjectAnimationListItem {
  GUID targetNodeId = 1;
  PrototypeAction animation = 2;
}

message GridTrackSize {
  GridTrackSizingFunction minSizing = 1;
  GridTrackSizingFunction maxSizing = 2;
}

message GridTrackSizingFunction {
  GridTrackSizingType type = 1;
  float value = 2;
}

enum GridTrackSizingType {
  FLEX = 0;
  FIXED = 1;
  HUG = 2;
}

message TableRowColumnSizeMap {
  TableRowColumnSizeMapEntry[] entries = 1;
}

message TableRowColumnSizeMapEntry {
  GUID id = 1;
  float size = 2;
}

message AgendaPositionMap {
  AgendaPositionMapEntry[] entries = 1;
}

message AgendaPositionMapEntry {
  GUID id = 1;
  string position = 2;
}

enum AgendaItemType {
  NODE = 0;
  BLOCK = 1;
}

message AgendaMetadataMap {
  AgendaMetadataMapEntry[] entries = 1;
}

message AgendaMetadataMapEntry {
  GUID id = 1;
  AgendaMetadata data = 2;
}

message AgendaMetadata {
  string name = 1;
  AgendaItemType type = 2;
  GUID targetNodeID = 3;
  AgendaTimerInfo timerInfo = 4;
  AgendaVoteInfo voteInfo = 5;
  AgendaMusicInfo musicInfo = 6;
}

message AgendaTimerInfo {
  uint timerLength = 1;
}

message AgendaVoteInfo {
  uint voteCount = 1;
}

message AgendaMusicInfo {
  string songID = 1;
  uint startTimeMs = 2;
}

enum DiagramLayoutRuleType {
  NONE = 0;
  TREE = 1;
}

struct DiagramParentIndex {
  GUID guid;
  string position;
}

enum DiagramLayoutPaused {
  NO = 0;
  YES = 1;
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
  SLOT_CONTENT_ID = 4;
}

message ComponentPropAssignment {
  GUID defID = 1;
  ComponentPropValue value = 2;
  VariableData varValue = 3;
  DerivedTextData legacyDerivedTextData = 4;
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
  VariableData varValue = 9;
  ParameterConfig parameterConfig = 10;
  string description = 11;
  SlotPropConfig slotPropConfig = 12;
  ColorArrayConfig colorArrayConfig = 13;
}

message ComponentPropValue {
  bool boolValue = 1;
  TextData textValue = 2;
  GUID guidValue = 3;
  float floatValue = 4;
  EasingData easingData = 5;
  Vector vectorValue = 6;
  Line lineValue = 7;
  Circle circleValue = 8;
  Rotation3D rotation3DValue = 9;
  CirclePoint circlePointValue = 10;
  Gradient gradientValue = 11;
  ColorPoint colorPointValue = 12;
}

message TimelineData {
  uint64 durationUs = 1;
  bool defaultTimeline = 2;
  GUID parentTimelineDefId = 3;
  PlaybackStyle playbackStyle = 4;
}

message TimelineDefinitionsMap {
  TimelineDefinitionsMapEntry[] entries = 1;
}

message TimelineDefinitionsMapEntry {
  GUID id = 1;
  TimelineData data = 2;
}

message TimelineAssignmentKey {
  GUID assignedTimelineId = 1;
  GUID containingTimelineId = 2;
}

message TimelineBindingData {
  int64 offsetUs = 1;
  bool disabled = 2;
}

message TimelineAssignmentsMap {
  TimelineAssignmentsMapEntry[] entries = 1;
}

message TimelineAssignmentsMapEntry {
  TimelineAssignmentKey key = 1;
  TimelineBindingData value = 2;
}

enum ComponentPropType {
  BOOL = 0;
  TEXT = 1;
  COLOR = 2;
  INSTANCE_SWAP = 3;
  VARIANT = 4;
  NUMBER = 5;
  IMAGE = 6;
  SLOT = 7;
  EASING = 8;
  COLOR_ARRAY = 9;
  VECTOR = 10;
  LINE = 11;
  CIRCLE = 12;
  ROTATION_3D = 13;
  CIRCLE_POINT = 14;
  GRADIENT = 15;
  COLOR_POINT = 16;
}

message ComponentPropPreferredValues {
  string[] stringValues = 1;
  InstanceSwapPreferredValue[] instanceSwapValues = 2;
}

message ParameterConfig {
  NumberPropConfig numberPropConfig = 1;
  ParameterConfigControl control = 2;
  SliderConfig sliderConfig = 3;
  VariableData label = 4;
  InputConfig inputConfig = 5;
  SelectConfig selectConfig = 6;
  PointConfig pointConfig = 7;
  LineConfig lineConfig = 8;
  PointRadiusConfig pointRadiusConfig = 9;
  Rotation3DConfig rotation3DConfig = 10;
  CirclePointConfig circlePointConfig = 11;
  ColorPointConfig colorPointConfig = 12;
  bool showDividerAbove = 13;
}

enum ParameterConfigControl {
  DEFAULT = 0;
  SLIDER = 1;
  INPUT = 2;
  SELECT = 3;
}

message InputConfig {
  VariableData unit = 1;
  VariableData min = 2;
  VariableData max = 3;
}

message SliderConfig {
  VariableData min = 1;
  VariableData max = 2;
  VariableData step = 3;
  VariableData unit = 4;
}

enum PointMode {
  CANVAS_AND_UI = 0;
  CANVAS = 1;
  UI = 2;
}

message PointConfig {
  PointMode mode = 1;
  NumberUnits unit = 2;
}

message Line {
  Vector a = 1;
  Vector b = 2;
}

message LineConfig {
  PointMode mode = 1;
  NumberUnits unit = 2;
}

message Circle {
  Vector center = 1;
  float radius = 2;
}

message PointRadiusConfig {
  PointMode mode = 1;
  NumberUnits positionUnit = 2;
  NumberUnits radiusUnit = 3;
  float minRadius = 4;
  float maxRadius = 5;
}

message Rotation3D {
  float x = 1;
  float y = 2;
  float z = 3;
  float translateZ = 4;
}

message Rotation3DConfig {
  PointMode mode = 1;
}

message CirclePoint {
  Vector center = 1;
  float radius = 2;
  float angle = 3;
}

message CirclePointConfig {
  PointMode mode = 1;
  NumberUnits positionUnit = 2;
  NumberUnits radiusUnit = 3;
  float minRadius = 4;
  float maxRadius = 5;
}

message ColorPoint {
  Vector point = 1;
  VariableData color = 2;
}

message ColorPointConfig {
  PointMode mode = 1;
  NumberUnits unit = 2;
}

message Gradient {
  GradientStop[] stops = 1;
}

message GradientStop {
  float position = 1;
  VariableData color = 2;
}

message SelectOption {
  VariableData value = 1;
  string label = 2;
}

message SelectConfig {
  SelectOption[] options = 1;
}

message ColorArrayConfig {
  uint minLength = 1;
  uint maxLength = 2;
}

message SlotPropConfig {
  bool stretchChildOnInsert = 1;
  bool displayByDefault = 2;
  uint minChildren = 3;
  uint maxChildren = 4;
  bool allowPreferredValuesOnly = 5;
}

message NumberPropConfig {
  ParameterConfigControl control = 1;
  VariableData min = 2;
  VariableData max = 3;
  VariableData step = 4;
}

message InstanceSwapPreferredValue {
  InstanceSwapPreferredValueType type = 1;
  string key = 2;
}

enum InstanceSwapPreferredValueType {
  COMPONENT = 0;
  STATE_GROUP = 1;
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
  bool isResizable = 4;
  bool isRotatable = 5;
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

enum WidgetInputTextNodeType {
  WIDGET_CONTROLLED = 0;
  RICH_TEXT = 1;
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
  bool allowCustomColor = 9;
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
  BASH = 14;
  PLAINTEXT = 15;
  MARKDOWN = 16;
}

enum CodeBlockTheme {
  FIGJAM_DARK = 0;
  DRACULA = 1;
  DUOTONE_SEA = 2;
  DUOTONE_SPACE = 3;
  DUOTONE_EARTH = 4;
  DUOTONE_FOREST = 5;
  DUOTONE_LIGHT = 6;
}

enum SpecBlockType {
  DEFAULT = 0;
  PARAGRAPH = 1;
  HEADING_1 = 2;
  HEADING_2 = 3;
  HEADING_3 = 4;
  HEADING_4 = 5;
  HEADING_5 = 6;
  HEADING_6 = 7;
  CODE_BLOCK = 8;
  BLOCK_QUOTE = 9;
  HORIZONTAL_RULE = 10;
  ORDERED_LIST_ITEM = 11;
  UNORDERED_LIST_ITEM = 12;
  DOCUMENT = 13;
  TABLE = 14;
  TABLE_ROW = 15;
  TABLE_CELL = 16;
  TODO_LIST_ITEM_UNCHECKED = 17;
  TODO_LIST_ITEM_CHECKED = 18;
  IMAGE = 19;
  EMBED = 20;
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

enum BackfillError {
  NONE = 0;
  TRANSIENT_RETRYING = 1;
  PERMANENTLY_FAILED = 2;
  PASTE_FAILED = 3;
}

message PartialPasteAnnotation {
  bool isPartial = 1;
  uint64 annotatedAt = 2;
  BackfillError errorState = 3;
}

message VariantPropSpec {
  GUID propDefId = 1;
  string value = 2;
}

message TextListData {
  int listID = 1;
  BulletType bulletType = 2;
  int indentationLevel = 3;
  int lineNumber = 4;
}

enum BulletType {
  ORDERED = 0;
  UNORDERED = 1;
  INDENT = 2;
  NO_LIST = 3;
}

message TextLineData {
  LineType lineType = 1;
  int styleId = 10;
  int indentationLevel = 2;
  SourceDirectionality sourceDirectionality = 9;
  Directionality directionality = 3;
  DirectionalityIntent directionalityIntent = 4;
  int downgradeStyleId = 5;
  int consistencyStyleId = 6;
  int listStartOffset = 7;
  bool isFirstLineOfList = 8;
}

message DerivedTextLineData {
  Directionality directionality = 1;
}

enum LineType {
  PLAIN = 0;
  ORDERED_LIST = 1;
  UNORDERED_LIST = 2;
  BLOCKQUOTE = 3;
  HEADER = 4;
}

enum SourceDirectionality {
  AUTO = 0;
  LTR = 1;
  RTL = 2;
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
  int stateManagementVersion = 5;
}

message PrototypeEvent {
  InteractionType interactionType = 1;
  bool interactionMaintained = 2;
  float interactionDuration = 3;
  KeyTrigger keyTrigger = 4;
  string voiceEventPhrase = 5;
  float transitionTimeout = 6;
  float mediaHitTime = 7;
}

message PrototypeVariableTarget {
  VariableID id = 1;
  NodeFieldAlias nodeFieldAlias = 2;
}

message ConditionalActions {
  PrototypeAction[] actions = 1;
  VariableData condition = 2;
}

message PrototypeAction {
  GUID transitionNodeID = 1;
  TransitionType transitionType = 2;
  float transitionDuration = 3;
  EasingType easingType = 4;
  float transitionTimeout = 5;
  bool transitionShouldSmartAnimate = 6;
  ConnectionType connectionType = 7;
  Vector overlayRelativePosition = 9;
  NavigationType navigationType = 10;
  bool transitionPreserveScroll = 11;
  float[] easingFunction = 12;
  Vector extraScrollOffset = 13;
  bool transitionResetScrollPosition = 25;
  bool transitionResetInteractiveComponents = 26;
  bool transitionOverridesEnabled = 42;
  string connectionURL = 8;
  bool openUrlInNewTab = 18;
  VariableData linkParam = 34;
  CMSItemPageTarget cmsTarget = 35;
  GUID targetVariableID = 14;
  VariableAnyValue targetVariableValue = 15;
  PrototypeVariableTarget targetVariable = 19;
  VariableData targetVariableData = 20;
  MediaAction mediaAction = 16;
  bool transitionResetVideoPosition = 17;
  float mediaSkipToTime = 21;
  float mediaSkipByAmount = 22;
  float mediaPlaybackRate = 36;
  VariableData[] conditions = 23;
  ConditionalActions[] conditionalActions = 24;
  VariableSetID targetVariableSetID = 27;
  GUID targetVariableModeID = 28;
  string targetVariableSetKey = 29;
  VariableSetID variableSetTargetExtensionId = 38;
  AnimationType animationType = 30;
  GUID animationTargetId = 31;
  AnimationPhase animationPhase = 32;
  AnimationState animationState = 33;
  bool simpleLink = 37;
  AnimationTimelineAction animationTimelineAction = 39;
  GUID animationTimelineDefId = 41;
  float animationSkipToTime = 40;
}

enum AnimationPhase {
  IN = 0;
  OUT = 1;
}

enum AnimationType {
  NONE = 0;
  FADE = 1;
  SLIDE_FROM_LEFT = 2;
  SLIDE_FROM_RIGHT = 3;
  SLIDE_FROM_TOP = 4;
  SLIDE_FROM_BOTTOM = 5;
}

message AnimationState {
  float opacity = 1;
  Matrix transform = 2;
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
  CMSItemPageTarget cmsTarget = 4;
  bool openInNewTab = 3;
}

message CMSItemPageTarget {
  GUID nodeId = 1;
  string cmsItemId = 2;
  string fieldSchemaId = 3;
}

enum MentionSource {
  DEFAULT = 0;
  COPY_DUPLICATE = 1;
  SILENT_INSERT = 2;
}

message Mention {
  GUID id = 1;
  string mentionedUserId = 2;
  string mentionedByUserId = 3;
  string fileKey = 4;
  MentionSource source = 5;
  uint64 mentionedUserIdInt = 6;
  uint64 mentionedByUserIdInt = 7;
  string mentionedUserGroupId = 8;
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
  string embedVersionId = 13;
  bool isPublishedSite = 14;
}

message StampData {
  string userId = 1;
  string votingSessionId = 2;
  string stampedByUserId = 3;
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
  uint cursorHiddenReason = 5;
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

message TriggeredSetVariableActionData {
  GUID nodeForFindingTopmostScreenId = 1;
  string targetVariableId = 2;
  string targetVariableData = 3;
  string resolvedVariableModes = 4;
}

message TriggeredSetVariableModeActionData {
  GUID nodeForFindingTopmostScreenId = 1;
  string targetVariableSetKey = 2;
  string targetVariableModeId = 3;
  VariableSetID targetVariableSetId = 4;
}

message VideoStateChangeData {
  GUID targetNodeId = 1;
  bool isPlaying = 2;
  bool isPlayingSound = 3;
  uint[] currentTimes = 4;
  uint actionTakenTimestamp = 5;
}

message EmbeddedPrototypeData {
  GUID nodeId = 1;
  uint sessionId = 2;
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

message TextCursor {
  Rect selectionBox = 1;
  GUID canvasGuid = 2;
  GUID textNodeGuid = 3;
}

message TextSelection {
  Rect[] selectionBoxes = 1;
  GUID canvasGuid = 2;
  GUID textNodeGuid = 3;
  Vector textSelectionRange = 4;
  GUID textNodeOrContainingIfGuid = 5;
  GUID tableCellRowId = 6;
  GUID tableCellColId = 7;
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

message AprilFunCursor {
  string id = 1;
  bool trailEnabled = 2;
}

message AprilFunFigPal {
  string customization = 1;
  string name = 2;
}

enum Heartbeat {
  FOREGROUND = 0;
  BACKGROUND = 1;
}

enum SitesViewState {
  FILE = 0;
  CODE = 1;
  DAKOTA = 2;
  SETTINGS = 3;
  INSERT = 4;
  VARIABLES = 5;
}

enum DesignFullPageViewState {
  NONE = 0;
  DESIGN_SYSTEM = 1;
  VARIABLES = 2;
}

message AgentInfo {
  string name = 1;
  string logo = 2;
  string oauthClientId = 3;
}

message UserChange {
  uint sessionID = 1;
  string stableSessionID = 44;
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
  TriggeredOverlay[] triggeredOverlays = 13;
  string userID = 14;
  GUID lastTriggeredHotspot = 15;
  GUID lastTriggeredPrototypeInteractionID = 16;
  uint lastTriggeredObjectAnimationIndex = 38;
  TriggeredOverlayData[] triggeredOverlaysData = 17;
  PlaybackUpdate[] playbackUpdates = 18;
  ChatMessage chatMessage = 19;
  VoiceMetadata voiceMetadata = 20;
  bool canWrite = 21;
  bool highFiveStatus = 22;
  InstanceStateChange[] instanceStateChanges = 23;
  TextCursor textCursor = 24;
  TextSelection textSelection = 25;
  uint connectedAtTimeS = 26;
  bool focusOnTextCursor = 27;
  Heartbeat heartbeat = 28;
  TriggeredSetVariableActionData[] triggeredSetVariableActionData = 29;
  VideoStateChangeData[] videoStateChangeData = 30;
  string clientID = 31;
  GUID focusedSlideId = 32;
  TriggeredSetVariableModeActionData[] triggeredSetVariableModeActionData = 33;
  AprilFunCursor aprilFunCursor = 34;
  EmbeddedPrototypeData[] embeddedPrototypeData = 35;
  GUID activeSlidesEmbeddablePrototype = 36;
  GUID[] activeEmbeddedPrototypes = 43;
  GUID activeCodeComponentId = 37;
  AprilFunFigPal aprilFunFigPal = 39;
  CollaborativeTextSelection collaborativeTextSelection = 40;
  SitesViewState sitesViewState = 41;
  NodeChatExchange[] nodeChatExchanges = 42;
  DesignFullPageViewState designFullPageViewState = 45;
  AgentInfo agentInfo = 46;
}

message InteractiveSlideElementChange {
  string userID = 1;
  string anonymousUserID = 2;
  GUID nodeID = 3;
  string responseData = 4;
}

message NodeStatusChange {
  GUID[] nodeIds = 1;
  SectionStatusInfo statusInfo = 2;
}

message BuzzApprovalAssetEntry {
  GUID assetNodeId = 1;
  bool approved = 2;
}

message BuzzApprovalChange {
  BuzzApprovalAssetEntry[] assetEntries = 1;
  GUID canvasGridNodeId = 2;
  string requestId = 3;
}

enum SceneGraphQueryBehavior {
  DEFAULT = 0;
  CONTAINING_PAGE = 1;
  PLUGIN = 2;
}

enum SceneGraphQueryMode {
  ADD = 0;
  SET = 1;
}

message SceneGraphQuery {
  GUID startingNode = 1;
  uint depth = 2;
  SceneGraphQueryBehavior behavior = 3;
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
  uint songID = 6;
  uint lastReceivedSongTimestampMs = 7;
  string songUUID = 8;
}

message MusicInfo {
  bool isPaused = 1;
  uint messageID = 2;
  string songID = 3;
  uint lastReceivedSongTimestampMs = 4;
  bool isStopped = 5;
}

message PresenterNomination {
  uint sessionID = 1;
  bool isCancelled = 2;
}

message PresenterInfo {
  uint sessionID = 1;
  PresenterNomination nomination = 2;
  bool isReconnected = 3;
}

message ClientBroadcast {
  uint sessionID = 1;
  CursorReaction cursorReaction = 2;
  TimerInfo timer = 3;
  PresenterInfo presenter = 4;
  PresenterInfo prototypePresenter = 5;
  MusicInfo music = 6;
}

enum PasteAssetType {
  UNKNOWN = 0;
  VARIABLE = 1;
}

message Message {
  MessageType type = 1;
  uint sessionID = 2;
  string stableSessionID = 42;
  uint ackID = 3;
  bool isRetransmission = 37;
  NodeChange[] nodeChanges = 4;
  UserChange[] userChanges = 5;
  InteractiveSlideElementChange interactiveSlideElementChange = 32;
  NodeStatusChange nodeStatusChange = 36;
  BuzzApprovalChange buzzApprovalChange = 44;
  Blob[] blobs = 6;
  uint blobBaseIndex = 30;
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
  NodeChangesMetadata nodeChangesMetadata = 17;
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
  string postSyncActions = 28;
  GUID[] publishedAssetGuids = 29;
  bool dirtyFromInitialLoad = 31;
  ClipboardSelectionRegion[] clipboardSelectionRegions = 33;
  EncodedOffsetsIndex encodedOffsetsIndex = 34;
  bool hasRepeatingContent = 35;
  uint64 sentTimestamp = 38;
  AnnotationCategory[] annotationCategories = 39;
  ClientRenderedMetadata clientRenderedMetadata = 40;
  PasteAssetType pasteAssetType = 41;
  ObjectAnimationList objectAnimations = 43;
  SceneGraphQueryMode sceneGraphQueryMode = 45;
}

message EncodedOffsetsIndex {
  uint nodeChangesFieldOffset = 1;
  uint nodeChangesFieldLength = 2;
  uint blobsFieldOffset = 3;
  GUIDAndEncodedOffset[] nodeChangeOffsets = 4;
}

struct GUIDAndEncodedOffset {
  GUID guid;
  uint offset;
}

message DiffChunk {
  uint[] nodeChanges = 1;
  NodePhase phase = 2;
  NodeChange displayNode = 3;
  GUID canvasId = 4;
  string canvasName = 5;
  bool canvasIsInternal = 6;
  uint[] chunksAffectingThisChunk = 7;
  NodeChange[] basisParentHierarchy = 8;
  NodeChange[] parentHierarchy = 9;
  GUID[] basisParentHierarchyGuids = 10;
  GUID[] parentHierarchyGuids = 11;
}

enum DiffType {
  BRANCHING = 0;
  NODE_CHANGES_ONLY = 1;
}

message DiffPayload {
  NodeChange[] nodeChanges = 1;
  Blob[] blobs = 2;
  DiffChunk[] diffChunks = 3;
  NodeChange[] diffBasis = 4;
  NodeChange[] basisParentNodeChanges = 5;
  NodeChange[] parentNodeChanges = 6;
  DiffType diffType = 7;
}

enum RichMediaType {
  ANIMATED_IMAGE = 0;
  VIDEO = 1;
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
  EXPRESSION = 5;
  MAP = 6;
  SYMBOL_ID = 7;
  FONT_STYLE = 8;
  TEXT_DATA = 9;
  INVALID = 10;
  NODE_FIELD_ALIAS = 11;
  CMS_ALIAS = 12;
  PROP_REF = 13;
  IMAGE = 14;
  MANAGED_STRING_ALIAS = 15;
  LINK = 16;
  JS_RUNTIME_ALIAS = 17;
  SLOT_CONTENT_ID = 18;
  DATE = 19;
  KEYFRAME_TRACK_ID = 20;
  KEYFRAME_TRACK_PARAMETER_DATA = 21;
  EASING = 22;
  TIMING = 23;
  VECTOR = 24;
  COLOR_ARRAY = 25;
  LINE = 26;
  CIRCLE = 27;
  ROTATION_3D = 28;
  CIRCLE_POINT = 29;
  GRADIENT = 30;
  COLOR_POINT = 31;
}

enum VariableResolvedDataType {
  BOOLEAN = 0;
  FLOAT = 1;
  STRING = 2;
  COLOR = 4;
  MAP = 5;
  SYMBOL_ID = 6;
  FONT_STYLE = 7;
  TEXT_DATA = 8;
  IMAGE = 9;
  LINK = 10;
  JS_RUNTIME_ALIAS = 11;
  SLOT_CONTENT_ID = 12;
  KEYFRAME_TRACK_ID = 13;
  KEYFRAME_TRACK_PARAMETER_DATA = 14;
  EASING = 15;
  TIMING = 16;
  VECTOR = 17;
  COLOR_ARRAY = 18;
  LINE = 19;
  CIRCLE = 20;
  ROTATION_3D = 21;
  CIRCLE_POINT = 22;
  GRADIENT = 23;
  COLOR_POINT = 24;
}

message VariableAnyValue {
  bool boolValue = 1;
  string textValue = 2;
  float floatValue = 3;
  VariableID alias = 4;
  Color colorValue = 5;
  Expression expressionValue = 6;
  VariableMap mapValue = 7;
  SymbolId symbolIdValue = 8;
  VariableFontStyle fontStyleValue = 9;
  TextData textDataValue = 10;
  NodeFieldAlias nodeFieldAliasValue = 11;
  CMSAlias cmsAliasValue = 12;
  PropRefValue propRefValue = 13;
  ImageParameterValue imageValue = 14;
  ManagedStringAlias managedStringAliasValue = 15;
  Hyperlink linkValue = 16;
  JsRuntimeAlias jsRuntimeAliasValue = 17;
  SlotContentId slotContentIdValue = 18;
  KeyframeTrackId keyframeTrackIdValue = 19;
  KeyframeTrackParameterValue keyframeTrackParameterValue = 20;
  EasingData easingValue = 21;
  Vector vectorValue = 22;
  ColorArray colorArrayValue = 23;
  Line lineValue = 24;
  Circle circleValue = 25;
  Rotation3D rotation3DValue = 26;
  CirclePoint circlePointValue = 27;
  Gradient gradientValue = 28;
  ColorPoint colorPointValue = 29;
}

enum ExpressionFunction {
  ADDITION = 0;
  SUBTRACTION = 1;
  RESOLVE_VARIANT = 2;
  MULTIPLY = 3;
  DIVIDE = 4;
  EQUALS = 5;
  NOT_EQUAL = 6;
  LESS_THAN = 7;
  LESS_THAN_OR_EQUAL = 8;
  GREATER_THAN = 9;
  GREATER_THAN_OR_EQUAL = 10;
  AND = 11;
  OR = 12;
  NOT = 13;
  STRINGIFY = 14;
  TERNARY = 15;
  VAR_MODE_LOOKUP = 16;
  NEGATE = 17;
  IS_TRUTHY = 18;
  KEYFRAME = 19;
}

message Expression {
  ExpressionFunction expressionFunction = 1;
  VariableData[] expressionArguments = 2;
}

message VariableMapValue {
  string key = 1;
  VariableData value = 2;
  GUID guidKey = 3;
}

message VariableMap {
  VariableMapValue[] values = 1;
}

message ColorArray {
  VariableData[] colors = 1;
}

message VariableFontStyle {
  VariableData asString = 1;
  VariableData asFloat = 2;
  VariableData asVariations = 3;
}

message ImageParameterValue {
  Image image = 1;
  Image imageThumbnail = 2;
  Image animatedImage = 6;
  string altText = 3;
  uint originalImageHeight = 4;
  uint originalImageWidth = 5;
  uint animationFrame = 7;
}

message ThumbnailInfo {
  GUID nodeID = 1;
  string thumbnailVersion = 2;
}

message AiCanvasPrompt {
  string userPrompt = 1;
  string authorId = 2;
  GUID[] parentNodeIds = 3;
}

message NodeFieldAlias {
  GUIDPath stablePathToNode = 1;
  NodeFieldAliasType nodeField = 2;
  string indexOrKey = 3;
}

enum NodeFieldAliasType {
  MISSING = 0;
  COMPONENT_PROP_ASSIGNMENTS = 1;
}

message CMSAlias {
  string collectionId = 1;
  string itemId = 2;
  string fieldId = 3;
  VariableDataType type = 4;
}

message JsRuntimeAlias {
  string lookupKey = 1;
}

message PropRefValue {
  GUID defId = 1;
}

message ManagedStringId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message ManagedStringPlaceholderMapEntry {
  string key = 1;
  string value = 2;
}

message SlotContentId {
  GUID guid = 1;
}

message ManagedStringAlias {
  ManagedStringId managedStringId = 1;
  ManagedStringPlaceholderMapEntry[] placeholderValues = 2;
}

message KeyframeTrackId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message AnimationPresetId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message ToolId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message CustomEffectId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message TRSSTransform2D {
  Vector translation = 1;
  float rotation = 2;
  Vector scale = 3;
  float shearX = 4;
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
  VariableSetID parentVariableSetId = 4;
  GUID parentModeId = 5;
}

message VariableDataValues {
  VariableDataValuesEntry[] entries = 1;
}

message VariableDataValuesEntry {
  GUID modeID = 1;
  VariableData variableData = 2;
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
  FONT_STYLE = 14;
  FONT_FAMILY = 15;
  FONT_SIZE = 16;
  LINE_HEIGHT = 17;
  LETTER_SPACING = 18;
  PARAGRAPH_SPACING = 19;
  PARAGRAPH_INDENT = 20;
  FONT_VARIATIONS = 21;
  TRANSFORM = 22;
}

message KeyframeAnyValue {
  float floatValue = 1;
  Color colorValue = 2;
  TextData textDataValue = 3;
  Vector vectorValue = 4;
}

enum KeyframeValueType {
  FLOAT = 0;
  INVALID = 1;
  COLOR = 2;
  TEXT_DATA = 3;
  VECTOR = 4;
}

message KeyframeValueData {
  KeyframeAnyValue value = 1;
  KeyframeValueType valueType = 2;
}

enum KeyframeTrackParameterType {
  INVALID = 0;
  MANUAL = 1;
  ANIMATION_PRESET = 2;
}

message ManualKeyframeTrackParameter {
  KeyframeTrackId keyframeTrackId = 1;
  GUID timelineDefId = 2;
}

message AnimationPresetKeyframeTrackParameter {
  AnimationPresetId animationPresetId = 1;
  KeyframeTrackId keyframeTrackId = 2;
  GUID timelineDefId = 3;
}

message KeyframeTrackAnyParameter {
  ManualKeyframeTrackParameter manual = 1;
  AnimationPresetKeyframeTrackParameter animationPreset = 2;
  GUID animationStyleBindingId = 3;
}

message KeyframeTrackParameter {
  KeyframeTrackAnyParameter value = 1;
  KeyframeTrackParameterType type = 2;
}

message KeyframeTrackParameterValue {
  KeyframeTrackParameter[] parameters = 1;
}

message AnimationPresets {
  AnimationPresetData[] presets = 1;
}

message AnimationPresetData {
  AnimationPresetId animationPresetId = 1;
  GUID timelineDefId = 2;
}

message StyleAnimation {
  AnimationPresetId animationPresetId = 1;
}

message StyleIdForAnimation {
  GUID id = 1;
  GUID timelineDefId = 2;
  StyleId animationStyleId = 3;
  int64 timelineOffset = 4;
}

message Tools {
  ToolData[] tools = 1;
}

message ToolData {
  ToolId toolId = 1;
  CodeComponentId backingCodeComponentId = 2;
  ComponentPropAssignment[] componentPropAssignments = 3;
}

message CustomEffects {
  CustomEffectData[] customEffects = 1;
}

message CustomEffectData {
  CustomEffectId customEffectId = 1;
}

message SpringParams {
  float stiffness = 1;
  float damping = 2;
  float mass = 3;
}

message TransitionEasingAnyValue {
  SpringParams springEasing = 1;
  BezierHandles bezierEasing = 2;
}

message EasingData {
  EasingType easingType = 1;
  TransitionEasingAnyValue easingValue = 2;
}

message TransitionOverride {
  GUID id = 1;
  float duration = 2;
  VariableData durationVar = 3;
  float delay = 4;
  VariableData delayVar = 5;
  EasingData easing = 6;
  VariableData easingVar = 7;
  uint64 createdAtMs = 8;
  GUID[] interactionIDs = 9;
  bool disabled = 10;
}

message TransitionOverrideData {
  TransitionOverride[] all = 1;
  TransitionOverridePropMap propertyOverrides = 2;
}

enum TransitionOverrideProp {
  ALL = 0;
  OPACITY = 1;
  TRANSLATION = 2;
  ROTATION = 3;
  SCALE = 4;
}

enum TransitionOverrideBindingTopLevelField {
  MISSING = 0;
  PARAMETER_CONSUMPTION_MAP = 1;
  EFFECT_DATA = 2;
  FILL_PAINT_DATA = 3;
  STROKE_PAINT_DATA = 4;
}

message TransitionOverrideBindingLocation {
  TransitionOverrideBindingTopLevelField topLevelField = 1;
  int parameterFieldValue = 2;
  int index = 3;
  int effectParametrizedFieldValue = 4;
}

enum KeyframeBindingEffectParametrizedField {
  MISSING = 0;
  OFFSET_X = 1;
  OFFSET_Y = 2;
  RADIUS = 3;
  SPREAD = 4;
  COLOR = 5;
  REFRACTION_RADIUS = 6;
  SPECULAR_ANGLE = 7;
  SPECULAR_INTENSITY = 8;
  CHROMATIC_ABERRATION = 9;
  SPLAY = 10;
  REFRACTION_INTENSITY = 11;
  START_RADIUS = 12;
  START_OFFSET_X = 13;
  START_OFFSET_Y = 14;
  END_OFFSET_X = 15;
  END_OFFSET_Y = 16;
  NOISE_SIZE_X = 17;
  NOISE_SIZE_Y = 18;
  DENSITY = 19;
  EFFECT_OPACITY = 20;
  SECONDARY_COLOR = 21;
}

message NodeContentsKeyframeBindingLocation {
  TransitionOverrideBindingTopLevelField topLevelField = 1;
  VariableField parameterFieldValue = 2;
  int index = 3;
  KeyframeBindingEffectParametrizedField effectParametrizedFieldValue = 4;
}

message TransitionOverridePropMap {
  TransitionOverridePropMapEntry[] entries = 1;
}

message TransitionOverridePropMapEntry {
  TransitionOverrideProp prop = 1;
  TransitionOverride[] overrides = 2;
  TransitionOverrideBindingLocation bindingLocation = 3;
  NodeContentsKeyframeBindingLocation nodeContentsBindingLocation = 4;
}

enum CodeSyntaxPlatform {
  WEB = 0;
  ANDROID = 1;
  iOS = 2;
}

message OptionalVector {
  Vector value = 1;
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
  VIDEO = 76;
}

enum ARIARole {
  AUTO = 0;
  NONE = 52;
  APPLICATION = 30;
  BANNER = 67;
  COMPLEMENTARY = 68;
  CONTENTINFO = 69;
  FORM = 70;
  MAIN = 71;
  NAVIGATION = 72;
  REGION = 73;
  SEARCH = 74;
  SEPARATOR = 13;
  ARTICLE = 31;
  COLUMNHEADER = 35;
  DEFINITION = 36;
  DIRECTORY = 38;
  DOCUMENT = 39;
  GROUP = 44;
  HEADING = 45;
  IMG = 46;
  LIST = 48;
  LISTITEM = 49;
  MATH = 50;
  NOTE = 53;
  PRESENTATION = 55;
  ROW = 56;
  ROWGROUP = 57;
  ROWHEADER = 58;
  TABLE = 62;
  TOOLBAR = 65;
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
  SLIDER = 14;
  SPINBUTTON = 15;
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
  TOOLTIP = 66;
  ALERT = 75;
  LOG = 76;
  MARQUEE = 77;
  STATUS = 78;
  TIMER = 79;
  ALERTDIALOG = 80;
  DIALOG = 81;
  SEARCHBOX = 12;
  SWITCH = 16;
  BLOCKQUOTE = 32;
  CAPTION = 33;
  CELL = 34;
  DELETION = 37;
  EMPHASIS = 40;
  FEED = 41;
  FIGURE = 42;
  GENERIC = 43;
  INSERTION = 47;
  METER = 51;
  PARAGRAPH = 54;
  STRONG = 59;
  SUBSCRIPT = 60;
  SUPERSCRIPT = 61;
  TERM = 63;
  TIME = 64;
  IMAGE = 82;
  HEADING_1 = 83;
  HEADING_2 = 84;
  HEADING_3 = 85;
  HEADING_4 = 86;
  HEADING_5 = 87;
  HEADING_6 = 88;
  HEADER = 89;
  FOOTER = 90;
  SIDEBAR = 91;
  SECTION = 92;
  MAINCONTENT = 93;
  TABLE_CELL = 94;
  WIDGET = 95;
}

message MigrationStatus {
  bool dsdCleanup = 1;
}

message NodeFieldMap {
  NodeFieldMapEntry[] entries = 1;
}

message NodeFieldMapEntry {
  GUID guid = 1;
  uint field = 2;
  uint lastModifiedSequenceNumber = 3;
}

enum ColorProfile {
  SRGB = 0;
  DISPLAY_P3 = 1;
}

enum DocumentColorProfile {
  LEGACY = 0;
  SRGB = 1;
  DISPLAY_P3 = 2;
}

enum ChildReadingDirection {
  NONE = 0;
  LEFT_TO_RIGHT = 1;
  RIGHT_TO_LEFT = 2;
}

message ARIAAttributeAnyValue {
  bool boolValue = 1;
  string stringValue = 2;
  float floatValue = 3;
  int intValue = 4;
  string[] stringArrayValue = 5;
}

enum ARIAAttributeDataType {
  BOOLEAN = 0;
  STRING = 1;
  FLOAT = 2;
  INT = 3;
  STRING_LIST = 4;
}

message ARIAAttributeData {
  ARIAAttributeDataType type = 1;
  ARIAAttributeAnyValue value = 2;
}

message ARIAAttributesMap {
  ARIAAttributesMapEntry[] entries = 1;
}

message ARIAAttributesMapEntry {
  string attribute = 1;
  ARIAAttributeData value = 2;
}

message HandoffStatusMapEntry {
  GUID guid = 1;
  SectionStatusInfo handoffStatus = 2;
}

message HandoffStatusMap {
  HandoffStatusMapEntry[] entries = 1;
}

message EditScopeInfo {
  EditScopeStack[] editScopeStacks = 1;
  EditScopeSnapshot[] snapshots = 2;
}

message EditScopeSnapshot {
  EditScopeStack[] frames = 1;
  uint[] nodeChangeFieldNumbers = 2;
}

message EditScopeStack {
  EditScope[] stack = 1;
}

message EditScope {
  EditScopeType type = 1;
  string label = 2;
  EditorType editorType = 3;
}

enum EditScopeType {
  INVALID = 0;
  TEST_SETUP = 1;
  USER = 2;
  PLUGIN = 3;
  SYSTEM = 4;
  REST_API = 5;
  ONBOARDING = 6;
  AUTOSAVE = 7;
  AI = 8;
}

enum SectionPresetState {
  INSERTED = 0;
  USER_EDITED = 1;
}

enum EmojiImageSet {
  APPLE = 0;
  NOTO = 1;
}

enum SelectionRegionFocusType {
  NONE = 0;
  PRIMARY = 1;
  SECONDARY = 2;
}

message SectionPresetInfo {
  uint64 shelfId = 1;
  uint64 templateId = 2;
  string templateName = 3;
  SectionPresetState state = 4;
}

message ClipboardSelectionRegion {
  GUID parent = 1;
  GUID[] nodes = 2;
  Vector enclosingFrameOffset = 3;
  bool pasteIsPartiallyOutsideEnclosingFrame = 4;
  SelectionRegionFocusType focusType = 5;
}

enum FirstDraftKitType {
  LOCAL = 0;
  LIBRARY = 1;
  NONE = 2;
}

message FirstDraftKit {
  string key = 1;
  FirstDraftKitType type = 2;
}

message FirstDraftData {
  string generationId = 1;
  FirstDraftKit kit = 2;
}

enum FirstDraftKitElementType {
  NONE = 0;
  BUILDING_BLOCK = 1;
  GROUPED_COMPONENT = 2;
}

message FirstDraftKitElementData {
  FirstDraftKitElementType type = 1;
}

enum PlatformShapeProperty {
  FILL = 0;
  STROKE = 1;
  TEXT = 2;
  STROKE_COLOR = 3;
}

enum PlatformShapeBehaviorType {
  SHAPE = 0;
  CONTAINER = 1;
  ADVANCED_CONTAINER = 2;
}

message PlatformShapePropertyMapEntry {
  PlatformShapeProperty property = 1;
  GUIDPath[] nodePaths = 2;
}

message PlatformShapeDefinition {
  PlatformShapePropertyMapEntry[] propertyMapEntries = 1;
  PlatformShapeBehaviorType behaviorType = 2;
  GUIDPath thumbnailNode = 3;
}

message NodeBehaviors {
  LinkBehavior link = 1;
  AppearBehavior appear = 2;
  HoverBehavior hover = 3;
  PressBehavior press = 4;
  FocusBehavior focus = 5;
  ScrollParallaxBehavior scrollParallax = 6;
  ScrollTransformBehavior scrollTransform = 7;
  CursorBehavior cursor = 8;
  MarqueeBehavior marquee = 9;
  CodeBehavior[] code = 10;
}

message BehaviorTransition {
  EasingType easingType = 1;
  float[] easingFunction = 2;
  float transitionDuration = 3;
  float delay = 4;
  VariableData transitionDurationVar = 5;
  VariableData delayVar = 6;
}

enum AppearBehaviorTrigger {
  PAGE_LOAD = 1;
  THIS_LAYER_IN_VIEW = 2;
  OTHER_LAYER_IN_VIEW = 3;
  SCROLL_DIRECTION = 4;
}

enum RelativeDirection {
  UP = 1;
  DOWN = 2;
  LEFT = 3;
  RIGHT = 4;
}

message AppearBehavior {
  AppearBehaviorTrigger trigger = 1;
  RelativeDirection direction = 2;
  GUID otherLayer = 3;
  BehaviorTransition enterTransition = 4;
  NodeChange enterState = 5;
  BehaviorTransition exitTransition = 6;
  NodeChange exitState = 7;
  bool playsOnce = 8;
  VariableData playsOnceVar = 9;
  bool isDeleted = 10;
}

message HoverBehavior {
  BehaviorTransition transition = 1;
  NodeChange state = 2;
  bool isDeleted = 3;
}

message PressBehavior {
  BehaviorTransition transition = 1;
  NodeChange state = 2;
  bool isDeleted = 3;
}

message FocusBehavior {
  BehaviorTransition transition = 1;
  NodeChange state = 2;
  bool isDeleted = 3;
}

message ScrollParallaxBehavior {
  ScrollDirection axis = 1;
  float speed = 2;
  bool relativeToPage = 3;
  VariableData speedVar = 4;
  bool isDeleted = 5;
}

enum ScrollTransformBehaviorTrigger {
  PAGE_HEIGHT = 1;
  THIS_LAYER_IN_VIEW = 2;
  OTHER_LAYER_IN_VIEW = 3;
}

message ScrollTransformBehavior {
  ScrollTransformBehaviorTrigger trigger = 1;
  GUID otherLayer = 2;
  BehaviorTransition transition = 3;
  NodeChange fromState = 4;
  NodeChange toState = 5;
  bool playsOnce = 6;
  bool playsOnceVar = 7;
  VariableData playsOnceVar2 = 8;
  bool isDeleted = 9;
}

message CursorBehavior {
  float hotspotX = 1;
  float hotspotY = 2;
  GUID cursorGuid = 3;
  bool isDeleted = 4;
}

message MarqueeBehavior {
  RelativeDirection direction = 1;
  float speed = 2;
  bool shouldLoopInfinitely = 3;
  VariableData speedVar = 4;
  VariableData shouldLoopInfinitelyVar = 5;
  VariableData pauseOnHover = 6;
  bool isDeleted = 7;
}

message CodeBehavior {
  CodeComponentId codeComponentId = 1;
  ComponentPropAssignment[] componentPropAssignments = 2;
  bool isDeleted = 3;
}

message ClientRenderedMetadata {
  string loadID = 1;
  string trackingSessionId = 2;
  uint trackingSessionSequenceId = 3;
  string reconnectID = 4;
}

enum LinkBehaviorType {
  URL = 1;
  PAGE = 2;
}

message LinkBehavior {
  LinkBehaviorType type = 1;
  string url = 2;
  GUID page = 3;
  bool openInNewWindow = 4;
}

message VariableIdOrVariableOverrideId {
  VariableID variableId = 1;
  VariableOverrideId variableOverrideId = 2;
}

struct IndexFontVariationAxis {
  string tag;
  string name;
  float min;
  float max;
  float defaultValue;
}

struct IndexFontVariationAxisValue {
  string tag;
  float value;
}

message IndexFontStyle {
  string name = 1;
  string postscript = 2;
  float weight = 3;
  bool italic = 4;
  float stretch = 5;
  IndexFontVariationAxisValue[] variationAxisValues = 6;
}

message IndexFontFile {
  string filename = 1;
  uint version = 2;
  string family = 3;
  IndexFontStyle[] styles = 4;
  IndexFontVariationAxis[] variationAxes = 5;
  bool useFontOpticalSize = 6;
}

struct IndexFamilyRename {
  string oldFamily;
  string newFamily;
}

struct IndexStyleRename {
  string oldStyle;
  string newStyle;
}

struct IndexFamilyStylesRename {
  string familyName;
  IndexStyleRename[] styleRenames;
}

struct IndexRenames {
  IndexFamilyRename[] family;
  IndexFamilyStylesRename[] style;
}

struct IndexEmojiSequence {
  uint[] codepoints;
}

struct IndexEmojis {
  uint revision;
  uint[] sizes;
  IndexEmojiSequence[] sequences;
}

message FontIndex {
  uint schemaVersion = 1;
  IndexFontFile[] files = 2;
  IndexRenames renames = 3;
  IndexEmojis emojis = 4;
}

message SlideThemeData {
  ThemeID themeID = 1;
  string version = 2;
}

enum SlideNumber {
  NONE = 0;
  SLIDE = 1;
  SECTION = 2;
  SUBSECTION = 3;
  TOTAL_WITHIN_DECK = 4;
  TOTAL_WITHIN_SECTION = 5;
}

enum NodeChatMessageType {
  USER_MESSAGE = 0;
  ASSISTANT_MESSAGE = 1;
  TOOL_MESSAGE = 2;
  SYSTEM_MESSAGE = 3;
}

message NodeChatMessage {
  GUID id = 1;
  NodeChatMessageType type = 2;
  string userId = 3;
  string textContent = 4;
  uint sentAt = 5;
  NodeChatToolCall[] toolCalls = 6;
  NodeChatToolResult[] toolResults = 7;
  uint64 sentAt64 = 8;
}

message NodeChatToolCall {
  string toolCallId = 1;
  string toolName = 2;
  string argsJson = 3;
}

message NodeChatToolResult {
  string toolCallId = 1;
  string toolName = 2;
  string resultJson = 3;
}

message NodeChatExchange {
  GUID node = 1;
  NodeChatMessage[] messages = 2;
  bool isTyping = 3;
  FileUpdate[] fileUpdates = 4;
}

message NodeChatCompressionState {
  uint startIndex = 1;
  string summary = 2;
}

message FileUpdate {
  string name = 1;
  string contents = 2;
  bool isDeleted = 3;
}

message AIChatContentPart {
  AIChatContentPartType type = 1;
  AIChatContentPartAnyValue value = 2;
}

enum AIChatContentPartType {
  INVALID = 0;
  TEXT = 1;
  SELECTED_NODE_IDS = 2;
}

message AIChatContentPartAnyValue {
  string textValue = 1;
  string[] selectedNodeIds = 2;
}

enum AIChatMessageRole {
  USER = 0;
  ASSISTANT = 1;
  TOOL = 2;
  SYSTEM = 3;
}

message AIChatMessage {
  uint createdAtMs = 1;
  AIChatMessageRole role = 2;
  AIChatContentPart[] content = 3;
  string clientId = 4;
  uint64 createdAtMs64 = 5;
}

message AIChatThread {
  AIChatMessage[] messages = 1;
}

enum CooperTemplateType {
  CUSTOM = 0;
  TWITTER_POST = 1;
  LINKEDIN_POST = 2;
  INSTA_POST_SQUARE = 3;
  INSTA_POST_PORTRAIT = 4;
  INSTA_STORY = 5;
  INSTA_AD = 6;
  FACEBOOK_POST = 7;
  FACEBOOK_COVER_PHOTO = 8;
  FACEBOOK_EVENT_COVER = 9;
  FACEBOOK_AD_PORTRAIT = 10;
  FACEBOOK_AD_SQUARE = 11;
  PINTEREST_AD_PIN = 12;
  TWITTER_BANNER = 13;
  LINKEDIN_POST_SQUARE = 15;
  LINKEDIN_POST_PORTRAIT = 16;
  LINKEDIN_POST_LANDSCAPE = 17;
  LINKEDIN_PROFILE_BANNER = 18;
  LINKEDIN_ARTICLE_BANNER = 19;
  LINKEDIN_AD_LANDSCAPE = 20;
  LINKEDIN_AD_SQUARE = 21;
  LINKEDIN_AD_VERTICAL = 22;
  YOUTUBE_THUMBNAIL = 23;
  YOUTUBE_BANNER = 24;
  YOUTUBE_AD = 25;
  TWITCH_BANNER = 26;
  GOOGLE_LEADERBOARD_AD = 27;
  GOOGLE_LARGE_AD = 28;
  GOOGLE_MED_AD = 29;
  GOOGLE_MOBILE_BANNER_AD = 30;
  GOOGLE_SKYSCRAPER_AD = 31;
  CARD_HORIZONTAL = 32;
  CARD_VERTICAL = 33;
  PRINT_US_LETTER = 34;
  POSTER = 35;
  BANNER_STANDARD = 36;
  BANNER_WIDE = 37;
  BANNER_ULTRAWIDE = 38;
  NAME_TAG_PORTRAIT = 39;
  NAME_TAG_LANDSCAPE = 40;
  INSTA_REEL_COVER = 41;
  ZOOM_BACKGROUND = 42;
  TIKTOK_POST = 43;
  INSTA_AD_PORTRAIT = 44;
  INSTA_POST_TALL_PORTRAIT = 45;
  TWITTER_POST_SQUARE = 46;
  FACEBOOK_POST_SQUARE = 47;
  FACEBOOK_POST_PORTRAIT = 48;
  FACEBOOK_STORY = 49;
  GOOGLE_SQUARE_AD = 50;
  GOOGLE_SMALL_SQUARE_AD = 51;
  GOOGLE_NARROW_SKYSCRAPER_AD = 52;
  GOOGLE_HALF_PAGE_AD = 53;
  GOOGLE_LARGE_LEADERBOARD_AD = 54;
  GOOGLE_BILLBOARD_AD = 55;
  GOOGLE_BANNER_LEADERBOARD_AD = 56;
  GOOGLE_TOP_BANNER_AD = 57;
  GOOGLE_MOBILE_LEADERBOARD_BANNER_AD = 58;
  GOOGLE_LARGE_MOBILE_BANNER_AD = 59;
  GOOGLE_MOBILE_INTERSTITIAL_AD = 60;
  GOOGLE_MOBILE_MED_RECTANGLE_AD = 61;
  PINTEREST_PIN_STANDARD = 62;
  PINTEREST_PIN_SQUARE = 63;
  PINTEREST_AD_SQUARE = 64;
  PRINT_A4 = 65;
}

message CooperTemplateData {
  CooperTemplateType type = 1;
}

message ImageImportMap {
  ImageImport[] imports = 1;
}

message ImageImport {
  string name = 1;
  Image image = 2;
}

enum InterpolationType {
  HOLD = 0;
  BEZIER = 1;
  SPRING = 2;
}

message BezierHandles {
  float p1x = 1;
  float p1y = 2;
  float p2x = 3;
  float p2y = 4;
}

enum KeyframeOperation {
  SET = 0;
  SCALE = 1;
  OFFSET = 2;
}

enum TimelinePositionType {
  ABSOLUTE = 0;
  RELATIVE = 1;
}

enum PlaybackStyle {
  ONCE = 0;
  LOOP = 1;
  BOOMERANG = 2;
}
`);Ln(Vn);function Hn(e){if(e.length%2!=0)throw Error(`Hex string must contain an even number of characters`);let t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){let r=Number.parseInt(e.slice(n*2,n*2+2),16);if(Number.isNaN(r))throw Error(`Hex string contains invalid characters`);t[n]=r}return t}function Un(e){let t=``;for(let n of e)t+=n.toString(16).padStart(2,`0`);return t}var Wn=null;async function Gn(){Wn||=dn(Vn)}function Kn(){if(!Wn)throw Error(`Codec not initialized`);return Wn}function qn(){return hn(Vn)}function Jn(e){let t={};for(let n of e.split(`,`).map(e=>e.trim())){let e=n.indexOf(`=`);e!==-1&&(t[n.slice(0,e).trim()]=n.slice(e+1).trim())}return t}function Yn(e){return Object.entries(e).map(([e,t])=>`${e}=${t}`).join(`, `)}function P(e){return`${e.sessionID}:${e.localID}`}function F(e){let t=e.match(/^(?:VariableID:|VariableCollectionId:)?(\d+):(\d+)$/);if(t)return{sessionID:Number.parseInt(t[1],10),localID:Number.parseInt(t[2],10)};let[n,r]=e.split(`:`);return{sessionID:Number.parseInt(n,10),localID:Number.parseInt(r,10)}}var Xn=He;function Zn(e){return Object.keys(e).sort((e,t)=>Number(e)-Number(t)).map(t=>e[Number(t)]).map(e=>e.toString(16).padStart(2,`0`)).join(``)}function Qn(e){if(e)return{m00:e.m00,m01:e.m01,m02:e.m02,m10:e.m10,m11:e.m11,m12:e.m12}}var $n=null;function er(e){$n=e}function tr(e){let t=e.colorVar?.value?.alias;if(!(!t||!$n))return $n(t)??void 0}function nr(e){return{type:e.type,color:Xn(tr(e)??e.color),opacity:e.opacity??1,visible:e.visible??!0,blendMode:e.blendMode??`NORMAL`}}function rr(e,t){!t.type.startsWith(`GRADIENT`)||!t.stops||(e.gradientStops=t.stops.map(e=>({color:Xn(e.color),position:e.position})),t.transform&&(e.gradientTransform=Qn(t.transform)))}function ir(e,t){if(t.type===`IMAGE`){if(t.image&&typeof t.image==`object`){let n=t.image;typeof n.hash==`object`?e.imageHash=Zn(n.hash):typeof n.hash==`string`&&(e.imageHash=n.hash)}e.imageScaleMode=t.imageScaleMode??`FILL`,t.transform&&(e.imageTransform=Qn(t.transform))}}function ar(e,t){t.sourceNodeId&&(e.sourceNodeId=P(t.sourceNodeId)),t.spacing&&(e.spacing=t.spacing),t.patternSpacing&&(e.patternSpacing=t.patternSpacing),t.patternTileType&&(e.patternTileType=t.patternTileType),t.verticalAlignment&&(e.verticalAlignment=t.verticalAlignment),t.horizontalAlignment&&(e.horizontalAlignment=t.horizontalAlignment),t.noiseType&&(e.noiseType=t.noiseType),t.density!==void 0&&(e.density=t.density),t.noiseSize&&(e.noiseSize=t.noiseSize),t.customEffectId?.guid&&(e.customEffectId=P(t.customEffectId.guid))}function or(e){return e?e.map(e=>{let t=nr(e);return rr(t,e),ir(t,e),ar(t,e),t}):[]}function sr(e,t,n,r,i,a){if(!e)return[];let o=`CENTER`;return n===`INSIDE`?o=`INSIDE`:n===`OUTSIDE`&&(o=`OUTSIDE`),e.map(e=>({color:Xn(tr(e)??e.color),weight:t??1,opacity:e.opacity??1,visible:e.visible??!0,align:o,cap:r??`NONE`,join:i??`MITER`,dashPattern:a??[]}))}function cr(e){return e?e.map(e=>({type:e.type,color:Xn(e.color),offset:e.offset??{x:0,y:0},radius:e.radius??0,spread:e.spread??0,visible:e.visible??!0,blendMode:e.blendMode??`NORMAL`,showShadowBehindNode:e.showShadowBehindNode??!0})):[]}var lr=[[`fontVariantCommonLigatures`,`LIGA`],[`fontVariantContextualLigatures`,`CALT`]];function ur(e,t,n){let r=t.toUpperCase();e.some(e=>e.tag===r)||e.push({tag:r,enabled:n})}function dr(e){let t=[];for(let[n,r]of lr){let i=e[n];i!==void 0&&ur(t,r,i)}for(let n of e.toggledOnOTFeatures??[])ur(t,n,!0);for(let n of e.toggledOffOTFeatures??[])ur(t,n,!1);return t}function fr(e,t){let n=[],r=[];for(let i of t){let t=i.tag.toUpperCase();t===`LIGA`?e.fontVariantCommonLigatures=i.enabled:t===`CALT`?e.fontVariantContextualLigatures=i.enabled:i.enabled?n.push(t):r.push(t)}n.length>0&&(e.toggledOnOTFeatures=n),r.length>0&&(e.toggledOffOTFeatures=r)}function pr(e){return String.fromCharCode(e>>24&255,e>>16&255,e>>8&255,e&255)}function mr(e){if(e.length===4)return(e.charCodeAt(0)<<24|e.charCodeAt(1)<<16|e.charCodeAt(2)<<8|e.charCodeAt(3))>>>0}function hr(e){let t=[];for(let n of e.fontVariations??[]){if(typeof n.value!=`number`)continue;let e=typeof n.axisTag==`number`?pr(n.axisTag):n.axisName||``;e&&t.push({axis:e,value:n.value})}return t}function gr(e){switch(e){case`UNDERLINE`:return`UNDERLINE`;case`STRIKETHROUGH`:return`STRIKETHROUGH`;default:return`NONE`}}function _r(e,t){return e?e.units===`PIXELS`?e.value:e.units===`PERCENT`?e.value/100*(t??14):e.units===`RAW`?e.value*(t??14):null:null}function vr(e,t){return e?e.units===`PIXELS`?e.value:e.units===`PERCENT`?e.value/100*(t??14):e.value:0}function yr(e,t){let n={};e.fontName&&(n.fontFamily=e.fontName.family,n.fontWeight=m(e.fontName.style),n.italic=e.fontName.style.toLowerCase().includes(`italic`)),e.fontSize!==void 0&&(n.fontSize=e.fontSize);let r=hr(e);r.length>0&&(n.fontVariations=r);let i=dr(e);if(i.length>0&&(n.fontFeatures=i),e.letterSpacing&&(n.letterSpacing=vr(e.letterSpacing,e.fontSize??t)),e.lineHeight){let r=_r(e.lineHeight,e.fontSize??t);r!=null&&(n.lineHeight=r)}let a=e.textDecoration;if(a&&(n.textDecoration=gr(a)),e.fillPaints){let t=or(e.fillPaints);t.length>0&&(n.fills=t)}return n}function br(e,t){let n=new Map;for(let r of e){let e=r.styleID;if(e===void 0)continue;let i=yr(r,t);Object.keys(i).length>0&&n.set(e,i)}return n}function xr(e,t){let n=[],r=e[0],i=0;for(let a=1;a<=e.length;a++)if(a===e.length||e[a]!==r){if(r!==0){let e=t.get(r);e&&n.push({start:i,length:a-i,style:e})}a<e.length&&(r=e[a],i=a)}return n}function Sr(e){let t=e.textData;if(!t?.characterStyleIDs||!t.styleOverrideTable)return[];let n=t.characterStyleIDs;if(n.length===0||t.styleOverrideTable.length===0)return[];let r=br(t.styleOverrideTable,e.fontSize);return r.size===0?[]:xr(n,r)}function Cr(e,t){return(e?.glyphs??[]).map(e=>e.commandsBlob===void 0?null:{commandsBlob:t[e.commandsBlob],x:e.position.x,y:e.position.y,fontSize:e.fontSize}).filter(e=>!!e)}var wr=`open-pencil`,Tr=`textDirection`,Er=`layoutDirection`,Dr=`nodeType`,Or=`boundVariables`;function kr(e,t,n){let r=e.pluginData.filter(e=>!(e.pluginId===`open-pencil`&&e.key===t));r.push({pluginId:wr,key:t,value:n}),e.pluginData=r}function Ar(e){if(!e)return{};try{let t=JSON.parse(e);return!t||typeof t!=`object`||Array.isArray(t)?{}:Object.fromEntries(Object.entries(t).filter(e=>typeof e[0]==`string`&&typeof e[1]==`string`))}catch{return{}}}function jr(e){let t=Ar(Nr(e,Or));return e.fillPaints?.forEach((e,n)=>{e.colorVariableBinding&&(t[`fills/${n}/color`]=P(e.colorVariableBinding.variableID))}),e.strokePaints?.forEach((e,n)=>{e.colorVariableBinding&&(t[`strokes/${n}/color`]=P(e.colorVariableBinding.variableID))}),t}function Mr(e){return(e.pluginData??[]).map(e=>({pluginId:e.pluginID,key:e.key,value:e.value}))}function Nr(e,t){return e.pluginData?.find(e=>e.pluginID===`open-pencil`&&e.key===t)?.value??null}function Pr(e){return(e.pluginRelaunchData??[]).map(e=>({pluginId:e.pluginID,command:e.command,message:e.message,isDeleted:e.isDeleted}))}function Fr(e){return e.map(e=>({pluginID:e.pluginId,key:e.key,value:e.value}))}function Ir(e){return e.map(e=>({pluginID:e.pluginId,command:e.command,message:e.message,isDeleted:e.isDeleted}))}function Lr(e,t){let n=e.vectorData;if(n?.vectorNetworkBlob===void 0)return null;let r=n.vectorNetworkBlob;if(r<0||r>=t.length)return null;try{let i=x(t[r],n.styleOverrideTable),a=n.normalizedSize,o=e.size?.x??0,s=e.size?.y??0;if(a&&o>0&&s>0&&(a.x!==o||a.y!==s)){let e=o/a.x,t=s/a.y;for(let n of i.vertices)n.x*=e,n.y*=t;for(let n of i.segments)n.tangentStart={x:n.tangentStart.x*e,y:n.tangentStart.y*t},n.tangentEnd={x:n.tangentEnd.x*e,y:n.tangentEnd.y*t}}return i}catch{return null}}function Rr(e,t){if(!e||e.length===0)return[];let n=[];for(let r of e){if(r.commandsBlob===void 0||r.commandsBlob<0||r.commandsBlob>=t.length)continue;let e=t[r.commandsBlob];e.length!==0&&n.push({windingRule:r.windingRule===`EVENODD`?`EVENODD`:`NONZERO`,commandsBlob:e})}return n}var zr={cornerRadius:`CORNER_RADIUS`,topLeftRadius:`RECTANGLE_TOP_LEFT_CORNER_RADIUS`,topRightRadius:`RECTANGLE_TOP_RIGHT_CORNER_RADIUS`,bottomLeftRadius:`RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS`,bottomRightRadius:`RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS`,strokeWeight:`STROKE_WEIGHT`,itemSpacing:`STACK_SPACING`,paddingLeft:`STACK_PADDING_LEFT`,paddingTop:`STACK_PADDING_TOP`,paddingRight:`STACK_PADDING_RIGHT`,paddingBottom:`STACK_PADDING_BOTTOM`,counterAxisSpacing:`STACK_COUNTER_SPACING`,visible:`VISIBLE`,opacity:`OPACITY`,width:`WIDTH`,height:`HEIGHT`,fontSize:`FONT_SIZE`,letterSpacing:`LETTER_SPACING`,lineHeight:`LINE_HEIGHT`},Br=Object.fromEntries(Object.entries(zr).map(([e,t])=>[t,e])),Vr={DOCUMENT:`DOCUMENT`,VARIABLE:`VARIABLE`,CANVAS:`CANVAS`,FRAME:`FRAME`,RECTANGLE:`RECTANGLE`,ROUNDED_RECTANGLE:`ROUNDED_RECTANGLE`,ELLIPSE:`ELLIPSE`,TEXT:`TEXT`,LINE:`LINE`,STAR:`STAR`,REGULAR_POLYGON:`POLYGON`,VECTOR:`VECTOR`,BOOLEAN_OPERATION:`BOOLEAN_OPERATION`,GROUP:`GROUP`,SECTION:`SECTION`,COMPONENT:`COMPONENT`,COMPONENT_SET:`COMPONENT_SET`,INSTANCE:`INSTANCE`,SYMBOL:`COMPONENT`,CONNECTOR:`CONNECTOR`,SHAPE_WITH_TEXT:`SHAPE_WITH_TEXT`};function Hr(e){return e?Vr[e]??`RECTANGLE`:`RECTANGLE`}function Ur(e){if(e.type===`BOOLEAN_OPERATION`)switch(e.booleanOperation){case`SUBTRACT`:case`INTERSECT`:case`EXCLUDE`:return e.booleanOperation;default:return`UNION`}}function Wr(e){switch(e){case`HORIZONTAL`:return`HORIZONTAL`;case`VERTICAL`:return`VERTICAL`;default:return`NONE`}}function Gr(e){switch(e){case`RESIZE_TO_FIT`:case`RESIZE_TO_FIT_WITH_IMPLICIT_SIZE`:return`HUG`;case`FILL`:return`FILL`;default:return`FIXED`}}function Kr(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`SPACE_BETWEEN`:case`SPACE_EVENLY`:return`SPACE_BETWEEN`;default:return`MIN`}}function qr(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`BASELINE`:return`BASELINE`;default:return`MIN`}}function Jr(e){switch(e){case`MIN`:return`MIN`;case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`BASELINE`:return`BASELINE`;default:return`AUTO`}}function Yr(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`SCALE`:return`SCALE`;default:return`MIN`}}function Xr(e){return e?{startingAngle:e.startingAngle??0,endingAngle:e.endingAngle??2*Math.PI,innerRadius:e.innerRadius??0}:null}function Zr(e){let t=e.size?.x??100,n=e.size?.y??100,r=e.transform?.m02??0,i=e.transform?.m12??0,a=0,o=!1;if(e.transform){let s=e.transform;s.m00*s.m11-s.m01*s.m10<0&&(o=!0);let c=o?-1:1;a=Math.atan2(s.m10*c,s.m00*c)*(180/Math.PI);let l=[{x:0,y:0},{x:t,y:0},{x:0,y:n},{x:t,y:n}].map(e=>({x:s.m00*e.x+s.m01*e.y+s.m02,y:s.m10*e.x+s.m11*e.y+s.m12}));r=Math.min(...l.map(e=>e.x)),i=Math.min(...l.map(e=>e.y))}return{x:r,y:i,width:t,height:n,rotation:a,flipX:o,flipY:!1}}function Qr(e){return{cornerRadius:e.cornerRadius??0,topLeftRadius:e.rectangleTopLeftCornerRadius??e.cornerRadius??0,topRightRadius:e.rectangleTopRightCornerRadius??e.cornerRadius??0,bottomRightRadius:e.rectangleBottomRightCornerRadius??e.cornerRadius??0,bottomLeftRadius:e.rectangleBottomLeftCornerRadius??e.cornerRadius??0,independentCorners:e.rectangleCornerRadiiIndependent??!1,cornerSmoothing:e.cornerSmoothing??0}}function $r(e){let t=e.derivedTextData?.baselines?.[0]?.lineHeight;return t!==void 0&&Number.isFinite(t)?t:_r(e.lineHeight,e.fontSize)}function ei(e,t){return{text:e.textData?.characters??``,fontSize:e.fontSize??14,fontFamily:e.fontName?.family??`Inter`,fontWeight:m(e.fontName?.style??``),italic:e.fontName?.style.toLowerCase().includes(`italic`)??!1,textAlignHorizontal:e.textAlignHorizontal??`LEFT`,textAlignVertical:e.textAlignVertical??`TOP`,textAutoResize:e.textAutoResize??`NONE`,textCase:e.textCase??`ORIGINAL`,textDecoration:gr(e.textDecoration),lineHeight:$r(e),letterSpacing:vr(e.letterSpacing,e.fontSize),maxLines:e.maxLines??null,styleRuns:Sr(e),fontVariations:hr(e),fontFeatures:dr(e),textTruncation:e.textTruncation===`ENDING`?`ENDING`:`DISABLED`,textDirection:Nr(e,`textDirection`)||`AUTO`,figmaDerivedLayout:e.derivedTextData?.layoutSize?{width:e.derivedTextData.layoutSize.x,height:e.derivedTextData.layoutSize.y}:null,figmaDerivedTextGlyphs:Cr(e.derivedTextData,t)}}function ti(e){return{paddingTop:e.stackVerticalPadding??e.stackPadding??0,paddingBottom:e.stackPaddingBottom??e.stackVerticalPadding??e.stackPadding??0,paddingLeft:e.stackHorizontalPadding??e.stackPadding??0,paddingRight:e.stackPaddingRight??e.stackHorizontalPadding??e.stackPadding??0}}function ni(e,t,n,r){let i=n===`HUG`||r===`HUG`,a=(e.fillPaints?.some(e=>e.visible!==!1)??!1)||(e.strokePaints?.some(e=>e.visible!==!1)??!1);if(!(t===`NONE`||!i||!a))return{x:e.transform?.m02??0,y:e.transform?.m12??0,width:e.size?.x??100,height:e.size?.y??100}}function ri(e){let t=Wr(e.stackMode),n=Gr(e.stackPrimarySizing),r=Gr(e.stackCounterSizing),i=ni(e,t,n,r);return{layoutMode:t,itemSpacing:e.stackSpacing??0,...ti(e),primaryAxisSizing:n,counterAxisSizing:r,primaryAxisAlign:Kr(e.stackPrimaryAlignItems??e.stackJustify),counterAxisAlign:qr(e.stackCounterAlignItems??e.stackCounterAlign),layoutWrap:e.stackWrap===`WRAP`?`WRAP`:`NO_WRAP`,counterAxisSpacing:e.stackCounterSpacing??0,layoutPositioning:e.stackPositioning===`ABSOLUTE`?`ABSOLUTE`:`AUTO`,layoutGrow:e.stackChildPrimaryGrow??0,layoutAlignSelf:Jr(e.stackChildAlignSelf),counterAxisAlignContent:e.stackCounterAlignContent===`SPACE_BETWEEN`?`SPACE_BETWEEN`:`AUTO`,itemReverseZIndex:e.stackReverseZIndex??!1,strokesIncludedInLayout:e.strokesIncludedInLayout??!1,layoutDirection:Nr(e,`layoutDirection`)||`AUTO`,...i?{figmaDerivedLayout:i}:{}}}function ii(e,t){return e.strokeCap??t?.vertices.find(e=>e.strokeCap)?.strokeCap??`NONE`}function ai(e,t){return e.strokeJoin??t?.vertices.find(e=>e.strokeJoin)?.strokeJoin??`MITER`}function oi(e,t){let n=Lr(e,t),r=ii(e,n),i=ai(e,n);return{vectorNetwork:n,fillGeometry:Rr(e.fillGeometry,t),strokeGeometry:Rr(e.strokeGeometry,t),arcData:Xr(e.arcData),strokeCap:r,strokeJoin:i,dashPattern:e.dashPattern??[],borderTopWeight:e.borderTopWeight??0,borderRightWeight:e.borderRightWeight??0,borderBottomWeight:e.borderBottomWeight??0,borderLeftWeight:e.borderLeftWeight??0,independentStrokeWeights:e.borderStrokeWeightsIndependent??!1,strokeMiterLimit:4}}function si(e,t){let n=Hr(e.type);(n===`FRAME`&&vi(e)||Nr(e,`nodeType`)===`COMPONENT_SET`)&&(n=`COMPONENT_SET`);let r=oi(e,t);return{nodeType:n,name:e.name??n,source:bi(e,t),...Zr(e),opacity:e.opacity??1,visible:e.visible??!0,locked:e.locked??!1,blendMode:e.blendMode??`PASS_THROUGH`,booleanOperation:Ur(e),fills:or(e.fillPaints),strokes:sr(e.strokePaints,e.strokeWeight,e.strokeAlign,r.strokeCap,r.strokeJoin,e.dashPattern??[]),effects:cr(e.effects),...Qr(e),...ei(e,t),horizontalConstraint:Yr(e.horizontalConstraint),verticalConstraint:Yr(e.verticalConstraint),...ri(e),...r,minWidth:e.minWidth??null,maxWidth:e.maxWidth??null,minHeight:e.minHeight??null,maxHeight:e.maxHeight??null,isMask:e.isMask??!1,maskType:e.maskType??`ALPHA`,expanded:!0,autoRename:e.autoRename??!0,boundVariables:jr(e),pluginData:Mr(e),pluginRelaunchData:Pr(e),clipsContent:e.frameMaskDisabled===!1&&e.resizeToFit!==!0,componentId:Ei(e),componentPropertyDefinitions:ui(e),componentPropertyValues:fi(e),..._i(e)}}var ci={VARIANT:`VARIANT`,TEXT:`TEXT`,BOOL:`BOOLEAN`,BOOLEAN:`BOOLEAN`,INSTANCE_SWAP:`INSTANCE_SWAP`};function li(e){if(!e||typeof e!=`object`)return``;let t=e;return typeof t.boolValue==`boolean`?String(t.boolValue):typeof t.textValue==`string`?t.textValue:t.textValue&&typeof t.textValue==`object`?t.textValue.characters??``:t.guidValue?P(t.guidValue):``}function ui(e){let t=e.componentPropDefs;if(!t?.length)return[];let n=[];for(let e of t){if(!e.id||!e.name)continue;let t=ci[e.type??``]??`VARIANT`;n.push({id:P(e.id),name:e.name,type:t,defaultValue:li(e.initialValue),variantOptions:void 0})}return n}function di(e){let t=e.variantPropSpecs;return t?.length?t.filter(e=>!!e.propDefId).map(e=>({propDefId:P(e.propDefId),value:e.value??``})):[]}function fi(e){let t=di(e),n=new Map(ui(e).map(e=>[e.id,e.name]));if(t.length>0&&n.size>0){let e={};for(let r of t)e[n.get(r.propDefId)??r.propDefId]=r.value;return e}let r=e.name;return r?.includes(`=`)?Jn(r):{}}function pi(e){if(!e||typeof e!=`object`)return null;let t=e;return typeof t.sessionID!=`number`||typeof t.localID!=`number`?null:P({sessionID:t.sessionID,localID:t.localID})}function mi(e){return typeof e==`string`?e:null}function hi(e){return typeof e==`string`?e:``}function gi(e){return typeof e==`boolean`?e:!1}function _i(e){let t=e.symbolLinks??[];return{componentKey:mi(e.componentKey),sourceLibraryKey:mi(e.sourceLibraryKey),publishId:pi(e.publishID),overrideKey:pi(e.overrideKey),sharedSymbolVersion:mi(e.sharedSymbolVersion),publishedVersion:mi(e.publishedVersion),isPublishable:gi(e.isPublishable),isSymbolPublishable:gi(e.isSymbolPublishable),symbolDescription:hi(e.symbolDescription),symbolLinks:t.filter(e=>typeof e.uri==`string`).map(e=>({uri:e.uri,displayName:e.displayName,displayText:e.displayText})),variantPropSpecs:di(e)}}function vi(e){let t=e.componentPropDefs;return t?.length?t.some(e=>e.type===`VARIANT`):!1}function yi(e){return{stackMode:e.stackMode,stackSpacing:e.stackSpacing,stackPadding:e.stackPadding,stackPaddingRight:e.stackPaddingRight,stackPaddingBottom:e.stackPaddingBottom,stackCounterAlign:e.stackCounterAlign,stackJustify:e.stackJustify,stackCounterAlignItems:e.stackCounterAlignItems,stackPrimaryAlignItems:e.stackPrimaryAlignItems,stackPrimarySizing:e.stackPrimarySizing,stackCounterSizing:e.stackCounterSizing,stackVerticalPadding:e.stackVerticalPadding,stackHorizontalPadding:e.stackHorizontalPadding,stackWrap:e.stackWrap,stackPositioning:e.stackPositioning,stackChildPrimaryGrow:e.stackChildPrimaryGrow,stackChildAlignSelf:e.stackChildAlignSelf,stackCounterSpacing:e.stackCounterSpacing,bordersTakeSpace:e.bordersTakeSpace,stackReverseZIndex:e.stackReverseZIndex}}function bi(e,t){return{format:`fig`,id:e.guid?P(e.guid):null,orderKey:e.parentIndex?.position??null,fig:{...wi(e,t),...Ti(e,t),layout:yi(e)}}}function xi(e,t,n){let r=t.stackMode,i=r===`HORIZONTAL`,a=r===`VERTICAL`;e.sort((e,t)=>{let r=n.get(e)?.parentIndex?.position??``,o=n.get(t)?.parentIndex?.position??``;if(r<o)return-1;if(r>o)return 1;if(i||a){let r=i?`m02`:`m12`,a=n.get(e)?.transform?.[r]??0,o=n.get(t)?.transform?.[r]??0;if(a!==o)return a-o}return 0})}function Si(e,t){if(e instanceof Uint8Array)return e;if(Array.isArray(e))return e.map(e=>Si(e,t));if(!e||typeof e!=`object`)return e;let n={};for(let[r,i]of Object.entries(e))if((r===`commandsBlob`||r===`vectorNetworkBlob`)&&typeof i==`number`){let e=t[i];e==null?n[r]=i:n[r]={__openPencilFigmaBlob:e instanceof Uint8Array?e:new Uint8Array(Object.values(e))}}else n[r]=Si(i,t);return n}var Ci=`styleIdForFill.styleIdForStrokeFill.styleIdForText.styleIdForEffect.styleIdForGrid.backgroundPaints.layoutGrids.exportSettings.componentPropDefs.componentPropRefs.variantPropSpecs.stateGroupPropertyValueOrders.isStateGroup.version.sourceLibraryKey.userFacingVersion.description.key.sortPosition.detachedSymbolId.documentColorProfile.variableConsumptionMap.variableModeBySetMap.parameterConsumptionMap.editInfo.backgroundColor.pageType.isPageDivider.guides.handoffStatusMap.annotationCategories.miterLimit.mask.maskType.maskIsOutline.strokeWeight.strokeJoin.borderStrokeWeightsIndependent.borderTopWeight.borderRightWeight.borderBottomWeight.borderLeftWeight.minSize.maxSize.targetAspectRatio.gridRows.gridColumns.gridRowAnchor.gridColumnAnchor.gridColumnsSizing.gridRowsSizing.gridChildVerticalAlign.gridChildHorizontalAlign.textAutoResize.textData.lineHeight.fontName.fontSize.letterSpacing.textTracking.fontVersion.textUserLayoutVersion.textExplicitLayoutVersion.fontVariations.fontVariantCommonLigatures.fontVariantContextualLigatures.toggledOnOTFeatures.toggledOffOTFeatures.leadingTrim.textDecorationFillPaints.textUnderlineOffset.textDecorationThickness.textDecorationStyle.semanticWeight.semanticItalic.maxLines.textPathStart.derivedTextData.fillPaints.strokePaints.effects.sectionStatusInfo.prototypeStartNodeID.prototypeInteractions.transitionInfo.codeSyntax.lockMode.slideThemeMap.isSoftDeleted.brushType.scatterStrokeSettings.vectorOperationVersion.vectorData.fillGeometry.strokeGeometry`.split(`.`);function wi(e,t){let n={};for(let r of Ci){let i=e[r];i!==void 0&&(n[r]=Si(i,t))}return{rawSize:e.size?{...e.size}:null,rawTransform:e.transform?{...e.transform}:null,rawNodeFields:n}}function Ti(e,t){let n=e.symbolData;return{symbolOverrides:Si(n?.symbolOverrides??[],t),componentPropAssignments:Si(e.componentPropAssignments??[],t),derivedSymbolData:Si(e.derivedSymbolData??[],t),derivedSymbolDataLayoutVersion:typeof e.derivedSymbolDataLayoutVersion==`number`?e.derivedSymbolDataLayoutVersion:null,uniformScaleFactor:typeof n?.uniformScaleFactor==`number`?n.uniformScaleFactor:null}}function Ei(e){let t=e.symbolData;return t?.symbolID?P(t.symbolID):``}function Di(e){let t=new Map;for(let n of e.graph.getAllNodes()){if(n.type!==`INSTANCE`||!n.componentId||e.activeNodeIds&&!e.activeNodeIds.has(n.id))continue;let r=t.get(n.componentId);r?r.push(n.id):t.set(n.componentId,[n.id])}return t}function Oi(e,t,n){let r=n.get(e);if(r)return r;let i=[],a=new Set,o=e=>{if(!a.has(e)){a.add(e),i.push(e);for(let n of t.get(e)??[])o(n)}};return o(e),n.set(e,i),i}var ki=20,Ai=new WeakMap,ji=new WeakMap,Mi=new WeakMap,Ni=new WeakMap;function Pi(e){function t(n,r=0){let i=e.preComputedRoot.get(n);if(i!==void 0)return i;if(r>ki)return n;let a=e.graph.getNode(n);if(a?.componentId&&a.componentId!==n){let i=t(a.componentId,r+1);return e.preComputedRoot.set(n,i),i}return e.preComputedRoot.set(n,n),n}for(let n of e.graph.getAllNodes())n.componentId&&t(n.id)}function I(e,t,n=0){let r=e.componentIdRoot.get(t);if(r!==void 0)return r;if(n>ki)return e.componentIdRoot.set(t,t),t;let i=e.graph.getNode(t);if(i?.componentId){let r=I(e,i.componentId,n+1);return e.componentIdRoot.set(t,r),r}let a=e.nodeIdToGuid.get(t);if(a){let r=e.changeMap.get(a)?.symbolData?.symbolID;if(r){let i=e.guidToNodeId.get(P(r));if(i&&i!==t){let r=I(e,i,n+1);return e.componentIdRoot.set(t,r),r}}}return e.componentIdRoot.set(t,t),t}function Fi(e){let t=new Map;for(let[n,r]of e.changeMap){let e=r.parentIndex?.guid?P(r.parentIndex.guid):null,i=r.symbolData?.symbolID?P(r.symbolData.symbolID):null;if(!e||!i)continue;let a=`${e}\0${i}`,o=t.get(a);o?o.push(n):t.set(a,[n])}for(let n of t.values())n.sort((t,n)=>{let r=e.changeMap.get(t),i=e.changeMap.get(n);return(r?.transform?.m12??0)-(i?.transform?.m12??0)||(r?.transform?.m02??0)-(i?.transform?.m02??0)});return t}function Ii(e){let t=ji.get(e);if(t)return t;let n=Fi(e);return ji.set(e,n),n}function Li(e,t){let n=Ai.get(e);if(n||(n=new Map,Ai.set(e,n)),n.has(t))return n.get(t)??null;let r=e.changeMap.get(t),i=r?.parentIndex?.guid?P(r.parentIndex.guid):null,a=r?.symbolData?.symbolID?P(r.symbolData.symbolID):null;if(!r||!i||!a)return n.set(t,null),null;let o=(Ii(e).get(`${i}\0${a}`)??[]).indexOf(t),s=o===-1?null:o;return n.set(t,s),s}function Ri(e,t,n,r){if(!n||!r)return null;let i=null,a=0,o=t=>{if(a>1)return;let s=e.graph.getNode(t);if(s){s.name===n&&s.type===r&&(a++,i=t);for(let e of s.childIds)o(e)}};return o(t),a===1?i:null}function zi(e,t,n,r){let i=Li(e,r);if(i==null)return null;let a=e.preComputedRoot.get(n)??I(e,n),o=Mi.get(e);o||(o=new Map,Mi.set(e,o));let s=`${t}\0${a}`,c=o.get(s);if(!c){c=[];let n=t=>{let r=e.graph.getNode(t);if(r){r.componentId&&(e.preComputedRoot.get(r.componentId)??I(e,r.componentId))===a&&c?.push(t);for(let e of r.childIds)n(e)}};n(t),c.sort((t,n)=>{let r=e.graph.getNode(t),i=e.graph.getNode(n);return(r?.y??0)-(i?.y??0)||(r?.x??0)-(i?.x??0)}),o.set(s,c)}return c[i]??null}function Bi(e,t,n){let r=Ni.get(e);r||(r=new Map,Ni.set(e,r));let i=`${t}\0${n}`;if(r.has(i))return r.get(i)??null;let a=e.graph.getNode(t);if(!a)return null;for(let t of a.childIds)if(e.graph.getNode(t)?.componentId===n)return r.set(i,t),t;let o=e.preComputedRoot.get(n)??I(e,n);if(o){let t=null,n=!1;for(let r of a.childIds){let i=e.graph.getNode(r);if(i?.componentId&&(e.preComputedRoot.get(i.componentId)??I(e,i.componentId))===o){if(t){n=!0;break}t=r}}if(t&&!n)return r.set(i,t),t}for(let t of a.childIds){let a=Bi(e,t,n);if(a)return r.set(i,a),a}return null}function Vi(e,t,n,r,i){return r?e.graph.getNode(t)?.componentId===r?t:Bi(e,t,r)??zi(e,t,r,n)??Ri(e,t,i?.name,i?.type):Ri(e,t,i?.name,i?.type)}function Hi(e,t,n){let r=t;for(let t=0;t<n.length;t++){let i=P(n[t]),a=e.overrideKeyToGuid.get(i)??i,o=e.changeMap.get(a),s=o?.symbolData?.symbolID?P(o.symbolData.symbolID):null,c=e.guidToNodeId.get(a)??(s?e.guidToNodeId.get(s):void 0),l=Vi(e,r,a,c,o);if(l){r=l;continue}let u=e.graph.getNode(r);if(u?.childIds.length===1){r=u.childIds[0],t--;continue}return null}return r}function Ui(e,t){let n=[],r=t=>{let i=e.graph.getNode(t);if(i){i.strokes.length>0&&n.push(k(i.strokes));for(let e of i.childIds)r(e)}};return r(t),n}function Wi(e,t,n){let r=0,i=t=>{let a=e.graph.getNode(t);if(a){a.strokes.length>0&&(r<n.length&&e.graph.preserveSourceMetadataDuring(()=>{e.graph.updateNode(t,{strokes:k(n[r])})}),r++);for(let e of a.childIds)i(e)}};i(t)}function Gi(e,t,n){let r=e.graph.getNode(t);if(r?.type!==`INSTANCE`)return;let i=Ui(e,t),a=r.componentId?I(e,r.componentId):void 0,o=a?e.graph.getNode(a):void 0;for(let t of Array.from(r.childIds))e.graph.deleteNode(t);let s=e.graph.getNode(n),c={componentId:n};s?.name&&o?.name&&r.name===o.name&&(c.name=s.name),e.graph.preserveSourceMetadataDuring(()=>e.graph.updateNode(t,c)),s&&s.childIds.length>0&&(e.graph.populateInstanceChildren(t,n),Wi(e,t,i)),e.swappedInstances.add(t),e.componentIdRoot.clear(),Mi.delete(e),Ni.delete(e)}var Ki={text:`text`,visible:`visible`,opacity:`opacity`,fills:`fills`,strokes:`strokes`,effects:`effects`,styleRuns:`styleRuns`,layoutGrow:`layoutGrow`,textAutoResize:`textAutoResize`,locked:`locked`,x:`x`,y:`y`,width:`width`,height:`height`,figmaDerivedLayout:`figmaDerivedLayout`,fontSize:`fontSize`,lineHeight:`lineHeight`,letterSpacing:`letterSpacing`,fillGeometry:`fillGeometry`,strokeGeometry:`strokeGeometry`};function qi(e,t,n){let r=e.get(t);r?r.add(n):e.set(t,new Set([n]))}function Ji(e,t,n){for(let r of Object.keys(n)){let n=Ki[r];n&&qi(e,t,n)}}function Yi(e,t,n){return e?.get(t)?.has(n)===!0}function Xi(e,t){t.strokes&&=t.strokes.map((t,n)=>{if(n>=e.strokes.length)return{...t,cap:e.strokeCap,join:e.strokeJoin,dashPattern:e.dashPattern};let r=e.strokes[n];return{...t,cap:r.cap,join:r.join,dashPattern:r.dashPattern}})}function Zi(e,t){let n=!1;if(t.swapComponentId&&(Gi(e,t.targetId,t.swapComponentId),qi(e.protectedFields,t.targetId,`structure`),n=!0),t.props&&Object.keys(t.props).length>0){let r=e.graph.getNode(t.targetId);if(r){let i=t.props;Xi(r,i),e.graph.preserveSourceMetadataDuring(()=>e.graph.updateNode(t.targetId,i)),Ji(e.protectedFields,t.targetId,i),n=!0}}return n}function Qi(e){return e.toLowerCase().replace(/[^a-z0-9]/g,``)}function $i(e){let[t,n]=e.split(`:`).map(Number);return{sessionID:t,localID:n}}function ea(e){return typeof e.textValue==`string`?e.textValue:e.textValue?.characters??e.textDataValue?.characters}function ta(e){return e.boolValue===void 0&&e.textValue===void 0&&e.textDataValue===void 0&&e.guidValue===void 0}function na(e,t,n,r){if(!ta(t.value))return t.value;let i=t.varValue?.value;return i?.symbolIdValue?.guid?{guidValue:i.symbolIdValue.guid}:i?.boolValue===void 0?i?.textValue===void 0?i?.textDataValue===void 0?r?e.propDefaults.get(n)??t.value:t.value:{textDataValue:i.textDataValue}:{textValue:i.textValue}:{boolValue:i.boolValue}}function ra(e,t,n=!1){let r=new Map;for(let i of t){if(!i.defID)continue;let t=P(i.defID);r.set(t,na(e,i,t,n))}return r}function ia(e,t,n,r){Zi(e,n)&&r?.add(t)}function aa(e,t,n,r){n.boolValue!==void 0&&ia(e,t,{targetId:t,source:`component-prop`,props:{visible:n.boolValue}},r)}function oa(e,t,n,r){let i=e.graph.getNode(t),a=ea(n);if(a===void 0||i?.type!==`TEXT`)return;let o=i.componentId?e.graph.getNode(i.componentId):null,s={text:a};o?.type===`TEXT`&&o.text===a&&(s.width=o.width,s.height=o.height,s.fills=O(o.fills),s.styleRuns=Ze(o.styleRuns),s.figmaDerivedTextGlyphs=o.figmaDerivedTextGlyphs?structuredClone(o.figmaDerivedTextGlyphs):void 0),ia(e,t,{targetId:t,source:`component-prop`,props:s},r)}function sa(e,t,n,r){let i=ea(n)??(n.guidValue?P(n.guidValue):void 0),a=i?e.guidToNodeId.get(i):void 0;a&&ia(e,t,{targetId:t,source:`component-prop`,swapComponentId:I(e,a)},r)}function ca(e,t,n,r,i){switch(n.componentPropNodeField){case`VISIBLE`:aa(e,t,r,i);break;case`TEXT_DATA`:oa(e,t,r,i);break;case`OVERRIDDEN_SYMBOL_ID`:sa(e,t,r,i);break}}function la(e,t,n){let r=t;for(let t=0;r&&t<10;t++){let t=e.graph.getNode(r),i=t?.overrideKey?e.overrideKeyToGuid.get(t.overrideKey)??t.overrideKey:void 0,a=e.nodeIdToGuid.get(r)??i;if(a){let e=n.get(a);if(e)return e}let o=t?.componentId??void 0;if(o===r)break;r=o}}function ua(e,t,n){let r=Qi(t),i=[];for(let t of n.keys()){let n=e.propNames.get(t);n&&Qi(n)===r&&i.push({defID:$i(t),componentPropNodeField:`VISIBLE`})}return i.length>0?i:void 0}function da(e,t){return e.defID?t.get(P(e.defID)):void 0}function fa(e,t,n,r,i){if(n)for(let a of n){let n=da(a,r);n&&ca(e,t,a,n,i)}}function pa(e,t,n,r){if(!t)return;let i=e.graph.getNode(t);if(!i)return;let a;for(let t of i.childIds){let i=e.graph.getNode(t);if(i){if(i.componentId&&i.componentId===n.componentId){let t=la(e,i.id,r);if(t)return t}!a&&i.name===n.name&&i.type===n.type&&(a=i.id)}}return a?la(e,a,r):void 0}function ma(e,t,n,r,i){let a=e.graph.getNode(t);if(a)for(let t of a.childIds){let o=e.graph.getNode(t);if(!o?.componentId){ma(e,t,n,r,i);continue}fa(e,t,pa(e,a.componentId,o,r)??la(e,o.componentId,r)??ua(e,o.name,n),n,i),ma(e,t,n,r,i)}}function ha(e,t,n,r){for(let i of e.graph.getAllNodes()){if(e.activeNodeIds&&!e.activeNodeIds.has(i.id)||i.type!==`INSTANCE`)continue;let a=e.nodeIdToGuid.get(i.id);if(!a)continue;let o=t.get(a);o&&ma(e,i.id,ra(e,o),n,r)}}function ga(e,t,n){let r=Di(e),i=new Map;for(let[a,o]of e.changeMap){let s=e.guidToNodeId.get(a);if(!s||e.activeNodeIds&&!e.activeNodeIds.has(s)||e.graph.getNode(s)?.type!==`INSTANCE`)continue;let c=o.symbolData?.symbolOverrides;if(c)for(let a of c){if(!a.componentPropAssignments?.length)continue;let o=a.guidPath?.guids;if(!o?.length)continue;let c=ra(e,a.componentPropAssignments,!0);for(let a of Oi(s,r,i)){let r=Hi(e,a,o);r&&ma(e,r,c,t,n)}}}}function _a(e){let t=new Map;for(let[n,r]of e.changeMap)r.componentPropRefs?.length&&t.set(n,r.componentPropRefs);return t}function va(e){let t=new Map;for(let[n,r]of e.changeMap)r.componentPropAssignments?.length&&t.set(n,r.componentPropAssignments);return t}function ya(e){let t=new Set,n=_a(e);return n.size===0?t:(ha(e,va(e),n,t),ga(e,n,t),t)}function ba(e,t,n){return!Yi(e,t,n)}function xa(e,t,n){switch(e){case`text`:n.text=t.text;break;case`visible`:n.visible=t.visible;break;case`opacity`:n.opacity=t.opacity;break;case`locked`:n.locked=t.locked;break;case`layoutGrow`:n.layoutGrow=t.layoutGrow;break;case`textAutoResize`:n.textAutoResize=t.textAutoResize;break}}function Sa(e,t){return(n,r,i,a)=>{n[e]!==r[e]&&ba(a,r.id,t)&&xa(e,n,i)}}var Ca=[Sa(`text`,`text`),Sa(`visible`,`visible`),Sa(`opacity`,`opacity`),Sa(`locked`,`locked`),Sa(`layoutGrow`,`layoutGrow`),Sa(`textAutoResize`,`textAutoResize`)];function wa(e,t,n){switch(e){case`fills`:n.fills=O(t.fills);break;case`strokes`:n.strokes=k(t.strokes);break;case`effects`:n.effects=Je(t.effects);break;case`styleRuns`:n.styleRuns=Ze(t.styleRuns);break}}function Ta(e,t){return(n,r,i,a)=>{n[e]!==r[e]&&ba(a,r.id,t)&&wa(e,n,i)}}var Ea=[Ta(`fills`,`fills`),Ta(`strokes`,`strokes`),Ta(`effects`,`effects`),Ta(`styleRuns`,`styleRuns`)];function Da(e,t,n,r){for(let i of Ca)i(e,t,n,r);for(let i of Ea)i(e,t,n,r)}function Oa(e,t,n,r){let i={};Da(t,n,i,r),Object.keys(i).length>0&&e.updateNode(n.id,i)}function ka(e,t,n,r,i){let a=e.getNode(t);if(a){for(let t of Array.from(n.childIds))e.deleteNode(t);e.updateNode(n.id,{name:a.name,componentId:a.componentId}),Oa(e,a,n,i),a.childIds.length>0&&e.populateInstanceChildren(n.id,t),r.add(n.id)}}function Aa(e,t,n,r,i,a){let o=e.getNode(t),s=e.getNode(n);if(!o||!s)return;let c=Math.min(o.childIds.length,s.childIds.length);for(let t=0;t<c;t++){if(i?.has(s.childIds[t]))continue;let n=e.getNode(o.childIds[t]),c=e.getNode(s.childIds[t]);if(!(!n||!c||n.type!==c.type)){if(n.type===`INSTANCE`&&n.componentId!==c.componentId){ka(e,o.childIds[t],c,r,a);continue}Oa(e,n,c,a),Aa(e,o.childIds[t],s.childIds[t],r,i,a)}}}function ja(e,t){let n=new Map;for(let r of e.getAllNodes()){if(t&&!t.has(r.id)||!r.componentId)continue;let e=n.get(r.componentId);e||(e=[],n.set(r.componentId,e)),e.push(r.id)}return n}function Ma(e,t){let n=new Set(t);for(let r of t){let t=e.getNode(r);for(;t?.parentId;){let r=e.getNode(t.parentId);if(!r)break;(r.type===`INSTANCE`||r.type===`COMPONENT`)&&n.add(r.id),t=r}}return n}function Na(e,t){let n=new Set,r=[...e];for(let e=r.pop();e!==void 0;e=r.pop()){let i=t.get(e);if(i)for(let e of i)n.has(e)||(n.add(e),r.push(e))}return n}function Pa(e,t,n,r,i,a,o){if(t.size===0)return;r.clear();let s=ja(e,a),c=Ma(e,t),l=Na(c,s),u=i&&i.size>0?new Set([...t,...i]):t,d=new Set,f=[...c],p=0;for(;p<f.length;){let t=f[p];p++;let r=s.get(t);if(!r)continue;let i=e.getNode(t);if(i)for(let a of r){if(!l.has(a)||d.has(a))continue;d.add(a);let r=e.getNode(a);if(r){if(u.has(a)){f.push(a);continue}if(Oa(e,i,r,o),i.childIds.length!==r.childIds.length){for(let t of Array.from(r.childIds))e.deleteNode(t);i.childIds.length>0&&e.populateInstanceChildren(r.id,t)}else i.childIds.length>0&&r.childIds.length>0&&Aa(e,t,r.id,n,u,o);f.push(a)}}}}function Fa(e){let{graph:t}=e,n=new Set;for(let r of t.getAllNodes()){if(e.activeNodeIds&&!e.activeNodeIds.has(r.id)||r.type!==`INSTANCE`||!r.componentId)continue;let i=t.getNode(r.componentId);if(!i||i.width<=0||i.height<=0)continue;let a=Ia(t,r,i);if(!a||r.layoutMode!==`NONE`)continue;let o=r.width/a.width,s=r.height/a.height;if(Math.abs(o-1)<.001&&Math.abs(s-1)<.001)continue;let c=e.nodeIdToGuid.get(r.id),l=c?e.changeMap.get(c)?.strokeWeight:void 0;Ba(t,r,i,o,s,n,a!==i,l)}n.size>0&&Ha(e,n),Va(e)}function Ia(e,t,n){if(t.width!==n.width||t.height!==n.height)return n;let r=n;for(let n=0;n<10&&r.type===`INSTANCE`&&r.componentId;n++){let n=e.getNode(r.componentId);if(!n||n.width<=0||n.height<=0)break;if(t.width!==n.width||t.height!==n.height)return n;r=n}return null}function La(e,t,n){return t===1&&n===1?Ke(e):e.map(e=>{let r=e.commandsBlob.slice(),i=new DataView(r.buffer,r.byteOffset,r.byteLength),a=0;for(;a<r.length;){let e=r[a++],o=0;e===1||e===2?o=1:e===4&&(o=3);for(let e=0;e<o;e++)i.setFloat32(a,i.getFloat32(a,!0)*t,!0),i.setFloat32(a+4,i.getFloat32(a+4,!0)*n,!0),a+=8}return{windingRule:e.windingRule,commandsBlob:r}})}function Ra(e,t,n){return e?{vertices:e.vertices.map(e=>({...e,x:e.x*t,y:e.y*n})),segments:e.segments.map(e=>({...e,tangentStart:{x:e.tangentStart.x*t,y:e.tangentStart.y*n},tangentEnd:{x:e.tangentEnd.x*t,y:e.tangentEnd.y*n}})),regions:structuredClone(e.regions)}:null}function za(e,t,n,r,i){if(e.strokes.length!==t.strokes.length||Math.abs(n-r)>=.001)return;let a=i??1;return t.strokes.map((t,n)=>({...t,weight:e.strokes[n].weight*a}))}function Ba(e,t,n,r,i,a,o=!1,s){let c=Math.min(t.childIds.length,n.childIds.length);for(let l=0;l<c;l++){let c=e.getNode(t.childIds[l]),u=e.getNode(n.childIds[l]);if(!c||!u)continue;let d=c.horizontalConstraint===`SCALE`,f=c.verticalConstraint===`SCALE`;if(!d&&!f)continue;let p={},m=o?c:u;d&&(p.x=m.x*r,p.width=m.width*r),f&&(p.y=m.y*i,p.height=m.height*i);let h=d?r:1,g=f?i:1;m.fillGeometry.length>0&&(p.fillGeometry=La(m.fillGeometry,h,g)),m.strokeGeometry.length>0&&(p.strokeGeometry=La(m.strokeGeometry,h,g)),m.vectorNetwork&&(p.vectorNetwork=Ra(m.vectorNetwork,h,g)),p.strokes=za(m,c,h,g,s),e.updateNode(c.id,p),a.add(c.id),c.childIds.length>0&&u.childIds.length>0&&Ba(e,c,u,d?r:1,f?i:1,a,o,s)}}function Va(e){let{graph:t}=e;for(let n of t.getAllNodes()){if(e.activeNodeIds&&!e.activeNodeIds.has(n.id)||n.childIds.length!==1)continue;let r=t.getNode(n.childIds[0]);!r?.visible||!r.componentId||e.geometryOverrideNodes.has(r.id)||r.figmaDerivedLayout?.x!==void 0||(r.x<-.01||r.y<-.01||r.x+r.width>n.width+.01||r.y+r.height>n.height+.01)&&t.updateNode(r.id,{x:0,y:0,figmaDerivedLayout:{...r.figmaDerivedLayout,x:0,y:0}})}}function Ha(e,t){let{graph:n}=e,r=ja(n,e.activeNodeIds),i=[...t],a=new Set,o=0;for(;o<i.length;){let t=i[o];o++;let s=n.getNode(t);if(!s)continue;let c=r.get(t);if(c)for(let t of c){if(a.has(t))continue;a.add(t);let r=n.getNode(t);if(!r)continue;let o={};r.width!==s.width&&(o.width=s.width),r.height!==s.height&&(o.height=s.height),r.x!==s.x&&(o.x=s.x),r.y!==s.y&&(o.y=s.y),e.geometryOverrideNodes.has(t)||(s.fillGeometry.length>0&&(o.fillGeometry=Ke(s.fillGeometry)),s.strokeGeometry.length>0&&(o.strokeGeometry=Ke(s.strokeGeometry)),s.vectorNetwork&&(o.vectorNetwork=structuredClone(s.vectorNetwork))),s.strokes.length===r.strokes.length&&(o.strokes=r.strokes.map((e,t)=>({...e,weight:s.strokes[t].weight}))),Object.keys(o).length>0&&n.updateNode(t,o),i.push(t)}}}function Ua(e,t,n){return t===1&&n===1?e:e.map(e=>{let r=e.commandsBlob.slice(),i=new DataView(r.buffer,r.byteOffset,r.byteLength),a=0;for(;a<r.length;){let e=r[a++];if(e===0)continue;let o=-1;if(e===1||e===2?o=1:e===4&&(o=3),o<0)break;for(let e=0;e<o;e++)i.setFloat32(a,i.getFloat32(a,!0)*t,!0),i.setFloat32(a+4,i.getFloat32(a+4,!0)*n,!0),a+=8}return{windingRule:e.windingRule,commandsBlob:r}})}function Wa(e,t,n){let r={},i=Rr(e.fillGeometry,n),a=Rr(e.strokeGeometry,n);return i.length>0?r.fillGeometry=i:e.size&&t.fillGeometry.length>0&&t.width>0&&t.height>0&&(r.fillGeometry=Ua(t.fillGeometry,e.size.x/t.width,e.size.y/t.height)),a.length>0?r.strokeGeometry=a:e.size&&t.strokeGeometry.length>0&&t.width>0&&t.height>0&&(r.strokeGeometry=Ua(t.strokeGeometry,e.size.x/t.width,e.size.y/t.height)),r}function Ga(e,t,n){let r=t.get(n);if(r!==void 0)return r;let i=e.graph.getChildren(n).filter(e=>e.visible).length;return t.set(n,i),i}function Ka(e,t,n){if(!n.parentId||Ga(e,t,n.parentId)!==1||!n.componentId)return null;let r=e.graph.getNode(n.componentId);if(!r)return null;let i=r.parentId?e.graph.getNode(r.parentId):null;return i?r.x>=0&&r.y>=0&&r.x+r.width<=i.width+.01&&r.y+r.height<=i.height+.01?{x:r.x,y:r.y}:{x:0,y:0}:{x:r.x,y:r.y}}function qa(e,t,n){let r={};e.fontSize!==void 0&&(r.fontSize=e.fontSize),e.lineHeight!==void 0&&(r.lineHeight=_r(e.lineHeight,e.fontSize)),e.letterSpacing!==void 0&&(r.letterSpacing=vr(e.letterSpacing,e.fontSize)),e.strokeWeight!==void 0&&n.strokes.length>0&&(r.strokes=n.strokes.map(t=>({...t,weight:e.strokeWeight})));let i=Cr(e.derivedTextData,t);return i.length>0&&(r.figmaDerivedTextGlyphs=i),r}function Ja(e,t,n,r){let i=qa(n,e.blobs,r),a={};if(n.size&&(i.width=n.size.x,i.height=n.size.y,a.width=n.size.x,a.height=n.size.y),n.transform)i.x=n.transform.m02,i.y=n.transform.m12,a.x=n.transform.m02,a.y=n.transform.m12;else if(n.size){let n=Ka(e,t,r);n&&(i.x=n.x,i.y=n.y,a.x=n.x,a.y=n.y)}return Object.keys(a).length>0&&(i.figmaDerivedLayout=a),Object.assign(i,Wa(n,r,e.blobs)),{updates:i,hasSize:n.size!==void 0}}function Ya(e,t,n,r,i){let a={};return i.has(r)?a:(t.width!==n.width&&(a.width=t.width),t.height!==n.height&&(a.height=t.height),t.x!==n.x&&(a.x=t.x),t.y!==n.y&&(a.y=t.y),e.geometryOverrideNodes.has(r)||(t.fillGeometry!==n.fillGeometry&&(a.fillGeometry=Ke(t.fillGeometry)),t.strokeGeometry!==n.strokeGeometry&&(a.strokeGeometry=Ke(t.strokeGeometry))),t.text===n.text&&t.figmaDerivedTextGlyphs&&(a.figmaDerivedTextGlyphs=structuredClone(t.figmaDerivedTextGlyphs)),t.text===n.text&&t.figmaDerivedLayout&&(a.figmaDerivedLayout={...t.figmaDerivedLayout}),a)}function Xa(e,t,n){if(t.size===0)return;let r=ja(e.graph,e.activeNodeIds),i=[...t],a=new Set,o=0;for(;o<i.length;){let t=i[o];o++;let s=e.graph.getNode(t);if(!s)continue;let c=r.get(t);if(c)for(let t of c){if(a.has(t))continue;a.add(t);let r=e.graph.getNode(t);if(!r)continue;let o=Ya(e,s,r,t,n);Object.keys(o).length>0&&e.graph.preserveSourceMetadataDuring(()=>e.graph.updateNode(t,o)),i.push(t)}}}function Za(e,t,n,r,i,a){let o=r.guidPath?.guids;if(!o?.length)return;let s=Hi(e,n,o);if(!s)return;let c=e.graph.getNode(s);if(!c)return;let{updates:l,hasSize:u}=Ja(e,t,r,c);(r.fillGeometry?.length||r.strokeGeometry?.length)&&e.geometryOverrideNodes.add(s),Object.keys(l).length!==0&&(Zi(e,{targetId:s,source:`derived-symbol-data`,props:l})&&i.add(s),u&&a.add(s))}function Qa(e){let t=new Set,n=new Set,r=new Map;for(let[i,a]of e.changeMap){if(a.type!==`INSTANCE`)continue;let o=a.derivedSymbolData;if(!o?.length)continue;let s=e.guidToNodeId.get(i);if(!(!s||e.activeNodeIds&&!e.activeNodeIds.has(s)))for(let i of o)Za(e,r,s,i,t,n)}return{modified:t,sizeSet:n}}function $a(e){let{modified:t,sizeSet:n}=Qa(e);Xa(e,t,n)}function eo(e,t){let n=new Set,r=[...t],i=0;for(;i<r.length;){let t=r[i];if(i++,n.has(t))continue;n.add(t);let a=e.getNode(t);a&&r.push(...a.childIds)}return n}function to(e,t){let n=new Set;function r(t){let i=e.getNode(t);if(i?.type!==`INSTANCE`||!i.componentId||i.childIds.length>0||n.has(t))return;n.add(t);let a=e.getNode(i.componentId);if(a){a.type===`INSTANCE`&&a.componentId&&a.childIds.length===0&&r(a.id);for(let t of a.childIds){let n=e.getNode(t);n?.type===`INSTANCE`&&n.componentId&&n.childIds.length===0&&r(t)}a.childIds.length>0&&i.childIds.length===0&&e.populateInstanceChildren(t,i.componentId)}}if(!t){for(let t of e.nodes.values())t.type===`INSTANCE`&&t.componentId&&t.childIds.length===0&&r(t.id);return}let i=[...t],a=new Set,o=0;for(;o<i.length;){let t=i[o];if(o++,!t||a.has(t))continue;a.add(t),r(t);let n=e.getNode(t);n&&i.push(...n.childIds)}return eo(e,t)}var no=[`fontSize`,`fontName`,`lineHeight`,`letterSpacing`,`textDecoration`,`textCase`];function ro(e,t){let n=t.styleIdForFill?.guid;if(n){let r=e.get(P(n));r?.styleType===`FILL`&&r.fillPaints&&(t.fillPaints=r.fillPaints)}let r=t.styleIdForStrokeFill?.guid;if(r){let n=e.get(P(r));n?.styleType===`FILL`&&n.fillPaints&&(t.strokePaints=n.fillPaints)}let i=t.styleIdForText?.guid;if(!i)return;let a=e.get(P(i));if(!(a?.type!==`TEXT`||a.styleType!==`TEXT`))for(let e of no)e===`textDecoration`?t.textDecoration=a.textDecoration:a[e]!==void 0&&(t[e]=a[e])}function io(e,t){if(e.textData!=null){let n=e.textData;n.characters!=null&&(t.text=n.characters);let r=Sr(e);r.length>0&&(t.styleRuns=r)}e.fillPaints!=null&&(t.fills=or(e.fillPaints)),e.strokePaints!=null&&(t.strokes=sr(e.strokePaints,e.strokeWeight,e.strokeAlign)),e.effects!=null&&(t.effects=cr(e.effects)),e.visible!=null&&(t.visible=e.visible),e.opacity!=null&&(t.opacity=e.opacity),e.name!=null&&(t.name=e.name),e.locked!=null&&(t.locked=e.locked)}function ao(e,t){if(e.size!=null){let n=e.size;n.x!=null&&(t.width=n.x),n.y!=null&&(t.height=n.y)}e.cornerRadius!=null&&(t.cornerRadius=e.cornerRadius),e.rectangleTopLeftCornerRadius!=null&&(t.topLeftRadius=e.rectangleTopLeftCornerRadius),e.rectangleTopRightCornerRadius!=null&&(t.topRightRadius=e.rectangleTopRightCornerRadius),e.rectangleBottomRightCornerRadius!=null&&(t.bottomRightRadius=e.rectangleBottomRightCornerRadius),e.rectangleBottomLeftCornerRadius!=null&&(t.bottomLeftRadius=e.rectangleBottomLeftCornerRadius),e.rectangleCornerRadiiIndependent!=null&&(t.independentCorners=e.rectangleCornerRadiiIndependent),e.arcData!=null&&(t.arcData=Xr(e.arcData)),e.frameMaskDisabled!=null&&(t.clipsContent=e.frameMaskDisabled===!1)}function oo(e,t){e.stackSpacing!=null&&(t.itemSpacing=e.stackSpacing),e.stackPrimarySizing!=null&&(t.primaryAxisSizing=Gr(e.stackPrimarySizing)),e.stackCounterSizing!=null&&(t.counterAxisSizing=Gr(e.stackCounterSizing)),e.stackPrimaryAlignItems!=null&&(t.primaryAxisAlign=Kr(e.stackPrimaryAlignItems)),e.stackCounterAlignItems!=null&&(t.counterAxisAlign=qr(e.stackCounterAlignItems)),e.stackChildPrimaryGrow!=null&&(t.layoutGrow=e.stackChildPrimaryGrow),e.stackChildAlignSelf!=null&&(t.layoutAlignSelf=Jr(e.stackChildAlignSelf)),e.stackPositioning!=null&&(t.layoutPositioning=e.stackPositioning===`ABSOLUTE`?`ABSOLUTE`:`AUTO`),e.stackVerticalPadding!=null&&(t.paddingTop=e.stackVerticalPadding,e.stackPaddingBottom??(t.paddingBottom=e.stackVerticalPadding)),e.stackHorizontalPadding!=null&&(t.paddingLeft=e.stackHorizontalPadding,e.stackPaddingRight??(t.paddingRight=e.stackHorizontalPadding)),e.stackPaddingBottom!=null&&(t.paddingBottom=e.stackPaddingBottom),e.stackPaddingRight!=null&&(t.paddingRight=e.stackPaddingRight)}function so(e,t){if(e.strokeWeight!=null&&!e.strokePaints&&t.strokes)for(let n of t.strokes)n.weight=e.strokeWeight;if(e.strokeAlign!=null&&t.strokes){let n=`CENTER`;e.strokeAlign===`INSIDE`?n=`INSIDE`:e.strokeAlign===`OUTSIDE`&&(n=`OUTSIDE`);for(let e of t.strokes)e.align=n}e.borderTopWeight!=null&&(t.borderTopWeight=e.borderTopWeight),e.borderRightWeight!=null&&(t.borderRightWeight=e.borderRightWeight),e.borderBottomWeight!=null&&(t.borderBottomWeight=e.borderBottomWeight),e.borderLeftWeight!=null&&(t.borderLeftWeight=e.borderLeftWeight),e.borderStrokeWeightsIndependent!=null&&(t.independentStrokeWeights=e.borderStrokeWeightsIndependent)}function co(e,t){if(e.fontName!=null){let n=e.fontName;n.family&&(t.fontFamily=n.family),n.style&&(t.fontWeight=m(n.style),t.italic=n.style.toLowerCase().includes(`italic`))}e.fontSize!=null&&(t.fontSize=e.fontSize),e.textAlignHorizontal!=null&&(t.textAlignHorizontal=e.textAlignHorizontal),e.textAutoResize!=null&&(t.textAutoResize=e.textAutoResize),e.lineHeight!=null&&(t.lineHeight=_r(e.lineHeight,e.fontSize)),e.letterSpacing!=null&&(t.letterSpacing=vr(e.letterSpacing,e.fontSize)),e.maxLines!=null&&(t.maxLines=e.maxLines),e.textTruncation!=null&&(t.textTruncation=e.textTruncation===`ENDING`?`ENDING`:`DISABLED`),e.textDecoration!=null&&(t.textDecoration=gr(e.textDecoration))}function lo(e){let t={};return io(e,t),ao(e,t),oo(e,t),so(e,t),co(e,t),t}var uo=new Set([`RECTANGLE_TOP_LEFT_CORNER_RADIUS`,`RECTANGLE_TOP_RIGHT_CORNER_RADIUS`,`RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS`,`RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS`]);function fo(e){return e.version?`${e.key}@${e.version}`:e.key}function po(e){let t=new Map;for(let[n,r]of e.changeMap){let e=typeof r.key==`string`?r.key:void 0;if(!e)continue;t.set(e,n);let i=typeof r.version==`string`?r.version:void 0;i&&t.set(fo({key:e,version:i}),n)}return t}function mo(e,t){if(e.guid)return P(e.guid);let n=e.assetRef;if(n?.key)return t.get(fo(n))??t.get(n.key)}function ho(e,t,n,r=0){if(r>10)return;let i=e.changeMap.get(t)?.variableDataValues?.entries?.[0];if(!i)return;let a=i.variableData.value;if(!a)return;if(typeof a.floatValue==`number`)return a.floatValue;let o=a.alias,s=o?mo(o,n):void 0;return s?ho(e,s,n,r+1):void 0}function go(e,t,n){let r=t.variableConsumptionMap?.entries;if(!r?.length)return;let i=po(e);for(let t of r){let r=t.variableField;if(!r||!uo.has(r))continue;let a=t.variableData?.value?.alias,o=a?mo(a,i):void 0,s=o?ho(e,o,i):void 0;if(typeof s!=`number`)continue;let c=Br[r];c===`topLeftRadius`?n.topLeftRadius=s:c===`topRightRadius`?n.topRightRadius=s:c===`bottomRightRadius`?n.bottomRightRadius=s:c===`bottomLeftRadius`&&(n.bottomLeftRadius=s)}}function _o(e,t,n){let r={targetId:t,source:`symbol-override`};if(n.overriddenSymbolID){let t=P(n.overriddenSymbolID);r.swapComponentId=e.guidToNodeId.get(t)}let i={...n};if(delete i.guidPath,delete i.overriddenSymbolID,delete i.componentPropAssignments,Object.keys(i).length>0){ro(e.changeMap,i);let t=lo(i);go(e,i,t),Object.keys(t).length>0&&(r.props=t)}return r.swapComponentId||r.props?r:null}function vo(e,t){return t!==void 0&&(!e.activeNodeIds||e.activeNodeIds.has(t))}function yo(e){let t=new Set;e.componentIdRoot.clear();for(let[n,r]of e.changeMap){if(r.type!==`INSTANCE`)continue;let i=r.symbolData?.symbolOverrides;if(!i?.length)continue;let a=e.guidToNodeId.get(n);if(vo(e,a))for(let n of i){let r=n.guidPath?.guids;if(!r?.length)continue;let i=Hi(e,a,r);if(!i||i===a&&e.kiwiPropertyNodes.has(a))continue;let o=_o(e,i,n);o&&(t.add(i),Zi(e,o))}}return t}function*bo(e,t){for(let[n,r]of t){let t=e.get(n);t&&(yield[r,t])}}function xo(e,t,n){let r=new Set;for(let[i,a]of bo(t,n)){let t=a,n=e.getNode(i);if(!n?.componentId)continue;let o=e.getNode(n.componentId);if(!o)continue;let s=(t.cornerRadius!==void 0||t.rectangleCornerRadiiIndependent!==void 0)&&n.cornerRadius!==o.cornerRadius,c=t.visible===!1&&o.visible;(s||c)&&r.add(i)}return r}function So(e,t){let n=new Set;for(let[r,i]of bo(e,t))(i.fillGeometry?.length||i.strokeGeometry?.length)&&n.add(r);return n}function Co(e,t,n){for(let r=0;r<10;r++){let r=!1;for(let i of e.getAllNodes()){if(n&&!n.has(i.id)||!i.componentId)continue;let a=e.getNode(i.componentId);!a||a.fills===i.fills||t.has(i.id)&&!t.has(a.id)||(e.updateNode(i.id,{fills:O(a.fills)}),r=!0)}if(!r)return}}function wo(e){for(let t=0;t<10;t++){let t=!1;for(let n of e.getAllNodes()){if(n.type!==`INSTANCE`||!n.componentId)continue;let r=e.getNode(n.componentId);if(!(!r||r.childIds.length!==n.childIds.length))for(let i=0;i<n.childIds.length;i++){let a=e.getNode(r.childIds[i]),o=e.getNode(n.childIds[i]);if(!a||!o||a.overrideKey&&o.overrideKey&&a.overrideKey!==o.overrideKey)continue;let s={};!a.visible&&o.visible&&(s.visible=!1),a.x!==o.x&&(s.x=a.x),a.y!==o.y&&(s.y=a.y),Object.keys(s).length!==0&&(e.updateNode(o.id,s),t=!0)}}if(!t)return}}function To(e){for(let t=0;t<10;t++){let t=!1;for(let n of e.getAllNodes()){if(n.type!==`TEXT`||!n.componentId)continue;let r=e.getNode(n.componentId);r?.type!==`TEXT`||r.text!==n.text||(e.updateNode(n.id,{width:r.width,height:r.height,fills:O(r.fills),styleRuns:Ze(r.styleRuns),figmaDerivedTextGlyphs:r.figmaDerivedTextGlyphs?structuredClone(r.figmaDerivedTextGlyphs):void 0}),t=!0)}if(!t)return}}function Eo(e,t,n,r,i){let a=new Map;for(let[e,n]of t)n.overrideKey&&a.set(P(n.overrideKey),e);let o=new Map,s=new Map;for(let[,e]of t)if(e.componentPropDefs?.length)for(let t of e.componentPropDefs){if(!t.id)continue;let e=P(t.id);t.initialValue&&o.set(e,t.initialValue),t.name&&s.set(e,t.name)}let c=new Map;for(let[e,t]of n)c.set(t,e);let l=xo(e,t,n),u=So(t,n);return{graph:e,changeMap:t,guidToNodeId:n,blobs:r,overrideKeyToGuid:a,nodeIdToGuid:c,propDefaults:o,propNames:s,preComputedRoot:new Map,componentIdRoot:new Map,swappedInstances:new Set,protectedFields:new Map,kiwiPropertyNodes:l,geometryOverrideNodes:u,activeNodeIds:i}}function Do(e,t,n,r=[],i){let a=Eo(e,t,n,r,to(e,i));Pi(a);let o=yo(a);for(let e of a.kiwiPropertyNodes)o.add(e);Pa(e,o,a.swappedInstances,a.componentIdRoot,void 0,a.activeNodeIds,a.protectedFields);let s=ya(a);if(s.size>0&&Pa(e,s,a.swappedInstances,a.componentIdRoot,o,a.activeNodeIds,a.protectedFields),i){let t=to(e,i);t&&(a.activeNodeIds=t);let n=ya(a),r=new Set([...o,...s,...n]);r.size>0&&Pa(e,r,a.swappedInstances,a.componentIdRoot,o,a.activeNodeIds,a.protectedFields),wo(e)}$a(a),Co(e,new Set([...a.kiwiPropertyNodes,...o]),a.activeNodeIds),To(e),Fa(a),ya(a)}var Oo=0,ko=1,Ao=2,jo=4;function Mo(e,t=1){let n=[],r=e=>{let r=new ArrayBuffer(4);new DataView(r).setFloat32(0,(e??0)/t,!0),n.push(...new Uint8Array(r))},i=e=>e===void 0?void 0:-e,a=0,o=0;for(let t of e)switch(t.type){case`M`:n.push(ko),r(t.x),r(i(t.y)),a=t.x??0,o=t.y??0;break;case`L`:n.push(Ao),r(t.x),r(i(t.y)),a=t.x??0,o=t.y??0;break;case`C`:n.push(jo),r(t.x1),r(i(t.y1)),r(t.x2),r(i(t.y2)),r(t.x),r(i(t.y)),a=t.x??0,o=t.y??0;break;case`Q`:{let e=t.x1??0,s=t.y1??0,c=t.x??0,l=t.y??0;n.push(jo),r(a+2/3*(e-a)),r(i(o+2/3*(s-o))),r(c+2/3*(e-c)),r(i(l+2/3*(s-l))),r(c),r(i(l)),a=c,o=l;break}case`Z`:n.push(Oo);break}return new Uint8Array(n)}function No(e){return{layoutSize:{x:e.node.width,y:e.node.height},baselines:e.baselines??[{firstCharacter:0,endCharacter:Math.max(e.node.text.length-1,0),position:{x:0,y:e.baseline},width:e.width,lineHeight:e.lineHeight,lineAscent:e.lineAscent}],glyphs:e.glyphs,fontMetaData:e.fontMetaData,logicalIndexToCharacterOffsetMap:e.logicalIndexToCharacterOffsetMap,derivedLines:[{directionality:`LTR`}],truncationStartIndex:-1,truncatedHeight:-1}}function Po(e){if(new TextDecoder().decode(e.slice(0,8))!==`fig-kiwi`)return null;let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=12,r=[];for(;n<e.length;){let i=t.getUint32(n,!0);n+=4,r.push(e.slice(n,n+i)),n+=i}return r.length>=2?r:null}async function Fo(e){try{return Le(e)}catch{return(await E(()=>import(`./esm-D0MtVViK.js`),__vite__mapDeps([4,5]))).decompress(e)}}function Io(e,t,n=101){let r=ze(t),i=16+e.length+4+r.length,a=new Uint8Array(i),o=new DataView(a.buffer);a.set(new TextEncoder().encode(`fig-kiwi`),0),o.setUint32(8,n,!0);let s=12;return o.setUint32(s,e.length,!0),s+=4,a.set(e,s),s+=e.length,o.setUint32(s,r.length,!0),s+=4,a.set(r,s),a}var Lo=new Map;async function Ro(e){if(typeof crypto<`u`){let t=await crypto.subtle.digest(`SHA-1`,e);return new Uint8Array(t)}return new Uint8Array(20)}async function zo(e,t){let n=`${e}|${t}`,r=Lo.get(n);if(r)return r;let i=s.loadedData(e,t);if(!i)return null;let a=await Ro(i);return Lo.set(n,a),a}async function Bo(e){let t=new Set;for(let n of e.getAllNodes()){if(n.type!==`TEXT`)continue;let e=d(n.fontWeight,n.italic);t.add(`${n.fontFamily}|${e}`);for(let e of n.styleRuns){let r=e.style.fontFamily??n.fontFamily,i=e.style.fontWeight??n.fontWeight,a=e.style.italic??n.italic;t.add(`${r}|${d(i,a)}`)}}let n=new Map;for(let e of t){let[t,r]=e.split(`|`),i=await zo(t,r);i&&n.set(e,i)}return n}function Vo(e,t){let n=new Map;for(let[r,i]of e.variables){if(!i.key)continue;let e=t.get(r)??F(r);n.set(i.key,e),i.version&&n.set(`${i.key}@${i.version}`,e)}return n}function Ho(e,t,n,r){let i=t.boundVariables[r];return i?{...n,colorVariableBinding:{variableID:e.varIdToGuid?.get(i)??F(i)}}:n}function Uo(e,t){return t.strokes.map((n,r)=>Ho(e,t,{type:`SOLID`,color:e.safeColor(n.color),opacity:n.opacity,visible:n.visible,blendMode:`NORMAL`},`strokes/${r}/color`))}function Wo(e){return{textValue:{characters:e}}}function Go(e){return e===`BOOLEAN`?`BOOL`:e===`VARIANT`?`TEXT`:e}function Ko(e){return/^\d+:\d+$/.test(e)?F(e):null}var qo=new Set([`variableConsumptionMap`,`parameterConsumptionMap`]),Jo=new Set([`colorVar`,`opacityVar`]),Yo=new Set([`BOOLEAN`,`FLOAT`,`STRING`,`ALIAS`,`COLOR`,`SYMBOL_ID`,`TEXT_DATA`,`PROP_REF`]);function Xo(e){return!!e&&typeof e==`object`&&!Array.isArray(e)&&`entries`in e}function Zo(e){return!!e&&typeof e==`object`&&!Array.isArray(e)}function Qo(e){if(!Zo(e))return!1;let t=e,n=t.variableData?.dataType;return typeof n==`string`&&Yo.has(n)||!!t.variableData?.value?.propRefValue}function $o(e){if(!Zo(e))return!1;let t=e;return t.variableData?.dataType===`PROP_REF`||!!t.variableData?.value?.propRefValue}function es(e,t,n,r){if(!Xo(e))return;let i=e.entries?.filter(r)??[];if(i.length!==0)return{entries:i.map(e=>rs(e,t,n))}}function ts(e,t,n){let r=e.__openPencilFigmaBlob,i=r instanceof Uint8Array?r:new Uint8Array(Object.values(r??{})),a=Un(i),o=n.blobIndexByHex?.get(a);if(o!==void 0)return o;let s=t.length;return t.push(i),n.blobIndexByHex?.set(a,s),s}function ns(e,t){return(e===`stackJustify`||e===`stackPrimaryAlignItems`||e===`stackCounterAlign`||e===`stackCounterAlignItems`)&&t===`SPACE_EVENLY`?`SPACE_BETWEEN`:t}function rs(e,t,n={}){if(e instanceof Uint8Array)return e;if(Array.isArray(e))return e.map(e=>rs(e,t,n));if(!e||typeof e!=`object`)return e;if(`__openPencilFigmaBlob`in e)return ts(e,t,n);let r={};for(let[i,a]of Object.entries(e))if(!(Jo.has(i)&&!n.includePaintVariables)){if(qo.has(i)){let e=es(a,t,n,n.includeVariableMaps?Qo:$o);e!==void 0&&(r[i]=e);continue}r[i]=ns(i,rs(a,t,n))}return r}function is(e,t){let n=new Set,r=t;for(;!n.has(r);){n.add(r);let t=e.graph.getNode(r);if(t?.type!==`INSTANCE`||!t.componentId)return r;r=t.componentId}return t}function as(e,t,n){if(!e.graph.getNode(t))return;let r=e.nodeIdToGuid?.get(t);if(r)return r;let i=e.graph.getNode(t),a=(i?.source.id?Ko(i.source.id):null)??{sessionID:1,localID:n.value++};return e.nodeIdToGuid?.set(t,a),a}var os=new Set([`pageType`,`derivedSymbolData`,`derivedSymbolDataLayoutVersion`,`componentPropAssignments`,`sourceLibraryKey`,`variableConsumptionMap`,`parameterConsumptionMap`]);function ss(e,t,n){let r=rs(t.source.fig.rawNodeFields,e.blobs,{blobIndexByHex:e.blobIndexByHex,includePaintVariables:!0,includeVariableMaps:!0});for(let i of Object.keys(r))if(!os.has(String(i))){if((i===`fillPaints`||i===`strokePaints`)&&t.source.id){let t=r[i];e.assetRefToVarGuid&&e.assetRefToVarGuid.size>0&&(t=cs(t,e.assetRefToVarGuid)),n[i]=t;continue}if(i===`effects`&&t.source.id&&e.assetRefToVarGuid&&e.assetRefToVarGuid.size>0){n[i]=cs(r[i],e.assetRefToVarGuid);continue}if(i===`derivedTextData`&&t.source.id){n[i]=r[i];continue}i in n||(n[i]=r[i])}}function cs(e,t){if(!Array.isArray(e))return e;let n=e.map(e=>{let n=e.colorVar,r=n?.value,i=r?.alias;if(!n||!r||!i||i.guid)return e;let a=i.assetRef;if(!a?.key)return e;let o=a.version?`${a.key}@${a.version}`:a.key,s=t.get(o)??t.get(a.key);return s?{...e,colorVar:{...n,value:{...r,alias:{guid:s}}}}:e});for(let t=0;t<e.length;t++)if(n[t]!==e[t])return n;return e}function ls(e,t,n,r){if(t.type!==`INSTANCE`||!t.componentId)return;let i=as(e,is(e,t.componentId),r);if(i){let r={symbolID:i};t.source.fig.symbolOverrides.length>0&&(r.symbolOverrides=rs(t.source.fig.symbolOverrides,e.blobs,{blobIndexByHex:e.blobIndexByHex,includePaintVariables:!0,includeVariableMaps:!0})),t.source.fig.uniformScaleFactor!=null&&(r.uniformScaleFactor=t.source.fig.uniformScaleFactor),n.symbolData=r}t.source.fig.componentPropAssignments.length>0&&(n.componentPropAssignments=rs(t.source.fig.componentPropAssignments,e.blobs,{blobIndexByHex:e.blobIndexByHex,includePaintVariables:!0,includeVariableMaps:!0})),t.source.fig.derivedSymbolData.length>0&&(n.derivedSymbolData=rs(t.source.fig.derivedSymbolData,e.blobs,{blobIndexByHex:e.blobIndexByHex,includePaintVariables:!0,includeVariableMaps:!0})),t.source.fig.derivedSymbolDataLayoutVersion!=null&&(n.derivedSymbolDataLayoutVersion=t.source.fig.derivedSymbolDataLayoutVersion)}function us(e,t){e.componentKey&&(t.componentKey=e.componentKey),e.sourceLibraryKey&&(t.sourceLibraryKey=e.sourceLibraryKey);let n=e.publishId?Ko(e.publishId):null,r=e.overrideKey?Ko(e.overrideKey):null;n&&(t.publishID=n),r&&(t.overrideKey=r),e.sharedSymbolVersion&&(t.sharedSymbolVersion=e.sharedSymbolVersion),e.publishedVersion&&(t.publishedVersion=e.publishedVersion),(e.type===`COMPONENT_SET`||e.isPublishable)&&(t.isPublishable=e.isPublishable),(e.type===`COMPONENT`||e.isSymbolPublishable)&&(t.isSymbolPublishable=e.isSymbolPublishable),e.symbolDescription&&(t.symbolDescription=e.symbolDescription),e.symbolLinks.length>0&&(t.symbolLinks=structuredClone(e.symbolLinks));let i=e.componentPropertyDefinitions.map(e=>{let t=Ko(e.id);return t?{id:t,name:e.name,type:Go(e.type),initialValue:Wo(e.defaultValue)}:null}).filter(e=>e!==null);i.length>0&&(t.componentPropDefs=i);let a=e.variantPropSpecs.map(e=>{let t=Ko(e.propDefId);return t?{propDefId:t,value:e.value}:null}).filter(e=>e!==null);a.length>0&&(t.variantPropSpecs=a)}function ds(e){return e.source.fig.rawSize?{...e.source.fig.rawSize}:{x:e.width,y:e.height}}function fs(e,t){return t.source.fig.rawTransform?{...t.source.fig.rawTransform}:e.computeExportTransform(t)}function ps(e){return`fillGeometry`in e.source.fig.rawNodeFields||`strokeGeometry`in e.source.fig.rawNodeFields}function ms(e){return`vectorData`in e.source.fig.rawNodeFields}function hs(e){return!ps(e)&&!ms(e)?e:{...e,fillGeometry:ps(e)?[]:e.fillGeometry,strokeGeometry:ps(e)?[]:e.strokeGeometry,vectorNetwork:ms(e)?null:e.vectorNetwork}}function gs(e,t,n){t.independentStrokeWeights&&(n.borderStrokeWeightsIndependent=!0,n.borderTopWeight=t.borderTopWeight,n.borderRightWeight=t.borderRightWeight,n.borderBottomWeight=t.borderBottomWeight,n.borderLeftWeight=t.borderLeftWeight),t.fills.length>0&&(n.fillPaints=t.fills.map((n,r)=>Ho(e,t,e.fillToKiwiPaint(n),`fills/${r}/color`))),e.serializeCornerRadii(t,n),t.effects.length>0&&(n.effects=t.effects.map(t=>({type:t.type===`LAYER_BLUR`?`FOREGROUND_BLUR`:t.type,color:e.safeColor(t.color),offset:t.offset,radius:t.radius,spread:t.spread,visible:t.visible,blendMode:t.blendMode??`NORMAL`,showShadowBehindNode:t.showShadowBehindNode}))),t.type===`TEXT`&&e.serializeTextProps(t,n,e.graph,e.fontDigestMap,e.blobs,e.glyphBlobMap),t.type!==`VECTOR`&&(n.frameMaskDisabled=!t.clipsContent),t.horizontalConstraint!==`MIN`&&(n.horizontalConstraint=t.horizontalConstraint),t.verticalConstraint!==`MIN`&&(n.verticalConstraint=t.verticalConstraint),t.strokeCap!==`NONE`&&(n.strokeCap=t.strokeCap),t.strokeJoin!==`MITER`&&(n.strokeJoin=t.strokeJoin),!t.source.id&&t.strokeMiterLimit!==28.96&&(n.miterLimit=t.strokeMiterLimit),t.dashPattern.length>0&&(n.dashPattern=t.dashPattern),t.arcData&&(n.arcData={startingAngle:t.arcData.startingAngle,endingAngle:t.arcData.endingAngle,innerRadius:t.arcData.innerRadius}),t.autoRename||(n.autoRename=!1)}function _s(e,t,n,r,i){let a=as(i,e.id,r)??{sessionID:1,localID:r.value++},o=Uo(i,e),s={guid:a,parentIndex:{guid:t,position:e.source.orderKey??i.fractionalPosition(n)},type:i.mapToFigmaType(e.type),name:e.name,visible:e.visible,opacity:e.opacity,phase:`CREATED`,size:ds(e),transform:fs(i,e)};e.strokes.length>0&&(s.strokeWeight=e.strokes[0].weight,s.strokeAlign=e.strokes[0].align),e.locked&&(s.locked=!0),gs(i,e,s),us(e,s),ls(i,e,s,r),e.type===`COMPONENT_SET`&&kr(e,Dr,e.type),s.type===`CANVAS`&&(s.pageType=`DESIGN`),e.type===`BOOLEAN_OPERATION`&&(s.booleanOperation=e.booleanOperation??`UNION`),o.length>0&&(s.strokePaints=o),i.serializeLayoutProps(e,s),i.serializeGeometry(hs(e),s,i.blobs),i.serializeVariableBindings(e,s,i.graph,i.varIdToGuid),ss(i,e,s);let c=Fr(e.pluginData);c.length>0&&(s.pluginData=c),e.pluginRelaunchData.length>0&&(s.pluginRelaunchData=Ir(e.pluginRelaunchData));let l=[s],u=e.type===`INSTANCE`?[]:i.graph.getChildren(e.id).filter(e=>!e.internalOnly);for(let e=0;e<u.length;e++)l.push(...i.sceneNodeToKiwi(u[e],a,e,r,i));return l}function vs(e){let t=mr(e.axis);return t===void 0?{axisName:e.axis,value:e.value}:{axisTag:t,axisName:e.axis,value:e.value}}function ys(e,t,n,r){let i={styleID:e},a=t.fontWeight??n.fontWeight,o=t.italic??n.italic;return i.fontName={family:p(t.fontFamily??n.fontFamily),style:c(a,o),postscript:``},t.fontSize!==void 0&&(i.fontSize=t.fontSize),t.fontVariations&&t.fontVariations.length>0&&(i.fontVariations=t.fontVariations.map(vs)),t.fontFeatures&&t.fontFeatures.length>0&&fr(i,t.fontFeatures),t.letterSpacing!==void 0&&(i.letterSpacing={value:t.letterSpacing,units:`PIXELS`}),t.lineHeight!==void 0&&t.lineHeight!==null&&(i.lineHeight={value:t.lineHeight,units:`PIXELS`}),t.textDecoration&&(i.textDecoration=t.textDecoration),t.fills&&t.fills.length>0&&(i.fillPaints=t.fills.map(r)),i}function bs(e){let t=Array.from({length:e.text.length}).fill(0),n=new Map,r=1;for(let i of e.styleRuns){let e=JSON.stringify(i.style),a=n.get(e);a||(a={id:r++,style:i.style},n.set(e,a));for(let e=i.start;e<i.start+i.length&&e<t.length;e++)t[e]=a.id}return{charIds:t,styleMap:n}}function xs(e,t,n){if(e.styleRuns.length===0)return{characters:e.text,lines:t(e.text)};let{charIds:r,styleMap:i}=bs(e),a=[...i.values()].map(({id:t,style:r})=>ys(t,r,e,n));return{characters:e.text,lines:t(e.text),characterStyleIDs:r,styleOverrideTable:a}}function Ss(e){switch(e){case`FRAME`:return`FRAME`;case`RECTANGLE`:return`RECTANGLE`;case`ROUNDED_RECTANGLE`:return`ROUNDED_RECTANGLE`;case`ELLIPSE`:return`ELLIPSE`;case`TEXT`:return`TEXT`;case`LINE`:return`LINE`;case`STAR`:return`STAR`;case`POLYGON`:return`REGULAR_POLYGON`;case`VECTOR`:return`VECTOR`;case`BOOLEAN_OPERATION`:return`BOOLEAN_OPERATION`;case`GROUP`:return`FRAME`;case`SECTION`:return`SECTION`;case`COMPONENT`:return`SYMBOL`;case`COMPONENT_SET`:return`FRAME`;case`INSTANCE`:return`INSTANCE`;case`CONNECTOR`:return`CONNECTOR`;case`SHAPE_WITH_TEXT`:return`SHAPE_WITH_TEXT`;default:return`RECTANGLE`}}function Cs(e){let t=Math.floor(e/94),n=String.fromCharCode(33+e%94);return`~`.repeat(t)+n}function ws(e){let t=Math.max(1,e.split(`
`).length);return Array.from({length:t},()=>({lineType:`PLAIN`}))}function Ts(e,t,n){let r=Un(n),i=t.get(r);if(i!==void 0)return i;let a=e.push(n)-1;return t.set(r,a),a}function Es(e,t,n,r){let i=[],a=new Set,o=(e,n,r)=>{let o=d(n,r),s=p(e),l=`${s}|${o}`;a.has(l)||(a.add(l),i.push({key:{family:s,style:c(n,r),postscript:``},fontLineHeight:1.2,fontDigest:t.get(l),fontStyle:r?`ITALIC`:`NORMAL`,fontWeight:n}))};o(e.fontFamily,e.fontWeight,e.italic);for(let t of e.styleRuns)o(t.style.fontFamily??e.fontFamily,t.style.fontWeight??e.fontWeight,t.style.italic??e.italic);let s=e.lineHeight??Math.ceil(e.fontSize*1.2),l=e.text.length>0?e.width/Math.max(e.text.length,1):0,u=e.figmaDerivedTextGlyphs??[],m=u.length>0?u.map((e,t)=>({commandsBlob:Ts(n,r,e.commandsBlob),position:{x:e.x,y:e.y},fontSize:e.fontSize,firstCharacter:t,advance:t+1<u.length?Math.max(u[t+1].x-e.x,0):l,rotation:0})):(f(e.fontFamily,d(e.fontWeight,e.italic),e.text,e.fontSize)??[]).map((t,i)=>({commandsBlob:Ts(n,r,Mo(t.commands,e.fontSize)),position:{x:t.x||i*l,y:s},fontSize:e.fontSize,firstCharacter:i,advance:t.advance||l,rotation:0})),h=Array.from({length:e.text.length+1},(e,t)=>t*l);return No({node:e,glyphs:m,fontMetaData:i,baseline:s,width:e.width,lineHeight:s,lineAscent:Math.max(s-e.fontSize*.2,0),logicalIndexToCharacterOffsetMap:h})}function Ds(e){return{r:e.r,g:e.g,b:e.b,a:`a`in e?e.a:1}}function Os(e){let t={type:e.type,color:Ds(e.color),opacity:e.opacity,visible:e.visible,blendMode:e.blendMode??`NORMAL`};return e.gradientStops&&(t.stops=e.gradientStops.map(e=>({color:Ds(e.color),position:e.position}))),e.gradientTransform&&(t.transform=e.gradientTransform),e.imageHash&&(t.image={hash:Hn(e.imageHash)}),e.imageScaleMode&&(t.imageScaleMode=e.imageScaleMode),e.imageTransform&&(t.transform=e.imageTransform),e.sourceNodeId&&(t.sourceNodeId=F(e.sourceNodeId)),e.spacing&&(t.spacing=e.spacing),e.patternSpacing&&(t.patternSpacing=e.patternSpacing),e.patternTileType&&(t.patternTileType=e.patternTileType),e.verticalAlignment&&(t.verticalAlignment=e.verticalAlignment),e.horizontalAlignment&&(t.horizontalAlignment=e.horizontalAlignment),e.noiseType&&(t.noiseType=e.noiseType),e.density!==void 0&&(t.density=e.density),e.noiseSize&&(t.noiseSize=e.noiseSize),e.customEffectId&&(t.customEffectId={guid:F(e.customEffectId)}),t}function ks(e,t){let n=e.topLeftRadius>0||e.topRightRadius>0||e.bottomLeftRadius>0||e.bottomRightRadius>0;if(e.cornerRadius>0&&(t.cornerRadius=e.cornerRadius),n||e.independentCorners){let n=e.source.id?e.source.fig.rawNodeFields?.rectangleCornerRadiiIndependent:void 0;t.rectangleCornerRadiiIndependent=typeof n==`boolean`?n:e.independentCorners,t.rectangleTopLeftCornerRadius=e.topLeftRadius,t.rectangleTopRightCornerRadius=e.topRightRadius,t.rectangleBottomLeftCornerRadius=e.bottomLeftRadius,t.rectangleBottomRightCornerRadius=e.bottomRightRadius}e.cornerSmoothing>0&&(t.cornerSmoothing=e.cornerSmoothing)}function As(e,t){if(e.source.id)return e.textAutoResize;let n=e.parentId?t.getNode(e.parentId):void 0;return n&&n.layoutMode!==`NONE`&&n.layoutMode!==`GRID`&&e.layoutPositioning!==`ABSOLUTE`?`HEIGHT`:e.textAutoResize}function js(e,t,n,r,i,a){kr(e,Tr,e.textDirection),t.fontSize=e.fontSize,t.fontName={family:p(e.fontFamily),style:c(e.fontWeight,e.italic),postscript:``},t.textData=xs(e,ws,Os),e.fontVariations.length>0&&(t.fontVariations=e.fontVariations.map(vs)),t.textAutoResize=As(e,n),t.textAlignHorizontal=e.textAlignHorizontal,t.textAlignVertical=e.textAlignVertical,t.textUserLayoutVersion=4,t.textExplicitLayoutVersion=1,t.textBidiVersion=1,t.textDecorationSkipInk=!0,t.fontVariantCommonLigatures=!0,t.fontVariantContextualLigatures=!0,fr(t,e.fontFeatures),t.fontVersion=``,t.emojiImageSet=`APPLE`,e.textCase!==`ORIGINAL`&&(t.textCase=e.textCase),r&&(t.derivedTextData=Es(e,r,i,a??new Map)),e.lineHeight!=null&&(t.lineHeight={value:e.lineHeight,units:`PIXELS`}),t.letterSpacing={value:e.letterSpacing,units:`PIXELS`},e.textDecoration!==`NONE`&&(t.textDecoration=e.textDecoration===`UNDERLINE`?`UNDERLINE`:`STRIKETHROUGH`)}function Ms(e){return e===`HORIZONTAL`||e===`VERTICAL`||e===`NONE`?e:void 0}function Ns(e){return e===`FIXED`||e===`RESIZE_TO_FIT`||e===`RESIZE_TO_FIT_WITH_IMPLICIT_SIZE`?e:void 0}function Ps(e){return e===`SPACE_EVENLY`?`SPACE_BETWEEN`:e}function Fs(e){return e===`SPACE_EVENLY`?`SPACE_BETWEEN`:e}function Is(e,t){e.source.id||kr(e,Er,e.layoutDirection);let n=e.source.fig.layout;if(n){t.stackMode=Ms(n.stackMode),t.stackSpacing=n.stackSpacing,t.stackPadding=n.stackPadding,t.stackPaddingRight=n.stackPaddingRight,t.stackPaddingBottom=n.stackPaddingBottom,t.stackCounterAlign=Fs(n.stackCounterAlign),t.stackJustify=Ps(n.stackJustify),t.stackCounterAlignItems=Fs(n.stackCounterAlignItems),t.stackPrimaryAlignItems=Ps(n.stackPrimaryAlignItems);let e=Ns(n.stackPrimarySizing);e&&(t.stackPrimarySizing=e);let r=Ns(n.stackCounterSizing);r&&(t.stackCounterSizing=r),t.stackVerticalPadding=n.stackVerticalPadding,t.stackHorizontalPadding=n.stackHorizontalPadding,t.stackWrap=n.stackWrap,t.stackPositioning=n.stackPositioning,t.stackChildPrimaryGrow=n.stackChildPrimaryGrow,t.stackChildAlignSelf=n.stackChildAlignSelf,t.stackCounterSpacing=n.stackCounterSpacing,t.bordersTakeSpace=n.bordersTakeSpace,n.stackReverseZIndex&&(t.stackReverseZIndex=!0);return}e.layoutMode!==`NONE`&&e.layoutMode!==`GRID`&&(t.stackMode=e.layoutMode,t.stackSpacing=e.itemSpacing,t.stackVerticalPadding=e.paddingTop,t.stackHorizontalPadding=e.paddingLeft,t.stackPaddingBottom=e.paddingBottom,t.stackPaddingRight=e.paddingRight,t.stackPrimarySizing=e.primaryAxisSizing===`HUG`?`RESIZE_TO_FIT`:`FIXED`,t.stackCounterSizing=e.counterAxisSizing===`HUG`?`RESIZE_TO_FIT`:`FIXED`,t.stackPrimaryAlignItems=Ps(e.primaryAxisAlign),t.stackCounterAlignItems=Fs(e.counterAxisAlign),e.layoutWrap===`WRAP`&&(t.stackWrap=`WRAP`),e.counterAxisSpacing>0&&(t.stackCounterSpacing=e.counterAxisSpacing),t.bordersTakeSpace=e.strokesIncludedInLayout),e.itemReverseZIndex&&(t.stackReverseZIndex=!0),e.layoutPositioning===`ABSOLUTE`&&(t.stackPositioning=`ABSOLUTE`),e.layoutGrow>0&&(t.stackChildPrimaryGrow=e.layoutGrow),e.layoutAlignSelf!==`AUTO`&&(t.stackChildAlignSelf=e.layoutAlignSelf)}function Ls(e,t,n){if(e.vectorNetwork&&e.type===`VECTOR`){let{table:r,mirroringToId:i}=v(e.vectorNetwork),a=n.length;n.push(C(e.vectorNetwork,i));let o={vectorNetworkBlob:a,normalizedSize:{x:e.width,y:e.height}};r.length>0&&(o.styleOverrideTable=r),t.vectorData=o}e.fillGeometry.length>0&&(t.fillGeometry=e.fillGeometry.map(e=>{let t=n.length;return n.push(e.commandsBlob),{windingRule:e.windingRule,commandsBlob:t}})),e.strokeGeometry.length>0&&(t.strokeGeometry=e.strokeGeometry.map(e=>{let t=n.length;return n.push(e.commandsBlob),{windingRule:e.windingRule,commandsBlob:t}}))}function Rs(e,t,n,r){if(Object.keys(e.boundVariables).length===0)return;let i=[],a={},o={COLOR:`COLOR`,BOOLEAN:`BOOLEAN`,STRING:`STRING`};for(let[t,s]of Object.entries(e.boundVariables)){let e=n.variables.get(s);if(!e)continue;let c=r?.get(s)??F(s);a[t]=P(c);let l=zr[t];if(!l)continue;let u=o[e.type]??`FLOAT`;i.push({variableData:{value:{alias:{guid:c}},dataType:`ALIAS`,resolvedDataType:u},variableField:l})}Object.keys(a).length>0&&kr(e,Or,JSON.stringify(a)),i.length>0&&(t.variableConsumptionMap={entries:i})}function zs(e){let t=e.flipX?-1:1,n=Math.cos(e.rotation*Math.PI/180),r=Math.sin(e.rotation*Math.PI/180),i=n*t,a=-r,o=r*t,s=n,c=[{x:0,y:0},{x:e.width,y:0},{x:0,y:e.height},{x:e.width,y:e.height}].map(e=>({x:i*e.x+a*e.y,y:o*e.x+s*e.y})),l=Math.min(...c.map(e=>e.x)),u=Math.min(...c.map(e=>e.y));return{m00:i,m01:a,m02:e.x-l,m10:o,m11:s,m12:e.y-u}}function Bs(e,t,n,r,i,a,o,s,c,l=new Map,u){return _s(e,t,n,r,{graph:i,blobs:a,blobIndexByHex:u,nodeIdToGuid:o,fontDigestMap:s,glyphBlobMap:l,varIdToGuid:c,assetRefToVarGuid:c?Vo(i,c):void 0,fractionalPosition:Cs,mapToFigmaType:Ss,fillToKiwiPaint:Os,safeColor:Ds,computeExportTransform:zs,serializeCornerRadii:ks,serializeTextProps:js,serializeLayoutProps:Is,serializeGeometry:Ls,serializeVariableBindings:Rs,sceneNodeToKiwi:_s})}var Vs={m00:1,m01:0,m02:0,m10:0,m11:1,m12:0},Hs=1;function Us(e,t=`display-p3`){return{guid:e,type:`DOCUMENT`,name:`Document`,visible:!0,opacity:1,phase:`CREATED`,transform:{...Vs},strokeWeight:Hs,strokeAlign:`CENTER`,strokeJoin:`MITER`,documentColorProfile:t===`display-p3`?`DISPLAY_P3`:`SRGB`}}function Ws(e,t,n,r,i){return{guid:e,parentIndex:{guid:t,position:n},type:`CANVAS`,name:r,visible:!0,opacity:1,phase:`CREATED`,transform:{...Vs},strokeWeight:Hs,strokeAlign:`CENTER`,strokeJoin:`MITER`,pageType:`DESIGN`,...i}}function Gs(e,t,n,r,i,a){try{let{lines:t}=w(ee(e,`${i}px ${a}`),r,Math.ceil(i*1.2)),n=[],o=0;for(let e of t)o>0&&n.push(o),o+=e.text.length;return n}catch{return Ks(e,t,n,r)}}function Ks(e,t,n,r){let i=[],a=0,o=0,s=0;for(let c=0;c<t.length;c++){let l=t[c].advance||n,u=e[c];if((u===` `||u===`	`||u===`-`&&c+1<e.length)&&(o=c+1,s=a+l),a>0&&a+l>r+.5){let e=i.length>0?i[i.length-1]:0;o>e?(i.push(o),a-=s):(i.push(c),a=0),o=i[i.length-1],s=0}a+=l}return i}function qs(e,t,n,r){return t.length>0?t.map(e=>({advance:e.advance||n,commands:e.commands})):Array.from({length:e.length},()=>({advance:n||r*.6,commands:[]}))}function Js(e,t,n,r,i){return i?[]:t.length>0?Gs(e.text,n,r,e.width,e.fontSize,e.fontFamily):Ks(e.text,n,r,e.width)}async function Ys(e,t,n,r){let i=d(e.fontWeight,e.italic),a=p(e.fontFamily),o=`${a}|${i}`,s=e.lineHeight??Math.ceil(e.fontSize*1.2),l=f(e.fontFamily,i,e.text,e.fontSize)??[],u=e.text.length>0?e.width/Math.max(e.text.length,1):0,m=qs(e.text,l,u,e.fontSize),h=Math.max(s-e.fontSize*.2,0),g=Js(e,l,m,u,n),_=new Set(g),v=new Map;if(n)for(let e of n.glyphs)v.set(e.firstCharacter,e);let y=[],b=Array.from({length:e.text.length+1},()=>0),x=0,S=s,C=0,w=m.map((t,i)=>{let a=v.get(i),o=t.advance||u;!a&&_.has(i)&&(y.push({firstCharacter:C,endCharacter:i,position:{x:0,y:S},width:x,lineHeight:s,lineAscent:h}),C=i,x=0,S+=s);let c=x;return b[i]=c,x+=o,{commandsBlob:r&&t.commands.length>0?r.push(Mo(t.commands,e.fontSize))-1:void 0,position:{x:a?.x??c,y:a?.y??n?.baseline??S},fontSize:e.fontSize,firstCharacter:a?.firstCharacter??i,advance:(a?.advance??o)/e.fontSize,rotation:0}});return b[e.text.length]=x,e.text.length>0&&y.push({firstCharacter:C,endCharacter:e.text.length,position:{x:0,y:S},width:x,lineHeight:s,lineAscent:h}),No({node:e,glyphs:w,fontMetaData:[{key:{family:a,style:c(e.fontWeight,e.italic),postscript:``},fontLineHeight:1.2,fontDigest:t.get(o),fontStyle:e.italic?`ITALIC`:`NORMAL`,fontWeight:e.fontWeight}],baseline:n?.baseline??s,width:n?.lineWidth??e.width,lineHeight:n?.lineHeight??s,lineAscent:n?.lineAscent??h,baselines:n?n.baselines:y,logicalIndexToCharacterOffsetMap:n?.logicalIndexToCharacterOffsetMap??b})}function Xs(e){let t=e.match(/<!--\(openpencil\)(.*?)\(\/openpencil\)-->/s);if(!t)return null;try{let e=Uint8Array.fromBase64(t[1]),n;try{n=Le(e)}catch{n=e}let r=JSON.parse(new TextDecoder().decode(n));if(r.format===`openpencil/v1`&&Array.isArray(r.nodes)){Zs(r.nodes);let e=new Map;if(r.images&&typeof r.images==`object`)for(let[t,n]of Object.entries(r.images))typeof n==`string`&&e.set(t,Uint8Array.fromBase64(n));return{nodes:r.nodes,images:e}}}catch(e){console.warn(`Failed to parse OpenPencil clipboard data:`,e)}return null}function Zs(e){for(let t of e)typeof t.textPicture==`string`&&(t.textPicture=Uint8Array.fromBase64(t.textPicture)),Array.isArray(t.children)&&Zs(t.children)}function Qs(e,t){let n=new Set;function r(e){for(let i of e){for(let e of i.fills)e.imageHash&&n.add(e.imageHash);r(t.getChildren(i.id))}}return r(e),n}function $s(e,t,n){let r=ec(e,t,n),i=Qs(e,t),a={};for(let e of i){let n=t.images.get(e);n&&(a[e]=n.toBase64())}let o={format:`openpencil/v1`,nodes:r,images:a};return`<!--(openpencil)${ze(new TextEncoder().encode(JSON.stringify(o))).toBase64()}(/openpencil)-->`}function ec(e,t,n){return e.map(e=>{let r=t.getChildren(e.id),i={...e};if(e.type===`TEXT`&&e.text&&n){let t=e.textPicture??n(e);t&&(i.textPicture=t.toBase64())}else delete i.textPicture;return r.length>0&&(i.children=ec(r,t,n)),i})}async function tc(){await Gn()}async function nc(e){let t=e.match(/\(figmeta\)(.*?)\(\/figmeta\)/),n=e.match(/\(figma\)(.*?)\(\/figma\)/s);if(!t||!n)return null;let r=JSON.parse(atob(t[1])),i=Uint8Array.fromBase64(n[1]);try{let e=Po(i);if(!e)return null;let t=dn(mn(new sn(Le(e[0])))),n=await Fo(e[1]),a=t.decodeMessage(n),o=(a.blobs??[]).map(e=>e.bytes instanceof Uint8Array?e.bytes:new Uint8Array(Object.values(e.bytes)));return{nodes:a.nodeChanges??[],meta:r,blobs:o}}catch{return null}}var rc=new Set([`DOCUMENT`,`CANVAS`,`VARIABLE_SET`,`VARIABLE`,`VARIABLE_COLLECTION`,`STYLE`,`STYLE_SET`,`INTERNAL_ONLY_NODE`,`WIDGET`,`STAMP`,`STICKY`,`SHAPE_WITH_TEXT`,`CONNECTOR`,`CODE_BLOCK`,`TABLE_NODE`,`TABLE_CELL`,`SECTION_OVERLAY`,`SLIDE`]);function ic(e){let t=new Map,n=new Map;for(let r of e){if(!r.guid)continue;let e=`${r.guid.sessionID}:${r.guid.localID}`;t.set(e,r),r.parentIndex?.guid&&n.set(e,`${r.parentIndex.guid.sessionID}:${r.parentIndex.guid.localID}`)}return{guidMap:t,parentMap:n}}function ac(e,t){let n=new Set;for(let[t,r]of e)r.type===`CANVAS`&&r.internalOnly&&n.add(t);let r=new Set;function i(e){r.add(e);for(let[n,a]of t)a===e&&!r.has(n)&&i(n)}for(let e of n)i(e);return{internalCanvasIds:n,internalFigmaIds:r}}function oc(e,t,n){let r=[],i=[];for(let[a,o]of e){if(rc.has(o.type??``))continue;let s=t.get(a);(!s||!e.has(s)||rc.has(e.get(s)?.type??``))&&(s&&n.has(s)?i.push(a):r.push(a))}return{topLevel:r,internalTopLevel:i}}function sc(e,t){for(let[,n]of e){let r=t.getNode(n);if(r?.type!==`INSTANCE`||!r.componentId)continue;let i=e.get(r.componentId);i&&t.updateNode(n,{componentId:i})}}function cc(e,t){for(let[,n]of e){let e=t.getNode(n);e?.type===`INSTANCE`&&e.childIds.length===0&&(!e.componentId||!t.getNode(e.componentId))&&t.updateNode(n,{type:`FRAME`,componentId:``})}}function lc(e,t,n,r=0,i=0,a=[]){let{guidMap:o,parentMap:s}=ic(e),{internalCanvasIds:c,internalFigmaIds:l}=ac(o,s),{topLevel:u,internalTopLevel:d}=oc(o,s,c),f=new Map,p=[];function m(e,c){if(f.has(e))return;let u=o.get(e);if(!u)return;let{nodeType:d,...h}=si(u,a);if(d===`DOCUMENT`||d===`VARIABLE`)return;c===n&&(h.x=(h.x??0)+r,h.y=(h.y??0)+i);let g=t.createNode(d,c,h);f.set(e,g.id),c===n&&!l.has(e)&&p.push(g.id);let _=[];for(let[t,n]of s)n===e&&!rc.has(o.get(t)?.type??``)&&_.push(t);xi(_,u,o);for(let e of _)m(e,g.id)}for(let e of d)m(e,n);for(let e of u)m(e,n);sc(f,t),Do(t,o,f,a);for(let e of d){let n=f.get(e);n&&t.deleteNode(n)}return cc(f,t),p}async function uc(e,t){let n=Kn(),r=ze(qn()),i=await Bo(t),a={sessionID:0,localID:0},o={sessionID:0,localID:1},s={value:100},c=[Us(a,t.documentColorSpace),Ws(o,a,`!`,`Page 1`)],l=[],u=e=>{e.type===`TEXT`&&l.push(e);for(let n of e.childIds){let e=t.getNode(n);e&&u(e)}},d=[];for(let n=0;n<e.length;n++)u(e[n]),c.push(...Bs(e[n],o,n,s,t,d,void 0,i));let f=[...l];await Promise.all(c.map(async e=>{if(e.type!==`TEXT`)return;let t=f.shift();t&&(e.textAutoResize=`NONE`,e.textUserLayoutVersion=5,e.lineHeight={value:t.lineHeight??100,units:t.lineHeight?`PIXELS`:`PERCENT`},e.derivedTextData=await Ys(t,i,await ve(t).catch(()=>null),d))}));let p={type:`NODE_CHANGES`,sessionID:0,ackID:0,pasteID:nt(),pasteFileKey:`openpencil`,nodeChanges:c};d.length>0&&(p.blobs=d.map(e=>({bytes:e})));let m=Io(r,n.encodeMessage(p)).toBase64(),h={fileKey:`openpencil`,pasteID:p.pasteID,dataType:`scene`};return`<meta charset='utf-8'><span data-metadata="<!--(figmeta)${btoa(JSON.stringify(h))}(/figmeta)-->"></span><span data-buffer="<!--(figma)${m}(/figma)-->"></span>`}function dc(e){function t(t,n){if(t.length===0)return;let r=new Map;for(let i of t){let t=e.graph.getNode(i);if(!t)continue;r.set(i,{flipX:t.flipX,flipY:t.flipY});let a=n===`horizontal`?{flipX:!t.flipX}:{flipY:!t.flipY};e.graph.updateNode(i,a)}let i=new Map;for(let[t]of r){let n=e.graph.getNode(t);n&&i.set(t,{flipX:n.flipX,flipY:n.flipY})}e.undo.push({label:`Flip`,forward:()=>{for(let[t,n]of i)e.graph.updateNode(t,n)},inverse:()=>{for(let[t,n]of r)e.graph.updateNode(t,n)}}),e.requestRender()}function n(t,n){if(t.length===0)return;let r=new Map;for(let i of t){let t=e.graph.getNode(i);t&&(r.set(i,t.rotation),e.graph.updateNode(i,{rotation:((t.rotation+n)%360+360)%360}))}let i=new Map;for(let[t]of r){let n=e.graph.getNode(t);n&&i.set(t,n.rotation)}e.undo.push({label:`Rotate`,forward:()=>{for(let[t,n]of i)e.graph.updateNode(t,{rotation:n})},inverse:()=>{for(let[t,n]of r)e.graph.updateNode(t,{rotation:n})}}),e.requestRender()}return{flipNodes:t,rotateNodes:n}}function fc(e,t){let n=new Map;for(let r of t){let t=e.graph.getNode(r);t&&n.set(r,{x:t.x,y:t.y})}return n}function pc(e,t,n,r){e.undo.push({label:t,forward:()=>mc(e,r),inverse:()=>mc(e,n)})}function mc(e,t){for(let[n,r]of t)e.graph.updateNode(n,r),e.runLayoutForNode(n)}function hc(e,t,n,r){return r===`min`?e:r===`center`?(e+t)/2-n/2:t-n}function gc(e,t,n,r){let i=t.parentId?e.graph.getNode(t.parentId):void 0,a=i?.width??0,o=i?.height??0;n===`horizontal`?e.graph.updateNode(t.id,{x:hc(0,a,t.width,r)}):e.graph.updateNode(t.id,{y:hc(0,o,t.height,r)})}function _c(e,t,n,r){let i=new Map;for(let n of t)i.set(n.id,e.graph.getAbsolutePosition(n.id));let a=pe(t,e=>i.get(e)??{x:0,y:0}),o=a.x,s=a.y,c=a.x+a.width,l=a.y+a.height;for(let a of t){if(!i.get(a.id))continue;let t=a.parentId?e.graph.getAbsolutePosition(a.parentId):{x:0,y:0};if(n===`horizontal`){let n=hc(o,c,a.width,r);e.graph.updateNode(a.id,{x:n-t.x})}else{let n=hc(s,l,a.height,r);e.graph.updateNode(a.id,{y:n-t.y})}}}function vc(e){function t(t,n,r){if(t.length===0)return;let i=t.map(t=>e.graph.getNode(t)).filter(e=>e!=null);if(i.length===0)return;let a=fc(e,i.map(e=>e.id));i.length===1?gc(e,i[0],n,r):_c(e,i,n,r),pc(e,`Align`,a,fc(e,a.keys()));for(let n of t)e.runLayoutForNode(n);e.requestRender()}let{flipNodes:n,rotateNodes:r}=dc(e);return{alignNodes:t,flipNodes:n,rotateNodes:r}}function yc(e,t){return{duplicateSelected:()=>e.duplicateSelected(t.getSelectedNodes()),writeCopyData:n=>e.writeCopyData(n,t.getSelectedNodes()),pasteFromHTML:e.pasteFromHTML,deleteSelected:e.deleteSelected,storeImage:e.storeImage,placeImageFiles:e.placeImageFiles,loadFontsForNodes:e.loadFontsForNodes,copySelectionAsText:e.copySelectionAsText,copySelectionAsSVG:e.copySelectionAsSVG,copySelectionAsJSX:e.copySelectionAsJSX}}function bc(e,t,n,r){return{createComponentFromSelection:()=>e.createComponentFromSelection(t.getSelectedNodes(),n.wrapSelectionInContainer),createComponentSetFromComponents:()=>e.createComponentSetFromComponents(t.getSelectedNodes(),n.wrapSelectionInContainer),createInstanceFromComponent:e.createInstanceFromComponent,detachInstance:()=>e.detachInstance(t.getSelectedNode()),goToMainComponent:()=>e.goToMainComponent(t.getSelectedNode(),r.switchPage),getComponentSetPropertyDefs:e.getComponentSetPropertyDefs,addPropertyDefinition:e.addPropertyDefinition,removePropertyDefinition:e.removePropertyDefinition,renamePropertyDefinition:e.renamePropertyDefinition,collectVariantOptions:e.collectVariantOptions,findVariantByValues:e.findVariantByValues,getDefaultVariantForComponentSet:e.getDefaultVariantForComponentSet,getComponentSetVariantConflicts:e.getComponentSetVariantConflicts,switchInstanceVariant:e.switchInstanceVariant}}function xc(e,t){return{wrapInAutoLayout:()=>e.wrapInAutoLayout(t.getSelectedNodes()),groupSelected:()=>e.groupSelected(t.getSelectedNodes()),frameSelection:()=>e.frameSelection(t.getSelectedNodes()),booleanOperationSelected:n=>e.booleanOperationSelected(t.getSelectedNodes(),n),flattenSelected:()=>e.flattenSelected(t.getSelectedNodes()),outlineTextSelected:()=>e.outlineTextSelected(t.getSelectedNodes()),outlineStrokeSelected:()=>e.outlineStrokeSelected(t.getSelectedNodes()),ungroupSelected:()=>e.ungroupSelected(t.getSelectedNode())}}function Sc(e,t){return{commitMove:e.commitMove,commitMoveWithReparent:e.commitMoveWithReparent,commitDuplicateMove:e.commitDuplicateMove,commitResize:e.commitResize,commitRotation:e.commitRotation,commitNodeUpdate:e.commitNodeUpdate,undoAction:()=>e.undoAction(t.validateEnteredContainer),redoAction:()=>e.redoAction(t.validateEnteredContainer),snapshotPage:e.snapshotPage,restorePageFromSnapshot:e.restorePageFromSnapshot,pushUndoEntry:e.pushUndoEntry}}function Cc(e){async function t(t,n){if(n.length===0)return;let r=n.map(e=>e.name).join(`
`);t.setData(`text/html`,$s(n,e.graph)),t.setData(`text/plain`,r);let i=await uc(n,e.graph);i&&t.setData(`text/html`,i)}return{writeCopyData:t}}function wc(e,t=1){return et(e,t)}function Tc(e){let t=e.filter(e=>e.visible&&e.type===`SOLID`);return t.length===1?wc(t[0].color,t[0].opacity):null}function Ec(e){let t=e.filter(e=>e.visible);if(t.length!==1)return null;let n=t[0];return{color:wc(n.color,n.opacity),weight:n.weight,dash:n.dashPattern&&n.dashPattern.length>0?[...n.dashPattern]:null}}function Dc(e){return e.type!==`DROP_SHADOW`&&e.type!==`INNER_SHADOW`?null:`${e.offset.x} ${e.offset.y} ${e.radius} ${wc(e.color,e.color.a)}`}var Oc={"{":`&#123;`,"}":`&#125;`,"<":`&lt;`,">":`&gt;`,"&":`&amp;`};function kc(e){return e.replace(/[{}<>&]/g,e=>Oc[e])}function Ac(e,t){return typeof t==`string`?`${e}="${t}"`:typeof t==`number`?`${e}={${t}}`:typeof t==`boolean`?t?e:`${e}={false}`:`${e}={${JSON.stringify(t)}}`}function jc(e,t){let n=e.parentId?t.getNode(e.parentId):null;return{isAutoLayout:e.layoutMode!==`NONE`,isGrid:e.layoutMode===`GRID`,isFlex:e.layoutMode===`HORIZONTAL`||e.layoutMode===`VERTICAL`,parentIsAutoLayout:n?n.layoutMode!==`NONE`:!1,parentIsGrid:n?n.layoutMode===`GRID`:!1}}function Mc(e){let{paddingTop:t,paddingRight:n,paddingBottom:r,paddingLeft:i}=e;return t===0&&n===0&&r===0&&i===0?null:{pt:t,pr:n,pb:r,pl:i}}function Nc(e,t,n,r){let{pt:i,pr:a,pb:o,pl:s}=e;return i===a&&a===o&&o===s?[t(i)]:i===o&&s===a?n(i,s):r(e)}function Pc(e){if(e.cornerRadius<=0)return null;if(e.independentCorners)return{tl:e.topLeftRadius,tr:e.topRightRadius,br:e.bottomRightRadius,bl:e.bottomLeftRadius};let t=e.cornerRadius;return{tl:t,tr:t,br:t,bl:t}}function Fc(e){return e.sizing===`FR`?`${e.value}fr`:e.sizing===`FIXED`?`${e.value}px`:`auto`}function Ic(e){return e.map(Fc).join(` `)}var Lc=[{properties:[`margin-top`,`margin-right`,`margin-bottom`,`margin-left`],all:`m`,x:`mx`,y:`my`,top:`mt`,right:`mr`,bottom:`mb`,left:`ml`},{properties:[`padding-top`,`padding-right`,`padding-bottom`,`padding-left`],all:`p`,x:`px`,y:`py`,top:`pt`,right:`pr`,bottom:`pb`,left:`pl`},{properties:[`top`,`right`,`bottom`,`left`],all:`inset`,x:`inset-x`,y:`inset-y`,top:`top`,right:`right`,bottom:`bottom`,left:`left`},{properties:[`border-top-width`,`border-right-width`,`border-bottom-width`,`border-left-width`],all:`border`,x:`border-x`,y:`border-y`,top:`border-t`,right:`border-r`,bottom:`border-b`,left:`border-l`},{properties:[`border-top-color`,`border-right-color`,`border-bottom-color`,`border-left-color`],all:`border`,x:`border-x`,y:`border-y`,top:`border-t`,right:`border-r`,bottom:`border-b`,left:`border-l`},{properties:[`border-top-style`,`border-right-style`,`border-bottom-style`,`border-left-style`],all:`border`,x:`border-x`,y:`border-y`,top:`border-t`,right:`border-r`,bottom:`border-b`,left:`border-l`},{properties:[`scroll-margin-top`,`scroll-margin-right`,`scroll-margin-bottom`,`scroll-margin-left`],all:`scroll-m`,x:`scroll-mx`,y:`scroll-my`,top:`scroll-mt`,right:`scroll-mr`,bottom:`scroll-mb`,left:`scroll-ml`},{properties:[`scroll-padding-top`,`scroll-padding-right`,`scroll-padding-bottom`,`scroll-padding-left`],all:`scroll-p`,x:`scroll-px`,y:`scroll-py`,top:`scroll-pt`,right:`scroll-pr`,bottom:`scroll-pb`,left:`scroll-pl`}];function Rc(e,t){if(t.compression===`none`)return e;let n=[...e],r=[];for(let e of Lc){let t=zc(n,e.properties);if(!t)continue;let i=Bc(t,e);n=n.filter(t=>!e.properties.includes(t.property)),r.push(...i)}let i=[...n,...r];return i=Hc(i),i=Vc(i),i}function zc(e,t){let[n,r,i,a]=t,o=e.find(e=>e.property===n),s=e.find(e=>e.property===r),c=e.find(e=>e.property===i),l=e.find(e=>e.property===a);return o&&s&&c&&l?{top:o,right:s,bottom:c,left:l}:void 0}function Bc(e,t){let n=L(e.top.className,t.top),r=L(e.right.className,t.right),i=L(e.bottom.className,t.bottom),a=L(e.left.className,t.left);if(!n||!r||!i||!a)return[e.top,e.right,e.bottom,e.left];if(n===r&&r===i&&i===a)return[R(e.top,`${t.all}-${n}`)];if(n===i&&r===a)return[R(e.top,`${t.y}-${n}`),R(e.right,`${t.x}-${r}`)];let o=[];return n===i?o.push(R(e.top,`${t.y}-${n}`)):o.push(R(e.top,`${t.top}-${n}`),R(e.bottom,`${t.bottom}-${i}`)),r===a?o.push(R(e.right,`${t.x}-${r}`)):o.push(R(e.right,`${t.right}-${r}`),R(e.left,`${t.left}-${a}`)),o}function L(e,t){if(e.startsWith(t+`-`))return e.slice(t.length+1)}function Vc(e){let t=[...e],n=t.find(e=>e.property===`row-gap`),r=t.find(e=>e.property===`column-gap`);if(n&&r){let e=L(n.className,`gap-y`),i=L(r.className,`gap-x`);e&&i&&e===i&&(t=t.filter(e=>e.property!==`row-gap`&&e.property!==`column-gap`),t.push(R(n,`gap-${e}`)))}return t}function Hc(e){let t=`border-top-left-radius`,n=`border-top-right-radius`,r=`border-bottom-right-radius`,i=`border-bottom-left-radius`,a=e.find(e=>e.property===t),o=e.find(e=>e.property===n),s=e.find(e=>e.property===r),c=e.find(e=>e.property===i);if(!a||!o||!s||!c)return e;let l=L(a.className,`rounded-tl`),u=L(o.className,`rounded-tr`),d=L(s.className,`rounded-br`),f=L(c.className,`rounded-bl`);if(!l||!u||!d||!f)return e;let p=new Set([t,n,r,i]),m=e.filter(e=>!p.has(e.property));if(l===u&&u===d&&d===f)return[...m,R(a,`rounded-${l}`)];let h=[...m];return l===f&&u===d?(h.push(R(a,`rounded-l-${l}`)),h.push(R(o,`rounded-r-${u}`)),h):(l===u?h.push(R(a,`rounded-t-${l}`)):h.push(a,o),d===f?h.push(R(s,`rounded-b-${d}`)):h.push(s,c),h)}function R(e,t){return{...e,className:t}}var Uc={"red-50":`#fef2f2`,"red-100":`#fee2e2`,"red-200":`#fecaca`,"red-300":`#fca5a5`,"red-400":`#f87171`,"red-500":`#ef4444`,"red-600":`#dc2626`,"red-700":`#b91c1c`,"red-800":`#991b1b`,"red-900":`#7f1d1d`,"red-950":`#450a0a`,"orange-50":`#fff7ed`,"orange-100":`#ffedd5`,"orange-200":`#fed7aa`,"orange-300":`#fdba74`,"orange-400":`#fb923c`,"orange-500":`#f97316`,"orange-600":`#ea580c`,"orange-700":`#c2410c`,"orange-800":`#9a3412`,"orange-900":`#7c2d12`,"orange-950":`#431407`,"amber-50":`#fffbeb`,"amber-100":`#fef3c7`,"amber-200":`#fde68a`,"amber-300":`#fcd34d`,"amber-400":`#fbbf24`,"amber-500":`#f59e0b`,"amber-600":`#d97706`,"amber-700":`#b45309`,"amber-800":`#92400e`,"amber-900":`#78350f`,"amber-950":`#451a03`,"yellow-50":`#fefce8`,"yellow-100":`#fef9c3`,"yellow-200":`#fef08a`,"yellow-300":`#fde047`,"yellow-400":`#facc15`,"yellow-500":`#eab308`,"yellow-600":`#ca8a04`,"yellow-700":`#a16207`,"yellow-800":`#854d0e`,"yellow-900":`#713f12`,"yellow-950":`#422006`,"lime-50":`#f7fee7`,"lime-100":`#ecfccb`,"lime-200":`#d9f99d`,"lime-300":`#bef264`,"lime-400":`#a3e635`,"lime-500":`#84cc16`,"lime-600":`#65a30d`,"lime-700":`#4d7c0f`,"lime-800":`#3f6212`,"lime-900":`#365314`,"lime-950":`#1a2e05`,"green-50":`#f0fdf4`,"green-100":`#dcfce7`,"green-200":`#bbf7d0`,"green-300":`#86efac`,"green-400":`#4ade80`,"green-500":`#22c55e`,"green-600":`#16a34a`,"green-700":`#15803d`,"green-800":`#166534`,"green-900":`#14532d`,"green-950":`#052e16`,"emerald-50":`#ecfdf5`,"emerald-100":`#d1fae5`,"emerald-200":`#a7f3d0`,"emerald-300":`#6ee7b7`,"emerald-400":`#34d399`,"emerald-500":`#10b981`,"emerald-600":`#059669`,"emerald-700":`#047857`,"emerald-800":`#065f46`,"emerald-900":`#064e3b`,"emerald-950":`#022c22`,"teal-50":`#f0fdfa`,"teal-100":`#ccfbf1`,"teal-200":`#99f6e4`,"teal-300":`#5eead4`,"teal-400":`#2dd4bf`,"teal-500":`#14b8a6`,"teal-600":`#0d9488`,"teal-700":`#0f766e`,"teal-800":`#115e59`,"teal-900":`#134e4a`,"teal-950":`#042f2e`,"cyan-50":`#ecfeff`,"cyan-100":`#cffafe`,"cyan-200":`#a5f3fc`,"cyan-300":`#67e8f9`,"cyan-400":`#22d3ee`,"cyan-500":`#06b6d4`,"cyan-600":`#0891b2`,"cyan-700":`#0e7490`,"cyan-800":`#155e75`,"cyan-900":`#164e63`,"cyan-950":`#083344`,"sky-50":`#f0f9ff`,"sky-100":`#e0f2fe`,"sky-200":`#bae6fd`,"sky-300":`#7dd3fc`,"sky-400":`#38bdf8`,"sky-500":`#0ea5e9`,"sky-600":`#0284c7`,"sky-700":`#0369a1`,"sky-800":`#075985`,"sky-900":`#0c4a6e`,"sky-950":`#082f49`,"blue-50":`#eff6ff`,"blue-100":`#dbeafe`,"blue-200":`#bfdbfe`,"blue-300":`#93c5fd`,"blue-400":`#60a5fa`,"blue-500":`#3b82f6`,"blue-600":`#2563eb`,"blue-700":`#1d4ed8`,"blue-800":`#1e40af`,"blue-900":`#1e3a8a`,"blue-950":`#172554`,"indigo-50":`#eef2ff`,"indigo-100":`#e0e7ff`,"indigo-200":`#c7d2fe`,"indigo-300":`#a5b4fc`,"indigo-400":`#818cf8`,"indigo-500":`#6366f1`,"indigo-600":`#4f46e5`,"indigo-700":`#4338ca`,"indigo-800":`#3730a3`,"indigo-900":`#312e81`,"indigo-950":`#1e1b4b`,"violet-50":`#f5f3ff`,"violet-100":`#ede9fe`,"violet-200":`#ddd6fe`,"violet-300":`#c4b5fd`,"violet-400":`#a78bfa`,"violet-500":`#8b5cf6`,"violet-600":`#7c3aed`,"violet-700":`#6d28d9`,"violet-800":`#5b21b6`,"violet-900":`#4c1d95`,"violet-950":`#2e1065`,"purple-50":`#faf5ff`,"purple-100":`#f3e8ff`,"purple-200":`#e9d5ff`,"purple-300":`#d8b4fe`,"purple-400":`#c084fc`,"purple-500":`#a855f7`,"purple-600":`#9333ea`,"purple-700":`#7e22ce`,"purple-800":`#6b21a8`,"purple-900":`#581c87`,"purple-950":`#3b0764`,"fuchsia-50":`#fdf4ff`,"fuchsia-100":`#fae8ff`,"fuchsia-200":`#f5d0fe`,"fuchsia-300":`#f0abfc`,"fuchsia-400":`#e879f9`,"fuchsia-500":`#d946ef`,"fuchsia-600":`#c026d3`,"fuchsia-700":`#a21caf`,"fuchsia-800":`#86198f`,"fuchsia-900":`#701a75`,"fuchsia-950":`#4a044e`,"pink-50":`#fdf2f8`,"pink-100":`#fce7f3`,"pink-200":`#fbcfe8`,"pink-300":`#f9a8d4`,"pink-400":`#f472b6`,"pink-500":`#ec4899`,"pink-600":`#db2777`,"pink-700":`#be185d`,"pink-800":`#9d174d`,"pink-900":`#831843`,"pink-950":`#500724`,"rose-50":`#fff1f2`,"rose-100":`#ffe4e6`,"rose-200":`#fecdd3`,"rose-300":`#fda4af`,"rose-400":`#fb7185`,"rose-500":`#f43f5e`,"rose-600":`#e11d48`,"rose-700":`#be123c`,"rose-800":`#9f1239`,"rose-900":`#881337`,"rose-950":`#4c0519`,"slate-50":`#f8fafc`,"slate-100":`#f1f5f9`,"slate-200":`#e2e8f0`,"slate-300":`#cbd5e1`,"slate-400":`#94a3b8`,"slate-500":`#64748b`,"slate-600":`#475569`,"slate-700":`#334155`,"slate-800":`#1e293b`,"slate-900":`#0f172a`,"slate-950":`#020617`,"gray-50":`#f9fafb`,"gray-100":`#f3f4f6`,"gray-200":`#e5e7eb`,"gray-300":`#d1d5db`,"gray-400":`#9ca3af`,"gray-500":`#6b7280`,"gray-600":`#4b5563`,"gray-700":`#374151`,"gray-800":`#1f2937`,"gray-900":`#111827`,"gray-950":`#030712`,"zinc-50":`#fafafa`,"zinc-100":`#f4f4f5`,"zinc-200":`#e4e4e7`,"zinc-300":`#d4d4d8`,"zinc-400":`#a1a1aa`,"zinc-500":`#71717a`,"zinc-600":`#52525b`,"zinc-700":`#3f3f46`,"zinc-800":`#27272a`,"zinc-900":`#18181b`,"zinc-950":`#09090b`,"neutral-50":`#fafafa`,"neutral-100":`#f5f5f5`,"neutral-200":`#e5e5e5`,"neutral-300":`#d4d4d4`,"neutral-400":`#a3a3a3`,"neutral-500":`#737373`,"neutral-600":`#525252`,"neutral-700":`#404040`,"neutral-800":`#262626`,"neutral-900":`#171717`,"neutral-950":`#0a0a0a`,"stone-50":`#fafaf9`,"stone-100":`#f5f5f4`,"stone-200":`#e7e5e4`,"stone-300":`#d6d3d1`,"stone-400":`#a8a29e`,"stone-500":`#78716c`,"stone-600":`#57534e`,"stone-700":`#44403c`,"stone-800":`#292524`,"stone-900":`#1c1917`,"stone-950":`#0c0a09`},Wc={};for(let[e,t]of Object.entries(Uc))Wc[t.toLowerCase()]=e;function Gc(e){return Wc[e.toLowerCase()]}var Kc={transparent:`transparent`,current:`currentColor`,black:`#000000`,white:`#ffffff`,"amber-100":`oklch(96.2% 0.059 95.617)`,"amber-200":`oklch(92.4% 0.12 95.746)`,"amber-300":`oklch(87.9% 0.169 91.605)`,"amber-400":`oklch(82.8% 0.189 84.429)`,"amber-50":`oklch(98.7% 0.022 95.277)`,"amber-500":`oklch(76.9% 0.188 70.08)`,"amber-600":`oklch(66.6% 0.179 58.318)`,"amber-700":`oklch(55.5% 0.163 48.998)`,"amber-800":`oklch(47.3% 0.137 46.201)`,"amber-900":`oklch(41.4% 0.112 45.904)`,"amber-950":`oklch(27.9% 0.077 45.635)`,"blue-100":`oklch(93.2% 0.032 255.585)`,"blue-200":`oklch(88.2% 0.059 254.128)`,"blue-300":`oklch(80.9% 0.105 251.813)`,"blue-400":`oklch(70.7% 0.165 254.624)`,"blue-50":`oklch(97% 0.014 254.604)`,"blue-500":`oklch(62.3% 0.214 259.815)`,"blue-600":`oklch(54.6% 0.245 262.881)`,"blue-700":`oklch(48.8% 0.243 264.376)`,"blue-800":`oklch(42.4% 0.199 265.638)`,"blue-900":`oklch(37.9% 0.146 265.522)`,"blue-950":`oklch(28.2% 0.091 267.935)`,"cyan-100":`oklch(95.6% 0.045 203.388)`,"cyan-200":`oklch(91.7% 0.08 205.041)`,"cyan-300":`oklch(86.5% 0.127 207.078)`,"cyan-400":`oklch(78.9% 0.154 211.53)`,"cyan-50":`oklch(98.4% 0.019 200.873)`,"cyan-500":`oklch(71.5% 0.143 215.221)`,"cyan-600":`oklch(60.9% 0.126 221.723)`,"cyan-700":`oklch(52% 0.105 223.128)`,"cyan-800":`oklch(45% 0.085 224.283)`,"cyan-900":`oklch(39.8% 0.07 227.392)`,"cyan-950":`oklch(30.2% 0.056 229.695)`,"emerald-100":`oklch(95% 0.052 163.051)`,"emerald-200":`oklch(90.5% 0.093 164.15)`,"emerald-300":`oklch(84.5% 0.143 164.978)`,"emerald-400":`oklch(76.5% 0.177 163.223)`,"emerald-50":`oklch(97.9% 0.021 166.113)`,"emerald-500":`oklch(69.6% 0.17 162.48)`,"emerald-600":`oklch(59.6% 0.145 163.225)`,"emerald-700":`oklch(50.8% 0.118 165.612)`,"emerald-800":`oklch(43.2% 0.095 166.913)`,"emerald-900":`oklch(37.8% 0.077 168.94)`,"emerald-950":`oklch(26.2% 0.051 172.552)`,"fuchsia-100":`oklch(95.2% 0.037 318.852)`,"fuchsia-200":`oklch(90.3% 0.076 319.62)`,"fuchsia-300":`oklch(83.3% 0.145 321.434)`,"fuchsia-400":`oklch(74% 0.238 322.16)`,"fuchsia-50":`oklch(97.7% 0.017 320.058)`,"fuchsia-500":`oklch(66.7% 0.295 322.15)`,"fuchsia-600":`oklch(59.1% 0.293 322.896)`,"fuchsia-700":`oklch(51.8% 0.253 323.949)`,"fuchsia-800":`oklch(45.2% 0.211 324.591)`,"fuchsia-900":`oklch(40.1% 0.17 325.612)`,"fuchsia-950":`oklch(29.3% 0.136 325.661)`,"gray-100":`oklch(96.7% 0.003 264.542)`,"gray-200":`oklch(92.8% 0.006 264.531)`,"gray-300":`oklch(87.2% 0.01 258.338)`,"gray-400":`oklch(70.7% 0.022 261.325)`,"gray-50":`oklch(98.5% 0.002 247.839)`,"gray-500":`oklch(55.1% 0.027 264.364)`,"gray-600":`oklch(44.6% 0.03 256.802)`,"gray-700":`oklch(37.3% 0.034 259.733)`,"gray-800":`oklch(27.8% 0.033 256.848)`,"gray-900":`oklch(21% 0.034 264.665)`,"gray-950":`oklch(13% 0.028 261.692)`,"green-100":`oklch(96.2% 0.044 156.743)`,"green-200":`oklch(92.5% 0.084 155.995)`,"green-300":`oklch(87.1% 0.15 154.449)`,"green-400":`oklch(79.2% 0.209 151.711)`,"green-50":`oklch(98.2% 0.018 155.826)`,"green-500":`oklch(72.3% 0.219 149.579)`,"green-600":`oklch(62.7% 0.194 149.214)`,"green-700":`oklch(52.7% 0.154 150.069)`,"green-800":`oklch(44.8% 0.119 151.328)`,"green-900":`oklch(39.3% 0.095 152.535)`,"green-950":`oklch(26.6% 0.065 152.934)`,"indigo-100":`oklch(93% 0.034 272.788)`,"indigo-200":`oklch(87% 0.065 274.039)`,"indigo-300":`oklch(78.5% 0.115 274.713)`,"indigo-400":`oklch(67.3% 0.182 276.935)`,"indigo-50":`oklch(96.2% 0.018 272.314)`,"indigo-500":`oklch(58.5% 0.233 277.117)`,"indigo-600":`oklch(51.1% 0.262 276.966)`,"indigo-700":`oklch(45.7% 0.24 277.023)`,"indigo-800":`oklch(39.8% 0.195 277.366)`,"indigo-900":`oklch(35.9% 0.144 278.697)`,"indigo-950":`oklch(25.7% 0.09 281.288)`,"lime-100":`oklch(96.7% 0.067 122.328)`,"lime-200":`oklch(93.8% 0.127 124.321)`,"lime-300":`oklch(89.7% 0.196 126.665)`,"lime-400":`oklch(84.1% 0.238 128.85)`,"lime-50":`oklch(98.6% 0.031 120.757)`,"lime-500":`oklch(76.8% 0.233 130.85)`,"lime-600":`oklch(64.8% 0.2 131.684)`,"lime-700":`oklch(53.2% 0.157 131.589)`,"lime-800":`oklch(45.3% 0.124 130.933)`,"lime-900":`oklch(40.5% 0.101 131.063)`,"lime-950":`oklch(27.4% 0.072 132.109)`,"neutral-100":`oklch(97% 0 0)`,"neutral-200":`oklch(92.2% 0 0)`,"neutral-300":`oklch(87% 0 0)`,"neutral-400":`oklch(70.8% 0 0)`,"neutral-50":`oklch(98.5% 0 0)`,"neutral-500":`oklch(55.6% 0 0)`,"neutral-600":`oklch(43.9% 0 0)`,"neutral-700":`oklch(37.1% 0 0)`,"neutral-800":`oklch(26.9% 0 0)`,"neutral-900":`oklch(20.5% 0 0)`,"neutral-950":`oklch(14.5% 0 0)`,"orange-100":`oklch(95.4% 0.038 75.164)`,"orange-200":`oklch(90.1% 0.076 70.697)`,"orange-300":`oklch(83.7% 0.128 66.29)`,"orange-400":`oklch(75% 0.183 55.934)`,"orange-50":`oklch(98% 0.016 73.684)`,"orange-500":`oklch(70.5% 0.213 47.604)`,"orange-600":`oklch(64.6% 0.222 41.116)`,"orange-700":`oklch(55.3% 0.195 38.402)`,"orange-800":`oklch(47% 0.157 37.304)`,"orange-900":`oklch(40.8% 0.123 38.172)`,"orange-950":`oklch(26.6% 0.079 36.259)`,"pink-100":`oklch(94.8% 0.028 342.258)`,"pink-200":`oklch(89.9% 0.061 343.231)`,"pink-300":`oklch(82.3% 0.12 346.018)`,"pink-400":`oklch(71.8% 0.202 349.761)`,"pink-50":`oklch(97.1% 0.014 343.198)`,"pink-500":`oklch(65.6% 0.241 354.308)`,"pink-600":`oklch(59.2% 0.249 0.584)`,"pink-700":`oklch(52.5% 0.223 3.958)`,"pink-800":`oklch(45.9% 0.187 3.815)`,"pink-900":`oklch(40.8% 0.153 2.432)`,"pink-950":`oklch(28.4% 0.109 3.907)`,"purple-100":`oklch(94.6% 0.033 307.174)`,"purple-200":`oklch(90.2% 0.063 306.703)`,"purple-300":`oklch(82.7% 0.119 306.383)`,"purple-400":`oklch(71.4% 0.203 305.504)`,"purple-50":`oklch(97.7% 0.014 308.299)`,"purple-500":`oklch(62.7% 0.265 303.9)`,"purple-600":`oklch(55.8% 0.288 302.321)`,"purple-700":`oklch(49.6% 0.265 301.924)`,"purple-800":`oklch(43.8% 0.218 303.724)`,"purple-900":`oklch(38.1% 0.176 304.987)`,"purple-950":`oklch(29.1% 0.149 302.717)`,"red-100":`oklch(93.6% 0.032 17.717)`,"red-200":`oklch(88.5% 0.062 18.334)`,"red-300":`oklch(80.8% 0.114 19.571)`,"red-400":`oklch(70.4% 0.191 22.216)`,"red-50":`oklch(97.1% 0.013 17.38)`,"red-500":`oklch(63.7% 0.237 25.331)`,"red-600":`oklch(57.7% 0.245 27.325)`,"red-700":`oklch(50.5% 0.213 27.518)`,"red-800":`oklch(44.4% 0.177 26.899)`,"red-900":`oklch(39.6% 0.141 25.723)`,"red-950":`oklch(25.8% 0.092 26.042)`,"rose-100":`oklch(94.1% 0.03 12.58)`,"rose-200":`oklch(89.2% 0.058 10.001)`,"rose-300":`oklch(81% 0.117 11.638)`,"rose-400":`oklch(71.2% 0.194 13.428)`,"rose-50":`oklch(96.9% 0.015 12.422)`,"rose-500":`oklch(64.5% 0.246 16.439)`,"rose-600":`oklch(58.6% 0.253 17.585)`,"rose-700":`oklch(51.4% 0.222 16.935)`,"rose-800":`oklch(45.5% 0.188 13.697)`,"rose-900":`oklch(41% 0.159 10.272)`,"rose-950":`oklch(27.1% 0.105 12.094)`,"sky-100":`oklch(95.1% 0.026 236.824)`,"sky-200":`oklch(90.1% 0.058 230.902)`,"sky-300":`oklch(82.8% 0.111 230.318)`,"sky-400":`oklch(74.6% 0.16 232.661)`,"sky-50":`oklch(97.7% 0.013 236.62)`,"sky-500":`oklch(68.5% 0.169 237.323)`,"sky-600":`oklch(58.8% 0.158 241.966)`,"sky-700":`oklch(50% 0.134 242.749)`,"sky-800":`oklch(44.3% 0.11 240.79)`,"sky-900":`oklch(39.1% 0.09 240.876)`,"sky-950":`oklch(29.3% 0.066 243.157)`,"slate-100":`oklch(96.8% 0.007 247.896)`,"slate-200":`oklch(92.9% 0.013 255.508)`,"slate-300":`oklch(86.9% 0.022 252.894)`,"slate-400":`oklch(70.4% 0.04 256.788)`,"slate-50":`oklch(98.4% 0.003 247.858)`,"slate-500":`oklch(55.4% 0.046 257.417)`,"slate-600":`oklch(44.6% 0.043 257.281)`,"slate-700":`oklch(37.2% 0.044 257.287)`,"slate-800":`oklch(27.9% 0.041 260.031)`,"slate-900":`oklch(20.8% 0.042 265.755)`,"slate-950":`oklch(12.9% 0.042 264.695)`,"stone-100":`oklch(97% 0.001 106.424)`,"stone-200":`oklch(92.3% 0.003 48.717)`,"stone-300":`oklch(86.9% 0.005 56.366)`,"stone-400":`oklch(70.9% 0.01 56.259)`,"stone-50":`oklch(98.5% 0.001 106.423)`,"stone-500":`oklch(55.3% 0.013 58.071)`,"stone-600":`oklch(44.4% 0.011 73.639)`,"stone-700":`oklch(37.4% 0.01 67.558)`,"stone-800":`oklch(26.8% 0.007 34.298)`,"stone-900":`oklch(21.6% 0.006 56.043)`,"stone-950":`oklch(14.7% 0.004 49.25)`,"teal-100":`oklch(95.3% 0.051 180.801)`,"teal-200":`oklch(91% 0.096 180.426)`,"teal-300":`oklch(85.5% 0.138 181.071)`,"teal-400":`oklch(77.7% 0.152 181.912)`,"teal-50":`oklch(98.4% 0.014 180.72)`,"teal-500":`oklch(70.4% 0.14 182.503)`,"teal-600":`oklch(60% 0.118 184.704)`,"teal-700":`oklch(51.1% 0.096 186.391)`,"teal-800":`oklch(43.7% 0.078 188.216)`,"teal-900":`oklch(38.6% 0.063 188.416)`,"teal-950":`oklch(27.7% 0.046 192.524)`,"violet-100":`oklch(94.3% 0.029 294.588)`,"violet-200":`oklch(89.4% 0.057 293.283)`,"violet-300":`oklch(81.1% 0.111 293.571)`,"violet-400":`oklch(70.2% 0.183 293.541)`,"violet-50":`oklch(96.9% 0.016 293.756)`,"violet-500":`oklch(60.6% 0.25 292.717)`,"violet-600":`oklch(54.1% 0.281 293.009)`,"violet-700":`oklch(49.1% 0.27 292.581)`,"violet-800":`oklch(43.2% 0.232 292.759)`,"violet-900":`oklch(38% 0.189 293.745)`,"violet-950":`oklch(28.3% 0.141 291.089)`,"yellow-100":`oklch(97.3% 0.071 103.193)`,"yellow-200":`oklch(94.5% 0.129 101.54)`,"yellow-300":`oklch(90.5% 0.182 98.111)`,"yellow-400":`oklch(85.2% 0.199 91.936)`,"yellow-50":`oklch(98.7% 0.026 102.212)`,"yellow-500":`oklch(79.5% 0.184 86.047)`,"yellow-600":`oklch(68.1% 0.162 75.834)`,"yellow-700":`oklch(55.4% 0.135 66.442)`,"yellow-800":`oklch(47.6% 0.114 61.907)`,"yellow-900":`oklch(42.1% 0.095 57.708)`,"yellow-950":`oklch(28.6% 0.066 53.813)`,"zinc-100":`oklch(96.7% 0.001 286.375)`,"zinc-200":`oklch(92% 0.004 286.32)`,"zinc-300":`oklch(87.1% 0.006 286.286)`,"zinc-400":`oklch(70.5% 0.015 286.067)`,"zinc-50":`oklch(98.5% 0 0)`,"zinc-500":`oklch(55.2% 0.016 285.938)`,"zinc-600":`oklch(44.2% 0.017 285.786)`,"zinc-700":`oklch(37% 0.013 285.805)`,"zinc-800":`oklch(27.4% 0.006 286.033)`,"zinc-900":`oklch(21% 0.006 285.885)`,"zinc-950":`oklch(14.1% 0.005 285.823)`};function qc(e){return e.trim().replace(/\\/g,`\\\\`).replace(/_/g,`\\_`).replace(/\s+/g,`_`).replace(/]/g,`\\]`)}function Jc(e,t){return`${e}-[${qc(t)}]`}function Yc(e,t){return`[${e}:${qc(t)}]`}var Xc={display:{block:`block`,"inline-block":`inline-block`,inline:`inline`,flex:`flex`,"inline-flex":`inline-flex`,grid:`grid`,"inline-grid":`inline-grid`,contents:`contents`,"flow-root":`flow-root`,"inline-table":`inline-table`,"list-item":`list-item`,table:`table`,"table-caption":`table-caption`,"table-cell":`table-cell`,"table-column":`table-column`,"table-column-group":`table-column-group`,"table-footer-group":`table-footer-group`,"table-header-group":`table-header-group`,"table-row":`table-row`,"table-row-group":`table-row-group`,none:`hidden`},position:{static:`static`,fixed:`fixed`,absolute:`absolute`,relative:`relative`,sticky:`sticky`},visibility:{visible:`visible`,hidden:`invisible`,collapse:`collapse`},fill:{none:`fill-none`,currentcolor:`fill-current`,currentColor:`fill-current`,inherit:`fill-inherit`,transparent:`fill-transparent`},stroke:{none:`stroke-none`,currentcolor:`stroke-current`,currentColor:`stroke-current`,inherit:`stroke-inherit`,transparent:`stroke-transparent`},"justify-content":{normal:`justify-normal`,"flex-start":`justify-start`,center:`justify-center`,"flex-end":`justify-end`,"space-between":`justify-between`,"space-around":`justify-around`,"space-evenly":`justify-evenly`,stretch:`justify-stretch`},"align-items":{"flex-start":`items-start`,center:`items-center`,"flex-end":`items-end`,stretch:`items-stretch`,baseline:`items-baseline`,"last baseline":`items-baseline-last`},"flex-direction":{row:`flex-row`,"row-reverse":`flex-row-reverse`,column:`flex-col`,"column-reverse":`flex-col-reverse`},"flex-wrap":{wrap:`flex-wrap`,"wrap-reverse":`flex-wrap-reverse`,nowrap:`flex-nowrap`},flex:{none:`flex-none`,auto:`flex-auto`,initial:`flex-initial`,"1 1 0%":`flex-1`},"align-content":{normal:`content-normal`,center:`content-center`,"flex-start":`content-start`,"flex-end":`content-end`,"space-between":`content-between`,"space-around":`content-around`,"space-evenly":`content-evenly`,stretch:`content-stretch`,baseline:`content-baseline`},"align-self":{auto:`self-auto`,"flex-start":`self-start`,"flex-end":`self-end`,center:`self-center`,stretch:`self-stretch`,baseline:`self-baseline`,"last baseline":`self-baseline-last`},"place-items":{start:`place-items-start`,end:`place-items-end`,center:`place-items-center`,baseline:`place-items-baseline`,stretch:`place-items-stretch`},"place-content":{center:`place-content-center`,start:`place-content-start`,end:`place-content-end`,"space-between":`place-content-between`,"space-around":`place-content-around`,"space-evenly":`place-content-evenly`,stretch:`place-content-stretch`,baseline:`place-content-baseline`},"place-self":{auto:`place-self-auto`,start:`place-self-start`,end:`place-self-end`,center:`place-self-center`,stretch:`place-self-stretch`},"justify-items":{start:`justify-items-start`,end:`justify-items-end`,center:`justify-items-center`,stretch:`justify-items-stretch`},"justify-self":{auto:`justify-self-auto`,start:`justify-self-start`,end:`justify-self-end`,center:`justify-self-center`,stretch:`justify-self-stretch`},"grid-auto-flow":{row:`grid-flow-row`,column:`grid-flow-col`,dense:`grid-flow-dense`,"row dense":`grid-flow-row-dense`,"column dense":`grid-flow-col-dense`},"grid-template-columns":{none:`grid-cols-none`,subgrid:`grid-cols-subgrid`},"grid-template-rows":{none:`grid-rows-none`,subgrid:`grid-rows-subgrid`},"grid-auto-columns":{auto:`auto-cols-auto`,min:`auto-cols-min`,max:`auto-cols-max`,fr:`auto-cols-fr`},"grid-auto-rows":{auto:`auto-rows-auto`,min:`auto-rows-min`,max:`auto-rows-max`,fr:`auto-rows-fr`},"text-align":{left:`text-left`,center:`text-center`,right:`text-right`,justify:`text-justify`,start:`text-start`,end:`text-end`},"text-transform":{uppercase:`uppercase`,lowercase:`lowercase`,capitalize:`capitalize`,none:`normal-case`},"font-style":{italic:`italic`,normal:`not-italic`},"font-family":{sans:`font-sans`,serif:`font-serif`,monospace:`font-mono`,"ui-sans-serif, system-ui, sans-serif":`font-sans`,'ui-serif, georgia, cambria, "times new roman", times, serif':`font-serif`,'ui-monospace, sfmono-regular, menlo, monaco, consolas, "liberation mono", "courier new", monospace':`font-mono`},"font-variant-numeric":{normal:`normal-nums`,ordinal:`ordinal`,"slashed-zero":`slashed-zero`,"lining-nums":`lining-nums`,"oldstyle-nums":`oldstyle-nums`,"proportional-nums":`proportional-nums`,"tabular-nums":`tabular-nums`,"diagonal-fractions":`diagonal-fractions`,"stacked-fractions":`stacked-fractions`},"-webkit-font-smoothing":{antialiased:`antialiased`,auto:`subpixel-antialiased`},"-moz-osx-font-smoothing":{grayscale:`antialiased`,auto:`subpixel-antialiased`},"font-stretch":{"ultra-condensed":`font-stretch-ultra-condensed`,"extra-condensed":`font-stretch-extra-condensed`,condensed:`font-stretch-condensed`,"semi-condensed":`font-stretch-semi-condensed`,normal:`font-stretch-normal`,"semi-expanded":`font-stretch-semi-expanded`,expanded:`font-stretch-expanded`,"extra-expanded":`font-stretch-extra-expanded`,"ultra-expanded":`font-stretch-ultra-expanded`},"text-decoration-line":{underline:`underline`,overline:`overline`,"line-through":`line-through`,none:`no-underline`},"border-style":{solid:`border-solid`,dashed:`border-dashed`,dotted:`border-dotted`,double:`border-double`,hidden:`border-hidden`,none:`border-none`},"border-top-style":{solid:`border-t-solid`,dashed:`border-t-dashed`,dotted:`border-t-dotted`,double:`border-t-double`,hidden:`border-t-hidden`,none:`border-t-none`},"border-right-style":{solid:`border-r-solid`,dashed:`border-r-dashed`,dotted:`border-r-dotted`,double:`border-r-double`,hidden:`border-r-hidden`,none:`border-r-none`},"border-bottom-style":{solid:`border-b-solid`,dashed:`border-b-dashed`,dotted:`border-b-dotted`,double:`border-b-double`,hidden:`border-b-hidden`,none:`border-b-none`},"border-left-style":{solid:`border-l-solid`,dashed:`border-l-dashed`,dotted:`border-l-dotted`,double:`border-l-double`,hidden:`border-l-hidden`,none:`border-l-none`},"border-inline-start-style":{solid:`border-s-solid`,dashed:`border-s-dashed`,dotted:`border-s-dotted`,double:`border-s-double`,hidden:`border-s-hidden`,none:`border-s-none`},"border-inline-end-style":{solid:`border-e-solid`,dashed:`border-e-dashed`,dotted:`border-e-dotted`,double:`border-e-double`,hidden:`border-e-hidden`,none:`border-e-none`},"border-inline-style":{solid:`border-x-solid`,dashed:`border-x-dashed`,dotted:`border-x-dotted`,double:`border-x-double`,hidden:`border-x-hidden`,none:`border-x-none`},"border-block-style":{solid:`border-y-solid`,dashed:`border-y-dashed`,dotted:`border-y-dotted`,double:`border-y-double`,hidden:`border-y-hidden`,none:`border-y-none`},"outline-style":{solid:`outline-solid`,dashed:`outline-dashed`,dotted:`outline-dotted`,double:`outline-double`,none:`outline-none`},"object-fit":{contain:`object-contain`,cover:`object-cover`,fill:`object-fill`,none:`object-none`,"scale-down":`object-scale-down`},"object-position":{bottom:`object-bottom`,center:`object-center`,"center center":`object-center`,left:`object-left`,"left center":`object-left`,"left bottom":`object-left-bottom`,"left top":`object-left-top`,right:`object-right`,"right center":`object-right`,"right bottom":`object-right-bottom`,"right top":`object-right-top`,top:`object-top`,"center top":`object-top`,"center bottom":`object-bottom`},"background-repeat":{repeat:`bg-repeat`,"no-repeat":`bg-no-repeat`,"repeat-x":`bg-repeat-x`,"repeat-y":`bg-repeat-y`,round:`bg-repeat-round`,space:`bg-repeat-space`},"background-attachment":{fixed:`bg-fixed`,local:`bg-local`,scroll:`bg-scroll`},"background-clip":{"border-box":`bg-clip-border`,"padding-box":`bg-clip-padding`,"content-box":`bg-clip-content`,text:`bg-clip-text`},"background-origin":{"border-box":`bg-origin-border`,"padding-box":`bg-origin-padding`,"content-box":`bg-origin-content`},"mask-image":{none:`mask-none`},"mask-mode":{alpha:`mask-alpha`,luminance:`mask-luminance`},"mask-size":{auto:`mask-auto`,contain:`mask-contain`,cover:`mask-cover`},"mask-repeat":{repeat:`mask-repeat`,"no-repeat":`mask-no-repeat`},"mask-origin":{"border-box":`mask-origin-border`,"padding-box":`mask-origin-padding`,"content-box":`mask-origin-content`,"fill-box":`mask-origin-fill`,"stroke-box":`mask-origin-stroke`,"view-box":`mask-origin-view`},"mask-clip":{"border-box":`mask-clip-border`,"padding-box":`mask-clip-padding`,"content-box":`mask-clip-content`,"fill-box":`mask-clip-fill`,"stroke-box":`mask-clip-stroke`,"view-box":`mask-clip-view`,"no-clip":`mask-no-clip`},"clip-path":{none:`not-sr-only`},"box-decoration-break":{slice:`box-decoration-slice`,clone:`box-decoration-clone`},"-webkit-box-decoration-break":{slice:`box-decoration-slice`,clone:`box-decoration-clone`},"background-size":{auto:`bg-auto`,cover:`bg-cover`,contain:`bg-contain`},"background-position":{bottom:`bg-bottom`,center:`bg-center`,"center center":`bg-center`,left:`bg-left`,"left center":`bg-left`,"left bottom":`bg-left-bottom`,"left top":`bg-left-top`,right:`bg-right`,"right center":`bg-right`,"right bottom":`bg-right-bottom`,"right top":`bg-right-top`,top:`bg-top`,"center top":`bg-top`,"center bottom":`bg-bottom`},"vertical-align":{baseline:`align-baseline`,top:`align-top`,middle:`align-middle`,bottom:`align-bottom`,"text-top":`align-text-top`,"text-bottom":`align-text-bottom`,sub:`align-sub`,super:`align-super`},"white-space":{normal:`whitespace-normal`,nowrap:`whitespace-nowrap`,pre:`whitespace-pre`,"pre-line":`whitespace-pre-line`,"pre-wrap":`whitespace-pre-wrap`,"break-spaces":`whitespace-break-spaces`},"word-break":{normal:`break-normal`,"break-all":`break-all`,"keep-all":`break-keep`},"overflow-wrap":{"break-word":`break-words`,anywhere:`wrap-anywhere`,normal:`wrap-normal`},"text-overflow":{ellipsis:`text-ellipsis`,clip:`text-clip`},hyphens:{none:`hyphens-none`,manual:`hyphens-manual`,auto:`hyphens-auto`},"list-style-position":{inside:`list-inside`,outside:`list-outside`},"list-style-type":{disc:`list-disc`,decimal:`list-decimal`,none:`list-none`},"table-layout":{auto:`table-auto`,fixed:`table-fixed`},"caption-side":{top:`caption-top`,bottom:`caption-bottom`},"border-collapse":{collapse:`border-collapse`,separate:`border-separate`},"box-sizing":{"border-box":`box-border`,"content-box":`box-content`},"aspect-ratio":{"1 / 1":`aspect-square`,"16 / 9":`aspect-video`,auto:`aspect-auto`},"field-sizing":{fixed:`field-sizing-fixed`,content:`field-sizing-content`},"text-wrap":{wrap:`text-wrap`,nowrap:`text-nowrap`,balance:`text-balance`,pretty:`text-pretty`},isolation:{isolate:`isolate`,auto:`isolation-auto`},float:{right:`float-right`,left:`float-left`,none:`float-none`},clear:{left:`clear-left`,right:`clear-right`,both:`clear-both`,none:`clear-none`},appearance:{none:`appearance-none`,auto:`appearance-auto`},"color-scheme":{normal:`scheme-normal`,dark:`scheme-dark`,light:`scheme-light`,"light dark":`scheme-light-dark`,"only dark":`scheme-only-dark`,"only light":`scheme-only-light`},"mix-blend-mode":{normal:`mix-blend-normal`,multiply:`mix-blend-multiply`,screen:`mix-blend-screen`,overlay:`mix-blend-overlay`,darken:`mix-blend-darken`,lighten:`mix-blend-lighten`,"color-dodge":`mix-blend-color-dodge`,"color-burn":`mix-blend-color-burn`,"hard-light":`mix-blend-hard-light`,"soft-light":`mix-blend-soft-light`,difference:`mix-blend-difference`,exclusion:`mix-blend-exclusion`,hue:`mix-blend-hue`,saturation:`mix-blend-saturation`,color:`mix-blend-color`,luminosity:`mix-blend-luminosity`,"plus-darker":`mix-blend-plus-darker`,"plus-lighter":`mix-blend-plus-lighter`},"background-blend-mode":{normal:`bg-blend-normal`,multiply:`bg-blend-multiply`,screen:`bg-blend-screen`,overlay:`bg-blend-overlay`,darken:`bg-blend-darken`,lighten:`bg-blend-lighten`,"color-dodge":`bg-blend-color-dodge`,"color-burn":`bg-blend-color-burn`,"hard-light":`bg-blend-hard-light`,"soft-light":`bg-blend-soft-light`,difference:`bg-blend-difference`,exclusion:`bg-blend-exclusion`,hue:`bg-blend-hue`,saturation:`bg-blend-saturation`,color:`bg-blend-color`,luminosity:`bg-blend-luminosity`},"overscroll-behavior":{auto:`overscroll-auto`,contain:`overscroll-contain`,none:`overscroll-none`},"overscroll-behavior-x":{auto:`overscroll-x-auto`,contain:`overscroll-x-contain`,none:`overscroll-x-none`},"overscroll-behavior-y":{auto:`overscroll-y-auto`,contain:`overscroll-y-contain`,none:`overscroll-y-none`},"scrollbar-width":{auto:`scrollbar-auto`,thin:`scrollbar-thin`,none:`scrollbar-none`},"scrollbar-gutter":{stable:`scrollbar-gutter-stable`,"stable both-edges":`scrollbar-gutter-both-edges`},"mask-type":{alpha:`mask-type-alpha`,luminance:`mask-type-luminance`},"mask-composite":{add:`mask-composite-add`,subtract:`mask-composite-subtract`,intersect:`mask-composite-intersect`,exclude:`mask-composite-exclude`},"scroll-behavior":{auto:`scroll-auto`,smooth:`scroll-smooth`},"touch-action":{auto:`touch-auto`,none:`touch-none`,"pan-x":`touch-pan-x`,"pan-left":`touch-pan-left`,"pan-right":`touch-pan-right`,"pan-y":`touch-pan-y`,"pan-up":`touch-pan-up`,"pan-down":`touch-pan-down`,manipulation:`touch-manipulation`},"will-change":{auto:`will-change-auto`,scroll:`will-change-scroll`,contents:`will-change-contents`,transform:`will-change-transform`},contain:{none:`contain-none`,content:`contain-content`,strict:`contain-strict`,size:`contain-size`,layout:`contain-layout`,paint:`contain-paint`,style:`contain-style`,"inline-size":`contain-inline-size`},"break-before":{auto:`break-before-auto`,avoid:`break-before-avoid`,all:`break-before-all`,"avoid-page":`break-before-avoid-page`,page:`break-before-page`,left:`break-before-left`,right:`break-before-right`,column:`break-before-column`},"break-after":{auto:`break-after-auto`,avoid:`break-after-avoid`,all:`break-after-all`,"avoid-page":`break-after-avoid-page`,page:`break-after-page`,left:`break-after-left`,right:`break-after-right`,column:`break-after-column`},"break-inside":{auto:`break-inside-auto`,avoid:`break-inside-avoid`,"avoid-page":`break-inside-avoid-page`,"avoid-column":`break-inside-avoid-column`},"forced-color-adjust":{auto:`forced-color-adjust-auto`,none:`forced-color-adjust-none`},filter:{none:`filter-none`},"backdrop-filter":{none:`backdrop-filter-none`},"box-shadow":{none:`shadow-none`},"text-shadow":{none:`text-shadow-none`},"backface-visibility":{hidden:`backface-hidden`,visible:`backface-visible`},perspective:{none:`perspective-none`,"100px":`perspective-dramatic`,"300px":`perspective-near`,"500px":`perspective-normal`,"800px":`perspective-midrange`,"1200px":`perspective-distant`},"transform-style":{"preserve-3d":`transform-3d`,flat:`transform-flat`},"transform-origin":{center:`origin-center`,top:`origin-top`,"top right":`origin-top-right`,right:`origin-right`,"bottom right":`origin-bottom-right`,bottom:`origin-bottom`,"bottom left":`origin-bottom-left`,left:`origin-left`,"top left":`origin-top-left`,"50% 50%":`origin-center`,"100% 0":`origin-top-right`,"100% 0%":`origin-top-right`,"100% 100%":`origin-bottom-right`,"50% 100%":`origin-bottom`,"0 100%":`origin-bottom-left`,"0% 100%":`origin-bottom-left`,"0 50%":`origin-left`,"0% 50%":`origin-left`,"0 0":`origin-top-left`,"0% 0%":`origin-top-left`},"perspective-origin":{center:`perspective-origin-center`,top:`perspective-origin-top`,"top right":`perspective-origin-top-right`,right:`perspective-origin-right`,"bottom right":`perspective-origin-bottom-right`,bottom:`perspective-origin-bottom`,"bottom left":`perspective-origin-bottom-left`,left:`perspective-origin-left`,"top left":`perspective-origin-top-left`,"100% 0":`perspective-origin-top-right`,"100% 0%":`perspective-origin-top-right`,"100% 100%":`perspective-origin-bottom-right`,"0 100%":`perspective-origin-bottom-left`,"0% 100%":`perspective-origin-bottom-left`,"0 0":`perspective-origin-top-left`,"0% 0%":`perspective-origin-top-left`},"scroll-snap-align":{start:`snap-start`,end:`snap-end`,center:`snap-center`,none:`snap-align-none`},"scroll-snap-type":{none:`snap-none`},"scroll-snap-stop":{normal:`snap-normal`,always:`snap-always`},"transition-timing-function":{linear:`ease-linear`,ease:`ease-in-out`,"ease-in":`ease-in`,"ease-out":`ease-out`,"ease-in-out":`ease-in-out`},"transition-property":{all:`transition-all`,none:`transition-none`,color:`transition-colors`,opacity:`transition-opacity`,shadow:`transition-shadow`,transform:`transition-transform`},"transition-behavior":{normal:`transition-normal`,"allow-discrete":`transition-discrete`},animation:{none:`animate-none`},"animation-name":{none:`animate-none`},"background-image":{none:`bg-none`},content:{none:`content-none`},"accent-color":{auto:`accent-auto`},"caret-color":{auto:`caret-auto`},"list-style-image":{none:`list-image-none`},"text-decoration-style":{solid:`decoration-solid`,double:`decoration-double`,dotted:`decoration-dotted`,dashed:`decoration-dashed`,wavy:`decoration-wavy`},"text-decoration-thickness":{auto:`decoration-auto`,"from-font":`decoration-from-font`,"0px":`decoration-0`,"1px":`decoration-1`,"2px":`decoration-2`,"4px":`decoration-4`,"8px":`decoration-8`},"text-underline-offset":{auto:`underline-offset-auto`,"0px":`underline-offset-0`,"1px":`underline-offset-1`,"2px":`underline-offset-2`,"4px":`underline-offset-4`,"8px":`underline-offset-8`},"font-weight":{100:`font-thin`,200:`font-extralight`,300:`font-light`,400:`font-normal`,500:`font-medium`,600:`font-semibold`,700:`font-bold`,800:`font-extrabold`,900:`font-black`,bold:`font-bold`,normal:`font-normal`}},Zc={width:`w`,height:`h`,"inline-size":`w`,"block-size":`h`,"flex-basis":`basis`,"min-width":`min-w`,"min-height":`min-h`,"min-inline-size":`min-w`,"min-block-size":`min-h`,"max-width":`max-w`,"max-height":`max-h`,"max-inline-size":`max-w`,"max-block-size":`max-h`,margin:`m`,"margin-top":`mt`,"margin-right":`mr`,"margin-bottom":`mb`,"margin-left":`ml`,"margin-inline-start":`ms`,"margin-inline-end":`me`,"margin-inline":`mx`,"margin-block":`my`,"margin-block-start":`mt`,"margin-block-end":`mb`,top:`top`,right:`right`,bottom:`bottom`,left:`left`,"inset-inline-start":`start`,"inset-inline-end":`end`,padding:`p`,"padding-top":`pt`,"padding-right":`pr`,"padding-bottom":`pb`,"padding-left":`pl`,"padding-inline-start":`ps`,"padding-inline-end":`pe`,"padding-inline":`px`,"padding-block":`py`,"padding-block-start":`pt`,"padding-block-end":`pb`,gap:`gap`,"row-gap":`gap-y`,"column-gap":`gap-x`,"text-indent":`indent`,"border-spacing":`border-spacing`,"border-spacing-x":`border-spacing-x`,"border-spacing-y":`border-spacing-y`,"scroll-margin":`scroll-m`,"scroll-margin-top":`scroll-mt`,"scroll-margin-right":`scroll-mr`,"scroll-margin-bottom":`scroll-mb`,"scroll-margin-left":`scroll-ml`,"scroll-margin-inline-start":`scroll-ms`,"scroll-margin-inline-end":`scroll-me`,"scroll-margin-inline":`scroll-mx`,"scroll-margin-block":`scroll-my`,"scroll-margin-block-start":`scroll-mt`,"scroll-margin-block-end":`scroll-mb`,"scroll-padding":`scroll-p`,"scroll-padding-top":`scroll-pt`,"scroll-padding-right":`scroll-pr`,"scroll-padding-bottom":`scroll-pb`,"scroll-padding-left":`scroll-pl`,"scroll-padding-inline-start":`scroll-ps`,"scroll-padding-inline-end":`scroll-pe`,"scroll-padding-inline":`scroll-px`,"scroll-padding-block":`scroll-py`,"scroll-padding-block-start":`scroll-pt`,"scroll-padding-block-end":`scroll-pb`,color:`text`,"background-color":`bg`,"background-image":`bg`,"-webkit-line-clamp":`line-clamp`,"line-clamp":`line-clamp`,fill:`fill`,stroke:`stroke`,"border-color":`border`,"border-top-color":`border-t`,"border-right-color":`border-r`,"border-bottom-color":`border-b`,"border-left-color":`border-l`,"border-inline-start-color":`border-s`,"border-inline-end-color":`border-e`,"border-inline-color":`border-x`,"border-block-color":`border-y`,"outline-color":`outline`,"text-decoration-color":`decoration`,"caret-color":`caret`,"accent-color":`accent`,"border-width":`border`,"border-top-width":`border-t`,"border-right-width":`border-r`,"border-bottom-width":`border-b`,"border-left-width":`border-l`,"border-inline-start-width":`border-s`,"border-inline-end-width":`border-e`,"border-inline-width":`border-x`,"border-block-width":`border-y`,"stroke-width":`stroke`,"border-radius":`rounded`,"border-top-left-radius":`rounded-tl`,"border-top-right-radius":`rounded-tr`,"border-bottom-right-radius":`rounded-br`,"border-bottom-left-radius":`rounded-bl`,"border-start-start-radius":`rounded-ss`,"border-start-end-radius":`rounded-se`,"border-end-end-radius":`rounded-ee`,"border-end-start-radius":`rounded-es`,opacity:`opacity`,"z-index":`z`,"font-size":`text`,"line-height":`leading`,"letter-spacing":`tracking`,"outline-width":`outline`,"outline-offset":`outline-offset`,"box-shadow":`shadow`,filter:`filter`,"backdrop-filter":`backdrop-filter`,rotate:`rotate`,scale:`scale`,translate:`translate`,"grid-template-columns":`grid-cols`,"grid-template-rows":`grid-rows`,"transition-property":`transition`,"transition-duration":`duration`,"transition-delay":`delay`,"transition-timing-function":`ease`,animation:`animate`,"animation-name":`animate`,"animation-duration":`duration`,"animation-delay":`delay`,"animation-timing-function":`ease`,"animation-iteration-count":`animate-iteration`,perspective:`perspective`,"mask-position":`mask-position`,"mask-image":`mask`,"text-shadow":`text-shadow`,"clip-path":`clip-path`,"grid-column":`col`,"grid-column-start":`col-start`,"grid-column-end":`col-end`,"grid-row":`row`,"grid-row-start":`row-start`,"grid-row-end":`row-end`,cursor:`cursor`,content:`content`,"list-style-type":`list`,"list-style-image":`list-image`,"will-change":`will-change`,contain:`contain`,"mask-size":`mask-size`,"mask-repeat":`mask-repeat`,"mask-clip":`mask-clip`,"mask-origin":`mask-origin`,"mask-mode":`mask-mode`,"mask-composite":`mask-composite`,"font-family":`font`,"font-weight":`font`,"font-stretch":`font-stretch`,"background-position-x":`bg-position-x`,"background-position-y":`bg-position-y`,"column-count":`columns`,"column-width":`columns`,"aspect-ratio":`aspect`,"object-position":`object`,order:`order`,"tab-size":`tab`,zoom:`zoom`,"flex-grow":`grow`,"flex-shrink":`shrink`,"word-spacing":`word-spacing`,hyphens:`hyphens`,"scrollbar-color":`scrollbar-color`,"font-feature-settings":`font-feature`,"perspective-origin":`perspective-origin`,"column-rule-color":`column-rule`,"column-rule-width":`column-rule`,"column-rule-style":`column-rule`,"stroke-dasharray":`stroke-dasharray`,"stroke-dashoffset":`stroke-dashoffset`,"stroke-linecap":`stroke-linecap`,"stroke-linejoin":`stroke-linejoin`,"image-rendering":`image-render`,"paint-order":`paint-order`,"shape-outside":`shape-outside`,"shape-margin":`shape-margin`,"shape-image-threshold":`shape-image-threshold`},Qc=new Set(`width.height.min-width.min-height.max-width.max-height.inline-size.block-size.min-inline-size.min-block-size.max-inline-size.max-block-size.flex-basis.margin.margin-top.margin-right.margin-bottom.margin-left.margin-inline-start.margin-inline-end.margin-inline.margin-block.margin-block-start.margin-block-end.padding.padding-top.padding-right.padding-bottom.padding-left.padding-inline-start.padding-inline-end.padding-inline.padding-block.padding-block-start.padding-block-end.top.right.bottom.left.inset-inline-start.inset-inline-end.gap.row-gap.column-gap.text-indent.border-spacing.border-spacing-x.border-spacing-y.scroll-margin.scroll-margin-top.scroll-margin-right.scroll-margin-bottom.scroll-margin-left.scroll-margin-inline-start.scroll-margin-inline-end.scroll-margin-inline.scroll-margin-block.scroll-margin-block-start.scroll-margin-block-end.scroll-padding.scroll-padding-top.scroll-padding-right.scroll-padding-bottom.scroll-padding-left.scroll-padding-inline-start.scroll-padding-inline-end.scroll-padding-inline.scroll-padding-block.scroll-padding-block-start.scroll-padding-block-end.border-width.border-top-width.border-right-width.border-bottom-width.border-left-width.border-inline-start-width.border-inline-end-width.border-inline-width.border-block-width.border-radius.border-top-left-radius.border-top-right-radius.border-bottom-right-radius.border-bottom-left-radius.border-start-start-radius.border-start-end-radius.border-end-end-radius.border-end-start-radius.font-size.line-height.letter-spacing.outline-width.outline-offset`.split(`.`)),$c={width:{auto:`w-auto`,"50%":`w-1/2`,"33.333333%":`w-1/3`,"66.666667%":`w-2/3`,"25%":`w-1/4`,"75%":`w-3/4`,"100%":`w-full`,"100vw":`w-screen`,"100dvw":`w-dvw`,"100lvw":`w-lvw`,"100svw":`w-svw`,"min-content":`w-min`,"max-content":`w-max`,"fit-content":`w-fit`},height:{auto:`h-auto`,"50%":`h-1/2`,"33.333333%":`h-1/3`,"66.666667%":`h-2/3`,"25%":`h-1/4`,"75%":`h-3/4`,"100%":`h-full`,"100vh":`h-screen`,"100dvh":`h-dvh`,"100lvh":`h-lvh`,"100svh":`h-svh`,"min-content":`h-min`,"max-content":`h-max`,"fit-content":`h-fit`},"inline-size":{auto:`w-auto`,"100%":`w-full`,"100vw":`w-screen`,"100dvw":`w-dvw`,"100lvw":`w-lvw`,"100svw":`w-svw`,"min-content":`w-min`,"max-content":`w-max`,"fit-content":`w-fit`},"block-size":{auto:`h-auto`,"100%":`h-full`,"100vh":`h-screen`,"100dvh":`h-dvh`,"100lvh":`h-lvh`,"100svh":`h-svh`,"min-content":`h-min`,"max-content":`h-max`,"fit-content":`h-fit`},"flex-basis":{auto:`basis-auto`,"100%":`basis-full`,"50%":`basis-1/2`,"33.333333%":`basis-1/3`,"66.666667%":`basis-2/3`,"25%":`basis-1/4`,"75%":`basis-3/4`,"20%":`basis-1/5`,"40%":`basis-2/5`,"60%":`basis-3/5`,"80%":`basis-4/5`,"16.666667%":`basis-1/6`,"83.333333%":`basis-5/6`},"min-width":{"50%":`min-w-1/2`,"100%":`min-w-full`,"100vw":`min-w-screen`,"100dvw":`min-w-dvw`,"100lvw":`min-w-lvw`,"100svw":`min-w-svw`,"min-content":`min-w-min`,"max-content":`min-w-max`,"fit-content":`min-w-fit`},"min-height":{"50%":`min-h-1/2`,"100%":`min-h-full`,"100vh":`min-h-screen`,"100dvh":`min-h-dvh`,"100lvh":`min-h-lvh`,"100svh":`min-h-svh`,"min-content":`min-h-min`,"max-content":`min-h-max`,"fit-content":`min-h-fit`},"max-width":{"50%":`max-w-1/2`,"100%":`max-w-full`,"100vw":`max-w-screen`,"100dvw":`max-w-dvw`,"100lvw":`max-w-lvw`,"100svw":`max-w-svw`,"min-content":`max-w-min`,"max-content":`max-w-max`,"fit-content":`max-w-fit`,none:`max-w-none`},"max-height":{"50%":`max-h-1/2`,"100%":`max-h-full`,"100vh":`max-h-screen`,"100dvh":`max-h-dvh`,"100lvh":`max-h-lvh`,"100svh":`max-h-svh`,"min-content":`max-h-min`,"max-content":`max-h-max`,"fit-content":`max-h-fit`,none:`max-h-none`},"min-inline-size":{"100%":`min-w-full`,"100vw":`min-w-screen`,"min-content":`min-w-min`,"max-content":`min-w-max`,"fit-content":`min-w-fit`},"min-block-size":{"100%":`min-h-full`,"100vh":`min-h-screen`,"min-content":`min-h-min`,"max-content":`min-h-max`,"fit-content":`min-h-fit`},"max-inline-size":{"100%":`max-w-full`,"100vw":`max-w-screen`,"min-content":`max-w-min`,"max-content":`max-w-max`,"fit-content":`max-w-fit`,none:`max-w-none`},"max-block-size":{"100%":`max-h-full`,"100vh":`max-h-screen`,"min-content":`max-h-min`,"max-content":`max-h-max`,"fit-content":`max-h-fit`,none:`max-h-none`},margin:{auto:`m-auto`},"margin-top":{auto:`mt-auto`},"margin-right":{auto:`mr-auto`},"margin-bottom":{auto:`mb-auto`},"margin-left":{auto:`ml-auto`},"border-radius":{0:`rounded-none`,"0px":`rounded-none`,"0.125rem":`rounded-xs`,"2px":`rounded-xs`,"0.25rem":`rounded-sm`,"4px":`rounded-sm`,"0.375rem":`rounded-md`,"6px":`rounded-md`,"0.5rem":`rounded-lg`,"8px":`rounded-lg`,"0.75rem":`rounded-xl`,"12px":`rounded-xl`,"1rem":`rounded-2xl`,"16px":`rounded-2xl`,"1.5rem":`rounded-3xl`,"24px":`rounded-3xl`,"9999px":`rounded-full`},"border-top-left-radius":{0:`rounded-tl-none`,"0px":`rounded-tl-none`,"0.25rem":`rounded-tl-sm`,"4px":`rounded-tl-sm`,"0.5rem":`rounded-tl-lg`,"8px":`rounded-tl-lg`,"9999px":`rounded-tl-full`},"border-top-right-radius":{0:`rounded-tr-none`,"0px":`rounded-tr-none`,"0.25rem":`rounded-tr-sm`,"4px":`rounded-tr-sm`,"0.5rem":`rounded-tr-lg`,"8px":`rounded-tr-lg`,"9999px":`rounded-tr-full`},"border-bottom-right-radius":{0:`rounded-br-none`,"0px":`rounded-br-none`,"0.25rem":`rounded-br-sm`,"4px":`rounded-br-sm`,"0.5rem":`rounded-br-lg`,"8px":`rounded-br-lg`,"9999px":`rounded-br-full`},"border-bottom-left-radius":{0:`rounded-bl-none`,"0px":`rounded-bl-none`,"0.25rem":`rounded-bl-sm`,"4px":`rounded-bl-sm`,"0.5rem":`rounded-bl-lg`,"8px":`rounded-bl-lg`,"9999px":`rounded-bl-full`},"border-start-start-radius":{0:`rounded-ss-none`,"0px":`rounded-ss-none`,"0.25rem":`rounded-ss-sm`,"4px":`rounded-ss-sm`,"0.5rem":`rounded-ss-lg`,"8px":`rounded-ss-lg`,"9999px":`rounded-ss-full`},"border-start-end-radius":{0:`rounded-se-none`,"0px":`rounded-se-none`,"0.25rem":`rounded-se-sm`,"4px":`rounded-se-sm`,"0.5rem":`rounded-se-lg`,"8px":`rounded-se-lg`,"9999px":`rounded-se-full`},"border-end-end-radius":{0:`rounded-ee-none`,"0px":`rounded-ee-none`,"0.25rem":`rounded-ee-sm`,"4px":`rounded-ee-sm`,"0.5rem":`rounded-ee-lg`,"8px":`rounded-ee-lg`,"9999px":`rounded-ee-full`},"border-end-start-radius":{0:`rounded-es-none`,"0px":`rounded-es-none`,"0.25rem":`rounded-es-sm`,"4px":`rounded-es-sm`,"0.5rem":`rounded-es-lg`,"8px":`rounded-es-lg`,"9999px":`rounded-es-full`},columns:{auto:`columns-auto`},"font-size":{"12px":`text-xs`,"0.75rem":`text-xs`,"14px":`text-sm`,"0.875rem":`text-sm`,"16px":`text-base`,"1rem":`text-base`,"18px":`text-lg`,"1.125rem":`text-lg`,"20px":`text-xl`,"1.25rem":`text-xl`,"24px":`text-2xl`,"1.5rem":`text-2xl`,"30px":`text-3xl`,"1.875rem":`text-3xl`,"36px":`text-4xl`,"2.25rem":`text-4xl`,"48px":`text-5xl`,"3rem":`text-5xl`,"60px":`text-6xl`,"3.75rem":`text-6xl`,"72px":`text-7xl`,"4.5rem":`text-7xl`,"96px":`text-8xl`,"6rem":`text-8xl`,"128px":`text-9xl`,"8rem":`text-9xl`},"line-height":{"16px":`leading-4`,"1rem":`leading-4`,"20px":`leading-5`,"1.25rem":`leading-5`,"24px":`leading-6`,"1.5rem":`leading-6`,"28px":`leading-7`,"1.75rem":`leading-7`,"32px":`leading-8`,"2rem":`leading-8`,1:`leading-none`,normal:`leading-normal`,"1.25":`leading-tight`,"1.375":`leading-snug`,"1.5":`leading-normal`,"1.625":`leading-relaxed`,2:`leading-loose`},"letter-spacing":{normal:`tracking-normal`,"-0.05em":`tracking-tighter`,"-0.025em":`tracking-tight`,"0.025em":`tracking-wide`,"0.05em":`tracking-wider`,"0.1em":`tracking-widest`},"outline-width":{0:`outline-0`,"0px":`outline-0`,"1px":`outline-1`,"2px":`outline-2`,"4px":`outline-4`,"8px":`outline-8`},"outline-offset":{0:`outline-offset-0`,"0px":`outline-offset-0`,"1px":`outline-offset-1`,"2px":`outline-offset-2`,"4px":`outline-offset-4`,"8px":`outline-offset-8`},overflow:{auto:`overflow-auto`,hidden:`overflow-hidden`,clip:`overflow-clip`,visible:`overflow-visible`,scroll:`overflow-scroll`},"overflow-x":{auto:`overflow-x-auto`,hidden:`overflow-x-hidden`,clip:`overflow-x-clip`,visible:`overflow-x-visible`,scroll:`overflow-x-scroll`},"overflow-y":{auto:`overflow-y-auto`,hidden:`overflow-y-hidden`,clip:`overflow-y-clip`,visible:`overflow-y-visible`,scroll:`overflow-y-scroll`},cursor:{alias:`cursor-alias`,auto:`cursor-auto`,cell:`cursor-cell`,"context-menu":`cursor-context-menu`,copy:`cursor-copy`,crosshair:`cursor-crosshair`,default:`cursor-default`,grab:`cursor-grab`,grabbing:`cursor-grabbing`,help:`cursor-help`,move:`cursor-move`,"not-allowed":`cursor-not-allowed`,pointer:`cursor-pointer`,progress:`cursor-progress`,text:`cursor-text`,wait:`cursor-wait`,"zoom-in":`cursor-zoom-in`,"zoom-out":`cursor-zoom-out`},"pointer-events":{none:`pointer-events-none`,auto:`pointer-events-auto`},resize:{none:`resize-none`,both:`resize`,horizontal:`resize-x`,vertical:`resize-y`},"user-select":{none:`select-none`,text:`select-text`,all:`select-all`,auto:`select-auto`}};function el(e,t){let n=e.trim().toLowerCase(),r=n.startsWith(`-`),i=r?n.slice(1):n;if(i===`0`||i===`0px`||i===`0rem`)return`0`;if(i===`1px`)return r?`-px`:`px`;let a=tl(i)??nl(i);if(a===void 0)return;let o=a/.25;if(!Number.isFinite(o))return;let s=Math.round(o);if(Math.abs(o-s)<1e-6)return r?`-${s}`:String(s);if(t.numericMultipliers!==`all`||Math.abs(o-Math.round(o*4)/4)>1e-6)return;let c=String(o).replace(/\.([0-9]*?)0+$/,`.$1`);return r?`-${c}`:c}function tl(e){if(!e.endsWith(`rem`))return;let t=Number(e.slice(0,-3));return Number.isFinite(t)?t:void 0}function nl(e){if(!e.endsWith(`px`))return;let t=Number(e.slice(0,-2));return Number.isFinite(t)?t/16:void 0}function rl(e,t){let n=Xc[e.property]?.[e.value];if(n)return V(e,n,`exact`);let r=$c[e.property]?.[e.value.toLowerCase()];if(r)return V(e,r,`exact`);if((e.property===`-webkit-line-clamp`||e.property===`line-clamp`)&&/^\d+$/.test(e.value))return V(e,`line-clamp-${e.value}`,`exact`);if((e.property===`-webkit-line-clamp`||e.property===`line-clamp`)&&e.value===`none`)return V(e,`line-clamp-none`,`exact`);let i=cl(e);if(i)return V(e,i,`exact`);if(e.property===`z-index`&&/^-?\d+$/.test(e.value))return V(e,e.value.startsWith(`-`)?`-z-${e.value.slice(1)}`:`z-${e.value}`,`exact`);let a=al(e);if(a)return V(e,a,`exact`);let o=pl(e);if(o)return V(e,o,`exact`);let s=ml(e);if(s)return V(e,s,`exact`);let c=il(e,t);if(c)return V(e,c,`exact`);let l=_l(e,t);if(l)return V(e,l,`exact`);let u=Dl(e,t);if(u)return Array.isArray(u)?u.map(t=>V(e,t,`exact`)):V(e,u,`exact`);let d=sl(e);if(d)return Array.isArray(d)?d.map(t=>V(e,t,`exact`)):V(e,d,`exact`);let f=Sl(e);if(f)return Array.isArray(f)?f.map(t=>V(e,t,`exact`)):V(e,f,`exact`);let p=Fl(e);if(p)return V(e,p,`exact`);let m=zl(e,t);if(m)return Array.isArray(m)?m.map(t=>V(e,t,`exact`)):V(e,m,`exact`);let h=Ll(e);if(h)return V(e,h,`exact`);let g=Zc[e.property];if(g&&t.allowArbitraryValues)return V(e,Jc(g,e.value),`arbitrary`);if(t.allowArbitraryProperties)return V(e,Yc(e.property,e.value),`arbitrary`)}function il(e,t){if(!Qc.has(e.property))return;let n=Zc[e.property];if(!n)return;let r=el(e.value,t);if(r)return r.startsWith(`-`)?`-${n}-${r.slice(1)}`:`${n}-${r}`}function al(e){if(e.property===`tab-size`&&/^\d+$/.test(e.value))return`tab-${e.value}`;if(e.property===`zoom`){let t=Number(e.value);if(Number.isFinite(t)&&t>0)return`zoom-${t*100}`}if(e.property===`order`&&/^-?\d+$/.test(e.value))return e.value.startsWith(`-`)?`-order-${e.value.slice(1)}`:`order-${e.value}`;if((e.property===`column-count`||e.property===`columns`)&&/^\d+$/.test(e.value))return`columns-${e.value}`;let t=ol(e);if(t)return t;let n=ll(e);if(n)return n;let r=ul(e);if(r)return r;let i=dl(e);if(i)return i;if(e.property===`flex-grow`&&/^[01]$/.test(e.value))return e.value===`1`?`grow`:`grow-0`;if(e.property===`flex-shrink`&&/^[01]$/.test(e.value))return e.value===`1`?`shrink`:`shrink-0`;if(e.property===`stroke-width`&&/^\d+$/.test(e.value))return`stroke-${e.value}`;if(e.property===`transition-duration`){let t=fl(e.value);if(t!==void 0)return`duration-${t}`}if(e.property===`transition-delay`){let t=fl(e.value);if(t!==void 0)return`delay-${t}`}}function ol(e){if(e.property!==`aspect-ratio`)return;let t=e.value.match(/^(\d+)\s*\/\s*(\d+)$/);if(!t)return;let[,n,r]=t;return n===r?`aspect-square`:n===`16`&&r===`9`?`aspect-video`:`aspect-${n}/${r}`}function sl(e){if(e.property!==`scroll-snap-type`)return;if(e.value===`none`)return`snap-none`;let t=e.value.trim().toLowerCase().split(/\s+/);if(t.length!==2)return;let n={x:`snap-x`,y:`snap-y`,both:`snap-both`,block:`snap-y`,inline:`snap-x`},r={mandatory:`snap-mandatory`,proximity:`snap-proximity`},i=n[t[0]??``],a=r[t[1]??``];if(!(!i||!a))return[i,a]}function cl(e){if(e.property!==`content`)return;if(e.value===`none`)return`content-none`;let t=e.value.match(/^["'](.+)["']$/)?.[1];if(t)return`content-['${t.replace(/'/g,`\\'`)}']`}function ll(e){let t={"grid-column-start":`col-start`,"grid-column-end":`col-end`,"grid-row-start":`row-start`,"grid-row-end":`row-end`}[e.property];if(!(!t||!/^-?\d+$/.test(e.value)))return e.value.startsWith(`-`)?`-${t}-${e.value.slice(1)}`:`${t}-${e.value}`}function ul(e){if(e.value===`1 / -1`){if(e.property===`grid-column`)return`col-span-full`;if(e.property===`grid-row`)return`row-span-full`}let t=e.value.match(/^span (\d+) \/ span \d+$/)?.[1];if(t){if(e.property===`grid-column`)return`col-span-${t}`;if(e.property===`grid-row`)return`row-span-${t}`}}function dl(e){let t=e.value.match(/^repeat\((\d+), minmax\(0, 1fr\)\)$/)?.[1];if(t){if(e.property===`grid-template-columns`)return`grid-cols-${t}`;if(e.property===`grid-template-rows`)return`grid-rows-${t}`}}function fl(e){let t=e.trim().toLowerCase();if(t.endsWith(`ms`)){let e=Number(t.slice(0,-2));return Number.isInteger(e)?e:void 0}if(t.endsWith(`s`)){let e=Number(t.slice(0,-1))*1e3;return Number.isInteger(e)?e:void 0}}function pl(e){let t={"border-width":`border`,"border-top-width":`border-t`,"border-right-width":`border-r`,"border-bottom-width":`border-b`,"border-left-width":`border-l`,"border-inline-start-width":`border-s`,"border-inline-end-width":`border-e`,"border-inline-width":`border-x`,"border-block-width":`border-y`}[e.property];if(!t)return;let n=e.value.trim().toLowerCase();if(n===`1px`)return t;if(n===`0`||n===`0px`)return`${t}-0`;let r=n.match(/^(2|4|8)px$/)?.[1];return r?`${t}-${r}`:void 0}function ml(e){if(e.property!==`opacity`)return;let t=Number(e.value);if(!Number.isFinite(t)||t<0||t>1)return;let n=t*100;if(Number.isInteger(n))return`opacity-${n}`}var hl={white:`#ffffff`,black:`#000000`,transparent:`transparent`,currentcolor:`currentColor`},gl={inherit:`inherit`,transparent:`transparent`,currentcolor:`current`};function _l(e,t){let n={color:`text`,fill:`fill`,stroke:`stroke`,"background-color":`bg`,"border-color":`border`,"border-top-color":`border-t`,"border-right-color":`border-r`,"border-bottom-color":`border-b`,"border-left-color":`border-l`,"border-inline-start-color":`border-s`,"border-inline-end-color":`border-e`,"border-inline-color":`border-x`,"border-block-color":`border-y`,"outline-color":`outline`,"text-decoration-color":`decoration`,"caret-color":`caret`,"accent-color":`accent`}[e.property];if(!n||t.colorMatch===`none`)return;let r=yl(e.value),i=gl[r];if(i)return`${n}-${i}`;let a=Gc(r);if(a)return`${n}-${a}`;let o=Object.entries(t.theme.colors).find(([,e])=>yl(e)===r)?.[0];if(o)return`${n}-${o}`;let s=vl(r,t);if(s)return`${n}-${s}`}function vl(e,t){let n=e.match(/^oklch\(([^/]+)\/\s*([\d.]+)%?\s*\)$/);if(n){let[,e,r]=n;if(!e||!r)return;let i=yl(`oklch(${e.trim()})`),a=Object.entries(t.theme.colors).find(([,e])=>yl(e)===i)?.[0];return a?`${a}/${Math.round(Number(r))}`:void 0}let r=e.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)$/);if(r){let[,e,n,i,a]=r;if(!e||!n||!i||!a)return;let o=yl(`#${Number(e).toString(16).padStart(2,`0`)}${Number(n).toString(16).padStart(2,`0`)}${Number(i).toString(16).padStart(2,`0`)}`),s=Object.entries(t.theme.colors).find(([,e])=>yl(e)===o)?.[0];return s?`${s}/${Math.round(Number(a)*100)}`:void 0}}function yl(e){let t=e.trim().toLowerCase(),n=hl[t];return n?n.toLowerCase():bl(t)||t}function bl(e){let t=e.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);if(!t){let t=e.match(/^rgb\(\s*(\d+)\s+(\d+)\s+(\d+)\s*\)$/);if(!t)return;let[,n,r,i]=t;return!n||!r||!i?void 0:`#${xl(Number(n))}${xl(Number(r))}${xl(Number(i))}`}let[,n,r,i]=t;if(!(!n||!r||!i))return`#${xl(Number(n))}${xl(Number(r))}${xl(Number(i))}`}function xl(e){return Math.max(0,Math.min(255,Math.round(e))).toString(16).padStart(2,`0`)}function Sl(e){if(e.property!==`filter`&&e.property!==`backdrop-filter`)return;let t=e.property===`backdrop-filter`?`backdrop-`:``,n=e.value.trim().toLowerCase(),r=n.match(/^blur\(([^)]+)\)$/)?.[1];if(r===`8px`)return`${t}blur`;if(r)return`${t}blur-[${r}]`;let i=n.match(/^brightness\(([^)]+)\)$/)?.[1];if(i)return z(`${t}brightness`,i);let a=n.match(/^contrast\(([^)]+)\)$/)?.[1];if(a)return z(`${t}contrast`,a);let o=n.match(/^grayscale\(([^)]+)\)$/)?.[1];if(o)return z(`${t}grayscale`,o);let s=n.match(/^invert\(([^)]+)\)$/)?.[1];if(s)return z(`${t}invert`,s);let c=n.match(/^saturate\(([^)]+)\)$/)?.[1];if(c)return z(`${t}saturate`,c);let l=n.match(/^sepia\(([^)]+)\)$/)?.[1];if(l)return z(`${t}sepia`,l);let u=n.match(/^hue-rotate\((-?\d+(?:\.\d+)?deg)\)$/)?.[1];if(u)return Al(u)?.replace(`rotate-`,`${t}hue-rotate-`).replace(`-rotate-`,`-${t}hue-rotate-`);let d=n.match(/^opacity\(([^)]+)\)$/)?.[1];if(d&&t===`backdrop-`)return z(`backdrop-opacity`,d);let f=n.match(/^drop-shadow\((.+)\)$/)?.[1];if(f&&t===``)return El(f);let p=Cl(n,t);if(p&&p.length>0)return p.length===1?p[0]:p}function Cl(e,t){let n=e.match(/[a-z-]+\([^)]+\)/gi);if(!n||n.length<2)return;let r=[];for(let e of n){let n=wl(e.toLowerCase(),t);n&&r.push(n)}return r.length>=2?r:void 0}function wl(e,t){let n=e.match(/^blur\(([^)]+)\)$/)?.[1];if(n===`8px`)return`${t}blur`;if(n)return`${t}blur-[${n}]`;let r=e.match(/^brightness\(([^)]+)\)$/)?.[1];if(r)return z(`${t}brightness`,r);let i=e.match(/^contrast\(([^)]+)\)$/)?.[1];if(i)return z(`${t}contrast`,i);let a=e.match(/^grayscale\(([^)]+)\)$/)?.[1];if(a)return z(`${t}grayscale`,a);let o=e.match(/^saturate\(([^)]+)\)$/)?.[1];if(o)return z(`${t}saturate`,o);let s=e.match(/^sepia\(([^)]+)\)$/)?.[1];if(s)return z(`${t}sepia`,s);let c=e.match(/^invert\(([^)]+)\)$/)?.[1];if(c)return z(`${t}invert`,c);let l=e.match(/^hue-rotate\((-?\d+(?:\.\d+)?deg)\)$/)?.[1];if(l)return Al(l)?.replace(`rotate-`,`${t}hue-rotate-`).replace(`-rotate-`,`-${t}hue-rotate-`)}var Tl={"0 1px 1px rgb(0 0 0 / 0.05)":`drop-shadow-xs`,"0 1px 2px rgb(0 0 0 / 0.15)":`drop-shadow-sm`,"0 3px 3px rgb(0 0 0 / 0.12)":`drop-shadow-md`,"0 4px 4px rgb(0 0 0 / 0.15)":`drop-shadow-lg`,"0 9px 7px rgb(0 0 0 / 0.1)":`drop-shadow-xl`,"0 25px 25px rgb(0 0 0 / 0.15)":`drop-shadow-2xl`};function El(e){return Tl[e.trim().replace(/\s+/g,` `)]}function z(e,t){let n=t.trim(),r=n.endsWith(`%`)?Number(n.slice(0,-1)):Number(n)*100;if(Number.isFinite(r))return Number.isInteger(r)?r===100&&(e.endsWith(`grayscale`)||e.endsWith(`invert`)||e.endsWith(`sepia`))?e:`${e}-${r}`:`${e}-[${n}]`}function Dl(e,t){if(e.property===`rotate`)return Al(e.value);if(e.property===`scale`)return Nl(e.value);if(e.property===`scale-x`)return Nl(e.value,`scale-x`);if(e.property===`scale-y`)return Nl(e.value,`scale-y`);if(e.property===`scale-z`)return Nl(e.value,`scale-z`);if(e.property===`skew`)return B(`skew`,e.value);if(e.property===`skew-x`)return B(`skew-x`,e.value);if(e.property===`skew-y`)return B(`skew-y`,e.value);if(e.property===`translate`)return jl(e.value,t);if(e.property===`translate-x`)return Ml(`translate-x`,e.value,t);if(e.property===`translate-y`)return Ml(`translate-y`,e.value,t);if(e.property===`translate-z`)return Ml(`translate-z`,e.value,t);if(e.property===`transform`)return kl(e.value,t)}var Ol=[{pattern:/rotate\((-?\d+(?:\.\d+)?deg)\)/i,convert:e=>Al(e)},{pattern:/rotateX\((-?\d+(?:\.\d+)?deg)\)/i,convert:e=>B(`rotate-x`,e)},{pattern:/rotateY\((-?\d+(?:\.\d+)?deg)\)/i,convert:e=>B(`rotate-y`,e)},{pattern:/rotateZ\((-?\d+(?:\.\d+)?deg)\)/i,convert:e=>B(`rotate-z`,e)},{pattern:/scale\((-?\d+(?:\.\d+)?)\)/i,convert:e=>Nl(e)},{pattern:/scaleX\((-?\d+(?:\.\d+)?)\)/i,convert:e=>Nl(e,`scale-x`)},{pattern:/scaleY\((-?\d+(?:\.\d+)?)\)/i,convert:e=>Nl(e,`scale-y`)},{pattern:/scaleZ\((-?\d+(?:\.\d+)?)\)/i,convert:e=>Nl(e,`scale-z`)},{pattern:/translateX\(([^)]+)\)/i,convert:(e,t)=>Ml(`translate-x`,e,t)},{pattern:/translateY\(([^)]+)\)/i,convert:(e,t)=>Ml(`translate-y`,e,t)},{pattern:/translateZ\(([^)]+)\)/i,convert:(e,t)=>Ml(`translate-z`,e,t)},{pattern:/skewX\((-?\d+(?:\.\d+)?deg)\)/i,convert:e=>B(`skew-x`,e)},{pattern:/skewY\((-?\d+(?:\.\d+)?deg)\)/i,convert:e=>B(`skew-y`,e)}];function kl(e,t){let n=[];for(let r of Ol){let i=e.match(r.pattern);if(i?.[1]){let e=r.convert(i[1],t);e&&n.push(e)}}if(n.length!==0)return n.length===1?n[0]:n}function Al(e){return B(`rotate`,e)}function B(e,t){let n=t.trim().toLowerCase();if(!n.endsWith(`deg`))return;let r=Number(n.slice(0,-3));if(!Number.isFinite(r))return;let i=Math.abs(r),a=Number.isInteger(i)?String(i):`[${i}deg]`;return r<0?`-${e}-${a}`:`${e}-${a}`}function jl(e,t){let[n,r=n]=e.trim().split(/\s+/);if(!(!n||r!==n))return Ml(`translate`,n,t)}function Ml(e,t,n){let r=el(t,n);if(r)return r.startsWith(`-`)?`-${e}-${r.slice(1)}`:`${e}-${r}`}function Nl(e,t=`scale`){let n=Number(e.trim());if(!Number.isFinite(n))return;let r=n*100;return Number.isInteger(r)?r<0?`-${t}-${Math.abs(r)}`:`${t}-${r}`:`${t}-[${e.trim()}]`}var Pl={"0 1px 2px 0 rgb(0 0 0 / 0.05)":`shadow-xs`,"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)":`shadow-sm`,"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)":`shadow-md`,"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)":`shadow-lg`,"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)":`shadow-xl`,"0 25px 50px -12px rgb(0 0 0 / 0.25)":`shadow-2xl`,"inset 0 2px 4px 0 rgb(0 0 0 / 0.05)":`shadow-inner`};function Fl(e){if(e.property===`box-shadow`)return Pl[e.value.trim().replace(/\s+/g,` `)]}var Il={color:`text`,"background-color":`bg`,"border-color":`border`,"border-top-color":`border-t`,"border-right-color":`border-r`,"border-bottom-color":`border-b`,"border-left-color":`border-l`,"outline-color":`outline`,fill:`fill`,stroke:`stroke`,"caret-color":`caret`,"accent-color":`accent`,"text-decoration-color":`decoration`,width:`w`,height:`h`,"min-width":`min-w`,"min-height":`min-h`,"max-width":`max-w`,"max-height":`max-h`,padding:`p`,"padding-top":`pt`,"padding-right":`pr`,"padding-bottom":`pb`,"padding-left":`pl`,margin:`m`,"margin-top":`mt`,"margin-right":`mr`,"margin-bottom":`mb`,"margin-left":`ml`,gap:`gap`,"row-gap":`gap-y`,"column-gap":`gap-x`,"font-size":`text`,"font-family":`font`,"border-radius":`rounded`,"border-width":`border`,"box-shadow":`shadow`,"line-height":`leading`,"letter-spacing":`tracking`};function Ll(e){let t=e.value.match(/^var\(\s*(--[\w-]+)\s*\)$/);if(!t?.[1])return;let n=Il[e.property];if(n)return`${n}-(${t[1]})`}var Rl={"to right":`bg-linear-to-r`,"to left":`bg-linear-to-l`,"to top":`bg-linear-to-t`,"to bottom":`bg-linear-to-b`,"to top right":`bg-linear-to-tr`,"to top left":`bg-linear-to-tl`,"to bottom right":`bg-linear-to-br`,"to bottom left":`bg-linear-to-bl`};function zl(e,t){if(e.property!==`background-image`&&e.property!==`background`)return;let n=e.value.trim().match(/^linear-gradient\((.+)\)$/);if(!n?.[1])return;let r=n[1],i=Vl(r);if(i===-1)return;let a=r.slice(0,i).trim(),o=r.slice(i+1).trim(),s=Rl[a]??(a.match(/^\d+deg$/)?`bg-linear-${a.replace(`deg`,``)}`:void 0);if(!s)return;let c=Hl(o);if(c.length<2||c.length>3)return;let l=[s],u=Bl(c[0]??``,`from`,t);if(!u)return;if(l.push(u),c.length===3){let e=Bl(c[1]??``,`via`,t);if(!e)return;l.push(e)}let d=Bl(c[c.length-1]??``,`to`,t);if(d)return l.push(d),l}function Bl(e,t,n){let r=e.trim().split(/\s+/)[0];if(!r)return;let i=yl(r),a=gl[i];if(a)return`${t}-${a}`;let o=Gc(i);if(o)return`${t}-${o}`;let s=Object.entries(n.theme.colors).find(([,e])=>yl(e)===i)?.[0];return s?`${t}-${s}`:`${t}-[${r}]`}function Vl(e){let t=0;for(let n=0;n<e.length;n++)if(e[n]===`(`)t++;else if(e[n]===`)`)t--;else if(e[n]===`,`&&t===0)return n;return-1}function Hl(e){let t=[],n=0,r=0;for(let i=0;i<e.length;i++)e[i]===`(`?n++:e[i]===`)`?n--:e[i]===`,`&&n===0&&(t.push(e.slice(r,i).trim()),r=i+1);return t.push(e.slice(r).trim()),t.filter(Boolean)}function V(e,t,n){let r=e.important?`!`:``,i=e.variants.length>0?`${e.variants.join(`:`)}:`:``;return{...e,className:`${r}${i}${t}`,kind:n}}var Ul=new Set(`animation-iteration-count.aspect-ratio.border-image-outset.border-image-slice.border-image-width.box-flex.box-flex-group.box-ordinal-group.column-count.columns.flex.flex-grow.flex-negative.flex-order.flex-positive.flex-shrink.grid-area.grid-column.grid-column-end.grid-column-start.grid-row.grid-row-end.grid-row-start.-webkit-line-clamp.line-clamp.line-height.opacity.order.orphans.scale.scale-z.stroke-width.tab-size.widows.z-index.zoom`.split(`.`));function Wl(e){return typeof e==`string`?Gl(e):tu(e)?Array.from({length:e.length},(t,n)=>e.item(n)).filter(Boolean).map(t=>eu(t,e.getPropertyValue(t),e.getPropertyPriority(t)===`important`)):nu(e)?Array.from(e,([e,t])=>Zl(e,t)).filter(Boolean):Kl(e)}function Gl(e){return e.split(`;`).map(e=>e.trim()).filter(Boolean).map(e=>{let t=e.indexOf(`:`);if(t!==-1)return Zl(e.slice(0,t).trim(),e.slice(t+1).trim())}).filter(Boolean)}function Kl(e,t=[]){return Object.entries(e).flatMap(([e,n])=>{if(ru(n)){let r=ql(e);return r?Kl(n,[...t,r]):[]}let r=Zl(e,n);return r?[{...r,variants:t}]:[]})}function ql(e){if(e===`dark`)return`dark`;if(e.startsWith(`&:`))return Yl(e.slice(2));if(e.startsWith(`:`))return Yl(e.slice(1));if(e.startsWith(`@media`))return Xl(e);if(e.startsWith(`@supports`))return`supports-[${e.slice(9).trim()}]`;if(e.startsWith(`@container`))return Jl(e)}function Jl(e){let t=e.replace(/\s+/g,` `).trim(),n=t.match(/@container\s*\(min-width:\s*(\d+)px\)/);if(n){let e=Number(n[1]);return{320:`@xs`,384:`@sm`,448:`@md`,512:`@lg`,576:`@xl`,672:`@2xl`,768:`@3xl`,896:`@4xl`,1024:`@5xl`,1152:`@6xl`,1280:`@7xl`}[e]??`@min-[${e}px]`}return`@container-[${t.replace(/^@container\s*/,``)}]`}function Yl(e){return e.replace(/^:/,``).replace(/-child$/,``).replace(/-of-type$/,`-of-type`)}function Xl(e){let t=e.replace(/\s+/g,` `).trim();return/min-width:\s*640px/.test(t)?`sm`:/min-width:\s*768px/.test(t)?`md`:/min-width:\s*1024px/.test(t)?`lg`:/min-width:\s*1280px/.test(t)?`xl`:/min-width:\s*1536px/.test(t)?`2xl`:/prefers-color-scheme:\s*dark/.test(t)?`dark`:/prefers-color-scheme:\s*light/.test(t)?`light`:/prefers-reduced-motion:\s*reduce/.test(t)?`motion-reduce`:/prefers-reduced-motion:\s*no-preference/.test(t)?`motion-safe`:/prefers-contrast:\s*more/.test(t)?`contrast-more`:/prefers-contrast:\s*less/.test(t)?`contrast-less`:/\(hover:\s*hover\)/.test(t)?`hover`:/\(pointer:\s*fine\)/.test(t)?`pointer-fine`:/\(pointer:\s*coarse\)/.test(t)?`pointer-coarse`:/print/.test(t)?`print`:/\(orientation:\s*portrait\)/.test(t)?`portrait`:/\(orientation:\s*landscape\)/.test(t)?`landscape`:`media-[${t.replace(/^@media\s*/,``)}]`}function Zl(e,t){if(t==null||t===``)return;let n=Ql(e),{value:r,important:i}=$l(n,t);return eu(n,r,i)}function Ql(e){return e.startsWith(`--`)?e:e.replace(/^Webkit/,`-webkit`).replace(/^Moz/,`-moz`).replace(/^ms/,`-ms`).replace(/^O/,`-o`).replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase()}function $l(e,t){let n=typeof t==`number`&&t!==0&&!Ul.has(e)?`${t}px`:String(t).trim();return n.endsWith(`!important`)?{value:n.slice(0,-10).trim(),important:!0}:{value:n,important:!1}}function eu(e,t,n){return{property:e,value:t,important:n,variants:[]}}function tu(e){return typeof CSSStyleDeclaration<`u`&&e instanceof CSSStyleDeclaration}function nu(e){return typeof e==`object`&&!!e&&Symbol.iterator in e}function ru(e){return typeof e==`object`&&!!e}function H(e){let t=[],n=``,r=0,i;for(let a of e.trim()){if(i){n+=a,a===i&&(i=void 0);continue}if(a===`"`||a===`'`){i=a,n+=a;continue}if(a===`(`&&(r+=1),a===`)`&&(r=Math.max(0,r-1)),/\s/.test(a)&&r===0){n&&=(t.push(n),``);continue}n+=a}return n&&t.push(n),t}var iu={margin:[`margin-top`,`margin-right`,`margin-bottom`,`margin-left`],padding:[`padding-top`,`padding-right`,`padding-bottom`,`padding-left`],inset:[`top`,`right`,`bottom`,`left`],"border-color":[`border-top-color`,`border-right-color`,`border-bottom-color`,`border-left-color`],"border-style":[`border-top-style`,`border-right-style`,`border-bottom-style`,`border-left-style`],"border-width":[`border-top-width`,`border-right-width`,`border-bottom-width`,`border-left-width`],"border-radius":[`border-top-left-radius`,`border-top-right-radius`,`border-bottom-right-radius`,`border-bottom-left-radius`],"scroll-margin":[`scroll-margin-top`,`scroll-margin-right`,`scroll-margin-bottom`,`scroll-margin-left`],"scroll-padding":[`scroll-padding-top`,`scroll-padding-right`,`scroll-padding-bottom`,`scroll-padding-left`]},au={"overscroll-behavior":[`overscroll-behavior-x`,`overscroll-behavior-y`],"margin-inline":[`margin-inline-start`,`margin-inline-end`],"margin-block":[`margin-block-start`,`margin-block-end`],"padding-inline":[`padding-inline-start`,`padding-inline-end`],"padding-block":[`padding-block-start`,`padding-block-end`],"inset-inline":[`inset-inline-start`,`inset-inline-end`],"inset-block":[`top`,`bottom`],"scroll-margin-inline":[`scroll-margin-inline-start`,`scroll-margin-inline-end`],"scroll-margin-block":[`scroll-margin-block-start`,`scroll-margin-block-end`],"scroll-padding-inline":[`scroll-padding-inline-start`,`scroll-padding-inline-end`],"scroll-padding-block":[`scroll-padding-block-start`,`scroll-padding-block-end`]};function ou(e){return e.flatMap(e=>{let t=yu(e);if(t)return t;let n=gu(e);if(n)return n;let r=_u(e);if(r)return r;let i=vu(e);if(i)return i;let a=hu(e);if(a)return a;let o=pu(e);if(o)return o;let s=mu(e);if(s)return s;let c=fu(e);if(c)return c;let l=du(e);if(l)return l;let u=uu(e);if(u)return u;let d=lu(e);if(d)return d;let f=cu(e);if(f)return f;let p=su(e);if(p)return p;let m=iu[e.property];if(!m)return[e];let h=bu(e.value);return h?[{...e,property:m[0],value:h[0]},{...e,property:m[1],value:h[1]},{...e,property:m[2],value:h[2]},{...e,property:m[3],value:h[3]}]:[e]})}function su(e){if(e.property!==`background`)return;let t=H(e.value);if(t.length<1)return;let n=new Set([`repeat`,`no-repeat`,`repeat-x`,`repeat-y`,`space`,`round`]),r=new Set([`cover`,`contain`]),i=new Set([`fixed`,`local`,`scroll`]),a=new Set([`center`,`top`,`bottom`,`left`,`right`]),o=[];for(let s of t)n.has(s)?o.push({...e,property:`background-repeat`,value:s}):r.has(s)?o.push({...e,property:`background-size`,value:s}):i.has(s)?o.push({...e,property:`background-attachment`,value:s}):a.has(s)?o.push({...e,property:`background-position`,value:s}):s===`none`?o.push({...e,property:`background-image`,value:`none`}):o.some(e=>e.property===`background-color`)||o.push({...e,property:`background-color`,value:s});return o.length>0?o:void 0}function cu(e){if(e.property!==`font`)return;let t=new Set([`normal`,`bold`,`100`,`200`,`300`,`400`,`500`,`600`,`700`,`800`,`900`]),n=new Set([`italic`,`oblique`]),r=H(e.value);if(r.length<2)return;let i=[];for(let a of r)if(n.has(a))i.push({...e,property:`font-style`,value:a});else if(t.has(a))i.push({...e,property:`font-weight`,value:a});else if(a.includes(`/`)){let[t,n]=a.split(`/`);t&&i.push({...e,property:`font-size`,value:t}),n&&i.push({...e,property:`line-height`,value:n})}else /^\d/.test(a)?i.push({...e,property:`font-size`,value:a}):i.some(e=>e.property===`font-family`)||i.push({...e,property:`font-family`,value:a});return i.length>=2?i:void 0}function lu(e){if(e.property!==`size`)return;let t=H(e.value);if(t.length===1&&t[0])return[{...e,property:`width`,value:t[0]},{...e,property:`height`,value:t[0]}];if(t.length===2){let[n,r]=t;return!n||!r?void 0:[{...e,property:`width`,value:n},{...e,property:`height`,value:r}]}}function uu(e){if(e.property!==`column-rule`)return;let t=H(e.value);if(t.length<2)return;let n=new Set([`none`,`solid`,`dashed`,`dotted`,`double`,`groove`,`ridge`,`inset`,`outset`]),r=[];for(let i of t)n.has(i)?r.push({...e,property:`column-rule-style`,value:i}):/^\d/.test(i)?r.push({...e,property:`column-rule-width`,value:i}):r.push({...e,property:`column-rule-color`,value:i});return r.length>=2?r:void 0}function du(e){let t={border:[`border-width`,`border-style`,`border-color`],"border-top":[`border-top-width`,`border-top-style`,`border-top-color`],"border-right":[`border-right-width`,`border-right-style`,`border-right-color`],"border-bottom":[`border-bottom-width`,`border-bottom-style`,`border-bottom-color`],"border-left":[`border-left-width`,`border-left-style`,`border-left-color`],"border-inline-start":[`border-inline-start-width`,`border-inline-start-style`,`border-inline-start-color`],"border-inline-end":[`border-inline-end-width`,`border-inline-end-style`,`border-inline-end-color`],"border-block":[`border-block-width`,`border-block-style`,`border-block-color`],"border-block-start":[`border-block-start-width`,`border-block-start-style`,`border-block-start-color`],"border-block-end":[`border-block-end-width`,`border-block-end-style`,`border-block-end-color`],"border-inline":[`border-inline-width`,`border-inline-style`,`border-inline-color`]}[e.property];if(!t)return;let n=H(e.value);if(n.length<2||n.length>3)return;let r=new Set([`none`,`hidden`,`solid`,`dashed`,`dotted`,`double`,`groove`,`ridge`,`inset`,`outset`]),i=[];for(let a of n)r.has(a)?i.push({...e,property:t[1],value:a}):/^\d/.test(a)?i.push({...e,property:t[0],value:a}):i.push({...e,property:t[2],value:a});return i.length>=2?i:void 0}function fu(e){if(e.property!==`transition`||e.value===`none`)return;let t=e.value.split(/\s+/),n=[];for(let r of t)/^\d/.test(r)&&(r.endsWith(`ms`)||r.endsWith(`s`))?n.some(e=>e.property===`transition-duration`)?n.some(e=>e.property===`transition-delay`)||n.push({...e,property:`transition-delay`,value:r}):n.push({...e,property:`transition-duration`,value:r}):[`ease`,`ease-in`,`ease-out`,`ease-in-out`,`linear`].includes(r)?n.push({...e,property:`transition-timing-function`,value:r}):[`all`,`none`,`color`,`opacity`,`shadow`,`transform`].includes(r)&&n.push({...e,property:`transition-property`,value:r});return n.length>0?n:void 0}function pu(e){if(e.property!==`outline`)return;let t=H(e.value);if(t.length<2)return;let n=new Set([`none`,`solid`,`dashed`,`dotted`,`double`,`groove`,`ridge`,`inset`,`outset`]),r=[];for(let i of t)n.has(i)?r.push({...e,property:`outline-style`,value:i}):/^\d/.test(i)?r.push({...e,property:`outline-width`,value:i}):r.push({...e,property:`outline-color`,value:i});return r.length>0?r:void 0}function mu(e){if(e.property!==`text-decoration`)return;let t=H(e.value);if(t.length<1)return;let n=new Set([`underline`,`overline`,`line-through`,`none`]),r=new Set([`solid`,`double`,`dotted`,`dashed`,`wavy`]),i=[];for(let a of t)n.has(a)?i.push({...e,property:`text-decoration-line`,value:a}):r.has(a)&&i.push({...e,property:`text-decoration-style`,value:a});return i.length>0?i:void 0}function hu(e){if(e.property!==`list-style`)return;let t=H(e.value);if(t.length===0)return;let n=t.flatMap(t=>t===`inside`||t===`outside`?[{...e,property:`list-style-position`,value:t}]:t===`disc`||t===`decimal`||t===`none`?[{...e,property:`list-style-type`,value:t}]:[]);return n.length>0?n:void 0}function gu(e){if(e.property!==`gap`)return;let t=H(e.value);if(t.length!==2||t.some(e=>e.length===0))return;let[n,r]=t;if(!(!n||!r))return[{...e,property:`row-gap`,value:n},{...e,property:`column-gap`,value:r}]}function _u(e){let t={"place-items":[`align-items`,`justify-items`],"place-content":[`align-content`,`justify-content`],"place-self":[`align-self`,`justify-self`]}[e.property];if(!t)return;let n=H(e.value);if(n.length!==2||n.some(e=>e.length===0))return;let[r,i]=n;if(!(!r||!i))return[{...e,property:t[0],value:r},{...e,property:t[1],value:i}]}function vu(e){let t=au[e.property];if(!t)return;let n=H(e.value);if(n.length!==2||n.some(e=>e.length===0))return;let[r,i]=n;if(!(!r||!i))return[{...e,property:t[0],value:r},{...e,property:t[1],value:i}]}function yu(e){if(e.property!==`overflow`)return;let t=H(e.value);if(t.length!==2||t.some(e=>e.length===0))return;let[n,r]=t;if(!(!n||!r))return[{...e,property:`overflow-x`,value:n},{...e,property:`overflow-y`,value:r}]}function bu(e){let t=H(e);if(t.length<1||t.length>4||t.some(e=>e.length===0))return;let[n,r=n,i=n,a=r]=t;if(!(!n||!r||!i||!a))return[n,r,i,a]}var xu=new Map(`display.position.top.right.bottom.left.z-index.visibility.overflow.overflow-x.overflow-y.margin.margin-top.margin-right.margin-bottom.margin-left.padding.padding-top.padding-right.padding-bottom.padding-left.flex-direction.flex-wrap.justify-content.align-items.align-content.align-self.gap.row-gap.column-gap.width.height.min-width.min-height.max-width.max-height.font-size.font-weight.line-height.text-align.color.background-color.border-width.border-color.border-radius.opacity.box-shadow.filter.transform.transition.animation`.split(`.`).map((e,t)=>[e,t]));function Su(e,t){return t.sort===`input`?e:[...e].sort((e,t)=>(xu.get(e.property)??2**53-1)-(xu.get(t.property)??2**53-1))}var Cu={spacing:{},colors:Kc};function wu(e={}){return{theme:{spacing:{...Cu.spacing,...e.theme?.spacing},colors:{...Cu.colors,...e.theme?.colors}},allowArbitraryValues:e.allowArbitraryValues??!0,allowArbitraryProperties:e.allowArbitraryProperties??!0,compression:e.compression??`safe`,sort:e.sort??`grouped`,important:e.important??!1,colorMatch:e.colorMatch??`exact`,numericMultipliers:e.numericMultipliers??`integer`}}function Tu(e,t){let n=wu(t),r=ou(Wl(e)).map(e=>({declaration:e,converted:rl(e,n)})),i=Su(Rc(r.flatMap(({converted:e})=>e?Array.isArray(e)?e:[e]:[]),n),n);return{className:i.map(({className:e})=>e).join(` `),classes:i.map(({className:e})=>e),exact:i.filter(e=>e.kind===`exact`),arbitrary:i.filter(e=>e.kind===`arbitrary`),unmatched:r.flatMap(({declaration:e,converted:t})=>t?[]:[e])}}function Eu(e,t){return Tu(e,t).className}Eu.convert=Tu;function U(e){return`${e}px`}function Du(e){return e.every(e=>e.sizing===`FR`&&e.value===1)?String(e.length):`[${e.map(Fc).join(`_`)}]`}function Ou(e){let t=[`grid`];return e.gridTemplateColumns.length>0&&t.push(`grid-cols-${Du(e.gridTemplateColumns)}`),e.gridTemplateRows.length>0&&t.push(`grid-rows-${Du(e.gridTemplateRows)}`),t}function ku(e){if(!e.gridPosition)return[];let t=[],n=e.gridPosition;return n.column>0&&t.push(`col-start-${n.column}`),n.row>0&&t.push(`row-start-${n.row}`),n.columnSpan>1&&t.push(`col-span-${n.columnSpan}`),n.rowSpan>1&&t.push(`row-span-${n.rowSpan}`),t}var Au={CENTER:`center`,MAX:`flex-end`,SPACE_BETWEEN:`space-between`},ju={CENTER:`center`,MAX:`flex-end`,STRETCH:`stretch`};function Mu(e,t){e.display=`flex`,t.layoutMode===`VERTICAL`&&(e.flexDirection=`column`),t.layoutWrap===`WRAP`&&(e.flexWrap=`wrap`),t.itemSpacing>0&&(e.gap=U(t.itemSpacing)),t.layoutWrap===`WRAP`&&t.counterAxisSpacing>0&&(e.rowGap=U(t.counterAxisSpacing)),Au[t.primaryAxisAlign]&&(e.justifyContent=Au[t.primaryAxisAlign]),ju[t.counterAxisAlign]&&(e.alignItems=ju[t.counterAxisAlign])}function Nu(e,t){let n=t.layoutMode===`HORIZONTAL`?`width`:`height`,r=t.layoutMode===`HORIZONTAL`?`height`:`width`;t.primaryAxisSizing===`FILL`?e[n]=`100%`:t.primaryAxisSizing!==`HUG`&&(e[n]=U(t[n])),t.counterAxisSizing===`FILL`?e[r]=`100%`:t.counterAxisSizing!==`HUG`&&(e[r]=U(t[r]))}function Pu(e,t){let{paddingTop:n,paddingRight:r,paddingBottom:i,paddingLeft:a}=t;n===0&&r===0&&i===0&&a===0||(n===r&&r===i&&i===a?e.padding=U(n):n===i&&a===r?e.padding=`${U(n)} ${U(a)}`:e.padding=`${U(n)} ${U(r)} ${U(i)} ${U(a)}`)}function Fu(e,t,n){let r=jc(t,n);r.isGrid?(e.display=`grid`,t.gridColumnGap>0&&(e.columnGap=U(t.gridColumnGap)),t.gridRowGap>0&&(e.rowGap=U(t.gridRowGap)),t.width>0&&(e.width=U(t.width)),t.gridTemplateRows.length>0&&t.height>0&&(e.height=U(t.height))):r.isFlex?(Mu(e,t),Nu(e,t)):(t.width>0&&(e.width=U(t.width)),t.height>0&&(e.height=U(t.height))),r.parentIsAutoLayout&&t.layoutGrow>0&&(e.flexGrow=`1`),r.isAutoLayout&&Pu(e,t)}function Iu(e,t){let n=Tc(t.fills);n&&t.type!==`TEXT`&&(e.backgroundColor=n);let r=Ec(t.strokes);r&&(e.borderWidth=U(r.weight),e.borderColor=r.color,e.borderStyle=`solid`),t.cornerRadius>0&&(t.independentCorners?e.borderRadius=`${U(t.topLeftRadius)} ${U(t.topRightRadius)} ${U(t.bottomRightRadius)} ${U(t.bottomLeftRadius)}`:e.borderRadius=t.cornerRadius>=9999?`9999px`:U(t.cornerRadius)),t.opacity<1&&(e.opacity=String(t.opacity)),t.rotation!==0&&(e.transform=`rotate(${t.rotation}deg)`),t.clipsContent&&(e.overflow=`hidden`);for(let n of t.effects)if(n.visible)if(n.type===`DROP_SHADOW`||n.type===`INNER_SHADOW`){let t=n.type===`INNER_SHADOW`?`inset `:``,r=n.spread===0?``:` ${U(n.spread)}`,i=tt(n.color);e.boxShadow=`${t}${U(n.offset.x)} ${U(n.offset.y)} ${U(n.radius)}${r} ${i}`}else n.type===`LAYER_BLUR`||n.type===`FOREGROUND_BLUR`?e.filter=`blur(${U(n.radius)})`:e.backdropFilter=`blur(${U(n.radius)})`}function Lu(e,t){if(t.type!==`TEXT`)return;e.fontSize=U(t.fontSize),t.fontFamily&&t.fontFamily!==`Inter`&&(e.fontFamily=t.fontFamily),t.fontWeight!==400&&(e.fontWeight=String(t.fontWeight)),t.textAlignHorizontal!==`LEFT`&&(e.textAlign=t.textAlignHorizontal.toLowerCase());let n=Tc(t.fills);n&&(e.color=n)}function Ru(e,t){let n={};return Fu(n,e,t),Iu(n,e),Lu(n,e),n}function zu(e,t){let n=Ru(e,t),r=jc(e,t),i=[];r.isGrid&&i.push(...Ou(e)),r.parentIsGrid&&i.push(...ku(e)),e.layoutDirection===`RTL`&&i.push(`[direction:rtl]`),e.type===`TEXT`&&l(e)===`RTL`&&i.push(`[direction:rtl]`);let a=Eu(n),o=a?a.split(` `):[];if(n.display===`grid`){let e=o.filter(e=>e!==`grid`);return[...i,...e]}return[...i,...o]}var Bu={FRAME:`Frame`,RECTANGLE:`Rectangle`,ROUNDED_RECTANGLE:`Rectangle`,ELLIPSE:`Ellipse`,TEXT:`Text`,LINE:`Line`,STAR:`Star`,POLYGON:`Polygon`,VECTOR:`Vector`,GROUP:`Group`,SECTION:`Section`,COMPONENT:`Component`,COMPONENT_SET:`Frame`,INSTANCE:`Frame`},Vu={FRAME:`div`,RECTANGLE:`div`,ROUNDED_RECTANGLE:`div`,ELLIPSE:`div`,TEXT:`p`,LINE:`div`,STAR:`div`,POLYGON:`div`,VECTOR:`div`,GROUP:`div`,SECTION:`section`,COMPONENT:`div`,COMPONENT_SET:`div`,INSTANCE:`div`};function Hu(e,t){t.push([`grid`,!0]),e.gridTemplateColumns.length>0&&t.push([`columns`,Ic(e.gridTemplateColumns)]),e.gridTemplateRows.length>0&&t.push([`rows`,Ic(e.gridTemplateRows)]),e.width>0&&t.push([`w`,e.width]),e.gridTemplateRows.length>0&&e.height>0&&t.push([`h`,e.height]),e.gridColumnGap>0&&t.push([`columnGap`,e.gridColumnGap]),e.gridRowGap>0&&t.push([`rowGap`,e.gridRowGap])}function Uu(e,t){t.push([`flex`,e.layoutMode===`HORIZONTAL`?`row`:`col`]),e.layoutDirection===`RTL`&&t.push([`dir`,`rtl`]);let n=e.layoutMode===`HORIZONTAL`?`width`:`height`,r=e.layoutMode===`HORIZONTAL`?`height`:`width`;e.primaryAxisSizing===`FILL`?t.push([n===`width`?`w`:`h`,`fill`]):e.primaryAxisSizing!==`HUG`&&t.push([n===`width`?`w`:`h`,e[n]]),e.counterAxisSizing===`FILL`?t.push([r===`width`?`w`:`h`,`fill`]):e.counterAxisSizing!==`HUG`&&t.push([r===`width`?`w`:`h`,e[r]])}function Wu(e,t){if(!e.gridPosition)return;let n=e.gridPosition;n.column>0&&t.push([`colStart`,n.column]),n.row>0&&t.push([`rowStart`,n.row]),n.columnSpan>1&&t.push([`colSpan`,n.columnSpan]),n.rowSpan>1&&t.push([`rowSpan`,n.rowSpan])}function Gu(e,t){e.itemSpacing>0&&t.push([`gap`,e.itemSpacing]),e.layoutWrap===`WRAP`&&(t.push([`wrap`,!0]),e.counterAxisSpacing>0&&t.push([`rowGap`,e.counterAxisSpacing])),e.primaryAxisAlign===`CENTER`?t.push([`justify`,`center`]):e.primaryAxisAlign===`MAX`?t.push([`justify`,`end`]):e.primaryAxisAlign===`SPACE_BETWEEN`&&t.push([`justify`,`between`]),e.counterAxisAlign===`CENTER`?t.push([`items`,`center`]):e.counterAxisAlign===`MAX`?t.push([`items`,`end`]):e.counterAxisAlign===`STRETCH`&&t.push([`items`,`stretch`])}function Ku(e,t){let n=Mc(e);n&&t.push(...Nc(n,e=>[`p`,e],(e,t)=>[[`py`,e],[`px`,t]],({pt:e,pr:t,pb:n,pl:r})=>{let i=[];return e>0&&i.push([`pt`,e]),t>0&&i.push([`pr`,t]),n>0&&i.push([`pb`,n]),r>0&&i.push([`pl`,r]),i}))}function qu(e,t){let n=Pc(e);if(!n)return;let{tl:r,tr:i,br:a,bl:o}=n;r===i&&i===a&&a===o?t.push([`rounded`,r]):(r>0&&t.push([`roundedTL`,r]),i>0&&t.push([`roundedTR`,i]),a>0&&t.push([`roundedBR`,a]),o>0&&t.push([`roundedBL`,o]))}function Ju(e,t){let n=Tc(e.fills);n&&t.push([`bg`,n]);let r=Ec(e.strokes);r&&(t.push([`stroke`,r.color]),r.weight!==1&&t.push([`strokeWidth`,r.weight]),r.dash&&t.push([`strokeDash`,r.dash])),qu(e,t),e.cornerSmoothing>0&&t.push([`cornerSmoothing`,e.cornerSmoothing]),e.opacity<1&&t.push([`opacity`,Math.round(e.opacity*100)/100]),e.rotation!==0&&t.push([`rotate`,Math.round(e.rotation*100)/100]),e.blendMode!==`PASS_THROUGH`&&e.blendMode!==`NORMAL`&&t.push([`blendMode`,e.blendMode.toLowerCase()]),e.clipsContent&&t.push([`overflow`,`hidden`]);for(let n of e.effects)if(n.visible)if(n.type===`DROP_SHADOW`||n.type===`INNER_SHADOW`){let e=Dc(n);e&&t.push([`shadow`,e])}else (n.type===`LAYER_BLUR`||n.type===`BACKGROUND_BLUR`)&&t.push([`blur`,n.radius])}function Yu(e,t,n){t.parentIsAutoLayout||t.parentIsGrid||(e.x!==0&&n.push([`x`,e.x]),e.y!==0&&n.push([`y`,e.y]))}function Xu(e,t,n,r){if(t.isGrid?Hu(e,r):t.isFlex?Uu(e,r):e.type===`TEXT`?Zu(e,n,r):(e.width>0&&r.push([`w`,e.width]),e.height>0&&r.push([`h`,e.height])),t.parentIsAutoLayout&&(e.layoutGrow>0&&r.push([`grow`,e.layoutGrow]),e.layoutAlignSelf===`STRETCH`)){let t=e.parentId?n.getNode(e.parentId):null;if(t&&(t.layoutMode===`HORIZONTAL`||t.layoutMode===`VERTICAL`)){let e=t.layoutMode===`HORIZONTAL`?`h`:`w`;r.some(([t])=>t===e)||r.push([e,`fill`])}}}function Zu(e,t,n){let r=e.textAutoResize,i=r===`NONE`||r===`TRUNCATE`,a=e.layoutAlignSelf===`STRETCH`&&(e.parentId?t.getNode(e.parentId):null)?.layoutMode===`VERTICAL`,o=e.layoutGrow>0&&(e.parentId?t.getNode(e.parentId):null)?.layoutMode===`HORIZONTAL`;r!==`WIDTH_AND_HEIGHT`&&!a&&!o&&e.width>0&&n.push([`w`,e.width]),i&&e.height>0&&n.push([`h`,e.height])}function Qu(e,t){let n=l(e);e.fontSize!==14&&t.push([`size`,e.fontSize]),e.fontFamily&&e.fontFamily!==`Inter`&&t.push([`font`,e.fontFamily]),e.fontWeight!==400&&(e.fontWeight===700?t.push([`weight`,`bold`]):e.fontWeight===500?t.push([`weight`,`medium`]):t.push([`weight`,e.fontWeight])),n===`RTL`&&t.push([`dir`,`rtl`]),e.textAlignHorizontal!==`LEFT`&&t.push([`textAlign`,e.textAlignHorizontal.toLowerCase()]),e.lineHeight!=null&&t.push([`lineHeight`,e.lineHeight]),e.letterSpacing!==0&&t.push([`letterSpacing`,e.letterSpacing]),e.textDecoration!==`NONE`&&t.push([`textDecoration`,e.textDecoration.toLowerCase()]),e.textCase!==`ORIGINAL`&&t.push([`textCase`,e.textCase.toLowerCase()]),e.maxLines!=null&&t.push([`maxLines`,e.maxLines]),e.textTruncation===`ENDING`&&e.maxLines==null&&t.push([`truncate`,!0]);let r=Tc(e.fills);if(r){let e=t.findIndex(([e])=>e===`bg`);e!==-1&&t.splice(e,1),t.push([`color`,r])}}function $u(e,t){e.type===`STAR`&&(e.pointCount!==5&&t.push([`points`,e.pointCount]),e.starInnerRadius!==.382&&t.push([`innerRadius`,e.starInnerRadius])),e.type===`POLYGON`&&e.pointCount!==3&&t.push([`points`,e.pointCount])}function ed(e,t){let n=[],r=jc(e,t);return e.name&&e.name!==e.type&&n.push([`name`,e.name]),Yu(e,r,n),Xu(e,r,t,n),r.parentIsGrid&&Wu(e,n),r.isFlex&&Gu(e,n),r.isAutoLayout&&Ku(e,n),Ju(e,n),e.type===`TEXT`&&Qu(e,n),$u(e,n),n}function td(e,t,n,r){let i=(r===`tailwind`?Vu:Bu)[e.type];if(!i)return``;let a=`  `.repeat(n),o;if(r===`tailwind`){let n=zu(e,t);o=`${e.name&&e.name!==e.type?` data-name="${e.name}"`:``}${n.length>0?` className="${n.join(` `)}"`:``}`.trim()}else o=ed(e,t).map(([e,t])=>Ac(e,t)).join(` `);let s=o?`<${i} ${o}`:`<${i}`,c=t.getChildren(e.id);if(e.type===`TEXT`){let t=e.text;if(!t)return`${a}${s} />`;let n=kc(t);return n.includes(`
`)?[`${a}${s}>`,...n.split(`
`).map(e=>`${a}  ${e}`),`${a}</${i}>`].join(`
`):`${a}${s}>${n}</${i}>`}if(c.length===0)return`${a}${s} />`;let l=c.filter(e=>e.visible).map(e=>td(e,t,n+1,r)).filter(Boolean);return l.length===0?`${a}${s} />`:[`${a}${s}>`,...l,`${a}</${i}>`].join(`
`)}function nd(e,t,n=`openpencil`){let r=t.getNode(e);return r?td(r,t,0,n):``}function rd(e,t,n=`openpencil`){return e.map(e=>nd(e,t,n)).filter(Boolean).join(`

`)}function id(e){function t(t){return t.map(t=>e.graph.getNode(t)?.name??t).join(`
`)}function n(t){let n=t.length>0?t:e.graph.getChildren(e.state.currentPageId).map(e=>e.id);return ot(e.graph,e.state.currentPageId,n)}function r(t){return t.length>0?rd(t,e.graph):null}return{copySelectionAsText:t,copySelectionAsSVG:n,copySelectionAsJSX:r}}function ad(e){async function t(t){let n=s.collectFontKeys(e.graph,t);if(n.length===0)return[];let r=await Promise.all(n.map(([t,n])=>e.loadFont(t,n))),i=n.filter((e,t)=>r[t]===null);return j(e.graph,e.state.currentPageId),i}return{loadFontsForNodes:t}}function od(e,t){let n=[];function r(t){let i=e.getNode(t);if(i){n.push({...i});for(let e of i.childIds)r(e)}}for(let e of t)r(e);return n}function sd(e,t){let n=new Map,r=t=>{let i=e.getNode(t);if(i){n.set(t,structuredClone(i));for(let e of i.childIds)r(e)}};return r(t),n}function cd(e,t,n,r){let{parentId:i,childIds:a,...o}=t;e.createNode(t.type,n,{...o,id:t.id});for(let n of a){let i=r.get(n);i&&cd(e,i,t.id,r)}}function ld(e,t,n){for(let r of t)e.graph.createNode(r.type,r.parentId??n,{...r,childIds:[]})}function ud(e,t){for(let n of[...t].reverse())e.graph.deleteNode(n)}function dd(e,t){for(let{id:n,parentId:r,index:i,subtree:a}of[...t].reverse()){let t=a.get(n);t&&cd(e.graph,t,r,a),i>=0&&e.graph.reorderChild(n,r,i)}}function fd(e){if(e.state.enteredContainerId)return e.state.enteredContainerId;let t=[...e.state.selectedIds];if(t.length!==1)return e.state.currentPageId;let n=e.graph.getNode(t[0]);return n?Se.has(n.type)&&n.type!==`CANVAS`?n.id:n.parentId??e.state.currentPageId:e.state.currentPageId}function pd(e,t,n,r){let i=new e.ck.Path;for(let a of n){let n=r(e,t,a);if(!n)return i.delete(),null;n.transform(me(e,a)),i.addPath(n),n.delete()}let a=i.getBounds();if(a[2]<=a[0]||a[3]<=a[1])return i.delete(),null;i.transform(e.ck.Matrix.translated(-a[0],-a[1]));let o=at(i.toSVGString());return i.delete(),{name:`Flatten`,x:a[0],y:a[1],width:a[2]-a[0],height:a[3]-a[1],fills:O(n[0].fills),vectorNetwork:o}}function md(e,t,n){return pd(e,t,n,(e,t,n)=>ye(e,n,t))}function hd(e,t,n){return pd(e,t,n,(e,t,n)=>le(e,n,t))}function W(e,t){return e[t.id]}function G(e,t){return e[t.graph]}function K(e,t){let n=W(e,t),r=G(e,t).getNode(n);if(!r)throw Error(`Node ${n} has been removed`);return r}function q(e,t,n){G(e,t).updateNode(W(e,t),n)}function gd(e,t){Object.defineProperties(e,{id:{get(){return W(this,t)}},type:{get(){return K(this,t).type}},name:{get(){return K(this,t).name},set(e){G(this,t).updateNode(W(this,t),{name:e})}},removed:{get(){return!G(this,t).getNode(W(this,t))}},x:{get(){return K(this,t).x},set(e){G(this,t).updateNode(W(this,t),{x:e})}},y:{get(){return K(this,t).y},set(e){G(this,t).updateNode(W(this,t),{y:e})}},width:{get(){return K(this,t).width}},height:{get(){return K(this,t).height}},rotation:{get(){return K(this,t).rotation},set(e){G(this,t).updateNode(W(this,t),{rotation:e})}},absoluteTransform:{get(){let e=G(this,t).getAbsolutePosition(W(this,t));return[[1,0,e.x],[0,1,e.y]]}},absoluteBoundingBox:{get(){return G(this,t).getAbsoluteBounds(W(this,t))}},absoluteRenderBounds:{get(){return G(this,t).getAbsoluteBounds(W(this,t))}}}),Object.assign(e,{resize(e,n){G(this,t).updateNode(W(this,t),{width:e,height:n})},resizeWithoutConstraints(e,t){this.resize(e,t)}})}function _d(e,t){return e[t.graph]}function vd(e,t){let n=K(e,t);if(!n.parentId)return`NONE`;let r=_d(e,t).getNode(n.parentId);if(!r)return`NONE`;let i=r.layoutMode;return i===`HORIZONTAL`||i===`VERTICAL`?i:`NONE`}function yd(e,t,n,r){let i=K(e,t),a=i.layoutMode===`NONE`?vd(e,t):i.layoutMode,o=(n===`HORIZONTAL`?a===`VERTICAL`:a===`HORIZONTAL`)?{counterAxisSizing:r}:{primaryAxisSizing:r};vd(e,t)===n&&(o.layoutGrow=r===`FILL`?1:0),q(e,t,o)}function bd(e,t){Object.defineProperties(e,{layoutMode:J(t,`layoutMode`),layoutDirection:{get(){let e=K(this,t);return Object.hasOwn(e,`layoutDirection`)?e.layoutDirection:`AUTO`},set(e){q(this,t,{layoutDirection:e})}},primaryAxisAlignItems:Cd(t,`primaryAxisAlign`),counterAxisAlignItems:Cd(t,`counterAxisAlign`),itemSpacing:J(t,`itemSpacing`),counterAxisSpacing:J(t,`counterAxisSpacing`),paddingTop:J(t,`paddingTop`),paddingRight:J(t,`paddingRight`),paddingBottom:J(t,`paddingBottom`),paddingLeft:J(t,`paddingLeft`),layoutWrap:Cd(t,`layoutWrap`),primaryAxisSizingMode:xd(t,`primaryAxisSizing`),counterAxisSizingMode:xd(t,`counterAxisSizing`),counterAxisAlignContent:Cd(t,`counterAxisAlignContent`),itemReverseZIndex:J(t,`itemReverseZIndex`),strokesIncludedInLayout:J(t,`strokesIncludedInLayout`),layoutPositioning:Cd(t,`layoutPositioning`),layoutGrow:J(t,`layoutGrow`),layoutAlign:{get(){let e=K(this,t);return e.layoutAlignSelf===`AUTO`?`INHERIT`:e.layoutAlignSelf},set(e){q(this,t,{layoutAlignSelf:e===`INHERIT`?`AUTO`:e})}},layoutSizingHorizontal:Sd(t,`HORIZONTAL`),layoutSizingVertical:Sd(t,`VERTICAL`),constraints:{get(){let e=K(this,t);return{horizontal:e.horizontalConstraint,vertical:e.verticalConstraint}},set(e){q(this,t,{horizontalConstraint:e.horizontal,verticalConstraint:e.vertical})}},minWidth:J(t,`minWidth`),maxWidth:J(t,`maxWidth`),minHeight:J(t,`minHeight`),maxHeight:J(t,`maxHeight`)})}function xd(e,t){return{get(){let n=K(this,e)[t];return n===`HUG`?`AUTO`:n},set(n){let r=n===`AUTO`?`HUG`:n;q(this,e,{[t]:r})}}}function Sd(e,t){return{get(){let n=K(this,e),r=n.layoutMode===`NONE`?vd(this,e):n.layoutMode;return r===`NONE`?`FIXED`:r===t?n.primaryAxisSizing:n.counterAxisSizing},set(n){yd(this,e,t,n)}}}function J(e,t){return{get(){return K(this,e)[t]},set(n){q(this,e,{[t]:n})}}}function Cd(e,t){return{get(){return K(this,e)[t]},set(n){q(this,e,{[t]:n})}}}function wd(e,t,n){Object.defineProperties(e,{fills:{get(){return Object.freeze(O(K(this,t).fills))},set(e){q(this,t,{fills:e.map(e=>({...e,color:He(e.color),gradientStops:e.gradientStops?.map(e=>({...e,color:He(e.color)}))}))})}},strokes:{get(){return Object.freeze(k(K(this,t).strokes))},set(e){q(this,t,{strokes:e.map(e=>({...e,color:He(e.color)}))})}},effects:{get(){return Object.freeze(Je(K(this,t).effects))},set(e){q(this,t,{effects:e.map(e=>({...e,color:He(e.color)}))})}},opacity:{get(){return K(this,t).opacity},set(e){q(this,t,{opacity:e})}},visible:{get(){return K(this,t).visible},set(e){q(this,t,{visible:e})}},locked:{get(){return K(this,t).locked},set(e){q(this,t,{locked:e})}},blendMode:{get(){return K(this,t).blendMode},set(e){q(this,t,{blendMode:e})}},clipsContent:{get(){return K(this,t).clipsContent},set(e){q(this,t,{clipsContent:e})}},cornerRadius:{get(){let e=K(this,t);return e.independentCorners?n:e.cornerRadius},set(e){e!==n&&q(this,t,{cornerRadius:e,topLeftRadius:e,topRightRadius:e,bottomRightRadius:e,bottomLeftRadius:e,independentCorners:!1})}},topLeftRadius:Td(t,`topLeftRadius`),topRightRadius:Td(t,`topRightRadius`),bottomLeftRadius:Td(t,`bottomLeftRadius`),bottomRightRadius:Td(t,`bottomRightRadius`),cornerSmoothing:{get(){return K(this,t).cornerSmoothing},set(e){q(this,t,{cornerSmoothing:e})}}})}function Td(e,t){return{get(){return K(this,e)[t]},set(n){q(this,e,{[t]:n,independentCorners:!0})}}}var Ed=`open-pencil`;function Dd(e){return e.pluginId===Ed}function Od(e,t){let n=`${t}/`;return e.pluginId!==t||!e.key.startsWith(n)?null:e.key.slice(n.length)}function kd(e){return Od(e,e.pluginId)!==null}function Ad(e,t,n){let r=Od(e,t);return r===null?Dd(e)?!1:e.pluginId===t&&e.key===n:r===n}function jd(e,t){let n=Od(e,t);return n===null?Dd(e)?null:e.pluginId===t?e.key:null:n}function Md(e,t){return e.pluginData.find(e=>Dd(e)&&e.key===t)?.value??``}function Nd(e,t,n,r){let i=t.pluginData.filter(e=>!(Dd(e)&&e.key===n));r!==``&&i.push({pluginId:Ed,key:n,value:r}),e.updateNode(t.id,{pluginData:i})}function Pd(e){return e.pluginData.filter(e=>Dd(e)&&!kd(e)).map(e=>e.key)}function Fd(e,t,n){return e.pluginData.find(e=>Ad(e,t,n))?.value??``}function Id(e,t,n,r,i){let a=t.pluginData.filter(e=>!Ad(e,n,r));i!==``&&a.push({pluginId:n,key:`${n}/${r}`,value:i}),e.updateNode(t.id,{pluginData:a})}function Ld(e,t){return e.pluginData.flatMap(e=>{let n=jd(e,t);return n===null?[]:[n]})}function Rd(e,t,n,r,i=0){let a=e.getNode(n);if(!a)return{id:n,removed:!0};let o={id:a.id,type:a.type,name:a.name,x:a.x,y:a.y,width:a.width,height:a.height};a.fills.length>0&&(o.fills=a.fills),a.strokes.length>0&&(o.strokes=a.strokes),a.effects.length>0&&(o.effects=a.effects),a.opacity!==1&&(o.opacity=a.opacity),a.cornerRadius>0&&(o.cornerRadius=a.cornerRadius),a.visible||(o.visible=!1),a.text&&(o.characters=a.text),a.type===`TEXT`&&(o.fontFamily=a.fontFamily,o.fontSize=a.fontSize,o.fontWeight=a.fontWeight,o.italic=a.italic,o.textAlignHorizontal=a.textAlignHorizontal,o.textAlignVertical=a.textAlignVertical,o.textAutoResize=a.textAutoResize,o.textDirection=a.textDirection,a.lineHeight!=null&&(o.lineHeight=a.lineHeight),a.letterSpacing!==0&&(o.letterSpacing=a.letterSpacing),a.textCase!==`ORIGINAL`&&(o.textCase=a.textCase),a.textDecoration!==`NONE`&&(o.textDecoration=a.textDecoration),a.maxLines!=null&&(o.maxLines=a.maxLines)),a.layoutMode!==`NONE`&&(o.layoutMode=a.layoutMode,o.layoutDirection=a.layoutDirection,o.itemSpacing=a.itemSpacing);let s=e.getChildren(n);return s.length>0&&(r!==void 0&&i>=r?o.childCount=s.length:o.children=s.map(e=>t.wrapNode(e.id).toJSON(r,i+1))),o}function zd(e,t,n){if(t.strokes.length===0)return;let r=k(t.strokes);r[0].weight=n,e.updateNode(t.id,{strokes:r})}function Bd(e,t,n){if(t.strokes.length===0)return;let r=k(t.strokes);r[0].align=n,e.updateNode(t.id,{strokes:r})}function Vd(e,t,n,r){e.updateNode(t,{[n]:r,independentStrokeWeights:!0})}function Hd(e,t){let n=u[e]??`Regular`;return t?`${n} Italic`:n}var Ud=Object.fromEntries([...Object.entries(u).map(([e,t])=>[t.toLowerCase(),Number(e)]),[`ultra light`,200],[``,400],[`demi bold`,600],[`ultra bold`,800],[`heavy`,900]]);function Wd(e){let t=e.toLowerCase(),n=t.includes(`italic`);return{weight:Ud[t.replace(/italic/i,``).trim()]??400,italic:n}}function Gd(e){return{family:e.fontFamily,style:Hd(e.fontWeight,e.italic)}}function Kd(e,t,n){let{weight:r,italic:i}=Wd(n.style);e.updateNode(t,{fontFamily:n.family,fontWeight:r,italic:i})}function qd(e,t,n,r){let i=t.text.slice(0,n)+r+t.text.slice(n);e.updateNode(t.id,{text:i})}function Jd(e,t,n,r){let i=t.text.slice(0,n)+t.text.slice(r);e.updateNode(t.id,{text:i})}function Yd(e,t,n,r){let i=[],a=n=>{for(let o of e.getChildren(n)){let e=t.wrapNode(o.id);(!r||r(e))&&i.push(e),a(o.id)}};return a(n),i}function Xd(e,t,n,r){let i=n=>{for(let a of e.getChildren(n)){let e=t.wrapNode(a.id);if(r(e))return e;let n=i(a.id);if(n)return n}return null};return i(n)}function Zd(e,t,n,r){for(let i of e.getChildren(n)){let e=t.wrapNode(i.id);if(r(e))return e}return null}function Qd(e,t,n,r){return e.getChildren(n).map(e=>t.wrapNode(e.id)).filter(e=>!r||r(e))}function $d(e,t,n,r){let i=r.types?new Set(r.types):null;return Yd(e,t,n,e=>!i||i.has(e.type))}var ef=Symbol(`mixed`),Y=Symbol(`id`),X=Symbol(`graph`),Z=Symbol(`api`),tf=class{[Y];[X];[Z];constructor(e,t,n){this[Y]=e,this[X]=t,this[Z]=n}_raw(){let e=this[X].getNode(this[Y]);if(!e)throw Error(`Node ${this[Y]} has been removed`);return e}get strokeWeight(){let e=this._raw().strokes;return e.length>0?e[0].weight:0}set strokeWeight(e){zd(this[X],this._raw(),e)}get strokeAlign(){let e=this._raw().strokes;return e.length>0?e[0].align:`INSIDE`}set strokeAlign(e){Bd(this[X],this._raw(),e)}get dashPattern(){return Object.freeze([...this._raw().dashPattern])}set dashPattern(e){this[X].updateNode(this[Y],{dashPattern:[...e]})}get strokeCap(){return this._raw().strokeCap}set strokeCap(e){this[X].updateNode(this[Y],{strokeCap:e})}get strokeJoin(){return this._raw().strokeJoin}set strokeJoin(e){this[X].updateNode(this[Y],{strokeJoin:e})}get strokeMiterLimit(){return this._raw().strokeMiterLimit}set strokeMiterLimit(e){this[X].updateNode(this[Y],{strokeMiterLimit:e})}get strokeTopWeight(){return this._raw().borderTopWeight}set strokeTopWeight(e){Vd(this[X],this[Y],`borderTopWeight`,e)}get strokeBottomWeight(){return this._raw().borderBottomWeight}set strokeBottomWeight(e){Vd(this[X],this[Y],`borderBottomWeight`,e)}get strokeLeftWeight(){return this._raw().borderLeftWeight}set strokeLeftWeight(e){Vd(this[X],this[Y],`borderLeftWeight`,e)}get strokeRightWeight(){return this._raw().borderRightWeight}set strokeRightWeight(e){Vd(this[X],this[Y],`borderRightWeight`,e)}get characters(){return this._raw().text}set characters(e){this[X].updateNode(this[Y],{text:e})}get fontSize(){return this._raw().fontSize}set fontSize(e){this[X].updateNode(this[Y],{fontSize:e})}get fontName(){return Gd(this._raw())}set fontName(e){Kd(this[X],this[Y],e)}get fontWeight(){return this._raw().fontWeight}set fontWeight(e){this[X].updateNode(this[Y],{fontWeight:e})}get textAlignHorizontal(){return this._raw().textAlignHorizontal}set textAlignHorizontal(e){this[X].updateNode(this[Y],{textAlignHorizontal:e})}get textDirection(){return this._raw().textDirection}set textDirection(e){this[X].updateNode(this[Y],{textDirection:e})}get textAlignVertical(){return this._raw().textAlignVertical}set textAlignVertical(e){this[X].updateNode(this[Y],{textAlignVertical:e})}get textAutoResize(){return this._raw().textAutoResize}set textAutoResize(e){this[X].updateNode(this[Y],{textAutoResize:e})}get letterSpacing(){return this._raw().letterSpacing}set letterSpacing(e){this[X].updateNode(this[Y],{letterSpacing:e})}get lineHeight(){return this._raw().lineHeight}set lineHeight(e){this[X].updateNode(this[Y],{lineHeight:e})}get textCase(){return this._raw().textCase}set textCase(e){this[X].updateNode(this[Y],{textCase:e})}get textDecoration(){return this._raw().textDecoration}set textDecoration(e){this[X].updateNode(this[Y],{textDecoration:e})}get maxLines(){return this._raw().maxLines}set maxLines(e){this[X].updateNode(this[Y],{maxLines:e})}get textTruncation(){return this._raw().textTruncation}set textTruncation(e){this[X].updateNode(this[Y],{textTruncation:e})}get autoRename(){return this._raw().autoRename}set autoRename(e){this[X].updateNode(this[Y],{autoRename:e})}insertCharacters(e,t){qd(this[X],this._raw(),e,t)}deleteCharacters(e,t){Jd(this[X],this._raw(),e,t)}get isMask(){return this._raw().isMask}set isMask(e){this[X].updateNode(this[Y],{isMask:e})}get maskType(){return this._raw().maskType}set maskType(e){this[X].updateNode(this[Y],{maskType:e})}get expanded(){return this._raw().expanded}set expanded(e){this[X].updateNode(this[Y],{expanded:e})}get mainComponent(){let e=this._raw();if(!e.componentId)return null;let t=this[X].getNode(e.componentId);return t?this[Z].wrapNode(t.id):null}createInstance(){let e=this._raw();if(e.type!==`COMPONENT`)throw Error(`createInstance() can only be called on components`);let t=this[Z].currentPageId,n=this[X].createInstance(e.id,t);if(!n)throw Error(`Failed to create instance`);return this[Z].wrapNode(n.id)}get parent(){let e=this._raw();return e.parentId?this[Z].wrapNode(e.parentId):null}get children(){return this[X].getChildren(this[Y]).map(e=>this[Z].wrapNode(e.id))}appendChild(e){this[X].reparentNode(e[Y],this[Y])}insertChild(e,t){this[X].reparentNode(t[Y],this[Y]),this[X].reorderChild(t[Y],this[Y],e)}clone(){let e=this._raw().parentId??this[Z].currentPageId,t=this[X].cloneTree(this[Y],e);if(!t)throw Error(`Failed to clone node ${this[Y]}`);return this[Z].wrapNode(t.id)}remove(){this[X].deleteNode(this[Y])}findAll(e){return Yd(this[X],this[Z],this[Y],e)}findOne(e){return Xd(this[X],this[Z],this[Y],e)}findChild(e){return Zd(this[X],this[Z],this[Y],e)}findChildren(e){return Qd(this[X],this[Z],this[Y],e)}findAllWithCriteria(e){return $d(this[X],this[Z],this[Y],e)}getPluginData(e){return Md(this._raw(),e)}setPluginData(e,t){Nd(this[X],this._raw(),e,t)}getPluginDataKeys(){return Pd(this._raw())}getSharedPluginData(e,t){return Fd(this._raw(),e,t)}setSharedPluginData(e,t,n){Id(this[X],this._raw(),e,t,n)}getSharedPluginDataKeys(e){return Ld(this._raw(),e)}getFillOkHCL(e=0){return Ye(this._raw(),e)}setFillOkHCL(e,t=0){this[X].updateNode(this[Y],We(this._raw(),t,e))}getStrokeOkHCL(e=0){return Ue(this._raw(),e)}setStrokeOkHCL(e,t=0){this[X].updateNode(this[Y],Ge(this._raw(),t,e))}toJSON(e,t=0){return Rd(this[X],this[Z],this[Y],e,t)}toString(){let e=this._raw();return`[${e.type} "${e.name}" ${e.id}]`}[Symbol.for(`nodejs.util.inspect.custom`)](){return this.toString()}};gd(tf.prototype,{id:Y,graph:X,api:Z}),wd(tf.prototype,{id:Y,graph:X,api:Z},ef),bd(tf.prototype,{id:Y,graph:X,api:Z});var nf=()=>void 0;function rf(e){let t=2166136261,n=2166136261,r=2166136261,i=2166136261,a=2166136261;for(let o=0;o<e.length;o++){let s=e[o];switch(o%5){case 0:t^=s,t=Math.imul(t,16777619)>>>0;break;case 1:n^=s,n=Math.imul(n,16777619)>>>0;break;case 2:r^=s,r=Math.imul(r,16777619)>>>0;break;case 3:i^=s,i=Math.imul(i,16777619)>>>0;break;case 4:a^=s,a=Math.imul(a,16777619)>>>0;break}}return[t,n,r,i,a].map(e=>e.toString(16).padStart(8,`0`)).join(``)}var af=class{graph;_currentPageId;_selection=[];_nodeCache=new Map;_pageProxies=new WeakSet;_renderer=null;mixed=ef;constructor(e){this.graph=e,this._currentPageId=e.getPages()[0]?.id??e.rootId}setRenderer(e){this._renderer=e}get currentPageId(){return this._currentPageId}wrapNode(e){let t=this._nodeCache.get(e);return t||(t=new tf(e,this.graph,this),this._nodeCache.set(e,t)),t}_ensurePageProxy(e){return this._pageProxies.has(e)||(Object.defineProperty(e,`selection`,{get:()=>this._selection,set:e=>{this._selection=e},enumerable:!0,configurable:!0}),this._pageProxies.add(e)),e}get root(){return this.wrapNode(this.graph.rootId)}get currentPage(){return this._ensurePageProxy(this.wrapNode(this._currentPageId))}set currentPage(e){this._currentPageId=e[Y]}getNodeById(e){return this.graph.getNode(e)?this.wrapNode(e):null}_createNode(e){let t=this.graph.createNode(e,this._currentPageId);return this.wrapNode(t.id)}createFrame(){return this._createNode(`FRAME`)}createRectangle(){return this._createNode(`RECTANGLE`)}createEllipse(){return this._createNode(`ELLIPSE`)}createText(){return this._createNode(`TEXT`)}createLine(){return this._createNode(`LINE`)}createPolygon(){return this._createNode(`POLYGON`)}createStar(){return this._createNode(`STAR`)}createVector(){return this._createNode(`VECTOR`)}createComponent(){return this._createNode(`COMPONENT`)}createSection(){return this._createNode(`SECTION`)}createPage(){let e=this.graph.addPage(`Page`);return this.wrapNode(e.id)}_nodeId(e){return e[Y]}group(e,t,n){let r=this._nodeId(t),i=this.graph.createNode(`GROUP`,r);for(let t of e)this.graph.reparentNode(this._nodeId(t),i.id);return n!=null&&this.graph.reorderChild(i.id,r,n),this.wrapNode(i.id)}ungroup(e){let t=this._nodeId(e),n=this.graph.getNode(t);if(!n||n.childIds.length===0)return[];let r=n.parentId??this._currentPageId,i=Array.from(n.childIds);for(let e of i)this.graph.reparentNode(e,r);return this.graph.deleteNode(t),i.map(e=>this.wrapNode(e))}createComponentFromNode(e){let t=this.graph.getNode(e[Y]);if(!t)throw Error(`Node not found`);let n=t.parentId??this._currentPageId,r=this.graph.createNode(`COMPONENT`,n);this.graph.updateNode(r.id,{name:t.name,width:t.width,height:t.height,x:t.x,y:t.y,fills:O(t.fills),strokes:k(t.strokes),effects:Je(t.effects),cornerRadius:t.cornerRadius,topLeftRadius:t.topLeftRadius,topRightRadius:t.topRightRadius,bottomRightRadius:t.bottomRightRadius,bottomLeftRadius:t.bottomLeftRadius,independentCorners:t.independentCorners,opacity:t.opacity,layoutMode:t.layoutMode,primaryAxisAlign:t.primaryAxisAlign,counterAxisAlign:t.counterAxisAlign,itemSpacing:t.itemSpacing,paddingTop:t.paddingTop,paddingRight:t.paddingRight,paddingBottom:t.paddingBottom,paddingLeft:t.paddingLeft,pluginData:structuredClone(t.pluginData),pluginRelaunchData:structuredClone(t.pluginRelaunchData)});for(let e of t.childIds)this.graph.cloneTree(e,r.id);return this.graph.deleteNode(e[Y]),this.wrapNode(r.id)}getVariableById(e){return this.graph.variables.get(e)??null}getLocalVariables(e){let t=[...this.graph.variables.values()];return e?t.filter(t=>t.type===e):t}getLocalVariableCollections(){return[...this.graph.variableCollections.values()]}getVariableCollectionById(e){return this.graph.variableCollections.get(e)??null}createVariable(e,t,n,r){return this.graph.createVariable(e,t,n,r)}setVariableValue(e,t,n){let r=this.graph.variables.get(e);if(!r)throw Error(`Variable "${e}" not found`);r.valuesByMode[t]=n}deleteVariable(e){this.graph.removeVariable(e)}createVariableCollection(e){return this.graph.createCollection(e)}deleteVariableCollection(e){this.graph.removeCollection(e)}bindVariable(e,t,n){this.graph.bindVariable(e,t,n)}unbindVariable(e,t){this.graph.unbindVariable(e,t)}_booleanOperation(e,t,n,r){if(t.length<2)throw Error(`Need at least 2 nodes for boolean operation`);let i=this._nodeId(n),a=this.graph.getNode(this._nodeId(t[0]));if(!a)throw Error(`Node not found`);let o=this.graph.createNode(`BOOLEAN_OPERATION`,i,{name:`Boolean ${e.toLowerCase()}`,x:a.x,y:a.y,width:a.width,height:a.height,booleanOperation:e});for(let e of t)this.graph.reparentNode(this._nodeId(e),o.id);return r!=null&&this.graph.reorderChild(o.id,i,r),this.wrapNode(o.id)}_nodesById(e){return e.map(e=>{let t=this.getNodeById(e);if(!t)throw Error(`Node ${e} not found`);return t})}booleanOperation(e,t){let n=this.graph.getNode(t[0]),r=this.wrapNode(n?.parentId??this._currentPageId);return this._booleanOperation(e,this._nodesById(t),r)}union(e,t,n){return this._booleanOperation(`UNION`,e,t,n)}subtract(e,t,n){return this._booleanOperation(`SUBTRACT`,e,t,n)}intersect(e,t,n){return this._booleanOperation(`INTERSECT`,e,t,n)}exclude(e,t,n){return this._booleanOperation(`EXCLUDE`,e,t,n)}flatten(e,t,n){if(e.length===0)throw Error(`Need at least 1 node to flatten`);let r=this._nodeId(t??this.currentPage),i=[];for(let t of e){let e=this.graph.getNode(this._nodeId(t));if(!e)throw Error(`Node not found`);i.push(e)}let a=this._renderer?this._flattenWithRenderer(i,r):this._flattenPlaceholder(i,r);n!=null&&this.graph.reorderChild(a.id,r,n);for(let t of e)this.graph.deleteNode(this._nodeId(t));return this.wrapNode(a.id)}_flattenPlaceholder(e,t){let n=e[0];return this.graph.createNode(`VECTOR`,t,{name:`Flatten`,x:n.x,y:n.y,width:n.width,height:n.height,fills:O(n.fills)})}_flattenWithRenderer(e,t){let n=this._renderer;if(!n)return this._flattenPlaceholder(e,t);if(e.some(e=>!ce(e,this.graph)))throw Error(`Cannot flatten unsupported node type`);let r=md(n,this.graph,e);if(!r)throw Error(`Cannot flatten empty node path`);return this.graph.createNode(`VECTOR`,t,r)}flattenNode(e){let t=this.graph.getNode(e[0]),n=this.wrapNode(t?.parentId??this._currentPageId);return this.flatten(this._nodesById(e),n)}_viewport={x:0,y:0,zoom:1};get viewport(){return{center:{x:this._viewport.x,y:this._viewport.y},zoom:this._viewport.zoom,scrollAndZoomIntoView:e=>{let t=h(e.map(e=>e.absoluteBoundingBox));if(t.width===0&&t.height===0&&e.length===0)return;let n=t.width+160,r=t.height+160,i=we?window.innerWidth:1280,a=we?window.innerHeight:720,o=Math.min(i/n,a/r,1);this._viewport={x:t.x+t.width/2,y:t.y+t.height/2,zoom:o}}}}set viewport(e){this._viewport={x:e.center.x,y:e.center.y,zoom:e.zoom}}createImage(e){let t=rf(e);return this.graph.images.set(t,e),{hash:t}}async loadFontAsync(e){}async listAvailableFontsAsync(){return[]}base64Encode(e){return e.toBase64()}base64Decode(e){return Uint8Array.fromBase64(e)}notify(e){return typeof console<`u`&&console.warn(`[figma.notify] ${e}`),{cancel:nf}}commitUndo(){}triggerUndo(){}exportImage},of=4096,sf=20;function cf(e){function t(t){let n=rf(t);return e.graph.images.set(n,t),n}function n(t){let n=e.getCk();if(!n)return null;let r=n.MakeImageFromEncoded(t);if(!r)return null;let i=r.width(),a=r.height();if(r.delete(),i>of||a>of){let e=Math.min(of/i,of/a);i=Math.round(i*e),a=Math.round(a*e)}return{w:i,h:a}}function r(n,r,i,a,o,s=`Image`){let c=t(n),l=s.replace(/\.[^.]+$/,``),u=fd(e),d={type:`IMAGE`,imageHash:c,imageScaleMode:`FILL`,color:ke,opacity:1,visible:!0},f=e.graph.createNode(`RECTANGLE`,u,{name:l,x:r,y:i,width:a,height:o,fills:[d]}),p=f.id,m={...f};return e.undo.push({label:`Place image`,forward:()=>{e.graph.images.set(c,n),e.graph.createNode(m.type,u,m)},inverse:()=>{e.graph.deleteNode(p),e.graph.images.delete(c);let t=new Set(e.state.selectedIds);t.delete(p),e.setSelectedIds(t)}}),p}async function i(t,i,a){let o=[];for(let e of t){let t=new Uint8Array(await e.arrayBuffer()),r=n(t);r&&o.push({bytes:t,name:e.name,...r})}if(!o.length)return;let s=0;for(let e of o)s+=e.w;s+=sf*(o.length-1);let c=Math.max(...o.map(e=>e.h)),l=i-s/2,u=a-c/2,d=[];for(let e of o){let t=r(e.bytes,l,u,e.w,e.h,e.name);t&&d.push(t),l+=e.w+sf}d.length&&(e.setSelectedIds(new Set(d)),e.requestRender())}return{storeImage:t,placeImageFiles:i}}function lf(e){let t=[...e.state.selectedIds].map(t=>e.graph.getNode(t)).filter(e=>e!=null&&!e.locked),n=new Set(t.map(e=>e.id));return t.filter(e=>!e.parentId||!n.has(e.parentId))}function uf(e,t,n){let r=n[0]?.parentId;if(!r)return;let i=n[0]?.index??0;for(let n=0;n<t.length;n++)e.graph.reorderChild(t[n],r,i+n)}function df(e,t,n,r){let i=od(e.graph,t),a=e.state.currentPageId;e.undo.push({label:`Paste to replace`,forward:()=>{for(let{id:t}of n)e.graph.deleteNode(t);ld(e,i,a),uf(e,t,n),j(e.graph,a),e.setSelectedIds(new Set(t))},inverse:()=>{ud(e,t),dd(e,n),j(e.graph,a),e.setSelectedIds(r)}})}function ff(e,t,n,r,i){if(n.length===0||r.length===0)return!1;let a=r.map(t=>{let n=t.parentId??e.state.currentPageId,r=e.graph.getNode(n);return{id:t.id,parentId:n,index:r?.childIds.indexOf(t.id)??-1,subtree:sd(e.graph,t.id)}}),o=pe(r,t=>e.graph.getAbsolutePosition(t));t(n,o.x+o.width/2,o.y+o.height/2),uf(e,n,a);for(let{id:t}of a)e.graph.deleteNode(t);return j(e.graph,e.state.currentPageId),e.setSelectedIds(new Set(n)),df(e,n,a,i),!0}function pf(e){return e!=null}function mf(e){function t(t,n,r){let i=t.map(t=>e.graph.getNode(t)).filter(pf),a=h(i);if(a.width===0&&a.height===0&&i.length===0)return;let o=n-(a.x+a.width/2),s=r-(a.y+a.height/2);for(let n of t){let t=e.graph.getNode(n);t&&e.graph.updateNode(n,{x:t.x+o,y:t.y+s})}}return{centerNodesAt:t}}function hf(e){function t(t){let n=new Set(e.state.selectedIds),r=new Set(t.map(e=>e.id)),i=t.filter(e=>!e.parentId||!r.has(e.parentId)),a=[],o=new Map;for(let t of i){let n=t.parentId??e.state.currentPageId,r=e.graph.cloneTree(t.id,n,{name:t.name+` copy`,x:t.x+20,y:t.y+20});if(!r)continue;a.push(r.id);let i=sd(e.graph,r.id);for(let[e,t]of i)o.set(e,t)}a.length>0&&(e.setSelectedIds(new Set(a)),e.undo.push({label:`Duplicate`,forward:()=>{for(let t of a){let n=o.get(t);if(!n)continue;let r=n.parentId??e.state.currentPageId;cd(e.graph,n,r,o)}e.setSelectedIds(new Set(a))},inverse:()=>{for(let t of a.slice().reverse())e.graph.deleteNode(t);e.setSelectedIds(n)}}))}function n(t,n){let r=od(e.graph,t),i=e.state.currentPageId;e.undo.push({label:`Paste`,forward:()=>{ld(e,r,i),j(e.graph,i),e.setSelectedIds(new Set(t))},inverse:()=>{ud(e,t),j(e.graph,i),e.setSelectedIds(n)}})}async function r(t,r,o={}){let s=Xs(t);if(s){i(s.nodes,s.images,r,o);return}let c=await nc(t);if(c){let t=new Set(e.state.selectedIds),i=o.replaceSelection?lf(e):[],s=i[0]?.parentId??fd(e),u=lc(c.nodes,e.graph,s,0,0,c.blobs);if(u.length>0){if(i.length>0){ff(e,d.centerNodesAt,u,i,t),l.loadFontsForNodes(u),a(u),e.requestRender();return}let{width:o,height:s}=e.getViewportSize(),c=r?.x??(-e.state.panX+o/2)/e.state.zoom,f=r?.y??(-e.state.panY+s/2)/e.state.zoom;d.centerNodesAt(u,c,f),j(e.graph,e.state.currentPageId),e.setSelectedIds(new Set(u)),n(u,t),l.loadFontsForNodes(u),a(u),e.requestRender()}}}function i(t,r,i,a={}){let o=new Set(e.state.selectedIds),s=a.replaceSelection?lf(e):[];for(let[t,n]of r)e.graph.images.set(t,n);let c=[],l=(t,n)=>{let{id:r,childIds:i,children:a=[],parentId:o,...s}=t,c=e.graph.createNode(t.type,n,{...structuredClone(s),x:t.x+20,y:t.y+20,childIds:[]});for(let e of a)l(e,c.id);return c.id},u=s[0]?.parentId??fd(e);for(let e of t)c.push(l(e,u));if(c.length!==0){if(s.length>0){ff(e,d.centerNodesAt,c,s,o);return}i&&d.centerNodesAt(c,i.x,i.y),j(e.graph,e.state.currentPageId),e.setSelectedIds(new Set(c)),n(c,o)}}function a(t){return od(e.graph,t).some(t=>t.fills.some(t=>t.type===`IMAGE`&&t.imageHash&&!e.graph.images.has(t.imageHash)))}function o(){let t=[];for(let n of e.state.selectedIds){let r=e.graph.getNode(n);if(!r||r.locked)continue;let i=r.parentId??e.state.currentPageId,a=e.graph.getNode(i)?.childIds.indexOf(n)??-1;t.push({id:n,parentId:i,index:a,subtree:sd(e.graph,n)})}if(t.length===0)return;let n=new Set(e.state.selectedIds);for(let{id:n}of t)e.graph.deleteNode(n);e.undo.push({label:`Delete`,forward:()=>{for(let{id:n}of t)e.graph.deleteNode(n);e.setSelectedIds(new Set)},inverse:()=>{dd(e,t),e.setSelectedIds(n)}}),e.setSelectedIds(new Set)}let s=Cc(e),c=id(e),l=ad(e),u=cf(e),d=mf(e);return{collectSubtrees:od,...d,...l,duplicateSelected:t,...s,pasteFromHTML:r,warnMissingImages:a,deleteSelected:o,...u,...c}}function gf(e,t){return Ve(Xe(e),{documentColorSpace:t}).color}function _f(e,t,n){return n===`assign`?null:{fills:e.fills.map(e=>{let n=qe(e);if(e.type===`SOLID`){let r=gf(e.color,t);return n.color=r,n.opacity=r.a,n}return e.gradientStops&&(n.gradientStops=e.gradientStops.map(e=>({...e,color:gf(e.color,t)}))),n}),strokes:e.strokes.map(e=>{let n=Be(e),r=gf(e.color,t);return n.color=r,n.opacity=r.a,n}),effects:Je(e.effects).map(e=>({...e,color:gf(e.color,t)})),styleRuns:Ze(e.styleRuns).map(e=>({...e,style:{...e.style,fills:e.style.fills?.map(e=>{let n=qe(e);if(e.type===`SOLID`){let r=gf(e.color,t);n.color=r,n.opacity=r.a}return n})}}))}}function vf(e){function t(t,n=`assign`){if(e.graph.documentColorSpace!==t){if(n===`convert`)for(let r of e.graph.getAllNodes()){let i=_f(r,t,n);i&&e.graph.updateNode(r.id,i)}e.graph.documentColorSpace=t,e.requestRender()}}return{setDocumentColorSpace:t}}function yf(e,t){let n=null;function r(){let r=n;if(!r)return;n=null;let i=e(),a=new Set;for(let e of r){let t=i.getNode(e);for(;t;){if(t.type===`COMPONENT`){a.add(t.id);break}t=t.parentId?i.getNode(t.parentId):void 0}}for(let e of a)i.syncInstances(e);a.size>0&&t()}function i(e){n||(n=new Set,queueMicrotask(r)),n.add(e)}return{scheduleComponentSync:i}}function bf(e){function t(t,n){if(!t?.componentId)return;let r=e.graph.getMainComponent(t.id);if(!r)return;let i=r;for(;i&&i.type!==`CANVAS`;)i=i.parentId?e.graph.getNode(i.parentId):void 0;i&&i.id!==e.state.currentPageId&&n(i.id),e.setSelectedIds(new Set([r.id]));let a=e.graph.getAbsolutePosition(r.id),{width:o,height:s}=e.getViewportSize();e.state.panX=o/2-(a.x+r.width/2)*e.state.zoom,e.state.panY=s/2-(a.y+r.height/2)*e.state.zoom,e.requestRender()}return{goToMainComponent:t}}function xf(e){let{childIds:t,parentId:n,type:r,...i}=e;return i}function Sf(e){function t(t,n,r,i=e.state.currentPageId){let a=e.graph.getNode(t);if(a?.type!==`COMPONENT`)return null;let o=new Set(e.state.selectedIds),s=e.graph.createInstance(t,i,{x:n??a.x+a.width+40,y:r??a.y});if(!s)return null;let c=s.id,l=xf(s);return e.setSelectedIds(new Set([c])),e.undo.push({label:`Create instance`,forward:()=>{e.graph.createInstance(t,i,{...l}),e.setSelectedIds(new Set([c]))},inverse:()=>{e.graph.deleteNode(c),e.setSelectedIds(new Set(o))}}),c}function n(t){if(t?.type!==`INSTANCE`)return;let n=t.componentId;e.graph.detachInstance(t.id),e.setSelectedIds(new Set([t.id])),e.undo.push({label:`Detach instance`,forward:()=>{e.graph.detachInstance(t.id),e.requestRender()},inverse:()=>{e.graph.updateNode(t.id,{type:`INSTANCE`,componentId:n,overrides:{}})}})}return{createInstanceFromComponent:t,detachInstance:n}}function Cf(e,t){return e.y-t.y||e.x-t.x||e.name.localeCompare(t.name)}function wf(e){function t(t){let n=e.graph.getNode(t);return n?.type===`COMPONENT_SET`?n.componentPropertyDefinitions:[]}function n(t,n,r=`VARIANT`,i=``){let a=e.graph.getNode(t);if(a?.type!==`COMPONENT_SET`)return;let o=`prop:${rt(8)}`,s={id:o,name:n,type:r,defaultValue:i,variantOptions:r===`VARIANT`?[i]:void 0},c=[...a.componentPropertyDefinitions];return e.graph.updateNode(t,{componentPropertyDefinitions:[...c,s]}),e.undo.push({label:`Add property`,forward:()=>{let n=e.graph.getNode(t);n&&e.graph.updateNode(t,{componentPropertyDefinitions:[...n.componentPropertyDefinitions,s]}),e.requestRender()},inverse:()=>{e.graph.updateNode(t,{componentPropertyDefinitions:c}),e.requestRender()}}),e.requestRender(),o}function r(t,n){let r=e.graph.getNode(t);if(r?.type!==`COMPONENT_SET`)return;let i=[...r.componentPropertyDefinitions],a=i.find(e=>e.id===n);if(a){e.graph.updateNode(t,{componentPropertyDefinitions:i.filter(e=>e.id!==n)});for(let t of r.childIds){let n=e.graph.getNode(t);if(!n)continue;let r=ae(n.componentPropertyValues,[a.name]);e.graph.updateNode(t,{componentPropertyValues:r})}e.undo.push({label:`Remove property`,forward:()=>{let r=e.graph.getNode(t);if(r){e.graph.updateNode(t,{componentPropertyDefinitions:r.componentPropertyDefinitions.filter(e=>e.id!==n)});for(let t of r.childIds){let n=e.graph.getNode(t);if(!n)continue;let r=ae(n.componentPropertyValues,[a.name]);e.graph.updateNode(t,{componentPropertyValues:r})}}e.requestRender()},inverse:()=>{e.graph.updateNode(t,{componentPropertyDefinitions:i}),e.requestRender()}}),e.requestRender()}}function i(t,n,r){let i=e.graph.getNode(t);if(i?.type!==`COMPONENT_SET`)return;let a=i.componentPropertyDefinitions.find(e=>e.id===n);if(!a)return;let o=a.name,s=i.componentPropertyDefinitions.map(e=>e.id===n?{...e,name:r}:e);e.graph.updateNode(t,{componentPropertyDefinitions:s});for(let t of i.childIds){let n=e.graph.getNode(t);if(!n)continue;let i={...n.componentPropertyValues};if(o in i){let n=ae(i,[o]);n[r]=i[o],e.graph.updateNode(t,{componentPropertyValues:n})}}let c=r=>{let i=e.graph.getNode(t);i&&(e.graph.updateNode(t,{componentPropertyDefinitions:i.componentPropertyDefinitions.map(e=>e.id===n?{...e,name:r}:e)}),e.requestRender())};e.undo.push({label:`Rename property`,forward:()=>c(r),inverse:()=>c(o)}),e.requestRender()}function a(t){let n=e.graph.getNode(t);if(n?.type!==`COMPONENT_SET`)return new Map;let r=new Map;for(let t of n.childIds){let n=e.graph.getNode(t);if(n?.type===`COMPONENT`)for(let[e,t]of Object.entries(n.componentPropertyValues)){let n=r.get(e)??new Set;n.add(t),r.set(e,n)}}return r}function o(t){let n=e.graph.getNode(t);return n?.type===`COMPONENT_SET`?n.childIds.map(t=>e.graph.getNode(t)).filter(e=>e?.type===`COMPONENT`):[]}function s(e,t){for(let n of o(e).sort(Cf)){let e=n.componentPropertyValues;if(Object.entries(t).every(([t,n])=>e[t]===n))return n}}function c(t){let n=e.graph.getNode(t);if(n?.type!==`COMPONENT_SET`)return;let r=Object.fromEntries(n.componentPropertyDefinitions.filter(e=>e.type===`VARIANT`&&e.defaultValue).map(e=>[e.name,e.defaultValue]));if(Object.keys(r).length>0){let e=s(t,r);if(e)return e}return o(t).sort(Cf)[0]}function l(t){let n=e.graph.getNode(t);if(n?.type!==`COMPONENT_SET`)return[];let r=n.componentPropertyDefinitions.filter(e=>e.type===`VARIANT`).map(e=>e.name),i=new Map;for(let e of o(t)){let t=Object.fromEntries(r.map(t=>[t,e.componentPropertyValues[t]??``])),n=r.map(e=>`${e}=${t[e]}`).join(`\0`),a=i.get(n)??{values:t,componentIds:[]};a.componentIds.push(e.id),i.set(n,a)}return[...i.values()].filter(e=>e.componentIds.length>1)}function u(t,n,r){let i=e.graph.getNode(t);if(i?.type!==`INSTANCE`||!i.componentId)return;let a=e.graph.getNode(i.componentId);if(!a)return;let o=a.parentId;if(!o||e.graph.getNode(o)?.type!==`COMPONENT_SET`)return;let c={...a.componentPropertyValues};c[n]=r;let l=s(o,c);if(!l||l.id===i.componentId)return;let u=i.componentId;e.graph.swapInstanceComponent(t,l.id),e.undo.push({label:`Switch variant`,forward:()=>{e.graph.swapInstanceComponent(t,l.id),e.requestRender()},inverse:()=>{e.graph.swapInstanceComponent(t,u),e.requestRender()}}),e.requestRender()}return{getComponentSetPropertyDefs:t,addPropertyDefinition:n,removePropertyDefinition:r,renamePropertyDefinition:i,parseVariantName:Jn,buildVariantName:Yn,collectVariantOptions:a,findVariantByValues:s,getDefaultVariantForComponentSet:c,getComponentSetVariantConflicts:l,switchInstanceVariant:u}}function Tf(e){function t(t,n){if(t.length===0)return;let r=new Set(e.state.selectedIds);if(t.length===1){let n=t[0],i=n.type;if(n.type===`COMPONENT`)return;if(n.type===`FRAME`||n.type===`GROUP`){e.graph.updateNode(n.id,{type:`COMPONENT`}),e.setSelectedIds(new Set([n.id])),e.undo.push({label:`Create component`,forward:()=>{e.graph.updateNode(n.id,{type:`COMPONENT`}),e.setSelectedIds(new Set([n.id]))},inverse:()=>{e.graph.updateNode(n.id,{type:i}),e.setSelectedIds(r)}});return}}n(`COMPONENT`,t)}function n(t,n){if(t.length<2||!t.every(e=>e.type===`COMPONENT`))return;let r=n(`COMPONENT_SET`,t);if(!r)return;let i=t.map(e=>(e.name.match(/\//g)??[]).length);if(i.every(e=>e===i[0])&&i[0]>0){let n=i[0],a=[],o=new Map;for(let e=0;e<n;e++){let t=`prop:${rt(8)}`,n=e===0?`Variant`:`Property ${e+1}`;a.push({id:t,name:n,type:`VARIANT`,defaultValue:``}),o.set(n,new Set)}for(let n of t){let t=n.name.split(`/`).slice(1),r={};for(let e=0;e<a.length;e++){let n=t[e]?.trim()??``;r[a[e].name]=n,o.get(a[e].name)?.add(n)}e.graph.updateNode(n.id,{componentPropertyValues:r,name:Object.values(r).join(`, `)})}for(let e of a)e.variantOptions=[...o.get(e.name)??[]],!e.defaultValue&&e.variantOptions[0]&&(e.defaultValue=e.variantOptions[0]);e.graph.updateNode(r,{componentPropertyDefinitions:a})}}let r=bf(e),i=Sf(e),a=wf(e);return{createComponentFromSelection:t,createComponentSetFromComponents:n,...i,...r,...a}}function Ef(e){let t=null;function n(t,n){for(let r of e.getRenderers())`vectorNetwork`in n&&r.invalidateVectorPath(t),r.invalidateNodePicture(t);e.emitEditorEvent(`node:updated`,t,n),e.scheduleComponentSync(t),e.requestRender()}function r(t){e.scheduleComponentSync(t),e.requestRender()}function i(){t?.(),t=e.getGraph().onNodeEvents({updated:n,created:t=>{e.emitEditorEvent(`node:created`,t),r(t.id)},deleted:t=>{e.emitEditorEvent(`node:deleted`,t),r(t)},reparented:(t,n,i)=>{e.emitEditorEvent(`node:reparented`,t,n,i),r(t)},reordered:(t,n,i)=>{e.emitEditorEvent(`node:reordered`,t,n,i),r(t)}})}return{subscribeToGraph:i}}function Df(e){return{getNode:t=>e().getNode(t),getImage:t=>e().images.get(t),getChildren:t=>e().getChildren(t),getPages:t=>e().getPages(t)}}function Of(e){function t(t){let n=e(),r=n.getNode(t);if(!r)return;j(n,t);let i=r.parentId?n.getNode(r.parentId):void 0;for(;i;)i.layoutMode!==`NONE`&&A(n,i.id),i=i.parentId?n.getNode(i.parentId):void 0}return{runLayoutForNode:t}}function kf(e){function t(t,n){let r=e.graph.getNode(t);if(!r)return;let i=Af(r),a=Mf(e,r,t,n);e.graph.updateNode(t,a),n!==`NONE`&&A(e.graph,t),e.runLayoutForNode(t);let o=e.graph.getNode(t);if(!o)return;let s=jf(o,Object.keys(i));e.undo.push({label:n===`NONE`?`Remove auto layout`:`Add auto layout`,forward:()=>{e.graph.updateNode(t,s),n!==`NONE`&&A(e.graph,t),e.runLayoutForNode(t)},inverse:()=>{e.graph.updateNode(t,i),e.runLayoutForNode(t)}})}return{setLayoutMode:t}}function Af(e){return{layoutMode:e.layoutMode,itemSpacing:e.itemSpacing,paddingTop:e.paddingTop,paddingRight:e.paddingRight,paddingBottom:e.paddingBottom,paddingLeft:e.paddingLeft,primaryAxisSizing:e.primaryAxisSizing,counterAxisSizing:e.counterAxisSizing,primaryAxisAlign:e.primaryAxisAlign,counterAxisAlign:e.counterAxisAlign,gridTemplateColumns:e.gridTemplateColumns,gridTemplateRows:e.gridTemplateRows,gridColumnGap:e.gridColumnGap,gridRowGap:e.gridRowGap,width:e.width,height:e.height}}function jf(e,t){return lt(e,t)}function Mf(e,t,n,r){let i={layoutMode:r};return r===`GRID`&&t.layoutMode!==`GRID`?Nf(e,t,n,i):r!==`NONE`&&t.layoutMode===`NONE`&&Object.assign(i,Pf()),i}function Nf(e,t,n,r){let i=e.graph.getChildren(n),a=Math.max(2,Math.ceil(Math.sqrt(i.length))),o=Math.max(1,Math.ceil(i.length/a));if(r.gridTemplateColumns=Array.from({length:a},()=>({sizing:`FR`,value:1})),r.gridTemplateRows=Array.from({length:o},()=>({sizing:`FR`,value:1})),r.gridColumnGap=0,r.gridRowGap=0,r.primaryAxisSizing=`FIXED`,r.counterAxisSizing=`FIXED`,t.primaryAxisSizing===`HUG`||t.counterAxisSizing===`HUG`){let e=Math.max(...i.map(e=>e.width),100),t=Math.max(...i.map(e=>e.height),100);r.width=e*a,r.height=t*o}r.paddingTop=0,r.paddingRight=0,r.paddingBottom=0,r.paddingLeft=0}function Pf(){return{itemSpacing:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,primaryAxisSizing:`HUG`,counterAxisSizing:`HUG`,primaryAxisAlign:`MIN`,counterAxisAlign:`MIN`}}var Ff=300;function If(e){let t=null,n=null;function r(){if(!t)return;let r=t;t=null,n=null,pc(e,`Nudge`,r,fc(e,r.keys()))}function i(i,a){let o=[...e.state.selectedIds];if(o.length===0)return;let s=[];for(let t of o){let n=e.graph.getNode(t);n&&!n.locked&&s.push(t)}if(s.length!==0){if(!t){t=new Map;for(let n of s){let r=e.graph.getNode(n);r&&t.set(n,{x:r.x,y:r.y})}}for(let t of s){let n=e.graph.getNode(t);n&&(e.graph.updateNode(t,{x:n.x+i,y:n.y+a}),e.runLayoutForNode(t))}n&&clearTimeout(n),n=setTimeout(r,Ff),e.requestRender()}}function a(){n&&(clearTimeout(n),r())}return{nudgeSelected:i,flushNudge:a}}function Lf(e){function t(t,n,r){let i=e.graph.getNode(t);if(!i)return;let a=i.boundVariables[n];e.graph.bindVariable(t,n,r),e.undo.push({label:`Bind variable`,forward:()=>{e.graph.bindVariable(t,n,r),e.requestRender()},inverse:()=>{a?e.graph.bindVariable(t,n,a):e.graph.unbindVariable(t,n),e.requestRender()}}),e.requestRender()}function n(t,n){let r=e.graph.getNode(t);if(!r)return;let i=r.boundVariables[n];i&&(e.graph.unbindVariable(t,n),e.undo.push({label:`Unbind variable`,forward:()=>{e.graph.unbindVariable(t,n),e.requestRender()},inverse:()=>{e.graph.bindVariable(t,n,i),e.requestRender()}}),e.requestRender())}return{bindVariable:t,unbindVariable:n}}function Rf(e){let t=kf(e),n=If(e),r=Lf(e);function i(t,n){e.graph.updateNode(t,n),e.runLayoutForNode(t)}function a(t,n,r=`Update`){let i=e.graph.getNode(t);if(!i)return;let a=lt(i,Object.keys(n));e.graph.updateNode(t,n),e.runLayoutForNode(t),e.undo.push({label:r,forward:()=>{e.graph.updateNode(t,n),e.runLayoutForNode(t)},inverse:()=>{e.graph.updateNode(t,a),e.runLayoutForNode(t)}}),e.requestRender()}return{updateNode:i,updateNodeWithUndo:a,...t,...r,...n}}var zf=new WeakMap;function Bf(e,t){zf.set(e,t)}function Vf(e){return zf.get(e)}function Hf(e,t,n){let r=[...n].filter(e=>e&&!t.populatedRootIds.has(e));if(r.length===0)return!1;e.preserveSourceMetadataDuring(()=>{Do(e,t.changeMap,t.guidToNodeId,t.blobs,r)});for(let e of r)t.populatedRootIds.add(e);return!0}function Uf(e,t){let n=Vf(e);return n?Hf(e,n,t):!1}function Wf(e){let t=Vf(e);return t?Hf(e,t,e.getPages(!0).map(e=>e.id)):!1}function Gf(e){let t=new Map;function n(){t.set(e.state.currentPageId,{panX:e.state.panX,panY:e.state.panY,zoom:e.state.zoom,pageColor:{...e.state.pageColor}})}function r(n){let r=t.get(n);if(r){e.state.panX=r.panX,e.state.panY=r.panY,e.state.zoom=r.zoom,e.state.pageColor={...r.pageColor};return}e.state.panX=0,e.state.panY=0,e.state.zoom=1,e.state.pageColor={...Me}}function i(e){t.delete(e)}function a(){t.clear()}return{saveCurrentPageViewport:n,restorePageViewport:r,deletePageViewport:i,clearPageViewports:a}}function Kf(e){let t=Gf(e);async function n(n){if(e.graph.getNode(n)?.type!==`CANVAS`)return;t.saveCurrentPageViewport();let r=e.state.currentPageId;e.state.currentPageId=n,e.state.enteredContainerId=null,e.setSelectedIds(new Set),r!==n&&e.emitEditorEvent(`page:changed`,n,r),t.restorePageViewport(n);let i=Uf(e.graph,[n]),a=s.collectFontKeys(e.graph,e.graph.getChildren(n).map(e=>e.id));a.length>0&&await Promise.all(a.map(([t,n])=>e.loadFont(t,n))),(e.getRenderer()||i)&&j(e.graph,n),e.requestRender()}function r(t){let r=e.graph.getPages(),i=t??`Page ${r.length+1}`,a=e.graph.addPage(i);return n(a.id),a.id}function i(r){let i=e.graph.getPages();if(i.length<=1)return;let a=i.findIndex(e=>e.id===r);if(e.graph.deleteNode(r),t.deletePageViewport(r),e.state.currentPageId===r){let t=Math.min(a,i.length-2);n(e.graph.getPages()[t].id)}}function a(t,n){e.graph.updateNode(t,{name:n})}function o(t){e.state.pageColor=t,e.requestRender()}return{switchPage:n,addPage:r,deletePage:i,renamePage:a,setPageColor:o,clearPageViewports:t.clearPageViewports}}function qf(e){function t(){e.state.enteredContainerId&&!e.graph.getNode(e.state.enteredContainerId)&&(e.state.enteredContainerId=null)}function n(t){e.state.enteredContainerId=t}function r(){let t=e.state.enteredContainerId;if(!t)return;let n=e.graph.getNode(t)?.parentId;n&&n!==e.state.currentPageId?e.state.enteredContainerId=n:e.state.enteredContainerId=null,e.setSelectedIds(new Set(t?[t]:[]))}return{validateEnteredContainer:t,enterContainer:n,exitContainer:r}}function Jf(e,t,n){function r(t,n,r=!1){if(!e.getRenderer())return null;let i=e.state.enteredContainerId;if(i)if(!e.graph.getNode(i))e.state.enteredContainerId=null;else return r?e.graph.hitTestDeep(t,n,i):e.graph.hitTest(t,n,i);return r?e.graph.hitTestDeep(t,n,e.state.currentPageId):e.graph.hitTest(t,n,e.state.currentPageId)}function i(i,a){let o=r(i,a);o?e.state.selectedIds.has(o.id)||t([o.id]):n()}return{hitTestAtPoint:r,selectAtPoint:i}}function Yf(e){function t(t){e.state.marquee=t,e.requestRepaint()}function n(t){e.state.snapGuides=t,e.requestRepaint()}function r(t){e.state.rotationPreview=t,e.requestRepaint()}function i(t){e.state.hoveredNodeId!==t&&(e.state.hoveredNodeId=t,e.requestRepaint())}function a(t){e.state.dropTargetId!==t&&(e.state.dropTargetId=t,e.requestRepaint())}function o(t){e.state.layoutInsertIndicator!==t&&(e.state.layoutInsertIndicator=t,e.requestRepaint())}function s(t){let n=e.state.autoLayoutHover;n?.nodeId===t?.nodeId&&n?.kind===t?.kind&&n?.index===t?.index&&n?.side===t?.side||(e.state.autoLayoutHover=t,e.requestRepaint())}return{setMarquee:t,setSnapGuides:n,setRotationPreview:r,setHoveredNode:i,setDropTarget:a,setLayoutInsertIndicator:o,setAutoLayoutHover:s}}function Xf(e){function t(){let t=[];for(let n of e.state.selectedIds){let r=e.graph.getNode(n);r&&t.push({...r})}return t}function n(){if(e.state.selectedIds.size!==1)return;let t=e.state.selectedIds.values().next().value,n=e.graph.getNode(t);return n?{...n}:void 0}function r(){return e.graph.flattenTree(e.state.currentPageId)}return{getSelectedNodes:t,getSelectedNode:n,getLayerTree:r}}function Zf(e){function t(t,n=!1){if(n){let n=new Set(e.state.selectedIds);for(let e of t)n.has(e)?n.delete(e):n.add(e);e.setSelectedIds(n)}else e.setSelectedIds(new Set(t))}function n(){e.setSelectedIds(new Set)}function r(){let t=e.graph.getChildren(e.state.currentPageId);e.setSelectedIds(new Set(t.map(e=>e.id)))}let i=qf(e),a=Jf(e,t,n),o=Yf(e),s=Xf(e);return{select:t,clearSelection:n,selectAll:r,...o,...i,...s,...a}}var Qf={color:Ne,weight:2,opacity:1,visible:!0,align:`CENTER`};function $f(e,t){let n={x:-t.x,y:-t.y},r=Math.hypot(n.x,n.y);if(r<=1e-6)return e;let i={x:n.x/r,y:n.y/r},a=Math.max(0,e.x*i.x+e.y*i.y);return{x:i.x*a,y:i.y*a}}function ep(e,t,n,r){if(t){if(!n)return;n.start===0?n.tangentStart={x:e.x,y:e.y}:n.end===0&&(n.tangentEnd={x:e.x,y:e.y});return}r&&(r.tangentEnd={x:e.x,y:e.y})}function tp(e,t){function n(t,n){if(!e.state.penState){e.state.penState={vertices:[{x:t,y:n}],segments:[],dragTangent:null,oppositeDragTangent:null,pendingClose:!1,closingToFirst:!1},e.requestRender();return}let r=e.state.penState,i=r.vertices.length-1;r.vertices.push({x:t,y:n});let a=r.vertices.length-1;r.segments.push({start:i,end:a,tangentStart:r.dragTangent??{x:0,y:0},tangentEnd:{x:0,y:0}}),r.dragTangent=null,r.oppositeDragTangent=null,r.pendingClose=!1,e.requestRender()}function r(t,n,r){if(!e.state.penState)return;let i=e.state.penState,a={x:t,y:n},o=!!i.pendingClose&&i.vertices.length>2,s=o?0:i.vertices.length-1,c=i.segments.length>0?i.segments[i.segments.length-1]:void 0,l=i.segments.length>0?i.segments[0]:void 0,u=r?.oppositeTangent??i.oppositeDragTangent??(c?c.tangentEnd:{x:-t,y:-n});if(r?.constrainToOpposite&&(a=$f(a,u)),i.dragTangent=a,r?.keepOpposite??o)i.oppositeDragTangent={x:u.x,y:u.y},ep(u,o,l,c),r?.constrainToOpposite?i.vertices[s].handleMirroring=`ANGLE`:i.vertices[s].handleMirroring=`NONE`;else{let e={x:-a.x,y:-a.y};i.oppositeDragTangent=e,ep(e,o,l,c),i.vertices[s].handleMirroring=`ANGLE_AND_LENGTH`}e.requestRender()}function i(t){e.state.penState&&(e.state.penState.closingToFirst=t,e.requestRender())}function a(t){e.state.penState&&(e.state.penState.pendingClose=t,e.requestRepaint())}function o(t,n){if(!e.state.penState)return;let r=e.state.penState,i=r.pendingClose&&r.vertices.length>2?0:r.vertices.length-1;r.vertices[i].x=t,r.vertices[i].y=n,e.requestRender()}function s(n){let r=e.state.penState;if(!r||r.vertices.length<2){e.state.penState=null,e.state.penCursorX=null,e.state.penCursorY=null;return}if(n&&r.pendingClose&&r.vertices.length>2){let e=r.vertices.length-1;r.segments.push({start:e,end:0,tangentStart:{x:0,y:0},tangentEnd:r.dragTangent??{x:0,y:0}})}let i=n?[{windingRule:`NONZERO`,loops:[r.segments.map((e,t)=>t)]}]:[],a={vertices:r.vertices.map(e=>({...e})),segments:r.segments.map(e=>({...e,tangentStart:{...e.tangentStart},tangentEnd:{...e.tangentEnd}})),regions:i},o=y(a),s={vertices:a.vertices.map(e=>({...e,x:e.x-o.x,y:e.y-o.y})),segments:a.segments,regions:a.regions},c=r.resumedFills?r.resumedFills.map(e=>({...e})):[],l=r.resumedStrokes?r.resumedStrokes.map(e=>({...e})):[{...Qf}],u=t(`VECTOR`,o.x,o.y,o.width,o.height);e.graph.updateNode(u,{vectorNetwork:s,name:`Vector`,fills:c,strokes:l}),e.setSelectedIds(new Set([u])),e.state.penState=null,e.state.penCursorX=null,e.state.penCursorY=null,e.setActiveTool(`SELECT`),e.requestRender()}function c(){e.state.penState=null,e.state.penCursorX=null,e.state.penCursorY=null,e.setActiveTool(`SELECT`),e.requestRender()}return{penAddVertex:n,penSetDragTangent:r,penSetClosingToFirst:i,penSetPendingClose:a,penSetKnotPosition:o,penCommit:s,penCancel:c}}function np(e,t){let n=e.graph.getNode(t);if(n?.type!==`SECTION`)return;let r=n.parentId??e.state.currentPageId,i=e.graph.getChildren(r),a=n.x,o=n.y,s=a+n.width,c=o+n.height,l=[];for(let e of i){if(e.id===t)continue;let n=e.x,r=e.y,i=n+e.width,u=r+e.height;n>=a&&r>=o&&i<=s&&u<=c&&l.push(e.id)}if(l.length===0)return;let u=[];for(let n of l){let i=e.graph.getNode(n);if(!i)continue;let s=i.x-a,c=i.y-o;u.push({id:n,oldParent:r,oldX:i.x,oldY:i.y,newX:s,newY:c}),e.graph.reparentNode(n,t),e.graph.updateNode(n,{x:s,y:c})}e.undo.push({label:`Adopt into section`,forward:()=>{for(let n of u)e.graph.reparentNode(n.id,t),e.graph.updateNode(n.id,{x:n.newX,y:n.newY})},inverse:()=>{for(let t of u)e.graph.reparentNode(t.id,t.oldParent),e.graph.updateNode(t.id,{x:t.oldX,y:t.oldY})}})}var rp={type:`SOLID`,color:Ne,opacity:1,visible:!0},ip={FRAME:Pe,SECTION:De,RECTANGLE:Te,ELLIPSE:Te,POLYGON:Te,STAR:Te,LINE:rp,TEXT:rp};function ap(e){function t(t,n,r,i,a,o){let s=ip[t]??ip.RECTANGLE,c=o??e.state.currentPageId,l={x:n,y:r,width:i,height:a,fills:[{...s}]};t===`SECTION`&&(l.strokes=[{...Oe}],l.cornerRadius=5),t===`POLYGON`&&(l.pointCount=3),t===`STAR`&&(l.pointCount=5,l.starInnerRadius=.38);let u=e.graph.createNode(t,c,l),d=u.id,f={...u};return e.undo.push({label:`Create ${t.toLowerCase()}`,forward:()=>{e.graph.createNode(f.type,c,f)},inverse:()=>{e.graph.deleteNode(d);let t=new Set(e.state.selectedIds);t.delete(d),e.setSelectedIds(t)}}),d}let n=tp(e,t);function r(t){e.setActiveTool(t)}return{createShape:t,...n,adoptNodesIntoSection:t=>np(e,t),setTool:r}}function op(e){return{activeTool:`SELECT`,currentPageId:e,selectedIds:new Set,marquee:null,snapGuides:[],rotationPreview:null,dropTargetId:null,layoutInsertIndicator:null,hoveredNodeId:null,editingTextId:null,penState:null,penCursorX:null,penCursorY:null,remoteCursors:[],autoLayoutHover:null,documentName:`Untitled`,panX:0,pageColor:{...Me},panY:0,zoom:1,renderVersion:0,sceneVersion:0,loading:!1,enteredContainerId:null}}function sp(e,t,n){if(n.length===0)return;let r=n[0].parentId??e.state.currentPageId;if(!n.every(t=>(t.parentId??e.state.currentPageId)===r))return;let i=new Set(e.state.selectedIds),a=n.map(e=>({id:e.id,x:e.x,y:e.y,parentId:r})),o=pe(n,t=>e.graph.getAbsolutePosition(t)),s=t(r)?{x:0,y:0}:e.graph.getAbsolutePosition(r),c=n.length<=1||o.height>o.width?`VERTICAL`:`HORIZONTAL`,l=e.graph.createNode(`FRAME`,r,{name:`Frame`,x:o.x-s.x,y:o.y-s.y,width:o.width,height:o.height,layoutMode:c,primaryAxisSizing:`HUG`,counterAxisSizing:`HUG`,primaryAxisAlign:`MIN`,counterAxisAlign:`MIN`,fills:[]}),u=l.id,d=n.map(t=>({id:t.id,pos:e.graph.getAbsolutePosition(t.id)})).sort((e,t)=>e.pos.y-t.pos.y||e.pos.x-t.pos.x).map(e=>e.id);for(let t of d)e.graph.reparentNode(t,u);A(e.graph,u),e.runLayoutForNode(u),e.setSelectedIds(new Set([u])),e.undo.push({label:`Wrap in auto layout`,forward:()=>{let t=e.graph.createNode(`FRAME`,r,{...l,id:u});for(let n of a)e.graph.reparentNode(n.id,t.id);A(e.graph,t.id),e.runLayoutForNode(t.id),e.setSelectedIds(new Set([t.id]))},inverse:()=>{for(let t of a)e.graph.reparentNode(t.id,t.parentId),e.graph.updateNode(t.id,{x:t.x,y:t.y});e.graph.deleteNode(u),e.setSelectedIds(i)}})}function cp(e){let t=new Set(e.map(e=>e.id));return e.filter(e=>!e.parentId||!t.has(e.parentId))}function lp(e,t){let n=cp(t);if(n.length===0||n.some(e=>e.locked))return null;let r=n[0].parentId??e.state.currentPageId;if(!n.every(t=>(t.parentId??e.state.currentPageId)===r))return null;let i=e.graph.getNode(r);return i?{topLevel:n,parentId:r,parent:i}:null}function up(e,t,n,r){let i=lp(e,n);if(!i||i.topLevel.length<2)return null;let{topLevel:a,parentId:o,parent:s}=i;if(a.some(t=>!ce(t,e.graph)))return null;let c=new Set(e.state.selectedIds),l=a.map(e=>e.id),u=l.map(t=>({id:t,subtree:sd(e.graph,t)})),d=a.map(e=>({id:e.id,x:e.x,y:e.y})),f=Math.min(...l.map(e=>s.childIds.indexOf(e))),p=t(o)?{x:0,y:0}:e.graph.getAbsolutePosition(o),m=pe(a,t=>e.graph.getAbsolutePosition(t)),h=e.graph.createNode(`BOOLEAN_OPERATION`,o,{name:dp(r),x:m.x-p.x,y:m.y-p.y,width:m.width,height:m.height,fills:O(a[0].fills),strokes:k(a[0].strokes),booleanOperation:r}),g=h.id;e.graph.insertChildAt(g,o,f);for(let t of l)e.graph.reparentNode(t,g);return e.setSelectedIds(new Set([g])),e.undo.push({label:dp(r),forward:()=>{let t=e.graph.createNode(`BOOLEAN_OPERATION`,o,{...h,childIds:[],id:g});e.graph.insertChildAt(t.id,o,f);for(let n of l)e.graph.reparentNode(n,t.id);e.setSelectedIds(new Set([t.id]))},inverse:()=>{for(let{id:t,subtree:n}of u){let r=n.get(t);r&&(e.graph.getNode(t)?e.graph.reparentNode(t,o):cd(e.graph,r,o,n))}for(let t=0;t<l.length;t++){let n=l[t],r=d[t];e.graph.insertChildAt(n,o,f+t),e.graph.updateNode(n,{x:r.x,y:r.y})}e.graph.deleteNode(g),e.setSelectedIds(c)}}),g}function dp(e){switch(e){case`UNION`:return`Union`;case`SUBTRACT`:return`Subtract`;case`INTERSECT`:return`Intersect`;case`EXCLUDE`:return`Exclude`;default:return e}}function fp(e,t,n,r,i){if(r.length===0)return null;let a=r[0].parentId??e.state.currentPageId;if(!r.every(t=>(t.parentId??e.state.currentPageId)===a))return null;let o=e.graph.getNode(a);if(!o)return null;let s=new Set(e.state.selectedIds),c=r.map(e=>e.id),l=r.map(e=>({id:e.id,x:e.x,y:e.y})),{x:u,y:d,width:f,height:p}=pe(r,t=>e.graph.getAbsolutePosition(t)),m=u+f,h=d+p,g=t(a)?{x:0,y:0}:e.graph.getAbsolutePosition(a),_=Math.min(...c.map(e=>o.childIds.indexOf(e))),v=n===`COMPONENT_SET`?40:0,y={COMPONENT_SET:r[0].name.split(`/`)[0]?.trim()||`Component Set`,COMPONENT:`Component`,GROUP:`Group`,FRAME:`Frame`},b=e.graph.createNode(n,a,{name:y[n]??n,x:u-g.x-v,y:d-g.y-v,width:m-u+v*2,height:h-d+v*2,fills:n===`COMPONENT_SET`?[{type:`SOLID`,color:{r:.96,g:.96,b:.96,a:1},opacity:1,visible:!0}]:[],...i}),x=b.id;e.graph.insertChildAt(x,a,_);for(let t of r)e.graph.reparentNode(t.id,x);return e.setSelectedIds(new Set([x])),e.undo.push({label:`Create ${n.toLowerCase().replace(`_`,` `)}`,forward:()=>{let t=e.graph.createNode(n,a,{...b,...i,id:x});e.graph.insertChildAt(t.id,a,_);for(let n of l)e.graph.reparentNode(n.id,t.id);e.setSelectedIds(new Set([t.id]))},inverse:()=>{for(let t of l)e.graph.reparentNode(t.id,a),e.graph.updateNode(t.id,{x:t.x,y:t.y});e.graph.deleteNode(x),e.setSelectedIds(s)}}),x}function pp(e,t,n={}){let r=n.label??`Flatten`,i=n.canFlattenNode??(t=>ce(t,e.graph)),a=n.vectorPropsFactory??md,o=e.getRenderer();if(!o)return null;let s=lp(e,t);if(!s)return null;let{topLevel:c,parentId:l,parent:u}=s;if(c.some(e=>!i(e)))return null;let d=c.map(e=>e.id),f=d.map(t=>({id:t,subtree:sd(e.graph,t)})),p=new Set(e.state.selectedIds),m=Math.min(...d.map(e=>u.childIds.indexOf(e))),h=a(o,e.graph,c);if(!h)return null;let g=e.graph.createNode(`VECTOR`,l,{...h,name:r,strokes:[]}),_=structuredClone(g);e.graph.insertChildAt(g.id,l,m);for(let t of d)e.graph.deleteNode(t);return e.setSelectedIds(new Set([g.id])),e.undo.push({label:r,forward:()=>{let t=e.graph.createNode(`VECTOR`,l,_);e.graph.insertChildAt(t.id,l,m);for(let t of d)e.graph.deleteNode(t);e.setSelectedIds(new Set([t.id]))},inverse:()=>{e.graph.deleteNode(g.id);for(let t=0;t<f.length;t++){let{id:n,subtree:r}=f[t],i=r.get(n);i&&(cd(e.graph,i,l,r),e.graph.insertChildAt(n,l,m+t))}e.setSelectedIds(p)}}),g.id}function mp(e,t){return pp(e,t,{label:`Outline stroke`,canFlattenNode:t=>ce(t,e.graph)&&ge(t,e.graph),vectorPropsFactory:hd})}function hp(e,t){if(t?.type!==`GROUP`)return;let n=t,r=n.parentId??e.state.currentPageId,i=e.graph.getNode(r);if(!i)return;let a=i.childIds.indexOf(n.id),o=[...n.childIds],s=new Set(e.state.selectedIds),c=o.map(t=>{let n=e.graph.getNode(t);return n?{id:t,x:n.x,y:n.y}:{id:t,x:0,y:0}}),l=n.id,u={...n,childIds:[...n.childIds]};for(let t=0;t<o.length;t++)e.graph.reparentNode(o[t],r),e.graph.insertChildAt(o[t],r,a+t);e.graph.deleteNode(n.id),e.setSelectedIds(new Set(o)),e.undo.push({label:`Ungroup`,forward:()=>{for(let t=0;t<o.length;t++)e.graph.reparentNode(o[t],r),e.graph.insertChildAt(o[t],r,a+t);e.graph.deleteNode(l),e.setSelectedIds(new Set(o))},inverse:()=>{let t=e.graph.createNode(`GROUP`,r,{...u,childIds:[],id:l});e.graph.insertChildAt(t.id,r,a);for(let n of c)e.graph.reparentNode(n.id,t.id),e.graph.updateNode(n.id,{x:n.x,y:n.y});e.setSelectedIds(s)}})}function gp(e){function t(t,n,r){let i=e.graph.getNode(t);if(i){if(i.parentId!==n){let r=e.graph.getAbsolutePosition(t),i=e.graph.getAbsolutePosition(n);e.graph.updateNode(t,{x:r.x-i.x,y:r.y-i.y})}e.graph.reorderChild(t,n,r),A(e.graph,n),e.runLayoutForNode(n)}}function n(n,r,i){let a=e.graph.getNode(r);if(!a||a.layoutMode===`NONE`)return;let o=e.graph.getNode(n);if(!o)return;let s=o.parentId??e.state.currentPageId,c=o.x,l=o.y,u=e.graph.getNode(s)?.childIds.indexOf(n)??-1;t(n,r,i),e.undo.push({label:`Reorder`,forward:()=>{t(n,r,i)},inverse:()=>{e.graph.reorderChild(n,s,u>=0?u:0),e.graph.updateNode(n,{x:c,y:l}),A(e.graph,s),e.runLayoutForNode(s),s!==r&&(A(e.graph,r),e.runLayoutForNode(r))}})}function r(t,n,r){let i=e.graph.getNode(t);if(!i)return;let a=i.parentId??e.state.currentPageId,o=e.graph.getNode(a)?.childIds.indexOf(t)??0,s=i.x,c=i.y;e.graph.reorderChild(t,n,r),e.runLayoutForNode(n),a!==n&&e.runLayoutForNode(a),e.undo.push({label:`Reorder`,forward:()=>{e.graph.reorderChild(t,n,r),e.runLayoutForNode(n),a!==n&&e.runLayoutForNode(a)},inverse:()=>{e.graph.reorderChild(t,a,o),e.graph.updateNode(t,{x:s,y:c}),e.runLayoutForNode(a),a!==n&&e.runLayoutForNode(n)}})}function i(t,n){for(let r of e.state.selectedIds){let i=e.graph.getNode(r);if(!i?.parentId)continue;let a=e.graph.getNode(i.parentId);a&&(t(a.childIds.indexOf(r),a.childIds.length)||e.graph.insertChildAt(r,i.parentId,n(a.childIds.length)))}e.requestRender()}function a(){i((e,t)=>e===t-1,e=>e)}function o(){i(e=>e===0,()=>0)}return{reorderInAutoLayout:n,reorderChildWithUndo:r,bringToFront:a,sendToBack:o}}function _p(e){function t(t){let n=e.graph.getNode(t);n&&e.graph.updateNode(t,{visible:!n.visible})}function n(t){let n=e.graph.getNode(t);n&&e.graph.updateNode(t,{locked:!n.locked})}function r(){for(let n of e.state.selectedIds)t(n)}function i(){for(let t of e.state.selectedIds)n(t)}return{toggleNodeVisibility:t,toggleNodeLock:n,toggleVisibility:r,toggleLock:i}}function vp(e){let t=gp(e),n=_p(e);function r(e){return e.charAt(0)+e.slice(1).toLowerCase()}function i(t){return!t||t===e.graph.rootId||t===e.state.currentPageId}function a(t,n){let r=e.graph.getNode(n);for(let i of t)e.graph.getNode(i)?.type===`SECTION`&&r&&r.type!==`CANVAS`&&r.type!==`SECTION`||e.graph.reparentNode(i,n)}function o(t,n,r){return fp(e,i,t,n,r)}function s(t){sp(e,i,t)}function c(e){return o(`GROUP`,e)}function l(e){return o(`FRAME`,e,{fills:[structuredClone(Pe)]})}function u(t,n){return up(e,i,t,n)}function d(t){hp(e,t)}function f(t){return pp(e,t)}function p(t){return t.length===0||t.some(e=>e.type!==`TEXT`)?null:pp(e,t,{label:`Outline text`})}function m(t){return mp(e,t)}function h(t){if(e.graph.getNode(t)?.type!==`CANVAS`)return;let n=[...e.state.selectedIds];for(let r of n)e.graph.reparentNode(r,t);e.setSelectedIds(new Set)}function g(t,n){let i=e.graph.getNode(t);if(!i)return;let a=n.trim();e.graph.updateNode(t,{name:a||r(i.type)})}return{isTopLevel:i,...t,reparentNodes:a,wrapSelectionInContainer:o,wrapInAutoLayout:s,groupSelected:c,frameSelection:l,booleanOperationSelected:u,ungroupSelected:d,flattenSelected:f,outlineTextSelected:p,outlineStrokeSelected:m,...n,moveToPage:h,renameNode:g}}function yp(e){return{nodeId:e.id,before:{text:e.text,styleRuns:Ze(e.styleRuns),size:{width:e.width,height:e.height}}}}function bp(e,t=``){return{text:e?.text??t,styleRuns:e?Ze(e.styleRuns):[],size:e?{width:e.width,height:e.height}:void 0}}function xp(e,t){if(!e||!t)return{};let n={};if(e.textAutoResize===`WIDTH_AND_HEIGHT`){let r=Math.ceil(t.getLongestLine());r>0&&r!==e.width&&(n.width=r)}if(e.textAutoResize===`HEIGHT`||e.textAutoResize===`WIDTH_AND_HEIGHT`){let r=Math.ceil(t.getHeight());r>0&&r!==e.height&&(n.height=r)}return n}function Sp(e,t){return e.text!==t.text||!wp(e.styleRuns,t.styleRuns)||t.size!==void 0&&!Cp(e.size??{},t.size)}function Cp(e,t){return e.width===t.width&&e.height===t.height}function wp(e,t){return e.length===t.length?e.every((e,n)=>Tp(e,t[n])):!1}function Tp(e,t){return e.start===t.start&&e.length===t.length&&Ep(e.style,t.style)}function Ep(e,t){return e.fontWeight===t.fontWeight&&e.italic===t.italic&&e.textDecoration===t.textDecoration&&e.fontSize===t.fontSize&&e.fontFamily===t.fontFamily&&e.letterSpacing===t.letterSpacing&&e.lineHeight===t.lineHeight&&Dp(e.fills??[],t.fills??[])}function Dp(e,t){return e.length===t.length?e.every((e,n)=>Op(e,t[n])):!1}function Op(e,t){if(Object.is(e,t))return!0;if(typeof e!=typeof t||e===null||t===null||typeof e!=`object`||typeof t!=`object`)return!1;if(Array.isArray(e)||Array.isArray(t))return!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((e,n)=>Op(e,t[n]));let n=e,r=t,i=Object.keys(n),a=Object.keys(r);return i.length===a.length?i.every(e=>Object.hasOwn(r,e)&&Op(n[e],r[e])):!1}function kp(e){let t=null;function n(n){let i=e.getTextEditor();e.state.editingTextId&&r();let a=e.graph.getNode(n);a&&(t=yp(a),e.state.editingTextId=n,i&&(i.setRenderer(e.getRenderer()),i.start(a)),e.requestRender())}function r(){let n=e.getTextEditor();if(!n?.isActive){e.state.editingTextId=null,t=null;return}let r=n.state?.paragraph??null,i=n.stop();if(!i){e.state.editingTextId=null,t=null,e.requestRender();return}let a=t?.before??{text:``,styleRuns:[],size:{}},o=e.graph.getNode(i.nodeId),s=bp(o,i.text);s.text=i.text;let c=a.text===s.text?{}:xp(o,r);Object.keys(c).length>0&&(s.size=c),e.graph.updateNode(i.nodeId,{text:s.text,styleRuns:s.styleRuns,...c}),e.state.editingTextId=null,t=null,Sp(a,s)&&e.undo.push({label:`Edit text`,forward:()=>{e.graph.updateNode(i.nodeId,{text:s.text,styleRuns:s.styleRuns,...s.size})},inverse:()=>{e.graph.updateNode(i.nodeId,{text:a.text,styleRuns:a.styleRuns,...a.size})}})}return{startTextEditing:n,commitTextEdit:r}}function Ap(e,t){let n=new Map,r=t=>{let i=e.getNode(t);if(i){n.set(t,structuredClone(i));for(let e of i.childIds)r(e)}};return r(t),n}function jp(e,t){let n=e.state.currentPageId,r=e.graph.getNode(n),i=t.get(n);if(!(!r||!i)){for(let t of r.childIds.slice())e.graph.deleteNode(t);Mp(e.graph,t,n,i.childIds),e.graph.clearAbsPosCache(),j(e.graph,n),e.setSelectedIds(new Set),e.state.hoveredNodeId=null,e.requestRender()}}function Mp(e,t,n,r){for(let i of r){let a=t.get(i);if(!a)continue;let{parentId:o,childIds:s,...c}=a;e.createNode(a.type,n,{...c,childIds:[]}),e.reorderChild(a.id,n,r.indexOf(i)),Mp(e,t,a.id,s)}}function Np(e){function t(t){pc(e,`Move`,t,fc(e,t.keys()))}function n(t){let n=new Map;for(let[r]of t){let t=e.graph.getNode(r);t&&n.set(r,{x:t.x,y:t.y,parentId:t.parentId??e.state.currentPageId})}e.undo.push({label:`Move`,forward:()=>{for(let[t,r]of n)e.graph.reparentNode(t,r.parentId),e.graph.updateNode(t,{x:r.x,y:r.y}),e.runLayoutForNode(t)},inverse:()=>{for(let[n,r]of t)e.graph.reparentNode(n,r.parentId),e.graph.updateNode(n,{x:r.x,y:r.y}),e.runLayoutForNode(n)}})}function r(t,n){let r=new Map;for(let n of t){let t=sd(e.graph,n);for(let[e,n]of t)r.set(e,n)}let i=new Set(t);e.undo.push({label:`Duplicate`,forward:()=>{for(let n of t){if(e.graph.getNode(n))continue;let t=r.get(n);t&&(cd(e.graph,t,t.parentId??e.state.currentPageId,r),e.runLayoutForNode(n))}e.setSelectedIds(new Set(i))},inverse:()=>{for(let n of t.toReversed())e.graph.deleteNode(n);e.setSelectedIds(new Set(n))}})}function i(t,n){let r=e.graph.getNode(t);if(!r)return;let i={x:r.x,y:r.y,width:r.width,height:r.height};e.undo.push({label:`Resize`,forward:()=>{e.graph.updateNode(t,i),e.runLayoutForNode(t)},inverse:()=>{e.graph.updateNode(t,n),e.runLayoutForNode(t)}})}function a(t,n){let r=e.graph.getNode(t);if(!r)return;let i=r.rotation;e.undo.push({label:`Rotate`,forward:()=>{e.graph.updateNode(t,{rotation:i})},inverse:()=>{e.graph.updateNode(t,{rotation:n})}})}function o(t,n,r=`Update`){let i=e.graph.getNode(t);if(!i)return;let a=lt(i,Object.keys(n));e.undo.push({label:r,forward:()=>{e.graph.updateNode(t,a),e.runLayoutForNode(t)},inverse:()=>{e.graph.updateNode(t,n),e.runLayoutForNode(t)}})}function s(t){e.undo.undo(),t(),e.requestRender()}function c(t){e.undo.redo(),t(),e.requestRender()}function l(){return Ap(e.graph,e.state.currentPageId)}function u(t){jp(e,t)}function d(t){e.undo.push(t)}return{commitMove:t,commitMoveWithReparent:n,commitDuplicateMove:r,commitResize:i,commitRotation:a,commitNodeUpdate:o,undoAction:s,redoAction:c,snapshotPage:l,restorePageFromSnapshot:u,pushUndoEntry:d}}function Pp(e){function t(t){return e.graph.getVariablesByType(t)}function n(t){return e.graph.variables.get(t)}function r(t){return e.graph.resolveColorVariable(t)}function i(t){return e.graph.resolveNumberVariable(t)}function a(t){return e.graph.getVariablesForCollection(t)}function o(t){return e.graph.variableCollections.get(t)}function s(){return[...e.graph.variableCollections.values()]}function c(){return e.graph.variableCollections.size}function l(){return e.graph.variables.size}function u(t,n){let r=e.graph.variableCollections.get(t);if(!r)return;let i=r.name;r.name=n,e.undo.push({label:`Rename collection`,forward:()=>{let r=e.graph.variableCollections.get(t);r&&(r.name=n),e.requestRender()},inverse:()=>{let n=e.graph.variableCollections.get(t);n&&(n.name=i),e.requestRender()}}),e.requestRender()}function d(t){e.graph.addCollection(t),e.undo.push({label:`Add collection`,forward:()=>{e.graph.addCollection(t),e.requestRender()},inverse:()=>{e.graph.removeCollection(t.id),e.requestRender()}}),e.requestRender()}function f(t){let n=e.graph.variableCollections.get(t);if(!n)return;let r=structuredClone(n),i=r.variableIds.map(t=>e.graph.variables.get(t)).filter(e=>e!=null).map(e=>structuredClone(e));e.graph.removeCollection(t),e.undo.push({label:`Remove collection`,forward:()=>{e.graph.removeCollection(t),e.requestRender()},inverse:()=>{e.graph.addCollection(r);for(let t of i)e.graph.addVariable(t);e.requestRender()}}),e.requestRender()}function p(t){e.graph.addVariable(t),e.undo.push({label:`Add variable`,forward:()=>{e.graph.addVariable(t),e.requestRender()},inverse:()=>{e.graph.removeVariable(t.id),e.requestRender()}}),e.requestRender()}function m(t){let n=e.graph.variables.get(t);if(!n)return;let r=structuredClone(n);e.graph.removeVariable(t),e.undo.push({label:`Remove variable`,forward:()=>{e.graph.removeVariable(t),e.requestRender()},inverse:()=>{e.graph.addVariable(r),e.requestRender()}}),e.requestRender()}function h(t,n){let r=e.graph.variables.get(t);if(!r)return;let i=r.name;r.name=n,e.undo.push({label:`Rename variable`,forward:()=>{let r=e.graph.variables.get(t);r&&(r.name=n),e.requestRender()},inverse:()=>{let n=e.graph.variables.get(t);n&&(n.name=i),e.requestRender()}}),e.requestRender()}function g(t,n){let r=e.graph.variableCollections.get(t);if(!r)return;let i=`mode:${rt(8)}`,a=n??`Mode ${r.modes.length+1}`;return e.graph.addMode(t,i,a),e.undo.push({label:`Add mode`,forward:()=>{e.graph.addMode(t,i,a),e.requestRender()},inverse:()=>{e.graph.removeMode(t,i),e.requestRender()}}),e.requestRender(),i}function _(t,n){let r=e.graph.variableCollections.get(t);if(!r||r.modes.length<=1)return;let i=r.modes.findIndex(e=>e.modeId===n),a=r.modes[i]?.name??``,o=r.defaultModeId===n,s=new Map;for(let t of r.variableIds){let r=e.graph.variables.get(t);r?.valuesByMode[n]!==void 0&&s.set(t,structuredClone(r.valuesByMode[n]))}e.graph.removeMode(t,n),e.undo.push({label:`Remove mode`,forward:()=>{e.graph.removeMode(t,n),e.requestRender()},inverse:()=>{e.graph.addMode(t,n,a);let r=e.graph.variableCollections.get(t);if(r&&i!==-1){let e=r.modes.pop();e&&r.modes.splice(i,0,e)}for(let[t,r]of s){let i=e.graph.variables.get(t);i&&(i.valuesByMode[n]=structuredClone(r))}o&&e.graph.setDefaultMode(t,n),e.requestRender()}}),e.requestRender()}function v(t,n,r){let i=e.graph.variableCollections.get(t);if(!i)return;let a=i.modes.find(e=>e.modeId===n);if(!a)return;let o=a.name;e.graph.renameMode(t,n,r),e.undo.push({label:`Rename mode`,forward:()=>{e.graph.renameMode(t,n,r),e.requestRender()},inverse:()=>{e.graph.renameMode(t,n,o),e.requestRender()}}),e.requestRender()}function y(t,n){let r=e.graph.variableCollections.get(t);if(!r)return;let i=r.defaultModeId;e.graph.setDefaultMode(t,n),e.undo.push({label:`Set default mode`,forward:()=>{e.graph.setDefaultMode(t,n),e.requestRender()},inverse:()=>{e.graph.setDefaultMode(t,i),e.requestRender()}}),e.requestRender()}function b(t,n){let r=e.graph.variableCollections.get(t);if(!r)return;let i=r.modes.find(e=>e.modeId===n);if(!i)return;let a=`mode:${rt(8)}`,o=`${i.name} copy`;return e.graph.addMode(t,a,o,n),e.undo.push({label:`Duplicate mode`,forward:()=>{e.graph.addMode(t,a,o,n),e.requestRender()},inverse:()=>{e.graph.removeMode(t,a),e.requestRender()}}),e.requestRender(),a}function x(t,n){e.graph.setActiveMode(t,n),e.requestRender()}function S(t,n,r){let i=e.graph.variables.get(t);if(!i)return;let a=structuredClone(i.valuesByMode[n]),o=structuredClone(r);i.valuesByMode[n]=o,e.undo.push({label:`Update variable value`,forward:()=>{let r=e.graph.variables.get(t);r&&(r.valuesByMode[n]=structuredClone(o)),e.requestRender()},inverse:()=>{let r=e.graph.variables.get(t);r&&(r.valuesByMode[n]=structuredClone(a)),e.requestRender()}}),e.requestRender()}return{getVariablesByType:t,getVariable:n,resolveColorVariable:r,resolveNumberVariable:i,getVariablesForCollection:a,getCollection:o,getCollections:s,getCollectionCount:c,getVariableCount:l,renameCollection:u,addCollection:d,removeCollection:f,addVariable:p,removeVariable:m,renameVariable:h,updateVariableValue:S,addMode:g,removeMode:_,renameMode:v,setDefaultMode:y,duplicateMode:b,setActiveMode:x}}function Fp(e){function t(){return{panX:e.state.panX,panY:e.state.panY,zoom:e.state.zoom}}function n(n){let r=t();(r.panX!==n.panX||r.panY!==n.panY||r.zoom!==n.zoom)&&e.emitEditorEvent(`viewport:changed`,r,n)}function r(t,n){return{x:(t-e.state.panX)/e.state.zoom,y:(n-e.state.panY)/e.state.zoom}}function i(r,i,a){let o=t(),s=Math.max(.02,Math.min(256,r));e.state.panX=i-(i-e.state.panX)*(s/e.state.zoom),e.state.panY=a-(a-e.state.panY)*(s/e.state.zoom),e.state.zoom=s,e.requestRepaint(),n(o)}function a(t,n,r){let a=Math.min(Ae,Math.max(Ee,Math.exp(-t/50)));i(e.state.zoom*a,n,r)}function o(r,i){let a=t();e.state.panX+=r,e.state.panY+=i,e.requestRepaint(),n(a)}function s(r,i,a,o){let s=t(),c=a-r+160,l=o-i+160,{width:u,height:d}=e.getViewportSize(),f=Math.min(u/c,d/l,1);e.state.zoom=f,e.state.panX=(u-c*f)/2-r*f+80*f,e.state.panY=(d-l*f)/2-i*f+80*f,e.requestRepaint(),n(s)}function c(){let t=e.graph.getChildren(e.state.currentPageId);if(t.length===0)return;let n=h(t);s(n.x,n.y,n.x+n.width,n.y+n.height)}function l(r){let{width:i,height:a}=e.getViewportSize(),o=(-e.state.panX+i/2)/e.state.zoom,s=(-e.state.panY+a/2)/e.state.zoom,c=t();e.state.zoom=Math.max(.02,Math.min(256,r)),e.state.panX=i/2-o,e.state.panY=a/2-s,e.requestRepaint(),n(c)}function u(){l(1)}function d(){if(e.state.selectedIds.size===0)return;let t=[...e.state.selectedIds].map(t=>e.graph.getNode(t)).filter(e=>e!=null);if(t.length===0)return;let n=pe(t,t=>e.graph.getAbsolutePosition(t));s(n.x,n.y,n.x+n.width,n.y+n.height)}return{screenToCanvas:r,setZoomAroundPoint:i,applyZoom:a,pan:o,zoomToBounds:s,zoomToFit:c,zoomTo100:u,zoomToLevel:l,zoomToSelection:d}}function Ip(e){let t=e?.graph??new de,n=e?.skipInitialGraphSetup??!1,r=new _,i=e?.loadFont??s.loadFont.bind(s),a=e?.getViewportSize??(()=>we?{width:window.innerWidth,height:window.innerHeight}:{width:800,height:600}),o=null,c=null,l=new Set,u=null,d=oe();tc();let f=e?.state??op(t.getPages()[0].id);function p(e,...t){d.emit(e,...t)}function m(e,t){return d.on(e,t)}function h(){f.renderVersion++,f.sceneVersion++,p(`render:requested`,{renderVersion:f.renderVersion,sceneVersion:f.sceneVersion})}function g(){f.renderVersion++,p(`repaint:requested`,{renderVersion:f.renderVersion,sceneVersion:f.sceneVersion})}function v(e){let t=[...f.selectedIds];f.selectedIds=e;let n=[...e];(t.length!==n.length||t.some((e,t)=>e!==n[t]))&&p(`selection:changed`,n,t)}function y(e){let t=f.activeTool;f.activeTool=e,t!==e&&p(`tool:changed`,e,t)}let b=Df(()=>t),{runLayoutForNode:x}=Of(()=>t),{scheduleComponentSync:S}=yf(()=>t,h),{subscribeToGraph:C}=Ef({getGraph:()=>t,getRenderers:()=>l,scheduleComponentSync:S,requestRender:h,emitEditorEvent:p});n||C();let w={get graph(){return t},set graph(e){t=e},undo:r,state:f,loadFont:i,getViewportSize:a,getCk:()=>o,getRenderer:()=>c,getTextEditor:()=>u,requestRender:h,requestRepaint:g,emitEditorEvent:p,setSelectedIds:v,setActiveTool:y,runLayoutForNode:x,subscribeToGraph:C},ee=Fp(w),T=Zf(w),te=Kf(w),ne=ap(w),re=vp(w),ie=Tf(w),ae=hf(w),se=vf(w),ce=Np(w),le=kp(w),ue=Rf(w),fe=Pp(w),pe=vc(w),me=yc(ae,T),he=bc(ie,T,re,te),ge=xc(re,T),_e=Sc(ce,T);function ve(e,t){o=e,c=t,l.add(t),u??=new st(e),it((e,n)=>t.measureTextNode(e,n))}function ye(e){l.delete(e),c===e&&(c=l.values().next().value??null)}function be(e){t=e,C();let n=f.currentPageId;f.currentPageId=t.getPages()[0]?.id??t.rootId,v(new Set),f.hoveredNodeId=null,te.clearPageViewports(),p(`graph:replaced`,t),n!==f.currentPageId&&p(`page:changed`,f.currentPageId,n),h()}return{get graph(){return t},get renderer(){return c},get canvasRenderers(){return[...l]},get textEditor(){return u},undo:r,state:f,...b,requestRender:h,requestRepaint:g,onEditorEvent:m,setCanvasKit:ve,removeCanvasRenderer:ye,replaceGraph:be,subscribeToGraph:C,...T,...te,...ne,...re,...ue,...pe,...fe,...le,...ee,..._e,setDocumentColorSpace:se.setDocumentColorSpace,...me,...he,...ge}}var Lp=class{constructor(e){this.adapters=e}listFormats(){return this.adapters}getFormat(e){return this.adapters.find(t=>t.id===e)??null}listReadableFormats(){return this.adapters.filter(e=>e.support.readDocument)}listWritableFormats(){return this.adapters.filter(e=>e.support.writeDocument)}listExportFormats(e){return this.adapters.filter(t=>{switch(e){case`document`:return!!t.support.exportDocument;case`page`:return!!t.support.exportPage;case`selection`:return!!t.support.exportSelection;case`node`:return!!t.support.exportNode;default:return!1}})}findReader(e,t){return this.adapters.find(n=>{if(!n.support.readDocument)return!1;if(n.matchesFile)return n.matchesFile(e,t);let r=e.toLowerCase();return n.extensions.some(e=>r.endsWith(`.${e}`))})??null}async readDocument(e,t){let n=this.findReader(e.name??``,e.mimeType);if(!n?.readDocument)throw Error(`Unsupported document format: ${e.name??`unknown`}`);return n.readDocument(e,t)}async writeDocument(e,t,n,r){let i=this.getFormat(e);if(!i?.writeDocument)throw Error(`Format does not support writeDocument: ${e}`);return i.writeDocument(t,n,r)}async exportContent(e,t,n,r){let i=this.getFormat(e);if(!i?.exportContent)throw Error(`Format does not support exportContent: ${e}`);return i.exportContent(t,n,r)}};function Rp(e,t){e.source.format=`fig`,e.source.orderKey=t.parentIndex?.position??null,t.backgroundColor&&(e.source.fig.rawNodeFields.backgroundColor=structuredClone(t.backgroundColor)),e.source.fig.rawNodeFields.strokeJoin=t.strokeJoin,e.source.fig.rawNodeFields.strokeWeight=t.strokeWeight,t.pageType&&(e.source.fig.rawNodeFields.pageType=t.pageType)}function zp(e,t){let n=e.getNode(e.rootId);!t||!n||(n.source.format=`fig`,n.source.fig.rawNodeFields.strokeJoin=t.strokeJoin,n.source.fig.rawNodeFields.strokeWeight=t.strokeWeight)}function Bp(e){return e.version?`${e.key}@${e.version}`:e.key}function Vp(e){let t=new Map;for(let[n,r]of e)typeof r.key==`string`&&(t.set(r.key,n),typeof r.version==`string`&&t.set(Bp({key:r.key,version:r.version}),n),typeof r.userFacingVersion==`string`&&t.set(Bp({key:r.key,version:r.userFacingVersion}),n));return t}function Hp(e,t){if(e.guid)return P(e.guid);if(e.assetRef)return t.get(Bp(e.assetRef))??t.get(e.assetRef.key)}function Up(e,t){let n=new Map,r=new Map;for(let[t,i]of e){if(i.type!==`VARIABLE`)continue;n.set(t,i.variableDataValues?.entries??[]);let e=i.variableSetID?.guid?P(i.variableSetID.guid):void 0,a=i.parentIndex?.guid?P(i.parentIndex.guid):void 0;e?r.set(t,e):a&&r.set(t,a)}let i=new Map;for(let[t,n]of e){if(n.type!==`VARIABLE_SET`)continue;let e=n.variableSetModes??[];e.length>0&&i.set(t,P(e[0].id))}function a(e,o,s){if(s>10)return null;let c=n.get(e);if(!c?.length)return null;let l=r.get(e),u=l?i.get(l):void 0,d=o?c.find(e=>P(e.modeID)===o):void 0;!d&&u&&(d=c.find(e=>P(e.modeID)===u)),d||=c[0];let f=d.variableData.value;if(!f)return null;if(f.colorValue)return f.colorValue;if(f.alias){let e=Hp(f.alias,t);if(e)return a(e,P(d.modeID),s+1)}return null}return function(e){let n=Hp(e,t);return n?a(n,void 0,0):null}}function Wp(e){let t=new Map,n=new Map,r=new Map;for(let i of e){if(!i.guid||i.phase===`REMOVED`)continue;let e=P(i.guid);if(t.set(e,i),i.parentIndex?.guid){let t=P(i.parentIndex.guid);n.set(e,t);let a=r.get(t);a||(a=[],r.set(t,a)),a.push(e)}}for(let[e,n]of r){let r=t.get(e);r&&xi(n,r,t)}return{changeMap:t,parentMap:n,childrenMap:r}}function Gp(e){return e===`COLOR`?`COLOR`:e===`BOOLEAN`?`BOOLEAN`:e===`STRING`?`STRING`:`FLOAT`}function Kp(e,t){let n=e.variableData;if(!n.value)return;let r=n.dataType??n.resolvedDataType;if(r===`COLOR`&&n.value.colorValue){let e=n.value.colorValue;return{r:e.r,g:e.g,b:e.b,a:e.a}}if(r===`BOOLEAN`)return n.value.boolValue??!1;if(r===`STRING`)return n.value.textValue??``;if(r===`ALIAS`&&n.value.alias){let e=Hp(n.value.alias,t);return e?{aliasId:e}:void 0}return n.value.floatValue??0}function qp(e){return e===`BOOLEAN`?!1:e===`STRING`?``:e===`COLOR`?{...Ne}:0}function Jp(e,t){for(let[n,r]of e){if(r.type!==`VARIABLE_SET`)continue;let e=(r.variableSetModes??[]).map(e=>({modeId:P(e.id),name:e.name}));e.length===0&&e.push({modeId:`default`,name:`Default`}),t.addCollection({id:n,name:r.name??`Variables`,modes:e,defaultModeId:e[0].modeId,variableIds:[]})}}function Yp(e,t,n,r){if(e.variableSetID?.guid)return P(e.variableSetID.guid);let i=e.variableSetID?.assetRef;return i?r.get(Bp(i))??r.get(i.key)??``:n.get(t)??``}function Xp(e,t,n){if(t.variableCollections.has(n))return;let r=e.get(n);t.addCollection({id:n,name:r?.name??`Variables`,modes:[{modeId:`default`,name:`Default`}],defaultModeId:`default`,variableIds:[]})}function Zp(e,t,n,r){for(let[i,a]of e){if(a.type!==`VARIABLE`)continue;let o=Yp(a,i,t,r);Xp(e,n,o);let s=Gp(a.variableResolvedType),c={};if(a.variableDataValues?.entries)for(let e of a.variableDataValues.entries){let t=Kp(e,r);t!==void 0&&(c[P(e.modeID)]=t)}if(Object.keys(c).length===0){let e=n.variableCollections.get(o)?.defaultModeId??`default`;c[e]=qp(s)}n.addVariable({id:i,name:a.name??`Variable`,type:s,collectionId:o,valuesByMode:c,description:``,hiddenFromPublishing:!1,key:typeof a.key==`string`?a.key:void 0,version:typeof a.version==`string`?a.version:void 0})}}function Qp(e,t,n,r,i,a,o){let s=null;for(let[e,n]of t)if(n.type===`DOCUMENT`||e===`0:0`){s=e;break}if(s){zp(e,t.get(s));for(let n of r.get(s)??[]){let s=t.get(n);if(s)if(s.type===`CANVAS`){let t=e.addPage(s.name??`Page`);t.source.id=n,Rp(t,s),a.set(n,t.id),s.internalOnly&&(t.internalOnly=!0),i.add(n);for(let e of r.get(n)??[])o(e,t.id)}else o(n,e.getPages()[0]?.id??e.rootId)}}else{let r=[];for(let[e]of t){let i=n.get(e);(!i||!t.has(i))&&r.push(e)}let i=e.getPages()[0]??e.addPage(`Page 1`);for(let e of r)o(e,i.id)}}function $p(e,t,n){for(let[r,i]of e){if(!i.variableConsumptionMap?.entries?.length)continue;let e=t.get(r);if(e)for(let t of i.variableConsumptionMap.entries){let r=t.variableData?.value?.alias?.guid;if(!r)continue;let i=Br[t.variableField??``];i&&n.bindVariable(e,i,P(r))}}}function em(e,t){for(let n of e.getAllNodes()){if(n.type!==`INSTANCE`||!n.componentId)continue;let e=t.get(n.componentId);e&&(n.componentId=e)}}function tm(e){for(let t of e.getAllNodes()){if(t.type!==`COMPONENT`||t.variantPropSpecs.length===0||!t.parentId)continue;let n=e.getNode(t.parentId);if(n?.type!==`COMPONENT_SET`)continue;let r=new Map(n.componentPropertyDefinitions.map(e=>[e.id,e.name])),i={};for(let e of t.variantPropSpecs)i[r.get(e.propDefId)??e.propDefId]=e.value;e.updateNode(t.id,{componentPropertyValues:i})}}function nm(e){return e.find(e=>e.type===`DOCUMENT`)?.documentColorProfile===`DISPLAY_P3`?`display-p3`:`srgb`}function rm(e){for(let t of e.values())ro(e,t)}function im(e,t,n,r,i){Bf(e,{changeMap:t,guidToNodeId:n,blobs:r,populatedRootIds:new Set(i)})}function am(e,t=[],n,r={}){let i=new de;if(i.documentColorSpace=nm(e),n)for(let[e,t]of n)i.images.set(e,t);for(let e of i.getPages(!0))i.deleteNode(e.id);let{changeMap:a,parentMap:o,childrenMap:s}=Wp(e);rm(a);let c=Vp(a);er(Up(a,c));let l=new Map,u=new Set,d=new Map,f=e=>s.get(e)??[];function p(e,n){if(u.has(e))return;u.add(e);let r=a.get(e);if(!r)return;let{nodeType:o,...s}=si(r,t);if(o===`DOCUMENT`||o===`VARIABLE`||r.type===`VARIABLE_SET`)return;let c=l.get(n)??n,m=i.createNode(o,c,s);d.set(e,m.id);for(let t of f(e))p(t,m.id)}Qp(i,a,o,s,u,l,p),Jp(a,i),Zp(a,o,i,c),$p(a,d,i),em(i,d),tm(i);let m=i.getPages()[0]?.id,h=new Set;for(let e of i.getAllNodes()){if(e.type!==`COMPONENT`&&e.type!==`COMPONENT_SET`)continue;let t=e.parentId?i.getNode(e.parentId):void 0;for(;t?.parentId&&t.type!==`CANVAS`;)t=i.getNode(t.parentId);t?.type===`CANVAS`&&h.add(t.id)}let g=r.populate===`first-page`?[m,...h].filter(pf):void 0;return i.preserveSourceMetadataDuring(()=>{Do(i,a,d,t,g)}),g&&im(i,a,d,t,g),er(null),i.getPages(!0).length===0&&i.addPage(`Page 1`),i}function om(e){for(let t of e){if(t.pluginData&&t.pluginData.length>1){let e=new Map;for(let n of t.pluginData)e.set(`${n.pluginID}\0${n.key}\0${n.value}`,n);e.size<t.pluginData.length&&(t.pluginData=[...e.values()])}if(t.pluginRelaunchData&&t.pluginRelaunchData.length>1){let e=new Map;for(let n of t.pluginRelaunchData)e.set(`${n.pluginID}\0${n.command}\0${n.message}\0${n.isDeleted}`,n);e.size<t.pluginRelaunchData.length&&(t.pluginRelaunchData=[...e.values()])}}}function sm(e){if(new TextDecoder().decode(e.slice(0,8))!==`fig-kiwi`)return null;let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=t.getUint32(8,!0),r=12,i=[];for(;r<e.length&&!(r+4>e.length);){let n=t.getUint32(r,!0);if(r+=4,r+n>e.length)throw Error(`Corrupted .fig file: chunk at offset ${r-4} declares length ${n} but only ${e.length-r} bytes remain`);i.push(e.slice(r,r+n)),r+=n}if(i.length<2)return null;let a=i[1],o;if(Bn(a))o=Qe(a);else try{o=Le(a)}catch{o=a}return{schemaDeflated:i[0],dataRaw:o,version:n}}function cm(e){let t=Re(new Uint8Array(e),{filter:e=>e.name===`canvas.fig`||e.name===`canvas`||e.name.startsWith(`images/`)&&e.name!==`images/`}),n=Object.keys(t),r=null;for(let e of n)if(e===`canvas.fig`||e===`canvas`){r=t[e];break}if(!r){let e=0;for(let i of n){let n=i.toLowerCase();n.endsWith(`.png`)||n.endsWith(`.jpg`)||n.endsWith(`.json`)||t[i].byteLength>e&&(e=t[i].byteLength,r=t[i])}}if(!r)throw Error(`No canvas data found in .fig file. Entries: ${n.join(`, `)}`);let i=sm(r);if(!i)throw Error(`Invalid fig-kiwi container`);let a=dn(mn(new sn(Le(i.schemaDeflated)))).decodeMessage(i.dataRaw),o=a.nodeChanges;if(!o||o.length===0)throw Error(`No nodes found in .fig file`);om(o);let s=(a.blobs??[]).map(e=>e.bytes instanceof Uint8Array?e.bytes:new Uint8Array(Object.values(e.bytes))),c=[];for(let e of n)e.startsWith(`images/`)&&e!==`images/`&&c.push([e.replace(`images/`,``),t[e]]);return{nodeChanges:o,blobs:s,images:c,figKiwiVersion:i.version,figSchemaDeflated:i.schemaDeflated}}function lm(e){let t=new de;return t.rootId=e.rootId,t.nodes=new Map(e.nodes),t.images=new Map(e.images),t.variables=new Map(e.variables),t.variableCollections=new Map(e.variableCollections),t.activeMode=new Map(e.activeMode),t.instanceIndex=new Map(e.instanceIndex.map(([e,t])=>[e,new Set(t)])),t.figKiwiVersion=e.figKiwiVersion,t.figSchemaDeflated=e.figSchemaDeflated,t.documentColorSpace=e.documentColorSpace,e.lazyFigImport&&Bf(t,{changeMap:new Map(e.lazyFigImport.changeMap),guidToNodeId:new Map(e.lazyFigImport.guidToNodeId),blobs:e.lazyFigImport.blobs,populatedRootIds:new Set(e.lazyFigImport.populatedRootIds)}),t}function um(e,t={}){let{nodeChanges:n,blobs:r,images:i,figKiwiVersion:a,figSchemaDeflated:o}=cm(e),s=am(n,r,new Map(i),t);return s.figKiwiVersion=a,s.figSchemaDeflated=o,s}function dm(e,t){return new Promise((n,r)=>{let i=new Worker(new URL(`/open-pencil/v0.13.2/assets/worker-D9o5vvIU.js`,``+import.meta.url),{type:`module`});i.onmessage=e=>{if(i.terminate(),e.data.error||!e.data.graph){r(Error(e.data.error??`Worker failed to parse .fig file`));return}n(lm(e.data.graph))},i.onerror=e=>{i.terminate(),r(Error(e.message||`Worker failed to parse .fig file`))},i.postMessage({buffer:e,options:t},[e])})}async function fm(e,t={}){if(typeof Worker<`u`&&we){let n=e.slice(0);try{return await dm(e,t)}catch(e){return console.warn(`Worker parsing failed, falling back to main thread:`,e),um(n,t)}}return um(e,t)}async function pm(e,t={}){return fm(await e.arrayBuffer(),t)}function mm(e,t,n,r,i,a){let o=Io(e,t,a),s={"canvas.fig":[o,{level:0}],"thumbnail.png":[n,{level:0}],"meta.json":new TextEncoder().encode(r)};for(let e of i)s[e.name]=[e.data,{level:0}];return Ie(s)}var hm=Uint8Array.from(atob(`iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==`),e=>e.charCodeAt(0));function gm(e,t,n){return e&&typeof e==`object`&&`aliasId`in e?{value:{alias:{guid:n.get(e.aliasId)??F(e.aliasId)}},dataType:`ALIAS`,resolvedDataType:{COLOR:`COLOR`,BOOLEAN:`BOOLEAN`,STRING:`STRING`}[t]??`FLOAT`}:t===`COLOR`&&typeof e==`object`&&`r`in e?{value:{colorValue:Ds(e)},dataType:`COLOR`,resolvedDataType:`COLOR`}:t===`BOOLEAN`?{value:{boolValue:!!e},dataType:`BOOLEAN`,resolvedDataType:`BOOLEAN`}:t===`STRING`?{value:{textValue:typeof e==`string`?e:JSON.stringify(e)},dataType:`STRING`,resolvedDataType:`STRING`}:{value:{floatValue:Number(e)},dataType:`FLOAT`,resolvedDataType:`FLOAT`}}function _m(e){let t=[];for(let[n,r]of e.images)t.push({name:`images/${n}`,data:r});return t}var vm=400,ym=225;async function bm(e,t,n,r,i=!1){if(!t)return hm;if(n&&r)return _e(n,r,e,t,vm,ym)??hm;if(!i||we||je)return hm;let{headlessRenderThumbnail:a}=await E(async()=>{let{headlessRenderThumbnail:e}=await import(`./raster-WAhAhF1p.js`);return{headlessRenderThumbnail:e}},__vite__mapDeps([6,7,8,9,10,11,12,13]));return await a(e,t,vm,ym)??hm}function xm(e,t,n,r){for(let[i,a]of e.variableCollections){n.set(i,{sessionID:0,localID:t.value++});for(let e of a.modes)r.set(e.modeId,{sessionID:0,localID:t.value++});for(let e of a.variableIds)n.set(e,{sessionID:0,localID:t.value++})}}function Sm(e,t,n,r,i){let a=0;for(let[o,s]of e.variableCollections){let c=r.get(o)??F(o);t.push({guid:c,parentIndex:{guid:n,position:Cs(a++)},type:`VARIABLE_SET`,name:s.name,phase:`CREATED`,strokeAlign:`CENTER`,strokeJoin:`BEVEL`,variableSetModes:s.modes.map((e,t)=>({id:i.get(e.modeId)??F(e.modeId),name:e.name,sortPosition:Cs(t)}))}),Cm(e,t,c,n,s.variableIds,r,i)}}function Cm(e,t,n,r,i,a,o){let s=0;for(let c of i){let i=e.variables.get(c);if(!i)continue;let l=a.get(c)??F(c),u={COLOR:`COLOR`,BOOLEAN:`BOOLEAN`,STRING:`STRING`}[i.type]??`FLOAT`,d=Object.entries(i.valuesByMode).map(([e,t])=>({modeID:o.get(e)??F(e),variableData:gm(t,i.type,a)})),f={guid:l,parentIndex:{guid:r,position:Cs(s++)},type:`VARIABLE`,name:i.name,phase:`CREATED`,strokeAlign:`CENTER`,strokeJoin:`BEVEL`,variableSetID:{guid:n},variableResolvedType:u,variableDataValues:{entries:d},variableScopes:[`ALL_SCOPES`]};i.key&&(f.key=i.key),i.version&&(f.version=i.version),t.push(f)}}function wm(e,t){if(!e.source.id)return;`pageType`in e.source.fig.rawNodeFields||delete t.pageType,`backgroundColor`in e.source.fig.rawNodeFields&&(t.backgroundColor=structuredClone(e.source.fig.rawNodeFields.backgroundColor));let n=e.source.fig.rawNodeFields.strokeJoin;typeof n==`string`&&(t.strokeJoin=n);let r=e.source.fig.rawNodeFields.strokeWeight;typeof r==`number`&&(t.strokeWeight=r)}function Tm(e,t,n,r,i){let a=[],o=null;for(let e=0;e<t.length;e++){let s=t[e],c=s.source.id?F(s.source.id):{sessionID:0,localID:r.value++};s.source.id&&c.sessionID===0&&(r.value=Math.max(r.value,c.localID+1)),i.set(s.id,c),s.internalOnly&&(o=c);let l=Ws(c,n,s.source.orderKey??Cs(e),s.name,{backgroundOpacity:1,backgroundColor:{...Me},backgroundEnabled:!0});wm(s,l),s.internalOnly&&(l.internalOnly=!0),a.push({page:s,canvasGuid:c,canvasNc:l})}return e.variableCollections.size>0&&o===null&&(o={sessionID:0,localID:r.value++},a.push({page:{id:``,name:`Internal Only Canvas`,internalOnly:!0},canvasGuid:o,canvasNc:Ws(o,n,Cs(a.length),`Internal Only Canvas`,{internalOnly:!0})})),{canvasEntries:a,internalCanvasGuid:o}}async function Em(e,t,n,r,i=!1){Wf(e),await Gn();let a,o;e.figSchemaDeflated?(a=dn(mn(new sn(Le(e.figSchemaDeflated)))),o=e.figSchemaDeflated):(a=Kn(),o=ze(qn()));let s={sessionID:0,localID:0},c={value:2},l=Us(s,e.documentColorSpace),u=e.getNode(e.rootId);u&&Object.assign(l,u.source.fig.rawNodeFields);let d=[l],f=[],p=e.getPages(!0),m=new Map,h=new Map,g=new Map,_=await Bo(e),v=new Map,y=new Map,{canvasEntries:b,internalCanvasGuid:x}=Tm(e,p,s,c,m),S=c.value-1;for(let t of e.nodes.values())if(t.source.id){let e=F(t.source.id);e.sessionID===0&&e.localID>S&&(S=e.localID)}c.value=Math.max(c.value,S+1),xm(e,c,h,g);for(let e of b)d.push(e.canvasNc);let C=[...b.filter(e=>e.page.internalOnly),...b.filter(e=>!e.page.internalOnly)];for(let{page:t,canvasGuid:n}of C){let r=e.getChildren(t.id).filter(e=>!e.internalOnly);for(let t=0;t<r.length;t++)d.push(...Bs(r[t],n,t,c,e,f,m,_,h,v,y))}e.variableCollections.size>0&&x&&Sm(e,d,x,h,g);let w={type:`NODE_CHANGES`,sessionID:0,ackID:0,nodeChanges:d};f.length>0&&(w.blobs=f.map(e=>({bytes:e})));let ee=a.encodeMessage(w),T=await bm(e,r??p[0]?.id,t,n,i),te=JSON.stringify({version:1,app:`OpenPencil`,createdAt:new Date().toISOString()}),ne=_m(e),re=e.figKiwiVersion??void 0;if(je){let{invoke:e}=await E(async()=>{let{invoke:e}=await import(`./core-BL-hD0m0.js`);return{invoke:e}},__vite__mapDeps([3,1]));return new Uint8Array(await e(`build_fig_file`,{schemaDeflated:Array.from(o),kiwiData:Array.from(ee),thumbnailPng:Array.from(T),metaJson:te,images:ne.map(e=>({name:e.name,data:Array.from(e.data)})),figKiwiVersion:re}))}return km(o,ee,T,te,ne,re)}function Dm(){return typeof Worker<`u`&&we}function Om(e,t,n,r,i,a){return new Promise((o,s)=>{let c=new Worker(new URL(`/open-pencil/v0.13.2/assets/export-worker-CWbracbr.js`,``+import.meta.url),{type:`module`});c.onmessage=e=>{o(e.data),c.terminate()},c.onerror=e=>{s(Error(e.message)),c.terminate()},c.postMessage({schemaDeflated:e,kiwiData:t,thumbnailPng:n,metaJson:r,images:i,figKiwiVersion:a})})}function km(e,t,n,r,i,a){return Dm()?Om(e,t,n,r,i,a):Promise.resolve(mm(e,t,n,r,i,a))}function Am(e){return e===`color`?`COLOR`:e===`number`?`FLOAT`:`STRING`}function jm(e,t){return t===`COLOR`&&typeof e==`string`?$e(e):t===`FLOAT`&&typeof e==`number`?e:t===`STRING`?String(e):typeof e==`number`?e:String(e)}function Mm(e){return e===`COLOR`?{...Ne}:e===`FLOAT`?0:e===`BOOLEAN`?!1:``}function Nm(e){return typeof e==`string`&&e.startsWith(`$--`)}function Pm(e){return e.replace(/^\$/,``)}function Fm(e,t,n,r){if(!Nm(n))return;let i=r.byName.get(Pm(n));i&&(e.boundVariables[t]=i.id)}function Im(e,t,n){let r=se(),i=[],a=Object.keys(n);if(a.length>0){let e=a[0];for(let t of n[e])i.push({modeId:se(),name:t})}i.length===0&&i.push({modeId:se(),name:`Default`});let o={id:r,name:`Variables`,modes:i,defaultModeId:i[0].modeId,variableIds:[]};e.addCollection(o);let s=new Map;if(a.length>0){let e=a[0];for(let t of i)s.set(`${e}:${t.name}`,t.modeId)}let c=new Map;for(let[n,a]of Object.entries(t)){let t=se(),o=Am(a.type),l={};if(Array.isArray(a.value))for(let e of a.value)if(e.theme){let[t,n]=Object.entries(e.theme)[0],r=s.get(`${t}:${n}`);r&&(l[r]=jm(e.value,o))}else l[i[0].modeId]=jm(e.value,o);else l[i[0].modeId]=jm(a.value,o);for(let e of i)e.modeId in l||(l[e.modeId]=l[i[0].modeId]??Mm(o));let u={id:t,name:n,type:o,collectionId:r,valuesByMode:l,description:``,hiddenFromPublishing:!1};e.addVariable(u),c.set(n,{id:t,variable:u})}let l=i[0].modeId;function u(e){let t=c.get(e.replace(/^\$/,``));if(t)return t.variable.valuesByMode[l]??Object.values(t.variable.valuesByMode)[0]}return{byName:c,activeModeId:l,collectionId:r,modeByThemeName:s,resolveColor(e){let t=u(e);return t===void 0?$e(e):typeof t==`object`&&`r`in t?t:typeof t==`string`?$e(t):{...Ne}},resolveNumber(e){let t=u(e);return typeof t==`number`?t:0},resolveString(e){let t=u(e);return typeof t==`string`?t:``},setActiveTheme(t){let n=s.get(`theme:${t}`);n&&(l=n,e.activeMode.set(r,n))}}}function Lm(e,t){let n=typeof e==`string`?e:e.color;return Nm(n)?t.resolveColor(n):$e(n)}function Rm(e,t,n){return e===void 0?[]:(Array.isArray(e)?e:[e]).map((e,r)=>{let i=typeof e==`string`?!0:e.enabled!==!1,a=Lm(e,t),o={type:`SOLID`,visible:i,opacity:a.a,color:a};return n&&Fm(n,`fills[${r}]`,typeof e==`string`?e:e.color,t),o})}function zm(e){return typeof e.thickness==`number`?e.thickness:Math.max(...Object.values(e.thickness))}function Bm(e,t,n){if(!e?.fill)return[];let r=Nm(e.fill)?t.resolveColor(e.fill):$e(e.fill),i=`CENTER`;e.align===`inside`?i=`INSIDE`:e.align===`outside`&&(i=`OUTSIDE`);let a={visible:!0,color:r,opacity:r.a,weight:zm(e),align:i,dashPattern:[]};return n&&(Fm(n,`strokes[0]`,e.fill,t),typeof e.thickness==`object`&&(n.independentStrokeWeights=!0,n.borderTopWeight=e.thickness.top??0,n.borderRightWeight=e.thickness.right??0,n.borderBottomWeight=e.thickness.bottom??0,n.borderLeftWeight=e.thickness.left??0),n.strokeJoin=Vm(e.join),n.strokeCap=Hm(e.cap)),[a]}function Vm(e){return e===`round`?`ROUND`:e===`bevel`?`BEVEL`:`MITER`}function Hm(e){return e===`round`?`ROUND`:e===`square`?`SQUARE`:`NONE`}function Um(e){return e?(Array.isArray(e)?e:[e]).flatMap(e=>{if(e.type!==`shadow`)return[];let t=e.color?$e(e.color):{r:0,g:0,b:0,a:.25};return[{type:e.shadowType===`inner`?`INNER_SHADOW`:`DROP_SHADOW`,visible:!0,blendMode:`NORMAL`,color:t,offset:e.offset??{x:0,y:0},radius:e.blur??0,spread:e.spread??0}]}):[]}function Wm(e,t,n){if(t!==void 0){if(Array.isArray(t)){let r=t.map(e=>Km(e,0,n).value);e.independentCorners=!0,e.topLeftRadius=r[0]??0,e.topRightRadius=r[1]??0,e.bottomRightRadius=r[2]??0,e.bottomLeftRadius=r[3]??0;return}e.cornerRadius=Km(t,0,n).value}}function Gm(e,t,n){if(t===void 0)return;let r=e=>typeof e==`string`?Nm(e)&&n?n.resolveNumber(e):Number(e)||0:e;if(Array.isArray(t)){e.paddingTop=r(t[0]??0),e.paddingRight=r(t[1]??0),e.paddingBottom=r(t[2]??0),e.paddingLeft=r(t[3]??0);return}let i=r(t);e.paddingTop=i,e.paddingRight=i,e.paddingBottom=i,e.paddingLeft=i}function Km(e,t,n){if(e===void 0)return{value:t,sizing:`FIXED`};if(typeof e==`number`)return{value:e,sizing:`FIXED`};if(e===`fill_container`)return{value:t,sizing:`FILL`};if(e===`hug_content`)return{value:t,sizing:`HUG`};if(Nm(e)&&n)return{value:n.resolveNumber(e),sizing:`FIXED`};let r=Number(e);return{value:Number.isFinite(r)?r:t,sizing:`FIXED`}}function qm(e){return e.layout===`row`||e.layout===`horizontal`?`HORIZONTAL`:e.layout===`column`||e.layout===`vertical`?`VERTICAL`:`NONE`}function Jm(e){return e===`center`?`CENTER`:e===`end`?`MAX`:e===`space-between`?`SPACE_BETWEEN`:`MIN`}function Ym(e){return e===`center`?`CENTER`:e===`end`?`MAX`:e===`stretch`?`STRETCH`:`MIN`}function Xm(e){return e===`center`?`CENTER`:e===`right`||e===`end`?`RIGHT`:e===`justified`?`JUSTIFIED`:`LEFT`}function Zm(e){return e===`center`?`CENTER`:e===`bottom`||e===`end`?`BOTTOM`:`TOP`}function Qm(e){return typeof e==`number`?e:e===`thin`?100:e===`extralight`?200:e===`light`?300:e===`medium`?500:e===`semibold`?600:e===`bold`?700:e===`extrabold`?800:e===`black`?900:400}function $m(e){return e.type===`frame`?e.reusable?`COMPONENT`:`FRAME`:e.type===`rectangle`?`RECTANGLE`:e.type===`ellipse`?`ELLIPSE`:e.type===`text`||e.type===`icon_font`?`TEXT`:e.type===`path`?`VECTOR`:e.type===`ref`?`INSTANCE`:`FRAME`}function eh(e,t,n){if(e.vertices.length===0)return;let r=1/0,i=-1/0,a=1/0,o=-1/0;for(let t of e.vertices)r=Math.min(r,t.x),i=Math.max(i,t.x),a=Math.min(a,t.y),o=Math.max(o,t.y);let s=i-r,c=o-a;if(s<.01||c<.01)return;let l=t/s,u=n/c;if(!(Math.abs(l-1)<.01&&Math.abs(u-1)<.01)){for(let t of e.vertices)t.x=(t.x-r)*l,t.y=(t.y-a)*u;for(let t of e.segments)t.tangentStart={x:t.tangentStart.x*l,y:t.tangentStart.y*u},t.tangentEnd={x:t.tangentEnd.x*l,y:t.tangentEnd.y*u}}}function th(e,t){return e?Nm(e)?t.resolveString(e):e:`Inter`}function nh(e){return{id:e.id,name:e.name??(e.type===`icon_font`?e.iconFontName??`Icon`:e.type),x:e.x??0,y:e.y??0,visible:e.enabled!==!1,opacity:e.opacity??1,rotation:e.rotation??0,flipX:e.flipX??!1,flipY:e.flipY??!1,clipsContent:e.clip??!1,boundVariables:{}}}function rh(e,t,n,r,i,a){e.layoutMode=t,e.primaryAxisAlign=Jm(n.justifyContent),e.counterAxisAlign=Ym(n.alignItems),e.itemSpacing=typeof n.gap==`string`&&Nm(n.gap)&&a?a.resolveNumber(n.gap):n.gap??0,t===`VERTICAL`?(e.primaryAxisSizing=i,e.counterAxisSizing=r):(e.primaryAxisSizing=r,e.counterAxisSizing=i)}function ih(e,t,n){e.text=t.type===`icon_font`?t.iconFontName??``:t.content??``,e.fontFamily=t.type===`icon_font`?t.iconFontFamily??`Material Symbols Sharp`:th(t.fontFamily,n),e.fontSize=t.fontSize??14,e.fontWeight=Qm(t.fontWeight??(t.type===`icon_font`?t.weight:void 0)),e.textAlignHorizontal=Xm(t.textAlign),e.textAlignVertical=Zm(t.textAlignVertical),t.lineHeight!==void 0&&(e.lineHeight=t.lineHeight<5?t.lineHeight*e.fontSize:t.lineHeight),t.letterSpacing!==void 0&&(e.letterSpacing=t.letterSpacing),e.textAutoResize=t.textGrowth===`fixed-width`?`HEIGHT`:`WIDTH_AND_HEIGHT`,t.fontFamily&&Nm(t.fontFamily)&&Fm(e,`fontFamily`,t.fontFamily,n)}function ah(e,t){let n=e.type===`text`||e.type===`icon_font`,r=n?20:100,i=n&&e.width===void 0?1e4:r,a=Km(e.width,i,t),o=Km(e.height,r,t),s=qm(e);return e.width===void 0&&s!==`NONE`&&(a.sizing=`HUG`),e.height===void 0&&s!==`NONE`&&(o.sizing=`HUG`),{w:a,h:o,layout:s,isTextLike:n}}function oh(e,t,n){let r=e.layoutMode===`HORIZONTAL`;e.layoutMode=n.layoutMode,e.primaryAxisAlign=n.primaryAxisAlign,e.counterAxisAlign=n.counterAxisAlign;let i=e.layoutMode===`HORIZONTAL`;if(r!==i){let t=e.primaryAxisSizing;e.primaryAxisSizing=e.counterAxisSizing,e.counterAxisSizing=t}let a=i?`primaryAxisSizing`:`counterAxisSizing`,o=i?`counterAxisSizing`:`primaryAxisSizing`;t.width===void 0&&(e[a]=n[a]),t.height===void 0&&(e[o]=n[o]),t.gap===void 0&&(e.itemSpacing=n.itemSpacing),t.padding===void 0&&(e.paddingTop=n.paddingTop,e.paddingRight=n.paddingRight,e.paddingBottom=n.paddingBottom,e.paddingLeft=n.paddingLeft),t.clip===void 0&&(e.clipsContent=n.clipsContent)}function sh(e,t,n,r){n&&(t.fill===void 0&&n.fill!==void 0&&(e.fills=Rm(n.fill,r,e)),t.stroke===void 0&&n.stroke&&(e.strokes=Bm(n.stroke,r,e)),t.effect===void 0&&n.effect&&(e.effects=Um(n.effect)),t.cornerRadius===void 0&&Wm(e,n.cornerRadius,r))}function ch(e,t,n,r,i,a){if(!t.ref)return;let o=r.get(t.ref)??t.ref;e.componentId=o;let s=n.getNode(o);s&&(t.width===void 0&&(e.width=s.width),t.height===void 0&&(e.height=s.height),t.layout===void 0&&oh(e,t,s),sh(e,t,i.get(t.ref),a))}function lh(e,t,n,r,i){for(let a of e){if(a.type===`ref`){let e=t.getNode(a.id);e&&ch(e,a,t,n,r,i)}a.children&&lh(a.children,t,n,r,i)}}function uh(e,t){let n=Object.values(e)[0];n&&t.setActiveTheme(n)}function dh(e,t,n,r,i,a){if(e.type===`prompt`)return null;e.theme&&uh(e.theme,r);let{w:o,h:s,layout:c,isTextLike:l}=ah(e,r),u=nh(e);u.width=o.value,u.height=s.value;let d=n.getNode(t)?.layoutMode??`NONE`;c!==`NONE`&&rh(u,c,e,d===`NONE`&&o.sizing===`FILL`?`FIXED`:o.sizing,d===`NONE`&&s.sizing===`FILL`?`FIXED`:s.sizing,r);let f=n.createNode($m(e),t,u);if(e.fill!==void 0&&(f.fills=Rm(e.fill,r,f)),e.stroke&&(f.strokes=Bm(e.stroke,r,f)),f.effects=Um(e.effect),Wm(f,e.cornerRadius,r),Gm(f,e.padding,r),l&&(ih(f,e,r),d===`NONE`&&e.width===void 0&&!e.textGrowth&&(f.textAutoResize=`NONE`,f.width=f.text.length*f.fontSize*.65,f.height=f.fontSize*(f.lineHeight?f.lineHeight/f.fontSize:1.2))),e.type===`path`&&e.geometry){let t=at(e.geometry);f.vectorNetwork=t,eh(t,f.width,f.height)}if(d!==`NONE`){let e=d===`VERTICAL`;o.sizing===`FILL`&&(e?f.layoutAlignSelf=`STRETCH`:f.layoutGrow=1),s.sizing===`FILL`&&(e?f.layoutGrow=1:f.layoutAlignSelf=`STRETCH`)}if(e.reusable&&(i.set(e.id,f.id),a.set(e.id,e)),e.children)for(let t of e.children)dh(t,f.id,n,r,i,a);return f.id}function fh(e,t,n,r,i,a){if(a>2)return;let o=e.getNode(t);if(o)for(let t of o.childIds){let o=e.getNode(t);o&&(o.name===n&&o.type===r&&i.push(o),fh(e,t,n,r,i,a+1))}}function ph(e,t,n){let r=e.getNode(t);if(r)for(let t of r.childIds){let r=e.getNode(t);if(!r)continue;if(r.componentId===n)return r;let i=ph(e,t,n);if(i)return i}}function mh(e,t,n){let r=e.getNode(n);if(!r)return;let i=[];return fh(e,t,r.name,r.type,i,0),i.length===1?i[0]:void 0}function hh(e,t,n){t.fill!==void 0&&(e.fills=Rm(t.fill,n,e)),t.content!==void 0&&(e.text=t.content),t.x!==void 0&&(e.x=t.x),t.y!==void 0&&(e.y=t.y),t.enabled!==void 0&&(e.visible=t.enabled),t.width!==void 0&&(e.width=Km(t.width,e.width,n).value),t.height!==void 0&&(e.height=Km(t.height,e.height,n).value),t.rotation!==void 0&&(e.rotation=t.rotation),t.name!==void 0&&(e.name=t.name)}function gh(e){for(let t of e.getAllNodes())t.type===`INSTANCE`&&t.componentId&&t.childIds.length===0&&e.getNode(t.componentId)&&te(e,t.id,t.componentId)}function _h(e,t,n,r,i){if(t.type!==`ref`||!t.descendants)return;let a=e.getNode(t.id);if(a)for(let[o,s]of Object.entries(t.descendants)){let t=ph(e,a.id,o)??mh(e,a.id,o);if(t){if(s.children){let a=t.childIds.slice();for(let t of a)e.deleteNode(t);for(let a of s.children)dh(a,t.id,e,n,r,i)}hh(t,s,n);continue}s.type&&s.id&&dh(s,a.id,e,n,r,i)}}function vh(e,t,n,r,i){for(let a of e)_h(t,a,n,r,i),a.children&&vh(a.children,t,n,r,i)}function yh(e,t){for(let n of e)n.reusable&&t.set(n.id,n.id),n.children&&yh(n.children,t)}function bh(e,t,n){for(let[r,i]of Object.entries(e.boundVariables)){let a=t.variables.get(i);if(!a)continue;let o=a.valuesByMode[n.activeModeId]??Object.values(a.valuesByMode)[0];if(r.startsWith(`fills[`)&&typeof o==`object`&&`r`in o){let t=Number.parseInt(r.match(/\d+/)?.[0]??`0`,10);e.fills[t]&&(e.fills[t].color=o)}else if(r.startsWith(`strokes[`)&&typeof o==`object`&&`r`in o){let t=Number.parseInt(r.match(/\d+/)?.[0]??`0`,10);e.strokes[t]&&(e.strokes[t].color=o)}}for(let r of e.childIds){let e=t.getNode(r);e&&bh(e,t,n)}}function xh(e,t,n){for(let r of e){r.theme&&uh(r.theme,n);let e=t.getNode(r.id);e&&bh(e,t,n),r.children&&xh(r.children,t,n)}}function Sh(e){for(let t of e.getAllNodes()){if(t.type!==`INSTANCE`||!t.componentId)continue;let n=e.getNode(t.componentId);n&&(t.width<=100&&n.width>100&&(t.width=n.width),t.height<=100&&n.height>100&&(t.height=n.height),n.layoutGrow>0&&(t.layoutGrow=n.layoutGrow),n.layoutAlignSelf!==`AUTO`&&(t.layoutAlignSelf=n.layoutAlignSelf),t.fills=O(t.fills),t.strokes=k(t.strokes),t.effects=Je(t.effects))}}function Ch(e){for(let t of e.getAllNodes())t.type!==`TEXT`||!t.text||t.text.length<=1||t.width>=t.fontSize*2||(t.width=t.text.length*t.fontSize*.65)}function wh(e){let t=JSON.parse(e),n=new de;for(let e of n.getPages(!0))n.deleteNode(e.id);let r=Im(n,t.variables??{},t.themes??{}),i=new Map,a=new Map;yh(t.children,i);let o=n.addPage(t.children[0]?.name??`Page 1`);for(let e of t.children)dh(e,o.id,n,r,i,a);return lh(t.children,n,i,a,r),gh(n),vh(t.children,n,r,i,a),gh(n),xh(t.children,n,r),Sh(n),Ch(n),n.getPages(!0).length===0&&n.addPage(`Page 1`),n}function Th(e){return/\.([^.]+)$/.exec(e.toLowerCase())?.[1]??``}function Eh(e){return e.scope===`node`?e.nodeId:e.scope===`selection`&&e.nodeIds.length===1?e.nodeIds[0]:null}function Dh(e){switch(e.target.scope){case`document`:{let t=e.graph.getPages()[0];return{pageId:t.id,nodeIds:t.childIds}}case`page`:{let t=e.graph.getNode(e.target.pageId);return t?{pageId:t.id,nodeIds:t.childIds}:null}case`selection`:{let t=e.target.nodeIds[0];if(!t)return null;let n=fe(e.graph,t);if(!n)return null;if(!e.target.nodeIds.every(t=>fe(e.graph,t)===n))throw Error(`Export selection must stay on a single page`);return{pageId:n,nodeIds:e.target.nodeIds}}case`node`:return Dh({...e,target:{scope:`selection`,nodeIds:[e.target.nodeId]}});default:return null}}async function Oh(e,t,n){let r=Dh(e);if(!r)return null;let i=t.scale??1;return n?.canvasKit&&n.renderer?ue(n.canvasKit,n.renderer,e.graph,r.pageId,r.nodeIds,{scale:i,format:t.format,quality:t.quality,trimTransparent:e.target.scope===`page`||e.target.scope===`document`}):be(e.graph,r.pageId,r.nodeIds,{scale:i,format:t.format,quality:t.quality,trimTransparent:e.target.scope===`page`||e.target.scope===`document`})}function kh(e){let t=e===`JPG`?`jpg`:e.toLowerCase(),n=`image/png`;return e===`JPG`?n=`image/jpeg`:e===`WEBP`&&(n=`image/webp`),{id:t,label:e,role:`derived-export`,category:`raster`,extensions:[t],mimeTypes:[n],support:{exportDocument:!0,exportPage:!0,exportSelection:!0,exportNode:!0},exportOptions:{scale:!0,quality:e!==`PNG`,colorSpace:!1},async exportContent(r,i,a){let o=await Oh(r,{format:e,scale:i?.scale,quality:i?.quality},a);if(!o)throw Error(`Nothing to export`);return{format:t,mimeType:n,extension:t,data:o}}}}var Ah=[{id:`fig`,label:`OpenPencil Document`,role:`native-document`,category:`document`,extensions:[`fig`],mimeTypes:[`application/octet-stream`],support:{readDocument:!0,writeDocument:!0,exportDocument:!0,exportPage:!0,exportSelection:!0,exportNode:!0},exportOptions:{scale:!1,quality:!1},matchesFile(e){return Th(e)===`fig`},async readDocument(e){let t=e.data.slice().buffer;return{graph:await fm(t),sourceFormat:`fig`}},async writeDocument(e,t,n){return{format:`fig`,mimeType:`application/octet-stream`,extension:`fig`,data:await Em(e,n?.canvasKit,n?.renderer,t?.thumbnailPageId,t?.renderThumbnail??!1)}},async exportContent(e,t,n){let r=he(e.graph,e.target);return{format:`fig`,mimeType:`application/octet-stream`,extension:`fig`,data:await Em(r.graph,n?.canvasKit,n?.renderer,t?.thumbnailPageId??r.pageId??void 0,t?.renderThumbnail??!1)}}},{id:`pen`,label:`Pencil Document`,role:`interchange-document`,category:`document`,extensions:[`pen`],mimeTypes:[`application/json`,`text/plain`],support:{readDocument:!0},matchesFile(e,t){return Th(e)===`pen`||t===`application/json`},async readDocument(e){return{graph:wh(new TextDecoder().decode(e.data)),sourceFormat:`pen`}}},kh(`PNG`),kh(`JPG`),kh(`WEBP`),{id:`svg`,label:`SVG`,role:`derived-export`,category:`vector`,extensions:[`svg`],mimeTypes:[`image/svg+xml`],support:{exportDocument:!0,exportPage:!0,exportSelection:!0,exportNode:!0},exportOptions:{scale:!1,quality:!1,colorSpace:!0},async exportContent(e,t){let n=Dh(e);if(!n)throw Error(`Nothing to export`);let r=ot(e.graph,n.pageId,n.nodeIds,t);if(!r)throw Error(`Nothing to export`);return{format:`svg`,mimeType:`image/svg+xml`,extension:`svg`,data:r,encoding:`utf8`}}},{id:`pdf`,label:`PDF`,role:`derived-export`,category:`vector`,extensions:[`pdf`],mimeTypes:[`application/pdf`],support:{exportDocument:!0,exportPage:!0,exportSelection:!0,exportNode:!0},exportOptions:{scale:!1,quality:!1},async exportContent(e){let t=Dh(e);if(!t)throw Error(`Nothing to export`);let{renderNodesToPDF:n}=await E(async()=>{let{renderNodesToPDF:e}=await import(`./pdf-DAEk6AYF.js`);return{renderNodesToPDF:e}},__vite__mapDeps([14,9,7,8,10,11,12,13,15,16])),r=await n(e.graph,t.pageId,t.nodeIds);if(!r)throw Error(`Nothing to export`);return{format:`pdf`,mimeType:`application/pdf`,extension:`pdf`,data:r}}},{id:`jsx`,label:`JSX`,role:`derived-export`,category:`code`,extensions:[`jsx`],mimeTypes:[`text/plain`,`text/jsx`],support:{exportSelection:!0,exportNode:!0},exportOptions:{scale:!1,quality:!1},async exportContent(e,t){let n=t?.format??`openpencil`,r=Eh(e.target),i=``;if(r?i=nd(r,e.graph,n):e.target.scope===`selection`&&(i=rd(e.target.nodeIds,e.graph,n)),!i)throw Error(`Nothing to export`);return{format:`jsx`,mimeType:`text/plain`,extension:`jsx`,data:i,encoding:`utf8`}}}],jh=r();function Mh(t){jh.value=t,e(jh)}function Nh(){if(!jh.value)throw Error(`Editor store not provided`);return jh.value}function Ph(){return jh.value??null}var Fh=new Proxy({},{get(e,t){return Reflect.get(Nh(),t)}});function Ih(){return Fh}var Lh=null;function Rh(){return window.openPencil??={},window.openPencil.getStore??=()=>{if(!Lh)throw Error(`OpenPencil store not initialized`);return Lh},window.openPencil}function zh(e){Lh=e,Rh()}function Bh(e){Rh().setChatTransport=e}function Vh(e){Rh().openFile=e}function Hh(e,t){return t.scope===`node`?e.getNode(t.nodeId)?.name??`Export`:t.scope===`selection`&&t.nodeIds.length===1?e.getNode(t.nodeIds[0])?.name??`Export`:t.scope===`page`?e.getNode(t.pageId)?.name??`Page`:`Export`}function Uh(e,t){if(e===`png`||e===`jpg`||e===`webp`)return{format:e.toUpperCase(),scale:t?.scale??1,quality:t?.quality};if(e===`jsx`)return{format:t?.jsxFormat??`openpencil`}}function Wh(e,t,n,r){return t===`png`||t===`jpg`||t===`webp`?`${e}@${r?.scale??1}x.${n}`:`${e}.${n}`}function Gh(e){return typeof e==`string`?new TextEncoder().encode(e):new Uint8Array(e)}function Kh(e,t,n){async function r(n,r,i){let a=e.renderer;if(!a)return null;let o=n.length>0?n:e.graph.getChildren(t.currentPageId).map(e=>e.id);return o.length===0?null:ue(a.ck,a,e.graph,t.currentPageId,o,{scale:r,format:i})}function i(){let e=[...t.selectedIds];return e.length>0?{scope:`selection`,nodeIds:e}:{scope:`page`,pageId:t.currentPageId}}function a(){return n.listExportFormats(t.selectedIds.size>0?`selection`:`page`)}return{renderExportImage:r,getSelectionExportTarget:i,listSelectionExportFormats:a}}async function qh(e,t,n){let{save:r}=await E(async()=>{let{save:e}=await import(`./dist-js-B1lx7MJv.js`);return{save:e}},__vite__mapDeps([17,1]));return r({defaultPath:e,filters:[{name:t,extensions:[n.slice(1)]}]})}async function Jh(e,t){let{writeFile:n}=await E(async()=>{let{writeFile:e}=await import(`./dist-js-CLFAxZwM.js`);return{writeFile:e}},__vite__mapDeps([0,1,2]));await n(e,t)}async function Yh(e,t,n,r,i,a){if(D()){let i=await qh(t,n,r);if(!i)return;await Jh(i,e);return}if(window.showSaveFilePicker)try{let a=await(await window.showSaveFilePicker({suggestedName:t,types:[{description:`${n} file`,accept:{[i]:[r]}}]})).createWritable();await a.write(new Uint8Array(e)),await a.close();return}catch(e){if(e.name===`AbortError`)return}a(e,t,i)}function Xh(e,t,n,r){let{renderExportImage:i,getSelectionExportTarget:a,listSelectionExportFormats:o}=Kh(e,t,n);async function s(t,i,a){let o=n.getFormat(i);if(!o)throw Error(`Unknown export format: ${i}`);let s=Uh(i,a),c=await n.exportContent(i,{graph:e.graph,target:t},s,e.renderer?{canvasKit:e.renderer.ck,renderer:e.renderer}:void 0),l=Wh(Hh(e.graph,t),i,c.extension,a);await Yh(Gh(c.data),l,o.label,`.${c.extension}`,c.mimeType,r)}async function c(e,t){await s(a(),t,{scale:e})}return{renderExportImage:i,listSelectionExportFormats:o,exportTarget:s,exportSelection:c}}function Zh(){return new Promise(e=>{requestAnimationFrame(()=>e())})}function Qh(e,t){function n(e,n){t.width=e,t.height=n}async function r(){await Zh(),e.zoomToFit()}return{setViewportSize:n,fitCurrentPageToViewport:r}}function $h(e,t,n){let r=new Blob([e.buffer],{type:n}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=t,a.style.display=`none`,document.body.appendChild(a),a.click(),setTimeout(()=>{document.body.removeChild(a),URL.revokeObjectURL(i)},100)}async function eg(e,t){let n=t.getPages()[0];n&&j(t,n.id),e.replaceGraph(t),e.undo.clear(),e.clearSelection();let r=n?.id??e.graph.rootId;await e.switchPage(r)}async function tg({documentName:e,filePath:t,fileHandle:n}){if(t&&D()){let{readFile:n}=await E(async()=>{let{readFile:e}=await import(`./dist-js-CLFAxZwM.js`);return{readFile:e}},__vite__mapDeps([0,1,2])),r=await n(t),i=new Blob([r]);return pm(new File([i],`${e}.fig`),{populate:`first-page`})}return n?pm(await n.getFile(),{populate:`first-page`}):null}function ng(e){return{viewport:{panX:e.panX,panY:e.panY,zoom:e.zoom},pageId:e.currentPageId}}function rg(e,t,n){e.clearSelection(),e.graph.getNode(n.pageId)?t.currentPageId=n.pageId:t.currentPageId=e.graph.getPages()[0]?.id??e.graph.rootId,t.panX=n.viewport.panX,t.panY=n.viewport.panY,t.zoom=n.viewport.zoom}function ig({editor:e,state:t,setDocumentSource:n,fitCurrentPageToViewport:r}){async function i(i,a,o){try{t.loading=!0,await Zh();let s=await pm(i,{populate:`first-page`});await Zh(),await eg(e,s),t.documentName=i.name.replace(/\.fig$/i,``),n(i.name,`fig`,a,o),await r(),e.requestRender()}catch(e){console.error(`Failed to open .fig file:`,e),Fe.error(`Failed to open file: ${e instanceof Error?e.message:String(e)}`)}finally{t.loading=!1}}return{openFigFile:i}}function ag({editor:e,state:t,getFilePath:n,getFileHandle:r,setSavedVersion:i}){async function a(){let a=ng(t),o=n(),s=r(),c=await tg({documentName:t.documentName,filePath:o,fileHandle:s});if(!c)return;let l=c.getNode(a.pageId)?a.pageId:c.getPages()[0]?.id;l&&j(c,l),e.replaceGraph(c),e.undo.clear(),i(t.sceneVersion),rg(e,t,a),e.requestRender()}return{reloadFromDisk:a}}function og({state:e,getSavedVersion:t,hasWritableSource:n,saveCurrentDocument:r}){return{disposeAutosave:a(()=>e.sceneVersion,async i=>{if(i!==t()&&e.autosaveEnabled&&n())try{await r()}catch(e){console.warn(`Autosave failed:`,e)}},{debounce:3e3})}}function sg(e){return e.split(/[\\/]/).pop()?.replace(/\.fig$/i,``)??`Untitled`}function cg(e){return e.split(/[\\/]/).pop()??`Untitled.fig`}function lg(e,t){return t===`fig`?e:e.replace(/\.[^.]+$/i,`.fig`)}async function ug(){let{save:e}=await E(async()=>{let{save:e}=await import(`./dist-js-B1lx7MJv.js`);return{save:e}},__vite__mapDeps([17,1]));return e({defaultPath:`Untitled.fig`,filters:[{name:`Figma file`,extensions:[`fig`]}]})}async function dg(){if(!window.showSaveFilePicker)return null;try{return await window.showSaveFilePicker({suggestedName:`Untitled.fig`,types:[{description:`Figma file`,accept:{"application/octet-stream":[`.fig`]}}]})}catch(e){if(e.name===`AbortError`)return null;throw e}}function fg({state:e,getFilePath:t,getFileHandle:n,setSavedVersion:r,setLastWriteTime:i}){return async function(a){i(Date.now());let o=t(),s=n();if(o&&D()){let{writeFile:t}=await E(async()=>{let{writeFile:e}=await import(`./dist-js-CLFAxZwM.js`);return{writeFile:e}},__vite__mapDeps([0,1,2]));await t(o,a),r(e.sceneVersion);return}if(s){let t=await s.createWritable();await t.write(new Uint8Array(a)),await t.close(),r(e.sceneVersion)}}}function pg({state:e,buildFigFile:t,getFilePath:n,setFilePath:r,getFileHandle:i,setFileHandle:a,getDownloadName:o,setDownloadName:s,setSavedVersion:c,setLastWriteTime:l,startWatchingFile:u}){let d=fg({state:e,getFilePath:n,getFileHandle:i,setSavedVersion:c,setLastWriteTime:l});async function f(){let e=n(),r=i(),a=o();e||r?await d(await t()):a?$h(new Uint8Array(await t()),a,`application/octet-stream`):await p()}async function p(){let n=await t();if(je){let t=await ug();if(!t)return;r(t),a(null),e.documentName=sg(t),await d(n),u();return}if(window.showSaveFilePicker){let t=await dg();if(!t)return;a(t),r(null),e.documentName=sg(t.name),await d(n),u();return}let i=prompt(`Save as:`,o()??`Untitled.fig`);i&&(s(i),e.documentName=sg(i),$h(new Uint8Array(n),i,`application/octet-stream`))}return{saveFigFile:f,saveFigFileAs:p,writeFile:d}}function mg(){let e=null,t=null,n=null,r=0,i=0;return{getFileHandle:()=>e,setFileHandle:t=>{e=t},getFilePath:()=>t,setFilePath:e=>{t=e},getDownloadName:()=>n,setDownloadName:e=>{n=e},getSavedVersion:()=>r,setSavedVersion:e=>{r=e},getLastWriteTime:()=>i,setLastWriteTime:e=>{i=e}}}function hg({editor:e,state:t,stopWatchingFile:n,startWatchingFile:r,getFileHandle:i,setFileHandle:a,getFilePath:o,setFilePath:s,getDownloadName:c,setDownloadName:l,getSavedVersion:u,setSavedVersion:d,setLastWriteTime:f,getRenderer:p}){function m(){return Em(e.graph,void 0,p()??void 0,t.currentPageId)}let{saveFigFile:h,saveFigFileAs:g,writeFile:_}=pg({state:t,buildFigFile:m,getFilePath:o,setFilePath:s,getFileHandle:i,setFileHandle:a,getDownloadName:c,setDownloadName:l,setSavedVersion:d,setLastWriteTime:f,startWatchingFile:()=>{r()}}),{disposeAutosave:v}=og({state:t,getSavedVersion:u,hasWritableSource:()=>!!i()||!!o(),saveCurrentDocument:async()=>_(await m())});function y(e,i,o,c){n();let u=i===`fig`;a(u?o??null:null),s(u?c??null:null),l(lg(e,i)),d(t.sceneVersion),u&&(o||c)&&r()}function b(e){n(),a(null),s(e);let r=cg(e);l(r),t.documentName=sg(r)}function x(){r()}function S(){n(),v()}return{setDocumentSource:y,setPlannedFilePath:b,startWatchingCurrentFile:x,disposeDocumentIO:S,saveFigFile:h,saveFigFileAs:g}}var gg=1e3,_g=2e3,vg=500;async function yg(e,t,n){let{watch:r}=await E(async()=>{let{watch:e}=await import(`./dist-js-CLFAxZwM.js`);return{watch:e}},__vite__mapDeps([0,1,2])),i=await r(e,e=>{typeof e.type!=`object`||!(`modify`in e.type)||Date.now()-t()<gg||n()},{delayMs:vg});return()=>i()}async function bg(e,t,n,r,a){let o=(await e.getFile()).lastModified,{pause:s,resume:c}=i(()=>{l(e)},_g,{immediate:!1});c();async function l(e){if(t()!==e){a();return}try{let t=await e.getFile();if(t.lastModified>o){if(o=t.lastModified,Date.now()-n()<gg)return;r()}}catch{a()}}return s}function xg({getFilePath:e,getFileHandle:t,getLastWriteTime:n,reloadFromDisk:r}){let i=null;function a(){i&&=(i(),null)}async function o(){a();let o=e(),s=t();o&&je?i=await yg(o,n,r):s&&(i=await bg(s,t,n,r,a))}return{startWatchingFile:o,stopWatchingFile:a}}function Sg(e,t,n){let r=mg();tc();let{reloadFromDisk:i}=ag({editor:e,state:t,getFilePath:r.getFilePath,getFileHandle:r.getFileHandle,setSavedVersion:r.setSavedVersion}),{startWatchingFile:a,stopWatchingFile:o}=xg({getFilePath:r.getFilePath,getFileHandle:r.getFileHandle,getLastWriteTime:r.getLastWriteTime,reloadFromDisk:()=>{i()}}),{setViewportSize:s,fitCurrentPageToViewport:c}=Qh(e,n),l=hg({editor:e,state:t,stopWatchingFile:o,startWatchingFile:a,getRenderer:()=>e.renderer,...r}),{openFigFile:u}=ig({editor:e,state:t,setDocumentSource:l.setDocumentSource,fitCurrentPageToViewport:c});return{downloadBlob:$h,setViewportSize:s,fitCurrentPageToViewport:c,setDocumentSource:l.setDocumentSource,setPlannedFilePath:l.setPlannedFilePath,startWatchingCurrentFile:l.startWatchingCurrentFile,disposeDocumentIO:l.disposeDocumentIO,openFigFile:u,saveFigFile:l.saveFigFile,saveFigFileAs:l.saveFigFileAs}}function Cg(e,t){let n=0;function r(){if(!e.renderer?.hasActiveFlashes){n=0;return}t.renderVersion++,n=requestAnimationFrame(r)}function i(t){let i=e.renderer;if(i){for(let e of t)i.flashNode(e);n||r()}}function a(t){e.renderer&&(e.renderer.aiMarkActive(t),n||r())}function o(t){e.renderer&&(e.renderer.aiMarkDone(t),n||r())}function s(t){e.renderer&&(e.renderer.aiFlashDone(t),n||r())}function c(){e.renderer?.aiClearAll()}return{flashNodes:i,aiMarkActive:a,aiMarkDone:o,aiFlashDone:s,aiClearAll:c}}function wg(e,t){async function n(){let n=new DataTransfer;await e.writeCopyData(n),t.clipboardHtml=n.getData(`text/html`)}async function r(){await n(),e.deleteSelected()}function i(){t.clipboardHtml&&e.pasteFromHTML(t.clipboardHtml)}return{mobileCopy:n,mobileCut:r,mobilePaste:i}}function Tg(e,t){return t.map(t=>({...t,x:t.x+e.x,y:t.y+e.y}))}function Eg(e){return e.map(e=>({...e,tangentStart:{...e.tangentStart},tangentEnd:{...e.tangentEnd}}))}function Dg(e,t,n){return{vertices:t,segments:n,dragTangent:null,oppositeDragTangent:null,closingToFirst:!1,pendingClose:!1,resumingNodeId:e.id,resumedFills:[...e.fills],resumedStrokes:[...e.strokes]}}function Og(e,t){let n=t,r=new Set([t]);for(;;){let t=!1;for(let i of e){let e=-1;if(i.start===n&&!r.has(i.end)?e=i.end:i.end===n&&!r.has(i.start)&&(e=i.start),e!==-1){r.add(e),n=e,t=!0;break}}if(!t)break}return n}function kg(e,t,n){let r=[],i=[],a=new Set,o=n;for(r.push(e[o]),a.add(o);;){let n=!1;for(let s of t){let t=-1,c=!1;if(s.start===o&&!a.has(s.end)?(t=s.end,c=!0):s.end===o&&!a.has(s.start)&&(t=s.start),t===-1)continue;let l=r.length-1;r.push(e[t]);let u=r.length-1;i.push({start:l,end:u,tangentStart:c?{...s.tangentStart}:{...s.tangentEnd},tangentEnd:c?{...s.tangentEnd}:{...s.tangentStart}}),a.add(t),o=t,n=!0;break}if(!n)break}return{orderedVertices:r,orderedSegments:i}}function Ag(e,t,n){function r(t){n.penState&&t!==`PEN`&&t!==`HAND`&&e.penCommit(!1),e.setTool(t)}function i(r){let i=t.getNode(r);i?.type!==`VECTOR`||!i.vectorNetwork||(n.penState=Dg(i,Tg(i,i.vectorNetwork.vertices),Eg(i.vectorNetwork.segments)),t.deleteNode(r),e.clearSelection(),e.setTool(`PEN`),e.requestRender())}function a(r,i){let a=t.getNode(r);if(a?.type!==`VECTOR`||!a.vectorNetwork)return;let o=Tg(a,a.vectorNetwork.vertices),s=Eg(a.vectorNetwork.segments),{orderedVertices:c,orderedSegments:l}=kg(o,s,Og(s,i));n.penState=Dg(a,c,l),t.deleteNode(r),e.clearSelection(),e.setTool(`PEN`),e.requestRender()}return{setTool:r,penResumeOnPath:i,penResumeFromEndpoint:a}}function jg(e){function t(){let e=document.querySelector(`[data-test-id="canvas-element"]`);if(e){let t=e.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2}}return{x:window.innerWidth/2,y:window.innerHeight/2}}function n(){let e=document.querySelector(`[data-test-id="canvas-element"]`);if(e){let t=e.getBoundingClientRect();return{x:t.width/2,y:t.height/2}}return{x:window.innerWidth/2,y:window.innerHeight/2}}function r(){let t=!(e.renderer?.profiler.hudVisible??!1);for(let n of e.canvasRenderers)n.profiler.setVisible(t);e.requestRepaint()}return{viewportScreenCenter:t,viewportCanvasCenter:n,toggleProfiler:r}}function Mg(e,t,n){return Math.hypot(e.x,e.y)>1e-6?e:{x:t.x-n.x,y:t.y-n.y}}function Ng(e,t,n,r){let i=t[0],a=Math.hypot(n.x,n.y);if(a<=1e-6)return i;let o={x:n.x/a,y:n.y/a},s=1/0;for(let n of t){let t=e.segments[n.segmentIndex],a=e.vertices[r],c=e.vertices[n.neighborIndex],l=Mg(t[n.tangentField],c,a),u=Math.hypot(l.x,l.y);if(u<1e-6)continue;let d={x:l.x/u,y:l.y/u},f=o.x*d.x+o.y*d.y;f<s&&(s=f,i=n)}return i}function Pg(e,t,n,r,i,a,o,s){let c=r.filter(e=>!(e.segmentIndex===n.segmentIndex&&e.tangentField===n.tangentField));if(c.length===0)return null;let l=e.vertices[n.neighborIndex],u=Ng(e,c,Mg(i[a],l,s),o),d=e.segments[u.segmentIndex],f=e.vertices[u.neighborIndex],p=Mg(d[u.tangentField],f,s),m=Math.hypot(p.x,p.y);if(m<=1e-6)return null;let h={x:-p.x/m,y:-p.y/m},g=Math.max(0,t.x*h.x+t.y*h.y);return s.handleMirroring=`ANGLE`,{x:h.x*g,y:h.y*g}}function Fg(e,t){e.vertices=t.vertices.map(e=>({...e})),e.segments=t.segments.map(e=>({...e,tangentStart:{...e.tangentStart},tangentEnd:{...e.tangentEnd}})),e.regions=t.regions.map(e=>({windingRule:e.windingRule,loops:e.loops.map(e=>[...e])}))}function Q(e){return{vertices:e.vertices.map(e=>({...e})),segments:e.segments.map(e=>({...e,tangentStart:{...e.tangentStart},tangentEnd:{...e.tangentEnd}})),regions:e.regions.map(e=>({windingRule:e.windingRule,loops:e.loops.map(e=>[...e])}))}}function Ig(e,t,n){function r(t,r){let i=n();if(!i||t===r||t<0||r<0||t>=i.vertices.length||r>=i.vertices.length)return;let a=t,o=r,s=e=>e===a?o:e>a?e-1:e;Fg(i,{vertices:i.vertices.filter((e,t)=>t!==a),segments:i.segments.map(e=>({...e,tangentStart:{...e.tangentStart},tangentEnd:{...e.tangentEnd},start:s(e.start),end:s(e.end)})).filter(e=>e.start!==e.end),regions:[]}),i.selectedVertexIndices=new Set([s(o)]),i.selectedHandles=new Set,e.requestRender()}function i(r,i){let a=n();if(!a)return;let o=Q(a),s=S(r,i,o,8/t.zoom);if(!s)return;let c=ie(o,s.segmentIndex,s.t);Fg(a,c.network),a.selectedVertexIndices=new Set([c.newVertexIndex]),a.selectedHandles=new Set,e.requestRender()}function a(t){let r=n();if(!r)return;let i=ne(Q(r),t);i&&(Fg(r,i),r.selectedVertexIndices=new Set,r.selectedHandles=new Set,e.requestRender())}return{nodeEditConnectEndpoints:r,nodeEditAddVertex:i,nodeEditRemoveVertex:a}}function Lg(e,t){function n(n,r,i,a){let o=t();if(!o)return;let s=o.segments[n],c=a?.breakMirroring??!1,l=a?.continuous??!1,u=a?.lockDirection??!1,d=r===`tangentStart`?s.start:s.end,f=o.vertices[d],p=Q(o),m=g(p,d),h=m.find(e=>e.segmentIndex===n&&e.tangentField===r),_={x:i.x,y:i.y};l&&h&&(_=Pg(o,i,h,m,s,r,d,f)??_),s[r]=_;let v=f.handleMirroring??`NONE`;if(u&&v===`NONE`){s[r]={x:i.x,y:i.y},e.requestRepaint();return}if(c){f.handleMirroring=`NONE`,e.requestRepaint();return}if(v===`NONE`){e.requestRepaint();return}let y=re(p,d,n);if(!y){e.requestRepaint();return}let x=o.segments[y.segmentIndex],S=x[y.tangentField],C=v===`ANGLE`?Math.hypot(S.x,S.y):void 0,w=b(_,v,C);w&&(x[y.tangentField]=w),e.requestRepaint()}function r(n,r,i,a,o,s){let c=t();if(!c||o==null||s==null)return;let l=g(Q(c),n);if(l.length===0)return;let u=l.filter(e=>e.segmentIndex===o&&e.tangentField===s);if(u.length===0)return;let d={x:r,y:i},f=a?{x:r,y:i}:{x:-r,y:-i},p=u[0];c.segments[p.segmentIndex][p.tangentField]=d;for(let e=1;e<u.length;e++){let t=u[e];c.segments[t.segmentIndex][t.tangentField]=d}if(!a)for(let e of l)u.includes(e)||(c.segments[e.segmentIndex][e.tangentField]=f);c.vertices[n].handleMirroring=a?`NONE`:`ANGLE_AND_LENGTH`,e.requestRepaint()}function i(n){let r=t();if(!r)return;let i=g(Q(r),n);for(let e of i)r.segments[e.segmentIndex][e.tangentField]={x:0,y:0};r.vertices[n].handleMirroring=`NONE`,e.requestRepaint()}return{nodeEditSetHandle:n,nodeEditBendHandle:r,nodeEditZeroVertexHandles:i}}function Rg(e,t,n){function r(){return n.nodeEditState}function i(n){let r=t.getNode(n.nodeId);if(r?.type!==`VECTOR`)return;let i=Q(n),a=y(i),o={vertices:i.vertices.map(e=>({...e,x:e.x-a.x,y:e.y-a.y})),segments:i.segments,regions:i.regions};t.updateNode(r.id,{x:a.x,y:a.y,width:a.width,height:a.height,vectorNetwork:o}),e.requestRender()}function a(r){let i=t.getNode(r);if(i?.type!==`VECTOR`||!i.vectorNetwork)return;let a=i.vectorNetwork.vertices.map(e=>({...e,x:e.x+i.x,y:e.y+i.y}));n.nodeEditState={nodeId:r,origNetwork:xe(i.vectorNetwork),origBounds:{x:i.x,y:i.y,width:i.width,height:i.height},vertices:a,segments:i.vectorNetwork.segments.map(e=>({...e,tangentStart:{...e.tangentStart},tangentEnd:{...e.tangentEnd}})),regions:i.vectorNetwork.regions.map(e=>({windingRule:e.windingRule,loops:e.loops.map(e=>[...e])})),selectedVertexIndices:new Set,draggedHandleInfo:null,selectedHandles:new Set,hoveredHandleInfo:null},e.select([r]),e.requestRender()}function o(a){let o=r();if(o){if(t.getNode(o.nodeId)?.type!==`VECTOR`){n.nodeEditState=null,e.requestRender();return}a?i(o):(t.updateNode(o.nodeId,{x:o.origBounds.x,y:o.origBounds.y,width:o.origBounds.width,height:o.origBounds.height,vectorNetwork:xe(o.origNetwork)}),e.requestRender()),n.nodeEditState=null}}return{getNodeEditState:r,applyNodeEditToNode:i,enterNodeEditMode:a,exitNodeEditMode:o}}function zg(e,t){function n(){return t.nodeEditState}function r(t,r){let i=n();if(i){if(r){let e=new Set(i.selectedVertexIndices);e.has(t)?e.delete(t):e.add(t),i.selectedVertexIndices=e}else i.selectedVertexIndices=new Set([t]);e.requestRepaint()}}function i(t,r){let i=n();if(!i||i.selectedVertexIndices.size<2)return;let a=[...i.selectedVertexIndices],o=t===`horizontal`?`x`:`y`,s=1/0,c=-1/0;for(let e of a){let t=i.vertices[e][o];t<s&&(s=t),t>c&&(c=t)}let l=(s+c)/2;r===`min`?l=s:r===`max`&&(l=c);for(let e of a)i.vertices[e]={...i.vertices[e],[o]:l};e.requestRepaint()}function a(){let t=n();if(!t)return;let r=Q(t);for(let e of t.selectedHandles){let[t,n]=e.split(`:`),i=Number(t),a=r.segments[i];n===`tangentStart`?a.tangentStart={x:0,y:0}:a.tangentEnd={x:0,y:0}}let i=[...t.selectedVertexIndices].sort((e,t)=>t-e);for(let e of i){let t=Ce(r,e);if(!t)break;r=t}Fg(t,r),t.selectedVertexIndices=new Set,t.selectedHandles=new Set,e.requestRender()}function o(){let t=n();if(!t||t.selectedVertexIndices.size===0)return;let[r]=t.selectedVertexIndices;Fg(t,T(Q(t),r)),t.selectedHandles=new Set,t.selectedVertexIndices=new Set([r]),e.requestRender()}return{nodeEditSelectVertex:r,nodeEditAlignVertices:i,nodeEditDeleteSelected:a,nodeEditBreakAtVertex:o}}function Bg(e,t,n){let{getNodeEditState:r,applyNodeEditToNode:i,enterNodeEditMode:a,exitNodeEditMode:o}=Rg(e,t,n),{nodeEditSelectVertex:s,nodeEditAlignVertices:c,nodeEditDeleteSelected:l,nodeEditBreakAtVertex:u}=zg(e,n),{nodeEditSetHandle:d,nodeEditBendHandle:f,nodeEditZeroVertexHandles:p}=Lg(e,r),{nodeEditConnectEndpoints:m,nodeEditAddVertex:h,nodeEditRemoveVertex:g}=Ig(e,n,r);return{getNodeEditState:r,setNodeEditNetwork:Fg,getLiveNetwork:Q,applyNodeEditToNode:i,enterNodeEditMode:a,exitNodeEditMode:o,nodeEditSelectVertex:s,nodeEditSetHandle:d,nodeEditBendHandle:f,nodeEditZeroVertexHandles:p,nodeEditConnectEndpoints:m,nodeEditAddVertex:h,nodeEditRemoveVertex:g,nodeEditAlignVertices:c,nodeEditDeleteSelected:l,nodeEditBreakAtVertex:u}}function Vg(e,t){Object.defineProperties(e,{graph:{enumerable:!0,get:()=>t.graph},renderer:{enumerable:!0,get:()=>t.renderer},textEditor:{enumerable:!0,get:()=>t.textEditor}})}function Hg(e,t){let r=n(()=>(t.sceneVersion,e.getSelectedNodes()));return{selectedNodes:r,selectedNode:n(()=>r.value.length===1?r.value[0]:void 0),layerTree:n(()=>(t.sceneVersion,e.getLayerTree()))}}function Ug(e,t,n,r,i){let a=Cg(e,n),o=Ag(e,t,n),s=Bg(e,t,n),c=Sg(e,n,i),l=Xh(e,n,r,c.downloadBlob),u=wg(e,n),d=jg(e);return{...a,...o,...s,openFigFile:c.openFigFile,setViewportSize:c.setViewportSize,fitCurrentPageToViewport:c.fitCurrentPageToViewport,saveFigFile:c.saveFigFile,saveFigFileAs:c.saveFigFileAs,setDocumentSource:c.setDocumentSource,setPlannedFilePath:c.setPlannedFilePath,startWatchingCurrentFile:c.startWatchingCurrentFile,dispose:c.disposeDocumentIO,...l,...u,...d}}function Wg(e){return{...op(e),showUI:!0,showRulers:!0,showRemoteCursors:!0,activeRibbonTab:`panels`,panelMode:`design`,actionToast:null,mobileDrawerSnap:`closed`,clipboardHtml:``,autosaveEnabled:!1,cursorCanvasX:null,cursorCanvasY:null,nodeEditState:null,scrubInputFocused:!1}}function Gg(e){let n=e??new de,r=t(Wg(n.getPages()[0].id)),i={width:0,height:0},a=Ip({graph:n,state:r,loadFont:nn,skipInitialGraphSetup:!!e,getViewportSize:()=>i.width>0&&i.height>0?i:{width:window.innerWidth,height:window.innerHeight}}),o=new Lp(Ah);e&&a.subscribeToGraph();let{selectedNodes:s,selectedNode:c,layerTree:l}=Hg(a,r),u=Ug(a,n,r,o,i),d={...a,state:r,selectedNodes:s,selectedNode:c,layerTree:l,...u};return Vg(d,a),d}var Kg=new Lp(Ah),qg=1;function Jg(){return`tab-${qg++}`}var $=r([]),Yg=r(``),Xg=n(()=>$.value.find(e=>e.id===Yg.value)),Zg=n(()=>$.value.map(e=>({id:e.id,name:e.store.state.documentName,isActive:e.id===Yg.value})));function Qg(){let e=$.value.find(e=>e.id===Yg.value);if(!e)throw Error(`No active tab`);return e.store}function $g(e,t){let n=e??Gg(t),r={id:Jg(),store:n};return $.value=[...$.value,r],e_(r),r}function e_(t){Yg.value=t.id,Mh(t.store),e($),zh(t.store)}function t_(e){let t=$.value.find(t=>t.id===e);t&&e_(t)}function n_(e){let t=$.value.findIndex(t=>t.id===e);if(t===-1)return;let n=$.value[t],r=Yg.value===e;if($.value=$.value.filter(t=>t.id!==e),$.value.length===0){$g(),n.store.dispose();return}if(r){let e=Math.min(t,$.value.length-1);e_($.value[e])}n.store.dispose()}function r_(){return new Promise(e=>{requestAnimationFrame(()=>e())})}async function i_(e,t,n){let r=Xg.value,i=r?.store.state.documentName===`Untitled`&&!r.store.undo.canUndo?r.store:$g().store,a=e.name.replace(/\.[^.]+$/i,``);i.state.documentName=a,i.state.loading=!0,await r_();try{let{graph:r,sourceFormat:a}=e.name.toLowerCase().endsWith(`.fig`)?{graph:await pm(e,{populate:`first-page`}),sourceFormat:`fig`}:await Kg.readDocument({name:e.name,mimeType:e.type||void 0,data:new Uint8Array(await e.arrayBuffer())}),o=r.getPages()[0]?.id;o&&j(r,o),i.replaceGraph(r),i.undo.clear(),i.setDocumentSource(e.name,a,t,n),i.clearSelection();let s=i.graph.getPages()[0]?.id??i.graph.rootId;await i.switchPage(s),await i.fitCurrentPageToViewport()}finally{i.state.loading=!1}}function a_(){return $.value.length}function o_(){return{tabs:Zg,activeTabId:Yg,createTab:$g,switchTab:t_,closeTab:n_,openFileInNewTab:i_,getActiveStore:Qg,tabCount:a_}}export{qt as A,zt as C,Kt as D,nn as E,wt as M,Xt as O,en as S,$t as T,af as _,Qg as a,Yt as b,a_ as c,Vh as d,Nh as f,Lp as g,Ah as h,$g as i,Ct as j,Gt as k,o_ as l,Ih as m,Zg as n,i_ as o,Ph as p,n_ as r,t_ as s,Xg as t,Bh as u,nd as v,Qt as w,Jt as x,rd as y};