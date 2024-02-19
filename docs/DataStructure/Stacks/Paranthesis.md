# Paranthesis Checker

Given an expression string exp, write a program to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in the given expression.

```
Input: exp = “[()]{}{[()()]()}” 
Output: Balanced
Explanation: all the brackets are well-formed
```

## Using Stack
The idea is to put all the opening brackets in the stack. Whenever you hit a closing bracker search whether at the top of the stack has corresponding opening bracket. If its same then pop it out and continue otherwise we can return false.

```cpp
bool ispar(string x)
{
    // Your code here
    int n = x.length();
    stack<char> st;
    for(int i=0;i<n;i++)
    {
        // cout<<x[i]<<" - "<<i<<" - "<<n<<endl;
        if(x[i] == '{' || x[i] == '(' || x[i] == '[')
        {
            st.push(x[i]);
        }
        else if(!st.empty())
        {
            if(x[i] == ')' && st.top() == '(')
            {
                st.pop();
            }
            else if(x[i] == '}' && st.top() == '{')
            {
                st.pop();
            }
            else if(x[i] == ']' && st.top() == '[')
            {
                st.pop();
            }
            else
            {
                return false;
            }
        }
        else
        {
            return false;
        }
    }
    if(!st.empty())
    {
        return false;
    }
    return true;
}
```

### Analysis
- **Time Complexity** - O(n), where N is the size of string
- **Space Complexity** - O(n), where N is the size string

## Not using stack
- Initialize a variable i with -1.
- Iterate through the string and 
    - If it is an open bracket then increment the counter by 1 and replace ith character of the string with the opening bracket.
    - Else if it is a closing bracket of the same corresponding opening bracket (opening bracket stored in exp[i]) then decrement i by 1.
- At last, if we get i = -1, then the string is balanced and we will return true. Otherwise, the function will return false.

```cpp
bool ispar(string s)
{
    // Your code here
    int n = s.length();
    int i = -1;
    for(int j = 0;j<n;j++)
    {
        if(s[j] == '(' || s[j] == '{' || s[j] == '[')
        {
            i++;
            s[i]=s[j];
        }
        else
        {
            if( i>=0 && ( (s[i] == '(' && s[j] == ')') || (s[i] == '{' && s[j] == '}') || (s[i] == '[' && s[j] == ']') ) )
            {
                i--;
            }
            else
            {
                return false;
            }
        }
    }
    return i==-1;
}
```

### Analysis
- **Time Complexity** - O(n), where N is the size of string
- **Space Complexity** - O(1)