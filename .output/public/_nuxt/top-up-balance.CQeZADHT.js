import{_}from"./Input.vue.Cx9AtRPN.js";import{_ as f}from"./index.C47UTDiz.js";import"./entry.ZVZ_3oFo.js";import{p as h}from"./paymentService.BWd2jKFZ.js";import{a as l,H as x,R as s,O as b,u as a,m as i,l as w,M as y,G as g,U as v}from"./swiper-vue.Cb-HU16S.js";import"./api.BrGyU9uH.js";const k=""+new URL("payme.CQSqjJDf.svg",import.meta.url).href,C={class:"top-up-balance"},V=s("h4",{class:"text-base sm:text-xl font-semibold mb-4"},"To'lov turini tanlang",-1),B=s("img",{src:k,alt:""},null,-1),N=s("p",{class:"text-base font-bold"},"PayMe",-1),U=[B,N],H={class:"flex flex-col gap-5 max-w-[450px] border rounded-lg p-5 mt-5"},M=s("p",{class:"text-sm text-gray-500"}," Hisobni to'ldirish uchun kerakli miqdorni kiriting va to'lovni amalga oshirish tugmasini bosing. Minimal to'lov - 1000 so'm ",-1),E={__name:"top-up-balance",setup(P){const r=l(1),t=l(null),m=e=>{r.value=e},c=e=>{e=e||window.event;let o=e.which?e.which:e.keyCode;if(o>31&&(o<48||o>57)&&o!==46)e.preventDefault();else return!0};async function d(){try{const e=await h.fillUserBalance(t.value);window.open(e.result.link)}catch(e){console.error("Error",e)}}return(e,o)=>{const p=_,u=f;return g(),x("div",C,[V,s("div",{class:b(["inline-flex flex-wrap items-center gap-5 max-w-[250px] cursor-pointer border rounded-lg p-4 transition-all duration-300 hover:shadow hover:border-white",{"!border-primary":a(r)===1}]),onClick:o[0]||(o[0]=n=>m(1))},U,2),s("div",H,[M,i(p,{modelValue:a(t),"onUpdate:modelValue":o[1]||(o[1]=n=>w(t)?t.value=n:null),placeholder:"10 000",onKeypress:o[2]||(o[2]=n=>c(n))},null,8,["modelValue"]),i(u,{disabled:a(t)<=9999||a(t)===null,onClick:d},{default:y(()=>[v(" Hisobni to'ldirish ")]),_:1},8,["disabled"])])])}}};export{E as default};