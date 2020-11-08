// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temps1 = [12, 5, -5, 0, 4]
const temps2 = [17, 21, 23]
const forecasts = []
const printForecast = function (a, b) {
   let arr;
   if (b) { arr = a.concat(b) }
   else { arr = a }

   for (let i = 0; i < arr.length; i++) {
      let el = `${arr[i]} ºC in ${i + 1} days ...`;
      forecasts.push(el);
   }
   let str = forecasts.join(' ');
   console.log(`... ${str}`);
}

printForecast(temps1) // ... 12 ºC in 1 days ... 5 ºC in 2 days ... -5 ºC in 3 days ... 0 ºC in 4 days ... 4 ºC in 5 days ...
printForecast(temps1, temps2) // ... 12 ºC in 1 days ... 5 ºC in 2 days ... -5 ºC in 3 days ... 0 ºC in 4 days ... 4 ºC in 5 days ... 12 ºC in 1 days ... 5 ºC in 2 days ... -5 ºC in 3 days ... 0 ºC in 4 days ... 4 ºC in 5 days ... 17 ºC in 6 days ... 21 ºC in 7 days ... 23 ºC in 8 days ...