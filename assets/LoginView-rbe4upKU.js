import{_ as w,m as h,b as p,x as g,y as b,q as k,c as x,f as r,a as e,j as d,v as c,h as y,k as t,w as _,o as V,p as L,i as I}from"./index-Cjd9mBC3.js";import{A as B}from"./AuthError-CzG4CiAk.js";const i=o=>(L("data-v-5a5424e1"),o=o(),I(),o),C={class:"login-form"},N=i(()=>e("h1",null,"Log in",-1)),E=i(()=>e("label",{for:"email"},"Email",-1)),M=i(()=>e("label",{for:"password"},"Password",-1)),R={class:"signup-link"},S={__name:"LoginView",setup(o){const{login:m,user:v}=h(),a=p(""),n=p(""),f=()=>{m(a.value,n.value)};return g(()=>{v.value&&b.push("/")}),(U,s)=>{const u=k("RouterLink");return V(),x("form",C,[N,r(B),e("div",null,[E,d(e("input",{type:"email",id:"email","onUpdate:modelValue":s[0]||(s[0]=l=>a.value=l)},null,512),[[c,a.value]])]),e("div",null,[M,d(e("input",{type:"password",id:"password","onUpdate:modelValue":s[1]||(s[1]=l=>n.value=l)},null,512),[[c,n.value]])]),e("button",{type:"submit",class:"btn btn-primary",onClick:y(f,["prevent"])},"Log In"),e("div",R,[e("p",null,[t("No account? "),r(u,{to:"sign-up"},{default:_(()=>[t("Create an account")]),_:1})]),e("p",null,[t("Forgot your password? "),r(u,{to:"/reset-password"},{default:_(()=>[t("Reset your password.")]),_:1})])])])}}},T=w(S,[["__scopeId","data-v-5a5424e1"]]);export{T as default};
