# Move all zeros to end of array

Given an array of integers arr[], the task is to move all the zeros to the end of the array while maintaining the relative order of all non-zero elements.

```
Input: arr[] = {1, 2, 0, 4, 3, 0, 5, 0}
Output: arr[] = {1, 2, 4, 3, 5, 0, 0, 0}
Explanation: There are three 0s that are moved to the end.


Input: arr[] = {10, 20, 30}
Output: arr[] = {10, 20, 30}
Explanation: No change in array as there are no 0s.

Input: arr[] = {0, 0}
Output: arr[] = {0, 0}
Explanation: No change in array as there are all 0s.

```

## Approach 1 : Using Temp Array
Create a temp array with all non zero element make every element zero in main array then fill non zero element from the temp.

```cpp
void pushZerosToEnd(vector<int>& arr) {
    // code here
    vector<int> temp;
    for(int i=0;i<arr.size();i++)
    {
        if(arr[i])
        {
            temp.push_back(arr[i]);
        }
    }
    fill(arr.begin(), arr.end(),0);
    for(int i=0;i<temp.size();i++)
    {
        arr[i]=temp[i];
    }
}
```

### Analysis
- **Time Complexity** - O(n) where n is the size of array.
- **Space Complexity** - O(n).

## Approach 2 : Filling non zeroes in first iteration and marking rest other with 0

```cpp
void pushZerosToEnd(vector<int>& arr) {
    // code here
    int pos =0;
    for(int i=0;i<arr.size(); i++)
    {
        if(arr[i])
        {
            arr[pos] = arr[i];
            pos ++;
        }
    }
    while(pos < arr.size())
    {
        arr[pos] =0;
        pos++;
    }
}
```

### Analysis
- **Time Complexity** - O(n) where n is the size of array.
- **Space Complexity** - O(1).

