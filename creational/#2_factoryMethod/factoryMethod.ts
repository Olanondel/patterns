interface Monster {
    heals: number
    attack: () => void
}

class Dragon implements Monster {
    heals: number

    constructor() {
        this.heals = 60
    }

    attack(): void {
        this.heals -= 10
    }
}

class Snake implements Monster {
    heals: number

    constructor() {
        this.heals = 45
    }

    attack(): void {
        this.heals -= 8
    }
}

abstract class Player {
    abstract makeMonster(): Monster

    fightMonster(): Monster {
        const monster = this.makeMonster()
        monster.attack()
        return monster
    }
}

class Warrior extends Player {
    makeMonster(): Monster {
        return new Dragon()
    }
}

class Knight extends Player {
    makeMonster(): Monster {
        return new Snake()
    }
}

const warrior = new Warrior()
console.log(warrior.fightMonster());

const knight = new Knight()
console.log(knight.fightMonster());