/**
 * @param {number} n
 * @param {number} w
 * @param {number} maxWeight
 * @return {number}
 */
var maxContainers = function(n, w, maxWeight) {
        let cargoCount = n*n
    let currentWeight = cargoCount * w
    while(currentWeight > maxWeight){
      
         cargoCount=cargoCount-1
         currentWeight = cargoCount * w
    }
    return cargoCount
};