function secondHighest(s: string): number {
let first = -1
let second = -1

for(const ch of s){
    const num = Number(ch)
    if(num > first){
           second=first
        first = num
     
    }
    else if(num > second && num !== first){
        second = num
    }
}
return second

};


