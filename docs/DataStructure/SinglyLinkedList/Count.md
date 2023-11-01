# Count the number of nodes of Linked List

## Iterative

```cpp
int getCount(struct Node* head){
    int count =0;
    while(head != NULL)
    {
        head = head -> next;
        count++;
    }
    return count;
}
```

### Analysis
- **Time Complexity** - O(n)
- **Space Complexity** - O(1)


## Recursive

```cpp
int getCount(struct Node* head){
    if(head == NULL)
    {
        return 0;
    }
    return 1 + getCount(head -> next);
}
```
### Analysis
- **Time Complexity** - O(n)
- **Space Complexity** - O(n), Because of recursive stack

## Misc

Making space complexity O(1) by making it tail recursive function, meaning passing the counter to next function itself.

```cpp
int getCount(Node* head, int count = 0)
{
    if (head == NULL)
        return count;
    // move the pointer to next node and increase the count
    return getCount(head->next, count + 1);
}
```
But still i believe recursion stack will be there so would not solve the problem.
### Analysis
- **Time Complexity** - O(n)
- **Space Complexity** - O(n), In worst case the depth of recursion call stack will be N.