import { Colors, Pos, Wire } from "./Wire";
import { chips } from "./chips";
import { AND } from "./AND";
import { NOT } from "./NOT";
import { TRI_STATE_BUFFER } from "./TRI-STATE BUFFER";
import { ChipModel } from "./ChipModel";
import { BUS } from "./BUS";
import { Pin } from "./Pin";

export function CreateChip(
    chipName: string,
    chipID: number,
    Points: Array<Pos> = []
): ChipModel {
    switch (chipName) {
        case AND.name:
            return new AND(chipID, Points);
        case BUS.name:
            return new BUS(chipID, Points);
        case NOT.name:
            return new NOT(chipID, Points);
        case "TRI-STATE BUFFER":
            return new TRI_STATE_BUFFER(chipID, Points);
        default:
            return InitilizeChipModel(LoadChipInfo(chipName), chipID, Points);
    }
}

interface PinInfo {
    Name: string;
    ID: number;
    PositionY: number;
}

interface ChipInfo {
    Name: string;
    ID: number;
    Points: Array<Pos>;
}

interface WireInfo {
    Source: { SubChipID: number; PinID: number };
    Target: { SubChipID: number; PinID: number };
    WirePoints: Array<Pos>;
    ColourThemeName: string;
}

export interface ChipSaveStruct {
    Name: string;
    Colour: string;
    InputPins: Array<PinInfo>;
    OutputPins: Array<PinInfo>;
    SubChips: Array<ChipInfo>;
    Connections: Array<WireInfo>;
}

export function LoadChipInfo(ChipName: string) {
    return chips[ChipName] as ChipSaveStruct;
}
let wireIds = 0;
export function InitilizeChipModel(
    ChipInfo: ChipSaveStruct,
    chipID: number = 0,
    Points?: Array<Pos>
) {
    const res = new ChipModel(
        ChipInfo.Name,
        chipID,
        ChipInfo.Colour,
        undefined,
        undefined,
        undefined,
        undefined,
        Points
    );
    // Инициализация пинов входов загружаемого чипа
    ChipInfo.InputPins.map((pinInfo) =>
        res.InputPins.push(
            new Pin(true, res, pinInfo.Name, pinInfo.ID, {
                X: 0,
                Y: pinInfo.PositionY,
            })
        )
    );
    // Инициализация пинов выходов загружаемого чипа
    ChipInfo.OutputPins.map((pinInfo) =>
        res.OutputPins.push(
            new Pin(false, res, pinInfo.Name, pinInfo.ID, {
                X: window.innerWidth,
                Y: pinInfo.PositionY,
            })
        )
    );
    // Инициализация дочерних чипов загружаемого чипа
    ChipInfo.SubChips.map((chipInfo) =>
        res.SubChips.push(
            CreateChip(chipInfo.Name, chipInfo.ID, chipInfo.Points)
        )
    );
    // Инициализация связи всех пинов загружаемого чипа
    ChipInfo.Connections.map((wireInfo) => {
        const buff: { SourcePin: any; TargetPin: any } = {
            SourcePin: undefined,
            TargetPin: undefined,
        };

        // Если провод выходит из пина текущего чипа
        if (wireInfo.Source.SubChipID == 0)
            buff.SourcePin = res.InputPins.filter(
                (pin) => pin.ID == wireInfo.Source.PinID
            )[0];
        // Если провод выходит из пина дочернего чипа
        else {
            buff.SourcePin = res.SubChips.filter(
                (chip) => chip.ID == wireInfo.Source.SubChipID
            )[0].OutputPins.filter((pin) => pin.ID == wireInfo.Source.PinID)[0];
        }
        // Если провод заходит в пин текущего чипа
        if (wireInfo.Target.SubChipID == 0)
            buff.TargetPin = res.OutputPins.filter(
                (pin) => pin.ID == wireInfo.Target.PinID
            )[0];
        // Если провод заходит в пин дочернего чипа
        else
            buff.TargetPin = res.SubChips.filter(
                (chip) => chip.ID == wireInfo.Target.SubChipID
            )[0].InputPins.filter((pin) => pin.ID == wireInfo.Target.PinID)[0];

        if (buff.SourcePin == undefined || buff.TargetPin == undefined) {
            console.log(buff);
            throw `
            Не удалось загрузить связь между пинами
            ${
                buff.SourcePin
                    ? ""
                    : `Not Founded => Source: chipID=${wireInfo.Source.SubChipID}, pinID = ${wireInfo.Source.PinID}`
            }
            
            ${
                buff.TargetPin
                    ? ""
                    : `Not Founded => Target: chipID=${wireInfo.Target.SubChipID}, pinID = ${wireInfo.Target.PinID}`
            }
            `;
        }

        res.Connections.push(
            new Wire(
                buff.SourcePin,
                buff.TargetPin,
                wireInfo.WirePoints,
                Colors[wireInfo.ColourThemeName.toLocaleLowerCase()],
                wireIds
            )
        );
        wireIds++;
    });
    //Сортировка соеденений в обратном порядке:
    // 1. соеденение с выходом
    // 2. соеденение между дочерними чипами
    // 3. соеденение из входов
    res.Connections = res.Connections.sort((wire) =>
        wire.Target.Chip == res ? 2 : wire.Source.Chip == res ? 0 : 1
    );

    res.Connections.map((wire) => {
        if (wire.Target.Chip.IsBasedChip) {
            wire.Target.State.addListener(wire.Target.Chip);
        }
    });
    return res;
}
