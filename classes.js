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
    console.clear();
    prettyPrint(this.root);
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
    console.clear();
    prettyPrint(this.root);
  }
  delete(value, node = this.root, parent = new Node(), left) {
    const side = left ? "left" : "right";
    const newNode = typeof value === "object" ? value : new Node(value);
    if (side === "left" && newNode.data === node.data) {
      const cached = node.left;
      parent[side] = node.right;
      if (node.right) {
        let tmp = node.right;
        while (tmp.left) {
          tmp = tmp.left;
        }
        tmp.left = cached;
      } else {
        parent.left = cached;
      }
    }
    if (side === "right" && newNode.data === node.data) {
      const cached = node.right;
      parent[side] = node.left;
      if (node.left) {
        let tmp = node.left;
        while (tmp.right) {
          tmp = tmp.right;
        }
        tmp.right = cached;
      } else {
        parent.right = cached;
      }
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
    console.clear();
    prettyPrint(this.root);
  }
  find(value, node = this.root) {}
}

export class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};
