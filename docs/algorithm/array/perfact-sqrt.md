---
title: 367. 有效的完全平方数
date: 2021-12-01
tags:
 - 二分法
categories: 
 - 算法
---

[leetcode传送门](https://leetcode-cn.com/problems/valid-perfect-square/)
::: tip 
给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。

进阶：不要 使用任何内置的库函数，如  sqrt 。
:::

#### 示例1
```
输入：num = 16
输出：true
```

#### 示例2
```
输入：num = 14
输出：false
```

### 思路: 
同`69.Sqrt(x) 求平方根`相似,只是在符合条件的时候返回布尔值

``` js
/**
 * @param {number} x
 * @return {number}
 */
var isPerfectSquare = function(num) {
    if(num === 1) return true
    let left = 1, right = Math.floor(num/2);
    while(left <= right){
        const mid = Math.floor(left + (right - left) / 2);
        if(mid * mid < num){
            left = mid + 1;
        } else if(mid * mid > num){
            right = mid - 1
        }else{
            return true
        }
    }
    return false
};
```
