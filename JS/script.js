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

String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
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

//-----------------------------------------------------------------------------------------------------------------------

String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
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

function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
	return index % 2 === 0;
  });
}

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

//-----------------------------------------------------------------------------------------------------------------------

String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
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

//-----------------------------------------------------------------------------------------------------------------------

function solution(a, b){
  let strA = a.length
  let strB = b.length
  return strA > strB ? b.concat(a, b) : a.concat(b, a)
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
// .substring() method is used to convert into a normal array


const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"

//-----------------------------------------------------------------------------------------------------------------------


function pigIt(str){
  //Code here
  return str.split(' ').map(word => {
    return word.substring(1) + word[0] + 'ay';
  }).join(' ');
}













//==============================================================================================================================
// FUNCTIONS
//==============================================================================================================================
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Math.pow() method returns the value of a base raised to a power.

Math.pow(4, 2);
// expected output: 16

//-----------------------------------------------------------------------------------------------------------------------

function square(num){
  let num = Math.pow(num, 2);
  return num;
};

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

//-----------------------------------------------------------------------------------------------------------------------

const oddCount = n => Math.floor(n/2) ;

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

//-----------------------------------------------------------------------------------------------------------------------

function enough(cap, on, wait) {
  return (cap - on - wait) > 0 ? 0 : Math.abs(cap - on - wait)
}

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

function finalGrade (exam, projects) {
  return exam > 90 || projects > 10 ? 100 : exam > 75 && projects >= 5 ? 90 : exam > 50 && projects >= 2 ? 75 : 0;
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


// -----------------------------------------------------------------------------------------------------------------------
// 12 - Take an array and remove every second element from the array. Always keep the first element and start removing it with the next element.


function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
	return index % 2 === 0;
  });
}

// -----------------------------------------------------------------------------------------------------------------------
// 13 - Given a number n, return the number of positive odd numbers below n, EASY!

function oddCount(n){
  return Math.floor(n/2);
}


// -----------------------------------------------------------------------------------------------------------------------
// 14 - Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
  //Code here
  return str.split(' ').map(word => {
    return word.substring(1) + word[0] + 'ay';
  }).join(' ');
}







Tech Questions/cold message template

"I'm a freelance web developer who's interested in [whatever things they do that interests me] and I'm really inspired how you [whatever I could cobble together from their LinkedIn resume] and how you got your role in the company. Do you have 15 minutes to chat with me about x, and y?" And then ahead of the meeting, I research them and the company they work for, write down a bunch of questions and go from there.

1. How did you get your foot in the door at _?
2. What education, experience, or training do you find the most useful in your current role? (i.e. did the stuff you learned in college/self-taught help you most or job experience over time)
3. How does your job affect your general lifestyle?
4. What are the typical challenges you face in the tech industry?
5. Do employers care if you don’t have a degree in CS?
6. As a __, what steps would you recommend I take to prepare to enter this field?
7. What tips can you give to make someone stand out, especially in competitive places?
8. Looking back at your careers so far, are there things you wish you would have done differently?
9. Can you suggest a few names of people I could contact for additional info?
10. What is a project you’re excited about working on? 
11. What is one thing that you have always wanted to try but never have?
12. What is something that you have always wanted to learn?
13. What has been the highlight of your year so far? 
14. “How did you land your first job?”
15. “What’s your current company like, and what’s your role there?”
16. “How will I know when I’m ready to start looking for a job?”

Here is a link to one of Leon's past streams, he has some goods in here on networking :meowcoffee: 
https://www.youtube.com/watch?v=OaglXfjsBaE