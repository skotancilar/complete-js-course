'use strict';

/* function Car(make, speed = 0) {
   this.make = make;
   this.speed = speed;
}
Car.prototype.accelerate = function () {
   this.speed += 10;
   console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.brake = function () {
   this.speed > 0 ? this.speed -= 5 : this.speed = 0;
   console.log(`${this.make} is going at ${this.speed} km/h`);
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95)

bmw.accelerate()
bmw.accelerate()
bmw.accelerate()
mercedes.accelerate()
mercedes.accelerate()
mercedes.accelerate()
bmw.brake();
bmw.brake();
mercedes.brake();
mercedes.brake(); */

/* class CarCl {
   constructor(make, speed) {
      this.make = make;
      this.speed = speed;
   }

   accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
      return this;
   }

   brake() {
      this.speed > 0 ? this.speed -= 5 : this.speed = 0;
      console.log(`${this.make} is going at ${this.speed} km/h`);
      return this;
   }
}

class EvCl extends CarCl {
   #charge;
   constructor(make, speed, charge) {
      super(make, speed);
      this.#charge = charge;
   }

   chargeBattery(chargeTo) {
      this.#charge = chargeTo;
      return this;

   }

   accelerate() {
      this.speed += 20;
      this.#charge--;
      console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}`);
      return this;
   }
}

const rivian = new EvCl('Rivian', 120, 23);

rivian.accelerate().brake().chargeBattery(50).accelerate() */


// const Ev = function (make, speed, charge) {
//    Car.call(this, make, speed)
//    this.charge = charge;
// }


// Ev.prototype = Object.create(Car.prototype);

// Ev.prototype.chargeBattery = function (chargeTo) {
//    return this.charge = chargeTo;
// }

// Car.prototype.accelerate = function () {
//    this.speed += 20;
//    this.charge -= 1;
//    console.log(`${this.make} is going at ${this.speed} km/h, h, with a charge of ${this.charge}`);
// }

// Car.prototype.brake = function () {
//    this.speed > 0 ? this.speed -= 5 : this.speed = 0;
//    console.log(`${this.make} is going at ${this.speed} km/h`);
// }


