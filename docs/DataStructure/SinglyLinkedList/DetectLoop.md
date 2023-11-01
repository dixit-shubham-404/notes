# Detect loop or cycle in a linked list

Given a linked list, check if the linked list has a loop (cycle) or not. 

## Using sets

The idea is to insert node is set before finding it in set if its alread then loop is present otherwise we will find null at last node.

```cpp
bool detectLoop(Node* head)
{
    unordered_set<Node*> st;
    while(head)
    {
        if(st.find(head) != st.end())
        {
            return true;
        }
        st.insert(head);
        head = head -> next;
    }
    return false;
}
```

### Analysis
- **Time Complexity** - O(n), Because of traversing.
- **Space Complexity** - O(n), set memory

## Modify Node structure

If a declare node like this
```cpp
struct Node {
    int data;
    struct Node* next;
    int flag;
};
```

Initialize all nodes with flag value as 0. Whenever particular node is traversed will make this flag 1. While traversing if we find flag is already one it woul indicate loop in linked list.

### Analysis
- **Time Complexity** - O(n), Because of traversing.
- **Space Complexity** - O(1)

## Flyod Cycle Detecting Algorithm

The is to use to pointer slow and fast, which traverse at different speed if at any point in time these two become equal it would indicate a loop.

```cpp
bool detectLoop(Node* head)
{
    Node * slow = head;
    Node * fast = head;
    while(slow && fast && fast -> next)
    {
        slow = slow -> next;
        fast = fast -> next -> next;
        if(slow == fast)
        {
            return true;
        }
    }
    return false;
}
```

### Analysis
- **Time Complexity** - O(n), Because of traversing.
- **Space Complexity** - O(1)

## Detect loop in a linked list by Marking visited nodes without modifying Node structure

The idea is to point the next of each node to a temp node so while traversing if we find a node whose next is already traversing temp node will indicate loop.

```cpp
bool detectLoop(Node* head)
{
    struct Node * temp = new struct Node(-1);
    while(head)
    {
        if(head -> next == temp)
        {
            return true;
        }
        Node * next = head -> next;
        head -> next = temp;
        head = next;
    }
    return false;
}
```
### Analysis
- **Time Complexity** - O(n), Because of traversing.
- **Space Complexity** - O(1)

## Detect loop in a linked list by Storing length

The idea is to store the length of the list from first node and last node, increment last node till reaches NULL or number of nodes in last is greater the current between first and last nodes.

```cpp
int distance(Node * first, Node * last)
{
    int count = 1;
    while(first != last)
    {
        count++;
        first = first -> next;
    }
    return count;
}
bool detectLoop(Node* head)
{
    Node * first = head, *last = head;
    
    int curr_length = 0;
    int prev_length = -1;
    while(last && curr_length > prev_length)
    {
        prev_length = curr_length;
        curr_length = distance(first, last);
        last = last -> next;
    }
    if(last == NULL)
    {
        return false;
    }
    return true;
}
```

### Analysis
- **Time Complexity** - O(n^2), Because of traversing and distance calculation.
- **Space Complexity** - O(1)