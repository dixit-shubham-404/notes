# Cyclic Sort

## When to use cyclic sort
- when numbers are given in range

## Approach :
Since value will be from 1 to n
for each element the correct position is `element -1` if not at the correct position swap the array otherwise move forward.

```cpp
nt cyclicSort(vector<int>& arr) {
    // Code here
    int i=0, n= arr.size();
    
    while(i<n)
    {
        if(arr[i] == i+1)
        {
            i++;
        }
        else
        {
            int tmp = arr[i];
            arr[i] = arr[arr[i]-1];
            arr[arr[i]-1] = tmp;
        }
    }
}
```