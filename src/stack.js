class Stack {
  constructor() {
    this._items = [];
  }

  push(element) {
    this._items.push(element);
  }

  pop() {
    if (this._items.length === 0) {
      return undefined;
    }
    return this._items.pop();
  }

  peek() {
    if (this._items.length === 0) {
      return undefined;
    }
    return this._items[this._items.length - 1];
  }
}

module.exports = {
  Stack
};
