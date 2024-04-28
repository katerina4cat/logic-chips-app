import { ChipInfo } from "../../../Structs/ChipInfo";

export interface delayedSending {
    deletingChip: delayedDeleting[];
    savingChip: delayedChipSaving[];
    createSave: delayedCreatingSave[];
}

export enum delayedTypes {
    Deleting,
    Saving,
    Creating,
}

interface delayedDeleting {
    saves: string;
    title: string;
    added?: Date;
}
interface delayedChipSaving {
    saves: string;
    chip: ChipInfo;
    added?: Date;
}
interface delayedCreatingSave {
    title: string;
    added?: Date;
}

const saved = JSON.parse(
    localStorage.getItem("Data:Delayed") ||
        `{"deletingChip":[],"savingChip":[],"createSave":[]}`
) as delayedSending;

export const addDelayedSending = (
    data: delayedDeleting | delayedChipSaving | delayedCreatingSave,
    type: delayedTypes
) => {
    data.added = new Date(new Date().getTime());
    switch (type) {
        case delayedTypes.Deleting:
            saved.deletingChip.push(data as delayedDeleting);
            break;
        case delayedTypes.Saving:
            saved.savingChip.push(data as delayedChipSaving);
            break;
        case delayedTypes.Creating:
            saved.createSave.push(data as delayedCreatingSave);
            break;
    }
    localStorage.setItem("Data:Delayed", JSON.stringify(saved));
};
