'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/* const getCountryData = function (country) {
   const request = new XMLHttpRequest()

   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}?fullText=true`);
   request.send();

   request.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);
      console.log(data);
      const html =
         `<article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} million</p>
            <p class="country__row"><span>🗣️</span>${data.languages.map(value => value.name).join(' and ')}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name} / ${data.currencies[0].symbol ?? data.currencies[0].code} </p>
          </div>
      </article>`
      countriesContainer.insertAdjacentHTML("beforeend", html)
      countriesContainer.style.opacity = 1;
   })
}

getCountryData('singapore');
getCountryData('india'); */

/* const requestAll = new XMLHttpRequest()

requestAll.open('GET', `https://restcountries.eu/rest/v2/name/india?fullText=true`);
requestAll.send();

requestAll.addEventListener('load', function () {
   const [data2] = JSON.parse(this.responseText);
   console.log(data2);
}) */

const renderCountry = function (data, className) {
   const html =
      `<article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} million</p>
      <p class="country__row"><span>🗣️</span>${data.languages.map(value => value.name).join(' and ')}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name} / ${data.currencies[0].symbol ?? data.currencies[0].code} </p>
    </div>
   </article>`
   countriesContainer.insertAdjacentHTML("beforeend", html)
   countriesContainer.style.opacity = 1;
}

/* const getCountryDataAndNeighbour = function (country) {
   const request = new XMLHttpRequest()

   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}?fullText=true`);
   request.send();

   request.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);
      console.log(data);

      renderCountry(data)

      const [neighbour] = data.borders;
      console.log(neighbour);

      if (!neighbour) return;

      const request2 = new XMLHttpRequest();

      request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
      request2.send();

      request2.addEventListener('load', function () {
         const data2 = JSON.parse(this.responseText);
         console.log(data2);

         renderCountry(data2, 'neighbour')
      })
   })
}

getCountryDataAndNeighbour('PAKISTAN'); */
// https://api.opencagedata.com/geocode/v1/json?q=LAT+LNG&key=4f0374488ec74926820639bec141d060

/* const renderCountry = function (data, className) {
   const html =
      `<article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} million</p>
      <p class="country__row"><span>🗣️</span>${data.languages.map(value => value.name).join(' and ')}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name} / ${data.currencies[0].symbol ?? data.currencies[0].code} </p>
    </div>
   </article>`
   countriesContainer.insertAdjacentHTML("beforeend", html)
   countriesContainer.style.opacity = 1;
}
/////////////////// CODING CHALLANGE 1 //////////////////////

const whereAmI = function (lat, lng) {
   fetch(`https://opencage-geocoder.p.rapidapi.com/geocode/v1/json?key=4f0374488ec74926820639bec141d060&q=${lat}%2C+${lng}&language=en`, {
      "method": "GET",
      "headers": {
         "x-rapidapi-key": "950554e76cmsh12d12deff3513b0p18e0ffjsn3479299f1cab",
         "x-rapidapi-host": "opencage-geocoder.p.rapidapi.com"
      }
   }).then(function (res) {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`)
      return res.json();
   }).then(data => {
      if (!data.results[0].components.country) throw new Error(`Country not found 💥💥💥 `)

      console.log(data);
      console.log(`You are in ${data.results[0].components.province ?? data.results[0].components.city}, ${data.results[0].components.country}`);

      return fetch(`https://restcountries.eu/rest/v2/alpha/${(data.results[0].components["ISO_3166-1_alpha-3"]).toLowerCase()}`);
   }).then(function (res) {
      console.log(res);
      if (!res.ok) throw new Error(`Country not found ${res.status}`)
      return res.json();
   })
      .then(data => {
         console.log(data);
         renderCountry(data)
      })
}
whereAmI(40.263, 29.016);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474); */

/* const lotteryPromise = new Promise(function (resolve, reject) {
   console.log('Lotter draw is happening 🔮');
   setTimeout(function () {
      if (Math.random() >= 0.5) {
         resolve('You WIN 💰');
      } else {
         reject(new Error('You lost your money 💩'));
      }
   }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
   return new Promise(function (resolve) {
      setTimeout(resolve, seconds * 1000);
   });
};

wait(1)
   .then(() => {
      console.log('1 second passed');
      return wait(1);
   })
   .then(() => {
      console.log('2 second passed');
      return wait(1);
   })
   .then(() => {
      console.log('3 second passed');
      return wait(1);
   })
   .then(() => console.log('4 second passed')); */

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));


///////////////////////////////////////
// Promisifying the Geolocation API
const getPosition = function () {
   return new Promise(function (resolve, reject) {
      // navigator.geolocation.getCurrentPosition(
      //   position => resolve(position),
      //   err => reject(err)
      // );
      navigator.geolocation.getCurrentPosition(resolve, reject);
   });
};
// getPosition().then(pos => console.log(pos));

const whereAmI = function () {
   getPosition()
      .then(pos => {
         const { latitude: lat, longitude: lng } = pos.coords;

         return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
      })
      .then(res => {
         if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
         return res.json();
      })
      .then(data => {
         console.log(data);
         console.log(`You are in ${data.city}, ${data.country}`);

         return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
      })
      .then(res => {
         if (!res.ok) throw new Error(`Country not found (${res.status})`);

         return res.json();
      })
      .then(data => renderCountry(data[0]))
      .catch(err => console.error(`${err.message} 💥`));
};

btn.addEventListener('click', whereAmI);
