function isAcronym(words: string[], s: string): boolean {
    if(s.length !== words.length) return false
    
    for(let i=0;i<words.length;i++){
     if(words[i][0] !== s[i]) return false
    } 
    return true
 };