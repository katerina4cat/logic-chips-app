export class ChipMinimalInfo {
    name: string;
    inputPins: number;
    outputPins: number;
    constructor(
        name: string,
        inputPins: number,
        outputPins: number,
        chipStyleType: number
    ) {
        this.name = name;
        this.inputPins = inputPins;
        this.outputPins = outputPins;
        this.chipStyleType = chipStyleType;
    }
    chipStyleType: number;
}
