class OfficialDealer {
    constructor() {
        this.customers = []
    }

    orderAuto(customer, auto) {
        console.log(`${customer.getName()} you ordered: ${auto}. Enjoy it`)

        this.addToCustomerList(customer.getName())
    }

    addToCustomerList(name) {
        this.customers.push(name)
    }
}

class Customer {
    constructor(name, mediator) {
        this.name = name
        this.mediator = mediator
    }

    getName() {
        return this.name
    }

    orderAuto(auto) {
        this.mediator.orderAuto(this, auto)
    }
}

const dealer = new OfficialDealer()
const customer = new Customer('oleg', dealer)

customer.orderAuto('Audi')