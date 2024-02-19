# Handshaking Lemma

It is about undirected graph. In every finite undirected graph, an even number of vertices will always have an odd degree. Handshaking lemma depends on degree sum formula.

Suppose we have a tree with n tree and n-1 edges then handshaking lemma prupose that sum of degress of all vertices in this tree is `2(n-1)`.

To prove the Handshaking Lemma, we can use the fact that each edge connects two vertices, so it contributes 2 to the sum of the degrees of all vertices. Thus, the total sum of the degrees of all vertices is equal to twice the number of edges.

The Handshaking Lemma is a useful tool in solving graph-related problems. For example, it can be used to determine whether a graph has an Eulerian path or cycle. An Eulerian path is a path that visits every edge of a graph exactly once, while an Eulerian cycle is a cycle that visits every vertex of a graph exactly once. If a graph has an Eulerian path or cycle, then the sum of the degrees of all vertices must be even.

## Derivation using handshaking lemma
Following are some interesting facts that can be proved using the Handshaking lemma.
- **In a k-ary tree where every node has either 0 or k children, the following property is always true.**
    ```
    L = (k - 1)*I + 1
    Where L = Number of leaf nodes
        I = Number of internal nodes 
    ```

    **Proof** - Proof can be divided into two cases. 

    - Case 1 (Root is Leaf): There is only one node in the tree. The above formula is true for a single node as L = 1, I = 0. 
    - Case 2 (Root is Internal Node): For trees with more than 1 node, the root is always an internal node. The above formula can be proved using Handshaking Lemma for this case. A tree is an undirected acyclic graph. 

    Total number of edges in Tree is number of nodes minus 1, i.e., |E| = L + I – 1. 

    All internal nodes except root in the given type of tree have degree k + 1. Root has a degree k. All leaves have degree 1. Applying the Handshaking lemma to such trees, we get the following relation. 

    ```
    Sum of all degrees  = 2 * (Sum of Edges)

    Sum of degrees of leaves + 
    Sum of degrees for Internal Node except root + 
    Root's degree = 2 * (No. of nodes - 1)

    Putting values of above terms,   
    L + (I-1)*(k+1) + k = 2 * (L + I - 1) 
    L + k*I - k + I -1 + k = 2*L  + 2I - 2
    L + K*I + I - 1 = 2*L + 2*I - 2
    K*I + 1 - I = L
    (K-1)*I + 1 = L   
    ```
- **In a Binary tree, the number of leaf nodes is always one more than nodes with two children.** 

    ```
    L = T + 1
    Where   L = Number of leaf nodes
            T = Number of internal nodes with two children 
    ```

    **Proof:** 

    Let a number of nodes with 2 children are T. Proof can be divided into three cases. 

    - Case 1: There is only one node, the relationship holds 
        as T = 0, L = 1. 

    - Case 2: Root has two children, i.e., the degree of the root is 2. 
        ```
        Sum of degrees of nodes with two children except root + 
        Sum of degrees of nodes with one child + 
        Sum of degrees of leaves + Root's degree = 2 * (No. of Nodes - 1)   

        Putting values of above terms,
        (T-1)*3 + S*2 + L + 2 = (S + T + L - 1)*2

        Cancelling 2S from both sides.
            (T-1)*3 + L + 2 = (T + L - 1)*2
            T - 1 = L - 2
            T = L - 1 
        ```

    - Case 3: Root has one child, i.e., the degree of the root is 1.
        ```
        Sum of degrees of nodes with two children + 
        Sum of degrees of nodes with one child except root + 
        Sum of degrees of leaves + Root's degree = 2 * (No. of Nodes - 1)   

        Putting values of above terms,
        T*3 + (S-1)*2 + L + 1 = (S + T + L - 1)*2

        Cancelling 2S from both sides.
            3*T + L -1 = 2*T + 2*L - 2
            T - 1 = L - 2
            T = L - 1 
        ```