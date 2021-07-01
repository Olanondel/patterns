abstract class AccountCommand {
    constructor(public account: BankAccount, public amount: number) {}
    abstract execute(): void
    abstract undo(): void
}

class Withdraw extends AccountCommand {
    execute(): void { this.account.balance -= this.amount }

    undo(): void { this.account.balance += this.amount }
}

class Income extends AccountCommand {
    execute(): void { this.account.balance += this.amount }

    undo(): void { this.account.balance -= this.amount }
}

// Receiver
class BankAccount {
    constructor(public name: string, public balance: number = 0) {}
}

// Invoker
class Bank {
    commands: AccountCommand[] = []

    operation(account, amount): void {
        const Command = amount < 0 ? Withdraw : Income
        const command = new Command(account, Math.abs(amount))
        command.execute()
        this.commands.push(command)
    }

    undo(count): void {
        for (let i = 0; i < count; i++) {
            const command = this.commands.pop()
            command.undo()
        }
    }

    showOperations() {
        const output = []

        for (const command of this.commands) {
            output.push({
                operation: command.constructor['name'],
                account: command.account.name,
                amount: command.amount
            })
        }

        console.table(output)
    }
}

const bank = new Bank()

const MarcusAcc = new BankAccount('Marcus Aurelius')
bank.operation(MarcusAcc, 900)
bank.operation(MarcusAcc, -136)

const AntonAcc = new BankAccount('Anton Dev')
bank.operation(AntonAcc, 700)
bank.operation(AntonAcc, -222)

bank.showOperations()

console.table([MarcusAcc, AntonAcc])