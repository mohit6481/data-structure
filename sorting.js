// // Bubble Sort
// const swap = (arr, index1, index2) => {
//     [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
// };
// function bubbleSort(arr) {
//     let noSwap = false;
//     for(let i = arr.length; i > 0; i--) {
//         noSwap = true;
//         for(let j = 0; j < i - 1; j++) {
//             if (arr[j] > arr[j+1]) {
//                 swap(arr, j, j + 1);
//                 noSwap = false;
//             }
//         }
//         if (noSwap) break;
//     }
//     return arr;
// }

// console.log(bubbleSort([1, 4, 2, 5, 6, 3, 7]));


// // selection sort
// const swap = (arr, index1, index2) => {
//     [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
// };
// function selectionSort(arr) {
//     let min;
//     for (let i = 0; i < arr.length; i++) {
//         min = i;
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[j] < arr[min]) min = j;
//         }
//         if (i !== min) swap(arr, i, min);
//     }
//     return arr;
// }

// console.log(selectionSort([1, 4, 2, 5, 6, 3, 7, 0]));



// // Insertion sort
// const swap = (arr, index1, index2) => {
//     [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
// };
// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let current = arr[i];
//         for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
//             arr[j + 1] = arr[j]
//         }
//         arr[j + 1] = current;
//     }
//     return arr;
// }

// console.log(insertionSort([1, 4, 2, 5, 6, 3, 7, 0]));


// // Merge sort
// const merge = (arr1, arr2) => {
//     let i = 0;
//     let j = 0;
//     let arr = [];
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] > arr2[j]) {
//             arr.push(arr2[j]);
//             j++;
//         } else if (arr1[i] <= arr2[j]) {
//             arr.push(arr1[i]);
//             i++
//         }
//     }
//     if (i === arr1.length) arr.push(...arr2.slice(j));
//     else if (j === arr2.length) arr.push(...arr1.slice(i));
//     return arr;
// }

// function mergeSort (arr) {
//     if(arr.length < 2) return arr;
//     let mid =  Math.floor(arr.length / 2)
//     let arr1 = mergeSort(arr.slice(0, mid));
//     let arr2 = mergeSort(arr.slice(mid));
//     return merge(arr1, arr2);
// }

// console.log(mergeSort([1, 4, 2, 5, 6, 3, 7, 0]));


// //Quick Sort
// const swap = (arr, index1, index2) => {
//     [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
// };
// const pivot = (arr, left = 0, right = arr.length - 1) => {
//     let pivotIndex = left;
//     let pivotElement = arr[left];
//     for(let i = left + 1; i <= right; i++) {
//         if(pivotElement > arr[i]) {
//             pivotIndex++;
//             swap(arr, pivotIndex, i);
//         }
//     }
//     swap(arr, left, pivotIndex);
//     return pivotIndex;
// }

// function quickSort(arr, left = 0, right = arr.length - 1) {
//     if(left < right) {
//         const index = pivot(arr, left, right);
//         quickSort(arr, left, index - 1);
//         quickSort(arr, index + 1, right);
//     }
//     return arr;
// }

// console.log(quickSort([4, 2, 5, 6, 3, 7, 0]));



// // Radix Sort
// const getDigit = (num, place) => {
//     let count = 0;
//     let digit;
//     while (count <= place) {
//         count++;
//         digit = num % 10;
//         num = Math.floor(num / 10);
//     }
//     return digit;
//     // return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
// };
// const digitCount = (num) => {
//     let count = 0;
//     while(num > 0) {
//         count++;
//         num = Math.floor(num / 10);
//     }
//     return count;
//     // return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
// };
// const mostDigits = (arr) => {
//     let digits = 0;
//     for (let el of arr) {
//         const count = digitCount(el)
//         digits = digits > count ? digits : count;
//     }
//     return digits;
// }
// function mergeSort(arr) {
//     const count = mostDigits(arr);
//     for(let i = 0; i < count; i++) {
//         let newArr = Array.from({length: 10}, () => []);
//         for(let j = 0; j < arr.length; j++) {
//             newArr[getDigit(arr[j], i)].push(arr[j]);
//         }
//         arr = [].concat(...newArr);
//     }
//     return arr;
// }
// console.log(mergeSort([123,  43, 524, 543236, 63, 6, 565, 656]))

function getMedian(arr) {
    let mid = Math.floor(arr.length / 2);
    if(arr.length % 2 != 0) {
        return arr[mid];
    } else {
        let a = arr[mid - 1];
        let b = arr[mid];
        return [a,b]
    }
}
console.log(getMedian([1,3,4,5,6,7]));