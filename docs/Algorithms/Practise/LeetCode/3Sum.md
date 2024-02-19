#  3Sum
https://leetcode.com/problems/3sum/

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
```

## Brute Force using three loops

```cpp
bool find3Numbers(int A[], int arr_size, int sum) 
{
    // Fix the first element as A[i] 
    for (int i = 0; i < arr_size - 2; i++)
    { 
 
        // Fix the second element as A[j] 
        for (int j = i + 1; j < arr_size - 1; j++)
        { 
 
            // Now look for the third number 
            for (int k = j + 1; k < arr_size; k++)
            { 
                if (A[i] + A[j] + A[k] == sum)
                { 
                    cout << "Triplet is " << A[i] <<
                        ", " << A[j] << ", " << A[k]; 
                    return true; 
                } 
            } 
        } 
    } 
 
    // If we reach here, then no triplet was found 
    return false; 
} 
```

### Analysis
- **Time Complexity** - O(n ^ 3)
- **Space Complexity** - O(1)

## Using Two pointer approach

Fix the first element and then create two pointer left and right i+1 and n-1. After sorting the whole array.

```cpp
vector<vector<int>> threeSum(vector<int>& nums) {
    int n=nums.size();
    sort(nums.begin(),nums.end());
    int left,right;
    vector<vector<int>> result;
    for(int i=0;i<n-1;i++)
    {
        left = i+1;
        right = n-1;
        while(left<right)
        {
            if(nums[i] + nums[left] + nums[right] == 0)
            {
                vector<int> temp{nums[i], nums[left], nums[right]};
                if(find(result.begin(), result.end(), temp) == result.end())
                    result.push_back(temp);
                left++;
                right--;
            }
            else if(nums[i] + nums[left] + nums[right] < 0)
            {
                left++;
            }
            else
            {
                right--;
            }
        }
    }
    return result;
}
```

### Analysis
- **Time Complexity** - O(n ^ 2)
- **Space Complexity** - O(1)

This has given TLE.

