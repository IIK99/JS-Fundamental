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
console.log(resultt);
console.log(inputNumber);

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
