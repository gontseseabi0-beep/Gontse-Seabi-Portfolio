(function(){
var NS="http://www.w3.org/2000/svg";
var C={x:200,y:150};
var nodes=[
{n:"Networking",x:200,y:42,t:"VLANs, subnetting, IP addressing and Cisco Packet Tracer topologies."},
{n:"Programming",x:340,y:150,t:"Python and Visual Basic, plus tutoring Network Programming 2."},
{n:"Security",x:200,y:258,t:"Firewall configuration, access controls and cybersecurity foundations."},
{n:"Leadership",x:60,y:150,t:"Class representative and tutor, with rugby teamwork behind it."}
];
var links=document.getElementById("links"),g=document.getElementById("nodes"),cap=document.getElementById("cap");
function el(t,a,p){var e=document.createElementNS(NS,t);for(var k in a)e.setAttribute(k,a[k]);p.appendChild(e);return e}
var reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
nodes.forEach(function(o,i){
el("line",{x1:C.x,y1:C.y,x2:o.x,y2:o.y,"class":"link"},links);
if(!reduce){var p=el("circle",{r:4,"class":"pkt",cx:C.x,cy:C.y},links);
var a=el("animate",{attributeName:"cx",values:C.x+";"+o.x+";"+C.x,dur:(3+i*.7)+"s",repeatCount:"indefinite"},p);
el("animate",{attributeName:"cy",values:C.y+";"+o.y+";"+C.y,dur:(3+i*.7)+"s",repeatCount:"indefinite"},p)}
});
var all=[];
function show(o,gn){all.forEach(function(x){x.classList.remove("on")});gn.classList.add("on");cap.textContent=o.t}
nodes.forEach(function(o){
var gn=el("g",{"class":"node",tabindex:0,role:"button","aria-label":o.n},g);
el("circle",{cx:o.x,cy:o.y,r:36},gn);
var tx=el("text",{x:o.x,y:o.y+4},gn);tx.textContent=o.n;
all.push(gn);
gn.addEventListener("click",function(){show(o,gn)});
gn.addEventListener("mouseenter",function(){show(o,gn)});
gn.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();show(o,gn)}});
});
var hub=el("g",{"class":"node"},g);
el("circle",{cx:C.x,cy:C.y,r:30,style:"fill:#EBB446;stroke:#EBB446"},hub);
var ht=el("text",{x:C.x,y:C.y+4,style:"fill:#0D1F31"},hub);ht.textContent="Gontse";
})();
(function(){
var tabs=[].slice.call(document.querySelectorAll('[role=tab]')),panels=[].slice.call(document.querySelectorAll('.panel'));
function show(id){panels.forEach(function(p){p.hidden=p.id!==id});tabs.forEach(function(b){var on=b.dataset.t===id;b.setAttribute('aria-selected',on);b.tabIndex=on?0:-1;if(on&&b.scrollIntoView)b.scrollIntoView({inline:'center',block:'nearest'})})}
function route(){var h=decodeURIComponent(location.hash.slice(1)),el=h&&document.getElementById(h);
if(!el){show('home');return}
var p=el.classList.contains('panel')?el:el.closest('.panel');
if(p){show(p.id);if(el===p){window.scrollTo(0,0)}else{el.scrollIntoView()}}else{el.scrollIntoView()}}
tabs.forEach(function(b,i){b.addEventListener('click',function(){location.hash=b.dataset.t});
b.addEventListener('keydown',function(e){var n=e.key==='ArrowRight'?i+1:e.key==='ArrowLeft'?i-1:null;if(n===null)return;e.preventDefault();n=(n+tabs.length)%tabs.length;tabs[n].focus();location.hash=tabs[n].dataset.t})});
window.addEventListener('hashchange',route);route();
var lb=document.getElementById('lb');
if(lb){document.querySelectorAll('.gal button').forEach(function(b){b.addEventListener('click',function(){lb.querySelector('img').src=b.querySelector('img').src;lb.querySelector('img').alt=b.dataset.cap;lb.querySelector('p').textContent=b.dataset.cap;if(lb.showModal)lb.showModal()})});
lb.querySelector('.x').addEventListener('click',function(){lb.close()});
lb.addEventListener('click',function(e){if(e.target===lb)lb.close()})}
var send=document.getElementById('send');
if(send)send.addEventListener('click',function(){var r=document.querySelector('input[name=r]:checked'),n=document.getElementById('fn').value.trim(),c=document.getElementById('fc').value.trim();
var body='Name: '+(n||'Anonymous')+'\nRating (1-5): '+(r?r.value:'not given')+'\n\n'+c;
location.href='mailto:gontseseabi0@gmail.com?subject='+encodeURIComponent('Tutorial feedback')+'&body='+encodeURIComponent(body)})
})();
