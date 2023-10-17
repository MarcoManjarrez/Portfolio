/*
    Fibonacci Sequence - Enter a number and have the program
    generate the Fibonacci sequence to that number or to the Nth number.
*/
// This array will keep memory of the previous fibonacci numbers
var memo = {};
function fibonacci() {
  "use strict";
  var n = document.getElementById("num").value;
  var val = f(n);
  document.getElementById('fibonacciLbl').innerHTML=(val);
  return val;
}

function f(n) {
  var value;
  var nextNumber;
  if (memo.hasOwnProperty(n)) {
    value = memo[n];
  } else {
   for(let i=0; i<n; i++){
    nextNumber = n1+n2;
    n1=n2;
    n2 = nextNumber;
   }
    memo[n] = value;
  }
  return value;
}
