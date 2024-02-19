# Detect cycle in an undirected graph

Given an undirected graph, The task is to check if there is a cycle in the given graph.

```cpp
bool Graph::isCyclicUtil(int v, bool visited[], int parent)
{
 
    // Mark the current node as visited
    visited[v] = true;
 
    // Recur for all the vertices
    // adjacent to this vertex
    list<int>::iterator i;
    for (i = adj[v].begin(); i != adj[v].end(); ++i) {
 
        // If an adjacent vertex is not visited,
        // then recur for that adjacent
        if (!visited[*i]) {
            if (isCyclicUtil(*i, visited, v))
                return true;
        }
 
        // If an adjacent vertex is visited and
        // is not parent of current vertex,
        // then there exists a cycle in the graph.
        else if (*i != parent)
            return true;
    }
    return false;
}
 
// Returns true if the graph contains
// a cycle, else false.
bool Graph::isCyclic()
{
 
    // Mark all the vertices as not
    // visited and not part of recursion
    // stack
    bool* visited = new bool[V];
    for (int i = 0; i < V; i++)
        visited[i] = false;
 
    // Call the recursive helper
    // function to detect cycle in different
    // DFS trees
    for (int u = 0; u < V; u++) {
 
        // Don't recur for u if
        // it is already visited
        if (!visited[u])
            if (isCyclicUtil(u, visited, -1))
                return true;
    }
    return false;
}
```

### Analysis
- **Time Complexity** - O(V+E)
- **Space Complexity** - O(V), To store the visited array O(V) space is require