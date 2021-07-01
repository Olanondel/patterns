abstract class Orc {
    next: Orc
    name: string
    attack: number

    kill(target: Monster): void {
        if (target.hitPoints < this.attack) {
            console.log(`${this.name} убил монстра!`);
        } else if (this.next) {
            this.next.kill(target)
        } else {
            console.log(`You has not enough power`);
        }
    }

    setNext(next: Orc) {
        this.next = next
    }
}

class JuniorOrc extends Orc {
    name: string = 'Junior Orc'
    attack: number = 80
}

class MiddleOrc extends Orc {
    name: string = 'Middle Orc'
    attack: number = 100
}

class SeniorOrc extends Orc {
    name: string = 'Senior Orc'
    attack: number = 120
}

class Monster {
    constructor(public hitPoints: number) {}
}

const jun = new JuniorOrc()
const mid = new MiddleOrc()
const sen = new SeniorOrc()

const monster = new Monster(119)
const monster2 = new Monster(60)
const monster1 = new Monster(95)

jun.setNext(mid)
mid.setNext(sen)

jun.kill(monster)
jun.kill(monster1)
jun.kill(monster2)