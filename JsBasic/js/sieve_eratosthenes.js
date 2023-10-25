/*
    Sieve of Eratosthenes - The sieve of Eratosthenes is one of the most efficient ways
    to find all of the smaller primes (below 10 million or so).
*/

// TODO: Adjust this script so it can work with the sieve.html file.
/*
var sieve = function (n) {
  "use strict";

  var array = [],
    primes = [],
    n = document.getElementById("num").value,
    i,
    j;

    array.push(true);
    array.push(true);

    for(i=2; i*i <= n; i++){
      if(array[i]){
        for(j = i*i; j<n; j+=i){
          array[j] = false;
        }
      }
    }
    for (i = 2; i <= n; i++) {
      if (array[i]) {
        primes.push(i);
      }
    }
  // TODO: Implement the sieve of eratosthenes algorithm to find all the prime numbers under the given number.

  return primes;
};
function findPrimes() {
  "use strict";
  var n = parseInt(document.getElementById("num").value);
  var val = sieve(n);
  console.log(val);
  document.getElementById('primes').innerHTML=val;
  return val;
}

console.log(sieve(1000000));
*/
function sieve() {
  "use strict";

  var array = [],
      primes = [],
      n = document.getElementById("num").value,
      i,
      j;

  for (i = 0; i <= n; i++) {
      array.push(true);
  }

  array[0] = array[1] = false;

  for (i = 2; i * i <= n; i++) {
      if (array[i]) {
          for (j = i * i; j <= n; j += i) {
              array[j] = false;
          }
      }
  }

  for (i = 2; i <= n; i++) {
      if (array[i]) {
          primes.push(i);
      }
  }

  document.getElementById('primes').innerHTML = primes.join(', ');
  return primes;
}

function findPrimes() {
  "use strict";
  sieve();
}

console.log(sieve(1000000));