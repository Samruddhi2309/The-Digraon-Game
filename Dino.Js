score = 0;
cross = true;


audio = new Audio("music.mp3");
audiogo = new Audio("gameover(1).mp33");
setTimeout(() => {
  audio.play();
}, 1000);
document.onkeydown = function (e) {
  console.log("key code is :", e.keyCode);

  if (e.keyCode == 38) {
    dino = document.querySelector(".dino");
    dino.classlist.add("animateDino");
    setTimeout(() => {
      dino.classlist.remove("animateDino");
    }, 700);
  };
  if (e.keyCode == 39) {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left"));
    dino.style.left = dinoX + 112 + "px";
  };
  if(e.keyCode == 37){
    dino = document.querySelector(".dino");
    dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
    dino.style.left = (dinoX - 112) + "px";
  };
 
}

setInterval(() =>{
  dino = document.querySelector(".dino");
  gameover = document.querySelector(".gameOver");
  obstacle = document.querySelector(".Obstacle");


dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue("top"));

ox = parseInt(window.getComputedStyle(Obstacle,null).getPropertyValue("left"));
oy = parseInt(window.getComputedStyle(Obstacle,null).getPropertyValue("top"));


offsetX = Math.abs(dx - ox);
offsetY = Math.abs(dy - oy);

if(offsetX < 73 && offsetY < 52){
  gameOver.innerHTML = "Game Over - Reload to Play Again";
  Obstacle.classlist.remove("ObstacleAni")
  audiogo.play();
  setTimeout(() =>{
    audiogo.pause();
    audio.pause();
  }, 1000);
}
else if(offsetX < 145 && cross){
  score += 1;
  updateScore(score);
  cross = false;
  setTimeout (() =>{
    cross = true;
  },1000);
  setTimeout(() => {
    aniDur = parseFloat(window.getComputedStyle(Obstacle,null).getPropertyValue("animation-duration"));
    newDur = aniDur - 0.1;
    Obstacle.style.animationDuration = newDur + 's';
    console.log("New animation duration: ", newDur) 
  }, 500);

}

},10); 

function upadateScore(score) {
  scoreCount.innerHTML = "Score: " 
}