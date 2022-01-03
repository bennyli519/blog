---
title: 69.Sqrt(x) 求平方根
date: 2021-12-01
tags:
 - 二分法
categories: 
 - 算法
---

[leetcode传送门](https://leetcode-cn.com/problems/sqrtx/)
[剑指 Offer II 072. 求平方根](https://leetcode-cn.com/problems/jJ0w9p/submissions/)
::: tip 
给定一个非负整数 x ，计算并返回 x 的平方根，即实现 `int sqrt(int x)` 函数。

正数的平方根有两个，只输出其中的正数平方根。

如果平方根不是整数，输出只保留整数的部分，小数部分将被舍去。
:::

#### 示例1
```
输入: x = 4
输出: 2
```

#### 示例2
```
输入: x = 8
输出: 2
解释: 8 的平方根是 2.82842...，由于小数部分将被舍去，所以返回 2
```

### 思路: 
左边界`left=1`,
右边界`x/2` 再向下取整, 因为平方根的最大值就是除以2
然后算出`mid` 再根据`mid*mid`去比较更新left和right,知道匹配为止 

``` js
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x
    let left = 1;
    let right = Math.floor(x/2);
    while(left <= right){
        let mid = Math.floor(left+(right-left)/2)
        if(mid * mid === x) return mid
        if(mid * mid < x){
            left = mid + 1
        }
        if(mid * mid > x){
            right =  mid - 1
        }
    }
    return right
};
```
