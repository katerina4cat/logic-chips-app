import { Pin } from "./Pin";
import { Colors, Pos, Wire } from "./Wire";
import { ChipSaveStruct, CreateChip, LoadChipInfo } from "./LoadSave";

export class ChipModel {
    Name: string;
    Colour: string;
    ID: number;
    InputPins: Pin[];
    OutputPins: Pin[];
    SubChips: ChipModel[];
    Connections: Wire[];
    Position: Pos[] = [];

    IsBasedChip: boolean = false;

    constructor(
        Name: string,
        ID: number = 0,
        Colour: string = "#000",
        InputPins: Array<Pin> = [],
        OutputPins: Array<Pin> = [],
        SubChips: Array<ChipModel> = [],
        Connections: Array<Wire> = [],
        Position: Array<Pos> = []
    ) {
        this.Name = Name;
        this.Colour = Colour;
        this.InputPins = InputPins;
        this.OutputPins = OutputPins;
        this.Connections = Connections;
        this.SubChips = SubChips;
        this.ID = ID;
        this.Position = Position;
    }

    RefreshedLogic = false;

    InitilizeWires(ChipInfo: ChipSaveStruct) {
        // Инициализация связи всех пинов загружаемого чипа
        ChipInfo.Connections.map((wireInfo) => {
            const buff: { SourcePin: any; TargetPin: any } = {
                SourcePin: undefined,
                TargetPin: undefined,
            };

            // Если провод выходит из пина текущего чипа
            if (wireInfo.Source.SubChipID == 0)
                buff.SourcePin = this.InputPins.filter(
                    (pin) => pin.ID == wireInfo.Source.PinID
                )[0];
            // Если провод выходит из пина дочернего чипа
            else {
                buff.SourcePin = this.SubChips.filter(
                    (chip) => chip.ID == wireInfo.Source.SubChipID
                )[0].OutputPins.filter(
                    (pin) => pin.ID == wireInfo.Source.PinID
                )[0];
            }
            // Если провод заходит в пин текущего чипа
            if (wireInfo.Target.SubChipID == 0)
                buff.TargetPin = this.OutputPins.filter(
                    (pin) => pin.ID == wireInfo.Target.PinID
                )[0];
            // Если провод заходит в пин дочернего чипа
            else
                buff.TargetPin = this.SubChips.filter(
                    (chip) => chip.ID == wireInfo.Target.SubChipID
                )[0].InputPins.filter(
                    (pin) => pin.ID == wireInfo.Target.PinID
                )[0];

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

            this.Connections.push(
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
        this.Connections = this.Connections.sort((wire) =>
            wire.Target.Chip == this ? 2 : wire.Source.Chip == this ? 0 : 1
        );

        this.Connections.map((wire) => {
            if (wire.Target.Chip.IsBasedChip) {
                wire.Target.State.forEach((pinStates) =>
                    pinStates.addListener(wire.Target.Chip)
                );
            }
        });
    }

    RefreshLogic() {}
}

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
            new Pin(
                true,
                res,
                pinInfo.Name,
                pinInfo.ID,
                -(pinInfo.PositionY - 4.75) / 9.5
            )
        )
    );
    // Инициализация пинов выходов загружаемого чипа
    ChipInfo.OutputPins.map((pinInfo) =>
        res.OutputPins.push(
            new Pin(
                false,
                res,
                pinInfo.Name,
                pinInfo.ID,
                -(pinInfo.PositionY - 4.75) / 9.5
            )
        )
    );
    // Инициализация дочерних чипов загружаемого чипа
    ChipInfo.SubChips.map((chipInfo) =>
        res.SubChips.push(
            CreateChip(
                chipInfo.Name,
                chipInfo.ID,
                chipInfo.Points.map((pos) => ({
                    X: -(pos.X - 8.35) / 16.7,
                    Y: -(pos.Y - 4.75) / 9.5,
                }))
            )
        )
    );
    res.InitilizeWires(ChipInfo);
    res.SubChips.forEach((chip) => {
        if (!chip.IsBasedChip && chip.Name != "BUS")
            chip.InitilizeWires(LoadChipInfo(chip.Name));
        chip.InputPins.forEach((IPin) =>
            removeDuplicatesByKey(IPin.State, "id")
        );
        chip.OutputPins.forEach((IPin) =>
            removeDuplicatesByKey(IPin.State, "id")
        );
    });
    res.InputPins.forEach((IPin) => removeDuplicatesByKey(IPin.State, "id"));
    res.OutputPins.forEach((IPin) => removeDuplicatesByKey(IPin.State, "id"));
    return res;
}
function removeDuplicatesByKey(array: any[], key: string) {
    const uniqueKeys = new Set();

    for (const item of array) {
        if (!uniqueKeys.has(item[key])) {
            uniqueKeys.add(item[key]);
        } else {
            array.splice(array.indexOf(item), 1);
        }
    }
}
