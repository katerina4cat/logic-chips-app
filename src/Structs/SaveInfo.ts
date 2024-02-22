import { Pos } from "../common/Pos";
import { removeElement } from "../common/RemoveElement";
import { Bus } from "../Simulating/Bus";
import { AND, NOT, TRI_STATE_BUFFER, Chip } from "../Simulating/Chip";
import { Pin } from "../Simulating/Pin";
import { Wire } from "../Simulating/Wire";
import { BusMinimalInfo, ChipMinimalInfo, ChipTypes } from "./ChipMinimalInfo";
import { PinSaveInfo } from "./PinInfo";
import { WireSaveInfo } from "./WireSaveInfo";

export class SaveInfo {
    Chips: ChipMinimalInfo[] = [
        new ChipMinimalInfo("AND", ChipTypes.Default, "#267ab2"),
        new ChipMinimalInfo("NOT", ChipTypes.Default, "#8c1f1a"),
        new ChipMinimalInfo("TRI-STATE BUFFER", ChipTypes.Default, "#262626"),
        new ChipMinimalInfo("BUS", ChipTypes.BUS, "#262626"),
    ];
    Wheels: string[][];
    saveName: string;

    constructor(
        Chips: ChipMinimalInfo[],
        Wheels: string[][],
        saveName: string
    ) {
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
            chip.subChips
                .filter(
                    (chip) =>
                        chip.chipType == ChipTypes.Default ||
                        chip.chipType == ChipTypes.SevenSegment
                )
                .map((chip) => ({
                    name: chip.name,
                    id: chip.id,
                    position: chip.position,
                })),
            chip.subChips
                .filter((chip) => chip.chipType == ChipTypes.BUS)
                .map(
                    (chip) =>
                        new BusMinimalInfo(
                            chip.name,
                            chip.color,
                            (chip as Bus).from,
                            (chip as Bus).to,
                            chip.id
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

    loadChipByName = (
        chipName: string,
        position: Pos = new Pos(),
        chipID: number = Date.now()
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
                        subChip.id
                    )
                );
                SubChips.push(
                    ...chipInfo.Buses?.map((bus) => {
                        const buff = new Bus(
                            new Pos(bus.from).add(delta),
                            new Pos(bus.to).add(delta),
                            bus.id
                        );
                        return buff;
                    })
                );
                const res = new Chip(
                    SubChips,
                    chipID,
                    chipName,
                    chipInfo.color,
                    position.add(delta)
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
                    const sourceChip = res.subChips.find(
                        (chip) => chip.id == wire.sourceID.chipID
                    );
                    const targetChip = res.subChips.find(
                        (chip) => chip.id == wire.targetID.chipID
                    );

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
                    if (
                        sourceChip?.chipType == ChipTypes.BUS &&
                        targetChip?.chipType == ChipTypes.BUS
                    ) {
                        res.wires.push(
                            (sourceChip as Bus).createWireToBus(
                                targetChip as Bus,
                                wire.points
                            )
                        );
                        return;
                    }
                    //Подготовка пина для соеденение от бусы к чипу
                    if (source && targetChip?.chipType == ChipTypes.BUS) {
                        target = new Pin(
                            targetChip,
                            true,
                            undefined,
                            undefined,
                            undefined,
                            false,
                            wire.points[wire.points.length - 1]
                        );
                        targetChip.input.push(target);
                    }
                    //Подготовка пина для соеденение от чипа к бусе
                    if (target && sourceChip?.chipType == ChipTypes.BUS) {
                        source = new Pin(
                            sourceChip,
                            false,
                            undefined,
                            undefined,
                            undefined,
                            true,
                            wire.points[0]
                        );
                        sourceChip.output.push(target);
                    }
                    if (!source || !target) {
                        alert(
                            `Не удалось добавить провод в чипе ${chipInfo.name} wireID: ${wire.id}
От: chip${wire.sourceID.chipID}-pin${wire.sourceID.pinID}
До: chip${wire.targetID.chipID}-pin${wire.targetID.pinID}
`
                        );
                        console.log(source, target);
                    } else
                        res.wires.push(
                            new Wire(
                                source,
                                target,
                                wire.points
                            ).addDeltaToPoints(delta)
                        );
                });
                return res;
        }
    };
}
