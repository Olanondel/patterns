class CarConveyor {
    setBody() {
        console.log('body set');
    }

    setExterior() {
        console.log('exterior set');
    }

    setWheels() {
        console.log('wheels set');
    }

    setInterior() {
        console.log('interior set');
    }
}

class ConveyorFacade {
    constructor(conveyor) {
        this.conveyor = conveyor
    }

    assembleCar() {
        this.conveyor.setBody()
        this.conveyor.setExterior()
        this.conveyor.setWheels()
        this.conveyor.setInterior()
    }
}

const newCar = new ConveyorFacade(new CarConveyor())
newCar.assembleCar()
