import{_ as m,u as y,o as l,c as n,a as e,t as u,F as p,r as _,b as k,d as C,e as f,f as v,n as S,g as b,h as w,p as I,i as g}from"./index-CyUVwgDz.js";const O={class:"score-modal"},x={class:"score-modal-inner"},H={class:"button-holder"},j=["onClick"],M={__name:"ScoreModal",props:{player:Object,hole:Object},emits:["close"],setup(o,{emit:t}){const c=o,d=y(),s=t,a=r=>{d.setScore(c.player.id,c.hole.id,r),s("close")};return(r,i)=>(l(),n("div",O,[e("div",x,[e("button",{class:"btn btn-close",onClick:i[0]||(i[0]=()=>s("close"))},"X"),e("p",null,"How many throws did "+u(o.player.name)+" make on hole "+u(o.hole.id)+"?",1),e("div",H,[(l(),n(p,null,_(9,h=>e("button",{class:"btn btn-throws",onClick:()=>a(h),key:h},u(h),9,j)),64))])])]))}},V=m(M,[["__scopeId","data-v-14fb6349"]]),B={class:"score-wrapper"},P={__name:"ScoreInfo",props:{player:Object,hole:Object},setup(o){const t=o,c=k(!1),d=a=>{c.value=a},s=C(()=>{if(!t.player.holes[t.hole.id].score)return"none";switch(t.player.holes[t.hole.id].score-t.hole.par){case-3:return"ace";case-2:return"eagle";case-1:return"birdie";case 0:return"par";case 1:return"bogey";case 2:return"double-bogey";case 3:return"triple-bogey";default:return"other"}});return(a,r)=>(l(),n("td",{class:S("score-"+s.value)},[e("div",B,[e("button",{onClick:r[0]||(r[0]=()=>d(!0))},[e("b",null,u(o.player.holes[o.hole.id].score),1)]),c.value?(l(),f(V,{key:0,player:o.player,hole:o.hole,onClose:r[1]||(r[1]=()=>d(!1))},null,8,["player","hole"])):v("",!0)])],2))}},N=m(P,[["__scopeId","data-v-6a33e59d"]]),F={class:"score-modal"},X={class:"score-modal-inner"},z={class:"button-holder"},D=["onClick"],E={__name:"HoleModal",props:{hole:Object},emits:["close"],setup(o,{emit:t}){const c=o,d=y(),s=t,a=r=>{d.setPar(c.hole.id,r),s("close")};return(r,i)=>(l(),n("div",F,[e("div",X,[e("button",{class:"btn btn-close",onClick:i[0]||(i[0]=()=>s("close"))},"X"),e("p",null,"What is par for hole "+u(o.hole.id)+"?",1),e("div",z,[(l(),n(p,null,_(9,h=>e("button",{class:"btn btn-throws",onClick:()=>a(h),key:h},u(h),9,D)),64))])])]))}},G=m(E,[["__scopeId","data-v-3cc4df61"]]),L={class:"hole-number"},T={__name:"HoleInfo",props:{hole:Object},setup(o){const t=k(!1);y();const c=d=>{t.value=d};return(d,s)=>(l(),n(p,null,[e("button",{onClick:s[0]||(s[0]=()=>c(!0))},[e("span",L,u(o.hole.id),1),e("b",null,u(o.hole.par),1)]),t.value?(l(),f(G,{key:0,hole:o.hole,onClose:s[1]||(s[1]=()=>c(!1))},null,8,["hole"])):v("",!0)],64))}},W=m(T,[["__scopeId","data-v-7d21a9c4"]]),$=o=>(I("data-v-7de9bddf"),o=o(),g(),o),q={class:"scorecard-wrapper"},A={class:"scorecard"},J=$(()=>e("th",{class:"hole"},"Hole",-1)),K={class:"player-name"},Q={class:"hole"},R={class:"scorecard-total-row"},U=$(()=>e("td",{class:"hole"}," Total ",-1)),Y={__name:"PlayView",setup(o){const t=y();return(c,d)=>(l(),n("div",q,[e("table",A,[e("thead",null,[e("tr",null,[J,(l(!0),n(p,null,_(b(t).players,(s,a)=>(l(),n("th",{key:a},[e("div",K,u(s.name),1)]))),128))])]),(l(!0),n(p,null,_(b(t).holes,(s,a)=>(l(),n("tr",{class:"scorecard-row",key:a},[e("td",Q,[w(W,{hole:s},null,8,["hole"])]),(l(!0),n(p,null,_(b(t).players,(r,i)=>(l(),f(N,{player:r,hole:s,key:i},null,8,["player","hole"]))),128))]))),128)),e("tfoot",R,[U,(l(!0),n(p,null,_(b(t).players,(s,a)=>(l(),n("td",{key:a},u(s.total>0?`+${s.total}`:s.total),1))),128))])])]))}},ee=m(Y,[["__scopeId","data-v-7de9bddf"]]);export{ee as default};
