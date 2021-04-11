(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{82:function(e,t,c){},86:function(e,t,c){},88:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},95:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(12),s=c.n(r),i=c(21),o=c(61),j=c(39),l="WEATHER_SUCCESS",u={weatherData:[]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:if("200"===t.data.cod){for(var c=[],n=t.data.list,a=0;a<n.length;a+=8){var r=n[a],s={temperature:r.main.temp,pressure:r.main.pressure,description:r.weather[0].description,icon:r.weather[0].icon,date:r.dt_txt,humidity:r.main.humidity,tempCollection:[n.slice(a,a+7)]};c.push(s)}return Object(j.a)(Object(j.a)({},e),{},{weatherData:c})}return Object(j.a)(Object(j.a)({},e),{},{appError:void 0!==t.data.message?t.data.message:""});default:return e}},h=Object(i.c)({weatherInfo:d}),b=function(){var e=Object(i.d)(Object(i.a)(o.a));return Object(i.e)(h,{},e)}();c(82);var p=c(36),m=c(51),x=c(11),O=c(31),f=c(132),v=c(131),g=c(125),w=c(130),N=c(128),y=c(126),D=c(127),F=c(123),M=c(124),C=(c(86),c(4)),S=function(e){var t=e.children;return Object(C.jsx)("div",{className:"wrapper-container",children:Object(C.jsx)(F.a,{className:"wrapper-content",children:Object(C.jsx)(M.a,{children:t})})})},A=function(){var e=new Date;return"".concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],", ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]," ").concat(e.getDate(),", ").concat(e.getFullYear())},E=function(){var e=new Date;return"".concat(J(e.getHours()),":").concat(J(e.getMinutes()))},I=function(e){var t,c=new Date(e);return"".concat(c.getDate()," ").concat((t=c.getMonth(),["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t])," ").concat(c.getUTCFullYear())},P=function(e){var t=new Date(e);return"".concat(J(t.getHours()),":").concat(J(t.getMinutes()))},J=function(e){return e<10?"0"+e:e},k=(c(88),function(e){var t=e.unit,c=e.onClick,n=e.weatherInfo;return Object(C.jsxs)("div",{className:"weather-card-container",onClick:function(){return c(n)},children:[Object(C.jsx)("img",{className:"weather-icon",alt:"weather-icon",src:"https://openweathermap.org/img/wn/".concat(n.icon,"@2x.png")}),Object(C.jsxs)("p",{className:"temperature-text",children:[Object(C.jsxs)("span",{children:[" ",n.temperature]})," "," "," ",Object(C.jsxs)("span",{children:[Object(C.jsx)("sup",{children:"o"}),"celcius"===t?"C":"F"]})]}),Object(C.jsx)("p",{className:"temp-description",children:n.description}),Object(C.jsxs)("div",{children:[Object(C.jsxs)("p",{className:"medium-text",children:["Date: ",I(n.date)]}),Object(C.jsxs)("p",{className:"medium-text",children:[Object(C.jsx)("span",{children:"Pressure: "})," ",Object(C.jsx)("span",{children:n.pressure}),Object(C.jsx)("span",{children:"Pa"})]}),Object(C.jsxs)("p",{className:"medium-text",children:[Object(C.jsx)("span",{children:"Humidity: "})," ",Object(C.jsx)("span",{children:n.humidity}),Object(C.jsx)("span",{children:"Pa"})]})]})]})}),T=c(38),H=c(9),L=(c(91),function(e){var t=e.temps,c=[];return t.tempCollection[0].forEach((function(e){var t={time:P(e.dt_txt),temperature:e.main.temp};c.push(t)})),console.log(c),Object(C.jsx)("div",{className:"bar-chart-container",children:Object(C.jsxs)(T.c,{data:c,children:[Object(C.jsx)(T.a,{tickSize:3,showLine:!1}),Object(C.jsx)(T.b,{valueField:"temperature",argumentField:"time"}),Object(C.jsx)(T.d,{text:"2021 Nov 20"}),Object(C.jsx)(H.a,{})]})})}),_=(c(92),c(29)),z=c.n(_),R=c(68),U=function(){var e=Object(R.a)(z.a.mark((function e(t,c){var n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="celcius"===c?"metric":"imperial",e.prev=1,e.abrupt("return",fetch("http://api.openweathermap.org/data/2.5/forecast?q=".concat(t,"&APPID=").concat("75f972b80e26f14fe6c920aa6a85ad57","&units=").concat(n)).then((function(e){return new Promise((function(t){t(e.json())})).then((function(e){return e}))})));case 5:e.prev=5,e.t0=e.catch(1),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[1,5]])})));return function(t,c){return e.apply(this,arguments)}}(),W=function(e,t){return function(c){return U(e,t).then((function(e){c({type:l,data:e})})).catch((function(e){console.log("resp error: ",e),c({type:"WEATHER_FAILURE",data:e})}))}},B=function(){var e=a.a.useState("celcius"),t=Object(O.a)(e,2),c=t[0],r=t[1],s=a.a.useState(null),i=Object(O.a)(s,2),o=i[0],j=i[1],l=Object(p.c)((function(e){return{weatherInfo:e.weatherInfo.weatherData}})).weatherInfo,u=Object(p.b)();return Object(n.useEffect)((function(){u(W("Munich,de",c))}),[u,c]),console.log(o),Object(C.jsx)(S,{children:Object(C.jsxs)("div",{className:"weather-info-container",children:[Object(C.jsxs)("div",{className:"current-location",children:[Object(C.jsxs)("div",{children:[Object(C.jsxs)("p",{className:"time-section",children:[Object(C.jsx)("span",{className:"time-text",children:E()})," ",Object(C.jsx)("span",{className:"am-pm",children:(new Date).getHours()>=12?"PM":"AM"})]}),Object(C.jsx)("p",{className:"date-text",children:A()})]}),Object(C.jsx)("p",{className:"location-text",children:"Munchen"})]}),Object(C.jsx)("div",{children:Object(C.jsx)(f.a,{children:Object(C.jsxs)(v.a,{row:!0,"aria-label":"temperature",name:"temparature unit",value:c,onChange:function(e){r(e.target.value),u(W("Munich,de",e.target.value))},children:[Object(C.jsx)(g.a,{value:"celcius",control:Object(C.jsx)(w.a,{color:"primary"}),label:"Celsius"}),Object(C.jsx)(g.a,{value:"fahrenheit",control:Object(C.jsx)(w.a,{color:"primary"}),label:"Fahrenheit"})]})})}),Object(C.jsxs)("div",{className:"navigator-section",children:[Object(C.jsx)(y.a,{fontSize:"large"}),Object(C.jsx)(D.a,{fontSize:"large"})]}),Object(C.jsx)(N.a,{container:!0,spacing:2,className:"",children:null!==l?l.map((function(e,t){return Object(C.jsx)(N.a,{item:!0,xs:12,sm:6,md:4,children:Object(C.jsx)(k,{unit:c,onClick:function(){j(e)},weatherInfo:e})},t)})):null}),null!==o?Object(C.jsx)(L,{temps:o}):null]})})},Y=(c(93),function(){return Object(C.jsx)(S,{children:Object(C.jsx)("div",{className:"loading-container",children:Object(C.jsxs)("div",{children:[Object(C.jsx)("p",{className:"loader-text",children:"Almost there"}),Object(C.jsxs)("div",{className:"loader",children:[Object(C.jsx)("div",{className:"dot"}),Object(C.jsx)("div",{className:"dot"}),Object(C.jsx)("div",{className:"dot"}),Object(C.jsx)("div",{className:"dot"}),Object(C.jsx)("div",{className:"dot"})]})]})})})}),q=function(){var e="/weather-app";return Object(C.jsx)(n.Fragment,{children:Object(C.jsxs)(x.c,{children:[Object(C.jsx)(x.a,{exact:!0,path:e,component:Y}),Object(C.jsx)(x.a,{exact:!0,path:"".concat(e,"/info"),component:B})]})})},G=function(e){var t=e.store;return Object(C.jsx)(p.a,{store:t,children:Object(C.jsx)(m.a,{children:Object(C.jsx)(q,{})})})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,134)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(G,{store:b})}),document.getElementById("root")),K()}},[[95,1,2]]]);
//# sourceMappingURL=main.f5e0a856.chunk.js.map