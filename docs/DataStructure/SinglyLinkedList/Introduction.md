# Understanding basics of Linked List

## Definition

Linked list is the liner data structure where elements are not store in contigious memory location, rather they are linked using pointer. Linked list forms the series of connected node where each node stores the data and address of next node.

## Node structure
A node in the linked list consist of two components - 
- **Data** - It holds the actual value or data associated with the node.
- **Next Pointer** - It holds the address of next node.


## Head and Tail
Linked list is accessed via head node which points to first node of the list. The last node points to NULL or nullptr, indicating the end of the list. This node is called the tail.

## Need of Linked List Data Structure

- Dynamic Data Structure
- Ease of insertion and Deletion
- Efficient memory allocation
- Wide range of implementation(eg, stack, queue,etc.)

## Types of linked List

- **Singly Linked List** - In singly linked list each node contains refernce of next node in sequence. Traversing a singly linked list is done in forward direction.
- **Doubly Linked List** - In a doubly linked list each node contains refernce to next and previous nodes. This allows traversal in both forward and backward direction, at the cost of more memory
- **Circular Linked List** - In circular linked list last node points to first node creating a circular reference. It can be either singly or doubly.

## Advantages of Linked List

- **Dynamic Size** - Since memory allocation happens at run time, it can grow and shrink dynamically.
- **Insertion and deletion** - Adding and removal of elements is simple because of non-contageous memory allocation.
- **Flexibility** - Linked lists can be easily reorganized and modified without requiring a contiguous block of memory.

## Disadvantages of Linked List

- **Random access** - Randomly accessing a element is difficult then array.
- **Extra Memory** - Takes more memory than array as it containes node refernce too.

## Linked List Vs Array

| **Array** | **Linked List** |
| :-------- | :-------------- |
| Arrays are sored in contigious memory allocation | Linked List are not stored in contagious memory allocation |
| Fixed in size | Dynamic in size |
| Memory is allocated at compile time | Memory is allocated at run time |
| Use less memory | Use more memory |
| Elemets can be accesed easily | Accessing an element requires traversal |
| Insertion and deletion takes time | Insertion and deletion are faster |


## Misc

Array's can also get allocated from heap like this
```cpp
int* dynArr = new int[arrSize];
```

Linked list can also be alocated from stack using an array of nodes.

TODO - https://www.geeksforgeeks.org/data-structures/linked-list/