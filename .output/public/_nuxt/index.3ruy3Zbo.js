import{_ as z}from"./Label.vue.C6XKi5Pp.js";import{b as A,a as E,e as Y,f as G,d as J,c as Q,_ as R}from"./SelectScrollDownButton.vue.kyx0ptKU.js";import{a as W,z as X,b as T,aa as H,J as c,C as l,O as t,U as n,_ as q,I as r,u as a,W as d,Q as p,X as _,F as k,L as F,N as S,S as K,a3 as Z}from"./swiper-vue.f8ijT8wh.js";import{u as ee}from"./useCommonData.DRxnSq7X.js";import{u as le}from"./useUserProfile.B0mKlTfc.js";import{_ as ae}from"./Button.vue.BZP-x1Gd.js";import{_ as x}from"./Input.vue.D81TnVc6.js";import"./utils.FzJxwjWG.js";import"./ChevronDownIcon.DweLdmrN.js";import"./useApi.CyfVkDiN.js";import"./entry.CTQDoUPm.js";const te=n("h4",{class:"text-base sm:text-xl font-semibold mb-4"},"Asosiy malumotlar",-1),oe=["onSubmit"],se={class:"grid gap-3 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8"},ne={class:"flex flex-col space-y-2"},de={class:"text-xs text-red-600"},ie={class:"flex flex-col space-y-2"},ue={class:"text-xs text-red-600"},me={class:"flex flex-col space-y-2"},re={class:"text-xs text-red-600"},_e={class:"flex flex-col space-y-2"},fe={class:"text-xs text-red-600"},ce={class:"flex flex-col space-y-2"},pe={class:"text-xs text-red-600"},xe={class:"flex flex-col space-y-2"},Ve={class:"relative w-full"},ve=n("span",{class:"absolute top-1/2 -translate-y-1/2 start-0 flex items-center justify-center px-3"}," 998 ",-1),he={class:"text-xs text-red-600"},ge={class:"flex flex-col space-y-2"},be={class:"flex flex-col space-y-2"},ye={class:"flex flex-col space-y-2"},Ue={class:"flex flex-col space-y-2"},ke={key:0,viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",class:"mr-2 h-4 w-4 animate-spin"},Fe=n("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 12a9 9 0 1 1-6.219-8.56"},null,-1),Se=[Fe],Pe={__name:"index",setup($e){const C=W([{value:"applicant",name:"Abituriyent"},{value:"pupil",name:"O'quvchi"},{value:"teacher",name:"O'qituvchi"}]),{regions:w,districts:B,schools:M,getRegions:N,getDistricts:L,getSchools:O}=ee(),{user:o,userProfile:D,updateUserProfile:I,loading:$}=le();return X(()=>{D(),N()}),T(()=>o.value.region,(f,s)=>{f!=null&&f!==s&&L(o.value.region)}),T(()=>o.value.district,(f,s)=>{f!=null&&f!==s&&O(o.value.district)}),H(()=>{}),(f,s)=>{const u=z,m=q("VField"),V=A,v=E,h=Y,g=G,b=J,y=Q,U=R,P=q("VForm");return r(),c("div",null,[te,l(P,null,{default:t(({handleSubmit:j})=>[n("form",{onSubmit:Z(e=>j(a(I)),["prevent"])},[n("div",null,[n("div",se,[n("div",ne,[l(m,{name:"username",rules:"required|max:60|min:3",modelValue:a(o).username,"onUpdate:modelValue":s[1]||(s[1]=e=>a(o).username=e)},{default:t(({errors:e})=>[l(u,{for:"username"},{default:t(()=>[d("Foydalanuvchi nomi")]),_:1}),l(a(x),{id:"username",type:"text",placeholder:"Fodalanuvchi nomi",class:p(e.length>0?"focus-visible:border-red-600 border-red-600":""),modelValue:a(o).username,"onUpdate:modelValue":s[0]||(s[0]=i=>a(o).username=i)},null,8,["class","modelValue"]),n("span",de,_(e[0]),1)]),_:1},8,["modelValue"])]),n("div",ie,[l(m,{name:"first_name",rules:"required|max:60|min:3",modelValue:a(o).first_name,"onUpdate:modelValue":s[3]||(s[3]=e=>a(o).first_name=e)},{default:t(({errors:e})=>[l(u,{for:"first_name"},{default:t(()=>[d("Ism")]),_:1}),l(a(x),{id:"first_name",type:"text",placeholder:"Fodalanuvchi nomi",modelValue:a(o).first_name,"onUpdate:modelValue":s[2]||(s[2]=i=>a(o).first_name=i),class:p(e.length>0?"focus-visible:border-red-600 border-red-600":"")},null,8,["modelValue","class"]),n("span",ue,_(e[0]),1)]),_:1},8,["modelValue"])]),n("div",me,[l(m,{name:"last_name",rules:"required|max:60|min:3",modelValue:a(o).last_name,"onUpdate:modelValue":s[5]||(s[5]=e=>a(o).last_name=e)},{default:t(({errors:e})=>[l(u,{for:"last_name"},{default:t(()=>[d("Familiya")]),_:1}),l(a(x),{id:"last_name",type:"text",placeholder:"Fodalanuvchi nomi",modelValue:a(o).last_name,"onUpdate:modelValue":s[4]||(s[4]=i=>a(o).last_name=i),class:p(e.length>0?"focus-visible:border-red-600 border-red-600":"")},null,8,["modelValue","class"]),n("span",re,_(e[0]),1)]),_:1},8,["modelValue"])]),n("div",_e,[l(m,{name:"father_name",rules:"max:60|min:3",modelValue:a(o).father_name,"onUpdate:modelValue":s[7]||(s[7]=e=>a(o).father_name=e)},{default:t(({errors:e})=>[l(u,{for:"father_name"},{default:t(()=>[d("Otasining ismi")]),_:1}),l(a(x),{id:"father_name",type:"text",placeholder:"Fodalanuvchi nomi",modelValue:a(o).father_name,"onUpdate:modelValue":s[6]||(s[6]=i=>a(o).father_name=i),class:p(e.length>0?"focus-visible:border-red-600 border-red-600":"")},null,8,["modelValue","class"]),n("span",fe,_(e[0]),1)]),_:1},8,["modelValue"])]),n("div",ce,[l(m,{name:"email",rules:"email",modelValue:a(o).email,"onUpdate:modelValue":s[9]||(s[9]=e=>a(o).email=e)},{default:t(({errors:e})=>[l(u,{for:"email"},{default:t(()=>[d("Email")]),_:1}),l(a(x),{id:"email",type:"text",placeholder:"Fodalanuvchi nomi",modelValue:a(o).email,"onUpdate:modelValue":s[8]||(s[8]=i=>a(o).email=i),class:p(e.length>0?"focus-visible:border-red-600 border-red-600":"")},null,8,["modelValue","class"]),n("span",pe,_(e[0]),1)]),_:1},8,["modelValue"])]),n("div",xe,[l(m,{name:"phone",rules:"phone|max:9",modelValue:a(o).phone,"onUpdate:modelValue":s[11]||(s[11]=e=>a(o).phone=e)},{default:t(({errors:e})=>[l(u,{for:"phone"},{default:t(()=>[d("Telefon raqam")]),_:1}),n("div",Ve,[l(a(x),{id:"phone",type:"text",placeholder:"Telefon raqam",modelValue:a(o).phone,"onUpdate:modelValue":s[10]||(s[10]=i=>a(o).phone=i),class:p(["pl-12",e.length>0?"focus-visible:border-red-600 border-red-600":""])},null,8,["modelValue","class"]),ve]),n("span",he,_(e[0]),1)]),_:1},8,["modelValue"])]),n("div",ge,[l(m,{name:"region"},{default:t(()=>[l(u,{for:"region"},{default:t(()=>[d("Yo'nalishni tanlang")]),_:1}),l(U,{modelValue:a(o).type,"onUpdate:modelValue":s[12]||(s[12]=e=>a(o).type=e)},{default:t(()=>[l(v,null,{default:t(()=>[l(V,{placeholder:"Yo'nalishni tanlang"})]),_:1}),l(y,null,{default:t(()=>[l(b,null,{default:t(()=>[l(h,null,{default:t(()=>[d("Tanlang")]),_:1}),(r(!0),c(k,null,F(C.value,(e,i)=>(r(),S(g,{key:i+2,value:e.value},{default:t(()=>[d(_(e.name),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),n("div",be,[l(m,{name:"region"},{default:t(()=>[l(u,{for:"region"},{default:t(()=>[d("Viloyatni tanlang")]),_:1}),l(U,{modelValue:a(o).region,"onUpdate:modelValue":s[13]||(s[13]=e=>a(o).region=e)},{default:t(()=>[l(v,null,{default:t(()=>[l(V,{placeholder:"Viloyatni tanlang"})]),_:1}),l(y,null,{default:t(()=>[l(b,null,{default:t(()=>[l(h,null,{default:t(()=>[d("Tanlang")]),_:1}),(r(!0),c(k,null,F(a(w),(e,i)=>(r(),S(g,{key:i+2,value:e.id},{default:t(()=>[d(_(e.name),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),n("div",ye,[l(m,{name:"district"},{default:t(()=>[l(u,{for:"district"},{default:t(()=>[d("Tumanni tanlang")]),_:1}),l(U,{modelValue:a(o).district,"onUpdate:modelValue":s[14]||(s[14]=e=>a(o).district=e),disabled:a(o).region===""},{default:t(()=>[l(v,null,{default:t(()=>[l(V,{placeholder:"Tumanni tanlang"})]),_:1}),l(y,null,{default:t(()=>[l(b,null,{default:t(()=>[l(h,null,{default:t(()=>[d("Tanlang")]),_:1}),(r(!0),c(k,null,F(a(B),e=>(r(),S(g,{key:e.id,value:e.id},{default:t(()=>[d(_(e.name),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue","disabled"])]),_:1})]),n("div",Ue,[l(m,{name:"school"},{default:t(()=>[l(u,{for:"school"},{default:t(()=>[d("Maktabni tanlang")]),_:1}),l(U,{modelValue:a(o).school,"onUpdate:modelValue":s[15]||(s[15]=e=>a(o).school=e),disabled:a(o).district===""},{default:t(()=>[l(v,null,{default:t(()=>[l(V,{placeholder:"Maktabni tanlang"})]),_:1}),l(y,null,{default:t(()=>[l(b,null,{default:t(()=>[l(h,null,{default:t(()=>[d("Tanlang")]),_:1}),(r(!0),c(k,null,F(a(M),e=>(r(),S(g,{key:e.id,value:e.id},{default:t(()=>[d(_(e.name),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue","disabled"])]),_:1})])]),l(a(ae),{type:"submit",class:"w-full sm:w-auto",disabled:a($)},{default:t(()=>[a($)?(r(),c("svg",ke,Se)):K("",!0),d(" Saqlash ")]),_:1},8,["disabled"])])],40,oe)]),_:1})])}}};export{Pe as default};
