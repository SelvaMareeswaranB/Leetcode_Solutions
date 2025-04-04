function isAnagram(s: string, t: string): boolean {
    if(s.length!==t.length) return false
    let result = new Array(26).fill(0)
    for(let i=0;i<s.length;i++){
        result[s.charCodeAt(i)-97]++;
        result[t.charCodeAt(i)-97]--;
    }

    return result.every((c)=>c===0)
};