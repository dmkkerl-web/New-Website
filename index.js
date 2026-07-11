//navbar digital clock logic
function clockprogram(){
    let time =new Date();
    let hours = time.getHours().toString().padStart(2,0);
    let minutes =time.getMinutes().toString().padStart(2,0);
    let seconds =time.getSeconds().toString().padStart(2,0);
    let timestring =`${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent=timestring;
}
clockprogram();
setInterval(clockprogram,1000);

//sidebar logic

let sidebar=document.getElementById("side-bar");
let Button=document.getElementById("menu-toggle");
let Showing=false;
function DisplaySideBar(){
    console.log("diplaying SideBar");
    sidebar.style.transform="translateX(0)";
}
Button.addEventListener('click',()=>{
    if (!Showing){
    Button.innerHTML="&#10005;"
    DisplaySideBar();
    Showing=true;
    
    }
    else{
        Button.innerHTML="&#9776;"
        CloseSideBar();
        Showing=false;
        
    }
})

function CloseSideBar(){
    console.log("hiding sidebar")
    sidebar.style.transform="translateX(-120px)";
}