import { CreateBaseChip, CustomChip } from "./CustomChip";
import { PinInfo } from "./Pin";
import { Pos, Wire } from "./Wire";
import { chips } from "./chips";

export abstract class ChipModel implements ChipSaveStruct {
    Name: string;
    InputPins: PinInfo[];
    OutputPins: PinInfo[];
    SubChipsObject: ChipModel[];
    SubChips: ChipData[];
    Connections: Wire[];
    Points: Array<Pos> = [];
    Data: any;
    InputCounts = 0;

    Colour: string = "#000";
    IsBasedChip: boolean = false;
    ID: number = Date.now();

    public static FromJSON(chipName: string, chipID: number = 0) {
        if (!(chipName in chips)) {
            throw "Chip not found! " + chipName;
        }
        const res = new CustomChip(
            JSON.parse(chips[chipName]) as ChipSaveStruct
        );
        res.ID = chipID;
        if (chipID == 0) {
            res.InputPins.forEach((pin) => (pin.State = 0));
        }
        res.InputPins.forEach((pin) => (pin.Chip = res));
        res.OutputPins.forEach((pin) => (pin.Chip = res));
        res.SubChipsObject = res.SubChips.map((chip) =>
            CreateBaseChip(chip.Name, chip.ID)
        );
        res.Connections = res.Connections.sort((e) =>
            e.Source.PinType == 1 ? 2 : e.Target.PinType == 2 ? 0 : 1
        ).map((e) => {
            e.Source.Chip = res.SubChipsObject.filter(
                (chip) => chip.ID == e.Source.SubChipID
            )[0];
            e.Target.Chip = res.SubChipsObject.filter(
                (chip) => chip.ID == e.Target.SubChipID
            )[0];
            return e;
        });
        return res;
    }

    public RecurseState() {
        this.Connections.map((e) => {
            // Чип соеденён с входом текущего чипа
            if (e.Source.SubChipID == 0 && e.Target.SubChipID != 0) {
                e.Target.Chip.InputPins = e.Target.Chip.InputPins.map((pin) => {
                    if (pin.ID == e.Target.PinID)
                        pin.State = this.InputPins.filter(
                            (pin) => pin.ID == e.Source.PinID
                        )[0].State;
                    return pin;
                });
                e.Target.Chip.AddCount();
            }
            // Чип соеденён с другим чипом
            if (e.Source.SubChipID != 0 && e.Target.SubChipID != 0) {
                e.Target.Chip.InputPins = e.Target.Chip.InputPins.map((pin) => {
                    if (pin.ID == e.Target.PinID)
                        pin.State = e.Source.Chip.OutputPins.filter(
                            (pin) => pin.ID == e.Source.PinID
                        )[0].State;
                    return pin;
                });
                e.Target.Chip.AddCount();
            }
            // Чип соедёнен с выходом текущего чипа
            if (e.Source.SubChipID != 0 && e.Target.SubChipID == 0) {
                this.OutputPins = this.OutputPins.map((pin) => {
                    if (pin.ID == e.Target.PinID)
                        pin.State = e.Source.Chip.OutputPins.filter(
                            (pin) => pin.ID == e.Source.PinID
                        )[0].State;
                    return pin;
                });
            }
        });
    }

    AddCount() {
        this.InputCounts++;
        if (this.InputCounts >= this.InputPins.length) {
            this.RecurseState();
            this.InputCounts = 0;
        }
    }

    constructor(props: {
        Name?: string;
        Colour?: string;
        InputPins?: Array<PinInfo>;
        OutputPins?: Array<PinInfo>;
        SubChips?: Array<ChipData>;
        Connections?: Array<Wire>;
        chipID?: number;
    }) {
        this.Name = props.Name || "";
        this.Colour = props.Colour || "#000";
        this.InputPins = props.InputPins || [];
        this.OutputPins = props.OutputPins || [];
        this.SubChips = props.SubChips || [];
        this.Connections = props.Connections || [];
        this.SubChipsObject = [];
        this.ID = props.chipID || 0;
    }
}

export interface ChipSaveStruct {
    Name: string;
    Colour: string;
    InputPins: Array<PinInfo>;
    OutputPins: Array<PinInfo>;
    SubChips: Array<ChipData>;
    Connections: Array<Wire>;
}

export interface ChipData {
    Name: string;
    ID: number;
    Points: Array<Pos>;
    Data: any;
}
