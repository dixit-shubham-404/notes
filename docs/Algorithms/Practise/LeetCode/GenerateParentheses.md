# Generate Parentheses

https://leetcode.com/problems/generate-parentheses/

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

```
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Input: n = 1
Output: ["()"]
```

```cpp
void helper(vector<string> & ans, string curr, int open, int closed, int n)
{
    if(n == open && n == closed)
    {
        ans.push_back(curr);
        return;
    }
    if(open == 0)
    {
        helper(ans,curr+'(',open+1,closed,n);
        return;
    }
    if(open == n)
    {
        helper(ans,curr+')',open,closed+1,n);
        return;
    }
    if(open>=closed && open > 0)
    {
        helper(ans,curr+'(',open+1,closed,n);
        helper(ans,curr+')',open,closed+1,n);
    }
}
vector<string> generateParenthesis(int n) {
    int open =0;
    int closed=0;
    vector<string> ans;
    helper(ans,"",open,closed,n);
    return ans;
}
```

### Analysis
- **Time Complexity** - O(2^n).
- **Space Complexity** - O(n).