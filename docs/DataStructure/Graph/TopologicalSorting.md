# Topological Sorting

https://www.geeksforgeeks.org/topological-sorting/

Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge u-v, vertex u comes before v in the ordering.

**Note**: Topological Sorting for a graph is not possible if the graph is not a DAG.

## Topological order may not be Unique:
Topological sorting is a dependency problem in which completion of one task depends upon the completion of several other tasks whose order can vary.


## Algorithm for Topological Sorting using DFS:

Here’s a step-by-step algorithm for topological sorting using Depth First Search (DFS):

- Create a graph with n vertices and m-directed edges.
- Initialize a stack and a visited array of size n.
- For each unvisited vertex in the graph, do the following:
    - Call the DFS function with the vertex as the parameter.
    - In the DFS function, mark the vertex as visited and          recursively call the DFS function for all unvisited neighbors of the vertex.
    - Once all the neighbors have been visited, push the vertex onto the stack.
- After all, vertices have been visited, pop elements from the stack and append them to the output list until the stack is empty.
- The resulting list is the topologically sorted order of the graph.


```cpp
void topologicalSort(int vertex, stack<int> &st,vector<bool> &visited,int V, vector<int> adj[])
{
    if(visited[vertex])
    {
        return;
    }
    visited[vertex]=true;
    for(auto it : adj[vertex])
    {
        topologicalSort(it, st, visited, V, adj);
    }
    st.push(vertex);
}
vector<int> topoSort(int V, vector<int> adj[]) 
{
    // code here
    stack<int> st;
    vector<bool> visited(false, V);
    for(int i=0;i<V;i++)
    {
        topologicalSort(i,st,visited, V, adj);
    }
    
    vector<int> ans;
    while(!st.empty())
    {
        ans.push_back(st.top());
        st.pop();
    }
    return ans;
}
```

### Analysiis
- **Time Complexity** - The time complexity for constructing the graph is O(V + E), where V is the number of vertices and E is the number of edges.
- **Space Complexity** - O(V). The extra space is needed for the stack

