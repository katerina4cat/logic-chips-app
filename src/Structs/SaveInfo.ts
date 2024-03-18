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
import { PinState, State } from "../common/State";

export class SaveInfo {
    @observable Chips: ChipMinimalInfo[] = [
        new ChipMinimalInfo("AND", ChipTypes.Default, "#267ab2"),
        new ChipMinimalInfo("NOT", ChipTypes.Default, "#8c1f1a"),
        new ChipMinimalInfo("TRI-STATE BUFFER", ChipTypes.Default, "#262626"),
        new ChipMinimalInfo("BUS", ChipTypes.BUS, "#262626"),
    ];
    @observable Wheels: string[][];
    saveName: string;

    constructor(
        Chips: ChipMinimalInfo[],
        Wheels: string[][],
        saveName: string
    ) {
        makeObservable(this);
        this.Chips = this.Chips.filter(
            (chip) =>
                Chips.find((loadedChips) => loadedChips.name == chip.name) ===
                undefined
        );
        this.Chips.push(...Chips);
        this.Wheels = Wheels;
        for (let i = this.Wheels.length; i < 9; i++) this.Wheels.push([]);
        this.saveName = saveName;
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

    static loadSave(saveName: string) {
        const res = JSON.parse(
            localStorage.getItem(saveName) ||
                `{"Chips":[], "Wheels":[["AND","NOT","TRI-STATE BUFFER"],[],[],[],[],[],[],[],[]]}`
        ) as SaveInfo;
        return new SaveInfo(res.Chips, res.Wheels, saveName);
    }

    save() {
        localStorage.setItem(this.saveName, JSON.stringify(this));
    }

    removeChip = (chipName: string) => {
        const deletingChipInfo = this.Chips.find(
            (chip) => chip.name == chipName
        );
        if (deletingChipInfo) {
            removeElement(this.Chips, deletingChipInfo);
            this.save();
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
            return true;
        }
        return false;
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
    ): Chip => {
        switch (chipName) {
            case "AND":
                return new AND(chipID, position);
            case "NOT":
                return new NOT(chipID, position);
            case "TRI-STATE BUFFER":
                return new TRI_STATE_BUFFER(chipID, position);
            default:
                const chipInfo = this.Chips.find(
                    (chip) => chip.name == chipName
                );
                if (!chipInfo) {
                    alert(
                        `Произошла ошибка при попытке загрузить чип.
Чип: "${chipName}" не найден`
                    );
                    return new Chip();
                }
                const delta = new Pos(
                    (window.innerWidth - chipInfo.screenSize.x) / 2,
                    (window.innerHeight - chipInfo.screenSize.y) / 2
                );

                const SubChips = chipInfo.SubChips.map((subChip) =>
                    this.loadChipByName(
                        subChip.name,
                        new Pos(subChip.position),
                        subChip.id,
                        true
                    )
                );

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
                            bus.positions,
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
                                        pin.name
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
                                        true
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
                            pin.position.y + delta.y,
                            chipID == 0
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
                            pin.position.y + delta.y
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
                    //Соеденение двух бусов
                    // if (
                    //     sourceChip?.chipType == ChipTypes.BUS &&
                    //     targetChip?.chipType == ChipTypes.BUS
                    // ) {
                    //     res.wires.push(
                    //         (sourceChip as Bus).createWireToBus(
                    //             targetChip as Bus,
                    //             wire.points
                    //         )
                    //     );
                    //     return;
                    // }
                    //Подготовка пина для соеденение от бусы к чипу
                    if (!source || !target) {
                        //                         alert(
                        //                             `Не удалось добавить провод в чипе ${chipInfo.name} wireID: ${wire.id}
                        // От: chip${wire.sourceID.chipID}-pin${wire.sourceID.pinID}
                        // До: chip${wire.targetID.chipID}-pin${wire.targetID.pinID}
                        // `
                        //                         );
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
                return res;
        }
    };
}
