class Equipment {
    setPrice(price) {
        this.price = price
    }

    setName(name) {
        this.name = name
    }

    getPrice() {
        return this.price || 0
    }

    getName() {
        return this.name
    }

}

class Engine extends Equipment {
    constructor() {
        super();
        this.setName('Engine')
        this.setPrice(800)
    }
}

class Body extends Equipment {
    constructor() {
        super();
        this.setName('Body')
        this.setPrice(3000)
    }
}

class Tools extends Equipment {
    constructor() {
        super();
        this.setName('Tools')
        this.setPrice(4000)
    }
}

class Composite extends Equipment {
    constructor() {
        super();
        this.equipments = []
    }

    add(equipment) {
        this.equipments.push(equipment)
    }

    getPrice() {
        return this.equipments
            .map(e => e.getPrice())
            .reduce((a, b) => a + b)
    }
}

class Car extends Composite {
    constructor() {
        super();
        this.setName('Audi')
    }
}

const car_1 = new Car()

car_1.add(new Engine())
car_1.add(new Body())
car_1.add(new Tools())

console.log(`${car_1.getName()} price is ${car_1.getPrice()}`)