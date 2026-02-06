/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */

function isPlainObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
}

var compactObject = function (obj) {
    let ans = isPlainObject(obj) ? {} : [];

    for (let i in obj) {
        const isObject = isPlainObject(obj[i]);
        if (isObject || Array.isArray(obj[i])) {
            isPlainObject(obj)
                ? (ans[i] = compactObject(obj[i]))
                : ans.push(compactObject(obj[i]));
        } else {
            Boolean(obj[i]) ? (isPlainObject(obj) ? (ans[i] = obj[i]) : ans.push(obj[i])) : "";
        }
    }
    return ans;
};