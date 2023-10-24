//DONE
/*
    Prime Factorization - Have the user enter a number and find
    all Prime Factors (if there are any) and display them.
*/
function primes() {
  "use strict";
  var n = document.getElementById("num").value;
  var val = getPrimeFactors(n);
  console.log(val);
  document.getElementById('pf').innerHTML=val;
  return val;
}


var getPrimeFactors = function (n) {
  "use strict";

  function isPrime(n) {
    var i;

    for (i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  var i,
    sequence = [];

  //TODO: Check which numbers are factors of n and also check if
  // that number also happens to be a prime
  if(isPrime(n)){
    return [n];
  }
  for (i = 2; i <= n; i++) {1
    if (n % i === 0) {
      sequence.push(i);
      n /= i;
    }
  }
  return sequence;
};

// the prime factors for this number are: [ 2, 3, 5, 7, 11, 13 ]
console.log(getPrimeFactors(30030));
