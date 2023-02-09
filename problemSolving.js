// // 1. Frequency Counter
// // if 2nd array has same number of squared element
// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;
//     const arr3 = arr1.map(el => el*el);
//     const obj = {};
//     const obj1 = {};
//     arr2.forEach(el => {
//         obj1[el] = obj1[el] ? obj1[el] + 1 : 1;
//     })
//     arr3.forEach(el => {
//         obj[el] = obj[el] ? obj[el] + 1 : 1;
//     })
//     let flag = false;
//     Object.keys(obj).forEach(el => {
//         if (obj[el] !== obj1[el]) {
//             flag = true;
//         }
//     })
//     if (flag) return false;
//     return true;
// }

// console.log(same([1, 2, 3], [1, 9, 4])); // true
// console.log(same([1, 2, 3], [1, 9])); // false
// console.log(same([1, 2, 1], [1, 4, 4])); //false


// // if both string are anagram of each other
// function validAnagram (str1, str2) {
//     if (str1.length !== str2.length) return false;

//     const obj1 = {};
//     const obj2 = {};
//     for (let el of str1) {
//         obj1[el] = obj1[el] ? obj1[el] + 1 : 1;
//     }
//     for (let el of str2) {
//         obj2[el] = obj2[el] ? obj2[el] + 1 : 1;
//     }
//     let flag = false;
//     Object.keys(obj1).forEach(el => {
//         if (obj1[el] !== obj2[el]) {
//             flag = true;
//         }
//     })
//     if (flag) return false;
//     return true;
// }

// console.log(validAnagram('', '')); // true
// console.log(validAnagram('aaz', 'zza')); // false
// console.log(validAnagram('anagram', 'nagaram')); // true
// console.log(validAnagram('rat', 'car')); // false
// console.log(validAnagram('awesome', 'awesom')); // false
// console.log(validAnagram('qwerty', 'qeyrtw')); // true
// console.log(validAnagram('texttwisttime', 'timetwisttext')); // true

// // 2. Multiple Pattern
// // find a pair which sums to zero in an array
// function sumZero(arr) {
//     let i = 0;
//     let j = arr.length - 1;
//     while (i < j) {
//         const sum = arr[i] + arr[j];
//         if (sum === 0) return [arr[i], arr[j]]
//         else if (sum > 0) {
//             j--;
//         } else {
//             i++;
//         }
//     }
// }

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]))

// // count unique Value
// function countUniqueValue(arr) {
//     if (arr.length === 0) return 0;
//     let count = 0;
//     let i = 0;
//     let j = 1;
//     while (i < arr.length) {
//         if (arr[i] === arr[j]) {
//             j++;
//         } else {
//             i = j;
//             j = i + 1;
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countUniqueValue([1, 1, 1, 1, 2]))
// console.log(countUniqueValue([1, 2, 3, 4, 4, 7, 7, 7, 9, 11, 11, 13, 13, 13]))
// console.log(countUniqueValue([]))
// console.log(countUniqueValue([-2, -1, -1, 0 , 1]))

// // 3. Sliding Window
// // Find maximum sum of consecutive numbers in an array
// function maxSubarraySum(arr, num){
//     let maxSum = 0;
//     let tempSum = 0;
//     if (arr.length < num) return null;
//     for (let i = 0; i < num; i++) {
//       maxSum += arr[i];
//     }
//     tempSum = maxSum;
//     for (let i = num; i < arr.length; i++) {
//       tempSum = tempSum - arr[i - num] + arr[i];
//       maxSum = Math.max(maxSum, tempSum);
//     }
//     return maxSum;
// }

// maxSubarraySum([2,6,9,2,1,8,5,6,3],3)



// // Same frequency of numbers in two integer value

// function sameFrequency(num1, num2) {
//     const str1 = num1 + '';
//     const str2 = num2 + '';
//     let obj1 = {};
//     let obj2 = {};

//     if (str1.length !== str2.length) return false;

//     for (let el of str1) {
//         obj1[el] = obj1[el] ? obj1[el] + 1 : 1;
//     }

//     for (let el of str2) {
//         obj2[el] = obj2[el] ? obj2[el] + 1 : 1;
//     }

//     for (let el of Object.keys(obj1)) {
//         if (obj1[el] !== obj2[el]) return false;
//     }

//     return true;
// }

// console.log(sameFrequency(182, 281)) // true
// console.log(sameFrequency(34, 14)) // false
// console.log(sameFrequency(3589578, 5879385)) // true
// console.log(sameFrequency(221, 222)) // false



// // find if arguments have duplicate
// function areThereAnyDuplicates() {
//     let obj1 = {};
//     for(let el of Object.keys(arguments)) {
//         if (obj1[arguments[el]]) {
//             return true;
//         }
//         obj1[arguments[el]] = 1;
//     }
//     return false;
// }
// 
// function areThereAnyDuplicates(...args) {
//     args.sort((a,b) => a > b);
//     let start = 0;
//     let next = 1;
//     while(next < args.length){
//       if(args[start] === args[next]){
//           return true
//       }
//       start++
//       next++
//     }
//     return false
// }
// 
// function areThereDuplicates() {
//     return new Set(arguments).size !== arguments.length;
// }

// console.log(areThereAnyDuplicates(1, 2, 3)) // false
// console.log(areThereAnyDuplicates(1, 2, 2)) // true
// console.log(areThereAnyDuplicates('a', 'b', 'c', 'a')) // true


// // average of pair from array equal to 2nd argument

// function averagePair(arr, avg) {
//     if (arr.length === 0) return false;
//     let left = 0;
//     let right = arr.length - 1;
//     while (left < right) {
//         if ((arr[left] + arr[right]) / 2  === avg) {
//             return true;
//         } else if ((arr[left] + arr[right]) / 2 > avg) {
//             right--;
//         } else {
//             left++;
//         }
//     }
//     return false;
// }

// console.log(averagePair([1, 2, 3], 2.5))
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))
// console.log(averagePair([], 2))


// // Check if char of str1 is present in str2 in order

// function isSubsequence(str1, str2) {
//     let index1 = 0;
//     let index2 = 0;

//     while (index2 < str2.length) {
//         if (str2[index2] === str1[index1]) {
//             index1++;
//         }
//         if (index1 === str1.length) {
//             return true;
//         }
//         index2++;
//     }
//     return false;
// }

// console.log(isSubsequence('hello', 'hello world'));
// console.log(isSubsequence('sing', 'sting'));
// console.log(isSubsequence('abc', 'abracadabra'));
// console.log(isSubsequence('abc', 'acb'));



// // Find max sum of subarray af length eual to 2nd arg
// function maxSubarraySum(arr, num) {
//     if (arr.length < num) return null;
//     let sum1 = 0;
//     let sum2 = 0;
//     for(let i = 0; i < num; i++) {
//         sum1 += arr[i]
//     }
//     sum2 =  sum1;
//     for(let i = num; i < arr.length; i++) {
//         sum2 = (sum2 - arr[i - num] + arr[i]);
//         if (sum1 < sum2) {
//             sum1 = sum2;
//         }
//     }
//     return sum1;
// }

// console.log(maxSubarraySum([100, 200, 300, 400], 2));
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
// console.log(maxSubarraySum([2, 3], 3));



// // find min lensth subArray whose sum equals 2nd arfument

// function minSubArrayLen(arr, num) {
//     let index1 = 0;
//     let index2 = 1;
//     let sum = arr[index1];
//     let count = 1;
//     let arr1 = [];
    
//     while(index2 < arr.length) {
//         sum += arr[index2];
//         if (arr[index1] > num) return count;
//         if (sum < num) {
//             count++;
//             index2++;
//         } else {
//             arr1.push(count)
//             index1++;
//             index2 = index1 + 1;
//             count = 1;
//             sum = 0;
//         }
//     }
//     if (arr1.length === 0) return 0;
//     return Math.min(...arr1)
// }

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9))
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52))
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39))
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55))
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11))
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 9, 10], 95))



// Find longest substring with distinct char

function findLongestSubstring(str) {
    let index1 = 0;
    let index2 = 1;
    let obj = {};
    obj[str[index1]] = 1;
    let subStr = str[index1];
    let arr = [];

    while (index2 < str.length) {
        if (obj[str[index2]]) {
            arr.push(subStr.length);
            obj = {};
            index1++;
            obj[str[index1]] = 1;
            index2 = index1 + 1;
            subStr = str[index1];
        } else {
            obj[str[index2]] = 1;
            subStr+=str[index2];
            index2++;
        }
        if(index2 === str.length - 1 && !obj[str[index2]]) {
            subStr+=str[index2];
            arr.push(subStr.length);
        }
    }
    return Math.max(...arr) === -Infinity ? 0 : Math.max(...arr);
}

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatisinthehat')); // 7
console.log(findLongestSubstring('bbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6