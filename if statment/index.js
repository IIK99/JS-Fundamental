// if standard

let age = 20;

if (age >= 18) {
  console.log("You are an adult"); // this output
} else {
  console.log("You are not an adult");
}

// if else

if (age >= 18) {
  console.log("You are an adult"); // this output
} else if (age >= 13) {
  console.log("You are a teenager");
} else {
  console.log("You are a child");
}

// if nested
const x = 8;
const y = 3;

if (x > 5) {
  if (y > 5) {
    console.log("x dan y lebih besar dari 5");
  } else {
    console.log("x lebih besar dari 5, tapi y tidak");
  }
} else {
  console.log("x tidak lebih besar dari 5");
}
// Output: x lebih besar dari 5, tapi y tidak

// if ternary
const z = 10;
const result = z > 5 ? "z lebih besar dari 5" : "z tidak lebih besar dari 5";
console.log(result); // Output: z lebih besar dari 5

// switch
const day = "Sunday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  default:
    console.log("Today is not a weekday");
}

// switch ternary
const day2 = "Monday";

const result2 = day2 === "Monday" ? "Today is Monday" : day2;
console.log(result2); // Output: Today is Monday

// if function returns
function checkNumber(num) {
  if (num > 0) {
    return "Positif";
  } else if (num < 0) {
    return "Negatif";
  } else {
    return "Nol";
  }
}

console.log(checkNumber(5)); // Output: Positif
console.log(checkNumber(-3)); // Output: Negatif
console.log(checkNumber(0)); // Output: Nol

// if function returns ternary
function checkNumber2(num) {
  return num > 0 ? "Positif" : num < 0 ? "Negatif" : "Nol";
}

console.log(checkNumber2(5)); // Output: Positif

// if logic and &&
const i = 10;
const k = 5;

if (i > 5 && k < 10) {
  console.log("x lebih besar dari 5 dan y lebih kecil dari 10");
}
// Output: x lebih besar dari 5 dan y lebih kecil dari 10

// if or ||
const a = 10;
const b = 15;

if (a > 5 || b < 10) {
  console.log("x lebih besar dari 5 atau y lebih kecil dari 10");
}
// Output: x lebih besar dari 5 atau y lebih kecil dari 10

// if not !
const isRaining = false;

if (!isRaining) {
  console.log("Tidak hujan, kita bisa pergi keluar.");
}
// Output: Tidak hujan, kita bisa pergi keluar.
