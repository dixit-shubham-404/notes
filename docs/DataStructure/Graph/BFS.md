# Breadth First Search

Breadth First Search is used search for the graph data structure for a particular node that meets the set of criteria. It start from the root of the graph and visits all node at the current depth level before moving to the nodes at the next depth level.

It's almost same as BFS for tree only difference is graph may contain cycles so we might reach same node again. To avoid this we main the list of visited nodes.

To do this queue is used. All the adjacent unvisited node of the current level are pushed into the queue and the nodes of the current level are marked visited and popped from the queue.

```cpp
#include <bits/stdc++.h>
using namespace std;
 
// This class represents a directed graph using
// adjacency list representation
class Graph {
 
    // No. of vertices
    int V;
 
    // Pointer to an array containing adjacency lists
    vector<list<int> > adj;
 
public:
    // Constructor
    Graph(int V);
 
    // Function to add an edge to graph
    void addEdge(int v, int w);
 
    // Prints BFS traversal from a given source s
    void BFS(int s);
};
 
Graph::Graph(int V)
{
    this->V = V;
    adj.resize(V);
}
 
void Graph::addEdge(int v, int w)
{
    // Add w to v’s list.
    adj[v].push_back(w);
}
 
void Graph::BFS(int s)
{
    // Mark all the vertices as not visited
    vector<bool> visited;
    visited.resize(V, false);
 
    // Create a queue for BFS
    list<int> queue;
 
    // Mark the current node as visited and enqueue it
    visited[s] = true;
    queue.push_back(s);
 
    while (!queue.empty()) {
 
        // Dequeue a vertex from queue and print it
        s = queue.front();
        cout << s << " ";
        queue.pop_front();
 
        // Get all adjacent vertices of the dequeued
        // vertex s.
        // If an adjacent has not been visited,
        // then mark it visited and enqueue it
        for (auto adjacent : adj[s]) {
            if (!visited[adjacent]) {
                visited[adjacent] = true;
                queue.push_back(adjacent);
            }
        }
    }
}
 
// Driver code
int main()
{
    // Create a graph given in the above diagram
    Graph g(4);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
    g.addEdge(2, 0);
    g.addEdge(2, 3);
    g.addEdge(3, 3);
 
    cout << "Following is Breadth First Traversal "
         << "(starting from vertex 2) \n";
    g.BFS(2);
 
    return 0;
}
```
### Time Complexity
- **Time Complexity** - O(V+E), where V is the number of nodes and E is the number of edges.
- **Auxiliary Space** - O(V)