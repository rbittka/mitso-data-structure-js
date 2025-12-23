const { ListNode } = require('./extensions/list-node.js');

class Queue {
  constructor() {
    this._head = null;
    this._tail = null;
  }

  getUnderlyingList() {
    return this._head;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    
    if (this._head === null) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      this._tail.next = newNode;
      this._tail = newNode;
    }
  }

  dequeue() {
    if (this._head === null) {
      return undefined;
    }
    
    const value = this._head.value;
    this._head = this._head.next;
    
    if (this._head === null) {
      this._tail = null;
    }
    
    return value;
  }
}

module.exports = {
  Queue
};
