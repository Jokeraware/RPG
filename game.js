class Game {
  constructor() {
    this.turnLeft = 10;
    this.characters = [Grace, Ulder, Moana, Draven, Carl];
  }

  skipTurn() {
    if (this.turnLeft > 0) {
      this.turnLeft--;
    }
    else {
      this.endGame();
    }
  }

  endGame() {
    console.log('The game is over!');
  }

  startTurn() {
    console.log(`It's turn ${11 - this.turnLeft}`)
    if (this.turnLeft === 0) {
      this.endGame();
    }
    let choice = prompt("1: Watch stats, 2: Attack");
      if (choice === '1') {
        this.watchStats();
        this.startTurn();
      }
      else if (choice === '2') {
        this.randomCharacters().forEach((character) => {
          if (character.state === 'Playing') {
            console.log(`It's time for ${character.name} to play.`);
            let action = prompt("1: Simple Attack, 2: Special Attack");
            let target = prompt("Choose a target, enter name");
            let victim = this.characters.find(character => character.name === target);
            if (victim && victim.state === 'Playing') {
              if (action === '1') {
                character.dealDamage(victim);
                console.log(`${character.name} is attacking ${victim.name}. He deals him ${character.dmg} damages. ${victim.name} got ${victim.hp} lifepoints left.`);
              }
              else if (action === '2' && character.mana >= character.atkSpeManaCost) {
                character.atkSpe(victim);
                console.log(`${character.name} is attacking ${victim.name}. He deals him ${character.dmg} damages. ${victim.name} got ${victim.hp} lifepoints left.`);
              }
              else if (action === '2' && character.mana < character.atkSpeManaCost) {
                console.log('Not enough mana');
              }
            }
            else {
              console.log("Invalid target or target is already dead, try next time");
            }
          }
          else {
            console.log(`${character.name} is dead, he can't play`);
          }
        });
      this.skipTurn();
      if (this.checkWinner()) {
        return;
      }
      this.startTurn();
      }
      else {
        console.log("Invalid choice, try again");
      }
      
  }

  watchStats() {
    this.characters.forEach((character) => {
      if (character.state === 'Playing') {
        console.log(`${character.name} : PV = ${character.hp}, Mana = ${character.mana}, Damage = ${character.dmg}`);
      }
      else {
        console.log(`${character.name} = Dead`);
      }
    })
  }

  randomCharacters() {
    return this.characters.sort(() => Math.random() - 0.5);
  }

  checkWinner() {
    let aliveCharacters = this.characters.filter(character => character.state === 'Playing');
    if (aliveCharacters.length === 1) {
      let winner = aliveCharacters[0];
      console.log(`The winner is ${winner.name}`);
      winner.state = 'Winner';
      this.endGame();
    }
    return false;
  }

  startGame() {
    console.log('Let the game begin!');
    this.startTurn();
  }
}

const game = new Game();
game.startGame();