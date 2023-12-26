export class Pos {
    x: number;
    y: number;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    add(value: Pos) {
        this.x += value.x;
        this.y += value.y;
        return this;
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
