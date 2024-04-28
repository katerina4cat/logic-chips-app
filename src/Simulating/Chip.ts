import { Pin } from "./Pin";
import { Pos } from "../common/Pos";
import { Wire } from "./Wire";
import { Bus } from "./BaseChips/Bus";
import { ChipInfo, ChipTypes, SubChipInfo } from "../Structs/ChipInfo";
import { action, makeObservable, observable } from "mobx";

let lastChipID = Date.now();

export class Chip {
    id: number;
    @observable name: string;
    @observable color: string;
    chipType = ChipTypes.Default;

    @observable input: Pin[];
    @observable output: Pin[];
    @observable subChips: Chip[];
    @observable buses: Bus[];
    @observable wires: Wire[];

    isBase = false;
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
    @action updatedOutputs() {
        this.subChips.forEach((chip) => chip.updatedOutputs());
    }

    /**
     * Конвертирует текущий объект в JSON объект для сохранения как дочерний чип
     * @returns
     */
    toSubChipInfo = () => new SubChipInfo(this.id, this.name, this.position);

    /**
     * Конвертирует текущий объект в JSON объект для сохранения как дочерний чип
     * @returns
     */
    toChipInfo = () =>
        new ChipInfo(
            this.name,
            this.chipType,
            this.color,
            this.input.map((pin) => pin.toPinInfo()),
            this.output.map((pin) => pin.toPinInfo()),
            this.wires.map((wire) => wire.toPinInfo()),
            this.subChips.map((chip) => chip.toSubChipInfo()),
            this.buses.map((bus) => bus.toBusInfo()),
            new Pos(window.innerWidth, window.innerHeight)
        );
}
