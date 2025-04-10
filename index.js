const Car = require("./src/domain/car");
const ParkingTicket = require("./src/domain/parking-ticket");
const ParkingLot = require("./src/domain/parking-lot");

const car1 = new Car("B1234PQR");
const car2 = new Car("B3421PQR");

const parkingLot = new ParkingLot(20);

console.log(parkingLot.park(car1));
console.log(parkingLot.park(car2));