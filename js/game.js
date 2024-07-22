class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.instructionsPage = document.getElementById("instructions-page");
  }
  startIntro() {
    this.startScreen.style.display = "none";
    this.instructionsPage.style.display = "block";
  }
}
