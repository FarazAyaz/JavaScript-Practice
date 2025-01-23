
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
*/
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