(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{12:function(e,c,t){},13:function(e,c,t){},15:function(e,c,t){"use strict";t.r(c);var n=t(1),r=t.n(n),s=t(6),a=t.n(s),i=(t(12),t(7)),o=t(4),j=(t(13),t(0)),l=function(){var e=Array(9).fill(0),c=Object(n.useState)(e),t=Object(o.a)(c,2),r=t[0],s=t[1],a=Object(n.useState)(1),l=Object(o.a)(a,2),u=l[0],d=l[1],b=Object(n.useState)(!1),v=Object(o.a)(b,2),O=v[0],m=v[1],f=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],x=function(e){if(0!==e)return 1===e?"cross":2===e?"circle":void 0};return Object(j.jsx)("div",{className:"wrapper",children:O?Object(j.jsx)("div",{className:"game-over",children:Object(j.jsxs)("div",{className:"game-over-box",children:[Object(j.jsx)("div",{className:"game-over-text",children:"Game Over"}),Object(j.jsx)("div",{className:"game-over-result",children:"".concat(1===u?"circle":"cross"," wins")})]})}):Object(j.jsx)("div",{className:"grid",children:e.map((function(e,c){return Object(j.jsx)("div",{className:"cell",onClick:function(){return function(e){if(0===r[e]){var c=Object(i.a)(r);c[e]=u,s(c),d(1===u?2:1),m(f.some((function(e){return console.log(e),e.every((function(e){return c[e]===u}))})))}}(c)},children:Object(j.jsx)("div",{className:x(r[c])})},c)}))})})};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(l,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d1b6be8f.chunk.js.map