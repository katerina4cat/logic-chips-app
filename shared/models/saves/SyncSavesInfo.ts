import { ChipInfo } from "./ChipInfo";
import { DeletingSync } from "./DeletingSync";

export class SyncSavesInfo {
    saveName: string;
    created?: Date;
    lastEdit: Date;
    deleting: DeletingSync[];
    creatingChips: ChipInfo[];
    constructor(
        saveName: string,
        deleting: DeletingSync[],
        creatingChips: ChipInfo[],
        lastEdit: Date,
        created?: Date
    ) {
        this.saveName = saveName;
        this.created = created;
        this.lastEdit = lastEdit;
        this.deleting = deleting;
        this.creatingChips = creatingChips;
    }
}
