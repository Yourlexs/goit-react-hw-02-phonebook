(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),i=n.n(r),s=n(11),o=n(4),l=n(5),u=n(7),b=n(6),m=n(21),d=n(2),h=n.n(d),j=n(0),p=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){"text"===e.currentTarget.type&&t.setState({name:e.currentTarget.value}),"tel"===e.currentTarget.type&&t.setState({number:e.currentTarget.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.name,t.state.number),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{className:h.a.label,children:["Name",Object(j.jsx)("input",{value:this.state.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,className:h.a.input})]}),Object(j.jsxs)("label",{className:h.a.label,children:["Number",Object(j.jsx)("input",{value:this.state.number,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,className:h.a.input})]}),Object(j.jsx)("button",{type:"submit",className:h.a.button,children:"Add contact"})]})}}]),n}(a.Component),f=n(9),C=n.n(f),O=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:C.a.label,children:["Find by name",Object(j.jsx)("input",{type:"text",value:e,onChange:n,className:C.a.input})]})},_=n(3),g=n.n(_),v=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:g.a.contactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:g.a.item,children:[Object(j.jsxs)("p",{className:g.a.description,children:[a,": ",c]}),Object(j.jsx)("button",{type:"button",onClick:function(){return n(e)},className:g.a.button,children:"Delete"})]},e)}))})},x=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a=t.state.contacts.map((function(t){return t.name}));if(console.log(a),a.includes(e))alert("".concat(e," is already in contacts"));else{var c={name:e,id:Object(m.a)(),number:n};t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(s.a)(e))}}))}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(p,{onSubmit:this.addContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(O,{value:t,onChange:this.changeFilter}),Object(j.jsx)(v,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);n(17),n(18);i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={label:"ContactForm_label__2m5aO",input:"ContactForm_input__2k3gp",button:"ContactForm_button__2SPip"}},3:function(t,e,n){t.exports={contactList:"ContactList_contactList__JCJlF",item:"ContactList_item__1aHEV",description:"ContactList_description__2Ye_6",button:"ContactList_button__3RhWO"}},9:function(t,e,n){t.exports={input:"Filter_input__TEQDd",label:"Filter_label__-h1Qa"}}},[[19,1,2]]]);
//# sourceMappingURL=main.26c6f874.chunk.js.map