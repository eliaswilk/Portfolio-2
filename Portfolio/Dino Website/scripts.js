const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const jumpSound = document.getElementById("jumpSound");

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
    jumpSound.currentTime = 0;
    jumpSound.play();

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert("Game Over!");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});
