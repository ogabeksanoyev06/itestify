import{_ as R}from"./Label.vue.D9h1wzVz.js";import{_ as j}from"./Input.vue.Cx9AtRPN.js";import{b as H,a as X,e as J,f as K,d as Q,c as W,_ as Z}from"./SelectScrollDownButton.vue.BIfPfX8G.js";import{a as V,w as I,o as ee,H as b,m as l,M as o,R as i,Y as L,G as p,U as d,V as f,u as n,O as y,F as $,I as w,L as k,a1 as le}from"./swiper-vue.Cb-HU16S.js";import{a as ae}from"./entry.ZVZ_3oFo.js";import{p as N}from"./profileService.D2jaGfGm.js";import{c as E}from"./commonService.Cr5WhVk-.js";import{_ as te}from"./index.C47UTDiz.js";import"./api.BrGyU9uH.js";const oe=i("h4",{class:"text-base sm:text-xl font-semibold mb-4"},"Asosiy malumotlar",-1),ne=["onSubmit"],se={class:"grid gap-3 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8"},ie={class:"flex flex-col"},de={class:"text-xs text-red-600"},re={class:"flex flex-col"},ue={class:"text-xs text-red-600"},me={class:"flex flex-col"},ce={class:"text-xs text-red-600"},fe={class:"flex flex-col"},_e={class:"text-xs text-red-600"},pe={class:"flex flex-col"},ve={class:"text-xs text-red-600"},he={class:"flex flex-col"},xe={class:"relative w-full"},ge=i("span",{class:"absolute top-1/2 -translate-y-1/2 start-0 flex items-center justify-center px-3"}," 998 ",-1),Ve={class:"text-xs text-red-600"},ye={class:"flex flex-col"},be={class:"flex flex-col"},Se={class:"flex flex-col"},Ue={class:"flex flex-col"},Ie={__name:"index",setup(Fe){const{$toast:M}=ae(),B=V({options:[]}),T=V({options:[]}),q=V({options:[]}),a=V({username:"",first_name:"",last_name:"",father_name:"",birth_date:"",district:"",school:"",type:"applicant",region:"",balance:"",phone:"",email:""}),O=V([{value:"applicant",name:"Abituriyent"},{value:"pupil",name:"O'quvchi"},{value:"teacher",name:"O'qituvchi"}]),S=V(!1);async function z(){try{const s=await E.regions();B.value.options=s}catch(s){console.error("Error fetching user:",s)}}async function A(s){try{const t=await E.districts(s);T.value.options=t}catch(t){console.error("Error fetching districts:",t)}}async function D(s){try{const t=await E.schools(s);q.value.options=t}catch(t){console.error("Error fetching schools:",t)}}async function C(){var s,t,m,_,c,v,h,x,g;S.value=!0;try{const r=await N.user();a.value=r,a.value.phone=(s=r==null?void 0:r.phone)==null?void 0:s.slice(3),a.value.region=(m=(t=r.region)==null?void 0:t.id)==null?void 0:m.toString(),a.value.district=(c=(_=r.district)==null?void 0:_.id)==null?void 0:c.toString(),a.value.school=(h=(v=r.school)==null?void 0:v.id)==null?void 0:h.toString(),q.value.id=(g=(x=r.school)==null?void 0:x.id)==null?void 0:g.toString()}catch(r){console.error(r)}finally{S.value=!1}}async function P(){S.value=!0;let s=new FormData;s.append("username",a.value.username),s.append("first_name",a.value.first_name),s.append("last_name",a.value.last_name),s.append("father_name",a.value.father_name),s.append("email",a.value.email),s.append("district",a.value.district),s.append("school",a.value.school),s.append("type",a.value.type),s.append("phone","998"+a.value.phone);try{const t=await N.updateProfile(s);a.value=t,C(),M.success("Profile muvaffaqiyatli o`zgartirildi")}catch(t){M.error("Xatolik yuz berdi",t)}finally{S.value=!1}}return I(()=>a.value.region,async(s,t)=>{s!==t&&A(s)}),I(()=>a.value.district,async(s,t)=>{s!==t&&D(s)}),ee(()=>{C(),z()}),(s,t)=>{const m=R,_=j,c=L("VField"),v=H,h=X,x=J,g=K,r=Q,U=W,F=Z,Y=L("VForm");return p(),b("div",null,[oe,l(Y,null,{default:o(({handleSubmit:G})=>[d(f(n(T).id)+" ",1),i("form",{onSubmit:le(e=>G(P),["prevent"])},[i("div",null,[i("div",se,[i("div",ie,[l(c,{name:"username",rules:"required|max:60|min:3",modelValue:n(a).username,"onUpdate:modelValue":t[1]||(t[1]=e=>n(a).username=e)},{default:o(({errors:e})=>[l(m,{for:"username"},{default:o(()=>[d("Foydalanuvchi nomi")]),_:1}),l(_,{id:"username",type:"text",placeholder:"Fodalanuvchi nomi",class:y(e.length>0?"focus-visible:border-red-600 border-red-600":""),modelValue:n(a).username,"onUpdate:modelValue":t[0]||(t[0]=u=>n(a).username=u)},null,8,["class","modelValue"]),i("span",de,f(e[0]),1)]),_:1},8,["modelValue"])]),i("div",re,[l(c,{name:"first_name",rules:"required|max:60|min:3",modelValue:n(a).first_name,"onUpdate:modelValue":t[3]||(t[3]=e=>n(a).first_name=e)},{default:o(({errors:e})=>[l(m,{for:"first_name"},{default:o(()=>[d("Ism")]),_:1}),l(_,{id:"first_name",type:"text",placeholder:"Fodalanuvchi nomi",modelValue:n(a).first_name,"onUpdate:modelValue":t[2]||(t[2]=u=>n(a).first_name=u),class:y(e.length>0?"focus-visible:border-red-600 border-red-600":"")},null,8,["modelValue","class"]),i("span",ue,f(e[0]),1)]),_:1},8,["modelValue"])]),i("div",me,[l(c,{name:"last_name",rules:"required|max:60|min:3",modelValue:n(a).last_name,"onUpdate:modelValue":t[5]||(t[5]=e=>n(a).last_name=e)},{default:o(({errors:e})=>[l(m,{for:"last_name"},{default:o(()=>[d("Familiya")]),_:1}),l(_,{id:"last_name",type:"text",placeholder:"Fodalanuvchi nomi",modelValue:n(a).last_name,"onUpdate:modelValue":t[4]||(t[4]=u=>n(a).last_name=u),class:y(e.length>0?"focus-visible:border-red-600 border-red-600":"")},null,8,["modelValue","class"]),i("span",ce,f(e[0]),1)]),_:1},8,["modelValue"])]),i("div",fe,[l(c,{name:"father_name",rules:"max:60|min:3",modelValue:n(a).father_name,"onUpdate:modelValue":t[7]||(t[7]=e=>n(a).father_name=e)},{default:o(({errors:e})=>[l(m,{for:"father_name"},{default:o(()=>[d("Otasining ismi")]),_:1}),l(_,{id:"father_name",type:"text",placeholder:"Fodalanuvchi nomi",modelValue:n(a).father_name,"onUpdate:modelValue":t[6]||(t[6]=u=>n(a).father_name=u),class:y(e.length>0?"focus-visible:border-red-600 border-red-600":"")},null,8,["modelValue","class"]),i("span",_e,f(e[0]),1)]),_:1},8,["modelValue"])]),i("div",pe,[l(c,{name:"email",rules:"email",modelValue:n(a).email,"onUpdate:modelValue":t[9]||(t[9]=e=>n(a).email=e)},{default:o(({errors:e})=>[l(m,{for:"email"},{default:o(()=>[d("Email")]),_:1}),l(_,{id:"email",type:"text",placeholder:"Fodalanuvchi nomi",modelValue:n(a).email,"onUpdate:modelValue":t[8]||(t[8]=u=>n(a).email=u),class:y(e.length>0?"focus-visible:border-red-600 border-red-600":"")},null,8,["modelValue","class"]),i("span",ve,f(e[0]),1)]),_:1},8,["modelValue"])]),i("div",he,[l(c,{name:"phone",rules:"phone|max:9",modelValue:n(a).phone,"onUpdate:modelValue":t[11]||(t[11]=e=>n(a).phone=e)},{default:o(({errors:e})=>[l(m,{for:"phone"},{default:o(()=>[d("Telefon raqam")]),_:1}),i("div",xe,[l(_,{id:"phone",type:"text",placeholder:"Telefon raqam",modelValue:n(a).phone,"onUpdate:modelValue":t[10]||(t[10]=u=>n(a).phone=u),class:y(["pl-12",e.length>0?"focus-visible:border-red-600 border-red-600":""])},null,8,["modelValue","class"]),ge]),i("span",Ve,f(e[0]),1)]),_:1},8,["modelValue"])]),i("div",ye,[l(c,{name:"region"},{default:o(()=>[l(m,{for:"region"},{default:o(()=>[d("Yo'nalishni tanlang")]),_:1}),l(F,{modelValue:n(a).type,"onUpdate:modelValue":t[12]||(t[12]=e=>n(a).type=e)},{default:o(()=>[l(h,null,{default:o(()=>[l(v,{placeholder:"Yo'nalishni tanlang"})]),_:1}),l(U,null,{default:o(()=>[l(r,null,{default:o(()=>[l(x,null,{default:o(()=>[d("Tanlang")]),_:1}),(p(!0),b($,null,w(n(O),(e,u)=>(p(),k(g,{key:u+2,value:e.value},{default:o(()=>[d(f(e.name),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),i("div",be,[l(c,{name:"region"},{default:o(()=>[l(m,{for:"region"},{default:o(()=>[d("Viloyatni tanlang")]),_:1}),l(F,{modelValue:n(a).region,"onUpdate:modelValue":t[13]||(t[13]=e=>n(a).region=e)},{default:o(()=>[l(h,null,{default:o(()=>[l(v,{placeholder:"Viloyatni tanlang"})]),_:1}),l(U,null,{default:o(()=>[l(r,null,{default:o(()=>[l(x,null,{default:o(()=>[d("Tanlang")]),_:1}),(p(!0),b($,null,w(n(B).options,(e,u)=>(p(),k(g,{key:u+2,value:e.id.toString()},{default:o(()=>[d(f(e.name),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),i("div",Se,[l(c,{name:"district"},{default:o(()=>[l(m,{for:"district"},{default:o(()=>[d("Tumanni tanlang")]),_:1}),l(F,{modelValue:n(a).district,"onUpdate:modelValue":t[14]||(t[14]=e=>n(a).district=e),disabled:n(a).region===""},{default:o(()=>[l(h,null,{default:o(()=>[l(v,{placeholder:"Tumanni tanlang"})]),_:1}),l(U,null,{default:o(()=>[l(r,null,{default:o(()=>[l(x,null,{default:o(()=>[d("Tanlang")]),_:1}),(p(!0),b($,null,w(n(T).options,e=>(p(),k(g,{key:e.id,value:e.id.toString()},{default:o(()=>[d(f(e.name),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue","disabled"])]),_:1})]),i("div",Ue,[l(c,{name:"school"},{default:o(()=>[l(m,{for:"school"},{default:o(()=>[d("Maktabni tanlang")]),_:1}),l(F,{modelValue:n(a).school,"onUpdate:modelValue":t[15]||(t[15]=e=>n(a).school=e),disabled:n(a).district===""},{default:o(()=>[l(h,null,{default:o(()=>[l(v,{placeholder:"Maktabni tanlang"})]),_:1}),l(U,null,{default:o(()=>[l(r,null,{default:o(()=>[l(x,null,{default:o(()=>[d("Tanlang")]),_:1}),(p(!0),b($,null,w(n(q).options,e=>(p(),k(g,{key:e.id,value:e.id.toString()},{default:o(()=>[d(f(e.name),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue","disabled"])]),_:1})])]),l(n(te),{type:"submit",class:"w-full sm:w-auto"},{default:o(()=>[d("Saqlash")]),_:1})])],40,ne)]),_:1})])}}};export{Ie as default};