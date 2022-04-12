function counter() {
  let n = [];
  let m = 1;
  function getArray() {
    while (m <= 10) {
      n.push(m);
      m++;
    }
    return n;
  }
  return getArray();
}

function getSum(arr, i) {
  return i <= 0 ? arr[i] : arr[i] + getSum(arr, --i);
}

const b = counter();
const sum = getSum(b, 5);
console.log(sum);
