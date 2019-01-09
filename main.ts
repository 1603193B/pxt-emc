// https://makecode.com/extensions/getting-started
// https://makecode.com/defining-blocks

//% color=190 weight=100 icon="\uf1ec" block="EMC"
namespace EMC {
    export namespace mBot {
        export function leftMotor() {
            //TODO
        }

        export function rightMotor() {
            //TODO
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