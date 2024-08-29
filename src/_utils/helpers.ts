export function removeDuplecatedCategory(arr: String[] | []) {
    let uniqeCat = Array.from(new Set(arr));
    return uniqeCat;
}
