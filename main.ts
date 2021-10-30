function triangle(x: number): number {
    return Math.abs(x % (1023 * 2) - 1023)
}

let blinkSpeed = 0
let sannolikhet = 0
let x2 = 0
basic.showLeds(`
    # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
`)
basic.forever(function on_forever() {
    led.setBrightness(input.soundLevel())
    basic.pause(50)
})
basic.forever(function on_forever2() {
    
    if (Math.randomBoolean()) {
        sannolikhet = randint(0, 100)
        if (sannolikhet < 10) {
            blinkSpeed = 200
            soundExpression.mysterious.playUntilDone()
        } else if (sannolikhet < 20) {
            blinkSpeed = 100
            soundExpression.yawn.playUntilDone()
        } else if (sannolikhet < 30) {
            blinkSpeed = 50
            soundExpression.sad.playUntilDone()
        }
        
    }
    
    blinkSpeed = 10
    basic.pause(1000)
})
basic.forever(function on_forever3() {
    
    pins.analogWritePin(AnalogPin.P1, triangle(x2))
    x2 += blinkSpeed
    basic.pause(1)
})
