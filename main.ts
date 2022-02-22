control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (_87 != control.eventValue()) {
        _87 = control.eventValue()
    }
})
let _87 = 0
_87 = 0
let _1 = 1
basic.forever(function () {
    basic.showString("A")
    if (_87 == 1) {
        robotbit.GeekServo2KG(robotbit.Servos.S1, _1)
        _1 += 3
    } else {
        basic.clearScreen()
        robotbit.MotorStopAll()
    }
})
basic.forever(function () {
    basic.showString("B")
    if (_87 == 3) {
        robotbit.GeekServo2KG(robotbit.Servos.S1, _1)
        _1 += -3
    } else {
        basic.clearScreen()
        robotbit.MotorStopAll()
    }
})
