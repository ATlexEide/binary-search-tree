import { Tree } from "./classes.js";
const arr = [1, 6345, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 324];
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const test = new Tree(arr);
test.buildTree();
console.log(test.array);
console.log(test.root);
console.log(test.root.left);
console.log(test.root.right);
