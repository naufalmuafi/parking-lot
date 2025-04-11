const ParkingLot = require('./parking-lot');

class Attendant {
    #lot;
    #parkData;
    
    constructor() {
        this.#lot = [];
        this.#parkData = []
    }
    
    register(parkingLot) {
        if (!(parkingLot instanceof ParkingLot)) throw new Error("Invalid Parking Lot");
        this.#lot.push(parkingLot);
    }

    findLot() {
        for (let i = 0; i < this.#lot.length - 1; i++) {
            if (!this.#lot[i].isLotFull()) return this.#lot[i];
        }
    }

    park(car) {
        if (this.#lot.some(parkingLot => parkingLot.isCarAlreadyParked(car))) {
            return "Sorry, the car is already in the parking area";
        }
        
        const parkingLot = this.findLot();
        const parkingTicket = parkingLot.park(car);

        // store Lot data based on ticket
        this.#parkData[parkingTicket.ticketNumber] = {
            lot: parkingLot,
            carPlate: car.plate,
        };
        return parkingTicket;
    }

    unpark(parkingTicket, carPlate) {
        const parkingLot = this.#parkData[parkingTicket.ticketNumber].lot;
        const customer_car = parkingLot.unpark(parkingTicket, carPlate);

        delete this.#parkData[parkingTicket];
        
        return customer_car;
    }
}

module.exports = Attendant;