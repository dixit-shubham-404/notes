# Substring with Concatenation of All Words
https://leetcode.com/problems/substring-with-concatenation-of-all-words/


You are given a string s and an array of strings words. All the strings of words are of the same length.

A concatenated substring in s is a substring that contains all the strings of any permutation of words concatenated.

For example, if words = `["ab","cd","ef"]`, then `"abcdef"`, `"abefcd"`, `"cdabef"`, `"cdefab"`, `"efabcd"`, and `"efcdab"` are all concatenated strings. `"acdbef"` is not a concatenated substring because it is not the concatenation of any permutation of words.
Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.

```
Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]
Explanation: Since words.length == 2 and words[i].length == 3, the concatenated substring has to be of length 6.
The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.
The output order does not matter. Returning [9,0] is fine too.
```

```cpp
vector<int> findSubstring(string s, vector<string>& words) {
    unordered_map<string, int> count;
    for(string word : words)
        count[word]++;
    
    int n= s.length(), num = words.size(), len = words[0].length();
    
    vector<int> indexes;
    
    for(int i = 0;i < n - num*len + 1; i++)
    {
        unordered_map<string, int> seen;
        int j=0;
        for(; j< num;j++)
        {
            string word = s.substr(i+j*len,len);
            if(count.find(word) != count.end())
            {
                seen[word]++;
                if(seen[word]> count[word])
                {
                    break;
                }
            }
            else
            {
                break;
            }
        }
        if(j == num)
        {
            indexes.push_back(i);
        }
    }
    return indexes;
}
```

### Analysis
- **Time Complexity** - O(sizeOfString * sizeOfWords), 
- **Space Complexity** - O(sizeOfWords), because of map

## TODO - still giving TLE.