# Rotate a Linked List

## Pointer Change Approach

The idea to make the last node next to point to head, k'th node next as null and (k+1) node as head.

```cpp
Node* rotate(Node* head, int k)
{
    // Your code here
    if(k == 0 || head == NULL)
    {
        return head;
    }
    
    int count =1 ;
    Node * current = head;
    // find the kth node
    while(count <k && current)
    {
        current = current -> next;
        count++;
    }
    
    // if k >= N
    if(!current)
    {
        return head;
    }
    
    Node * kthNode = current;
    
    // move to last node
    while(current -> next != NULL)
    {
        current = current -> next;
    }
    
    current -> next = head;
    
    // K + 1 node will be new head
    Node * result = kthNode -> next;
    
    kthNode -> next = NULL;
    
    return result;
}
```

### Analysis
- **Time Complexity** - O(n), Because of traversing.
- **Space Complexity** - O(1)

## TODO -  Delete from front and add in last