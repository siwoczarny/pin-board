(this["webpackJsonppin-board"]=this["webpackJsonppin-board"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),i=(a(14),a(6)),o=a(1),s=a(2),u=a(4),m=a(3),h=a(5),d=(a(15),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).currentDate=(new Date).toLocaleDateString(),a.minDate=(new Date).toISOString().slice(0,10),a.state={text:"",checked:!1,date:a.minDate},a.handleText=function(e){a.setState({text:e.target.value})},a.handleCheckbox=function(e){a.setState({checked:e.target.checked})},a.handleDate=function(e){a.setState({date:e.target.value})},a.handleClick=function(){var e=a.state,t=e.text,n=e.date,r=e.checked;t.length>=3?a.props.add(t,n,r)&&a.setState({text:"",checked:!1,date:a.minDate}):alert("Nazwa zadania za kr\xf3tka, wpisz minimum 3 znaki")},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.minDate.slice(0,4);return e+="-12-31",r.a.createElement("div",{className:"form"},r.a.createElement("p",null,"Dzisiejsza data: ",this.currentDate),r.a.createElement("label",{htmlFor:"text"},"Dodaj zadanie:"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"np. wynie\u015b\u0107 \u015bmieci",value:this.state.text,onChange:this.handleText}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"important",className:"important"},"Priorytet"),r.a.createElement("input",{type:"checkbox",checked:this.state.checked,onChange:this.handleCheckbox,id:"important",className:"important"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"date"},"Termin wykonania:"),r.a.createElement("br",null),r.a.createElement("input",{type:"date",value:this.state.date,min:this.minDate,max:e,onChange:this.handleDate}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handleClick},"Dodaj zadanie"))}}]),t}(n.Component)),k=function(e){var t=e.task,a=t.text,n=t.date,l=t.id,c=t.active,i=t.important,o=t.finishDate;if(c)return r.a.createElement("div",{className:"task"},r.a.createElement("p",null,r.a.createElement("strong",{style:i?{color:"#fa3232"}:null},a)," - do ",r.a.createElement("span",null,n," "),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return e.change(l)}}," Zrobione!"),r.a.createElement("button",{onClick:function(){return e.delete(l)}}," Skasuj")));var s=new Date(o).toISOString().slice(0,10);return r.a.createElement("div",{className:"task"},r.a.createElement("p",null,r.a.createElement("strong",null,a)," - do ",r.a.createElement("span",null,n),r.a.createElement("br",null),"/wykonano ",r.a.createElement("span",null,s,"/"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return e.delete(l)}}," Skasuj"),r.a.createElement("br",null)))},f=(a(16),function(e){var t=e.tasks.filter((function(e){return e.active})),a=e.tasks.filter((function(e){return!e.active}));t.length>=2&&t.sort((function(e,t){return(e=e.important)<(t=t.important)?1:e>t?-1:0})),a.length>=2&&a.sort((function(e,t){return e.finishDate<t.finishDate?1:e.finishDate>t.finishDate?-1:0}));var n=t.map((function(t){return r.a.createElement(k,{key:t.id,task:t,delete:e.delete,change:e.change})})),l=a.map((function(t){return r.a.createElement(k,{key:t.id,task:t,delete:e.delete,change:e.change})}));return r.a.createElement("div",{className:"list"},r.a.createElement("div",{className:"active"},r.a.createElement("h3",null,"Zadania do zrobienia [",t.length,"]"),n.length>0?n:r.a.createElement("p",null,"Brak zada\u0144 do zrobienia")),r.a.createElement("div",{className:"done"},r.a.createElement("h3",null,"Zadania zrobione [",a.length,"]"),l))}),E=(a(17),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).counter=6,a.state={tasks:[]},a.deleteTask=function(e){var t=Object(i.a)(a.state.tasks),n=t.findIndex((function(t){return t.id===e}));t.splice(n,1),a.setState({tasks:t})},a.changeTaskStatus=function(e){console.log("change w stanie elementu o id "+e);var t=Array.from(a.state.tasks);t.forEach((function(t){t.id===e&&(t.active=!1,t.finishDate=(new Date).getTime())})),a.setState({tasks:t}),console.log(t)},a.addTask=function(e,t,n){var r={id:a.counter,text:e,date:t,important:n,active:!0,finishDate:!0};return a.counter++,console.log(r,a.counter),a.setState((function(e){return{tasks:[].concat(Object(i.a)(e.tasks),[r])}})),!0},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"Tablica korkowa"),r.a.createElement("h2",null,"Przypomni o wszystkim")),r.a.createElement("hr",null),r.a.createElement(d,{add:this.addTask}),r.a.createElement("hr",null),r.a.createElement(f,{tasks:this.state.tasks,delete:this.deleteTask,change:this.changeTaskStatus}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.465c9253.chunk.js.map