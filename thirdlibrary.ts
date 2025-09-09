

import _ from "lodash";



const numbers: number[] = [1, 2, 3, 4, 5, 6];

const chunked: number[][] = _.chunk(numbers, 2);

const shuffled: number[] = _.shuffle(numbers);

const numsWithDupes: number[] = [1, 2, 2, 3, 4, 4];
const unique: number[] = _.uniq(numsWithDupes);

const nested: number[][] = [[1, 2], [3, 4], [5]];
const flat: number[] = _.flatten(nested);

interface User {
  id: number;
  name: string;
  role?: string;
}

const user: User = { id: 1, name: "Antony" };

const role: string | undefined = _.get(user, "role", "Guest");

_.set(user, "role", "Admin");

const clonedUser: User = _.cloneDeep(user);
clonedUser.name = "Changed";

const objA = { a: 1, b: { c: 2 } };
const objB = { b: { d: 3 } };
const merged = _.merge({}, objA, objB);

const str: string = "   typescript with lodash   ";

const trimmed: string = _.trim(str);

const capitalized: string = _.capitalize(trimmed);

const kebab: string = _.kebabCase(trimmed);

const repeated: string = _.repeat("TS", 3);

const users: User[] = [
  { id: 1, name: "Alice", role: "Admin" },
  { id: 2, name: "Bob", role: "User" },
  { id: 3, name: "Charlie", role: "Admin" },
];

const grouped = _.groupBy(users, "role");

const names = _.map(users, "name");

const admins = _.filter(users, { role: "Admin" });

const search = _.debounce((query: string) => {
  console.log("Searching for:", query);
}, 300);

search("Hello TS");

const logScroll = _.throttle(() => {
  console.log("Scrolling...");
}, 1000);

logScroll();

const maxNum: number | undefined = _.max(numbers);
const sumNum: number = _.sum(numbers);
const randomNum: number = _.random(1, 100);

console.log("Chunked:", chunked);
console.log("Shuffled:", shuffled);
console.log("Unique:", unique);
console.log("Flat:", flat);
console.log("User Role:", role);
console.log("Cloned User:", clonedUser);
console.log("Merged Object:", merged);
console.log("Trimmed:", trimmed);
console.log("Capitalized:", capitalized);
console.log("Kebab Case:", kebab);
console.log("Repeated:", repeated);
console.log("Grouped Users:", grouped);
console.log("Names:", names);
console.log("Admins:", admins);
console.log("Max:", maxNum, "Sum:", sumNum, "Random:", randomNum);
