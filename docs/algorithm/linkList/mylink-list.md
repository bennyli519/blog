---
title: 707. 设计链表
date: 2021-12-08
publish: false
tags:
 - 链表
categories: 
 - 算法
---

[leetcode传送门](https://leetcode-cn.com/problems/design-linked-list/)
::: tip 
设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next 是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。假设链表中的所有节点都是 0-index 的。
:::
在链表类中实现这些功能：
- get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
- addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
- addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
- addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
- deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。

#### 
```
MyLinkedList linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
linkedList.get(1);            //返回2
linkedList.deleteAtIndex(1);  //现在链表是1-> 3
linkedList.get(1);            //返回3
```

``` js
class LinkNode{
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Initialize your data structure here.
 * 单链表 储存头尾节点 和 节点数量
 */
var MyLinkedList = function() {
    this._size = 0;
    this._tail = null;
    this._head = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.getNode = function(index) {
    if(index < 0 || index >= this._size) return null;
    // 创建虚拟头节点
    let cur = new LinkNode(0, this._head);
    // 0 -> head
    while(index-- >= 0) {
        cur = cur.next;
    }
    return cur;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this._size) return -1;
    // 获取当前节点
    return this.getNode(index).val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const node =  new LinkNode(val,this._head);
    this._head = node;
    this._size ++;
    if(!this._tail){
        this._tail = node;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const node =  new LinkNode(val,null);
    this._size ++;
    if(this._tail){
        this._tail.next = node;
        this._tail = node;
        return;
    }
    this._tail = node;
    this._head = node;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {

};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {

};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
```
