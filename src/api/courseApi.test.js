const courseApi = require("./courseApi")
// @ponicode
describe("courseApi.getCourses", () => {
    test("0", () => {
        let callFunction = () => {
            courseApi.getCourses()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("courseApi.deleteCourse", () => {
    test("0", () => {
        let callFunction = () => {
            courseApi.deleteCourse(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            courseApi.deleteCourse(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            courseApi.deleteCourse("https://croplands.org/app/a/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            courseApi.deleteCourse(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            courseApi.deleteCourse("https://accounts.google.com/o/oauth2/revoke?token=%s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            courseApi.deleteCourse(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
