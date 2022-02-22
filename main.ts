control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (_87 != control.eventValue()) {
        _87 = control.eventValue()
    }
})
let _01 = 0
let _87 = 0
_87 = 0
let S1 = 1
let S2 = 1
let S3 = 1
let S4 = 1
let S5 = 1
let S6 = 1
bluetooth.startLEDService()
bluetooth.startButtonService()
bluetooth.startUartService()
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        _01 += 3
        robotbit.GeekServo2KG(robotbit.Servos.S1, _01)
        basic.pause(20)
    }
})
basic.forever(function () {
    control.waitForEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_EVT_ANY)
    S1 += -6
    robotbit.GeekServo2KG(robotbit.Servos.S1, S1)
    control.waitMicros(2)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        _01 += -3
        robotbit.GeekServo2KG(robotbit.Servos.S1, _01)
        basic.pause(20)
    }
})
basic.forever(function () {
    control.waitForEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_EVT_ANY)
    S1 += 6
    robotbit.GeekServo2KG(robotbit.Servos.S1, S1)
    control.waitMicros(2)
})
basic.forever(function () {
    if (_87 == 1) {
        basic.showString("A")
        S2 += 6
        robotbit.GeekServo2KG(robotbit.Servos.S2, S2)
        control.waitMicros(4)
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (_87 == 1) {
        basic.showString("C")
        S3 += 6
        robotbit.GeekServo2KG(robotbit.Servos.S3, S3)
        control.waitMicros(4)
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (_87 == 1) {
        basic.showString("1")
        S5 += 6
        robotbit.GeekServo2KG(robotbit.Servos.S5, S5)
        control.waitMicros(4)
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (_87 == 1) {
        basic.showString("1")
        S4 += 6
        robotbit.GeekServo2KG(robotbit.Servos.S4, S4)
        control.waitMicros(4)
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (_87 == 3) {
        basic.showString("B")
        S2 += -6
        robotbit.GeekServo2KG(robotbit.Servos.S2, S2)
        control.waitMicros(4)
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (_87 == 1) {
        basic.showString("D")
        S3 += 6
        robotbit.GeekServo2KG(robotbit.Servos.S3, S3)
        control.waitMicros(4)
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (_87 == 1) {
        basic.showString("2")
        S4 += 6
        robotbit.GeekServo2KG(robotbit.Servos.S4, S4)
        control.waitMicros(4)
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (_87 == 1) {
        basic.showString("1")
        S5 += 6
        robotbit.GeekServo2KG(robotbit.Servos.S5, S5)
        control.waitMicros(4)
    } else {
        basic.clearScreen()
    }
})
