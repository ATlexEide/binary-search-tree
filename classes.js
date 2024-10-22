export class Tree {
  constructor() {
    this.root = null;
  }
  buildTree(arr) {
    // BUG: Fix: left most node is null. Loop does not iterate as intended
    if (!arr) throw "No argument";
    const leftArr = arr;
    const rightArr = arr.splice(arr.length / 2, arr.length);
    console.log(leftArr);
    console.log(rightArr);
    let curr;
    for (let i = leftArr.length - 1; i > 0; i--) {
      const element = leftArr[i];
      if (!this.root) {
        this.root = new Node(element, true);
        curr = this.root;
      } else {
        curr.left = new Node(element);
        let left = curr.left;
        left.right = curr;
        curr = curr.left;
        left = left.left;
      }
    }
    curr = this.root;
    for (let i = 0; i < rightArr.length; i++) {
      const element = rightArr[i];
      console.log("test " + rightArr[i]);
      if (!this.root) this.root = new Node(element, true);
      else {
        curr.right = new Node(element);
        let right = curr.right;
        right.left = curr;
        curr = curr.right;
        right = right.right;
      }
    }
    return this.root;
  }
}
export class Node {
  constructor(data, bool) {
    this.isRoot = bool ?? false;
    this.left = null;
    this.right = null;
    this.data = data;
  }
}
