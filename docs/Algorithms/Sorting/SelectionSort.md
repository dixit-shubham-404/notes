# Selection Sort

Selection Sort is a comparison-based sorting algorithm. It sorts an array by repeatedly selecting the smallest (or largest) element from the unsorted portion and swapping it with the first unsorted element. This process continues until the entire array is sorted.

1. First we find the smallest element and swap it with the first element. This way we get the smallest element at its correct position.
2. Then we find the smallest among remaining elements (or second smallest) and move it to its correct position by swapping.
3. We keep doing this until we get all elements moved to correct position.

```cpp
void selectionSort(vector<int> &arr) {
    // code here
    
    int smallestElementIndex;
    int n = arr.size(), temp;
    for(int i=0;i<n;i++)
    {
        smallestElementIndex = i;
        for(int j=i+1;j<n;j++)
        {
            if(arr[j] < arr[smallestElementIndex])
            {
                smallestElementIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[smallestElementIndex];
        arr[smallestElementIndex] = temp;
    }
}
```

### Analysis
- **Time Complexity** - O(n^2).
- **Space Complexity** - O(1).