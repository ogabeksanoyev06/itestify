import{b as I,a as O}from"./entry.ZVZ_3oFo.js";import{r as P,a as C,b as S,c as V,d as j,e as B,f as L,_ as M}from"./SelectScrollDownButton.vue.BIfPfX8G.js";import{a as R,g as A,c as G,w as J,_ as T}from"./index.C47UTDiz.js";import{d as Q,c as K,G as o,L as y,M as n,m as t,u as a,N as W,J as X,a as d,o as Y,H as f,R as r,F as b,I as g,U as _,V as x}from"./swiper-vue.Cb-HU16S.js";import{t as w}from"./testService.BAeGR1DA.js";import"./api.BrGyU9uH.js";const Z=Q({__name:"Checkbox",props:{defaultChecked:{type:Boolean},checked:{type:[Boolean,String]},disabled:{type:Boolean},required:{type:Boolean},name:{},value:{},id:{},asChild:{type:Boolean},as:{},class:{}},emits:["update:checked"],setup($,{emit:m}){const p=$,v=m,h=K(()=>{const{class:i,...u}=p;return u}),c=R(h,v);return(i,u)=>(o(),y(a(J),X(a(c),{class:a(G)("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",p.class)}),{default:n(()=>[t(a(A),{class:"flex h-full w-full items-center justify-center text-current"},{default:n(()=>[W(i.$slots,"default",{},()=>[t(a(P),{class:"h-4 w-4"})])]),_:3})]),_:3},16,["class"]))}}),ee={class:"py-8"},ae={class:"container"},se={class:"flex flex-wrap gap-2 border-b border-border pb-8"},ne={class:"mt-6"},te=r("h4",{class:"text-base font-semibold mb-4"},"Mavzuni tanlang",-1),le={class:"flex flex-col space-y-2"},oe=["for","innerHTML"],re={class:"grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6"},ce={class:"flex justify-center mt-6"},pe={__name:"index",setup($){const{$toast:m}=O(),p=I(),v=d([]),h=d([]),c=d([]),i=d(5),u=d("beginner"),k=d(null),N=d([{id:5,name:5},{id:10,name:10},{id:15,name:15},{id:20,name:20},{id:25,name:25},{id:30,name:30}]),U=d([{id:"beginner",name:"Oson",disabled:!1},{id:"medium",name:"O'rta",disabled:!0},{id:"advanced",name:"Qiyin",disabled:!0}]);function q(s){k.value=s,c.value=[],E(s)}async function D(){try{const s=await w.sciences();v.value=s}catch(s){console.error("Error fetching user:",s)}finally{}}async function E(s){try{const l=await w.subjects(s);h.value=l}catch(l){console.error("Error fetching user:",l)}finally{}}function H(s){c.value.includes(s)?c.value=c.value.filter(l=>l!==s):c.value.push(s)}async function z(){let s={};s.subject_list=c.value,s.science_id=k.value,s.test_score=u.value,s.test_count=i.value;try{const l=await w.sciencesTest(s);l.code===500?m.error(l.message):p.push({path:"/test"})}catch(l){m.error(l.response.data.message)}finally{}}return Y(()=>{D()}),(s,l)=>(o(),f("div",ee,[r("div",ae,[r("div",se,[(o(!0),f(b,null,g(v.value,e=>(o(),y(a(T),{key:e.id,onClick:F=>q(e.id),variant:e.id===k.value?"":"outline"},{default:n(()=>[_(x(e.name),1)]),_:2},1032,["onClick","variant"]))),128))]),r("div",ne,[te,r("div",le,[(o(!0),f(b,null,g(h.value,e=>(o(),f("div",{class:"flex items-center space-x-4",key:e.id},[t(a(Z),{id:e.id,checked:c.value.includes(e.id),"onUpdate:checked":F=>H(e.id)},null,8,["id","checked","onUpdate:checked"]),r("label",{for:e.id,class:"text-sm cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",innerHTML:e.name},null,8,oe)]))),128))])]),r("div",re,[r("div",null,[t(a(M),{modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=e=>i.value=e)},{default:n(()=>[t(a(C),null,{default:n(()=>[t(a(S),{placeholder:"Savollar sonini tanlang"})]),_:1}),t(a(V),null,{default:n(()=>[t(a(j),null,{default:n(()=>[t(a(B),null,{default:n(()=>[_("Savollar sonini tanlang")]),_:1}),(o(!0),f(b,null,g(N.value,e=>(o(),y(a(L),{key:e.id,value:e.id},{default:n(()=>[_(x(e.name),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),r("div",null,[t(a(M),{modelValue:u.value,"onUpdate:modelValue":l[1]||(l[1]=e=>u.value=e)},{default:n(()=>[t(a(C),null,{default:n(()=>[t(a(S),{placeholder:"Darajani tanlang"})]),_:1}),t(a(V),null,{default:n(()=>[t(a(j),null,{default:n(()=>[t(a(B),null,{default:n(()=>[_("Darajani tanlang")]),_:1}),(o(!0),f(b,null,g(U.value,e=>(o(),y(a(L),{key:e.id,value:e.id,disabled:e.disabled},{default:n(()=>[_(x(e.name),1)]),_:2},1032,["value","disabled"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),r("div",ce,[t(a(T),{size:"lg",onClick:z},{default:n(()=>[_("Testni boshlash")]),_:1})])])]))}};export{pe as default};