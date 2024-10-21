import { Tree } from "./classes.js";
import { Node } from "./classes.js";
const test = new Tree();
const node = new Node();
const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

test.buildTree(testArr);

////////////////////////////////////////
/////// FOR TESTING
////////////////////////////////////////
// const prettyPrint = (node, prefix = "", isLeft = true) => {
//   if (node === null) {
//     return;
//   }
//   if (node.right !== null) {
//     prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
//   }
//   console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
//   if (node.left !== null) {
//     prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
//   }
// };
// prettyPrint(test.root);
////////////////////////////////////////
////////////////////////////////////////
