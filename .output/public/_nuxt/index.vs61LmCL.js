import{r as M,a as g,b as v,c as x,d as w,e as k,f as n,_ as B}from"./SelectScrollDownButton.vue.C3j1_HRC.js";import{a as z,g as N,c as O,w as P,_ as S}from"./index.DNzJp8SU.js";import{d as V,e as E,o as i,c as C,w as s,h as a,u as e,r as L,m as A,j as o,y as D,a as m,f as c,F as $,x as j,z as F,l as t,t as G}from"./entry.CM4UmRmh.js";import{t as T}from"./testService.CsfTGfCs.js";import"./authService.BBKLY34u.js";import"./tokenService.Cdn6yuQ_.js";const H=V({__name:"Checkbox",props:{defaultChecked:{type:Boolean},checked:{type:[Boolean,String]},disabled:{type:Boolean},required:{type:Boolean},name:{},value:{},id:{},asChild:{type:Boolean},as:{},class:{}},emits:["update:checked"],setup(y,{emit:u}){const d=y,p=u,h=E(()=>{const{class:f,...l}=d;return l}),b=z(h,p);return(f,l)=>(i(),C(e(P),A(e(b),{class:e(O)("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",d.class)}),{default:s(()=>[a(e(N),{class:"flex h-full w-full items-center justify-center text-current"},{default:s(()=>[L(f.$slots,"default",{},()=>[a(e(M),{class:"h-4 w-4"})])]),_:3})]),_:3},16,["class"]))}}),Q={class:"py-8"},q={class:"flex flex-wrap gap-3 border-b border-border pb-8"},U={class:"mt-6"},I=c("h4",{class:"text-base font-semibold mb-4"},"Mavzuni tanlang",-1),J={class:"flex flex-col space-y-2"},K=["for","innerHTML"],R={class:"grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6"},W=F('<div class="mt-6"><div class="relative overflow-x-auto my-6"><table class="w-full text-sm text-left rtl:text-right"><tbody><tr class="bg-primary text-white"><th scope="col" class="px-6 py-4">#</th><th scope="col" class="px-6 py-4">Tanlangan fan</th><th scope="col" class="px-6 py-4">Mavzu</th><th scope="col" class="px-6 py-4">Savollar soni</th><th scope="col" class="px-6 py-4">Qiyinchilik darajasi</th><th scope="col" class="px-6 py-4">Ball</th></tr><tr class="bg-white border-b hover:bg-gray-100 transition-all duration-300"><td class="px-6 py-4">1</td><td class="px-6 py-4">Ona tili</td><td class="px-6 py-4">Tenglamalar</td><td class="px-6 py-4">30</td><td class="px-6 py-4">Oson</td><td class="px-6 py-4">1</td></tr><tr class="text-white" style="background:linear-gradient(rgb(68, 137, 247) 0%, rgb(0, 78, 203) 100%);"><th colspan="3" class="px-6 py-4 text-center">Umumiy ball</th><th colspan="3" class="px-6 py-4 text-center">30</th></tr></tbody></table></div></div>',1),X={class:"flex justify-center mt-6"},ne={__name:"index",setup(y){const u=o([]),d=o([]);o(5),o("beginner");const p=o(null);o([{id:5,name:5},{id:10,name:10},{id:15,name:15},{id:20,name:20},{id:25,name:25},{id:30,name:30}]),o([{id:"beginner",name:"Oson",disabled:!1},{id:"medium",name:"O'rta",disabled:!0},{id:"advanced",name:"Qiyin",disabled:!0}]);function h(l){p.value=l,f(l)}async function b(){try{const l=await T.sciences();u.value=l}catch(l){console.error("Error fetching user:",l)}finally{}}async function f(l){try{const _=await T.subjects(l);d.value=_}catch(_){console.error("Error fetching user:",_)}finally{}}return D(()=>{b()}),(l,_)=>(i(),m("div",Q,[c("div",q,[(i(!0),m($,null,j(e(u),r=>(i(),C(e(S),{key:r.id,onClick:Y=>h(r.id),variant:r.id===e(p)?"":"outline"},{default:s(()=>[t(G(r.name),1)]),_:2},1032,["onClick","variant"]))),128))]),c("div",U,[I,c("div",J,[(i(!0),m($,null,j(e(d),r=>(i(),m("div",{class:"flex items-center space-x-4",key:r.id},[a(e(H),{id:r.id},null,8,["id"]),c("label",{for:r.id,class:"text-sm cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",innerHTML:r.name},null,8,K)]))),128))])]),c("div",R,[c("div",null,[a(e(B),null,{default:s(()=>[a(e(g),null,{default:s(()=>[a(e(v),{placeholder:"Savollar sonini tanlang"})]),_:1}),a(e(x),null,{default:s(()=>[a(e(w),null,{default:s(()=>[a(e(k),null,{default:s(()=>[t("Tanlang")]),_:1}),a(e(n),{value:"apple"},{default:s(()=>[t(" Apple ")]),_:1}),a(e(n),{value:"banana"},{default:s(()=>[t(" Banana ")]),_:1}),a(e(n),{value:"blueberry"},{default:s(()=>[t(" Blueberry ")]),_:1}),a(e(n),{value:"grapes"},{default:s(()=>[t(" Grapes ")]),_:1}),a(e(n),{value:"pineapple"},{default:s(()=>[t(" Pineapple ")]),_:1})]),_:1})]),_:1})]),_:1})]),c("div",null,[a(e(B),null,{default:s(()=>[a(e(g),null,{default:s(()=>[a(e(v),{placeholder:"Darajani tanlang"})]),_:1}),a(e(x),null,{default:s(()=>[a(e(w),null,{default:s(()=>[a(e(k),null,{default:s(()=>[t("Tanlang")]),_:1}),a(e(n),{value:"apple"},{default:s(()=>[t(" Apple ")]),_:1}),a(e(n),{value:"banana"},{default:s(()=>[t(" Banana ")]),_:1}),a(e(n),{value:"blueberry"},{default:s(()=>[t(" Blueberry ")]),_:1}),a(e(n),{value:"grapes"},{default:s(()=>[t(" Grapes ")]),_:1}),a(e(n),{value:"pineapple"},{default:s(()=>[t(" Pineapple ")]),_:1})]),_:1})]),_:1})]),_:1})])]),W,c("div",X,[a(e(S),{size:"lg"},{default:s(()=>[t("Testni boshlash")]),_:1})])]))}};export{ne as default};