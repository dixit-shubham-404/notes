# Reverse a Linked List

Given a pointer to the head node of a linked list, the task is to reverse the linked list. We need to reverse the list by changing the links between nodes.

```
Input: Head of following linked list 
1->2->3->4->NULL 
Output: Linked list should be changed to, 
4->3->2->1->NULL
```

## Reverse Linked list using Iterative Method

The idea is to use three pointers curr, prev, and next to keep track of nodes to update reverse links.

```cpp
void reverse (Node ** head)
{
    Node * prev = NULL;
    Node * curr = *head;
    Node * next = NULL;
    while(curr)
    {
        next = curr -> next;
        curr -> next = prev;
        prev = curr;
        curr = next;
    }
    
    *head = prev;
}
```

### Analysis
- **Time Complexity** - O(n), Because of traversing.
- **Space Complexity** - O(1)

## Recusion Method

```cpp
Node * reverse (Node * head)
{
    if(head == NULL || head -> next == NULL)
    {
        return head;
    }

    // finding rest of the reverse list
    Node * rest = reverse(head -> next);
    // changing values of next of head and head -> next
    head -> next -> next = head;
    head -> next = NULL;
    // changing head
    head = rest;
    return head;
}
```

### Analysis
- **Time Complexity** - O(n), Because of traversing.
- **Space Complexity** - O(n), recusion stack.

## Reverse a Linked List using stack

Steps
- push every element except the last node.
- make head the last element
- pop each element and make last node next as top
- make last node next as NULL

```cpp
void reverse (Node ** head)
{
    stack<Node *> st;
    Node * temp = *head;
    while(temp -> next != NULL)
    {
        st.push(temp);
        temp = temp -> next;
    }
    
    (*head) = temp;
    
    while(!st.empty())
    {
        temp -> next = st.top();
        st.pop();
        temp = temp -> next;
    }
    temp -> next =NULL;
}
```

### Analysis
- **Time Complexity** - O(n), Because of traversing.
- **Space Complexity** - O(n), because of stack