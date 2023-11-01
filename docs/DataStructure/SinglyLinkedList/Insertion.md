# Insertions in Linked List

## Insertion at the begining of the list

```cpp
#include <iostream>

using namespace std;

class Node{
    public:
        int data;
        Node * next;
};

void insertAtBegin(Node** head,int data)
{
    Node * temp = new Node();
    temp -> data = data;
    temp -> next = (*head);
    (*head) = temp;
}

void printList(Node * head)
{
    Node * ref = head;
    while(ref != NULL )
    {
        cout << ref->data<< " ";
        ref = ref -> next;
    }
    cout<<endl;
}

int main()
{
    
    Node * head = NULL;
    printList(head);
    insertAtBegin(&head,5);
    printList(head);
    insertAtBegin(&head,4);
    printList(head);
    insertAtBegin(&head,3);
    printList(head);
    insertAtBegin(&head,2);
    printList(head);
    insertAtBegin(&head,1);
    printList(head);
    return 0;
}
```

The output would be like
```
5 
4 5 
3 4 5 
2 3 4 5 
1 2 3 4 5 
```

### Analysis
- **Time Complexity** - O(1)
- **Space Complexity** - O(1)


## Insertion after a given node

```cpp
#include <iostream>

using namespace std;

class Node{
    public:
        int data;
        Node * next;
};

void insertAfter(Node * prev_node,int data)
{
    if(prev_node == NULL)
    {
        cout<<"prev node cant be null";
        return;
    }
    Node * new_node = new Node();
    new_node -> data = data;
    new_node -> next = prev_node->next;
    prev_node -> next = new_node;
}

void insertAtBegin(Node** head,int data)
{
    Node * temp = new Node();
    temp -> data = data;
    temp -> next = (*head);
    (*head) = temp;
}

void printList(Node * head)
{
    Node * ref = head;
    while(ref != NULL )
    {
        cout << ref->data<< " ";
        ref = ref -> next;
    }
    cout<<endl;
}

int main()
{
    
    Node * head = NULL;
    insertAtBegin(&head,5);
    insertAtBegin(&head,4);
    insertAtBegin(&head,3);
    insertAtBegin(&head,2);
    insertAtBegin(&head,1);
    cout<<"List before inserting after head - ";
    printList(head);
    // inserting an element after head
    insertAfter(head, 99);
    cout<<"List after inserting 99 after head - ";
    printList(head);
    return 0;
}
```

The output will be -
```
List before inserting after head - 1 2 3 4 5 
List after inserting 99 after head - 1 99 2 3 4 5
```

### Analysis

- **Time Complexity** - O(1)
- **Space Complexity** - O(1)

## Insertion at the end

```cpp
#include <iostream>

using namespace std;

class Node{
    public:
        int data;
        Node * next;
};

void append(Node ** head, int data)
{
    Node * new_node = new Node();
    new_node -> data = data;
    new_node -> next = NULL;
    if((*head) == NULL)
    {
        (*head) = new_node;
        return;
    }
    
    Node * ref = (*head);
    while(ref -> next != NULL)
    {
        ref = ref -> next;
    }
    ref -> next = new_node;
}

void printList(Node * head)
{
    Node * ref = head;
    while(ref != NULL )
    {
        cout << ref->data<< " ";
        ref = ref -> next;
    }
    cout<<endl;
}

int main()
{
    
    Node * head = NULL;
    append(&head,1);
    append(&head,2);
    append(&head,3);
    append(&head,4);
    cout<<"Linked list will be - ";
    printList(head);
    return 0;
}
```

### Analysis
- **Time Complexity** - O(n)
- **Space Complexity** - O(1)