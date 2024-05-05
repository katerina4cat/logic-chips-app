import { databaseManager } from "../app";
import { ApiError } from "../exceptions/errorService";
import { ChipInfo } from "../../../shared/models/saves/ChipInfo";
import {
    ChipSQLModel,
    ChipSaveSQLModel,
    DeletedSQLModel,
    SavingSQLModel,
} from "../models/SQLResults/saves/SavesSQLModels";
import { SyncSavesInfo } from "../../../shared/models/saves/SyncSavesInfo";
import { DeletingSync } from "../../../shared/models/saves/DeletingSync";
import { serverSaveChip } from "@shared/models/saves/exchangeTypes";

const hex2int = (color: string) => parseInt(color.substring(1), 16);

class saveService {
    public createSave = async (name: string, uuid: string) => {
        if (
            !(
                await databaseManager.query(
                    `CALL CreateNewSave('${uuid}','${name}');`
                )
            )[0][0]["result"]
        )
            throw ApiError.BadRequest(
                "Сохранение с таким именем уже существует"
            );
        return true;
    };

    public createSaves = async (names: string[], uuid: string) => {
        names.forEach((name) => {
            try {
                databaseManager.query(
                    `CALL CreateNewSave('${uuid}','${name}');`
                );
            } catch {}
        });

        return true;
    };

    public saveChip = async (
        saveName: string,
        uuid: string,
        chip: ChipInfo,
        rewrite: boolean = false
    ): Promise<serverSaveChip | false> => {
        try {
            const res = await databaseManager.query<ChipSaveSQLModel>(
                `CALL SaveChip(
                '${uuid}',
                '${saveName}',
                '${chip.name}',
                ${hex2int(chip.color)},
                ${chip.chipStyleType},
                ${chip.screenSize.x},
                ${chip.screenSize.y},
                '${JSON.stringify(chip.inputPins)}',
                '${JSON.stringify(chip.outputPins)}',
                '${JSON.stringify(chip.SubChips)}',
                '${JSON.stringify(chip.Buses)}',
                '${JSON.stringify(chip.Wires)}',
                '${new Date(chip.lastEdit)
                    .toISOString()
                    .replace("T", " ")
                    .replace("Z", "")}',
                ${rewrite});`
            );
            if (res && res[0]) {
                console.log(res[0].lastEdit);
                return {
                    saveName: saveName,
                    chip: chip,
                    lastEdit: res[0].lastEdit,
                };
            }
            return false;
        } catch (err) {
            console.log(err);
            throw ApiError.RuntimeError(
                "Произошла ошибка при сохранении в облаке"
            );
        }
    };

    public deleteChip = async (
        chipName: string,
        saveName: string,
        deletedAt: Date,
        uuid: string
    ) => {
        try {
            await databaseManager.query(
                `CALL DeleteChip('${uuid}','${saveName}','${chipName}', '${new Date(
                    deletedAt
                )
                    .toISOString()
                    .replace("T", " ")
                    .replace("Z", "")}');`
            );
        } catch (err) {
            throw ApiError.RuntimeError(
                "Произошла ошибка при сохранении в облаке"
            );
        }
        return true;
    };

    public getSync = async (
        uuid: string,
        lastLoadDateTime: Date = new Date(0)
    ) => {
        try {
            const res = await databaseManager.query(
                `CALL GetSyncChange('${uuid}','${new Date(lastLoadDateTime)
                    .toISOString()
                    .replace("T", " ")
                    .replace("Z", "")}')`
            );
            const saves = res[0] as SavingSQLModel[];
            const deleting = res[1] as DeletedSQLModel[];
            const creatingChips = (res[2] as ChipSQLModel[]).map((x) =>
                ChipSQLModel.construct(x)
            );

            const result = saves.map(
                (save) =>
                    new SyncSavesInfo(
                        save.title,
                        deleting
                            .filter((del) => del.title === save.title)
                            .map(
                                (del) =>
                                    new DeletingSync(
                                        del.chipName,
                                        del.deletedAt
                                    )
                            ),
                        creatingChips
                            .filter((chip: any) => chip.title === save.title)
                            .map((chip) => chip.toChipInfo()),
                        save.lastEdit,
                        new Date(save.created) > new Date(lastLoadDateTime)
                            ? save.created
                            : undefined
                    )
            );
            return result;
        } catch (err) {
            console.log(err);
            throw ApiError.RuntimeError("Произошла ошибка при синхронизации");
        }
    };
}
export default new saveService();
