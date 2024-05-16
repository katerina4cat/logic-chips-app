import { Pin } from "./Pin";
import { Pos } from "../common/Pos";
import { Wire } from "./Wire";
import { Bus } from "./BaseChips/BUS";
import {
    ChipInfo,
    ChipTypes,
    SubChipInfo,
} from "@shared/models/saves/ChipInfo";
import { action, makeObservable, observable } from "mobx";
import { DefaultChip } from "../ViewModel/EditPage/ChipViews/Chips/DefaultChip";
import { EightSegmentChip } from "../ViewModel/EditPage/ChipViews/Chips/EightSegmentChip";

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
     * Создаёт новый элемент для отображения на основе текущего чипа
     * @returns
     */
    createElement = () => {
        switch (this.chipType) {
            case ChipTypes.EightSegment:
                return <EightSegmentChip chip={this} key={this.id} />;
            default:
                return <DefaultChip chip={this} key={this.id} />;
        }
    };

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
