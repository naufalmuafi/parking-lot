const Car = require("./car");
const ParkingTicket = require("./parking-ticket");

class ParkingLot {
    #availableSpaces;
    #parkingSlot;
    
    constructor(capacity) {
        this.#availableSpaces = capacity;
        this.#parkingSlot = new Array(this.#availableSpaces);
    }

    park(car) {
        if (!car) throw new Error("Car is required");
        if (!(car instanceof Car)) throw new Error("Invalid car");
        if (this.#availableSpaces === 0) throw new Error("No available spaces");

        this.#availableSpaces--;
        this.#parkingSlot.push(car);

        const ticketNumber = car.plate + "-" + (this.#availableSpaces + 1);
        return new ParkingTicket(ticketNumber);
    }
}

module.exports = ParkingLot;