function twoSum(numbers: number[], target: number): number[] {
    let l=0;
    let h=numbers.length-1
    while(l<h){
        let sum = numbers[l]+numbers[h]
        if(sum === target) return [l+1,h+1]
        else if(sum>target) h--
        else l++
    }
    return []
};