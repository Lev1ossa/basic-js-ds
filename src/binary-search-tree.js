const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);
    this.rootNode === null ? this.rootNode = newNode : this.addNode(this.rootNode, newNode);
  }

  addNode(thisNode, newNode){
    if (newNode.data < thisNode.data){
      thisNode.left === null ? thisNode.left = newNode : this.addNode(thisNode.left, newNode);
    } else {
      thisNode.right === null ? thisNode.right = newNode : this.addNode(thisNode.right, newNode);
    }
  }

  has(data) {
    let thisNode = this.rootNode;
    return this.hasData(thisNode, data);
  }

  hasData(thisNode, data){
    if(thisNode.data == data){
      return true;
    } else if (data < thisNode.data && thisNode.left) {
      return this.hasData(thisNode.left, data);
    } else if (data > thisNode.data && thisNode.right) {
      return this.hasData(thisNode.right, data)
    }
    
    return false;
  }

  find(data) {
    let thisNode = this.rootNode;
    return this.findNode(thisNode, data);
  }

  findNode(thisNode, data){
    if(thisNode.data == data){
      return thisNode;
    } else if (data < thisNode.data && thisNode.left) {
      return this.findNode(thisNode.left, data);
    } else if (data > thisNode.data && thisNode.right) {
      return this.findNode(thisNode.right, data)
    }
    
    return null;
  }

  remove(data) {
     this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(thisNode, data) {
    if(thisNode === null){
      return null;
    } else if (data < thisNode.data) {
      thisNode.left = this.removeNode(thisNode.left, data);
      return thisNode;
    } else if (data > thisNode.data) {
      thisNode.right = this.removeNode(thisNode.right, data);
      return thisNode;
    } else {
      if(!thisNode.left && !thisNode.right){
        thisNode = null;
        return thisNode;
      } else if (!thisNode.left){
        thisNode = thisNode.right;
        return thisNode;
      } else if (!thisNode.right){
        thisNode = thisNode.left;
        return thisNode;
      } else {
        let newNodeData = this.findMin(thisNode.right).data;
        thisNode.data = newNodeData;
        thisNode.right = this.removeNode(thisNode.right, newNodeData);
        return thisNode;
      }    
    }
  }

  min() {
    return this.findMin(this.rootNode).data;
  }

  findMin(thisNode){
    if (thisNode.left){
      return this.findMin(thisNode.left);
    } else {
      return thisNode;
    }
  }

  max() {
    return this.findMax(this.rootNode).data;
  }

  findMax(thisNode){
    if (thisNode.right){
      return this.findMax(thisNode.right);
    } else {
      return thisNode;
    }
  }
}

module.exports = {
  BinarySearchTree
};