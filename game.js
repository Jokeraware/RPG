class Game {
  constructor(playerChar) {
    this.turnLeft = 10;
    this.characters = [npc1, npc2, npc3, npc4, npc5, npc6];
    this.player = playerChar;
  }

  startGame() {
    console.log('Let the game begin!');
    this.startTurn();
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
    console.log(`It's turn ${11 - this.turnLeft}`);
    
    if (this.turnLeft === 0) {
      this.endGame();
      return; // Stop the game 
    } else {
      // Random attack by NPCs
      this.randomCharacters().forEach((character) => {
        if (character.state === 'Playing') {
          console.log(`It's time for ${character.name} to play.`);
          let enemies = this.characters.filter(enemy => enemy.state === 'Playing' && enemy !== character);
          // Ajouter le joueur à la liste des ennemis potentiels
          if (this.player.state === 'Playing') {
            enemies.push(this.player);
          }
          const randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];
          character.dealDamage(randomEnemy);
          console.log(`${character.name} is attacking ${randomEnemy.name}. He deals him ${character.dmg} damages. ${randomEnemy.name} got ${randomEnemy.hp} lifepoints left.`);
          this.watchStats();
        }
      });
  
      // Player's turn
      if (this.player.state === 'Playing'){
        console.log("It's your turn to play");
      let action = prompt("1. Simple Attack | 2. Special Attack");
      let target = prompt("Enter the target's name");
      let victim = this.characters.find(character => character.name === target && character.state === 'Playing');
      if (victim) {
        if (action === '1') {
          this.player.dealDamage(victim);
          console.log(`${this.player.name} is attacking ${victim.name}. He deals him ${this.player.dmg} damages. ${victim.name} got ${victim.hp} lifepoints left.`);
        } else if (action === '2' && this.player.mana >= this.player.atkSpeManaCost) {
          this.player.atkSpe(victim);
          console.log(`${this.player.name} is attacking ${victim.name}. He deals him ${this.player.dmg} damages. ${victim.name} got ${victim.hp} lifepoints left.`);
        } else if (action === '2' && this.player.mana < this.player.atkSpeManaCost) {
          console.log("Not enough mana");
        } else {
          console.log("Invalid target or target is already dead, try next turn");
        }
      } else {
        console.log("You failed, try next turn");
      }
  
      this.watchStats();
      this.skipTurn();
      if (this.checkWinner()){
        this.endGame();
        return;
      }
      this.startTurn();
      }
      else if (this.player.state === 'Loser') {
        console.log("You have been defeated by an NPC!");
        this.endGame();
      }
    }
  }
  
  
  
  
  watchStats() {
    console.log("Player Stats:");
    console.log(`${this.player.name} : PV = ${this.player.hp}, Mana = ${this.player.mana}, Damage = ${this.player.dmg}`);

    console.log("Other Characters:");
    this.characters.forEach((character) => {
      if (character !== this.player) {
        if (character.state === 'Playing') {
          console.log(`${character.name} : PV = ${character.hp}, Mana = ${character.mana}, Damage = ${character.dmg}`);
        } else {
          console.log(`${character.name} = Dead`);
        }
      }
    });
  }

  randomCharacters() {
    return this.characters.sort(() => Math.random() - 0.5);
  }

  checkWinner() {
    let aliveCharacters = this.characters.filter(character => character.state === 'Playing');
    // Verify if player is alive
    if (this.player.state === 'Playing') {
      aliveCharacters.push(this.player); // Add player to the alive characters list
    }
    if (aliveCharacters.length === 1) {
      let winner = aliveCharacters[0];
      console.log(`The winner is ${winner.name}`);
      winner.state = 'Winner';
    }
  }
  
}

const npc1 = new Fighter("Grace");
const npc2 = new Paladin("Ulder");
const npc3 = new Monk("Moana");
const npc4 = new Berserker("Draven");
const npc5 = new Assassin("Carl");
const npc6 = new Wizard("Harry");