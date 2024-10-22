export class Tree {
  constructor() {
    this.root = null;
  }
  buildTree(arr) {
    let currNode;
    arr.forEach((element) => {
      if (!this.root) {
        this.root = new Node(element, null, true);
        currNode = this.root;
        return;
      }
      const newNode = new Node(element, currNode);
      // Right
      if (currNode.data < element) {
        currNode.right = newNode;
        console.log(currNode);
        currNode = currNode.right;
      }
    });
  }
}
export class Node {
  constructor(data, parent, bool) {
    this.isRoot = bool ?? false;
    this.parent = parent ?? null;
    this.left = null;
    this.right = null;
    this.data = data;
  }
}
