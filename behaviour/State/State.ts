class TrafficLight {
    states: Light[] = [new RedLight(), new YellowLight(), new GreenLight()]
    state: Light = this.states[0]

    constructor() {
        this.states = [new RedLight(), new YellowLight(), new GreenLight()]
        this.state = this.states[0]
    }

    changeState() {
        const totalStates = this.states.length
        let currentIndex = this.states.indexOf(this.state)

        if (currentIndex + 1 < totalStates) this.state = this.states[currentIndex + 1]
        else this.state = this.states[0]
    }

    sign() {
        return this.state.sign()
    }
}

abstract class Light {
    protected constructor(public light: string) {}

    abstract sign()
}

class RedLight extends Light {
    constructor() {
        super('red');
    }

    sign() {
        return 'STOP'
    }
}

class YellowLight extends Light {
    constructor() {
        super('yellow');
    }

    sign() {
        return 'STEADY'
    }
}

class GreenLight extends Light {
    constructor() {
        super('green');
    }

    sign() {
        return 'GO!'
    }
}

const trafficLight = new TrafficLight()
console.log(trafficLight.sign());

trafficLight.changeState()
console.log(trafficLight.sign());

trafficLight.changeState()
console.log(trafficLight.sign());