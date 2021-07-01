class News {
    subscribers: User[] = []
    state: string

    register(user) {
        this.subscribers.push(user)
    }

    setState(state: string) {
        this.state = state

        this.notifySubscribers()
    }

    notifySubscribers() {
        for (let subscriber of this.subscribers) {
            subscriber.notify(`Dear ${subscriber.name}, ${this.state}`)
        }
    }
}

class User {
    constructor(public name: string) {}

    notify(message) {
        console.log(message)
    }
}

const John = new User('John')
const Elena = new User('Helen')
const Din = new User('Din')

const news = new News()
news.register(John)
news.register(Elena)
news.register(Din)

news.setState('New manufacture is open!')