led.enable(false)
let X = 90
let Y = 90
let Z = 90
let G = 90
let Schritte = 2
let Wartezeit = 50000
pins.servoWritePin(AnalogPin.P1, X)
control.waitMicros(Wartezeit)
pins.servoWritePin(AnalogPin.P2, Y)
control.waitMicros(Wartezeit)
pins.servoWritePin(AnalogPin.C5, Z)
control.waitMicros(Wartezeit)
pins.servoWritePin(AnalogPin.C6, G)
control.waitMicros(Wartezeit)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.C16) < 400) {
        X = X + Schritte
        if (X >= 180) {
            X = 180
        }
        pins.servoWritePin(AnalogPin.P1, X)
        control.waitMicros(Wartezeit)
    }
    if (pins.analogReadPin(AnalogPin.C16) > 600) {
        X = X - Schritte
        if (X <= 0) {
            X = 0
        }
        pins.servoWritePin(AnalogPin.P1, X)
        control.waitMicros(Wartezeit)
    }
    if (pins.analogReadPin(AnalogPin.C17) < 400) {
        Y = Y - Schritte
        if (Y <= 55) {
            Y = 55
        }
        pins.servoWritePin(AnalogPin.P2, Y)
        control.waitMicros(Wartezeit)
    }
    if (pins.analogReadPin(AnalogPin.C17) > 600) {
        Y = Y + Schritte
        if (Y >= 150) {
            Y = 150
        }
        pins.servoWritePin(AnalogPin.P2, Y)
        control.waitMicros(Wartezeit)
    }
    if (pins.analogReadPin(AnalogPin.C4) < 400) {
        Z = Z + Schritte
        if (Z >= 120) {
            Z = 120
        }
        pins.servoWritePin(AnalogPin.C5, Z)
        control.waitMicros(Wartezeit)
    }
    if (pins.analogReadPin(AnalogPin.C4) > 600) {
        Z = Z - Schritte
        if (Z <= 40) {
            Z = 40
        }
        pins.servoWritePin(AnalogPin.C5, Z)
        control.waitMicros(Wartezeit)
    }
    if (pins.digitalReadPin(DigitalPin.C8) == 1) {
        G = G + Schritte
        if (G >= 92) {
            G = 92
        }
        pins.servoWritePin(AnalogPin.C6, G)
        control.waitMicros(Wartezeit)
    }
    if (pins.digitalReadPin(DigitalPin.C7) == 1) {
        G = G - Schritte
        if (G <= 10) {
            G = 10
        }
        pins.servoWritePin(AnalogPin.C6, G)
        control.waitMicros(Wartezeit)
    }
})
