const Car = require("./src/domain/car");
const ParkingLot = require("./src/domain/parking-lot");
const Attendant = require("./src/domain/attendant");


// create new ParkingLot
const parkingLot = new ParkingLot(1);
const parkingLot2 = new ParkingLot(1);
const parkingLot3 = new ParkingLot(30);


// create new Car
const car1 = new Car("B1234ABC");
const car2 = new Car("B3421PQR");
const car3 = new Car("B5555XYZ");


// // park car
// ticket_car1 = parkingLot.park(car1);
// ticket_car2 = parkingLot.park(car2);
// ticket_car3 = parkingLot.park(car3);

// console.log(ticket_car1);
// console.log(ticket_car2);
// console.log(ticket_car3);


// // unpark car
// console.log(parkingLot.unpark(ticket_car1, car1.plate));
// console.log(parkingLot.unpark(ticket_car2, car2.plate));
// console.log(parkingLot.unpark(ticket_car3, car3.plate));


// create new Attendant
const attendant = new Attendant();


// register parking lot for attendant
attendant.register(parkingLot);
attendant.register(parkingLot2);
attendant.register(parkingLot3);


// park car using attendant
vallet_ticket_car1 = attendant.park(car1);
vallet_ticket_car2 = attendant.park(car2);
// vallet_ticket_car3 = attendant.park(car3);
console.log(vallet_ticket_car1);
console.log(vallet_ticket_car2);
// console.log(vallet_ticket_car3);


// unpark car using attendant
console.log(attendant.unpark(vallet_ticket_car1, car1.plate));
console.log(attendant.unpark(vallet_ticket_car2, car2.plate));


// // park car using attendant
// vallet_ticket_car3 = attendant.park(car3);
// console.log(vallet_ticket_car3);
// // park the same car using attendant
// vallet_ticket_car4 = attendant.park(car3);
// console.log(vallet_ticket_car4);