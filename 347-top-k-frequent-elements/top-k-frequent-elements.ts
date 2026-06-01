function topKFrequent(arr: number[], k: number): number[] {
    let map = new Map()

    for (let item of arr) {
        map.set(item, (map.get(item) ?? 0) + 1)
    }

    const bucket = []

    for (let item of map.keys()) {

        const freq = map.get(item)
        if (!bucket[freq]) {
            bucket[freq] = []
        }

        bucket[freq].push(item)
    }

    const res = []

    for (let i = bucket.length - 1; i >= 0; i--) {
        if (!bucket[i]) continue
        for (let item of bucket[i]) {
            res.push(item)
            if (res.length === k) return res
        }
    }
    return res
};