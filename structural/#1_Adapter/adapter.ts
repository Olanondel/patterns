interface Warrior {
    hitPoints: number
    fight(): void
}

class HumanWarrior implements Warrior {
    hitPoints: number = 80

    fight(): void {
        this.hitPoints -= 15
        console.log(`Human you are damaged: [ hitPoints: ${this.hitPoints} ]`)
    }
}

class OrcWarrior implements Warrior {
    hitPoints: number = 100

    fight(): void {
        this.hitPoints -= 12
        console.log(`Orc you are damaged: [ hitPoints: ${this.hitPoints} ]`)
    }
}

class Dwarf {
    lifePoints: number = 110

    attack(): void {
        this.lifePoints -= 10
    }
}

class WarriorAdapter implements Warrior {
    fighter: Dwarf
    hitPoints: number

    constructor(fighter: Dwarf) {
        this.fighter = fighter
        this.hitPoints = fighter.lifePoints
    }

    fight() {
        this.hitPoints -= 10
        this.fighter.attack()
        console.log(`Dwarf you are damaged: [ hitPoints: ${this.hitPoints} ]`)
    }
}

const human = new HumanWarrior()
const orc = new OrcWarrior()
const dwarf = new Dwarf()

human.fight()
orc.fight()

const adapter = new WarriorAdapter(dwarf)

adapter.fight()