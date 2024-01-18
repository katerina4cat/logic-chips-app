import { Pos } from "../common/Pos";

export class PinSaveInfo {
    id: number;
    chipID: number;
    name: string;
    colorTitle: string;
    position: Pos;
    canUpdatePropagate?: boolean;
    constructor(
        id: number,
        name: string,
        chipID: number,
        colorTitle: string,
        position: Pos
    ) {
        this.id = id;
        this.name = name;
        this.chipID = chipID;
        this.colorTitle = colorTitle;
        this.position = position;
    }
}
