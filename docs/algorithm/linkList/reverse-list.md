---
title: 206. 反转链表
date: 2021-12-07
tags:
 - 链表
categories: 
 - 算法
---

[leetcode传送门](https://leetcode-cn.com/problems/reverse-linked-list/)
::: tip 
给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
:::

#### 示例1
```
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
```

#### 示例2
```
输入：head = [1,2]
输出：[2,1]
```

### 思路: 
只需要改变链表的next指针的指向，直接将链表反转 ，而不用重新定义一个新的链表,如下图所示：
![链表反转](./images/2.png)
![反转gif](./images/1.gif)
首先定义一个cur指针，指向头结点，再定义一个pre指针，初始化为null。

然后就要开始反转了，首先要把 cur->next 节点用tmp指针保存一下，也就是保存一下这个节点。

为什么要保存一下这个节点呢，因为接下来要改变 cur->next 的指向了，将cur->next 指向pre ，此时已经反转了第一个节点了。

接下来，就是循环走如下代码逻辑了，继续移动pre和cur指针。

最后，cur 指针已经指向了null，循环结束，链表也反转完毕了。 此时我们return pre指针就可以了，pre指针就指向了新的头结点

``` js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head || !head.next) return head;
    let temp = null, cur = head, pre = null;
    while(cur){
        temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp
    }
    return pre
};
```
