import { Pin } from "./Pin";
import { Pos } from "../common/Pos";
import { Wire } from "./Wire";
import { Bus } from "./BaseChips/Bus";
import { ChipTypes } from "../Structs/ChipMinimalInfo";
import { makeObservable, observable } from "mobx";

let lastChipID = Date.now();

export class Chip {
    id: number;
    @observable name: string;
    @observable subChips: Chip[];
    @observable buses: Bus[];
    @observable wires: Wire[];
    @observable input: Pin[];
    @observable output: Pin[];
    @observable color: string;
    isBase = false;
    chipType = ChipTypes.Default;
    @observable position: Pos;
    @observable selected: boolean;
    constructor(
        subChips: Chip[] = [],
        id?: number,
        name = "",
        color: string = "#fff",
        position = new Pos(),
        buses: Bus[] = []
    ) {
        makeObservable(this);
        this.id = id != undefined ? id : lastChipID;
        lastChipID++;
        this.name = name;
        this.color = color;
        this.subChips = subChips;
        this.wires = [];
        this.input = [];
        this.output = [];
        this.position = position;
        this.selected = false;
        this.buses = buses;
    }
    updatedOutputs() {
        this.subChips.forEach((chip) => chip.updatedOutputs());
    }
}
