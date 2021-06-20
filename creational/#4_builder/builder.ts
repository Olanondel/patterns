class UserBuilder {
    position: string
    phone: number
    id: number

    constructor(public name: string, public age: number) {}

    setPosition(position: string): UserBuilder {
        this.position = position
        return this
    }

    setPhone(phone: number): UserBuilder {
        this.phone = phone
        return this
    }

    setId(id: number): UserBuilder {
        this.id = id
        return this
    }

    build(): UserBuilder {
        return this
    }
}

const user = new UserBuilder('oleg', 25).setId(1).setPosition('intern').setPhone(1234567).build()

console.log(user)