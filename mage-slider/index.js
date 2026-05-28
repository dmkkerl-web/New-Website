let right =document.getElementById("right");
let left =document.getElementById("left");
let container =document.querySelector(".container");
let number =document.getElementById("number");

function leftupdate(){

    let maxwidth = container.scrollWidth -container.clientWidth;
    container.scrollBy({
        left :maxwidth/3,// or clientWidth
        behavior:'smooth'
    });
    
   
}   
function rightupdate(){

    let maxwidth = container.scrollWidth -container.clientWidth;
    container.scrollBy({
        left: -maxwidth/3,
        behavior:'smooth'
    });


 }

left.addEventListener('click',leftupdate);
right.addEventListener('click',rightupdate);
