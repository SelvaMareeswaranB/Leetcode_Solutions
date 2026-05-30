function containsDuplicate(nums: number[]): boolean {

    const cache = new Set()

    for(let n of nums){
        if(cache.has(n)) return true
        cache.add(n)
    }

    return false
    
};