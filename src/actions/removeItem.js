export const REMOVE_ITEM = "REMOVE_ITEM";

export const removeItem = item => {
    return {
        type: REMOVE_ITEM,
        payload: item
    }
}