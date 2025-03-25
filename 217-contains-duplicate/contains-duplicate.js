/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let cache={}
    for(let i=0;i<nums.length;i++){
        if(cache[nums[i]]===true){
            return true;
        }
        else{
            cache[nums[i]]=true
        }
    }
    return false
};
