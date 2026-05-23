let containers =document.querySelectorAll('.Tech-trends');
let rightarrow =document.querySelectorAll('.arrow-right');
let leftarrow =document.querySelectorAll('.arrow-left');

containers.forEach((container,index)=>{
   let right =rightarrow[index];
    let left =leftarrow[index];


    function update(){
    console.log("hello, i am working");
    left.style.display=container.scrollLeft > 0? 'block' : 'none';
    const maxScroll=container.scrollWidth - container.clientWidth;
    right.style.display =container.scrollLeft < maxScroll ? 'block' :'none';

}
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
