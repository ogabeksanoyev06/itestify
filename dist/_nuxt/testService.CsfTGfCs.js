import{b as e}from"./authService.BBKLY34u.js";const r={sciences:s=>e.get("tests/sciences/",s),specialists:s=>e.get("tests/specialists/",s),subjects:s=>e.get(`tests/subjects/?science_id=${s}`),classes:s=>e.get("tests/classes/",s),testTypes:s=>{const t=s?`tests/test-types/?category_type=${s}`:"tests/test-types/";return e.get(t)},testHistory:s=>e.get("tests/test-history/",s),examTests:s=>e.get("tests/exam-tests/",s),researches:s=>e.get("tests/researches/",s),researchesId:s=>e.get(`tests/researches/${s}/`),specifications:s=>e.get("tests/researches/specifications",s)};export{r as t};