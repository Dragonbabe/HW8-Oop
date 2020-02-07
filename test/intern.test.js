'use strict';

const Intern = require('../lib/Intern');

describe('Intern', () => {

    let intern;

    beforeEach(() => {
        intern = new Intern("foo", 1, "test@test.com", "UCLA");
    });
    test('Can set school via constructor', () => {
        const testValue = 'UCLA';

        expect(intern.school).toBe(testValue);
    });

    test('getRole() should return "Intern"', () => {
        const testValue = 'Intern';

        expect(intern.getRole()).toBe(testValue);
    });

    test('Can get school via getSchool()', () => {
        const testValue = 'UCLA';

        expect(intern.getSchool()).toBe(testValue);
    });

});

