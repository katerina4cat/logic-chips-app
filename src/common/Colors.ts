import { States } from "./State";
export interface Color {
    color: string;
    title: string;
    id: number;
}
export const Colors: { [key: string]: Color } = {
    floating: { id: 0, color: "#fff", title: "" },
    red: { id: 1, color: "#e93145", title: "Красный" },
    green: { id: 2, color: "#1fb03a", title: "Зелёный" },
    indigo: { id: 3, color: "#8c49ff", title: "Индиго" },
    blue: { id: 4, color: "#147fff", title: "Синий" },
    yellow: { id: 5, color: "#ff9b00", title: "Жёлтый" },
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
export const int2hex = (num: number) => "#" + num.toString(16).padStart(6, "0");
