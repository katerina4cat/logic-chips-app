import { ChipInfo } from "./ChipInfo";
import { SyncSavesInfo } from "./SyncSavesInfo";

export interface clientCreateSave {
    title: string;
}

export interface clientСreateSaves {
    titles: string[];
}

export interface clientSaveChip {
    saveName: string;
    chip: ChipInfo;
}

export type serverSaveChip = false | SaveChipConflict;
export interface SaveChipConflict {
    saveName: string;
    chip: ChipInfo;
    lastEdit: Date;
}

export interface clientDeleteChip {
    saveName: string;
    chipName: string;
    deletedAt: Date;
}

export interface clientSyncChanges {
    lastLoadDateTime: Date;
}
export type serverSyncChanges = SyncSavesInfo[];
