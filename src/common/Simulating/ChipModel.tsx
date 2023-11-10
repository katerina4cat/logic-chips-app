import { Component } from "react";
import { Pin } from "./Pin";
import { Pos, Wire, fixPos } from "./Wire";

export interface ChipModelRequiredProps {
    VisiblePinTitles: boolean | undefined;
    VisibleAllPinTitles: boolean | undefined;
    chipID: number;
    Position: Array<Pos>;
    chipName?: string;
}
export interface CustomChipRequiredProps {
    chipName?: string;
    chipColor?: string;
    InputPins?: Pin[];
    OutputPins?: Pin[];
    Wires?: Wire[];
    SubChips?: ChipModel[];
}

interface CurrentChipStates {
    SelectedSubChips: ChipModel[];
    SetupsInput: number;
    VisiblePinTitles: boolean;
    VisibleAllPinTitles: boolean;
    OutputPins: Pin[];
    ChipLoaded: boolean;
}

export class ChipModel extends Component<
    ChipModelRequiredProps & CustomChipRequiredProps,
    CurrentChipStates
> {
    Name: string;
    ID: number;
    Colour: string;
    InputPins: Pin[];
    OutputPins: Pin[];
    SubChips: ChipModel[];
    Wires: Wire[];
    Position: Pos[] = [];

    IsBasedChip: boolean = false;

    state: Readonly<CurrentChipStates> = {
        SelectedSubChips: [],
        SetupsInput: 0,
        VisiblePinTitles:
            this.props.VisiblePinTitles != undefined
                ? this.props.VisiblePinTitles
                : true,
        VisibleAllPinTitles:
            this.props.VisibleAllPinTitles != undefined
                ? this.props.VisibleAllPinTitles
                : true,
        OutputPins: [],
        ChipLoaded: false,
    };

    constructor(props: ChipModelRequiredProps) {
        super(props);
        this.Name = "";
        this.Colour = "";
        this.InputPins = [];
        this.OutputPins = [];
        this.Wires = [];
        this.SubChips = [];
        this.ID = 0;
        this.Position = [];
    }

    setConfigsChip(
        Name: string = "",
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
        this.Wires = Connections;
        this.SubChips = SubChips;
        this.ID = ID;
        this.Position = Position.map((pos) => fixPos(pos));
    }

    RefreshedLogic = false;

    RefreshLogic() {}
}
