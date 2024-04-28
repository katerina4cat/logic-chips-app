import { ChipInfo } from "../../Structs/ChipInfo";
import { sender } from "../ApiManager";
import {
    addDelayedSending,
    delayedTypes,
} from "../Models/common/delayedSending";
import { SyncResModel } from "../Models/response/ChipResModel";

export const createSave = async (saveName: string) => {
    try {
        const result = await sender.post("/api/saves/createSave", {
            title: saveName,
        });
        if (result.status == 200) {
            return true;
        }
    } catch (err) {
        console.log(err);
    }
    addDelayedSending({ title: saveName }, delayedTypes.Creating);
    return false;
};

export const createSaves = async (saveNames: string[]) => {
    try {
        const result = await sender.post("/api/saves/createSaves", {
            titles: saveNames,
        });
        if (result.status == 200) {
            return true;
        }
    } catch (err) {
        console.log(err);
    }
    saveNames.forEach((saveName) =>
        addDelayedSending({ title: saveName }, delayedTypes.Creating)
    );
    return false;
};

export const saveChip = async (saveName: string, chipToSave: ChipInfo) => {
    try {
        const result = await sender.post("/api/saves/saveChip", {
            saves: saveName,
            chp: chipToSave,
        });
        if (result.status == 200) {
            return true;
        }
    } catch (err) {
        console.log(err);
    }
    addDelayedSending(
        { title: saveName, chip: chipToSave },
        delayedTypes.Saving
    );
    return false;
};

export const deleteChip = async (saveName: string, chipName: string) => {
    try {
        const result = await sender.post("/api/saves/deleteChip", {
            saves: saveName,
            title: chipName,
        });
        if (result.status == 200) {
            return true;
        }
    } catch (err) {
        console.log(err);
    }
    addDelayedSending(
        { title: chipName, saves: saveName },
        delayedTypes.Deleting
    );
    return false;
};

export const getSyncChanges = async (lastLoadDateTime: Date) => {
    const result = await sender.post("/api/saves/getSync", {
        lastLoadDateTime: lastLoadDateTime,
    });
    if (result.status == 200) {
        return result.data as SyncResModel[];
    }
    return false;
};
