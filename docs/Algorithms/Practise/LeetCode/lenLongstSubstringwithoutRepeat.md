# Longest Substring Without Repeating Characters

https://leetcode.com/problems/longest-substring-without-repeating-characters/

https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/

Given a string s, find the length of the longest substring without repeating characters.
```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

## Approach 1 : Lenght of longest substring without repeating characters using Sliding window in O(n^3) time :

Consider all substrings one by one and check for each substring whether it contains all unique characters or not. There will be n*(n+1)/2 substrings. Whether a substring contains all unique characters or not can be checked in linear time by scanning it from left to right and keeping a map of visited characters. 


```cpp
bool areDistinct(string str, int i, int j)
{
    vector<bool> visited(256);
    for(int k=i;k<=j;k++)
    {
        if(visited[str[k]])
        {
            return false;
        }
        else
        {
            visited[str[k]]=true;
        }
        
    }
    return true;
}

int longestSubstrDistinctChars (string str)
{
    // your code here
   int ans = 0;
    for(int i=0;i<str.size(); i++)
    {
        for(int j=i;j<str.size(); j++)
        {
            if(areDistinct(str, i, j))
            {
                ans = max(ans, j-i+1); 
            }
        }
    }
    return ans;
}
```
### Analysis:
- **Time Complexity:** O(n^3) since we are processing n^2 substrings with maximum length n.
- **Auxiliary Space:** O(1)

## Approach 2 : Length of longest substring  without repeating characters using Sliding Window in o(n^2) time -

For each index i, find the the length of longest substring without repeating characters starting at index i. This can be done by starting at index i, and iterating until the end of the string, if a repeating character is found before the end of string we will break else update the answer if the current substring is larger.

```cpp
int longestSubstrDistinctChars (string str)
{
    // your code here
   int ans = 0;
    for(int i=0;i<str.size(); i++)
    {
        vector<bool> visited(256);
        for(int j=i;j<str.size(); j++)
        {
            if(visited[str[j]])
            {
                
                break;
            }
            else
            {
                ans = max(ans, j-i+1);
                visited[str[j]]=true;
            }
            
        }
    }
    return ans;
}
```

### Analysis:
- **Time Complexity:** O(n^2), (The outer loop runs in O(n) time, and the inner loop runs in O(n) in the worst case (considering all unique characters), resulting in a total time complexity of O(n^2).)
- **Auxiliary Space:** O(1)

## Approach 3 - Length of the longest substring without repeating characters using Binary Search on Answer:
The idea is to check if a substring of a certain size “mid” is valid (A size mid is valid if there exists atleast one substring of size mid which contains all unique characters ), then all the size less than “mid” will also be valid. Similarly, if a substring of size “mid” is not valid(A size mid is not valid if there does not exists any substring of size mid which contains all unique characters ), then all the size larger than “mid” will also not be valid. This allows us to apply binary search effectively.

Follow the steps below to solve the problem:

- Initialize low and high as 1 and string length respectively denoting the minimum and maximum possible answer.
- For any value mid check if there is any substring of length mid in the string that contains all the unique characters.
- If any such substring of length exists then update the value of answer with mid store the starting index of that substring and update low to mid+1 and, check for substrings having lengths larger than mid.
- Otherwise, if any such substring does not exist then update high to mid-1 and, check for substrings having lengths smaller than mid.

```cpp
bool isValid(string str, int mid)
{
    int count[256] = {0};
    
    int distinct = 0;
    
    bool found = false;
    
    for(int i = 0;i < str.size(); i++)
    {
        count[str[i]]++;
        if(count[str[i]] == 1)
        {
            distinct++;
        }
        
        if(i >= mid)
        {
            count[str[i - mid]]--;
            if(count[str[i - mid]] == 0)
            {
                distinct--;
            }
        }
        if( i >= mid - 1)
        {
            if(mid == distinct)
            {
                found = true;
            }
        }
    }
    
    return found;
}

int longestSubstrDistinctChars (string str)
{
    // your code here
    int ans = 0;
    int low = 0, high = str.size();
    
    while(low <= high)
    {
        int mid = (low + high)/2;
        
        if(isValid(str,mid))
        {
            ans = mid;
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    
    return ans;
}
```

### Analysis:
- **Time Complexity:**  O(N*logN), where N is the length of string. 
- **Auxiliary Space:** O(1)


## Approach 4 - Length of the longest substring without repeating characters using Sliding Window:

The approach stores the last indexes of already visited characters. The idea is to traverse the string from left to right, for each character at index j, update the i pointer(starting index of current window) to be the maximum of its current value and last Index of str[j] + 1. This step ensures that i is moved to the appropriate position to exclude any repeating characters within the new window.

