function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}
// Log de la funcion con el callback donde pasamos los valores a sumar y llamamos la funcion de suma
console.log(calc(6,2, sum));

// En package.json colocamos en scripts la linea "callback": "node src/callback/index.js"
// En consola iniciamos la funcion con npm run callback

function date(callback) {
  console.log(new Date);
  setTimeout(function () {
    let date = new Date;
    callback(date);
  }, 3000)
}

function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate);