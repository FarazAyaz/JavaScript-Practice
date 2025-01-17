
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

practice set chap 2 
question 1
let age = 15
if(age>10 && age<20){
    console.log("Your Age lies Between 10 And 20")
}
else{
    console.log("Your age doesnt between 10 and 20")
}

let age = (15)
switch (age){
    case 12:
    console.log("Your age is 12")
    break
    case 13:
    console.log("Your age is 13")
    break
    case 14:
    console.log("Your age is 14")
    break
    case 15:
    console.log("Your age is 15")
    break
    default:
        console.log("your are not special")
    

}
question 3
let num = 12
if(num%2==0 && num%3==0){
    console.log('the number is divisible by two and three')
}
else(
    console.log('the number is not divisible by two and three')
)

question no 4

let num = 45
if(num%2==0 || num%3==0){
    console.log('the number is divisible by two and three')
}
else(
    console.log('the number is not divisible by two and three')
)
  
let age = 15
let a = age>18?"you can drive":"you cannot drive"
console.log(a)