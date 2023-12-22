import { Pos } from "../common/Pos";
import { AND, NOT, TRI_STATE_BUFFER, Chip } from "../Simulating/Chip";
import { Pin } from "../Simulating/Pin";
import { Wire } from "../Simulating/Wire";
import { ChipMinimalInfo } from "./ChipMinimalInfo";
import { PinSaveInfo } from "./PinInfo";
import { WireSaveInfo } from "./WireSaveInfo";

export class SaveInfo {
    Chips: ChipMinimalInfo[] = [
        new ChipMinimalInfo("AND", 1, "#267ab2"),
        new ChipMinimalInfo("NOT", 1, "#8c1f1a"),
        new ChipMinimalInfo("TRI-STATE BUFFER", 1, "#262626"),
    ];
    Wheels: string[][];
    saveName: string;

    constructor(
        Chips: ChipMinimalInfo[],
        Wheels: string[][],
        saveName: string
    ) {
        this.Chips = Chips.length == 0 ? this.Chips : Chips;
        this.Wheels = Wheels;
        this.saveName = saveName;
    }

    static loadSave(saveName: string) {
        const res = JSON.parse(
            localStorage.getItem(saveName) ||
                `{"Chips":[], "Wheels":[["AND","NOT","TRI-STATE BUFFER"]]}`
        ) as SaveInfo;
        return new SaveInfo(res.Chips, res.Wheels, saveName);
    }

    save() {
        localStorage.setItem(this.saveName, JSON.stringify(this));
    }

    saveNewChip(chip: Chip, name: string, color: string, chipType: number = 1) {
        console.log(chip);
        const savingChip = new ChipMinimalInfo(
            name,
            chipType,
            color,
            chip.position,
            chip.input.map(
                (pin) =>
                    new PinSaveInfo(
                        pin.id,
                        pin.name,
                        pin.chip.id,
                        pin.color.title,
                        pin.position.y
                    )
            ),
            chip.output.map(
                (pin) =>
                    new PinSaveInfo(
                        pin.id,
                        pin.name,
                        pin.chip.id,
                        pin.color.title,
                        pin.position.y
                    )
            ),
            chip.wires.map(
                (wire) =>
                    new WireSaveInfo(
                        wire.id,
                        wire.points,
                        { chipID: wire.source.chip.id, pinID: wire.source.id },
                        { chipID: wire.target.chip.id, pinID: wire.target.id }
                    )
            ),
            chip.subChips.map((chip) => ({ name: chip.name, id: chip.id }))
        );
        if (name in this.Chips) {
            this.Chips = this.Chips.map((chip) =>
                chip.name == name ? savingChip : chip
            );
        } else {
            this.Chips.push(savingChip);
            this.save();
            return true;
        }
        return false;
    }

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
                const SubChips = chipInfo.SubChips.map((subChipName) =>
                    this.loadChipByName(
                        subChipName.name,
                        undefined,
                        subChipName.id
                    )
                );
                const res = new Chip(
                    SubChips,
                    chipID,
                    chipName,
                    chipInfo.color,
                    chipInfo.position
                );
                chipInfo.inputPins.forEach((pin) => {
                    res.input.push(
                        new Pin(res, true, pin.id, pin.name, pin.positionY)
                    );
                });
                chipInfo.outputPins.forEach((pin) => {
                    res.output.push(
                        new Pin(res, false, pin.id, pin.name, pin.positionY)
                    );
                });
                chipInfo.Wires.forEach((wire) => {
                    const source =
                        wire.sourceID.chipID == 0
                            ? res.input.find(
                                  (pin) => pin.id == wire.sourceID.pinID
                              )
                            : res.subChips
                                  .find(
                                      (chip) => chip.id == wire.sourceID.chipID
                                  )
                                  ?.output.find(
                                      (pin) => pin.id == wire.sourceID.pinID
                                  );
                    const target =
                        wire.targetID.chipID == 0
                            ? res.output.find(
                                  (pin) => pin.id == wire.targetID.pinID
                              )
                            : res.subChips
                                  .find(
                                      (chip) => chip.id == wire.targetID.chipID
                                  )
                                  ?.input.find(
                                      (pin) => pin.id == wire.targetID.pinID
                                  );
                    if (!source || !target) {
                        alert(
                            `Не удалось добавить провод в чипе ${chipInfo.name} wireID: ${wire.id}
От: ${wire.sourceID.chipID}-${wire.sourceID.pinID}
До: ${wire.targetID.chipID}-${wire.targetID.pinID}`
                        );
                    } else
                        res.wires.push(new Wire(source, target, wire.points));
                });
                return res;
        }
    };
}
