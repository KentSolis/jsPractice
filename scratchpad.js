// let num = 1;
// console.log(num);


// const num2 = 23;
// console.log(num2);


// function makeFullName(firstName, lastName) {
//     return firstName , " " , lastName;
// }

// console.log(makeFullName('Kent', 'Solis'));



// "I am a string";
// "another example of 'this type' of stuff";
// `this is for string interpolation; ${num}`; //allows to grab values or expressions



// const name = "benjamin";
// name[0] = "B";
// console.log(name);

// console.log(typeof 5);
// console.log(typeof -5.326);

// Math.pow(3, 2); //9
// Math.floor(5.23); //5


// 1 == '1'; //loose equals makes assumption in js - implicit type coercion

// 1 === '1'; //preferred method




// const daysOfTheWeek = ["mon", "tues", "wed"]; //this is an object
// console.log(daysOfTheWeek[1]);

// daysOfTheWeek.push("thurs"); // adds to end of array ->
// console.log(daysOfTheWeek);





// // objects can be nested
// const database = {
//   457: {
//     name: "Tom",
//     age: 34,
//   },
//   57782: {
//     name: "Sally",
//     age: 42,
//   },
// };

// // an objects value can be referenced by key using [] syntax
// const tomEntry = database[457];

// // if the key is a string, you can also use . syntax
// console.log(tomEntry.name); // "Tom"
// console.log(tomEntry.age); // 34

// // You can re-assign a key's value (mutable)
// tomEntry.age = tomEntry.age + 1;

// console.log(tomEntry); // will now show Tom age 35




// // primitive
// let myNumber = 42;

// // 'num' is 'copy by value', changes to it won't effect what was passed in
// function incrementNumber(num) {
//   num = num + 1;
// }

// incrementNumber(myNumber);

// console.log(myNumber); // 42




// let myNumber = 42;

// function incrementNumber(num) {
//   return num + 1;
// }

// myNumber = incrementNumber(myNumber);

// console.log(myNumber); // 43




// // complex
// const myObject = { name: "Tom", age: 34 };

// // obj is 'copy by reference', changes to it will effect what was passed in
// function incrementObjectAge(obj) {
//   obj.age = obj.age + 1;
// }

// incrementObjectAge(myObject);

// console.log(myObject); // { name: "Tom", age: 35 };




// const age = 24;
// let canDrink;

// if (age < 21) {
//   canDrink = "nope!";
// } else {
//   canDrink = "yup!";
// }




// const age = 24;
// const canDrink = if (age < 21) {
//   return "nope!";
// } else {
//   return "yup!";
// }


// //if-else-ternary operator
// const age = 24;
// const canDrink = age < 21 ? "nope!" : "yup!";


//iteration
// let myNumbers = [1, 44, 72];
// for (let i = 0; i < myNumbers.length; i++) {
//   console.log(myNumbers[i]);
// }


// let myNumbers = [1, 44, 72];
// for (let num of myNumbers) {
//   console.log(num);
// }



const database = {
  457: {
    name: "Tom",
    age: 34,
  },
  57782: {
    name: "Sally",
    age: 42,
  },
};


//below is a similar working method
for (let entry of Object.entries(database)) {
  const key = entry[0];
  const value = entry[1];
  const name = value['name'];
  console.log(key, value); // '457', { name: 'Tom', age: 34 }
  console.log(name); //same plus name below
}