import { Pin } from "./Pin";
import { Pos, Wire, fixPos } from "./Wire";

export class ChipModel {
    Name: string;
    ID: number;
    Colour: string;
    InputPins: Pin[];
    OutputPins: Pin[];
    SubChips: ChipModel[];
    Connections: Wire[];
    Position: Pos[] = [];

    IsBasedChip: boolean = false;

    constructor(
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
        this.Connections = Connections;
        this.SubChips = SubChips;
        this.ID = ID;
        this.Position = Position.map((pos) => fixPos(pos));
    }

    RefreshedLogic = false;

    RefreshLogic() {}
}
