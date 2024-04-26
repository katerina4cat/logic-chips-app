export interface ChipModel {
    color: string;
    chipStyle: number;
    title: string;
    screenX: number;
    screenY: number;
    inputPins?: object;
    outputPins?: object;
    subChips?: object;
    buses?: object;
    wires?: object;
}
