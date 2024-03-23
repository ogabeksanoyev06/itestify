import{u as N}from"./useApi.B8Sr6wSI.js";import{u as T,a as B}from"./entry.rnvC2PpJ.js";import{t as h}from"./test.DmJ8w_Fl.js";import{a as v,z as L,o as P,J as l,U as s,F as x,L as k,u as a,I as n,X as d,Q as g,N as A,O as E,W as q}from"./swiper-vue.f8ijT8wh.js";import{_ as F}from"./Button.vue.BZP-x1Gd.js";import"./utils.FzJxwjWG.js";const j=()=>{const _=T(),u=N(),r=v([]),p=v(["A","B","C","D","E","F","G","H"]),w=t=>{let o={subjectName:t[0].science,questionCount:t[0].question_count,type:_.query.type,questions:t[0].questions.map(e=>({id:e.id,question:e.question,answers:[e.answer1,e.answer2,e.answer3,e.answer4],correctAnswer:e.correct_answer,isPicked:e.is_picked,answer:e.answer}))};r.value.push(o)},m=t=>{},i=t=>{let o={subjectName:t[0].science,questionCount:t[0].question_count,type:_.query.type,maxBall:t[0].max_ball,totalBall:t[0].total_ball,questions:t[0].questions.map(e=>({id:e.id,question:e.question,answers:[e.answer1,e.answer2,e.answer3,e.answer4],correctAnswer:e.correct_answer,isPicked:e.is_picked,answer:e.answer}))};r.value.push(o)},y=t=>{let o={subjectName:t[0].science,questionCount:t[0].question_count,type:_.query.type,maxBall:t[0].max_ball,totalBall:t[0].total_ball,questions:t[0].questions.map(e=>({id:e.id,question:e.question,answers:[e.answer1,e.answer2,e.answer3,e.answer4],correctAnswer:e.correct_answer,isPicked:e.is_picked,answer:e.answer}))};r.value.push(o)};return{testHistoryId:r,answerLabels:p,getHistoryTestId:async t=>{try{const o=await u.get(`tests/tests-history/${t.id}/?type=${t.type}`);switch(t.type){case h.TYPE_BLOCK:i(o);break;case h.TYPE_SCHOOL:w(o);break;case h.TYPE_ONLINE:m(o);break;case h.TYPE_RESEARCH:y(o);break;default:break}}catch(o){console.error(o)}}}},Q={class:"py-8"},I={class:"container"},M={class:"inline-flex justify-center w-full"},O={class:"text-[18px] text-center shadow-[0_0px_10px_rgba(0,0,0,.15)] font-bold py-3 px-6 mb-6"},$={class:"relative overflow-x-auto mb-6"},S={class:"w-full whitespace-nowrap text-sm text-left rtl:text-right"},Y=s("thead",{class:"border-b border-border"},[s("tr",{class:"text-center"},[s("th",{scope:"col",class:"p-4"},"Test turi"),s("th",{scope:"col",class:"p-4"},"Fan nomi"),s("th",{scope:"col",class:"p-4"},"Savollar soni"),s("th",{scope:"col",class:"p-4"},"Ball"),s("th",{scope:"col",class:"p-4"},"Vaqti")])],-1),D={class:"bg-card border-b border-border transition-all duration-300 text-center"},R={class:"p-4"},V={class:"p-4"},z={class:"p-4"},U=s("td",{class:"p-4"},"70.7",-1),X=s("td",{class:"p-4"},"-20 daqiqa",-1),G={class:"flex flex-col gap-3"},J={class:"question flex items-start text-base"},K={id:"question_number",class:"mr-1"},W={id:"question_text"},Z=["innerHTML"],ee={key:0,class:"text-red-600"},se={key:1,class:"text-red-600"},te={key:2,class:"text-green-600"},re={class:"flex flex-col gap-2"},ae=["onClick"],oe={class:"font-semibold"},ce=["innerHTML"],ne={class:"mt-6"},le={class:"pagination-list flex flex-wrap gap-2 justify-center border-b border-border pb-4"},he={__name:"[answerAattempId]",setup(_){const u=T(),r=v({}),{testHistoryId:p,answerLabels:w,getHistoryTestId:m}=j(),i=B("testNumber",{default:()=>0}),y=t=>{t!==i.value&&(i.value=t,f())},f=()=>{var t;r.value=(t=p.value[0])==null?void 0:t.questions[i.value]};return L(async()=>{await m({id:u.params.answerAattempId,type:u.query.type}),f()}),P(()=>{i.value=0}),(t,o)=>(n(),l("div",Q,[s("div",I,[(n(!0),l(x,null,k(a(p),(e,C)=>(n(),l("div",{key:C},[s("div",M,[s("p",O,d(e.subjectName),1)]),s("div",$,[s("table",S,[Y,s("tbody",null,[s("tr",D,[s("td",R,d(e.type),1),s("td",V,d(e.subjectName),1),s("td",z,d(e.questionCount),1),U,X])])])]),s("div",G,[s("div",{class:g(["flex flex-col gap-2 shadow-[0_0px_10px] border p-4",{"shadow-red-700":!a(r).answer,"shadow-green-600":a(r).is_correct,"shadow-red-600":!a(r).is_correct&&a(r).isPicked}])},[s("div",J,[s("b",K,d(a(i)+1)+". ",1),s("span",W,[s("span",{innerHTML:a(r).question},null,8,Z),a(r).answer?a(r).is_correct?(n(),l("span",te,"(To'g'ri)")):(n(),l("span",se,"(Xato)")):(n(),l("span",ee,"(belgilanmagan)"))])]),s("ul",re,[(n(!0),l(x,null,k(a(r).answers,(b,c)=>(n(),l("li",{class:g(["text-sm cursor-pointer border border-border rounded flex items-start gap-1 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 group",{"border-primary text-primary":a(r).isPicked&&a(r).answer===c+1,"text-red-600 border-red-600":!a(r).is_correct&&a(r).isPicked&&c+1===a(r).answer}]),key:c,onClick:H=>t.selectAnswer(t.question.id,c+1)},[s("span",oe,d(a(w)[c]+")"),1),s("span",{class:"",innerHTML:b},null,8,ce)],10,ae))),128))])],2)]),s("div",ne,[s("ul",le,[(n(!0),l(x,null,k(e.questions,(b,c)=>(n(),A(F,{key:c,variant:b.isPicked?b.is_correct?"success":"danger":"secondary",onClick:H=>y(c),class:g(["w-8 h-8 transition-all duration-500",c===a(i)?"border-2 border-foreground":""])},{default:E(()=>[q(d(c+1),1)]),_:2},1032,["variant","onClick","class"]))),128))])])]))),128))])]))}};export{he as default};
