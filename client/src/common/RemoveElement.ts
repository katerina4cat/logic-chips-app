import { action } from "mobx";

export const removeElement = action((array: any[], element: any) => {
    const index = array.findIndex((el) => el == element);
    if (index != -1) array.splice(index, 1);
    return array;
});
export const removeElementByID = action((array: any[], element: any) => {
    const index = array.findIndex((el) => el.id == element.id);
    if (index != -1) array.splice(index, 1);
    return array;
});
export const removeElementByField = action(
    (array: any[], element: any, field: string) => {
        const index = array.findIndex((el) => el[field] == element);
        if (index != -1) array.splice(index, 1);
        return array;
    }
);
