def triangle(x: number):
    return abs(x % (1023 * 2) - 1023)
timeStep = 0
blinkSpeed = 0
sannolikhet = 0
basic.show_leds("""
    # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
""")

def on_forever():
    led.set_brightness(input.sound_level())
    basic.pause(50)
basic.forever(on_forever)

def on_forever2():
    global sannolikhet, blinkSpeed
    if Math.random_boolean():
        sannolikhet = randint(0, 100)
        if sannolikhet < 10:
            blinkSpeed = 512
            soundExpression.mysterious.play_until_done()
        elif sannolikhet < 20:
            blinkSpeed = 256
            soundExpression.yawn.play_until_done()
        elif sannolikhet < 30:
            blinkSpeed = 128
            soundExpression.sad.play_until_done()
    blinkSpeed = 16
    basic.pause(1000)
basic.forever(on_forever2)

def on_forever3():
    global timeStep
    pins.analog_write_pin(AnalogPin.P1, triangle(timeStep))
    pins.analog_write_pin(AnalogPin.P2, triangle(timeStep + 1024))
    timeStep += blinkSpeed
basic.forever(on_forever3)
