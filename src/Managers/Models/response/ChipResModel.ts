import { BusInfo } from "../../../Structs/BusInfo";
import { PinInfo } from "../../../Structs/PinInfo";
import { WireInfo } from "../../../Structs/WireInfo";
import { Pos } from "../../../common/Pos";

export interface ChipResModel {
    color: number;
    lastEdit: Date;
    chipStyle: number;
    chipName: string;
    screenX: number;
    screenY: number;
    inputPins: PinInfo[];
    outputPins: PinInfo[];
    subChips: { name: string; id: number; position: Pos }[];
    buses: BusInfo[];
    wires: WireInfo[];
}

export interface SyncResModel {
    saveName: string;
    created?: Date;
    lastEdit: Date;
    deleting: string[];
    creatingChips: ChipResModel[];
}
