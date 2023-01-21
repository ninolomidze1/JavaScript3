// problem 1
// შექმენით ფუნქცია რომელიც დააბრუნებს რიცხვი კენტია თუ ლუწი
let number = 2;
if(number % 2 == 0) {
  console.log("number is even.");
}
else {
  console.log("number is odd.");
}

// problem2
// შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება საკუთარ სახელს და შემდეგ დააბრუნებს მას.
//კონსოლში გამოიტანეთ რა შეიყვანა მომხმარებელმა
// (მომხმარებლისგან ინფორმაციის მისაღებად გამოიყენეთ prompt() ფუნქცია,)
// (კონსოლში დასაბეჭდათ გამოიყენეთ console.log() ფუნქცია )

//let name = prompt("Enter your name", "");
//console.log(name); --> ამ კოდის დაწერის დროსაც გამომივიდა, მაგრამ არვიცი რამდენადაა სწორი. 

let value;

while (true){
  value = prompt("enter your name", "");
  if(value) break;
}
console.log("your name is: " + value );


// problem 3
// მომხმარებელს მოთხოვეთ რომ შეიყვანოს რიცხვი, თუ კენტ რიცხვს შეიყვანს კონსოლში დაბეჭდეთ
// რომ მომხმარებელმა შეიყვანა კენტი რიცხვი თუ ლუწს შეიყვანს მაშინ შესაბამისად კონსოლში დაბეჭდეთ
// რომ მომხარებელმა შეიყვანა ლუწი რიცხვი.
// (მომხმარებლისგან ინფორმაციის მისაღებად გამოიყენეთ prompt() ფუნქცია,)
// (კონსოლში დასაბეჭდათ გამოიყენეთ console.log() ფუნქცია )

const num = prompt("enter a number: ");
if(num % 2 == 0) {
  console.log("number is Even.");
}
else {
  console.log("number is Odd.");
}

// problem 4
// მომხმარებელს მოთხოვეთ რომ შეიყვანოს მისთვის საყვარელი ხილი
// ვაშლის შემთხვევაში კონსოლში დაბეჭდეთ რომ 'ვაშლი კარგი არჩევანია ! '
// მსხლის შემთხვევაში კონსოლში დაბეჭდეთ რომ 'მსხალი სჯობს! '
// ყურძნის შემთხვევაში კონსოლში დაბეჭდეთ რომ 'ყურძენი საუკეთესოა! '
// სურვილის შემთხვევაში დაამატეთ რამდენი ვარიანტიც გინდათ
// სხვა შემთხვევებში (თუ ისეთ ხილს შეიყვანს მომხმარებელი რომელიც ჩვენ არ გვიწერია ან ზოგადად ხილს არ შეიყვანს)
// კონსოლში დაბეჭდეთ "მოცემული მნიშვნელობა არ არის ჩვენს სიაში."
// დავალება შეასრულეთ Switch გამოყენებით

let animal = prompt("Enter your favorite fruit");
switch (animal) {
  case "Apple":
    console.log("Apple is a good choice.");
    break;
  case "pear":
    console.log("Pear is better.");
    break;
    case "Grape":
    console.log("Grape is the best.");
    break;
  default:
    console.log("none of them");
    break;
}


// problem 5
// კონსოლში დაბეჭდეთ 1-100 მდე ყველა ლუწი რიცხვი

for (let i = 1; i < 100; i++)
{
  if(i % 2 === 0){
    console.log(i);
  }
}

// problem6
// მომხმარებელს მოთხოვეთ რომ შეიყვანოს რიცხვები მანამ სანამ არ შეიყვანს უარყოფით რიცხვს

let enterNumber;
do {
    enterNumber = prompt("Enter number: ");
} while(enterNumber > 0);

// problems 7
// let numbers = [10,12,42,55,100,90,32,55];
// let result=[];
// numbers მასივში იპოვეთ რიცხვები რომელიც იყოფა 5-ზე ლუპის საშუალებით,
// შეინახეთ result მასივში.

 let numbers = [10, 12, 42, 55, 100, 90, 32, 55];
 let result=[];
 for(let number of numbers){
  if(number % 5 === 0){
    result.unshift(number);
  }
 }
 console.log(result);



// problem 8
// let names = ["Gio","Luka","Nika","Ani","Eka","Nini","Sopo"];
// კონსოლში დაბეჭდეთ names მასივში არსებული ყველა ელემენტი, გამოტოვეთ მხოლოდ ნიკა.
// ლუპის საშუალებით.
let names = ["Gio","Luka","Nika","Ani","Eka","Nini","Sopo"];
for (let name of names) {
  if (name === "Nika") {
  continue;
}
console.log(name);
}


//problem9

//შექმენით ფუნქცია რომელიც პარამეტრად მიიღებს მასივს რომელშიც იქნება მინიმუმ 5 user-ის ობიექტი
// user ობიექტი უნდა ქონდეს შემდეგი properties სახელი,გვარი,სქესი,ასაკი.
// თუ ფუნქციაში გადაცემულ პარამეტრში არ იქნებ მინიმუმ 5 მომხმარებელი დააბრუნეთ წინადადება: "მასივში აუცილებლად უნდა იყოს მინიმუმ 5 მომხმარებელი"
// თუ მინიმუმ 5 მომხმარებელი იქნება დააბრუნეთ თითოეული მათგანის სრული სახელი, გვარი და ასაკი.
// (array.length გამოიყენეთ იმისთვის რომ გაიგოთ არის თუ არა მასივში შესაბამისი რაოდენობის ელემენტი)

function displayUsers(users) {
  if (users.length < 5) {
      return "There should be at least 5 users in massive";
  }

  for (let i = 0; i < users.length; i++) {
      console.log(`Name: ${users[i].name}`);
      console.log(`Last Name: ${users[i].lastName}`);
      console.log(`Sex: ${users[i].sex}`); 
      console.log(`Age: ${users[i].age}`);
  }
}
let users = [
  {name: "Nika", lastName: "Lomidze", sex: "Male", age: 16},
  {name: "Nino", lastName: "Lomidze", sex: "Female", age: 20},
  {name: "Giorgi", lastName: "leliashvili", sex: "Male", age: 20},
  {name: "Sandro", lastName: "Akhmeteli", sex: "male", age: 40},
  {name: "Lika", lastName: "Chaduneli", sex: "Female", age: 45}
];

console.log(displayUsers(users));



//problem10
// დაწერეთ ფუნქცია რომელიც დააბრუნებს გადაცემული მომხმარებლის ობიექტი ადმინი არის თუ არა

//const user = {
//isAdmin: true,
//};
//const user1 = {
// isAdmin: false,
//};
 
 function checkAdmin(user) {
  if (user.isAdmin) {
      return user + "is admin";
  } else {
      return user + "is not admin" ;
  }
}

let user = { isAdmin: true };
let user1 = { isAdmin: false };

console.log(checkAdmin(user));
console.log(checkAdmin(user1));




// problem11

// დაწერეთ ფუნქცია რომელიც იპოვის და დააბრუნებს მასივში ყველაზე დიდ რიცხვს.

function findBiggestNumber(numbers) {
  let biggestNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > biggestNumber) {
      biggestNumber = numbers[i];
    }
  }
  return biggestNumber;
}
const numbers1 = [ 1, 4, 2, 14, 90, 13, 2, 0, 78, 199, 12, 313, 315, 789, 31, 12, 1, 1, 3467, 90,  70, 34, 43, 189,];

console.log(findBiggestNumber(numbers1));


// problem12

// დაწერეთ ფუნქცია რომელიც იპოვის და დააბრუნებს მასივში ყველაზე პატარა რიცხვს.

function findSmallestNumber(numbers) {
  let smallestNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallestNumber) {
      smallestNumber = numbers[i];
    }
  }
  return smallestNumber;
}

const numbers2 = [
    1, 4, 2, 14, 90, 13, 2, 0, 78, 199, 12, 313, 315, 789, 31, 12, 1, 1, 3467, 90,
    70, 34, 43, 189,
  ];

  console.log(findSmallestNumber(numbers2));


// Have fun :) :)
