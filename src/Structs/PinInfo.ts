import { BusPin, Pin } from "../Simulating/Pin";
import { Pos } from "../common/Pos";

export class PinSaveInfo {
    id: number;
    chipID: number;
    name: string;
    colorTitle: string;
    position: Pos;
    canUpdatePropagate?: boolean;
    distanceFromZero?: number;
    constructor(
        id: number,
        name: string,
        chipID: number,
        colorTitle: string,
        position: Pos,
        distanceFromZero?: number
    ) {
        this.id = id;
        this.name = name;
        this.chipID = chipID;
        this.colorTitle = colorTitle;
        this.position = position;
        this.distanceFromZero = distanceFromZero;
    }
    static fromPin = (pin: Pin) => {
        return new PinSaveInfo(
            pin.id,
            pin.name,
            pin.chip.id,
            pin.color.title,
            pin.position,
            pin instanceof BusPin ? pin.distanceFromZero : undefined
        );
    };
}
