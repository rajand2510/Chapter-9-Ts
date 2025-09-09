
let fullName: any = "Antony Striker";
let assertedName = fullName as string; // Type assertion
console.log("Asserted Name:", assertedName.toLowerCase());

// 2. Number
let age = 25; // Type inference: number
console.log("Age + 5:", age + 5);

let someValue: unknown = 42;
let assertedAge = someValue as number; // Type assertion
console.log("Asserted Age + 10:", assertedAge + 10);

// 3. Boolean
let isStudent = true; // Type inference: boolean
console.log("Is Student:", !isStudent);

let str: string = "true";
let boolValue = str as unknown as boolean; // ✅ works, but unsafe

console.log("Asserted Status:", boolValue);

// 4. Array
let numbers = [1, 2, 3, 4]; // Type inference: number[]
console.log("Numbers doubled:", numbers.map(n => n * 2));

let someArray: any = [5, 6, 7];
let assertedArray = someArray as number[]; // Type assertion
console.log("Asserted Array:", assertedArray);

// 5. Object
let person = { name: "Antony", age: 25 }; // Type inference: { name: string; age: number }
console.log("Person Name:", person.name);

let obj: any = { name: "Striker", age: 30 };
let assertedPerson = obj as { name: string; age: number }; // Type assertion
console.log("Asserted Person Age:", assertedPerson.age);

// 6. Any
let randomValue: any = "Hello"; // can be anything
randomValue = 123;
randomValue = true;
console.log("Random Value:", randomValue);

// 7. Unknown
let unknownValue: unknown = "Some string";
// Must assert type before using
let stringValue = unknownValue as string;
console.log("Unknown as string length:", stringValue.length);
