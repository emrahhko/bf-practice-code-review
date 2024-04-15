/**
 * Difference function that removes specific values from an array.
 *
 * @param {Array} arr1 - The first array to copy.
 * @param {Array} arr2 - The second array with the element to remove from the first array.
 * @returns {Array} The filtered new array (copy from array 1 without the element of array2).
 */

export const difference = (arr1 = [], arr2 = []) => {
    const newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            if (newArr.includes(arr1[i])) {
                continue;
            } else {
                newArr.push(arr1[i]);
            }
        }
    }
    return newArr;
};
