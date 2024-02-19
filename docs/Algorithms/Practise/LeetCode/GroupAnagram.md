# Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

```
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

## Using map

```cpp
vector<vector<string>> groupAnagrams(vector<string>& strs) {
    map<string, vector<string>> mp;
    for(string str : strs)
    {
        string temp = str;
        sort(temp.begin(),temp.end());
        mp[temp].push_back(str);
    }
    vector<vector<string>> result;
    for(auto it:mp)
    {
        result.push_back(it.second);
    }
    return result;
}
```

### Analysis
- **Time Complexity** - O(NM * logM), M is the size of the word.
- **Space Complexity** - O(N)