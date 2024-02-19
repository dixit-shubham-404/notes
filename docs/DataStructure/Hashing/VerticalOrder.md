# Vertical order traversal of Binary Tree using Map

https://www.geeksforgeeks.org/vertical-order-traversal-of-binary-tree-using-map/

Given a binary tree, print it vertically. The following examples illustrate the vertical order traversal.

```
  Input:            1
                  /    \ 
                2      3
               / \   /   \
             4   5  6   7
                         /  \ 
                       8    9 
Output -
4
2
1 5 6
3 8
7
9
```

## Vertical order traversal of the binary tree using Self Balancing BSTs

We need to check the Horizontal Distances from the root for all nodes. If two nodes have the same Horizontal Distance (HD), then they are on the same vertical line. The idea of HD is simple. HD for root is 0, a right edge (edge connecting to right subtree) is considered as +1 horizontal distance and a left edge is considered as -1 horizontal distance. 

```cpp
void helper(Node *root, int hd, map<int , vector<int>> & mp)
{
    if(root == NULL)
    {
        return;
    }
    mp[hd].push_back(root -> data);
    
    helper(root->left,hd-1,mp);
    helper(root->right,hd+1,mp);
}
vector<int> verticalOrder(Node *root)
{
    //Your code here
    map<int , vector<int>> mp;
    vector<int> result;
    
    int hd =0;// horizontal distance
    helper(root,hd,mp);
    map<int, vector<int> >::iterator it;
    for(it = mp.begin(); it != mp.end(); it++)
    {
        for(int i=0;i<it->second.size();i++)
        {
            result.push_back(it->second[i]);
        }
    }
    return result;
    
}
```

The above result didn't passed all the test cases.

### Analysis
- **Time Complexity** - O(n log n), The hashing based solution can be considered as O(N) under the assumption that we have a good hashing function that allows insertion and retrieval operations in O(1) time. In the above C++ implementation, map of STL is used. map in STL is typically implemented using a Self-Balancing Binary Search Tree where all operations take O(Log N) time. 
- **Space Complexity** - O(n).



## TODO - Print vertical order traversal of the binary tree in the same order as they appear

## TODO - Vertical order traversal of the binary tree using computeIfAbsent method in Java

## TODO - Vertical order traversal of the binary tree using the Unordered Map method