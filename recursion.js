// // should return power of a number
// function power(num, pow)  {
//     if (pow === 0) {
//         return 1
//     } else {
//         return num*power(num, pow - 1)
//     }
// }

// console.log(power(2, 0))
// console.log(power(2, 2))
// console.log(power(2, 4))


// // Factorial
// function factorial(num) {
//     if (num === 0) return 1;
//     else return num*factorial(num - 1);
// }

// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(4));
// console.log(factorial(7));


// // Product of Array
// function productOfArray(array) {
//     let product = 1;
//     function prod(arr){
//         if (arr.length === 0) return;
//         else {
//             product = product*arr[0];
//             prod(arr.slice(1));
//         }
//     }
//     prod(array);
//     return product;
// }

// console.log(productOfArray([1, 2, 3]));
// console.log(productOfArray([1, 2, 3, 10]));


// //find sum from 0 to number passed in function
// function recursiveRange(num) {
//     if(num === 1) return 1;
//     else return num + recursiveRange(num - 1);
// }

// console.log(recursiveRange(6))
// console.log(recursiveRange(10))


// // find fibonacci number at given index
// function fib(num) {
//     if (num === 0) return 0;
//     if (num === 1) return 1;
//     return fib(num - 1) + fib(num - 2);
// }

// console.log(fib(4));
// console.log(fib(10));
// console.log(fib(28));
// console.log(fib(35));


// reversse a string
// function reverse(str) {
//     let newStr = ''

//     function helper(string) {
//         if(string.length === 0) return;
//         newStr += string[string.length - 1];
//         helper(string.substring(0, string.length - 1))
//     }

//     helper(str);
//     return newStr;
// }

// console.log(reverse('awesome'));
// console.log(reverse('rithmschool'));

// Palindrome
// function isPalindrome(str) {
//     let newStr = ''

//     function helper(string) {
//         if(string.length === 0) return;
//         newStr += string[string.length - 1];
//         helper(string.substring(0, string.length - 1))
//     }

//     helper(str);
//     return newStr === str;
// }

// console.log(isPalindrome('awesome'));
// console.log(isPalindrome('foobar'));
// console.log(isPalindrome('tacocat'));
// console.log(isPalindrome('amanaplanacanalpanama'));
// console.log(isPalindrome('amanaplanacanalpandemonium'));


// // call a callback function on each element of an array
// const isOdd = val => val % 2 !== 0;

// function someRecursive(arr, callBack) {
//     if (arr.length === 0) return false;
//     if (callBack(arr[0])) return true;
//     return false || someRecursive(arr.slice(1), callBack);
// }

// console.log(someRecursive([1,2,3,4], isOdd)); // true
// console.log(someRecursive([4,6,8,9], isOdd)); // true
// console.log(someRecursive([4,6,8], isOdd)); // false
// console.log(someRecursive([4,6,8], val => val > 10)); // false


// // flatten an array
// function flatten(arr) {
//     let newArr = [];
//     function helper(arr) {
//         if(arr.length === 0) return;
//         if(typeof(arr[0]) === 'object') {
//             helper(arr[0]);
//         } else {
//             newArr.push(arr[0]);
//         }
//         helper(arr.slice(1));
//     }
//     helper(arr);
//     return newArr;
// }

// console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])); // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]



// // capitalize first letter of each element of an array
// function capitalizeFirst(arr) {
//     let newArr = [];
//     function helper(arr) {
//         if (arr.length === 0) return;
//         else {
//             newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1));
//         }
//         helper(arr.slice(1));
//     }
//     helper(arr);
//     return newArr;
// }

// console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana'])


// // Sum of all even numbers in a nested object
// function nestedEvenSum(obj) {
//     let sum = 0;
//     function helper(obj) {
//         const arr = Object.keys(obj);
//         if(arr.length === 0) return;
//         if(typeof(obj[arr[0]]) === 'object') {
//             helper(obj[arr[0]]);
//         } else {
//             sum = obj[arr[0]] % 2 === 0 ? sum + obj[arr[0]] : sum;
//         }
//         delete obj[arr[0]];
//         helper(obj);
//     }
//     helper(obj);
//     return sum;
// }

// var obj1 = {
//     outer: 2,
//     obj: {
//       inner: 2,
//       otherObj: {
//         superInner: 2,
//         notANumber: true,
//         alsoNotANumber: "yup"
//       }
//     }
//   }
  
//   var obj2 = {
//     a: 2,
//     b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//     c: {c: {c: 2}, cc: 'ball', ccc: 5},
//     d: 1,
//     e: {e: {e: 2}, ee: 'car'}
//   };
  
//   console.log(nestedEvenSum(obj1)); // 6
//   console.log(nestedEvenSum(obj2)); // 10



// // Capitalize every element of an array
// function capitalizedWords(arr) {
//     let newArr = [];
//     function helper(arr) {
//         if (arr.length === 0) return;
//         else {
//             newArr.push(arr[0].toUpperCase());
//         }
//         helper(arr.slice(1));
//     }
//     helper(arr);
//     return newArr;
// }

// let words = ['i', 'am', 'learning', 'recursion'];
// console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']



// // Stringify numbers in an obj
// function stringifyNumbers(newObj) {
//     let obj = JSON.parse(JSON.stringify(newObj));
//     let arr = Object.keys(obj);
//     function helper(arr, obj) {
//         if (arr.length === 0) return;
//         if (typeof(obj[arr[0]]) === 'object') {
//             helper(Object.keys(obj[arr[0]]), obj[arr[0]]);
//         } else if (typeof(obj[arr[0]]) === 'number') {
//             obj[arr[0]] = obj[arr[0]] + '';
//         }
//         helper(arr.slice(1), obj);
//     }
//     helper(arr, obj);
//     return obj;
// }

// let obj = {
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     }
// }

// console.log(stringifyNumbers(obj));
// // {
// //     num: "1",
// //     test: [],
// //     data: {
// //         val: "4",
// //         info: {
// //             isRight: true,
// //             random: "66"
// //         }
// //     }
// // }



// // collect string values of an obj in an array
// function collectStrings(obj) {
//     let arr = Object.keys(obj);
//     let strArr = [];
//     function helper(arr, obj) {
//         if (arr.length === 0) return;
//         if (typeof(obj[arr[0]]) === 'object') {
//             helper(Object.keys(obj[arr[0]]), obj[arr[0]]);
//         } else if (typeof(obj[arr[0]]) === 'string') {
//             strArr.push(obj[arr[0]]);
//         }
//         helper(arr.slice(1), obj);
//     }
//     helper(arr, obj);
//     return strArr;
// }

// const obj = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }

// console.log(collectStrings(obj)); // ["foo", "bar", "baz"])