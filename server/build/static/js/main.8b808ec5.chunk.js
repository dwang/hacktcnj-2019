(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(36)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.dbbb8059.svg"},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(13),r=a.n(s),i=(a(20),a(2)),l=a(3),c=a(5),u=a(4),m=a(7),h=a(6),d=(a(21),a(22),a(23),a(8)),p=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,{icon:"bars",className:"button",onClick:this.props.onClick})}}]),t}(o.a.Component),b=a(14),f=a.n(b),v=(a(29),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"sideNavBar"},o.a.createElement(f.a,{showNav:this.props.handleNav,onHideNav:this.props.onHideNav,title:o.a.createElement("div",{className:"sidebarTitle"},"ReliefGrid"),titleStyle:{backgroundColor:"#3DB2C2"},items:[o.a.createElement("div",{className:"subpages",onClick:this.props.buttonClick},"Home"),o.a.createElement("div",{className:"subpages",onClick:this.props.buttonClick},"Message Board"),o.a.createElement("div",{className:"subpages",onClick:this.props.buttonClick},"Medical Guide")],itemStyle:{backgroundColor:"#fff",padding:0,color:"#565656"},itemHoverStyle:{backgroundColor:"#C93461",color:"aliceblue"}}))}}]),t}(o.a.Component)),g=(a(30),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={showNav:!1},a.handleClick=a.handleClick.bind(Object(m.a)(a)),a.handleButton=a.handleButton.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(){!1===this.state.showNav&&this.setState({showNav:!0})}},{key:"handleButton",value:function(e){this.setState({showNav:!1});var t=e.currentTarget.innerHTML;"Home"===t?this.props.clickHome():"Message Board"===t?this.props.clickForum():"Medical Guide"===t&&this.props.clickMedicalInfo()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"topNav"},o.a.createElement("div",{className:"topNavContainer"},o.a.createElement("div",{className:"buttonColumn"},o.a.createElement(p,{onClick:this.handleClick})),o.a.createElement("h1",{className:"projectTitle"},"ReliefGrid")),o.a.createElement(v,{handleNav:this.state.showNav,onHideNav:function(){return e.setState({showNav:!1})},buttonClick:this.handleButton}))}}]),t}(o.a.Component)),E=(a(31),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("body",{className:"background"},o.a.createElement("div",{className:"red"},o.a.createElement("h1",{className:"description"},"A P2P System to Connect Citizens During Natural Disasters"),o.a.createElement("div",{className:"flexbox"},o.a.createElement("div",{className:"col"},o.a.createElement(d.a,{icon:"fire",className:"logo"}),o.a.createElement("h1",null,"Fire Department")),o.a.createElement("div",{className:"col"},o.a.createElement(d.a,{icon:"traffic-light",className:"logo"}),o.a.createElement("h1",null,"Police Department")),o.a.createElement("div",{className:"col"},o.a.createElement(d.a,{icon:"home",className:"logo"}),o.a.createElement("h1",null,"Volunteer Responders")))),o.a.createElement("div",{className:"blurple"},o.a.createElement("p",{className:"brief"},"ReliefGrid is a network system designed to aid the rescue process during a natural disaster."),o.a.createElement("p",{className:"work"},"How It Works"),o.a.createElement("p",{className:"test"},"During a natural disaster, the internet almost always goes out. Qualcomm's DragonBoards are able to host their own website; essentially a hotspot. If the main netowrk goes out, then the network of DragonBoards would be triggered to host their own series of hotspots. In need of help, the citizens would be able to post pictures of the incident and help for relief"),o.a.createElement("br",null),o.a.createElement("p",{className:"work"},"Why?"),o.a.createElement("p",{className:"test"},"Our goal with ReliefGrid is to help rescue squads and volunteers to locate people who need help, because of the damage that was done due to a natural disaster in their area.")))}}]),t}(o.a.Component)),w=(a(32),a(33),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"post"},this.props.message)}}]),t}(o.a.Component)),y=(a(34),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"list"},this.props.postList.map(function(e){return o.a.createElement(w,{message:e})}))}}]),t}(o.a.Component)),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={postList:[],image:"+"},a.postIncident=a.postIncident.bind(Object(m.a)(a)),a.onChange=a.onChange.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=[];fetch("https://reliefgrid.net/api/getIncidents").then(function(t){t.map(function(t){e.push(t.message)})});this.setState({postList:e})}},{key:"postIncident",value:function(e){var t=this.state.postList;t.unshift(e),this.setState({postList:t})}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&(""===e.target.value?alert("Please enter your incident!"):(this.props.postIncident(e.target.value),e.target.value="",e.preventDefault()))}},{key:"onChange",value:function(e){if(""!==e.target.value){var t=e.target.value.split("\\"),a=t.length;this.setState({image:t[a-1]})}}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("form",{action:"https://reliefgrid.net/api/addIncident",method:"post",encType:"multipart/form-data",id:"upload-form"},o.a.createElement("div",{className:"inputWrapper"},o.a.createElement("input",{placeholder:"Describe the incident",onKeyPress:this.handleKeyPress.bind(this),id:"form",name:"message",required:"required"}),o.a.createElement("input",{type:"file",name:"image",id:"image",className:"inputfile",onChange:this.onChange}),o.a.createElement("label",{for:"image"},this.state.image),o.a.createElement("input",{type:"hidden",name:"image_name",value:this.state.file})),o.a.createElement("button",{type:"submit",className:"btn"},"Submit")),o.a.createElement(y,{postList:this.state.postList}))}}]),t}(o.a.Component),O=(a(35),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("body",null,o.a.createElement("div",{className:"category",id:"red"},o.a.createElement("h1",{className:"titleHeader"},"Bleeding"),o.a.createElement("h2",null,"Cover the wound with a gauze or a cloth and apply direct pressure to stop the blood flow. Don't remove the cloth. Add more layers if needed. The cloth will help clots form to stop the flow. ",o.a.createElement("br",null),o.a.createElement("br",null),"In most cases, applying a tourniquet may do more damage to the limb than good. The 2010 American Heart Association guidelines also discount the value of elevation and using pressure points.")),o.a.createElement("div",{className:"category",id:"orange"},o.a.createElement("h1",{className:"titleHeader"},"Burns"),o.a.createElement("h2",null,"Flush the burned area with cool running water for several minutes. Do not use ice. ",o.a.createElement("br",null),o.a.createElement("br",null),"Apply a light gauze bandage. ",o.a.createElement("br",null),o.a.createElement("br",null),"Do not apply certain ointments, butter, or oily remedies to the burn. ",o.a.createElement("br",null),o.a.createElement("br",null),"Take ibuprofen or acetaminophen for pain relief if necessary. ",o.a.createElement("br",null),o.a.createElement("br",null),"Do not break any blisters that may have formed.")))}}]),t}(o.a.Component)),k=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"pageSelect",value:function(e){return e.showHome?o.a.createElement(E,null):e.showForum?o.a.createElement(j,null):e.showMedicalInfo?o.a.createElement(O,null):void 0}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.props.selectPage.map(function(t){return e.pageSelect(t)}))}}]),t}(o.a.Component),N=a(10),C=a(11);N.b.add(C.a,C.b,C.d,C.c);var H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={showNav:!1,show:[{showHome:!0},{showForum:!1},{showMedicalInfo:!1}]},a.selectHome=a.selectHome.bind(Object(m.a)(a)),a.selectForum=a.selectForum.bind(Object(m.a)(a)),a.selectMedicalInfo=a.selectMedicalInfo.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"selectHome",value:function(){this.setState({show:[{showHome:!0},{showForum:!1},{showMedicalInfo:!1}]})}},{key:"selectForum",value:function(){this.setState({show:[{showHome:!1},{showForum:!0},{showMedicalInfo:!1}]})}},{key:"selectMedicalInfo",value:function(){this.setState({show:[{showHome:!1},{showForum:!1},{showMedicalInfo:!0}]})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(g,{clickHome:this.selectHome,clickForum:this.selectForum,clickMedicalInfo:this.selectMedicalInfo}),o.a.createElement(k,{selectPage:this.state.show}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,1,2]]]);
//# sourceMappingURL=main.8b808ec5.chunk.js.map