class Computer {

    getElectricShock(): void {
        console.log('Ouch!')
    }

    makeSound(): void {
        console.log('Beep beep!')
    }

    showLoadingScreen(): void {
        console.log('Loading..')
    }

    bam(): void {
        console.log('Ready to be used!')
    }

    closeEverything(): void {
        console.log('Bup bup bup buzzzz!')
    }

    sooth(): void {
        console.log('Zzzzz')
    }

    pullCurrent(): void {
        console.log('Haaah!')
    }
}

class ComputerFacade {
    constructor(public computer: Computer) {}

    turnOn(): void {
        this.computer.getElectricShock()
        this.computer.makeSound()
        this.computer.showLoadingScreen()
        this.computer.bam()
    }

    turnOff(): void {
        this.computer.closeEverything()
        this.computer.pullCurrent()
        this.computer.sooth()
    }
}

const useComputer = new ComputerFacade(new Computer())
useComputer.turnOn()
useComputer.turnOff()