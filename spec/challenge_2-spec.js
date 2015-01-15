var challenge_2 = require("../challenge_2");
 
describe("Sum of even numbers in the fibonnaci sequence", function () {
  
  it("should return '10' for n=10", function () {
    var sum = challenge_2.sumOfEvenFibonacciNumbers(10);
    expect(sum).toBe(10);
  });

  // when your tests pass, uncomment the next test and
  // change the expected value to the correct result
  
   it("should return 'X' for n=4,000,000", function () {
     var sum = challenge_2.sumOfEvenFibonacciNumbers(4000000);
     expect(sum).toBe(4613732); // CHANGE THE VALUE OF X to the correct number
   });

});    