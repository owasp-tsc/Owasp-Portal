(this["webpackJsonpowasp-portal"]=this["webpackJsonpowasp-portal"]||[]).push([[0],{25:function(e,t,a){e.exports=a(58)},30:function(e,t,a){},39:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(23),c=a.n(s),l=(a(30),a(8)),o=a(2),i=a(3),u=a(5),m=a(4),p=a(6),b=a(12);a(39);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f=Object(n.createContext)({}),g=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.value;return r.a.createElement(f.Provider,{value:v({},a)},t)}}]),t}(n.PureComponent),O=(f.Consumer,g);var d=function(){var e=Object(n.useContext)(f),t=e.username;return e.updateGlobalState,r.a.createElement("section",null,r.a.createElement("nav",{className:"navbar navbar-dark bg-dark hornav fixed-top"},r.a.createElement("a",{href:"#",className:"navbar-brand"},"OWASP"),r.a.createElement("div",{className:"ml-auto"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"#",className:"nav-link"},"Welcome ",r.a.createElement("span",null,t)))))))},E=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"content"},r.a.createElement("nav",{className:"navbar navbar-dark bg-dark flex-column vertnav sticky"},r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"#",className:"nav-link"},r.a.createElement("i",{className:"far fa-user"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"#",className:"nav-link"},r.a.createElement("i",{className:"far fa-file"})))))))}}]),t}(n.Component),j=a(7),y=a.n(j),w=a(10),N=a(11),k=a.n(N),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){a.setState(Object(l.a)({},e.target.name,e.target.value))},a.onClick=function(){var e=Object(w.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a.props.username),n={Username:a.props.username,Question:a.state.list[a.state.number].Question,Answer:a.state.value},e.next=4,k.a.post("http://localhost:8000/answer",n);case 4:e.sent,console.log(a.state.number),a.setState({number:a.state.number+1});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={list:[{Question:""}],length:0,number:0,value:Number},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(w.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("http://localhost:8000/questions");case 2:t=e.sent,console.log(t.data.length),this.setState({list:t.data,length:t.data.length});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.length===this.state.number&&r.a.createElement("div",{className:"thankyou"},r.a.createElement("h1",null,"Thank You!")),r.a.createElement("main",null,this.state.length>this.state.number&&this.state.list[this.state.number].Question,r.a.createElement("br",null),this.state.length>this.state.number&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"color"}),r.a.createElement("input",{type:"text/css",className:"postionButton",value:this.state.value,name:"value",onChange:this.onChange}),r.a.createElement("button",{className:"postionButton",onClick:this.onClick},"Submit"))))}}]),t}(n.Component),C=function(e){var t=Object(n.useContext)(f).username;return console.log(t),r.a.createElement(S,Object.assign({},e,{username:t}))},P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){a.setState(Object(l.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(w.a)(y.a.mark((function e(t){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={Username:a.state.value,password:a.state.pass},console.log(n),e.next=5,k.a.post("http://localhost:8000/loginData",n);case 5:r=e.sent,console.log(r),"success"===r.data?(a.props.update({username:a.state.value}),a.props.onClick()):a.setState({incorrect:"Username or password was incorrect"});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onRegister=function(){var e=Object(w.a)(y.a.mark((function e(t){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={Username:a.state.register},e.next=4,k.a.post("http://localhost:8000/user",n);case 4:(r=e.sent)&&a.setState({success:"Registered Successfully"}),console.log(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={value:"",pass:"",incorrect:"",register:"",success:""},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"limiter"},r.a.createElement("div",{className:"container-login100"},r.a.createElement("div",{className:"wrap-login100"},r.a.createElement("form",{className:"login100-form validate-form p-l-55 p-r-55 p-t-178",onSubmit:this.onSubmit},r.a.createElement("span",{className:"login100-form-title"},"Sign In"),r.a.createElement("div",{className:"wrap-input100 validate-input m-b-16","data-validate":"Please enter username"},r.a.createElement("input",{className:"input100",type:"text",value:this.state.value,onChange:this.onChange,name:"value",placeholder:"Username"}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Please enter password"},r.a.createElement("input",{className:"input100",type:"password",name:"pass",value:this.state.pass,onChange:this.onChange,placeholder:"Password"}),r.a.createElement("span",{className:"focus-input100"})),this.state.incorrect,r.a.createElement("br",null),this.props.username,r.a.createElement("div",{className:"container-login100-form-btn"},r.a.createElement("button",{className:"login100-form-btn",type:"submit"},"Sign in"))),r.a.createElement("form",{onSubmit:this.onRegister,className:"login100-form validate-form p-l-55 p-r-55 p-t-60"},r.a.createElement("div",{className:"wrap-input100 validate-input m-b-16","data-validate":"Please enter username"},r.a.createElement("input",{className:"input100",type:"text",value:this.state.register,onChange:this.onChange,name:"register",placeholder:"Username"}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("br",null),r.a.createElement("div",{className:"container-login100-form-btn"},r.a.createElement("button",{className:"login100-form-btn",type:"submit"},"Sign up")),this.state.success,r.a.createElement("br",null))))))}}]),t}(n.Component),x=function(e){var t=Object(n.useContext)(f),a=t.username,s=t.updateGlobalState;return r.a.createElement(P,Object.assign({username:a,update:function(e){return s(e)}},e))},D=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component);function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).updateGlobalState=function(e){return a.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e))},a.state={boolState:!1,username:"Owasp User"},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.boolState,n={username:t.username,updateGlobalState:this.updateGlobalState};return r.a.createElement(r.a.Fragment,null,a?r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{value:n},r.a.createElement(d,null),r.a.createElement(E,null),r.a.createElement(C,null))):r.a.createElement(O,{value:n},r.a.createElement(b.a,null,r.a.createElement(x,{path:"/",onClick:function(){return e.updateGlobalState({boolState:!a})}}),r.a.createElement(D,{path:"/register"}))))}}]),t}(r.a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.dcf111c2.chunk.js.map