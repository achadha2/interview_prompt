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
