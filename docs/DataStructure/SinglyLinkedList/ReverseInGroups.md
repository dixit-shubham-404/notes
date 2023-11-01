# Reverse a Linked List in groups of given size

Given a linked list, write a function to reverse every k nodes (where k is an input to the function). 

```
Input: 1->2->3->4->5->6->7->8->NULL, K = 3 
Output: 3->2->1->6->5->4->8->7->NULL
```

## Approach one using three pointers

Using same approach as reverse difference is of having counter while reversing and pointing last element next of the group to next reverse call.

```cpp
struct node *reverse (struct node *head, int k)
    { 
        // Complete this method
        if(head == NULL || head -> next == NULL)
        {
            return head;
        }
        
        struct node * prev = NULL, * current = head, *next = NULL;
        int count =0;
        while(current && count < k)
        {
            next = current -> next;
            current -> next = prev;
            prev = current;
            current = next;
            count++;
        }
        
        if(next != NULL)
        {
            head -> next = reverse (next,k);
        }
        return prev;
    }
```

### Analysis
- **Time Complexity** - O(n), Because of traversing.
- **Space Complexity** - O(n/k), for recursion call of each group.

## TODO -  Space omitimized approach 

