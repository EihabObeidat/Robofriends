(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,n,t){},14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var o=t(1),r=t(7),i=t.n(r),c=(t(12),t(2)),a=t(3),s=t(5),h=t(4),l=t(0),d=function(e){var n=e.name,t=e.email,o=e.id;return Object(l.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(l.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?size=200x200")}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:n}),Object(l.jsx)("p",{children:t})]})]})},u=function(e){var n=e.robots;return Object(l.jsx)("div",{children:n.map((function(e,t){return Object(l.jsx)(d,{id:n[t].id,name:n[t].name,email:n[t].email},t)}))})},f=function(e){e.searchfield;var n=e.searchChange;return Object(l.jsx)("div",{className:"pa2",children:Object(l.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},b=function(e){return Object(l.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},j=function(e){Object(s.a)(t,e);var n=Object(h.a)(t);function t(e){var o;return Object(c.a)(this,t),(o=n.call(this,e)).state={hasError:!1},o}return Object(a.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:" ooooops,that is not good "}):this.props.children}}]),t}(o.Component),g=(t(14),function(e){Object(s.a)(t,e);var n=Object(h.a)(t);function t(){var e;return Object(c.a)(this,t),(e=n.call(this)).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={robots:[],searchfield:""},e}return Object(a.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){e.setState({robots:n})}))}},{key:"render",value:function(){var e=this.state,n=e.robots,t=e.searchfield,o=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return n.length?Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(l.jsx)(f,{searchChange:this.onSearchChange}),Object(l.jsx)(b,{children:Object(l.jsx)(j,{children:Object(l.jsx)(u,{robots:o})})})]}):Object(l.jsx)("h1",{children:"Loading"})}}]),t}(o.Component)),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(15);i.a.render(Object(l.jsx)(g,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Robofriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Robofriends","/service-worker.js");v?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):p(e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.55598cba.chunk.js.map