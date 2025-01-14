//1. A function to find the missing no in array

function missNo(arr, n) {
  const expSeries = (n * (n + 1)) / 2;
  const actSeries = arr.reduce((sum, num) => sum + num, 0);
  return expSeries - actSeries;
}
console.log(missNo([1, 3, 5, 2, 4, 7, 9, 8], 9));

//.........2

function findMissing(arr, n) {
  const expected = (n * (n + 1)) / 2;
  const actual = arr.reduce((sum, num) => sum + num, 0);
  return expected - actual;
}
console.log(findMissing([1, 2, 3, 4, 5, 6, 7, 9], 9));

//............3

function missingNo(arr, n) {
  const exp = (n * (n + 1)) / 2;
  const act = arr.reduce((sum, num) => sum + num, 0);
  return exp - act;
}
console.log(missingNo([1, 2, 3, 4, 6, 7, 8, 9], 9));

//different way to sum element of the array

function summer(arr) {
  const sum = arr.reduce((sum, num) => sum + num, 0);
  return sum;
}
console.log(summer([1, 2, 3, 4, 10, 40, 9]));

//.........4
function missFinder(arr, n) {
  let expt = (n * (n + 1)) / 2;
  let actl = arr.reduce((sum, num) => sum + num, 0);
  return expt - actl;
}
console.log(missFinder([1, 2, 3, 5, 6, 7, 8, 9], 9));

// 2. A function to find 2nd largest no in the array

function secondLar(arr) {
  let max = 1;
  let secMax = 1;
  for (num of arr) {
    if (max < num) {
      secMax = max;
      max = num;
    } else if (num > secMax && num !== max) {
      secMax = num;
    }
  }
  return secMax;
}
console.log(
  secondLar([1, 2, 3, 5, 6, 8, 79, 64, 32, 0, 65, 31, 69, 67, 71, 78, 81])
);

// ............2

function secLar(arr) {
  let first = 0;
  let second = 0;
  for (num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }
  return second;
}
console.log(secLar([1, 2, 3, 4, 45, 6, 5, 23, 764, 323, 404, 54, 35]));

// 3. function to move ZEROs to end of array
// .....//Input: [0, 1, 0, 3, 12] ||  Output: [1, 3, 12, 0, 0]

{
  {
    function zeroMov(arr) {
      // WORST WAY TO DO THIS
      let nonZ = [];
      let onZ = [];
      for (num of arr) {
        if (num !== 0) {
          nonZ.push(num);
        }
        if (num === 0) {
          onZ.push(num);
        }
      }
      return nonZ.concat(onZ);
    }
    console.log(zeroMov([0, 1, 0, 3, 12]));
  }
}

// 4. A function to Rotate an Array Left by K Positions

function rotateK(arr, k) {
  k = k % arr.length;

  return arr.slice(+k).concat(arr.slice(0, +k));
}
console.log(rotateK([1, 2, 3, 4, 5, 6], 2));

//............2

function rotatorK(arr, k) {
  k = k % arr.length;
  return arr.slice(+k).concat(arr.slice(0, +k));
}
console.log(rotatorK([1, 2, 3, 4, 5], 6));

//

// 5. function to check longest consecutive sequence
// Input: [100, 4, 200, 1, 3, 2]
// Output: 4
// sequence is [1,2,3,4]

function longSeq(arr) {
  let set = new Set(arr);
  let maxLen = 0;
  for (num of arr) {
    if (!set.has(num - 1)) {
      let length = 1;
      while (set.has(num + length)) {
        length++;
      }
      maxLen = Math.max(maxLen, length);
    }
  }
  return maxLen;
}
console.log(longSeq([1, 2, 4, 7, 8, 4, 5, 3, 8, 7, 4, 6]));

//...........2

function getSeq(arr) {
  let set = new Set(arr);
  let maxLen = 0;
  for (num of arr) {
    if (!set.has(num - 1)) {
      let len = 1;

      while (set.has(num + len)) {
        len++;
      }
      maxLen = Math.max(maxLen, len);
    }
  }
  return maxLen;
}
console.log(getSeq([1, 2, 4, 6, 8, 0, 9, 5, 1]));

//...........3

function sequence(arr) {
  let set = new Set(arr);
  let maxseq = 0;
  for (num of arr) {
    if (!set.has(num - 1)) {
      let len = 1;
      while (set.has(num + len)) {
        len++;
      }
      maxseq = Math.max(maxseq, len);
    }
  }
  return maxseq;
}
console.log(sequence([1, 2, 4, 6, 8, 0, 9, 5, 1, 10, 11]));

//..........4

function getSeries(arr) {
  let set = new Set(arr);
  let maxSeri = 0;
  for (num of arr) {
    if (!set.has(num - 1)) {
      let len = 1;
      while (set.has(num + len)) {
        len++;
      }
      maxSeri = Math.max(len, maxSeri);
    }
  }
  return maxSeri;
}
console.log(getSeries([1, 2, 4, 6, 8, 0, 9, 5, 1]));

// 6. a function to check if two array are equal
// Input: arr1 = [1, 2, 3], arr2 = [3, 2, 1]
// Output: true

// Input: arr1 = [1, 2, 2], arr2 = [2, 1, 1]
// Output: false

function chckAry(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const map1 = {};
  for (num of arr1) {
    map1[num] = (map1[num] || 0) + 1;
  }
  for (num of arr2) {
    if (!map1[num]) {
      return false;
    }
    map1[num]--;
  }
  return true;
}
console.log(chckAry([1, 2, 3], [3, 2, 1]));
console.log(chckAry([1, 2, 2], [2, 1, 1]));

//..........2

function aryChk(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let map = {};
  for (num of arr1) {
    map[num] = (map[num] || 0) + 1;
  }
  for (num of arr2) {
    if (!map[num]) {
      return false;
    }
    map[num]--;
  }
  return true;
}
console.log(aryChk([1, 3, 5, 7], [5, 7, 3, 1]));

//..................3

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  arr1.sort();
  arr2.sort();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
console.log(arraysEqual([1, 3, 5, 7], [3, 7, 5, 1]));

//............4

function eqlAry(ar1, ar2) {
  if (ar1.length !== ar2.length) return false;

  ar1.sort();
  ar2.sort();
  for (i = 0; i < ar1.length; i++) {
    if (ar1[i] !== ar2[i]) return false;
  }
  return true;
}
console.log(eqlAry([1, 3, 5, 7, 9], [9, 3, 5, 7, 1]));

// 7. a function to find intersection of two array

function intersection(ar1, ar2) {
  let common = [];
  for (let i = 0; i < ar1.length; i++) {
    if (ar2.includes(ar1[i]) && !common.includes(ar1[i])) {
      common.push(ar1[i]);
    }
  }
  return common;
}
console.log(intersection([1, 3, 4, 6, 2, 1, 5, 6], [2, 3, 5, 7, 9, 8, 5, 3]));

//.......2

function findCommon(ar1, ar2) {
  let intersect = [];
  for (i = 0; i < ar2.length; i++) {
    if (ar1.includes(ar2[i]) && !intersect.includes(ar2[i])) {
      intersect.push(ar2[i]);
    }
  }
  return intersect;
}
console.log(
  findCommon([1, 3, 4, 5, 6, 7, 5, 4, 3], [1, 2, 5, 6, 7, 9, 7, 5, 4, 3])
);

// 8. A function to group ANAGRAMS
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

function anagram(elements) {
  let map = [];
  for (ele of elements) {
    let word = ele.split("").sort().join("");

    map[word] = map[word] || [];
    map[word].push(ele);
  }
  return Object.values(map);
}
console.log(anagram(["eat", "tea", "tan", "ate", "nat", "bat"]));

//..........2

function angrm(array) {
  let angry = [];
  for (ele of array) {
    let sabd = ele.split("").sort().join("");

    angry[sabd] = angry[sabd] || [];
    angry[sabd].push(ele);
  }
  return Object.values(angry);
}
console.log(angrm(["eat", "tea", "tan", "ate", "nat", "bat"]));

//.............3

function anagram2(arr) {
  let serial = [];
  for (elements of arr) {
    let word = elements.split("").sort().join("");

    serial[word] = serial[word] || [];
    serial[word].push(elements);
  }
  return Object.values(serial);
}
console.log(anagram2(["eat", "tea", "tan", "ate", "nat", "bat"]), "this");
