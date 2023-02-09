// // linear search
// function linearSearch(arr, val) {
//     const length = arr.length;
//     for(let i = 0; i < length; i ++) {
//         if(arr[i] === val) return i;
//     }
//     return -1;
// }

// console.log(linearSearch([10, 15, 20, 25, 30], 15))
// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4))
// console.log(linearSearch([100], 100))
// console.log(linearSearch([1, 2, 3, 4, 5], 6))
// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10))
// console.log(linearSearch([100], 200))


// // binary search
// function binarySearch(arr, val) {
//     let left = 0;
//     let right = arr.length - 1;
//     let mid = Math.floor((left + right) / 2);
//     while (arr[mid] !== val && left <= right) {
//         if (val < arr[mid]) right = mid - 1;
//         else left = mid + 1;
//         mid = Math.floor((left + right) / 2);
//     }
//     if(arr[mid] === val) return mid;
//     return -1;
// }

// console.log(binarySearch([1, 2, 3, 4, 5], 5));


// // naive search: count shorter string in larger string
// function naiveSearch(long, short) {
//     let count = 0;
//     for(let i = 0; i < long.length; i++) {
//         for(let j = 0; j < short.length; j++) {
//             if (short[j] !== long[i + j]) break;
//             if (j === short.length - 1) count++;
//         }
//     }
//     return count;
// }

// console.log(naiveSearch('hello world', 'lll'));