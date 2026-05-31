


/*ROLL.onclick =function(){

    let matches=0;
    let luckynumscopy=[...luckynums];
    for(let i=0; i < userNumbers.length; i++){
    let index=luckynumscopy.indexOf(userNumbers[i]);

    if(index !== -1){
        matches++;
        luckynumscopy.splice(index,1);//remove matched numbers so they aren't counted twice
        }
    }

    if(matches ==3){
        Display.textContent=`Congratulations you got three numbers correct`;
    }
    else if(matches ==4){
        Display.textContent=`Congratulations, you got four numbers correct`;
    }
    else if(matches ==5){
        Display.textContent= `Congratulations, you have won the jackpot`;
    }
    else if(matches ==0){
        Display.textContent=`Sorry, you didn't match the minimum numbers to qualify for a price`;
    }
    else{
        Display.textContent=`Sorry no matching numbers, you don't qualify for any prize`;
    }
}

ROLL.onclick = function () {
    console.log("Roll clicked");
    let matches = 0; // reset every click
    let luckynumscopy = [...luckynums];

    for (let i = 0; i < userNumbers.length; i++) {
        let index = luckynumscopy.indexOf(userNumbers[i]);

        if (index !== -1) {
            matches++;
            luckynumscopy.splice(index, 1);
        }
    }
console.log("Matches:",matches);
    // NOW conditions will work
    if (matches == 5) {
        Display.textContent = "🎉 Jackpot!";
    } 
    else if (matches == 4) {
        Display.textContent = "🔥 4 correct numbers!";
    } 
    else if (matches == 3) {
        Display.textContent = "👍 3 correct numbers!";
    } 
    else if (matches == 0) {
        Display.textContent = "❌ No matches at all";
    } 
    else {
        Display.textContent = "❌ Not enough matches";
    }
};*/


let submit = document.getElementById("Submitbtn");
let ROLL = document.getElementById("ROll"); // FIXED
let Display = document.getElementById("display");
let display2 = document.getElementById("display2");

let luckynums=[12,3,2,0,5];
let userNumbers=[];

submit.onclick = function () {
    userNumbers = [
        Number(document.getElementById("num1").value),
        Number(document.getElementById("num2").value),
        Number(document.getElementById("num3").value),
        Number(document.getElementById("num4").value),
        Number(document.getElementById("num5").value)
    ];

    display2.textContent = "Submitted successfully";
    Display.textContent=``;
};

ROLL.onclick = function () {
    display2.textContent=``;
    console.log("ROLL clicked"); // DEBUG

    let matches = 0;
    let luckynumscopy = [...luckynums];

    for (let i = 0; i < userNumbers.length; i++) {
        let index = luckynumscopy.indexOf(userNumbers[i]);

        if (index !== -1) {
            matches++;
            luckynumscopy.splice(index, 1);
        }
    }
    
    console.log("Matches:", matches); // DEBUG

    if (matches == 5) {
        Display.textContent = "🎉 Jackpot!";
    } 
    else if (matches == 4) {
        Display.textContent = "🔥 4 correct numbers! won 100K!";
    } 
    else if (matches == 3) {
        Display.textContent = "👍 3 correct numbers! won 50k!";
    } 
    else {
        Display.textContent = "Enda Uza Uji!!";
    }
};