# Next Greater Element

Given an array, print the Next Greater Element (NGE) for every element. 
The Next greater Element for an element x is the first greater element on the right side of x in the array. Elements for which no greater element exist, consider the next greater element as -1. 

## Brute force

Using two nested loops.

```cpp
vector<long long> nextLargerElement(vector<long long> arr, int n){
    // Your code here
    int nge;
    vector<long long> ans;
    for(int i=0;i<n;i++)
    {
        nge=-1;
        for(int j=i+1;j<n;j++)
        {
            if(arr[i]< arr[j])
            {
                nge = arr[j];
                break;
            }
        }
        ans.push_back(nge);
    }
    return ans;
}
```

### Analysis
- **Time Complexity** - O(n^2), where N is the size of array
- **Space Complexity** - O(1)

## Using Stack
The idea is to store for which we have to find next greater element in the stack and while traversing the array. If we find a greater element, we will pair it with the elements from the stack till the top elements of the stack is less then the current element.

- Push the first element tot he stack
- traverse the rest of the arrays
    - Mark the current element as next
    - If the stack is not empty , compare top most element with the next
    - If next is greater then top element , then pop the element from the stack , next is the next greater element for the popped element
    - keep popping the element till popped element is smaller then the next, next becomes the greater element for all those popped element.
- finally push th next to stack
- After all pop each element from stack and put -1 for their next next greater value

```cpp
void printNGE(int arr[], int n)
{
    stack<int> s;
 
    /* push the first element to stack */
    s.push(arr[0]);
 
    // iterate for rest of the elements
    for (int i = 1; i < n; i++) {
 
        if (s.empty()) {
            s.push(arr[i]);
            continue;
        }
 
        /* if stack is not empty, then
           pop an element from stack.
           If the popped element is smaller
           than next, then
        a) print the pair
        b) keep popping while elements are
        smaller and stack is not empty */
        while (s.empty() == false && s.top() < arr[i]) {
            cout << s.top() << " --> " << arr[i] << endl;
            s.pop();
        }
 
        /* push next to stack so that we can find
        next greater for it */
        s.push(arr[i]);
    }
 
    /* After iterating over the loop, the remaining
    elements in stack do not have the next greater
    element, so print -1 for them */
    while (s.empty() == false) {
        cout << s.top() << " --> " << -1 << endl;
        s.pop();
    }
}
```

### Analysis
- **Time Complexity** - O(n), where N is the size of array
- **Space Complexity** - O(n), stack size

## TODO - Using Map