# Deletion in a linked list

## Deletion from the beginig

```cpp
#include <iostream>

using namespace std;

class Node{
    public:
        int data;
        Node * next;
};

void deleteFromBeging(Node ** head)
{
    Node * del = (*head);
    (*head) = ((*head) -> next);
    free(del);
}

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
    
    
    deleteFromBeging(&head);
    cout<<"Linked list after deletion from begining - ";
    printList(head);
    return 0;
}
```

Output will be -
```
Linked list will be - 1 2 3 4 
Linked list after deletion from begining - 2 3 4
```

### Analysis
- **Time Complexity** - O(1)
- **Space Complexity** - O(1)

## Deletion from the end

```cpp
#include <iostream>

using namespace std;

class Node{
    public:
        int data;
        Node * next;
};

void deleteFromEnd(Node * head)
{
    if(head == NULL)
    {
        return;
    }
    Node * prev = NULL;
    Node * last = head ;
    
    while(last ->next != NULL)
    {
        prev = last;
        last = last -> next;
    }
    prev -> next = NULL;
    free(last);
}

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
    
    
    deleteFromEnd(head);
    cout<<"Linked list after deletion from end - ";
    printList(head);
    return 0;
}
```

Output will be -
```
Linked list will be - 1 2 3 4 
Linked list after deletion from end - 1 2 3
```
### Analysis
- **Time Complexity** - O(n)
- **Space Complexity** - O(1)

## Deletion from a given position

```cpp
#include <iostream>

using namespace std;

class Node{
    public:
        int data;
        Node * next;
};

void deleteFromPos(Node ** head, int position)
{
    Node * prev = *head, *current = *head;
    for(int i=0;i<position;i++)
    {
        if(i==0 && position ==1)
        {
            (*head) = (*head) -> next;
            free(current);
        }
        else
        {
            if(position == i+1 && current != NULL)
            {
                prev -> next = current -> next;
                free(current);
            }
            else
            {
                prev = current;
                if(prev == NULL)
                {
                    break;
                }
                current = current -> next;
            }
        }
    }
}

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
    
    
    deleteFromPos(&head,1);
    cout<<"Linked list after deletion from pos 1 - ";
    printList(head);
    
    deleteFromPos(&head,2);
    cout<<"Linked list after deletion from pos 2 - ";
    printList(head);
    return 0;
}
```

Output will be -
```
Linked list will be - 1 2 3 4 
Linked list after deletion from pos 1 - 2 3 4 
Linked list after deletion from pos 2 - 2 4 
```
### Analysis
- **Time Complexity** - O(n)
- **Space Complexity** - O(1)