export class Tree {
  constructor() {
    this.root = null;
  }
  buildTree(arr) {
    if (!arr) throw "No argument";
    const leftArr = arr;
    const rightArr = arr.splice(arr.length / 2, arr.length);
    console.log(leftArr);
    console.log(rightArr);
    for (let i = leftArr.length - 1; i > 0; i--) {
      const element = leftArr[i];
      if (!this.root) this.root = new Node(element, true);
      else {
        let curr = this.root;
        curr.left = new Node(element);
        let left = curr.left;
        left.right = curr;
        curr = curr.left;
        left = left.left;
      }
    }
    console.table(this);
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
