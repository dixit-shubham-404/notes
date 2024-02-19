# Edit Distance

https://www.geeksforgeeks.org/edit-distance-dp-5/

Given two strings str1 and str2 of length M and N respectively and below operations that can be performed on str1. Find the minimum number of edits (operations) to convert ‘str1‘ into ‘str2‘.  

- Operation 1 (INSERT): Insert any character before or after any index of str1
- Operation 2 (REMOVE): Remove a character of str1
- Operation 3 (Replace): Replace a character at any index of str1 with some other character.

```
Input:   str1 = “geek”, str2 = “gesek”
Output:  1
Explanation: We can convert str1 into str2 by inserting a ‘s’ between two consecutive ‘e’ in str2.
```

## Edit Distance Using Recursion

The idea is to process all characters one by one starting from either from left or right sides of both strings. 
Let us process from the right end of the strings, there are two possibilities for every pair of characters being traversed, either they match or they don’t match. If last characters of both string matches then there is no need to perform any operation So, recursively calculate the answer for rest of part of the strings. When last characters do not match, we can perform all three operations to match the last characters in the given strings, i.e. insert, replace, and remove. We then recursively calculate the result for the remaining part of the string. Upon completion of these operations, we will select the minimum answer.

When the last characters of strings matches. Make a recursive call EditDistance(M-1,N-1) to calculate the answer for remaining part of the strings.

When the last characters of strings don’t matches. Make three recursive calls as show below:

- Insert str1[N-1] at last of str2 : EditDistance(M, N-1)
- Replace str2[M-1] with str1[N-1] : EditDistance(M-1, N-1)
- Remove str2[M-1] : EditDistance(M-1, N)

```cpp
int min2(int x, int y)
{
    return x>y?y:x;
}
int min3(int x, int y, int z)
{
    return min2(min2(x,y),z);
}
int editDistance(string s, string t) {
    // Code here
    int s_size = s.size();
    int t_size = t.size();
    if(s_size == 0)
    {
        return t_size;
        
    }
    if(t_size == 0)
    {
        return s_size;
    }
    
    if(s[0] == t[0])
    {
        return editDistance(s.substr(1,s_size-1),t.substr(1,t_size-1));
    }
    
    return 1 + min3(editDistance(s, t.substr(1,t_size-1)), // insert
                    editDistance(s.substr(1,s_size-1),t), // delete
                    editDistance(s.substr(1,s_size-1),t.substr(1,t_size-1))); //replace
}
```

### Analysis
- **Time Complexity** - O(3 ^ m), 
- **Space Complexity** - O(1)

## Using DP memoization

```cpp
int min2(int x, int y)
{
    return x>y?y:x;
}
int min3(int x, int y, int z)
{
    return min2(min2(x,y),z);
}
int helper(string s, string t, int s_size, int t_size, vector<vector<int>> & dp)
{
    if(s_size == 0)
    {
        return t_size;
        
    }
    if(t_size == 0)
    {
        return s_size;
    }
    
    if(dp[s_size][t_size] != -1)
    {
        return dp[s_size][t_size];
    }
    
    if(s[0] == t[0])
    {
        dp[s_size][t_size] = helper(s.substr(1,s_size-1),t.substr(1,t_size-1),s_size-1,t_size-1, dp);
    }
    else
    {
        int insert = helper(s,t.substr(1,t_size-1),s_size,t_size-1, dp);
        int del = helper(s.substr(1,s_size-1),t,s_size-1,t_size, dp);
        int replace = helper(s.substr(1,s_size-1),t.substr(1,t_size-1),s_size-1,t_size-1, dp);
        
        dp[s_size][t_size] = 1 + min3 (insert, del, replace);
    }
    return dp[s_size][t_size];
}
int editDistance(string s, string t) {
    // Code here
    int s_size = s.size();
    int t_size = t.size();
    vector<vector<int>>  dp(s_size+1,vector<int>(t_size+1, -1));
    return helper(s,t,s_size,t_size, dp);
    
}
```

### Analysis
- **Time Complexity** - O(m * n), 
- **Space Complexity** -  O( m *n)+O(m+n) , (m*n) extra array space and (m+n) recursive stack space.

## TODO - Edit Distance Using Dynamic Programming (Bottom-Up Approach):

## TODO - Edit Distance Using Dynamic Programming (Optimisation in Space Complexity)

## Edit Distance Using Dynamic Programming (Further Optimisation in Space Complexity)