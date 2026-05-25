
let rock=document.getElementById("Rock");
let paper=document.getElementById("Paper");
let scissors =document.getElementById("Scissors");

let image=document.getElementById("image");
let myScore=document.getElementById("myscore");
let computerScore =document.getElementById("computerscore");

  

function generateImage(){
     let index =Number(Math.floor(Math.random()*3));
    image.innerHTML=`<img src="ASSETS/${index}.png"width="100px"height="100px">`;
    updateScores(index);

}
let isRockClicked =false;
let isPaperClicked =false;
let isScissorsClicked =false;

rock.addEventListener('click',()=>{
    isRockClicked =true;
    isPaperClicked=false;
    isScissorsClicked =false;

    generateImage();
    
})
paper.addEventListener('click',()=>{
    isPaperClicked =true;
    isRockClicked =false;
    isScissorsClicked =false;

    generateImage();
})
scissors.addEventListener('click',()=>{
    isScissorsClicked =true;
    isRockClicked=false;
    isPaperClicked =false;
    
    generateImage();
})

  let mycurrentscore=0;
  let currentcomputerscore=0;


function updateScores(reference){
    if(isRockClicked){
    
        if( reference == 1){

        }
        else if(reference ==2){
            mycurrentscore ++;
            currentcomputerscore --;

        }
        else if(reference == 0){
            mycurrentscore --;
            currentcomputerscore ++;
        }
    }
    else if(isPaperClicked){

        if(reference == 0){

        }
        else if(reference == 2){
            mycurrentscore --;
            currentcomputerscore ++;
        }
        else if(reference == 1){
            mycurrentscore ++;
            currentcomputerscore --;
        }
    }
    else if(isScissorsClicked){
        
        if(reference ==2){

        }
        else if(reference == 0){
            mycurrentscore ++;
            currentcomputerscore --;
        }
        else if(reference ==1){
            mycurrentscore --;
            currentcomputerscore ++;
        }
    }
    myScore.innerHTML =`${mycurrentscore}`;
    computerScore.innerHTML =`${currentcomputerscore}`;
}