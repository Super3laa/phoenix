(this.webpackJsonpalaa=this.webpackJsonpalaa||[]).push([[0],{20:function(e){e.exports=JSON.parse('[{"Q":"Eagle dosen\'t Mirror the arduino Uno, What should i do ?","A":"Try mirror the arduino uno before moving it into the working place as the free version of Eagle dosen\'t let you exceed dimensions of 10cm*10cm."},{"Q":"How should i calculate the values of my components ?","A":"well in Capacitors it\'s recommended yo use 100uF at the input power line and 100nF after the regulator output for filteration, For the value of the resistors you can just apply ohm\'s law at the voltage node you\'re attaching the led to but i would recommend to use the value 1K Ohm ."},{"Q":"What layers should i select to print on my PCB ?","A":"As we\'re working on the bottom layer of the PCB select bottom layer , PADs and Vias in case you have jumbers in your design and DON\'T Select the top layer."},{"Q":"I cannot find a bluetooth in components, What should i do?","A":"two solutions you can search for a Bluetooth module library fo eagle or just put 6 pin pinheader and connect them with respect to the bluetooth pins order."},{"Q":"How to put the PCB in the ACID ?","A":"Just pour the acid in a blastic box that you wont use again as it will be poisonous and put your PCB untill the copper is gone for like 30 min give or take depending on your PCB size."},{"Q":"How to print the design on the PCB Board ?","A":"First make sure you cleaned the PCB very well then put the desgin on the board and iron it like ironing your shirt for like 20min."},{"Q":"What should i do if some traces are cutted and not printed fully ?","A":"if it\'s just one or two traces you can usea nonremovable marker or corrector pin to connect the trace and if most of the design are not printed just clean the PCB and re print the design."},{"Q":"How should i choose my drill tip ?","A":"it depends on your components footprint size but i would recommend 1mm for the whole design except rosetta terminal and switch 1.5mm."},{"Q":"I\'m using lable tool to name the wire but it\'s not working ,What should i do ?","A":"Use name tool it\'s below the lable tool and start namig your wire and it will generate the lable automatically for you."}]')},26:function(e,t,a){e.exports=a.p+"static/media/github.375e7768.png"},27:function(e,t,a){e.exports=a.p+"static/media/npm.9a3d4d24.png"},28:function(e,t,a){e.exports=a.p+"static/media/Medium.ebf9da10.png"},30:function(e,t,a){e.exports=a.p+"static/media/phoeinx.2e92c443.png"},36:function(e,t,a){e.exports=a.p+"static/media/test.06bdbd48.jpg"},37:function(e){e.exports=JSON.parse('[{"title":"Robotics Zero to Hero","description":"Assemble your first Robot in a few steps","image":"ZTH.jpg","medium":"https://medium.com/@alaaessam2706/robotics-zero-to-hero-f1329024e04d"}]')},38:function(e,t,a){e.exports=a.p+"static/media/splash.f272f9e3.png"},39:function(e){e.exports=JSON.parse('[{"title":"Robotics Zero to Hero","description":"Assemble your first Robot in a few steps","image":"ZTH.jpg","medium":"https://medium.com/@alaaessam2706/robotics-zero-to-hero-f1329024e04d"}]')},40:function(e){e.exports=JSON.parse("[]")},41:function(e,t,a){e.exports=a.p+"static/media/PCB.c85a563b.jpg"},44:function(e,t,a){e.exports=a(68)},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),l=(a(49),a(42)),i=a(3),s=a(11),m=(a(50),a(51),a(52),a(26)),u=a.n(m),d=a(27),h=a.n(d),p=a(28),g=a.n(p);function f(e){var t="http://www.phoeinx.ninja/images/"+encodeURI(e.content.image);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Item",style:e.style},r.a.createElement("div",{className:"pic",style:{backgroundImage:"url(".concat(t,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",height:"30vh"}}),r.a.createElement("div",{className:"Filter",style:{backgroundImage:"article"===e.type?"linear-gradient(to right, #449aa27a, #bc4083a8)":"linear-gradient(to right, #f3822187, #273bb091)"}}),r.a.createElement("div",null,r.a.createElement("p",{className:"Title"},e.content.title),r.a.createElement("p",{className:"content"},e.content.description)),r.a.createElement("div",{className:"break"}),r.a.createElement("div",{className:"ItemActions"},e.content.medium?r.a.createElement("a",{href:e.content.medium,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("div",{className:"actionItem"},r.a.createElement("img",{src:g.a,alt:"Medium",height:"auto",width:"100%"}))):null,e.content.npm?r.a.createElement("a",{href:e.content.npm,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("div",{className:"actionItem"},r.a.createElement("img",{src:h.a,alt:"npm",height:"auto",width:"100%"}))):null,e.content.github?r.a.createElement("a",{href:e.content.github,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("div",{className:"actionItem"},r.a.createElement("img",{src:u.a,alt:"GitHub",height:"auto",width:"100%"}))):null)))}function E(e){var t=window.innerWidth,a=[],n=[],o=[];try{for(var c=e.content.length/3,l=e.content.length,i=0;i<c;i++){for(var s=[],m=1;m<=3;m++)l>0&&(m%2!==0?(s.push(r.a.createElement(f,{key:i,content:e.content[l-1],type:e.type,style:{gridRow:"2/span 7"}})),a.push(r.a.createElement(f,{content:e.content[l-1],type:e.type}))):(s.push(r.a.createElement(f,{key:i,content:e.content[l-1],type:e.type,style:{gridRow:"1/span 7"}})),a.push(r.a.createElement(f,{key:i,content:e.content[l-1],type:e.type})))),l-=1;o.push(r.a.createElement("div",{className:"GridWrapper"},s))}}catch(u){}return n.push(r.a.createElement("div",{className:"GridWrapper"},a)),r.a.createElement(r.a.Fragment,null,t>600?o:n)}a(53);var b=a(29);function v(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"contactUs"},r.a.createElement("h2",null,"Contact Us"),r.a.createElement("div",{className:"Field"},r.a.createElement("h1",null,"Your Name"),r.a.createElement("input",{type:"text",placeholder:"Name",id:"ContactEmail"})),r.a.createElement("div",{className:"Field"},r.a.createElement("h1",null,"Subject"),r.a.createElement("input",{type:"text",placeholder:"Subject",id:"ContactSubject"})),r.a.createElement("div",{className:"Field"},r.a.createElement("h1",null,"Messege"),r.a.createElement("textarea",{rows:"5",cols:"60",type:"text",placeholder:"Msg",id:"ContactMsg"})),r.a.createElement("div",{className:"Field"},r.a.createElement("button",{className:"submitButton",onClick:function(){var e={userEmail:document.getElementById("ContactEmail").value,userSubject:document.getElementById("ContactSubject").value,message:document.getElementById("ContactMsg").value};b.send("default_service","template_97nacgtr",e,"user_ht8Z7Lju7x2HF5KQBlAs6").then((function(e){return alert("Message has been sent")})).catch((function(e){return alert("Sorry, Try again")}))}},"Send"))))}a(56);var y=a(71),w=a(72),k=a(30),N=a.n(k);function j(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{collapseOnSelect:!0,expand:"xl",variant:"dark",style:{backgroundColor:"rgb(31 31 31 / 70%)",position:"absolute",width:"100%"}},r.a.createElement(y.a.Brand,{href:"/",style:{color:"#f5d060"}}," ",r.a.createElement("img",{src:N.a,width:"100",height:"auto",className:"d-inline-block align-top",alt:"Phoeinx"})),r.a.createElement(y.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(y.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(w.a,{className:"mr-auto"},r.a.createElement(w.a.Link,{style:{color:"wheat"},href:"#/"},"Home"),r.a.createElement(w.a.Link,{style:{color:"wheat"},href:"#/Articles"},"Articles"),r.a.createElement(w.a.Link,{style:{color:"wheat"},href:"#/Projects"},"Projects"),r.a.createElement(w.a.Link,{style:{color:"wheat"},href:"#/PCBQA"},"Q&A")))))}function A(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null),e.content,r.a.createElement("div",{className:"footer"},r.a.createElement(v,null),r.a.createElement("div",{className:"AboutSocial"},r.a.createElement("a",{href:"https://www.facebook.com/PhoenixCampOfficial",rel:"nofollow",starget:"_blank",className:"fa fa-facebook"},r.a.createElement("div",null)),r.a.createElement("br",null),r.a.createElement("p",null,"Stay in touch with us on SocialMedia"),r.a.createElement("p",null,"Copyright \xa9 2020 AlaaEssam. All Rights Reserved"))))}var x=a(36),C=a.n(x),S=a(37);function P(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){o(S)}),[]),r.a.createElement(A,{content:r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"Landing"},r.a.createElement("div",{className:"pic",style:{backgroundImage:"url(".concat(C.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",height:"100vh"}},r.a.createElement("div",{style:{textAlign:"center",paddingTop:"36vh"}},r.a.createElement("p",{style:{fontSize:"10vh",fontWeight:"400",color:"white"}},"Phoenix Camp"),r.a.createElement("p",{style:{fontSize:"6vh",fontWeight:"300",color:"#fff5d9bf"}},"Transform yourself into a Ninja in techs"))),r.a.createElement("div",{className:"FilterFront"})),r.a.createElement("section",{className:"ShowOff"},r.a.createElement("h2",{className:"title"},"Hot Articles & Projects"),r.a.createElement("div",{className:"breaker"}),r.a.createElement(E,{content:a,type:"project"})))})}var F=a(38),B=a.n(F);function O(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pic",style:{backgroundImage:"url(".concat(B.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"auto",backgroundPosition:"center",height:"80vh",display:"flex"}},r.a.createElement("div",{style:{margin:"auto"}},r.a.createElement("p",{style:{fontSize:"40px",color:"white",fontWeight:"300"}},e.content.title))))}var Q=a(39);function I(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){o(Q)}),[]),r.a.createElement(A,{content:r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{content:{title:"Articles"}}),r.a.createElement(E,{content:a,type:"article"}))})}var R=a(40);function z(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){o(R)}),[]),r.a.createElement(A,{content:r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{content:{title:"Projects"}}),r.a.createElement(E,{content:a,type:"project"}))})}var H=a(20);a(62);function W(e){for(var t=[],a=0;a<e.content.length;a++)t.push(r.a.createElement("div",{className:"QATile"},r.a.createElement("p",{className:"Question"},"Q: ",e.content[a].Q),r.a.createElement("p",{className:"Answer"},"A: ",e.content[a].A)));return r.a.createElement(r.a.Fragment,null,t)}var T=a(41),M=a.n(T);a(63);function J(){var e=Object(n.useState)(H),t=Object(s.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){o(H)}),[]),r.a.createElement(A,{content:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pic",style:{backgroundImage:"url(".concat(M.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",height:"100vh"}},r.a.createElement("div",{style:{textAlign:"center",paddingTop:"44vh"}},r.a.createElement("p",{style:{fontSize:"6vh",fontWeight:"400",color:"#fff5d9bf"}},"PCB Common Questions and Answers"))),r.a.createElement("div",{className:"FilterPCB"}),r.a.createElement("h2",{className:"title"},"PCB Design Q&A"),r.a.createElement("div",{className:"breaker"}),r.a.createElement("div",{style:{width:"100%",height:"5vh"}}),r.a.createElement(W,{content:a}),r.a.createElement("div",{style:{width:"100%",height:"5vh"}}))})}var _=function(){return r.a.createElement(l.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:P}),r.a.createElement(i.a,{exact:!0,path:"/Articles",component:I}),r.a.createElement(i.a,{exact:!0,path:"/Projects",component:z}),r.a.createElement(i.a,{exact:!0,path:"/PCBQA",component:J}))))};a(67);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.563c8805.chunk.js.map