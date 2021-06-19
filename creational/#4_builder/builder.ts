class Burger {
    ingredients: string[] = []

    getIngredientsList(): void {
        console.table(this.ingredients)
    }
}

class Builder {
    private burger: Burger = new Burger()

    addBun(): Builder {
        this.burger.ingredients.push('Bun')
        return this
    }

    addLettuce(): Builder {
        this.burger.ingredients.push('Lettuce')
        return this
    }

    addCheese(): Builder {
        this.burger.ingredients.push('Cheese')
        return this
    }

    addBacon(): Builder {
        this.burger.ingredients.push('Bacon')
        return this
    }

    build(): Burger {
        return this.burger
    }
}

const burger1 = new Builder().addBun().addBacon().addCheese().addLettuce().build()
const burger2 = new Builder().addBun().addBacon().addLettuce().build()
burger1.getIngredientsList()
burger2.getIngredientsList()