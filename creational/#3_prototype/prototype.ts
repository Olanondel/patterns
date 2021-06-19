class Car {
    model: string
    color: string
    maxSpeed: number

    constructor(model, color, maxSpeed) {
        this.model = model
        this.color = color
        this.maxSpeed = maxSpeed
    }

    clone() {
        return new Car(this.model, this.color, this.maxSpeed)
    }
}
