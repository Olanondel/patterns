interface Car {
    open(k?: string): void
}

class Audi implements Car {
    open(): void {
        console.log('You opened the car')
    }
}

class SecureAudi {
    constructor(public car: Car) {}

    open(k: string): void {
        if (k === 'myname') {
            this.car.open()
        } else {
            console.log('Access is denied!')
        }
    }
}

const car1 = new Audi()
car1.open()

const car1withSecure = new SecureAudi(car1)
car1withSecure.open('123')
car1withSecure.open('myname')