(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{12:function(e,t,i){},14:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i(5),s=i.n(a),c=(i(12),i.p+"static/media/home.1f40a1ea.svg"),o=i.p+"static/media/about.09ddaa37.svg",r=i.p+"static/media/project.d3b4160a.svg",l=i.p+"static/media/workExp.9356ddfc.svg",j=i.p+"static/media/contactMe.9ec1d2df.svg",h=i.p+"static/media/BE.6cb87b58.png",m=i(6),d=function e(t,i,n,a,s,c,o,r){Object(m.a)(this,e),this.title=t,this.company=i,this.companyLink=n,this.logo=a,this.startDate=s,this.endDate=c,this.tech=o,this.discription=r},b=i(0);function g(e){return Object(b.jsx)("nav",{className:"navbar",children:Object(b.jsx)("ul",{class:"navbar-nav",children:e.children})})}function u(e){return Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsxs)("a",{href:e.section,class:"nav-link",children:[Object(b.jsx)("img",{src:e.icon,className:"nav-item-logo",alt:"logo"}),Object(b.jsx)("span",{class:"link-text",children:e.text})]})})}var y=function(e){for(var t=[],i=0;i<e;i++)t.push(Object(b.jsx)("li",{},i));return t};function x(e){return Object(b.jsx)("div",{className:"banner-background",children:Object(b.jsx)("ul",{className:"circles",children:y(e.numCircles)})})}var k=function(e){return Object(b.jsxs)("section",{className:"banner",children:[Object(b.jsx)(x,{numCircles:e.numCircles}),Object(b.jsxs)("div",{className:"banner-text",children:[Object(b.jsxs)("h1",{children:["Hi! I'm ",e.profile.name]}),Object(b.jsxs)("p",{children:["I'm a ",e.profile.schoolYear," year ",e.profile.program," @",Object(b.jsx)("strong",{children:e.profile.university})]}),Object(b.jsx)("p",{children:"You can check out more about me below."}),Object(b.jsx)("a",{href:e.contactLink,className:"contact-me",children:"Contact Me"})]})]})},v=i(3),f=i(7);function O(e,t,i,n){var a=Math.PI,s=n.width,c=void 0===s?500:s,o=n.height,r=void 0===o?500:o,l=n.radius,j=void 0===l?150:l,h=(n.padding,n.fontSize),m=void 0===h?22:h,d=n.tilt,b=void 0===d?0:d,g=n.initialVelocityX,u=void 0===g?0:g,y=n.initialVelocityY,x=void 0===y?0:y,k=n.initialRotationX,O=void 0===k?0:k,I=n.initialRotationZ,p=u,Q=x,A=O,N=void 0===I?0:I,w=e.getContext("2d");w.textAlign="center",e.width=2*c,e.height=2*r,e.style.width="".concat(c,"px"),e.style.height="".concat(r,"px"),w.scale(2,2);var G,M,D=!1;function Y(e,t,i){return[e*Math.cos(i)-t*Math.sin(i),e*Math.sin(i)+t*Math.cos(i)]}e.addEventListener("mousedown",(function(e){D=!0,G=e.screenX,M=e.screenY})),e.addEventListener("mousemove",(function(e){if(D){var t=e.screenX-G,i=e.screenY-M,n=[e.screenX,e.screenY];G=n[0],M=n[1],N+=.01*-i,A+=.01*t,p=.1*t,Q=.1*i,Z||H()}})),e.addEventListener("mouseup",(function(e){return D=!1})),e.addEventListener("mouseleave",(function(e){return D=!1}));var Z=!1;function L(){Z&&window.requestAnimationFrame(L),function(){w.clearRect(0,0,e.width,e.height);var n,s=0,o=0,l=Object(f.a)(t);try{for(l.s();!(n=l.n()).done;){var h=n.value,d=a/(i.length-1)*o,g=2*a/i[o]*s,u=j*Math.sin(d)*Math.cos(g),y=j*Math.sin(d)*Math.sin(g),x=j*Math.cos(d)+s%2*8,k=Y(y,x,b),O=Object(v.a)(k,2);y=O[0];var I=Y(u,x=O[1],N),p=Object(v.a)(I,2);u=p[0],x=p[1];var Q=Y(u,y,A),G=Object(v.a)(Q,2);u=G[0],y=G[1];var M=.6+u/j*.4,D=m+.2+u/j*.5;w.fillStyle="rgba(0,53,66,".concat(M,")"),w.font="".concat(D,'em "Poppins", sans-serif'),w.fillText(h,y+c/2,r/2-x),--s<0&&(o++,s=i[o]-1)}}catch(Z){l.e(Z)}finally{l.f()}}(),p>0&&(p-=.01),Q>0&&(Q-=.01),p<0&&(p+=.01),Q>0&&(Q+=.01),0==p&&0==Q&&(Z=!1),N+=.01*Q,A+=.01*p}function H(){Z=!0,window.requestAnimationFrame(L)}H()}var I=function(e){var t=e.width,i=e.height,a=e.languages,s=Object(n.useRef)(null),c=[1,2,4,5,4,2,1],o={tilt:Math.PI/9,initialVelocityX:.09,initialVelocityY:.09,initialRotationX:.14*Math.PI,initialRotationZ:0,width:t,height:i,radius:220,fontSize:1};return Object(n.useEffect)((function(){O(s.current,a,c,o)}),[]),Object(b.jsx)("canvas",{ref:s,id:"skill-canvas"})};var p=function(e){return Object(b.jsxs)("section",{className:"about-content",id:"About",children:[Object(b.jsx)("h2",{children:"About Me"}),Object(b.jsxs)("div",{className:"skill-box",children:[Object(b.jsxs)("div",{className:"skill-content",children:[Object(b.jsx)("p",{children:"Hi! I am Vrajang, a passionate and team oriented developer who likes to create fun things. The main area of my expertise are game development and web development."}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Game devoplment:"})," I have experiance working in AAA game development environments through my internships. I am familar with ",Object(b.jsx)("em",{children:"Unreal Engine"})," and ",Object(b.jsx)("em",{children:"Unity"}),"."]}),Object(b.jsxs)("p",{children:[" ",Object(b.jsx)("strong",{children:"Web devoplment:"})," I am familar with JS, React and Node.js."]})]}),Object(b.jsx)("div",{className:"skill-sphere",children:Object(b.jsx)(I,{languages:e.languages,width:510,height:480})})]})]})};function Q(e){var t=e.job,i=t.tech.map((function(e){return Object(b.jsx)("li",{className:"tech-entry",children:e})})),n=t.discription.map((function(e){return Object(b.jsx)("li",{className:"job-discription-entry",children:e})}));return Object(b.jsxs)("div",{className:"work-entry",children:[Object(b.jsx)("div",{className:"work-logo",children:Object(b.jsx)("a",{href:t.companyLink,className:"work-link",children:Object(b.jsx)("img",{src:t.logo,alt:"company logo",className:"work-img"})})}),Object(b.jsxs)("div",{className:"work-content",children:[Object(b.jsx)("h3",{className:"job-title",children:t.title}),Object(b.jsxs)("div",{className:"job-info",children:[Object(b.jsxs)("p",{className:"job-date",children:[t.startDate.toLocaleString("default",{month:"long"})," ",t.startDate.getFullYear()," - ",t.endDate.toLocaleString("default",{month:"long"})," ",t.endDate.getFullYear()]}),Object(b.jsx)("ul",{class:"tech-used",children:i})]}),Object(b.jsx)("ul",{class:"job-discription",children:n})]})]})}var A=function(e){var t=e.jobs.map((function(e){return Object(b.jsx)(Q,{job:e})}));return Object(b.jsxs)("section",{className:"experience-content",id:"Work-experience",children:[Object(b.jsx)("h1",{children:"Experience"}),t]})},N={name:"Vrajang",schoolYear:"third",program:"Computer Science",university:"University of Waterloo"},w=["React","Python","C#","C","C++","Scheme","Unreal Engine","Unity","Git","Linux","ARM x86","MIPS assembly","Lua","Javascript","Visual Studio","Perforce","MySQL"],G=new d("Game Programmer (Warframe: AI team, Remote)","Digital Extremes Ltd.","https://www.digitalextremes.com/","data:image/png;base64,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",new Date(2021,4),new Date(2021,7),["C++","Lua"],["Developed gameplay features for main enemies using C++ and Lua","Worked on improving old enemies and refined npc game mechanics","Fixed bugs related to various game abilities and AI behaviors in Warframe"]),M=new d("Game Programmer (Remote)","Behaviour Interactive Inc.","https://www.bhvr.com/",h,new Date(2020,8),new Date(2020,11),["Unreal Engine","C++"],["Developed and improved game components (UI, graphics, sound, etc.) and refined game mechanics","Fixed bug related to various game mechanics and UI components","Worked with artists and game designers to identify constraints and solve design problems"]);var D=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(g,{children:[Object(b.jsx)(u,{section:"#top",icon:c,text:"Home"}),Object(b.jsx)(u,{section:"#About",icon:o,text:"About"}),Object(b.jsx)(u,{section:"#Work-experience",icon:l,text:"Experience"}),Object(b.jsx)(u,{section:"#Projects",icon:r,text:"Projects"}),Object(b.jsx)(u,{section:"#Contact",icon:j,text:"Contact"})]}),Object(b.jsx)(k,{profile:N,contactLink:"#Contact",numCircles:10}),Object(b.jsx)(p,{languages:w}),Object(b.jsx)(A,{jobs:[G,M]})]})};s.a.render(Object(b.jsx)(D,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3418251e.chunk.js.map