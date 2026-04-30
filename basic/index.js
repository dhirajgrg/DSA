//1.Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// function counter(n){

// return function(){
//     // return ++n wrong it return from 2,3,4
//     return n++
// }

// }

// const myCounter=counter(1)

// console.log(`================`)
// console.log(myCounter())
// console.log(myCounter())
// console.log(myCounter())

//2.Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// let createCounter = function(init) {
//     let n=init
//     return {
//         increment:function(){
//             return n+=1;
//         },
//         decrement:function(){
//             return n-=1;
//         },
//         reset:function(){
//             return n=init;

//         }
//     }

// };

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

//3.Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.


// let arr=[1,2,3]
// let double=function(value){
//     return value * 2
// }
// let square=function(value){
//     return value * value
// }

// let cubic=function(value){
//     return value * value * value
// }

// const cloneMap = function (fn, arr) {
//   let returnedArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     returnedArray[i] = fn(arr[i], i);
//   }
//   return returnedArray;
// };

// console.log(cloneMap(double,arr))

//4.Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
// The fn function takes one or two arguments:
// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.
// Please solve it without the built-in Array.filter method.
