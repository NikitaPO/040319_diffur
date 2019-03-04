console.clear();

//Начальные условия
const Ts = 22; //Температура окружающей среды
const r = 0.0373; //Коэффициент уменьшения температуры
const a = 0; //Начальная граница
const b = 45; //Конечная граница
const n = 10; //Число разбиений
let t = 0; //Время
let T = 83; //Температура жидкости

//Вычисления
let f = (t, T) => {
  return -r * (T - Ts);
}

console.log(`Число разбиений = ${n}`);

let x = [];
let y = [];

//Метод Эйлера
x.push(t.toFixed(1));
y.push(T);
let h = ((b-a)/n);
while (t <= (b - h)){
  T += h * f(t, T);
  console.log(`t = ${t.toFixed(1)} min, T = ${T.toFixed(3)}`);
  t += h;
  x.push(t.toFixed(1));
  y.push(T);
}

//Метод Рунге-Кутта
/*
let h = (b - a) / n;
let h2 = h / 2;
while (t <= b - h) {
  let k1 = h*f(t, T);
  let k2 = h*f(t + h2, T + k1/2);
  let k3 = h*f(t + h2, T + k2/2);
  let k4 = h*f(t + h, T + k3);
  let Fi = (k1 + 2*k2 + 2*k3 + k4)/6
  console.log(`t = ${t.toFixed(1)} min, T = ${T.toFixed(3)}`);
  x.push(t.toFixed(1));
  y.push(T);
  T += Fi;
  t += h;
}; */

//Прорисовка графика
/*var speedCanvas = document.getElementById("speedChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var speedData = {
  labels: x,
  datasets: [{
    label: "Интегральная функция",
    data: y,
  }]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});
*/
