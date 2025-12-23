class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);
    
    if (this._root === null) {
      this._root = newNode;
      return;
    }
    
    this._addNode(this._root, newNode);
  }

  _addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._addNode(node.left, newNode);
      }
    } else if (newNode.data > node.data) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._addNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    return this._findNode(this._root, data);
  }

  _findNode(node, data) {
    if (node === null) {
      return null;
    }
    
    if (data < node.data) {
      return this._findNode(node.left, data);
    } else if (data > node.data) {
      return this._findNode(node.right, data);
    } else {
      return node;
    }
  }

  remove(data) {
    this._root = this._removeNode(this._root, data);
  }

  _removeNode(node, data) {
    if (node === null) {
      return null;
    }
    
    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null) {
        return node.right;
      }
      
      if (node.right === null) {
        return node.left;
      }
      
      let minRight = node.right;
      while (minRight.left !== null) {
        minRight = minRight.left;
      }
      
      node.data = minRight.data;
      node.right = this._removeNode(node.right, minRight.data);
      
      return node;
    }
  }

  min() {
    if (this._root === null) {
      return null;
    }
    
    let current = this._root;
    while (current.left !== null) {
      current = current.left;
    }
    
    return current.data;
  }

  max() {
    if (this._root === null) {
      return null;
    }
    
    let current = this._root;
    while (current.right !== null) {
      current = current.right;
    }
    
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};
