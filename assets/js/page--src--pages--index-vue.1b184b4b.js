(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7LRa":function(t,e,s){},iyQ6:function(t,e,s){"use strict";s.r(e);s("E9XD");var i=s("xkGU"),a=s.n(i),n=s("q92V"),r=s.n(n),l=s("H5fM"),o=s("c6+n"),c=s("ro2s");var u=[{a:"Considerate",b:"Decisive",c:"Logical",d:"Outgoing"},{a:"Friendly to others",b:"Results driven",c:"Thorough",d:"Spontaneous"},{a:"Thoughtful of others",b:"Daring",c:"Wants all information",d:"Persuasive"},{a:"Giving",b:"Independent",c:"Organised",d:"Articulate"},{a:"Reliable",b:"Risk taker",c:"Wants things exact",d:"Encouraging"},{a:"Friendly",b:"Persistent",c:"Likes routines",d:"Influential"},{a:"Calmly listens",b:"Wants to win",c:"Deliberate",d:"Optimistic"},{a:"Empathetic",b:"Competitive",c:"Perfectionist",d:"Gets others involved"},{a:"Patient",b:"Courageous",c:"Systematic",d:"Creative"},{a:"Steady and stable",b:"Bold",c:"Cautious",d:"Enthusiastic"}],d={components:{Question:l.a,YourStyle:o.a,Card:c.a},metaInfo:{title:"Home"},data:()=>({data:u,carousel:0,finalResult:{a:0,b:0,c:0,d:0},results:[],currentStep:0}),computed:{yourStyle(){let t="";const e=[this.finalResult.a,this.finalResult.b,this.finalResult.c,this.finalResult.d],s=r()(e);return a()(this.finalResult,(e,i)=>{e===s&&s>0&&(t=i)}),t}},methods:{updateResult(t,e){this.results[e]=t;const s=e+1>=u.length,i=Object.values(this.results[e]).every(t=>t>0);i&&!s&&(this.carousel=e+1),i&&s&&this.calculateFinalResult()},calculateFinalResult(){this.currentStep=2,this.finalResult=this.results.reduce((t,e)=>(Object.keys(e).forEach(s=>{t[s]=t[s]+e[s]}),t),{a:0,b:0,c:0,d:0})},viewStyle(t){this.currentStep=2,this.finalResult[t]=100},reset(){this.currentStep=0,this.carousel=0,this.finalResult={a:0,b:0,c:0,d:0},this.results=[]}}},v=(s("nUXt"),s("KHd+")),b=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("Layout",[0===t.currentStep?e("div",[e("Card",{staticClass:"mb-6"},[e("h1",{staticClass:"text-xl mb-4"},[t._v("\n        The following questionnaire will enable you to reflect on how you\n        think you behave and will give an indication of your behavioural\n        style.\n      ")]),e("div",{staticClass:"font-bold mb-4"},[t._v("\n        There are no right and wrong responses!\n      ")]),e("div",{staticClass:"mb-4"},[t._v("\n        Allocate a 4 to the word or phrase that is most like you or that you\n        relate to most. Allocate a 3 to the next most like you, then a 2 and\n        then a 1 to the least like you.\n      ")]),e("div",{staticClass:"rounded-xl p-4 bg-violet-400 mb-8"},[e("div",{staticClass:"flex justify-between"},[e("div",[t._v("Least")]),e("div",[t._v("Most")])]),e("b-slider",{attrs:{min:1,max:4,value:4,tooltip:!1,ticks:!0,size:"is-large",indicator:!1,type:"is-warning"}},[e("b-slider-tick",{attrs:{value:1}},[t._v("1")]),e("b-slider-tick",{attrs:{value:2}},[t._v("2")]),e("b-slider-tick",{attrs:{value:3}},[t._v("3")]),e("b-slider-tick",{attrs:{value:4}},[t._v("4")])],1)],1),e("div",{staticClass:"text-center"},[e("b-button",{attrs:{type:"is-warning"},on:{click:function(e){t.currentStep=1}}},[t._v("Start")])],1)]),e("div",{staticClass:"text-center"},[t._v("\n      Already now your Behavioural style? view\n      "),e("span",{staticClass:"cursor-pointer underline",on:{click:function(e){return t.viewStyle("c")}}},[t._v("\n        Compliance\n        ")]),t._v(", "),e("span",{staticClass:"cursor-pointer underline",on:{click:function(e){return t.viewStyle("b")}}},[t._v("Dominance")]),t._v(",\n      "),e("span",{staticClass:"cursor-pointer underline",on:{click:function(e){return t.viewStyle("d")}}},[t._v("Influence")]),t._v(",\n      "),e("span",{staticClass:"cursor-pointer underline",on:{click:function(e){return t.viewStyle("a")}}},[t._v("Steadiness")])])],1):t._e(),1===t.currentStep?e("section",[e("b-carousel",{attrs:{autoplay:!1,"progress-type":"is-warning",progress:!0,repeat:!1,arrow:!1,animated:"fade",indicator:!1},model:{value:t.carousel,callback:function(e){t.carousel=e},expression:"carousel"}},t._l(t.data,(function(s,i){return e("b-carousel-item",{key:i,staticClass:"pt-8"},[e("question",{attrs:{answers:s,name:"Question",index:""+(i+1)},on:{submit:e=>t.updateResult(e,i)}})],1)})),1)],1):t._e(),2===t.currentStep?e("section",[e("div",{staticClass:"text-center mb-4"},[e("b-button",{attrs:{type:"is-primary",inverted:"",rounded:""},on:{click:t.reset}},[t._v("←")])],1),e("YourStyle",{staticClass:"mb-8",attrs:{"your-style":t.yourStyle}}),e("div",{staticClass:"text-center"},[e("b-button",{attrs:{type:"is-warning"},on:{click:t.reset}},[t._v("Reset")])],1)],1):t._e()])}),[],!1,null,null,null);e.default=b.exports},nUXt:function(t,e,s){"use strict";s("7LRa")}}]);