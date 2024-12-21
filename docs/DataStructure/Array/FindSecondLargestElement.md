# Find second largest element in an array

Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array.

Note: If the second largest element does not exist, return -1.

```
Input: arr[] = {12, 35, 1, 10, 34, 1}
Output: The second largest distinct element is 34.
Explanation: The largest element of the array is 35 and the second largest element is 34.


Input: arr[] = {10, 5, 10}
Output: The second largest distinct element is 5.
Explanation: The largest element of the array is 10 and the second largest element is 5.


Input: arr[] = {10, 10, 10}
Output: -1
Explanation: Largest element of the array is 10 there is no second largest element.
```

## Approach 1 : We can sort it then send the last element

### Analysis
- **Time Complexity** - O(n * log n) where n is the size of array.
- **Space Complexity** - O(1).

## Approach 2 : Traverse two time first find largest then second largest
### Analysis
- **Time Complexity** - O(n) where n is the size of array.
- **Space Complexity** - O(1).

## Approach 3: take two variables and find the second largest 

```cpp
int getSecondLargest(vector<int> &arr) {
    // Code Here
    int a = INT_MIN, b = INT_MIN;
    for(int i =0;i<arr.size();i++)
    {
        if(arr[i] > a )
        {
            b=a;
            a =arr[i];
        }
        else if(arr[i]>b && arr[i] != a)
        {
            b= arr[i];
        }
    }
    if(b == INT_MIN)
    {
        b =-1;
    }
    return b;
}
```

### Analysis
- **Time Complexity** - O(n) where n is the size of array.
- **Space Complexity** - O(1).