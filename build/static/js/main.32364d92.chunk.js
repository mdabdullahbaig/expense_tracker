(this.webpackJsonpexptrkr=this.webpackJsonpexptrkr||[]).push([[0],{62:function(e,a,t){e.exports=t(79)},68:function(e,a,t){},69:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(6),c=t.n(r),o=t(56),m=(t(67),t(68),function(){return l.a.createElement("nav",{className:"navbar navbar-light"},l.a.createElement("div",null,l.a.createElement("span",{className:"navbar-brand"},l.a.createElement("span",{style:{color:"white",padding:"10px"}},l.a.createElement("b",null,"ExpenseTracker")))))}),s=t(8),i=t(15),u=t(115),E=(t(69),t(57)),d=t(40),b=t(44),p=(t(71),t(110)),h=t(117),f=t(114),N=t(116),v=t(24),y=t(25),x=d.b().shape({money:d.a().required(),note:d.c().trim().min(10,"Note must be at least 10 characters").required()}),g=Object(p.a)((function(e){return Object(h.a)({root:{"& > *":{margin:e.spacing(1),width:"25ch"}}})}));b.a.configure();var w=function(e){var a=e.addTransaction,t=Object(E.a)({validationSchema:x}),n=t.register,r=t.handleSubmit,c=t.errors,o=g();return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{onSubmit:r((function(e,t){console.log(e),a(e),Object(b.a)("Transaction successfull.",{autoClose:1e3}),t.target.reset()})),className:o.root,noValidate:!0,autoComplete:"off"},l.a.createElement("div",{className:"container"},l.a.createElement(f.a,{name:"money",inputRef:n,error:!!c.money,helperText:c.money?"Money must be a number":"",placeholder:"Money",id:"Money",InputProps:{startAdornment:l.a.createElement(N.a,{position:"start"},l.a.createElement(v.a,{className:"font-icon",icon:y.a}))}}),l.a.createElement(f.a,{name:"note",inputRef:n,error:!!c.note,helperText:c.note?c.note.message:"",placeholder:"Note",id:"note",InputProps:{startAdornment:l.a.createElement(N.a,{position:"start"},l.a.createElement(v.a,{className:"font-icon",icon:y.b}))}}),l.a.createElement("button",{type:"submit",class:"btn btn-light btn-sm"},"Submit"))))},k=function(){var e=Object(n.useState)([{data:{money:"",note:""}}]),a=Object(i.a)(e,2),t=a[0],r=a[1],c=t.reduce((function(e,a){return e+a.data.money}),0);return l.a.createElement("div",{className:"flex-container"},l.a.createElement("div",{className:"left-box"},l.a.createElement("div",{className:"left-box-in-1"},l.a.createElement("span",{className:"mx-2"},l.a.createElement(v.a,{className:"font-icon mx-1",icon:y.a}),"Your Balance:",l.a.createElement("b",null," ",0!==c?c:""),l.a.createElement("br",null)),t[0].data.money>0&&l.a.createElement("span",{className:"mx-2"},l.a.createElement(v.a,{className:"font-icon mx-1",icon:y.a}),"Income:",l.a.createElement("b",null," ",t[0].data.money),l.a.createElement("br",null)),t[0].data.money<0&&l.a.createElement("span",{className:"mx-2"},l.a.createElement(v.a,{className:"font-icon mx-1",icon:y.a}),"Expanse:",l.a.createElement("b",null," ",-t[0].data.money))),l.a.createElement("div",{className:"left-box-in-2"},l.a.createElement(w,{addTransaction:function(e){r([{data:e}].concat(Object(s.a)(t)))}})),l.a.createElement("div",{className:"left-box-in-3"},l.a.createElement("p",null,l.a.createElement("b",null,"Negative")," sign with Expense.",l.a.createElement("br",null),l.a.createElement("b",null,"No")," sign with Income."))),l.a.createElement("div",{className:"right-box"},l.a.createElement("div",{className:"right-box-in-1"},l.a.createElement("h6",null,"Transaction History")),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"right-box-in-2"},l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",{key:"1"},l.a.createElement("th",{scope:"col"},"Income"),l.a.createElement("th",{scope:"col"},"Expanse"),l.a.createElement("th",{scope:"col"},"Note"))),l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement("tr",{key:Object(u.a)()},l.a.createElement("td",null,e.data.money>=0?e.data.money:""),l.a.createElement("td",null,e.data.money<0?-e.data.money:""),l.a.createElement("td",null,e.data.note))}))))))))};var j=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,null),l.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(o.a,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.32364d92.chunk.js.map