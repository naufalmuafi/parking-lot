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

    isLotFull() {
        return this.#availableSpaces < 1;
    }

    isCarAlreadyParked(car) {
        return Object.values(this.#lot).map(dataCar => dataCar.car.plate).includes(car.plate);
    }

    getKeyNumber(car, index) {
        const ticketId = Math.random().toString(36).substring(2,7);
        this.#lot[ticketId] = {
            car: car,
            lot_location: index,
        };
        return ticketId;
    }

    park(car) {
        if (!car) throw new Error("Car is required");
        if (!(car instanceof Car)) throw new Error("Invalid car");
        if (this.#availableSpaces === 0) throw new Error("No available spaces");
        
        this.#parkingSlot.push(car);
        this.#availableSpaces--;
        const carIndex = this.#parkingSlot.indexOf(car);
        const ticketNumber = this.getKeyNumber(car, carIndex);
        
        return new ParkingTicket(ticketNumber);
    }

    unpark(ticket, carPlate) {
        if (!(ticket instanceof ParkingTicket)) throw new Error("Invalid ticket");
        
        if (this.#lot[ticket.ticketNumber].car.plate === carPlate) {
            const customer_car = this.#lot[ticket.ticketNumber].car;
            this.#parkingSlot.splice(this.#lot[ticket.ticketNumber].index, 1);
            this.#availableSpaces++;
            
            delete this.#lot[ticket.ticketNumber];
            return customer_car;
        }
        throw new Error("Invalid ticket or car");
    }
}

module.exports = ParkingLot;