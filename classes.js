export class Tree {
  constructor() {
    this.root = null;
  }
  // checkHigher(node, nodeToCompare) {
  //   if (node.data < nodeToCompare.data) {
  //     if (!node.right) {
  //       node.right = nodeToCompare;
  //       nodeToCompare.parent = node;
  //       return;
  //     } else {
  //       this.checkHigher(node.right, nodeToCompare);
  //     }
  //   }
  //   this.checkLower(node, nodeToCompare);
  // }
  // checkLower(node, nodeToCompare) {
  //   if (node.data > nodeToCompare.data) {
  //     if (!node.left) {
  //       node.left = nodeToCompare;
  //       nodeToCompare.parent = node;
  //       return;
  //     } else {
  //       this.checkLower(node.left, nodeToCompare);
  //     }
  //   }
  // }
  buildTree(arr, start = 0, end = arr.length - 1) {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    const root = new Node(arr[mid]);
    if (!this.root) {
      this.root = root;
    }
    root.left = this.buildTree(arr, start, mid - 1);
    root.right = this.buildTree(arr, mid + 1, end);
    return root;
    // arr.forEach((element) => {
    //   if (!this.root) {
    //     this.root = new Node(element, null, true);
    //     return;
    //   }
    //   const newNode = new Node(element);
    //   this.checkHigher(this.root, newNode);
    // });
  }
}
export class Node {
  constructor(data, parent) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}
