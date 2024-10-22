export class Tree {
  constructor() {
    this.root = null;
  }
  buildTree(arr) {}
}
export class Node {
  constructor(data, bool) {
    this.isRoot = bool ?? false;
    this.left = null;
    this.right = null;
    this.data = data;
  }
}
