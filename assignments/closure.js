// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const closureFunc = () => {
  let arr = ['a', 'b', 'c'];
  return function(array) {
    arr = arr.concat(array);
    return arr;
  }
}
//let func = closureFunc();
//console.log(func(['d']));

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  var counter = 0;
  function foo() {
    counter = counter + 1;
    return counter;
  }
  return foo;
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  var counter = 0;
  var obj = {
    "increment": function() {
      return counter += 1;
    },
    "decrement": function() {
      return counter -= 1;
    }
  }
  return obj;
};
