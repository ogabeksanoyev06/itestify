import{u as B}from"./useUserProfile.e4TCw-kE.js";import{p as F,c as C}from"./format.D_WG3sRC.js";import{b as R,u as q}from"./entry.DNnybCxd.js";import{A as z}from"./AppHeader.DDb_i9Cd.js";import{a as u,b as A,q as L,J as h,z as P,U as e,X as a,u as o,F as j,L as T,P as $,I as b,Q as M}from"./swiper-vue.DvdnvJXd.js";import"./useApi.CMMM86oG.js";import"./nuxt-link.hRqtGeY3.js";import"./useAuth.C4Ox8mFY.js";import"./Button.vue.37xXRD8U.js";import"./utils.CgDwpIJp.js";import"./Cross2Icon.CrIW_Fog.js";const O={class:"min-h-[calc(100vh-64px)] py-8"},S={class:"container"},E={class:"bg-card pt-3 px-3 sm:pt-6 sm:px-6 rounded-2xl shadow-[rgba(0,0,0,0.16)_0px_1px_4px] mb-8"},H={class:"flex justify-between items-center flex-wrap gap-5 bg-[url(https://www.fozilov.uz/assets/Light.png)] bg-[length:200px_200px]"},I={class:"flex items-start flex-wrap gap-3"},N={class:"relative overflow-hidden shrink-0 before:border before:border-solid before:border-white-100 before:opacity-20 before:absolute before:inset-0 w-14 h-14 rounded-full before:rounded-full"},U={class:"flex items-center justify-center text-white h-full w-full text-base object-cover relative text-transparent bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-content"},V={class:"text-primary-800 text-base sm:text-xl font-semibold"},X={class:"text-gray text-base font-medium"},D=e("h2",{class:"text-primary-800 text-base sm:text-xl font-semibold"},"Mening hisobim",-1),J={class:"text-gray text-base font-medium"},Q=e("h2",{class:"text-primary-800 text-base sm:text-xl font-semibold"},"Mening maqomim",-1),G={class:"text-gray text-base font-medium"},K={class:"border-t border-border mt-5"},W={class:"relative overflow-hidden py-2"},Y={class:"flex gap-6 overflow-y-auto mini-x-scroll"},Z=["id","onClick"],ee={class:"shadow-[rgba(0,0,0,0.16)_0px_1px_4px] px-3 py-6 sm:px-6 rounded-2xl"},he={__name:"cabinet",setup(te){const g=R(),x=q(),m=u(""),c=u({}),p=u([{title:"Asosiy malumotlar",name:"profile"},{title:"Hisobni to`ldirish",name:"profile-top-up-balance"},{title:"To`lovlar tarixi",name:"profile-payment-history"},{title:"Test natijalari",name:"profile-tests-results"}]),y=u([{value:"applicant",name:"Abituriyent"},{value:"pupil",name:"O'quvchi"},{value:"teacher",name:"O'qituvchi"}]),{user:i,userProfile:w,loading:oe}=B(),_=t=>{const s=document.getElementById(t),r=document.querySelector(".mini-x-scroll");if(s&&r){const l=s.getBoundingClientRect(),d=r.getBoundingClientRect(),n=l.left-d.left;c.value&&(c.value.style.width=`${l.width}px`,c.value.style.transform=`translateX(${n}px)`)}},k=t=>{g.push({name:t})},v=()=>{m.value=x.name;const t=p.value.find(s=>s.name===m.value);if(t){const s=p.value.indexOf(t)+1;_(s)}};return A(x,v),L(()=>{v(),w()}),(t,s)=>{var r,l,d;return b(),h("div",null,[P(z),e("main",O,[e("div",S,[e("div",E,[e("div",H,[e("div",I,[e("div",N,[e("div",U,a(((r=o(i).first_name)==null?void 0:r.slice(0,1))+((l=o(i).last_name)==null?void 0:l.slice(0,1))),1)]),e("div",null,[e("h2",V,a(o(i).username),1),e("p",X,a(("phoneFormat"in t?t.phoneFormat:o(F))("998"+o(i).phone)),1)])]),e("div",null,[D,e("p",J,a(("currencyFormat"in t?t.currencyFormat:o(C))(o(i).balance))+" so'm",1)]),e("div",null,[Q,e("p",G,a((d=o(y).find(n=>n.value===o(i).type))==null?void 0:d.name),1)])]),e("nav",K,[e("div",W,[e("div",Y,[(b(!0),h(j,null,T(o(p),(n,f)=>(b(),h("button",{class:M(["!pt-2 text-foreground/90 py-2 rounded-sm transition-all hover:text-foreground leading-130 text-sm font-medium z-10 flex items-center gap-1 shrink-0",{"!text-foreground font-semibold":o(m)===n.name}]),key:f,id:f+1,onClick:se=>(_(f+1),k(n.name))},a(n.title),11,Z))),128))]),e("div",{ref_key:"highlighter",ref:c,class:"absolute h-[2px] bg-primary left-0 bottom-0 rounded-t-md transition-all duration-500"},null,512)])])]),e("div",ee,[$(t.$slots,"default")])])])])}}};export{he as default};