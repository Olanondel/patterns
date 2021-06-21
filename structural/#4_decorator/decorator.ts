interface Warrior {
    attack(): string
}

class Orc implements Warrior {
    attack(): string {
        return 'You attack castle'
    }
}

class OrcWithHelloMethod implements Warrior {
    warrior: Warrior

    constructor(warrior: Warrior) {
        this.warrior = warrior
    }

    attack(): string {
        return this.warrior.attack()
    }

    hello(): string {
        return 'Hello, i am Orc Warrior!'
    }
}

const orc = new Orc()
console.log(orc.attack());

const orcWithHello = new OrcWithHelloMethod(orc)
console.log(orcWithHello.attack());
console.log(orcWithHello.hello());