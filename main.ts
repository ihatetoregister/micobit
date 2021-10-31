function triangle (x: number) {
    return Math.abs(x % (1023 * 2) - 1023)
}
let timeStep = 0
let blinkSpeed = 0
let sannolikhet = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    led.setBrightness(input.soundLevel())
    basic.pause(50)
})
basic.forever(function () {
    if (Math.randomBoolean()) {
        sannolikhet = randint(0, 100)
        if (sannolikhet < 10) {
            blinkSpeed = 512
            soundExpression.mysterious.playUntilDone()
        } else if (sannolikhet < 20) {
            blinkSpeed = 256
            soundExpression.yawn.playUntilDone()
        } else if (sannolikhet < 30) {
            blinkSpeed = 128
            soundExpression.sad.playUntilDone()
        }
    }
    blinkSpeed = 16
    basic.pause(1000)
})
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, triangle(timeStep))
    pins.analogWritePin(AnalogPin.P2, triangle(timeStep + 1024))
    timeStep += blinkSpeed
})
