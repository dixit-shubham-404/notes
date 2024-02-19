# Decode Ways
https://www.geeksforgeeks.org/count-possible-decodings-given-digit-sequence/

Let 1 represent ‘A’, 2 represents ‘B’, etc. Given a digit sequence, count the number of possible decodings of the given digit sequence. 

```
Input:  digits[] = "121"
Output: 3
// The possible decodings are "ABA", "AU", "LA"

Input: digits[] = "1234"
Output: 3
// The possible decodings are "ABCD", "LCD", "AWD"
```

## Brute Force
This problem is recursive and can be broken into sub-problems. We start from the end of the given digit sequence. We initialize the total count of decodings as 0. We recur for two subproblems. 
- If the last digit is non-zero, recur for the remaining (n-1) digits and add the result to the total count. 
- If the last two digits form a valid character (or smaller than 27), recur for remaining (n-2) digits and add the result to the total count.

```cpp
int CountWays(string str){
    // Code here
    int n = str.size();
    if(n == 0 || n ==1 )
    {
        return 1;
    }
    if(str[0] == '0')
    {
        return 0;
    }
    int count =0;
    if(str[n-1] > '0')
    {
        count = CountWays(str.substr(0,n-1));
    }
    if((str[n-2] == '1' || str[n-2] == '2') && str[n-2] < '7')
    {
        count += CountWays(str.substr(0,n-2));
    }
    return count;
}
```

### Analysis
- **Time Complexity** - exponential
- **Space Complexity** - O(1)

## Using DP


```cpp
int numDecodings(string str) {
    int n = str.size();
    int count[n+1];
    count[0]=count[1]=1;
    if(str[0]=='0')
    {
        return 0;
    }
    
    for(int i=2;i<=n;i++)
    {
        count[i] =0;
        if(str[i-1] > '0')
        {
            count[i]=count[i-1];
        }
        if(str[i-2] == '1' || (str[i-2] == '2' && str[i-1] < '7') )
        {
            count[i]+=count[i-2];
        }
    }
    return count[n];
}
```
### Analysis
- **Time Complexity** - O(n)
- **Space Complexity** - O(n)
