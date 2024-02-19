# Binary Heap
A binary heap is a complete binary tree which is used to store the data efficiently to get the max or min based on its structure.

A binary heap is either min heap or max heap. In min binary heap, the root has the minimum value among all the nodes.
The same property must be true for all the nodes in the binary heap.

## Binary Heap representation
A binary heap is typically represented as an array.
The root element is arr[0].
If you are the i'th node how other nodes can be found
- Parent Node : arr[(i-1)/2].
- Left Child Node : arr[(2*i)+1]
- Right Child Node : arr[(2*i)+2]

## Operation on heap
- getMin() - this return the root element of the min heap the time complexity of this opertion is O(1).
- extractMin() - this operation deletes the min element of min heap, this complexity is O(log n) as we have to rearrange/heapify after deletion.
- decreaseKey() - decrease the value of the key, if decreased key value of a node is greater than the parent of the node, then we don’t need to do anything. Otherwise, we need to traverse up to fix the violated heap property.
- insert() - It takes log(n) time.
- delete() - It takes log(n) time.

## Insertions in Min Head

