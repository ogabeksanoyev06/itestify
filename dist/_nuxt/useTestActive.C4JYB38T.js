import{b as I,a as f,c as N}from"./entry.rnvC2PpJ.js";import{u as O}from"./useApi.B8Sr6wSI.js";import{t as r}from"./test.DmJ8w_Fl.js";import{a as m}from"./swiper-vue.f8ijT8wh.js";const Y=window.setInterval,B=()=>{const T=I(),{$toast:o}=N(),l=O(),y=f("testResult"),v=m(!1),u=m(0),w=f("testActiveNumber"),s=m({}),c=m(!1),h=()=>{let t=Y(()=>{if(u.value<=0){_(),clearInterval(t);return}u.value--},1e3)},k=t=>{let e=parseInt(t,10),a=Math.floor(e/3600),n=Math.floor((e-a*3600)/60),i=e-a*3600-n*60;return a<10&&(a="0"+a),n<10&&(n="0"+n),i<10&&(i="0"+i),a+":"+n+":"+i},b=t=>{s.value={subjectName:t.name,questionBall:t.ball,questionCount:t.questions.length,type:t.type,startedTime:t.time_interval.started_time,finishAt:t.time_interval.finish_at,testId:t.time_interval.id,questions:t.questions.map(e=>({id:e.id,question:e.question,answers:[e.answer1,e.answer2,e.answer3,e.answer4],correctAnswer:e.correct_answer,isPicked:e.is_picked,answer:e.answer}))}},E=t=>{s.value={subjectName:t.name,type:t.type,testId:t.time_interval.id,questions:t.questions.map(e=>({id:e.id,question:e.question,answers:[e.answer1,e.answer2,e.answer3,e.answer4],correctAnswer:e.correct_answer,isPicked:e.is_picked,answer:e.answer}))}},g=t=>{s.value={subjectName:t.name,type:t.type,testId:t.time_interval.id,test_type_id:t.test_type_id,questions:t.questions.map(e=>({id:e.id,question:e.question,answers:[e.answer1,e.answer2,e.answer3,e.answer4],correctAnswer:e.correct_answer,isPicked:e.is_picked,answer:e.answer}))}},A=t=>{s.value=t},P=t=>{t!==w.value&&(w.value=t,selectedQuestions())},_=async()=>{let t="",e={question_id:null,total_result_id:s.value.testId,answer:null,picked:null,finishing:!0};switch(s.value.type){case r.TYPE_ONLINE:t="tests/online-test/done/";break;case r.TYPE_BLOCK:t="tests/science-test/done/";break;case r.TYPE_SCHOOL:t="tests/school-test/done/";break;case r.TYPE_RESEARCH:t="tests/researches/test/done/",e.test_type_id=s.value.test_type_id;break;default:console.error("Unknown test type");return}try{const a=await l.post(t,e);y.value=a.result,console.log(a),T.push("/test-result")}catch(a){console.log(a.response)}};return{loading:v,testTimer:u,testActiveNumber:w,tests:s,hasActiveTest:c,setTimer:h,timerFormat:k,getActiveTestNumber:P,testFinish:_,selectAnswer:async(t,e,a)=>{let n="",i={question_id:Number(t),total_result_id:s.value.testId,answer:e,picked:!0,finishing:!1};switch(s.value.type){case r.TYPE_ONLINE:n="tests/online-test/done/";break;case r.TYPE_BLOCK:n="tests/science-test/done/";break;case r.TYPE_SCHOOL:n="tests/school-test/done/";break;case r.TYPE_RESEARCH:n="tests/researches/test/done/";break;default:console.error("Unknown test type");return}try{const d=await l.post(n,i);d.code===200&&(o.success(d.message),s.value.questions.forEach(p=>{p.id===t&&(p.isPicked=!0,p.answer=e)}))}catch(d){o.error(d.response.data.message)}},getTestLiveTime:async()=>{try{const t=await l.post("tests/get-test-live-time/",{test_type:s.value.type,test_id:s.value.testId});t.code===200&&(o.success(t.message),u.value=t.data.left_time*60)}catch{_()}},getActiveTest:async t=>{v.value=!0;try{const e=await l.get("tests/active-tests/",t);switch(e.type){case r.TYPE_BLOCK:b(e),c.value=!0;break;case r.TYPE_SCHOOL:E(e),c.value=!0;break;case r.TYPE_RESEARCH:g(e),c.value=!0;break;case r.TYPE_ONLINE:A(e),c.value=!0;break;default:c.value=!1;break}}catch(e){o.error(e.response.data.message),c.value=!1}finally{v.value=!1}}}};export{B as u};
