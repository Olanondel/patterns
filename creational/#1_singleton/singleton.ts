class Singleton {
    static instance: Singleton
    data: string

    constructor(data: string) {
        if (Singleton.instance) {
            return Singleton.instance
        }

        this.data = data
        return Singleton.instance = this
    }
}

const dbConnection = new Singleton('MONGO Connection')
const dbConnection1 = new Singleton('MYSQL Connection')

console.log(dbConnection)
console.log(dbConnection1)