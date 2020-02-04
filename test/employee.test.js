'use strict'

const Employee = require("../lib/employee");

describe("Employee", () => {
    describe('initialization', () => {
        it('should create an object with an id property', () => {
            //arrange and act
            const employee = new Employee(0);
            //assert
            expect(employee.id).toEqual(0);

        });

    });

});