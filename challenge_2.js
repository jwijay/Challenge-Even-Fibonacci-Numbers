exports.sumOfEvenFibonacciNumbers = function(n){
  //setting up oneFibBefore, twoFibBefore, and current
  //O YA, sum. That's already set up.
  var oneFibBefore = 1;
  var twoFibBefore = 0;
  var current = 1;
  var sum = 0;

  //we will check every single number from 1 through n.
  while(current <= n) {
    //check if current is a FIB number AND is EVEN (later).
    if ((current === oneFibBefore + twoFibBefore)) {
      //it's a fib! and even! so we add that badboy to sum.
      if (current % 2 === 0) {
        sum += current;
      }
      //let's shift our "memory" of the previous 2 fib numbers
      //(shift numbers REGARDLESS of even-ness)
      twoFibBefore = oneFibBefore;
      oneFibBefore = current;
    }
    //increment current, so we can check ALL THE NUMBERS!!
    current++;
  }
  return sum;
};