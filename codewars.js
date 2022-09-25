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