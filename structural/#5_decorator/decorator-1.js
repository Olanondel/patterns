class Car {
    constructor(model, price) {
        this.model = model
        this.price = price
    }
}

class WithAutoPilot {
    constructor(car) {
        this.car = car
    }

    add() {
        this.car.autopilot = true
        this.car.price += 1300
        return this.car
    }
}

const car = new Car('Lada', 6000)
const carWithAutoPilot = new WithAutoPilot(car)

console.log(carWithAutoPilot.add());