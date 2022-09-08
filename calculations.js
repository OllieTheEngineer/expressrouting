function meanFinder(nums) {
    if(nums.length === 0) return 0;
    return nums.reduce(function(accu, currIn) {
        return accu + currIn / nums.length;
    })
}

function medianFinder(nums) {
    
}