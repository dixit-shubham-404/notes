# Print all distinct Elements in An Array

Given an integer array arr[], print all distinct elements from this array. The given array may contain duplicates and the output should contain every element only once.

Example:
```
Input: arr[] = {12, 10, 9, 45, 2, 10, 10, 45}
Output: {12, 10, 9, 45, 2}


Input: arr[] = {1, 2, 3, 4, 5}
Output: {1, 2, 3, 4, 5}


Input: arr[] = {1, 1, 1, 1, 1}
Output: {1}
```

## [Naive Approach] Using Nested loops – O(n^2) Time and O(1) Space

```cpp
vector<int> findDistinct(vector<int> &arr) {
    vector<int> res;

    for (int i = 0; i < arr.size(); i++) {

        // Check if this element is included in result
        int j;
        for (j = 0; j < i; j++)
            if (arr[i] == arr[j])
                break;

        // Include this element if not included previously
        if (i == j)
            res.push_back(arr[i]);
    }
    return res;
}
```

### Analysis
- **Time Complexity** - O(n^2) where n is the size of array.
- **Space Complexity** - O(1).

## [Better Approach] Using Sorting – O(n*logn) Time and O(1) Space

```cpp
vector<int> findDistinct(vector<int> &arr) {
    vector<int> res;
    int n = arr.size();

    // First sort the array so that all occurrences 
    // become consecutive
    sort(arr.begin(), arr.end());

    for (int i = 0; i < n; i++) {
        
        // Store elements only if they are different 
        // from previous element
        if(i == 0 || arr[i] != arr[i - 1]) {
            res.push_back(arr[i]);
        }
    }
    return res;
}
```

### Analysis
- **Time Complexity** - O(n(lon n)) where n is the size of array.
- **Space Complexity** - O(1).

## [Expected Approach] Using Hashing – O(n) Time and O(n) Space

```cpp
vector<int> findDistinct(vector<int> &arr) {
      
    // Initialize set with all elements of array
    unordered_set<int> st (arr.begin(), arr.end());
  
    // Return the result array by inserting all 
    // elements from hash set
      return vector<int> (st.begin(), st.end());
}
```

### Analysis
- **Time Complexity** - O(n) where n is the size of array.
- **Space Complexity** - O(n).

