#  Letter Combinations of a Phone Number

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

```
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Input: digits = ""
Output: []
```

## Using backtracking
```cpp
void helper(string digits, map<string, vector<char>> keypad, vector<string>  &result,string s)
{
    
    if(digits.length() == 0)
    {
        if(s.size() == 0)
        {
            return;
        }
        result.push_back(s);
        return;
    }
    string k = digits.substr(0, 1);
    vector<char> keys = keypad[k];
    for(char key : keys)
    {
        s.push_back(key);
        helper(digits.substr(1, digits.size()-1),keypad, result,s);
        s.pop_back();
        
    }
}
vector<string> letterCombinations(string digits) {
    map<string, vector<char>> keypad;
    keypad["2"] = {'a','b','c'};
    keypad["3"] = {'d','e','f'};
    keypad["4"] = {'g','h','i'};
    keypad["5"] = {'j','k','l'};
    keypad["6"] = {'m','n','o'};
    keypad["7"] = {'p','q','r','s'};
    keypad["8"] = {'t','u','v'};
    keypad["9"] = {'w','x','y','z'};
    vector<string> result;
    helper(digits,keypad, result,"");
    return result;
        
}
```

### Analysis
- **Time Complexity** - O(2 ^ n), 
- **Space Complexity** - O(1)

## TODO -Implement using queue
https://www.geeksforgeeks.org/iterative-letter-combinations-of-a-phone-number/