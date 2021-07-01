interface Command1 {
    receiver
    execute(): void
}

class AlertCommand implements Command1 {
    constructor(
        public receiver
    ) {}

    execute(): void { this.receiver.action() }
}

class LogCommand implements Command1 {
    constructor(
        public receiver
    ) {}

    execute(): void { this.receiver.execute() }
}

// Receiver
class Alert {
    action(): void { window.alert('Hello user!') }
}

class ConsoleLog {
    action(): void { console.log('Hello user!') }
}

// Invoker
class Button {
    node
    label: string
    command: Command1

    constructor(label: string, command) {
        this.label = label
        this.command = command
        this.node = document.createElement('button')
        this.build()
    }

    build() {
        this.node.innerText = this.label
        this.node.onclick = () => this.onClickHandler()
    }

    onClickHandler() {
        this.command.execute()
    }
}

const logCommand = new LogCommand(new ConsoleLog())
const alertCommand = new AlertCommand(new Alert())

class App {
    constructor(public node) {}

    init() {
        const button = new Button('Tap me!', alertCommand)

        this.node.append(button.node)
    }
}

const appNode = document.getElementById('app')
const app = new App(appNode)

app.init()