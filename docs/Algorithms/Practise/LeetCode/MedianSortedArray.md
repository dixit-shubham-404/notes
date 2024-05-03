# Median of Two Sorted Arrays

https://leetcode.com/problems/median-of-two-sorted-arrays/

## Approach : Brute Force

Merge two arrays into one and find the median.

```cpp
double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    vector<int> nums;
    int n1=nums1.size();
    int n2=nums2.size();
    
    int i=0,j=0;
    while(i<n1 && j<n2)
    {
        if(nums1[i]<nums2[j])
        {
            nums.push_back(nums1[i]);
            i++;
        }
        else
        {
            nums.push_back(nums2[j]);
            j++;
        }
    }
    
    while(i<n1)
    {
        nums.push_back(nums1[i]);
        i++;
    }
    
    while(j<n2)
    {
        
        nums.push_back(nums2[j]);
        j++;
    }
    
    if(nums.size() % 2 != 0)
    {
        return nums[nums.size()/2];
    }
    double ans = (((nums[nums.size()/2]) + nums[(nums.size()/2)-1])/2.00);
    return ans;
        
    }
```

### Time Complexity
- **Time Complexity** - O(m+n), where m and n is the size of respected arrays.
- **Auxiliary Space** - O(m+n), new array is generated.

## Approach : Using binary search

In this approach without merging the two arrays we need to find the median of two arrays its simple by dividing the two arrays and then check of left element of one with right element of other and vice versa.

```cpp
double Median(vector<int>& A, vector<int>& B)
{
    int n = A.size();
    int m = B.size();
    if (n > m)
        return Median(B, A); // Swapping to make A smaller
 
    int start = 0;
    int end = n;
    int realmidinmergedarray = (n + m + 1) / 2;
 
    while (start <= end) {
        int mid = (start + end) / 2;
        int leftAsize = mid;
        int leftBsize = realmidinmergedarray - mid;
        int leftA
            = (leftAsize > 0)
                  ? A[leftAsize - 1]
                  : INT_MIN; // checking overflow of indices
        int leftB
            = (leftBsize > 0) ? B[leftBsize - 1] : INT_MIN;
        int rightA
            = (leftAsize < n) ? A[leftAsize] : INT_MAX;
        int rightB
            = (leftBsize < m) ? B[leftBsize] : INT_MAX;
 
        // if correct partition is done
        if (leftA <= rightB and leftB <= rightA) {
            if ((m + n) % 2 == 0)
                return (max(leftA, leftB)
                        + min(rightA, rightB))
                       / 2.0;
            return max(leftA, leftB);
        }
        else if (leftA > rightB) {
            end = mid - 1;
        }
        else
            start = mid + 1;
    }
    return 0.0;
}
```

### Time Complexity
- **Time Complexity** -  O(min(log M, log N)): Since binary search is being applied on the smaller of the 2 arrays
- **Auxiliary Space** - O(1).