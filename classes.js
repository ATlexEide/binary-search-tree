import { sort } from "./mergeSort.js";
export class Tree {
  constructor(arr) {
    this.root = null;
    this.array = sort(arr);
    this.size = 0;
    let index = 0;
    while (index < this.array.length) {
      if (this.array[index] === this.array[index + 1]) {
        this.array.splice(index, 1);
        continue;
      }
      index++;
    }
  }
  buildTree(arr = this.array, start = 0, end = arr.length - 1) {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    const root = new Node(arr[mid]);
    if (!this.root) {
      this.root = root;
    }
    this.size++;
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
      this.size++;
      return;
    } else if (newNode.data < node.data) {
      this.insert(value, node.left);
    }
    if (newNode.data > node.data && !node.right) {
      node.right = newNode;
      this.size++;
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
      this.size--;
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
      this.size--;
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
  find(value, node = this.root) {
    if (!node) {
      console.error(`No node with value: "${value}"`);
      return;
    }
    if (node.data === value) {
      // console.log(node);
      return node;
    }
    if (value < node.data) {
      return this.find(value, node.left);
    }
    if (value > node.data) {
      return this.find(value, node.right);
    }
  }
  height(value) {
    const node = this.find(value);
    let tmp = node.left;
    let leftHeight = 0;
    if (tmp) {
      leftHeight = 1;
      while (tmp.left) {
        tmp = tmp.left;
        leftHeight++;
      }
    }
    tmp = node.right;
    let rightHeight = 0;
    if (tmp) {
      rightHeight = 1;
      while (tmp.right) {
        tmp = tmp.right;
        rightHeight++;
      }
    }
    const height = leftHeight > rightHeight ? leftHeight : rightHeight;
    console.log(height);
    return height;
  }
  depth(value, node = this.root, _depth = 0) {
    let depth = _depth;
    if (!node) {
      console.error(`No node with value: "${value}"`);
      return;
    }
    if (node.data === value) {
      // console.log(node);
      return depth;
    }
    if (value < node.data) {
      depth++;
      return this.depth(value, node.left, depth);
    }
    if (value > node.data) {
      depth++;
      return this.depth(value, node.right, depth);
    }
    return depth;
  }
  levelOrder(_queue = [this.root], index = 0) {
    index = index;
    let queue = _queue;
    let left;
    let right;
    if (index < queue.length) {
      left = queue[index].left ?? null;
      right = queue[index].right ?? null;
      if (!left && !right) {
        return this.levelOrder(queue, ++index);
      }
      if (left) queue.push(left);
      if (right) queue.push(right);
      return this.levelOrder(queue, ++index);
    } else {
      console.table(queue);
      return;
    }
    // TODO: Add Rest of the logic (what to do with the queue)
  }
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
