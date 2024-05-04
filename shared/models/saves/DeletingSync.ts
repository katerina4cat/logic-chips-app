export class DeletingSync {
    name: string;
    deletedAt: Date;
    constructor(saveName: string, deletedAt: Date) {
        this.name = saveName;
        this.deletedAt = deletedAt;
    }
}
