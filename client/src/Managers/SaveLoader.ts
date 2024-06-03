import { action, makeObservable, observable, reaction, toJS } from "mobx";
import { ChipInfo, ChipTypes } from "@shared/models/saves/ChipInfo";
import userManager, { userSettings } from "./UserManager";
import { removeElement } from "../common/RemoveElement";
import { deleteChip, saveChip } from "./Apis/Saves";
import { Chip } from "../Simulating/Chip";
import { AND } from "../Simulating/BaseChips/AND";
import { NOT } from "../Simulating/BaseChips/NOT";
import { TRI_STATE_BUFFER } from "../Simulating/BaseChips/TRI_STATE_BUFFER";
import { Pos } from "../common/Pos";
import { Bus } from "../Simulating/BaseChips/BUS";
import { Colors } from "@shared/models/common/Colors";
import { Pin } from "../Simulating/Pin";
import { Wire } from "../Simulating/Wire";
import { EIGHT_SEGMENT } from "../Simulating/BaseChips/EIGHT_SEGMENT";
import { defaultChipsInfo } from "./defaultChipsInfo";
import { SaveWorkSpacesModel, saveManager } from "./SaveManager";

export const defaultSave = (saveName: string): SaveWorkSpacesModel => ({
    saveName: saveName,
    lastEdit: new Date(new Date().getTime()),
    created: new Date(new Date().getTime()),
    Wheels: [
        ["AND", "NOT", "TRI-STATE BUFFER"],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
    ],
    Chips: [],
});

export class SaveLoader {
    @observable defaultChips: ChipInfo[] = [];
    saveInfo: SaveWorkSpacesModel;

    constructor(saveData: SaveWorkSpacesModel, withBase = true) {
        makeObservable(this);
        if (withBase) this.loadDefaultChips();
        this.saveInfo = saveData;
        reaction(
            () => toJS(this.saveInfo),
            (newSave) => {
                saveManager.saveSaving(newSave);
            }
        );
    }

    swapCircleElement = (
        wheelId: number,
        elementName: string,
        forward: boolean
    ) => {
        const elementIndex = this.saveInfo.Wheels[wheelId].indexOf(elementName);
        if (forward)
            this.swapWheelElements(
                wheelId,
                elementIndex,
                elementIndex - 1 < 0
                    ? this.saveInfo.Wheels[wheelId].length - 1
                    : elementIndex - 1
            );
        else
            this.swapWheelElements(
                wheelId,
                elementIndex,
                elementIndex + 1 >= this.saveInfo.Wheels[wheelId].length
                    ? 0
                    : elementIndex + 1
            );
    };

    private swapWheelElements = (
        wheelID: number,
        firstInd: number,
        secondInd: number
    ) => {
        const buff = this.saveInfo.Wheels[wheelID][firstInd];
        this.saveInfo.Wheels[wheelID][firstInd] =
            this.saveInfo.Wheels[wheelID][secondInd];
        this.saveInfo.Wheels[wheelID][secondInd] = buff;
    };

    loadDefaultChips() {
        const testAccessLevel = (required: number, available: number) => {
            return (available & required) === required;
        };
        defaultChipsInfo.forEach((chip) => {
            // Проверка, что пользователю доступен добавляемый чип
            if (testAccessLevel(chip.access, userManager.donateLevel))
                this.defaultChips.push(chip.chipInfo);
        });
    }

    removeChip = (chipName: string) => {
        const deletingChipInfo = this.saveInfo.Chips.find(
            (chip) => chip.name == chipName
        );
        if (deletingChipInfo) {
            removeElement(this.saveInfo.Chips, deletingChipInfo);
            this.saveInfo.lastEdit = new Date();
            for (let i = 0; i < this.saveInfo.Wheels.length; i++)
                while (this.saveInfo.Wheels[i].includes(chipName))
                    removeElement(this.saveInfo.Wheels[i], chipName);
            if (userSettings.IsUserSyncSaves)
                deleteChip(this.saveInfo.saveName, chipName);
            return true;
        }
        return false;
    };

    @action saveNewChip = (
        chip: Chip,
        name: string,
        color: string,
        chipType: number = ChipTypes.Default
    ) => {
        chip.name = name;
        chip.color = color;
        chip.chipType = chipType;
        const savingChip = chip.toChipInfo();
        savingChip.lastEdit = new Date(new Date().getTime());
        this.saveInfo.lastEdit = savingChip.lastEdit;
        const index = this.saveInfo.Chips.findIndex(
            (chip) => chip.name == name
        );
        if (index === -1) {
            this.saveInfo.Chips.push(savingChip);
        } else {
            this.saveInfo.Chips[index] = savingChip;
            alert("Чип сохранён!");
        }
        if (userSettings.IsUserSyncSaves) {
            saveChip(this.saveInfo.saveName, savingChip);
        }
        return true;
    };

    currentChipNeddedForSelected = (
        currentChip: string,
        chipName: string
    ): boolean => {
        if (chipName == currentChip) return false;
        const chipInfo = this.saveInfo.Chips.find(
            (chip) => chip.name == chipName
        );
        if (!chipInfo) return false;
        for (let subTestChip of chipInfo.SubChips)
            return this.currentChipNeddedForSelected(
                currentChip,
                subTestChip.name
            );
        return true;
    };

    @action loadChipByName = (
        chipName: string,
        position: Pos = new Pos(),
        chipID: number = Date.now(),
        deepth?: boolean
    ): [Chip, Pos] => {
        switch (chipName) {
            case "AND":
                return [new AND(chipID, position), new Pos()];
            case "NOT":
                return [new NOT(chipID, position), new Pos()];
            case "TRI-STATE BUFFER":
                return [new TRI_STATE_BUFFER(chipID, position), new Pos()];
            case "8 SEGMENT":
                return [new EIGHT_SEGMENT(chipID, position), new Pos()];
            default:
                const chipInfo = this.saveInfo.Chips.find(
                    (chip) => chip.name == chipName
                );
                if (!chipInfo) {
                    alert(
                        `Произошла ошибка при попытке загрузить чип.
Чип: "${chipName}" не найден`
                    );
                    return [new Chip(), new Pos()];
                }
                return this.loadChipByChipInfo(
                    chipInfo,
                    position,
                    chipID,
                    deepth
                );
        }
    };

    loadChipByChipInfo = (
        chipInfo: ChipInfo,
        position: Pos = new Pos(),
        chipID: number = Date.now(),
        deepth?: boolean
    ): [Chip, Pos] => {
        const SubChips = chipInfo.SubChips.map(
            (subChip) =>
                this.loadChipByName(
                    subChip.name,
                    new Pos(subChip.position),
                    subChip.id,
                    true
                )[0]
        );

        const res = new Chip(
            SubChips,
            chipID,
            chipInfo.name,
            chipInfo.color,
            position
        );

        res.buses = chipInfo.Buses.map((bus) => Bus.fromBusInfo(bus));
        res.input = chipInfo.inputPins.map(
            (pin) =>
                new Pin(
                    res,
                    true,
                    pin.id,
                    pin.name,
                    pin.position.y,
                    chipID == 0,
                    undefined,
                    Object.values(Colors).find((clr) => clr.id === pin.colorID)
                )
        );

        res.output = chipInfo.outputPins.map(
            (pin) =>
                new Pin(
                    res,
                    false,
                    pin.id,
                    pin.name,
                    pin.position.y,
                    undefined,
                    undefined,
                    Object.values(Colors).find((clr) => clr.id === pin.colorID)
                )
        );

        chipInfo.Wires.forEach((wire) => {
            const sourceChip =
                res.subChips.find((chip) => chip.id == wire.sourcePin.chipID) ||
                res.buses.find((bus) => bus.id == wire.sourcePin.chipID);
            const targetChip =
                res.subChips.find((chip) => chip.id == wire.targetPin.chipID) ||
                res.buses.find((bus) => bus.id == wire.targetPin.chipID);

            let source =
                wire.sourcePin.chipID == 0
                    ? res.input.find((pin) => pin.id == wire.sourcePin.pinID)
                    : sourceChip?.output.find(
                          (pin) => pin.id == wire.sourcePin.pinID
                      );
            let target =
                wire.targetPin.chipID == 0
                    ? res.output.find((pin) => pin.id == wire.targetPin.pinID)
                    : targetChip?.input.find(
                          (pin) => pin.id == wire.targetPin.pinID
                      );
            if (sourceChip instanceof Bus && targetChip instanceof Bus) {
                if (!source)
                    source = sourceChip.input.find(
                        (pin) => pin.id === wire.sourcePin.pinID
                    );
                if (!target) {
                    target = targetChip.output.find(
                        (pin) => pin.id === wire.targetPin.pinID
                    );
                }
            }
            if (!source || !target) {
                alert(
                    `Не удалось добавить провод в чипе ${chipInfo.name} wireID: ${wire.id}
                От: chip${wire.sourcePin.chipID}-pin${wire.sourcePin.pinID}
                До: chip${wire.targetPin.chipID}-pin${wire.targetPin.pinID}
                `
                );
                // console.log(sourceChip, targetChip);
            } else {
                res.wires.push(
                    new Wire(
                        source,
                        target,
                        wire.points.map((p) => new Pos(p))
                    )
                );
            }
        });

        if (!deepth) res.updatedOutputs();
        return [res, new Pos(chipInfo.screenSize)];
    };
}
