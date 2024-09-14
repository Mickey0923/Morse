import{S as z,u as N,B as O}from"./index-a6e338db.js";import{h as S,i as P,t as E,j as U,k as T,p as D,a as l,l as F,m as A,g as k,_ as J,o as I,c as B,n as W,q,s as K,u as X,v as Y,f as b,w as $,b as n,x,y as V,F as H,z as Q,A as Z,B as ee,C as ae}from"./index-6e754a2e.js";import{_ as te}from"./_plugin-vue_export-helper-c27b6911.js";const M=Symbol("ArcoCard");var R=S({name:"Card",components:{Spin:z},props:{bordered:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},size:{type:String},headerStyle:{type:Object,default:()=>({})},bodyStyle:{type:Object,default:()=>({})},title:{type:String},extra:{type:String}},setup(t,{slots:a}){const e=P("card"),{size:i}=E(t),{mergedSize:_}=N(i),j=U(()=>_.value==="small"||_.value==="mini"?"small":"medium"),d=u=>{const v=F(u);return l("div",{class:`${e}-actions`},[l("div",{class:`${e}-actions-right`},[v.map((f,w)=>l("span",{key:`action-${w}`,class:`${e}-actions-item`},[f]))])])},c=T({hasMeta:!1,hasGrid:!1,slots:a,renderActions:d});D(M,c);const s=U(()=>[e,`${e}-size-${j.value}`,{[`${e}-loading`]:t.loading,[`${e}-bordered`]:t.bordered,[`${e}-hoverable`]:t.hoverable,[`${e}-contain-grid`]:c.hasGrid}]);return()=>{var u,v,f,w,p,o,r;const m=!!((u=a.title)!=null?u:t.title),y=!!((v=a.extra)!=null?v:t.extra);return l("div",{class:s.value},[(m||y)&&l("div",{class:[`${e}-header`,{[`${e}-header-no-title`]:!m}],style:t.headerStyle},[m&&l("div",{class:`${e}-header-title`},[(w=(f=a.title)==null?void 0:f.call(a))!=null?w:t.title]),y&&l("div",{class:`${e}-header-extra`},[(o=(p=a.extra)==null?void 0:p.call(a))!=null?o:t.extra])]),a.cover&&l("div",{class:`${e}-cover`},[a.cover()]),l("div",{class:`${e}-body`,style:t.bodyStyle},[t.loading?l(z,null,null):(r=a.default)==null?void 0:r.call(a),a.actions&&!c.hasMeta&&d(a.actions())])])}}}),C=S({name:"CardMeta",props:{title:{type:String},description:{type:String}},setup(t,{slots:a}){const e=P("card-meta"),i=A(M);return k(()=>{i&&(i.hasMeta=!0)}),()=>{var _,j,d,c,s,u;const v=!!((_=a.title)!=null?_:t.title),f=!!((j=a.description)!=null?j:t.description);return l("div",{class:e},[(v||f)&&l("div",{class:`${e}-content`},[v&&l("div",{class:`${e}-title`},[(c=(d=a.title)==null?void 0:d.call(a))!=null?c:t.title]),f&&l("div",{class:`${e}-description`},[(u=(s=a.description)==null?void 0:s.call(a))!=null?u:t.description])]),(a.avatar||(i==null?void 0:i.slots.actions))&&l("div",{class:[`${e}-footer `,{[`${e}-footer-only-actions`]:!a.avatar}]},[a.avatar&&l("div",{class:`${e}-avatar`},[a.avatar()]),i&&i.slots.actions&&i.renderActions(i.slots.actions())])])}}});const le=S({name:"CardGrid",props:{hoverable:{type:Boolean,default:!1}},setup(t){const a=P("card-grid"),e=A(M);return k(()=>{e&&(e.hasGrid=!0)}),{cls:U(()=>[a,{[`${a}-hoverable`]:t.hoverable}])}}});function ne(t,a,e,i,_,j){return I(),B("div",{class:q(t.cls)},[W(t.$slots,"default")],2)}var L=J(le,[["render",ne]]);const ie=Object.assign(R,{Meta:C,Grid:L,install:(t,a)=>{K(t,a);const e=X(a);t.component(e+R.name,R),t.component(e+C.name,C),t.component(e+L.name,L)}});const oe=""+new URL("冬至-cdb2d744.jpeg",import.meta.url).href,re=""+new URL("处暑-a56da790.jpeg",import.meta.url).href,se=""+new URL("夏至-febfcb47.jpeg",import.meta.url).href,ce=""+new URL("大寒-3065b942.jpeg",import.meta.url).href,ue=""+new URL("大暑-40bcd9ed.jpeg",import.meta.url).href,de=""+new URL("大雪-90f0760d.jpeg",import.meta.url).href,_e=""+new URL("寒露-16773d6e.jpeg",import.meta.url).href,ve=""+new URL("小寒-f5e074d1.jpeg",import.meta.url).href,pe=""+new URL("小暑-718232f9.jpeg",import.meta.url).href,me=""+new URL("小满-d25f02e4.jpeg",import.meta.url).href,ge=""+new URL("小雪-de1f11a1.jpeg",import.meta.url).href,fe=""+new URL("惊蛰-d28d4c9d.jpeg",import.meta.url).href,be=""+new URL("春分-bd312f9c.jpeg",import.meta.url).href,he=""+new URL("清明-cb8fcb7a.jpeg",import.meta.url).href,je=""+new URL("白露-2d274fa2.jpeg",import.meta.url).href,ye=""+new URL("秋分-6af6c3b5.jpeg",import.meta.url).href,we=""+new URL("立冬-392f1d66.jpeg",import.meta.url).href,xe=""+new URL("立夏-8b443bab.jpeg",import.meta.url).href,$e=""+new URL("立春-b87ad69c.jpeg",import.meta.url).href,Ve=""+new URL("立秋-a174e892.jpeg",import.meta.url).href,Ce=""+new URL("芒种-00bf77da.jpeg",import.meta.url).href,Se=""+new URL("谷雨-5cdc8fb9.jpeg",import.meta.url).href,Re=""+new URL("雨水-329e9b7d.jpeg",import.meta.url).href,Le=""+new URL("霜降-74aa498f.jpeg",import.meta.url).href;var Ue=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")};const Ie=Y(Ue),h=t=>(ee("data-v-e865fb71"),t=t(),ae(),t),Be={class:"content"},Pe=h(()=>n("h2",null,"基本的赌桌规则:",-1)),ke=h(()=>n("p",null," 1.游戏开始时，会抽取一张「公共牌」放在桌子中央，展示给所有人看。随后每个人再抽取两张牌，一明一暗，明牌可以展示给所有人，暗牌只能自己查看。 ",-1)),Me=h(()=>n("p",null," 2.然后需要用自己手中的两张牌，加上桌子中央的「公共牌」，用三张牌和所有人比大小，牌面最大者将赢得桌子上的所有筹码。共计八局的游戏，之后无论筹码如何，游戏都会结束。 ",-1)),ze=h(()=>n("p",null," 3.开局时每个人缴纳一颗「道」，随后给每人发出一张「明牌」，所有人需要展示出这一张「明牌」，随后由牌面上写的日期最大的人开始选择是否加注。 ",-1)),Ae=h(()=>n("p",null," 4.在第一个人加注之后，剩下的人将按照顺时针顺序做出三个选择，要么选择「认输」，要么选择「跟注」，要么继续选择「加注」，顾名思义，认输便是放弃桌面上已经下注的「道」，选择及时止损。「跟注」将拿出和第一人同样的筹码，而「加注」的筹码要多于第一人。 ",-1)),Ge=h(()=>n("p",null," 5.“而一旦有人中途「加注」，剩下的没有「认输」的人则必须按照顺时针重新开始这三个选择，直到所有人「认输」或者所有人「跟注」为止。 ",-1)),Ne=h(()=>n("p",null,[n("span",{class:"text-red"},"*"),x(" 每个节气相隔十五天")],-1)),Oe=h(()=>n("p",null,[n("span",{class:"text-red"},"*"),x(" 春雨惊春清谷天，夏满芒夏暑相连。秋处露秋寒霜降，冬雪雪冬小大寒。 ")],-1)),Ee=h(()=>n("p",null,[n("span",{class:"text-red"},"*"),x(" 上半年逢六廿一，下半年逢八廿三，「处暑」和「霜降」相差六十天，所以「处暑」的日期是七月廿三。 ")],-1)),Te=Z('<div class="table" data-v-e865fb71><div class="player" data-v-e865fb71>Player 1</div><div class="player" data-v-e865fb71>Player 2</div><div class="player" data-v-e865fb71>Player 3</div><div class="player" data-v-e865fb71>Player 4</div><div class="public-card" data-v-e865fb71>Public Card</div><div class="hand-cards" data-v-e865fb71><div class="card" data-v-e865fb71>Card 1</div><div class="card" data-v-e865fb71>Card 2</div><div class="card" data-v-e865fb71>Card 3</div></div></div>',1),De={class:"flex justify-around items-center my-[20px]"},Fe={class:"solarBox"},Je=["src","alt"],We={class:"flex w-[100%] justify-between mt-5"},qe=S({__name:"shuo",setup(t){const a=b(null),e=b(null),i=b(0),_=b(0),j=b(200),d=b(null),c=b(null),s=b(0),u=b(3);k(()=>{e.value=a.value.getContext("2d"),i.value=a.value.width/2,_.value=a.value.height/2,j.value=200,d.value=new Image,d.value.src="/public/ai/节气bg.png",d.value.onload=()=>{e.value.drawImage(d.value,0,0,a.value.width,a.value.height)},c.value=new Image,c.value.src="/public/ai/节气.png",c.value.onload=()=>{e.value.drawImage(c.value,153,145.5,96,110)};const p=new Ie.Server({port:8080}),o={};p.on("connection",r=>{r.on("message",m=>{const g=JSON.parse(m).playerId;o[g]||(o[g]=["card1","card2","card3"]),r.send(JSON.stringify({cards:o[g]}))}),r.on("close",()=>{delete o[r.playerId]})})});const v=(p="add",o=1)=>{if(e.value.clearRect(0,0,a.value.width,a.value.height),e.value.drawImage(d.value,0,0,a.value.width,a.value.height),e.value.drawImage(c.value,153,145.5,96,110),p=="add"){if(s.value>24)return s.value=24;s.value=s.value+o}if(p=="sub"){if(s.value<=0)return s.value=0;s.value=s.value-o}for(let r=0;r<s.value;r++){const m=r*Math.PI/12-Math.PI/2,y=(r+1.03)*Math.PI/12-Math.PI/2;e.value.beginPath(),e.value.moveTo(i.value,_.value),e.value.arc(i.value,_.value,j.value,m,y,!1),e.value.closePath(),e.value.fillStyle="#fff56d",e.value.fill()}e.value.drawImage(c.value,153,145.5,96,110)},f=[{name:"立春",nValue:"正月初六",value:"1.6"},{name:"雨水",nValue:"正月廿一",value:"1.21"},{name:"惊蛰",nValue:"二月初六",value:"2.6"},{name:"春分",nValue:"二月廿一",value:"3.21"},{name:"清明",nValue:"三月初六",value:"3.6"},{name:"谷雨",nValue:"三月廿一",value:"3.21"},{name:"立夏",nValue:"四月初六",value:"4.6"},{name:"小满",nValue:"四月廿一",value:"4.21"},{name:"芒种",nValue:"五月初六",value:"5.6"},{name:"夏至",nValue:"五月廿一",value:"5.21"},{name:"小暑",nValue:"六月初六",value:"6.6"},{name:"大暑",nValue:"六月廿一",value:"6.21"},{name:"立秋",nValue:"七月初八",value:"7.8"},{name:"处暑",nValue:"七月廿三",value:"7.23"},{name:"白露",nValue:"八月初三",value:"8.3"},{name:"秋分",nValue:"八月十八",value:"8.18"},{name:"寒露",nValue:"九月初八",value:"9.8"},{name:"霜降",nValue:"九月廿三",value:"9.23"},{name:"立冬",nValue:"十月初八",value:"10.8"},{name:"小雪",nValue:"十月廿三",value:"10.23"},{name:"大雪",nValue:"十一月初八",value:"11.8"},{name:"冬至",nValue:"十一月廿三",value:"11.23"},{name:"小寒",nValue:"十二月初八",value:"12.8"},{name:"大寒",nValue:"十二月廿三",value:"12.23"}],w=p=>new URL(Object.assign({"/public/ai/冬至.jpeg":oe,"/public/ai/处暑.jpeg":re,"/public/ai/夏至.jpeg":se,"/public/ai/大寒.jpeg":ce,"/public/ai/大暑.jpeg":ue,"/public/ai/大雪.jpeg":de,"/public/ai/寒露.jpeg":_e,"/public/ai/小寒.jpeg":ve,"/public/ai/小暑.jpeg":pe,"/public/ai/小满.jpeg":me,"/public/ai/小雪.jpeg":ge,"/public/ai/惊蛰.jpeg":fe,"/public/ai/春分.jpeg":be,"/public/ai/清明.jpeg":he,"/public/ai/白露.jpeg":je,"/public/ai/秋分.jpeg":ye,"/public/ai/立冬.jpeg":we,"/public/ai/立夏.jpeg":xe,"/public/ai/立春.jpeg":$e,"/public/ai/立秋.jpeg":Ve,"/public/ai/芒种.jpeg":Ce,"/public/ai/谷雨.jpeg":Se,"/public/ai/雨水.jpeg":Re,"/public/ai/霜降.jpeg":Le})[`/public/ai/${p}.jpeg`],self.location).href;return(p,o)=>{const r=ie,m=O,y=C;return I(),B("div",Be,[l(r,{class:"role mt-[20px]"},{default:$(()=>[Pe,ke,Me,ze,Ae,Ge,Ne,Oe,Ee]),_:1}),Te,n("div",De,[l(m,{type:"primary",onClick:o[0]||(o[0]=g=>v("sub",u.value))},{default:$(()=>[x(" 回合-"+V(u.value),1)]),_:1}),n("canvas",{ref_key:"canvas",ref:a,width:"400",height:"400"},null,512),l(m,{type:"primary",onClick:o[1]||(o[1]=g=>v("add",u.value))},{default:$(()=>[x(" 回合+"+V(u.value),1)]),_:1})]),n("div",Fe,[(I(),B(H,null,Q(f,(g,G)=>l(r,{key:G,class:""},{default:$(()=>[n("img",{src:w(g.name),alt:g.name},null,8,Je),l(y,null,{title:$(()=>[n("p",We,[x(V(g.nValue)+" ",1),n("span",null,V(g.value),1)])]),_:2},1024)]),_:2},1024)),64))])])}}});const He=te(qe,[["__scopeId","data-v-e865fb71"]]);export{He as default};
