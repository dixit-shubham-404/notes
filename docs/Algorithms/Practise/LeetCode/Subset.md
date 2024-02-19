# Subset

https://leetcode.com/problems/subsets/

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

```
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

## Using BackTracking

We will use back tracking approach , will insert one element into subset will call with next index and then pop back.

```cpp
void callSubset(vector<int>& nums,vector<vector<int>>& result,vector<int>& subset, int index)
{
    result.push_back(subset);
    for(int i=index;i<nums.size();i++)
    {
        subset.push_back(nums[i]);
        callSubset(nums,result,subset,i+1);
        subset.pop_back();
    }
    
}
vector<vector<int>> subsets(vector<int>& nums) {
    vector<vector<int>> result;
    vector<int> subset;
    int index =0;
    callSubset(nums,result,subset,index);
    return result;
}
```

### Analysis
- **Time Complexity** - O(2^n), Because of traversing.
- **Space Complexity** -
    - `O(N)` : if we only print our subsets, there will at max N recursion stack
    - `O(2^N)` : if we would store all the subsets we will need 2^N memory blocks to store each subset

## Using BitManupulation

```
Observation: A bit can be either 0 or 1. What can we deduce from this?

Since, each element has only two choices i.e. either get included or get excluded. Assign these choices to a bit representation such that:
0 means Excluded
1 means Included
i’th bit represents i’th element of the array

Now let’s say, there are N elements in the array. This array will have 2^N subsets. These subsets can be uniquely expressed in form of Bit representation of number from 0 to (2^N)-1.

Example: If elements in an array of size 2 = {A, B}
All the subsets of this array form the bit representation of number from 0 to (2^2)-1 i.e. 0 to 3

0 = 00 => A excluded, B excluded => { empty }
1 = 01 => A excluded, B included => { B }
2 = 10 => A included, B excluded => { A }
3 = 11 => A included, B included=> { A, B }
```

```cpp
void findSubsets(int nums[], int n)
{
    // Loop through all possible subsets using bit manipulation
    for (int i = 0; i < (1 << n); i++) {
 
        // Loop through all elements of the input array
        for (int j = 0; j < n; j++) {
 
            // Check if the jth bit is set in the current subset
            if ((i & (1 << j)) != 0) {
 
                // If the jth bit is set, add the jth element to the subset
                cout << nums[j] << " ";
            }
        }
 
        cout << endl;
    }
}
```

### Analysis
- **Time Complexity** - O(2^n), two loops
- **Space Complexity** -
    - `O(1)` : if we only print our subsets, there will at max N recursion stack
    - `O(2^N)` : if we would store all the subsets we will need 2^N memory blocks to store each subset