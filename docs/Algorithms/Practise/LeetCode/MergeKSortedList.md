# Merge K sorted linked lists
https://www.geeksforgeeks.org/merge-k-sorted-linked-lists/

Given K sorted linked lists of size N each, the task is to merge them all maintaining their sorted order.

```
Input: K = 3, N =  4
list1 = 1->3->5->7->NULL
list2 = 2->4->6->8->NULL
list3 = 0->9->10->11->NULL
Output: 0->1->2->3->4->5->6->7->8->9->10->11
Merged lists in a sorted order where every element is greater than the previous element.

Input: K = 3, N =  3
list1 = 1->3->7->NULL
list2 = 2->4->8->NULL
list3 = 9->10->11->NULL
Output: 1->2->3->4->7->8->9->10->11
Merged lists in a sorted order where every element is greater than the previous element.
```

## Naive Approach
A Simple Solution is to initialize the result as the first list. Now traverse all lists starting from the second list. Insert every node of the currently traversed list into the result in a sorted way.

```cpp
Node * mergeKLists(Node *arr[], int K)
{
    // Your code here
for(int i=1;i<K;i++)
{
    
    while(true)
    {
        Node * head_0 = arr[0], *head_i = arr[i];
        
        if(head_i == NULL)
        {
            break;
        }
        
        if(head_0 -> data >= head_i->data)
        {
            arr[i] = head_i -> next;
            head_i -> next = head_0;
            arr[0] = head_i;
        }
        else
        {
            while(head_0 -> next != NULL)
            {
                if(head_0->next->data >= head_i -> data)
                {
                    arr[i] = head_i -> next;
                    head_i -> next = head_0;
                    head_i -> next = head_0 -> next;
                    head_0 -> next = head_i;
                    break;
                }
                head_0 = head_0 -> next;
                if(head_0 -> next == NULL)
                {
                    arr[i] = head_i -> next;
                    head_i -> next = NULL;
                    head_0 -> next = head_i;
                    break;
                }
            }
        }
    }
}
return arr[0];
}
```
### Analysis
- **Time Complexity** - O(N ^ K-1), Traversing N times on each of the K lists.
- **Space Complexity** - O(1)

## Using min Heap
This solution is based on the MIN HEAP approach. The process must start with creating a MinHeap and inserting the first element of all the k Linked Lists. Remove the root element of Minheap and put it in the output Linked List and insert the next element from the Linked List of removed element. To get the result the step must continue until there is no element left in the MinHeap.

```cpp
struct compare{
    bool operator()(struct Node* a, struct Node* b)
    {
        return a->data > b -> data;
    }
};
Node * mergeKLists(Node *arr[], int K)
{
    priority_queue<Node*, vector<Node*>, compare> pq;
    
    for(int i=0;i<K; i++)
    {
        if(arr[i])
        pq.push(arr[i]);
    }
    
    if(pq.empty())
    {
        return NULL;
    }
    
    struct Node * result = new Node(0);
    struct Node * last = result;
    
    while(!pq.empty())
    {
        struct Node * curr = pq.top();
        pq.pop();
        
        struct Node *new_node = new Node(curr -> data);
        
        last -> next = new_node;
        last = last -> next;
        
        if (curr -> next != NULL)
        {
            pq.push(curr -> next);
        }
    }
    return result -> next;
}
```

### Analysis
- **Time Complexity** - O(N * K * log K)
- **Space Complexity** - O(K)

## TODO - Merge K sorted linked lists using Divide and Conquer

