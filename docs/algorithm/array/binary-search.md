---
title: 【704】二分查找
date: 2021-11-27
tags:
 - algorithm
 - 二分法
categories: 
 - algorithm
---

### 二分查找
https://leetcode-cn.com/problems/binary-search/
> 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

#### 示例1
```
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
```

#### 示例2
```
输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
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
var search = function(nums, target) {
    let left = 0,right = nums.length -1;
    while(left <= right){
        let mid = left + Math.floor((right-left)/2)
        if(nums[mid] > target){
            right = mid - 1
        }
        else if(nums[mid] < target){
            left = mid + 1
        }else{
            return mid
        }
    }
    return -1
};
```
