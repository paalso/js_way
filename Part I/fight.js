class Character {
  constructor(name, health, strength, xp, gold) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = xp;
    this.gold = gold;
    this.xp_attack_factor = 0.1;
  }

  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength}` +
            ` as strength, ${this.xp} XP points and ${this.gold} gold`;
  }

  attack(target) {
    if (this.health <= 0)
      return;
    const damage = Math.round(this.strength + this.xp * this.xp_attack_factor);
    target.update(-damage);
    this.xp += 1;
    console.log(`${this.name} attaks ${target.name} and causes ${this.strength} damage points`);
    if (target.health === 0) {
      console.log(`${target.name} was killed by ${this.name}`);
      this.gold += target.gold;
      target.gold = 0;
    }
    else
      console.log(`${target.name} has ${target.health} health points left`);
  }

  update(value) {
    this.health = Math.max(0, this.health + value);
  }

  print() {
    console.log(this.describe());
  }
}


function choice(arr, item_to_exclude) {
  if (arr.length === 0) return undefined;

  if (item_to_exclude === undefined) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const filtered = arr.filter(item => item !== item_to_exclude);

  if (filtered.length === 0) return undefined;

  return filtered[Math.floor(Math.random() * filtered.length)];
}


function randint(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function removeItem(arr, item) {
  const index = arr.indexOf(item);
  if (index > -1)
    arr.splice(index, 1);
}

function shootout(shooters) {
  while (shooters.length > 1) {
    const shooter = choice(shooters);
    const target = choice(shooters, shooter);
    shooter.attack(target);
    if (target.health === 0)
      removeItem(shooters, target);

  }

    if (shooters.length == 0)
      return;
    
    if (shooters.length == 1) {
      return shooters[0];
    }
}


// return 'Everybody is dead, no winners!';


const tuco = new Character('Tuco', 100, 40, 25, 10);
const blondy = new Character('Blondy', 120, 35, 25, 10);
const sentenza = new Character('Sentenza', 75, 30, 20, 50);
const fighters = [tuco, blondy, sentenza];
console.log("Welcome to the adventure! Here are our heroes:");
tuco.print();
blondy.print();
sentenza.print();
console.log();
console.log('Let the battle begins!');
const winner = shootout(fighters);
console.log(`The winner is ${winner.name}`);
winner.print();
