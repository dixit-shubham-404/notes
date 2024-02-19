# Evaluation of Postfix Expression

Given a postfix expression, the task is to evaluate the postfix expression.

Example
```
Input: str = “2 3 1 * + 9 -“
Output: -4
Explanation: If the expression is converted into an infix expression, it will be 2 + (3 * 1) – 9 = 5 – 9 = -4.
```

## Using Stack

Iterate the expression from left to right and keep on storing the operands into a stack. Once an operator is received, pop the two topmost elements and evaluate them and push the result in the stack again.

```cpp
int evaluatePostfix(string S)
{
    // Your code here
    stack<int> st;
    for(int i=0; i<S.length(); i++)
    {
        char c = S[i];
        if(c >= '0' && c <= '9')
        {
            int t = c - '0';
            st.push(t);
        }
        else
        {
            int b = st.top();
            st.pop();
            int a = st.top();
            st.pop();
            switch (c){
                case '+' :
                    st.push(a+b);
                    break;
                case '-' :
                    st.push(a-b);
                    break;
                case '*' :
                    st.push(a*b);
                    break;
                case '/' :
                    st.push(a/b);
                    break;
            }
        }
        
    }
    return st.top();
}
```

### Analysis
- **Time Complexity** - O(n), where N is the size of the infix expression
- **Space Complexity** - O(n), where N is the size of the infix expression

### Limitation
- It supports only 4 operator rest can be added in case.
- It supports only single digit operand
## TODO - for multi digit 