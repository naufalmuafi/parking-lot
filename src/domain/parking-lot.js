const Car = require("./car");
const ParkingTicket = require("./parking-ticket");

class ParkingLot {
    #availableSpaces;
    #parkingSlot;
    #lot;
    
    constructor(capacity) {
        this.#availableSpaces = capacity;
        this.#parkingSlot = [];
        this.#lot ={};
    }

    getKeyNumber(car, index) {
        const ticketId = Math.random().toString(36).substring(2,7);
        this.#lot[ticketId] = {
            car: car,
            index: index,
        };
        return ticketId;
    }

    park(car) {
        if (!car) throw new Error("Car is required");
        if (!(car instanceof Car)) throw new Error("Invalid car");
        if (this.#availableSpaces === 0) throw new Error("No available spaces");

        this.#availableSpaces--;
        this.#parkingSlot.push(car);
        const carIndex = this.#parkingSlot.indexOf(car);
        const ticketNumber = this.getKeyNumber(car, carIndex);

        return new ParkingTicket(ticketNumber);
    }

    unpark(ticketNumber, carPlate) {
        if (!(ticketNumber instanceof ParkingTicket)) throw new Error("Invalid ticket");
        
        if (this.#lot[ticketNumber.ticketNumber].car.plate === carPlate) {
            this.#availableSpaces++;
            this.#parkingSlot.splice(this.#lot[ticketNumber.ticketNumber].index, 1);
            const customer_car = this.#lot[ticketNumber.ticketNumber].car;

            delete this.#lot[ticketNumber.ticketNumber];
            return customer_car;
        }
        throw new Error("Invalid ticket or car");
    }
}

module.exports = ParkingLot;