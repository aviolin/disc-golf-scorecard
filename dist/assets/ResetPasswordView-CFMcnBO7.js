import{_ as u,m as c,b as p,x as m,y as _,c as f,a as e,j as v,v as w,w as h,o as b,p as x,i as y}from"./index-CuK8lbMY.js";const t=s=>(x("data-v-73facd55"),s=s(),y(),s),E=t(()=>e("h1",null,"Reset your password",-1)),R=t(()=>e("label",{for:"email"},"Email",-1)),S=t(()=>e("button",{type:"submit",class:"btn btn-primary"},"Send Password Reset Email",-1)),B={__name:"ResetPasswordView",setup(s){const{user:i,auth:r,sendPasswordResetEmail:l}=c(),a=p("");m(()=>{i.value&&_.push("/")});const n=()=>{a.value&&l(r.value,a.value)};return(I,o)=>(b(),f("form",{class:"login-form container",onSubmit:h(n,["prevent"])},[E,e("div",null,[R,v(e("input",{type:"email",id:"email","onUpdate:modelValue":o[0]||(o[0]=d=>a.value=d)},null,512),[[w,a.value]])]),S],32))}},V=u(B,[["__scopeId","data-v-73facd55"]]);export{V as default};