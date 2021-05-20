(this["webpackJsonpdigit4u-front2"]=this["webpackJsonpdigit4u-front2"]||[]).push([[0],{21:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},49:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),a=n(43),i=n.n(a),c=(n(49),n(2)),o=n(4),l=n(20),u=n.n(l),h=n(25),d=n(3),j=n(5),p=n(7),b=n(6),m=n(16),f=n.n(m),x=function e(){var t=this;Object(d.a)(this,e),this.signup=function(e){return t.instance.post("/signup",e)},this.login=function(e){return t.instance.post("/login",e)},this.logout=function(){return t.instance.post("/logout")},this.isLoggedIn=function(){return t.instance.get("/loggedin")},this.instance=f.a.create({baseURL:"".concat("https://digit4u.herokuapp.com/api","/auth"),withCredentials:!0})},O=function e(){var t=this;Object(d.a)(this,e),this.getUser=function(e){return t.instance.get("/".concat(e))},this.editUser=function(e,n){return t.instance.put("/".concat(e),n)},this.deleteUser=function(e){return t.instance.delete("/".concat(e))},this.instance=f.a.create({baseURL:"".concat("https://digit4u.herokuapp.com/api","/users"),withCredentials:!0})},v=n(0),g=r.a.createContext(),y=g.Consumer,N=g.Provider,k=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={isLoggedIn:!1,isLoading:!0,user:null,isAdmin:null},e.authService=new x,e.userService=new O,e.signup=function(){var t=Object(h.a)(u.a.mark((function t(n){var s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.authService.signup(n);case 3:(s=t.sent)&&e.setState({isLoggedIn:!0,user:s.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.setState({isLoggedIn:!1,user:null});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),e.login=function(t){e.authService.login(t).then((function(t){return e.setState({isLoggedIn:!0,user:t.data})})).catch((function(){return e.setState({isLoggedIn:!1,user:null})}))},e.logout=function(){e.authService.logout().then((function(){return e.setState({isLoggedIn:!1,user:null})})).catch((function(e){return console.error(e)}))},e.editUser=function(t){e.userService.edit(t).then((function(t){return e.setState(Object(o.a)(Object(o.a)({},e.state),{},{user:t.data}))})).catch((function(e){return console.error(e)}))},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.authService.isLoggedIn();case 3:(t=e.sent)&&(console.log(t),this.setState({isLoggedIn:!0,isLoading:!1,user:t.data,isAdmin:t.data.role})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({isLoggedIn:!1,isLoading:!1,user:null,isAdmin:null});case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoggedIn,n=e.isLoading,s=e.user;return n?Object(v.jsx)("p",{children:"Loading..."}):Object(v.jsx)(N,{value:{isLoading:n,isLoggedIn:t,user:s,signup:this.signup,login:this.login,logout:this.logout,editUser:this.editUser},children:this.props.children})}}]),n}(r.a.Component),S=function(e){return function(t){return Object(v.jsx)(y,{children:function(n){var s=n.isLoading,r=n.isLoggedIn,a=n.user,i=n.isAdmin,c=n.signup,l=n.login,u=n.logout,h=n.editUser;return Object(v.jsx)(e,Object(o.a)({isLoggedIn:r,isLoading:s,user:a,isAdmin:i,signup:c,login:l,logout:u,editUser:h},t))}})}};S((function(e){var t=e.isLoggedIn,n=e.isLoading,s=e.exact,r=e.path,a=e.component;return n?Object(v.jsx)("p",{children:"loading..."}):Object(v.jsx)(c.b,{exact:s,path:r,render:function(e){return t?Object(v.jsx)(c.a,{to:"/profile"}):t?void 0:Object(v.jsx)(a,Object(o.a)({},e))}})})),n(74);var w=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={isLoggedIn:!1},s}return Object(j.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.logout(this.state.fields),this.props.history.push("/")}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("nav",{className:"navbar",children:[Object(v.jsx)("div",{className:"navbar-logo",children:Object(v.jsx)("a",{href:"/",className:"logo",children:"Digit4U"})}),this.props.isLoggedIn?Object(v.jsx)(r.a.Fragment,{children:Object(v.jsxs)("div",{className:"navbar-links",children:[Object(v.jsx)("a",{href:"/userhomepage",className:"links-nav",children:"Profile"}),Object(v.jsx)("a",{href:"/",className:"links-nav",onClick:function(t){return e.handleSubmit(t)},children:"Logout"})]})}):Object(v.jsx)(r.a.Fragment,{children:Object(v.jsxs)("div",{className:"navbar-links",children:[Object(v.jsx)("a",{href:"/signup",className:"links-nav",children:"Sign Up"}),Object(v.jsx)("a",{href:"/login",className:"links-nav",children:"Login"})]})})]})}}]),n}(s.Component),C=Object(c.g)(S(w)),L=(n(75),function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={},s}return Object(j.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"homepage",children:[Object(v.jsxs)("div",{className:"intro",children:[Object(v.jsx)("h1",{children:"Digital Transformation and Digitization of Companies"}),Object(v.jsx)("p",{children:"Is it difficult for you to visualize the future of your company? You want transform your business? Do you know the steps you have to take to digitize your company? Do you want to face your digital challenges? We want to accompany you in your digital transformation We want to be you digital agency"})]}),Object(v.jsxs)("div",{className:"home-div",children:[Object(v.jsxs)("div",{className:"home-object",children:[Object(v.jsx)("h2",{children:"Products"}),Object(v.jsx)("img",{className:"homepage-img",src:"https://cdn.kometia-static.com/blog/2020/07/24133307/shutterstock_507077239.jpg",alt:"product"}),Object(v.jsx)("p",{children:"We thought based on the experience of working with our clients, although each company and project has its particularity and since we will make you a tailored suit, so to speak, take them as a guide."}),Object(v.jsx)("a",{href:"/products",children:"Find out more"})]}),Object(v.jsxs)("div",{className:"home-object",children:[Object(v.jsx)("h2",{children:"Blog"}),Object(v.jsx)("img",{className:"homepage-img",src:"https://www.blogdigital.mx/images/2018/11/12/blog_digital_como_iniciar_un_blog_rentable_large.png",alt:"blog"}),Object(v.jsx)("p",{children:"Find the latest trends of the digital age enjoying various articles related to digitization"}),Object(v.jsx)("a",{href:"/articles",children:"Update yourself here"})]})]})]})}}]),n}(s.Component)),P=n(22),F=n.n(P),I=function e(){var t=this;Object(d.a)(this,e),this.getProducts=function(e){return t.instance.get("/",e)},this.instance=f.a.create({baseURL:"".concat("https://digit4u.herokuapp.com/api","/products"),withCredentials:!0})},U=function e(){var t=this;Object(d.a)(this,e),this.postPayment=function(e,n){return t.instance.post("/".concat(e),n)},this.postReserve=function(e){return t.instance.post("/reserve/".concat(e))},this.instance=f.a.create({baseURL:"".concat("https://digit4u.herokuapp.com/api","/payments"),withCredentials:!0})},z=(n(41),function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={product:{}},s.productService=new I,s.paymentService=new U,s}return Object(j.a)(n,[{key:"reserveOne",value:function(){var e=this;console.log(this.props.id),this.paymentService.postReserve(this.props.id).then((function(t){console.log(t),e.props.history.push("/userhomepage")})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return console.log("PROPS",this.props),Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"products",children:[Object(v.jsx)("h2",{children:this.props.name}),Object(v.jsx)("div",{children:Object(v.jsx)(F.a,{className:"vid-demo",url:this.props.video_demo})}),Object(v.jsx)("div",{className:"product-body",children:Object(v.jsxs)("div",{className:"decrip",children:[Object(v.jsx)("p",{children:this.props.description}),Object(v.jsxs)("div",{className:"expert",children:[Object(v.jsx)("h4",{children:"Presented by:"}),Object(v.jsx)("img",{className:"pic",src:this.props.expert.img}),Object(v.jsxs)("p",{className:"expert-name",children:[this.props.expert.name," ",this.props.expert.surname]}),Object(v.jsx)("p",{children:this.props.expert.description})]}),Object(v.jsx)("div",{className:"reserve-btn",children:this.props.isLoggedIn?Object(v.jsx)(r.a.Fragment,{children:Object(v.jsx)("button",{className:"form-btn",onClick:function(){return e.reserveOne()},children:"Pick"})}):null})]})})]})})}}]),n}(s.Component)),D=Object(c.g)(S(z)),A=S(function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={products:[]},s.productService=new I,s}return Object(j.a)(n,[{key:"refreshState",value:function(){var e=this;this.productService.getProducts().then((function(t){console.log(t.data),e.setState({products:t.data})})).catch((function(e){return console.error(e)}))}},{key:"componentDidMount",value:function(){this.refreshState()}},{key:"displayProducts",value:function(){var e=this,t=this.state.products;if(t)return console.log(t),t.map((function(t){return Object(v.jsx)(D,Object(o.a)({refreshState:function(){return e.refreshState()}},t),t.id)}))}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"products-page",children:[Object(v.jsx)("h1",{className:"productsh1",children:"Find your Products"}),this.displayProducts()]})}}]),n}(s.Component)),q=(n(94),function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={},s}return Object(j.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("footer",{className:"footer",children:[Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:Object(v.jsx)("img",{src:"/images/facebook (1).png",alt:"fb",className:"footer-icons"})})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:Object(v.jsx)("img",{src:"/images/linkedin (3).png",alt:"lk",className:"footer-icons"})})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:Object(v.jsx)("img",{src:"/images/instagram (1).png",alt:"ig",className:"footer-icons"})})})]}),Object(v.jsx)("a",{href:"/contact-us",className:"links-nav",children:"Contact Us"})]})}}]),n}(s.Component)),_=function e(){var t=this;Object(d.a)(this,e),this.getArticles=function(e){return t.instance.get("/",e)},this.postArticles=function(e){return t.instance.post("/",e)},this.getArticle=function(e,n){return t.instance.get("/".concat(e),n)},this.editArticle=function(e,n){return t.instance.put("/".concat(e),n)},this.deleteArticle=function(e){return t.instance.delete("/".concat(e))},this.instance=f.a.create({baseURL:"".concat("https://digit4u.herokuapp.com/api","/articles"),withCredentials:!0})},E=n(19);n(95);var R=S((function(e){var t=e.name,n=e.description,s=e.link,r=e.photo,a=e.id,i=e.refreshState,c=e.user,o=new _;return Object(v.jsxs)("div",{className:"full-article",children:[Object(v.jsxs)("div",{className:"article-body",children:[Object(v.jsx)("h2",{children:t}),Object(v.jsx)("img",{src:r,alt:"photo"}),Object(v.jsx)("p",{children:n}),Object(v.jsx)("a",{target:"_blank",href:s,children:"Read More"})]}),c&&"admin"===c.role?Object(v.jsxs)("div",{className:"article-admin",children:[Object(v.jsx)("button",{className:"article-admin-btn",children:Object(v.jsx)(E.b,{to:"/editArticle/".concat(a),className:"admin-link",children:"Edit"})}),Object(v.jsx)("button",{onClick:function(){o.deleteArticle(a).then((function(){console.log("Deleted"),i(),window.location.reload()})).catch((function(e){return console.error(e)}))},className:"article-admin-btn",children:"Delete"})]}):null]})})),M=S(function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={articles:[]},s.articleService=new _,s}return Object(j.a)(n,[{key:"refreshState",value:function(){var e=this;this.articleService.getArticles().then((function(t){console.log(t.data),e.setState({articles:t.data})})).catch((function(e){return console.error(e)}))}},{key:"componentDidMount",value:function(){this.refreshState(),console.log(this.props)}},{key:"displayArticles",value:function(){var e=this;return this.state.articles.map((function(t){return Object(v.jsx)(R,Object(o.a)({refreshState:function(){return e.refreshState()}},t),t.id)}))}},{key:"render",value:function(){return Object(v.jsx)("div",{className:"blog",children:this.displayArticles()})}}]),n}(s.Component)),Y=n(10),T=(n(21),/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/),W={email:function(e){var t;return e?T.test(e)||(t="Invalid email"):t="Email is required",t},password:function(e){var t;return e?e.length<3&&(t="Invalid password"):t="Password is required",t},name:function(e){var t;return e||(t="Name is required"),t},surname:function(e){var t;return e||(t="Surname is required"),t},phone:function(e){var t;return e?e.length<7&&(t="Invalid phone number"):t="Phone number is required",t},position:function(e){}},$=S(function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={fields:{email:"",password:"",name:"",surname:"",phone:"",position:""},errors:{email:null,password:null,name:null,surname:null,phone:null}},s}return Object(j.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault(),console.log(this.state.fields),this.props.signup(this.state.fields),this.props.history.push("/")}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,s=t.value;this.setState({fields:Object(o.a)(Object(o.a)({},this.state.fields),{},Object(Y.a)({},n,s)),errors:Object(o.a)(Object(o.a)({},this.state.errors),{},Object(Y.a)({},n,W[n](s)))})}},{key:"render",value:function(){var e=this,t=this.state.fields;return Object(v.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},className:"form",children:[Object(v.jsxs)("div",{className:"form-item",children:[Object(v.jsx)("label",{htmlFor:"email"}),Object(v.jsx)("input",{placeholder:"Email address",type:"text",name:"email",value:t.email,onChange:function(t){return e.handleChange(t)}})]}),Object(v.jsxs)("div",{className:"form-item",children:[Object(v.jsx)("label",{htmlFor:"password"}),Object(v.jsx)("input",{placeholder:"Password",type:"password",name:"password",value:t.password,onChange:function(t){return e.handleChange(t)}})]}),Object(v.jsxs)("div",{className:"form-item",children:[Object(v.jsx)("label",{htmlFor:"name"}),Object(v.jsx)("input",{placeholder:"Your name",type:"text",name:"name",value:t.name,onChange:function(t){return e.handleChange(t)}})]}),Object(v.jsxs)("div",{className:"form-item",children:[Object(v.jsx)("label",{htmlFor:"surname"}),Object(v.jsx)("input",{placeholder:"Your Surname",type:"text",name:"surname",value:t.surname,onChange:function(t){return e.handleChange(t)}})]}),Object(v.jsxs)("div",{className:"form-item",children:[Object(v.jsx)("label",{htmlFor:"phone"}),Object(v.jsx)("input",{placeholder:"Phone number",type:"number",name:"phone",value:t.phone,onChange:function(t){return e.handleChange(t)}})]}),Object(v.jsxs)("div",{className:"form-item",children:[Object(v.jsx)("label",{htmlFor:"position"}),Object(v.jsx)("input",{placeholder:"Company position",type:"text",name:"position",value:t.position,onChange:function(t){return e.handleChange(t)}})]}),Object(v.jsx)("button",{type:"submit",className:"form-btn",children:"Create user"})]})}}]),n}(s.Component)),B=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,J={email:function(e){var t;return e?B.test(e)||(t="Invalid email"):t="Email is required",t},password:function(e){var t;return e?e.length<3&&(t="Invalid password"):t="Password is required",t}},G=S(function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={fields:{email:"",password:""},errors:{email:null,password:null}},s}return Object(j.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault(),console.log(this.state.fields),this.props.login(this.state.fields),this.props.history.push("/")}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,s=t.value;this.setState({fields:Object(o.a)(Object(o.a)({},this.state.fields),{},Object(Y.a)({},n,s)),errors:Object(o.a)(Object(o.a)({},this.state.errors),{},Object(Y.a)({},n,J[n](s)))})}},{key:"render",value:function(){var e=this,t=this.state.fields;return Object(v.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},className:"form",children:[Object(v.jsxs)("div",{className:"form-item",children:[Object(v.jsx)("label",{htmlFor:"email"}),Object(v.jsx)("input",{type:"text",placeholder:"Email",name:"email",value:t.email,onChange:function(t){return e.handleChange(t)}})]}),Object(v.jsxs)("div",{className:"form-item",children:[Object(v.jsx)("label",{htmlFor:"password"}),Object(v.jsx)("input",{type:"password",placeholder:"Password",name:"password",value:t.password,onChange:function(t){return e.handleChange(t)}})]}),Object(v.jsx)("button",{type:"submit",className:"form-btn",children:"Log in"})]})}}]),n}(s.Component));var H=S((function(e){var t=e.isLoggedIn,n=e.isLoading,s=e.exact,r=e.path,a=e.component;return n?Object(v.jsx)("p",{children:"loading..."}):Object(v.jsx)(c.b,{exact:s,path:r,render:function(e){return t?t?Object(v.jsx)(a,Object(o.a)({},e)):void 0:Object(v.jsx)(c.a,{to:"/login"})}})})),K=(n(42),function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={product:{}},s.productService=new I,s}return Object(j.a)(n,[{key:"render",value:function(){return console.log("PROPS",this.props),Object(v.jsxs)("div",{className:"products",children:[Object(v.jsx)("h2",{children:this.props.name}),Object(v.jsx)("div",{className:"product-vid",children:Object(v.jsx)(F.a,{className:"product-vid","max-width":"350px",url:this.props.video_demo})})]})}}]),n}(s.Component)),Q=S(function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).userService=new O,e.deleteUser=function(){e.userService.deleteUser(e.props.id).then((function(){console.log("Deleted"),window.location.replace("/")})).catch((function(e){return console.error(e)}))},e.displayProducts=function(){if(e.props.products)return e.props.products.map((function(t){return Object(v.jsx)(K,Object(o.a)({refreshState:function(){return e.refreshState()}},t),t.id)}))},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return console.log("products in user.js",this.props.products),Object(v.jsxs)("div",{className:"user",children:[Object(v.jsxs)("div",{className:"user-title",children:[Object(v.jsxs)("h2",{children:[this.props.name," ",this.props.surname]}),Object(v.jsxs)("p",{children:["Position: ",this.props.position]}),Object(v.jsxs)("p",{children:["Phone: ",this.props.phone]})]}),Object(v.jsxs)("div",{className:"user-products",children:[Object(v.jsx)("p",{children:"Your selected products"}),this.props.products&&this.displayProducts()]}),Object(v.jsxs)("div",{className:"user-btn",children:[Object(v.jsx)("button",{className:"form-btn",children:Object(v.jsx)(E.b,{className:"edit-link",to:"/editUser/".concat(this.props.id),children:"Edit Profile"})}),Object(v.jsx)("button",{className:"form-btn",onClick:function(){return e.deleteUser()},children:"Delete Profile"})]})]})}}]),n}(r.a.Component)),V=S(function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={user:{}},s.userService=new O,s.authService=new x,s}return Object(j.a)(n,[{key:"refreshState",value:function(){var e=this;console.log("user id",this.props.user.id),this.userService.getUser(this.props.user.id).then((function(t){console.log("res.data",t.data),e.setState({user:t.data})})).catch((function(e){return console.error(e)}))}},{key:"componentDidMount",value:function(){this.refreshState(),console.log(this.props)}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"intro-userhome",children:[Object(v.jsx)("h1",{children:"Welcome"}),Object(v.jsx)(Q,Object(o.a)({},this.state.user))]})}}]),n}(s.Component)),X=new _,Z={name:function(e){var t;return e||(t="Name is required"),t},description:function(e){var t;return e||(t="Description is required"),t},link:function(e){var t;return e||(t="Link is required"),t},photo:function(e){var t;return e||(t="Photo is required"),t}},ee=S(function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={fields:{name:"",description:"",link:"",photo:""},errors:{name:null,description:null,link:null,photo:null}},s}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params.id),X.getArticle(this.props.match.params.id).then((function(t){e.setState({fields:t.data})})).catch((function(e){return console.error(e)}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),X.editArticle(this.props.match.params.id,this.state.fields).then((function(){console.log("Edited"),t.props.history.push("/articles")})).catch((function(e){return console.error(e)}))}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,s=t.value;this.setState({fields:Object(o.a)(Object(o.a)({},this.state.fields),{},Object(Y.a)({},n,s)),errors:Object(o.a)(Object(o.a)({},this.state.errors),{},Object(Y.a)({},n,Z[n](s)))})}},{key:"render",value:function(){var e=this,t=this.state.fields;return Object(v.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},className:"form",children:[Object(v.jsxs)("div",{className:"form-item",children:[Object(v.jsxs)("label",{htmlFor:"name",children:["Title: ",Object(v.jsx)("br",{})]}),Object(v.jsx)("input",{type:"text",value:t.name,onChange:function(t){return e.handleChange(t)},name:"name"})]}),Object(v.jsxs)("div",{className:"form-item",children:[Object(v.jsxs)("label",{htmlFor:"description",children:["Description: ",Object(v.jsx)("br",{})," "]}),Object(v.jsx)("textarea",{type:"text",value:t.description,onChange:function(t){return e.handleChange(t)},name:"description"})]}),Object(v.jsxs)("div",{className:"form-item",children:[Object(v.jsxs)("label",{htmlFor:"link",children:["Link: ",Object(v.jsx)("br",{})]}),Object(v.jsx)("input",{type:"text",value:t.link,onChange:function(t){return e.handleChange(t)},name:"link",rows:"10",cols:"20",wrap:"soft"})]}),Object(v.jsxs)("div",{className:"form-item",children:[Object(v.jsxs)("label",{htmlFor:"photo",children:["Photo: ",Object(v.jsx)("br",{})]}),Object(v.jsx)("input",{type:"file",name:"photo",onChange:function(t){return e.handleChange(t)}})]}),Object(v.jsx)("button",{type:"submit",className:"form-btn",children:"Edit Article"})]})}}]),n}(s.Component)),te=new O,ne={password:function(e){var t;return e?e.length<3&&(t="Invalid password"):t="Password is required",t},name:function(e){var t;return e||(t="Name is required"),t},surname:function(e){var t;return e||(t="Surname is required"),t},phone:function(e){var t;return e?e.length<7&&(t="Invalid phone number"):t="Phone number is required",t},position:function(e){var t;return e||(t="Position is required"),t}},se=S(function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={fields:{password:"",name:"",surname:"",phone:"",position:""},errors:{password:null,name:null,surname:null,phone:null,position:null}},s}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params.id),te.getUser(this.props.match.params.id).then((function(t){e.setState({fields:t.data})})).catch((function(e){return console.error(e)}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=this.state.fields,s=n.name,r=n.surname,a=n.phone,i=n.position;te.editUser(this.props.match.params.id,{name:s,surname:r,phone:a,position:i}).then((function(){console.log("Edited"),t.props.history.push("/userhomepage")})).catch((function(e){return console.error(e)}))}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,s=t.value;this.setState({fields:Object(o.a)(Object(o.a)({},this.state.fields),{},Object(Y.a)({},n,s)),errors:Object(o.a)(Object(o.a)({},this.state.errors),{},Object(Y.a)({},n,ne[n](s)))})}},{key:"render",value:function(){var e=this,t=this.state.fields;return Object(v.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},className:"form",children:[Object(v.jsxs)("div",{className:"form-item",children:[Object(v.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(v.jsx)("input",{type:"text",name:"name",value:t.name,onChange:function(t){return e.handleChange(t)}})]}),Object(v.jsxs)("div",{className:"form-item",children:[Object(v.jsx)("label",{htmlFor:"surname",children:"Surname: "}),Object(v.jsx)("input",{type:"text",name:"surname",value:t.surname,onChange:function(t){return e.handleChange(t)}})]}),Object(v.jsxs)("div",{className:"form-item",children:[Object(v.jsx)("label",{htmlFor:"phone",children:"Phone number: "}),Object(v.jsx)("input",{type:"number",name:"phone",value:t.phone,onChange:function(t){return e.handleChange(t)}})]}),Object(v.jsxs)("div",{className:"form-item",children:[Object(v.jsx)("label",{htmlFor:"position",children:"Position: "}),Object(v.jsx)("input",{type:"text",name:"position",value:t.position,onChange:function(t){return e.handleChange(t)}})]}),Object(v.jsx)("button",{type:"submit",className:"form-btn",children:"Submit changes"})]})}}]),n}(s.Component)),re=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={fields:{name:"",email:"",info:""},errors:{name:null,email:null,info:null}},s}return Object(j.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("form",{className:"form",children:[Object(v.jsxs)("div",{className:"form-item",children:[Object(v.jsx)("label",{htmlFor:"name"}),Object(v.jsx)("input",{type:"text",name:"name",placeholder:"name"})]}),Object(v.jsxs)("div",{className:"form-item",children:[Object(v.jsx)("label",{htmlFor:"email"}),Object(v.jsx)("input",{type:"text",name:"email",placeholder:"Contact email"})]}),Object(v.jsxs)("div",{className:"form-item",children:[Object(v.jsx)("label",{htmlFor:"info"}),Object(v.jsx)("textarea",{type:"text",name:"info",placeholder:"Your message...",className:"info-form",rows:"10",cols:"20",wrap:"soft"})]}),Object(v.jsx)("button",{type:"submit",className:"form-btn",children:"Send"})]})}}]),n}(s.Component);var ae=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(C,{}),Object(v.jsxs)(c.d,{className:"page-margins",children:[Object(v.jsx)(c.b,{exact:!0,path:"/",component:L}),Object(v.jsx)(c.b,{exact:!0,path:"/products",component:A}),Object(v.jsx)(c.b,{exact:!0,path:"/articles",component:M}),Object(v.jsx)(c.b,{exact:!0,path:"/signup",component:$}),Object(v.jsx)(c.b,{exact:!0,path:"/login",component:G}),Object(v.jsx)(c.b,{exact:!0,path:"/editArticle/:id",component:ee}),Object(v.jsx)(c.b,{exact:!0,path:"/editUser/:id",component:se}),Object(v.jsx)(c.b,{exact:!0,path:"/contact-us",component:re}),Object(v.jsx)(H,{path:"/userhomepage",exact:!0,component:V})]}),Object(v.jsx)(q,{})]})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),r(e),a(e),i(e)}))};i.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(E.a,{children:Object(v.jsx)(k,{children:Object(v.jsx)(ae,{})})})}),document.getElementById("root")),ie()}},[[96,1,2]]]);
//# sourceMappingURL=main.d2c1355b.chunk.js.map