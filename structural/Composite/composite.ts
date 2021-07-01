abstract class Component {
    constructor(
        public name: string = '',
        public value: number = 0
    ) {}

    abstract execute(): number
}

class Leaf extends Component {
    execute() { return this.value }
}

class Composite extends Component {
    children: Component[] = []
    self: Composite = this

    add(component: Component) {
        this.children.push(component)
    }

    remove(component: Component): void {
        this.children = this.children.filter(ch => ch !== component)
    }

    execute(): number {
        this.children.forEach(component => {
            this.self.value = this.self.value + component.execute()
        })
        let sum = this.self.value
        this.self.value = 0
        return sum
    }
}

const kitchen = new Composite('Кухня')
const equipment = new Composite('Техника')

kitchen.add( new Leaf('Верхняя секция', 5200) )
kitchen.add( new Leaf('Верхняя двойная секция', 10000) )
kitchen.add( new Leaf('Нижняя секция', 4500) )
kitchen.add( new Leaf('Нижняя угловая секция', 7800) )

equipment.add( new Leaf('Газовая плита', 26400) )
equipment.add( new Leaf('Холодильник', 32300) )
equipment.add( new Leaf('Посудомойка', 21600) )
equipment.add( new Leaf('Шейкер', 4600) )

kitchen.add(equipment)

console.log(`Итого ${kitchen.execute()} руб.`)
console.log(`Итого ${kitchen.execute()} руб.`)
