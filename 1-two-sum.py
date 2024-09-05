class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            fd=target-nums[i]
            k=nums[i+1:]
            if fd in k:
                return([i,k.index(fd)+i+1])
        