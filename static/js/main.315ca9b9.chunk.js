(this.webpackJsonptodolists=this.webpackJsonptodolists||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n(7),i=n.n(o),s=(n(12),n(3)),a=(n(13),n(4)),r=n(0);var d=function(t){var e=t.input,n=t.setinput,c=t.todo,o=t.settodo,i=function(t){if(t.preventDefault(),""!=e){var i={id:Math.floor(1e3*Math.random()),title:e,completed:!1};o(Object(a.a)(c).concat(i)),n("")}};return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{onSubmit:i,className:"forms",children:[Object(r.jsx)("input",{type:"text",autoComplete:"off",onChange:function(t){n(t.target.value)},placeholder:"Add a todo item",className:"todo-input",value:e}),Object(r.jsx)("button",{className:"buttons",type:"submit",onSubmit:i,children:"ADD"})]})})};var u=function(t){var e=t.todo,n=t.settodo,o=Object(c.useState)(!1),i=Object(s.a)(o,2),d=i[0],u=i[1],j=function(){u(!0)};return Object(r.jsx)("div",{children:e.map((function(t){return Object(r.jsxs)("div",{className:"div-items",children:[Object(r.jsx)("span",{children:Object(r.jsx)("input",{type:"checkbox",onChange:function(){return function(t){var c=Object(a.a)(e).map((function(e){return e.id===t&&(e.completed=!e.completed),e}));n(c)}(t.id)},onClick:j,checked:t.completed,className:"check-box"})}),Object(r.jsx)("div",{className:"itemslists",style:{textDecoration:d?"line-through":"none"},children:t.title}),Object(r.jsx)("i",{className:"fa fa-trash-o",onClick:function(){return function(t){var c=Object(a.a)(e).filter((function(e){return e.id!==t}));n(c)}(t.id)}})]},t.id)}))})};var j=function(){var t=Object(c.useState)(""),e=Object(s.a)(t,2),n=e[0],o=e[1],i=Object(c.useState)([]),a=Object(s.a)(i,2),j=a[0],l=a[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"div-main",children:[Object(r.jsx)("div",{className:"container",children:"TODO LIST"}),Object(r.jsx)(d,{input:n,setinput:o,todo:j,settodo:l}),Object(r.jsx)(u,{todo:j,settodo:l})]})})};i.a.render(Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(j,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.315ca9b9.chunk.js.map