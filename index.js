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