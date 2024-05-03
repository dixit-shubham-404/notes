# Detect Cycle in a Directed Graph

Given the root of a Directed graph, The task is to check whether the graph contains a cycle or not. 

To find cycle in a directed graph we can use the Depth First Traversal (DFS) technique. It is based on the idea that there is a cycle in a graph only if there is a back edge [i.e., a node points to one of its ancestors] present in the graph.

To detect a back edge, we need to keep track of the nodes visited till now and the nodes that are in the current recursion stack [i.e., the current path that we are visiting]. If during recursion, we reach a node that is already in the recursion stack, there is a cycle present in the graph.

```cpp
bool isCyclicHelper(int node, vector<int> adj[],vector<bool> &visited, vector<bool> &reccurencePath)
{
    visited[node]=true;
    reccurencePath[node]=true;
    for(int i=0;i<adj[node].size();i++)
    {
        if(!visited[adj[node][i]])
        {
            if(isCyclicHelper(adj[node][i],adj,visited,reccurencePath))
            {
                return true;
            }
        }
        else if(visited[adj[node][i]] && reccurencePath[adj[node][i]])
        {
            return true;
        }
    }
    reccurencePath[node]=false;
    return false;
}
bool isCyclic(int V, vector<int> adj[]) {
    // code here
    vector<bool> visited(V,false);
    vector<bool> reccurencePath(V,false);
    for(int i=0;i<V;i++)
    {
        if(!visited[i])
        {
            if(isCyclicHelper(i,adj,visited,reccurencePath))
            {
                return true;
            }
        }
    }
    return false;
}
```

### Time Complexity
- **Time Complexity** - O(V+E), where V is the number of nodes and E is the number of edges.
- **Auxiliary Space** - O(V)

## TODO - Approach : Detect Cycle in a Directed Graph using Topological Sorting: