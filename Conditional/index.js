// based on a condition we need to modify a variable
//

// let age = 10;
// if (age != 10) {
//   console.log("you can swim")

// }
// else if(age==10){
//   console.log("Are You Kidding")
// }

// else{

//   console.log("you cant swim")
// }
// loops
// let a = 1;

// for (let i = 0; i < 100; i++) {
//   console.log(a + i);

// }
// for (let f = 5; f < 100; f++) {
//   console.log(a + f);

// }
//

//  portion while

// let i = 2;
// while (i < 100) {
//   console.log(i);
//   i++;

// }
// practice set
// var f = "FARAZ";
// var a = 10;
// console.log(f + a);
// console.log(typeof (f + a));

// const dict = {
//   appreciate: "To Praise Someone",
//   vigilant: "To be Alert",
//   respect: "To Honour Someone",
//   honest: "To be Truthful",

// }
// console.log(dict.appreciate, dict.vigilant, dict.respect, dict.honest);

// let a = 10;
// let b = 20;

// console.log(a + b);
// console.log(a - b);
// console.log(a / b);
// console.log(a % b);
// console.log(a * b);
// console.log(a ** b);
// console.log("++a = ", ++a);
// console.log(--a);
// let a = 1;

// for (let i = 0; i < 2; i++) {
//         console.log(a + i);
//       }

// let assignment = 10;
// assignment += 15;
// console.log(assignment);
// console.log(assignment -= 15);
// console.log(assignment *= 15);
// console.log(assignment /= 15);

// comparison operators
// let faraz = 10;
// let adnan = 20;
// console.log(faraz == adnan);
// console.log(faraz != adnan);
// console.log(faraz > adnan);
// console.log(faraz < adnan);
// console.log(faraz >= adnan);
// console.log(faraz <= adnan);
// console.log(faraz === adnan);
// agr type change kr le to false ho jata hai matlb adnan = "20" to false ho jata hai
// console.log(faraz !== adnan);
// const prompt=require("prompt-sync");
// let a = prompt("Hey! what is your age?");
// a = Number.parseInt(a);

//

//                                        practice set chap 2

//                                         question 1

// let age = 15
// if(age>10 && age<20){
//     console.log("Your Age lies Between 10 And 20")
// }
// else{
//     console.log("Your age doesnt between 10 and 20")
// }
//                                         question 2

// let age = (15)
// switch (age){
//     case 12:
//     console.log("Your age is 12")
//     break
//     case 13:
//     console.log("Your age is 13")
//     break
//     case 14:
//     console.log("Your age is 14")
//     break
//     case 15:
//     console.log("Your age is 15")
//     break
//     default:
//         console.log("your are not special")

// }
//                                           question 3

// let num = 12
// if(num%2==0 && num%3==0){
//     console.log('the number is divisible by two and three')
// }
// else(
//     console.log('the number is not divisible by two and three')
// )

//                                       question no 4

// let num = 45
// if(num%2==0 || num%3==0){
//     console.log('the number is divisible by two and three')
// }
// else(
//     console.log('the number is not divisible by two and three')
// )

// question 5

// let age = 15
// let a = age>18?"you can drive":"you cannot drive"
// console.log(a)

//                                chap 3

//   .....................for loop.....................

// let factorial = 1;
// let n = 5
// for (let i = 0; i < n; i++) {
//     factorial *= (i +1);

// }
// console.log(
//     'factorial of first' + n + "natural number is" + factorial
// )

// let sum = 0;
// let n = 10;
// for (let i = 0; i < n; i++) {
//     sum += (i + 1);

// }
// console.log(
//     sum
// )

// let obj = {
//   faraz: 100,
//   adnan: 99,
//   siffat: 98,
//   ahmed: 90,
//   khan: 81
// };

// for (let a in obj) {
//   console.log("Marks of " + a + " are " + obj[a]);
//   console.log(); // Adds an empty line
// }
//  while loop
// let n = 100
// let i = 0;
// while(i<n) {
//   console.log(i)
//   i++

// }
// let n = 10
// let i = 11;
//  do{
//   console.log(i)
//   i++

// }while(i<n)

//  functions
//  function trick(x,y) {
//    return (x * y) / 2}
// let chemistry = 10;
// let physics = 20;
// let biology = 30;
// console.log("average of chemistry and physics is " + trick(chemistry,physics ))
//   console.log("average of chemistry and biology is " + trick(chemistry, biology))
//   console.log("average of biology and physics is " + trick(biology,physics))

//                                     Table of 10
//                                   ascending order
//                                     for loop
/*

for (let i = 10; i >= 1;i--) {
  console.log("10 x ",i, " = ",10*i);
}

for (let i = 1; i <= 10;i++) {
  console.log("10 x ",i, " = ",10*i);
}
//                                    chap 3 practice set 
//                                        question1 
let obj = {
  FARAZ: 100,
  ADNAN: 90,
  SIFFAT:88,
}
for (let i = 0; i < Object.keys(obj).length; i++) {
  console.log(" The Marks of " + Object.keys(obj)[i] + " are " + obj[Object.keys(obj)[i]])
}
//                                    question 2
let obj = {
  FARAZ: 100,
  ADNAN: 90,
  SIFFAT:88,
}
for (let key in obj) {
  console.log(key,obj[key])
  
                                            question 3
  
  
  let cn = 4
  let i
  while (i!=cn) {
    console.log("Try Again")
    i = prompt("Enter a Number")
  }                                                  
  console.log("You Have Entered The Correct Number")    
  
                                        question 4
  
  
  function mean(a, b, c, d) {
    return (a + b + c + d)/4
    
  }
  console.log(mean(4, 5, 6, 7))
                                           //  chap 4 (string)
  let a = "Faraz"
console.log(a.length)
console.log(a)


let man1 = "faraz"
let man2 = "adnan"
let sentence = `${man1} is stronger than ${man2}`
console.log(sentence)
                                       //  escape character
let student = "Far\"az";
console.log(student.length)
let a = "FARAZ"
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
  
}
let name = "faraz"
let friend = "zikriya"
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.replace("faraz","adnan"))
// console.log(name.concate("Is The Friend of", friend))
console.log(name + " Is The Friend of " + friend)

let sentence = "quick brown fox jumps over the lazy dog"
let word = "fox2";
let word2 = "dog"
console.log(`the word "${word}" ${sentence.includes(word)?"is":"is not"} present in the sentence`)
console.log(`the word "${word2}" ${sentence.includes(word2)?"is":"is not"} present in the sentence`)
                                          // chap 4 practice set

                                           question 1
let name = "faraz\*"
console.log(name.length)
                                    
                                    // question 2
let friend = "faraz ayaz khan"
console.log(friend.toUpperCase())
console.log(friend.toLowerCase())

                                    // question 3

let sentence = "quick brown fox jumps over the lazy dog"
let king = "faraz"
console.log(`the word "${king}" ${sentence.includes(king)?"is":"is not"} present in the sentence`)
// question 4


let question = " give me the amount rs 1000"
let number = question.slice("give me the amount rs  ".length)
console.log(number)

                               //  chap 5 (Arrays)

let class1 = [90, 36, 80, 100, null, "not present"]
console.log(class1)
console.log(class1[0])
console.log(class1[1])
console.log(class1[2])
console.log(class1[3])
console.log(class1[4])
console.log(class1[5])
console.log(class1[6])
console.log(class1.length)
class1[0] = 95
class1[4] = 67
console.log(class1)
console.log(typeof class1)
                                     //  array methods

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(num, typeof num)

let b = num.toString()       //  converts array to string
console.log(b, typeof b)

let c = num.join(" and ")
console.log(c, typeof c)

let d = num.push(11)           //  adds element at the end of the array
console.log(num)

let e = num.pop()
console.log(num)

let f = num.shift()          //  removes the first element of the array
console.log(f,num)               //    modifies the original array           

let g = num.unshift(56)       //    adds element at the start of the array
console.log(g, num)

let h = [6, 7, 8, 9, 10]
delete h[2]    
delete h[3]     
console.log(h.length)  //  deletes the element at the given index

let i = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let j = [10, 11, 12, 13, 14, 15, 16]
let k = [17, 18, 19, 20, 21,]
let l = i.concat(j, k)
console.log(l)               //  concats the arrays and returns a new array
let compare = (a, b) => {
  return b - a
}
let m = [1, 2, 883, 444, 5, 6, 127, 8, 9]
m.sort(compare)
console.log(m)                    //  sorts the array in ascending order
let n = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let deletedvalues = n.splice(3, 4, 2023, 1070, 994, 80, 971)
console.log(n)              //  deletes the elements from the array and returns the deleted elements
console.log(deletedvalues)
let o = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let newnum = o.slice(3, 6)
console.log(newnum)               //  returns the sliced array

                                    // using loops with arrays

let n = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < n.length; i++) {
  console.log(n[i])
  
}
                                          //  forEach loop

n.forEach(element => {
  console.log(element + element)
  
});

                                // for of loop  most used loop in arrays

for (const element of n) {
  console.log(element)
  
}
                                                //  for in loop

for (const key in n) {
  console.log(n[key])
}
                                               //  Array.from

let name = "faraz"
let namearray = Array.from(name)
console.log(namearray)
console.log(namearray.length)

//  MAP FUNCTION 

let arr = [1,3,5,7,9]
arr.map((value, index, array)=>{
  console.log(value, index, array)
}
)

//  ARRAY FILTER METHOD 

let arr2 = [2,4,6,8,10]
let newarr = arr2.filter((a)=>{
  return a<5
})
console.log(newarr)

//  ARRAY REDUCE METHOD

let arr3 = [44,6,8,88,5,20]
const reduce_func = (h1, h2)=>{
  return h1 + h2
}
let newarray = arr3.reduce(reduce_func)
console.log(newarray)

CHAP 5 PRACTICE SET
QUESTION 1

let arr = [1,2,3,4,5]
let a = 54
arr.push(a)
console.log(arr)

// QUESTION 2

let arr = [1,2,3,4,5]
let a;
do {
  a = prompt("Enter a Number")
  a = Number.parseInt(a)
  arr.push(a)
  console.log(arr)
  
} while (a!=0);

// question 3

let arr2 = [22, 44, 66, 88, 99, 50, 1000]
let newarr = arr2.filter((a)=>{
  return  a % 10 == 0
  
})
console.log(newarr)

//                                question 4

let arr3 = [22, 44, 66, 88, 99, 50, 1000]
let arr4 = arr3.map((a)=>{
  return a*a
})
console.log(arr4)

// question 5

let f = [1, 2, 3, 4, 5]
const reduce_func = (a, b)=>{
  return a * b
}
let newarray = f.reduce(reduce_func)
console.log(newarray)

// variable
// declaration
var name;
let age;
//const country;
// const variable should be initialized at the time of declaration
// initailize
name = "faraz";
age = 22;
// datatypes
// integer string boolean array object

let faraz = {
  name: "faraz",
  age: 22,
  country: "Pakistan",
  isMale: true,
};

let array_of_objects = [
  { name: "faraz", age: 22, country: "Pakistan", isMale: true },
  { name: "Adnan", age: 23, country: "Pakistan1", isMale: true },
  { name: "faraz1", age: 24, country: "Pakistan2", isMale: true },
  { name: "faraz2", age: 25, country: "Pakistan3", isMale: true },
];

// modified array = []
let modified_array = array_of_objects.map((value, index) => {
  if (value.country === "Pakistan2") {
    value.country = "Ireland";
  }
  return value;
});

console.log(modified_array);

// loops
// for loop

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array1[6]); // accessing the array elememt
let array2 = [];
let array3 = [];
for (let i = 0; i < array1.length; i++) {
  if (array1[i] % 2 == 0) {
    array2.push(array1[i]);
  } else {
    array3.push(array1[i]);
}
}
console.log("the even numbers are", array2);
console.log("the odd numbers are", array3);

// how to swap two vriables
let a = 10;
let b = 20;
let original_val_of_a = a;
a = b;
b = original_val_of_a;
console.log(`the value of a is ${a} and the value b is ${b}`);

// let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 1; i <= 50; i++) {
  sum += i;
}
console.log(sum);

// exercise 1

let r =  Math.floor(Math.random() * 100);
console.log(r);

let i=0;
while (true) {
  ++i
  let n = prompt("Enter a number");
  n =parseInt(n);
  if (n == r ){
    console.log(`You have guessed the number in ${i} attempts`);
    break;
  }
  else if (n > r) {
    console.log("The number is smaller");
  }
  else  {
    console.log("The number is greater");
}
}

// exercise 2

let r = Math.floor(Math.random() * 40);
console.log(r);
let i = 0;
while (true) {
  ++i
  let n = prompt("ENTER A NUMBER");
  n = parseInt(n);
  if (n==r) {
    console.log( "YOU HAVE GUESSED THE NUMBER IN ${i} ATTEMPTS");
    break;
  }
  
  else if (n>r) {
    console.log("THE NUMBER IS SMALLER");
  }
  else {
    console.log("THE NUMBER IS GREATER");
}
}
//  chapter 6 (practice set)

// question 1

let a = prompt("ENTER A NUMBER");
a = parseInt(a);
if (a > 18)
alert("YOU CAN DRIVE");

else (a < 18) 
alert("YOU CANNOT DRIVE");

console.log(a)

// question 2 and 3


let F = true;
while (F) {
  let a = prompt("ENTER A NUMBER");
  a = parseInt(a);
  if (a < 0) {
    console.error("INVALID INPUT");
    break;
  }
  
  if (a > 18) {
    alert("YOU CAN DRIVE");
  } else  alert("YOU CANNOT DRIVE");
  F = confirm("DO YOU WANT TO CONTINUE");
}
console.log(F);

// question 4

let number = prompt("Enter a number");
number = parseInt(number);

if (number > 10) {
  location.href = "https://hianime.to/";
}

// question 5


let color = prompt("Enter a color");

document.body.style.backgroundColor = color;

let color = prompt("Enter a color");

document.body.style.backgroundColor = color;

// EXERCISE 2
let playagain = "yes";
while (playagain == "yes") {
  let userinput = prompt("Enter rock, paper or scissor");
  let computerinput = Math.floor(Math.random() * 3) + 1;
  let obj = {
    1: "rock",
    2: "paper",
    3: "scissor",
  }
  let pc = obj[computerinput];
  
  if (userinput == pc) {
    alert("It is a tie");
  }
  else if
        (userinput === "rock" && pc === "scissor" ||
        userinput === "paper" && pc === "rock" ||
        userinput === "scissor" && pc === "paper") {

            alert("The User Selected " + userinput + " and the computer selected " + pc + " so the user wins and the random number generated by the computer is " + computerinput);
            
      }
      else {
        alert("The User Selected " + userinput + " and the computer selected " + pc + " so the user loses and the random number generated by the computer is " + computerinput);
    }
    
    playagain = prompt("DO YOU WANT TO PLAY AGAIN TYPE YES OR NO")
  }
  
alert("Thanks For Playing");

//  exercise 3

let playagain2 = "yes";
while (playagain2 == "yes") {
  let userinput = prompt("Enter rock, paper or scissor");
  let computerinput = Math.floor(Math.random() * 3) + 1;
  let obj = {
    1: "rock",
    2: "paper",
    3: "scissor",
  }
  let pc = obj[computerinput];
  
  if (userinput == pc) {
    alert("It is a tie");
  }
  else if
  (userinput === "rock" && pc === "scissor" ||
  userinput === "paper" && pc === "rock" ||
  userinput === "scissor" && pc === "paper") {
    
  alert("The User Selected " + userinput + " and the computer selected " + pc + " so the user wins and the random number generated by the computer is " + computerinput);
  
}
else {
  alert("The User Selected " + userinput + " and the computer selected " + pc + " so the user loses and the random number generated by the computer is " + computerinput);
}

playagain2 = prompt("DO YOU WANT TO PLAY AGAIN TYPE YES OR NO")
}

alert("Thanks For Playing");


let playagain3 = "yes";
while (playagain3 == "yes") {
  let userinput = prompt("Enter rock, paper or scissor");
  let computerinput = Math.floor(Math.random() * 3) + 1;
  let obj = {
    1: "rock",
    2: "paper",
    3: "scissor",
  }
  let pc = obj[computerinput];
  
  if (userinput == pc) {
    alert("It is a tie");
  }
  else if
  (userinput === "rock" && pc === "scissor" ||
  userinput === "paper" && pc === "rock" ||
  userinput === "scissor" && pc === "paper") {
    
  alert("The User Selected " + userinput + " and the computer selected " + pc + " so the user wins and the random number generated by the computer is " + computerinput);
  
}
else {
  alert("The User Selected " + userinput + " and the computer selected " + pc + " so the user loses and the random number generated by the computer is " + computerinput);
}

playagain3 = prompt("DO YOU WANT TO PLAY AGAIN TYPE YES OR NO")
}

alert("Thanks For Playing");

let sum = 0;
let N = [2, 3, 4, 5, 6, 7];

for (let i = 0; i < N.length; i++) {
  sum += N[i];
}
console.log(sum);

let sum1 = 0;
let N1 = [2, 3, 4, 5, 6, 7];

for (let i = 0; i < N.length; i++) {
  sum += N1[i];
}
console.log(sum);

let faraz = [2, 4, 6, 8, 10];
let sum2 = 0;
for (let i = 0; i < faraz.length; i++) {
  sum2 += faraz[i];
}

console.log(sum2);

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let evensum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    evensum += numbers[i];
  }
}

console.log(evensum);

const numberToFind = Math.floor(Math.random() * 5);
const array = [1, 2, 3, 4, 5];
// iterate through the array and check if the number exist in the array or not

for (let i = 0; i < array.length; i++) {
  if (array[i] == 2) {
    console.log(`NUMBER IS + ${i} and the random is ${numberToFind} `);
    break;
  } 
  else {
    console.log(`not present`);
}
}

for (let i = 0; i <= 10; i++) {
  console.log(`The Table Is OF ${i}`)
  for (let j = 0; j <= 10; j++) {
    console.log(i + "*" + j + "=" + i*j)
  }
}

const object1 = {
  F: "FARAZ",
  A: "ADNAN",
  S: "SIFFAT",
}
for (const name in object1) {
  console.log(`word  ${name}  = ${object1[name]}`)
  
}
//  questions for for loop
// Write a for loop to print numbers from 1 to 10
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Write a for loop to print numbers from 10 to 1 (reverse order)
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
// Write a for loop to print only even numbers from 1 to 20.
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`these are even integers ${i}`)
    
  };
}
//  Write a for loop to print only odd numbers from 1 to 15.
for (let i = 0; i <= 15; i++) {
  if (i % 2 != 0) {
    console.log(`these are odd integers ${i}`)
  }
}
// Write a for loop to print the square of numbers from 1 to 5.
for (let i = 0; i <= 5; i++) {
  console.log(`sqaure of ${i} is = ${i * i}`)
  
}

// intermediate questions
// Write a for loop to calculate the sum of numbers from 1 to 10
let numbers = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
  console.log(sum)
}
// Write a for loop to calculate the product (multiplication) of numbers from 1 to 5
let num = [1,2,3,4,5];
let multiplication = 1;
for (let i = 0; i < num.length; i++) {
  multiplication *= num[i]
  console.log(multiplication)
}
// Write a for loop to print the first 10 multiples of 3.
for (let i = 0; i <= 10; i++) {
  console.log(3 * i)
}
// Write a for loop that prints every letter of the word "JavaScript" one by one
let array = "Faraz Adnan"
for (let i = 0; i < array.length; i++) {
  console.log(array[i]) 
}

// Use a for loop to print the numbers from 1 to 10, but stop the loop if the number is 7.
for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    console.log(`7 is detected`)
    break;
  }
  console.log(i)
}
// Advanced Questions
// Use a for loop to reverse a string (e.g., "hello" → "olleh").
let string = "alucarD";
let reversed = "";
for (let i = string.length - 1; i >= 0;  i--) {
  reversed += string[i]
  
}
console.log(reversed)

// write a for loop to print this pattern
for (let i = 0; i <= 5; i++) {
  let star = "";
  for (let j = 0; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}

for (let i = 5; i >= 1; i--) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(star)
}

for (let i = 0; i <= 7; i++) {
  for (let j = 3; j < i; j--) {
    console.log(`this is i ${i} and this is ${j} and the log runs`);
    if (j < 0) {
      break;
    }
  }
}
for (let i = 10 ; i >= 1; i--) {
  console.log(`The Table Is OF ${i}`);
  for (let j = 1; j <= 20; j++) {
    console.log(i + "*" + j + "=" + i * j);
  } 
}
let n = [1,2,3,4,5,6,7,8,9];
minus = 1;
for (let i = 1; i < n.length; i++) {
  minus -= n[i]
  console.log(minus)
}
let n = [9, 8, 7, 6, 5, 4, 3, 2, 1]; 

for (let i = 0; i < n.length - 1; i++) {  
  let result = n[i] - n[i + 1];   
  console.log(`${n[i]} - ${n[i + 1]} = ${result}`);
}
// template literals
let Firstnumber = 30;
let SecondNumber = 20;
console.log(
  `The sum of ${Firstnumber} and ${SecondNumber} is ${
    Firstnumber + SecondNumber
  }`
);

Name = 'Faraz';
FName = "Faraz Ayaz khan";
console.log(` ${FName}.`.repeat(10))

const myFavoriteFood = ["Biryani", "Pizza", "Burger"];
let [f1,f2,f3] = myFavoriteFood
console.log(`My Fav Food Is ${f3}, ${f1}, ${f2}`)
console.log(`My Most Fav is ${f2} and the least fav is ${f1}`)

//  assignment

let a = 10;
let b = 20;
a = a + b;
b = a - b;
a = a - b;
console.log(`The Value of a is ${a} and the Value of b is ${b}`)

let c = 30;
let d = 35;
[c,d] = [d,c]
console.log(`The Value of a is ${c} and the Value of b is ${d}`)

// object destructuring

let myProfile = {
  name: "Faraz Ayaz Khan",
  age: 20,
  country: "Pakstan",
  hobby : {
    first: "Cricket",
    second: "Coding",
    Third: "outing"
  }
}
let {name, age, country, hobby} = myProfile
console.log(`My name is ${name} and my age is ${age} and my country is ${country} and my Most Fav hobby is Playing ${hobby.first}`)

// Arrow Function

let f = 50;
let g = 50;

const sum = ()=> f + g
console.log(sum())




let h = 30;

const sub = (i) => h - i
console.log(sub(15))

const mult = (a,b) => {
  b = (typeof b !== "undefined") ? b : 5
  console.log(a * b)
}
mult(10)

const sum = (a,b=4) => {
  console.log(a + b)
}
sum(10)

//  REST PARAMETERS
const mult = (...inputs) => {
  console.log(...inputs)
  let result = 1;
  for (const i of inputs) {
    result += i;
  }
  console.log(result)
}
mult(1,2,3,4,5,6,7,8,9,10)

// SPREAD OPERATORS
const func = (a,b,c) => {
  console.log(a+b+c)
  
}
let arr = [7,8,9];
console.log(...arr)
func(...arr)


let func2 = (a,b,c,d)=> {
  console.log(a+b-c*d)
}
let newarr = [4,5,6,7];
console.log(...newarr)
func2(...newarr)

// concat method 

let array1 = [1,2,3,4]
let array2 = [5,6,7,8]

array1 = [...array1,...array2]
console.log(array1)

let arr1 = [1,2,3]
let arr3 = [4,5,6]

arr2 = [...arr1,...arr3,10,13,14]
console.log(arr2)


let array3 = [1,2,3,4]
let array4 = [5,6,7,8]

array1 = [...array3,...array4]
console.log(array3)

let arr5 = [1,2,3]
let arr6 = [4,5,6]

arr2 = [...arr1,...arr3,10,13,14]
console.log(arr2)

// promises

let promise = new Promise((resolve, reject) => {
let a = 10;
let b = 20;
if (a + b == 30) {resolve("The sum is correct")} 
else {
   reject("The sum is incorrect");
                              }
});
                            
                            
 */
   
  // Filter , Map, reduce

//                                const series =  [
//                                 {
//                                   "name": "Lovely Runner",
//                                   "id": "lovely-runner",
//                                   "img_url": "../../public/Lovelyrunner.jpeg",
//                                   "rating": "9.8",
//                                   "description": "Im Sol travels back in time to prevent the tragic fate of her favorite star, Ryu Sun Jae.",
//                                   "cast": ["Kim Hye Yoon", "Byeon Woo Seok", "Song Geon Hee"],
//                                   "genre": ["Romantic Comedy", "Fantasy"],
//                                   "watch_url": "https://www.viki.com/tv/40466c-lovely-runner"
//                                 },
//                                 {
//                                   "name": "Stranger Things",
//                                   "id": "stranger-things",
//                                   "img_url": "../../public/st.jpg",
//                                   "rating": "8.7",
//                                   "description": "A group of young friends witness supernatural forces and secret government exploits.",
//                                   "cast": ["Winona Ryder", "David Harbour", "Millie Bobby Brown"],
//                                   "genre": ["Drama", "Fantasy", "Horror"],
//                                   "watch_url": "https://www.netflix.com/title/80057281"
//                                 },
//                                 {
//                                   "name": "The Witcher",
//                                   "id": "the-witcher",
//                                   "img_url": "../../public/witchr.jpeg",
//                                   "rating": "8.2",
//                                   "description": "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world.",
//                                   "cast": ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
//                                   "genre": ["Action", "Adventure", "Drama"],
//                                   "watch_url": "https://www.netflix.com/title/80189685"
//                                 },
//                                 {
//                                   "name": "Money Heist",
//                                   "id": "money-heist",
//                                   "img_url": "../../public/mh.jpeg",
//                                   "rating": "8.3",
//                                   "description": "A criminal mastermind who goes by 'The Professor' plans the biggest heist in recorded history.",
//                                   "cast": ["Úrsula Corberó", "Álvaro Morte", "Itziar Ituño"],
//                                   "genre": ["Action", "Crime", "Drama"],
//                                   "watch_url": "https://www.netflix.com/title/80192098"
//                                 },
//                                 {
//                                   "name": "The Crown",
//                                   "id": "the-crown",
//                                   "img_url": "../../public/crown.jpeg",
//                                   "rating": "8.6",
//                                   "description": "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
//                                   "cast": ["Claire Foy", "Olivia Colman", "Imelda Staunton"],
//                                   "genre": ["Biography", "Drama", "History"],
//                                   "watch_url": "https://www.netflix.com/title/80025678"
//                                 },
//                                 {
//                                   "name": "Squid Game",
//                                   "id": "squid-game",
//                                   "img_url": "../../public/sg.jpeg",
//                                   "rating": "8.1",
//                                   "description": "Hundreds of cash-strapped contestants accept an invitation to compete in children's games for a tempting prize, but the stakes are deadly.",
//                                   "cast": ["Lee Jung-jae", "Park Hae-soo", "Wi Ha-joon"],
//                                   "genre": ["Action", "Drama", "Mystery"],
//                                   "watch_url": "https://www.netflix.com/title/81040344"
//                                 },
//                                 {
//                                   "name": "Queen of Tears",
//                                   "id": "queen-of-tears",
//                                   "img_url": "../../public/qot.jpeg",
//                                   "rating": "TBD",
//                                   "description": "A gripping tale of love, loss, and resilience set against the backdrop of a war-torn nation.",
//                                   "cast": ["Kim Soo Hyun", "Kim Ji Won"],
//                                   "genre": ["Drama", "Romance"],
//                                   "watch_url": "https://www.viki.com/tv/23456789c-queen-of-tears"
//                                 }
//                         ]
                               
// let userbooks = series.filter((bk)=> bk.genre.includes("Action"))
// // console.log(userbooks)

// userbooks = series.filter((bk)=> { return bk.genre.includes("Mystery") && bk.rating > 8.0})
// console.log(userbooks)

// let mynums = [1,2,3,4,5,6,7,8,9,10]
// const newnums = mynums.map((num)=> num * 2)
// console.log(newnums)

// const sum = mynums.map((num)=> num + 10)
// console.log(sum)
 
// const subtraction = mynums.map((num)=> num -10)
// console.log(subtraction)

// Practice Set Loops

// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   if (i == 5) {
//     break;
//   }
// }

// let a1 = [1,2,3,4,5,6,7,8,9,10]
// const f1 = () => {
//   return a1.map((num)=> num * 2)
// }
// console.log(f1())

// let a2 = [1,2,3,4,5,6,7,8,9,10]
// const f2 = () => {
//   return a2.map((num) => num * 2)
// }
// console.log(f2())


let f =  ["Faraz", "Adnan", "Siffat", "Ahmed", "Khan"]
 {
  f.map((name) => {
    return name.length > 4
  })
 }
console.log(f)





