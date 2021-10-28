basic.show_leds("""
    # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
""")

def on_forever():
    led.set_brightness(input.sound_level())
    basic.pause(100)
basic.forever(on_forever)
