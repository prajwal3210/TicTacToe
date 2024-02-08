let boxes =document.querySelectorAll(".box")
let turn0= true; //playerO and playerX
let newBtn=document.querySelector(".newBtn")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector(".msg")
let reset=document.querySelector(".reset")

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];




const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach(box=>{
    box.addEventListener("click",()=>{
        console.log("Clicked!")
        if(turn0===true){
            box.innerHTML="O";
            turn0=false;
    }
    else{
        box.innerHTML="X";
        
        
        turn0=true;
    }
    box.disabled=true;

    checkWinner();
    })
})

disableBox=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}


showWinner=(winner)=>{
    msg.innerText=`Winner is ${winner} 🥳`;
    msgContainer.classList.remove("hide");
}

const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerHTML="";

    }
}


checkWinner=()=>{
    for(pattern of winPatterns){
       
       let pos1= boxes[pattern[0]].innerText;
       let pos2= boxes[pattern[1]].innerText;
       let pos3= boxes[pattern[2]].innerText;
       
     
      if(pos1 !="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            console.log("winner is",pos1);
            showWinner(pos1);
            disableBox();
        }
      } 
    }
    
}
newBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame)