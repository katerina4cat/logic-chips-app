import { BusMinimalInfo } from "../../../Structs/BusInfo";
import { PinSaveInfo } from "../../../Structs/PinInfo";
import { WireSaveInfo } from "../../../Structs/WireSaveInfo";
import { Pos } from "../../../common/Pos";

export interface ChipResModel {
    color: number;
    lastEdit: Date;
    chipStyle: number;
    chipName: string;
    screenX: number;
    screenY: number;
    inputPins: PinSaveInfo[];
    outputPins: PinSaveInfo[];
    subChips: { name: string; id: number; position: Pos }[];
    buses: BusMinimalInfo[];
    wires: WireSaveInfo[];
}

export interface SyncResModel {
    saveName: string;
    created?: Date;
    lastEdit: Date;
    deleting: string[];
    creatingChips: ChipResModel[];
}
