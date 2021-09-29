input.onButtonPressed(Button.A, function () {
    basic.showNumber(1)
    control.waitMicros(4)
    basic.showNumber(2)
    control.waitMicros(4)
    basic.showNumber(3)
    control.waitMicros(4)
    basic.showNumber(4)
    control.waitMicros(4)
    basic.showNumber(5)
    control.waitMicros(4)
    basic.showNumber(6)
    control.waitMicros(4)
    basic.showNumber(7)
    control.waitMicros(4)
    basic.showNumber(8)
    control.waitMicros(4)
    basic.showNumber(9)
    control.waitMicros(4)
    basic.showNumber(10)
    control.waitMicros(4)
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    control.waitMicros(4)
    basic.showLeds(`
        # # # # .
        # . . . .
        # # # . .
        # . . . .
        # # # # .
        `)
    control.waitMicros(4)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # #
        `)
    control.waitMicros(4)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # #
        `)
    control.waitMicros(4)
    basic.showLeds(`
        . . . . .
        . . # # .
        . # . . #
        . # . . #
        . . # # .
        `)
    control.waitMicros(10)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    control.waitMicros(4)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    control.waitMicros(4)
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    control.waitMicros(4)
    basic.showLeds(`
        # # # # .
        # . . . .
        # # # . .
        # . . . .
        # # # # .
        `)
    control.waitMicros(4)
    basic.showLeds(`
        # # # # .
        # . . # .
        # # # . .
        # . # . .
        # . . # .
        `)
    control.waitMicros(4)
    basic.showLeds(`
        # # # # .
        # . . . .
        # # # . .
        # . . . .
        # # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(10)
    control.waitMicros(4)
    basic.showNumber(9)
    control.waitMicros(4)
    basic.showNumber(8)
    control.waitMicros(4)
    basic.showNumber(7)
    control.waitMicros(4)
    basic.showNumber(6)
    control.waitMicros(4)
    basic.showNumber(5)
    control.waitMicros(4)
    basic.showNumber(4)
    control.waitMicros(4)
    basic.showNumber(3)
    control.waitMicros(4)
    basic.showNumber(2)
    control.waitMicros(4)
    basic.showNumber(1)
    basic.showLeds(`
        # # # # #
        . # # # .
        . . # . .
        . # # # .
        . # # # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
    for (let index = 0; index < 1000; index++) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 700)
        control.waitMicros(4)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 700)
        control.waitMicros(4)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Left, 255)
        control.waitMicros(4)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Left, 255)
    }
})
basic.forever(function () {
	
})
