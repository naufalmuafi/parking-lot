const Car = require("./src/domain/car");
const ParkingTicket = require("./src/domain/parking-ticket");
const ParkingLot = require("./src/domain/parking-lot");

const car1 = new Car("B1234ABC");
const car2 = new Car("B3421PQR");
const car3 = new Car("B5555XYZ");

const parkingLot = new ParkingLot(20);

ticket_car1 = parkingLot.park(car1);
ticket_car2 = parkingLot.park(car2);

console.log(ticket_car1);
console.log(ticket_car2);

console.log(parkingLot.unpark(ticket_car1, car1.plate));
console.log(parkingLot.unpark(ticket_car2, car2.plate));

ticket_car3 = parkingLot.park(car3);
console.log(ticket_car3);
console.log(parkingLot.unpark(ticket_car3, car3.plate));