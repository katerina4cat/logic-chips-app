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
export const int2hex = (num: number) => "#" + num.toString(16).padStart(6, "0");
