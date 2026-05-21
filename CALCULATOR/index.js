let display =document.getElementById("display");

function append(input){
    display.value +=input;
}
function clearMe(){
    display.value ="";
}
function calculate(){
    try{
     display.value =eval(display.value);
    }
    catch(error){
        display.value =`${error}`;
    }

}
function Erase(){
   display.value = display.value.slice(0,-1);//deletes the values one at a time instead of clearing the entire screen at once
}