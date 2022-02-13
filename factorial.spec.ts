import { factorial, getFactorials } from './index'
describe("factorial", () => {
    it("Negative number", () => {
        expect(factorial(-1)).toBeFalsy()
    }) 
    it("5! should be 120", () => {
        expect(factorial(5)).toBe(120)
    }) 
})

describe("getFactorials", () => {
    it("Passing array as a parameter", () => {
        expect(getFactorials([3, -1, 2])).toEqual([6, false, 2])
    }) 
})

