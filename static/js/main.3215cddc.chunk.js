(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{12:function(A,e,a){},14:function(A,e,a){"use strict";a.r(e);var c=a(1),t=a.n(c),r=a(6),n=a.n(r),g=a(7),i=a(2),l=a.p+"static/media/Tick.404bb0db.svg",O=(a(12),a(0)),j=function(){var A=Object(c.useState)(!1),e=Object(i.a)(A,2),a=e[0],t=e[1],r=Array(9).fill(0),n=Object(c.useState)(r),j=Object(i.a)(n,2),s=j[0],E=j[1],o=Object(c.useState)(1),I=Object(i.a)(o,2),C=I[0],b=I[1],S=Object(c.useState)(!1),Q=Object(i.a)(S,2),m=Q[0],B=Q[1],d=Object(c.useState)(!1),u=Object(i.a)(d,2),x=u[0],k=u[1],H=Object(c.useState)(!0),v=Object(i.a)(H,2),h=v[0],z=v[1],T=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],f=function(A){if(0!==A)return 1===A?"cross":2===A?"circle":void 0},N=function(A){b(A),1===A?(k(!1),z(!0)):2===A&&(k(!0),z(!1))};return Object(O.jsx)("div",{className:"wrapper",children:Object(O.jsx)("div",{className:"game-frame",children:Object(O.jsx)("div",{className:"game-box",children:a?m?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"game-over-text",children:"Game Over"}),Object(O.jsx)("div",{className:"game-over-result",children:"".concat(1===C?"circle":"cross"," wins")}),Object(O.jsx)("button",{className:"game-over-retry btn",onClick:function(){t(!1),B(!1),E(r),b(1)},children:"Restart Game"})]}):Object(O.jsx)("div",{className:"grid",children:r.map((function(A,e){return Object(O.jsx)("div",{className:"cell",onClick:function(){return function(A){if(0===s[A]){var e=Object(g.a)(s);e[A]=C,E(e),b(1===C?2:1),B(T.some((function(A){return console.log(A),A.every((function(A){return e[A]===C}))})))}}(e)},children:Object(O.jsx)("div",{className:f(s[e])})},e)}))}):Object(O.jsxs)("form",{className:"game-form",onSubmit:function(A){A.preventDefault(),t(!0)},children:[Object(O.jsxs)("div",{className:"game-form-content",children:[Object(O.jsx)("div",{className:"game-form-title",children:"Player 1 "}),Object(O.jsxs)("div",{className:"game-form-groups",children:[Object(O.jsxs)("div",{className:"game-form-group",onClick:function(){N(2)},children:[Object(O.jsx)("div",{className:"game-form-tick",children:Object(O.jsx)("img",{className:"game-form-tick-image",src:l,alt:"tick",style:{opacity:x?1:0}})}),Object(O.jsx)("div",{className:"game-form-label",children:"Circle "}),Object(O.jsx)("img",{className:"game-form-image",src:"data:image/png;base64,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",alt:"Circle"})]}),Object(O.jsxs)("div",{className:"game-form-group",onClick:function(){N(1)},children:[Object(O.jsx)("div",{className:"game-form-tick",children:Object(O.jsx)("img",{className:"game-form-tick-image",src:l,alt:"tick",style:{opacity:h?1:0}})}),Object(O.jsx)("div",{className:"game-form-label",children:"Cross "}),Object(O.jsx)("img",{className:"game-form-image",src:"data:image/png;base64,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",alt:"Cross"})]})]})]}),Object(O.jsx)("div",{className:"game-form-button",children:Object(O.jsx)("button",{className:"game-start btn",type:"submit",children:"Start game"})})]})})})})};n.a.render(Object(O.jsx)(t.a.StrictMode,{children:Object(O.jsx)(j,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3215cddc.chunk.js.map