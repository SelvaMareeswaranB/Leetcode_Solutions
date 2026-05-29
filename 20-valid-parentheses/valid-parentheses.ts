function isValid(str: string): boolean {
     let stack = []
    for(let s of str){
        if(s == "[" || s == "{" ||  s == "("){
            stack.push(s)
        }
        else{
            let last = stack.pop()
            console.log(PairParanthesis(last))
             if(last + PairParanthesis(last) !== last + s ) return false
        }
    }
    
    return !stack.length
};

function PairParanthesis(key:string):string{
    const pairs = {
        "(" : ")",
        "[":"]",
        "{" : "}"
    }
    return pairs[key]
}

