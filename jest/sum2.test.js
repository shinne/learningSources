const sum = require('./sum')
test('adds 1 + 2 to equals 3',() => {
    expect(sum(2,2)).toBe(4)
})