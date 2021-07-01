class Vessel {
    constructor(public speed: number, public size: number) {}

    accept(visitor) {
        visitor(this)
    }

    getSpeed() { return this.speed }
    getSize() { return this.size }

    setSpeed(speed) { this.speed = speed }
    setSize(size) { this.size = size }
}

interface Visitor {
    visit(vessel: Vessel): void
}

class VesselSpeedUp implements Visitor {
    visit(vessel) {
        vessel.setSpeed(vessel.getSpeed() * 2)
    }
}

class VesselEnlarge implements Visitor {
    visit(vessel) {
        vessel.setSize(vessel.getSize() * 2)
    }
}

const vessel = new Vessel( 80, 200)

const vesselSpeedUp = new VesselSpeedUp()
const vesselEnlarge = new VesselEnlarge()

vessel.accept(vesselSpeedUp.visit)
vessel.accept(vesselEnlarge.visit)

console.log(vessel.getSize());
console.log(vessel.getSpeed());