const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/esm-CddszvWY.js","assets/esm-DBqzbRXU.js","assets/raster-ARN12cWw.js","assets/raster-CSAu7Fmj.js","assets/chunk-zsgVPwQN.js","assets/preload-helper-DTQI3te8.js","assets/opentype-2tc6DBg6.js","assets/src-D7trKv0O.js","assets/constants-iigx914t.js","assets/management-Dr24ewWl.js","assets/subgraph-Dw-ElaH0.js","assets/core-CbiB8nbm.js","assets/core-DamlX1SP.js","assets/pdf-pR5dG-J6.js","assets/svg-FJ6DAjr9.js","assets/svg-DfJfQ4Yu.js","assets/svgpath-DV_H-ktM.js","assets/color-CN68iDF6.js","assets/pptx-cOxtpbu3.js","assets/dist-js-Cb84B2KY.js","assets/path-VUOH-KO6.js","assets/http-fzHsG18k.js","assets/http-g2_4Yjsq.js","assets/cors-DicE5pcj.js","assets/cors-Dw0EzQC_.js","assets/constants-DZIzQEG_.js","assets/dist-js--UrKkpvq.js"])))=>i.map(i=>d[i]);
import{a as e,o as t,t as n}from"./chunk-zsgVPwQN.js";import{Ct as r,Q as i,gt as a,ht as o,m as s,vt as c}from"./vue.runtime.esm-bundler-Sl3dDxN4.js";import{B as l,U as u,h as d}from"./dist-BnIcXBnv.js";import{_ as f,a as p,o as m,p as h,r as g,s as _}from"./opentype-2tc6DBg6.js";import{$ as v,B as y,C as b,D as x,G as S,H as C,J as w,K as T,O as E,Q as D,R as O,U as k,V as A,X as j,Y as M,Z as N,_ as P,at as F,b as ee,c as te,ct as ne,et as I,f as re,h as L,i as ie,it as ae,l as R,lt as oe,n as se,nt as ce,p as le,q as ue,r as de,rt as fe,st as pe,t as me,tt as he,u as ge,y as _e,z as ve}from"./src-D7trKv0O.js";import{C as ye,H as be,J as xe,O as Se,T as Ce,V as we,X as Te,Y as Ee,f as De,k as z,p as Oe}from"./constants-iigx914t.js";import{A as ke,C as Ae,E as je,O as Me,S as Ne,T as Pe,_ as Fe,b as Ie,c as Le,d as Re,f as ze,g as Be,h as Ve,j as He,k as Ue,l as We,m as Ge,o as Ke,s as qe,t as Je,u as Ye,v as Xe,w as Ze,x as Qe,y as $e}from"./raster-CSAu7Fmj.js";import{t as B}from"./preload-helper-DTQI3te8.js";import{r as et}from"./esm-DBqzbRXU.js";import{a as tt,i as nt,n as rt,o as it,r as at,t as ot}from"./subgraph-Dw-ElaH0.js";import{a as st,b as ct,c as lt,d as ut,f as dt,p as ft,s as pt,u as mt,y as ht}from"./management-Dr24ewWl.js";import{n as gt,t as _t}from"./empty-node-module-CKXDFh-P.js";import{r as vt,t as yt}from"./random-BUyZYhR6.js";import{a as bt,i as xt,n as St,r as Ct,t as wt}from"./layout-8rWF_Ljx.js";import{a as Tt,c as Et,i as Dt,l as Ot,n as kt,o as At,r as jt}from"./svg-FJ6DAjr9.js";import{a as Mt,c as Nt,s as Pt}from"./svg-DfJfQ4Yu.js";import{c as Ft,o as It,r as Lt}from"./color-CN68iDF6.js";import{a as Rt,i as zt}from"./ui-Cu0IIj2w.js";import{t as Bt}from"./http-g2_4Yjsq.js";import{i as Vt}from"./core-DamlX1SP.js";import{a as Ht,n as Ut,o as Wt}from"./cors-Dw0EzQC_.js";import{t as Gt}from"./browser-Bk1YPhrr.js";var Kt=class{ck;renderer=null;_state=null;paragraphNode=null;caretVisible=!0;constructor(e){this.ck=e}prepareMove(e){let t=this._state;return t?(e&&t.selectionAnchor===null&&(t.selectionAnchor=t.cursor),e||(t.selectionAnchor=null),t):null}replaceRange(e,t,n){let r=this._state;return r?(r.text=r.text.slice(0,e)+n+r.text.slice(t),r.cursor=e+n.length,r.selectionAnchor=null,r):null}currentLineMetrics(){let e=this._state;if(!e?.paragraph)return null;let t=e.paragraph.getLineNumberAt(e.cursor);return t<0?null:e.paragraph.getLineMetricsAt(t)}collapseSelectionTo(e){let t=this._state;if(!t||!this.hasSelection())return!1;let n=this.getSelectionRange();return n&&(t.cursor=n[e]),t.selectionAnchor=null,!0}get state(){let e=this._state;return e&&this.renderer&&this.paragraphNode&&e.paragraphFontGeneration!==this.renderer.fontGeneration&&this.rebuildParagraph(this.paragraphNode),e}get isActive(){return this._state!==null}get nodeId(){return this._state?.nodeId??null}setRenderer(e){this.renderer=e}start(e){this._state={nodeId:e.id,text:e.text,cursor:e.text.length,selectionAnchor:null,paragraph:null,paragraphFontGeneration:-1,textDirection:f(e)},this.rebuildParagraph(e)}stop(){if(!this._state)return null;let e={nodeId:this._state.nodeId,text:this._state.text};return this._state.paragraph?.delete(),this._state=null,this.paragraphNode=null,e}rebuildParagraph(e){let t=this._state;!t||!this.renderer||(t.paragraph?.delete(),this.paragraphNode=e,t.textDirection=f(e),t.paragraph=this.renderer.buildParagraph({...e,text:t.text}),t.paragraphFontGeneration=this.renderer.fontGeneration)}hasSelection(){let e=this._state;return e!==null&&e.selectionAnchor!==null&&e.selectionAnchor!==e.cursor}getSelectionRange(){let e=this._state;return!e||e.selectionAnchor===null||e.selectionAnchor===e.cursor?null:[Math.min(e.cursor,e.selectionAnchor),Math.max(e.cursor,e.selectionAnchor)]}getSelectedText(){let e=this.getSelectionRange();return!e||!this._state?``:this._state.text.slice(e[0],e[1])}selectAll(){let e=this._state;e&&(e.selectionAnchor=0,e.cursor=e.text.length)}selectWord(e){let t=this._state;if(!t)return;let n=t.text,r=e,i=e;for(;r>0&&!qt(n[r-1]);)r--;for(;i<n.length&&!qt(n[i]);)i++;t.selectionAnchor=r,t.cursor=i}setCursorAt(e,t,n=!1){let r=this._state;if(!r?.paragraph)return;let i=r.paragraph.getGlyphPositionAtCoordinate(e,t).pos;n?r.selectionAnchor===null&&(r.selectionAnchor=r.cursor):r.selectionAnchor=null,r.cursor=i}selectLine(e){let t=this._state;if(!t?.paragraph)return;let n=t.paragraph.getLineNumberAt(e);if(n<0)return;let r=t.paragraph.getLineMetricsAt(n);r&&(t.selectionAnchor=r.startIndex,t.cursor=r.endExcludingWhitespaces)}selectWordAt(e,t){let n=this._state;if(!n?.paragraph)return;let r=n.paragraph.getGlyphPositionAtCoordinate(e,t).pos;this.selectWord(r)}selectLineAt(e,t){let n=this._state;if(!n?.paragraph)return;let r=n.paragraph.getGlyphPositionAtCoordinate(e,t).pos;this.selectLine(r)}insert(e,t){let n=this._state;if(!n)return;let r=this.getSelectionRange()??[n.cursor,n.cursor];this.replaceRange(r[0],r[1],e),this.rebuildParagraph(t)}backspace(e){let t=this._state;if(!t)return;let n=this.getSelectionRange()??(t.cursor>0?[t.cursor-1,t.cursor]:null);n&&this.replaceRange(n[0],n[1],``),this.rebuildParagraph(e)}delete(e){let t=this._state;if(!t)return;let n=this.getSelectionRange()??(t.cursor<t.text.length?[t.cursor,t.cursor+1]:null);n&&this.replaceRange(n[0],n[1],``),this.rebuildParagraph(e)}moveHorizontal(e,t){let n=this._state;if(!n||!e&&this.collapseSelectionTo(t===`left`?0:1))return;this.prepareMove(e);let r=t===`left`==(n.textDirection===`RTL`)?1:-1,i=n.cursor+r;i>=0&&i<=n.text.length&&(n.cursor=i)}moveLeft(e=!1){this.moveHorizontal(e,`left`)}moveRight(e=!1){this.moveHorizontal(e,`right`)}moveVertical(e,t){let n=this._state;if(!n?.paragraph)return;this.prepareMove(e);let r=this.getCaretRect();if(!r)return;let i=n.paragraph.getLineMetrics()[0]?.height??14,a=t===`up`?r.y0-i/2:r.y1+i/2;n.cursor=n.paragraph.getGlyphPositionAtCoordinate(r.x,a).pos}moveUp(e=!1){this.moveVertical(e,`up`)}moveDown(e=!1){this.moveVertical(e,`down`)}moveToLineEdge(e,t){let n=this._state;if(!n?.paragraph)return;this.prepareMove(e);let r=this.currentLineMetrics();if(!r)return;let i=n.textDirection===`RTL`&&t===`start`,a=n.textDirection!==`RTL`&&t===`end`;n.cursor=i||a?r.endExcludingWhitespaces:r.startIndex}moveToLineStart(e=!1){this.moveToLineEdge(e,`start`)}moveToLineEnd(e=!1){this.moveToLineEdge(e,`end`)}moveWord(e,t){let n=this.prepareMove(e);if(!n)return;let r=t===`left`,i=this.skipWordBoundaryRun(n.text,n.cursor,r);i=this.skipWordInteriorRun(n.text,i,r),n.cursor=i}skipWordBoundaryRun(e,t,n){return this.advanceWhile(e,t,n,e=>n===e)}skipWordInteriorRun(e,t,n){return this.advanceWhile(e,t,n,e=>n!==e)}advanceWhile(e,t,n,r){let i=t,a=n?-1:1;for(;(n?i>0:i<e.length)&&r(qt(n?e[i-1]:e[i]));)i+=a;return i}moveWordLeft(e=!1){this.moveWord(e,`left`)}moveWordRight(e=!1){this.moveWord(e,`right`)}getCaretRect(){let e=this._state;if(!e?.paragraph)return null;let t=e.text,n=e.cursor;if(t.length===0){let t=e.paragraph.getLineMetrics();if(t.length===0)return null;let n=t[0];return{x:n.left,y0:0,y1:n.height}}let r,i,a=!1;n===0?(r=0,i=1,a=e.textDirection===`RTL`):n>=t.length?(r=t.length-1,i=t.length,a=e.textDirection!==`RTL`):(r=n,i=n+1);let o=e.paragraph.getRectsForRange(r,i,this.ck.RectHeightStyle.Max,this.ck.RectWidthStyle.Tight);if(o.length===0)return null;let[s,c,l,u]=o[0].rect;return{x:a?l:s,y0:c,y1:u}}getSelectionRects(){let e=this._state;if(!e?.paragraph)return[];let t=this.getSelectionRange();return t?e.paragraph.getRectsForRange(t[0],t[1],this.ck.RectHeightStyle.Max,this.ck.RectWidthStyle.Tight).map(e=>{let[t,n,r,i]=e.rect;return{x:t,y:n,width:r-t,height:i-n}}):[]}};function qt(e){return/\s|[.,;:!?()[\]{}"'`<>/\\|@#$%^&*~+=\-_]/.test(e)}function Jt(e,t){let n={};for(let r=0;r<t.length;r++){let i=t[r];Object.hasOwn(e,i)&&(n[i]=e[i])}return n}function Yt(e){return e!=null}function Xt(e){switch(e){case`FRAME`:return`FRAME`;case`RECTANGLE`:return`RECTANGLE`;case`ROUNDED_RECTANGLE`:return`ROUNDED_RECTANGLE`;case`ELLIPSE`:return`ELLIPSE`;case`TEXT`:return`TEXT`;case`LINE`:return`LINE`;case`STAR`:return`STAR`;case`POLYGON`:return`REGULAR_POLYGON`;case`VECTOR`:return`VECTOR`;case`BOOLEAN_OPERATION`:return`BOOLEAN_OPERATION`;case`GROUP`:return`FRAME`;case`SECTION`:return`SECTION`;case`COMPONENT`:return`SYMBOL`;case`COMPONENT_SET`:return`FRAME`;case`INSTANCE`:return`INSTANCE`;case`CONNECTOR`:return`CONNECTOR`;case`SHAPE_WITH_TEXT`:return`SHAPE_WITH_TEXT`;default:return`RECTANGLE`}}function Zt(e){let t=Math.floor(e/94),n=String.fromCharCode(33+e%94);return`~`.repeat(t)+n}function V(e){return`${e.sessionID}:${e.localID}`}function Qt(e){let t=e.match(/^(?:VariableID:|VariableCollectionId:)?(\d+):(\d+)$/);if(t)return{sessionID:Number.parseInt(t[1],10),localID:Number.parseInt(t[2],10)};let[n,r]=e.split(`:`);return{sessionID:Number.parseInt(n,10),localID:Number.parseInt(r,10)}}function $t(e){let t={};for(let n of e.split(`,`).map(e=>e.trim())){let e=n.indexOf(`=`);e!==-1&&(t[n.slice(0,e).trim()]=n.slice(e+1).trim())}return t}function H(e){return Object.entries(e).map(([e,t])=>`${e}=${t}`).join(`, `)}function en(e,t){return(e?.glyphs??[]).map(e=>e.commandsBlob===void 0?null:{commandsBlob:t[e.commandsBlob],x:e.position.x,y:e.position.y,fontSize:e.fontSize}).filter(e=>!!e)}var tn=[[`fontVariantCommonLigatures`,`LIGA`],[`fontVariantContextualLigatures`,`CALT`],[`fontVariantDiscretionaryLigatures`,`DLIG`],[`fontVariantHistoricalLigatures`,`HLIG`],[`fontVariantOrdinal`,`ORDN`],[`fontVariantSlashedZero`,`ZERO`]],nn=[[`fontVariantNumericFigure`,{LINING:`LNUM`,OLDSTYLE:`ONUM`}],[`fontVariantNumericSpacing`,{PROPORTIONAL:`PNUM`,TABULAR:`TNUM`}],[`fontVariantNumericFraction`,{DIAGONAL:`FRAC`,STACKED:`AFRC`}],[`fontVariantCaps`,{SMALL:`SMCP`,PETITE:`PCAP`,ALL_SMALL:[`SMCP`,`C2SC`],ALL_PETITE:[`PCAP`,`C2PC`],UNICASE:`UNIC`,TITLING:`TITL`}]],rn=Object.fromEntries(tn.map(([e,t])=>[t,e])),an={LNUM:{field:`fontVariantNumericFigure`,value:`LINING`},ONUM:{field:`fontVariantNumericFigure`,value:`OLDSTYLE`},PNUM:{field:`fontVariantNumericSpacing`,value:`PROPORTIONAL`},TNUM:{field:`fontVariantNumericSpacing`,value:`TABULAR`},FRAC:{field:`fontVariantNumericFraction`,value:`DIAGONAL`},AFRC:{field:`fontVariantNumericFraction`,value:`STACKED`},SMCP:{field:`fontVariantCaps`,value:`SMALL`},PCAP:{field:`fontVariantCaps`,value:`PETITE`},C2SC:{field:`fontVariantCaps`,value:`ALL_SMALL`},C2PC:{field:`fontVariantCaps`,value:`ALL_PETITE`},UNIC:{field:`fontVariantCaps`,value:`UNICASE`},TITL:{field:`fontVariantCaps`,value:`TITLING`}};function U(e,t,n){let r=t.toUpperCase();e.some(e=>e.tag===r)||e.push({tag:r,enabled:n})}function on(e){let t=[];for(let[n,r]of tn){let i=e[n];i!==void 0&&U(t,r,i)}for(let[n,r]of nn){let i=r[String(e[n])];if(Array.isArray(i))for(let e of i)U(t,e,!0);else i&&U(t,i,!0)}for(let n of e.toggledOnOTFeatures??[])U(t,n,!0);for(let n of e.toggledOffOTFeatures??[])U(t,n,!1);return t}function sn(e,t,n,r,i){let a=rn[t];if(a){e[a]=n;return}let o=an[t];if(n&&o){e[o.field]=o.value;return}n?r.push(t):i.push(t)}function cn(e,t){let n=[],r=[];for(let i of t)sn(e,i.tag.toUpperCase(),i.enabled,n,r);n.length>0&&(e.toggledOnOTFeatures=n),r.length>0&&(e.toggledOffOTFeatures=r)}function ln(e){return String.fromCharCode(e>>24&255,e>>16&255,e>>8&255,e&255)}function un(e){if(e.length===4)return(e.charCodeAt(0)<<24|e.charCodeAt(1)<<16|e.charCodeAt(2)<<8|e.charCodeAt(3))>>>0}function dn(e){let t=[];for(let n of e.fontVariations??[]){if(typeof n.value!=`number`)continue;let e=typeof n.axisTag==`number`?ln(n.axisTag):n.axisName||``;e&&t.push({axis:e,value:n.value})}return t}function fn(e){if(e.length%2!=0)throw Error(`Hex string must contain an even number of characters`);let t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){let r=Number.parseInt(e.slice(n*2,n*2+2),16);if(Number.isNaN(r))throw Error(`Hex string contains invalid characters`);t[n]=r}return t}var pn=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,`0`));function mn(e){if(typeof e.toHex==`function`)return e.toHex();let t=Array.from({length:e.length},()=>``);for(let n=0;n<e.length;n++)t[n]=pn[e[n]];return t.join(``)}function hn(e){return{r:e.r,g:e.g,b:e.b,a:`a`in e?e.a:1}}function gn(e){let t={type:e.type,color:hn(e.color),opacity:e.opacity,visible:e.visible,blendMode:e.blendMode??`NORMAL`};return e.gradientStops&&(t.stops=e.gradientStops.map(e=>({color:hn(e.color),position:e.position}))),e.gradientTransform&&(t.transform=e.gradientTransform),e.imageHash&&(t.image={hash:fn(e.imageHash)}),e.imageScaleMode&&(t.imageScaleMode=e.imageScaleMode),e.imageTransform&&(t.transform=e.imageTransform),e.sourceNodeId&&(t.sourceNodeId=Qt(e.sourceNodeId)),e.scale&&(t.scale=e.scale),e.spacing&&(t.spacing=e.spacing),e.patternSpacing&&(t.patternSpacing=e.patternSpacing),e.patternTileType&&(t.patternTileType=e.patternTileType),e.verticalAlignment&&(t.verticalAlignment=e.verticalAlignment),e.horizontalAlignment&&(t.horizontalAlignment=e.horizontalAlignment),e.noiseType&&(t.noiseType=e.noiseType),e.density!==void 0&&(t.density=e.density),e.noiseSize&&(t.noiseSize=e.noiseSize),e.customEffectId&&(t.customEffectId={guid:Qt(e.customEffectId)}),t}function _n(e){return e?{r:e.r??0,g:e.g??0,b:e.b??0,a:e.a??1}:{...F}}function vn(e){return Object.keys(e).sort((e,t)=>Number(e)-Number(t)).map(t=>e[Number(t)]).map(e=>e.toString(16).padStart(2,`0`)).join(``)}function yn(e){if(e)return{m00:e.m00,m01:e.m01,m02:e.m02,m10:e.m10,m11:e.m11,m12:e.m12}}var bn=null;function xn(e){bn=e}function Sn(e){let t=e.colorVar?.value?.alias;if(!(!t||!bn))return bn(t)??void 0}function Cn(e){let t=Sn(e);return t?{color:{...t,a:e.color?.a??1},opacity:e.opacity??t.a}:{color:_n(e.color),opacity:e.opacity??1}}function wn(e){let{color:t,opacity:n}=Cn(e);return{type:e.type,color:t,opacity:n,visible:e.visible??!0,blendMode:e.blendMode??`NORMAL`}}function Tn(e,t){!t.type.startsWith(`GRADIENT`)||!t.stops||(e.gradientStops=t.stops.map(e=>({color:_n(e.color),position:e.position})),t.transform&&(e.gradientTransform=yn(t.transform)))}function En(e,t){if(t.type===`IMAGE`){if(t.image&&typeof t.image==`object`){let n=t.image;typeof n.hash==`object`?e.imageHash=vn(n.hash):typeof n.hash==`string`&&(e.imageHash=n.hash)}e.imageScaleMode=t.imageScaleMode??`FILL`,t.transform&&(e.imageTransform=yn(t.transform))}}function W(e,t){t.sourceNodeId&&(e.sourceNodeId=V(t.sourceNodeId)),t.scale&&(e.scale=t.scale),t.spacing&&(e.spacing=t.spacing),t.patternSpacing&&(e.patternSpacing=t.patternSpacing),t.patternTileType&&(e.patternTileType=t.patternTileType),t.verticalAlignment&&(e.verticalAlignment=t.verticalAlignment),t.horizontalAlignment&&(e.horizontalAlignment=t.horizontalAlignment),t.noiseType&&(e.noiseType=t.noiseType),t.density!==void 0&&(e.density=t.density),t.noiseSize&&(e.noiseSize=t.noiseSize),t.customEffectId?.guid&&(e.customEffectId=V(t.customEffectId.guid))}function Dn(e){return e?e.map(e=>{let t=wn(e);return Tn(t,e),En(t,e),W(t,e),t}):[]}function On(e,t,n,r,i,a){if(!e)return[];let o=`CENTER`;return n===`INSIDE`?o=`INSIDE`:n===`OUTSIDE`&&(o=`OUTSIDE`),e.map(e=>{let{color:n,opacity:s}=Cn(e);return{color:n,weight:t??1,opacity:s,visible:e.visible??!0,align:o,cap:r??`NONE`,join:i??`MITER`,dashPattern:a??[]}})}function kn(e){return e?e.map(e=>({type:e.type,color:_n(e.color),offset:e.offset??{x:0,y:0},radius:e.radius??0,spread:e.spread??0,visible:e.visible??!0,blendMode:e.blendMode??`NORMAL`,showShadowBehindNode:e.showShadowBehindNode??!0})):[]}var An={cornerRadius:`CORNER_RADIUS`,topLeftRadius:`RECTANGLE_TOP_LEFT_CORNER_RADIUS`,topRightRadius:`RECTANGLE_TOP_RIGHT_CORNER_RADIUS`,bottomLeftRadius:`RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS`,bottomRightRadius:`RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS`,strokeWeight:`STROKE_WEIGHT`,borderTopWeight:`BORDER_TOP_WEIGHT`,borderBottomWeight:`BORDER_BOTTOM_WEIGHT`,borderLeftWeight:`BORDER_LEFT_WEIGHT`,borderRightWeight:`BORDER_RIGHT_WEIGHT`,itemSpacing:`STACK_SPACING`,paddingLeft:`STACK_PADDING_LEFT`,paddingTop:`STACK_PADDING_TOP`,paddingRight:`STACK_PADDING_RIGHT`,paddingBottom:`STACK_PADDING_BOTTOM`,counterAxisSpacing:`STACK_COUNTER_SPACING`,gridRowGap:`GRID_ROW_GAP`,gridColumnGap:`GRID_COLUMN_GAP`,visible:`VISIBLE`,opacity:`OPACITY`,width:`WIDTH`,height:`HEIGHT`,minWidth:`MIN_WIDTH`,maxWidth:`MAX_WIDTH`,minHeight:`MIN_HEIGHT`,maxHeight:`MAX_HEIGHT`,x:`X_POSITION`,y:`Y_POSITION`,rotation:`ROTATION`,fontSize:`FONT_SIZE`,letterSpacing:`LETTER_SPACING`,lineHeight:`LINE_HEIGHT`,fontFamily:`FONT_FAMILY`},jn=Object.fromEntries(Object.entries(An).map(([e,t])=>[t,e]));function Mn(e){let t=e.variableField?jn[e.variableField]:void 0,n=e.variableData?.value?.alias?.guid;return t&&n?{field:t,variableId:V(n)}:void 0}var Nn=new Set(`cornerRadius.topLeftRadius.topRightRadius.bottomLeftRadius.bottomRightRadius.strokeWeight.borderTopWeight.borderBottomWeight.borderLeftWeight.borderRightWeight.itemSpacing.paddingLeft.paddingTop.paddingRight.paddingBottom.counterAxisSpacing.gridRowGap.gridColumnGap.width.height.minWidth.maxWidth.minHeight.maxHeight.x.y.rotation.fontSize.letterSpacing.lineHeight`.split(`.`));function Pn(e,t){return e===`opacity`?{opacity:Math.max(0,Math.min(1,t/100))}:Nn.has(e)?{[e]:t}:void 0}var Fn=`open-pencil`,In=`textDirection`,Ln=`layoutDirection`,Rn=`nodeType`,zn=`boundVariables`,G=`exportSettings`,Bn={PNG:`png`,JPEG:`jpg`,SVG:`svg`,PDF:`pdf`};function Vn(e,t,n){let r=e.pluginData.filter(e=>!(e.pluginId===`open-pencil`&&e.key===t));r.push({pluginId:Fn,key:t,value:n}),e.pluginData=r}function Hn(e){e.exportSettings.length!==0&&(!Un(e.pluginData)&&Array.isArray(He(e,`exportSettings`))||Vn(e,G,JSON.stringify(e.exportSettings)))}function Un(e){return e.some(e=>e.pluginId===`open-pencil`&&e.key===`exportSettings`)}function Wn(e){if(!e)return{};try{let t=JSON.parse(e);return!t||typeof t!=`object`||Array.isArray(t)?{}:Object.fromEntries(Object.entries(t).filter(e=>typeof e[0]==`string`&&typeof e[1]==`string`))}catch{return{}}}function Gn(e){let t=Wn(Qn(e,zn));for(let n of e.variableConsumptionMap?.entries??[]){let e=Mn(n);e&&(t[e.field]=e.variableId)}return e.fillPaints?.forEach((e,n)=>{let r=e.colorVariableBinding?.variableID??e.colorVar?.value?.alias?.guid;r&&(t[`fills/${n}/color`]=V(r))}),e.strokePaints?.forEach((e,n)=>{let r=e.colorVariableBinding?.variableID??e.colorVar?.value?.alias?.guid;r&&(t[`strokes/${n}/color`]=V(r))}),t}function Kn(e){return e===`png`||e===`jpg`||e===`webp`||e===`svg`||e===`pdf`}function qn(e){if(!e)return null;try{let t=JSON.parse(e);if(!Array.isArray(t))return null;let n=t.flatMap(e=>{if(!e||typeof e!=`object`||Array.isArray(e))return[];let t=e.scale,n=e.format;return typeof t!=`number`||!Number.isFinite(t)||!Kn(n)?[]:[{scale:b(t),format:n}]});return n.length===t.length?n:null}catch{return null}}function Jn(e){return typeof e==`string`?Bn[e]??null:e===0?`png`:e===1?`jpg`:e===2?`svg`:e===3?`pdf`:null}function Yn(e){if(!e||typeof e!=`object`||Array.isArray(e))return 1;let t=e.type;if(t!==`CONTENT_SCALE`&&t!==0)return 1;let n=e.value;return typeof n==`number`&&Number.isFinite(n)?b(n):1}function Xn(e){return qn(Qn(e,G))||(e.exportSettings??[]).flatMap(e=>{if(!e||typeof e!=`object`||Array.isArray(e))return[];let t=Jn(e.imageType);return t?[{scale:Yn(e.constraint),format:t}]:[]})}function Zn(e){return(e.pluginData??[]).map(e=>({pluginId:e.pluginID,key:e.key,value:e.value}))}function Qn(e,t){return e.pluginData?.find(e=>e.pluginID===`open-pencil`&&e.key===t)?.value??null}function $n(e){return(e.pluginRelaunchData??[]).map(e=>({pluginId:e.pluginID,command:e.command,message:e.message,isDeleted:e.isDeleted}))}function er(e){return e.map(e=>({pluginID:e.pluginId,key:e.key,value:e.value}))}function tr(e){return e.map(e=>({pluginID:e.pluginId,command:e.command,message:e.message,isDeleted:e.isDeleted}))}function nr(e){switch(e){case`UNDERLINE`:return`UNDERLINE`;case`STRIKETHROUGH`:return`STRIKETHROUGH`;default:return`NONE`}}function rr(e,t){return e?e.units===`PIXELS`?e.value:e.units===`PERCENT`?e.value/100*(t??14):e.units===`RAW`?e.value*(t??14):null:null}function ir(e,t){return e?e.units===`PIXELS`?e.value:e.units===`PERCENT`?e.value/100*(t??14):e.value:0}function ar(e,t){let n=t.textDecoration;if(n&&(e.textDecoration=nr(n)),t.textDecorationStyle&&(e.textDecorationStyle=t.textDecorationStyle),t.textDecorationThickness&&(e.textDecorationThickness=t.textDecorationThickness.value??null),t.textDecorationSkipInk!==void 0&&(e.textDecorationSkipInk=t.textDecorationSkipInk),t.textUnderlineOffset&&(e.textUnderlineOffset=t.textUnderlineOffset.value??null),t.textDecorationFillPaints){let n=Dn(t.textDecorationFillPaints);n.length>0&&(e.textDecorationFills=n)}}function or(e,t){let n={};e.fontName&&(n.fontFamily=e.fontName.family,n.fontWeight=re(e.fontName.style),n.italic=e.fontName.style.toLowerCase().includes(`italic`)),e.fontSize!==void 0&&(n.fontSize=e.fontSize);let r=dn(e);r.length>0&&(n.fontVariations=r);let i=on(e);if(i.length>0&&(n.fontFeatures=i),e.letterSpacing&&(n.letterSpacing=ir(e.letterSpacing,e.fontSize??t)),e.lineHeight){let r=rr(e.lineHeight,e.fontSize??t);r!=null&&(n.lineHeight=r)}if(ar(n,e),e.fillPaints){let t=Dn(e.fillPaints);t.length>0&&(n.fills=t)}return n}function sr(e,t){let n=new Map;for(let r of e){let e=r.styleID;if(e===void 0)continue;let i=or(r,t);Object.keys(i).length>0&&n.set(e,i)}return n}function cr(e,t){let n=[],r=e[0],i=0;for(let a=1;a<=e.length;a++)if(a===e.length||e[a]!==r){if(r!==0){let e=t.get(r);e&&n.push({start:i,length:a-i,style:e})}a<e.length&&(r=e[a],i=a)}return n}function lr(e){let t=e.textData;if(!t?.characterStyleIDs||!t.styleOverrideTable)return[];let n=t.characterStyleIDs;if(n.length===0||t.styleOverrideTable.length===0)return[];let r=sr(t.styleOverrideTable,e.fontSize);return r.size===0?[]:cr(n,r)}function ur(e,t){let n=new DataView(e.buffer,e.byteOffset,e.byteLength),r=0,i=n.getUint32(r,!0);r+=4;let a=n.getUint32(r,!0);r+=4;let o=n.getUint32(r,!0);r+=4;let s=new Map;for(let e of t??[])s.set(e.styleID,e);let c=[];for(let e=0;e<i;e++){let e=n.getUint32(r,!0);r+=4;let t=n.getFloat32(r,!0);r+=4;let i=n.getFloat32(r,!0);r+=4,c.push({x:t,y:i,handleMirroring:s.get(e)?.handleMirroring??`NONE`})}let l=[];for(let e=0;e<a;e++){r+=4;let e=n.getUint32(r,!0);r+=4;let t=n.getFloat32(r,!0);r+=4;let i=n.getFloat32(r,!0);r+=4;let a=n.getUint32(r,!0);r+=4;let o=n.getFloat32(r,!0);r+=4;let s=n.getFloat32(r,!0);r+=4,l.push({start:e,end:a,tangentStart:{x:t,y:i},tangentEnd:{x:o,y:s}})}let u=[];for(let e=0;e<o;e++){let e=n.getUint32(r,!0)===0?`EVENODD`:`NONZERO`;r+=4;let t=n.getUint32(r,!0);r+=4;let i=[];for(let e=0;e<t;e++){let e=n.getUint32(r,!0);r+=4;let t=[];for(let i=0;i<e;i++)t.push(n.getUint32(r,!0)),r+=4;i.push(t)}u.push({windingRule:e,loops:i})}return{vertices:c,segments:l,regions:u}}function dr(e){let t=new Map,n=[],r=1;for(let i of e.vertices){let e=i.handleMirroring??`NONE`;e===`NONE`||t.has(e)||(t.set(e,r),n.push({styleID:r,handleMirroring:e}),r++)}return{table:n,mirroringToId:t}}function fr(e,t){let n=0;for(let t of e.regions){n+=8;for(let e of t.loops)n+=4+e.length*4}let r=new ArrayBuffer(12+e.vertices.length*12+e.segments.length*28+n),i=new DataView(r),a=0;i.setUint32(a,e.vertices.length,!0),a+=4,i.setUint32(a,e.segments.length,!0),a+=4,i.setUint32(a,e.regions.length,!0),a+=4;for(let n of e.vertices){let e=n.handleMirroring??`NONE`;i.setUint32(a,e===`NONE`?0:t?.get(e)??0,!0),a+=4,i.setFloat32(a,n.x,!0),a+=4,i.setFloat32(a,n.y,!0),a+=4}for(let t of e.segments)i.setUint32(a,0,!0),a+=4,i.setUint32(a,t.start,!0),a+=4,i.setFloat32(a,t.tangentStart.x,!0),a+=4,i.setFloat32(a,t.tangentStart.y,!0),a+=4,i.setUint32(a,t.end,!0),a+=4,i.setFloat32(a,t.tangentEnd.x,!0),a+=4,i.setFloat32(a,t.tangentEnd.y,!0),a+=4;for(let t of e.regions){i.setUint32(a,t.windingRule===`EVENODD`?0:1,!0),a+=4,i.setUint32(a,t.loops.length,!0),a+=4;for(let e of t.loops){i.setUint32(a,e.length,!0),a+=4;for(let t of e)i.setUint32(a,t,!0),a+=4}}return new Uint8Array(r)}function pr(e,t){let n=t?.regions??[];return e.length===n.length?e.map((e,t)=>({...e,windingRule:n[t].windingRule})):e.length===1&&n.length>0&&n.every(e=>e.windingRule===n[0].windingRule)?[{...e[0],windingRule:n[0].windingRule}]:e}function mr(e,t){let n=e.vectorData;if(n?.vectorNetworkBlob===void 0)return null;let r=n.vectorNetworkBlob;if(r<0||r>=t.length)return null;try{let i=ur(t[r],n.styleOverrideTable),a=n.normalizedSize,o=e.size?.x??0,s=e.size?.y??0;if(a&&o>0&&s>0&&(a.x!==o||a.y!==s)){let e=o/a.x,t=s/a.y;for(let n of i.vertices)n.x*=e,n.y*=t;for(let n of i.segments)n.tangentStart={x:n.tangentStart.x*e,y:n.tangentStart.y*t},n.tangentEnd={x:n.tangentEnd.x*e,y:n.tangentEnd.y*t}}return i}catch{return null}}function hr(e){let t=new Map;for(let n of e??[])n.fillPaints&&n.fillPaints.length>0&&t.set(n.styleID,Dn(n.fillPaints));return t}function gr(e){let t=e.vectorData;return hr(t?.styleOverrideTable)}function _r(e,t,n){if(!e||e.length===0)return[];let r=[];for(let i of e){if(i.commandsBlob===void 0||i.commandsBlob<0||i.commandsBlob>=t.length)continue;let e=t[i.commandsBlob];if(e.length===0)continue;let a=i.styleID?n?.get(i.styleID):void 0;r.push({windingRule:i.windingRule===`EVENODD`?`EVENODD`:`NONZERO`,commandsBlob:e,fills:a&&a.length>0?C(a):void 0})}return r}function vr(e){let t={},n=e.variableModeBySetMap;for(let e of n?.entries??[]){let n=e.variableSetID?.guid,r=e.variableModeID;!n||!r||(t[V(n)]=V(r))}return t}var yr={DOCUMENT:`DOCUMENT`,VARIABLE:`VARIABLE`,CANVAS:`CANVAS`,FRAME:`FRAME`,RECTANGLE:`RECTANGLE`,ROUNDED_RECTANGLE:`ROUNDED_RECTANGLE`,ELLIPSE:`ELLIPSE`,TEXT:`TEXT`,LINE:`LINE`,STAR:`STAR`,REGULAR_POLYGON:`POLYGON`,VECTOR:`VECTOR`,BOOLEAN_OPERATION:`BOOLEAN_OPERATION`,GROUP:`GROUP`,SECTION:`SECTION`,COMPONENT:`COMPONENT`,COMPONENT_SET:`COMPONENT_SET`,INSTANCE:`INSTANCE`,SYMBOL:`COMPONENT`,CONNECTOR:`CONNECTOR`,SHAPE_WITH_TEXT:`SHAPE_WITH_TEXT`};function br(e){return e?yr[e]??`RECTANGLE`:`RECTANGLE`}function xr(e){if(e.type!==`BOOLEAN_OPERATION`)return;let t=e.booleanOperation;switch(t){case`SUBTRACT`:case`INTERSECT`:return t;case`EXCLUDE`:case`XOR`:return`EXCLUDE`;default:return`UNION`}}function Sr(e){switch(e){case`HORIZONTAL`:return`HORIZONTAL`;case`VERTICAL`:return`VERTICAL`;default:return`NONE`}}function Cr(e){switch(e){case`RESIZE_TO_FIT`:case`RESIZE_TO_FIT_WITH_IMPLICIT_SIZE`:return`HUG`;case`FILL`:return`FILL`;default:return`FIXED`}}function wr(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`SPACE_BETWEEN`:case`SPACE_EVENLY`:return`SPACE_BETWEEN`;default:return`MIN`}}function Tr(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`BASELINE`:return`BASELINE`;default:return`MIN`}}function Er(e){switch(e){case`MIN`:return`MIN`;case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`BASELINE`:return`BASELINE`;default:return`AUTO`}}function Dr(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`SCALE`:return`SCALE`;default:return`MIN`}}function Or(e){return e?{startingAngle:e.startingAngle??0,endingAngle:e.endingAngle??2*Math.PI,innerRadius:e.innerRadius??0}:null}function kr(e){let t=e.size?.x??100,n=e.size?.y??100,r=e.transform?.m02??0,i=e.transform?.m12??0,a=0,o=!1;if(e.transform){let s=e.transform;s.m00*s.m11-s.m01*s.m10<0&&(o=!0),a=Math.atan2(s.m10,o?s.m11:s.m00)*(180/Math.PI);let c=a*Math.PI/180,l=Math.cos(c),u=Math.sin(c),d=t/2,f=n/2,p=o?-l:l,m=o?u:-u,h=u,g=l;r=s.m02-d+p*d+m*f,i=s.m12-f+h*d+g*f}return{x:r,y:i,width:t,height:n,rotation:a,flipX:o,flipY:!1}}function Ar(e){return{cornerRadius:e.cornerRadius??0,topLeftRadius:e.rectangleTopLeftCornerRadius??e.cornerRadius??0,topRightRadius:e.rectangleTopRightCornerRadius??e.cornerRadius??0,bottomRightRadius:e.rectangleBottomRightCornerRadius??e.cornerRadius??0,bottomLeftRadius:e.rectangleBottomLeftCornerRadius??e.cornerRadius??0,independentCorners:e.rectangleCornerRadiiIndependent??!1,cornerSmoothing:e.cornerSmoothing??0}}function jr(e){let t=e.derivedTextData?.baselines?.[0]?.lineHeight;return t!==void 0&&Number.isFinite(t)?t:rr(e.lineHeight,e.fontSize)}function Mr(e){return{textDecoration:nr(e.textDecoration),textDecorationStyle:e.textDecorationStyle??`SOLID`,textDecorationThickness:e.textDecorationThickness?.value??null,textDecorationFills:Dn(e.textDecorationFillPaints),textDecorationSkipInk:e.textDecorationSkipInk??!0,textUnderlineOffset:e.textUnderlineOffset?.value??null}}function Nr(e,t){return{text:e.textData?.characters??``,fontSize:e.fontSize??14,fontFamily:e.fontName?.family??`Inter`,fontWeight:re(e.fontName?.style??``),italic:e.fontName?.style.toLowerCase().includes(`italic`)??!1,textAlignHorizontal:e.textAlignHorizontal??`LEFT`,textAlignVertical:e.textAlignVertical??`TOP`,textAutoResize:e.textAutoResize??`NONE`,textCase:e.textCase??`ORIGINAL`,...Mr(e),leadingTrim:e.leadingTrim??`NONE`,lineHeight:jr(e),letterSpacing:ir(e.letterSpacing,e.fontSize),maxLines:e.maxLines??null,styleRuns:lr(e),fontVariations:dn(e),fontFeatures:on(e),textTruncation:e.textTruncation===`ENDING`?`ENDING`:`DISABLED`,textDirection:Qn(e,`textDirection`)||`AUTO`,figmaDerivedLayout:e.derivedTextData?.layoutSize?{width:e.derivedTextData.layoutSize.x,height:e.derivedTextData.layoutSize.y}:null,figmaDerivedTextGlyphs:en(e.derivedTextData,t)}}function Pr(e){let t=e.stackPadding??0;return{paddingTop:e.stackVerticalPadding??t,paddingBottom:e.stackPaddingBottom??t,paddingLeft:e.stackHorizontalPadding??t,paddingRight:e.stackPaddingRight??t}}function Fr(e,t,n,r){let i=n===`HUG`||r===`HUG`,a=(e.fillPaints?.some(e=>e.visible!==!1)??!1)||(e.strokePaints?.some(e=>e.visible!==!1)??!1);if(!(t===`NONE`||!i||!a))return{x:e.transform?.m02??0,y:e.transform?.m12??0,width:e.size?.x??100,height:e.size?.y??100}}function Ir(e,t){let n=e?.value?.[t];return typeof n==`number`&&Number.isFinite(n)&&n>0?n:null}function Lr(e,t){let n=e?.value?.[t];return typeof n==`number`&&Number.isFinite(n)&&n>=0?n:null}function Rr(e){let t=Sr(e.stackMode),n=Cr(e.stackPrimarySizing),r=Cr(e.stackCounterSizing),i=Fr(e,t,n,r);return{layoutMode:t,itemSpacing:e.stackSpacing??0,...Pr(e),primaryAxisSizing:n,counterAxisSizing:r,primaryAxisAlign:wr(e.stackPrimaryAlignItems??e.stackJustify),counterAxisAlign:Tr(e.stackCounterAlignItems??e.stackCounterAlign),layoutWrap:e.stackWrap===`WRAP`?`WRAP`:`NO_WRAP`,counterAxisSpacing:e.stackCounterSpacing??0,layoutPositioning:e.stackPositioning===`ABSOLUTE`?`ABSOLUTE`:`AUTO`,layoutGrow:e.stackChildPrimaryGrow??0,layoutAlignSelf:Er(e.stackChildAlignSelf),counterAxisAlignContent:e.stackCounterAlignContent===`SPACE_BETWEEN`?`SPACE_BETWEEN`:`AUTO`,itemReverseZIndex:e.stackReverseZIndex??!1,strokesIncludedInLayout:e.strokesIncludedInLayout??!1,layoutDirection:Qn(e,`layoutDirection`)||`AUTO`,...i?{figmaDerivedLayout:i}:{}}}function zr(e,t){return e.strokeCap??t?.vertices.find(e=>e.strokeCap)?.strokeCap??`NONE`}function Br(e,t){return e.strokeJoin??t?.vertices.find(e=>e.strokeJoin)?.strokeJoin??`MITER`}function Vr(e){if(!e||typeof e!=`object`||!(`guid`in e))return null;let t=e.guid;return!t||typeof t!=`object`?null:V(t)}function Hr(e){return e===`FILL`||e===`TEXT`||e===`EFFECT`||e===`GRID`?e:null}function Ur(e){return Array.isArray(e)?structuredClone(e):[]}function Wr(e,t){let n=mr(e,t),r=zr(e,n),i=Br(e,n);return{vectorNetwork:n,fillGeometry:pr(_r(e.fillGeometry,t,gr(e)),n),strokeGeometry:_r(e.strokeGeometry,t),arcData:Or(e.arcData),strokeCap:r,strokeJoin:i,dashPattern:e.dashPattern??[],borderTopWeight:e.borderTopWeight??0,borderRightWeight:e.borderRightWeight??0,borderBottomWeight:e.borderBottomWeight??0,borderLeftWeight:e.borderLeftWeight??0,independentStrokeWeights:e.borderStrokeWeightsIndependent??!1,strokeMiterLimit:e.miterLimit??4}}function Gr(e){let t=br(e.type);return t===`FRAME`&&ci(e)||Qn(e,`nodeType`)===`COMPONENT_SET`?`COMPONENT_SET`:t===`FRAME`&&e.resizeToFit===!0&&(e.stackMode===void 0||e.stackMode===`NONE`)?`GROUP`:t}function Kr(e,t){return Math.abs((e??0)-(t??0))<=.5}function qr(e,t){if(e.type!==`TEXT`||e.textAutoResize!==`NONE`||t?.stackMode!==`HORIZONTAL`&&t?.stackMode!==`VERTICAL`||!e.textData?.characters)return!1;let n=e.derivedTextData?.layoutSize;return!n||!e.size?!1:Kr(n.x,e.size.x)&&Kr(n.y,e.size.y)}function Jr(e,t){let n=Gr(e),r=Wr(e,t);return{nodeType:n,name:e.name??n,source:ui(e,t),...kr(e),opacity:e.opacity??1,visible:e.visible??!0,locked:e.locked??!1,blendMode:e.blendMode??`PASS_THROUGH`,booleanOperation:xr(e),fills:Dn(e.fillPaints),strokes:On(e.strokePaints,e.strokeWeight,e.strokeAlign,r.strokeCap,r.strokeJoin,e.dashPattern??[]),effects:kn(e.effects),layoutGrids:Ur(e.layoutGrids),fillStyleId:Vr(e.styleIdForFill),strokeStyleId:Vr(e.styleIdForStrokeFill),textStyleId:Vr(e.styleIdForText),effectStyleId:Vr(e.styleIdForEffect),gridStyleId:Vr(e.styleIdForGrid),sharedStyleType:Hr(e.styleType),...Ar(e),...Nr(e,t),horizontalConstraint:Dr(e.horizontalConstraint),verticalConstraint:Dr(e.verticalConstraint),...Rr(e),...r,minWidth:Ir(e.minSize,`x`),maxWidth:Lr(e.maxSize,`x`),minHeight:Ir(e.minSize,`y`),maxHeight:Lr(e.maxSize,`y`),isMask:e.mask??!1,maskType:e.maskType??`ALPHA`,maskIsOutline:e.maskIsOutline??!1,expanded:!0,autoRename:e.autoRename??!0,boundVariables:Gn(e),variableModes:vr(e),exportSettings:Xn(e),pluginData:Zn(e),pluginRelaunchData:$n(e),clipsContent:e.frameMaskDisabled===!1&&e.resizeToFit!==!0,componentId:gi(e),componentPropertyDefinitions:Zr(e),componentPropertyReferences:Qr(e),componentPropertyAssignments:ei(e),componentPropertyValues:ni(e),...si(e)}}var Yr={VARIANT:`VARIANT`,TEXT:`TEXT`,BOOL:`BOOLEAN`,BOOLEAN:`BOOLEAN`,INSTANCE_SWAP:`INSTANCE_SWAP`};function Xr(e){if(!e||typeof e!=`object`)return``;let t=e;return typeof t.boolValue==`boolean`?String(t.boolValue):typeof t.textValue==`string`?t.textValue:t.textValue&&typeof t.textValue==`object`?t.textValue.characters??``:t.guidValue?V(t.guidValue):``}function Zr(e){let t=e.componentPropDefs;if(!t?.length)return[];let n=[];for(let e of t){if(!e.id||!e.name)continue;let t=Yr[e.type??``]??`VARIANT`;n.push({id:V(e.id),name:e.name,type:t,defaultValue:Xr(e.initialValue),variantOptions:t===`VARIANT`?e.preferredValues?.stringValues:void 0,preferredValues:t===`INSTANCE_SWAP`?e.preferredValues?.instanceSwapValues?.map(e=>e.key).filter(e=>e!==void 0):void 0})}return n}function Qr(e){let t=e.componentPropRefs;if(!t?.length)return[];let n={0:`VISIBLE`,1:`TEXT`,2:`INSTANCE_SWAP`,VISIBLE:`VISIBLE`,TEXT_DATA:`TEXT`,OVERRIDDEN_SYMBOL_ID:`INSTANCE_SWAP`};return t.flatMap(e=>{let t=n[String(e.componentPropNodeField)];return e.defID&&t&&!e.isDeleted?[{propertyId:V(e.defID),field:t}]:[]})}function $r(e){if(e.value&&(e.value.boolValue!==void 0||e.value.textValue!==void 0||e.value.guidValue!==void 0))return Xr(e.value);let t=e.varValue?.value;return t?.symbolIdValue?.guid?V(t.symbolIdValue.guid):t?.boolValue===void 0?t?.textValue===void 0?t?.textDataValue?.characters??``:t.textValue:String(t.boolValue)}function ei(e){let t=e.componentPropAssignments;return t?.length?Object.fromEntries(t.flatMap(e=>e.defID?[[V(e.defID),$r(e)]]:[])):{}}function ti(e){let t=e.variantPropSpecs;return t?.length?t.filter(e=>!!e.propDefId).map(e=>({propDefId:V(e.propDefId),value:e.value??``})):[]}function ni(e){let t=ti(e),n=new Map(Zr(e).map(e=>[e.id,e.name]));if(t.length>0&&n.size>0){let e={};for(let r of t)e[n.get(r.propDefId)??r.propDefId]=r.value;return e}let r=e.name;return r?.includes(`=`)?$t(r):{}}function ri(e){if(!e||typeof e!=`object`)return null;let t=e;return typeof t.sessionID!=`number`||typeof t.localID!=`number`?null:V({sessionID:t.sessionID,localID:t.localID})}function ii(e){return typeof e==`string`?e:null}function ai(e){return typeof e==`string`?e:``}function oi(e){return typeof e==`boolean`?e:!1}function si(e){let t=e.symbolLinks??[];return{componentKey:ii(e.componentKey),sourceLibraryKey:ii(e.sourceLibraryKey),publishId:ri(e.publishID),overrideKey:ri(e.overrideKey),sharedSymbolVersion:ii(e.sharedSymbolVersion),publishedVersion:ii(e.publishedVersion),isPublishable:oi(e.isPublishable),isSymbolPublishable:oi(e.isSymbolPublishable),symbolDescription:ai(e.symbolDescription),symbolLinks:t.filter(e=>typeof e.uri==`string`).map(e=>({uri:e.uri,displayName:e.displayName,displayText:e.displayText})),variantPropSpecs:ti(e)}}function ci(e){let t=e.componentPropDefs;return t?.length?t.some(e=>e.type===`VARIANT`):!1}function li(e){return{stackMode:e.stackMode,stackSpacing:e.stackSpacing,stackPadding:e.stackPadding,stackPaddingRight:e.stackPaddingRight,stackPaddingBottom:e.stackPaddingBottom,stackCounterAlign:e.stackCounterAlign,stackJustify:e.stackJustify,stackCounterAlignItems:e.stackCounterAlignItems,stackPrimaryAlignItems:e.stackPrimaryAlignItems,stackPrimarySizing:e.stackPrimarySizing,stackCounterSizing:e.stackCounterSizing,stackVerticalPadding:e.stackVerticalPadding,stackHorizontalPadding:e.stackHorizontalPadding,stackWrap:e.stackWrap,stackPositioning:e.stackPositioning,stackChildPrimaryGrow:e.stackChildPrimaryGrow,stackChildAlignSelf:e.stackChildAlignSelf,stackCounterSpacing:e.stackCounterSpacing,bordersTakeSpace:e.bordersTakeSpace,stackReverseZIndex:e.stackReverseZIndex}}function ui(e,t){return{format:`fig`,id:e.guid?V(e.guid):null,orderKey:e.parentIndex?.position??null,editedFields:[],fig:{...mi(e,t),...hi(e,t),layout:li(e)}}}function di(e,t,n){let r=t.stackMode,i=r===`HORIZONTAL`,a=r===`VERTICAL`;e.sort((e,t)=>{let r=n.get(e)?.parentIndex?.position??``,o=n.get(t)?.parentIndex?.position??``;if(r<o)return-1;if(r>o)return 1;if(i||a){let r=i?`m02`:`m12`,a=n.get(e)?.transform?.[r]??0,o=n.get(t)?.transform?.[r]??0;if(a!==o)return a-o}return 0})}function fi(e,t){if(e instanceof Uint8Array)return e;if(Array.isArray(e))return e.map(e=>fi(e,t));if(!e||typeof e!=`object`)return e;let n={};for(let[r,i]of Object.entries(e))if((r===`commandsBlob`||r===`vectorNetworkBlob`)&&typeof i==`number`){let e=t[i];e==null?n[r]=i:n[r]={__openPencilFigmaBlob:e instanceof Uint8Array?e:new Uint8Array(Object.values(e))}}else n[r]=fi(i,t);return n}var pi=`styleIdForFill.styleIdForStrokeFill.styleIdForText.styleIdForEffect.styleIdForGrid.styleType.componentPropAssignments.backgroundPaints.layoutGrids.exportSettings.componentPropDefs.componentPropRefs.variantPropSpecs.stateGroupPropertyValueOrders.isStateGroup.version.sourceLibraryKey.userFacingVersion.description.key.sortPosition.detachedSymbolId.documentColorProfile.variableConsumptionMap.variableModeBySetMap.parameterConsumptionMap.editInfo.backgroundColor.pageType.isPageDivider.guides.handoffStatusMap.annotationCategories.miterLimit.mask.maskType.maskIsOutline.strokeWeight.strokeJoin.borderStrokeWeightsIndependent.borderTopWeight.borderRightWeight.borderBottomWeight.borderLeftWeight.minSize.maxSize.targetAspectRatio.gridRows.gridColumns.gridRowAnchor.gridColumnAnchor.gridColumnsSizing.gridRowsSizing.gridChildVerticalAlign.gridChildHorizontalAlign.textAutoResize.textData.lineHeight.fontName.fontSize.letterSpacing.textTracking.fontVersion.textUserLayoutVersion.textExplicitLayoutVersion.fontVariations.fontVariantCommonLigatures.fontVariantContextualLigatures.toggledOnOTFeatures.toggledOffOTFeatures.leadingTrim.textDecorationFillPaints.textUnderlineOffset.textDecorationThickness.textDecorationStyle.semanticWeight.semanticItalic.maxLines.textPathStart.derivedTextData.fillPaints.strokePaints.effects.sectionStatusInfo.prototypeStartNodeID.prototypeInteractions.transitionInfo.codeSyntax.lockMode.slideThemeMap.isSoftDeleted.brushType.scatterStrokeSettings.vectorOperationVersion.vectorData.fillGeometry.strokeGeometry`.split(`.`);function mi(e,t){let n={};for(let r of pi){let i=e[r];i!==void 0&&(n[r]=fi(i,t))}return{rawSize:e.size?{...e.size}:null,rawTransform:e.transform?{...e.transform}:null,rawNodeFields:n}}function hi(e,t){let n=e.symbolData;return{symbolOverrides:fi(n?.symbolOverrides??[],t),componentPropAssignments:fi(e.componentPropAssignments??[],t),derivedSymbolData:fi(e.derivedSymbolData??[],t),derivedSymbolDataLayoutVersion:typeof e.derivedSymbolDataLayoutVersion==`number`?e.derivedSymbolDataLayoutVersion:null,uniformScaleFactor:typeof n?.uniformScaleFactor==`number`?n.uniformScaleFactor:null}}function gi(e){let t=e.symbolData;return t?.symbolID?V(t.symbolID):``}function _i(e){return{layoutSize:{x:e.node.width,y:e.node.height},baselines:e.baselines??[{firstCharacter:0,endCharacter:Math.max(e.node.text.length-1,0),position:{x:0,y:e.baseline},width:e.width,lineHeight:e.lineHeight,lineAscent:e.lineAscent}],glyphs:e.glyphs,fontMetaData:e.fontMetaData,logicalIndexToCharacterOffsetMap:e.logicalIndexToCharacterOffsetMap,derivedLines:[{directionality:`LTR`}],truncationStartIndex:-1,truncatedHeight:-1}}function vi(e){return e===`EXCLUDE`?`XOR`:e??`UNION`}function yi(e,t){let n=new Map;for(let[r,i]of e.variables){if(!i.key)continue;let e=t.get(r)??Qt(r);n.set(i.key,e),i.version&&n.set(`${i.key}@${i.version}`,e)}return n}function bi(e,t,n,r){let i=t.boundVariables[r];return i?{...n,colorVariableBinding:{variableID:e.varIdToGuid?.get(i)??Qt(i)}}:n}function xi(e,t){return t.strokes.map((n,r)=>bi(e,t,{type:`SOLID`,color:e.safeColor(n.color),opacity:n.opacity,visible:n.visible,blendMode:`NORMAL`},`strokes/${r}/color`))}function Si(e){return e===`BOOLEAN`?`BOOL`:e}function Ci(e,t,n){if(e===`BOOLEAN`)return{boolValue:t===`true`};if(e===`INSTANCE_SWAP`){let e=wi(n.getNode(t)?.source.id??t);return e?{guidValue:e}:{textValue:{characters:t}}}return{textValue:{characters:t}}}function wi(e){return/^\d+:\d+$/.test(e)?Qt(e):null}function Ti(e,t,n){let r=Object.entries(e.variableModes).flatMap(([e,r])=>{let i=t?.get(e)??wi(e),a=n?.get(r)??wi(r);return!i||!a?[]:[{variableSetID:{guid:i},variableModeID:a}]});return r.length>0?{entries:r}:void 0}var Ei=new Set([`variableConsumptionMap`,`parameterConsumptionMap`]),Di=new Set([`colorVar`,`opacityVar`]),Oi=new Set([`BOOLEAN`,`FLOAT`,`STRING`,`ALIAS`,`COLOR`,`SYMBOL_ID`,`TEXT_DATA`,`PROP_REF`]);function ki(e){return!!e&&typeof e==`object`&&!Array.isArray(e)&&`entries`in e}function Ai(e){return!!e&&typeof e==`object`&&!Array.isArray(e)}function ji(e){if(!Ai(e))return!1;let t=e,n=t.variableData?.dataType;return typeof n==`string`&&Oi.has(n)||!!t.variableData?.value?.propRefValue}function Mi(e){if(!Ai(e))return!1;let t=e;return t.variableData?.dataType===`PROP_REF`||!!t.variableData?.value?.propRefValue}function Ni(e,t,n,r){if(!ki(e))return;let i=e.entries?.filter(r)??[];if(i.length!==0)return{entries:i.map(e=>Ii(e,t,n))}}function Pi(e,t,n){let r=e.__openPencilFigmaBlob,i=r instanceof Uint8Array?r:new Uint8Array(Object.values(r??{})),a=mn(i),o=n.blobIndexByHex?.get(a);if(o!==void 0)return o;let s=t.length;return t.push(i),n.blobIndexByHex?.set(a,s),s}function Fi(e,t){return e===`stackCounterAlignItems`&&t===`STRETCH`?`MIN`:(e===`stackJustify`||e===`stackPrimaryAlignItems`||e===`stackCounterAlign`||e===`stackCounterAlignItems`)&&t===`SPACE_EVENLY`?`SPACE_BETWEEN`:t}function Ii(e,t,n={}){if(e instanceof Uint8Array)return e;if(Array.isArray(e))return e.map(e=>Ii(e,t,n));if(!e||typeof e!=`object`)return e;if(`__openPencilFigmaBlob`in e)return Pi(e,t,n);let r={};for(let[i,a]of Object.entries(e))if(!(Di.has(i)&&!n.includePaintVariables)){if(Ei.has(i)){let e=Ni(a,t,n,n.includeVariableMaps?ji:Mi);e!==void 0&&(r[i]=e);continue}r[i]=Fi(i,Ii(a,t,n))}return r}function Li(e,t){let n=new Set,r=t;for(;!n.has(r);){n.add(r);let t=e.graph.getNode(r);if(t?.type!==`INSTANCE`||!t.componentId)return r;r=t.componentId}return t}function Ri(e,t,n){let r=e.graph.getNode(t);if(!r)return;let i=e.nodeIdToGuid?.get(t);if(i)return i;let a=r.source.id?wi(r.source.id):null;if(a&&e.assignedGuidValues){let r=`${a.sessionID}:${a.localID}`;if(e.assignedGuidValues.has(r)){let r={sessionID:1,localID:n.value++};return e.nodeIdToGuid?.set(t,r),e.assignedGuidValues.add(`${r.sessionID}:${r.localID}`),r}}let o=a??{sessionID:1,localID:n.value++};return e.nodeIdToGuid?.set(t,o),e.assignedGuidValues?.add(`${o.sessionID}:${o.localID}`),o}function zi(e,t,n){let r=e.graph.getNode(t);for(;r?.parentId;){if(r.parentId===n)return!0;r=e.graph.getNode(r.parentId)}return!1}function Bi(e,t,n){let r=[];for(let[i,a]of Object.entries(t.overrides)){if(!i.endsWith(`:text`)||typeof a!=`string`)continue;let o=i.slice(0,-5),s=e.graph.getNode(o);if(!s||!zi(e,o,t.id))continue;let c=s.componentId;if(!c)continue;let l=e.graph.getNode(c),u=(l?.overrideKey?wi(l.overrideKey):null)??Ri(e,c,n);u&&r.push({guidPath:{guids:[u]},textData:{characters:a}})}return r}function Vi(e){let t=e.guidPath?.guids;return t?.length?t.map(({sessionID:e,localID:t})=>`${e}:${t}`).join(`/`):null}function Hi(e,t){for(let n of t){let t=Vi(n),r=-1;if(t){for(let n=e.length-1;n>=0;n--)if(Vi(e[n])===t){r=n;break}}r<0?e.push(n):e[r]={...e[r],textData:n.textData}}}var Ui=new Set([`pageType`,`derivedSymbolData`,`derivedSymbolDataLayoutVersion`,`sourceLibraryKey`,`minSize`,`maxSize`,`variableConsumptionMap`,`parameterConsumptionMap`]);function Wi(e,t,n){let r=Ii(Ue(t),e.blobs,{blobIndexByHex:e.blobIndexByHex,includePaintVariables:!0,includeVariableMaps:!0});for(let i of Object.keys(r))if(!Ui.has(String(i))){if((i===`fillPaints`||i===`strokePaints`)&&t.source.id){n[i]=r[i];continue}if(i===`effects`&&t.source.id&&e.assetRefToVarGuid&&e.assetRefToVarGuid.size>0){n[i]=Gi(r[i],e.assetRefToVarGuid);continue}if(i===`derivedTextData`&&t.source.id){n.derivedTextData=r.derivedTextData;continue}if(i===`textDecorationFillPaints`&&t.source.id){n.textDecorationFillPaints=r.textDecorationFillPaints;continue}i in n||(n[i]=r[i])}}function Gi(e,t){if(!Array.isArray(e))return e;let n=e.map(e=>{let n=e.colorVar,r=n?.value?.alias;if(!n||!r||r.guid||!r.assetRef?.key)return e;let i=r.assetRef,a=i.version?`${i.key}@${i.version}`:i.key,o=t.get(a)??t.get(i.key);return o?{...e,colorVar:{...n,value:{...n.value,alias:{guid:o}}}}:e});return n.some((t,n)=>t!==e[n])?n:e}function Ki(e,t,n,r){if(t.type!==`INSTANCE`||!t.componentId)return;let i=Ri(e,Li(e,t.componentId),r);if(i){let a={symbolID:i},o=[];t.source.fig.symbolOverrides.length>0&&o.push(...Ii(t.source.fig.symbolOverrides,e.blobs,{blobIndexByHex:e.blobIndexByHex,includePaintVariables:!0,includeVariableMaps:!0})),Hi(o,Bi(e,t,r)),o.length>0&&(a.symbolOverrides=o),t.source.fig.uniformScaleFactor!=null&&(a.uniformScaleFactor=t.source.fig.uniformScaleFactor),n.symbolData=a}t.source.fig.componentPropAssignments.length>0&&(n.componentPropAssignments=Ii(t.source.fig.componentPropAssignments,e.blobs,{blobIndexByHex:e.blobIndexByHex,includePaintVariables:!0,includeVariableMaps:!0})),t.source.fig.derivedSymbolData.length>0&&(n.derivedSymbolData=Ii(t.source.fig.derivedSymbolData,e.blobs,{blobIndexByHex:e.blobIndexByHex,includePaintVariables:!0,includeVariableMaps:!0})),t.source.fig.derivedSymbolDataLayoutVersion!=null&&(n.derivedSymbolDataLayoutVersion=t.source.fig.derivedSymbolDataLayoutVersion)}function qi(e){if(e.type===`INSTANCE_SWAP`&&e.preferredValues?.length)return{instanceSwapValues:e.preferredValues.map(e=>({type:`COMPONENT`,key:e}))};if(e.type===`VARIANT`&&e.variantOptions?.length)return{stringValues:[...e.variantOptions]}}function Ji(e){return e===`TEXT`?`TEXT_DATA`:e===`INSTANCE_SWAP`?`OVERRIDDEN_SYMBOL_ID`:`VISIBLE`}function Yi(e){let t=new Map;for(let n of e.getAllNodes())for(let e of n.componentPropertyDefinitions)t.has(e.id)||t.set(e.id,e);return t}function Xi(e,t,n,r=!1){return n&&!(t in Ue(e))&&!r}function Zi(e,t,n){t.componentKey&&(n.componentKey=t.componentKey),t.sourceLibraryKey&&(n.sourceLibraryKey=t.sourceLibraryKey);let r=t.publishId?wi(t.publishId):null,i=t.overrideKey?wi(t.overrideKey):null;r&&(n.publishID=r),i&&(n.overrideKey=i),t.sharedSymbolVersion&&(n.sharedSymbolVersion=t.sharedSymbolVersion),t.publishedVersion&&(n.publishedVersion=t.publishedVersion),(t.type===`COMPONENT_SET`||t.isPublishable)&&(n.isPublishable=t.isPublishable),(t.type===`COMPONENT`||t.isSymbolPublishable)&&(n.isSymbolPublishable=t.isSymbolPublishable),t.symbolDescription&&(n.symbolDescription=t.symbolDescription),t.symbolLinks.length>0&&(n.symbolLinks=structuredClone(t.symbolLinks));let a=t.componentPropertyDefinitions.map(t=>{let n=wi(t.id);return n?{id:n,name:t.name,type:Si(t.type),initialValue:Ci(t.type,t.defaultValue,e.graph),preferredValues:qi(t)}:null}).filter(e=>e!==null);Xi(t,`componentPropDefs`,a.length>0)&&(n.componentPropDefs=a);let o=t.componentPropertyReferences.map(e=>{let t=wi(e.propertyId);return t?{defID:t,componentPropNodeField:Ji(e.field)}:null}).filter(e=>e!==null);Xi(t,`componentPropRefs`,o.length>0)&&(n.componentPropRefs=o);let s=Object.entries(t.componentPropertyAssignments).map(([t,n])=>{let r=wi(t),i=e.componentPropertyDefinitionsById.get(t);return r&&i?{defID:r,value:Ci(i.type,n,e.graph)}:null}).filter(e=>e!==null);Xi(t,`componentPropAssignments`,s.length>0,!!n.componentPropAssignments)&&(n.componentPropAssignments=s);let c=t.variantPropSpecs.map(e=>{let t=wi(e.propDefId);return t?{propDefId:t,value:e.value}:null}).filter(e=>e!==null);Xi(t,`variantPropSpecs`,c.length>0)&&(n.variantPropSpecs=c)}function Qi(e){let t=ke(e).rawSize;return t?{...t}:{x:e.width,y:e.height}}function $i(e,t){let n=ke(t).rawTransform;return n?{...n}:e.computeExportTransform(t)}function ea(e){let t=Ue(e);return`fillGeometry`in t||`strokeGeometry`in t}function ta(e){return`vectorData`in Ue(e)}var na=new Set([`DROP_SHADOW`,`INNER_SHADOW`,`LAYER_BLUR`,`BACKGROUND_BLUR`,`FOREGROUND_BLUR`]);function ra(e){let t=Ue(e).effects;return Array.isArray(t)&&t.some(e=>e&&typeof e==`object`&&`type`in e&&!na.has(String(e.type)))}function ia(e){return!ea(e)&&!ta(e)?e:{...e,fillGeometry:ea(e)?[]:e.fillGeometry,strokeGeometry:ea(e)?[]:e.strokeGeometry,vectorNetwork:ta(e)?null:e.vectorNetwork}}function aa(e,t){e.fillStyleId&&(t.styleIdForFill={guid:Qt(e.fillStyleId)}),e.strokeStyleId&&(t.styleIdForStrokeFill={guid:Qt(e.strokeStyleId)}),e.textStyleId&&(t.styleIdForText={guid:Qt(e.textStyleId)}),e.effectStyleId&&(t.styleIdForEffect={guid:Qt(e.effectStyleId)}),e.gridStyleId&&(t.styleIdForGrid={guid:Qt(e.gridStyleId)}),e.layoutGrids.length>0&&(t.layoutGrids=structuredClone(e.layoutGrids))}function oa(e,t,n){t.independentStrokeWeights&&(n.borderStrokeWeightsIndependent=!0,n.borderTopWeight=t.borderTopWeight,n.borderRightWeight=t.borderRightWeight,n.borderBottomWeight=t.borderBottomWeight,n.borderLeftWeight=t.borderLeftWeight),t.fills.length>0&&(n.fillPaints=t.fills.map((n,r)=>bi(e,t,e.fillToKiwiPaint(n),`fills/${r}/color`))),e.serializeCornerRadii(t,n),t.effects.length>0&&!ra(t)&&(n.effects=t.effects.map(t=>({type:t.type===`LAYER_BLUR`?`FOREGROUND_BLUR`:t.type,color:e.safeColor(t.color),offset:t.offset,radius:t.radius,spread:t.spread,visible:t.visible,blendMode:t.blendMode??`NORMAL`,showShadowBehindNode:t.showShadowBehindNode}))),t.type===`TEXT`&&e.serializeTextProps(t,n,e.graph,e.fontDigestMap,e.blobs,e.glyphBlobMap),t.type!==`VECTOR`&&(n.frameMaskDisabled=!t.clipsContent),aa(t,n),t.horizontalConstraint!==`MIN`&&(n.horizontalConstraint=t.horizontalConstraint),t.verticalConstraint!==`MIN`&&(n.verticalConstraint=t.verticalConstraint),t.strokeCap!==`NONE`&&(n.strokeCap=t.strokeCap);let r=Ue(t);(t.strokeJoin!==`MITER`||`strokeJoin`in r)&&(n.strokeJoin=t.strokeJoin),(t.strokeMiterLimit!==4||`miterLimit`in r)&&(n.miterLimit=t.strokeMiterLimit),t.dashPattern.length>0&&(n.dashPattern=t.dashPattern),t.arcData&&(n.arcData={startingAngle:t.arcData.startingAngle,endingAngle:t.arcData.endingAngle,innerRadius:t.arcData.innerRadius}),t.autoRename||(n.autoRename=!1)}function sa(e,t,n,r,i){let a=Ri(i,e.id,r)??{sessionID:1,localID:r.value++},o=xi(i,e),s={guid:a,parentIndex:{guid:t,position:e.source.orderKey??i.fractionalPosition(n)},type:i.mapToFigmaType(e.type),name:e.name,visible:e.visible,opacity:e.opacity,phase:`CREATED`,size:Qi(e),transform:$i(i,e)};e.sharedStyleType&&(s.styleType=e.sharedStyleType),e.type===`GROUP`&&(s.resizeToFit=!0),e.strokes.length>0&&(s.strokeWeight=e.strokes[0].weight,s.strokeAlign=e.strokes[0].align),e.locked&&(s.locked=!0),oa(i,e,s),Zi(i,e,s),Ki(i,e,s,r),e.type===`COMPONENT_SET`&&Vn(e,Rn,e.type),s.type===`CANVAS`&&(s.pageType=`DESIGN`),e.type===`BOOLEAN_OPERATION`&&(s.booleanOperation=vi(e.booleanOperation)),o.length>0&&(s.strokePaints=o),i.serializeLayoutProps(e,s),i.serializeGeometry(ia(e),s,i.blobs),i.serializeVariableBindings(e,s,i.graph,i.varIdToGuid),Wi(i,e,s);let c=Ti(e,i.varIdToGuid,i.modeIdToGuid);c&&(s.variableModeBySetMap=c),Hn(e);let l=er(e.pluginData);l.length>0&&(s.pluginData=l),e.pluginRelaunchData.length>0&&(s.pluginRelaunchData=tr(e.pluginRelaunchData));let u=[s],d=e.type===`INSTANCE`?[]:i.graph.getChildren(e.id).filter(e=>!e.internalOnly);for(let e=0;e<d.length;e++)u.push(...i.sceneNodeToKiwi(d[e],a,e,r,i));return u}var ca={getGlyphOutlineMetrics:()=>null};function la(e,t=!1){let n=R[Math.round(e/100)*100]??`Regular`;return t?`${n} Italic`:n}var ua=0,da=1,fa=2,pa=4;function ma(e,t=1){let n=[],r=e=>{let r=new ArrayBuffer(4);new DataView(r).setFloat32(0,(e??0)/t,!0),n.push(...new Uint8Array(r))},i=e=>e===void 0?void 0:-e,a=0,o=0;for(let t of e)switch(t.type){case`M`:n.push(da),r(t.x),r(i(t.y)),a=t.x??0,o=t.y??0;break;case`L`:n.push(fa),r(t.x),r(i(t.y)),a=t.x??0,o=t.y??0;break;case`C`:n.push(pa),r(t.x1),r(i(t.y1)),r(t.x2),r(i(t.y2)),r(t.x),r(i(t.y)),a=t.x??0,o=t.y??0;break;case`Q`:{let e=t.x1??0,s=t.y1??0,c=t.x??0,l=t.y??0;n.push(pa),r(a+2/3*(e-a)),r(i(o+2/3*(s-o))),r(c+2/3*(e-c)),r(i(l+2/3*(s-l))),r(c),r(i(l)),a=c,o=l;break}case`Z`:n.push(ua);break}return new Uint8Array(n)}var ha=Uint8Array,ga=Uint16Array,_a=Int32Array,va=new ha([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ya=new ha([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ba=new ha([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),xa=function(e,t){for(var n=new ga(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new _a(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},Sa=xa(va,2),Ca=Sa.b,wa=Sa.r;Ca[28]=258,wa[258]=28;for(var Ta=xa(ya,0),Ea=Ta.b,Da=Ta.r,Oa=new ga(32768),ka=0;ka<32768;++ka){var Aa=(ka&43690)>>1|(ka&21845)<<1;Aa=(Aa&52428)>>2|(Aa&13107)<<2,Aa=(Aa&61680)>>4|(Aa&3855)<<4,Oa[ka]=((Aa&65280)>>8|(Aa&255)<<8)>>1}for(var ja=(function(e,t,n){for(var r=e.length,i=0,a=new ga(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new ga(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new ga(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[Oa[d]>>c]=l}else for(s=new ga(r),i=0;i<r;++i)e[i]&&(s[i]=Oa[o[e[i]-1]++]>>15-e[i]);return s}),Ma=new ha(288),ka=0;ka<144;++ka)Ma[ka]=8;for(var ka=144;ka<256;++ka)Ma[ka]=9;for(var ka=256;ka<280;++ka)Ma[ka]=7;for(var ka=280;ka<288;++ka)Ma[ka]=8;for(var Na=new ha(32),ka=0;ka<32;++ka)Na[ka]=5;var Pa=ja(Ma,9,0),Fa=ja(Ma,9,1),Ia=ja(Na,5,0),La=ja(Na,5,1),Ra=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},za=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},Ba=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},Va=function(e){return(e+7)/8|0},Ha=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new ha(e.subarray(t,n))},Ua=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],Wa=function(e,t,n){var r=Error(t||Ua[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,Wa),!n)throw r;return r},Ga=function(e,t,n,r){var i=e.length,a=r?r.length:0;if(!i||t.f&&!t.l)return n||new ha(0);var o=!n,s=o||t.i!=2,c=t.i;o&&(n=new ha(i*3));var l=function(e){var t=n.length;if(e>t){var r=new ha(Math.max(t*2,e));r.set(n),n=r}},u=t.f||0,d=t.p||0,f=t.b||0,p=t.l,m=t.d,h=t.m,g=t.n,_=i*8;do{if(!p){u=za(e,d,1);var v=za(e,d+1,3);if(d+=3,!v){var y=Va(d)+4,b=e[y-4]|e[y-3]<<8,x=y+b;if(x>i){c&&Wa(0);break}s&&l(f+b),n.set(e.subarray(y,x),f),t.b=f+=b,t.p=d=x*8,t.f=u;continue}else if(v==1)p=Fa,m=La,h=9,g=5;else if(v==2){var S=za(e,d,31)+257,C=za(e,d+10,15)+4,w=S+za(e,d+5,31)+1;d+=14;for(var T=new ha(w),E=new ha(19),D=0;D<C;++D)E[ba[D]]=za(e,d+D*3,7);d+=C*3;for(var O=Ra(E),k=(1<<O)-1,A=ja(E,O,1),D=0;D<w;){var j=A[za(e,d,k)];d+=j&15;var y=j>>4;if(y<16)T[D++]=y;else{var M=0,N=0;for(y==16?(N=3+za(e,d,3),d+=2,M=T[D-1]):y==17?(N=3+za(e,d,7),d+=3):y==18&&(N=11+za(e,d,127),d+=7);N--;)T[D++]=M}}var P=T.subarray(0,S),F=T.subarray(S);h=Ra(P),g=Ra(F),p=ja(P,h,1),m=ja(F,g,1)}else Wa(1);if(d>_){c&&Wa(0);break}}s&&l(f+131072);for(var ee=(1<<h)-1,te=(1<<g)-1,ne=d;;ne=d){var M=p[Ba(e,d)&ee],I=M>>4;if(d+=M&15,d>_){c&&Wa(0);break}if(M||Wa(2),I<256)n[f++]=I;else if(I==256){ne=d,p=null;break}else{var re=I-254;if(I>264){var D=I-257,L=va[D];re=za(e,d,(1<<L)-1)+Ca[D],d+=L}var ie=m[Ba(e,d)&te],ae=ie>>4;ie||Wa(3),d+=ie&15;var F=Ea[ae];if(ae>3){var L=ya[ae];F+=Ba(e,d)&(1<<L)-1,d+=L}if(d>_){c&&Wa(0);break}s&&l(f+131072);var R=f+re;if(f<F){var oe=a-F,se=Math.min(F,R);for(oe+f<0&&Wa(3);f<se;++f)n[f]=r[oe+f]}for(;f<R;++f)n[f]=n[f-F]}}t.l=p,t.p=ne,t.b=f,t.f=u,p&&(u=1,t.m=h,t.d=m,t.n=g)}while(!u);return f!=n.length&&o?Ha(n,0,f):n.subarray(0,f)},Ka=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8},qa=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8,e[r+2]|=n>>16},Ja=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]});var i=n.length,a=n.slice();if(!i)return{t:to,l:0};if(i==1){var o=new ha(n[0].s+1);return o[n[0].s]=1,{t:o,l:1}}n.sort(function(e,t){return e.f-t.f}),n.push({s:-1,f:25001});var s=n[0],c=n[1],l=0,u=1,d=2;for(n[0]={s:-1,f:s.f+c.f,l:s,r:c};u!=i-1;)s=n[n[l].f<n[d].f?l++:d++],c=n[l!=u&&n[l].f<n[d].f?l++:d++],n[u++]={s:-1,f:s.f+c.f,l:s,r:c};for(var f=a[0].s,r=1;r<i;++r)a[r].s>f&&(f=a[r].s);var p=new ga(f+1),m=Ya(n[u-1],p,0);if(m>t){var r=0,h=0,g=m-t,_=1<<g;for(a.sort(function(e,t){return p[t.s]-p[e.s]||e.f-t.f});r<i;++r){var v=a[r].s;if(p[v]>t)h+=_-(1<<m-p[v]),p[v]=t;else break}for(h>>=g;h>0;){var y=a[r].s;p[y]<t?h-=1<<t-p[y]++-1:++r}for(;r>=0&&h;--r){var b=a[r].s;p[b]==t&&(--p[b],++h)}m=t}return{t:new ha(p),l:m}},Ya=function(e,t,n){return e.s==-1?Math.max(Ya(e.l,t,n+1),Ya(e.r,t,n+1)):t[e.s]=n},Xa=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new ga(++t),r=0,i=e[0],a=1,o=function(e){n[r++]=e},s=1;s<=t;++s)if(e[s]==i&&s!=t)++a;else{if(!i&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(i),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(i);a=1,i=e[s]}return{c:n.subarray(0,r),n:t}},Za=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r];return n},Qa=function(e,t,n){var r=n.length,i=Va(t+2);e[i]=r&255,e[i+1]=r>>8,e[i+2]=e[i]^255,e[i+3]=e[i+1]^255;for(var a=0;a<r;++a)e[i+a+4]=n[a];return(i+4+r)*8},$a=function(e,t,n,r,i,a,o,s,c,l,u){Ka(t,u++,n),++i[256];for(var d=Ja(i,15),f=d.t,p=d.l,m=Ja(a,15),h=m.t,g=m.l,_=Xa(f),v=_.c,y=_.n,b=Xa(h),x=b.c,S=b.n,C=new ga(19),w=0;w<v.length;++w)++C[v[w]&31];for(var w=0;w<x.length;++w)++C[x[w]&31];for(var T=Ja(C,7),E=T.t,D=T.l,O=19;O>4&&!E[ba[O-1]];--O);var k=l+5<<3,A=Za(i,Ma)+Za(a,Na)+o,j=Za(i,f)+Za(a,h)+o+14+3*O+Za(C,E)+2*C[16]+3*C[17]+7*C[18];if(c>=0&&k<=A&&k<=j)return Qa(t,u,e.subarray(c,c+l));var M,N,P,F;if(Ka(t,u,1+(j<A)),u+=2,j<A){M=ja(f,p,0),N=f,P=ja(h,g,0),F=h;var ee=ja(E,D,0);Ka(t,u,y-257),Ka(t,u+5,S-1),Ka(t,u+10,O-4),u+=14;for(var w=0;w<O;++w)Ka(t,u+3*w,E[ba[w]]);u+=3*O;for(var te=[v,x],ne=0;ne<2;++ne)for(var I=te[ne],w=0;w<I.length;++w){var re=I[w]&31;Ka(t,u,ee[re]),u+=E[re],re>15&&(Ka(t,u,I[w]>>5&127),u+=I[w]>>12)}}else M=Pa,N=Ma,P=Ia,F=Na;for(var w=0;w<s;++w){var L=r[w];if(L>255){var re=L>>18&31;qa(t,u,M[re+257]),u+=N[re+257],re>7&&(Ka(t,u,L>>23&31),u+=va[re]);var ie=L&31;qa(t,u,P[ie]),u+=F[ie],ie>3&&(qa(t,u,L>>5&8191),u+=ya[ie])}else qa(t,u,M[L]),u+=N[L]}return qa(t,u,M[256]),u+N[256]},eo=new _a([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),to=new ha(0),no=function(e,t,n,r,i,a){var o=a.z||e.length,s=new ha(r+o+5*(1+Math.ceil(o/7e3))+i),c=s.subarray(r,s.length-i),l=a.l,u=(a.r||0)&7;if(t){u&&(c[0]=a.r>>3);for(var d=eo[t-1],f=d>>13,p=d&8191,m=(1<<n)-1,h=a.p||new ga(32768),g=a.h||new ga(m+1),_=Math.ceil(n/3),v=2*_,y=function(t){return(e[t]^e[t+1]<<_^e[t+2]<<v)&m},b=new _a(25e3),x=new ga(288),S=new ga(32),C=0,w=0,T=a.i||0,E=0,D=a.w||0,O=0;T+2<o;++T){var k=y(T),A=T&32767,j=g[k];if(h[A]=j,g[k]=A,D<=T){var M=o-T;if((C>7e3||E>24576)&&(M>423||!l)){u=$a(e,c,0,b,x,S,w,E,O,T-O,u),E=C=w=0,O=T;for(var N=0;N<286;++N)x[N]=0;for(var N=0;N<30;++N)S[N]=0}var P=2,F=0,ee=p,te=A-j&32767;if(M>2&&k==y(T-te))for(var ne=Math.min(f,M)-1,I=Math.min(32767,T),re=Math.min(258,M);te<=I&&--ee&&A!=j;){if(e[T+P]==e[T+P-te]){for(var L=0;L<re&&e[T+L]==e[T+L-te];++L);if(L>P){if(P=L,F=te,L>ne)break;for(var ie=Math.min(te,L-2),ae=0,N=0;N<ie;++N){var R=T-te+N&32767,oe=R-h[R]&32767;oe>ae&&(ae=oe,j=R)}}}A=j,j=h[A],te+=A-j&32767}if(F){b[E++]=268435456|wa[P]<<18|Da[F];var se=wa[P]&31,ce=Da[F]&31;w+=va[se]+ya[ce],++x[257+se],++S[ce],D=T+P,++C}else b[E++]=e[T],++x[e[T]]}}for(T=Math.max(T,D);T<o;++T)b[E++]=e[T],++x[e[T]];u=$a(e,c,l,b,x,S,w,E,O,T-O,u),l||(a.r=u&7|c[u/8|0]<<3,u-=7,a.h=g,a.p=h,a.i=T,a.w=D)}else{for(var T=a.w||0;T<o+l;T+=65535){var le=T+65535;le>=o&&(c[u/8|0]=l,le=o),u=Qa(c,u+1,e.subarray(T,le))}a.i=o}return Ha(s,0,r+Va(u)+i)},ro=(function(){for(var e=new Int32Array(256),t=0;t<256;++t){for(var n=t,r=9;--r;)n=(n&1&&-306674912)^n>>>1;e[t]=n}return e})(),io=function(){var e=-1;return{p:function(t){for(var n=e,r=0;r<t.length;++r)n=ro[n&255^t[r]]^n>>>8;e=n},d:function(){return~e}}},ao=function(e,t,n,r,i){if(!i&&(i={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),o=new ha(a.length+e.length);o.set(a),o.set(e,a.length),e=o,i.w=a.length}return no(e,t.level==null?6:t.level,t.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,n,r,i)},oo=function(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n},so=function(e,t){return e[t]|e[t+1]<<8},co=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},lo=function(e,t){return co(e,t)+co(e,t+4)*4294967296},uo=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8};function fo(e,t){return ao(e,t||{},0,0)}function po(e,t){return Ga(e,{i:2},t&&t.out,t&&t.dictionary)}var mo=function(e,t,n,r){for(var i in e){var a=e[i],o=t+i,s=r;Array.isArray(a)&&(s=oo(r,a[1]),a=a[0]),ArrayBuffer.isView(a)?n[o]=[a,s]:(n[o+=`/`]=[new ha(0),s],mo(a,o,n,r))}},ho=typeof TextEncoder<`u`&&new TextEncoder,go=typeof TextDecoder<`u`&&new TextDecoder;try{go.decode(to,{stream:!0})}catch{}var _o=function(e){for(var t=``,n=0;;){var r=e[n++],i=(r>127)+(r>223)+(r>239);if(n+i>e.length)return{s:t,r:Ha(e,n-1)};i?i==3?(r=((r&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?t+=String.fromCharCode((r&31)<<6|e[n++]&63):t+=String.fromCharCode((r&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(r)}};function vo(e,t){if(t){for(var n=new ha(e.length),r=0;r<e.length;++r)n[r]=e.charCodeAt(r);return n}if(ho)return ho.encode(e);for(var i=e.length,a=new ha(e.length+(e.length>>1)),o=0,s=function(e){a[o++]=e},r=0;r<i;++r){if(o+5>a.length){var c=new ha(o+8+(i-r<<1));c.set(a),a=c}var l=e.charCodeAt(r);l<128||t?s(l):l<2048?(s(192|l>>6),s(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|e.charCodeAt(++r)&1023,s(240|l>>18),s(128|l>>12&63),s(128|l>>6&63),s(128|l&63)):(s(224|l>>12),s(128|l>>6&63),s(128|l&63))}return Ha(a,0,o)}function yo(e,t){if(t){for(var n=``,r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}else if(go)return go.decode(e);else{var i=_o(e),a=i.s,n=i.r;return n.length&&Wa(8),a}}var bo=function(e,t){return t+30+so(e,t+26)+so(e,t+28)},xo=function(e,t,n){var r=so(e,t+28),i=so(e,t+30),a=yo(e.subarray(t+46,t+46+r),!(so(e,t+8)&2048)),o=t+46+r,s=So(e,o,i,n,co(e,t+20),co(e,t+24),co(e,t+42)),c=s[0],l=s[1],u=s[2];return[so(e,t+10),c,l,a,o+i+so(e,t+32),u]},So=function(e,t,n,r,i,a,o){var s=i==4294967295,c=a==4294967295,l=o==4294967295,u=t+n,d=s+c+l;if(r&&d){for(;t+4<u;t+=4+so(e,t+2))if(so(e,t)==1)return[s?lo(e,t+4+8*c):i,c?lo(e,t+4):a,l?lo(e,t+4+8*(c+s)):o,1];r<2&&Wa(13)}return[i,a,o,0]},Co=function(e){var t=0;if(e)for(var n in e){var r=e[n].length;r>65535&&Wa(9),t+=r+4}return t},wo=function(e,t,n,r,i,a,o,s){var c=r.length,l=n.extra,u=s&&s.length,d=Co(l);uo(e,t,o==null?67324752:33639248),t+=4,o!=null&&(e[t++]=20,e[t++]=n.os),e[t]=20,t+=2,e[t++]=n.flag<<1|(a<0&&8),e[t++]=i&&8,e[t++]=n.compression&255,e[t++]=n.compression>>8;var f=new Date(n.mtime==null?Date.now():n.mtime),p=f.getFullYear()-1980;if((p<0||p>119)&&Wa(10),uo(e,t,p<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),t+=4,a!=-1&&(uo(e,t,n.crc),uo(e,t+4,a<0?-a-2:a),uo(e,t+8,n.size)),uo(e,t+12,c),uo(e,t+14,d),t+=16,o!=null&&(uo(e,t,u),uo(e,t+6,n.attrs),uo(e,t+10,o),t+=14),e.set(r,t),t+=c,d)for(var m in l){var h=l[m],g=h.length;uo(e,t,+m),uo(e,t+2,g),e.set(h,t+4),t+=4+g}return u&&(e.set(s,t),t+=u),t},To=function(e,t,n,r,i){uo(e,t,101010256),uo(e,t+8,n),uo(e,t+10,n),uo(e,t+12,r),uo(e,t+16,i)};function Eo(e,t){t||={};var n={},r=[];mo(e,``,n,t);var i=0,a=0;for(var o in n){var s=n[o],c=s[0],l=s[1],u=l.level==0?0:8,d=vo(o),f=d.length,p=l.comment,m=p&&vo(p),h=m&&m.length,g=Co(l.extra);f>65535&&Wa(11);var _=u?fo(c,l):c,v=_.length,y=io();y.p(c),r.push(oo(l,{size:c.length,crc:y.d(),c:_,f:d,m,u:f!=o.length||m&&p.length!=h,o:i,compression:u})),i+=30+f+g+v,a+=76+2*(f+g)+(h||0)+v}for(var b=new ha(a+22),x=i,S=a-i,C=0;C<r.length;++C){var d=r[C];wo(b,d.o,d,d.f,d.u,d.c.length);var w=30+d.f.length+Co(d.extra);b.set(d.c,d.o+w),wo(b,i,d,d.f,d.u,d.c.length,d.o,d.m),i+=16+w+(d.m?d.m.length:0)}return To(b,i,r.length,S,x),b}function Do(e,t){for(var n={},r=e.length-22;co(e,r)!=101010256;--r)(!r||e.length-r>65558)&&Wa(13);var i=so(e,r+8);if(!i)return{};var a=co(e,r+16),o=co(e,r-20)==117853008;if(o){var s=co(e,r-12);o=co(e,s)==101075792,o&&(i=co(e,s+32),a=co(e,s+48))}for(var c=t&&t.filter,l=0;l<i;++l){var u=xo(e,a,o),d=u[0],f=u[1],p=u[2],m=u[3],h=u[4],g=u[5],_=bo(e,g);a=h,(!c||c({name:m,size:f,originalSize:p,compression:d}))&&(d?d==8?n[m]=po(e.subarray(_,_+f),{out:new ha(p)}):Wa(14,`unknown compression type `+d):n[m]=Ha(e,_,_+f))}return n}function Oo(e){if(new TextDecoder().decode(e.slice(0,8))!==`fig-kiwi`)return null;let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=12,r=[];for(;n<e.length;){let i=t.getUint32(n,!0);n+=4,r.push(e.slice(n,n+i)),n+=i}return r.length>=2?r:null}async function ko(e){try{return po(e)}catch{return(await B(()=>import(`./esm-CddszvWY.js`),__vite__mapDeps([0,1]))).decompress(e)}}function Ao(e,t,n=101){let r=fo(t),i=16+e.length+4+r.length,a=new Uint8Array(i),o=new DataView(a.buffer);a.set(new TextEncoder().encode(`fig-kiwi`),0),o.setUint32(8,n,!0);let s=12;return o.setUint32(s,e.length,!0),s+=4,a.set(e,s),s+=e.length,o.setUint32(s,r.length,!0),s+=4,a.set(r,s),a}function jo(e){let t=un(e.axis);return t===void 0?{axisName:e.axis,value:e.value}:{axisTag:t,axisName:e.axis,value:e.value}}function Mo(e,t,n){t.textDecoration&&(e.textDecoration=t.textDecoration),t.textDecorationStyle&&(e.textDecorationStyle=t.textDecorationStyle),t.textDecorationThickness!=null&&(e.textDecorationThickness={value:t.textDecorationThickness,units:`PIXELS`}),t.textDecorationSkipInk!==void 0&&(e.textDecorationSkipInk=t.textDecorationSkipInk),t.textUnderlineOffset!=null&&(e.textUnderlineOffset={value:t.textUnderlineOffset,units:`PIXELS`}),t.textDecorationFills&&t.textDecorationFills.length>0&&(e.textDecorationFillPaints=t.textDecorationFills.map(n))}function No(e,t,n,r){let i={styleID:e},a=t.fontWeight??n.fontWeight,o=t.italic??n.italic;return i.fontName={family:ge(t.fontFamily??n.fontFamily),style:la(a,o),postscript:``},t.fontSize!==void 0&&(i.fontSize=t.fontSize),t.fontVariations&&t.fontVariations.length>0&&(i.fontVariations=t.fontVariations.map(jo)),t.fontFeatures&&t.fontFeatures.length>0&&cn(i,t.fontFeatures),t.letterSpacing!==void 0&&(i.letterSpacing={value:t.letterSpacing,units:`PIXELS`}),t.lineHeight!==void 0&&t.lineHeight!==null&&(i.lineHeight={value:t.lineHeight,units:`PIXELS`}),Mo(i,t,r),t.fills&&t.fills.length>0&&(i.fillPaints=t.fills.map(r)),i}function Po(e){let t=Array.from({length:e.text.length}).fill(0),n=new Map,r=1;for(let i of e.styleRuns){let e=JSON.stringify(i.style),a=n.get(e);a||(a={id:r++,style:i.style},n.set(e,a));for(let e=i.start;e<i.start+i.length&&e<t.length;e++)t[e]=a.id}return{charIds:t,styleMap:n}}function Fo(e,t,n){if(e.styleRuns.length===0)return{characters:e.text,lines:t(e.text)};let{charIds:r,styleMap:i}=Po(e),a=[...i.values()].map(({id:t,style:r})=>No(t,r,e,n));return{characters:e.text,lines:t(e.text),characterStyleIDs:r,styleOverrideTable:a}}function Io(e){let t=Math.max(1,e.split(`
`).length);return Array.from({length:t},()=>({lineType:`PLAIN`}))}function Lo(e,t,n){let r=mn(n),i=t.get(r);if(i!==void 0)return i;let a=e.push(n)-1;return t.set(r,a),a}function Ro(e,t,n,r,i){let a=[],o=new Set,s=(e,n,r)=>{let i=le(n,r),s=ge(e),c=`${s}|${i}`;o.has(c)||(o.add(c),a.push({key:{family:s,style:la(n,r),postscript:``},fontLineHeight:1.2,fontDigest:t.get(c),fontStyle:r?`ITALIC`:`NORMAL`,fontWeight:n}))};s(e.fontFamily,e.fontWeight,e.italic);for(let t of e.styleRuns)s(t.style.fontFamily??e.fontFamily,t.style.fontWeight??e.fontWeight,t.style.italic??e.italic);let c=e.lineHeight??Math.ceil(e.fontSize*1.2),l=e.text.length>0?e.width/Math.max(e.text.length,1):0,u=e.figmaDerivedTextGlyphs??[],d=u.length>0?u.map((e,t)=>({commandsBlob:Lo(n,r,e.commandsBlob),position:{x:e.x,y:e.y},fontSize:e.fontSize,firstCharacter:t,advance:t+1<u.length?Math.max(u[t+1].x-e.x,0):l,rotation:0})):(i.getGlyphOutlineMetrics(e.fontFamily,le(e.fontWeight,e.italic),e.text,e.fontSize)??[]).map((t,i)=>({commandsBlob:Lo(n,r,ma(t.commands,e.fontSize)),position:{x:t.x||i*l,y:c},fontSize:e.fontSize,firstCharacter:i,advance:t.advance||l,rotation:0})),f=Array.from({length:e.text.length+1},(e,t)=>t*l);return _i({node:e,glyphs:d,fontMetaData:a,baseline:c,width:e.width,lineHeight:c,lineAscent:Math.max(c-e.fontSize*.2,0),logicalIndexToCharacterOffsetMap:f})}function zo(e,t){let n=e.topLeftRadius>0||e.topRightRadius>0||e.bottomLeftRadius>0||e.bottomRightRadius>0;if(e.cornerRadius>0&&(t.cornerRadius=e.cornerRadius),n||e.independentCorners){let n=e.source.id?Ue(e)?.rectangleCornerRadiiIndependent:void 0;t.rectangleCornerRadiiIndependent=typeof n==`boolean`?n:e.independentCorners,t.rectangleTopLeftCornerRadius=e.topLeftRadius,t.rectangleTopRightCornerRadius=e.topRightRadius,t.rectangleBottomLeftCornerRadius=e.bottomLeftRadius,t.rectangleBottomRightCornerRadius=e.bottomRightRadius}(e.cornerSmoothing>0||`cornerSmoothing`in Ue(e))&&(t.cornerSmoothing=e.cornerSmoothing)}function Bo(e,t){if(e.source.id)return e.textAutoResize;let n=e.parentId?t.getNode(e.parentId):void 0;return n&&n.layoutMode!==`NONE`&&n.layoutMode!==`GRID`&&e.layoutPositioning!==`ABSOLUTE`?`HEIGHT`:e.textAutoResize}function Vo(e,t,n,r,i,a,o){Vn(e,In,e.textDirection),t.fontSize=e.fontSize,t.fontName={family:ge(e.fontFamily),style:la(e.fontWeight,e.italic),postscript:``},t.textData=Fo(e,Io,gn),e.fontVariations.length>0&&(t.fontVariations=e.fontVariations.map(jo)),t.textAutoResize=Bo(e,n),t.textAlignHorizontal=e.textAlignHorizontal,t.textAlignVertical=e.textAlignVertical,t.textUserLayoutVersion=4,t.textExplicitLayoutVersion=1,t.textBidiVersion=1,t.textDecorationSkipInk=e.textDecorationSkipInk,t.fontVariantCommonLigatures=!0,t.fontVariantContextualLigatures=!0,cn(t,e.fontFeatures),t.fontVersion=``,t.emojiImageSet=`APPLE`,e.textCase!==`ORIGINAL`&&(t.textCase=e.textCase),e.textTruncation===`ENDING`&&(t.textTruncation=`ENDING`),e.maxLines!=null&&(t.maxLines=e.maxLines),r&&(t.derivedTextData=Ro(e,r,i,a??new Map,o)),e.leadingTrim!==`NONE`&&(t.leadingTrim=e.leadingTrim),e.lineHeight!=null&&(t.lineHeight={value:e.lineHeight,units:`PIXELS`}),t.letterSpacing={value:e.letterSpacing,units:`PIXELS`},e.textDecoration!==`NONE`&&(t.textDecoration=e.textDecoration===`UNDERLINE`?`UNDERLINE`:`STRIKETHROUGH`),e.textDecorationStyle!==`SOLID`&&(t.textDecorationStyle=e.textDecorationStyle),e.textDecorationThickness!=null&&(t.textDecorationThickness={value:e.textDecorationThickness,units:`PIXELS`}),e.textUnderlineOffset!=null&&(t.textUnderlineOffset={value:e.textUnderlineOffset,units:`PIXELS`}),e.textDecorationFills.length>0&&(t.textDecorationFillPaints=e.textDecorationFills.map(gn))}function Ho(e){return e===`HORIZONTAL`||e===`VERTICAL`||e===`NONE`?e:void 0}function Uo(e){return e===`FIXED`||e===`RESIZE_TO_FIT`||e===`RESIZE_TO_FIT_WITH_IMPLICIT_SIZE`?e:void 0}function Wo(e){return e===`SPACE_EVENLY`?`SPACE_BETWEEN`:e}function Go(e){return e===`SPACE_EVENLY`?`SPACE_BETWEEN`:e}function Ko(e){let t=Go(e);return t===`STRETCH`?`MIN`:t}function qo(e,t,n){if(!e.parentId||e.layoutAlignSelf!==`AUTO`||e.layoutPositioning===`ABSOLUTE`)return;let r=n.getNode(e.parentId);r?.counterAxisAlign===`STRETCH`&&(r.layoutMode===`HORIZONTAL`||r.layoutMode===`VERTICAL`)&&(t.stackChildAlignSelf=`STRETCH`)}function Jo(e,t,n,r){return e===void 0?r===(t??n??r)?void 0:r:e}function Yo(e,t){(e.minWidth!=null||e.minHeight!=null)&&(t.minSize={value:{x:e.minWidth??0,y:e.minHeight??0}}),(e.maxWidth!=null||e.maxHeight!=null)&&(t.maxSize={value:{x:e.maxWidth??1/0,y:e.maxHeight??1/0}})}function Xo(e,t,n){e.source.id||Vn(e,Ln,e.layoutDirection),Yo(e,t);let r=e.source.fig.layout;if(r){t.stackMode=Ho(r.stackMode),t.stackSpacing=r.stackSpacing,t.stackPadding=r.stackPadding,t.stackPaddingRight=Jo(r.stackPaddingRight,r.stackHorizontalPadding,r.stackPadding,e.paddingRight),t.stackPaddingBottom=Jo(r.stackPaddingBottom,r.stackVerticalPadding,r.stackPadding,e.paddingBottom),t.stackCounterAlign=Go(r.stackCounterAlign),t.stackJustify=Wo(r.stackJustify),t.stackCounterAlignItems=Ko(r.stackCounterAlignItems),t.stackPrimaryAlignItems=Wo(r.stackPrimaryAlignItems);let i=Uo(r.stackPrimarySizing);i&&(t.stackPrimarySizing=i);let a=Uo(r.stackCounterSizing);a&&(t.stackCounterSizing=a),t.stackVerticalPadding=r.stackVerticalPadding,t.stackHorizontalPadding=r.stackHorizontalPadding,t.stackWrap=r.stackWrap,t.stackPositioning=r.stackPositioning,t.stackChildPrimaryGrow=r.stackChildPrimaryGrow,t.stackChildAlignSelf=r.stackChildAlignSelf,t.stackCounterSpacing=r.stackCounterSpacing,t.bordersTakeSpace=r.bordersTakeSpace,r.stackReverseZIndex&&(t.stackReverseZIndex=!0),qo(e,t,n);return}e.layoutMode!==`NONE`&&e.layoutMode!==`GRID`&&(t.stackMode=e.layoutMode,t.stackSpacing=e.itemSpacing,t.stackVerticalPadding=e.paddingTop,t.stackHorizontalPadding=e.paddingLeft,t.stackPaddingBottom=e.paddingBottom,t.stackPaddingRight=e.paddingRight,t.stackPrimarySizing=e.primaryAxisSizing===`HUG`?`RESIZE_TO_FIT`:`FIXED`,t.stackCounterSizing=e.counterAxisSizing===`HUG`?`RESIZE_TO_FIT`:`FIXED`,t.stackPrimaryAlignItems=Wo(e.primaryAxisAlign),t.stackCounterAlignItems=Ko(e.counterAxisAlign),e.layoutWrap===`WRAP`&&(t.stackWrap=`WRAP`),e.counterAxisSpacing>0&&(t.stackCounterSpacing=e.counterAxisSpacing),t.bordersTakeSpace=e.strokesIncludedInLayout),e.itemReverseZIndex&&(t.stackReverseZIndex=!0),e.layoutPositioning===`ABSOLUTE`&&(t.stackPositioning=`ABSOLUTE`),e.layoutGrow>0&&(t.stackChildPrimaryGrow=e.layoutGrow),e.layoutAlignSelf===`AUTO`?qo(e,t,n):t.stackChildAlignSelf=e.layoutAlignSelf}function Zo(e,t,n){e.isMask&&(t.mask=!0,t.maskType=e.maskType,e.maskIsOutline&&(t.maskIsOutline=!0));let r=[],i={};if(e.vectorNetwork&&e.type===`VECTOR`){let{table:t,mirroringToId:a}=dr(e.vectorNetwork);r=t;let o=n.length;n.push(fr(e.vectorNetwork,a)),i.vectorNetworkBlob=o,i.normalizedSize={x:e.width,y:e.height}}e.fillGeometry.length>0&&(t.fillGeometry=e.fillGeometry.map(e=>{let t=n.length;if(n.push(e.commandsBlob),!e.fills||e.fills.length===0)return{windingRule:e.windingRule,commandsBlob:t};let i=r.length+1;return r.push({styleID:i,fillPaints:e.fills.map(gn)}),{windingRule:e.windingRule,commandsBlob:t,styleID:i}})),r.length>0&&(i.styleOverrideTable=r),Object.keys(i).length>0&&(t.vectorData=i),e.strokeGeometry.length>0&&(t.strokeGeometry=e.strokeGeometry.map(e=>{let t=n.length;return n.push(e.commandsBlob),{windingRule:e.windingRule,commandsBlob:t}}))}function Qo(e,t,n,r){if(Object.keys(e.boundVariables).length===0)return;let i=[],a={},o={COLOR:`COLOR`,BOOLEAN:`BOOLEAN`,STRING:`STRING`};for(let[t,s]of Object.entries(e.boundVariables)){let e=n.variables.get(s);if(!e)continue;let c=r?.get(s)??Qt(s);a[t]=V(c);let l=An[t];if(!l)continue;let u=o[e.type]??`FLOAT`;i.push({variableData:{value:{alias:{guid:c}},dataType:`ALIAS`,resolvedDataType:u},variableField:l})}Object.keys(a).length>0&&Vn(e,zn,JSON.stringify(a)),i.length>0&&(t.variableConsumptionMap={entries:i})}function $o(e){let t=e.flipX?-1:1,n=Math.cos(e.rotation*Math.PI/180),r=Math.sin(e.rotation*Math.PI/180),i=n*t,a=-r*t,o=r,s=n,c=[{x:0,y:0},{x:e.width,y:0},{x:0,y:e.height},{x:e.width,y:e.height}].map(e=>({x:i*e.x+a*e.y,y:o*e.x+s*e.y})),l=Math.min(...c.map(e=>e.x)),u=Math.min(...c.map(e=>e.y));return{m00:i,m01:a,m02:e.x-l,m10:o,m11:s,m12:e.y-u}}function es(e,t,n,r,i,a,o,s,c,l=new Map,u,d,f=ca,p=Yi(i),m){return sa(e,t,n,r,{graph:i,blobs:a,blobIndexByHex:u,nodeIdToGuid:o,assignedGuidValues:d,fontDigestMap:s,glyphBlobMap:l,varIdToGuid:c,modeIdToGuid:m,assetRefToVarGuid:c?yi(i,c):void 0,componentPropertyDefinitionsById:p,fractionalPosition:Zt,mapToFigmaType:Xt,fillToKiwiPaint:gn,safeColor:hn,computeExportTransform:$o,serializeCornerRadii:zo,serializeTextProps:(e,t,n,r,i,a)=>Vo(e,t,n,r,i,a,f),serializeLayoutProps:(e,t)=>Xo(e,t,i),serializeGeometry:Zo,serializeVariableBindings:Qo,sceneNodeToKiwi:sa})}var ts={m00:1,m01:0,m02:0,m10:0,m11:1,m12:0},ns=1;function rs(e,t=`display-p3`){return{guid:e,type:`DOCUMENT`,name:`Document`,visible:!0,opacity:1,phase:`CREATED`,transform:{...ts},strokeWeight:ns,strokeAlign:`CENTER`,strokeJoin:`MITER`,documentColorProfile:t===`display-p3`?`DISPLAY_P3`:`SRGB`}}function is(e,t,n,r,i){return{guid:e,parentIndex:{guid:t,position:n},type:`CANVAS`,name:r,visible:!0,opacity:1,phase:`CREATED`,transform:{...ts},strokeWeight:ns,strokeAlign:`CENTER`,strokeJoin:`MITER`,pageType:`DESIGN`,...i}}var as=[`fontSize`,`fontName`,`lineHeight`,`letterSpacing`,`textDecoration`,`textCase`];function os(e,t,n){if(t?.guid)return e.get(V(t.guid));if(!t?.assetRef||!n)return;let{key:r,version:i}=t.assetRef,a=(i?n.get(`${r}@${i}`):void 0)??n.get(r);return a?e.get(a):void 0}function ss(e,t,n){let r=os(e,t.styleIdForFill,n);r?.styleType===`FILL`&&r.fillPaints&&(t.fillPaints=r.fillPaints);let i=os(e,t.styleIdForStrokeFill,n);i?.styleType===`FILL`&&i.fillPaints&&(t.strokePaints=i.fillPaints)}function cs(e,t,n){let r=os(e,t.styleIdForEffect,n);r?.styleType===`EFFECT`&&r.effects&&(t.effects=r.effects);let i=os(e,t.styleIdForGrid,n);i?.styleType===`GRID`&&i.layoutGrids&&(t.layoutGrids=i.layoutGrids)}function ls(e,t,n){let r=os(e,t.styleIdForText,n);if(!(r?.type!==`TEXT`||r.styleType!==`TEXT`))for(let e of as)e===`textDecoration`?t.textDecoration=r.textDecoration:r[e]!==void 0&&Object.assign(t,{[e]:r[e]})}function us(e,t,n){ss(e,t,n),cs(e,t,n),ls(e,t,n)}function ds(e,t,n){let r={},i=_r(e.fillGeometry,n,gr(e)),a=_r(e.strokeGeometry,n);if(i.length>0?r.fillGeometry=pr(i,t.vectorNetwork):e.size&&t.fillGeometry.length>0&&t.width>0&&t.height>0&&(r.fillGeometry=j(t.fillGeometry,e.size.x/t.width,e.size.y/t.height)),a.length>0?r.strokeGeometry=a:e.size&&t.strokeGeometry.length>0&&t.width>0&&t.height>0&&(r.strokeGeometry=j(t.strokeGeometry,e.size.x/t.width,e.size.y/t.height)),e.size&&t.vectorNetwork?.vertices.length){let n=N(t.vectorNetwork),i=Math.min(...n.vertices.map(({x:e})=>e)),a=Math.min(...n.vertices.map(({y:e})=>e)),o=n.vertices.map(({x:e})=>e),s=n.vertices.map(({y:e})=>e),c=Math.max(...o)-Math.min(...o),l=Math.max(...s)-Math.min(...s),u=c===0?1:e.size.x/c,d=l===0?1:e.size.y/l;for(let e of n.vertices)e.x=i+(e.x-i)*u,e.y=a+(e.y-a)*d;for(let e of n.segments)e.tangentStart.x*=u,e.tangentStart.y*=d,e.tangentEnd.x*=u,e.tangentEnd.y*=d;r.vectorNetwork=n}return r}function fs(e,t,n){let r=t.get(n);if(r!==void 0)return r;let i=e.graph.getChildren(n).filter(e=>e.visible).length;return t.set(n,i),i}function ps(e,t,n){if(!n.parentId||fs(e,t,n.parentId)!==1||!n.componentId)return null;let r=e.graph.getNode(n.componentId),i=e.graph.getNode(n.parentId);return!r||!i?null:r.x>=0&&r.y>=0&&r.x+r.width<=i.width+.01&&r.y+r.height<=i.height+.01?{x:r.x,y:r.y}:null}function ms(e,t,n){if(e.rotation===0&&!e.flipX&&!e.flipY)return null;let r=P(e),i=t/2,a=n/2;return{x:r[2]-i+r[0]*i+r[1]*a,y:r[5]-a+r[3]*i+r[4]*a}}function hs(e,t,n){let r={};e.fontSize!==void 0&&(r.fontSize=e.fontSize),e.lineHeight!==void 0&&(r.lineHeight=rr(e.lineHeight,e.fontSize)),e.letterSpacing!==void 0&&(r.letterSpacing=ir(e.letterSpacing,e.fontSize)),e.strokeWeight!==void 0&&n.strokes.length>0&&(r.strokes=n.strokes.map(t=>({...t,weight:e.strokeWeight})));let i=en(e.derivedTextData,t);return i.length>0&&(r.figmaDerivedTextGlyphs=i),r}function gs(e,t,n,r){let i=hs(n,e.blobs,r),a={};if(n.size&&(i.width=n.size.x,i.height=n.size.y,a.width=n.size.x,a.height=n.size.y),n.transform){let e=kr({transform:n.transform,size:n.size??{x:r.width,y:r.height}});i.x=e.x,i.y=e.y,i.rotation=e.rotation,i.flipX=e.flipX,i.flipY=e.flipY,a.x=e.x,a.y=e.y}else if(n.size){let o=ms(r,n.size.x,n.size.y)??ps(e,t,r);o&&(i.x=o.x,i.y=o.y,a.x=o.x,a.y=o.y)}return Object.keys(a).length>0&&(i.figmaDerivedLayout=a),Object.assign(i,ds(n,r,e.blobs)),{updates:i,hasSize:n.size!==void 0}}function*_s(e,t){if(!t){yield*e.getAllNodes();return}for(let n of t){let t=e.getNode(n);t&&(yield t)}}function vs(e,t,n={}){return{...O(e),componentId:t,figmaDerivedLayout:e.figmaDerivedLayout?{...e.figmaDerivedLayout}:null,...n}}var ys=new WeakSet,bs=new WeakMap;function xs(e){let t=bs.get(e);return t||(t=new Map([...e].map(([e,t])=>[e,new Set(t)])),bs.set(e,t)),t}function Ss(e,t,n){if(ys.has(t))return;let r=xs(t);for(let i of _s(e,n)){if(!i.componentId)continue;let e=r.get(i.componentId);e||(e=new Set,r.set(i.componentId,e),t.set(i.componentId,[])),!e.has(i.id)&&(e.add(i.id),t.get(i.componentId)?.push(i.id))}ys.add(t)}function Cs(e,t,n){let r=xs(n);for(let i of t){let t=e.getNode(i);if(!t?.componentId)continue;let a=r.get(t.componentId);if(a||(a=new Set,r.set(t.componentId,a)),a.has(t.id))continue;a.add(t.id);let o=n.get(t.componentId);o?o.push(t.id):n.set(t.componentId,[t.id])}}function ws(e,t,n){let r=[],i=[t],a=0;for(;a<i.length;){let t=e.getNode(i[a]);a++,t&&(r.push(t.id),i.push(...t.childIds))}Cs(e,r,n)}function Ts(e,t){let n=[],r=e.getNode(t);if(!r)return n;let i=(t,r)=>{let a=e.getNode(t);a&&(n.push({id:a.id,path:r,type:a.type}),a.childIds.forEach((e,t)=>i(e,[...r,t])))};return r.childIds.forEach((e,t)=>i(e,[t])),n}function Es(e,t,n){let r=e.getNode(t);if(!r)return null;for(let t of n){let n=r.childIds[t];if(!n||(r=e.getNode(n),!r))return null}return r}function Ds(e,t,n,r){return new Set([...r?.get(t)??[],...r?.get(n)??[],...e.instanceIndex.get(t)??[],...e.instanceIndex.get(n)??[]])}function Os(e,t,n){if(!e)return;let r=xs(e),i=r.get(t);if(i||(i=new Set,r.set(t,i)),i.has(n))return;i.add(n);let a=e.get(t);a||(a=[],e.set(t,a)),a.push(n)}function ks(e,t,n,r,i){r&&Ss(e,r,i);for(let i of n){let n=Es(e,t,i.path);if(!n||n.type!==i.type)continue;let a=Ds(e,i.id,n.id,r);for(let t of a){let a=e.getNode(t);a?.componentId!==i.id&&a?.componentId!==n.id||(e.updateNode(t,vs(n,n.id)),Os(r,n.id,t))}}}var As=20,js=new WeakMap,Ms=new WeakMap,Ns=new WeakMap,Ps=new WeakMap,Fs=new WeakMap,Is=new WeakMap;function Ls(e){function t(n,r=0){let i=e.preComputedRoot.get(n);if(i!==void 0)return i;if(r>As)return n;let a=e.graph.getNode(n);if(a?.componentId&&a.componentId!==n){let i=t(a.componentId,r+1);return e.preComputedRoot.set(n,i),i}return e.preComputedRoot.set(n,n),n}for(let n of _s(e.graph,e.activeNodeIds)){if(!n.componentId)continue;t(n.id);let r=e.preComputedClones.get(n.componentId);r?r.push(n.id):e.preComputedClones.set(n.componentId,[n.id])}}function Rs(e,t,n=0){let r=e.componentIdRoot.get(t);if(r!==void 0)return r;if(n>As)return e.componentIdRoot.set(t,t),t;let i=e.graph.getNode(t);if(i?.componentId){let r=Rs(e,i.componentId,n+1);return e.componentIdRoot.set(t,r),r}let a=e.nodeIdToGuid.get(t);if(a){let r=e.changeMap.get(a)?.symbolData?.symbolID;if(r){let i=e.guidToNodeId.get(V(r));if(i&&i!==t){let r=Rs(e,i,n+1);return e.componentIdRoot.set(t,r),r}}}return e.componentIdRoot.set(t,t),t}function zs(e){let t=new Map;for(let[n,r]of e.changeMap){let e=r.parentIndex?.guid?V(r.parentIndex.guid):null,i=r.symbolData?.symbolID?V(r.symbolData.symbolID):null;if(!e||!i)continue;let a=`${e}\0${i}`,o=t.get(a);o?o.push(n):t.set(a,[n])}for(let n of t.values())n.sort((t,n)=>{let r=e.changeMap.get(t),i=e.changeMap.get(n);return(r?.transform?.m12??0)-(i?.transform?.m12??0)||(r?.transform?.m02??0)-(i?.transform?.m02??0)});return t}function Bs(e){let t=Ms.get(e);if(t)return t;let n=zs(e);return Ms.set(e,n),n}function Vs(e,t){let n=js.get(e);if(n||(n=new Map,js.set(e,n)),n.has(t))return n.get(t)??null;let r=e.changeMap.get(t),i=r?.parentIndex?.guid?V(r.parentIndex.guid):null,a=r?.symbolData?.symbolID?V(r.symbolData.symbolID):null;if(!r||!i||!a)return n.set(t,null),null;let o=(Bs(e).get(`${i}\0${a}`)??[]).indexOf(t),s=o===-1?null:o;return n.set(t,s),s}function Hs(e,t,n){let r=Fs.get(e);r||(r=new Map,Fs.set(e,r));let i=`${t}\0${n}`;if(r.has(i))return r.get(i)??null;let a=(t,r)=>{let i=e.graph.getNode(t);if(!i)return null;if(t===n||i.componentId===n)return r;for(let e=0;e<i.childIds.length;e++){let t=a(i.childIds[e],[...r,e]);if(t)return t}return null},o=a(t,[]);return r.set(i,o),o}function Us(e,t,n){let r=e.graph.getNode(t);if(!r?.componentId)return null;let i=Hs(e,r.componentId,n);if(!i)return null;let a=r;for(let t of i){let n=a.childIds[t];if(!n)return null;let r=e.graph.getNode(n);if(!r)return null;a=r}return a.id}function Ws(e,t,n,r){if(!n||!r)return null;let i=null,a=0,o=t=>{if(a>1)return;let s=e.graph.getNode(t);if(s){s.name===n&&s.type===r&&(a++,i=t);for(let e of s.childIds)o(e)}};return o(t),a===1?i:null}function Gs(e,t,n,r){let i=Vs(e,r);if(i==null)return null;let a=e.preComputedRoot.get(n)??Rs(e,n),o=Ns.get(e);o||(o=new Map,Ns.set(e,o));let s=`${t}\0${a}`,c=o.get(s);if(!c){c=[];let n=t=>{let r=e.graph.getNode(t);if(r){r.componentId&&(e.preComputedRoot.get(r.componentId)??Rs(e,r.componentId))===a&&c?.push(t);for(let e of r.childIds)n(e)}};n(t),c.sort((t,n)=>{let r=e.graph.getNode(t),i=e.graph.getNode(n);return(r?.y??0)-(i?.y??0)||(r?.x??0)-(i?.x??0)}),o.set(s,c)}return c[i]??null}function Ks(e,t,n){let r=Ps.get(e);r||(r=new Map,Ps.set(e,r));let i=`${t}\0${n}`;if(r.has(i))return r.get(i)??null;let a=e.graph.getNode(t);if(!a)return null;for(let t of a.childIds)if(e.graph.getNode(t)?.componentId===n)return r.set(i,t),t;let o=e.preComputedRoot.get(n)??Rs(e,n);if(o){let t=null,n=!1;for(let r of a.childIds){let i=e.graph.getNode(r);if(i?.componentId&&(e.preComputedRoot.get(i.componentId)??Rs(e,i.componentId))===o){if(t){n=!0;break}t=r}}if(t&&!n)return r.set(i,t),t}for(let t of a.childIds){let a=Ks(e,t,n);if(a)return r.set(i,a),a}return null}function qs(e,t,n,r,i){return r?e.graph.getNode(t)?.componentId===r?t:Us(e,t,r)??Ks(e,t,r)??Gs(e,t,r,n)??Ws(e,t,i?.name,i?.type):Ws(e,t,i?.name,i?.type)}function Js(e,t,n){let r=Is.get(e);r||(r=new Map,Is.set(e,r));let i=t,a=[];for(let o=0;o<n.length;o++){let s=V(n[o]);a.push(s);let c=`${t}\0${a.join(`/`)}`,l=r.get(c);if(l&&e.graph.getNode(l)){i=l;continue}l&&r.delete(c);let u=e.overrideKeyToGuid.get(s)??s,d=e.changeMap.get(u),f=d?.symbolData?.symbolID?V(d.symbolData.symbolID):null,p=e.guidToNodeId.get(u)??(f?e.guidToNodeId.get(f):void 0),m=qs(e,i,u,p,d);if(m){i=m,r.set(c,m);continue}let h=e.graph.getNode(i);if(h?.childIds.length===1){i=h.childIds[0],o--,a.pop();continue}return null}return i}function Ys(e,t){let n=[],r=t=>{let i=e.graph.getNode(t);if(i){i.strokes.length>0&&n.push(T(i.strokes));for(let e of i.childIds)r(e)}};return r(t),n}function Xs(e,t,n){let r=0,i=t=>{let a=e.graph.getNode(t);if(a){a.strokes.length>0&&(r<n.length&&e.graph.preserveSourceMetadataDuring(()=>{e.graph.updateNode(t,{strokes:T(n[r])})}),r++);for(let e of a.childIds)i(e)}};i(t)}function Zs(e,t){if(!t)return``;let n=t.parentId?e.graph.getNode(t.parentId):void 0;return n?.type===`COMPONENT_SET`?n.name:t.name}function Qs(e,t){let n=O(t);n.width=e.width,n.height=e.height,n.boundVariables={...n.boundVariables};for(let t of[`width`,`height`]){let r=e.boundVariables[t];r&&(n.boundVariables[t]=r)}return n}function $s(e,t,n){let r=e.graph.getNode(t);if(r?.type!==`INSTANCE`)return;let i=Ys(e,t),a=Ts(e.graph,t),o=r.componentId?Rs(e,r.componentId):void 0,s=o?e.graph.getNode(o):void 0;for(let t of Array.from(r.childIds))e.graph.deleteNode(t);let c=e.graph.getNode(n),l=c?{...Qs(r,c),componentId:n}:{componentId:n},u=Zs(e,s),d=Zs(e,c);d&&u&&(r.name===u||r.name===s?.name)&&(l.name=d),e.graph.preserveSourceMetadataDuring(()=>e.graph.updateNode(t,l)),c&&c.childIds.length>0&&(e.graph.populateInstanceChildren(t,n,`fig-import`),ws(e.graph,t,e.preComputedClones),Xs(e,t,i)),ks(e.graph,t,a,e.preComputedClones,e.activeNodeIds),e.swappedInstances.add(t),e.componentIdRoot.clear(),Ns.delete(e),Ps.delete(e)}var ec={text:`text`,visible:`visible`,opacity:`opacity`,fills:`fills`,strokes:`strokes`,effects:`effects`,styleRuns:`styleRuns`,layoutGrow:`layoutGrow`,textAutoResize:`textAutoResize`,locked:`locked`,x:`x`,y:`y`,width:`width`,height:`height`,figmaDerivedLayout:`figmaDerivedLayout`,fontSize:`fontSize`,lineHeight:`lineHeight`,letterSpacing:`letterSpacing`,fillGeometry:`fillGeometry`,strokeGeometry:`strokeGeometry`};function tc(e,t,n){let r=e.get(t);r?r.add(n):e.set(t,new Set([n]))}function nc(e,t,n){for(let r of Object.keys(n)){let n=ec[r];n&&tc(e,t,n)}}function rc(e,t,n){return e?.get(t)?.has(n)===!0}function ic(e,t){t.strokes&&=t.strokes.map((t,n)=>{if(n>=e.strokes.length)return{...t,cap:e.strokeCap,join:e.strokeJoin,dashPattern:e.dashPattern};let r=e.strokes[n];return{...t,cap:r.cap,join:r.join,dashPattern:r.dashPattern}})}function ac(e,t){let n=!1;if(t.swapComponentId&&($s(e,t.targetId,t.swapComponentId),tc(e.protectedFields,t.targetId,`structure`),n=!0),t.props&&Object.keys(t.props).length>0){let r=e.graph.getNode(t.targetId);if(r){let i=t.props;i.boundVariables&&={...r.boundVariables,...i.boundVariables},ic(r,i),e.graph.preserveSourceMetadataDuring(()=>e.graph.updateNode(t.targetId,i)),nc(e.protectedFields,t.targetId,i),n=!0}}return n}function oc(e,t,n){return!rc(e,t,n)}function sc(e,t,n){switch(e){case`text`:n.text=t.text;break;case`visible`:n.visible=t.visible;break;case`opacity`:n.opacity=t.opacity;break;case`locked`:n.locked=t.locked;break;case`layoutGrow`:n.layoutGrow=t.layoutGrow;break;case`textAutoResize`:n.textAutoResize=t.textAutoResize;break}}function cc(e,t){return(n,r,i,a)=>{n[e]!==r[e]&&oc(a,r.id,t)&&sc(e,n,i)}}var lc=[cc(`text`,`text`),cc(`visible`,`visible`),cc(`opacity`,`opacity`),cc(`locked`,`locked`),cc(`layoutGrow`,`layoutGrow`),cc(`textAutoResize`,`textAutoResize`)];function uc(e,t,n){switch(e){case`fills`:n.fills=M(t.fills,C(t.fills));break;case`strokes`:n.strokes=M(t.strokes,T(t.strokes));break;case`effects`:n.effects=M(t.effects,y(t.effects));break;case`styleRuns`:n.styleRuns=M(t.styleRuns,ue(t.styleRuns));break}}function dc(e,t,n,r){let i=`${e}/`,a=r.boundVariables??n.boundVariables,o=oe(a,Object.keys(a).filter(e=>e.startsWith(i)));for(let[e,n]of Object.entries(t.boundVariables))e.startsWith(i)&&(o[e]=n);r.boundVariables=o}function fc(e,t){return(n,r,i,a)=>{!w(n[e],r[e])&&oc(a,r.id,t)&&(uc(e,n,i),(e===`fills`||e===`strokes`)&&dc(e,n,r,i))}}var pc=[fc(`fills`,`fills`),fc(`strokes`,`strokes`),fc(`effects`,`effects`),fc(`styleRuns`,`styleRuns`)];function mc(e,t,n,r){let i=t.boundVariables[e];if(n.boundVariables[e]===i)return;let a={...r.boundVariables??n.boundVariables};i&&(a[e]=i),r.boundVariables=i?a:oe(a,[e])}function hc(e,t,n,r){for(let i of lc)i(e,t,n,r);for(let i of pc)i(e,t,n,r);mc(`opacity`,e,t,n)}function gc(e,t,n,r){let i={};hc(t,n,i,r),Object.keys(i).length>0&&e.updateNode(n.id,i)}function _c(e,t,n,r,i,a,o){let s=e.getNode(t);if(!s)return;let c=a??yc(e,o),l=Ts(e,n.id);for(let t of Array.from(n.childIds))e.deleteNode(t);e.updateNode(n.id,vs(s,s.componentId,{name:s.name})),gc(e,s,n,i),s.childIds.length>0&&(e.populateInstanceChildren(n.id,t,`fig-import`),ws(e,n.id,c)),ks(e,n.id,l,c,o),r.add(n.id)}function vc(e,t,n,r,i,a,o,s){let c=e.getNode(t),l=e.getNode(n);if(!c||!l)return;let u=o??yc(e,s),d=Math.min(c.childIds.length,l.childIds.length);for(let t=0;t<d;t++){if(i?.has(l.childIds[t]))continue;let n=e.getNode(c.childIds[t]),o=e.getNode(l.childIds[t]);if(!(!n||!o||n.type!==o.type)){if(n.type===`INSTANCE`&&n.componentId!==o.componentId){_c(e,c.childIds[t],o,r,a,u,s);continue}gc(e,n,o,a),vc(e,c.childIds[t],l.childIds[t],r,i,a,u,s)}}}function yc(e,t){let n=new Map;for(let r of _s(e,t)){if(!r.componentId)continue;let e=n.get(r.componentId);e||(e=[],n.set(r.componentId,e)),e.push(r.id)}return n}function bc(e,t){let n=new Set(t);for(let r of t){let t=e.getNode(r);for(;t?.parentId;){let r=e.getNode(t.parentId);if(!r)break;(r.type===`INSTANCE`||r.type===`COMPONENT`)&&n.add(r.id),t=r}}return n}function xc(e,t){let n=new Set,r=[...e];for(let e=r.pop();e!==void 0;e=r.pop()){let i=t.get(e);if(i)for(let e of i)n.has(e)||(n.add(e),r.push(e))}return n}function Sc(e,t){if(!t)return e;let n=new Map;for(let r of[t,e])for(let[e,t]of r){let r=n.get(e);if(r)for(let e of t)r.includes(e)||r.push(e);else n.set(e,[...t])}return n}function Cc(e,t,n,r,i){if(t.size===0)return;let a=Sc(yc(e,n),i),o=new Set(t),s=[...t].map(e=>({lineageId:e,sourceId:e})),c=0;for(;c<s.length;){let{lineageId:t,sourceId:n}=s[c];c++;let i=e.getNode(n);if(i)for(let c of a.get(t)??[]){if(o.has(c))continue;o.add(c);let t=e.getNode(c);t&&gc(e,i,t,r),s.push({lineageId:c,sourceId:t?.id??n})}}}function wc(e,t,n,r,i,a,o){if(t.size===0)return;r.clear();let s=yc(e,a),c=bc(e,t),l=xc(c,s),u=i&&i.size>0?new Set([...t,...i]):t,d=new Set,f=[...c],p=0;for(;p<f.length;){let t=f[p];p++;let r=s.get(t);if(!r)continue;let i=e.getNode(t);if(i)for(let c of r){if(!l.has(c)||d.has(c))continue;d.add(c);let r=e.getNode(c);if(r){if(u.has(c)){f.push(c);continue}if(gc(e,i,r,o),i.childIds.length!==r.childIds.length){let n=Ts(e,r.id);for(let t of Array.from(r.childIds))e.deleteNode(t);i.childIds.length>0&&(e.populateInstanceChildren(r.id,t,`fig-import`),ws(e,r.id,s)),ks(e,r.id,n,s,a)}else i.childIds.length>0&&r.childIds.length>0&&vc(e,t,r.id,n,u,o,s,a);f.push(c)}}}}function Tc(e,t){if(t.type!==`INSTANCE`||!e.figmaDerivedLayout)return{};let n=e.figmaDerivedLayout;return{...n.x===void 0?{}:{x:n.x},...n.y===void 0?{}:{y:n.y},figmaDerivedLayout:{...n,...t.figmaDerivedLayout,x:n.x??t.figmaDerivedLayout?.x,y:n.y??t.figmaDerivedLayout?.y}}}function Ec(e,t,n,r,i){let a={};return i.has(r)?Tc(t,n):(t.width!==n.width&&(a.width=t.width),t.height!==n.height&&(a.height=t.height),t.x!==n.x&&(a.x=t.x),t.y!==n.y&&(a.y=t.y),e.geometryOverrideNodes.has(r)||(t.fillGeometry!==n.fillGeometry&&(a.fillGeometry=k(t.fillGeometry)),t.strokeGeometry!==n.strokeGeometry&&(a.strokeGeometry=k(t.strokeGeometry))),t.text===n.text&&t.figmaDerivedTextGlyphs&&(a.figmaDerivedTextGlyphs=structuredClone(t.figmaDerivedTextGlyphs)),t.text===n.text&&t.figmaDerivedLayout&&(a.figmaDerivedLayout={...t.figmaDerivedLayout}),a)}function Dc(e,t){Oc(e,t),jc(e)}function Oc(e,t){for(let n of t){let t=e.graph.getNode(n);if(t?.layoutMode!==`NONE`||t.childIds.length!==1)continue;let r=e.graph.getNode(t.childIds[0]);if(!r||r.childIds.length>0||r.horizontalConstraint!==`SCALE`||r.verticalConstraint!==`SCALE`)continue;let i=r.figmaDerivedLayout?.width,a=r.figmaDerivedLayout?.height,o=i!==void 0&&a!==void 0,s=!o&&r.type===`ROUNDED_RECTANGLE`&&r.fills.some(e=>e.type===`IMAGE`);if(!o&&!s)continue;let c=i??t.width,l=a??t.height;r.width===c&&r.height===l||e.graph.updateNode(r.id,{width:c,height:l})}}function kc(e,t){return e.counterAxisAlign===`CENTER`?e.layoutMode===`HORIZONTAL`?t.height<=1&&t.width>t.height:e.layoutMode===`VERTICAL`?t.width<=1&&t.height>t.width:!1:!1}function Ac(e,t){if(t.source.format!==null||!t.componentId||!t.name.endsWith(`Divider`)||!t.parentId||t.figmaDerivedLayout?.x!==void 0||t.figmaDerivedLayout?.y!==void 0)return null;let n=e.getNode(t.parentId),r=e.getNode(t.componentId),i=r?.figmaDerivedLayout;return!n||!r||i?.x===void 0||i.y===void 0||t.width!==r.width||t.height!==r.height||!kc(n,t)?null:n.layoutMode===`HORIZONTAL`?{axis:`y`,position:i.y}:{axis:`x`,position:i.x}}function jc(e){for(let t of _s(e.graph,e.activeNodeIds)){let n=Ac(e.graph,t);n&&e.graph.updateNode(t.id,{figmaDerivedLayout:{...t.figmaDerivedLayout,[n.axis]:n.position}})}}function Mc(e){for(let t of _s(e.graph,e.activeNodeIds)){if(t.source.format===`fig`||!t.figmaDerivedLayout||!t.parentId||t.layoutPositioning===`ABSOLUTE`)continue;let n=e.graph.getNode(t.parentId);if(!n||n.source.format===`fig`||n.layoutMode!==`NONE`||!n.figmaDerivedLayout)continue;let r={};t.horizontalConstraint===`STRETCH`&&t.figmaDerivedLayout.width!==void 0&&t.figmaDerivedLayout.width===n.figmaDerivedLayout.width&&(r.width=t.figmaDerivedLayout.width),t.verticalConstraint===`STRETCH`&&t.figmaDerivedLayout.height!==void 0&&t.figmaDerivedLayout.height===n.figmaDerivedLayout.height&&(r.height=t.figmaDerivedLayout.height),Object.keys(r).length>0&&e.graph.updateNode(t.id,r)}}function Nc(e,t,n){if(t.size===0)return;let r=yc(e.graph,e.activeNodeIds),i=[...t],a=new Set,o=0;for(;o<i.length;){let t=i[o];o++;let s=e.graph.getNode(t);if(!s)continue;let c=r.get(t);if(c)for(let t of c){if(a.has(t))continue;a.add(t);let r=e.graph.getNode(t);if(!r)continue;let o=Ec(e,s,r,t,n);Object.keys(o).length>0&&e.graph.preserveSourceMetadataDuring(()=>e.graph.updateNode(t,o)),i.push(t)}}}function Pc(e){let t=new Map;for(let[n,r]of e.graph.instanceIndex)for(let i of r){if(e.activeNodeIds&&!e.activeNodeIds.has(i)||e.graph.getNode(i)?.type!==`INSTANCE`)continue;let r=t.get(n);r?r.push(i):t.set(n,[i])}return t}function Fc(e,t,n){let r=n.get(e);if(r)return r;let i=[],a=new Set,o=e=>{if(!a.has(e)){a.add(e),i.push(e);for(let n of t.get(e)??[])o(n)}};return o(e),n.set(e,i),i}function Ic(e){return e.toLowerCase().replace(/[^a-z0-9]/g,``)}function Lc(e){let[t,n]=e.split(`:`).map(Number);return{sessionID:t,localID:n}}function Rc(e){return typeof e.textValue==`string`?e.textValue:e.textValue?.characters??e.textDataValue?.characters}function zc(e){return e.boolValue===void 0&&e.textValue===void 0&&e.textDataValue===void 0&&e.guidValue===void 0}function Bc(e,t,n,r){if(!zc(t.value))return t.value;let i=t.varValue?.value;return i?.symbolIdValue?.guid?{guidValue:i.symbolIdValue.guid}:i?.boolValue===void 0?i?.textValue===void 0?i?.textDataValue===void 0?r?e.propDefaults.get(n)??t.value:t.value:{textDataValue:i.textDataValue}:{textValue:i.textValue}:{boolValue:i.boolValue}}function Vc(e,t,n=!1){let r=new Map;for(let i of t){if(!i.defID)continue;let t=V(i.defID);r.set(t,Bc(e,i,t,n))}return r}function Hc(e,t,n,r){ac(e,n)&&r?.add(t)}function Uc(e,t,n,r){n.boolValue!==void 0&&Hc(e,t,{targetId:t,source:`component-prop`,props:{visible:n.boolValue}},r)}function Wc(e,t,n,r){let i=e.graph.getNode(t),a=Rc(n);if(a===void 0||i?.type!==`TEXT`)return;let o=i.componentId?e.graph.getNode(i.componentId):null,s={text:a};o?.type===`TEXT`&&o.text===a&&(s.width=o.width,s.height=o.height,s.fills=C(o.fills),s.styleRuns=ue(o.styleRuns),s.figmaDerivedTextGlyphs=o.figmaDerivedTextGlyphs?structuredClone(o.figmaDerivedTextGlyphs):void 0),Hc(e,t,{targetId:t,source:`component-prop`,props:s},r)}function Gc(e,t,n,r){let i=Rc(n)??(n.guidValue?V(n.guidValue):void 0),a=i?e.guidToNodeId.get(i):void 0;a&&Hc(e,t,{targetId:t,source:`component-prop`,swapComponentId:Rs(e,a)},r)}function Kc(e,t,n,r,i){switch(n.componentPropNodeField){case`VISIBLE`:Uc(e,t,r,i);break;case`TEXT_DATA`:Wc(e,t,r,i);break;case`OVERRIDDEN_SYMBOL_ID`:Gc(e,t,r,i);break}}function qc(e,t,n){let r=t;for(let t=0;r&&t<10;t++){let t=e.graph.getNode(r),i=t?.overrideKey?e.overrideKeyToGuid.get(t.overrideKey)??t.overrideKey:void 0,a=e.nodeIdToGuid.get(r)??i;if(a){let e=n.get(a);if(e)return e}let o=t?.componentId??void 0;if(o===r)break;r=o}}function Jc(e,t,n){let r=Ic(t),i=[];for(let t of n.keys()){let n=e.propNames.get(t);n&&Ic(n)===r&&i.push({defID:Lc(t),componentPropNodeField:`VISIBLE`})}return i.length>0?i:void 0}function Yc(e,t){return e.defID?t.get(V(e.defID)):void 0}function Xc(e,t,n,r,i){if(n)for(let a of n){let n=Yc(a,r);n&&Kc(e,t,a,n,i)}}function Zc(e,t,n,r){if(!t)return;let i=e.graph.getNode(t);if(!i)return;let a;for(let t of i.childIds){let i=e.graph.getNode(t);if(i){if(i.id===n.componentId||i.componentId&&i.componentId===n.componentId)return qc(e,i.id,r)??[];!a&&i.name===n.name&&i.type===n.type&&(a=i.id)}}return a?qc(e,a,r):void 0}function Qc(e,t,n,r,i){let a=e.graph.getNode(t);if(a)for(let t of a.childIds){let o=e.graph.getNode(t);if(!o?.componentId){Qc(e,t,n,r,i);continue}Xc(e,t,Zc(e,a.componentId,o,r)??qc(e,o.componentId,r)??Jc(e,o.name,n),n,i),Qc(e,t,n,r,i)}}function $c(e,t,n,r){for(let[i,a]of t){let t=e.guidToNodeId.get(i);!t||e.activeNodeIds&&!e.activeNodeIds.has(t)||e.graph.getNode(t)?.type===`INSTANCE`&&Qc(e,t,Vc(e,a),n,r)}}function el(e,t,n){let r=Pc(e),i=new Map;for(let[a,o]of e.changeMap){let s=e.guidToNodeId.get(a);if(!s||e.activeNodeIds&&!e.activeNodeIds.has(s)||e.graph.getNode(s)?.type!==`INSTANCE`)continue;let c=o.symbolData?.symbolOverrides;if(c)for(let a of c){if(!a.componentPropAssignments?.length)continue;let o=a.guidPath?.guids;if(!o?.length)continue;let c=Vc(e,a.componentPropAssignments,!0);for(let a of Fc(s,r,i)){let r=Js(e,a,o);r&&Qc(e,r,c,t,n)}}}}function tl(e){if(e.componentPropRefsMap)return e.componentPropRefsMap;let t=new Map;for(let[n,r]of e.changeMap)r.componentPropRefs?.length&&t.set(n,r.componentPropRefs);return e.componentPropRefsMap=t,t}function nl(e){if(e.componentPropAssignmentsMap)return e.componentPropAssignmentsMap;let t=new Map;for(let[n,r]of e.changeMap)r.componentPropAssignments?.length&&t.set(n,r.componentPropAssignments);return e.componentPropAssignmentsMap=t,t}function rl(e){let t=new Set,n=tl(e);return n.size===0?t:($c(e,nl(e),n,t),el(e,n,t),t)}var il=new Set([`FRAME`,`COMPONENT`,`COMPONENT_SET`,`INSTANCE`,`GROUP`,`BOOLEAN_OPERATION`]);function al(e,t,n,r,i){let a=r-n;if(i===`MAX`)return{position:e+a,size:t};if(i===`CENTER`)return{position:e+a/2,size:t};if(i===`STRETCH`)return{position:e,size:Math.max(1,t+a)};if(i===`SCALE`&&n>0){let i=r/n;return{position:e*i,size:Math.max(1,t*i)}}return{position:e,size:t}}function ol(e,t,n,r,i){let a=al(e.x,e.width,t.width,n.width,r),o=al(e.y,e.height,t.height,n.height,i);return{x:Math.round(a.position),y:Math.round(o.position),width:Math.round(a.size),height:Math.round(o.size)}}function sl(e,t,n){return ol(e,t,n,`SCALE`,`SCALE`)}function cl(e,t,n,r,i){if(!e||t<=0||n<=0)return null;let a=r/t,o=i/n;return a===1&&o===1?null:{vertices:e.vertices.map(e=>({...e,x:e.x*a,y:e.y*o})),segments:e.segments.map(e=>({...e,tangentStart:{x:e.tangentStart.x*a,y:e.tangentStart.y*o},tangentEnd:{x:e.tangentEnd.x*a,y:e.tangentEnd.y*o}})),regions:e.regions}}function ll(e,t){let n=e.getNode(t);if(!n||!il.has(n.type))return null;let r=new Map,i=t=>{let n=e.getNode(t);if(n)for(let t of n.childIds){let n=e.getNode(t);n&&(r.set(t,{x:n.x,y:n.y,width:n.width,height:n.height,vectorNetwork:n.vectorNetwork?N(n.vectorNetwork):null,fillGeometry:k(n.fillGeometry),strokeGeometry:k(n.strokeGeometry)}),i(t))}};return i(t),r.size>0?r:null}function ul(e,t,n,r,i){let a=new Map,o=(t,n,r)=>{let s=e.getNode(t);if(!s)return;let c=s.type===`GROUP`||s.type===`BOOLEAN_OPERATION`;for(let t of s.childIds){let l=i.get(t),u=e.getNode(t);if(!l||!u)continue;if(s.layoutMode!==`NONE`&&u.layoutPositioning!==`ABSOLUTE`){o(t,l,u);continue}let d=c?sl(l,n,r):ol(l,n,r,u.horizontalConstraint,u.verticalConstraint),f={...d},p=cl(l.vectorNetwork,l.width,l.height,d.width,d.height);if(p&&(f.vectorNetwork=p),l.width>0&&l.height>0){let e=d.width/l.width,t=d.height/l.height;(e!==1||t!==1)&&(l.fillGeometry.length>0&&(f.fillGeometry=j(l.fillGeometry,e,t)),l.strokeGeometry.length>0&&(f.strokeGeometry=j(l.strokeGeometry,e,t)))}a.set(t,f),o(t,l,u.layoutMode===`NONE`?d:u)}};return o(t,n,r),a}var dl=10;function fl(e){let{graph:t}=e,n=new Set;for(let r of _s(t,e.activeNodeIds)){if(r.type!==`INSTANCE`||!r.componentId)continue;let i=t.getNode(r.componentId);if(!i||i.width<=0||i.height<=0)continue;let a=pl(t,r,i);if(!a||(yl(e,r,a.basis),r.layoutMode!==`NONE`))continue;let{sx:o,sy:s}=a;if(Math.abs(o-1)<.001&&Math.abs(s-1)<.001)continue;let c=e.nodeIdToGuid.get(r.id),l=c?e.changeMap.get(c)?.strokeWeight:void 0;El(t,r,i,o,s,n,e.geometryOverrideNodes,a.useCurrentChildAsSource,l,a.scaleThroughFixedWrappers)}n.size>0&&Dl(e,n)}function pl(e,t,n){let r=ml(t),i=bl(e,t,n);if(!r&&!i)return null;let a=i??n;return{basis:a,scaleThroughFixedWrappers:r!==null,sx:t.width/a.width,sy:t.height/a.height,useCurrentChildAsSource:a!==n}}function ml(e){let t=He(e,`targetAspectRatio`);if(!t||typeof t!=`object`||!(`value`in t))return null;let n=t.value;if(!n||typeof n!=`object`||!(`x`in n)||!(`y`in n))return null;let{x:r,y:i}=n;return typeof r!=`number`||typeof i!=`number`||!Number.isFinite(r)||!Number.isFinite(i)||r<=0||i<=0?null:{width:r,height:i}}function hl(e,t,n){let r=t;for(let t=0;t<dl&&r?.componentId;t++){if(r.componentId===n)return!0;r=e.getNode(r.componentId)}return!1}function gl(e,t,n){let r={},i=t.horizontalConstraint===`MAX`||t.horizontalConstraint===`CENTER`,a=t.verticalConstraint===`MAX`||t.verticalConstraint===`CENTER`;return i&&t.figmaDerivedLayout?.x===void 0&&!rc(e.protectedFields,t.id,`x`)&&t.x!==n.x&&(r.x=n.x),a&&t.figmaDerivedLayout?.y===void 0&&!rc(e.protectedFields,t.id,`y`)&&t.y!==n.y&&(r.y=n.y),r}function _l(e,t,n){let r={};return t.horizontalConstraint===`STRETCH`&&t.figmaDerivedLayout?.width===void 0&&!rc(e.protectedFields,t.id,`width`)&&t.width!==n.width&&(r.width=n.width),t.verticalConstraint===`STRETCH`&&t.figmaDerivedLayout?.height===void 0&&!rc(e.protectedFields,t.id,`height`)&&t.height!==n.height&&(r.height=n.height),r}function vl(e,t,n){return{...gl(e,t,n),..._l(e,t,n)}}function yl(e,t,n){let r=Math.min(t.childIds.length,n.childIds.length);for(let i=0;i<r;i++){let r=e.graph.getNode(t.childIds[i]),a=e.graph.getNode(n.childIds[i]);if(!r||!a||r.layoutPositioning!==`ABSOLUTE`||r.componentId&&!hl(e.graph,r,a.id))continue;let o=vl(e,r,ol(a,n,t,r.horizontalConstraint,r.verticalConstraint));Object.keys(o).length>0&&e.graph.updateNode(r.id,o)}}function bl(e,t,n){if(t.width!==n.width||t.height!==n.height)return n;let r=n;for(let n=0;n<dl&&r.type===`INSTANCE`&&r.componentId;n++){let n=e.getNode(r.componentId);if(!n||n.width<=0||n.height<=0)break;if(t.width!==n.width||t.height!==n.height)return n;r=n}return null}function xl(e,t,n){return e?{vertices:e.vertices.map(e=>({...e,x:e.x*t,y:e.y*n})),segments:e.segments.map(e=>({...e,tangentStart:{x:e.tangentStart.x*t,y:e.tangentStart.y*n},tangentEnd:{x:e.tangentEnd.x*t,y:e.tangentEnd.y*n}})),regions:structuredClone(e.regions)}:null}function Sl(e,t,n,r,i){if(e.strokes.length!==t.strokes.length||Math.abs(n-r)>=.001)return;let a=i??1;return t.strokes.map((t,n)=>({...t,weight:e.strokes[n].weight*a}))}function Cl(e,t,n,r){let i={};return!r&&e.fillGeometry.length>0&&(i.fillGeometry=j(e.fillGeometry,t,n)),!r&&e.strokeGeometry.length>0&&(i.strokeGeometry=j(e.strokeGeometry,t,n)),e.vectorNetwork&&(i.vectorNetwork=xl(e.vectorNetwork,t,n)),i}function wl(e,t,n){let r=n.get(t.id);if(r)return r;let i={horizontal:!1,vertical:!1};for(let r of e.getChildren(t.id)){let t=wl(e,r,n);if(i.horizontal||=r.horizontalConstraint===`SCALE`||t.horizontal,i.vertical||=r.verticalConstraint===`SCALE`||t.vertical,i.horizontal&&i.vertical)break}return n.set(t.id,i),i}function Tl(e,t,n,r){let i=wl(e,t,r);return{horizontal:t.horizontalConstraint===`SCALE`||n&&i.horizontal,vertical:t.verticalConstraint===`SCALE`||n&&i.vertical}}function El(e,t,n,r,i,a,o,s=!1,c,l=!1,u=new Map){let d=Math.min(t.childIds.length,n.childIds.length);for(let f=0;f<d;f++){let d=e.getNode(t.childIds[f]),p=e.getNode(n.childIds[f]);if(!d||!p)continue;let m=Tl(e,d,l,u),h=m.horizontal,g=m.vertical;if(!h&&!g)continue;let _={},v=s?d:p;h&&(_.x=v.x*r,_.width=v.width*r),g&&(_.y=v.y*i,_.height=v.height*i);let y=h?r:1,b=g?i:1;Object.assign(_,Cl(v,y,b,o.has(d.id))),_.strokes=Sl(v,d,y,b,c),e.updateNode(d.id,_),a.add(d.id),d.childIds.length>0&&p.childIds.length>0&&El(e,d,p,h?r:1,g?i:1,a,o,s,c,l,u)}}function Dl(e,t){let{graph:n}=e,r=yc(n,e.activeNodeIds),i=[...t],a=new Set,o=0;for(;o<i.length;){let t=i[o];o++;let s=n.getNode(t);if(!s)continue;let c=r.get(t);if(c)for(let t of c){if(a.has(t))continue;a.add(t);let r=n.getNode(t);if(!r)continue;let o={};r.width!==s.width&&(o.width=s.width),r.height!==s.height&&(o.height=s.height),r.x!==s.x&&(o.x=s.x),r.y!==s.y&&(o.y=s.y),e.geometryOverrideNodes.has(t)||(s.fillGeometry.length>0&&(o.fillGeometry=k(s.fillGeometry)),s.strokeGeometry.length>0&&(o.strokeGeometry=k(s.strokeGeometry)),s.vectorNetwork&&(o.vectorNetwork=structuredClone(s.vectorNetwork))),s.strokes.length===r.strokes.length&&(o.strokes=r.strokes.map((e,t)=>({...e,weight:s.strokes[t].weight}))),Object.keys(o).length>0&&n.updateNode(t,o),i.push(t)}}}function Ol(e,t,n,r,i,a){let o=r.guidPath?.guids;if(!o?.length)return;let s=Js(e,n,o);if(!s)return;if(s===n){a.add(n);return}let c=e.graph.getNode(s);if(!c)return;let{updates:l,hasSize:u}=gs(e,t,r,c);(r.fillGeometry?.length||r.strokeGeometry?.length)&&e.geometryOverrideNodes.add(s),Object.keys(l).length!==0&&(ac(e,{targetId:s,source:`derived-symbol-data`,props:l})&&i.add(s),u&&a.add(s))}function kl(e){let t=new Set,n=new Set,r=new Map;for(let[i,a]of e.changeMap){if(a.type!==`INSTANCE`)continue;let o=a.derivedSymbolData;if(!o?.length)continue;let s=e.guidToNodeId.get(i);if(!(!s||e.activeNodeIds&&!e.activeNodeIds.has(s)))for(let i of o)Ol(e,r,s,i,t,n)}return{modified:t,sizeSet:n}}function Al(e){let{modified:t,sizeSet:n}=kl(e);Nc(e,t,n)}function jl(e,t){let n=new Set,r=[...t],i=0;for(;i<r.length;){let t=r[i];if(i++,n.has(t))continue;n.add(t);let a=e.getNode(t);a&&r.push(...a.childIds)}return n}function Ml(e,t){let n=new Set;function r(t){let i=e.getNode(t);if(i?.type!==`INSTANCE`||!i.componentId||i.childIds.length>0||n.has(t))return;n.add(t);let a=e.getNode(i.componentId);if(a){a.type===`INSTANCE`&&a.componentId&&a.childIds.length===0&&r(a.id);for(let t of a.childIds){let n=e.getNode(t);n?.type===`INSTANCE`&&n.componentId&&n.childIds.length===0&&r(t)}a.childIds.length>0&&i.childIds.length===0&&e.populateInstanceChildren(t,i.componentId,`fig-import`)}}if(!t){for(let t of e.nodes.values())t.type===`INSTANCE`&&t.componentId&&t.childIds.length===0&&r(t.id);return}let i=[...t],a=new Set,o=0;for(;o<i.length;){let t=i[o];if(o++,!t||a.has(t))continue;a.add(t),r(t);let n=e.getNode(t);n&&i.push(...n.childIds)}return jl(e,t)}function Nl(e,t){if(e.textData!=null){let n=e.textData;n.characters!=null&&(t.text=n.characters);let r=lr(e);r.length>0&&(t.styleRuns=r)}if(e.fillPaints!=null&&(t.fills=Dn(e.fillPaints)),e.strokePaints!=null&&(t.strokes=On(e.strokePaints,e.strokeWeight,e.strokeAlign)),e.fillPaints!=null||e.strokePaints!=null){let n=Gn(e);Object.keys(n).length>0&&(t.boundVariables=n)}e.effects!=null&&(t.effects=kn(e.effects)),e.visible!=null&&(t.visible=e.visible),e.opacity!=null&&(t.opacity=e.opacity),e.name!=null&&(t.name=e.name),e.locked!=null&&(t.locked=e.locked)}function Pl(e,t){if(e.size!=null){let n=e.size;n.x!=null&&(t.width=n.x),n.y!=null&&(t.height=n.y)}e.cornerRadius!=null&&(t.cornerRadius=e.cornerRadius),e.rectangleTopLeftCornerRadius!=null&&(t.topLeftRadius=e.rectangleTopLeftCornerRadius),e.rectangleTopRightCornerRadius!=null&&(t.topRightRadius=e.rectangleTopRightCornerRadius),e.rectangleBottomRightCornerRadius!=null&&(t.bottomRightRadius=e.rectangleBottomRightCornerRadius),e.rectangleBottomLeftCornerRadius!=null&&(t.bottomLeftRadius=e.rectangleBottomLeftCornerRadius),e.rectangleCornerRadiiIndependent!=null&&(t.independentCorners=e.rectangleCornerRadiiIndependent),e.arcData!=null&&(t.arcData=Or(e.arcData)),e.frameMaskDisabled!=null&&(t.clipsContent=e.frameMaskDisabled===!1)}function Fl(e,t){e.stackSpacing!=null&&(t.itemSpacing=e.stackSpacing),e.stackPrimarySizing!=null&&(t.primaryAxisSizing=Cr(e.stackPrimarySizing)),e.stackCounterSizing!=null&&(t.counterAxisSizing=Cr(e.stackCounterSizing)),e.stackPrimaryAlignItems!=null&&(t.primaryAxisAlign=wr(e.stackPrimaryAlignItems)),e.stackCounterAlignItems!=null&&(t.counterAxisAlign=Tr(e.stackCounterAlignItems)),e.stackChildPrimaryGrow!=null&&(t.layoutGrow=e.stackChildPrimaryGrow),e.stackChildAlignSelf!=null&&(t.layoutAlignSelf=Er(e.stackChildAlignSelf)),e.stackPositioning!=null&&(t.layoutPositioning=e.stackPositioning===`ABSOLUTE`?`ABSOLUTE`:`AUTO`),e.stackVerticalPadding!=null&&(t.paddingTop=e.stackVerticalPadding,e.stackPaddingBottom??(t.paddingBottom=e.stackVerticalPadding)),e.stackHorizontalPadding!=null&&(t.paddingLeft=e.stackHorizontalPadding,e.stackPaddingRight??(t.paddingRight=e.stackHorizontalPadding)),e.stackPaddingBottom!=null&&(t.paddingBottom=e.stackPaddingBottom),e.stackPaddingRight!=null&&(t.paddingRight=e.stackPaddingRight)}function Il(e,t){if(e.strokeWeight!=null&&!e.strokePaints&&t.strokes)for(let n of t.strokes)n.weight=e.strokeWeight;if(e.strokeAlign!=null&&t.strokes){let n=`CENTER`;e.strokeAlign===`INSIDE`?n=`INSIDE`:e.strokeAlign===`OUTSIDE`&&(n=`OUTSIDE`);for(let e of t.strokes)e.align=n}e.borderTopWeight!=null&&(t.borderTopWeight=e.borderTopWeight),e.borderRightWeight!=null&&(t.borderRightWeight=e.borderRightWeight),e.borderBottomWeight!=null&&(t.borderBottomWeight=e.borderBottomWeight),e.borderLeftWeight!=null&&(t.borderLeftWeight=e.borderLeftWeight),e.borderStrokeWeightsIndependent!=null&&(t.independentStrokeWeights=e.borderStrokeWeightsIndependent)}function Ll(e,t){if(e.fontName!=null){let n=e.fontName;n.family&&(t.fontFamily=n.family),n.style&&(t.fontWeight=re(n.style),t.italic=n.style.toLowerCase().includes(`italic`))}e.fontSize!=null&&(t.fontSize=e.fontSize),e.textAlignHorizontal!=null&&(t.textAlignHorizontal=e.textAlignHorizontal),e.textAutoResize!=null&&(t.textAutoResize=e.textAutoResize),e.lineHeight!=null&&(t.lineHeight=rr(e.lineHeight,e.fontSize)),e.letterSpacing!=null&&(t.letterSpacing=ir(e.letterSpacing,e.fontSize)),e.maxLines!=null&&(t.maxLines=e.maxLines),e.textTruncation!=null&&(t.textTruncation=e.textTruncation===`ENDING`?`ENDING`:`DISABLED`),e.textDecoration!=null&&(t.textDecoration=nr(e.textDecoration))}function Rl(e){let t={};return Nl(e,t),Pl(e,t),Fl(e,t),Il(e,t),Ll(e,t),t}var zl=new Set([`RECTANGLE_TOP_LEFT_CORNER_RADIUS`,`RECTANGLE_TOP_RIGHT_CORNER_RADIUS`,`RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS`,`RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS`]);function Bl(e){return e.version?`${e.key}@${e.version}`:e.key}function Vl(e,t){if(e.guid)return V(e.guid);let n=e.assetRef;if(n?.key)return t.get(Bl(n))??t.get(n.key)}function Hl(e,t,n,r=0){if(r>10)return;let i=e.changeMap.get(t)?.variableDataValues?.entries?.[0];if(!i)return;let a=i.variableData.value;if(!a)return;if(typeof a.floatValue==`number`)return a.floatValue;let o=a.alias,s=o?Vl(o,n):void 0;return s?Hl(e,s,n,r+1):void 0}function Ul(e,t,n){let r=t.variableConsumptionMap?.entries;if(!r?.length)return;let i=e.assetRefToGuid;for(let t of r){let r=t.variableField;if(!r||!zl.has(r))continue;let a=t.variableData?.value?.alias,o=a?Vl(a,i):void 0,s=o?Hl(e,o,i):void 0;if(typeof s!=`number`)continue;let c=jn[r];c===`topLeftRadius`?n.topLeftRadius=s:c===`topRightRadius`?n.topRightRadius=s:c===`bottomRightRadius`?n.bottomRightRadius=s:c===`bottomLeftRadius`&&(n.bottomLeftRadius=s)}}function Wl(e,t,n){let r={targetId:t,source:`symbol-override`};if(n.overriddenSymbolID){let t=V(n.overriddenSymbolID);r.swapComponentId=e.guidToNodeId.get(t)}let i={...n};if(delete i.guidPath,delete i.overriddenSymbolID,delete i.componentPropAssignments,Object.keys(i).length>0){us(e.changeMap,i);let t=Rl(i);Ul(e,i,t),Object.keys(t).length>0&&(r.props=t)}return r.swapComponentId||r.props?r:null}function Gl(e,t){return t!==void 0&&(!e.activeNodeIds||e.activeNodeIds.has(t))}function Kl(e,t,n,r){!e||n!==t||!r?.props||(delete r.props.width,delete r.props.height)}function ql(e,t=!1){let n=new Set;e.componentIdRoot.clear();for(let[r,i]of e.changeMap){if(i.type!==`INSTANCE`)continue;let a=i.symbolData?.symbolOverrides;if(!a?.length)continue;let o=e.guidToNodeId.get(r);if(Gl(e,o))for(let r of a){let a=r.guidPath?.guids;if(!a?.length)continue;let s=Js(e,o,a);if(!s||s===o&&e.kiwiPropertyNodes.has(o))continue;let c=Wl(e,s,r);c&&(Kl(i.size!==void 0,o,s,c),t&&(c.swapComponentId=void 0),!(!c.swapComponentId&&!c.props)&&(n.add(s),ac(e,c)))}}return n}function*Jl(e,t){for(let[n,r]of t){let t=e.get(n);t&&(yield[r,t])}}function Yl(e,t,n){let r=new Set;for(let[i,a]of Jl(t,n)){let t=a,n=e.getNode(i);if(!n?.componentId)continue;let o=e.getNode(n.componentId);if(!o)continue;let s=(t.cornerRadius!==void 0||t.rectangleCornerRadiiIndependent!==void 0)&&n.cornerRadius!==o.cornerRadius,c=t.visible===!1&&o.visible,l=t.fillPaints!==void 0&&!fe(n.fills,o.fills),u=t.strokePaints!==void 0&&!fe(n.strokes,o.strokes),d=t.textData!==void 0&&n.type===`TEXT`&&o.type===`TEXT`&&n.text!==o.text;(s||c||l||u||d)&&r.add(i)}return r}function Xl(e,t){let n=new Set;for(let[r,i]of Jl(e,t))(i.fillGeometry?.length||i.strokeGeometry?.length)&&n.add(r);return n}function Zl(e){let t=[];for(let n of e.getAllNodes())n.componentId&&t.push(n);return t}function Ql(e){let t=[];for(let n of e.getAllNodes()){if(n.type!==`INSTANCE`||!n.componentId)continue;let r=e.getNode(n.componentId);if(!(!r||r.childIds.length!==n.childIds.length))for(let e=0;e<n.childIds.length;e++)t.push({sourceChildId:r.childIds[e],childId:n.childIds[e]})}return t}function $l(e,t,n=Zl(e)){for(let r=0;r<10;r++){let r=!1;for(let i of n){if(!i.componentId)continue;let n=e.getNode(i.componentId);!n||fe(n.fills,i.fills)||t.has(i.id)&&!t.has(n.id)||(e.updateNode(i.id,{fills:C(n.fills)}),r=!0)}if(!r)return}}function eu(e,t=Ql(e)){for(let n=0;n<10;n++){let n=!1;for(let r of t){let t=e.getNode(r.sourceChildId),i=e.getNode(r.childId);if(!t||!i||t.overrideKey&&i.overrideKey&&t.overrideKey!==i.overrideKey)continue;let a={};!t.visible&&i.visible&&(a.visible=!1),t.x!==i.x&&(a.x=t.x),t.y!==i.y&&(a.y=t.y),Object.keys(a).length!==0&&(e.updateNode(i.id,a),n=!0)}if(!n)return}}function tu(e,t){return e===t?!0:!e||!t?!1:w(e,t)}function nu(e,t){let n=[],r=new Set,i=new Set,a=t=>{if(r.has(t.id)||i.has(t.id))return;i.add(t.id);let o=t.componentId?e.getNode(t.componentId):void 0;o?.type===`TEXT`&&a(o),i.delete(t.id),r.add(t.id),t.type===`TEXT`&&t.componentId&&n.push(t)};for(let n of t??e.nodes.keys()){let t=e.getNode(n);t?.type===`TEXT`&&t.componentId&&a(t)}for(let t of n){let n=t.componentId?e.getNode(t.componentId):void 0;n?.type!==`TEXT`||n.text!==t.text||n.width===t.width&&n.height===t.height&&fe(n.fills,t.fills)&&fe(n.styleRuns,t.styleRuns)&&tu(n.figmaDerivedTextGlyphs,t.figmaDerivedTextGlyphs)||e.updateNode(t.id,{width:n.width,height:n.height,fills:C(n.fills),styleRuns:ue(n.styleRuns),figmaDerivedTextGlyphs:n.figmaDerivedTextGlyphs?M(n.figmaDerivedTextGlyphs,structuredClone(n.figmaDerivedTextGlyphs)):void 0})}}function ru(e,t,n,r,i){let a=new Map,o=new Map;for(let[e,n]of t)n.overrideKey&&a.set(V(n.overrideKey),e),typeof n.key==`string`&&(o.set(n.key,e),typeof n.version==`string`&&o.set(`${n.key}@${n.version}`,e));let s=new Map,c=new Map;for(let[,e]of t)if(e.componentPropDefs?.length)for(let t of e.componentPropDefs){if(!t.id)continue;let e=V(t.id);t.initialValue&&s.set(e,t.initialValue),t.name&&c.set(e,t.name)}let l=new Map;for(let[e,t]of n)l.set(t,e);let u=Yl(e,t,n),d=Xl(t,n);return{graph:e,changeMap:t,guidToNodeId:n,blobs:r,overrideKeyToGuid:a,assetRefToGuid:o,nodeIdToGuid:l,propDefaults:s,propNames:c,preComputedRoot:new Map,preComputedClones:new Map,componentIdRoot:new Map,swappedInstances:new Set,protectedFields:new Map,kiwiPropertyNodes:u,geometryOverrideNodes:d,activeNodeIds:i}}function iu(e,t){for(let n of _s(e,t)){let t={};for(let[r,i]of Object.entries(n.boundVariables)){if(Array.isArray(i))continue;let a=e.resolveNumberVariableForNode(n.id,i);a!==void 0&&Object.assign(t,Pn(r,a))}Object.keys(t).length>0&&e.updateNode(n.id,t)}}function au(e,t,n,r=[],i){let a=ru(e,t,n,r,Ml(e,i));Ls(a);let o=ql(a);for(let e of a.kiwiPropertyNodes)o.add(e);wc(e,o,a.swappedInstances,a.componentIdRoot,void 0,a.activeNodeIds,a.protectedFields);let s=rl(a);if(s.size>0&&wc(e,s,a.swappedInstances,a.componentIdRoot,o,a.activeNodeIds,a.protectedFields),i){let t=Ml(e,i);t&&(a.activeNodeIds=t,Cs(e,t,a.preComputedClones));let n=rl(a),r=new Set([...o,...s,...n]);r.size>0&&wc(e,r,a.swappedInstances,a.componentIdRoot,o,a.activeNodeIds,a.protectedFields),eu(e)}Al(a),$l(e,new Set([...a.kiwiPropertyNodes,...o])),nu(e,a.activeNodeIds),fl(a);let c=new Set;for(let t of _s(e,a.activeNodeIds)){if(t.type!==`INSTANCE`||!t.componentId)continue;let n=e.getNode(t.componentId);n&&(t.width!==n.width||t.height!==n.height)&&c.add(t.id)}rl(a),Cc(e,ql(a,!0),a.activeNodeIds,a.protectedFields,a.preComputedClones),Dc(a,c),iu(e,a.activeNodeIds),Mc(a)}var ou=new Int32Array(1),su=new Float32Array(ou.buffer),cu=new TextDecoder,lu=class{_data;_index;length;constructor(e){if(e&&!(e instanceof Uint8Array))throw Error(`Must initialize a ByteBuffer with a Uint8Array`);this._data=e||new Uint8Array(256),this._index=0,this.length=e?e.length:0}toUint8Array(){return this._data.subarray(0,this.length)}readByte(){return this._data[this._index++]}readByteArray(){let e=this.readVarUint(),t=this._index;return this._index=t+e,this._data.slice(t,t+e)}readVarFloat(){let e=this._index,t=this._data,n=t[e];if(n===0)return this._index=e+1,0;let r=n|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24;return this._index=e+4,r=r<<23|r>>>9,ou[0]=r,su[0]}readVarUint(){let e=this._data,t=this._index,n=e[t++],r=n&127;return n<128||(n=e[t++],r|=(n&127)<<7,n<128)||(n=e[t++],r|=(n&127)<<14,n<128)||(n=e[t++],r|=(n&127)<<21,n<128)?(this._index=t,r):(n=e[t++],r|=(n&127)<<28,this._index=t,r>>>0)}readVarInt(){let e=this.readVarUint()|0;return e&1?~(e>>>1):e>>>1}readVarUint64(){let e=BigInt(0),t=BigInt(0),n=BigInt(7),r;for(;(r=this.readByte())&128&&t<56;)e|=BigInt(r&127)<<t,t+=n;return e|=BigInt(r)<<t,e}readVarInt64(){let e=this.readVarUint64(),t=BigInt(1),n=e&t;return e>>=t,n?~e:e}readString(){let e=this._data,t=this._index,n=t;for(;e[n]!==0;)n++;return this._index=n+1,cu.decode(e.subarray(t,n))}_growBy(e){if(this.length+e>this._data.length){let t=new Uint8Array(this.length+e<<1);t.set(this._data),this._data=t}this.length+=e}writeByte(e){let t=this.length;this._growBy(1),this._data[t]=e}writeByteArray(e){this.writeVarUint(e.length);let t=this.length;this._growBy(e.length),this._data.set(e,t)}writeVarFloat(e){let t=this.length;su[0]=e;let n=ou[0];if(n=n>>>23|n<<9,!(n&255)){this.writeByte(0);return}this._growBy(4);let r=this._data;r[t]=n,r[t+1]=n>>8,r[t+2]=n>>16,r[t+3]=n>>24}writeVarUint(e){if(e<0||e>4294967295)throw Error(`Outside uint range: `+e);do{let t=e&127;e>>>=7,this.writeByte(e?t|128:t)}while(e)}writeVarInt(e){if(e<-2147483648||e>2147483647)throw Error(`Outside int range: `+e);this.writeVarUint((e<<1^e>>31)>>>0)}writeVarUint64(e){if(typeof e==`string`)e=BigInt(e);else if(typeof e!=`bigint`)throw Error(`Expected bigint but got ${typeof e}: ${String(e)}`);if(e<0||e>BigInt(`0xFFFFFFFFFFFFFFFF`))throw Error(`Outside uint64 range: `+e);let t=BigInt(127),n=BigInt(7);for(let r=0;e>t&&r<8;r++)this.writeByte(Number(e&t)|128),e>>=n;this.writeByte(Number(e))}writeVarInt64(e){if(typeof e==`string`)e=BigInt(e);else if(typeof e!=`bigint`)throw Error(`Expected bigint but got ${typeof e}: ${String(e)}`);if(e<-BigInt(`0x8000000000000000`)||e>BigInt(`0x7FFFFFFFFFFFFFFF`))throw Error(`Outside int64 range: `+e);let t=BigInt(1);this.writeVarUint64(e<0?~(e<<t):e<<t)}writeString(e){let t;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(n+1===e.length||r<55296||r>=56320)t=r;else{let i=e.charCodeAt(++n);t=(r<<10)+i+-56613888}if(t===0)throw Error(`Cannot encode a string containing the null character`);t<128?this.writeByte(t):(t<2048?this.writeByte(t>>6&31|192):(t<65536?this.writeByte(t>>12&15|224):(this.writeByte(t>>18&7|240),this.writeByte(t>>12&63|128)),this.writeByte(t>>6&63|128)),this.writeByte(t&63|128))}this.writeByte(0)}};function K(e){return JSON.stringify(e)}function uu(e,t,n){var r=Error(e);throw r.line=t,r.column=n,r}function du(e,t){let n=[],r=`  `;n.push(`function (bb) {`),n.push(`  var result = {};`),n.push(`  if (!(bb instanceof this.ByteBuffer)) {`),n.push(`    bb = new this.ByteBuffer(bb);`),n.push(`  }`),n.push(``),e.kind===`MESSAGE`&&(n.push(`  while (true) {`),n.push(`    switch (bb.readVarUint()) {`),n.push(`      case 0:`),n.push(`        return result;`),n.push(``),r=`        `);for(let i=0;i<e.fields.length;i++){let a=e.fields[i],o;switch(a.type){case`bool`:o=`!!bb.readByte()`;break;case`byte`:o=`bb.readByte()`;break;case`int`:o=`bb.readVarInt()`;break;case`uint`:o=`bb.readVarUint()`;break;case`float`:o=`bb.readVarFloat()`;break;case`string`:o=`bb.readString()`;break;case`int64`:o=`bb.readVarInt64()`;break;case`uint64`:o=`bb.readVarUint64()`;break;default:{let e=t[a.type];e?o=e.kind===`ENUM`?`this[`+K(e.name)+`][bb.readVarUint()]`:`this[`+K(`decode`+e.name)+`](bb)`:uu(`Invalid type `+K(a.type)+` for field `+K(a.name),a.line,a.column)}}e.kind===`MESSAGE`&&n.push(`      case `+a.value+`:`),a.isArray?a.isDeprecated?a.type===`byte`?n.push(r+`bb.readByteArray();`):(n.push(r+`var length = bb.readVarUint();`),n.push(r+`while (length-- > 0) `+o+`;`)):a.type===`byte`?n.push(r+`result[`+K(a.name)+`] = bb.readByteArray();`):(n.push(r+`var length = bb.readVarUint();`),n.push(r+`var values = result[`+K(a.name)+`] = Array(length);`),n.push(r+`for (var i = 0; i < length; i++) values[i] = `+o+`;`)):a.isDeprecated?n.push(r+o+`;`):n.push(r+`result[`+K(a.name)+`] = `+o+`;`),e.kind===`MESSAGE`&&(n.push(`        break;`),n.push(``))}return e.kind===`MESSAGE`?(n.push(`      default:`),n.push(`        throw new Error("Attempted to parse invalid message");`),n.push(`    }`),n.push(`  }`)):n.push(`  return result;`),n.push(`}`),n.join(`
`)}function fu(e,t){let n=[];n.push(`function (message, bb) {`),n.push(`  var isTopLevel = !bb;`),n.push(`  if (isTopLevel) bb = new this.ByteBuffer();`);for(let r=0;r<e.fields.length;r++){let i=e.fields[r],a;if(!i.isDeprecated){switch(i.type){case`bool`:a=`bb.writeByte(value);`;break;case`byte`:a=`bb.writeByte(value);`;break;case`int`:a=`bb.writeVarInt(value);`;break;case`uint`:a=`bb.writeVarUint(value);`;break;case`float`:a=`bb.writeVarFloat(value);`;break;case`string`:a=`bb.writeString(value);`;break;case`int64`:a=`bb.writeVarInt64(value);`;break;case`uint64`:a=`bb.writeVarUint64(value);`;break;default:{let e=t[i.type];if(e)a=e.kind===`ENUM`?`var encoded = this[`+K(e.name)+`][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + `+K(` for enum `+K(e.name))+`); bb.writeVarUint(encoded);`:`this[`+K(`encode`+e.name)+`](value, bb);`;else throw Error(`Invalid type `+K(i.type)+` for field `+K(i.name))}}n.push(``),n.push(`  var value = message[`+K(i.name)+`];`),n.push(`  if (value != null) {`),e.kind===`MESSAGE`&&n.push(`    bb.writeVarUint(`+i.value+`);`),i.isArray?i.type===`byte`?n.push(`    bb.writeByteArray(value);`):(n.push(`    var values = value, n = values.length;`),n.push(`    bb.writeVarUint(n);`),n.push(`    for (var i = 0; i < n; i++) {`),n.push(`      value = values[i];`),n.push(`      `+a),n.push(`    }`)):n.push(`    `+a),e.kind===`STRUCT`&&(n.push(`  } else {`),n.push(`    throw new Error(`+K(`Missing required field `+K(i.name))+`);`)),n.push(`  }`)}}return e.kind===`MESSAGE`&&n.push(`  bb.writeVarUint(0);`),n.push(``),n.push(`  if (isTopLevel) return bb.toUint8Array();`),n.push(`}`),n.join(`
`)}function pu(e){let t={},n=e.package,r=[];n===null?(r.push(`var exports = exports || {};`),n=`exports`):r.push(`var `+n+` = exports || `+n+` || {}, exports;`),r.push(n+`.ByteBuffer = `+n+`.ByteBuffer || require("kiwi-schema").ByteBuffer;`);for(let n=0;n<e.definitions.length;n++){let r=e.definitions[n];t[r.name]=r}for(let i=0;i<e.definitions.length;i++){let a=e.definitions[i];switch(a.kind){case`ENUM`:{let e={};for(let t=0;t<a.fields.length;t++){let n=a.fields[t];e[n.name]=n.value,e[n.value]=n.name}r.push(n+`[`+K(a.name)+`] = `+JSON.stringify(e,null,2)+`;`);break}case`STRUCT`:case`MESSAGE`:r.push(``),r.push(n+`[`+K(`decode`+a.name)+`] = `+du(a,t)+`;`),r.push(``),r.push(n+`[`+K(`encode`+a.name)+`] = `+fu(a,t)+`;`);break;default:uu(`Invalid definition kind `+K(a.kind),a.line,a.column);break}}return r.push(``),r.join(`
`)}function mu(e){let t={ByteBuffer:lu};return Function(`exports`,pu(e))(t),t}var hu=[`bool`,`byte`,`int`,`uint`,`float`,`string`,`int64`,`uint64`],gu=[`ENUM`,`STRUCT`,`MESSAGE`];function _u(e){let t=e instanceof lu?e:new lu(e),n=t.readVarUint(),r=[];for(let e=0;e<n;e++){let e=t.readString(),n=t.readByte(),i=t.readVarUint(),a=[];for(let e=0;e<i;e++){let e=t.readString(),r=t.readVarInt(),i=!!(t.readByte()&1),o=t.readVarUint();a.push({name:e,line:0,column:0,type:gu[n]===`ENUM`?null:r,isArray:i,isDeprecated:!1,value:o})}r.push({name:e,line:0,column:0,kind:gu[n],fields:a})}for(let e=0;e<n;e++){let t=r[e].fields;for(let e=0;e<t.length;e++){let n=t[e],i=n.type;if(i!==null&&i<0){if(~i>=hu.length)throw Error(`Invalid type `+i);n.type=hu[~i]}else{if(i!==null&&i>=r.length)throw Error(`Invalid type `+i);n.type=i===null?null:r[i].name}}}return{package:null,definitions:r}}function vu(e){let t=new lu,n=e.definitions,r={};t.writeVarUint(n.length);for(let e=0;e<n.length;e++)r[n[e].name]=e;for(let e=0;e<n.length;e++){let i=n[e];t.writeString(i.name),t.writeByte(gu.indexOf(i.kind)),t.writeVarUint(i.fields.length);for(let e=0;e<i.fields.length;e++){let n=i.fields[e],a=hu.indexOf(n.type);t.writeString(n.name),t.writeVarInt(a===-1?r[n.type]:~a),t.writeByte(n.isArray?1:0),t.writeVarUint(n.value)}}return t.toUint8Array()}var yu=[`bool`,`byte`,`float`,`int`,`int64`,`string`,`uint`,`uint64`],bu=[`ByteBuffer`,`package`],xu=/((?:-|\b)\d+\b|[=;{}]|\[\]|\[deprecated\]|\b[A-Za-z_][A-Za-z0-9_]*\b|\/\/.*|\s+)/g,Su=/^[A-Za-z_][A-Za-z0-9_]*$/,Cu=/^\/\/.*|\s+$/,wu=/^=$/,Tu=/^$/,Eu=/^;$/,Du=/^-?\d+$/,Ou=/^\{$/,ku=/^\}$/,Au=/^\[\]$/,ju=/^enum$/,Mu=/^struct$/,Nu=/^message$/,Pu=/^package$/,Fu=/^\[deprecated\]$/;function Iu(e){let t=e.split(xu),n=[],r=0,i=0;for(let e=0;e<t.length;e++){let a=t[e];e&1?Cu.test(a)||n.push({text:a,line:i+1,column:r+1}):a!==``&&uu(`Syntax error `+K(a),i+1,r+1);let o=a.split(`
`);o.length>1&&(r=0),i+=o.length-1,r+=o[o.length-1].length}return n.push({text:``,line:i,column:r}),n}function Lu(e){function t(){return e[s]}function n(e){return e.test(t().text)?(s++,!0):!1}function r(e,r){if(!n(e)){let e=t();uu(`Expected `+r+` but found `+K(e.text),e.line,e.column)}}function i(){let e=t();uu(`Unexpected token `+K(e.text),e.line,e.column)}let a=[],o=null,s=0;for(n(Pu)&&(o=t().text,r(Su,`identifier`),r(Eu,`";"`));s<e.length&&!n(Tu);){let e=[],o;n(ju)?o=`ENUM`:n(Mu)?o=`STRUCT`:n(Nu)?o=`MESSAGE`:i();let s=t();for(r(Su,`identifier`),r(Ou,`"{"`);!n(ku);){let i=null,a=!1,s=!1;o!==`ENUM`&&(i=t().text,r(Su,`identifier`),a=n(Au));let c=t();r(Su,`identifier`);let l=null;o!==`STRUCT`&&(r(wu,`"="`),l=t(),r(Du,`integer`),(l.text|0)+``!==l.text&&uu(`Invalid integer `+K(l.text),l.line,l.column));let u=t();n(Fu)&&(o!==`MESSAGE`&&uu(`Cannot deprecate this field`,u.line,u.column),s=!0),r(Eu,`";"`),e.push({name:c.text,line:c.line,column:c.column,type:i,isArray:a,isDeprecated:s,value:l===null?e.length+1:l.text|0})}a.push({name:s.text,line:s.line,column:s.column,kind:o,fields:e})}return{package:o,definitions:a}}function Ru(e){let t=yu.slice(),n={};for(let r=0;r<e.definitions.length;r++){let i=e.definitions[r];t.includes(i.name)&&uu(`The type `+K(i.name)+` is defined twice`,i.line,i.column),bu.includes(i.name)&&uu(`The type name `+K(i.name)+` is reserved`,i.line,i.column),t.push(i.name),n[i.name]=i}for(let n=0;n<e.definitions.length;n++){let r=e.definitions[n],i=r.fields;if(r.kind===`ENUM`||i.length===0)continue;for(let e=0;e<i.length;e++){let n=i[e];t.includes(n.type)||uu(`The type `+K(n.type)+` is not defined for field `+K(n.name),n.line,n.column)}let a=[];for(let e=0;e<i.length;e++){let t=i[e];a.includes(t.value)&&uu(`The id for field `+K(t.name)+` is used twice`,t.line,t.column),t.value<=0&&uu(`The id for field `+K(t.name)+` must be positive`,t.line,t.column),a.push(t.value)}}let r={},i=e=>{let t=n[e];if(t&&t.kind===`STRUCT`&&(r[e]===1&&uu(`Recursive nesting of `+K(e)+` is not allowed`,t.line,t.column),r[e]!==2&&t)){r[e]=1;let n=t.fields;for(let e=0;e<n.length;e++){let t=n[e];t.isArray||i(t.type)}r[e]=2}return!0};for(let t=0;t<e.definitions.length;t++)i(e.definitions[t].name)}function zu(e){let t=Lu(Iu(e));return Ru(t),t}function Bu(e){for(let t of e.definitions)Vu(t),t.kind===`ENUM`&&Hu(t)}function Vu(e){let t=new Set;for(let n of e.fields)t.has(n.name)&&uu(`The field ${K(n.name)} is defined twice in ${K(e.name)}`,n.line,n.column),t.add(n.name)}function Hu(e){let t=new Set;for(let n of e.fields)t.has(n.value)&&uu(`The enum value ${n.value} is used twice in ${K(e.name)}`,n.line,n.column),t.add(n.value)}new Uint8Array([40,181,47,253]);function Uu(e){return e.length>=4&&e[0]===40&&e[1]===181&&e[2]===47&&e[3]===253}var Wu=zu(`enum MessageType {
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
`);Bu(Wu);var Gu=null;async function Ku(){Gu||=mu(Wu)}function qu(){if(!Gu)throw Error(`Codec not initialized`);return Gu}function Ju(){return vu(Wu)}var Yu=t(n(((t,n)=>{var r=(()=>{var t=typeof document<`u`&&document.currentScript?document.currentScript.src:void 0;return typeof __filename<`u`&&(t||=__filename),(function(n={}){var r=n,i,a;r.ready=new Promise((e,t)=>{i=e,a=t}),(function(e){e.ke=e.ke||[],e.ke.push(function(){e.MakeSWCanvasSurface=function(t){var n=t,r=typeof OffscreenCanvas<`u`&&n instanceof OffscreenCanvas;if(!(typeof HTMLCanvasElement<`u`&&n instanceof HTMLCanvasElement||r||(n=document.getElementById(t),n)))throw`Canvas with id `+t+` was not found`;return(t=e.MakeSurface(n.width,n.height))&&(t.ce=n),t},e.MakeCanvasSurface||=e.MakeSWCanvasSurface,e.MakeSurface=function(t,n){var r={width:t,height:n,colorType:e.ColorType.RGBA_8888,alphaType:e.AlphaType.Unpremul,colorSpace:e.ColorSpace.SRGB},i=t*n*4,a=e._malloc(i);return(r=e.Surface._makeRasterDirect(r,a,4*t))&&(r.ce=null,r.Xf=t,r.Tf=n,r.Vf=i,r.wf=a,r.getCanvas().clear(e.TRANSPARENT)),r},e.MakeRasterDirectSurface=function(t,n,r){return e.Surface._makeRasterDirect(t,n.byteOffset,r)},e.Surface.prototype.flush=function(t){if(e.de(this.be),this._flush(),this.ce){var n=new Uint8ClampedArray(e.HEAPU8.buffer,this.wf,this.Vf);n=new ImageData(n,this.Xf,this.Tf),t?this.ce.getContext(`2d`).putImageData(n,0,0,t[0],t[1],t[2]-t[0],t[3]-t[1]):this.ce.getContext(`2d`).putImageData(n,0,0)}},e.Surface.prototype.dispose=function(){this.wf&&e._free(this.wf),this.delete()},e.de=e.de||function(){},e.mf=e.mf||function(){return null}})})(r),(function(e){e.ke=e.ke||[],e.ke.push(function(){function t(e,t,n){return e&&e.hasOwnProperty(t)?e[t]:n}function n(e){var t=en(Gt);return Gt[t]=e,t}function r(e){return e.naturalHeight||e.videoHeight||e.displayHeight||e.height}function i(e){return e.naturalWidth||e.videoWidth||e.displayWidth||e.width}function a(t,n,r,i){return t.bindTexture(t.TEXTURE_2D,n),i||r.alphaType!==e.AlphaType.Premul||t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),n}function o(t,n,r){r||n.alphaType!==e.AlphaType.Premul||t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.bindTexture(t.TEXTURE_2D,null)}e.GetWebGLContext=function(e,n){if(!e)throw`null canvas passed into makeWebGLContext`;var r={alpha:t(n,`alpha`,1),depth:t(n,`depth`,1),stencil:t(n,`stencil`,8),antialias:t(n,`antialias`,0),premultipliedAlpha:t(n,`premultipliedAlpha`,1),preserveDrawingBuffer:t(n,`preserveDrawingBuffer`,0),preferLowPowerToHighPerformance:t(n,`preferLowPowerToHighPerformance`,0),failIfMajorPerformanceCaveat:t(n,`failIfMajorPerformanceCaveat`,0),enableExtensionsByDefault:t(n,`enableExtensionsByDefault`,1),explicitSwapControl:t(n,`explicitSwapControl`,0),renderViaOffscreenBackBuffer:t(n,`renderViaOffscreenBackBuffer`,0)};if(r.majorVersion=n&&n.majorVersion?n.majorVersion:typeof WebGL2RenderingContext<`u`?2:1,r.explicitSwapControl)throw`explicitSwapControl is not supported`;return e=tn(e,r),e?(rn(e),U.xe.getExtension(`WEBGL_debug_renderer_info`),e):0},e.deleteContext=function(e){U===Jt[e]&&(U=null),typeof JSEvents==`object`&&JSEvents.Mg(Jt[e].xe.canvas),Jt[e]&&Jt[e].xe.canvas&&(Jt[e].xe.canvas.Rf=void 0),Jt[e]=null},e._setTextureCleanup({deleteTexture:function(e,t){var n=Gt[t];n&&Jt[e].xe.deleteTexture(n),Gt[t]=null}}),e.MakeWebGLContext=function(t){if(!this.de(t))return null;var n=this._MakeGrContext();if(!n)return null;n.be=t;var r=n.delete.bind(n);return n.delete=function(){e.de(this.be),r()}.bind(n),U.Af=n},e.MakeGrContext=e.MakeWebGLContext,e.GrDirectContext.prototype.getResourceCacheLimitBytes=function(){e.de(this.be),this._getResourceCacheLimitBytes()},e.GrDirectContext.prototype.getResourceCacheUsageBytes=function(){e.de(this.be),this._getResourceCacheUsageBytes()},e.GrDirectContext.prototype.releaseResourcesAndAbandonContext=function(){e.de(this.be),this._releaseResourcesAndAbandonContext()},e.GrDirectContext.prototype.setResourceCacheLimitBytes=function(t){e.de(this.be),this._setResourceCacheLimitBytes(t)},e.MakeOnScreenGLSurface=function(e,t,n,r,i,a){return!this.de(e.be)||(t=i===void 0||a===void 0?this._MakeOnScreenGLSurface(e,t,n,r):this._MakeOnScreenGLSurface(e,t,n,r,i,a),!t)?null:(t.be=e.be,t)},e.MakeRenderTarget=function(){var e=arguments[0];if(!this.de(e.be))return null;if(arguments.length===3){var t=this._MakeRenderTargetWH(e,arguments[1],arguments[2]);if(!t)return null}else if(arguments.length===2){if(t=this._MakeRenderTargetII(e,arguments[1]),!t)return null}else return null;return t.be=e.be,t},e.MakeWebGLCanvasSurface=function(t,n,r){n||=null;var i=t,a=typeof OffscreenCanvas<`u`&&i instanceof OffscreenCanvas;if(!(typeof HTMLCanvasElement<`u`&&i instanceof HTMLCanvasElement||a||(i=document.getElementById(t),i)))throw`Canvas with id `+t+` was not found`;if(t=this.GetWebGLContext(i,r),!t||0>t)throw`failed to create webgl context: err `+t;return t=this.MakeWebGLContext(t),n=this.MakeOnScreenGLSurface(t,i.width,i.height,n),n||(n=i.cloneNode(!0),i.parentNode.replaceChild(n,i),n.classList.add(`ck-replaced`),e.MakeSWCanvasSurface(n))},e.MakeCanvasSurface=e.MakeWebGLCanvasSurface,e.Surface.prototype.makeImageFromTexture=function(t,r){return e.de(this.be),t=n(t),(r=this._makeImageFromTexture(this.be,t,r))&&(r.cf=t),r},e.Surface.prototype.makeImageFromTextureSource=function(t,n,s){n||={height:r(t),width:i(t),colorType:e.ColorType.RGBA_8888,alphaType:s?e.AlphaType.Premul:e.AlphaType.Unpremul},n.colorSpace||=e.ColorSpace.SRGB,e.de(this.be);var c=U.xe;return s=a(c,c.createTexture(),n,s),U.version===2?c.texImage2D(c.TEXTURE_2D,0,c.RGBA,n.width,n.height,0,c.RGBA,c.UNSIGNED_BYTE,t):c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,t),o(c,n),this._resetContext(),this.makeImageFromTexture(s,n)},e.Surface.prototype.updateTextureFromSource=function(t,s,c){if(t.cf){e.de(this.be);var l=t.getImageInfo(),u=U.xe,d=a(u,Gt[t.cf],l,c);U.version===2?u.texImage2D(u.TEXTURE_2D,0,u.RGBA,i(s),r(s),0,u.RGBA,u.UNSIGNED_BYTE,s):u.texImage2D(u.TEXTURE_2D,0,u.RGBA,u.RGBA,u.UNSIGNED_BYTE,s),o(u,l,c),this._resetContext(),Gt[t.cf]=null,t.cf=n(d),l.colorSpace=t.getColorSpace(),s=this._makeImageFromTexture(this.be,t.cf,l),c=t.ae.ie,u=t.ae.pe,t.ae.ie=s.ae.ie,t.ae.pe=s.ae.pe,s.ae.ie=c,s.ae.pe=u,s.delete(),l.colorSpace.delete()}},e.MakeLazyImageFromTextureSource=function(t,s,c){s||={height:r(t),width:i(t),colorType:e.ColorType.RGBA_8888,alphaType:c?e.AlphaType.Premul:e.AlphaType.Unpremul},s.colorSpace||=e.ColorSpace.SRGB;var l={makeTexture:function(){var e=U,r=e.xe,i=a(r,r.createTexture(),s,c);return e.version===2?r.texImage2D(r.TEXTURE_2D,0,r.RGBA,s.width,s.height,0,r.RGBA,r.UNSIGNED_BYTE,t):r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t),o(r,s,c),n(i)},freeSrc:function(){}};return t.constructor.name===`VideoFrame`&&(l.freeSrc=function(){t.close()}),e.Image._makeFromGenerator(s,l)},e.de=function(e){return e?rn(e):!1},e.mf=function(){return U&&U.Af&&!U.Af.isDeleted()?U.Af:null}})})(r),(function(e){function t(e,t,n,r,i){for(var a=0;a<e.length;a++)t[a*n+(a*i+r+n)%n]=e[a];return t}function n(e){for(var t=e*e,n=Array(t);t--;)n[t]=t%(e+1)===0?1:0;return n}function i(e){return e?e.constructor===Float32Array&&e.length===4:!1}function a(e){return(c(255*e[3])<<24|c(255*e[0])<<16|c(255*e[1])<<8|c(255*e[2])<<0)>>>0}function o(e){if(e&&e._ck)return e;if(e instanceof Float32Array){for(var t=Math.floor(e.length/4),n=new Uint32Array(t),r=0;r<t;r++)n[r]=a(e.slice(4*r,4*(r+1)));return n}if(e instanceof Uint32Array)return e;if(e instanceof Array&&e[0]instanceof Float32Array)return e.map(a)}function s(e){if(e===void 0)return 1;var t=parseFloat(e);return e&&e.indexOf(`%`)!==-1?t/100:t}function c(e){return Math.round(Math.max(0,Math.min(e||0,255)))}function l(t,n){n&&n._ck||e._free(t)}function u(t,n,r){if(!t||!t.length)return R;if(t&&t._ck)return t.byteOffset;var i=e[n].BYTES_PER_ELEMENT;return r||=e._malloc(t.length*i),e[n].set(t,r/i),r}function d(t){var n={te:R,count:t.length,colorType:e.ColorType.RGBA_F32};if(t instanceof Float32Array)n.te=u(t,`HEAPF32`),n.count=t.length/4;else if(t instanceof Uint32Array)n.te=u(t,`HEAPU32`),n.colorType=e.ColorType.RGBA_8888;else if(t instanceof Array){if(t&&t.length){for(var r=e._malloc(16*t.length),i=0,a=r/4,o=0;o<t.length;o++)for(var s=0;4>s;s++)e.HEAPF32[a+i]=t[o][s],i++;t=r}else t=R;n.te=t}else throw`Invalid argument to copyFlexibleColorArray, Not a color array `+typeof t;return n}function f(t){if(!t)return R;var n=C.toTypedArray();if(t.length){if(t.length===6||t.length===9)return u(t,`HEAPF32`,S),t.length===6&&e.HEAPF32.set(ae,6+S/4),S;if(t.length===16)return n[0]=t[0],n[1]=t[1],n[2]=t[3],n[3]=t[4],n[4]=t[5],n[5]=t[7],n[6]=t[12],n[7]=t[13],n[8]=t[15],S;throw`invalid matrix size`}if(t.m11===void 0)throw`invalid matrix argument`;return n[0]=t.m11,n[1]=t.m21,n[2]=t.m41,n[3]=t.m12,n[4]=t.m22,n[5]=t.m42,n[6]=t.m14,n[7]=t.m24,n[8]=t.m44,S}function p(e){if(!e)return R;var t=T.toTypedArray();if(e.length){if(e.length!==16&&e.length!==6&&e.length!==9)throw`invalid matrix size`;return e.length===16?u(e,`HEAPF32`,w):(t.fill(0),t[0]=e[0],t[1]=e[1],t[3]=e[2],t[4]=e[3],t[5]=e[4],t[7]=e[5],t[10]=1,t[12]=e[6],t[13]=e[7],t[15]=e[8],e.length===6&&(t[12]=0,t[13]=0,t[15]=1),w)}if(e.m11===void 0)throw`invalid matrix argument`;return t[0]=e.m11,t[1]=e.m21,t[2]=e.m31,t[3]=e.m41,t[4]=e.m12,t[5]=e.m22,t[6]=e.m32,t[7]=e.m42,t[8]=e.m13,t[9]=e.m23,t[10]=e.m33,t[11]=e.m43,t[12]=e.m14,t[13]=e.m24,t[14]=e.m34,t[15]=e.m44,w}function m(e,t){return u(e,`HEAPF32`,t||D)}function h(e,t,n,r){var i=O.toTypedArray();return i[0]=e,i[1]=t,i[2]=n,i[3]=r,D}function g(t){for(var n=new Float32Array(4),r=0;4>r;r++)n[r]=e.HEAPF32[t/4+r];return n}function _(e,t){return u(e,`HEAPF32`,t||A)}function v(e,t){return u(e,`HEAPF32`,t||re)}function y(){for(var e=0,t=0;t<arguments.length-1;t+=2)e+=arguments[t]*arguments[t+1];return e}function b(e,t,n){for(var r=Array(e.length),i=0;i<n;i++)for(var a=0;a<n;a++){for(var o=0,s=0;s<n;s++)o+=e[n*i+s]*t[n*s+a];r[i*n+a]=o}return r}function x(e,t){for(var n=b(t[0],t[1],e),r=2;r<t.length;)n=b(n,t[r],e),r++;return n}e.Color=function(t,n,r,i){return i===void 0&&(i=1),e.Color4f(c(t)/255,c(n)/255,c(r)/255,i)},e.ColorAsInt=function(e,t,n,r){return r===void 0&&(r=255),(c(r)<<24|c(e)<<16|c(t)<<8|c(n)<<0&268435455)>>>0},e.Color4f=function(e,t,n,r){return r===void 0&&(r=1),Float32Array.of(e,t,n,r)},Object.defineProperty(e,`TRANSPARENT`,{get:function(){return e.Color4f(0,0,0,0)}}),Object.defineProperty(e,`BLACK`,{get:function(){return e.Color4f(0,0,0,1)}}),Object.defineProperty(e,`WHITE`,{get:function(){return e.Color4f(1,1,1,1)}}),Object.defineProperty(e,`RED`,{get:function(){return e.Color4f(1,0,0,1)}}),Object.defineProperty(e,`GREEN`,{get:function(){return e.Color4f(0,1,0,1)}}),Object.defineProperty(e,`BLUE`,{get:function(){return e.Color4f(0,0,1,1)}}),Object.defineProperty(e,`YELLOW`,{get:function(){return e.Color4f(1,1,0,1)}}),Object.defineProperty(e,`CYAN`,{get:function(){return e.Color4f(0,1,1,1)}}),Object.defineProperty(e,`MAGENTA`,{get:function(){return e.Color4f(1,0,1,1)}}),e.getColorComponents=function(e){return[Math.floor(255*e[0]),Math.floor(255*e[1]),Math.floor(255*e[2]),e[3]]},e.parseColorString=function(t,n){if(t=t.toLowerCase(),t.startsWith(`#`)){switch(n=255,t.length){case 9:n=parseInt(t.slice(7,9),16);case 7:var r=parseInt(t.slice(1,3),16),i=parseInt(t.slice(3,5),16),a=parseInt(t.slice(5,7),16);break;case 5:n=17*parseInt(t.slice(4,5),16);case 4:r=17*parseInt(t.slice(1,2),16),i=17*parseInt(t.slice(2,3),16),a=17*parseInt(t.slice(3,4),16)}return e.Color(r,i,a,n/255)}return t.startsWith(`rgba`)?(t=t.slice(5,-1),t=t.split(`,`),e.Color(+t[0],+t[1],+t[2],s(t[3]))):t.startsWith(`rgb`)?(t=t.slice(4,-1),t=t.split(`,`),e.Color(+t[0],+t[1],+t[2],s(t[3]))):t.startsWith(`gray(`)||t.startsWith(`hsl`)||!n||(t=n[t],t===void 0)?e.BLACK:t},e.multiplyByAlpha=function(e,t){return e=e.slice(),e[3]=Math.max(0,Math.min(e[3]*t,1)),e},e.Malloc=function(t,n){var r=e._malloc(n*t.BYTES_PER_ELEMENT);return{_ck:!0,length:n,byteOffset:r,Je:null,subarray:function(e,t){return e=this.toTypedArray().subarray(e,t),e._ck=!0,e},toTypedArray:function(){return this.Je&&this.Je.length?this.Je:(this.Je=new t(e.HEAPU8.buffer,r,n),this.Je._ck=!0,this.Je)}}},e.Free=function(t){e._free(t.byteOffset),t.byteOffset=R,t.toTypedArray=null,t.Je=null};var S=R,C,w=R,T,D=R,O,k,A=R,j,M=R,N,P=R,F,ee=R,te,ne=R,I,re=R,L,ie=R,ae=Float32Array.of(0,0,1),R=0;e.onRuntimeInitialized=function(){function t(t,n,r,i,a,o,s){o||(o=4*i.width,i.colorType===e.ColorType.RGBA_F16?o*=2:i.colorType===e.ColorType.RGBA_F32&&(o*=4));var c=o*i.height,l=a?a.byteOffset:e._malloc(c);if(s?!t._readPixels(i,l,o,n,r,s):!t._readPixels(i,l,o,n,r))return a||e._free(l),null;if(a)return a.toTypedArray();switch(i.colorType){case e.ColorType.RGBA_8888:case e.ColorType.RGBA_F16:t=new Uint8Array(e.HEAPU8.buffer,l,c).slice();break;case e.ColorType.RGBA_F32:t=new Float32Array(e.HEAPU8.buffer,l,c).slice();break;default:return null}return e._free(l),t}O=e.Malloc(Float32Array,4),D=O.byteOffset,T=e.Malloc(Float32Array,16),w=T.byteOffset,C=e.Malloc(Float32Array,9),S=C.byteOffset,I=e.Malloc(Float32Array,12),re=I.byteOffset,L=e.Malloc(Float32Array,12),ie=L.byteOffset,k=e.Malloc(Float32Array,4),A=k.byteOffset,j=e.Malloc(Float32Array,4),M=j.byteOffset,N=e.Malloc(Float32Array,3),P=N.byteOffset,F=e.Malloc(Float32Array,3),ee=F.byteOffset,te=e.Malloc(Int32Array,4),ne=te.byteOffset,e.ColorSpace.SRGB=e.ColorSpace._MakeSRGB(),e.ColorSpace.DISPLAY_P3=e.ColorSpace._MakeDisplayP3(),e.ColorSpace.ADOBE_RGB=e.ColorSpace._MakeAdobeRGB(),e.GlyphRunFlags={IsWhiteSpace:e._GlyphRunFlags_isWhiteSpace},e.Path.MakeFromCmds=function(t){var n=u(t,`HEAPF32`),r=e.Path._MakeFromCmds(n,t.length);return l(n,t),r},e.Path.MakeFromVerbsPointsWeights=function(t,n,r){var i=u(t,`HEAPU8`),a=u(n,`HEAPF32`),o=u(r,`HEAPF32`),s=e.Path._MakeFromVerbsPointsWeights(i,t.length,a,n.length,o,r&&r.length||0);return l(i,t),l(a,n),l(o,r),s},e.Path.prototype.addArc=function(e,t,n){return e=_(e),this._addArc(e,t,n),this},e.Path.prototype.addCircle=function(e,t,n,r){return this._addCircle(e,t,n,!!r),this},e.Path.prototype.addOval=function(e,t,n){return n===void 0&&(n=1),e=_(e),this._addOval(e,!!t,n),this},e.Path.prototype.addPath=function(){var e=Array.prototype.slice.call(arguments),t=e[0],n=!1;if(typeof e[e.length-1]==`boolean`&&(n=e.pop()),e.length===1)this._addPath(t,1,0,0,0,1,0,0,0,1,n);else if(e.length===2)e=e[1],this._addPath(t,e[0],e[1],e[2],e[3],e[4],e[5],e[6]||0,e[7]||0,e[8]||1,n);else if(e.length===7||e.length===10)this._addPath(t,e[1],e[2],e[3],e[4],e[5],e[6],e[7]||0,e[8]||0,e[9]||1,n);else return null;return this},e.Path.prototype.addPoly=function(e,t){var n=u(e,`HEAPF32`);return this._addPoly(n,e.length/2,t),l(n,e),this},e.Path.prototype.addRect=function(e,t){return e=_(e),this._addRect(e,!!t),this},e.Path.prototype.addRRect=function(e,t){return e=v(e),this._addRRect(e,!!t),this},e.Path.prototype.addVerbsPointsWeights=function(e,t,n){var r=u(e,`HEAPU8`),i=u(t,`HEAPF32`),a=u(n,`HEAPF32`);this._addVerbsPointsWeights(r,e.length,i,t.length,a,n&&n.length||0),l(r,e),l(i,t),l(a,n)},e.Path.prototype.arc=function(t,n,r,i,a,o){return t=e.LTRBRect(t-r,n-r,t+r,n+r),a=(a-i)/Math.PI*180-360*!!o,o=new e.Path,o.addArc(t,i/Math.PI*180,a),this.addPath(o,!0),o.delete(),this},e.Path.prototype.arcToOval=function(e,t,n,r){return e=_(e),this._arcToOval(e,t,n,r),this},e.Path.prototype.arcToRotated=function(e,t,n,r,i,a,o){return this._arcToRotated(e,t,n,!!r,!!i,a,o),this},e.Path.prototype.arcToTangent=function(e,t,n,r,i){return this._arcToTangent(e,t,n,r,i),this},e.Path.prototype.close=function(){return this._close(),this},e.Path.prototype.conicTo=function(e,t,n,r,i){return this._conicTo(e,t,n,r,i),this},e.Path.prototype.computeTightBounds=function(e){this._computeTightBounds(A);var t=k.toTypedArray();return e?(e.set(t),e):t.slice()},e.Path.prototype.cubicTo=function(e,t,n,r,i,a){return this._cubicTo(e,t,n,r,i,a),this},e.Path.prototype.dash=function(e,t,n){return this._dash(e,t,n)?this:null},e.Path.prototype.getBounds=function(e){this._getBounds(A);var t=k.toTypedArray();return e?(e.set(t),e):t.slice()},e.Path.prototype.lineTo=function(e,t){return this._lineTo(e,t),this},e.Path.prototype.moveTo=function(e,t){return this._moveTo(e,t),this},e.Path.prototype.offset=function(e,t){return this._transform(1,0,e,0,1,t,0,0,1),this},e.Path.prototype.quadTo=function(e,t,n,r){return this._quadTo(e,t,n,r),this},e.Path.prototype.rArcTo=function(e,t,n,r,i,a,o){return this._rArcTo(e,t,n,r,i,a,o),this},e.Path.prototype.rConicTo=function(e,t,n,r,i){return this._rConicTo(e,t,n,r,i),this},e.Path.prototype.rCubicTo=function(e,t,n,r,i,a){return this._rCubicTo(e,t,n,r,i,a),this},e.Path.prototype.rLineTo=function(e,t){return this._rLineTo(e,t),this},e.Path.prototype.rMoveTo=function(e,t){return this._rMoveTo(e,t),this},e.Path.prototype.rQuadTo=function(e,t,n,r){return this._rQuadTo(e,t,n,r),this},e.Path.prototype.stroke=function(t){return t||={},t.width=t.width||1,t.miter_limit=t.miter_limit||4,t.cap=t.cap||e.StrokeCap.Butt,t.join=t.join||e.StrokeJoin.Miter,t.precision=t.precision||1,this._stroke(t)?this:null},e.Path.prototype.transform=function(){if(arguments.length===1){var e=arguments[0];this._transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6]||0,e[7]||0,e[8]||1)}else if(arguments.length===6||arguments.length===9)e=arguments,this._transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6]||0,e[7]||0,e[8]||1);else throw`transform expected to take 1 or 9 arguments. Got `+arguments.length;return this},e.Path.prototype.trim=function(e,t,n){return this._trim(e,t,!!n)?this:null},e.Image.prototype.encodeToBytes=function(t,n){var r=e.mf();return t||=e.ImageFormat.PNG,n||=100,r?this._encodeToBytes(t,n,r):this._encodeToBytes(t,n)},e.Image.prototype.makeShaderCubic=function(e,t,n,r,i){return i=f(i),this._makeShaderCubic(e,t,n,r,i)},e.Image.prototype.makeShaderOptions=function(e,t,n,r,i){return i=f(i),this._makeShaderOptions(e,t,n,r,i)},e.Image.prototype.readPixels=function(n,r,i,a,o){var s=e.mf();return t(this,n,r,i,a,o,s)},e.Canvas.prototype.clear=function(t){e.de(this.be),t=m(t),this._clear(t)},e.Canvas.prototype.clipRRect=function(t,n,r){e.de(this.be),t=v(t),this._clipRRect(t,n,r)},e.Canvas.prototype.clipRect=function(t,n,r){e.de(this.be),t=_(t),this._clipRect(t,n,r)},e.Canvas.prototype.concat=function(t){e.de(this.be),t=p(t),this._concat(t)},e.Canvas.prototype.drawArc=function(t,n,r,i,a){e.de(this.be),t=_(t),this._drawArc(t,n,r,i,a)},e.Canvas.prototype.drawAtlas=function(t,n,r,i,a,s,c){if(t&&i&&n&&r&&n.length===r.length){e.de(this.be),a||=e.BlendMode.SrcOver;var d=u(n,`HEAPF32`),f=u(r,`HEAPF32`),p=r.length/4,m=u(o(s),`HEAPU32`);if(c&&`B`in c&&`C`in c)this._drawAtlasCubic(t,f,d,m,p,a,c.B,c.C,i);else{let n=e.FilterMode.Linear,r=e.MipmapMode.None;c&&(n=c.filter,`mipmap`in c&&(r=c.mipmap)),this._drawAtlasOptions(t,f,d,m,p,a,n,r,i)}l(d,n),l(f,r),l(m,s)}},e.Canvas.prototype.drawCircle=function(t,n,r,i){e.de(this.be),this._drawCircle(t,n,r,i)},e.Canvas.prototype.drawColor=function(t,n){e.de(this.be),t=m(t),n===void 0?this._drawColor(t):this._drawColor(t,n)},e.Canvas.prototype.drawColorInt=function(t,n){e.de(this.be),this._drawColorInt(t,n||e.BlendMode.SrcOver)},e.Canvas.prototype.drawColorComponents=function(t,n,r,i,a){e.de(this.be),t=h(t,n,r,i),a===void 0?this._drawColor(t):this._drawColor(t,a)},e.Canvas.prototype.drawDRRect=function(t,n,r){e.de(this.be),t=v(t,re),n=v(n,ie),this._drawDRRect(t,n,r)},e.Canvas.prototype.drawImage=function(t,n,r,i){e.de(this.be),this._drawImage(t,n,r,i||null)},e.Canvas.prototype.drawImageCubic=function(t,n,r,i,a,o){e.de(this.be),this._drawImageCubic(t,n,r,i,a,o||null)},e.Canvas.prototype.drawImageOptions=function(t,n,r,i,a,o){e.de(this.be),this._drawImageOptions(t,n,r,i,a,o||null)},e.Canvas.prototype.drawImageNine=function(t,n,r,i,a){e.de(this.be),n=u(n,`HEAP32`,ne),r=_(r),this._drawImageNine(t,n,r,i,a||null)},e.Canvas.prototype.drawImageRect=function(t,n,r,i,a){e.de(this.be),_(n,A),_(r,M),this._drawImageRect(t,A,M,i,!!a)},e.Canvas.prototype.drawImageRectCubic=function(t,n,r,i,a,o){e.de(this.be),_(n,A),_(r,M),this._drawImageRectCubic(t,A,M,i,a,o||null)},e.Canvas.prototype.drawImageRectOptions=function(t,n,r,i,a,o){e.de(this.be),_(n,A),_(r,M),this._drawImageRectOptions(t,A,M,i,a,o||null)},e.Canvas.prototype.drawLine=function(t,n,r,i,a){e.de(this.be),this._drawLine(t,n,r,i,a)},e.Canvas.prototype.drawOval=function(t,n){e.de(this.be),t=_(t),this._drawOval(t,n)},e.Canvas.prototype.drawPaint=function(t){e.de(this.be),this._drawPaint(t)},e.Canvas.prototype.drawParagraph=function(t,n,r){e.de(this.be),this._drawParagraph(t,n,r)},e.Canvas.prototype.drawPatch=function(t,n,r,i,a){if(24>t.length)throw`Need 12 cubic points`;if(n&&4>n.length)throw`Need 4 colors`;if(r&&8>r.length)throw`Need 4 shader coordinates`;e.de(this.be);let s=u(t,`HEAPF32`),c=n?u(o(n),`HEAPU32`):R,d=r?u(r,`HEAPF32`):R;i||=e.BlendMode.Modulate,this._drawPatch(s,c,d,i,a),l(d,r),l(c,n),l(s,t)},e.Canvas.prototype.drawPath=function(t,n){e.de(this.be),this._drawPath(t,n)},e.Canvas.prototype.drawPicture=function(t){e.de(this.be),this._drawPicture(t)},e.Canvas.prototype.drawPoints=function(t,n,r){e.de(this.be);var i=u(n,`HEAPF32`);this._drawPoints(t,i,n.length/2,r),l(i,n)},e.Canvas.prototype.drawRRect=function(t,n){e.de(this.be),t=v(t),this._drawRRect(t,n)},e.Canvas.prototype.drawRect=function(t,n){e.de(this.be),t=_(t),this._drawRect(t,n)},e.Canvas.prototype.drawRect4f=function(t,n,r,i,a){e.de(this.be),this._drawRect4f(t,n,r,i,a)},e.Canvas.prototype.drawShadow=function(t,n,r,i,a,o,s){e.de(this.be);var c=u(a,`HEAPF32`),d=u(o,`HEAPF32`);n=u(n,`HEAPF32`,P),r=u(r,`HEAPF32`,ee),this._drawShadow(t,n,r,i,c,d,s),l(c,a),l(d,o)},e.getShadowLocalBounds=function(e,t,n,r,i,a,o){return e=f(e),n=u(n,`HEAPF32`,P),r=u(r,`HEAPF32`,ee),this._getShadowLocalBounds(e,t,n,r,i,a,A)?(t=k.toTypedArray(),o?(o.set(t),o):t.slice()):null},e.Canvas.prototype.drawTextBlob=function(t,n,r,i){e.de(this.be),this._drawTextBlob(t,n,r,i)},e.Canvas.prototype.drawVertices=function(t,n,r){e.de(this.be),this._drawVertices(t,n,r)},e.Canvas.prototype.getDeviceClipBounds=function(e){this._getDeviceClipBounds(ne);var t=te.toTypedArray();return e?e.set(t):e=t.slice(),e},e.Canvas.prototype.quickReject=function(e){return e=_(e),this._quickReject(e)},e.Canvas.prototype.getLocalToDevice=function(){this._getLocalToDevice(w);for(var t=w,n=Array(16),r=0;16>r;r++)n[r]=e.HEAPF32[t/4+r];return n},e.Canvas.prototype.getTotalMatrix=function(){this._getTotalMatrix(S);for(var t=Array(9),n=0;9>n;n++)t[n]=e.HEAPF32[S/4+n];return t},e.Canvas.prototype.makeSurface=function(e){return e=this._makeSurface(e),e.be=this.be,e},e.Canvas.prototype.readPixels=function(n,r,i,a,o){return e.de(this.be),t(this,n,r,i,a,o)},e.Canvas.prototype.saveLayer=function(t,n,r,i,a){return n=_(n),this._saveLayer(t||null,n,r||null,i||0,a||e.TileMode.Clamp)},e.Canvas.prototype.writePixels=function(t,n,r,i,a,o,s,c){if(t.byteLength%(n*r))throw`pixels length must be a multiple of the srcWidth * srcHeight`;e.de(this.be);var d=t.byteLength/(n*r);o||=e.AlphaType.Unpremul,s||=e.ColorType.RGBA_8888,c||=e.ColorSpace.SRGB;var f=d*n;return d=u(t,`HEAPU8`),n=this._writePixels({width:n,height:r,colorType:s,alphaType:o,colorSpace:c},d,f,i,a),l(d,t),n},e.ColorFilter.MakeBlend=function(t,n,r){return t=m(t),r||=e.ColorSpace.SRGB,e.ColorFilter._MakeBlend(t,n,r)},e.ColorFilter.MakeMatrix=function(t){if(!t||t.length!==20)throw`invalid color matrix`;var n=u(t,`HEAPF32`),r=e.ColorFilter._makeMatrix(n);return l(n,t),r},e.ContourMeasure.prototype.getPosTan=function(e,t){return this._getPosTan(e,A),e=k.toTypedArray(),t?(t.set(e),t):e.slice()},e.ImageFilter.prototype.getOutputBounds=function(e,t,n){return e=_(e,A),t=f(t),this._getOutputBounds(e,t,ne),t=te.toTypedArray(),n?(n.set(t),n):t.slice()},e.ImageFilter.MakeDropShadow=function(t,n,r,i,a,o){return a=m(a,D),e.ImageFilter._MakeDropShadow(t,n,r,i,a,o)},e.ImageFilter.MakeDropShadowOnly=function(t,n,r,i,a,o){return a=m(a,D),e.ImageFilter._MakeDropShadowOnly(t,n,r,i,a,o)},e.ImageFilter.MakeImage=function(t,n,r,i){if(r=_(r,A),i=_(i,M),`B`in n&&`C`in n)return e.ImageFilter._MakeImageCubic(t,n.B,n.C,r,i);let a=n.filter,o=e.MipmapMode.None;return`mipmap`in n&&(o=n.mipmap),e.ImageFilter._MakeImageOptions(t,a,o,r,i)},e.ImageFilter.MakeMatrixTransform=function(t,n,r){if(t=f(t),`B`in n&&`C`in n)return e.ImageFilter._MakeMatrixTransformCubic(t,n.B,n.C,r);let i=n.filter,a=e.MipmapMode.None;return`mipmap`in n&&(a=n.mipmap),e.ImageFilter._MakeMatrixTransformOptions(t,i,a,r)},e.Paint.prototype.getColor=function(){return this._getColor(D),g(D)},e.Paint.prototype.setColor=function(e,t){t||=null,e=m(e),this._setColor(e,t)},e.Paint.prototype.setColorComponents=function(e,t,n,r,i){i||=null,e=h(e,t,n,r),this._setColor(e,i)},e.Path.prototype.getPoint=function(e,t){return this._getPoint(e,A),e=k.toTypedArray(),t?(t[0]=e[0],t[1]=e[1],t):e.slice(0,2)},e.Picture.prototype.makeShader=function(e,t,n,r,i){return r=f(r),i=_(i),this._makeShader(e,t,n,r,i)},e.Picture.prototype.cullRect=function(e){this._cullRect(A);var t=k.toTypedArray();return e?(e.set(t),e):t.slice()},e.PictureRecorder.prototype.beginRecording=function(e,t){return e=_(e),this._beginRecording(e,!!t)},e.Surface.prototype.getCanvas=function(){var e=this._getCanvas();return e.be=this.be,e},e.Surface.prototype.makeImageSnapshot=function(t){return e.de(this.be),t=u(t,`HEAP32`,ne),this._makeImageSnapshot(t)},e.Surface.prototype.makeSurface=function(t){return e.de(this.be),t=this._makeSurface(t),t.be=this.be,t},e.Surface.prototype.Wf=function(t,n){return this.Ze||=this.getCanvas(),requestAnimationFrame(function(){e.de(this.be),t(this.Ze),this.flush(n)}.bind(this))},e.Surface.prototype.requestAnimationFrame||(e.Surface.prototype.requestAnimationFrame=e.Surface.prototype.Wf),e.Surface.prototype.Sf=function(t,n){this.Ze||=this.getCanvas(),requestAnimationFrame(function(){e.de(this.be),t(this.Ze),this.flush(n),this.dispose()}.bind(this))},e.Surface.prototype.drawOnce||(e.Surface.prototype.drawOnce=e.Surface.prototype.Sf),e.PathEffect.MakeDash=function(t,n){if(n||=0,!t.length||t.length%2==1)throw`Intervals array must have even length`;var r=u(t,`HEAPF32`);return n=e.PathEffect._MakeDash(r,t.length,n),l(r,t),n},e.PathEffect.MakeLine2D=function(t,n){return n=f(n),e.PathEffect._MakeLine2D(t,n)},e.PathEffect.MakePath2D=function(t,n){return t=f(t),e.PathEffect._MakePath2D(t,n)},e.Shader.MakeColor=function(t,n){return n||=null,t=m(t),e.Shader._MakeColor(t,n)},e.Shader.Blend=e.Shader.MakeBlend,e.Shader.Color=e.Shader.MakeColor,e.Shader.MakeLinearGradient=function(t,n,r,i,a,o,s,c){c||=null;var p=d(r),m=u(i,`HEAPF32`);s||=0,o=f(o);var h=k.toTypedArray();return h.set(t),h.set(n,2),t=e.Shader._MakeLinearGradient(A,p.te,p.colorType,m,p.count,a,s,o,c),l(p.te,r),i&&l(m,i),t},e.Shader.MakeRadialGradient=function(t,n,r,i,a,o,s,c){c||=null;var p=d(r),m=u(i,`HEAPF32`);return s||=0,o=f(o),t=e.Shader._MakeRadialGradient(t[0],t[1],n,p.te,p.colorType,m,p.count,a,s,o,c),l(p.te,r),i&&l(m,i),t},e.Shader.MakeSweepGradient=function(t,n,r,i,a,o,s,c,p,m){m||=null;var h=d(r),g=u(i,`HEAPF32`);return s||=0,c||=0,p||=360,o=f(o),t=e.Shader._MakeSweepGradient(t,n,h.te,h.colorType,g,h.count,a,c,p,s,o,m),l(h.te,r),i&&l(g,i),t},e.Shader.MakeTwoPointConicalGradient=function(t,n,r,i,a,o,s,c,p,m){m||=null;var h=d(a),g=u(o,`HEAPF32`);p||=0,c=f(c);var _=k.toTypedArray();return _.set(t),_.set(r,2),t=e.Shader._MakeTwoPointConicalGradient(A,n,i,h.te,h.colorType,g,h.count,s,p,c,m),l(h.te,a),o&&l(g,o),t},e.Vertices.prototype.bounds=function(e){this._bounds(A);var t=k.toTypedArray();return e?(e.set(t),e):t.slice()},e.ke&&e.ke.forEach(function(e){e()})},e.computeTonalColors=function(e){var t=u(e.ambient,`HEAPF32`),n=u(e.spot,`HEAPF32`);this._computeTonalColors(t,n);var r={ambient:g(t),spot:g(n)};return l(t,e.ambient),l(n,e.spot),r},e.LTRBRect=function(e,t,n,r){return Float32Array.of(e,t,n,r)},e.XYWHRect=function(e,t,n,r){return Float32Array.of(e,t,e+n,t+r)},e.LTRBiRect=function(e,t,n,r){return Int32Array.of(e,t,n,r)},e.XYWHiRect=function(e,t,n,r){return Int32Array.of(e,t,e+n,t+r)},e.RRectXY=function(e,t,n){return Float32Array.of(e[0],e[1],e[2],e[3],t,n,t,n,t,n,t,n)},e.MakeAnimatedImageFromEncoded=function(t){t=new Uint8Array(t);var n=e._malloc(t.byteLength);return e.HEAPU8.set(t,n),(t=e._decodeAnimatedImage(n,t.byteLength))?t:null},e.MakeImageFromEncoded=function(t){t=new Uint8Array(t);var n=e._malloc(t.byteLength);return e.HEAPU8.set(t,n),(t=e._decodeImage(n,t.byteLength))?t:null};var oe=null;e.MakeImageFromCanvasImageSource=function(t){var n=t.width,r=t.height;oe||=document.createElement(`canvas`),oe.width=n,oe.height=r;var i=oe.getContext(`2d`,{willReadFrequently:!0});return i.drawImage(t,0,0),t=i.getImageData(0,0,n,r),e.MakeImage({width:n,height:r,alphaType:e.AlphaType.Unpremul,colorType:e.ColorType.RGBA_8888,colorSpace:e.ColorSpace.SRGB},t.data,4*n)},e.MakeImage=function(t,n,r){var i=e._malloc(n.length);return e.HEAPU8.set(n,i),e._MakeImage(t,i,n.length,r)},e.MakeVertices=function(t,n,r,i,a,s){var c=a&&a.length||0,l=0;return r&&r.length&&(l|=1),i&&i.length&&(l|=2),s===void 0||s||(l|=4),t=new e._VerticesBuilder(t,n.length/2,c,l),u(n,`HEAPF32`,t.positions()),t.texCoords()&&u(r,`HEAPF32`,t.texCoords()),t.colors()&&u(o(i),`HEAPU32`,t.colors()),t.indices()&&u(a,`HEAPU16`,t.indices()),t.detach()},e.Matrix={},e.Matrix.identity=function(){return n(3)},e.Matrix.invert=function(e){var t=e[0]*e[4]*e[8]+e[1]*e[5]*e[6]+e[2]*e[3]*e[7]-e[2]*e[4]*e[6]-e[1]*e[3]*e[8]-e[0]*e[5]*e[7];return t?[(e[4]*e[8]-e[5]*e[7])/t,(e[2]*e[7]-e[1]*e[8])/t,(e[1]*e[5]-e[2]*e[4])/t,(e[5]*e[6]-e[3]*e[8])/t,(e[0]*e[8]-e[2]*e[6])/t,(e[2]*e[3]-e[0]*e[5])/t,(e[3]*e[7]-e[4]*e[6])/t,(e[1]*e[6]-e[0]*e[7])/t,(e[0]*e[4]-e[1]*e[3])/t]:null},e.Matrix.mapPoints=function(e,t){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1],a=e[6]*r+e[7]*i+e[8],o=e[3]*r+e[4]*i+e[5];t[n]=(e[0]*r+e[1]*i+e[2])/a,t[n+1]=o/a}return t},e.Matrix.multiply=function(){return x(3,arguments)},e.Matrix.rotated=function(e,t,n){t||=0,n||=0;var r=Math.sin(e);return e=Math.cos(e),[e,-r,y(r,n,1-e,t),r,e,y(-r,t,1-e,n),0,0,1]},e.Matrix.scaled=function(e,r,i,a){i||=0,a||=0;var o=t([e,r],n(3),3,0,1);return t([i-e*i,a-r*a],o,3,2,0)},e.Matrix.skewed=function(e,r,i,a){i||=0,a||=0;var o=t([e,r],n(3),3,1,-1);return t([-e*i,-r*a],o,3,2,0)},e.Matrix.translated=function(e,r){return t(arguments,n(3),3,2,0)},e.Vector={},e.Vector.dot=function(e,t){return e.map(function(e,n){return e*t[n]}).reduce(function(e,t){return e+t})},e.Vector.lengthSquared=function(t){return e.Vector.dot(t,t)},e.Vector.length=function(t){return Math.sqrt(e.Vector.lengthSquared(t))},e.Vector.mulScalar=function(e,t){return e.map(function(e){return e*t})},e.Vector.add=function(e,t){return e.map(function(e,n){return e+t[n]})},e.Vector.sub=function(e,t){return e.map(function(e,n){return e-t[n]})},e.Vector.dist=function(t,n){return e.Vector.length(e.Vector.sub(t,n))},e.Vector.normalize=function(t){return e.Vector.mulScalar(t,1/e.Vector.length(t))},e.Vector.cross=function(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]},e.M44={},e.M44.identity=function(){return n(4)},e.M44.translated=function(e){return t(e,n(4),4,3,0)},e.M44.scaled=function(e){return t(e,n(4),4,0,1)},e.M44.rotated=function(t,n){return e.M44.rotatedUnitSinCos(e.Vector.normalize(t),Math.sin(n),Math.cos(n))},e.M44.rotatedUnitSinCos=function(e,t,n){var r=e[0],i=e[1];e=e[2];var a=1-n;return[a*r*r+n,a*r*i-t*e,a*r*e+t*i,0,a*r*i+t*e,a*i*i+n,a*i*e-t*r,0,a*r*e-t*i,a*i*e+t*r,a*e*e+n,0,0,0,0,1]},e.M44.lookat=function(n,r,i){r=e.Vector.normalize(e.Vector.sub(r,n)),i=e.Vector.normalize(i),i=e.Vector.normalize(e.Vector.cross(r,i));var a=e.M44.identity();return t(i,a,4,0,0),t(e.Vector.cross(i,r),a,4,1,0),t(e.Vector.mulScalar(r,-1),a,4,2,0),t(n,a,4,3,0),n=e.M44.invert(a),n===null?e.M44.identity():n},e.M44.perspective=function(e,t,n){var r=1/(t-e);return n/=2,n=Math.cos(n)/Math.sin(n),[n,0,0,0,0,n,0,0,0,0,(t+e)*r,2*t*e*r,0,0,-1,1]},e.M44.rc=function(e,t,n){return e[4*t+n]},e.M44.multiply=function(){return x(4,arguments)},e.M44.invert=function(e){var t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11];e=e[15];var g=t*o-n*a,_=t*s-r*a,v=t*c-i*a,y=n*s-r*o,b=n*c-i*o,x=r*c-i*s,S=l*m-u*p,C=l*h-d*p,w=l*e-f*p,T=u*h-d*m,E=u*e-f*m,D=d*e-f*h,O=g*D-_*E+v*T+y*w-b*C+x*S,k=1/O;return O===0||k===1/0?null:(g*=k,_*=k,v*=k,y*=k,b*=k,x*=k,S*=k,C*=k,w*=k,T*=k,E*=k,D*=k,t=[o*D-s*E+c*T,s*w-a*D-c*C,a*E-o*w+c*S,o*C-a*T-s*S,r*E-n*D-i*T,t*D-r*w+i*C,n*w-t*E-i*S,t*T-n*C+r*S,m*x-h*b+e*y,h*v-p*x-e*_,p*b-m*v+e*g,m*_-p*y-h*g,d*b-u*x-f*y,l*x-d*v+f*_,u*v-l*b-f*g,l*y-u*_+d*g],t.every(function(e){return!isNaN(e)&&e!==1/0&&e!==-1/0})?t:null)},e.M44.transpose=function(e){return[e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]]},e.M44.mustInvert=function(t){if(t=e.M44.invert(t),t===null)throw`Matrix not invertible`;return t},e.M44.setupCamera=function(t,n,r){var i=e.M44.lookat(r.eye,r.coa,r.up);return r=e.M44.perspective(r.near,r.far,r.angle),n=[(t[2]-t[0])/2,(t[3]-t[1])/2,n],t=e.M44.multiply(e.M44.translated([(t[0]+t[2])/2,(t[1]+t[3])/2,0]),e.M44.scaled(n)),e.M44.multiply(t,r,i,e.M44.mustInvert(t))},e.ColorMatrix={},e.ColorMatrix.identity=function(){var e=new Float32Array(20);return e[0]=1,e[6]=1,e[12]=1,e[18]=1,e},e.ColorMatrix.scaled=function(e,t,n,r){var i=new Float32Array(20);return i[0]=e,i[6]=t,i[12]=n,i[18]=r,i};var se=[[6,7,11,12],[0,10,2,12],[0,1,5,6]];e.ColorMatrix.rotated=function(t,n,r){var i=e.ColorMatrix.identity();return t=se[t],i[t[0]]=r,i[t[1]]=n,i[t[2]]=-n,i[t[3]]=r,i},e.ColorMatrix.postTranslate=function(e,t,n,r,i){return e[4]+=t,e[9]+=n,e[14]+=r,e[19]+=i,e},e.ColorMatrix.concat=function(e,t){for(var n=new Float32Array(20),r=0,i=0;20>i;i+=5){for(var a=0;4>a;a++)n[r++]=e[i]*t[a]+e[i+1]*t[a+5]+e[i+2]*t[a+10]+e[i+3]*t[a+15];n[r++]=e[i]*t[4]+e[i+1]*t[9]+e[i+2]*t[14]+e[i+3]*t[19]+e[i+4]}return n},(function(e){e.ke=e.ke||[],e.ke.push(function(){function t(t){return t&&(t.dir=t.dir===0?e.TextDirection.RTL:e.TextDirection.LTR),t}function n(t){if(!t||!t.length)return[];for(var n=[],r=0;r<t.length;r+=5){var i=e.LTRBRect(t[r],t[r+1],t[r+2],t[r+3]),a=e.TextDirection.LTR;t[r+4]===0&&(a=e.TextDirection.RTL),n.push({rect:i,dir:a})}return e._free(t.byteOffset),n}function r(t){return t||={},t.weight===void 0&&(t.weight=e.FontWeight.Normal),t.width=t.width||e.FontWidth.Normal,t.slant=t.slant||e.FontSlant.Upright,t}function i(e){if(!e||!e.length)return R;for(var t=[],n=0;n<e.length;n++){var r=a(e[n]);t.push(r)}return u(t,`HEAPU32`)}function a(t){if(c[t])return c[t];var n=bt(t)+1,r=e._malloc(n);return yt(t,E,r,n),c[t]=r}function o(t){if(t._colorPtr=m(t.color),t._foregroundColorPtr=R,t._backgroundColorPtr=R,t._decorationColorPtr=R,t.foregroundColor&&(t._foregroundColorPtr=m(t.foregroundColor,f)),t.backgroundColor&&(t._backgroundColorPtr=m(t.backgroundColor,p)),t.decorationColor&&(t._decorationColorPtr=m(t.decorationColor,h)),Array.isArray(t.fontFamilies)&&t.fontFamilies.length?(t._fontFamiliesPtr=i(t.fontFamilies),t._fontFamiliesLen=t.fontFamilies.length):(t._fontFamiliesPtr=R,t._fontFamiliesLen=0),t.locale){var n=t.locale;t._localePtr=a(n),t._localeLen=bt(n)}else t._localePtr=R,t._localeLen=0;if(Array.isArray(t.shadows)&&t.shadows.length){n=t.shadows;var r=n.map(function(t){return t.color||e.BLACK}),o=n.map(function(e){return e.blurRadius||0});t._shadowLen=n.length;for(var s=e._malloc(8*n.length),c=s/4,l=0;l<n.length;l++){var g=n[l].offset||[0,0];e.HEAPF32[c]=g[0],e.HEAPF32[c+1]=g[1],c+=2}t._shadowColorsPtr=d(r).te,t._shadowOffsetsPtr=s,t._shadowBlurRadiiPtr=u(o,`HEAPF32`)}else t._shadowLen=0,t._shadowColorsPtr=R,t._shadowOffsetsPtr=R,t._shadowBlurRadiiPtr=R;Array.isArray(t.fontFeatures)&&t.fontFeatures.length?(n=t.fontFeatures,r=n.map(function(e){return e.name}),o=n.map(function(e){return e.value}),t._fontFeatureLen=n.length,t._fontFeatureNamesPtr=i(r),t._fontFeatureValuesPtr=u(o,`HEAPU32`)):(t._fontFeatureLen=0,t._fontFeatureNamesPtr=R,t._fontFeatureValuesPtr=R),Array.isArray(t.fontVariations)&&t.fontVariations.length?(n=t.fontVariations,r=n.map(function(e){return e.axis}),o=n.map(function(e){return e.value}),t._fontVariationLen=n.length,t._fontVariationAxesPtr=i(r),t._fontVariationValuesPtr=u(o,`HEAPF32`)):(t._fontVariationLen=0,t._fontVariationAxesPtr=R,t._fontVariationValuesPtr=R)}function s(t){e._free(t._fontFamiliesPtr),e._free(t._shadowColorsPtr),e._free(t._shadowOffsetsPtr),e._free(t._shadowBlurRadiiPtr),e._free(t._fontFeatureNamesPtr),e._free(t._fontFeatureValuesPtr),e._free(t._fontVariationAxesPtr),e._free(t._fontVariationValuesPtr)}e.Paragraph.prototype.getRectsForRange=function(e,t,r,i){return e=this._getRectsForRange(e,t,r,i),n(e)},e.Paragraph.prototype.getRectsForPlaceholders=function(){return n(this._getRectsForPlaceholders())},e.Paragraph.prototype.getGlyphInfoAt=function(e){return t(this._getGlyphInfoAt(e))},e.Paragraph.prototype.getClosestGlyphInfoAtCoordinate=function(e,n){return t(this._getClosestGlyphInfoAtCoordinate(e,n))},e.TypefaceFontProvider.prototype.registerFont=function(t,n){if(t=e.Typeface.MakeTypefaceFromData(t),!t)return null;n=a(n),this._registerFont(t,n),t.delete()},e.ParagraphStyle=function(t){if(t.disableHinting=t.disableHinting||!1,t.ellipsis){var n=t.ellipsis;t._ellipsisPtr=a(n),t._ellipsisLen=bt(n)}else t._ellipsisPtr=R,t._ellipsisLen=0;return t.heightMultiplier??=-1,t.maxLines=t.maxLines||0,t.replaceTabCharacters=t.replaceTabCharacters||!1,n=(n=t.strutStyle)||{},n.strutEnabled=n.strutEnabled||!1,n.strutEnabled&&Array.isArray(n.fontFamilies)&&n.fontFamilies.length?(n._fontFamiliesPtr=i(n.fontFamilies),n._fontFamiliesLen=n.fontFamilies.length):(n._fontFamiliesPtr=R,n._fontFamiliesLen=0),n.fontStyle=r(n.fontStyle),n.fontSize??=-1,n.heightMultiplier??=-1,n.halfLeading=n.halfLeading||!1,n.leading=n.leading||0,n.forceStrutHeight=n.forceStrutHeight||!1,t.strutStyle=n,t.textAlign=t.textAlign||e.TextAlign.Start,t.textDirection=t.textDirection||e.TextDirection.LTR,t.textHeightBehavior=t.textHeightBehavior||e.TextHeightBehavior.All,t.textStyle=e.TextStyle(t.textStyle),t.applyRoundingHack=!1!==t.applyRoundingHack,t},e.TextStyle=function(t){return t.color||=e.BLACK,t.decoration=t.decoration||0,t.decorationThickness=t.decorationThickness||0,t.decorationStyle=t.decorationStyle||e.DecorationStyle.Solid,t.textBaseline=t.textBaseline||e.TextBaseline.Alphabetic,t.fontSize??=-1,t.letterSpacing=t.letterSpacing||0,t.wordSpacing=t.wordSpacing||0,t.heightMultiplier??=-1,t.halfLeading=t.halfLeading||!1,t.fontStyle=r(t.fontStyle),t};var c={},f=e._malloc(16),p=e._malloc(16),h=e._malloc(16);e.ParagraphBuilder.Make=function(t,n){return o(t.textStyle),n=e.ParagraphBuilder._Make(t,n),s(t.textStyle),n},e.ParagraphBuilder.MakeFromFontProvider=function(t,n){return o(t.textStyle),n=e.ParagraphBuilder._MakeFromFontProvider(t,n),s(t.textStyle),n},e.ParagraphBuilder.MakeFromFontCollection=function(t,n){return o(t.textStyle),n=e.ParagraphBuilder._MakeFromFontCollection(t,n),s(t.textStyle),n},e.ParagraphBuilder.ShapeText=function(t,n,r){let i=0;for(let e of n)i+=e.length;if(i!==t.length)throw`Accumulated block lengths must equal text.length`;return e.ParagraphBuilder._ShapeText(t,n,r)},e.ParagraphBuilder.prototype.pushStyle=function(e){o(e),this._pushStyle(e),s(e)},e.ParagraphBuilder.prototype.pushPaintStyle=function(e,t,n){o(e),this._pushPaintStyle(e,t,n),s(e)},e.ParagraphBuilder.prototype.addPlaceholder=function(t,n,r,i,a){r||=e.PlaceholderAlignment.Baseline,i||=e.TextBaseline.Alphabetic,this._addPlaceholder(t||0,n||0,r,i,a||0)},e.ParagraphBuilder.prototype.setWordsUtf8=function(e){var t=u(e,`HEAPU32`);this._setWordsUtf8(t,e&&e.length||0),l(t,e)},e.ParagraphBuilder.prototype.setWordsUtf16=function(e){var t=u(e,`HEAPU32`);this._setWordsUtf16(t,e&&e.length||0),l(t,e)},e.ParagraphBuilder.prototype.setGraphemeBreaksUtf8=function(e){var t=u(e,`HEAPU32`);this._setGraphemeBreaksUtf8(t,e&&e.length||0),l(t,e)},e.ParagraphBuilder.prototype.setGraphemeBreaksUtf16=function(e){var t=u(e,`HEAPU32`);this._setGraphemeBreaksUtf16(t,e&&e.length||0),l(t,e)},e.ParagraphBuilder.prototype.setLineBreaksUtf8=function(e){var t=u(e,`HEAPU32`);this._setLineBreaksUtf8(t,e&&e.length||0),l(t,e)},e.ParagraphBuilder.prototype.setLineBreaksUtf16=function(e){var t=u(e,`HEAPU32`);this._setLineBreaksUtf16(t,e&&e.length||0),l(t,e)}})})(r),e.ke=e.ke||[],e.ke.push(function(){e.Path.prototype.op=function(e,t){return this._op(e,t)?this:null},e.Path.prototype.simplify=function(){return this._simplify()?this:null}}),e.ke=e.ke||[],e.ke.push(function(){e.Canvas.prototype.drawText=function(t,n,r,i,a){var o=bt(t),s=e._malloc(o+1);yt(t,E,s,o+1),this._drawSimpleText(s,o,n,r,a,i),e._free(s)},e.Canvas.prototype.drawGlyphs=function(t,n,r,i,a,o){if(!(2*t.length<=n.length))throw`Not enough positions for the array of gyphs`;e.de(this.be);let s=u(t,`HEAPU16`),c=u(n,`HEAPF32`);this._drawGlyphs(t.length,s,c,r,i,a,o),l(c,n),l(s,t)},e.Font.prototype.getGlyphBounds=function(t,n,r){var i=u(t,`HEAPU16`),a=e._malloc(16*t.length);return this._getGlyphWidthBounds(i,t.length,R,a,n||null),n=new Float32Array(e.HEAPU8.buffer,a,4*t.length),l(i,t),r?(r.set(n),e._free(a),r):(t=Float32Array.from(n),e._free(a),t)},e.Font.prototype.getGlyphIDs=function(t,n,r){n||=t.length;var i=bt(t)+1,a=e._malloc(i);return yt(t,E,a,i),t=e._malloc(2*n),n=this._getGlyphIDs(a,i-1,n,t),e._free(a),0>n?(e._free(t),null):(a=new Uint16Array(e.HEAPU8.buffer,t,n),r?(r.set(a),e._free(t),r):(r=Uint16Array.from(a),e._free(t),r))},e.Font.prototype.getGlyphIntercepts=function(e,t,n,r){var i=u(e,`HEAPU16`),a=u(t,`HEAPF32`);return this._getGlyphIntercepts(i,e.length,!(e&&e._ck),a,t.length,!(t&&t._ck),n,r)},e.Font.prototype.getGlyphWidths=function(t,n,r){var i=u(t,`HEAPU16`),a=e._malloc(4*t.length);return this._getGlyphWidthBounds(i,t.length,a,R,n||null),n=new Float32Array(e.HEAPU8.buffer,a,t.length),l(i,t),r?(r.set(n),e._free(a),r):(t=Float32Array.from(n),e._free(a),t)},e.FontMgr.FromData=function(){if(!arguments.length)return null;var t=arguments;if(t.length===1&&Array.isArray(t[0])&&(t=arguments[0]),!t.length)return null;for(var n=[],r=[],i=0;i<t.length;i++){var a=new Uint8Array(t[i]),o=u(a,`HEAPU8`);n.push(o),r.push(a.byteLength)}return n=u(n,`HEAPU32`),r=u(r,`HEAPU32`),t=e.FontMgr._fromData(n,r,t.length),e._free(n),e._free(r),t},e.Typeface.MakeTypefaceFromData=function(t){t=new Uint8Array(t);var n=u(t,`HEAPU8`);return(t=e.Typeface._MakeTypefaceFromData(n,t.byteLength))?t:null},e.Typeface.MakeFreeTypeFaceFromData=e.Typeface.MakeTypefaceFromData,e.Typeface.prototype.getGlyphIDs=function(t,n,r){n||=t.length;var i=bt(t)+1,a=e._malloc(i);return yt(t,E,a,i),t=e._malloc(2*n),n=this._getGlyphIDs(a,i-1,n,t),e._free(a),0>n?(e._free(t),null):(a=new Uint16Array(e.HEAPU8.buffer,t,n),r?(r.set(a),e._free(t),r):(r=Uint16Array.from(a),e._free(t),r))},e.TextBlob.MakeOnPath=function(t,n,r,i){if(t&&t.length&&n&&n.countPoints()){if(n.countPoints()===1)return this.MakeFromText(t,r);i||=0;var a=r.getGlyphIDs(t);a=r.getGlyphWidths(a);var o=[];n=new e.ContourMeasureIter(n,!1,1);for(var s=n.next(),c=new Float32Array(4),l=0;l<t.length&&s;l++){var u=a[l];if(i+=u/2,i>s.length()){if(s.delete(),s=n.next(),!s){t=t.substring(0,l);break}i=u/2}s.getPosTan(i,c);var d=c[2],f=c[3];o.push(d,f,c[0]-u/2*d,c[1]-u/2*f),i+=u/2}return t=this.MakeFromRSXform(t,o,r),s&&s.delete(),n.delete(),t}},e.TextBlob.MakeFromRSXform=function(t,n,r){var i=bt(t)+1,a=e._malloc(i);return yt(t,E,a,i),t=u(n,`HEAPF32`),r=e.TextBlob._MakeFromRSXform(a,i-1,t,r),e._free(a),r||null},e.TextBlob.MakeFromRSXformGlyphs=function(t,n,r){var i=u(t,`HEAPU16`);return n=u(n,`HEAPF32`),r=e.TextBlob._MakeFromRSXformGlyphs(i,2*t.length,n,r),l(i,t),r||null},e.TextBlob.MakeFromGlyphs=function(t,n){var r=u(t,`HEAPU16`);return n=e.TextBlob._MakeFromGlyphs(r,2*t.length,n),l(r,t),n||null},e.TextBlob.MakeFromText=function(t,n){var r=bt(t)+1,i=e._malloc(r);return yt(t,E,i,r),t=e.TextBlob._MakeFromText(i,r-1,n),e._free(i),t||null},e.MallocGlyphIDs=function(t){return e.Malloc(Uint16Array,t)}}),e.ke=e.ke||[],e.ke.push(function(){e.MakePicture=function(t){t=new Uint8Array(t);var n=e._malloc(t.byteLength);return e.HEAPU8.set(t,n),(t=e._MakePicture(n,t.byteLength))?t:null}}),e.ke=e.ke||[],e.ke.push(function(){e.RuntimeEffect.Make=function(t,n){return e.RuntimeEffect._Make(t,{onError:n||function(e){console.log(`RuntimeEffect error`,e)}})},e.RuntimeEffect.MakeForBlender=function(t,n){return e.RuntimeEffect._MakeForBlender(t,{onError:n||function(e){console.log(`RuntimeEffect error`,e)}})},e.RuntimeEffect.prototype.makeShader=function(e,t){var n=!e._ck,r=u(e,`HEAPF32`);return t=f(t),this._makeShader(r,4*e.length,n,t)},e.RuntimeEffect.prototype.makeShaderWithChildren=function(e,t,n){var r=!e._ck,i=u(e,`HEAPF32`);n=f(n);for(var a=[],o=0;o<t.length;o++)a.push(t[o].ae.ie);return t=u(a,`HEAPU32`),this._makeShaderWithChildren(i,4*e.length,r,t,a.length,n)},e.RuntimeEffect.prototype.makeBlender=function(e){var t=!e._ck,n=u(e,`HEAPF32`);return this._makeBlender(n,4*e.length,t)}}),(function(){function t(e){for(var t=0;t<e.length;t++)if(e[t]!==void 0&&!Number.isFinite(e[t]))return!1;return!0}function n(t){var n=e.getColorComponents(t);t=n[0];var r=n[1],i=n[2];return n=n[3],n===1?(t=t.toString(16).toLowerCase(),r=r.toString(16).toLowerCase(),i=i.toString(16).toLowerCase(),t=t.length===1?`0`+t:t,r=r.length===1?`0`+r:r,i=i.length===1?`0`+i:i,`#`+t+r+i):(n=n===0||n===1?n:n.toFixed(8),`rgba(`+t+`, `+r+`, `+i+`, `+n+`)`)}function r(t){return e.parseColorString(t,b)}function a(e){if(e=x.exec(e),!e)return null;var t=parseFloat(e[4]),n=16;switch(e[5]){case`em`:case`rem`:n=16*t;break;case`pt`:n=4*t/3;break;case`px`:n=t;break;case`pc`:n=16*t;break;case`in`:n=96*t;break;case`cm`:n=96*t/2.54;break;case`mm`:n=96/25.4*t;break;case`q`:n=96/25.4/4*t;break;case`%`:n=16/75*t}return{style:e[1],variant:e[2],weight:e[3],sizePx:n,family:e[6].trim()}}function o(){S||={"Noto Mono":{"*":e.Typeface.GetDefault()},monospace:{"*":e.Typeface.GetDefault()}}}function s(s){this.ce=s,this.fe=new e.Paint,this.fe.setAntiAlias(!0),this.fe.setStrokeMiter(10),this.fe.setStrokeCap(e.StrokeCap.Butt),this.fe.setStrokeJoin(e.StrokeJoin.Miter),this.kf=`10px monospace`,this.Fe=new e.Font(e.Typeface.GetDefault(),10),this.Fe.setSubpixel(!0),this.se=this.ye=e.BLACK,this.Oe=0,this.af=e.TRANSPARENT,this.Qe=this.Pe=0,this.bf=this.Be=1,this.$e=0,this.Ne=[],this.ee=e.BlendMode.SrcOver,this.fe.setStrokeWidth(this.bf),this.fe.setBlendMode(this.ee),this.he=new e.Path,this.je=e.Matrix.identity(),this.Ff=[],this.Ue=[],this.Ee=function(){this.he.delete(),this.fe.delete(),this.Fe.delete(),this.Ue.forEach(function(e){e.Ee()})},Object.defineProperty(this,`currentTransform`,{enumerable:!0,get:function(){return{a:this.je[0],c:this.je[1],e:this.je[2],b:this.je[3],d:this.je[4],f:this.je[5]}},set:function(e){e.a&&this.setTransform(e.a,e.b,e.c,e.d,e.e,e.f)}}),Object.defineProperty(this,`fillStyle`,{enumerable:!0,get:function(){return i(this.se)?n(this.se):this.se},set:function(e){typeof e==`string`?this.se=r(e):e.Me&&(this.se=e)}}),Object.defineProperty(this,`font`,{enumerable:!0,get:function(){return this.kf},set:function(t){var n=a(t),r=(n.style||`normal`)+`|`+(n.variant||`normal`)+`|`+(n.weight||`normal`),i=n.family;o(),r=S[i]?S[i][r]||S[i][`*`]:e.Typeface.GetDefault(),n.typeface=r,n&&(this.Fe.setSize(n.sizePx),this.Fe.setTypeface(n.typeface),this.kf=t)}}),Object.defineProperty(this,`globalAlpha`,{enumerable:!0,get:function(){return this.Be},set:function(e){!isFinite(e)||0>e||1<e||(this.Be=e)}}),Object.defineProperty(this,`globalCompositeOperation`,{enumerable:!0,get:function(){switch(this.ee){case e.BlendMode.SrcOver:return`source-over`;case e.BlendMode.DstOver:return`destination-over`;case e.BlendMode.Src:return`copy`;case e.BlendMode.Dst:return`destination`;case e.BlendMode.Clear:return`clear`;case e.BlendMode.SrcIn:return`source-in`;case e.BlendMode.DstIn:return`destination-in`;case e.BlendMode.SrcOut:return`source-out`;case e.BlendMode.DstOut:return`destination-out`;case e.BlendMode.SrcATop:return`source-atop`;case e.BlendMode.DstATop:return`destination-atop`;case e.BlendMode.Xor:return`xor`;case e.BlendMode.Plus:return`lighter`;case e.BlendMode.Multiply:return`multiply`;case e.BlendMode.Screen:return`screen`;case e.BlendMode.Overlay:return`overlay`;case e.BlendMode.Darken:return`darken`;case e.BlendMode.Lighten:return`lighten`;case e.BlendMode.ColorDodge:return`color-dodge`;case e.BlendMode.ColorBurn:return`color-burn`;case e.BlendMode.HardLight:return`hard-light`;case e.BlendMode.SoftLight:return`soft-light`;case e.BlendMode.Difference:return`difference`;case e.BlendMode.Exclusion:return`exclusion`;case e.BlendMode.Hue:return`hue`;case e.BlendMode.Saturation:return`saturation`;case e.BlendMode.Color:return`color`;case e.BlendMode.Luminosity:return`luminosity`}},set:function(t){switch(t){case`source-over`:this.ee=e.BlendMode.SrcOver;break;case`destination-over`:this.ee=e.BlendMode.DstOver;break;case`copy`:this.ee=e.BlendMode.Src;break;case`destination`:this.ee=e.BlendMode.Dst;break;case`clear`:this.ee=e.BlendMode.Clear;break;case`source-in`:this.ee=e.BlendMode.SrcIn;break;case`destination-in`:this.ee=e.BlendMode.DstIn;break;case`source-out`:this.ee=e.BlendMode.SrcOut;break;case`destination-out`:this.ee=e.BlendMode.DstOut;break;case`source-atop`:this.ee=e.BlendMode.SrcATop;break;case`destination-atop`:this.ee=e.BlendMode.DstATop;break;case`xor`:this.ee=e.BlendMode.Xor;break;case`lighter`:this.ee=e.BlendMode.Plus;break;case`plus-lighter`:this.ee=e.BlendMode.Plus;break;case`plus-darker`:throw`plus-darker is not supported`;case`multiply`:this.ee=e.BlendMode.Multiply;break;case`screen`:this.ee=e.BlendMode.Screen;break;case`overlay`:this.ee=e.BlendMode.Overlay;break;case`darken`:this.ee=e.BlendMode.Darken;break;case`lighten`:this.ee=e.BlendMode.Lighten;break;case`color-dodge`:this.ee=e.BlendMode.ColorDodge;break;case`color-burn`:this.ee=e.BlendMode.ColorBurn;break;case`hard-light`:this.ee=e.BlendMode.HardLight;break;case`soft-light`:this.ee=e.BlendMode.SoftLight;break;case`difference`:this.ee=e.BlendMode.Difference;break;case`exclusion`:this.ee=e.BlendMode.Exclusion;break;case`hue`:this.ee=e.BlendMode.Hue;break;case`saturation`:this.ee=e.BlendMode.Saturation;break;case`color`:this.ee=e.BlendMode.Color;break;case`luminosity`:this.ee=e.BlendMode.Luminosity;break;default:return}this.fe.setBlendMode(this.ee)}}),Object.defineProperty(this,`imageSmoothingEnabled`,{enumerable:!0,get:function(){return!0},set:function(){}}),Object.defineProperty(this,`imageSmoothingQuality`,{enumerable:!0,get:function(){return`high`},set:function(){}}),Object.defineProperty(this,`lineCap`,{enumerable:!0,get:function(){switch(this.fe.getStrokeCap()){case e.StrokeCap.Butt:return`butt`;case e.StrokeCap.Round:return`round`;case e.StrokeCap.Square:return`square`}},set:function(t){switch(t){case`butt`:this.fe.setStrokeCap(e.StrokeCap.Butt);break;case`round`:this.fe.setStrokeCap(e.StrokeCap.Round);break;case`square`:this.fe.setStrokeCap(e.StrokeCap.Square)}}}),Object.defineProperty(this,`lineDashOffset`,{enumerable:!0,get:function(){return this.$e},set:function(e){isFinite(e)&&(this.$e=e)}}),Object.defineProperty(this,`lineJoin`,{enumerable:!0,get:function(){switch(this.fe.getStrokeJoin()){case e.StrokeJoin.Miter:return`miter`;case e.StrokeJoin.Round:return`round`;case e.StrokeJoin.Bevel:return`bevel`}},set:function(t){switch(t){case`miter`:this.fe.setStrokeJoin(e.StrokeJoin.Miter);break;case`round`:this.fe.setStrokeJoin(e.StrokeJoin.Round);break;case`bevel`:this.fe.setStrokeJoin(e.StrokeJoin.Bevel)}}}),Object.defineProperty(this,`lineWidth`,{enumerable:!0,get:function(){return this.fe.getStrokeWidth()},set:function(e){0>=e||!e||(this.bf=e,this.fe.setStrokeWidth(e))}}),Object.defineProperty(this,`miterLimit`,{enumerable:!0,get:function(){return this.fe.getStrokeMiter()},set:function(e){0>=e||!e||this.fe.setStrokeMiter(e)}}),Object.defineProperty(this,`shadowBlur`,{enumerable:!0,get:function(){return this.Oe},set:function(e){0>e||!isFinite(e)||(this.Oe=e)}}),Object.defineProperty(this,`shadowColor`,{enumerable:!0,get:function(){return n(this.af)},set:function(e){this.af=r(e)}}),Object.defineProperty(this,`shadowOffsetX`,{enumerable:!0,get:function(){return this.Pe},set:function(e){isFinite(e)&&(this.Pe=e)}}),Object.defineProperty(this,`shadowOffsetY`,{enumerable:!0,get:function(){return this.Qe},set:function(e){isFinite(e)&&(this.Qe=e)}}),Object.defineProperty(this,`strokeStyle`,{enumerable:!0,get:function(){return n(this.ye)},set:function(e){typeof e==`string`?this.ye=r(e):e.Me&&(this.ye=e)}}),this.arc=function(e,t,n,r,i,a){h(this.he,e,t,n,n,0,r,i,a)},this.arcTo=function(e,t,n,r,i){f(this.he,e,t,n,r,i)},this.beginPath=function(){this.he.delete(),this.he=new e.Path},this.bezierCurveTo=function(e,n,r,i,a,o){var s=this.he;t([e,n,r,i,a,o])&&(s.isEmpty()&&s.moveTo(e,n),s.cubicTo(e,n,r,i,a,o))},this.clearRect=function(t,n,r,i){this.fe.setStyle(e.PaintStyle.Fill),this.fe.setBlendMode(e.BlendMode.Clear),this.ce.drawRect(e.XYWHRect(t,n,r,i),this.fe),this.fe.setBlendMode(this.ee)},this.clip=function(t,n){typeof t==`string`?(n=t,t=this.he):t&&t.vf&&(t=t.le),t||=this.he,t=t.copy(),n&&n.toLowerCase()===`evenodd`?t.setFillType(e.FillType.EvenOdd):t.setFillType(e.FillType.Winding),this.ce.clipPath(t,e.ClipOp.Intersect,!0),t.delete()},this.closePath=function(){p(this.he)},this.createImageData=function(){if(arguments.length===1){var e=arguments[0];return new u(new Uint8ClampedArray(4*e.width*e.height),e.width,e.height)}if(arguments.length===2){e=arguments[0];var t=arguments[1];return new u(new Uint8ClampedArray(4*e*t),e,t)}throw`createImageData expects 1 or 2 arguments, got `+arguments.length},this.createLinearGradient=function(e,n,r,i){if(t(arguments)){var a=new d(e,n,r,i);return this.Ue.push(a),a}},this.createPattern=function(e,t){return e=new v(e,t),this.Ue.push(e),e},this.createRadialGradient=function(e,n,r,i,a,o){if(t(arguments)){var s=new y(e,n,r,i,a,o);return this.Ue.push(s),s}},this.drawImage=function(t){t instanceof l&&(t=t.Lf());var n=this.jf();if(arguments.length===3||arguments.length===5)var r=e.XYWHRect(arguments[1],arguments[2],arguments[3]||t.width(),arguments[4]||t.height()),i=e.XYWHRect(0,0,t.width(),t.height());else if(arguments.length===9)r=e.XYWHRect(arguments[5],arguments[6],arguments[7],arguments[8]),i=e.XYWHRect(arguments[1],arguments[2],arguments[3],arguments[4]);else throw`invalid number of args for drawImage, need 3, 5, or 9; got `+arguments.length;this.ce.drawImageRect(t,i,r,n,!1),n.dispose()},this.ellipse=function(e,t,n,r,i,a,o,s){h(this.he,e,t,n,r,i,a,o,s)},this.jf=function(){var t=this.fe.copy();if(t.setStyle(e.PaintStyle.Fill),i(this.se)){var n=e.multiplyByAlpha(this.se,this.Be);t.setColor(n)}else n=this.se.Me(this.je),t.setColor(e.Color(0,0,0,this.Be)),t.setShader(n);return t.dispose=function(){this.delete()},t},this.fill=function(t,n){if(typeof t==`string`?(n=t,t=this.he):t&&t.vf&&(t=t.le),n===`evenodd`)this.he.setFillType(e.FillType.EvenOdd);else{if(n!==`nonzero`&&n)throw`invalid fill rule`;this.he.setFillType(e.FillType.Winding)}t||=this.he,n=this.jf();var r=this.Re(n);r&&(this.ce.save(),this.Ke(),this.ce.drawPath(t,r),this.ce.restore(),r.dispose()),this.ce.drawPath(t,n),n.dispose()},this.fillRect=function(t,n,r,i){var a=this.jf(),o=this.Re(a);o&&(this.ce.save(),this.Ke(),this.ce.drawRect(e.XYWHRect(t,n,r,i),o),this.ce.restore(),o.dispose()),this.ce.drawRect(e.XYWHRect(t,n,r,i),a),a.dispose()},this.fillText=function(t,n,r){var i=this.jf();t=e.TextBlob.MakeFromText(t,this.Fe);var a=this.Re(i);a&&(this.ce.save(),this.Ke(),this.ce.drawTextBlob(t,n,r,a),this.ce.restore(),a.dispose()),this.ce.drawTextBlob(t,n,r,i),t.delete(),i.dispose()},this.getImageData=function(t,n,r,i){return(t=this.ce.readPixels(t,n,{width:r,height:i,colorType:e.ColorType.RGBA_8888,alphaType:e.AlphaType.Unpremul,colorSpace:e.ColorSpace.SRGB}))?new u(new Uint8ClampedArray(t.buffer),r,i):null},this.getLineDash=function(){return this.Ne.slice()},this.Gf=function(t){var n=e.Matrix.invert(this.je);return e.Matrix.mapPoints(n,t),t},this.isPointInPath=function(t,n,r){var i=arguments;if(i.length===3)var a=this.he;else if(i.length===4)a=i[0],t=i[1],n=i[2],r=i[3];else throw`invalid arg count, need 3 or 4, got `+i.length;return!isFinite(t)||!isFinite(n)||(r||=`nonzero`,r!==`nonzero`&&r!==`evenodd`)?!1:(i=this.Gf([t,n]),t=i[0],n=i[1],a.setFillType(r===`nonzero`?e.FillType.Winding:e.FillType.EvenOdd),a.contains(t,n))},this.isPointInStroke=function(t,n){var r=arguments;if(r.length===2)var i=this.he;else if(r.length===3)i=r[0],t=r[1],n=r[2];else throw`invalid arg count, need 2 or 3, got `+r.length;return!isFinite(t)||!isFinite(n)?!1:(r=this.Gf([t,n]),t=r[0],n=r[1],i=i.copy(),i.setFillType(e.FillType.Winding),i.stroke({width:this.lineWidth,miter_limit:this.miterLimit,cap:this.fe.getStrokeCap(),join:this.fe.getStrokeJoin(),precision:.3}),r=i.contains(t,n),i.delete(),r)},this.lineTo=function(e,t){g(this.he,e,t)},this.measureText=function(e){e=this.Fe.getGlyphIDs(e),e=this.Fe.getGlyphWidths(e);let t=0;for(let n of e)t+=n;return{width:t}},this.moveTo=function(e,n){var r=this.he;t([e,n])&&r.moveTo(e,n)},this.putImageData=function(n,r,i,a,o,s,c){if(t([r,i,a,o,s,c])){if(a===void 0)this.ce.writePixels(n.data,n.width,n.height,r,i);else if(a||=0,o||=0,s||=n.width,c||=n.height,0>s&&(a+=s,s=Math.abs(s)),0>c&&(o+=c,c=Math.abs(c)),0>a&&(s+=a,a=0),0>o&&(c+=o,o=0),!(0>=s||0>=c)){n=e.MakeImage({width:n.width,height:n.height,alphaType:e.AlphaType.Unpremul,colorType:e.ColorType.RGBA_8888,colorSpace:e.ColorSpace.SRGB},n.data,4*n.width);var l=e.XYWHRect(a,o,s,c);r=e.XYWHRect(r+a,i+o,s,c),i=e.Matrix.invert(this.je),this.ce.save(),this.ce.concat(i),this.ce.drawImageRect(n,l,r,null,!1),this.ce.restore(),n.delete()}}},this.quadraticCurveTo=function(e,n,r,i){var a=this.he;t([e,n,r,i])&&(a.isEmpty()&&a.moveTo(e,n),a.quadTo(e,n,r,i))},this.rect=function(n,r,i,a){var o=this.he;n=e.XYWHRect(n,r,i,a),t(n)&&o.addRect(n)},this.resetTransform=function(){this.he.transform(this.je);var t=e.Matrix.invert(this.je);this.ce.concat(t),this.je=this.ce.getTotalMatrix()},this.restore=function(){var t=this.Ff.pop();if(t){var n=e.Matrix.multiply(this.je,e.Matrix.invert(t.ag));this.he.transform(n),this.fe.delete(),this.fe=t.sg,this.Ne=t.qg,this.bf=t.Eg,this.ye=t.Dg,this.se=t.fs,this.Pe=t.Bg,this.Qe=t.Cg,this.Oe=t.sb,this.af=t.Ag,this.Be=t.ga,this.ee=t.hg,this.$e=t.rg,this.kf=t.gg,this.ce.restore(),this.je=this.ce.getTotalMatrix()}},this.rotate=function(t){if(isFinite(t)){var n=e.Matrix.rotated(-t);this.he.transform(n),this.ce.rotate(t/Math.PI*180,0,0),this.je=this.ce.getTotalMatrix()}},this.save=function(){if(this.se.Le){var e=this.se.Le();this.Ue.push(e)}else e=this.se;if(this.ye.Le){var t=this.ye.Le();this.Ue.push(t)}else t=this.ye;this.Ff.push({ag:this.je.slice(),qg:this.Ne.slice(),Eg:this.bf,Dg:t,fs:e,Bg:this.Pe,Cg:this.Qe,sb:this.Oe,Ag:this.af,ga:this.Be,rg:this.$e,hg:this.ee,sg:this.fe.copy(),gg:this.kf}),this.ce.save()},this.scale=function(n,r){if(t(arguments)){var i=e.Matrix.scaled(1/n,1/r);this.he.transform(i),this.ce.scale(n,r),this.je=this.ce.getTotalMatrix()}},this.setLineDash=function(e){for(var t=0;t<e.length;t++)if(!isFinite(e[t])||0>e[t])return;e.length%2==1&&Array.prototype.push.apply(e,e),this.Ne=e},this.setTransform=function(e,n,r,i,a,o){t(arguments)&&(this.resetTransform(),this.transform(e,n,r,i,a,o))},this.Ke=function(){var t=e.Matrix.invert(this.je);this.ce.concat(t),this.ce.concat(e.Matrix.translated(this.Pe,this.Qe)),this.ce.concat(this.je)},this.Re=function(t){var n=e.multiplyByAlpha(this.af,this.Be);if(!e.getColorComponents(n)[3]||!(this.Oe||this.Qe||this.Pe))return null;t=t.copy(),t.setColor(n);var r=e.MaskFilter.MakeBlur(e.BlurStyle.Normal,this.Oe/2,!1);return t.setMaskFilter(r),t.dispose=function(){r.delete(),this.delete()},t},this.xf=function(){var t=this.fe.copy();if(t.setStyle(e.PaintStyle.Stroke),i(this.ye)){var n=e.multiplyByAlpha(this.ye,this.Be);t.setColor(n)}else n=this.ye.Me(this.je),t.setColor(e.Color(0,0,0,this.Be)),t.setShader(n);if(t.setStrokeWidth(this.bf),this.Ne.length){var r=e.PathEffect.MakeDash(this.Ne,this.$e);t.setPathEffect(r)}return t.dispose=function(){r&&r.delete(),this.delete()},t},this.stroke=function(e){e=e?e.le:this.he;var t=this.xf(),n=this.Re(t);n&&(this.ce.save(),this.Ke(),this.ce.drawPath(e,n),this.ce.restore(),n.dispose()),this.ce.drawPath(e,t),t.dispose()},this.strokeRect=function(t,n,r,i){var a=this.xf(),o=this.Re(a);o&&(this.ce.save(),this.Ke(),this.ce.drawRect(e.XYWHRect(t,n,r,i),o),this.ce.restore(),o.dispose()),this.ce.drawRect(e.XYWHRect(t,n,r,i),a),a.dispose()},this.strokeText=function(t,n,r){var i=this.xf();t=e.TextBlob.MakeFromText(t,this.Fe);var a=this.Re(i);a&&(this.ce.save(),this.Ke(),this.ce.drawTextBlob(t,n,r,a),this.ce.restore(),a.dispose()),this.ce.drawTextBlob(t,n,r,i),t.delete(),i.dispose()},this.translate=function(n,r){if(t(arguments)){var i=e.Matrix.translated(-n,-r);this.he.transform(i),this.ce.translate(n,r),this.je=this.ce.getTotalMatrix()}},this.transform=function(t,n,r,i,a,o){t=[t,r,a,n,i,o,0,0,1],n=e.Matrix.invert(t),this.he.transform(n),this.ce.concat(t),this.je=this.ce.getTotalMatrix()},this.addHitRegion=function(){},this.clearHitRegions=function(){},this.drawFocusIfNeeded=function(){},this.removeHitRegion=function(){},this.scrollPathIntoView=function(){},Object.defineProperty(this,`canvas`,{value:null,writable:!1})}function c(t){this.yf=t,this.be=new s(t.getCanvas()),this.lf=[],this.decodeImage=function(t){if(t=e.MakeImageFromEncoded(t),!t)throw`Invalid input`;return this.lf.push(t),new l(t)},this.loadFont=function(t,n){if(t=e.Typeface.MakeTypefaceFromData(t),!t)return null;this.lf.push(t);var r=(n.style||`normal`)+`|`+(n.variant||`normal`)+`|`+(n.weight||`normal`);n=n.family,o(),S[n]||(S[n]={"*":t}),S[n][r]=t},this.makePath2D=function(e){return e=new _(e),this.lf.push(e.le),e},this.getContext=function(e){return e===`2d`?this.be:null},this.toDataURL=function(t,n){this.yf.flush();var r=this.yf.makeImageSnapshot();if(r){t||=`image/png`;var i=e.ImageFormat.PNG;if(t===`image/jpeg`&&(i=e.ImageFormat.JPEG),n=r.encodeToBytes(i,n||.92)){if(r.delete(),t=`data:`+t+`;base64,`,typeof Buffer<`u`)n=Buffer.from(n).toString(`base64`);else{r=0,i=n.length;for(var a=``,o;r<i;)o=n.slice(r,Math.min(r+32768,i)),a+=String.fromCharCode.apply(null,o),r+=32768;n=btoa(a)}return t+n}}},this.dispose=function(){this.be.Ee(),this.lf.forEach(function(e){e.delete()}),this.yf.dispose()}}function l(e){this.width=e.width(),this.height=e.height(),this.naturalWidth=this.width,this.naturalHeight=this.height,this.Lf=function(){return e}}function u(e,t,n){if(!t||n===0)throw TypeError(`invalid dimensions, width and height must be non-zero`);if(e.length%4)throw TypeError(`arr must be a multiple of 4`);n||=e.length/(4*t),Object.defineProperty(this,`data`,{value:e,writable:!1}),Object.defineProperty(this,`height`,{value:n,writable:!1}),Object.defineProperty(this,`width`,{value:t,writable:!1})}function d(t,n,i,a){this.ne=null,this.ue=[],this.qe=[],this.addColorStop=function(e,t){if(0>e||1<e||!isFinite(e))throw`offset must be between 0 and 1 inclusively`;t=r(t);var n=this.qe.indexOf(e);if(n!==-1)this.ue[n]=t;else{for(n=0;n<this.qe.length&&!(this.qe[n]>e);n++);this.qe.splice(n,0,e),this.ue.splice(n,0,t)}},this.Le=function(){var e=new d(t,n,i,a);return e.ue=this.ue.slice(),e.qe=this.qe.slice(),e},this.Ee=function(){this.ne&&=(this.ne.delete(),null)},this.Me=function(r){var o=[t,n,i,a];e.Matrix.mapPoints(r,o),r=o[0];var s=o[1],c=o[2];return o=o[3],this.Ee(),this.ne=e.Shader.MakeLinearGradient([r,s],[c,o],this.ue,this.qe,e.TileMode.Clamp)}}function f(e,n,r,i,a,o){if(t([n,r,i,a,o])){if(0>o)throw`radii cannot be negative`;e.isEmpty()&&e.moveTo(n,r),e.arcToTangent(n,r,i,a,o)}}function p(e){if(!e.isEmpty()){var t=e.getBounds();(t[3]-t[1]||t[2]-t[0])&&e.close()}}function m(t,n,r,i,a,o,s){s=(s-o)/Math.PI*180,o=o/Math.PI*180,n=e.LTRBRect(n-i,r-a,n+i,r+a),1e-5>Math.abs(Math.abs(s)-360)?(r=s/2,t.arcToOval(n,o,r,!1),t.arcToOval(n,o+r,r,!1)):t.arcToOval(n,o,s,!1)}function h(n,r,i,a,o,s,c,l,u){if(t([r,i,a,o,s,c,l])){if(0>a||0>o)throw`radii cannot be negative`;var d=2*Math.PI,f=c%d;0>f&&(f+=d);var p=f-c;c=f,l+=p,!u&&l-c>=d?l=c+d:u&&c-l>=d?l=c-d:!u&&c>l?l=c+(d-(c-l)%d):u&&c<l&&(l=c-(d-(l-c)%d)),s?(u=e.Matrix.rotated(s,r,i),s=e.Matrix.rotated(-s,r,i),n.transform(s),m(n,r,i,a,o,c,l),n.transform(u)):m(n,r,i,a,o,c,l)}}function g(e,n,r){t([n,r])&&(e.isEmpty()&&e.moveTo(n,r),e.lineTo(n,r))}function _(n){this.le=null,this.le=typeof n==`string`?e.Path.MakeFromSVGString(n):n&&n.vf?n.le.copy():new e.Path,this.vf=function(){return this.le},this.addPath=function(e,t){t||={a:1,c:0,e:0,b:0,d:1,f:0},this.le.addPath(e.le,[t.a,t.c,t.e,t.b,t.d,t.f])},this.arc=function(e,t,n,r,i,a){h(this.le,e,t,n,n,0,r,i,a)},this.arcTo=function(e,t,n,r,i){f(this.le,e,t,n,r,i)},this.bezierCurveTo=function(e,n,r,i,a,o){var s=this.le;t([e,n,r,i,a,o])&&(s.isEmpty()&&s.moveTo(e,n),s.cubicTo(e,n,r,i,a,o))},this.closePath=function(){p(this.le)},this.ellipse=function(e,t,n,r,i,a,o,s){h(this.le,e,t,n,r,i,a,o,s)},this.lineTo=function(e,t){g(this.le,e,t)},this.moveTo=function(e,n){var r=this.le;t([e,n])&&r.moveTo(e,n)},this.quadraticCurveTo=function(e,n,r,i){var a=this.le;t([e,n,r,i])&&(a.isEmpty()&&a.moveTo(e,n),a.quadTo(e,n,r,i))},this.rect=function(n,r,i,a){var o=this.le;n=e.XYWHRect(n,r,i,a),t(n)&&o.addRect(n)}}function v(n,r){switch(this.ne=null,n instanceof l&&(n=n.Lf()),this.Uf=n,this._transform=e.Matrix.identity(),r===``&&(r=`repeat`),r){case`repeat-x`:this.Se=e.TileMode.Repeat,this.Te=e.TileMode.Decal;break;case`repeat-y`:this.Se=e.TileMode.Decal,this.Te=e.TileMode.Repeat;break;case`repeat`:this.Te=this.Se=e.TileMode.Repeat;break;case`no-repeat`:this.Te=this.Se=e.TileMode.Decal;break;default:throw`invalid repetition mode `+r}this.setTransform=function(e){e=[e.a,e.c,e.e,e.b,e.d,e.f,0,0,1],t(e)&&(this._transform=e)},this.Le=function(){var e=new v;return e.Se=this.Se,e.Te=this.Te,e},this.Ee=function(){this.ne&&=(this.ne.delete(),null)},this.Me=function(){return this.Ee(),this.ne=this.Uf.makeShaderCubic(this.Se,this.Te,1/3,1/3,this._transform)}}function y(t,n,i,a,o,s){this.ne=null,this.ue=[],this.qe=[],this.addColorStop=function(e,t){if(0>e||1<e||!isFinite(e))throw`offset must be between 0 and 1 inclusively`;t=r(t);var n=this.qe.indexOf(e);if(n!==-1)this.ue[n]=t;else{for(n=0;n<this.qe.length&&!(this.qe[n]>e);n++);this.qe.splice(n,0,e),this.ue.splice(n,0,t)}},this.Le=function(){var e=new y(t,n,i,a,o,s);return e.ue=this.ue.slice(),e.qe=this.qe.slice(),e},this.Ee=function(){this.ne&&=(this.ne.delete(),null)},this.Me=function(r){var c=[t,n,a,o];e.Matrix.mapPoints(r,c);var l=c[0],u=c[1],d=c[2];c=c[3];var f=(Math.abs(r[0])+Math.abs(r[4]))/2;return r=i*f,f*=s,this.Ee(),this.ne=e.Shader.MakeTwoPointConicalGradient([l,u],r,[d,c],f,this.ue,this.qe,e.TileMode.Clamp)}}e._testing={};var b={aliceblue:Float32Array.of(.941,.973,1,1),antiquewhite:Float32Array.of(.98,.922,.843,1),aqua:Float32Array.of(0,1,1,1),aquamarine:Float32Array.of(.498,1,.831,1),azure:Float32Array.of(.941,1,1,1),beige:Float32Array.of(.961,.961,.863,1),bisque:Float32Array.of(1,.894,.769,1),black:Float32Array.of(0,0,0,1),blanchedalmond:Float32Array.of(1,.922,.804,1),blue:Float32Array.of(0,0,1,1),blueviolet:Float32Array.of(.541,.169,.886,1),brown:Float32Array.of(.647,.165,.165,1),burlywood:Float32Array.of(.871,.722,.529,1),cadetblue:Float32Array.of(.373,.62,.627,1),chartreuse:Float32Array.of(.498,1,0,1),chocolate:Float32Array.of(.824,.412,.118,1),coral:Float32Array.of(1,.498,.314,1),cornflowerblue:Float32Array.of(.392,.584,.929,1),cornsilk:Float32Array.of(1,.973,.863,1),crimson:Float32Array.of(.863,.078,.235,1),cyan:Float32Array.of(0,1,1,1),darkblue:Float32Array.of(0,0,.545,1),darkcyan:Float32Array.of(0,.545,.545,1),darkgoldenrod:Float32Array.of(.722,.525,.043,1),darkgray:Float32Array.of(.663,.663,.663,1),darkgreen:Float32Array.of(0,.392,0,1),darkgrey:Float32Array.of(.663,.663,.663,1),darkkhaki:Float32Array.of(.741,.718,.42,1),darkmagenta:Float32Array.of(.545,0,.545,1),darkolivegreen:Float32Array.of(.333,.42,.184,1),darkorange:Float32Array.of(1,.549,0,1),darkorchid:Float32Array.of(.6,.196,.8,1),darkred:Float32Array.of(.545,0,0,1),darksalmon:Float32Array.of(.914,.588,.478,1),darkseagreen:Float32Array.of(.561,.737,.561,1),darkslateblue:Float32Array.of(.282,.239,.545,1),darkslategray:Float32Array.of(.184,.31,.31,1),darkslategrey:Float32Array.of(.184,.31,.31,1),darkturquoise:Float32Array.of(0,.808,.82,1),darkviolet:Float32Array.of(.58,0,.827,1),deeppink:Float32Array.of(1,.078,.576,1),deepskyblue:Float32Array.of(0,.749,1,1),dimgray:Float32Array.of(.412,.412,.412,1),dimgrey:Float32Array.of(.412,.412,.412,1),dodgerblue:Float32Array.of(.118,.565,1,1),firebrick:Float32Array.of(.698,.133,.133,1),floralwhite:Float32Array.of(1,.98,.941,1),forestgreen:Float32Array.of(.133,.545,.133,1),fuchsia:Float32Array.of(1,0,1,1),gainsboro:Float32Array.of(.863,.863,.863,1),ghostwhite:Float32Array.of(.973,.973,1,1),gold:Float32Array.of(1,.843,0,1),goldenrod:Float32Array.of(.855,.647,.125,1),gray:Float32Array.of(.502,.502,.502,1),green:Float32Array.of(0,.502,0,1),greenyellow:Float32Array.of(.678,1,.184,1),grey:Float32Array.of(.502,.502,.502,1),honeydew:Float32Array.of(.941,1,.941,1),hotpink:Float32Array.of(1,.412,.706,1),indianred:Float32Array.of(.804,.361,.361,1),indigo:Float32Array.of(.294,0,.51,1),ivory:Float32Array.of(1,1,.941,1),khaki:Float32Array.of(.941,.902,.549,1),lavender:Float32Array.of(.902,.902,.98,1),lavenderblush:Float32Array.of(1,.941,.961,1),lawngreen:Float32Array.of(.486,.988,0,1),lemonchiffon:Float32Array.of(1,.98,.804,1),lightblue:Float32Array.of(.678,.847,.902,1),lightcoral:Float32Array.of(.941,.502,.502,1),lightcyan:Float32Array.of(.878,1,1,1),lightgoldenrodyellow:Float32Array.of(.98,.98,.824,1),lightgray:Float32Array.of(.827,.827,.827,1),lightgreen:Float32Array.of(.565,.933,.565,1),lightgrey:Float32Array.of(.827,.827,.827,1),lightpink:Float32Array.of(1,.714,.757,1),lightsalmon:Float32Array.of(1,.627,.478,1),lightseagreen:Float32Array.of(.125,.698,.667,1),lightskyblue:Float32Array.of(.529,.808,.98,1),lightslategray:Float32Array.of(.467,.533,.6,1),lightslategrey:Float32Array.of(.467,.533,.6,1),lightsteelblue:Float32Array.of(.69,.769,.871,1),lightyellow:Float32Array.of(1,1,.878,1),lime:Float32Array.of(0,1,0,1),limegreen:Float32Array.of(.196,.804,.196,1),linen:Float32Array.of(.98,.941,.902,1),magenta:Float32Array.of(1,0,1,1),maroon:Float32Array.of(.502,0,0,1),mediumaquamarine:Float32Array.of(.4,.804,.667,1),mediumblue:Float32Array.of(0,0,.804,1),mediumorchid:Float32Array.of(.729,.333,.827,1),mediumpurple:Float32Array.of(.576,.439,.859,1),mediumseagreen:Float32Array.of(.235,.702,.443,1),mediumslateblue:Float32Array.of(.482,.408,.933,1),mediumspringgreen:Float32Array.of(0,.98,.604,1),mediumturquoise:Float32Array.of(.282,.82,.8,1),mediumvioletred:Float32Array.of(.78,.082,.522,1),midnightblue:Float32Array.of(.098,.098,.439,1),mintcream:Float32Array.of(.961,1,.98,1),mistyrose:Float32Array.of(1,.894,.882,1),moccasin:Float32Array.of(1,.894,.71,1),navajowhite:Float32Array.of(1,.871,.678,1),navy:Float32Array.of(0,0,.502,1),oldlace:Float32Array.of(.992,.961,.902,1),olive:Float32Array.of(.502,.502,0,1),olivedrab:Float32Array.of(.42,.557,.137,1),orange:Float32Array.of(1,.647,0,1),orangered:Float32Array.of(1,.271,0,1),orchid:Float32Array.of(.855,.439,.839,1),palegoldenrod:Float32Array.of(.933,.91,.667,1),palegreen:Float32Array.of(.596,.984,.596,1),paleturquoise:Float32Array.of(.686,.933,.933,1),palevioletred:Float32Array.of(.859,.439,.576,1),papayawhip:Float32Array.of(1,.937,.835,1),peachpuff:Float32Array.of(1,.855,.725,1),peru:Float32Array.of(.804,.522,.247,1),pink:Float32Array.of(1,.753,.796,1),plum:Float32Array.of(.867,.627,.867,1),powderblue:Float32Array.of(.69,.878,.902,1),purple:Float32Array.of(.502,0,.502,1),rebeccapurple:Float32Array.of(.4,.2,.6,1),red:Float32Array.of(1,0,0,1),rosybrown:Float32Array.of(.737,.561,.561,1),royalblue:Float32Array.of(.255,.412,.882,1),saddlebrown:Float32Array.of(.545,.271,.075,1),salmon:Float32Array.of(.98,.502,.447,1),sandybrown:Float32Array.of(.957,.643,.376,1),seagreen:Float32Array.of(.18,.545,.341,1),seashell:Float32Array.of(1,.961,.933,1),sienna:Float32Array.of(.627,.322,.176,1),silver:Float32Array.of(.753,.753,.753,1),skyblue:Float32Array.of(.529,.808,.922,1),slateblue:Float32Array.of(.416,.353,.804,1),slategray:Float32Array.of(.439,.502,.565,1),slategrey:Float32Array.of(.439,.502,.565,1),snow:Float32Array.of(1,.98,.98,1),springgreen:Float32Array.of(0,1,.498,1),steelblue:Float32Array.of(.275,.51,.706,1),tan:Float32Array.of(.824,.706,.549,1),teal:Float32Array.of(0,.502,.502,1),thistle:Float32Array.of(.847,.749,.847,1),tomato:Float32Array.of(1,.388,.278,1),transparent:Float32Array.of(0,0,0,0),turquoise:Float32Array.of(.251,.878,.816,1),violet:Float32Array.of(.933,.51,.933,1),wheat:Float32Array.of(.961,.871,.702,1),white:Float32Array.of(1,1,1,1),whitesmoke:Float32Array.of(.961,.961,.961,1),yellow:Float32Array.of(1,1,0,1),yellowgreen:Float32Array.of(.604,.804,.196,1)};e._testing.parseColor=r,e._testing.colorToString=n;var x=RegExp(`(italic|oblique|normal|)\\s*(small-caps|normal|)\\s*(bold|bolder|lighter|[1-9]00|normal|)\\s*([\\d\\.]+)(px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q)(.+)`),S;e._testing.parseFontString=a,e.MakeCanvas=function(t,n){return(t=e.MakeSurface(t,n))?new c(t):null},e.ImageData=function(){if(arguments.length===2){var e=arguments[0],t=arguments[1];return new u(new Uint8ClampedArray(4*e*t),e,t)}if(arguments.length===3){var n=arguments[0];if(n.prototype.constructor!==Uint8ClampedArray)throw TypeError(`bytes must be given as a Uint8ClampedArray`);if(e=arguments[1],t=arguments[2],n%4)throw TypeError(`bytes must be given in a multiple of 4`);if(n%e)throw TypeError(`bytes must divide evenly by width`);if(t&&t!==n/(4*e))throw TypeError(`invalid height given`);return new u(n,e,n/(4*e))}throw TypeError(`invalid number of arguments - takes 2 or 3, saw `+arguments.length)}})()})(r);var o=Object.assign({},r),s=`./this.program`,c=(e,t)=>{throw t},l=typeof window==`object`,u=typeof importScripts==`function`,d=typeof process==`object`&&typeof process.versions==`object`&&typeof process.versions.node==`string`,f=``,p,m,h;if(d){var g=(gt(),e(_t)),_=(gt(),e(_t));f=u?_.dirname(f)+`/`:__dirname+`/`,p=(e,t)=>(e=e.startsWith(`file://`)?new URL(e):_.normalize(e),g.readFileSync(e,t?void 0:`utf8`)),h=e=>(e=p(e,!0),e.buffer||(e=new Uint8Array(e)),e),m=(e,t,n,r=!0)=>{e=e.startsWith(`file://`)?new URL(e):_.normalize(e),g.readFile(e,r?void 0:`utf8`,(e,i)=>{e?n(e):t(r?i.buffer:i)})},!r.thisProgram&&1<process.argv.length&&(s=process.argv[1].replace(/\\/g,`/`)),process.argv.slice(2),c=(e,t)=>{throw process.exitCode=e,t},r.inspect=()=>`[Emscripten Module object]`}else (l||u)&&(u?f=self.location.href:typeof document<`u`&&document.currentScript&&(f=document.currentScript.src),t&&(f=t),f=f.indexOf(`blob:`)===0?``:f.substr(0,f.replace(/[?#].*/,``).lastIndexOf(`/`)+1),p=e=>{var t=new XMLHttpRequest;return t.open(`GET`,e,!1),t.send(null),t.responseText},u&&(h=e=>{var t=new XMLHttpRequest;return t.open(`GET`,e,!1),t.responseType=`arraybuffer`,t.send(null),new Uint8Array(t.response)}),m=(e,t,n)=>{var r=new XMLHttpRequest;r.open(`GET`,e,!0),r.responseType=`arraybuffer`,r.onload=()=>{r.status==200||r.status==0&&r.response?t(r.response):n()},r.onerror=n,r.send(null)});var v=r.print||console.log.bind(console),y=r.printErr||console.error.bind(console);Object.assign(r,o),o=null,r.thisProgram&&(s=r.thisProgram),r.quit&&(c=r.quit);var b;r.wasmBinary&&(b=r.wasmBinary);var x=r.noExitRuntime||!0;typeof WebAssembly!=`object`&&ie(`no native wasm support detected`);var S,C,w=!1,T,E,D,O,k,A,j,M;function N(){var e=S.buffer;r.HEAP8=T=new Int8Array(e),r.HEAP16=D=new Int16Array(e),r.HEAP32=k=new Int32Array(e),r.HEAPU8=E=new Uint8Array(e),r.HEAPU16=O=new Uint16Array(e),r.HEAPU32=A=new Uint32Array(e),r.HEAPF32=j=new Float32Array(e),r.HEAPF64=M=new Float64Array(e)}var P,F=[],ee=[],te=[];function ne(){var e=r.preRun.shift();F.unshift(e)}var I=0,re=null,L=null;function ie(e){throw r.onAbort&&r.onAbort(e),e=`Aborted(`+e+`)`,y(e),w=!0,e=new WebAssembly.RuntimeError(e+`. Build with -sASSERTIONS for more info.`),a(e),e}function ae(e){return e.startsWith(`data:application/octet-stream;base64,`)}var R=`canvaskit.wasm`;if(!ae(R)){var oe=R;R=r.locateFile?r.locateFile(oe,f):f+oe}function se(e){if(e==R&&b)return new Uint8Array(b);if(h)return h(e);throw`both async and sync fetching of the wasm failed`}function ce(e){if(!b&&(l||u)){if(typeof fetch==`function`&&!e.startsWith(`file://`))return fetch(e,{credentials:`same-origin`}).then(t=>{if(!t.ok)throw`failed to load wasm binary file at '`+e+`'`;return t.arrayBuffer()}).catch(()=>se(e));if(m)return new Promise((t,n)=>{m(e,e=>t(new Uint8Array(e)),n)})}return Promise.resolve().then(()=>se(e))}function le(e,t,n){return ce(e).then(e=>WebAssembly.instantiate(e,t)).then(e=>e).then(n,e=>{y(`failed to asynchronously prepare wasm: `+e),ie(e)})}function ue(e,t){var n=R;return b||typeof WebAssembly.instantiateStreaming!=`function`||ae(n)||n.startsWith(`file://`)||d||typeof fetch!=`function`?le(n,e,t):fetch(n,{credentials:`same-origin`}).then(r=>WebAssembly.instantiateStreaming(r,e).then(t,function(r){return y(`wasm streaming compile failed: `+r),y(`falling back to ArrayBuffer instantiation`),le(n,e,t)}))}function de(e){this.name=`ExitStatus`,this.message=`Program terminated with exit(${e})`,this.status=e}var fe=e=>{for(;0<e.length;)e.shift()(r)},pe=typeof TextDecoder<`u`?new TextDecoder(`utf8`):void 0,me=(e,t,n)=>{var r=t+n;for(n=t;e[n]&&!(n>=r);)++n;if(16<n-t&&e.buffer&&pe)return pe.decode(e.subarray(t,n));for(r=``;t<n;){var i=e[t++];if(i&128){var a=e[t++]&63;if((i&224)==192)r+=String.fromCharCode((i&31)<<6|a);else{var o=e[t++]&63;i=(i&240)==224?(i&15)<<12|a<<6|o:(i&7)<<18|a<<12|o<<6|e[t++]&63,65536>i?r+=String.fromCharCode(i):(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|i&1023))}}else r+=String.fromCharCode(i)}return r},he={};function ge(e){for(;e.length;){var t=e.pop();e.pop()(t)}}function _e(e){return this.fromWireType(k[e>>2])}var ve={},ye={},be={},xe=void 0;function Se(e){throw new xe(e)}function Ce(e,t,n){function r(t){t=n(t),t.length!==e.length&&Se(`Mismatched type converter count`);for(var r=0;r<e.length;++r)ke(e[r],t[r])}e.forEach(function(e){be[e]=t});var i=Array(t.length),a=[],o=0;t.forEach((e,t)=>{ye.hasOwnProperty(e)?i[t]=ye[e]:(a.push(e),ve.hasOwnProperty(e)||(ve[e]=[]),ve[e].push(()=>{i[t]=ye[e],++o,o===a.length&&r(i)}))}),a.length===0&&r(i)}function we(e){switch(e){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw TypeError(`Unknown type size: ${e}`)}}var Te=void 0;function Ee(e){for(var t=``;E[e];)t+=Te[E[e++]];return t}var De=void 0;function z(e){throw new De(e)}function Oe(e,t,n={}){var r=t.name;if(e||z(`type "${r}" must have a positive integer typeid pointer`),ye.hasOwnProperty(e)){if(n.ng)return;z(`Cannot register type '${r}' twice`)}ye[e]=t,delete be[e],ve.hasOwnProperty(e)&&(t=ve[e],delete ve[e],t.forEach(e=>e()))}function ke(e,t,n={}){if(!(`argPackAdvance`in t))throw TypeError(`registerType registeredInstance requires argPackAdvance`);Oe(e,t,n)}function Ae(e){z(e.ae.me.ge.name+` instance already deleted`)}var je=!1;function Me(){}function Ne(e){--e.count.value,e.count.value===0&&(e.pe?e.we.De(e.pe):e.me.ge.De(e.ie))}function Pe(e,t,n){return t===n?e:n.re===void 0?null:(e=Pe(e,t,n.re),e===null?null:n.dg(e))}var Fe={},Ie=[];function Le(){for(;Ie.length;){var e=Ie.pop();e.ae.Xe=!1,e.delete()}}var Re=void 0,ze={};function Be(e,t){for(t===void 0&&z(`ptr should not be undefined`);e.re;)t=e.gf(t),e=e.re;return ze[t]}function Ve(e,t){return t.me&&t.ie||Se(`makeClassHandle requires ptr and ptrType`),!!t.we!=!!t.pe&&Se(`Both smartPtrType and smartPtr must be specified`),t.count={value:1},He(Object.create(e,{ae:{value:t}}))}function He(e){return typeof FinalizationRegistry>`u`?(He=e=>e,e):(je=new FinalizationRegistry(e=>{Ne(e.ae)}),He=e=>{var t=e.ae;return t.pe&&je.register(e,{ae:t},e),e},Me=e=>{je.unregister(e)},He(e))}function Ue(){}function We(e){if(e===void 0)return`_unknown`;e=e.replace(/[^a-zA-Z0-9_]/g,`$`);var t=e.charCodeAt(0);return 48<=t&&57>=t?`_${e}`:e}function Ge(e,t){return e=We(e),{[e]:function(){return t.apply(this,arguments)}}[e]}function Ke(e,t,n){if(e[t].oe===void 0){var r=e[t];e[t]=function(){return e[t].oe.hasOwnProperty(arguments.length)||z(`Function '${n}' called with an invalid number of arguments (${arguments.length}) - expects one of (${e[t].oe})!`),e[t].oe[arguments.length].apply(this,arguments)},e[t].oe=[],e[t].oe[r.Ve]=r}}function qe(e,t,n){r.hasOwnProperty(e)?((n===void 0||r[e].oe!==void 0&&r[e].oe[n]!==void 0)&&z(`Cannot register public name '${e}' twice`),Ke(r,e,e),r.hasOwnProperty(n)&&z(`Cannot register multiple overloads of a function with the same number of arguments (${n})!`),r[e].oe[n]=t):(r[e]=t,n!==void 0&&(r[e].Lg=n))}function Je(e,t,n,r,i,a,o,s){this.name=e,this.constructor=t,this.Ye=n,this.De=r,this.re=i,this.ig=a,this.gf=o,this.dg=s,this.ug=[]}function Ye(e,t,n){for(;t!==n;)t.gf||z(`Expected null or instance of ${n.name}, got an instance of ${t.name}`),e=t.gf(e),t=t.re;return e}function Xe(e,t){return t===null?(this.Bf&&z(`null is not a valid ${this.name}`),0):(t.ae||z(`Cannot pass "${mt(t)}" as a ${this.name}`),t.ae.ie||z(`Cannot pass deleted object as a pointer of type ${this.name}`),Ye(t.ae.ie,t.ae.me.ge,this.ge))}function Ze(e,t){if(t===null){if(this.Bf&&z(`null is not a valid ${this.name}`),this.pf){var n=this.Cf();return e!==null&&e.push(this.De,n),n}return 0}if(t.ae||z(`Cannot pass "${mt(t)}" as a ${this.name}`),t.ae.ie||z(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.nf&&t.ae.me.nf&&z(`Cannot convert argument of type ${t.ae.we?t.ae.we.name:t.ae.me.name} to parameter type ${this.name}`),n=Ye(t.ae.ie,t.ae.me.ge,this.ge),this.pf)switch(t.ae.pe===void 0&&z(`Passing raw pointer to smart pointer is illegal`),this.zg){case 0:t.ae.we===this?n=t.ae.pe:z(`Cannot convert argument of type ${t.ae.we?t.ae.we.name:t.ae.me.name} to parameter type ${this.name}`);break;case 1:n=t.ae.pe;break;case 2:if(t.ae.we===this)n=t.ae.pe;else{var r=t.clone();n=this.vg(n,dt(function(){r.delete()})),e!==null&&e.push(this.De,n)}break;default:z(`Unsupporting sharing policy`)}return n}function Qe(e,t){return t===null?(this.Bf&&z(`null is not a valid ${this.name}`),0):(t.ae||z(`Cannot pass "${mt(t)}" as a ${this.name}`),t.ae.ie||z(`Cannot pass deleted object as a pointer of type ${this.name}`),t.ae.me.nf&&z(`Cannot convert argument of type ${t.ae.me.name} to parameter type ${this.name}`),Ye(t.ae.ie,t.ae.me.ge,this.ge))}function $e(e,t,n,r,i,a,o,s,c,l,u){this.name=e,this.ge=t,this.Bf=n,this.nf=r,this.pf=i,this.tg=a,this.zg=o,this.Nf=s,this.Cf=c,this.vg=l,this.De=u,i||t.re!==void 0?this.toWireType=Ze:(this.toWireType=r?Xe:Qe,this.ve=null)}function B(e,t,n){r.hasOwnProperty(e)||Se(`Replacing nonexistant public symbol`),r[e].oe!==void 0&&n!==void 0?r[e].oe[n]=t:(r[e]=t,r[e].Ve=n)}var et=(e,t)=>{var n=[];return function(){if(n.length=0,Object.assign(n,arguments),e.includes(`j`)){var i=r[`dynCall_`+e];i=n&&n.length?i.apply(null,[t].concat(n)):i.call(null,t)}else i=P.get(t).apply(null,n);return i}};function tt(e,t){e=Ee(e);var n=e.includes(`j`)?et(e,t):P.get(t);return typeof n!=`function`&&z(`unknown function pointer with signature ${e}: ${t}`),n}var nt=void 0;function rt(e){e=Kn(e);var t=Ee(e);return Gn(e),t}function it(e,t){function n(e){i[e]||ye[e]||(be[e]?be[e].forEach(n):(r.push(e),i[e]=!0))}var r=[],i={};throw t.forEach(n),new nt(`${e}: `+r.map(rt).join([`, `]))}function at(e,t,n,r,i){var a=t.length;2>a&&z(`argTypes array size mismatch! Must at least get return value and 'this' types!`);var o=t[1]!==null&&n!==null,s=!1;for(n=1;n<t.length;++n)if(t[n]!==null&&t[n].ve===void 0){s=!0;break}var c=t[0].name!==`void`,l=a-2,u=Array(l),d=[],f=[];return function(){if(arguments.length!==l&&z(`function ${e} called with ${arguments.length} arguments, expected ${l} args!`),f.length=0,d.length=o?2:1,d[0]=i,o){var n=t[1].toWireType(f,this);d[1]=n}for(var a=0;a<l;++a)u[a]=t[a+2].toWireType(f,arguments[a]),d.push(u[a]);if(a=r.apply(null,d),s)ge(f);else for(var p=o?1:2;p<t.length;p++){var m=p===1?n:u[p-2];t[p].ve!==null&&t[p].ve(m)}return n=c?t[0].fromWireType(a):void 0,n}}function ot(e,t){for(var n=[],r=0;r<e;r++)n.push(A[t+4*r>>2]);return n}function st(){this.Ce=[void 0],this.Kf=[]}var ct=new st;function lt(e){e>=ct.df&&--ct.get(e).Of===0&&ct.Zf(e)}var ut=e=>(e||z(`Cannot use deleted val. handle = `+e),ct.get(e).value),dt=e=>{switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return ct.Yf({Of:1,value:e})}};function ft(e,t,n){switch(t){case 0:return function(e){return this.fromWireType((n?T:E)[e])};case 1:return function(e){return this.fromWireType((n?D:O)[e>>1])};case 2:return function(e){return this.fromWireType((n?k:A)[e>>2])};default:throw TypeError(`Unknown integer type: `+e)}}function pt(e,t){var n=ye[e];return n===void 0&&z(t+` has unknown type `+rt(e)),n}function mt(e){if(e===null)return`null`;var t=typeof e;return t===`object`||t===`array`||t===`function`?e.toString():``+e}function ht(e,t){switch(t){case 2:return function(e){return this.fromWireType(j[e>>2])};case 3:return function(e){return this.fromWireType(M[e>>3])};default:throw TypeError(`Unknown float type: `+e)}}function vt(e,t,n){switch(t){case 0:return n?function(e){return T[e]}:function(e){return E[e]};case 1:return n?function(e){return D[e>>1]}:function(e){return O[e>>1]};case 2:return n?function(e){return k[e>>2]}:function(e){return A[e>>2]};default:throw TypeError(`Unknown integer type: `+e)}}var yt=(e,t,n,r)=>{if(!(0<r))return 0;var i=n;r=n+r-1;for(var a=0;a<e.length;++a){var o=e.charCodeAt(a);if(55296<=o&&57343>=o){var s=e.charCodeAt(++a);o=65536+((o&1023)<<10)|s&1023}if(127>=o){if(n>=r)break;t[n++]=o}else{if(2047>=o){if(n+1>=r)break;t[n++]=192|o>>6}else{if(65535>=o){if(n+2>=r)break;t[n++]=224|o>>12}else{if(n+3>=r)break;t[n++]=240|o>>18,t[n++]=128|o>>12&63}t[n++]=128|o>>6&63}t[n++]=128|o&63}}return t[n]=0,n-i},bt=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);127>=r?t++:2047>=r?t+=2:55296<=r&&57343>=r?(t+=4,++n):t+=3}return t},xt=typeof TextDecoder<`u`?new TextDecoder(`utf-16le`):void 0,St=(e,t)=>{for(var n=e>>1,r=n+t/2;!(n>=r)&&O[n];)++n;if(n<<=1,32<n-e&&xt)return xt.decode(E.subarray(e,n));for(n=``,r=0;!(r>=t/2);++r){var i=D[e+2*r>>1];if(i==0)break;n+=String.fromCharCode(i)}return n},Ct=(e,t,n)=>{if(n===void 0&&(n=2147483647),2>n)return 0;n-=2;var r=t;n=n<2*e.length?n/2:e.length;for(var i=0;i<n;++i)D[t>>1]=e.charCodeAt(i),t+=2;return D[t>>1]=0,t-r},wt=e=>2*e.length,Tt=(e,t)=>{for(var n=0,r=``;!(n>=t/4);){var i=k[e+4*n>>2];if(i==0)break;++n,65536<=i?(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|i&1023)):r+=String.fromCharCode(i)}return r},Et=(e,t,n)=>{if(n===void 0&&(n=2147483647),4>n)return 0;var r=t;n=r+n-4;for(var i=0;i<e.length;++i){var a=e.charCodeAt(i);if(55296<=a&&57343>=a){var o=e.charCodeAt(++i);a=65536+((a&1023)<<10)|o&1023}if(k[t>>2]=a,t+=4,t+4>n)break}return k[t>>2]=0,t-r},Dt=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);55296<=r&&57343>=r&&++n,t+=4}return t},Ot={};function kt(e){var t=Ot[e];return t===void 0?Ee(e):t}var At=[];function jt(){function e(e){e.$$$embind_global$$$=e;var t=typeof $$$embind_global$$$==`object`&&e.$$$embind_global$$$==e;return t||delete e.$$$embind_global$$$,t}if(typeof globalThis==`object`)return globalThis;if(typeof $$$embind_global$$$==`object`||(typeof global==`object`&&e(global)?$$$embind_global$$$=global:typeof self==`object`&&e(self)&&($$$embind_global$$$=self),typeof $$$embind_global$$$==`object`))return $$$embind_global$$$;throw Error(`unable to get global object.`)}function Mt(e){var t=At.length;return At.push(e),t}function Nt(e,t){for(var n=Array(e),r=0;r<e;++r)n[r]=pt(A[t+4*r>>2],`parameter `+r);return n}var Pt=[];function Ft(e){var t=Array(e+1);return function(n,r,i){t[0]=n;for(var a=0;a<e;++a){var o=pt(A[r+4*a>>2],`parameter `+a);t[a+1]=o.readValueFromPointer(i),i+=o.argPackAdvance}return n=new(n.bind.apply(n,t)),dt(n)}}var It={};function Lt(e){var t=e.getExtension(`ANGLE_instanced_arrays`);t&&(e.vertexAttribDivisor=function(e,n){t.vertexAttribDivisorANGLE(e,n)},e.drawArraysInstanced=function(e,n,r,i){t.drawArraysInstancedANGLE(e,n,r,i)},e.drawElementsInstanced=function(e,n,r,i,a){t.drawElementsInstancedANGLE(e,n,r,i,a)})}function Rt(e){var t=e.getExtension(`OES_vertex_array_object`);t&&(e.createVertexArray=function(){return t.createVertexArrayOES()},e.deleteVertexArray=function(e){t.deleteVertexArrayOES(e)},e.bindVertexArray=function(e){t.bindVertexArrayOES(e)},e.isVertexArray=function(e){return t.isVertexArrayOES(e)})}function zt(e){var t=e.getExtension(`WEBGL_draw_buffers`);t&&(e.drawBuffers=function(e,n){t.drawBuffersWEBGL(e,n)})}var Bt=1,Vt=[],Ht=[],Ut=[],Wt=[],Gt=[],Kt=[],qt=[],Jt=[],Yt=[],Xt=[],Zt=[],V={},Qt={},$t=4;function H(e){on||=e}function en(e){for(var t=Bt++,n=e.length;n<t;n++)e[n]=null;return t}function tn(e,t){e.df||(e.df=e.getContext,e.getContext=function(t,n){return n=e.df(t,n),t==`webgl`==n instanceof WebGLRenderingContext?n:null});var n=1<t.majorVersion?e.getContext(`webgl2`,t):e.getContext(`webgl`,t);return n?nn(n,t):0}function nn(e,t){var n=en(Jt),r={handle:n,attributes:t,version:t.majorVersion,xe:e};return e.canvas&&(e.canvas.Rf=r),Jt[n]=r,(t.eg===void 0||t.eg)&&an(r),n}function rn(e){return U=Jt[e],r.Jg=G=U&&U.xe,!(e&&!G)}function an(e){if(e||=U,!e.og){e.og=!0;var t=e.xe;Lt(t),Rt(t),zt(t),t.If=t.getExtension(`WEBGL_draw_instanced_base_vertex_base_instance`),t.Mf=t.getExtension(`WEBGL_multi_draw_instanced_base_vertex_base_instance`),2<=e.version&&(t.ze=t.getExtension(`EXT_disjoint_timer_query_webgl2`)),(2>e.version||!t.ze)&&(t.ze=t.getExtension(`EXT_disjoint_timer_query`)),t.Kg=t.getExtension(`WEBGL_multi_draw`),(t.getSupportedExtensions()||[]).forEach(function(e){e.includes(`lose_context`)||e.includes(`debug`)||t.getExtension(e)})}}var U,on;function sn(e,t){G.bindFramebuffer(e,Ut[t])}function cn(e){G.bindVertexArray(qt[e])}function ln(e){G.clear(e)}function un(e,t,n,r){G.clearColor(e,t,n,r)}function dn(e){G.clearStencil(e)}function fn(e,t){for(var n=0;n<e;n++){var r=k[t+4*n>>2];G.deleteVertexArray(qt[r]),qt[r]=null}}var pn=[];function mn(e,t,n,r){G.drawElements(e,t,n,r)}function hn(e,t,n,r){for(var i=0;i<e;i++){var a=G[n](),o=a&&en(r);a?(a.name=o,r[o]=a):H(1282),k[t+4*i>>2]=o}}function gn(e,t){hn(e,t,`createVertexArray`,qt)}function _n(e,t){A[e>>2]=t,A[e+4>>2]=(t-A[e>>2])/4294967296}function vn(e,t,n){if(t){var r=void 0;switch(e){case 36346:r=1;break;case 36344:n!=0&&n!=1&&H(1280);return;case 34814:case 36345:r=0;break;case 34466:var i=G.getParameter(34467);r=i?i.length:0;break;case 33309:if(2>U.version){H(1282);return}r=2*(G.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>U.version){H(1280);return}r=e==33307?3:0}if(r===void 0)switch(i=G.getParameter(e),typeof i){case`number`:r=i;break;case`boolean`:r=i?1:0;break;case`string`:H(1280);return;case`object`:if(i===null)switch(e){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:r=0;break;default:H(1280);return}else{if(i instanceof Float32Array||i instanceof Uint32Array||i instanceof Int32Array||i instanceof Array){for(e=0;e<i.length;++e)switch(n){case 0:k[t+4*e>>2]=i[e];break;case 2:j[t+4*e>>2]=i[e];break;case 4:T[t+e>>0]=i[e]?1:0}return}try{r=i.name|0}catch(t){H(1280),y(`GL_INVALID_ENUM in glGet`+n+`v: Unknown object returned from WebGL getParameter(`+e+`)! (error: `+t+`)`);return}}break;default:H(1280),y(`GL_INVALID_ENUM in glGet`+n+`v: Native code calling glGet`+n+`v(`+e+`) and it returns `+i+` of type `+typeof i+`!`);return}switch(n){case 1:_n(t,r);break;case 0:k[t>>2]=r;break;case 2:j[t>>2]=r;break;case 4:T[t>>0]=r?1:0}}else H(1281)}function yn(e,t){vn(e,t,0)}function bn(e,t,n){n?(e=Yt[e],t=2>U.version?G.ze.getQueryObjectEXT(e,t):G.getQueryParameter(e,t),_n(n,typeof t==`boolean`?t?1:0:t)):H(1281)}var xn=e=>{var t=bt(e)+1,n=Wn(t);return n&&yt(e,E,n,t),n};function Sn(e){var t=V[e];if(!t){switch(e){case 7939:t=G.getSupportedExtensions()||[],t=t.concat(t.map(function(e){return`GL_`+e})),t=xn(t.join(` `));break;case 7936:case 7937:case 37445:case 37446:(t=G.getParameter(e))||H(1280),t&&=xn(t);break;case 7938:t=G.getParameter(7938),t=2<=U.version?`OpenGL ES 3.0 (`+t+`)`:`OpenGL ES 2.0 (`+t+`)`,t=xn(t);break;case 35724:t=G.getParameter(35724);var n=t.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);n!==null&&(n[1].length==3&&(n[1]+=`0`),t=`OpenGL ES GLSL ES `+n[1]+` (`+t+`)`),t=xn(t);break;default:H(1280)}V[e]=t}return t}function Cn(e,t){if(2>U.version)return H(1282),0;var n=Qt[e];if(n)return 0>t||t>=n.length?(H(1281),0):n[t];switch(e){case 7939:return n=G.getSupportedExtensions()||[],n=n.concat(n.map(function(e){return`GL_`+e})),n=n.map(function(e){return xn(e)}),n=Qt[e]=n,0>t||t>=n.length?(H(1281),0):n[t];default:return H(1280),0}}function wn(e){return e.slice(-1)==`]`&&e.lastIndexOf(`[`)}function Tn(e){return e-=5120,e==0?T:e==1?E:e==2?D:e==4?k:e==6?j:e==5||e==28922||e==28520||e==30779||e==30782?A:O}function En(e,t,n,r,i){e=Tn(e);var a=31-Math.clz32(e.BYTES_PER_ELEMENT),o=$t;return e.subarray(i>>a,i+r*(n*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[t-6402]||1)*(1<<a)+o-1&-o)>>a)}function W(e){var t=G.bg;if(t){var n=t.ff[e];return typeof n==`number`&&(t.ff[e]=n=G.getUniformLocation(t,t.Pf[e]+(0<n?`[`+n+`]`:``))),n}H(1282)}var Dn=[],On=[],kn={},An=()=>{if(!jn){var e={USER:`web_user`,LOGNAME:`web_user`,PATH:`/`,PWD:`/`,HOME:`/home/web_user`,LANG:(typeof navigator==`object`&&navigator.languages&&navigator.languages[0]||`C`).replace(`-`,`_`)+`.UTF-8`,_:s||`./this.program`},t;for(t in kn)kn[t]===void 0?delete e[t]:e[t]=kn[t];var n=[];for(t in e)n.push(`${t}=${e[t]}`);jn=n}return jn},jn,Mn=[null,[],[]],Nn=e=>e%4==0&&(e%100!=0||e%400==0),Pn=[31,29,31,30,31,30,31,31,30,31,30,31],Fn=[31,28,31,30,31,30,31,31,30,31,30,31];function In(e){var t=Array(bt(e)+1);return yt(e,t,0,t.length),t}var Ln=(e,t,n,r)=>{function i(e,t,n){for(e=typeof e==`number`?e.toString():e||``;e.length<t;)e=n[0]+e;return e}function a(e,t){return i(e,t,`0`)}function o(e,t){function n(e){return 0>e?-1:0<e?1:0}var r;return(r=n(e.getFullYear()-t.getFullYear()))===0&&(r=n(e.getMonth()-t.getMonth()))===0&&(r=n(e.getDate()-t.getDate())),r}function s(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function c(e){var t=e.He;for(e=new Date(new Date(e.Ie+1900,0,1).getTime());0<t;){var n=e.getMonth(),r=(Nn(e.getFullYear())?Pn:Fn)[n];if(t>r-e.getDate())t-=r-e.getDate()+1,e.setDate(1),11>n?e.setMonth(n+1):(e.setMonth(0),e.setFullYear(e.getFullYear()+1));else{e.setDate(e.getDate()+t);break}}return n=new Date(e.getFullYear()+1,0,4),t=s(new Date(e.getFullYear(),0,4)),n=s(n),0>=o(t,e)?0>=o(n,e)?e.getFullYear()+1:e.getFullYear():e.getFullYear()-1}var l=k[r+40>>2];for(var u in r={Hg:k[r>>2],Gg:k[r+4>>2],tf:k[r+8>>2],Df:k[r+12>>2],uf:k[r+16>>2],Ie:k[r+20>>2],Ae:k[r+24>>2],He:k[r+28>>2],Ng:k[r+32>>2],Fg:k[r+36>>2],Ig:l&&l?me(E,l):``},n=n?me(E,n):``,l={"%c":`%a %b %d %H:%M:%S %Y`,"%D":`%m/%d/%y`,"%F":`%Y-%m-%d`,"%h":`%b`,"%r":`%I:%M:%S %p`,"%R":`%H:%M`,"%T":`%H:%M:%S`,"%x":`%m/%d/%y`,"%X":`%H:%M:%S`,"%Ec":`%c`,"%EC":`%C`,"%Ex":`%m/%d/%y`,"%EX":`%H:%M:%S`,"%Ey":`%y`,"%EY":`%Y`,"%Od":`%d`,"%Oe":`%e`,"%OH":`%H`,"%OI":`%I`,"%Om":`%m`,"%OM":`%M`,"%OS":`%S`,"%Ou":`%u`,"%OU":`%U`,"%OV":`%V`,"%Ow":`%w`,"%OW":`%W`,"%Oy":`%y`},l)n=n.replace(new RegExp(u,`g`),l[u]);var d=`Sunday Monday Tuesday Wednesday Thursday Friday Saturday`.split(` `),f=`January February March April May June July August September October November December`.split(` `);for(u in l={"%a":e=>d[e.Ae].substring(0,3),"%A":e=>d[e.Ae],"%b":e=>f[e.uf].substring(0,3),"%B":e=>f[e.uf],"%C":e=>a((e.Ie+1900)/100|0,2),"%d":e=>a(e.Df,2),"%e":e=>i(e.Df,2,` `),"%g":e=>c(e).toString().substring(2),"%G":e=>c(e),"%H":e=>a(e.tf,2),"%I":e=>(e=e.tf,e==0?e=12:12<e&&(e-=12),a(e,2)),"%j":e=>{for(var t=0,n=0;n<=e.uf-1;t+=(Nn(e.Ie+1900)?Pn:Fn)[n++]);return a(e.Df+t,3)},"%m":e=>a(e.uf+1,2),"%M":e=>a(e.Gg,2),"%n":()=>`
`,"%p":e=>0<=e.tf&&12>e.tf?`AM`:`PM`,"%S":e=>a(e.Hg,2),"%t":()=>`	`,"%u":e=>e.Ae||7,"%U":e=>a(Math.floor((e.He+7-e.Ae)/7),2),"%V":e=>{var t=Math.floor((e.He+7-(e.Ae+6)%7)/7);if(2>=(e.Ae+371-e.He-2)%7&&t++,t)t==53&&(n=(e.Ae+371-e.He)%7,n==4||n==3&&Nn(e.Ie)||(t=1));else{t=52;var n=(e.Ae+7-e.He-1)%7;(n==4||n==5&&Nn(e.Ie%400-1))&&t++}return a(t,2)},"%w":e=>e.Ae,"%W":e=>a(Math.floor((e.He+7-(e.Ae+6)%7)/7),2),"%y":e=>(e.Ie+1900).toString().substring(2),"%Y":e=>e.Ie+1900,"%z":e=>{e=e.Fg;var t=0<=e;return e=Math.abs(e)/60,(t?`+`:`-`)+String(`0000`+(e/60*100+e%60)).slice(-4)},"%Z":e=>e.Ig,"%%":()=>`%`},n=n.replace(/%%/g,`\0\0`),l)n.includes(u)&&(n=n.replace(new RegExp(u,`g`),l[u](r)));return n=n.replace(/\0\0/g,`%`),u=In(n),u.length>t?0:(T.set(u,e),u.length-1)};xe=r.InternalError=class extends Error{constructor(e){super(e),this.name=`InternalError`}};for(var Rn=Array(256),zn=0;256>zn;++zn)Rn[zn]=String.fromCharCode(zn);Te=Rn,De=r.BindingError=class extends Error{constructor(e){super(e),this.name=`BindingError`}},Ue.prototype.isAliasOf=function(e){if(!(this instanceof Ue&&e instanceof Ue))return!1;var t=this.ae.me.ge,n=this.ae.ie,r=e.ae.me.ge;for(e=e.ae.ie;t.re;)n=t.gf(n),t=t.re;for(;r.re;)e=r.gf(e),r=r.re;return t===r&&n===e},Ue.prototype.clone=function(){if(this.ae.ie||Ae(this),this.ae.ef)return this.ae.count.value+=1,this;var e=He,t=Object,n=t.create,r=Object.getPrototypeOf(this),i=this.ae;return e=e(n.call(t,r,{ae:{value:{count:i.count,Xe:i.Xe,ef:i.ef,ie:i.ie,me:i.me,pe:i.pe,we:i.we}}})),e.ae.count.value+=1,e.ae.Xe=!1,e},Ue.prototype.delete=function(){this.ae.ie||Ae(this),this.ae.Xe&&!this.ae.ef&&z(`Object already scheduled for deletion`),Me(this),Ne(this.ae),this.ae.ef||(this.ae.pe=void 0,this.ae.ie=void 0)},Ue.prototype.isDeleted=function(){return!this.ae.ie},Ue.prototype.deleteLater=function(){return this.ae.ie||Ae(this),this.ae.Xe&&!this.ae.ef&&z(`Object already scheduled for deletion`),Ie.push(this),Ie.length===1&&Re&&Re(Le),this.ae.Xe=!0,this},r.getInheritedInstanceCount=function(){return Object.keys(ze).length},r.getLiveInheritedInstances=function(){var e=[],t;for(t in ze)ze.hasOwnProperty(t)&&e.push(ze[t]);return e},r.flushPendingDeletes=Le,r.setDelayFunction=function(e){Re=e,Ie.length&&Re&&Re(Le)},$e.prototype.jg=function(e){return this.Nf&&(e=this.Nf(e)),e},$e.prototype.Hf=function(e){this.De&&this.De(e)},$e.prototype.argPackAdvance=8,$e.prototype.readValueFromPointer=_e,$e.prototype.deleteObject=function(e){e!==null&&e.delete()},$e.prototype.fromWireType=function(e){function t(){return this.pf?Ve(this.ge.Ye,{me:this.tg,ie:n,we:this,pe:e}):Ve(this.ge.Ye,{me:this,ie:e})}var n=this.jg(e);if(!n)return this.Hf(e),null;var r=Be(this.ge,n);if(r!==void 0)return r.ae.count.value===0?(r.ae.ie=n,r.ae.pe=e,r.clone()):(r=r.clone(),this.Hf(e),r);if(r=this.ge.ig(n),r=Fe[r],!r)return t.call(this);r=this.nf?r.$f:r.pointerType;var i=Pe(n,this.ge,r.ge);return i===null?t.call(this):this.pf?Ve(r.ge.Ye,{me:r,ie:i,we:this,pe:e}):Ve(r.ge.Ye,{me:r,ie:i})},nt=r.UnboundTypeError=function(e,t){var n=Ge(t,function(e){this.name=t,this.message=e,e=Error(e).stack,e!==void 0&&(this.stack=this.toString()+`
`+e.replace(/^Error(:[^\n]*)?\n/,``))});return n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},n}(Error,`UnboundTypeError`),Object.assign(st.prototype,{get(e){return this.Ce[e]},has(e){return this.Ce[e]!==void 0},Yf(e){var t=this.Kf.pop()||this.Ce.length;return this.Ce[t]=e,t},Zf(e){this.Ce[e]=void 0,this.Kf.push(e)}}),ct.Ce.push({value:void 0},{value:null},{value:!0},{value:!1}),ct.df=ct.Ce.length,r.count_emval_handles=function(){for(var e=0,t=ct.df;t<ct.Ce.length;++t)ct.Ce[t]!==void 0&&++e;return e};for(var G,Bn=0;32>Bn;++Bn)pn.push(Array(Bn));var Vn=new Float32Array(288);for(Bn=0;288>Bn;++Bn)Dn[Bn]=Vn.subarray(0,Bn+1);var Hn=new Int32Array(288);for(Bn=0;288>Bn;++Bn)On[Bn]=Hn.subarray(0,Bn+1);var Un={R:function(){return 0},wb:()=>{},yb:function(){return 0},tb:()=>{},ub:()=>{},S:function(){},vb:()=>{},B:function(e){var t=he[e];delete he[e];var n=t.Cf,r=t.De,i=t.Jf,a=i.map(e=>e.mg).concat(i.map(e=>e.xg));Ce([e],a,e=>{var a={};return i.forEach((t,n)=>{var r=e[n],o=t.kg,s=t.lg,c=e[n+i.length],l=t.wg,u=t.yg;a[t.fg]={read:e=>r.fromWireType(o(s,e)),write:(e,t)=>{var n=[];l(u,e,c.toWireType(n,t)),ge(n)}}}),[{name:t.name,fromWireType:function(e){var t={},n;for(n in a)t[n]=a[n].read(e);return r(e),t},toWireType:function(e,t){for(var i in a)if(!(i in t))throw TypeError(`Missing field: "${i}"`);var o=n();for(i in a)a[i].write(o,t[i]);return e!==null&&e.push(r,o),o},argPackAdvance:8,readValueFromPointer:_e,ve:r}]})},nb:function(){},Cb:function(e,t,n,r,i){var a=we(n);t=Ee(t),ke(e,{name:t,fromWireType:function(e){return!!e},toWireType:function(e,t){return t?r:i},argPackAdvance:8,readValueFromPointer:function(e){if(n===1)var r=T;else if(n===2)r=D;else if(n===4)r=k;else throw TypeError(`Unknown boolean type size: `+t);return this.fromWireType(r[e>>a])},ve:null})},n:function(e,t,n,r,i,a,o,s,c,l,u,d,f){u=Ee(u),a=tt(i,a),s&&=tt(o,s),l&&=tt(c,l),f=tt(d,f);var p=We(u);qe(p,function(){it(`Cannot construct ${u} due to unbound types`,[r])}),Ce([e,t,n],r?[r]:[],function(t){if(t=t[0],r)var n=t.ge,i=n.Ye;else i=Ue.prototype;t=Ge(p,function(){if(Object.getPrototypeOf(this)!==o)throw new De(`Use 'new' to construct `+u);if(c.Ge===void 0)throw new De(u+` has no accessible constructor`);var e=c.Ge[arguments.length];if(e===void 0)throw new De(`Tried to invoke ctor of ${u} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(c.Ge).toString()}) parameters instead!`);return e.apply(this,arguments)});var o=Object.create(i,{constructor:{value:t}});t.prototype=o;var c=new Je(u,t,o,f,n,a,s,l);c.re&&(c.re.hf===void 0&&(c.re.hf=[]),c.re.hf.push(c)),n=new $e(u,c,!0,!1,!1),i=new $e(u+`*`,c,!1,!1,!1);var d=new $e(u+` const*`,c,!1,!0,!1);return Fe[e]={pointerType:i,$f:d},B(p,t),[n,i,d]})},f:function(e,t,n,r,i,a,o){var s=ot(n,r);t=Ee(t),a=tt(i,a),Ce([],[e],function(e){function r(){it(`Cannot call ${i} due to unbound types`,s)}e=e[0];var i=`${e.name}.${t}`;t.startsWith(`@@`)&&(t=Symbol[t.substring(2)]);var c=e.ge.constructor;return c[t]===void 0?(r.Ve=n-1,c[t]=r):(Ke(c,t,i),c[t].oe[n-1]=r),Ce([],s,function(r){if(r=[r[0],null].concat(r.slice(1)),r=at(i,r,null,a,o),c[t].oe===void 0?(r.Ve=n-1,c[t]=r):c[t].oe[n-1]=r,e.ge.hf)for(let n of e.ge.hf)n.constructor.hasOwnProperty(t)||(n.constructor[t]=r);return[]}),[]})},A:function(e,t,n,r,i,a){var o=ot(t,n);i=tt(r,i),Ce([],[e],function(e){e=e[0];var n=`constructor ${e.name}`;if(e.ge.Ge===void 0&&(e.ge.Ge=[]),e.ge.Ge[t-1]!==void 0)throw new De(`Cannot register multiple constructors with identical number of parameters (${t-1}) for class '${e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return e.ge.Ge[t-1]=()=>{it(`Cannot construct ${e.name} due to unbound types`,o)},Ce([],o,function(r){return r.splice(1,0,null),e.ge.Ge[t-1]=at(n,r,null,i,a),[]}),[]})},b:function(e,t,n,r,i,a,o,s){var c=ot(n,r);t=Ee(t),a=tt(i,a),Ce([],[e],function(e){function r(){it(`Cannot call ${i} due to unbound types`,c)}e=e[0];var i=`${e.name}.${t}`;t.startsWith(`@@`)&&(t=Symbol[t.substring(2)]),s&&e.ge.ug.push(t);var l=e.ge.Ye,u=l[t];return u===void 0||u.oe===void 0&&u.className!==e.name&&u.Ve===n-2?(r.Ve=n-2,r.className=e.name,l[t]=r):(Ke(l,t,i),l[t].oe[n-2]=r),Ce([],c,function(r){return r=at(i,r,e,a,o),l[t].oe===void 0?(r.Ve=n-2,l[t]=r):l[t].oe[n-2]=r,[]}),[]})},t:function(e,t,n){e=Ee(e),Ce([],[t],function(t){return t=t[0],r[e]=t.fromWireType(n),[]})},Bb:function(e,t){t=Ee(t),ke(e,{name:t,fromWireType:function(e){var t=ut(e);return lt(e),t},toWireType:function(e,t){return dt(t)},argPackAdvance:8,readValueFromPointer:_e,ve:null})},m:function(e,t,n,r){function i(){}n=we(n),t=Ee(t),i.values={},ke(e,{name:t,constructor:i,fromWireType:function(e){return this.constructor.values[e]},toWireType:function(e,t){return t.value},argPackAdvance:8,readValueFromPointer:ft(t,n,r),ve:null}),qe(t,i)},c:function(e,t,n){var r=pt(e,`enum`);t=Ee(t),e=r.constructor,r=Object.create(r.constructor.prototype,{value:{value:n},constructor:{value:Ge(`${r.name}_${t}`,function(){})}}),e.values[n]=r,e[t]=r},U:function(e,t,n){n=we(n),t=Ee(t),ke(e,{name:t,fromWireType:function(e){return e},toWireType:function(e,t){return t},argPackAdvance:8,readValueFromPointer:ht(t,n),ve:null})},y:function(e,t,n,r,i,a){var o=ot(t,n);e=Ee(e),i=tt(r,i),qe(e,function(){it(`Cannot call ${e} due to unbound types`,o)},t-1),Ce([],o,function(n){return n=[n[0],null].concat(n.slice(1)),B(e,at(e,n,null,i,a),t-1),[]})},E:function(e,t,n,r,i){t=Ee(t),i===-1&&(i=4294967295),i=we(n);var a=e=>e;if(r===0){var o=32-8*n;a=e=>e<<o>>>o}n=t.includes(`unsigned`)?function(e,t){return t>>>0}:function(e,t){return t},ke(e,{name:t,fromWireType:a,toWireType:n,argPackAdvance:8,readValueFromPointer:vt(t,i,r!==0),ve:null})},r:function(e,t,n){function r(e){e>>=2;var t=A;return new i(t.buffer,t[e+1],t[e])}var i=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][t];n=Ee(n),ke(e,{name:n,fromWireType:r,argPackAdvance:8,readValueFromPointer:r},{ng:!0})},q:function(e,t,n,r,i,a,o,s,c,l,u,d){n=Ee(n),a=tt(i,a),s=tt(o,s),l=tt(c,l),d=tt(u,d),Ce([e],[t],function(e){return e=e[0],[new $e(n,e.ge,!1,!1,!0,e,r,a,s,l,d)]})},T:function(e,t){t=Ee(t);var n=t===`std::string`;ke(e,{name:t,fromWireType:function(e){var t=A[e>>2],r=e+4;if(n)for(var i=r,a=0;a<=t;++a){var o=r+a;if(a==t||E[o]==0){if(i=i?me(E,i,o-i):``,s===void 0)var s=i;else s+=`\0`,s+=i;i=o+1}}else{for(s=Array(t),a=0;a<t;++a)s[a]=String.fromCharCode(E[r+a]);s=s.join(``)}return Gn(e),s},toWireType:function(e,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var r=typeof t==`string`;r||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array||z(`Cannot pass non-string to std::string`);var i=n&&r?bt(t):t.length,a=Wn(4+i+1),o=a+4;if(A[a>>2]=i,n&&r)yt(t,E,o,i+1);else if(r)for(r=0;r<i;++r){var s=t.charCodeAt(r);255<s&&(Gn(o),z(`String has UTF-16 code units that do not fit in 8 bits`)),E[o+r]=s}else for(r=0;r<i;++r)E[o+r]=t[r];return e!==null&&e.push(Gn,a),a},argPackAdvance:8,readValueFromPointer:_e,ve:function(e){Gn(e)}})},N:function(e,t,n){if(n=Ee(n),t===2)var r=St,i=Ct,a=wt,o=()=>O,s=1;else t===4&&(r=Tt,i=Et,a=Dt,o=()=>A,s=2);ke(e,{name:n,fromWireType:function(e){for(var n=A[e>>2],i=o(),a,c=e+4,l=0;l<=n;++l){var u=e+4+l*t;(l==n||i[u>>s]==0)&&(c=r(c,u-c),a===void 0?a=c:(a+=`\0`,a+=c),c=u+t)}return Gn(e),a},toWireType:function(e,r){typeof r!=`string`&&z(`Cannot pass non-string to C++ string type ${n}`);var o=a(r),c=Wn(4+o+t);return A[c>>2]=o>>s,i(r,c+4,o+t),e!==null&&e.push(Gn,c),c},argPackAdvance:8,readValueFromPointer:_e,ve:function(e){Gn(e)}})},C:function(e,t,n,r,i,a){he[e]={name:Ee(t),Cf:tt(n,r),De:tt(i,a),Jf:[]}},e:function(e,t,n,r,i,a,o,s,c,l){he[e].Jf.push({fg:Ee(t),mg:n,kg:tt(r,i),lg:a,xg:o,wg:tt(s,c),yg:l})},Db:function(e,t){t=Ee(t),ke(e,{pg:!0,name:t,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},Ab:()=>!0,pb:()=>{throw 1/0},F:function(e,t,n){e=ut(e),t=pt(t,`emval::as`);var r=[],i=dt(r);return A[n>>2]=i,t.toWireType(r,e)},X:function(e,t,n,r,i){e=At[e],t=ut(t),n=kt(n);var a=[];return A[r>>2]=dt(a),e(t,n,a,i)},x:function(e,t,n,r){e=At[e],t=ut(t),n=kt(n),e(t,n,null,r)},d:lt,K:function(e){return e===0?dt(jt()):(e=kt(e),dt(jt()[e]))},u:function(e,t){var n=Nt(e,t),r=n[0];t=r.name+`_$`+n.slice(1).map(function(e){return e.name}).join(`_`)+`$`;var i=Pt[t];if(i!==void 0)return i;var a=Array(e-1);return i=Mt((t,i,o,s)=>{for(var c=0,l=0;l<e-1;++l)a[l]=n[l+1].readValueFromPointer(s+c),c+=n[l+1].argPackAdvance;for(t=t[i].apply(t,a),l=0;l<e-1;++l)n[l+1].cg&&n[l+1].cg(a[l]);if(!r.pg)return r.toWireType(o,t)}),Pt[t]=i},z:function(e,t){return e=ut(e),t=ut(t),dt(e[t])},p:function(e){4<e&&(ct.get(e).Of+=1)},J:function(e,t,n,r){e=ut(e);var i=It[t];return i||(i=Ft(t),It[t]=i),i(e,n,r)},H:function(){return dt([])},g:function(e){return dt(kt(e))},G:function(){return dt({})},gb:function(e){return e=ut(e),!e},D:function(e){ge(ut(e)),lt(e)},l:function(e,t,n){e=ut(e),t=ut(t),n=ut(n),e[t]=n},h:function(e,t){return e=pt(e,`_emval_take_value`),e=e.readValueFromPointer(t),dt(e)},kb:function(){return-52},lb:function(){},a:()=>{ie(``)},zb:()=>performance.now(),sd:function(e){G.activeTexture(e)},td:function(e,t){G.attachShader(Ht[e],Kt[t])},Yb:function(e,t){G.beginQuery(e,Yt[t])},Sb:function(e,t){G.ze.beginQueryEXT(e,Yt[t])},ud:function(e,t,n){G.bindAttribLocation(Ht[e],t,n?me(E,n):``)},vd:function(e,t){e==35051?G.zf=t:e==35052&&(G.We=t),G.bindBuffer(e,Vt[t])},uc:sn,vc:function(e,t){G.bindRenderbuffer(e,Wt[t])},cc:function(e,t){G.bindSampler(e,Xt[t])},wd:function(e,t){G.bindTexture(e,Gt[t])},Pc:cn,Tc:cn,Y:function(e,t,n,r){G.blendColor(e,t,n,r)},Z:function(e){G.blendEquation(e)},_:function(e,t){G.blendFunc(e,t)},oc:function(e,t,n,r,i,a,o,s,c,l){G.blitFramebuffer(e,t,n,r,i,a,o,s,c,l)},$:function(e,t,n,r){2<=U.version?n&&t?G.bufferData(e,E,r,n,t):G.bufferData(e,t,r):G.bufferData(e,n?E.subarray(n,n+t):t,r)},aa:function(e,t,n,r){2<=U.version?n&&G.bufferSubData(e,t,E,r,n):G.bufferSubData(e,t,E.subarray(r,r+n))},wc:function(e){return G.checkFramebufferStatus(e)},ba:ln,ca:un,da:dn,lc:function(e,t,n,r){return G.clientWaitSync(Zt[e],t,(n>>>0)+4294967296*r)},ea:function(e,t,n,r){G.colorMask(!!e,!!t,!!n,!!r)},fa:function(e){G.compileShader(Kt[e])},ga:function(e,t,n,r,i,a,o,s){2<=U.version?G.We||!o?G.compressedTexImage2D(e,t,n,r,i,a,o,s):G.compressedTexImage2D(e,t,n,r,i,a,E,s,o):G.compressedTexImage2D(e,t,n,r,i,a,s?E.subarray(s,s+o):null)},ha:function(e,t,n,r,i,a,o,s,c){2<=U.version?G.We||!s?G.compressedTexSubImage2D(e,t,n,r,i,a,o,s,c):G.compressedTexSubImage2D(e,t,n,r,i,a,o,E,c,s):G.compressedTexSubImage2D(e,t,n,r,i,a,o,c?E.subarray(c,c+s):null)},nc:function(e,t,n,r,i){G.copyBufferSubData(e,t,n,r,i)},ia:function(e,t,n,r,i,a,o,s){G.copyTexSubImage2D(e,t,n,r,i,a,o,s)},ja:function(){var e=en(Ht),t=G.createProgram();return t.name=e,t.sf=t.qf=t.rf=0,t.Ef=1,Ht[e]=t,e},ka:function(e){var t=en(Kt);return Kt[t]=G.createShader(e),t},la:function(e){G.cullFace(e)},ma:function(e,t){for(var n=0;n<e;n++){var r=k[t+4*n>>2],i=Vt[r];i&&(G.deleteBuffer(i),i.name=0,Vt[r]=null,r==G.zf&&(G.zf=0),r==G.We&&(G.We=0))}},xc:function(e,t){for(var n=0;n<e;++n){var r=k[t+4*n>>2],i=Ut[r];i&&(G.deleteFramebuffer(i),i.name=0,Ut[r]=null)}},na:function(e){if(e){var t=Ht[e];t?(G.deleteProgram(t),t.name=0,Ht[e]=null):H(1281)}},Zb:function(e,t){for(var n=0;n<e;n++){var r=k[t+4*n>>2],i=Yt[r];i&&(G.deleteQuery(i),Yt[r]=null)}},Tb:function(e,t){for(var n=0;n<e;n++){var r=k[t+4*n>>2],i=Yt[r];i&&(G.ze.deleteQueryEXT(i),Yt[r]=null)}},yc:function(e,t){for(var n=0;n<e;n++){var r=k[t+4*n>>2],i=Wt[r];i&&(G.deleteRenderbuffer(i),i.name=0,Wt[r]=null)}},dc:function(e,t){for(var n=0;n<e;n++){var r=k[t+4*n>>2],i=Xt[r];i&&(G.deleteSampler(i),i.name=0,Xt[r]=null)}},oa:function(e){if(e){var t=Kt[e];t?(G.deleteShader(t),Kt[e]=null):H(1281)}},mc:function(e){if(e){var t=Zt[e];t?(G.deleteSync(t),t.name=0,Zt[e]=null):H(1281)}},pa:function(e,t){for(var n=0;n<e;n++){var r=k[t+4*n>>2],i=Gt[r];i&&(G.deleteTexture(i),i.name=0,Gt[r]=null)}},Qc:fn,Uc:fn,qa:function(e){G.depthMask(!!e)},ra:function(e){G.disable(e)},sa:function(e){G.disableVertexAttribArray(e)},ta:function(e,t,n){G.drawArrays(e,t,n)},Nc:function(e,t,n,r){G.drawArraysInstanced(e,t,n,r)},Lc:function(e,t,n,r,i){G.If.drawArraysInstancedBaseInstanceWEBGL(e,t,n,r,i)},Jc:function(e,t){for(var n=pn[e],r=0;r<e;r++)n[r]=k[t+4*r>>2];G.drawBuffers(n)},ua:mn,Oc:function(e,t,n,r,i){G.drawElementsInstanced(e,t,n,r,i)},Mc:function(e,t,n,r,i,a,o){G.If.drawElementsInstancedBaseVertexBaseInstanceWEBGL(e,t,n,r,i,a,o)},Dc:function(e,t,n,r,i,a){mn(e,r,i,a)},va:function(e){G.enable(e)},wa:function(e){G.enableVertexAttribArray(e)},_b:function(e){G.endQuery(e)},Ub:function(e){G.ze.endQueryEXT(e)},ic:function(e,t){return(e=G.fenceSync(e,t))?(t=en(Zt),e.name=t,Zt[t]=e,t):0},xa:function(){G.finish()},ya:function(){G.flush()},zc:function(e,t,n,r){G.framebufferRenderbuffer(e,t,n,Wt[r])},Ac:function(e,t,n,r,i){G.framebufferTexture2D(e,t,n,Gt[r],i)},za:function(e){G.frontFace(e)},Aa:function(e,t){hn(e,t,`createBuffer`,Vt)},Bc:function(e,t){hn(e,t,`createFramebuffer`,Ut)},$b:function(e,t){hn(e,t,`createQuery`,Yt)},Vb:function(e,t){for(var n=0;n<e;n++){var r=G.ze.createQueryEXT();if(!r){for(H(1282);n<e;)k[t+4*n++>>2]=0;break}var i=en(Yt);r.name=i,Yt[i]=r,k[t+4*n>>2]=i}},Cc:function(e,t){hn(e,t,`createRenderbuffer`,Wt)},ec:function(e,t){hn(e,t,`createSampler`,Xt)},Ba:function(e,t){hn(e,t,`createTexture`,Gt)},Rc:gn,Vc:gn,qc:function(e){G.generateMipmap(e)},Ca:function(e,t,n){n?k[n>>2]=G.getBufferParameter(e,t):H(1281)},Da:function(){var e=G.getError()||on;return on=0,e},Ea:function(e,t){vn(e,t,2)},rc:function(e,t,n,r){e=G.getFramebufferAttachmentParameter(e,t,n),(e instanceof WebGLRenderbuffer||e instanceof WebGLTexture)&&(e=e.name|0),k[r>>2]=e},Fa:yn,Ga:function(e,t,n,r){e=G.getProgramInfoLog(Ht[e]),e===null&&(e=`(unknown error)`),t=0<t&&r?yt(e,E,r,t):0,n&&(k[n>>2]=t)},Ha:function(e,t,n){if(n)if(e>=Bt)H(1281);else if(e=Ht[e],t==35716)e=G.getProgramInfoLog(e),e===null&&(e=`(unknown error)`),k[n>>2]=e.length+1;else if(t==35719){if(!e.sf)for(t=0;t<G.getProgramParameter(e,35718);++t)e.sf=Math.max(e.sf,G.getActiveUniform(e,t).name.length+1);k[n>>2]=e.sf}else if(t==35722){if(!e.qf)for(t=0;t<G.getProgramParameter(e,35721);++t)e.qf=Math.max(e.qf,G.getActiveAttrib(e,t).name.length+1);k[n>>2]=e.qf}else if(t==35381){if(!e.rf)for(t=0;t<G.getProgramParameter(e,35382);++t)e.rf=Math.max(e.rf,G.getActiveUniformBlockName(e,t).length+1);k[n>>2]=e.rf}else k[n>>2]=G.getProgramParameter(e,t);else H(1281)},Pb:bn,Qb:bn,ac:function(e,t,n){if(n){e=G.getQueryParameter(Yt[e],t);var r=typeof e==`boolean`?e?1:0:e;k[n>>2]=r}else H(1281)},Wb:function(e,t,n){if(n){e=G.ze.getQueryObjectEXT(Yt[e],t);var r=typeof e==`boolean`?e?1:0:e;k[n>>2]=r}else H(1281)},bc:function(e,t,n){n?k[n>>2]=G.getQuery(e,t):H(1281)},Xb:function(e,t,n){n?k[n>>2]=G.ze.getQueryEXT(e,t):H(1281)},sc:function(e,t,n){n?k[n>>2]=G.getRenderbufferParameter(e,t):H(1281)},Ia:function(e,t,n,r){e=G.getShaderInfoLog(Kt[e]),e===null&&(e=`(unknown error)`),t=0<t&&r?yt(e,E,r,t):0,n&&(k[n>>2]=t)},Mb:function(e,t,n,r){e=G.getShaderPrecisionFormat(e,t),k[n>>2]=e.rangeMin,k[n+4>>2]=e.rangeMax,k[r>>2]=e.precision},Ja:function(e,t,n){n?t==35716?(e=G.getShaderInfoLog(Kt[e]),e===null&&(e=`(unknown error)`),k[n>>2]=e?e.length+1:0):t==35720?(e=G.getShaderSource(Kt[e]),k[n>>2]=e?e.length+1:0):k[n>>2]=G.getShaderParameter(Kt[e],t):H(1281)},Ka:Sn,Sc:Cn,La:function(e,t){if(t=t?me(E,t):``,e=Ht[e]){var n=e,r=n.ff,i=n.Qf,a;if(!r)for(n.ff=r={},n.Pf={},a=0;a<G.getProgramParameter(n,35718);++a){var o=G.getActiveUniform(n,a),s=o.name;o=o.size;var c=wn(s);c=0<c?s.slice(0,c):s;var l=n.Ef;for(n.Ef+=o,i[c]=[o,l],s=0;s<o;++s)r[l]=s,n.Pf[l++]=c}if(n=e.ff,r=0,i=t,a=wn(t),0<a&&(r=parseInt(t.slice(a+1))>>>0,i=t.slice(0,a)),(i=e.Qf[i])&&r<i[0]&&(r+=i[1],n[r]=n[r]||G.getUniformLocation(e,t)))return r}else H(1281);return-1},Nb:function(e,t,n){for(var r=pn[t],i=0;i<t;i++)r[i]=k[n+4*i>>2];G.invalidateFramebuffer(e,r)},Ob:function(e,t,n,r,i,a,o){for(var s=pn[t],c=0;c<t;c++)s[c]=k[n+4*c>>2];G.invalidateSubFramebuffer(e,s,r,i,a,o)},jc:function(e){return G.isSync(Zt[e])},Ma:function(e){return(e=Gt[e])?G.isTexture(e):0},Na:function(e){G.lineWidth(e)},Oa:function(e){e=Ht[e],G.linkProgram(e),e.ff=0,e.Qf={}},Hc:function(e,t,n,r,i,a){G.Mf.multiDrawArraysInstancedBaseInstanceWEBGL(e,k,t>>2,k,n>>2,k,r>>2,A,i>>2,a)},Ic:function(e,t,n,r,i,a,o,s){G.Mf.multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL(e,k,t>>2,n,k,r>>2,k,i>>2,k,a>>2,A,o>>2,s)},Pa:function(e,t){e==3317&&($t=t),G.pixelStorei(e,t)},Rb:function(e,t){G.ze.queryCounterEXT(Yt[e],t)},Kc:function(e){G.readBuffer(e)},Qa:function(e,t,n,r,i,a,o){if(2<=U.version)if(G.zf)G.readPixels(e,t,n,r,i,a,o);else{var s=Tn(a);G.readPixels(e,t,n,r,i,a,s,o>>31-Math.clz32(s.BYTES_PER_ELEMENT))}else (o=En(a,i,n,r,o))?G.readPixels(e,t,n,r,i,a,o):H(1280)},tc:function(e,t,n,r){G.renderbufferStorage(e,t,n,r)},pc:function(e,t,n,r,i){G.renderbufferStorageMultisample(e,t,n,r,i)},fc:function(e,t,n){G.samplerParameterf(Xt[e],t,n)},gc:function(e,t,n){G.samplerParameteri(Xt[e],t,n)},hc:function(e,t,n){G.samplerParameteri(Xt[e],t,k[n>>2])},Ra:function(e,t,n,r){G.scissor(e,t,n,r)},Sa:function(e,t,n,r){for(var i=``,a=0;a<t;++a){var o=r?k[r+4*a>>2]:-1,s=k[n+4*a>>2];o=s?me(E,s,0>o?void 0:o):``,i+=o}G.shaderSource(Kt[e],i)},Ta:function(e,t,n){G.stencilFunc(e,t,n)},Ua:function(e,t,n,r){G.stencilFuncSeparate(e,t,n,r)},Va:function(e){G.stencilMask(e)},Wa:function(e,t){G.stencilMaskSeparate(e,t)},Xa:function(e,t,n){G.stencilOp(e,t,n)},Ya:function(e,t,n,r){G.stencilOpSeparate(e,t,n,r)},Za:function(e,t,n,r,i,a,o,s,c){if(2<=U.version)if(G.We)G.texImage2D(e,t,n,r,i,a,o,s,c);else if(c){var l=Tn(s);G.texImage2D(e,t,n,r,i,a,o,s,l,c>>31-Math.clz32(l.BYTES_PER_ELEMENT))}else G.texImage2D(e,t,n,r,i,a,o,s,null);else G.texImage2D(e,t,n,r,i,a,o,s,c?En(s,o,r,i,c):null)},_a:function(e,t,n){G.texParameterf(e,t,n)},$a:function(e,t,n){G.texParameterf(e,t,j[n>>2])},ab:function(e,t,n){G.texParameteri(e,t,n)},bb:function(e,t,n){G.texParameteri(e,t,k[n>>2])},Ec:function(e,t,n,r,i){G.texStorage2D(e,t,n,r,i)},cb:function(e,t,n,r,i,a,o,s,c){if(2<=U.version)if(G.We)G.texSubImage2D(e,t,n,r,i,a,o,s,c);else if(c){var l=Tn(s);G.texSubImage2D(e,t,n,r,i,a,o,s,l,c>>31-Math.clz32(l.BYTES_PER_ELEMENT))}else G.texSubImage2D(e,t,n,r,i,a,o,s,null);else l=null,c&&(l=En(s,o,i,a,c)),G.texSubImage2D(e,t,n,r,i,a,o,s,l)},db:function(e,t){G.uniform1f(W(e),t)},eb:function(e,t,n){if(2<=U.version)t&&G.uniform1fv(W(e),j,n>>2,t);else{if(288>=t)for(var r=Dn[t-1],i=0;i<t;++i)r[i]=j[n+4*i>>2];else r=j.subarray(n>>2,n+4*t>>2);G.uniform1fv(W(e),r)}},od:function(e,t){G.uniform1i(W(e),t)},pd:function(e,t,n){if(2<=U.version)t&&G.uniform1iv(W(e),k,n>>2,t);else{if(288>=t)for(var r=On[t-1],i=0;i<t;++i)r[i]=k[n+4*i>>2];else r=k.subarray(n>>2,n+4*t>>2);G.uniform1iv(W(e),r)}},qd:function(e,t,n){G.uniform2f(W(e),t,n)},rd:function(e,t,n){if(2<=U.version)t&&G.uniform2fv(W(e),j,n>>2,2*t);else{if(144>=t)for(var r=Dn[2*t-1],i=0;i<2*t;i+=2)r[i]=j[n+4*i>>2],r[i+1]=j[n+(4*i+4)>>2];else r=j.subarray(n>>2,n+8*t>>2);G.uniform2fv(W(e),r)}},nd:function(e,t,n){G.uniform2i(W(e),t,n)},md:function(e,t,n){if(2<=U.version)t&&G.uniform2iv(W(e),k,n>>2,2*t);else{if(144>=t)for(var r=On[2*t-1],i=0;i<2*t;i+=2)r[i]=k[n+4*i>>2],r[i+1]=k[n+(4*i+4)>>2];else r=k.subarray(n>>2,n+8*t>>2);G.uniform2iv(W(e),r)}},ld:function(e,t,n,r){G.uniform3f(W(e),t,n,r)},kd:function(e,t,n){if(2<=U.version)t&&G.uniform3fv(W(e),j,n>>2,3*t);else{if(96>=t)for(var r=Dn[3*t-1],i=0;i<3*t;i+=3)r[i]=j[n+4*i>>2],r[i+1]=j[n+(4*i+4)>>2],r[i+2]=j[n+(4*i+8)>>2];else r=j.subarray(n>>2,n+12*t>>2);G.uniform3fv(W(e),r)}},jd:function(e,t,n,r){G.uniform3i(W(e),t,n,r)},id:function(e,t,n){if(2<=U.version)t&&G.uniform3iv(W(e),k,n>>2,3*t);else{if(96>=t)for(var r=On[3*t-1],i=0;i<3*t;i+=3)r[i]=k[n+4*i>>2],r[i+1]=k[n+(4*i+4)>>2],r[i+2]=k[n+(4*i+8)>>2];else r=k.subarray(n>>2,n+12*t>>2);G.uniform3iv(W(e),r)}},hd:function(e,t,n,r,i){G.uniform4f(W(e),t,n,r,i)},gd:function(e,t,n){if(2<=U.version)t&&G.uniform4fv(W(e),j,n>>2,4*t);else{if(72>=t){var r=Dn[4*t-1],i=j;n>>=2;for(var a=0;a<4*t;a+=4){var o=n+a;r[a]=i[o],r[a+1]=i[o+1],r[a+2]=i[o+2],r[a+3]=i[o+3]}}else r=j.subarray(n>>2,n+16*t>>2);G.uniform4fv(W(e),r)}},Wc:function(e,t,n,r,i){G.uniform4i(W(e),t,n,r,i)},Xc:function(e,t,n){if(2<=U.version)t&&G.uniform4iv(W(e),k,n>>2,4*t);else{if(72>=t)for(var r=On[4*t-1],i=0;i<4*t;i+=4)r[i]=k[n+4*i>>2],r[i+1]=k[n+(4*i+4)>>2],r[i+2]=k[n+(4*i+8)>>2],r[i+3]=k[n+(4*i+12)>>2];else r=k.subarray(n>>2,n+16*t>>2);G.uniform4iv(W(e),r)}},Yc:function(e,t,n,r){if(2<=U.version)t&&G.uniformMatrix2fv(W(e),!!n,j,r>>2,4*t);else{if(72>=t)for(var i=Dn[4*t-1],a=0;a<4*t;a+=4)i[a]=j[r+4*a>>2],i[a+1]=j[r+(4*a+4)>>2],i[a+2]=j[r+(4*a+8)>>2],i[a+3]=j[r+(4*a+12)>>2];else i=j.subarray(r>>2,r+16*t>>2);G.uniformMatrix2fv(W(e),!!n,i)}},Zc:function(e,t,n,r){if(2<=U.version)t&&G.uniformMatrix3fv(W(e),!!n,j,r>>2,9*t);else{if(32>=t)for(var i=Dn[9*t-1],a=0;a<9*t;a+=9)i[a]=j[r+4*a>>2],i[a+1]=j[r+(4*a+4)>>2],i[a+2]=j[r+(4*a+8)>>2],i[a+3]=j[r+(4*a+12)>>2],i[a+4]=j[r+(4*a+16)>>2],i[a+5]=j[r+(4*a+20)>>2],i[a+6]=j[r+(4*a+24)>>2],i[a+7]=j[r+(4*a+28)>>2],i[a+8]=j[r+(4*a+32)>>2];else i=j.subarray(r>>2,r+36*t>>2);G.uniformMatrix3fv(W(e),!!n,i)}},_c:function(e,t,n,r){if(2<=U.version)t&&G.uniformMatrix4fv(W(e),!!n,j,r>>2,16*t);else{if(18>=t){var i=Dn[16*t-1],a=j;r>>=2;for(var o=0;o<16*t;o+=16){var s=r+o;i[o]=a[s],i[o+1]=a[s+1],i[o+2]=a[s+2],i[o+3]=a[s+3],i[o+4]=a[s+4],i[o+5]=a[s+5],i[o+6]=a[s+6],i[o+7]=a[s+7],i[o+8]=a[s+8],i[o+9]=a[s+9],i[o+10]=a[s+10],i[o+11]=a[s+11],i[o+12]=a[s+12],i[o+13]=a[s+13],i[o+14]=a[s+14],i[o+15]=a[s+15]}}else i=j.subarray(r>>2,r+64*t>>2);G.uniformMatrix4fv(W(e),!!n,i)}},$c:function(e){e=Ht[e],G.useProgram(e),G.bg=e},ad:function(e,t){G.vertexAttrib1f(e,t)},bd:function(e,t){G.vertexAttrib2f(e,j[t>>2],j[t+4>>2])},cd:function(e,t){G.vertexAttrib3f(e,j[t>>2],j[t+4>>2],j[t+8>>2])},dd:function(e,t){G.vertexAttrib4f(e,j[t>>2],j[t+4>>2],j[t+8>>2],j[t+12>>2])},Fc:function(e,t){G.vertexAttribDivisor(e,t)},Gc:function(e,t,n,r,i){G.vertexAttribIPointer(e,t,n,r,i)},ed:function(e,t,n,r,i,a){G.vertexAttribPointer(e,t,n,!!r,i,a)},fd:function(e,t,n,r){G.viewport(e,t,n,r)},kc:function(e,t,n,r){G.waitSync(Zt[e],t,(n>>>0)+4294967296*r)},qb:e=>{var t=E.length;if(e>>>=0,2147483648<e)return!1;for(var n=1;4>=n;n*=2){var r=t*(1+.2/n);r=Math.min(r,e+100663296);var i=Math;r=Math.max(e,r);a:{i=i.min.call(i,2147483648,r+(65536-r%65536)%65536)-S.buffer.byteLength+65535>>>16;try{S.grow(i),N();var a=1;break a}catch{}a=void 0}if(a)return!0}return!1},hb:function(){return U?U.handle:0},rb:(e,t)=>{var n=0;return An().forEach(function(r,i){var a=t+n;for(i=A[e+4*i>>2]=a,a=0;a<r.length;++a)T[i++>>0]=r.charCodeAt(a);T[i>>0]=0,n+=r.length+1}),0},sb:(e,t)=>{var n=An();A[e>>2]=n.length;var r=0;return n.forEach(function(e){r+=e.length+1}),A[t>>2]=r,0},Eb:e=>{x||(r.onExit&&r.onExit(e),w=!0),c(e,new de(e))},M:()=>52,jb:function(){return 52},xb:()=>52,mb:function(){return 70},Q:(e,t,n,r)=>{for(var i=0,a=0;a<n;a++){var o=A[t>>2],s=A[t+4>>2];t+=8;for(var c=0;c<s;c++){var l=E[o+c],u=Mn[e];l===0||l===10?((e===1?v:y)(me(u,0)),u.length=0):u.push(l)}i+=s}return A[r>>2]=i,0},yd:sn,ib:ln,xd:un,Kb:dn,L:yn,P:Sn,fb:Cn,Ib:or,j:tr,o:ir,k:Xn,I:ur,Hb:sr,Fb:fr,W:cr,V:dr,O:er,i:rr,w:$n,v:Qn,s:nr,Gb:lr,Jb:ar,Lb:Zn,ob:(e,t,n,r)=>Ln(e,t,n,r)};(function(){function e(e){if(C=e=e.exports,S=C.zd,N(),P=C.Cd,ee.unshift(C.Ad),I--,r.monitorRunDependencies&&r.monitorRunDependencies(I),I==0&&(re!==null&&(clearInterval(re),re=null),L)){var t=L;L=null,t()}return e}var t={a:Un};if(I++,r.monitorRunDependencies&&r.monitorRunDependencies(I),r.instantiateWasm)try{return r.instantiateWasm(t,e)}catch(e){y(`Module.instantiateWasm callback failed with error: `+e),a(e)}return ue(t,function(t){e(t.instance)}).catch(a),{}})();var Wn=r._malloc=e=>(Wn=r._malloc=C.Bd)(e),Gn=r._free=e=>(Gn=r._free=C.Dd)(e),Kn=e=>(Kn=C.Ed)(e);r.__embind_initialize_bindings=()=>(r.__embind_initialize_bindings=C.Fd)();var qn=(e,t)=>(qn=C.Gd)(e,t),Jn=()=>(Jn=C.Hd)(),Yn=e=>(Yn=C.Id)(e);r.dynCall_viji=(e,t,n,i,a)=>(r.dynCall_viji=C.Jd)(e,t,n,i,a),r.dynCall_vijiii=(e,t,n,i,a,o,s)=>(r.dynCall_vijiii=C.Kd)(e,t,n,i,a,o,s),r.dynCall_viiiiij=(e,t,n,i,a,o,s,c)=>(r.dynCall_viiiiij=C.Ld)(e,t,n,i,a,o,s,c),r.dynCall_jii=(e,t,n)=>(r.dynCall_jii=C.Md)(e,t,n),r.dynCall_vij=(e,t,n,i)=>(r.dynCall_vij=C.Nd)(e,t,n,i),r.dynCall_jiiiiii=(e,t,n,i,a,o,s)=>(r.dynCall_jiiiiii=C.Od)(e,t,n,i,a,o,s),r.dynCall_jiiiiji=(e,t,n,i,a,o,s,c)=>(r.dynCall_jiiiiji=C.Pd)(e,t,n,i,a,o,s,c),r.dynCall_ji=(e,t)=>(r.dynCall_ji=C.Qd)(e,t),r.dynCall_iijj=(e,t,n,i,a,o)=>(r.dynCall_iijj=C.Rd)(e,t,n,i,a,o),r.dynCall_iiiji=(e,t,n,i,a,o)=>(r.dynCall_iiiji=C.Sd)(e,t,n,i,a,o),r.dynCall_iiji=(e,t,n,i,a)=>(r.dynCall_iiji=C.Td)(e,t,n,i,a),r.dynCall_iijjiii=(e,t,n,i,a,o,s,c,l)=>(r.dynCall_iijjiii=C.Ud)(e,t,n,i,a,o,s,c,l),r.dynCall_iij=(e,t,n,i)=>(r.dynCall_iij=C.Vd)(e,t,n,i),r.dynCall_vijjjii=(e,t,n,i,a,o,s,c,l,u)=>(r.dynCall_vijjjii=C.Wd)(e,t,n,i,a,o,s,c,l,u),r.dynCall_jiji=(e,t,n,i,a)=>(r.dynCall_jiji=C.Xd)(e,t,n,i,a),r.dynCall_viijii=(e,t,n,i,a,o,s)=>(r.dynCall_viijii=C.Yd)(e,t,n,i,a,o,s),r.dynCall_iiiiij=(e,t,n,i,a,o,s)=>(r.dynCall_iiiiij=C.Zd)(e,t,n,i,a,o,s),r.dynCall_iiiiijj=(e,t,n,i,a,o,s,c,l)=>(r.dynCall_iiiiijj=C._d)(e,t,n,i,a,o,s,c,l),r.dynCall_iiiiiijj=(e,t,n,i,a,o,s,c,l,u)=>(r.dynCall_iiiiiijj=C.$d)(e,t,n,i,a,o,s,c,l,u);function Xn(e,t,n,r){var i=Jn();try{return P.get(e)(t,n,r)}catch(e){if(Yn(i),e!==e+0)throw e;qn(1,0)}}function Zn(e,t,n,r,i,a,o,s,c,l){var u=Jn();try{P.get(e)(t,n,r,i,a,o,s,c,l)}catch(e){if(Yn(u),e!==e+0)throw e;qn(1,0)}}function Qn(e,t,n,r){var i=Jn();try{P.get(e)(t,n,r)}catch(e){if(Yn(i),e!==e+0)throw e;qn(1,0)}}function $n(e,t,n){var r=Jn();try{P.get(e)(t,n)}catch(e){if(Yn(r),e!==e+0)throw e;qn(1,0)}}function er(e){var t=Jn();try{P.get(e)()}catch(e){if(Yn(t),e!==e+0)throw e;qn(1,0)}}function tr(e,t){var n=Jn();try{return P.get(e)(t)}catch(e){if(Yn(n),e!==e+0)throw e;qn(1,0)}}function nr(e,t,n,r,i){var a=Jn();try{P.get(e)(t,n,r,i)}catch(e){if(Yn(a),e!==e+0)throw e;qn(1,0)}}function rr(e,t){var n=Jn();try{P.get(e)(t)}catch(e){if(Yn(n),e!==e+0)throw e;qn(1,0)}}function ir(e,t,n){var r=Jn();try{return P.get(e)(t,n)}catch(e){if(Yn(r),e!==e+0)throw e;qn(1,0)}}function ar(e,t,n,r,i,a,o){var s=Jn();try{P.get(e)(t,n,r,i,a,o)}catch(e){if(Yn(s),e!==e+0)throw e;qn(1,0)}}function or(e){var t=Jn();try{return P.get(e)()}catch(e){if(Yn(t),e!==e+0)throw e;qn(1,0)}}function sr(e,t,n,r,i,a){var o=Jn();try{return P.get(e)(t,n,r,i,a)}catch(e){if(Yn(o),e!==e+0)throw e;qn(1,0)}}function cr(e,t,n,r,i,a,o,s){var c=Jn();try{return P.get(e)(t,n,r,i,a,o,s)}catch(e){if(Yn(c),e!==e+0)throw e;qn(1,0)}}function lr(e,t,n,r,i,a){var o=Jn();try{P.get(e)(t,n,r,i,a)}catch(e){if(Yn(o),e!==e+0)throw e;qn(1,0)}}function ur(e,t,n,r,i){var a=Jn();try{return P.get(e)(t,n,r,i)}catch(e){if(Yn(a),e!==e+0)throw e;qn(1,0)}}function dr(e,t,n,r,i,a,o,s,c,l){var u=Jn();try{return P.get(e)(t,n,r,i,a,o,s,c,l)}catch(e){if(Yn(u),e!==e+0)throw e;qn(1,0)}}function fr(e,t,n,r,i,a,o){var s=Jn();try{return P.get(e)(t,n,r,i,a,o)}catch(e){if(Yn(s),e!==e+0)throw e;qn(1,0)}}var pr;L=function e(){pr||mr(),pr||(L=e)};function mr(){function e(){if(!pr&&(pr=!0,r.calledRun=!0,!w)){if(fe(ee),i(r),r.onRuntimeInitialized&&r.onRuntimeInitialized(),r.postRun)for(typeof r.postRun==`function`&&(r.postRun=[r.postRun]);r.postRun.length;){var e=r.postRun.shift();te.unshift(e)}fe(te)}}if(!(0<I)){if(r.preRun)for(typeof r.preRun==`function`&&(r.preRun=[r.preRun]);r.preRun.length;)ne();fe(F),0<I||(r.setStatus?(r.setStatus(`Running...`),setTimeout(function(){setTimeout(function(){r.setStatus(``)},1),e()},1)):e())}}if(r.preInit)for(typeof r.preInit==`function`&&(r.preInit=[r.preInit]);0<r.preInit.length;)r.preInit.pop()();return mr(),n.ready})})();typeof t==`object`&&typeof n==`object`?n.exports=r:typeof define==`function`&&define.amd&&define([],()=>r)}))(),1),Xu=null;async function Zu(e){return Xu||(Xu=await(0,Yu.default)({locateFile:e?.locateFile??(e=>{if(!Se){let t=import.meta.resolve(`canvaskit-wasm`);return decodeURIComponent(new URL(e,t).pathname)}let t=`env`in import.meta?`/open-pencil/v0.14.0/`:`/`;return`${t===`/`?``:t.replace(/\/$/,``)}/${e}`})}),Xu)}function Qu(e,t,n,r,i){let a=e.positions;for(let i=0;i<e.glyphs.length;i++){let o=a[i*2]??0,s=a[i*2+1]??r,c=a[(i+1)*2]??o,l=e.offsets[i]??i;t.push({glyphIndex:i,firstCharacter:l,x:o,y:s,advance:c-o}),l>=0&&l<n.length&&(n[l]=o)}let o=e.offsets[e.offsets.length-1],s=a[a.length-2]??i;o>=0&&o<n.length&&(n[o]=s)}function $u(e,t,n){e.startIndex>=t||n.push({firstCharacter:e.startIndex,endCharacter:e.endIndex,position:{x:0,y:e.baseline},width:e.width,lineY:e.startIndex===0?0:e.baseline-Math.abs(e.ascent),lineHeight:e.height,lineAscent:Math.abs(e.ascent)})}async function ed(e){let t=await Zu(),n=p.provider();if(!n)return null;let r=je({ck:t,fontProvider:n,fontsLoaded:!0},e);r.layout(e.textAutoResize===`WIDTH_AND_HEIGHT`?1e6:e.width);let i=r.getShapedLines(),a=r.getLineMetrics();if(i.length===0||a.length===0)return r.delete(),null;let o=a[0],s=[],c=[],l=Array.from({length:e.text.length+1},()=>0);for(let t=0;t<i.length;t++){let n=i[t],r=a[t]??o;for(let e of n.runs)Qu(e,s,l,r.baseline,r.width);$u(r,e.text.length,c)}for(let e=1;e<l.length;e++)l[e]===0&&(l[e]=l[e-1]);return r.delete(),{lineHeight:o.height,lineAscent:Math.abs(o.ascent),lineWidth:o.width,baseline:o.baseline,baselines:c,glyphs:s,logicalIndexToCharacterOffsetMap:l}}var td=new Map;async function nd(e){if(typeof crypto<`u`){let t=await crypto.subtle.digest(`SHA-1`,e);return new Uint8Array(t)}return new Uint8Array(20)}async function rd(e,t){let n=`${e}|${t}`,r=td.get(n);if(r)return r;let i=p.loadedData(e,t);if(!i)return null;let a=await nd(i);return td.set(n,a),a}async function id(e){let t=new Set;for(let n of e.getAllNodes()){if(n.type!==`TEXT`)continue;let e=le(n.fontWeight,n.italic);t.add(`${n.fontFamily}|${e}`);for(let e of n.styleRuns){let r=e.style.fontFamily??n.fontFamily,i=e.style.fontWeight??n.fontWeight,a=e.style.italic??n.italic;t.add(`${r}|${le(i,a)}`)}}let n=new Map;for(let e of t){let[t,r]=e.split(`|`),i=await rd(t,r);i&&n.set(e,i)}return n}var ad={getGlyphOutlineMetrics:g};function od(e,t,n,r,i,a,o,s,c,l=new Map,u,d,f,p){return es(e,t,n,r,i,a,o,s,c,l,u,d,ad,f,p)}function sd(e,t,n,r,i,a){try{let{lines:t}=Ze(Pe(e,`${i}px ${a}`),r,Math.ceil(i*1.2)),n=[],o=0;for(let e of t)o>0&&n.push(o),o+=e.text.length;return n}catch{return cd(e,t,n,r)}}function cd(e,t,n,r){let i=[],a=0,o=0,s=0;for(let c=0;c<t.length;c++){let l=t[c].advance||n,u=e[c];if((u===` `||u===`	`||u===`-`&&c+1<e.length)&&(o=c+1,s=a+l),a>0&&a+l>r+.5){let e=i.length>0?i[i.length-1]:0;o>e?(i.push(o),a-=s):(i.push(c),a=0),o=i[i.length-1],s=0}a+=l}return i}function ld(e,t,n,r){return t.length>0?t.map(e=>({advance:e.advance||n,commands:e.commands})):Array.from({length:e.length},()=>({advance:n||r*.6,commands:[]}))}function ud(e,t,n,r,i){return i?[]:t.length>0?sd(e.text,n,r,e.width,e.fontSize,e.fontFamily):cd(e.text,n,r,e.width)}async function dd(e,t,n,r){let i=le(e.fontWeight,e.italic),a=ge(e.fontFamily),o=`${a}|${i}`,s=e.lineHeight??Math.ceil(e.fontSize*1.2),c=g(e.fontFamily,i,e.text,e.fontSize)??[],l=e.text.length>0?e.width/Math.max(e.text.length,1):0,u=ld(e.text,c,l,e.fontSize),d=Math.max(s-e.fontSize*.2,0),f=ud(e,c,u,l,n),p=new Set(f),m=new Map;if(n)for(let e of n.glyphs)m.set(e.firstCharacter,e);let h=[],_=Array.from({length:e.text.length+1},()=>0),v=0,y=s,b=0,x=u.map((t,i)=>{let a=m.get(i),o=t.advance||l;!a&&p.has(i)&&(h.push({firstCharacter:b,endCharacter:i,position:{x:0,y},width:v,lineHeight:s,lineAscent:d}),b=i,v=0,y+=s);let c=v;return _[i]=c,v+=o,{commandsBlob:r&&t.commands.length>0?r.push(ma(t.commands,e.fontSize))-1:void 0,position:{x:a?.x??c,y:a?.y??n?.baseline??y},fontSize:e.fontSize,firstCharacter:a?.firstCharacter??i,advance:(a?.advance??o)/e.fontSize,rotation:0}});return _[e.text.length]=v,e.text.length>0&&h.push({firstCharacter:b,endCharacter:e.text.length,position:{x:0,y},width:v,lineHeight:s,lineAscent:d}),_i({node:e,glyphs:x,fontMetaData:[{key:{family:a,style:la(e.fontWeight,e.italic),postscript:``},fontLineHeight:1.2,fontDigest:t.get(o),fontStyle:e.italic?`ITALIC`:`NORMAL`,fontWeight:e.fontWeight}],baseline:n?.baseline??s,width:n?.lineWidth??e.width,lineHeight:n?.lineHeight??s,lineAscent:n?.lineAscent??d,baselines:n?n.baselines:h,logicalIndexToCharacterOffsetMap:n?.logicalIndexToCharacterOffsetMap??_})}function fd(e){let t=e.match(/<!--\(openpencil\)(.*?)\(\/openpencil\)-->/s);if(!t)return null;try{let e=at(t[1]),n;try{n=po(e)}catch{n=e}let r=JSON.parse(new TextDecoder().decode(n));if(r.format===`openpencil/v1`&&Array.isArray(r.nodes)){pd(r.nodes);let e=new Map;if(r.images&&typeof r.images==`object`)for(let[t,n]of Object.entries(r.images))typeof n==`string`&&e.set(t,at(n));return{nodes:r.nodes,images:e}}}catch(e){console.warn(`Failed to parse OpenPencil clipboard data:`,e)}return null}function pd(e){for(let t of e)typeof t.textPicture==`string`&&(t.textPicture=at(t.textPicture)),Array.isArray(t.children)&&pd(t.children)}function md(e,t){let n=new Set;function r(e){for(let i of e){for(let e of i.fills)e.imageHash&&n.add(e.imageHash);r(t.getChildren(i.id))}}return r(e),n}function hd(e,t,n){let r=gd(e,t,n),i=md(e,t),a={};for(let e of i){let n=t.images.get(e);n&&(a[e]=tt(n))}let o={format:`openpencil/v1`,nodes:r,images:a};return`<!--(openpencil)${tt(fo(new TextEncoder().encode(JSON.stringify(o))))}(/openpencil)-->`}function gd(e,t,n){return e.map(e=>{let r=t.getChildren(e.id),i={...e};if(e.type===`TEXT`&&e.text&&n){let t=e.textPicture??n(e);t&&(i.textPicture=tt(t))}else delete i.textPicture;return r.length>0&&(i.children=gd(r,t,n)),i})}async function _d(){await Ku()}async function vd(e){let t=e.match(/\(figmeta\)(.*?)\(\/figmeta\)/),n=e.match(/\(figma\)(.*?)\(\/figma\)/s);if(!t||!n)return null;let r=JSON.parse(nt(t[1])),i=at(n[1]);try{let e=Oo(i);if(!e)return null;let t=mu(_u(new lu(po(e[0])))),n=await ko(e[1]),a=t.decodeMessage(n),o=(a.blobs??[]).map(e=>e.bytes instanceof Uint8Array?e.bytes:new Uint8Array(Object.values(e.bytes)));return{nodes:a.nodeChanges??[],meta:r,blobs:o}}catch{return null}}var yd=new Set([`DOCUMENT`,`CANVAS`,`VARIABLE_SET`,`VARIABLE`,`VARIABLE_COLLECTION`,`STYLE`,`STYLE_SET`,`INTERNAL_ONLY_NODE`,`WIDGET`,`STAMP`,`STICKY`,`SHAPE_WITH_TEXT`,`CONNECTOR`,`CODE_BLOCK`,`TABLE_NODE`,`TABLE_CELL`,`SECTION_OVERLAY`,`SLIDE`]);function bd(e){let t=new Map,n=new Map;for(let r of e){if(!r.guid)continue;let e=`${r.guid.sessionID}:${r.guid.localID}`;t.set(e,r),r.parentIndex?.guid&&n.set(e,`${r.parentIndex.guid.sessionID}:${r.parentIndex.guid.localID}`)}return{guidMap:t,parentMap:n}}function xd(e,t){let n=new Set;for(let[t,r]of e)r.type===`CANVAS`&&r.internalOnly&&n.add(t);let r=new Set;function i(e){r.add(e);for(let[n,a]of t)a===e&&!r.has(n)&&i(n)}for(let e of n)i(e);return{internalCanvasIds:n,internalFigmaIds:r}}function Sd(e,t,n){let r=[],i=[];for(let[a,o]of e){if(yd.has(o.type??``))continue;let s=t.get(a);(!s||!e.has(s)||yd.has(e.get(s)?.type??``))&&(s&&n.has(s)?i.push(a):r.push(a))}return{topLevel:r,internalTopLevel:i}}function Cd(e,t){for(let[,n]of e){let r=t.getNode(n);if(r?.type!==`INSTANCE`||!r.componentId)continue;let i=e.get(r.componentId);i&&t.updateNode(n,{componentId:i})}}function wd(e,t){for(let[,n]of e){let e=t.getNode(n);e?.type===`INSTANCE`&&e.childIds.length===0&&(!e.componentId||!t.getNode(e.componentId))&&t.updateNode(n,{type:`FRAME`,componentId:``})}}function Td(e,t,n,r=0,i=0,a=[]){let{guidMap:o,parentMap:s}=bd(e),{internalCanvasIds:c,internalFigmaIds:l}=xd(o,s),{topLevel:u,internalTopLevel:d}=Sd(o,s,c),f=new Map,p=[];function m(e,c){if(f.has(e))return;let u=o.get(e);if(!u)return;let{nodeType:d,...h}=Jr(u,a);if(d===`DOCUMENT`||d===`VARIABLE`)return;qr(u,o.get(s.get(e)??``))&&(h.textAutoResize=`WIDTH_AND_HEIGHT`),c===n&&(h.x=(h.x??0)+r,h.y=(h.y??0)+i);let g=t.createNode(d,c,h);f.set(e,g.id),c===n&&!l.has(e)&&p.push(g.id);let _=[];for(let[t,n]of s)n===e&&!yd.has(o.get(t)?.type??``)&&_.push(t);di(_,u,o);for(let e of _)m(e,g.id)}for(let e of d)m(e,n);for(let e of u)m(e,n);Cd(f,t),au(t,o,f,a);for(let e of d){let n=f.get(e);n&&t.deleteNode(n)}return wd(f,t),p}async function Ed(e,t){let n=qu(),r=fo(Ju()),i=await id(t),a={sessionID:0,localID:0},o={sessionID:0,localID:1},s={value:100},c=[rs(a,t.documentColorSpace),is(o,a,`!`,`Page 1`)],l=[],u=e=>{e.type===`TEXT`&&l.push(e);for(let n of e.childIds){let e=t.getNode(n);e&&u(e)}},d=[];for(let n=0;n<e.length;n++)u(e[n]),c.push(...od(e[n],o,n,s,t,d,void 0,i));let f=[...l];await Promise.all(c.map(async e=>{if(e.type!==`TEXT`)return;let t=f.shift();t&&(e.textAutoResize=`NONE`,e.textUserLayoutVersion=5,e.lineHeight={value:t.lineHeight??100,units:t.lineHeight?`PIXELS`:`PERCENT`},e.derivedTextData=await dd(t,i,await ed(t).catch(()=>null),d))}));let p={type:`NODE_CHANGES`,sessionID:0,ackID:0,pasteID:vt(),pasteFileKey:`openpencil`,nodeChanges:c};d.length>0&&(p.blobs=d.map(e=>({bytes:e})));let m=tt(Ao(r,n.encodeMessage(p))),h={fileKey:`openpencil`,pasteID:p.pasteID,dataType:`scene`};return`<meta charset='utf-8'><span data-metadata="<!--(figmeta)${it(JSON.stringify(h))}(/figmeta)-->"></span><span data-buffer="<!--(figma)${m}(/figma)-->"></span>`}function Dd(e){function t(t,n){if(t.length===0)return;let r=new Map;for(let i of t){let t=e.graph.getNode(i);if(!t)continue;r.set(i,{flipX:t.flipX,flipY:t.flipY});let a=n===`horizontal`?{flipX:!t.flipX}:{flipY:!t.flipY};e.graph.updateNode(i,a)}let i=new Map;for(let[t]of r){let n=e.graph.getNode(t);n&&i.set(t,{flipX:n.flipX,flipY:n.flipY})}e.undo.push({label:`Flip`,forward:()=>{for(let[t,n]of i)e.graph.updateNode(t,n)},inverse:()=>{for(let[t,n]of r)e.graph.updateNode(t,n)}}),e.requestRender()}function n(t,n){if(t.length===0)return;let r=new Map;for(let i of t){let t=e.graph.getNode(i);t&&(r.set(i,t.rotation),e.graph.updateNode(i,{rotation:((t.rotation+n)%360+360)%360}))}let i=new Map;for(let[t]of r){let n=e.graph.getNode(t);n&&i.set(t,n.rotation)}e.undo.push({label:`Rotate`,forward:()=>{for(let[t,n]of i)e.graph.updateNode(t,{rotation:n})},inverse:()=>{for(let[t,n]of r)e.graph.updateNode(t,{rotation:n})}}),e.requestRender()}return{flipNodes:t,rotateNodes:n}}function Od(e,t){let n=new Map;for(let r of t){let t=e.graph.getNode(r);t&&n.set(r,{x:t.x,y:t.y})}return n}function kd(e,t,n,r){e.undo.push({label:t,forward:()=>Ad(e,r),inverse:()=>Ad(e,n)})}function Ad(e,t){for(let[n,r]of t)e.graph.updateNode(n,r),e.runLayoutForNode(n)}function jd(e,t,n,r){return r===`min`?e:r===`center`?(e+t)/2-n/2:t-n}function Md(e,t,n,r){let i=t.parentId?e.graph.getNode(t.parentId):void 0,a=i?.width??0,o=i?.height??0;n===`horizontal`?e.graph.updateNode(t.id,{x:jd(0,a,t.width,r)}):e.graph.updateNode(t.id,{y:jd(0,o,t.height,r)})}function Nd(e,t,n,r){let i=new Map;for(let n of t)i.set(n.id,e.graph.getAbsolutePosition(n.id));let a=x(t,e=>i.get(e)??{x:0,y:0}),o=a.x,s=a.y,c=a.x+a.width,l=a.y+a.height;for(let a of t){if(!i.get(a.id))continue;let t=a.parentId?e.graph.getAbsolutePosition(a.parentId):{x:0,y:0};if(n===`horizontal`){let n=jd(o,c,a.width,r);e.graph.updateNode(a.id,{x:n-t.x})}else{let n=jd(s,l,a.height,r);e.graph.updateNode(a.id,{y:n-t.y})}}}function Pd(e,t){let n=t.parentId?e.graph.getNode(t.parentId):void 0;return!n||n.layoutMode===`NONE`||t.layoutPositioning===`ABSOLUTE`}function Fd(e,t,n){let r=t.parentId?e.graph.getNode(t.parentId):void 0;if(!r)return n;let i=ee.invert(_e(r,e.graph));if(!i)return null;let a=ee.mapPoint(i,{x:0,y:0}),o=ee.mapPoint(i,n);return{x:o.x-a.x,y:o.y-a.y}}function Id(e,t,n){let r=new Map(t.map(t=>[t.id,L(t,e.graph)])),i=n===`horizontal`?`boundX`:`boundY`,a=n===`horizontal`?`width`:`height`,o=[...t].sort((e,t)=>(r.get(e.id)?.[i]??0)-(r.get(t.id)?.[i]??0)||e.id.localeCompare(t.id)),s=o[0],c=o.at(-1);if(!c)return;let l=r.get(s.id)?.[i]??0,u=(r.get(c.id)?.[i]??0)+(r.get(c.id)?.[a]??0),d=o.reduce((e,t)=>e+(r.get(t.id)?.[a]??0),0),f=(u-l-d)/(o.length-1),p=l;for(let t of o){let o=r.get(t.id);if(!o)continue;let s=p-o[i],c=Fd(e,t,n===`horizontal`?{x:s,y:0}:{x:0,y:s});c&&(e.graph.updateNode(t.id,{x:t.x+c.x,y:t.y+c.y}),p+=o[a]+f)}}function Ld(e){function t(t){let n=t.map(t=>e.graph.getNode(t)).filter(e=>e!=null);return n.length>=3&&n.every(t=>Pd(e,t))}function n(t,n,r){if(t.length===0)return;let i=t.map(t=>e.graph.getNode(t)).filter(e=>e!=null);if(i.length===0)return;let a=Od(e,i.map(e=>e.id));i.length===1?Md(e,i[0],n,r):Nd(e,i,n,r),kd(e,`Align`,a,Od(e,a.keys()));for(let n of t)e.runLayoutForNode(n);e.requestRender()}function r(n,r){let i=n.map(t=>e.graph.getNode(t)).filter(e=>e!=null);if(!t(n))return;let a=Od(e,i.map(e=>e.id));Id(e,i,r),kd(e,`Distribute`,a,Od(e,a.keys()));for(let t of n)e.runLayoutForNode(t);e.requestRender()}let{flipNodes:i,rotateNodes:a}=Dd(e);return{alignNodes:n,canDistributeNodes:t,distributeNodes:r,flipNodes:i,rotateNodes:a}}function Rd(e,t){return{duplicateSelected:()=>e.duplicateSelected(t.getSelectedNodes()),writeCopyData:n=>e.writeCopyData(n,t.getSelectedNodes()),pasteFromHTML:e.pasteFromHTML,deleteSelected:e.deleteSelected,storeImage:e.storeImage,placeFiles:e.placeFiles,placeImageFiles:e.placeImageFiles,loadFontsForNodes:e.loadFontsForNodes,copySelectionAsText:e.copySelectionAsText,copySelectionAsSVG:e.copySelectionAsSVG,copySelectionAsJSX:e.copySelectionAsJSX}}function zd(e,t,n,r){return{createComponentFromSelection:()=>e.createComponentFromSelection(t.getSelectedNodes(),n.wrapSelectionInContainer),createComponentSetFromComponents:()=>e.createComponentSetFromComponents(t.getSelectedNodes(),n.wrapSelectionInContainer),createInstanceFromComponent:e.createInstanceFromComponent,detachInstance:()=>e.detachInstance(t.getSelectedNode()),focusComponent:t=>e.focusComponent(t,r.switchPage),goToMainComponent:()=>e.goToMainComponent(t.getSelectedNode(),r.switchPage),getComponentSetPropertyDefs:e.getComponentSetPropertyDefs,addPropertyDefinition:e.addPropertyDefinition,removePropertyDefinition:e.removePropertyDefinition,renamePropertyDefinition:e.renamePropertyDefinition,collectVariantOptions:e.collectVariantOptions,findVariantByValues:e.findVariantByValues,getDefaultVariantForComponentSet:e.getDefaultVariantForComponentSet,getComponentSetVariantConflicts:e.getComponentSetVariantConflicts,switchInstanceVariant:e.switchInstanceVariant,getInstanceComponentPropertyDefinitions:e.getInstanceComponentPropertyDefinitions,getInstanceComponentPropertyValue:e.getInstanceComponentPropertyValue,setInstanceComponentProperty:e.setInstanceComponentProperty}}function Bd(e,t){return{wrapInAutoLayout:()=>e.wrapInAutoLayout(t.getSelectedNodes()),groupSelected:()=>e.groupSelected(t.getSelectedNodes()),frameSelection:()=>e.frameSelection(t.getSelectedNodes()),booleanOperationSelected:n=>e.booleanOperationSelected(t.getSelectedNodes(),n),flattenSelected:()=>e.flattenSelected(t.getSelectedNodes()),outlineTextSelected:()=>e.outlineTextSelected(t.getSelectedNodes()),outlineStrokeSelected:()=>e.outlineStrokeSelected(t.getSelectedNodes()),ungroupSelected:()=>e.ungroupSelected(t.getSelectedNode())}}function Vd(e,t){return{commitMove:e.commitMove,commitMoveWithReparent:e.commitMoveWithReparent,commitDuplicateMove:e.commitDuplicateMove,commitResize:e.commitResize,commitGroupResize:e.commitGroupResize,commitRotation:e.commitRotation,commitNodeUpdate:e.commitNodeUpdate,undoAction:()=>e.undoAction(t.validateEnteredContainer),redoAction:()=>e.redoAction(t.validateEnteredContainer),snapshotPage:e.snapshotPage,restorePageFromSnapshot:e.restorePageFromSnapshot,pushUndoEntry:e.pushUndoEntry}}function Hd(e){if(e.state.enteredContainerId)return e.state.enteredContainerId;let t=[...e.state.selectedIds];if(t.length!==1)return e.state.currentPageId;let n=e.graph.getNode(t[0]);return n?ae.has(n.type)&&n.type!==`CANVAS`?n.id:n.parentId??e.state.currentPageId:e.state.currentPageId}function Ud(e,t,n,r){let i=new e.ck.Path;for(let a of n){let n=r(e,t,a);if(!n)return i.delete(),null;n.transform(ze(e,a)),i.addPath(n),n.delete()}let a=i.getBounds();if(a[2]<=a[0]||a[3]<=a[1])return i.delete(),null;i.transform(e.ck.Matrix.translated(-a[0],-a[1]));let o=Nt(i.toSVGString());return i.delete(),{name:`Flatten`,x:a[0],y:a[1],width:a[2]-a[0],height:a[3]-a[1],fills:C(n[0].fills),vectorNetwork:o}}function Wd(e,t,n){return Ud(e,t,n,(e,t,n)=>Ye(e,n,t))}function Gd(e,t,n){return Ud(e,t,n,(e,t,n)=>Re(e,n,t))}function Kd(e,t){return e[t.id]}function qd(e,t){return e[t.graph]}function q(e,t){let n=Kd(e,t),r=qd(e,t).getNode(n);if(!r)throw Error(`Node ${n} has been removed`);return r}function Jd(e,t,n){qd(e,t).updateNode(Kd(e,t),n)}var Yd=new Set([`x`,`y`,`rotation`,`flipX`,`flipY`]);function Xd(e){return!e.source.editedFields.some(e=>Yd.has(e))}function Zd(e){if(Math.abs(e)<1e-12)return 0;let t=Math.round(e);return Math.abs(e-t)<1e-12?t:e}function Qd(e){return[[Zd(e[0]),Zd(e[1]),Zd(e[2])],[Zd(e[3]),Zd(e[4]),Zd(e[5])]]}function $d(e,t){Object.defineProperties(e,{id:{get(){return Kd(this,t)}},type:{get(){return q(this,t).type}},name:{get(){return q(this,t).name},set(e){qd(this,t).updateNode(Kd(this,t),{name:e})}},removed:{get(){return!qd(this,t).getNode(Kd(this,t))}},x:{get(){return q(this,t).x},set(e){qd(this,t).updateNode(Kd(this,t),{x:e})}},y:{get(){return q(this,t).y},set(e){qd(this,t).updateNode(Kd(this,t),{y:e})}},width:{get(){return q(this,t).width}},height:{get(){return q(this,t).height}},rotation:{get(){let e=q(this,t),n=e.source.fig.rawTransform;return n&&Xd(e)?Math.atan2(-n.m10,n.m00)*(180/Math.PI):e.rotation},set(e){qd(this,t).updateNode(Kd(this,t),{rotation:e})}},relativeTransform:{get(){let e=q(this,t),n=e.source.fig.rawTransform;return n&&Xd(e)?Qd([n.m00,n.m01,n.m02,n.m10,n.m11,n.m12]):Qd(P(e))}},absoluteTransform:{get(){return Qd(_e(q(this,t),qd(this,t)))}},absoluteBoundingBox:{get(){return qd(this,t).getAbsoluteBounds(Kd(this,t))}},absoluteRenderBounds:{get(){return qd(this,t).getAbsoluteBounds(Kd(this,t))}}}),Object.assign(e,{resize(e,n){qd(this,t).updateNode(Kd(this,t),{width:e,height:n})},resizeWithoutConstraints(e,t){this.resize(e,t)}})}function ef(e,t){return e[t.graph]}function tf(e,t){let n=q(e,t);if(!n.parentId)return`NONE`;let r=ef(e,t).getNode(n.parentId);if(!r)return`NONE`;let i=r.layoutMode;return i===`HORIZONTAL`||i===`VERTICAL`?i:`NONE`}function nf(e,t,n,r){let i=q(e,t),a=i.layoutMode===`NONE`?tf(e,t):i.layoutMode,o=(n===`HORIZONTAL`?a===`VERTICAL`:a===`HORIZONTAL`)?{counterAxisSizing:r}:{primaryAxisSizing:r};tf(e,t)===n&&(o.layoutGrow=r===`FILL`?1:0),Jd(e,t,o)}function rf(e,t){Object.defineProperties(e,{layoutMode:sf(t,`layoutMode`),layoutDirection:{get(){let e=q(this,t);return Object.hasOwn(e,`layoutDirection`)?e.layoutDirection:`AUTO`},set(e){Jd(this,t,{layoutDirection:e})}},primaryAxisAlignItems:cf(t,`primaryAxisAlign`),counterAxisAlignItems:cf(t,`counterAxisAlign`),itemSpacing:sf(t,`itemSpacing`),counterAxisSpacing:sf(t,`counterAxisSpacing`),paddingTop:sf(t,`paddingTop`),paddingRight:sf(t,`paddingRight`),paddingBottom:sf(t,`paddingBottom`),paddingLeft:sf(t,`paddingLeft`),layoutWrap:cf(t,`layoutWrap`),primaryAxisSizingMode:af(t,`primaryAxisSizing`),counterAxisSizingMode:af(t,`counterAxisSizing`),counterAxisAlignContent:cf(t,`counterAxisAlignContent`),itemReverseZIndex:sf(t,`itemReverseZIndex`),strokesIncludedInLayout:sf(t,`strokesIncludedInLayout`),layoutPositioning:cf(t,`layoutPositioning`),layoutGrow:sf(t,`layoutGrow`),layoutAlign:{get(){let e=q(this,t);return e.layoutAlignSelf===`AUTO`?`INHERIT`:e.layoutAlignSelf},set(e){Jd(this,t,{layoutAlignSelf:e===`INHERIT`?`AUTO`:e})}},layoutSizingHorizontal:of(t,`HORIZONTAL`),layoutSizingVertical:of(t,`VERTICAL`),constraints:{get(){let e=q(this,t);return{horizontal:e.horizontalConstraint,vertical:e.verticalConstraint}},set(e){Jd(this,t,{horizontalConstraint:e.horizontal,verticalConstraint:e.vertical})}},minWidth:sf(t,`minWidth`),maxWidth:sf(t,`maxWidth`),minHeight:sf(t,`minHeight`),maxHeight:sf(t,`maxHeight`)})}function af(e,t){return{get(){let n=q(this,e)[t];return n===`HUG`?`AUTO`:n},set(n){let r=n===`AUTO`?`HUG`:n;Jd(this,e,{[t]:r})}}}function of(e,t){return{get(){let n=q(this,e),r=n.layoutMode===`NONE`?tf(this,e):n.layoutMode;return r===`NONE`?`FIXED`:r===t?n.primaryAxisSizing:n.counterAxisSizing},set(n){nf(this,e,t,n)}}}function sf(e,t){return{get(){return q(this,e)[t]},set(n){Jd(this,e,{[t]:n})}}}function cf(e,t){return{get(){return q(this,e)[t]},set(n){Jd(this,e,{[t]:n})}}}function lf(e,t){return e[t.graph]}function uf(e,t){Object.defineProperties(e,{explicitVariableModes:{get(){return Object.freeze({...q(this,t).variableModes})}},resolvedVariableModes:{get(){let e=lf(this,t),n=q(this,t),r={};for(let t of e.variableCollections.keys()){let i=e.getNodeVariableModeId(n.id,t);i&&(r[t]=i)}return Object.freeze(r)}}})}var df={vertices:[],segments:[],regions:[]},ff=new Set([`NONE`,`ANGLE`,`ANGLE_AND_LENGTH`]);function pf(e){let t=[];for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!=`object`||!r||!(`data`in r))throw TypeError(`vectorPaths[${n}].data must be a string`);let i=r.data;if(typeof i!=`string`)throw TypeError(`vectorPaths[${n}].data must be a string`);let a=`windingRule`in r?r.windingRule:void 0;if(a!==`NONZERO`&&a!==`EVENODD`&&a!==`NONE`)throw TypeError(`vectorPaths[${n}].windingRule is invalid`);let o=Pt(i,a);if(!o.ok)throw TypeError(`Invalid vector path: ${o.error}`);o.network.segments.length>0&&t.push(o.network)}return t.length>0?D(t):structuredClone(df)}function mf(e){let t=e.regions??[];return v({vertices:e.vertices.map(e=>({...e})),segments:e.segments.map(e=>({...e,tangentStart:{x:e.tangentStart?.x??0,y:e.tangentStart?.y??0},tangentEnd:{x:e.tangentEnd?.x??0,y:e.tangentEnd?.y??0}})),regions:t.map(e=>({windingRule:e.windingRule,loops:e.loops.map(e=>[...e])}))})}function hf(e){for(let t=0;t<e.length;t++){let n=e[t];if(n.fills!==void 0&&!Array.isArray(n.fills))throw TypeError(`vectorNetwork.regions[${t}].fills must be an array`);if(n.fillStyleId!==void 0&&typeof n.fillStyleId!=`string`)throw TypeError(`vectorNetwork.regions[${t}].fillStyleId must be a string`)}}function gf(e){return e.some(e=>e.fills!==void 0||e.fillStyleId!==void 0)?e.map(e=>({windingRule:e.windingRule,commandsBlob:new Uint8Array,fills:e.fills?C([...e.fills]):[],fillStyleId:e.fillStyleId??``})):[]}function _f(e,t,n,r){let i=q(e,t),a=Ne(n),o=n.vertices.length>0,s=o?I([1,0,-a.x,0,1,-a.y,0,0,1],n):structuredClone(df),c=r.length>0?Qe(s,r):[];Jd(e,t,{x:o?i.x+a.x:i.x,y:o?i.y+a.y:i.y,width:o?a.width:0,height:o?a.height:0,vectorNetwork:s,fillGeometry:c,strokeGeometry:[]})}function vf(e,t,n){let r=he(n);if(r.length>0)throw TypeError(`Invalid vectorNetwork: ${r.join(`; `)}`);hf(n.regions??[]),_f(e,t,mf(n),gf(n.regions??[]))}function yf(e){if(e.segments.length===0)return[];let t=e.regions??[];if(t.length===0)return At({...e,regions:t},null).map(e=>({windingRule:`NONE`,data:e}));let n=[],r=new Set;for(let i of t){for(let e of i.loops)for(let t of e)r.add(t);let t=At({...e,regions:[i]},null)[0];t&&n.push({windingRule:i.windingRule,data:t})}let i=e.segments.filter((e,t)=>!r.has(t));if(i.length>0){let t=At({vertices:e.vertices,segments:i,regions:[]},null)[0];t&&n.push({windingRule:`NONE`,data:t})}return n}function bf(e,t){let n=q(e,t),r=n.vectorNetwork&&n.vectorNetwork.segments.length>0?yf(n.vectorNetwork):n.fillGeometry.map(e=>({windingRule:e.windingRule,data:Tt(e.commandsBlob,null)}));return Object.freeze(r.map(e=>Object.freeze(e)))}function xf(e,t){let n=q(e,t),r=n.vectorNetwork??df,i=r.vertices.map(e=>Object.freeze({...e,strokeCap:e.strokeCap??n.strokeCap,strokeJoin:e.strokeJoin??n.strokeJoin,cornerRadius:e.cornerRadius??0,handleMirroring:e.handleMirroring??`NONE`})),a=r.segments.map(e=>Object.freeze({...e,tangentStart:Object.freeze({...e.tangentStart}),tangentEnd:Object.freeze({...e.tangentEnd})})),o=(r.regions??[]).map((e,t)=>{let r=n.fillGeometry.at(t);return Object.freeze({windingRule:e.windingRule,loops:Object.freeze(e.loops.map(e=>Object.freeze([...e]))),fillStyleId:r?.fillStyleId??``,fills:Object.freeze(C(r?.fills??[]))})});return Object.freeze({vertices:Object.freeze(i),segments:Object.freeze(a),regions:Object.freeze(o)})}function Sf(e,t,n){let r=q(e,t),i=new Set((r.vectorNetwork?.vertices??[]).map(e=>e.handleMirroring??`NONE`));return i.size===0?r.handleMirroring:i.size>1?n:i.values().next().value??r.handleMirroring}function Cf(e,t,n){Object.defineProperties(e,{vectorPaths:{get(){return bf(this,t)},set(e){if(!Array.isArray(e))throw TypeError(`vectorPaths must be an array`);_f(this,t,pf(e),[])},enumerable:!0,configurable:!0},vectorNetwork:{get(){return xf(this,t)},set(e){vf(this,t,e)},enumerable:!0,configurable:!0},setVectorNetworkAsync:{value(e){return Promise.resolve().then(()=>vf(this,t,e))},enumerable:!0,configurable:!0},handleMirroring:{get(){return Sf(this,t,n)},set(e){if(!ff.has(e))throw TypeError(`Invalid handleMirroring: ${String(e)}`);let n=q(this,t);Jd(this,t,{handleMirroring:e,vectorNetwork:n.vectorNetwork?{...n.vectorNetwork,vertices:n.vectorNetwork.vertices.map(t=>({...t,handleMirroring:e}))}:null})},enumerable:!0,configurable:!0}})}function wf(e,t,n){Object.defineProperties(e,{fills:{get(){return Object.freeze(C(q(this,t).fills))},set(e){Jd(this,t,{fills:e.map(e=>({...e,color:ft(e.color),gradientStops:e.gradientStops?.map(e=>({...e,color:ft(e.color)}))}))})}},strokes:{get(){return Object.freeze(T(q(this,t).strokes))},set(e){Jd(this,t,{strokes:e.map(e=>({...e,color:ft(e.color)}))})}},effects:{get(){return Object.freeze(y(q(this,t).effects))},set(e){Jd(this,t,{effects:e.map(e=>({...e,color:ft(e.color)}))})}},opacity:{get(){return q(this,t).opacity},set(e){Jd(this,t,{opacity:e})}},visible:{get(){return q(this,t).visible},set(e){Jd(this,t,{visible:e})}},locked:{get(){return q(this,t).locked},set(e){Jd(this,t,{locked:e})}},blendMode:{get(){return q(this,t).blendMode},set(e){Jd(this,t,{blendMode:e})}},clipsContent:{get(){return q(this,t).clipsContent},set(e){Jd(this,t,{clipsContent:e})}},cornerRadius:{get(){let e=q(this,t);return e.independentCorners?n:e.cornerRadius},set(e){e!==n&&Jd(this,t,{cornerRadius:e,topLeftRadius:e,topRightRadius:e,bottomRightRadius:e,bottomLeftRadius:e,independentCorners:!1})}},topLeftRadius:Tf(t,`topLeftRadius`),topRightRadius:Tf(t,`topRightRadius`),bottomLeftRadius:Tf(t,`bottomLeftRadius`),bottomRightRadius:Tf(t,`bottomRightRadius`),cornerSmoothing:{get(){return q(this,t).cornerSmoothing},set(e){Jd(this,t,{cornerSmoothing:e})}}})}function Tf(e,t){return{get(){return q(this,e)[t]},set(n){Jd(this,e,{[t]:n,independentCorners:!0})}}}var Ef=`open-pencil`;function Df(e){return e.pluginId===Ef}function Of(e,t){let n=`${t}/`;return e.pluginId!==t||!e.key.startsWith(n)?null:e.key.slice(n.length)}function kf(e){return Of(e,e.pluginId)!==null}function Af(e,t,n){let r=Of(e,t);return r===null?Df(e)?!1:e.pluginId===t&&e.key===n:r===n}function jf(e,t){let n=Of(e,t);return n===null?Df(e)?null:e.pluginId===t?e.key:null:n}function Mf(e,t){return e.pluginData.find(e=>Df(e)&&e.key===t)?.value??``}function Nf(e,t,n,r){let i=t.pluginData.filter(e=>!(Df(e)&&e.key===n));r!==``&&i.push({pluginId:Ef,key:n,value:r}),e.updateNode(t.id,{pluginData:i})}function Pf(e){return e.pluginData.filter(e=>Df(e)&&!kf(e)).map(e=>e.key)}function Ff(e,t,n){return e.pluginData.find(e=>Af(e,t,n))?.value??``}function If(e,t,n,r,i){let a=t.pluginData.filter(e=>!Af(e,n,r));i!==``&&a.push({pluginId:n,key:`${n}/${r}`,value:i}),e.updateNode(t.id,{pluginData:a})}function Lf(e,t){return e.pluginData.flatMap(e=>{let n=jf(e,t);return n===null?[]:[n]})}function Rf(e,t){if(Object.keys(t.boundVariables).length===0)return;let n={};for(let[r,i]of Object.entries(t.boundVariables)){let t=e.variables.get(i);n[r]={variableId:i,variableName:t?.name??i,resolvedValue:t?e.resolveVariable(i):void 0}}return n}function zf(e,t){e.fontFamily=t.fontFamily,e.fontSize=t.fontSize,e.fontWeight=t.fontWeight,e.italic=t.italic,e.textAlignHorizontal=t.textAlignHorizontal,e.textAlignVertical=t.textAlignVertical,e.textAutoResize=t.textAutoResize,e.textDirection=t.textDirection,t.lineHeight!=null&&(e.lineHeight=t.lineHeight),t.letterSpacing!==0&&(e.letterSpacing=t.letterSpacing),t.textCase!==`ORIGINAL`&&(e.textCase=t.textCase),t.textDecoration!==`NONE`&&(e.textDecoration=t.textDecoration),t.maxLines!=null&&(e.maxLines=t.maxLines)}function Bf(e,t,n,r,i=0){let a=e.getNode(n);if(!a)return{id:n,removed:!0};let o={id:a.id,type:a.type,name:a.name,x:a.x,y:a.y,width:a.width,height:a.height};a.fills.length>0&&(o.fills=a.fills),a.strokes.length>0&&(o.strokes=a.strokes),a.effects.length>0&&(o.effects=a.effects),a.opacity!==1&&(o.opacity=a.opacity),a.cornerRadius>0&&(o.cornerRadius=a.cornerRadius),a.visible||(o.visible=!1),a.text&&(o.characters=a.text),a.type===`TEXT`&&zf(o,a),a.layoutMode!==`NONE`&&(o.layoutMode=a.layoutMode,o.layoutDirection=a.layoutDirection,o.itemSpacing=a.itemSpacing);let s=Rf(e,a);s&&(o.boundVariables=s);let c=e.getChildren(n);return c.length>0&&(r!==void 0&&i>=r?o.childCount=c.length:o.children=c.map(e=>t.wrapNode(e.id).toJSON(r,i+1))),o}function Vf(e,t,n){if(t.strokes.length===0)return;let r=T(t.strokes);r[0].weight=n,e.updateNode(t.id,{strokes:r})}function Hf(e,t,n){if(t.strokes.length===0)return;let r=T(t.strokes);r[0].align=n,e.updateNode(t.id,{strokes:r})}function Uf(e,t,n,r){e.updateNode(t,{[n]:r,independentStrokeWeights:!0})}function Wf(e,t){let n=R[e]??`Regular`;return t?`${n} Italic`:n}var Gf=Object.fromEntries([...Object.entries(R).map(([e,t])=>[t.toLowerCase(),Number(e)]),[`ultra light`,200],[``,400],[`demi bold`,600],[`ultra bold`,800],[`heavy`,900]]);function Kf(e){let t=e.toLowerCase(),n=t.includes(`italic`);return{weight:Gf[t.replace(/italic/i,``).trim()]??400,italic:n}}function qf(e){return{family:e.fontFamily,style:Wf(e.fontWeight,e.italic)}}function Jf(e,t,n){let{weight:r,italic:i}=Kf(n.style);e.updateNode(t,{fontFamily:n.family,fontWeight:r,italic:i})}function Yf(e,t,n,r){let i=t.text.slice(0,n)+r+t.text.slice(n);e.updateNode(t.id,{text:i})}function Xf(e,t,n,r){let i=t.text.slice(0,n)+t.text.slice(r);e.updateNode(t.id,{text:i})}function Zf(e,t,n,r){let i=[],a=n=>{for(let o of e.getChildren(n)){let e=t.wrapNode(o.id);(!r||r(e))&&i.push(e),a(o.id)}};return a(n),i}function Qf(e,t,n,r){let i=n=>{for(let a of e.getChildren(n)){let e=t.wrapNode(a.id);if(r(e))return e;let n=i(a.id);if(n)return n}return null};return i(n)}function $f(e,t,n,r){for(let i of e.getChildren(n)){let e=t.wrapNode(i.id);if(r(e))return e}return null}function ep(e,t,n,r){return e.getChildren(n).map(e=>t.wrapNode(e.id)).filter(e=>!r||r(e))}function tp(e,t,n,r){let i=r.types?new Set(r.types):null;return Zf(e,t,n,e=>!i||i.has(e.type))}var np=Symbol(`mixed`),J=Symbol(`id`),Y=Symbol(`graph`),rp=Symbol(`api`),ip=class{[J];[Y];[rp];constructor(e,t,n){this[J]=e,this[Y]=t,this[rp]=n,t.getNode(e)?.type===`VECTOR`&&Cf(this,{id:J,graph:Y,api:rp},np)}_raw(){let e=this[Y].getNode(this[J]);if(!e)throw Error(`Node ${this[J]} has been removed`);return e}get strokeWeight(){let e=this._raw().strokes;return e.length>0?e[0].weight:0}set strokeWeight(e){Vf(this[Y],this._raw(),e)}get strokeAlign(){let e=this._raw().strokes;return e.length>0?e[0].align:`INSIDE`}set strokeAlign(e){Hf(this[Y],this._raw(),e)}get dashPattern(){return Object.freeze([...this._raw().dashPattern])}set dashPattern(e){this[Y].updateNode(this[J],{dashPattern:[...e]})}get strokeCap(){return this._raw().strokeCap}set strokeCap(e){let t=e,n=this._raw();this[Y].updateNode(this[J],{strokeCap:t,strokes:n.strokes.map(e=>({...e,cap:t}))})}get strokeJoin(){return this._raw().strokeJoin}set strokeJoin(e){let t=e,n=this._raw();this[Y].updateNode(this[J],{strokeJoin:t,strokes:n.strokes.map(e=>({...e,join:t}))})}get strokeMiterLimit(){return this._raw().strokeMiterLimit}set strokeMiterLimit(e){this[Y].updateNode(this[J],{strokeMiterLimit:e})}get strokeTopWeight(){return this._raw().borderTopWeight}set strokeTopWeight(e){Uf(this[Y],this[J],`borderTopWeight`,e)}get strokeBottomWeight(){return this._raw().borderBottomWeight}set strokeBottomWeight(e){Uf(this[Y],this[J],`borderBottomWeight`,e)}get strokeLeftWeight(){return this._raw().borderLeftWeight}set strokeLeftWeight(e){Uf(this[Y],this[J],`borderLeftWeight`,e)}get strokeRightWeight(){return this._raw().borderRightWeight}set strokeRightWeight(e){Uf(this[Y],this[J],`borderRightWeight`,e)}get characters(){return this._raw().text}set characters(e){this[Y].updateNode(this[J],{text:e})}get fontSize(){return this._raw().fontSize}set fontSize(e){this[Y].updateNode(this[J],{fontSize:e})}get fontName(){return qf(this._raw())}set fontName(e){Jf(this[Y],this[J],e)}get fontWeight(){return this._raw().fontWeight}set fontWeight(e){this[Y].updateNode(this[J],{fontWeight:e})}get textAlignHorizontal(){return this._raw().textAlignHorizontal}set textAlignHorizontal(e){this[Y].updateNode(this[J],{textAlignHorizontal:e})}get textDirection(){return this._raw().textDirection}set textDirection(e){this[Y].updateNode(this[J],{textDirection:e})}get textAlignVertical(){return this._raw().textAlignVertical}set textAlignVertical(e){this[Y].updateNode(this[J],{textAlignVertical:e})}get textAutoResize(){return this._raw().textAutoResize}set textAutoResize(e){this[Y].updateNode(this[J],{textAutoResize:e})}get letterSpacing(){return this._raw().letterSpacing}set letterSpacing(e){this[Y].updateNode(this[J],{letterSpacing:e})}get lineHeight(){return this._raw().lineHeight}set lineHeight(e){this[Y].updateNode(this[J],{lineHeight:e})}get textCase(){return this._raw().textCase}set textCase(e){this[Y].updateNode(this[J],{textCase:e})}get textDecoration(){return this._raw().textDecoration}set textDecoration(e){this[Y].updateNode(this[J],{textDecoration:e})}get maxLines(){return this._raw().maxLines}set maxLines(e){this[Y].updateNode(this[J],{maxLines:e})}get textTruncation(){return this._raw().textTruncation}set textTruncation(e){this[Y].updateNode(this[J],{textTruncation:e})}get autoRename(){return this._raw().autoRename}set autoRename(e){this[Y].updateNode(this[J],{autoRename:e})}insertCharacters(e,t){Yf(this[Y],this._raw(),e,t)}deleteCharacters(e,t){Xf(this[Y],this._raw(),e,t)}get isMask(){return this._raw().isMask}set isMask(e){this[Y].updateNode(this[J],{isMask:e})}get maskType(){return this._raw().maskType}set maskType(e){this[Y].updateNode(this[J],{maskType:e})}get expanded(){return this._raw().expanded}set expanded(e){this[Y].updateNode(this[J],{expanded:e})}get mainComponent(){let e=this._raw();if(!e.componentId)return null;let t=this[Y].getNode(e.componentId);return t?this[rp].wrapNode(t.id):null}createInstance(){let e=this._raw();if(e.type!==`COMPONENT`)throw Error(`createInstance() can only be called on components`);let t=this[rp].currentPageId,n=this[Y].createInstance(e.id,t);if(!n)throw Error(`Failed to create instance`);return this[rp].wrapNode(n.id)}get parent(){let e=this._raw();return e.parentId?this[rp].wrapNode(e.parentId):null}get children(){return this[Y].getChildren(this[J]).map(e=>this[rp].wrapNode(e.id))}appendChild(e){this[Y].reparentNode(e[J],this[J])}insertChild(e,t){this[Y].reparentNode(t[J],this[J]),this[Y].reorderChild(t[J],this[J],e)}clone(){let e=this._raw().parentId??this[rp].currentPageId,t=this[Y].cloneTree(this[J],e);if(!t)throw Error(`Failed to clone node ${this[J]}`);return this[rp].wrapNode(t.id)}remove(){this[Y].deleteNode(this[J])}findAll(e){return Zf(this[Y],this[rp],this[J],e)}findOne(e){return Qf(this[Y],this[rp],this[J],e)}findChild(e){return $f(this[Y],this[rp],this[J],e)}findChildren(e){return ep(this[Y],this[rp],this[J],e)}findAllWithCriteria(e){return tp(this[Y],this[rp],this[J],e)}getPluginData(e){return Mf(this._raw(),e)}setPluginData(e,t){Nf(this[Y],this._raw(),e,t)}getPluginDataKeys(){return Pf(this._raw())}getSharedPluginData(e,t){return Ff(this._raw(),e,t)}setSharedPluginData(e,t,n){If(this[Y],this._raw(),e,t,n)}getSharedPluginDataKeys(e){return Lf(this._raw(),e)}getFillOkHCL(e=0){return pt(this._raw(),e)}setFillOkHCL(e,t=0){this[Y].updateNode(this[J],ut(this._raw(),t,e))}getStrokeOkHCL(e=0){return lt(this._raw(),e)}setStrokeOkHCL(e,t=0){this[Y].updateNode(this[J],dt(this._raw(),t,e))}toJSON(e,t=0){return Bf(this[Y],this[rp],this[J],e,t)}toString(){let e=this._raw();return`[${e.type} "${e.name}" ${e.id}]`}[Symbol.for(`nodejs.util.inspect.custom`)](){return this.toString()}};$d(ip.prototype,{id:J,graph:Y,api:rp}),wf(ip.prototype,{id:J,graph:Y,api:rp},np);var ap={id:J,graph:Y,api:rp};rf(ip.prototype,ap),uf(ip.prototype,ap);var op=()=>void 0,sp=class{graph;_currentPageId;_selection=[];_nodeCache=new Map;_pageProxies=new WeakSet;_renderer=null;mixed=np;constructor(e){this.graph=e,this._currentPageId=e.getPages()[0]?.id??e.rootId}setRenderer(e){this._renderer=e}get currentPageId(){return this._currentPageId}wrapNode(e){let t=this._nodeCache.get(e);return t||(t=new ip(e,this.graph,this),this._nodeCache.set(e,t)),t}_ensurePageProxy(e){return this._pageProxies.has(e)||(Object.defineProperty(e,`selection`,{get:()=>this._selection,set:e=>{this._selection=e},enumerable:!0,configurable:!0}),this._pageProxies.add(e)),e}get root(){return this.wrapNode(this.graph.rootId)}get currentPage(){return this._ensurePageProxy(this.wrapNode(this._currentPageId))}set currentPage(e){this._currentPageId=e[J]}getNodeById(e){return this.graph.getNode(e)?this.wrapNode(e):null}_createNode(e){let t=this.graph.createNode(e,this._currentPageId);return this.wrapNode(t.id)}createFrame(){return this._createNode(`FRAME`)}createRectangle(){return this._createNode(`RECTANGLE`)}createEllipse(){return this._createNode(`ELLIPSE`)}createText(){return this._createNode(`TEXT`)}createLine(){return this._createNode(`LINE`)}createPolygon(){return this._createNode(`POLYGON`)}createStar(){return this._createNode(`STAR`)}createVector(){return this._createNode(`VECTOR`)}createComponent(){return this._createNode(`COMPONENT`)}createSection(){return this._createNode(`SECTION`)}createPage(){let e=this.graph.addPage(`Page`);return this.wrapNode(e.id)}_nodeId(e){return e[J]}group(e,t,n){let r=this._nodeId(t),i=this.graph.createNode(`GROUP`,r);for(let t of e)this.graph.reparentNode(this._nodeId(t),i.id);return n!=null&&this.graph.reorderChild(i.id,r,n),this.wrapNode(i.id)}ungroup(e){let t=this._nodeId(e),n=this.graph.getNode(t);if(!n||n.childIds.length===0)return[];let r=n.parentId??this._currentPageId,i=Array.from(n.childIds);for(let e of i)this.graph.reparentNode(e,r);return this.graph.deleteNode(t),i.map(e=>this.wrapNode(e))}createComponentFromNode(e){let t=this.graph.getNode(e[J]);if(!t)throw Error(`Node not found`);let n=t.parentId??this._currentPageId,r=this.graph.createNode(`COMPONENT`,n);this.graph.updateNode(r.id,{name:t.name,width:t.width,height:t.height,x:t.x,y:t.y,fills:C(t.fills),strokes:T(t.strokes),effects:y(t.effects),cornerRadius:t.cornerRadius,topLeftRadius:t.topLeftRadius,topRightRadius:t.topRightRadius,bottomRightRadius:t.bottomRightRadius,bottomLeftRadius:t.bottomLeftRadius,independentCorners:t.independentCorners,opacity:t.opacity,layoutMode:t.layoutMode,primaryAxisAlign:t.primaryAxisAlign,counterAxisAlign:t.counterAxisAlign,itemSpacing:t.itemSpacing,paddingTop:t.paddingTop,paddingRight:t.paddingRight,paddingBottom:t.paddingBottom,paddingLeft:t.paddingLeft,pluginData:structuredClone(t.pluginData),pluginRelaunchData:structuredClone(t.pluginRelaunchData)});for(let e of t.childIds)this.graph.cloneTree(e,r.id);return this.graph.deleteNode(e[J]),this.wrapNode(r.id)}getVariableById(e){return this.graph.variables.get(e)??null}getLocalVariables(e){let t=[...this.graph.variables.values()];return e?t.filter(t=>t.type===e):t}getLocalVariableCollections(){return[...this.graph.variableCollections.values()]}getVariableCollectionById(e){return this.graph.variableCollections.get(e)??null}createVariable(e,t,n,r){return this.graph.createVariable(e,t,n,r)}setVariableValue(e,t,n){let r=this.graph.variables.get(e);if(!r)throw Error(`Variable "${e}" not found`);r.valuesByMode[t]=n}deleteVariable(e){this.graph.removeVariable(e)}createVariableCollection(e){return this.graph.createCollection(e)}deleteVariableCollection(e){this.graph.removeCollection(e)}bindVariable(e,t,n){this.graph.bindVariable(e,t,n)}unbindVariable(e,t){this.graph.unbindVariable(e,t)}_booleanOperation(e,t,n,r){if(t.length<2)throw Error(`Need at least 2 nodes for boolean operation`);let i=this._nodeId(n),a=this.graph.getNode(this._nodeId(t[0]));if(!a)throw Error(`Node not found`);let o=this.graph.createNode(`BOOLEAN_OPERATION`,i,{name:`Boolean ${e.toLowerCase()}`,x:a.x,y:a.y,width:a.width,height:a.height,booleanOperation:e});for(let e of t)this.graph.reparentNode(this._nodeId(e),o.id);return r!=null&&this.graph.reorderChild(o.id,i,r),this.wrapNode(o.id)}_nodesById(e){return e.map(e=>{let t=this.getNodeById(e);if(!t)throw Error(`Node ${e} not found`);return t})}booleanOperation(e,t){let n=this.graph.getNode(t[0]),r=this.wrapNode(n?.parentId??this._currentPageId);return this._booleanOperation(e,this._nodesById(t),r)}union(e,t,n){return this._booleanOperation(`UNION`,e,t,n)}subtract(e,t,n){return this._booleanOperation(`SUBTRACT`,e,t,n)}intersect(e,t,n){return this._booleanOperation(`INTERSECT`,e,t,n)}exclude(e,t,n){return this._booleanOperation(`EXCLUDE`,e,t,n)}flatten(e,t,n){if(e.length===0)throw Error(`Need at least 1 node to flatten`);let r=this._nodeId(t??this.currentPage),i=[];for(let t of e){let e=this.graph.getNode(this._nodeId(t));if(!e)throw Error(`Node not found`);i.push(e)}let a=this._renderer?this._flattenWithRenderer(i,r):this._flattenPlaceholder(i,r);n!=null&&this.graph.reorderChild(a.id,r,n);for(let t of e)this.graph.deleteNode(this._nodeId(t));return this.wrapNode(a.id)}_flattenPlaceholder(e,t){let n=e[0];return this.graph.createNode(`VECTOR`,t,{name:`Flatten`,x:n.x,y:n.y,width:n.width,height:n.height,fills:C(n.fills)})}_flattenWithRenderer(e,t){let n=this._renderer;if(!n)return this._flattenPlaceholder(e,t);if(e.some(e=>!Le(e,this.graph)))throw Error(`Cannot flatten unsupported node type`);let r=Wd(n,this.graph,e);if(!r)throw Error(`Cannot flatten empty node path`);return this.graph.createNode(`VECTOR`,t,r)}flattenNode(e){let t=this.graph.getNode(e[0]),n=this.wrapNode(t?.parentId??this._currentPageId);return this.flatten(this._nodesById(e),n)}_viewport={x:0,y:0,zoom:1};get viewport(){return{center:{x:this._viewport.x,y:this._viewport.y},zoom:this._viewport.zoom,scrollAndZoomIntoView:e=>{let t=E(e.map(e=>e.absoluteBoundingBox));if(t.width===0&&t.height===0&&e.length===0)return;let n=t.width+160,r=t.height+160,i=Se?window.innerWidth:1280,a=Se?window.innerHeight:720,o=Math.min(i/n,a/r,1);this._viewport={x:t.x+t.width/2,y:t.y+t.height/2,zoom:o}}}}set viewport(e){this._viewport={x:e.center.x,y:e.center.y,zoom:e.zoom}}createImage(e){let t=ne(e);return this.graph.images.set(t,e),{hash:t}}async loadFontAsync(e){}async listAvailableFontsAsync(){return[]}base64Encode(e){return tt(e)}base64Decode(e){return at(e)}notify(e){return typeof console<`u`&&console.warn(`[figma.notify] ${e}`),{cancel:op}}commitUndo(){}triggerUndo(){}exportImage};function cp(e){for(let t of e){if(t.pluginData&&t.pluginData.length>1){let e=new Map;for(let n of t.pluginData)e.set(`${n.pluginID}\0${n.key}\0${n.value}`,n);e.size<t.pluginData.length&&(t.pluginData=[...e.values()])}if(t.pluginRelaunchData&&t.pluginRelaunchData.length>1){let e=new Map;for(let n of t.pluginRelaunchData)e.set(`${n.pluginID}\0${n.command}\0${n.message}\0${n.isDeleted}`,n);e.size<t.pluginRelaunchData.length&&(t.pluginRelaunchData=[...e.values()])}}}function lp(e){if(new TextDecoder().decode(e.slice(0,8))!==`fig-kiwi`)return null;let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=t.getUint32(8,!0),r=12,i=[];for(;r<e.length&&!(r+4>e.length);){let n=t.getUint32(r,!0);if(r+=4,r+n>e.length)throw Error(`Corrupted .fig file: chunk at offset ${r-4} declares length ${n} but only ${e.length-r} bytes remain`);i.push(e.slice(r,r+n)),r+=n}if(i.length<2)return null;let a=i[1],o;return o=Uu(a)?et(a):po(a),{schemaDeflated:i[0],dataRaw:o,version:n}}function up(e){let t=lp(e);if(!t)throw Error(`Invalid fig-kiwi container`);let n=mu(_u(new lu(po(t.schemaDeflated)))).decodeMessage(t.dataRaw),r=n.nodeChanges;if(!r||r.length===0)throw Error(`No nodes found in .fig file`);return cp(r),{nodeChanges:r,blobs:(n.blobs??[]).map(e=>e.bytes instanceof Uint8Array?e.bytes:new Uint8Array(Object.values(e.bytes))),figKiwiVersion:t.version,figSchemaDeflated:t.schemaDeflated}}function dp(e){let t=e.toLowerCase();return t.endsWith(`.png`)||t.endsWith(`.jpg`)||t.endsWith(`.json`)}function fp(e){let t=e[`canvas.fig`]??e.canvas;if(t)return t;let n=null;for(let[t,r]of Object.entries(e))!r||dp(t)||(!n||r.byteLength>n.byteLength)&&(n=r);return n}function pp(e){let t=Do(new Uint8Array(e)),n=fp(t);if(!n)throw Error(`No canvas data found in .fig file. Entries: ${Object.keys(t).join(`, `)}`);let r=up(n),i=t[`meta.json`],a=Object.entries(t).filter(([e])=>e.startsWith(`images/`)&&e!==`images/`).map(([e,t])=>[e.slice(7),t]);return{...r,images:a,thumbnailPNG:t[`thumbnail.png`]??null,metaJSON:Object.hasOwn(t,`meta.json`)?new TextDecoder().decode(i):null}}function mp(e){let t=Ao(e.schemaDeflated,e.kiwiData,e.figKiwiVersion),n={"canvas.fig":[t,{level:0}],"thumbnail.png":[e.thumbnailPNG,{level:0}],"meta.json":new TextEncoder().encode(e.metaJSON)};for(let t of e.images??[])n[t.name]=[t.data,{level:0}];return Eo(n)}function hp(e,t,n,r,i,a){return mp({schemaDeflated:e,kiwiData:t,thumbnailPNG:n,metaJSON:r,images:i,figKiwiVersion:a})}var gp=101010256,_p=33639248,vp=67324752,yp=22,bp=65535,xp=4*1024*1024,Sp=8*1024*1024,Cp=16*1024*1024,wp=`thumbnail.png`,Tp=new Uint8Array([137,80,78,71,13,10,26,10]);function Ep(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function Dp(e){let t=Ep(e);for(let n=e.byteLength-yp;n>=0;n--)if(t.getUint32(n,!0)===gp)return n;return-1}function Op(e,t){return Number.isFinite(e)&&e&&e>0?e:t}function kp(e){return Tp.every((t,n)=>e[n]===t)}function Ap(e,t,n){let r=Ep(e),i=new TextDecoder;for(let a=0;a+46<=e.byteLength;){if(r.getUint32(a,!0)!==_p)return null;let o=r.getUint16(a+10,!0),s=r.getUint32(a+20,!0),c=r.getUint32(a+24,!0),l=r.getUint16(a+28,!0),u=a+46+l+r.getUint16(a+30,!0)+r.getUint16(a+32,!0);if(u>e.byteLength)return null;if(i.decode(e.subarray(a+46,a+46+l))===wp)return s>t||c>n?null:{method:o,compressedSize:s,outputSize:c,localOffset:r.getUint32(a+42,!0)};a=u}return null}async function jp(e,t,n){let r=await e.read(t.localOffset,Math.min(e.size,t.localOffset+30));if(r.byteLength<30||Ep(r).getUint32(0,!0)!==vp)return null;let i=Ep(r),a=t.localOffset+30+i.getUint16(26,!0)+i.getUint16(28,!0);if(a+t.compressedSize>e.size)return null;let o=await e.read(a,a+t.compressedSize);if(t.method===0)return o.byteLength===t.outputSize&&kp(o)?o:null;if(t.method!==8)return null;let s=(()=>{try{return po(o,{out:new Uint8Array(n+1)})}catch{return null}})();return s?.byteLength===t.outputSize&&kp(s)?s:null}async function Mp(e,t={}){if(!Number.isSafeInteger(e.size)||e.size<yp)return null;let n=Op(t.maxTailBytes,xp),r=Op(t.maxCompressedBytes,Sp),i=Op(t.maxOutputBytes,Cp),a=Math.min(e.size,yp+bp),o=e.size-a,s=await e.read(o,e.size),c=Dp(s);if(c<0)return null;let l=Ep(s),u=l.getUint32(c+12,!0),d=l.getUint32(c+16,!0);if(u>n||d+u>e.size)return null;let f=Ap(d>=o&&d+u<=e.size?s.subarray(d-o,d-o+u):await e.read(d,d+u),r,i);return f?jp(e,f,i):null}var Np=4096,Pp=20,Fp=new Set([`image/png`,`image/jpeg`,`image/webp`,`image/gif`,`image/avif`]);function Ip(e){return e.type===`image/svg+xml`||e.type===``&&e.name.toLowerCase().endsWith(`.svg`)}function Lp(e,t){function n(t){let n=ne(t);return e.graph.images.set(n,t),n}function r(t){let n=e.getCk();if(!n)return null;let r=n.MakeImageFromEncoded(t);if(!r)return null;let i=r.width(),a=r.height();if(r.delete(),i>Np||a>Np){let e=Math.min(Np/i,Np/a);i=Math.round(i*e),a=Math.round(a*e)}return{width:i,height:a}}async function i(e){if(Ip(e)){let t=jt(await e.text());return t?{kind:`svg`,data:t,name:e.name.replace(/\.svg$/i,``)||`SVG`,width:t.width,height:t.height}:null}if(!Fp.has(e.type))return null;let t=new Uint8Array(await e.arrayBuffer()),n=r(t);return n?{kind:`raster`,bytes:t,name:e.name,...n}:null}function a(t,n,r){let i=e.graph.getNode(t);if(!i)return{x:n,y:r};let a=ee.invert(_e(i,e.graph));return a?ee.mapPoint(a,{x:n,y:r}):{x:n,y:r}}function o(t,r,i,a){let o={type:`IMAGE`,imageHash:n(t.bytes),imageScaleMode:`FILL`,color:xe,opacity:1,visible:!0};return e.graph.createNode(`RECTANGLE`,r,{name:t.name.replace(/\.[^.]+$/,``),x:i,y:a,width:t.width,height:t.height,fills:[o]}).id}async function s(n,r,s){let c=(await Promise.all(n.map(i))).filter(e=>e!==null);if(c.length===0)return;let l=new Set(e.state.selectedIds),u=Hd(e),d=a(u,r,s),f=c.reduce((e,t)=>e+t.width,0)+Pp*(c.length-1),p=Math.max(...c.map(e=>e.height)),m=d.x-f/2,h=d.y-p/2,g=[];try{for(let t of c){let n=t.kind===`raster`?o(t,u,m,h):kt(e.graph,u,t.data,{name:t.name,x:m,y:h})?.id;n&&g.push(n),m+=t.width+Pp}}catch(t){for(let t of g.reverse())e.graph.deleteNode(t);throw t}g.length!==0&&(wt(e.graph,e.state.currentPageId),e.setSelectedIds(new Set(g)),t(g,l,`Place files`),e.requestRender())}function c(e,t,n){return s(e.filter(e=>Fp.has(e.type)),t,n)}return{storeImage:n,placeFiles:s,placeImageFiles:c}}function Rp(e){async function t(t,n){if(n.length===0)return;let r=n.map(e=>e.name).join(`
`);t.setData(`text/html`,hd(n,e.graph)),t.setData(`text/plain`,r);let i=await Ed(n,e.graph);i&&t.setData(`text/html`,i)}return{writeCopyData:t}}var zp=`# OpenPencil JSX Reference

## Elements

| Tag       | Description                            |
| --------- | -------------------------------------- |
| Frame     | Container / auto-layout frame          |
| Rectangle | Rectangle shape                        |
| Ellipse   | Circle / ellipse shape                 |
| Text      | Text node (children = text content)    |
| Line      | Line shape                             |
| Star      | Star shape                             |
| Polygon   | Polygon shape (default 3 sides)        |
| Vector    | Vector path                            |
| Group     | Group container                        |
| Section   | Section (like Frame, for organization) |
| Component | Component definition                   |
| Icon      | Iconify icon (requires name prop)      |

Aliases: View = Frame, Rect = Rectangle

## Layout Props

| Prop           | Type                                      | Description                    |
| -------------- | ----------------------------------------- | ------------------------------ |
| flex           | "row" \\| "col"                            | Enable auto-layout direction   |
| gap            | number                                    | Spacing between children       |
| wrap           | boolean                                   | Enable flex wrap               |
| rowGap         | number                                    | Cross-axis gap when wrap is on |
| justify        | "start" \\| "end" \\| "center" \\| "between" | Main axis alignment            |
| items          | "start" \\| "end" \\| "center" \\| "stretch" | Cross axis alignment           |
| p              | number                                    | Padding (all sides)            |
| px             | number                                    | Horizontal padding             |
| py             | number                                    | Vertical padding               |
| pt, pr, pb, pl | number                                    | Individual side padding        |
| grow           | number                                    | Flex grow factor               |

## Sizing Props

| Prop     | Type                      | Description                             |
| -------- | ------------------------- | --------------------------------------- |
| w        | number \\| "fill" \\| "hug" | Width                                   |
| h        | number \\| "fill" \\| "hug" | Height                                  |
| x        | number                    | X position                              |
| y        | number                    | Y position                              |
| position | "absolute"                | Absolute positioning inside auto-layout |
| top      | number                    | Top offset (sets absolute positioning)  |
| left     | number                    | Left offset (sets absolute positioning) |
| minW     | number                    | Minimum width                           |
| maxW     | number                    | Maximum width                           |

## Appearance Props

| Prop            | Type     | Description                            |
| --------------- | -------- | -------------------------------------- |
| bg              | string   | Background color (hex, e.g. "#FF0000") |
| stroke          | string   | Stroke color                           |
| strokeWidth     | number   | Stroke weight (default 1)              |
| rounded         | number   | Corner radius (all corners)            |
| roundedTL       | number   | Top-left corner radius                 |
| roundedTR       | number   | Top-right corner radius                |
| roundedBL       | number   | Bottom-left corner radius              |
| roundedBR       | number   | Bottom-right corner radius             |
| cornerSmoothing | number   | iOS-style corner smoothing             |
| opacity         | number   | 0–1 opacity                            |
| rotate          | number   | Rotation in degrees                    |
| blendMode       | string   | Blend mode (e.g. "multiply")           |
| overflow        | "hidden" | Clip content                           |

## Text Props

| Prop           | Type                                         | Description                            |
| -------------- | -------------------------------------------- | -------------------------------------- |
| size           | number                                       | Font size (default 14)                 |
| font           | string                                       | Font family                            |
| weight         | number \\| "bold" \\| "medium"                 | Font weight                            |
| color          | string                                       | Text color (hex)                       |
| textAlign      | "left" \\| "center" \\| "right" \\| "justified" | Text alignment                         |
| lineHeight     | number                                       | Line height in px                      |
| letterSpacing  | number                                       | Letter spacing in px                   |
| textDecoration | "underline" \\| "strikethrough"               | Text decoration                        |
| textCase       | "upper" \\| "lower" \\| "title"                | Text transform                         |
| maxLines       | number                                       | Max visible lines (enables truncation) |
| truncate       | boolean                                      | Enable text truncation                 |

## Shape Props

| Prop        | Type   | Description                                     |
| ----------- | ------ | ----------------------------------------------- |
| points      | number | Point count (Star default 5, Polygon default 3) |
| innerRadius | number | Star inner radius ratio                         |

## Effect Props

| Prop   | Type   | Description                               |
| ------ | ------ | ----------------------------------------- |
| shadow | string | Drop shadow: "offsetX offsetY blur color" |
| blur   | number | Layer blur radius                         |

## Grid Layout

| Prop      | Type             | Description                                     |
| --------- | ---------------- | ----------------------------------------------- |
| grid      | boolean          | Enable CSS Grid layout                          |
| columns   | string \\| number | Grid template columns (e.g. "1fr 1fr 1fr" or 3) |
| rows      | string \\| number | Grid template rows                              |
| columnGap | number           | Column gap                                      |
| rowGap    | number           | Row gap                                         |
| colStart  | number           | Grid column start (child)                       |
| rowStart  | number           | Grid row start (child)                          |
| colSpan   | number           | Grid column span (child)                        |
| rowSpan   | number           | Grid row span (child)                           |

## Icon Props

| Prop  | Type   | Description                             |
| ----- | ------ | --------------------------------------- |
| name  | string | Iconify icon name (e.g. "lucide:heart") |
| size  | number | Icon size (default 24)                  |
| color | string | Icon color (hex)                        |
| label | string | Display name for the icon node          |

## Examples

\`\`\`jsx
{
  /* Card with title and description */
}
;<Frame name="Card" w={320} flex="col" gap={16} p={24} bg="#FFFFFF" rounded={16}>
  <Text size={18} weight="bold" color="#111">
    Card Title
  </Text>
  <Text size={14} color="#6B7280">
    Description text here
  </Text>
</Frame>

{
  /* Badge in corner of a card */
}
;<Frame name="Card" w={320} h={200} flex="col" p={24} bg="#FFFFFF" rounded={16}>
  <Frame position="absolute" top={8} left={280} w={24} h={24} bg="#EF4444" rounded={12}>
    <Text size={10} weight="bold" color="#FFF">
      3
    </Text>
  </Frame>
  <Text size={18} weight="bold" color="#111">
    Card Title
  </Text>
</Frame>

{
  /* Horizontal button row */
}
;<Frame flex="row" gap={8} items="center">
  <Rectangle w={40} h={40} bg="#3B82F6" rounded={8} />
  <Text size={14} weight="medium" color="#000">
    Click me
  </Text>
</Frame>

{
  /* Grid layout */
}
;<Frame grid columns="1fr 1fr 1fr" gap={16} p={16} w={400}>
  <Rectangle w={100} h={100} bg="#EF4444" rounded={8} />
  <Rectangle w={100} h={100} bg="#22C55E" rounded={8} />
  <Rectangle w={100} h={100} bg="#3B82F6" rounded={8} />
</Frame>

{
  /* Star shape */
}
;<Star w={48} h={48} points={5} innerRadius={0.38} bg="#EAB308" />
\`\`\`
`;function Bp(e,t=1){return It(e,t)}function Vp(e){let t=e.filter(e=>e.visible&&e.type===`SOLID`);return t.length===1?Bp(t[0].color,t[0].opacity):null}function Hp(e){let t=e.filter(e=>e.visible);if(t.length!==1)return null;let n=t[0];return{color:Bp(n.color,n.opacity),weight:n.weight,dash:n.dashPattern&&n.dashPattern.length>0?[...n.dashPattern]:null}}function Up(e){return e.type!==`DROP_SHADOW`&&e.type!==`INNER_SHADOW`?null:`${e.offset.x} ${e.offset.y} ${e.radius} ${Bp(e.color,e.color.a)}`}var Wp={"{":`&#123;`,"}":`&#125;`,"<":`&lt;`,">":`&gt;`,"&":`&amp;`};function Gp(e){return e.replace(/[{}<>&]/g,e=>Wp[e])}function Kp(e,t){return typeof t==`string`?`${e}="${t}"`:typeof t==`number`?`${e}={${t}}`:typeof t==`boolean`?t?e:`${e}={false}`:`${e}={${JSON.stringify(t)}}`}function qp(e,t){let n=e.parentId?t.getNode(e.parentId):null;return{isAutoLayout:e.layoutMode!==`NONE`,isGrid:e.layoutMode===`GRID`,isFlex:e.layoutMode===`HORIZONTAL`||e.layoutMode===`VERTICAL`,parentIsAutoLayout:n?n.layoutMode!==`NONE`:!1,parentIsGrid:n?n.layoutMode===`GRID`:!1}}function Jp(e){let{paddingTop:t,paddingRight:n,paddingBottom:r,paddingLeft:i}=e;return t===0&&n===0&&r===0&&i===0?null:{pt:t,pr:n,pb:r,pl:i}}function Yp(e,t,n,r){let{pt:i,pr:a,pb:o,pl:s}=e;return i===a&&a===o&&o===s?[t(i)]:i===o&&s===a?n(i,s):r(e)}function Xp(e){if(e.cornerRadius<=0)return null;if(e.independentCorners)return{tl:e.topLeftRadius,tr:e.topRightRadius,br:e.bottomRightRadius,bl:e.bottomLeftRadius};let t=e.cornerRadius;return{tl:t,tr:t,br:t,bl:t}}function Zp(e){return e.sizing===`FR`?`${e.value}fr`:e.sizing===`FIXED`?`${e.value}px`:`auto`}function Qp(e){return e.map(Zp).join(` `)}var $p=[{properties:[`margin-top`,`margin-right`,`margin-bottom`,`margin-left`],all:`m`,x:`mx`,y:`my`,top:`mt`,right:`mr`,bottom:`mb`,left:`ml`},{properties:[`padding-top`,`padding-right`,`padding-bottom`,`padding-left`],all:`p`,x:`px`,y:`py`,top:`pt`,right:`pr`,bottom:`pb`,left:`pl`},{properties:[`top`,`right`,`bottom`,`left`],all:`inset`,x:`inset-x`,y:`inset-y`,top:`top`,right:`right`,bottom:`bottom`,left:`left`},{properties:[`border-top-width`,`border-right-width`,`border-bottom-width`,`border-left-width`],all:`border`,x:`border-x`,y:`border-y`,top:`border-t`,right:`border-r`,bottom:`border-b`,left:`border-l`},{properties:[`border-top-color`,`border-right-color`,`border-bottom-color`,`border-left-color`],all:`border`,x:`border-x`,y:`border-y`,top:`border-t`,right:`border-r`,bottom:`border-b`,left:`border-l`},{properties:[`border-top-style`,`border-right-style`,`border-bottom-style`,`border-left-style`],all:`border`,x:`border-x`,y:`border-y`,top:`border-t`,right:`border-r`,bottom:`border-b`,left:`border-l`},{properties:[`scroll-margin-top`,`scroll-margin-right`,`scroll-margin-bottom`,`scroll-margin-left`],all:`scroll-m`,x:`scroll-mx`,y:`scroll-my`,top:`scroll-mt`,right:`scroll-mr`,bottom:`scroll-mb`,left:`scroll-ml`},{properties:[`scroll-padding-top`,`scroll-padding-right`,`scroll-padding-bottom`,`scroll-padding-left`],all:`scroll-p`,x:`scroll-px`,y:`scroll-py`,top:`scroll-pt`,right:`scroll-pr`,bottom:`scroll-pb`,left:`scroll-pl`}];function em(e,t){if(t.compression===`none`)return e;let n=[...e],r=[];for(let e of $p){let t=tm(n,e.properties);if(!t)continue;let i=nm(t,e);n=n.filter(t=>!e.properties.includes(t.property)),r.push(...i)}let i=[...n,...r];return i=am(i),i=im(i),i}function tm(e,t){let[n,r,i,a]=t,o=e.find(e=>e.property===n),s=e.find(e=>e.property===r),c=e.find(e=>e.property===i),l=e.find(e=>e.property===a);return o&&s&&c&&l?{top:o,right:s,bottom:c,left:l}:void 0}function nm(e,t){let n=rm(e.top.className,t.top),r=rm(e.right.className,t.right),i=rm(e.bottom.className,t.bottom),a=rm(e.left.className,t.left);if(!n||!r||!i||!a)return[e.top,e.right,e.bottom,e.left];if(n===r&&r===i&&i===a)return[om(e.top,`${t.all}-${n}`)];if(n===i&&r===a)return[om(e.top,`${t.y}-${n}`),om(e.right,`${t.x}-${r}`)];let o=[];return n===i?o.push(om(e.top,`${t.y}-${n}`)):o.push(om(e.top,`${t.top}-${n}`),om(e.bottom,`${t.bottom}-${i}`)),r===a?o.push(om(e.right,`${t.x}-${r}`)):o.push(om(e.right,`${t.right}-${r}`),om(e.left,`${t.left}-${a}`)),o}function rm(e,t){if(e.startsWith(t+`-`))return e.slice(t.length+1)}function im(e){let t=[...e],n=t.find(e=>e.property===`row-gap`),r=t.find(e=>e.property===`column-gap`);if(n&&r){let e=rm(n.className,`gap-y`),i=rm(r.className,`gap-x`);e&&i&&e===i&&(t=t.filter(e=>e.property!==`row-gap`&&e.property!==`column-gap`),t.push(om(n,`gap-${e}`)))}return t}function am(e){let t=`border-top-left-radius`,n=`border-top-right-radius`,r=`border-bottom-right-radius`,i=`border-bottom-left-radius`,a=e.find(e=>e.property===t),o=e.find(e=>e.property===n),s=e.find(e=>e.property===r),c=e.find(e=>e.property===i);if(!a||!o||!s||!c)return e;let l=rm(a.className,`rounded-tl`),u=rm(o.className,`rounded-tr`),d=rm(s.className,`rounded-br`),f=rm(c.className,`rounded-bl`);if(!l||!u||!d||!f)return e;let p=new Set([t,n,r,i]),m=e.filter(e=>!p.has(e.property));if(l===u&&u===d&&d===f)return[...m,om(a,`rounded-${l}`)];let h=[...m];return l===f&&u===d?(h.push(om(a,`rounded-l-${l}`)),h.push(om(o,`rounded-r-${u}`)),h):(l===u?h.push(om(a,`rounded-t-${l}`)):h.push(a,o),d===f?h.push(om(s,`rounded-b-${d}`)):h.push(s,c),h)}function om(e,t){return{...e,className:t}}var sm={"red-50":`#fef2f2`,"red-100":`#fee2e2`,"red-200":`#fecaca`,"red-300":`#fca5a5`,"red-400":`#f87171`,"red-500":`#ef4444`,"red-600":`#dc2626`,"red-700":`#b91c1c`,"red-800":`#991b1b`,"red-900":`#7f1d1d`,"red-950":`#450a0a`,"orange-50":`#fff7ed`,"orange-100":`#ffedd5`,"orange-200":`#fed7aa`,"orange-300":`#fdba74`,"orange-400":`#fb923c`,"orange-500":`#f97316`,"orange-600":`#ea580c`,"orange-700":`#c2410c`,"orange-800":`#9a3412`,"orange-900":`#7c2d12`,"orange-950":`#431407`,"amber-50":`#fffbeb`,"amber-100":`#fef3c7`,"amber-200":`#fde68a`,"amber-300":`#fcd34d`,"amber-400":`#fbbf24`,"amber-500":`#f59e0b`,"amber-600":`#d97706`,"amber-700":`#b45309`,"amber-800":`#92400e`,"amber-900":`#78350f`,"amber-950":`#451a03`,"yellow-50":`#fefce8`,"yellow-100":`#fef9c3`,"yellow-200":`#fef08a`,"yellow-300":`#fde047`,"yellow-400":`#facc15`,"yellow-500":`#eab308`,"yellow-600":`#ca8a04`,"yellow-700":`#a16207`,"yellow-800":`#854d0e`,"yellow-900":`#713f12`,"yellow-950":`#422006`,"lime-50":`#f7fee7`,"lime-100":`#ecfccb`,"lime-200":`#d9f99d`,"lime-300":`#bef264`,"lime-400":`#a3e635`,"lime-500":`#84cc16`,"lime-600":`#65a30d`,"lime-700":`#4d7c0f`,"lime-800":`#3f6212`,"lime-900":`#365314`,"lime-950":`#1a2e05`,"green-50":`#f0fdf4`,"green-100":`#dcfce7`,"green-200":`#bbf7d0`,"green-300":`#86efac`,"green-400":`#4ade80`,"green-500":`#22c55e`,"green-600":`#16a34a`,"green-700":`#15803d`,"green-800":`#166534`,"green-900":`#14532d`,"green-950":`#052e16`,"emerald-50":`#ecfdf5`,"emerald-100":`#d1fae5`,"emerald-200":`#a7f3d0`,"emerald-300":`#6ee7b7`,"emerald-400":`#34d399`,"emerald-500":`#10b981`,"emerald-600":`#059669`,"emerald-700":`#047857`,"emerald-800":`#065f46`,"emerald-900":`#064e3b`,"emerald-950":`#022c22`,"teal-50":`#f0fdfa`,"teal-100":`#ccfbf1`,"teal-200":`#99f6e4`,"teal-300":`#5eead4`,"teal-400":`#2dd4bf`,"teal-500":`#14b8a6`,"teal-600":`#0d9488`,"teal-700":`#0f766e`,"teal-800":`#115e59`,"teal-900":`#134e4a`,"teal-950":`#042f2e`,"cyan-50":`#ecfeff`,"cyan-100":`#cffafe`,"cyan-200":`#a5f3fc`,"cyan-300":`#67e8f9`,"cyan-400":`#22d3ee`,"cyan-500":`#06b6d4`,"cyan-600":`#0891b2`,"cyan-700":`#0e7490`,"cyan-800":`#155e75`,"cyan-900":`#164e63`,"cyan-950":`#083344`,"sky-50":`#f0f9ff`,"sky-100":`#e0f2fe`,"sky-200":`#bae6fd`,"sky-300":`#7dd3fc`,"sky-400":`#38bdf8`,"sky-500":`#0ea5e9`,"sky-600":`#0284c7`,"sky-700":`#0369a1`,"sky-800":`#075985`,"sky-900":`#0c4a6e`,"sky-950":`#082f49`,"blue-50":`#eff6ff`,"blue-100":`#dbeafe`,"blue-200":`#bfdbfe`,"blue-300":`#93c5fd`,"blue-400":`#60a5fa`,"blue-500":`#3b82f6`,"blue-600":`#2563eb`,"blue-700":`#1d4ed8`,"blue-800":`#1e40af`,"blue-900":`#1e3a8a`,"blue-950":`#172554`,"indigo-50":`#eef2ff`,"indigo-100":`#e0e7ff`,"indigo-200":`#c7d2fe`,"indigo-300":`#a5b4fc`,"indigo-400":`#818cf8`,"indigo-500":`#6366f1`,"indigo-600":`#4f46e5`,"indigo-700":`#4338ca`,"indigo-800":`#3730a3`,"indigo-900":`#312e81`,"indigo-950":`#1e1b4b`,"violet-50":`#f5f3ff`,"violet-100":`#ede9fe`,"violet-200":`#ddd6fe`,"violet-300":`#c4b5fd`,"violet-400":`#a78bfa`,"violet-500":`#8b5cf6`,"violet-600":`#7c3aed`,"violet-700":`#6d28d9`,"violet-800":`#5b21b6`,"violet-900":`#4c1d95`,"violet-950":`#2e1065`,"purple-50":`#faf5ff`,"purple-100":`#f3e8ff`,"purple-200":`#e9d5ff`,"purple-300":`#d8b4fe`,"purple-400":`#c084fc`,"purple-500":`#a855f7`,"purple-600":`#9333ea`,"purple-700":`#7e22ce`,"purple-800":`#6b21a8`,"purple-900":`#581c87`,"purple-950":`#3b0764`,"fuchsia-50":`#fdf4ff`,"fuchsia-100":`#fae8ff`,"fuchsia-200":`#f5d0fe`,"fuchsia-300":`#f0abfc`,"fuchsia-400":`#e879f9`,"fuchsia-500":`#d946ef`,"fuchsia-600":`#c026d3`,"fuchsia-700":`#a21caf`,"fuchsia-800":`#86198f`,"fuchsia-900":`#701a75`,"fuchsia-950":`#4a044e`,"pink-50":`#fdf2f8`,"pink-100":`#fce7f3`,"pink-200":`#fbcfe8`,"pink-300":`#f9a8d4`,"pink-400":`#f472b6`,"pink-500":`#ec4899`,"pink-600":`#db2777`,"pink-700":`#be185d`,"pink-800":`#9d174d`,"pink-900":`#831843`,"pink-950":`#500724`,"rose-50":`#fff1f2`,"rose-100":`#ffe4e6`,"rose-200":`#fecdd3`,"rose-300":`#fda4af`,"rose-400":`#fb7185`,"rose-500":`#f43f5e`,"rose-600":`#e11d48`,"rose-700":`#be123c`,"rose-800":`#9f1239`,"rose-900":`#881337`,"rose-950":`#4c0519`,"slate-50":`#f8fafc`,"slate-100":`#f1f5f9`,"slate-200":`#e2e8f0`,"slate-300":`#cbd5e1`,"slate-400":`#94a3b8`,"slate-500":`#64748b`,"slate-600":`#475569`,"slate-700":`#334155`,"slate-800":`#1e293b`,"slate-900":`#0f172a`,"slate-950":`#020617`,"gray-50":`#f9fafb`,"gray-100":`#f3f4f6`,"gray-200":`#e5e7eb`,"gray-300":`#d1d5db`,"gray-400":`#9ca3af`,"gray-500":`#6b7280`,"gray-600":`#4b5563`,"gray-700":`#374151`,"gray-800":`#1f2937`,"gray-900":`#111827`,"gray-950":`#030712`,"zinc-50":`#fafafa`,"zinc-100":`#f4f4f5`,"zinc-200":`#e4e4e7`,"zinc-300":`#d4d4d8`,"zinc-400":`#a1a1aa`,"zinc-500":`#71717a`,"zinc-600":`#52525b`,"zinc-700":`#3f3f46`,"zinc-800":`#27272a`,"zinc-900":`#18181b`,"zinc-950":`#09090b`,"neutral-50":`#fafafa`,"neutral-100":`#f5f5f5`,"neutral-200":`#e5e5e5`,"neutral-300":`#d4d4d4`,"neutral-400":`#a3a3a3`,"neutral-500":`#737373`,"neutral-600":`#525252`,"neutral-700":`#404040`,"neutral-800":`#262626`,"neutral-900":`#171717`,"neutral-950":`#0a0a0a`,"stone-50":`#fafaf9`,"stone-100":`#f5f5f4`,"stone-200":`#e7e5e4`,"stone-300":`#d6d3d1`,"stone-400":`#a8a29e`,"stone-500":`#78716c`,"stone-600":`#57534e`,"stone-700":`#44403c`,"stone-800":`#292524`,"stone-900":`#1c1917`,"stone-950":`#0c0a09`},cm={};for(let[e,t]of Object.entries(sm))cm[t.toLowerCase()]=e;function lm(e){return cm[e.toLowerCase()]}var um={transparent:`transparent`,current:`currentColor`,black:`#000000`,white:`#ffffff`,"amber-100":`oklch(96.2% 0.059 95.617)`,"amber-200":`oklch(92.4% 0.12 95.746)`,"amber-300":`oklch(87.9% 0.169 91.605)`,"amber-400":`oklch(82.8% 0.189 84.429)`,"amber-50":`oklch(98.7% 0.022 95.277)`,"amber-500":`oklch(76.9% 0.188 70.08)`,"amber-600":`oklch(66.6% 0.179 58.318)`,"amber-700":`oklch(55.5% 0.163 48.998)`,"amber-800":`oklch(47.3% 0.137 46.201)`,"amber-900":`oklch(41.4% 0.112 45.904)`,"amber-950":`oklch(27.9% 0.077 45.635)`,"blue-100":`oklch(93.2% 0.032 255.585)`,"blue-200":`oklch(88.2% 0.059 254.128)`,"blue-300":`oklch(80.9% 0.105 251.813)`,"blue-400":`oklch(70.7% 0.165 254.624)`,"blue-50":`oklch(97% 0.014 254.604)`,"blue-500":`oklch(62.3% 0.214 259.815)`,"blue-600":`oklch(54.6% 0.245 262.881)`,"blue-700":`oklch(48.8% 0.243 264.376)`,"blue-800":`oklch(42.4% 0.199 265.638)`,"blue-900":`oklch(37.9% 0.146 265.522)`,"blue-950":`oklch(28.2% 0.091 267.935)`,"cyan-100":`oklch(95.6% 0.045 203.388)`,"cyan-200":`oklch(91.7% 0.08 205.041)`,"cyan-300":`oklch(86.5% 0.127 207.078)`,"cyan-400":`oklch(78.9% 0.154 211.53)`,"cyan-50":`oklch(98.4% 0.019 200.873)`,"cyan-500":`oklch(71.5% 0.143 215.221)`,"cyan-600":`oklch(60.9% 0.126 221.723)`,"cyan-700":`oklch(52% 0.105 223.128)`,"cyan-800":`oklch(45% 0.085 224.283)`,"cyan-900":`oklch(39.8% 0.07 227.392)`,"cyan-950":`oklch(30.2% 0.056 229.695)`,"emerald-100":`oklch(95% 0.052 163.051)`,"emerald-200":`oklch(90.5% 0.093 164.15)`,"emerald-300":`oklch(84.5% 0.143 164.978)`,"emerald-400":`oklch(76.5% 0.177 163.223)`,"emerald-50":`oklch(97.9% 0.021 166.113)`,"emerald-500":`oklch(69.6% 0.17 162.48)`,"emerald-600":`oklch(59.6% 0.145 163.225)`,"emerald-700":`oklch(50.8% 0.118 165.612)`,"emerald-800":`oklch(43.2% 0.095 166.913)`,"emerald-900":`oklch(37.8% 0.077 168.94)`,"emerald-950":`oklch(26.2% 0.051 172.552)`,"fuchsia-100":`oklch(95.2% 0.037 318.852)`,"fuchsia-200":`oklch(90.3% 0.076 319.62)`,"fuchsia-300":`oklch(83.3% 0.145 321.434)`,"fuchsia-400":`oklch(74% 0.238 322.16)`,"fuchsia-50":`oklch(97.7% 0.017 320.058)`,"fuchsia-500":`oklch(66.7% 0.295 322.15)`,"fuchsia-600":`oklch(59.1% 0.293 322.896)`,"fuchsia-700":`oklch(51.8% 0.253 323.949)`,"fuchsia-800":`oklch(45.2% 0.211 324.591)`,"fuchsia-900":`oklch(40.1% 0.17 325.612)`,"fuchsia-950":`oklch(29.3% 0.136 325.661)`,"gray-100":`oklch(96.7% 0.003 264.542)`,"gray-200":`oklch(92.8% 0.006 264.531)`,"gray-300":`oklch(87.2% 0.01 258.338)`,"gray-400":`oklch(70.7% 0.022 261.325)`,"gray-50":`oklch(98.5% 0.002 247.839)`,"gray-500":`oklch(55.1% 0.027 264.364)`,"gray-600":`oklch(44.6% 0.03 256.802)`,"gray-700":`oklch(37.3% 0.034 259.733)`,"gray-800":`oklch(27.8% 0.033 256.848)`,"gray-900":`oklch(21% 0.034 264.665)`,"gray-950":`oklch(13% 0.028 261.692)`,"green-100":`oklch(96.2% 0.044 156.743)`,"green-200":`oklch(92.5% 0.084 155.995)`,"green-300":`oklch(87.1% 0.15 154.449)`,"green-400":`oklch(79.2% 0.209 151.711)`,"green-50":`oklch(98.2% 0.018 155.826)`,"green-500":`oklch(72.3% 0.219 149.579)`,"green-600":`oklch(62.7% 0.194 149.214)`,"green-700":`oklch(52.7% 0.154 150.069)`,"green-800":`oklch(44.8% 0.119 151.328)`,"green-900":`oklch(39.3% 0.095 152.535)`,"green-950":`oklch(26.6% 0.065 152.934)`,"indigo-100":`oklch(93% 0.034 272.788)`,"indigo-200":`oklch(87% 0.065 274.039)`,"indigo-300":`oklch(78.5% 0.115 274.713)`,"indigo-400":`oklch(67.3% 0.182 276.935)`,"indigo-50":`oklch(96.2% 0.018 272.314)`,"indigo-500":`oklch(58.5% 0.233 277.117)`,"indigo-600":`oklch(51.1% 0.262 276.966)`,"indigo-700":`oklch(45.7% 0.24 277.023)`,"indigo-800":`oklch(39.8% 0.195 277.366)`,"indigo-900":`oklch(35.9% 0.144 278.697)`,"indigo-950":`oklch(25.7% 0.09 281.288)`,"lime-100":`oklch(96.7% 0.067 122.328)`,"lime-200":`oklch(93.8% 0.127 124.321)`,"lime-300":`oklch(89.7% 0.196 126.665)`,"lime-400":`oklch(84.1% 0.238 128.85)`,"lime-50":`oklch(98.6% 0.031 120.757)`,"lime-500":`oklch(76.8% 0.233 130.85)`,"lime-600":`oklch(64.8% 0.2 131.684)`,"lime-700":`oklch(53.2% 0.157 131.589)`,"lime-800":`oklch(45.3% 0.124 130.933)`,"lime-900":`oklch(40.5% 0.101 131.063)`,"lime-950":`oklch(27.4% 0.072 132.109)`,"neutral-100":`oklch(97% 0 0)`,"neutral-200":`oklch(92.2% 0 0)`,"neutral-300":`oklch(87% 0 0)`,"neutral-400":`oklch(70.8% 0 0)`,"neutral-50":`oklch(98.5% 0 0)`,"neutral-500":`oklch(55.6% 0 0)`,"neutral-600":`oklch(43.9% 0 0)`,"neutral-700":`oklch(37.1% 0 0)`,"neutral-800":`oklch(26.9% 0 0)`,"neutral-900":`oklch(20.5% 0 0)`,"neutral-950":`oklch(14.5% 0 0)`,"orange-100":`oklch(95.4% 0.038 75.164)`,"orange-200":`oklch(90.1% 0.076 70.697)`,"orange-300":`oklch(83.7% 0.128 66.29)`,"orange-400":`oklch(75% 0.183 55.934)`,"orange-50":`oklch(98% 0.016 73.684)`,"orange-500":`oklch(70.5% 0.213 47.604)`,"orange-600":`oklch(64.6% 0.222 41.116)`,"orange-700":`oklch(55.3% 0.195 38.402)`,"orange-800":`oklch(47% 0.157 37.304)`,"orange-900":`oklch(40.8% 0.123 38.172)`,"orange-950":`oklch(26.6% 0.079 36.259)`,"pink-100":`oklch(94.8% 0.028 342.258)`,"pink-200":`oklch(89.9% 0.061 343.231)`,"pink-300":`oklch(82.3% 0.12 346.018)`,"pink-400":`oklch(71.8% 0.202 349.761)`,"pink-50":`oklch(97.1% 0.014 343.198)`,"pink-500":`oklch(65.6% 0.241 354.308)`,"pink-600":`oklch(59.2% 0.249 0.584)`,"pink-700":`oklch(52.5% 0.223 3.958)`,"pink-800":`oklch(45.9% 0.187 3.815)`,"pink-900":`oklch(40.8% 0.153 2.432)`,"pink-950":`oklch(28.4% 0.109 3.907)`,"purple-100":`oklch(94.6% 0.033 307.174)`,"purple-200":`oklch(90.2% 0.063 306.703)`,"purple-300":`oklch(82.7% 0.119 306.383)`,"purple-400":`oklch(71.4% 0.203 305.504)`,"purple-50":`oklch(97.7% 0.014 308.299)`,"purple-500":`oklch(62.7% 0.265 303.9)`,"purple-600":`oklch(55.8% 0.288 302.321)`,"purple-700":`oklch(49.6% 0.265 301.924)`,"purple-800":`oklch(43.8% 0.218 303.724)`,"purple-900":`oklch(38.1% 0.176 304.987)`,"purple-950":`oklch(29.1% 0.149 302.717)`,"red-100":`oklch(93.6% 0.032 17.717)`,"red-200":`oklch(88.5% 0.062 18.334)`,"red-300":`oklch(80.8% 0.114 19.571)`,"red-400":`oklch(70.4% 0.191 22.216)`,"red-50":`oklch(97.1% 0.013 17.38)`,"red-500":`oklch(63.7% 0.237 25.331)`,"red-600":`oklch(57.7% 0.245 27.325)`,"red-700":`oklch(50.5% 0.213 27.518)`,"red-800":`oklch(44.4% 0.177 26.899)`,"red-900":`oklch(39.6% 0.141 25.723)`,"red-950":`oklch(25.8% 0.092 26.042)`,"rose-100":`oklch(94.1% 0.03 12.58)`,"rose-200":`oklch(89.2% 0.058 10.001)`,"rose-300":`oklch(81% 0.117 11.638)`,"rose-400":`oklch(71.2% 0.194 13.428)`,"rose-50":`oklch(96.9% 0.015 12.422)`,"rose-500":`oklch(64.5% 0.246 16.439)`,"rose-600":`oklch(58.6% 0.253 17.585)`,"rose-700":`oklch(51.4% 0.222 16.935)`,"rose-800":`oklch(45.5% 0.188 13.697)`,"rose-900":`oklch(41% 0.159 10.272)`,"rose-950":`oklch(27.1% 0.105 12.094)`,"sky-100":`oklch(95.1% 0.026 236.824)`,"sky-200":`oklch(90.1% 0.058 230.902)`,"sky-300":`oklch(82.8% 0.111 230.318)`,"sky-400":`oklch(74.6% 0.16 232.661)`,"sky-50":`oklch(97.7% 0.013 236.62)`,"sky-500":`oklch(68.5% 0.169 237.323)`,"sky-600":`oklch(58.8% 0.158 241.966)`,"sky-700":`oklch(50% 0.134 242.749)`,"sky-800":`oklch(44.3% 0.11 240.79)`,"sky-900":`oklch(39.1% 0.09 240.876)`,"sky-950":`oklch(29.3% 0.066 243.157)`,"slate-100":`oklch(96.8% 0.007 247.896)`,"slate-200":`oklch(92.9% 0.013 255.508)`,"slate-300":`oklch(86.9% 0.022 252.894)`,"slate-400":`oklch(70.4% 0.04 256.788)`,"slate-50":`oklch(98.4% 0.003 247.858)`,"slate-500":`oklch(55.4% 0.046 257.417)`,"slate-600":`oklch(44.6% 0.043 257.281)`,"slate-700":`oklch(37.2% 0.044 257.287)`,"slate-800":`oklch(27.9% 0.041 260.031)`,"slate-900":`oklch(20.8% 0.042 265.755)`,"slate-950":`oklch(12.9% 0.042 264.695)`,"stone-100":`oklch(97% 0.001 106.424)`,"stone-200":`oklch(92.3% 0.003 48.717)`,"stone-300":`oklch(86.9% 0.005 56.366)`,"stone-400":`oklch(70.9% 0.01 56.259)`,"stone-50":`oklch(98.5% 0.001 106.423)`,"stone-500":`oklch(55.3% 0.013 58.071)`,"stone-600":`oklch(44.4% 0.011 73.639)`,"stone-700":`oklch(37.4% 0.01 67.558)`,"stone-800":`oklch(26.8% 0.007 34.298)`,"stone-900":`oklch(21.6% 0.006 56.043)`,"stone-950":`oklch(14.7% 0.004 49.25)`,"teal-100":`oklch(95.3% 0.051 180.801)`,"teal-200":`oklch(91% 0.096 180.426)`,"teal-300":`oklch(85.5% 0.138 181.071)`,"teal-400":`oklch(77.7% 0.152 181.912)`,"teal-50":`oklch(98.4% 0.014 180.72)`,"teal-500":`oklch(70.4% 0.14 182.503)`,"teal-600":`oklch(60% 0.118 184.704)`,"teal-700":`oklch(51.1% 0.096 186.391)`,"teal-800":`oklch(43.7% 0.078 188.216)`,"teal-900":`oklch(38.6% 0.063 188.416)`,"teal-950":`oklch(27.7% 0.046 192.524)`,"violet-100":`oklch(94.3% 0.029 294.588)`,"violet-200":`oklch(89.4% 0.057 293.283)`,"violet-300":`oklch(81.1% 0.111 293.571)`,"violet-400":`oklch(70.2% 0.183 293.541)`,"violet-50":`oklch(96.9% 0.016 293.756)`,"violet-500":`oklch(60.6% 0.25 292.717)`,"violet-600":`oklch(54.1% 0.281 293.009)`,"violet-700":`oklch(49.1% 0.27 292.581)`,"violet-800":`oklch(43.2% 0.232 292.759)`,"violet-900":`oklch(38% 0.189 293.745)`,"violet-950":`oklch(28.3% 0.141 291.089)`,"yellow-100":`oklch(97.3% 0.071 103.193)`,"yellow-200":`oklch(94.5% 0.129 101.54)`,"yellow-300":`oklch(90.5% 0.182 98.111)`,"yellow-400":`oklch(85.2% 0.199 91.936)`,"yellow-50":`oklch(98.7% 0.026 102.212)`,"yellow-500":`oklch(79.5% 0.184 86.047)`,"yellow-600":`oklch(68.1% 0.162 75.834)`,"yellow-700":`oklch(55.4% 0.135 66.442)`,"yellow-800":`oklch(47.6% 0.114 61.907)`,"yellow-900":`oklch(42.1% 0.095 57.708)`,"yellow-950":`oklch(28.6% 0.066 53.813)`,"zinc-100":`oklch(96.7% 0.001 286.375)`,"zinc-200":`oklch(92% 0.004 286.32)`,"zinc-300":`oklch(87.1% 0.006 286.286)`,"zinc-400":`oklch(70.5% 0.015 286.067)`,"zinc-50":`oklch(98.5% 0 0)`,"zinc-500":`oklch(55.2% 0.016 285.938)`,"zinc-600":`oklch(44.2% 0.017 285.786)`,"zinc-700":`oklch(37% 0.013 285.805)`,"zinc-800":`oklch(27.4% 0.006 286.033)`,"zinc-900":`oklch(21% 0.006 285.885)`,"zinc-950":`oklch(14.1% 0.005 285.823)`};function dm(e){return e.trim().replace(/\\/g,`\\\\`).replace(/_/g,`\\_`).replace(/\s+/g,`_`).replace(/]/g,`\\]`)}function fm(e,t){return`${e}-[${dm(t)}]`}function pm(e,t){return`[${e}:${dm(t)}]`}var mm={display:{block:`block`,"inline-block":`inline-block`,inline:`inline`,flex:`flex`,"inline-flex":`inline-flex`,grid:`grid`,"inline-grid":`inline-grid`,contents:`contents`,"flow-root":`flow-root`,"inline-table":`inline-table`,"list-item":`list-item`,table:`table`,"table-caption":`table-caption`,"table-cell":`table-cell`,"table-column":`table-column`,"table-column-group":`table-column-group`,"table-footer-group":`table-footer-group`,"table-header-group":`table-header-group`,"table-row":`table-row`,"table-row-group":`table-row-group`,none:`hidden`},position:{static:`static`,fixed:`fixed`,absolute:`absolute`,relative:`relative`,sticky:`sticky`},visibility:{visible:`visible`,hidden:`invisible`,collapse:`collapse`},fill:{none:`fill-none`,currentcolor:`fill-current`,currentColor:`fill-current`,inherit:`fill-inherit`,transparent:`fill-transparent`},stroke:{none:`stroke-none`,currentcolor:`stroke-current`,currentColor:`stroke-current`,inherit:`stroke-inherit`,transparent:`stroke-transparent`},"justify-content":{normal:`justify-normal`,"flex-start":`justify-start`,center:`justify-center`,"flex-end":`justify-end`,"space-between":`justify-between`,"space-around":`justify-around`,"space-evenly":`justify-evenly`,stretch:`justify-stretch`},"align-items":{"flex-start":`items-start`,center:`items-center`,"flex-end":`items-end`,stretch:`items-stretch`,baseline:`items-baseline`,"last baseline":`items-baseline-last`},"flex-direction":{row:`flex-row`,"row-reverse":`flex-row-reverse`,column:`flex-col`,"column-reverse":`flex-col-reverse`},"flex-wrap":{wrap:`flex-wrap`,"wrap-reverse":`flex-wrap-reverse`,nowrap:`flex-nowrap`},flex:{none:`flex-none`,auto:`flex-auto`,initial:`flex-initial`,"1 1 0%":`flex-1`},"align-content":{normal:`content-normal`,center:`content-center`,"flex-start":`content-start`,"flex-end":`content-end`,"space-between":`content-between`,"space-around":`content-around`,"space-evenly":`content-evenly`,stretch:`content-stretch`,baseline:`content-baseline`},"align-self":{auto:`self-auto`,"flex-start":`self-start`,"flex-end":`self-end`,center:`self-center`,stretch:`self-stretch`,baseline:`self-baseline`,"last baseline":`self-baseline-last`},"place-items":{start:`place-items-start`,end:`place-items-end`,center:`place-items-center`,baseline:`place-items-baseline`,stretch:`place-items-stretch`},"place-content":{center:`place-content-center`,start:`place-content-start`,end:`place-content-end`,"space-between":`place-content-between`,"space-around":`place-content-around`,"space-evenly":`place-content-evenly`,stretch:`place-content-stretch`,baseline:`place-content-baseline`},"place-self":{auto:`place-self-auto`,start:`place-self-start`,end:`place-self-end`,center:`place-self-center`,stretch:`place-self-stretch`},"justify-items":{start:`justify-items-start`,end:`justify-items-end`,center:`justify-items-center`,stretch:`justify-items-stretch`},"justify-self":{auto:`justify-self-auto`,start:`justify-self-start`,end:`justify-self-end`,center:`justify-self-center`,stretch:`justify-self-stretch`},"grid-auto-flow":{row:`grid-flow-row`,column:`grid-flow-col`,dense:`grid-flow-dense`,"row dense":`grid-flow-row-dense`,"column dense":`grid-flow-col-dense`},"grid-template-columns":{none:`grid-cols-none`,subgrid:`grid-cols-subgrid`},"grid-template-rows":{none:`grid-rows-none`,subgrid:`grid-rows-subgrid`},"grid-auto-columns":{auto:`auto-cols-auto`,min:`auto-cols-min`,max:`auto-cols-max`,fr:`auto-cols-fr`},"grid-auto-rows":{auto:`auto-rows-auto`,min:`auto-rows-min`,max:`auto-rows-max`,fr:`auto-rows-fr`},"text-align":{left:`text-left`,center:`text-center`,right:`text-right`,justify:`text-justify`,start:`text-start`,end:`text-end`},"text-transform":{uppercase:`uppercase`,lowercase:`lowercase`,capitalize:`capitalize`,none:`normal-case`},"font-style":{italic:`italic`,normal:`not-italic`},"font-family":{sans:`font-sans`,serif:`font-serif`,monospace:`font-mono`,"ui-sans-serif, system-ui, sans-serif":`font-sans`,'ui-serif, georgia, cambria, "times new roman", times, serif':`font-serif`,'ui-monospace, sfmono-regular, menlo, monaco, consolas, "liberation mono", "courier new", monospace':`font-mono`},"font-variant-numeric":{normal:`normal-nums`,ordinal:`ordinal`,"slashed-zero":`slashed-zero`,"lining-nums":`lining-nums`,"oldstyle-nums":`oldstyle-nums`,"proportional-nums":`proportional-nums`,"tabular-nums":`tabular-nums`,"diagonal-fractions":`diagonal-fractions`,"stacked-fractions":`stacked-fractions`},"-webkit-font-smoothing":{antialiased:`antialiased`,auto:`subpixel-antialiased`},"-moz-osx-font-smoothing":{grayscale:`antialiased`,auto:`subpixel-antialiased`},"font-stretch":{"ultra-condensed":`font-stretch-ultra-condensed`,"extra-condensed":`font-stretch-extra-condensed`,condensed:`font-stretch-condensed`,"semi-condensed":`font-stretch-semi-condensed`,normal:`font-stretch-normal`,"semi-expanded":`font-stretch-semi-expanded`,expanded:`font-stretch-expanded`,"extra-expanded":`font-stretch-extra-expanded`,"ultra-expanded":`font-stretch-ultra-expanded`},"text-decoration-line":{underline:`underline`,overline:`overline`,"line-through":`line-through`,none:`no-underline`},"border-style":{solid:`border-solid`,dashed:`border-dashed`,dotted:`border-dotted`,double:`border-double`,hidden:`border-hidden`,none:`border-none`},"border-top-style":{solid:`border-t-solid`,dashed:`border-t-dashed`,dotted:`border-t-dotted`,double:`border-t-double`,hidden:`border-t-hidden`,none:`border-t-none`},"border-right-style":{solid:`border-r-solid`,dashed:`border-r-dashed`,dotted:`border-r-dotted`,double:`border-r-double`,hidden:`border-r-hidden`,none:`border-r-none`},"border-bottom-style":{solid:`border-b-solid`,dashed:`border-b-dashed`,dotted:`border-b-dotted`,double:`border-b-double`,hidden:`border-b-hidden`,none:`border-b-none`},"border-left-style":{solid:`border-l-solid`,dashed:`border-l-dashed`,dotted:`border-l-dotted`,double:`border-l-double`,hidden:`border-l-hidden`,none:`border-l-none`},"border-inline-start-style":{solid:`border-s-solid`,dashed:`border-s-dashed`,dotted:`border-s-dotted`,double:`border-s-double`,hidden:`border-s-hidden`,none:`border-s-none`},"border-inline-end-style":{solid:`border-e-solid`,dashed:`border-e-dashed`,dotted:`border-e-dotted`,double:`border-e-double`,hidden:`border-e-hidden`,none:`border-e-none`},"border-inline-style":{solid:`border-x-solid`,dashed:`border-x-dashed`,dotted:`border-x-dotted`,double:`border-x-double`,hidden:`border-x-hidden`,none:`border-x-none`},"border-block-style":{solid:`border-y-solid`,dashed:`border-y-dashed`,dotted:`border-y-dotted`,double:`border-y-double`,hidden:`border-y-hidden`,none:`border-y-none`},"outline-style":{solid:`outline-solid`,dashed:`outline-dashed`,dotted:`outline-dotted`,double:`outline-double`,none:`outline-none`},"object-fit":{contain:`object-contain`,cover:`object-cover`,fill:`object-fill`,none:`object-none`,"scale-down":`object-scale-down`},"object-position":{bottom:`object-bottom`,center:`object-center`,"center center":`object-center`,left:`object-left`,"left center":`object-left`,"left bottom":`object-left-bottom`,"left top":`object-left-top`,right:`object-right`,"right center":`object-right`,"right bottom":`object-right-bottom`,"right top":`object-right-top`,top:`object-top`,"center top":`object-top`,"center bottom":`object-bottom`},"background-repeat":{repeat:`bg-repeat`,"no-repeat":`bg-no-repeat`,"repeat-x":`bg-repeat-x`,"repeat-y":`bg-repeat-y`,round:`bg-repeat-round`,space:`bg-repeat-space`},"background-attachment":{fixed:`bg-fixed`,local:`bg-local`,scroll:`bg-scroll`},"background-clip":{"border-box":`bg-clip-border`,"padding-box":`bg-clip-padding`,"content-box":`bg-clip-content`,text:`bg-clip-text`},"background-origin":{"border-box":`bg-origin-border`,"padding-box":`bg-origin-padding`,"content-box":`bg-origin-content`},"mask-image":{none:`mask-none`},"mask-mode":{alpha:`mask-alpha`,luminance:`mask-luminance`},"mask-size":{auto:`mask-auto`,contain:`mask-contain`,cover:`mask-cover`},"mask-repeat":{repeat:`mask-repeat`,"no-repeat":`mask-no-repeat`},"mask-origin":{"border-box":`mask-origin-border`,"padding-box":`mask-origin-padding`,"content-box":`mask-origin-content`,"fill-box":`mask-origin-fill`,"stroke-box":`mask-origin-stroke`,"view-box":`mask-origin-view`},"mask-clip":{"border-box":`mask-clip-border`,"padding-box":`mask-clip-padding`,"content-box":`mask-clip-content`,"fill-box":`mask-clip-fill`,"stroke-box":`mask-clip-stroke`,"view-box":`mask-clip-view`,"no-clip":`mask-no-clip`},"clip-path":{none:`not-sr-only`},"box-decoration-break":{slice:`box-decoration-slice`,clone:`box-decoration-clone`},"-webkit-box-decoration-break":{slice:`box-decoration-slice`,clone:`box-decoration-clone`},"background-size":{auto:`bg-auto`,cover:`bg-cover`,contain:`bg-contain`},"background-position":{bottom:`bg-bottom`,center:`bg-center`,"center center":`bg-center`,left:`bg-left`,"left center":`bg-left`,"left bottom":`bg-left-bottom`,"left top":`bg-left-top`,right:`bg-right`,"right center":`bg-right`,"right bottom":`bg-right-bottom`,"right top":`bg-right-top`,top:`bg-top`,"center top":`bg-top`,"center bottom":`bg-bottom`},"vertical-align":{baseline:`align-baseline`,top:`align-top`,middle:`align-middle`,bottom:`align-bottom`,"text-top":`align-text-top`,"text-bottom":`align-text-bottom`,sub:`align-sub`,super:`align-super`},"white-space":{normal:`whitespace-normal`,nowrap:`whitespace-nowrap`,pre:`whitespace-pre`,"pre-line":`whitespace-pre-line`,"pre-wrap":`whitespace-pre-wrap`,"break-spaces":`whitespace-break-spaces`},"word-break":{normal:`break-normal`,"break-all":`break-all`,"keep-all":`break-keep`},"overflow-wrap":{"break-word":`break-words`,anywhere:`wrap-anywhere`,normal:`wrap-normal`},"text-overflow":{ellipsis:`text-ellipsis`,clip:`text-clip`},hyphens:{none:`hyphens-none`,manual:`hyphens-manual`,auto:`hyphens-auto`},"list-style-position":{inside:`list-inside`,outside:`list-outside`},"list-style-type":{disc:`list-disc`,decimal:`list-decimal`,none:`list-none`},"table-layout":{auto:`table-auto`,fixed:`table-fixed`},"caption-side":{top:`caption-top`,bottom:`caption-bottom`},"border-collapse":{collapse:`border-collapse`,separate:`border-separate`},"box-sizing":{"border-box":`box-border`,"content-box":`box-content`},"aspect-ratio":{"1 / 1":`aspect-square`,"16 / 9":`aspect-video`,auto:`aspect-auto`},"field-sizing":{fixed:`field-sizing-fixed`,content:`field-sizing-content`},"text-wrap":{wrap:`text-wrap`,nowrap:`text-nowrap`,balance:`text-balance`,pretty:`text-pretty`},isolation:{isolate:`isolate`,auto:`isolation-auto`},float:{right:`float-right`,left:`float-left`,none:`float-none`},clear:{left:`clear-left`,right:`clear-right`,both:`clear-both`,none:`clear-none`},appearance:{none:`appearance-none`,auto:`appearance-auto`},"color-scheme":{normal:`scheme-normal`,dark:`scheme-dark`,light:`scheme-light`,"light dark":`scheme-light-dark`,"only dark":`scheme-only-dark`,"only light":`scheme-only-light`},"mix-blend-mode":{normal:`mix-blend-normal`,multiply:`mix-blend-multiply`,screen:`mix-blend-screen`,overlay:`mix-blend-overlay`,darken:`mix-blend-darken`,lighten:`mix-blend-lighten`,"color-dodge":`mix-blend-color-dodge`,"color-burn":`mix-blend-color-burn`,"hard-light":`mix-blend-hard-light`,"soft-light":`mix-blend-soft-light`,difference:`mix-blend-difference`,exclusion:`mix-blend-exclusion`,hue:`mix-blend-hue`,saturation:`mix-blend-saturation`,color:`mix-blend-color`,luminosity:`mix-blend-luminosity`,"plus-darker":`mix-blend-plus-darker`,"plus-lighter":`mix-blend-plus-lighter`},"background-blend-mode":{normal:`bg-blend-normal`,multiply:`bg-blend-multiply`,screen:`bg-blend-screen`,overlay:`bg-blend-overlay`,darken:`bg-blend-darken`,lighten:`bg-blend-lighten`,"color-dodge":`bg-blend-color-dodge`,"color-burn":`bg-blend-color-burn`,"hard-light":`bg-blend-hard-light`,"soft-light":`bg-blend-soft-light`,difference:`bg-blend-difference`,exclusion:`bg-blend-exclusion`,hue:`bg-blend-hue`,saturation:`bg-blend-saturation`,color:`bg-blend-color`,luminosity:`bg-blend-luminosity`},"overscroll-behavior":{auto:`overscroll-auto`,contain:`overscroll-contain`,none:`overscroll-none`},"overscroll-behavior-x":{auto:`overscroll-x-auto`,contain:`overscroll-x-contain`,none:`overscroll-x-none`},"overscroll-behavior-y":{auto:`overscroll-y-auto`,contain:`overscroll-y-contain`,none:`overscroll-y-none`},"scrollbar-width":{auto:`scrollbar-auto`,thin:`scrollbar-thin`,none:`scrollbar-none`},"scrollbar-gutter":{stable:`scrollbar-gutter-stable`,"stable both-edges":`scrollbar-gutter-both-edges`},"mask-type":{alpha:`mask-type-alpha`,luminance:`mask-type-luminance`},"mask-composite":{add:`mask-composite-add`,subtract:`mask-composite-subtract`,intersect:`mask-composite-intersect`,exclude:`mask-composite-exclude`},"scroll-behavior":{auto:`scroll-auto`,smooth:`scroll-smooth`},"touch-action":{auto:`touch-auto`,none:`touch-none`,"pan-x":`touch-pan-x`,"pan-left":`touch-pan-left`,"pan-right":`touch-pan-right`,"pan-y":`touch-pan-y`,"pan-up":`touch-pan-up`,"pan-down":`touch-pan-down`,manipulation:`touch-manipulation`},"will-change":{auto:`will-change-auto`,scroll:`will-change-scroll`,contents:`will-change-contents`,transform:`will-change-transform`},contain:{none:`contain-none`,content:`contain-content`,strict:`contain-strict`,size:`contain-size`,layout:`contain-layout`,paint:`contain-paint`,style:`contain-style`,"inline-size":`contain-inline-size`},"break-before":{auto:`break-before-auto`,avoid:`break-before-avoid`,all:`break-before-all`,"avoid-page":`break-before-avoid-page`,page:`break-before-page`,left:`break-before-left`,right:`break-before-right`,column:`break-before-column`},"break-after":{auto:`break-after-auto`,avoid:`break-after-avoid`,all:`break-after-all`,"avoid-page":`break-after-avoid-page`,page:`break-after-page`,left:`break-after-left`,right:`break-after-right`,column:`break-after-column`},"break-inside":{auto:`break-inside-auto`,avoid:`break-inside-avoid`,"avoid-page":`break-inside-avoid-page`,"avoid-column":`break-inside-avoid-column`},"forced-color-adjust":{auto:`forced-color-adjust-auto`,none:`forced-color-adjust-none`},filter:{none:`filter-none`},"backdrop-filter":{none:`backdrop-filter-none`},"box-shadow":{none:`shadow-none`},"text-shadow":{none:`text-shadow-none`},"backface-visibility":{hidden:`backface-hidden`,visible:`backface-visible`},perspective:{none:`perspective-none`,"100px":`perspective-dramatic`,"300px":`perspective-near`,"500px":`perspective-normal`,"800px":`perspective-midrange`,"1200px":`perspective-distant`},"transform-style":{"preserve-3d":`transform-3d`,flat:`transform-flat`},"transform-origin":{center:`origin-center`,top:`origin-top`,"top right":`origin-top-right`,right:`origin-right`,"bottom right":`origin-bottom-right`,bottom:`origin-bottom`,"bottom left":`origin-bottom-left`,left:`origin-left`,"top left":`origin-top-left`,"50% 50%":`origin-center`,"100% 0":`origin-top-right`,"100% 0%":`origin-top-right`,"100% 100%":`origin-bottom-right`,"50% 100%":`origin-bottom`,"0 100%":`origin-bottom-left`,"0% 100%":`origin-bottom-left`,"0 50%":`origin-left`,"0% 50%":`origin-left`,"0 0":`origin-top-left`,"0% 0%":`origin-top-left`},"perspective-origin":{center:`perspective-origin-center`,top:`perspective-origin-top`,"top right":`perspective-origin-top-right`,right:`perspective-origin-right`,"bottom right":`perspective-origin-bottom-right`,bottom:`perspective-origin-bottom`,"bottom left":`perspective-origin-bottom-left`,left:`perspective-origin-left`,"top left":`perspective-origin-top-left`,"100% 0":`perspective-origin-top-right`,"100% 0%":`perspective-origin-top-right`,"100% 100%":`perspective-origin-bottom-right`,"0 100%":`perspective-origin-bottom-left`,"0% 100%":`perspective-origin-bottom-left`,"0 0":`perspective-origin-top-left`,"0% 0%":`perspective-origin-top-left`},"scroll-snap-align":{start:`snap-start`,end:`snap-end`,center:`snap-center`,none:`snap-align-none`},"scroll-snap-type":{none:`snap-none`},"scroll-snap-stop":{normal:`snap-normal`,always:`snap-always`},"transition-timing-function":{linear:`ease-linear`,ease:`ease-in-out`,"ease-in":`ease-in`,"ease-out":`ease-out`,"ease-in-out":`ease-in-out`},"transition-property":{all:`transition-all`,none:`transition-none`,color:`transition-colors`,opacity:`transition-opacity`,shadow:`transition-shadow`,transform:`transition-transform`},"transition-behavior":{normal:`transition-normal`,"allow-discrete":`transition-discrete`},animation:{none:`animate-none`},"animation-name":{none:`animate-none`},"background-image":{none:`bg-none`},content:{none:`content-none`},"accent-color":{auto:`accent-auto`},"caret-color":{auto:`caret-auto`},"list-style-image":{none:`list-image-none`},"text-decoration-style":{solid:`decoration-solid`,double:`decoration-double`,dotted:`decoration-dotted`,dashed:`decoration-dashed`,wavy:`decoration-wavy`},"text-decoration-thickness":{auto:`decoration-auto`,"from-font":`decoration-from-font`,"0px":`decoration-0`,"1px":`decoration-1`,"2px":`decoration-2`,"4px":`decoration-4`,"8px":`decoration-8`},"text-underline-offset":{auto:`underline-offset-auto`,"0px":`underline-offset-0`,"1px":`underline-offset-1`,"2px":`underline-offset-2`,"4px":`underline-offset-4`,"8px":`underline-offset-8`},"font-weight":{100:`font-thin`,200:`font-extralight`,300:`font-light`,400:`font-normal`,500:`font-medium`,600:`font-semibold`,700:`font-bold`,800:`font-extrabold`,900:`font-black`,bold:`font-bold`,normal:`font-normal`}},hm={width:`w`,height:`h`,"inline-size":`w`,"block-size":`h`,"flex-basis":`basis`,"min-width":`min-w`,"min-height":`min-h`,"min-inline-size":`min-w`,"min-block-size":`min-h`,"max-width":`max-w`,"max-height":`max-h`,"max-inline-size":`max-w`,"max-block-size":`max-h`,margin:`m`,"margin-top":`mt`,"margin-right":`mr`,"margin-bottom":`mb`,"margin-left":`ml`,"margin-inline-start":`ms`,"margin-inline-end":`me`,"margin-inline":`mx`,"margin-block":`my`,"margin-block-start":`mt`,"margin-block-end":`mb`,top:`top`,right:`right`,bottom:`bottom`,left:`left`,"inset-inline-start":`start`,"inset-inline-end":`end`,padding:`p`,"padding-top":`pt`,"padding-right":`pr`,"padding-bottom":`pb`,"padding-left":`pl`,"padding-inline-start":`ps`,"padding-inline-end":`pe`,"padding-inline":`px`,"padding-block":`py`,"padding-block-start":`pt`,"padding-block-end":`pb`,gap:`gap`,"row-gap":`gap-y`,"column-gap":`gap-x`,"text-indent":`indent`,"border-spacing":`border-spacing`,"border-spacing-x":`border-spacing-x`,"border-spacing-y":`border-spacing-y`,"scroll-margin":`scroll-m`,"scroll-margin-top":`scroll-mt`,"scroll-margin-right":`scroll-mr`,"scroll-margin-bottom":`scroll-mb`,"scroll-margin-left":`scroll-ml`,"scroll-margin-inline-start":`scroll-ms`,"scroll-margin-inline-end":`scroll-me`,"scroll-margin-inline":`scroll-mx`,"scroll-margin-block":`scroll-my`,"scroll-margin-block-start":`scroll-mt`,"scroll-margin-block-end":`scroll-mb`,"scroll-padding":`scroll-p`,"scroll-padding-top":`scroll-pt`,"scroll-padding-right":`scroll-pr`,"scroll-padding-bottom":`scroll-pb`,"scroll-padding-left":`scroll-pl`,"scroll-padding-inline-start":`scroll-ps`,"scroll-padding-inline-end":`scroll-pe`,"scroll-padding-inline":`scroll-px`,"scroll-padding-block":`scroll-py`,"scroll-padding-block-start":`scroll-pt`,"scroll-padding-block-end":`scroll-pb`,color:`text`,"background-color":`bg`,"background-image":`bg`,"-webkit-line-clamp":`line-clamp`,"line-clamp":`line-clamp`,fill:`fill`,stroke:`stroke`,"border-color":`border`,"border-top-color":`border-t`,"border-right-color":`border-r`,"border-bottom-color":`border-b`,"border-left-color":`border-l`,"border-inline-start-color":`border-s`,"border-inline-end-color":`border-e`,"border-inline-color":`border-x`,"border-block-color":`border-y`,"outline-color":`outline`,"text-decoration-color":`decoration`,"caret-color":`caret`,"accent-color":`accent`,"border-width":`border`,"border-top-width":`border-t`,"border-right-width":`border-r`,"border-bottom-width":`border-b`,"border-left-width":`border-l`,"border-inline-start-width":`border-s`,"border-inline-end-width":`border-e`,"border-inline-width":`border-x`,"border-block-width":`border-y`,"stroke-width":`stroke`,"border-radius":`rounded`,"border-top-left-radius":`rounded-tl`,"border-top-right-radius":`rounded-tr`,"border-bottom-right-radius":`rounded-br`,"border-bottom-left-radius":`rounded-bl`,"border-start-start-radius":`rounded-ss`,"border-start-end-radius":`rounded-se`,"border-end-end-radius":`rounded-ee`,"border-end-start-radius":`rounded-es`,opacity:`opacity`,"z-index":`z`,"font-size":`text`,"line-height":`leading`,"letter-spacing":`tracking`,"outline-width":`outline`,"outline-offset":`outline-offset`,"box-shadow":`shadow`,filter:`filter`,"backdrop-filter":`backdrop-filter`,rotate:`rotate`,scale:`scale`,translate:`translate`,"grid-template-columns":`grid-cols`,"grid-template-rows":`grid-rows`,"transition-property":`transition`,"transition-duration":`duration`,"transition-delay":`delay`,"transition-timing-function":`ease`,animation:`animate`,"animation-name":`animate`,"animation-duration":`duration`,"animation-delay":`delay`,"animation-timing-function":`ease`,"animation-iteration-count":`animate-iteration`,perspective:`perspective`,"mask-position":`mask-position`,"mask-image":`mask`,"text-shadow":`text-shadow`,"clip-path":`clip-path`,"grid-column":`col`,"grid-column-start":`col-start`,"grid-column-end":`col-end`,"grid-row":`row`,"grid-row-start":`row-start`,"grid-row-end":`row-end`,cursor:`cursor`,content:`content`,"list-style-type":`list`,"list-style-image":`list-image`,"will-change":`will-change`,contain:`contain`,"mask-size":`mask-size`,"mask-repeat":`mask-repeat`,"mask-clip":`mask-clip`,"mask-origin":`mask-origin`,"mask-mode":`mask-mode`,"mask-composite":`mask-composite`,"font-family":`font`,"font-weight":`font`,"font-stretch":`font-stretch`,"background-position-x":`bg-position-x`,"background-position-y":`bg-position-y`,"column-count":`columns`,"column-width":`columns`,"aspect-ratio":`aspect`,"object-position":`object`,order:`order`,"tab-size":`tab`,zoom:`zoom`,"flex-grow":`grow`,"flex-shrink":`shrink`,"word-spacing":`word-spacing`,hyphens:`hyphens`,"scrollbar-color":`scrollbar-color`,"font-feature-settings":`font-feature`,"perspective-origin":`perspective-origin`,"column-rule-color":`column-rule`,"column-rule-width":`column-rule`,"column-rule-style":`column-rule`,"stroke-dasharray":`stroke-dasharray`,"stroke-dashoffset":`stroke-dashoffset`,"stroke-linecap":`stroke-linecap`,"stroke-linejoin":`stroke-linejoin`,"image-rendering":`image-render`,"paint-order":`paint-order`,"shape-outside":`shape-outside`,"shape-margin":`shape-margin`,"shape-image-threshold":`shape-image-threshold`},gm=new Set(`width.height.min-width.min-height.max-width.max-height.inline-size.block-size.min-inline-size.min-block-size.max-inline-size.max-block-size.flex-basis.margin.margin-top.margin-right.margin-bottom.margin-left.margin-inline-start.margin-inline-end.margin-inline.margin-block.margin-block-start.margin-block-end.padding.padding-top.padding-right.padding-bottom.padding-left.padding-inline-start.padding-inline-end.padding-inline.padding-block.padding-block-start.padding-block-end.top.right.bottom.left.inset-inline-start.inset-inline-end.gap.row-gap.column-gap.text-indent.border-spacing.border-spacing-x.border-spacing-y.scroll-margin.scroll-margin-top.scroll-margin-right.scroll-margin-bottom.scroll-margin-left.scroll-margin-inline-start.scroll-margin-inline-end.scroll-margin-inline.scroll-margin-block.scroll-margin-block-start.scroll-margin-block-end.scroll-padding.scroll-padding-top.scroll-padding-right.scroll-padding-bottom.scroll-padding-left.scroll-padding-inline-start.scroll-padding-inline-end.scroll-padding-inline.scroll-padding-block.scroll-padding-block-start.scroll-padding-block-end.border-width.border-top-width.border-right-width.border-bottom-width.border-left-width.border-inline-start-width.border-inline-end-width.border-inline-width.border-block-width.border-radius.border-top-left-radius.border-top-right-radius.border-bottom-right-radius.border-bottom-left-radius.border-start-start-radius.border-start-end-radius.border-end-end-radius.border-end-start-radius.font-size.line-height.letter-spacing.outline-width.outline-offset`.split(`.`)),_m={width:{auto:`w-auto`,"50%":`w-1/2`,"33.333333%":`w-1/3`,"66.666667%":`w-2/3`,"25%":`w-1/4`,"75%":`w-3/4`,"100%":`w-full`,"100vw":`w-screen`,"100dvw":`w-dvw`,"100lvw":`w-lvw`,"100svw":`w-svw`,"min-content":`w-min`,"max-content":`w-max`,"fit-content":`w-fit`},height:{auto:`h-auto`,"50%":`h-1/2`,"33.333333%":`h-1/3`,"66.666667%":`h-2/3`,"25%":`h-1/4`,"75%":`h-3/4`,"100%":`h-full`,"100vh":`h-screen`,"100dvh":`h-dvh`,"100lvh":`h-lvh`,"100svh":`h-svh`,"min-content":`h-min`,"max-content":`h-max`,"fit-content":`h-fit`},"inline-size":{auto:`w-auto`,"100%":`w-full`,"100vw":`w-screen`,"100dvw":`w-dvw`,"100lvw":`w-lvw`,"100svw":`w-svw`,"min-content":`w-min`,"max-content":`w-max`,"fit-content":`w-fit`},"block-size":{auto:`h-auto`,"100%":`h-full`,"100vh":`h-screen`,"100dvh":`h-dvh`,"100lvh":`h-lvh`,"100svh":`h-svh`,"min-content":`h-min`,"max-content":`h-max`,"fit-content":`h-fit`},"flex-basis":{auto:`basis-auto`,"100%":`basis-full`,"50%":`basis-1/2`,"33.333333%":`basis-1/3`,"66.666667%":`basis-2/3`,"25%":`basis-1/4`,"75%":`basis-3/4`,"20%":`basis-1/5`,"40%":`basis-2/5`,"60%":`basis-3/5`,"80%":`basis-4/5`,"16.666667%":`basis-1/6`,"83.333333%":`basis-5/6`},"min-width":{"50%":`min-w-1/2`,"100%":`min-w-full`,"100vw":`min-w-screen`,"100dvw":`min-w-dvw`,"100lvw":`min-w-lvw`,"100svw":`min-w-svw`,"min-content":`min-w-min`,"max-content":`min-w-max`,"fit-content":`min-w-fit`},"min-height":{"50%":`min-h-1/2`,"100%":`min-h-full`,"100vh":`min-h-screen`,"100dvh":`min-h-dvh`,"100lvh":`min-h-lvh`,"100svh":`min-h-svh`,"min-content":`min-h-min`,"max-content":`min-h-max`,"fit-content":`min-h-fit`},"max-width":{"50%":`max-w-1/2`,"100%":`max-w-full`,"100vw":`max-w-screen`,"100dvw":`max-w-dvw`,"100lvw":`max-w-lvw`,"100svw":`max-w-svw`,"min-content":`max-w-min`,"max-content":`max-w-max`,"fit-content":`max-w-fit`,none:`max-w-none`},"max-height":{"50%":`max-h-1/2`,"100%":`max-h-full`,"100vh":`max-h-screen`,"100dvh":`max-h-dvh`,"100lvh":`max-h-lvh`,"100svh":`max-h-svh`,"min-content":`max-h-min`,"max-content":`max-h-max`,"fit-content":`max-h-fit`,none:`max-h-none`},"min-inline-size":{"100%":`min-w-full`,"100vw":`min-w-screen`,"min-content":`min-w-min`,"max-content":`min-w-max`,"fit-content":`min-w-fit`},"min-block-size":{"100%":`min-h-full`,"100vh":`min-h-screen`,"min-content":`min-h-min`,"max-content":`min-h-max`,"fit-content":`min-h-fit`},"max-inline-size":{"100%":`max-w-full`,"100vw":`max-w-screen`,"min-content":`max-w-min`,"max-content":`max-w-max`,"fit-content":`max-w-fit`,none:`max-w-none`},"max-block-size":{"100%":`max-h-full`,"100vh":`max-h-screen`,"min-content":`max-h-min`,"max-content":`max-h-max`,"fit-content":`max-h-fit`,none:`max-h-none`},margin:{auto:`m-auto`},"margin-top":{auto:`mt-auto`},"margin-right":{auto:`mr-auto`},"margin-bottom":{auto:`mb-auto`},"margin-left":{auto:`ml-auto`},"border-radius":{0:`rounded-none`,"0px":`rounded-none`,"0.125rem":`rounded-xs`,"2px":`rounded-xs`,"0.25rem":`rounded-sm`,"4px":`rounded-sm`,"0.375rem":`rounded-md`,"6px":`rounded-md`,"0.5rem":`rounded-lg`,"8px":`rounded-lg`,"0.75rem":`rounded-xl`,"12px":`rounded-xl`,"1rem":`rounded-2xl`,"16px":`rounded-2xl`,"1.5rem":`rounded-3xl`,"24px":`rounded-3xl`,"9999px":`rounded-full`},"border-top-left-radius":{0:`rounded-tl-none`,"0px":`rounded-tl-none`,"0.25rem":`rounded-tl-sm`,"4px":`rounded-tl-sm`,"0.5rem":`rounded-tl-lg`,"8px":`rounded-tl-lg`,"9999px":`rounded-tl-full`},"border-top-right-radius":{0:`rounded-tr-none`,"0px":`rounded-tr-none`,"0.25rem":`rounded-tr-sm`,"4px":`rounded-tr-sm`,"0.5rem":`rounded-tr-lg`,"8px":`rounded-tr-lg`,"9999px":`rounded-tr-full`},"border-bottom-right-radius":{0:`rounded-br-none`,"0px":`rounded-br-none`,"0.25rem":`rounded-br-sm`,"4px":`rounded-br-sm`,"0.5rem":`rounded-br-lg`,"8px":`rounded-br-lg`,"9999px":`rounded-br-full`},"border-bottom-left-radius":{0:`rounded-bl-none`,"0px":`rounded-bl-none`,"0.25rem":`rounded-bl-sm`,"4px":`rounded-bl-sm`,"0.5rem":`rounded-bl-lg`,"8px":`rounded-bl-lg`,"9999px":`rounded-bl-full`},"border-start-start-radius":{0:`rounded-ss-none`,"0px":`rounded-ss-none`,"0.25rem":`rounded-ss-sm`,"4px":`rounded-ss-sm`,"0.5rem":`rounded-ss-lg`,"8px":`rounded-ss-lg`,"9999px":`rounded-ss-full`},"border-start-end-radius":{0:`rounded-se-none`,"0px":`rounded-se-none`,"0.25rem":`rounded-se-sm`,"4px":`rounded-se-sm`,"0.5rem":`rounded-se-lg`,"8px":`rounded-se-lg`,"9999px":`rounded-se-full`},"border-end-end-radius":{0:`rounded-ee-none`,"0px":`rounded-ee-none`,"0.25rem":`rounded-ee-sm`,"4px":`rounded-ee-sm`,"0.5rem":`rounded-ee-lg`,"8px":`rounded-ee-lg`,"9999px":`rounded-ee-full`},"border-end-start-radius":{0:`rounded-es-none`,"0px":`rounded-es-none`,"0.25rem":`rounded-es-sm`,"4px":`rounded-es-sm`,"0.5rem":`rounded-es-lg`,"8px":`rounded-es-lg`,"9999px":`rounded-es-full`},columns:{auto:`columns-auto`},"font-size":{"12px":`text-xs`,"0.75rem":`text-xs`,"14px":`text-sm`,"0.875rem":`text-sm`,"16px":`text-base`,"1rem":`text-base`,"18px":`text-lg`,"1.125rem":`text-lg`,"20px":`text-xl`,"1.25rem":`text-xl`,"24px":`text-2xl`,"1.5rem":`text-2xl`,"30px":`text-3xl`,"1.875rem":`text-3xl`,"36px":`text-4xl`,"2.25rem":`text-4xl`,"48px":`text-5xl`,"3rem":`text-5xl`,"60px":`text-6xl`,"3.75rem":`text-6xl`,"72px":`text-7xl`,"4.5rem":`text-7xl`,"96px":`text-8xl`,"6rem":`text-8xl`,"128px":`text-9xl`,"8rem":`text-9xl`},"line-height":{"16px":`leading-4`,"1rem":`leading-4`,"20px":`leading-5`,"1.25rem":`leading-5`,"24px":`leading-6`,"1.5rem":`leading-6`,"28px":`leading-7`,"1.75rem":`leading-7`,"32px":`leading-8`,"2rem":`leading-8`,1:`leading-none`,normal:`leading-normal`,"1.25":`leading-tight`,"1.375":`leading-snug`,"1.5":`leading-normal`,"1.625":`leading-relaxed`,2:`leading-loose`},"letter-spacing":{normal:`tracking-normal`,"-0.05em":`tracking-tighter`,"-0.025em":`tracking-tight`,"0.025em":`tracking-wide`,"0.05em":`tracking-wider`,"0.1em":`tracking-widest`},"outline-width":{0:`outline-0`,"0px":`outline-0`,"1px":`outline-1`,"2px":`outline-2`,"4px":`outline-4`,"8px":`outline-8`},"outline-offset":{0:`outline-offset-0`,"0px":`outline-offset-0`,"1px":`outline-offset-1`,"2px":`outline-offset-2`,"4px":`outline-offset-4`,"8px":`outline-offset-8`},overflow:{auto:`overflow-auto`,hidden:`overflow-hidden`,clip:`overflow-clip`,visible:`overflow-visible`,scroll:`overflow-scroll`},"overflow-x":{auto:`overflow-x-auto`,hidden:`overflow-x-hidden`,clip:`overflow-x-clip`,visible:`overflow-x-visible`,scroll:`overflow-x-scroll`},"overflow-y":{auto:`overflow-y-auto`,hidden:`overflow-y-hidden`,clip:`overflow-y-clip`,visible:`overflow-y-visible`,scroll:`overflow-y-scroll`},cursor:{alias:`cursor-alias`,auto:`cursor-auto`,cell:`cursor-cell`,"context-menu":`cursor-context-menu`,copy:`cursor-copy`,crosshair:`cursor-crosshair`,default:`cursor-default`,grab:`cursor-grab`,grabbing:`cursor-grabbing`,help:`cursor-help`,move:`cursor-move`,"not-allowed":`cursor-not-allowed`,pointer:`cursor-pointer`,progress:`cursor-progress`,text:`cursor-text`,wait:`cursor-wait`,"zoom-in":`cursor-zoom-in`,"zoom-out":`cursor-zoom-out`},"pointer-events":{none:`pointer-events-none`,auto:`pointer-events-auto`},resize:{none:`resize-none`,both:`resize`,horizontal:`resize-x`,vertical:`resize-y`},"user-select":{none:`select-none`,text:`select-text`,all:`select-all`,auto:`select-auto`}};function vm(e,t){let n=e.trim().toLowerCase(),r=n.startsWith(`-`),i=r?n.slice(1):n;if(i===`0`||i===`0px`||i===`0rem`)return`0`;if(i===`1px`)return r?`-px`:`px`;let a=ym(i)??bm(i);if(a===void 0)return;let o=a/.25;if(!Number.isFinite(o))return;let s=Math.round(o);if(Math.abs(o-s)<1e-6)return r?`-${s}`:String(s);if(t.numericMultipliers!==`all`||Math.abs(o-Math.round(o*4)/4)>1e-6)return;let c=String(o).replace(/\.([0-9]*?)0+$/,`.$1`);return r?`-${c}`:c}function ym(e){if(!e.endsWith(`rem`))return;let t=Number(e.slice(0,-3));return Number.isFinite(t)?t:void 0}function bm(e){if(!e.endsWith(`px`))return;let t=Number(e.slice(0,-2));return Number.isFinite(t)?t/16:void 0}function xm(e,t){let n=mm[e.property]?.[e.value];if(n)return X(e,n,`exact`);let r=_m[e.property]?.[e.value.toLowerCase()];if(r)return X(e,r,`exact`);if((e.property===`-webkit-line-clamp`||e.property===`line-clamp`)&&/^\d+$/.test(e.value))return X(e,`line-clamp-${e.value}`,`exact`);if((e.property===`-webkit-line-clamp`||e.property===`line-clamp`)&&e.value===`none`)return X(e,`line-clamp-none`,`exact`);let i=Em(e);if(i)return X(e,i,`exact`);if(e.property===`z-index`&&/^-?\d+$/.test(e.value))return X(e,e.value.startsWith(`-`)?`-z-${e.value.slice(1)}`:`z-${e.value}`,`exact`);let a=Cm(e);if(a)return X(e,a,`exact`);let o=jm(e);if(o)return X(e,o,`exact`);let s=Mm(e);if(s)return X(e,s,`exact`);let c=Sm(e,t);if(c)return X(e,c,`exact`);let l=Fm(e,t);if(l)return X(e,l,`exact`);let u=Km(e,t);if(u)return Array.isArray(u)?u.map(t=>X(e,t,`exact`)):X(e,u,`exact`);let d=Tm(e);if(d)return Array.isArray(d)?d.map(t=>X(e,t,`exact`)):X(e,d,`exact`);let f=Bm(e);if(f)return Array.isArray(f)?f.map(t=>X(e,t,`exact`)):X(e,f,`exact`);let p=th(e);if(p)return X(e,p,`exact`);let m=ah(e,t);if(m)return Array.isArray(m)?m.map(t=>X(e,t,`exact`)):X(e,m,`exact`);let h=rh(e);if(h)return X(e,h,`exact`);let g=hm[e.property];if(g&&t.allowArbitraryValues)return X(e,fm(g,e.value),`arbitrary`);if(t.allowArbitraryProperties)return X(e,pm(e.property,e.value),`arbitrary`)}function Sm(e,t){if(!gm.has(e.property))return;let n=hm[e.property];if(!n)return;let r=vm(e.value,t);if(r)return r.startsWith(`-`)?`-${n}-${r.slice(1)}`:`${n}-${r}`}function Cm(e){if(e.property===`tab-size`&&/^\d+$/.test(e.value))return`tab-${e.value}`;if(e.property===`zoom`){let t=Number(e.value);if(Number.isFinite(t)&&t>0)return`zoom-${t*100}`}if(e.property===`order`&&/^-?\d+$/.test(e.value))return e.value.startsWith(`-`)?`-order-${e.value.slice(1)}`:`order-${e.value}`;if((e.property===`column-count`||e.property===`columns`)&&/^\d+$/.test(e.value))return`columns-${e.value}`;let t=wm(e);if(t)return t;let n=Dm(e);if(n)return n;let r=Om(e);if(r)return r;let i=km(e);if(i)return i;if(e.property===`flex-grow`&&/^[01]$/.test(e.value))return e.value===`1`?`grow`:`grow-0`;if(e.property===`flex-shrink`&&/^[01]$/.test(e.value))return e.value===`1`?`shrink`:`shrink-0`;if(e.property===`stroke-width`&&/^\d+$/.test(e.value))return`stroke-${e.value}`;if(e.property===`transition-duration`){let t=Am(e.value);if(t!==void 0)return`duration-${t}`}if(e.property===`transition-delay`){let t=Am(e.value);if(t!==void 0)return`delay-${t}`}}function wm(e){if(e.property!==`aspect-ratio`)return;let t=e.value.match(/^(\d+)\s*\/\s*(\d+)$/);if(!t)return;let[,n,r]=t;return n===r?`aspect-square`:n===`16`&&r===`9`?`aspect-video`:`aspect-${n}/${r}`}function Tm(e){if(e.property!==`scroll-snap-type`)return;if(e.value===`none`)return`snap-none`;let t=e.value.trim().toLowerCase().split(/\s+/);if(t.length!==2)return;let n={x:`snap-x`,y:`snap-y`,both:`snap-both`,block:`snap-y`,inline:`snap-x`},r={mandatory:`snap-mandatory`,proximity:`snap-proximity`},i=n[t[0]??``],a=r[t[1]??``];if(!(!i||!a))return[i,a]}function Em(e){if(e.property!==`content`)return;if(e.value===`none`)return`content-none`;let t=e.value.match(/^["'](.+)["']$/)?.[1];if(t)return`content-['${t.replace(/'/g,`\\'`)}']`}function Dm(e){let t={"grid-column-start":`col-start`,"grid-column-end":`col-end`,"grid-row-start":`row-start`,"grid-row-end":`row-end`}[e.property];if(!(!t||!/^-?\d+$/.test(e.value)))return e.value.startsWith(`-`)?`-${t}-${e.value.slice(1)}`:`${t}-${e.value}`}function Om(e){if(e.value===`1 / -1`){if(e.property===`grid-column`)return`col-span-full`;if(e.property===`grid-row`)return`row-span-full`}let t=e.value.match(/^span (\d+) \/ span \d+$/)?.[1];if(t){if(e.property===`grid-column`)return`col-span-${t}`;if(e.property===`grid-row`)return`row-span-${t}`}}function km(e){let t=e.value.match(/^repeat\((\d+), minmax\(0, 1fr\)\)$/)?.[1];if(t){if(e.property===`grid-template-columns`)return`grid-cols-${t}`;if(e.property===`grid-template-rows`)return`grid-rows-${t}`}}function Am(e){let t=e.trim().toLowerCase();if(t.endsWith(`ms`)){let e=Number(t.slice(0,-2));return Number.isInteger(e)?e:void 0}if(t.endsWith(`s`)){let e=Number(t.slice(0,-1))*1e3;return Number.isInteger(e)?e:void 0}}function jm(e){let t={"border-width":`border`,"border-top-width":`border-t`,"border-right-width":`border-r`,"border-bottom-width":`border-b`,"border-left-width":`border-l`,"border-inline-start-width":`border-s`,"border-inline-end-width":`border-e`,"border-inline-width":`border-x`,"border-block-width":`border-y`}[e.property];if(!t)return;let n=e.value.trim().toLowerCase();if(n===`1px`)return t;if(n===`0`||n===`0px`)return`${t}-0`;let r=n.match(/^(2|4|8)px$/)?.[1];return r?`${t}-${r}`:void 0}function Mm(e){if(e.property!==`opacity`)return;let t=Number(e.value);if(!Number.isFinite(t)||t<0||t>1)return;let n=t*100;if(Number.isInteger(n))return`opacity-${n}`}var Nm={white:`#ffffff`,black:`#000000`,transparent:`transparent`,currentcolor:`currentColor`},Pm={inherit:`inherit`,transparent:`transparent`,currentcolor:`current`};function Fm(e,t){let n={color:`text`,fill:`fill`,stroke:`stroke`,"background-color":`bg`,"border-color":`border`,"border-top-color":`border-t`,"border-right-color":`border-r`,"border-bottom-color":`border-b`,"border-left-color":`border-l`,"border-inline-start-color":`border-s`,"border-inline-end-color":`border-e`,"border-inline-color":`border-x`,"border-block-color":`border-y`,"outline-color":`outline`,"text-decoration-color":`decoration`,"caret-color":`caret`,"accent-color":`accent`}[e.property];if(!n||t.colorMatch===`none`)return;let r=Lm(e.value),i=Pm[r];if(i)return`${n}-${i}`;let a=lm(r);if(a)return`${n}-${a}`;let o=Object.entries(t.theme.colors).find(([,e])=>Lm(e)===r)?.[0];if(o)return`${n}-${o}`;let s=Im(r,t);if(s)return`${n}-${s}`}function Im(e,t){let n=e.match(/^oklch\(([^/]+)\/\s*([\d.]+)%?\s*\)$/);if(n){let[,e,r]=n;if(!e||!r)return;let i=Lm(`oklch(${e.trim()})`),a=Object.entries(t.theme.colors).find(([,e])=>Lm(e)===i)?.[0];return a?`${a}/${Math.round(Number(r))}`:void 0}let r=e.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)$/);if(r){let[,e,n,i,a]=r;if(!e||!n||!i||!a)return;let o=Lm(`#${Number(e).toString(16).padStart(2,`0`)}${Number(n).toString(16).padStart(2,`0`)}${Number(i).toString(16).padStart(2,`0`)}`),s=Object.entries(t.theme.colors).find(([,e])=>Lm(e)===o)?.[0];return s?`${s}/${Math.round(Number(a)*100)}`:void 0}}function Lm(e){let t=e.trim().toLowerCase(),n=Nm[t];return n?n.toLowerCase():Rm(t)||t}function Rm(e){let t=e.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);if(!t){let t=e.match(/^rgb\(\s*(\d+)\s+(\d+)\s+(\d+)\s*\)$/);if(!t)return;let[,n,r,i]=t;return!n||!r||!i?void 0:`#${zm(Number(n))}${zm(Number(r))}${zm(Number(i))}`}let[,n,r,i]=t;if(!(!n||!r||!i))return`#${zm(Number(n))}${zm(Number(r))}${zm(Number(i))}`}function zm(e){return Math.max(0,Math.min(255,Math.round(e))).toString(16).padStart(2,`0`)}function Bm(e){if(e.property!==`filter`&&e.property!==`backdrop-filter`)return;let t=e.property===`backdrop-filter`?`backdrop-`:``,n=e.value.trim().toLowerCase(),r=n.match(/^blur\(([^)]+)\)$/)?.[1];if(r===`8px`)return`${t}blur`;if(r)return`${t}blur-[${r}]`;let i=n.match(/^brightness\(([^)]+)\)$/)?.[1];if(i)return Gm(`${t}brightness`,i);let a=n.match(/^contrast\(([^)]+)\)$/)?.[1];if(a)return Gm(`${t}contrast`,a);let o=n.match(/^grayscale\(([^)]+)\)$/)?.[1];if(o)return Gm(`${t}grayscale`,o);let s=n.match(/^invert\(([^)]+)\)$/)?.[1];if(s)return Gm(`${t}invert`,s);let c=n.match(/^saturate\(([^)]+)\)$/)?.[1];if(c)return Gm(`${t}saturate`,c);let l=n.match(/^sepia\(([^)]+)\)$/)?.[1];if(l)return Gm(`${t}sepia`,l);let u=n.match(/^hue-rotate\((-?\d+(?:\.\d+)?deg)\)$/)?.[1];if(u)return Ym(u)?.replace(`rotate-`,`${t}hue-rotate-`).replace(`-rotate-`,`-${t}hue-rotate-`);let d=n.match(/^opacity\(([^)]+)\)$/)?.[1];if(d&&t===`backdrop-`)return Gm(`backdrop-opacity`,d);let f=n.match(/^drop-shadow\((.+)\)$/)?.[1];if(f&&t===``)return Wm(f);let p=Vm(n,t);if(p&&p.length>0)return p.length===1?p[0]:p}function Vm(e,t){let n=e.match(/[a-z-]+\([^)]+\)/gi);if(!n||n.length<2)return;let r=[];for(let e of n){let n=Hm(e.toLowerCase(),t);n&&r.push(n)}return r.length>=2?r:void 0}function Hm(e,t){let n=e.match(/^blur\(([^)]+)\)$/)?.[1];if(n===`8px`)return`${t}blur`;if(n)return`${t}blur-[${n}]`;let r=e.match(/^brightness\(([^)]+)\)$/)?.[1];if(r)return Gm(`${t}brightness`,r);let i=e.match(/^contrast\(([^)]+)\)$/)?.[1];if(i)return Gm(`${t}contrast`,i);let a=e.match(/^grayscale\(([^)]+)\)$/)?.[1];if(a)return Gm(`${t}grayscale`,a);let o=e.match(/^saturate\(([^)]+)\)$/)?.[1];if(o)return Gm(`${t}saturate`,o);let s=e.match(/^sepia\(([^)]+)\)$/)?.[1];if(s)return Gm(`${t}sepia`,s);let c=e.match(/^invert\(([^)]+)\)$/)?.[1];if(c)return Gm(`${t}invert`,c);let l=e.match(/^hue-rotate\((-?\d+(?:\.\d+)?deg)\)$/)?.[1];if(l)return Ym(l)?.replace(`rotate-`,`${t}hue-rotate-`).replace(`-rotate-`,`-${t}hue-rotate-`)}var Um={"0 1px 1px rgb(0 0 0 / 0.05)":`drop-shadow-xs`,"0 1px 2px rgb(0 0 0 / 0.15)":`drop-shadow-sm`,"0 3px 3px rgb(0 0 0 / 0.12)":`drop-shadow-md`,"0 4px 4px rgb(0 0 0 / 0.15)":`drop-shadow-lg`,"0 9px 7px rgb(0 0 0 / 0.1)":`drop-shadow-xl`,"0 25px 25px rgb(0 0 0 / 0.15)":`drop-shadow-2xl`};function Wm(e){return Um[e.trim().replace(/\s+/g,` `)]}function Gm(e,t){let n=t.trim(),r=n.endsWith(`%`)?Number(n.slice(0,-1)):Number(n)*100;if(Number.isFinite(r))return Number.isInteger(r)?r===100&&(e.endsWith(`grayscale`)||e.endsWith(`invert`)||e.endsWith(`sepia`))?e:`${e}-${r}`:`${e}-[${n}]`}function Km(e,t){if(e.property===`rotate`)return Ym(e.value);if(e.property===`scale`)return $m(e.value);if(e.property===`scale-x`)return $m(e.value,`scale-x`);if(e.property===`scale-y`)return $m(e.value,`scale-y`);if(e.property===`scale-z`)return $m(e.value,`scale-z`);if(e.property===`skew`)return Xm(`skew`,e.value);if(e.property===`skew-x`)return Xm(`skew-x`,e.value);if(e.property===`skew-y`)return Xm(`skew-y`,e.value);if(e.property===`translate`)return Zm(e.value,t);if(e.property===`translate-x`)return Qm(`translate-x`,e.value,t);if(e.property===`translate-y`)return Qm(`translate-y`,e.value,t);if(e.property===`translate-z`)return Qm(`translate-z`,e.value,t);if(e.property===`transform`)return Jm(e.value,t)}var qm=[{pattern:/rotate\((-?\d+(?:\.\d+)?deg)\)/i,convert:e=>Ym(e)},{pattern:/rotateX\((-?\d+(?:\.\d+)?deg)\)/i,convert:e=>Xm(`rotate-x`,e)},{pattern:/rotateY\((-?\d+(?:\.\d+)?deg)\)/i,convert:e=>Xm(`rotate-y`,e)},{pattern:/rotateZ\((-?\d+(?:\.\d+)?deg)\)/i,convert:e=>Xm(`rotate-z`,e)},{pattern:/scale\((-?\d+(?:\.\d+)?)\)/i,convert:e=>$m(e)},{pattern:/scaleX\((-?\d+(?:\.\d+)?)\)/i,convert:e=>$m(e,`scale-x`)},{pattern:/scaleY\((-?\d+(?:\.\d+)?)\)/i,convert:e=>$m(e,`scale-y`)},{pattern:/scaleZ\((-?\d+(?:\.\d+)?)\)/i,convert:e=>$m(e,`scale-z`)},{pattern:/translateX\(([^)]+)\)/i,convert:(e,t)=>Qm(`translate-x`,e,t)},{pattern:/translateY\(([^)]+)\)/i,convert:(e,t)=>Qm(`translate-y`,e,t)},{pattern:/translateZ\(([^)]+)\)/i,convert:(e,t)=>Qm(`translate-z`,e,t)},{pattern:/skewX\((-?\d+(?:\.\d+)?deg)\)/i,convert:e=>Xm(`skew-x`,e)},{pattern:/skewY\((-?\d+(?:\.\d+)?deg)\)/i,convert:e=>Xm(`skew-y`,e)}];function Jm(e,t){let n=[];for(let r of qm){let i=e.match(r.pattern);if(i?.[1]){let e=r.convert(i[1],t);e&&n.push(e)}}if(n.length!==0)return n.length===1?n[0]:n}function Ym(e){return Xm(`rotate`,e)}function Xm(e,t){let n=t.trim().toLowerCase();if(!n.endsWith(`deg`))return;let r=Number(n.slice(0,-3));if(!Number.isFinite(r))return;let i=Math.abs(r),a=Number.isInteger(i)?String(i):`[${i}deg]`;return r<0?`-${e}-${a}`:`${e}-${a}`}function Zm(e,t){let[n,r=n]=e.trim().split(/\s+/);if(!(!n||r!==n))return Qm(`translate`,n,t)}function Qm(e,t,n){let r=vm(t,n);if(r)return r.startsWith(`-`)?`-${e}-${r.slice(1)}`:`${e}-${r}`}function $m(e,t=`scale`){let n=Number(e.trim());if(!Number.isFinite(n))return;let r=n*100;return Number.isInteger(r)?r<0?`-${t}-${Math.abs(r)}`:`${t}-${r}`:`${t}-[${e.trim()}]`}var eh={"0 1px 2px 0 rgb(0 0 0 / 0.05)":`shadow-xs`,"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)":`shadow-sm`,"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)":`shadow-md`,"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)":`shadow-lg`,"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)":`shadow-xl`,"0 25px 50px -12px rgb(0 0 0 / 0.25)":`shadow-2xl`,"inset 0 2px 4px 0 rgb(0 0 0 / 0.05)":`shadow-inner`};function th(e){if(e.property===`box-shadow`)return eh[e.value.trim().replace(/\s+/g,` `)]}var nh={color:`text`,"background-color":`bg`,"border-color":`border`,"border-top-color":`border-t`,"border-right-color":`border-r`,"border-bottom-color":`border-b`,"border-left-color":`border-l`,"outline-color":`outline`,fill:`fill`,stroke:`stroke`,"caret-color":`caret`,"accent-color":`accent`,"text-decoration-color":`decoration`,width:`w`,height:`h`,"min-width":`min-w`,"min-height":`min-h`,"max-width":`max-w`,"max-height":`max-h`,padding:`p`,"padding-top":`pt`,"padding-right":`pr`,"padding-bottom":`pb`,"padding-left":`pl`,margin:`m`,"margin-top":`mt`,"margin-right":`mr`,"margin-bottom":`mb`,"margin-left":`ml`,gap:`gap`,"row-gap":`gap-y`,"column-gap":`gap-x`,"font-size":`text`,"font-family":`font`,"border-radius":`rounded`,"border-width":`border`,"box-shadow":`shadow`,"line-height":`leading`,"letter-spacing":`tracking`};function rh(e){let t=e.value.match(/^var\(\s*(--[\w-]+)\s*\)$/);if(!t?.[1])return;let n=nh[e.property];if(n)return`${n}-(${t[1]})`}var ih={"to right":`bg-linear-to-r`,"to left":`bg-linear-to-l`,"to top":`bg-linear-to-t`,"to bottom":`bg-linear-to-b`,"to top right":`bg-linear-to-tr`,"to top left":`bg-linear-to-tl`,"to bottom right":`bg-linear-to-br`,"to bottom left":`bg-linear-to-bl`};function ah(e,t){if(e.property!==`background-image`&&e.property!==`background`)return;let n=e.value.trim().match(/^linear-gradient\((.+)\)$/);if(!n?.[1])return;let r=n[1],i=sh(r);if(i===-1)return;let a=r.slice(0,i).trim(),o=r.slice(i+1).trim(),s=ih[a]??(a.match(/^\d+deg$/)?`bg-linear-${a.replace(`deg`,``)}`:void 0);if(!s)return;let c=ch(o);if(c.length<2||c.length>3)return;let l=[s],u=oh(c[0]??``,`from`,t);if(!u)return;if(l.push(u),c.length===3){let e=oh(c[1]??``,`via`,t);if(!e)return;l.push(e)}let d=oh(c[c.length-1]??``,`to`,t);if(d)return l.push(d),l}function oh(e,t,n){let r=e.trim().split(/\s+/)[0];if(!r)return;let i=Lm(r),a=Pm[i];if(a)return`${t}-${a}`;let o=lm(i);if(o)return`${t}-${o}`;let s=Object.entries(n.theme.colors).find(([,e])=>Lm(e)===i)?.[0];return s?`${t}-${s}`:`${t}-[${r}]`}function sh(e){let t=0;for(let n=0;n<e.length;n++)if(e[n]===`(`)t++;else if(e[n]===`)`)t--;else if(e[n]===`,`&&t===0)return n;return-1}function ch(e){let t=[],n=0,r=0;for(let i=0;i<e.length;i++)e[i]===`(`?n++:e[i]===`)`?n--:e[i]===`,`&&n===0&&(t.push(e.slice(r,i).trim()),r=i+1);return t.push(e.slice(r).trim()),t.filter(Boolean)}function X(e,t,n){let r=e.important?`!`:``,i=e.variants.length>0?`${e.variants.join(`:`)}:`:``;return{...e,className:`${r}${i}${t}`,kind:n}}var lh=new Set(`animation-iteration-count.aspect-ratio.border-image-outset.border-image-slice.border-image-width.box-flex.box-flex-group.box-ordinal-group.column-count.columns.flex.flex-grow.flex-negative.flex-order.flex-positive.flex-shrink.grid-area.grid-column.grid-column-end.grid-column-start.grid-row.grid-row-end.grid-row-start.-webkit-line-clamp.line-clamp.line-height.opacity.order.orphans.scale.scale-z.stroke-width.tab-size.widows.z-index.zoom`.split(`.`));function uh(e){return typeof e==`string`?dh(e):xh(e)?Array.from({length:e.length},(t,n)=>e.item(n)).filter(Boolean).map(t=>bh(t,e.getPropertyValue(t),e.getPropertyPriority(t)===`important`)):Sh(e)?Array.from(e,([e,t])=>_h(e,t)).filter(Boolean):fh(e)}function dh(e){return e.split(`;`).map(e=>e.trim()).filter(Boolean).map(e=>{let t=e.indexOf(`:`);if(t!==-1)return _h(e.slice(0,t).trim(),e.slice(t+1).trim())}).filter(Boolean)}function fh(e,t=[]){return Object.entries(e).flatMap(([e,n])=>{if(Ch(n)){let r=ph(e);return r?fh(n,[...t,r]):[]}let r=_h(e,n);return r?[{...r,variants:t}]:[]})}function ph(e){if(e===`dark`)return`dark`;if(e.startsWith(`&:`))return hh(e.slice(2));if(e.startsWith(`:`))return hh(e.slice(1));if(e.startsWith(`@media`))return gh(e);if(e.startsWith(`@supports`))return`supports-[${e.slice(9).trim()}]`;if(e.startsWith(`@container`))return mh(e)}function mh(e){let t=e.replace(/\s+/g,` `).trim(),n=t.match(/@container\s*\(min-width:\s*(\d+)px\)/);if(n){let e=Number(n[1]);return{320:`@xs`,384:`@sm`,448:`@md`,512:`@lg`,576:`@xl`,672:`@2xl`,768:`@3xl`,896:`@4xl`,1024:`@5xl`,1152:`@6xl`,1280:`@7xl`}[e]??`@min-[${e}px]`}return`@container-[${t.replace(/^@container\s*/,``)}]`}function hh(e){return e.replace(/^:/,``).replace(/-child$/,``).replace(/-of-type$/,`-of-type`)}function gh(e){let t=e.replace(/\s+/g,` `).trim();return/min-width:\s*640px/.test(t)?`sm`:/min-width:\s*768px/.test(t)?`md`:/min-width:\s*1024px/.test(t)?`lg`:/min-width:\s*1280px/.test(t)?`xl`:/min-width:\s*1536px/.test(t)?`2xl`:/prefers-color-scheme:\s*dark/.test(t)?`dark`:/prefers-color-scheme:\s*light/.test(t)?`light`:/prefers-reduced-motion:\s*reduce/.test(t)?`motion-reduce`:/prefers-reduced-motion:\s*no-preference/.test(t)?`motion-safe`:/prefers-contrast:\s*more/.test(t)?`contrast-more`:/prefers-contrast:\s*less/.test(t)?`contrast-less`:/\(hover:\s*hover\)/.test(t)?`hover`:/\(pointer:\s*fine\)/.test(t)?`pointer-fine`:/\(pointer:\s*coarse\)/.test(t)?`pointer-coarse`:/print/.test(t)?`print`:/\(orientation:\s*portrait\)/.test(t)?`portrait`:/\(orientation:\s*landscape\)/.test(t)?`landscape`:`media-[${t.replace(/^@media\s*/,``)}]`}function _h(e,t){if(t==null||t===``)return;let n=vh(e),{value:r,important:i}=yh(n,t);return bh(n,r,i)}function vh(e){return e.startsWith(`--`)?e:e.replace(/^Webkit/,`-webkit`).replace(/^Moz/,`-moz`).replace(/^ms/,`-ms`).replace(/^O/,`-o`).replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase()}function yh(e,t){let n=typeof t==`number`&&t!==0&&!lh.has(e)?`${t}px`:String(t).trim();return n.endsWith(`!important`)?{value:n.slice(0,-10).trim(),important:!0}:{value:n,important:!1}}function bh(e,t,n){return{property:e,value:t,important:n,variants:[]}}function xh(e){return typeof CSSStyleDeclaration<`u`&&e instanceof CSSStyleDeclaration}function Sh(e){return typeof e==`object`&&!!e&&Symbol.iterator in e}function Ch(e){return typeof e==`object`&&!!e}function wh(e){let t=[],n=``,r=0,i;for(let a of e.trim()){if(i){n+=a,a===i&&(i=void 0);continue}if(a===`"`||a===`'`){i=a,n+=a;continue}if(a===`(`&&(r+=1),a===`)`&&(r=Math.max(0,r-1)),/\s/.test(a)&&r===0){n&&=(t.push(n),``);continue}n+=a}return n&&t.push(n),t}var Th={margin:[`margin-top`,`margin-right`,`margin-bottom`,`margin-left`],padding:[`padding-top`,`padding-right`,`padding-bottom`,`padding-left`],inset:[`top`,`right`,`bottom`,`left`],"border-color":[`border-top-color`,`border-right-color`,`border-bottom-color`,`border-left-color`],"border-style":[`border-top-style`,`border-right-style`,`border-bottom-style`,`border-left-style`],"border-width":[`border-top-width`,`border-right-width`,`border-bottom-width`,`border-left-width`],"border-radius":[`border-top-left-radius`,`border-top-right-radius`,`border-bottom-right-radius`,`border-bottom-left-radius`],"scroll-margin":[`scroll-margin-top`,`scroll-margin-right`,`scroll-margin-bottom`,`scroll-margin-left`],"scroll-padding":[`scroll-padding-top`,`scroll-padding-right`,`scroll-padding-bottom`,`scroll-padding-left`]},Eh={"overscroll-behavior":[`overscroll-behavior-x`,`overscroll-behavior-y`],"margin-inline":[`margin-inline-start`,`margin-inline-end`],"margin-block":[`margin-block-start`,`margin-block-end`],"padding-inline":[`padding-inline-start`,`padding-inline-end`],"padding-block":[`padding-block-start`,`padding-block-end`],"inset-inline":[`inset-inline-start`,`inset-inline-end`],"inset-block":[`top`,`bottom`],"scroll-margin-inline":[`scroll-margin-inline-start`,`scroll-margin-inline-end`],"scroll-margin-block":[`scroll-margin-block-start`,`scroll-margin-block-end`],"scroll-padding-inline":[`scroll-padding-inline-start`,`scroll-padding-inline-end`],"scroll-padding-block":[`scroll-padding-block-start`,`scroll-padding-block-end`]};function Dh(e){return e.flatMap(e=>{let t=Bh(e);if(t)return t;let n=Lh(e);if(n)return n;let r=Rh(e);if(r)return r;let i=zh(e);if(i)return i;let a=Ih(e);if(a)return a;let o=Ph(e);if(o)return o;let s=Fh(e);if(s)return s;let c=Nh(e);if(c)return c;let l=Mh(e);if(l)return l;let u=jh(e);if(u)return u;let d=Ah(e);if(d)return d;let f=kh(e);if(f)return f;let p=Oh(e);if(p)return p;let m=Th[e.property];if(!m)return[e];let h=Vh(e.value);return h?[{...e,property:m[0],value:h[0]},{...e,property:m[1],value:h[1]},{...e,property:m[2],value:h[2]},{...e,property:m[3],value:h[3]}]:[e]})}function Oh(e){if(e.property!==`background`)return;let t=wh(e.value);if(t.length<1)return;let n=new Set([`repeat`,`no-repeat`,`repeat-x`,`repeat-y`,`space`,`round`]),r=new Set([`cover`,`contain`]),i=new Set([`fixed`,`local`,`scroll`]),a=new Set([`center`,`top`,`bottom`,`left`,`right`]),o=[];for(let s of t)n.has(s)?o.push({...e,property:`background-repeat`,value:s}):r.has(s)?o.push({...e,property:`background-size`,value:s}):i.has(s)?o.push({...e,property:`background-attachment`,value:s}):a.has(s)?o.push({...e,property:`background-position`,value:s}):s===`none`?o.push({...e,property:`background-image`,value:`none`}):o.some(e=>e.property===`background-color`)||o.push({...e,property:`background-color`,value:s});return o.length>0?o:void 0}function kh(e){if(e.property!==`font`)return;let t=new Set([`normal`,`bold`,`100`,`200`,`300`,`400`,`500`,`600`,`700`,`800`,`900`]),n=new Set([`italic`,`oblique`]),r=wh(e.value);if(r.length<2)return;let i=[];for(let a of r)if(n.has(a))i.push({...e,property:`font-style`,value:a});else if(t.has(a))i.push({...e,property:`font-weight`,value:a});else if(a.includes(`/`)){let[t,n]=a.split(`/`);t&&i.push({...e,property:`font-size`,value:t}),n&&i.push({...e,property:`line-height`,value:n})}else /^\d/.test(a)?i.push({...e,property:`font-size`,value:a}):i.some(e=>e.property===`font-family`)||i.push({...e,property:`font-family`,value:a});return i.length>=2?i:void 0}function Ah(e){if(e.property!==`size`)return;let t=wh(e.value);if(t.length===1&&t[0])return[{...e,property:`width`,value:t[0]},{...e,property:`height`,value:t[0]}];if(t.length===2){let[n,r]=t;return!n||!r?void 0:[{...e,property:`width`,value:n},{...e,property:`height`,value:r}]}}function jh(e){if(e.property!==`column-rule`)return;let t=wh(e.value);if(t.length<2)return;let n=new Set([`none`,`solid`,`dashed`,`dotted`,`double`,`groove`,`ridge`,`inset`,`outset`]),r=[];for(let i of t)n.has(i)?r.push({...e,property:`column-rule-style`,value:i}):/^\d/.test(i)?r.push({...e,property:`column-rule-width`,value:i}):r.push({...e,property:`column-rule-color`,value:i});return r.length>=2?r:void 0}function Mh(e){let t={border:[`border-width`,`border-style`,`border-color`],"border-top":[`border-top-width`,`border-top-style`,`border-top-color`],"border-right":[`border-right-width`,`border-right-style`,`border-right-color`],"border-bottom":[`border-bottom-width`,`border-bottom-style`,`border-bottom-color`],"border-left":[`border-left-width`,`border-left-style`,`border-left-color`],"border-inline-start":[`border-inline-start-width`,`border-inline-start-style`,`border-inline-start-color`],"border-inline-end":[`border-inline-end-width`,`border-inline-end-style`,`border-inline-end-color`],"border-block":[`border-block-width`,`border-block-style`,`border-block-color`],"border-block-start":[`border-block-start-width`,`border-block-start-style`,`border-block-start-color`],"border-block-end":[`border-block-end-width`,`border-block-end-style`,`border-block-end-color`],"border-inline":[`border-inline-width`,`border-inline-style`,`border-inline-color`]}[e.property];if(!t)return;let n=wh(e.value);if(n.length<2||n.length>3)return;let r=new Set([`none`,`hidden`,`solid`,`dashed`,`dotted`,`double`,`groove`,`ridge`,`inset`,`outset`]),i=[];for(let a of n)r.has(a)?i.push({...e,property:t[1],value:a}):/^\d/.test(a)?i.push({...e,property:t[0],value:a}):i.push({...e,property:t[2],value:a});return i.length>=2?i:void 0}function Nh(e){if(e.property!==`transition`||e.value===`none`)return;let t=e.value.split(/\s+/),n=[];for(let r of t)/^\d/.test(r)&&(r.endsWith(`ms`)||r.endsWith(`s`))?n.some(e=>e.property===`transition-duration`)?n.some(e=>e.property===`transition-delay`)||n.push({...e,property:`transition-delay`,value:r}):n.push({...e,property:`transition-duration`,value:r}):[`ease`,`ease-in`,`ease-out`,`ease-in-out`,`linear`].includes(r)?n.push({...e,property:`transition-timing-function`,value:r}):[`all`,`none`,`color`,`opacity`,`shadow`,`transform`].includes(r)&&n.push({...e,property:`transition-property`,value:r});return n.length>0?n:void 0}function Ph(e){if(e.property!==`outline`)return;let t=wh(e.value);if(t.length<2)return;let n=new Set([`none`,`solid`,`dashed`,`dotted`,`double`,`groove`,`ridge`,`inset`,`outset`]),r=[];for(let i of t)n.has(i)?r.push({...e,property:`outline-style`,value:i}):/^\d/.test(i)?r.push({...e,property:`outline-width`,value:i}):r.push({...e,property:`outline-color`,value:i});return r.length>0?r:void 0}function Fh(e){if(e.property!==`text-decoration`)return;let t=wh(e.value);if(t.length<1)return;let n=new Set([`underline`,`overline`,`line-through`,`none`]),r=new Set([`solid`,`double`,`dotted`,`dashed`,`wavy`]),i=[];for(let a of t)n.has(a)?i.push({...e,property:`text-decoration-line`,value:a}):r.has(a)&&i.push({...e,property:`text-decoration-style`,value:a});return i.length>0?i:void 0}function Ih(e){if(e.property!==`list-style`)return;let t=wh(e.value);if(t.length===0)return;let n=t.flatMap(t=>t===`inside`||t===`outside`?[{...e,property:`list-style-position`,value:t}]:t===`disc`||t===`decimal`||t===`none`?[{...e,property:`list-style-type`,value:t}]:[]);return n.length>0?n:void 0}function Lh(e){if(e.property!==`gap`)return;let t=wh(e.value);if(t.length!==2||t.some(e=>e.length===0))return;let[n,r]=t;if(!(!n||!r))return[{...e,property:`row-gap`,value:n},{...e,property:`column-gap`,value:r}]}function Rh(e){let t={"place-items":[`align-items`,`justify-items`],"place-content":[`align-content`,`justify-content`],"place-self":[`align-self`,`justify-self`]}[e.property];if(!t)return;let n=wh(e.value);if(n.length!==2||n.some(e=>e.length===0))return;let[r,i]=n;if(!(!r||!i))return[{...e,property:t[0],value:r},{...e,property:t[1],value:i}]}function zh(e){let t=Eh[e.property];if(!t)return;let n=wh(e.value);if(n.length!==2||n.some(e=>e.length===0))return;let[r,i]=n;if(!(!r||!i))return[{...e,property:t[0],value:r},{...e,property:t[1],value:i}]}function Bh(e){if(e.property!==`overflow`)return;let t=wh(e.value);if(t.length!==2||t.some(e=>e.length===0))return;let[n,r]=t;if(!(!n||!r))return[{...e,property:`overflow-x`,value:n},{...e,property:`overflow-y`,value:r}]}function Vh(e){let t=wh(e);if(t.length<1||t.length>4||t.some(e=>e.length===0))return;let[n,r=n,i=n,a=r]=t;if(!(!n||!r||!i||!a))return[n,r,i,a]}var Hh=new Map(`display.position.top.right.bottom.left.z-index.visibility.overflow.overflow-x.overflow-y.margin.margin-top.margin-right.margin-bottom.margin-left.padding.padding-top.padding-right.padding-bottom.padding-left.flex-direction.flex-wrap.justify-content.align-items.align-content.align-self.gap.row-gap.column-gap.width.height.min-width.min-height.max-width.max-height.font-size.font-weight.line-height.text-align.color.background-color.border-width.border-color.border-radius.opacity.box-shadow.filter.transform.transition.animation`.split(`.`).map((e,t)=>[e,t]));function Uh(e,t){return t.sort===`input`?e:[...e].sort((e,t)=>(Hh.get(e.property)??2**53-1)-(Hh.get(t.property)??2**53-1))}var Wh={spacing:{},colors:um};function Gh(e={}){return{theme:{spacing:{...Wh.spacing,...e.theme?.spacing},colors:{...Wh.colors,...e.theme?.colors}},allowArbitraryValues:e.allowArbitraryValues??!0,allowArbitraryProperties:e.allowArbitraryProperties??!0,compression:e.compression??`safe`,sort:e.sort??`grouped`,important:e.important??!1,colorMatch:e.colorMatch??`exact`,numericMultipliers:e.numericMultipliers??`integer`}}function Kh(e,t){let n=Gh(t),r=Dh(uh(e)).map(e=>({declaration:e,converted:xm(e,n)})),i=Uh(em(r.flatMap(({converted:e})=>e?Array.isArray(e)?e:[e]:[]),n),n);return{className:i.map(({className:e})=>e).join(` `),classes:i.map(({className:e})=>e),exact:i.filter(e=>e.kind===`exact`),arbitrary:i.filter(e=>e.kind===`arbitrary`),unmatched:r.flatMap(({declaration:e,converted:t})=>t?[]:[e])}}function qh(e,t){return Kh(e,t).className}qh.convert=Kh;function Z(e){return`${e}px`}function Jh(e){return e.every(e=>e.sizing===`FR`&&e.value===1)?String(e.length):`[${e.map(Zp).join(`_`)}]`}function Yh(e){let t=[`grid`];return e.gridTemplateColumns.length>0&&t.push(`grid-cols-${Jh(e.gridTemplateColumns)}`),e.gridTemplateRows.length>0&&t.push(`grid-rows-${Jh(e.gridTemplateRows)}`),t}function Xh(e){if(!e.gridPosition)return[];let t=[],n=e.gridPosition;return n.column>0&&t.push(`col-start-${n.column}`),n.row>0&&t.push(`row-start-${n.row}`),n.columnSpan>1&&t.push(`col-span-${n.columnSpan}`),n.rowSpan>1&&t.push(`row-span-${n.rowSpan}`),t}var Zh={CENTER:`center`,MAX:`flex-end`,SPACE_BETWEEN:`space-between`},Qh={CENTER:`center`,MAX:`flex-end`,STRETCH:`stretch`};function $h(e,t){e.display=`flex`,t.layoutMode===`VERTICAL`&&(e.flexDirection=`column`),t.layoutWrap===`WRAP`&&(e.flexWrap=`wrap`),t.itemSpacing>0&&(e.gap=Z(t.itemSpacing)),t.layoutWrap===`WRAP`&&t.counterAxisSpacing>0&&(e.rowGap=Z(t.counterAxisSpacing)),Zh[t.primaryAxisAlign]&&(e.justifyContent=Zh[t.primaryAxisAlign]),Qh[t.counterAxisAlign]&&(e.alignItems=Qh[t.counterAxisAlign])}function eg(e,t){let n=t.layoutMode===`HORIZONTAL`?`width`:`height`,r=t.layoutMode===`HORIZONTAL`?`height`:`width`;t.primaryAxisSizing===`FILL`?e[n]=`100%`:t.primaryAxisSizing!==`HUG`&&(e[n]=Z(t[n])),t.counterAxisSizing===`FILL`?e[r]=`100%`:t.counterAxisSizing!==`HUG`&&(e[r]=Z(t[r]))}function tg(e,t){let{paddingTop:n,paddingRight:r,paddingBottom:i,paddingLeft:a}=t;n===0&&r===0&&i===0&&a===0||(n===r&&r===i&&i===a?e.padding=Z(n):n===i&&a===r?e.padding=`${Z(n)} ${Z(a)}`:e.padding=`${Z(n)} ${Z(r)} ${Z(i)} ${Z(a)}`)}function ng(e,t,n){let r=qp(t,n);r.isGrid?(e.display=`grid`,t.gridColumnGap>0&&(e.columnGap=Z(t.gridColumnGap)),t.gridRowGap>0&&(e.rowGap=Z(t.gridRowGap)),t.width>0&&(e.width=Z(t.width)),t.gridTemplateRows.length>0&&t.height>0&&(e.height=Z(t.height))):r.isFlex?($h(e,t),eg(e,t)):(t.width>0&&(e.width=Z(t.width)),t.height>0&&(e.height=Z(t.height))),r.parentIsAutoLayout&&t.layoutGrow>0&&(e.flexGrow=`1`),r.isAutoLayout&&tg(e,t)}function rg(e,t){let n=Vp(t.fills);n&&t.type!==`TEXT`&&(e.backgroundColor=n);let r=Hp(t.strokes);r&&(e.borderWidth=Z(r.weight),e.borderColor=r.color,e.borderStyle=`solid`),t.cornerRadius>0&&(t.independentCorners?e.borderRadius=`${Z(t.topLeftRadius)} ${Z(t.topRightRadius)} ${Z(t.bottomRightRadius)} ${Z(t.bottomLeftRadius)}`:e.borderRadius=t.cornerRadius>=9999?`9999px`:Z(t.cornerRadius)),t.opacity<1&&(e.opacity=String(t.opacity)),t.rotation!==0&&(e.transform=`rotate(${t.rotation}deg)`),t.clipsContent&&(e.overflow=`hidden`);for(let n of t.effects)if(n.visible)if(n.type===`DROP_SHADOW`||n.type===`INNER_SHADOW`){let t=n.type===`INNER_SHADOW`?`inset `:``,r=n.spread===0?``:` ${Z(n.spread)}`,i=Lt(n.color);e.boxShadow=`${t}${Z(n.offset.x)} ${Z(n.offset.y)} ${Z(n.radius)}${r} ${i}`}else n.type===`LAYER_BLUR`||n.type===`FOREGROUND_BLUR`?e.filter=`blur(${Z(n.radius)})`:e.backdropFilter=`blur(${Z(n.radius)})`}function ig(e,t){if(t.type!==`TEXT`)return;e.fontSize=Z(t.fontSize),t.fontFamily&&t.fontFamily!==`Inter`&&(e.fontFamily=t.fontFamily),t.fontWeight!==400&&(e.fontWeight=String(t.fontWeight)),t.textAlignHorizontal!==`LEFT`&&(e.textAlign=t.textAlignHorizontal.toLowerCase());let n=Vp(t.fills);n&&(e.color=n)}function ag(e,t){let n={};return ng(n,e,t),rg(n,e),ig(n,e),n}function og(e,t){let n=ag(e,t),r=qp(e,t),i=[];r.isGrid&&i.push(...Yh(e)),r.parentIsGrid&&i.push(...Xh(e)),e.layoutDirection===`RTL`&&i.push(`[direction:rtl]`),e.type===`TEXT`&&f(e)===`RTL`&&i.push(`[direction:rtl]`);let a=qh(n),o=a?a.split(` `):[];if(n.display===`grid`){let e=o.filter(e=>e!==`grid`);return[...i,...e]}return[...i,...o]}var sg={FRAME:`Frame`,RECTANGLE:`Rectangle`,ROUNDED_RECTANGLE:`Rectangle`,ELLIPSE:`Ellipse`,TEXT:`Text`,LINE:`Line`,STAR:`Star`,POLYGON:`Polygon`,VECTOR:`Vector`,GROUP:`Group`,SECTION:`Section`,COMPONENT:`Component`,COMPONENT_SET:`Frame`,INSTANCE:`Frame`},cg={FRAME:`div`,RECTANGLE:`div`,ROUNDED_RECTANGLE:`div`,ELLIPSE:`div`,TEXT:`p`,LINE:`div`,STAR:`div`,POLYGON:`div`,VECTOR:`div`,GROUP:`div`,SECTION:`section`,COMPONENT:`div`,COMPONENT_SET:`div`,INSTANCE:`div`};function lg(e,t){t.push([`grid`,!0]),e.gridTemplateColumns.length>0&&t.push([`columns`,Qp(e.gridTemplateColumns)]),e.gridTemplateRows.length>0&&t.push([`rows`,Qp(e.gridTemplateRows)]),e.width>0&&t.push([`w`,e.width]),e.gridTemplateRows.length>0&&e.height>0&&t.push([`h`,e.height]),e.gridColumnGap>0&&t.push([`columnGap`,e.gridColumnGap]),e.gridRowGap>0&&t.push([`rowGap`,e.gridRowGap])}function ug(e,t){t.push([`flex`,e.layoutMode===`HORIZONTAL`?`row`:`col`]),e.layoutDirection===`RTL`&&t.push([`dir`,`rtl`]);let n=e.layoutMode===`HORIZONTAL`?`width`:`height`,r=e.layoutMode===`HORIZONTAL`?`height`:`width`;e.primaryAxisSizing===`FILL`?t.push([n===`width`?`w`:`h`,`fill`]):e.primaryAxisSizing!==`HUG`&&t.push([n===`width`?`w`:`h`,e[n]]),e.counterAxisSizing===`FILL`?t.push([r===`width`?`w`:`h`,`fill`]):e.counterAxisSizing!==`HUG`&&t.push([r===`width`?`w`:`h`,e[r]])}function dg(e,t){if(!e.gridPosition)return;let n=e.gridPosition;n.column>0&&t.push([`colStart`,n.column]),n.row>0&&t.push([`rowStart`,n.row]),n.columnSpan>1&&t.push([`colSpan`,n.columnSpan]),n.rowSpan>1&&t.push([`rowSpan`,n.rowSpan])}function fg(e,t){e.itemSpacing>0&&t.push([`gap`,e.itemSpacing]),e.layoutWrap===`WRAP`&&(t.push([`wrap`,!0]),e.counterAxisSpacing>0&&t.push([`rowGap`,e.counterAxisSpacing])),e.primaryAxisAlign===`CENTER`?t.push([`justify`,`center`]):e.primaryAxisAlign===`MAX`?t.push([`justify`,`end`]):e.primaryAxisAlign===`SPACE_BETWEEN`&&t.push([`justify`,`between`]),e.counterAxisAlign===`CENTER`?t.push([`items`,`center`]):e.counterAxisAlign===`MAX`?t.push([`items`,`end`]):e.counterAxisAlign===`STRETCH`&&t.push([`items`,`stretch`])}function pg(e,t){let n=Jp(e);n&&t.push(...Yp(n,e=>[`p`,e],(e,t)=>[[`py`,e],[`px`,t]],({pt:e,pr:t,pb:n,pl:r})=>{let i=[];return e>0&&i.push([`pt`,e]),t>0&&i.push([`pr`,t]),n>0&&i.push([`pb`,n]),r>0&&i.push([`pl`,r]),i}))}function mg(e,t){let n=Xp(e);if(!n)return;let{tl:r,tr:i,br:a,bl:o}=n;r===i&&i===a&&a===o?t.push([`rounded`,r]):(r>0&&t.push([`roundedTL`,r]),i>0&&t.push([`roundedTR`,i]),a>0&&t.push([`roundedBR`,a]),o>0&&t.push([`roundedBL`,o]))}function hg(e,t){let n=Vp(e.fills);n&&t.push([`bg`,n]);let r=Hp(e.strokes);r&&(t.push([`stroke`,r.color]),r.weight!==1&&t.push([`strokeWidth`,r.weight]),r.dash&&t.push([`strokeDash`,r.dash])),mg(e,t),e.cornerSmoothing>0&&t.push([`cornerSmoothing`,e.cornerSmoothing]),e.opacity<1&&t.push([`opacity`,Math.round(e.opacity*100)/100]),e.rotation!==0&&t.push([`rotate`,Math.round(e.rotation*100)/100]),e.blendMode!==`PASS_THROUGH`&&e.blendMode!==`NORMAL`&&t.push([`blendMode`,e.blendMode.toLowerCase()]),e.clipsContent&&t.push([`overflow`,`hidden`]);for(let n of e.effects)if(n.visible)if(n.type===`DROP_SHADOW`||n.type===`INNER_SHADOW`){let e=Up(n);e&&t.push([`shadow`,e])}else (n.type===`LAYER_BLUR`||n.type===`BACKGROUND_BLUR`)&&t.push([`blur`,n.radius])}function gg(e,t,n){t.parentIsAutoLayout||t.parentIsGrid||(e.x!==0&&n.push([`x`,e.x]),e.y!==0&&n.push([`y`,e.y]))}function _g(e,t,n,r){if(t.isGrid?lg(e,r):t.isFlex?ug(e,r):e.type===`TEXT`?vg(e,n,r):(e.width>0&&r.push([`w`,e.width]),e.height>0&&r.push([`h`,e.height])),t.parentIsAutoLayout&&(e.layoutGrow>0&&r.push([`grow`,e.layoutGrow]),e.layoutAlignSelf===`STRETCH`)){let t=e.parentId?n.getNode(e.parentId):null;if(t&&(t.layoutMode===`HORIZONTAL`||t.layoutMode===`VERTICAL`)){let e=t.layoutMode===`HORIZONTAL`?`h`:`w`;r.some(([t])=>t===e)||r.push([e,`fill`])}}}function vg(e,t,n){let r=e.textAutoResize,i=r===`NONE`||r===`TRUNCATE`,a=e.layoutAlignSelf===`STRETCH`&&(e.parentId?t.getNode(e.parentId):null)?.layoutMode===`VERTICAL`,o=e.layoutGrow>0&&(e.parentId?t.getNode(e.parentId):null)?.layoutMode===`HORIZONTAL`;r!==`WIDTH_AND_HEIGHT`&&!a&&!o&&e.width>0&&n.push([`w`,e.width]),i&&e.height>0&&n.push([`h`,e.height])}function yg(e,t){let n=f(e);e.fontSize!==14&&t.push([`size`,e.fontSize]),e.fontFamily&&e.fontFamily!==`Inter`&&t.push([`font`,e.fontFamily]),e.fontWeight!==400&&(e.fontWeight===700?t.push([`weight`,`bold`]):e.fontWeight===500?t.push([`weight`,`medium`]):t.push([`weight`,e.fontWeight])),n===`RTL`&&t.push([`dir`,`rtl`]),e.textAlignHorizontal!==`LEFT`&&t.push([`textAlign`,e.textAlignHorizontal.toLowerCase()]),e.lineHeight!=null&&t.push([`lineHeight`,e.lineHeight]),e.letterSpacing!==0&&t.push([`letterSpacing`,e.letterSpacing]),e.textDecoration!==`NONE`&&t.push([`textDecoration`,e.textDecoration.toLowerCase()]),e.textCase!==`ORIGINAL`&&t.push([`textCase`,e.textCase.toLowerCase()]),e.maxLines!=null&&t.push([`maxLines`,e.maxLines]),e.textTruncation===`ENDING`&&e.maxLines==null&&t.push([`truncate`,!0]);let r=Vp(e.fills);if(r){let e=t.findIndex(([e])=>e===`bg`);e!==-1&&t.splice(e,1),t.push([`color`,r])}}function bg(e,t){e.type===`STAR`&&(e.pointCount!==5&&t.push([`points`,e.pointCount]),e.starInnerRadius!==.382&&t.push([`innerRadius`,e.starInnerRadius])),e.type===`POLYGON`&&e.pointCount!==3&&t.push([`points`,e.pointCount])}function xg(e,t){let n=[],r=qp(e,t);return e.name&&e.name!==e.type&&n.push([`name`,e.name]),gg(e,r,n),_g(e,r,t,n),r.parentIsGrid&&dg(e,n),r.isFlex&&fg(e,n),r.isAutoLayout&&pg(e,n),hg(e,n),e.type===`TEXT`&&yg(e,n),bg(e,n),n}function Sg(e,t,n,r){let i=(r===`tailwind`?cg:sg)[e.type];if(!i)return``;let a=`  `.repeat(n),o;if(r===`tailwind`){let n=og(e,t);o=`${e.name&&e.name!==e.type?` data-name="${e.name}"`:``}${n.length>0?` className="${n.join(` `)}"`:``}`.trim()}else o=xg(e,t).map(([e,t])=>Kp(e,t)).join(` `);let s=o?`<${i} ${o}`:`<${i}`,c=t.getChildren(e.id);if(e.type===`TEXT`){let t=e.text;if(!t)return`${a}${s} />`;let n=Gp(t);return n.includes(`
`)?[`${a}${s}>`,...n.split(`
`).map(e=>`${a}  ${e}`),`${a}</${i}>`].join(`
`):`${a}${s}>${n}</${i}>`}if(c.length===0)return`${a}${s} />`;let l=c.filter(e=>e.visible).map(e=>Sg(e,t,n+1,r)).filter(Boolean);return l.length===0?`${a}${s} />`:[`${a}${s}>`,...l,`${a}</${i}>`].join(`
`)}function Cg(e,t,n=`openpencil`){let r=t.getNode(e);return r?Sg(r,t,0,n):``}function wg(e,t,n=`openpencil`){return e.map(e=>Cg(e,t,n)).filter(Boolean).join(`

`)}var Tg=zp;function Eg(e){function t(t){return t.map(t=>e.graph.getNode(t)?.name??t).join(`
`)}function n(t){let n=t.length>0?t:e.graph.getChildren(e.state.currentPageId).map(e=>e.id);return Dt(e.graph,e.state.currentPageId,n)}function r(t){return t.length>0?wg(t,e.graph):null}return{copySelectionAsText:t,copySelectionAsSVG:n,copySelectionAsJSX:r}}function Dg(e){async function t(t){p.blockNodesUntilFontsResolve(t);try{let n=h(e.graph,t),r=p.collectFontKeys(e.graph,t),i=await Promise.all(r.map(([t,r])=>e.loadFont(t,r,n.characters))),a=r.filter((e,t)=>i[t]===null),o=Me(n),s=await p.ensureFallbackPack(o,n.characters),c=o.some(e=>(s[e]?.length??0)===0);if(a.length===0&&!c)for(let e of n.nodes)e.type===`TEXT`&&(e.textPicture=null);return wt(e.graph,e.state.currentPageId),a}finally{p.unblockNodes(t),e.getRenderer()?.invalidateAllPictures(),e.requestRender()}}return{loadFontsForNodes:t}}function Og(e,t){let n=[];function r(t){let i=e.getNode(t);if(i){n.push(structuredClone(i));for(let e of i.childIds)r(e)}}for(let e of t)r(e);return n}function kg(e,t){let n=new Map,r=t=>{let i=e.getNode(t);if(i){n.set(t,structuredClone(i));for(let e of i.childIds)r(e)}};return r(t),n}function Ag(e,t,n,r){let{parentId:i,childIds:a,...o}=t;e.createNode(t.type,n,{...o,id:t.id});for(let n of a){let i=r.get(n);i&&Ag(e,i,t.id,r)}}function jg(e,t,n){for(let r of t)e.graph.createNode(r.type,r.parentId??n,{...r,childIds:[]})}function Mg(e,t){for(let n of[...t].reverse())e.graph.deleteNode(n)}function Ng(e,t){for(let{id:n,parentId:r,index:i,subtree:a}of[...t].reverse()){let t=a.get(n);t&&Ag(e.graph,t,r,a),i>=0&&e.graph.reorderChild(n,r,i)}}function Pg(e){let t=[...e.state.selectedIds].map(t=>e.graph.getNode(t)).filter(e=>e!=null&&!e.locked),n=new Set(t.map(e=>e.id));return t.filter(e=>!e.parentId||!n.has(e.parentId))}function Fg(e,t,n){let r=n[0]?.parentId;if(!r)return;let i=n[0]?.index??0;for(let n=0;n<t.length;n++)e.graph.reorderChild(t[n],r,i+n)}function Ig(e,t,n,r){let i=Og(e.graph,t),a=e.state.currentPageId;e.undo.push({label:`Paste to replace`,forward:()=>{for(let{id:t}of n)e.graph.deleteNode(t);jg(e,i,a),Fg(e,t,n),wt(e.graph,a),e.setSelectedIds(new Set(t))},inverse:()=>{Mg(e,t),Ng(e,n),wt(e.graph,a),e.setSelectedIds(r)}})}function Lg(e,t,n,r,i){if(n.length===0||r.length===0)return!1;let a=r.map(t=>{let n=t.parentId??e.state.currentPageId,r=e.graph.getNode(n);return{id:t.id,parentId:n,index:r?.childIds.indexOf(t.id)??-1,subtree:kg(e.graph,t.id)}}),o=x(r,t=>e.graph.getAbsolutePosition(t));t(n,o.x+o.width/2,o.y+o.height/2),Fg(e,n,a);for(let{id:t}of a)e.graph.deleteNode(t);return wt(e.graph,e.state.currentPageId),e.setSelectedIds(new Set(n)),Ig(e,n,a,i),!0}function Rg(e){function t(t,n,r){let i=t.map(t=>e.graph.getNode(t)).filter(Yt),a=E(i);if(a.width===0&&a.height===0&&i.length===0)return;let o=n-(a.x+a.width/2),s=r-(a.y+a.height/2);for(let n of t){let t=e.graph.getNode(n);t&&e.graph.updateNode(n,{x:t.x+o,y:t.y+s})}}return{centerNodesAt:t}}function zg(e){function t(t){let n=new Set(e.state.selectedIds),r=new Set(t.map(e=>e.id)),i=t.filter(e=>!e.parentId||!r.has(e.parentId)),a=[],o=new Map;for(let t of i){let n=t.parentId??e.state.currentPageId,r=e.graph.cloneTree(t.id,n,{name:t.name+` copy`,x:t.x+20,y:t.y+20});if(!r)continue;a.push(r.id);let i=kg(e.graph,r.id);for(let[e,t]of i)o.set(e,t)}a.length>0&&(e.setSelectedIds(new Set(a)),e.undo.push({label:`Duplicate`,forward:()=>{for(let t of a){let n=o.get(t);if(!n)continue;let r=n.parentId??e.state.currentPageId;Ag(e.graph,n,r,o)}e.setSelectedIds(new Set(a))},inverse:()=>{for(let t of a.slice().reverse())e.graph.deleteNode(t);e.setSelectedIds(n)}}))}function n(t,n,r=`Paste`){let i=Og(e.graph,t),a=e.state.currentPageId;e.undo.push({label:r,forward:()=>{jg(e,i,a),wt(e.graph,a),e.setSelectedIds(new Set(t))},inverse:()=>{Mg(e,t),wt(e.graph,a),e.setSelectedIds(n)}})}async function r(t,r,a={}){let s=fd(t);if(s){let e=i(s.nodes,s.images,r,a);await d.loadFontsForNodes(e);return}let c=await vd(t);if(c){let t=new Set(e.state.selectedIds),i=a.replaceSelection?Pg(e):[],s=i[0]?.parentId??Hd(e),l=Td(c.nodes,e.graph,s,0,0,c.blobs);if(l.length===0)return;if(i.length>0)Lg(e,p.centerNodesAt,l,i,t);else{let{width:i,height:a}=e.getViewportSize(),o=r?.x??(-e.state.panX+i/2)/e.state.zoom,s=r?.y??(-e.state.panY+a/2)/e.state.zoom;p.centerNodesAt(l,o,s),wt(e.graph,e.state.currentPageId),e.setSelectedIds(new Set(l)),n(l,t)}await Promise.all([o(c.meta.fileKey,l),d.loadFontsForNodes(l)]),e.requestRender()}}function i(t,r,i,a={}){let o=new Set(e.state.selectedIds),s=a.replaceSelection?Pg(e):[];for(let[t,n]of r)e.graph.images.set(t,n);let c=[],l=(t,n)=>{let{id:r,childIds:i,children:a=[],parentId:o,...s}=t,c=e.graph.createNode(t.type,n,{...structuredClone(s),x:t.x+20,y:t.y+20,childIds:[]});for(let e of a)l(e,c.id);return c.id},u=s[0]?.parentId??Hd(e);for(let e of t)c.push(l(e,u));return c.length===0?c:s.length>0?(Lg(e,p.centerNodesAt,c,s,o),c):(i&&p.centerNodesAt(c,i.x,i.y),wt(e.graph,e.state.currentPageId),e.setSelectedIds(new Set(c)),n(c,o),c)}function a(t){let n=new Set;for(let r of Og(e.graph,t))for(let t of r.fills)t.type===`IMAGE`&&t.imageHash&&!e.graph.images.has(t.imageHash)&&n.add(t.imageHash);return[...n]}async function o(t,n){let r=a(n);if(r.length===0)return;let i=e.resolveFigmaClipboardImages;if(i)try{let n=await i(t,r);for(let t of r){let r=n.get(t);r&&e.graph.images.set(t,r)}}catch(e){console.warn(`Failed to fetch Figma clipboard images`,e)}let o=a(n).length;o>0&&e.emitEditorEvent(`clipboard:images-missing`,{total:r.length,missing:o,fetchAttempted:i!==null})}function s(e){return a(e).length>0}function c(){let t=[];for(let n of e.state.selectedIds){let r=e.graph.getNode(n);if(!r||r.locked)continue;let i=r.parentId??e.state.currentPageId,a=e.graph.getNode(i)?.childIds.indexOf(n)??-1;t.push({id:n,parentId:i,index:a,subtree:kg(e.graph,n)})}if(t.length===0)return;let n=()=>{for(let n of new Set(t.map(e=>e.parentId)))e.runLayoutForNode(n)},r=new Set(e.state.selectedIds);for(let{id:n}of t)e.graph.deleteNode(n);n(),e.undo.push({label:`Delete`,forward:()=>{for(let{id:n}of t)e.graph.deleteNode(n);n(),e.setSelectedIds(new Set)},inverse:()=>{Ng(e,t),n(),e.setSelectedIds(r)}}),e.setSelectedIds(new Set)}let l=Rp(e),u=Eg(e),d=Dg(e),f=Lp(e,n),p=Rg(e);return{collectSubtrees:Og,...p,...d,duplicateSelected:t,...l,pasteFromHTML:r,warnMissingImages:s,deleteSelected:c,...f,...u}}function Bg(e,t){return st(mt(e),{documentColorSpace:t}).color}function Vg(e,t,n){return n===`assign`?null:{fills:e.fills.map(e=>{let n=A(e);if(e.type===`SOLID`){let r=Bg(e.color,t);return n.color=r,n.opacity=r.a,n}return e.gradientStops&&(n.gradientStops=e.gradientStops.map(e=>({...e,color:Bg(e.color,t)}))),n}),strokes:e.strokes.map(e=>{let n=S(e),r=Bg(e.color,t);return n.color=r,n.opacity=r.a,n}),effects:y(e.effects).map(e=>({...e,color:Bg(e.color,t)})),styleRuns:ue(e.styleRuns).map(e=>({...e,style:{...e.style,fills:e.style.fills?.map(e=>{let n=A(e);if(e.type===`SOLID`){let r=Bg(e.color,t);n.color=r,n.opacity=r.a}return n})}}))}}function Hg(e){function t(t,n=`assign`){if(e.graph.documentColorSpace!==t){if(n===`convert`)for(let r of e.graph.getAllNodes()){let i=Vg(r,t,n);i&&e.graph.updateNode(r.id,i)}e.graph.documentColorSpace=t,e.requestRender()}}return{setDocumentColorSpace:t}}function Ug(e,t){let n=null,r=!1;function i(){let i=n;if(i){n=null,r=!0;try{let n=e(),r=new Set;for(let e of i){let t=n.getNode(e);for(;t;){if(t.type===`COMPONENT`){r.add(t.id);break}t=t.parentId?n.getNode(t.parentId):void 0}}for(let e of r)n.syncInstances(e);r.size>0&&(wt(n),t())}finally{r=!1}}}function a(e){r||(n||(n=new Set,queueMicrotask(i)),n.add(e))}return{scheduleComponentSync:a}}function Wg(e){async function t(t,n){let r=e.graph.getNode(t);if(r?.type!==`COMPONENT`&&r?.type!==`COMPONENT_SET`)return;let i=r;for(;i&&i.type!==`CANVAS`;)i=i.parentId?e.graph.getNode(i.parentId):void 0;i&&i.id!==e.state.currentPageId&&await n(i.id),e.setSelectedIds(new Set([r.id]));let a=e.graph.getAbsolutePosition(r.id),{width:o,height:s}=e.getViewportSize();e.state.panX=o/2-(a.x+r.width/2)*e.state.zoom,e.state.panY=s/2-(a.y+r.height/2)*e.state.zoom,e.requestRender()}async function n(n,r){if(!n?.componentId)return;let i=e.graph.getMainComponent(n.id);i&&await t(i.id,r)}return{focusComponent:t,goToMainComponent:n}}function Gg(e){let{childIds:t,parentId:n,type:r,...i}=e;return i}function Kg(e){function t(t,n,r,i=e.state.currentPageId){let a=e.graph.getNode(t);if(a?.type!==`COMPONENT`)return null;let o=new Set(e.state.selectedIds),s=e.graph.createInstance(t,i,{x:n??a.x+a.width+40,y:r??a.y});if(!s)return null;let c=s.id,l=Gg(s);return e.setSelectedIds(new Set([c])),e.undo.push({label:`Create instance`,forward:()=>{e.graph.createInstance(t,i,{...l}),e.setSelectedIds(new Set([c]))},inverse:()=>{e.graph.deleteNode(c),e.setSelectedIds(new Set(o))}}),c}function n(t){if(t?.type!==`INSTANCE`)return;let n=t.componentId;e.graph.detachInstance(t.id),e.setSelectedIds(new Set([t.id])),e.undo.push({label:`Detach instance`,forward:()=>{e.graph.detachInstance(t.id),e.requestRender()},inverse:()=>{e.graph.updateNode(t.id,{type:`INSTANCE`,componentId:n,overrides:{}})}})}return{createInstanceFromComponent:t,detachInstance:n}}function qg(e,t){if(!t.componentId)return[];let n=e.graph.getNode(t.componentId);if(!n)return[];let r=n.parentId?e.graph.getNode(n.parentId):null;return r?.type===`COMPONENT_SET`?[r,n]:[n]}function Jg(e,t){let n=new Map;for(let r of qg(e,t))for(let e of r.componentPropertyDefinitions)n.has(e.id)||n.set(e.id,e);return[...n.values()]}function Yg(e,t,n,r=[]){for(let[i,a]of t.childIds.entries()){let t=e.graph.getNode(a);if(!t)continue;let o=t.componentPropertyReferences.find(e=>e.propertyId===n);if(o)return{path:[...r,i],field:o.field,source:t};let s=Yg(e,t,n,[...r,i]);if(s)return s}return null}function Xg(e,t,n){let r=t;for(let t of n){let n=r.childIds[t],i=n?e.graph.getNode(n):void 0;if(!i)return null;r=i}return r}function Zg(e,t,n){let r=t.componentId?e.graph.getNode(t.componentId):null;if(!r)return null;let i=Yg(e,r,n);if(!i)return null;let a=Xg(e,t,i.path);return a?{node:a,field:i.field,source:i.source}:null}function Qg(e,t){let n=e.graph.getNode(t);if(n?.type===`COMPONENT`)return n.id;for(let n of e.graph.getAllNodes())if(n.type===`COMPONENT`&&(n.source.id===t||n.componentKey===t||n.sourceLibraryKey===t))return n.id;return null}function $g(e){return e?e.field===`TEXT`?e.node.text:e.field===`VISIBLE`?String(e.node.visible):e.source.componentId??e.node.componentId??``:``}function e_(e,t,n,r,i){let a={...t.overrides};if(n?.field===`TEXT`)a[`${n.node.id}:text`]=r;else if(n?.field===`VISIBLE`)a[`${n.node.id}:visible`]=r===`true`;else if(n?.field===`INSTANCE_SWAP`){a[`${n.node.id}:componentId`]=r,a[`${n.node.id}:sourceComponentId`]=n.source.id;let t=i?e.graph.getNode(i)?.name:void 0;t&&(a[`${n.node.id}:name`]=t)}return a}function t_(e,t,n,r){t?.field===`TEXT`&&t.node.type===`TEXT`?e.graph.updateNode(t.node.id,{text:n}):t?.field===`VISIBLE`?e.graph.updateNode(t.node.id,{visible:n===`true`}):t?.field===`INSTANCE_SWAP`&&t.node.type===`INSTANCE`&&r&&e.graph.swapInstanceComponent(t.node.id,r)}function n_(e,t,n,r){let i=e.graph.getNode(t);if(i?.type!==`INSTANCE`)return;let a=Zg(e,i,n.id),o=a?.field===`INSTANCE_SWAP`?Qg(e,r):null;e.graph.updateNode(i.id,{componentPropertyAssignments:{...i.componentPropertyAssignments,[n.id]:r},overrides:e_(e,i,a,r,o)}),t_(e,a,r,o)}function r_(e,t){let n=e.graph.getNode(t);if(n?.type!==`INSTANCE`)return;let r=new Map(Jg(e,n).map(e=>[e.id,e]));for(let[i,a]of Object.entries(n.componentPropertyAssignments)){let n=r.get(i);n&&n.type!==`VARIANT`&&n_(e,t,n,a)}}function i_(e,t){function n(t){let n=e.graph.getNode(t);return n?.type===`INSTANCE`?Jg(e,n):[]}function r(t,n){let r=e.graph.getNode(t);if(r?.type!==`INSTANCE`)return n.defaultValue;if(n.type===`VARIANT`)return(r.componentId?e.graph.getNode(r.componentId):null)?.componentPropertyValues[n.name]??n.defaultValue;let i=r.componentPropertyAssignments[n.id]??n.defaultValue;return n.type===`INSTANCE_SWAP`?Qg(e,i)??i:i}function i(n,r,i){let a=e.graph.getNode(n);if(a?.type!==`INSTANCE`)return;let o=Jg(e,a).find(e=>e.id===r);if(!o)return;if(o.type===`VARIANT`){t(n,o.name,i);return}let s={...a.componentPropertyAssignments},c=structuredClone(a.overrides),l=Zg(e,a,r),u=a.componentPropertyAssignments[r],d=o.type===`INSTANCE_SWAP`&&u?Qg(e,u)??u:$g(l);n_(e,n,o,i),e.undo.push({label:`Change ${o.name}`,forward:()=>{n_(e,n,o,i),e.requestRender()},inverse:()=>{let t=e.graph.getNode(n);if(t){e.graph.updateNode(n,{componentPropertyAssignments:s,overrides:c});let i=Zg(e,t,r);if(i?.field===`TEXT`&&i.node.type===`TEXT`)e.graph.updateNode(i.node.id,{text:d});else if(i?.field===`VISIBLE`)e.graph.updateNode(i.node.id,{visible:d===`true`});else if(i?.field===`INSTANCE_SWAP`){let t=Qg(e,d);t&&i.node.type===`INSTANCE`&&e.graph.swapInstanceComponent(i.node.id,t)}}e.requestRender()}}),e.requestRender()}return{getInstanceComponentPropertyDefinitions:n,getInstanceComponentPropertyValue:r,reapplyInstanceComponentProperties:t=>r_(e,t),setInstanceComponentProperty:i}}function a_(e,t){return e.y-t.y||e.x-t.x||e.name.localeCompare(t.name)}function o_(e){function t(t){let n=e.graph.getNode(t);return n?.type===`COMPONENT_SET`?n.componentPropertyDefinitions:[]}function n(t,n,r=`VARIANT`,i=``){let a=e.graph.getNode(t);if(a?.type!==`COMPONENT_SET`)return;let o=`prop:${yt(8)}`,s={id:o,name:n,type:r,defaultValue:i,variantOptions:r===`VARIANT`?[i]:void 0},c=[...a.componentPropertyDefinitions];return e.graph.updateNode(t,{componentPropertyDefinitions:[...c,s]}),e.undo.push({label:`Add property`,forward:()=>{let n=e.graph.getNode(t);n&&e.graph.updateNode(t,{componentPropertyDefinitions:[...n.componentPropertyDefinitions,s]}),e.requestRender()},inverse:()=>{e.graph.updateNode(t,{componentPropertyDefinitions:c}),e.requestRender()}}),e.requestRender(),o}function r(t,n){let r=e.graph.getNode(t);if(r?.type!==`COMPONENT_SET`)return;let i=[...r.componentPropertyDefinitions],a=i.find(e=>e.id===n);if(a){e.graph.updateNode(t,{componentPropertyDefinitions:i.filter(e=>e.id!==n)});for(let t of r.childIds){let n=e.graph.getNode(t);if(!n)continue;let r=oe(n.componentPropertyValues,[a.name]);e.graph.updateNode(t,{componentPropertyValues:r})}e.undo.push({label:`Remove property`,forward:()=>{let r=e.graph.getNode(t);if(r){e.graph.updateNode(t,{componentPropertyDefinitions:r.componentPropertyDefinitions.filter(e=>e.id!==n)});for(let t of r.childIds){let n=e.graph.getNode(t);if(!n)continue;let r=oe(n.componentPropertyValues,[a.name]);e.graph.updateNode(t,{componentPropertyValues:r})}}e.requestRender()},inverse:()=>{e.graph.updateNode(t,{componentPropertyDefinitions:i}),e.requestRender()}}),e.requestRender()}}function i(t,n,r){let i=e.graph.getNode(t);if(i?.type!==`COMPONENT_SET`)return;let a=i.componentPropertyDefinitions.find(e=>e.id===n);if(!a)return;let o=a.name,s=i.componentPropertyDefinitions.map(e=>e.id===n?{...e,name:r}:e);e.graph.updateNode(t,{componentPropertyDefinitions:s});for(let t of i.childIds){let n=e.graph.getNode(t);if(!n)continue;let i={...n.componentPropertyValues};if(o in i){let n=oe(i,[o]);n[r]=i[o],e.graph.updateNode(t,{componentPropertyValues:n})}}let c=r=>{let i=e.graph.getNode(t);i&&(e.graph.updateNode(t,{componentPropertyDefinitions:i.componentPropertyDefinitions.map(e=>e.id===n?{...e,name:r}:e)}),e.requestRender())};e.undo.push({label:`Rename property`,forward:()=>c(r),inverse:()=>c(o)}),e.requestRender()}function a(t){let n=e.graph.getNode(t);if(n?.type!==`COMPONENT_SET`)return new Map;let r=new Map;for(let t of n.childIds){let n=e.graph.getNode(t);if(n?.type===`COMPONENT`)for(let[e,t]of Object.entries(n.componentPropertyValues)){let n=r.get(e)??new Set;n.add(t),r.set(e,n)}}return r}function o(t){let n=e.graph.getNode(t);return n?.type===`COMPONENT_SET`?n.childIds.map(t=>e.graph.getNode(t)).filter(e=>e?.type===`COMPONENT`):[]}function s(e,t){for(let n of o(e).sort(a_)){let e=n.componentPropertyValues;if(Object.entries(t).every(([t,n])=>e[t]===n))return n}}function c(t){let n=e.graph.getNode(t);if(n?.type!==`COMPONENT_SET`)return;let r=Object.fromEntries(n.componentPropertyDefinitions.filter(e=>e.type===`VARIANT`&&e.defaultValue).map(e=>[e.name,e.defaultValue]));if(Object.keys(r).length>0){let e=s(t,r);if(e)return e}return o(t).sort(a_)[0]}function l(t){let n=e.graph.getNode(t);if(n?.type!==`COMPONENT_SET`)return[];let r=n.componentPropertyDefinitions.filter(e=>e.type===`VARIANT`).map(e=>e.name),i=new Map;for(let e of o(t)){let t=Object.fromEntries(r.map(t=>[t,e.componentPropertyValues[t]??``])),n=r.map(e=>`${e}=${t[e]}`).join(`\0`),a=i.get(n)??{values:t,componentIds:[]};a.componentIds.push(e.id),i.set(n,a)}return[...i.values()].filter(e=>e.componentIds.length>1)}function u(t,n,r){let i=e.graph.getNode(t);if(i?.type!==`INSTANCE`||!i.componentId)return;let a=e.graph.getNode(i.componentId);if(!a)return;let o=a.parentId;if(!o||e.graph.getNode(o)?.type!==`COMPONENT_SET`)return;let c={...a.componentPropertyValues};c[n]=r;let l=s(o,c);if(!l||l.id===i.componentId)return;let u=i.componentId;e.graph.swapInstanceComponent(t,l.id),r_(e,t),e.undo.push({label:`Switch variant`,forward:()=>{e.graph.swapInstanceComponent(t,l.id),r_(e,t),e.requestRender()},inverse:()=>{e.graph.swapInstanceComponent(t,u),r_(e,t),e.requestRender()}}),e.requestRender()}return{getComponentSetPropertyDefs:t,addPropertyDefinition:n,removePropertyDefinition:r,renamePropertyDefinition:i,parseVariantName:$t,buildVariantName:H,collectVariantOptions:a,findVariantByValues:s,getDefaultVariantForComponentSet:c,getComponentSetVariantConflicts:l,switchInstanceVariant:u}}function s_(e){function t(t,n){if(t.length===0)return;let r=new Set(e.state.selectedIds);if(t.length===1){let n=t[0],i=n.type;if(n.type===`COMPONENT`)return;if(n.type===`FRAME`||n.type===`GROUP`){e.graph.updateNode(n.id,{type:`COMPONENT`}),e.setSelectedIds(new Set([n.id])),e.undo.push({label:`Create component`,forward:()=>{e.graph.updateNode(n.id,{type:`COMPONENT`}),e.setSelectedIds(new Set([n.id]))},inverse:()=>{e.graph.updateNode(n.id,{type:i}),e.setSelectedIds(r)}});return}}n(`COMPONENT`,t)}function n(t,n){if(t.length<2||!t.every(e=>e.type===`COMPONENT`))return;let r=n(`COMPONENT_SET`,t);if(!r)return;let i=t.map(e=>(e.name.match(/\//g)??[]).length);if(i.every(e=>e===i[0])&&i[0]>0){let n=i[0],a=[],o=new Map;for(let e=0;e<n;e++){let t=`prop:${yt(8)}`,n=e===0?`Variant`:`Property ${e+1}`;a.push({id:t,name:n,type:`VARIANT`,defaultValue:``}),o.set(n,new Set)}for(let n of t){let t=n.name.split(`/`).slice(1),r={};for(let e=0;e<a.length;e++){let n=t[e]?.trim()??``;r[a[e].name]=n,o.get(a[e].name)?.add(n)}e.graph.updateNode(n.id,{componentPropertyValues:r,name:Object.values(r).join(`, `)})}for(let e of a)e.variantOptions=[...o.get(e.name)??[]],!e.defaultValue&&e.variantOptions[0]&&(e.defaultValue=e.variantOptions[0]);e.graph.updateNode(r,{componentPropertyDefinitions:a})}}let r=Wg(e),i=Kg(e),a=o_(e),o=i_(e,a.switchInstanceVariant);return{createComponentFromSelection:t,createComponentSetFromComponents:n,...i,...r,...a,...o}}var c_=new Set([`vectorNetwork`,`fillGeometry`,`strokeGeometry`]),l_=new Set([`x`,`y`,`rotation`,`flipX`,`flipY`,`parentId`]);function u_(e,t){let n=Object.keys(e);return{geometryCache:n.some(e=>c_.has(e)),nodePicture:t.preview?n.some(e=>!l_.has(e)):!0}}function d_(e,t,n,r){let i=u_(n,{preview:!r});for(let n of e)i.geometryCache&&n.invalidateVectorPath(t),i.nodePicture&&n.invalidateNodePicture(t)}function f_(e){let t=null;function n(t,n){d_(e.getRenderers(),t,n,!0),e.emitEditorEvent(`node:updated`,t,n),e.scheduleComponentSync(t),e.requestRender()}function r(t,n){let{nodePicture:r}=u_(n,{preview:!0});d_(e.getRenderers(),t,n,r)}function i(t){e.scheduleComponentSync(t),e.requestRender()}function a(){t?.(),t=e.getGraph().onNodeEvents({updated:n,previewUpdated:r,created:t=>{e.emitEditorEvent(`node:created`,t),i(t.id)},deleted:t=>{e.emitEditorEvent(`node:deleted`,t),i(t)},reparented:(t,n,r)=>{e.emitEditorEvent(`node:reparented`,t,n,r),i(t)},reordered:(t,n,r)=>{e.emitEditorEvent(`node:reordered`,t,n,r),i(t)}})}return{subscribeToGraph:a}}function p_(e){return{getNode:t=>e().getNode(t),getImage:t=>e().images.get(t),getChildren:t=>e().getChildren(t),getPages:t=>e().getPages(t)}}function m_(e){function t(t){let n=e(),r=n.getNode(t);if(!r)return;wt(n,t);let i=r.parentId?n.getNode(r.parentId):void 0;for(;i;)i.layoutMode!==`NONE`&&St(n,i.id),i=i.parentId?n.getNode(i.parentId):void 0}return{runLayoutForNode:t}}function h_(e){function t(t,n){let r=e.graph.getNode(t);if(!r)return;let i=g_(r),a=v_(e,r,t,n);e.graph.updateNode(t,a),n!==`NONE`&&St(e.graph,t),e.runLayoutForNode(t);let o=e.graph.getNode(t);if(!o)return;let s=__(o,Object.keys(i));e.undo.push({label:n===`NONE`?`Remove auto layout`:`Add auto layout`,forward:()=>{e.graph.updateNode(t,s),n!==`NONE`&&St(e.graph,t),e.runLayoutForNode(t)},inverse:()=>{e.graph.updateNode(t,i),e.runLayoutForNode(t)}})}return{setLayoutMode:t}}function g_(e){return{layoutMode:e.layoutMode,itemSpacing:e.itemSpacing,paddingTop:e.paddingTop,paddingRight:e.paddingRight,paddingBottom:e.paddingBottom,paddingLeft:e.paddingLeft,primaryAxisSizing:e.primaryAxisSizing,counterAxisSizing:e.counterAxisSizing,primaryAxisAlign:e.primaryAxisAlign,counterAxisAlign:e.counterAxisAlign,gridTemplateColumns:e.gridTemplateColumns,gridTemplateRows:e.gridTemplateRows,gridColumnGap:e.gridColumnGap,gridRowGap:e.gridRowGap,width:e.width,height:e.height}}function __(e,t){return Jt(e,t)}function v_(e,t,n,r){let i={layoutMode:r};return r===`GRID`&&t.layoutMode!==`GRID`?y_(e,t,n,i):r!==`NONE`&&t.layoutMode===`NONE`&&Object.assign(i,b_()),i}function y_(e,t,n,r){let i=e.graph.getChildren(n),a=Math.max(2,Math.ceil(Math.sqrt(i.length))),o=Math.max(1,Math.ceil(i.length/a));if(r.gridTemplateColumns=Array.from({length:a},()=>({sizing:`FR`,value:1})),r.gridTemplateRows=Array.from({length:o},()=>({sizing:`FR`,value:1})),r.gridColumnGap=0,r.gridRowGap=0,r.primaryAxisSizing=`FIXED`,r.counterAxisSizing=`FIXED`,t.primaryAxisSizing===`HUG`||t.counterAxisSizing===`HUG`){let e=Math.max(...i.map(e=>e.width),100),t=Math.max(...i.map(e=>e.height),100);r.width=e*a,r.height=t*o}r.paddingTop=0,r.paddingRight=0,r.paddingBottom=0,r.paddingLeft=0}function b_(){return{itemSpacing:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,primaryAxisSizing:`HUG`,counterAxisSizing:`HUG`,primaryAxisAlign:`MIN`,counterAxisAlign:`MIN`}}var x_=300;function S_(e){let t=null,n=null;function r(){if(!t)return;let r=t;t=null,n=null,kd(e,`Nudge`,r,Od(e,r.keys()))}function i(i,a){let o=[...e.state.selectedIds];if(o.length===0)return;let s=[];for(let t of o){let n=e.graph.getNode(t);n&&!n.locked&&s.push(t)}if(s.length!==0){if(!t){t=new Map;for(let n of s){let r=e.graph.getNode(n);r&&t.set(n,{x:r.x,y:r.y})}}for(let t of s){let n=e.graph.getNode(t);n&&(e.graph.updateNode(t,{x:n.x+i,y:n.y+a}),e.runLayoutForNode(t))}n&&clearTimeout(n),n=setTimeout(r,x_),e.requestRender()}}function a(){n&&(clearTimeout(n),r())}return{nudgeSelected:i,flushNudge:a}}var C_=new Set([`text`,`fontSize`,`fontFamily`,`fontWeight`,`italic`,`lineHeight`,`letterSpacing`,`styleRuns`,`fontVariations`,`fontFeatures`,`textAutoResize`,`width`,`maxLines`]),w_=new Set([`text`,`fontSize`,`fontFamily`,`fontWeight`,`italic`,`letterSpacing`,`styleRuns`,`fontVariations`,`fontFeatures`,`textAutoResize`]);function T_(e){return Object.keys(e).some(e=>C_.has(e))}function E_(e){return Object.keys(e).some(e=>w_.has(e))}function D_(e,t){if(e?.type!==`TEXT`||!T_(t))return{};let n={...e,...t},r=n.textAutoResize;if(r!==`HEIGHT`&&r!==`WIDTH_AND_HEIGHT`)return{};let i=r===`HEIGHT`?n.width:void 0,a=xt()?.(n,i)??Ct(n,i),o={figmaDerivedLayout:null,figmaDerivedTextGlyphs:null};return r===`WIDTH_AND_HEIGHT`&&E_(t)&&a.width>0&&(o.width=a.width),a.height>0&&(o.height=a.height),o}function O_(e){function t(t,n,r){let i=e.graph.getNode(t);if(!i)return;let a=i.boundVariables[n];e.graph.bindVariable(t,n,r),e.undo.push({label:`Bind variable`,forward:()=>{try{e.graph.bindVariable(t,n,r),e.requestRender()}catch(e){console.warn(`Redo bindVariable failed:`,e instanceof Error?e.message:String(e))}},inverse:()=>{try{a?e.graph.bindVariable(t,n,a):e.graph.unbindVariable(t,n),e.requestRender()}catch(e){console.warn(`Undo bindVariable failed:`,e instanceof Error?e.message:String(e))}}}),e.requestRender()}function n(t,n){let r=e.graph.getNode(t);if(!r)return;let i=r.boundVariables[n];i&&(e.graph.unbindVariable(t,n),e.undo.push({label:`Unbind variable`,forward:()=>{try{e.graph.unbindVariable(t,n),e.requestRender()}catch(e){console.warn(`Redo unbindVariable failed:`,e instanceof Error?e.message:String(e))}},inverse:()=>{try{e.graph.bindVariable(t,n,i),e.requestRender()}catch(e){console.warn(`Undo unbindVariable failed:`,e instanceof Error?e.message:String(e))}}}),e.requestRender())}return{bindVariable:t,unbindVariable:n}}function k_(e){if(e===`0`||!/^\d+$/.test(e))return 1;let t=Number.parseInt(e,10);if(!Number.isFinite(t))return 1;let n=e.length===1?t*10:t;return Math.min(100,Math.max(0,n))/100}function A_(e){let t=h_(e),n=S_(e),r=O_(e);function i(t,n){let r=e.graph.getNode(t);if(!r)return;let i=te(r,{...n,...D_(r,n)});e.graph.updateNode(t,i),e.runLayoutForNode(t)}function a(t,n,r=`Update`){let i=e.graph.getNode(t);if(!i)return;let a=te(i,{...n,...D_(i,n)}),o=Jt(i,Object.keys(a));e.graph.updateNode(t,a),e.runLayoutForNode(t),e.undo.push({label:r,forward:()=>{e.graph.updateNode(t,a),e.runLayoutForNode(t)},inverse:()=>{e.graph.updateNode(t,o),e.runLayoutForNode(t)}}),e.requestRender()}function o(t,n){if(!Number.isFinite(t))return;let r=Math.max(0,Math.min(1,t)),i=[...e.state.selectedIds];if(i.length===0)return;let o=i.map(t=>e.graph.getNode(t)).filter(e=>e!=null).filter(e=>e.opacity!==r);o.length!==0&&e.undo.runBatch(`Set opacity`,()=>{for(let e of o)a(e.id,{opacity:r},`Set opacity`)},n)}return{updateNode:i,updateNodeWithUndo:a,setOpacity:o,...t,...r,...n}}var j_=new WeakMap;function M_(e,t){j_.set(e,t)}function N_(e){return j_.get(e)}function P_(e,t,n){e.preserveSourceMetadataDuring(()=>{au(e,t.changeMap,t.guidToNodeId,t.blobs,n)});let r=n??e.getPages(!0).map(e=>e.id);for(let e of r)t.populatedRootIds.add(e)}function F_(e,t,n){let r=[...n].filter(e=>e&&!t.populatedRootIds.has(e));return r.length===0?!1:(P_(e,t,r),!0)}function I_(e,t){let n=N_(e);return n?F_(e,n,t):!1}function L_(e){let t=N_(e);return!t||e.getPages(!0).map(e=>e.id).every(e=>t.populatedRootIds.has(e))?!1:(P_(e,t),!0)}function R_(e,t){e.preserveSourceMetadataDuring(()=>{for(let[,n]of t.created)e.createNodeWithId(n.id,n.type,n.parentId,n);for(let[n,r]of t.updated)e.updateNode(n,r);for(let n of t.deleted)e.deleteNode(n)}),e.instanceIndex=new Map(t.instanceIndex.map(([e,t])=>[e,new Set(t)]))}var z_=2e5,B_=3e4,V_=new WeakMap;function H_(e){typeof globalThis.dispatchEvent==`function`&&globalThis.dispatchEvent(new CustomEvent(`openpencil:fig-population-worker`,{detail:e}))}function U_(e,t){if(e.nodes.size>z_){H_({event:`fallback`,reason:`oversized`}),t.terminate();return}let n=q_(e,t);V_.set(e,n),H_({event:`registered`})}function W_(e){return e?.DEV??!1}function G_(e){return W_({BASE_URL:`/open-pencil/v0.14.0/`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1})&&V_.has(e)&&N_(e)!==void 0}function K_(e){return G_(e)?V_.get(e)??null:null}function q_(e,t){let n=new Map,r=0,i=!1,a=!1,o=!1,s=()=>{o||i||e.isApplyingLayout||(r++,i=!0,H_({event:`stale`,reason:`graph-mutation`}))},c,l=()=>{c?.(),c=void 0},u=(r=!0)=>{i=!0,r&&H_({event:`fallback`,reason:`worker-error`});for(let e of n.values())clearTimeout(e.timeout),e.resolve(null);n.clear(),l(),t.terminate(),V_.delete(e)};return c=e.onNodeEvents({created:s,updated:s,deleted:s,reparented:s,reordered:s}),t.onmessage=t=>{let a=t.data;if(a.type===`population-error`)return u();let s=n.get(a.requestId);if(!s)return;if(clearTimeout(s.timeout),n.delete(a.requestId),i||r!==s.revision||a.baseRevision!==s.revision)return H_({event:`stale`,reason:`graph-mutation`}),s.resolve(null);o=!0;let c=performance.now();try{R_(e,a.delta);let t=N_(e);t&&(t.populatedRootIds=new Set(a.delta.populatedRootIds))}catch{return o=!1,u(),s.resolve(null)}finally{o=!1}s.resolve(a.populated),H_({event:`populate`,durationMs:performance.now()-s.startedAt,applyMs:performance.now()-c,created:a.delta.created.length,updated:a.delta.updated.length,deleted:a.delta.deleted.length})},t.onerror=()=>u(),{populate(e){if(i)return Promise.resolve(null);let a=yt(),o=r;return new Promise(r=>{let i=setTimeout(()=>u(),B_);n.set(a,{resolve:r,revision:o,startedAt:performance.now(),timeout:i}),t.postMessage({type:`populate`,requestId:a,baseRevision:o,pageId:e},[])})},terminate(){a||(a=!0,H_({event:`terminated`}),u(!1))}}}function J_(e){let t=new Map;function n(){t.set(e.state.currentPageId,{panX:e.state.panX,panY:e.state.panY,zoom:e.state.zoom,pageColor:{...e.state.pageColor}})}function r(n){let r=t.get(n);if(r){e.state.panX=r.panX,e.state.panY=r.panY,e.state.zoom=r.zoom,e.state.pageColor={...r.pageColor};return}e.state.panX=0,e.state.panY=0,e.state.zoom=1,e.state.pageColor={...Oe}}function i(e){t.delete(e)}function a(){t.clear()}return{saveCurrentPageViewport:n,restorePageViewport:r,deletePageViewport:i,clearPageViewports:a}}function Y_(e){let t=J_(e),n,r=0,i=0;function a(){return G_(e.graph)?(n??=K_(e.graph),n):null}async function o(o){if(e.graph.getNode(o)?.type!==`CANVAS`)return;let s=++i;t.saveCurrentPageViewport();let c=e.state.currentPageId;e.state.currentPageId=o,e.state.enteredContainerId=null,e.setSelectedIds(new Set),c!==o&&e.emitEditorEvent(`page:changed`,o,c),t.restorePageViewport(o),e.state.loading=!0;let l;try{let t=a(),i=r,s=t?await t.populate(o):null;if(i!==r)return;s===null?(t?.terminate(),n=void 0,l=I_(e.graph,[o])):l=s}finally{s===i&&(e.state.loading=!1)}if(s!==i)return;let u=e.graph.getChildren(o).map(e=>e.id),d=p.collectFontKeys(e.graph,u),f=h(e.graph,u);p.blockNodesUntilFontsResolve(u);try{let t=await Promise.all(d.map(([t,n])=>e.loadFont(t,n,f.characters))),n=Me(f),r=await p.ensureFallbackPack(n,f.characters),i=t.every(e=>e!==null),a=n.every(e=>(r[e]?.length??0)>0);if(i&&a)for(let e of f.nodes)e.type===`TEXT`&&(e.textPicture=null)}finally{p.unblockNodes(u),e.getRenderer()?.invalidateAllPictures()}(e.getRenderer()||l)&&wt(e.graph,o),e.requestRender()}function s(){r++,i++,e.state.loading=!1,n?.terminate(),n=void 0,t.clearPageViewports()}function c(t){let n=e.graph.getPages(),r=t??`Page ${n.length+1}`,i=e.graph.addPage(r);return o(i.id),i.id}function l(n){let r=e.graph.getPages();if(r.length<=1)return;let i=r.findIndex(e=>e.id===n);if(e.graph.deleteNode(n),t.deletePageViewport(n),e.state.currentPageId===n){let t=Math.min(i,r.length-2);o(e.graph.getPages()[t].id)}}function u(t,n){let r=e.graph.getPages(),i=r.findIndex(e=>e.id===t);if(i===-1)return;let a=Math.max(0,Math.min(n,r.length-1));a!==i&&e.graph.insertChildAt(t,e.graph.rootId,a)}function d(t,n){e.graph.updateNode(t,{name:n})}function f(t){e.state.pageColor=t,e.requestRender()}return{switchPage:o,addPage:c,deletePage:l,movePage:u,renamePage:d,setPageColor:f,clearPageViewports:s}}function X_(e){function t(){e.state.enteredContainerId&&!e.graph.getNode(e.state.enteredContainerId)&&(e.state.enteredContainerId=null)}function n(t){e.state.enteredContainerId=t}function r(){let t=e.state.enteredContainerId;if(!t)return;let n=e.graph.getNode(t)?.parentId;n&&n!==e.state.currentPageId?e.state.enteredContainerId=n:e.state.enteredContainerId=null,e.setSelectedIds(new Set(t?[t]:[]))}return{validateEnteredContainer:t,enterContainer:n,exitContainer:r}}function Z_(e,t,n){function r(t,n,r=!1){if(!e.getRenderer())return null;let i=e.state.enteredContainerId;if(i)if(!e.graph.getNode(i))e.state.enteredContainerId=null;else return r?e.graph.hitTestDeep(t,n,i):e.graph.hitTest(t,n,i);return r?e.graph.hitTestDeep(t,n,e.state.currentPageId):e.graph.hitTest(t,n,e.state.currentPageId)}function i(i,a){let o=r(i,a);o?e.state.selectedIds.has(o.id)||t([o.id]):n()}return{hitTestAtPoint:r,selectAtPoint:i}}function Q_(e){function t(t){e.state.marquee=t,e.requestRepaint()}function n(t){e.state.snapGuides=t,e.requestRepaint()}function r(t){e.state.rotationPreview=t,e.requestRepaint()}function i(t){e.state.hoveredNodeId!==t&&(e.state.hoveredNodeId=t,e.requestRepaint())}function a(t){e.state.dropTargetId!==t&&(e.state.dropTargetId=t,e.requestRepaint())}function o(t){e.state.layoutInsertIndicator!==t&&(e.state.layoutInsertIndicator=t,e.requestRepaint())}function s(t){let n=e.state.autoLayoutHover;n?.nodeId===t?.nodeId&&n?.kind===t?.kind&&n?.index===t?.index&&n?.side===t?.side||(e.state.autoLayoutHover=t,e.requestRepaint())}return{setMarquee:t,setSnapGuides:n,setRotationPreview:r,setHoveredNode:i,setDropTarget:a,setLayoutInsertIndicator:o,setAutoLayoutHover:s}}function $_(e){function t(){let t=[];for(let n of e.state.selectedIds){let r=e.graph.getNode(n);r&&t.push({...r})}return t}function n(){if(e.state.selectedIds.size!==1)return;let t=e.state.selectedIds.values().next().value,n=e.graph.getNode(t);return n?{...n}:void 0}function r(){return e.graph.flattenTree(e.state.currentPageId)}return{getSelectedNodes:t,getSelectedNode:n,getLayerTree:r}}function ev(e){function t(t,n=!1){if(n){let n=new Set(e.state.selectedIds);for(let e of t)n.has(e)?n.delete(e):n.add(e);e.setSelectedIds(n)}else e.setSelectedIds(new Set(t))}function n(){e.setSelectedIds(new Set)}function r(){let t=e.graph.getChildren(e.state.currentPageId);e.setSelectedIds(new Set(t.map(e=>e.id)))}function i(){let t=e.graph.getChildren(e.state.currentPageId);e.setSelectedIds(new Set(t.filter(t=>!e.state.selectedIds.has(t.id)).map(e=>e.id)))}let a=X_(e),o=Z_(e,t,n),s=Q_(e),c=$_(e);return{select:t,clearSelection:n,selectAll:r,selectInverse:i,...s,...a,...c,...o}}function tv(e,t,n){let r=t.parentId?e.graph.getNode(t.parentId):void 0,i=t.layoutPositioning!==`ABSOLUTE`&&r?.layoutMode!==`NONE`&&(r?.layoutMode===`GRID`||r?.counterAxisAlign===`STRETCH`);return{width:n.width,height:n.height,primaryAxisSizing:`FIXED`,counterAxisSizing:`FIXED`,layoutGrow:0,layoutAlignSelf:t.layoutAlignSelf===`STRETCH`||t.layoutAlignSelf===`AUTO`&&i?`MIN`:t.layoutAlignSelf}}function nv(e,t){function n(n){let{width:r,height:i}=e.getViewportSize(),a=(r/2-e.state.panX)/e.state.zoom,o=(i/2-e.state.panY)/e.state.zoom,s=new Set(e.state.selectedIds),c=e.undo.runBatch(`Create frame`,()=>{let r=t(`FRAME`,a-n.width/2,o-n.height/2,n.width,n.height,void 0,n.name),i=new Set([r]);return e.setSelectedIds(i),e.undo.push({label:`Select created frame`,forward:()=>e.setSelectedIds(new Set(i)),inverse:()=>e.setSelectedIds(new Set(s))}),r});return e.setActiveTool(`SELECT`),e.requestRender(),c}function r(t,n,r){e.graph.updateNode(t,n);for(let[t,n]of r)e.graph.updateNode(t,n),`vectorNetwork`in n&&e.getRenderer()?.invalidateVectorPath(t);e.runLayoutForNode(t)}function i(t,n,i,a){e.graph.updateNode(t,i);let o=ul(e.graph,t,n,i,a);for(let[t,n]of o)e.graph.updateNode(t,n);e.runLayoutForNode(t),r(t,i,ul(e.graph,t,n,i,a))}function a(t,n){let a=e.graph.getNode(t);if(a?.type!==`FRAME`)return;let o={width:a.width,height:a.height,primaryAxisSizing:a.primaryAxisSizing,counterAxisSizing:a.counterAxisSizing,layoutGrow:a.layoutGrow,layoutAlignSelf:a.layoutAlignSelf},s=tv(e,a,n);if(o.width===s.width&&o.height===s.height&&o.primaryAxisSizing===s.primaryAxisSizing&&o.counterAxisSizing===s.counterAxisSizing&&o.layoutGrow===s.layoutGrow&&o.layoutAlignSelf===s.layoutAlignSelf)return;let c=ll(e.graph,t)??new Map;i(t,o,s,c);let l=ll(e.graph,t)??new Map;e.undo.push({label:`Resize frame to preset`,forward:()=>i(t,o,s,c),inverse:()=>{i(t,s,o,l),r(t,o,c)}}),e.requestRender()}return{createFrameFromPreset:n,resizeFrameToPreset:a}}var rv={color:De,weight:2,opacity:1,visible:!0,align:`CENTER`};function iv(e,t){let n={x:-t.x,y:-t.y},r=Math.hypot(n.x,n.y);if(r<=1e-6)return e;let i={x:n.x/r,y:n.y/r},a=Math.max(0,e.x*i.x+e.y*i.y);return{x:i.x*a,y:i.y*a}}function av(e,t,n,r){if(t){if(!n)return;n.start===0?n.tangentStart={x:e.x,y:e.y}:n.end===0&&(n.tangentEnd={x:e.x,y:e.y});return}r&&(r.tangentEnd={x:e.x,y:e.y})}function ov(e,t){function n(t,n){if(!e.state.penState){e.state.penState={vertices:[{x:t,y:n}],segments:[],dragTangent:null,oppositeDragTangent:null,pendingClose:!1,closingToFirst:!1},e.requestRender();return}let r=e.state.penState,i=r.vertices.length-1;r.vertices.push({x:t,y:n});let a=r.vertices.length-1;r.segments.push({start:i,end:a,tangentStart:r.dragTangent??{x:0,y:0},tangentEnd:{x:0,y:0}}),r.dragTangent=null,r.oppositeDragTangent=null,r.pendingClose=!1,e.requestRender()}function r(t,n,r){if(!e.state.penState)return;let i=e.state.penState,a={x:t,y:n},o=!!i.pendingClose&&i.vertices.length>2,s=o?0:i.vertices.length-1,c=i.segments.length>0?i.segments[i.segments.length-1]:void 0,l=i.segments.length>0?i.segments[0]:void 0,u=r?.oppositeTangent??i.oppositeDragTangent??(c?c.tangentEnd:{x:-t,y:-n});if(r?.constrainToOpposite&&(a=iv(a,u)),i.dragTangent=a,r?.keepOpposite??o)i.oppositeDragTangent={x:u.x,y:u.y},av(u,o,l,c),r?.constrainToOpposite?i.vertices[s].handleMirroring=`ANGLE`:i.vertices[s].handleMirroring=`NONE`;else{let e={x:-a.x,y:-a.y};i.oppositeDragTangent=e,av(e,o,l,c),i.vertices[s].handleMirroring=`ANGLE_AND_LENGTH`}e.requestRender()}function i(t){e.state.penState&&(e.state.penState.closingToFirst=t,e.requestRender())}function a(t){e.state.penState&&(e.state.penState.pendingClose=t,e.requestRepaint())}function o(t,n){if(!e.state.penState)return;let r=e.state.penState,i=r.pendingClose&&r.vertices.length>2?0:r.vertices.length-1;r.vertices[i].x=t,r.vertices[i].y=n,e.requestRender()}function s(n){let r=e.state.penState;if(!r||r.vertices.length<2){e.state.penState=null,e.state.penCursorX=null,e.state.penCursorY=null;return}if(n&&r.pendingClose&&r.vertices.length>2){let e=r.vertices.length-1;r.segments.push({start:e,end:0,tangentStart:{x:0,y:0},tangentEnd:r.dragTangent??{x:0,y:0}})}let i=n?[{windingRule:`NONZERO`,loops:[r.segments.map((e,t)=>t)]}]:[],a={vertices:r.vertices.map(e=>({...e})),segments:r.segments.map(e=>({...e,tangentStart:{...e.tangentStart},tangentEnd:{...e.tangentEnd}})),regions:i},o=Ne(a),s={vertices:a.vertices.map(e=>({...e,x:e.x-o.x,y:e.y-o.y})),segments:a.segments,regions:a.regions},c=r.resumedFills?r.resumedFills.map(e=>({...e})):[],l=r.resumedStrokes?r.resumedStrokes.map(e=>({...e})):[{...rv}],u=t(`VECTOR`,o.x,o.y,o.width,o.height);e.graph.updateNode(u,{vectorNetwork:s,name:`Vector`,fills:c,strokes:l}),e.setSelectedIds(new Set([u])),e.state.penState=null,e.state.penCursorX=null,e.state.penCursorY=null,e.setActiveTool(`SELECT`),e.requestRender()}function c(){e.state.penState=null,e.state.penCursorX=null,e.state.penCursorY=null,e.setActiveTool(`SELECT`),e.requestRender()}return{penAddVertex:n,penSetDragTangent:r,penSetClosingToFirst:i,penSetPendingClose:a,penSetKnotPosition:o,penCommit:s,penCancel:c}}function sv(e,t){let n=e.graph.getNode(t);if(n?.type!==`SECTION`)return;let r=n.parentId??e.state.currentPageId,i=e.graph.getChildren(r),a=n.x,o=n.y,s=a+n.width,c=o+n.height,l=[];for(let e of i){if(e.id===t)continue;let n=e.x,r=e.y,i=n+e.width,u=r+e.height;n>=a&&r>=o&&i<=s&&u<=c&&l.push(e.id)}if(l.length===0)return;let u=[];for(let n of l){let i=e.graph.getNode(n);if(!i)continue;let s=i.x-a,c=i.y-o;u.push({id:n,oldParent:r,oldX:i.x,oldY:i.y,newX:s,newY:c}),e.graph.reparentNode(n,t),e.graph.updateNode(n,{x:s,y:c})}e.undo.push({label:`Adopt into section`,forward:()=>{for(let n of u)e.graph.reparentNode(n.id,t),e.graph.updateNode(n.id,{x:n.newX,y:n.newY})},inverse:()=>{for(let t of u)e.graph.reparentNode(t.id,t.oldParent),e.graph.updateNode(t.id,{x:t.oldX,y:t.oldY})}})}var cv={type:`SOLID`,color:De,opacity:1,visible:!0},lv={FRAME:ye,SECTION:we,RECTANGLE:Ce,ELLIPSE:Ce,POLYGON:Ce,STAR:Ce,LINE:cv,TEXT:cv};function uv(e){function t(t,n,r,i,a,o,s){let c=lv[t]??lv.RECTANGLE,l=o??e.state.currentPageId,u={x:n,y:r,width:i,height:a,fills:[{...c}],...s?{name:s}:{}};t===`SECTION`&&(u.strokes=[{...be}],u.cornerRadius=5),t===`POLYGON`&&(u.pointCount=3),t===`STAR`&&(u.pointCount=5,u.starInnerRadius=.38);let d=e.graph.createNode(t,l,u),f=d.id,p={...d};return e.undo.push({label:`Create ${t.toLowerCase()}`,forward:()=>{e.graph.createNode(p.type,l,p)},inverse:()=>{e.graph.deleteNode(f);let t=new Set(e.state.selectedIds);t.delete(f),e.setSelectedIds(t)}}),f}let n=ov(e,t),r=nv(e,t);function i(t){e.setActiveTool(t)}return{createShape:t,...n,...r,adoptNodesIntoSection:t=>sv(e,t),setTool:i}}function dv(e){return{activeTool:`SELECT`,currentPageId:e,selectedIds:new Set,marquee:null,snapGuides:[],rotationPreview:null,dropTargetId:null,layoutInsertIndicator:null,hoveredNodeId:null,editingTextId:null,penState:null,penCursorX:null,penCursorY:null,remoteCursors:[],autoLayoutHover:null,documentName:`Untitled`,panX:0,pageColor:{...Oe},panY:0,zoom:1,renderVersion:0,sceneVersion:0,loading:!1,enteredContainerId:null}}function fv(e,t,n){if(n.length===0)return;let r=n[0].parentId??e.state.currentPageId;if(!n.every(t=>(t.parentId??e.state.currentPageId)===r))return;let i=new Set(e.state.selectedIds),a=n.map(e=>({id:e.id,x:e.x,y:e.y,parentId:r})),o=x(n,t=>e.graph.getAbsolutePosition(t)),s=t(r)?{x:0,y:0}:e.graph.getAbsolutePosition(r),c=n.length<=1||o.height>o.width?`VERTICAL`:`HORIZONTAL`,l=e.graph.createNode(`FRAME`,r,{name:`Frame`,x:o.x-s.x,y:o.y-s.y,width:o.width,height:o.height,layoutMode:c,primaryAxisSizing:`HUG`,counterAxisSizing:`HUG`,primaryAxisAlign:`MIN`,counterAxisAlign:`MIN`,fills:[]}),u=l.id,d=n.map(t=>({id:t.id,pos:e.graph.getAbsolutePosition(t.id)})).sort((e,t)=>e.pos.y-t.pos.y||e.pos.x-t.pos.x).map(e=>e.id);for(let t of d)e.graph.reparentNode(t,u);St(e.graph,u),e.runLayoutForNode(u),e.setSelectedIds(new Set([u])),e.undo.push({label:`Wrap in auto layout`,forward:()=>{let t=e.graph.createNode(`FRAME`,r,{...l,id:u});for(let n of a)e.graph.reparentNode(n.id,t.id);St(e.graph,t.id),e.runLayoutForNode(t.id),e.setSelectedIds(new Set([t.id]))},inverse:()=>{for(let t of a)e.graph.reparentNode(t.id,t.parentId),e.graph.updateNode(t.id,{x:t.x,y:t.y});e.graph.deleteNode(u),e.setSelectedIds(i)}})}function pv(e){let t=new Set(e.map(e=>e.id));return e.filter(e=>!e.parentId||!t.has(e.parentId))}function mv(e,t){let n=pv(t);if(n.length===0||n.some(e=>e.locked))return null;let r=n[0].parentId??e.state.currentPageId;if(!n.every(t=>(t.parentId??e.state.currentPageId)===r))return null;let i=e.graph.getNode(r);return i?{topLevel:n,parentId:r,parent:i}:null}function hv(e,t,n,r){let i=mv(e,n);if(!i||i.topLevel.length<2)return null;let{topLevel:a,parentId:o,parent:s}=i;if(a.some(t=>!Le(t,e.graph)))return null;let c=new Set(e.state.selectedIds),l=a.map(e=>e.id),u=l.map(t=>({id:t,subtree:kg(e.graph,t)})),d=a.map(e=>({id:e.id,x:e.x,y:e.y})),f=Math.min(...l.map(e=>s.childIds.indexOf(e))),p=t(o)?{x:0,y:0}:e.graph.getAbsolutePosition(o),m=x(a,t=>e.graph.getAbsolutePosition(t)),h=e.graph.createNode(`BOOLEAN_OPERATION`,o,{name:gv(r),x:m.x-p.x,y:m.y-p.y,width:m.width,height:m.height,fills:C(a[0].fills),strokes:T(a[0].strokes),booleanOperation:r}),g=h.id;e.graph.insertChildAt(g,o,f);for(let t of l)e.graph.reparentNode(t,g);return e.setSelectedIds(new Set([g])),e.undo.push({label:gv(r),forward:()=>{let t=e.graph.createNode(`BOOLEAN_OPERATION`,o,{...h,childIds:[],id:g});e.graph.insertChildAt(t.id,o,f);for(let n of l)e.graph.reparentNode(n,t.id);e.setSelectedIds(new Set([t.id]))},inverse:()=>{for(let{id:t,subtree:n}of u){let r=n.get(t);r&&(e.graph.getNode(t)?e.graph.reparentNode(t,o):Ag(e.graph,r,o,n))}for(let t=0;t<l.length;t++){let n=l[t],r=d[t];e.graph.insertChildAt(n,o,f+t),e.graph.updateNode(n,{x:r.x,y:r.y})}e.graph.deleteNode(g),e.setSelectedIds(c)}}),g}function gv(e){switch(e){case`UNION`:return`Union`;case`SUBTRACT`:return`Subtract`;case`INTERSECT`:return`Intersect`;case`EXCLUDE`:return`Exclude`;default:return e}}function _v(e,t,n,r,i){if(r.length===0)return null;let a=r[0].parentId??e.state.currentPageId;if(!r.every(t=>(t.parentId??e.state.currentPageId)===a))return null;let o=e.graph.getNode(a);if(!o)return null;let s=new Set(e.state.selectedIds),c=r.map(e=>e.id),l=r.map(e=>({id:e.id,x:e.x,y:e.y})),{x:u,y:d,width:f,height:p}=x(r,t=>e.graph.getAbsolutePosition(t)),m=u+f,h=d+p,g=t(a)?{x:0,y:0}:e.graph.getAbsolutePosition(a),_=Math.min(...c.map(e=>o.childIds.indexOf(e))),v=n===`COMPONENT_SET`?40:0,y={COMPONENT_SET:r[0].name.split(`/`)[0]?.trim()||`Component Set`,COMPONENT:`Component`,GROUP:`Group`,FRAME:`Frame`},b=e.graph.createNode(n,a,{name:y[n]??n,x:u-g.x-v,y:d-g.y-v,width:m-u+v*2,height:h-d+v*2,fills:n===`COMPONENT_SET`?[{type:`SOLID`,color:{r:.96,g:.96,b:.96,a:1},opacity:1,visible:!0}]:[],...i}),S=b.id;e.graph.insertChildAt(S,a,_);for(let t of r)e.graph.reparentNode(t.id,S);return e.setSelectedIds(new Set([S])),e.undo.push({label:`Create ${n.toLowerCase().replace(`_`,` `)}`,forward:()=>{let t=e.graph.createNode(n,a,{...b,...i,id:S});e.graph.insertChildAt(t.id,a,_);for(let n of l)e.graph.reparentNode(n.id,t.id);e.setSelectedIds(new Set([t.id]))},inverse:()=>{for(let t of l)e.graph.reparentNode(t.id,a),e.graph.updateNode(t.id,{x:t.x,y:t.y});e.graph.deleteNode(S),e.setSelectedIds(s)}}),S}function vv(e,t,n={}){let r=n.label??`Flatten`,i=n.canFlattenNode??(t=>Le(t,e.graph)),a=n.vectorPropsFactory??Wd,o=e.getRenderer();if(!o)return null;let s=mv(e,t);if(!s)return null;let{topLevel:c,parentId:l,parent:u}=s;if(c.some(e=>!i(e)))return null;let d=c.map(e=>e.id),f=d.map(t=>({id:t,subtree:kg(e.graph,t)})),p=new Set(e.state.selectedIds),m=Math.min(...d.map(e=>u.childIds.indexOf(e))),h=a(o,e.graph,c);if(!h)return null;let g=e.graph.createNode(`VECTOR`,l,{...h,name:r,strokes:[]}),_=structuredClone(g);e.graph.insertChildAt(g.id,l,m);for(let t of d)e.graph.deleteNode(t);return e.setSelectedIds(new Set([g.id])),e.undo.push({label:r,forward:()=>{let t=e.graph.createNode(`VECTOR`,l,_);e.graph.insertChildAt(t.id,l,m);for(let t of d)e.graph.deleteNode(t);e.setSelectedIds(new Set([t.id]))},inverse:()=>{e.graph.deleteNode(g.id);for(let t=0;t<f.length;t++){let{id:n,subtree:r}=f[t],i=r.get(n);i&&(Ag(e.graph,i,l,r),e.graph.insertChildAt(n,l,m+t))}e.setSelectedIds(p)}}),g.id}function yv(e,t){return vv(e,t,{label:`Outline stroke`,canFlattenNode:t=>Le(t,e.graph)&&We(t,e.graph),vectorPropsFactory:Gd})}function bv(e,t){if(t?.type!==`GROUP`)return;let n=t,r=n.parentId??e.state.currentPageId,i=e.graph.getNode(r);if(!i)return;let a=i.childIds.indexOf(n.id),o=[...n.childIds],s=new Set(e.state.selectedIds),c=o.map(t=>{let n=e.graph.getNode(t);return n?{id:t,x:n.x,y:n.y}:{id:t,x:0,y:0}}),l=n.id,u={...n,childIds:[...n.childIds]};for(let t=0;t<o.length;t++)e.graph.reparentNode(o[t],r),e.graph.insertChildAt(o[t],r,a+t);e.graph.deleteNode(n.id),e.setSelectedIds(new Set(o)),e.undo.push({label:`Ungroup`,forward:()=>{for(let t=0;t<o.length;t++)e.graph.reparentNode(o[t],r),e.graph.insertChildAt(o[t],r,a+t);e.graph.deleteNode(l),e.setSelectedIds(new Set(o))},inverse:()=>{let t=e.graph.createNode(`GROUP`,r,{...u,childIds:[],id:l});e.graph.insertChildAt(t.id,r,a);for(let n of c)e.graph.reparentNode(n.id,t.id),e.graph.updateNode(n.id,{x:n.x,y:n.y});e.setSelectedIds(s)}})}function xv(e){let t=e.toLowerCase().replaceAll(`_`,` `);return t.charAt(0).toUpperCase()+t.slice(1)}function Sv(e,t,n,r){let i=Number.isFinite(r)?Math.trunc(r):1;return e.replace(/\$([nN]+)/g,(e,r)=>{let a=r[0]===`n`?i+t:i+n-t-1;return String(a).padStart(r.length,`0`)})}function Cv(e,t){let n;try{n=t.match?new RegExp(t.match):/^.*$/}catch{return{names:new Map,error:`invalid-pattern`}}let r=new Map;return e.forEach((i,a)=>{let o=Sv(t.replacement,a,e.length,t.startNumber),s=i.name.replace(n,o).trim();r.set(i.id,s||xv(i.type))}),{names:r,error:null}}function wv(e){function t(t,n,r){let i=e.graph.getNode(t);if(i){if(i.parentId!==n){let r=e.graph.getAbsolutePosition(t),i=e.graph.getAbsolutePosition(n);e.graph.updateNode(t,{x:r.x-i.x,y:r.y-i.y})}e.graph.reorderChild(t,n,r),St(e.graph,n),e.runLayoutForNode(n)}}function n(n,r,i){let a=e.graph.getNode(r);if(!a||a.layoutMode===`NONE`)return;let o=e.graph.getNode(n);if(!o)return;let s=o.parentId??e.state.currentPageId,c=o.x,l=o.y,u=e.graph.getNode(s)?.childIds.indexOf(n)??-1;t(n,r,i),e.undo.push({label:`Reorder`,forward:()=>{t(n,r,i)},inverse:()=>{e.graph.reorderChild(n,s,u>=0?u:0),e.graph.updateNode(n,{x:c,y:l}),St(e.graph,s),e.runLayoutForNode(s),s!==r&&(St(e.graph,r),e.runLayoutForNode(r))}})}function r(t,n,r){let i=e.graph.getNode(t);if(!i)return;let a=i.parentId??e.state.currentPageId,o=e.graph.getNode(a)?.childIds.indexOf(t)??0,s=i.x,c=i.y;e.graph.reorderChild(t,n,r),e.runLayoutForNode(n),a!==n&&e.runLayoutForNode(a),e.undo.push({label:`Reorder`,forward:()=>{e.graph.reorderChild(t,n,r),e.runLayoutForNode(n),a!==n&&e.runLayoutForNode(a)},inverse:()=>{e.graph.reorderChild(t,a,o),e.graph.updateNode(t,{x:s,y:c}),e.runLayoutForNode(a),a!==n&&e.runLayoutForNode(n)}})}function i(t,n){let r=e.graph.getNode(t)?.childIds??[];for(let[i,a]of n.entries())r[i]!==a&&e.graph.insertChildAt(a,t,i);e.runLayoutForNode(t),e.requestRender()}function a(t,n){let r=e.state.selectedIds,a=new Set;for(let t of r){let n=e.graph.getNode(t)?.parentId;n&&a.add(n)}let o=new Map,s=new Map;for(let t of a){let a=e.graph.getNode(t)?.childIds;if(!a)continue;let c=n(a,r);c.every((e,t)=>e===a[t])||(o.set(t,[...a]),s.set(t,c),i(t,c))}s.size!==0&&e.undo.push({label:t,forward:()=>{for(let[e,t]of s)i(e,t)},inverse:()=>{for(let[e,t]of o)i(e,t)}})}function o(e,t,n){let r=[...e],i=n===`forward`?r.length-2:1,a=n===`forward`?-1:r.length,o=n===`forward`?-1:1;for(let e=i;e!==a;e+=o){let n=e-o,i=r[e],a=r[n];i&&a&&t.has(i)&&!t.has(a)&&(r[e]=a,r[n]=i)}return r}function s(){a(`Bring forward`,(e,t)=>o(e,t,`forward`))}function c(){a(`Send backward`,(e,t)=>o(e,t,`backward`))}function l(){a(`Bring to front`,(e,t)=>[...e.filter(e=>!t.has(e)),...e.filter(e=>t.has(e))])}function u(){a(`Send to back`,(e,t)=>[...e.filter(e=>t.has(e)),...e.filter(e=>!t.has(e))])}return{reorderInAutoLayout:n,reorderChildWithUndo:r,bringForward:s,sendBackward:c,bringToFront:l,sendToBack:u}}function Tv(e){function t(t){let n=e.graph.getNode(t);n&&(e.graph.updateNode(t,{visible:!n.visible}),n.parentId&&e.runLayoutForNode(n.parentId))}function n(t){let n=e.graph.getNode(t);n&&e.graph.updateNode(t,{locked:!n.locked})}function r(){for(let n of e.state.selectedIds)t(n)}function i(){for(let t of e.state.selectedIds)n(t)}return{toggleNodeVisibility:t,toggleNodeLock:n,toggleVisibility:r,toggleLock:i}}function Ev(e){let t=wv(e),n=Tv(e);function r(t){return!t||t===e.graph.rootId||t===e.state.currentPageId}function i(t,n){let r=e.graph.getNode(n);for(let i of t)e.graph.getNode(i)?.type===`SECTION`&&r&&r.type!==`CANVAS`&&r.type!==`SECTION`||e.graph.reparentNode(i,n)}function a(t,n,i){return _v(e,r,t,n,i)}function o(t){fv(e,r,t)}function s(e){return a(`GROUP`,e)}function c(e){return a(`FRAME`,e,{fills:[structuredClone(ye)]})}function l(t,n){return hv(e,r,t,n)}function u(t){bv(e,t)}function d(t){return vv(e,t)}function f(t){return t.length===0||t.some(e=>e.type!==`TEXT`)?null:vv(e,t,{label:`Outline text`})}function p(t){return yv(e,t)}function m(t){if(e.graph.getNode(t)?.type!==`CANVAS`)return;let n=[...e.state.selectedIds];for(let r of n)e.graph.reparentNode(r,t);e.setSelectedIds(new Set)}function h(){return[...e.state.selectedIds].map(t=>e.graph.getNode(t)).filter(e=>e!=null)}function g(e){return Cv(h(),e)}function _(t){let n=h();if(n.length===0)return;let r=new Map(n.map(e=>[e.id,e.name])),i=Cv(n,t);if(i.error)return;let a=t=>{for(let[n,r]of t)e.graph.updateNode(n,{name:r})};a(i.names),e.undo.push({label:`Rename selection`,forward:()=>a(i.names),inverse:()=>a(r)})}function v(t,n){let r=e.graph.getNode(t);if(!r)return;let i=n.trim();e.graph.updateNode(t,{name:i||xv(r.type)})}return{isTopLevel:r,...t,reparentNodes:i,wrapSelectionInContainer:a,wrapInAutoLayout:o,groupSelected:s,frameSelection:c,booleanOperationSelected:l,ungroupSelected:u,flattenSelected:d,outlineTextSelected:f,outlineStrokeSelected:p,...n,moveToPage:m,previewRenameSelected:g,renameSelected:_,renameNode:v}}function Dv(e){return{nodeId:e.id,before:{text:e.text,styleRuns:ue(e.styleRuns),size:{width:e.width,height:e.height}}}}function Ov(e,t=``){return{text:e?.text??t,styleRuns:e?ue(e.styleRuns):[],size:e?{width:e.width,height:e.height}:void 0}}function kv(e,t){if(!e||!t)return{};let n={};if(e.textAutoResize===`WIDTH_AND_HEIGHT`){let r=Math.ceil(t.getLongestLine());r>0&&r!==e.width&&(n.width=r)}if(e.textAutoResize===`HEIGHT`||e.textAutoResize===`WIDTH_AND_HEIGHT`){let r=Math.ceil(t.getHeight());r>0&&r!==e.height&&(n.height=r)}return n}function Av(e,t){return e.text!==t.text||!Mv(e.styleRuns,t.styleRuns)||t.size!==void 0&&!jv(e.size??{},t.size)}function jv(e,t){return e.width===t.width&&e.height===t.height}function Mv(e,t){return e.length===t.length?e.every((e,n)=>Nv(e,t[n])):!1}function Nv(e,t){return e.start===t.start&&e.length===t.length&&Pv(e.style,t.style)}function Pv(e,t){return e.fontWeight===t.fontWeight&&e.italic===t.italic&&e.textDecoration===t.textDecoration&&e.fontSize===t.fontSize&&e.fontFamily===t.fontFamily&&e.letterSpacing===t.letterSpacing&&e.lineHeight===t.lineHeight&&Fv(e.fills??[],t.fills??[])}function Fv(e,t){return e.length===t.length?e.every((e,n)=>fe(e,t[n])):!1}function Iv(e,t){let n=[],r=e.graph.getNode(t);for(;r?.parentId;)r=e.graph.getNode(r.parentId),r?.type===`INSTANCE`&&n.push(r.id);return n}function Lv(e,t){return t.flatMap(t=>{let n=e.graph.getNode(t);return n?.type===`INSTANCE`?[{instanceId:t,overrides:structuredClone(n.overrides)}]:[]})}function Rv(e,t){for(let n of t)e.graph.updateNode(n.instanceId,{overrides:structuredClone(n.overrides)})}function zv(e,t,n,r){for(let i of t){let t=e.graph.getNode(i);t?.type===`INSTANCE`&&e.graph.updateNode(i,{overrides:{...t.overrides,[`${n}:text`]:r}})}}function Bv(e){let t=null;function n(n){let i=e.getTextEditor();e.state.editingTextId&&r();let a=e.graph.getNode(n);a&&(t=Dv(a),e.state.editingTextId=n,i&&(i.setRenderer(e.getRenderer()),i.start(a)),e.requestRender())}function r(){let n=e.getTextEditor();if(!n?.isActive){e.state.editingTextId=null,t=null;return}let r=n.state;if(!r){n.stop(),e.state.editingTextId=null,t=null,e.requestRender();return}let i={nodeId:r.nodeId,text:r.text},a=t?.before??{text:``,styleRuns:[],size:{}},o=e.graph.getNode(i.nodeId),s=Ov(o,i.text);s.text=i.text;let c=a.text===s.text?{}:kv(o,r.paragraph);Object.keys(c).length>0&&(s.size=c);let l=Av(a,s),u=Iv(e,i.nodeId),d=Lv(e,u);if(n.stop(),!l){e.state.editingTextId=null,t=null,e.requestRender();return}e.graph.updateNode(i.nodeId,{text:s.text,styleRuns:s.styleRuns,...c}),a.text!==s.text&&zv(e,u,i.nodeId,s.text);let f=Lv(e,u);e.state.editingTextId=null,t=null,e.undo.push({label:`Edit text`,forward:()=>{e.graph.updateNode(i.nodeId,{text:s.text,styleRuns:s.styleRuns,...s.size}),Rv(e,f)},inverse:()=>{e.graph.updateNode(i.nodeId,{text:a.text,styleRuns:a.styleRuns,...a.size}),Rv(e,d)}})}return{startTextEditing:n,commitTextEdit:r}}function Vv(e,t){let n=new Map,r=t=>{let i=e.getNode(t);if(i){n.set(t,structuredClone(i));for(let e of i.childIds)r(e)}};return r(t),n}function Hv(e,t){let n=e.state.currentPageId,r=e.graph.getNode(n),i=t.get(n);if(!(!r||!i)){for(let t of r.childIds.slice())e.graph.deleteNode(t);Uv(e.graph,t,n,i.childIds),e.graph.clearAbsPosCache(),wt(e.graph,n),e.setSelectedIds(new Set),e.state.hoveredNodeId=null,e.requestRender()}}function Uv(e,t,n,r){for(let i of r){let a=t.get(i);if(!a)continue;let{parentId:o,childIds:s,...c}=a;e.createNode(a.type,n,{...c,childIds:[]}),e.reorderChild(a.id,n,r.indexOf(i)),Uv(e,t,a.id,s)}}function Wv(e){return{x:e.x,y:e.y,width:e.width,height:e.height,vectorNetwork:e.vectorNetwork?N(e.vectorNetwork):null,fillGeometry:k(e.fillGeometry),strokeGeometry:k(e.strokeGeometry)}}function Gv(e){function t(t){kd(e,`Move`,t,Od(e,t.keys()))}function n(t){let n=new Map;for(let[r]of t){let t=e.graph.getNode(r);t&&n.set(r,{x:t.x,y:t.y,parentId:t.parentId??e.state.currentPageId})}e.undo.push({label:`Move`,forward:()=>{for(let[t,r]of n)e.graph.reparentNode(t,r.parentId),e.graph.updateNode(t,{x:r.x,y:r.y}),e.runLayoutForNode(t)},inverse:()=>{for(let[n,r]of t)e.graph.reparentNode(n,r.parentId),e.graph.updateNode(n,{x:r.x,y:r.y}),e.runLayoutForNode(n)}})}function r(t,n){let r=new Map;for(let n of t){let t=kg(e.graph,n);for(let[e,n]of t)r.set(e,n)}let i=new Set(t);e.undo.push({label:`Duplicate`,forward:()=>{for(let n of t){if(e.graph.getNode(n))continue;let t=r.get(n);t&&(Ag(e.graph,t,t.parentId??e.state.currentPageId,r),e.runLayoutForNode(n))}e.setSelectedIds(new Set(i))},inverse:()=>{for(let n of t.toReversed())e.graph.deleteNode(n);e.setSelectedIds(new Set(n))}})}function i(t,n){let r=e.graph.getNode(t);if(!r)return;let i=`vectorNetwork`in n||`fillGeometry`in n||`strokeGeometry`in n?Wv(r):{x:r.x,y:r.y,width:r.width,height:r.height};e.undo.push({label:`Resize`,forward:()=>{e.graph.updateNode(t,i),e.runLayoutForNode(t)},inverse:()=>{e.graph.updateNode(t,n),e.runLayoutForNode(t)}})}function a(t,n,r){let i=e.graph.getNode(t);if(!i)return;let a={x:i.x,y:i.y,width:i.width,height:i.height},o=new Map;for(let[t]of r){let n=e.graph.getNode(t);n&&o.set(t,Wv(n))}e.undo.push({label:`Resize`,forward:()=>{e.graph.updateNode(t,a);for(let[t,n]of o)e.graph.updateNode(t,n);e.runLayoutForNode(t)},inverse:()=>{e.graph.updateNode(t,n);for(let[t,n]of r)e.graph.updateNode(t,n);e.runLayoutForNode(t)}})}function o(t,n){let r=e.graph.getNode(t);if(!r)return;let i=r.rotation;e.undo.push({label:`Rotate`,forward:()=>{e.graph.updateNode(t,{rotation:i})},inverse:()=>{e.graph.updateNode(t,{rotation:n})}})}function s(t,n,r=`Update`){let i=e.graph.getNode(t);if(!i)return;let a={...n,...D_(i,n)},o=Jt(i,Object.keys(a));e.undo.push({label:r,forward:()=>{e.graph.updateNode(t,o),e.runLayoutForNode(t)},inverse:()=>{e.graph.updateNode(t,a),e.runLayoutForNode(t)}})}function c(t){e.undo.undo(),t(),e.requestRender()}function l(t){e.undo.redo(),t(),e.requestRender()}function u(){return Vv(e.graph,e.state.currentPageId)}function d(t){Hv(e,t)}function f(t){e.undo.push(t)}return{commitMove:t,commitMoveWithReparent:n,commitDuplicateMove:r,commitResize:i,commitGroupResize:a,commitRotation:o,commitNodeUpdate:s,undoAction:c,redoAction:l,snapshotPage:u,restorePageFromSnapshot:d,pushUndoEntry:f}}function Kv(e){function t(t){return e.graph.getVariablesByType(t)}function n(t){return e.graph.variables.get(t)}function r(t){return e.graph.resolveColorVariable(t)}function i(t){return e.graph.resolveNumberVariable(t)}function a(t){return e.graph.getVariablesForCollection(t)}function o(t){return e.graph.variableCollections.get(t)}function s(){return[...e.graph.variableCollections.values()]}function c(){return e.graph.variableCollections.size}function l(){return e.graph.variables.size}function u(t,n){let r=e.graph.variableCollections.get(t);if(!r)return;let i=r.name;r.name=n,e.undo.push({label:`Rename collection`,forward:()=>{let r=e.graph.variableCollections.get(t);r&&(r.name=n),e.requestRender()},inverse:()=>{let n=e.graph.variableCollections.get(t);n&&(n.name=i),e.requestRender()}}),e.requestRender()}function d(t){e.graph.addCollection(t),e.undo.push({label:`Add collection`,forward:()=>{e.graph.addCollection(t),e.requestRender()},inverse:()=>{e.graph.removeCollection(t.id),e.requestRender()}}),e.requestRender()}function f(t){let n=e.graph.variableCollections.get(t);if(!n)return;let r=structuredClone(n),i=r.variableIds.map(t=>e.graph.variables.get(t)).filter(e=>e!=null).map(e=>structuredClone(e));e.graph.removeCollection(t),e.undo.push({label:`Remove collection`,forward:()=>{e.graph.removeCollection(t),e.requestRender()},inverse:()=>{e.graph.addCollection(r);for(let t of i)e.graph.addVariable(t);e.requestRender()}}),e.requestRender()}function p(t){e.graph.addVariable(t),e.undo.push({label:`Add variable`,forward:()=>{e.graph.addVariable(t),e.requestRender()},inverse:()=>{e.graph.removeVariable(t.id),e.requestRender()}}),e.requestRender()}function m(t){let n=e.graph.variables.get(t);if(!n)return;let r=structuredClone(n);e.graph.removeVariable(t),e.undo.push({label:`Remove variable`,forward:()=>{e.graph.removeVariable(t),e.requestRender()},inverse:()=>{e.graph.addVariable(r),e.requestRender()}}),e.requestRender()}function h(t,n){let r=e.graph.variables.get(t);if(!r)return;let i=r.name;r.name=n,e.undo.push({label:`Rename variable`,forward:()=>{let r=e.graph.variables.get(t);r&&(r.name=n),e.requestRender()},inverse:()=>{let n=e.graph.variables.get(t);n&&(n.name=i),e.requestRender()}}),e.requestRender()}function g(t,n){let r=e.graph.variableCollections.get(t);if(!r)return;let i=`mode:${yt(8)}`,a=n??`Mode ${r.modes.length+1}`;return e.graph.addMode(t,i,a),e.undo.push({label:`Add mode`,forward:()=>{e.graph.addMode(t,i,a),e.requestRender()},inverse:()=>{e.graph.removeMode(t,i),e.requestRender()}}),e.requestRender(),i}function _(t,n){let r=e.graph.variableCollections.get(t);if(!r||r.modes.length<=1)return;let i=r.modes.findIndex(e=>e.modeId===n),a=r.modes[i]?.name??``,o=r.defaultModeId===n,s=new Map;for(let t of r.variableIds){let r=e.graph.variables.get(t);r?.valuesByMode[n]!==void 0&&s.set(t,structuredClone(r.valuesByMode[n]))}e.graph.removeMode(t,n),e.undo.push({label:`Remove mode`,forward:()=>{e.graph.removeMode(t,n),e.requestRender()},inverse:()=>{e.graph.addMode(t,n,a);let r=e.graph.variableCollections.get(t);if(r&&i!==-1){let e=r.modes.pop();e&&r.modes.splice(i,0,e)}for(let[t,r]of s){let i=e.graph.variables.get(t);i&&(i.valuesByMode[n]=structuredClone(r))}o&&e.graph.setDefaultMode(t,n),e.requestRender()}}),e.requestRender()}function v(t,n,r){let i=e.graph.variableCollections.get(t);if(!i)return;let a=i.modes.find(e=>e.modeId===n);if(!a)return;let o=a.name;e.graph.renameMode(t,n,r),e.undo.push({label:`Rename mode`,forward:()=>{e.graph.renameMode(t,n,r),e.requestRender()},inverse:()=>{e.graph.renameMode(t,n,o),e.requestRender()}}),e.requestRender()}function y(t,n){let r=e.graph.variableCollections.get(t);if(!r)return;let i=r.defaultModeId;e.graph.setDefaultMode(t,n),e.undo.push({label:`Set default mode`,forward:()=>{e.graph.setDefaultMode(t,n),e.requestRender()},inverse:()=>{e.graph.setDefaultMode(t,i),e.requestRender()}}),e.requestRender()}function b(t,n){let r=e.graph.variableCollections.get(t);if(!r)return;let i=r.modes.find(e=>e.modeId===n);if(!i)return;let a=`mode:${yt(8)}`,o=`${i.name} copy`;return e.graph.addMode(t,a,o,n),e.undo.push({label:`Duplicate mode`,forward:()=>{e.graph.addMode(t,a,o,n),e.requestRender()},inverse:()=>{e.graph.removeMode(t,a),e.requestRender()}}),e.requestRender(),a}function x(t,n){e.graph.setActiveMode(t,n),e.requestRender()}function S(t,n,r){let i=e.graph.variables.get(t);if(!i)return;let a=structuredClone(i.valuesByMode[n]),o=structuredClone(r);i.valuesByMode[n]=o,e.undo.push({label:`Update variable value`,forward:()=>{let r=e.graph.variables.get(t);r&&(r.valuesByMode[n]=structuredClone(o)),e.requestRender()},inverse:()=>{let r=e.graph.variables.get(t);r&&(r.valuesByMode[n]=structuredClone(a)),e.requestRender()}}),e.requestRender()}return{getVariablesByType:t,getVariable:n,resolveColorVariable:r,resolveNumberVariable:i,getVariablesForCollection:a,getCollection:o,getCollections:s,getCollectionCount:c,getVariableCount:l,renameCollection:u,addCollection:d,removeCollection:f,addVariable:p,removeVariable:m,renameVariable:h,updateVariableValue:S,addMode:g,removeMode:_,renameMode:v,setDefaultMode:y,duplicateMode:b,setActiveMode:x}}function qv(e){return e.independentCorners?[e.topLeftRadius,e.topRightRadius,e.bottomRightRadius,e.bottomLeftRadius].some(e=>e>0):e.cornerRadius>0}function Jv(e){return{name:e.name,rotation:e.rotation,flipX:e.flipX,flipY:e.flipY,opacity:e.opacity,visible:e.visible,locked:e.locked,blendMode:e.blendMode,effects:y(e.effects),strokes:T(e.strokes),strokeStyleId:e.strokeStyleId,strokeCap:e.strokeCap,strokeJoin:e.strokeJoin,strokeMiterLimit:e.strokeMiterLimit,dashPattern:[...e.dashPattern],cornerRadius:e.cornerRadius,topLeftRadius:e.topLeftRadius,topRightRadius:e.topRightRadius,bottomRightRadius:e.bottomRightRadius,bottomLeftRadius:e.bottomLeftRadius,independentCorners:e.independentCorners,cornerSmoothing:e.cornerSmoothing,clipsContent:e.clipsContent||qv(e),horizontalConstraint:e.horizontalConstraint,verticalConstraint:e.verticalConstraint,layoutPositioning:e.layoutPositioning,layoutGrow:e.layoutGrow,layoutAlignSelf:e.layoutAlignSelf,minWidth:e.minWidth,maxWidth:e.maxWidth,minHeight:e.minHeight,maxHeight:e.maxHeight,isMask:e.isMask,maskType:e.maskType,maskIsOutline:e.maskIsOutline}}function Yv(e){function t(t,n){let r=e.graph.getNode(t),i=r?.parentId,a=i?e.graph.getNode(i):null;if(!r||!i||!a)return null;let o=a.childIds.indexOf(r.id);if(o===-1)return null;let s=Ot(r,n.contentBounds),c=kg(e.graph,r.id),l=new Set(e.state.selectedIds),u=e.graph.createNode(`FRAME`,i,{...Jv(r),x:s.x,y:s.y,width:s.width,height:s.height,fills:[]});if(e.graph.insertChildAt(u.id,i,o),Et(e.graph,u.id,n,s),u.childIds.length===0)return e.graph.deleteNode(u.id),null;let d=kg(e.graph,u.id);return e.graph.deleteNode(r.id),e.setSelectedIds(new Set([u.id])),e.undo.push({label:`Vectorize image`,forward:()=>{e.graph.getNode(r.id)&&e.graph.deleteNode(r.id);let t=d.get(u.id);t&&!e.graph.getNode(u.id)&&(Ag(e.graph,t,i,d),e.graph.insertChildAt(u.id,i,o)),e.setSelectedIds(new Set([u.id])),e.requestRender()},inverse:()=>{e.graph.getNode(u.id)&&e.graph.deleteNode(u.id);let t=c.get(r.id);t&&!e.graph.getNode(r.id)&&(Ag(e.graph,t,i,c),e.graph.insertChildAt(r.id,i,o)),e.setSelectedIds(l),e.requestRender()}}),e.requestRender(),u.id}return{replaceNodeWithVectorFrame:t}}function Xv(e){function t(){return{panX:e.state.panX,panY:e.state.panY,zoom:e.state.zoom}}function n(n){let r=t();(r.panX!==n.panX||r.panY!==n.panY||r.zoom!==n.zoom)&&e.emitEditorEvent(`viewport:changed`,r,n)}function r(t,n){return{x:(t-e.state.panX)/e.state.zoom,y:(n-e.state.panY)/e.state.zoom}}function i(r,i,a){let o=t(),s=Math.max(.02,Math.min(256,r));e.state.panX=i-(i-e.state.panX)*(s/e.state.zoom),e.state.panY=a-(a-e.state.panY)*(s/e.state.zoom),e.state.zoom=s,e.requestRepaint(),n(o)}function a(t,n,r){let a=Math.min(Ee,Math.max(Te,Math.exp(-t/50)));i(e.state.zoom*a,n,r)}function o(r,i){let a=t();e.state.panX+=r,e.state.panY+=i,e.requestRepaint(),n(a)}function s(r,i,a,o){let s=t(),c=a-r+160,l=o-i+160,{width:u,height:d}=e.getViewportSize(),f=Math.min(u/c,d/l,1);e.state.zoom=f,e.state.panX=(u-c*f)/2-r*f+80*f,e.state.panY=(d-l*f)/2-i*f+80*f,e.requestRepaint(),n(s)}function c(){let t=e.graph.getChildren(e.state.currentPageId);if(t.length===0)return;let n=E(t);s(n.x,n.y,n.x+n.width,n.y+n.height)}function l(r){let{width:i,height:a}=e.getViewportSize(),o=(-e.state.panX+i/2)/e.state.zoom,s=(-e.state.panY+a/2)/e.state.zoom,c=t();e.state.zoom=Math.max(.02,Math.min(256,r)),e.state.panX=i/2-o,e.state.panY=a/2-s,e.requestRepaint(),n(c)}function u(){l(1)}function d(){if(e.state.selectedIds.size===0)return;let t=[...e.state.selectedIds].map(t=>e.graph.getNode(t)).filter(e=>e!=null);if(t.length===0)return;let n=x(t,t=>e.graph.getAbsolutePosition(t));s(n.x,n.y,n.x+n.width,n.y+n.height)}return{screenToCanvas:r,setZoomAroundPoint:i,applyZoom:a,pan:o,zoomToBounds:s,zoomToFit:c,zoomTo100:u,zoomToLevel:l,zoomToSelection:d}}function Zv(e){let t=e?.graph??new me,n=e?.skipInitialGraphSetup??!1,r=new ie,i=e?.loadFont??p.loadFont.bind(p),a=e?.getViewportSize??(()=>Se?{width:window.innerWidth,height:window.innerHeight}:{width:800,height:600}),o=null,s=null,c=new Set,l=null,u=de();_d();let d=e?.state??dv(t.getPages()[0].id);function f(e,...t){u.emit(e,...t)}function m(e,t){return u.on(e,t)}function h(){d.renderVersion++,d.sceneVersion++,f(`render:requested`,{renderVersion:d.renderVersion,sceneVersion:d.sceneVersion})}function g(){d.renderVersion++,f(`repaint:requested`,{renderVersion:d.renderVersion,sceneVersion:d.sceneVersion})}function _(e){let t=[...d.selectedIds];d.selectedIds=e;let n=[...e];(t.length!==n.length||t.some((e,t)=>e!==n[t]))&&f(`selection:changed`,n,t)}function v(e){let t=d.activeTool;d.activeTool=e,t!==e&&f(`tool:changed`,e,t)}let y=p_(()=>t),{runLayoutForNode:b}=m_(()=>t),{scheduleComponentSync:x}=Ug(()=>t,h),{subscribeToGraph:S}=f_({getGraph:()=>t,getRenderers:()=>c,scheduleComponentSync:x,requestRender:h,emitEditorEvent:f});n||S();let C={get graph(){return t},set graph(e){t=e},undo:r,state:d,loadFont:i,resolveFigmaClipboardImages:e?.resolveFigmaClipboardImages??null,getViewportSize:a,getCk:()=>o,getRenderer:()=>s,getTextEditor:()=>l,requestRender:h,requestRepaint:g,emitEditorEvent:f,setSelectedIds:_,setActiveTool:v,runLayoutForNode:b,subscribeToGraph:S},w=Xv(C),T=ev(C),E=Y_(C),D=uv(C),O=Ev(C),k=s_(C),A=zg(C),j=Hg(C),M=Gv(C),N=Bv(C),P=A_(C),F=Kv(C),ee=Yv(C),te=Ld(C),ne=Rd(A,T),I=zd(k,T,O,E),re=Bd(O,T),L=Vd(M,T);function ae(e,t){o=e,s=t,c.add(t),l??=new Kt(e),bt(typeof t.measureTextNode==`function`?(e,n)=>t.measureTextNode(e,n):null)}function R(e){c.delete(e),s===e&&(s=c.values().next().value??null)}function oe(e){t=e,S();let n=d.currentPageId;d.currentPageId=t.getPages()[0]?.id??t.rootId,_(new Set),d.hoveredNodeId=null,E.clearPageViewports(),f(`graph:replaced`,t),n!==d.currentPageId&&f(`page:changed`,d.currentPageId,n),h()}return{get graph(){return t},get renderer(){return s},get canvasRenderers(){return[...c]},get textEditor(){return l},undo:r,state:d,...y,requestRender:h,requestRepaint:g,onEditorEvent:m,setCanvasKit:ae,removeCanvasRenderer:R,replaceGraph:oe,subscribeToGraph:S,...T,...E,...D,...O,...P,...te,...ee,...F,...N,...w,...L,setDocumentColorSpace:j.setDocumentColorSpace,...ne,...I,...re}}var Qv=[],$v=0,ey=4,ty=0,ny=e=>{let t=[],n={get(){return n.lc||n.listen(()=>{})(),n.value},init:e,lc:0,listen(e){return n.lc=t.push(e),()=>{for(let t=$v+ey;t<Qv.length;)Qv[t]===e?Qv.splice(t,ey):t+=ey;let r=t.indexOf(e);~r&&(t.splice(r,1),--n.lc||n.off())}},notify(e,r){ty++;let i=!Qv.length;for(let i of t)Qv.push(i,n.value,e,r);if(i){for($v=0;$v<Qv.length;$v+=ey)Qv[$v](Qv[$v+1],Qv[$v+2],Qv[$v+3]);Qv.length=0}},off(){},set(e){let t=n.value;t!==e&&(n.value=e,n.notify(t))},subscribe(e){let t=n.listen(e);return e(n.value),t},value:e};return n},ry=0,iy=5,ay=6,oy=10,sy=(e,t,n,r)=>(e.events=e.events||{},e.events[n+oy]||(e.events[n+oy]=r(t=>{e.events[n].reduceRight((e,t)=>(t(e),e),{shared:{},...t})})),e.events[n]=e.events[n]||[],e.events[n].push(t),()=>{let r=e.events[n],i=r.indexOf(t);r.splice(i,1),r.length||(delete e.events[n],e.events[n+oy](),delete e.events[n+oy])}),cy=(e,t)=>sy(e,t,ry,t=>{let n=e.listen;return e.listen=r=>(!e.lc&&!e.starting&&(e.starting=!0,t(),delete e.starting),n(r)),()=>{e.listen=n}}),ly=1e3,uy=(e,t)=>sy(e,n=>{let r=t(n);r&&e.events[ay].push(r)},iy,t=>{let n=e.listen;e.listen=(...r)=>(!e.lc&&!e.active&&(e.active=!0,t()),n(...r));let r=e.off;return e.events[ay]=[],e.off=()=>{r(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let t of e.events[ay])t();e.events[ay]=[]}},ly)},()=>{e.listen=n,e.off=r}});function dy(e,t){if(typeof e==`string`)return t(e);{let n={};for(let r in e)n[r]=dy(e[r],t);return n}}function fy(e){return t=>{if(t.transform){let n=t.transform;return t=t.input,{input:t,transform(t,r,i){let a=e(t,r,...i);return(...e)=>n(t,a,e)}}}else return{input:t,transform(t,n,r){return e(t,n,...r)}}}}function py(e,t){let n=t.baseLocale||`en`,r=t.processors||[],i=t.preprocessors||[],a=[],o=new Set,s=new Set;async function c(n,r){let a=[],c=[];for(let e of r){let t=e.split(`/`)[0];o.has(t)||(a.push(e),c.push(t))}if(a.length===0)return;l.loading.set(!0);for(let e of c)o.add(e);let u=await t.get(n,a);Array.isArray(u)&&(u=u.reduce((e,t)=>Object.assign(e,t)));for(let e of i)u=e(u);l.cache[n]={...l.cache[n],...u};for(let e in u){let t=e.split(`/`)[0];o.delete(t)}n===e.get()&&o.size===0&&(s.forEach(e=>e(n)),l.loading.set(!1))}function l(t,o){let u={},d={};for(let e in o)o[e].transform?(u[e]=o[e].transform,d[e]=o[e].input):d[e]=o[e];for(let e of i)d=e(d);let f=ny();l.cache[n][t]=d;function p(e){let r={...l.cache[n][t],...l.cache[e][t]};for(let t in u){let n=u[t],i=r[t];r[t]=(...t)=>n(e,i,t)}f.set(r)}return e.get()!==n&&l.cache[e.get()]?p(e.get()):p(n),uy(f,()=>{a.push(t);let i=e.get();i===n||l.cache[i]&&l.cache[i][t]?p(i):c(i,[t]);for(let e in r)r[e].from.listen(()=>{p(i)});return s.add(p),()=>{a=a.filter(e=>e!==t),s.delete(p)}}),f}return l.cache={...t.cache,[n]:{}},l.loading=ny(!1),e.subscribe(e=>{o.clear();let t=l.cache[e]?a.filter(t=>!l.cache[e][t]):a;t.length?c(e,t):(s.forEach(t=>t(e)),l.loading.set(!1))}),l}function my(...e){let t=ny(),n=Array(e.length);function r(){let i;for(i=0;i<e.length;i++){let a=e[i].get();if(n[i]||(n[i]=e[i].listen(r)),a){t.set(a);for(let t=i+1;t<e.length&&n[t];t++)n[t](),n[t]=void 0;return}}}return uy(t,()=>(r(),()=>{for(let e of n)e();n=Array(e.length)})),t}var hy=fy((e,t,n)=>dy(t,e=>{for(let t in n)e=e.replace(RegExp(`{${t}}`,`g`),n[t]);return e})),gy=[`en`,`de`,`es`,`fr`,`it`,`ja`,`pl`,`ru`,`zh-CN`],_y={en:`English`,de:`Deutsch`,es:`Español`,fr:`Français`,it:`Italiano`,ja:`日本語`,pl:`Polski`,ru:`Русский`,"zh-CN":`中文（简体）`},vy=`open-pencil-locale`,yy=ny(void 0);function by(e){let t=new Map(gy.map(e=>[e.toLowerCase(),e]));for(let n of e){let e=n.toLowerCase(),r=t.get(e);if(r)return r;let i=e.split(`-`)[0],a=t.get(i);if(a)return a}return`en`}var xy=ny(`en`);cy(xy,()=>{if(typeof navigator>`u`)return;let e=Array.isArray(navigator.languages)?navigator.languages:[],t=e.length>0?e:[navigator.language||`en`];xy.set(by(t))});var Sy=my(yy,xy);function Cy(){return typeof localStorage>`u`||typeof localStorage.getItem!=`function`||typeof localStorage.setItem!=`function`?null:localStorage}function wy(e){yy.set(e),Cy()?.setItem(vy,e)}var Ty=Cy()?.getItem(vy);Ty&&gy.includes(Ty)&&yy.set(Ty);var Ey={de:()=>B(()=>import(`./de-dmIHtslH.js`),[]),es:()=>B(()=>import(`./es-CdaJcK8S.js`),[]),fr:()=>B(()=>import(`./fr-CVtREyCU.js`),[]),it:()=>B(()=>import(`./it-zELyo7qE.js`),[]),ja:()=>B(()=>import(`./ja-CmCTAwA9.js`),[]),pl:()=>B(()=>import(`./pl--7u-oJVb.js`),[]),ru:()=>B(()=>import(`./ru-CLV0ZHQn.js`),[]),"zh-CN":()=>B(()=>import(`./zh-cn--CE_g_nj.js`),[])},Dy=py(Sy,{baseLocale:`en`,async get(e){return e===`en`?{}:(await Ey[e]()).default}}),Oy=Dy(`dialogs`,{cancel:`Cancel`,apply:`Apply`,close:`Close`,rename:`Rename`,renameLayers:hy(`Rename {count} layers`),renamePreview:`Preview`,renameMatch:`Match`,renameTo:`Rename to`,renameCurrentName:`Current name`,renameNumberAscending:`Number ↑`,renameNumberDescending:`Number ↓`,renameStartAscendingFrom:`Start ascending from`,renameStopDescendingAt:`Stop descending at`,renameInvalidPattern:`Invalid regular expression`,ok:`OK`,copy:`Copy`,copied:`Copied`,copiedExclamation:`Copied!`,copyMessage:`Copy message`,createCollection:`Create collection`,renameCollection:`Rename collection`,deleteCollection:`Delete collection`,localVariables:`Local variables`,noVariableCollections:`No variable collections`,modes:`Modes`,addMode:`Add mode`,renameMode:`Rename mode`,duplicateMode:`Duplicate mode`,deleteMode:`Delete mode`,setDefaultMode:`Set as default`,selectLayerForJSX:`Select a layer to see its JSX code`,copyJSXReference:`Copy JSX prop reference to clipboard`,newTab:`New tab`,closeTab:hy(`Close {name}`),showUI:hy(`Show UI ({shortcut})`),fontSettings:`Font settings`,fontSettingsDesktopDescription:`Access system fonts, online providers, fallback packs, and cached downloads.`,fontSettingsBrowserDescription:`Allow browser access to local fonts and manage online font providers.`,localFonts:`Local fonts`,onlineFonts:`Online fonts`,downloadedCache:`Downloaded cache`,lastUpdated:`Last updated`,enabled:`Enabled`,disabled:`Disabled`,denied:`Denied`,unavailable:`Unavailable`,notRequested:`Not requested`,never:`Never`,systemFontAccess:`System font access`,systemFontsAvailable:`System fonts are available.`,allowBrowserFontAccess:`Allow browser font access when system fonts are missing.`,allow:`Allow`,requesting:`Requesting…`,onlineFontProviders:`Online font providers`,downloadMissingWebFonts:`Download missing web fonts through enabled providers.`,webFontProvidersRequireDesktopApp:`Online font provider catalogs are unavailable in the web app. Download the desktop app to browse and load provider fonts.`,clipboardImageUnavailableWeb:`Pasted design includes 1 image that cannot be loaded in the web app. Use the desktop app to include it.`,clipboardImagesUnavailableWeb:hy(`Pasted design includes {count} images that cannot be loaded in the web app. Use the desktop app to include them.`),clipboardImageFetchFailed:`Failed to fetch 1 image from Figma. Check that the source file is accessible and try again.`,clipboardImagesFetchFailed:hy(`Failed to fetch {count} images from Figma. Check that the source file is accessible and try again.`),enable:`Enable`,disable:`Disable`,fallbackPacks:`Fallback packs`,downloadFallbackPacksDescription:`Download CJK and Arabic fallbacks before opening files that need them.`,download:`Download`,downloading:`Downloading…`,refresh:`Refresh`,clearCache:`Clear cache`,localFontAccessEnabled:`Local font access enabled.`,localFontAccessNotGranted:`Local font access was not granted.`,onlineFontProvidersEnabled:`Online font providers enabled.`,onlineFontProvidersDisabled:`Online font providers disabled.`,fontProviderEnabled:hy(`Enabled {provider}.`),fontProviderDisabled:hy(`Disabled {provider}.`),fallbackFontsDownloaded:`Fallback fonts downloaded.`,fallbackFontsDownloadFailed:`Could not download fallback fonts.`,downloadedFontCacheCleared:`Downloaded font cache cleared.`,downloadedFontCacheClearFailed:`Could not clear downloaded font cache.`,you:`You`,youSuffix:`you`,followingPeerStop:hy(`Following {name} (click to stop)`),clickToFollowPeer:hy(`Click to follow {name}`),connectAIProvider:`Connect an AI provider to start chatting.`,connect:`Connect`,testConnection:`Test connection`,testingConnection:`Testing…`,connectionTestSuccess:`Connected successfully. Model is reachable.`,connectionTestMissingAPIKey:`Enter an API key before testing.`,connectionTestMissingBaseURL:`Enter a base URL before testing.`,connectionTestMissingModel:`Enter a model ID before testing.`,connectionTestInvalidBaseURL:`Base URL is invalid. Use a full URL like https://api.example.com/v1.`,connectionTestAuthFailed:`Authentication failed. Check your API key.`,connectionTestModelNotFound:`Model not found. Check the model ID.`,connectionTestAPITypeMismatch:`This endpoint does not appear to support the selected API type. Try Completions or Responses.`,connectionTestBrowserNetworkFailed:`Could not reach this endpoint from the browser. Try the desktop app or use an endpoint with CORS enabled.`,connectionTestNetworkFailed:`Could not reach the endpoint. Check the URL and your network connection.`,connectionTestUnknownFailed:`Connection test failed. Check the provider settings and try again.`,getAPIKey:hy(`Get an {provider} API key →`),oneKeyManyModels:`One key for 100+ models from all providers.`,describeChange:`Describe a change…`,describeCreateOrChange:`Describe what you want to create or change.`,stopGenerating:`Stop generating`,sendMessage:`Send message`,baseURLPlaceholder:`Base URL (e.g. http://localhost:11434/v1)`,modelIDPlaceholder:`Model ID (e.g. llama-3.3-70b)`,aiProvider:`AI Provider`,providerSettings:`Provider settings`,openProviderSettings:`Open provider settings`,settings:`Settings`,settingsDescription:`Manage integrations and app preferences.`,settingsAIAndAgents:`AI & agents`,models:`Models`,modelsDescription:`Configure reusable models and their provider connections.`,addModel:`Add model`,editModel:`Edit model`,modelEditorDescription:`Provider, model, credentials, and capabilities.`,modelName:`Name`,modelConfiguration:`Model`,connectionSettings:`Connection`,modelCapabilities:`Capabilities`,modelCapabilitiesDetected:`Detected from the selected model.`,modelCapabilitiesManual:`Declare compatibility for this custom model.`,modelCapabilityTools:`Tool calling`,modelCapabilityVision:`Image input`,modelCapabilityToolsShort:`Tools`,modelCapabilityVisionShort:`Vision`,selectDesignModel:`Select design model`,modelNeedsCredential:`Needs key`,modelAgentConnection:`Agent`,saveModel:`Save model`,deleteModel:`Delete model`,deleteModelDescription:`Delete this model and remove its role assignments?`,modelAssignments:`Assignments`,modelAssignmentsDescription:`Choose which configured model handles each type of work.`,modelRoleDesign:`Design agent`,modelRoleReview:`Review`,modelRoleFast:`Fast tasks`,modelRoleVision:`Vision`,modelRoleDesignDescription:`AI chat and canvas edits`,modelRoleReviewDescription:`Explicit plan and design reviews`,modelRoleFastDescription:`Low-cost background work`,modelRoleVisionDescription:`Screenshots and image references`,modelRoleUseDesign:`Same as Design`,noModel:`None`,back:`Back`,settingsMedia:`Media`,vectorization:`Image vectorization`,vectorizationDescription:`Send image layers to Recraft or fal.ai and return editable vectors. Provider charges may apply.`,vectorizeProvider:`Vectorization service`,settingsStorage:`Cloud storage`,storageWorkspace:`Storage workspace`,openStorageWorkspace:`Open workspace`,newStoredDocument:`New document`,emptyStorageWorkspace:`No stored documents yet.`,loadingDocuments:`Loading documents…`,storageNotConfigured:`Configure storage before using this workspace.`,copyStorageCors:`Copy CORS JSON`,storageEndpoint:`Endpoint`,storageBucket:`Bucket`,storageRegion:`Region`,storageAccessKeyID:`Access key ID`,storageSecretAccessKey:`Secret access key`,save:`Save`,credentialStorage:hy(`Credentials: {backend}`),credentialBackendNative:`system credential store`,credentialBackendBrowser:`encrypted browser storage`,credentialBackendMemory:`this session only`,rememberCredentials:`Remember credentials on this browser`,done:`Done`,apiKey:`API Key`,apiType:`API Type`,baseURL:`Base URL`,modelID:`Model ID`,customModelID:`Custom model ID`,customModel:`Custom model…`,advancedModelSettings:`Advanced settings`,outputLimit:`Output limit`,outputLimitAutomatic:`Automatic recommendation`,supported:`Supported`,unsupported:`Not supported`,tokens:`tokens`,maxOutputTokens:`Max output tokens`,clear:`Clear`,keySavedReplace:`Key saved — enter new to replace`,getAPIKeyGeneric:`Get API key →`,pexelsAPIKey:`Pexels API Key (stock photos)`,unsplashAccessKey:`Unsplash Access Key`,stockPhotoToolOptional:`Optional — for stock_photo tool`,pexelsAlternativeOptional:`Optional — alternative to Pexels`,getPexelsAPIKey:`Get free Pexels API key →`,getUnsplashAccessKey:`Get free Unsplash access key →`,completions:`Completions`,responses:`Responses`,yourName:`Your name`,enterYourName:`Enter your name`,shareThisFile:`Share this file`,joinRoom:`Join room`,join:`Join`,roomLink:`Room link`,joinCollaboration:`Join collaboration`,orJoinRoom:`or join a room`,pasteRoomLinkOrId:`Paste room link or ID`,connected:`Connected`,search:`Search…`,noResults:`No results`,share:`Share`,appUpToDate:`OpenPencil is up to date`,updateAvailableTitle:`Update OpenPencil`,updateAvailable:hy(`OpenPencil {version} is available.`),updateInstallPrompt:`Download and install it now? The app will restart after the update is installed.`,downloadingUpdate:hy(`Downloading OpenPencil {version}`),updateInstalledTitle:`Update installed`,updateInstalled:hy(`OpenPencil {version} was installed{size}. Restarting now.`),updateUnavailable:`Updates are not available yet. Publish a signed release with latest.json first.`,updateCheckFailed:hy(`Could not check for updates: {error}`)}),ky=class{constructor(e){this.adapters=e}listFormats(){return this.adapters}getFormat(e){return this.adapters.find(t=>t.id===e)??null}listReadableFormats(){return this.adapters.filter(e=>e.support.readDocument)}listWritableFormats(){return this.adapters.filter(e=>e.support.writeDocument)}listExportFormats(e){return this.adapters.filter(t=>{switch(e){case`document`:return!!t.support.exportDocument;case`page`:return!!t.support.exportPage;case`selection`:return!!t.support.exportSelection;case`node`:return!!t.support.exportNode;default:return!1}})}findReader(e,t){return this.adapters.find(n=>{if(!n.support.readDocument)return!1;if(n.matchesFile)return n.matchesFile(e,t);let r=e.toLowerCase();return n.extensions.some(e=>r.endsWith(`.${e}`))})??null}async readDocument(e,t){let n=this.findReader(e.name??``,e.mimeType);if(!n?.readDocument)throw Error(`Unsupported document format: ${e.name??`unknown`}`);return n.readDocument(e,t)}async writeDocument(e,t,n,r){let i=this.getFormat(e);if(!i?.writeDocument)throw Error(`Format does not support writeDocument: ${e}`);return i.writeDocument(t,n,r)}async exportContent(e,t,n,r){let i=this.getFormat(e);if(!i?.exportContent)throw Error(`Format does not support exportContent: ${e}`);return i.exportContent(t,n,r)}},Ay=ct(`rgb`);function jy(e){let t=ht(e),n=t?Ay(t):null;return n?{r:n.r,g:n.g,b:n.b,a:t?.alpha??1}:structuredClone(F)}function My(e){return e===`color`?`COLOR`:e===`number`?`FLOAT`:`STRING`}function Ny(e,t){return t===`COLOR`&&typeof e==`string`?jy(e):t===`FLOAT`&&typeof e==`number`?e:t===`STRING`?String(e):typeof e==`number`?e:String(e)}function Py(e){return e===`COLOR`?{...F}:e===`FLOAT`?0:e===`BOOLEAN`?!1:``}function Fy(e){return typeof e==`string`&&e.startsWith(`$--`)}function Iy(e){return e.replace(/^\$/,``)}function Ly(e,t,n,r){if(!Fy(n))return;let i=r.byName.get(Iy(n));i&&(e.boundVariables[t]=i.id)}function Ry(e,t,n){let r=se(),i=[],a=Object.keys(n);if(a.length>0){let e=a[0];for(let t of n[e])i.push({modeId:se(),name:t})}i.length===0&&i.push({modeId:se(),name:`Default`});let o={id:r,name:`Variables`,modes:i,defaultModeId:i[0].modeId,variableIds:[]};e.addCollection(o);let s=new Map;if(a.length>0){let e=a[0];for(let t of i)s.set(`${e}:${t.name}`,t.modeId)}let c=new Map;for(let[n,a]of Object.entries(t)){let t=se(),o=My(a.type),l={};if(Array.isArray(a.value))for(let e of a.value)if(e.theme){let[t,n]=Object.entries(e.theme)[0],r=s.get(`${t}:${n}`);r&&(l[r]=Ny(e.value,o))}else l[i[0].modeId]=Ny(e.value,o);else l[i[0].modeId]=Ny(a.value,o);for(let e of i)e.modeId in l||(l[e.modeId]=l[i[0].modeId]??Py(o));let u={id:t,name:n,type:o,collectionId:r,valuesByMode:l,description:``,hiddenFromPublishing:!1};e.addVariable(u),c.set(n,{id:t,variable:u})}let l=i[0].modeId;function u(e){let t=c.get(e.replace(/^\$/,``));if(t)return t.variable.valuesByMode[l]??Object.values(t.variable.valuesByMode)[0]}return{byName:c,activeModeId:l,collectionId:r,modeByThemeName:s,resolveColor(e){let t=u(e);return t===void 0?jy(e):typeof t==`object`&&`r`in t?t:typeof t==`string`?jy(t):{...F}},resolveNumber(e){let t=u(e);return typeof t==`number`?t:0},resolveString(e){let t=u(e);return typeof t==`string`?t:``},setActiveTheme(t){let n=s.get(`theme:${t}`);n&&(l=n,e.activeMode.set(r,n))}}}function zy(e,t){let n=typeof e==`string`?e:e.color;return Fy(n)?t.resolveColor(n):jy(n)}function By(e,t,n){return e===void 0?[]:(Array.isArray(e)?e:[e]).map((e,r)=>{let i=typeof e==`string`?!0:e.enabled!==!1,a=zy(e,t),o={type:`SOLID`,visible:i,opacity:a.a,color:a};return n&&Ly(n,`fills[${r}]`,typeof e==`string`?e:e.color,t),o})}function Vy(e){return typeof e.thickness==`number`?e.thickness:Math.max(...Object.values(e.thickness))}function Hy(e,t,n){if(!e?.fill)return[];let r=Fy(e.fill)?t.resolveColor(e.fill):jy(e.fill),i=`CENTER`;e.align===`inside`?i=`INSIDE`:e.align===`outside`&&(i=`OUTSIDE`);let a={visible:!0,color:r,opacity:r.a,weight:Vy(e),align:i,dashPattern:[]};return n&&(Ly(n,`strokes[0]`,e.fill,t),typeof e.thickness==`object`&&(n.independentStrokeWeights=!0,n.borderTopWeight=e.thickness.top??0,n.borderRightWeight=e.thickness.right??0,n.borderBottomWeight=e.thickness.bottom??0,n.borderLeftWeight=e.thickness.left??0),n.strokeJoin=Uy(e.join),n.strokeCap=Wy(e.cap)),[a]}function Uy(e){return e===`round`?`ROUND`:e===`bevel`?`BEVEL`:`MITER`}function Wy(e){return e===`round`?`ROUND`:e===`square`?`SQUARE`:`NONE`}function Gy(e){return e?(Array.isArray(e)?e:[e]).flatMap(e=>{if(e.type!==`shadow`)return[];let t=e.color?jy(e.color):{r:0,g:0,b:0,a:.25};return[{type:e.shadowType===`inner`?`INNER_SHADOW`:`DROP_SHADOW`,visible:!0,blendMode:`NORMAL`,color:t,offset:e.offset??{x:0,y:0},radius:e.blur??0,spread:e.spread??0}]}):[]}function Ky(e,t,n){if(t!==void 0){if(Array.isArray(t)){let r=t.map(e=>Jy(e,0,n).value);e.independentCorners=!0,e.topLeftRadius=r[0]??0,e.topRightRadius=r[1]??0,e.bottomRightRadius=r[2]??0,e.bottomLeftRadius=r[3]??0;return}e.cornerRadius=Jy(t,0,n).value}}function qy(e,t,n){if(t===void 0)return;let r=e=>typeof e==`string`?Fy(e)&&n?n.resolveNumber(e):Number(e)||0:e;if(Array.isArray(t)){e.paddingTop=r(t[0]??0),e.paddingRight=r(t[1]??0),e.paddingBottom=r(t[2]??0),e.paddingLeft=r(t[3]??0);return}let i=r(t);e.paddingTop=i,e.paddingRight=i,e.paddingBottom=i,e.paddingLeft=i}function Jy(e,t,n){if(e===void 0)return{value:t,sizing:`FIXED`};if(typeof e==`number`)return{value:e,sizing:`FIXED`};if(e===`fill_container`)return{value:t,sizing:`FILL`};if(e===`hug_content`)return{value:t,sizing:`HUG`};if(Fy(e)&&n)return{value:n.resolveNumber(e),sizing:`FIXED`};let r=Number(e);return{value:Number.isFinite(r)?r:t,sizing:`FIXED`}}function Yy(e){return e.layout===`row`||e.layout===`horizontal`?`HORIZONTAL`:e.layout===`column`||e.layout===`vertical`?`VERTICAL`:`NONE`}function Xy(e){return e===`center`?`CENTER`:e===`end`?`MAX`:e===`space-between`?`SPACE_BETWEEN`:`MIN`}function Zy(e){return e===`center`?`CENTER`:e===`end`?`MAX`:e===`stretch`?`STRETCH`:`MIN`}function Qy(e){return e===`center`?`CENTER`:e===`right`||e===`end`?`RIGHT`:e===`justified`?`JUSTIFIED`:`LEFT`}function $y(e){return e===`center`?`CENTER`:e===`bottom`||e===`end`?`BOTTOM`:`TOP`}function eb(e){return typeof e==`number`?e:e===`thin`?100:e===`extralight`?200:e===`light`?300:e===`medium`?500:e===`semibold`?600:e===`bold`?700:e===`extrabold`?800:e===`black`?900:400}function tb(e){return e.type===`frame`?e.reusable?`COMPONENT`:`FRAME`:e.type===`rectangle`?`RECTANGLE`:e.type===`ellipse`?`ELLIPSE`:e.type===`text`||e.type===`icon_font`?`TEXT`:e.type===`path`?`VECTOR`:e.type===`ref`?`INSTANCE`:`FRAME`}function nb(e,t,n){if(e.vertices.length===0)return;let r=1/0,i=-1/0,a=1/0,o=-1/0;for(let t of e.vertices)r=Math.min(r,t.x),i=Math.max(i,t.x),a=Math.min(a,t.y),o=Math.max(o,t.y);let s=i-r,c=o-a;if(s<.01||c<.01)return;let l=t/s,u=n/c;if(!(Math.abs(l-1)<.01&&Math.abs(u-1)<.01)){for(let t of e.vertices)t.x=(t.x-r)*l,t.y=(t.y-a)*u;for(let t of e.segments)t.tangentStart={x:t.tangentStart.x*l,y:t.tangentStart.y*u},t.tangentEnd={x:t.tangentEnd.x*l,y:t.tangentEnd.y*u}}}function rb(e,t){return e?Fy(e)?t.resolveString(e):e:`Inter`}function ib(e){return{id:e.id,name:e.name??(e.type===`icon_font`?e.iconFontName??`Icon`:e.type),x:e.x??0,y:e.y??0,visible:e.enabled!==!1,opacity:e.opacity??1,rotation:e.rotation??0,flipX:e.flipX??!1,flipY:e.flipY??!1,clipsContent:e.clip??!1,boundVariables:{}}}function ab(e,t,n,r,i,a){e.layoutMode=t,e.primaryAxisAlign=Xy(n.justifyContent),e.counterAxisAlign=Zy(n.alignItems),e.itemSpacing=typeof n.gap==`string`&&Fy(n.gap)&&a?a.resolveNumber(n.gap):n.gap??0,t===`VERTICAL`?(e.primaryAxisSizing=i,e.counterAxisSizing=r):(e.primaryAxisSizing=r,e.counterAxisSizing=i)}function ob(e,t,n){e.text=t.type===`icon_font`?t.iconFontName??``:t.content??``,e.fontFamily=t.type===`icon_font`?t.iconFontFamily??`Material Symbols Sharp`:rb(t.fontFamily,n),e.fontSize=t.fontSize??14,e.fontWeight=eb(t.fontWeight??(t.type===`icon_font`?t.weight:void 0)),e.textAlignHorizontal=Qy(t.textAlign),e.textAlignVertical=$y(t.textAlignVertical),t.lineHeight!==void 0&&(e.lineHeight=t.lineHeight<5?t.lineHeight*e.fontSize:t.lineHeight),t.letterSpacing!==void 0&&(e.letterSpacing=t.letterSpacing),e.textAutoResize=t.textGrowth===`fixed-width`?`HEIGHT`:`WIDTH_AND_HEIGHT`,t.fontFamily&&Fy(t.fontFamily)&&Ly(e,`fontFamily`,t.fontFamily,n)}function sb(e,t){let n=e.type===`text`||e.type===`icon_font`,r=n?20:100,i=n&&e.width===void 0?1e4:r,a=Jy(e.width,i,t),o=Jy(e.height,r,t),s=Yy(e);return e.width===void 0&&s!==`NONE`&&(a.sizing=`HUG`),e.height===void 0&&s!==`NONE`&&(o.sizing=`HUG`),{w:a,h:o,layout:s,isTextLike:n}}function cb(e,t,n){let r=e.layoutMode===`HORIZONTAL`;e.layoutMode=n.layoutMode,e.primaryAxisAlign=n.primaryAxisAlign,e.counterAxisAlign=n.counterAxisAlign;let i=e.layoutMode===`HORIZONTAL`;if(r!==i){let t=e.primaryAxisSizing;e.primaryAxisSizing=e.counterAxisSizing,e.counterAxisSizing=t}let a=i?`primaryAxisSizing`:`counterAxisSizing`,o=i?`counterAxisSizing`:`primaryAxisSizing`;t.width===void 0&&(e[a]=n[a]),t.height===void 0&&(e[o]=n[o]),t.gap===void 0&&(e.itemSpacing=n.itemSpacing),t.padding===void 0&&(e.paddingTop=n.paddingTop,e.paddingRight=n.paddingRight,e.paddingBottom=n.paddingBottom,e.paddingLeft=n.paddingLeft),t.clip===void 0&&(e.clipsContent=n.clipsContent)}function lb(e,t,n,r){n&&(t.fill===void 0&&n.fill!==void 0&&(e.fills=By(n.fill,r,e)),t.stroke===void 0&&n.stroke&&(e.strokes=Hy(n.stroke,r,e)),t.effect===void 0&&n.effect&&(e.effects=Gy(n.effect)),t.cornerRadius===void 0&&Ky(e,n.cornerRadius,r))}function ub(e,t,n,r,i,a){if(!t.ref)return;let o=r.get(t.ref)??t.ref;e.componentId=o;let s=n.getNode(o);s&&(t.width===void 0&&(e.width=s.width),t.height===void 0&&(e.height=s.height),t.layout===void 0&&cb(e,t,s),lb(e,t,i.get(t.ref),a))}function db(e,t,n,r,i){for(let a of e){if(a.type===`ref`){let e=t.getNode(a.id);e&&ub(e,a,t,n,r,i)}a.children&&db(a.children,t,n,r,i)}}function fb(e,t){let n=Object.values(e)[0];n&&t.setActiveTheme(n)}function pb(e,t,n,r,i,a){if(e.type===`prompt`)return null;e.theme&&fb(e.theme,r);let{w:o,h:s,layout:c,isTextLike:l}=sb(e,r),u=ib(e);u.width=o.value,u.height=s.value;let d=n.getNode(t)?.layoutMode??`NONE`;c!==`NONE`&&ab(u,c,e,d===`NONE`&&o.sizing===`FILL`?`FIXED`:o.sizing,d===`NONE`&&s.sizing===`FILL`?`FIXED`:s.sizing,r);let f=n.createNode(tb(e),t,u);if(e.fill!==void 0&&(f.fills=By(e.fill,r,f)),e.stroke&&(f.strokes=Hy(e.stroke,r,f)),f.effects=Gy(e.effect),Ky(f,e.cornerRadius,r),qy(f,e.padding,r),l&&(ob(f,e,r),d===`NONE`&&e.width===void 0&&!e.textGrowth&&(f.textAutoResize=`NONE`,f.width=f.text.length*f.fontSize*.65,f.height=f.fontSize*(f.lineHeight?f.lineHeight/f.fontSize:1.2))),e.type===`path`&&e.geometry){let t=Nt(e.geometry);f.vectorNetwork=t,nb(t,f.width,f.height)}if(d!==`NONE`){let e=d===`VERTICAL`;o.sizing===`FILL`&&(e?f.layoutAlignSelf=`STRETCH`:f.layoutGrow=1),s.sizing===`FILL`&&(e?f.layoutGrow=1:f.layoutAlignSelf=`STRETCH`)}if(e.reusable&&(i.set(e.id,f.id),a.set(e.id,e)),e.children)for(let t of e.children)pb(t,f.id,n,r,i,a);return f.id}function mb(e,t,n,r,i,a){if(a>2)return;let o=e.getNode(t);if(o)for(let t of o.childIds){let o=e.getNode(t);o&&(o.name===n&&o.type===r&&i.push(o),mb(e,t,n,r,i,a+1))}}function hb(e,t,n){let r=e.getNode(t);if(r)for(let t of r.childIds){let r=e.getNode(t);if(!r)continue;if(r.componentId===n)return r;let i=hb(e,t,n);if(i)return i}}function gb(e,t,n){let r=e.getNode(n);if(!r)return;let i=[];return mb(e,t,r.name,r.type,i,0),i.length===1?i[0]:void 0}function _b(e,t,n){t.fill!==void 0&&(e.fills=By(t.fill,n,e)),t.content!==void 0&&(e.text=t.content),t.x!==void 0&&(e.x=t.x),t.y!==void 0&&(e.y=t.y),t.enabled!==void 0&&(e.visible=t.enabled),t.width!==void 0&&(e.width=Jy(t.width,e.width,n).value),t.height!==void 0&&(e.height=Jy(t.height,e.height,n).value),t.rotation!==void 0&&(e.rotation=t.rotation),t.name!==void 0&&(e.name=t.name)}function vb(e){for(let t of e.getAllNodes())t.type===`INSTANCE`&&t.componentId&&t.childIds.length===0&&e.getNode(t.componentId)&&ve(e,t.id,t.componentId)}function yb(e,t,n,r,i){if(t.type!==`ref`||!t.descendants)return;let a=e.getNode(t.id);if(a)for(let[o,s]of Object.entries(t.descendants)){let t=hb(e,a.id,o)??gb(e,a.id,o);if(t){if(s.children){let a=t.childIds.slice();for(let t of a)e.deleteNode(t);for(let a of s.children)pb(a,t.id,e,n,r,i)}_b(t,s,n);continue}s.type&&s.id&&pb(s,a.id,e,n,r,i)}}function bb(e,t,n,r,i){for(let a of e)yb(t,a,n,r,i),a.children&&bb(a.children,t,n,r,i)}function xb(e,t){for(let n of e)n.reusable&&t.set(n.id,n.id),n.children&&xb(n.children,t)}function Sb(e,t,n){for(let[r,i]of Object.entries(e.boundVariables)){let a=t.variables.get(i);if(!a)continue;let o=a.valuesByMode[n.activeModeId]??Object.values(a.valuesByMode)[0];if(r.startsWith(`fills[`)&&typeof o==`object`&&`r`in o){let t=Number.parseInt(r.match(/\d+/)?.[0]??`0`,10);e.fills[t]&&(e.fills[t].color=o)}else if(r.startsWith(`strokes[`)&&typeof o==`object`&&`r`in o){let t=Number.parseInt(r.match(/\d+/)?.[0]??`0`,10);e.strokes[t]&&(e.strokes[t].color=o)}}for(let r of e.childIds){let e=t.getNode(r);e&&Sb(e,t,n)}}function Cb(e,t,n){for(let r of e){r.theme&&fb(r.theme,n);let e=t.getNode(r.id);e&&Sb(e,t,n),r.children&&Cb(r.children,t,n)}}function wb(e){for(let t of e.getAllNodes()){if(t.type!==`INSTANCE`||!t.componentId)continue;let n=e.getNode(t.componentId);n&&(t.width<=100&&n.width>100&&(t.width=n.width),t.height<=100&&n.height>100&&(t.height=n.height),n.layoutGrow>0&&(t.layoutGrow=n.layoutGrow),n.layoutAlignSelf!==`AUTO`&&(t.layoutAlignSelf=n.layoutAlignSelf),t.fills=C(t.fills),t.strokes=T(t.strokes),t.effects=y(t.effects))}}function Tb(e){for(let t of e.getAllNodes())t.type!==`TEXT`||!t.text||t.text.length<=1||t.width>=t.fontSize*2||(t.width=t.text.length*t.fontSize*.65)}function Eb(e){let t=JSON.parse(e),n=new me;for(let e of n.getPages(!0))n.deleteNode(e.id);let r=Ry(n,t.variables??{},t.themes??{}),i=new Map,a=new Map;xb(t.children,i);let o=n.addPage(t.children[0]?.name??`Page 1`);for(let e of t.children)pb(e,o.id,n,r,i,a);return db(t.children,n,i,a,r),vb(n),bb(t.children,n,r,i,a),vb(n),Cb(t.children,n,r),wb(n),Tb(n),n.getPages(!0).length===0&&n.addPage(`Page 1`),n}function Db(e,t){e.source.format=`fig`,e.source.orderKey=t.parentIndex?.position??null,t.backgroundColor&&(e.source.fig.rawNodeFields.backgroundColor=structuredClone(t.backgroundColor)),t.backgroundPaints&&(e.source.fig.rawNodeFields.backgroundPaints=structuredClone(t.backgroundPaints)),t.guides&&(e.source.fig.rawNodeFields.guides=structuredClone(t.guides)),e.source.fig.rawNodeFields.strokeJoin=t.strokeJoin,e.source.fig.rawNodeFields.strokeWeight=t.strokeWeight,t.pageType&&(e.source.fig.rawNodeFields.pageType=t.pageType)}function Ob(e,t){let n=e.getNode(e.rootId);!t||!n||(n.source.format=`fig`,n.source.fig.rawNodeFields.strokeJoin=t.strokeJoin,n.source.fig.rawNodeFields.strokeWeight=t.strokeWeight)}function kb(e){return e.version?`${e.key}@${e.version}`:e.key}function Ab(e){let t=new Map;for(let[n,r]of e)typeof r.key==`string`&&((typeof r.version!=`string`||!t.has(r.key))&&t.set(r.key,n),typeof r.version==`string`&&t.set(kb({key:r.key,version:r.version}),n),typeof r.userFacingVersion==`string`&&t.set(kb({key:r.key,version:r.userFacingVersion}),n));return t}function jb(e,t){if(e.guid)return V(e.guid);if(e.assetRef)return t.get(kb(e.assetRef))??t.get(e.assetRef.key)}function Mb(e,t){let n=new Map,r=new Map;for(let[t,i]of e){if(i.type!==`VARIABLE`)continue;n.set(t,i.variableDataValues?.entries??[]);let e=i.variableSetID?.guid?V(i.variableSetID.guid):void 0,a=i.parentIndex?.guid?V(i.parentIndex.guid):void 0;e?r.set(t,e):a&&r.set(t,a)}let i=new Map;for(let[t,n]of e){if(n.type!==`VARIABLE_SET`)continue;let e=n.variableSetModes??[];e.length>0&&i.set(t,V(e[0].id))}function a(e,o,s){if(s>10)return null;let c=n.get(e);if(!c?.length)return null;let l=r.get(e),u=l?i.get(l):void 0,d=o?c.find(e=>V(e.modeID)===o):void 0;!d&&u&&(d=c.find(e=>V(e.modeID)===u)),d||=c[0];let f=d.variableData.value;if(!f)return null;if(f.colorValue)return f.colorValue;if(f.alias){let e=jb(f.alias,t);if(e)return a(e,V(d.modeID),s+1)}return null}return function(e){let n=jb(e,t);return n?a(n,void 0,0):null}}function Nb(e){let t=new Map,n=new Map,r=new Map;for(let i of e){if(!i.guid||i.phase===`REMOVED`)continue;let e=V(i.guid);if(t.set(e,i),i.parentIndex?.guid){let t=V(i.parentIndex.guid);n.set(e,t);let a=r.get(t);a||(a=[],r.set(t,a)),a.push(e)}}for(let[e,n]of r){let r=t.get(e);r&&di(n,r,t)}return{changeMap:t,parentMap:n,childrenMap:r}}function Pb(e){return e===`COLOR`?`COLOR`:e===`BOOLEAN`?`BOOLEAN`:e===`STRING`?`STRING`:`FLOAT`}function Fb(e,t){let n=e.variableData;if(!n.value)return;let r=n.dataType??n.resolvedDataType;if(r===`COLOR`&&n.value.colorValue){let e=n.value.colorValue;return{r:e.r,g:e.g,b:e.b,a:e.a}}if(r===`BOOLEAN`)return n.value.boolValue??!1;if(r===`STRING`)return n.value.textValue??``;if(r===`ALIAS`&&n.value.alias){let e=jb(n.value.alias,t);return e?{aliasId:e}:void 0}return n.value.floatValue??0}function Ib(e){return e===`BOOLEAN`?!1:e===`STRING`?``:e===`COLOR`?{...De}:0}function Lb(e,t){for(let[n,r]of e){if(r.type!==`VARIABLE_SET`)continue;let e=(r.variableSetModes??[]).map(e=>({modeId:V(e.id),name:e.name}));e.length===0&&e.push({modeId:`default`,name:`Default`}),t.addCollection({id:n,name:r.name??`Variables`,modes:e,defaultModeId:e[0].modeId,variableIds:[]})}}function Rb(e,t,n,r){if(e.variableSetID?.guid)return V(e.variableSetID.guid);let i=e.variableSetID?.assetRef;return i?r.get(kb(i))??r.get(i.key)??``:n.get(t)??``}function zb(e,t,n){if(t.variableCollections.has(n))return;let r=e.get(n);t.addCollection({id:n,name:r?.name??`Variables`,modes:[{modeId:`default`,name:`Default`}],defaultModeId:`default`,variableIds:[]})}function Bb(e,t,n,r){for(let[i,a]of e){if(a.type!==`VARIABLE`)continue;let o=Rb(a,i,t,r);zb(e,n,o);let s=Pb(a.variableResolvedType),c={};if(a.variableDataValues?.entries)for(let e of a.variableDataValues.entries){let t=Fb(e,r);t!==void 0&&(c[V(e.modeID)]=t)}if(Object.keys(c).length===0){let e=n.variableCollections.get(o)?.defaultModeId??`default`;c[e]=Ib(s)}n.addVariable({id:i,name:a.name??`Variable`,type:s,collectionId:o,valuesByMode:c,description:``,hiddenFromPublishing:!1,key:typeof a.key==`string`?a.key:void 0,version:typeof a.version==`string`?a.version:void 0})}}function Vb(e,t,n,r,i,a,o){let s=null;for(let[e,n]of t)if(n.type===`DOCUMENT`||e===`0:0`){s=e;break}if(s){Ob(e,t.get(s));for(let n of r.get(s)??[]){let s=t.get(n);if(s)if(s.type===`CANVAS`){let t=e.addPage(s.name??`Page`);t.source.id=n,Db(t,s),a.set(n,t.id),s.internalOnly&&(t.internalOnly=!0),i.add(n);for(let e of r.get(n)??[])o(e,t.id)}else o(n,e.getPages()[0]?.id??e.rootId)}}else{let r=[];for(let[e]of t){let i=n.get(e);(!i||!t.has(i))&&r.push(e)}let i=e.getPages()[0]??e.addPage(`Page 1`);for(let e of r)o(e,i.id)}}function Hb(e,t,n){for(let[r,i]of e){if(!i.variableConsumptionMap?.entries?.length)continue;let e=t.get(r);if(e)for(let t of i.variableConsumptionMap.entries){let r=Mn(t);r&&n.bindVariable(e,r.field,r.variableId)}}}function Ub(e,t){for(let n of e.getAllNodes()){if(n.type!==`INSTANCE`||!n.componentId)continue;let e=t.get(n.componentId);e&&(n.componentId=e)}}function Wb(e){for(let t of e.getAllNodes()){if(t.type!==`COMPONENT`||t.variantPropSpecs.length===0||!t.parentId)continue;let n=e.getNode(t.parentId);if(n?.type!==`COMPONENT_SET`)continue;let r=new Map(n.componentPropertyDefinitions.map(e=>[e.id,e.name])),i={};for(let e of t.variantPropSpecs)i[r.get(e.propDefId)??e.propDefId]=e.value;e.updateNode(t.id,{componentPropertyValues:i})}}function Gb(e){return e.find(e=>e.type===`DOCUMENT`)?.documentColorProfile===`DISPLAY_P3`?`display-p3`:`srgb`}function Kb(e,t){for(let n of e.values())us(e,n,t)}function qb(e,t,n,r,i){M_(e,{changeMap:t,guidToNodeId:n,blobs:r,populatedRootIds:new Set(i)})}function Jb(e){let t=new Set;for(let n of e.getAllNodes()){if(n.type!==`COMPONENT`&&n.type!==`COMPONENT_SET`)continue;let r=n.parentId?e.getNode(n.parentId):void 0;for(;r?.parentId&&r.type!==`CANVAS`;)r=e.getNode(r.parentId);r?.type===`CANVAS`&&t.add(r.id)}return t}function Yb(e,t=[],n,r={}){let i=new me;if(i.documentColorSpace=Gb(e),n)for(let[e,t]of n)i.images.set(e,t);for(let e of i.getPages(!0))i.deleteNode(e.id);let{changeMap:a,parentMap:o,childrenMap:s}=Nb(e),c=Ab(a);Kb(a,c),xn(Mb(a,c));let l=new Map,u=new Set,d=new Map,f=e=>s.get(e)??[];function p(e,n){if(u.has(e))return;u.add(e);let r=a.get(e);if(!r)return;let{nodeType:s,...c}=Jr(r,t);if(c.sharedStyleType&&(c.internalOnly=!0),s===`DOCUMENT`||s===`VARIABLE`||r.type===`VARIABLE_SET`)return;qr(r,a.get(o.get(e)??``))&&(c.textAutoResize=`WIDTH_AND_HEIGHT`);let m=l.get(n)??n,h=i.createNode(s,m,c);d.set(e,h.id);for(let t of f(e))p(t,h.id)}Vb(i,a,o,s,u,l,p),Lb(a,i),Bb(a,o,i,c),Hb(a,d,i),Ub(i,d),Wb(i);let m=i.getPages()[0]?.id,h=r.populate===`first-page`?Jb(i):new Set,g=r.populate===`first-page`?[m,...h].filter(Yt):void 0;return r.populate!==`none`&&i.preserveSourceMetadataDuring(()=>{au(i,a,d,t,g)}),g&&qb(i,a,d,t,g),xn(null),i.getPages(!0).length===0&&i.addPage(`Page 1`),i}function Xb(e){let t=N_(e);return{rootId:e.rootId,nodes:[...e.nodes],images:[...e.images],variables:[...e.variables],variableCollections:[...e.variableCollections],activeMode:[...e.activeMode],instanceIndex:[...e.instanceIndex].map(([e,t])=>[e,[...t]]),figKiwiVersion:e.figKiwiVersion,figSchemaDeflated:e.figSchemaDeflated,documentColorSpace:e.documentColorSpace,lazyFigImport:t?{changeMap:[...t.changeMap],guidToNodeId:[...t.guidToNodeId],blobs:t.blobs,populatedRootIds:[...t.populatedRootIds]}:void 0}}function Zb(e){let t=new me;return t.rootId=e.rootId,t.nodes=new Map(e.nodes),t.images=new Map(e.images),t.variables=new Map(e.variables),t.variableCollections=new Map(e.variableCollections),t.activeMode=new Map(e.activeMode),t.instanceIndex=new Map(e.instanceIndex.map(([e,t])=>[e,new Set(t)])),t.figKiwiVersion=e.figKiwiVersion,t.figSchemaDeflated=e.figSchemaDeflated,t.documentColorSpace=e.documentColorSpace,e.lazyFigImport&&M_(t,{changeMap:new Map(e.lazyFigImport.changeMap),guidToNodeId:new Map(e.lazyFigImport.guidToNodeId),blobs:e.lazyFigImport.blobs,populatedRootIds:new Set(e.lazyFigImport.populatedRootIds)}),t}function Qb(e,t={}){let{nodeChanges:n,blobs:r,images:i,figKiwiVersion:a,figSchemaDeflated:o}=pp(e),s=Yb(n,r,new Map(i),t);return s.figKiwiVersion=a,s.figSchemaDeflated=o,s}function $b(e,t){return new Promise((n,r)=>{let i=new Worker(new URL(`/open-pencil/v0.14.0/assets/worker-BftTWuxC.js`,``+import.meta.url),{type:`module`});i.onmessage=e=>{if(e.data.error||!e.data.graph){i.terminate(),r(Error(e.data.error??`Worker failed to parse .fig file`));return}try{let r=Zb(e.data.graph);t.populate===`first-page`?(i.onmessage=null,i.onerror=null,U_(r,i)):i.terminate(),n(r)}catch(e){i.terminate(),r(e instanceof Error?e:Error(String(e)))}},i.onerror=e=>{i.terminate(),r(Error(e.message||`Worker failed to parse .fig file`))},i.postMessage({buffer:e,options:t},[e])})}async function ex(e,t={}){if(typeof Worker<`u`&&Se){let n=e.slice(0);try{return await $b(e,t)}catch(e){return console.warn(`Worker parsing failed, falling back to main thread:`,e),Qb(n,t)}}return Qb(e,t)}async function tx(e,t={}){return ex(await e.arrayBuffer(),t)}var nx=at(`iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==`);function rx(e,t,n){return e&&typeof e==`object`&&`aliasId`in e?{value:{alias:{guid:n.get(e.aliasId)??Qt(e.aliasId)}},dataType:`ALIAS`,resolvedDataType:{COLOR:`COLOR`,BOOLEAN:`BOOLEAN`,STRING:`STRING`}[t]??`FLOAT`}:t===`COLOR`&&typeof e==`object`&&`r`in e?{value:{colorValue:hn(e)},dataType:`COLOR`,resolvedDataType:`COLOR`}:t===`BOOLEAN`?{value:{boolValue:!!e},dataType:`BOOLEAN`,resolvedDataType:`BOOLEAN`}:t===`STRING`?{value:{textValue:typeof e==`string`?e:JSON.stringify(e)},dataType:`STRING`,resolvedDataType:`STRING`}:{value:{floatValue:Number(e)},dataType:`FLOAT`,resolvedDataType:`FLOAT`}}function ix(e){let t=[];for(let[n,r]of e.images)t.push({name:`images/${n}`,data:r});return t}var ax=400,ox=225;async function sx(e,t,n,r,i=!1){if(!t)return nx;if(n&&r)return qe(n,r,e,t,ax,ox)??nx;if(!i||Se||z)return nx;let{headlessRenderThumbnail:a}=await B(async()=>{let{headlessRenderThumbnail:e}=await import(`./raster-ARN12cWw.js`);return{headlessRenderThumbnail:e}},__vite__mapDeps([2,3,4,5,6,7,8,9,10]));return await a(e,t,ax,ox)??nx}function cx(e,t,n,r){if(/^\d+:\d+$/.test(e)&&!n.has(e)&&!r.has(e)){let t=Qt(e);return n.add(e),t}let i={sessionID:0,localID:t.value++};return n.add(`${i.sessionID}:${i.localID}`),i}function lx(e,t,n,r,i,a){for(let[o,s]of e.variableCollections){let e=cx(o,t,i,a);n.set(o,e);for(let e of s.modes){let n=cx(e.modeId,t,i,a);r.set(e.modeId,n)}for(let e of s.variableIds){let r=cx(e,t,i,a);n.set(e,r)}}}function ux(e,t,n,r,i){let a=0;for(let[o,s]of e.variableCollections){let c=r.get(o)??Qt(o);t.push({guid:c,parentIndex:{guid:n,position:Zt(a++)},type:`VARIABLE_SET`,name:s.name,phase:`CREATED`,strokeAlign:`CENTER`,strokeJoin:`BEVEL`,variableSetModes:s.modes.map((e,t)=>({id:i.get(e.modeId)??Qt(e.modeId),name:e.name,sortPosition:Zt(t)}))}),dx(e,t,c,n,s.variableIds,r,i)}}function dx(e,t,n,r,i,a,o){let s=0;for(let c of i){let i=e.variables.get(c);if(!i)continue;let l=a.get(c)??Qt(c),u={COLOR:`COLOR`,BOOLEAN:`BOOLEAN`,STRING:`STRING`}[i.type]??`FLOAT`,d=Object.entries(i.valuesByMode).map(([e,t])=>({modeID:o.get(e)??Qt(e),variableData:rx(t,i.type,a)})),f={guid:l,parentIndex:{guid:r,position:Zt(s++)},type:`VARIABLE`,name:i.name,phase:`CREATED`,strokeAlign:`CENTER`,strokeJoin:`BEVEL`,variableSetID:{guid:n},variableResolvedType:u,variableDataValues:{entries:d},variableScopes:[`ALL_SCOPES`]};i.key&&(f.key=i.key),i.version&&(f.version=i.version),t.push(f)}}function fx(e,t){if(!e.source.id)return;`pageType`in e.source.fig.rawNodeFields||delete t.pageType,`backgroundColor`in e.source.fig.rawNodeFields&&(t.backgroundColor=structuredClone(e.source.fig.rawNodeFields.backgroundColor)),`backgroundPaints`in e.source.fig.rawNodeFields&&(t.backgroundPaints=structuredClone(e.source.fig.rawNodeFields.backgroundPaints)),`guides`in e.source.fig.rawNodeFields&&(t.guides=structuredClone(e.source.fig.rawNodeFields.guides));let n=e.source.fig.rawNodeFields.strokeJoin;typeof n==`string`&&(t.strokeJoin=n);let r=e.source.fig.rawNodeFields.strokeWeight;typeof r==`number`&&(t.strokeWeight=r)}function px(e,t,n,r,i,a){let o=[],s=null;for(let e=0;e<t.length;e++){let c=t[e],l=(()=>{if(!c.source.id)return{sessionID:0,localID:r.value++};let e=Qt(c.source.id),t=`${e.sessionID}:${e.localID}`;return a.has(t)?{sessionID:0,localID:r.value++}:e})();c.source.id&&l.sessionID===0&&(r.value=Math.max(r.value,l.localID+1)),i.set(c.id,l),a.add(`${l.sessionID}:${l.localID}`),c.internalOnly&&(s=l);let u=is(l,n,c.source.orderKey??Zt(e),c.name,{backgroundOpacity:1,backgroundColor:{...Oe},backgroundEnabled:!0});fx(c,u),c.internalOnly&&(u.internalOnly=!0),o.push({page:c,canvasGuid:l,canvasNc:u})}let c=[...e.nodes.values()].some(e=>e.sharedStyleType!==null);return(e.variableCollections.size>0||c)&&s===null&&(s={sessionID:0,localID:r.value++},a.add(`${s.sessionID}:${s.localID}`),o.push({page:{id:``,name:`Internal Only Canvas`,internalOnly:!0},canvasGuid:s,canvasNc:is(s,n,Zt(o.length),`Internal Only Canvas`,{internalOnly:!0})})),{canvasEntries:o,internalCanvasGuid:s}}function mx(e){let{graph:t,internalCanvasGuid:n,nodeChanges:r}=e;if(!n)return;let i=[...t.nodes.values()].filter(e=>e.sharedStyleType!==null);for(let a=0;a<i.length;a++)r.push(...od(i[a],n,a,e.localIdCounter,t,e.blobs,e.nodeIdToGuid,e.fontDigestMap,e.varIdToGuid,e.glyphBlobMap,e.blobIndexByHex,e.assignedGuidValues,e.componentPropertyDefinitionsById,e.modeIdToGuid));t.variableCollections.size>0&&ux(t,r,n,e.varIdToGuid,e.modeIdToGuid)}async function hx(e,t,n,r,i=!1){let a=Zb(structuredClone(Xb(e)));L_(a),await Ku();let o,s;a.figSchemaDeflated?(o=mu(_u(new lu(po(a.figSchemaDeflated)))),s=a.figSchemaDeflated):(o=qu(),s=fo(Ju()));let c={sessionID:0,localID:0},l={value:2},u=rs(c,a.documentColorSpace),d=a.getNode(a.rootId);d&&Object.assign(u,d.source.fig.rawNodeFields);let f=[u],p=[],m=a.getPages(!0),h=new Map,g=new Set;g.add(`${c.sessionID}:${c.localID}`);let _=new Map,v=new Map,y=await id(a),b=new Map,x=new Map,S=Yi(a),C=l.value-1,w=l.value-1,T=new Set;for(let e of a.nodes.values())if(e.source.id){T.add(e.source.id);let t=Qt(e.source.id);t.sessionID===0&&t.localID>C&&(C=t.localID),t.sessionID===1&&t.localID>w&&(w=t.localID)}l.value=Math.max(l.value,C+1,w+1);let{canvasEntries:E,internalCanvasGuid:D}=px(a,m,c,l,h,g);lx(a,l,_,v,g,T);for(let e of E)f.push(e.canvasNc);let O=[...E.filter(e=>e.page.internalOnly),...E.filter(e=>!e.page.internalOnly)];for(let{page:e,canvasGuid:t}of O){let n=a.getChildren(e.id).filter(e=>!e.internalOnly);for(let e=0;e<n.length;e++)f.push(...od(n[e],t,e,l,a,p,h,y,_,b,x,g,S,v))}mx({graph:a,nodeChanges:f,internalCanvasGuid:D,localIdCounter:l,blobs:p,nodeIdToGuid:h,fontDigestMap:y,varIdToGuid:_,modeIdToGuid:v,glyphBlobMap:b,blobIndexByHex:x,assignedGuidValues:g,componentPropertyDefinitionsById:S});let k={type:`NODE_CHANGES`,sessionID:0,ackID:0,nodeChanges:f};p.length>0&&(k.blobs=p.map(e=>({bytes:e})));let A=o.encodeMessage(k),j=await sx(a,r??m[0]?.id,t,n,i),M=JSON.stringify({version:1,app:`OpenPencil`,createdAt:new Date().toISOString()}),N=ix(a),P=a.figKiwiVersion??void 0;if(z){let{invoke:e}=await B(async()=>{let{invoke:e}=await import(`./core-CbiB8nbm.js`);return{invoke:e}},__vite__mapDeps([11,12]));return new Uint8Array(await e(`build_fig_file`,{schemaDeflated:Array.from(s),kiwiData:Array.from(A),thumbnailPng:Array.from(j),metaJson:M,images:N.map(e=>({name:e.name,data:Array.from(e.data)})),figKiwiVersion:P}))}return vx(s,A,j,M,N,P)}function gx(){return typeof Worker<`u`&&Se}function _x(e,t,n,r,i,a){return new Promise((o,s)=>{let c=new Worker(new URL(`/open-pencil/v0.14.0/assets/export-worker-BF-q3bcO.js`,``+import.meta.url),{type:`module`});c.onmessage=e=>{o(e.data),c.terminate()},c.onerror=e=>{s(Error(e.message)),c.terminate()},c.postMessage({schemaDeflated:e,kiwiData:t,thumbnailPNG:n,metaJSON:r,images:i,figKiwiVersion:a})})}function vx(e,t,n,r,i,a){return gx()?_x(e,t,n,r,i,a):Promise.resolve(hp(e,t,n,r,i,a))}function yx(e){return/\.([^.]+)$/.exec(e.toLowerCase())?.[1]??``}function bx(e){return e.scope===`node`?e.nodeId:e.scope===`selection`&&e.nodeIds.length===1?e.nodeIds[0]:null}function xx(e){switch(e.target.scope){case`document`:{let t=e.graph.getPages()[0];return{pageId:t.id,nodeIds:t.childIds}}case`page`:{let t=e.graph.getNode(e.target.pageId);return t?{pageId:t.id,nodeIds:t.childIds}:null}case`selection`:{let t=e.target.nodeIds[0];if(!t)return null;let n=rt(e.graph,t);if(!n)return null;if(!e.target.nodeIds.every(t=>rt(e.graph,t)===n))throw Error(`Export selection must stay on a single page`);return{pageId:n,nodeIds:e.target.nodeIds}}case`node`:return xx({...e,target:{scope:`selection`,nodeIds:[e.target.nodeId]}});default:return null}}async function Sx(e,t,n){let r=xx(e);if(!r)return null;let i=t.scale??1;return n?.canvasKit&&n.renderer?Ke(n.canvasKit,n.renderer,e.graph,r.pageId,r.nodeIds,{scale:i,format:t.format,quality:t.quality,trimTransparent:e.target.scope===`page`||e.target.scope===`document`}):Je(e.graph,r.pageId,r.nodeIds,{scale:i,format:t.format,quality:t.quality,trimTransparent:e.target.scope===`page`||e.target.scope===`document`})}function Cx(e){let t=e===`JPG`?`jpg`:e.toLowerCase(),n=`image/png`;return e===`JPG`?n=`image/jpeg`:e===`WEBP`&&(n=`image/webp`),{id:t,label:e,role:`derived-export`,category:`raster`,extensions:[t],mimeTypes:[n],support:{exportDocument:!0,exportPage:!0,exportSelection:!0,exportNode:!0},exportOptions:{scale:!0,quality:e!==`PNG`,colorSpace:!1},async exportContent(r,i,a){let o=await Sx(r,{format:e,scale:i?.scale,quality:i?.quality},a);if(!o)throw Error(`Nothing to export`);return{format:t,mimeType:n,extension:t,data:o}}}}var wx={id:`fig`,label:`OpenPencil Document`,role:`native-document`,category:`document`,extensions:[`fig`],mimeTypes:[`application/octet-stream`],support:{readDocument:!0,writeDocument:!0,exportDocument:!0,exportPage:!0,exportSelection:!0,exportNode:!0},exportOptions:{scale:!1,quality:!1},matchesFile(e){return yx(e)===`fig`},async readDocument(e){let t=e.data.slice().buffer;return{graph:await ex(t,{populate:`first-page`}),sourceFormat:`fig`}},async writeDocument(e,t,n){return{format:`fig`,mimeType:`application/octet-stream`,extension:`fig`,data:await hx(e,n?.canvasKit,n?.renderer,t?.thumbnailPageId,t?.renderThumbnail??!1)}},async exportContent(e,t,n){let r=ot(e.graph,e.target);return{format:`fig`,mimeType:`application/octet-stream`,extension:`fig`,data:await hx(r.graph,n?.canvasKit,n?.renderer,t?.thumbnailPageId??r.pageId??void 0,t?.renderThumbnail??!1)}}},Tx={id:`pen`,label:`Pencil Document`,role:`interchange-document`,category:`document`,extensions:[`pen`],mimeTypes:[`application/json`,`text/plain`],support:{readDocument:!0},matchesFile(e,t){return yx(e)===`pen`||t===`application/json`},async readDocument(e){return{graph:Eb(new TextDecoder().decode(e.data)),sourceFormat:`pen`}}},Ex=Cx(`PNG`),Dx=Cx(`JPG`),Ox=Cx(`WEBP`),kx={id:`svg`,label:`SVG`,role:`derived-export`,category:`vector`,extensions:[`svg`],mimeTypes:[`image/svg+xml`],support:{exportDocument:!0,exportPage:!0,exportSelection:!0,exportNode:!0},exportOptions:{scale:!1,quality:!1,colorSpace:!0},async exportContent(e,t){let n=xx(e);if(!n)throw Error(`Nothing to export`);let r=Dt(e.graph,n.pageId,n.nodeIds,t);if(!r)throw Error(`Nothing to export`);return{format:`svg`,mimeType:`image/svg+xml`,extension:`svg`,data:r,encoding:`utf8`}}},Ax={id:`pdf`,label:`PDF`,role:`derived-export`,category:`vector`,extensions:[`pdf`],mimeTypes:[`application/pdf`],support:{exportDocument:!0,exportPage:!0,exportSelection:!0,exportNode:!0},exportOptions:{scale:!1,quality:!1},async exportContent(e){let t=xx(e);if(!t)throw Error(`Nothing to export`);let{renderNodesToPDF:n}=await B(async()=>{let{renderNodesToPDF:e}=await import(`./pdf-pR5dG-J6.js`);return{renderNodesToPDF:e}},__vite__mapDeps([13,5,3,4,6,7,8,9,10,14,15,16,17])),r=await n(e.graph,t.pageId,t.nodeIds);if(!r)throw Error(`Nothing to export`);return{format:`pdf`,mimeType:`application/pdf`,extension:`pdf`,data:r}}};function jx(e){if(e.target.scope!==`document`)return xx(e);let t=e.graph.getPages();return t.length?{pageId:t[0].id,nodeIds:t.flatMap(e=>e.childIds)}:null}var Mx=[wx,Tx,Ex,Dx,Ox,kx,Ax,{id:`pptx`,label:`PowerPoint`,role:`derived-export`,category:`print`,extensions:[`pptx`],mimeTypes:[`application/vnd.openxmlformats-officedocument.presentationml.presentation`],support:{exportDocument:!0,exportPage:!0,exportSelection:!0,exportNode:!0},exportOptions:{scale:!1,quality:!1},async exportContent(e,t,n){let r=jx(e);if(!r)throw Error(`Nothing to export`);let{renderNodesToPPTX:i}=await B(async()=>{let{renderNodesToPPTX:e}=await import(`./pptx-cOxtpbu3.js`);return{renderNodesToPPTX:e}},__vite__mapDeps([18,5,7,10,17,9,8])),a=await i(e.graph,r.pageId,r.nodeIds,{...t,context:t?.context??n});if(!a)throw Error(`Nothing to export`);return{format:`pptx`,mimeType:`application/vnd.openxmlformats-officedocument.presentationml.presentation`,extension:`pptx`,data:a}}},{id:`jsx`,label:`JSX`,role:`derived-export`,category:`code`,extensions:[`jsx`],mimeTypes:[`text/plain`,`text/jsx`],support:{exportSelection:!0,exportNode:!0},exportOptions:{scale:!1,quality:!1},async exportContent(e,t){let n=t?.format??`openpencil`,r=bx(e.target),i=``;if(r?i=Cg(r,e.graph,n):e.target.scope===`selection`&&(i=wg(e.target.nodeIds,e.graph,n)),!i)throw Error(`Nothing to export`);return{format:`jsx`,mimeType:`text/plain`,extension:`jsx`,data:i,encoding:`utf8`}}}],Nx=`cache/v1`,Px=`open-pencil:cache:v1:`,Fx=new TextEncoder,Ix=new TextDecoder;function Lx(){return z||`window`in globalThis&&`__TAURI_INTERNALS__`in window}function Rx(){return`window`in globalThis&&!!window.localStorage}function zx(e){return`${Nx}/${e.split(`/`).map(encodeURIComponent).join(`/`)}`}function Bx(e){return`${Px}${e}`}async function Vx(e){if(Lx())try{let{BaseDirectory:t,readFile:n}=await B(async()=>{let{BaseDirectory:e,readFile:t}=await import(`./dist-js-Cb84B2KY.js`);return{BaseDirectory:e,readFile:t}},__vite__mapDeps([19,12,20]));return Ix.decode(await n(zx(e),{baseDir:t.AppLocalData}))}catch{return null}return Rx()?window.localStorage.getItem(Bx(e)):null}async function Hx(e,t){if(Lx()){let{BaseDirectory:n,mkdir:r,writeFile:i}=await B(async()=>{let{BaseDirectory:e,mkdir:t,writeFile:n}=await import(`./dist-js-Cb84B2KY.js`);return{BaseDirectory:e,mkdir:t,writeFile:n}},__vite__mapDeps([19,12,20]));await r(Nx,{baseDir:n.AppLocalData,recursive:!0}),await i(zx(e),Fx.encode(t),{baseDir:n.AppLocalData});return}Rx()&&window.localStorage.setItem(Bx(e),t)}async function Ux(e){if(!Lx())return null;try{let{BaseDirectory:t,readFile:n}=await B(async()=>{let{BaseDirectory:e,readFile:t}=await import(`./dist-js-Cb84B2KY.js`);return{BaseDirectory:e,readFile:t}},__vite__mapDeps([19,12,20])),r=await n(zx(e),{baseDir:t.AppLocalData});return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}catch{return null}}async function Wx(e,t){if(!Lx())return;let{BaseDirectory:n,mkdir:r,writeFile:i}=await B(async()=>{let{BaseDirectory:e,mkdir:t,writeFile:n}=await import(`./dist-js-Cb84B2KY.js`);return{BaseDirectory:e,mkdir:t,writeFile:n}},__vite__mapDeps([19,12,20]));await r(Nx,{baseDir:n.AppLocalData,recursive:!0}),await i(zx(e),new Uint8Array(t),{baseDir:n.AppLocalData})}async function Gx(e){if(Lx()){try{let{BaseDirectory:t,remove:n}=await B(async()=>{let{BaseDirectory:e,remove:t}=await import(`./dist-js-Cb84B2KY.js`);return{BaseDirectory:e,remove:t}},__vite__mapDeps([19,12,20]));await n(zx(e),{baseDir:t.AppLocalData,recursive:!0})}catch(t){console.warn(`Cache prefix delete skipped for "${e}":`,t)}return}if(Rx())for(let t=window.localStorage.length-1;t>=0;t--){let n=window.localStorage.key(t);n?.startsWith(Bx(e))&&window.localStorage.removeItem(n)}}async function Kx(e,t){let n=await Vx(e);if(!n)return null;try{let e=JSON.parse(n);return typeof e.updatedAt!=`number`||!(`value`in e)||t!==void 0&&Date.now()-e.updatedAt>t?null:e.value}catch{return null}}async function qx(e,t){await Hx(e,JSON.stringify({updatedAt:Date.now(),value:t}))}var Jx=`font-cache/v1`,Yx=`${Jx}/manifest`,Xx=`${Jx}/files`,Zx={version:1,entries:{}},Qx=new TextEncoder;async function $x(e,t,n=``){return eS(`${e}\0${t}\0${Array.from(new Set(n)).sort().join(``)}`)}async function eS(e){return nS(await crypto.subtle.digest(`SHA-256`,Qx.encode(e)))}async function tS(e){return nS(await crypto.subtle.digest(`SHA-256`,e))}function nS(e){return[...new Uint8Array(e)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}async function rS(){let e=await Kx(Yx);return e?.version!==1||!e.entries?Zx:{version:1,entries:e.entries}}async function iS(e){await qx(Yx,e)}async function aS(){let e=await rS(),t=Object.values(e.entries).filter(e=>!!e);return{count:t.length,byteLength:t.reduce((e,t)=>e+t.byteLength,0),updatedAt:t.length>0?Math.max(...t.map(e=>e.updatedAt)):null}}async function oS(){await Gx(Jx)}function sS(){return{async read(e,t,n){let r=(await rS()).entries[await $x(e,t,n)];if(!r)return null;let i=await Ux(`${Xx}/${r.file}`);return!i||i.byteLength!==r.byteLength||await tS(i)!==r.sha256?null:i},async write(e,t,n,r){let i=await $x(e,t,r),a=await tS(n),o=`${i}.ttf`;await Wx(`${Xx}/${o}`,n);let s=await rS();s.entries[i]={family:e,style:t,file:o,byteLength:n.byteLength,sha256:a,updatedAt:Date.now()},await iS(s)}}}typeof navigator<`u`&&p.setFallbackUserAgent(navigator.userAgent);var cS=d(`op-online-fonts-enabled`,!0),lS=d(`op-font-providers`,m);i([cS,lS],()=>{p.setOnlineFontProviders(cS.value?Object.fromEntries(_.map(e=>[e,lS.value[e]])):{})},{deep:!0,immediate:!0});var uS=!1,dS=!1;function fS(){dS||Rt()||!cS.value||_.some(e=>lS.value[e])&&(dS=!0,zt.warning(Oy.get().webFontProvidersRequireDesktopApp))}function pS(){uS||!Rt()||(uS=!0,p.setDownloadedFontCache(sS()),p.setWebFontFetch(Bt),p.setHostFontLoader(OS))}pS();var mS=null,hS=null;async function gS(){return mS||(hS||=B(async()=>{let{invoke:e}=await import(`./core-CbiB8nbm.js`);return{invoke:e}},__vite__mapDeps([11,12])).then(({invoke:e})=>e(`list_system_fonts`)).then(e=>(mS=e,e)).catch(()=>[]),hS)}function _S(){if(pS(),Rt()){gS().then(CS);return}cS.value&&p.preloadWebFontFamilies()}function vS(){return Rt()?`granted`:p.localAccessState()}async function yS(){return Rt()||await p.requestLocalFontAccess(),wS()}async function bS(){return pS(),Rt()?aS():{count:0,byteLength:0,updatedAt:null}}async function xS(){pS(),Rt()&&await oS()}async function SS(){return p.ensureFallbackPack()}function CS(e){if(!(typeof document>`u`))for(let{family:t}of e){let e=new FontFace(t,`local("${t}")`);document.fonts.add(e)}}async function wS(){if(pS(),Rt()){let[e,t]=await Promise.all([gS(),p.listFamilyOptions()]),n=new Map(t.map(e=>[e.family,e]));for(let t of e)n.set(t.family,{family:t.family,source:`local`});return[...n.values()].sort((e,t)=>e.family.localeCompare(t.family))}return fS(),p.listFamilyOptions()}async function TS(){return pS(),Rt()?gS():[]}async function ES(e,t,n){p.blockNodesUntilFontsResolve(t);try{let n=p.generation(),r=p.collectFontKeys(e,t),i=h(e,t),{characters:a}=i;await Promise.all(r.map(([e,t])=>kS(e,t,a)));let o=Me(i);if(o.length>0){let n=await p.ensureFallbackPack(o,a);Object.values(n).some(e=>e.length>0)&&DS(e,t)}else p.generation()!==n&&DS(e,t);return p.generation()!==n||o.length>0}finally{p.unblockNodes(t),n?.invalidateAllPictures()}}function DS(e,t){let n=t=>{let r=e.getNode(t);if(r){r.type===`TEXT`&&(r.textPicture=null);for(let e of r.childIds)n(e)}};for(let e of t)n(e)}async function OS(e,t=`Regular`){if(!Rt())return null;try{let{invoke:n}=await B(async()=>{let{invoke:e}=await import(`./core-CbiB8nbm.js`);return{invoke:e}},__vite__mapDeps([11,12])),r=await n(`load_system_font`,{family:e,style:t});return r?.length?new Uint8Array(r).buffer:null}catch{return null}}async function kS(e,t=`Regular`,n=``){pS();let r=await p.loadFont(e,t,n);return r||fS(),r}var AS=(e,t)=>t.some(t=>e instanceof t),jS,MS;function NS(){return jS||=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]}function PS(){return MS||=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey]}var FS=new WeakMap,IS=new WeakMap,LS=new WeakMap;function RS(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`success`,i),e.removeEventListener(`error`,a)},i=()=>{t(WS(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener(`success`,i),e.addEventListener(`error`,a)});return LS.set(t,e),t}function zS(e){if(FS.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`complete`,i),e.removeEventListener(`error`,a),e.removeEventListener(`abort`,a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException(`AbortError`,`AbortError`)),r()};e.addEventListener(`complete`,i),e.addEventListener(`error`,a),e.addEventListener(`abort`,a)});FS.set(e,t)}var BS={get(e,t,n){if(e instanceof IDBTransaction){if(t===`done`)return FS.get(e);if(t===`store`)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return WS(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t===`done`||t===`store`)?!0:t in e}};function VS(e){BS=e(BS)}function HS(e){return PS().includes(e)?function(...t){return e.apply(GS(this),t),WS(this.request)}:function(...t){return WS(e.apply(GS(this),t))}}function US(e){return typeof e==`function`?HS(e):(e instanceof IDBTransaction&&zS(e),AS(e,NS())?new Proxy(e,BS):e)}function WS(e){if(e instanceof IDBRequest)return RS(e);if(IS.has(e))return IS.get(e);let t=US(e);return t!==e&&(IS.set(e,t),LS.set(t,e)),t}var GS=e=>LS.get(e);function KS(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){let o=indexedDB.open(e,t),s=WS(o);return r&&o.addEventListener(`upgradeneeded`,e=>{r(WS(o.result),e.oldVersion,e.newVersion,WS(o.transaction),e)}),n&&o.addEventListener(`blocked`,e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener(`close`,()=>a()),i&&e.addEventListener(`versionchange`,e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}var qS=[`get`,`getKey`,`getAll`,`getAllKeys`,`count`],JS=[`put`,`add`,`delete`,`clear`],YS=new Map;function XS(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t==`string`))return;if(YS.get(t))return YS.get(t);let n=t.replace(/FromIndex$/,``),r=t!==n,i=JS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qS.includes(n)))return;let a=async function(e,...t){let a=this.transaction(e,i?`readwrite`:`readonly`),o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return YS.set(t,a),a}VS(e=>({...e,get:(t,n,r)=>XS(t,n)||e.get(t,n,r),has:(t,n)=>!!XS(t,n)||e.has(t,n)}));var ZS=[`continue`,`continuePrimaryKey`,`advance`],QS={},$S=new WeakMap,eC=new WeakMap,tC={get(e,t){if(!ZS.includes(t))return e[t];let n=QS[t];return n||=QS[t]=function(...e){$S.set(this,eC.get(this)[t](...e))},n}};async function*nC(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;let n=new Proxy(t,tC);for(eC.set(n,t),LS.set(n,GS(t));t;)yield n,t=await($S.get(n)||t.continue()),$S.delete(n)}function rC(e,t){return t===Symbol.asyncIterator&&AS(e,[IDBIndex,IDBObjectStore,IDBCursor])||t===`iterate`&&AS(e,[IDBIndex,IDBObjectStore])}VS(e=>({...e,get(t,n,r){return rC(t,n)?nC:e.get(t,n,r)},has(t,n){return rC(t,n)||e.has(t,n)}}));var iC=class extends Error{constructor(e,t){super(t),this.code=e,this.name=`CredentialStoreError`}},aC=/^[a-z0-9._-]{1,64}$/,oC=16*1024;function sC(e){let t=[e.integrationId,e.profileId,e.field];if(!t.every(e=>aC.test(e)))throw new iC(`invalid-reference`,`Credential reference is invalid`);return`v1:${t.join(`:`)}`}function cC(e){if(!e||new TextEncoder().encode(e).byteLength>oC)throw new iC(`invalid-value`,`Credential value is invalid`)}function lC(e,t,n=`default`){let r={integrationId:e,profileId:n,field:t};return sC(r),r}var uC=`open-pencil-credentials`,dC=1,fC=`master-key`,pC=12;function mC(e){let t=new Uint8Array(e.byteLength);return t.set(e),t.buffer}var hC=class{backend=`browser`;#e;#t;constructor(){this.#e=KS(uC,dC,{upgrade(e){e.objectStoreNames.contains(`credentials`)||e.createObjectStore(`credentials`),e.objectStoreNames.contains(`metadata`)||e.createObjectStore(`metadata`)}})}async availability(){try{return await this.#e,`available`}catch{return`unavailable`}}async status(e){return await this.read(e)===null?`missing`:`configured`}async read(e){let t=sC(e);try{let e=await this.#e,n=await e.get(`credentials`,t);if(!n)return null;let r=await this.#n(e),i=await crypto.subtle.decrypt({name:`AES-GCM`,iv:n.iv,additionalData:this.#i(t)},r,n.ciphertext);return new TextDecoder().decode(i)}catch(e){throw this.#a(e)}}async write(e,t){cC(t);let n=sC(e);try{let e=await this.#e,r=await this.#n(e),i=mC(crypto.getRandomValues(new Uint8Array(pC))),a=await crypto.subtle.encrypt({name:`AES-GCM`,iv:i,additionalData:this.#i(n)},r,mC(new TextEncoder().encode(t)));await e.put(`credentials`,{iv:i,ciphertext:a},n)}catch(e){throw this.#a(e)}}async remove(e){try{await(await this.#e).delete(`credentials`,sC(e))}catch(e){throw this.#a(e)}}#n(e){return this.#t??=this.#r(e),this.#t}async#r(e){let t=await e.get(`metadata`,fC);if(t)return t;let n=await crypto.subtle.generateKey({name:`AES-GCM`,length:256},!1,[`encrypt`,`decrypt`]);return await e.put(`metadata`,n,fC),n}#i(e){return mC(new TextEncoder().encode(e))}#a(e){return e instanceof iC?e:new iC(`failed`,`Browser credential operation failed`)}},gC=class{backend=`memory`;#e=new Map;async availability(){return`available`}async status(e){return this.#e.has(sC(e))?`configured`:`missing`}async read(e){return this.#e.get(sC(e))??null}async write(e,t){cC(t),this.#e.set(sC(e),t)}async remove(e){this.#e.delete(sC(e))}},_C=class{backend=`native`;async availability(){return this.#e(`credential_store_availability`)}async status(e){return this.#e(`credential_status`,{reference:e})}async read(e){return this.#e(`credential_read`,{reference:e})}async write(e,t){await this.#e(`credential_write`,{reference:e,value:t})}async remove(e){await this.#e(`credential_remove`,{reference:e})}async#e(e,t){try{return await Vt(e,t)}catch(e){let t=e;throw new iC(t.code??`failed`,t.message??`System credential operation failed`)}}};function vC(e){return{manager:{get backend(){return e.backend},availability:()=>e.availability(),status:t=>e.status(t),set:(t,n)=>e.write(t,n),clear:t=>e.remove(t)},resolver:{resolve:t=>e.read(t)}}}var yC=`open-pencil:credential-persistence`,bC=[`open-pencil:openrouter-api-key`,`open-pencil:pexels-api-key`,`open-pencil:unsplash-access-key`];function xC(){return`window`in globalThis?window.localStorage:null}function SC(){let e=xC();if(!e)return!1;if(bC.some(t=>!!e.getItem(t)))return!0;for(let t=0;t<e.length;t++)if(e.key(t)?.startsWith(`open-pencil:ai-key:`))return!0;return!1}function CC(){let e=xC();return e?e.getItem(yC)!==`session`:!1}function wC(e){let t=xC();t&&t.setItem(yC,e?`remembered`:`session`)}var TC=class{#e;constructor(e){this.#e=e}get backend(){return this.#e.backend}availability(){return this.#e.availability()}status(e){return this.#e.status(e)}read(e){return this.#e.read(e)}write(e,t){return this.#e.write(e,t)}remove(e){return this.#e.remove(e)}async switchTo(e,t,n={}){let r=this.#e;if(e.backend===r.backend)return;let i=await Promise.all(t.map(e=>r.read(e)));try{for(let[n,r]of t.entries()){let t=i[n];if(t!==null&&(await e.write(r,t),await e.read(r)!==t))throw new iC(`failed`,`Credential copy verification failed`)}}catch(n){throw await Promise.allSettled(t.map(t=>e.remove(t))),n}if(n.clearPrevious)try{await Promise.all(t.map(e=>r.remove(e)))}catch(n){throw(await Promise.allSettled(t.map(async(e,t)=>{let n=i[t];n!==null&&await r.write(e,n)}))).every(e=>e.status===`fulfilled`)?await Promise.allSettled(t.map(t=>e.remove(t))):this.#e=e,n}this.#e=e}},EC=SC();EC&&wC(!0);var DC=o(!z&&(CC()||EC));function OC(){return z?new _C:DC.value?new hC:new gC}var kC=new TC(OC()),AC=vC(kC);async function jC(e,t){if(z)return;let n=e?new hC:new gC;await kC.switchTo(n,t,{clearPrevious:!e}),DC.value=e,wC(e)}var MC=class{#e;constructor(e){let t=e.map(e=>[e.id,e]);if(new Set(t.map(([e])=>e)).size!==t.length)throw Error(`Storage provider IDs must be unique`);this.#e=new Map(t)}list(){return[...this.#e.values()]}get(e){let t=this.#e.get(e);if(!t)throw Error(`Unknown storage provider: ${e}`);return t}createAdapter(e,t){let n=this.get(e),r=new Set(n.credentialFields.map(e=>e.id)),i=t.profileId??`default`;return n.createAdapter({preferences:t.preferences,resolveCredential(n){return r.has(n)?t.credentials.resolve(lC(e,n,i)):Promise.reject(Error(`Unknown credential field for ${e}: ${n}`))}})}};function NC(e){return e}var PC=`open_pencil_storage`,FC=`${PC}/.openpencil-namespace`,IC=`${PC}/canvases/`;function LC(e){return`${IC}${e}.fig`}function RC(e){return`${IC}${e}.meta.json`}function zC(e){return`${IC}${e}.thumb.jpg`}function BC(e){if(!e.startsWith(IC)||!e.endsWith(`.fig`))return null;let t=e.slice(IC.length,-4);return!t||t.includes(`/`)?null:t}var VC=JSON.stringify({app:`open-pencil`,version:1}),HC=new TextEncoder,UC={appstream2:`appstream`,cloudhsmv2:`cloudhsm`,email:`ses`,marketplace:`aws-marketplace`,mobile:`AWSMobileHubService`,pinpoint:`mobiletargeting`,queue:`sqs`,"git-codecommit":`codecommit`,"mturk-requester-sandbox":`mturk-requester`,"personalize-runtime":`personalize`},WC=new Set([`authorization`,`content-type`,`content-length`,`user-agent`,`presigned-expires`,`expect`,`x-amzn-trace-id`,`range`,`connection`]),GC=class{constructor({accessKeyId:e,secretAccessKey:t,sessionToken:n,service:r,region:i,cache:a,retries:o,initRetryMs:s}){if(e==null)throw TypeError(`accessKeyId is a required option`);if(t==null)throw TypeError(`secretAccessKey is a required option`);this.accessKeyId=e,this.secretAccessKey=t,this.sessionToken=n,this.service=r,this.region=i,this.cache=a||new Map,this.retries=o??10,this.initRetryMs=s||50}async sign(e,t){if(e instanceof Request){let{method:n,url:r,headers:i,body:a}=e;t=Object.assign({method:n,url:r,headers:i},t),t.body==null&&i.has(`Content-Type`)&&(t.body=a!=null&&i.has(`X-Amz-Content-Sha256`)?a:await e.clone().arrayBuffer()),e=r}let n=new KC(Object.assign({url:e.toString()},t,this,t&&t.aws)),r=Object.assign({},t,await n.sign());delete r.aws;try{return new Request(r.url.toString(),r)}catch(e){if(e instanceof TypeError)return new Request(r.url.toString(),Object.assign({duplex:`half`},r));throw e}}async fetch(e,t){for(let n=0;n<=this.retries;n++){let r=fetch(await this.sign(e,t));if(n===this.retries)return r;let i=await r;if(i.status<500&&i.status!==429)return i;await new Promise(e=>setTimeout(e,Math.random()*this.initRetryMs*2**n))}throw Error(`An unknown error occurred, ensure retries is not negative`)}},KC=class{constructor({method:e,url:t,headers:n,body:r,accessKeyId:i,secretAccessKey:a,sessionToken:o,service:s,region:c,cache:l,datetime:u,signQuery:d,appendSessionToken:f,allHeaders:p,singleEncode:m}){if(t==null)throw TypeError(`url is a required option`);if(i==null)throw TypeError(`accessKeyId is a required option`);if(a==null)throw TypeError(`secretAccessKey is a required option`);this.method=e||(r?`POST`:`GET`),this.url=new URL(t),this.headers=new Headers(n||{}),this.body=r,this.accessKeyId=i,this.secretAccessKey=a,this.sessionToken=o;let h,g;(!s||!c)&&([h,g]=QC(this.url,this.headers)),this.service=s||h||``,this.region=c||g||`us-east-1`,this.cache=l||new Map,this.datetime=u||new Date().toISOString().replace(/[:-]|\.\d{3}/g,``),this.signQuery=d,this.appendSessionToken=f||this.service===`iotdevicegateway`,this.headers.delete(`Host`),this.service===`s3`&&!this.signQuery&&!this.headers.has(`X-Amz-Content-Sha256`)&&this.headers.set(`X-Amz-Content-Sha256`,`UNSIGNED-PAYLOAD`);let _=this.signQuery?this.url.searchParams:this.headers;if(_.set(`X-Amz-Date`,this.datetime),this.sessionToken&&!this.appendSessionToken&&_.set(`X-Amz-Security-Token`,this.sessionToken),this.signableHeaders=[`host`,...this.headers.keys()].filter(e=>p||!WC.has(e)).sort(),this.signedHeaders=this.signableHeaders.join(`;`),this.canonicalHeaders=this.signableHeaders.map(e=>e+`:`+(e===`host`?this.url.host:(this.headers.get(e)||``).replace(/\s+/g,` `))).join(`
`),this.credentialString=[this.datetime.slice(0,8),this.region,this.service,`aws4_request`].join(`/`),this.signQuery&&(this.service===`s3`&&!_.has(`X-Amz-Expires`)&&_.set(`X-Amz-Expires`,`86400`),_.set(`X-Amz-Algorithm`,`AWS4-HMAC-SHA256`),_.set(`X-Amz-Credential`,this.accessKeyId+`/`+this.credentialString),_.set(`X-Amz-SignedHeaders`,this.signedHeaders)),this.service===`s3`)try{this.encodedPath=decodeURIComponent(this.url.pathname.replace(/\+/g,` `))}catch{this.encodedPath=this.url.pathname}else this.encodedPath=this.url.pathname.replace(/\/+/g,`/`);m||(this.encodedPath=encodeURIComponent(this.encodedPath).replace(/%2F/g,`/`)),this.encodedPath=ZC(this.encodedPath);let v=new Set;this.encodedSearch=[...this.url.searchParams].filter(([e])=>{if(!e)return!1;if(this.service===`s3`){if(v.has(e))return!1;v.add(e)}return!0}).map(e=>e.map(e=>ZC(encodeURIComponent(e)))).sort(([e,t],[n,r])=>e<n?-1:e>n?1:t<r?-1:t>r?1:0).map(e=>e.join(`=`)).join(`&`)}async sign(){return this.signQuery?(this.url.searchParams.set(`X-Amz-Signature`,await this.signature()),this.sessionToken&&this.appendSessionToken&&this.url.searchParams.set(`X-Amz-Security-Token`,this.sessionToken)):this.headers.set(`Authorization`,await this.authHeader()),{method:this.method,url:this.url,headers:this.headers,body:this.body}}async authHeader(){return[`AWS4-HMAC-SHA256 Credential=`+this.accessKeyId+`/`+this.credentialString,`SignedHeaders=`+this.signedHeaders,`Signature=`+await this.signature()].join(`, `)}async signature(){let e=this.datetime.slice(0,8),t=[this.secretAccessKey,e,this.region,this.service].join(),n=this.cache.get(t);return n||(n=await qC(await qC(await qC(await qC(`AWS4`+this.secretAccessKey,e),this.region),this.service),`aws4_request`),this.cache.set(t,n)),XC(await qC(n,await this.stringToSign()))}async stringToSign(){return[`AWS4-HMAC-SHA256`,this.datetime,this.credentialString,XC(await JC(await this.canonicalString()))].join(`
`)}async canonicalString(){return[this.method.toUpperCase(),this.encodedPath,this.encodedSearch,this.canonicalHeaders+`
`,this.signedHeaders,await this.hexBodyHash()].join(`
`)}async hexBodyHash(){let e=this.headers.get(`X-Amz-Content-Sha256`)||(this.service===`s3`&&this.signQuery?`UNSIGNED-PAYLOAD`:null);if(e==null){if(this.body&&typeof this.body!=`string`&&!(`byteLength`in this.body))throw Error(`body must be a string, ArrayBuffer or ArrayBufferView, unless you include the X-Amz-Content-Sha256 header`);e=XC(await JC(this.body||``))}return e}};async function qC(e,t){let n=await crypto.subtle.importKey(`raw`,typeof e==`string`?HC.encode(e):e,{name:`HMAC`,hash:{name:`SHA-256`}},!1,[`sign`]);return crypto.subtle.sign(`HMAC`,n,HC.encode(t))}async function JC(e){return crypto.subtle.digest(`SHA-256`,typeof e==`string`?HC.encode(e):e)}var YC=[`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`a`,`b`,`c`,`d`,`e`,`f`];function XC(e){let t=new Uint8Array(e),n=``;for(let e=0;e<t.length;e++){let r=t[e];n+=YC[r>>>4&15],n+=YC[r&15]}return n}function ZC(e){return e.replace(/[!'()*]/g,e=>`%`+e.charCodeAt(0).toString(16).toUpperCase())}function QC(e,t){let{hostname:n,pathname:r}=e;if(n.endsWith(`.on.aws`)){let e=n.match(/^[^.]{1,63}\.lambda-url\.([^.]{1,63})\.on\.aws$/);return e==null?[``,``]:[`lambda`,e[1]||``]}if(n.endsWith(`.r2.cloudflarestorage.com`))return[`s3`,`auto`];if(n.endsWith(`.backblazeb2.com`)){let e=n.match(/^(?:[^.]{1,63}\.)?s3\.([^.]{1,63})\.backblazeb2\.com$/);return e==null?[``,``]:[`s3`,e[1]||``]}let i=n.replace(`dualstack.`,``).match(/([^.]{1,63})\.(?:([^.]{0,63})\.)?amazonaws\.com(?:\.cn)?$/),a=i&&i[1]||``,o=i&&i[2];if(o===`us-gov`)o=`us-gov-west-1`;else if(o===`s3`||o===`s3-accelerate`)o=`us-east-1`,a=`s3`;else if(a===`iot`)a=n.startsWith(`iot.`)?`execute-api`:n.startsWith(`data.jobs.iot.`)?`iot-jobs-data`:r===`/mqtt`?`iotdevicegateway`:`iotdata`;else if(a===`autoscaling`){let e=(t.get(`X-Amz-Target`)||``).split(`.`)[0];e===`AnyScaleFrontendService`?a=`application-autoscaling`:e===`AnyScaleScalingPlannerFrontendService`&&(a=`autoscaling-plans`)}else o==null&&a.startsWith(`s3-`)?(o=a.slice(3).replace(/^fips-|^external-1/,``),a=`s3`):a.endsWith(`-fips`)?a=a.slice(0,-5):o&&/-\d$/.test(a)&&!/-\d$/.test(o)&&([a,o]=[o,a]);return[UC[a]||a,o||``]}var $C=2e4;function ew(e){let t=new AbortController,n=setTimeout(()=>t.abort(),$C),r=e?.signal;return r&&(r.aborted?t.abort():r.addEventListener(`abort`,()=>t.abort(),{once:!0})),{signal:t.signal,cleanup:()=>clearTimeout(n)}}async function tw(e,t){let{signal:n,cleanup:r}=ew(t);try{if(Rt()){let{tauriFetch:r}=await B(async()=>{let{tauriFetch:e}=await import(`./http-fzHsG18k.js`);return{tauriFetch:e}},__vite__mapDeps([21,22,5]));return await r(e,{...t,signal:n})}return e instanceof Request?await fetch(new Request(e,{signal:n})):await fetch(e,{...t,signal:n})}catch(e){throw n.aborted?Error(`Storage request timed out. Check the endpoint URL, network, and bucket CORS settings.`):e}finally{r()}}function nw(e,t=`us-east-1`){let n=e.trim();if(!n)return t;let r;try{let e=n.startsWith(`http://`)||n.startsWith(`https://`)?n:`https://${n}`;r=new URL(e).hostname.toLowerCase()}catch{return t}let i=r.match(/^s3\.([a-z0-9-]+)\.backblazeb2\.com$/);if(i?.[1])return i[1];let a=r.match(/^s3[.-]([a-z0-9-]+)\.amazonaws\.com$/);if(a?.[1]&&a[1]!==`dualstack`&&a[1]!==`control`)return a[1];let o=r.match(/\.s3[.-]([a-z0-9-]+)\.amazonaws\.com$/);return o?.[1]&&o[1]!==`dualstack`?o[1]:r.endsWith(`.r2.cloudflarestorage.com`)||r===`r2.cloudflarestorage.com`?`auto`:t}var rw=Mt();function iw(e){try{return new rw.DOMParser({onError:(e,t)=>{if(e!==`warning`)throw Error(t)}}).parseFromString(e,`application/xml`)}catch{return null}}function aw(e,t){return Array.from(e.getElementsByTagNameNS(`*`,t))}function ow(e,t){return aw(e,t)[0]?.textContent??null}function sw(e,t){let n=iw(e),r=n?ow(n,`Code`):null;return{message:(n?ow(n,`Message`):null)??(e.trim()?e.trim().slice(0,200):`S3 request failed with status ${t}`),code:r}}function cw(e){let t=iw(e);return t?{objects:aw(t,`Contents`).flatMap(e=>{let t=ow(e,`Key`);if(!t)return[];let n=ow(e,`Size`),r=n?Number(n):null;return[{key:t,lastModified:ow(e,`LastModified`),size:Number.isFinite(r)?r:null}]}),isTruncated:ow(t,`IsTruncated`)?.trim().toLowerCase()===`true`,nextContinuationToken:ow(t,`NextContinuationToken`)}:{objects:[],isTruncated:!1,nextContinuationToken:null}}function lw(e){return e.region?.trim()||nw(e.endpoint)}var uw=class extends Error{status;code;constructor(e,t,n=null){super(t),this.name=`S3HttpError`,this.status=e,this.code=n}};function dw(e){let t=e.trim().replace(/\/+$/,``);if(!t)throw Error(`S3 endpoint is required`);return t.startsWith(`http://`)||t.startsWith(`https://`)?t:`https://${t}`}function fw(e,t){let n=dw(e.endpoint),r=t.split(`/`).map(e=>encodeURIComponent(e)).join(`/`);return`${n}/${encodeURIComponent(e.bucket)}/${r}`}function pw(e){return new GC({accessKeyId:e.accessKeyId,secretAccessKey:e.secretAccessKey,region:lw(e),service:`s3`})}async function mw(e){return sw(await e.text().catch(()=>``),e.status)}function hw(e){return e==null?null:typeof e==`string`?new TextEncoder().encode(e).byteLength:e instanceof ArrayBuffer||ArrayBuffer.isView(e)?e.byteLength:typeof Blob<`u`&&e instanceof Blob?e.size:null}function gw(e,t,n,r,i){return new Promise((a,o)=>{let s=new XMLHttpRequest;s.open(t,e),n.forEach((e,t)=>{/^(content-length|host)$/i.test(t)||s.setRequestHeader(t,e)}),s.responseType=`text`,s.upload.onprogress=e=>{i({sentBytes:e.loaded,totalBytes:e.lengthComputable?e.total:null})},s.onload=()=>a(new Response(s.responseText,{status:s.status})),s.onerror=()=>o(TypeError(`Failed to fetch`)),s.send(r)})}async function _w(e,t,n={},r){let i=pw(e),a=hw(n.body??null),o=new Headers(n.headers);a!=null&&!o.has(`Content-Length`)&&o.set(`Content-Length`,String(a));let s=await i.sign(t,{...n,headers:o,credentials:`omit`}),c;try{c=r&&typeof XMLHttpRequest<`u`?await gw(s.url,s.method,s.headers,n.body??void 0,r):await tw(s.url,{method:s.method,headers:s.headers,body:n.body??void 0,credentials:`omit`})}catch(e){let{CloudCORSError:t,isLikelyCORSOrNetworkError:n,formatBrowserCORSHelpMessage:r}=await B(async()=>{let{CloudCORSError:e,isLikelyCORSOrNetworkError:t,formatBrowserCORSHelpMessage:n}=await import(`./cors-DicE5pcj.js`);return{CloudCORSError:e,isLikelyCORSOrNetworkError:t,formatBrowserCORSHelpMessage:n}},__vite__mapDeps([23,24,8,25]));throw n(e)?new t(r()):e}if(c.ok||c.status===404)return c;let{message:l,code:u}=await mw(c);throw new uw(c.status,l,u)}async function vw(e,t){return(await _w(e,fw(e,t),{method:`HEAD`})).status!==404}async function yw(e,t){let n=await _w(e,fw(e,t),{method:`HEAD`});if(n.status===404)return null;let r=n.headers.get(`content-length`);if(r==null)return null;let i=Number(r);return Number.isSafeInteger(i)&&i>=0?i:null}async function bw(e,t,n,r){if(!Number.isSafeInteger(n)||n<0||!Number.isSafeInteger(r)||r<=n)throw Error(`Invalid S3 byte range`);let i=await _w(e,fw(e,t),{method:`GET`,headers:{Range:`bytes=${n}-${r-1}`}});if(i.status===404)return null;if(i.status!==206)throw Error(`Storage provider did not honor the thumbnail byte range`);return new Uint8Array(await i.arrayBuffer())}async function xw(e,t,n,r,i){let a=typeof n==`string`?new TextEncoder().encode(n):n,o=a.buffer.slice(a.byteOffset,a.byteOffset+a.byteLength),s=await _w(e,fw(e,t),{method:`PUT`,headers:{"Content-Type":r},body:o},i);if(!s.ok)throw new uw(s.status,`Failed to upload ${t}`)}async function Sw(e,t,n){let r=await _w(e,fw(e,t),{method:`GET`});if(r.status===404)return null;if(!n||!r.body)return new Uint8Array(await r.arrayBuffer());let i=Number(r.headers.get(`content-length`)),a=Number.isFinite(i)&&i>0?i:null,o=r.body.getReader(),s=[],c=0;for(;;){let{done:e,value:t}=await o.read();if(e)break;s.push(t),c+=t.byteLength,n({receivedBytes:c,totalBytes:a})}let l=new Uint8Array(c),u=0;for(let e of s)l.set(e,u),u+=e.byteLength;return l}async function Cw(e,t){let n=await _w(e,fw(e,t),{method:`DELETE`});if(!n.ok&&n.status!==404)throw new uw(n.status,`Failed to delete ${t}`)}async function ww(e,t){let n=dw(e.endpoint),r=[],i=null;for(let a=0;a<50;a++){let o=new URLSearchParams({"list-type":`2`,prefix:t,"max-keys":`1000`});i&&o.set(`continuation-token`,i);let s=await _w(e,`${n}/${encodeURIComponent(e.bucket)}?${o.toString()}`,{method:`GET`});if(!s.ok)throw new uw(s.status,`Failed to list objects`);let c=cw(await s.text());if(r.push(...c.objects),!c.isTruncated||!c.nextContinuationToken)break;if(a===49)throw Error(`S3 listing exceeded the 50,000-object safety limit`);i=c.nextContinuationToken}return r}var Tw=`endpoint`,Ew=`bucket`,Dw=`region`,Ow=`access-key-id`,kw=`secret-access-key`;function Aw(e,t){let n=e.preferences[t]?.trim();if(!n)throw Error(`S3 ${t} is required`);return n}async function jw(e){let[t,n]=await Promise.all([e.resolveCredential(Ow),e.resolveCredential(kw)]);if(!t||!n)throw Error(`S3 credentials are required`);let r=e.preferences[Dw]?.trim();return{endpoint:Aw(e,Tw),bucket:Aw(e,Ew),accessKeyId:t,secretAccessKey:n,...r?{region:r}:{}}}function Mw(e,t){if(!e)return{metadata:t,authoritative:!1};try{let n=JSON.parse(new TextDecoder().decode(e)),r=typeof n.name==`string`&&n.name.trim()?n.name:null,i=typeof n.updatedAt==`string`&&n.updatedAt?n.updatedAt:null;return{metadata:{name:r??t.name,updatedAt:i??t.updatedAt},authoritative:r!==null&&i!==null}}catch{return{metadata:t,authoritative:!1}}}function Nw(e,t){return t?Ht():e instanceof Error?e.message:String(e)}async function Pw(e){if(!await vw(e,FC))try{await xw(e,FC,VC,`application/json`)}catch(e){throw e instanceof uw&&(e.status===403||e.status===401)?Error(`Cannot write to this bucket. Check access permissions and bucket name.`):e}}function Fw(e){return{async testConnection(){let t=await jw(e);try{await Pw(t),await ww(t,IC)}catch(e){let t=e instanceof Ut||!Rt()&&Wt(e);return{ok:!1,message:Nw(e,t),corsApplied:!1,isCORSFailure:t,corsError:null}}return{ok:!0,message:`Connected. Storage namespace is ready.`,corsApplied:!1,isCORSFailure:!1,corsError:null}},async listDocuments(){let t=await jw(e),n=(await ww(t,IC)).map(e=>{let t=BC(e.key);return t?{id:t,lastModified:e.lastModified}:null}).filter(e=>e!==null),r=[];for(let e=0;e<n.length;e+=12){let i=n.slice(e,e+12);r.push(...await Promise.all(i.map(async({id:e,lastModified:n})=>{let r={name:e,updatedAt:n??new Date(0).toISOString()},{metadata:i,authoritative:a}=Mw(await Sw(t,RC(e)).catch(t=>(console.warn(`[Storage] Document metadata fetch failed:`,e,t),null)),r);return{id:e,...i,metadataAuthoritative:a}})))}return r.sort((e,t)=>t.updatedAt.localeCompare(e.updatedAt))},async getDocument(t,n){let r=await Sw(await jw(e),LC(t),n?e=>n({transferredBytes:e.receivedBytes,totalBytes:e.totalBytes}):void 0);if(!r)throw Error(`Document not found: ${t}`);return r},async putDocument(t,n,r,i){let a=await jw(e);await xw(a,LC(t),n,`application/octet-stream`,i?e=>i({transferredBytes:e.sentBytes,totalBytes:e.totalBytes}):void 0),await xw(a,RC(t),JSON.stringify({name:r.name,updatedAt:r.updatedAt||new Date().toISOString()}),`application/json`)},async getDocumentMetadata(t){let n=await Sw(await jw(e),RC(t));if(!n)return null;let r=Mw(n,{name:t,updatedAt:new Date(0).toISOString()});return r.authoritative?r.metadata:null},async deleteDocument(t){let n=await jw(e),r=(await Promise.allSettled([Cw(n,LC(t)),Cw(n,RC(t)),Cw(n,zC(t))])).find(e=>e.status===`rejected`);if(r)throw r.reason},async getUsage(){let t=await ww(await jw(e),`${PC}/`);return{bytesUsed:t.reduce((e,t)=>e+(t.size??0),0),objectCount:t.length,documentCount:t.filter(e=>BC(e.key)).length}},async putThumbnail(t,n){await xw(await jw(e),zC(t),n,`image/jpeg`)},async getThumbnail(t){let n=await jw(e),r=LC(t),i=await yw(n,r);return i==null?null:Mp({size:i,async read(e,t){return await bw(n,r,e,t)??new Uint8Array}})}}}var Iw=new MC([NC({id:`s3-compatible`,label:`S3 compatible`,description:`AWS S3, Backblaze B2, Cloudflare R2, MinIO, and compatible storage`,preferenceFields:[{id:`endpoint`,label:`Endpoint`,kind:`url`,required:!0},{id:`bucket`,label:`Bucket`,kind:`text`,required:!0},{id:`region`,label:`Region`,kind:`text`}],credentialFields:[{id:`access-key-id`,label:`Access key ID`,required:!0},{id:`secret-access-key`,label:`Secret access key`,required:!0}],createAdapter:Fw})]),Lw=d(`open-pencil:storage:provider`,`s3-compatible`),Rw=d(`open-pencil:storage:preferences`,{});function zw(e){return{...Rw.value[e]}}function Bw(e,t,n){if(!Iw.get(e).preferenceFields.some(e=>e.id===t))throw Error(`Unknown preference field for ${e}: ${t}`);Rw.value={...Rw.value,[e]:{...Rw.value[e],[t]:n.trim()}}}function Vw(e){let t=Iw.get(e),n=zw(e);return t.preferenceFields.every(e=>!e.required||!!n[e.id]?.trim())}function Hw(e,t=`default`){return Iw.get(e).credentialFields.map(n=>lC(e,n.id,t))}async function Uw(e,t=`default`){let n=Iw.get(e),r=await Promise.all(n.credentialFields.map(async n=>{let r=await AC.manager.status(lC(e,n.id,t));return[n.id,r]}));return Object.fromEntries(r)}function Ww(e=Lw.value,t=`default`){return Iw.createAdapter(e,{preferences:zw(e),credentials:AC.resolver,profileId:t})}var Gw=c();function Kw(){return Gw}function qw(e){Gw.value=e,r(Gw)}function Jw(){if(!Gw.value)throw Error(`Editor store not provided`);return Gw.value}function Yw(){return Gw.value??null}var Xw=new Proxy({},{get(e,t){return Reflect.get(Jw(),t)}});function Zw(){return Xw}var Qw=null;function $w(){return window.openPencil??={},window.openPencil.getStore??=()=>{if(!Qw)throw Error(`OpenPencil store not initialized`);return Qw},window.openPencil}function eT(e){Qw=e,$w()}function tT(e){$w().setChatTransport=e}function nT(e){$w().openFile=e}function rT(e,t,n){return new Promise((r,i)=>{if(typeof indexedDB>`u`){i(Error(`IndexedDB is not available`));return}let a=indexedDB.open(e,t);a.onerror=()=>i(a.error??Error(`Failed to open ${e}`)),a.onblocked=()=>i(Error(`Opening ${e} blocked by another tab's connection`)),a.onsuccess=()=>r(a.result),a.onupgradeneeded=()=>n(a.result)})}function iT(e){return new Promise((t,n)=>{e.onsuccess=()=>t(e.result),e.onerror=()=>n(e.error??Error(`IndexedDB request failed`))})}function aT(e){return new Promise((t,n)=>{e.oncomplete=()=>t(),e.onerror=()=>n(e.error??Error(`IndexedDB transaction failed`)),e.onabort=()=>n(e.error??Error(`IndexedDB transaction aborted`))})}function oT(e,t){return(t?e:e.filter(e=>!e.tombstoned)).sort((e,t)=>t.updatedAt.localeCompare(e.updatedAt))}function sT(e,t,n){return{id:e.id,providerId:e.providerId,name:e.name,updatedAt:e.updatedAt??new Date().toISOString(),revision:e.revision??(t?t.revision+1:1),syncStatus:e.syncStatus??`pending`,lastSyncedAt:t?.lastSyncedAt??null,lastSyncError:e.syncStatus===`synced`?null:t?.lastSyncError??null,tombstoned:t?.tombstoned??!1,hasFig:!0,hasThumb:n,figSize:e.figBytes.byteLength,lastOpenedAt:t?.lastOpenedAt}}function cT(e,t){return{id:e.id,providerId:e.providerId,name:e.name,updatedAt:e.updatedAt,revision:e.revision??t?.revision??1,syncStatus:e.syncStatus,lastSyncedAt:e.lastSyncedAt,lastSyncError:e.lastSyncError,tombstoned:!1,hasFig:e.hasFig??t?.hasFig??!1,hasThumb:e.hasThumb??t?.hasThumb??!1}}var lT=`open-pencil-cloud-local`,uT=1,dT=`meta`,fT=`fig`,pT=`thumb`;function mT(){return rT(lT,uT,e=>{e.objectStoreNames.contains(dT)||e.createObjectStore(dT,{keyPath:`id`}),e.objectStoreNames.contains(fT)||e.createObjectStore(fT),e.objectStoreNames.contains(pT)||e.createObjectStore(pT)})}async function hT(e){return e==null?null:e instanceof ArrayBuffer||e instanceof Uint8Array?new Uint8Array(e):e instanceof Blob?new Uint8Array(await e.arrayBuffer()):null}function gT(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)}async function _T(e,t){return await iT(e.get(t))??null}function vT(){let e=null;function t(){return e||=mT(),e}async function n(e,n){let r=(await t()).transaction(e,`readonly`),i=await iT(r.objectStore(e).get(n));return await aT(r),hT(i)}return{async listMetas(e=!1){let n=(await t()).transaction(dT,`readonly`),r=await iT(n.objectStore(dT).getAll());return await aT(n),oT(r,e)},async getMeta(e){let n=(await t()).transaction(dT,`readonly`),r=await iT(n.objectStore(dT).get(e));return await aT(n),r??null},async readFig(e){return n(fT,e)},async readThumb(e){return n(pT,e)},async writeCanvas(e){let n=(await t()).transaction([dT,fT,pT],`readwrite`),r=n.objectStore(fT),i=n.objectStore(pT),a=n.objectStore(dT),o=await _T(a,e.id),s=o?.hasThumb??!1;r.put(gT(e.figBytes),e.id),e.thumbBytes!=null&&(e.thumbBytes.byteLength>0?(i.put(gT(e.thumbBytes),e.id),s=!0):(i.delete(e.id),s=!1));let c=sT(e,o,s);return a.put(c),await aT(n),c},async upsertIndexMeta(e){let n=(await t()).transaction(dT,`readwrite`),r=n.objectStore(dT),i=cT(e,await _T(r,e.id));return r.put(i),await aT(n),i},async writeThumb(e,n){let r=(await t()).transaction([dT,pT],`readwrite`),i=r.objectStore(dT),a=await _T(i,e);if(!a)return await aT(r),null;r.objectStore(pT).put(gT(n),e);let o={...a,hasThumb:!0};return i.put(o),await aT(r),o},async updateMeta(e,n,r){let i=(await t()).transaction(dT,`readwrite`),a=i.objectStore(dT),o=await _T(a,e);if(!o||r?.expectedRevision!=null&&o.revision!==r.expectedRevision)return await aT(i),null;let s={...o,...n,id:o.id};return a.put(s),await aT(i),s},async tombstone(e){return this.updateMeta(e,{tombstoned:!0,syncStatus:`pending`,updatedAt:new Date().toISOString()})},async clearFig(e){let n=(await t()).transaction([dT,fT],`readwrite`),r=n.objectStore(dT),i=await _T(r,e);if(!i)return await aT(n),null;n.objectStore(fT).delete(e);let a={...i,hasFig:!1,figSize:0};return r.put(a),await aT(n),a},async remove(e){let n=(await t()).transaction([dT,fT,pT],`readwrite`);n.objectStore(dT).delete(e),n.objectStore(fT).delete(e),n.objectStore(pT).delete(e),await aT(n)},async clearAll(){let e=(await t()).transaction([dT,fT,pT],`readwrite`);e.objectStore(dT).clear(),e.objectStore(fT).clear(),e.objectStore(pT).clear(),await aT(e)}}}function yT(){let e=new Map,t=new Map,n=new Map;return{async listMetas(t=!1){return oT([...e.values()],t)},async getMeta(t){return e.get(t)??null},async readFig(e){let n=t.get(e);return n?new Uint8Array(n):null},async readThumb(e){let t=n.get(e);return t?new Uint8Array(t):null},async writeCanvas(r){let i=e.get(r.id)??null;t.set(r.id,new Uint8Array(r.figBytes));let a=i?.hasThumb??!1;r.thumbBytes!=null&&(r.thumbBytes.byteLength>0?(n.set(r.id,new Uint8Array(r.thumbBytes)),a=!0):(n.delete(r.id),a=!1));let o=sT(r,i,a);return e.set(r.id,o),o},async upsertIndexMeta(t){let n=cT(t,e.get(t.id)??null);return e.set(t.id,n),n},async writeThumb(t,r){let i=e.get(t);if(!i)return null;n.set(t,new Uint8Array(r));let a={...i,hasThumb:!0};return e.set(t,a),a},async updateMeta(t,n,r){let i=e.get(t);if(!i||r?.expectedRevision!=null&&i.revision!==r.expectedRevision)return null;let a={...i,...n,id:i.id};return e.set(t,a),a},async tombstone(t){let n=e.get(t);if(!n)return null;let r={...n,tombstoned:!0,syncStatus:`pending`,updatedAt:new Date().toISOString()};return e.set(t,r),r},async clearFig(n){let r=e.get(n);if(!r)return null;t.delete(n);let i={...r,hasFig:!1,figSize:0};return e.set(n,i),i},async remove(r){e.delete(r),t.delete(r),n.delete(r)},async clearAll(){e.clear(),t.clear(),n.clear()}}}var bT=null;function xT(){if(bT)return bT;try{if(typeof indexedDB<`u`)return bT=vT(),bT}catch(e){console.warn(`[Storage] IndexedDB local store unavailable, using memory:`,e)}return bT=yT(),bT}var ST=500*1024*1024;async function CT(e=new Set,t=ST){let n=xT(),r=await n.listMetas(!0),i=0,a=[];for(let t of r){if(!t.hasFig)continue;let r=t.figSize;r??(r=(await n.readFig(t.id))?.byteLength??0,await n.updateMeta(t.id,{figSize:r})),i+=r,!(t.tombstoned||t.syncStatus!==`synced`||e.has(t.id))&&a.push({id:t.id,size:r,lastUsed:t.lastOpenedAt??t.lastSyncedAt??t.updatedAt})}if(i<=t)return 0;a.sort((e,t)=>e.lastUsed.localeCompare(t.lastUsed));let o=0;for(let e of a){if(i<=t)break;await n.clearFig(e.id),i-=e.size,o+=1}return o>0&&console.warn(`[Storage] Evicted ${o} cached fig(s) to fit cache budget`),o}function wT(e,t,n){return e.filter(e=>e.canvasId!==t||e.type!==`putCanvas`?!0:e.revision>=n)}function TT(){let e=new Uint8Array(8);return crypto.getRandomValues(e),[...e].map(e=>e.toString(16).padStart(2,`0`)).join(``)}var ET=`open-pencil-cloud-outbox`,DT=1,OT=`jobs`;function kT(){return rT(ET,DT,e=>{e.objectStoreNames.contains(OT)||e.createObjectStore(OT,{keyPath:`id`})})}function AT(e){return{id:e.id??TT(),canvasId:e.canvasId,type:e.type,revision:e.revision,createdAt:Date.now(),attempts:e.attempts??0,nextAttemptAt:e.nextAttemptAt??Date.now()}}function jT(e,t){let n=e;return t.type===`putCanvas`&&(n=wT(n,t.canvasId,t.revision)),n=n.filter(e=>!(e.canvasId===t.canvasId&&e.type===t.type&&e.type!==`putCanvas`)),[...n,t]}function MT(){let e=[];return{async list(){return[...e].sort((e,t)=>e.createdAt-t.createdAt)},async enqueue(t){let n=AT(t);return e=jT(e,n),n},async update(t){e=e.map(e=>e.id===t.id?t:e)},async remove(t){e=e.filter(e=>e.id!==t)},async clear(){e=[]}}}function NT(){let e=null;function t(){return e||=kT(),e}return{async list(){let e=(await t()).transaction(OT,`readonly`),n=await iT(e.objectStore(OT).getAll());return await aT(e),n.sort((e,t)=>e.createdAt-t.createdAt)},async enqueue(e){let n=AT(e),r=(await t()).transaction(OT,`readwrite`),i=r.objectStore(OT),a=await iT(i.getAll()),o=jT(a,n);for(let e of a)o.some(t=>t.id===e.id)||i.delete(e.id);return i.put(n),await aT(r),n},async update(e){let n=(await t()).transaction(OT,`readwrite`);n.objectStore(OT).put(e),await aT(n)},async remove(e){let n=(await t()).transaction(OT,`readwrite`);n.objectStore(OT).delete(e),await aT(n)},async clear(){let e=(await t()).transaction(OT,`readwrite`);e.objectStore(OT).clear(),await aT(e)}}}var PT=null;function FT(){if(PT)return PT;try{if(typeof indexedDB<`u`)return PT=NT(),PT}catch(e){console.warn(`[Storage] Outbox IDB unavailable, using memory:`,e)}return PT=MT(),PT}var IT=o(new Map);function LT(e,t){let n=new Map(IT.value);t==null?n.delete(e):n.set(e,Math.max(0,Math.min(1,t))),IT.value=n}var RT=o(`idle`),zT=o(null),BT=o(0);s(()=>{switch(RT.value){case`syncing`:return zT.value??`Syncing…`;case`offline`:return`Offline · will sync`;case`error`:return zT.value??`Sync failed`;default:return null}});function VT(e,t=null){RT.value=e,zT.value=t}function HT(e){BT.value=e}var UT=new Set;function WT(e){for(let t of UT)try{t(e)}catch(e){console.error(`[Storage] Workspace event listener failed:`,e)}}function GT(e){return UT.add(e),()=>UT.delete(e)}var KT=8,qT=1500,JT=6e4,YT=class extends Error{constructor(e){super(e),this.name=`StorageSyncBlockedError`}},XT=!1,ZT=null,QT=!1;function $T(){return typeof navigator>`u`?!0:navigator.onLine}function eE(e){let t=Math.min(JT,qT*2**Math.max(0,e-1));return t+Math.floor(t*.2*((crypto.getRandomValues(new Uint8Array(1))[0]??0)/255))}function tE(e,t=Date.now()){if(e.length===0)return null;let n=Math.min(...e.map(e=>e.nextAttemptAt));return n===2**53-1?null:Math.max(250,n-t)}function nE(e){if(!(e instanceof Error))return!1;let t=e.message.toLowerCase();return t.includes(`403`)||t.includes(`401`)||t.includes(`access denied`)||t.includes(`invalid access key`)||t.includes(`not configured`)}async function rE(e){let t=xT(),n=await t.getMeta(e.canvasId),r=n?.providerId??Lw.value;if(!Vw(r))throw new YT(`Storage is not configured`);let i=Iw.get(r),a=await Uw(r);if(i.credentialFields.some(e=>e.required&&a[e.id]!==`configured`))throw new YT(`Storage credentials are unavailable`);let o=Ww(r);if(e.type===`deleteCanvas`){await o.deleteDocument(e.canvasId),await t.updateMeta(e.canvasId,{syncStatus:`synced`,lastSyncError:null});return}if(!n||n.tombstoned)return;if(e.type===`putCanvas`){if(n.revision>e.revision||!n.hasFig)return;let i=await t.readFig(e.canvasId);if(!i||i.byteLength===0)throw Error(`Local document missing for sync`);LT(e.canvasId,0);try{await o.putDocument(e.canvasId,i,{name:n.name,updatedAt:n.updatedAt},({transferredBytes:t,totalBytes:n})=>{n&&LT(e.canvasId,t/n)})}finally{LT(e.canvasId,null)}let a=await t.getMeta(e.canvasId);a&&a.revision===e.revision&&!a.tombstoned&&(await t.updateMeta(e.canvasId,{syncStatus:`synced`,lastSyncedAt:new Date().toISOString(),lastSyncError:null},{expectedRevision:e.revision}),await CT(new Set([e.canvasId])),WT({providerId:r,documentId:e.canvasId,kind:`synced`}));return}if(!o.putThumbnail)return;let s=await t.readThumb(e.canvasId);s&&await o.putThumbnail(e.canvasId,s)}async function iE(){let e=FT(),t=await e.list();if(HT(t.length),t.length===0){$T()&&VT(`idle`);return}if(!$T()){VT(`offline`),aE(5e3);return}VT(`syncing`);let n=Date.now(),r=t.find(e=>e.nextAttemptAt<=n);if(!r){let e=tE(t,n);e!=null&&aE(e);return}try{await rE(r),await e.remove(r.id);let t=await e.list();HT(t.length),t.length===0?VT(`idle`):aE(50)}catch(t){let n=t instanceof Error?t.message:String(t);if(t instanceof YT){await e.update({...r,nextAttemptAt:2**53-1}),VT(`error`,n);return}let i=r.attempts+1,a=nE(t)||i>=KT;if(console.warn(`[Storage sync] job failed:`,r.type,r.canvasId,n),a){if(r.type===`putThumb`?await xT().updateMeta(r.canvasId,{lastSyncError:n}):(await xT().updateMeta(r.canvasId,{syncStatus:`error`,lastSyncError:n}),VT(`error`,n.slice(0,120))),r.type===`putThumb`){await e.remove(r.id);let t=await e.list();HT(t.length),t.length>0?aE(1e3):VT(`idle`)}else await e.update({...r,attempts:i,nextAttemptAt:2**53-1});return}let o={...r,attempts:i,nextAttemptAt:Date.now()+eE(i)};await e.update(o),r.type!==`putThumb`&&await xT().updateMeta(r.canvasId,{syncStatus:`pending`,lastSyncError:n});let s=await e.list(),c=Math.min(...s.map(e=>e.nextAttemptAt));aE(Math.max(250,c-Date.now()))}}function aE(e){ZT!=null&&clearTimeout(ZT),ZT=setTimeout(()=>{ZT=null,sE()},e)}function oE(){QT||!Se||(QT=!0,window.addEventListener(`online`,()=>{VT(`syncing`),sE()}),window.addEventListener(`offline`,()=>{VT(`offline`)}))}async function sE(){if(oE(),XT)return;XT=!0;let e=!1;try{for(let e=0;e<3;e++){let e=(await FT().list()).length;await iE();let t=(await FT().list()).length;if(t===0||t>=e)break}}catch(t){e=!0,console.warn(`[Storage sync] pump failed:`,t),aE(5e3)}finally{XT=!1}e||!$T()||(await FT().list()).some(e=>e.nextAttemptAt<=Date.now())&&aE(250)}async function cE(e,t){await FT().enqueue({canvasId:e,type:`putCanvas`,revision:t}),sE()}async function lE(){let e=FT(),t=await e.list(),n=Date.now();await Promise.all(t.map(t=>e.update({...t,nextAttemptAt:n}))),t.length>0&&VT(`syncing`),sE()}async function uE(e,t){let n=t??{store:xT(),enqueueCanvas:cE},r=await Mp({size:e.figBytes.byteLength,async read(t,n){return e.figBytes.subarray(t,n)}}),i=await n.store.writeCanvas({id:e.canvasId,providerId:e.providerId,name:e.name,figBytes:e.figBytes,thumbBytes:r,syncStatus:`pending`});return await n.enqueueCanvas(e.canvasId,i.revision),WT({providerId:e.providerId,documentId:e.canvasId,kind:`changed`}),{revision:i.revision}}async function dE(e){await xT().writeCanvas({id:e.canvasId,providerId:e.providerId,name:e.name,updatedAt:e.updatedAt,figBytes:e.figBytes,thumbBytes:e.thumbnailBytes,syncStatus:e.markSynced===!1?`pending`:`synced`}),e.markSynced!==!1&&(await xT().updateMeta(e.canvasId,{lastSyncedAt:e.updatedAt||new Date().toISOString(),syncStatus:`synced`,lastSyncError:null}),await CT(new Set([e.canvasId])))}var fE=6,pE=15e3;function mE(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function hE(e){if(!mE(e)||e.error===!0||typeof e.status==`number`&&e.status!==200||!mE(e.meta))throw Error(`Figma returned an invalid image response`);let t=e.meta.s3_urls;if(!mE(t))throw Error(`Figma returned an invalid image URL map`);let n={};for(let[e,r]of Object.entries(t))typeof r==`string`&&(n[e]=r);return n}async function gE(e){let t=await crypto.subtle.digest(`SHA-1`,Uint8Array.from(e));return[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}async function _E(e,t,n=Bt,r=pE){let i=[...new Set(t)];if(i.length===0)return new Map;let a=await n(`https://www.figma.com/file/${encodeURIComponent(e)}/image/batch`,{method:`POST`,headers:{"content-type":`application/json`},body:JSON.stringify({sha1s:i,needs_compressed_textures:!1}),signal:AbortSignal.timeout(r)});if(!a.ok)throw Error(`Figma image request failed with status ${a.status}`);let o=hE(await a.json()),s=new Map;for(let e=0;e<i.length;e+=fE){let t=i.slice(e,e+fE);await Promise.all(t.map(async e=>{let t=o[e];if(t)try{let i=await n(t,{signal:AbortSignal.timeout(r)});if(!i.ok)throw Error(`status ${i.status}`);let a=new Uint8Array(await i.arrayBuffer());if(await gE(a)!==e.toLowerCase())throw Error(`SHA-1 mismatch`);s.set(e,a)}catch(t){console.warn(`Failed to fetch pasted Figma image ${e}`,t)}}))}return s}function vE({total:e,missing:t,fetchAttempted:n}){let r=Oy.get();if(!n){zt.warning(e===1?r.clipboardImageUnavailableWeb:r.clipboardImagesUnavailableWeb({count:e}));return}zt.error(t===1?r.clipboardImageFetchFailed:r.clipboardImagesFetchFailed({count:t}))}function yE(e){return e.onEditorEvent(`clipboard:images-missing`,vE)}function bE(e){let t=Array.from(e).filter(e=>{let t=e.charCodeAt(0);return t>=32&&t!==127}).join(``).replace(/[/\\]+/g,`_`).replace(/\.{2,}/g,`_`).replace(/^[.\s]+/,``).trim();return t.length>0?t:`export`}function xE(e){let t={},n=new Set;for(let r of e){let e=bE(r.fileName);if(n.has(e)){let t=e.lastIndexOf(`.`),r=t===-1?e:e.slice(0,t),i=t===-1?``:e.slice(t),a=2;for(;n.has(`${r} (${a})${i}`);)a++;e=`${r} (${a})${i}`}n.add(e),t[e]=r.bytes}return Gt(t)}function SE(e,t){return t.scope===`node`?e.getNode(t.nodeId)?.name??`Export`:t.scope===`selection`&&t.nodeIds.length===1?e.getNode(t.nodeIds[0])?.name??`Export`:t.scope===`page`?e.getNode(t.pageId)?.name??`Page`:`Export`}function CE(e,t){if(e===`png`||e===`jpg`||e===`webp`)return{format:e.toUpperCase(),scale:t?.scale??1,quality:t?.quality};if(e===`jsx`)return{format:t?.jsxFormat??`openpencil`}}function wE(e,t,n,r){return t===`png`||t===`jpg`||t===`webp`?`${e}@${r?.scale??1}x.${n}`:`${e}.${n}`}function TE(e){return typeof e==`string`?new TextEncoder().encode(e):new Uint8Array(e)}function EE(e,t,n){async function r(n,r,i,a=t.currentPageId){let o=e.renderer;if(!o)return null;let s=n.length>0?n:e.graph.getChildren(a).map(e=>e.id);return s.length===0?null:Ke(o.ck,o,e.graph,a,s,{scale:r,format:i})}function i(){let e=[...t.selectedIds];return e.length>0?{scope:`selection`,nodeIds:e}:{scope:`page`,pageId:t.currentPageId}}function a(){return n.listExportFormats(t.selectedIds.size>0?`selection`:`page`)}return{renderExportImage:r,getSelectionExportTarget:i,listSelectionExportFormats:a}}async function DE(e,t,n){let{save:r}=await B(async()=>{let{save:e}=await import(`./dist-js--UrKkpvq.js`);return{save:e}},__vite__mapDeps([26,12]));return r({defaultPath:e,filters:[{name:t,extensions:[n.slice(1)]}]})}async function OE(e,t){let{writeFile:n}=await B(async()=>{let{writeFile:e}=await import(`./dist-js-Cb84B2KY.js`);return{writeFile:e}},__vite__mapDeps([19,12,20]));await n(e,t)}async function kE(e,t,n,r,i,a){if(Rt()){let i=await DE(t,n,r);if(!i)return;await OE(i,e);return}if(window.showSaveFilePicker)try{let a=await(await window.showSaveFilePicker({suggestedName:t,types:[{description:`${n} file`,accept:{[i]:[r]}}]})).createWritable();await a.write(new Uint8Array(e)),await a.close();return}catch(e){if(e.name===`AbortError`)return}a(e,t,i)}function AE(e,t,n,r){let{renderExportImage:i,getSelectionExportTarget:a,listSelectionExportFormats:o}=EE(e,t,n);async function s(t,r,i){let a=n.getFormat(r);if(!a)throw Error(`Unknown export format: ${r}`);let o=CE(r,i),s=await n.exportContent(r,{graph:e.graph,target:t},o,e.renderer?{canvasKit:e.renderer.ck,renderer:e.renderer}:void 0),c=SE(e.graph,t);return{bytes:TE(s.data),fileName:wE(c,r,s.extension,i),format:a.label,ext:`.${s.extension}`,mime:s.mimeType}}async function c(e){await kE(e.bytes,e.fileName,e.format,e.ext,e.mime,r)}async function l(e,t,n){await c(await s(e,t,n))}async function u(t){if(t.length===0)return;let n=[];for(let e of t)n.push(await s(e.target,e.formatId,e.options));if(n.length===1){await c(n[0]);return}let i=new Set(t.map(t=>SE(e.graph,t.target))),a=i.size===1?[...i][0]:`export`;await kE(xE(n),`${a}.zip`,`ZIP`,`.zip`,`application/zip`,r)}async function d(e,t){await l(a(),t,{scale:e})}return{renderExportImage:i,listSelectionExportFormats:o,exportTarget:l,exportTargets:u,exportSelection:d}}function jE(e){let t=new URL(e,window.location.href);return t.hash=``,t}function ME(){return new Promise(e=>{requestAnimationFrame(()=>e())})}function NE(e,t){function n(e,n){t.width=e,t.height=n}async function r(){await ME(),e.zoomToFit()}return{setViewportSize:n,fitCurrentPageToViewport:r}}function PE(e,t,n){let r=new Blob([e.buffer],{type:n}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=t,a.style.display=`none`,document.body.appendChild(a),a.click(),setTimeout(()=>{document.body.removeChild(a),URL.revokeObjectURL(i)},100)}function FE(...e){let t=e.map(e=>e?.trim()).filter(e=>!!e);return t.length>0?t.join(`
`):void 0}var IE=new Set([`area`,`base`,`br`,`col`,`embed`,`hr`,`img`,`input`,`link`,`meta`,`param`,`source`,`track`,`wbr`]);function LE(e){let t=[],n=``;for(let r of e)r===` `||r===`
`||r===`	`||r===`\r`||r===`\f`?(n.length>0&&t.push(n),n=``):n+=r;return n.length>0&&t.push(n),t}function RE(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`)}function zE(e){return RE(e).replaceAll(`"`,`&quot;`)}function BE(e){return RE(e.text)}function VE(e){if(!(!e.inlineStyle||Object.keys(e.inlineStyle).length===0))return Object.entries(e.inlineStyle).filter(([,e])=>e!==``).map(([e,t])=>`${e}: ${t}`).join(`; `)}function HE(e){let t=VE(e);if(!t)return;let n=qh(t);return n.length>0?n:void 0}function UE(...e){let t=e.flatMap(e=>e?LE(e):[]).map(e=>e.trim()).filter(e=>e.length>0).join(` `);return t.length>0?t:void 0}function WE(e,t){let n=VE(e),r=t.style===`tailwind`?HE(e):void 0,i={...e.attrs};delete i.style;let a={...t.style===`tailwind`&&r?i:e.attrs,...r?{class:UE(e.attrs.class,r)}:{},...n&&t.style!==`tailwind`?{style:n}:{}},o=Object.entries(a).filter(([,e])=>e!==``).map(([e,t])=>`${e}="${zE(t)}"`);return o.length===0?``:` ${o.join(` `)}`}function GE(e,t){let n=e.tagName.toLowerCase(),r=WE(e,t);return IE.has(n)?`<${n}${r}>`:`<${n}${r}>${e.children.map(e=>KE(e,t)).join(``)}</${n}>`}function KE(e,t={}){return e.type===`text`?BE(e):GE(e,t)}function qE(e,t={}){return e.children.map(e=>KE(e,t)).join(``)}var JE=`align-items.aspect-ratio.background-color.background-image.border-bottom-color.border-bottom-style.border-bottom-left-radius.border-bottom-right-radius.border-bottom-width.border-left-color.border-left-style.border-left-width.border-radius.border-right-color.border-right-style.border-right-width.border-top-color.border-top-style.border-top-left-radius.border-top-right-radius.border-top-width.box-shadow.color.column-gap.display.align-self.bottom.flex-direction.flex-wrap.font-family.font-size.font-style.font-weight.gap.height.justify-content.letter-spacing.left.line-height.max-height.max-width.min-height.min-width.object-fit.opacity.overflow.padding-bottom.padding-left.padding-right.padding-top.position.right.row-gap.text-align.text-decoration-line.text-shadow.text-transform.top.white-space.width`.split(`.`);function YE(e){if(e)return e;if(typeof document>`u`)throw TypeError(`Browser CSS runtime requires a DOM document`);return document}function XE(e){let t={};for(let n of Array.from(e.attributes))t[n.name]=n.value;return t}function ZE(e){let t={};for(let n of Array.from(e)){let r=e.getPropertyValue(n);r&&(t[n]=r)}return Object.keys(t).length>0?t:void 0}var QE=new Set([`head`,`link`,`meta`,`script`,`style`,`template`,`title`]);function $E(e){if(e.nodeType===3){let t=e.textContent??``;return t.length>0?{type:`text`,text:t}:null}if(e.nodeType!==1)return null;let t=e;if(QE.has(t.tagName.toLowerCase()))return null;let n=Array.from(t.childNodes).map($E).filter(e=>e!==null),r=`style`in t?t.style:void 0;return{type:`element`,tagName:t.tagName.toLowerCase(),attrs:XE(t),children:n,inlineStyle:r?ZE(r):void 0}}function eD(e,t){let n=e.defaultView?.DOMParser;if(!n)throw TypeError(`Browser CSS runtime requires DOMParser`);let r=new n().parseFromString(t,`text/html`);return{type:`document`,children:Array.from(r.body.childNodes).map($E).filter(e=>e!==null)}}function tD(e,t,n){if(e.type===`text`)return;let r=t.ownerDocument?.defaultView;if(!r||!(t instanceof r.Element))return;n.push([e,t]);let i=e.children.filter(e=>e.type===`element`),a=Array.from(t.children);for(let[e,t]of i.entries()){let r=a.at(e);r&&tD(t,r,n)}}function nD(e,t){let n={},r=t.includeBrowserDefaults?Array.from(e):JE;for(let t of r){let r=e.getPropertyValue(t);r&&(n[t]=r)}return n}function rD(e){let t=e.defaultView?.requestAnimationFrame;return t?new Promise(e=>{t(()=>e())}):Promise.resolve()}function iD(e){e.style.cssText=[`position: fixed`,`left: -100000px`,`top: 0`,`width: 1000px`,`height: auto`,`visibility: hidden`,`pointer-events: none`,`contain: layout style paint`].join(`;`)}async function aD(e,t,n,r){let i=e.createElement(`div`);iD(i);let a=i.attachShadow({mode:`open`}),o=e.createElement(`style`);o.textContent=n,a.append(o);let s=e.createElement(`div`);s.innerHTML=qE(t),a.append(s),e.body.append(i);try{return await rD(e),sD(t,s,r)}finally{i.remove()}}async function oD(e,t,n,r){let i=e.createElement(`iframe`);iD(i),e.body.append(i);try{let e=i.contentDocument;if(!e)throw TypeError(`Browser CSS runtime could not create iframe document`);e.open(),e.write(`<!doctype html><html><head></head><body></body></html>`),e.close();let a=e.createElement(`style`);a.textContent=n,e.head.append(a);let o=e.createElement(`div`);return o.innerHTML=qE(t),e.body.append(o),await rD(e),sD(t,o,r)}finally{i.remove()}}function sD(e,t,n){let r=t.ownerDocument.defaultView;if(!r)throw TypeError(`Browser CSS runtime requires getComputedStyle`);let i=structuredClone(e),a=[],o=Array.from(t.childNodes);for(let[e,t]of i.children.entries()){let n=o.at(e);n&&tD(t,n,a)}for(let[e,t]of a)e.computedStyle=nD(r.getComputedStyle(t),n);return i}function cD(e={}){let t=YE(e.document),n=e.sandbox??`shadow-root`;return{kind:`browser`,parseHTML:e=>eD(t,e),serializeHTML:qE,computeStyles:(e,r=``,i={})=>n===`iframe`?oD(t,e,r,i):aD(t,e,r,i)}}var lD=n(((e,t)=>{var n=40,r=41,i=39,a=34,o=92,s=47,c=44,l=58,u=42,d=117,f=85,p=43,m=/^[a-f0-9?-]+$/i;t.exports=function(e){for(var t=[],h=e,g,_,v,y,b,x,S,C,w=0,T=h.charCodeAt(w),E=h.length,D=[{nodes:t}],O=0,k,A=``,j=``,M=``;w<E;)if(T<=32){g=w;do g+=1,T=h.charCodeAt(g);while(T<=32);y=h.slice(w,g),v=t[t.length-1],T===r&&O?M=y:v&&v.type===`div`?(v.after=y,v.sourceEndIndex+=y.length):T===c||T===l||T===s&&h.charCodeAt(g+1)!==u&&(!k||k&&k.type===`function`&&k.value!==`calc`)?j=y:t.push({type:`space`,sourceIndex:w,sourceEndIndex:g,value:y}),w=g}else if(T===i||T===a){g=w,_=T===i?`'`:`"`,y={type:`string`,sourceIndex:w,quote:_};do if(b=!1,g=h.indexOf(_,g+1),~g)for(x=g;h.charCodeAt(x-1)===o;)--x,b=!b;else h+=_,g=h.length-1,y.unclosed=!0;while(b);y.value=h.slice(w+1,g),y.sourceEndIndex=y.unclosed?g:g+1,t.push(y),w=g+1,T=h.charCodeAt(w)}else if(T===s&&h.charCodeAt(w+1)===u)g=h.indexOf(`*/`,w),y={type:`comment`,sourceIndex:w,sourceEndIndex:g+2},g===-1&&(y.unclosed=!0,g=h.length,y.sourceEndIndex=g),y.value=h.slice(w+2,g),t.push(y),w=g+2,T=h.charCodeAt(w);else if((T===s||T===u)&&k&&k.type===`function`&&k.value===`calc`)y=h[w],t.push({type:`word`,sourceIndex:w-j.length,sourceEndIndex:w+y.length,value:y}),w+=1,T=h.charCodeAt(w);else if(T===s||T===c||T===l)y=h[w],t.push({type:`div`,sourceIndex:w-j.length,sourceEndIndex:w+y.length,value:y,before:j,after:``}),j=``,w+=1,T=h.charCodeAt(w);else if(n===T){g=w;do g+=1,T=h.charCodeAt(g);while(T<=32);if(C=w,y={type:`function`,sourceIndex:w-A.length,value:A,before:h.slice(C+1,g)},w=g,A===`url`&&T!==i&&T!==a){--g;do if(b=!1,g=h.indexOf(`)`,g+1),~g)for(x=g;h.charCodeAt(x-1)===o;)--x,b=!b;else h+=`)`,g=h.length-1,y.unclosed=!0;while(b);S=g;do--S,T=h.charCodeAt(S);while(T<=32);C<S?(w===S+1?y.nodes=[]:y.nodes=[{type:`word`,sourceIndex:w,sourceEndIndex:S+1,value:h.slice(w,S+1)}],y.unclosed&&S+1!==g?(y.after=``,y.nodes.push({type:`space`,sourceIndex:S+1,sourceEndIndex:g,value:h.slice(S+1,g)})):(y.after=h.slice(S+1,g),y.sourceEndIndex=g)):(y.after=``,y.nodes=[]),w=g+1,y.sourceEndIndex=y.unclosed?g:w,T=h.charCodeAt(w),t.push(y)}else O+=1,y.after=``,y.sourceEndIndex=w+1,t.push(y),D.push(y),t=y.nodes=[],k=y;A=``}else if(r===T&&O)w+=1,T=h.charCodeAt(w),k.after=M,k.sourceEndIndex+=M.length,M=``,--O,D[D.length-1].sourceEndIndex=w,D.pop(),k=D[O],t=k.nodes;else{g=w;do T===o&&(g+=1),g+=1,T=h.charCodeAt(g);while(g<E&&!(T<=32||T===i||T===a||T===c||T===l||T===s||T===n||T===u&&k&&k.type===`function`&&k.value===`calc`||T===s&&k.type===`function`&&k.value===`calc`||T===r&&O));y=h.slice(w,g),n===T?A=y:(d===y.charCodeAt(0)||f===y.charCodeAt(0))&&p===y.charCodeAt(1)&&m.test(y.slice(2))?t.push({type:`unicode-range`,sourceIndex:w,sourceEndIndex:g,value:y}):t.push({type:`word`,sourceIndex:w,sourceEndIndex:g,value:y}),w=g}for(w=D.length-1;w;--w)D[w].unclosed=!0,D[w].sourceEndIndex=h.length;return D[0].nodes}})),uD=n(((e,t)=>{t.exports=function e(t,n,r){var i,a,o,s;for(i=0,a=t.length;i<a;i+=1)o=t[i],r||(s=n(o,i,t)),s!==!1&&o.type===`function`&&Array.isArray(o.nodes)&&e(o.nodes,n,r),r&&n(o,i,t)}})),dD=n(((e,t)=>{function n(e,t){var n=e.type,i=e.value,a,o;return t&&(o=t(e))!==void 0?o:n===`word`||n===`space`?i:n===`string`?(a=e.quote||``,a+i+(e.unclosed?``:a)):n===`comment`?`/*`+i+(e.unclosed?``:`*/`):n===`div`?(e.before||``)+i+(e.after||``):Array.isArray(e.nodes)?(a=r(e.nodes,t),n===`function`?i+`(`+(e.before||``)+a+(e.after||``)+(e.unclosed?``:`)`):a):i}function r(e,t){var r,i;if(Array.isArray(e)){for(r=``,i=e.length-1;~i;--i)r=n(e[i],t)+r;return r}return n(e,t)}t.exports=r})),fD=n(((e,t)=>{var n=45,r=43,i=46,a=101,o=69;function s(e){var t=e.charCodeAt(0),a;if(t===r||t===n){if(a=e.charCodeAt(1),a>=48&&a<=57)return!0;var o=e.charCodeAt(2);return a===i&&o>=48&&o<=57}return t===i?(a=e.charCodeAt(1),a>=48&&a<=57):t>=48&&t<=57}t.exports=function(e){var t=0,c=e.length,l,u,d;if(c===0||!s(e))return!1;for(l=e.charCodeAt(t),(l===r||l===n)&&t++;t<c&&(l=e.charCodeAt(t),!(l<48||l>57));)t+=1;if(l=e.charCodeAt(t),u=e.charCodeAt(t+1),l===i&&u>=48&&u<=57)for(t+=2;t<c&&(l=e.charCodeAt(t),!(l<48||l>57));)t+=1;if(l=e.charCodeAt(t),u=e.charCodeAt(t+1),d=e.charCodeAt(t+2),(l===a||l===o)&&(u>=48&&u<=57||(u===r||u===n)&&d>=48&&d<=57))for(t+=u===r||u===n?3:2;t<c&&(l=e.charCodeAt(t),!(l<48||l>57));)t+=1;return{number:e.slice(0,t),unit:e.slice(t)}}})),pD=t(n(((e,t)=>{var n=lD(),r=uD(),i=dD();function a(e){return this instanceof a?(this.nodes=n(e),this):new a(e)}a.prototype.toString=function(){return Array.isArray(this.nodes)?i(this.nodes):``},a.prototype.walk=function(e,t){return r(this.nodes,e,t),this},a.unit=fD(),a.walk=r,a.stringify=i,t.exports=a}))(),1),mD=new Set([`transparent`,`rgba(0, 0, 0, 0)`,`rgb(0 0 0 / 0)`]);function hD(e){if(!e)return null;let t=e.trim();if(t.length===0||t===`auto`)return null;let n=Number.parseFloat(t);return Number.isFinite(n)?t.endsWith(`rem`)?n*16:n:null}function gD(e){if(!e)return null;let t=e.trim();return t.length===0||mD.has(t.toLowerCase())?null:Ft(t)}function _D(e){let t=gD(e);return t?[{type:`SOLID`,color:t,opacity:t.a,visible:!0}]:[]}function vD(e,t){let n=gD(e),r=hD(t);return!n||r===null||r<=0?[]:[{color:n,weight:r,opacity:n.a,visible:!0,align:`INSIDE`}]}function yD(e){let t=[];for(let n of(0,pD.default)(e).nodes){if(n.type===`div`&&n.value===`,`)return t;t.push(n)}return t}function bD(e){for(let t of e){if(t.type===`function`){let e=gD(pD.default.stringify(t));if(e)return e;continue}if(t.type!==`word`)continue;let e=gD(t.value);if(e)return e}return null}function xD(e){return e.filter(e=>e.type===`word`&&pD.default.unit(e.value)!==!1).map(e=>hD(e.value)).filter(e=>e!==null)}function SD(e){if(!e||e.trim()===`none`)return[];let t=yD(e);if(t.some(e=>e.type===`word`&&e.value===`inset`))return[];let n=bD(t);if(!n)return[];let[r=0,i=0,a=0,o=0]=xD(t);return[{type:`DROP_SHADOW`,color:n,offset:{x:r,y:i},radius:a,spread:o,visible:!0,blendMode:`NORMAL`}]}function Q(e,t){return e?.[t]}function CD(e){return{...e.inlineStyle,...e.computedStyle}}var wD=`open-pencil-dom-css`,TD=`image-source-url`;function ED(e){return e.type===`text`?e.text:e.children.map(ED).join(``)}function DD(e){return[`span`,`p`,`label`,`strong`,`em`,`button`,`a`,`h1`,`h2`,`h3`,`h4`,`h5`,`h6`].includes(e.tagName.toLowerCase())}function $(e,...t){for(let n of t){let t=hD(Q(e,n));if(t!==null)return t}return null}function OD(e,t){return _D(Q(e,t))}function kD(e){if(!e||e===`auto`)return null;let t=e.split(`/`).map(e=>Number.parseFloat(e.trim())).filter(Number.isFinite);return t.length===1&&t[0]>0?t[0]:t.length===2&&t[0]>0&&t[1]>0?t[0]/t[1]:null}function AD(e,t){let n=$(t,`width`),r=$(t,`height`),i=$(t,`min-width`),a=$(t,`max-width`),o=$(t,`min-height`),s=$(t,`max-height`),c=kD(Q(t,`aspect-ratio`));n!==null&&(e.width=n),r!==null&&(e.height=r),r===null&&n!==null&&c!==null&&(e.height=n/c),n===null&&r!==null&&c!==null&&(e.width=r*c),i!==null&&(e.minWidth=i),a!==null&&(e.maxWidth=a),o!==null&&(e.minHeight=o),s!==null&&(e.maxHeight=s)}function jD(e){return Q(e,`border-color`)??Q(e,`border-top-color`)??Q(e,`border-right-color`)??Q(e,`border-bottom-color`)??Q(e,`border-left-color`)}function MD(e){let t=$(e,`border-width`);if(t!==null)return t;let n=[$(e,`border-top-width`),$(e,`border-right-width`),$(e,`border-bottom-width`),$(e,`border-left-width`)].filter(e=>e!==null);return n.length===0?null:Math.max(...n)}function ND(e){return Q(e,`border-style`)??Q(e,`border-top-style`)??Q(e,`border-right-style`)??Q(e,`border-bottom-style`)??Q(e,`border-left-style`)}function PD(e,t){let n=ND(e);return n===`dashed`?[t*3,t*2]:n===`dotted`?[t,t]:[]}function FD(e,t,n){let r=$(t,`border-top-width`)??n.weight,i=$(t,`border-right-width`)??n.weight,a=$(t,`border-bottom-width`)??n.weight,o=$(t,`border-left-width`)??n.weight;e.borderTopWeight=r,e.borderRightWeight=i,e.borderBottomWeight=a,e.borderLeftWeight=o,e.independentStrokeWeights=[r,i,a,o].some(e=>e!==n.weight)}function ID(e,t){let n=$(t,`border-radius`),r=$(t,`border-top-left-radius`),i=$(t,`border-top-right-radius`),a=$(t,`border-bottom-right-radius`),o=$(t,`border-bottom-left-radius`);if(n!==null&&(e.cornerRadius=n),r===null&&i===null&&a===null&&o===null)return;let s=n??0;e.topLeftRadius=r??s,e.topRightRadius=i??s,e.bottomRightRadius=a??s,e.bottomLeftRadius=o??s,e.independentCorners=[e.topLeftRadius,e.topRightRadius,e.bottomRightRadius,e.bottomLeftRadius].some(e=>e!==s)}function LD(e){return e===`center`?`CENTER`:e===`end`||e===`flex-end`?`MAX`:e===`space-between`?`SPACE_BETWEEN`:`MIN`}function RD(e){return e===`center`?`CENTER`:e===`end`||e===`flex-end`?`MAX`:e===`stretch`?`STRETCH`:e===`baseline`?`BASELINE`:`MIN`}function zD(e){return e===`center`?`CENTER`:e===`end`||e===`flex-end`?`MAX`:e===`stretch`?`STRETCH`:e===`baseline`?`BASELINE`:e===`start`||e===`flex-start`?`MIN`:`AUTO`}function BD(e){return e===`uppercase`?`UPPER`:e===`lowercase`?`LOWER`:e===`capitalize`?`TITLE`:`ORIGINAL`}function VD(e,t){let n=$(t,`gap`),r=$(t,`row-gap`),i=$(t,`column-gap`),a=e.layoutMode===`HORIZONTAL`,o=e.layoutWrap===`WRAP`;e.itemSpacing=(a?i:r)??n??0,e.counterAxisSpacing=(a?r:i)??(o?n??0:0)}function HD(e,t){let n=Q(t,`position`);(n===`absolute`||n===`fixed`)&&(e.layoutPositioning=`ABSOLUTE`);let r=$(t,`left`),i=$(t,`top`);r!==null&&(e.x=r),i!==null&&(e.y=i)}function UD(e,t){e.paddingTop=$(t,`padding-top`,`padding-block`,`padding`)??0,e.paddingRight=$(t,`padding-right`,`padding-inline`,`padding`)??0,e.paddingBottom=$(t,`padding-bottom`,`padding-block`,`padding`)??0,e.paddingLeft=$(t,`padding-left`,`padding-inline`,`padding`)??0}function WD(e){return e===`contain`||e===`scale-down`?`FIT`:e===`cover`?`FILL`:null}function GD(e){if(!e?.startsWith(`data:`))return null;let t=e.indexOf(`,`);if(t===-1)return null;let n=e.slice(0,t),r=e.slice(t+1);return n.endsWith(`;base64`)?at(r):null}function KD(e,t,n,r){if(n.tagName.toLowerCase()!==`img`)return;let i=n.attrs.src,a=GD(i);if(!a){i&&t.pluginData.push({pluginId:wD,key:TD,value:i});return}let o=ne(a);e.images.set(o,a),t.fills=[{type:`IMAGE`,imageHash:o,imageScaleMode:WD(Q(r,`object-fit`))??`FILL`,color:pe,opacity:1,visible:!0}]}function qD(e,t,n,r){AD(t,r),HD(t,r),UD(t,r);let i=OD(r,`background-color`);i.length>0&&(t.fills=i),KD(e,t,n,r);let a=vD(jD(r),MD(r)?.toString());if(a.length>0){let e=PD(r,a[0].weight);e.length>0&&(a[0].dashPattern=e,t.dashPattern=e),t.strokes=a,FD(t,r,a[0])}let o=SD(Q(r,`box-shadow`));o.length>0&&(t.effects=o);let s=hD(Q(r,`opacity`));s!==null&&(t.opacity=s),ID(t,r);let c=Q(r,`overflow`);(c===`hidden`||c===`clip`)&&(t.clipsContent=!0);let l=zD(Q(r,`align-self`));l!==`AUTO`&&(t.layoutAlignSelf=l);let u=Q(r,`display`);(u===`flex`||u===`inline-flex`)&&(t.layoutMode=Q(r,`flex-direction`)===`column`?`VERTICAL`:`HORIZONTAL`,t.primaryAxisAlign=LD(Q(r,`justify-content`)),t.counterAxisAlign=RD(Q(r,`align-items`)),t.layoutWrap=Q(r,`flex-wrap`)===`wrap`?`WRAP`:`NO_WRAP`,VD(t,r))}function JD(e,t){AD(e,t),HD(e,t);let n=OD(t,`color`);n.length>0&&(e.fills=n);let r=hD(Q(t,`font-size`));r!==null&&(e.fontSize=r);let i=hD(Q(t,`font-weight`));i!==null&&(e.fontWeight=i);let a=hD(Q(t,`line-height`));a!==null&&(e.lineHeight=a);let o=hD(Q(t,`letter-spacing`));o!==null&&(e.letterSpacing=o);let s=hD(Q(t,`opacity`));s!==null&&(e.opacity=s);let c=SD(Q(t,`text-shadow`));c.length>0&&(e.effects=c);let l=Q(t,`font-family`);l&&(e.fontFamily=l.split(`,`)[0]?.replaceAll(`"`,``).trim()||e.fontFamily),e.italic=Q(t,`font-style`)===`italic`;let u=Q(t,`text-align`)?.toUpperCase();(u===`CENTER`||u===`RIGHT`||u===`JUSTIFIED`)&&(e.textAlignHorizontal=u);let d=Q(t,`text-decoration-line`);d===`underline`&&(e.textDecoration=`UNDERLINE`),d===`line-through`&&(e.textDecoration=`STRIKETHROUGH`);let f=BD(Q(t,`text-transform`));f!==`ORIGINAL`&&(e.textCase=f),Q(t,`white-space`)===`nowrap`&&(e.maxLines=1)}function YD(e,t,n,r){let i=e.createNode(`TEXT`,t,{name:n.slice(0,32)||`Text`,text:n,width:Math.max(n.length*8,1),height:20});return JD(i,r),i}function XD(e){return`aspect-ratio.background-color.border-color.border-style.border-width.border-top-style.border-top-width.border-right-style.border-right-width.border-bottom-style.border-bottom-width.border-left-style.border-left-width.border-radius.box-shadow.display.height.padding.padding-top.padding-right.padding-bottom.padding-left.padding-block.padding-inline.width.min-width.max-width.min-height.max-height.object-fit.overflow.position.top.right.bottom.left.flex-wrap.align-self`.split(`.`).some(t=>Q(e,t)!==void 0)}function ZD(e,t,n){let r=CD(n);if(DD(n)&&!XD(r)&&n.children.every(e=>e.type===`text`))return YD(e,t,ED(n),r);let i=e.createNode(`FRAME`,t,{name:n.attrs.id||n.attrs.class||n.tagName,clipsContent:!1});qD(e,i,n,r);for(let t of n.children)QD(e,i.id,t,r);return i}function QD(e,t,n,r={}){return n.type===`text`?n.text.trim().length===0?null:YD(e,t,n.text,r):ZD(e,t,n)}function $D(e,t){let n=t.getChildren(e.id);n.length!==0&&(e.width=Math.max(...n.map(e=>e.x+e.width)),e.height=Math.max(...n.map(e=>e.y+e.height)))}function eO(e,t={}){let n=new me,r=n.getPages().find(e=>e.type===`CANVAS`)??n.addPage(`DesignDOM`);r.name=t.pageName??`DesignDOM`;for(let t of e.children)QD(n,r.id,t);return $D(r,n),n}function tO(e){return cD({sandbox:`iframe`,...e})}function nO(e){if(e)return e;if(typeof document>`u`)throw TypeError(`Browser DOM/CSS helpers require a DOM document`);return document}function rO(e,t){let n=t.defaultView?.DOMParser;if(!n)throw TypeError(`Browser DOM/CSS helpers require DOMParser`);let r=new n().parseFromString(e,`text/html`),i=Array.from(r.querySelectorAll(`style`)).map(e=>e.textContent?e.textContent.trim():``).filter(e=>!!e);return i.length>0?i.join(`
`):void 0}async function iO(e,t={}){let n=nO(t.document),r=tO({...t,document:n}),i=r.parseHTML(e),a=FE(rO(e,n),t.cssText);return r.computeStyles(i,a,t.compute)}async function aO(e,t={}){return eO(await iO(e,t),t)}async function oO(e,t){let n=t.getPages()[0];n&&wt(t,n.id),e.replaceGraph(t),e.undo.clear(),e.clearSelection();let r=n?.id??e.graph.rootId;await e.switchPage(r)}function sO(e){return e.name.replace(/\.(html?|xhtml)$/i,``)}function cO({editor:e,state:t,setDocumentSource:n,fitCurrentPageToViewport:r}){async function i(n,i){await ME();let a=i.documentName??`DOM Import`,o=await aO(n,{cssText:i.cssText,pageName:a});return await ME(),await oO(e,o),t.documentName=a,await r(),e.requestRender(),a}async function a(e,r={}){try{t.loading=!0,n(`${await i(e,r)}.html`,`html`),zt.info(`Imported DOM/CSS document`)}catch(e){throw console.error(`Failed to import DOM/CSS:`,e),zt.error(`Failed to import DOM/CSS: ${e instanceof Error?e.message:String(e)}`),e}finally{t.loading=!1}}async function o(e,r={}){try{t.loading=!0,await i(await e.text(),{cssText:r.cssText,documentName:sO(e)}),n(e.name,`html`,r.handle,r.path)}catch(e){console.error(`Failed to open DOM/CSS file:`,e),zt.error(`Failed to open DOM/CSS file: ${e instanceof Error?e.message:String(e)}`)}finally{t.loading=!1}}return{openDOMFile:o,importDOMText:a}}async function lO({documentName:e,filePath:t,fileHandle:n}){if(t&&Rt()){let{readFile:n}=await B(async()=>{let{readFile:e}=await import(`./dist-js-Cb84B2KY.js`);return{readFile:e}},__vite__mapDeps([19,12,20])),r=await n(t),i=new Blob([r]);return tx(new File([i],`${e}.fig`),{populate:`first-page`})}return n?tx(await n.getFile(),{populate:`first-page`}):null}function uO(e){return{viewport:{panX:e.panX,panY:e.panY,zoom:e.zoom},pageId:e.currentPageId}}function dO(e,t,n){e.clearSelection(),e.graph.getNode(n.pageId)?t.currentPageId=n.pageId:t.currentPageId=e.graph.getPages()[0]?.id??e.graph.rootId,t.panX=n.viewport.panX,t.panY=n.viewport.panY,t.zoom=n.viewport.zoom}function fO({editor:e,state:t,setDocumentSource:n,fitCurrentPageToViewport:r}){async function i(i,a,o){try{t.loading=!0,await ME();let s=await tx(i,{populate:`first-page`});await ME(),await oO(e,s),t.documentName=i.name.replace(/\.fig$/i,``),n(i.name,`fig`,a,o),await r(),e.requestRender()}catch(e){console.error(`Failed to open .fig file:`,e),zt.error(`Failed to open file: ${e instanceof Error?e.message:String(e)}`)}finally{t.loading=!1}}return{openFigFile:i}}function pO({editor:e,state:t,getFilePath:n,getFileHandle:r,setSavedVersion:i}){async function a(){let a=uO(t),o=n(),s=r(),c=await lO({documentName:t.documentName,filePath:o,fileHandle:s});if(!c)return;let l=c.getNode(a.pageId)?a.pageId:c.getPages()[0]?.id;l&&wt(c,l),e.replaceGraph(c),e.undo.clear(),dO(e,t,a),e.requestRender(),i(t.sceneVersion)}return{reloadFromDisk:a}}function mO({state:e,getSavedVersion:t,hasWritableSource:n,saveCurrentDocument:r}){return{disposeAutosave:u(()=>e.sceneVersion,async i=>{if(i!==t()&&e.autosaveEnabled&&n())try{await r()}catch(e){console.warn(`Autosave failed:`,e)}},{debounce:3e3})}}function hO(e){return e.split(/[\\/]/).pop()?.replace(/\.fig$/i,``)??`Untitled`}function gO(e){return e.split(/[\\/]/).pop()??`Untitled.fig`}function _O(e,t){return t===`fig`?e:e.replace(/\.[^.]+$/i,`.fig`)}async function vO(){let{save:e}=await B(async()=>{let{save:e}=await import(`./dist-js--UrKkpvq.js`);return{save:e}},__vite__mapDeps([26,12]));return e({defaultPath:`Untitled.fig`,filters:[{name:`Figma file`,extensions:[`fig`]}]})}async function yO(){if(!window.showSaveFilePicker)return null;try{return await window.showSaveFilePicker({suggestedName:`Untitled.fig`,types:[{description:`Figma file`,accept:{"application/octet-stream":[`.fig`]}}]})}catch(e){if(e.name===`AbortError`)return null;throw e}}function bO({state:e,getFilePath:t,getFileHandle:n,getStorageBinding:r,setSavedVersion:i,setLastWriteTime:a}){return async function(o){a(Date.now());let s=r();if(s)return await uE({providerId:s.providerId,canvasId:s.documentId,name:e.documentName||`Untitled`,figBytes:o}),i(e.sceneVersion),!0;let c=t(),l=n();if(c&&Rt()){let{writeFile:t}=await B(async()=>{let{writeFile:e}=await import(`./dist-js-Cb84B2KY.js`);return{writeFile:e}},__vite__mapDeps([19,12,20]));return await t(c,o),i(e.sceneVersion),!0}if(l){let t=await l.createWritable();return await t.write(new Uint8Array(o)),await t.close(),i(e.sceneVersion),!0}return!1}}function xO({state:e,buildFigFile:t,getFilePath:n,setFilePath:r,getFileHandle:i,setFileHandle:a,getDownloadName:o,setDownloadName:s,getStorageBinding:c,setStorageBinding:l,setSourceIdentity:u,setSavedVersion:d,setLastWriteTime:f,startWatchingFile:p}){let m=bO({state:e,getFilePath:n,getFileHandle:i,getStorageBinding:c,setSavedVersion:d,setLastWriteTime:f});async function h(){let e=n(),r=i(),a=c(),s=o();a||e||r?await m(await t())&&!a&&u({handle:r,path:e}):s?PE(new Uint8Array(await t()),s,`application/octet-stream`):await g()}async function g(){let n=await t();if(z){let t=await vO();if(!t)return;l(null),r(t),a(null),e.documentName=hO(t),await m(n)&&u({handle:null,path:t}),p();return}if(window.showSaveFilePicker){let t=await yO();if(!t)return;l(null),a(t),r(null),e.documentName=hO(t.name),await m(n)&&u({handle:t,path:null}),p();return}let i=prompt(`Save as:`,o()??`Untitled.fig`);i&&(l(null),s(i),e.documentName=hO(i),PE(new Uint8Array(n),i,`application/octet-stream`))}return{saveFigFile:h,saveFigFileAs:g,writeFile:m}}function SO(){let e=null,t=null,n=null,r={handle:null,path:null},i=null,a=0,o=0;return{getFileHandle:()=>e,setFileHandle:t=>{e=t},getFilePath:()=>t,setFilePath:e=>{t=e},getDownloadName:()=>n,setDownloadName:e=>{n=e},getSourceIdentity:()=>r,setSourceIdentity:e=>{r=e},getStorageBinding:()=>i,setStorageBinding:e=>{i=e},getSavedVersion:()=>a,setSavedVersion:e=>{a=e},getLastWriteTime:()=>o,setLastWriteTime:e=>{o=e}}}function CO({editor:e,state:t,stopWatchingFile:n,startWatchingFile:r,getFileHandle:i,setFileHandle:a,getFilePath:o,setFilePath:s,getDownloadName:c,setDownloadName:l,getStorageBinding:u,setStorageBinding:d,setSourceIdentity:f,getSavedVersion:p,setSavedVersion:m,setLastWriteTime:h,getRenderer:g}){function _(){return hx(e.graph,void 0,g()??void 0,t.currentPageId)}let{saveFigFile:v,saveFigFileAs:y,writeFile:b}=xO({state:t,buildFigFile:_,getFilePath:o,setFilePath:s,getFileHandle:i,setFileHandle:a,getDownloadName:c,setDownloadName:l,getStorageBinding:u,setStorageBinding:d,setSourceIdentity:f,setSavedVersion:m,setLastWriteTime:h,startWatchingFile:()=>{r()}}),{disposeAutosave:x}=mO({state:t,getSavedVersion:p,hasWritableSource:()=>!!i()||!!o()||!!u(),saveCurrentDocument:async()=>{await b(await _())}});function S(e,i,o,c){n(),d(null);let u=i===`fig`;a(u?o??null:null),s(u?c??null:null),l(_O(e,i)),f({handle:o??null,path:c??null}),m(t.sceneVersion),u&&(o||c)&&r()}function C(e,r){n(),a(null),s(null),l(`${r}.fig`),f({handle:null,path:null}),d(e),t.documentName=r,t.autosaveEnabled=!0,m(t.sceneVersion)}function w(e){n(),d(null),a(null),s(e);let r=gO(e);l(r),t.documentName=hO(r)}function T(){r()}function E(){n(),x()}return{setDocumentSource:S,setStorageDocumentSource:C,setPlannedFilePath:w,startWatchingCurrentFile:T,disposeDocumentIO:E,saveFigFile:v,saveFigFileAs:y,getStorageBinding:u}}var wO=1e3,TO=2e3,EO=500;async function DO(e,t,n){let{watch:r}=await B(async()=>{let{watch:e}=await import(`./dist-js-Cb84B2KY.js`);return{watch:e}},__vite__mapDeps([19,12,20])),i=await r(e,e=>{typeof e.type!=`object`||!(`modify`in e.type)||Date.now()-t()<wO||n()},{delayMs:EO});return()=>i()}async function OO(e,t,n,r,i){let a=(await e.getFile()).lastModified,{pause:o,resume:s}=l(()=>{c(e)},TO,{immediate:!1});s();async function c(e){if(t()!==e){i();return}try{let t=await e.getFile();if(t.lastModified>a){if(a=t.lastModified,Date.now()-n()<wO)return;r()}}catch{i()}}return o}function kO({getFilePath:e,getFileHandle:t,getLastWriteTime:n,reloadFromDisk:r}){let i=null;function a(){i&&=(i(),null)}async function o(){a();let o=e(),s=t();o&&z?i=await DO(o,n,r):s&&(i=await OO(s,t,n,r,a))}return{startWatchingFile:o,stopWatchingFile:a}}function AO(e,t,n){let r=SO();_d();let{reloadFromDisk:i}=pO({editor:e,state:t,getFilePath:r.getFilePath,getFileHandle:r.getFileHandle,setSavedVersion:r.setSavedVersion}),{startWatchingFile:a,stopWatchingFile:o}=kO({getFilePath:r.getFilePath,getFileHandle:r.getFileHandle,getLastWriteTime:r.getLastWriteTime,reloadFromDisk:()=>{i()}}),{setViewportSize:s,fitCurrentPageToViewport:c}=NE(e,n),l=CO({editor:e,state:t,stopWatchingFile:o,startWatchingFile:a,getRenderer:()=>e.renderer,...r}),{openFigFile:u}=fO({editor:e,state:t,setDocumentSource:l.setDocumentSource,fitCurrentPageToViewport:c}),{openDOMFile:d,importDOMText:f}=cO({editor:e,state:t,setDocumentSource:l.setDocumentSource,fitCurrentPageToViewport:c});return{downloadBlob:PE,setViewportSize:s,fitCurrentPageToViewport:c,getDocumentFilePath:r.getFilePath,getSourceIdentity:r.getSourceIdentity,getStorageBinding:r.getStorageBinding,setDocumentSource:l.setDocumentSource,setStorageDocumentSource:l.setStorageDocumentSource,setPlannedFilePath:l.setPlannedFilePath,startWatchingCurrentFile:l.startWatchingCurrentFile,disposeDocumentIO:l.disposeDocumentIO,openFigFile:u,openDOMFile:d,importDOMText:f,saveFigFile:l.saveFigFile,saveFigFileAs:l.saveFigFileAs}}function jO(e,t){let n=0;function r(){if(!e.renderer?.hasActiveFlashes){n=0;return}t.renderVersion++,n=requestAnimationFrame(r)}function i(t){let i=e.renderer;if(i){for(let e of t)i.flashNode(e);n||r()}}function a(t){e.renderer&&(e.renderer.aiMarkActive(t),n||r())}function o(t){e.renderer&&(e.renderer.aiMarkDone(t),n||r())}function s(t){e.renderer&&(e.renderer.aiFlashDone(t),n||r())}function c(){e.renderer?.aiClearAll()}return{flashNodes:i,aiMarkActive:a,aiMarkDone:o,aiFlashDone:s,aiClearAll:c}}function MO(e,t){async function n(){let n=new DataTransfer;await e.writeCopyData(n),t.clipboardHTML=n.getData(`text/html`)}async function r(){await n(),e.deleteSelected()}function i(){t.clipboardHTML&&e.pasteFromHTML(t.clipboardHTML)}return{mobileCopy:n,mobileCut:r,mobilePaste:i}}function NO(e,t,n){return{vertices:t,segments:n,dragTangent:null,oppositeDragTangent:null,closingToFirst:!1,pendingClose:!1,resumingNodeId:e.id,resumedFills:[...e.fills],resumedStrokes:[...e.strokes]}}function PO(e,t){let n=t,r=new Set([t]);for(;;){let t=!1;for(let i of e){let e=-1;if(i.start===n&&!r.has(i.end)?e=i.end:i.end===n&&!r.has(i.start)&&(e=i.start),e!==-1){r.add(e),n=e,t=!0;break}}if(!t)break}return n}function FO(e,t,n){let r=[],i=[],a=new Set,o=n;for(r.push(e[o]),a.add(o);;){let n=!1;for(let s of t){let t=-1,c=!1;if(s.start===o&&!a.has(s.end)?(t=s.end,c=!0):s.end===o&&!a.has(s.start)&&(t=s.start),t===-1)continue;let l=r.length-1;r.push(e[t]);let u=r.length-1;i.push({start:l,end:u,tangentStart:c?{...s.tangentStart}:{...s.tangentEnd},tangentEnd:c?{...s.tangentEnd}:{...s.tangentStart}}),a.add(t),o=t,n=!0;break}if(!n)break}return{orderedVertices:r,orderedSegments:i}}function IO(e,t){function n(n){t.penState&&n!==`PEN`&&n!==`HAND`&&e.penCommit(!1),e.setTool(n)}function r(n){let r=e.graph.getNode(n);if(r?.type!==`VECTOR`||!r.vectorNetwork)return;let i=I(_e(r,e.graph),r.vectorNetwork);t.penState=NO(r,i.vertices,i.segments),e.graph.deleteNode(n),e.clearSelection(),e.setTool(`PEN`),e.requestRender()}function i(n,r){let i=e.graph.getNode(n);if(i?.type!==`VECTOR`||!i.vectorNetwork)return;let a=I(_e(i,e.graph),i.vectorNetwork),o=a.vertices,s=a.segments,{orderedVertices:c,orderedSegments:l}=FO(o,s,PO(s,r));t.penState=NO(i,c,l),e.graph.deleteNode(n),e.clearSelection(),e.setTool(`PEN`),e.requestRender()}return{setTool:n,penResumeOnPath:r,penResumeFromEndpoint:i}}function LO(e){function t(){let e=document.querySelector(`[data-test-id="canvas-element"]`);if(e){let t=e.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2}}return{x:window.innerWidth/2,y:window.innerHeight/2}}function n(){let e=document.querySelector(`[data-test-id="canvas-element"]`);if(e){let t=e.getBoundingClientRect();return{x:t.width/2,y:t.height/2}}return{x:window.innerWidth/2,y:window.innerHeight/2}}function r(){let t=!(e.renderer?.profiler.hudVisible??!1);for(let n of e.canvasRenderers)n.profiler.setVisible(t);e.requestRepaint()}return{viewportScreenCenter:t,viewportCanvasCenter:n,toggleProfiler:r}}function RO(e,t,n){return Math.hypot(e.x,e.y)>1e-6?e:{x:t.x-n.x,y:t.y-n.y}}function zO(e,t,n,r){let i=t[0],a=Math.hypot(n.x,n.y);if(a<=1e-6)return i;let o={x:n.x/a,y:n.y/a},s=1/0;for(let n of t){let t=e.segments[n.segmentIndex],a=e.vertices[r],c=e.vertices[n.neighborIndex],l=RO(t[n.tangentField],c,a),u=Math.hypot(l.x,l.y);if(u<1e-6)continue;let d={x:l.x/u,y:l.y/u},f=o.x*d.x+o.y*d.y;f<s&&(s=f,i=n)}return i}function BO(e,t,n,r,i,a,o,s){let c=r.filter(e=>!(e.segmentIndex===n.segmentIndex&&e.tangentField===n.tangentField));if(c.length===0)return null;let l=e.vertices[n.neighborIndex],u=zO(e,c,RO(i[a],l,s),o),d=e.segments[u.segmentIndex],f=e.vertices[u.neighborIndex],p=RO(d[u.tangentField],f,s),m=Math.hypot(p.x,p.y);if(m<=1e-6)return null;let h={x:-p.x/m,y:-p.y/m},g=Math.max(0,t.x*h.x+t.y*h.y);return s.handleMirroring=`ANGLE`,{x:h.x*g,y:h.y*g}}function VO(e){return N({vertices:e.vertices,segments:e.segments,regions:e.regions})}function HO(e){e.history.push(VO(e))}function UO(e,t){!e.futureBaseline||e.future.length===0||ce(e.futureBaseline,t)||(e.future=[],e.futureBaseline=null)}function WO(e,t){function n(){let e=t.nodeEditState;e&&HO(e)}function r(t,n){let r=N(n);t.vertices=r.vertices,t.segments=r.segments,t.regions=r.regions,t.futureBaseline=N(n),t.selectedVertexIndices=new Set,t.selectedHandles=new Set,t.hoveredHandleInfo=null,e.requestRender()}function i(){let e=t.nodeEditState;if(!e)return;let n=VO(e);UO(e,n);let i=e.history.pop();for(;i&&ce(i,n);)i=e.history.pop();i&&(e.future.push(n),r(e,i))}function a(){let e=t.nodeEditState;if(!e)return;let n=VO(e);UO(e,n);let i=e.future.pop();i&&(e.history.push(n),r(e,i))}return{nodeEditPushHistory:n,nodeEditUndo:i,nodeEditRedo:a}}function GO(e,t){e.vertices=t.vertices.map(e=>({...e})),e.segments=t.segments.map(e=>({...e,tangentStart:{...e.tangentStart},tangentEnd:{...e.tangentEnd}})),e.regions=t.regions.map(e=>({windingRule:e.windingRule,loops:e.loops.map(e=>[...e])}))}function KO(e){return{vertices:e.vertices.map(e=>({...e})),segments:e.segments.map(e=>({...e,tangentStart:{...e.tangentStart},tangentEnd:{...e.tangentEnd}})),regions:e.regions.map(e=>({windingRule:e.windingRule,loops:e.loops.map(e=>[...e])}))}}function qO(e,t,n){function r(t,r){let i=n();if(!i||t===r||t<0||r<0||t>=i.vertices.length||r>=i.vertices.length)return;HO(i);let a=t,o=r,s=e=>e===a?o:e>a?e-1:e;GO(i,{vertices:i.vertices.filter((e,t)=>t!==a),segments:i.segments.map(e=>({...e,tangentStart:{...e.tangentStart},tangentEnd:{...e.tangentEnd},start:s(e.start),end:s(e.end)})).filter(e=>e.start!==e.end),regions:[]}),i.selectedVertexIndices=new Set([s(o)]),i.selectedHandles=new Set,e.requestRender()}function i(r,i){let a=n();if(!a)return;let o=KO(a),s=Ae(r,i,o,8/t.zoom);if(!s)return;HO(a);let c=Ie(o,s.segmentIndex,s.t);GO(a,c.network),a.selectedVertexIndices=new Set([c.newVertexIndex]),a.selectedHandles=new Set,e.requestRender()}function a(t){let r=n();if(!r)return;let i=$e(KO(r),t);i&&(HO(r),GO(r,i),r.selectedVertexIndices=new Set,r.selectedHandles=new Set,e.requestRender())}return{nodeEditConnectEndpoints:r,nodeEditAddVertex:i,nodeEditRemoveVertex:a}}function JO(e,t){function n(n,r,i,a){let o=t();if(!o)return;let s=o.segments[n],c=a?.breakMirroring??!1,l=a?.continuous??!1,u=a?.lockDirection??!1,d=r===`tangentStart`?s.start:s.end,f=o.vertices[d],p=KO(o),m=Be(p,d),h=m.find(e=>e.segmentIndex===n&&e.tangentField===r),g={x:i.x,y:i.y};l&&h&&(g=BO(o,i,h,m,s,r,d,f)??g),s[r]=g;let _=f.handleMirroring??`NONE`;if(u&&_===`NONE`){s[r]={x:i.x,y:i.y},e.requestRepaint();return}if(c){f.handleMirroring=`NONE`,e.requestRepaint();return}if(_===`NONE`){e.requestRepaint();return}let v=Fe(p,d,n);if(!v){e.requestRepaint();return}let y=o.segments[v.segmentIndex],b=y[v.tangentField],x=_===`ANGLE`?Math.hypot(b.x,b.y):void 0,S=Xe(g,_,x);S&&(y[v.tangentField]=S),e.requestRepaint()}function r(n,r,i,a,o,s){let c=t();if(!c||o==null||s==null)return;let l=Be(KO(c),n);if(l.length===0)return;let u=l.filter(e=>e.segmentIndex===o&&e.tangentField===s);if(u.length===0)return;let d={x:r,y:i},f=a?{x:r,y:i}:{x:-r,y:-i},p=u[0];c.segments[p.segmentIndex][p.tangentField]=d;for(let e=1;e<u.length;e++){let t=u[e];c.segments[t.segmentIndex][t.tangentField]=d}if(!a)for(let e of l)u.includes(e)||(c.segments[e.segmentIndex][e.tangentField]=f);c.vertices[n].handleMirroring=a?`NONE`:`ANGLE_AND_LENGTH`,e.requestRepaint()}function i(n){let r=t();if(!r)return;HO(r);let i=Be(KO(r),n);for(let e of i)r.segments[e.segmentIndex][e.tangentField]={x:0,y:0};r.vertices[n].handleMirroring=`NONE`,e.requestRepaint()}return{nodeEditSetHandle:n,nodeEditBendHandle:r,nodeEditZeroVertexHandles:i}}function YO(e,t){function n(){return t.nodeEditState}function r(t){let n=e.graph.getNode(t.nodeId);if(n?.type!==`VECTOR`||ce(KO(t),t.origAbsNetwork))return;let r=_e(n,e.graph),i=ee.invert(r);if(!i)return;let a=I(i,KO(t)),o=Ne(a),s={vertices:a.vertices.map(e=>({...e,x:e.x-o.x,y:e.y-o.y})),segments:a.segments,regions:a.regions},c=P(n),l=ee.mapPoint(c,{x:o.x+o.width/2,y:o.y+o.height/2});e.updateNodeWithUndo(n.id,{x:l.x-o.width/2,y:l.y-o.height/2,width:o.width,height:o.height,vectorNetwork:s,fillGeometry:Qe(s,n.fillGeometry),strokeGeometry:[]},`Edit vector`),e.requestRender()}function i(n){let r=e.graph.getNode(n);if(r?.type!==`VECTOR`||!r.vectorNetwork)return;let i=I(_e(r,e.graph),r.vectorNetwork);t.nodeEditState={nodeId:n,origNetwork:N(r.vectorNetwork),origBounds:{x:r.x,y:r.y,width:r.width,height:r.height},origAbsNetwork:N(i),vertices:i.vertices,segments:i.segments,regions:i.regions,history:[],future:[],selectedVertexIndices:new Set,draggedHandleInfo:null,selectedHandles:new Set,hoveredHandleInfo:null},e.select([n]),e.requestRender()}function a(i){let a=n();if(a){if(e.graph.getNode(a.nodeId)?.type!==`VECTOR`){t.nodeEditState=null,e.requestRender();return}i?r(a):(e.graph.updateNode(a.nodeId,{x:a.origBounds.x,y:a.origBounds.y,width:a.origBounds.width,height:a.origBounds.height,vectorNetwork:N(a.origNetwork)}),e.requestRender()),t.nodeEditState=null}}return{getNodeEditState:n,applyNodeEditToNode:r,enterNodeEditMode:i,exitNodeEditMode:a}}function XO(e,t){function n(){return t.nodeEditState}function r(t,r){let i=n();if(i){if(r){let e=new Set(i.selectedVertexIndices);e.has(t)?e.delete(t):e.add(t),i.selectedVertexIndices=e}else i.selectedVertexIndices=new Set([t]);e.requestRepaint()}}function i(t,r){let i=n();if(!i||i.selectedVertexIndices.size<2)return;HO(i);let a=[...i.selectedVertexIndices],o=t===`horizontal`?`x`:`y`,s=1/0,c=-1/0;for(let e of a){let t=i.vertices[e][o];t<s&&(s=t),t>c&&(c=t)}let l=(s+c)/2;r===`min`?l=s:r===`max`&&(l=c);for(let e of a)i.vertices[e]={...i.vertices[e],[o]:l};e.requestRepaint()}function a(){let t=n();if(!t||t.selectedHandles.size===0&&t.selectedVertexIndices.size===0)return;HO(t);let r=KO(t);for(let e of t.selectedHandles){let[t,n]=e.split(`:`),i=Number(t),a=r.segments[i];n===`tangentStart`?a.tangentStart={x:0,y:0}:a.tangentEnd={x:0,y:0}}let i=[...t.selectedVertexIndices].sort((e,t)=>t-e);for(let e of i){let t=Ve(r,e);if(!t)break;r=t}GO(t,r),t.selectedVertexIndices=new Set,t.selectedHandles=new Set,e.requestRender()}function o(){let t=n();if(!t||t.selectedVertexIndices.size===0)return;HO(t);let[r]=t.selectedVertexIndices;GO(t,Ge(KO(t),r)),t.selectedHandles=new Set,t.selectedVertexIndices=new Set([r]),e.requestRender()}return{nodeEditSelectVertex:r,nodeEditAlignVertices:i,nodeEditDeleteSelected:a,nodeEditBreakAtVertex:o}}function ZO(e,t){let{getNodeEditState:n,applyNodeEditToNode:r,enterNodeEditMode:i,exitNodeEditMode:a}=YO(e,t),{nodeEditSelectVertex:o,nodeEditAlignVertices:s,nodeEditDeleteSelected:c,nodeEditBreakAtVertex:l}=XO(e,t),{nodeEditSetHandle:u,nodeEditBendHandle:d,nodeEditZeroVertexHandles:f}=JO(e,n),{nodeEditPushHistory:p,nodeEditUndo:m,nodeEditRedo:h}=WO(e,t),{nodeEditConnectEndpoints:g,nodeEditAddVertex:_,nodeEditRemoveVertex:v}=qO(e,t,n);return{getNodeEditState:n,setNodeEditNetwork:GO,getLiveNetwork:KO,applyNodeEditToNode:r,enterNodeEditMode:i,exitNodeEditMode:a,nodeEditSelectVertex:o,nodeEditSetHandle:u,nodeEditBendHandle:d,nodeEditZeroVertexHandles:f,nodeEditConnectEndpoints:g,nodeEditAddVertex:_,nodeEditRemoveVertex:v,nodeEditAlignVertices:s,nodeEditDeleteSelected:c,nodeEditBreakAtVertex:l,nodeEditPushHistory:p,nodeEditUndo:m,nodeEditRedo:h}}function QO(e,t){Object.defineProperties(e,{graph:{enumerable:!0,get:()=>t.graph},renderer:{enumerable:!0,get:()=>t.renderer},textEditor:{enumerable:!0,get:()=>t.textEditor}})}function $O(e,t){let n=s(()=>(t.sceneVersion,e.getSelectedNodes()));return{selectedNodes:n,selectedNode:s(()=>n.value.length===1?n.value[0]:void 0),layerTree:s(()=>(t.sceneVersion,e.getLayerTree()))}}function ek(e,t,n,r){let i=jO(e,t),a=IO(e,t),o=ZO(e,t),s=AO(e,t,r),c=AE(e,t,n,s.downloadBlob),l=MO(e,t),u=LO(e);return{...i,...a,...o,openFigFile:s.openFigFile,openDOMFile:s.openDOMFile,importDOMText:s.importDOMText,setViewportSize:s.setViewportSize,fitCurrentPageToViewport:s.fitCurrentPageToViewport,saveFigFile:s.saveFigFile,saveFigFileAs:s.saveFigFileAs,getDocumentFilePath:s.getDocumentFilePath,getSourceIdentity:s.getSourceIdentity,getStorageBinding:s.getStorageBinding,setDocumentSource:s.setDocumentSource,setStorageDocumentSource:s.setStorageDocumentSource,setPlannedFilePath:s.setPlannedFilePath,startWatchingCurrentFile:s.startWatchingCurrentFile,dispose:()=>{e.clearPageViewports(),s.disposeDocumentIO()},...c,...l,...u}}function tk(e){return{...dv(e),showUI:!0,showRulers:!0,showRemoteCursors:!0,activeRibbonTab:`panels`,panelMode:`design`,actionToast:null,mobileDrawerSnap:`closed`,clipboardHTML:``,autosaveEnabled:!1,cursorCanvasX:null,cursorCanvasY:null,nodeEditState:null,renameSelectionOpen:!1,renameNodeId:null,numberFieldFocused:!1}}function nk(e){let t=e??new me,n=a(tk(t.getPages()[0].id)),r={width:0,height:0},i=Zv({graph:t,state:n,loadFont:kS,resolveFigmaClipboardImages:z?_E:void 0,skipInitialGraphSetup:!!e,getViewportSize:()=>r.width>0&&r.height>0?r:{width:window.innerWidth,height:window.innerHeight}}),o=new ky(Mx);yE(i),e&&i.subscribeToGraph();let{selectedNodes:s,selectedNode:c,layerTree:l}=$O(i,n),u=ek(i,n,o,r),d={...i,state:n,selectedNodes:s,selectedNode:c,layerTree:l,...u};return QO(d,i),d}function rk(e){return!!(e.handle||e.path)}async function ik(e,t){if(!e||!t)return!1;if(e===t)return!0;try{return await e.isSameEntry(t)}catch{return!1}}async function ak(e,t){return e.path&&t.path&&e.path===t.path?!0:ik(e.handle,t.handle)}async function ok(e,t){if(!rk(t))return null;for(let n of e){let e=n.store.getSourceIdentity();if(await ak(e,t)&&n.store.getSourceIdentity()===e)return n}return null}function sk(){let e=[],t=Promise.resolve();async function n(e){let n=t,r=()=>void 0;t=new Promise(e=>{r=e}),await n;try{return await e()}finally{r()}}async function r(t){if(!rk(t))return null;for(let n of e)if(await ak(n.identity,t))return n;return null}function i(t){e.push(t)}function a(t){let n=e.indexOf(t);n!==-1&&e.splice(n,1)}return{add:i,decide:n,findPending:r,remove:a}}var ck=new ky(Mx),lk=sk(),uk=1;function dk(){return`tab-${uk++}`}var fk=c([]),pk=c(``),mk=s(()=>fk.value.find(e=>e.id===pk.value)),hk=s(()=>fk.value.map(e=>({id:e.id,name:e.store.state.documentName,isActive:e.id===pk.value})));function gk(){let e=fk.value.find(e=>e.id===pk.value);if(!e)throw Error(`No active tab`);return e.store}function _k(){return pk.value}function vk(e){return fk.value.find(t=>t.id===e)}function yk(e){return fk.value.find(t=>t.store===e)}function bk(){return[...fk.value]}function xk(e,t){let n=e??nk(t),r={id:dk(),store:n};return fk.value=[...fk.value,r],Sk(r),r}function Sk(e){pk.value=e.id,qw(e.store),r(fk),eT(e.store)}function Ck(e){let t=fk.value.find(t=>t.id===e);t&&Sk(t)}function wk(e){let t=fk.value.findIndex(t=>t.id===e);if(t===-1)return;let n=fk.value[t],r=pk.value===e;if(fk.value=fk.value.filter(t=>t.id!==e),fk.value.length===0){xk(),n.store.dispose();return}if(r){let e=Math.min(t,fk.value.length-1);Sk(fk.value[e])}n.store.dispose()}function Tk(){return new Promise(e=>{requestAnimationFrame(()=>e())})}function Ek(e){return/\.(html?|xhtml)$/i.test(e.name)}function Dk(){let e=mk.value;return e?.store.state.documentName===`Untitled`&&!e.store.undo.canUndo?e.store:xk().store}function Ok(e,t){return fk.value.find(n=>{let r=n.store.getStorageBinding();return r?.providerId===e&&r.documentId===t})}async function kk(e){let t=Lw.value,n=Ok(t,e.id);if(n){Ck(n.id);return}let r=Dk();r.state.documentName=e.name,r.state.loading=!0;try{let n=xT(),i=await n.getMeta(e.id),a=i?.hasFig?await n.readFig(e.id):null,o=i?.syncStatus!==`synced`||!e.metadataAuthoritative||i.updatedAt>=e.updatedAt,s=a&&o?a:null;s||(s=await Ww(t).getDocument(e.id),await dE({providerId:t,canvasId:e.id,name:e.name,updatedAt:e.updatedAt,figBytes:s}));let c=new Uint8Array(s.byteLength);c.set(s);let l=await tx(new File([c.buffer],`${e.name}.fig`,{type:`application/octet-stream`}),{populate:`first-page`}),u=l.getPages()[0]?.id;u&&wt(l,u),r.replaceGraph(l),r.undo.clear(),r.setStorageDocumentSource({providerId:t,documentId:e.id},e.name),r.clearSelection();let d=r.graph.getPages()[0]?.id??r.graph.rootId;await r.switchPage(d),await r.fitCurrentPageToViewport()}finally{r.state.loading=!1}}async function Ak(e,t,n){let r={handle:t??null,path:n??null},i=await lk.decide(async()=>{let t=await lk.findPending(r);if(t){let e=yk(t.store);return e&&Ck(e.id),{kind:`pending`,completion:t.completion}}let n=await ok(fk.value,r);if(n)return Ck(n.id),{kind:`existing`};let i=Dk();i.state.documentName=e.name.replace(/\.[^.]+$/i,``),i.state.loading=!0;let a=Promise.withResolvers();a.promise.catch(()=>void 0);let o={completion:a.promise,identity:r,store:i};return lk.add(o),{kind:`owner`,completion:a,pendingOpen:o,store:i}});if(i.kind===`existing`)return;if(i.kind===`pending`){await i.completion;return}let{completion:a,pendingOpen:o,store:s}=i;try{if(Ek(e)){await s.openDOMFile(e,{handle:t,path:n}),a.resolve(void 0);return}await Tk();let{graph:r,sourceFormat:i}=e.name.toLowerCase().endsWith(`.fig`)?{graph:await tx(e,{populate:`first-page`}),sourceFormat:`fig`}:await ck.readDocument({name:e.name,mimeType:e.type||void 0,data:new Uint8Array(await e.arrayBuffer())}),o=r.getPages()[0]?.id;o&&wt(r,o),s.replaceGraph(r),s.undo.clear(),s.setDocumentSource(e.name,i,t,n),s.clearSelection();let c=s.graph.getPages()[0]?.id??s.graph.rootId;await s.switchPage(c),await s.fitCurrentPageToViewport(),a.resolve(void 0)}catch(e){throw a.reject(e),e}finally{s.state.loading=!1,lk.remove(o)}}function jk(){return fk.value.length}function Mk(){return{tabs:hk,activeTabId:pk,createTab:xk,switchTab:Ck,closeTab:wk,getActiveTabId:_k,getTabById:vk,getTabForStore:yk,getTabsSnapshot:bk,openFileInNewTab:Ak,openStorageDocumentInNewTab:kk,getActiveStore:gk,tabCount:jk}}export{Kx as $,zw as A,lC as B,Yw as C,Hw as D,Ww as E,kC as F,wS as G,bS as H,DC as I,vS as J,TS as K,jC as L,Bw as M,Iw as N,Uw as O,AC as P,yS as Q,xC as R,Jw as S,Zw as T,ES as U,xS as V,lS as W,SS as X,cS as Y,_S as Z,lE as _,ul as _t,gk as a,gy as at,tT as b,yk as c,wy as ct,kk as d,Tg as dt,qx as et,Ck as f,Cg as ft,sE as g,ll as gt,jE as h,Zu as ht,xk as i,Dy as it,Vw as j,Lw as k,bk as l,hy as lt,Mk as m,sp as mt,hk as n,ky as nt,_k as o,_y as ot,jk as p,wg as pt,kS as q,wk as r,Oy as rt,vk as s,Sy as st,mk as t,Mx as tt,Ak as u,k_ as ut,GT as v,cl as vt,Kw as w,nT as x,xT as y,sC as z};