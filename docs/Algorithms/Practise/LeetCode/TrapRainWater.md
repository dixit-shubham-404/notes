# Trapping Rain Water

https://leetcode.com/problems/trapping-rain-water/

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
```

## Brute Force
Traverse every array element and find the highest bars on the left and right sides. Take the smaller of two heights. The difference between the smaller height and the height of the current element is the amount of water that can be stored in this array element.

```cpp
int max(int a,int b)
{
    return a>b?a:b;
}
int min(int a,int b)
{
    return a>b?b:a;
}
long long trappingWater(int arr[], int n){
    int left,right;
    long long water=0;
    for(int i=1;i<n-1;i++)
    {
        left =0;
        for(int j=0;j< i;j++ )
        {
            left = max(left,arr[j]);
        }
        
        right = 0;
        for(int j=i+1;j<n; j++)
        {
            right = max(right,arr[j]);
        }
        
        water = water + ((min(left,right) - arr[i])>0? (min(left,right) - arr[i]) : 0);
    }
    return water;
}
```



### Analysis
- **Time Complexity** - O(n ^ 2), 
- **Space Complexity** - O(1)

## Using Pre Calculation

In previous approach, for every element we needed to calculate the highest element on the left and on the right. 

So, to reduce the time complexity: 
- For every element we can precalculate and store the highest bar on the left and on the right (say stored in arrays left[] and right[]). 
- Then iterate the array and use the precalculated values to find the amount of water stored in this index,  which is the same as ( min(left[i], right[i]) – arr[i] )

```cpp
int max(int a,int b)
{
    return a>b?a:b;
}
int min(int a,int b)
{
    return a>b?b:a;
}
long long trappingWater(int arr[], int n){
    long long water=0;
    int left[n];
    left[0]=arr[0];
    for(int i=1;i<n;i++)
    {
        left[i]=max(left[i-1],arr[i]);
    }
    int right[n];
    right[n-1]=arr[n-1];
    for(int i=n-2;i>= 0;i-- )
    {
        right[i] = max(right[i+1],arr[i]);
    }
    for(int i=1;i<n-1;i++)
    {
        water = water + ((min(left[i],right[i]) - arr[i])>0? (min(left[i],right[i]) - arr[i]) : 0);
    }
    return water;
}
```

### Analysis
- **Time Complexity** - O(n), 
- **Space Complexity** - O(n)

## Using stack

We can use a stack to track the bars that are bounded by the higher left and right bars. This can be done using only one iteration.

- For this we will keep pushing elements in stack, until an element with higher value than the stack top is found. This denotes that there is a chance of storing position on the left side of the current element with the current bar being an end.
- So remove the smaller element on left and find the left bar (which is the current top of stack) and the amount of water stored by the left end bar and the current bar being the right end. Continue this till the stack is not empty or a higher value element is found.

```cpp
long long trappingWater(int arr[], int n){
    // Stores the indices of the bars
    stack<int> st;
    
    long long water =0;
    
    int top_height;
    for(int i =0;i<n;i++)
    {
        // Remove bars from the stack 
        // until the condition holds 
        while(!st.empty() && (arr[st.top()] < arr[i]))
        {
            top_height = arr[st.top()];
            st.pop();
            
            // If the stack does not have any 
            // bars or the popped bar 
            // has no left boundary 
            if(st.empty())
            {
                break;
            }
            // Get the distance between the 
            // left and right boundary of 
            // popped bar
            
            int distance = i - st.top() -1;
            
            int min_height = min(arr[st.top()],arr[i]) - top_height;
            
            water += distance * min_height;
            
        }
        st.push(i);
    }
    return water;
}
```

### Analysis
- **Time Complexity** - O(n), 
- **Space Complexity** - O(n)

## TODO -  (Horizontal scan method):
https://www.geeksforgeeks.org/trapping-rain-water/

## TODO - (Two Pointer Approach)
https://www.geeksforgeeks.org/trapping-rain-water/

## TODO - (Similar to linear search)
https://www.geeksforgeeks.org/trapping-rain-water/