# Queue – Linked List Implementation

we maintain two pointers, front, and rear. The front points to the first item of the queue and rear points to the last item.
- enqueue(): This operation adds a new node after the rear and moves the rear to the next node.
- dequeue(): This operation removes the front node and moves the front to the next node.

```cpp
class Node {
    public:
        int data;
        Node * next;
        Node(int x)
        {
            data = x;
            next = NULL;
        }
};

void enqueue(Node ** front, Node ** rear, int data)
{
    Node * temp = new Node(data);
    if(*front == NULL && *rear == NULL)
    {
        *front  = *rear = temp;
        return;
    }
    
    (*rear) -> next = temp;
    *rear = temp;
}

void dequeue(Node ** front , Node ** rear)
{
    if(*front  == NULL && *rear == NULL)
    {
        return;
    }
    Node * temp = *front;
    if(*front == *rear)
    {
        
        *front = *rear = NULL;
        free(temp);
        return;
    }
    *front = (*front) -> next;
    free(temp);
    
}

void printQueue(Node * front)
{
    while(front)
    {
        cout<<front -> data<<" ";
        front = front -> next;
    }
    cout<<endl;
}
int main()
{
    Node * front = NULL;
    Node * rear = NULL;
    enqueue(&front, &rear, 1);
    enqueue(&front, &rear, 2);
    enqueue(&front, &rear, 3);
    enqueue(&front, &rear, 4);
    enqueue(&front, &rear, 5);
    cout<<"The queue is : ";
    printQueue(front);
    dequeue(&front,&rear);
    cout<<"The queue after dequeue : ";
    printQueue(front);

    return 0;
}
```

