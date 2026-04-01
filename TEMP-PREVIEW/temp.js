


Degrees=document.getElementById("Degrees");
Kelvin=document.getElementById("Kelvin");
Display=document.getElementById("display");
Resetbtn=document.getElementById("reset");//IMAGINE THE ERROR WAS HERE COZ OF
//get|ElementById;
Convertbtn=document.getElementById("convert");
Display2=document.getElementById("display2");

const Unit=273;
 let Userinput;
 let finalvalue;


Convertbtn.onclick =function(){
    Userinput=document.getElementById("userInput").value;

    if(Userinput==false){
        Display2.textContent=`You need to input a value`;
    }
    else{
    if(Degrees.checked){
       
        finalvalue =Number(Userinput) - Unit;
        Display.textContent=`${finalvalue} Degrees`;
        Display2.textContent=``;
    }
    else if(Kelvin.checked){
        finalvalue= Number(Userinput) + Unit;
        Display.textContent =`${finalvalue} Kelvins`;
        Display2.textContent=``;
    }
    else{
        Display.textContent=`Please choose a unit you wish to convert to`;
    }
    }
    
}
Resetbtn.onclick =function(){
    Display.textContent =0;
}