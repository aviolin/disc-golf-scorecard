import{_ as r,m as s,d as t,s as n,o,c as u,t as c,g as i}from"./index-Dz09zd88.js";const d={key:0,class:"error"},l={__name:"AuthError",setup(m){const{error:e}=s(),a=t(()=>{switch(e.value){case"auth/user-not-found":return"User not found";case"auth/weak-password":return"Please choose a more secure password";case"auth/captcha-check-failed":return"Captcha check failed";case"auth/email-already-in-use":return"Email already in use";case"auth/invalid-email":return"Invalid email";case"auth/invalid-recipient-email":return"Invalid recipient email";case"auth/unverified-email":return"Email is not verified";case"auth/user-not-found":return"User not found";case"auth/user-disabled":return"User account has been disabled";case"auth/too-many-requests":return"Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.";case"auth/wrong-password":case"auth/missing-password":return"Incorrect password";default:return"An error occurred"}});return(h,p)=>n(e)&&a.value?(o(),u("p",d,c(a.value),1)):i("",!0)}},f=r(l,[["__scopeId","data-v-64b73eeb"]]);export{f as A};