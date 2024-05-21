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
  console.log("break");
  penjumlahan(100, 20);
  
  function add(c, d) {
    const hasilTambah = c + d;
    return hasilTambah;
  }
  
  console.log("result add function", add(10, 20));
  
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  function stringify(number) {
    return "Result: " + number;
  }
  
  let resultSubtract = subtract(12, 10);
  console.log("result subtract", resultSubtract);
  let resultstringify = stringify(10);
  console.log(resultstringify);
  
  function say(userName, message) {
    console.log(userName, message);
  }
  
  say("John", "Stephan");
  
  function say2(userName, message = "Hello") {
    console.log(userName, message);
  }
  say2("John");
  
  function createGreeting(userName, message = "Hello") {
    return "hi, i'm " + userName + ". " + message;
  }
  
  console.log(createGreeting("John"));
  
  const greeting = createGreeting("Max");
  console.log(greeting);
  
  const greeting2 = createGreeting("Manuel", "Hello, what's up?");
  console.log(greeting2);
  
  function combine(a, b, c) {
    return (a * b) / c;
  }
  let resultCombine = combine(10, 5, 2);
  console.log("result combine", resultCombine);
  
  // arrow functions
  const combine1 = (a, b, c) => {
    return (a * b) / c;
  };
  let resultCombine1 = combine1(10, 5, 2);
  console.log("arrow function result", resultCombine1);
  
  // another arrow function
  const combine2 = (a, b, c) => (a * b) / c;
  let resultCombine2 = combine2(10, 5, 2);
  console.log("arrow function result", resultCombine2);
  
  // arrow functions triangle areas
  const triangleArea = (base, height) => {
    return (base * height) / 2;
  };
  let resultTriangleArea = triangleArea(10, 5);
  console.log("triangle area result", resultTriangleArea);
  
  // another arrow function triangle
  const triangleArea2 = (base, height) => (base * height) / 2;
  let resultTriangleArea2 = triangleArea2(10, 5);
  console.log("triangle area result", resultTriangleArea2);
  
  // function Temperature Conversion from Celsius to Fahrenheit
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
  let resultCelsiusToFahrenheit = celsiusToFahrenheit(10);
  console.log("celsius to fahrenheit result", resultCelsiusToFahrenheit);
  
  // another function Temperature Conversion from Celsius to Fahrenheit
  const celsiusToFahrenheit2 = (celsius) => (celsius * 9) / 5 + 32;
  let resultCelsiusToFahrenheit2 = celsiusToFahrenheit2(10);
  console.log("celsius to fahrenheit result", resultCelsiusToFahrenheit2);
  
  // function Calculating the Perimeter of a Rectangle
  const calculatePerimeter = (length, width) => 2 * (width + length);
  let resultCalculatePerimeter = calculatePerimeter(10, 5);
  console.log("calculate perimeter result", resultCalculatePerimeter);
  
  // arrow function with object
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet: function () {
      console.log(
        "Hi, my name is " +
          person.firstName +
          " " +
          person.lastName +
          " " +
          person.age
      );
    },
  };
  person.greet();
  
  // another arrow function with object
  const person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet: function () {
      const arrowGreet = () => {
        console.log(
          "Hi, my name is " +
            this.firstName +
            " " +
            this.lastName +
            " " +
            this.age
        );
      };
      arrowGreet();
    },
  };
  person2.greet();
  
  // or
  const user = {
    name: "Luis",
    age: 24,
    greet() {
      console.log("hello");
      console.log(this.age);
    },
  };
  console.log(user.name);
  user.greet();
  
  // using class methods
  class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      console.log("hello");
    }
  }
  const user1 = new User("manuel", 20);
  console.log(user1);
  user1.greet();
  
//   time out
  setTimeout(function () {
    console.log("time out");
  }, 2000);
  
  // another time out
  setTimeout(() => {
    console.log("time out again"); 
  }, 3000);