let gameseq =[];
let userseq =[];
let btns =["pink", "blue","orange", "purple"];
let start= false;
let level=0;
let h2= document.querySelector("h2")

//this part does as we click any key the game will start and it will only start once
document.addEventListener("keypress",function(){
  if(start==false){
    console.log("game is started")
    start=true;

    levelup();
  }
});

//function to flash means changing color to white in 1 sec
function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

// function to increase the level and chnge heading to level n
function levelup(){
  userseq=[];
  level++;
  h2.innerText= `Level ${level}`;
  
  //random btn choose

  //choose random index
  let ranidx= Math.floor(Math.random()*3);
  //with the random index choose random color
  let randcolor= btns[ranidx];
  //select the that random button
  let randbtn= document.querySelector(`.${randcolor}`)
  // console.log(ranidx);
  // console.log(randcolor);
  // console.log(randbtn);
  gameseq.push(randcolor);
  console.log(gameseq);
  gameFlash(randbtn);
}

function checkans(idx){
  // console.log("curr level :",level);

  if(userseq[idx]===gameseq[idx]) {
    if(userseq.length == gameseq.length)
      {
        setTimeout(levelup, 1000)
      }
    console.log("same value");
  }
  else{
    h2.innerHTML=`Game Over! Your score was <b>${level} </b> <br> Press any Key to start the game.`
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
    },150)
    reset();
  }
}

//when user press the button
function btnpress(){
  let btn=this;
  userFlash(btn);

  usercolor= btn.getAttribute("id");
  userseq.push(usercolor);

  checkans(userseq.length-1);
}

let allbtns= document.querySelectorAll(".btn");
for(btn of allbtns){
  btn.addEventListener("click",btnpress);
}
function reset(){
  start=false;
  gameseq=[];
  userseq=[];
  level=0;
}