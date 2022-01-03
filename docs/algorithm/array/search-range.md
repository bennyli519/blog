---
title: 34. 在排序数组中查找元素的第一个和最后一个位置
date: 2021-11-30
tags:
 - 二分法
categories: 
 - 算法
---

[Leecode传送门](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/on/)
::: tip 
给定一个按照升序排列的整数数组 `nums`，和一个目标值 `target`。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 `target`，返回 `[-1, -1]`
:::

#### 示例1
```
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
```

#### 示例2
```
输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
```
#### 示例3:
输入：nums = [], target = 0
输出：[-1,-1]

### 思路: 
寻找target在数组里的左右边界，有如下三种情况:
- 情况一: target 在数组范围的右边或者左边，例如数组{3, 4, 5}，target为2或者数组{3, 4, 5},target为6，此时应该返回{-1, -1}
- 情况二: target 在数组范围中，且数组中不存在target，例如数组{3,6,7},target为5，此时应该返回{-1, -1}
- 情况三: target 在数组范围中，且数组中存在target，例如数组{3,6,7},target为6，此时应该返回{1, 1}
(分两次二分，拿到匹配target的左边界和右边界，return[left,right],否则return[-1,-1])

``` js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchRange = function(nums, target) {
    let left = getPos(nums,target,true);
    let right = getPos(nums,target,false);
    return [left,right]
};

const getPos = (nums,target,isLeft)=>{
    let left = 0, right = nums.length - 1,border = -1;
    while(left <= right){
        let mid = left + Math.floor((right - left)/2);
        if(nums[mid] > target){
            right = mid - 1;
        }else if(nums[mid] < target){
            left = mid + 1;
        }else{
            border = mid;
            if(isLeft){
                right = mid - 1
            }else{
                left = mid + 1
            }
        }
    }
    return border
}
```

#### 分布拆解写法
```js
var searchRange = function(nums, target) {
    //得到左边界符合target的索引
    const getLeftBorder = (nums, target) => {
        let left = 0, right = nums.length - 1;
        let leftBorder = -2;// 记录一下leftBorder没有被赋值的情况
        while(left <= right){
            let middle = left + ((right - left) >> 1);
            if(nums[middle] >= target){ // 寻找左边界，nums[middle] == target的时候更新right
                right = middle - 1;
                leftBorder = right;
            } else {
                left = middle + 1;
            }
        }
        return leftBorder;
    }
     //得到右边界符合target的索引
    const getRightBorder = (nums, target) => {
        let left = 0, right = nums.length - 1;
        let rightBorder = -2; // 记录一下rightBorder没有被赋值的情况
        while (left <= right) {
            let middle = left + ((right - left) >> 1);
            if (nums[middle] > target) {
                right = middle - 1;
            } else { // 寻找右边界，nums[middle] == target的时候更新left
                left = middle + 1;
                rightBorder = left;
            }
        }
        return rightBorder;
    }

    let leftBorder = getLeftBorder(nums, target);
    let rightBorder = getRightBorder(nums, target);
    // 情况一
    if(leftBorder === -2 || rightBorder === -2) return [-1,-1];
    // 情况三
    if (rightBorder - leftBorder > 1) return [leftBorder + 1, rightBorder - 1];
    // 情况二
    return [-1, -1];
};
```
