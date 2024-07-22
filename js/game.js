class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.instructionsPage = document.getElementById("instructions-page");
    this.gamePage = document.getElementById("game-container");
    this.deadEndPage = document.getElementById("dead-end");
  }
  startIntro() {
    this.startScreen.style.display = "none";
    this.instructionsPage.style.display = "block";
  }
  reallyStartGame() {
    this.instructionsPage.style.display = "none";
    this.gamePage.style.display = "block";
  }
  automaticEnd() {
    this.instructionsPage.style.display = "none";
    this.deadEndPage.style.display = "block";
  }
  createIntroSound() {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "loop");
    this.sound.style.display = none;
    document.body.appendChild(this.sound);
    this.play = function () {
      this.sound.play();
    };
    this.stop = function () {
      this.sound.pause;
    };
    return this.sound;
  }
}
