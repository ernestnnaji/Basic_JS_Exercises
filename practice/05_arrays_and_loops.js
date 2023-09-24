
// TEST 1 
// Complete the function by returning the first element 
// of the array 
// *NOTE* use the 'arr' parameter
function first(arr){
    return arr[0];
    
}

// TEST 2 
// Complete the function by returning the length
// of the array
function howMany(arr){
    return arr.length;
   
}

// TEST 3
// Complete the function by returning the last
// element of the array
// *HINT* use the length property
function last(arr){
    return arr[arr.length - 1]
   
}

// TEST 4
// Use a FOR LOOP to complete the function
// return the sum of an array of numbers (all numbers added to together)
function forLoopSum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }    
    retun sum;
}

// TEST 5
// use a FOR LOOP to to complete the function
// return the highest number from an array
function forLoopHighest(arr){
    let Highest = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > Highest) {
                Highest = arr[i];
            }
        }   
    return Highest;    
}

// TEST 6
// use a FOREACH LOOP to complete the function
// return the sum of an array of numbers
function forEachLoopSum(arr){
    let sum = 0
    arr.forEach (function (element) {
        sum += element;
    });

 return sum;   
}

// TEST 7
// use a FOREACH LOOP to to complete the function
// return the highest number from an array
function forEachLoopHighest(arr){
    let highest = arr[0];
    arr.forEach (function (element) {
        if (element > highest) {
            highest = element
    }});
  return highest;   
  
}

// TEST 8
// use a WHILE LOOP to complete the function
// return the sum of all numbers in the array
function whileLoopSum(arr) {
    let sum = 0;
    let i = 0;

    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
   return sum; 
  
}

// TEST 9
// use a WHILE LOOP to to complete the function
// return the highest number from an array
function whileLoopHighest(arr){
    let highest = arr[0];
    let i = 1;

    while (i < arr.length) {
        if (arr[i] > highest) {
            highest = arr[i];
    }
    i++;
  }
  return highest; 
}


module.exports = {first, howMany, last, forLoopSum, forLoopHighest, forEachLoopSum, forEachLoopHighest, whileLoopSum, whileLoopHighest}
