interface Strategy {
    calculate(parcel: {}): string
}

class Shipping {
    company: Strategy

    setStrategy(strategy: Strategy): void {
        this.company = strategy
    }

    calculatePrice(parcel: {}): string {
        return this.company.calculate(parcel)
    }
}

class NovaPoshta implements Strategy {
    calculate(parcel): string {
        // calculate
        return '15$'
    }
}

class Ukrposhta implements Strategy {
    calculate(parcel): string {
        return '8$'
    }
}

class Intime implements Strategy {
    calculate(parcel): string {
        return '6$'
    }
}

const parcel = { from: 'Kyiv', to: 'Odessa', weight: '2kg'  }

const shipping = new Shipping()

const novaPoshta = new NovaPoshta()
const ukrposhta = new Ukrposhta()
const intime = new Intime()

shipping.setStrategy(novaPoshta)
console.log(shipping.calculatePrice(parcel));

shipping.setStrategy(ukrposhta)
console.log(shipping.calculatePrice(parcel));

shipping.setStrategy(intime)
console.log(shipping.calculatePrice(parcel));