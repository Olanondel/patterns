class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    getSalary() {
        return this.salary
    }

    setSalary(salary) {
        this.salary = salary
    }

    accept(visitor) {
        visitor(this)
    }
}

const employee = new Employee('John', 300)

function x2Salary(employee) {
    employee.setSalary(employee.getSalary() * 2)
}

employee.accept(x2Salary)
console.log(employee.getSalary());