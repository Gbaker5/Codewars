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

  for(let i = 0; i<nbPetals; i++){ //for loop that iterates as many times as the value of nbPetals
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


//In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

//make as few changes as possible.
//if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
//For example:

//solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
//solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
//solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(s){
  console.log(s) 
  arr = s.split('')
  console.log(arr)
  let upper = s.match(/[A-Z]/g)
  console.log(upper)
  let lower = s.match(/[a-z]/g)
  console.log(lower)
  let zero = 0
  if(upper == null ){
      //upper = zero;
      console.log( arr.map(letter => letter.toLowerCase() ).join('') )
  }else if( lower == null){
      //lower == 0
      console.log( arr.map(letter => letter.toUpperCase() ) )
  }else if(lower.length >= upper.length ){
      console.log( arr.map(letter => letter.toLowerCase() ) )
   }else  console.log( arr.map(letter => letter.toUpperCase() ) )

}

solve('code')


//Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(arr, n) {
  console.log(arr.slice(0,n))
  
}

take([0,1,2,3,5,8,13],3)

//Given an array of integers your solution should find the smallest integer.

//For example:

//Given [34, 15, 88, 2] your solution will return 2
//Given [34, -345, -1, 100] your solution will return -345
//You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let sort = args.sort((a,b)=> a-b)
    return sort[0]
  }
}

//A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(sentence){
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const together = sentence.split("")
  console.log(together)
  
  const lower = together.map(letter => letter.toLowerCase())
  const inOrder = lower.sort()
  console.log(inOrder)
  const onlyLetters = inOrder.filter(letter => /[a-z]/i.test(letter)) 
  console.log(onlyLetters)
  const noDuplicates = onlyLetters.filter((item, index) => onlyLetters.indexOf(item) == index)
  console.log(noDuplicates)
  const string = noDuplicates.join('')
  console.log(string)
  console.log(alphabet)

  if(string == alphabet){
      console.log(true)
  }else console.log(false)
}

isPangram("The quick brown fox jumps over the lazy dog")

//Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

//The order of the sequence has to stay the same.

//Examples:

//Input -> Output
//[1, 1, 2] -> [1, 2]
//[1, 2, 1, 1, 3, 2] -> [1, 2, 3]

function distinct(a) {
  console.log(a)
  const noDuplicates = a.filter((item, index) => a.indexOf(item) == index)
  console.log(noDuplicates)
}

distinct([1, 2, 1, 1, 3, 2])

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

//Return your answer as a number.

function sumMix(x){
  const toDigits = x.map(dig => Number(dig))
   console.log(toDigits)
   const sum = toDigits.reduce((acc,c) => acc + c)
   console.log(sum)
 }

 sumMix([9, 3, '7', '3'])

 //Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

//Notes:

//Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
//Input >> Output Examples

//minValue ({1, 3, 1})  ==> return (13)
//Explanation:

//(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

//minValue({5, 7, 5, 9, 7})  ==> return (579)
//Explanation:

//(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

//minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
//Explanation:

//(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications

function minValue(values){
  const noDuplicates = values.filter((item, index) => values.indexOf(item) == index)
  console.log(noDuplicates)
  const order = noDuplicates.sort()
  console.log(order)
  console.log(Number(order.join('')))
}

minValue([4, 8, 1, 4])

//You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

//As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

//Example (Input --> Output)

//"Hello World" --> "World Hello"
//"Hi There." --> "There. Hi"

function reverse(string){
  //your code here
  const arr = string.split(" ")
  const backwards =  arr.reverse()
  console.log(backwards)
  console.log(backwards.join(" ")) 
}

reverse('I am an expert at this')

//Build a function that returns an array of integers from n to 1 where n>0.

//Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  const arry = [];
  for(i=1;i<n+1;i++){
    arry.push(i)
  }
  console.log(arry)
};

reverseSeq(5)

//Your goal is to return multiplication table for number that is always an integer from 1 to 10.

//For example, a multiplication table (string) for number == 5 looks like below:

//1 * 5 = 5
//2 * 5 = 10
//3 * 5 = 15
//4 * 5 = 20
//5 * 5 = 25
//6 * 5 = 30
//7 * 5 = 35
//8 * 5 = 40
//9 * 5 = 45
//10 * 5 = 50
//P. S. You can use \n in string to jump to the next line.

//Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

function multiTable(number) {
  const array = [];
  
  for(i=1;i<11;i++){
    
    array.push(`${i} * ${number} = ${i*number}`)
    
  }

  console.log(array.join("\n"))
  // good luck
}

multiTable(6)


//Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

//Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

//[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   //7      6      5      4      3            2      1
//If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

//Note: there will always be exactly one wolf in the array.

//Examples

//Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
//Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

//Input: ["sheep", "sheep", "wolf"]
//Output: "Pls go away and stop eating my sheep"

function warnTheSheep(queue) {
    
  console.log(queue)
  const reverseQ = queue.reverse()
  console.log(reverseQ)
  const wolf = reverseQ.indexOf("wolf")
  console.log(wolf)
  console.log(reverseQ[0])
  
 


  if(reverseQ[0] == "wolf"){
      console.log("Pls go away and stop eating my sheep")
  }else console.log(`Oi! Sheep number ${(wolf)}! You are about to be eaten by a wolf!`)
}

warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "wolf"])

//Welcome.

//In this kata you are required to, given a string, replace every letter with its position in the alphabet.

//If anything in the text isn't a letter, ignore it and don't return it.

//"a" = 1, "b" = 2, etc.

//Example

//alphabetPosition("The sunset sets at twelve o' clock.")
//Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
  console.log(text)

  const array = text.toLowerCase().split("") 
  console.log(array)
  
  const allLetters = array.filter(letter => /[a-z]/.test(letter))
  console.log(allLetters)
  

  alphabet = "0,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",")
  console.log(alphabet)

  const translate = allLetters.map( letter => alphabet.indexOf(letter))
  console.log(translate)
}

alphabetPosition("The sunset sets at twelve o' clock.")

//Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
  if (health - damage < 0){
    return +0
    }
    else return health - damage
  }

  //Complete the function/method so that it returns the url with anything after the anchor (#) removed.

//Examples

//"www.codewars.com#about" --> "www.codewars.com"
//"www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
  const pound = url.indexOf("#")
  console.log(pound)
  if(pound == -1){
      return url
  }else return url.slice(0, pound)
  
}


//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  console.log(number %2)
  if(number %2 == 0){
      console.log("even")
  } else console.log("odd")
}
evenOrOdd(-42)

//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

//For example:

//1.08 --> 30
//Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
function cockroachSpeed(s) {
  conversion = s * 27.77778
  
   

   return Math.floor(conversion)
 }

 //Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

//Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

//Examples:

//* With `name` = "john"  => return "Hello, John!"
//* With `name` = "aliCE" => return "Hello, Alice!"
//* With `name` not given 
  //or `name` = ""        => return "Hello, World!"

  function hello(name) {
    if(name){
      return 'Hello,' + ' ' + name[0].toUpperCase()+(name.substring(1)).toLowerCase()+'!'
    }else return "Hello, World!";
  }


  //Write Number in Expanded Form

//You will be given a number and you will need to return it as a string in Expanded Form. For example:

//expandedForm(12); // Should return '10 + 2'
//expandedForm(42); // Should return '40 + 2'
//expandedForm(70304); // Should return '70000 + 300 + 4'
//NOTE: All numbers will be whole numbers greater than 0.

  function expandedForm(num) {

    
    const string = num.toString().split(""); //create string array from number
    const length = string.length;
    console.log(length)

    const result = []; //empty array
    
    for (let i = 0; i < string.length; i++) {
        const digit = parseInt(string[i], 10); //convert each back to a number
        //console.log(digit) 
        console.log(string.length - i - 1)

        if (digit !== 0) { //if digit is not a zero then..
            const expandedDigit = digit * Math.pow(10, string.length - i - 1); 
            //take each digit and multiply it by 10 to the multiple of the index of the digit which should be its place in the original number 
            //7,0,3,0,4 (original num) * (10 to the) 4,3,2,1,0 
            //(7*10,000) , (3 * 100) , (4 * 1)
            result.push(expandedDigit); //push nums into empty array
            //console.log(result)
        }
    }

    console.log(result.join(" + "));
}

expandedForm(70304)

//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

//If the function is passed a valid PIN string, return true, else return false.

//Examples (Input --> Output)

//"1234"   -->  true
//"12345"  -->  false
//"a234"   -->  false

function validatePIN (pin) {
  console.log(pin)

  const arr = pin.split("") //pin string arr
  console.log(arr)
  if( arr == "" ){
      return false
  }
  const regex = pin.match(/([0-9])/g).join("") //regex check for all nums
  console.log(regex)

  
  if(arr.length == 4 & pin == regex || arr.length == 6 & pin == regex){
      console.log(true)
  }else console.log(false)





}

validatePIN("1234")

//You need to write regex that will validate a password to make sure it meets the following criteria:

//At least six characters long
//contains a lowercase letter
//contains an uppercase letter
//contains a digit
//only contains alphanumeric characters (note that '_' is not alphanumeric)


// assign your RegExp to REGEXP:
const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
//^: Asserts the start of the string.
//(?=.*[a-z]): Positive lookahead assertion for at least one lowercase letter.
//(?=.*[A-Z]): Positive lookahead assertion for at least one uppercase letter.
//(?=.*\d): Positive lookahead assertion for at least one digit.
//[a-zA-Z\d]{6,}: Matches any combination of at least six alphanumeric characters (letters or digits).
//$: Asserts the end of the string.

const isValidPassword = REGEXP.test("YourPassword123");
console.log(isValidPassword); // Output: true or false based on the password


//The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

//The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

//Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

//If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

function chromosomeCheck(sperm) {
  if(sperm == 'XX'){
      console.log("Congratulations! You're going to have a daughter.")
  }else if(sperm == 'XY'){
      console.log("Congratulations! You're going to have a son.")
  }
  
}

chromosomeCheck('XX')

//ask

//Create a method to see whether the string is ALL CAPS.

//Examples (input -> output)

//"c" -> False
//"C" -> True
//"hello I AM DONALD" -> False
//"HELLO I AM DONALD" -> True
//"ACSKLDFJSgSKLDFJSKLDFJ" -> False
//"ACSKLDFJSGSKLDFJSKLDFJ" -> True
//In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

String.prototype.isUpperCase = function() {
  const str = this.toString();
   const withoutSpaces = str.replace(/\s/g, ''); // Remove spaces

   if (withoutSpaces === withoutSpaces.toUpperCase()) {
       return true;
   } else {
       return false;
   }
};


//altERnaTIng cAsE <=> ALTerNAtiNG CaSe

//Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

//"hello world".toAlternatingCase() === "HELLO WORLD"
//"HELLO WORLD".toAlternatingCase() === "hello world"
//"hello WORLD".toAlternatingCase() === "HELLO world"
//"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
//"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
//"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
//"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
//As usual, your function/method should be pure, i.e. it should not mutate the original string.

String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  const word = this.toString()
  

  const arr = word.split("")
  

  const newArr =[]

  for(i=0;i<arr.length;i++){
      if(arr[i] == arr[i].toLowerCase()){
          newArr.push(arr[i].toUpperCase())
      }else if(arr[i] == arr[i].toUpperCase()){
          newArr.push(arr[i].toLowerCase())
      }
  }
  return newArr.join("")
}

//A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

//In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

//For example an extract of a stocklist could be:

//L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
//or
//L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
//You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

//M = {"A", "B", "C", "W"} 
//or
//M = ["A", "B", "C", "W"] or ...
//and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

//For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket/Prolog a list of pairs):

//(A : 20) - (B : 114) - (C : 50) - (W : 0)
//where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

//If L or M are empty return string is "" (Clojure/Racket/Prolog should return an empty array/list instead).



function stockList(listOfArt, listOfCat){

  console.log(listOfArt[0].split(" "))
  
  // Initialize a dictionary to store the sum for each category
  let categorySums = {};
  listOfCat.forEach(category => {
      categorySums[category] = 0;
  });

  console.log(categorySums)

   // Iterate through each book in the stocklist
   listOfArt.forEach(book => {
      let [code, quantity] = book.split(" "); //["BBAR", "150"] ["CDXE","515"]
      let category = code[0]; //"B" "C"

      // Check if the category is in the list of categories
      if (listOfCat.includes(category)) { 
          categorySums[category] += parseInt(quantity, 10);
      }
  });
  
  console.log(categorySums)
  
   // Build the result string
   let result = listOfCat.map(category => `(${category} : ${categorySums[category] || 0})`).join(" - ");

    ;
  console.log(result)
  //const = 
  //console.log()
  //const = 
  //console.log()
}

stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],["A", "B", "C", "D"])


//every/little/things/is/gonna/be/alright/doo/dooo/da/doooo

//We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

//You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

//All values will be positive integers or floats, or zero.


function plural(n) {
  if(n == 1){
    return false
  }else return true
 }//


 //Find Mean

//Find the mean (average) of a list of numbers in an array.
//
//Information
//
//To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.
//
//For an example list of 1, 3, 5, 7
//
//1. Add all of the numbers
//
//1+3+5+7 = 16
//2. Divide by the number of values in the list. In this example there are 4 numbers in the list.
//
//16/4 = 4
//3. The mean (or average) of this list is 4
//


var findAverage = function (nums) {

  let sum = nums.reduce((acc,c) => acc + c)
  
  let count = nums.length


  return sum/count

}



//Task
//
//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//
//The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
//
//Mind the input validation.
//
//Example
//
//{ 6, 2, 1, 8, 10 } => 16
//{ 1, 1, 11, 2, 3 } => 6
//Input validation
//
//If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.


function sumArray(array) {
  if(array == null){
    return 0
 
  }else if(array.length <3 ){
    return 0
  }else{
    let ordered = array.sort((a,b) => a-b)
   

    ordered.shift()
    ordered.pop()
    
    let sum = ordered.reduce((acc,c) => acc + c)
    return sum
  }
    

}


//In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
//
//For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
//
//Your function will be tested with pre-made examples as well as random ones.
//
//If you can, try writing it in one line of code.

function findDifference(a, b) {
  let cub1 = a.reduce((acc,c) => acc*c)
  let cub2 = b.reduce((acc,c) => acc*c)
  
  let cubArr = [cub1,cub2]
  
  return Math.max(...cubArr)- Math.min(...cubArr)
}


//ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

//Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".


function rot13(message){
  return message.replace(/[a-zA-Z]/g, function(char) { //replace each letter in message with character from function
      let charCode = char.charCodeAt(0); //iterate through each letter and grab the character code for the index 
      let offset = charCode <= 90 ? 65 : 97; // A-Z is 65-90, a-z is 97-122, so if the code is less than 90 the index starts @65 otherwise it starts @97 
      return  String.fromCharCode(((charCode - offset + 13) % 26) + offset); //puts everything into the range of 0-25. since the range of both the uppercase and lowercase is the same (0-25) it adjusts the letter index accordingly without going out of the range of the alphabet and then add the offset to put it back into its respective case range. 
});

}
rot13("Test two!") //test = grfg

//Inspired by the development team at Vooza, write the function that
//
//accepts the name of a programmer, and
//returns the number of lightsabers owned by that person.
//The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.
//
//Note: your function should have a default parameter.
//
//For example(Input --> Output):

function howManyLightsabersDoYouOwn(name) {
  if(name == "Zach"){
     return 18
  }else {
    return 0
  }
 
}


//Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
//
//Example:
//
//['John', 'Smith'], 'Phoenix', 'Arizona'
//This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!



//Your job is to write a function which increments a string, to create a new string.
//
//If the string already ends with a number, the number should be incremented by 1.
//If the string does not end with a number. the number 1 should be appended to the new string.
//Examples:
//
//foo -> foo1
//
//foobar23 -> foobar24
//
//foo0042 -> foo0043
//
//foo9 -> foo10
//
//foo099 -> foo100
//
//Attention: If the number has leading zeros the amount of digits should be considered.


function incrementString(strng) {
  // Split the string into characters
  let strngArr = strng.split("");
  let numberPart = "";

  // Find the number part at the end of the string
  while (strngArr.length > 0 && strngArr[strngArr.length - 1].match(/[0-9]/)) {
      numberPart = strngArr.pop() + numberPart;
  }

  // If no number part found, append '1' and return
  if (numberPart === "") {
      return strng + '1';
  }

  // Increment the number part
  let incrementedNumber = (parseInt(numberPart) + 1).toString();

  // Adjust the length if necessary to match the original number's length
  while (incrementedNumber.length < numberPart.length) {
      incrementedNumber = '0' + incrementedNumber;
  }

  // Join the string part with the incremented number
  return strngArr.join("") + incrementedNumber;
}

///////////

function dirReduc(arr) {
  const opposite = {
      'NORTH': 'SOUTH',
      'SOUTH': 'NORTH',
      'EAST': 'WEST',
      'WEST': 'EAST'
  };

  let result = [];

  for (let direction of arr) { //for every direction in the array
      if (result.length && result[result.length - 1] === opposite[direction]) {
          result.pop(); // Remove the last element from the result array
      } else {
          result.push(direction); // Add the direction to the result array
      }
  }

  return result;
}


//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//
//Examples
//
//"din"      =>  "((("
//"recede"   =>  "()()()"
//"Success"  =>  ")())())"
//"(( @"     =>  "))((" 
//Notes
//
//Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
  const arr = word.toLowerCase().split("")
  console.log(arr)

  let duplicates = []

for(i=0;i<arr.length;i++){
   
   for(j=i+1;j<arr.length;j++){
       if(arr[i] == arr[j] && !duplicates.includes(arr[i])){
           duplicates.push(arr[i])
       } 
   }
}
console.log(duplicates)

let newArr = []

for(k=0;k<arr.length;k++){
   if(duplicates.includes(arr[k])){
       newArr.push(")")
   }else newArr.push("(")
}

console.log(newArr)

console.log(newArr.join(""))
}


//duplicateEncode("recede")
//duplicateEncode("(( @")
duplicateEncode("din")


//Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.
//
//Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.
//
//Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"
//
//"..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.
//
//Good Luck!

function  calculateAge(birth, current) {

  const gap = birth - current
// enter your code here.
  const absolute = Math.abs(gap)
  if(gap == 1 ){
      console.log(`You will be born in ${gap} year`)
  }else if(gap == -1){
      console.log(`You are ${absolute} year old`)
  }else if(gap > 0){
  console.log(`You will be born in ${gap} years.`)
}else if(gap < 0){
  console.log(`You are ${absolute} years old.`)
}else console.log(`You were born this very year!`)

}

calculateAge(2012, 2016)
calculateAge(1989, 2016)
calculateAge(3400, 3400)
calculateAge(2010, 1990)


//Write a function to split a string and convert it into an array of words.
//
//Examples (Input ==> Output):
//
//"Robin Singh" ==> ["Robin", "Singh"]
//
//"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string){

  return string.split(" ")
  }


//  Complete the solution so that the function will break up camel casing, using a space between words.
//
//Example
//
//"camelCasing"  =>  "camel Casing"
//"identifier"   =>  "identifier"
//""             =>  ""

function camelCase(string){
  const splitter =  string.split(/(?=[A-Z])/g).join(" ")
  console.log(splitter)
}

camelCase('camelCasingIsCool')


//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
//
//For example:
//
//a = 1
//b = 4
//--> [1, 2, 3, 4]


function between(a, b) {
  // your code here
  let countToB = [];

  for(i=a;i<b+1;i++){
      countToB.push(i)
  }
  console.log(countToB)
}

between(1,4)

//In javascript, Array is one of basic data types. To define an empty array, you can use var arr=new Array() or var arr=[]
//
//Array has an attribute: length, if there is an array named arr, using arr.length to know how many elements are contained in the array.
//
//Each element in the array has an index, use arr[index] to get the value of element.
//
//index always start from 0, so the first element of array is arr[0], the last element of array is arr[arr.length-1].
//
//If we want to add new elements to the array, you can use the array method: push(). It can add an element to the end of the array. Instead, if we want to remove the last element of the array, you can use the array method: pop(). for example:
//
function getLength(arr){
  //return length of arr
  return arr.length
}
function getFirst(arr){
  //return the first element of arr
  return arr[0]
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length-1]
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el)
  return arr
}
function popElement(arr){
  //pop an element from arr
  arr.pop()
  return arr
}

  getLength([1,2,3]),3;
  getFirst([1,2,3]),1;
  getLast([1,2,3]),3;
  pushElement([1,2,3]).length,4;
  popElement([1,2,3]).length,2; 


  //You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.
//
  //Your task is to debug the code before your plants die!

  function rainAmount(mm){
    if (mm < 40) {
         return "You need to give your plant " + (40 - mm) + "mm of water"
    }
    else {
         return "Your plant has had more than enough water for today!"
    };
}


//The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
//
//maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
//// should be 6: [4, -1, 2, 1]
//Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
//
//Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function(arr) {
  if (arr.length === 0) return 0; // Empty list
  let maxEndingHere = 0;
  let maxSoFar = 0;

  for (let i = 0; i < arr.length; i++) {
    maxEndingHere = Math.max(0, maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
//The output should be two capital letters with a dot separating them.
//
//It should look like this:
//
//Sam Harris => S.H
//
//patrick feeney => P.F

function abbrevName(name){
  const arr = name.split(" ")
  const first = arr[0]
  const last = arr[1]
  
  const firstInit= first[0].toUpperCase()
  const lastInit = last[0].toUpperCase()
  
  return `${firstInit}.${lastInit}`
  
     
  
  }


//  Your function takes two arguments:
//
//current father's age (years)
//current age of his son (years)
//Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  const double = sonYearsOld * 2 
  
  const diff = Math.abs(double - dadYearsOld)
  
  return diff
}


//A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

function main (verb, noun){
  return verb + noun
}

//Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
//
//For example, a tower with 3 floors looks like this:
//
//[
//  "  *  ",
//  " *** ", 
//  "*****"
//]
//And a tower with 6 floors looks like this:
//
//[
//  "     *     ", 
//  "    ***    ", 
//  "   *****   ", 
//  "  *******  ", 
//  " ********* ", 
//  "***********"
//]

function towerBuilder(nFloors) {
  // build here\
  


  let tower = []

      for(let i=1; i <= 2 * nFloors-1; i+= 2){
          const spaces = ' '.repeat((2 * nFloors - i -1) / 2);
          const blocks = '*'.repeat(i);
          const floor = spaces + blocks + spaces;
          tower.push(floor);
      }
  
      console.log(tower);
}


towerBuilder(4)

//  Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
//
//Write a function which takes a list of strings and returns each line prepended by the correct number.
//
//The numbering starts at 1. The format is n: string. Notice the colon and space in between.
//
//Examples: (Input --> Output)
//
//[] --> []
//["a", "b", "c"] --> ["1: a", "2: b", "3: c"]




var number=function(array){
    
  let numbered = [];

  for(i=0;i<array.length;i++){
      numbered.push([i+1] + ":" + array[i])
  }
  console.log(numbered)
  
}

number(["a", "b", "c"])








//You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
//
//Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).


function isValidWalk(direction){
  let lr=0;
  let ud=0;

for(i=0;i<direction.length;i++){
  if(direction[i] == 'n'){
      ud += 1
  }else if(direction[i] == 's'){
      ud -= 1
  }else if(direction[i] == 'e'){
      lr += 1
  }else if(direction[i] == 'w'){
      lr -= 1
  }
}
console.log(lr)
console.log(ud)

if(lr == 0 && ud == 0 && direction.length == 10){
  console.log(true)
}else console.log(false)

}

isValidWalk(['n','s','n','s','n','s','n','s','n','s'])

//Your task is to create a function that does four basic mathematical operations.
//
//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.
//
//Examples(Operator, value1, value2) --> output
//
//('+', 4, 7) --> 11
//('-', 15, 18) --> -3
//('*', 5, 5) --> 25
//('/', 49, 7) --> 7

function basicOp(operation, value1, value2){
  let op = 0;

  switch(operation){
      case "+": op = parseInt(value1) + parseInt(value2); break;
      case "-": op = parseInt(value1) - parseInt(value2); break;
      case "*": op = parseInt(value1) * parseInt(value2); break;
      case "/": op = parseInt(value1) / parseInt(value2); break;
  }
  
  console.log(op)
}

basicOp("+", 4, 7)


//Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin) {
    // TODO
    const arr = bin.split("").reverse()
    console.log(arr)

    let equation = [];
    for(i=0;i<arr.length;i++){
        equation.push(Math.pow(2,i)* arr[i])
    }
    console.log(equation)

    let sum = equation.reduce((acc,c) => acc+ c)
    console.log(sum)
  }

  binToDec("1001001")


//  Your mission:
//Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
//
//A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    
  return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)
  }


//  Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
//
//Division by zero should return NaN.

function remainder(n, m){
  // Divide the larger argument by the smaller argument and return the remainder
  return Math.max(n,m) % Math.min(n,m)
}

//Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
//
//Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//
//If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.




function order(words){
  if(words == ""){
    return words
  }

  let arr = words.split(" ")
  console.log(arr)

  newArr = [];

  for(j=1;j<arr.length+1;j++){
      newArr.push(j)
  }
  console.log(newArr)

  for(i=0;i<arr.length;i++){
      
      if(arr[i].includes(1)){ //if string includes this number put into arr
          newArr.splice(0,1, arr[i])
      }if(arr[i].includes(2)){
          newArr.splice(1,1, arr[i])
      }if(arr[i].includes(3)){
          newArr.splice(2,1, arr[i])
      }if(arr[i].includes(4)){
          newArr.splice(3,1, arr[i])
      }if(arr[i].includes(5)){
          newArr.splice(4,1, arr[i])
      }if(arr[i].includes(6)){
          newArr.splice(5,1, arr[i])
      }if(arr[i].includes(7)){
          newArr.splice(6,1, arr[i])
      }if(arr[i].includes(8)){
          newArr.splice(7,1, arr[i])
      }if(arr[i].includes(9)){
          newArr.splice(8,1, arr[i])
      }
  
  }
  console.log(newArr)

  

 console.log( newArr.join(" "))
}

order("4of Fo1r pe6ople g3ood th5e the2")




////////LEETCODE///////////////////////////LEETCODE//////////////////////LEETCODE////////////





//You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
//
//You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
//Input: l1 = [2,4,3], l2 = [5,6,4]
//Output: [7,0,8]
//Explanation: 342 + 465 = 807.
//Example 2:
//
//Input: l1 = [0], l2 = [0]
//Output: [0]
//Example 3:
//
//Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
//Output: [8,9,9,9,0,0,0,1]

var addTwoNumbers = function(l1,l2){
  let carry = 0;
  let previousNode = new ListNode();
  const headNode = previousNode;

  while(l1 || l2 || carry){  //this makes sure the loop keeps iterating even if theres no element in one list. so as long as there is a value (not null) it will run
      let val1 = 0;
      let val2 = 0;
      if(l1){ //if val1 is not null
          val1 = l1.val; //val1 becomes the value of the current node in the list. 
          l1 = l1.next; //if l1 is not null it will update to next link on node

      }if(l2){
          val2 = l2.val;
          l2 = l2.next; //if l2 is not null it will update to next link on node
      }
      let sum = val1 +val2 + carry;
      //console.log(`${val1} + ${val2} = ${sum}`)
      carry = Math.floor(sum/10); // sum >9 ? 1:0
      const digit = sum % 10;
      const currentNode = new ListNode(digit);
      previousNode.next = currentNode;
      previousNode = currentNode;
  }

  return headNode.next;

}

addTwoNumbers([3,2,1], [5,4])


//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
//
//The overall run time complexity should be O(log (m+n)).
//
// 
//
//Example 1:
//
//Input: nums1 = [1,3], nums2 = [2]
//Output: 2.00000
//Explanation: merged array = [1,2,3] and median is 2.
//Example 2:
//
//Input: nums1 = [1,2], nums2 = [3,4]
//Output: 2.50000
//Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


var findMedianSortedArrays = function(nums1, nums2) {
  const joinAll = nums1.join(",") + "," + nums2.join(",")
  const arr = joinAll.split(",")
  const filter = arr.filter((x) => x !== "")
  console.log(filter)
  const sort = filter.sort((a,b) => a-b)
  console.log(sort)

  //const toNums = sort.map((num) => parseInt(num))
  if(sort.length == 1){
      console.log(parseInt(sort[0]))
  }else if(sort.length %2 == 0){
      let firstNum = sort.length/2 - 1
      let secondNum = sort.length/2;
      //console.log(parseInt(sort[firstNum]))
      //console.log(parseInt(sort[secondNum]))
      median = (parseInt(sort[firstNum]) + parseInt(sort[secondNum])) /2
      console.log(median)

  }else{
      let middle = sort.length/2 - .5
      console.log(middle)
      median = parseInt(sort[middle])
      console.log(median)
  }

};

findMedianSortedArrays([], [2])


//Given an integer x, return true if x is a 
//palindrome
//, and false otherwise.
//
// 
//
//Example 1:
//
//Input: x = 121
//Output: true
//Explanation: 121 reads as 121 from left to right and from right to left.
//Example 2:
//
//Input: x = -121
//Output: false
//Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
//Example 3:
//
//Input: x = 10
//Output: false
//Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

var isPalindrome = function(x) {
  if((parseInt(x.toString().split("").reverse().join(""))) == x){
      return true
  } else console.log(false)
   
  };
  
  isPalindrome(12)


//Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
//
//For example:
//
//solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
//solution(null); // should return []

function solution(nums){
  if(nums == null){
    return []
  }else{
 let sort = nums.sort((a,b) => a - b )
 return sort}
}


//Count the number of divisors of a positive integer n.
//
//Random tests go up to n = 500000.
//
//Examples (input --> output)
//
//4 --> 3 // we have 3 divisors - 1, 2 and 4
//5 --> 2 // we have 2 divisors - 1 and 5
//12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
//30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30

function getDivisorsCnt(n){
    

  let divisors = [];

 
 for(i=0;i<=n;i++){
   
   if(n == 0){
       divisors.push(1)

   }else if(n%i == 0){
       divisors.push(i)
   }
}
 
 return divisors.length
} 

//Given a sequence of numbers, find the largest pair sum in the sequence.
//
//For example
//
//[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
//[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
//Input sequence contains minimum two elements and every element is an integer.

function largestPairSum (numbers) {
  let order = numbers.sort((a,b) => b - a)
  let sum = order[0] + order[1]
  return sum
  }


//  Issue
//
//Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.
//
//The pipes connecting your level's stages together need to be fixed before you receive any more complaints.
//
//The pipes are correct when each pipe after the first is 1 more than the previous one.
//
//Task
//
//Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
//
//Example
//
//Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8


function pipeFix(numbers){
    
  let lastdigit = numbers.length - 1;
  let end = numbers[lastdigit];
  let start = numbers[0];
  

  let newArr = [start];
  let count = start;

  while(count<end){
  newArr.push(count += 1)
  }

 return newArr
}


//This is a spin off of my first kata.
//
//You are given a string containing a sequence of character sequences separated by commas.
//
//Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
//
//If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
//
//Examples
//
//"1,2,3"      =>  "2"
//"1,2,3,4"    =>  "2 3"
//"1,2,3,4,5"  =>  "2 3 4"
//
//""     =>  NULL
//"1"    =>  NULL
//"1,2"  =>  NULL

function array(string) {
  let arr = string.split(",")
  arr.pop()
  if(arr == ""){
      return null
  }
  arr.shift()
  if(arr == ""){
      return null
  }else return arr.join(" ")

  
}


//Description
//
//We need a function that can transform a string into a number. What ways of achieving this do you know?
//
//Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

const stringToNumber = function(str){
  return parseInt(str)
   
 }

//Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
//
//The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.
//
//Upper or lower case letter does not matter -- "eNglisH" is also correct.
//
//Return value as boolean values, true for the string to contains "English", false for it does not.
//

function spEng(sentence){
  const  lower = sentence.toLowerCase()
 return lower.includes("english")
 }

// Complete the function which returns the weekday according to the input number:
//
//1 returns "Sunday"
//2 returns "Monday"
//3 returns "Tuesday"
//4 returns "Wednesday"
//5 returns "Thursday"
//6 returns "Friday"
//7 returns "Saturday"
//Otherwise returns "Wrong, please enter a number between 1 and 7"


function whatday(num) { 

  switch (num){
    case 1: return "Sunday";
    case 2: return "Monday";
    case 3: return "Tuesday";
    case 4: return "Wednesday";
    case 5: return "Thursday";
    case 6: return "Friday";
    case 7: return "Saturday";
    
    default: return "Wrong, please enter a number between 1 and 7"
      }
  // put your code here
    }


//Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
//
//The binary number returned should be a string.
//
//Examples:(Input1, Input2 --> Output (explanation)))
//
//1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
//5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a,b) {
  const sum = a + b
  const binary = sum.toString(2)
  return binary
  }


//  Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
//
//For example: (Input --> Output)
//
//10 --> 1
//99 --> 18
//-32 --> 5

function sumDigits(number) {
  const strng = number.toString()
  
  let numStrng = strng.match(/[0-9]/g)
  
  let nums = numStrng.map((x) => Number(x) )
  
  let sum = nums.reduce((acc,c) => acc + c)
  
  return sum
}


//In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
//
//The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
//
//Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
//
//You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
//
//The string has a length greater or equal to one and contains only letters from ato z.
//
//Examples:
//
//s="aaabbbbhaijjjm"
//printer_error(s) => "0/14"
//
//s="aaaxbbbbyyhwawiwjjjwwm"
//printer_error(s) => "8/22"

function printerError(s) {
  // your code
  const errors = s.match(/[n-z]/g)
  cl(errors)
  if(errors){
      numerator = errors.length
  }else numerator = 0
  cl(numerator)
  const denom = s.length

  cl(`${numerator}/${denom}`)
}

printerError("aaaxbbbbyyhwawiwjjjwwm")
//printerError("aaabbbbddddhhhh")


//Some numbers have funny properties. For example:
//
//89 --> 8¹ + 9² = 89 * 1
//695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
//46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
//Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.
//
//In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :
//
//(
//a
//p
//+
//b
//p
//+
//1
//+
//c
//p
//+
//2
//+
//d
//p
//+
//3
//+
//.
//.
//.
//)
//=
//n
//∗
//k
//(a 
//p
// +b 
//p+1
// +c 
//p+2
// +d 
//p+3
// +...)=n∗k
//If it is the case we will return k, if not return -1.
//
//Note: n and p will always be strictly positive integers.
//
//Examples:
//
//n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1
//
//n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k
//
//n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
//
//n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51


function digPow(n, p){
  //turn num to string array
  const arr = n.toString().split("")
  cl(arr)
  //turn string array to nums array
  const nums = arr.map((x) => Number(x))
  cl(nums)

  //create array of exponents stating at "p"
  powers = [p]
  //3,4,5,6,7
  
  for(i=1;i<nums.length;i++){
      powers.push(p+=1)
  }
  cl(powers)

  //use array of NUMS to pair with array of EXPONENTS in a new array
  powered = []
  // 4^3 (64), 6^4(1296), 2^5(32), 8^6(262144), 8^7(2097152)
  for(j=0;j<powers.length;j++){
      powered.push( Math.pow(nums[j],powers[j]))
  }
  cl(powered)

  //sum of new array 
 sum = powered.reduce((acc,c) => acc + c)
 cl(sum)

 //does the sum equal k * n
 k = sum / n 
 cl(k)

 if(Number.isInteger(k) == true){
  console.log(k)
 }else console.log(-1)

  
}

digPow(46288, 3)


//What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
//
//Example(Input --> Output)
//
//"apple ban" --> ["apple 5", "ban 3"]
//"you will win" -->["you 3", "will 4", "win 3"]

function addLength(str) {
  arr = str.split(" ")
  cl(arr)
  let lengths = [];
  arr.map((a) => lengths.push(a.length))
  cl(lengths)
  combine = [];

  for(i=0;i<arr.length;i++){
      combine.push(arr[i] + " " + lengths[i])
  }

  cl(combine)
  }
  

  addLength("apple ban")


//  Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.
//
//Note: This includes any characters
//
//Examples
//
//'abbbbc'  => 'abc'    #  answer: 3
//'abbcca'  => 'abca'   #  answer: 2
//'ab cca'  => 'ab ca'  #  answer: 1

function countRepeats(str) {
  // code solution
  
  const arr = str.split("")
  const noSpaces = arr.filter((x)=> x !== " ")
  cl(noSpaces)
  oglength = noSpaces.length
  cl(oglength)
  
  const noConsecutiveRepeats = [];
  
  // Iterate through the array and add characters to the result if they are not the same as the previous one
  for (let i = 0; i < noSpaces.length; i++) {
      if (i === 0 || noSpaces[i] !== noSpaces[i - 1]) {
          noConsecutiveRepeats.push(noSpaces[i]);
      }
  }
  cl(noConsecutiveRepeats)
  const newLength = noConsecutiveRepeats.length
  cl(newLength)
  cl(oglength-newLength)
}

countRepeats("AaBBCCC")


//This program tests the life of an evaporator containing a gas.
//
//We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.
//
//The program reports the nth day (as an integer) on which the evaporator will be out of use.
//
//Example:
//
//evaporator(10, 10, 5) -> 29
//Note:
//
//Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.

function evaporator(content, evap_per_day, threshold){ 
  let days = 0;
  let currentPercent = 100;

while(currentPercent > threshold){
 currentPercent -= currentPercent * (evap_per_day /100);
 days += 1;
} 
return days
}

//A stream of data is received and needs to be reversed.
//
//Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:
//
//11111111  00000000  00001111  10101010
// (byte1)   (byte2)   (byte3)   (byte4)
//should become:
//
//10101010  00001111  00000000  11111111
// (byte4)   (byte3)   (byte2)   (byte1)
//The total number of bits will always be a multiple of 8.
//
//The data is given in an array as such:
//
//[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

function dataReverse(data) {
  const bytes = [];
  
  // Split the data array into chunks of 8 bits
  for (let i = 0; i < data.length; i += 8) {
      bytes.push(data.slice(i, i + 8));
  }

  cl(bytes)

  // Reverse the array of chunks
  bytes.reverse();
  cl(bytes)
  // Flatten the array of chunks back into a single array
  const reversedData = bytes.flat();

  cl(reversedData);
}

//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
//
//Note: a and b are not ordered!
//
//Examples (a, b) --> output (explanation)
//
//(1, 0) --> 1 (1 + 0 = 1)
//(1, 2) --> 3 (1 + 2 = 3)
//(0, 1) --> 1 (0 + 1 = 1)
//(1, 1) --> 1 (1 since both are same)
//(-1, 0) --> -1 (-1 + 0 = -1)
//(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
//Your function should only return a number, not the explanation about how you get that number.


function getSum(a, b){
  const numbers = [a,b]
  const sorted = numbers.sort((a,b)=> a-b)
  let fullSet = [];
  if(a == b ){
    return a
 }else{
  for(i=sorted[0];i<=sorted[1];i++){
      fullSet.push(i)
  }
  const sum = fullSet.reduce((acc,c) => acc + c)
  return sum
 }

}

//Count the number of Duplicates
//
//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
//
//Example
//
//"abcde" -> 0  # no characters repeats more than once
//"aabbcde" -> 2  # 'a' and 'b'
//"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
//"indivisibility" -> 1  # 'i' occurs six times
//"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
//"aA11" -> 2  # 'a' and '1'
//"ABBA" -> 2  # 'A' and 'B' each occur twice


function duplicateCount(text) {
  // Convert the text to lowercase
  text = text.toLowerCase();
  
  // Convert the string to an array
  let arr = text.split("");
  
  // Object to store letter counts
  let letterCount = {};
  
  // Loop through each letter in the array
  for (let letter of arr) {
      // If the letter already exists in the object, increment its count
      if (letterCount[letter]) {
          letterCount[letter]++;
      } else {
          // If the letter does not exist in the object, set its count to 1
          letterCount[letter] = 1;
      }
  }
  
  // Find the letters that occur more than once
  let duplicates = 0;
  for (let letter in letterCount) {
      if (letterCount[letter] > 1) {
          duplicates++;
      }
  }
  
  // Return the number of duplicates
  return duplicates;
}

// Testing the function
console.log(duplicateCount("indivisibility")); // Output: 1
console.log(duplicateCount("aabBcde")); // Output: 2


//Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
//
//Square all numbers k (0 <= k <= n) between 0 and n.
//
//Count the numbers of digits d used in the writing of all the k**2.
//
//Implement the function taking n and d as parameters and returning this count.
//
//Examples:
//
//n = 10, d = 1 
//the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
//We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.
//
//The function, when given n = 25 and d = 1 as argument, should return 11 since
//the k*k that contain the digit 1 are:
//1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
//So there are 11 digits 1 for the squares of numbers between 0 and 25.
//Note that 121 has twice the digit 1.

function nbDig(n, d) {
    

  //n will be an integer between 0 and the number provided
  //d will be a number between 0 and 9. 
  
  //loop though the numbers in n which will be an array of numbers
   // square each number in that array
  //if the number in the squared array contains the d variable then push that number into a new array
  //join the array together and add 1 to a counter variable each time the number occurs

  let zeroToN = [];
  for(i=0;i<=n;i++){
      zeroToN.push(i*i)
  }
  //cl(zeroToN)
  let joined = zeroToN.join("").split("")
  //cl(joined)

  let checkTheD = 0;
  for(j=0;j<joined.length;j++){
      if(joined[j] == d.toString()){
          checkTheD+=1
      }else{
          checkTheD+=0
      }
  }
  
  
  return checkTheD
 

}

//Write a function that returns a string in which firstname is swapped with last name.
//
//Example(Input --> Output)
//
//"john McClane" --> "McClane john"

function nameShuffler(str){
  const arr = str.split(" ")
  return arr[1] + " " + arr[0]
}

//Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.
//
//The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.
//
//20_year_estimate = one_year_total * 20
//
//You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.
//
//stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
//Make sure your solution takes into account all of the nesting within the stairs array.
//
//Each weekday in the stairs array is an array.
//
//sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
//Your function should return the 20 year estimate of the stairs climbed using the formula above.




  var sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
    7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 
    5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 
    6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825],
monday = [9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719,
    6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932, 7360, 9221, 
    5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105, 9769, 9679, 7842,
    7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098, 6099, 5828, 7217, 9387],
tuesday = [8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292,
     7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758, 8415, 7313,
     7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684, 8793, 8116, 8493, 
     5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756, 5717, 7555, 9447, 7703],
wednesday = [6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102, 
       5047, 6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031, 8710,
       5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652, 5783, 7698, 
       9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357, 7378, 9598, 5405, 9493],
thursday = [6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197,
      9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752, 8695, 8402,
      9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063, 6083, 7383, 7548, 5066, 
      7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858, 5360, 6638, 8012, 8701],
friday = [5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589, 6362, 
   6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473, 5663, 9501, 
   9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072, 8942, 6859, 5617,
   5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455, 8720, 5725, 6960, 5127],
saturday = [5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354, 8943, 
      5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625, 7795, 7003, 
      5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242, 9585, 9649, 9838, 
      7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184, 7960, 9455, 5633, 9085];

var stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]



function stairsIn20(s){
    //your code here
    //each day is a variable
    //each variable is an array
    //i want to get the sum of the numbers of each array and mutiply by 20 then add them together

    //loop through each variable, founnd the sum of each, and multiply each sum by 20
    let sums = stairs.map( day => day.reduce((acc,c) => acc + c) * 20)
    cl(sums)
    //add those sums together
    let solved = sums.reduce((acc,c) => acc+c)
    cl(solved)

  }

stairsIn20(stairs)


//In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}
//
//You can define the object attributes during initialization, like this:
//
//var animal={name:"dog"}
//you can also set/get some properties after the object definition, like this:
//
//var animal={}
//animal.name="dog"  (or animal["name"]="dog")
//Task
//
//Give you a function animal, accept 1 parameter:obj like this:
//
//{name:"dog",legs:4,color:"white"}
//and return a string like this:
//
//"This white dog has 4 legs."

function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

//The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the savings over the normal high street price would effectively cover the cost of your holiday.
//
//You will be given the high street price (normPrice, in £ (Pounds)), the duty free discount (discount, in percent) and the cost of the holiday (in £).
//
//For example, if a bottle costs £10 normally and the duty free discount is 10%, you would save £1 per bottle. If your holiday will cost £500, you would have to purchase 500 bottles to save £500, so the answer you return should be 500.
//
//Another example: if a bottle costs £12 normally and the duty free discount is 50%, you would save £6 per bottle. If your holiday will cost £1000, you would have to purchase 166.66 bottles to save £1000, so your answer should be 166 bottles.
//
//All inputs will be integers. Please return an integer. Round down.


// money saved = (discount percent  * normal price) / 100 (cross multiply)
// holiday goal / money saved = answer

function dutyFree(normPrice, discount, hol){
  const saved = (discount * normPrice) /100
      return Math.floor(hol/saved)
  }


//  Given a string of words, you need to find the highest scoring word.
//
//Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//
//For example, the score of abad is 8 (1 + 2 + 1 + 4).
//
//You need to return the highest scoring word as a string.
//
//If two words score the same, return the word that appears earliest in the original string.
//
//All letters will be lowercase and all inputs will be valid.


function high(x){
  const alphabet = [0,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  //cl(alphabet)

  const words = x.split(" ")
  //cl(words)

  let sums = [];

  words.forEach((word) => {
      const nums = [];
      //word = {word: 0};
      wordArr = word.split("")
      //cl(wordArr)
      for(i=0;i<wordArr.length;i++){
          for(j=0;j<alphabet.length;j++){
              //cl(wordArr[i],alphabet[j])
              if(wordArr[i] == alphabet[j]){
                  nums.push(j)
                  
              }
          }
      }
      let sum = nums.reduce((acc,c) => acc + c)
      sums.push(sum)
      //cl(nums)
      //cl(sum)
  
  })
  cl(words)
  cl(sums)

  

let highestIndex = sums.reduce((highestIndex, current, index, array) => {
return current > array[highestIndex] ? index : highestIndex;
}, 0);

// Now, highestIndex is stored in a variable and can be used later
console.log(highestIndex); // Output: 1

console.log(words[highestIndex])
  

}

high('bab bbb ccc') //[2,1,2] [2,2,2] [3,3,3] => [5] [6] [9]


//When provided with a letter, return its position in the alphabet.
//
//Input :: "a"
//
//Output :: "Position of alphabet: 1"
//
//Note: Only lowercased English letters are tested

function position(letter){
  const charCode = letter.charCodeAt(0) - 96; // 'a' is 97 in ASCII, so subtract 96 to get 'a' as 1
  cl(`Position of alphabet: ${charCode}`)
}

position("a")
position("z")
position("e")

//Write a function that will check if two given characters are the same case.
//
//If either of the characters is not a letter, return -1
//If both characters are the same case, return 1
//If both characters are letters, but not the same case, return 0
//Examples
//
//'a' and 'g' returns 1
//
//'A' and 'C' returns 1
//
//'b' and 'G' returns 0
//
//'B' and 'g' returns 0
//
//'0' and '?' returns -1

function sameCase(a, b){
  //lowercase is 97-122
  //uppercase is 65-90


 a = a.charCodeAt(0) >=97 && a.charCodeAt(0) <=122 ? 'lower' 
  :a.charCodeAt(0) >=65 && a.charCodeAt(0) <=90 ? 'upper'
  :"nal";
 cl(a)

 b = b.charCodeAt(0) >=97 && b.charCodeAt(0) <=122 ? 'lower' 
  : b.charCodeAt(0) >=65 && b.charCodeAt(0) <=90 ? 'upper'
  :"nal";
 cl(b)

 return a == 'lower' && b == 'lower' ? 1
 : a == 'upper' && b =='upper' ?  1
 : a == 'lower' && b == 'upper' ? 0
 : a == 'upper' && b == 'lower' ? 0
 : -1
 
}

sameCase('a','g') //[97,103]
//sameCase('A','C') //[65,67]
//sameCase('b','G') //[98,47]
//sameCase('B','g') //[66,103]
//sameCase('0','?') //[48,63]


//We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
//
//So given a string "super", we should return a list of [2, 4].
//
//Some examples:
//Mmmm  => []
//Super => [2,4]
//Apple => [1,5]
//YoMama -> [1,2,4,6]
//NOTES
//
//Vowels in this context refers to: a e i o u y (including upper case)
//This is indexed from [1..n] (not zero indexed!)


function vowelIndices(word){
  //your code here
  //finding vowels in a given string
  //return the indices of the vowels within the string
  //should return vowels in an array 
  //indices should be in order of how they appear
  //a,e,i,o,u sometimes y?
  //case sensitive?
  // indexed from 1 not zero!!!
  //if no vowels return empty array
  // a= 97,e= 101, i=105 , o=111 , u= 117, y=121
  

  //turn string to lowercase
  //word needs to stay a string because charCodeAt only works on strings
  const lower = word.toLowerCase()
  cl(lower)
  //inititate empty array to hold indices
  let indices = [];
  //for loop to iterate through letters
   //conditional to check whether it is a vowel and return index + 1 if it is
 for(i=0;i<lower.length;i++){
     if(lower.charCodeAt(i) == 97 || lower.charCodeAt(i) == 101 ||lower.charCodeAt(i) == 105 ||lower.charCodeAt(i) == 111 ||lower.charCodeAt(i) == 117 ||lower.charCodeAt(i) == 121 ){
         indices.push(i+1)
     }
 }
 cl(indices)

}

vowelIndices("mmm")
vowelIndices("super")
//vowelIndices("apple")
vowelIndices("YoMama")

//Your task is simply to count the total number of lowercase letters in a string.
//
//Examples
//
//"abc" ===> 3
//
//"abcABC123" ===> 3
//
//"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3
//
//"" ===> 0;
//
//"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0
//
//"abcdefghijklmnopqrstuvwxyz" ===> 26

function lowercaseCount(str){
  //use regex to find lower case letter in a string
  //count the number of lower case letters
  //return number

  
  //filter letters using regex match
  //count length of string/arr
  
  lowerC = str.match(/[a-z]/g)
  
  return lowerC == null ? 0
  :lowerC.length

  


}

lowercaseCount("abcABC123")

//From Wikipedia:
//
//"A divisibility rule is a shorthand way of determining whether a given integer is divisible by a fixed divisor without performing the division, usually by examining its digits."
//
//When you divide the successive powers of 10 by 13 you get the following remainders of the integer divisions:
//
//1, 10, 9, 12, 3, 4 because:
//
//10 ^ 0 ->  1 (mod 13)
//10 ^ 1 -> 10 (mod 13)
//10 ^ 2 ->  9 (mod 13)
//10 ^ 3 -> 12 (mod 13)
//10 ^ 4 ->  3 (mod 13)
//10 ^ 5 ->  4 (mod 13)
//(For "mod" you can see: https://en.wikipedia.org/wiki/Modulo_operation)
//
//Then the whole pattern repeats. Hence the following method:
//
//Multiply
//
//the right most digit of the number with the left most number in the sequence shown above,
//the second right most digit with the second left most digit of the number in the sequence.
//The cycle goes on and you sum all these products. Repeat this process until the sequence of sums is stationary.
//
//Example:
//
//What is the remainder when 1234567 is divided by 13?
//
//7      6     5      4     3     2     1  (digits of 1234567 from the right)
//×      ×     ×      ×     ×     ×     ×  (multiplication)
//1     10     9     12     3     4     1  (the repeating sequence)
//Therefore following the method we get:
//
// 7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178
//
//We repeat the process with the number 178:
//
//8x1 + 7x10 + 1x9 = 87
//
//and again with 87:
//
//7x1 + 8x10 = 87
//
//From now on the sequence is stationary (we always get 87) and the remainder of 1234567 by 13 is the same as the remainder of 87 by 13 ( i.e 9).
//
//Task:
//
//Call thirt the function which processes this sequence of operations on an integer n (>=0). thirt will return the stationary number.
//
//thirt(1234567) calculates 178, then 87, then 87 and returns 87.
//
//thirt(321) calculates 48, 48 and returns 48

function thirt(n) {
  const cl = console.log; // Alias for logging

  // Convert the number into an array of digits
  let numArr = n.toString().split("").map(Number);
  cl("Initial Digits:", numArr);

  // Create the repeating sequence of remainders of 10^i % 13
  const sequence = [1, 10, 9, 12, 3, 4]; // Known repeating pattern for 10^i % 13
  cl("Sequence:", sequence);

  // Function to calculate the sum based on the sequence
  const calcSum = (arr) => {
    let reversed = arr.reverse();
    return reversed.reduce((sum, digit, idx) => {
      return sum + digit * sequence[idx % sequence.length];
    }, 0);
  };

  let sum = calcSum(numArr);
  let previousSum;

  // Repeat the process until the sum stabilizes
  while (sum !== previousSum) {
    previousSum = sum;
    sum = calcSum(previousSum.toString().split("").map(Number));
    cl("Current Sum:", sum);
  }

  return sum;
}

// Test the function
console.log("Final Result:", thirt(1234567));


//Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
//
//Examples
//
//"Hi!"     ---> "Hi!"
//"Hi!!!"   ---> "Hi!"
//"!Hi"     ---> "Hi!"
//"!Hi!"    ---> "Hi!"
//"Hi! Hi!" ---> "Hi Hi!"
//"Hi"      ---> "Hi!"

function remove (string) {
  return string.split("").filter((x) => x !== "!").join("") + "!"  
  }

  //Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".
//
//We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.
//
//For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia c"
//
//"zodiac" -> 26
//The consonant substrings are: "z", "d" and "c" with values "z" = 26, "d" = 4 and "c" = 3. The highest is 26.
//
//"strength" -> 57
//The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.


  function solve(s) {
    const vowels = /[aeiou]/g
    let noV = s.replace(vowels, " ")
    //cl(noV)
    let substrings = noV.split(" ")
    //cl(subs)
  
    const alphabetMap = new Map();
  
    for (let i = 0; i < 26; i++) {
      const letter = String.fromCharCode(97 + i); // 'a', 'b', 'c', ...
      alphabetMap.set(letter, i + 1);
    }
    
    let maxSum = 0;
    
    substrings.forEach((substring) => {
      const letters = substring.split(""); // Split substring into individual letters
      const sum = letters.reduce((acc, letter) => acc + (alphabetMap.get(letter) || 0), 0); // Sum the values
      maxSum = Math.max(maxSum, sum); // Update maxSum if current sum is greater
    });
  
    return maxSum; // Return the maximum sum
  
    
  };
  
  //solve("zodiac")
  //solve("strength")
  

  //Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.
//
//All inputs will be valid.

function digits(n) {
  cl(n.toString().split("").length)
}

digits(9876543210)

//You are given two interior angles (in degrees) of a triangle.
//
//Write a function to return the 3rd.
//
//Note: only positive integers will be tested.

function otherAngle(a, b) {
  return 180 - (a + b)
}

otherAngle(30,60)

//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//
//Examples
//
//"This is an example!" ==> "sihT si na !elpmaxe"
//"double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  let arr = str.split(" ")
  cl(arr)
  let reversed = []
  for(i=0;i<arr.length;i++){
    reversed.push(arr[i].split("").reverse().join(""))
  }
  cl(reversed.join(" "))
}

reverseWords("This is an example!")
reverseWords("  double  spaced  words  ")
reverseWords("a b c d")

//The prime numbers are not regularly spaced. For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43
//
//A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes (see: http://mathworld.wolfram.com/PrimeGaps.html).
//
//We will write a function gap with parameters:
//
//g (integer >= 2) which indicates the gap we are looking for
//
//m (integer > 2) which gives the start of the search (m inclusive)
//
//n (integer >= m) which gives the end of the search (n inclusive)
//
//In the example above gap(2, 3, 50) will return [3, 5] or (3, 5) or {3, 5} which is the first pair between 3 and 50 with a 2-gap.
//
//So this function should return the first pair of two prime numbers spaced with a gap of g between the limits m, n if these numbers exist otherwise `nil or null or None or Nothing (or ... depending on the language).
//
//In such a case (no pair of prime numbers with a gap of `g`)
//In C: return [0, 0]
//In C++, Lua, COBOL: return `{0, 0}`. 
//In F#: return `[||]`. 
//In Kotlin, Dart and Prolog: return `[]`.
//In Pascal: return Type TGap (0, 0).
//Examples:
//
//-  gap(2, 5, 7) --> [5, 7] or (5, 7) or {5, 7}
//
//gap(2, 5, 5) --> nil. In C++ {0, 0}. In F# [||]. In Kotlin, Dart and Prolog return []`
//
//gap(4, 130, 200) --> [163, 167] or (163, 167) or {163, 167}
//
//([193, 197] is also such a 4-gap primes between 130 and 200 but it's not the first pair)
//
//gap(6,100,110) --> nil or {0, 0} or ... : between 100 and 110 we have 101, 103, 107, 109 but 101-107is not a 6-gap because there is 103in between and 103-109is not a 6-gap because there is 107in between.
//
//You can see more examples of return in Sample Tests.

function gap(g, m, n) {
  
  function isPrimeNumber(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false; // Skip even numbers
    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let previousPrime = null;

  for (let i = m; i <= n; i++) {
    if (isPrimeNumber(i)) {
      if (previousPrime !== null && i - previousPrime === g) {
        return [previousPrime, i];
      }
      previousPrime = i;
    }
  }
  return null;
}


//Sum of Pairs
//
//Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.
//
//If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.
//
//sum_pairs([11, 3, 7, 5],         10)
//#              ^--^      3 + 7 = 10
//== [3, 7]
//
//sum_pairs([4, 3, 2, 3, 4],         6)
//#          ^-----^         4 + 2 = 6, indices: 0, 2 *
//#             ^-----^      3 + 3 = 6, indices: 1, 3
//#                ^-----^   2 + 4 = 6, indices: 2, 4
//#  * the correct answer is the pair whose second value has the smallest index
//== [4, 2]
//
//sum_pairs([0, 0, -2, 3], 2)
//#  there are no pairs of values that can be added to produce 2.
//== None/nil/undefined/Nothing (Based on the language)
//
//sum_pairs([10, 5, 2, 3, 7, 5],         10)
//#              ^-----------^   5 + 5 = 10, indices: 1, 5
//#                    ^--^      3 + 7 = 10, indices: 3, 4 *
//#  * the correct answer is the pair whose second value has the smallest index
//== [3, 7]
function sumPairs(ints, s) {
  let seen = new Set();
  
  for (let i = 0; i < ints.length; i++) {
    let complement = s - ints[i];
    
    if (seen.has(complement)) {
      return [complement, ints[i]];
    }
    
    seen.add(ints[i]);
  }

  return undefined;
}


//This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).
//
//Add the value "codewars" to the array websites 1,000 times.

let websites = [];
  
  for(i=0;i<1000;i++){
    websites.push("codewars")
  }
  

//  Count the number of divisors of a positive integer n.
//
//Random tests go up to n = 500000, but fixed tests go higher.
//
//Examples (input --> output)
//
//4 --> 3 // we have 3 divisors - 1, 2 and 4
//5 --> 2 // we have 2 divisors - 1 and 5
//12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
//30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
//Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

function getDivisorsCnt(n) {
  let count =0;
  
  for(i=0;i*i<=n;i++){

    if(n % i === 0 ){
      count += (i * i === n) ? 1 : 2; 
    }

  }
  return count
}


//Simple, given a string of words, return the length of the shortest word(s).
//
//String will never be empty and you do not need to account for different data types.

function findShort(s){
  let smallest = Infinity
  const arr = s.split(" ")
  
    arr.forEach(element => {
      if(element.length < smallest)
     smallest = element.length
    });
    return smallest
  }

//Your task, is to create N×N multiplication table, of size provided in parameter.
//
//For example, when given size is 3:
//
//1 2 3
//2 4 6
//3 6 9
//For the given example, the return value should be:
//
//[[1,2,3],[2,4,6],[3,6,9]]

  function multiplicationTable(size) {
    let arr = [];
    
    for(i=1;i<=size;i++){
        let multi = []
      for(j=1;j<=size;j++){
        multi.push((i*j))
      }
      arr.push(multi)
      cl(arr)
    }
  
  }
  

//  For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"
//
//Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)
//
//Note: Make sure you return the correct message with correct spaces and punctuation.
//
//Please leave feedback for this kata. Cheers!

function cookie(x){
  //if(typeof x === "string"){
  //  cl("Zach")
  //}else if(typeof x === "number"){
  //  cl("Monica")
  //}else cl("the dog")

  return typeof x === "string" ? "Who ate the last cookie? It was Zach!"
  : typeof x === "number" ? "Who ate the last cookie? It was Monica!"
  : "Who ate the last cookie? It was the dog!"
}

//cl(cookie(5))
//cl(cookie("hey"))
//cl(cookie(true))


//You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//
//Complete the method which accepts such an array, and returns that single different number.
//
//The input array will always be valid! (odd-length >= 3)
//
//Examples
//
//[1, 1, 2] ==> 2
//[17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  cl(numbers)
 let hashmap = {}; //create empty object
 for(let arr of numbers){ //loop through and create key and values
  if(hashmap[arr] === undefined){ //if there is nothing assigned to key in object... 
    hashmap[arr] = 1 //assign number 1
  }else {
    hashmap[arr] += 1 //if the key already ixists add another 1
  }
 }

 cl(hashmap)
 for(let key in hashmap){ //loop through keys
  if(hashmap[key] === 1){ //if key value = 1 then return key
    cl(key)
    
  }
 }

 
}

stray([17, 17, 3, 17, 17, 17, 17])
stray([1,1,2])

//Task Description
//
//You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.
//
//You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.
//
//Write a function that takes the website date/time in its original string format and returns the shortened format.

function shortenToDate(longDate) {
  date = longDate.split(",")
  date.pop()
  cl(date.join(" "))
 }
 

// Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.
//
//Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is.

function whoIsPaying(name){
  let trunc = ''
  if(name.length <= 2){
    trunc = name
    cl([trunc])
  }else{
  const fl = name.split("")[0];
  const sl = name.split("")[1];
  trunc =  `${fl}${sl}`
  cl([name, trunc])
  }
}

whoIsPaying("Mexico")
whoIsPaying("I")

//This function should test if the factor is a factor of base.
//
//Return true if it is a factor or false if it is not.
//
//About factors
//
//Factors are numbers you can multiply together to get another number.
//
//2 and 3 are factors of 6 because: 2 * 3 = 6
//
//You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
//You can use the mod operator (%) in most languages to check for a remainder
//For example 2 is not a factor of 7 because: 7 % 2 = 1
//
//Note: base is a non-negative number, factor is a positive number.

function checkForFactor (base, factor) {
  //cl(base%factor)
  return base%factor === 0 ? cl(true) : cl(false)
}
checkForFactor(10,2)
checkForFactor(63,7)
checkForFactor(2450,5)
checkForFactor(24612,3)

checkForFactor(9,2)
checkForFactor(653,7)
checkForFactor(2453,5)
checkForFactor(24617,3)

//You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.
//
//Your function will accept three arguments:
//The first and second argument should be numbers.
//The third argument should represent a sign indicating the operation to perform on these two numbers.
//
//if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
//
//Example:
//
//calculator(1,2,"+"); //=> result will be 3
//calculator(1,2,"&"); //=> result will be "unknown value"
//calculator(1,"k","*"); //=> result will be "unknown value"
//Good luck!

function calculator(a,b,sign){
  

  if(typeof a !== "number" || typeof b !== "number" || !["+", "-", "/", "*"].includes(sign)) {
    cl("unkwnown value")
  }else {
    switch(sign){
      case "+": cl(a+b);
      break;
      case "-": cl(a-b);
      break;
      case "/": cl(a/b);
      break;
      case "*": cl(a*b);
      break;
      default: cl("huh?")
    }
  }
  
  }
  
  calculator(1,2,"+")
  calculator(1,2,"-")
  calculator(6,2,"$")
  calculator(6,"h","*")

//  Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
//
//For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
//
//The input will be a lowercase string with no spaces.
//
//Good luck!
//
//If you like this Kata, please try:
//
//Indexed capitalization
//
//Even-odd disparity

function capitalize(s){
  const arr = s.split("")
  let evens = [];
  let odds = [];
  for(let i=0;i<arr.length;i++){
    //cl(i%2)
    if(i%2 == 0){
      evens.push(arr[i].toUpperCase())
      odds.push(arr[i].toLowerCase())
    }else{
      evens.push(arr[i].toLowerCase())
      odds.push(arr[i].toUpperCase())
    } 
    
  }
 //cl(evens)
 //cl(odds)
 cl([evens.join(""), odds.join("")])
};

//capitalize("abcdef")
capitalize("abracadabra")


//Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.
//
//Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.
//
//Examples:
//
//var sleigh = new Sleigh();
//sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE
//
//sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
//sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
//sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;)

function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  // TODO

  let isNameCorrect = false;
  if(name == `Santa Claus`){
    isNameCorrect = true
  }else isNameCorrect == false

  let isPassCorrect = false;
  if(password === `Ho Ho Ho!`){
    isPassCorrect = true
  }else isPassCorrect = false

  
  if(isNameCorrect === true && isPassCorrect === true){
    return true
  }else return false
};

//Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:
//
//  3 -->    15  (  3 * 5¹)
// 10 -->   250  ( 10 * 5²)
//200 --> 25000  (200 * 5³)
//  0 -->     0  (  0 * 5¹)
// -3 -->   -15  ( -3 * 5¹)

function multiply(number){
  const str = number.toString()
  const regex = /[0-9]/g
  const nums = str.match(regex)
  
  
 return number * Math.pow(5,nums.length)
}

//Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.
//
//Examples (Input -- => Output):
//
//"abcdef"                      -- => "abcdef"
//"pqksuvy"                     -- => "kpqsuvy"
//"zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"

function sortGiftCode(code){
  let charCodes = []

  for(i=0;i<code.length;i++){
    charCodes.push(code.charCodeAt(i))  
    
  }
  
  charCodes.sort((a,b) => a-b)
  cl(charCodes)
  let sorted = String.fromCharCode(...charCodes)
  cl(sorted)
}


//Problem
//
//Determine whether a non-negative integer number is colorful or not.
//
//263 is a colorful number because [2, 6, 3, 2*6, 6*3, 2*6*3] are all different; whereas
//236 is not colorful, because [2, 3, 6, 2*3, 3*6, 2*3*6] has 6 twice.
//
//So take all consecutive subsets of digits, take their products, and ensure all the products are different.
//
//Examples
//
//263  -->  true
//236  -->  false

function colourful(number) {
  const arr = Array.from(String(number), Number)
  //cl(arr) 
  

 let reduced 
 let allNums

 if(arr.length == 1){
  return true
 }else if(arr.length == 2){
  reduced = arr.reduce((acc,c) => acc * c)
  allNums = arr.concat(reduced)
  //cl(allNums)
  
 }else if(arr.length>2){
    reduced = arr.reduce((acc,c) => acc * c)
    //cl(reduced)
    
    consecutiveSets = [];
    for(i=0;i<arr.length-1;i++){
     consecutiveSets.push(arr[i] * arr[i+1])
    }
    //cl(consecutiveSets)
    allNums = arr.concat(consecutiveSets).concat(reduced)
    //cl(allNums)
  }

const unique = allNums.filter((item, index) => allNums.indexOf(item) == index)
//cl(unique)

if(allNums.join() == unique.join() ){
  return true
}else return false


  
}

console.log(colourful(23))


//Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
//
//a -> 1
//e -> 2
//i -> 3
//o -> 4
//u -> 5
//For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.
//
//Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
//
//For example, decode("h3 th2r2") would return "hi there".
//
//For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

function encode(string) {
  const arr = string.split("")
  cl(arr)
  let encoded = []
  for(i=0;i<arr.length;i++){
    arr[i] == "a" ? encoded.push("1") :
    arr[i] == "e" ? encoded.push("2") :
    arr[i] == "i" ? encoded.push("3") :
    arr[i] == "o" ? encoded.push("4") :
    arr[i] == "u" ? encoded.push("5") :
    encoded.push(arr[i])
  }

  console.log(encoded.join(""))
  
}

function decode(string) {
  const arr = string.split("")
  cl(arr)
  let decoded = []
  for(i=0;i<arr.length;i++){
    arr[i] == "1" ? decoded.push("a") :
    arr[i] == "2" ? decoded.push("e") :
    arr[i] == "3" ? decoded.push("i") :
    arr[i] == "4" ? decoded.push("o") :
    arr[i] == "5" ? decoded.push("u") :
    decoded.push(arr[i])
  }

  console.log(decoded.join(""))
  
}

encode("hello")
decode("h2ll4")

//You've just discovered a square (NxN) field and you notice a warning sign. The sign states that there's a single bomb in the 2D grid-like field in front of you.
//
//Write a function that accepts a 2D array, and returns the location of the mine. The mine is represented as the integer 1 in the 2D array. Areas in the 2D array that are not the mine will be represented as 0s.
//
//The location returned should be an array (Tuple<int, int> in C#, RAX:RDX in NASM) where the first element is the row index, and the second element is the column index of the bomb location (both should be 0 based). All 2D arrays passed into your function will be a square (NxN), and there will only be one mine in the array.
//
//Examples (Input --> Output)
//
//[ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] --> [0, 0]
//
//[ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] --> [1, 1]
//
//[ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] --> [2, 1]

function mineLocation(field){
  let arr = [] //create empty array
  for(i=0;i<field.length; i++){
    if(field[i].includes(1)){ //find index of array that has the mine
      arr.push(i) //push that index to empty arr
    }
  }

 let index = arr[0] //take that index
 let fieldindex = field[index].indexOf(1) //use index to select the array that contains mine(1) then get the index of 1. 
 
 arr.push(fieldindex) //push that index number to arr. return arr
 return arr

  
    
}