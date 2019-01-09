// https://makecode.com/extensions/getting-started
// https://makecode.com/defining-blocks

// Created by 1603193B

//% color=190 weight=100 icon="\uf1ec" block="EMC"
namespace EMC {
    //% block
    export namespace mBot {
        export const enum directions {
            Invalid = -2,
            None = -1,
            North = 0,
            NorthEast = 1,
            Clockwise = 2,
            SouthEast = 3,
            South = 4,
            SouthWest = 5,
            AntiClockwise = 6,
            NorthWest = 7
        }

        //% block
        export const radioKeyword: string = "DIR"

        // Assumes left motor to be Motor1
        // Assume right motor ti be Motor2

        export function goForward(speed: number) {
            kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, speed)
            kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, speed)
        }

        export function goBackward(speed: number) {
            kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, speed)
            kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, speed)
        }

        export function turnClockwise(speed: number) {
            kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, speed)
            kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, speed)
        }

        export function turnAnticlockwise(speed: number) {
            kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, speed)
            kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, speed)
        }

        export function leftMotor(motorDir: kitronik_motor_driver.MotorDirection, speed: number) {
            kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, motorDir, speed)
        }

        export function rightMotor(motorDir: kitronik_motor_driver.MotorDirection, speed: number) {
            kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, motorDir, speed)
        }
        export function stopMotors() {
            kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
            kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
        }

        export function testMotor() {
            led.toggleAll()

            kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 100)
            basic.pause(1000)
            kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
            basic.pause(1000)
            kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, 100)
            basic.pause(1000)
            kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
            basic.pause(1000)

            kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, 100)
            basic.pause(1000)
            kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
            basic.pause(1000)
            kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, 100)
            basic.pause(1000)
            kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
            basic.pause(1000)

            led.toggleAll()
        }
    }
}