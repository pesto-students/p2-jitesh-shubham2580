const mathOperations = require('./operation');

test("test of addition", ()=>{
    expect(mathOperations.sum(1,2)).toBe(3);
    expect(mathOperations.diff(4,2)).toBe(2);
    expect(mathOperations.product(2,2)).toBe(4);
})