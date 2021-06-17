class Light {
    constructor(light) {
        this.light = light
    }

    sign() {}
} // this light

class RedLight extends Light {
    constructor() {
        super('red');
    }

    sign() {
        console.log('Its a red light! Stop!')
    }
} // sign() -> log

class YellowLight extends Light {
    constructor() {
        super('yellow');
    }

    sign() {
        console.log('Its a yellow light! Prepare!')
    }
} // sign() -> log

class GreenLight extends Light {
    constructor() {
        super('green');
    }

    sign() {
        console.log('Its a green light! Go!')
    }
} // sign() -> log

class TrafficLight {
    constructor() {
        this.states = [
            new RedLight(),
            new YellowLight(),
            new GreenLight()
        ]
        this.currentState = this.states[0]
    }

    change() {
        let total = this.states.length
        let currentIndex = this.states.findIndex(e => e === this.currentState)

        if (currentIndex + 1 < total) {
            this.currentState = this.states[currentIndex + 1]
        } else {
            this.currentState = this.states[0]
        }
    }

    sign() {
        this.currentState.sign()
    }
}

const tl = new TrafficLight()
tl.sign()
tl.change()

tl.sign()
tl.change()

tl.sign()
tl.change()

tl.sign()
tl.change()

