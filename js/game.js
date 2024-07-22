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
}
