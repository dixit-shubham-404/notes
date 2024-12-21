# Rearrange array such that even positioned are greater than odd

Given an array arr[] of N elements, sort the array according to the following relations:  

- arr[i] >= arr[i – 1], if i is even, ∀ 1 <= i < N
- arr[i] <= arr[i – 1], if i is odd, ∀ 1 <= i < N

```
Input: N = 4, arr[] = {1, 2, 2, 1}
Output:  1 2 1 2
Explanation: 


For i = 2, arr[i] >= arr[i-1]. So, 2 >= 1.
For i = 3, arr[i] <= arr[i-1]. So, 1 <= 2.
For i = 4, arr[i] >= arr[i-1]. So, 2 >= 1.
Input: arr[] = {1, 3, 2}
Output: 1 3 2
```

## Approach 1 : sort then fill the right position in new array
```cpp
vector<int> rearrangeArray(vector<int>& arr) {
    sort(arr.begin(), arr.end());
    int i=0, j=arr.size()-1;
    vector<int> ans;
    for(int k=1;k<=arr.size(); k++)
    {
        if(k %2 == 0)
        {
            ans.push_back(arr[j]);
            j--;
        }
        else
        {
            ans.push_back(arr[i]);
            i++;
        }
    }
    
    return ans;
}
```
### Analysis
- **Time Complexity** - O(n * log n) where n is the size of array.
- **Space Complexity** - O(n).

## Approach 2: Validate condition while traversing

```cpp
vector<int> rearrangeArray(vector<int>& arr) {
    // Complete teh function
    int N = arr.size();
    for (int i = 1; i < N; i++) {
    // Check if the index is even (1-based) => i+1 is even
        if ((i + 1) % 2 == 0) {
            // Ensure arr[i] >= arr[i-1]
            if (arr[i] < arr[i - 1]) {
                swap(arr[i], arr[i - 1]);
            }
        } else {
            // Ensure arr[i] <= arr[i-1]
            if (arr[i] > arr[i - 1]) {
                swap(arr[i], arr[i - 1]);
            }
        }
    }
    return arr;
}
```
### Analysis
- **Time Complexity** - O(n ) where n is the size of array.
- **Space Complexity** - O(1).
