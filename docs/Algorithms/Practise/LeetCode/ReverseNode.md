# Reverse Nodes in k-Group

Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

```
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
```

## Using three pointer 

```
ListNode* reverseKGroup(ListNode* head, int k) {
    if(head == NULL || head -> next == NULL)
    {
        return head;
    }
    ListNode * prev = NULL, *curr=head, *next = NULL;
    int count = 0;
    while( curr && count < k)
    {
        next = curr -> next;
        curr -> next = prev;
        prev = curr;
        curr = next;
        count++;
    }
    if(count != k)
    {
        return reverseKGroup(prev,count);
    }
    if(next != NULL)
    {
        head -> next = reverseKGroup(next, k);
    }
    return prev;
}
```

### Analysis
- **Time Complexity** - O(n), Because of traversing.
- **Space Complexity** - O(n/k), for recursion call of each group.