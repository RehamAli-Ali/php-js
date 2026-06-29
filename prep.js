// const array  = [1,2,3];
// array.push(4);
// console.log(array);

// const person = {name : "ali"};
// person.name = "hamza";
// console.log(person)
//console.log(typeof null);
//let c = 1; // declaring and assigning a vlaue to the c
//console.log(c)
//c = 2; // reassignging of the value of the c 
//console.log(c);
//let c = 3; // redeclaring and assigning the value, not acceptable at all 
//console.log(Boolean(0));
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr2.push(4);
// console.log(arr1.length);

// console.log("10" - "4"); // 6
// console.log("10" + "4"); // 104
// console.log(10 + "4" + 4); // 1044
// if (null === object)
// {
//     console.log("fine");
// }
// else
//      {
//     console.log("not fine");
// }


// let name = "World";
// let greeting2 = `Hello ${name}`;
// console.log(greeting2);
// let fruits = ["apple" , "anar" , "mangoes"];
//  let person = {name: "ali" , age : 25};
// // console.log(fruits);
//  console.log(person);


//THREE YS TO ITE THE FUNCTION 
//function declaration
// function greet(name)
// {
//     return`hello,${name}`;
// }
// greet("ALi");
// //function expression
// const greet = function(name){
// return `hello,${name}`;
// };

// // //Arrofunction 
// const greet = (name) =>{
//     return`hello,${name}`;
// };
// const greet = name => `Hello,${name};`

// let outer = "T am outside";
// function demo()
// {
//     console.log(outer);
// };

// sayHI();
// function sayHI()
// {
//     console.log("hi");
// }

// sayBye();
//  function sayBye ()
// {
//     console.log("bye");
// };



//FOREACH
// const nums =[1,2,3]
// nums.forEach((num) => console.log(num*2));
// console.log(nums)
// //MAP
// const number = [1,2,3]
// const doubled = number.map(num => num * 2)
// console.log(number);
// console.log(doubled);
//map always returns a new array of the exact same length one output per input, transformed. It never mutates the original

// ok so here is the beginner mistake
//const res = nums.map(num => {num * 2;}); // forgot 'return'
//console.log(res);

// FILTER -- "keep only what passes a test"
// const nums = [1,2,3,4,5]
// const evens = nums.filter(num => num % 2 === 0);
// console.log(evens);
// //REDUCE - "boil the whole array down to one value"
// array.reduce((accumulator, currentItem) => {} , initialValue) ;
// const nums = [2,4,6];
// const sum = nums.reduce((acc, num) => acc + num , 0);
// console.log(sum);
//CONVERT AN ARRAY INTO AN OBJECT
const fruits = ["apple", "banana", "apple", "orange", "apple"];
const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(count);