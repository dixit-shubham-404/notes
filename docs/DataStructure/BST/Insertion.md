# Insertion in Binary Search Tree (BST)

Given a BST, the task is to insert a new node in this BST.

- Check the value to be inserted (say X) with the value of the current node (say val) we are in:
    - If X is less than val move to the left subtree.
    - Otherwise, move to the right subtree.
- Once the leaf node is reached, insert X to its right or left based on the relation between X and the leaf node’s value.

```cpp
Node* insert(Node* node, int data) {
        
    // Your code goes here
    if(!node)
    {
        return new Node(data);
    }
    if(data == node -> data)
    {
        return node;
    }
    else if(node -> data < data)
    {
        node -> right = insert(node -> right, data);
    }
    else
    {
        node -> left = insert(node -> left, data);
    }
    return node;
}
```

### Analysis
- **Time Complexity** - O(h), where h is the height of the tree
- **Space Complexity** - O(h), where h is the height of the tree

## TODO - insert using iterative approach
