const card = document.getElementById("card");

document.addEventListener("mousemove",(e)=>{

const x = (window.innerWidth/2 - e.pageX) / 25;
const y = (window.innerHeight/2 - e.pageY) / 25;

card.style.transform = `skewX(-8deg) rotateY(${x}deg) rotateX(${y}deg)`;

});

document.addEventListener("mouseleave",()=>{
card.style.transform="skewX(-8deg) rotateY(0deg) rotateX(0deg)";
});
