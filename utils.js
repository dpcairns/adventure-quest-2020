// parameters are kind of like IMPORTS
export function findById(someArray, id) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        // is this item a match with our id?
        if (item.id === id) {
            return item;
        }
    }
}