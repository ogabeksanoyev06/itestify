import{u as F}from"./useTests.BlrOB1i_.js";import{r as H,a as S,b as j,c as B,d as V,e as L,f as M,_ as T}from"./SelectScrollDownButton.vue.kyx0ptKU.js";import{_ as N}from"./Button.vue.BZP-x1Gd.js";import{C as I,a as E,c as J,b as Q}from"./utils.FzJxwjWG.js";import{j as W,k as X,I as n,N as g,O as s,C as l,P as A,u as e,M as G,a as u,z as K,J as r,U as t,F as h,L as b,W as _,X as w,S as R}from"./swiper-vue.f8ijT8wh.js";import"./useApi.DC8F9R_R.js";import"./entry.T61pW6s4.js";import"./ChevronDownIcon.DweLdmrN.js";const Y=W({__name:"Checkbox",props:{defaultChecked:{type:Boolean},checked:{type:[Boolean,String]},disabled:{type:Boolean},required:{type:Boolean},name:{},value:{},id:{},asChild:{type:Boolean},as:{},class:{}},emits:["update:checked"],setup($,{emit:k}){const f=$,y=k,x=X(()=>{const{class:m,...i}=f;return i}),C=I(x,y);return(m,i)=>(n(),g(e(Q),G(e(C),{class:e(J)("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",f.class)}),{default:s(()=>[l(e(E),{class:"flex h-full w-full items-center justify-center text-current"},{default:s(()=>[A(m.$slots,"default",{},()=>[l(e(H),{class:"h-4 w-4"})])]),_:3})]),_:3},16,["class"]))}}),Z={class:"py-8"},ee={class:"container"},ae={class:"flex flex-wrap gap-2 border-b border-border pb-8"},se={class:"mt-6"},le=t("h4",{class:"text-base font-semibold mb-4"},"Mavzuni tanlang",-1),ne={class:"flex flex-col space-y-2"},te=["for","innerHTML"],de={class:"grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6"},oe={class:"flex justify-center mt-6"},ie={key:0,viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",class:"mr-2 h-4 w-4 animate-spin"},re=t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 12a9 9 0 1 1-6.219-8.56"},null,-1),ce=[re],ge={__name:"index",setup($){const{sciences:k,subjects:f,getSciences:y,getSubjects:x,startSciencesTest:C,loading:m}=F(),i=u(5),p=u("beginner"),v=u(null),o=u([]),U=u([{id:5,name:5},{id:10,name:10},{id:15,name:15},{id:20,name:20},{id:25,name:25},{id:30,name:30}]),q=u([{id:"beginner",name:"Oson",disabled:!1},{id:"medium",name:"O'rta",disabled:!0},{id:"advanced",name:"Qiyin",disabled:!0}]);function z(d){v.value=d,o.value=[],x(d)}function D(d){o.value.includes(d)?o.value=o.value.filter(c=>c!==d):o.value.push(d)}function O(){const d={subject_list:o.value,science_id:v.value,test_score:p.value,test_count:i.value};C(d)}return K(()=>{y()}),(d,c)=>(n(),r("div",Z,[t("div",ee,[t("div",ae,[(n(!0),r(h,null,b(e(k),a=>(n(),g(e(N),{key:a.id,variant:a.id===v.value?"":"outline",onClick:P=>z(a.id)},{default:s(()=>[_(w(a.name),1)]),_:2},1032,["variant","onClick"]))),128))]),t("div",se,[le,t("div",ne,[(n(!0),r(h,null,b(e(f),a=>(n(),r("div",{class:"flex items-center space-x-4",key:a.id},[l(e(Y),{id:a.id,checked:o.value.includes(a.id),"onUpdate:checked":P=>D(a.id)},null,8,["id","checked","onUpdate:checked"]),t("label",{for:a.id,class:"text-sm cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",innerHTML:a.name},null,8,te)]))),128))])]),t("div",de,[t("div",null,[l(e(T),{modelValue:i.value,"onUpdate:modelValue":c[0]||(c[0]=a=>i.value=a)},{default:s(()=>[l(e(S),null,{default:s(()=>[l(e(j),{placeholder:"Savollar sonini tanlang"})]),_:1}),l(e(B),null,{default:s(()=>[l(e(V),null,{default:s(()=>[l(e(L),null,{default:s(()=>[_("Savollar sonini tanlang")]),_:1}),(n(!0),r(h,null,b(U.value,a=>(n(),g(e(M),{key:a.id,value:a.id},{default:s(()=>[_(w(a.name),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),t("div",null,[l(e(T),{modelValue:p.value,"onUpdate:modelValue":c[1]||(c[1]=a=>p.value=a)},{default:s(()=>[l(e(S),null,{default:s(()=>[l(e(j),{placeholder:"Darajani tanlang"})]),_:1}),l(e(B),null,{default:s(()=>[l(e(V),null,{default:s(()=>[l(e(L),null,{default:s(()=>[_("Darajani tanlang")]),_:1}),(n(!0),r(h,null,b(q.value,a=>(n(),g(e(M),{key:a.id,value:a.id,disabled:a.disabled},{default:s(()=>[_(w(a.name),1)]),_:2},1032,["value","disabled"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),t("div",oe,[l(e(N),{size:"lg",onClick:O,disabled:!v.value||!o.value.length>0||!p.value||!i.value},{default:s(()=>[e(m)?(n(),r("svg",ie,ce)):R("",!0),_(" Testni boshlash ")]),_:1},8,["disabled"])])])]))}};export{ge as default};
