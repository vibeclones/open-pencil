import{c as e}from"./constants-ZM8gixXD.js";import{y as t}from"./paragraphs-PUgiadhN.js";import{s as n}from"./color-BYvyypcm.js";import{A as r,M as i,h as a,i as o,r as s}from"./geometry-D03E49cB.js";import{ht as c,ut as l}from"./pieces-x2MTlBo6.js";import{I as u,t as d}from"./fields-DsBp3Qnr.js";import{a as f,i as ee,l as te,o as p}from"./render-bounds-3QoixXyM.js";var m=1e4,h=2147483647;function g(e){return e===null||e===1/0||(e??0)>=2147483647}function _(e){let t=e.count===void 0?e.numSections:e.count;return g(t)?h:t??1}var ne=Object.freeze({r:1,g:0,b:0,a:.1});function v(e){return e.pattern===`GRID`||e.pattern===`ROWS`||e.pattern===`COLUMNS`?e.pattern:e.axis===`Y`?`ROWS`:`COLUMNS`}function y(e){return e.alignment??e.type??`STRETCH`}function re(e){return e.type!==void 0||e.alignment!==void 0}function ie(e){return{...e.color??ne}}var b=v,x=y;function ae(e,t){let n=_(t);if(n===2147483647){let n=t.sectionSize??0;if(x(t)===`STRETCH`||n<=0)return 0;let r=t.gutterSize??0,i=x(t)===`CENTER`?0:t.offset??0;return Math.min(m,Math.max(0,Math.floor((e-i+r)/(n+r))))}return Number.isFinite(n)?Math.min(m,Math.max(0,Math.floor(n))):0}function oe(e,t,n){let r=t.sectionSize??0;if(x(t)!==`STRETCH`)return r;let i=t.gutterSize??0;return(e-(t.offset??0)*2-Math.max(0,n-1)*i)/n}function se(e,t,n,r){let i=t.gutterSize??0,a=t.offset??0,o=r*n+Math.max(0,r-1)*i;return x(t)===`CENTER`?(e-o)/2+a:x(t)===`MAX`?e-o-a:a}function S(e,t){if(t.visible===!1||b(t)===`GRID`)return[];let n=b(t)===`ROWS`?`y`:`x`,r=n===`x`?e.width:e.height,i=ae(r,t),a=oe(r,t,i);if(i<=0||a<=0)return[];let o=se(r,t,a,i),s=a+(t.gutterSize??0);return Array.from({length:i},(e,t)=>{let r=o+t*s;return{axis:n,start:r,end:r+a}})}function ce(e,t){if(t.visible===!1)return[];let n=b(t),r=[];if(n===`GRID`){let n=t.sectionSize??0;if(n<=0)return r;for(let i=0,a=t.offset??0;a<=e.width&&i<1e4;i++,a+=n)r.push({axis:`x`,position:a});for(let i=0,a=t.offset??0;a<=e.height&&i<1e4;i++,a+=n)r.push({axis:`y`,position:a});return r}let i=S(e,t);for(let e of i)r.push({axis:e.axis,position:e.start},{axis:e.axis,position:e.end});return r}var le=new Set([`width`,`height`]),ue=new Set([`x`,`y`,`rotation`,`flipX`,`flipY`]),C=[`textData`,`derivedTextData`,`textUserLayoutVersion`,`textExplicitLayoutVersion`],w=[`strokeGeometry`,`vectorData`],de={fillStyleId:[`styleIdForFill`],strokeStyleId:[`styleIdForStrokeFill`],textStyleId:[`styleIdForText`],effectStyleId:[`styleIdForEffect`],gridStyleId:[`styleIdForGrid`],fills:[`fillPaints`,`backgroundPaints`,`backgroundColor`],strokes:[`strokePaints`],effects:[`effects`],blendMode:[`blendMode`],layoutGrids:[`layoutGrids`],guides:[`guides`],exportSettings:[`exportSettings`],status:[`sectionStatusInfo`],cornerRadius:[`cornerRadius`],independentCorners:[`rectangleCornerRadiiIndependent`],topLeftRadius:[`rectangleTopLeftCornerRadius`,`rectangleCornerRadiiIndependent`],topRightRadius:[`rectangleTopRightCornerRadius`,`rectangleCornerRadiiIndependent`],bottomLeftRadius:[`rectangleBottomLeftCornerRadius`,`rectangleCornerRadiiIndependent`],bottomRightRadius:[`rectangleBottomRightCornerRadius`,`rectangleCornerRadiiIndependent`],cornerSmoothing:[`cornerSmoothing`],borderTopWeight:[`borderTopWeight`,...w],borderRightWeight:[`borderRightWeight`,...w],borderBottomWeight:[`borderBottomWeight`,...w],borderLeftWeight:[`borderLeftWeight`,...w],independentStrokeWeights:[`borderStrokeWeightsIndependent`,`borderTopWeight`,`borderRightWeight`,`borderBottomWeight`,`borderLeftWeight`,...w],strokeWeight:[`strokeWeight`,...w],strokeAlign:[`strokeAlign`,...w],strokeJoin:[`strokeJoin`,...w],strokeMiterLimit:[`miterLimit`,...w],strokeCap:[...w],dashPattern:[...w],text:[...C],styleRuns:[...C],fontSize:[`fontSize`,...C],fontFamily:[`fontName`,`fontVersion`,...C],fontWeight:[`semanticWeight`,...C],italic:[`semanticItalic`,...C],fontStyle:[`fontName`,`fontVersion`,...C],textAlignHorizontal:[`textAlignHorizontal`,...C],textAlignVertical:[`textAlignVertical`,...C],lineHeight:[`lineHeight`,...C],letterSpacing:[`letterSpacing`,`textTracking`,...C],textAutoResize:[`textAutoResize`,...C],textDecorationStyle:[`textDecorationStyle`,...C],textDecorationThickness:[`textDecorationThickness`,...C],textDecorationFills:[`textDecorationFillPaints`,...C],textUnderlineOffset:[`textUnderlineOffset`,...C],leadingTrim:[`leadingTrim`,...C],maxLines:[`maxLines`,...C],textParagraphs:[...C],listSpacing:[`listSpacing`,...C],paragraphSpacing:[`paragraphSpacing`,...C],paragraphIndent:[`paragraphIndent`,...C],hangingList:[`hangingList`,...C],fontVariations:[`fontVariations`,...C],opticalSizeFromFontSize:[`detachOpticalSizeFromFontSize`,...C],fontFeatures:[`fontVariantCommonLigatures`,`fontVariantContextualLigatures`,`toggledOnOTFeatures`,`toggledOffOTFeatures`,...C],minWidth:[`minSize`],minHeight:[`minSize`],maxWidth:[`maxSize`],maxHeight:[`maxSize`],vectorNetwork:[`vectorData`,`fillGeometry`,`strokeGeometry`],fillGeometry:[`fillGeometry`,`vectorData`],strokeGeometry:[`strokeGeometry`,`vectorData`],isMask:[`mask`],maskType:[`maskType`],maskIsOutline:[`maskIsOutline`],componentPropertyDefinitions:[`componentPropDefs`,`stateGroupPropertyValueOrders`],componentPropertyReferences:[`componentPropRefs`],componentPropertyAssignments:[`componentPropAssignments`],componentPropertyValues:[`variantPropSpecs`],variantPropSpecs:[`variantPropSpecs`]},fe=new Set;function T(e=[]){return e.length===0?fe:new Set(e.flatMap(e=>de[e]??[]))}function E(e){let t=T(e.source.editedFields??[]);return t.size===0?e.source.fig.rawNodeFields:Object.fromEntries(Object.entries(e.source.fig.rawNodeFields).filter(([e])=>!t.has(e)))}function pe(e){let t=e.source.editedFields??[];return{...e.source.fig,rawNodeFields:E(e),rawSize:t.some(e=>le.has(e))?null:e.source.fig.rawSize,rawTransform:t.some(e=>ue.has(e))?null:e.source.fig.rawTransform}}function me(e,t){if(!T(e.source.editedFields??[]).has(t))return e.source.fig.rawNodeFields[t]}var D=new Set([`SECTION`,`FRAME`,`COMPONENT`,`COMPONENT_SET`,`INSTANCE`]),he=new Set([`CANVAS`,`SECTION`]);function O(e,t){let n=t.parentId?e.getNode(t.parentId):void 0;return D.has(t.type)&&n!==void 0&&he.has(n.type)}function ge(e,t){let n=[];return e.closest(t.id,t=>t.type===`CANVAS`||t.id===e.rootId?!0:(n.push(t),!1)),n.reverse()}function k(e,t){return ge(e,t).find(t=>t.status!==null&&O(e,t))}function _e(e,t){if(!D.has(t.type))return`type`;if(!O(e,t))return`parent`;let n=k(e,t);return n&&n.id!==t.id?`ancestor`:`ok`}function A(e,t){return t.status&&k(e,t)?.id===t.id?t.status:null}var{statuses:ve}=d,j={READY_FOR_DEV:`ready-for-dev`,COMPLETED:`completed`},M={id:j.READY_FOR_DEV,name:`Ready for dev`,color:n(`#14ae5c`)},N={id:j.COMPLETED,name:`Completed`,color:n(`#8a8a8a`)},P={handoff:{preset:`handoff`,states:[M,N]},simple:{preset:`simple`,states:[{id:`draft`,name:`Draft`,color:n(`#b3b3b3`)},{id:`in-progress`,name:`In progress`,color:n(`#0d99ff`)},{...N,name:`Done`,color:n(`#14ae5c`)}]},review:{preset:`review`,states:[{id:`draft`,name:`Draft`,color:n(`#b3b3b3`)},{id:`in-review`,name:`In review`,color:n(`#9747ff`)},{id:`changes-requested`,name:`Changes requested`,color:n(`#f24822`)},{id:`approved`,name:`Approved`,color:n(`#0d99ff`)},M,{...N,name:`Shipped`}]}};function ye(e){return u(e.getNode(e.rootId)?.pluginData,ve)??P.handoff}function F(e,t){return e.states.find(e=>e.id===t)??P.handoff.states.find(e=>e.id===t)}function be(e){return e===j.READY_FOR_DEV?`READY_FOR_DEV`:e===j.COMPLETED?`COMPLETED`:null}var I=new WeakMap;function L(e){let t=e.getNode(e.rootId)?.pluginData,n=I.get(e);if(n&&n.entries===t)return n.workflow;let r=ye(e);return I.set(e,{entries:t,workflow:r}),r}function xe(e,t){let n=A(e,t);return n===null?null:F(L(e),n)??null}var Se=[];function R(e,t,n){let r={name:e,kind:t,source:`${n.map(e=>e.trim()).join(`

`)}\n`};return Se.push(r),r}function z(e,...t){return R(e,`shader`,t)}function Ce(e,...t){return R(e,`blender`,t)}var B=`// The outline both glass shaders read: a box, an ellipse filling the box, or up to SEGMENTS
// segments grouped CHUNK to a bounding circle, so a pixel can skip a chunk whose circle it is
// outside of.
const int SEGMENTS = 128;
const int CHUNK = 8;
const int CHUNKS = SEGMENTS / CHUNK;

uniform float2 origin;
uniform float2 size;
uniform float4 radii;
uniform float isBox;
uniform float isEllipse;
uniform float depth;
uniform float segmentCount;
uniform float4 segments[SEGMENTS];
uniform float4 chunks[CHUNKS];

float boxDistance(float2 q, float2 h, float r) {
  float2 k = abs(q) - h + r;
  return length(max(k, 0.0)) + min(max(k.x, k.y), 0.0) - r;
}

// The point of the ellipse with semi-axes ab, centred on the origin, nearest to p, by four
// fixed-point steps against the ellipse's evolute from the quadrant's middle; within about a
// thousandth of a unit of the exact distance, measured up to a 40:1 ellipse.
float2 nearestOnEllipse(float2 p, float2 ab) {
  // Off the exact centre, where a circle's every direction is nearest and none can be chosen.
  float2 q = max(abs(p), float2(1e-4));
  float2 t = float2(0.70710678);
  float2 stretch = float2(ab.x * ab.x - ab.y * ab.y, ab.y * ab.y - ab.x * ab.x) / ab;
  for (int i = 0; i < 4; i++) {
    float2 evolute = stretch * t * t * t;
    float2 toCurve = ab * t - evolute;
    float2 toPoint = q - evolute;
    t = clamp((toPoint * length(toCurve) / max(length(toPoint), 1e-6) + evolute) / ab, 0.0, 1.0);
    t /= max(length(t), 1e-6);
  }
  return ab * t * float2(p.x < 0.0 ? -1.0 : 1.0, p.y < 0.0 ? -1.0 : 1.0);
}

// (distance in from the outline, inward direction), negative distance outside a box or an
// ellipse. A box's direction bends around corners rounded by at least bend; an ellipse's is its
// inward normal at the nearest point.
float3 geometry(float2 p, float bend) {
  if (isEllipse > 0.5) {
    float2 ab = max(size * 0.5, float2(1e-3));
    float2 q = p - origin - size * 0.5;
    float2 nearest = nearestOnEllipse(q, ab);
    float2 k = q / ab;
    float s = (dot(k, k) < 1.0 ? 1.0 : -1.0) * length(q - nearest);
    return float3(s, -normalize(nearest / (ab * ab)));
  }
  if (isBox > 0.5) {
    float2 h = size * 0.5;
    float2 q = p - origin - h;
    float r = q.x < 0.0 ? (q.y < 0.0 ? radii.x : radii.w) : (q.y < 0.0 ? radii.y : radii.z);
    float s = -boxDistance(q, h, r);
    float b = min(max(r, bend), min(h.x, h.y));
    float2 k = abs(q) - (h - b);
    float2 sq = float2(q.x < 0.0 ? -1.0 : 1.0, q.y < 0.0 ? -1.0 : 1.0);
    float2 dir = (k.x > 0.0 && k.y > 0.0)
      ? -normalize(k) * sq
      : (k.x > k.y ? float2(-sq.x, 0.0) : float2(0.0, -sq.y));
    return float3(s, dir);
  }
  // Each chunk of segments lies in a circle (centre, radius). Beyond depth + 8 nothing refracts
  // or lights, so a pixel that far from every circle skips the outline, and otherwise it walks
  // only the chunks that may hold the nearest segment.
  float nearest = 1e9;
  float farthest = 1e9;
  for (int c = 0; c < CHUNKS; c++) {
    if (chunks[c].z < 0.0) break;
    float centre = length(p - chunks[c].xy);
    nearest = min(nearest, centre - chunks[c].z);
    farthest = min(farthest, centre + chunks[c].z);
  }
  if (nearest >= depth + 8.0) return float3(nearest, 0.0, 0.0);
  float best = 1e9;
  float2 closest = p;
  for (int c = 0; c < CHUNKS; c++) {
    if (chunks[c].z < 0.0) break;
    if (length(p - chunks[c].xy) - chunks[c].z <= farthest) {
      for (int k = 0; k < CHUNK; k++) {
        if (float(c * CHUNK + k) >= segmentCount) break;
        float2 a = segments[c * CHUNK + k].xy;
        float2 b = segments[c * CHUNK + k].zw;
        float2 ab = b - a;
        float t = clamp(dot(p - a, ab) / max(dot(ab, ab), 1e-6), 0.0, 1.0);
        float2 point = a + ab * t;
        float dist = length(p - point);
        if (dist < best) { best = dist; closest = point; }
      }
    }
  }
  float2 away = p - closest;
  float len = length(away);
  return float3(best, len > 1e-4 ? away / len : float2(0.0));
}
`,we=`uniform float2 axis;
uniform float intensity;

float light(float3 g) {
  float facing = dot(-g.yz, axis);
  float spread = clamp(2.2 * (abs(facing) - 0.44), 0.0, 1.0);
  float rim = intensity * (facing < 0.0 ? 1.08 : 0.71) * spread * max(0.0, 1.0 - g.x);
  float band = 12.0 / 255.0 * intensity * facing * max(0.0, 1.0 - g.x / (0.65 * depth));
  return rim + band;
}

half4 main(float2 p) {
  half4 color = backdrop.eval(p);
  float3 g = shape(p, 0.0);
  if (g.x >= 1.5) return half4(clamp(color.rgb + light(g) * color.a, 0.0, color.a), color.a);
  half3 sum = half3(0.0);
  float count = 0.0;
  for (int i = 0; i < 8; i++) {
    float s = g.x + (float(i) + 0.5) / 16.0 - 0.25;
    if (s < 0.0) continue;
    sum += clamp(color.rgb + light(float3(s, g.yz)) * color.a, 0.0, color.a);
    count += 1.0;
  }
  return half4(count > 0.0 ? sum / count : color.rgb, color.a);
}
`,Te=`// The map shape() reads: geometry() at each pixel's centre, a pixel being 1 / mapScale layer
// units from mapOrigin, stored signed so it blends smoothly across the outline: the distance
// negative outside and the direction always pointing in, in a half-float image.
uniform float2 mapOrigin;
uniform float mapScale;

// 1 inside the outline by the nonzero rule, -1 outside.
float side(float2 p) {
  int winding = 0;
  for (int i = 0; i < SEGMENTS; i++) {
    if (float(i) >= segmentCount) break;
    float2 a = segments[i].xy;
    float2 b = segments[i].zw;
    if ((a.y <= p.y) != (b.y <= p.y)) {
      float cross = (b.x - a.x) * (p.y - a.y) - (p.x - a.x) * (b.y - a.y);
      if (b.y > a.y && cross > 0.0) winding += 1;
      if (b.y < a.y && cross < 0.0) winding -= 1;
    }
  }
  return winding != 0 ? 1.0 : -1.0;
}

half4 main(float2 position) {
  float2 p = mapOrigin + position / mapScale;
  float3 g = geometry(p, 0.0);
  float sign = side(p);
  return half4(sign * g.x, sign * g.yz, 1.0);
}
`,Ee=`uniform float refraction;
uniform float dispersion;

float edgeRamp(float s) { return max(0.19, clamp(1.12 * (s - 0.12), 0.0, 1.0)); }

float roundedProfile(float s) {
  float u = max(0.0, 1.0 - 2.0 * (abs(s) + 0.5) / depth);
  return depth * pow(u, 1.4);
}

float displacement(float s) {
  if (isBox > 0.5) {
    float t = clamp(1.0 - (s - 1.0) / depth, 0.0, 1.0);
    return depth * pow(t, 3.5) * edgeRamp(s);
  }
  float sum = 0.0;
  float weights = 0.0;
  for (int k = -4; k <= 4; k++) {
    float t = float(k) * 1.75;
    float w = exp(-t * t / 24.5);
    sum += w * roundedProfile(s + t);
    weights += w;
  }
  return sum / weights * edgeRamp(s);
}

half4 refracted(float2 p, float2 dir, float d) {
  if (dispersion <= 0.0) return backdrop.eval(p + d * dir);
  half4 red = backdrop.eval(p + d * (1.0 + 0.1 * dispersion) * dir);
  half4 green = backdrop.eval(p + d * dir);
  half4 blue = backdrop.eval(p + d * (1.0 - 0.1 * dispersion) * dir);
  return half4(red.r, green.g, blue.b, green.a);
}

// Near the outline the displacement ramps steeply, so a pixel there averages eight points
// spread over half a layer pixel along the normal: one device pixel at 2×, which is how
// exports and high-density screens draw. Points outside the outline are left to the clip's
// antialiasing.
half4 main(float2 p) {
  float3 g = shape(p, depth);
  float2 dir = g.yz;
  if (g.x >= 1.5) return refracted(p, dir, refraction * displacement(g.x));
  half4 sum = half4(0.0);
  float count = 0.0;
  for (int i = 0; i < 8; i++) {
    float t = (float(i) + 0.5) / 16.0 - 0.25;
    float s = g.x + t;
    if (s < 0.0) continue;
    sum += refracted(p + t * dir, dir, refraction * displacement(s));
    count += 1.0;
  }
  return count > 0.0 ? sum / count : refracted(p, dir, refraction * displacement(g.x));
}
`,V=`// Where a pixel sits against the outline, as geometry() gives it: a box or an ellipse exactly,
// segments read from a map of geometry() the renderer draws once per outline and scale, when it
// has one.
uniform shader backdrop;
uniform shader geometryMap;
uniform float useMap;
uniform float2 mapOrigin;
uniform float mapScale;

float3 shape(float2 p, float bend) {
  if (isBox > 0.5 || isEllipse > 0.5 || useMap < 0.5) return geometry(p, bend);
  // Back from the map's signed form to geometry()'s: the distance to the outline, and the
  // direction away from its nearest point, which outside the outline points out.
  float3 m = geometryMap.eval((p - mapOrigin) * mapScale).rgb;
  float len = length(m.yz);
  float2 inward = len > 1e-4 ? m.yz / len : float2(0.0);
  return float3(abs(m.x), m.x >= 0.0 ? inward : -inward);
}
`,H=8,De=128/H,Oe=z(`glass refraction`,B,V,Ee),ke=z(`glass light`,B,V,we),Ae=z(`glass geometry map`,B,Te);function je(e,t){let n=new Float32Array(512);return n.set(e.segments.subarray(0,n.length)),{origin:e.origin,size:e.size,radii:e.radii,isBox:+(e.kind===`box`),isEllipse:+(e.kind===`ellipse`),depth:t,segmentCount:Math.min(128,e.segments.length/4),segments:n,chunks:Me(e.segments)}}function Me(e){let t=[];for(let n=0;n<De;n++){let r=n*H*4,i=Math.min(e.length,r+H*4);if(r>=i){t.push(0,0,-1,0);continue}let[a,o,s,c]=[1/0,1/0,-1/0,-1/0];for(let t=r;t<i;t+=2)a=Math.min(a,e[t]),s=Math.max(s,e[t]),o=Math.min(o,e[t+1]),c=Math.max(c,e[t+1]);let l=(a+s)/2,u=(o+c)/2,d=0;for(let t=r;t<i;t+=2)d=Math.max(d,Math.hypot(e[t]-l,e[t+1]-u));t.push(l,u,d,0)}return t}function Ne(e){let t=e*Math.PI/180;return[-Math.sin(t),Math.cos(t)]}function U(e,t,n){return Math.max(.001,Math.min(e,Math.min(t,n)/2))}function W(t){return t.glass??e}var Pe=.6;function G(e){return Math.hypot(Pe,o(e.radius))}function K(e,t){return U(W(t).depth,e.width,e.height)*1.1+a(G(t))}function q(e){return f(e,{minX:0,minY:0,maxX:0,maxY:0})}function Fe(e,t){let n=c(t,e),r=ee(t,`drawn`);return r?f(n,r):q(n)}function J(e,t,n,r){return p(e,t,n,{reach:`drawn`,preview:r})??q(n)}function Ie(e,t){let n=null;for(let i of t){let t=e.getNode(i);t?.visible&&(n=r(n,J(e,t,c(t,e))))}return n}function Le(e){return e[6]===0&&e[7]===0&&e[8]===1}function Y(e,t){if(!Le(e))return f(e,t);let n=(t.minX+t.maxX)/2,r=(t.minY+t.maxY)/2,i=(t.maxX-t.minX)/2,a=(t.maxY-t.minY)/2,o=e[0]*n+e[1]*r+e[2],s=e[3]*n+e[4]*r+e[5],c=Math.abs(e[0])*i+Math.abs(e[1])*a,l=Math.abs(e[3])*i+Math.abs(e[4])*a;return{minX:o-c,minY:s-l,maxX:o+c,maxY:s+l}}function Re(e){return e.effects.find(e=>e.visible&&(e.type===`LAYER_BLUR`||e.type===`FOREGROUND_BLUR`))}function X(e,t){let n=new Set,r=e.getNode(t)?.parentId;for(;r&&!n.has(r);)n.add(r),r=e.getNode(r)?.parentId;return n}function Z(e,t){for(let n of[t,...X(e.graph,t)])e.byNode.delete(n),e.previewed?.byNode.delete(n)}var Q={minX:0,minY:0,maxX:0,maxY:0},ze=class{graphs=new WeakMap;observed=new Set;generation=0;ownAxes(e,n,r){if(e.getNode(n.id)!==n)return J(e,n,t.identity(),r);if(!r){let t=this.entryOf(e).byNode.get(n.id);if(t!==void 0)return t??Q}let i=this.measuredIn(e,r),a=i.get(n);return a===void 0&&(a=p(e,n,t.identity(),{reach:`drawn`,preview:r,measured:i}),i.set(n,a)),a??Q}clear(){this.generation++}forget(e){for(let t of this.observed){let n=t.deref();n&&Z(n,e)}}dispose(){for(let e of this.observed)e.deref()?.unobserve();this.observed.clear(),this.generation++}measuredIn(e,t){let n=this.entryOf(e),r=t?this.previewedOf(e,n,t):null,i=e=>r?.ancestorIds.has(e.id)?r.byNode:n.byNode;return{get:e=>i(e).get(e.id),set:(e,t)=>{i(e).set(e.id,t)}}}previewedOf(e,t,n){let r=t.previewed;if(r&&r.nodeId===n.nodeId&&r.angle===n.angle)return r;let i={nodeId:n.nodeId,angle:n.angle,ancestorIds:X(e,n.nodeId),byNode:new Map};return t.previewed=i,i}entryOf(e){let t=this.graphs.get(e)??this.watch(e);return t.generation!==this.generation&&(t.byNode.clear(),t.previewed=null,t.generation=this.generation),t}watch(e){let t={graph:e,generation:this.generation,byNode:new Map,previewed:null,unobserve:()=>void 0},n=e=>{Z(t,e.id),t.previewed=null},r=e.observeNodeChanges({before:n,created:n,previewed:e=>{Z(t,e.id)}});return t.unobserve=()=>{r()},this.graphs.set(e,t),this.forgetCollectedGraphs(),this.observed.add(new WeakRef(t)),t}forgetCollectedGraphs(){for(let e of this.observed)e.deref()||this.observed.delete(e)}};function Be(e,t){return l(te(e,t))}function Ve(e,t,n,r){let i=Y(Be(n,r),e.ownAxes(t,n,r));return{x:i.minX,y:i.minY,width:i.maxX-i.minX,height:i.maxY-i.minY}}function $(e,t){let n=0;for(let e of t.effects)e.visible&&(e.type===`GLASS`&&(n=Math.max(n,K(t,e))),e.type===`BACKGROUND_BLUR`&&(n=Math.max(n,s(i(e)))));if(n===0)return 0;let r=c(t,e);return n*Math.max(Math.hypot(r[0],r[3]),Math.hypot(r[1],r[4]))}function He(e,t,n){if(!n)return $(e,t);let r=0,i=[t];for(;i.length>0;){let t=i.pop();if(t?.visible){r=Math.max(r,$(e,t));for(let n of t.childIds){let t=e.getNode(n);t&&i.push(t)}}}return r}export{pe as A,S as B,be as C,A as D,D as E,y as F,ie as I,_ as L,h as M,re as N,_e as O,g as P,v as R,L as S,xe as T,K as _,J as a,j as b,Fe as c,Oe as d,G as f,W as g,Ne as h,Y as i,me as j,E as k,Ae as l,je as m,He as n,Ve as o,U as p,Ie as r,Re as s,ze as t,ke as u,Ce as v,F as w,P as x,z as y,ce as z};