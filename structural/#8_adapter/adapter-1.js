class SimpleEngine {
    simpleEngine() {
        console.log('start simple engine')
    }
}

class V8Engine {
    v8Engine() {
        console.log('start v8 engine')
    }
}

class Auto {
    constructor(engine) {
        this.engine = engine
    }

    startEngine() {
        this.engine.simpleEngine()
    }
}

class V8Adapter {
    constructor(v8) {
        this.engine = v8
    }

    simpleEngine() {
        this.engine.v8Engine()
    }
}

const engine1 = new SimpleEngine()
const engine2 = new V8Engine()
const adaptEngine = new V8Adapter(engine2)


const car = new Auto(adaptEngine)
car.startEngine()