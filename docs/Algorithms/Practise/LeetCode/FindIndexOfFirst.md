# Find the Index of the First Occurrence in a String

https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

```
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.


Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
```

```cpp
bool isPart(int start,string haystack, string needle)
{
    for(int j=0; j< needle.size();j++)
    {
        if(needle[j] != haystack[j+start])
        {
            return false;
        }
    }
    return true;
}
int strStr(string haystack, string needle) {
    int till = haystack.size() - needle.size();
    for(int i=0;i<= till;i++)
    {
        if(isPart(i,haystack,needle))
        {
            return i;
        }
        }
    return -1;
}
```

### Analysis
- **Time Complexity** - O(m*n).
- **Space Complexity** - O(n).