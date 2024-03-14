export const removeElement = (array: any[], element: any) => {
    const index = array.findIndex((el) => el == element);
    if (index != -1) array.splice(index, 1);
    return array;
};
export const removeElementByID = (array: any[], element: any) => {
    const index = array.findIndex((el) => el.id == element.id);
    if (index != -1) array.splice(index, 1);
    return array;
};
