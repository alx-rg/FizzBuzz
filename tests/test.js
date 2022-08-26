const fb = require('../fizzbuzz')

//-----------------------------------------------------

test ('C1~Check each constant is correct', () => {
  const fizz = fb.FIZZ
  const buzz = fb.BUZZ
  const fizzbuzz = fb.FIZZBUZZ
  expect(fizz).toBe("fizz")
  expect(buzz).toBe("buzz")
  expect(fizzbuzz).toBe("fizzbuzz")
})

//-----------------------------------------------------

test ('C2~Testing isFizzy true (x of 3)', () => {
  const trueTest = fb.isFizzy(6)
  expect(trueTest).toBe(true)
}) 

test ('C2~Testing isFizzy false (!= x of 3)', () => {
  const falseTest = fb.isFizzy(5)
  expect(falseTest).toBe(false)
})

//-----------------------------------------------------

test ('C3~Testing isBuzzy true (x of 5)', () => {
  const trueTest = fb.isBuzzy(10)
  expect(trueTest).toBeTruthy()
}) 

test ('C3~Testing isBuzzy false (!= x of 5)', () => {
  const falseTest = fb.isBuzzy(8)
  expect(falseTest).toBeFalsy()
})

//-----------------------------------------------------

test ('C4~Testing fizzyBuzzy is true', () => {
  const div3True = fb.fizzyBuzzy(3)
  const div5True = fb.fizzyBuzzy(5)
  const divBothTrue = fb.fizzyBuzzy(15) 
  expect(div3True).toBe(fb.FIZZ)
  expect(div5True).toBe(fb.BUZZ)
  expect(divBothTrue).toBe(fb.FIZZBUZZ)
})

test ('C4~Testing fizzyBuzzy is false', () => {
  const div3True = fb.fizzyBuzzy(7)
  const div5True = fb.fizzyBuzzy(22)
  const divBothTrue = fb.fizzyBuzzy(11) 
  expect(div3True).toBe("")
  expect(div5True).toBe("")
  expect(divBothTrue).toBe("")
})

//-----------------------------------------------------

test ('C5~FizzBuzz count function test', () => {
  const countTest = fb.fizzBuzz(15)
  expect(countTest.count).toBe(15)
  expect(countTest.fizz).toBe(4)
  expect(countTest.buzz).toBe(2)
  expect(countTest.fizzBuzz).toBe(1)
})
// obj returned is : {"buzz": 2, "count": 15, "fizz": 4, "fizzBuzz": 1}

//-----------------------------------------------------

test ('C7~newFizzBuzz count function test Parameterized', () => {
  const countTest = fb.newFizzBuzz(15, fizzOn = 3, buzzOn = 5)
  expect(countTest.count).toBe(15)
  expect(countTest.fizz).toBe(4)
  expect(countTest.buzz).toBe(2)
  expect(countTest.fizzBuzz).toBe(1)
})
// obj returned is : {"buzz": 2, "count": 15, "fizz": 4, "fizzBuzz": 1}
