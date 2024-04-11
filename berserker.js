class Berserker extends Character {
  constructor (name, hp = 8, mana = 0, dmg = 4) {
    super(name, hp, mana, dmg);
  }

  atkSpe() {
    this.hp--;
    this.dmg++;
  }
}