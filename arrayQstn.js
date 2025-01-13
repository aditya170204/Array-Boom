// 1. A function that takes an array of numbers and returns the sum of all elements

// function sumArray(arr) {
//   let sum = 0;
//   for (let num of arr) {
//     sum = sum + num;
//   }
//   return sum;
// }

// console.log(sumArray([1, 2, 3, 4]));

// ..........2

// function arrSum(arr) {
//   let sum = 0;
//   for (let num of arr) {
//     sum = sum + num;
//   }
//   return sum;
// }
// console.log(arrSum([1, 2, 3, 14]));

// 2. A function to find the largest number in an array.
// function findMax(arry) {
//   let max = 0;
//   for (const ele of arry) {
//     if (ele > max) {
//       max = ele;
//     }
//   }
//   return max;
// }
// console.log(findMax([5, 7, 2, 69, 54, 78]));

// ..........2

// function maxVal(arr) {
//   let max = 0;
//   for (const elm of arr) {
//     if (elm > max) {
//       max = elm;
//     }
//   }
//   return max;
// }
// console.log(maxVal([23, 543, 67, 3444, 87]));

// .........3
// function maxOne(arr) {
//   maximum = 0;
//   for (const ele of arr) {
//     if (ele > maximum) {
//       maximum = ele;
//     }
//   }
//   return maximum;
// }
// console.log(maxOne([23, 54, 76, 98, 712, 34, 3]));

// 3. A function that reverses an array.

// function revArr(array) {
//   let rev = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     rev.push(array[i]);
//   }
//   return rev;
// }
// console.log(revArr([5, 4, 3, 2, 1]));

// ........2

// function getRev(arr) {
//   let rev = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     rev.push(arr[i]);
//   }
//   return rev;
// }
// console.log(getRev([1, 2, 3, 4, 5, 6]));

// ......3

// function reverse(arr) {
//   let arRev = [];
//   for (i = arr.length - 1; i >= 0; i--) {
//     arRev.push(arr[i]);
//   }
//   return arRev;
// }

// console.log(reverse([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

// 4. A function to Check if Array Contains a Value

// function check(arr, value) {
//   for (const num of arr) {
//     if (num === value) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(check([23, 54, 67, 54, 1, 23, 4, 5, 5], 4));
// console.log(check([23, 54, 67, 54, 1, 23, 4, 5, 5], 9));

// .........2

// function presence(arr, val) {
//   for (const num of arr) {
//     if (num === val) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(presence([12, 43, 65, 23, 98, 2345, 23, 7, 4, 654], 23));

// 5. A function to remove duplicates from array

// function dup(arr) {
//   let unique = [];
//   for (const num of arr) {
//     if (!unique.includes(num)) {
//       unique.push(num);
//     }
//   }
//   return unique;
// }
// console.log(dup([12, 23, 23, 54, 54, 76, 98, 98, 99, 88, 99, 88]));

// ..............2

// function removeDup(arr) {
//   let perfect = [];
//   for (const num of arr) {
//     if (!perfect.includes(num)) {
//       perfect.push(num);
//     }
//   }
//   return perfect;
// }
// console.log(removeDup([22, 44, 34, 34, 6, 5, 87, 98, 54, 43, 43, 21, 12]));

// 6. A function to count occurence of value in  array

// function counting(arr, val) {
//   let count = 0;
//   for (const num of arr) {
//     if (num === val) {
//       count = count + 1;
//     }
//   }
//   return count;
// }
// console.log(
//   counting(
//     [1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 8, 8, 9, 9, 9],
//     6
//   )
// );

// .........2

// function counter(array, value) {
//   counts = 0;
//   for (num of array) {
//     if (num === value) {
//       counts++;
//     }
//   }
//   return counts;
// }
// console.log(
//   counter(
//     [1, 5, 5, 5, 5, 5, 7, 7, 7, 6, 6, 6, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 11],
//     3
//   )
// );

// 7. A function to find even no. in array

// function evenFinder(arr) {
//   let envAr = [];
//   for (num of arr) {
//     if (num % 2 === 0) {
//       envAr.push(num);
//     }
//   }
//   return envAr;
// }
// console.log(evenFinder([1, 23, 4, 5, 6, 7, 8, 90]), "are your even no.");

// 8. A function to find odd no. in array

// function oddFinder(arr) {
//   let oddAr = [];
//   for (num of arr) {
//     if (num % 2 !== 0) {
//       oddAr.push(num);
//     }
//   }
//   return oddAr.toString();
// }
// console.log(
//   oddFinder([1, 2, 3, 4, 5, 67, 8, 90, 9, 8, 7, 6, 5, 43, 21]),
//   "are your odd no. in the array "
// );

// // 9. A function to sort an array
// function getSorted(arr) {
//   arr.sort((a, b) => a - b);
//   return arr;
// }
// console.log(getSorted([1, 432, 1, 2, 43, 56, 5, 7, 5, 43, 2, 5, 345, 67, 65]));

// // decending order

// function getSorted2(arr) {
//   arr.sort((a, b) => b - a);
//   return arr;
// }
// console.log(getSorted2([1, 432, 1, 2, 43, 56, 5, 7, 5, 43, 2, 5, 345, 67, 65]));

// 10. A function to merge two  array

// let ar1 = [1, 2, 3, 4];
// let ar2 = [5, 6, 7, 8];
// function mergeAr() {
//   let merged = [...ar1, ...ar2];
//   return merged.toString();
// }

// console.log(mergeAr());

// function aryMerge(arX, arY) {
//   let merge = [...arX, ...arY];
//   let prftAr = [];
//   for (num of merge) {
//     if (!prftAr.includes(num)) {
//       prftAr.push(num);
//     }
//   }
//   return prftAr;
//   //   return prftAr.sort((a, b) => a - b); // if you want sorted array too
// }
// console.log(aryMerge([1, 2, 3, 10, 4, 5], [3, 4, 2, 6, 9, 8, 7]));

// 11. A function to rotate array

// function rotateAr(arr, steps) {
//   steps = steps % arr.length;
//   return arr.slice(-steps).concat(arr.slice(0, -steps));
// }
// console.log(rotateAr([1, 2, 3, 4, 5], 2));

//............2

// function arRotater(arr, step) {
//   step = step % arr.length;
//   return arr.slice(-step).concat(arr.slice(0, -step)); //rotate from right
//   // arr.slice(+step).concat(arr.slice(0, +step)) //rotate from left
// }
// console.log(arRotater([10, 20, 30, 40, 50, 60, 70, 80], 2));
