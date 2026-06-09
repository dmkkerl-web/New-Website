


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

 //function handles convertion from degrees to Fahrenheit
 function ToFahrenheit(Value){
    let MyValue=Math.floor((Value*9/5)+32)
    return MyValue
    
 }
 //this function converts fahrenheits to degrees
 function ToDegrees(Value){
    let MyValue=Math.floor((Value - 32)*5/9)
    return MyValue
 }

Convertbtn.onclick =function(){
    Userinput=document.getElementById("userInput").value;
    try{
        
    }
    if(Userinput==false){
        Display2.textContent=`You need to input a value`;
    }
    else{
         if((Degrees.checked) && (FromKelvin.checked)){
       
        finalvalue =Number(Userinput) - Unit;
        Display.textContent=`${finalvalue} Degrees`;
        Display2.textContent=``;
    }
    //If the value you are converting to matches the value you are converting from,do this:
     //similar conversions
     //------------------------------------------------------------
     else if((Degrees.checked)&&(FromCelsius.checked)){
        Display.textContent=`${Userinput} Degrees`
    }

    else if((Fahrenheit.checked)&&(FromFahrenheit.checked)){
        Display.textContent=`${Userinput} Fahrenheits`
        Display2.textContent=``
    }
    else if((FromKelvin.checked)&&(Kelvin.checked)){
        Display.textContent=`${Userinput} Kelvins`
        Display2.textContent=``
    }
   //--------------------------------------------------------------------------

  //  Fahrenheit conversions
    else if((FromFahrenheit.checked)&&(Degrees.checked)){
        finalvalue=Number(Userinput)
        let FinalValue=ToDegrees(finalvalue)
        Display.textContent=`${FinalValue} Degrees`
    }
     else if((Fahrenheit.checked)&&(FromCelsius.checked)){
        finalvalue=Number(Userinput)
         let FinalValue=ToFahrenheit(finalvalue)
        Display.textContent=`${FinalValue} Fahrenheits`
      
    }
     else if((Fahrenheit.checked)&&(FromKelvin.checked)){
        finalvalue=Number(Userinput) - Unit
        let FinalValue=ToFahrenheit(finalvalue) 
        Display.textContent=`${FinalValue} Fahrenheits`
        Display2.textContent=``
    }
    //-------------------------------------------------------------------------

    //Kelvin conversions
    else if((Kelvin.checked)&&(FromCelsius.checked)){
        finalvalue= Number(Userinput) + Unit;
        Display.textContent =`${finalvalue} Kelvins`;
        Display2.textContent=``;
    }
    else if((FromFahrenheit.checked)&&(Kelvin.checked)){
        finalvalue=Number(Userinput)
        let FinalValue =ToDegrees(finalvalue) + 273
        Display.textContent=`${FinalValue} Kelvins`
        Display2.textContent =``
    }
   
   
    
    else{
        Display.textContent=`Please choose a unit you wish to convert to and from which you are converting from`;
    }
    }
    
}
Resetbtn.onclick =function(){
    Display.textContent =0;
}