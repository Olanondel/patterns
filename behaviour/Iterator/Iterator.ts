class Iterator {
    index: number = 0

    constructor(public items: string[]) {}

    next() {
        return this.items[this.index++]
    }

    hasNext() {
        if (this.index < this.items.length) {
            return this.index < this.items.length
        }
        this.index = 0
    }
}

let items = ['My', 'name', 'is', '"name"', '!']
const iterator = new Iterator(items)

while(iterator.hasNext()) {
    console.log(iterator.next())
}

console.log(iterator.index);