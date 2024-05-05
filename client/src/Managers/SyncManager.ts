import { removeElementByField } from "../common/RemoveElement";
import { getSyncChanges } from "./Apis/Saves";
import { SaveManager } from "./SaveManager";

class SyncManager {
    checkSync = async () => {
        let lastSync = new Date(localStorage.getItem("lastSyncTime") || 0);
        // Проверка, что последняя синхронизация проводилась более 30 секунд назад
        if (new Date().getTime() - lastSync.getTime() < 30000) return;
        // Получение всех изменений с предыдущей синхронизации
        const allChanges = await getSyncChanges(lastSync);
        if (!allChanges) return;
        // Применение всех изменений, если они были получены и имеются
        allChanges.forEach((save) => {
            const localSave = SaveManager.loadSaveByName(save.saveName);
            if (save.created) localSave.created = save.created;
            save.deleting.forEach((deletingInfo) => {
                const index = localSave.Chips.findIndex(
                    (chip) => chip.name == deletingInfo.name
                );
                if (index === -1) return;
                if (deletingInfo.deletedAt > localSave.Chips[index].lastEdit)
                    removeElementByField(localSave.Chips, deletingInfo, "name");
            });
            save.creatingChips.forEach((cloudChipsInfo) => {
                const index = localSave.Chips.findIndex(
                    (chip) => chip.name === cloudChipsInfo.name
                );
                if (index === -1) localSave.Chips.push(cloudChipsInfo);
                else {
                    if (
                        new Date(cloudChipsInfo.lastEdit) >=
                        new Date(localSave.Chips[index].lastEdit)
                    )
                        localSave.Chips[index] = cloudChipsInfo;
                    else {
                        console.log(cloudChipsInfo.lastEdit);
                        const userConfirm =
                            confirm(`Синхронизация сохранения "${save.saveName}"
Обновить чип ${cloudChipsInfo.name} из облака?
Даты изменения:
Локальная: ${new Date(localSave.Chips[index].lastEdit || 0)
                                .toISOString()
                                .replace("T", " ")
                                .replace("Z", "")}
Облачная: ${new Date(cloudChipsInfo.lastEdit)
                                .toISOString()
                                .replace("T", " ")
                                .replace("Z", "")}
`);
                        if (userConfirm)
                            localSave.Chips[index] = cloudChipsInfo;
                    }
                }
            });
            if (save.created) localSave.created = save.created;
            localSave.save();
        });
        // Сохранение времени последней синхронизации
        localStorage.setItem(
            "lastSyncTime",
            new Date(new Date().getTime()).toISOString()
        );
    };
}

export const syncManager = new SyncManager();
