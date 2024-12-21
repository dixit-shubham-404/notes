# Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.


```
Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
```

## Approach using Binary Search
```cpp
int findLeft(vector<int>& nums, int target)
{
    int left = 0, right = nums.size()-1;
    
    while(left <= right)
    {
        int mid = (left+right)/2;
        if(nums[mid] == target && ((mid !=0 && nums[mid] != nums[mid-1]) || (mid == 0)) )
        {
            return mid;
        }
        else if(nums[mid] < target)
        {
            left = mid+1;
        }
        else{
            right = mid-1;
        }
    }
    return -1;
}


int findRight(vector<int>& nums, int target)
{
    int left = 0, right = nums.size()-1;
    int n = nums.size();
    while(left <= right)
    {
        int mid = (left+right)/2;
        if(nums[mid] == target && ((mid != n-1 && nums[mid] != nums[mid+1]) || (mid == n-1)) )
        {
            return mid;
        }
        else if(nums[mid] <= target)
        {
            
            left = mid+1;
        }
        else{
            right = mid-1;
        }
    }
    return -1;
}

vector<int> searchRange(vector<int>& nums, int target) {
    int left = findLeft(nums, target);
    cout<<"main left ="<<left<<endl;
    int right = findRight(nums, target);
    cout<<"main right ="<<right<<endl;
    vector<int> result = {left, right};
    
    return result;
}
```

### Analysis
- **Time Complexity** - O(log(n)).
- **Space Complexity** - O(1).