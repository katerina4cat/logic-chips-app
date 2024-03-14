import { action, makeObservable, observable } from "mobx";

export class Pos {
    copy = () => new Pos(this.x, this.y);

    @observable x: number;
    @observable y: number;
    constructor(x: number | Pos = 0, y = 0) {
        makeObservable(this);
        if (x.toString() == "[object Object]") {
            this.x = (x as Pos).x;
            this.y = (x as Pos).y;
        } else {
            this.x = x as number;
            this.y = y;
        }
    }

    @action add(value: Pos) {
        this.x += value.x;
        this.y += value.y;
        return this;
    }
    @action rem(value: Pos) {
        this.x -= value.x;
        this.y -= value.y;
        return this;
    }
    adding(value: Pos) {
        return new Pos(this.x + value.x, this.y + value.y);
    }
    removing(value: Pos) {
        return new Pos(this.x - value.x, this.y - value.y);
    }

    angleFromZero = (): number => {
        return this.y < 0
            ? Math.PI * 2 -
                  Math.acos(
                      this.x / Math.sqrt(this.x * this.x + this.y * this.y)
                  )
            : Math.acos(this.x / Math.sqrt(this.x * this.x + this.y * this.y));
    };
}
