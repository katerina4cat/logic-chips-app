import { Colors, Color } from "@shared/models/common/Colors";
import { States } from "./State";

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
