//TODO CLEANUP / REMOVE
export const between = (x, min, max) => x >= min && x <= max;

export const addDays = (days) => {
    let result = new Date();
    return new Date(result.setDate(result.getDate() + days));
}
