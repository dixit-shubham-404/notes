# Detect and Remove Loop in a Linked List

## Using Flyod Cycle detection Algorithm

1. Detect loop via Flyod Cycle detection algorithm and get the loop node.
2. Count the number of nodes on loop. Let the count be k.
3. Fix one pointer on head and other on the kth node.
4. Move both pointer at same pace they will meet at loop starting point.
5. Get a pointer to last node of loop and make it null.

```cpp
//Function to remove a loop in the linked list.
void removeLoop(Node* head)
{
    Node * slow = head;
    Node * fast = head;
    while(slow && fast && fast -> next)
    {
        slow = slow -> next;
        fast = fast -> next -> next;
        if(slow == fast)
        {
            removeLoopHelper(slow, head);
            return;
        }
        
    }
}
void removeLoopHelper(Node * loop_node, Node * head)
{
    Node * ptr1 = loop_node;
    Node * ptr2 = loop_node;
    
    // finding length of loop
    int k=1;
    while(ptr1 -> next != ptr2)
    {
        k++;
        ptr1 = ptr1 -> next;
    }
    
    // making one node to point head and other to point at kth node
    ptr1 = head;
    ptr2 = head;
    for(int i=0;i<k;i++)
    {
        ptr2 = ptr2 -> next;
    }
    
    // Move both pointer at same pace they will meet at loop starting node
    while(ptr1 != ptr2)
    {
        ptr1 = ptr1 -> next;
        ptr2 = ptr2 -> next;
    }
    
    // find the last node
    while(ptr2 -> next != ptr1)
    {
        ptr2 = ptr2 -> next ;
    }
    
    ptr2 -> next = NULL;
}
```

### Analysis
- **Time Complexity** - O(n), Because of traversing.
- **Space Complexity** - O(1)

## Without counting number of nodes in Loop.

If we start the slow pointer from the head and move both slow and fast pointers at the same speed until fast don’t meet, they would meet at the beginning of the loop.

```
Distance traveled by fast pointer = 2 * (Distance traveled 
                                         by slow pointer)

(m + n*x + k) = 2*(m + n*y + k)

Note that before meeting the point shown above, fast
was moving at twice speed.

x -->  Number of complete cyclic rounds made by 
       fast pointer before they meet first time

y -->  Number of complete cyclic rounds made by 
       slow pointer before they meet first time
```

From the above equation, we can conclude below

```
  m + k = (x-2y)*n

Which means m+k is a multiple of n. 
Thus we can write, m + k = i*n or m = i*n - k.
Hence, distance moved by slow pointer: m, is equal to distance moved by fast pointer:
i*n - k or (i-1)*n + n - k (cover the loop completely i-1 times and start from n-k).
```

So if we start moving both pointers again at same speed such that one pointer (say slow) begins from head node of linked list and other pointer (say fast) begins from meeting point. When the slow pointer reaches the beginning of the loop (has made m steps), the fast pointer would have made also moved m steps as they are now moving at the same pace. Since m+k is a multiple of n and fast starts from k, they would meet at the beginning. Can they meet before also? No because slow pointer enters the cycle first time after m steps. 

```cpp
// Function to detect and remove loop in a linked list that
// may contain loop
void detectAndRemoveLoop(Node* head)
{
    // If list is empty or has only one node without loop
    if (head == NULL || head->next == NULL)
        return;
 
    Node *slow = head, *fast = head;
 
    // Move slow and fast 1 and 2 steps ahead respectively.
    slow = slow->next;
    fast = fast->next->next;
 
    // Search for loop using slow and fast pointers
    while (fast && fast->next) {
        if (slow == fast)
            break;
        slow = slow->next;
        fast = fast->next->next;
    }
 
    /* If loop exists */
    if (slow == fast) {
        slow = head;
 
        // this check is needed when slow and fast both meet
        // at the head of the LL eg: 1->2->3->4->5 and then
        // 5->next = 1 i.e the head of the LL
        if (slow == fast)
            while (fast->next != slow)
                fast = fast->next;
        else {
            while (slow->next != fast->next) {
                slow = slow->next;
                fast = fast->next;
            }
        }
 
        /* since fast->next is the looping point */
        fast->next = NULL; /* remove loop */
    }
}

```

## TODO -  Using Sets