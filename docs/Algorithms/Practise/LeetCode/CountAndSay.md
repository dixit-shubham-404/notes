# Count and Say

The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

```
Input: n = 4
Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
```

```
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
1211 is read off as "one 1, one 2, then two 1s" or 111221.
111221 is read off as "three 1s, two 2s, then one 1" or 312211.
```

```cpp
tring countAndSay(int n) {
    if(n == 1)
    {
        return "1";
    }
    if(n == 2)
    {
        return "11";
    }
    string prev = countAndSay(n-1);
    string now = "";
    int count=1;
    for(int i=1;i< prev.size();i++)
    {
        
        if(prev[i] != prev[i-1])
        {
            now = now + to_string(count) + prev[i-1];
            count =0;
        }
        count++;
    }
    now = now + to_string(count) + prev[prev.size()-1];
    return now;
}
```

### Analysis
- **Time Complexity** - O(n) - recursion
- **Space Complexity** - O(n) - recursion stack