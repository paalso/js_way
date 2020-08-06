// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter14.md

const titleElements = Array.from(document.getElementsByTagName("h2"));
// console.log(searchedElements);

console.log(titleElements[0]);     // Show the first h2
console.log(titleElements.length); // 3 (total number of h2 elements in the page)

// titleElements.forEach(element => {
//     console.log(element);
// });

// const existingElements = Array.from(document.getElementsByClassName("exists"));
// existingElements.forEach(element => {
//   console.log(element);
// });

// const newElements = Array.from(document.getElementById("new"));
// newElements.forEach(element => {
//     console.log(element);
//   });
  

console.log(document.getElementById("content").classList);
console.log(document.getElementById("new").classList);