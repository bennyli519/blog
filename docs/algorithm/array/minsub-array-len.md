---
title: 209. 长度最小的子数组
date: 2021-12-05
tags:
 - 滑动窗口
categories: 
 - 算法
---

[leetcode传送门](https://leetcode-cn.com/problems/minimum-size-subarray-sum/)
::: tip 
给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
:::

#### 示例1
```
输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
```

#### 示例2
```
输入：target = 4, nums = [1,4,4]
输出：1
```


#### 示例3
```
输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0
```

### 思路: 
所谓滑动窗口，就是<b>不断的调节子序列的起始位置和终止位置</b>，从而得出我们要想的结果。




``` js
var minSubArrayLen = function(target, nums) {
    let result;
    //窗口综合
    let sum = 0;
    let i = 0;
    let subLen = 0
    for(let j = 0;j<nums.length;j++){
        sum+=nums[j];
        while(sum>=target){
            subLen = j-i+1 //取子序列长度
            result = result<subLen?result:subLen
            sum-=nums[i++] //滑动窗口精髓，不断的变更i
        }
    }
    return result || 0
};
```
