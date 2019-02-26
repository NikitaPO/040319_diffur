let func = (x, y) => {
  return y * (1 - x);
}

let a = 0;
let b = 1;
let x = 0;
let y = 1;

let n = 100;
console.log(`Число разбиений = ${n}`);

let h = (b - a) / n;
while (x <= b - h) {
  let k1 = func(x, y);
  let k2 = func(x + h / 2, y + h / 2 * k1);
  let k3 = func(x + h / 2, y + h / 2 * k2);
  let k4 = func(x + h, y + h * k3);
  console.log(`x = ${x.toFixed(3)}, y = ${y.toFixed(3)}`);
  y += h / 6 * (k1 + 2 * k2 + 2 * k3 + k4);
  x += h;
};
