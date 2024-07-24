class Defence {
  constructor(defence, attack, gameInstance, livesAndTimes) {
    this.defence = defence;
    this.attack = attack;
    this.gameInstance = gameInstance;
    this.livesAndTimes = livesAndTimes;
  }
  checkDefence(submittedDefence) {
    if (this.defence === submittedDefence) {
      //this.gameInstance.moveToNextAttack();
      console.log("Correct defence");
    } else {
      console.log("Incorrect defence");
      this.livesAndTimes.decrementLives();
      /*if (this.gameInstance.lives > 0) {
        this.gameInstance.moveToNextAttack();
      }*/
    }
    //this.gameInstance.moveToNextAttack();
    //running twice in each attack because run when we have an attack and again on check defence, so goes 1+2, then 3+4, game end
  }
}
