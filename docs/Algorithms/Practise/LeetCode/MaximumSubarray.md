# Maximum Subarray
https://leetcode.com/problems/maximum-subarray/

Given an integer array nums, find the subarray with the largest sum, and return its sum.

```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
```

## Using Dynamic Approach

```
For each index i, DP[i] stores the maximum possible Largest Sum Contiguous Subarray ending at index i, and therefore we can calculate DP[i] using the mentioned state transition:

DP[i] = max(DP[i-1] + arr[i] , arr[i] )
```

```cpp
int maxSubArray(vector<int>& nums) {
    int n = nums.size();
    int dp[n];
    dp[0]=nums[0];
    int ans=dp[0];
    for(int i=1;i<n;i++)
    {
        dp[i] = max(nums[i],dp[i-1] + nums[i]);
        ans = max(ans,dp[i]);
        // cout<<"for i = "<<i<<" ans = "<<ans<<" temp = "<<temp<<" dp[i] = "<< dp[i];
    }
    return ans;
}
```

### Analysis
- **Time Complexity** - O(n), 
- **Space Complexity** - O(n)

## Using Kadane Algorithm

- Initialize the variables max_so_far = INT_MIN and max_ending_here = 0
- Run a for loop from 0 to N-1 and for each index i: 
    - Add the arr[i] to max_ending_here.
    - If  max_so_far is less than max_ending_here then update max_so_far  to max_ending_here.
    - If max_ending_here < 0 then update max_ending_here = 0
- Return max_so_far

```cpp
int maxSubArray(vector<int>& nums) {
    int max_so_far = INT_MIN, max_ending_here = 0;
    for(int i=0; i<nums.size();i++)
    {
        max_ending_here += nums[i];
        if(max_so_far < max_ending_here)
        {
            max_so_far = max_ending_here;
        }
        
        if(max_ending_here < 0)
        {
            max_ending_here = 0;
        }
    }
    return max_so_far;
}
```
### Analysis
- **Time Complexity** - O(n), 
- **Space Complexity** - O(1)

## TODO - Print the Largest Sum Contiguous Subarray: