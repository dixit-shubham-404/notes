# Dupicate with in K distance

Given an unsorted array that may contain duplicates. Also given a number k which is smaller than the size of the array. Write a function that returns true if the array contains duplicates within k distance.

Examples -
```
Input: k = 3, arr[] = {1, 2, 3, 4, 1, 2, 3, 4}
Output: false
All duplicates are more than k distance away.

Input: k = 3, arr[] = {1, 2, 3, 1, 4, 5}
Output: true
1 is repeated at distance 3.

Input: k = 3, arr[] = {1, 2, 3, 4, 5}
Output: false

Input: k = 3, arr[] = {1, 2, 3, 4, 4}
Output: true
```

## Naive Solution – O(nk) Time and O(1) Space

The idea is to run two loops. The outer loop picks every element `arr[i]` as a starting element, and the inner loop compares all elements which are within k distance of `arr[i]`. The time complexity of this solution is `O(k * n)`.

```cpp
bool checkDuplicatesWithinK(vector<int> &arr, int k)
{
    int n = arr.size();
  
    // Traverse for every element
    for (int i = 0; i < n; i++) {
      
        // Traverse next k elements 
        for (int c = 1; c <= k && (i + c) < n; c++) {
            int j = i + c;
          
            // If we find one more occurrence 
            // within k
            if (arr[i] == arr[j])
              return true;
        }
    }
    return false;
}

```

### Analysis
- **Time Complexity** - O(n*k) where n is the size of array.
- **Space Complexity** - O(1).

## Expected Approach – O(n) Time and O(k) Space

```cpp
bool checkDuplicatesWithinK(vector<int>& arr, int k) {
    // your code
    int n= arr.size();
    unordered_set<int> st;
    for(int i=0;i<n;i++)
    {
        if(st.find(arr[i]) != st.end())
        {
            return true;
        }
        st.insert(arr[i]);
        if(i >= k)
        {
            st.erase(arr[i-k]);
        }
    }
    return false;
}
```

### Analysis
- **Time Complexity** - O(n) where n is the size of array.
- **Space Complexity** - O(K).