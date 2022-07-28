//Complete the square sum function so that it squares each number passed into it and then sums the results together.
//For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
function squareSum(numbers){

    let sum = 0
    
    numbers.forEach( number => {
      sum += (number * number)
    })
      return sum
    }

// We need a function that can transform a number into a string.
function numberToString(num) {
  // Return a string of the number here!
  return num.toString();
  
}

//Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

//[Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name){
  //your code here
  const phrase = `Hello, ${name} how are you doing today?`;
  return phrase
}

//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

//Array can contain numbers or strings. X can be either.

//Return true if the array contains the value, false if not.

function check(a, x) {
  
  return a.includes(x) ? true : false;
}

//Create a function with two arguments that will return an array of the first (n) multiples of (x).

//Assume both the given number and the number of times to count will be positive numbers greater than 0.

//Return the results as an array

//Example: countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
//countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
  let result = []; //[] make it into an array
  for (let i = 1; i <= n; i++) {
    result.push(x * i);
  }
  return result;
}

countBy(1, 5);  // [1, 2, 3, 4, 5]
countBy(2, 5);  // [2, 4, 6, 8, 10]

//In this simple assignment you are given a number and have to make it negative. 
//But maybe the number is already negative?

function makeNegative(num) {
  if(Math.sign(num) === 1){ //Math.sign chacks the sign of the numer being passed thorugh it
     return num*-1
 }else{
    return num
  }
 }

 //Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

 function doubleChar(str) {
    
  return [...str].map(letter => letter.repeat(2)).join('')
  //[...str] turns into array (...is necessary)
  //map cycles through each letter
  //'.repeat' doubles each letter on each cycle
  //'.join' joins/concatinates each letter to the next making it a new string

   
  }

//Write a function which calculates the average of the numbers in a given list.

//Note: Empty arrays should return 0.

function find_average(array) {
  let sum = 0 
  
  for(i=0; i < array.length; i++){
    sum += array[i]
  }
  
  if(sum === 0){
        return sum
    }else{
        return sum/array.length
    }   
 
}

//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

//For example,

//[true,  true,  true,  false,
  //true,  true,  true,  true ,
  //true,  false, true,  false,
  //true,  false, false, true ,
  //true,  true,  true,  true ,
  //false, false, true,  true]
//The correct answer would be 17.

//Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
  
  trueFilter = arrayOfSheep.filter(word => word === true )//filters all true from array into new array
  
  return(trueFilter.length)//arr.length counts the number of items in that array
}

//Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

//Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
    
  if(flower1 %2 !== 0 && flower2 %2 == 0){
      return true
  }else if(flower1 %2 == 0 && flower2 %2 !== 0){
      return true
  }else{
      return false
  }
  
}

//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

//Example(Input => Output):

//348597 => [7,9,5,8,4,3]
//0 => [0]

function digitize(n) {
 
  let str = n.toString()
  let newArray = Array.from(str)
  let arrOfNum = newArray.map(n => Number(n))
  return arrOfNum.reverse()
}

//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
  let removeIt = s.replace('!','')
  return removeIt;
}