 namespace bunCB {
	 /************************************************************************************************************************************************
	* micro:bit kisra:Lite / :MOVE mini blocks
	************************************************************************************************************************************************/
 /**
     * Drives forwards. Call stop to stop
	 * @param speed speeds when move
     */
    //% subcategory=RobotControl
    //% blockId=RobotControl_forward
    //% block="drive forward %speed|speeds" color=120
    export function forward(speed: number): void {
        // pins.digitalWritePin(DigitalPin.P16, 1)
		// pins.digitalWritePin(DigitalPin.P15, 1)
		pins.analogWritePin(AnalogPin.P16, speed)
		pins.analogWritePin(AnalogPin.P15, speed)
		pins.digitalWritePin(DigitalPin.P0, 0)
		pins.digitalWritePin(DigitalPin.P1, 0)
    }
	
	/**
     * Drives back. Call stop to stop
     */
    //% subcategory=RobotControl
    //% blockId=RobotControl_backward
    //% block="drive back" color=60
    export function backward(): void {
        pins.digitalWritePin(DigitalPin.P16, 0)
		pins.digitalWritePin(DigitalPin.P15, 0)
		pins.digitalWritePin(DigitalPin.P0, 1)
		pins.digitalWritePin(DigitalPin.P1, 1)
    }
	/**
     * Drives spin left. Call stop to stop
     */
    //% subcategory=RobotControl
    //% blockId=RobotControl_left
    //% block="spin left" color=180
    export function spinLeft(): void {
        pins.digitalWritePin(DigitalPin.P16, 0)
		pins.digitalWritePin(DigitalPin.P15, 1)
		pins.digitalWritePin(DigitalPin.P0, 1)
		pins.digitalWritePin(DigitalPin.P1, 0)
    }
	/**
     * Drives spin right. Call stop to stop
     */
    //% subcategory=RobotControl
    //% blockId=RobotControl_right
    //% block="spin right" color=240
    export function spinRight(): void {
        pins.digitalWritePin(DigitalPin.P16, 1)
		pins.digitalWritePin(DigitalPin.P15, 0)
		pins.digitalWritePin(DigitalPin.P0, 0)
		pins.digitalWritePin(DigitalPin.P1, 1)
    }
	/**
     * Drives stop
     */
    //% subcategory=RobotControl
    //% blockId=RobotControl_stop
    //% block="drive stop" color=360
    export function stop(): void {
        pins.digitalWritePin(DigitalPin.P16, 0)
		pins.digitalWritePin(DigitalPin.P15, 0)
		pins.digitalWritePin(DigitalPin.P0, 0)
		pins.digitalWritePin(DigitalPin.P1, 0)
    }
 }
	