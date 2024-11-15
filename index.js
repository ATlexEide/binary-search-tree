import { Tree } from "./classes.js";
const arr = [
  5, 5, 5, 5, 5, 5, 5, 6, 11, 65, 22, 54, 545, 54, 54, 22, 22, 22, 22, 88, 23,
  66, 35, 55, 767, 2, 11, 11, 11, 56, 33, 54,
];
const test = new Tree(arr);
test.buildTree();
test.levelOrder(logRight);
function logData(node) {
  console.log(node.data);
}
function logRight(node) {
  console.log(node.right);
}
