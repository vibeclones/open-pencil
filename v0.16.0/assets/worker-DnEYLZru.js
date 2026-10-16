(function(){function e(e,t){let n={};for(let r=0;r<e.length;r++){let i=e[r],a=t(i,r,e);Object.hasOwn(n,a)||(n[a]=[]),n[a].push(i)}return n}function t(e,t){let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i];t(a,i,e)?n.push(a):r.push(a)}return[n,r]}function n(){return{minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function r(e,t,n){e.minX=Math.min(e.minX,t),e.minY=Math.min(e.minY,n),e.maxX=Math.max(e.maxX,t),e.maxY=Math.max(e.maxY,n)}function i(e){return e.minX===1/0?{x:0,y:0,width:0,height:0}:{x:e.minX,y:e.minY,width:e.maxX-e.minX,height:e.maxY-e.minY}}function a(e){return e===0?0:e===1||e===2?1:e===3?2:e===4?3:null}function o(e){let t=n();for(let n of e){let e=n.commandsBlob,i=new DataView(e.buffer,e.byteOffset,e.byteLength),o=0;for(;o<e.length;){let n=e[o++],s=a(n);if(s==null)break;for(let n=0;n<s&&!(o+8>e.length);n++)r(t,i.getFloat32(o,!0),i.getFloat32(o+4,!0)),o+=8}}return t.minX===1/0?null:i(t)}function s(){return{self:new Map,descendants:new Map}}function c(e){return{self:new Map([...e.self].map(([e,t])=>[e,structuredClone(t)])),descendants:new Map([...e.descendants].map(([e,t])=>[e,new Map([...t].map(([e,t])=>[e,structuredClone(t)]))]))}}function l(e,t,n,r){return n===t?e.self.get(r):e.descendants.get(n)?.get(r)}function u(e,t,n,r){return(n===t?e.self:e.descendants.get(n))?.has(r)??!1}function d(e,t,n,r,i=!0){if(n===t){e.self.set(r,i);return}let a=e.descendants.get(n)??new Map;a.set(r,i),e.descendants.set(n,a)}function f(e){e.self.clear(),e.descendants.clear()}function p(e,t){for(let[n,r]of e.self)t(``,n,r);for(let[n,r]of e.descendants)for(let[e,i]of r)t(n,e,i)}let m={r:0,g:0,b:0,a:1};function h(){return{format:null,id:null,orderKey:null,editedFields:[],fig:{rawSize:null,rawTransform:null,rawNodeFields:{},layout:null,symbolOverrides:[],componentPropAssignments:[],derivedSymbolData:[],derivedSymbolDataLayoutVersion:null,uniformScaleFactor:null}}}function g(e){return e===`LINE`||e===`VECTOR`?`CENTER`:e===`TEXT`?`OUTSIDE`:`INSIDE`}function _(e,t,n={}){return{id:e(),type:t,name:t.charAt(0)+t.slice(1).toLowerCase(),parentId:null,childIds:[],x:0,y:0,width:100,height:100,rotation:0,source:h(),derivedLayout:null,fills:t===`TEXT`?[{type:`SOLID`,color:m,opacity:1,visible:!0}]:[],strokes:[],effects:[],layoutGrids:[],guides:[],fillStyleId:null,strokeStyleId:null,textStyleId:null,effectStyleId:null,gridStyleId:null,sharedStyleType:null,opacity:1,cornerRadius:0,topLeftRadius:0,topRightRadius:0,bottomRightRadius:0,bottomLeftRadius:0,independentCorners:!1,cornerSmoothing:0,visible:!0,locked:!1,clipsContent:!1,text:``,fontSize:14,fontFamily:`Inter`,fontWeight:400,italic:!1,textAlignHorizontal:`LEFT`,textDirection:`AUTO`,textLanguage:null,leadingTrim:`NONE`,lineHeight:null,letterSpacing:0,layoutMode:`NONE`,layoutDirection:`AUTO`,layoutWrap:`NO_WRAP`,primaryAxisAlign:`MIN`,counterAxisAlign:`MIN`,primaryAxisSizing:`FIXED`,counterAxisSizing:`FIXED`,itemSpacing:0,counterAxisSpacing:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,blendMode:`PASS_THROUGH`,layoutPositioning:`AUTO`,layoutGrow:0,layoutAlignSelf:`AUTO`,vectorNetwork:null,handleMirroring:`NONE`,fillGeometry:[],strokeGeometry:[],arcData:null,textAlignVertical:`TOP`,textAutoResize:`NONE`,textCase:`ORIGINAL`,textDecoration:`NONE`,textDecorationStyle:`SOLID`,textDecorationThickness:null,textDecorationFills:[],textDecorationSkipInk:!0,textUnderlineOffset:null,maxLines:null,textParagraphs:[],listSpacing:0,paragraphSpacing:0,paragraphIndent:0,hangingList:!1,styleRuns:[],fontVariations:[],fontFeatures:[],horizontalConstraint:`MIN`,verticalConstraint:`MIN`,strokeCap:`NONE`,strokeJoin:`MITER`,dashPattern:[],borderTopWeight:0,borderRightWeight:0,borderBottomWeight:0,borderLeftWeight:0,independentStrokeWeights:!1,strokeWeight:1,strokeAlign:g(t),strokeMiterLimit:4,minWidth:null,maxWidth:null,minHeight:null,maxHeight:null,targetAspectRatio:null,isMask:!1,maskType:`ALPHA`,maskIsOutline:!1,gridTemplateColumns:[],gridTemplateRows:[],gridColumnGap:0,gridRowGap:0,gridPosition:null,counterAxisAlignContent:`AUTO`,itemReverseZIndex:!1,strokesIncludedInLayout:!1,expanded:!0,textTruncation:`DISABLED`,autoRename:!0,pointCount:5,starInnerRadius:.38,componentId:null,instanceOverrides:s(),componentPropertyDefinitions:[],componentPropertyReferences:[],componentPropertyAssignments:{},componentPropertyValues:{},componentKey:null,sourceLibraryKey:null,publishId:null,overrideKey:null,sharedSymbolVersion:null,publishedVersion:null,librarySource:null,isPublishable:!1,isSymbolPublishable:!1,isExposedInstance:!1,symbolDescription:``,symbolLinks:[],variantPropSpecs:[],boundVariables:{},variableBindingScales:{},variableAssignmentScales:{},componentScale:1,variableModes:{},exportSettings:[],pluginData:[],pluginRelaunchData:[],internalOnly:!1,flipX:!1,flipY:!1,textPicture:null,derivedTextGlyphs:null,textPathData:null,textPathBox:null,booleanOperation:void 0,...n}}let v=new Set([`CANVAS`,`FRAME`,`GROUP`,`BOOLEAN_OPERATION`,`SECTION`,`COMPONENT`,`COMPONENT_SET`,`INSTANCE`]),y=typeof globalThis==`object`&&globalThis||typeof window==`object`&&window||typeof self==`object`&&self||typeof global==`object`&&global||(function(){return this})();function b(e){return y.Buffer!==void 0&&y.Buffer.isBuffer(e)}function x(e){if(!e||typeof e!=`object`)return!1;let t=Object.getPrototypeOf(e);return t===null||t===Object.prototype||Object.getPrototypeOf(t)===null?Object.prototype.toString.call(e)===`[object Object]`:!1}function S(e){return x(e)&&Object.keys(e).length===0}function C(e){return Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))}function w(e){return e==null?e===void 0?`[object Undefined]`:`[object Null]`:Object.prototype.toString.call(e)}let T=`[object Object]`;function E(e,t){return e===t||Number.isNaN(e)&&Number.isNaN(t)}function D(e,t,n){return O(e,t,void 0,void 0,void 0,void 0,n)}function O(e,t,n,r,i,a,o){let s=o(e,t,n,r,i,a);if(s!==void 0)return s;if(typeof e==typeof t)switch(typeof e){case`bigint`:case`string`:case`boolean`:case`symbol`:case`undefined`:return e===t;case`number`:return e===t||Object.is(e,t);case`function`:return e===t;case`object`:return k(e,t,a,o)}return k(e,t,a,o)}function k(e,t,n,r){if(Object.is(e,t))return!0;let i=w(e),a=w(t);if(i===`[object Arguments]`&&(i=T),a===`[object Arguments]`&&(a=T),i!==a)return!1;switch(i){case`[object String]`:return e.toString()===t.toString();case`[object Number]`:return E(e.valueOf(),t.valueOf());case`[object Boolean]`:case`[object Date]`:case`[object Symbol]`:return Object.is(e.valueOf(),t.valueOf());case`[object RegExp]`:return e.source===t.source&&e.flags===t.flags;case`[object Function]`:return e===t}n??=new Map;let o=n.get(e),s=n.get(t);if(o!=null&&s!=null)return o===t;n.set(e,t),n.set(t,e);try{switch(i){case`[object Map]`:if(e.size!==t.size)return!1;for(let[i,a]of e.entries())if(!t.has(i)||!O(a,t.get(i),i,e,t,n,r))return!1;return!0;case`[object Set]`:{if(e.size!==t.size)return!1;let i=Array.from(e.values()),a=Array.from(t.values());for(let o=0;o<i.length;o++){let s=i[o],c=a.findIndex(i=>O(s,i,void 0,e,t,n,r));if(c===-1)return!1;a.splice(c,1)}return!0}case`[object Array]`:case`[object Uint8Array]`:case`[object Uint8ClampedArray]`:case`[object Uint16Array]`:case`[object Uint32Array]`:case`[object BigUint64Array]`:case`[object Int8Array]`:case`[object Int16Array]`:case`[object Int32Array]`:case`[object BigInt64Array]`:case`[object Float32Array]`:case`[object Float64Array]`:if(b(e)!==b(t)||e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(!O(e[i],t[i],i,e,t,n,r))return!1;return!0;case`[object ArrayBuffer]`:return e.byteLength===t.byteLength&&k(new Uint8Array(e),new Uint8Array(t),n,r);case`[object DataView]`:return e.byteLength!==t.byteLength||e.byteOffset!==t.byteOffset?!1:k(new Uint8Array(e),new Uint8Array(t),n,r);case`[object Error]`:return e.name===t.name&&e.message===t.message;case T:{if(!(k(e.constructor,t.constructor,n,r)||x(e)&&x(t)))return!1;let i=[...Object.keys(e),...C(e)],a=[...Object.keys(t),...C(t)];if(i.length!==a.length)return!1;for(let a=0;a<i.length;a++){let o=i[a],s=e[o];if(!Object.hasOwn(t,o))return!1;let c=t[o];if(!O(s,c,o,e,t,n,r))return!1}return!0}default:return!1}}finally{n.delete(e),n.delete(t)}}function A(){}function j(e,t){return D(e,t,A)}function M(e,t){let n=t=>({x:e[0]*t.x+e[1]*t.y,y:e[3]*t.x+e[4]*t.y});return{vertices:t.vertices.map(t=>({...t,x:e[0]*t.x+e[1]*t.y+e[2],y:e[3]*t.x+e[4]*t.y+e[5]})),segments:t.segments.map(e=>({...e,tangentStart:n(e.tangentStart),tangentEnd:n(e.tangentEnd)})),regions:t.regions.map(e=>({windingRule:e.windingRule,loops:e.loops.map(e=>[...e])}))}}function N(e){return{vertices:e.vertices.map(e=>({...e})),segments:e.segments.map(e=>({...e,tangentStart:{...e.tangentStart},tangentEnd:{...e.tangentEnd}})),regions:e.regions.map(e=>({windingRule:e.windingRule,loops:e.loops.map(e=>[...e])}))}}function P(e){let t={x:0,y:0};return{vertices:e.vertices,segments:e.segments.map(e=>({start:e.start,end:e.end,tangentStart:e.tangentStart??{...t},tangentEnd:e.tangentEnd??{...t}})),regions:e.regions??[]}}function F(e){let t={...e,color:{...e.color}};return e.gradientStops&&(t.gradientStops=e.gradientStops.map(me)),e.gradientTransform&&(t.gradientTransform={...e.gradientTransform}),e.imageTransform&&(t.imageTransform={...e.imageTransform}),e.patternSpacing&&(t.patternSpacing={...e.patternSpacing}),e.noiseSize&&(t.noiseSize={...e.noiseSize}),t}function ee(e){let t=F(e);return e.dashPattern&&(t.dashPattern=[...e.dashPattern]),t}function te(e){return{...e,color:{...e.color},offset:{...e.offset}}}function ne(e){let t={...e,style:{...e.style,fills:e.style.fills?e.style.fills.map(F):void 0,textDecorationFills:e.style.textDecorationFills?e.style.textDecorationFills.map(F):void 0,fontVariations:e.style.fontVariations?e.style.fontVariations.map(e=>({...e})):void 0,fontFeatures:e.style.fontFeatures?e.style.fontFeatures.map(e=>({...e})):void 0}};return e.style.hyperlink&&(t.style.hyperlink={...e.style.hyperlink}),e.style.boundVariables&&(t.style.boundVariables={...e.style.boundVariables}),t}let re=new WeakMap;function I(e,t){return re.set(t,re.get(e)??e),t}function L(e){return e.map(F)}function ie(e){return e.map(ee)}function ae(e){return e.map(te)}function oe(e){return e.map(e=>({...e,color:e.color?{...e.color}:void 0}))}function se(e){return e.map(ne)}function ce(e,t){return{windingRule:e.windingRule,commandsBlob:t,...e.fills?{fills:L(e.fills)}:{}}}function le(e){return e.map(e=>ce(e,e.commandsBlob.slice()))}function ue(e,t,n,r,i,o=0,s=0){let c=e.slice(),l=new DataView(c.buffer,c.byteOffset,c.byteLength),u=0;for(;u<c.length;){let e=c[u++],d=a(e);if(d==null)break;for(let e=0;e<d&&!(u+8>c.length);e++){let e=l.getFloat32(u,!0),a=l.getFloat32(u+4,!0);l.setFloat32(u,t*e+n*a+o,!0),l.setFloat32(u+4,r*e+i*a+s,!0),u+=8}}return c}function de(e,t,n,r,i,a=0,o=0){return e.map(e=>ce(e,ue(e.commandsBlob,t,n,r,i,a,o)))}function fe(e,t,n){return t===1&&n===1?le(e):de(e,t,0,0,n)}function pe(e,t){if(e!==void 0)return e.length>0?t(e):[]}function me(e){return{color:{...e.color},position:e.position}}function he(e){return e?.map(e=>({...e}))??[]}function ge(e){return e?.map(e=>({...e,variantOptions:e.variantOptions?[...e.variantOptions]:void 0,preferredValues:e.preferredValues?[...e.preferredValues]:void 0,slotSettings:e.slotSettings?{...e.slotSettings}:void 0}))??[]}function _e(e){return e?e.map(e=>({...e,commandsBlob:new Uint8Array(e.commandsBlob)})):null}function ve(e){return{startingAngle:e.startingAngle,endingAngle:e.endingAngle,innerRadius:e.innerRadius}}function ye(e,t,n=`deep`){let{id:r,parentId:i,childIds:a,...o}=e;return n===`fig-import`?{...o,...t===null?{}:{componentId:t},source:h(),boundVariables:{...e.boundVariables},variableBindingScales:{...e.variableBindingScales},variableAssignmentScales:{...e.variableAssignmentScales},variableModes:{...e.variableModes},instanceOverrides:c(e.instanceOverrides),componentPropertyAssignments:{...e.componentPropertyAssignments},componentPropertyValues:{...e.componentPropertyValues}}:{...o,...t===null?{}:{componentId:t},boundVariables:{...e.boundVariables},variableBindingScales:{...e.variableBindingScales},variableAssignmentScales:{...e.variableAssignmentScales},variableModes:{...e.variableModes},instanceOverrides:c(e.instanceOverrides),fills:pe(e.fills,e=>I(e,L(e))),strokes:pe(e.strokes,e=>I(e,ie(e))),effects:pe(e.effects,e=>I(e,ae(e))),layoutGrids:pe(e.layoutGrids,oe),guides:pe(e.guides,e=>e.map(e=>({...e}))),styleRuns:pe(e.styleRuns,e=>I(e,se(e))),source:t===null?structuredClone(e.source):h(),dashPattern:pe(e.dashPattern,e=>[...e]),fontVariations:pe(e.fontVariations,e=>e.map(e=>({...e}))),fontFeatures:pe(e.fontFeatures,e=>e.map(e=>({...e}))),textParagraphs:pe(e.textParagraphs,e=>e.map(e=>({...e}))),textDecorationFills:pe(e.textDecorationFills,L),fillGeometry:pe(e.fillGeometry,le),strokeGeometry:pe(e.strokeGeometry,le),gridTemplateColumns:he(e.gridTemplateColumns),gridTemplateRows:he(e.gridTemplateRows),componentPropertyDefinitions:ge(e.componentPropertyDefinitions),componentPropertyReferences:he(e.componentPropertyReferences),componentPropertyAssignments:{...e.componentPropertyAssignments},symbolLinks:he(e.symbolLinks),variantPropSpecs:he(e.variantPropSpecs),pluginData:he(e.pluginData),pluginRelaunchData:he(e.pluginRelaunchData),exportSettings:he(e.exportSettings),componentPropertyValues:{...e.componentPropertyValues},derivedLayout:e.derivedLayout?{...e.derivedLayout}:null,arcData:e.arcData?ve(e.arcData):null,vectorNetwork:e.vectorNetwork?N(e.vectorNetwork):null,textPicture:e.textPicture?new Uint8Array(e.textPicture):null,derivedTextGlyphs:e.derivedTextGlyphs?I(e.derivedTextGlyphs,_e(e.derivedTextGlyphs)??[]):null,textPathData:e.textPathData?structuredClone(e.textPathData):null,textPathBox:e.textPathBox?{...e.textPathBox}:null,gridPosition:e.gridPosition?{...e.gridPosition}:null,targetAspectRatio:e.targetAspectRatio?{...e.targetAspectRatio}:null}}let be=[`text`,`fontSize`,`fontFamily`,`fontWeight`,`italic`,`letterSpacing`,`styleRuns`,`fontVariations`,`fontFeatures`,`textParagraphs`,`listSpacing`,`paragraphSpacing`,`paragraphIndent`,`hangingList`],xe=[...be,`lineHeight`,`textCase`,`textDirection`,`textAlignHorizontal`,`textAlignVertical`],Se=[`width`,`height`,`textAutoResize`,`maxLines`];function Ce(e){return e===`VERTICAL`?`VERTICAL`:`HORIZONTAL`}function we(e,t){if(!(!e||e.layoutMode===`NONE`||t.layoutPositioning===`ABSOLUTE`))return e}function Te(e,t){return t.parentId?e.getNode(t.parentId):void 0}function Ee(e,t,n){return e.layoutMode===`NONE`?!1:n===Ce(e.layoutMode)?t.layoutGrow>0:t.layoutAlignSelf===`STRETCH`||t.layoutAlignSelf===`AUTO`&&e.layoutMode!==`GRID`&&e.counterAxisAlign===`STRETCH`}function De(e,t){if(e.layoutMode!==`NONE`)return t===Ce(e.layoutMode)?`primaryAxisSizing`:`counterAxisSizing`}function Oe(e,t){return e===`WIDTH_AND_HEIGHT`||t===`VERTICAL`&&e===`HEIGHT`}function ke(e,t){if(e.type===`TEXT`)return Oe(e.textAutoResize,t);let n=De(e,t);return n!==void 0&&e[n]===`HUG`}function Ae(e,t,n){return je(Te(e,t),t,n)}function je(e,t,n){let r=we(e,t);return r&&Ee(r,t,n)?`FILL`:ke(t,n)&&(r||t.layoutMode!==`NONE`)?`HUG`:`FIXED`}let Me=new Set(be);function Ne(e,t,n,r){let i={...t,...r};if(i.type===`TEXT`){if(xe.every(e=>j(i[e],n[e])))return{width:!1,height:!1};let e=i.textAutoResize;return{width:e===`WIDTH_AND_HEIGHT`,height:e===`WIDTH_AND_HEIGHT`||e===`HEIGHT`}}let a=t=>{let n=Ae(e,i,t);return n===`FILL`||n===`HUG`&&i.layoutMode!==`NONE`};return{width:a(`HORIZONTAL`),height:a(`VERTICAL`)}}function Pe(e,t,n,r){let i=Ne(e,n,r,t);i.width&&Reflect.deleteProperty(t,`width`),i.height&&Reflect.deleteProperty(t,`height`)}function Fe(e,t){t.type!==`TEXT`||!t.derivedLayout||Object.keys(e).some(e=>Me.has(e))&&(e.derivedLayout=null)}function Ie(e,t){let n=new Set,r=t.componentId?e.getNode(t.componentId):void 0;for(;r?.type===`INSTANCE`&&r.componentId&&!n.has(r.id);)n.add(r.id),r=e.getNode(r.componentId);return r?.type===`COMPONENT`?r:void 0}function Le(e){return e.componentPropertyReferences.find(e=>e.field===`SLOT_CONTENT`)?.propertyId}function Re(e,t,n=Le(t)){if(!n)return!1;let r=t.parentId?e.nodes.get(t.parentId):void 0;for(;r&&r.type!==`INSTANCE`;)r=r.parentId?e.nodes.get(r.parentId):void 0;return!!r&&Object.hasOwn(r.componentPropertyAssignments,n)}function ze(e,t,n){let r=Ie(e,t);return[r,r?.parentId?e.nodes.get(r.parentId):void 0].flatMap(e=>e?.componentPropertyDefinitions??[]).find(e=>e.id===n&&e.type===`SLOT`)?.name}function Be(e,t){let n=[],r=t=>{for(let i of t.childIds){let t=e.nodes.get(i);t&&(Le(t)?n.push(t):t.type!==`INSTANCE`&&r(t))}};return r(t),n}function Ve(e,t){let n=[],r=t=>{for(let i of t.childIds){let t=e.nodes.get(i);!t||Le(t)||(t.type===`INSTANCE`?n.push(t):r(t))}};return r(t),n}function He(e,t,n){let r=t;for(let t of n)r&&=Ve(e,r).find(e=>e.name===t);return r}function Ue(e,t){let n={slots:[],propertyIds:[]},r=(i,a)=>{for(let t of Ve(e,i))r(t,[...a,t.name]);for(let r of Be(e,i)){let o=Le(r);if(!o||!Object.hasOwn(i.componentPropertyAssignments,o))continue;i.id===t.id&&n.propertyIds.push(o);let s=ze(e,i,o),c=[...a,s].join(`\0`);if(!s||n.slots.some(e=>[...e.path,e.name].join(`\0`)===c))continue;let l=[...r.childIds];for(let n of l)e.reorderChild(n,t.id,t.childIds.length);n.slots.push({path:a,name:s,content:l})}};return r(t,[]),n}function We(e,t,n){if(!(n.slots.length===0&&n.propertyIds.length===0)){e.updateNode(t.id,{componentPropertyAssignments:Object.fromEntries(Object.entries(t.componentPropertyAssignments).filter(([e])=>!n.propertyIds.includes(e)))});for(let r of n.slots){let n=He(e,t,r.path),i=n&&Be(e,n).find(t=>{let i=Le(t);return!!i&&ze(e,n,i)===r.name}),a=i&&Le(i);if(!n||!i||!a||Object.hasOwn(n.componentPropertyAssignments,a)){for(let t of r.content)e.deleteNode(t);continue}for(let t of Array.from(i.childIds))e.deleteNode(t);for(let[t,n]of r.content.entries())e.reorderChild(n,i.id,t);e.updateNode(n.id,{componentPropertyAssignments:{...n.componentPropertyAssignments,[a]:``}})}}}function Ge(e,t){return{instanceId:e,overrides:t,matched:new Set,leftovers:new Set}}function Ke(e,t){let n=e.type===`INSTANCE`?l(t.overrides,t.instanceId,e.id,`sourceComponentId`):void 0;return typeof n==`string`?n:e.componentId??void 0}function qe(e,t,n){if(t.type===`INSTANCE`||u(n.overrides,n.instanceId,t.id,`componentId`))return!1;let r=t.componentId?e.nodes.get(t.componentId):void 0;return!r||!Re(e,t,Le(r))}function Je(e,t){if(t.copies)return t.copies;let n=new Map,r=i=>{for(let a of i.childIds){let i=e.nodes.get(a);if(!i)continue;let o=Ke(i,t);o&&n.set(o,[...n.get(o)??[],i]),qe(e,i,t)&&r(i)}},i=e.nodes.get(t.instanceId);return i&&r(i),t.copies=n,n}function Ye(e,t,n,r){return Je(e,t).get(n)?.find(n=>!t.matched.has(n.id)&&e.nodes.has(n.id)&&n.id!==r&&!e.isDescendant(r,n.id))}function Xe(e,t,n){let r=Je(e,t);return r.size!==0&&(e.nodes.get(n)?.childIds??[]).some(n=>r.get(n)?.some(e=>!t.matched.has(e.id))||Xe(e,t,n))}let Ze=new WeakMap;function Qe(e){let t=Ze.get(e);return t||(t={byInstance:new Map,removals:[]},Ze.set(e,t)),t}function $e(e,t){if(t.keys.length===0)return;let n=Qe(e);for(n.removals.push(t);n.removals.length>200;){let e=n.removals.shift();for(let[t,r]of e?.keys??[]){let i=n.byInstance.get(t);!i||i.get(r)?.removals!==e||(i.delete(r),i.size===0&&n.byInstance.delete(t))}}}let et=new WeakMap;function tt(e,t){let n=et.get(e);if(n)return t(n);let r={keys:[]};et.set(e,r);try{return t(r)}finally{et.delete(e),$e(e,r)}}function nt(e,t,n,r){let i=Qe(e),a=i.byInstance.get(t.instanceId),o=a?.get(n);if(!a||!o)return;a.delete(n),a.size===0&&i.byInstance.delete(t.instanceId);let s=o.nodes.at(0);if(!(!s||o.nodes.some(t=>e.nodes.has(t.id)))){for(let t of o.nodes){let{id:n,type:i,parentId:a,childIds:o,...c}=structuredClone(t);e.createNodeWithId(n,i,n===s.id?r:a,c)}for(let[e,n]of o.overrides)t.overrides.descendants.set(e,new Map(n));return e.nodes.get(s.id)}}function rt(e,t,n){let r=Qe(e);for(let i of t.leftovers){let a=e.nodes.get(i),o=a?Ke(a,t):void 0;if(!a||!o||t.matched.has(i))continue;let s=[],c=t=>{s.push(structuredClone(t));for(let n of t.childIds){let t=e.nodes.get(n);t&&c(t)}};c(a);let l=new Map;for(let e of s){let n=t.overrides.descendants.get(e.id);n&&l.set(e.id,new Map(n)),t.overrides.descendants.delete(e.id)}let u=r.byInstance.get(t.instanceId);u||(u=new Map,r.byInstance.set(t.instanceId,u)),u.set(o,{nodes:s,overrides:l,removals:n}),n.keys.push([t.instanceId,o]),e.deleteNode(i)}t.leftovers.clear()}function it(e,t){let n=new Set;return e.closest(t,t=>{if(t.type===`COMPONENT`&&n.add(t.id),t.type===`INSTANCE`){let r=Ie(e,t);r&&n.add(r.id)}return!1}),n}function at(e,t,n){let r=it(e,n);if(r.size===0)return!1;let i=new Set;function a(t){if(r.has(t))return!0;if(i.has(t))return!1;i.add(t);let n=e.getNode(t);return n?n.type===`INSTANCE`&&n.componentId&&a(n.componentId)?!0:n.childIds.some(a):!1}return a(t)}function ot(e,t,n){return e.getNode(t)?.type===`COMPONENT`&&!at(e,t,n)}let st=`name.text.fontSize.fontWeight.fontFamily.italic.textDirection.letterSpacing.lineHeight.textCase.textDecoration.textDecorationStyle.textDecorationThickness.textUnderlineOffset.textDecorationFills.textDecorationSkipInk.textAlignHorizontal.textAlignVertical.textAutoResize.textTruncation.maxLines.leadingTrim.paragraphSpacing.paragraphIndent.listSpacing.hangingList.fontVariations.fontFeatures.styleRuns.textParagraphs`.split(`.`),ct={styleRuns:`text`,textParagraphs:`text`},lt=`width.height.minWidth.maxWidth.minHeight.maxHeight.targetAspectRatio.fills.strokes.effects.opacity.cornerRadius.topLeftRadius.topRightRadius.bottomRightRadius.bottomLeftRadius.independentCorners.layoutMode.layoutDirection.layoutWrap.primaryAxisAlign.counterAxisAlign.primaryAxisSizing.counterAxisSizing.itemSpacing.counterAxisSpacing.paddingTop.paddingRight.paddingBottom.paddingLeft.gridTemplateColumns.gridTemplateRows.gridColumnGap.gridRowGap.gridPosition.clipsContent.itemReverseZIndex.strokesIncludedInLayout.layoutGrids.blendMode.cornerSmoothing.strokeWeight.strokeAlign.strokeCap.strokeJoin.strokeMiterLimit.dashPattern.independentStrokeWeights.borderTopWeight.borderRightWeight.borderBottomWeight.borderLeftWeight.boundVariables.variableModes.fillStyleId.strokeStyleId.textStyleId.effectStyleId.gridStyleId`.split(`.`),ut=[`layoutGrow`,`layoutAlignSelf`,`locked`],dt=[`x`,`y`,`rotation`,`flipX`,`flipY`,`horizontalConstraint`,`verticalConstraint`,`layoutPositioning`,`counterAxisAlignContent`,`isMask`,`maskType`,`arcData`,`pointCount`,`starInnerRadius`],ft=[...lt,...st,...ut,`visible`,...dt];Object.freeze({listType:`NONE`,indentation:0});let pt=[`listSpacing`,`paragraphSpacing`,`paragraphIndent`];function mt(e){return pt.some(t=>e[t]!==void 0)}function ht(e,t,n){let{[t]:r,...i}=e;return n===void 0?i:{...i,[t]:n}}function gt(e,t){let n=e.slice(0,t).map(e=>({...e}));for(;n.length>0;){let e=n[n.length-1];if(e.listType!==`NONE`||e.indentation!==0||mt(e))break;n.pop()}return n}function _t(e,t){return e.listType===`NONE`?{...e,indentation:Math.max(0,Math.min(5,Math.round(t)))}:{...e,indentation:vt(t)}}function vt(e){return Math.max(1,Math.min(5,Math.round(e)))}function yt(e,t){return e==null?null:e*t}function bt(e,t){return e.map(e=>({...structuredClone(e),weight:e.weight*t,dashPattern:e.dashPattern?.map(e=>e*t)}))}function xt(e,t){return e.map(e=>({...structuredClone(e),offset:{x:e.offset.x*t,y:e.offset.y*t},radius:e.radius*t,spread:e.spread*t}))}function St(e,t){return e.map(e=>({...structuredClone(e),scale:e.scale==null?void 0:e.scale*t,spacing:e.spacing==null?void 0:e.spacing*t,patternSpacing:e.patternSpacing?{x:e.patternSpacing.x*t,y:e.patternSpacing.y*t}:void 0,noiseSize:e.noiseSize?{x:e.noiseSize.x*t,y:e.noiseSize.y*t}:void 0}))}function Ct(e,t){return e.map(e=>({...structuredClone(e),style:{...structuredClone(e.style),fontSize:e.style.fontSize==null?void 0:e.style.fontSize*t,letterSpacing:e.style.letterSpacing==null?void 0:e.style.letterSpacing*t,lineHeight:yt(e.style.lineHeight??null,t),textDecorationThickness:yt(e.style.textDecorationThickness??null,t),textUnderlineOffset:yt(e.style.textUnderlineOffset??null,t)}}))}function wt(e,t){return e.map(e=>{let n={...e};for(let r of pt){let i=e[r];i!==void 0&&(n[r]=i*t)}return n})}function Tt(e,t){return e.map(e=>({...structuredClone(e),offset:e.offset==null?void 0:e.offset*t,sectionSize:e.sectionSize==null?void 0:e.sectionSize*t,gutterSize:e.gutterSize==null?void 0:e.gutterSize*t}))}function Et(e,t){return e.map(e=>({...e,value:e.sizing===`FIXED`?e.value*t:e.value}))}function Dt(e,t){if(!e.vectorNetwork)return null;let n=N(e.vectorNetwork);for(let e of n.vertices)e.x*=t,e.y*=t;for(let e of n.segments)e.tangentStart.x*=t,e.tangentStart.y*=t,e.tangentEnd.x*=t,e.tangentEnd.y*=t;return n}function Ot(e,t,n){return{x:n?e.x*t:e.x,y:n?e.y*t:e.y,width:e.width*t,height:e.height*t,minWidth:yt(e.minWidth,t),maxWidth:yt(e.maxWidth,t),minHeight:yt(e.minHeight,t),maxHeight:yt(e.maxHeight,t),cornerRadius:e.cornerRadius*t,topLeftRadius:e.topLeftRadius*t,topRightRadius:e.topRightRadius*t,bottomRightRadius:e.bottomRightRadius*t,bottomLeftRadius:e.bottomLeftRadius*t,fontSize:e.fontSize*t,letterSpacing:e.letterSpacing*t,lineHeight:yt(e.lineHeight,t),textDecorationThickness:yt(e.textDecorationThickness,t),textUnderlineOffset:yt(e.textUnderlineOffset,t),styleRuns:Ct(e.styleRuns,t),listSpacing:e.listSpacing*t,paragraphSpacing:e.paragraphSpacing*t,paragraphIndent:e.paragraphIndent*t,textParagraphs:wt(e.textParagraphs,t),itemSpacing:e.itemSpacing*t,counterAxisSpacing:e.counterAxisSpacing*t,paddingTop:e.paddingTop*t,paddingRight:e.paddingRight*t,paddingBottom:e.paddingBottom*t,paddingLeft:e.paddingLeft*t,gridColumnGap:e.gridColumnGap*t,gridRowGap:e.gridRowGap*t,gridTemplateColumns:Et(e.gridTemplateColumns,t),gridTemplateRows:Et(e.gridTemplateRows,t),strokes:bt(e.strokes,t),strokeWeight:e.strokeWeight*t,dashPattern:e.dashPattern.map(e=>e*t),borderTopWeight:e.borderTopWeight*t,borderRightWeight:e.borderRightWeight*t,borderBottomWeight:e.borderBottomWeight*t,borderLeftWeight:e.borderLeftWeight*t,strokeMiterLimit:e.strokeMiterLimit,effects:xt(e.effects,t),fills:St(e.fills,t),layoutGrids:Tt(e.layoutGrids,t),vectorNetwork:Dt(e,t),fillGeometry:fe(e.fillGeometry,t,t),strokeGeometry:fe(e.strokeGeometry,t,t)}}let kt=new Set(`opacity.width.height.minWidth.maxWidth.minHeight.maxHeight.x.y.rotation.cornerRadius.topLeftRadius.topRightRadius.bottomLeftRadius.bottomRightRadius.strokeWeight.borderTopWeight.borderBottomWeight.borderLeftWeight.borderRightWeight.fontSize.letterSpacing.lineHeight.paddingLeft.paddingRight.paddingTop.paddingBottom.itemSpacing.counterAxisSpacing.gridRowGap.gridColumnGap`.split(`.`));function At(e){return kt.has(e)}let jt=new Set([`text`,`fontFamily`]),Mt=new Set([`visible`]);function Nt(e,t){let n={...e.variableBindingScales},r={...e.variableAssignmentScales};for(let i of kt)i===`opacity`||i===`rotation`||(i in e.boundVariables&&(n[i]=(n[i]??1)*t),e.type===`INSTANCE`&&(r[i]=(r[i]??1)*t));return{variableBindingScales:n,variableAssignmentScales:r}}function Pt(e){let t=e.targetAspectRatio;return!t||!(t.x>0)||!(t.y>0)||e.type===`TEXT`&&e.textAutoResize!==`NONE`?null:t.x/t.y}let Ft=new Set([`STRETCH`,`SCALE`]);function It(e,t,n){return n===`MAX`?{position:e.position+e.size-t,size:t}:n===`CENTER`?{position:e.position+(e.size-t)/2,size:t}:{position:e.position,size:t}}function Lt(e,t,n,r,i){let a=Ft.has(n);return i===null||a===Ft.has(r)?{x:e,y:t}:a?{x:e,y:It(t,e.size/i,r)}:{x:It(e,t.size*i,n),y:t}}function Rt(e,t,n,r,i){let a=Math.round(r)-Math.round(n);if(i===`MAX`)return{position:e+a,size:t};if(i===`CENTER`)return{position:e+Math.round(r/2)-Math.round(n/2),size:t};if(i===`STRETCH`)return{position:e,size:Math.abs(t+a)};if(i===`SCALE`&&n>0){let i=r/n;return{position:Math.round(e*i*128)/128,size:t*i}}return{position:e,size:t}}function zt(e,t,n,r,i,a=null){let o=Lt(Rt(e.x,e.width,t.width,n.width,r),Rt(e.y,e.height,t.height,n.height,i),r,i,a);return{x:o.x.position,y:o.y.position,width:o.x.size,height:o.y.size}}let Bt=new Set([`x`,`y`,`width`,`height`]);function Vt(e,t,n,r){let i={width:t.width*r,height:t.height*r};if(i.width===n.width&&i.height===n.height)return e;let a=zt(e,i,n,e.horizontalConstraint,e.verticalConstraint,Pt(e));return{...e,...a}}let Ht=[`strokes`,`strokeWeight`,`strokeAlign`,`strokeCap`,`strokeJoin`,`strokeMiterLimit`,`dashPattern`],Ut=(e,t)=>Math.abs(e-t)<=.001;function Wt(e,t){if(!e||!t)return e===t;if(e.vertices.length!==t.vertices.length||e.segments.length!==t.segments.length)return!1;let n=e.vertices.every((e,n)=>{let{x:r,y:i,...a}=e,{x:o,y:s,...c}=t.vertices[n];return Ut(r,o)&&Ut(i,s)&&j(a,c)}),r=e.segments.every((e,n)=>{let r=t.segments[n];return e.start===r.start&&e.end===r.end&&Ut(e.tangentStart.x,r.tangentStart.x)&&Ut(e.tangentStart.y,r.tangentStart.y)&&Ut(e.tangentEnd.x,r.tangentEnd.x)&&Ut(e.tangentEnd.y,r.tangentEnd.y)});return n&&r&&j(e.regions,t.regions)}function Gt(e,t,n){if(n.type!==`VECTOR`)return;let r=e.width??t.width,i=e.height??t.height,a=n.width>0?r/n.width:1,o=n.height>0?i/n.height:1,s=a!==1||o!==1,c=n.vectorNetwork?(e=>s?M([a,0,0,0,o,0,0,0,1],e):N(e))(n.vectorNetwork):null;if(Wt(t.vectorNetwork,c))return;let l=e=>s?fe(e,a,o):le(e),u=Ht.every(r=>j(e[r]??t[r],n[r]));e.vectorNetwork=c,e.fillGeometry=l(n.fillGeometry),e.strokeGeometry=u?l(n.strokeGeometry):[]}function Kt(e,t,n){e[t]=n}function qt(e,t,n){if(n===`fills`)Kt(e,n,L(t.fills));else if(n===`strokes`)Kt(e,n,ie(t.strokes));else if(n===`effects`)Kt(e,n,ae(t.effects));else if(n===`styleRuns`)Kt(e,n,se(t.styleRuns));else if(n===`boundVariables`)Kt(e,n,{...t.boundVariables}),Kt(e,`variableBindingScales`,{...t.variableBindingScales});else if(n===`variableModes`)Kt(e,n,{...t.variableModes});else if(n===`gridPosition`)Kt(e,n,t.gridPosition?{...t.gridPosition}:null);else if(n===`targetAspectRatio`)Kt(e,n,t.targetAspectRatio?{...t.targetAspectRatio}:null);else{let r=t[n];Kt(e,n,Array.isArray(r)?structuredClone(r):r)}}function Jt(e){let t=new Set;for(let n of e){let e=[...n].some(e=>e.startsWith(`boundVariables/`));for(let r of n)(r!==`boundVariables`||!e)&&t.add(r)}return e=>t.has(e)}function Yt(e,t,n,r){if(r(`boundVariables`))return;let i={...t.boundVariables},a={...t.variableBindingScales};for(let n of new Set([...Object.keys(t.boundVariables),...Object.keys(e.boundVariables),...Object.keys(e.variableBindingScales)]))r(`boundVariables/${n}`)&&(Object.hasOwn(e.boundVariables,n)?i[n]=e.boundVariables[n]:Reflect.deleteProperty(i,n),e.variableBindingScales[n]===void 0?Reflect.deleteProperty(a,n):a[n]=e.variableBindingScales[n]);n.boundVariables=i,n.variableBindingScales=a}function Xt(e,t,n){return n(t)||t in e.boundVariables&&(n(`boundVariables`)||n(`boundVariables/${t}`))}function Zt(e,t){let n=t/e.componentScale;if(!Number.isFinite(n)||n<=0)throw Error(`Invalid component coordinate scale`);return n===1?e:{...e,...Ot(e,n,!0),...Nt(e,n)}}function Qt(e,t,n,{compParent:r,instParent:i,factor:a,skip:o}){let s=i.layoutMode!==`NONE`&&n.layoutPositioning!==`ABSOLUTE`,c=s?n:Vt(n,r,i,a);for(let r of ft){if(r===`boundVariables`||s&&(r===`x`||r===`y`)||o(r))continue;let i=ct[r];if(i&&o(i))continue;let a=Bt.has(r)?c:n;j(t[r],a[r])||qt(e,a,r)}Gt(e,t,n),Fe(e,t)}function $t(e,t,n){let r=Object.fromEntries(Object.entries(n).filter(([e,n])=>!j(t[e],n)));Object.keys(r).length&&e.updateNode(t.id,r)}function en(e,t,n,r,i=`deep`){let a=t.componentScale*r.componentScale/n.componentScale;return e.createNode(t.type,r.id,{...ye(Zt(t,a),t.id,i),componentScale:a})}function tn(e,t,n,r=`deep`){if(t===n||e.isDescendant(n,t))return;let i=e.nodes.get(t),a=e.nodes.get(n);if(!(!i||!a))for(let t of i.childIds){let n=e.nodes.get(t);if(!n)continue;let o=en(e,n,i,a,r);n.childIds.length>0&&tn(e,t,o.id,r)}}function nn(e,t){let n=[],r=t.parentId?e.nodes.get(t.parentId):void 0;for(;r;)r.type===`INSTANCE`&&n.push(new Set(r.instanceOverrides.descendants.get(t.id)?.keys())),r=r.parentId?e.nodes.get(r.parentId):void 0;return n}let rn={VISIBLE:`visible`,TEXT:`text`,INSTANCE_SWAP:`componentId`};function an(e,t,n){let r=t.componentId?e.nodes.get(t.componentId):void 0;for(let t=0;r?.type===`INSTANCE`&&t<16;t++)r=r.componentId?e.nodes.get(r.componentId):void 0;let i=r?.parentId?e.nodes.get(r.parentId):void 0,a=i?.type===`COMPONENT_SET`?i:void 0;return[r,a].flatMap(e=>e?.componentPropertyDefinitions??[]).some(e=>e.id===n)}function on(e,t,n){let r=t;for(;r;){if(r.type===`INSTANCE`){if(Object.hasOwn(r.componentPropertyAssignments,n))return r.componentPropertyAssignments[n];if(an(e,r,n))return}r=r.parentId?e.nodes.get(r.parentId):void 0}}function sn(e,t,n){return on(e,t,n)!==void 0}function cn(e,t){for(let n of t.componentPropertyReferences){let r=rn[n.field];if(!r)continue;let i=on(e,t,n.propertyId);i!==void 0&&(r===`visible`?e.updateNode(t.id,{visible:i===`true`}):r===`text`?e.updateNode(t.id,{text:i}):r===`componentId`&&t.type===`INSTANCE`&&e.nodes.has(i)&&e.swapInstanceComponent(t.id,i))}for(let n of e.getChildren(t.id))cn(e,n)}function ln(e,t,n){let r=new Set;for(let i of n.componentPropertyReferences){let n=rn[i.field];n&&sn(e,t,i.propertyId)&&r.add(n)}return r}function un(e,t,n){let r={};for(let i of n.componentPropertyReferences){let n=on(e,t,i.propertyId);n!==void 0&&(i.field===`TEXT`&&t.type===`TEXT`?r.text=n:i.field===`VISIBLE`&&(r.visible=n===`true`))}return r}function dn(e,t,n){let r=nn(e,t);return r.push(new Set(n.descendants.get(t.id)?.keys())),Jt(r)}function fn(e,t,n,r){n.type===`INSTANCE`?d(e,t,n.id,`sourceComponentId`,r):n.componentId=r}function pn(e,t,n,r,i,a,o){let s=new Map,c=new Map,l=new Map;for(let n of t.childIds){if(a.has(n))continue;let t=e.nodes.get(n);t&&l.set(t.type,(l.get(t.type)??0)+1)}for(let t of n.childIds){let n=e.nodes.get(t);if(!n||o.has(n.id))continue;c.set(n.type,(c.get(n.type)??0)+1);let r=s.get(n.type);r||(r=new Map,s.set(n.type,r));let i=r.get(n.name);i?i.push(n):r.set(n.name,[n])}for(let n of t.childIds){if(a.has(n))continue;let t=e.nodes.get(n);if(!t)continue;let u=s.get(t.type),d=c.get(t.type)??0;if(d>(l.get(t.type)??0))continue;let f=u?.get(t.name)?.shift();f&&(c.set(t.type,d-1),a.set(n,f),o.add(f.id),fn(i,r,f,n))}}function mn(e,t,n,r,i){let a=new Map;for(let e=0;e<r.length;e++)a.set(r[e],e);let o=new Map;for(let s=0;s<t.childIds.length;s++){let c=t.childIds[s],u=e.nodes.get(c),d=u?l(i,n,u.id,`sourceComponentId`):void 0,f=typeof d==`string`?d:u?.componentId,p=f?a.get(f):void 0;o.set(c,p??r.length+s)}t.childIds.toSorted((e,t)=>(o.get(e)??0)-(o.get(t)??0)).forEach((r,i)=>{t.childIds[i]!==r&&e.insertChildAt(r,n,i)})}function hn(e,t,n){return t===n||e.isDescendant(n,t)}function gn(e,t,n,r,i,a,o){for(let s of t.childIds){let t=e.nodes.get(s);if(!t)continue;let c=l(r,n,t.id,`sourceComponentId`),u=typeof c==`string`?c:t.componentId;u&&i.has(u)&&(a.set(u,t),o.add(t.id))}}function _n(e,t,n,r,i,a){for(let e of r.values())a.matched.add(e.id);for(let o of t.childIds){if(r.has(o))continue;let s=Ye(e,a,o,n.id)??nt(e,a,o,n.id);if(s){e.insertChildAt(s.id,n.id,n.childIds.length),r.set(o,s),i.add(s.id),a.matched.add(s.id);continue}let c=e.nodes.get(o);if(!c)continue;let l=en(e,c,t,n);c.childIds.length>0&&!Xe(e,a,o)&&tn(e,o,l.id),cn(e,l),r.set(o,l),i.add(l.id),a.matched.add(l.id)}for(let e of n.childIds)i.has(e)||a.leftovers.add(e)}function vn(e,t,n,r,i=Ge(n,r)){if(hn(e,t,n))return;let a=e.nodes.get(t),o=e.nodes.get(n);if(!a||!o)return;let s=new Map,c=new Set;gn(e,o,n,r,new Set(a.childIds),s,c),pn(e,a,o,n,r,s,c),_n(e,a,o,s,c,i);for(let t of a.childIds){let c=e.nodes.get(t),l=s.get(t);if(!c||!l)continue;let d=dn(e,l,r),f=ln(e,l,c),p=c.componentScale*o.componentScale/a.componentScale,m=Zt(c,p),h={componentScale:p,componentPropertyReferences:structuredClone(c.componentPropertyReferences)};Yt(l,m,h,d),Qt(h,l,m,{compParent:a,instParent:o,factor:p/c.componentScale,skip:e=>f.has(e)||Xt(l,e,d)}),Object.assign(h,un(e,l,c)),Pe(e,h,l,m),$t(e,l,h),c.childIds.length>0&&!u(r,n,l.id,`componentId`)&&!Re(e,l,Le(c))&&vn(e,t,l.id,r,i)}mn(e,o,n,a.childIds,r)}function yn(e){let t={};for(let n of lt)qt(t,e,n);return t}function bn(e,t,n,r={}){let i=e.nodes.get(t);if(i?.type!==`COMPONENT`||!ot(e,t,n))return null;let a={...yn(i),name:i.name},o=e.createNode(`INSTANCE`,n,{...a,...r,componentId:t});return tn(e,i.id,o.id),o}function xn(e,t,n,r=`deep`){let i=e.nodes.get(t),a=e.nodes.get(n);!i||!a||i.type!==`INSTANCE`||tn(e,n,t,r)}function Sn(e,t,n){let r=t.parentId?Mn(e,t.parentId):void 0;r&&(typeof l(r.instanceOverrides,r.id,t.id,`sourceComponentId`)!=`string`&&t.componentId&&d(r.instanceOverrides,r.id,t.id,`sourceComponentId`,t.componentId),d(r.instanceOverrides,r.id,t.id,`componentId`,n),e.updateNode(r.id,{instanceOverrides:r.instanceOverrides}))}function Cn(e,t,n,{keepName:r=!1}={}){let i=e.nodes.get(t),a=e.nodes.get(n);if(!i||a?.type!==`COMPONENT`||i.type!==`INSTANCE`||i.parentId&&!ot(e,n,i.parentId))return;let o=i.componentId?e.nodes.get(i.componentId):void 0;Sn(e,i,n);let s={componentId:n},c=Zt(a,i.componentScale);for(let e of lt)u(i.instanceOverrides,i.id,i.id,e)||qt(s,c,e);!r&&(!o||i.name===o.name)&&(s.name=a.name);let l=Array.from(i.childIds),d=Ue(e,i);for(let t of l)e.deleteNode(t);e.updateNode(t,s),tn(e,n,t),We(e,i,d)}let wn=new WeakMap;function Tn(e,t){On(e,t,jn(e,t))}function En(e,t){tt(e,()=>{for(let n of t)Tn(e,n)})}function Dn(e,t){let n=e.nodes.get(t);n?.type!==`INSTANCE`||!n.componentId||On(e,n.componentId,[n])}function On(e,t,n){let r=e.nodes.get(t);if(r?.type!==`COMPONENT`)return;let i=wn.get(e);if(i||(i=new Set,wn.set(e,i)),!i.has(t)){i.add(t);try{tt(e,t=>{for(let i of n){let n=nn(e,i);n.push(new Set(i.instanceOverrides.self.keys()));let a=Jt(n),o=Zt(r,i.componentScale),s={};Yt(i,o,s,a);for(let e of lt)e!==`boundVariables`&&(Xt(i,e,a)||qt(s,o,e));Pe(e,s,i,o),$t(e,i,s);let c=Ge(i.id,i.instanceOverrides);vn(e,r.id,i.id,i.instanceOverrides,c),rt(e,c,t)}})}finally{i.delete(t)}}}function kn(e,t){let n=e.nodes.get(t);n?.type===`INSTANCE`&&(n.componentId&&e.instanceIndex.get(n.componentId)?.delete(t),n.type=`FRAME`,n.componentId=null,f(n.instanceOverrides))}function An(e,t){let n=e.nodes.get(t);if(n?.componentId)return e.nodes.get(n.componentId)}function jn(e,t){let n=e.instanceIndex.get(t);if(!n)return[];let r=[];for(let t of n){let n=e.nodes.get(t);n&&r.push(n)}return r}function Mn(e,t){let n=e.nodes.get(t);for(;n;){if(n.type===`INSTANCE`)return n;n=n.parentId?e.nodes.get(n.parentId):void 0}}function Nn(e,t){let n=t,r=t;for(;r&&!(r.type===`COMPONENT`||r.type===`COMPONENT_SET`);)r.type===`INSTANCE`&&(n=r),r=r.parentId?e.getNode(r.parentId):void 0;return n}function Pn(e,t,n){if(!At(n))return;let r=Nn(e,t);t.variableBindingScales={...t.variableBindingScales,[n]:r.variableAssignmentScales[n]??1}}function Fn(e){if(typeof e==`string`)return e;if(typeof e==`boolean`)return String(e);if(typeof e==`number`&&Number.isFinite(e))return In(e)}function In(e){let t=Math.round(e);if(Math.abs(e-t)<1e-6)return String(Math.min(2147483647,Math.max(-2147483648,t))||0);let n=Math.abs(e)*100,r=Math.floor(n),i=n-r===.5?r+r%2:Math.round(n);return`${e<0?`-`:``}${Math.floor(i/100)}.${String(i%100).padStart(2,`0`)}`}function Ln(e,t){e.color={...t,a:1},e.opacity=t.a}function Rn(e,t,n=`active`){let r={};for(let i in t.boundVariables){if(!i.endsWith(`/color`))continue;let a=/^(fills|strokes)\/(\d+)\/color$/.exec(i);if(!a)continue;let o=e.resolveColorVariableForNode(t.id,t.boundVariables[i],n),s=Number(a[2]);if(o)if(a[1]===`fills`){if(!t.fills[s])continue;r.fills??=L(t.fills),Ln(r.fills[s],o)}else{if(!t.strokes[s])continue;r.strokes??=ie(t.strokes),Ln(r.strokes[s],o)}}return r}function zn(e){let t={},n=Object.keys(e);for(let r=0;r<n.length;r++){let i=n[r],a=e[i];t[a]=i}return t}function Bn(e,t){let n={},r=Object.keys(e);for(let i=0;i<r.length;i++){let a=r[i],o=e[a];n[a]=t(o,a,e)}return n}function Vn(e,t){let n={...e};for(let e=0;e<t.length;e++){let r=t[e];delete n[r]}return n}function Hn(e,t){let n={},r=Object.keys(e);for(let i=0;i<r.length;i++){let a=r[i],o=a,s=e[o];t(s,a)||(n[o]=s)}return n}function Un(e,t){e.variables.set(t.id,t);let n=e.variableCollections.get(t.collectionId);n&&!n.variableIds.includes(t.id)&&n.variableIds.push(t.id)}function Wn(e,t){let n=e.variables.get(t);if(!n)return;e.variables.delete(t);let r=e.variableCollections.get(n.collectionId);r&&(r.variableIds=r.variableIds.filter(e=>e!==t));for(let n of e.nodes.values())Object.values(n.boundVariables).includes(t)&&(e.willChangeNode(n),n.boundVariables=Hn(n.boundVariables,e=>e===t),n.variableBindingScales=Hn(n.variableBindingScales,(e,t)=>!(t in n.boundVariables)),e.emitter.emit(`node:updated`,n.id,{boundVariables:{...n.boundVariables},variableBindingScales:{...n.variableBindingScales}}),gr(e,n.id))}function Gn(e,t){e.variableCollections.set(t.id,t),e.activeMode.has(t.id)||e.activeMode.set(t.id,t.defaultModeId)}function Kn(e,t){return t===void 0?e===`COLOR`?{...m}:e===`FLOAT`?0:e!==`BOOLEAN`&&``:t}function qn(e,t,n,r,i,a){let o=e.variableCollections.get(i);if(!o)throw Error(`Collection "${i}" not found`);let s=t(),c=Kn(r,a),l={};for(let e of o.modes)l[e.modeId]=structuredClone(c);let u={id:s,name:n,type:r,collectionId:i,valuesByMode:l,description:``,hiddenFromPublishing:!1};return Un(e,u),u}function Jn(e,t,n){let r=t(),i=t(),a={id:r,name:n,modes:[{modeId:i,name:`Mode 1`}],defaultModeId:i,variableIds:[]};return Gn(e,a),a}function Yn(e,t){let n=e.variableCollections.get(t);if(n)for(let t of Array.from(n.variableIds))Wn(e,t);e.variableCollections.delete(t),e.activeMode.delete(t)}function Xn(e,t){return e.activeMode.get(t)||(e.variableCollections.get(t)?.defaultModeId??``)}function Zn(e,t,n,r=`active`){let i=e.nodes.get(t);for(;i;){let t=i.variableModes[n];if(t)return t;i=i.parentId?e.nodes.get(i.parentId):void 0}return r==="default"?e.variableCollections.get(n)?.defaultModeId??``:Xn(e,n)}function Qn(e,t,n){e.activeMode.set(t,n)}function $n(e,t,n,r,i){let a=e.variableCollections.get(t);if(!a)return;a.modes.push({modeId:n,name:r});let o=i??a.defaultModeId;for(let t of a.variableIds){let r=e.variables.get(t);r&&(r.valuesByMode[n]=structuredClone(r.valuesByMode[o]??Object.values(r.valuesByMode)[0]))}}function er(e,t,n,r,i){if(!e.variableCollections.has(n))return;let a=t();return $n(e,n,a,r,i),a}function tr(e,t,n){let r=e.variableCollections.get(t);if(!(!r||r.modes.length<=1)){r.modes=r.modes.filter(e=>e.modeId!==n),r.defaultModeId===n&&(r.defaultModeId=r.modes[0].modeId);for(let t of r.variableIds){let r=e.variables.get(t);r&&(r.valuesByMode=Vn(r.valuesByMode,[n]))}e.activeMode.get(t)===n&&e.activeMode.set(t,r.defaultModeId)}}function nr(e,t,n,r){let i=e.variableCollections.get(t);if(!i)return;let a=i.modes.find(e=>e.modeId===n);a&&(a.name=r)}function rr(e,t,n){let r=e.variableCollections.get(t);r&&r.modes.some(e=>e.modeId===n)&&(r.defaultModeId=n,r.modes=ir(r))}function ir(e){let[n,r]=t(e.modes,t=>t.modeId===e.defaultModeId);return[...n,...r]}function ar(e,t,n,r){if(r?.has(t))return;let i=e.variables.get(t);if(!i)return;let a=e.variableCollections.get(i.collectionId),o=n??Xn(e,i.collectionId),s=a?.defaultModeId,c=Object.hasOwn(i.valuesByMode,o)?i.valuesByMode[o]:void 0;if(c===void 0&&s&&Object.hasOwn(i.valuesByMode,s)&&(c=i.valuesByMode[s]),c??=Object.values(i.valuesByMode)[0],c&&typeof c==`object`&&`aliasId`in c){let n=r??new Set;return n.add(t),ar(e,c.aliasId,o,n)}return c}function or(e,t){let n=ar(e,t);if(n&&typeof n==`object`&&`r`in n)return n}function sr(e,t){let n=ar(e,t);return typeof n==`number`?n:void 0}function cr(e,t,n,r=`active`){let i=e.variables.get(n);if(!i)return;let a=ar(e,n,Zn(e,t,i.collectionId,r));if(a&&typeof a==`object`&&`r`in a)return a}function lr(e,t,n,r=`active`){let i=e.variables.get(n);if(!i)return;let a=ar(e,n,Zn(e,t,i.collectionId,r));return typeof a==`number`?a:void 0}function ur(e,t,n,r=`active`){let i=e.variables.get(n);if(i)return ar(e,n,Zn(e,t,i.collectionId,r))}function dr(e,t,n,r=`active`){let i=ur(e,t,n,r);return typeof i==`string`?i:void 0}function fr(e,t){let n=e.variableCollections.get(t);return n?n.variableIds.map(t=>e.variables.get(t)).filter(e=>e!==void 0):[]}function pr(e,t){return[...e.variables.values()].filter(e=>e.type===t)}function mr(e,t,n,r){let i=e.nodes.get(t);if(!i)return;let a=e.variables.get(r);if(!a)throw Error(`Variable "${r}" not found`);let o=n.match(/^(fills|strokes)\/(\d+)\/color$/);if(o){if(a.type!==`COLOR`)throw Error(`Cannot bind ${a.type} variable to color field "${n}"`);let e=o[1],t=Number.parseInt(o[2],10),r=i[e]?.length??0;if(t>=r)throw Error(`Index ${t} out of range for ${e} (length ${r})`);let s=o[1];s in i.boundVariables&&(i.boundVariables=Vn(i.boundVariables,[s]))}if(At(n)&&a.type!==`FLOAT`)throw Error(`Cannot bind ${a.type} variable to scalar field "${n}"`);if(jt.has(n)&&a.type!==`STRING`)throw Error(`Cannot bind ${a.type} variable to string field "${n}"`);if(Mt.has(n)&&a.type!==`BOOLEAN`)throw Error(`Cannot bind ${a.type} variable to boolean field "${n}"`);if(!(At(n)||jt.has(n)||Mt.has(n)||o))throw Error(`Unknown binding field "${n}"`);e.willChangeNode(i),i.boundVariables={...i.boundVariables,[n]:r},Pn(e,i,n),gr(e,t,n),e.emitter.emit(`node:updated`,t,{boundVariables:{...i.boundVariables},variableBindingScales:{...i.variableBindingScales}})}function hr(e,t,n){let r=e.nodes.get(t);r&&n in r.boundVariables&&(e.willChangeNode(r),r.boundVariables=Vn(r.boundVariables,[n]),r.variableBindingScales=Vn(r.variableBindingScales,[n]),gr(e,t,n),e.emitter.emit(`node:updated`,t,{boundVariables:{...r.boundVariables},variableBindingScales:{...r.variableBindingScales}}))}function gr(e,t,n){let r=e.nodes.get(t);if(!r)return;let i=Nn(e,r);if(i.type!==`INSTANCE`)return;let a=Mn(e,t);a&&d(a.instanceOverrides,a.id,t,`boundVariables`),d(i.instanceOverrides,i.id,t,`boundVariables`),n&&d(i.instanceOverrides,i.id,t,`boundVariables/${n}`,r.boundVariables[n]??null)}let _r={lang:void 0,message:void 0,abortEarly:void 0,abortPipeEarly:void 0};function vr(e){return e?{lang:e?.lang??void 0,message:e?.message,abortEarly:e?.abortEarly??void 0,abortPipeEarly:e?.abortPipeEarly??void 0}:_r}function yr(e){let t=typeof e;return t===`string`?`"${e}"`:t===`number`||t===`bigint`||t===`boolean`?`${e}`:t===`object`||t===`function`?(e&&Object.getPrototypeOf(e)?.constructor?.name)??`null`:t}function R(e,t,n,r,i){let a=i&&`input`in i?i.input:n.value,o=i?.expected??e.expects??null,s=i?.received??yr(a),c={kind:e.kind,type:e.type,input:a,expected:o,received:s,message:`Invalid ${t}: ${o?`Expected ${o} but r`:`R`}eceived ${s}`,requirement:e.requirement,path:i?.path,issues:i?.issues,lang:r.lang,abortEarly:r.abortEarly,abortPipeEarly:r.abortPipeEarly},l=e.kind===`schema`,u=i?.message??e.message??(e.reference,c.lang,void 0)??(l?(c.lang,void 0):null)??r.message??(c.lang,void 0);u!==void 0&&(c.message=typeof u==`function`?u(c):u),l&&(n.typed=!1),n.issues?n.issues.push(c):n.issues=[c]}function br(e,t){return e===t||Number.isNaN(e)&&Number.isNaN(t)}function xr(e,t){return Object.prototype.hasOwnProperty.call(e,t)&&t!==`__proto__`&&t!==`prototype`&&t!==`constructor`}function Sr(e,t){let n=[...new Set(e)];return n.length>1?`(${n.join(` ${t} `)})`:n[0]??`never`}function Cr(e){return e[`~standard`]={version:1,vendor:`valibot`,validate:t=>e[`~run`]({value:t},vr())},e}function wr(e,t){return{kind:`validation`,type:`check`,reference:wr,async:!1,expects:null,requirement:e,message:t,"~run"(e,t){return e.typed&&!this.requirement(e.value)&&R(this,`input`,e,t),e}}}function Tr(e){return{kind:`validation`,type:`finite`,reference:Tr,async:!1,expects:null,requirement:Number.isFinite,message:e,"~run"(e,t){return e.typed&&!this.requirement(e.value)&&R(this,`finite`,e,t),e}}}function Er(e,t){return{kind:`validation`,type:`max_length`,reference:Er,async:!1,expects:`<=${e}`,requirement:e,message:t,"~run"(e,t){return e.typed&&e.value.length>this.requirement&&R(this,`length`,e,t,{received:`${e.value.length}`}),e}}}function Dr(e,t){return{kind:`validation`,type:`min_length`,reference:Dr,async:!1,expects:`>=${e}`,requirement:e,message:t,"~run"(e,t){return e.typed&&e.value.length<this.requirement&&R(this,`length`,e,t,{received:`${e.value.length}`}),e}}}function Or(e,t){return{kind:`validation`,type:`min_value`,reference:Or,async:!1,expects:`>=${e instanceof Date?e.toJSON():yr(e)}`,requirement:e,message:t,"~run"(e,t){return e.typed&&!(e.value>=this.requirement)&&R(this,`value`,e,t,{received:e.value instanceof Date?e.value.toJSON():yr(e.value)}),e}}}function kr(e){return{kind:`validation`,type:`non_empty`,reference:kr,async:!1,expects:`!0`,message:e,"~run"(e,t){return e.typed&&e.value.length===0&&R(this,`length`,e,t,{received:`0`}),e}}}function Ar(e,t){return{kind:`transformation`,type:`parse_json`,reference:Ar,config:e,message:t,async:!1,"~run"(e,t){try{e.value=JSON.parse(e.value,this.config?.reviver)}catch(n){if(n instanceof Error)R(this,`JSON`,e,t,{received:`"${n.message}"`}),e.typed=!1;else throw n}return e}}}function jr(e,t){return{kind:`validation`,type:`regex`,reference:jr,async:!1,expects:`${e}`,requirement:e,message:t,"~run"(e,t){return e.typed&&!this.requirement.test(e.value)&&R(this,`format`,e,t),e}}}function Mr(e){return{kind:`transformation`,type:`transform`,reference:Mr,async:!1,operation:e,"~run"(e){return e.value=this.operation(e.value),e}}}function Nr(){return{kind:`transformation`,type:`trim`,reference:Nr,async:!1,"~run"(e){return e.value=e.value.trim(),e}}}function Pr(e,t,n){return typeof e.fallback==`function`?e.fallback(t,n):e.fallback}function Fr(e,t){return Cr({...e,fallback:t,"~run"(t,n){let r=e[`~run`](t,n);return r.issues?{typed:!0,value:Pr(this,r,n)}:r}})}function Ir(e,t,n){return typeof e.default==`function`?e.default(t,n):e.default}function Lr(e,t){return Cr({kind:`schema`,type:`array`,reference:Lr,expects:`Array`,async:!1,item:e,message:t,"~run"(e,t){let n=e.value;if(Array.isArray(n)){e.typed=!0,e.value=[];for(let r=0;r<n.length;r++){let i=n[r],a=this.item[`~run`]({value:i},t);if(a.issues){let o={type:`array`,origin:`value`,input:n,key:r,value:i};for(let t of a.issues)t.path?t.path.unshift(o):t.path=[o],e.issues?.push(t);if(e.issues||=a.issues,t.abortEarly){e.typed=!1;break}}a.typed||(e.typed=!1),e.value.push(a.value)}}else R(this,`type`,e,t);return e}})}function Rr(e){return Cr({kind:`schema`,type:`boolean`,reference:Rr,expects:`boolean`,async:!1,message:e,"~run"(e,t){return typeof e.value==`boolean`?e.typed=!0:R(this,`type`,e,t),e}})}function zr(e,t){return Cr({kind:`schema`,type:`custom`,reference:zr,expects:`unknown`,async:!1,check:e,message:t,"~run"(e,t){return this.check(e.value)?e.typed=!0:R(this,`type`,e,t),e}})}function Br(e){return Cr({kind:`schema`,type:`lazy`,reference:Br,expects:`unknown`,async:!1,getter:e,"~run"(e,t){return this.getter(e.value)[`~run`](e,t)}})}function Vr(e,t){return Cr({kind:`schema`,type:`literal`,reference:Vr,expects:yr(e),async:!1,literal:e,message:t,"~run"(e,t){return br(e.value,this.literal)?e.typed=!0:R(this,`type`,e,t),e}})}function Hr(e,t){return Cr({kind:`schema`,type:`nullable`,reference:Hr,expects:`(${e.expects} | null)`,async:!1,wrapped:e,default:t,"~run"(e,t){return e.value===null&&(this.default!==void 0&&(e.value=Ir(this,e,t)),e.value===null)?(e.typed=!0,e):this.wrapped[`~run`](e,t)}})}function z(e){return Cr({kind:`schema`,type:`number`,reference:z,expects:`number`,async:!1,message:e,"~run"(e,t){return typeof e.value==`number`&&!isNaN(e.value)?e.typed=!0:R(this,`type`,e,t),e}})}function B(e,t){return Cr({kind:`schema`,type:`object`,reference:B,expects:`Object`,async:!1,entries:e,message:t,"~run"(e,t){let n=e.value;if(n&&typeof n==`object`){e.typed=!0,e.value={};for(let r in this.entries){let i=this.entries[r];if(r in n||(i.type===`exact_optional`||i.type===`optional`||i.type===`nullish`)&&i.default!==void 0){let a=r in n?n[r]:Ir(i),o=i[`~run`]({value:a},t);if(o.issues){let i={type:`object`,origin:`value`,input:n,key:r,value:a};for(let t of o.issues)t.path?t.path.unshift(i):t.path=[i],e.issues?.push(t);if(e.issues||=o.issues,t.abortEarly){e.typed=!1;break}}o.typed||(e.typed=!1),e.value[r]=o.value}else if(i.fallback!==void 0)e.value[r]=Pr(i);else if(i.type!==`exact_optional`&&i.type!==`optional`&&i.type!==`nullish`&&(R(this,`key`,e,t,{input:void 0,expected:`"${r}"`,path:[{type:`object`,origin:`key`,input:n,key:r,value:n[r]}]}),t.abortEarly))break}}else R(this,`type`,e,t);return e}})}function V(e,t){return Cr({kind:`schema`,type:`optional`,reference:V,expects:`(${e.expects} | undefined)`,async:!1,wrapped:e,default:t,"~run"(e,t){return e.value===void 0&&(this.default!==void 0&&(e.value=Ir(this,e,t)),e.value===void 0)?(e.typed=!0,e):this.wrapped[`~run`](e,t)}})}function Ur(e,t){return Cr({kind:`schema`,type:`picklist`,reference:Ur,expects:Sr(e.map(yr),`|`),async:!1,options:e,message:t,"~run"(e,t){return this.options.includes(e.value)?e.typed=!0:R(this,`type`,e,t),e}})}function Wr(e,t,n){return Cr({kind:`schema`,type:`record`,reference:Wr,expects:`Object`,async:!1,key:e,value:t,message:n,"~run"(e,t){let n=e.value;if(n&&typeof n==`object`){e.typed=!0,e.value={};for(let r in n)if(xr(n,r)){let i=n[r],a=this.key[`~run`]({value:r},t);if(a.issues){let o={type:`object`,origin:`key`,input:n,key:r,value:i};for(let t of a.issues)t.path=[o],e.issues?.push(t);if(e.issues||=a.issues,t.abortEarly){e.typed=!1;break}}let o=this.value[`~run`]({value:i},t);if(o.issues){let a={type:`object`,origin:`value`,input:n,key:r,value:i};for(let t of o.issues)t.path?t.path.unshift(a):t.path=[a],e.issues?.push(t);if(e.issues||=o.issues,t.abortEarly){e.typed=!1;break}}(!a.typed||!o.typed)&&(e.typed=!1),a.typed&&(e.value[a.value]=o.value)}}else R(this,`type`,e,t);return e}})}function H(e){return Cr({kind:`schema`,type:`string`,reference:H,expects:`string`,async:!1,message:e,"~run"(e,t){return typeof e.value==`string`?e.typed=!0:R(this,`type`,e,t),e}})}function Gr(){return Cr({kind:`schema`,type:`unknown`,reference:Gr,expects:`unknown`,async:!1,"~run"(e){return e.typed=!0,e}})}function U(...e){return Cr({...e[0],pipe:e,"~run"(t,n){for(let r of e)if(r.kind!==`metadata`){if(t.issues&&(r.kind===`schema`||r.kind===`transformation`)){t.typed=!1;break}(!t.issues||!n.abortEarly&&!n.abortPipeEarly)&&(t=r[`~run`](t,n))}return t}})}function Kr(e,t,n){let r=e[`~run`]({value:t},vr(n));return{typed:r.typed,success:!r.issues,output:r.value,issues:r.issues}}function W(e,t,n){let r=U(H(),Ar(),n);return{key:e,role:t,decode(e){let t=Kr(r,e);return t.success?t.output:void 0},encode:e=>JSON.stringify(e)}}function qr(e,t,n){let r=Ur(n);return{key:e,role:t,decode(e){let t=Kr(r,e);return t.success?t.output:void 0},encode:e=>e}}function Jr(e,t){return e.pluginId===`open-pencil`&&e.key===t.key}function Yr(e,t){return e.filter(e=>!t.some(t=>Jr(e,t)))}let Xr=[`button`,`textField`,`textarea`,`numberField`,`toggle`,`switch`,`checkbox`,`radio`,`radioGroup`,`toggleGroup`,`slider`,`progress`,`tabs`,`collapsible`,`accordion`],Zr=B({propertyId:H(),on:V(H()),off:V(H())});function Qr(e){return e.max>e.min&&e.step>0}let $r=B({kind:Ur(Xr),booleans:Wr(H(),Zr),texts:V(Wr(H(),B({propertyId:H()})),{}),numbers:Wr(H(),U(B({min:U(z(),Tr()),max:U(z(),Tr()),step:U(z(),Tr()),default:U(z(),Tr())}),wr(e=>Qr(e),`A number value needs max above min and a positive step`))),parts:Wr(H(),H()),states:V(B({propertyId:H(),rest:V(H()),hover:V(H()),pressed:V(H()),focus:V(H()),disabled:V(H())}))}),ei=[`png`,`jpg`,`webp`,`svg`,`pdf`,`pptx`];function ti(e){return ei.some(t=>t===e)}function ni(e){return Math.min(1024,Math.max(.01,e))}let ri=B({name:U(H(),jr(/^[a-z0-9]+(?:-[a-z0-9]+)*:[a-z0-9]+(?:[-_][a-z0-9]+)*$/)),glyph:V(H())}),ii=U(Lr(Ur([`fill`,`stroke`])),Dr(1)),ai=B({type:U(H(),kr(),Er(100)),id:V(H()),props:V(Wr(H(),Gr())),children:V(Lr(Br(()=>ai)))}),oi=B({image:U(H(),kr()),preset:B({components:U(Lr(ai),Dr(1)),structureVersion:V(z())}),frame:V(B({width:U(z(),Tr(),Or(0)),height:U(z(),Tr(),Or(0)),preset:U(H(),kr())}))}),si=[`ALL_SCOPES`,`TEXT_CONTENT`,`CORNER_RADIUS`,`WIDTH_HEIGHT`,`GAP`,`ALL_FILLS`,`FRAME_FILL`,`SHAPE_FILL`,`TEXT_FILL`,`STROKE`,`STROKE_FLOAT`,`EFFECT_FLOAT`,`EFFECT_COLOR`,`OPACITY`,`FONT_STYLE`,`FONT_FAMILY`,`FONT_SIZE`,`LINE_HEIGHT`,`LETTER_SPACING`,`PARAGRAPH_SPACING`,`PARAGRAPH_INDENT`,`FONT_VARIATIONS`,`TRANSFORM`],ci=[`WEB`,`ANDROID`,`iOS`],li=[`none`,`px`,`rem`,`%`,`ms`,`s`,`deg`],ui=/^[A-Za-z_][\w-]*$/,di=[`AUTO`,`LTR`,`RTL`],fi=U(B({x:z(),y:z(),width:z(),height:z()}),wr(({x:e,y:t,width:n,height:r})=>Number.isFinite(e+t+n+r)&&n>0&&r>0)),pi=U(zr(e=>typeof e==`object`&&!!e&&!Array.isArray(e)),Mr(e=>Object.fromEntries(Object.entries(e).filter(e=>typeof e[1]==`string`)))),mi=Lr(U(B({scale:U(z(),Tr()),format:zr(ti)}),Mr(({scale:e,format:t})=>({scale:ni(e),format:t})))),hi=U(B({identity:B({libraryId:H(),assetKey:H(),revisionId:H()}),sourceNodeId:V(Gr()),readOnly:V(Gr())}),Mr(({identity:e,sourceNodeId:t,readOnly:n})=>({identity:e,sourceNodeId:typeof t==`string`?t:null,readOnly:n===!0}))),gi=B({libraryId:H(),revisionId:H(),enabled:V(Gr())}),_i=U(Lr(Gr()),Mr(e=>e.flatMap(e=>{let t=Kr(gi,e);if(!t.success)return[];let{libraryId:n,revisionId:r,enabled:i}=t.output;return[{libraryId:n,revisionId:r,enabled:i===!0}]}))),vi=U(H(),Nr(),kr(),Er(1e3)),yi=B({unit:V(Ur(li)),expressions:V(Wr(H(),B({css:vi,resolved:U(z(),Tr())})))}),bi=B({version:Vr(1),kind:Ur([`fill`,`stroke`]),index:z(),color:B({h:z(),c:z(),l:z(),a:Fr(V(z()),void 0)})}),xi=B({libraryId:H(),revisionId:H(),name:H(),catalogSource:V(H())}),Si={author:Fr(H(),``),authorColor:Fr(V(B({r:z(),g:z(),b:z(),a:z()})),void 0),text:Fr(H(),``),createdAt:Fr(H(),``),deleted:V(Rr())},Ci=B({id:H(),...Si}),wi=B({id:H(),pageId:H(),pageName:V(H()),nodeId:V(Hr(H())),nodeName:V(Hr(H())),offsetX:V(z()),offsetY:V(z()),x:Fr(z(),0),y:Fr(z(),0),...Si,updatedAt:Fr(H(),``),resolved:Fr(Rr(),!1),resolvedAt:V(Hr(H())),replies:Fr(Lr(Ci),[])}),Ti=U(Lr(Gr()),Mr(e=>e.flatMap(e=>{let t=Kr(wi,e);if(!t.success)return[];let n=t.output;return[{...n,updatedAt:n.updatedAt||n.createdAt}]}))),Ei={textDirection:qr(`textDirection`,`format`,di),layoutDirection:qr(`layoutDirection`,`format`,di),nodeType:qr(`nodeType`,`format`,[`COMPONENT_SET`]),boundVariables:W(`boundVariables`,`format`,pi),exportSettings:W(`exportSettings`,`format`,mi),textPathBox:W(`textPathBox`,`format`,fi),librarySource:W(`librarySource`,`bookkeeping`,hi),enabledLibraries:W(`enabledLibraries`,`bookkeeping`,_i),sourceLibraryPublication:W(`sourceLibraryPublication`,`bookkeeping`,xi),comments:W(`comments`,`bookkeeping`,Ti),token:W(`token`,`format`,yi),modeConditions:W(`modeConditions`,`format`,Wr(H(),vi)),modeAttribute:W(`modeAttribute`,`format`,U(H(),Nr(),Er(100),jr(ui))),okhcl:W(`okhcl`,`content`,bi),behaviour:W(`behaviour`,`content`,$r),icon:W(`icon`,`content`,ri),iconTint:W(`iconTint`,`content`,ii),shader:W(`shader`,`content`,oi)};Object.values(Ei).filter(e=>e.role!==`content`);let Di=[`x`,`y`,`rotation`,`flipX`,`flipY`],Oi=[`width`,`height`];function ki(e,t){return e.map(e=>{let{boundVariables:n,textStyleId:r,fillStyleId:i,hyperlink:a}=e.style,o=a?.type===`NODE`&&t.node!==void 0;if(!n&&!r&&!i&&!o)return e;let s={...e.style};return a?.type===`NODE`&&t.node&&(s.hyperlink={type:`NODE`,value:t.node(a.value)}),n&&(s.boundVariables=Bn(n,e=>e&&t.variable(e))),r&&(s.textStyleId=t.style(r)),i&&(s.fillStyleId=t.style(i)),{...e,style:s}})}function Ai(e){if(!Number.isInteger(e)||e<=0)throw RangeError(`length must be a positive integer`);let t=4294967296,n=t-t%e,r=new Uint32Array(1);do crypto.getRandomValues(r);while(r[0]>=n);return r[0]%e}function ji(e,t,n){return n==null?Math.min(e,t):Math.min(Math.max(e,t),n)}let Mi=()=>[1,0,0,0,1,0,0,0,1],Ni=(e,t)=>[e[0]*t[0]+e[1]*t[3]+e[2]*t[6],e[0]*t[1]+e[1]*t[4]+e[2]*t[7],e[0]*t[2]+e[1]*t[5]+e[2]*t[8],e[3]*t[0]+e[4]*t[3]+e[5]*t[6],e[3]*t[1]+e[4]*t[4]+e[5]*t[7],e[3]*t[2]+e[4]*t[5]+e[5]*t[8],e[6]*t[0]+e[7]*t[3]+e[8]*t[6],e[6]*t[1]+e[7]*t[4]+e[8]*t[7],e[6]*t[2]+e[7]*t[5]+e[8]*t[8]],Pi=(...e)=>{if(e.length===0)return Mi();let t=e[0].slice();for(let n=1;n<e.length;n++)t=Ni(t,e[n]);return t},Fi=(e,t)=>[1,0,e,0,1,t,0,0,1],Ii=(e,t=0,n=0)=>{let r=Math.sin(e),i=Math.cos(e);return[i,-r,r*n+(1-i)*t,r,i,-r*t+(1-i)*n,0,0,1]},Li=(e,t,n=0,r=0)=>[e,0,n-e*n,0,t,r-t*r,0,0,1],Ri=e=>{let t=e[0]*e[4]*e[8]+e[1]*e[5]*e[6]+e[2]*e[3]*e[7]-e[2]*e[4]*e[6]-e[1]*e[3]*e[8]-e[0]*e[5]*e[7];return t?[(e[4]*e[8]-e[5]*e[7])/t,(e[2]*e[7]-e[1]*e[8])/t,(e[1]*e[5]-e[2]*e[4])/t,(e[5]*e[6]-e[3]*e[8])/t,(e[0]*e[8]-e[2]*e[6])/t,(e[2]*e[3]-e[0]*e[5])/t,(e[3]*e[7]-e[4]*e[6])/t,(e[1]*e[6]-e[0]*e[7])/t,(e[0]*e[4]-e[1]*e[3])/t]:null},zi=(e,t)=>{if(t.length%2)throw Error(`mapPoints requires even length [x,y,...].`);let n=t.slice();for(let t=0;t<n.length;t+=2){let r=n[t],i=n[t+1],a=e[6]*r+e[7]*i+e[8],o=e[0]*r+e[1]*i+e[2],s=e[3]*r+e[4]*i+e[5];n[t]=o/a,n[t+1]=s/a}return n},Bi={identity:Mi,multiply:Pi,translated:Fi,rotated:Ii,scaled:Li,invert:Ri,mapPoints:zi,mapPoint:(e,t)=>{let n=zi(e,[t.x,t.y]);return{x:n[0],y:n[1]}}};function Vi(e,t){let n=[],r=e;for(;r&&(n.unshift(r),r.parentId);)r=t.getNode(r.parentId);let i=Bi.identity();for(let e of n){let t=Gi(e);i=Bi.multiply(i,t)}return i}function Hi(e,t){return!e||e.id===t.rootId?Bi.identity():Vi(e,t)}function Ui(e,t){let n=Vi(e,t),r=Bi.mapPoints(n,[0,0]);return{x:r[0],y:r[1]}}function Wi(e){return e.type===`LINE`?{x:0,y:0}:{x:e.width/2,y:e.height/2}}function Gi(e,t=e){let n=Bi.translated(t.x,t.y);if((e.flipX||e.flipY)&&(n=Bi.multiply(n,Bi.scaled(e.flipX?-1:1,e.flipY?-1:1,e.width/2,e.height/2))),e.rotation){let t=Wi(e);n=Bi.multiply(n,Bi.rotated(e.rotation*Math.PI/180,t.x,t.y))}return n}function Ki(e,t,n){let r=Bi.invert(n);if(!r)return null;let i=Bi.multiply(r,t),[a,o,,s,c]=i,l=e.flipX?-1:1,u=a*c-o*s<0?-l:l,d=Math.atan2(u*s,l*a)*180/Math.PI;Math.abs(d)<1e-9&&(d=0);let f={rotation:d,flipX:l<0,flipY:u<0},p=Gi({...e,...f},{x:0,y:0});return{...f,x:i[2]-p[2],y:i[5]-p[5]}}function qi(e){return e[0]===1&&e[1]===0&&e[3]===0&&e[4]===1}let Ji=new Map([{weight:100,names:[`thin`,`hairline`,`extrathin`,`ultrathin`]},{weight:200,names:[`extralight`,`ultralight`]},{weight:300,names:[`light`]},{weight:400,names:[`regular`,`normal`,`book`,`roman`,`plain`]},{weight:500,names:[`medium`]},{weight:600,names:[`semibold`,`demibold`]},{weight:700,names:[`bold`]},{weight:800,names:[`extrabold`,`ultrabold`]},{weight:900,names:[`black`,`heavy`]}].flatMap(({names:e,weight:t})=>e.map(e=>[e,t])));function Yi(e){return e.toLowerCase().replace(/italic|oblique/u,``).replace(/[^a-z0-9]+/gu,``)}function Xi(e){let t=e??``,n=/(?:italic|oblique)/iu.test(t),r=Yi(t),i=r.match(/(?:^|[^0-9])([1-9]00)(?:[^0-9]|$)/u)?.[1];return{weight:i?Number(i):Ji.get(r)??400,italic:n}}function Zi(e){return Xi(e).weight}let Qi=new Set([`fontFamily`,`fontWeight`,`italic`,`fontSize`,`lineHeight`,`letterSpacing`,`textDecoration`,`textCase`,`fontFeatures`]);function $i(e,t){let n={...t};return`fills`in t&&!(`fillStyleId`in t)&&e.fillStyleId&&(n.fillStyleId=null),`strokes`in t&&!(`strokeStyleId`in t)&&e.strokeStyleId&&(n.strokeStyleId=null),`effects`in t&&!(`effectStyleId`in t)&&e.effectStyleId&&(n.effectStyleId=null),`layoutGrids`in t&&!(`gridStyleId`in t)&&e.gridStyleId&&(n.gridStyleId=null),Object.keys(t).some(e=>Qi.has(e))&&!(`textStyleId`in t)&&e.textStyleId&&(n.textStyleId=null),n}function ea(e,t,n){let r=e[t].length,i=Object.keys(e.boundVariables).filter(e=>{if(e===t)return!0;if(!e.startsWith(`${t}/`))return!1;let n=Number.parseInt(e.split(`/`)[1]??``,10);return Number.isNaN(n)||n<0||n>=r});i.length!==0&&(e.boundVariables=Vn(e.boundVariables,i),n.boundVariables={...e.boundVariables})}let ta=()=>({emit(e,...t){for(let n=this.events[e]||[],r=0,i=n.length;r<i;r++)n[r](...t)},events:{},on(e,t){return(this.events[e]||=[]).push(t),()=>{this.events[e]=this.events[e]?.filter(e=>t!==e)}}});var na=class extends AggregateError{committed=!0;constructor(e){super(e,`Committed graph event delivery failed`),this.name=`CommittedGraphEventError`}},ra=class{delegate=ta();buffers=[];get events(){return this.delegate.events}set events(e){this.delegate.events=e}on(e,t){return this.delegate.on(e,t)}emit(e,...t){let n=this.buffers.at(-1);n?n.push(()=>this.delegate.emit(e,...t)):this.delegate.emit(e,...t)}batch(e){let t=[];this.buffers.push(t);let n;try{n=e()}catch(e){throw this.buffers.pop(),e}this.buffers.pop();let r=this.buffers.at(-1);if(r)r.push(...t);else{let e=[];for(let n of t)try{n()}catch(t){e.push(t)}if(e.length)throw new na(e)}return n}};function ia(e,t){let n=[t.created?e.on(`node:created`,t.created):null,t.updated?e.on(`node:updated`,t.updated):null,t.previewUpdated?e.on(`node:previewUpdated`,t.previewUpdated):null,t.deleted?e.on(`node:deleted`,t.deleted):null,t.reparented?e.on(`node:reparented`,t.reparented):null,t.reordered?e.on(`node:reordered`,t.reordered):null].filter(e=>!!e);return()=>{for(let e of n)e()}}let aa=new Set([`CANVAS`,`FRAME`,`GROUP`,`SECTION`,`COMPONENT`,`COMPONENT_SET`,`INSTANCE`]),oa=new Set([`COMPONENT`,`INSTANCE`]);function sa(e){return e.fills.some(e=>e.visible)||e.strokes.some(e=>e.visible)}function ca(e,t){let n=t.parentId?e.nodes.get(t.parentId):void 0;return n?.type===`CANVAS`||n?.type===`SECTION`}function la(e,t){return t.type===`FRAME`&&t.layoutMode!==`NONE`&&ca(e,t)}function ua(e,t,n){let r=n.get(e.id);if(r!==void 0)return r;let i=e.parentId?t.getNode(e.parentId):void 0,a=e.rotation!==0||e.flipX||e.flipY||(i?ua(i,t,n):!1);return n.set(e.id,a),a}function da(e,t,n,r,i,a=0){if(!ua(n,r,i)){let i=r.getAbsolutePosition(n.id);return e>=i.x-a&&e<=i.x+n.width+a&&t>=i.y-a&&t<=i.y+n.height+a}let o=Vi(n,r),s=Bi.invert(o);if(!s)return!1;let[c,l]=Bi.mapPoints(s,[e,t]);return c>=-a&&c<=n.width+a&&l>=-a&&l<=n.height+a}function fa(e,t,n,r,i,a,o,s){return da(t,n,r,e,o)&&(ma(e,t,n,i,a,o,s)||sa(r))?r:null}function pa(e,t,n,r,i,a,o,s){if(r.type===`GROUP`){if(!da(t,n,r,e,o,s))return null;let c=ma(e,t,n,i,a,o,s);return c?a?c:r:da(t,n,r,e,o)?r:null}let c=ma(e,t,n,i,a,o,s);return c?r.locked?r:c:da(t,n,r,e,o)&&(sa(r)||la(e,r))?r:null}function ma(e,t,n,r,i=!1,a=new Map,o=0){let s=e.nodes.get(r);if(!s||s.clipsContent&&!da(t,n,s,e,a))return null;for(let r=s.childIds.length-1;r>=0;r--){let c=s.childIds[r],l=e.nodes.get(c);if(!(!l||l.internalOnly||!l.visible)){if(aa.has(l.type)){if(oa.has(l.type)&&!i){let r=fa(e,t,n,l,c,i,a,o);if(r)return r;continue}let r=pa(e,t,n,l,c,i,a,o);if(r)return r;continue}if(da(t,n,l,e,a,o))return l}}return null}function ha(e,t,n,r){return ma(e,t,n,r??e.rootId,!1)}function ga(e,t,n,r,i=0){return ma(e,t,n,r??e.rootId,!0,new Map,i)}function _a(e,t){return t.type===`COMPONENT_SET`?!0:t.childIds.length===0?!1:t.type===`SECTION`||t.type===`FRAME`&&ca(e,t)}function va(e,t,n,r){let i=new Map;for(let a=t.childIds.length-1;a>=0;a--){let o=e.nodes.get(t.childIds[a]);if(!(!o||o.internalOnly||!o.visible||o.type!==`FRAME`)&&!(_a(e,o)&&!la(e,o))&&da(n,r,o,e,i))return o}return null}function ya(e,t,n){let r=new Set;for(let i of t){let t=e.nodes.get(i);t&&t.childIds.length>0&&t.type!==`GROUP`&&t.type!==`BOOLEAN_OPERATION`&&r.add(i);let a=t?.parentId;for(;a&&a!==n&&!r.has(a);)r.add(a),a=e.nodes.get(a)?.parentId}return r}function ba(e,t,n,r,i,a=0){let o=ma(e,t,n,r,!0,new Map,a);if(!o){let i=e.nodes.get(r);return i?va(e,i,t,n):null}let s=[];for(let t=o;t&&t.id!==r;)s.unshift(t),t=t.parentId?e.nodes.get(t.parentId):void 0;let c=ya(e,i,r);for(let t of s)if(t.locked||!c.has(t.id)&&!_a(e,t))return t;let l=s.at(-1);return l?va(e,l,t,n)||(la(e,l)||c.has(l.id)&&!_a(e,l)?l:null):null}function xa(e,t){let n=e.nodes.get(t);return n!==void 0&&_a(e,n)}function Sa(e,t,n,r){let i=ma(e,t,n,r,!0);for(let t=i??void 0;t&&t.id!==r;){if(!_a(e,t)||la(e,t))return null;t=t.parentId?e.nodes.get(t.parentId):void 0}return i}function Ca(e,t,n,r){let i=e.nodes.get(t);return i!==void 0&&da(n,r,i,e,new Map)}let wa=new Set([`FRAME`,`SECTION`,`COMPONENT`,`INSTANCE`]),Ta=new Set([`FRAME`,`SECTION`,`INSTANCE`]);function Ea(e){let{componentSetIds:t}=e;return t?{takes:e=>Ta.has(e.type)||e.type===`COMPONENT_SET`&&t.has(e.id),passThrough:new Set([`GROUP`])}:{takes:e=>wa.has(e.type),passThrough:new Set([`GROUP`,`COMPONENT_SET`])}}function Da(e,t,n,r,i,a,o){if(r.type!==`CANVAS`&&r.clipsContent&&!da(t,n,r,e,o))return null;for(let s=r.childIds.length-1;s>=0;s--){let c=r.childIds[s];if(i.has(c))continue;let l=e.nodes.get(c);if(!l||l.internalOnly||!l.visible||l.locked)continue;let u=a.takes(l);if(!u&&!a.passThrough.has(l.type))continue;let d=Da(e,t,n,l,i,a,o);if(d)return d;if(u&&da(t,n,l,e,o))return l}return null}function Oa(e,t,n,r,i,a={}){let o=e.nodes.get(i??e.rootId);return o?Da(e,t,n,o,r,Ea(a),new Map):null}let ka=new Set([...xe,`textDecoration`,`fills`,`width`,`height`]),Aa=new Set(xe);function ja(e,t){let n={},r=Object.keys(t).filter(n=>!j(e[n],t[n]));e.textPicture&&r.some(e=>ka.has(e))&&(n.textPicture=null);let i=r.some(e=>Aa.has(e))||Se.some(e=>r.includes(e));return i&&!(`derivedLayout`in t)&&(n.derivedLayout=null),e.derivedTextGlyphs&&i&&!t.derivedTextGlyphs&&(e.textPathData&&r.every(e=>e===`width`||e===`height`)||(n.derivedTextGlyphs=null,n.textPathData=null)),n}function Ma(e,t){Object.assign(e,ja(e,t))}let Na=new Set(`x.y.width.height.rotation.flipX.flipY.parentId.childIds.layoutMode.layoutDirection.layoutWrap.primaryAxisSizing.counterAxisSizing.itemSpacing.counterAxisSpacing.paddingTop.paddingRight.paddingBottom.paddingLeft.layoutGrow.layoutAlignSelf.layoutPositioning.minWidth.maxWidth.minHeight.maxHeight.visible.text.fontSize.lineHeight.letterSpacing.styleRuns.textAutoResize`.split(`.`));function Pa(e,t,n,r){let i=e.nodes.get(t);if(!i||(n=Object.fromEntries(Object.entries(n).filter(([,e])=>e!==void 0)),Object.keys(n).every(e=>i[e]===n[e])))return null;Object.keys(n).some(e=>Na.has(e))&&e.clearAbsPosCache();let a=n;return i.type===`TEXT`&&(a={...ja(i,n),...n}),n.vectorNetwork&&(a={...a,vectorNetwork:P(n.vectorNetwork)}),r?.(i,a),e.positionPreviewVersion++,Object.assign(i,a),a}function Fa(e,t){if(t.length===0)return;let n=new Set(e.source.editedFields);for(let e of t)n.add(e);e.source.editedFields=[...n]}function Ia(){return 2+Ai(2147483646)}let La=Ia(),Ra=1;function za(){return`${La}:${Ra++}`}function Ba(e){let t={};for(let n of Object.keys(e)){let r=e[n];r!==void 0&&(t[n]=r)}return t}var Va=class e{idGenerator;nodes=new Map;images=new Map;variables=new Map;variableCollections=new Map;activeMode=new Map;rootId;figKiwiVersion=null;figSchemaDeflated=null;documentColorSpace=`srgb`;enabledLibraries=new Map;emitter=new ra;absPosCache=new Map;previewMutationDepth=0;previewObservers=[];changeObservers=new Set;sourceMetadataPreservationDepth=0;importedStateApplicationDepth=0;importedIdGenerator;layoutMutationDepth=0;derivedLayoutDepth=0;positionPreviewVersion=0;instanceIndex=new Map;constructor(e=za){this.idGenerator=e;let t=_(this.idGenerator,`FRAME`,{name:`Document`,width:0,height:0});this.rootId=t.id,this.nodes.set(t.id,t),this.addPage(`Page 1`)}addPage(e){return this.createNode(`CANVAS`,this.rootId,{name:e,width:0,height:0})}getPages(e=!1){return this.getChildren(this.rootId).filter(t=>t.type===`CANVAS`&&(e||!t.internalOnly))}getAllNodes(){return this.nodes.values()}getNode(e){return this.nodes.get(e)}onNodeEvents(e){return ia(this.emitter,e)}observeNodeChanges(e){return this.changeObservers.add(e),()=>this.changeObservers.delete(e)}willChangeNode(e){if(e)for(let t of this.changeObservers)t.before(e)}countDescendants(e){let t=this.nodes.get(e);if(!t)return 0;let n=0,r=[...t.childIds];for(;r.length>0;){let e=r.pop();if(e===void 0)break;n++;let t=this.nodes.get(e);if(t)for(let e of t.childIds)r.push(e)}return n}addVariable(e){Un(this,e)}removeVariable(e){Wn(this,e)}addCollection(e){Gn(this,e)}createVariable(e,t,n,r){return qn(this,()=>this.generateEntityId(),e,t,n,r)}createCollection(e){let t=new Set;return Jn(this,()=>this.generateEntityId(t),e)}createMode(e,t,n){return er(this,()=>this.generateEntityId(),e,t,n)}removeCollection(e){Yn(this,e)}getActiveModeId(e){return Xn(this,e)}getNodeVariableModeId(e,t){return Zn(this,e,t)}setActiveMode(e,t){Qn(this,e,t)}addMode(e,t,n,r){$n(this,e,t,n,r)}removeMode(e,t){tr(this,e,t)}renameMode(e,t,n){nr(this,e,t,n)}setDefaultMode(e,t){rr(this,e,t)}resolveVariable(e,t,n){return ar(this,e,t,n)}resolveColorVariable(e){return or(this,e)}resolveNumberVariable(e){return sr(this,e)}resolveColorVariableForNode(e,t,n){return cr(this,e,t,n)}resolveNumberVariableForNode(e,t,n){return lr(this,e,t,n)}resolveVariableForNode(e,t,n){return ur(this,e,t,n)}resolveStringVariableForNode(e,t,n){return dr(this,e,t,n)}getVariablesForCollection(e){return fr(this,e)}getVariablesByType(e){return pr(this,e)}bindVariable(e,t,n){mr(this,e,t,n)}unbindVariable(e,t){hr(this,e,t)}getChildren(e){let t=this.nodes.get(e);return t?t.childIds.map(e=>this.nodes.get(e)).filter(e=>e!==void 0):[]}isContainer(e){let t=this.nodes.get(e);return t?v.has(t.type):!1}isDescendant(e,t){return this.closest(e,e=>e.id===t)!==void 0}closest(e,t){let n=this.nodes.get(e);for(let e=0;n&&e<this.nodes.size;e++){if(t(n))return n;n=n.parentId?this.nodes.get(n.parentId):void 0}}pageOf(e){return this.closest(e,e=>e.type===`CANVAS`)?.id??null}clearAbsPosCache(){this.absPosCache.clear()}getAbsolutePosition(e){let t=this.absPosCache.get(e);if(t)return t;let n=this.getNode(e);if(!n)return{x:0,y:0};let r=Ui(n,this);return this.absPosCache.set(e,r),r}getAbsoluteBounds(e){let t=this.getAbsolutePosition(e),n=this.nodes.get(e);return{x:t.x,y:t.y,width:n?.width??0,height:n?.height??0}}generateEntityId(e){let t=1/0;for(let n=0;n<t;n++){let n=(this.importedIdGenerator??this.idGenerator)();if(this.isEntityIdTaken(n)||e?.has(n)){t===1/0&&(t=this.entityIdCount()+(e?.size??0)+1);continue}return e?.add(n),n}throw Error(`The ID generator only returned IDs that are in use`)}entityIdCount(){let e=this.nodes.size+this.variables.size+this.variableCollections.size;for(let t of this.variableCollections.values())e+=t.modes.length;return e}isEntityIdTaken(e){if(this.nodes.has(e)||this.variables.has(e)||this.variableCollections.has(e))return!0;for(let t of this.variableCollections.values())for(let n of t.modes)if(n.modeId===e)return!0;return!1}registerNode(e,t){e.parentId=t,this.nodes.set(e.id,e);for(let t of this.changeObservers)t.created(e);if(e.type===`INSTANCE`&&e.componentId){let t=this.instanceIndex.get(e.componentId);t||(t=new Set,this.instanceIndex.set(e.componentId,t)),t.add(e.id)}return this.emitter.emit(`node:created`,e),e}withBufferedEvents(e){return this.emitter.batch(e)}createNode(e,t,n={}){let r=_(()=>this.generateEntityId(),e,n),i=this.nodes.get(t);return this.willChangeNode(i),i?.childIds.push(r.id),this.registerNode(r,t)}createNodeWithId(e,t,n,r={}){let i=_(()=>e,t,r);i.id=e;let a=n?this.nodes.get(n):void 0;return a&&!a.childIds.includes(e)&&(this.willChangeNode(a),a.childIds.push(e)),this.registerNode(i,n)}static TEXT_PICTURE_KEYS=ka;static GLYPH_AFFECTING_KEYS=Aa;static LAYOUT_AFFECTING_KEYS=new Set([...Di,...Oi,`layoutMode`,`layoutDirection`,`itemSpacing`,`counterAxisSpacing`,`paddingLeft`,`paddingRight`,`paddingTop`,`paddingBottom`,`primaryAxisAlign`,`counterAxisAlign`,`counterAxisAlignContent`,`layoutWrap`,`primaryAxisSizing`,`counterAxisSizing`,`layoutPositioning`,`layoutGrow`,`layoutAlignSelf`,`strokesIncludedInLayout`,`horizontalConstraint`,`verticalConstraint`,`gridTemplateColumns`,`gridTemplateRows`,`gridColumnGap`,`gridRowGap`,`gridPosition`,`minWidth`,`maxWidth`,`minHeight`,`maxHeight`,`targetAspectRatio`]);runPreviewUpdates(e,t){this.previewMutationDepth++,t&&this.previewObservers.push(t);try{e()}finally{t&&this.previewObservers.pop(),this.previewMutationDepth--}}preserveSourceMetadataDuring(e){this.sourceMetadataPreservationDepth++;try{return e()}finally{this.sourceMetadataPreservationDepth--}}get isPreservingSourceMetadata(){return this.sourceMetadataPreservationDepth>0}applyImportedStateDuring(e,t){let n=this.importedIdGenerator;this.importedIdGenerator=t??n,this.importedStateApplicationDepth++;try{return this.preserveSourceMetadataDuring(e)}finally{this.importedStateApplicationDepth--,this.importedIdGenerator=n}}get isApplyingImportedState(){return this.importedStateApplicationDepth>0}applyDerivedLayoutDuring(e){this.derivedLayoutDepth++;try{e()}finally{this.derivedLayoutDepth--}}get isApplyingDerivedLayout(){return this.derivedLayoutDepth>0}withLayoutMutations(e){this.layoutMutationDepth++;try{e()}finally{this.layoutMutationDepth--}}get isApplyingLayout(){return this.layoutMutationDepth>0}updateNodePositionPreview(e,t,n){this.updateNodePreview(e,{x:t,y:n})}updateNodePreview(e,t){let n=Pa(this,e,t,(e,t)=>{for(let n of this.previewObservers)n(e,t)});n&&this.emitter.emit(`node:previewUpdated`,e,n)}updateNode(e,t){if(this.previewMutationDepth>0){this.updateNodePreview(e,t);return}let n=this.nodes.get(e);n&&(t=Ba($i(n,Ba(t))),this.applyNodeChanges(n,t))}restoreNodeProperties(e,t,n){let r=this.nodes.get(e);r&&this.applyNodeChanges(r,t,n)}applyNodeChanges(t,n,r=[]){let{id:i}=t;if(this.willChangeNode(t),r.length){n={...n};for(let e of r)Reflect.set(n,e,void 0)}if(Object.keys(n).some(t=>e.LAYOUT_AFFECTING_KEYS.has(t))&&this.absPosCache.clear(),t.type===`INSTANCE`&&`componentId`in n&&n.componentId!==t.componentId&&(t.componentId&&this.instanceIndex.get(t.componentId)?.delete(i),n.componentId)){let e=this.instanceIndex.get(n.componentId);e||(e=new Set,this.instanceIndex.set(n.componentId,e)),e.add(i)}t.type===`TEXT`&&Ma(t,n),this.sourceMetadataPreservationDepth===0&&!this.isApplyingLayout&&Fa(t,Object.keys(n)),n.vectorNetwork&&(n={...n,vectorNetwork:P(n.vectorNetwork)}),Object.assign(t,n),n.fills&&ea(t,`fills`,n),n.strokes&&ea(t,`strokes`,n);for(let e of r)Reflect.deleteProperty(t,e);this.emitter.emit(`node:updated`,i,n)}reparentNode(e,t){let n=this.nodes.get(e);if(!n||e===this.rootId||this.isDescendant(t,e))return;let r=n.parentId?this.nodes.get(n.parentId):void 0,i=this.nodes.get(t);if(!i||n.parentId===t)return;let a=n.parentId;this.willChangeNode(n),this.willChangeNode(r),this.willChangeNode(i),this.absPosCache.clear();let o=this.parentWorldMatrix(r),s=this.parentWorldMatrix(i);if(r&&(r.childIds=r.childIds.filter(t=>t!==e)),n.parentId=t,i.childIds.push(e),qi(o)&&qi(s))n.x+=o[2]-s[2],n.y+=o[5]-s[5];else{let e=Ki(n,Bi.multiply(o,Gi(n)),s);e&&Object.assign(n,e)}this.emitter.emit(`node:reparented`,e,a,t)}parentWorldMatrix(e){return Hi(e,this)}reorderChild(e,t,n){let r=this.nodes.get(e);if(!r)return;let i=r.parentId,a=i?this.nodes.get(i):void 0,o=this.nodes.get(t);if(!o||this.isDescendant(t,e))return;this.willChangeNode(r),this.willChangeNode(a),this.willChangeNode(o),a&&(a.childIds=a.childIds.filter(t=>t!==e));let s=n;a===o&&a.childIds.includes(e)&&a.childIds.length,r.parentId=t,this.absPosCache.clear(),s=Math.min(s,o.childIds.length),o.childIds.splice(s,0,e),this.emitter.emit(`node:reordered`,e,t,s,i)}insertChildAt(e,t,n){let r=this.getNode(e),i=this.getNode(t);if(!r||!i||e===t||this.isDescendant(t,e))return;let a=r.parentId,o=a?this.getNode(a):void 0;this.willChangeNode(r),this.willChangeNode(o),this.willChangeNode(i),o&&(o.childIds=o.childIds.filter(t=>t!==e)),i.childIds=i.childIds.filter(t=>t!==e),i.childIds.splice(n,0,e),r.parentId=t,this.clearAbsPosCache(),this.emitter.emit(`node:reordered`,e,t,n,a)}deleteNode(e){let t=this.nodes.get(e);if(!(!t||e===this.rootId)){if(this.willChangeNode(t),t.parentId){let n=this.nodes.get(t.parentId);this.willChangeNode(n),n&&(n.childIds=n.childIds.filter(t=>t!==e))}for(let e of Array.from(t.childIds))this.deleteNode(e);t.type===`INSTANCE`&&t.componentId&&this.instanceIndex.get(t.componentId)?.delete(e),this.nodes.delete(e),this.emitter.emit(`node:deleted`,e,t.parentId)}}hitTest(e,t,n){return ha(this,e,t,n)}hitTestDeep(e,t,n,r=0){return ga(this,e,t,n,r)}hitTestSelectable(e,t,n,r,i=0){return ba(this,e,t,n,r,i)}hitTestOpenContainer(e,t,n){return Sa(this,e,t,n)}isOpenContainer(e){return xa(this,e)}isPointInNode(e,t,n){return Ca(this,e,t,n)}hitTestDropTarget(e,t,n,r,i){return Oa(this,e,t,n,r,i)}cloneTree(e,t,n={}){let r=this.nodes.get(e);if(!r)return null;let i=ye(r,null);i.source={...i.source,id:null,orderKey:null};let a=this.createNode(r.type,t,{...i,...n});for(let e of r.childIds)this.cloneTree(e,a.id);return a}createInstance(e,t,n={}){return bn(this,e,t,n)}populateInstanceChildren(e,t,n=`deep`){xn(this,e,t,n)}swapInstanceComponent(e,t,n){Cn(this,e,t,n)}syncInstances(e){Tn(this,e)}syncInstancesTogether(e){En(this,e)}syncInstance(e){Dn(this,e)}detachInstance(e){kn(this,e)}getMainComponent(e){return An(this,e)}getInstances(e){return jn(this,e)}flattenTree(e,t=0){let n=e??this.rootId,r=this.nodes.get(n);if(!r)return[];let i=[];for(let e of r.childIds){let n=this.nodes.get(e);n&&(i.push({node:n,depth:t}),n.childIds.length>0&&i.push(...this.flattenTree(e,t+1)))}return i}};function Ha(e){return{rootId:e.rootId,nodes:[...e.nodes],images:[...e.images],variables:[...e.variables],variableCollections:[...e.variableCollections],activeMode:[...e.activeMode],instanceIndex:[...e.instanceIndex].map(([e,t])=>[e,[...t]]),figKiwiVersion:e.figKiwiVersion,figSchemaDeflated:e.figSchemaDeflated,documentColorSpace:e.documentColorSpace,enabledLibraries:[...e.enabledLibraries]}}let Ua={sessionID:4294967295,localID:4294967295};function Wa(e){return e.sessionID===Ua.sessionID&&e.localID===Ua.localID}function G(e){return`${e.sessionID}:${e.localID}`}function Ga(e){let t=e.match(/^(?:VariableID:|VariableCollectionId:)?(\d+):(\d+)$/);if(t)return{sessionID:Number.parseInt(t[1],10),localID:Number.parseInt(t[2],10)};let[n,r]=e.split(`:`);return{sessionID:Number.parseInt(n,10),localID:Number.parseInt(r,10)}}function Ka(e,t){let n=[],r=t.parentId?e.getNode(t.parentId):void 0;for(;r;)r.type===`INSTANCE`&&n.push(r),r=r.parentId?e.getNode(r.parentId):void 0;return t.type===`INSTANCE`&&n.unshift(t),n}function qa(e,t){let n=[];for(let r of Ka(e,t)){let i=l(r.instanceOverrides,r.id,t.id,`sourceComponentId`),a=typeof i==`string`?i:t.componentId,o=a?e.getNode(a):void 0;o&&n.push(o)}return n}function Ja(e,t){e.preserveSourceMetadataDuring(()=>{for(let n of t.nodes.values()){let t=Ka(e,n),r=new Set;for(let e of t){let t=e.id===n.id?e.instanceOverrides.self:e.instanceOverrides.descendants.get(n.id);for(let e of t?.keys()??[])r.add(e)}let i={};for(let t of qa(e,n))for(let e of ft)!t.source.editedFields.includes(e)||r.has(e)||Object.assign(i,{[e]:structuredClone(t[e])});Object.keys(i).length&&e.updateNode(n.id,i)}})}function Ya(e){if(!e||typeof e!=`object`)return!1;let t=e;return Number.isFinite(t.sessionID)&&Number.isFinite(t.localID)}function Xa(e,t){return e?`fig-guide:${e.sessionID}:${e.localID}`:`guide:${t}`}function Za(e){if(!Array.isArray(e))return[];let t=[];for(let[n,r]of e.entries()){if(!r||typeof r!=`object`)continue;let e=r;if(typeof e.offset!=`number`||!Number.isFinite(e.offset))continue;let i=Ya(e.guid)?e.guid:void 0;e.axis===`X`?t.push({id:Xa(i,n),axis:`x`,position:e.offset,...i?{figGuid:i}:{}}):e.axis===`Y`&&t.push({id:Xa(i,n),axis:`y`,position:e.offset,...i?{figGuid:i}:{}})}return t}let Qa={min:3,max:60};function $a(e){let t={};for(let n of e.split(`,`).map(e=>e.trim())){let e=n.indexOf(`=`);e!==-1&&(t[n.slice(0,e).trim()]=n.slice(e+1).trim())}return t}function eo(e,t){let n=e.baselines??[];if(e.logicalIndexToCharacterOffsetMap?.length!==t.length+1||n.length!==1)return!1;let r=n[0].position.y;return(e.glyphs??[]).every(e=>(e.rotation??0)===0&&e.position.y===r)}function to(e,t,n){if(!e||eo(e,n))return[];let r=[],i=e.truncationStartIndex??-1,a=e.glyphs??[];for(let e of i>=0?a.slice(0,i):a){let n=e.commandsBlob===void 0?void 0:t[e.commandsBlob];if(!n)return[];let i=e.advance*e.fontSize;r.push({commandsBlob:n,x:e.position.x,y:e.position.y,fontSize:e.fontSize,firstCharacter:e.firstCharacter,rotation:e.rotation,advance:Number.isFinite(i)?i:void 0})}return r}let no=new Int32Array(1),ro=new Float32Array(no.buffer),io=new TextDecoder;var ao=class{_data;_index;length;constructor(e){if(e&&!(e instanceof Uint8Array))throw Error(`Must initialize a ByteBuffer with a Uint8Array`);this._data=e||new Uint8Array(256),this._index=0,this.length=e?e.length:0}get offset(){return this._index}set offset(e){this._index=e}get bytes(){return this._data}toUint8Array(){return this._data.subarray(0,this.length)}readByte(){return this._data[this._index++]}readByteArray(){let e=this.readVarUint(),t=this._index;return this._index=t+e,this._data.slice(t,t+e)}skipByteArray(){let e=this.readVarUint();this._index+=e}readVarFloat(){let e=this._index,t=this._data,n=t[e];if(n===0)return this._index=e+1,0;let r=n|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24;return this._index=e+4,r=r<<23|r>>>9,no[0]=r,ro[0]}readVarUint(){let e=this._data,t=this._index,n=e[t++],r=n&127;return n<128||(n=e[t++],r|=(n&127)<<7,n<128)||(n=e[t++],r|=(n&127)<<14,n<128)||(n=e[t++],r|=(n&127)<<21,n<128)?(this._index=t,r):(n=e[t++],r|=(n&127)<<28,this._index=t,r>>>0)}readVarInt(){let e=this.readVarUint()|0;return e&1?~(e>>>1):e>>>1}readVarUint64(){let e=BigInt(0),t=BigInt(0),n=BigInt(7),r=this.readByte();for(;r&128&&t<56;)e|=BigInt(r&127)<<t,t+=n,r=this.readByte();return e|=BigInt(r)<<t,e}readVarInt64(){let e=this.readVarUint64(),t=BigInt(1),n=e&t;return e>>=t,n?~e:e}readString(){let e=this._index,t=this.findStringTerminator(e);return this._index=t+1,io.decode(this._data.subarray(e,t))}skipString(){this._index=this.findStringTerminator(this._index)+1}findStringTerminator(e){let t=this._data,n=e;for(;n<t.length&&t[n]!==0;)n++;if(n>=t.length)throw Error(`Unterminated string in Kiwi message`);return n}_growBy(e){if(this.length+e>this._data.length){let t=new Uint8Array(this.length+e<<1);t.set(this._data),this._data=t}this.length+=e}writeByte(e){let t=this.length;this._growBy(1),this._data[t]=e}writeByteArray(e){if(!(e instanceof Uint8Array)&&!Array.isArray(e))throw Error(`Expected byte array`);this.writeVarUint(e.length);let t=this.length;this._growBy(e.length),this._data.set(e,t)}writeVarFloat(e){let t=this.length;ro[0]=e;let n=no[0];if(n=n>>>23|n<<9,!(n&255)){this.writeByte(0);return}this._growBy(4);let r=this._data;r[t]=n,r[t+1]=n>>8,r[t+2]=n>>16,r[t+3]=n>>24}writeVarUint(e){if(e<0||e>4294967295)throw Error(`Outside uint range: `+e);do{let t=e&127;e>>>=7,this.writeByte(e?t|128:t)}while(e)}writeVarInt(e){if(e<-2147483648||e>2147483647)throw Error(`Outside int range: `+e);this.writeVarUint((e<<1^e>>31)>>>0)}writeVarUint64(e){if(typeof e==`string`)e=BigInt(e);else if(typeof e!=`bigint`)throw Error(`Expected bigint but got ${typeof e}: ${String(e)}`);if(e<0||e>BigInt(`0xFFFFFFFFFFFFFFFF`))throw Error(`Outside uint64 range: `+e);let t=BigInt(127),n=BigInt(7);for(let r=0;e>t&&r<8;r++)this.writeByte(Number(e&t)|128),e>>=n;this.writeByte(Number(e))}writeVarInt64(e){if(typeof e==`string`)e=BigInt(e);else if(typeof e!=`bigint`)throw Error(`Expected bigint but got ${typeof e}: ${String(e)}`);if(e<-BigInt(`0x8000000000000000`)||e>BigInt(`0x7FFFFFFFFFFFFFFF`))throw Error(`Outside int64 range: `+e);let t=BigInt(1);this.writeVarUint64(e<0?~(e<<t):e<<t)}writeString(e){let t;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(n+1===e.length||r<55296||r>=56320)t=r;else{let i=e.charCodeAt(++n);t=(r<<10)+i+-56613888}if(t===0)throw Error(`Cannot encode a string containing the null character`);t<128?this.writeByte(t):(t<2048?this.writeByte(t>>6&31|192):(t<65536?this.writeByte(t>>12&15|224):(this.writeByte(t>>18&7|240),this.writeByte(t>>12&63|128)),this.writeByte(t>>6&63|128)),this.writeByte(t&63|128))}this.writeByte(0)}};function K(e){return JSON.stringify(e)}function q(e,t,n){var r=Error(e);throw r.line=t,r.column=n,r}let oo=[`bool`,`byte`,`float`,`int`,`int64`,`string`,`uint`,`uint64`],so=[`ByteBuffer`,`package`],co=/((?:-|\b)\d+\b|[=;{}]|\[\]|\[deprecated\]|\b[A-Za-z_][A-Za-z0-9_]*\b|\/\/.*|\s+)/g,lo=/^[A-Za-z_][A-Za-z0-9_]*$/,uo=/^\/\/.*|\s+$/,fo=/^=$/,po=/^$/,mo=/^;$/,ho=/^-?\d+$/,go=/^\{$/,_o=/^\}$/,vo=/^\[\]$/,yo=/^enum$/,bo=/^struct$/,xo=/^message$/,So=/^package$/,Co=/^\[deprecated\]$/;function wo(e){let t=e.split(co),n=[],r=0,i=0;for(let e=0;e<t.length;e++){let a=t[e];e&1?uo.test(a)||n.push({text:a,line:i+1,column:r+1}):a!==``&&q(`Syntax error `+K(a),i+1,r+1);let o=a.split(`
`);o.length>1&&(r=0),i+=o.length-1,r+=o[o.length-1].length}return n.push({text:``,line:i,column:r}),n}function To(e){function t(){return e[s]}function n(e){return e.test(t().text)?(s++,!0):!1}function r(e,r){if(!n(e)){let e=t();q(`Expected `+r+` but found `+K(e.text),e.line,e.column)}}function i(){let e=t();q(`Unexpected token `+K(e.text),e.line,e.column)}let a=[],o=null,s=0;for(n(So)&&(o=t().text,r(lo,`identifier`),r(mo,`";"`));s<e.length&&!n(po);){let e=[],o;n(yo)?o=`ENUM`:n(bo)?o=`STRUCT`:n(xo)?o=`MESSAGE`:i();let s=t();for(r(lo,`identifier`),r(go,`"{"`);!n(_o);){let i=null,a=!1,s=!1;o!==`ENUM`&&(i=t().text,r(lo,`identifier`),a=n(vo));let c=t();r(lo,`identifier`);let l=null;o!==`STRUCT`&&(r(fo,`"="`),l=t(),r(ho,`integer`),(l.text|0)+``!==l.text&&q(`Invalid integer `+K(l.text),l.line,l.column));let u=t();n(Co)&&(o!==`MESSAGE`&&q(`Cannot deprecate this field`,u.line,u.column),s=!0),r(mo,`";"`),e.push({name:c.text,line:c.line,column:c.column,type:i,isArray:a,isDeprecated:s,value:l===null?e.length+1:l.text|0})}a.push({name:s.text,line:s.line,column:s.column,kind:o,fields:e})}return{package:o,definitions:a}}function Eo(e){let t=oo.slice(),n={};for(let r=0;r<e.definitions.length;r++){let i=e.definitions[r];t.includes(i.name)&&q(`The type `+K(i.name)+` is defined twice`,i.line,i.column),so.includes(i.name)&&q(`The type name `+K(i.name)+` is reserved`,i.line,i.column),t.push(i.name),n[i.name]=i}for(let n=0;n<e.definitions.length;n++){let r=e.definitions[n],i=r.fields;if(r.kind===`ENUM`||i.length===0)continue;for(let e=0;e<i.length;e++){let n=i[e];t.includes(n.type)||q(`The type `+K(n.type)+` is not defined for field `+K(n.name),n.line,n.column)}let a=[];for(let e=0;e<i.length;e++){let t=i[e];a.includes(t.value)&&q(`The id for field `+K(t.name)+` is used twice`,t.line,t.column),t.value<=0&&q(`The id for field `+K(t.name)+` must be positive`,t.line,t.column),a.push(t.value)}}let r={},i=e=>{let t=n[e];if(t&&t.kind===`STRUCT`&&(r[e]===1&&q(`Recursive nesting of `+K(e)+` is not allowed`,t.line,t.column),r[e]!==2&&t)){r[e]=1;let n=t.fields;for(let e=0;e<n.length;e++){let t=n[e];t.isArray||i(t.type)}r[e]=2}return!0};for(let t=0;t<e.definitions.length;t++)i(e.definitions[t].name)}function Do(e){let t=To(wo(e));return Eo(t),t}function Oo(e){let t=new Map(e.definitions.map(e=>[e.name,e])),n=new Map,r=e=>{let n=t.get(e);return n||q(`Invalid type `+K(e),0,0),n},i=e=>{let t=n.get(e.name);return t||(t=new Map(e.fields.map(e=>[e.value,e])),n.set(e.name,t)),t},a=(e,t)=>{switch(e){case`bool`:case`byte`:t.readByte();return;case`int`:case`uint`:t.readVarUint();return;case`float`:t.readVarFloat();return;case`string`:t.skipString();return;case`int64`:case`uint64`:t.readVarUint64();return}let n=r(e);if(n.kind===`ENUM`){t.readVarUint();return}if(n.kind===`STRUCT`){for(let e of n.fields)o(e,t);return}let a=i(n);for(let e=t.readVarUint();e!==0;e=t.readVarUint()){let n=a.get(e);if(!n)throw Error(`Attempted to parse invalid message`);o(n,t)}},o=(e,t)=>{let n=e.type;if(n===null&&q(`Invalid type null for field `+K(e.name),e.line,e.column),!e.isArray){a(n,t);return}if(n===`byte`){t.skipByteArray();return}for(let e=t.readVarUint();e>0;e--)a(n,t)};return{definition:r,fieldsById:e=>i(r(e)),skipField:o,skipValue:a}}let ko=Symbol(`header bytes`),Ao=Symbol(`header start`),jo=Symbol(`header whole decoder`),Mo=0;function No(e){let t=Reflect.get(e,ko),n=Reflect.get(e,Ao),r=Reflect.get(e,jo);if(!(t instanceof Uint8Array)||typeof n!=`number`||typeof r!=`function`)return;let i=new ao(t);return i.offset=n,r(i)}function Po(e,t,n){Reflect.defineProperty(e,t,{value:n,enumerable:!1})}function Fo(e){return t=>{Mo++;try{return e(t)}finally{Mo--}}}function Io(e){return e}function Lo(e){return e}function Ro(e){return e}function zo(e,t){return Object.hasOwn(e,t)}function Bo(e){let t=Object.values(e);for(let n=0;n<t.length;n++){let r=t[n];if(r.kind!==`ENUM`)for(let t=0;t<r.fields.length;t++){let n=r.fields[t],i=n.type;i===null&&q(`Invalid type null for field `+K(n.name),n.line,n.column),!oo.includes(i)&&!zo(e,i)&&q(`Invalid type `+K(i)+` for field `+K(n.name),n.line,n.column)}}}function Vo(e,t,n,r){switch(n){case`bool`:return!!r.readByte();case`byte`:return r.readByte();case`int`:return r.readVarInt();case`uint`:return r.readVarUint();case`float`:return r.readVarFloat();case`string`:return r.readString();case`int64`:return r.readVarInt64();case`uint64`:return r.readVarUint64();default:{let i=t[n];return i||q(`Invalid type `+K(n),0,0),i.kind===`ENUM`?Ro(e[i.name])[r.readVarUint()]:Io(e[`decode`+i.name])(r)}}}function Ho(e,t,n,r,i){switch(n){case`bool`:case`byte`:i.writeByte(r);return;case`int`:i.writeVarInt(r);return;case`uint`:i.writeVarUint(r);return;case`float`:i.writeVarFloat(r);return;case`string`:i.writeString(r);return;case`int64`:i.writeVarInt64(r);return;case`uint64`:i.writeVarUint64(r);return;default:{let a=t[n];if(a||q(`Invalid type `+K(n),0,0),a.kind===`ENUM`){let t=Ro(e[a.name])[r];if(t===void 0)throw Error(`Invalid value `+JSON.stringify(r)+` for enum `+K(a.name));i.writeVarUint(t)}else Lo(e[`encode`+a.name])(r,i)}}}function Uo(e,t,n,r,i){let a=n.type;if(a===null&&q(`Invalid type null for field `+K(n.name),n.line,n.column),n.isArray){if(n.isDeprecated){if(a===`byte`)r.readByteArray();else{let n=r.readVarUint();for(;n-->0;)Vo(e,t,a,r)}return}if(a===`byte`){i[n.name]=r.readByteArray();return}let o=r.readVarUint(),s=Array.from({length:o});i[n.name]=s;for(let n=0;n<o;n++)s[n]=Vo(e,t,a,r);return}if(n.isDeprecated){Vo(e,t,a,r);return}i[n.name]=Vo(e,t,a,r)}function Wo(e,t,n,r,i){let a=n.type;if(a===null&&q(`Invalid type null for field `+K(n.name),n.line,n.column),n.isArray){if(a===`byte`){i.writeByteArray(r);return}let n=r;i.writeVarUint(n.length);for(let r=0;r<n.length;r++)Ho(e,t,a,n[r],i);return}Ho(e,t,a,r,i)}function Go(e,t,n,r){let i=new Map;for(let e=0;e<n.fields.length;e++)i.set(n.fields[e].value,n.fields[e]);return function(a){let o=a instanceof e.ByteBuffer?a:new e.ByteBuffer(a),s={};if(n.kind===`MESSAGE`){let n=r&&Mo===0?r:void 0;for(n&&(Po(s,ko,o.bytes),Po(s,Ao,o.offset),Po(s,jo,n.whole));;){let r=o.readVarUint();if(r===0)return s;let a=i.get(r);if(!a)throw Error(`Attempted to parse invalid message`);n&&!n.keep.has(a.name)?n.skipper.skipField(a,o):Uo(e,t,a,o,s)}}else{for(let r=0;r<n.fields.length;r++)Uo(e,t,n.fields[r],o,s);return s}}}function Ko(e,t,n){return function(r,i){let a=!i,o=i||new e.ByteBuffer;for(let i=0;i<n.fields.length;i++){let a=n.fields[i];if(a.isDeprecated)continue;let s=r[a.name];if(s!=null)n.kind===`MESSAGE`&&o.writeVarUint(a.value),Wo(e,t,a,s,o);else if(n.kind===`STRUCT`)throw Error(`Missing required field `+K(a.name))}if(n.kind===`MESSAGE`&&o.writeVarUint(0),a)return o.toUint8Array()}}function qo(e,t){let n=Object.create(null);for(let t=0;t<e.definitions.length;t++)n[e.definitions[t].name]=e.definitions[t];Bo(n);let r={ByteBuffer:ao},i;for(let a=0;a<e.definitions.length;a++){let o=e.definitions[a];switch(o.kind){case`ENUM`:{let e={};for(let t=0;t<o.fields.length;t++){let n=o.fields[t];e[n.name]=n.value,e[n.value]=n.name}r[o.name]=e;break}case`STRUCT`:case`MESSAGE`:{let a=o.kind===`MESSAGE`?t?.[o.name]:void 0,s=a&&{keep:new Set(a),skipper:i??=Oo(e),whole:Fo(Go(r,n,o))};r[`decode`+o.name]=Go(r,n,o,s),r[`encode`+o.name]=Ko(r,n,o);break}default:q(`Invalid definition kind `+K(o.kind),o.line,o.column);break}}return r}let Jo=[`bool`,`byte`,`int`,`uint`,`float`,`string`,`int64`,`uint64`],Yo=[`ENUM`,`STRUCT`,`MESSAGE`];function Xo(e){let t=e instanceof ao?e:new ao(e),n=t.readVarUint(),r=[];for(let e=0;e<n;e++){let e=t.readString(),n=t.readByte(),i=t.readVarUint(),a=[];for(let e=0;e<i;e++){let e=t.readString(),r=t.readVarInt(),i=!!(t.readByte()&1),o=t.readVarUint();a.push({name:e,line:0,column:0,type:Yo[n]===`ENUM`?null:r,isArray:i,isDeprecated:!1,value:o})}r.push({name:e,line:0,column:0,kind:Yo[n],fields:a})}for(let e=0;e<n;e++){let t=r[e].fields;for(let e=0;e<t.length;e++){let n=t[e],i=n.type;if(i!==null&&i<0){if(~i>=Jo.length)throw Error(`Invalid type `+i);n.type=Jo[~i]}else{if(i!==null&&i>=r.length)throw Error(`Invalid type `+i);n.type=i===null?null:r[i].name}}}return{package:null,definitions:r}}function Zo(e){for(let t of e.definitions)Qo(t),t.kind===`ENUM`&&$o(t)}function Qo(e){let t=new Set;for(let n of e.fields)t.has(n.name)&&q(`The field ${K(n.name)} is defined twice in ${K(e.name)}`,n.line,n.column),t.add(n.name)}function $o(e){let t=new Set;for(let n of e.fields)t.has(n.value)&&q(`The enum value ${n.value} is used twice in ${K(e.name)}`,n.line,n.column),t.add(n.value)}let es=Do(`enum MessageType {
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
`);Zo(es);function ts(e){return new Map(e.fields.map(e=>[e.value,e]))}function ns(e,t){let n=e.fields.get(t.name);return n||(n=ts(t),e.fields.set(t.name,n)),n}function rs(e,t,n){switch(t.type){case`bool`:case`byte`:e.readByte();return;case`int`:e.readVarInt();return;case`uint`:e.readVarUint();return;case`float`:e.readVarFloat();return;case`string`:e.skipString();return;case`int64`:e.readVarInt64();return;case`uint64`:e.readVarUint64();return}let r=t.type?n.definitions.get(t.type):void 0;if(!r)throw Error(`Invalid Kiwi field type: ${String(t.type)}`);if(r.kind===`ENUM`){e.readVarUint();return}as(e,r,n)}function is(e,t,n){if(!t.isArray){rs(e,t,n);return}if(t.type===`byte`){e.skipByteArray();return}let r=e.readVarUint();for(;r-->0;)rs(e,t,n)}function as(e,t,n){if(t.kind===`STRUCT`){for(let r of t.fields)is(e,r,n);return}let r=ns(n,t);for(;;){let i=e.readVarUint();if(i===0)return;let a=r.get(i);if(!a)throw Error(`Invalid field ${i} in Kiwi ${t.name}`);is(e,a,n)}}function os(e,t,n){let r=e.readVarUint(),i=t.type?n.definitions.get(t.type):void 0;return i?.kind===`ENUM`?i.fields.find(e=>e.value===r)?.name??null:null}function ss(e,t,n){let r=ns(n,t),i=null,a=null,o=null,s=null,c=null,l=null,u=null,d=null,f=!1;for(;;){let t=e.readVarUint();if(t===0)break;let p=r.get(t);if(!p)throw Error(`Invalid field ${t} in Kiwi NodeChange`);switch(p.name){case`guid`:i=e.readVarUint(),a=e.readVarUint();break;case`parentIndex`:o=e.readVarUint(),s=e.readVarUint(),c=e.offset,e.skipString();break;case`phase`:l=os(e,p,n);break;case`type`:u=os(e,p,n);break;case`name`:u===`DOCUMENT`||u===`CANVAS`?d=e.readString():e.skipString();break;case`internalOnly`:f=!!e.readByte();break;default:is(e,p,n)}}if(u!==`DOCUMENT`&&u!==`CANVAS`||i===null||a===null)return null;let p=null;if(c!==null){let t=e.offset;e.offset=c,p=e.readString(),e.offset=t}let m=o===null||s===null?null:`${o}:${s}`;return{sourceId:`${i}:${a}`,parentId:m,position:p,phase:l,type:u,name:d??`Page`,internalOnly:f}}function cs(e,t){let n=new Map(e.definitions.map(e=>[e.name,e])),r={definitions:n,fields:new Map},i=n.get(`Message`),a=n.get(`NodeChange`);if(i?.kind!==`MESSAGE`||a?.kind!==`MESSAGE`)return[];let o=new ao(t),s=ns(r,i),c=[];for(;;){let e=o.readVarUint();if(e===0)break;let t=s.get(e);if(!t)throw Error(`Invalid field ${e} in Kiwi Message`);if(t.name!==`nodeChanges`||!t.isArray){is(o,t,r);continue}let n=o.readVarUint();for(;n-->0;){let e=ss(o,a,r);e&&c.push(e)}break}let l=c.find(e=>e.type===`DOCUMENT`&&e.phase!==`REMOVED`)?.sourceId;return c.filter(e=>e.type===`CANVAS`&&e.phase!==`REMOVED`&&(!l||e.parentId===l)).sort((e,t)=>{let n=e.position??``,r=t.position??``;return n<r?-1:+(n>r)}).map(({sourceId:e,name:t,position:n,internalOnly:r})=>({sourceId:e,name:t,position:n,internalOnly:r}))}new Uint8Array([40,181,47,253]);function ls(e){return e.length>=4&&e[0]===40&&e[1]===181&&e[2]===47&&e[3]===253}new Set((es.definitions.find(e=>e.name===`OpenTypeFeature`)?.fields??[]).map(e=>e.name));let us=[[`fontVariantCommonLigatures`,`LIGA`],[`fontVariantContextualLigatures`,`CALT`],[`fontVariantDiscretionaryLigatures`,`DLIG`],[`fontVariantHistoricalLigatures`,`HLIG`],[`fontVariantOrdinal`,`ORDN`],[`fontVariantSlashedZero`,`ZERO`]],ds=[[`fontVariantNumericFigure`,{LINING:`LNUM`,OLDSTYLE:`ONUM`}],[`fontVariantNumericSpacing`,{PROPORTIONAL:`PNUM`,TABULAR:`TNUM`}],[`fontVariantNumericFraction`,{DIAGONAL:`FRAC`,STACKED:`AFRC`}],[`fontVariantCaps`,{SMALL:`SMCP`,PETITE:`PCAP`,ALL_SMALL:[`SMCP`,`C2SC`],ALL_PETITE:[`PCAP`,`C2PC`],UNICASE:`UNIC`,TITLING:`TITL`}]];Object.fromEntries(us.map(([e,t])=>[t,e]));function fs(e,t,n){let r=t.toUpperCase();e.some(e=>e.tag===r)||e.push({tag:r,enabled:n})}function ps(e){let t=[];for(let[n,r]of us){let i=e[n];i!==void 0&&fs(t,r,i)}for(let[n,r]of ds){let i=r[String(e[n])];if(Array.isArray(i))for(let e of i)fs(t,e,!0);else i&&fs(t,i,!0)}for(let n of e.toggledOnOTFeatures??[])fs(t,n,!0);for(let n of e.toggledOffOTFeatures??[])fs(t,n,!1);return t}function ms(e){return String.fromCharCode(e>>24&255,e>>16&255,e>>8&255,e&255)}function hs(e){let t=[];for(let n of e.fontVariations??[]){if(typeof n.value!=`number`)continue;let e=typeof n.axisTag==`number`?ms(n.axisTag):n.axisName||``;e&&t.push({axis:e,value:n.value})}return t}function gs(e){return e?{r:e.r??0,g:e.g??0,b:e.b??0,a:e.a??1}:{...m}}function _s(e){return Object.keys(e).sort((e,t)=>Number(e)-Number(t)).map(t=>e[Number(t)]).map(e=>e.toString(16).padStart(2,`0`)).join(``)}function vs(e){if(e)return{m00:e.m00,m01:e.m01,m02:e.m02,m10:e.m10,m11:e.m11,m12:e.m12}}function ys(e){e.colorVar?.value?.alias}function bs(e){let t=ys(e);return t?{color:{...t,a:e.color?.a??1},opacity:e.opacity??t.a}:{color:gs(e.color),opacity:e.opacity??1}}function xs(e){let{color:t,opacity:n}=bs(e);return{type:e.type,color:t,opacity:n,visible:e.visible??!0,blendMode:e.blendMode??`NORMAL`}}function Ss(e,t){!t.type.startsWith(`GRADIENT`)||!t.stops||(e.gradientStops=t.stops.map(e=>({color:gs(e.color),position:e.position})),t.transform&&(e.gradientTransform=vs(t.transform)))}function Cs(e,t){if(t.type===`IMAGE`){if(t.image&&typeof t.image==`object`){let n=t.image;typeof n.hash==`object`?e.imageHash=_s(n.hash):typeof n.hash==`string`&&(e.imageHash=n.hash)}e.imageScaleMode=t.imageScaleMode??`FILL`,t.transform&&(e.imageTransform=vs(t.transform))}}function ws(e,t){t.sourceNodeId&&(e.sourceNodeId=G(t.sourceNodeId)),t.scale&&(e.scale=t.scale),t.spacing&&(e.spacing=t.spacing),t.patternSpacing&&(e.patternSpacing=t.patternSpacing),t.patternTileType&&(e.patternTileType=t.patternTileType),t.verticalAlignment&&(e.verticalAlignment=t.verticalAlignment),t.horizontalAlignment&&(e.horizontalAlignment=t.horizontalAlignment),t.noiseType&&(e.noiseType=t.noiseType),t.density!==void 0&&(e.density=t.density),t.noiseSize&&(e.noiseSize=t.noiseSize),t.customEffectId?.guid&&(e.customEffectId=G(t.customEffectId.guid))}function Ts(e){let t=xs(e);return Ss(t,e),Cs(t,e),ws(t,e),t}function Es(e){return e?e.map(Ts):[]}function Ds(e){return e===`INSIDE`||e===`OUTSIDE`?e:`CENTER`}function Os(e,t,n,r,i,a){if(!e)return[];let o=Ds(n);return e.map(e=>({...Ts(e),weight:t??1,align:o,cap:r??`NONE`,join:i??`MITER`,dashPattern:a??[]}))}function ks(e){return e?e.map(e=>({type:e.type,color:gs(e.color),offset:e.offset??{x:0,y:0},radius:e.radius??0,spread:e.spread??0,visible:e.visible??!0,blendMode:e.blendMode??`NORMAL`,showShadowBehindNode:e.showShadowBehindNode??!0})):[]}function As(e,t,n){return t===0&&n===0?e:de(e,1,0,0,1,t,n)}function js(e,t,n){let r=[...e.fillGeometry??[],...e.strokeGeometry??[]],i=r.length>0?o(r):null,a=i?.x??0,s=i?.y??0,c=i?i.x+i.width:t,l=i?i.y+i.height:n;for(let t of e.derivedTextGlyphs??[]){let e=t.fontSize||0;a=Math.min(a,t.x-e*.25),s=Math.min(s,t.y-e),c=Math.max(c,t.x+e),l=Math.max(l,t.y+e*.35)}return{left:Math.max(0,-a+ +(a<0)),top:Math.max(0,-s+ +(s<0)),right:Math.max(0,c-t+ +(c>t)),bottom:Math.max(0,l-n+ +(l>n))}}function Ms(e,t,n){e.strokeGeometry&&e.strokeGeometry.length>0&&(e.strokeGeometry=As(e.strokeGeometry,t,n)),e.fillGeometry&&e.fillGeometry.length>0&&(e.fillGeometry=As(e.fillGeometry,t,n)),e.derivedTextGlyphs?.length&&(e.derivedTextGlyphs=e.derivedTextGlyphs.map(e=>({...e,x:e.x+t,y:e.y+n})))}function Ns(e,t){if(e.nodeType!==`TEXT`||!t)return;e.textPathData=t;let n=e.width??0,r=e.height??0;e.textPathBox={x:0,y:0,width:n,height:r};let i=js(e,n,r);if(i.left===0&&i.top===0&&i.right===0&&i.bottom===0)return;let a=i.left,o=i.top;e.x=(e.x??0)-a,e.y=(e.y??0)-o,e.width=n+i.left+i.right,e.height=r+i.top+i.bottom,(a!==0||o!==0)&&(e.textPathBox={x:a,y:o,width:n,height:r},Ms(e,a,o))}function Ps(e){return Object.getPrototypeOf(e)===Object.prototype}function Fs(e){if(typeof e!=`object`||!e)return e;if(Array.isArray(e))return e.map(e=>Fs(e));if(!Ps(e))return structuredClone(e);let t={};for(let n of Object.keys(e))t[n]=Fs(e[n]);return t}function Is(e){return Fs(e)}function Ls(e,t=0){if(t>64)throw Error(`Variable expression exceeds maximum depth`);let n=e?.value;if(e?.dataType===`EXPRESSION`&&!n?.expressionValue)throw Error(`Missing variable expression value`);if(!n)return;if(n.alias)return{multiplier:1,reference:n.alias};if(typeof n.floatValue==`number`&&Number.isFinite(n.floatValue))return{multiplier:n.floatValue};let r=n.expressionValue;if(r){if(r.expressionFunction===`STRINGIFY`)return Rs(r);if(r.expressionFunction!==`MULTIPLY`||!r.expressionArguments?.length)throw Error(`Unsupported variable expression ${r.expressionFunction}`);return zs(r.expressionArguments,t)}}function Rs(e){let t=e.expressionArguments??[],n=t.length===1?t[0].value?.alias:void 0;if(!n)throw Error(`Variable expression STRINGIFY must wrap one alias`);return{multiplier:1,reference:n}}function zs(e,t){let n={multiplier:1};for(let r of e){let e=Ls(r,t+1);if(!e||n.reference&&e.reference)throw Error(`Variable expression is not a constant multiplied by one alias`);n.multiplier*=e.multiplier,e.reference&&(n.reference=e.reference)}if(!Number.isFinite(n.multiplier))throw Error(`Variable expression has a non-finite multiplier`);return n}function Bs(e,t,n=0){if(n>64)throw Error(`Variable expression exceeds maximum depth`);e?.value?.alias&&t(e.value.alias);for(let r of e?.value?.expressionValue?.expressionArguments??[])Bs(r,t,n+1)}let Vs={cornerRadius:`CORNER_RADIUS`,topLeftRadius:`RECTANGLE_TOP_LEFT_CORNER_RADIUS`,topRightRadius:`RECTANGLE_TOP_RIGHT_CORNER_RADIUS`,bottomLeftRadius:`RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS`,bottomRightRadius:`RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS`,strokeWeight:`STROKE_WEIGHT`,borderTopWeight:`BORDER_TOP_WEIGHT`,borderBottomWeight:`BORDER_BOTTOM_WEIGHT`,borderLeftWeight:`BORDER_LEFT_WEIGHT`,borderRightWeight:`BORDER_RIGHT_WEIGHT`,itemSpacing:`STACK_SPACING`,paddingLeft:`STACK_PADDING_LEFT`,paddingTop:`STACK_PADDING_TOP`,paddingRight:`STACK_PADDING_RIGHT`,paddingBottom:`STACK_PADDING_BOTTOM`,counterAxisSpacing:`STACK_COUNTER_SPACING`,gridRowGap:`GRID_ROW_GAP`,gridColumnGap:`GRID_COLUMN_GAP`,text:`TEXT_DATA`,visible:`VISIBLE`,opacity:`OPACITY`,width:`WIDTH`,height:`HEIGHT`,minWidth:`MIN_WIDTH`,maxWidth:`MAX_WIDTH`,minHeight:`MIN_HEIGHT`,maxHeight:`MAX_HEIGHT`,x:`X_POSITION`,y:`Y_POSITION`,rotation:`ROTATION`,fontSize:`FONT_SIZE`,letterSpacing:`LETTER_SPACING`,lineHeight:`LINE_HEIGHT`,fontFamily:`FONT_FAMILY`},Hs=Object.fromEntries(Object.entries(Vs).map(([e,t])=>[t,e])),Us=.01;function Ws(e){return e===`ALIAS`||e===`EXPRESSION`}function Gs(e){let t=e.parameterConsumptionMap,n=new Map,r=[];for(let i of[...e.variableConsumptionMap?.entries??[],...t?.entries??[]])i.variableField?n.set(i.variableField,i):r.push(i);return[...r,...n.values()]}function Ks(e,t){let n=Gs(t);if(n.length===0)return{};let r=[];for(let t of[...Gs(e),...n]){let e=t.variableField?r.findIndex(e=>e.variableField===t.variableField):-1;e<0?r.push(Is(t)):r[e]=Is(t)}return{parameterConsumptionMap:{entries:r}}}let qs=zn({fontFamily:`FONT_FAMILY`,fontStyle:`FONT_STYLE`,fontSize:`FONT_SIZE`,letterSpacing:`LETTER_SPACING`,lineHeight:`LINE_HEIGHT`,paragraphSpacing:`PARAGRAPH_SPACING`,paragraphIndent:`PARAGRAPH_INDENT`});function Js(e){let t={};for(let n of Gs(e)){let e=n.variableField&&qs[n.variableField],r=e?Ls(n.variableData)?.reference?.guid:void 0;e&&r&&(t[e]=G(r))}return t}function Ys(e,t){return e===`opacity`?Us:e===`rotation`?1:t}function Xs(e){let t=e.variableField?Hs[e.variableField]:void 0;if(!t)return;let n=Ls(e.variableData);if(e.variableData?.value?.expressionValue&&!n?.reference)throw Error(`Variable expression must contain one alias`);let r=n?.reference?.guid;return r?{field:t,variableId:G(r),multiplier:n.multiplier}:void 0}function Zs(e){let t={};for(let n of Gs(e)){let e=Xs(n);e&&At(e.field)&&(t[e.field]=e.multiplier*(e.field===`opacity`?Us:1))}return t}function Qs(e=1){return e===1?{}:Object.fromEntries(Object.entries($s(Vs,e)).filter(([,e])=>e!==1))}function $s(e,t,n={}){let r={};for(let i of Object.keys(e))At(i)&&(r[i]=n[i]??Ys(i,t));return r}function ec(e,t){return e===`opacity`?{opacity:Math.max(0,Math.min(1,t*Us))}:At(e)?{[e]:t}:void 0}let{boundVariables:tc,exportSettings:nc,librarySource:rc,textPathBox:ic}=Ei,ac={PNG:`png`,JPEG:`jpg`,SVG:`svg`,PDF:`pdf`};function oc(e,t){return t.decode(e.pluginData?.find(e=>e.pluginID===`open-pencil`&&e.key===t.key)?.value)}function sc(e){return oc(e,ic)??null}function cc(e){let t=oc(e,tc)??{};for(let n of Gs(e)){let e=Xs(n);if(e)t[e.field]=e.variableId;else if(n.variableField&&!Ws(n.variableData?.dataType)){let e=Hs[n.variableField];e&&(t=Vn(t,[e]))}}return e.fillPaints?.forEach((e,n)=>{let r=e.colorVar?.value?.alias?.guid;r&&(t[`fills/${n}/color`]=G(r))}),e.strokePaints?.forEach((e,n)=>{let r=e.colorVar?.value?.alias?.guid;r&&(t[`strokes/${n}/color`]=G(r))}),t}function lc(e){return typeof e==`string`?ac[e]??null:e===0?`png`:e===1?`jpg`:e===2?`svg`:e===3?`pdf`:null}function uc(e){if(!e||typeof e!=`object`||Array.isArray(e))return 1;let t=e.type;if(t!==`CONTENT_SCALE`&&t!==0)return 1;let n=e.value;return typeof n==`number`&&Number.isFinite(n)?ni(n):1}function dc(e){return oc(e,nc)||(e.exportSettings??[]).flatMap(e=>{if(!e||typeof e!=`object`||Array.isArray(e))return[];let t=lc(e.imageType);return t?[{scale:uc(e.constraint),format:t}]:[]})}function fc(e){return(e.pluginData??[]).map(e=>({pluginId:e.pluginID,key:e.key,value:e.value}))}function pc(e){return oc(e,rc)??null}function mc(e){return(e.pluginRelaunchData??[]).map(e=>({pluginId:e.pluginID,command:e.command,message:e.message,isDeleted:e.isDeleted}))}let hc=[`fontSize`,`fontName`,`lineHeight`,`letterSpacing`,`textDecoration`,`textCase`];function gc(e,t,n){if(t?.guid)return e.get(G(t.guid));if(!t?.assetRef||!n)return;let{key:r,version:i}=t.assetRef,a=(i?n.get(`${r}@${i}`):void 0)??n.get(r);return a?e.get(a):void 0}function _c(e,t,n){let r=gc(e,t.styleIdForFill,n);r?.styleType===`FILL`&&r.fillPaints&&(t.fillPaints=r.fillPaints);let i=gc(e,t.styleIdForStrokeFill,n);i?.styleType===`FILL`&&i.fillPaints&&(t.strokePaints=i.fillPaints)}function vc(e,t,n){let r=gc(e,t.styleIdForEffect,n);r?.styleType===`EFFECT`&&r.effects&&(t.effects=r.effects);let i=gc(e,t.styleIdForGrid,n);i?.styleType===`GRID`&&i.layoutGrids&&(t.layoutGrids=i.layoutGrids)}function yc(e,t,n){let r=gc(e,t.styleIdForText,n);if(!(r?.type!==`TEXT`||r.styleType!==`TEXT`))for(let e of hc)e===`textDecoration`?t.textDecoration=r.textDecoration:r[e]!==void 0&&Object.assign(t,{[e]:r[e]})}function bc(e,t,n){_c(e,t,n),vc(e,t,n),yc(e,t,n)}function xc(e){if(!e||typeof e!=`object`||!(`guid`in e))return null;let t=e.guid;return!t||typeof t!=`object`||Wa(t)?null:G(t)}function Sc(e){switch(e){case`UNDERLINE`:return`UNDERLINE`;case`STRIKETHROUGH`:return`STRIKETHROUGH`;default:return`NONE`}}let Cc={value:100,units:`PERCENT`};function wc(e){return e?.units===Cc.units&&e.value===Cc.value}function Tc(e,t){return!e||wc(e)?null:e.units===`PIXELS`?e.value:e.units===`PERCENT`?e.value/100*(t??14):e.units===`RAW`?e.value*(t??14):null}function Ec(e,t){return e?e.units===`PIXELS`?e.value:e.units===`PERCENT`?e.value/100*(t??14):e.value:0}let Dc=new Set([`ORIGINAL`,`UPPER`,`LOWER`,`TITLE`]);function Oc(e){if(!e||typeof e!=`object`)return;let t=e;if(typeof t.url==`string`&&t.url!==``)return{type:`URL`,value:t.url};if(t.guid&&!Wa(t.guid))return{type:`NODE`,value:G(t.guid)}}function kc(e,t,n){Dc.has(t.textCase)&&(e.textCase=t.textCase);let r=Oc(t.hyperlink);r&&(e.hyperlink=r);for(let[r,i]of[[`textStyleId`,`styleIdForText`],[`fillStyleId`,`styleIdForFill`]]){if(t[i]===void 0)continue;let a=xc(t[i]);a!==xc(n[i])&&(e[r]=a)}let i=Js(t);S(i)||(e.boundVariables=i)}function Ac(e,t){let n=t.textDecoration;if(n&&(e.textDecoration=Sc(n)),t.textDecorationStyle&&(e.textDecorationStyle=t.textDecorationStyle),t.textDecorationThickness&&(e.textDecorationThickness=t.textDecorationThickness.value??null),t.textDecorationSkipInk!==void 0&&(e.textDecorationSkipInk=t.textDecorationSkipInk),t.textUnderlineOffset&&(e.textUnderlineOffset=t.textUnderlineOffset.value??null),t.textDecorationFillPaints){let n=Es(t.textDecorationFillPaints);n.length>0&&(e.textDecorationFills=n)}}function jc(e,t){let n=t.fontSize,r={};e.fontName&&(r.fontFamily=e.fontName.family,r.fontWeight=Zi(e.fontName.style),r.italic=e.fontName.style.toLowerCase().includes(`italic`)),e.fontSize!==void 0&&(r.fontSize=e.fontSize);let i=hs(e);i.length>0&&(r.fontVariations=i);let a=ps(e);if(a.length>0&&(r.fontFeatures=a),e.letterSpacing&&(r.letterSpacing=Ec(e.letterSpacing,e.fontSize??n)),e.lineHeight&&(r.lineHeight=Tc(e.lineHeight,e.fontSize??n)),Ac(r,e),e.fillPaints){let t=Es(e.fillPaints);t.length>0&&(r.fills=t)}return kc(r,e,t),r}function Mc(e,t){let n=new Map;for(let r of e){let e=r.styleID;if(e===void 0||e===0)continue;let i=jc(r,t);Object.keys(i).length>0&&n.set(e,i)}return n}function Nc(e,t){let n=[],r=e[0],i=0;for(let a=1;a<=e.length;a++)if(a===e.length||e[a]!==r){let o=t.get(r);o&&n.push({start:i,length:a-i,style:o}),a<e.length&&(r=e[a],i=a)}return n}function Pc(e,t,n,r){for(let e of n.values())e.hyperlink??=r;return n.set(0,{hyperlink:r}),Array.from({length:t},(t,n)=>e[n]??0)}function Fc(e){let t=e.textData,n=Oc(e.hyperlink),r=t?.characters.length??0,i=Mc(t?.styleOverrideTable??[],e),a=n?Pc(t?.characterStyleIDs??[],r,i,n):t?.characterStyleIDs??[];return a.length===0||i.size===0?[]:Nc(a,i)}function Ic(e){return e.lineType===`ORDERED_LIST`?`ORDERED`:e.lineType===`UNORDERED_LIST`?`UNORDERED`:`NONE`}function Lc(e,t=[]){if(!e)return[];let n=new Map(t.map(e=>[e.styleID,e])),r=e.map(e=>{let t={listType:Ic(e),indentation:e.indentationLevel??0};t.listType!==`NONE`&&(t=_t(t,t.indentation));let r=e.styleId?n.get(e.styleId):void 0;for(let e of pt){let n=r?.[e];n!==void 0&&(t=ht(t,e,n))}return t});return gt(r,r.length)}function Rc(e,t){let n=new DataView(e.buffer,e.byteOffset,e.byteLength),r=0,i=n.getUint32(r,!0);r+=4;let a=n.getUint32(r,!0);r+=4;let o=n.getUint32(r,!0);r+=4;let s=new Map;for(let e of t??[])s.set(e.styleID,e);let c=[];for(let e=0;e<i;e++){let e=n.getUint32(r,!0);r+=4;let t=n.getFloat32(r,!0);r+=4;let i=n.getFloat32(r,!0);r+=4;let a=s.get(e),o={x:t,y:i,handleMirroring:a?.handleMirroring??`NONE`};a?.strokeCap&&(o.strokeCap=a.strokeCap),a?.strokeJoin&&(o.strokeJoin=a.strokeJoin),a?.cornerRadius!==void 0&&(o.cornerRadius=a.cornerRadius),c.push(o)}let l=[];for(let e=0;e<a;e++){r+=4;let e=n.getUint32(r,!0);r+=4;let t=n.getFloat32(r,!0);r+=4;let i=n.getFloat32(r,!0);r+=4;let a=n.getUint32(r,!0);r+=4;let o=n.getFloat32(r,!0);r+=4;let s=n.getFloat32(r,!0);r+=4,l.push({start:e,end:a,tangentStart:{x:t,y:i},tangentEnd:{x:o,y:s}})}let u=[];for(let e=0;e<o;e++){let e=(n.getUint32(r,!0)&1)==1?`NONZERO`:`EVENODD`;r+=4;let t=n.getUint32(r,!0);r+=4;let i=[];for(let e=0;e<t;e++){let e=n.getUint32(r,!0);r+=4;let t=[];for(let i=0;i<e;i++)t.push(n.getUint32(r,!0)),r+=4;i.push(t)}u.push({windingRule:e,loops:i})}return{vertices:c,segments:l,regions:u}}function zc(e){return e===`ODD`||e===`EVENODD`?`EVENODD`:`NONZERO`}function Bc(e,t){let n=t?.regions??[];return e.length===n.length?e.map((e,t)=>({...e,windingRule:n[t].windingRule})):e.length===1&&n.length>0&&n.every(e=>e.windingRule===n[0].windingRule)?[{...e[0],windingRule:n[0].windingRule}]:e}function Vc(e,t){let n=e.vectorData;if(n?.vectorNetworkBlob===void 0)return null;let r=n.vectorNetworkBlob;if(r<0||r>=t.length)return null;try{let i=Rc(t[r],n.styleOverrideTable),a=n.normalizedSize,o=e.size?.x??0,s=e.size?.y??0,c=a&&a.x>0&&o>0?o/a.x:1,l=a&&a.y>0&&s>0?s/a.y:1;if(c!==1||l!==1){for(let e of i.vertices)e.x*=c,e.y*=l;for(let e of i.segments)e.tangentStart={x:e.tangentStart.x*c,y:e.tangentStart.y*l},e.tangentEnd={x:e.tangentEnd.x*c,y:e.tangentEnd.y*l}}return i}catch{return null}}function Hc(e){let t=new Map;for(let n of e??[])n.fillPaints&&n.fillPaints.length>0&&t.set(n.styleID,Es(n.fillPaints));return t}function Uc(e){let t=e.vectorData;return Hc(t?.styleOverrideTable)}function Wc(e,t,n){if(!e||e.length===0)return[];let r=[];for(let i of e){if(i.commandsBlob===void 0||i.commandsBlob<0||i.commandsBlob>=t.length)continue;let e=t[i.commandsBlob];if(e.length===0)continue;let a=i.styleID?n?.get(i.styleID):void 0;r.push({windingRule:zc(i.windingRule),commandsBlob:e,fills:a&&a.length>0?L(a):void 0})}return r}function Gc(e){let t={},n=e.variableModeBySetMap;for(let e of n?.entries??[]){let n=e.variableSetID?.guid,r=e.variableModeID;!n||!r||(t[G(n)]=G(r))}return t}let Kc={DOCUMENT:`DOCUMENT`,VARIABLE:`VARIABLE`,CANVAS:`CANVAS`,FRAME:`FRAME`,RECTANGLE:`RECTANGLE`,ROUNDED_RECTANGLE:`ROUNDED_RECTANGLE`,ELLIPSE:`ELLIPSE`,TEXT:`TEXT`,LINE:`LINE`,STAR:`STAR`,REGULAR_POLYGON:`POLYGON`,VECTOR:`VECTOR`,BOOLEAN_OPERATION:`BOOLEAN_OPERATION`,GROUP:`GROUP`,SECTION:`SECTION`,COMPONENT:`COMPONENT`,COMPONENT_SET:`COMPONENT_SET`,INSTANCE:`INSTANCE`,SYMBOL:`COMPONENT`,CONNECTOR:`CONNECTOR`,SHAPE_WITH_TEXT:`SHAPE_WITH_TEXT`,TEXT_PATH:`TEXT`};function qc(e){return e?Kc[e]??`RECTANGLE`:`RECTANGLE`}function Jc(e){if(e.type!==`BOOLEAN_OPERATION`)return;let t=e.booleanOperation;switch(t){case`SUBTRACT`:case`INTERSECT`:return t;case`EXCLUDE`:case`XOR`:return`EXCLUDE`;default:return`UNION`}}function Yc(e){switch(e){case`HORIZONTAL`:return`HORIZONTAL`;case`VERTICAL`:return`VERTICAL`;default:return`NONE`}}function Xc(e){switch(e){case`RESIZE_TO_FIT`:case`RESIZE_TO_FIT_WITH_IMPLICIT_SIZE`:return`HUG`;default:return`FIXED`}}function Zc(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`SPACE_BETWEEN`:case`SPACE_EVENLY`:return`SPACE_BETWEEN`;default:return`MIN`}}function Qc(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`BASELINE`:return`BASELINE`;default:return`MIN`}}function $c(e){switch(e){case`MIN`:return`MIN`;case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`BASELINE`:return`BASELINE`;default:return`AUTO`}}function el(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`SCALE`:return`SCALE`;default:return`MIN`}}function tl(e){return e?{startingAngle:e.startingAngle??0,endingAngle:e.endingAngle??2*Math.PI,innerRadius:e.innerRadius??0}:null}function nl(e){let t=e.size?.x??100,n=e.size?.y??100,r=e.transform?.m02??0,i=e.transform?.m12??0,a=0,o=!1;if(e.transform){let s=e.transform;s.m00*s.m11-s.m01*s.m10<0&&(o=!0),a=Math.atan2(s.m10,o?s.m11:s.m00)*(180/Math.PI);let c=a*Math.PI/180,l=Math.cos(c),u=Math.sin(c),d=t/2,f=n/2,p=o?-l:l,m=o?u:-u,h=u,g=l;r=s.m02-d+p*d+m*f,i=s.m12-f+h*d+g*f}return{x:r,y:i,width:t,height:n,rotation:a,flipX:o,flipY:!1}}function rl(e){return{cornerRadius:e.cornerRadius??0,topLeftRadius:e.rectangleTopLeftCornerRadius??e.cornerRadius??0,topRightRadius:e.rectangleTopRightCornerRadius??e.cornerRadius??0,bottomRightRadius:e.rectangleBottomRightCornerRadius??e.cornerRadius??0,bottomLeftRadius:e.rectangleBottomLeftCornerRadius??e.cornerRadius??0,independentCorners:e.rectangleCornerRadiiIndependent??!1,cornerSmoothing:e.cornerSmoothing??0}}function il(e){let t={};return e.count!==void 0&&(t.pointCount=ji(e.count,Qa.min,Qa.max)),e.starInnerScale!==void 0&&Number.isFinite(e.starInnerScale)&&(t.starInnerRadius=ji(e.starInnerScale,0,1)),t}function al(e){if(!e.lineHeight||wc(e.lineHeight))return null;let t=e.derivedTextData?.baselines?.[0]?.lineHeight;return e.lineHeight.units===`PIXELS`&&t!==void 0&&Number.isFinite(t)&&t<e.lineHeight.value?t:Tc(e.lineHeight,e.fontSize)}function ol(e){return{textDecoration:Sc(e.textDecoration),textDecorationStyle:e.textDecorationStyle??`SOLID`,textDecorationThickness:e.textDecorationThickness?.value??null,textDecorationFills:Es(e.textDecorationFillPaints),textDecorationSkipInk:e.textDecorationSkipInk??!0,textUnderlineOffset:e.textUnderlineOffset?.value??null}}function sl(e){return{textParagraphs:Lc(e.textData?.lines,e.textData?.styleOverrideTable),listSpacing:e.listSpacing??0,paragraphSpacing:e.paragraphSpacing??0,paragraphIndent:e.paragraphIndent??0,hangingList:e.hangingList??!1}}function cl(e,t){return{text:e.textData?.characters??``,fontSize:e.fontSize??14,fontFamily:e.fontName?.family??`Inter`,fontWeight:Zi(e.fontName?.style??``),italic:e.fontName?.style.toLowerCase().includes(`italic`)??!1,textAlignHorizontal:e.textAlignHorizontal??`LEFT`,textAlignVertical:e.textAlignVertical??`TOP`,textAutoResize:e.textAutoResize??`NONE`,textCase:e.textCase??`ORIGINAL`,...ol(e),leadingTrim:e.leadingTrim??`NONE`,lineHeight:al(e),letterSpacing:Ec(e.letterSpacing,e.fontSize),maxLines:e.maxLines??null,...sl(e),styleRuns:Fc(e),fontVariations:hs(e),fontFeatures:ps(e),textTruncation:e.textTruncation===`ENDING`?`ENDING`:`DISABLED`,textDirection:oc(e,Ei.textDirection)??`AUTO`,...ll(e,t)}}function ll(e,t){let n=e.derivedTextData?.layoutSize;return{derivedLayout:n?{width:n.x,height:n.y}:null,derivedTextGlyphs:to(e.derivedTextData,t,e.textData?.characters??``)}}function ul(e){let t=e.stackPadding??0;return{paddingTop:e.stackVerticalPadding??t,paddingBottom:e.stackPaddingBottom??t,paddingLeft:e.stackHorizontalPadding??t,paddingRight:e.stackPaddingRight??t}}function dl(e,t,n,r){let i=n===`HUG`||r===`HUG`,a=(e.fillPaints?.some(e=>e.visible!==!1)??!1)||(e.strokePaints?.some(e=>e.visible!==!1)??!1);if(!(t===`NONE`||!i||!a))return{x:e.transform?.m02??0,y:e.transform?.m12??0,width:e.size?.x??100,height:e.size?.y??100}}function fl(e,t){let n=e?.value?.[t];return typeof n==`number`&&Number.isFinite(n)&&n>0?n:null}function pl(e,t){let n=e?.value?.[t];return typeof n==`number`&&Number.isFinite(n)&&n>=0?n:null}function ml(e){let t=e.targetAspectRatio?.value;return!t||!Number.isFinite(t.x)||!Number.isFinite(t.y)?null:{x:t.x,y:t.y}}function hl(e){let t=Yc(e.stackMode),n=e.stackPrimarySizing===void 0&&(t===`HORIZONTAL`||t===`VERTICAL`)?`HUG`:Xc(e.stackPrimarySizing),r=Xc(e.stackCounterSizing),i=dl(e,t,n,r);return{layoutMode:t,itemSpacing:e.stackSpacing??0,...ul(e),primaryAxisSizing:n,counterAxisSizing:r,primaryAxisAlign:Zc(e.stackPrimaryAlignItems??e.stackJustify),counterAxisAlign:Qc(e.stackCounterAlignItems??e.stackCounterAlign),layoutWrap:e.stackWrap===`WRAP`?`WRAP`:`NO_WRAP`,counterAxisSpacing:e.stackCounterSpacing??0,layoutPositioning:e.stackPositioning===`ABSOLUTE`?`ABSOLUTE`:`AUTO`,layoutGrow:e.stackChildPrimaryGrow??0,layoutAlignSelf:$c(e.stackChildAlignSelf),counterAxisAlignContent:e.stackCounterAlignContent===`SPACE_BETWEEN`?`SPACE_BETWEEN`:`AUTO`,itemReverseZIndex:e.stackReverseZIndex??!1,strokesIncludedInLayout:e.strokesIncludedInLayout??!1,layoutDirection:oc(e,Ei.layoutDirection)??`AUTO`,...i?{derivedLayout:i}:{}}}function gl(e){return e.strokeCap??`NONE`}function _l(e,t){return e.strokeJoin??t?.vertices.find(e=>e.strokeJoin)?.strokeJoin??`MITER`}function vl(e){return e===`FILL`||e===`TEXT`||e===`EFFECT`||e===`GRID`?e:null}function yl(e){return Array.isArray(e)?structuredClone(e):[]}function bl(e,t){if(e.type!==`TEXT_PATH`)return null;let n=e.vectorData,r=n?.vectorNetworkBlob,i=n?.normalizedSize;if(typeof r!=`number`||!i||i.x<=0||i.y<=0)return null;let a=t[r],o=e.textPathStart;try{return{network:Rc(a,n.styleOverrideTable),normalizedSize:{x:i.x,y:i.y},tValue:o?.tValue??0,forward:o?.forward??!0}}catch{return null}}function xl(e,t){let n=Vc(e,t),r=gl(e),i=_l(e,n);return{vectorNetwork:n,fillGeometry:Bc(Wc(e.fillGeometry,t,Uc(e)),n),strokeGeometry:Wc(e.strokeGeometry,t),arcData:tl(e.arcData),strokeCap:r,strokeJoin:i,dashPattern:e.dashPattern??[],borderTopWeight:e.borderTopWeight??0,borderRightWeight:e.borderRightWeight??0,borderBottomWeight:e.borderBottomWeight??0,borderLeftWeight:e.borderLeftWeight??0,independentStrokeWeights:e.borderStrokeWeightsIndependent??!1,strokeMiterLimit:e.miterLimit??4}}function Sl(e){let t=qc(e.type);return t===`FRAME`&&Rl(e)||oc(e,Ei.nodeType)===`COMPONENT_SET`?`COMPONENT_SET`:t===`FRAME`&&e.resizeToFit===!0&&(e.stackMode===void 0||e.stackMode===`NONE`)?`GROUP`:t}function Cl(e,t,n=`source`){let r=Sl(e),i=xl(e,t),a=bl(e,t),o={nodeType:r,name:e.name??r,source:n===`source`?Vl(e,t):Bl(e),...nl(e),opacity:e.opacity??1,visible:e.visible??!0,locked:e.locked??!1,internalOnly:e.internalOnly===!0||vl(e.styleType)!==null,blendMode:e.blendMode??`PASS_THROUGH`,booleanOperation:Jc(e),fills:Es(e.fillPaints),strokes:Os(e.strokePaints,e.strokeWeight,e.strokeAlign,i.strokeCap,i.strokeJoin,e.dashPattern??[]),strokeWeight:e.strokeWeight??1,strokeAlign:Ds(e.strokeAlign),effects:ks(e.effects),layoutGrids:yl(e.layoutGrids),guides:Za(e.guides),fillStyleId:xc(e.styleIdForFill),strokeStyleId:xc(e.styleIdForStrokeFill),textStyleId:xc(e.styleIdForText),effectStyleId:xc(e.styleIdForEffect),gridStyleId:xc(e.styleIdForGrid),sharedStyleType:vl(e.styleType),...rl(e),...il(e),...cl(e,t),horizontalConstraint:el(e.horizontalConstraint),verticalConstraint:el(e.verticalConstraint),...hl(e),...i,minWidth:fl(e.minSize,`x`),maxWidth:pl(e.maxSize,`x`),minHeight:fl(e.minSize,`y`),maxHeight:pl(e.maxSize,`y`),targetAspectRatio:ml(e),isMask:e.mask??!1,maskType:e.maskType??`ALPHA`,maskIsOutline:e.maskIsOutline??!1,expanded:!0,autoRename:e.autoRename??!0,boundVariables:cc(e),variableAssignmentScales:Qs(),variableBindingScales:Zs(e),variableModes:Gc(e),exportSettings:dc(e),pluginData:fc(e),librarySource:pc(e),pluginRelaunchData:mc(e),clipsContent:e.frameMaskDisabled===!1&&e.resizeToFit!==!0,componentId:Kl(e),componentPropertyDefinitions:r===`INSTANCE`?[]:Dl(e),componentPropertyReferences:Ol(e),componentPropertyAssignments:Al(e),componentPropertyValues:Ml(e),...Ll(e)};Ns(o,a);let s=sc(e);return s&&o.textPathBox&&(o.textPathBox={x:s.x+o.textPathBox.x,y:s.y+o.textPathBox.y,width:s.width,height:s.height}),o}let wl={VARIANT:`VARIANT`,TEXT:`TEXT`,BOOL:`BOOLEAN`,BOOLEAN:`BOOLEAN`,INSTANCE_SWAP:`INSTANCE_SWAP`,SLOT:`SLOT`};function Tl(e){if(!e||typeof e!=`object`)return``;let t=e;return typeof t.boolValue==`boolean`?String(t.boolValue):typeof t.textValue==`string`?t.textValue:t.textValue&&typeof t.textValue==`object`?t.textValue.characters??``:t.guidValue?G(t.guidValue):``}function El(e){let t={allowPreferredValuesOnly:e.allowPreferredValuesOnly??!1,displayEmptyByDefault:e.displayByDefault??!1,stretchChildOnInsert:e.stretchChildOnInsert??!1};return e.minChildren!==void 0&&(t.minChildren=e.minChildren),e.maxChildren!==void 0&&(t.maxChildren=e.maxChildren),t}function Dl(e){let t=e.componentPropDefs;if(!t?.length)return[];let n=[];for(let e of t){if(!e.id||!e.name)continue;let t=wl[e.type??``]??`VARIANT`,r={id:G(e.id),name:e.name,type:t,defaultValue:Tl(e.initialValue),variantOptions:t===`VARIANT`?e.preferredValues?.stringValues:void 0,preferredValues:t===`INSTANCE_SWAP`||t===`SLOT`?e.preferredValues?.instanceSwapValues?.map(e=>e.key).filter(e=>e!==void 0):void 0};e.description&&(r.description=e.description),t===`SLOT`&&e.slotPropConfig&&(r.slotSettings=El(e.slotPropConfig)),n.push(r)}return n}function Ol(e){let t=e.componentPropRefs;if(!t?.length)return[];let n={0:`VISIBLE`,1:`TEXT`,2:`INSTANCE_SWAP`,4:`SLOT_CONTENT`,VISIBLE:`VISIBLE`,TEXT_DATA:`TEXT`,OVERRIDDEN_SYMBOL_ID:`INSTANCE_SWAP`,SLOT_CONTENT_ID:`SLOT_CONTENT`};return t.flatMap(e=>{let t=n[String(e.componentPropNodeField)];return e.defID&&t&&!e.isDeleted?[{propertyId:G(e.defID),field:t}]:[]})}function kl(e){if(e.value&&(e.value.boolValue!==void 0||e.value.textValue!==void 0||e.value.guidValue!==void 0))return Tl(e.value);let t=e.varValue?.value;return t?.symbolIdValue?.guid?G(t.symbolIdValue.guid):t?.boolValue===void 0?t?.textValue===void 0?t?.textDataValue?.characters??``:t.textValue:String(t.boolValue)}function Al(e){let t=e.componentPropAssignments;return t?.length?Object.fromEntries(t.flatMap(e=>e.defID?[[G(e.defID),kl(e)]]:[])):{}}function jl(e){let t=e.variantPropSpecs;return t?.length?t.filter(e=>!!e.propDefId).map(e=>({propDefId:G(e.propDefId),value:e.value??``})):[]}function Ml(e){let t=jl(e),n=new Map(Dl(e).map(e=>[e.id,e.name]));if(t.length>0&&n.size>0){let e={};for(let r of t)e[n.get(r.propDefId)??r.propDefId]=r.value;return e}let r=e.name;return r?.includes(`=`)?$a(r):{}}function Nl(e){if(!e||typeof e!=`object`)return null;let t=e;if(typeof t.sessionID!=`number`||typeof t.localID!=`number`)return null;let n={sessionID:t.sessionID,localID:t.localID};return Wa(n)?null:G(n)}function Pl(e){return typeof e==`string`?e:null}function Fl(e){return typeof e==`string`?e:``}function Il(e){return typeof e==`boolean`&&e}function Ll(e){let t=e.symbolLinks??[];return{componentKey:Pl(e.componentKey),sourceLibraryKey:Pl(e.sourceLibraryKey),publishId:Nl(e.publishID),overrideKey:Nl(e.overrideKey),sharedSymbolVersion:Pl(e.sharedSymbolVersion),publishedVersion:Pl(e.publishedVersion),isPublishable:Il(e.isPublishable),isSymbolPublishable:Il(e.isSymbolPublishable),isExposedInstance:Il(e.propsAreBubbled),symbolDescription:Fl(e.symbolDescription),symbolLinks:t.filter(e=>typeof e.uri==`string`).map(e=>({uri:e.uri,displayName:e.displayName,displayText:e.displayText})),variantPropSpecs:jl(e)}}function Rl(e){let t=e.componentPropDefs;return t?.length?t.some(e=>e.type===`VARIANT`):!1}function zl(e){return{stackMode:e.stackMode,stackSpacing:e.stackSpacing,stackPadding:e.stackPadding,stackPaddingRight:e.stackPaddingRight,stackPaddingBottom:e.stackPaddingBottom,stackCounterAlign:e.stackCounterAlign,stackJustify:e.stackJustify,stackCounterAlignItems:e.stackCounterAlignItems,stackPrimaryAlignItems:e.stackPrimaryAlignItems,stackPrimarySizing:e.stackPrimarySizing,stackCounterSizing:e.stackCounterSizing,stackVerticalPadding:e.stackVerticalPadding,stackHorizontalPadding:e.stackHorizontalPadding,stackWrap:e.stackWrap,stackPositioning:e.stackPositioning,stackChildPrimaryGrow:e.stackChildPrimaryGrow,stackChildAlignSelf:e.stackChildAlignSelf,stackCounterSpacing:e.stackCounterSpacing,bordersTakeSpace:e.bordersTakeSpace,stackReverseZIndex:e.stackReverseZIndex}}function Bl(e){let t=h();return t.fig.layout=zl(e),t}function Vl(e,t){return{format:`fig`,id:e.guid?G(e.guid):null,orderKey:e.parentIndex?.position??null,editedFields:[],fig:{...Wl(e,t),...Gl(e,t),layout:zl(e)}}}function Hl(e,t){if(e instanceof Uint8Array)return e;if(Array.isArray(e))return e.map(e=>Hl(e,t));if(!e||typeof e!=`object`)return e;let n={};for(let[r,i]of Object.entries(e))if((r===`commandsBlob`||r===`vectorNetworkBlob`)&&typeof i==`number`){let e=t[i];e==null?n[r]=i:n[r]={__openPencilFigmaBlob:e instanceof Uint8Array?e:new Uint8Array(Object.values(e))}}else n[r]=Hl(i,t);return n}let Ul=`styleIdForFill.styleIdForStrokeFill.styleIdForText.styleIdForEffect.styleIdForGrid.styleType.componentPropAssignments.backgroundPaints.layoutGrids.exportSettings.componentPropDefs.componentPropRefs.variantPropSpecs.stateGroupPropertyValueOrders.isStateGroup.version.sourceLibraryKey.userFacingVersion.description.key.sortPosition.detachedSymbolId.documentColorProfile.variableConsumptionMap.variableModeBySetMap.parameterConsumptionMap.editInfo.backgroundColor.blendMode.pageType.isPageDivider.guides.handoffStatusMap.annotationCategories.miterLimit.mask.maskType.maskIsOutline.strokeWeight.strokeJoin.borderStrokeWeightsIndependent.borderTopWeight.borderRightWeight.borderBottomWeight.borderLeftWeight.minSize.maxSize.gridRows.gridColumns.gridRowAnchor.gridColumnAnchor.gridColumnsSizing.gridRowsSizing.gridChildVerticalAlign.gridChildHorizontalAlign.textAutoResize.textAlignHorizontal.textAlignVertical.textData.lineHeight.fontName.fontSize.letterSpacing.textTracking.fontVersion.textUserLayoutVersion.textExplicitLayoutVersion.fontVariations.fontVariantCommonLigatures.fontVariantContextualLigatures.toggledOnOTFeatures.toggledOffOTFeatures.leadingTrim.textDecorationFillPaints.textUnderlineOffset.textDecorationThickness.textDecorationStyle.semanticWeight.semanticItalic.maxLines.textPathStart.derivedTextData.fillPaints.strokePaints.effects.sectionStatusInfo.prototypeStartNodeID.prototypeInteractions.transitionInfo.codeSyntax.lockMode.slideThemeMap.isSoftDeleted.brushType.scatterStrokeSettings.vectorOperationVersion.vectorData.fillGeometry.strokeGeometry`.split(`.`);function Wl(e,t){let n={};for(let r of Ul){let i=e[r];i!==void 0&&(n[r]=Hl(i,t))}return{rawSize:e.size?{...e.size}:null,rawTransform:e.transform?{...e.transform}:null,rawNodeFields:n}}function Gl(e,t){let n=e.symbolData;return{symbolOverrides:Hl(n?.symbolOverrides??[],t),componentPropAssignments:Hl(e.componentPropAssignments??[],t),derivedSymbolData:Hl(e.derivedSymbolData??[],t),derivedSymbolDataLayoutVersion:typeof e.derivedSymbolDataLayoutVersion==`number`?e.derivedSymbolDataLayoutVersion:null,uniformScaleFactor:typeof n?.uniformScaleFactor==`number`?n.uniformScaleFactor:null}}function Kl(e){let t=e.symbolData;return t?.symbolID?G(t.symbolID):``}function ql(e,t){if(e!==null&&t!==null&&e>=t)return null;let n=e??``,r=t??``,i=0;for(;i<n.length&&i<r.length&&n[i]===r[i];)i++;let a=i<n.length?n.charCodeAt(i):32,o=t!==null&&i<t.length?t.charCodeAt(i):127;if(o-a>1)return n.slice(0,i)+String.fromCharCode(Math.floor((a+o)/2));if(i<n.length)return n.slice(0,i+1)+(ql(n.slice(i+1),null)??`O`);let s=t?.slice(i+1)??``;return!t||s===``?null:t.slice(0,i+1)+(ql(null,s)??``)}function Jl(e,t,n){for(let r=ql(e,t);r!==null;r=ql(r,t)){if(r+n<t)return r+n;if(!t.startsWith(r))return null}return null}function Yl(e,t,n=``){let r=ql(e,t);return r===null?(ql(e,null)??`O`)+n:n?t===null?r+n:Jl(e,t,n)??r:r}let Xl={guid:{...Ua}},Zl={name:{scene:[`name`],kind:`scalar`},opacity:{scene:[`opacity`],kind:`scalar`},fontSize:{scene:[`fontSize`],kind:`scalar`,length:!0},visible:{scene:[`visible`],kind:`visible`},textData:{scene:[`text`,`styleRuns`,`textParagraphs`],kind:`text`},styleIdForText:{scene:[`textStyleId`],kind:`text-style`},fillPaints:{scene:[`fills`],kind:`paint`},strokePaints:{scene:[`strokes`],kind:`paint`},size:{scene:[`width`,`height`],kind:`size`,length:!0},stackSpacing:{scene:[`itemSpacing`],kind:`layout-distance`,length:!0},stackCounterSpacing:{scene:[`counterAxisSpacing`],kind:`layout-distance`,length:!0},stackHorizontalPadding:{scene:[`paddingLeft`],kind:`layout-distance`,length:!0},stackVerticalPadding:{scene:[`paddingTop`],kind:`layout-distance`,length:!0},stackPaddingRight:{scene:[`paddingRight`],kind:`layout-distance`,length:!0},stackPaddingBottom:{scene:[`paddingBottom`],kind:`layout-distance`,length:!0},textAutoResize:{scene:[`textAutoResize`],kind:`layout-mode`},stackChildPrimaryGrow:{scene:[`layoutGrow`],kind:`layout-mode`},stackPrimarySizing:{scene:[`primaryAxisSizing`],kind:`layout-mode`},stackCounterSizing:{scene:[`counterAxisSizing`],kind:`layout-mode`},stackChildAlignSelf:{scene:[`layoutAlignSelf`],kind:`layout-mode`},cornerRadius:{scene:[`cornerRadius`],kind:`node`,length:!0,absent:0},rectangleTopLeftCornerRadius:{scene:[`topLeftRadius`],kind:`node`,length:!0,absent:0},rectangleTopRightCornerRadius:{scene:[`topRightRadius`],kind:`node`,length:!0,absent:0},rectangleBottomRightCornerRadius:{scene:[`bottomRightRadius`],kind:`node`,length:!0,absent:0},rectangleBottomLeftCornerRadius:{scene:[`bottomLeftRadius`],kind:`node`,length:!0,absent:0},rectangleCornerRadiiIndependent:{scene:[`independentCorners`],kind:`node`,absent:!1},cornerSmoothing:{scene:[`cornerSmoothing`],kind:`node`,absent:0},strokeWeight:{scene:[`strokeWeight`],kind:`node`,length:!0},strokeAlign:{scene:[`strokeAlign`],kind:`node`,absent:`CENTER`},borderTopWeight:{scene:[`borderTopWeight`],kind:`node`,length:!0},borderRightWeight:{scene:[`borderRightWeight`],kind:`node`,length:!0},borderBottomWeight:{scene:[`borderBottomWeight`],kind:`node`,length:!0},borderLeftWeight:{scene:[`borderLeftWeight`],kind:`node`,length:!0},borderStrokeWeightsIndependent:{scene:[`independentStrokeWeights`],kind:`node`,absent:!1},strokeCap:{scene:[`strokeCap`],kind:`node`,absent:`NONE`},strokeJoin:{scene:[`strokeJoin`],kind:`node`,absent:`MITER`},miterLimit:{scene:[`strokeMiterLimit`],kind:`node`},dashPattern:{scene:[`dashPattern`],kind:`node`,length:!0,absent:[]},blendMode:{scene:[`blendMode`],kind:`node`,absent:`PASS_THROUGH`},effects:{scene:[`effects`],kind:`node`,absent:[]},locked:{scene:[`locked`],kind:`node`,absent:!1},layoutGrids:{scene:[`layoutGrids`],kind:`node`,absent:[]},styleIdForFill:{scene:[`fillStyleId`],kind:`node`,absent:Xl},styleIdForStrokeFill:{scene:[`strokeStyleId`],kind:`node`,absent:Xl},styleIdForEffect:{scene:[`effectStyleId`],kind:`node`,absent:Xl},stackPrimaryAlignItems:{scene:[`primaryAxisAlign`],kind:`node`},stackCounterAlignItems:{scene:[`counterAxisAlign`],kind:`node`},stackPositioning:{scene:[`layoutPositioning`],kind:`node`},fontName:{scene:[`fontFamily`,`fontWeight`,`italic`],kind:`node`},fontVariations:{scene:[`fontVariations`],kind:`node`,absent:[]},lineHeight:{scene:[`lineHeight`],kind:`node`,absent:{value:100,units:`PERCENT`}},letterSpacing:{scene:[`letterSpacing`],kind:`node`},paragraphSpacing:{scene:[`paragraphSpacing`],kind:`node`,length:!0,absent:0},textCase:{scene:[`textCase`],kind:`node`,absent:`ORIGINAL`},textDecoration:{scene:[`textDecoration`],kind:`node`,absent:`NONE`},textAlignHorizontal:{scene:[`textAlignHorizontal`],kind:`node`},textAlignVertical:{scene:[`textAlignVertical`],kind:`node`},textTruncation:{scene:[`textTruncation`],kind:`node`,absent:`DISABLED`},maxLines:{scene:[`maxLines`],kind:`node`}},Ql=Object.entries(Zl);new Map(Object.entries(e(Ql.flatMap(([e,t])=>t.scene.map(n=>({scene:n,raw:e,field:t}))),e=>e.scene)).map(([e,t])=>[e,t.map(({raw:e,field:t})=>({raw:e,field:t}))]));function $l(e){return Ql.flatMap(([t,n])=>n.kind===e?[t]:[])}$l(`scalar`);let eu=Object.fromEntries($l(`layout-distance`).map(e=>[Zl[e].scene[0],e])),tu=[`componentKey`,`sourceLibraryKey`,`publishID`,`publishedVersion`,`sharedSymbolVersion`,`isSymbolPublishable`,`variantPropSpecs`,`componentPropDefs`,`overrideKey`];function nu(e){return e.symbolData}function ru(e){return nu(e)?.symbolOverrides??[]}function iu(e){return e.derivedSymbolData??[]}function au(e){return nu(e)?.uniformScaleFactor??1}function ou(e,t,n){t(e,n);for(let n of ru(e))ou(n,t,n)}function su(e){let t=e?.slotContentIdValue?.guid;if(t)return Wa(t)?void 0:t}var J=Uint8Array,cu=Uint16Array,lu=Int32Array,uu=new J([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),du=new J([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),fu=new J([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),pu=function(e,t){for(var n=new cu(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new lu(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},mu=pu(uu,2),hu=mu.b,gu=mu.r;hu[28]=258,gu[258]=28;for(var _u=pu(du,0),vu=_u.b,yu=_u.r,bu=new cu(32768),Y=0;Y<32768;++Y){var xu=(Y&43690)>>1|(Y&21845)<<1;xu=(xu&52428)>>2|(xu&13107)<<2,xu=(xu&61680)>>4|(xu&3855)<<4,bu[Y]=((xu&65280)>>8|(xu&255)<<8)>>1}for(var Su=(function(e,t,n){for(var r=e.length,i=0,a=new cu(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new cu(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new cu(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[bu[d]>>c]=l}else for(s=new cu(r),i=0;i<r;++i)e[i]&&(s[i]=bu[o[e[i]-1]++]>>15-e[i]);return s}),Cu=new J(288),Y=0;Y<144;++Y)Cu[Y]=8;for(var Y=144;Y<256;++Y)Cu[Y]=9;for(var Y=256;Y<280;++Y)Cu[Y]=7;for(var Y=280;Y<288;++Y)Cu[Y]=8;for(var wu=new J(32),Y=0;Y<32;++Y)wu[Y]=5;var Tu=Su(Cu,9,0),Eu=Su(Cu,9,1),Du=Su(wu,5,0),Ou=Su(wu,5,1),ku=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},Au=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},ju=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},Mu=function(e){return(e+7)/8|0},Nu=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new J(e.subarray(t,n))},Pu=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],X=function(e,t,n){var r=Error(t||Pu[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,X),!n)throw r;return r},Fu=function(e,t,n,r){var i=e.length,a=r?r.length:0;if(!i||t.f&&!t.l)return n||new J(0);var o=!n,s=o||t.i!=2,c=t.i;o&&(n=new J(i*3));var l=function(e){var t=n.length;if(e>t){var r=new J(Math.max(t*2,e));r.set(n),n=r}},u=t.f||0,d=t.p||0,f=t.b||0,p=t.l,m=t.d,h=t.m,g=t.n,_=i*8;do{if(!p){u=Au(e,d,1);var v=Au(e,d+1,3);if(d+=3,!v){var y=Mu(d)+4,b=e[y-4]|e[y-3]<<8,x=y+b;if(x>i){c&&X(0);break}s&&l(f+b),n.set(e.subarray(y,x),f),t.b=f+=b,t.p=d=x*8,t.f=u;continue}else if(v==1)p=Eu,m=Ou,h=9,g=5;else if(v==2){var S=Au(e,d,31)+257,C=Au(e,d+10,15)+4,w=S+Au(e,d+5,31)+1;d+=14;for(var T=new J(w),E=new J(19),D=0;D<C;++D)E[fu[D]]=Au(e,d+D*3,7);d+=C*3;for(var O=ku(E),k=(1<<O)-1,A=Su(E,O,1),D=0;D<w;){var j=A[Au(e,d,k)];d+=j&15;var y=j>>4;if(y<16)T[D++]=y;else{var M=0,N=0;for(y==16?(N=3+Au(e,d,3),d+=2,M=T[D-1]):y==17?(N=3+Au(e,d,7),d+=3):y==18&&(N=11+Au(e,d,127),d+=7);N--;)T[D++]=M}}var P=T.subarray(0,S),F=T.subarray(S);h=ku(P),g=ku(F),p=Su(P,h,1),m=Su(F,g,1)}else X(1);if(d>_){c&&X(0);break}}s&&l(f+131072);for(var ee=(1<<h)-1,te=(1<<g)-1,ne=d;;ne=d){var M=p[ju(e,d)&ee],re=M>>4;if(d+=M&15,d>_){c&&X(0);break}if(M||X(2),re<256)n[f++]=re;else if(re==256){ne=d,p=null;break}else{var I=re-254;if(re>264){var D=re-257,L=uu[D];I=Au(e,d,(1<<L)-1)+hu[D],d+=L}var ie=m[ju(e,d)&te],ae=ie>>4;ie||X(3),d+=ie&15;var F=vu[ae];if(ae>3){var L=du[ae];F+=ju(e,d)&(1<<L)-1,d+=L}if(d>_){c&&X(0);break}s&&l(f+131072);var oe=f+I;if(f<F){var se=a-F,ce=Math.min(F,oe);for(se+f<0&&X(3);f<ce;++f)n[f]=r[se+f]}for(;f<oe;++f)n[f]=n[f-F]}}t.l=p,t.p=ne,t.b=f,t.f=u,p&&(u=1,t.m=h,t.d=m,t.n=g)}while(!u);return f!=n.length&&o?Nu(n,0,f):n.subarray(0,f)},Iu=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8},Lu=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8,e[r+2]|=n>>16},Ru=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]});var i=n.length,a=n.slice();if(!i)return{t:Gu,l:0};if(i==1){var o=new J(n[0].s+1);return o[n[0].s]=1,{t:o,l:1}}n.sort(function(e,t){return e.f-t.f}),n.push({s:-1,f:25001});var s=n[0],c=n[1],l=0,u=1,d=2;for(n[0]={s:-1,f:s.f+c.f,l:s,r:c};u!=i-1;)s=n[n[l].f<n[d].f?l++:d++],c=n[l!=u&&n[l].f<n[d].f?l++:d++],n[u++]={s:-1,f:s.f+c.f,l:s,r:c};for(var f=a[0].s,r=1;r<i;++r)a[r].s>f&&(f=a[r].s);var p=new cu(f+1),m=zu(n[u-1],p,0);if(m>t){var r=0,h=0,g=m-t,_=1<<g;for(a.sort(function(e,t){return p[t.s]-p[e.s]||e.f-t.f});r<i;++r){var v=a[r].s;if(p[v]>t)h+=_-(1<<m-p[v]),p[v]=t;else break}for(h>>=g;h>0;){var y=a[r].s;p[y]<t?h-=1<<t-p[y]++-1:++r}for(;r>=0&&h;--r){var b=a[r].s;p[b]==t&&(--p[b],++h)}m=t}return{t:new J(p),l:m}},zu=function(e,t,n){return e.s==-1?Math.max(zu(e.l,t,n+1),zu(e.r,t,n+1)):t[e.s]=n},Bu=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new cu(++t),r=0,i=e[0],a=1,o=function(e){n[r++]=e},s=1;s<=t;++s)if(e[s]==i&&s!=t)++a;else{if(!i&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(i),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(i);a=1,i=e[s]}return{c:n.subarray(0,r),n:t}},Vu=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r];return n},Hu=function(e,t,n){var r=n.length,i=Mu(t+2);e[i]=r&255,e[i+1]=r>>8,e[i+2]=e[i]^255,e[i+3]=e[i+1]^255;for(var a=0;a<r;++a)e[i+a+4]=n[a];return(i+4+r)*8},Uu=function(e,t,n,r,i,a,o,s,c,l,u){Iu(t,u++,n),++i[256];for(var d=Ru(i,15),f=d.t,p=d.l,m=Ru(a,15),h=m.t,g=m.l,_=Bu(f),v=_.c,y=_.n,b=Bu(h),x=b.c,S=b.n,C=new cu(19),w=0;w<v.length;++w)++C[v[w]&31];for(var w=0;w<x.length;++w)++C[x[w]&31];for(var T=Ru(C,7),E=T.t,D=T.l,O=19;O>4&&!E[fu[O-1]];--O);var k=l+5<<3,A=Vu(i,Cu)+Vu(a,wu)+o,j=Vu(i,f)+Vu(a,h)+o+14+3*O+Vu(C,E)+2*C[16]+3*C[17]+7*C[18];if(c>=0&&k<=A&&k<=j)return Hu(t,u,e.subarray(c,c+l));var M,N,P,F;if(Iu(t,u,1+(j<A)),u+=2,j<A){M=Su(f,p,0),N=f,P=Su(h,g,0),F=h;var ee=Su(E,D,0);Iu(t,u,y-257),Iu(t,u+5,S-1),Iu(t,u+10,O-4),u+=14;for(var w=0;w<O;++w)Iu(t,u+3*w,E[fu[w]]);u+=3*O;for(var te=[v,x],ne=0;ne<2;++ne)for(var re=te[ne],w=0;w<re.length;++w){var I=re[w]&31;Iu(t,u,ee[I]),u+=E[I],I>15&&(Iu(t,u,re[w]>>5&127),u+=re[w]>>12)}}else M=Tu,N=Cu,P=Du,F=wu;for(var w=0;w<s;++w){var L=r[w];if(L>255){var I=L>>18&31;Lu(t,u,M[I+257]),u+=N[I+257],I>7&&(Iu(t,u,L>>23&31),u+=uu[I]);var ie=L&31;Lu(t,u,P[ie]),u+=F[ie],ie>3&&(Lu(t,u,L>>5&8191),u+=du[ie])}else Lu(t,u,M[L]),u+=N[L]}return Lu(t,u,M[256]),u+N[256]},Wu=new lu([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Gu=new J(0),Ku=function(e,t,n,r,i,a){var o=a.z||e.length,s=new J(r+o+5*(1+Math.ceil(o/7e3))+i),c=s.subarray(r,s.length-i),l=a.l,u=(a.r||0)&7;if(t){u&&(c[0]=a.r>>3);for(var d=Wu[t-1],f=d>>13,p=d&8191,m=(1<<n)-1,h=a.p||new cu(32768),g=a.h||new cu(m+1),_=Math.ceil(n/3),v=2*_,y=function(t){return(e[t]^e[t+1]<<_^e[t+2]<<v)&m},b=new lu(25e3),x=new cu(288),S=new cu(32),C=0,w=0,T=a.i||0,E=0,D=a.w||0,O=0;T+2<o;++T){var k=y(T),A=T&32767,j=g[k];if(h[A]=j,g[k]=A,D<=T){var M=o-T;if((C>7e3||E>24576)&&(M>423||!l)){u=Uu(e,c,0,b,x,S,w,E,O,T-O,u),E=C=w=0,O=T;for(var N=0;N<286;++N)x[N]=0;for(var N=0;N<30;++N)S[N]=0}var P=2,F=0,ee=p,te=A-j&32767;if(M>2&&k==y(T-te))for(var ne=Math.min(f,M)-1,re=Math.min(32767,T),I=Math.min(258,M);te<=re&&--ee&&A!=j;){if(e[T+P]==e[T+P-te]){for(var L=0;L<I&&e[T+L]==e[T+L-te];++L);if(L>P){if(P=L,F=te,L>ne)break;for(var ie=Math.min(te,L-2),ae=0,N=0;N<ie;++N){var oe=T-te+N&32767,se=oe-h[oe]&32767;se>ae&&(ae=se,j=oe)}}}A=j,j=h[A],te+=A-j&32767}if(F){b[E++]=268435456|gu[P]<<18|yu[F];var ce=gu[P]&31,le=yu[F]&31;w+=uu[ce]+du[le],++x[257+ce],++S[le],D=T+P,++C}else b[E++]=e[T],++x[e[T]]}}for(T=Math.max(T,D);T<o;++T)b[E++]=e[T],++x[e[T]];u=Uu(e,c,l,b,x,S,w,E,O,T-O,u),l||(a.r=u&7|c[u/8|0]<<3,u-=7,a.h=g,a.p=h,a.i=T,a.w=D)}else{for(var T=a.w||0;T<o+l;T+=65535){var ue=T+65535;ue>=o&&(c[u/8|0]=l,ue=o),u=Hu(c,u+1,e.subarray(T,ue))}a.i=o}return Nu(s,0,r+Mu(u)+i)},qu=(function(){for(var e=new Int32Array(256),t=0;t<256;++t){for(var n=t,r=9;--r;)n=(n&1&&-306674912)^n>>>1;e[t]=n}return e})(),Ju=function(){var e=-1;return{p:function(t){for(var n=e,r=0;r<t.length;++r)n=qu[n&255^t[r]]^n>>>8;e=n},d:function(){return~e}}},Yu=function(e,t,n,r,i){if(!i&&(i={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),o=new J(a.length+e.length);o.set(a),o.set(e,a.length),e=o,i.w=a.length}return Ku(e,t.level==null?6:t.level,t.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,n,r,i)},Xu=function(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n},Zu=function(e,t){return e[t]|e[t+1]<<8},Qu=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},$u=function(e,t){return Qu(e,t)+Qu(e,t+4)*4294967296},Z=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8};function ed(e,t){return Yu(e,t||{},0,0)}function td(e,t){return Fu(e,{i:2},t&&t.out,t&&t.dictionary)}var nd=function(e,t,n,r){for(var i in e){var a=e[i],o=t+i,s=r;Array.isArray(a)&&(s=Xu(r,a[1]),a=a[0]),ArrayBuffer.isView(a)?n[o]=[a,s]:(n[o+=`/`]=[new J(0),s],nd(a,o,n,r))}},rd=typeof TextEncoder<`u`&&new TextEncoder,id=typeof TextDecoder<`u`&&new TextDecoder;try{id.decode(Gu,{stream:!0})}catch{}var ad=function(e){for(var t=``,n=0;;){var r=e[n++],i=(r>127)+(r>223)+(r>239);if(n+i>e.length)return{s:t,r:Nu(e,n-1)};i?i==3?(r=((r&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?t+=String.fromCharCode((r&31)<<6|e[n++]&63):t+=String.fromCharCode((r&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(r)}};function od(e,t){if(t){for(var n=new J(e.length),r=0;r<e.length;++r)n[r]=e.charCodeAt(r);return n}if(rd)return rd.encode(e);for(var i=e.length,a=new J(e.length+(e.length>>1)),o=0,s=function(e){a[o++]=e},r=0;r<i;++r){if(o+5>a.length){var c=new J(o+8+(i-r<<1));c.set(a),a=c}var l=e.charCodeAt(r);l<128||t?s(l):l<2048?(s(192|l>>6),s(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|e.charCodeAt(++r)&1023,s(240|l>>18),s(128|l>>12&63),s(128|l>>6&63),s(128|l&63)):(s(224|l>>12),s(128|l>>6&63),s(128|l&63))}return Nu(a,0,o)}function sd(e,t){if(t){for(var n=``,r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}else if(id)return id.decode(e);else{var i=ad(e),a=i.s,n=i.r;return n.length&&X(8),a}}var cd=function(e,t){return t+30+Zu(e,t+26)+Zu(e,t+28)},ld=function(e,t,n){var r=Zu(e,t+28),i=Zu(e,t+30),a=sd(e.subarray(t+46,t+46+r),!(Zu(e,t+8)&2048)),o=t+46+r,s=ud(e,o,i,n,Qu(e,t+20),Qu(e,t+24),Qu(e,t+42)),c=s[0],l=s[1],u=s[2];return[Zu(e,t+10),c,l,a,o+i+Zu(e,t+32),u]},ud=function(e,t,n,r,i,a,o){var s=i==4294967295,c=a==4294967295,l=o==4294967295,u=t+n,d=s+c+l;if(r&&d){for(;t+4<u;t+=4+Zu(e,t+2))if(Zu(e,t)==1)return[s?$u(e,t+4+8*c):i,c?$u(e,t+4):a,l?$u(e,t+4+8*(c+s)):o,1];r<2&&X(13)}return[i,a,o,0]},dd=function(e){var t=0;if(e)for(var n in e){var r=e[n].length;r>65535&&X(9),t+=r+4}return t},fd=function(e,t,n,r,i,a,o,s){var c=r.length,l=n.extra,u=s&&s.length,d=dd(l);Z(e,t,o==null?67324752:33639248),t+=4,o!=null&&(e[t++]=20,e[t++]=n.os),e[t]=20,t+=2,e[t++]=n.flag<<1|(a<0&&8),e[t++]=i&&8,e[t++]=n.compression&255,e[t++]=n.compression>>8;var f=new Date(n.mtime==null?Date.now():n.mtime),p=f.getFullYear()-1980;if((p<0||p>119)&&X(10),Z(e,t,p<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),t+=4,a!=-1&&(Z(e,t,n.crc),Z(e,t+4,a<0?-a-2:a),Z(e,t+8,n.size)),Z(e,t+12,c),Z(e,t+14,d),t+=16,o!=null&&(Z(e,t,u),Z(e,t+6,n.attrs),Z(e,t+10,o),t+=14),e.set(r,t),t+=c,d)for(var m in l){var h=l[m],g=h.length;Z(e,t,+m),Z(e,t+2,g),e.set(h,t+4),t+=4+g}return u&&(e.set(s,t),t+=u),t},pd=function(e,t,n,r,i){Z(e,t,101010256),Z(e,t+8,n),Z(e,t+10,n),Z(e,t+12,r),Z(e,t+16,i)};function md(e,t){t||={};var n={},r=[];nd(e,``,n,t);var i=0,a=0;for(var o in n){var s=n[o],c=s[0],l=s[1],u=l.level==0?0:8,d=od(o),f=d.length,p=l.comment,m=p&&od(p),h=m&&m.length,g=dd(l.extra);f>65535&&X(11);var _=u?ed(c,l):c,v=_.length,y=Ju();y.p(c),r.push(Xu(l,{size:c.length,crc:y.d(),c:_,f:d,m,u:f!=o.length||m&&p.length!=h,o:i,compression:u})),i+=30+f+g+v,a+=76+2*(f+g)+(h||0)+v}for(var b=new J(a+22),x=i,S=a-i,C=0;C<r.length;++C){var d=r[C];fd(b,d.o,d,d.f,d.u,d.c.length);var w=30+d.f.length+dd(d.extra);b.set(d.c,d.o+w),fd(b,i,d,d.f,d.u,d.c.length,d.o,d.m),i+=16+w+(d.m?d.m.length:0)}return pd(b,i,r.length,S,x),b}function hd(e,t){for(var n={},r=e.length-22;Qu(e,r)!=101010256;--r)(!r||e.length-r>65558)&&X(13);var i=Zu(e,r+8);if(!i)return{};var a=Qu(e,r+16),o=Qu(e,r-20)==117853008;if(o){var s=Qu(e,r-12);o=Qu(e,s)==101075792,o&&(i=Qu(e,s+32),a=Qu(e,s+48))}for(var c=t&&t.filter,l=0;l<i;++l){var u=ld(e,a,o),d=u[0],f=u[1],p=u[2],m=u[3],h=u[4],g=u[5],_=cd(e,g);a=h,(!c||c({name:m,size:f,originalSize:p,compression:d}))&&(d?d==8?n[m]=td(e.subarray(_,_+f),{out:new J(p)}):X(14,`unknown compression type `+d):n[m]=Nu(e,_,_+f))}return n}var gd=ArrayBuffer,Q=Uint8Array,_d=Uint16Array,vd=Int16Array,yd=Int32Array,bd=function(e,t,n){if(Q.prototype.slice)return Q.prototype.slice.call(e,t,n);(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length);var r=new Q(n-t);return r.set(e.subarray(t,n)),r},xd=function(e,t,n,r){if(Q.prototype.fill)return Q.prototype.fill.call(e,t,n,r);for((n==null||n<0)&&(n=0),(r==null||r>e.length)&&(r=e.length);n<r;++n)e[n]=t;return e},Sd=function(e,t,n,r){if(Q.prototype.copyWithin)return Q.prototype.copyWithin.call(e,t,n,r);for((n==null||n<0)&&(n=0),(r==null||r>e.length)&&(r=e.length);n<r;)e[t++]=e[n++]},Cd=[`invalid zstd data`,`window size too large (>2046MB)`,`invalid block type`,`FSE accuracy too high`,`match distance too far back`,`unexpected EOF`],$=function(e,t,n){var r=Error(t||Cd[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,$),!n)throw r;return r},wd=function(e,t,n){for(var r=0,i=0;r<n;++r)i|=e[t++]<<(r<<3);return i},Td=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},Ed=function(e,t){var n=e[0]|e[1]<<8|e[2]<<16;if(n==3126568&&e[3]==253){var r=e[4],i=r>>5&1,a=r>>2&1,o=r&3,s=r>>6;r&8&&$(0);var c=6-i,l=o==3?4:o,u=wd(e,c,l);c+=l;var d=s?1<<s:i,f=wd(e,c,d)+(s==1&&256),p=f;if(!i){var m=1<<10+(e[5]>>3);p=m+(m>>3)*(e[5]&7)}p>2145386496&&$(1);var h=new Q((t==1?f||p:t?0:p)+12);return h[0]=1,h[4]=4,h[8]=8,{b:c+d,y:0,l:0,d:u,w:t&&t!=1?t:h.subarray(12),e:p,o:new yd(h.buffer,0,3),u:f,c:a,m:Math.min(131072,p)}}else if((n>>4|e[3]<<20)==25481893)return Td(e,4)+8;$(0)},Dd=function(e){for(var t=0;1<<t<=e;++t);return t-1},Od=function(e,t,n){var r=(t<<3)+4,i=(e[t]&15)+5;i>n&&$(3);for(var a=1<<i,o=a,s=-1,c=-1,l=-1,u=a,d=new gd(512+(a<<2)),f=new vd(d,0,256),p=new _d(d,0,256),m=new _d(d,512,a),h=512+(a<<1),g=new Q(d,h,a),_=new Q(d,h+a);s<255&&o>0;){var v=Dd(o+1),y=r>>3,b=(1<<v+1)-1,x=(e[y]|e[y+1]<<8|e[y+2]<<16)>>(r&7)&b,S=(1<<v)-1,C=b-o-1,w=x&S;if(w<C?(r+=v,x=w):(r+=v+1,x>S&&(x-=C)),f[++s]=--x,x==-1?(o+=x,g[--u]=s):o-=x,!x)do{var T=r>>3;c=(e[T]|e[T+1]<<8)>>(r&7)&3,r+=2,s+=c}while(c==3)}(s>255||o)&&$(0);for(var E=0,D=(a>>1)+(a>>3)+3,O=a-1,k=0;k<=s;++k){var A=f[k];if(A<1){p[k]=-A;continue}for(l=0;l<A;++l){g[E]=k;do E=E+D&O;while(E>=u)}}for(E&&$(0),l=0;l<a;++l){var j=p[g[l]]++;m[l]=(j<<(_[l]=i-Dd(j)))-a}return[r+7>>3,{b:i,s:g,n:_,t:m}]},kd=function(e,t){var n=0,r=-1,i=new Q(292),a=e[t],o=i.subarray(0,256),s=i.subarray(256,268),c=new _d(i.buffer,268);if(a<128){var l=Od(e,t+1,6),u=l[0],d=l[1];t+=a;var f=u<<3,p=e[t];p||$(0);for(var m=0,h=0,g=d.b,_=g,v=(++t<<3)-8+Dd(p);v-=g,!(v<f);){var y=v>>3;if(m+=(e[y]|e[y+1]<<8)>>(v&7)&(1<<g)-1,o[++r]=d.s[m],v-=_,v<f)break;y=v>>3,h+=(e[y]|e[y+1]<<8)>>(v&7)&(1<<_)-1,o[++r]=d.s[h],g=d.n[m],m=d.t[m],_=d.n[h],h=d.t[h]}++r>255&&$(0)}else{for(r=a-127;n<r;n+=2){var b=e[++t];o[n]=b>>4,o[n+1]=b&15}++t}var x=0;for(n=0;n<r;++n){var S=o[n];S>11&&$(0),x+=S&&1<<S-1}var C=Dd(x)+1,w=1<<C,T=w-x;for(T&T-1&&$(0),o[r++]=Dd(T)+1,n=0;n<r;++n){var S=o[n];++s[o[n]=S&&C+1-S]}var E=new Q(w<<1),D=E.subarray(0,w),O=E.subarray(w);for(c[C]=0,n=C;n>0;--n){var k=c[n];xd(O,n,k,c[n-1]=k+s[n]*(1<<C-n))}for(c[0]!=w&&$(0),n=0;n<r;++n){var A=o[n];if(A){var j=c[A];xd(D,n,j,c[A]=j+(1<<C-A))}}return[t,{n:O,b:C,s:D}]},Ad=Od(new Q([81,16,99,140,49,198,24,99,12,33,196,24,99,102,102,134,70,146,4]),0,6)[1],jd=Od(new Q([33,20,196,24,99,140,33,132,16,66,8,33,132,16,66,8,33,68,68,68,68,68,68,68,68,36,9]),0,6)[1],Md=Od(new Q([32,132,16,66,102,70,68,68,68,68,36,73,2]),0,5)[1],Nd=function(e,t){for(var n=e.length,r=new yd(n),i=0;i<n;++i)r[i]=t,t+=1<<e[i];return r},Pd=new Q(new yd([0,0,0,0,16843009,50528770,134678020,202050057,269422093]).buffer,0,36),Fd=Nd(Pd,0),Id=new Q(new yd([0,0,0,0,0,0,0,0,16843009,50528770,117769220,185207048,252579084,16]).buffer,0,53),Ld=Nd(Id,3),Rd=function(e,t,n){var r=e.length,i=t.length,a=e[r-1],o=(1<<n.b)-1,s=-n.b;a||$(0);for(var c=0,l=n.b,u=(r<<3)-8+Dd(a)-l,d=-1;u>s&&d<i;){var f=u>>3,p=(e[f]|e[f+1]<<8|e[f+2]<<16)>>(u&7);c=(c<<l|p)&o,t[++d]=n.s[c],u-=l=n.n[c]}(u!=s||d+1!=i)&&$(0)},zd=function(e,t,n){var r=6,i=t.length+3>>2,a=i<<1,o=i+a;Rd(e.subarray(r,r+=e[0]|e[1]<<8),t.subarray(0,i),n),Rd(e.subarray(r,r+=e[2]|e[3]<<8),t.subarray(i,a),n),Rd(e.subarray(r,r+=e[4]|e[5]<<8),t.subarray(a,o),n),Rd(e.subarray(r),t.subarray(o),n)},Bd=function(e,t,n){var r,i=t.b,a=e[i],o=a>>1&3;t.l=a&1;var s=a>>3|e[i+1]<<5|e[i+2]<<13,c=(i+=3)+s;if(o==1)return i>=e.length?void 0:(t.b=i+1,n?(xd(n,e[i],t.y,t.y+=s),n):xd(new Q(s),e[i]));if(!(c>e.length)){if(o==0)return t.b=c,n?(n.set(e.subarray(i,c),t.y),t.y+=s,n):bd(e,i,c);if(o==2){var l=e[i],u=l&3,d=l>>2&3,f=l>>4,p=0,m=0;u<2?d&1?f|=e[++i]<<4|(d&2&&e[++i]<<12):f=l>>3:(m=d,d<2?(f|=(e[++i]&63)<<4,p=e[i]>>6|e[++i]<<2):d==2?(f|=e[++i]<<4|(e[++i]&3)<<12,p=e[i]>>2|e[++i]<<6):(f|=e[++i]<<4|(e[++i]&63)<<12,p=e[i]>>6|e[++i]<<2|e[++i]<<10)),++i;var h=n?n.subarray(t.y,t.y+t.m):new Q(t.m),g=h.length-f;if(u==0)h.set(e.subarray(i,i+=f),g);else if(u==1)xd(h,e[i++],g);else{var _=t.h;if(u==2){var v=kd(e,i);p+=i-(i=v[0]),t.h=_=v[1]}else _||$(0);(m?zd:Rd)(e.subarray(i,i+=p),h.subarray(g),_)}var y=e[i++];if(y){y==255?y=(e[i++]|e[i++]<<8)+32512:y>127&&(y=y-128<<8|e[i++]);var b=e[i++];b&3&&$(0);for(var x=[jd,Md,Ad],S=2;S>-1;--S){var C=b>>(S<<1)+2&3;if(C==1){var w=new Q([0,0,e[i++]]);x[S]={s:w.subarray(2,3),n:w.subarray(0,1),t:new _d(w.buffer,0,1),b:0}}else C==2?(r=Od(e,i,9-(S&1)),i=r[0],x[S]=r[1]):C==3&&(t.t||$(0),x[S]=t.t[S])}var T=t.t=x,E=T[0],D=T[1],O=T[2],k=e[c-1];k||$(0);var A=(c<<3)-8+Dd(k)-O.b,j=A>>3,M=0,N=(e[j]|e[j+1]<<8)>>(A&7)&(1<<O.b)-1;j=(A-=D.b)>>3;var P=(e[j]|e[j+1]<<8)>>(A&7)&(1<<D.b)-1;j=(A-=E.b)>>3;var F=(e[j]|e[j+1]<<8)>>(A&7)&(1<<E.b)-1;for(++y;--y;){var ee=O.s[N],te=O.n[N],ne=E.s[F],re=E.n[F],I=D.s[P],L=D.n[P];j=(A-=I)>>3;var ie=1<<I,ae=ie+((e[j]|e[j+1]<<8|e[j+2]<<16|e[j+3]<<24)>>>(A&7)&ie-1);j=(A-=Id[ne])>>3;var oe=Ld[ne]+((e[j]|e[j+1]<<8|e[j+2]<<16)>>(A&7)&(1<<Id[ne])-1);j=(A-=Pd[ee])>>3;var se=Fd[ee]+((e[j]|e[j+1]<<8|e[j+2]<<16)>>(A&7)&(1<<Pd[ee])-1);if(j=(A-=te)>>3,N=O.t[N]+((e[j]|e[j+1]<<8)>>(A&7)&(1<<te)-1),j=(A-=re)>>3,F=E.t[F]+((e[j]|e[j+1]<<8)>>(A&7)&(1<<re)-1),j=(A-=L)>>3,P=D.t[P]+((e[j]|e[j+1]<<8)>>(A&7)&(1<<L)-1),ae>3)t.o[2]=t.o[1],t.o[1]=t.o[0],t.o[0]=ae-=3;else{var ce=ae-(se!=0);ce?(ae=ce==3?t.o[0]-1:t.o[ce],ce>1&&(t.o[2]=t.o[1]),t.o[1]=t.o[0],t.o[0]=ae):ae=t.o[0]}for(var S=0;S<se;++S)h[M+S]=h[g+S];M+=se,g+=se;var le=M-ae;if(le<0){var ue=-le,de=t.e+le;ue>oe&&(ue=oe);for(var S=0;S<ue;++S)h[M+S]=t.w[de+S];M+=ue,oe-=ue,le=0}for(var S=0;S<oe;++S)h[M+S]=h[le+S];M+=oe}if(M!=g)for(;g<h.length;)h[M++]=h[g++];else M=h.length;n?t.y+=M:h=bd(h,0,M)}else if(n){if(t.y+=f,g)for(var S=0;S<f;++S)h[S]=h[g+S]}else g&&(h=bd(h,g));return t.b=c,h}$(2)}},Vd=function(e,t){if(e.length==1)return e[0];for(var n=new Q(t),r=0,i=0;r<e.length;++r){var a=e[r];n.set(a,i),i+=a.length}return n};function Hd(e,t){for(var n=[],r=+!t,i=0,a=0;e.length;){var o=Ed(e,r||t);if(typeof o==`object`){for(r?(t=null,o.w.length==o.u&&(n.push(t=o.w),a+=o.u)):(n.push(t),o.e=0);!o.l;){var s=Bd(e,o,t);s||$(5),t?o.e=o.y:(n.push(s),a+=s.length,Sd(o.w,0,s.length),o.w.set(s,o.w.length-s.length))}i=o.b+o.c*4}else i=o;e=e.subarray(i)}return Vd(n,a)}function Ud(e){if(new TextDecoder().decode(e.slice(0,8))!==`fig-kiwi`)return null;let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=12,r=[];for(;n<e.length;){let i=t.getUint32(n,!0);n+=4,r.push(e.slice(n,n+i)),n+=i}return r.length>=2?r:null}function Wd(e,t,n=101){let r,i=globalThis.Bun?.zstdCompressSync;r=i?i(t):ed(t);let a=16+e.length+4+r.length,o=new Uint8Array(a),s=new DataView(o.buffer);o.set(new TextEncoder().encode(`fig-kiwi`),0),s.setUint32(8,n,!0);let c=12;return s.setUint32(c,e.length,!0),c+=4,o.set(e,c),c+=e.length,s.setUint32(c,r.length,!0),c+=4,o.set(r,c),o}let{token:Gd,modeConditions:Kd,modeAttribute:qd}=Ei;function Jd(e){return Yr(e,[Gd,Kd,qd])}function Yd(e){return S(e)?void 0:e}function Xd(e,t){return typeof e==`number`&&Math.fround(e)===Math.fround(t)}function Zd(e,t){let n=oc(e,Gd)??{},r=Object.entries(n.expressions??{}).filter(([e,n])=>Xd(t[e],n.resolved));return{unit:n.unit,expressions:Yd(Object.fromEntries(r))}}function Qd(e){return oc(e,Kd)??{}}function $d(e){return oc(e,qd)}let ef=e=>si.includes(e),tf=e=>ci.includes(e);function nf(e){let t=(e.codeSyntax?.entries??[]).flatMap(({platform:e,value:t})=>tf(e)&&t?[[e,t]]:[]);return t.length>0?Object.fromEntries(t):void 0}function rf(e){let t=e.variableScopes?.filter(ef),n=Jd(fc(e)),r={description:e.description??e.symbolDescription??``,hiddenFromPublishing:e.isPublishable===!1,scopes:t?.length?t:void 0,codeSyntax:nf(e),pluginData:n.length>0?n:void 0};return typeof e.key==`string`&&(r.key=e.key),typeof e.version==`string`&&(r.version=e.version),r}function af(e){return e.layoutScale??1}function of(e){return Qs(e.mainComponentId===null?1:af(e))}function sf(e,t,n){for(let r of Gs(n)){if(r.variableData&&![`ALIAS`,`EXPRESSION`].includes(r.variableData.dataType??``))continue;let n=r.variableField&&Hs[r.variableField];n&&(d(e.instanceOverrides,e.id,t.id,`boundVariables/${n}`,t.boundVariables[n]??null),d(e.instanceOverrides,e.id,t.id,`boundVariables`))}}function cf(e,t){lf(e,t,au(t))}function lf(e,t,n=1){for(let r of Gs(t)){let t=r.variableField&&Hs[r.variableField];if(!t)continue;e.variableBindingScales??={};let i=Ls(r.variableData),a=i?.reference?i.multiplier:1,o=t===`opacity`?.01:1,s=r.variableData?.value?.expressionValue&&t!==`opacity`&&t!==`rotation`;e.variableBindingScales[t]=a*o/(s?n:1)}}function uf(e,t,n){let r=[],i=(e,a)=>{if(n(e)){r.push({match:e,top:a});return}if(!t.isInstance(e))for(let n of t.childrenOf(e))i(n,a)};for(let t of e)i(t,t);return r.length===1?{count:1,...r[0]}:{count:r.length}}function*df(e,t){yield e;for(let n of t(e))yield*df(n,t)}function ff(e){return e.guid?G(e.guid):void 0}function pf(e){return e.parentIndex?.guid?G(e.parentIndex.guid):void 0}function mf(e,t){let n=e.parentIndex?.position??``,r=t.parentIndex?.position??``;return n===r?0:n<r?-1:1}function hf(e){let t=new Map,n=new Map;for(let r of e){let e=ff(r);if(e===void 0)continue;if(t.has(e))throw Error(`Duplicate source node ${e}`);t.set(e,r);let i=pf(r);if(i===void 0)continue;let a=n.get(i);a?a.push(r):n.set(i,[r])}for(let e of n.values())e.sort(mf);return{sources:t,children:n}}function gf(e,t){return e?.sessionID===t.sessionID&&e.localID===t.localID}function _f(e){if(!e||typeof e!=`object`||!(`sessionID`in e)||!(`localID`in e)||typeof e.sessionID!=`number`||typeof e.localID!=`number`)return;let t={sessionID:e.sessionID,localID:e.localID};return Wa(t)?void 0:t}function vf(e,t){return gf(e.guid,t)||gf(_f(e.overrideKey),t)}function yf({children:e}){return{childrenOf:t=>e.get(ff(t)??``)??[],isInstance:e=>e.symbolData?.symbolID!==void 0}}function bf(e,t,n){let{count:r,match:i,top:a}=uf(e.children.get(t)??[],yf(e),e=>vf(e,n));return{count:r,record:i,topChild:a}}function xf(e,t,n){let r=G(t);for(let[t,i]of n.entries()){let a=e.sources.get(r);if(!a)return!1;if(t===0&&vf(a,i))continue;let{record:o}=bf(e,r,i);if(!o)return!1;if(t===n.length-1)return!0;if(!o.symbolData?.symbolID)return!1;r=G(o.symbolData.symbolID)}return!1}function Sf(e,t){let n=t,r=new Set;for(;!r.has(n);){r.add(n);let t=e.sources.get(n);if(t?.type!==`INSTANCE`||!t.symbolData?.symbolID)return n;n=G(t.symbolData.symbolID)}return n}function Cf(e){let t=e.value;if(t&&(t.boolValue!==void 0||t.textValue!==void 0||t.guidValue!==void 0||t.textDataValue!==void 0))return t;let n=e.varValue?.value;if(n?.symbolIdValue?.guid)return{guidValue:n.symbolIdValue.guid};if(n?.boolValue!==void 0)return{boolValue:n.boolValue};if(n?.textValue!==void 0)return{textValue:n.textValue};if(n?.textDataValue!==void 0)return{textDataValue:n.textDataValue};if(n?.slotContentIdValue)return{slotContentIdValue:n.slotContentIdValue}}function wf(e,t,n){let r=structuredClone([...e]);for(let e of t){let t=Cf(e);if(!e.defID||!t)continue;let i={id:e.defID,value:structuredClone(t),origin:`assignment`,...n===void 0?{}:{rank:n}},a=r.findIndex(e=>gf(e.id,i.id));if(a===-1){r.push(i);continue}let o=r[a];r[a]={...i,superseded:[...o.superseded??[],structuredClone(o.value)]}}return r}function Tf(e){return(e.componentPropDefs??[]).flatMap(e=>e.id&&e.initialValue?[{id:e.id,value:structuredClone(e.initialValue),origin:`default`}]:[])}function Ef(e,t,n){let r=Is(e),i=e.componentPropRefs;for(let e of i??[]){if(!e.defID||e.isDeleted)continue;let i=t.find(t=>gf(t.id,e.defID));if(!i)continue;let{value:a,origin:o}=i,s=e=>{n?.({definitionId:structuredClone(i.id),field:e,origin:o},i)};if(e.componentPropNodeField===`VISIBLE`&&a.boolValue!==void 0)r.visible=a.boolValue,s(`visible`);else if(e.componentPropNodeField===`TEXT_DATA`){let e=typeof a.textValue==`string`?a.textValue:a.textValue?.characters??a.textDataValue?.characters;e!==void 0&&(e!==r.textData?.characters&&(r.derivedTextData=void 0),r.textData={...r.textData,characters:e},s(`textData`))}else e.componentPropNodeField===`OVERRIDDEN_SYMBOL_ID`&&a.guidValue?(r.symbolData={...r.symbolData,symbolID:a.guidValue},s(`symbolData`)):e.componentPropNodeField===`SLOT_CONTENT_ID`&&a.slotContentIdValue&&s(`slotContent`)}return r}function Df(e,t){let n=e.properties;t.derivedTextData&&(n.derivedTextData=structuredClone(t.derivedTextData)),t.fontSize!==void 0&&(n.fontSize=t.fontSize),t.lineHeight!==void 0&&(n.lineHeight=structuredClone(t.lineHeight)),t.letterSpacing!==void 0&&(n.letterSpacing=structuredClone(t.letterSpacing)),t.size&&(n.size=structuredClone(t.size),e.derivedSize=structuredClone(t.size)),t.transform&&(n.transform=structuredClone(t.transform));let{fillGeometry:r,strokeGeometry:i,vectorData:a}=t;r&&(n.fillGeometry=structuredClone(r)),i&&(n.strokeGeometry=structuredClone(i)),a&&(n.vectorData=structuredClone(a))}function Of(e,t){let n=[],r=[];for(let i of ru(e)){let{guidPath:e,overriddenSymbolID:a,componentPropAssignments:o,...s}=i,c=e?.guids??[];if(!c.length)continue;let l=o??[];(a||l.length)&&n.push({owner:t,declaredPath:c,path:c,swap:a,assignments:l}),Object.keys(s).length&&r.push({path:c,props:s})}return{structural:n,claims:r}}let kf={childrenOf:e=>e.children,isInstance:e=>e.mainComponentId!==null};function Af(e){return df(e,e=>e.children)}var jf=class extends Error{diagnostic;constructor(e,t){super(t),this.diagnostic=e,this.name=`InstancePathError`}},Mf=class extends Error{count;constructor(e,t){super(`Expected one instance-path target for ${G(t)}; found ${e}`),this.count=e,this.name=`SegmentError`}};function Nf(e,t,n,r){return new jf({ownerId:e,mainComponentId:t,path:structuredClone(n),reason:r.count===0?`missing-target`:`ambiguous-target`},`Override declared by ${e}, path [${n.map(G).join(`, `)}]: ${r.message}`)}function Pf(e,t){let n=G(t),{count:r,match:i}=uf(e.children,kf,e=>gf(e.overrideKey,t)||e.sourceId===n);if(!i)throw new Mf(r,t);return i}function Ff(e,t){return gf(e.properties.symbolData?.symbolID,t)||gf(e.mainComponentOverrideKey,t)||gf(e.sourceComponentOverrideKey,t)||gf(e.sourceComponentId,t)}function If(e,t){let n=e;for(let[r,i]of t.entries())r===0&&Ff(e,i)||(n=Pf(n,i));return n}function Lf(e,t,n){if(!t?.properties.size||!n.size)return;let r=au(n);zf(e,{x:t.properties.size.x*r,y:t.properties.size.y*r},n.size)}function Rf(e,t,n,r,i){let a=r-n;if(i===`SCALE`&&n>0){let i=r/n;return{position:e*i,size:t*i}}return i===`MAX`?{position:e+a,size:t}:i===`CENTER`?{position:e+a/2,size:t}:i===`STRETCH`?{position:e,size:Math.max(0,t+a)}:{position:e,size:t}}function zf(e,t,n){if(t.x===n.x&&t.y===n.y)return;let r=e.properties.stackMode&&e.properties.stackMode!==`NONE`;for(let i of e.children){let e=i.properties;if(r&&e.stackPositioning!==`ABSOLUTE`||!e.size)continue;let a=e.transform??{m00:1,m01:0,m02:0,m10:0,m11:1,m12:0},o=Rf(a.m02,e.size.x,t.x,n.x,e.horizontalConstraint),s=Rf(a.m12,e.size.y,t.y,n.y,e.verticalConstraint),c={x:o.size,y:s.size};zf(i,e.size,c),e.size=c,e.transform={...a,m02:o.position,m12:s.position}}}let Bf=(e,t)=>({x:e.x*t,y:e.y*t});function Vf(e,t){e.fontSize!==void 0&&(e.fontSize*=t);for(let n of[`lineHeight`,`letterSpacing`]){let r=e[n];r?.units===`PIXELS`&&(e[n]={...r,value:r.value*t})}if(e.textData?.styleOverrideTable){e.textData=structuredClone(e.textData);for(let n of e.textData.styleOverrideTable??[])Vf(n,t)}if(!e.derivedTextData)return;let n=structuredClone(e.derivedTextData);n.layoutSize&&=Bf(n.layoutSize,t),n.truncatedHeight!==void 0&&(n.truncatedHeight*=t);for(let e of n.glyphs??[])e.position=Bf(e.position,t),e.fontSize*=t;for(let e of n.baselines??[])e.position=Bf(e.position,t),e.width*=t,e.lineHeight*=t,e.lineAscent*=t,e.lineY!==void 0&&(e.lineY*=t);e.derivedTextData=n}let Hf=[`stackPadding`,...Object.values(eu)],Uf=[`strokeWeight`,`cornerRadius`,`rectangleTopLeftCornerRadius`,`rectangleTopRightCornerRadius`,`rectangleBottomLeftCornerRadius`,`rectangleBottomRightCornerRadius`],Wf=[`fontSize`,`lineHeight`,`letterSpacing`,`textData`,`derivedTextData`],Gf=[...Hf,...Uf,...Wf,`dashPattern`,`effects`,`size`,`transform`];function Kf(e,t){for(let n of Uf){let r=e[n];typeof r==`number`&&(e[n]=r*t)}e.dashPattern&&=e.dashPattern.map(e=>e*t),e.effects&&=e.effects.map(e=>({...e,offset:e.offset?{x:e.offset.x*t,y:e.offset.y*t}:e.offset,radius:typeof e.radius==`number`?e.radius*t:e.radius,spread:typeof e.spread==`number`?e.spread*t:e.spread}))}function qf(e,t){let n=au(t);if(!Number.isFinite(n)||n<=0)throw Error(`Invalid instance uniform scale`);if(n!==1){for(let t of Af(e)){t.layoutScale=(t.layoutScale??1)*n;for(let e of Object.keys(t.variableBindingScales??{}))t.variableBindingScales&&e!==`opacity`&&e!==`rotation`&&(t.variableBindingScales[e]*=n);let e=t.properties;Vf(e,n),Kf(e,n);for(let t of Hf){let r=e[t];typeof r==`number`&&(e[t]=r*n)}e.size&&={x:e.size.x*n,y:e.size.y*n},e.transform&&={...e.transform,m02:e.transform.m02*n,m12:e.transform.m12*n},t.derivedSize&&={x:t.derivedSize.x*n,y:t.derivedSize.y*n}}for(let n of Gf){let r=t[n];r!==void 0&&Object.assign(e.properties,{[n]:structuredClone(r)})}}}let Jf=[`fontSize`,`fontName`,`fontVariations`,`letterSpacing`,`lineHeight`,`textCase`,`textAlignHorizontal`,`textAlignVertical`,`textAutoResize`,`styleIdForText`,`fontVariantCommonLigatures`,`fontVariantContextualLigatures`];function Yf(e,t){if(`derivedTextData`in t)return;let n=t.textData;(n!==void 0&&Object.entries(n).some(([t,n])=>!j(n,e.textData?.[t]))||Jf.some(n=>n in t&&!j(e[n],t[n])))&&(e.derivedTextData=void 0)}function Xf(e){return{instance:(t,n={})=>Zf(e,t,`INSTANCE`,n),component:(t,n={})=>Zf(e,t,`SYMBOL`,n),page:(t,n={})=>Zf(e,t,`CANVAS`,n)}}function Zf(e,t,n,r){let{sources:i,children:a}=e,o=new Set,s=new WeakMap,c=new WeakMap,l=e=>{let t=i.get(e.sourceId);if(t?.type===`INSTANCE`)return e.properties.name;let n=t?.parentIndex?.guid,r=n?i.get(G(n)):void 0;return r?.isStateGroup===!0?r.name:e.properties.name},u=e=>{if(!e)return[];let t=_f(i.get(G(e))?.overrideKey);return t?[e,t]:[e]},d=({boundary:t})=>t?.replaced.some(n=>xf(e,n,t.path))??!1,f=(e,t)=>{if(t.count===0&&d(e))return;let n=Nf(e.owner.id,e.owner.mainComponentId,e.declaredPath,t);if(t.count!==0||!r.onUnresolvedAssignment)throw n;e.owner.unresolved.push({...n.diagnostic,assignments:structuredClone(e.assignments)})},p=(t,n)=>{let r=new Map;for(let i of n){let[n]=i.path,{count:a,topChild:o}=bf(e,t,n);if(!o?.guid){f(i,new Mf(a,n));continue}let s=G(o.guid),c=vf(o,n),l={...i,path:c?i.path.slice(1):i.path},u=r.get(s);u?u.push(l):r.set(s,[l])}return r},m=(e,t,n)=>{let r=e.symbolData?.symbolID;return t?[...r?[r]:[],...n].filter(e=>!gf(e,t)):[]},h=(e,t,n,r,i)=>{let a=t.symbolData?.symbolID,o=m(e,a,n),s=[...u(e.symbolData?.symbolID),...u(a)],c=e=>s.some(t=>gf(t,e)),l=[{assignments:t.componentPropAssignments??[],rank:i}],d=[],f=e=>{if(!a)throw Error(`Swap target is not an instance`);gf(a,e)||o.push(a),a=e;for(let e of u(a))c(e)||s.push(e)};for(let e of r){let t=e.path.length===0||c(e.path[0]);if(!t||e.path.length>1){d.push(t?{...e,path:e.path.slice(1)}:e);continue}e.swap&&f(e.swap),e.assignments.length&&l.push({assignments:e.assignments,rank:e.owner.rank})}return{effective:a,replaced:o,groups:l,descendant:d}},g=(e,t,n,r)=>{let i=s.get(n),a=Object.fromEntries(Object.entries(r.props).filter(([e])=>{let n=i?.get(e);return n===void 0||n>=t}));Object.keys(a).length!==0&&(lf(n,a),Yf(n.properties,a),Object.assign(n.properties,Is(a),Ks(n.properties,a)),`name`in a&&(n.hasOwnName=!0),e.propertyClaims.push({declaredBy:e.sourceId,path:structuredClone(r.path),properties:structuredClone(a)}))},_=(t,n)=>{let r=t;for(let[t,i]of n.entries()){let a=n.slice(t);if((c.get(r)??[]).some(t=>xf(e,t,a)))return!0;if(!(t===0&&Ff(r,i)))try{r=Pf(r,i)}catch(e){if(!(e instanceof Mf))throw e;return!1}}return!1},v=(e,t)=>{try{return If(e,t)}catch(n){if(!(n instanceof Mf))throw n;let i=Nf(e.sourceId,e.mainComponentId,t,n);if(i.diagnostic.reason===`missing-target`&&_(e,t))return;if(!r.onUnresolvedProperty)throw i;r.onUnresolvedProperty(i.diagnostic);return}},y=(e,t)=>{if(!r.derivedBounds)return;let n=t.derivedSymbolData;for(let t of n??[]){let n=t.guidPath?.guids;if(!n?.length)continue;let r=v(e,n);!r||r===e||Df(r,t)}},b=(e,t)=>{let n=[],a=new Map,o=[],s,c=Ef(e,t,(e,t)=>{if(n.push(e),t.origin===`assignment`&&t.rank!==void 0&&a.set(e.field,t.rank),e.field===`symbolData`)for(let e of t.superseded??[])e.guidValue&&o.push(e.guidValue);if(e.field===`slotContent`){let e=su(t.value);s=e?G(e):void 0}});if(s&&!i.has(s)){if(!r.onMissingSlotContent)throw Error(`Missing slot content ${s}`);r.onMissingSlotContent({slotId:ff(e)??``,slotContentId:s}),s=void 0}return{source:c,claims:n,bound:a,superseded:o,slotContent:s}},x=(e,t,n,a)=>{if(o.has(e))throw Error(`Cyclic component expansion at ${e}`);let l=i.get(e);if(!l)throw Error(`Missing source node ${e}`);let u=b(l,t),{source:d}=u;o.add(e);try{let i={id:e,rank:a,mainComponentId:null,unresolved:[]},o=Of(d,i),f=[...o.structural,...n].sort((e,t)=>t.owner.rank-e.owner.rank),p=h(l,d,u.superseded,f,a),m;m=p.effective?S(i,{...p,effective:p.effective},a):u.slotContent?w(u.slotContent,p.descendant,a):C(e,d,t,p.groups,p.descendant,a);let g=D(e,l,d,p,m,u.claims);u.slotContent&&(g.slotContentId=u.slotContent),s.set(g,u.bound),m.base&&p.replaced.length&&c.set(g,p.replaced),cf(g,d);let _=m.dangling?o.claims.filter(({path:e})=>e.length===1&&Ff(g,e[0])):o.claims;O(g,m.base,d,_,a,!m.dangling);for(let e of i.unresolved)r.onUnresolvedAssignment?.({...e,mainComponentId:g.mainComponentId});return g}finally{o.delete(e)}},S=(t,{effective:n,replaced:a,groups:o,descendant:s},c)=>{let l=G(n);if(!i.has(l)){if(!r.onMissingComponent)throw Error(`Missing source node ${l}`);return r.onMissingComponent({ownerId:t.id,componentId:l}),{base:null,children:[],dangling:!0}}t.mainComponentId=Sf(e,l);let u=s.map(e=>a.length?{...e,boundary:{replaced:a,path:e.path}}:e),d=o.filter(e=>e.assignments.length).map(e=>({owner:{...t,rank:e.rank},declaredPath:[],path:[],assignments:e.assignments})),f=x(G(n),[],[...d,...u],c+1);return{base:f,children:f.children}},C=(e,t,n,r,i,o)=>{let s=t.type===`SYMBOL`?r.reduce((e,t)=>wf(e,t.assignments,t.rank),Tf(t)):n,c=p(e,i);return{base:null,children:(a.get(e)??[]).map(e=>{if(!e.guid)throw Error(`Indexed child has no GUID`);let t=G(e.guid);return x(t,s,c.get(t)??[],o+1)})}},w=(e,t,n)=>{let r=p(e,t);return{base:null,children:(a.get(e)??[]).map(e=>{if(!e.guid)throw Error(`Indexed child has no GUID`);let t=G(e.guid);return x(t,[],r.get(t)??[],n+1)})}},T=e=>{let t=su(e.varValue?.value);return!!t&&!i.has(G(t))},E=e=>e?{mainComponentId:e.mainComponentId??e.sourceId,mainComponentOverrideKey:e.mainComponentOverrideKey??e.overrideKey,propertyClaims:structuredClone(e.propertyClaims),variableBindingScales:{...e.variableBindingScales},hasOwnName:i.get(e.sourceId)?.type===`INSTANCE`&&e.hasOwnName}:{mainComponentId:null,mainComponentOverrideKey:void 0,propertyClaims:[],variableBindingScales:{},hasOwnName:!1},D=(e,t,n,{effective:r,replaced:i,groups:a},{base:o,children:s},c)=>{let d=t.symbolData?.symbolID,[,f]=u(d),p={sourceId:e,sourceComponentId:d,sourceComponentOverrideKey:f,...E(o),bindingClaims:c,overrideKey:_f(n.overrideKey),properties:{...o&&Vn(o.properties,tu),...n,...r&&n.symbolData?{symbolData:{...n.symbolData,symbolID:r}}:{},...Ks(o?.properties??{},n)},children:s};return n.type===`INSTANCE`&&(p.properties.componentPropAssignments=a.flatMap(e=>e.assignments).filter(e=>!T(e))),o&&i.length&&!p.hasOwnName&&(p.properties.name=o.defaultInstanceName??o.properties.name),p.defaultInstanceName=l(p),p},O=(e,t,n,r,i,a)=>{for(let t of r){let n=v(e,t.path);n&&g(e,i,n,t)}qf(e,n),Lf(e,t,n),n.type===`INSTANCE`&&n.size&&(e.properties.size=structuredClone(n.size),e.derivedSize=structuredClone(n.size)),a&&y(e,n)};if(i.get(t)?.type!==n){let e={INSTANCE:`an instance`,SYMBOL:`a component`,CANVAS:`a page`}[n];throw Error(`Expected ${e} source`)}return x(t,[],[],0)}function Qf(e,t){let n=h();return n.orderKey=e.properties.parentIndex?.position??null,n.fig.layout=t.source?.fig.layout??null,n.fig.uniformScaleFactor=nu(e.properties)?.uniformScaleFactor??null,n}let $f=new Set([`childIds`,`source`,`instanceOverrides`]);function ep(e){return e instanceof Map||e instanceof Set?!0:typeof e!=`object`||!e||ArrayBuffer.isView(e)?!1:Object.values(e).some(ep)}function tp(e,t){for(let n of Object.keys(e)){if($f.has(n))continue;let r=Reflect.get(e,n),i=Reflect.get(t,n);r===i||typeof r!=`object`||!r||ep(r)||!j(r,i)||Reflect.set(e,n,i)}}function np(e){if(e===`DOCUMENT`||e===`VARIABLE`)throw Error(`Cannot materialize ${e} as an instance descendant`)}function rp(e,t,n,r,i={}){let{blobs:a=[],sourceChildren:o=new Map,existingNodes:s=new Map}=i;if(!e.getNode(t))throw Error(`Missing materialization parent`);let c=new Map,l=t=>{if(c.has(t))throw Error(`Repeated or cyclic instance occurrence`);let n=Cl(t.properties,a,`occurrence`);n.nodeType===`TEXT`&&t.derivedSize&&(n.derivedLayout={width:t.derivedSize.x,height:t.derivedSize.y}),np(n.nodeType);let i=s.get(t);if(i&&(e.getNode(i.id)!==i||i.type!==n.nodeType))throw Error(`Invalid preallocated occurrence ${t.sourceId}`);c.set(t,n);let u=o.get(t);if(u&&e.getNode(u)?.type!==n.nodeType)throw Error(`Invalid source child for ${t.sourceId}`);if(t.mainComponentId!==null){let n=r.get(t.mainComponentId);if(!n||e.getNode(n)?.type!==`COMPONENT`)throw Error(`Missing materialized component ${t.mainComponentId}`)}for(let e of t.children)l(e)};l(n);let u=new Map(s),f=(e,t,n)=>{if(n)for(let r of e.bindingClaims)r.origin===`assignment`&&r.field===`visible`&&d(n.instanceOverrides,n.id,t.id,`visible`,t.visible)},p=(t,i,a)=>{let l=c.get(t);if(!l)throw Error(`Missing prepared occurrence`);let{nodeType:m,...h}=l;np(m);let g=Qf(t,l),_={...h,variableAssignmentScales:of(t),componentScale:af(t),variableBindingScales:$s(h.boundVariables??{},t.layoutScale??1,t.variableBindingScales),componentId:t.mainComponentId===null?o.get(t)??null:r.get(t.mainComponentId),source:g},v=s.get(t);if(v&&v.parentId!==i)throw Error(`Preallocated occurrence has wrong parent ${t.sourceId}`);let y=v??e.createNode(m,i,_);v&&e.updateNode(v.id,_);let b=e.getNode(o.get(t)??``);if(b&&tp(y,b),u.set(t,y),v&&t!==n&&y.type===`COMPONENT`)return y;f(t,y,a);let x=o.get(t);return a&&t.mainComponentId!==null&&x&&(d(a.instanceOverrides,a.id,y.id,`sourceComponentId`,x),e.getNode(x)?.componentId!==y.componentId&&d(a.instanceOverrides,a.id,y.id,`componentId`,y.componentId)),y.childIds=t.children.map(e=>p(e,y.id,y.type===`INSTANCE`?y:a).id),y},m=p(n,t);return op(u),{root:m,nodes:u}}function ip(e,t,n){return e.kind===`text`?typeof t==`object`&&!!t&&`characters`in t:e.kind!==`text-style`||!!n.textStyleId}function ap(e,t,n,r){if(!Array.isArray(r))return;let i=!1;for(let[a,o]of r.entries()){if(!o.colorVar?.value?.alias)continue;let r=`boundVariables/${n}/${a}/color`;d(e.instanceOverrides,e.id,t.id,r,t.boundVariables[`${n}/${a}/color`]??null),i=!0}i&&d(e.instanceOverrides,e.id,t.id,`boundVariables`)}function op(e){for(let[t,n]of e)if(n.type===`INSTANCE`)for(let r of t.propertyClaims){let i=If(t,r.path),a=e.get(i);if(!a)throw Error(`Unmaterialized property claim target`);for(let e of Object.keys(Zl)){if(!(e in r.properties))continue;let t=Zl[e];if(ip(t,r.properties[e],a)){for(let e of t.scene){let t=a[e];d(n.instanceOverrides,n.id,a.id,e,structuredClone(t))}t.kind===`paint`&&ap(n,a,t.scene[0],r.properties[e])}}sf(n,a,r.properties)}}function sp(e,t,n){if(e.mainComponentId!==null){let r=n.get(e.mainComponentId);if(!r)throw Error(`Missing component occurrence ${e.mainComponentId}`);let i=new Map(t.getChildren(r.materialized.root.id).map((e,t)=>[e.id,t])),a=new Map(r.occurrence.children.map(e=>[e.sourceId,e]));e.children=e.children.filter(e=>{let t=a.get(e.sourceId),n=t&&r.materialized.nodes.get(t);return!!n&&i.has(n.id)}).toSorted((e,t)=>{let n=a.get(e.sourceId),o=a.get(t.sourceId),s=n&&r.materialized.nodes.get(n),c=o&&r.materialized.nodes.get(o);return(s?i.get(s.id)??0:0)-(c?i.get(c.id)??0:0)})}for(let r of e.children)sp(r,t,n)}function*cp(e,t){let n=new Map;for(let e of t.children){if(n.has(e.sourceId))throw Error(`Ambiguous source child ${e.sourceId}`);n.set(e.sourceId,e)}for(let t of e.children){let e=n.get(t.sourceId);if(!e)throw Error(`Missing source child ${t.sourceId}`);yield[t,e]}}function lp(e,t,n){let r=[],i=(e,n,a,o)=>{for(let[s,c]of cp(e,n)){let e=t.nodes.get(s),n=o.get(c);if(!e||!n)throw Error(`Missing materialized correspondence for ${s.sourceId}`);r.push({owner:a,target:e,source:n}),!s.slotContentId&&s.mainComponentId===c.mainComponentId&&i(s,c,a,o)}};for(let r of Af(e)){if(r.mainComponentId===null)continue;let e=n.get(r.mainComponentId),a=t.nodes.get(r);if(!e||!a)throw Error(`Missing component ${r.mainComponentId}`);i(r,e.occurrence,a,e.materialized.nodes)}for(let{owner:e,target:t,source:n}of r)d(e.instanceOverrides,e.id,t.id,`sourceComponentId`,n.id),t.type===`INSTANCE`&&t.componentId!==n.componentId&&d(e.instanceOverrides,e.id,t.id,`componentId`,t.componentId)}function up(e,t){let n=new Map,r=(e,t,o)=>{for(let[s,c]of cp(e,t)){let e=o.get(c);if(!e)throw Error(`Unmaterialized source child ${c.sourceId}`);if(n.set(s,e.id),s.mainComponentId!==null)i(s);else if(s.slotContentId)for(let e of s.children)a(e);else r(s,c,o)}},i=e=>{if(e.mainComponentId===null)throw Error(`Expected instance occurrence`);let n=t.get(e.mainComponentId);if(!n)throw Error(`Missing component occurrence ${e.mainComponentId}`);r(e,n.occurrence,n.materialized.nodes)},a=e=>{if(e.mainComponentId!==null)i(e);else for(let t of e.children)a(t)};return a(e),n}function dp(e){for(let t of e){if(t.pluginData&&t.pluginData.length>1){let e=new Map;for(let n of t.pluginData)e.set(`${n.pluginID}\0${n.key}\0${n.value}`,n);e.size<t.pluginData.length&&(t.pluginData=[...e.values()])}if(t.pluginRelaunchData&&t.pluginRelaunchData.length>1){let e=new Map;for(let n of t.pluginRelaunchData)e.set(`${n.pluginID}\0${n.command}\0${n.message}\0${n.isDeleted}`,n);e.size<t.pluginRelaunchData.length&&(t.pluginRelaunchData=[...e.values()])}}}function fp(e){if(new TextDecoder().decode(e.slice(0,8))!==`fig-kiwi`)return null;let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=t.getUint32(8,!0),r=12,i=[];for(;r<e.length&&!(r+4>e.length);){let n=t.getUint32(r,!0);if(r+=4,r+n>e.length)throw Error(`Corrupted .fig file: chunk at offset ${r-4} declares length ${n} but only ${e.length-r} bytes remain`);i.push(e.slice(r,r+n)),r+=n}if(i.length<2)return null;let a=i[1],o;if(ls(a))o=Hd(a);else try{o=td(a)}catch{throw Error(`Failed to decompress fig-kiwi data chunk`)}return{schemaDeflated:i[0],dataRaw:o,version:n}}function pp(e,t,n){let r=fp(e);if(!r)throw Error(`Invalid fig-kiwi container`);let i=Xo(new ao(td(r.schemaDeflated)));if(t)try{let e=cs(i,r.dataRaw);e.length>0&&t(e)}catch(e){console.warn(`Failed to scan FIG page manifest; continuing with full decode:`,e)}let a=qo(i,n).decodeMessage(r.dataRaw),o=a.nodeChanges;if(!o||o.length===0)throw Error(`No nodes found in .fig file`);return dp(o),{nodeChanges:o,blobs:(a.blobs??[]).map(e=>e.bytes instanceof Uint8Array?e.bytes:new Uint8Array(Object.values(e.bytes))),figKiwiVersion:r.version,figSchemaDeflated:r.schemaDeflated}}let mp=new Uint8Array([137,80,78,71,13,10,26,10]);function hp(e){return mp.every((t,n)=>e[n]===t)}function gp(e){let t=e.toLowerCase();return t.endsWith(`.png`)||t.endsWith(`.jpg`)||t.endsWith(`.json`)}function _p(e){let t=e[`canvas.fig`]??e.canvas;if(t)return t;let n=null;for(let[t,r]of Object.entries(e))!r||gp(t)||(!n||r.byteLength>n.byteLength)&&(n=r);return n}function vp(e){return e===`canvas.fig`||e===`canvas`}function yp(e,t,n){let r=Ud(e);if(!r)return null;let i=pp(e,t,n),a=r.slice(2).find(hp)??null;return{...i,images:[],thumbnailPNG:a,metaJSON:null}}function bp(e,t,n){let r=new Uint8Array(e),i=yp(r,t,n);if(i)return i;let a=_p(hd(r,{filter:({name:e})=>vp(e)})),o,s;if(a)s=pp(a,t,n),o=hd(r,{filter:({name:e})=>!vp(e)});else{if(o=hd(r),a=_p(o),!a)throw Error(`No canvas data found in .fig file. Entries: ${Object.keys(o).join(`, `)}`);s=pp(a,t,n)}let c=o[`meta.json`],l=Object.entries(o).filter(([e])=>e.startsWith(`images/`)&&e!==`images/`).map(([e,t])=>[e.slice(7),t]);return{...s,images:l,thumbnailPNG:o[`thumbnail.png`]??null,metaJSON:Object.hasOwn(o,`meta.json`)?new TextDecoder().decode(c):null}}function xp(e){let t=fp(e);if(!t)throw Error(`Invalid fig-kiwi container`);return{schemaDeflated:t.schemaDeflated,dataRaw:t.dataRaw,figKiwiVersion:t.version}}function Sp(e){let t=new Uint8Array(e),n=Ud(t);if(n){let e=n.slice(2).find(hp)??null;return{...xp(t),images:[],thumbnailPNG:e,metaJSON:null}}let r=_p(hd(t,{filter:({name:e})=>vp(e)})),i=hd(t,r?{filter:({name:e})=>!vp(e)}:void 0),a=r??_p(i);if(!a)throw Error(`No canvas data found in .fig file. Entries: ${Object.keys(i).join(`, `)}`);let o=Object.entries(i).filter(([e])=>e.startsWith(`images/`)&&e!==`images/`).map(([e,t])=>[e.slice(7),t]);return{...xp(a),images:o,thumbnailPNG:i[`thumbnail.png`]??null,metaJSON:Object.hasOwn(i,`meta.json`)?new TextDecoder().decode(i[`meta.json`]):null}}function Cp(e){let t={"canvas.fig":[Wd(e.schemaDeflated,e.kiwiData,e.figKiwiVersion),{level:0}],"thumbnail.png":[e.thumbnailPNG,{level:0}],"meta.json":new TextEncoder().encode(e.metaJSON)};for(let n of e.images??[])t[n.name]=[n.data,{level:0}];return md(t)}function wp(e){return(e??[]).map(G).join(`/`)}function Tp(e,t){let n=new Set(t.removed.map(wp)),r=e.filter(e=>!n.has(wp(e.guidPath?.guids))),i=new Map(r.map((e,t)=>[wp(e.guidPath?.guids),t]));for(let e of t.entries){let t=wp(e.path),n=i.get(t),a={...n===void 0?{guidPath:{guids:e.path}}:r[n],...structuredClone(e.set)};for(let t of e.unset)Reflect.deleteProperty(a,t);n===void 0?(i.set(t,r.length),r.push(a)):r[n]=a}return r}function Ep(e,t){let n={...e,...structuredClone(t.set)};for(let e of t.unset)Reflect.deleteProperty(n,e);let r=nu(n);return t.symbolOverrides&&r&&(n.symbolData={...r,symbolOverrides:Tp(r.symbolOverrides??[],t.symbolOverrides)}),t.derivedSymbolData&&(n.derivedSymbolData=Tp(iu(n),t.derivedSymbolData)),n}let Dp=new Set([`VARIABLE`,`VARIABLE_SET`]);function Op(e){return e?G(e):void 0}function kp(e){return`sessionID`in e&&`localID`in e&&typeof e.sessionID==`number`&&typeof e.localID==`number`}function Ap(e){let t=0,n=e=>{if(!(!e||typeof e!=`object`||ArrayBuffer.isView(e))){if(Array.isArray(e)){for(let t of e)n(t);return}kp(e)&&(e.sessionID===0||e.sessionID===1)&&(t=Math.max(t,e.localID));for(let t of Object.values(e))n(t)}};return n(e),t}function jp(e){return{recordIds:e.records.flatMap(e=>e.guid?[G(e.guid)]:[]),blobCount:e.blobCount,nextLocalId:Ap(e.records)+1,imageHashes:[...e.imageHashes],documentId:Op(e.records.find(e=>e.type===`DOCUMENT`)?.guid)??null}}function Mp(e){return{id:Op(e.guid),parent:Op(e.parentIndex?.guid),type:e.type,parentIndex:e.parentIndex,value:e}}let Np=e=>!!e.type&&Dp.has(e.type);function Pp(e,t,n){let r=new Map;for(let t of e){if(!t.id||!t.parent)continue;let e=r.get(t.parent)??[];e.push(t.id),r.set(t.parent,e)}let i=new Set,a=t.map(G);for(let e=a.pop();e!==void 0;e=a.pop())if(!(i.has(e)||n.has(e))){i.add(e);for(let t of r.get(e)??[])a.push(t)}return i}function Fp(e,t){let n=[],r=new Set,i=new Map,a=n=>!!n&&!r.has(n)&&e.has(n)&&!t.has(n),o=e=>{if(a(e.parent)){i.set(e.parent,[...i.get(e.parent)??[],e]);return}if(n.push(e),!e.id)return;r.add(e.id);let t=i.get(e.id)??[];i.delete(e.id);for(let e of t)o(e)};return{emit:o,emitted:e=>r.has(e),finish(){for(let e of i.values())for(let t of e)n.push(t);return n}}}function Ip(e,t){let n=new Map;for(let r of e){let e=r.parentIndex?.position,i=Np(r)&&!(r.id&&t.has(r.id));!r.parent||!e||i||e>(n.get(r.parent)??``)&&n.set(r.parent,e)}return n}function Lp(e,t){let n=Ip(e,t);for(let r of e){if(!Np(r)||r.value instanceof Uint8Array)continue;let e=r.value,i=r.id?t.get(r.id):void 0;if(i)e.parentIndex=structuredClone(i);else if(r.parent&&e.parentIndex){let t=Yl(n.get(r.parent)??null,null);e.parentIndex={...e.parentIndex,position:t},n.set(r.parent,t)}}}function Rp(e,t,n,r){let i=new Map((t.fields??[]).map(e=>[G(e.guid),e])),a=[...i].flatMap(([e,t])=>`parentIndex`in t.set?[e]:[]),o=Pp(e,t.removed,new Set([...n.keys(),...a]));for(let t of e){if(!t.id||n.has(t.id)||o.has(t.id))continue;let e=i.get(t.id);e&&n.set(t.id,Mp(Ep(r(t.value),e)))}return o}function zp(e,t,n){let r=new Map;for(let e of t.records){let t=Mp(e);t.id&&r.set(t.id,t)}let i=Rp(e,t,r,n),a=new Set(e.flatMap(e=>e.id??[])),o=new Map,s=Fp(r,a);for(let n of e){if(n.id&&i.has(n.id))continue;let e=n.id?r.get(n.id):void 0;if(t.replaceVariables&&Np(n)){n.id&&o.set(n.id,n.parentIndex),e&&s.emit(e);continue}s.emit(e??n)}for(let e of r.values())e.id&&!s.emitted(e.id)&&!a.has(e.id)&&s.emit(e);let c=s.finish();return t.replaceVariables&&Lp(c,o),c}function Bp(e){if(e===null)throw Error(`Kiwi field without a type`);return e}function Vp(e,t){let n=e[`decode${t}`];if(typeof n!=`function`)throw Error(`No Kiwi decoder for ${t}`);return n}function Hp(e,t,n,r,i){let a=t.fieldsById(n),o={id:void 0,parent:void 0,type:void 0,parentIndex:void 0};for(let n=r.readVarUint();n!==0;n=r.readVarUint()){let s=a.get(n);if(!s)throw Error(`Attempted to parse invalid message`);let c=s.isArray?``:s.name;if(c===`guid`)o.guid=Vp(e,Bp(s.type))(r),o.id=Op(o.guid);else if(c===`parentIndex`){let t=Vp(e,Bp(s.type))(r);o.parentIndex=t,o.parent=Op(t?.guid)}else c===`type`?o.type=e[Bp(s.type)]?.[r.readVarUint()]:c===`symbolData`&&i?o.symbolData=Vp(e,Bp(s.type))(r):t.skipField(s,r)}return o}function Up(e,t,n,r=!1){let i=t.fieldsById(`Message`),a=new ao(n),o={parts:[],records:[],blobs:[],hasBlobs:!1};for(;;){let s=a.offset,c=a.readVarUint();if(c===0)break;let l=i.get(c);if(!l)throw Error(`Attempted to parse invalid message`);let u=Bp(l.type),d=l.name===`nodeChanges`&&l.isArray,f=l.name===`blobs`&&l.isArray;if(!d&&!f){t.skipField(l,a),o.parts.push({kind:`bytes`,bytes:n.subarray(s,a.offset)});continue}for(let i=a.readVarUint();i>0;i--){let i=a.offset;if(d){let s=Hp(e,t,u,a,r);o.records.push({...s,value:n.subarray(i,a.offset)})}else t.skipValue(u,a),o.blobs.push(n.subarray(i,a.offset))}o.hasBlobs||=f,o.parts.push({kind:d?`records`:`blobs`,fieldId:c,type:u})}if(o.records.length===0)throw Error(`No nodes found in .fig file`);return o}function Wp(e){let t=Xo(new ao(td(e)));return{codec:qo(t),skipper:Oo(t)}}function Gp(e){let t=new ao;return t.writeVarUint(e),t.toUint8Array().slice()}function Kp(e,t,n){let r=e[`encode${t}`];if(typeof r!=`function`)throw Error(`No Kiwi encoder for ${t}`);let i=r(n);if(!i)throw Error(`Encoding ${t} produced nothing`);return i.slice()}function qp(e){let t=0;for(let n of e)t+=n.byteLength;let n=new Uint8Array(t),r=0;for(let t of e)n.set(t,r),r+=t.byteLength;return n}function Jp(e,t,n){let{codec:r,skipper:i}=Wp(e),a=Up(r,i,t),o=a.parts.find(e=>e.kind===`records`),s=zp(a.records,n,e=>{if(o?.kind!==`records`)throw Error(`The archive has no records`);return Vp(r,o.type)(new ao(e))}),c=e=>[...a.blobs,...n.blobs.map(t=>Kp(r,e,{bytes:t}))],l=[],u=(e,t)=>{l.push(Gp(e),Gp(t.length));for(let e of t)l.push(e)};for(let e of a.parts)e.kind===`bytes`?l.push(e.bytes):e.kind===`blobs`?u(e.fieldId,c(e.type)):u(e.fieldId,s.map(t=>t.value instanceof Uint8Array?t.value:Kp(r,e.type,t.value)));if(!a.hasBlobs&&n.blobs.length>0){let e=i.definition(`Message`).fields.find(e=>e.name===`blobs`);if(!e)throw Error(`The archive schema has no blobs`);u(e.value,c(Bp(e.type)))}return l.push(Gp(0)),qp(l)}function Yp(e,t,n){let r=Sp(e),i=Jp(r.schemaDeflated,r.dataRaw,t),a=new Set(r.images.map(([e])=>e));return Cp({schemaDeflated:r.schemaDeflated,kiwiData:i,thumbnailPNG:n.thumbnailPNG,metaJSON:n.metaJSON,images:[...r.images.map(([e,t])=>({name:`images/${e}`,data:t})),...n.images.filter(e=>!a.has(e.name.replace(/^images\//,``)))],figKiwiVersion:r.figKiwiVersion})}function Xp(e,t){let n=new Map,r=new Map,i=(e,t)=>{if(!e)return;let n=r.get(e)??[];n.push(t),r.set(e,n)};for(let t of e){let e=Op(t.guid);if(e&&(n.set(e,t),t.type===`INSTANCE`)){i(Op(nu(t)?.symbolID),e);for(let n of ru(t))i(Op(n.overriddenSymbolID),e)}}let a=(e,t)=>{let r=new Set;for(let i=n.get(e);i;){let e=Op(i.guid);if(!e||r.has(e))return;if(r.add(e),i.type===t)return e;let a=Op(i.parentIndex?.guid);i=a?n.get(a):void 0}},o=new Set,s=new Set,c=[...t];for(let e=c.pop();e!==void 0;e=c.pop())if(!s.has(e)){s.add(e);for(let t of r.get(e)??[]){let e=a(t,`CANVAS`);e&&o.add(e);let n=a(t,`SYMBOL`);n&&c.push(n)}}return[...o]}function Zp(e,t){let n=Sp(e),{codec:r,skipper:i}=Wp(n.schemaDeflated);return Xp(Up(r,i,n.dataRaw,!0).records.map(e=>({guid:e.guid,parentIndex:e.parentIndex,type:e.type,symbolData:e.symbolData})),t)}function Qp(e,t,n,r=new Map){let i=new Map;for(let e of n)e.type===`INSTANCE`&&p(e.instanceOverrides,(t,n)=>{if(n!==`width`&&n!==`height`)return;let r=t||e.id,a=i.get(r)??new Set;a.add(n),i.set(r,a)});for(let a of n){let n=$s(a.boundVariables,r.get(a.id)??1,a.variableBindingScales);e.updateNode(a.id,{variableBindingScales:n});for(let r in a.boundVariables){if((r===`width`||r===`height`)&&t.has(a.id)||i.get(a.id)?.has(r))continue;let o=a.boundVariables[r],s=e.variables.get(o);if(!s)continue;let c=e.getNodeVariableModeId(a.id,s.collectionId),l=e.resolveVariable(o,c);if(typeof l!=`number`)continue;let u=ec(r,r===`opacity`?l:l*(n[r]??1));u&&e.updateNode(a.id,u)}}}function $p(e,t){for(let n of t){let t=Rn(e,n);(t.fills||t.strokes)&&e.updateNode(n.id,t)}}function em(e,t){for(let n of t){if(n.type!==`TEXT`)continue;let t=n.boundVariables.text;if(!t)continue;let r=Fn(e.resolveVariableForNode(n.id,t));r===void 0||r===n.text||e.updateNode(n.id,{text:r})}}function tm(e){let t=[],n=(r,i)=>{let a=e.materialized.nodes.get(r);if(!a)throw Error(`Missing checkpoint occurrence`);t.push({path:i,nodeId:a.id,mainComponentId:r.mainComponentId});let o=new Set;for(let e of r.children){if(o.has(e.sourceId))throw Error(`Ambiguous checkpoint child ${e.sourceId}`);o.add(e.sourceId),n(e,[...i,e.sourceId])}};return n(e.occurrence,[]),{rootId:e.materialized.root.id,nodes:t}}function nm(e,t,n){let r=e.getNode(n.rootId);if(!r)throw Error(`Missing resumed component ${n.rootId}`);let i=new Map,a=(t,n)=>{i.set(n.join(`/`),t);for(let r of e.getChildren(t.id)){let e=r.source.id;e&&a(r,[...n,e])}};a(r,[]);let o=new Map;for(let r of n.nodes){let n=t;for(let e of r.path){let t=n.children.filter(t=>t.sourceId===e);if(t.length!==1)throw Error(`Invalid checkpoint source path ${e}`);n=t[0]}let a=e.getNode(r.nodeId)??i.get(r.path.join(`/`));if(a){if(o.has(n)||n.mainComponentId!==r.mainComponentId)throw Error(`Invalid checkpoint occurrence ${r.nodeId}`);o.set(n,a)}}let s=e=>{if(o.has(e))for(let t of e.children)s(t)};if(s(t),o.get(t)!==r)throw Error(`Invalid checkpoint root`);return{occurrence:t,materialized:{root:r,nodes:o}}}function rm(e,t,n,r){let i=r??new Map;if(!r)for(let t of e.getAllNodes())for(let e of t.componentPropertyDefinitions)i.set(e.id,e.type);for(let e of n){let n;e.componentPropertyDefinitions.forEach((r,a)=>{if(i.set(r.id,r.type),r.type!==`INSTANCE_SWAP`)return;let o=t.get(r.defaultValue);o&&(n??=[...e.componentPropertyDefinitions],n[a]={...r,defaultValue:o})}),n&&(e.componentPropertyDefinitions=n)}for(let e of n){let n;for(let r in e.componentPropertyAssignments){if(i.get(r)!==`INSTANCE_SWAP`)continue;let a=t.get(e.componentPropertyAssignments[r]);a&&(n??={...e.componentPropertyAssignments},n[r]=a)}n&&(e.componentPropertyAssignments=n)}}function im(e,t){for(let n of t){if(n.type!==`COMPONENT`||!n.parentId||n.variantPropSpecs.length===0)continue;let t=e.getNode(n.parentId);if(t?.type!==`COMPONENT_SET`)continue;let r=new Map(t.componentPropertyDefinitions.map(e=>[e.id,e.name])),i={};for(let e of n.variantPropSpecs)i[r.get(e.propDefId)??e.propDefId]=e.value;e.updateNode(n.id,{componentPropertyValues:i})}}function am(e,t,n){let{graph:r}=e,i=new Set(r.nodes.keys()),a=new Map,o=new Set([r.rootId,...r.getPages(!0).map(e=>e.id)]);for(let n of[...t.contentIds,...t.ancestorIds]){let t=e.sources.get(n);t&&o.add(t)}for(let e of o){let t=r.getNode(e);t&&a.set(t,structuredClone(t))}let s=new Map(e.sources),c=new Map(e.components),l=new Map(e.componentIds),u=new Set(e.savedSizeNodes),d=e.nextImportedId;r.withBufferedEvents(()=>{try{n()}catch(t){for(let[e,t]of r.nodes)i.has(e)||(t.componentId&&r.instanceIndex.get(t.componentId)?.delete(e),r.nodes.delete(e));for(let[e,t]of a)if(e.componentId&&r.instanceIndex.get(e.componentId)?.delete(e.id),Object.assign(e,t),e.type===`INSTANCE`&&e.componentId){let t=r.instanceIndex.get(e.componentId)??new Set;t.add(e.id),r.instanceIndex.set(e.componentId,t)}e.sources=s,e.components=c,e.componentIds=l,e.savedSizeNodes=u,e.nextImportedId=d;for(let[e,t]of r.instanceIndex)t.size||r.instanceIndex.delete(e);throw r.clearAbsPosCache(),t}})}function om(e,t){let n=e.getNode(e.rootId);if(!n||!t)return;n.source.format=`fig`,n.pluginData=t.pluginData?.map(e=>({pluginId:e.pluginID,key:e.key,value:e.value}))??[],n.source.fig.rawNodeFields.strokeJoin=t.strokeJoin,n.source.fig.rawNodeFields.strokeWeight=t.strokeWeight;let r=oc(t,Ei.enabledLibraries);for(let t of r??[])e.enabledLibraries.set(t.libraryId,t)}let sm=new Set([`VISIBLE`,`TEXT_DATA`,`OVERRIDDEN_SYMBOL_ID`,`SLOT_CONTENT_ID`]);function cm(e){for(let t of e.componentPropDefs??[]){let e=t.varValue?.value;t.initialValue||!e||(t.initialValue=e.symbolIdValue?.guid?{guidValue:structuredClone(e.symbolIdValue.guid)}:structuredClone(e))}}function lm(e){cm(e);let t=e.parameterConsumptionMap,n=structuredClone(e.componentPropRefs??[]);for(let e of t?.entries??[]){let t=e.variableData?.value?.propRefValue?.defId;if(e.variableData?.dataType!==`PROP_REF`||!t||!e.variableField||!sm.has(e.variableField))continue;let r={defID:structuredClone(t),componentPropNodeField:e.variableField},i=n.findIndex(t=>t.componentPropNodeField===e.variableField);i===-1?n.push(r):n[i]=r}n.length&&(e.componentPropRefs=n)}function um(e){let t=new Map;for(let n of e){if(!n.guid||typeof n.key!=`string`)continue;let e=t.get(n.key)??new Map,r=typeof n.version==`string`?n.version:``,i=G(n.guid);if(e.has(r)&&e.get(r)!==i)throw Error(`Ambiguous resource ${n.key} version ${r}`);e.set(r,i),t.set(n.key,e)}return e=>{if(e?.guid)return G(e.guid);let n=e?.assetRef;if(!n)return;let r=t.get(n.key);return n.version?r?.get(n.version):r?.has(``)?r.get(``):r?.size===1?r.values().next().value:void 0}}let dm=[`styleIdForFill`,`styleIdForStrokeFill`,`styleIdForText`,`styleIdForEffect`,`styleIdForGrid`];function fm(e,t,n){let r=new Set;return ou(e,e=>{for(let i of[e,...e.textData?.styleOverrideTable??[]])for(let e of dm){let a=i[e];if(!a)continue;let o=a.guid?G(a.guid):t(a);o&&n.has(o)&&r.add(o)}}),r}function pm(e,t,n){for(let r of ru(e))n(r,[...t,...r.guidPath?.guids??[]]);for(let r of e.derivedSymbolData??[])n(r,[...t,...r.guidPath?.guids??[]])}function mm(e){return(t,n,r)=>{let i=(t,i,a)=>{if(!t?.assetRef||t.guid)return;let o=e(t);if(!o){r?.({sourceId:n,field:i,key:t.assetRef.key,path:structuredClone(a)});return}t.guid=Ga(o)},a=(e,t)=>{lm(e);for(let n of Gs(e))Bs(n.variableData,e=>i(e,n.variableField??`unknown`,t));for(let[n,r]of[[`fillPaints`,e.fillPaints],[`strokePaints`,e.strokePaints]])for(let e of r??[])i(e.colorVar?.value?.alias,n,t);let n=e.variableModeBySetMap;for(let e of n?.entries??[])i(e.variableSetID,`variableModeBySetMap`,t);for(let n of dm)i(e[n],n,t);for(let n of e.textData?.styleOverrideTable??[])a(n,t);pm(e,t,a)};a(t,[])}}function hm(e){let t=mm(um(e));return(e,n)=>t(e,e.guid?G(e.guid):`unknown`,n)}function gm(e,t,n,r=()=>!1){let i=n,a=new Map,o=e=>{if(e.mainComponentId===null){e.properties.type===`SYMBOL`&&a.set(e.sourceId,e);for(let t of e.children)o(t)}};for(let t of e)o(t);let s=[],c=new Set,l=new Set,u=e=>{let t=new Set,n=e;for(;n;){if(t.has(n))throw Error(`Cyclic source hierarchy at ${n}`);t.add(n);let e=i.get(n);if(!e)throw Error(`Missing source ancestor ${n}`);if(e.type===`CANVAS`)return n;n=pf(e)}throw Error(`Component ${e} has no source page`)},d=e=>{for(let t of Af(e))t.mainComponentId!==null&&f(t.mainComponentId),t.properties.type===`SYMBOL`&&f(t.sourceId)},f=e=>{if(c.has(e))return;if(r(e)){c.add(e);return}if(l.has(e))throw Error(`Cyclic component dependency ${e}`);l.add(e);let n=i.get(e);if(!n?.parentIndex?.guid)throw Error(`Missing component parent ${e}`);let o=u(e),f=a.get(e)??t(e);for(let e of f.children)d(e);s.push({sourceId:e,parentSourceId:G(n.parentIndex.guid),pageSourceId:o,occurrence:f}),c.add(e),l.delete(e)};for(let t of e)d(t);return s}var _m=class{source;decode;constructor(e,t){this.source=e,this.decode=t}get size(){return this.source.size}get(e){let t=this.source.get(e);return t===void 0?void 0:this.decode(t)}has(e){return this.source.has(e)}keys(){return this.source.keys()}*values(){for(let e of this.source.values())yield this.decode(e)}*entries(){for(let[e,t]of this.source)yield[e,this.decode(t)]}forEach(e){for(let[t,n]of this.entries())e(n,t,this)}[Symbol.iterator](){return this.entries()}};function vm(e,t,n){let r=new Set,i=e=>{e&&r.add(G(e))},a=e=>{i(e.value?.guidValue),i(e.varValue?.value?.symbolIdValue?.guid)};return ou(e,(e,o)=>{i(nu(e)?.symbolID),i(o?.overriddenSymbolID);for(let i of e.componentPropDefs??[])if(i.type===`INSTANCE_SWAP`&&a({value:i.initialValue,varValue:i.varValue}),i.type===`INSTANCE_SWAP`||i.type===`SLOT`)for(let e of i.preferredValues?.instanceSwapValues??[]){if(!e.key)continue;let i=t?.({assetRef:{key:e.key,version:e.version}});if(!i){if(!n)throw Error(`Unresolved preferred component ${e.key}`);n(e.key);continue}r.add(i)}for(let t of e.componentPropAssignments??[])a(t)}),r}function ym(e){let t=new Set;return ou(e,e=>{for(let n of e.componentPropAssignments??[]){let e=su(n.varValue?.value);e&&t.add(G(e))}}),t}function bm(e,t){if(t){for(let n of t)if(e.get(n)?.type!==`CANVAS`)throw Error(`Unknown page ${n}`)}}function xm(e,t,n,r){for(let i of t){let t=new Set([i]),a=e.get(i),o=a?pf(a):void 0;for(;o!==void 0;){if(t.has(o))throw Error(`Cyclic source hierarchy at ${o}`);if(t.add(o),n.has(o))break;if(n.add(o),a=e.get(o),!a){r.add(o);break}o=pf(a)}}}function Sm(e,t,n,r=e=>e){let i=um(e),{sources:a,children:o}=n,s=new Set(a.keys()),c=new Set,l=new Set,u=new Set,d=new Set,f=new Set,p=new Set,m=new Set,h=new Set;bm(a,t);let g=e.filter(e=>e.type===`CANVAS`&&(t?t.has(ff(e)??``):e.internalOnly!==!0)).flatMap(e=>ff(e)??[]);for(;g.length;){let e=g.pop();if(!e||c.has(e))continue;let t=a.get(e);if(!t){p.has(e)?f.add(e):m.has(e)?h.add(e):d.add(e);continue}c.add(e);let n=r(t),l=vm(n,i,e=>u.add(e));for(let e of l)p.add(e);let _=ym(n);for(let e of _)m.add(e);g.push(...(o.get(e)??[]).flatMap(e=>ff(e)??[]),...fm(n,i,s),...l,..._)}return xm(a,c,l,d),{contentIds:c,ancestorIds:l,missingIds:d,missingComponentIds:f,missingSlotContentIds:h,externalPreferredKeys:u}}function Cm(e,t){let n=e.componentPropDefs;n&&(e.componentPropDefs=n.map(e=>{if(!e.parentPropDefId)return e;let n=G(e.parentPropDefId);for(let r of t){let t=(r.componentPropDefs??[]).filter(e=>e.id&&G(e.id)===n);if(t.length>1)throw Error(`Ambiguous parent property ${n}`);if(t.length===1)return{...structuredClone(t[0]),...e}}throw Error(`Missing parent property ${n}`)}))}let wm=[`guid`,`parentIndex`,`type`,`phase`,`name`,`internalOnly`,`key`,`version`,`styleType`,`overrideKey`];function Tm(e,t){let n=bp(e,void 0,{NodeChange:wm});return{figKiwiVersion:n.figKiwiVersion,figSchemaDeflated:n.figSchemaDeflated,reader:jm(km(n.nodeChanges),t),blobs:n.blobs,images:n.images,records:n.nodeChanges}}function Em(e){let t=new Map;for(let n of e)if(n.guid&&typeof n.key==`string`){let e=G(n.guid);t.set(n.key,e),typeof n.version==`string`&&t.set(`${n.key}@${n.version}`,e)}return t}function Dm(e){return e.type===`VARIABLE`||e.type===`VARIABLE_SET`}function Om(e){let t=No(e);if(!t)throw Error(`Record header has no archive bytes to read it whole`);return dp([t]),t}function km(e){let t=e.filter(e=>e.phase!==`REMOVED`),n=hf(t),r=hm(t),i=Em(t),a=[];for(let e of t)r(Om(e),e=>a.push(e));let o=new Map,s=new _m(n.sources,e=>e.styleType?u(e):e),c=new Set,l=(e,t)=>{if(c.has(e))throw Error(`Cyclic component-property ancestry`);c.add(e);try{let a=Om(e);r(a);let o=[];for(let r=n.sources.get(pf(e)??``);r;r=n.sources.get(pf(r)??``))o.push(t(r));Cm(a,o);let c=e=>{bc(s,e,i);for(let t of ru(e))c(t)};return c(a),a}finally{c.delete(e)}},u=e=>{let t=o.get(e);return t||(t=l(e,u),o.set(e,t)),t};return{records:t,index:n,bindingDiagnostics:a,scope:()=>{let e=new Map,t=n=>{let r=o.get(n)??e.get(n);if(r)return r;let i=l(n,t);return e.set(n,i),i};return t},shared:u,interpreterIndex:()=>{let{sources:e,children:n}=hf(t.filter(e=>!Dm(e))),r=new WeakMap;return{sources:new _m(e,u),children:new _m(n,e=>{let t=r.get(e);return t||(t=e.map(u),r.set(e,t)),t})}}}}function Am(e){let t;return{records:e,get sourceInterpreter(){return t??=Xf(e.interpreterIndex()),t}}}function jm(e,t){let n=`sourceInterpreter`in e?e:Am(e),{records:r,index:i,bindingDiagnostics:a}=n.records,o=r,s=n.records.scope(),c=o.filter(Dm),l=Sm(o,t,i,s);if(l.missingIds.size)throw Error(`Missing reachable sources: ${[...l.missingIds].join(`, `)}`);let u=o.filter(e=>!Dm(e)&&(e.type===`CANVAS`||e.guid&&(l.contentIds.has(G(e.guid))||l.ancestorIds.has(G(e.guid))))).map(s),d=n.sourceInterpreter,f=Xf(hf(u)),p=o.filter(e=>e.type===`CANVAS`).toSorted(mf).map(e=>{if(!e.guid)throw Error(`Page has no GUID`);return{id:G(e.guid),name:e.name??``,position:e.parentIndex?.position??null,internalOnly:e.internalOnly===!0}}),m=new Set(p.map(e=>e.id));return{selectPages(e){return jm(n,e)},get sourceRecords(){return structuredClone(o.map(s))},get documentRecord(){let e=o.find(e=>e.type===`DOCUMENT`);return structuredClone(e&&s(e))},dependencyClosure:l,pages:p,get resources(){return structuredClone(c.map(s))},bindingDiagnostics:a,readPage(e,t={}){if(!m.has(e))throw Error(`Unknown page ${e}`);let n=f.page(e,t);return n.children=n.children.filter(e=>e.properties.isSlotContent!==!0),n},planComponents(e,t={},n){return gm(e,e=>d.component(e,t),i.sources,n)},readComponent:d.component}}function Mm(e,t){let{value:n,dataType:r,resolvedDataType:i}=e.variableData;if(!n)throw Error(`Missing variable value`);let a=r??i;if(a===`ALIAS`){let e=t(n.alias);if(!e)throw Error(`Unresolved variable alias`);return{aliasId:e}}if(a===`COLOR`&&n.colorValue)return structuredClone(n.colorValue);if(a===`BOOLEAN`&&n.boolValue!==void 0)return n.boolValue;if(a===`STRING`&&n.textValue!==void 0)return n.textValue;if(a===`FLOAT`&&n.floatValue!==void 0)return n.floatValue;throw Error(`Unsupported variable value ${a}`)}function Nm(e,t,n){let r=e.variableDataValues?.entries??[];if(!r.length)throw Error(`Missing mode values`);let i={};for(let e of r){let r=G(e.modeID);if(!t.includes(r))throw Error(`Unknown mode`);i[r]=Mm(e,n)}return i}function Pm(e,t,n){let r=(e,t)=>{if(!n)throw Error(`Unsupported document resource ${e.type}: ${t}`);n(structuredClone(e))};for(let n of t){if(n.type!==`VARIABLE_SET`)continue;let t=n.variableSetModes??[];if(!n.guid||t.length===0){r(n,`missing collection identity or modes`);continue}let i=Jd(fc(n)),a=Qd(n);e.addCollection({id:G(n.guid),name:n.name??`Variables`,modes:t.map(e=>{let t=G(e.id);return{modeId:t,name:e.name,condition:a[t],...e.sortPosition?{sortPosition:e.sortPosition}:{}}}),defaultModeId:G(t[0].id),variableIds:[],modeAttribute:$d(n),pluginData:i.length>0?i:void 0,key:typeof n.key==`string`?n.key:void 0,version:typeof n.version==`string`?n.version:void 0})}Fm(e,t,r)}function Fm(e,t,n){let r=um(t);for(let i of t){if(i.type!==`VARIABLE`)continue;let t=i.variableResolvedType,a=i.variableSetID?r(i.variableSetID):i.parentIndex?.guid&&G(i.parentIndex.guid),o=a&&e.variableCollections.get(a);if(!i.guid||!o||!a||t!==`COLOR`&&t!==`BOOLEAN`&&t!==`STRING`&&t!==`FLOAT`){n(i,`unresolved collection, identity or type`);continue}let s={};try{Object.assign(s,Nm(i,o.modes.map(e=>e.modeId),r))}catch(e){n(i,e instanceof Error?e.message:`Invalid mode value`);continue}let c=rf(i);e.addVariable({id:G(i.guid),name:i.name??`Variable`,type:t,collectionId:a,valuesByMode:s,...c,...Zd(i,s)})}}function Im(e,t,n){let{graph:r,checkpoint:i}=e,a=new Map;for(let[e,o]of i.components)a.set(e,nm(r,t.readComponent(e,n),o));return{graph:r,nextImportedId:i.nextImportedId??Bm(r),components:a,sources:new Map(i.sources),componentIds:new Map(i.componentIds),savedSizeNodes:new Set(i.savedSizeNodeIds)}}function Lm(e,t={},n){let r=Tm(e,new Set),i={...t,images:t.images??new Map(r.images)},a=n?Im(n,r.reader,i):Hm(r.reader,r.blobs,i);a.graph.figKiwiVersion=r.figKiwiVersion,a.graph.figSchemaDeflated=r.figSchemaDeflated;let o=new Set(n?.checkpoint.loadedPageIds),s;return{checkpoint(){return structuredClone({nextImportedId:a.nextImportedId,sources:[...a.sources],componentIds:[...a.componentIds],savedSizeNodeIds:[...a.savedSizeNodes],loadedPageIds:[...o],components:[...a.components].map(([e,t])=>[e,tm(t)])})},graph:a.graph,graphPageId(e){return r.reader.pages.some(t=>t.id===e)?a.sources.get(e):void 0},pages:r.reader.pages,archiveRecordInfo(){return s??=jp({records:r.records,blobCount:r.blobs.length,imageHashes:r.images.map(([e])=>e)}),s},loadPage(e){if(o.has(e))return;let t=r.reader.selectPages(new Set([e]));am(a,t.dependencyClosure,()=>{Hm(t,r.blobs,i,a),o.add(e)})},get loadedPageIds(){return new Set(o)}}}function Rm(e){let t=new Map;for(let n of e.getAllNodes())for(let e of n.componentPropertyDefinitions)t.set(e.id,e.type);return t}function zm(e,t){let n=!0,r=1,i=new Va(()=>n?`0:${r++}`:za());n=!1,om(i,e.documentRecord);for(let[e,n]of t.images??[])i.images.set(e,n.slice());i.applyImportedStateDuring(()=>Pm(i,e.resources,t.onUnsupportedResource),()=>`0:${r++}`);for(let e of i.getPages())i.deleteNode(e.id);return{graph:i,nextImportedId:r,sources:new Map,components:new Map,componentIds:new Map,savedSizeNodes:new Set}}function Bm(e){let t=3,n=[...e.nodes.keys(),...e.variables.keys(),...e.variableCollections.keys(),...[...e.variableCollections.values()].flatMap(e=>e.modes.map(e=>e.modeId))];for(let e of n)/^0:\d+$/.test(e)&&(t=Math.max(t,Number(e.slice(2))+1));return t}function Vm(e,t){e.preserveSourceMetadataDuring(()=>{for(let[n,r]of t){let t=e.getNode(n);if(!t)continue;let i=new Set(qa(e,t).flatMap(e=>e.source.editedFields)),a={};t.width!==r.width&&!i.has(`width`)&&(a.width=r.width),t.height!==r.height&&!i.has(`height`)&&(a.height=r.height),Object.keys(a).length>0&&e.updateNode(n,a)}})}function Hm(e,t,n,r){for(let t of e.bindingDiagnostics){if(!n.onUnresolvedBinding)throw Error(`Unresolved binding ${t.sourceId}: ${t.field}`);n.onUnresolvedBinding(t)}let i=e.pages.map(t=>e.readPage(t.id,n)),a=r??zm(e,n),o=e.planComponents(i,n,e=>a.components.has(e));return a.graph.applyImportedStateDuring(()=>Um(i,o,t,a,r!==void 0),()=>`0:${a.nextImportedId++}`)}function Um(e,t,n,r,i){let{graph:a,sources:o,components:s,savedSizeNodes:c,componentIds:l}=r,u=new Set(a.nodes.keys()),d=new Map,f=new Map,p=e=>{for(let[t,n]of e)t.derivedSize&&(c.add(n.id),f.set(n.id,{width:n.width,height:n.height})),t.layoutScale!==void 0&&d.set(n.id,t.layoutScale)},m=(e,t)=>{if(e.mainComponentId!==null)return;let r=o.get(e.sourceId);if(r){for(let t of e.children)m(t,r);return}let{nodeType:i,...s}=Cl(e.properties,n);if(i===`DOCUMENT`||i===`VARIABLE`)throw Error(`Unsupported scene type ${i}`);let c=a.createNode(i,t,s);o.set(e.sourceId,c.id),c.type===`COMPONENT`&&l.set(e.sourceId,c.id);for(let t of e.children)m(t,c.id)};for(let t of e)m(t,a.rootId);for(let e of t){if(s.has(e.sourceId))continue;let t=o.get(e.parentSourceId);if(!t)throw Error(`Unmaterialized component parent ${e.parentSourceId}`);let r=new Map,i=e=>{let t=o.get(e.sourceId),n=t?a.getNode(t):void 0;n&&r.set(e,n),e.mainComponentId===null&&e.children.forEach(i)};i(e.occurrence);let c=rp(a,t,e.occurrence,l,{blobs:n,sourceChildren:up(e.occurrence,s),existingNodes:r});p(c.nodes),lp(e.occurrence,c,s),s.set(e.sourceId,{occurrence:e.occurrence,materialized:c}),l.set(e.sourceId,c.root.id),o.set(e.sourceId,c.root.id)}let h=new Set,g=e=>{if(e.properties.type===`SYMBOL`)return;let t=o.get(e.sourceId);if(!t)throw Error(`Missing source container ${e.sourceId}`);let r=[];for(let c of e.children){if(i&&sp(c,a,s),c.mainComponentId!==null&&!o.has(c.sourceId)){let e=rp(a,t,c,l,{blobs:n,sourceChildren:up(c,s)});p(e.nodes),lp(c,e,s),i&&(Ja(a,e),e.root.componentId&&h.add(e.root.id)),o.set(c.sourceId,e.root.id)}else c.mainComponentId===null&&c.properties.type!==`SYMBOL`&&g(c);let e=o.get(c.sourceId);if(!e)throw Error(`Missing assembled child ${c.sourceId}`);r.push(e)}let c=a.getNode(t);c&&(c.childIds=[...r,...c.childIds.filter(e=>!r.includes(e))])};for(let t of e)g(t);for(let e of h)a.syncInstance(e);h.size>0&&Vm(a,f);for(let e of a.getAllNodes())u.has(e.id)||e.styleRuns.length===0||(e.styleRuns=ki(e.styleRuns,{variable:e=>e,style:e=>e,node:e=>o.get(e)??e}));let _=[...a.nodes.values()].filter(e=>!u.has(e.id));return r.definitionTypes??=Rm(a),rm(a,o,_,r.definitionTypes),a.preserveSourceMetadataDuring(()=>{im(a,_),Qp(a,c,_,d),$p(a,_),em(a,_)}),r}function Wm(e,t){return{original:()=>new Uint8Array(e.slice(0)),info:t,componentPages:t=>Zp(e,t),patch:(t,n)=>Yp(e,t,n)}}function Gm(e){let t=new Set(e.nodes.keys()),n=new Map,r=new Set,i=new Set,a={createNode:e.createNode.bind(e),createNodeWithId:e.createNodeWithId.bind(e),updateNode:e.updateNode.bind(e),deleteNode:e.deleteNode.bind(e)};function o(t,i){if(!t||r.has(t))return;let a=e.getNode(t);if(!a)return;let o=n.get(t)??{};n.set(t,o);for(let e of i)e in o||Object.assign(o,{[e]:structuredClone(a[e])})}return e.createNode=((e,t,n)=>{o(t,[`childIds`]);let i=a.createNode(e,t,n);return r.add(i.id),i}),e.createNodeWithId=((e,t,n,i)=>{o(n,[`childIds`]);let s=a.createNodeWithId(e,t,n,i);return r.add(s.id),s}),e.updateNode=((t,n)=>{let r=e.getNode(t);if(r){let e=Object.keys(n).filter(e=>!j(r[e],n[e]));e.length>0&&e.push(`source`),`componentId`in n&&e.push(`componentId`),(`fills`in n||`strokes`in n)&&e.push(`boundVariables`),o(t,e)}a.updateNode(t,n)}),e.deleteNode=(s=>{let c=e.getNode(s);o(c?.parentId,[`childIds`]);let l=c?[s]:[];for(;l.length>0;){let a=l.pop();if(!a)continue;let o=e.getNode(a);o&&l.push(...o.childIds),t.has(a)?i.add(a):(r.delete(a),n.delete(a))}a.deleteNode(s)}),{before:n,created:r,deleted:i,stop(){e.createNode=a.createNode,e.createNodeWithId=a.createNodeWithId,e.updateNode=a.updateNode,e.deleteNode=a.deleteNode}}}function Km(e,t,n){let r=[];for(let[n,i]of t.before){let a=e.getNode(n);if(!a||t.deleted.has(n))continue;let o={};for(let e of Object.keys(i))j(i[e],a[e])||Object.assign(o,{[e]:structuredClone(a[e])});Object.keys(o).length>0&&r.push([n,o])}return{created:[...t.created].map(t=>e.getNode(t)).filter(e=>e!==void 0).map(e=>[e.id,structuredClone(e)]),updated:r,deleted:[...t.deleted],instanceIndex:[...e.instanceIndex].map(([e,t])=>[e,[...t]]),populatedRootIds:[...n]}}let qm=new WeakMap;function Jm(e,t){let n=qm.get(e);n||(n=new Set(e.map(e=>JSON.stringify(e))),qm.set(e,n));let r=JSON.stringify(t);n.has(r)||(n.add(r),e.push(t))}function Ym(e){return{derivedBounds:!0,onUnresolvedProperty:t=>Jm(e,{kind:`property`,diagnostic:t}),onUnresolvedAssignment:t=>Jm(e,{kind:`assignment`,diagnostic:t}),onUnresolvedBinding:t=>Jm(e,{kind:`binding`,diagnostic:t}),onMissingComponent:t=>Jm(e,{kind:`component`,diagnostic:t}),onMissingSlotContent:t=>Jm(e,{kind:`slot-content`,diagnostic:t})}}function Xm(e,t=`all`){let n=[],r=Lm(e,Ym(n)),i=r.pages.map(e=>({sourceId:e.id,name:e.name,position:e.position,internalOnly:e.internalOnly})),a=new Map;for(let e of r.pages){let t=r.graphPageId(e.id);t&&a.set(t,e.id)}let o=()=>[...r.loadedPageIds].flatMap(e=>{let t=r.graphPageId(e);return t?[t]:[]});if(t===`all`)for(let e of i)e.internalOnly||r.loadPage(e.sourceId);else if(t===`first-page`){let e=i.find(e=>!e.internalOnly);e&&r.loadPage(e.sourceId)}return{session:r,diagnostics:n,checkpoint:()=>r.checkpoint(),graph:r.graph,pages:i,populate(e){let t=a.get(e);if(!t)throw Error(`Unknown graph page ${e}`);let n=!r.loadedPageIds.has(t),i=Gm(r.graph);try{return r.loadPage(t),{checkpoint:r.checkpoint(),populated:n,delta:Km(r.graph,i,o())}}finally{i.stop()}}}}let Zm,Qm,$m;function eh(e){$m?.postMessage(e)}function th(e){if(!Zm)throw Error(`FIG session has no retained reader`);let t=Zm.populate(e.pageId);eh({type:`population-result`,requestId:e.requestId,baseRevision:e.baseRevision,...t})}function nh(e){let{requestId:t}=e;try{if(!Qm)throw Error(`FIG session has no original archive`);if(e.type===`original-archive`){let e=Qm.original();$m?.postMessage({type:`original-archive-result`,requestId:t,bytes:e},[e.buffer])}else if(e.type===`archive-info`)eh({type:`archive-info-result`,requestId:t,info:Qm.info()});else if(e.type===`component-pages`)eh({type:`component-pages-result`,requestId:t,pageIds:Qm.componentPages(e.componentIds)});else{let n=Qm.patch(e.patch,e.input);$m?.postMessage({type:`patch-archive-result`,requestId:t,bytes:n},[n.buffer])}}catch(e){eh({type:`archive-error`,requestId:t,error:e instanceof Error?e.message:String(e)})}}function rh(e){try{if(e.type===`original-archive`||e.type===`archive-info`||e.type===`component-pages`||e.type===`patch-archive`){nh(e);return}if(e.type===`dispose`){Zm=void 0,Qm=void 0,eh({type:`disposed`}),$m?.close(),$m=void 0,self.close();return}if(e.type===`cancel`)return;if(e.type===`retire`){Zm=void 0;return}th(e)}catch(t){eh({type:`population-error`,requestId:e.type===`populate`?e.requestId:void 0,error:t instanceof Error?t.message:String(t)})}}self.onmessage=e=>{let t=e.data;$m=t.port,$m.onmessage=e=>rh(e.data),$m.start();let n=t.buffer.slice(0);try{let e=Xm(t.buffer,t.options?.populate),r=e.session.archiveRecordInfo();Qm=Wm(n,()=>r),eh({type:`page-manifest`,pages:e.pages}),Zm=t.options?.populate===`first-page`||t.options?.populate===`none`?e:void 0,eh({type:`graph`,graph:Ha(e.graph),checkpoint:e.checkpoint(),archiveInfo:r})}catch(e){eh({type:`graph`,error:e instanceof Error?e.message:String(e)})}}})();