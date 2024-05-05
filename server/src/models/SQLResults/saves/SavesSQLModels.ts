import { Pos } from "@shared/models/common/Pos";
import { ChipInfo, SubChipInfo } from "@shared/models/saves/ChipInfo";
import { int2hex } from "@shared/models/common/Colors";
import { PinInfo } from "@shared/models/saves/PinInfo";
import { BusInfo } from "@shared/models/saves/BusInfo";
import { WireInfo } from "@shared/models/saves/WireInfo";
import { RowDataPacket } from "mysql2";

export class ChipSQLModel {
    title: string;
    chipName: string;
    lastEdit: Date;
    color: number;
    chipStyle: number;
    screenX: number;
    screenY: number;
    inputPins: PinInfo[];
    outputPins: PinInfo[];
    subChips: SubChipInfo[];
    buses: BusInfo[];
    wires: WireInfo[];
    static construct = (obj: ChipSQLModel) =>
        new ChipSQLModel(
            obj.title,
            obj.chipName,
            obj.lastEdit,
            obj.color,
            obj.chipStyle,
            obj.screenX,
            obj.screenY,
            obj.inputPins,
            obj.outputPins,
            obj.subChips,
            obj.buses,
            obj.wires
        );
    constructor(
        title: string,
        chipName: string,
        lastEdit: Date,
        color: number,
        chipStyle: number,
        screenX: number,
        screenY: number,
        inputPins: PinInfo[],
        outputPins: PinInfo[],
        subChips: SubChipInfo[],
        buses: BusInfo[],
        wires: WireInfo[]
    ) {
        this.title = title;
        this.chipName = chipName;
        this.lastEdit = lastEdit;
        this.color = color;
        this.chipStyle = chipStyle;
        this.screenX = screenX;
        this.screenY = screenY;
        this.inputPins = inputPins;
        this.outputPins = outputPins;
        this.subChips = subChips;
        this.buses = buses;
        this.wires = wires;
    }

    toChipInfo = () =>
        new ChipInfo(
            this.chipName,
            this.chipStyle,
            int2hex(this.color),
            this.inputPins,
            this.outputPins,
            this.wires,
            this.subChips,
            this.buses,
            new Pos(this.screenX, this.screenY),
            this.lastEdit
        );
}

export interface SavingSQLModel {
    title: string;
    created: Date;
    lastEdit: Date;
    wheelConfig: string[][];
}

export interface DeletedSQLModel {
    title: string;
    chipName: string;
    deletedAt: Date;
}

export interface ChipSaveSQLModel extends RowDataPacket {
    lastEdit: Date;
}
