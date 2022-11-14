const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create a new engineer with a name, id, an email and a Github username", () => {
            const engi = new Engineer("Clyde", 2, "Clyde@fakeemails.com", "Engiboi");
            expect(engi.name).toEqual("Clyde");
            expect(engi.id).toEqual(2);
            expect(engi.email).toEqual("Clyde@fakeemails.com");
            expect(engi.github).toEqual("Engiboi");
        })
    })

    describe("getName", () => {
        it("should return the engineer's name", () => {
            const result = new Engineer("Clyde", 2, "Clyde@fakeemails.com", "Engiboi").getName();

            expect(result).toEqual("Clyde");
        });
    });
    describe("getId", () => {
        it("should return the engineer's ID", () => {
            const result = new Engineer("Clyde", 2, "Clyde@fakeemails.com", "Engiboi").getId();

            expect(result).toEqual(2);
        });
    })
    describe("getEmail", () => {
        it("should return the engineer's email", () => {
            const result = new Engineer("Clyde", 2, "Clyde@fakeemails.com", "Engiboi").getEmail();

            expect(result).toEqual("Clyde@fakeemails.com");
        });
    })
    describe("getGithub", () => {
        it("should return the engineer's Github username", () => {
            const result = new Engineer("Clyde", 2, "Clyde@fakeemails.com", "Engiboi").getGithub();

            expect(result).toEqual("Engiboi");
        });
    })
    describe("getRole", () => {
        it("should return 'Engineer'", () => {
            const result = new Engineer("Clyde", 2, "Clyde@fakeemails.com", "Engiboi").getRole();

            expect(result).toEqual("Engineer");
        });
    })
})