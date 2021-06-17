class Observer {
    constructor() {
        this.subscribers = []
        this.news = ''
    }

    setNews(news) {
        this.news = news
        this.subscribers.map(s => {
            s.inform(`Hello ${s.name}, great news!`)
        })
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber)
    }

    unsubscribe(subscriber) {
        this.subscribers.filter(s => s !== subscriber)
    }
}

class Max {
    constructor(name) {
        this.name = name
    }

    inform(mess) {
        console.log(mess)
    }
}

const max = new Max('Max')
const observer = new Observer()

observer.subscribe(max)

observer.setNews('Hello mex!')
observer.setNews('Hello mex!')