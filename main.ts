input.onSound(DetectedSound.Loud, function () {
    if (state == 3) {
        clap_count += 1
    }
})
input.onGesture(Gesture.Shake, function () {
    if (state == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(1000)
        state = 2
    }
})
let clap_count = 0
let state = 0
state = 0
music.playMelody("C - C D E F E C ", 400)
led.setBrightness(0)
basic.showIcon(IconNames.Happy)
basic.pause(100)
led.setBrightness(86)
basic.pause(100)
led.setBrightness(158)
basic.pause(100)
led.setBrightness(210)
basic.pause(100)
led.setBrightness(255)
basic.pause(1000)
basic.clearScreen()
basic.showString("Hello!")
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
basic.pause(5000)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # . # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    . # # # #
    . # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    . # # # #
    . # # # #
    . # # # #
    . # # # #
    . # # # #
    `)
basic.showLeds(`
    . . # # #
    . . # # #
    . . # # #
    . # # # #
    . # # # #
    `)
basic.showLeds(`
    . . # # #
    . . # # #
    . . # # #
    . . # # #
    . . # # #
    `)
basic.showLeds(`
    . . . # #
    . . . # #
    . . . # #
    . . # # #
    . . # # #
    `)
basic.showLeds(`
    . . . # #
    . . . # #
    . . . # #
    . . . # #
    . . . # #
    `)
basic.showLeds(`
    . . . . #
    . . . . #
    . . . . #
    . . . # #
    . . . # #
    `)
basic.showLeds(`
    . . . . #
    . . . . #
    . . . . #
    . . . . #
    . . . . #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . #
    . . . . #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . # .
    . . . . #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . # .
    . . . . #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.pause(1000)
basic.clearScreen()
basic.showString("Happy Birthday Nick!")
basic.showString("Please Calibrate")
basic.showString("Shake!")
state = 1
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (state == 3) {
        if (clap_count == 5) {
            state = 4
        }
    }
})
basic.forever(function () {
    if (state == 2) {
        music.playMelody("C D E D F - A G ", 400)
        basic.showString("Wow!")
        basic.showString("Clap")
        state = 3
    }
})
basic.forever(function () {
    if (state == 3) {
        basic.showNumber(clap_count)
    }
})
basic.forever(function () {
    if (state == 4) {
        basic.pause(1000)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 1, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
        basic.showString("Calibrate Complete")
        basic.showString("You May Now Play Dodged It!")
        state = 5
    }
})
basic.forever(function () {
    if (state == 5) {
        basic.showIcon(IconNames.Yes)
    }
})
