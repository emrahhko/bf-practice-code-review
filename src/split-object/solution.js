/**
 * SplitObject split an object into an array of objects. Each entry in the array will be one
key/value pair from the object..
 *
 * @param {object} [toSeparate = {}] -  The object to split into key/value pairs.
 * @returns {Array} Returns a new array with one entry for each key/value pair.
 */

export const splitObject = (toSeparate = {}) => {
    const newArr = [];
    for (const key in toSeparate) {
        newArr.push({ [key]: toSeparate[key] });
    }
    return newArr;
};
