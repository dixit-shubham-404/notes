# Find the largest three distinct elements in an array

Given an array with all distinct elements, find the largest three elements.

Approach:

Initialize three variables, `first`, `second`, and `third`, to store the three largest elements. We then iterate through the array and compare each element 
with the current values of `first`, `second`, and `third`. If an element is greater than `first`, we update `third` to `second`, `second` to `first`, and 
`first` to the new element. If an element is greater than `second` but not `first`, we update `third` to `second` and `second` to the new element. If an 
element is greater than `third` but not `second` or `first`, we update `third` to the new element. After iterating through the entire array, `first`, `second`, 
and `third` will contain the three largest elements, which we can then print as the result.

```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
    int arr[] = { 6, 8, 9, 2, 1, 10};
    int n = sizeof(arr)/sizeof(arr[0]);
    int a=INT_MIN,b=INT_MIN,c=INT_MIN;
    for(int i=0;i < n ;i++)
    {
        if(arr[i] > a)
        {
            c=b;
            b=a;
            a= arr[i];
        }
        else if(arr[i]> b && arr[i] != a)
        {
            c=b;
            b=arr[i];
        }
        else if(arr[i]>c && arr[i] != a && arr[i] !=b)
        {
            c = arr[i];
        }
    }
    cout<<"a="<<a<<" b="<<b<<" c="<<c;

    return 0;
}
```

### Analysis
- **Time Complexity** - O(n) where n is the size of array.
- **Space Complexity** - O(1).