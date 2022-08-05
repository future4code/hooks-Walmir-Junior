import { listToDo } from "./list.js";

const toDo1 = process.argv[2];
const toDo2 = process.argv[3];
const toDo3 = process.argv[4];

listToDo.push(toDo1, toDo2, toDo3);

console.table(listToDo);