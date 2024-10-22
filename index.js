import { Tree } from "./classes.js";
import { Node } from "./classes.js";
const test = new Tree();
const node = new Node();
const testArr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

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
prettyPrint(test.root);
