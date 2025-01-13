// //1. A function to find the missing no in array

// function missNo(arr, n) {
//   const expSeries = (n * (n + 1)) / 2;
//   const actSeries = arr.reduce((sum, num) => sum + num, 0);
//   return expSeries - actSeries;
// }
// console.log(missNo([1, 3, 5, 2, 4, 7, 9, 8], 9));

// //.........2

// function findMissing(arr, n) {
//   const expected = (n * (n + 1)) / 2;
//   const actual = arr.reduce((sum, num) => sum + num, 0);
//   return expected - actual;
// }
// console.log(findMissing([1, 2, 3, 4, 5, 6, 7, 9], 9));

// //............3

// function missingNo(arr, n) {
//   const exp = (n * (n + 1)) / 2;
//   const act = arr.reduce((sum, num) => sum + num, 0);
//   return exp - act;
// }
// console.log(missingNo([1, 2, 3, 4, 6, 7, 8, 9], 9));

// //different way to sum element of the array

// function summer(arr) {
//   const sum = arr.reduce((sum, num) => sum + num, 0);
//   return sum;
// }
// console.log(summer([1, 2, 3, 4, 10, 40, 9]));

// //.........4
// function missFinder(arr, n) {
//   let expt = (n * (n + 1)) / 2;
//   let actl = arr.reduce((sum, num) => sum + num, 0);
//   return expt - actl;
// }
// console.log(missFinder([1, 2, 3, 5, 6, 7, 8, 9], 9));

//

// 2. A function to find 2nd largest no in the array

// function secondLar(arr) {
//   let max = 1;
//   let secMax = 1;
//   for (num of arr) {
//     if (max < num) {
//       secMax = max;
//       max = num;
//     } else if (num > secMax && num !== max) {
//       secMax = num;
//     }
//   }
//   return secMax;
// }
// console.log(secondLar([1, 2, 3, 5, 6, 8, 79, 64, 32, 0, 65, 31, 69, 67, 71, 78, 81]));

//............2

// function secLar(arr) {
//   let first = 0;
//   let second = 0;
//   for (num of arr) {
//     if (num > first) {
//       second = first;
//       first = num;
//     } else if (num > second && num !== first) {
//       second = num;
//     }
//   }
//   return second;
// }
// console.log(secLar([1, 2, 3, 4, 45, 6, 5, 23, 764, 323, 404, 54, 35]));

//

// 3. function to move ZEROs to end of array
//.....//Input: [0, 1, 0, 3, 12] ||  Output: [1, 3, 12, 0, 0]

// {{function zeroMov(arr) {                 // WORST WAY TO DO THIS
//   let nonZ = [];
//   let onZ = [];
//   for (num of arr) {
//     if (num !== 0) {
//       nonZ.push(num);
//     }
//     if (num === 0) {
//       onZ.push(num);
//     }
//   }
//   return nonZ.concat(onZ);
// }
// console.log(zeroMov([1, 0, 3, 0, 4, 0, 3]));}}

//
// 4. A function to Rotate an Array Left by K Positions

// function rotateK(arr, k) {
//   return arr.slice(+k).concat(arr.slice(0, +k));
// }
// console.log(rotateK([1, 2, 3, 4, 5, 6], 2));
