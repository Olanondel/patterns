class Car {
    constructor() {
        this.option1 = false
        this.option2 = false
        this.option3 = false
        this.option4 = false
    }
}

class CarBuilder {
    constructor() {
        this.car = new Car()
    }

    addOption1() {
        this.car.option1 = true
        return this
    }

    addOption2() {
        this.car.option2 = true
        return this
    }

    addOption3() {
        this.car.option3 = true
        return this
    }

    addOption4() {
        this.car.option4 = true
        return this
    }

    build() {
        return this.car
    }
}

const newCar = new CarBuilder().addOption1().addOption3().build()
console.log(newCar);