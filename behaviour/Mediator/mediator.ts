class Mediator {
    button: Button
    modal: Modal

    constructor(button, modal) {
        this.button = button
        this.modal = modal
    }

    notify(sender: Component, event: string) {
        if (sender === this.button && event === 'click') {
            this.button.state = false
            this.modal.display = 'block'
            console.log('Mediator switch states')
        } else if (sender === this.modal && event === 'click') {
            this.modal.display = 'none'
            this.button.state = true
            console.log('Mediator switch states')
        }
    }
}

abstract class Component {
    mediator: Mediator = null

    click() {
        this.mediator.notify(this, 'click')
    }
}

class Button extends Component {
    state: boolean = true
}

class Modal extends Component {
    display: string = 'none'
}

const btn = new Button()
const modal = new Modal()

const mediator = new Mediator(btn, modal)

btn.mediator = mediator
modal.mediator = mediator

btn.click()

modal.click()