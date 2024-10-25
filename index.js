import { Tree } from "./classes.js";
const arr = [1, 6345, 7, 4, 23, 8, 9, 3, 6, 5, 67, 324];
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const test = new Tree(arr);
test.buildTree();
// console.log(arr);
// console.log(test.array);
function preOrder(root) {
  if (root === null) return;
  console.log(root.data);
  preOrder(root.left);
  preOrder(root.right);
}

test.delete();

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
prettyPrint(test.root);
