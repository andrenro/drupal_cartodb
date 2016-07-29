$(document).ready(function(){

    MathHandler = (function(){
    //What is num1 percentage of num2?
    function percentage(num1,num2){
      return num1 * num2 / 100;
    }
    //How many percentage is num1 of num2?
    function percentageOf(num1,num2){
       return num1 * 100 / num2;
    }

    function percentageIncrease(offset, end){
      var diff = (end - offset);
      return (diff / offset) * 100;
    }

    function indexedToPercentageRemainder(index){
       return ((index * 100) - 100);
    }
    function meanValue(dividend,divisor){
      return dividend / divisor;
    }

    return {
        percentageOf: percentageOf,
        percentage: percentage,
        indexedToPercentageRemainder:indexedToPercentageRemainder,
        meanValue: meanValue,
        percentageIncrease: percentageIncrease
      }
  })();

});
