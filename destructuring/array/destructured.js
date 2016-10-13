const array = ['hello', 'world']
const [hello, world] = array
array.push('whatever')
console.log(`const array = ['hello', 'world']`)
console.log(array)
console.log(`const [hello, world] = array`)
console.log(hello)
console.log(world)

const nums = [1, 2, 3]
const [one, , three] = nums
console.log(`const nums = [1, 2, 3]`)
console.log(nums)
console.log(`const [one, , three] = nums`)
console.log(`one: ${one}`)
console.log(`three: ${three}`)

const names = ['peter', 'michael', 'trey']
const [peter, ...others] = names
console.log(`const names = ['peter', 'michael', 'trey']`)
console.log(names)
console.log(`const [peter, ...others] = names`)
console.log(`peter: ${peter}`)
console.log(`others:`)
console.log(others)

const nested = [[0, 'hello'], [1, 'world']]
const [[z, h], [o, w]] = nested
console.log(`const nested = [[0, 'hello'], [1, 'world']]`)
console.log(nested)
console.log(`const [[z, h], [o, w]] = nested`)
console.log(`z: ${z}`)
console.log(`h: ${h}`)
console.log(`o: ${o}`)
console.log(`w: ${w}`)


function name ([first, second]) {
  console.log(first)
  console.log(second)
}



const arrowName =
  ([first, second]) => first + second
