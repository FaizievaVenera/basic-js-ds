const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }
  root() {
    return this.tree
  }
  _add(node, data){
    if (!node) {
      return new Node(data);
    }
    if (node.data === data) {
      return node;
    }
    if (data > node.data) {
      node.right = this._add(node.right, data)
    } else {
      node.left = this._add(node.left, data)
    }

    return node;
  }
  add(data) {
    this.tree = this._add(this.tree, data);    
  }

  has(data) {
    return this.find(data) ? true : false;  
  }

  _find(node, data){
    if (!node) {
      return null;
    }
    if (node.data === data) {
      return node;
    }
    if (data > node.data) {
      return this._find(node.right, data)
    } else {
      return this._find(node.left, data);
    }
  }
  find(data) {
    return this._find(this.tree, data);
  }
  _remove(node, data) {
    if (!node) return null;

    if (data > node.data) {
      node.right = this._remove(node.right, data);
    } else if (data < node.data) {
      node.left = this._remove(node.left, data);
    } else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        let minValue = node.right;
        while (minValue.left) {
          minValue = minValue.left;
        }
        node.data = minValue.data;
        node.right = this._remove(node.right, minValue.data);
      }
    }
    return node;
  }
  remove(data) {
    this.base = this._remove(this.tree, data);
  }

  min() {
    if(!this.tree) return this.tree;

    let currentNode = this.tree;

    while(true) {
      if(currentNode.left) currentNode = currentNode.left;
      else return currentNode.data;
    }
  }

  max() {
    if(!this.tree) return this.tree;
    let currentNode = this.tree;

    while(true) {
      if(currentNode.right) currentNode = currentNode.right;
      else return currentNode.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};