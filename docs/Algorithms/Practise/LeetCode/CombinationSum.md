# Combination Sum
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

```
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
```

```cpp
void helper(vector<int>& candidates, vector<vector<int>> &result, vector<int> &current, int target, int curr_sum, int index)
{
    if(curr_sum == target)
    {
        result.push_back(current);
        return;
    }
    if(curr_sum > target)
    {
        return;
    }
    if(index >= candidates.size())
    {
        return;
    }
    current.push_back(candidates[index]);
    helper(candidates,result, current, target, curr_sum+candidates[index], index);
    current.pop_back();
    helper(candidates,result, current, target, curr_sum, index+1);
    
}
vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
    vector<int> current;
    vector<vector<int>> result;
    helper(candidates,result, current, target, 0, 0);
    return result;
}
```

### Analysis
- **Time Complexity** - O(2 ^ n)
- **Space Complexity** - O(n)