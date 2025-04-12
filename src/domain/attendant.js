const ParkingLot = require('./parking-lot');

class Attendant {
    #parkingLots;
    #parkData;
    
    constructor() {
        this.#parkingLots = [];
        this.#parkData = []
    }
    
    register(parkingLot) {
        if (!(parkingLot instanceof ParkingLot)) throw new Error("Invalid Parking Lot");
        this.#parkingLots.push(parkingLot);
    }

    findLot() {
        for (let i = 0; i < this.#parkingLots.length; i++) {
            if (!this.#parkingLots[i].isLotFull()) return this.#parkingLots[i];
            // console.log(`Found available parking lot at Parking Lot ${i}`);
        }
    }

    park(car) {
        if (this.#parkingLots.some(parkingLot => parkingLot.isCarAlreadyParked(car))) {
            return "Sorry, the car is already in the parking area";
        }
        const parkingLot = this.findLot();
        const parkingTicket = parkingLot.park(car);

        // store Lot data based on ticket
        this.#parkData[parkingTicket.ticketNumber] = {
            parkingLot: parkingLot,
            carPlate: car.plate,
        };
        return parkingTicket;
    }

    unpark(parkingTicket, carPlate) {
        const parkingLot = this.#parkData[parkingTicket.ticketNumber].parkingLot;
        const customer_car = parkingLot.unpark(parkingTicket, carPlate);

        delete this.#parkData[parkingTicket];  
        return customer_car;
    }
}

module.exports = Attendant;