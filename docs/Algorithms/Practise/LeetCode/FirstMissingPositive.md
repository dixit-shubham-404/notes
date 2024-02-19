# Find First Missing Possitive
https://leetcode.com/problems/first-missing-positive/

Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

```
Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.

Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
```

## Solution with TC - n and SC - n

Define a nums array and mark the element occured as true .

```cpp
int missingNumber(int arr[], int n) 
{ 
    vector<bool> nums(n+1, false);
    for(int i=0;i<n;i++)
    {
        if(arr[i] > 0 && arr[i]<= n)
        {
            nums[arr[i]] = true;
        }
    }
    
    int i=1;
    while(nums[i])
    {
        i++;
    }
    return i;
}
```

### Analysis
- **Time Complexity** - O(n), 
- **Space Complexity** -  O(n)

## Smallest positive number missing from an unsorted array by changing the input Array

The idea is to mark the elements in the array which are greater than N and less than 1 with 1.

Follow the steps below to solve the problem:

- The smallest positive integer is 1. First, we will check if 1 is present in the array or not. If it is not present then 1 is the answer.
- If present then, again traverse the array. The largest possible answer is N+1 where N is the size of the array. 
    - When traversing the array, if we find any number less than 1 or greater than N, change it to 1. 
    - This will not change anything as the answer will always be between 1 to N+1. Now our array has elements from 1 to N.
- Now, for every ith number, increase `arr[ (arr[i]-1) ]` by N. But this will increase the value more than N. So, we will access the array by `arr[(arr[i]-1)%N]`.
- We will find now which index has a value less than N+1. Then i+1 will be our answer. 

```cpp
int missingNumber(int arr[], int n) 
{ 
    bool is1Present = false;
    for(int i=0;i<n;i++)
    {
        if(arr[i] == 1)
        {
            is1Present = true;
        }
        
    }
    
    if(!is1Present)
    {
        return 1;
    }
    
    for(int i=0;i<n;i++)
    {
        if(arr[i] < 1 || arr[i] > n)
        {
            arr[i]=1;
        }
    }
    
    for(int i=0;i<n;i++)
    {
        arr[(arr[i] -1) % n] +=n;
    }
    
    for(int i=0;i<n;i++)
    {
        if(arr[i] <= n)
        {
            return i+1;
        }
    }
    
    return n+1;
} 
```
### Analysis
- **Time Complexity** - O(n), 
- **Space Complexity** -  O(1)