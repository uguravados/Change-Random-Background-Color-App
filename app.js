const btn=document.querySelector(".changebtn")
console.log(btn);

const body = document.querySelector("body")
console.log(body);

const h1=document.querySelector("h1")
console.log(h1);




btn.addEventListener("mousemove",function randomcolor(){

    let red=Math.floor(Math.random()*255)
    let green=Math.floor(Math.random()*255)
    let blue=Math.floor(Math.random()*255)
        
    let rgb= `rgb(${red} ,${green}, ${blue})`;
    btn.style.background=rgb;
    console.log(rgb);
        })

btn.addEventListener("click",function randomcolor(){

    let red=Math.floor(Math.random()*255)
    let green=Math.floor(Math.random()*255)
    let blue=Math.floor(Math.random()*255)
        
    let rgb= `rgb(${red} ,${green}, ${blue})`;
    body.style.background=rgb;
        })



