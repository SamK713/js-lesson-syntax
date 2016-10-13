'use strict'

const noArgsNoReturn =
  function () {

  }

const noArgsSimpleReturn =
  function () {
    return 2 + 2
  }




const noArgsComplexReturn =
  function () {
    const result = 2 + 2
    console.log(result)
    return result
  }

const oneArgSimpleReturn =
  function (n) {
    return n + 2
  }

const multipleArgsSimpleReturn =
  function (a, b) {
    return a + b
  }

const oneDefaultArg =
  function (n = 0) {
    return n + 2
  }

const twoArgsOneDefault =
  function (n, m = 0) {
    return n + m
  }

const restParams =
  function (...args) {
    return args.length
  }

const oneArgRestParams =
  function (n, ...args) {
    return n + args.length
  }

const buildObject =
  function (name, manager) {
    return {
      name: name,
      manager: manager
    }
  }
