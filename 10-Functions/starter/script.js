'use strict';
////////////////////////CLOSURES////////////////////////

let foo;
const secureBooking = function () {
   let passengerCount = 0;
   let x = 10
   // return funtion () { "kodlar" } 'da yapılıp global scopeta secureBooking foo'ya eşitlenebilir.
   foo = function () {
      passengerCount++;
      x--;
      if (x > 0) { console.log(`${passengerCount} passengers bought ticket and ${x} seat remain`); }
      else {
         console.log(`No seat left`);
      }
   }
};

const goo = function () {
   let a = 2;
   console.log(a);
   foo = function () {
      a *= 2;
      console.log(a)
   }
};


secureBooking();
foo(); foo(); foo(); foo(); //4 passengers bought ticket and 6 seat remain
//RESET secureBooking()
goo(); foo(); foo(); foo(); //16
//RESET foo()
secureBooking();
foo(); foo(); foo(); foo(); //4 passengers bought ticket and 6 seat remain
//RESET secureBooking()
goo();
foo(); foo(); foo(); foo(); //16
console.dir(foo);
// document.querySelector('.poll').addEventListener('click', booking);

const boardPassengers = function (n, wait) {
   const perGroup = n / 3;

   setTimeout(function () {
      console.log(`We are now boarding all ${n} passengers`);
      console.log(`There are 3 groups, each with ${perGroup} passengers`);
   }, wait * 1000);

   console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000; // colosure's perGroup in use (180)
boardPassengers(180, 3);




/* //////////////////////// CODING CHALANGE ////////////////

const poll = {
   question: "What is your favourite programming language?",
   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
   // This generates [0, 0, 0, 0]. More in the next section!
   answers: new Array(4).fill(0),
   registerNewAnswer() {
      const x = this.options.join('\n');
      const ans = prompt(`${this.question}
${x}
Write option number`);
      console.log(ans);

      switch (ans) {
         case '0' || 0:
            this.answers[0]++
            break;
         case '1':
            this.answers[1]++
            break;
         case '2':
            this.answers[2]++
            break;
         case '3':
            this.answers[3]++
            break;
         default:
            alert('Please try to reply between 0 and 3!')
            poll.registerNewAnswer();
            break;

      }
      this.displayResults()
   },
   displayResults(type = 'array') {

      const x = this.answers.join(',')

      if (type === 'array') {
         console.log(this.answers);
      }
      else if (type === 'string') {
         console.log(`Poll results are ${x} `)
      }
   }
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.registerNewAnswer();

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
*/



/* const greet = greeting =>
   name => console.log(`${greeting} ${name}`);

greet('Hello')('Jonas');

const thy = {
   airline: 'Turkish Airlines',
   iataCode: 'THY',
   bookings: [],

   book(flightNum, name) {
      console.log(
         `${name} booked a seat at ${this.airline} flight ${this.iataCode}${flightNum}`
      );
      this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
   },
}

thy.book(239, 'Sefa Kotancılar')

const qatar = {
   airline: 'Qatar Airlines',
   iataCode: 'QA',
   bookings: [],
};

const book = thy.book;

book.call(qatar, 231, 'Saleha Nasir');

console.log(qatar);

const emir = {
   airline: 'Emirates Airlines',
   iataCode: 'EA',
   bookings: [],
};

book.call(emir, 412, 'Sena Kotancılar');
console.log(emir.bookings);

const flightData = [583, 'Ahmet Nasir'];

// book.apply(emir, flightData)

book.call(emir, ...flightData); */

