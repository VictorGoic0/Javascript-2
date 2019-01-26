// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function multiplyNums(a, b) {
  return a * b
}
function whatIsATimesB(a, b, cb) {
  return `A times B is equal to ${cb(a, b)}.`
}
console.log(whatIsATimesB(10, 20, multiplyNums))
// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  return function(input) {
    return input+1
  }
};
const newCounter = counter();
console.log(newCounter(0)); // 1
console.log(newCounter(1)); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
