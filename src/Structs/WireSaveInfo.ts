import { Pos } from "../common/Pos";

export class WireSaveInfo {
    id: number;
    points: Pos[];
    sourceID: { chipID: number; pinID: number };
    targetID: { chipID: number; pinID: number };
    constructor(
        id: number,
        points: Pos[],
        sourceID: { chipID: number; pinID: number },
        targetID: { chipID: number; pinID: number }
    ) {
        this.id = id;
        this.points = points;
        this.sourceID = sourceID;
        this.targetID = targetID;
    }
}
