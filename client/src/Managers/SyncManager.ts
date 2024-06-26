import { removeElementByField } from "../common/RemoveElement";
import { getSyncChanges } from "./Apis/Saves";
import { saveManager } from "./SaveManager";

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
            let currentSaveData = saveManager.saves.find(
                (saveData) => saveData.saveName === save.saveName
            );
            if (currentSaveData === undefined) {
                currentSaveData = {
                    saveName: save.saveName,
                    lastEdit: save.lastEdit,
                    created: save.created || new Date(new Date().getTime()),
                    Wheels: [],
                    Chips: [],
                };
                saveManager.saves.push(currentSaveData);
            }

            save.deleting.forEach((deletingInfo) => {
                const index = currentSaveData.Chips.findIndex(
                    (chip) => chip.name == deletingInfo.name
                );
                if (index === -1) return;
                if (
                    deletingInfo.deletedAt >
                    currentSaveData.Chips[index].lastEdit
                )
                    removeElementByField(
                        currentSaveData.Chips,
                        deletingInfo,
                        "name"
                    );
            });
            save.creatingChips.forEach((cloudChipInfo) => {
                const index = currentSaveData.Chips.findIndex(
                    (chip) => chip.name === cloudChipInfo.name
                );
                if (index === -1) currentSaveData.Chips.push(cloudChipInfo);
                else {
                    const deltaTime =
                        new Date(
                            currentSaveData.Chips[index].lastEdit
                        ).valueOf() -
                        new Date(cloudChipInfo.lastEdit).valueOf();
                    // Если локальное время последнего сохранения больше, облачного больше чем на 1.75 сек, то спрашиваем кого сохранять
                    if (deltaTime > 1100) {
                        console.log(cloudChipInfo.lastEdit);
                        const userConfirm =
                            confirm(`Синхронизация сохранения "${save.saveName}"
Обновить чип ${cloudChipInfo.name} из облака?
Даты изменения:
Локальная: ${new Date(currentSaveData.Chips[index].lastEdit || 0)
                                .toISOString()
                                .replace("T", " ")
                                .replace("Z", "")}
Облачная: ${new Date(cloudChipInfo.lastEdit)
                                .toISOString()
                                .replace("T", " ")
                                .replace("Z", "")}
`);
                        if (userConfirm)
                            currentSaveData.Chips[index] = cloudChipInfo;
                    } else {
                        if (deltaTime < -1100) {
                            currentSaveData.Chips[index] = cloudChipInfo;
                        }
                    }
                }
            });
            if (save.created) currentSaveData.created = save.created;
        });
        // Сохранение времени последней синхронизации
        localStorage.setItem(
            "lastSyncTime",
            new Date(new Date().getTime()).toISOString()
        );
    };
}

export const syncManager = new SyncManager();
