# 3Sum Closest

https://leetcode.com/problems/3sum-closest/

https://www.geeksforgeeks.org/find-a-triplet-in-an-array-whose-sum-is-closest-to-a-given-number/

Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

```
Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
```

## Brute Force - Using three nested loop

```cpp
int solution(vector<int>& arr, int x)
{
    // To store the closest sum
    int closestSum = INT_MAX;
 
    // Run three nested loops each loop 
    // for each element of triplet
    for (int i = 0; i < arr.size() ; i++) 
    {
        for(int j =i + 1; j < arr.size(); j++)
        {
            for(int k =j + 1; k < arr.size(); k++)
            {
                //update the closestSum
                if(abs(x - closestSum) > abs(x - (arr[i] + arr[j] + arr[k])))
                    closestSum = (arr[i] + arr[j] + arr[k]);
            } 
        }
    }
    // Return the closest sum found
    return closestSum;
}

```
### Analysis
- **Time Complexity** - O(n*n*n)
- **Space Complexity** - O(1)

## Using two pointer approach
sort the array and fixed the one element and find closes sum with the rest.

```cpp
int threeSumClosest(vector<int>& nums, int target) {
    sort(nums.begin(), nums.end());
    long int closest_sum = 1000000000;;
    for(int i=0;i<nums.size();i++)
    {
        int left = i+1, right = nums.size()-1;
        while(left < right)
        {
            int sum = nums[i] + nums[left] + nums[right];
            if(sum == target)
            {
                return sum;
            }
            if(abs(target - sum) < abs(target - closest_sum))
            {
                closest_sum = sum;
                
            }
            if(sum > target)
            {
                right--;
            }
            else
            {
                left++;
            }
        }
    }
    return closest_sum;
    }
```

### Analysis
- **Time Complexity** - O(n*n)
- **Space Complexity** - O(1)