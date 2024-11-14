import { Tree } from "./classes.js";
const arr = [
  5, 5, 5, 5, 5, 5, 5, 6, 11, 65, 22, 54, 545, 54, 54, 22, 22, 22, 22, 88, 23,
  66, 35, 55, 767, 2, 11, 11, 11, 56, 33, 54,
];
// const arr = [5, 5, 56, 57, 5, 5];
const test = new Tree(arr);
test.buildTree();
// test.height(5);
test.levelOrder();
// test.insert(77);
console.log(test.size);
