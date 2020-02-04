'use strict'

const Employee = require("../lib/employee");

describe("Employee", () => {

    let employee;

    beforeEach(() => {
        //arrange and act
        employee = new Employee(0);

    });

    describe('initialization', () => {
        it('should create an object with an id property', () => {
            //assert
            expect(employee.id).toEqual(0);

        });

    });

});