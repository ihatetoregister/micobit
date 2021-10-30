function triangle (x: number) {
    return Math.abs(x % (1023 * 2) - 1023)
}
let blinkSpeed = 0
let sannolikhet = 0
let x = 0
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
            blinkSpeed = 100
            soundExpression.mysterious.playUntilDone()
        } else if (sannolikhet < 20) {
            blinkSpeed = 50
            soundExpression.yawn.playUntilDone()
        } else if (sannolikhet < 30) {
            blinkSpeed = 25
            soundExpression.sad.playUntilDone()
        }
    }
    blinkSpeed = 1
    basic.pause(1000)
})
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, triangle(x))
    x += blinkSpeed
})
