const Car = require("../domain/car");
const ParkingTicket = require("../domain/parking-ticket");
const ParkingLot = require("../domain/parking-lot");

describe("Park", () => {
    it("should return ParkingTicket object when we park Car object", () => {
        // Given
        const parkingLot = new ParkingLot(20);
        const car = new Car("B1234ABC");
    
        // When
        const result = parkingLot.park(car);

        // Then
        const expectedResult = ParkingTicket;
        expect(result).toBeInstanceOf(expectedResult);
    });

    it("should return No available spaces when we park Car object", () => {
        // Given
        const parkingLot = new ParkingLot(0);
        const car = new Car("B1234ABC");
    
        // When
        const result = () => parkingLot.park(car);

        // Then
        expect(result).toThrow("No available spaces");
    });

    it("should return Invalid car when we park random car", () => {
        // Given
        const parkingLot = new ParkingLot(20);
        const car = "B1234ABC";
    
        // When
        const result = () => parkingLot.park(car);

        // Then
        expect(result).toThrow("Invalid car");
    });

    it("should return Car is required when we park undefined", () => {
        // Given
        const parkingLot = new ParkingLot(20);
        const car = undefined;
    
        // When
        const result = () => parkingLot.park(car);

        // Then
        expect(result).toThrow("Car is required");
    });
});

describe("Unpark", () => {
    it("should return Car object when we unpark Car object", () => {
        // Given
        const parkingLot = new ParkingLot(20);
        const car = new Car("B1234ABC");
        const ticket = parkingLot.park(car);
    
        // When
        const result = parkingLot.unpark(ticket, car.plate);

        // Then
        expect(result).toBe(car);
    });

    it("should return Invalid ticket when we unpark random ticket", () => {
        // Given
        const parkingLot = new ParkingLot(20);
        const car = new Car("B1234ABC");
        const ticket = "TICKET-001";
    
        // When
        const result = () => parkingLot.unpark(ticket, car.plate);

        // Then
        expect(result).toThrow("Invalid ticket");
    });

    it("should return Invalid ticket or car when we unpark Car object with wrong plate", () => {
        // Given
        const parkingLot = new ParkingLot(20);
        const car = new Car("B1234ABC");
        const ticket = parkingLot.park(car);
    
        // When
        const result = () => parkingLot.unpark(ticket, "B0000XYZ");

        // Then
        expect(result).toThrow("Invalid ticket or car");
    });
});