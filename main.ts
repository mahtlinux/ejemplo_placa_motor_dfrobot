input.onButtonPressed(Button.A, function () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 150)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 150)
})
input.onButtonPressed(Button.AB, function () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 150)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 150)
})
input.onButtonPressed(Button.B, function () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 0)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 150)
})
basic.forever(function () {
	
})
