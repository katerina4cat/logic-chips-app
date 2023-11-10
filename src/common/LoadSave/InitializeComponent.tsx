import { ChipModel } from "../Simulating/ChipModel";
import { CustomChip } from "../Simulating/CustomChip";
import { EditChip } from "../Simulating/EditChip";
import { Pin } from "../Simulating/Pin";
import { Pos, Wire, Colors } from "../Simulating/Wire";
import { ChipSaveStruct, CreateChip } from "./LoadSave";

export function InitilizeChipModel(
    ChipInfo: ChipSaveStruct,
    chipID: number = 0,
    isEditChip: boolean
) {
    const objectRef: { current: null | ChipModel } = {
        current: null,
    };
    const ChipObject = isEditChip ? (
        <EditChip
            VisiblePinTitles={undefined}
            VisibleAllPinTitles={undefined}
            chipID={chipID}
            chipName={ChipInfo.Name}
            chipColor={ChipInfo.Colour}
            Position={[]}
            ref={(ref) => {
                console.log("ref");
                console.log(ref?.ID);
                objectRef.current = ref;
            }}
        />
    ) : (
        <CustomChip
            VisiblePinTitles={undefined}
            VisibleAllPinTitles={undefined}
            chipID={chipID}
            chipName={ChipInfo.Name}
            chipColor={ChipInfo.Colour}
            Position={[]}
            ref={(ref) => {
                objectRef.current = ref;
            }}
        />
    );
    if (!objectRef.current) {
        throw `Не удалось загрузить сохранение чипа ${ChipInfo.Name}!
        Не удалось получить ссылку на объект загружаемого чипа! Initialize -> 15 line`;
    }
    // Инициализация пинов входов загружаемого чипа
    ChipInfo.InputPins.map((pinInfo) => {
        if (!objectRef.current) {
            throw `Не удалось загрузить сохранение чипа ${ChipInfo.Name}!
        Не удалось получить ссылку на объект загружаемого чипа! Initialize -> 15 line`;
        }
        objectRef.current.InputPins.push(
            new Pin(true, objectRef.current, pinInfo.Name, pinInfo.ID, {
                X: 0,
                Y: pinInfo.PositionY,
            })
        );
    });
    // Инициализация пинов выходов загружаемого чипа
    ChipInfo.OutputPins.map((pinInfo) => {
        if (!objectRef.current) {
            throw `Не удалось загрузить сохранение чипа ${ChipInfo.Name}!
            Не удалось получить ссылку на объект загружаемого чипа! Initialize -> 15 line`;
        }
        objectRef.current.OutputPins.push(
            new Pin(false, objectRef.current, pinInfo.Name, pinInfo.ID, {
                X: 0,
                Y: pinInfo.PositionY,
            })
        );
    });
    // Инициализация дочерних чипов загружаемого чипа
    ChipInfo.SubChips.map((chipInfo) => {
        if (!objectRef.current) {
            throw `Не удалось загрузить сохранение чипа ${ChipInfo.Name}!
        Не удалось получить ссылку на объект загружаемого чипа! Initialize -> 15 line`;
        }
        const buff = CreateChip({
            chipName: chipInfo.Name,
            chipID: chipInfo.ID,
            Points: chipInfo.Points,
        });
        console.log(buff);
        objectRef.current.SubChips.push();
    });
    // Инициализация связи всех пинов загружаемого чипа
    ChipInfo.Connections.map((wireInfo) => {
        if (!objectRef.current) {
            throw `Не удалось загрузить сохранение чипа ${ChipInfo.Name}!
        Не удалось получить ссылку на объект загружаемого чипа! Initialize -> 15 line`;
        }
        const buff: { SourcePin: any; TargetPin: any } = {
            SourcePin: undefined,
            TargetPin: undefined,
        };

        // Если провод выходит из пина текущего чипа
        if (wireInfo.Source.SubChipID == 0)
            buff.SourcePin = objectRef.current.InputPins.filter(
                (pin) => pin.ID == wireInfo.Source.PinID
            )[0];
        // Если провод выходит из пина дочернего чипа
        else {
            buff.SourcePin = objectRef.current.SubChips.filter(
                (chip) => chip.ID == wireInfo.Source.SubChipID
            )[0].OutputPins.filter((pin) => pin.ID == wireInfo.Source.PinID)[0];
        }
        // Если провод заходит в пин текущего чипа
        if (wireInfo.Target.SubChipID == 0)
            buff.TargetPin = objectRef.current.OutputPins.filter(
                (pin) => pin.ID == wireInfo.Target.PinID
            )[0];
        // Если провод заходит в пин дочернего чипа
        else
            buff.TargetPin = objectRef.current.SubChips.filter(
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

        objectRef.current.Wires.push(
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
    objectRef.current.Wires = objectRef.current.Wires.sort((wire) =>
        wire.Target.Chip == objectRef.current
            ? 2
            : wire.Source.Chip == objectRef.current
            ? 0
            : 1
    );

    objectRef.current.Wires.map((wire) => {
        if (wire.Target.Chip.IsBasedChip) {
            wire.Target.State.addListener(wire.Target.Chip);
        }
    });
    return ChipObject;
}
