def triangle(x: number):
    return abs(x % (1023 * 2) - 1023)
blinkSpeed = 0
sannolikhet = 0
x2 = 0

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
            blinkSpeed = 200
            soundExpression.mysterious.play_until_done()
        elif sannolikhet < 20:
            blinkSpeed = 100
            soundExpression.yawn.play_until_done()
        elif sannolikhet < 30:
            blinkSpeed = 50
            soundExpression.sad.play_until_done()
    blinkSpeed = 10
    basic.pause(1000)
basic.forever(on_forever2)

def on_forever3():
    global x2
    pins.analog_write_pin(AnalogPin.P1, triangle(x2))
    pins.analog_write_pin(AnalogPin.P2, triangle(x2+512))
    x2 += blinkSpeed
    basic.pause(1)
basic.forever(on_forever3)
