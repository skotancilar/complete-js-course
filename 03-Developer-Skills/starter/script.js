// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temps = [12, 5, -5, 0, 4]
const temps2 = [17, 21, 23]
const forecasts = []
const printForecast = function (a, b) {
   const arr = a.concat(b)
   for (let i = 0; i < arr.length; i++) {
      let el = `${arr[i]} ºC in ${i + 1} days...`;
      forecasts.push(el);
   }

   for (let j = 0; j < forecasts.length; j++) {
      console.log(` ${forecasts[j]}`);
   }
}

printForecast(temps, temps2);