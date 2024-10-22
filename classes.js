export class Tree {
  constructor() {
    this.root = null;
  }
  checkHigher(node, nodeToCompare) {
    if (node.data < nodeToCompare.data) {
      if (!node.right) {
        node.right = nodeToCompare;
        nodeToCompare.parent = node;
        return;
      } else {
        this.checkHigher(node.right, nodeToCompare);
      }
    }
    this.checkLower(node, nodeToCompare);
  }
  checkLower(node, nodeToCompare) {
    if (node.data > nodeToCompare.data) {
      if (!node.left) {
        node.left = nodeToCompare;
        nodeToCompare.parent = node;
        return;
      } else {
        this.checkLower(node.left, nodeToCompare);
      }
    }
  }
  buildTree(arr) {
    arr.forEach((element) => {
      if (!this.root) {
        this.root = new Node(element, null, true);
        return;
      }
      const newNode = new Node(element);
      this.checkHigher(this.root, newNode);
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
