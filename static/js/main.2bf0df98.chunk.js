(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}},2:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",button:"ContactForm_button__1MLZK",input1:"ContactForm_input1__2gn4K",input2:"ContactForm_input2__-FHK5"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),s=n.n(r),o=n(13),i=n(3),l=n(4),u=n(6),b=n(5),h=n(22),m=n(12),j=n(2),d=n.n(j),p=n(0),f=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onSubmit(a,c),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{className:d.a.form,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:d.a.label,children:["Name",Object(p.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange,className:d.a.input1})]}),Object(p.jsxs)("label",{className:d.a.label,children:["Number",Object(p.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange,className:d.a.input2})]}),Object(p.jsx)("button",{className:d.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),_=n(7),C=n.n(_),O=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:C.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsxs)("li",{className:C.a.li,children:[Object(p.jsxs)("span",{children:[a,": ",c]}),Object(p.jsx)("button",{type:"button",onClick:function(){return n(e)},className:C.a.button,children:"Delete"})]},e)}))})},x=n(10),v=n.n(x),g=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{className:v.a.label,children:["Find contacts by name",Object(p.jsx)("input",{type:"text",value:e,onChange:n,className:v.a.input})]})},N=n(8),y=n.n(N),A=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e,n){t.state.contacts.find((function(t){return t.name===e}))?alert("Attempt to create existing contact!"):t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[{id:Object(h.a)(),name:e,number:n}])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(p.jsxs)("div",{className:y.a.container,children:[Object(p.jsx)("h1",{className:y.a.h1,children:"Phonebook"}),Object(p.jsx)(f,{onSubmit:this.addContact}),Object(p.jsx)("h2",{className:y.a.h2,children:"Contacts"}),e.length>=1&&Object(p.jsx)(g,{value:t,onChange:this.changeFilter}),Object(p.jsx)(O,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);n(19);s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(A,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={list:"ContactList_list__2T7aG",li:"ContactList_li__1Dxk_",button:"ContactList_button__1RuFy"}},8:function(t,e,n){t.exports={container:"App_container__1MQN3",h1:"App_h1__26v8a",h2:"App_h2__2_lG-"}}},[[20,1,2]]]);
//# sourceMappingURL=main.2bf0df98.chunk.js.map