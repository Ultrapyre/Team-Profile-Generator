const Employee = require("../lib/Employee")

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create a new employee with a name, id and an email", () => {
            const wageslave = new Employee("Bob", 1, "Bob@fakeemails.com");
            expect(wageslave.name).toEqual("Bob");
            expect(wageslave.id).toEqual(1);
            expect(wageslave.email).toEqual("Bob@fakeemails.com");
        })
    })

    describe("getName", () => {
        it("should return the employee's name", () => {
            const result = new Employee("Bob", 1, "Bob@fakeemails.com").getName();

            expect(result).toEqual("Bob");
        });
    });
    describe("getId", () => {
        it("should return the employee's ID", () => {
            const result = new Employee("Bob", 1, "Bob@fakeemails.com").getId();

            expect(result).toEqual(1);
        });
    })
    describe("getEmail", () => {
        it("should return the employee's email", () => {
            const result = new Employee("Bob", 1, "Bob@fakeemails.com").getEmail();

            expect(result).toEqual("Bob@fakeemails.com");
        });
    })
    describe("getRole", () => {
        it("should return 'Employee'", () => {
            const result = new Employee("Bob", 1, "Bob@fakeemails.com").getRole();

            expect(result).toEqual("Employee");
        });
    })
})