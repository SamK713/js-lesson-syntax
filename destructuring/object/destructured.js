const employee = { name: 'Peter', manager: 'Michael'}
const { manager = 2, name } = employee
console.log(`const employee = { name: 'Peter'}`)
console.log(employee)
console.log(`const { manager, name } = employee`)
console.log(`manager: ${manager}`)
console.log(`name: ${name}`)
