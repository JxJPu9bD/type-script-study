interface User {
    name: string
    age: number
    greeter(): string
}

const user: User = {
    name: "name",
    age: 10,

    greeter(): string {
        return ""
    }
}

class Student {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    // public function greeter(name: string) {
    //     return "hello" + " " + name
    // }

    greeter(): string {
        return "helle" + " " + this.name
    }
}

const jack : User = new Student("jack", 20)
const rose = new Student("rose", 18)

type MyBool = true | false
type WindowStates = "open" | "closed" | "minimized"
type Practice = string | number

let value: Practice
value = "name"
value = 20
// value = {name: "jack"}

console.log(jack.greeter())
console.log(rose.greeter())