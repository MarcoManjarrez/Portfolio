//Almost done
/*
    Fibonacci Sequence - Enter a number and have the program
    generate the Fibonacci sequence to that number or to the Nth number.
*/
// This array will keep memory of the previous fibonacci numbers
var memo = {0:0, 0:1};


function f(n) {
  var value=0;
  var nextNumber;
  if (memo.hasOwnProperty(n)) {
    value = memo[n];
  } else {
    n1 = 1;
    n2=1;
   for(let i=0; i<n; i++){
    nextNumber = n1+n2;
    n1=n2;
    n2 = nextNumber;
    value = nextNumber
    memo[n] = value;
   }
  }
  return value;
}

function fibonacci() {
  "use strict";
  var n = document.getElementById("num").value;
  var val = f(n);
  console.log(val);
  document.getElementById('fibonacciLbl').innerHTML=val;
  return val;
}