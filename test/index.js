console.log("hallo");

const a = 10;
const b = 5;
const result = a + b;
console.log("Result", result);

let inputNumber = 20;
let resultt;

resultt = 18 + inputNumber;

resultt = resultt - 5;
resultt = resultt * 2;
resultt = resultt / 3;
console.log('result ',resultt);
console.log('nilai awal ',inputNumber);

function penjumlahan(a, b) {
  const hasilTambah = a + b;
  const hasilkurang = a - b;
  const hasilkali = a * b;
  const hasilBagi = a / b;
  const hasilModulus = a % b;
  console.log("hasil dari tambah ", hasilTambah);
  console.log("hasil dari kurang ", hasilkurang);
  console.log("hasil dari kali ", hasilkali);
  console.log("hasil dari bagi ", hasilBagi);
  console.log("hasil dari modulus ", hasilModulus);
}

penjumlahan(70, 20);
console.log('break');
penjumlahan(100, 20);

function add(c, d) {
    const hasilTambah = c + d;
    return hasilTambah;
}

console.log('result add function',add(10, 20));

function subtract(num1, num2) {
    return num1 - num2;
}

function stringify(number) {
    return "Result: " + number
}

let resultSubtract = subtract(12, 10)
console.log('result subtract',resultSubtract);
let resultstringify = stringify(10)
console.log(resultstringify);

function say (userName, message) {
    console.log(userName, message);
}

say('John', 'Stephan');

function say2 (userName, message = 'Hello') {
    console.log(userName, message);
} 
say2('John')

function createGreeting (userName, message = 'Hello') {
    return "hi, i'm " + userName + '. ' + message;
}

console.log(createGreeting('John'));

const greeting = createGreeting('Max')
console.log(greeting);

const greeting2 = createGreeting('Manuel', "Hello, what's up?");
console.log(greeting2);