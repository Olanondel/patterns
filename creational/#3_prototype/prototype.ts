interface UserPrototype {
    clone()
}

class User implements UserPrototype {
    constructor(public name: string, public age: number, public position: string) {}

    clone(): User {
        return new User(this.name, this.age, this.position)
    }
}

const user = new User('oleg', 25, 'intern')

const cloneUser = user.clone()
cloneUser.name = 'John'
cloneUser.age = 30
cloneUser.position = 'Senior Js Developer'

console.log(cloneUser);