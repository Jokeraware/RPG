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
    if (this === this.player && victim.state === 'Loser') {
      this.mana += 20;
    }
  }
}