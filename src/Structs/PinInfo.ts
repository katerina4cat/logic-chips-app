export class PinSaveInfo {
    id: number;
    chipID: number;
    name: string;
    colorTitle: string;
    positionY: number;
    constructor(
        id: number,
        name: string,
        chipID: number,
        colorTitle: string,
        positionY: number
    ) {
        this.id = id;
        this.name = name;
        this.chipID = chipID;
        this.colorTitle = colorTitle;
        this.positionY = positionY;
    }
}
