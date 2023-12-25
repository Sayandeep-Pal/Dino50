let welcomePage = document.querySelector(".welcomePage");
let playBtn = document.querySelector(".play-btn");
let choosePage = document.querySelector(".choosePage");
let easyBtn = document.querySelector(".easy-btn");
let mediumBtn = document.querySelector(".medium-btn");
let hardBtn = document.querySelector(".hard-btn");
let gamePage = document.querySelector(".gamePage");
let dino = document.querySelector(".dino");
let cactus = document.querySelector(".cactus");
let gameOver = document.querySelector(".gameOver");
let score = document.querySelector(".score");
let startBtn = document.querySelector(".start-btn");
let restartBtn = document.querySelector(".restart-btn");
let jumpBtn = document.querySelector(".jump-btn");
let backBtn = document.querySelector(".back-btn");

let scoreCount1 = 0;
let scoreCount2 = 0;
let scoreCount3 = 0;

//welcome page function
function play(){
  welcomePage.classList.add("hide");
  choosePage.classList.remove("hide");
}
//go back
// function goBack (){
//   gamePage.classList.add("hide");
//   choosePage.classList.remove("hide");
//   gameOver.innerText="";
//   cactus.classList.remove("easyMotion");
//   cactus.classList.remove("mediumMotion");
//   cactus.classList.remove("hardMotion");
// }

//difficulty choose  page function
let easyGame = () => {
  let scoreCount1 = 0;
  function jump() {
    if (dino.classList != "jump") {
      dino.classList.add("jump");
        
      setTimeout(function () {
        dino.classList.remove("jump");
      }, 300);
    }
    scoreCount1++;
    score.innerText=`score: ${scoreCount1}`;
  }

let isAlive = setInterval( function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"), 10);
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"), 10); 

    if( cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 130 ){
        gameOver.innerHTML=`<h1>GAME OVER!</h1><br><h3>Your Score: ${scoreCount1}</h3>`;
        restartBtn.classList.remove("hide");
        jumpBtn.classList.add("hide");
        cactus.classList.remove("easyMotion");
        score.classList.add("hide");
    }
}, 10);

let start =() => {
    cactus.classList.add("easyMotion");  
    startBtn.classList.add("hide");
    jumpBtn.classList.remove("hide");
    cactus.classList.remove("mediumMotion");
    cactus.classList.remove("hardMotion");
    score.classList.remove("hide");
    score.innerText="score: ";
};

let restart = () => {
    gameOver.innerText="";
    restartBtn.classList.add("hide");
    score.classList.remove("hide");
    scoreCount1 = 0;
    score.innerText="score: ";
    start();
};

function goBack (){
  gamePage.classList.add("hide");
  choosePage.classList.remove("hide");
  gameOver.innerText="";
  restartBtn.classList.add("hide");
  startBtn.classList.remove("hide");
}

startBtn.addEventListener("click", start);
document.addEventListener("keypress", jump);
jumpBtn.addEventListener("click", jump);
restartBtn.addEventListener("click", restart);
backBtn.addEventListener("click", goBack);
};

let mediumGame = () => {
  let scoreCount2 = 0;
  function jump() {
    if (dino.classList != "jump") {
      dino.classList.add("jump");
        
      setTimeout(function () {
        dino.classList.remove("jump");
      }, 300);
    }
    scoreCount2++;
    score.innerText=`score: ${scoreCount2}`;
  }

let isAlive = setInterval( function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"), 10);
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"), 10); 

    if( cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 130 ){
        gameOver.innerHTML=`<h1>GAME OVER!</h1><br><h3>Your Score: ${scoreCount2}</h3>`;
        restartBtn.classList.remove("hide");
        jumpBtn.classList.add("hide");
        cactus.classList.remove("mediumMotion");
        score.classList.add("hide");
    }
}, 10);

let start =() => {
    cactus.classList.add("mediumMotion");  
    startBtn.classList.add("hide");
    jumpBtn.classList.remove("hide");
    cactus.classList.remove("hardMotion");
    cactus.classList.remove("easyMotion");
    score.classList.remove("hide");
    score.innerText="score: ";
};

let restart = () => {
    gameOver.innerText="";
    restartBtn.classList.add("hide");
    score.classList.remove("hide");
    scoreCount2 = 0;
    score.innerText="score: ";
    start();
};
function goBack (){
  gamePage.classList.add("hide");
  choosePage.classList.remove("hide");
  gameOver.innerText="";
  restartBtn.classList.add("hide");
  startBtn.classList.remove("hide");
}

startBtn.addEventListener("click", start);
document.addEventListener("keypress", jump);
jumpBtn.addEventListener("click", jump);
restartBtn.addEventListener("click", restart);
backBtn.addEventListener("click", goBack);
};

let hardGame = () =>{
  let scoreCount3 = 0;
  function jump() {
    if (dino.classList != "jump") {
      dino.classList.add("jump");
        
      setTimeout(function () {
        dino.classList.remove("jump");
      }, 300);
    }
    scoreCount3++;
    score.innerText=`score: ${scoreCount3}`;
  }

let isAlive = setInterval( function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"), 10);
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"), 10); 

    if( cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 130 ){
        gameOver.innerHTML=`<h1>GAME OVER!</h1><br><h3>Your Score: ${scoreCount3}</h3>`;
        restartBtn.classList.remove("hide");
        jumpBtn.classList.add("hide");
        cactus.classList.remove("hardMotion");
        score.classList.add("hide");
    }
}, 10);

let start =() => {
    cactus.classList.add("hardMotion");  
    startBtn.classList.add("hide");
    jumpBtn.classList.remove("hide");
    cactus.classList.remove("mediumMotion");
    cactus.classList.remove("easyMotion");
    score.classList.remove("hide");
    score.innerText="score: ";
};

let restart = () => {
    gameOver.innerText="";
    restartBtn.classList.add("hide");
    score.classList.remove("hide");
    scoreCount3 = 0;
    score.innerText="score: ";
    start();
};
function goBack (){
  gamePage.classList.add("hide");
  choosePage.classList.remove("hide");
  gameOver.innerText="";
  restartBtn.classList.add("hide");
  startBtn.classList.remove("hide");
}

startBtn.addEventListener("click", start);
document.addEventListener("keypress", jump);
jumpBtn.addEventListener("click", jump);
restartBtn.addEventListener("click", restart);
backBtn.addEventListener("click", goBack);
};



function easyGamePlay (){
  choosePage.classList.add("hide");
  gamePage.classList.remove("hide");
  score.classList.remove("hide");
  score.innerText="score: ";
  easyGame();
}
function mediumGamePlay (){
  choosePage.classList.add("hide");
  gamePage.classList.remove("hide");
  score.classList.remove("hide");
  score.innerText="score: ";
  mediumGame();
}
function hardGamePlay (){
  choosePage.classList.add("hide");
  gamePage.classList.remove("hide");
  score.classList.remove("hide");
  score.innerText="score: ";
  hardGame();
}


playBtn.addEventListener("click", play);
easyBtn.addEventListener("click", easyGamePlay);
mediumBtn.addEventListener("click", mediumGamePlay);
hardBtn.addEventListener("click", hardGamePlay);


