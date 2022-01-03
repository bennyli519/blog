---
title: 59. 螺旋矩阵 II
date: 2021-12-06
tags:
 - 螺旋矩阵
categories: 
 - 算法
---

[leetcode传送门](https://leetcode-cn.com/problems/spiral-matrix-ii/)
::: tip 
给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
:::

#### 示例1
```
输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]
```

#### 示例2
```
输入：n = 1
输出：[[1]]
```

### 思路: 
模拟顺时针画矩阵的过程:

填充上行从左到右
填充右列从上到下
填充下行从右到左
填充左列从下到上
由外向内一圈一圈这么画下去。
``` js
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0))
    let num = 1; //更新填充数字
    let left = 0, right = n - 1, top = 0, bottom = n - 1;
    while (num <= n * n) {
        //从左到右
        for (let i = left; i <= right; i++) {
         	matrix[top][i] = num 
			num++
        }
        top++;
        // [右上到右下）
        for (let i = top; i <= bottom; i++) {
			matrix[i][right] = num
            num++;
        }
        right--;
        // [右下到下左]
        for (let i = right; i >= left; i--) {
			matrix[bottom][i] = num
            num++;
        }
        bottom--;
        // [左下到上]
        for (let i = bottom; i >= top; i--) {
			matrix[i][left] = num
            num++;
        }
        left++;
    }
    return matrix;
};
```

## 螺旋矩阵
[leetcode传送](https://leetcode-cn.com/problems/spiral-matrix/)
:::tip
给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
:::

### 示例1：
```
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
```
```
输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
```

```js
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let rowsTotal = matrix.length
    let colTotal = matrix[0].length;
    let arr = [];
    let left = 0,right = colTotal-1,bottom = rowsTotal-1,top =0;
    while(true) {
        for(let i = left;i<=right;i++){
          arr.push(matrix[top][i])  
        }
        top++;
        if(top>bottom) break;
        for(let i = top;i<=bottom;i++){
            arr.push(matrix[i][right])
        }
        right--;
        if(left>right)break;
        for(let i = right;i>=left;i--){
            arr.push(matrix[bottom][i])
        }
        bottom--;
        if(top>bottom) break;
        for(let i = bottom;i>=top;i--){
            arr.push(matrix[i][left])
        }
        left++;
        if(left>right) break;
    }
    return arr
};
```