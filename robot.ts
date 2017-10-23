 /**
     * Drives forwards. Call stop to stop
     */
    //% block="drive forward"
    export function forward(): void {
        pins.digitalWritePin(DigitalPin.P16, 1)
		pins.digitalWritePin(DigitalPin.P15, 1)
		pins.digitalWritePin(DigitalPin.P0, 0)
		pins.digitalWritePin(DigitalPin.P1, 0)
    }
	