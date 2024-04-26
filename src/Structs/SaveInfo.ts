import { Pos } from "../common/Pos";
import { removeElement } from "../common/RemoveElement";
import { Bus } from "../Simulating/BaseChips/Bus";
import { Chip } from "../Simulating/Chip";
import { TRI_STATE_BUFFER } from "../Simulating/BaseChips/TRI_STATE_BUFFER";
import { BusPin, Pin } from "../Simulating/Pin";
import { Wire } from "../Simulating/Wire";
import { ChipMinimalInfo, ChipTypes } from "./ChipMinimalInfo";
import { PinSaveInfo } from "./PinInfo";
import { WireSaveInfo } from "./WireSaveInfo";
import { AND } from "../Simulating/BaseChips/AND";
import { NOT } from "../Simulating/BaseChips/NOT";
import { Colors } from "../common/Colors";
import { action, makeObservable, observable } from "mobx";
import { BusMinimalInfo } from "./BusInfo";
import { userSettings } from "../Managers/UserManager";
import { deleteChip, saveChip } from "../Managers/Apis/Saves";

const defaultChipsInfo = [
    new ChipMinimalInfo("AND", ChipTypes.Default, "#267ab2"),
    new ChipMinimalInfo("NOT", ChipTypes.Default, "#8c1f1a"),
    new ChipMinimalInfo("TRI-STATE BUFFER", ChipTypes.Default, "#262626"),
    new ChipMinimalInfo("BUS", ChipTypes.BUS, "#262626"),
];

export class SaveInfo {
    @observable Chips: ChipMinimalInfo[] = [];
    @observable Wheels: string[][];
    saveName: string;
    defaultChips: number;
    created: Date;

    constructor(
        Chips: ChipMinimalInfo[],
        Wheels: string[][],
        saveName: string,
        defaultChips: number = 4,
        withoutBase: boolean = false,
        created: Date = new Date()
    ) {
        makeObservable(this);
        if (!withoutBase) this.addDefaultChips();
        this.Chips = this.Chips.filter(
            (chip) =>
                Chips.find((loadedChips) => loadedChips.name == chip.name) ===
                undefined
        );
        this.Chips.push(...Chips);
        this.Wheels = Wheels;
        for (let i = this.Wheels.length; i < 9; i++) this.Wheels.push([]);
        this.saveName = saveName;
        this.defaultChips = defaultChips;
        this.created = created;
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

    static loadSave(saveName: string, withoutBase?: boolean) {
        const res = JSON.parse(
            localStorage.getItem("Save:" + saveName) ||
                `{"Chips":[], "Wheels":[["AND","NOT","TRI-STATE BUFFER"],[],[],[],[],[],[],[],[]]}`
        ) as SaveInfo;
        const loadedSave = new SaveInfo(
            res.Chips,
            res.Wheels,
            saveName,
            res.defaultChips,
            withoutBase
        );
        return loadedSave;
    }

    save() {
        this.Chips = this.Chips.slice(this.defaultChips);
        localStorage.setItem("Save:" + this.saveName, JSON.stringify(this));
        this.addDefaultChips();
    }

    addDefaultChips() {
        defaultChipsInfo.forEach((chip) => this.Chips.unshift(chip));
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
        chipType: number = 1,
        rewrite: boolean = false
    ) => {
        const savingChip = new ChipMinimalInfo(
            name,
            chipType,
            color,
            chip.input.map(
                (pin) =>
                    new PinSaveInfo(
                        pin.id,
                        pin.name,
                        pin.chip.id,
                        pin.color.title,
                        pin.position
                    )
            ),
            chip.output.map(
                (pin) =>
                    new PinSaveInfo(
                        pin.id,
                        pin.name,
                        pin.chip.id,
                        pin.color.title,
                        pin.position
                    )
            ),
            chip.wires.map((wire) => {
                const buffPoints = [...wire.points];
                if (wire.source.chip.chipType != ChipTypes.BUS)
                    buffPoints.shift();
                if (wire.target.chip.chipType != ChipTypes.BUS)
                    buffPoints.pop();
                return new WireSaveInfo(
                    wire.id,
                    buffPoints,
                    {
                        chipID: wire.source.chip.id,
                        chipType: wire.target.chip.chipType,
                        pinID: wire.source.id,
                    },
                    {
                        chipID: wire.target.chip.id,
                        chipType: wire.target.chip.chipType,
                        pinID: wire.target.id,
                    }
                );
            }),
            chip.subChips.map((subChip) => ({
                name: subChip.name,
                id: subChip.id,
                position: subChip.position,
            })),
            chip.buses.map(
                (bus) =>
                    new BusMinimalInfo(
                        bus.name,
                        bus.color,
                        (bus as Bus).positions,
                        bus.id,
                        bus.input.map((pin) => PinSaveInfo.fromPin(pin)),
                        bus.output.map((pin) => PinSaveInfo.fromPin(pin))
                    )
            ),
            new Pos(window.innerWidth, window.innerHeight)
        );
        if (userSettings.IsUserSync) {
            saveChip(this.saveName, {
                color: color,
                chipStyle: chipType,
                title: name,
                screenX: window.innerWidth,
                screenY: window.innerHeight,
                inputPins: savingChip.inputPins,
                outputPins: savingChip.outputPins,
                subChips: savingChip.SubChips,
                buses: savingChip.Buses,
                wires: savingChip.Wires,
            });
            savingChip.sync = true;
        }
        if (this.Chips.find((chip) => chip.name == name)) {
            if (rewrite) {
                this.Chips = this.Chips.map((chip) =>
                    chip.name == name ? savingChip : chip
                );
                this.save();
                alert("Чип сохранён!");
            }
        } else {
            this.Chips.push(savingChip);
            this.save();
        }
        return true;
    };

    canAddedChipToCurrentEdit = (
        currentChip: string,
        chipName: string
    ): boolean => {
        if (chipName == currentChip) return false;
        const chipInfo = this.Chips.find((chip) => chip.name == chipName);
        if (!chipInfo) return false;
        for (let subTestChip of chipInfo.SubChips)
            return this.canAddedChipToCurrentEdit(
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
                const delta = new Pos(chipInfo.screenSize);

                const res = new Chip(
                    SubChips,
                    chipID,
                    chipName,
                    chipInfo.color,
                    position
                );

                res.buses.push(
                    ...chipInfo.Buses?.map((bus) => {
                        const buff = new Bus(
                            bus.positions.map((pos) => new Pos(pos)),
                            bus.id,
                            Colors[bus.color]
                        );
                        buff.input.push(
                            ...bus.inputs.map(
                                (pin) =>
                                    new BusPin(
                                        buff,
                                        pin.distanceFromZero as number,
                                        true,
                                        pin.id,
                                        pin.name,
                                        undefined,
                                        undefined,
                                        undefined,
                                        undefined,
                                        Object.values(Colors).find(
                                            (clr) =>
                                                clr.title === pin.colorTitle
                                        )
                                    )
                            )
                        );
                        buff.output.push(
                            ...bus.outputs.map(
                                (pin) =>
                                    new BusPin(
                                        buff,
                                        pin.distanceFromZero as number,
                                        false,
                                        pin.id,
                                        pin.name,
                                        undefined,
                                        true,
                                        undefined,
                                        undefined,
                                        Object.values(Colors).find(
                                            (clr) =>
                                                clr.title === pin.colorTitle
                                        )
                                    )
                            )
                        );
                        return buff;
                    })
                );

                chipInfo.inputPins.forEach((pin) => {
                    res.input.push(
                        new Pin(
                            res,
                            true,
                            pin.id,
                            pin.name,
                            pin.position.y,
                            chipID == 0,
                            undefined,
                            undefined,
                            Object.values(Colors).find(
                                (clr) => clr.title === pin.colorTitle
                            )
                        )
                    );
                });
                chipInfo.outputPins.forEach((pin) => {
                    res.output.push(
                        new Pin(
                            res,
                            false,
                            pin.id,
                            pin.name,
                            pin.position.y,
                            undefined,
                            undefined,
                            undefined,
                            Object.values(Colors).find(
                                (clr) => clr.title === pin.colorTitle
                            )
                        )
                    );
                });

                chipInfo.Wires.forEach((wire) => {
                    const sourceChip =
                        res.subChips.find(
                            (chip) => chip.id == wire.sourceID.chipID
                        ) ||
                        res.buses.find((bus) => bus.id == wire.sourceID.chipID);
                    const targetChip =
                        res.subChips.find(
                            (chip) => chip.id == wire.targetID.chipID
                        ) ||
                        res.buses.find((bus) => bus.id == wire.targetID.chipID);

                    let source =
                        wire.sourceID.chipID == 0
                            ? res.input.find(
                                  (pin) => pin.id == wire.sourceID.pinID
                              )
                            : sourceChip?.output.find(
                                  (pin) => pin.id == wire.sourceID.pinID
                              );
                    let target =
                        wire.targetID.chipID == 0
                            ? res.output.find(
                                  (pin) => pin.id == wire.targetID.pinID
                              )
                            : targetChip?.input.find(
                                  (pin) => pin.id == wire.targetID.pinID
                              );
                    if (!source || !target) {
                        alert(
                            `Не удалось добавить провод в чипе ${chipInfo.name} wireID: ${wire.id}
                        От: chip${wire.sourceID.chipID}-pin${wire.sourceID.pinID}
                        До: chip${wire.targetID.chipID}-pin${wire.targetID.pinID}
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
                return [res, delta];
        }
    };
}
