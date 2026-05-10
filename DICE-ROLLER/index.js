function DiceRoll(){
    const NumOfDice=document.getElementById("NumOfDice").value;
    const DiceResult=document.getElementById("DiceResult");
    const DiceImages=document.getElementById("DiceImages");
    const Images =[];
    const RandomValues=[];

    for(let i=0; i< NumOfDice; i++){
        let Value=Math.floor(Math.random()*6)+1;
         RandomValues.push(Value);
         Images.push(`<img src="Images/${Value}.png">`);
    }
    DiceResult.textContent=`Dice :${RandomValues.join(", ")}`;
    DiceImages.innerHTML= Images.join(' ');
    
}