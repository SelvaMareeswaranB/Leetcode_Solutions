function groupAnagrams(strs: string[]): string[][] {
    const group:{[key:string]:string[]} = {}

    for (let word of strs) {
        const key = [...word].sort().join("")

        if (!group[key]) group[key] = []
        group[key].push(word)
    }
    return Object.values(group)


};