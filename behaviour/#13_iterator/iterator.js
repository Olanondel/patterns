class Iterator {
    constructor(elms) {
        this.index = 0
        this.elements = elms
    }

    next() {
        return this.elements[this.index++]
    }

    hasNext() {
        return this.index < this.elements.length
    }
}

const collection = new Iterator(['1', '2', '3', '4', '5'])

while(collection.hasNext()) {
    console.log(collection.next())
}