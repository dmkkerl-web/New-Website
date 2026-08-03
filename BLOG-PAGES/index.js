let containers =document.querySelectorAll('.Tech-trends');
let rightarrow =document.querySelectorAll('.arrow-right');
let leftarrow =document.querySelectorAll('.arrow-left');

containers.forEach((container,index)=>{
   let right =rightarrow[index];
    let left =leftarrow[index];

//function to hide and display the scroll buttons
    function update(){
    left.style.display=container.scrollLeft > 0? 'block' : 'none';
    const maxScroll=container.scrollWidth - container.clientWidth;
    right.style.display =container.scrollLeft < maxScroll ? 'block' :'none';

}
//logic that handles the scrolling when buttons are clicked
left.addEventListener('click',()=>{
    container.scrollBy({ left: -250, behavior: 'smooth'});
});
right.addEventListener('click',()=>{
    container.scrollBy({left:250,behavior:'smooth'});
});
container.addEventListener('scroll',update);
window.addEventListener('resize',update);

update();
})

//function to change the theme of the page between dark and light
let isClicked=true;
let Toggle =document.getElementById("Toggle").onclick =function(){
      
    if (isClicked){
          UpdateDark();
          isClicked =false;
        
    }
    else{
        UpdateLight();
        isClicked =true;
    }
  
};
function UpdateDark(){
    document.getElementById("body").style.background="black"
    document.getElementById("body").style.color="white"
    document.getElementById("Toggle").innerHTML="Light"

}
function UpdateLight(){
    document.getElementById("body").style.background ="white"
    document.getElementById("body").style.color="black"
    document.getElementById("Toggle").innerHTML="Dark"
}

//loading-screen logic
window.addEventListener('load',()=>{
    const LoadingPage=document.getElementById('loadingPage');
    LoadingPage.classList.add('hidden');
})
