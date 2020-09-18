enum Direction {
    Up,
    Down,
    Left,
    Right
}

enum UserResponse {
    No,
    Yes
}

enum ShapeKind {
    Circle,
    Square
}

interface Circle {
    kind: ShapeKind.Circle
    radius: number
}

interface Square {
    kind: ShapeKind.Square
    sideLength: number
}

const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [
    Directions.Up,
    Directions.Down,
    Directions.Left,
    Directions.Right
]

declare enum Enum {
    A = 1,
    B,
    C = 2
}

console.log(Enum.B)