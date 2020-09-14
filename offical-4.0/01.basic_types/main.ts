// Boolean
let isDone: boolean = false

// Number
let decimal: number = 6
let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744
// 目标低于 ES2020 时，bigInt 文本不可用。ts(2737)
// let big: bigint = 100n

// String
let color: string = "blue"
color = "red"

let fullName: string = `Bob Bobbington`
let age: number = 37
let sentence: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month.`

// ==
let sentenceAnother: string = "Hello, my name is " +
fullName +
".\n\n" +
"I'll be " +
(age + 1) +
" years old next month."

// Array
let list: number[] = [1, 2, 3]
let listAnother: Array<number> = [1, 2, 3]

// Tuple
let x: [string, number]
x = ["hello", 10]
// wrong
// x = [10, "hello"]

console.log(x[0].substring(1))
// console.log(x[1].substring(1))
// x[3] = "world"
// console.log(x[5].toString())

// Enum
enum Color {
    Red = 1,
    Green,
    Blue
}

let c: Color = Color.Blue
// displays 'Red'
let colorName: string = Color[1];

console.log(colorName)

// Unknown (id? Any?)
let notSure: unknown = 4
notSure = "maybe a string instead"
notSure = false

declare const maybe: unknown
// const aNumber: number = maybe

if (maybe === true) {
    const aBoolean: boolean = maybe
    // const aString: string = maybe
}

if (typeof maybe === "string") {
    const aString: string = maybe
    // const aBoolean: boolean = maybe
}

// Any
declare function getValue(key: string): any
const str: string = getValue("myString");

// Any not same as Unknown
let looselyTyped: any = 4
looselyTyped.ifItExists()
looselyTyped.toFixed()

// unknown 一旦能判断到类型, 便会往下执行下去
let strictlyTyped: unknown = 4
// strictlyTyped.toFixed()

let d = looselyTyped.a.b.c.d
// Any 会传递这个属性, 但是这样也失去了类型安全和类型检查, 没有必要的时间不要使用
// Unknown 是一开始不能确定这个属性的类型, 但是如果能推断或者赋值, 类型安全和类型检查就不会丢失

// Void 类似空?
function warnUser(): void {
    console.log("This is my warning message")
    // return "This is my warning message"
}

let unusable: void = undefined
unusable = null

let u: undefined = undefined
let n: null = null

list = undefined
list = null
// 如果 --strictNullChecks 不能这样写

// 定义了一种新的类型 typedef?
type aType = string | null

// n = void

// Object 非原始(基础)数据类型, 可以当成 JSON 或者 Map(Dictionary)?

let map: object
map = {name: "jack"}
// map = 30
// map = "string"

// Type assertions 类型断言 as, 可以理解为强转?
let someValue: unknown = "this is a string"
let strLength: number = (someValue as string).length

let strLength2: number = (<string>someValue).length