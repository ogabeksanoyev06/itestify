import{_}from"./Input.vue.A2ISKsCv.js";import{_ as f}from"./index.DNzJp8SU.js";import{j as l,a as h,f as s,b,u as a,h as i,v as x,w,o as y,l as g}from"./entry.CM4UmRmh.js";import{p as v}from"./paymentService.BpPgu4KM.js";import"./tokenService.Cdn6yuQ_.js";import"./authService.BBKLY34u.js";const k=""+new URL("payme.CQSqjJDf.svg",import.meta.url).href,C={class:"top-up-balance"},V=s("h4",{class:"text-base sm:text-xl font-semibold mb-4"},"To'lov turini tanlang",-1),B=s("img",{src:k,alt:""},null,-1),N=s("p",{class:"text-base font-bold"},"PayMe",-1),P=[B,N],S={class:"flex flex-col gap-5 max-w-[450px] border rounded-lg p-5 mt-5"},T=s("p",{class:"text-sm text-gray-500"}," Hisobni to'ldirish uchun kerakli miqdorni kiriting va to'lovni amalga oshirish tugmasini bosing. Minimal to'lov - 1000 so'm ",-1),M={__name:"top-up-balance",setup(U){const r=l(1),t=l(null),c=e=>{r.value=e},m=e=>{e=e||window.event;let o=e.which?e.which:e.keyCode;if(o>31&&(o<48||o>57)&&o!==46)e.preventDefault();else return!0};async function d(){try{const e=await v.fillUserBalance(t.value);window.open(e.result.link)}catch(e){console.error("Error",e)}}return(e,o)=>{const p=_,u=f;return y(),h("div",C,[V,s("div",{class:b(["inline-flex flex-wrap items-center gap-5 max-w-[250px] cursor-pointer border rounded-lg p-4 transition-all duration-300 hover:shadow hover:border-white",{"!border-primary":a(r)===1}]),onClick:o[0]||(o[0]=n=>c(1))},P,2),s("div",S,[T,i(p,{modelValue:a(t),"onUpdate:modelValue":o[1]||(o[1]=n=>x(t)?t.value=n:null),placeholder:"10 000",onKeypress:o[2]||(o[2]=n=>m(n))},null,8,["modelValue"]),i(u,{disabled:a(t)<=9999||a(t)===null,onClick:d},{default:w(()=>[g(" Hisobni to'ldirish ")]),_:1},8,["disabled"])])])}}};export{M as default};
