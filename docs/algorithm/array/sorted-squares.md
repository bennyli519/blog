---
title: 977. 有序数组的平方
date: 2021-12-04
tags:
 - 双指针
categories: 
 - 算法
---
[leetcode传送门](https://leetcode-cn.com/problems/squares-of-a-sorted-array/)

:::tip
给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
:::

#### 示例1
```
输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]
```
#### 示例2
```
输入：nums = [-7,-3,2,3,11]
输出：[4,9,9,49,121]
```

#### 思路
数组其实是有序的， 只不过负数平方之后可能成为最大数了。

那么数组平方的最大值就在数组的两端，不是最左边就是最右边，不可能是中间。

```js
var sortedSquares = function(nums) {
    let res = [];
    for(let i = 0, j=nums.length-1;i<=j;){
        let left = Math.abs(nums[i]);
        let right = Math.abs(nums[j]);
        if(right > left){
            res.unshift(right * right);
            j--;
        }else{
            res.unshift(left * left);
            i++;
        }
    }
    return res;

};
```
