control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (_87 != control.eventValue()) {
        _87 = control.eventValue()
    }
})
let _87 = 0
_87 = 0
let _1 = 1
basic.forever(function () {
    if (_87 == 1) {
        basic.showString("A")
        _1 += 6
        robotbit.GeekServo2KG(robotbit.Servos.S1, _1)
        basic.pause(50)
    } else {
        basic.clearScreen()
        robotbit.MotorStopAll()
    }
})
basic.forever(function () {
    if (_87 == 3) {
        basic.showString("B")
        _1 += -6
        robotbit.GeekServo2KG(robotbit.Servos.S1, _1)
        basic.pause(50)
    } else {
        basic.clearScreen()
        robotbit.MotorStopAll()
    }
})
