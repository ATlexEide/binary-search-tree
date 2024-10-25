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
  insert(value, node = this.root) {
    const newNode = new Node(value);
    if (newNode.data === node.data) return;
    if (newNode.data < node.data && !node.left) {
      node.left = newNode;
      return;
    } else if (newNode.data < node.data) {
      this.insert(value, node.left);
    }
    if (newNode.data > node.data && !node.right) {
      node.right = newNode;
      return;
    } else if (newNode.data > node.data) {
      this.insert(value, node.right);
    }
  }
  delete(value, node = this.root, parent = new Node(), left) {
    const side = left ? "left" : "right";
    const newNode = typeof value === "object" ? value : new Node(value);
    // BUG: I think this messes up the links on the assigned node, need to sketch out logic later
    if (side === "left" && newNode.data === node.data) {
      parent[side] = node.right;
      parent[side].left = node.left;
    }
    if (side === "right" && newNode.data === node.data) {
      parent[side] = node.left;
    }

    if (
      (newNode.data < node.data && !node.left) ||
      (newNode.data > node.data && !node.right)
    ) {
      return;
    }
    if (newNode.data < node.data) {
      this.delete(newNode, node.left, node, true);
    } else if (newNode.data > node.data) {
      this.delete(newNode, node.right, node, false);
    }
  }
}

export class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}
