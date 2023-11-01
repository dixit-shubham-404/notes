# Merge Sort for Linked Lists

## Approach 1

### Algorithm
MergeSort(head)
- if head is null or head next is null, return head
- Split linked list into two halves a and b
- Sort the two have individually
- Now merge the two sorted halves

```cpp
void splitLinkedList(Node * head,Node ** a, Node ** b)
{
    if(head == NULL)
    {
        return;
    }
    Node * slow = head;
    Node * fast = head -> next;
    while(fast != NULL)
    {
        fast = fast -> next;
        if(fast != NULL)
        {
            slow = slow -> next;
            fast = fast -> next;
        }
    }
    (*a) = head;
    (*b) = slow -> next;
    slow -> next = NULL;
}
    
Node * merge(Node * a, Node *b)
{
    Node * temp = NULL;
    if(a == NULL)
    {
        return b;
    }
    if(b == NULL)
    {
        return a;
    }
    if(a-> data <= b-> data)
    {
        temp = a;
        temp -> next = merge(a->next,b);
    }
    else
    {
        temp = b;
        temp -> next = merge(a,b-> next);
    }
    return temp;
}
//Function to sort the given linked list using Merge Sort.
Node* mergeSort(Node* head) {
    // your code here
    if((head == NULL) || (head -> next == NULL))
    {
        return head;
    }
    Node *a,*b;
    splitLinkedList(head,&a,&b);
    a = mergeSortHelper(&a);
    b = mergeSortHelper(&b);
    Node * result = merge(a,b);
    return result;
}

int main()
{
    
    Node * head = NULL;
    append(&head,1);
    append(&head,2);
    append(&head,3);
    append(&head,4);
    append(&head,5);
    append(&head,99);
    append(&head,98);
    append(&head,99);
    append(&head,50);
    cout<<"Linked list will be - ";
    printList(head);
    Node * sorted = mergeSort(head);
    cout<<"Linked list after sort - ";
    printList(sorted);
    return 0;
}
```

Output will be
```
Linked list will be - 1 2 3 4 5 99 98 99 50 
Linked list after sort - 1 2 3 4 5 50 98 99 99
```

### Analysis
- **Time Complexity** - O(n * log n)
- **Space Complexity** - O(n)

## TODO - DO it space complexity of log(n)