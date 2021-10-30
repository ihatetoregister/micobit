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
            soundExpression.mysterious.playUntilDone()
        } else if (sannolikhet < 20) {
            soundExpression.yawn.playUntilDone()
        } else if (sannolikhet < 30) {
            soundExpression.sad.playUntilDone()
        }
    }
    basic.pause(1000)
})
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, 1023)
})
