# Longest Palindromic Substring

https://leetcode.com/problems/longest-palindromic-substring/

https://www.geeksforgeeks.org/longest-palindromic-substring/

## Approch using Dynamic Programming LCS
The main idea behind the approach is that if we know the status (i.e., palindrome or not) of the substring ranging [i, j], we can find the status of the substring ranging [i-1, j+1] by only matching the character str[i-1] and str[j+1].

If the substring from i to j is not a palindrome, then the substring from i-1 to j+1 will also not be a palindrome. Otherwise, it will be a palindrome only if str[i-1] and str[j+1] are the same.
Base on this fact, we can create a 2D table (say table[][] which stores status of substring str[i . . . j] ), and check for substrings with length from 1 to N. For each length find all the substrings starting from each character i and find if it is a palindrom or not using the above idea. The longest length for which a palindrome formed will be the required asnwer.

Follow the steps mentioned below to implement the idea:

- Maintain a boolean table[N][N] that is filled in a bottom-up manner.
- Iterate for all possible lengths from 1 to N:
    - For each length iterate from i = 0 to N-length:
        - Find the end of the substring j = i+length-1.
        - The value of table[i][j] is true, if the substring is palindrome, otherwise false.
        - To calculate table[i][j], check the value of table[i+1][j-1]:
            - if the value is true and str[i] is the same as str[j], then we make table[i][j] true.
            - Otherwise, the value of table[i][j] is made false.
        - We have to fill the table initially for substrings of length = 1 and length = 2.
    - Update the longest palindrome accordingly whenever a new palindrome of greater length is found.

```cpp
string longestPalindrome(string s) {
    int n = s.size();
    bool table[n][n];
    memset(table,false,sizeof(table));
    int start = 0, maxLength=1;
    
    
    // make all subtring of lenght 1 as true
    for(int i=0;i<n;i++)
    {
        table[i][i] = true;
    }
    
    // make strings of length 2 as true if applicable
    
    for(int i=0;i<n-1;i++)
    {
        if(s[i] == s[i+1])
        {
            table[i][i+1]=true;
            start = i;
            maxLength = 2;
        }
    }
    
    // check of sub string for lenght 3 to n
    for(int k=3;k<=n;k++)
    {
        for(int i=0; i<n-k+1; i++)
        {
            int j = i + k -1;
            if(table[i+1][j-1] && s[i] == s[j])
            {
                table[i][j] = true;
                if(k > maxLength)
                {
                    maxLength = k;
                    start = i;
                }
            }
        }
    }
    
    return s.substr(start, maxLength);
}
```

### Time Complexity
- **Time Complexity** -  O O(N ^ 2). A nested traversal is needed.
- **Auxiliary Space** - O(N*N) a table needed.