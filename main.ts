basic.showLeds(`
    # # . # #
    # . # . #
    # # # # #
    # . # . #
    # # . # #
    `)
basic.showArrow(ArrowNames.North)
basic.showString("")
serial.redirectToUSB()
basic.showString("Hello!")
radio.sendNumber(3.1415926)
music.playMelody("C D E F F E D C ", 120)
