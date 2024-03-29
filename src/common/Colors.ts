import { States } from "./State";

export type Color = { color: string; title: string };
export const Colors: { [key: string]: Color } = {
    floating: { color: "#fff", title: "" },
    red: { color: "#e93145", title: "Красный" },
    green: { color: "#1fb03a", title: "Зелёный" },
    indigo: { color: "#8c49ff", title: "Индиго" },
    blue: { color: "#147fff", title: "Синий" },
    yellow: { color: "#ff9b00", title: "Жёлтый" },
};
export const getColorWithState = (state: States, Color: Color) => {
    return `color-mix(in srgb, ${
        state == States.FLOATING ? Colors.floating.color : Color.color
    } ${
        state == States.HIGH || state == States.FLOATING
            ? 100
            : state == States.UNDEFINED
            ? 0
            : 25
    }%, #000)`;
};
