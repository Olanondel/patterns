class Employee {
    constructor(
       public name: string,
       public position: string,
       public progress: string
    ) {}

    getProgress() {
        return this.progress
    }
}

class Developer extends Employee {}

class DevTeamLead extends Employee {
    teamMembers: any[] = []

    constructor(name, position, progress) {
        super(name, position, progress);
    }

    addMember(employee) {
        this.teamMembers.push(employee)
    }

    getProgress(): string {
        for (let el of this.teamMembers) {
            console.log(el.getProgress())
        }
        return
    }

    showTeam(): void {
        for (let el of this.teamMembers) {
            console.log(el.name)
        }
    }
}

const teamLead = new DevTeamLead("Regina", "Dev Team Lead","90%")
const teamLead1 = new DevTeamLead("Regina1", "Dev Team Lead1","90%")
const teamLead2 = new DevTeamLead("Regina2", "Dev Team Lead2","90%")

const seniorDev = new Developer('Rachel', 'Senior Developer', '60%')
const juniorDev = new Developer("Joey","Junior Developer", "50%")

const seniorDev1 = new Developer('Rachel1', 'Senior Developer1', '60%')
const juniorDev1 = new Developer("Joey1","Junior Developer1", "50%")

const seniorDev2 = new Developer('Rachel2', 'Senior Developer2', '60%')
const juniorDev2 = new Developer("Joey2","Junior Developer2", "50%")

teamLead.addMember(seniorDev)
teamLead.addMember(juniorDev)
teamLead.addMember(teamLead1)

teamLead1.addMember(seniorDev1)
teamLead1.addMember(juniorDev1)
teamLead1.addMember(teamLead2)

teamLead2.addMember(seniorDev2)
teamLead2.addMember(juniorDev2)


console.log(`Team members list:`)
teamLead.showTeam()

console.log(`Get Team members progress:`)
teamLead.getProgress()

