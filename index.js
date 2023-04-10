// Code your solution in this file!
const returnFirstTwoDrivers = function (array){
    return([array[0], array[1]])
}

const  returnLastTwoDrivers = function (array){
    return([array[array.length-2], array[array.length-1]])
}

const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
    return function(num) {
      return fare * num;
    };
  }

  const fareDoubler = createFareMultiplier(2);

  const fareTripler= createFareMultiplier(3);

  function selectDifferentDrivers(array, argument=Function){
    if (argument === returnFirstTwoDrivers){
       return returnFirstTwoDrivers(array)
    }
    else if (argument= returnLastTwoDrivers){
        return returnLastTwoDrivers(array)
    }
  }

console.log(selectDifferentDrivers(["cenk","arda","deniz","ahmet"], returnFirstTwoDrivers))