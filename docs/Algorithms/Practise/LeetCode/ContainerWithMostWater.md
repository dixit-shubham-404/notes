# Container With Most Water

https://leetcode.com/problems/container-with-most-water/

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
```

## Brute Force

Simple two loop Technique.

```cpp
int maxArea(vector<int>& height) {
    int max_capacity =0;
    for(int i=0;i<height.size(); i++)
    {
        for(int j=i+1;j<height.size(); j++)
        {
            int area = (j-i) * min(height[i], height[j]);
            max_capacity = max(area, max_capacity);
        }
    }
    return max_capacity;
}
```

### Analysis
- **Time Complexity** - O(n*n)
- **Space Complexity** - O(1)

## Two pointer approach
The two-pointer technique starts with the widest container and moves the pointers inward based on the comparison of heights.
Increasing the width of the container can only lead to a larger area if the height of the new boundary is greater. By moving the pointers towards the center, we explore containers with the potential for greater areas.

Explanation:
- Initialize the variables:
    - left to represent the left pointer, starting at the beginning of the container (index 0).
    - right to represent the right pointer, starting at the end of the container (index height.size() - 1).
    - maxArea to keep track of the maximum area found, initially set to 0.
- Enter a loop using the condition left < right, which means the pointers have not crossed each other yet.
- Calculate the current area:
    - Use the min function to find the minimum height between the left and right pointers.
    - Multiply the minimum height by the width, which is the difference between the indices of the pointers: (right - left).
    - Store this value in the currentArea variable.
- Update the maximum area:
    - Use the max function to compare the currentArea with the maxArea.
    - If the currentArea is greater than the maxArea, update maxArea with the currentArea.
- Move the pointers inward: (Explained in detail below)
    - Check if the height at the left pointer is smaller than the height at the right pointer.
    - If so, increment the left pointer, moving it towards the center of the container.
    - Otherwise, decrement the right pointer, also moving it towards the center.
- Repeat steps 3 to 5 until the pointers meet (left >= right), indicating that all possible containers have been explored.
- Return the maxArea, which represents the maximum area encountered among all the containers.

```cpp
int maxArea(vector<int>& height) {
    int max_capacity =0;
    int left = 0, right = height.size()-1;
    while(left < right)
    {
        int current_area = (right - left) * min(height[left],height[right]);
        
        max_capacity = max(max_capacity, current_area);
        
        if(height[left] < height[right])
        {
            left ++;
        }
        else
        {
            right--;
        }
    }
    return max_capacity;
}
```

### Analysis
- **Time Complexity** - O(n)
- **Space Complexity** - O(1)