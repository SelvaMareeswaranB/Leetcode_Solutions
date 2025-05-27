function restoreString(s: string, indices: number[]): string {
    let cache:string[] =[]
    for(let i=0;i<s.length;i++){
     cache[indices[i]]=s[i]

    }
    let result = ""
    for(let i=0;i<cache.length;i++) result+=cache[i]
    return result
};
