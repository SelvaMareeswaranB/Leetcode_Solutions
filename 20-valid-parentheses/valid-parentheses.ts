const pairs = {
    "(": ")",
    "[": "]",
    "{": "}"

}


function isValid(str) {
    let stack = []
    for (let s of str) {
        if (pairs[s]) {
            stack.push(pairs[s])
        }
        else {
            let last = stack.pop()
            if (last !== s) {
                return false

            }
        }
    }

    return !stack.length
};
console.log(isValid("()"))



