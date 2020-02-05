'use strict'

const Employee = require("../lib/employee");

describe("Employee", () => {

    let employee;

    beforeEach(() => {
        //arrange and act
        employee = new Employee(0, 'ji', 'commander');

    });

    describe('initialization', () => {
        it('should create an object with an id property', () => {
            //assert
            expect(employee.id).toEqual(0);

        });

        it('should create a name property', () => {
            //assert
            expect(employee.name).toEqual('ji');
        });
        it('should create a title property', () => {
            //assert
            expect(employee.title).toEqual('commander');

        });
    });

});