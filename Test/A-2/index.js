
function alternatingSum(array) {
    let t1 = 0, t2 = 0;
    array.forEach((n, i) => {
      if (i % 2 === 0) {
        t1 += n;
      } else {
        t2 += n;
      }
    });
    return [t1, t2];
  }

console.log(alternatingSum(a = [60, 40, 55, 75, 64]))