class GenericNumber<T> {
    zeroValue: T
    add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = (x, y) => {
    return x + y
}

let stringNumeric = new GenericNumber<string>()
stringNumeric.zeroValue = ""
stringNumeric.add = (x, y) => {
    return x + y
}

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"))

function loggingIdentity<T>(arg: T): T {
    // console.log(arg.length)
    return arg
}

interface Lengthwise {
    length: number
}

function loggingIdentity0<T extends Lengthwise>(arg: T): T {
    console.log(arg.length)
    return arg
}