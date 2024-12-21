# Find All Numbers Disappeared in an Array

Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

```
Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]
```

## Approach
Try with modified version og cyclic sort


```cpp
vector<int> findDisappearedNumbers(vector<int>& nums) {
    int i=0;
    
    while(i< nums.size())
    {
        if(nums[i] == i+1)
        {
            i++;
        }
        else if(nums[i] == nums[nums[i]-1])
        {
            i++;
        }
        else
        {
            swap(nums[i], nums[nums[i]-1]);
        }
    }
    
    vector<int> result;
    for(int i=0;i<nums.size();i++)
    {
        if(nums[i] != i+1)
        {
            result.push_back(i+1);
        }
    }
    return result;
}
```