import {
    ChipModel,
    ChipModelRequiredProps,
    CustomChipRequiredProps,
} from "./ChipModel";

export class CustomChip extends ChipModel {
    constructor(props: ChipModelRequiredProps & CustomChipRequiredProps) {
        super(props);
        this.setConfigsChip(
            props.chipName,
            props.chipID,
            props.chipColor,
            props.InputPins,
            props.OutputPins,
            props.SubChips,
            props.Wires,
            props.Position
        );
    }
}
