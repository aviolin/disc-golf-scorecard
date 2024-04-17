import{m as y,b as c,o as v,c as $,a as e,t as x,s as b,e as k,w as h,k as _,v as f,h as w,M as g,g as N,_ as V,p as D,i as U,y as A,z as E,f as C}from"./index-Dq5i4x_F.js";const I={class:"account-row"},M=e("label",{for:"displayname"},"Display name:",-1),B={__name:"AccountDisplayName",setup(u){var o;const{user:s,updateProfile:i}=y(),p=c(((o=s==null?void 0:s.value)==null?void 0:o.displayName)||""),t=c(!1),l=()=>{i(s.value,{displayName:p.value}).then(()=>{t.value=!1})};return(d,n)=>{var a;return v(),$("div",null,[e("div",I,[e("span",null,x(((a=b(s))==null?void 0:a.displayName)||"(none)"),1),e("button",{onClick:n[0]||(n[0]=r=>t.value=!0),class:"btn btn-secondary btn-small"},"Change display name")]),t.value?(v(),k(g,{key:0,onClose:n[2]||(n[2]=r=>t.value=!1)},{default:h(()=>[e("form",null,[M,_(e("input",{type:"text",id:"displayname","onUpdate:modelValue":n[1]||(n[1]=r=>p.value=r)},null,512),[[f,p.value]]),e("button",{class:"btn btn-save btn-primary",onClick:w(l,["prevent"])},"Update Display Name")])]),_:1})):N("",!0)])}}},P={class:"account-row"},S=e("label",{for:"email"},"New email:",-1),O=e("label",{for:"password"},"Confirm your password:",-1),T={__name:"AccountEmail",setup(u){const{user:s,updateEmail:i,reauthenticate:p}=y(),t=c(""),l=c(""),o=c(!1),d=()=>{if(!l.value||!s.value||s.value.email===l.value){o.value=!1;return}p(t.value).then(()=>{i(s.value,l.value).then(()=>{o.value=!1}).catch(n=>{console.error("Error updating email: ",n)})}).catch(n=>{console.log("Error reauthenticating: ",n)})};return(n,a)=>{var r;return v(),$("div",null,[e("div",P,[e("span",null,x((r=b(s))==null?void 0:r.email),1),e("button",{onClick:a[0]||(a[0]=m=>o.value=!0),class:"btn btn-secondary btn-small"},"Change email")]),o.value?(v(),k(g,{key:0,onClose:a[3]||(a[3]=m=>o.value=!1)},{default:h(()=>[e("form",null,[S,_(e("input",{type:"email",id:"email","onUpdate:modelValue":a[1]||(a[1]=m=>l.value=m)},null,512),[[f,l.value]]),O,_(e("input",{type:"password",id:"password","onUpdate:modelValue":a[2]||(a[2]=m=>t.value=m)},null,512),[[f,t.value]]),e("button",{class:"btn btn-save btn-primary",onClick:w(d,["prevent"])},"Update Email")])]),_:1})):N("",!0)])}}},z={class:"account-row"},F=e("span",null,"********",-1),L=e("label",{for:"password"},"Current password:",-1),W=e("label",{for:"newpassword"},"New password:",-1),j={__name:"AccountPassword",setup(u){const{user:s,updatePassword:i,reauthenticate:p}=y(),t=c(""),l=c(""),o=c(!1),d=()=>{if(!l.value||!t.value||!s.value){o.value=!1;return}p(t.value).then(()=>{i(s.value,l.value).then(()=>{o.value=!1})}).catch(n=>{console.error(n)})};return(n,a)=>(v(),$("div",null,[e("div",z,[F,e("button",{onClick:a[0]||(a[0]=r=>o.value=!0),class:"btn btn-secondary btn-small"},"Change password")]),o.value?(v(),k(g,{key:0,onClose:a[3]||(a[3]=r=>o.value=!1)},{default:h(()=>[e("form",null,[L,_(e("input",{type:"password",id:"password","onUpdate:modelValue":a[1]||(a[1]=r=>t.value=r)},null,512),[[f,t.value]]),W,_(e("input",{type:"password",id:"newpassword","onUpdate:modelValue":a[2]||(a[2]=r=>l.value=r)},null,512),[[f,l.value]]),e("button",{class:"btn btn-save btn-primary",onClick:w(d,["prevent"])},"Update Password")])]),_:1})):N("",!0)]))}},q=u=>(D("data-v-570cbd98"),u=u(),U(),u),G={class:"delete-button-wrapper"},H=q(()=>e("p",null,"Are you sure? This will delete your account.",-1)),J={class:"button-holder"},K={__name:"AccountDelete",setup(u){const{user:s,logout:i,deleteUser:p}=y(),t=c(!1),l=()=>{p(s.value).then(()=>{i()})};return(o,d)=>(v(),$("div",G,[e("button",{onClick:d[0]||(d[0]=n=>t.value=!0),class:"btn btn-warn btn-small"},"Delete account"),t.value?(v(),k(g,{key:0,onClose:d[2]||(d[2]=n=>t.value=!1)},{default:h(()=>[e("form",null,[H,e("div",J,[e("button",{class:"btn btn-save btn-primary",onClick:d[1]||(d[1]=w(n=>t.value=!1,["prevent"]))},"Cancel"),e("button",{class:"btn btn-warn btn-primary",onClick:w(l,["prevent"])},"Delete")])])]),_:1})):N("",!0)]))}},Q=V(K,[["__scopeId","data-v-570cbd98"]]),R=u=>(D("data-v-3931a061"),u=u(),U(),u),X=R(()=>e("h1",null,"My account",-1)),Y={__name:"AccountView",setup(u){const{user:s,logout:i}=y();return A(()=>{s.value||E.push("/log-in")}),(p,t)=>(v(),$("form",{class:"account",key:b(s)},[X,C(B),C(T),C(j),e("button",{onClick:t[0]||(t[0]=(...l)=>b(i)&&b(i)(...l)),class:"btn btn-secondary btn-small"},"Logout"),C(Q)]))}},ee=V(Y,[["__scopeId","data-v-3931a061"]]);export{ee as default};