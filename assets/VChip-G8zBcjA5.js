import{p as W,I as O,ax as ge,q as X,x as Se,z as be,A as R,C as S,a0 as Ce,V as xe,a as n,W as Ie,_ as ze,K as Pe,n as ce,y as re,B as Ve,E as M,G as ve,ab as ee,v as Ae,s as we,P as le,Q as Re,aB as _e,F as ae}from"./index-PlU_dLXX.js";import{n as Y,t as j,ae as de,a7 as fe,w as te,x as pe,af as ne,h as _,v as me,l as Te,o as Oe,p as Be,a8 as Ee,q as Ge,ag as Fe,s as Me,R as De,a1 as Le,Y as He,z as $e,a2 as qe,Z as Ke,ah as We,aa as Xe,ai as Ye,$ as je,aj as Ne,G as D,i as se}from"./VTextField-dWZ06wBF.js";function ie(e){const i=Math.abs(e);return Math.sign(e)*(i/((1/.501-2)*(1-i)+1))}function ue(e){let{selectedElement:m,containerSize:i,contentSize:c,isRtl:o,currentScrollOffset:p,isHorizontal:u}=e;const r=u?m.clientWidth:m.clientHeight,a=u?m.offsetLeft:m.offsetTop,v=o&&u?c-a-r:a,d=i+p,f=r+v,x=r*.4;return v<=p?p=Math.max(v-x,0):d<=f&&(p=Math.min(p-(d-f-x),c-i)),p}function Ue(e){let{selectedElement:m,containerSize:i,contentSize:c,isRtl:o,isHorizontal:p}=e;const u=p?m.clientWidth:m.clientHeight,r=p?m.offsetLeft:m.offsetTop,a=o&&p?c-r-u/2-i/2:r+u/2-i/2;return Math.min(c-i,Math.max(0,a))}const Qe=Symbol.for("vuetify:v-slide-group"),he=W({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Qe},nextIcon:{type:O,default:"$next"},prevIcon:{type:O,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...Y(),...ge(),...j(),...de({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),oe=X()({name:"VSlideGroup",props:he(),emits:{"update:modelValue":e=>!0},setup(e,m){let{slots:i}=m;const{isRtl:c}=Se(),{displayClasses:o,mobile:p}=be(e),u=fe(e,e.symbol),r=R(!1),a=R(0),v=R(0),d=R(0),f=S(()=>e.direction==="horizontal"),{resizeRef:x,contentRect:T}=te(),{resizeRef:h,contentRect:z}=te(),t=S(()=>u.selected.value.length?u.items.value.findIndex(l=>l.id===u.selected.value[0]):-1),b=S(()=>u.selected.value.length?u.items.value.findIndex(l=>l.id===u.selected.value[u.selected.value.length-1]):-1);if(Ce){let l=-1;xe(()=>[u.selected.value,T.value,z.value,f.value],()=>{cancelAnimationFrame(l),l=requestAnimationFrame(()=>{if(T.value&&z.value){const s=f.value?"width":"height";v.value=T.value[s],d.value=z.value[s],r.value=v.value+1<d.value}if(t.value>=0&&h.value){const s=h.value.children[b.value];t.value===0||!r.value?a.value=0:e.centerActive?a.value=Ue({selectedElement:s,containerSize:v.value,contentSize:d.value,isRtl:c.value,isHorizontal:f.value}):r.value&&(a.value=ue({selectedElement:s,containerSize:v.value,contentSize:d.value,isRtl:c.value,currentScrollOffset:a.value,isHorizontal:f.value}))}})})}const P=R(!1);let C=0,B=0;function E(l){const s=f.value?"clientX":"clientY";B=(c.value&&f.value?-1:1)*a.value,C=l.touches[0][s],P.value=!0}function L(l){if(!r.value)return;const s=f.value?"clientX":"clientY",g=c.value&&f.value?-1:1;a.value=g*(B+C-l.touches[0][s])}function y(l){const s=d.value-v.value;a.value<0||!r.value?a.value=0:a.value>=s&&(a.value=s),P.value=!1}function I(){x.value&&(x.value[f.value?"scrollLeft":"scrollTop"]=0)}const V=R(!1);function H(l){if(V.value=!0,!(!r.value||!h.value)){for(const s of l.composedPath())for(const g of h.value.children)if(g===s){a.value=ue({selectedElement:g,containerSize:v.value,contentSize:d.value,isRtl:c.value,currentScrollOffset:a.value,isHorizontal:f.value});return}}}function G(l){V.value=!1}function F(l){var s;!V.value&&!(l.relatedTarget&&((s=h.value)!=null&&s.contains(l.relatedTarget)))&&k()}function $(l){h.value&&(f.value?l.key==="ArrowRight"?k(c.value?"prev":"next"):l.key==="ArrowLeft"&&k(c.value?"next":"prev"):l.key==="ArrowDown"?k("next"):l.key==="ArrowUp"&&k("prev"),l.key==="Home"?k("first"):l.key==="End"&&k("last"))}function k(l){var s,g,Q,Z,J;if(h.value)if(!l)(s=Ie(h.value)[0])==null||s.focus();else if(l==="next"){const w=(g=h.value.querySelector(":focus"))==null?void 0:g.nextElementSibling;w?w.focus():k("first")}else if(l==="prev"){const w=(Q=h.value.querySelector(":focus"))==null?void 0:Q.previousElementSibling;w?w.focus():k("last")}else l==="first"?(Z=h.value.firstElementChild)==null||Z.focus():l==="last"&&((J=h.value.lastElementChild)==null||J.focus())}function A(l){const s=a.value+(l==="prev"?-1:1)*v.value;a.value=ze(s,0,d.value-v.value)}const ke=S(()=>{let l=a.value>d.value-v.value?-(d.value-v.value)+ie(d.value-v.value-a.value):-a.value;a.value<=0&&(l=ie(-a.value));const s=c.value&&f.value?-1:1;return{transform:`translate${f.value?"X":"Y"}(${s*l}px)`,transition:P.value?"none":"",willChange:P.value?"transform":""}}),q=S(()=>({next:u.next,prev:u.prev,select:u.select,isSelected:u.isSelected})),K=S(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!p.value;case!0:return r.value||Math.abs(a.value)>0;case"mobile":return p.value||r.value||Math.abs(a.value)>0;default:return!p.value&&(r.value||Math.abs(a.value)>0)}}),N=S(()=>Math.abs(a.value)>0),U=S(()=>d.value>Math.abs(a.value)+v.value);return pe(()=>n(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!f.value,"v-slide-group--has-affixes":K.value,"v-slide-group--is-overflowing":r.value},o.value,e.class],style:e.style,tabindex:V.value||u.selected.value.length?-1:0,onFocus:F},{default:()=>{var l,s,g;return[K.value&&n("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!N.value}],onClick:()=>N.value&&A("prev")},[((l=i.prev)==null?void 0:l.call(i,q.value))??n(ne,null,{default:()=>[n(_,{icon:c.value?e.nextIcon:e.prevIcon},null)]})]),n("div",{key:"container",ref:x,class:"v-slide-group__container",onScroll:I},[n("div",{ref:h,class:"v-slide-group__content",style:ke.value,onTouchstartPassive:E,onTouchmovePassive:L,onTouchendPassive:y,onFocusin:H,onFocusout:G,onKeydown:$},[(s=i.default)==null?void 0:s.call(i,q.value)])]),K.value&&n("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!U.value}],onClick:()=>U.value&&A("next")},[((g=i.next)==null?void 0:g.call(i,q.value))??n(ne,null,{default:()=>[n(_,{icon:c.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:u.selected,scrollTo:A,scrollOffset:a,focus:k}}}),ye=Symbol.for("vuetify:v-chip-group"),Ze=W({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Pe},...he(),...Y(),...de({selectedClass:"v-chip--selected"}),...j(),...ce(),...me({variant:"tonal"})},"VChipGroup");X()({name:"VChipGroup",props:Ze(),emits:{"update:modelValue":e=>!0},setup(e,m){let{slots:i}=m;const{themeClasses:c}=re(e),{isSelected:o,select:p,next:u,prev:r,selected:a}=fe(e,ye);return Ve({VChip:{color:M(e,"color"),disabled:M(e,"disabled"),filter:M(e,"filter"),variant:M(e,"variant")}}),pe(()=>{const v=oe.filterProps(e);return n(oe,ve(v,{class:["v-chip-group",{"v-chip-group--column":e.column},c.value,e.class],style:e.style}),{default:()=>{var d;return[(d=i.default)==null?void 0:d.call(i,{isSelected:o,select:p,next:u,prev:r,selected:a.value})]}})}),{}}});const Je=W({activeClass:String,appendAvatar:String,appendIcon:O,closable:Boolean,closeIcon:{type:O,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:O,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:ee(),onClickOnce:ee(),...Te(),...Y(),...Oe(),...Be(),...Ee(),...Ge(),...Fe(),...Me(),...j({tag:"span"}),...ce(),...me({variant:"tonal"})},"VChip"),al=X()({name:"VChip",directives:{Ripple:De},props:Je(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,m){let{attrs:i,emit:c,slots:o}=m;const{t:p}=Ae(),{borderClasses:u}=Le(e),{colorClasses:r,colorStyles:a,variantClasses:v}=He(e),{densityClasses:d}=$e(e),{elevationClasses:f}=qe(e),{roundedClasses:x}=Ke(e),{sizeClasses:T}=We(e),{themeClasses:h}=re(e),z=we(e,"modelValue"),t=Xe(e,ye,!1),b=Ye(e,i),P=S(()=>e.link!==!1&&b.isLink.value),C=S(()=>!e.disabled&&e.link!==!1&&(!!t||e.link||b.isClickable.value)),B=S(()=>({"aria-label":p(e.closeLabel),onClick(y){y.stopPropagation(),z.value=!1,c("click:close",y)}}));function E(y){var I;c("click",y),C.value&&((I=b.navigate)==null||I.call(b,y),t==null||t.toggle())}function L(y){(y.key==="Enter"||y.key===" ")&&(y.preventDefault(),E(y))}return()=>{const y=b.isLink.value?"a":e.tag,I=!!(e.appendIcon||e.appendAvatar),V=!!(I||o.append),H=!!(o.close||e.closable),G=!!(o.filter||e.filter)&&t,F=!!(e.prependIcon||e.prependAvatar),$=!!(F||o.prepend),k=!t||t.isSelected.value;return z.value&&le(n(y,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":C.value,"v-chip--filter":G,"v-chip--pill":e.pill},h.value,u.value,k?r.value:void 0,d.value,f.value,x.value,T.value,v.value,t==null?void 0:t.selectedClass.value,e.class],style:[k?a.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:b.href.value,tabindex:C.value?0:void 0,onClick:E,onKeydown:C.value&&!P.value&&L},{default:()=>{var A;return[je(C.value,"v-chip"),G&&n(Ne,{key:"filter"},{default:()=>[le(n("div",{class:"v-chip__filter"},[o.filter?n(D,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},o.filter):n(_,{key:"filter-icon",icon:e.filterIcon},null)]),[[_e,t.isSelected.value]])]}),$&&n("div",{key:"prepend",class:"v-chip__prepend"},[o.prepend?n(D,{key:"prepend-defaults",disabled:!F,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},o.prepend):n(ae,null,[e.prependIcon&&n(_,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&n(se,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),n("div",{class:"v-chip__content"},[((A=o.default)==null?void 0:A.call(o,{isSelected:t==null?void 0:t.isSelected.value,selectedClass:t==null?void 0:t.selectedClass.value,select:t==null?void 0:t.select,toggle:t==null?void 0:t.toggle,value:t==null?void 0:t.value.value,disabled:e.disabled}))??e.text]),V&&n("div",{key:"append",class:"v-chip__append"},[o.append?n(D,{key:"append-defaults",disabled:!I,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},o.append):n(ae,null,[e.appendIcon&&n(_,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&n(se,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),H&&n("button",ve({key:"close",class:"v-chip__close",type:"button"},B.value),[o.close?n(D,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},o.close):n(_,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Re("ripple"),C.value&&e.ripple,null]])}}});export{al as V};
