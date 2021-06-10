const { expect } = require("@jest/globals")

test('console log', () => {
    expect('hola').toBe('hola')
    expect(1).toBe(1)
})