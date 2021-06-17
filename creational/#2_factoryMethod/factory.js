class Bmw {
    constructor(model, maxSpeed) {
        this.model = model
        this.maxSpeed = maxSpeed
    }
}

class BmwFactory {
    create(type) {
        switch (type) {
            case 'x5':
                return new Bmw('x5', 280)
            case 'x6':
                return new Bmw('x6', 320)
        }
    }
}

const factory = new BmwFactory()

console.table([
    factory.create('x5'),
    factory.create('x6')
])