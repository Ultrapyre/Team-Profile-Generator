const Manager = require("../lib/Manager")

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create a new Manager with a name, id, an email and an office number", () => {
            const headhoncho = new Manager("Boss", 4, "Boss@fakeemails.com", 1);
            expect(headhoncho.name).toEqual("Boss");
            expect(headhoncho.id).toEqual(4);
            expect(headhoncho.email).toEqual("Boss@fakeemails.com");
            expect(headhoncho.officenumber).toEqual(1);
        })
    })

    describe("getName", () => {
        it("should return the Manager's name", () => {
            const result = new Manager("Boss", 4, "Boss@fakeemails.com", 1).getName();

            expect(result).toEqual("Boss");
        });
    });
    describe("getId", () => {
        it("should return the Manager's ID", () => {
            const result = new Manager("Boss", 4, "Boss@fakeemails.com", 1).getId();

            expect(result).toEqual(4);
        });
    })
    describe("getEmail", () => {
        it("should return the Manager's email", () => {
            const result = new Manager("Boss", 4, "Boss@fakeemails.com", 1).getEmail();

            expect(result).toEqual("Boss@fakeemails.com");
        });
    })
    describe("getRole", () => {
        it("should return 'Manager'", () => {
            const result = new Manager("Boss", 4, "Boss@fakeemails.com", 1).getRole();

            expect(result).toEqual("Manager");
        });
    })
})