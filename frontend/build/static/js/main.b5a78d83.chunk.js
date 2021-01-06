(window["webpackJsonpfrontend-skill-test"]=window["webpackJsonpfrontend-skill-test"]||[]).push([[0],{106:function(e,t,a){},157:function(e,t,a){e.exports=a(287)},201:function(e,t,a){},287:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),c=a.n(o),l=(a(106),a(47)),i=a(25);var s,u=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Not found"))},m=a(291),p=a(296),d=a(292),f=a(293),E=a(76),h=a.n(E);s="here should be your production endpoint";var g,v=h.a.create({withCredentials:!0,baseURL:s}),y=function(){return v.get("/profile")},b=a(33),w=a.n(b),k=a(46),O=a(61),x=Object(n.createContext)(),j=function(e){var t=Object(n.useState)(null),a=Object(O.a)(t,2),o=a[0],c=a[1];Object(n.useEffect)((function(){function e(){return(e=Object(k.a)(w.a.mark((function e(){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,a=t.data,l({_id:a._id,email:a.email});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var l=function(e){c(e)},i={user:o,login:l,logout:function(){c(null)}};return r.a.createElement(x.Provider,Object.assign({},e,{value:i}))},N=function(){return Object(n.useContext)(x)},I=m.a.Header,C=m.a.Content,P=m.a.Footer,_=function(e){var t=e.children,a=N(),n=a.user,o=a.logout;return r.a.createElement(m.a,{className:"layout"},r.a.createElement(I,null,r.a.createElement("div",{className:"logo"}),r.a.createElement(p.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"]},r.a.createElement(p.a.Item,{key:"1"},r.a.createElement(l.b,{to:"/"},"Home")),n?r.a.createElement(p.a.Item,{onClick:function(){v.get("/logout"),o()},key:"4"},"Logout"):r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a.Item,{key:"2"},r.a.createElement(l.b,{to:"/signup"},"Signup")),r.a.createElement(p.a.Item,{key:"3"},r.a.createElement(l.b,{to:"/login"},"Login"))))),r.a.createElement(C,{style:{padding:"0 50px",minHeight:"100vh"}},r.a.createElement("div",{className:"site-layout-content"},t)),r.a.createElement(P,{style:{textAlign:"center"}},r.a.createElement(d.a,null,r.a.createElement(f.a,{xs:{span:24},s:{span:22,offset:1},lg:{span:22,offset:1}},r.a.createElement("div",{className:"footer__container"},r.a.createElement("p",null,"Developed by Mauricio Figueroa"),r.a.createElement("p",null,"mfigueroadev \xa9 Copyright 2020"))))))},F=a(102);g="here should be your production endpoint";var T=h.a.create({withCredentials:!0,baseURL:g}),L=function(){return T.get("/todos")},S=function(e){return T.get("/info/".concat(e))},U=a(297),q=a(294),H=a(295),A=a(152),B=a(56),R=(a(201),function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),a=t[0],o=t[1],c=N().user;Object(n.useEffect)((function(){function e(){return(e=Object(k.a)(w.a.mark((function e(){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:t=e.sent,a=t.data,o(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var i=function(e){var t;(t=e,T.post("/delete",t)).then((function(t){o(a.filter((function(t){return t._id!==e._id}))),B.c.warning("Todo deleted sucessfully!")})).catch((function(e){return console.log("error!")}))},s=function(e){console.log("checked = ".concat(e.target.checked))},u=function(e,t){var n;console.log(e,t),(n={id:e,completed:t},T.post("/completed",n)).then((function(e){o(a.filter((function(t){return t._id!==e.data._id}))),o((function(t){return[].concat(Object(F.a)(t),[e.data])}))})).catch((function(e){return console.log(e)}))};return r.a.createElement("div",{className:"container"},c?r.a.createElement(r.a.Fragment,null,a.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Pending tasks"),a.map((function(e){return r.a.createElement("div",{className:"todo-element",key:e._id},r.a.createElement(l.b,{to:"/to-do/".concat(e._id)},r.a.createElement("li",null,e.description)),r.a.createElement("div",null,r.a.createElement(U.a,{defaultChecked:e.completed,onClick:function(){return u(e._id,e.completed)},onChange:s}),r.a.createElement("i",{onClick:function(){return i(e)},className:"fas fa-trash-alt"})))}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"You have no todos yet")),r.a.createElement(q.a,{onFinish:function(e){if(!e.description)return B.c.error("Please provide a description for your task!");var t;console.log(e.description),(t=e,T.post("/create",t)).then((function(e){o((function(t){return[].concat(Object(F.a)(t),[e.data])})),B.c.success("Todo added sucessfully!")})).catch((function(e){return console.log(e)}))}},r.a.createElement(q.a.Item,{name:"description"},r.a.createElement(H.a,{placeholder:"Add todo"})),r.a.createElement(A.a,{block:!0,type:"primary",htmlType:"submit"},"Add"))):r.a.createElement("h1",null,"Log in to manage your todos!"))}),J=a(298),V=a(299),W=function(e){var t=e.history,a=N(),n=a.login;a.user&&t.push("/");var o=function(){var e=Object(k.a)(w.a.mark((function e(a){var r,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.email,o=a.password,e.next=3,c={email:r,password:o},v.post("/login",c);case 3:t.push("/"),n(r);case 5:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(q.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:o},r.a.createElement(q.a.Item,{name:"email",rules:[{required:!0,message:"Please input your Username!"}]},r.a.createElement(H.a,{prefix:r.a.createElement(J.a,{className:"site-form-item-icon"}),placeholder:"Username"})),r.a.createElement(q.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}]},r.a.createElement(H.a,{prefix:r.a.createElement(V.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})),r.a.createElement(q.a.Item,null,r.a.createElement(q.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0},r.a.createElement(U.a,null,"Remember me"))),r.a.createElement(q.a.Item,null,r.a.createElement(A.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),r.a.createElement("br",null),"Or",r.a.createElement("br",null),r.a.createElement(l.b,{to:"/signup"},"register now!")))},z=function(e){var t=e.history;N().user&&t.push("/");var a=function(){var e=Object(k.a)(w.a.mark((function e(a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=a,v.post("/signup",n);case 2:t.push("/login");case 3:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(q.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:a},r.a.createElement(q.a.Item,{name:"email",rules:[{required:!0,message:"Please input your Username!"}]},r.a.createElement(H.a,{prefix:r.a.createElement(J.a,{className:"site-form-item-icon"}),placeholder:"Username"})),r.a.createElement(q.a.Item,{name:"password",rules:[{required:!0,message:"Please enter your Password!"}]},r.a.createElement(H.a,{prefix:r.a.createElement(V.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})),r.a.createElement(q.a.Item,null,r.a.createElement(A.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Signup")))};var D=function(e){var t=e.match,a=Object(n.useState)(null),o=Object(O.a)(a,2),c=o[0],l=o[1];return Object(n.useEffect)((function(){function e(){return(e=Object(k.a)(w.a.mark((function e(){var a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t.params.id);case 2:a=e.sent,n=a.data,l(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"container"},c?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Task: "),r.a.createElement("h4",null,c.description," "),c.completed?r.a.createElement("h5",null,"This task has been completed. One less thing to worry about!"):r.a.createElement("h5",null,"This task has not been completed yet!")):"")},K=function(){return r.a.createElement(l.a,null,r.a.createElement(_,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:R}),r.a.createElement(i.a,{path:"/signup",component:z}),r.a.createElement(i.a,{path:"/login",component:W}),r.a.createElement(i.a,{exact:!0,path:"/to-do/:id",component:D}),r.a.createElement(i.a,{component:u}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(285),a(286);c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(B.b,{position:"top-right",autoClose:4500,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,transition:B.a}),r.a.createElement(j,null,r.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[157,1,2]]]);
//# sourceMappingURL=main.b5a78d83.chunk.js.map