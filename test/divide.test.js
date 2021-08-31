const {divide} = require("../src/divide")

describe("division of 2 numbers validation",() => {
   test("requires 2 numbers  to divide",() =>{
   expect(divide(12,3)).toBe(4)
   expect(divide(9,3)).toBe(3)
    })
    it("return has to be a number datatype",() =>{
        expect(typeof divide(12,3)).toEqual("number")
    })
it("return decimals",() =>{
    expect(divide(7,2)).toBe(3.5)
})
it("returns null when 2 parameters are not passed",()=>{
    expect(divide(3)).toBeNull
    expect(divide(2,4,5,6)).toBeNull
    expect(divide(18,3)).not.toBeNull
})
  })