music.setVolume(200)
input.onButtonPressed(Button.A, function () {
    radio.sendString("g7H2k9Lq1Z")
})

input.onButtonPressed(Button.B, function () {
    radio.sendString("x4R8tB3mJp")
})

radio.onReceivedString(function (received) {
    if (received == "g7H2k9Lq1Z") {
        basic.showString("-")
        music.ringTone(Note.C)
        basic.pause(750)
        music.stopAllSounds()
    } else if (received == "x4R8tB3mJp") {
        basic.showString(".")
        music.ringTone(Note.C)
        basic.pause(250)
        music.stopAllSounds()
    }
    basic.pause(100)
    basic.clearScreen()
})