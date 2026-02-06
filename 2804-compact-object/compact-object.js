/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */

function isPlainObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
}

var compactObject = function (obj) {
     if (!obj) return obj;
    const isObject = isPlainObject(obj);
    let ans = isObject ? {} : [];


    for (let i in obj) {
        if (isPlainObject(obj[i]) || Array.isArray(obj[i])) {
            isObject
                ? (ans[i] = compactObject(obj[i]))
                : ans.push(compactObject(obj[i]));
        } else {
            Boolean(obj[i]) ? (isObject ? (ans[i] = obj[i]) : ans.push(obj[i])) : "";
        }
    }
    return ans;
};