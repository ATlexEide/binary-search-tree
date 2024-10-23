export class Tree {
  constructor() {
    this.root = null;
  }

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
  }
}
export class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}
