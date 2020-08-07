(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,t,n){e.exports=n(37)},37:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),c=n.n(r),i=n(4),u=n(2),l=function(e){var t=e.newFilter,n=e.handleFilterChange;return o.a.createElement("div",null,"filter by name: ",o.a.createElement("input",{value:t,onChange:n}))},s=function(e){var t=e.addEntry,n=e.newName,a=e.handleNameChange,r=e.newNumber,c=e.handleNumberChange;return o.a.createElement("form",{onSubmit:t},o.a.createElement("div",null,"name: ",o.a.createElement("input",{value:n,onChange:a})),o.a.createElement("div",null,"number: ",o.a.createElement("input",{value:r,onChange:c})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},d=n(3),m=n.n(d),f="https://phonebook-api-007.herokuapp.com/api/persons",h=function(){return m.a.get(f).then((function(e){return e.data}))},b=function(e){return m.a.post(f,e).then((function(e){return e.data}))},p=function(e){return m.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))},E=function(e,t){return m.a.put("".concat(f,"/").concat(e),t).then((function(e){return e.data}))},g=function(e){var t=e.id,n=e.name,a=e.number,r=e.setPersons,c=e.persons,i=e.setNotification,u=e.setErrorNotification;return o.a.createElement("li",null,n," ",a,"\xa0 ",o.a.createElement("button",{onClick:function(){return function(e){window.confirm("Delete ".concat(n," ?"))&&p(e).then((function(t){r(c.filter((function(t){return t.id!==e}))),i("Deleted ".concat(n)),setTimeout((function(){i("")}),4e3)})).catch((function(t){console.log(t),u("".concat(n," is already deleted from the server")),setTimeout((function(){u(""),r(c.filter((function(t){return t.id!==e})))}),4e3)}))}(t)}},"delete"))},v=function(e){var t=e.personsToShow,n=e.setPersons,a=e.persons,r=e.setNotification,c=e.setErrorNotification;return o.a.createElement("ul",null,t.map((function(e){return o.a.createElement(g,{key:e.id,id:e.id,name:e.name,number:e.number,setPersons:n,persons:a,setNotification:r,setErrorNotification:c})})))},w=function(e){var t=e.message;return""===t?null:o.a.createElement("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},t)},N=function(e){var t=e.message;return""===t?null:o.a.createElement("div",{style:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},t)},j=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),d=Object(u.a)(c,2),m=d[0],f=d[1],p=Object(a.useState)(""),g=Object(u.a)(p,2),j=g[0],C=g[1],O=Object(a.useState)(""),y=Object(u.a)(O,2),S=y[0],k=y[1],T=Object(a.useState)(""),F=Object(u.a)(T,2),P=F[0],B=F[1],D=Object(a.useState)(""),R=Object(u.a)(D,2),x=R[0],z=R[1];Object(a.useEffect)((function(){h().then((function(e){r(e)})).catch((function(e){console.log(e),z("Could not connect to server"),setTimeout((function(){z("")}),4e3)}))}),[]);var A=new RegExp(".*".concat(m),"i"),J=m?n.filter((function(e){return A.test(e.name)})):n;return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(w,{message:P}),o.a.createElement(N,{message:x}),o.a.createElement(l,{newFilter:m,handleFilterChange:function(e){f(e.target.value)}}),o.a.createElement("h3",null,"Add a new"),o.a.createElement(s,{addEntry:function(e){e.preventDefault();var t={name:j,number:S},a=n.find((function(e){return e.name.toLowerCase()===j.toLowerCase()})),o=Object(i.a)(Object(i.a)({},a),{},{number:S});a?window.confirm("".concat(j," is already added to phonebook, replace the old number with a new one?"))&&E(o.id,o).then((function(e){r(n.map((function(t){return t.id!==o.id?t:e}))),C(""),k(""),B("Updated ".concat(o.name,"'s number")),setTimeout((function(){B("")}),4e3)})).catch((function(e){console.log(e),z("Could not update number! ".concat(o.name," is deleted from the server")),setTimeout((function(){z(""),r(n.filter((function(e){return e.id!==o.id})))}),4e3)})):b(t).then((function(e){r(n.concat(e)),C(""),k(""),B("Added ".concat(e.name)),setTimeout((function(){B("")}),4e3)})).catch((function(e){console.log(e),z("Failed to add ".concat(t.name,". Could not connect to server")),setTimeout((function(){z("")}),4e3)}))},newName:j,handleNameChange:function(e){C(e.target.value)},newNumber:S,handleNumberChange:function(e){k(e.target.value)}}),o.a.createElement("h3",null,"Entries"),o.a.createElement(v,{personsToShow:J,setPersons:r,persons:n,setNotification:B,setErrorNotification:z}))};c.a.render(o.a.createElement(j,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2700dfb9.chunk.js.map