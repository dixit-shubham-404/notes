# How to Reverse a String using Stack

Given a string, reverse it using stack. 

Example - 
```
Input: str = “GeeksQuiz”
Output: ziuQskeeG
```

- Create an empty stack.
- One by one push all characters of string to stack.
- One by one pop all characters from stack and put them back to string.

```cpp
char* reverse(char *S, int len)
{
    //code here
    stack<char> st;
    for(int i=0;i< len;i++)
    {
        st.push(S[i]);
    }
    char* result = (char*)malloc(sizeof(char) * len);
    for(int i=0;i< len;i++)
    {
        result[i] = st.top();
        st.pop();
    }
    return result;
    
}
```

### Analysis
- **Time Complexity** - O(n), where N is the size of string
- **Space Complexity** - O(n), where N is the size string