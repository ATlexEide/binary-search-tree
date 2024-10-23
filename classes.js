import { sort } from "./mergeSort.js";
export class Tree {
  constructor(arr) {
    // FIXME: Add check to remove duplicates in array
    this.root = null;
    this.array = sort(arr);
  }

  buildTree(arr = this.array, start = 0, end = arr.length - 1) {
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
  insert(value) {
    const newNode = new Node(value);
    const node = this.root;
    if (newNode.data === node.data) return;
    if (newNode.data < node.data && newNode.data > node.left.data) {
      newNode.left = node.left;
      node.left = newNode;
    } else if (newNode.data > node.data && newNode.data < node.right.data) {
      newNode.right = node.right;
      node.right = newNode;
    }
  }
  delete(value) {}
}

export class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}
