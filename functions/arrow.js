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
