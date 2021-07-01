// Хранитель
class Memento {
    constructor(
        public state
    ) {}

    getState() {
        return this.state
    }
}

// Смотритель
class Caretaker {
    mementos: Memento[] = []

    getMemento() {
        if (this.mementos[this.mementos.length - 1].state !== undefined) {
            return this.mementos.pop()
        }
    }

    setMemento(memento: Memento) {
        this.mementos.push(memento)
    }
}

// Хозяин
class Originator {
    state: string

    setState(state: string) {
        caretaker.setMemento(this.saveState())
        this.state = state
    }

    getState() {
            console.log(`Current state is: [ ${this.state} ]`)
    }

    saveState() {
        return new Memento(this.state)
    }

    restoreState(memento) {
        if (memento) {
            this.state = memento.getState()
        }
    }
}

const originator = new Originator()
const caretaker = new Caretaker()

originator.setState('name')
originator.setState('age')

originator.getState()
originator.restoreState(caretaker.getMemento())
originator.getState()


originator.restoreState(caretaker.getMemento())
originator.getState()


originator.restoreState(caretaker.getMemento())
originator.getState()
