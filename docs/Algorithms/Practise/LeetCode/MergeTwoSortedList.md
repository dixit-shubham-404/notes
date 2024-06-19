# Merge Two Sorted Lists
https://leetcode.com/problems/merge-two-sorted-lists/

You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

```
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

```cpp
ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
    ListNode * result = new ListNode(0);
    ListNode * refResult = result;
    while(list1 && list2)
    {
        if(list1 -> val < list2 -> val)
        {
            refResult -> next = new ListNode(list1 -> val);
            refResult = refResult -> next;
            list1 = list1 -> next;
        }
        else
        {
            refResult -> next = new ListNode(list2 -> val);
            refResult = refResult -> next;
            list2 = list2 -> next;
        }
    }
    while(list1)
    {
        refResult -> next = new ListNode(list1 -> val);
        refResult = refResult -> next;
        list1 = list1 -> next;
    }
    while(list2)
    {
        refResult -> next = new ListNode(list2 -> val);
        refResult = refResult -> next;
        list2 = list2 -> next;
    }
    return result->next;
}
```

### Analysis
- **Time Complexity** - O(n+m).
- **Space Complexity** - O(n+m).