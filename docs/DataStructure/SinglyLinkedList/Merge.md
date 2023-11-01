# Merge two sorted linked lists

AuxiliaryGiven two sorted linked lists consisting of N and M nodes respectively. The task is to merge both of the lists (in place) and return the head of the merged list.

```
Input: a: 5->10->15, b: 2->3->20
Output: 2->3->5->10->15->20
```

## Merge two sorted linked lists using Dummy Nodes:

The idea is to use dummy node as reference to the start of the list. The pointer tale will always point to the last node of the resulting list so that it can append newer nodes.

```cpp
/* UTILITY FUNCTIONS */
/* moveForward() function takes the
node from the front of the source,
and move it to the front of the dest.
It is an error to call this with the
source list empty.
 
Before calling moveForward():
source == {1, 2, 3}
dest == {1, 2, 3}
 
After calling moveForward():
source == {2, 3}
dest == {1, 1, 2, 3} */
void moveForward(Node ** destination, Node ** source)
{
    Node * temp = (*source);
    (*source) = temp -> next;

    temp->next = *destination;
    (*destination) = temp;
}
//Function to merge two sorted linked list.
Node* sortedMerge(Node* head1, Node* head2)  
{  
    // code here
    
    Node dummy = Node(-1);
    Node * tail = &dummy;
    while(1)
    {
        if(head1 == NULL)
        {
            tail-> next = head2;
            break;
        }
        else if(head2 == NULL)
        {
            tail -> next = head1;
            break;
        }
        else if(head1 -> data <= head2 -> data)
        {
            moveForward(&(tail -> next), &head1);
        }
        else
        {
            moveForward(&(tail -> next), &head2);
        }
        
        tail = tail->next;
    }
    return dummy.next;
    
}
```

### Analysis
- **Time Complexity** - O(n+m), Because of traversing of both linked list.
- **Space Complexity** - O(1)

## Merge to linked list using recursion

The idea is to move forward with the list whose node value is lesser. When any node reach the end then append the rest of other list.

```cpp
Node* sortedMerge(Node* head1, Node* head2)  
{  
    // code here
    Node * result;
    if(head1 == NULL)
    {
        return head2;
    }
    if(head2 == NULL)
    {
        return head1;
    }
    
    if(head1 -> data <= head2 -> data)
    {
        result = head1;
        result -> next = sortedMerge(head1 -> next, head2);
    }
    else
    {
        result = head2;
        result -> next = sortedMerge(head1, head2 -> next);
    }
    return result;
}
```

### Analysis
- **Time Complexity** - O(n+m), Because of traversing of both linked list.
- **Space Complexity** - O(n+m), Because of recusion stack