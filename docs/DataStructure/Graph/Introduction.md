# Graph and its representations

A Graph is a non-linear data structure consisting of vertices and edges. The vertices are sometimes also referred to as nodes and the edges are lines or arcs that connect any two nodes in the graph. More formally a Graph is composed of a set of vertices( V ) and a set of edges( E ). The graph is denoted by G(V, E).

## Respresentation of Graph
1. Adjacency Matrix
2. Adjaceny List

## Adjacency Matrix

Adjacency Matrix is a way of respresenting the graph as the matrix of boolean 0 or 1.

If there are n vertices in the graph then the adjacency matrix will have the size of adjMat[n][n].

- If there is an edge from vertex i to j, mark adjMat[i][j] as 1.
- If there is no edge from vertex i to j, mark adjMat[i][j] as 0.

## Adjacency List

An array of list is used to store edges between two matrices.
Size of the array is equal to the number of vertices. Each index the array represents the specific vertex in the graph. The entries at index i contains list of all vertices which are adjacent to node i.
- adjList[0] will have all the nodes which are connected (neighbour) to vertex 0.
- adjList[1] will have all the nodes which are connected (neighbour) to vertex 1 and so on.