'use strict'

const noArgsNoReturn =
  () => {

  }

const noArgsSimpleReturnWithBlock =
  () => {
    return 2 + 2
  }

const noArgsSimpleReturn =
  () => 2 + 2

const noArgsComplexReturn =
  () => {
    const result = 2 + 2
    console.log(result)
    return result
  }

const oneArgSimpleReturn =
  n => n + 2



const multipleArgsSimpleReturn =
  (a, b) => a + b



const oneDefaultArg =
  (n = 0) => n + 2



const twoArgsOneDefault =
  (n, m = 0) => n + m



const restParams =
  (...args) => args.length



const oneArgRestParams =
  (n, ...args) => n + args.length



const buildObject =
  (name, manager) => ({
    name: name,
    manager: manager
  })

console.log(`const obj = buildObject('Peter', 'Michael')`)
const obj = buildObject('Peter', 'Michael')
console.log(`obj:`)
console.log(obj)
obj.salary = 100
console.log(`obj:`)
console.log(obj)
console.log(`name: ${obj.name}`)
console.log(`manager: ${obj.manager}`)
console.log(`salary: ${obj.salary}`)
