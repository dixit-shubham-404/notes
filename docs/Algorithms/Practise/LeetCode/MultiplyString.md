# Multiply two strings

Given two numbers as strings s1 and s2. Calculate their Product.

Note: The numbers can be negative and You are not allowed to use any built-in function or convert the strings to integers. There can be zeros in the begining of the numbers. You don't need to specify '+' sign in the begining of positive numbers.

```
Input:
s1 = "0033"
s2 = "2"
Output:
66
```

```cpp
string multiplyStrings(string s1, string s2) {
    //Your code here
    
    int len1 = s1.size();
    int len2 = s2.size();
    
    string s="";
    
    if(s1[0] == '-' && s2[0]=='-')
    {
        s1=s1.substr(1,len1-1);
        len1--;
        s2=s2.substr(1,len2-1);
        len2--;
    }
    else if(s1[0] == '-')
    {
        s="-";
        s1=s1.substr(1,len1-1);
        len1--;
    }
    else if( s2[0]=='-')
    {
        s="-";
        s2=s2.substr(1,len2-1);
        len2--;
    }
    else
    {
        
    }
    
    if(len1 == 0 || len2 == 0)
    {
        return "0";
    }
    
    vector<int> result(len1+len2,0);
    int i_n1=0,i_n2=0;// to interate result;
    
    for(int i=len1-1; i>=0;i--)
    {
        int carry = 0;
        int n1 = s1[i] - '0';
        
        i_n2 =0;
        for(int j=len2 -1 ; j>=0;j--)
        {
            int n2 = s2[j] - '0';
            
            int sum = n1*n2 + carry + result[i_n1 + i_n2];
            
            carry = sum /10;
            
            result[i_n1+i_n2] = sum % 10;
            
            i_n2++;
        }
        
        if(carry > 0)
        {
            result [i_n1+i_n2] += carry;
        }
        
        i_n1++;
        
    }
    
    // to remove extra zeroes
    int i = result.size()-1;
    while(i >= 0 && result[i] == 0)
    {
        i--;
    }
    
    // to cover if one of the number is zero
    if(i==-1)
    {
        return "0";
    }
    
    while(i>=0)
    {
        s+=std::to_string(result[i]);
        i--;
    }
    return s;
    
}
```

### Analysis
- **Time Complexity** - O(n1*n2), 
- **Space Complexity** - O(n1+n1)