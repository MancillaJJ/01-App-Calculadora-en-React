(this["webpackJsonpcalc-app"]=this["webpackJsonpcalc-app"]||[]).push([[0],[,,,,,,,,function(n,t,e){},function(n,t,e){},,function(n,t,e){},function(n,t,e){"use strict";e.r(t);var c=e(1),o=e.n(c),r=e(3),l=e.n(r),a=(e(8),e(9),e(0)),i=function(n){var t=n.value;return Object(a.jsx)("div",{className:"result",children:Object(a.jsx)("span",{children:t})})};i.defaultProps={value:"0"};var s=i,u=(e(11),function(n){var t=n.type,e=n.text,c=n.clickHandler;return Object(a.jsx)("button",{className:t,onClick:function(){c(e)},children:Object(a.jsxs)("span",{children:[" ",e," "]})})}),j=["\u2613","/","-","+"],b=function(n){var t=n.onClickOperation,e=n.onClickEqual;return Object(a.jsxs)("section",{className:"math-operations",children:[j.map((function(n,e){return Object(a.jsx)(u,{text:n,clickHandler:t},"btn-oper-".concat(e))})),Object(a.jsx)(u,{text:"=",clickHandler:e})]})},x=function(n){var t=n.onContentClear,e=n.onDelete,c=n.onChange;return Object(a.jsxs)("section",{className:"functions",children:[Object(a.jsx)(u,{type:"button-long-text",text:"C",clickHandler:t}),Object(a.jsx)(u,{type:"button-long-text",text:"CE",clickHandler:e}),Object(a.jsx)(u,{type:"button-long-text",text:"+/-",clickHandler:c})]})},d=["7","8","9","4","5","6","1","2","3","0","."],f=function(n){var t=n.onClickNumber;return Object(a.jsx)("section",{className:"numbers",children:d.map((function(n,e){return Object(a.jsx)(u,{text:n,clickHandler:t},"btn-number-".concat(e))}))})};var p=function(){return Object(a.jsxs)("main",{className:"react-calculator",children:[Object(a.jsx)(s,{value:void 0}),Object(a.jsx)(x,{onContentClear:function(n){return console.log(n)},onDelete:function(n){return console.log(n)},onChange:function(n){return console.log(n)}}),Object(a.jsx)(f,{onClickNumber:function(n){return console.log("Numeros: ",n)}}),Object(a.jsx)(b,{onClickOperation:function(n){return console.log("Operaci\xf3n: ",n)},onClickEqual:function(n){return console.log("Igual: ",n)}})]})},O=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,13)).then((function(t){var e=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,l=t.getTTFB;e(n),c(n),o(n),r(n),l(n)}))};l.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),O()}],[[12,1,2]]]);
//# sourceMappingURL=main.622cd802.chunk.js.map