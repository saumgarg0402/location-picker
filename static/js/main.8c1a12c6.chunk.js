(this["webpackJsonplocation-picker"]=this["webpackJsonplocation-picker"]||[]).push([[0],{51:function(e,t,o){e.exports={picker:"LocationPicker_picker__1snae"}},74:function(e,t,o){},77:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),i=o(29),c=o.n(i),s=(o(74),o(120)),l={root:{backgroundColor:"#1b7ccd",height:300}},a={root:{backgroundColor:"#ffb700",height:180,borderRadius:10,border:"1px solid #ffb700",width:"80%",paddingLeft:50}},u=o(122),d=o(57),h=o(40),b=o.n(h),g=o(49),p=function(){var e=Object(g.a)(b.a.mark((function e(t){var o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.rentalcars.com/LocationAutocomplete.do?&term="+t);case 3:return o=e.sent,e.abrupt("return",o.json());case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=o(55),j=function(e){return Object(f.a)(e,(function(e){var t=[];return(null===e||void 0===e?void 0:e.region)&&t.push(null===e||void 0===e?void 0:e.region),(null===e||void 0===e?void 0:e.city)&&t.push(null===e||void 0===e?void 0:e.city),(null===e||void 0===e?void 0:e.country)&&t.push(null===e||void 0===e?void 0:e.country),{text:t.join(),placeType:null===e||void 0===e?void 0:e.placeType,region:(null===e||void 0===e?void 0:e.region)||(null===e||void 0===e?void 0:e.name)||"",city:null===e||void 0===e?void 0:e.city,country:null===e||void 0===e?void 0:e.country}}))},v=o(56),x=o(119),y=o(51),m=o.n(y),O=o(4),w=function(){var e=Object(n.useRef)(null),t=Object(n.useState)(!1),o=Object(d.a)(t,2),r=o[0],i=o[1];return Object(O.jsx)(x.a,{onResolveSuggestions:function(e){return e.length>1?p(e).then((function(e){var t;return(null===e||void 0===e||null===(t=e.results)||void 0===t?void 0:t.docs)?Promise.resolve(j(Object(v.a)(e.results.docs,6))):Promise.resolve([])})).catch((function(e){return Promise.resolve([])})):Promise.resolve([])},getTextFromItem:function(e){return e.region||""},pickerSuggestionsProps:{noResultsFoundText:"No results found",loadingText:"Loading...",showForceResolve:function(){return!1},forceResolveText:"",resultsMaximumNumber:6,showRemoveButtons:!1,suggestionsAvailableAlertText:"Location suggestions available"},componentRef:e,onInputChange:function(e){return i(e.length>1),e},resolveDelay:300,inputProps:{"aria-label":"Pick-up location search box",placeholder:"city, airport, station, region, district..."},removeButtonAriaLabel:"Remove",onRenderItem:function(e){return Object(O.jsx)(s.a,{styles:{root:{background:"transparent",margin:"1px 2px",maxHeight:"35px"}},children:Object(O.jsx)(u.a,{children:e.item.text})})},onRenderSuggestionsItem:function(e){return Object(O.jsxs)(s.a,{horizontal:!0,styles:{root:{borderBottom:"1px solid #d2d0ce",width:"100%"}},children:[Object(O.jsx)(s.a,{styles:{root:{height:40,width:60}},verticalAlign:"center",children:Object(O.jsx)(u.a,{children:e.placeType})}),Object(O.jsxs)(s.a,{styles:{root:{height:40}},horizontalAlign:"start",children:[Object(O.jsx)(u.a,{styles:{root:{fontSize:14}},children:e.region}),Object(O.jsx)(u.a,{styles:{root:{fontSize:10,color:"#797775"}},children:e.text})]})]})},className:m.a.picker,pickerCalloutProps:{calloutWidth:300,hidden:!r,styles:{root:{border:"1px solif #000",borderRadius:4}}}})},k=function(){return Object(O.jsxs)(s.a,{styles:l,horizontalAlign:"center",children:[Object(O.jsx)(u.a,{styles:{root:{color:"#fff",fontSize:36,padding:10}},"aria-label":"Car rentals",children:"Car Rentals"}),Object(O.jsxs)(s.a,{styles:a,children:[Object(O.jsx)(u.a,{"aria-label":"Where are you going?",styles:{root:{fontSize:20,paddingTop:10,fontWeight:600}},children:"Where are you going?"}),Object(O.jsx)(u.a,{"aria-label":"Seelct location below",styles:{root:{fontSize:16,paddingTop:10,paddingBottom:5,color:"#605E5C"}},children:"Pick-up Location"}),Object(O.jsx)(s.a,{styles:{root:{width:"70%"}},children:Object(O.jsx)(w,{})})]})]})},S=o(121),R=function(){return Object(O.jsxs)(s.a,{styles:{root:{width:"100%",height:50,backgroundColor:"#1b7ccd"}},horizontal:!0,horizontalAlign:"center",children:[Object(O.jsx)(u.a,{styles:{root:{fontWeight:600,fontSize:16,color:"#fff"}},children:"Created using "}),"\xa0",Object(O.jsx)(S.a,{href:"https://www.rentalcars.com/",underline:!0,styles:{root:{fontWeight:600,fontSize:16,color:"#fff"}},children:"rentalcars.com"})]})};var z=function(){return Object(O.jsxs)(s.a,{verticalAlign:"space-between",styles:{root:{height:"100%"}},children:[Object(O.jsx)(k,{}),Object(O.jsx)(R,{})]})},C=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,125)).then((function(t){var o=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;o(e),n(e),r(e),i(e),c(e)}))};c.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(z,{})}),document.getElementById("root")),C()}},[[77,1,2]]]);
//# sourceMappingURL=main.8c1a12c6.chunk.js.map