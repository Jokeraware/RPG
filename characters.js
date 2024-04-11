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
    this.atkSpeManaCost = 20;
  }

  atkSpe(victim) {
    if (this.mana >= 20) {
      victim.takeDamage(5);
      this.mana -= 20;
    }
    else {
      console.log('Not enough mana');
    }
  }
}

class Paladin extends Character {
  constructor (name, hp = 16, mana = 160, dmg = 3) {
    super(name, hp, mana, dmg);
    this.atkSpeManaCost = 40;
  }

  atkSpe(victim) {
    if (this.mana >= 40) {
      victim.takeDamage(4)
      this.mana -= 40;
      this.hp += 5;
    }
    else {
      console.log('Not enough mana');
    }
  }
}

class Monk extends Character {
  constructor (name, hp = 8, mana = 200, dmg = 2) {
    super(name, hp, mana, dmg);
    this.atkSpeManaCost = 25;
  }

  atkSpe() {
    if (this.mana >= 25) {
      this.mana -= 25;
      this.hp += 8;
    }
    else {
      console.log('Not enough mana');
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
    this.atkSpeManaCost = 20;
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
      console.log('Not enough mana');
    }
  }
}

const Grace = new Fighter("Grace");
const Ulder = new Paladin("Ulder");
const Moana = new Monk("Moana");
const Draven = new Berserker("Draven");
const Carl = new Assassin("Carl");