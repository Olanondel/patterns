class OldCalc {
    operations(t1, t2, operation) {
        switch (operation) {
            case 'add':
                return t1 + t2
            case 'sub':
                return t1 - t2
            default: return 'Error'
        }
    }
}

class NewCalc {
    add(t1, t2) {
        return t1 + t2
    }

    sub(t1, t2) {
        return t1 - t2
    }
}

class Adapter {
    constructor() {
        this.calc = new NewCalc()
    }

    operations(t1, t2, operation) {
        switch (operation) {
            case 'add': return this.calc.add(t1, t2)
            case 'sub': return this.calc.sub(t1, t2)
            default: return 'Error'
        }
    }
}

const oldCalc = new OldCalc()
const newCalc = new NewCalc()

const adapter = new Adapter()
console.log(adapter.operations(10, 8, 'sub'));