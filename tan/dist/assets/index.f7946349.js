import{d as P,r as d,c as Q,o as R,a as x,b as n,w as l,e as _,f as N,g as t,n as k,F as U,h as I,i as o,t as c,j as T}from"./index.360fd4e6.js";const W={class:"center"},X=t("span",{class:"blue"},"\u8EAB\u9AD8",-1),Y=t("span",{class:"arcoblue"},"\u4F53\u91CD",-1),ee={class:"grid gap-2 items-center justify-between grid-cols-3"},ae=t("span",{class:"gold"},"\u4F4E\u78B3",-1),ue=t("span",{class:"lime"},"\u4E2D\u78B3",-1),te=t("span",{class:"green"},"\u9AD8\u78B3",-1),le={class:"grid gap-2 items-center justify-between grid-cols-3"},ne=t("span",{class:"gold"},"\u4F4E\u8102 ",-1),oe=t("span",{class:"lime"},"\u4E2D\u8102",-1),se=t("span",{class:"green"},"\u9AD8\u8102 ",-1),re=t("span",{class:"green"},"\u86CB\u767D ",-1),ie={class:"grid gap-1 grid-cols-4 items-center justify-between"},de={class:"mb-1"},ce={class:"w-70px"},pe={class:"flex items-center"},_e={class:"w-40px"},me={class:"flex items-center"},ve={class:"w-40px"},ge={class:"flex items-center"},fe={class:"w-40px"},he=t("p",{class:"text-[#fff]"},"\u4F4E\u78B3\u65E5\u78B3\u8102\u6BD4\uFF1A10%/50%",-1),be=t("p",{class:"text-[#fff]"},"\u4E2D\u78B3\u65E5\u78B3\u8102\u6BD4\uFF1A35%/35%",-1),ye=t("p",{class:"text-[#fff]"},"\u9AD8\u78B3\u65E5\u78B3\u8102\u6BD4\uFF1A50%/10%",-1),Fe={class:"red"},ze=t("br",null,null,-1),De=t("br",null,null,-1),Ve={class:"grid gap-1 grid-cols-3 items-center justify-between"},Be=P({__name:"index",setup(xe){const p=d("180"),s=d("50"),m=d("1.5"),v=d("2.5"),g=d("5"),f=d("0.7"),h=d("0.5"),b=d("0.4"),F=d("1.5"),y=Q(()=>(s.value/(p.value/100*p.value/100)).toFixed(2)),S=e=>{if(e===0)return"\u4F4E";if(e===1)return"\u4E2D";if(e===2)return"\u9AD8"},z=e=>{if(e===0)return"gold";if(e===1)return"lime";if(e===2)return"green"},w=(e,a=0)=>{if(a===0){if(e===0)return~~(s.value*m.value);if(e===1)return~~(s.value*v.value);if(e===2)return~~(s.value*g.value)}if(a===1){if(e===0)return Number(m.value).toFixed(1);if(e===1)return Number(v.value).toFixed(1);if(e===2)return Number(g.value).toFixed(1)}},A=(e,a=0)=>{if(a===0){if(e===0)return~~(s.value*f.value);if(e===1)return~~(s.value*h.value);if(e===2)return~~(s.value*b.value)}if(a===1){if(e===0)return Number(f.value).toFixed(1);if(e===1)return Number(h.value).toFixed(1);if(e===2)return Number(b.value).toFixed(1)}},E=(e,a=0)=>{if(a===0)return~~(s.value*F.value);if(a===1)return Number(F.value).toFixed(1)},B=e=>{switch(!0){case Number(e)<18.5:return"rgba(var(--cyan-6))";case(Number(e)>18.5&&Number(e)<23.9):return"rgba(var(--green-6))";case(Number(e)>=24&&Number(e)<24.1):return"rgba(var(--lime-6))";case(Number(e)>24.1&&Number(e)<27.9):return"rgba(var(--gold-6))";case(Number(e)>=28&&Number(e)<30):return"rgba(var(--orange-6))";case(Number(e)>=30&&Number(e)<40):return"rgba(var(--orangered-6))";case Number(e)>=40:return"rgba(var(--red-6))"}},j=[{title:"\u5468",dataIndex:"week",slotName:"week"},{title:"\u78B3\u6C34",dataIndex:"tanshui",slotName:"tanshui"},{title:"\u8102\u80AA",dataIndex:"zhifang",slotName:"zhifang"},{title:"\u86CB\u767D\u8D28",dataIndex:"danbaizhi",slotName:"danbaizhi"}],V=d([{key:"1",week:"\u5468\u4E00",zhifang:.7,tanshui:1.5,danbaizhi:1.5,type:0},{key:"2",week:"\u5468\u4E8C",zhifang:.7,tanshui:1.5,danbaizhi:1.5,type:0},{key:"3",week:"\u5468\u4E09",zhifang:.7,tanshui:1.5,danbaizhi:1.5,type:0},{key:"4",week:"\u5468\u56DB",zhifang:.5,tanshui:2.5,danbaizhi:1.5,type:1},{key:"5",week:"\u5468\u4E94",zhifang:.7,tanshui:1.5,danbaizhi:1.5,type:0},{key:"6",week:"\u5468\u516D",zhifang:.7,tanshui:1.5,danbaizhi:1.5,type:0},{key:"7",week:"\u5468\u65E5",zhifang:.4,tanshui:5,danbaizhi:1.5,type:2}]),M=[{value:0,label:"\u4F4E",color:"gold"},{value:1,label:"\u4E2D",color:"lime"},{value:2,label:"\u9AD8",color:"green"}],L=e=>{},J=()=>{const e={tizhong:s.value,shengao:p.value,tanshui_di:m.value,tanshui_zhong:v.value,tanshui_gao:g.value,zhifang_di:f.value,zhifang_zhong:h.value,zhifang_gao:b.value,danbaizhi:F.value,data:V.value};localStorage.setItem("localData",JSON.stringify(e))},O=()=>{const e=localStorage.getItem("localData");if(e){const a=JSON.parse(e);s.value=a.tizhong,p.value=a.shengao,m.value=a.tanshui_di,v.value=a.tanshui_zhong,g.value=a.tanshui_gao,f.value=a.zhifang_di,h.value=a.zhifang_zhong,b.value=a.zhifang_gao,V.value=a.data}};return R(()=>{O()}),(e,a)=>{const i=_("a-input"),Z=_("a-option"),$=_("a-select"),C=_("a-space"),r=_("a-tag"),q=_("a-table"),G=_("a-button");return N(),x("div",W,[n(C,{direction:"vertical",size:"large",class:"w-[100%]"},{default:l(()=>[n(i,{modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=u=>p.value=u),type:"number",error:!p.value,placeholder:"\u8BF7\u8F93\u5165\u8EAB\u9AD8"},{prepend:l(()=>[X]),_:1},8,["modelValue","error"]),n(i,{modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=u=>s.value=u),type:"number",error:!s.value,placeholder:"\u8BF7\u8F93\u5165\u4F53\u91CD"},{prepend:l(()=>[Y]),_:1},8,["modelValue","error"]),n(i,{modelValue:y.value,"onUpdate:modelValue":a[2]||(a[2]=u=>y.value=u),readonly:"",style:{"pointer-events":"none"},"input-attrs":{style:{color:B(y.value)}}},{prepend:l(()=>[t("span",{style:k({color:B(y.value)})},"BMI ",4)]),_:1},8,["modelValue","input-attrs"]),t("div",ee,[n(i,{modelValue:m.value,"onUpdate:modelValue":a[3]||(a[3]=u=>m.value=u),type:"number"},{prepend:l(()=>[ae]),_:1},8,["modelValue"]),n(i,{modelValue:v.value,"onUpdate:modelValue":a[4]||(a[4]=u=>v.value=u),type:"number"},{prepend:l(()=>[ue]),_:1},8,["modelValue"]),n(i,{modelValue:g.value,"onUpdate:modelValue":a[5]||(a[5]=u=>g.value=u),type:"number"},{prepend:l(()=>[te]),_:1},8,["modelValue"])]),t("div",le,[n(i,{modelValue:f.value,"onUpdate:modelValue":a[6]||(a[6]=u=>f.value=u),type:"number"},{prepend:l(()=>[ne]),_:1},8,["modelValue"]),n(i,{modelValue:h.value,"onUpdate:modelValue":a[7]||(a[7]=u=>h.value=u),type:"number"},{prepend:l(()=>[oe]),_:1},8,["modelValue"]),n(i,{modelValue:b.value,"onUpdate:modelValue":a[8]||(a[8]=u=>b.value=u),type:"number"},{prepend:l(()=>[se]),_:1},8,["modelValue"])]),n(i,{modelValue:F.value,"onUpdate:modelValue":a[9]||(a[9]=u=>F.value=u),type:"number"},{prepend:l(()=>[re]),_:1},8,["modelValue"]),t("div",ie,[(N(!0),x(U,null,I(V.value,(u,H)=>(N(),x("div",{key:H},[t("p",de,c(u.week),1),n($,{modelValue:u.type,"onUpdate:modelValue":D=>u.type=D,class:T(z(u.type))},{default:l(()=>[(N(),x(U,null,I(M,(D,K)=>n(Z,{key:K,value:D.value,label:D.label,class:T(D.color)},null,8,["value","label","class"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue","class"])]))),128))])]),_:1}),n(q,{columns:j,pagination:!1,data:V.value,"row-class":L,hoverable:!1,style:{"margin-top":"20px"}},{week:l(({record:u})=>[t("div",ce,[o(c(u.week)+" ",1),n(r,{color:z(u.type)},{default:l(()=>[o(c(S(u.type)),1)]),_:2},1032,["color"])])]),tanshui:l(({record:u})=>[t("div",pe,[t("span",_e,c(w(u.type)),1),n(r,{color:z(u.type)},{default:l(()=>[o(c(w(u.type,1)),1)]),_:2},1032,["color"])])]),zhifang:l(({record:u})=>[t("div",me,[t("span",ve,c(A(u.type)),1),n(r,{color:z(u.type)},{default:l(()=>[o(c(A(u.type,1)),1)]),_:2},1032,["color"])])]),danbaizhi:l(({record:u})=>[t("div",ge,[t("span",fe,c(E(u.type)),1),n(r,{color:z(u.type)},{default:l(()=>[o(c(E(u.type,1)),1)]),_:2},1032,["color"])])]),_:1},8,["data"]),n(C,{direction:"vertical",size:"large",class:"w-[100%] mt-2"},{default:l(()=>[he,be,ye,t("div",null,[t("span",Fe,[o("BMI\u4E2D\u56FD\u6807\u51C6\uFF1A"),t("span",{style:k({color:B(y.value)})},"("+c(y.value)+")",5)]),ze,De,t("div",Ve,[n(r,{color:"cyan"},{default:l(()=>[o("\u504F\u7626\uFF1A< 18.5 ")]),_:1}),n(r,{color:"green"},{default:l(()=>[o("\u6B63\u5E38\uFF1A18.5 - 23.9 ")]),_:1}),n(r,{color:"lime"},{default:l(()=>[o("\u8D85\u91CD\uFF1A>= 24 ")]),_:1}),n(r,{color:"gold"},{default:l(()=>[o("\u504F\u80D6\uFF1A24 - 27.9 ")]),_:1}),n(r,{color:"orange"},{default:l(()=>[o("\u80A5\u80D6\uFF1A>=28 ")]),_:1}),n(r,{color:"orangered"},{default:l(()=>[o("\u91CD\u5EA6\u80A5\u80D6\uFF1A>=30 ")]),_:1}),n(r,{color:"red"},{default:l(()=>[o("\u6781\u91CD\u5EA6\u80A5\u80D6\uFF1A>=40 ")]),_:1})])])]),_:1}),n(G,{class:"mt-4",long:"",onClick:a[10]||(a[10]=u=>J())},{default:l(()=>[o("\u4FDD\u5B58")]),_:1})])}}});export{Be as default};
