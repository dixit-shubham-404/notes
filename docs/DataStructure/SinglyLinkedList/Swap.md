# Swap nodes in a linked list without swapping data

Given a singly linked list with two value x and y, the task is to swap two nodes having values x and y without swapping data.

```
Input: 10->15->12->13->20->14,  x = 12, y = 20
Output: 10->15->20->13->12->14
```

## Cases to handle
1. x and y does not exist
2. x and y are adjacent to each other
    2.1 Either x or y is head node.
    2.2 Nor x nor y is head node.
3. x and y are not adjacent to each other
    3.1 Either x or y is head node.
    3.2 Nor x nor y is head node.

```cpp
void swapNodes(Node ** head, int x, int y)
{
    if(x == y) // if both are equal return 
    {
        return;
    }
    
    // finding x curr and prev node
    Node * curr_x = (*head), * prev_x=NULL;
    while(curr_x && curr_x -> data != x)
    {
        prev_x=curr_x;
        curr_x = curr_x -> next;
    }
    
    // finding y curr and prev node
    Node * curr_y = (*head), * prev_y=NULL;
    while(curr_y && curr_y -> data != y)
    {
        prev_y=curr_y;
        curr_y = curr_y -> next;
    }
    
    // if anyone x or y is not found
    if(curr_x == NULL || curr_y == NULL)
    {
        return;
    }
    
    // handling if x is head
    if(prev_x == NULL)
    {
        (*head) = curr_y;
    }
    else
    {
        prev_x -> next = curr_y;
    }
    
    // handling if y is head
    if(prev_y == NULL)
    {
        (*head) = curr_x;
    }
    else
    {
        prev_y -> next = curr_x;
    }
    
    // swapping next of x and y
    Node * temp = curr_x -> next;
    curr_x -> next = curr_y -> next;
    curr_y -> next = temp;
}
```

### Analysis
- **Time Complexity** - O(n)
- **Space Complexity** - O(1)

The above code can be optimized to search x and y in a single traversal. Two loops are used to keep the program simple.

```cpp
void swap(Node *& a, Node *& b)
{
    Node * temp = a;
    a = b;
    b =temp;
}

void swapNodes(Node ** head, int x, int y)
{
    if(x == y) // if both are equal return 
    {
        return;
    }
    
    Node ** node_x, ** node_y;
    // find x and y node
    while(*head)
    {
        if((*head) -> data == x)
        {
            node_x = head;
        }
        else if((*head) -> data == y)
        {
            node_y = head;
        }
        head = &((*head) -> next);
    }
    
    // if we have found both a and b
    // in the linked list swap current
    // pointer and next pointer of these
    if(node_x and node_y)
    {
        swap(*node_x, *node_y);
        swap((*node_x)-> next,(*node_y)-> next);
    }
}
```
### Analysis
- **Time Complexity** - O(n)
- **Space Complexity** - O(1)