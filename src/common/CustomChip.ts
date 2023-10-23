import { ChipModel } from "./ChipModel";
import { AND } from "./AND";
import { NOT } from "./NOT";
import { Wire } from "./Wire";

export class CustomChip extends ChipModel {
    override SendInput(Connection: Wire) {
        Connection.Target.State = Connection.Source.State;
    }

    override StartChipLogic() {
        if (this.IsBasedChip) this.StartChipLogic();
        else
            for (const subChip of this.SubChipsObject) subChip.StartChipLogic();
        return true;
    }
}

export function CreateBaseChip(chipName: string, chipID: number): ChipModel {
    switch (chipName) {
        case AND.name:
            return new AND(chipID);
        case NOT.name:
            return new NOT(chipID);
        default:
            return CustomChip.FromJSON(chipName, chipID);
    }
}
