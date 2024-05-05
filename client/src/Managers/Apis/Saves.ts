import { ChipInfo } from "@shared/models/saves/ChipInfo";
import { sendPost } from "../ApiManager";
import {
    addDelayedSending,
    delayedTypes,
} from "@shared/models/saves/delayedSending";
import { roots } from "@shared/Roots";
import {
    clientCreateSave,
    clientDeleteChip,
    clientSaveChip,
    clientSyncChanges,
    clientСreateSaves,
    serverSyncChanges,
} from "@shared/models/saves/exchangeTypes";

export const createSave = async (saveName: string) => {
    try {
        const result = await sendPost<clientCreateSave>(
            roots.saves.createSave,
            {
                title: saveName,
            }
        );
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
        const result = await sendPost<clientСreateSaves>(
            roots.saves.createSaves,
            {
                titles: saveNames,
            }
        );
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
        const result = await sendPost<clientSaveChip>(roots.saves.saveChip, {
            saveName: saveName,
            chip: chipToSave,
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
        const result = await sendPost<clientDeleteChip>(
            roots.saves.deleteChip,
            {
                saveName: saveName,
                chipName: chipName,
                deletedAt: new Date(new Date().getTime()),
            }
        );
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
    const result = await sendPost<clientSyncChanges, serverSyncChanges>(
        roots.saves.syncChanges,
        {
            lastLoadDateTime: lastLoadDateTime,
        }
    );
    if (result.status == 200) {
        return result.data;
    }
    return false;
};
