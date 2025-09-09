function firstElement<T>(arr: T[]): T {
  return arr[0];
}

const numbers = [1, 2, 3];
const firstNum = firstElement(numbers); // Type: number

const words = ["hello", "world"];
const firstWord = firstElement(words); // Type: string

console.log(typeof firstNum);
console.log(typeof firstWord);
