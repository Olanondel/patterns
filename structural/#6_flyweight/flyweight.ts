class Flyweight {
    constructor(public make: string, public model: string, public processor: string) {}
}

class FlyweightFactory {
    flyweights: {} = {}

    get(make: string, model: string, processor: string): Flyweight {
        if (!this.flyweights[make+model]) {
            this.flyweights[make+model] = new Flyweight(make, model, processor)
        }

        return this.flyweights[make+model]
    }

    consoleFlyweightsList(): void {
        console.table(this.flyweights)
    }
}

const factory = new FlyweightFactory()

class Computer {
    flyweight: Flyweight

    constructor(
        make: string,
        model: string,
        processor: string,
        public os: string,
        public hardDisc: string,
        public videoCard: string
    ) {
        this.flyweight = factory.get(make, model, processor)
    }
}

const computers = [
    new Computer('Dell', 'dellModel', 'dellProc', 'dellOs', 'dellHd', 'dellVideo'),
    new Computer('Dell', 'dellModel', 'dellProc', 'dellOs1', 'dellHd1', 'dellVideo1'),
    new Computer('Dell', 'dellModel', 'dellProc', 'dellOs2', 'dellHd2', 'dellVideo2'),
    new Computer('Dell', 'dellModel', 'dellProc', 'dellOs3', 'dellHd3', 'dellVideo3'),
    new Computer('Acer', 'acerModel', 'acerProc', 'acerOs1', 'acerHd1', 'acerVideo1'),
    new Computer('Acer', 'acerModel', 'acerProc', 'acerOs2', 'acerHd2', 'acerVideo2'),
]

factory.consoleFlyweightsList()