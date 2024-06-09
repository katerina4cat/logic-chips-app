import { ChipInfo, ChipTypes } from "@shared/models/saves/ChipInfo";

export const defaultChipsInfo = [
    {
        access: 1,
        chipInfo: new ChipInfo("AND", ChipTypes.Default, "#267ab2"),
    },
    {
        access: 1,
        chipInfo: new ChipInfo("NOT", ChipTypes.Default, "#8c1f1a"),
    },
    {
        access: 1,
        chipInfo: new ChipInfo(
            "TRI-STATE BUFFER",
            ChipTypes.Default,
            "#262626"
        ),
    },
    { access: 2, chipInfo: new ChipInfo("BUS", ChipTypes.BUS, "#262626") },
    {
        access: 4,
        chipInfo: new ChipInfo("8 SEGMENT", ChipTypes.EightSegment, "#242529"),
    },
];

export const isDefaultChip = (chipName: string) =>
    defaultChipsInfo.findIndex((chip) => chip.chipInfo.name === chipName) !==
    -1;
