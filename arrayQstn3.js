// FUNCTION TO SHIFR ELEMENTS TO THE END OR START

function moveZeros(arr) {
  let nonZeroIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
      nonZeroIndex++;
    }
  }
  return arr;
}
console.log(moveZeros([0, 1, 0, 3, 12]));

//SLICE AND SPLICE REVISED

let myArr = [1, 2, 3, 4, 5];
let arr2 = myArr.slice(0, 3);
console.log(arr2);
console.log(myArr);
let arr3 = myArr.splice(0, 4);
console.log(arr3);
console.log(myArr);

//
// 1. FUNCTION TO COUNT OCCURENCE OG AN ARRAY

function occurence(arr, val) {
  return arr.filter((item) => item === val).length;
}
console.log(occurence([1, 2, 5, 6, 8, 7, 6, 5, 4, 3, 2, 1, 4, 6, 8], 4));

//
// 2. FUNCTION TO FLATTEN A NESTED ARRAY

function flatter(arr) {
  return arr.flat(Infinity);
}
console.log(flatter([1, [2, 3], [4, [5, 6]]]));

// 3. FUNCTION TO FIND THE INDEX OF ELEMENT

function indexFinder(arr, val) {
  return arr.indexOf(val);
}
console.log(indexFinder([2, 3, 5, 7, 9, 8, 5, 3], 9));

// 4. FINCTION TO FIND THE AVERAGE OF THE ARRAY

function avg(arr) {
  let sum = 0;
  for (const num of arr) {
    sum = sum + num;
  }
  return sum / arr.length;
}
console.log(avg([1, 2, 3, 4, 5]));

//
// 5. A FUNCTION TO CHECK IF THE ARRAY IS PALINDROME

function palindrome(arr) {
  if (JSON.stringify(arr) !== JSON.stringify(arr.reverse())) {
    console.log(arr.reverse());
    return false;
  } else {
    return true;
  }
}
console.log(palindrome([1, 2, 3, 4]));

//
// 6. FUNCTION TO FIND THE UNION OF TWO ARRAY

function union(arr1, arr2) {
  let array = [];
  for (num of arr1) {
    if (!array.includes(num)) {
      array.push(num);
    }
    for (num of arr2) {
      if (!array.includes(num)) {
        array.push(num);
      }
    }
  }
  return array.sort();
}
console.log(union([1, 2, 3, 4], [3, 4, 5, 6]));

// 7. FUNCTION TO FIND THE LARGEST CONTIGUOUS SUBARRAY SUM

// Q.  Find the Longest Substring Without Repeating Characters
// Q. Find the Longest Increasing Subsequence
// Q. Find the First Non-Repeating Element
// Q. Product of Array Except Self
