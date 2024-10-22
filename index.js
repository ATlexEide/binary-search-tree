import { Tree } from "./classes.js";
import { Node } from "./classes.js";
const test = new Tree();
const node = new Node();
const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

test.buildTree(testArr);

////////////////////////////////////////
/////// FOR TESTING
////////////////////////////////////////
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (!node) {
    return;
  }
  if (node.right) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    return;
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    return;
  }
};
console.log();
prettyPrint(test.root.left.left.left.left);
////////////////////////////////////////
////////////////////////////////////////

console.log(test.root.left.left.left.left.left);
// console.log(test.root.left.left.left.data);
// console.log(test.root.left.left.data);
// console.log(test.root.left.data);
// console.log(test.root.data);
// console.log(test.root.right.data);
// console.log(test.root.right.right.data);
// console.log(test.root.right.right.right.data);
// console.log(test.root.right.right.right.right.data);
// console.log(test.root.right.right.right.right.right.data);
