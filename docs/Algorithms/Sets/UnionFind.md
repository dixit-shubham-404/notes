# Introduction to Disjoint Set (Union-Find Algorithm)

## What is a Disjoint set data structure?

```
Two sets are called disjoint sets if they dont have any element in common, the intersection of set is null set.
```

A data structure which stores non overlapping or disjoint subset of elements is called disjoint set data structure. The disjoint set data structure supports the following operations :
- Adding new sets to the disjoint set.
- Merging disjoint sets to the single disjoint set using union operations.
- Finding representative of a disjoint set using Find operation
- Check if two sets are disjoint sets or not.


Consider a situtation with number of person and the following task to be performed by them:
-  Adding a new friendship relation i.e. a person x becomes friend of new person y
- Find whether individual x is a friend of individual y.

```
We are given 10 individuals say, a, b, c, d, e, f, g, h, i, j

Following are relationships to be added:
a <-> b  
b <-> d
c <-> f
c <-> i
j <-> e
g <-> j

Given queries like whether a is a friend of d or not. We basically need to create following 4 groups and maintain a quickly accessible connection among group items:
G1 = {a, b, d}
G2 = {c, f, i}
G3 = {e, g, j}
G4 = {h}
```

**Find whether x and y belongs to same group or not i.e. find whether x and y are direct or indirect friends**

- **How to resolve sets?** - Initially all elements belong to different sets. After working on given relation, we select a member as representative. There can be many ways to find the representative , a simple one is to select the biggest index.
- **Check if two persons are in the same group?** - If representative of two members are same then they both are friend.

## Data structure used are:

- `Array` - An array of integer is Parent[]. If we are dealing with N items , i'th element of array represents the i'th item . More precisely the i'th element of the Parent[] is the representative of i'th item.

- `Tree` - It is disjoint set. If two elements are in the same tree then they are in the disjoint set. The root node of each tree is the representative of that set. There is always a single unique representative of each disjoint set. A simple rule to find if i is the representative of an set is `i == Parent[i]`. If i is not the representative of the set then it can be found by travelling up the tree until we find the representative.

## Opertation in Disjoint set
- **UNION**
- **FIND**

### Find Operation

```cpp
#include<bits/stdc++.h>
using namespace std;
 
int find(int i)
{
    // If i is the parent of itself
    if (parent[i] == i) {
 
        // Then i is the representative of
        // this set
        return i;
    }
    else {
 
        // Else if i is not the parent of
        // itself, then i is not the
        // representative of his set. So we
        // recursively call Find on its parent
        return find(parent[i]);
    }
}
```

**Time complexity:** This approach is inefficient and can take O(n) time in worst case.

### Union Operation

It takes two element as input and find the representative of both using find operation. Then put either on of the tree under root of another tree.

```cpp
#include <bits/stdc++.h>
using namespace std;
 
void union(int i, int j) {
 
    // Find the representatives
    // (or the root nodes) for the set
    // that includes i
    int irep = this.Find(i),
 
    // And do the same for the set
    // that includes j
    int jrep = this.Find(j);
 
    // Make the parent of i’s representative
    // be j’s  representative effectively
    // moving all of i’s set into j’s set)
    this.Parent[irep] = jrep;
}
```

**Time complexity:** This approach is inefficient and could lead to tree of length O(n) in worst case.

### Optimizations (Union by Rank/Size and Path Compression):

The efficiency depends heavily on which tree get attached to the other. There are 2 ways in which it can be done. First is Union by Rank, which considers height of the tree as the factor and Second is Union by Size, which considers size of the tree as the factor while attaching one tree to the other . This method along with Path Compression gives complexity of nearly constant time.

### Path Compression
It speeds up the data structure by compressing the height of the trees. It can be achieved by inserting a small caching mechanism into the Find operation. 

```cpp
#include <bits/stdc++.h>
using namespace std;
 
int find(int i) 
{
 
    // If i is the parent of itself
    if (Parent[i] == i) {
 
        // Then i is the representative 
        return i;
    }
    else { 
 
        // Recursively find the representative.
        int result = find(Parent[i]);
 
        // We cache the result by moving i’s node 
        // directly under the representative of this
        // set
        Parent[i] = result;
       
        // And then we return the result
        return result;
     }
}
```

***Time Complexity:** O(log n) on average per call.

### Union By Rank
First of all, we need a new array of integers called rank[]. The size of this array is the same as the parent array Parent[]. If i is a representative of a set, rank[i] is the height of the tree representing the set. 
Now recall that in the Union operation, it doesn’t matter which of the two trees is moved under the other. Now what we want to do is minimize the height of the resulting tree. If we are uniting two trees (or sets), let’s call them left and right, then it all depends on the rank of left and the rank of right. 

- If the rank of left is less than the rank of right, then it’s best to move left under right, because that won’t change the rank of right (while moving right under left would increase the height). In the same way, if the rank of right is less than the rank of left, then we should move right under left.
- If the ranks are equal, it doesn’t matter which tree goes under the other, but the rank of the result will always be one greater than the rank of the trees.

```cpp
#include <bits/stdc++.h>
using namespace std;
 
void unionbyrank(int i, int j) {
 
    // Find the representatives (or the root nodes)
    // for the set that includes i
    int irep = this.find(i);
 
    // And do the same for the set that includes j
    int jrep = this.Find(j);
 
    // Elements are in same set, no need to
    // unite anything.
    if (irep == jrep)
        return;
     
      // Get the rank of i’s tree
    irank = Rank[irep],
 
    // Get the rank of j’s tree
    jrank = Rank[jrep];
 
    // If i’s rank is less than j’s rank
    if (irank < jrank) {
 
        // Then move i under j
        this.parent[irep] = jrep;
    }
 
    // Else if j’s rank is less than i’s rank
    else if (jrank < irank) {
 
        // Then move j under i
        this.Parent[jrep] = irep;
    }
 
    // Else if their ranks are the same
    else {
 
        // Then move i under j (doesn’t matter
        // which one goes where)
        this.Parent[irep] = jrep;
 
        // And increment the result tree’s
        // rank by 1
        Rank[jrep]++;
    }
}
```

### Union by Size:

Again, we need a new array of integers called size[]. The size of this array is the same as the parent array Parent[]. If i is a representative of a set, size[i] is the number of the elements in the tree representing the set. 
Now we are uniting two trees (or sets), let’s call them left and right, then in this case it all depends on the size of left and the size of right tree (or set).

- If the size of left is less than the size of right, then it’s best to move left under right and increase size of right by size of left. In the same way, if the size of right is less than the size of left, then we should move right under left. and increase size of left by size of right.
- If the sizes are equal, it doesn’t matter which tree goes under the other.

```cpp
#include <bits/stdc++.h>
using namespace std;
 
void unionBySize(int i, int j) {
 
    // Find the representatives (or the root nodes)
    // for the set that includes i
    int irep = find(i);
 
    // And do the same for the set that includes j
    int jrep = find(j);
 
    // Elements are in the same set, no need to
    // unite anything.
    if (irep == jrep)
        return;
 
    // Get the size of i’s tree
    int isize = Size[irep];
 
    // Get the size of j’s tree
    int jsize = Size[jrep];
 
    // If i’s size is less than j’s size
    if (isize < jsize) {
 
        // Then move i under j
        Parent[irep] = jrep;
 
        // Increment j's size by i's size
        Size[jrep] += Size[irep];
    }
 
    // Else if j’s size is less than i’s size
    else {
 
        // Then move j under i
        Parent[jrep] = irep;
 
        // Increment i's size by j's size
        Size[irep] += Size[jrep];
    }
}
```

**Time complexity:** O(log n) without Path Compression.

### Below is the complete implementation of disjoint set with path compression and union by rank.

```cpp
#include <bits/stdc++.h>
using namespace std;
 
class DisjSet {
    int *rank, *parent, n;
 
public:
   
    // Constructor to create and
    // initialize sets of n items
    DisjSet(int n)
    {
        rank = new int[n];
        parent = new int[n];
        this->n = n;
        makeSet();
    }
 
    // Creates n single item sets
    void makeSet()
    {
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }
    }
 
    // Finds set of given item x
    int find(int x)
    {
        // Finds the representative of the set
        // that x is an element of
        if (parent[x] != x) {
 
            // if x is not the parent of itself
            // Then x is not the representative of
            // his set,
            parent[x] = find(parent[x]);
 
            // so we recursively call Find on its parent
            // and move i's node directly under the
            // representative of this set
        }
 
        return parent[x];
    }
 
    // Do union of two sets by rank represented
    // by x and y.
    void Union(int x, int y)
    {
        // Find current sets of x and y
        int xset = find(x);
        int yset = find(y);
 
        // If they are already in same set
        if (xset == yset)
            return;
 
        // Put smaller ranked item under
        // bigger ranked item if ranks are
        // different
        if (rank[xset] < rank[yset]) {
            parent[xset] = yset;
        }
        else if (rank[xset] > rank[yset]) {
            parent[yset] = xset;
        }
 
        // If ranks are same, then increment
        // rank.
        else {
            parent[yset] = xset;
            rank[xset] = rank[xset] + 1;
        }
    }
};
 
// Driver Code
int main()
{
   
      // Function Call
    DisjSet obj(5);
    obj.Union(0, 2);
    obj.Union(4, 2);
    obj.Union(3, 1);
   
    if (obj.find(4) == obj.find(0))
        cout << "Yes\n";
    else
        cout << "No\n";
    if (obj.find(1) == obj.find(0))
        cout << "Yes\n";
    else
        cout << "No\n";
 
    return 0;
}
```

**Time complexity:** O(n) for creating n single item sets . The two techniques -path compression with the union by rank/size, the time complexity will reach nearly constant time. It turns out, that the final amortized time complexity is O(α(n)), where α(n) is the inverse Ackermann function, which grows very steadily (it does not even exceed for n<10600  approximately).

**Space complexity:** O(n) because we need to store n elements in the Disjoint Set Data Structure.