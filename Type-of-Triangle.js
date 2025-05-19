/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    function checkTriangle(){
        return (nums[0]+nums[1] > nums[2]) && (nums[1]+nums[2] > nums[0]) && (nums[0]+nums[2] > nums[1])
    }
    if(!checkTriangle())return "none"
    else if((nums[0] == nums[1]) && (nums[1] == nums[2]))return "equilateral"
    else if((nums[0] == nums[1]) || (nums[1] == nums[2]) || (nums[2] == nums[0]))return "isosceles"
    return "scalene"
};