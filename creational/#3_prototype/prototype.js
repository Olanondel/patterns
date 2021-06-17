class Car {
    constructor(model, color, maxSpeed) {
        this.model = model
        this.color = color
        this.maxSpeed = maxSpeed
    }

    clone() {
        return new Car(this.model, this.color, this.maxSpeed)
    }
}

const lada = new Car('Lada', 'white', 180)
console.log('Lada', lada);
const opel = lada.clone()
opel.model = 'opel'
opel.maxSpeed = 220

console.log('Opel', opel);