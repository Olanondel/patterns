class Car {
    constructor(model) {
        this.model = model
    }

    open() {
        console.log(`${this.model} opened`)
    }
}

class SeccurityCar {
    constructor(car) {
        this.car = car
    }

    open(pass) {
        if (pass === 'ilonmask') {
            this.car.open()
        } else {
            console.log('Access denied')
        }
    }
}

let car_1 = new Car('Audi')
car_1.open()

car_1 = new SeccurityCar(car_1)
car_1.open('ilonmask')