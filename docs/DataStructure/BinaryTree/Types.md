# Types of Binary Tree

## Based on Number of Children
- **Full Binary Tree** - A binary tree is full binary tree if a node has 0 or 2 children.
- **Degenerate or Pathalogical trees** - A tree where every intenal node has one child.
- **Skewed Binary Tree** - A skewed binary tree is degenerate binary tree in which trees are either dominated with left nodes or right nodes.

## On the basis of Completion of levels
- **Complete Binary Tree** - A binary tree is a complete binary tree if all the levels are completely filled except possibly the last level and the last level has all the keys as left as possible.
- **Perfect Binary Tree** - A binary tree is complete binary tree in which all internal nodes have two children and all leaf nodes are at same levels.
- **Balanced Bonary Tree** - A binary tree in which the difference between the heights of left and right subtree should be either 0 or 1.

## Some Other types of trees

- **Binary Search Tree** - A binary search tree follows the following properties -
    - the left sub tree of the node contains the keys lesser then the node's key.
    - the right sub tree of the node contains the keys greater then the node's key.
    - The left and right subtree of each node must also be binary search tree.

- **AVL Tree** - AVL Tree is the self balancing BST where the difference between the height of left and right sub tree cannot be more then one.

- **Red Black Tree** - A red-black tree is a kind of self-balancing binary search tree where each node has an extra bit, and that bit is often interpreted as the color (red or black). These colors are used to ensure that the tree remains balanced during insertions and deletions. Although the balance of the tree is not perfect, it is good enough to reduce the searching time and maintain it around O(log n) time, where n is the total number of elements in the tree. This tree was invented in 1972 by Rudolf Bayer. 

- **B Tree** - A B-tree is a type of self-balancing tree data structure that allows efficient access, insertion, and deletion of data items. B-trees are commonly used in databases and file systems, where they can efficiently store and retrieve large amounts of data. A B-tree is characterized by a fixed maximum degree (or order), which determines the maximum number of child nodes that a parent node can have. Each node in a B-tree can have multiple child nodes and multiple keys, and the keys are used to index and locate data items.

- **B+ Tree** - A B+ tree is a variation of the B-tree that is optimized for use in file systems and databases. Like a B-tree, a B+ tree also has a fixed maximum degree and allows efficient access, insertion, and deletion of data items. However, in a B+ tree, all data items are stored in the leaf nodes, while the internal nodes only contain keys for indexing and locating the data items. This design allows for faster searches and sequential access of the data items, as all the leaf nodes are linked together in a linked list.

- **Segment Tree** - In computer science, a Segment Tree, also known as a statistic tree, is a tree data structure used for storing information about intervals, or segments. It allows querying which of the stored segments contain a given point. It is, in principle, a static structure; that is, it’s a structure that cannot be modified once it’s built. A similar data structure is the interval tree.
