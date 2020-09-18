/*function printLabel(labeledObj: { label: string}) {
    console.log(labeledObj.label)
}

let myObj = {size: 10, label: "size 10 object"};
printLabel(myObj)*/

interface LabeledValue {
    label: string
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label)
}

let myObj = {size: 10, label: "size 10 object"}
printLabel(myObj)

// Optional Properties 可选属性
interface SquareConfig {
    color?: string
    width?: number
    [propName: string]: any
}

function createSquare(config: SquareConfig) : {color: string; area: number} {
    let newSquare = {color: "white", area: 100}
    if (config.color) {
        newSquare.color = config.color
    }

    if (config.width) {
        newSquare.area = config.width * config.width
    }

    return newSquare
}

let mySquare = createSquare({color: "black"})

let mySquare2 = createSquare({width: 100, opacity: 0.5} as SquareConfig)
// 增加 interface 属性
let mySquare3 = createSquare({width: 100, opacity: 0.5})
// 传入另外的变量
let squareOptions = {colour: "red", width: 100}
let mySquare4 = createSquare(squareOptions)

let squareOptions2 = {colour: "red"}
let mySquare5 = createSquare(squareOptions2)

// Readonly properties 只读

interface Point {
    readonly x: number
    readonly y: number
}

let p1: Point = {x: 10, y: 20}
// p1.x = 20

let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a

// ro[0] = 12
// ro.push(5)

// a = ro
// can be
a = ro as number[]

// Function Types 函数类型
interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function (source: string, subString: string): boolean {
    let result = source.search(subString)
    return result > -1
}
let mySearch2: SearchFunc
// 参数名可以不匹配
mySearch2 = function (src: string, sub: string): boolean {
    let result = src.search(sub)
    return result > -1
}

// Class Types
interface ClockInterface {
    currentTime: Date
}

class Clock implements ClockInterface {
    currentTime: Date = new Date()
    constructor(h: number, m: number) {

    }
}