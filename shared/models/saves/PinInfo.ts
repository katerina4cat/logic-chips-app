import { Pos } from "../common/Pos";

export class PinInfo {
    id: number;
    name: string;
    chipID: number;
    colorID: number;
    position: Pos;
    distanceFromZero?: number;
    constructor(
        id: number,
        name: string,
        chipID: number,
        colorID: number,
        position: Pos,
        distanceFromZero?: number
    ) {
        this.id = id;
        this.name = name;
        this.chipID = chipID;
        this.colorID = colorID;
        this.position = position;
        this.distanceFromZero = distanceFromZero;
    }
}
