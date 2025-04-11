const Car = require("../domain/car");
const ParkingTicket = require("../domain/parking-ticket");
const ParkingLot = require("../domain/parking-lot");
const Attendant = require("../domain/attendant")

describe("Park", () => {
    it("should return ParkingTicket object when we park Car object with Attendant", () => {
        // Given
        const parkingLot = new ParkingLot(20);
        const car = new Car("B1234ABC");
        const attendant = new Attendant(parkingLot);
    
        // When
        const result = attendant.park(car);

        // Then
        const expectedResult = ParkingTicket;
        expect(result).toBeInstanceOf(expectedResult);
    });

    it("should return Invalid Parking Lot when attendant park to Invalid Parking Lot", () => {
        // Given
        const parkingLot = "ABC Parking Lot";
        const car = new Car("B1234ABC");
        
        // When
        const result = () => new Attendant(parkingLot);

        // Then
        expect(result).toThrow("Invalid Parking Lot");
    });
});

describe("Unpark", () => {
    it("should return Car object when we unpark Car object with Attendant", () => {
        // Given
        const parkingLot = new ParkingLot(20);
        const car = new Car("B1234ABC");
        const attendant = new Attendant(parkingLot);
        const ticket = attendant.park(car);
    
        // When
        const result = attendant.unpark(ticket, car.plate);

        // Then
        expect(result).toBe(car);
    });
});