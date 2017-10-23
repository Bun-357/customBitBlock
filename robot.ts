 namespace bunCB {
	 /************************************************************************************************************************************************
	* micro:bit kisra:Lite / :MOVE mini blocks
	************************************************************************************************************************************************/
 /**
     * Drives forwards. Call stop to stop
     */
    //% subcategory=RobotControl
    //% blockId=RobotControl_forward
    //% block="drive forward"
    export function forward(): void {
        pins.digitalWritePin(DigitalPin.P16, 1)
		pins.digitalWritePin(DigitalPin.P15, 1)
		pins.digitalWritePin(DigitalPin.P0, 0)
		pins.digitalWritePin(DigitalPin.P1, 0)
    }
 }
	