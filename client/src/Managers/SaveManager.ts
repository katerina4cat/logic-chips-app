import { action, makeObservable, observable } from "mobx";
import { ChipInfo, ChipTypes } from "@shared/models/saves/ChipInfo";
import userManager, { userSettings } from "./UserManager";
import { removeElement } from "../common/RemoveElement";
import { deleteChip, saveChip } from "./Apis/Saves";
import { Chip } from "../Simulating/Chip";
import { AND } from "../Simulating/BaseChips/AND";
import { NOT } from "../Simulating/BaseChips/NOT";
import { TRI_STATE_BUFFER } from "../Simulating/BaseChips/TRI_STATE_BUFFER";
import { Pos } from "../common/Pos";
import { Bus } from "../Simulating/BaseChips/Bus";
import { Colors } from "@shared/models/common/Colors";
import { Pin } from "../Simulating/Pin";
import { Wire } from "../Simulating/Wire";

const defaultChipsInfo = [
    {
        access: 0b1,
        chipInfo: new ChipInfo("AND", ChipTypes.Default, "#267ab2"),
    },
    {
        access: 0b1,
        chipInfo: new ChipInfo("NOT", ChipTypes.Default, "#8c1f1a"),
    },
    {
        access: 0b1,
        chipInfo: new ChipInfo(
            "TRI-STATE BUFFER",
            ChipTypes.Default,
            "#262626"
        ),
    },
    { access: 0b1, chipInfo: new ChipInfo("BUS", ChipTypes.BUS, "#262626") },
];

const defaultSave = `{"Chips":[], "Wheels":[["AND","NOT","TRI-STATE BUFFER"],[],[],[],[],[],[],[],[]]}`;

export class SaveManager {
    @observable defaultChips: ChipInfo[] = [];
    @observable Chips: ChipInfo[] = [];
    @observable Wheels: string[][];
    saveName: string;
    created: Date;
    lastEdit: Date;

    constructor(
        Chips: ChipInfo[],
        Wheels: string[][],
        saveName: string,
        created: Date = new Date(),
        lastEdit: Date = new Date(0),
        withBase: boolean = true
    ) {
        makeObservable(this);
        if (withBase) this.loadDefaultChips();
        this.Chips.push(...Chips);
        this.Wheels = Wheels;
        for (let i = this.Wheels.length; i < 9; i++) this.Wheels.push([]);
        this.saveName = saveName;
        this.created = created;
        this.lastEdit = lastEdit;
    }

    swapCircleElement = (
        wheelId: number,
        elementName: string,
        forward: boolean
    ) => {
        const elementIndex = this.Wheels[wheelId].indexOf(elementName);
        if (forward)
            this.swapWheelElements(
                wheelId,
                elementIndex,
                elementIndex - 1 < 0
                    ? this.Wheels[wheelId].length - 1
                    : elementIndex - 1
            );
        else
            this.swapWheelElements(
                wheelId,
                elementIndex,
                elementIndex + 1 >= this.Wheels[wheelId].length
                    ? 0
                    : elementIndex + 1
            );
        this.save();
    };

    private swapWheelElements = (
        wheelID: number,
        firstInd: number,
        secondInd: number
    ) => {
        const buff = this.Wheels[wheelID][firstInd];
        this.Wheels[wheelID][firstInd] = this.Wheels[wheelID][secondInd];
        this.Wheels[wheelID][secondInd] = buff;
    };

    loadDefaultChips() {
        defaultChipsInfo.forEach((chip) => {
            // Проверка, что пользователю доступен добавляемый чип
            if ((userManager.donateLevel & chip.access) === chip.access)
                this.defaultChips.push(chip.chipInfo);
        });
    }

    static loadSaveByName(saveName: string, withBase: boolean = true) {
        return this.loadSave(
            localStorage.getItem("Save:" + saveName) || defaultSave,
            withBase
        );
    }

    static loadSave(saveStruct: string, withBase: boolean = true) {
        const data = JSON.parse(saveStruct) as SaveManager;
        return new SaveManager(
            data.Chips,
            data.Wheels,
            data.saveName,
            data.created,
            data.lastEdit,
            withBase
        );
    }

    save() {
        localStorage.setItem(
            "Save:" + this.saveName,
            JSON.stringify({ ...this, defaultChips: undefined })
        );
    }

    removeChip = (chipName: string) => {
        const deletingChipInfo = this.Chips.find(
            (chip) => chip.name == chipName
        );
        if (deletingChipInfo) {
            removeElement(this.Chips, deletingChipInfo);
            this.save();
            if (userSettings.IsUserSync) deleteChip(this.saveName, chipName);
            return true;
        }
        return false;
    };

    saveNewChip = (
        chip: Chip,
        name: string,
        color: string,
        chipType: number = ChipTypes.Default
    ) => {
        chip.name = name;
        chip.color = color;
        chip.chipType = chipType;
        const savingChip = chip.toChipInfo();
        if (userSettings.IsUserSync) {
            saveChip(this.saveName, savingChip);
        }
        const index = this.Chips.findIndex((chip) => chip.name == name);
        if (index === -1) {
            this.Chips.push(savingChip);
        } else {
            this.Chips[index] = savingChip;
            alert("Чип сохранён!");
        }
        this.save();
        return true;
    };

    currentChipNeddedForSelected = (
        currentChip: string,
        chipName: string
    ): boolean => {
        if (chipName == currentChip) return false;
        const chipInfo = this.Chips.find((chip) => chip.name == chipName);
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
            default:
                const chipInfo = this.Chips.find(
                    (chip) => chip.name == chipName
                );
                if (!chipInfo) {
                    alert(
                        `Произошла ошибка при попытке загрузить чип.
Чип: "${chipName}" не найден`
                    );
                    return [new Chip(), new Pos()];
                }

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
                    chipName,
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
                            Object.values(Colors).find(
                                (clr) => clr.id === pin.colorID
                            )
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
                            Object.values(Colors).find(
                                (clr) => clr.id === pin.colorID
                            )
                        )
                );

                chipInfo.Wires.forEach((wire) => {
                    const sourceChip =
                        res.subChips.find(
                            (chip) => chip.id == wire.sourcePin.chipID
                        ) ||
                        res.buses.find(
                            (bus) => bus.id == wire.sourcePin.chipID
                        );
                    const targetChip =
                        res.subChips.find(
                            (chip) => chip.id == wire.targetPin.chipID
                        ) ||
                        res.buses.find(
                            (bus) => bus.id == wire.targetPin.chipID
                        );

                    let source =
                        wire.sourcePin.chipID == 0
                            ? res.input.find(
                                  (pin) => pin.id == wire.sourcePin.pinID
                              )
                            : sourceChip?.output.find(
                                  (pin) => pin.id == wire.sourcePin.pinID
                              );
                    let target =
                        wire.targetPin.chipID == 0
                            ? res.output.find(
                                  (pin) => pin.id == wire.targetPin.pinID
                              )
                            : targetChip?.input.find(
                                  (pin) => pin.id == wire.targetPin.pinID
                              );
                    if (!source || !target) {
                        alert(
                            `Не удалось добавить провод в чипе ${chipInfo.name} wireID: ${wire.id}
                        От: chip${wire.sourcePin.chipID}-pin${wire.sourcePin.pinID}
                        До: chip${wire.targetPin.chipID}-pin${wire.targetPin.pinID}
                        `
                        );
                        console.log(sourceChip, targetChip);
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
        }
    };
}
