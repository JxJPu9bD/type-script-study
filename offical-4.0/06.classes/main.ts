class Animal {
    name: string

    constructor(name: string) {
        this.name = name
    }

    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`)
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof!Woof!")
    }
}

let dog = new Dog("Wang")
dog.bark()
dog.move(10)
dog.bark()

abstract class Department {
    name: string

    constructor(name: string) {
        this.name = name
    }

    printName(): void {

    }

    abstract printMeeting(): void
}

// class AnotherDepartment implements Department {
//     name: string;
//
//     printMeeting(): void {
//     }
//
//     printName(): void {
//     }
//
// }

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing");
    }

    printMeeting() {
        console.log("The Accounting Department meets each Monday at 10am.")
    }

    generateReports(): void {
        console.log("Generating accounting reports...")
    }
}

let department: Department
// department = new Department()
// error 抽象类不能被直接初始化

department = new AccountingDepartment()
department.printName()
department.printMeeting()
// (department as AccountingDepartment).generateReports()

let account = new AccountingDepartment()
account.generateReports()

function greeting() {

}

class Greeter {
    greeting: string

    constructor(message: string) {
        this.greeting = message
    }

    greet() {
        return "hello, " + this.greeting
    }
}

let greeter: Greeter
greeter = new Greeter("world")
greeter.greet()

class Point {
    x: number
    y: number
}

interface Point3d extends Point {
    z: number
}

let point3d: Point3d = {x: 1, y: 2, z: 3}
