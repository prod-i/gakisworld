export const updateObjectInArray = (items, itemId, newObjProps) => {
    debugger
    return items.map(item => {
        if (item.id === itemId) {
            return { ...item, ...newObjProps}
        }
        return item;
    });
}