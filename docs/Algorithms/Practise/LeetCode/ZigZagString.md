# Zigzag Conversion

https://leetcode.com/problems/zigzag-conversion/

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```
P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
```

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

```cpp
string convert(string s, int numRows) {
    if(numRows <=1 )
    {
        return s;
    }
    
    int j=0, dir = -1;
    vector<string> vt(numRows,"");
    
    for(int i=0;i<s.size(); i++)
    {
        if( j == numRows -1 || j ==0)
        {
            dir = dir * -1;
        }
        vt[j]+=s[i];
        if(dir == 1)
        {
            j++;
        }
        else
        {
            j--;
        }
        
    }
    
    string ans="";
    for(auto it : vt)
    {
        ans = ans + it;
    }
    return ans;
}
```


### Analysis
- **Time Complexity** - O(n) where n is the size of string.
- **Space Complexity** - O(numRows), for the vector array.