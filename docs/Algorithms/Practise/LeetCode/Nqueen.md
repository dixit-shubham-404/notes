# N-Queen Problem
The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

```
Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
```

```cpp
bool isSafe(vector<vector<int>> &result, int row,int col, int n)
{
    //check for this row
    for(int i=0;i<col;i++)
    {
        if(result[row][i] == 1)
        {
            return false;
        }
    }
    
    // check for upper left diagnol
    for(int i=row-1,j=col-1; i>= 0 && j>=0 ; i--,j--)
    {
        if(result[i][j] == 1)
        {
            return false;
        }
    }
    
    // check for lower left diagnol
    for(int i=row+1,j=col-1; i < n && j>=0 ; i++,j--)
    {
        if(result[i][j] == 1)
        {
            return false;
        }
    }
    return true;
}

bool solveNqueen(vector<vector<int>> &result,int col, int n, vector<vector<string>> &ans)
{
    if(col >= n)
    {
        return true;
    }
    
    for(int i=0;i<n;i++)
    {
        if(isSafe(result,i,col,n))
        {
            result[i][col]=1;
            if(solveNqueen(result,col+1,n, ans))
            {
                vector<string> temp;
                for(int j=0;j<n;j++)
                {
                    string t = "";
                    for(int i=0;i<n;i++)
                    {
                        if(result[i][j] == 1)
                        {
                            t = t +"Q";
                        }
                        else
                        {
                            t = t+ ".";
                        }
                    }
                    temp.push_back(t);
                }
                ans.push_back(temp);
            }
            result[i][col]=0;
        }
    }
    return false;
}

vector<vector<string>> solveNQueens(int n) {
    vector<vector<int>> result(n,vector<int> (n,0));
    vector<vector<string>> ans;
    solveNqueen(result,0,n,ans);
    return ans;
}
```

### Analysis
- **Time Complexity** - O(n!), 
- **Space Complexity** -  O(N^2)