(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,n){t.exports=n(46)},,,,,,,,,function(t,e,n){},,function(t,e,n){},,,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var o,r=n(0),s=n(10),i=n(3),a=(n(23),function(t,e){return function(n,o,r){return n(function(t,e){return{type:"CREATE_NOTE",postId:t,note:e}}(t,r.createNote(t,e)))}}),c=(n(25),o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),p=function(t){function e(e){var n=t.call(this,e)||this;return n.handleKeyDown=function(t){if(t.stopPropagation(),13===t.keyCode&&t.ctrlKey&&null!=n.inputRef.current){var e=n.inputRef.current.value.trim();e&&(n.props.dispatch(a(n.props.postId,e)),n.inputRef.current.value="")}},n.inputRef=r.createRef(),n}return c(e,t),e.prototype.render=function(){return r.createElement("form",{onKeyDown:this.handleKeyDown,className:"NotesAddForm"},r.createElement("div",{className:"avatar"}),r.createElement("textarea",{ref:this.inputRef,className:"message form-control"}))},e}(r.Component),u=i.b(function(t){return{postId:t.selectedPostId}})(p),l=n(2);n(28),n(30);function f(t){var e=t.note,n=e.avatar.toString(16);return n.length<6&&(n="0".repeat(6-n.length)+n),r.createElement("div",{className:"NotesListItem"},r.createElement("div",{className:"avatar",style:{backgroundColor:"#"+n}}),r.createElement("div",{className:"message",dangerouslySetInnerHTML:{__html:e.message.replace(/\n/gi,"<br />")}}))}var d=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),m=function(t){function e(e){var n=t.call(this,e)||this;return n.listRef=r.createRef(),n}return d(e,t),e.prototype.render=function(){return r.createElement("div",{className:"NotesList",ref:this.listRef},l.values(this.props.notesList).map(function(t){return r.createElement(f,{key:t.id,note:t})}))},e.prototype.componentDidMount=function(){this.scrollListDown()},e.prototype.componentDidUpdate=function(){this.scrollListDown()},e.prototype.scrollListDown=function(){null!=this.listRef.current&&(this.listRef.current.scrollTop=this.listRef.current.scrollHeight)},e}(r.Component);n(32);function h(t){var e=t.title,n=t.children;return r.createElement("div",{className:"Panel"},r.createElement("div",{className:"title"},e),r.createElement("div",{className:"body"},n))}n(34);function y(t){var e=t.children;return r.createElement("div",{className:"PanelGroup"},e)}var v=function(t){return function(e,n,o){return e({type:"CREATE_POST",post:o.createPost(t)})}},E=function(t){return function(e,n,o){return e({type:"REMOVE_POST",post:o.removePost(t)})}},_=(n(36),function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),O=function(t){function e(e){var n=t.call(this,e)||this;return n.handleSubmit=function(t){if(t.preventDefault(),null!=n.inputRef.current){var e=n.inputRef.current.value.trim();e&&(n.props.dispatch(v(e)),n.inputRef.current.value="")}},n.inputRef=r.createRef(),n}return _(e,t),e.prototype.render=function(){return r.createElement("form",{onSubmit:this.handleSubmit,className:"PostsAddForm"},r.createElement("input",{ref:this.inputRef,type:"text",className:"form-control",placeholder:"Type name here",autoComplete:"off"}),r.createElement("button",{className:"btn btn-info"},"Add new"))},e}(r.Component),S=i.b()(O),P=(n(38),function(t){return function(e,n,o){return e(function(t,e){return{type:"SELECT_POST",notesList:e,postId:t}}(t,o.loadNotesList(t)))}}),N=(n(40),function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),L=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.handleRemoveClick=function(t){e.props.dispatch(E(e.props.post.id)),t.stopPropagation()},e.handleSelectClick=function(t){e.props.dispatch(P(e.props.post.id)),t.stopPropagation()},e}return N(e,t),e.prototype.render=function(){return r.createElement("div",{onClick:this.handleSelectClick,className:"PostsListItem"},this.props.isSelected?r.createElement("div",{className:"active"}):null,r.createElement("div",{className:"title"},r.createElement("div",{className:"title-wrap"},"#",this.props.post.id," - ",this.props.post.message)," ",r.createElement("span",{className:"badge badge-info"},this.props.notesNum)),r.createElement("button",{onClick:this.handleRemoveClick,className:"btn btn-outline-danger"},"Delete"))},e}(r.Component),g=i.b(function(t,e){return L({},e,{isSelected:e.post.id===t.selectedPostId,notesNum:l.values(t.notesList[e.post.id]).length})})(b);function w(t){var e=t.postsList;return r.createElement("div",{className:"PostsList"},l.values(e).reverse().map(function(t){return r.createElement(g,{key:t.id,post:t})}))}n(42);function C(t){var e=t.title,n=t.description;return r.createElement("div",{className:"Sidebar"},r.createElement("div",{className:"title"},e),r.createElement("div",{className:"description"},n))}var I,R=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),T=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return R(e,t),e.prototype.render=function(){return r.createElement("div",{className:"Dairy"},r.createElement(C,{title:"Dairy App",description:"Comment with no sense"}),r.createElement(y,null,r.createElement(h,{title:"Items"},r.createElement(S,null),r.createElement(w,{postsList:this.props.postsList})),null!==this.props.selectedPostId?r.createElement(h,{title:"Comments #"+this.props.selectedPostId},r.createElement(m,{notesList:this.props.notesList[this.props.selectedPostId]}),r.createElement(u,null)):null))},e}(r.Component),D=i.b(function(t){return t})(T),j=(n(44),function(){function t(){this.state=t.createInitialState(),this.tryLoadState()}return t.createInitialState=function(){return{selectedPostId:null,nextPostId:1,nextNoteId:1,postsList:{},notesList:{}}},t.createDeepClone=function(t){return JSON.parse(JSON.stringify(t))},t.prototype.loadPostsList=function(){return t.createDeepClone(this.state.postsList)},t.prototype.createPost=function(e){var n={id:this.state.nextPostId++,message:e};return this.state.postsList[n.id]=n,this.state.notesList[n.id]={},this.trySaveState(),t.createDeepClone(n)},t.prototype.removePost=function(e){var n=this.state.postsList[e];return delete this.state.postsList[e],delete this.state.notesList[e],this.trySaveState(),t.createDeepClone(n)},t.prototype.loadNotesList=function(e){return this.state.selectedPostId=e,this.trySaveState(),t.createDeepClone(this.state.notesList[e])},t.prototype.createNote=function(e,n){var o={id:this.state.nextNoteId++,avatar:Math.ceil(16777215*Math.random()),message:n};return this.state.notesList[e][o.id]=o,this.trySaveState(),t.createDeepClone(o)},t.prototype.removeNote=function(e,n){var o=this.state.notesList[e][n];return delete this.state.notesList[e][n],this.trySaveState(),t.createDeepClone(o)},t.prototype.loadDairy=function(){return{selectedPostId:this.state.selectedPostId,postsList:this.state.postsList,notesList:this.state.notesList}},t.prototype.tryLoadState=function(){localStorage&&localStorage.state&&(this.state=JSON.parse(localStorage.state))},t.prototype.trySaveState=function(){localStorage&&(localStorage.state=JSON.stringify(this.state))},t}()),A=n(4),k=n(13),M=function(t,e){switch(e.type){case"SELECT_POST":return e.postId;case"REMOVE_POST":return e.post.id===t?null:t;default:return t||null}},x=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},J=function(t,e){var n,o,r,s,i;switch(e.type){case"CREATE_POST":return x({},t,((n={})[e.post.id]={},n));case"REMOVE_POST":return l.omit(t,[e.post.id]);case"CREATE_NOTE":return x({},t,((o={})[e.postId]=x({},t[e.postId],((r={})[e.note.id]=e.note,r)),o));case"REMOVE_NOTE":return x({},t,((s={})[e.postId]=l.omit(t[e.postId],[e.note.id]),s));case"SELECT_POST":return x({},t,((i={})[e.postId]=e.notesList,i));default:return t||{}}},V=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},K=function(t,e){var n;switch(e.type){case"CREATE_POST":return V({},t,((n={})[e.post.id]=e.post,n));case"REMOVE_POST":return l.omit(t,[e.post.id]);default:return t||{}}};s.render(r.createElement(i.a,{store:(I=new j,A.a(k.a.withExtraArgument(I))(A.d)(A.c({selectedPostId:M,postsList:K,notesList:J}),I.loadDairy()))},r.createElement(D,null)),document.querySelector("#root"))}],[[14,2,1]]]);
//# sourceMappingURL=main.8bba0a21.chunk.js.map