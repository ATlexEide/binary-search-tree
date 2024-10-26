import { Tree } from "./classes.js";
// const arr = [1, 6345, 7, 4, 23, 8, 9, 3, 6, 5, 67, 324];
const arr = [6, 11, 65, 22, 88, 23, 66, 35, 55, 767, 2, 56, 33, 54];

const test = new Tree(arr);
test.buildTree();
test.delete(65);
test.delete(56);
test.insert(15);
test.delete(22);
test.delete(22);
test.insert(20);
test.find(555);
