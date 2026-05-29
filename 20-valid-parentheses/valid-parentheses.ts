 const pairs = {
        "(" : ")",
        "[":"]",
        "{" : "}"
    }


function isValid(str: string): boolean {
     let stack = []
    for(let s of str){
        if(s == "[" || s == "{" ||  s == "("){
            stack.push(s)
        }
        else{
            let last = stack.pop()
             if(last + pairs[last] !== last + s ) return false
        }
    }
    
    return !stack.length
};

   


