def triangle(x: number):
    return abs((x % (1023 * 2)) - 1023)
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
    pins.analog_write_pin(AnalogPin.P1, 1023)
basic.forever(on_forever2)

def on_forever3():
    global sannolikhet
    if Math.random_boolean():
        sannolikhet = randint(0, 100)
        if sannolikhet < 10:
            soundExpression.mysterious.play_until_done()
        elif sannolikhet < 20:
            soundExpression.yawn.play_until_done()
        elif sannolikhet < 30:
            soundExpression.sad.play_until_done()
    basic.pause(1000)
basic.forever(on_forever3)
