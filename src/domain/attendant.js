const ParkingLot = require('./parking-lot');

class Attendant {
    constructor(parkingLot) {
        if (!(parkingLot instanceof ParkingLot)) throw new Error("Invalid Parking Lot");
        this.parkingLot = parkingLot;
    }

    park(car) {
        return this.parkingLot.park(car);
    }

    unpark(ticketNumber, carPlate) {
        return this.parkingLot.unpark(ticketNumber, carPlate);
    }
}

module.exports = Attendant;