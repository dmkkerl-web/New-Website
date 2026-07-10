let display =document.getElementById("display");
let running =false;
let timer=null;
let starttime=0;
let elapsedtime =0;

function start(){
    if(!running){
        starttime =Date.now()-elapsedtime;
        timer =setInterval(update,10);
        running =true;

    }
}
function stop(){
    if(running){
        clearInterval(timer);
        elapsedtime =Date.now() -starttime;
        running =false;
    }
}
function Reset(){
    if(!running){
    starttime =0;
    elapsedtime =0;
    running =false;

    display.textContent =`00:00:00:00`;
    }
    else{

    }
    
}
function update(){
    let currentTime= Date.now();
    elapsedtime =currentTime -starttime;
    let hours =Math.floor(elapsedtime/(1000*60*60));
    let minutes =Math.floor(elapsedtime/(1000*60)% 60);
    let seconds =Math.floor(elapsedtime/1000 % 60);
    let milliseconds =Math.floor(elapsedtime % 1000/10);

    hours=String(hours).padStart(2,0);
    minutes=String(minutes).padStart(2,0);
    seconds=String(seconds).padStart(2,0);
    milliseconds=String(milliseconds).padStart(2,0);

    display.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`;

}