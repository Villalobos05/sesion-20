let velocidad = 200
basic.forever(function () {
    for (let Y = 0; Y <= 4; Y++) {
        led.plot(0, Y)
        music.playTone(165, music.beat(BeatFraction.Sixteenth))
        basic.pause(velocidad)
        basic.clearScreen()
    }
    for (let Y = 0; Y <= 4; Y++) {
        led.plot(1, Y)
        music.playTone(165, music.beat(BeatFraction.Sixteenth))
        basic.pause(velocidad)
        basic.clearScreen()
    }
    for (let Y = 0; Y <= 4; Y++) {
        led.plot(2, Y)
        music.playTone(165, music.beat(BeatFraction.Sixteenth))
        basic.pause(velocidad)
        basic.clearScreen()
    }
    for (let Y = 0; Y <= 4; Y++) {
        led.plot(3, Y)
        music.playTone(165, music.beat(BeatFraction.Sixteenth))
        basic.pause(velocidad)
        basic.clearScreen()
    }
    for (let Y = 0; Y <= 4; Y++) {
        led.plot(4, Y)
        music.playTone(165, music.beat(BeatFraction.Sixteenth))
        basic.pause(velocidad)
        basic.clearScreen()
    }
    basic.showIcon(IconNames.Yes)
    velocidad += -50
})
