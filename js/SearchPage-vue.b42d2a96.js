"use strict";(self["webpackChunkotus_project"]=self["webpackChunkotus_project"]||[]).push([[175],{5014:function(e,a,l){l.d(a,{Z:function(){return o}});var t=l(3396),s=l(2268);const c={class:"title"};var u={props:{title:{type:String,required:!0}},setup(e){return(a,l)=>((0,t.wg)(),(0,t.iD)("h1",c,(0,s.zw)(e.title),1))}},n=l(89);const r=(0,n.Z)(u,[["__scopeId","data-v-28c1d44d"]]);var o=r},4745:function(e,a,l){l.r(a),l.d(a,{default:function(){return I}});var t=l(3396),s=l(4870),c=l(9242),u=l(2268),n=l(7139),r=l(5014);const o=e=>((0,t.dD)("data-v-6a696919"),e=e(),(0,t.Cn)(),e),i={class:"search"},_={class:"search__container"},v={class:"search__form"},h={class:"search__ul"},d=["onClick"],p={class:"search__box"},w={class:"search__block"},k=["checked"],f=o((()=>(0,t._)("label",{for:"one",class:"search__label"},null,-1))),g=o((()=>(0,t._)("span",{class:"search__span"},"По имени автора",-1))),b={class:"search__block"},C=["checked"],m=o((()=>(0,t._)("label",{for:"two",class:"search__label"},null,-1))),y=o((()=>(0,t._)("span",{class:"search__span"},"По названию книги",-1)));var x={setup(e){const a=(0,n.oR)(),l=(0,t.Fl)((()=>a.state.list)),o=(0,s.iH)([]),x=(0,s.iH)("Поиск"),D=(0,s.iH)("author"),H=(0,s.iH)(""),U=()=>{const e=H.value.length;o.value=e<1?[]:l.value.filter((a=>{let l=null;if("author"===D.value&&(l=a.authors[0].name.slice(0,e)),"title"===D.value&&(l=a.title.slice(0,e)),l.toLowerCase()===H.value.toLowerCase())return!0}))},Z=e=>{D.value=e.target.value,H.value=""},j=e=>{H.value=e.target.textContent,o.value=[]};return(e,a)=>((0,t.wg)(),(0,t.iD)("div",i,[(0,t._)("div",_,[(0,t.Wm)((0,s.SU)(r.Z),{title:x.value},null,8,["title"]),(0,t._)("form",v,[(0,t.wy)((0,t._)("input",{type:"text",placeholder:"поиск",maxlength:"35",class:"search__input","onUpdate:modelValue":a[0]||(a[0]=e=>H.value=e),onInput:U},null,544),[[c.nr,H.value]]),(0,t._)("ul",h,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.value,((e,a)=>((0,t.wg)(),(0,t.iD)("span",{key:a,class:"search__li",onClick:(0,c.iM)(j,["prevent","stop","self"])},(0,u.zw)("author"===D.value?e.authors[0].name:e.title),9,d)))),128))]),(0,t._)("div",p,[(0,t._)("div",w,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":a[1]||(a[1]=e=>D.value=e),id:"one",value:"author",checked:"author"===D.value,onChange:Z,class:"search__checkbox"},null,40,k),[[c.G2,D.value]]),f,g]),(0,t._)("div",b,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":a[2]||(a[2]=e=>D.value=e),id:"two",value:"title",checked:"title"===D.value,onChange:Z,class:"search__checkbox"},null,40,C),[[c.G2,D.value]]),m,y])])])])]))}},D=l(89);const H=(0,D.Z)(x,[["__scopeId","data-v-6a696919"]]);var U=H,Z={setup(e){return(e,a)=>((0,t.wg)(),(0,t.j4)((0,s.SU)(U)))}};const j=Z;var I=j}}]);
//# sourceMappingURL=SearchPage-vue.b42d2a96.js.map