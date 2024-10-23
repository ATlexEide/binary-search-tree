import { Tree } from "./classes.js";
import { Node } from "./classes.js";
const test = new Tree();
const node = new Node();
// const testArr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

test.buildTree(testArr);

console.log(test.root);
console.log(test.root.left);
console.log(test.root.right);
