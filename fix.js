const nomorrandom = [];

for (let i = 0; i < 100; i++) {
  nomorrandom.push(Math.floor(Math.random() * 50) + 1);
}

console.log(nomorrandom);

// cari minmax

function findMinimum(inputedArray) {
  let min = inputedArray[0];

  for (let i = 0; i < inputedArray.length; i++) {
    if (min > inputedArray[i]) {
      min = inputedArray[i]; // jika angka minimal lebih besar dari angka X, maka X menggantikan (i)
    }
  }

  return min;
}

function findMaximum(inputedArray) {
  let max = inputedArray[0];

  for (let i = 0; i < inputedArray.length; i++) {
    if (max < inputedArray[i]) {
      max = inputedArray[i]; // jika angka maximal lebih besar dari angka X, maka X menggantikan (i)
    }
  }

  return max;
}

function findTotal(inputedArray) {
  let total = 0;

  for (let i = 0; i < inputedArray.length; i++) {
    total += inputedArray[i]; // short hand  = total + input arr
  }

  return total;
}

function findAvg(inputedArray) {
  return findTotal(inputedArray) / inputedArray.length;
}

console.log(findMinimum(nomorrandom));
console.log(findMaximum(nomorrandom));
console.log(findTotal(nomorrandom));
console.log(findAvg(nomorrandom));
