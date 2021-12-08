(function(e){function t(t){for(var o,a,i=t[0],c=t[1],l=t[2],f=0,d=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},s=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"346a":function(e,t,n){"use strict";n("9932")},"414b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(e,t,n,r,s,a){var i=Object(o["l"])("Home");return Object(o["i"])(),Object(o["c"])(i)}var s={class:"Home flex flex-col bg-gradient-to-b from-gray-700 to-gray-900 text-white text-xl"},a=Object(o["e"])("header",{class:"py-10 text-4xl font-bold"},[Object(o["e"])("h1",null,[Object(o["f"])("Online To-Do App par "),Object(o["e"])("a",{href:"https://www.linkedin.com/in/natthanguilhot/",target:"_blank",rel:"noopener",class:"opacity-70 hover:opacity-100 underline hover:no-underline"},"Natthan Guilhot")])],-1),i={class:"flex flex-col justify-start items-center h-full"},c={class:"flex justify-center items-center m-10"},l=Object(o["e"])("label",{for:"task"},"Votre tâche :",-1),u=Object(o["e"])("i",{class:"fas fa-pen"},null,-1),f=[u],d={class:"flex flex-col justify-center items-start"},b=["onUpdate:modelValue","value","id"],p=["for"],h=["onClick"],O=Object(o["e"])("footer",{class:"aboslute bottom-0"},[Object(o["e"])("p",{class:"mb-4"},[Object(o["f"])("Toutes vos données sont stockées sur votre navigateur."),Object(o["e"])("br"),Object(o["e"])("span",{class:"text-red-600"},"Attention"),Object(o["f"])(" : si vous videz stockage local, vos données seront affectées !")])],-1);function j(e,t,n,r,u,j){return Object(o["i"])(),Object(o["d"])("div",s,[a,Object(o["e"])("main",i,[Object(o["e"])("div",c,[l,Object(o["q"])(Object(o["e"])("input",{type:"text",name:"task","onUpdate:modelValue":t[0]||(t[0]=function(e){return u.inputTask=e}),onKeypress:t[1]||(t[1]=Object(o["r"])((function(e){return j.addTask()}),["enter"])),id:"task",placeholder:"Faire la lessive",class:"border-2 rounded ml-2 outline-none p-1 focus:ring-2 focus:ring-yellow-400 text-gray-800",minlength:"1"},null,544),[[o["o"],u.inputTask]]),Object(o["e"])("button",{onClick:t[2]||(t[2]=function(e){return j.addTask()}),class:"h-8 w-8 border ml-2 rounded focus:ring-2 focus:ring-yellow-400 outline-none","aria-label":"Ajouter une tâche"},f)]),Object(o["e"])("div",d,[(Object(o["i"])(!0),Object(o["d"])(o["a"],null,Object(o["k"])(u.tasks,(function(e,n){return Object(o["i"])(),Object(o["d"])("div",{key:e,class:"flex justify-center items-center"},[Object(o["q"])(Object(o["e"])("input",{type:"checkbox","onUpdate:modelValue":function(t){return e.done=t},value:e.done,id:e.task+" "+e.id,class:"mr-2 w-5 h-5 focus:ring-2 focus:ring-yellow-400 outline-none",onChange:t[3]||(t[3]=function(e){return j.updateLS()})},null,40,b),[[o["n"],e.done]]),Object(o["e"])("label",{for:e.task+" "+e.id,class:Object(o["h"])([{"line-through opacity-70":e.done},"transition-all duration-300"])},Object(o["m"])(e.task),11,p),Object(o["e"])("button",{class:"ml-2 text-red-400 cursor-pointer border rounded h-6 w-6 justify-center items-center flex focus:ring-2 focus:ring-yellow-400 outline-none",onClick:function(e){return j.deleteTask(n)}},"X",8,h)])})),128))])]),O])}n("a434"),n("e9c4");var g={name:"Home",data:function(){return{tasks:[],inputTask:null,id:0}},methods:{addTask:function(){this.inputTask.length>0&&(this.tasks.push({id:this.id,task:this.inputTask,done:!1}),this.id++,this.inputTask=null,this.updateLS())},deleteTask:function(e){this.tasks.splice(e,1),this.updateLS()},updateLS:function(){localStorage.setItem("tasks",JSON.stringify(this.tasks)),localStorage.setItem("tasksid",JSON.stringify(this.id))}},beforeMount:function(){localStorage.getItem("tasks")?(this.tasks=JSON.parse(localStorage.getItem("tasks")),this.id=JSON.parse(localStorage.getItem("tasksid"))):(localStorage.setItem("tasks",JSON.stringify([])),localStorage.setItem("tasksid",0))}},m=(n("feab"),n("6b0d")),k=n.n(m);const y=k()(g,[["render",j]]);var v=y,x={name:"App",components:{Home:v}};n("346a");const w=k()(x,[["render",r]]);var S=w,T=n("5502"),I=Object(T["a"])({state:{},mutations:{},actions:{},modules:{}});Object(o["b"])(S).use(I).mount("#app")},9932:function(e,t,n){},feab:function(e,t,n){"use strict";n("414b")}});
//# sourceMappingURL=app.760f5093.js.map