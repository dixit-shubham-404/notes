# Unique Binary Search Tree

Link - https://leetcode.com/problems/unique-binary-search-trees/

Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

```
Input: n = 3
Output: 5

Input: n = 1
Output: 1
```
## Using DP

The solution is based on Dynamic Programming. For all possible values of i, consider i as root, then [1 . . . i-1] numbers will fall in the left subtree and [i+1 . . . N] numbers will fall in the right subtree. 

The count of all possible BST’s will be count(N) = summation of (count(i-1)*count(N-i)) where i lies in the range [1, N].

```cpp
int numTrees(int n) {
    if(n==0 || n==1)
    {
        return 1;
    }
    
    int dp[n+1];
    fill_n(dp, n + 1, 0);
    dp[0]=1;
    dp[1]=1;
    
    for(int i=2;i<=n;i++)
    {
        for(int j=1;j<=i;j++)
        {
            dp[i] = dp[i] + (dp[i-j] * dp[j-1]);
        }
    }
    
    return dp[n];
}
```