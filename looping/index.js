// for
for (let i = 0; i < 5; i++) {
  console.log("For ke-" + i);
}
// Output:
// Iterasi ke-0
// Iterasi ke-1
// Iterasi ke-2
// Iterasi ke-3
// Iterasi ke-4

// while
let i = 0;

while (i < 5) {
  console.log("While ke-" + i);
  i++;
}
// Output:
// Iterasi ke-0
// Iterasi ke-1
// Iterasi ke-2
// Iterasi ke-3
// Iterasi ke-4

// do while
let k = 0;

do {
  console.log("do while ke-" + k);
  k++;
} while (k < 5);
// Output:
// Iterasi ke-0
// Iterasi ke-1
// Iterasi ke-2
// Iterasi ke-3
// Iterasi ke-4

// for of
const array = [1, 2, 3, 4, 5];

for (const num of array) {
  console.log(num);
}
// Output:
// 1
// 2
// 3
// 4
// 5

// for in
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

for (const key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// firstName: John
// lastName: Doe
// age: 30

// break
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
// Output:
// 0
// 1
// 2
// 3
// 4

//   continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
// Output:
// 0
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9

//   nested loop
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log("i = " + i + ", j = " + j);
  }
}
// Output:
// i = 0, j = 0
// i = 0, j = 1
// i = 0, j = 2
// i = 1, j = 0
// i = 1, j = 1
// i = 1, j = 2
// i = 2, j = 0
// i = 2, j = 1
// i = 2, j = 2

//   looping array
const array1 = [1, 2, 3, 4, 5];

// Menggunakan for loop
for (let i = 0; i < array1.length; i++) {
  console.log("dengan for loop", array1[i]);
}

// Menggunakan for...of loop
for (const num of array1) {
  console.log("dengan fo of", num);
}

// Menggunakan forEach method
array1.forEach((num) => console.log("dengan for each", num));

// looping object for loop

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

for (const key in person1) {
  console.log(`${key}: ${person1[key]}`);
}

