const array = ['hello', 'world']
const hello = array[0]
const world = array[1]

const nums = [1, 2, 3]
const one = nums[0]
const three = nums[2]

const names = ['peter', 'michael', 'trey']
const peter = names[0]
const others = names.slice(1, names.length)

const nested = [[0, 'hello'], [1, 'world']]
const z = nested[0][0]
const h = nested[0][1]
const o = nested[1][0]
const w = nested[1][1]

function name (array) {
  const first = array[0]
  const second = array[1]
  console.log(first)
  console.log(second)
}

const arrowName =
  (array) => {
    const first = array[0]
    const second = array[1]
    return first + second
  }
