import { Pos } from "../common/Pos";

export class WireInfo {
    id: number;
    points: Pos[];
    sourcePin: { chipID: number; chipType: number; pinID: number };
    targetPin: { chipID: number; chipType: number; pinID: number };
    constructor(
        id: number,
        points: Pos[],
        sourcePin: { chipID: number; chipType: number; pinID: number },
        targetPin: { chipID: number; chipType: number; pinID: number }
    ) {
        this.id = id;
        this.points = points;
        this.sourcePin = sourcePin;
        this.targetPin = targetPin;
    }
}
