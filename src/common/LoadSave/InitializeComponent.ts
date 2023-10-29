import { ChipModel } from "../Simulating/ChipModel";
import { Pin } from "../Simulating/Pin";
import { Pos, Wire, Colors } from "../Simulating/Wire";
import { ChipSaveStruct, CreateChip } from "./LoadSave";

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
                X: 0,
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
                Colors[wireInfo.ColourThemeName.toLocaleLowerCase()]
            )
        );
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
