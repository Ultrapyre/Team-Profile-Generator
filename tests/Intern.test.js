const Intern = require("../lib/Intern")

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create a new intern with a name, id, an email and a school", () => {
            const student = new Intern("Alec", 3, "Alec@fakeemails.com", "WA University");
            expect(student.name).toEqual("Alec");
            expect(student.id).toEqual(3);
            expect(student.email).toEqual("Alec@fakeemails.com");
            expect(student.school).toEqual("WA University");
        })
    })

    describe("getName", () => {
        it("should return the intern's name", () => {
            const result = new Intern("Alec", 3, "Alec@fakeemails.com", "WA University").getName();

            expect(result).toEqual("Alec");
        });
    });
    describe("getId", () => {
        it("should return the intern's ID", () => {
            const result = new Intern("Alec", 3, "Alec@fakeemails.com", "WA University").getId();

            expect(result).toEqual(3);
        });
    })
    describe("getEmail", () => {
        it("should return the intern's email", () => {
            const result = new Intern("Alec", 3, "Alec@fakeemails.com", "WA University").getEmail();

            expect(result).toEqual("Alec@fakeemails.com");
        });
    })
    describe("getSchool", () => {
        it("should return the intern's school", () => {
            const result = new Intern("Alec", 3, "Alec@fakeemails.com", "WA University").getSchool();

            expect(result).toEqual("WA University");
        });
    })
    describe("getRole", () => {
        it("should return 'Intern'", () => {
            const result = new Intern("Alec", 3, "Alec@fakeemails.com", "WA University").getRole();

            expect(result).toEqual("Intern");
        });
    })
})