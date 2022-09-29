//==============================================================================================================================
// METHODS
//==============================================================================================================================
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .sort() method sorts the elements as strings in alphabetical and ascending order.
// 1 - Given an array of integers, your solution should find the smallest integer.

function findSmallestInt(args) {
  return args.sort((a, b) => a - b)[0];
}

//-----------------------------------------------------------------------------------------------------------------------

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .map() method creates a new array populated with the results of calling a provided function


function maps(x) {
  return x.map((n) => n * 2);
}

//-----------------------------------------------------------------------------------------------------------------------

const doubleChar = (str) => str.split("").map(c => c + c).join("");


//-----------------------------------------------------------------------------------------------------------------------

function maps(x) {
  return x.map((n) => n * 2);
}

//-----------------------------------------------------------------------------------------------------------------------

function invert(array) {
   return array.map((num) => -num)
}

//-----------------------------------------------------------------------------------------------------------------------

function abbrevName(name) {
  return name.split(" ").map((i) => i[0].toUpperCase()).join(".");
}

//-----------------------------------------------------------------------------------------------------------------------

function digitize(n) {
  return String(n).split("").map(number).reverse();
}


//-----------------------------------------------------------------------------------------------------------------------

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .reduce() method adds two values together

function squareSum(a, b) {
  return numbers.reduce((acc, cv) => acc + cv * cv, 0);
}

//-----------------------------------------------------------------------------------------------------------------------

function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

//-----------------------------------------------------------------------------------------------------------------------

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}

//-----------------------------------------------------------------------------------------------------------------------

const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)

//-----------------------------------------------------------------------------------------------------------------------

function sumMix(x){
  return x.reduce((a, b) => a + Number(b),0)
}

//-----------------------------------------------------------------------------------------------------------------------

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .repeat() method returns a string with a number of copies of a string

function repeatStr(n, s) {
  return s.repeat(n);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .slice() method allows you to extract subset elements of an array and add them to the new array

function removeChar(str) {
  return str.slice(1, -1);
}

//-----------------------------------------------------------------------------------------------------------------------

function take(arr, n) {
  return arr.slice(0, n)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .trim() method removes the whitespace at the edge of the string

function fiveLine(s) {
  s = s.trim();
  return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .split(' ') method splits a string into an array of substrings.
// .split('') => characters
// .split(' ') => words


function noSpace(x) {
  return x.split(" ").join("");
}

//-----------------------------------------------------------------------------------------------------------------------

function DNAtoRNA(dna) {
  return dna.split("T").join("U");

}

//-----------------------------------------------------------------------------------------------------------------------

function removeExclamationMarks(s) {
  return s.split('!').join('');
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//.join('') method  method creates and returns a new string by concatenating all of the elements in an array

function noSpace(x) {
  return x.split(" ").join("");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .replace('dog', 'monkey') method replaces a specified phrase with another specified phrase 

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replace('dog', 'monkey'));

//-----------------------------------------------------------------------------------------------------------------------

function shortcut(string){
  return string.replace(/[aeiou]/g,'')
}

//-----------------------------------------------------------------------------------------------------------------------

function removeExclamationMarks(s) {
  return s.replace('!', '')
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .reverse() method reverses the order of the elements in an array.

function reverseList(list) {
  return list.reverse();
}

//-----------------------------------------------------------------------------------------------------------------------

function reverseListOfWords(str){
  return str.split(' ').reverse().join(' ')
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .filter() method creates a new array filled with elements that pass a test provided by a function.


function isMultiple(arr) {
  return arr.filter((e, i) => e % i === 0);
}

//-----------------------------------------------------------------------------------------------------------------------

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

//-----------------------------------------------------------------------------------------------------------------------

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

//-----------------------------------------------------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .toString() method converts a boolean or array to a String

function booleanToString(b) {     //boolean to string
  return b.toString();
}

function numberToString(b) {      //number to string
  return String(b);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .toLowerCase() method returns the value of the string converted to lower case.

function firtstName(firstName) {
  return firstName.toLowerCase();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .indexOf() method returns the first index at which a given element can be found in the array

function findIndex(x) {
  return `found x at position ${findIndex.indexOf("x")}`;
}

//-----------------------------------------------------------------------------------------------------------------------

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .endsWith() method determines whether a string ends with the characters of a specified string

function correctTail (body, tail){
	const correctTail = (body, tail) => body.endsWith(tail)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .unshift() method adds elements to the beginning of an array

function addElemStart (name)
	return name.unshift('John')
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .toFixed(2) method rounds the string to a specified number of decimals. //2 in this case

let num = 5.56789;
let n = num.toFixed(2);
// 5.56

//-----------------------------------------------------------------------------------------------------------------------

function formatMoney(amount){
  return "$"+amount.toFixed(2)
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .concat() method is used to merge two or more arrays

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .charAt(0) method, at index 0 select the specified character of the string. / the first one in this case

function areYouPlayingBanjo(name) {
  return name.charAt(0
}

//-----------------------------------------------------------------------------------------------------------------------

function getAge(inputString){
 return +(inputString.charAt(0))
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .includes() method returns true if an array contains a specified value.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .padStart() adds white spaces at the beginning of a sentence

padStart()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .padEnd() adds white spaces at the end of a sentence

padEnd()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .toArray() method is used to convert into a normal array



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//










//==============================================================================================================================
// FUNCTIONS
//==============================================================================================================================
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Math.pow() method returns the value of a base raised to a power.

Math.pow(4, 2);
// expected output: 16

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math.floor() function rounds down to the smallest integer

console.log(Math.floor(5.95));
// expected output: 5

console.log(Math.floor(5.05));
// expected output: 5

console.log(Math.floor(5));
// expected output: 5

console.log(Math.floor(-5.05));
// expected output: -6
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The Math.ceil() function rounds down to the largest integer

console.log(Math.ceil(.95));
// expected output: 1

console.log(Math.ceil(4));
// expected output: 4

console.log(Math.ceil(7.004));
// expected output: 8

console.log(Math.ceil(-7.004));
// expected output: -7

//-----------------------------------------------------------------------------------------------------------------------

function century(year) {
  return Math.ceil(year / 100); //using ceiling method to round up to nearest century (100)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math.round() function rounds down the number to the smallest or largest integer

Math.round(0.95);
// expected output: 1

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Number(),0 converts all values to numbers

function sumOfValues(arr) {
  return arr.reduce((acc, c) => acc + Number(c), 0);
}

//-----------------------------------------------------------------------------------------------------------------------

function toBinary(n){
  return +(n.toString(2))
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math.max() function returns the largest of the numbers given as input
 
console.log(Math.max(...list));
// expected output: 3

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math.min() function returns the smallest of the numbers given as input
 
console.log(Math.min(...list));
// expected output: 1

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math.abs() function returns the absolute value of a number.

function difference(a, b) {
  return Math.abs(a - b);
}

console.log(difference(3, 5));
// expected output: 2

console.log(difference(5, 3));
// expected output: 2


//==========================================================================================================================
// Ternary Operators
//==========================================================================================================================

const quarterOf = (month) => {
 return month <=3 ? 1 : month <= 6 ? 2 : month <=9 ? 3 : month <=12 ? 4 : 0;
}

//-----------------------------------------------------------------------------------------------------------------------

const areaOrPerimeter = function(l , w) {
  return l == w ? l * l : 2 * (l + w);
};

//-----------------------------------------------------------------------------------------------------------------------

function getGrade (s1, s2, s3) {
  let ave = (s1 + s2 + s3) / 3
  return ave >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}

//-----------------------------------------------------------------------------------------------------------------------

const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)

//-----------------------------------------------------------------------------------------------------------------------

const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));

//-----------------------------------------------------------------------------------------------------------------------

function updateLight(current) {
  return current === 'green' ? 'yellow' : current === "yellow" ? 'red' : 'green'
}

//-----------------------------------------------------------------------------------------------------------------------










//==========================================================================================================================
// CODEWARS (DO AGAIN)
//==========================================================================================================================
// 1 - Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.


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


// -----------------------------------------------------------------------------------------------------------------------
// 2 - Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  return String(n).split("").map(number).reverse();
}

// -----------------------------------------------------------------------------------------------------------------------
// 3 - Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

function abbrevName(name) {
  return name.split(" ").map((i) => i[0].toUpperCase()).join(".");
}

// -----------------------------------------------------------------------------------------------------------------------
// 4 - Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}

// -----------------------------------------------------------------------------------------------------------------------
// 5 - Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
  return input && input.length ? [
        input.filter((p) => p > 0).length,
        input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
      ]
    : [];
}

// -----------------------------------------------------------------------------------------------------------------------
// 6 - Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(arr, n) {
  return arr.slice(0, n)
}

// -----------------------------------------------------------------------------------------------------------------------
// 7 - Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value. Your expected output is an array of positive integers from 1 to n (inclusive).

function preFizz(n) {
  var output = [];
  for (var i=1; i<=n; i++)
  {
    output.push(i);
  }
  return output;
}

// -----------------------------------------------------------------------------------------------------------------------
// 8 - Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

function toBinary(n){
  return +(n.toString(2))
}

// -----------------------------------------------------------------------------------------------------------------------
// 9 - Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string


function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

// -----------------------------------------------------------------------------------------------------------------------
// 10 - Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = n => {
let arr = [];
  for (let i=n; i>0; i--) {
    arr.push(i);
    } return arr;
};

// -----------------------------------------------------------------------------------------------------------------------
// 11 - Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ). The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0
