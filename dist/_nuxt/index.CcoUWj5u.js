import{u as z}from"./useTests.CZtwrwbd.js";import{a as h,b as k,c as V,d as S,e as y,f as C,_ as x}from"./SelectScrollDownButton.vue.DMxxjwaE.js";import{_ as w}from"./Button.vue.37xXRD8U.js";import{a as o,q as F,J as u,U as d,F as v,L as p,u as e,z as n,O as l,y as $,I as s,N as g,W as t,X as b,S as E}from"./swiper-vue.DvdnvJXd.js";import"./useApi.CMMM86oG.js";import"./entry.DNnybCxd.js";import"./utils.CgDwpIJp.js";import"./ChevronDownIcon.BOBQWSxI.js";const I={class:"py-8"},J={class:"container"},Q={class:"flex flex-wrap gap-3 border-b border-border pb-8"},R={class:"grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"},W={class:"flex justify-center mt-12"},X={key:0,viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",class:"mr-2 h-4 w-4 animate-spin"},A=d("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 12a9 9 0 1 1-6.219-8.56"},null,-1),G=[A],te={__name:"index",setup(H){const{sciences:B,classes:L,getSciences:N,getClasses:T,startSchoolTest:j,loading:q}=z(),r=o(5),c=o(2),_=o("beginner"),f=o(null),U=o([{id:5,name:5},{id:10,name:10},{id:15,name:15},{id:20,name:20},{id:25,name:25},{id:30,name:30}]),D=o([{id:"beginner",name:"Oson",disabled:!1},{id:"medium",name:"O'rta",disabled:!0},{id:"advanced",name:"Qiyin",disabled:!0}]);function M(m){f.value=m}function O(){const m={science_id:f.value,class_id:c.value,test_score:_.value,test_count:r.value};j(m)}return F(()=>{N(),T()}),(m,i)=>(s(),u("div",I,[d("div",J,[d("div",Q,[(s(!0),u(v,null,p(e(B),a=>(s(),g(e(w),{key:a.id,onClick:K=>M(a.id),variant:a.id===e(f)?"":"outline"},{default:l(()=>[t(b(a.name),1)]),_:2},1032,["onClick","variant"]))),128))]),d("div",R,[d("div",null,[n(e(x),{modelValue:e(r),"onUpdate:modelValue":i[0]||(i[0]=a=>$(r)?r.value=a:null)},{default:l(()=>[n(e(h),null,{default:l(()=>[n(e(k),{placeholder:"Savollar sonini tanlang"})]),_:1}),n(e(V),null,{default:l(()=>[n(e(S),null,{default:l(()=>[n(e(y),null,{default:l(()=>[t("Savollar sonini tanlang")]),_:1}),(s(!0),u(v,null,p(e(U),a=>(s(),g(e(C),{key:a.id,value:a.id},{default:l(()=>[t(b(a.name),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),d("div",null,[n(e(x),{modelValue:e(c),"onUpdate:modelValue":i[1]||(i[1]=a=>$(c)?c.value=a:null)},{default:l(()=>[n(e(h),null,{default:l(()=>[n(e(k),{placeholder:"Sinfni tanlang"})]),_:1}),n(e(V),null,{default:l(()=>[n(e(S),null,{default:l(()=>[n(e(y),null,{default:l(()=>[t("Sinfni tanlang")]),_:1}),(s(!0),u(v,null,p(e(L),a=>(s(),g(e(C),{key:a.id,value:a.id},{default:l(()=>[t(b(a.number),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),d("div",null,[n(e(x),{modelValue:e(_),"onUpdate:modelValue":i[2]||(i[2]=a=>$(_)?_.value=a:null)},{default:l(()=>[n(e(h),null,{default:l(()=>[n(e(k),{placeholder:"Darajani tanlang"})]),_:1}),n(e(V),null,{default:l(()=>[n(e(S),null,{default:l(()=>[n(e(y),null,{default:l(()=>[t("Darajani tanlang")]),_:1}),(s(!0),u(v,null,p(e(D),a=>(s(),g(e(C),{key:a.id,value:a.id,disabled:a.disabled},{default:l(()=>[t(b(a.name),1)]),_:2},1032,["value","disabled"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),d("div",W,[n(e(w),{size:"lg",disabled:!e(f)||!e(c)||!e(_)||!e(r),onClick:O},{default:l(()=>[e(q)?(s(),u("svg",X,G)):E("",!0),t(" Testni boshlash ")]),_:1},8,["disabled"])])])]))}};export{te as default};