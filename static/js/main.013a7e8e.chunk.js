(this.webpackJsonponlineeditor=this.webpackJsonponlineeditor||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){},21:function(e,t,s){"use strict";s.r(t);var c=s(2),n=s.n(c),i=s(5),a=s.n(i),l=(s(15),s(16),s(17),s(6)),r=s(7),o=s(3),d=s(10),h=s(9),j=s(23),b=s(1),u=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(l.a)(this,s),(c=t.call(this,e)).state={css:"h1{color:red ; }",js:"function ",html:"<h1> header </h1>",editing:"html"},c.createView=c.createView.bind(Object(o.a)(c)),c}return Object(r.a)(s,[{key:"createView",value:function(){return{__html:this.state.html+("<style>"+this.state.css+"</style>")+("<script>"+this.state.js+"<\/script>")}}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"container-flex h-100",children:Object(b.jsxs)("div",{className:"row h-100 ",children:[Object(b.jsxs)("div",{style:{borderBlockColor:"black",borderStyle:"dashed"},className:"col-sm-2 col",children:["File Explorer",Object(b.jsxs)("div",{className:"row mt-3",children:[" ",Object(b.jsx)(j.a,{onClick:function(){e.setState({editing:"html"})},children:"index.html"})]}),Object(b.jsxs)("div",{className:"row mt-3",children:[" ",Object(b.jsx)(j.a,{onClick:function(){e.setState({editing:"css"})},children:"index.css"})]}),Object(b.jsx)("div",{className:"row mt-3",children:Object(b.jsx)(j.a,{onClick:function(){e.setState({editing:"js"})},children:"index.js"})})]}),Object(b.jsxs)("div",{style:{borderBlockColor:"black",borderStyle:"dashed"},className:"col-sm-5 col",children:[Object(b.jsx)("div",{children:"Code Editor"}),Object(b.jsxs)("div",{className:"row  mt-2",children:["html"===this.state.editing?Object(b.jsx)("textarea",{rows:"25",onChange:function(t){e.setState({html:t.target.value})},value:this.state.html}):null,"css"===this.state.editing?Object(b.jsx)("textarea",{rows:"25",onChange:function(t){e.setState({css:t.target.value})},value:this.state.css}):null,"js"===this.state.editing?Object(b.jsx)("textarea",{rows:"25",onChange:function(t){e.setState({js:t.target.value})},value:this.state.js}):null]})]}),Object(b.jsxs)("div",{style:{borderBlockColor:"black",borderStyle:"dashed"},className:"col-sm-5 col",children:["Live View",Object(b.jsx)("div",{dangerouslySetInnerHTML:this.createView()})]})]})})}}]),s}(n.a.Component);var m=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(u,{})})},x=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,24)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),i(e),a(e)}))};a.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),x()}},[[21,1,2]]]);
//# sourceMappingURL=main.013a7e8e.chunk.js.map