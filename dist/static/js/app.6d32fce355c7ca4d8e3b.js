webpackJsonp([1],{100:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"number_field",class:{top:t.numbers.length}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],staticClass:"inp",attrs:{type:"number",maxlength:"7",autocomplete:"off"},domProps:{value:t.number},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.calculate()},input:function(e){e.target.composing||(t.number=e.target.value)},blur:function(e){t.$forceUpdate()}}})]),n("div",{staticClass:"res"},t._l(t.numbers,function(e,u){return n("div",{staticClass:"num",class:["_"+e.title.value,{bounce:e.title.value==t.repeat}]},[n("span",{staticClass:"num__delete",on:{click:function(e){t.numberDelete(u)}}},[t._v("×")]),t._l(e,function(e,u){return e.value?n("div",{class:u},[n("span",{staticClass:"num__symbol",domProps:{innerHTML:t._s(e.symbol)}},[n("br")]),n("span",{staticClass:"num__value",domProps:{innerHTML:t._s(e.value)}})]):t._e()})],2)}))])},staticRenderFns:[]}},101:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("ul",{staticClass:"header__menu"}),t._v(" "),n("a",{staticClass:"logo"},[t._v("Numb"),n("sup",[t._v("e")]),t._v("r the"),n("sub",[t._v("o")]),t._v("R(y)")])])}]}},102:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("headercomponent"),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},39:function(t,e,n){"use strict";var u=n(14),r=n(98),s=n.n(r);u.a.component("headercomponent",s.a)},40:function(t,e,n){"use strict";var u=n(14),r=n(103),s=n(99),a=n.n(s);u.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"Home",component:a.a}]})},41:function(t,e,n){n(95);var u=n(27)(n(54),n(102),null,null);t.exports=u.exports},42:function(t,e,n){"use strict";e.a=function(t,e){return t.toString(e)}},43:function(t,e,n){"use strict";var u=n(48);e.a=function(t,e){e=[0,1],n.i(u.a)(0,1,t+1,e);for(var r=e.length,s=[],a="",i=0;i<r;i++)e[i]===t&&(s.push(i+1),a+=""===a?i+1:", "+(i+1));return s.length?{value:a+"<sup>th</sup>",symbol:"࿓"}:{value:null,symbol:""}}},44:function(t,e,n){"use strict";e.a=function(t,e){var n=void 0,u=void 0,r=void 0;for(n=t,r=Math.round(t/e);e<=r;){if(u=t/e,r=Math.round(u),u===r)return n=e;e+=2}return n}},45:function(t,e,n){"use strict";e.a=function(t,e){for(var n=1,u=0;u<e;u++)n*=t;return n}},46:function(t,e,n){"use strict";e.a=function(t){var e=0,n=1;for(this.factorialList=[];n<t+1;)e+=1,n*=e,this.factorialList.push(n);for(var u=this.factorialList.length,r=0;r<=u;r++)if(this.factorialList[r]===t)return{value:r+1,symbol:"!"};return{value:"",symbol:""}}},47:function(t,e,n){"use strict";var u=n(45),r=n(52),s=n(44),a=n(49);e.a=function(t,e){var i=void 0,o=void 0,l=void 0,c=void 0,f=void 0,m=void 0;if(i=t,o=i,1===i)return{value:"1<sup> </sup>",symbol:"·"};if(o<2)return{value:"-",symbol:"-"};for(c=i/2,f="",m=3,c===Math.round(c)?(l=n.i(r.a)(o,2),1===l?f+="2":f=f+"2<sup>"+l+"</sup>",i/=n.i(u.a)(2,l)):(c=n.i(s.a)(i,m),l=n.i(r.a)(i,c),m=c,i/=n.i(u.a)(c,l),1===l?f+=c:f=f+c+"<sup>"+l+"</sup>");m<=i;)c=n.i(s.a)(i,m),l=n.i(r.a)(i,c),f=1===l?f+" · "+c:f+" · "+c+"<sup>"+l+"</sup>",m=c,i/=n.i(u.a)(c,l);if("NaN<sup>0</sup>"===f)return void console.log("Введите число.");if(1*f===o){f={value:n.i(a.a)(t,e).length+"<sup>th</sup> ",symbol:"⁚"}}else f={value:f,symbol:"⁞"};return f}},48:function(t,e,n){"use strict";function u(t,e,n,r){var s=t+e;if(s<n)return t=e,e=s,r.push(s),u(t,e,n,r)}e.a=u},49:function(t,e,n){"use strict";e.a=function(t,e){var n=[];e=[],n[1]=0;for(var u=2;u<=t;u++)n[u]=u;for(var r=2;r*r<=t;r++)if(n[r]>1)for(var s=r*r;s<=t;s+=r)n[s]=0;for(var a=2;a<=t;a++)n[a]>0&&e.push(n[a]);return e}},50:function(t,e,n){"use strict";var u=n(42),r=n(51),s=n(47),a=n(43),i=n(46);e.a={base:u.a,oddEven:r.a,factorization:s.a,factorial:i.a,detectFibonacciNumber:a.a}},51:function(t,e,n){"use strict";e.a=function(t){return t%2==0?{value:"2 · "+t/2,symbol:"◑"}:{value:"2 · "+Math.round(t/2-1)+" + 1",symbol:"◐"}}},52:function(t,e,n){"use strict";e.a=function(t,e){var n=0,u=0,r=0;r=Math.round(t/e);for(var s=1;s<=r;s++){if((u=t/e)!==Math.round(u))return n;n+=1,t=u}return n}},53:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=n(14),r=n(41),s=n.n(r),a=n(40),i=n(39);u.a.config.productionTip=!1,new u.a({el:"#app",router:a.a,components:i.default,render:function(t){return t(s.a)}})},54:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},55:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"headercomponent",data:function(){return{menu:[{txt:"Odd/Event",status:!0},{txt:"Base",status:!0,subMenu:[{}]}]}}}},56:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=n(57),r=n.n(u),s=n(60),a=n.n(s),i=n(50);e.default={data:function(){return{numbers:[],repeat:null,number:"",primeList:[],fibList:[0,1],factorialList:[]}},mounted:function(){var t=JSON.parse(localStorage.getItem("numbers"));console.log(t),null!==t&&t.length&&(this.numbers=t)},methods:{calculate:function(){var t=this,e=this.numbers.filter(function(e){return e.title.value===t.number});if(console.log(a()(this.number)),""===this.number&&(console.log("it is null"),this.showPopup("Nice try, but service work with whole numbers"),this.number=null),this.number&&0===e.length){console.time("calculating exec time");var n=1*this.number,u={};u.title={value:this.number,symbol:""},u.base2={value:i.a.base(n,2),symbol:"x<sub>2</sub>"},u.base8={value:i.a.base(n,8),symbol:"x<sub>8</sub>"},u.base32={value:i.a.base(n,32),symbol:"x<sub>32</sub>"},u.oddEven=i.a.oddEven(n),u.factorization=i.a.factorization(n,this.primeList),u.detectFib=i.a.detectFibonacciNumber(n,this.fibList),u.factorial=i.a.factorial(n,this.factorialList),this.numbers.push(u),localStorage.setItem("numbers",r()(this.numbers)),this.number=null,console.timeEnd("calculating exec time")}else this.repeat=this.number,this.number=null,setTimeout(function(){t.repeat=null},1e3)},numberDelete:function(t){this.numbers.splice(t,1),localStorage.setItem("numbers",r()(this.numbers))},showPopup:function(t){alert(t)}}}},93:function(t,e){},94:function(t,e){},95:function(t,e){},98:function(t,e,n){n(94);var u=n(27)(n(55),n(101),null,null);t.exports=u.exports},99:function(t,e,n){n(93);var u=n(27)(n(56),n(100),null,null);t.exports=u.exports}},[53]);
//# sourceMappingURL=app.6d32fce355c7ca4d8e3b.js.map