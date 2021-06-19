interface IMonster {
    heals: number
    attack: () => void
}

class Dragon implements IMonster {
    heals: number

    constructor() {
        this.heals = 60
    }

    attack() {
        this.heals -= 10
    }
}

class Snake implements IMonster {
    heals: number

    constructor() {
        this.heals = 45
    }

    attack() {
        this.heals -= 8
    }
}

abstract class Player {
    abstract makeMonster(): IMonster

    fightMonster() {
        const monster = this.makeMonster()
        monster.attack()
        return monster
    }
}

class Warrior extends Player {
    makeMonster() {
        return new Dragon()
    }
}

class Knight extends Player {
    makeMonster() {
        return new Snake()
    }
}

const warrior = new Warrior()
console.log(warrior.fightMonster());

const knight = new Knight()
console.log(knight.fightMonster());