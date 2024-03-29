# Searching in Binary Search Tree (BST)

Let’s say we want to search for the number X, We start at the root. Then:

- We compare the value to be searched with the value of the root. 
    - If it’s equal we are done with the search if it’s smaller we know that we need to go to the left subtree because in a binary search tree all the elements in the left subtree are smaller and all the elements in the right subtree are larger. 
- Repeat the above step till no more traversal is possible
- If at any iteration, key is found, return True. Else False.

```cpp
bool search(Node* root, int x) {
    // Your code here
    if(root == NULL)
    {
        return false;
    }
    if(root -> data == x)
    {
        return true;
    }
    if(root -> data < x)
    {
        return search(root -> right,x);   
    }
    return search(root -> left,x);
}
```

### Analysis
- **Time Complexity** - O(h), where h is the height of the tree
- **Space Complexity** - O(h), where h is the height of the tree