class Character {
  constructor (name, hp, mana, dmg) {
    this.name = name;
    this.hp = hp;
    this.mana = mana;
    this.dmg = dmg;
    this.state = 'Playing';
  }

  takeDamage(dmg) {
    this.hp -= dmg
    if (this.hp <= 0) {
      this.hp = 0
      this.state = 'Loser'
    }
  }

  dealDamage(victim) {
    victim.takeDamage(this.dmg);
    if (victim.state === 'Loser') {
      this.mana += 20;
    }
  }
}

class Fighter extends Character {
  constructor (name, hp = 12, mana = 40, dmg = 4) {
    super(name, hp, mana, dmg);
  }

  atkSpe(victim) {
    if (this.mana >= 20) {
      victim.takeDamage(5);
      this.mana -= 20;
    }
    else {
      console.log('Pas assez de mana');
    }
  }
}

class Paladin extends Character {
  constructor (name, hp = 16, mana = 160, dmg = 3) {
    super(name, hp, mana, dmg);
  }

  atkSpe(victim) {
    if (this.mana >= 40) {
      victim.takeDamage(4)
      this.mana -= 40;
      this.hp += 5;
    }
    else {
      console.log('Pas assez de mana');
    }
  }
}

class Monk extends Character {
  constructor (name, hp = 8, mana = 200, dmg = 2) {
    super(name, hp, mana, dmg);
  }

  atkSpe() {
    if (this.mana >= 25) {
      this.mana -= 25;
      this.hp += 8;
    }
    else {
      console.log('Pas assez de mana');
    }
  }
}

class Berserker extends Character {
  constructor (name, hp = 8, mana = 0, dmg = 4) {
    super(name, hp, mana, dmg);
  }

  atkSpe() {
    this.hp--;
    this.dmg++;
  }
}

class Assassin extends Character {
  constructor (name, hp = 6, mana = 20, dmg = 6) {
    super(name, hp, mana, dmg);
  }

  atkSpe(victim) {
    if (this.mana >= 20) {
      victim.takeDamage(7);
      this.mana -= 20;
      if (victim.state !== 'Loser') {
        this.takeDamage(7);
      }
    }
    else {
      console.log('Pas assez de mana');
    }
  }
}

// Start 
class Game {
  constructor() {
    this.turnLeft = 10;
    this.characters = [Grace, Ulder, Moana, Draven, Carl];
  }

  skipTurn() {
    if (this.turnLeft > 0) {
      this.turnLeft--;
    }
    else if (this.turnLeft === 0) {
      this.endGame();
    }
  }

  endGame() {
    console.log('The game is over!');
  }

  startTurn() {
    console.log(`It's turn ${11 - this.turnLeft}`)
    let choice = prompt("1: Watch stats, 2: Attack");
      if (choice === '1') {
        this.watchStats();
        this.startTurn();
      }
      else if (choice === '2') {
        this.randomCharacters().forEach((character) => {
          if (character.state === 'Playing') {
            console.log(`It's time for ${character.name} to play.`);
            let action = prompt("1: Simple Attack, 2:Special Attack");
            let target = prompt("Choose a target, enter name");
            let victim = this.characters.find(character => character.name === target);
            if (victim && victim.state === 'Playing') {
              if (action === '1') {
                character.dealDamage(victim);
                console.log(`${character.name} is attacking ${victim.name}. He deals him ${character.dmg} damages. ${victim.name} got ${victim.hp} lifepoints left.`);
              }
              else if (action === '2') {
                character.atkSpe(victim);
                console.log(`${character.name} is attacking ${victim.name}. He deals him ${character.dmg} damages. ${victim.name} got ${victim.hp} lifepoints left.`);
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

  startGame() {
    console.log('Let the game begin!');
    this.startTurn();
  }
}

const Grace = new Fighter("Grace");
const Ulder = new Paladin("Ulder");
const Moana = new Monk("Moana");
const Draven = new Berserker("Draven");
const Carl = new Assassin("Carl");

const game = new Game();
game.startGame();