function counter() {
  let n = 1;
  let m = n;

  return function () {
    if (m < 10) {
      console.log(m++);
      b();
    }
  };
}

const b = counter();

b();
b();
b();
b();
