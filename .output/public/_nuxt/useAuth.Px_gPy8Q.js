import{u as h}from"./useApi.B8Sr6wSI.js";import{a as p,h as v,n as y,c as k}from"./entry.rnvC2PpJ.js";import{a as w,k as z}from"./swiper-vue.f8ijT8wh.js";const _=()=>{const r=h(),{$toast:a}=k(),n=p("access_token"),i=p("refresh_token"),u=v(),t=w(!1),f=async s=>{t.value=!0;try{const e=await r.post("users/login/",s);n.value=e.access,i.value=e.refresh,u.push("/"),a.success("Tizimga muvaffaqiyatli kirdingiz!")}catch(e){a.error(e.response.data.detail||"Login xatoligi")}finally{t.value=!1}},d=async(s,e)=>{var c,l;t.value=!0;try{const o=await r.post("users/register/",{phone:"998"+s.phone,first_name:s.firstname,last_name:s.lastname,username:s.username,password:s.password,type:e});o&&parseInt(o.code)===201&&(u.push("/auth/login"),a.success("Ro'yxatdan muvaffaqiyatli o'tdingiz!"))}catch(o){a.error(((l=(c=o.response)==null?void 0:c.data)==null?void 0:l.message)||"Ro‘yxatdan o‘tish xatosi")}finally{t.value=!1}},m=async s=>{t.value=!0;try{(await r.post("users/reset-password/",s)).code===200&&a.success("Parol muvaffaqiyatli o'zgartirildi")}catch(e){a.error(e.response.data.detail||"Xatolik yuz berdi")}finally{t.value=!1}},g=z(()=>!!n.value&&!!i.value);return{login:f,register:d,resetPassword:m,logout:()=>{n.value=null,i.value=null,y("/auth/login"),a.success("Tizimdan chiqdingiz")},isAuthenticated:g}};export{_ as u};
