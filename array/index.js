// concat arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);
console.log("concat array", array3); // Output: [1, 2, 3, 4, 5, 6]

// every array
const everyArray = [1, 2, 3, 4, 5];
const allPositive = everyArray.every((num) => num > 0);
console.log("every array", allPositive); // Output: true

// filter array
const filterArray = [1, 2, 3, 4, 5];
const evenNumbers = filterArray.filter((num) => num % 2 === 0);
console.log("filter array", evenNumbers); // Output: [2, 4]

// find array
const findArray = [1, 2, 3, 4, 5];
const found = findArray.find((num) => num > 3);
console.log("find array", found); // Output: 4

// find index array
const findIndexArray = [1, 2, 3, 4, 5];
const index = findIndexArray.findIndex((num) => num > 3);
console.log("findIndex array", index); // Output: 3

// index array
const indexArray = [1, 2, 3, 2];
const index1 = indexArray.indexOf(2);
console.log("index array", index1); // Output: 1

// indexOf array
const indexOfArray = [1, 2, 3, 2];
const index2 = indexOfArray.indexOf(2);
console.log("indexOf array", index2); // Output: 1

// for each array
const forEachArray = [1, 2, 3];
forEachArray.forEach((num) => console.log("forEach array", num));
// Output: 1 2 3 (di baris yang terpisah)

// includes array
const includesArray = [1, 2, 3];
const hasTwo = includesArray.includes(2);
console.log("include array", hasTwo); // Output: true

// join array
const joinArray = ["a", "b", "c"];
const str = joinArray.join("-");
console.log("join array", str); // Output: "a-b-c"

// map array
const mapArray = [1, 2, 3];
const squared = mapArray.map((num) => num * num);
console.log("map array", squared); // Output: [1, 4, 9]

// pop array
const popArray = [1, 2, 3];
const last = popArray.pop();
console.log("before pop is array 1 2 3", popArray); // Output: [1, 2]
console.log("last number", last); // Output: 3

// push array
const pushArray = [1, 2, 3];
const newLength = pushArray.push(4, 5);
console.log(pushArray); // Output: [1, 2, 3, 4, 5]
console.log(newLength); // Output: 5

// reduce array
const reduceArray = [1, 2, 3, 4];
const sum = reduceArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // Output: 10

// reverse array
const reverseArray = [1, 2, 3];
reverseArray.reverse();
console.log(reverseArray); // Output: [3, 2, 1]

// shift array
const shiftArray = [1, 2, 3];
const first = shiftArray.shift();
console.log(first); // Output: 1
console.log(shiftArray); // Output: [2, 3]

// slice array
const sliceArray = [1, 2, 3, 4, 5];
const part = sliceArray.slice(1, 3);
console.log(part); // Output: [2, 3]

// some arrays
const someArray = [1, 2, 3, 4, 5];
const hasEven = someArray.some((num) => num % 2 === 0);
console.log(hasEven); // Output: true

// sort arrays
const sortArray = [5, 3, 8, 1];
sortArray.sort((a, b) => a - b);
console.log(sortArray); // Output: [1, 3, 5, 8]

// splice array
const spliceArray = [1, 2, 3, 4, 5];
const removed = spliceArray.splice(2, 2, 6, 7); // Hapus 2 elemen mulai dari indeks 2, tambahkan 6 dan 7
console.log(spliceArray); // Output: [1, 2, 6, 7, 5]
console.log(removed); // Output: [3, 4]

// toString array
const toStringArray = [1, 2, 3];
const string = toStringArray.toString();
console.log(string); // Output: "1,2,3"

// unshift array
const unshiftArray = [1, 2, 3];
const newLength1 = unshiftArray.unshift(0);
console.log(newLength); // Output: 4
console.log(unshiftArray); // Output: [0, 1, 2, 3]

// at array
const array = [1, 2, 3, 4, 5];
console.log(array.at(2)); // Output: 3
console.log(array.at(-1)); // Output: 5

function transformToObjects(numbers) {
  return numbers.map((number) => {
    return {
      value: number,
    };
  });
}

const inputArray = [1, 2, 3, 4, 5];
const outputArray = transformToObjects(inputArray);
console.log(outputArray);
