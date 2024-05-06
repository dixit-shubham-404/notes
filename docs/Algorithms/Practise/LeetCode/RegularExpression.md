# Regular Expression Matching

https://leetcode.com/problems/regular-expression-matching/

Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
- '.' Matches any single character.​​​​
- '*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

example - 

```
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
```

## Apprach using Dynamic Programming

Following rules can be kept in mind
- empty string match empty pattern `dp[0][0] = true`
- first row should be false as empty pattern can fill string of any length
- for fir col we can mark false blindly except if pattern[i] == '*' then look at two row up `dp[i][0] = dp[i-2][0]`
- if pattern[i] == string[j] look at diagnol back up `dp[i-1][j-1]`
- if pattern [i] == '.' look at diagnol back up `dp[i-1][j-1]`
- if pattern [i] == '*' && pattern[i-1] =='.' look at two up or one left `dp[i][j] = dp[i-2][j] || dp[i][j-1]`
- if pattern [i] == '*' && pattern[i-1] == s[j-1] look at two up or one left `dp[i][j] = dp[i-2][j] || dp[i][j-1]`
- if pattern [i] == '*' look at two up `dp[i][j] = dp[i-2][j]`


```cpp
bool isMatch(string s, string p) {
    bool dp[p.size()+1][s.size()+1];
    
    dp[0][0] = true;
    
    for(int i=1;i<=p.size();i++)
    {
        if(p[i-1] == '*')
        {
            dp[i][0] = dp[i-2][0];
        }
        else
        {
            dp[i][0] = false;
        }
    }
    
    for(int j=1;j<=s.size();j++)
    {
        dp[0][j] = false;
    }
    
    for(int i=1;i<=p.size(); i++)
    {
        for(int j=1;j<=s.size();j++)
        {
            if(p[i-1] == '.')
            {
                dp[i][j] = dp[i-1][j-1];
            }
            else if(p[i-1] == '*' && p[i-2] == '.')
            {
                dp[i][j] = dp[i-2][j] || dp[i][j-1];
            }
            else if(p[i-1] == '*' && p[i-2] == s[j-1])
            {
                dp[i][j] = dp[i-2][j] || dp[i][j-1];
            }
            else if(p[i-1] == '*')
            {
                dp[i][j] = dp[i-2][j];
            }
            else if(p[i-1] == s[j-1])
            {
                dp[i][j] = dp[i-1][j-1];
            }
            else{
                dp[i][j] = false;
            }
            
        }
    }
    return dp[p.size()][s.size()];
}
```

### Analysiis
- **Time Complexity** - The time complexity is O(sizeOfPattern *  sizeOfString).
- **Space Complexity** - O(sizeOfPattern *  sizeOfString)