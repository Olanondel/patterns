class Color {
    constructor(color) {
        this.color = color
    }

    getColor() {
        return this.color
    }
}

class Model {
    constructor(color, model) {
        this.color = color
        this.model = model
    }

    paint() {
        console.log(`${this.model}, color: ${this.color.getColor()}`)
    }
}

class BlackColor extends Color {
    constructor() {
        super('black')
    }
}

class Audi extends Model {
    constructor(color) {
        super(color, 'Audi');
    }
}

new Audi(new BlackColor()).paint();

