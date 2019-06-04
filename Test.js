let n = A.length;
let m = B.length;
let arrayA = A.sort();
let arrayB = B.sort();
var i = 0;
for (var j = 0; j < n; ) {
  if (arrayA[j] === arrayB[i]) return arrayA[j];
  if (i < m - 1 && arrayB[i] < arrayA[j]) i++;
  else j++;
}

//Castle Problem

function findCastle(array) {
  let uniqueArray = array.filter((num, index) => {
    return num !== array[index + 1];
  });
  if (uniqueArray.length === 1) {
    return 1;
  }
  let count = 2;

  for (let i = 1; i < uniqueArray.length - 1; i++) {
    if (
      uniqueArray[i] > uniqueArray[i - 1] &&
      uniqueArray[i] > uniqueArray[i + 1]
    ) {
      count++;
    }
    if (
      uniqueArray[i] < uniqueArray[i - 1] &&
      uniqueArray[i] < uniqueArray[i + 1]
    ) {
      count++;
    }
  }
  return count;
}

// trip value function

function tripCalc(array) {
  let maxValue = null;
  for (let i = 0; i < array.length; i++) {
    let outerNum = array[i];
    for (let j = i; j < array.length; j++) {
      let innerNum = array[j];
      let distance = Math.abs(i - j);
      let tripValue = innerNum + outerNum + distance;
      if (tripValue > maxValue || maxValue === null) {
        maxValue = tripValue;
      }
    }
  }
  return maxValue;
}

// Lightbulb Problem

function solution(A) {
  let switches = new Array(A.length + 1).fill(0);
  let lights = new Array(A.length + 1).fill(0);
  lights[0] = 1;
  let counter = 0;

  for (let i = 0; i < A.length; i++) {
    switches[A[i]] = 1;
    if (lights[A[i] - 1] === 1) {
      lights[A[i]] = 1;
      counter++;
      for (let x = i; x < A.length && switches[x] === 1; x++) {
        lights[x] = 1;
      }
    }

    // console.log(switches,lights)
  }
  return counter;
}

// Binary Number Problem

function solution(S) {
  // V odd V--
  // V even V=V/2
  // console.log(typeof S.charAt(0))
  let num = 0;
  let exp = 0;
  let counter = 0;
  for (let i = S.length - 1; i > -1; i--) {
    if (S.charAt(i) === String(1)) {
      num += Math.pow(2, exp);
    }
    exp++;
  }

  for (let x = num; x > 0; ) {
    if (x % 2 === 0) {
      x = x / 2;
      counter++;
    } else {
      x--;
      counter++;
    }
  }
  return counter;
}
