import { State } from "../Simulating/Pin";

export type Color = { color: string; title: string };
export const Colors: { [key: string]: Color } = {
    floating: { color: "#fff", title: "" },
    red: { color: "#e93145", title: "Красный" },
    green: { color: "#1fb03a", title: "Зелёный" },
    indigo: { color: "#8c49ff", title: "Индиго" },
    blue: { color: "#147fff", title: "Синий" },
    yellow: { color: "#ff9b00", title: "Жёлтый" },
};
export const getColorWithState = (state: State.States, Color: Color) => {
    return `color-mix(in srgb, ${
        state == State.States.FLOATING ? Colors.floating.color : Color.color
    } ${
        state == State.States.HIGH || state == State.States.FLOATING
            ? 100
            : state == State.States.UNDEFINED
            ? 0
            : 25
    }%, #000`;
};
