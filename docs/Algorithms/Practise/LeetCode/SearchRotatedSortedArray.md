# Search in Rotated Sorted Array

https://leetcode.com/problems/search-in-rotated-sorted-array/

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1


Input: nums = [1], target = 0
Output: -1
```

## Approach : binary search


At any point during the search in the rotated array, one half (either the left or the right) will always be sorted. Determining which half is sorted is crucial for our modified binary search.

If left half [low...mid] is sorted: We know this if the element at  {low}  is less than or equal to the element at  {mid} . In a normally sorted array, if the start is less than or equal to the midpoint, it means all elements till the midpoint are in the correct increasing order.

If the target lies within this sorted left half: We know this if the target is greater than or equal to the element at  {low}  and less than the element at  {mid} . If this is the case, we then move our search to this half, meaning, we update  {high}  to  {mid} - 1 .

Otherwise: The target must be in the right half. So, we update  {low}  to  {mid} + 1 .

If right half [mid...high] is sorted: This is the else part. If the left half isn't sorted, the right half must be!

If the target lies within this sorted right half: We know this if the target is greater than the element at  {mid}  and less than or equal to the element at  {high} . If so, we move our search to this half by updating  {low}  to  {mid} + 1 .

Otherwise: The target must be in the left half. So, we update  {high}  to  {mid} - 1 .

```cpp
int search(vector<int>& nums, int target) {
    int low = 0,high = nums.size()-1;
    while(low <= high)
    {
        int mid=(low + high)/2;
        
        if(nums[mid] == target)
        {
            return mid;
        }
        
        if(nums[low] <= nums[mid])
        {
            if( nums[low] <= target && target < nums[mid])
            {
                high = mid -1;
            }
            else
            {
                low = mid +1;
            }
        }
        else{
            if(nums[mid]< target && target <= nums[high])
            {
                low = mid+1;
            }else{
                high = mid -1;
            }
        }
    }
    
    return -1;
        
}

```

### Analysis
- **Time Complexity** - O(log(n)), 
- **Space Complexity** - O(1)

