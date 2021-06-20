interface Weapon {
    attack: () => string
}

interface Armor {
    defend: () => string
    fight: (collaboration: Weapon) => string
}

class Sword implements Weapon {
    attack(): string {
        return 'attack with SWORD'
    }
}

class Axe implements Weapon {
    attack(): string {
        return 'attack with AXE'
    }
}

class MageSword implements Weapon {
    attack(): string {
        return 'attack with MAGESWORD'
    }
}

abstract class AbstractArmor implements Armor {
    abstract defend()
    fight(collaboration) {
        const result = collaboration.attack()
        return `${this.defend()} with collaboration ${result}`
    }
}

class BodyArmor extends AbstractArmor {
    defend(): string {
        return 'Defend with BODYARMOR'
    }
}

class OrcArmor extends AbstractArmor {
    defend(): string {
        return 'Defend with ORCARMOR'
    }
}

class Cloak extends AbstractArmor {
    defend(): string {
        return 'Defend with CLOAK'
    }
}

// FACTORIES!!!!!!!!!!

interface Factory {
    createWeapon: () => Weapon
    createArmor: () => Armor
}

class WarriorFactory implements Factory {
    createWeapon(): Weapon {
        return new Sword()
    }

    createArmor(): Armor {
        return new BodyArmor()
    }
}

class OrcFactory implements Factory {
    createWeapon(): Weapon {
        return new Axe()
    }

    createArmor(): Armor {
        return new OrcArmor()
    }
}

class MageFactory implements Factory {
    createWeapon(): Weapon {
        return new MageSword()
    }

    createArmor(): Armor {
        return new Cloak()
    }
}

// Client Code --------------------------------------
function clientCode(factory: Factory): void {
    const sword = factory.createWeapon()
    const armor = factory.createArmor()

    console.log(sword.attack())
    console.log(armor.fight(sword))
}

console.log('Client: Warrior -------------------')
console.log(clientCode(new WarriorFactory()))

console.log('Client: Orc -------------------')
console.log(clientCode(new OrcFactory()))

console.log('Client: Mage -------------------')
console.log(clientCode(new MageFactory()))