
const card = document.getElementById("card");
const loginBtn = document.getElementById("loginBtn");
const backBtn = document.getElementById("backBtn");

loginBtn.onclick = () => {
card.classList.add("active");
}

backBtn.onclick = () => {
card.classList.remove("active");
}

/* 3D tilt */

document.addEventListener("mousemove",(e)=>{

if(window.innerWidth < 650) return;

const x = (window.innerWidth/2 - e.pageX) / 35;
const y = (window.innerHeight/2 - e.pageY) / 35;

card.style.transform =
`skewX(-8deg) rotateY(${x}deg) rotateX(${y}deg)`;

});

document.addEventListener("mouseleave",()=>{

card.style.transform="skewX(-8deg) rotateY(0) rotateX(5deg)";

});

/* touch tilt */

card.addEventListener("touchmove",(e)=>{

const t = e.touches[0];

const x = (window.innerWidth/2 - t.pageX) / 40;
const y = (window.innerHeight/2 - t.pageY) / 40;

card.style.transform =
`rotateY(${x}deg) rotateX(${y}deg)`;

});
