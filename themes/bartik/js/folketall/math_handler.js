$(document).ready(function(){


    MathHandler = (function(){

     function percentage(num1,num2){
      return num1 * num2 / 100;
    }

     function percentageOf(num1,num2){
       return num1 * 100 / num2;
     }

     function indexedToPercentageRemainder(index){
       return ((index * 100) - 100);
     }
     /*
     indexedEN = indexed expenditure needs
     eNeeds = calculated expenditure needs
     iRate = inhabitant rate
     should return million kroner
     */
     function frameFunding(indexedEN,eNeeds,iRate){
       return 0;
     }

      return {
        percentageOf: percentageOf,
        percentage: percentage,
        indexedToPercentageRemainder:indexedToPercentageRemainder
      }
  })();

});
