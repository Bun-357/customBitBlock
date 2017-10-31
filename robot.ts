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
    //% block="drive forward %speed|0-100%" color=120
    export function forward(speed: number): void {
		let speedBit = pins.map(speed,0,100,0,1023)
		pins.analogWritePin(AnalogPin.P16, speedBit)
		pins.analogWritePin(AnalogPin.P15, speedBit)
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
	/**
     * Drives trun left. Call stop to stop
     */
    //% subcategory=RobotControl
    //% blockId=RobotControl_lefts
    //% block="trun left %speed|0-100% %difference|difference0-100%" color=180
    export function trunLeft(difference: number, speed: number): void {
        let speedBit = pins.map(speed,0,100,0,1023)
		let diffBit = (speed - difference)
		if(diffBit < 0){
			diffBit = 0
		}
		diffBit = pins.map(diffBit,0,100,0,1023)
		pins.analogWritePin(AnalogPin.P16, diffBit)
		pins.analogWritePin(AnalogPin.P15, speedBit)
		pins.digitalWritePin(DigitalPin.P0, 0)
		pins.digitalWritePin(DigitalPin.P1, 0)
    }
	/**
     * Drives trun right. Call stop to stop
     */
    //% subcategory=RobotControl
    //% blockId=RobotControl_rights
    //% block="trun right %speed|0-100% %difference|difference0-100%" color=180
    export function trunRight(difference: number, speed: number): void {
        let speedBit = pins.map(speed,0,100,0,1023)
		let diffBit = (speed - difference)
		if(diffBit < 0){
			diffBit = 0
		}
		diffBit = pins.map(diffBit,0,100,0,1023)
		pins.analogWritePin(AnalogPin.P16, speedBit)
		pins.analogWritePin(AnalogPin.P15, diffBit)
		pins.digitalWritePin(DigitalPin.P0, 0)
		pins.digitalWritePin(DigitalPin.P1, 0)
    }
 }
	