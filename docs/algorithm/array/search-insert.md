---
title: 35. 搜索插入位置
date: 2021-11-27
tags:
 - 二分法
categories: 
 - 算法
---

[leetcode传送门](https://leetcode-cn.com/problems/search-insert-position/)
::: tip 
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
:::

#### 示例1
```
输入: nums = [1,3,5,6], target = 5
输出: 2
```

#### 示例2
```
输入: nums = [1,3,5,6], target = 2
输出: 1
```
#### 提示:
- 你可以假设 nums 中的所有元素是不重复的。
- n 将在 [1, 10000]之间。
- nums 的每个元素都将在 [-9999, 9999]之间。

### 思路: 
这道题目的前提是`有序数组`,同时强调数组中`无重复元素`(这些是用二分法的前提条件)
区间定义好 `左闭右闭即[left, right]`

``` js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while(left <= right){
        let mid =  Math.floor((right - left)/2 + left);
        //target 在 左区间
        if(nums[mid] > target){
           right = mid - 1;
        }else if(nums[mid] < target){
           left = mid + 1
        }else{
           return mid
        }
    }
    return right + 1
};
```
