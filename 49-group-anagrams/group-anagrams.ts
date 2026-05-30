function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string,string[]>()

    for (let word of strs) {
        const key = [...word].sort().join("")

      const arr = map.get(key) ?? []
      arr.push(word)
      map.set(key,arr)

    }
    return [...map.values()]


};