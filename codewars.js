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
  let removeIt = s.replace(/\!/g, '')
  return removeIt;
}

//Given an integral number, determine if it's a square number:


//Examples

//-1  =>  false
 //0  =>  true
 //3  =>  false
 //4  =>  true
//25  =>  true
//26  =>  false

var isSquare = function(n){
  if(Math.sqrt(n) === Math.round(Math.sqrt(n))){
    return true
  }else{
    return false
  }
}

//You get an array of numbers, return the sum of all of the positives ones.

//Example [1,-4,7,12] => 1 + 7 + 12 = 20

//Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let positiveNums = arr.filter(nums => nums > 0)
  
  let sum = 0;

  for(let i = 0; i < positiveNums.length; i++){
      sum += positiveNums[i]
  }
   return sum
}     

//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

//Example

//filter_list([1,2,'a','b']) == [1,2]
//filter_list([1,'a','b',0,15]) == [1,0,15]
//filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
  return l.filter( element => typeof element === "number") //typeof checks the type of element passed through in this case numbers but can check for strings, booleans and undefined

}

//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

//Examples:

//solution('abc', 'bc') // returns true
//solution('abc', 'd') // returns false

function solution(str, ending){
  return str.endsWith(ending)
}

//Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i*2;
}

//Implement a function which convert the given boolean value into its string representation.

//Note: Only valid inputs will be given.

function booleanToString(b){
  if(b === true){
    return "true";
    }else return "false"
}

//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

//Examples:

//a = "xyaabbbccccdefww"
//b = "xxxxyyyyabklmopq"
//longest(a, b) -> "abcdefklmopqwxy"

//a = "abcdefghijklmnopqrstuvwxyz"
//longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//other way
function longest(s1, s2) {
  let a = [... new Set(s1.split(""))] //turn a into an array and set to remove duplicates (unique array)
  let b = [... new Set(s2.split(""))] //turn b into an array and set to remove duplicates (unique array)
  console.log(a)
  console.log(b)

  for(let i=0; i<b.length; i++){   //join the arrays by pushing "b" onto "a" and running a for loop through "b"
   a.push(b[i])
   console.log(a)
  }
   let firstCombo = [...new Set(a)] //create a new array from "a" and apply set again
   console.log(firstCombo)
   let newCombo = firstCombo.sort().join("") //turn array back into string
   console.log(newCombo)
  
 }

 longest("aaafg","bbbbbzzzzrrrr")

//my way  
 function longest2(s1,s2){
   let combined = s1+s2 //combine first string and second string
   console.log(combined)
   
   let array = Array.from(combined) //make an array from combined string
   console.log(array)
   
   let sorted = array.sort() //sort array
   console.log(sorted)
   
   setValue = [...new Set(sorted)] //set array to remove duplicates
   console.log(setValue)
  
   let newString = setValue.join('').toString() //turn array back into a string
   console.log(newString)  
   return newString 
 }

 longest2("aaafg","bbbbbzzzzrrrr")

 //Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

//Note: The function accepts an integer and returns an integer

function squareDigits(num){
    
  let turnToNum = number => Number(number) //this function turn put string into numbers
  
  let numArray = Array.from(String(num), turnToNum) //pass num into string to convert to string then pass function into second parameter to convert back to numbers
  console.log(numArray)
  
  let squaredMaybe = numArray.map(number => number*number)//take the array and iterate through it with a function that squares each number, makes a new array
  console.log(squaredMaybe)

  let valfromArray = squaredMaybe.join('')//join squared values
  console.log(Number(valfromArray))
 
 
}

//There is a bus moving in the city, and it takes and drop some people in each bus stop.

//You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

//Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

//Take a look on the test cases.

//Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

//The second value in the first integer array is 0, since the bus is empty in the first bus stop.

var number = function (busStops) {
  let x = 0;
  busStops.forEach(a => x = x + a[0] - a[1]);
  return x
}

//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeChar(str){
  let remLast = str.slice(0, -1)
  return remLast.slice(1)
  
  
  };

  //Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

//[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function grow(x){
  let n = x.length

  let result = 1;
  for (let i = 0; i < n; i++)
      result = result * x[i];
 return result;

}

//Nathan loves cycling.

//Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

//You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

//For example:

//time = 3 ----> litres = 1

//time = 6.7---> litres = 3

//time = 11.8--> litres = 5
//ALGORITHMSMATHEMATICSFUNDAMENTALS

function litres(time) {
  return Math.floor(time*0.5)
}

//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

//Examples input/output:

//XO("ooxx") => true
//XO("xooxx") => false
//XO("ooxXm") => true
//XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
//XO("zzoo") => false

function XO(str) {
  let string = str.toLowerCase()
   
   let array = Array.from(string)
   
   let exs = array.filter( letter => letter == ('x'))
   
   let ohs = array.filter( letter => letter == ('o'))
   
   if (exs.length == ohs.length){
       return true
   }else return false

}

//Very simple, given an integer or a floating-point number, find its opposite.

//Examples:

//1: -1
//14: -14
//-34: 34
function opposite(number) {
  return number*-1
 }

 //Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

//Examples (input -> output)

//6, "I"     -> "IIIIII"
//5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
  return s.repeat(n)
}

//A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

//Return True if yes, False otherwise :)

function hero(bullets, dragons){
  if((bullets/2) >= dragons){
    return true
  }else return false
  }

  //You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
//If it is a square, return its area. If it is a rectangle, return its perimeter.

//Example(Input1, Input2 --> Output):

//6, 10 --> 32
//3, 3 --> 9
//Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = function(l , w) {
  if(l == w){
    return l * w
  }else return ( l*2) + (w*2)
 };

 //Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

 function sum (numbers) {
  let sum = 0;
 for(let i=0; i< numbers.length; i++){
  sum += numbers[i]
 }
 if(numbers== ""){
   return(0)
 }else return(sum)
}

//Return the number (count) of vowels in the given string.

//We will consider a, e, i, o, u as vowels for this Kata (but not y).

//The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let letters = str.toString().split("")
console.log(letters)

let vowels = letters.filter((letter) => {
  if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u")
      return(letter)
  
  })
  console.log(vowels)
  let length = vowels.length
  console.log(length)
}

getCount('pear tree')

//The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

//To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

//Input

//Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

function openOrSenior(data){
  function determineMembership(member){
    return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
  }
  return data.map(determineMembership);
}

//This time no story, no theory. The examples below show you how to write function accum:

//Examples:

//accum("abcd") -> "A-Bb-Ccc-Dddd"
//accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt") -> "C-Ww-Aaa-Tttt"
//The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  var letters = s.split(''), words = [];

  for(var i = 0; i < letters.length; i++) {
    words.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }

  return words.join('-');
}

//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

//Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

//[]                                -->  "no one likes this"
//["Peter"]                         -->  "Peter likes this"
//["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
//["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
//["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
//Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {

  let others = (names.length) - 2
  console.log(others)
     
   if(names.length==0){
      console.log(`no one likes this`)
   }else if(names.length==1){
      console.log(`${names[0]} likes this`)
   }else if(names.length==2){
      console.log(`${names[0]} and ${names[1]} likes this`)
   }else if(names.length==3){
      console.log(`${names[0]}, ${names[1]}, and ${names[2]} like this`)
  }else if(names.length==4){
      console.log(`${names[0]}, ${names[1]}, and 2 others like this`)
  }else console.log(`${names[0]}, ${names[1]} and ${others} others like this`)
  }
  
  likes(['Peter', 'Alex', 'Mark', 'Max', 'Sarah'])

//Create a function which translates a given DNA string into RNA.

//For example:

//"GCAT"  =>  "GCAU"
//The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

function DNAtoRNA(dna) {
  return dna.replace(/T/g,"U")
  }

//Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

  function minCompare(a, b) {
    return a - b;
  }

  function maxCompare(a, b) {
    return b - a;
  }

var min = function(list){
    let minSorted = list.sort(minCompare)
    
    return minSorted[0]
}

var max = function(list){
    let maxSorted = list.sort(maxCompare)
    
    return maxSorted[0];
}

//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  if(bool == true){
    return 'Yes'
  }else return 'No'
}

//In this kata you are required to, given a string, replace every letter with its position in the alphabet.

//If anything in the text isn't a letter, ignore it and don't return it.

//"a" = 1, "b" = 2, etc.

//Example

//alphabetPosition("The sunset sets at twelve o' clock.")
//Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


alphabetPosition("the sunset sets at twelve o' clock.")

function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
      var code = text.toUpperCase().charCodeAt(i)
      console.log(code)
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }
  
    return result.slice(0, result.length - 1);
  }
  console.log(alphabetPosition("The sunset sets at twelve o' clock."));


//finding how many times a number occurs, there will always be one mumber that occures an odd amlunt of times



  function findOdd(numbers) {
    var count = 0; 
    
    for(var i = 0; i<numbers.length; i++){  
      
      for(var j = 0; j<numbers.length; j++){
        
       
        if(numbers[i] == numbers[j]){
          count++;
          
        }
      }
      if(count % 2 != 0 ){
        
        return numbers[i];
      }
    }
  };

  //Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

//It should remove all values from list a, which are present in list b keeping their order.

function arrayDiff(a, b) {
  
  if(a.length === 0 || b.length === 0){
    return a
  }else{
    return a.filter(num => !(b.includes(num)))
    
  }

  }

  //Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

  //If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

  function findNextSquare(sq) {
    let result = Math.sqrt(sq)
    console.log(result)
    
    if(result % 1 != 0){
      console.log('Not Squared Num')
      return -1
    }else{
      console.log('Squared Num')
      let plusOne = (result + 1)
      console.log(plusOne)
      let nextSquare = plusOne * plusOne
      console.log(nextSquare)
    }
  }


  //Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

//Examples

//n = 0  ==> [1]        # [2^0]
//n = 1  ==> [1, 2]     # [2^0, 2^1]
//n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n){
  result = []; //result is an empty array
  for(let i = 0; i <= n; i++ ){ //for loop that stops at variable given (n)
    let powers = Math.pow(2,(i)) //variable that holds result of looping through each iteration of 2 to the (n) power
    result.push(powers) //push each value of powers into array
  }

  return result
}

powersOfTwo(4)

//Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

//"I love you"
//"a little"
//"a lot"
//"passionately"
//"madly"
//"not at all"
//If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

//When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

//Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.


function howMuchILoveYou(nbPetals) {
  let petal = ["I love You", //variable holding array that holds the 6 choices
  "a little",
  "a lot",
  "passionately",
  "madly",
  "not at all"]
  
  let choice = []; 

  for(let i = 0; i<nbPetals; i++){ //for loop that terates as many times as the value of nbPetals
    choice = ( petal[i%6]) //variable holds choice after iterating through the array it will loop back through the same array. (could also be written (petal[i%petal.length]) to express the repeating point in the array)
  }
  console.log(choice)
}

//You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

//Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

//For example, when the input is green, output should be yellow.

function updateLight(current) {
  if(current == "green"){
    return "yellow"
  }else if(current == "yellow"){
    return "red"
  }else{
    return "green"
  }
  //your code here!

}

//Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

//If no occurrences can be found, a count of 0 should be returned.

//("Hello", "o")  ==>  1
//("Hello", "l")  ==>  2
//("", "z")       ==>  0

function strCount(str, letter){  
  let count = 0;
  let arr = Array.from(str)
  let letterArr = Array.from(letter)
  console.log(arr)
  console.log(letterArr)
  
  for(i=0; i<arr.length; i++){
    if(arr[i] == letterArr)
    count++;
    console.log(count)
  }
}

//Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!

//The function takes a name as its only argument, and returns one of the following strings:

//name + " plays banjo" 
//name + " does not play banjo"
//Names given are always valid strings.

function areYouPlayingBanjo(name) {
  let letter = name[0].toLowerCase()
  console.log(letter)
  if(letter == "r"){
    console.log(name + " plays banjo")
  }else{
    console.log(name + " does not play banjo")
  }
  
}

//Clock shows h hours, m minutes and s seconds after midnight.

//Your task is to write a function which returns the time since midnight in milliseconds.

//Example:

//h = 0
//m = 1
//s = 1

//result = 61000

function past(h, m, s){
  let hrsToMs = h*3600000;
  console.log(hrsToMs)
  let minToMs = m*60000;
  console.log(minToMs)
  let secToMs = s*1000;
  console.log(secToMs)
  console.log(hrsToMs + minToMs + secToMs)
}

//1min =60000ms


//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

//Don't change the order of the elements that are left.

function removeSmallest(numbers) {
  let smallest = Math.min(...numbers)
  let index = numbers.indexOf(smallest)
  let front = numbers.slice(0,index)
  let back = numbers.slice(index+1, numbers.length)
  let newArray = front.concat(back)

  console.log(numbers)
  console.log(`the smallest number is => ${smallest}`)
  console.log(`the index of the first smallest number is => ${index}`)
  console.log(front)
  console.log(back)
  console.log(newArray)
  
  if(numbers == []){
    return []
  }else return newArray

  
}

//Write a function findNeedle() that takes an array full of junk but containing one "needle"

//After your function finds the needle it should return a message (as a string) that says:

//"found the needle at position " plus the index it found the needle, so:

function findNeedle(haystack) {
  let index = haystack.indexOf('needle')
  return `found the needle at position ${index}`
}

//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

//Examples

//[7, 1]  =>  [1, 7]
//[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
//[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]



function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}

//Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  
  let revArr = Array.from(x.toLowerCase()).reverse()
  let rev = revArr.join('')
  if(x.toLowerCase() === rev){
    return true
  }else return false
}

//There is an array with some numbers. All numbers are equal except for one. Try to find it!

//findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
//findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
//It’s guaranteed that array contains at least 3 numbers.

//The tests contain some very huge arrays, so think about performance.

var array1 = [1,2,1,3,5,2,3];
var array2 = [1,2,1,3,5,5,3];

function findUnique(array){

  return array.find(
    // The code below runs for every element of the array.
    //    - for each element, it takes the element and checks if first position, is the same as last position in the array
    //for example in array1- [1] would have indexof(0) and lastindexof(2) but [5] would have indexof(4) and lastindexof(4)
    (item) => array.indexOf(item) === array.lastIndexOf(item) //
  );
}

console.log("For array 1, unique item is: ",findUnique(array1));
console.log("For array 2, unique item is: ",findUnique(array2));

//Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

function twoSum(numbers, target) {
  
  indexes = [];
 
  for(i=0;i<numbers.length;i++){
  for(j=i+1;j<numbers.length;j++){
    if(numbers[i] + numbers[j] === target){
      indexes.push(i);
      indexes.push(j)
    }
  }
}
return indexes[0], indexes[1]
}

//Trolls are attacking your comment section!

//A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

//Your task is to write a function that takes a string and return a new string with all vowels removed.

//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

//Note: for this kata y isn't considered a vowel.


function disemvowel(str) {

  console.log(str)
  arr = str.split('')
  console.log(arr)
  let noa = arr.filter(letter=> letter !== 'a')
  let noA = noa.filter(letter=> letter !== 'A')
  let noe = noA.filter(letter=> letter !== 'e')
  let noE = noe.filter(letter=> letter !== 'E')
  let noi = noE.filter(letter=> letter !== 'i')
  let noI = noi.filter(letter=> letter !== 'I')
  let noo = noI.filter(letter=> letter !== 'o')
  let noO = noo.filter(letter=> letter !== 'O')
  let nou = noO.filter(letter=> letter !== 'u')
  let noU = nou.filter(letter=> letter !== 'U')

  console.log(noU.join(''))


}

disemvowel('This phrAse has no vowels')


//Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
//Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.

function greet(language) {

  const languagePairs = 
{
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
}


for (const key in languagePairs) {
  //console.log(`${key}: ${languagePairs[key]}`);
  if(language === `${key}`){
  console.log(`${languagePairs[key]}`)
} 
}
console.log( languagePairs['english'])

}
greet('dutch')

//Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

//The geese are any strings in the following array, which is pre-populated in your solution:

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  filtered = birds.filter(word => !geese.includes(word))
  console.log(filtered)
  // return an array containing all of the strings in the input array except those that match strings in geese
};

gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])

//Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

//This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

//This function should return a number (final grade). There are four types of final grades:

//100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
//90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
//75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
//0, in other cases
//Examples(Inputs-->Output):

//100, 12 --> 100
//99, 0 --> 100
//10, 15 --> 100

//85, 5 --> 90

//55, 3 --> 75

//55, 0 --> 0
//20, 2 --> 0


function finalGrade( exam, projects){
  if(exam >90 || projects >10){
    console.log(100)
  }else if(exam >75 && projects >= 5){
    console.log(90)
  }else if(exam >50 && projects >= 2){
    console.log(75)    
  }else{
    console.log(0)
  }
}

finalGrade(55, 0)


//Given an array of ones and zeroes, convert the equivalent binary value to an integer.

//Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

//Examples:

//Testing: [0, 0, 0, 1] ==> 1
//Testing: [0, 0, 1, 0] ==> 2
//Testing: [0, 1, 0, 1] ==> 5
//Testing: [1, 0, 0, 1] ==> 9
//Testing: [0, 0, 1, 0] ==> 2
//Testing: [0, 1, 1, 0] ==> 6
//Testing: [1, 1, 1, 1] ==> 15
//Testing: [1, 0, 1, 1] ==> 11
//However, the arrays can have varying lengths, not just limited to 4.

const binaryArrayToNumber = arr => {
  reversedArray = arr.reverse() //reversed the original array
  console.log(reversedArray)
  
  binaryNum = [] ;
  sum = 0;

  for(i=0;i<reversedArray.length;i++){
    binaryNum.push(reversedArray[i] * Math.pow(2,[i])) //iterated through each number of array at given index and multiples by exponents of 2 at the same index
    console.log(binaryNum)
    //console.log([reversedArray[i] * Math.pow(2,[i])]
  }
  sum = binaryNum.reduce((x,y) => x + y) //add each multiple together
  
  console.log(sum)
};

binaryArrayToNumber([1,0,1,1,1])

//or

const binaryArrayToNumber2 = arr => {
  return parseInt(arr.join(""), 2)
};

//You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

//The returned value must be a string, and have "***" between each of its letters.

//You should not remove or add elements from/to the array.

function twoSort(s) {
  let sorted = s.sort()
  console.log(sorted)
  let first = sorted[0]
  console.log(first)
  console.log(first.split('').join('***'))
  }

  twoSort(['baker', 'Baker', 'maybe', 'who', 'Knows'])

  //Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

//Rules for a smiling face:

//Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
//A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//Every smiling face must have a smiling mouth that should be marked with either ) or D
//No additional characters are allowed except for those mentioned.

//Valid smiley face examples: :) :D ;-D :~)
//Invalid smiley faces:  ;( :> :} :]

function countSmileys(arr) {
  let count=0;
  
  for(i=0;i<arr.length;i++){
  //console.log(arr[i])
  if(arr[i] == ':)'){
    count++
  }else if(arr[i] == ':-)'){
    count++
  }else if(arr[i] == ':~)'){
    count++
  }else if(arr[i] == ':D'){
    count++
  }else if(arr[i] == ':~D'){
    count++
  }else if(arr[i] == ':-D'){
    count++
  }else if(arr[i] == ';)'){
    count++
  }else if(arr[i] == ';-)'){
    count++
  }else if(arr[i] == ';~)'){
    count++
  }else if(arr[i] == ';D'){
    count++
  }else if(arr[i] == ';~D'){
    count++
  }else if(arr[i] == ';-D'){
    count++
  }else console.log('no')
  }
  console.log(count)
  }
  
  countSmileys([';D', ':-(', ':-)', ';~)'])

  //Now you have to write a function that takes an argument and returns the square of it.

  // Write the "square"-function here
function square(num){
  return Math.pow(num, 2)
}

//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

//For example (Input -> Output):

//2 -> 3 (1 + 2)
//8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

var summation = function (num) {
  arr= [];

  for(i=1; i<=num;i++){
    arr.push(i)
  }
  console.log(arr)
  sum = arr.reduce((acc, initialValue) => acc + initialValue)
  console.log(sum)
}

summation(8)


//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

//invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
//invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
//invert([]) == []
//You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
  opposites = [];
  for(i=0;i<array.length;i++){
    opposites.push(array[i] * -1)
  }
  console.log(opposites)
}

invert([1,-2,3,-4,5])

//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

//For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

//Constraint:

//1 <= month <= 12

const quarterOf = (month) => {
  let quarter = 0;
  
  for(i=1;i<=3;i++){
    
    if(month === i){
      quarter = 1
    }
  }
  
  for(i=4;i<=6;i++){
    
    if(month === i){
      quarter = 2
    }
  }
  
  for(i=7;i<=9;i++){
    
    if(month === i){
      quarter = 3
    }
  }
  
  for(i=10;i<=12;i++){
    
    if(month === i){
      quarter = 4
    }
  }
    console.log(quarter)
  }
  quarterOf(10)

  //The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

//Example output:

//Hello, Mr. Spock

function sayHello(name) {
  return `Hello, ${name}`
}

//You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

//Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

//Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  let roughTotal = d*40
  console.log(roughTotal)
  if(d < 3){
    console.log(roughTotal)
  }else if(d < 7){
    console.log(roughTotal -20)
  }else console.log(roughTotal - 50)
}

rentalCarCost(8)


//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

//Note: input will never be an empty string


function fakeBin(x){
  let arr = x.split('')
  console.log(arr)
  let nums = arr.map(n => Number(n))
  console.log(nums)
  
  let newArray = [];
  
  for(i=0;i<nums.length;i++){
  if(nums[i]<5){
    newArray.push(0)
  }else if(nums[i]>=5){
    newArray.push(1)
  }
  
  console.log(newArray)
  
  }
  console.log(newArray.join(''))
  
  }
  fakeBin('45385593107843568')

  //Simple, remove the spaces from the string, then return the resultant string.

  function noSpace(x){
    idk = x.split('')
    console.log(idk)
    let newStr = '';
    for(i=0;i<idk.length;i++){
      if(idk[i] !== " "){
        newStr += idk[i]
      }
    }
    console.log(newStr)
    }
    
    noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')

//Given a list of integers, determine whether the sum of its elements is odd or even.

//Give your answer as a string matching "odd" or "even".

//If the input array is empty consider it as: [0] (array with a zero).

//Examples:

//Input: [0]
//Output: "even"

//Input: [0, 1, 4]
//Output: "odd"

//Input: [0, -1, -5]
//Output: "even"

function oddOrEven(array) {
  initialVal =0;
 let myTotal = array.reduce((acc, total) => acc + total, initialVal)
 console.log(myTotal)
 if(myTotal %2 == 0){
  console.log('even')
 }else console.log('odd')
}

oddOrEven([])

//Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

//Example: (Input1, Input2 -->Output)

//"4",  "5" --> "9"
//"34", "5" --> "39"
//"", "" --> "0"
//"2", "" --> "2"
//"-5", "3" --> "-2"
//Notes:

//If either input is an empty string, consider it as zero.

//Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

function sumStr(a,b) {

  equation = Number(a)+Number(b)
  str = equation.toString()
  console.log(equation)
  console.log(str)
  
  }
  
  sumStr("4","5")

  //Complete the solution so that it reverses the string passed into it.

  //'world'  =>  'dlrow'
  //'word'   =>  'drow'


  function solution(str){
    return str.split('').reverse().join('')
  }

  //An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

  //Note: anagrams are case insensitive
  
  //Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
  
  //Examples
  
  //"foefet" is an anagram of "toffee"
  
  //"Buckethead" is an anagram of "DeathCubeK"
  
  


  // write the function isAnagram
var isAnagram = function(test, original) {
  var t = test.toLowerCase().split('').sort().join('');
  var o = original.toLowerCase().split('').sort().join('');
  return (t==o)?true:false;
};

//There was a test in your class and you passed it. Congratulations!
//But you're an ambitious person. You want to know if you're better than the average student in your class.

//You receive an array with your peers' test scores. Now calculate the average and compare your score!

//Return True if you're better, else False!

//Note:

//Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  
  let classTotal = classPoints.reduce((acc, total) => acc + total)
  

  let average = classTotal/ classPoints.length
  
  if(yourPoints > average){
    return true
  }else return false
}

//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

//Example

//['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash (words) {
  return words.join(' ')
};

//As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

//The input to the function will be an array of three distinct numbers (Haskell: a tuple).

//For example:

//gimme([2, 3, 1]) => 0
//2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

//Another example (just to make sure it is clear):

//gimme([5, 10, 14]) => 1
//10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.



function gimme (triplet) {
  console.log(triplet)
  
  let triplet2 = [];
  for(i=0;i<triplet.length;i++){
    triplet2.push(triplet[i])
  }
  //console.log(triplet2)
  let sorted = triplet2.sort((a,b) => (a - b))
  console.log(sorted)
  
  let middleNum = sorted[1]
  console.log(middleNum)
  
  let index = triplet.indexOf(middleNum)
  console.log(index)
  }
  
  gimme([2, 3, 1])


  //Make a program that filters a list of strings and returns a list with only your friends name in it.

//If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

//Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

//i.e.

//friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

function friend(friends){
  console.log(friends)
  let fourLetters = friends.filter(word => word.length == 4)
  console.log(fourLetters)
}

friend(["Ryan", "Kieran", "Mark"])


//Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

//a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

//The four operators are "add", "subtract", "divide", "multiply".

//A few examples:(Input1, Input2, Input3 --> Output)

//5, 2, "add"      --> 7
//5, 2, "subtract" --> 3
//5, 2, "multiply" --> 10
//5, 2, "divide"   --> 2.5
//Try to do it without using if statements!

function arithmetic(a, b, operator){
  switch(operator){
    case "add": return a + b
    case "subtract": return a - b
    case "multiply": return a * b
    case "divide": return a / b
  }
  }

  //In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

//For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

function findMultiples(integer, limit) {
  let limiter = Math.trunc(limit / integer)
  arr = [];
  for(i=1;i<=limiter;i++){
    arr.push(integer*[i])
  }
  console.log(arr)
}

//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

//Examples

//"hello"     -->  "hll"
//"codewars"  -->  "cdwrs"
//"goodbye"   -->  "gdby"
//"HELLO"     -->  "HELLO"
//don't worry about uppercase vowels
//y is not considered a vowel for this kata

//const str = 'coding beauty';
//const noVowels = str.replace(/[aeiou]/gi, '');
//console.log(noVowels); // cdng bty
//We use the two forward slashes (/ /) to specify the start and end of the regular expression.
//The [] characters are used to specify a pattern that matches any of a specific group of characters. For example, the pattern [abc] will match 'a', 'b', or 'c'. In the same way, the [aeiou] pattern will match any of the 5 vowel characters in the English alphabet.
//The g (global) regex flag is used to match all occurrences of the regex pattern. Without this flag, only the first pattern match would be removed after calling replace().
//The i (ignore case) flag is used to perform a case-insensitive search for a regex match in the given string. This ensures that all vowels are removed from the string whether they are uppercased or not.
function shortcut (string) {
  console.log(string)
  
  let noVowel = string.replace(/[aeiou]/g, '')
  console.log(noVowel)
}

shortcut("cheese")


//There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

//input

//customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
//n: a positive integer, the number of checkout tills.
//output

//The function should return an integer, the total time required.

//Important

//Please look at the examples and clarifications below, to ensure you understand the task correctly :)

//Examples

//queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

//queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

//queueTime([2,3,10], 2)
// should return 12
//Clarifications

//There is only ONE queue serving many tills, and
//The order of the queue NEVER changes, and
//The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
//N.B. You should assume that all the test input will be valid, as specified above.

function queueTime(customers, n) {
  // creates an array of n 'registers' and sets their values to 0
  const registers = new Array(n).fill(0);
  // loops through the customer's array of positive integers, 'waitTime', sorts byMath.min,
  // and cues those integers to n of 'registers', the available number of registers
  // then sums the amount of waitTime on each available register
 for(let waitTime of customers){
    const minWaitTime = registers.indexOf(Math.min(...registers));
    registers[minWaitTime] += waitTime;
 }
 // then returns the register with the longest waitTime, the one you always seem to get stuck in
 return Math.max(...registers);
}

queueTime([5,3,4], 1)


//Our football team has finished the championship.

//Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

//For example: ["3:1", "2:2", "0:1", ...]

//Points are awarded for each match as follows:

//if x > y: 3 points (win)
//if x < y: 0 points (loss)
//if x = y: 1 point (tie)
//We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

//Notes:

//our team always plays 10 matches in the championship
//0 <= x <= 4
//0 <= y <= 4

function points(games) {
  let teamPoints = 0;

  for(i=0;i<games.length;i++){
   if(Number(games[i][0])>Number(games[i][2])){
    console.log('win')
    teamPoints+=3
   }else if(Number(games[i][0])<Number(games[i][2])){
    console.log('lose')
   }else if (Number(games[i][0])==Number(games[i][2])){
    console.log('tie')
    teamPoints+=1
   }
   
  }
  console.log(teamPoints)
}

points(["1:4","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:4","4:3"])


//Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

//Example:

//Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
//Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

//Example:

//n= 5, m=5: 25
//n=-5, m=5:  0
//Waiting for translations and Feedback! Thanks!

function paperwork(n, m) {
  if(n<0){
    return 0
  }else if(m<0){
    return 0
  }else return n*m
}

//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

//Examples:

//Input: 42145 Output: 54421

//Input: 145263 Output: 654321

//Input: 123456789 Output: 987654321

function descendingOrder(n){
  let arr = n.toString().split('')
  console.log(arr)
  numArr = arr.map(str => (str * 1)) //conversts string to num
  console.log(numArr)
  sort = numArr.sort((a,b) => b - a) // arrow function required for sort function a-b is ascending
  console.log(sort)
  let newNum = sort.join('') //return to string
  console.log(parseInt(newNum)) //return to num
}

descendingOrder(42145)

//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

//Examples

//highAndLow("1 2 3 4 5");  // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"


function highAndLow(numbers){
  let tog = arr=[...numbers.split(' ')]
  console.log(tog)
  let max = Math.max(...arr)
  let min = Math.min(...arr)
  
  console.log( `${max} ${min}`)
}

highAndLow("3 5 -6 9 7")

//Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

//When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

//Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

//S is misinterpreted as 5
//O is misinterpreted as 0
//I is misinterpreted as 1
//The test cases contain numbers only by mistake.

function correct(string){
  arr = string.split('')
  console.log(arr)
  newArr1 = []
  newArr2 = []
  newArr3 = []
  for(i=0;i<arr.length;i++){
      console.log(arr[i])
      //replace number with letter
      
      newArr1.push(arr[i].replace("0", "O"))
      newArr2.push(newArr1[i].replace("1", "I"))
      newArr3.push(newArr2[i].replace("5", "S"))
      
      

  }
  console.log(newArr3.join(''))
}

correct("L0ND1N5")

//A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

//Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

//unfinished!!!!!!

function titleCase(title, minorWords) {
  titleArr = title.split(" ")
      //console.log(titleArr)
      newArr = []
  minorArr = minorWords.split(" ") 
      //console.log(minorArr)
      newMinorArr = []
  ///
for(i=0;i<titleArr.length;i++){//this loop is running through each word
  newArr.push(titleArr[i][0].toUpperCase() + titleArr[i].substring(1).toLowerCase())
  
}
console.log(newArr)
  ///
for(j=0;j<minorArr.length;j++){//this loop is running through each word
  newMinorArr.push(minorArr[j][0].toUpperCase() + minorArr[j].substring(1).toLowerCase())
  
}
console.log(newMinorArr)


//optional minorWords function
for(k=1;k<newArr.length;k++){
  for(l=0;l<newMinorArr.length;l++){
      if(newMinorArr[l] == newArr[k]){
          
      }
  }
}


}

titleCase('THE WIND IN THE WILLOWS', 'the in')


//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.


function getMiddle(s){

  arr = s.split("")
  console.log(arr)
  num = arr.length
  console.log(num)

 
    if(num%2 == 0){
      number1even = (num/2) - 1
      number2even = (num/2)
      console.log(number1even)
      console.log(number2even)
      lettersEven = arr[number1even]+arr[number2even]
      console.log(lettersEven)
      console.log("even")
    }  
    else{
      numberOdd = (num/2) - 0.5
      console.log(numberOdd)
      letterodd = arr[numberOdd]
      console.log(letterodd)
      console.log("odd")
    }
  }

  

//number = (s / 2) + .5 //conversion for odd
//numberTwo = (s/2)//conversion for even
//numberThree = (s/2) + 1//conversion for even

//console.log(number)
//console.log(numberTwo)
//console.log(numberThree)



getMiddle("test")


//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

//If the input is an empty array or is null, return an empty array.

//Example

//For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  if (input == null || input.length < 1){
      return []
  }else{
      let positivearr = input.filter(input => input > 0)
      let negativearr = input.filter(input => input < 0)
      let positivecount = positivearr.length
      let negativesum = negativearr.reduce((acc, cur) => acc + cur, 0)
      console.log([positivecount,negativesum])
  }
  
  
    
}

countPositivesSumNegatives([null])

//You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

//Considering these factors, write a function that tells you if it is possible to get to the pump or not.

//Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let car = fuelLeft * mpg 
  if(car >= distanceToPump){
      return true
  }else{
      return false
  }
};

//Write a function that always returns 5

//Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

//Good luck :)

function unusualFive() {
  let five = 'Five!';
  return five.length;
  }

  //If you can't sleep, just count sheep!!

//Task:

//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
  arr = []
  for(i=1;i<num+1;i++){
      arr.push(i+ " " + "sheep...")
      console.log(arr)
  }
  let phrase = arr.join("")
  console.log(phrase)
}
countSheep(3)

//Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

//Example

//Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
	arr = word.split("")
    console.log(arr)
    newArr = []
    for(i=0;i<arr.length;i++){
        if(arr[i] == arr[i].toUpperCase()){
            newArr.push(i)
        }
    }
    console.log(newArr)
};

capitals('CodEWaRs')

//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

//More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

//Example: (input --> output)

//"ATTGC" --> "TAACG"
//"GTAT" --> "CATA"


function DNAStrand(dna){
  let arr = dna.split("")
  let dnaArr = []
  for(let i=0;i<arr.length;i++){
    if(arr[i] == "A" ){
      dnaArr.push("T")
    }else if(arr[i] == "T"){
      dnaArr.push("A")
    }else if(arr[i] == "C"){
      dnaArr.push("G")
    }else if(arr[i] == "G"){
      dnaArr.push("C")
    }
  }
  return dnaArr.join("")
}

//Write a function that returns both the minimum and maximum number of the given list/array.

//Examples (Input --> Output)

//[1,2,3,4,5] --> [1,5]
//[2334454,5] --> [5,2334454]
//[1]         --> [1,1]

function minMax(arr){
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  return [min,max]
  
}

//Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length*width*height
  }
}

//Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

//The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

//Note to Tax: not the invested principal is taxed, but only the year's accrued interest

//Example:

  //Let P be the Principal = 1000.00      
  //Let I be the Interest Rate = 0.05      
  //Let T be the Tax Rate = 0.18      
  //Let D be the Desired Sum = 1100.00


//After 1st Year -->
  //P = 1041.00
//After 2nd Year -->
  //P = 1083.86
//After 3rd Year -->
  //P = 1128.30

function calculateYears(principal, interest, tax, desired) {
  let year=0;
  //while the prinicipal is less than the desired amount, the year will increase by 1 each time this code runs 
  while (principal<desired){year++; principal=principal+((principal*interest)-(principal*interest*tax))}
  
  console.log(year)
}


calculateYears(1000,0.05,0.18,1100)


//Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.


function xor(a, b) {
  if(a == b){
    return false
  }else return true
  // TODO: Program Me
}

//Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.

function mouthSize(animal) {
  if(animal.toLowerCase() == "alligator"){
    return "small"
  }else{
    return "wide"
  }
  // code here
}
  

//When provided with a number between 0-9, return it in words.

//Input :: 1

//Output :: "One".

//If your language supports it, try using a switch statement.

function switchItUp(number){
  
    switch(number){
        case 1: return "One";
          break;
        case 2: return "Two";
          break;
        case 3: return "Three";
          break;
         case 4: return "Four";
          break;
        case 5: return "Five";
          break;
        case 6: return "Six";
          break;
        case 7: return "Seven";
          break;
        case 8: return "Eight";
          break;
        case 9: return "Nine";
          break;
       default: return "Zero"
        
    }
      
  }


  //In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
//Rules

 //1.  The input string will always be lower case but maybe empty.

 //2.  If the character in the string is whitespace then pass over it as if it was an empty seat
//Example

//wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str){
  // Code here
  arr= str.split("")
  let newWords = [];
  for(i=0;i<arr.length;i++){
    newWords.push(str.substring(0,[i]) + arr[i].toUpperCase() + str.substring([i+1]))
     console.log(str.substring(0,[i]) + arr[i].toUpperCase() + str.substring([i+1])) 
  }
  console.log(newWords)
}

wave("hello")


//The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

//What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  array = string.split('')
  console.log(array)
  const count = {};
  array.forEach(letter => {
      if(count[letter]){
          count[letter] += 1;
      }else {
          count[letter] = 1;
      }
  })
  console.log(count)
}

count('aba')

//You've got a bunch of textual data with embedded phone numbers. Write a function area_code() that finds and returns just the area code portion of the phone number.

//>>> message = "The supplier's phone number is (555) 867-5309"
//>>> area_code(message)
//'555'
//The returned area code should be a string, not a number. Every phone number is formatted like in the example, and the only non-alphanumeric characters in the string are apostrophes ' or the punctuation used in the phone number.


function areaCode(text) {
  arr= text.split('')
  index = arr.indexOf('(')
  console.log(index)

  areaC = text.substring(index+1, index+4 )
  console.log(areaC)
  
}

areaCode("The supplier's phone number is (555) 867-5309")

//You have a collection of lovely poems. Unfortunately, they aren't formatted very well. They're all on one line, like this:

//Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated.
//What you want is to present each sentence on a new line, so that it looks like this:

//Beautiful is better than ugly.
//Explicit is better than implicit.
//Simple is better than complex.
//Complex is better than complicated.
//Write a function, format_poem() that takes a string like the one line example as an argument and returns a new string that is formatted across multiple lines with each new sentence starting on a new line when you print it out.

//Try to solve this challenge with the str.split() and the str.join() string methods.

//Every sentence will end with a period, and every new sentence will have one space before the previous period. Be careful about trailing whitespace in your solution.



function formatPoem(poem) {
  arr = poem.split('. ').join('.\n')
  console.log(arr)
  //your code here
}

formatPoem('Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated.')

//This function should take two string parameters: a person's name (name) and a quote of theirs (quote), and return a string attributing the quote to the person in the following format:

//'[name] said: "[quote]"'
//For example, if name is 'Grae' and 'quote' is 'Practice makes perfect' then your function should return the string

//'Grae said: "Practice makes perfect"'
//Unfortunately, something is wrong with the instructions in the function body. Your job is to fix it so the function returns correctly formatted quotes.

//Click the "Train" button to get started, and be careful with your quotation marks.

function quotable(name, quote){
  return `${name} said: "${quote}"`
 }

 quotable('Grae', 'Practice makes perfect')


 //Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

//Examples

//"TestController"  -->  "test_controller"
//"MoviesAndBooks"  -->  "movies_and_books"
//"App7Test"        -->  "app7_test"
//1                 -->  "1"

function toUnderscore(string) {
  console.log(string)
  arr = string.split(/\.?(?=[A-Z])/g).join('_').toLowerCase()
  console.log(arr)
}

toUnderscore("TestController7Champ")

//Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

function include(arr, item){
  return arr.includes(item)? true:false
 }

 //Given a varying number of integer arguments, return the digits that are not present in any of them.

//Example:

//[12, 34, 56, 78]  =>  "09"
//[2015, 8, 26]     =>  "3479"
//Note: the digits in the resulting string should be sorted.


 function unusedDigits(...arr) {
  const array2 = [0,1,2,3,4,5,6,7,8,9]
  console.log(array2)
  console.log(arr)
  digits = arr.join('').split('').sort()
  console.log(digits)
 const  numberArr = digits.map(digit => Number(digit))
  console.log(numberArr)


  const filtered = array2.filter((number) => !numberArr.includes(number))

  //filtered = (number(/[0-9]/g))
  console.log(filtered.join(''))
}

unusedDigits(12, 34, 56, 78)

function sortByLength (array) {
  // Return an array containing the same strings, ordered from shortest to longest
  let fry= array.sort((a,b) => a.length - b.length)
  console.log(fry)

  
};

sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"])

//Given an array of integers, return a new array with each value doubled.
function maps(x){
  console.log(x)
  let mapped = x.map((num) => num*2)
  console.log(mapped)
}

maps([1, 2, 3])

//Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

//Examples

//"Hi!"     ---> "Hi"
//"Hi!!!"   ---> "Hi!!"
//"!Hi"     ---> "!Hi"
//"!Hi!"    ---> "!Hi"
//"Hi! Hi!" ---> "Hi! Hi"
//"Hi"      ---> "Hi"

function remove (string) {
  console.log(string)
  console.log(string.charAt(string.length-1))
  if(string.charAt(string.length-1) == '!'){
      arr = string.split('');
      console.log(arr.pop());
      console.log(arr.join(''))
      
  }else console.log(string)
  
}

remove('!Hi!')

//You have to write a function that accepts three parameters:

//cap is the amount of people the bus can hold excluding the driver.
//on is the number of people on the bus excluding the driver.
//wait is the number of people waiting to get on to the bus excluding the driver.
//If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

//Usage Examples:

//cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
//cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

function enough(cap, on, wait) {
  if(cap >= on + wait){
      console.log(0)
  }else if(cap < on + wait){
      console.log((on + wait) - cap)
  }
}

//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

  //For example (Input --> Output):
  
  //39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
  //999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
  //4 --> 0 (because 4 is already a one-digit number)
  
function persistence(num) {
  let count = 0;
  while(num.toString().length > 1){
    num = num.toString().split('').reduce((acc,currentNum)=>acc *= +currentNum,1)
    count++
  }
  console.log(count)
}


persistence(39)

//Let's play! You have to return which player won! In case of a draw return Draw!.

//Examples(Input1, Input2 --> Output):

//"scissors", "paper" --> "Player 1 won!"
//"scissors", "rock" --> "Player 2 won!"
//"paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  if(p1 == 'scissors' && p2 == 'paper'){
    return 'Player 1 won!'
  }else if(p1 == 'paper' && p2 == 'scissors'){
    return 'Player 2 won!'
    }else if(p1 == 'rock' && p2 == 'scissors'){
    return 'Player 1 won!'
    }else if(p1 == 'scissors' && p2 == 'rock'){
    return 'Player 2 won!'  
    }else if(p1 == 'rock' && p2 == 'paper'){
    return 'Player 2 won!'
    }else if(p1 == 'paper' && p2 == 'rock'){
    return 'Player 1 won!'
    }else return 'Draw!'
};

//Numbers ending with zeros are boring.

//They might be fun in your world, but not here.

//Get rid of them. Only the ending ones.

//1450 -> 145
//960000 -> 96
//1050 -> 105
//-1050 -> -105

function noBoringZeros(n) {
  let reverse = n.toString().split('').reverse()
  console.log(reverse)
  while(reverse[0] == "0"){
      reverse.shift()
  }
   let normal = Number(reverse.reverse().join(''))
   console.log(normal)
}

noBoringZeros(-10500000)


//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

//Use conditionals to return the proper message:

//case	return
//name equals owner	'Hello boss'
//otherwise	'Hello guest'

function greet (name, owner) {
  if(name == owner){
      return 'Hello boss'
  }else return 'Hello guest'
}

//Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

//Examples:

//input:    output:
//0    ->   0
//2    ->   5
//3    ->   5
//12   ->   15
//21   ->   25
//30   ->   30
//-2   ->   0
//-5   ->   -5
//etc.

function roundToNext5(n){
  return Math.ceil(n / 5) * 5;
}

//I have a cat and a dog.

//I got them at the same time as kitten/puppy. That was humanYears years ago.

//Return their respective ages now as [humanYears,catYears,dogYears]

//NOTES:

//humanYears >= 1
//humanYears are whole numbers only
//Cat Years

//15 cat years for first year
//+9 cat years for second year
//+4 cat years for each year after that
//Dog Years

//15 dog years for first year
//+9 dog years for second year
//+5 dog years for each year after that



var humanYearsCatYearsDogYears = function(humanYears) {
    
  if(humanYears == 1){
      let cat = 15
      let dog = 15
      console.log([humanYears,cat,dog])
  }else if(humanYears == 2){
      let cat = 24;
      let dog = 24
      console.log([humanYears,cat,dog])
  }else if(humanYears >2){
      let leftover = humanYears -2
      let cat = 24 + (4* leftover);
      let dog = 24 + (5* leftover)
      console.log([humanYears,cat,dog])
  }
  
}