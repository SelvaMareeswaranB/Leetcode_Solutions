function findWordsContaining(words: string[], x: string): number[] {
    let result :number[] = []
    for(let i=0;i<words.length;i++){
        words[i].includes(x) ? result.push(i) : ""
    }
    return result
};