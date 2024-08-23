input.onButtonPressed(Button.A, function () {
    rekabit.setServoPosition(ServoChannel.S1, 30)
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    rekabit.setServoPosition(ServoChannel.S1, 180)
    basic.pause(2000)
})
rekabit.setServoPosition(ServoChannel.S1, 180)
basic.pause(1000)
basic.forever(function () {
	
})
