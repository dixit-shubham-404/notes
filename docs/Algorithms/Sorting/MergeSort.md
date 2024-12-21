# Merge Sort 

Merge sort is a sorting algorithm that follows the divide-and-conquer approach. It works by recursively dividing the input array into smaller subarrays and sorting those subarrays then merging them back together to obtain the sorted array.

In simple terms, we can say that the process of merge sort is to divide the array into two halves, sort each half, and then merge the sorted halves back together. This process is repeated until the entire array is sorted.


Here’s a step-by-step explanation of how merge sort works:

1. Divide: Divide the list or array recursively into two halves until it can no more be divided.
2. Conquer: Each subarray is sorted individually using the merge sort algorithm.
3. Merge: The sorted subarrays are merged back together in sorted order. The process continues until all elements from both subarrays have been merged.

```cpp
void merge(vector<int>& arr, int l, int mid, int r)
{
    int n1 = mid - l +1;
    int n2 = r - mid;
    
    int left[n1],right[n2];
    
    for(int i=0;i<n1;i++)
    {
        left[i]=arr[l+i];
    }
    
    for(int i=0;i<n2;i++)
    {
        right[i]=arr[mid+i+1];
    }
    
    int i=0,j=0,k=l;
    
    while(i<n1 && j<n2)
    {
        if(left[i] < right[j])
        {
            arr[k]=left[i];
            i++;
            k++;
        }
        else
        {
            arr[k]= right[j];
            j++;
            k++;
        }
    }
    
    while(i<n1)
    {
        arr[k]=left[i];
        i++;
        k++;
    }
    
    while(j<n2)
    {
        arr[k]=right[j];
        j++;
        k++;
    }
}
void mergeSort(vector<int>& arr, int l, int r) {
    if (l < r)
    {
        int mid = (l+r)/2;
        mergeSort(arr,l,mid);
        mergeSort(arr,mid+1,r);
        merge(arr,l,mid,r);
    }
}
```

### Analysis
- **Time Complexity** - O(nlog(n)).
- **Space Complexity** - O(1).