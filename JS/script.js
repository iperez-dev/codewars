// -------------------------------------------------------------------------------------------------------------------------
// METHODS
// -------------------------------------------------------------------------------------------------------------------------
// .sort() method sorts the elements as strings in alphabetical and ascending order.
// 1 - Given an array of integers, your solution should find the smallest integer.

function findSmallestInt(args) {
  return args.sort((a, b) => a - b)[0];
}

//-----------------------------------------------------------------------------------------------------------------------
// .map() method creates a new array populated with the results of calling a provided function
// Given an array of integers, return a new array with each value doubled.

function maps(x) {
  return x.map((n) => n * 2);
}

//-----------------------------------------------------------------------------------------------------------------------
// .reduce() method adds two values together
// 2 - Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(a, b) {
  return numbers.reduce((acc, cv) => acc + cv * cv, 0);
}

//-----------------------------------------------------------------------------------------------------------------------
// .repeat() method returns a string with a number of copies of a string
// 3 - Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr(n, s) {
  return s.repeat(n);
}

//-----------------------------------------------------------------------------------------------------------------------
// .slice() method allows you to extract subset elements of an array and add them to the new array
// 4 - Your goal is to create a function that removes the first and last characters of a string.

function removeChar(str) {
  return str.slice(1, -1);
}

//-----------------------------------------------------------------------------------------------------------------------
// .trim() method removes the whitespace at the edge of the string
// .repeat() method returns a new string that contains the specified number of copies of the string
// 5 - This is the last lesson about the string object, we will learn the two pieces of knowledge used to format the string.

function fiveLine(s) {
  s = s.trim();
  return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`;
}

//-----------------------------------------------------------------------------------------------------------------------
//.split(' ') method splits a string into an array of substrings.
//.join('') method  method creates and returns a new string by concatenating all of the elements in an array
// 6 - Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
  return x.split(" ").join("");
}

//-----------------------------------------------------------------------------------------------------------------------
// .replace(/[ ]/g," ")  method replaces a specified phrase with another specified phrase (hyphen)
// 7 - Return string to lower case, no spaces, with hyphen between words

function getSpellName() {
  return str.trim().toLowerCase().replace(/[ -]+/g, "-");
}

//-----------------------------------------------------------------------------------------------------------------------
// .reverse() method reverses the order of the elements in an array.

function reverseList(list) {
  return list.reverse();
}

//-----------------------------------------------------------------------------------------------------------------------
// .filter() method creates a new array filled with elements that pass a test provided by a function.
// //Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

function isMultiple(arr) {
  return arr.filter((e, i) => e % i === 0);
}

//-----------------------------------------------------------------------------------------------------------------------
// .toString() method converts a boolean to a String
// Convert a Boolean to a String

function booleanToString(b) {
  return b.toString();
}

//-----------------------------------------------------------------------------------------------------------------------
// String(x) method converts a number to a String
// Convert a number to a String

function numberToString(b) {
  return String(b);
}

//-----------------------------------------------------------------------------------------------------------------------
// .toLowerCase() method returns the value of the string converted to lower case.

function firtstName(firstName) {
  return firstName.toLowerCase();
}

//-----------------------------------------------------------------------------------------------------------------------
// .indexOf() method returns the first index at which a given element can be found in the array
// Find the index of x element in an array and return "found x at position ___"

function findIndex(x) {
  return `found x at position ${findIndex.indexOf("x")}`;
}
//-----------------------------------------------------------------------------------------------------------------------

// .endsWith() method determines whether a string ends with the characters of a specified string

function correctTail (body, tail){
	const correctTail = (body, tail) => body.endsWith(tail)

//-----------------------------------------------------------------------------------------------------------------------

// .unshift() method adds one or more elements to the beginning of an array

function addElemStart (name)
	return name.unshift('John')
}
// John Stoomer

//-----------------------------------------------------------------------------------------------------------------------
// .toFixed(2) method rounds the string to a specified number of decimals. //2 in this case


let num = 5.56789;
let n = num.toFixed(2);
// 5.56


//-----------------------------------------------------------------------------------------------------------------------
// .charAt(0) method, at index 0 select the specified character of the string. / the first one in this case

function areYouPlayingBanjo(name) {
  return name.charAt(0)
}

//-----------------------------------------------------------------------------------------------------------------------



















// -------------------------------------------------------------------------------------------------------------------------
// FUNCTIONS
// -------------------------------------------------------------------------------------------------------------------------

//  Math.pow() method returns the value of a base raised to a power.

Math.pow(4, 0.5);
// expected output: 2

//-----------------------------------------------------------------------------------------------------------------------

// Math.floor() method always rounds down and returns the largest integer
// Nathan drinks 0.5 litres of water per hour of cycling. You get given the time in hours and you need to return the number of litres
// Nathan will drink, rounded to the smallest value.

function litres(time) {
  return Math.floor(time / 2);
}

//-----------------------------------------------------------------------------------------------------------------------

// Math.ceil() function always rounds up and returns the smaller integer greater than or equal to a given number.

Math.ceil(0.95);
// expected output: 1

//-----------------------------------------------------------------------------------------------------------------------

// Number(x),0 converts all values to numbers
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumOfValues(arr) {
  return arr.reduce((acc, c) => acc + Number(c), 0);
}

























// -----------------------------------------------------------------------------------------------------------------------
// CODEWARS (DO AGAIN)
// -----------------------------------------------------------------------------------------------------------------------
// 1 - You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

// -----------------------------------------------------------------------------------------------------------------------
// 2 - Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
  return x.split(" ").join("");
}

// -----------------------------------------------------------------------------------------------------------------------
// 3 - Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0

function summation(num) {
  return (num * (num + 1)) / 2;
}
// -----------------------------------------------------------------------------------------------------------------------
// 4 - Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

// -----------------------------------------------------------------------------------------------------------------------
// 5 - The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc. Task:
// Given a year, return the century it is in

function century(year) {
  return Math.ceil(year / 100); //using ceiling method to round up to nearest century (100)
}
// -----------------------------------------------------------------------------------------------------------------------

// 6 - Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
  function basicOp(operation, value1, value2) {
    switch (operation) {
      case "+":
        return value1 + value2;
      case "-":
        return value1 - value2;
      case "*":
        return value1 * value2;
      case "/":
        return value1 / value2;
      default:
        return 0;
    }
  }
}

// -----------------------------------------------------------------------------------------------------------------------

// 7 - Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  return String(n).split("").map(number).reverse();
}
// -----------------------------------------------------------------------------------------------------------------------

// 8 - Given an array of integers, return a new array with each value doubled.

function maps(x) {
  return x.map((n) => n * 2);
}
// -----------------------------------------------------------------------------------------------------------------------

// 9 - Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

function abbrevName(name) {
  return name
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");
}

// -----------------------------------------------------------------------------------------------------------------------

// 10 - Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

function abbrevName(name) {
  return name
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");
}

// -----------------------------------------------------------------------------------------------------------------------

// 11 - Write a function findNeedle() that takes an array full of junk but containing one "needle". After your function finds
// the needle it should return a message (as a string) that says: "found the needle at position " plus the index it found the needle, so:

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}

// -----------------------------------------------------------------------------------------------------------------------

// 12 - Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}

// -----------------------------------------------------------------------------------------------------------------------

// 13 - Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
  return input && input.length
    ? [
        input.filter((p) => p > 0).length,
        input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
      ]
    : [];
}

// -----------------------------------------------------------------------------------------------------------------------
// 14 - Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.


function shortcut(string){
  return string.replace(/[aeiou]/g,'')
}

// -----------------------------------------------------------------------------------------------------------------------
// 15 - Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(arr, n) {
  return arr.slice(0, n)
}

// -----------------------------------------------------------------------------------------------------------------------
// 16 - Your goal is to return multiplication table for number that is always an integer from 1 to 10.


function multiTable(number) {
  let array = []
  for (let i = 1; i <= 10; i++){
    array.push(`${i} * ${number} = ${number * i}`)
  }
  return array.join('\n')
}

// -----------------------------------------------------------------------------------------------------------------------
// 17 - For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.


function dutyFree(normPrice, discount, hol){
  return(Math.floor(hol / normPrice / discount * 100))
}

// -----------------------------------------------------------------------------------------------------------------------
// 17 - 39.99 becomes $39.99 / 3.1 needs to become $3.10

function formatMoney(amount){
  return "$"+amount.toFixed(2)
}

// -----------------------------------------------------------------------------------------------------------------------
// 18 - Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value. Your expected output is an array of positive integers from 1 to n (inclusive).


function preFizz(n) {
  var output = [];
  for (var i=1; i<=n; i++)
  {
    output.push(i);
  }
  return output;
}

// -----------------------------------------------------------------------------------------------------------------------
// 19 - Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.


function toBinary(n){
  return +(n.toString(2))
}

// -----------------------------------------------------------------------------------------------------------------------
// 20 - Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.


function invert(array) {
   return array.map((num) => -num)
}

// -----------------------------------------------------------------------------------------------------------------------
// 21 - Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string


function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}


// -----------------------------------------------------------------------------------------------------------------------
// 22 -
