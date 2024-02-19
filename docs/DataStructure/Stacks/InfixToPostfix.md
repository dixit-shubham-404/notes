# Convert Infix expression to Postfix expression

Write a program to convert an Infix expression to Postfix form.

**Infix Expression** - The expression of the form “a operator b” (a + b) i.e., when an operator is in-between every pair of operands.

**Postfix Expression** - The expression of the form “a b operator” (ab+) i.e., When every pair of operands is followed by an operator.

```
Input: A + B * C + D
Output: ABC*+D+
```

## Need of Postfix Expression
The compiler scans the expression either from left to right or from right to left. 
Consider the expression: a + b * c + d
- The compiler first scans the expression to evaluate the expression b * c, then again scans the expression to add a to it. 
- The result is then added to d after another scan. 

The repeated scanning makes it very inefficient. Infix expressions are easily readable and solvable by humans whereas the computer cannot differentiate the operators and parenthesis easily so, it is better to convert the expression to postfix(or prefix) form before evaluation.

## Implementation

1. Scan the infix expression from left to right. 
2. If the scanned character is an operand, put it in the postfix expression. 
3. Otherwise, do the following
    - If the precedence and associativity of the scanned operator are greater than the precedence and associativity of the operator in the stack [or the stack is empty or the stack contains a ‘(‘ ], then push it in the stack. [‘^‘ operator is right associative and other operators like ‘+‘,’–‘,’*‘ and ‘/‘ are left-associative].
        - Check especially for a condition when the operator at the top of the stack and the scanned operator both are ‘^‘. In this condition, the precedence of the scanned operator is higher due to its right associativity. So it will be pushed into the operator stack. 
        - In all the other cases when the top of the operator stack is the same as the scanned operator, then pop the operator from the stack because of left associativity due to which the scanned operator has less precedence. 
    - Else, Pop all the operators from the stack which are greater than or equal to in precedence than that of the scanned operator.
        - After doing that Push the scanned operator to the stack. (If you encounter parenthesis while popping then stop there and push the scanned operator in the stack.) 
4. If the scanned character is a ‘(‘, push it to the stack. 
5. If the scanned character is a ‘)’, pop the stack and output it until a ‘(‘ is encountered, and discard both the parenthesis. 
6. Repeat steps 2-5 until the infix expression is scanned. 
7. Once the scanning is over, Pop the stack and add the operators in the postfix expression until it is not empty.
8. Finally, print the postfix expression.

```cpp
int findPrecedence(char c)
{
    if (c == '^')
    return 3;
else if (c == '/' || c == '*')
    return 2;
else if (c == '+' || c == '-')
    return 1;
else
    return -1;
}
string infixToPostfix(string s) {
    // Your code here
    stack<char> st;
    string result;
    char c;
    for(int i=0;i< s.length();i++)
    {
        c = s[i];
        if((c >='a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9'))
        {
            result += c;
        }
        else if(c == '(')
        {
            st.push(c);
        }
        else if(c == ')')
        {
            while(st.top() != '(')
            {
                result += st.top();
                st.pop();
            }
            st.pop();
        }
        else{
            while(!st.empty() && (findPrecedence(c) <= findPrecedence(st.top())))
            {
                result+=st.top();
                st.pop();
            }
            st.push(c);
        }
        
    }
    while(!st.empty())
    {
        result += st.top();
        st.pop();
    }
    return result;
}
```

### Analysis
- **Time Complexity** - O(n), where N is the size of the infix expression
- **Space Complexity** - O(n), where N is the size of the infix expression