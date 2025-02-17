// let b = document.body
// console.log("First Child of b is:" + b.firstChild )
// console.log("First Child of b is:" + b.firstElementChild )

//   let ctitles = document.getElementById("myId");
//   ctitles.style.color = "green"; // Now it will work

//   document.querySelector(".title").style.color = "red";

// window.onload = function () {
// let my_paragraph = document.getElementsByClassName(".container");

// my_paragraph.style.color = "green";
// }

// const title = document.getElementById("title");
// title.style.backgroundColor = "aqua"

const parent  = document.querySelector(".parent")
console.log(parent);
console.log(parent.children);
for (let i = 0; i < parent.children.length; i++) {
     console.log(parent.children[i].innerHTML);
    
}