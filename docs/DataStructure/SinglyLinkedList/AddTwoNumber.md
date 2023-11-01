# Add two numbers represented by Linked List

Given two numbers represented by two lists, write a function that returns the sum in the form of a linked list.

```
Input: 
List1: 5->6->3 // represents number 563 
List2: 8->4->2 // represents number 842 
Output: 
Resultant list: 1->4->0->5 // represents number 1405 
Explanation: 563 + 842 = 1405
```

## Reverse | Add | reverse

```cpp
Node * reverse(Node * head)
{
    if(head == NULL || head ->next == NULL)
    {
        return head;
    }
    Node * rest = reverse(head -> next);
    
    head -> next -> next = head;
    head -> next = NULL;
    
    head = rest;
    return head;
}
struct Node* addTwoLists(struct Node* first, struct Node* second)
{
    // code here
    first = reverse(first);
    second = reverse(second);
    
    int sum, carry=0;
    Node * result=NULL,*prev;
    
    while(first || second)
    {
        sum = carry + (first ? first -> data : 0) + (second ? second -> data : 0);
        
        carry = (sum >= 10) ? 1 : 0;
        sum = sum % 10;
        
        Node * temp = new Node(sum);
        
        if(result)
        {
            prev -> next = temp;
        }
        else
        {
            result = temp;
        }
        prev = temp;
        if(first)
        {
            first = first -> next;
        }
        if(second)
        {
            second = second -> next;
        }
    }
    if(carry > 0)
    {
        prev -> next = new Node(carry);
    }
    result = reverse(result);
    return result;
    
}
```

### Analysis
- **Time Complexity** - O(m + n), Because of traversing.
- **Space Complexity** - O(m + n), A temporary linked list is needed to store the output number

## Adding by converting into int

We can convert linked list to integer and then add these two int and then again make sum to linked list.

```cpp
Node* addTwoLists(Node*first , Node*second){
  int num1=0,num2=0;
  //here we get num1 form first linked list.
   while(first->next!=NULL){
     num1 +=first->data;
     num1*=10;
     first=first->next;
   }
   num1+=first->data;
  // here we get num2 form second linked list.
   while(second->next!=NULL){
     num2 +=second->data;
     num2*=10;
     second=second->next;
   }
   num2+=second->data;
  // here we add both number.
   int num3=num1+num2;
   Node* temp=NULL;
   //Node* result=temp;
  // convert num3 into linked list.
   while(num3!=0){
     int last=num3%10;
     push(&temp,last);
     num3=num3/10;
   }
  // finally return resultant linked list.
   return temp;
}
```

### Analysis
- **Time Complexity** - O(m + n), Because of traversing.
- **Space Complexity** - O(m + n), A temporary linked list is needed to store the output number

## TODO - Add two numbers represented by Linked Lists using Stack:

## TODO - Add two numbers represented by linked lists by Traversing On Larger List: