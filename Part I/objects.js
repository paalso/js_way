const anObject = {
  myProp: 2
};

// Create anotherObject using anObject as a prototype
const anotherObject = Object.create(anObject);

// Create yetAnotherObject using anotherObject as a prototype
const yetAnotherObject = Object.create(anotherObject);

console.log(anotherObject.myProp); // 2

// myProp is found in yetAnotherObject's prototype chain (in anObject)
console.log(yetAnotherObject.myProp); // 2

// myOtherProp can’t be found in yetAnotherObject's prototype chain
console.log(yetAnotherObject.myOtherProp); // undefined
 
anObject.newProp = 47;
console.log(anotherObject.newProp);
